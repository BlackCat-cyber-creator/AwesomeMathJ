/**
 * Perbaikan konten hasil audit Oktober 2026 (lihat docs/audit/AUDIT_2026-10.md).
 *
 * 1. Gambar yang tidak sesuai soal (angka/label berbeda, gambar bergeser ke soal lain,
 *    atau gambar membocorkan jawaban) diperbaiki agar 100% mengikuti teks soal.
 * 2. Soal Kelas 4 yang memakai materi Fase C (modus, rata-rata, persentase data,
 *    jumlah sudut segitiga) diganti dengan soal sesuai CP Fase B (BSKAP 046/H/KR/2025).
 * 3. Soal kembar di bab yang sama (SD) diganti dengan soal baru pada topik yang sama.
 * 4. Teks "\n" mentah di pembahasan diubah menjadi pindah baris sungguhan.
 *
 * Kunci jawaban (A/B/C/D) soal pengganti sengaja sama dengan soal lama agar
 * sebaran kunci per bab tetap seimbang.
 *
 * Sudah dijalankan (Oktober 2026). Skrip ini idempoten, jadi aman dijalankan ulang:
 *   node pipeline/migrations/2026-10-fix-content.mjs
 */
import { GRADES, loadGrade, saveGrade, allQuestions } from './lib.mjs';

