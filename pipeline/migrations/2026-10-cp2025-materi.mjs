/**
 * Penyelarasan teks materi (6 pilar) bab SD dengan CP Fase C 046/H/KR/2025.
 * Pelengkap 2026-10-cp2025-fase-c.mjs (yang mengganti soal-soalnya).
 *
 * - Kelas 5 Bab 8 (Data): istilah "modus" (Fase D) dihapus; ditambah konsep
 *   kemungkinan kejadian yang ada di Fase C.
 * - Kelas 6 Bab 4 (Peluang): rumus P(A) = n(A)/n(S) dan ruang sampel (Fase D)
 *   diganti dengan membandingkan kemungkinan kejadian (Fase C).
 * - Kelas 6 Bab 1: contoh desimal dua angka diganti satu angka.
 *
 * Skrip idempoten: node pipeline/migrations/2026-10-cp2025-materi.mjs
 */
import { loadGrade, saveGrade } from './lib.mjs';

const GRADE5_BAB8 = (s) => ({
  ...s,
  overview: s.overview.replace(
    'serta membaca informasi penting seperti data terbanyak (modus), data terkecil, dan selisih nilai antarkategori.',
    'membaca informasi penting seperti data terbanyak, data paling sedikit, dan selisih nilai antarkategori, serta membandingkan kemungkinan suatu kejadian dalam percobaan acak sederhana.'
  ),
  coreConcepts: [
    ...s.coreConcepts.slice(0, 4),
    'Membaca & Menginterpretasikan Data: Mengidentifikasi kategori dengan data terbanyak dan paling sedikit, mengurutkan data, menghitung selisih antardua kategori, dan menjumlahkan total seluruh data.',
    'Kemungkinan Kejadian: Dalam percobaan acak (misalnya mengambil kelereng tanpa melihat), kejadian yang didukung oleh lebih banyak benda atau hasil lebih mungkin terjadi. Contoh: dari 9 kelereng merah dan 3 kelereng biru, kelereng merah lebih mungkin terambil.'
  ]
});

