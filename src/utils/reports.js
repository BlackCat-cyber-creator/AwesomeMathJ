/**
 * Laporan "soal salah" dari pengunjung, murid, atau guru.
 * Disimpan di Firestore `reports/{id}` (lihat firestore.rules) dan ditinjau di Studio Guru.
 * Tidak menyimpan nama/email pelapor.
 */

export const REPORT_CATEGORIES = [
  { id: 'gambar', label: 'Gambar tidak sesuai soal' },
  { id: 'kunci', label: 'Kunci jawaban / pembahasan salah' },
  { id: 'kelas', label: 'Bukan materi kelas ini' },
  { id: 'soal', label: 'Soal tidak jelas / salah ketik' },
  { id: 'lainnya', label: 'Lainnya' }
];

export const REPORT_NOTE_MAX = 500;
const REPORTED_KEY = 'amj_reported_questions';

export function reportCategoryLabel(id) {
  return REPORT_CATEGORIES.find((c) => c.id === id)?.label || 'Lainnya';
}

/** Anchor stabil per soal, dipakai di halaman bab: /matematika/kelas-4/bab2-pecahan#soal-sd4-b2-3 */
export function questionAnchor(questionId) {
  return `soal-${String(questionId || '').replace(/[^A-Za-z0-9_-]/g, '')}`;
}

/**
 * Payload laporan yang lolos aturan Firestore.
 * Mengembalikan null bila data wajib tidak lengkap.
 */
export function buildReportPayload({ questionId, chapterId, context, category, note, path, questionNumber }) {
  if (!questionId || !REPORT_CATEGORIES.some((c) => c.id === category)) return null;
  return {
    questionId: String(questionId).slice(0, 120),
    chapterId: String(chapterId || '').slice(0, 120),
    context: ['handbook', 'amc', 'quest'].includes(context) ? context : 'handbook',
    category,
    note: String(note || '').trim().slice(0, REPORT_NOTE_MAX),
    path: String(path || '').slice(0, 300),
    questionNumber: Number.isInteger(questionNumber) ? questionNumber : 0,
    status: 'open',
    createdAt: new Date().toISOString()
  };
}

/** Kelompokkan laporan per soal, terbaru dulu (untuk Studio Guru). */
export function groupReportsByQuestion(reports) {
  const groups = new Map();
  for (const r of reports) {
    const g = groups.get(r.questionId) || { questionId: r.questionId, path: r.path, chapterId: r.chapterId, questionNumber: r.questionNumber, reports: [] };
    g.reports.push(r);
    if (!g.path && r.path) g.path = r.path;
    groups.set(r.questionId, g);
  }
  const latest = (g) => Math.max(...g.reports.map((r) => new Date(r.createdAt || 0).getTime()));
  return [...groups.values()]
    .map((g) => ({ ...g, reports: g.reports.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)) }))
    .sort((a, b) => latest(b) - latest(a));
}

export function getReportedQuestions() {
  try {
    return JSON.parse(localStorage.getItem(REPORTED_KEY) || '[]');
  } catch {
    return [];
  }
}

export function markQuestionReported(questionId) {
  try {
    const list = getReportedQuestions().filter((id) => id !== questionId);
    list.push(questionId);
    localStorage.setItem(REPORTED_KEY, JSON.stringify(list.slice(-200)));
  } catch {
    // Penyimpanan perangkat tidak tersedia: abaikan
  }
}
