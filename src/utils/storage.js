/**
 * storage:
 * Utilitas kecil di sisi perangkat. Data guru (murid & PR) disimpan di Firestore;
 * yang tersimpan lokal hanya salinan PR untuk cetak/latihan dan jawaban sementara murid.
 */

const QUEST_CACHE_PREFIXES = ['mathquest_worksheet_', 'mathquest_practice_', 'awesomemathj_quest_'];
const DRAFT_PREFIX = 'awesomemathj_draft_';

// Tenggat bawaan: 3 hari dari sekarang
export function getDefaultDeadlineDate() {
  const d = new Date();
  d.setDate(d.getDate() + 3);
  return d.toISOString().split('T')[0];
}

export function formatIndonesianDate(dateStr) {
  if (!dateStr) return '-';
  try {
    const d = new Date(dateStr);
    if (Number.isNaN(d.getTime())) return dateStr;
    const months = [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  } catch {
    return dateStr;
  }
}

/** Salinan PR yang tersimpan di perangkat ini (dari cetak, latihan mandiri, atau unduhan sebelumnya). */
export function getQuestById(questId) {
  if (!questId) return null;
  for (const prefix of QUEST_CACHE_PREFIXES) {
    try {
      const raw = localStorage.getItem(`${prefix}${questId}`);
      if (raw) return JSON.parse(raw);
    } catch {
      // abaikan cache rusak
    }
  }
  return null;
}

/** Jawaban sementara murid agar tidak hilang saat halaman dimuat ulang. */
export function getDraftResponses(questId) {
  try {
    const raw = localStorage.getItem(`${DRAFT_PREFIX}${questId}`);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveDraftResponses(questId, responses) {
  try {
    localStorage.setItem(`${DRAFT_PREFIX}${questId}`, JSON.stringify(responses));
  } catch {
    // mode privat: jawaban tetap ada selama halaman terbuka
  }
}

export function clearDraftResponses(questId) {
  try {
    localStorage.removeItem(`${DRAFT_PREFIX}${questId}`);
  } catch {
    // abaikan
  }
}
