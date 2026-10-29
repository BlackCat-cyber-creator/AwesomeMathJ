/**
 * Penyelarasan soal SD dengan CP Matematika Fase C (Keputusan Kepala BSKAP 046/H/KR/2025,
 * teks resmi di docs/kurikulum/cp-046-2025/matematika.md).
 *
 * Fase C (Kelas V–VI) TIDAK memuat: rerata/median/modus/jangkauan, diagram lingkaran,
 * peluang berupa angka & frekuensi harapan, luas/keliling lingkaran, skala peta,
 * dan operasi desimal lebih dari satu angka di belakang koma — semuanya Fase D (SMP).
 * Fase C memuat: data dalam gambar, piktogram, diagram batang, tabel frekuensi; kejadian
 * dengan kemungkinan lebih besar/lebih kecil; operasi pecahan dengan bilangan asli; rasio satuan.
 *
 * Kunci jawaban (A/B/C/D) setiap soal pengganti sama dengan soal lama.
 * Skrip idempoten: node pipeline/migrations/2026-10-cp2025-fase-c.mjs
 */
import { loadGrade, saveGrade, allQuestions } from './lib.mjs';

const opts = (a, b, c, d) => [
  { key: 'A', text: a },
  { key: 'B', text: b },
  { key: 'C', text: c },
  { key: 'D', text: d }
];

const steps = (lines, key) => `**Langkah Penyelesaian Terstruktur:**\n${lines}\n(Opsi ${key}).`;

// Fase C belum memakai istilah "peluang", jadi label gambar cukup ajakan membandingkan
const bag = (title, caption, items) => ({
  type: 'probability-bag',
  props: {
    title,
    caption,
    targetLabel: 'Bandingkan!',
    items: items.map(([color, count, label]) => ({
      color,
      count,
      fill: { red: '#FCA5A5', blue: '#93C5FD', green: '#86EFAC', white: '#F8FAFC' }[color],
      stroke: { red: '#DC2626', blue: '#2563EB', green: '#16A34A', white: '#64748B' }[color],
      label
    }))
  }
});

