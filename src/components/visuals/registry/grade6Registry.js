/**
 * Registry Visual untuk Kelas 6 SD
 * Fokus: Pecahan & Desimal, Bar-Model Rasio, Kubus & Balok 3D, Peluang Kelereng
 */
export const grade6VisualRegistry = {
  // ==========================================================
  // BAB 1: PECAHAN DAN DESIMAL
  // ==========================================================
  'sd6-b1-2': {
    type: 'fraction-strip',
    props: {
      title: 'Model 3/5 Bagian',
      caption: '*Nyatakan 3 dari 5 bagian ke bentuk desimal',
      totalParts: 5,
      shadedParts: 3,
      targetBadge: 'Desimal = ?'
    }
  },

  'sd6-b1-4': {
    type: 'bar-model',
    props: {
      title: 'Pemotongan Panjang Tali',
      caption: '*Tali 15 meter dipotong-potong masing-masing 1,5 meter',
      rows: [
        {
          segments: [
            { label: '1,5 m', width: 45, color: 'blue' },
            { label: '1,5 m', width: 45, color: 'blue' },
            { label: '...', width: 60, color: 'blue' },
            { label: '1,5 m', width: 45, color: 'blue' }
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
      caption: '*Total tanah 400 m², sebanyak 0,35 bagian dibangun rumah',
      rows: [
        {
          segments: [
            { label: 'Rumah (0,35)', width: 85, color: 'green' },
            { label: 'Sisa Lahan (0,65)', width: 145, color: 'blue' }
          ],
          totalLabel: 'Luas 400 m²'
        }
      ],
      target: '? m²',
      targetLabel: 'Luas Bangunan'
    }
  },

  'sd6-b1-15': {
    type: 'fraction-strip',
    props: {
      title: 'Kapasitas Air Botol Minum',
      caption: '*Isi 1,2 liter diminum 1/3 bagiannya',
      totalParts: 3,
      shadedParts: 1,
      label: '1/3 Diminum'
    }
  },

  // ==========================================================
  // BAB 2: RASIO & PERBANDINGAN (SINGAPORE MATH BAR-MODEL)
  // ==========================================================
  'sd6-b2-1': {
    type: 'bar-model',
    props: {
      title: 'Penyederhanaan Rasio 15 : 25',
      caption: '*Bagi kedua nilai dengan FPB (5)',
      rows: [
        {
          segments: [
            { label: '3 unit', width: 60, color: 'blue' }
          ],
          totalLabel: 'Nilai 15'
        },
        {
          segments: [
            { label: '5 unit', width: 100, color: 'green' }
          ],
          totalLabel: 'Nilai 25'
        }
      ],
      target: '3 : 5',
      targetLabel: 'Rasio Sederhana'
    }
  },

  'sd6-b2-2': {
    type: 'bar-model',
    props: {
      title: 'Rasio Ternak (Ayam & Bebek)',
      caption: '*Perbandingan 12 ekor ayam dan 18 ekor bebek',
      rows: [
        {
          segments: [
            { label: 'Ayam (12)', width: 60, color: 'blue' }
          ],
          totalLabel: '12 Ekor'
        },
        {
          segments: [
            { label: 'Bebek (18)', width: 90, color: 'green' }
          ],
          totalLabel: '18 Ekor'
        }
      ],
      target: '2 : 3',
      targetLabel: 'Perbandingan'
    }
  },

  'sd6-b2-3': {
    type: 'bar-model',
    props: {
      title: 'Model Bar Perbandingan Umur',
      caption: '*Rasio umur Rina (5 kotak) dan adik (3 kotak)',
      rows: [
        {
          segments: [
            { label: '1', width: 18, color: 'blue' },
            { label: '1', width: 18, color: 'blue' },
            { label: '1', width: 18, color: 'blue' },
            { label: '1', width: 18, color: 'blue' },
            { label: '1', width: 18, color: 'blue' }
          ],
          totalLabel: 'Rina (5)'
        },
        {
          segments: [
            { label: '1', width: 18, color: 'green' },
            { label: '1', width: 18, color: 'green' },
            { label: '1', width: 18, color: 'green' }
          ],
          totalLabel: 'Adik (3)'
        }
      ],
      target: '5 : 3',
      targetLabel: 'Rasio Umur'
    }
  },

  'sd6-b2-4': {
    type: 'bar-model',
    props: {
      title: 'Resep Kue (Tepung & Gula)',
      caption: '*Rasio 4 bagian tepung dan 3 bagian gula',
      rows: [
        {
          segments: [
            { label: 'Tepung (4)', width: 80, color: 'blue' }
          ],
          totalLabel: '4 Bagian'
        },
        {
          segments: [
            { label: 'Gula (3)', width: 60, color: 'amber' }
          ],
          totalLabel: '3 Bagian'
        }
      ],
      target: '4 : 3',
      targetLabel: 'Rasio Bahan'
    }
  },

  'sd6-b2-5': {
    type: 'bar-model',
    props: {
      title: 'Tabungan Dimas dan Fajar',
      caption: '*Jumlah tabungan Rp120.000 dengan rasio 3 : 5',
      rows: [
        {
          segments: [
            { label: 'Dimas (3)', width: 60, color: 'blue' }
          ],
          totalLabel: '3 Bagian'
        },
        {
          segments: [
            { label: 'Fajar (5)', width: 100, color: 'green' }
          ],
          totalLabel: '5 Bagian'
        }
      ],
      target: 'Rp120.000',
      targetLabel: 'Total Tabungan'
    }
  },

  'sd6-b2-7': {
    type: 'bar-model',
    props: {
      title: 'Kelereng Doni dan Budi',
      caption: '*Rasio 3 : 5, kelereng Budi berjumlah 35 butir',
      rows: [
        {
          segments: [
            { label: 'Doni (3)', width: 60, color: 'blue' }
          ],
          totalLabel: '? Butir'
        },
        {
          segments: [
            { label: 'Budi (5)', width: 100, color: 'green' }
          ],
          totalLabel: '35 Butir'
        }
      ],
      target: '? butir',
      targetLabel: 'Kelereng Doni'
    }
  },

  'sd6-b2-8': {
    type: 'bar-model',
    props: {
      title: 'Perbandingan Umur Ayah dan Dimas',
      caption: '*Rasio 7 : 2, jumlah umur keduanya adalah 45 tahun',
      rows: [
        {
          segments: [
            { label: 'Ayah (7 kotak)', width: 105, color: 'blue' }
          ],
          totalLabel: '7 Unit'
        },
        {
          segments: [
            { label: 'Dimas (2 kotak)', width: 35, color: 'green' }
          ],
          totalLabel: '2 Unit'
        }
      ],
      target: '45 Tahun',
      targetLabel: 'Jumlah Umur'
    }
  },

  'sd6-b2-9': {
    type: 'bar-model',
    props: {
      title: 'Selisih Uang Saku Riko dan Andi',
      caption: '*Rasio 4 : 7 dengan selisih uang saku Rp15.000',
      rows: [
        {
          segments: [
            { label: 'Riko (4)', width: 60, color: 'blue' }
          ],
          totalLabel: '4 Bagian'
        },
        {
          segments: [
            { label: 'Andi (7)', width: 105, color: 'green' }
          ],
          totalLabel: '7 Bagian'
        }
      ],
      target: 'Rp15.000',
      targetLabel: 'Selisih (3 Unit)'
    }
  },

  'sd6-b2-10': {
    type: 'bar-model',
    props: {
      title: 'Konsumsi Bensin Mobil',
      caption: '*3 liter bensin untuk menempuh jarak 45 km',
      rows: [
        {
          segments: [
            { label: '3 Liter', width: 60, color: 'blue' }
          ],
          totalLabel: 'Bahan Bakar'
        },
        {
          segments: [
            { label: '45 km', width: 150, color: 'green' }
          ],
          totalLabel: 'Jarak Tempuh'
        }
      ],
      target: '? liter',
      targetLabel: 'Bahan Bakar 120 km'
    }
  },

  'sd6-b2-15': {
    type: 'bar-model',
    props: {
      title: 'Siswa Laki-Laki dan Perempuan',
      caption: '*Rasio 3 : 4 di kelas 6',
      rows: [
        {
          segments: [
            { label: 'Laki-laki (3)', width: 75, color: 'blue' }
          ],
          totalLabel: '3 Bagian'
        },
        {
          segments: [
            { label: 'Perempuan (4)', width: 100, color: 'pink' }
          ],
          totalLabel: '4 Bagian'
        }
      ],
      target: '3 : 4',
      targetLabel: 'Perbandingan'
    }
  },

  // ==========================================================
  // BAB 3: KUBUS DAN BALOK
  // ==========================================================
  'sd6-b3-1': {
    type: 'solid-3d',
    props: {
      title: 'Volume Kubus',
      caption: '*Panjang rusuk s = 8 cm',
      solid: 'box',
      lengthLabel: 's = 8 cm',
      widthLabel: 's = 8 cm',
      heightLabel: 's = 8 cm',
      targetLabel: 'Volume = ? cm³'
    }
  },

  'sd6-b3-2': {
    type: 'solid-3d',
    props: {
      title: 'Volume Balok',
      caption: '*Panjang 12 cm, lebar 5 cm, dan tinggi 4 cm',
      solid: 'box',
      lengthLabel: 'p = 12 cm',
      widthLabel: 'l = 5 cm',
      heightLabel: 't = 4 cm',
      targetLabel: 'Volume = ? cm³'
    }
  },

  'sd6-b3-3': {
    type: 'solid-3d',
    props: {
      title: 'Luas Permukaan Kubus',
      caption: '*Memiliki 6 bidang sisi bujursangkar kongruen (s = 5 cm)',
      solid: 'box',
      lengthLabel: 's = 5 cm',
      widthLabel: 's = 5 cm',
      heightLabel: 's = 5 cm',
      targetLabel: 'Luas = ? cm²'
    }
  },

  'sd6-b3-4': {
    type: 'solid-3d',
    props: {
      title: 'Bak Mandi Balok',
      caption: '*Ukuran panjang 80 cm, lebar 60 cm, dan tinggi 50 cm',
      solid: 'box',
      lengthLabel: 'p = 80 cm',
      widthLabel: 'l = 60 cm',
      heightLabel: 't = 50 cm',
      targetLabel: 'Volume = ? liter'
    }
  },

  'sd6-b3-6': {
    type: 'solid-3d',
    props: {
      title: 'Panjang Seluruh Rusuk Kubus',
      caption: '*Panjang 12 rusuk kubus adalah 96 cm',
      solid: 'box',
      lengthLabel: 's = ? cm',
      widthLabel: 's = ? cm',
      heightLabel: 's = ? cm',
      targetLabel: 'Diketahui: 12 Rusuk = 96 cm'
    }
  },

  'sd6-b3-7': {
    type: 'solid-3d',
    props: {
      title: 'Kerangka Balok',
      caption: '*Panjang 10 cm, lebar 6 cm, dan tinggi 4 cm',
      solid: 'box',
      lengthLabel: 'p = 10 cm',
      widthLabel: 'l = 6 cm',
      heightLabel: 't = 4 cm',
      targetLabel: 'Total Rusuk = ?'
    }
  },

  'sd6-b3-8': {
    type: 'solid-3d',
    props: {
      title: 'Luas Permukaan Kubus',
      caption: '*Panjang rusuk kubus s = 5 cm',
      solid: 'box',
      lengthLabel: 's = 5 cm',
      widthLabel: 's = 5 cm',
      heightLabel: 's = 5 cm',
      targetLabel: '6 × s² = ? cm²'
    }
  },

  'sd6-b3-9': {
    type: 'solid-3d',
    props: {
      title: 'Luas Permukaan Balok',
      caption: '*Panjang 8 cm, lebar 5 cm, dan tinggi 3 cm',
      solid: 'box',
      lengthLabel: 'p = 8 cm',
      widthLabel: 'l = 5 cm',
      heightLabel: 't = 3 cm',
      targetLabel: 'Luas = ? cm²'
    }
  },

  'sd6-b3-10': {
    type: 'solid-3d',
    props: {
      title: 'Luas Bidang Sisi Kubus',
      caption: '*Volume kubus adalah 512 cm³',
      solid: 'box',
      lengthLabel: 's',
      widthLabel: 's',
      heightLabel: 's',
      targetLabel: 'V = 512 cm³ (Luas sisi = ?)'
    }
  },

  'sd6-b3-11': {
    type: 'solid-3d',
    props: {
      title: 'Kardus Balok',
      caption: '*Ukuran 40 cm × 30 cm × 20 cm',
      solid: 'box',
      lengthLabel: 'p = 40 cm',
      widthLabel: 'l = 30 cm',
      heightLabel: 't = 20 cm',
      targetLabel: 'Volume = ? liter'
    }
  },

  'sd6-b3-12': {
    type: 'solid-3d',
    props: {
      title: 'Bak Penampungan Air Kubus',
      caption: '*Panjang rusuk bagian dalam 1 meter (100 cm)',
      solid: 'box',
      lengthLabel: 's = 1 m',
      widthLabel: 's = 1 m',
      heightLabel: 's = 1 m',
      targetLabel: 'V = ? liter'
    }
  },

  'sd6-b3-14': {
    type: 'solid-3d',
    props: {
      title: 'Kotak Kado Balok',
      caption: '*Ukuran 15 cm × 10 cm × 8 cm',
      solid: 'box',
      lengthLabel: 'p = 15 cm',
      widthLabel: 'l = 10 cm',
      heightLabel: 't = 8 cm',
      targetLabel: 'Volume = ? cm³'
    }
  },

  'sd6-b3-17': {
    type: 'solid-3d',
    props: {
      title: 'Kolam Renang Balok',
      caption: '*Panjang 20 m, lebar 10 m, kedalaman 1,5 m',
      solid: 'box',
      lengthLabel: 'p = 20 m',
      widthLabel: 'l = 10 m',
      heightLabel: 't = 1,5 m',
      targetLabel: 'Volume = ? m³'
    }
  },

  'sd6-b3-20': {
    type: 'solid-3d',
    props: {
      title: 'Akuarium Balok',
      caption: '*Panjang 80 cm, lebar 50 cm, tinggi air 40 cm',
      solid: 'box',
      lengthLabel: 'p = 80 cm',
      widthLabel: 'l = 50 cm',
      heightLabel: 't = 40 cm',
      targetLabel: 'Isi Air = ? liter'
    }
  },

  // ==========================================================
  // BAB 4: PELUANG
  // ==========================================================
  'sd6-b4-1': {
    type: 'coin',
    props: {
      title: 'Peluang Pelemparan Uang Logam',
      caption: '*Peluang munculnya sisi Gambar dari dua kemungkinan (Angka & Gambar)',
      targetLabel: 'Peluang (G) = ?'
    }
  },

  'sd6-b4-3': {
    type: 'dice',
    props: {
      title: 'Peluang Dadu Bermata Enam',
      caption: '*Peluang munculnya mata dadu lebih dari 4 ({5, 6})',
      diceValue: 5,
      targetLabel: 'Peluang (> 4) = ?'
    }
  },

  'sd6-b4-4': {
    type: 'probability-bag',
    props: {
      title: 'Peluang Kelereng dalam Kotak',
      caption: '*Total kelereng: 4 Merah, 6 Biru, dan 5 Hijau (15 kelereng)',
      items: [
        { color: 'red', count: 4, fill: '#FCA5A5', stroke: '#DC2626', label: '4 Merah' },
        { color: 'blue', count: 6, fill: '#93C5FD', stroke: '#2563EB', label: '6 Biru' },
        { color: 'green', count: 5, fill: '#86EFAC', stroke: '#16A34A', label: '5 Hijau' }
      ]
    }
  },

  'sd6-b4-6': {
    type: 'dice',
    props: {
      title: 'Peluang Mata Dadu Ganjil',
      caption: '*Dadu bersisi enam dengan mata dadu bernilai 1 sampai 6',
      diceValue: 3,
      targetLabel: 'Peluang Ganjil = ?'
    }
  },

  'sd6-b4-7': {
    type: 'probability-bag',
    props: {
      title: 'Peluang Pengambilan Kelereng',
      caption: '*Total kelereng: 4 Merah, 5 Biru, dan 3 Hijau (12 kelereng)',
      items: [
        { color: 'red', count: 4, fill: '#FCA5A5', stroke: '#DC2626', label: '4 Merah' },
        { color: 'blue', count: 5, fill: '#93C5FD', stroke: '#2563EB', label: '5 Biru' },
        { color: 'green', count: 3, fill: '#86EFAC', stroke: '#16A34A', label: '3 Hijau' }
      ]
    }
  },

  'sd6-b4-13': {
    type: 'spinner',
    props: {
      title: 'Roda Putar (Spinner) Peluang',
      caption: '*8 juring sama besar: 3 Merah, 3 Kuning, 2 Hijau',
      targetLabel: 'Peluang Merah = ?'
    }
  }
};
