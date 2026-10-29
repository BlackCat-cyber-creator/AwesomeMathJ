/**
 * Kelas 6 Bab 3 (Kubus dan Balok) diselaraskan dengan CP Matematika 046/H/KR/2025.
 *
 * Fase C: "mengkonstruksi dan mengurai bangun ruang (kubus, balok, dan gabungannya),
 * mengenali visualisasi spasial (bagian depan, atas, dan samping), membandingkan
 * karakteristik antar bangun ruang". Volume dengan satuan baku bilangan cacah sudah
 * ada sejak Fase B (menghitung kubus satuan).
 * Fase D (SMP): luas permukaan, akar pangkat tiga, dan pengaruh perubahan ukuran
 * secara proporsional terhadap volume → soal & materi tersebut diganti.
 *
 * Kunci A/B/C/D tetap sama. Idempoten: node pipeline/migrations/2026-10-cp2025-kubus-balok.mjs
 */
import { loadGrade, saveGrade } from './lib.mjs';

const opts = (a, b, c, d) => [
  { key: 'A', text: a },
  { key: 'B', text: b },
  { key: 'C', text: c },
  { key: 'D', text: d }
];
const steps = (lines, key) => `**Langkah Penyelesaian Terstruktur:**\n${lines}\n(Opsi ${key}).`;
const box = (title, caption, lengthLabel, widthLabel, heightLabel, targetLabel) => ({
  type: 'solid-3d',
  props: { title, caption, solid: 'box', lengthLabel, widthLabel, heightLabel, targetLabel }
});

