/**
 * Registry Visual untuk Kelas 5 SD
 * Fokus: Pecahan, Keliling & Luas Bangun Datar, Sudut Jarum Jam, Sifat Bangun, Data Piktogram
 */
export const grade5VisualRegistry = {
  // ==========================================================
  // BAB 3: BILANGAN PECAHAN
  // ==========================================================
  'sd5-b3-1': {
    type: 'fraction-strip',
    props: {
      title: 'Penjumlahan Pecahan Berbeda Penyebut',
      caption: '*Menyamakan penyebut menjadi per-enam',
      totalParts: 6,
      shadedParts: 5,
      label: '1/2 + 1/3 = 5/6'
    }
  },

  'sd5-b3-2': {
    type: 'fraction-strip',
    props: {
      title: 'Model Pecahan Campuran',
      caption: '*2 utuh ditambah 3 bagian dari 5 petak',
      totalParts: 5,
      shadedParts: 3,
      label: '2 3/5 = 13/5'
    }
  },

  'sd5-b3-4': {
    type: 'fraction-strip',
    props: {
      title: 'Pemotongan Pita Pecahan Campuran',
      caption: '*Pita sepanjang 4 1/2 m dipotong 1 1/4 m',
      totalParts: 4,
      shadedParts: 3,
      label: 'Sisa Pita = ?'
    }
  },

  'sd5-b3-5': {
    type: 'circle-fraction',
    props: {
      title: 'Konversi Pecahan ke Persen',
      caption: '*3 dari 4 bagian lingkaran sama dengan 75%',
      totalParts: 4,
      shadedParts: 3,
      label: '3/4 = 75%'
    }
  },

  'sd5-b3-7': {
    type: 'fraction-strip',
    props: {
      title: 'Pengurangan Pecahan',
      caption: '*Menyamakan penyebut menjadi per-dua belas (9/12 - 4/12)',
      totalParts: 12,
      shadedParts: 5,
      label: '3/4 - 1/3 = 5/12'
    }
  },

  // ==========================================================
  // BAB 4: KELILING BANGUN DATAR
  // ==========================================================
  'sd5-b4-1': {
    type: 'square',
    props: {
      title: 'Persegi Beraturan',
      caption: '*Memiliki 4 sisi sama panjang (s = 9 cm)',
      dimA: 's = 9 cm',
      targetBadge: 'Keliling = ? cm'
    }
  },

  'sd5-b4-2': {
    type: 'rectangle',
    props: {
      title: 'Persegi Panjang',
      caption: '*Panjang 14 cm dan lebar 6 cm',
      dimA: 'p = 14 cm',
      dimB: 'l = 6 cm',
      targetBadge: 'Keliling = ? cm'
    }
  },

  'sd5-b4-3': {
    type: 'triangle',
    props: {
      title: 'Mencari Sisi Segitiga Sama Sisi',
      caption: '*Keliling segitiga K = 45 cm',
      type: 'equilateral',
      baseLabel: 's = ? cm',
      heightLabel: '',
      targetBadge: 'K = 45 cm'
    }
  },

  'sd5-b4-4': {
    type: 'rectangle',
    props: {
      title: 'Denah Kebun Persegi Panjang',
      caption: '*Panjang 20 m dan lebar 12 m akan dipagar keliling',
      dimA: 'p = 20 m',
      dimB: 'l = 12 m',
      targetBadge: 'Panjang Pagar = ?'
    }
  },

  'sd5-b4-5': {
    type: 'square',
    props: {
      title: 'Keliling Persegi Bujursangkar',
      caption: '*Panjang sisi bujursangkar s = 12 cm',
      dimA: 's = 12 cm',
      targetBadge: 'Keliling = ? cm'
    }
  },

  'sd5-b4-6': {
    type: 'right-triangle',
    props: {
      title: 'Keliling Segitiga Siku-Siku',
      caption: '*Alas 8 cm, tinggi 6 cm, hipotenusa 10 cm',
      base: 8,
      height: 6,
      baseLabel: 'a = 8 cm',
      heightLabel: 't = 6 cm',
      hypLabel: 'c = 10 cm',
      vertices: { right: 'B', top: 'A', far: 'C' }
    }
  },

  'sd5-b4-7': {
    type: 'parallelogram',
    props: {
      title: 'Keliling Jajar Genjang',
      caption: '*Panjang sisi-sisi sejajar 10 cm dan 6 cm',
      dimA: 'a = 10 cm',
      dimT: '',
      targetBadge: 'Keliling = ? cm'
    }
  },

  'sd5-b4-10': {
    type: 'rhombus',
    props: {
      title: 'Keliling Belah Ketupat',
      caption: '*Memiliki 4 sisi sama panjang (s = 8 cm)',
      dimA: 's = 8 cm',
      dimB: '',
      targetBadge: 'Keliling = ? cm'
    }
  },

  // ==========================================================
  // BAB 5: LUAS DAERAH BANGUN DATAR
  // ==========================================================
  'sd5-b5-1': {
    type: 'triangle',
    props: {
      title: 'Luas Segitiga',
      caption: '*Panjang alas 10 cm dan tinggi tegak 8 cm',
      type: 'isosceles',
      baseLabel: 'alas = 10 cm',
      heightLabel: 't = 8 cm',
      targetBadge: 'Luas = ? cm²'
    }
  },

  'sd5-b5-2': {
    type: 'rectangle',
    props: {
      title: 'Luas Persegi Panjang',
      caption: '*Panjang 15 cm dan lebar 7 cm',
      dimA: '15 cm',
      dimB: '7 cm',
      targetBadge: 'Luas = ? cm²'
    }
  },

  'sd5-b5-3': {
    type: 'parallelogram',
    props: {
      title: 'Luas Jajar Genjang',
      caption: '*Panjang alas 12 cm dan tinggi 9 cm',
      dimA: 'alas = 12 cm',
      dimT: 't = 9 cm',
      targetBadge: 'Luas = ? cm²'
    }
  },

  'sd5-b5-4': {
    type: 'trapezoid',
    props: {
      title: 'Luas Trapesium Sama Kaki',
      caption: '*Sisi sejajar 14 cm dan 18 cm, tinggi tegak 10 cm',
      dimA: 'a = 14 cm',
      dimB: 'b = 18 cm',
      dimT: 't = 10 cm',
      targetBadge: 'Luas = ? cm²'
    }
  },

  'sd5-b5-5': {
    type: 'square',
    props: {
      title: 'Luas Persegi Bujursangkar',
      caption: '*Panjang sisi bujursangkar s = 9 cm',
      dimA: 's = 9 cm',
      targetBadge: 'Luas = ? cm²'
    }
  },

  'sd5-b5-6': {
    type: 'triangle',
    props: {
      title: 'Luas Segitiga',
      caption: '*Panjang alas 14 cm dan tinggi tegak 6 cm',
      type: 'isosceles',
      baseLabel: 'alas = 14 cm',
      heightLabel: 't = 6 cm',
      targetBadge: 'Luas = ? cm²'
    }
  },

  'sd5-b5-7': {
    type: 'rhombus',
    props: {
      title: 'Luas Belah Ketupat',
      caption: '*Panjang diagonal d₁ = 16 cm dan d₂ = 12 cm',
      dimA: 'd₁ = 16 cm',
      dimB: 'd₂ = 12 cm',
      targetBadge: 'Luas = ? cm²'
    }
  },

  'sd5-b5-8': {
    type: 'kite',
    props: {
      title: 'Luas Layang-Layang',
      caption: '*Panjang diagonal d₁ = 20 cm dan d₂ = 15 cm',
      dimA: 'd₁ = 20 cm',
      dimB: 'd₂ = 15 cm',
      targetBadge: 'Luas = ? cm²'
    }
  },

  'sd5-b5-10': {
    type: 'rectangle',
    props: {
      title: 'Mencari Panjang dari Luas',
      caption: '*Luas 96 cm² dan lebar 8 cm',
      dimA: 'p = ? cm',
      dimB: 'l = 8 cm',
      targetBadge: 'Luas = 96 cm²'
    }
  },

  // ==========================================================
  // BAB 6: SUDUT JARUM JAM
  // ==========================================================
  'sd5-b6-2': {
    type: 'clock-angle',
    props: {
      title: 'Sudut Jarum Jam pada Pukul 03.00',
      caption: '*Jarum pendek di angka 3 dan jarum panjang di angka 12',
      hour: 3,
      minute: 0,
      angleLabel: '90°',
      angleType: 'Sudut Siku-Siku'
    }
  },

  'sd5-b6-3': {
    type: 'clock-angle',
    props: {
      title: 'Sudut Jarum Jam pada Pukul 05.00',
      caption: '*Jarum pendek di angka 5 dan jarum panjang di angka 12',
      hour: 5,
      minute: 0,
      angleLabel: '150°',
      angleType: 'Sudut Tumpul'
    }
  },

  'sd5-b6-4': {
    type: 'circle-fraction',
    props: {
      title: 'Sudut 1/3 Putaran Lingkaran',
      caption: '*Satu per tiga dari 360° putaran penuh lingkaran',
      totalParts: 3,
      shadedParts: 1,
      label: '120° (Tumpul)'
    }
  },

  'sd5-b6-7': {
    type: 'clock-angle',
    props: {
      title: 'Sudut Jarum Jam Pukul 03.00',
      caption: '*Membentuk sudut siku-siku tepat 90°',
      hour: 3,
      minute: 0,
      angleLabel: '90°',
      angleType: 'Sudut Siku-Siku'
    }
  },

  'sd5-b6-8': {
    type: 'clock-angle',
    props: {
      title: 'Sudut Jarum Jam Pukul 04.00',
      caption: '*Jarum pendek di angka 4 dan jarum panjang di angka 12',
      hour: 4,
      minute: 0,
      angleLabel: '120°',
      angleType: 'Sudut Tumpul'
    }
  },

  'sd5-b6-11': {
    type: 'right-triangle',
    props: {
      title: 'Sudut Lancip Segitiga Siku-Siku',
      caption: '*Salah satu sudut lancip bernilai 35°',
      base: 8,
      height: 6,
      baseLabel: 'Sudut = 35°',
      heightLabel: 'Siku-siku (90°)',
      hypLabel: 'Sudut Lain = ?',
      vertices: { right: 'B', top: 'A', far: 'C' }
    }
  },

  'sd5-b6-12': {
    type: 'triangle',
    props: {
      title: 'Sudut Segitiga Sama Kaki',
      caption: '*Sudut puncak 50°, kedua sudut alas sama besar',
      type: 'isosceles',
      baseLabel: 'Sudut Alas = ?',
      heightLabel: 'Puncak = 50°',
      targetBadge: 'Total = 180°'
    }
  },

  'sd5-b6-14': {
    type: 'clock-angle',
    props: {
      title: 'Sudut Jarum Jam Pukul 06.00',
      caption: '*Membentuk satu garis lurus tepat (180°)',
      hour: 6,
      minute: 0,
      angleLabel: '180°',
      angleType: 'Sudut Lurus'
    }
  },

  'sd5-b6-16': {
    type: 'clock-angle',
    props: {
      title: 'Sudut Jarum Jam Pukul 03.30',
      caption: '*Jarum pendek di antara 3 dan 4, jarum panjang di angka 6',
      hour: 3,
      minute: 30,
      angleLabel: '75°',
      angleType: 'Sudut Lancip'
    }
  },

  'sd5-b6-18': {
    type: 'parallelogram',
    props: {
      title: 'Sudut Bersebelahan Jajar Genjang',
      caption: '*Sudut A = 70°, sudut-sudut bersebelahan berjumlah 180°',
      dimA: 'Sudut A = 70°',
      dimT: '',
      targetBadge: 'Sudut B = ?'
    }
  },

  'sd5-b6-19': {
    type: 'clock-angle',
    props: {
      title: 'Sudut Jarum Jam Pukul 08.20',
      caption: '*Sudut terkecil antara jarum jam dan jarum menit',
      hour: 8,
      minute: 20,
      angleLabel: '130°',
      angleType: 'Sudut Tumpul'
    }
  },

  // ==========================================================
  // BAB 7: MEMBANDINGKAN CIRI BANGUN DATAR
  // ==========================================================
  'sd5-b7-1': {
    type: 'square',
    props: {
      title: 'Sifat-Sifat Persegi',
      caption: '*Semua sisi sama panjang dan semua sudut 90°',
      dimA: 'sisi s',
      targetBadge: '4 Sisi Sama'
    }
  },

  'sd5-b7-2': {
    type: 'rectangle',
    props: {
      title: 'Simetri Lipat Persegi Panjang',
      caption: '*Memiliki 2 sumbu simetri lipat (horizontal & vertikal)',
      dimA: 'panjang',
      dimB: 'lebar',
      targetBadge: '2 Simetri Lipat'
    }
  },

  'sd5-b7-3': {
    type: 'kite',
    props: {
      title: 'Sifat Bangun Layang-Layang',
      caption: '*Dua pasang sisi sama panjang dan kedua diagonal saling tegak lurus',
      dimA: 'diagonal 1',
      dimB: 'diagonal 2',
      targetBadge: '1 Sumbu Simetri'
    }
  },

  'sd5-b7-4': {
    type: 'parallelogram',
    props: {
      title: 'Sifat-Sifat Jajar Genjang',
      caption: '*Memiliki 2 pasang sisi sejajar dan sudut berhadapan sama besar',
      dimA: 'sisi alas',
      dimT: 'tinggi',
      targetBadge: '2 Pasang Sejajar'
    }
  },

  'sd5-b7-5': {
    type: 'square',
    props: {
      title: 'Sumbu Simetri Lipat Persegi',
      caption: '*Persegi memiliki 4 sumbu simetri lipat',
      dimA: 'sisi s',
      targetBadge: '4 Simetri Lipat'
    }
  },

  'sd5-b7-10': {
    type: 'triangle',
    props: {
      title: 'Simetri Lipat Segitiga Sama Sisi',
      caption: '*Segitiga sama sisi memiliki 3 sumbu simetri lipat',
      type: 'equilateral',
      baseLabel: 'sisi',
      heightLabel: '',
      targetBadge: '3 Simetri Lipat'
    }
  },

  // ==========================================================
  // BAB 8: DATA
  // ==========================================================
  'sd5-b8-1': {
    type: 'pictogram',
    props: {
      title: 'Piktogram Penjualan Mobil',
      caption: '*1 simbol mobil mewakili 10 unit kendaraan',
      rows: [
        { label: 'Januari', count: 3 },
        { label: 'Februari', count: 5 },
        { label: 'Maret', count: 4 }
      ],
      symbol: '🚗',
      unitLabel: '1 🚗 = 10 unit mobil'
    }
  },

  'sd5-b8-3': {
    type: 'bar-chart',
    props: {
      title: 'Diagram Batang Ekstrakurikuler',
      caption: '*Jumlah siswa mengikuti Pramuka dan Futsal',
      categories: [
        { label: 'Pramuka', val: 40 },
        { label: 'Futsal', val: 35 },
        { label: 'PMR', val: 25 },
        { label: 'Seni', val: 20 }
      ],
      yMax: 50,
      yStep: 10
    }
  },

  'sd5-b8-8': {
    type: 'pictogram',
    props: {
      title: 'Piktogram Koleksi Buku Perpustakaan',
      caption: '*1 simbol buku mewakili 50 eksemplar',
      rows: [
        { label: 'Fiksi', count: 5 },
        { label: 'Sains', count: 7 },
        { label: 'Sejarah', count: 4 }
      ],
      symbol: '📚',
      unitLabel: '1 📚 = 50 buku'
    }
  },

  'sd5-b8-9': {
    type: 'bar-chart',
    props: {
      title: 'Diagram Tinggi Badan Siswa (cm)',
      caption: '*Tinggi rata-rata siswa Kelas A hingga D',
      categories: [
        { label: 'Kelas A', val: 135 },
        { label: 'Kelas B', val: 140 },
        { label: 'Kelas C', val: 138 },
        { label: 'Kelas D', val: 142 }
      ],
      yMax: 150,
      yStep: 30
    }
  }
};
