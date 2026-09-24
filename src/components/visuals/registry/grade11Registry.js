/**
 * Registry Visual untuk Kelas 11 SMA (Fase F)
 * Fokus: Lingkaran & Geometri Analitik
 */
export const grade11VisualRegistry = {
  'sma11-b1-1': {
    type: 'bar-model',
    props: {
      title: 'Model Komposisi Fungsi f(g(x))',
      caption: '*Transformasi input domain bertahap melalui mesin pemetaan g lalu f',
      rows: [
        {
          segments: [
            { label: 'Domain x', width: 80, color: 'blue' },
            { label: 'Mesin g(x)', width: 100, color: 'green' },
            { label: 'Output f(g(x))', width: 120, color: 'amber' }
          ],
          totalLabel: 'f ∘ g'
        }
      ],
      target: 'f(g(x))',
      targetLabel: 'Nilai Komposisi'
    }
  },

  'sma11-b2-1': {
    type: 'circle-angle',
    props: {
      title: 'Sudut Pusat & Keliling Lingkaran',
      caption: '*Sudut pusat ∠AOB dan sudut keliling ∠ACB menghadap busur AB yang sama',
      centralAngle: '84°',
      inscribedAngle: '?°'
    }
  },

  'sma11-b6-15': {
    type: 'cartesian-plot',
    props: {
      title: 'Daerah di Antara Parabola y = x² - 1 dan Garis y = 3',
      caption: '*Titik potong kurva terletak pada x = -2 dan x = 2',
      xRange: [-4, 4],
      yRange: [-2, 5],
      points: [
        { x: -2, y: 3, label: '(-2, 3)', color: 'blue' },
        { x: 2, y: 3, label: '(2, 3)', color: 'blue' },
        { x: 0, y: -1, label: '(0, -1)', color: 'amber' }
      ],
      targetPoint: { label: 'Luas Arsiran = ?' }
    }
  }
};