// ---------------------------------------------------------------------------
// Konfigurasi gambar baru (menggantikan seluruh `visual` soal). null = hapus gambar.
// ---------------------------------------------------------------------------
const VISUALS = {
  // ---------------- Kelas 4 ----------------
  'sd4-b2-5': {
    type: 'fraction-strip',
    props: {
      title: 'Pembagian Buah Melon',
      caption: '*Biru: bagian Dedi (2/6), Oranye: bagian Lani (3/6)',
      totalParts: 6,
      shadedGroups: [2, 3],
      targetBadge: 'Sisa = ?'
    }
  },
  // Pecahan campuran 11/4 tidak bisa digambar dengan satu lingkaran; soal cukup tanpa gambar
  'sd4-b2-10': null,
  'sd4-b2-14': {
    type: 'fraction-strip',
    props: {
      title: 'Model Pecahan 1/5',
      caption: '*1 dari 5 bagian yang sama besar diarsir',
      totalParts: 5,
      shadedParts: 1,
      targetBadge: 'Persen = ?'
    }
  },
  'sd4-b4-2': {
    type: 'solid-3d',
    props: {
      title: 'Wadah Balok Kubus Satuan',
      caption: '*Alas wadah memuat 12 kubus, disusun setinggi 3 tumpukan',
      solid: 'box',
      lengthLabel: 'alas: 12 kubus',
      widthLabel: 'alas',
      heightLabel: '3 tumpuk',
      targetLabel: 'Volume = ?'
    }
  },
  // Gambar lama berupa persegi panjang tanpa garis diagonal (menyesatkan); soal konseptual cukup tanpa gambar
  'sd4-b5-2': null,
  'sd4-b5-11': null,
  'sd4-b6-1': {
    type: 'pictogram',
    props: {
      title: 'Piktogram Prestasi Bintang',
      caption: '*1 simbol bintang bernilai 5 poin prestasi',
      rows: [{ label: 'Melati', count: 4 }],
      symbol: '⭐',
      unitLabel: '1 ⭐ = 5 poin'
    }
  },
  'sd4-b6-3': {
    type: 'bar-chart',
    props: {
      title: 'Peserta Ekstrakurikuler SD',
      caption: '*Banyak siswa peserta setiap kegiatan ekstrakurikuler',
      categories: [
        { label: 'Tari', val: 15 },
        { label: 'Renang', val: 25 },
        { label: 'Lukis', val: 20 },
        { label: 'Silat', val: 30 }
      ],
      yMax: 35,
      yStep: 5
    }
  },
  'sd4-b6-4': {
    type: 'bar-chart',
    props: {
      title: 'Peserta Ekstrakurikuler SD',
      caption: '*Bandingkan tinggi batang Silat dan Tari',
      categories: [
        { label: 'Tari', val: 15 },
        { label: 'Renang', val: 25 },
        { label: 'Lukis', val: 20 },
        { label: 'Silat', val: 30 }
      ],
      yMax: 35,
      yStep: 5
    }
  },
  'sd4-b6-9': {
    type: 'bar-chart',
    props: {
      title: 'Banyak Buku yang Dibaca dalam Sebulan',
      caption: '*Bandingkan tinggi batang setiap siswa',
      categories: [
        { label: 'Andi', val: 7 },
        { label: 'Beni', val: 4 },
        { label: 'Citra', val: 9 },
        { label: 'Dewi', val: 6 }
      ],
      yMax: 10,
      yStep: 2
    }
  },
  'sd4-b6-12': {
    type: 'bar-chart',
    props: {
      title: 'Penjualan Buah Toko Segar (kg)',
      caption: '*Bandingkan tinggi batang Jeruk dan Pisang',
      categories: [
        { label: 'Apel', val: 45 },
        { label: 'Jeruk', val: 60 },
        { label: 'Mangga', val: 35 },
        { label: 'Pisang', val: 50 }
      ],
      yMax: 70,
      yStep: 10
    }
  },
  'sd4-b6-15': {
    type: 'pictogram',
    props: {
      title: 'Piktogram Pembagian Pensil',
      caption: '*Kelas 4A menerima 48 pensil',
      rows: [{ label: 'Kelas 4A', count: '?' }],
      symbol: '✏️',
      unitLabel: '1 ✏️ = 12 pensil'
    }
  },
  'sd4-b6-16': {
    type: 'bar-chart',
    props: {
      title: 'Sumbangan Buku Tiap Kelas',
      caption: '*Banyak buku yang disumbangkan setiap kelas',
      categories: [
        { label: '4A', val: 25 },
        { label: '4B', val: 30 },
        { label: '4C', val: 20 },
        { label: '4D', val: 37 }
      ],
      yMax: 40,
      yStep: 10
    }
  },
  'sd4-b6-18': {
    type: 'pictogram',
    props: {
      title: 'Piktogram Koleksi Pojok Baca',
      caption: '*1 simbol buku mewakili 10 buku',
      rows: [
        { label: 'Cerita', count: 6 },
        { label: 'Majalah', count: 2 }
      ],
      symbol: '📚',
      unitLabel: '1 📚 = 10 buku'
    }
  },

  // ---------------- Kelas 5 ----------------
  'sd5-b3-4': {
    type: 'bar-model',
    props: {
      title: 'Pemotongan Pita',
      caption: '*Pita 4½ m dipotong 1¾ m untuk kado dan ½ m untuk kerajinan',
      rows: [
        {
          segments: [
            { label: 'Kado 1¾ m', width: 100, color: 'blue' },
            { label: '½ m', width: 40, color: 'green' },
            { label: 'Sisa ?', width: 110, color: 'amber' }
          ],
          totalLabel: '4½ m'
        }
      ],
      target: '? m',
      targetLabel: 'Sisa Pita'
    }
  },
  'sd5-b3-7': {
    type: 'bar-model',
    props: {
      title: 'Pengurangan Pecahan Campuran',
      caption: '*Bandingkan panjang 2½ dan 1⅓',
      rows: [
        { segments: [{ label: '2½', width: 210, color: 'blue' }], totalLabel: '2½' },
        {
          segments: [
            { label: '1⅓', width: 112, color: 'green' },
            { label: 'Selisih ?', width: 98, color: 'amber' }
          ],
          totalLabel: '2½'
        }
      ],
      target: '?',
      targetLabel: 'Hasil'
    }
  },
  'sd5-b4-4': {
    type: 'rectangle',
    props: {
      title: 'Denah Kebun Persegi Panjang',
      caption: '*Kebun 20 m × 15 m, tiang pagar dipasang setiap 5 meter',
      dimA: 'p = 20 m',
      dimB: 'l = 15 m',
      targetBadge: 'Banyak Tiang = ?'
    }
  },
  'sd5-b4-6': {
    type: 'rectangle',
    props: {
      title: 'Keliling Persegi Panjang',
      caption: '*Panjang 18 cm dan lebar 10 cm',
      dimA: 'p = 18 cm',
      dimB: 'l = 10 cm',
      targetBadge: 'Keliling = ? cm'
    }
  },
  'sd5-b4-7': {
    type: 'parallelogram',
    props: {
      title: 'Keliling Jajar Genjang',
      caption: '*Panjang sisi-sisinya 10 cm dan 6 cm',
      dimA: 'a = 10 cm',
      sideB: 'b = 6 cm',
      targetBadge: 'Keliling = ? cm'
    }
  },
  'sd5-b4-10': {
    type: 'kite',
    props: {
      title: 'Keliling Layang-Layang',
      caption: '*Sisi-sisi berdekatan 12 cm dan 18 cm',
      dimA: '',
      dimB: '',
      sideA: '12 cm',
      sideB: '18 cm',
      targetBadge: 'Keliling = ? cm'
    }
  },
  'sd5-b5-4': {
    type: 'trapezoid',
    props: {
      title: 'Luas Trapesium',
      caption: '*Sisi sejajar 14 cm dan 18 cm, tinggi 8 cm',
      dimA: 'a = 14 cm',
      dimB: 'b = 18 cm',
      dimT: 't = 8 cm',
      targetBadge: 'Luas = ? cm²'
    }
  },
  'sd5-b5-6': {
    type: 'rectangle',
    props: {
      title: 'Luas Persegi Panjang',
      caption: '*Panjang 15 cm dan lebar 8 cm',
      dimA: 'p = 15 cm',
      dimB: 'l = 8 cm',
      targetBadge: 'Luas = ? cm²'
    }
  },
  'sd5-b5-7': {
    type: 'triangle',
    props: {
      title: 'Luas Segitiga',
      caption: '*Panjang alas 14 cm dan tinggi 10 cm',
      type: 'isosceles',
      baseLabel: 'alas = 14 cm',
      heightLabel: 't = 10 cm',
      targetBadge: 'Luas = ? cm²'
    }
  },
  'sd5-b5-8': {
    type: 'parallelogram',
    props: {
      title: 'Luas Jajar Genjang',
      caption: '*Panjang alas 18 cm dan tinggi 7 cm',
      dimA: 'alas = 18 cm',
      dimT: 't = 7 cm',
      targetBadge: 'Luas = ? cm²'
    }
  },
  'sd5-b5-10': {
    type: 'kite',
    props: {
      title: 'Luas Layang-Layang',
      caption: '*Panjang diagonal 20 cm dan 15 cm',
      dimA: 'd₁ = 20 cm',
      dimB: 'd₂ = 15 cm',
      targetBadge: 'Luas = ? cm²'
    }
  },
  'sd5-b6-4': {
    type: 'circle-fraction',
    props: {
      title: 'Sudut 1/3 Putaran',
      caption: '*Satu dari tiga bagian putaran penuh',
      totalParts: 3,
      shadedParts: 1,
      label: '1/3 putaran'
    }
  },
  'sd5-b6-7': {
    type: 'clock-angle',
    props: {
      title: 'Sudut Jarum Jam pada Pukul 02.00',
      caption: '*Jarum pendek di angka 2 dan jarum panjang di angka 12',
      hour: 2,
      minute: 0,
      angleLabel: '?°',
      angleType: 'Besar Sudut = ?'
    }
  },
  'sd5-b7-8': null,
  'sd5-b8-3': {
    type: 'bar-chart',
    props: {
      title: 'Diagram Batang Ekstrakurikuler',
      caption: '*Banyak siswa peserta setiap ekstrakurikuler',
      categories: [
        { label: 'Pramuka', val: 40 },
        { label: 'Futsal', val: 35 },
        { label: 'Paduan Suara', val: 25 },
        { label: 'Seni Tari', val: 20 }
      ],
      yMax: 50,
      yStep: 10
    }
  },

  // ---------------- Kelas 6 ----------------
  'sd6-b1-4': {
    type: 'bar-model',
    props: {
      title: 'Pemotongan Panjang Tali',
      caption: '*Tali 15 meter dipotong-potong, masing-masing 1¼ meter',
      rows: [
        {
          segments: [
            { label: '1¼ m', width: 45, color: 'blue' },
            { label: '1¼ m', width: 45, color: 'blue' },
            { label: '...', width: 60, color: 'blue' },
            { label: '1¼ m', width: 45, color: 'blue' }
          ],
          totalLabel: 'Total 15 m'
        }
      ],
      target: '? potong',
      targetLabel: 'Banyak Potongan'
    }
  },
  'sd6-b1-12': {
    type: 'bar-model',
    props: {
      title: 'Pembagian Lahan Tanah',
      caption: '*Tanah 400 m²: 0,35 bagian rumah dan ¼ bagian kebun',
      rows: [
        {
          segments: [
            { label: 'Rumah 0,35', width: 95, color: 'green' },
            { label: 'Kebun ¼', width: 75, color: 'blue' },
            { label: 'Halaman ?', width: 90, color: 'amber' }
          ],
          totalLabel: '400 m²'
        }
      ],
      target: '? m²',
      targetLabel: 'Luas Halaman'
    }
  },
  'sd6-b2-1': {
    type: 'bar-model',
    props: {
      title: 'Penyederhanaan Rasio 15 : 25',
      caption: '*Bagi kedua bilangan dengan faktor persekutuan terbesarnya',
      rows: [
        { segments: [{ label: '15', width: 75, color: 'blue' }], totalLabel: 'Bilangan pertama' },
        { segments: [{ label: '25', width: 125, color: 'green' }], totalLabel: 'Bilangan kedua' }
      ],
      target: '? : ?',
      targetLabel: 'Rasio Sederhana'
    }
  },
  'sd6-b2-2': {
    type: 'bar-model',
    props: {
      title: 'Ternak di Kandang',
      caption: '*12 ekor ayam dan 18 ekor bebek',
      rows: [
        { segments: [{ label: 'Ayam (12)', width: 60, color: 'blue' }], totalLabel: '12 Ekor' },
        { segments: [{ label: 'Bebek (18)', width: 90, color: 'green' }], totalLabel: '18 Ekor' }
      ],
      target: '? : ?',
      targetLabel: 'Ayam : Seluruh Ternak'
    }
  },
  'sd6-b3-8': {
    type: 'solid-3d',
    props: {
      title: 'Mencari Rusuk dari Luas Permukaan',
      caption: '*Luas permukaan kubus 216 cm²',
      solid: 'box',
      lengthLabel: 's = ? cm',
      widthLabel: 's',
      heightLabel: 's',
      targetLabel: 'Diketahui: L = 216 cm²'
    }
  },
  'sd6-b3-20': {
    type: 'solid-3d',
    props: {
      title: 'Akuarium Balok',
      caption: '*Tinggi air naik dari 30 cm menjadi 33 cm setelah batu dimasukkan',
      solid: 'box',
      lengthLabel: 'p = 80 cm',
      widthLabel: 'l = 50 cm',
      heightLabel: '30 → 33 cm',
      targetLabel: 'V Batu = ?'
    }
  },
  'sd6-b4-13': {
    type: 'spinner',
    props: {
      title: 'Roda Putar (Spinner) Peluang',
      caption: '*8 juring sama besar: 3 merah, 3 kuning, 2 hijau',
      sectors: ['merah', 'merah', 'merah', 'kuning', 'kuning', 'kuning', 'hijau', 'hijau'],
      targetLabel: 'P(Hijau) = ?'
    }
  },

  // ---------------- Kelas 7 ----------------
  'smp7-b1-1': {
    type: 'number-line',
    props: {
      title: 'Garis Bilangan Bulat',
      caption: '*Mulai dari −12, tambah 7, lalu kurangi −5',
      min: -15,
      max: 5,
      step: 1,
      marks: [{ val: -12, label: '−12' }],
      targetLabel: 'Hasil = ?'
    }
  },
  'smp7-b1-3': {
    type: 'number-line',
    props: {
      title: 'Penurunan Suhu Ruang Pendingin',
      caption: '*Suhu awal −4°C, kemudian turun 7°C',
      min: -15,
      max: 5,
      step: 1,
      marks: [{ val: -4, label: '−4°C' }],
      targetLabel: 'Suhu Akhir = ?'
    }
  },
  'smp7-b1-5': {
    type: 'number-line',
    props: {
      title: 'Penjumlahan Bilangan Negatif',
      caption: '*Mulai dari −15, lalu tambah −28 (bergeser ke kiri)',
      min: -50,
      max: 10,
      step: 5,
      marks: [{ val: -15, label: '−15' }],
      targetLabel: 'Hasil = ?'
    }
  },
  'smp7-b3-1': {
    type: 'bar-model',
    props: {
      title: 'Perbandingan Massa',
      caption: '*Samakan satuan terlebih dahulu: 1 kg = 1.000 gram',
      rows: [
        { segments: [{ label: '250 g', width: 50, color: 'blue' }], totalLabel: '250 gram' },
        { segments: [{ label: '1 kg', width: 200, color: 'green' }], totalLabel: '1 kg' }
      ],
      target: '? : ?',
      targetLabel: 'Rasio Sederhana'
    }
  },

  // ---------------- Kelas 9 ----------------
  'smp9-b2-8': {
    type: 'solid-3d',
    props: {
      title: 'Tinggi Kerucut',
      caption: '*Jari-jari alas 5 cm dan garis pelukis 13 cm',
      solid: 'cone',
      radiusLabel: 'r = 5 cm',
      heightLabel: 't = ?',
      slantLabel: 's = 13 cm',
      targetLabel: 'Tinggi t = ?'
    }
  },

  // ---------------- Kelas 10 ----------------
  // Soal logaritma tidak berkaitan dengan grafik eksponen yang sebelumnya dipasang
  'sma10-b1-1': null
};