// ---------------------------------------------------------------------------
// KELAS 5 — Bab 8: Data
// ---------------------------------------------------------------------------
const GRADE5 = {
  'sd5-b8-2': {
    question: 'Hasil pencatatan turus warna kesukaan siswa kelas 5: merah 6 siswa, biru 9 siswa, hijau 4 siswa, dan kuning 7 siswa. Banyak siswa yang menyukai warna biru atau kuning adalah...',
    options: opts('13 siswa', '16 siswa', '15 siswa', '11 siswa'),
    correctAnswer: 'B',
    hint: 'Jumlahkan banyak siswa penyuka biru dan penyuka kuning.',
    bestSolution: steps('$$9 + 7 = 16\\text{ siswa}$$', 'B')
  },
  'sd5-b8-4': {
    question: 'Tabel frekuensi pengunjung perpustakaan: Senin 25 orang, Selasa 30 orang, Rabu 35 orang, Kamis 20 orang, dan Jumat 40 orang. Selisih jumlah pengunjung pada dua hari teramai dengan dua hari tersepi adalah...',
    options: opts('20 orang', '15 orang', '25 orang', '30 orang'),
    correctAnswer: 'D',
    hint: 'Dua hari teramai: Jumat dan Rabu. Dua hari tersepi: Kamis dan Senin.',
    bestSolution: steps('1. Dua hari teramai: $40 + 35 = 75$ orang.\n2. Dua hari tersepi: $20 + 25 = 45$ orang.\n3. Selisih: $75 - 45 = 30$ orang.', 'D')
  },
  'sd5-b8-5': {
    question: 'Data berat badan (kg) 7 siswa: 32, 34, 32, 35, 33, 32, 36. Jika data diurutkan dari yang paling ringan, berat badan pada urutan ketiga adalah...',
    options: opts('33 kg', '34 kg', '35 kg', '32 kg'),
    correctAnswer: 'D',
    hint: 'Urutkan dahulu: 32, 32, 32, 33, 34, 35, 36.',
    bestSolution: steps('Data terurut: 32, 32, 32, 33, 34, 35, 36.\nUrutan ketiga adalah **32 kg**.', 'D')
  },
  'sd5-b8-6': {
    question: 'Hasil pengukuran tinggi 5 tanaman kacang (cm): 12, 15, 9, 18, 14. Urutan tinggi tanaman dari yang terpendek adalah...',
    options: opts('18, 15, 14, 12, 9', '9, 12, 15, 14, 18', '9, 12, 14, 15, 18', '12, 9, 14, 15, 18'),
    correctAnswer: 'C',
    hint: 'Cari nilai terkecil lebih dahulu, lalu yang lebih besar berikutnya.',
    bestSolution: steps('Dari yang terpendek: 9, 12, 14, 15, 18.', 'C')
  },
  'sd5-b8-7': {
    question: 'Data ukuran sepatu 12 siswa: 33, 34, 33, 35, 34, 33, 36, 34, 33, 35, 34, 33. Pada tabel frekuensi, frekuensi ukuran sepatu 33 adalah...',
    options: opts('5', '4', '6', '3'),
    correctAnswer: 'A',
    hint: 'Hitung berapa kali angka 33 muncul (gunakan turus).',
    bestSolution: steps('Ukuran 33 muncul 5 kali, ukuran 34 muncul 4 kali, ukuran 35 muncul 2 kali, dan ukuran 36 muncul 1 kali (total 12).\nFrekuensi ukuran 33 adalah **5**.', 'A')
  },
  'sd5-b8-10': {
    question: 'Diagram batang menunjukkan hasil panen jagung: Pak Ali 45 kg, Pak Budi 60 kg, Pak Candra 55 kg, dan Pak Dedi 40 kg. Berapa kg hasil panen Pak Budi lebih banyak daripada Pak Dedi?',
    options: opts('15 kg', '5 kg', '20 kg', '25 kg'),
    correctAnswer: 'C',
    hint: 'Kurangkan hasil panen Pak Budi dengan hasil panen Pak Dedi.',
    bestSolution: steps('$$60 - 40 = 20\\text{ kg}$$', 'C'),
    visual: {
      type: 'bar-chart',
      props: {
        title: 'Hasil Panen Jagung (kg)',
        caption: '*Bandingkan tinggi batang Pak Budi dan Pak Dedi',
        categories: [
          { label: 'Ali', val: 45 },
          { label: 'Budi', val: 60 },
          { label: 'Candra', val: 55 },
          { label: 'Dedi', val: 40 }
        ],
        yMax: 70,
        yStep: 10
      }
    }
  },
  'sd5-b8-11': {
    question: 'Nilai ulangan 5 siswa: Ani 75, Budi 80, Citra 85, Dodi 90, dan Eka 70. Siswa dengan nilai tertinggi kedua adalah...',
    options: opts('Dodi', 'Citra', 'Budi', 'Eka'),
    correctAnswer: 'B',
    hint: 'Urutkan nilai dari yang terbesar: 90, 85, 80, 75, 70.',
    bestSolution: steps('Urutan dari terbesar: Dodi (90), Citra (85), Budi (80), Ani (75), Eka (70).\nNilai tertinggi kedua milik **Citra**.', 'B')
  },
  'sd5-b8-13': {
    question: 'Piktogram hobi siswa: futsal 8 simbol, musik 5 simbol, menari 3 simbol, dan membaca 4 simbol. Jika 1 simbol mewakili 5 siswa, banyak siswa yang gemar membaca adalah...',
    options: opts('20 siswa', '4 siswa', '25 siswa', '15 siswa'),
    correctAnswer: 'A',
    hint: 'Kalikan banyak simbol membaca dengan nilai satu simbol.',
    bestSolution: steps('$$4 \\times 5 = 20\\text{ siswa}$$', 'A'),
    visual: {
      type: 'pictogram',
      props: {
        title: 'Piktogram Hobi Siswa',
        caption: '*1 simbol mewakili 5 siswa',
        rows: [
          { label: 'Futsal', count: 8 },
          { label: 'Musik', count: 5 },
          { label: 'Menari', count: 3 },
          { label: 'Membaca', count: 4 }
        ],
        symbol: '⭐',
        unitLabel: '1 ⭐ = 5 siswa'
      }
    }
  },
  'sd5-b8-14': {
    question: 'Tabel frekuensi ekstrakurikuler 150 siswa: Pramuka 45 siswa, Futsal 40 siswa, Tari 35 siswa, dan sisanya memilih Klub Baca. Banyak siswa yang memilih Klub Baca adalah...',
    options: opts('20 siswa', '35 siswa', '30 siswa', '25 siswa'),
    correctAnswer: 'C',
    hint: 'Kurangkan total siswa dengan jumlah siswa pada tiga kegiatan lainnya.',
    bestSolution: steps('1. Tiga kegiatan: $45 + 40 + 35 = 120$ siswa.\n2. Klub Baca: $150 - 120 = 30$ siswa.', 'C')
  },
  'sd5-b8-15': {
    question: 'Data hasil panen padi sebuah desa: tahun 2021 sebanyak 24 ton, 2022 sebanyak 28 ton, 2023 sebanyak 26 ton, 2024 sebanyak 30 ton, dan 2025 sebanyak 32 ton. Pada tahun berapa hasil panen menurun dibandingkan tahun sebelumnya?',
    options: opts('2022', '2024', '2025', '2023'),
    correctAnswer: 'D',
    hint: 'Bandingkan hasil setiap tahun dengan tahun sebelumnya.',
    bestSolution: steps('Hasil panen naik setiap tahun, kecuali dari 2022 (28 ton) ke 2023 (26 ton).\nPenurunan terjadi pada tahun **2023**.', 'D')
  },
  'sd5-b8-16': {
    question: 'Sebuah kantong berisi 9 kelereng merah dan 3 kelereng biru. Jika diambil satu kelereng tanpa melihat, pernyataan yang benar adalah...',
    options: opts('Kelereng biru lebih mungkin terambil', 'Kelereng merah lebih mungkin terambil', 'Kedua warna sama mungkin terambil', 'Kelereng biru pasti terambil'),
    correctAnswer: 'B',
    hint: 'Warna yang jumlahnya lebih banyak lebih mungkin terambil.',
    bestSolution: steps('Kelereng merah (9) lebih banyak daripada kelereng biru (3), sehingga **kelereng merah lebih mungkin terambil**.', 'B'),
    visual: bag('Kelereng dalam Kantong', '*9 kelereng merah dan 3 kelereng biru', [['red', 9, '9 Merah'], ['blue', 3, '3 Biru']])
  },
  'sd5-b8-17': {
    question: 'Sebuah dadu dilempar satu kali. Kejadian manakah yang paling mungkin terjadi?',
    options: opts('Muncul mata dadu 6', 'Muncul mata dadu lebih dari 2', 'Muncul mata dadu 1', 'Muncul mata dadu 7'),
    correctAnswer: 'B',
    hint: 'Hitung ada berapa mata dadu yang memenuhi setiap kejadian.',
    bestSolution: steps('1. Mata dadu 6: hanya 1 kemungkinan.\n2. Lebih dari 2: mata dadu 3, 4, 5, 6 (4 kemungkinan).\n3. Mata dadu 1: 1 kemungkinan.\n4. Mata dadu 7: mustahil.\nYang paling mungkin adalah **muncul mata dadu lebih dari 2**.', 'B')
  },
  'sd5-b8-19': {
    question: 'Tabel frekuensi nilai ulangan: nilai 6 diperoleh 3 siswa, nilai 7 diperoleh 5 siswa, nilai 8 diperoleh beberapa siswa, dan nilai 9 diperoleh 2 siswa. Jika jumlah seluruh siswa 18 orang, banyak siswa yang mendapat nilai 8 adalah...',
    options: opts('8 siswa', '10 siswa', '6 siswa', '7 siswa'),
    correctAnswer: 'A',
    hint: 'Kurangkan jumlah seluruh siswa dengan siswa yang mendapat nilai 6, 7, dan 9.',
    bestSolution: steps('1. Nilai 6, 7, dan 9: $3 + 5 + 2 = 10$ siswa.\n2. Nilai 8: $18 - 10 = 8$ siswa.', 'A')
  },
  'sd5-b8-20': {
    question: 'Penjualan buku sebuah toko selama 6 hari: Senin 20, Selasa 25, Rabu 22, Kamis 28, Jumat 25, dan Sabtu tidak tercatat. Jika total penjualan selama 6 hari adalah 144 buku, penjualan hari Sabtu adalah...',
    options: opts('20 buku', '26 buku', '22 buku', '24 buku'),
    correctAnswer: 'D',
    hint: 'Jumlahkan penjualan Senin sampai Jumat, lalu kurangkan dari total.',
    bestSolution: steps('1. Senin–Jumat: $20 + 25 + 22 + 28 + 25 = 120$ buku.\n2. Sabtu: $144 - 120 = 24$ buku.', 'D')
  },
  // Bab 5: luas lingkaran (Fase D) → luas gabungan bangun datar (Fase C)
  'sd5-b5-17': {
    question: 'Di tengah taman berbentuk persegi berukuran $14\\text{ m} \\times 14\\text{ m}$ dibuat kolam ikan berbentuk persegi panjang berukuran $8\\text{ m} \\times 6\\text{ m}$. Luas taman di luar kolam ikan adalah...',
    options: opts('156 m²', '138 m²', '160 m²', '148 m²'),
    correctAnswer: 'D',
    hint: 'Luas taman di luar kolam = luas persegi − luas persegi panjang.',
    bestSolution: steps('1. Luas taman: $14 \\times 14 = 196\\text{ m}^2$.\n2. Luas kolam: $8 \\times 6 = 48\\text{ m}^2$.\n3. Sisa: $196 - 48 = 148\\text{ m}^2$.', 'D')
  }
};

