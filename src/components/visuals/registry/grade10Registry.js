/**
 * Registry Visual untuk Kelas 10 SMA (Fase E)
 * Fokus: Eksponen, Vektor, Trigonometri Dasar
 */
export const grade10VisualRegistry = {
  'sma10-b1-1': {
    type: 'cartesian-plot',
    props: {
      title: 'Grafik Pertumbuhan Eksponensial',
      caption: '*Kurva f(x) = a^x melintas melalui titik acuan (0, 1)',
      points: [{ x: 0, y: 1, label: '(0, 1)' }],
      xRange: [-4, 6],
      yRange: [-1, 8]
    }
  },

  'sma10-b4-1': {
    type: 'right-triangle',
    props: {
      title: 'Segitiga Siku-Siku ABC',
      caption: '*Siku-siku di B. Menentukan sin ∠A = depan (BC) / miring (AC)',
      baseLabel: 'AB = 8 cm',
      heightLabel: 'BC = 6 cm',
      hypLabel: 'AC = ? cm',
      vertices: { right: 'B', top: 'C', far: 'A' }
    }
  }
};
