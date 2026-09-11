/**
 * Registry Visual untuk Kelas 4 SD
 * Fokus: Pecahan, Pola Bilangan, Luas Petak Satuan, Bangun Datar, Piktogram & Diagram Batang
 */
export const grade4VisualRegistry = {
  // ==========================================================
  // BAB 2: PECAHAN
  // ==========================================================
  'sd4-b2-1': {
    type: 'fraction-strip',
    props: {
      title: 'Model Pecahan Senilai',
      caption: '*1 dari 3 bagian yang sama besar',
      totalParts: 3,
      shadedParts: 1,
      label: '1 / 3'
    }
  },

  'sd4-b2-2': {
    type: 'fraction-strip',
    props: {
      title: 'Penyederhanaan Pecahan',
      caption: '*6 dari 8 bagian bidang berpetak',
      totalParts: 8,
      shadedParts: 6,
      label: '6 / 8'
    }
  },

  'sd4-b2-3': {
    type: 'fraction-strip',
    props: {
      title: 'Penjumlahan Pecahan Berpenyebut Sama',
      caption: '*Biru: 3/7 bagian, Oranye: 2/7 bagian',
      totalParts: 7,
      shadedGroups: [3, 2],
      targetBadge: 'Total = ?'
    }
  },

  'sd4-b2-4': {
    type: 'fraction-strip',
    props: {
      title: 'Perbandingan Pecahan',
      caption: '*Arsiran 3 bagian dari 5 petak',
      totalParts: 5,
      shadedParts: 3,
      label: '3 / 5'
    }
  },

  'sd4-b2-5': {
    type: 'fraction-strip',
    props: {
      title: 'Pembagian Buah Melon',
      caption: '*Potongan melon Dedi (3 bagian) dan Lani (4 bagian) dari 8 potong',
      totalParts: 8,
      shadedParts: 4,
      label: '4 / 8 bagian'
    }
  },

  'sd4-b2-6': {
    type: 'circle-fraction',
    props: {
      title: 'Model Penyederhanaan Pecahan',
      caption: '*12 dari 16 potongan juring lingkaran diarsir',
      totalParts: 16,
      shadedParts: 12,
      targetBadge: 'Bentuk Paling Sederhana = ?'
    }
  },

  'sd4-b2-10': {
    type: 'circle-fraction',
    props: {
      title: 'Mengarsir Juring Lingkaran',
      caption: '*5 dari 8 juring lingkaran diarsir rapi',
      totalParts: 8,
      shadedParts: 5,
      label: '5/8 bagian'
    }
  },

  'sd4-b2-14': {
    type: 'fraction-strip',
    props: {
      title: 'Model Potongan Kue Bolu',
      caption: '*2 dari 5 bagian balok kue bolu',
      totalParts: 5,
      shadedParts: 2,
      label: '2/5 bagian'
    }
  },

  // ==========================================================
  // BAB 3: POLA GAMBAR DAN POLA BILANGAN
  // ==========================================================
  'sd4-b3-1': {
    type: 'number-line',
    props: {
      title: 'Pola Barisan Bilangan',
      caption: '*Amati keteraturan lompatan antar-bilangan',
      items: [5, 9, 13, 17],
      target: '?'
    }
  },

  'sd4-b3-2': {
    type: 'number-line',
    props: {
      title: 'Pola Barisan Bilangan Berkurang',
      caption: '*Amati keteraturan selisih antar-bilangan yang mengecil',
      slots: [
        { val: 35, sub: 'U₁' },
        { val: 30, sub: 'U₂' },
        { val: 25, sub: 'U₃' },
        { val: 20, sub: 'U₄' },
        { val: '?', sub: 'U₅', isTarget: true },
        { val: '?', sub: 'U₆', isTarget: true }
      ],
      promptText: 'Berapakah dua bilangan berikutnya pada kotak bertanda tanya?'
    }
  },

  'sd4-b3-3': {
    type: 'number-line',
    props: {
      title: 'Mengisi Suku Barisan yang Rumpang',
      caption: '*Lengkapi barisan bilangan: 2, 6, 10, ..., 18, 22',
      slots: [
        { val: 2, sub: 'U₁' },
        { val: 6, sub: 'U₂' },
        { val: 10, sub: 'U₃' },
        { val: '?', sub: 'U₄', isTarget: true },
        { val: 18, sub: 'U₅' },
        { val: 22, sub: 'U₆' }
      ],
      promptText: 'Berapakah bilangan yang tepat untuk mengisi posisi U₄?'
    }
  },

  'sd4-b3-7': {
    type: 'number-line',
    props: {
      title: 'Barisan Bilangan Rumpang',
      caption: '*Lengkapi titik-titik pada barisan: 12, 16, ..., 24, 28',
      slots: [
        { val: 12, sub: 'U₁' },
        { val: 16, sub: 'U₂' },
        { val: '?', sub: 'U₃', isTarget: true },
        { val: 24, sub: 'U₄' },
        { val: 28, sub: 'U₅' }
      ],
      promptText: 'Berapakah bilangan yang tepat untuk mengisi posisi U₃?'
    }
  },

  'sd4-b3-8': {
    type: 'number-line',
    props: {
      title: 'Barisan Bilangan Berkurang',
      caption: '*Lengkapi suku yang hilang pada barisan: 50, 45, 40, ..., 30',
      slots: [
        { val: 50, sub: 'U₁' },
        { val: 45, sub: 'U₂' },
        { val: 40, sub: 'U₃' },
        { val: '?', sub: 'U₄', isTarget: true },
        { val: 30, sub: 'U₅' }
      ],
      promptText: 'Berapakah suku yang hilang pada posisi U₄?'
    }
  },

  'sd4-b3-10': {
    type: 'number-line',
    props: {
      title: 'Pola Bilangan Ganjil',
      caption: '*Barisan ganjil berurutan: 1, 3, 5, 7, ...',
      items: [1, 3, 5, 7],
      targetIndex: 6,
      target: '?',
      promptText: 'Berapakah suku ke-6 (U₆) pada kotak bertanda tanya?'
    }
  },

  'sd4-b3-14': {
    type: 'number-line',
    props: {
      title: 'Pola Barisan Bilangan',
      caption: '*Tentukan bilangan suku ke-7 (U₇) dari barisan: 3, 7, 11, 15, ...',
      items: [3, 7, 11, 15],
      targetIndex: 7,
      target: '?',
      promptText: 'Berapakah nilai suku ke-7 (U₇) pada kotak bertanda tanya?'
    }
  },

  // ==========================================================
  // BAB 4: PENGUKURAN LUAS DAN VOLUME
  // ==========================================================
  'sd4-b4-1': {
    type: 'unit-grid',
    props: {
      title: 'Luas Petak Satuan',
      caption: '*Panjang 6 petak dan lebar 4 petak satuan',
      cols: 6,
      rows: 4
    }
  },

  'sd4-b4-2': {
    type: 'solid-3d',
    props: {
      title: 'Wadah Balok Kubus Satuan',
      caption: '*Kapasitas balok diisi penuh kubus mainan',
      solid: 'box',
      lengthLabel: 'p = 4 kubus',
      widthLabel: 'l = 3 kubus',
      heightLabel: 't = 3 kubus',
      targetLabel: 'Volume = ? kubus satuan'
    }
  },

  'sd4-b4-5': {
    type: 'unit-grid',
    props: {
      title: 'Pemasangan Ubin Lantai Ruang',
      caption: '*Ukuran ruangan 5 petak × 4 petak',
      cols: 5,
      rows: 4
    }
  },

  'sd4-b4-8': {
    type: 'rectangle',
    props: {
      title: 'Luas Persegi Panjang',
      caption: '*Panjang 15 cm dan lebar 8 cm',
      type: 'rectangle',
      dimA: 'p = 15 cm',
      dimB: 'l = 8 cm',
      targetBadge: 'Luas = ? cm²'
    }
  },

  'sd4-b4-9': {
    type: 'square',
    props: {
      title: 'Luas Persegi',
      caption: '*Panjang sisi bujursangkar s = 12 cm',
      dimA: 's = 12 cm',
      targetBadge: 'Luas = ? cm²'
    }
  },

  'sd4-b4-10': {
    type: 'rectangle',
    props: {
      title: 'Mencari Panjang Persegi Panjang',
      caption: '*Luas 84 cm² dan lebar 7 cm',
      dimA: 'p = ? cm',
      dimB: 'l = 7 cm',
      targetBadge: 'Luas = 84 cm²'
    }
  },

  'sd4-b4-11': {
    type: 'solid-3d',
    props: {
      title: 'Kubus Tersusun dari Kubus Satuan',
      caption: '*Panjang rusuk 4 kubus satuan',
      solid: 'box',
      lengthLabel: 's = 4',
      widthLabel: 's = 4',
      heightLabel: 's = 4',
      targetLabel: 'Volume = ? kubus'
    }
  },

  'sd4-b4-12': {
    type: 'solid-3d',
    props: {
      title: 'Volume Balok Ruang',
      caption: '*Panjang 6 cm, lebar 4 cm, dan tinggi 5 cm',
      solid: 'box',
      lengthLabel: 'p = 6 cm',
      widthLabel: 'l = 4 cm',
      heightLabel: 't = 5 cm',
      targetLabel: 'Volume = ? cm³'
    }
  },

  'sd4-b4-14': {
    type: 'unit-grid',
    props: {
      title: 'Pemasangan Ubin Kamar Tidur',
      caption: '*Ruangan 4 meter × 3 meter dengan ubin 1m × 1m',
      cols: 4,
      rows: 3
    }
  },

  'sd4-b4-15': {
    type: 'solid-3d',
    props: {
      title: 'Mencari Tinggi Wadah Balok',
      caption: '*Volume 240 cm³, panjang 8 cm, dan lebar 6 cm',
      solid: 'box',
      lengthLabel: 'p = 8 cm',
      widthLabel: 'l = 6 cm',
      heightLabel: 't = ? cm',
      targetLabel: 'Diketahui: V = 240 cm³'
    }
  },

  'sd4-b4-17': {
    type: 'solid-3d',
    props: {
      title: 'Akuarium Balok Terisi Air Setengah',
      caption: '*Panjang 50 cm, lebar 30 cm, dan tinggi 40 cm',
      solid: 'box',
      lengthLabel: 'p = 50 cm',
      widthLabel: 'l = 30 cm',
      heightLabel: 't = 40 cm',
      targetLabel: 'Setengah Isi = ?'
    }
  },

  // ==========================================================
  // BAB 5: BANGUN DATAR
  // ==========================================================
  'sd4-b5-1': {
    type: 'triangle',
    props: {
      title: 'Segitiga Sama Sisi',
      caption: '*Segibanyak beraturan dengan 3 sisi sama panjang dan 3 sudut sama',
      type: 'equilateral',
      baseLabel: 'sisi',
      heightLabel: '',
      targetBadge: '3 Sisi Sama'
    }
  },

  'sd4-b5-2': {
    type: 'quadrilateral',
    props: {
      title: 'Potongan Diagonal Persegi',
      caption: '*Garis diagonal membagi persegi menjadi dua segitiga siku-siku sama kaki',
      type: 'rectangle',
      dimA: 'sisi s',
      dimB: 'sisi s',
      targetBadge: '2 Segitiga'
    }
  },

  'sd4-b5-3': {
    type: 'quadrilateral',
    props: {
      title: 'Sudut Siku-Siku Persegi Panjang',
      caption: '*Amati sudut pada setiap pojok persegi panjang',
      type: 'rectangle',
      dimA: 'panjang',
      dimB: 'lebar',
      targetBadge: 'Banyak Sudut = ?'
    }
  },

  'sd4-b5-4': {
    type: 'kite',
    props: {
      title: 'Dua Segitiga Sama Kaki Bergabung',
      caption: '*Dua segitiga sama kaki digabungkan pada sisi alasnya yang berimpit',
      dimA: 'diagonal 1',
      dimB: 'diagonal 2',
      targetBadge: 'Bangun Segiempat = ?'
    }
  },

  'sd4-b5-8': {
    type: 'trapezoid',
    props: {
      title: 'Trapesium',
      caption: '*Bangun datar segiempat dengan sepasang sisi sejajar tidak sama panjang',
      dimA: 'sisi atas a',
      dimB: 'sisi bawah b',
      dimT: 'tinggi t',
      targetBadge: '1 Pasang Sejajar'
    }
  },

  'sd4-b5-11': {
    type: 'right-triangle',
    props: {
      title: 'Sudut Lancip Segitiga Siku-Siku',
      caption: '*Sudut siku-siku 90° dan satu sudut lancip 35°',
      base: 8,
      height: 6,
      baseLabel: 'Sudut = 35°',
      heightLabel: 'Tegak (90°)',
      hypLabel: 'Sudut Lain = ?',
      vertices: { right: 'B', top: 'A', far: 'C' }
    }
  },

  'sd4-b5-12': {
    type: 'triangle',
    props: {
      title: 'Keliling Segitiga Sama Sisi',
      caption: '*Ketiga sisi memiliki panjang yang sama (s = 9 cm)',
      type: 'equilateral',
      baseLabel: 's = 9 cm',
      heightLabel: '',
      targetBadge: 'Keliling = ? cm'
    }
  },

  'sd4-b5-13': {
    type: 'rhombus',
    props: {
      title: 'Belah Ketupat',
      caption: '*4 sisi sama panjang dengan sudut bukan siku-siku',
      dimA: 'diagonal 1',
      dimB: 'diagonal 2',
      targetBadge: '4 Sisi Sama'
    }
  },

  'sd4-b5-14': {
    type: 'square',
    props: {
      title: 'Mencari Panjang Sisi Persegi',
      caption: '*Keliling persegi K = 48 cm',
      dimA: 's = ? cm',
      targetBadge: 'K = 48 cm'
    }
  },

  'sd4-b5-15': {
    type: 'rectangle',
    props: {
      title: 'Keliling Persegi Panjang',
      caption: '*Panjang 14 cm dan lebar 6 cm',
      dimA: 'p = 14 cm',
      dimB: 'l = 6 cm',
      targetBadge: 'Keliling = ? cm'
    }
  },

  'sd4-b5-16': {
    type: 'triangle',
    props: {
      title: 'Taman Segitiga Sama Kaki',
      caption: '*Keliling 36 meter dengan panjang alas 10 meter',
      type: 'isosceles',
      baseLabel: 'alas = 10 m',
      sideLabel: 'kaki = ? m',
      targetBadge: 'K = 36 m'
    }
  },

  'sd4-b5-17': {
    type: 'rectangle',
    props: {
      title: 'Lapangan Sepak Bola',
      caption: '*Ukuran panjang 100 meter dan lebar 60 meter',
      dimA: 'p = 100 m',
      dimB: 'l = 60 m',
      targetBadge: 'Keliling = ? m'
    }
  },

  'sd4-b5-19': {
    type: 'parallelogram',
    props: {
      title: 'Keliling Jajar Genjang',
      caption: '*Keliling 50 cm dengan salah satu sisi 16 cm',
      dimA: 'a = 16 cm',
      dimT: '',
      targetBadge: 'Sisi Lain = ?'
    }
  },

  // ==========================================================
  // BAB 6: PIKTOGRAM DAN DIAGRAM BATANG
  // ==========================================================
  'sd4-b6-1': {
    type: 'pictogram',
    props: {
      title: 'Piktogram Prestasi Bintang',
      caption: '*1 simbol bintang bernilai 5 poin prestasi',
      rows: [
        { label: 'Kelompok Mawar', count: 4 },
        { label: 'Kelompok Melati', count: 6 },
        { label: 'Kelompok Kenanga', count: 3 }
      ],
      symbol: '⭐',
      unitLabel: '1 ⭐ = 5 poin'
    }
  },

  'sd4-b6-3': {
    type: 'bar-chart',
    props: {
      title: 'Diagram Batang Ekstrakurikuler SD',
      caption: '*Jumlah siswa peserta kegiatan ekstrakurikuler',
      categories: [
        { label: 'Tari', val: 15 },
        { label: 'Renang', val: 25 },
        { label: 'Futsal', val: 30 },
        { label: 'Musik', val: 20 }
      ],
      yMax: 35,
      yStep: 5
    }
  },

  'sd4-b6-4': {
    type: 'bar-chart',
    props: {
      title: 'Perbandingan Ekstrakurikuler',
      caption: '*Cari selisih peserta terbanyak (Futsal) dan tersedikit (Tari)',
      categories: [
        { label: 'Tari', val: 15 },
        { label: 'Renang', val: 25 },
        { label: 'Futsal', val: 30 },
        { label: 'Musik', val: 20 }
      ],
      yMax: 35,
      yStep: 5
    }
  },

  'sd4-b6-6': {
    type: 'pictogram',
    props: {
      title: 'Piktogram Peminjaman Buku',
      caption: '*1 simbol buku mewakili 5 eksemplar',
      rows: [
        { label: 'Senin', count: 4 },
        { label: 'Selasa', count: 6 },
        { label: 'Rabu', count: 3 }
      ],
      symbol: '📖',
      unitLabel: '1 📖 = 5 buku'
    }
  },

  'sd4-b6-11': {
    type: 'bar-chart',
    props: {
      title: 'Penjualan Buah Toko Segar (kg)',
      caption: '*Data penjualan aneka buah per kilogram',
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

  'sd4-b6-12': {
    type: 'bar-chart',
    props: {
      title: 'Selisih Penjualan Buah (kg)',
      caption: '*Bandingkan penjualan Jeruk (60 kg) dan Pisang (50 kg)',
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
      caption: '*1 simbol pensil mewakili 12 pensil',
      rows: [
        { label: 'Kelas 4A', count: 4 },
        { label: 'Kelas 4B', count: 3 }
      ],
      symbol: '✏️',
      unitLabel: '1 ✏️ = 12 pensil'
    }
  },

  'sd4-b6-16': {
    type: 'bar-chart',
    props: {
      title: 'Sumbangan Buku Tiap Kelas',
      caption: '*Kelas 4A (25), 4B (30), 4C (20), rata-rata 28 buku',
      categories: [
        { label: '4A', val: 25 },
        { label: '4B', val: 30 },
        { label: '4C', val: 20 },
        { label: '4D', val: 37 }
      ],
      yMax: 45,
      yStep: 10
    }
  }
};
