/**
 * contentAudit:
 * Fungsi murni untuk memeriksa konsistensi konten soal.
 * Dipakai oleh test otomatis (tests/contentAudit.test.js) dan laporan audit,
 * sehingga gambar yang tidak sesuai soal atau soal di luar cakupan kelas
 * tertangkap sebelum sampai ke murid.
 */

const SUPERSCRIPTS = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9' };
const SUBSCRIPTS = /[₀-₉]/g;

/**
 * Ambil semua bilangan dari teks soal/gambar dalam bentuk string ternormalisasi.
 * - Pemisah ribuan Indonesia "3.676" -> "3676", "Rp48.000,00" -> "48000"
 * - Desimal koma "2,5" atau "2{,}5" -> "2.5"
 * - Pecahan LaTeX \frac{3}{4} -> "3", "4"
 * - Pangkat unicode "10³" -> "10", "3"; indeks bawah (U₁) diabaikan
 */
export function extractNumbers(text) {
  if (text === null || text === undefined) return [];
  let s = String(text)
    // Label suku barisan (U1, U₂, ...) bukan data soal
    .replace(/\bU[0-9₀-₉]+/g, ' ')
    // Pangkat satuan (cm², m³) bukan data soal
    .replace(/([a-zA-Z])[²³]/g, '$1')
    .replace(/\\text\{\s*(cm|m|dm|km|mm)\s*\}\^\{?[23]\}?/g, ' $1 ')
    .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, (c) => ` ${SUPERSCRIPTS[c]} `)
    .replace(SUBSCRIPTS, '')
    .replace(/\{,\}/g, ',')
    .replace(/\\[a-zA-Z]+/g, ' ')
    .replace(/[{}]/g, ' ');

  // Hapus ",00" pada nominal rupiah
  s = s.replace(/(\d),00\b/g, '$1');
  // Pemisah ribuan bertitik (minimal satu kelompok 3 digit)
  s = s.replace(/(?<![\d.])\d{1,3}(?:\.\d{3})+(?!\d)/g, (m) => m.replace(/\./g, ''));
  // Desimal koma
  s = s.replace(/(\d),(\d)/g, '$1.$2');

  const found = s.match(/\d+(?:\.\d+)?/g) || [];
  return found.map((n) => String(Number(n)));
}

/** Ambil teks yang benar-benar terlihat dari markup SVG/HTML hasil render. */
export function visibleTextFromMarkup(markup) {
  const parts = [];
  const re = />([^<>]+)</g;
  let m;
  while ((m = re.exec(markup)) !== null) {
    const t = m[1].replace(/&[a-z#0-9]+;/gi, ' ').trim();
    if (t) parts.push(t);
  }
  return parts;
}

const ALWAYS_ALLOWED = new Set(['0', '1']);

/**
 * Angka yang muncul di gambar tetapi tidak ada di teks soal.
 * `allowed` dipakai untuk angka sumbu/grid yang memang bukan data soal.
 */
export function numbersOnlyInVisual(questionText, visualTexts, allowed = []) {
  const inQuestion = new Set(extractNumbers(questionText));
  const allow = new Set([...ALWAYS_ALLOWED, ...allowed.map(String)]);
  const extra = new Set();
  for (const t of visualTexts) {
    for (const n of extractNumbers(t)) {
      if (!inQuestion.has(n) && !allow.has(n)) extra.add(n);
    }
  }
  return [...extra];
}

/**
 * Topik yang belum diajarkan pada suatu kelas SD menurut CP Kurikulum Merdeka
 * (Keputusan Kepala BSKAP 046/H/KR/2025). Fase B = Kelas 3–4, Fase C = Kelas 5–6.
 * Fase B: data hanya tabel, piktogram, diagram batang; geometri sebatas ciri bangun datar.
 * Ukuran pemusatan data (modus, median, rata-rata) dan pengukuran sudut baru di Fase C+.
 */
export const OUT_OF_SCOPE_RULES = {
  4: [
    { topic: 'Rata-rata (Fase C/D)', pattern: /rata-rata/i },
    { topic: 'Modus/median (Fase C/D)', pattern: /\bmodus\b|\bmedian\b/i },
    { topic: 'Persentase data (Fase C)', pattern: /berapa persen|\d+\s*%/i },
    { topic: 'Ukuran sudut dalam derajat (Fase C)', pattern: /°|\bderajat\b/i },
    { topic: 'Bilangan jutaan (Fase C)', pattern: /\b\d{1,3}\.\d{3}\.\d{3}\b/ }
  ]
};

export function findOutOfScope(grade, questionText) {
  const rules = OUT_OF_SCOPE_RULES[grade] || [];
  return rules.filter((r) => r.pattern.test(questionText)).map((r) => r.topic);
}

/**
 * Gambar membocorkan jawaban jika semua angka pada opsi benar (yang tidak
 * disebut di soal) tercetak di gambar.
 */
export function leaksAnswer(questionText, correctOptionText, visualTexts, axisNumbers = []) {
  if (!correctOptionText) return false;
  // Angka sumbu/grid selalu tercetak, jadi tidak dihitung sebagai bocoran
  const inQuestion = new Set([...extractNumbers(questionText), ...axisNumbers.map(String)]);
  const answerNums = extractNumbers(correctOptionText).filter((n) => !inQuestion.has(n) && !ALWAYS_ALLOWED.has(n));
  if (answerNums.length === 0) return false;
  const shown = new Set(visualTexts.flatMap((t) => extractNumbers(t)));
  return answerNums.every((n) => shown.has(n));
}

/**
 * Untuk jawaban berupa kata (mis. "Belah ketupat"): bocor jika kata kunci jawaban
 * yang tidak disebut di soal muncul pada judul/label gambar.
 */
export function leaksAnswerWords(questionText, correctOptionText, visualTexts) {
  if (!correctOptionText || /\d/.test(correctOptionText)) return [];
  const q = String(questionText).toLowerCase();
  const shown = visualTexts.join(' ').toLowerCase();
  const words = String(correctOptionText).toLowerCase().match(/[a-z-]{4,}/g) || [];
  return words.filter((w) => shown.includes(w) && !q.includes(w));
}
