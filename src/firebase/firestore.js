import { 
  collection, 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  onSnapshot, 
  writeBatch,
  increment
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
    if (value !== undefined) {
      clean[key] = sanitizeForFirestore(value);
    } else {
      clean[key] = null;
    }
  }
  return clean;
}

// ---------------------------------------------------------------------------
// 1. DATA SISWA (CRM) — Sub-koleksi: teachers/{teacherId}/students/{studentId}
// ---------------------------------------------------------------------------

/**
 * Berlangganan (real-time listener) daftar murid pengajar
 */
export function subscribeStudents(teacherId, onData, onError) {
  if (!teacherId) return () => {};
  const studentsCol = collection(db, "teachers", teacherId, "students");
  
  return onSnapshot(studentsCol, (snapshot) => {
    const students = [];
    snapshot.forEach((docSnap) => {
      students.push({ id: docSnap.id, ...docSnap.data() });
    });
    // Urutkan berdasarkan waktu buat atau nama jika ada
    students.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0) || a.name.localeCompare(b.name));
    onData(students);
  }, (err) => {
    console.error("Firestore subscribeStudents error:", err);
    if (onError) onError(err);
  });
}

/**
 * Tambah murid baru ke Firestore
 */
export async function addStudentCloud(teacherId, studentData) {
  if (!teacherId) throw new Error("Teacher ID wajib ada");
  
  const studentId = studentData.id || generateId('std');
  const docRef = doc(db, "teachers", teacherId, "students", studentId);
  
  const newStudent = sanitizeForFirestore({
    ...studentData,
    id: studentId,
    streak: studentData.streak || 0,
    totalXp: studentData.totalXp || 0,
    lastActive: studentData.lastActive || null,
    createdAt: studentData.createdAt || new Date().toISOString()
  });

  await setDoc(docRef, newStudent);
  return newStudent;
}

/**
 * Update data murid di Firestore
 */
export async function updateStudentCloud(teacherId, studentData) {
  if (!teacherId || !studentData.id) throw new Error("Teacher ID dan Student ID wajib ada");
  const docRef = doc(db, "teachers", teacherId, "students", studentData.id);
  await updateDoc(docRef, sanitizeForFirestore({
    ...studentData,
    updatedAt: new Date().toISOString()
  }));
  return studentData;
}

/**
 * Hapus data murid di Firestore
 */
export async function deleteStudentCloud(teacherId, studentId) {
  if (!teacherId || !studentId) throw new Error("Teacher ID dan Student ID wajib ada");
  const docRef = doc(db, "teachers", teacherId, "students", studentId);
  await deleteDoc(docRef);
}

// ---------------------------------------------------------------------------
// 2. TUGAS PR / QUEST — Koleksi Utama: quests/{questId}
// (Disimpan di top-level agar link pengerjaan bisa dibuka murid tanpa login guru)
// ---------------------------------------------------------------------------

/**
 * Berlangganan (real-time listener) daftar tugas PR milik guru
 */
export function subscribeQuests(teacherId, onData, onError) {
  if (!teacherId) return () => {};
  const questsCol = collection(db, "quests");
  const q = query(questsCol, where("teacherId", "==", teacherId));

  return onSnapshot(q, (snapshot) => {
    const quests = [];
    snapshot.forEach((docSnap) => {
      quests.push({ id: docSnap.id, ...docSnap.data() });
    });
    // Urutkan dari yang terbaru
    quests.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
    onData(quests);
  }, (err) => {
    console.error("Firestore subscribeQuests error:", err);
    if (onError) onError(err);
  });
}

/**
 * Buat tugas PR baru di Firestore
 */
export async function createQuestCloud(teacherId, questData) {
  const questId = questData.id || generateId('quest');
  const docRef = doc(db, "quests", questId);

  const newQuest = sanitizeForFirestore({
    ...questData,
    id: questId,
    teacherId: teacherId || questData.teacherId || "teacher-default",
    createdAt: questData.createdAt || new Date().toISOString(),
    status: questData.status || "assigned",
    deadline: questData.deadline || null
  });

  await setDoc(docRef, newQuest);
  return newQuest;
}

