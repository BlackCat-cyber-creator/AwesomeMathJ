/**
 * Registry Visual untuk Kelas 9 SMP
 * Mencakup: Bab 1 (SPLDV), Bab 2 (Bangun Ruang Sisi Lengkung - Lengkap 20 Soal), Bab 3 (Transformasi Geometri)
 */
export const grade9VisualRegistry = {
  // ==========================================================
  // BAB 1: SPLDV
  // ==========================================================
  'smp9-b1-1': {
    type: 'bar-model',
    props: {
      title: 'Model Pita Komparasi SPLDV',
      caption: '*Model gabungan dan selisih panjang',
      rows: [
        {
          segments: [
            { label: 'x', width: 130, color: 'blue' },
            { label: 'y', width: 65, color: 'green' }
          ],
          totalLabel: '10'
        },
        {
          segments: [
            { label: 'x', width: 130, color: 'blue' }
          ],
          note: 'panjang x lebih panjang 4 dari y'
        }
      ],
      target: '( ? , ? )',
      targetLabel: 'Nilai (x, y)'
    }
  },

  'smp9-b1-2': {
    type: 'balance-scale',
    props: {
      title: 'Model Timbangan Persamaan Linear',
      caption: '*Jika x = 4, berapakah beban nilai y agar neraca seimbang?',
      leftItems: [
        { type: 'box', label: 'x', count: 1 },
        { type: 'box', label: 'x', count: 1 },
        { type: 'box', label: 'y', count: 1 }
      ],
      rightItems: [
        { val: '13' }
      ]
    }
  },

  'smp9-b1-3': {
    type: 'quadrilateral',
    props: {
      title: 'Persegi Panjang (Keliling = 40 cm)',
      caption: '*Panjang (p) berukuran 4 cm lebih dari lebar (l)',
      type: 'rectangle',
      dimA: 'p = l + 4',
      dimB: 'l',
      targetBadge: 'Luas = ? cm²'
    }
  },

  'smp9-b1-4': {
    type: 'bar-model',
    props: {
      title: 'Model Kombinasi Parkir (Motor & Mobil)',
      caption: '*Total 40 kendaraan dengan 110 buah roda',
      rows: [
        {
          segments: [
            { label: 'Motor (m)', width: 90, color: 'blue' },
            { label: 'Mobil (c)', width: 90, color: 'green' }
          ],
          totalLabel: '40 Kendaraan'
        },
        {
          segments: [
            { label: '2 × m roda', width: 90, color: 'blue' },
            { label: '4 × c roda', width: 120, color: 'green' }
          ],
          totalLabel: '110 Roda'
        }
      ],
      target: 'Pendapatan = ?',
      targetLabel: 'Target'
    }
  },

  'smp9-b1-6': {
    type: 'bar-model',
    props: {
      title: 'Model Pita SPLDV',
      caption: '*Sistem: 2x + y = 9 dan x - y = 3',
      rows: [
        {
          segments: [
            { label: 'x', width: 75, color: 'blue' },
            { label: 'x', width: 75, color: 'blue' },
            { label: 'y', width: 45, color: 'green' }
          ],
          totalLabel: '9'
        },
        {
          segments: [
            { label: 'x', width: 75, color: 'blue' }
          ],
          note: 'selisih dengan y adalah 3'
        }
      ],
      target: '( ? , ? )',
      targetLabel: 'Himpunan (x, y)'
    }
  },

  'smp9-b1-7': {
    type: 'bar-model',
    props: {
      title: 'Komparasi Pita Variabel',
      caption: '*Bandingkan selisih baris atas (3x + 2y) dan baris bawah (x + 2y)',
      rows: [
        {
          segments: [
            { label: 'x', width: 50, color: 'blue' },
            { label: 'x', width: 50, color: 'blue' },
            { label: 'x', width: 50, color: 'blue' },
            { label: 'y', width: 40, color: 'green' },
            { label: 'y', width: 40, color: 'green' }
          ],
          totalLabel: '12'
        },
        {
          segments: [
            { label: 'x', width: 50, color: 'blue' },
            { label: 'y', width: 40, color: 'green' },
            { label: 'y', width: 40, color: 'green' }
          ],
          totalLabel: '8'
        }
      ],
      target: 'x + y = ?',
      targetLabel: 'Nilai Ditanya'
    }
  },

  'smp9-b1-8': {
    type: 'shopping',
    props: {
      title: 'Paket Belanja Alat Tulis',
      caption: '*Buku tulis = x, Pulpen = y',
      packages: [
        {
          items: [
            { type: 'buku', count: 3, label: 'x' },
            { type: 'pulpen', count: 2, label: 'y' }
          ],
          price: 'Rp16.500'
        },
        {
          items: [
            { type: 'buku', count: 2, label: 'x' },
            { type: 'pulpen', count: 4, label: 'y' }
          ],
          price: 'Rp19.000'
        }
      ],
      targetLabel: 'Model Matematika SPLDV = ?'
    }
  },

  'smp9-b1-11': {
    type: 'quadrilateral',
    props: {
      title: 'Persegi Panjang (Keliling = 44 cm)',
      caption: '*Panjang (p) berukuran 6 cm lebih dari lebar (l)',
      type: 'rectangle',
      dimA: 'p = l + 6',
      dimB: 'l',
      targetBadge: 'Luas = ? cm²'
    }
  },

  // ==========================================================
  // BAB 2: BANGUN RUANG SISI LENGKUNG (20 SOAL LENGKAP)
  // ==========================================================
  'smp9-b2-1': {
    type: 'solid-3d',
    props: {
      title: 'Tabung Tertutup (Silinder)',
      caption: '*Kapasitas volume isi tabung',
      solid: 'cylinder',
      radiusLabel: 'r = 7 cm',
      heightLabel: 't = 10 cm',
      targetLabel: 'Volume = ? cm³'
    }
  },

  'smp9-b2-2': {
    type: 'solid-3d',
    props: {
      title: 'Kerucut Geometris',
      caption: '*Hubungan Pythagoras antara jari-jari, tinggi, dan garis pelukis',
      solid: 'cone',
      radiusLabel: 'r = 6 cm',
      heightLabel: 't = 8 cm',
      slantLabel: 's = ? cm',
      targetLabel: 'Garis Pelukis s = ?'
    }
  },

  'smp9-b2-3': {
    type: 'solid-3d',
    props: {
      title: 'Bola Sempurna',
      caption: '*Luas permukaan kulit bola',
      solid: 'sphere',
      radiusLabel: 'r = 7 cm',
      targetLabel: 'Luas Kulit = ? cm²'
    }
  },

  'smp9-b2-4': {
    type: 'solid-3d',
    props: {
      title: 'Volume Kerucut (V = 314 cm³)',
      caption: '*Mencari tinggi kerucut dari volume dan jari-jari',
      solid: 'cone',
      radiusLabel: 'r = 5 cm',
      heightLabel: 't = ? cm',
      targetLabel: 'Diketahui: V = 314 cm³'
    }
  },

  'smp9-b2-5': {
    type: 'solid-3d',
    props: {
      title: 'Drum Minyak Tabung',
      caption: '*Diameter 140 cm (r = 70 cm), tinggi 1 meter (100 cm)',
      solid: 'cylinder',
      radiusLabel: 'r = 70 cm',
      heightLabel: 't = 100 cm',
      targetLabel: 'Isi = ? liter'
    }
  },

  'smp9-b2-6': {
    type: 'solid-3d',
    props: {
      title: 'Volume Tabung',
      caption: '*Jari-jari 7 cm dan tinggi 10 cm',
      solid: 'cylinder',
      radiusLabel: 'r = 7 cm',
      heightLabel: 't = 10 cm',
      targetLabel: 'Volume = ? cm³'
    }
  },

  'smp9-b2-7': {
    type: 'solid-3d',
    props: {
      title: 'Luas Selimut Tabung',
      caption: '*Diameter alas 14 cm (r = 7 cm) dan tinggi 20 cm',
      solid: 'cylinder',
      radiusLabel: 'd = 14 cm',
      heightLabel: 't = 20 cm',
      targetLabel: 'Luas Selimut = ?'
    }
  },

  'smp9-b2-8': {
    type: 'solid-3d',
    props: {
      title: 'Panjang Garis Pelukis Kerucut',
      caption: '*Jari-jari 6 cm dan tinggi 8 cm',
      solid: 'cone',
      radiusLabel: 'r = 6 cm',
      heightLabel: 't = 8 cm',
      slantLabel: 's = ? cm',
      targetLabel: 'Garis Pelukis s = ?'
    }
  },

  'smp9-b2-9': {
    type: 'solid-3d',
    props: {
      title: 'Volume Kerucut',
      caption: '*Jari-jari alas 7 cm dan tinggi 12 cm',
      solid: 'cone',
      radiusLabel: 'r = 7 cm',
      heightLabel: 't = 12 cm',
      targetLabel: 'Volume = ? cm³'
    }
  },

  'smp9-b2-10': {
    type: 'solid-3d',
    props: {
      title: 'Volume Bola',
      caption: '*Jari-jari bola 21 cm',
      solid: 'sphere',
      radiusLabel: 'r = 21 cm',
      targetLabel: 'Volume = ? cm³'
    }
  },

  'smp9-b2-11': {
    type: 'solid-3d',
    props: {
      title: 'Luas Permukaan Bola',
      caption: '*Jari-jari bola 7 cm',
      solid: 'sphere',
      radiusLabel: 'r = 7 cm',
      targetLabel: 'Luas Kulit = ? cm²'
    }
  },

  'smp9-b2-12': {
    type: 'solid-3d',
    props: {
      title: 'Drum Minyak (Diameter 70 cm)',
      caption: '*Jari-jari 35 cm dan tinggi 1 meter (100 cm)',
      solid: 'cylinder',
      radiusLabel: 'r = 35 cm',
      heightLabel: 't = 100 cm',
      targetLabel: 'Kapasitas = ? liter'
    }
  },

  'smp9-b2-13': {
    type: 'solid-3d',
    props: {
      title: 'Topi Ulang Tahun Kerucut (Tanpa Alas)',
      caption: '*Diameter 14 cm (r = 7 cm) dan garis pelukis s = 25 cm',
      solid: 'cone',
      radiusLabel: 'r = 7 cm',
      heightLabel: 't',
      slantLabel: 's = 25 cm',
      targetLabel: 'Luas Karton = ?'
    }
  },

  'smp9-b2-14': {
    type: 'solid-3d',
    props: {
      title: 'Bola Besi di Dalam Tabung Air',
      caption: '*Jari-jari bola = jari-jari tabung (r = 6 cm), tinggi tabung = 12 cm',
      solid: 'sphere-in-cylinder',
      radiusLabel: 'r = 6 cm',
      heightLabel: 't = 12 cm',
      targetLabel: 'V.Bola : V.Tabung = ?'
    }
  },

  'smp9-b2-15': {
    type: 'solid-3d',
    props: {
      title: 'Setengah Bola Padat (Pejal)',
      caption: '*Luas permukaan lengkung kubah ditambah bidang lingkaran alas (r = 10 cm)',
      solid: 'hemisphere',
      radiusLabel: 'r = 10 cm',
      targetLabel: 'Luas Pejal = ? cm²'
    }
  },

  'smp9-b2-16': {
    type: 'solid-3d',
    props: {
      title: 'Perubahan Dimensi Tabung',
      caption: '*Jari-jari diperbesar 2x dan tinggi diperkecil 1/2x',
      solid: 'cylinder',
      radiusLabel: 'r → 2r',
      heightLabel: 't → 1/2 t',
      targetLabel: 'Rasio V₂ : V₁ = ?'
    }
  },

  'smp9-b2-17': {
    type: 'solid-3d',
    props: {
      title: 'Bandul Timah Gabungan',
      caption: '*Kerucut (t = 24 cm) menempel pada belahan setengah bola (r = 7 cm)',
      solid: 'composite-cone-sphere',
      radiusLabel: 'r = 7 cm',
      heightLabel: 't = 24 cm',
      targetLabel: 'V.Total = ? cm³'
    }
  },

  'smp9-b2-18': {
    type: 'solid-3d',
    props: {
      title: 'Tangki Air Tabung Bocor',
      caption: '*Jari-jari 1,4 m dan tinggi 2 m (debit bocor 308 liter/jam)',
      solid: 'cylinder',
      radiusLabel: 'r = 1,4 m',
      heightLabel: 't = 2 m',
      targetLabel: 'Waktu Kosong = ?'
    }
  },

  'smp9-b2-19': {
    type: 'solid-3d',
    props: {
      title: 'Kerucut Terpancung',
      caption: '*Jari-jari alas R = 10 cm, jari-jari atas r = 4 cm, tinggi t = 8 cm',
      solid: 'frustum-cone',
      radiusTopLabel: 'r = 4 cm',
      radiusBottomLabel: 'R = 10 cm',
      heightLabel: 't = 8 cm',
      targetLabel: 'Volume = ? cm³'
    }
  },

  'smp9-b2-20': {
    type: 'solid-3d',
    props: {
      title: 'Kawat Silinder Tembaga',
      caption: '*Panjang kawat 100 meter (10.000 cm) dan jari-jari penampang 0,1 cm',
      solid: 'cylinder',
      radiusLabel: 'r = 0,1 cm',
      heightLabel: 'p = 10.000 cm',
      targetLabel: 'Massa = ? gram'
    }
  },

  // ==========================================================
  // BAB 3: TRANSFORMASI GEOMETRI
  // ==========================================================
  'smp9-b3-1': {
    type: 'cartesian-plot',
    props: {
      title: 'Translasi Titik pada Bidang Kartesius',
      caption: '*Titik A(3, -5) bergeser sejauh vektor T(-2, 7)',
      points: [
        { x: 3, y: -5, label: 'A(3, -5)' }
      ],
      arrow: {
        from: { x: 3, y: -5 },
        to: { x: 1, y: 2 },
        label: 'T(-2, 7)'
      },
      targetPoint: {
        x: 1, y: 2, label: "A'(?, ?)"
      }
    }
  },

  'smp9-b3-2': {
    type: 'cartesian-plot',
    props: {
      title: 'Refleksi terhadap Sumbu-X',
      caption: '*Pencerminan titik B(-4, 6) menghasilkan bayangan dengan ordinat berlawanan tanda',
      points: [
        { x: -4, y: 6, label: 'B(-4, 6)' }
      ],
      mirrorLine: {
        type: 'axis-x',
        label: 'Cermin Sumbu-X'
      },
      targetPoint: {
        x: -4, y: -6, label: "B'(?, ?)"
      }
    }
  },

  'smp9-b3-3': {
    type: 'cartesian-plot',
    props: {
      title: 'Rotasi 90° Berlawanan Jarum Jam Pusat O(0, 0)',
      caption: '*Titik P(5, 2) diputar sebesar 90° CCW',
      points: [
        { x: 5, y: 2, label: 'P(5, 2)' }
      ],
      targetPoint: {
        x: -2, y: 5, label: "P'(?, ?)"
      }
    }
  },

  'smp9-b3-5': {
    type: 'cartesian-plot',
    props: {
      title: 'Translasi Vektor T(3, -2)',
      caption: '*Pergeseran titik A(2, 5)',
      points: [
        { x: 2, y: 5, label: 'A(2, 5)' }
      ],
      arrow: {
        from: { x: 2, y: 5 },
        to: { x: 5, y: 3 },
        label: 'T(3, -2)'
      },
      targetPoint: {
        x: 5, y: 3, label: "A'(?, ?)"
      }
    }
  },

  'smp9-b3-8': {
    type: 'cartesian-plot',
    props: {
      title: 'Refleksi terhadap Garis y = x',
      caption: '*Pencerminan titik D(5, 2) menghasilkan pertukaran koordinat (x, y)',
      points: [
        { x: 5, y: 2, label: 'D(5, 2)' }
      ],
      mirrorLine: {
        type: 'y=x',
        label: 'Garis y = x'
      },
      targetPoint: {
        x: 2, y: 5, label: "D'(?, ?)"
      }
    }
  },

  'smp9-b3-12': {
    type: 'cartesian-plot',
    props: {
      title: 'Refleksi terhadap Garis Tegak x = 5',
      caption: '*Pencerminan titik K(3, 7) terhadap sumbu cermin vertikal x = 5',
      points: [
        { x: 3, y: 7, label: 'K(3, 7)' }
      ],
      mirrorLine: {
        type: 'x=h',
        val: 5,
        label: 'Cermin x = 5'
      },
      targetPoint: {
        x: 7, y: 7, label: "K'(?, ?)"
      }
    }
  },

  'smp9-b3-7': {
    type: 'cartesian-plot',
    props: {
      title: 'Refleksi terhadap Sumbu-Y',
      caption: '*Pencerminan titik C(3, -8) terhadap sumbu vertikal Y',
      points: [
        { x: 3, y: -8, label: 'C(3, -8)' }
      ],
      mirrorLine: {
        type: 'axis-y',
        label: 'Cermin Sumbu-Y'
      },
      targetPoint: {
        x: -3, y: -8, label: "C'(?, ?)"
      }
    }
  },

  'smp9-b3-10': {
    type: 'cartesian-plot',
    props: {
      title: 'Dilatasi Pusat O(0,0) Faktor Skala k = 3',
      caption: '*Perbesaran jarak titik Q(-2, 6) dari pusat koordinat',
      points: [
        { x: -2, y: 6, label: 'Q(-2, 6)' }
      ],
      arrow: {
        from: { x: -2, y: 6 },
        to: { x: -6, y: 18 },
        label: '× 3'
      },
      targetPoint: {
        x: -6, y: 18, label: "Q'(?, ?)"
      }
    }
  },

  'smp9-b3-14': {
    type: 'cartesian-plot',
    props: {
      title: 'Rotasi 180° Pusat O(0, 0)',
      caption: '*Pemutaran setengah lingkaran titik R(5, -1) membalikkan tanda kedua koordinat',
      points: [
        { x: 5, y: -1, label: 'R(5, -1)' }
      ],
      targetPoint: {
        x: -5, y: 1, label: "R'(?, ?)"
      }
    }
  }
};
