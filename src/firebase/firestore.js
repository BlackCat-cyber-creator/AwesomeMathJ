import {
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  addDoc,
  query,
  where,
  onSnapshot
} from "firebase/firestore";
import { db } from "./config";
import { generateId } from "../utils/idGenerator";

/**
 * Membersihkan objek dari nilai `undefined` agar aman disimpan di Firestore
 */
export function sanitizeForFirestore(obj) {
  if (obj === undefined) return null;
  if (obj === null || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map(sanitizeForFirestore);
  const clean = {};
  for (const [key, value] of Object.entries(obj)) {
    clean[key] = value !== undefined ? sanitizeForFirestore(value) : null;
  }
  return clean;
}

function requireDb() {
  if (!db) throw new Error("Koneksi Firebase belum siap. Periksa internet lalu muat ulang halaman.");
  return db;
}

// ---------------------------------------------------------------------------
// 1. MURID — teachers/{teacherId}/students/{studentId}
// ---------------------------------------------------------------------------

export function subscribeStudents(teacherId, onData, onError) {
  if (!teacherId || !db) return () => {};
  return onSnapshot(collection(db, "teachers", teacherId, "students"), (snapshot) => {
    const students = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
    students.sort((a, b) => String(a.name || '').localeCompare(String(b.name || '')));
    onData(students);
  }, (err) => {
    console.error("Firestore subscribeStudents error:", err);
    if (onError) onError(err);
  });
}

/** Tambah murid baru atau simpan perubahan murid yang sudah ada. */
export async function saveStudentCloud(teacherId, studentData) {
  if (!teacherId) throw new Error("Teacher ID wajib ada");
  const id = studentData.id || generateId('std');
  const now = new Date().toISOString();
  const payload = sanitizeForFirestore({
    ...studentData,
    id,
    createdAt: studentData.createdAt || now,
    updatedAt: now
  });
  await setDoc(doc(requireDb(), "teachers", teacherId, "students", id), payload, { merge: true });
  return payload;
}

export async function deleteStudentCloud(teacherId, studentId) {
  if (!teacherId || !studentId) throw new Error("Teacher ID dan Student ID wajib ada");
  await deleteDoc(doc(requireDb(), "teachers", teacherId, "students", studentId));
}

// ---------------------------------------------------------------------------
// 2. PR — quests/{questId}
// (Top-level agar link PR bisa dibuka murid tanpa login)
// ---------------------------------------------------------------------------

export function subscribeQuests(teacherId, onData, onError) {
  if (!teacherId || !db) return () => {};
  const q = query(collection(db, "quests"), where("teacherId", "==", teacherId));
  return onSnapshot(q, (snapshot) => {
    const quests = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
    quests.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
    onData(quests);
  }, (err) => {
    console.error("Firestore subscribeQuests error:", err);
    if (onError) onError(err);
  });
}

export async function createQuestCloud(teacherId, questData) {
  if (!teacherId) throw new Error("Teacher ID wajib ada");
  const id = questData.id || generateId('quest');
  const quest = sanitizeForFirestore({
    ...questData,
    id,
    teacherId,
    createdAt: new Date().toISOString(),
    status: "assigned"
  });
  await setDoc(doc(requireDb(), "quests", id), quest);
  return quest;
}

/** Dipakai murid saat membuka link PR. */
export async function getQuestByIdCloud(questId) {
  if (!questId || !db) return null;
  try {
    const snap = await getDoc(doc(db, "quests", questId));
    return snap.exists() ? { id: snap.id, ...snap.data() } : null;
  } catch (err) {
    console.error("Firestore getQuestByIdCloud error:", err);
    return null;
  }
}

/** Tandai PR sedang dikerjakan (murid mulai menjawab). */
export async function markQuestInProgressCloud(questId) {
  if (!questId || !db) return;
  try {
    await updateDoc(doc(db, "quests", questId), { status: "in_progress" });
  } catch (err) {
    console.warn("Firestore markQuestInProgressCloud error:", err);
  }
}

/**
 * Kumpulkan jawaban murid. Hanya field status/lastScore/submittedAt/answers yang
 * boleh diubah murid (lihat firestore.rules).
 * answers: { responses, results, correct, gradable }
 */
export async function submitQuestAnswersCloud(questId, { score, answers }) {
  const submittedAt = new Date().toISOString();
  await updateDoc(doc(requireDb(), "quests", questId), sanitizeForFirestore({
    status: "completed",
    lastScore: score,
    submittedAt,
    answers
  }));
  return submittedAt;
}

export async function deleteQuestCloud(questId) {
  if (!questId) return;
  await deleteDoc(doc(requireDb(), "quests", questId));
}

// ---------------------------------------------------------------------------
// 3. LAPORAN SOAL — reports/{reportId}
// Siapa pun boleh mengirim laporan (tanpa login); hanya guru yang login yang bisa membaca.
// ---------------------------------------------------------------------------

/** payload dari buildReportPayload (src/utils/reports.js). */
export async function createReportCloud(payload) {
  if (!payload) throw new Error("Data laporan tidak lengkap");
  await addDoc(collection(requireDb(), "reports"), payload);
}

export function subscribeReports(onData, onError) {
  if (!db) return () => {};
  return onSnapshot(collection(db, "reports"), (snapshot) => {
    onData(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
  }, (err) => {
    console.error("Firestore subscribeReports error:", err);
    if (onError) onError(err);
  });
}

export async function deleteReportCloud(reportId) {
  if (!reportId) return;
  await deleteDoc(doc(requireDb(), "reports", reportId));
}