/**
 * Ambil data Quest berdasarkan ID (digunakan oleh murid via link ?questId=...)
 */
export async function getQuestByIdCloud(questId) {
  if (!questId) return null;
  try {
    const docRef = doc(db, "quests", questId);
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      return { id: snap.id, ...snap.data() };
    }
    return null;
  } catch (err) {
    console.error("Firestore getQuestByIdCloud error:", err);
    return null;
  }
}

/**
 * Update status quest (misal: "in_progress", "completed")
 */
export async function updateQuestStatusCloud(questId, status) {
  if (!questId) return;
  try {
    const docRef = doc(db, "quests", questId);
    await updateDoc(docRef, { status });
  } catch (err) {
    console.error("Firestore updateQuestStatusCloud error:", err);
  }
}

/**
 * Hapus tugas PR di Firestore
 */
export async function deleteQuestCloud(questId) {
  if (!questId) return;
  const docRef = doc(db, "quests", questId);
  await deleteDoc(docRef);
}

// ---------------------------------------------------------------------------
// 3. SUBMISSI / EVALUASI — submissions/{submissionId}
// ---------------------------------------------------------------------------

/**
 * Simpan hasil pengerjaan latihan murid ke Firestore
 */
export async function submitQuestResultCloud(submissionData) {
  const submissionId = submissionData.id || generateId('sub');
  const now = new Date().toISOString();
  const today = now.split("T")[0];

  const newSubmission = sanitizeForFirestore({
    ...submissionData,
    id: submissionId,
    submittedAt: now
  });

  // 1. Simpan ke koleksi submissions
  const subDoc = doc(db, "submissions", submissionId);
  await setDoc(subDoc, newSubmission);

  // 2. Update status quest jika ada questId
  if (submissionData.questId) {
    try {
      const questDoc = doc(db, "quests", submissionData.questId);
      await updateDoc(questDoc, sanitizeForFirestore({
        status: "completed",
        lastScore: submissionData.score,
        submittedAt: now,
        answers: submissionData.answersState || null
      }));
    } catch (e) {
      console.warn("Could not update quest doc:", e);
    }
  }

  // 3. Update XP murid jika teacherId dan studentId terdata (secara atomik tanpa read)
  if (submissionData.teacherId && submissionData.studentId) {
    try {
      const studentDoc = doc(db, "teachers", submissionData.teacherId, "students", submissionData.studentId);
      await updateDoc(studentDoc, {
        totalXp: increment(submissionData.earnedXp || 50),
        lastActive: today
      });
    } catch (e) {
      console.warn("Could not update student profile:", e);
    }
  }

  return newSubmission;
}

// ---------------------------------------------------------------------------
// 4. MIGRATION & BULK SYNC
// ---------------------------------------------------------------------------

/**
 * Mengunggah data awal (demo murid / data lokal yang ada) ke Firebase Firestore
 */
export async function migrateLocalDataToCloud(teacherId, localStudents = [], localQuests = []) {
  if (!teacherId) throw new Error("Teacher ID wajib disertakan untuk sinkronisasi");

  const batch = writeBatch(db);

  // Upload students
  localStudents.forEach((std) => {
    const stdRef = doc(db, "teachers", teacherId, "students", std.id);
    batch.set(stdRef, sanitizeForFirestore({
      ...std,
      createdAt: std.createdAt || new Date().toISOString()
    }), { merge: true });
  });

  // Upload quests
  localQuests.forEach((q) => {
    const qRef = doc(db, "quests", q.id);
    batch.set(qRef, sanitizeForFirestore({
      ...q,
      teacherId,
      createdAt: q.createdAt || new Date().toISOString()
    }), { merge: true });
  });

  await batch.commit();
  return { studentsCount: localStudents.length, questsCount: localQuests.length };
}
