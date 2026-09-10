/**
 * Registry Visual untuk Kelas 8 SMP (Batch 1)
 * Fokus: Bab 2 (Teorema Pythagoras & Aplikasinya)
 */
export const grade8VisualRegistry = {
  'smp8-b2-1': {
    type: 'right-triangle',
    props: {
      title: 'Segitiga Siku-Siku Standar',
      caption: '*Mencari panjang hipotenusa dengan Teorema Pythagoras',
      base: 8,
      height: 6,
      baseLabel: '8 cm',
      heightLabel: '6 cm',
      hypLabel: '? cm',
      vertices: { right: 'B', top: 'A', far: 'C' }
    }
  },

  'smp8-b2-3': {
    type: 'right-triangle',
    props: {
      title: 'Aplikasi Pythagoras: Kawat Tiang Pemancar',
      caption: '*Tinggi tiang 24 m dan jarak patok tanah 7 m',
      base: 7,
      height: 24,
      baseLabel: '7 m',
      heightLabel: '24 m',
      hypLabel: 'Kawat = ? m',
      vertices: { right: 'Pangkal', top: 'Puncak', far: 'Patok' }
    }
  },

  'smp8-b2-5': {
    type: 'right-triangle',
    props: {
      title: 'Segitiga Siku-Siku (Tripel Pythagoras)',
      caption: '*Sisi siku-siku 9 cm dan 12 cm',
      base: 12,
      height: 9,
      baseLabel: '12 cm',
      heightLabel: '9 cm',
      hypLabel: '? cm',
      vertices: { right: 'Q', top: 'P', far: 'R' }
    }
  },

  'smp8-b2-8': {
    type: 'right-triangle',
    props: {
      title: 'Aplikasi Pythagoras: Tangga pada Dinding',
      caption: '*Panjang tangga 10 m disandarkan 6 m dari dinding tembok',
      base: 6,
      height: 8,
      baseLabel: 'Alas = 6 m',
      heightLabel: 'Tinggi ? m',
      hypLabel: 'Tangga = 10 m',
      vertices: { right: 'Tembok', top: 'Atas', far: 'Kaki' }
    }
  },

  'smp8-b2-9': {
    type: 'right-triangle',
    props: {
      title: 'Segitiga Siku-Siku Sama Kaki (45° - 45° - 90°)',
      caption: '*Kedua sisi tegak sama panjang (6 cm)',
      base: 6,
      height: 6,
      baseLabel: '6 cm',
      heightLabel: '6 cm',
      hypLabel: '? cm',
      vertices: { right: 'C', top: 'A', far: 'B' }
    }
  },

  'smp8-b2-10': {
    type: 'right-triangle',
    props: {
      title: 'Segitiga Istimewa (30° - 60° - 90°)',
      caption: '*Sisi di depan sudut 30° berukuran 5 cm',
      base: 8.66,
      height: 5,
      baseLabel: 'Alas',
      heightLabel: '5 cm',
      hypLabel: 'Hipotenusa = ? cm',
      vertices: { right: 'C', top: 'A', far: 'B' }
    }
  },

  'smp8-b2-11': {
    type: 'quadrilateral',
    props: {
      title: 'Diagonal Persegi Panjang',
      caption: '*Panjang 16 cm dan lebar 12 cm',
      type: 'rectangle',
      dimA: '16 cm',
      dimB: '12 cm',
      targetBadge: 'Diagonal = ? cm'
    }
  },

  'smp8-b2-12': {
    type: 'right-triangle',
    props: {
      title: 'Lintasan Pelayaran Kapal Laut',
      caption: '*Kapal berlayar 24 km ke Utara, lalu 10 km ke Timur',
      base: 10,
      height: 24,
      baseLabel: 'Timur 10 km',
      heightLabel: 'Utara 24 km',
      hypLabel: 'Jarak Terdekat = ? km',
      vertices: { right: 'Belokan', top: 'Tujuan', far: 'Pelabuhan' }
    }
  },

  'smp8-b2-15': {
    type: 'right-triangle',
    props: {
      title: 'Tali Layang-Layang di Udara',
      caption: '*Panjang tali 25 m dan jarak mendatar 15 m',
      base: 15,
      height: 20,
      baseLabel: 'Mendatar 15 m',
      heightLabel: 'Tinggi ? m',
      hypLabel: 'Tali = 25 m',
      vertices: { right: 'Bawah', top: 'Layang-layang', far: 'Anak' }
    }
  },

  'smp8-b2-19': {
    type: 'quadrilateral',
    props: {
      title: 'Trapesium Sama Kaki ABCD',
      caption: '*Sisi sejajar 10 cm dan 22 cm, panjang sisi miring 10 cm',
      type: 'trapezoid',
      dimA: '10 cm',
      dimB: '22 cm',
      dimT: '? cm',
      targetBadge: 'Luas = ? cm²'
    }
  }
};
