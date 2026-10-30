/**
 * questBuilder:
 * Menyusun PR dari satu bab: seluruh soal bab, diurutkan dari mudah ke sulit.
 * Fungsi murni (tanpa Firebase) agar mudah diuji.
 */

const DIFFICULTY_RANK = {
  mudah: 1,
  dasar: 1,
  sedang: 2,
  menengah: 2,
  lanjut: 3,
  tantangan: 3,
  olimpiade: 4
};

export function difficultyRank(difficulty) {
  return DIFFICULTY_RANK[String(difficulty || '').trim().toLowerCase()] || 2;
}

/** Urutkan soal mudah → sulit; urutan asli dipertahankan untuk tingkat yang sama. */
export function sortByDifficulty(questions = []) {
  return questions
    .map((q, i) => ({ q, i }))
    .sort((a, b) => difficultyRank(a.q.difficulty) - difficultyRank(b.q.difficulty) || a.i - b.i)
    .map(({ q }) => q);
}

/** Jalur belajar murid: 'reguler' atau 'amc8' | 'amc10' | 'amc12'. */
export const STUDENT_TRACKS = [
  { value: 'reguler', label: 'Reguler (Kurikulum Merdeka)' },
  { value: 'amc8', label: 'Olimpiade AMC 8' },
  { value: 'amc10', label: 'Olimpiade AMC 10' },
  { value: 'amc12', label: 'Olimpiade AMC 12' }
];

export function trackLabel(track) {
  return (STUDENT_TRACKS.find((t) => t.value === track) || STUDENT_TRACKS[0]).label;
}

export function amcLevelOfTrack(track) {
  const m = String(track || '').match(/^amc(\d+)$/);
  return m ? Number(m[1]) : null;
}

/**
 * Bangun payload PR.
 * source: { kind: 'merdeka' | 'ipa', grade, chapter } atau { kind: 'amc', level, chapter }
 */
export function buildQuest({ student, source, deadline }) {
  const { chapter } = source;
  const isAmc = source.kind === 'amc';
  const questions = sortByDifficulty(chapter.questions || []);

  return {
    title: chapter.title,
    chapterId: chapter.id,
    chapterTitle: chapter.title,
    // PrintableWorksheet & ChapterSolutionView membaca grade/level untuk tautan QR
    grade: isAmc ? source.level : Number(source.grade),
    ...(isAmc
      ? { level: `AMC ${source.level}`, levelTitle: `AMC ${source.level}`, trackLabel: chapter.domain || 'Olimpiade' }
      : { track: chapter.track || null, trackLabel: chapter.trackLabel || null }),
    source: isAmc ? 'amc' : source.kind === 'ipa' ? 'ipa' : 'merdeka',
    subject: source.kind === 'ipa' ? 'ipa' : 'matematika',
    studentId: student.id,
    studentName: student.name,
    deadline: deadline || null,
    questions
  };
}

/** Pesan WhatsApp untuk murid & orang tua. */
export function buildWhatsAppMessage({ quest, teacherName, origin, formatDate }) {
  const link = `${origin}/quest/${quest.id}`;
  const deadlineLine = quest.deadline ? `\n📅 Tenggat: ${formatDate(quest.deadline)}` : '';
  const sourceLine = quest.source === 'amc' ? ` (${quest.level})` : quest.source === 'ipa' ? ' (IPA)' : '';
  return [
    `Halo *${quest.studentName}* & Bapak/Ibu,`,
    '',
    `Berikut PR dari *${teacherName}*:`,
    `📚 ${quest.chapterTitle}${sourceLine}`,
    `📝 ${quest.questions.length} soal, urut dari mudah ke sulit${deadlineLine}`,
    '',
    `Kerjakan di sini (tanpa instal aplikasi):`,
    link,
    '',
    'Jawaban otomatis terkirim ke guru setelah tombol *Kumpulkan* ditekan. Semangat! 💪'
  ].join('\n');
}

/** Nomor WhatsApp format internasional Indonesia (08xx → 628xx). */
export function normalizePhone(phone) {
  let clean = String(phone || '').replace(/\D/g, '');
  if (clean.startsWith('0')) clean = `62${clean.slice(1)}`;
  return clean;
}