// Perubahan sebagian props tanpa mengganti seluruh gambar
const PROP_PATCHES = {
  // Judul/keterangan gambar tidak boleh menyebut nama bangun yang ditanyakan
  'sd4-b5-1': { title: 'Bangun Datar Apakah Ini?' },
  'sd4-b5-8': { title: 'Bangun Datar Apakah Ini?' },
  'sd4-b5-13': { title: 'Bangun Datar Apakah Ini?' },
  'sd5-b7-1': { title: 'Bangun Datar Apakah Ini?' },
  'sd5-b7-3': { title: 'Bangun Datar Apakah Ini?' },
  'sd5-b7-4': { targetBadge: 'Sifat = ?', caption: '*Amati sisi-sisi dan sudut-sudut jajar genjang' },
  'sd6-b3-11': { targetLabel: 'Banyak Kotak = ?' },
  'sd6-b3-14': { targetLabel: 'Luas Kertas = ?' },
  'sd6-b3-17': { heightLabel: 'kedalaman 1,5 m', targetLabel: 'Luas Keramik = ?' },
  'sd6-b4-3': { caption: '*Peluang munculnya mata dadu lebih dari 4' },
  'sd6-b4-4': { title: 'Peluang Pengambilan Bola', caption: '*Isi kotak: 4 bola merah, 6 bola biru, dan 5 bola hijau' },
  'sd6-b4-7': { title: 'Peluang Pengambilan Bola', caption: '*Isi kotak: 4 bola merah, 5 bola biru, dan 3 bola hijau' },
  // Titik bayangan tidak lagi digambar di koordinat jawaban (bisa dibaca dari grid)
  'smp9-b3-1': { arrow: null, targetPoint: { label: "A'(?, ?)" } },
  'smp9-b3-2': { targetPoint: { label: "B'(?, ?)" } },
  'smp9-b3-3': { targetPoint: { label: "P'(?, ?)" } },
  'smp9-b3-5': { arrow: null, targetPoint: { label: "A'(?, ?)" } },
  'smp9-b3-7': { targetPoint: { label: "C'(?, ?)" } },
  'smp9-b3-8': { targetPoint: { label: "D'(?, ?)" } },
  'smp9-b3-10': { arrow: null, targetPoint: { label: "Q'(?, ?)" } },
  'smp9-b3-12': { targetPoint: { label: "K'(?, ?)" } },
  'smp9-b3-14': { targetPoint: { label: "R'(?, ?)" } }
};

