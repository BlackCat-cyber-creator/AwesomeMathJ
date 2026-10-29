/**
 * progress:
 * Progres belajar mandiri pengunjung publik, disimpan di perangkat (localStorage).
 * Tanpa akun: siapa pun bisa belajar dan hasil latihannya tetap tersimpan di
 * browser yang sama.
 */
const PROGRESS_KEY = 'awesomemathj_progress_v1';
export const PROGRESS_EVENT = 'awesomemathj:progress';

export function getProgress() {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

/** Simpan hasil latihan satu bab; nilai terbaik dipertahankan. */
export function saveChapterResult(chapterId, result) {
  if (!chapterId) return getProgress();
  const progress = getProgress();
  const previous = progress[chapterId];
  const best = previous && previous.bestScore > result.score ? previous.bestScore : result.score;
  progress[chapterId] = { ...result, bestScore: best, completedAt: new Date().toISOString() };
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  } catch {
    // Penyimpanan diblokir (mode privat): progres hanya berlaku selama sesi ini
  }
  try {
    window.dispatchEvent(new CustomEvent(PROGRESS_EVENT));
  } catch {
    // Lingkungan tanpa window (test/SSR)
  }
  return progress;
}