const QUESTIONS = {
  'sd6-b3-3': {
    question: 'Sebuah bangun disusun dari kubus satuan. Lapisan paling bawah berisi 3 baris dengan 2 kubus pada setiap baris, lalu disusun sebanyak 4 lapis. Banyak kubus satuan yang digunakan adalah...',
    options: opts('20 kubus', '24 kubus', '9 kubus', '18 kubus'),
    correctAnswer: 'B',
    hint: 'Hitung dulu banyak kubus pada satu lapis, lalu kalikan dengan banyak lapis.',
    bestSolution: steps('1. Satu lapis: $3 \\times 2 = 6$ kubus.\n2. Empat lapis: $6 \\times 4 = 24$ kubus.', 'B'),
    visual: box('Susunan Kubus Satuan', '*Satu lapis 3 × 2 kubus, disusun 4 lapis', '3 kubus', '2 kubus', '4 lapis', 'Kubus = ?')
  },
  'sd6-b3-8': {
    question: 'Andi menyusun kubus-kubus satuan menjadi sebuah kubus besar. Setiap rusuk kubus besar terdiri atas 3 kubus satuan. Banyak kubus satuan yang diperlukan Andi adalah...',
    options: opts('9 kubus', '27 kubus', '18 kubus', '12 kubus'),
    correctAnswer: 'B',
    hint: 'Kubus besar terdiri atas 3 lapis, dan setiap lapis berisi $3 \\times 3$ kubus.',
    bestSolution: steps('1. Satu lapis: $3 \\times 3 = 9$ kubus.\n2. Tiga lapis: $9 \\times 3 = 27$ kubus.', 'B'),
    visual: box('Kubus dari Kubus Satuan', '*Setiap rusuk terdiri atas 3 kubus satuan', '3 kubus', '3 kubus', '3 kubus', 'Kubus = ?')
  },
  'sd6-b3-9': {
    question: 'Sebuah bangun ruang terlihat berbentuk persegi yang sama besar jika dilihat dari depan, dari samping, maupun dari atas. Bangun ruang tersebut adalah...',
    options: opts('Kubus', 'Balok dengan panjang, lebar, dan tinggi berbeda', 'Tabung', 'Limas segiempat'),
    correctAnswer: 'A',
    hint: 'Bangun ruang mana yang semua sisinya berbentuk persegi yang sama?',
    bestSolution: steps('Semua sisi kubus berbentuk persegi yang sama, sehingga tampak depan, samping, dan atas sama-sama persegi. Bangun tersebut adalah **kubus**.', 'A')
  },
  'sd6-b3-10': {
    question: 'Sebuah kotak berbentuk balok (bukan kubus) digunting pada beberapa rusuknya lalu dibuka menjadi jaring-jaring. Bangun datar yang terlihat pada jaring-jaring tersebut adalah...',
    options: opts('6 persegi yang sama besar', '4 persegi panjang dan 2 segitiga', '6 persegi panjang yang terdiri atas 3 pasang sama besar', '5 persegi panjang'),
    correctAnswer: 'C',
    hint: 'Balok memiliki 6 sisi, dan sisi-sisi yang berhadapan sama besar.',
    bestSolution: steps('Balok memiliki 6 sisi berbentuk persegi panjang. Sisi yang berhadapan sama besar, sehingga jaring-jaringnya terdiri atas **6 persegi panjang (3 pasang sama besar)**.', 'C'),
    visual: box('Balok', '*Sisi-sisi balok yang berhadapan sama besar', 'p', 'l', 't', 'Jaring-jaring?')
  },
  'sd6-b3-14': {
    question: 'Sebuah kardus berbentuk balok berukuran panjang 15 cm, lebar 10 cm, dan tinggi 8 cm. Bidang sisi kardus yang paling luas berukuran...',
    options: opts('15 cm × 10 cm', '15 cm × 8 cm', '10 cm × 8 cm', '8 cm × 8 cm'),
    correctAnswer: 'A',
    hint: 'Ada tiga macam sisi: alas (p × l), depan (p × t), dan samping (l × t). Bandingkan luasnya.',
    bestSolution: steps('1. Alas: $15 \\times 10 = 150\\text{ cm}^2$.\n2. Depan: $15 \\times 8 = 120\\text{ cm}^2$.\n3. Samping: $10 \\times 8 = 80\\text{ cm}^2$.\nSisi terluas berukuran **15 cm × 10 cm**.', 'A'),
    visual: box('Kardus Balok', '*Panjang 15 cm, lebar 10 cm, tinggi 8 cm', 'p = 15 cm', 'l = 10 cm', 't = 8 cm', 'Sisi terluas?')
  },
  'sd6-b3-15': {
    question: 'Bangun gabungan dibuat dari dua balok kubus satuan. Balok bawah berukuran 4 × 3 × 1 kubus dan balok atas berukuran 4 × 3 × 2 kubus. Banyak kubus satuan pada bangun gabungan tersebut adalah...',
    options: opts('30 kubus', '36 kubus', '24 kubus', '12 kubus'),
    correctAnswer: 'B',
    hint: 'Hitung banyak kubus setiap balok, lalu jumlahkan.',
    bestSolution: steps('1. Balok bawah: $4 \\times 3 \\times 1 = 12$ kubus.\n2. Balok atas: $4 \\times 3 \\times 2 = 24$ kubus.\n3. Gabungan: $12 + 24 = 36$ kubus.', 'B')
  },
  'sd6-b3-16': {
    question: 'Sebuah balok tersusun dari 60 kubus satuan. Jika panjangnya 5 kubus dan lebarnya 4 kubus, tinggi balok tersebut adalah...',
    options: opts('4 kubus', '2 kubus', '5 kubus', '3 kubus'),
    correctAnswer: 'D',
    hint: 'Satu lapis berisi $5 \\times 4$ kubus. Berapa lapis yang dibutuhkan untuk 60 kubus?',
    bestSolution: steps('1. Satu lapis: $5 \\times 4 = 20$ kubus.\n2. Banyak lapis: $60 : 20 = 3$.\nTinggi balok adalah **3 kubus**.', 'D')
  },
  'sd6-b3-17': {
    question: 'Sebuah kolam renang berbentuk balok berukuran panjang 20 m, lebar 10 m, dan kedalaman 2 m. Banyak air yang dibutuhkan untuk mengisi kolam sampai penuh adalah...',
    options: opts('200 m³', '600 m³', '400 m³', '32 m³'),
    correctAnswer: 'C',
    hint: 'Volume balok = panjang × lebar × tinggi (kedalaman).',
    bestSolution: steps('$$V = 20 \\times 10 \\times 2 = 400\\text{ m}^3$$', 'C'),
    visual: box('Kolam Renang Balok', '*Panjang 20 m, lebar 10 m, kedalaman 2 m', 'p = 20 m', 'l = 10 m', 'kedalaman 2 m', 'Volume = ?')
  },
  'sd6-b3-19': {
    question: 'Balok A berukuran 12 cm × 8 cm × 6 cm. Balok B berukuran 10 cm × 10 cm × 6 cm. Pernyataan yang benar adalah...',
    options: opts('Volume balok B lebih besar 24 cm³', 'Volume balok A lebih besar 24 cm³', 'Volume kedua balok sama', 'Volume balok B lebih besar 4 cm³'),
    correctAnswer: 'A',
    hint: 'Hitung volume masing-masing balok, lalu bandingkan.',
    bestSolution: steps('1. Balok A: $12 \\times 8 \\times 6 = 576\\text{ cm}^3$.\n2. Balok B: $10 \\times 10 \\times 6 = 600\\text{ cm}^3$.\n3. Selisih: $600 - 576 = 24\\text{ cm}^3$, balok B lebih besar.', 'A')
  }
};

const VISUAL_REMOVALS = new Set(['sd6-b3-9']);

