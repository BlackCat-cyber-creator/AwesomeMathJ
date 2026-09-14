/**
 * Registry Visual untuk Kelas 10 SMA (Fase E)
 * Fokus: Eksponen, Vektor, Trigonometri Dasar
 */
export const grade10VisualRegistry = {
  'sma10-b1-1': {
    type: 'coordinate-point',
    props: {
      title: 'Grafik Pertumbuhan Eksponensial',
      caption: '*Kurva f(x) = a^x melintas melalui titik acuan (0, 1)',
      point: { x: 0, y: 1, label: '(0, 1)' },
      xRange: [-4, 6],
      yRange: [-1, 8]
    }
  },

  'sma10-b3-1': {
    type: 'right-triangle',
    props: {
      title: 'Definisi Perbandingan Trigonometri Dasar (Sin, Cos, Tan)',
      caption: '*Sisi depan (de), samping (sa), dan miring (mi) terhadap sudut acuan θ',
      base: 4,
      height: 3,
      baseLabel: 'Samping (sa)',
      heightLabel: 'Depan (de)',
      hypLabel: 'Miring (mi)',
      vertices: { right: 'C', top: 'B', far: 'A' }
    }
  }
};