// ---------------------------------------------------------------------------
// KELAS 6 — Bab 4: Peluang → kemungkinan kejadian (kualitatif, Fase C)
// ---------------------------------------------------------------------------
const GRADE6 = {
  'sd6-b4-1': {
    question: 'Sebuah koin dilempar satu kali. Pernyataan yang benar tentang munculnya sisi Angka dan sisi Gambar adalah...',
    options: opts('Sisi Angka lebih mungkin muncul', 'Sisi Gambar lebih mungkin muncul', 'Keduanya sama mungkin muncul', 'Sisi Gambar mustahil muncul'),
    correctAnswer: 'C',
    hint: 'Koin hanya memiliki dua sisi yang sama-sama bisa muncul.',
    bestSolution: steps('Koin memiliki 2 sisi (Angka dan Gambar) dan masing-masing hanya 1 sisi, sehingga **keduanya sama mungkin muncul**.', 'C'),
    visual: { type: 'coin', props: { title: 'Pelemparan Koin', caption: '*Koin memiliki sisi Angka dan sisi Gambar', targetLabel: 'Bandingkan!' } }
  },
  'sd6-b4-3': {
    question: 'Sebuah dadu dilempar satu kali. Manakah yang lebih mungkin: muncul mata dadu lebih dari 4, atau muncul mata dadu kurang dari 5?',
    options: opts('Lebih dari 4, karena angkanya besar', 'Keduanya sama mungkin', 'Kurang dari 5, karena ada 4 mata dadu yang memenuhi (1, 2, 3, 4)', 'Lebih dari 4, karena ada 3 mata dadu yang memenuhi'),
    correctAnswer: 'C',
    hint: 'Daftar mata dadu yang lebih dari 4, lalu yang kurang dari 5.',
    bestSolution: steps('1. Lebih dari 4: mata dadu 5 dan 6 (2 kemungkinan).\n2. Kurang dari 5: mata dadu 1, 2, 3, 4 (4 kemungkinan).\nJadi **kurang dari 5 lebih mungkin**.', 'C'),
    visual: { type: 'dice', props: { title: 'Pelemparan Dadu', caption: '*Dadu bermata 1 sampai 6', diceValue: 5, targetLabel: 'Lebih mungkin?' } }
  },
  'sd6-b4-4': {
    question: 'Sebuah kotak berisi 4 bola merah, 6 bola biru, dan 5 bola hijau. Diambil satu bola tanpa melihat. Urutan warna dari yang paling mungkin sampai yang paling kecil kemungkinannya terambil adalah...',
    options: opts('merah, hijau, biru', 'biru, hijau, merah', 'hijau, biru, merah', 'biru, merah, hijau'),
    correctAnswer: 'B',
    hint: 'Semakin banyak bola suatu warna, semakin besar kemungkinannya terambil.',
    bestSolution: steps('Banyak bola: biru 6, hijau 5, merah 4.\nUrutan dari yang paling mungkin: **biru, hijau, merah**.', 'B'),
    visual: bag('Bola dalam Kotak', '*4 bola merah, 6 bola biru, dan 5 bola hijau', [['red', 4, '4 Merah'], ['blue', 6, '6 Biru'], ['green', 5, '5 Hijau']])
  },
  'sd6-b4-5': {
    question: 'Kejadian berikut yang mustahil terjadi adalah...',
    options: opts('Hari ini turun hujan', 'Besok hari Senin', 'Mendapat mata dadu 7 saat melempar satu dadu biasa', 'Koin yang dilempar menunjukkan sisi Angka'),
    correctAnswer: 'C',
    hint: 'Dadu biasa hanya memiliki mata dadu 1 sampai 6.',
    bestSolution: steps('Dadu biasa tidak memiliki mata dadu 7, sehingga **mendapat mata dadu 7** adalah kejadian mustahil.', 'C')
  },
  'sd6-b4-6': {
    question: 'Sebuah dadu dilempar satu kali. Bagaimana kemungkinan muncul mata dadu ganjil dibandingkan mata dadu genap?',
    options: opts('Mata dadu ganjil lebih mungkin', 'Mata dadu genap lebih mungkin', 'Sama mungkin, karena masing-masing ada 3 mata dadu', 'Mata dadu ganjil mustahil muncul'),
    correctAnswer: 'C',
    hint: 'Mata dadu ganjil: 1, 3, 5. Mata dadu genap: 2, 4, 6.',
    bestSolution: steps('Ganjil (1, 3, 5) dan genap (2, 4, 6) sama-sama ada 3 mata dadu, sehingga keduanya **sama mungkin**.', 'C'),
    visual: { type: 'dice', props: { title: 'Mata Dadu Ganjil dan Genap', caption: '*Dadu bermata 1 sampai 6', diceValue: 3, targetLabel: 'Bandingkan!' } }
  },
  'sd6-b4-7': {
    question: 'Sebuah kotak berisi 4 bola merah, 5 bola biru, dan 3 bola hijau. Diambil satu bola tanpa melihat. Warna yang paling mungkin terambil adalah...',
    options: opts('Merah', 'Biru', 'Hijau', 'Ketiganya sama mungkin'),
    correctAnswer: 'B',
    hint: 'Bandingkan banyak bola setiap warna.',
    bestSolution: steps('Bola biru paling banyak (5 bola), sehingga **biru** paling mungkin terambil.', 'B'),
    visual: bag('Bola dalam Kotak', '*4 bola merah, 5 bola biru, dan 3 bola hijau', [['red', 4, '4 Merah'], ['blue', 5, '5 Biru'], ['green', 3, '3 Hijau']])
  },
  'sd6-b4-8': {
    question: 'Andi memasukkan 10 kelereng merah ke dalam kantong kosong, lalu mengambil satu kelereng tanpa melihat. Kejadian "terambil kelereng merah" termasuk kejadian yang...',
    options: opts('mustahil', 'kurang mungkin', 'sama mungkin', 'pasti'),
    correctAnswer: 'D',
    hint: 'Apa saja isi kantong tersebut?',
    bestSolution: steps('Semua kelereng di kantong berwarna merah, sehingga kelereng yang terambil **pasti** merah.', 'D')
  },
  'sd6-b4-9': {
    question: 'Sebuah roda putar dibagi menjadi 4 bagian sama besar: 3 bagian biru dan 1 bagian merah. Jika roda diputar satu kali, pernyataan yang benar adalah...',
    options: opts('Jarum lebih mungkin berhenti di merah', 'Jarum lebih mungkin berhenti di biru', 'Biru dan merah sama mungkin', 'Jarum pasti berhenti di merah'),
    correctAnswer: 'B',
    hint: 'Warna dengan bagian lebih banyak lebih mungkin ditunjuk jarum.',
    bestSolution: steps('Bagian biru (3) lebih banyak daripada merah (1), sehingga jarum **lebih mungkin berhenti di biru**.', 'B'),
    visual: { type: 'spinner', props: { title: 'Roda Putar', caption: '*3 bagian biru dan 1 bagian merah', sectors: ['biru', 'biru', 'biru', 'merah'], targetLabel: 'Bandingkan!' } }
  },
  'sd6-b4-10': {
    question: 'Sebuah kantong berisi 20 kartu bernomor 1 sampai 20. Diambil satu kartu tanpa melihat. Kejadian manakah yang paling kecil kemungkinannya?',
    options: opts('Terambil kartu bernomor genap', 'Terambil kartu bernomor kurang dari 15', 'Terambil kartu bernomor ganjil', 'Terambil kartu bernomor kelipatan 5'),
    correctAnswer: 'D',
    hint: 'Hitung banyak kartu yang memenuhi setiap kejadian.',
    bestSolution: steps('1. Genap: 10 kartu.\n2. Kurang dari 15: 14 kartu.\n3. Ganjil: 10 kartu.\n4. Kelipatan 5 (5, 10, 15, 20): 4 kartu.\nYang paling kecil kemungkinannya adalah **kelipatan 5**.', 'D')
  },
  'sd6-b4-11': {
    question: 'Lia melempar koin 20 kali dan mencatat hasilnya: Angka 11 kali dan Gambar 9 kali. Kesimpulan yang tepat adalah...',
    options: opts('Hasil itu wajar, karena Angka dan Gambar sama mungkin sehingga jumlahnya hampir sama', 'Koin pasti rusak karena hasilnya tidak tepat 10 dan 10', 'Pada lemparan berikutnya pasti muncul Gambar', 'Angka selalu lebih mungkin muncul daripada Gambar'),
    correctAnswer: 'A',
    hint: 'Kejadian yang sama mungkin tidak harus muncul dengan jumlah yang persis sama.',
    bestSolution: steps('Angka dan Gambar sama mungkin, tetapi hasil percobaan bisa sedikit berbeda. Angka 11 dan Gambar 9 masih **wajar** karena jumlahnya hampir sama.', 'A')
  },
  'sd6-b4-12': {
    question: 'Dari kartu angka 1 sampai 10 diambil satu kartu tanpa melihat. Manakah yang lebih mungkin: terambil kartu bilangan prima atau kartu bilangan bukan prima?',
    options: opts('Bukan prima, karena ada 6 kartu', 'Prima, karena ada 4 kartu', 'Keduanya sama mungkin', 'Kartu prima mustahil terambil'),
    correctAnswer: 'A',
    hint: 'Bilangan prima dari 1 sampai 10 adalah 2, 3, 5, dan 7.',
    bestSolution: steps('1. Prima: 2, 3, 5, 7 (4 kartu).\n2. Bukan prima: 1, 4, 6, 8, 9, 10 (6 kartu).\nJadi **kartu bukan prima lebih mungkin** terambil.', 'A')
  },
  'sd6-b4-13': {
    question: 'Sebuah roda putar dibagi menjadi 8 juring sama besar: 3 juring merah, 3 juring kuning, dan 2 juring hijau. Pernyataan yang benar adalah...',
    options: opts('Hijau paling mungkin ditunjuk jarum', 'Merah dan kuning sama mungkin, dan keduanya lebih mungkin daripada hijau', 'Ketiga warna sama mungkin', 'Hijau mustahil ditunjuk jarum'),
    correctAnswer: 'B',
    hint: 'Bandingkan banyak juring setiap warna.',
    bestSolution: steps('Merah (3) dan kuning (3) sama banyak, sedangkan hijau hanya 2. Jadi **merah dan kuning sama mungkin dan lebih mungkin daripada hijau**.', 'B'),
    visual: { type: 'spinner', props: { title: 'Roda Putar', caption: '*8 juring sama besar: 3 merah, 3 kuning, 2 hijau', sectors: ['merah', 'merah', 'merah', 'kuning', 'kuning', 'kuning', 'hijau', 'hijau'], targetLabel: 'Bandingkan!' } }
  },
  'sd6-b4-14': {
    question: 'Urutkan kejadian berikut dari yang paling mungkin: (1) Matahari terbit besok pagi, (2) Mendapat mata dadu 6 saat melempar satu dadu, (3) Seekor kucing berbicara bahasa Indonesia.',
    options: opts('2, 1, 3', '3, 2, 1', '1, 3, 2', '1, 2, 3'),
    correctAnswer: 'D',
    hint: 'Tentukan mana yang pasti, mana yang mungkin, dan mana yang mustahil.',
    bestSolution: steps('(1) pasti terjadi, (2) mungkin terjadi, (3) mustahil terjadi.\nUrutannya **1, 2, 3**.', 'D')
  },
  'sd6-b4-15': {
    question: 'Kantong A berisi 2 bola merah dan 8 bola putih. Kantong B berisi 5 bola merah dan 5 bola putih. Dina ingin mendapat bola merah dengan sekali ambil. Dari kantong mana sebaiknya ia mengambil?',
    options: opts('Kantong B', 'Kantong A', 'Sama saja', 'Tidak dapat ditentukan'),
    correctAnswer: 'A',
    hint: 'Kedua kantong berisi 10 bola. Kantong mana yang bola merahnya lebih banyak?',
    bestSolution: steps('Kedua kantong berisi 10 bola, tetapi kantong B memiliki lebih banyak bola merah (5) daripada kantong A (2). Jadi sebaiknya mengambil dari **kantong B**.', 'A')
  },
  'sd6-b4-16': {
    question: 'Sebuah kotak berisi 6 kelereng merah dan 9 kelereng putih. Paling sedikit berapa kelereng merah yang harus ditambahkan agar kelereng merah lebih mungkin terambil daripada kelereng putih?',
    options: opts('4 kelereng', '3 kelereng', '9 kelereng', '6 kelereng'),
    correctAnswer: 'A',
    hint: 'Kelereng merah harus lebih banyak daripada 9.',
    bestSolution: steps('Agar lebih mungkin, kelereng merah harus lebih dari 9, yaitu paling sedikit 10.\n$$10 - 6 = 4\\text{ kelereng}$$', 'A')
  },
  'sd6-b4-17': {
    question: 'Setiap huruf dari kata MATEMATIKA ditulis pada sebuah kartu, lalu semua kartu dimasukkan ke dalam kantong. Diambil satu kartu tanpa melihat. Huruf yang paling mungkin terambil adalah...',
    options: opts('M', 'T', 'K', 'A'),
    correctAnswer: 'D',
    hint: 'Hitung berapa kali setiap huruf muncul pada kata MATEMATIKA.',
    bestSolution: steps('M: 2 kali, A: 3 kali, T: 2 kali, E: 1 kali, I: 1 kali, K: 1 kali.\nHuruf **A** paling banyak, sehingga paling mungkin terambil.', 'D')
  },
  'sd6-b4-18': {
    question: 'Sebuah kantong berisi 5 permen rasa jeruk, 8 permen rasa mangga, dan 7 permen rasa stroberi. Rina mengambil 1 permen mangga lalu memakannya. Jika ia mengambil satu permen lagi tanpa melihat, rasa yang paling mungkin terambil sekarang adalah...',
    options: opts('Jeruk', 'Mangga', 'Stroberi', 'Mangga dan stroberi sama mungkin'),
    correctAnswer: 'D',
    hint: 'Hitung sisa permen setiap rasa setelah 1 permen mangga dimakan.',
    bestSolution: steps('Sisa permen: jeruk 5, mangga 7, stroberi 7.\nMangga dan stroberi sama banyak, sehingga **mangga dan stroberi sama mungkin** terambil.', 'D')
  },
  'sd6-b4-19': {
    question: 'Tiga koin dilempar bersamaan. Manakah yang lebih mungkin: muncul 3 Angka semua, atau muncul 2 Angka dan 1 Gambar?',
    options: opts('3 Angka semua', 'Keduanya sama mungkin', '2 Angka dan 1 Gambar, karena dapat terjadi dengan 3 cara (AAG, AGA, GAA)', 'Tidak dapat dibandingkan'),
    correctAnswer: 'C',
    hint: 'Tuliskan semua cara agar setiap kejadian terjadi.',
    bestSolution: steps('1. 3 Angka: hanya 1 cara (AAA).\n2. 2 Angka dan 1 Gambar: 3 cara (AAG, AGA, GAA).\nJadi **2 Angka dan 1 Gambar lebih mungkin**.', 'C')
  },
  'sd6-b4-20': {
    question: 'Guru mengundi 1 nama ketua kelas dari kertas berisi nama 12 siswa perempuan dan 18 siswa laki-laki. Pernyataan yang benar adalah...',
    options: opts('Siswa laki-laki lebih mungkin terpilih', 'Siswa perempuan lebih mungkin terpilih', 'Keduanya sama mungkin terpilih', 'Siswa perempuan pasti terpilih'),
    correctAnswer: 'A',
    hint: 'Bandingkan banyak nama siswa laki-laki dan perempuan.',
    bestSolution: steps('Nama siswa laki-laki (18) lebih banyak daripada siswa perempuan (12), sehingga **siswa laki-laki lebih mungkin terpilih**.', 'A')
  },

  // Bab 1: operasi desimal dua angka (Fase D) → pecahan dengan bilangan asli (Fase C)
  'sd6-b1-11': {
    question: 'Ibu memiliki 5 kg gula pasir yang akan dibagi sama banyak ke dalam 4 toples. Berapa kg gula dalam setiap toples?',
    options: opts('$1\\frac{1}{2}$ kg', '$\\frac{3}{4}$ kg', '$1\\frac{1}{4}$ kg', '2 kg'),
    correctAnswer: 'C',
    hint: 'Bagilah 5 dengan 4, lalu nyatakan dalam pecahan campuran.',
    bestSolution: steps('$$5 : 4 = \\frac{5}{4} = 1\\frac{1}{4}\\text{ kg}$$', 'C')
  },
  'sd6-b1-12': {
    question: 'Pak Budi memiliki sebidang tanah seluas 400 m². Sebanyak 0,4 bagian dibangun rumah dan $\\frac{1}{4}$ bagian dijadikan kebun. Sisa tanah untuk halaman adalah...',
    options: opts('160 m²', '140 m²', '180 m²', '150 m²'),
    correctAnswer: 'B',
    hint: 'Ubah 0,4 menjadi pecahan $\\frac{4}{10}$, lalu hitung luas rumah dan kebun.',
    bestSolution: steps('1. Rumah: $\\frac{4}{10} \\times 400 = 160\\text{ m}^2$.\n2. Kebun: $\\frac{1}{4} \\times 400 = 100\\text{ m}^2$.\n3. Halaman: $400 - (160 + 100) = 140\\text{ m}^2$.', 'B'),
    visual: {
      type: 'bar-model',
      props: {
        title: 'Pembagian Lahan Tanah',
        caption: '*Tanah 400 m²: 0,4 bagian rumah dan ¼ bagian kebun',
        rows: [
          {
            segments: [
              { label: 'Rumah 0,4', width: 95, color: 'green' },
              { label: 'Kebun ¼', width: 75, color: 'blue' },
              { label: 'Halaman ?', width: 80, color: 'amber' }
            ],
            totalLabel: '400 m²'
          }
        ],
        target: '? m²',
        targetLabel: 'Luas Halaman'
      }
    }
  },
  'sd6-b1-14': {
    question: 'Bentuk pecahan biasa paling sederhana dari bilangan desimal 0,6 adalah...',
    options: opts('$\\frac{3}{5}$', '$\\frac{6}{100}$', '$\\frac{2}{3}$', '$\\frac{6}{10}$'),
    correctAnswer: 'A',
    hint: '0,6 dibaca "enam persepuluh". Sederhanakan $\\frac{6}{10}$.',
    bestSolution: steps('$$0{,}6 = \\frac{6}{10} = \\frac{6 : 2}{10 : 2} = \\frac{3}{5}$$', 'A')
  },
  'sd6-b1-18': {
    question: 'Sebuah botol berisi $1\\frac{1}{2}$ liter jus yang dibagikan sama banyak kepada 6 anak. Setiap anak mendapat jus sebanyak...',
    options: opts('$\\frac{1}{4}$ liter', '$\\frac{1}{3}$ liter', '$\\frac{1}{2}$ liter', '$\\frac{1}{6}$ liter'),
    correctAnswer: 'A',
    hint: 'Ubah $1\\frac{1}{2}$ menjadi $\\frac{3}{2}$, lalu bagi dengan 6.',
    bestSolution: steps('$$\\frac{3}{2} : 6 = \\frac{3}{2 \\times 6} = \\frac{3}{12} = \\frac{1}{4}\\text{ liter}$$', 'A')
  },
  // Bab 2: skala peta (Fase D) → rasio satuan / proporsi (Fase C)
  'sd6-b2-19': {
    question: 'Sebuah resep kue untuk 4 orang membutuhkan 300 gram tepung. Berapa gram tepung yang dibutuhkan untuk membuat kue bagi 10 orang?',
    options: opts('600 gram', '750 gram', '900 gram', '700 gram'),
    correctAnswer: 'B',
    hint: 'Hitung dahulu tepung untuk 1 orang (rasio satuan).',
    bestSolution: steps('1. Untuk 1 orang: $300 : 4 = 75$ gram.\n2. Untuk 10 orang: $75 \\times 10 = 750$ gram.', 'B')
  }
};

const VISUAL_REMOVALS = new Set(['sd5-b5-17']);

let changed = 0;
const touched = new Set();
for (const [grade, table] of [[5, GRADE5], [6, GRADE6]]) {
  const g = await loadGrade(grade);
  for (const { q } of allQuestions(g.data)) {
    const patch = table[q.id];
    if (!patch) continue;
    const { visual, ...fields } = patch;
    Object.assign(q, fields);
    if (visual) q.visual = visual;
    else if (VISUAL_REMOVALS.has(q.id)) delete q.visual;
    if (!q.options.some((o) => o.key === q.correctAnswer)) throw new Error(`${q.id}: kunci tidak valid`);
    if (!q.bestSolution.includes(`(Opsi ${q.correctAnswer})`)) throw new Error(`${q.id}: pembahasan tidak menyebut kunci`);
    touched.add(q.id);
    changed++;
  }
  saveGrade(g);
}
const missing = [...Object.keys(GRADE5), ...Object.keys(GRADE6)].filter((id) => !touched.has(id));
if (missing.length) throw new Error(`ID tidak ditemukan: ${missing.join(', ')}`);
console.log(`Soal diselaraskan dengan CP Fase C: ${changed}`);
