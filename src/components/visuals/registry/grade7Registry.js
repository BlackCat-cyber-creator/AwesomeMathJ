/**
 * Registry Visual untuk Kelas 7 SMP (Fase D)
 * Fokus: Bab 1 (Bilangan Bulat & Garis Bilangan), Bab 3 (Rasio & Perbandingan), Bab 5 (Kesebangunan)
 */
export const grade7VisualRegistry = {
  'smp7-b1-1': {
    type: 'number-line',
    props: {
      title: 'Garis Bilangan: Penjumlahan Bilangan Bulat',
      caption: '*Pergerakan langkah dari titik nol pada garis bilangan horizontal',
      min: -10,
      max: 10,
      step: 1,
      highlightPoints: [-8, 0, 4]
    }
  },

  'smp7-b1-3': {
    type: 'number-line',
    props: {
      title: 'Penurunan Suhu Pendingin',
      caption: '*Suhu awal -4°C diturunkan 7°C ke arah kiri garis bilangan',
      min: -15,
      max: 5,
      step: 1,
      highlightPoints: [-11, -4]
    }
  },

  'smp7-b1-5': {
    type: 'number-line',
    props: {
      title: 'Penjumlahan Bilangan Negatif: -15 + (-28)',
      caption: '*Dua pergeseran berarah ke kiri pada domain negatif',
      min: -50,
      max: 0,
      step: 10,
      highlightPoints: [-43, -15, 0]
    }
  },

  'smp7-b3-1': {
    type: 'bar-model',
    props: {
      title: 'Model Pita Perbandingan / Rasio',
      caption: '*Perbandingan dua kuantitas dalam unit balok proporsional',
      rows: [
        {
          segments: [
            { label: '3 unit', width: 90, color: 'blue' }
          ],
          totalLabel: 'Nilai A'
        },
        {
          segments: [
            { label: '5 unit', width: 150, color: 'green' }
          ],
          totalLabel: 'Nilai B'
        }
      ],
      target: '3 : 5',
      targetLabel: 'Rasio Sederhana'
    }
  }
};