// ---------------------------------------------------------------------------
// Soal pengganti / penulisan ulang (field yang diisi menimpa field lama)
// ---------------------------------------------------------------------------
const QUESTIONS = {
  // Soal yang merujuk "soal sebelumnya" dibuat mandiri (paket PR mengambil soal secara terpisah)
  'sd4-b6-4': {
    question: 'Perhatikan diagram batang peserta ekstrakurikuler: Tari 15 siswa, Renang 25 siswa, Lukis 20 siswa, dan Silat 30 siswa. Selisih jumlah siswa yang mengikuti Silat dan Tari adalah...'
  },
  'sd4-b2-12': {
    question: 'Ibu memotong sebuah semangka menjadi 8 bagian sama besar. Kakak memakan 2 potong dan Adik memakan 3 potong. Sisa bagian semangka yang belum dimakan adalah...'
  },
  'smp7-b5-19': {
    question: 'Pada segitiga siku-siku $ABC$ siku-siku di $A$, ditarik garis tinggi $AD$ tegak lurus $BC$. Jika $BD = 4$ cm dan $CD = 9$ cm, maka panjang sisi $AB$ adalah...'
  },
  'sma10-b5-2': {
    question: 'Jika diketahui sistem persamaan:\n$$\\begin{cases} x + y + z = 9 \\\\ x + 2y + z = 12 \\\\ x + y + 3z = 17 \\end{cases}$$\nMaka nilai $z$ adalah...'
  },
  'sma12-b2-12': {
    question: 'Pak Dani meminjam uang sebesar Rp12.000.000,00 di koperasi dengan suku bunga 1% per bulan. Pinjaman dilunasi dengan anuitas bulanan Rp1.100.000,00 dan bunga pada bulan pertama adalah Rp120.000,00. Besar angsuran pokok pada bulan pertama adalah...'
  },
  'sd4-b6-12': {
    question: 'Perhatikan diagram batang penjualan buah: Apel 45 kg, Jeruk 60 kg, Mangga 35 kg, dan Pisang 50 kg. Selisih penjualan Jeruk dan Pisang adalah...'
  },

  // --- Kelas 4: pengganti soal di luar cakupan Fase B ---
  'sd4-b5-11': {
    difficulty: 'Sedang',
    question: 'Dua buah segitiga siku-siku yang sama besar disusun sehingga sisi miringnya saling berimpit. Bangun datar baru yang terbentuk adalah...',
    options: [
      { key: 'A', text: 'Lingkaran' },
      { key: 'B', text: 'Segilima' },
      { key: 'C', text: 'Persegi panjang' },
      { key: 'D', text: 'Segienam' }
    ],
    correctAnswer: 'C',
    hint: 'Bayangkan dua potongan segitiga siku-siku yang dipasang berhadapan pada sisi terpanjangnya. Sudut siku-sikunya berada di dua pojok yang berseberangan.',
    bestSolution: '**Langkah Penyelesaian Terstruktur:**\n1. Kedua segitiga digabung pada sisi miring sehingga sisi miring menjadi garis diagonal.\n2. Bangun baru memiliki 4 sisi dan 4 sudut siku-siku, dengan sisi-sisi berhadapan sama panjang.\n3. Bangun tersebut adalah **persegi panjang** (Opsi C).'
  },
  'sd4-b6-9': {
    difficulty: 'Mudah',
    question: 'Diagram batang menunjukkan banyak buku yang dibaca siswa dalam sebulan: Andi 7 buku, Beni 4 buku, Citra 9 buku, dan Dewi 6 buku. Siswa yang paling banyak membaca buku adalah...',
    options: [
      { key: 'A', text: 'Citra' },
      { key: 'B', text: 'Andi' },
      { key: 'C', text: 'Dewi' },
      { key: 'D', text: 'Beni' }
    ],
    correctAnswer: 'A',
    hint: 'Cari batang yang paling tinggi pada diagram.',
    bestSolution: '**Langkah Penyelesaian Terstruktur:**\nUrutkan banyak buku: $9 > 7 > 6 > 4$.\nBatang tertinggi adalah milik Citra dengan 9 buku, sehingga jawabannya **Citra** (Opsi A).'
  },
  'sd4-b6-10': {
    difficulty: 'Mudah',
    question: 'Catatan hasil panen jeruk Pak Rudi: hari Senin 12 kg, hari Selasa 15 kg, dan hari Rabu 9 kg. Jumlah panen jeruk selama tiga hari tersebut adalah...',
    options: [
      { key: 'A', text: '33 kg' },
      { key: 'B', text: '36 kg' },
      { key: 'C', text: '27 kg' },
      { key: 'D', text: '39 kg' }
    ],
    correctAnswer: 'B',
    hint: 'Jumlahkan hasil panen setiap hari: $12 + 15 + 9$.',
    bestSolution: '**Langkah Penyelesaian Terstruktur:**\n$$12 + 15 + 9 = 36\\text{ kg}$$\nJumlah panen jeruk adalah **36 kg** (Opsi B).'
  },
  'sd4-b6-14': {
    question: 'Data jenis transportasi siswa: jalan kaki 12 siswa, sepeda 18 siswa, angkutan kota 15 siswa, dan diantar motor 25 siswa. Berapa banyak siswa yang berangkat dengan sepeda atau jalan kaki?',
    options: [
      { key: 'A', text: '27 siswa' },
      { key: 'B', text: '30 siswa' },
      { key: 'C', text: '33 siswa' },
      { key: 'D', text: '37 siswa' }
    ],
    correctAnswer: 'B',
    hint: 'Jumlahkan siswa yang naik sepeda dan yang berjalan kaki: $18 + 12$.',
    bestSolution: '**Langkah Penyelesaian Terstruktur:**\n$$18 + 12 = 30\\text{ siswa}$$\nBanyak siswa yang bersepeda atau berjalan kaki adalah **30 siswa** (Opsi B).'
  },
  'sd4-b6-16': {
    question: 'Diagram batang menunjukkan sumbangan buku: Kelas 4A 25 buku, Kelas 4B 30 buku, Kelas 4C 20 buku, dan Kelas 4D 37 buku. Kelas yang menyumbang paling sedikit dan selisihnya dengan kelas yang menyumbang paling banyak adalah...',
    options: [
      { key: 'A', text: 'Kelas 4C, selisih 17 buku' },
      { key: 'B', text: 'Kelas 4A, selisih 12 buku' },
      { key: 'C', text: 'Kelas 4C, selisih 10 buku' },
      { key: 'D', text: 'Kelas 4B, selisih 7 buku' }
    ],
    correctAnswer: 'A',
    hint: 'Cari batang terpendek dan batang tertinggi, lalu kurangkan nilainya.',
    bestSolution: '**Langkah Penyelesaian Terstruktur:**\n1. Batang terpendek: Kelas 4C (20 buku).\n2. Batang tertinggi: Kelas 4D (37 buku).\n3. Selisih: $37 - 20 = 17$ buku.\nJawabannya **Kelas 4C, selisih 17 buku** (Opsi A).'
  },
  'sd4-b6-18': {
    question: 'Pada piktogram koleksi pojok baca, 1 simbol buku mewakili 10 buku. Buku cerita digambar dengan 6 simbol dan majalah dengan 2 simbol. Selisih banyak buku cerita dan majalah adalah...',
    options: [
      { key: 'A', text: '4 buku' },
      { key: 'B', text: '20 buku' },
      { key: 'C', text: '60 buku' },
      { key: 'D', text: '40 buku' }
    ],
    correctAnswer: 'D',
    hint: 'Hitung selisih simbolnya dulu ($6 - 2$), lalu kalikan dengan 10.',
    bestSolution: '**Langkah Penyelesaian Terstruktur:**\n1. Buku cerita: $6 \\times 10 = 60$ buku.\n2. Majalah: $2 \\times 10 = 20$ buku.\n3. Selisih: $60 - 20 = 40$ buku.\nSelisihnya adalah **40 buku** (Opsi D).'
  },
  'sd4-b6-19': {
    question: 'Tabel nilai matematika 20 siswa: nilai 60 (3 siswa), nilai 70 (5 siswa), nilai 80 (7 siswa), nilai 90 (4 siswa), dan nilai 100 (1 siswa). Berapa banyak siswa yang memperoleh nilai 80 atau lebih?',
    options: [
      { key: 'A', text: '11 siswa' },
      { key: 'B', text: '12 siswa' },
      { key: 'C', text: '8 siswa' },
      { key: 'D', text: '13 siswa' }
    ],
    correctAnswer: 'B',
    hint: 'Jumlahkan siswa yang mendapat nilai 80, 90, dan 100.',
    bestSolution: '**Langkah Penyelesaian Terstruktur:**\n$$7 + 4 + 1 = 12\\text{ siswa}$$\nBanyak siswa yang memperoleh nilai 80 atau lebih adalah **12 siswa** (Opsi B).'
  },

  // --- Pengganti soal kembar dalam bab yang sama ---
  'sd4-b2-8': {
    question: 'Hasil dari pengurangan $\\frac{6}{8} - \\frac{3}{8}$ adalah...',
    options: [
      { key: 'A', text: '$\\frac{3}{16}$' },
      { key: 'B', text: '$\\frac{9}{8}$' },
      { key: 'C', text: '$\\frac{2}{8}$' },
      { key: 'D', text: '$\\frac{3}{8}$' }
    ],
    correctAnswer: 'D',
    hint: 'Penyebutnya sudah sama, jadi cukup kurangkan pembilangnya: $6 - 3$.',
    bestSolution: '**Langkah Penyelesaian Terstruktur:**\n$$\\frac{6}{8} - \\frac{3}{8} = \\frac{6 - 3}{8} = \\frac{3}{8}$$\nHasilnya adalah **$\\frac{3}{8}$** (Opsi D).'
  },
  'sd5-b4-7': {
    question: 'Sebuah jajar genjang memiliki panjang sisi 10 cm dan 6 cm. Keliling jajar genjang tersebut adalah...',
    options: [
      { key: 'A', text: '16 cm' },
      { key: 'B', text: '32 cm' },
      { key: 'C', text: '60 cm' },
      { key: 'D', text: '26 cm' }
    ],
    correctAnswer: 'B',
    hint: 'Jajar genjang memiliki dua pasang sisi yang sama panjang: $K = 2 \\times (a + b)$.',
    bestSolution: '**Langkah Penyelesaian Terstruktur:**\n$$K = 2 \\times (10 + 6) = 2 \\times 16 = 32\\text{ cm}$$\nKelilingnya adalah **32 cm** (Opsi B).'
  },
  'sd5-b6-7': {
    question: 'Besar sudut terkecil yang dibentuk oleh kedua jarum jam pada pukul 02.00 tepat adalah...',
    options: [
      { key: 'A', text: '$30^\\circ$' },
      { key: 'B', text: '$60^\\circ$' },
      { key: 'C', text: '$90^\\circ$' },
      { key: 'D', text: '$120^\\circ$' }
    ],
    correctAnswer: 'B',
    hint: 'Jarak antara dua angka berurutan pada jam adalah $30^\\circ$. Pada pukul 02.00, jarum pendek di angka 2 dan jarum panjang di angka 12.',
    bestSolution: '**Langkah Penyelesaian Terstruktur:**\n$$2 \\times 30^\\circ = 60^\\circ$$\nSudut terkecilnya adalah **$60^\\circ$** (Opsi B).'
  },
  'sd5-b7-8': {
    question: 'Bangun datar segiempat yang kedua diagonalnya sama panjang dan saling membagi dua sama panjang, tetapi tidak berpotongan tegak lurus adalah...',
    options: [
      { key: 'A', text: 'Belah ketupat' },
      { key: 'B', text: 'Layang-layang' },
      { key: 'C', text: 'Trapesium' },
      { key: 'D', text: 'Persegi panjang' }
    ],
    correctAnswer: 'D',
    hint: 'Diagonal belah ketupat dan layang-layang berpotongan tegak lurus. Segiempat mana yang diagonalnya sama panjang tetapi tidak tegak lurus?',
    bestSolution: '**Langkah Penyelesaian Terstruktur:**\n1. Belah ketupat dan layang-layang: diagonal berpotongan tegak lurus (tidak sesuai).\n2. Trapesium: diagonal tidak saling membagi dua sama panjang (tidak sesuai).\n3. Persegi panjang: diagonal sama panjang, saling membagi dua, dan tidak tegak lurus.\nJawabannya **persegi panjang** (Opsi D).'
  },
  'smp9-b2-8': {
    question: 'Sebuah kerucut memiliki jari-jari alas 5 cm dan panjang garis pelukis 13 cm. Tinggi kerucut tersebut adalah...',
    options: [
      { key: 'A', text: '8 cm' },
      { key: 'B', text: '12 cm' },
      { key: 'C', text: '18 cm' },
      { key: 'D', text: '14 cm' }
    ],
    correctAnswer: 'B',
    hint: 'Tinggi, jari-jari, dan garis pelukis membentuk segitiga siku-siku dengan garis pelukis sebagai sisi miring: $t = \\sqrt{s^2 - r^2}$.',
    bestSolution: '**Langkah Penyelesaian Terstruktur:**\n$$t = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12\\text{ cm}$$\nTinggi kerucut adalah **12 cm** (Opsi B).'
  },
  'sd6-b3-8': {
    question: 'Luas permukaan sebuah kubus adalah 216 cm². Panjang rusuk kubus tersebut adalah...',
    options: [
      { key: 'A', text: '4 cm' },
      { key: 'B', text: '6 cm' },
      { key: 'C', text: '8 cm' },
      { key: 'D', text: '36 cm' }
    ],
    correctAnswer: 'B',
    hint: 'Kubus memiliki 6 sisi persegi yang sama. Luas satu sisi $= 216 : 6$, lalu cari bilangan yang jika dikuadratkan menghasilkan luas tersebut.',
    bestSolution: '**Langkah Penyelesaian Terstruktur:**\n1. Luas satu sisi: $216 : 6 = 36\\text{ cm}^2$.\n2. $s \\times s = 36$, maka $s = 6$ cm.\nPanjang rusuknya adalah **6 cm** (Opsi B).'
  }
};