const SUMMARY = (s) => ({
  ...s,
  overview: 'Kotak kado ulang tahun, kardus kemasan mi instan, akuarium ikan hias, hingga dadu permainan memiliki bentuk ruang tiga dimensi yang beraturan. Bentuk-bentuk ini dinamakan Kubus dan Balok. Peti kemas di pelabuhan pun dibuat berbentuk balok agar mudah disusun rapi dan memaksimalkan ruang muat kapal.\n\nMengenal kubus dan balok membantu kita dalam banyak kegiatan: menyusun kardus di bagasi mobil, menghitung berapa kotak kecil yang muat di dalam kotak besar, atau memperkirakan banyak air untuk mengisi bak mandi. Kita juga belajar membayangkan bentuk benda dari berbagai arah, misalnya tampak depan, tampak samping, dan tampak atas.\n\nBab ini membimbing siswa Kelas 6 mengenali ciri-ciri kubus dan balok (sisi, rusuk, titik sudut), menyusun dan mengurai kubus dan balok termasuk jaring-jaringnya, mengenali tampak depan, samping, dan atas, membandingkan karakteristik bangun ruang, serta menghitung volume dengan menghitung kubus satuan.',
  coreConcepts: [
    s.coreConcepts[0],
    'Menyusun dan Mengurai: Kubus dan balok dapat disusun dari kubus-kubus satuan, dan dapat diurai (dibuka) menjadi jaring-jaring berupa 6 persegi (kubus) atau 6 persegi panjang (balok). Tidak semua susunan 6 persegi dapat dilipat menjadi kubus.',
    'Visualisasi Spasial: Bangun ruang dapat digambarkan dari tampak depan, tampak samping, dan tampak atas. Kubus tampak persegi dari ketiga arah, sedangkan balok dapat tampak sebagai persegi panjang.',
    'Volume dengan Kubus Satuan: Volume adalah banyak kubus satuan yang mengisi bangun ruang. Untuk balok: hitung kubus pada satu lapis (panjang × lebar), lalu kalikan dengan banyak lapis (tinggi), sehingga $V = p \\times l \\times t$. Untuk kubus: $V = s \\times s \\times s$.'
  ],
  workedExamples: [
    {
      title: 'Menghitung Kubus Satuan pada Balok',
      problem: 'Sebuah balok disusun dari kubus satuan dengan panjang 5 kubus, lebar 3 kubus, dan tinggi 2 kubus. Berapa banyak kubus satuan yang digunakan?',
      solution: 'Langkah 1: Hitung banyak kubus pada satu lapis:\n$$5 \\times 3 = 15\\text{ kubus}$$\n\nLangkah 2: Kalikan dengan banyak lapis (tinggi):\n$$15 \\times 2 = 30\\text{ kubus}$$\nBanyak kubus satuan yang digunakan adalah **30 kubus**.'
    },
    s.workedExamples[1]
  ],
  keyFormulas: [
    { label: 'Volume Balok (banyak kubus satuan)', formula: 'V = p \\times l \\times t' },
    { label: 'Volume Kubus', formula: 'V = s \\times s \\times s' },
    { label: 'Unsur Kubus & Balok', formula: '6\\text{ sisi},\\; 12\\text{ rusuk},\\; 8\\text{ titik sudut}' }
  ],
  misconceptions: [
    'Hanya menghitung kubus yang terlihat dari luar. Kubus satuan di bagian dalam bangun juga harus dihitung; gunakan cara per lapis.',
    'Mengira semua susunan 6 persegi pasti dapat dilipat menjadi kubus. Ada susunan yang jika dilipat sisinya bertumpuk.',
    'Tertukar satuan volume ($\\text{cm}^3$) dengan satuan panjang (cm) atau luas ($\\text{cm}^2$).'
  ],
  tutorTip: 'Saat menghitung volume, bayangkan kotak diisi kubus-kubus kecil lapis demi lapis: hitung satu lapis dulu, lalu kalikan dengan banyak lapisnya!'
});

const g = await loadGrade(6);
const ch = g.data.chapters.find((c) => c.id === 'sd6-bab3-kubus-balok');
let changed = 0;
for (const q of ch.questions) {
  const patch = QUESTIONS[q.id];
  if (!patch) continue;
  const { visual, ...fields } = patch;
  Object.assign(q, fields);
  if (visual) q.visual = visual;
  else if (VISUAL_REMOVALS.has(q.id)) delete q.visual;
  if (!q.bestSolution.includes(`(Opsi ${q.correctAnswer})`)) throw new Error(`${q.id}: kunci tidak cocok`);
  changed++;
}
if (changed !== Object.keys(QUESTIONS).length) throw new Error('Ada ID soal yang tidak ditemukan');
// Ringkasan hanya ditulis ulang sekali (konsep ke-0 & contoh ke-1 diambil dari versi lama)
if (/luas permukaan/i.test(ch.summary.overview)) ch.summary = SUMMARY(ch.summary);
saveGrade(g);
console.log(`Kelas 6 Bab 3 diselaraskan: ${changed} soal + materi`);
