/**
 * Registry Visual untuk Kelas 12 SMA (Fase F+)
 * Fokus: Dimensi Tiga (Jarak Titik, Garis, Bidang) & Bangun Ruang
 */
export const grade12VisualRegistry = {
  'sma12-b1-1': {
    type: 'solid-3d',
    props: {
      title: 'Kubus ABCD.EFGH: Diagonal Ruang & Bidang',
      caption: '*Panjang rusuk kubus = s, panjang diagonal ruang = s√3',
      solid: 'box',
      lengthLabel: 's',
      widthLabel: 's',
      heightLabel: 's',
      targetLabel: 'Jarak = ?'
    }
  },

  'sma12-b1-3': {
    type: 'right-triangle',
    props: {
      title: 'Segitiga Penolong Jarak Titik ke Garis pada Kubus',
      caption: '*Proyeksi ortogonal titik ke garis membentuk segitiga siku-siku penolong',
      base: 6,
      height: 6,
      baseLabel: 'Proyeksi Alas',
      heightLabel: 'Tinggi Tegak',
      hypLabel: 'Jarak Ortogonal',
      vertices: { right: 'P', top: 'H', far: 'A' }
    }
  }
};