// ---------------------------------------------------------------------------
let visualFixes = 0;
let questionFixes = 0;
let newlineFixes = 0;
const touched = new Set();

function fixLiteralNewlines(value) {
  if (typeof value === 'string') {
    // "\n" mentah (backslash + n) yang bukan perintah LaTeX seperti \neq
    const fixed = value.replace(/\\n(?![a-z])/g, '\n');
    if (fixed !== value) newlineFixes++;
    return fixed;
  }
  if (Array.isArray(value)) return value.map(fixLiteralNewlines);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, fixLiteralNewlines(v)]));
  }
  return value;
}

for (const grade of GRADES) {
  const g = await loadGrade(grade);
  g.data = fixLiteralNewlines(g.data);
  for (const { q } of allQuestions(g.data)) {
    if (QUESTIONS[q.id]) {
      Object.assign(q, QUESTIONS[q.id]);
      questionFixes++;
      touched.add(q.id);
    }
    if (Object.prototype.hasOwnProperty.call(VISUALS, q.id)) {
      if (VISUALS[q.id] === null) delete q.visual;
      else q.visual = VISUALS[q.id];
      visualFixes++;
      touched.add(q.id);
    }
    if (PROP_PATCHES[q.id]) {
      if (!q.visual) throw new Error(`${q.id}: tidak punya gambar untuk di-patch`);
      for (const [k, v] of Object.entries(PROP_PATCHES[q.id])) {
        if (v === null) delete q.visual.props[k];
        else q.visual.props[k] = v;
      }
      visualFixes++;
      touched.add(q.id);
    }
    // Validasi ringan untuk soal yang diubah
    if (touched.has(q.id)) {
      const keys = (q.options || []).map((o) => o.key);
      if (!keys.includes(q.correctAnswer)) throw new Error(`${q.id}: kunci ${q.correctAnswer} tidak ada di opsi`);
      if (q.bestSolution && /\(Opsi [A-D]\)/.test(q.bestSolution) && !q.bestSolution.includes(`(Opsi ${q.correctAnswer})`)) {
        throw new Error(`${q.id}: pembahasan menyebut opsi yang berbeda dari kunci`);
      }
    }
  }
  saveGrade(g);
}

const expected = new Set([...Object.keys(VISUALS), ...Object.keys(PROP_PATCHES), ...Object.keys(QUESTIONS)]);
const missing = [...expected].filter((id) => !touched.has(id));
if (missing.length) throw new Error(`ID tidak ditemukan: ${missing.join(', ')}`);

console.log(`Gambar diperbaiki: ${visualFixes}`);
console.log(`Soal ditulis ulang/diganti: ${questionFixes}`);
console.log(`Teks dengan "\\n" mentah diperbaiki: ${newlineFixes}`);
