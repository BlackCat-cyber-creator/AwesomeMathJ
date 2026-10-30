/**
 * Penulisan bab IPA yang ringkas dan mudah diedit guru: satu bab = satu file
 * (src/data/ipa/kelasN/babM-*.js). Fungsi di sini mengubah tulisan ringkas
 * menjadi bentuk data yang sama dengan bab Matematika.
 *
 * Aturan menulis soal (dijaga oleh tests/ipaContent.test.js):
 * - 15 soal per bab: 5 Dasar, 5 Sedang, 5 Tantangan (urut mudah → sulit).
 * - 4 pilihan, satu kunci; pembahasan menjelaskan mengapa kunci benar.
 * - Soal berdiri sendiri (tidak merujuk soal lain) dan sesuai CP 046/2025 Fase D.
 */

const KEYS = ['A', 'B', 'C', 'D'];

/**
 * Satu soal pilihan ganda.
 * @param {object} s
 * @param {'Dasar'|'Sedang'|'Tantangan'} s.level
 * @param {string} s.q        teks soal (boleh LaTeX $...$)
 * @param {string[]} s.options 4 pilihan, urut A–D
 * @param {'A'|'B'|'C'|'D'} s.answer
 * @param {string} s.hint
 * @param {string} s.solution pembahasan
 * @param {object} [s.visual] { type, props } gambar stimulus
 */
export function soal({ level, q, options, answer, hint, solution, visual }) {
  return {
    category: 'Latihan',
    difficulty: level,
    question: q,
    options: options.map((text, i) => ({ key: KEYS[i], text })),
    correctAnswer: answer,
    hint,
    bestSolution: solution,
    ...(visual ? { visual } : {})
  };
}

/**
 * Satu bab IPA. ID bab: ipa{kelas}-bab{n}-{slug}; ID soal: ipa{kelas}-b{n}-{urutan}.
 * `summary` memakai 6 bagian yang sama dengan Matematika:
 * overview, coreConcepts ("Subbab: isi"), keyFormulas, workedExamples, misconceptions, tutorTip.
 */
export function bab({ grade, number, slug, title, element, summary, questions }) {
  return {
    id: `ipa${grade}-bab${number}-${slug}`,
    title: `Bab ${number}: ${title}`,
    subject: 'ipa',
    curriculum: 'merdeka',
    element: element || null,
    summary,
    questions: questions.map((item, i) => ({ id: `ipa${grade}-b${number}-${i + 1}`, ...item }))
  };
}

/** Data satu kelas IPA, bentuknya sama dengan src/data/grades/gradeX.js. */
export function kelas({ grade, description, chapters }) {
  return {
    subject: 'ipa',
    grade,
    level: 'SMP',
    phase: 'Fase D',
    description,
    chapters
  };
}