const GRADE6_BAB4 = {
  overview: 'Sebelum pertandingan sepak bola dimulai, wasit melempar koin ke udara untuk menentukan tim mana yang memilih sisi lapangan lebih dahulu. Mengapa memakai koin? Karena sisi Angka dan sisi Gambar sama mungkin muncul, sehingga undian itu adil bagi kedua tim. Prinsip yang sama dipakai saat mengundi giliran presentasi kelompok atau arisan keluarga.\n\nDalam kehidupan sehari-hari kita sering memperkirakan kejadian yang belum terjadi: "Apakah besok akan hujan?", "Mungkinkah matahari terbit dari barat?", atau "Warna kelereng apa yang paling mungkin terambil dari kantong?". Kita tidak selalu bisa memastikan hasilnya, tetapi kita bisa membandingkan kejadian mana yang lebih mungkin, sama mungkin, atau kurang mungkin terjadi.\n\nBab ini membimbing siswa Kelas 6 mengenali kejadian yang pasti, mungkin, dan mustahil; mendaftar semua hasil yang dapat muncul pada percobaan sederhana seperti melempar koin, dadu, atau memutar roda putar; serta membandingkan kemungkinan dua kejadian dengan menghitung banyak hasil yang mendukung masing-masing kejadian.',
  coreConcepts: [
    'Pasti, Mungkin, dan Mustahil:\n- Pasti terjadi: kejadian yang selalu terjadi, contoh: matahari terbit dari timur.\n- Mungkin terjadi: kejadian yang bisa terjadi atau tidak, contoh: besok sore turun hujan.\n- Mustahil terjadi: kejadian yang tidak mungkin terjadi, contoh: mendapat mata dadu 7 dari satu dadu biasa.',
    'Mendaftar Hasil yang Mungkin: Sebelum membandingkan, tuliskan semua hasil yang dapat muncul. Koin: Angka atau Gambar (2 hasil). Dadu: 1, 2, 3, 4, 5, 6 (6 hasil). Kantong berisi 4 kelereng merah dan 2 kelereng biru: 6 kelereng yang masing-masing bisa terambil.',
    'Membandingkan Kemungkinan: Kejadian yang didukung oleh lebih banyak hasil atau benda lebih mungkin terjadi. Jika banyaknya sama, kedua kejadian sama mungkin. Contoh: pada dadu, "muncul kurang dari 5" (1, 2, 3, 4) lebih mungkin daripada "muncul lebih dari 4" (5, 6).',
    'Percobaan Adil: Sebuah undian adil jika setiap peserta memiliki kemungkinan yang sama. Hasil percobaan nyata bisa sedikit berbeda dari perkiraan (misalnya koin dilempar 20 kali menghasilkan 11 Angka dan 9 Gambar), dan itu wajar.'
  ],
  workedExamples: [
    {
      title: 'Membandingkan Kemungkinan pada Dadu',
      problem: 'Sebuah dadu dilempar satu kali. Manakah yang lebih mungkin: muncul mata dadu genap atau muncul mata dadu 1?',
      solution: 'Langkah 1: Daftar hasil yang mendukung setiap kejadian:\n- Mata dadu genap: 2, 4, 6 (3 hasil)\n- Mata dadu 1: hanya 1 hasil\n\nLangkah 2: Bandingkan banyaknya hasil: $3 > 1$.\n\nJadi, **muncul mata dadu genap lebih mungkin** daripada muncul mata dadu 1.'
    },
    {
      title: 'Kelereng Mana yang Paling Mungkin Terambil?',
      problem: 'Di dalam kantong terdapat 3 kelereng merah, 5 kelereng biru, dan 2 kelereng kuning. Budi mengambil satu kelereng tanpa melihat. Urutkan warna dari yang paling mungkin sampai yang paling kecil kemungkinannya terambil.',
      solution: 'Langkah 1: Bandingkan banyak kelereng setiap warna: biru 5, merah 3, kuning 2.\n\nLangkah 2: Warna dengan kelereng lebih banyak lebih mungkin terambil.\n\nUrutannya: **biru, merah, kuning**.'
    }
  ],
  keyFormulas: [
    {
      label: 'Membandingkan Kemungkinan',
      formula: '\\text{lebih banyak hasil yang mendukung} \\Rightarrow \\text{lebih mungkin terjadi}'
    },
    {
      label: 'Skala Kemungkinan',
      formula: '\\text{mustahil} \\;<\\; \\text{kurang mungkin} \\;<\\; \\text{sama mungkin} \\;<\\; \\text{lebih mungkin} \\;<\\; \\text{pasti}'
    }
  ],
  misconceptions: [
    'Menganggap angka yang "lebih besar" lebih mudah muncul pada dadu. Setiap mata dadu sama mungkin muncul; yang dibandingkan adalah banyaknya hasil yang mendukung suatu kejadian.',
    'Mengira setelah 3 kali muncul Angka, lemparan berikutnya pasti Gambar. Setiap lemparan koin tetap sama mungkin menghasilkan Angka atau Gambar.',
    'Menganggap semua kejadian selalu 50:50, padahal kemungkinan bergantung pada banyaknya hasil atau benda yang mendukung kejadian itu.'
  ],
  tutorTip: 'Biasakan menulis daftar semua hasil yang mungkin sebelum menjawab. Setelah daftar lengkap, cukup bandingkan mana yang hasilnya lebih banyak.'
};

const g5 = await loadGrade(5);
const bab8 = g5.data.chapters.find((c) => c.id === 'sd5-bab8-data');
bab8.summary = GRADE5_BAB8(bab8.summary);
if (/modus/i.test(JSON.stringify(bab8.summary))) throw new Error('sd5-bab8-data masih menyebut modus');
saveGrade(g5);

const bab4k5 = g5.data.chapters.find((c) => c.id === 'sd5-bab4-keliling-bangun-datar');
bab4k5.summary.misconceptions = bab4k5.summary.misconceptions.map((m) =>
  m.replace('bukan perkalian luas permukaan.', 'bukan luas daerah di dalamnya.'));
saveGrade(g5);

const g6 = await loadGrade(6);
const bab4 = g6.data.chapters.find((c) => c.id === 'sd6-bab4-peluang');
bab4.summary = GRADE6_BAB4;
const bab1 = g6.data.chapters.find((c) => c.id === 'sd6-bab1-pecahan-desimal');
bab1.summary.overview = bab1.summary.overview.replace('mengukur panjang kain 1,75 meter', 'mengukur panjang kain 1,5 meter');
saveGrade(g6);

console.log('Materi Kelas 5 Bab 8, Kelas 6 Bab 4, dan Kelas 6 Bab 1 diselaraskan dengan CP Fase C.');
