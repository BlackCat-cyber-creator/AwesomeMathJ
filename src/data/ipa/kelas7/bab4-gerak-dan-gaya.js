import { bab, soal } from '../author.js';

export default bab({
  grade: 7,
  number: 4,
  slug: 'gerak-dan-gaya',
  title: 'Gerak dan Gaya',
  element: 'Energi dan perubahannya: ragam gerak dan gaya',
  summary: {
    overview: 'Benda dikatakan bergerak jika kedudukannya berubah terhadap titik acuan. Bab ini membahas jarak dan perpindahan, kelajuan dan kecepatan, gerak lurus beraturan dan berubah beraturan beserta grafiknya, jenis-jenis gaya, resultan gaya, serta tiga hukum Newton.',
    coreConcepts: [
      'Jarak dan Perpindahan: Jarak adalah panjang seluruh lintasan yang ditempuh (besaran skalar). Perpindahan adalah perubahan posisi dari titik awal ke titik akhir beserta arahnya (besaran vektor). Jika berjalan 4 m ke timur lalu 4 m kembali ke barat, jaraknya 8 m tetapi perpindahannya 0.',
      'Kelajuan dan Kecepatan: Kelajuan = jarak : waktu; kecepatan = perpindahan : waktu. Satuan SI keduanya m/s. Kelajuan rata-rata = jarak total : waktu total.',
      'Gerak Lurus Beraturan (GLB): Benda bergerak pada lintasan lurus dengan kecepatan tetap, sehingga percepatannya nol. Grafik v–t berupa garis mendatar, sedangkan grafik s–t berupa garis lurus miring. Rumus: $s = v \\times t$.',
      'Gerak Lurus Berubah Beraturan (GLBB): Kecepatan benda bertambah (dipercepat) atau berkurang (diperlambat) secara teratur. Percepatan $a = \\dfrac{v_t - v_0}{t}$ dengan satuan m/s². Grafik v–t berupa garis miring; luas daerah di bawah grafik v–t sama dengan jarak tempuh. Contoh: buah jatuh dari pohon (dipercepat), mobil direm (diperlambat).',
      'Gaya dan Jenisnya: Gaya adalah tarikan atau dorongan, satuannya newton (N), diukur dengan dinamometer. Gaya sentuh: gaya otot, gaya gesek, gaya pegas. Gaya tak sentuh: gaya gravitasi, gaya magnet, gaya listrik. Gaya dapat mengubah bentuk, arah gerak, dan kecepatan benda. Berat adalah gaya gravitasi: $w = m \\times g$.',
      'Resultan Gaya dan Hukum Newton: Gaya searah dijumlahkan, gaya berlawanan arah dikurangkan (arah resultan mengikuti gaya yang lebih besar). Hukum I Newton: jika resultan gaya nol, benda diam tetap diam atau bergerak lurus beraturan (kelembaman). Hukum II: $F = m \\times a$. Hukum III: gaya aksi = −gaya reaksi, bekerja pada dua benda berbeda (contoh: roket mendorong gas ke bawah, gas mendorong roket ke atas).'
    ],
    keyFormulas: [
      { label: 'Kelajuan / GLB', formula: 'v = \\dfrac{s}{t} \\qquad s = v \\times t' },
      { label: 'Percepatan (GLBB)', formula: 'a = \\dfrac{v_t - v_0}{t}' },
      { label: 'Hukum II Newton', formula: '\\Sigma F = m \\times a' },
      { label: 'Berat', formula: 'w = m \\times g' }
    ],
    workedExamples: [
      {
        title: 'Kelajuan rata-rata',
        problem: 'Sebuah sepeda menempuh 600 m dalam 2 menit, lalu 900 m dalam 3 menit. Berapa kelajuan rata-ratanya?',
        solution: 'Jarak total = 600 + 900 = 1.500 m. Waktu total = 2 + 3 = 5 menit = 300 s.\n$v = 1.500 : 300 = 5\\ \\text{m/s}$.'
      },
      {
        title: 'Percepatan mobil',
        problem: 'Mobil yang mula-mula diam dipercepat hingga kecepatannya 20 m/s dalam waktu 5 s. Berapa percepatannya?',
        solution: '$a = \\dfrac{v_t - v_0}{t} = \\dfrac{20 - 0}{5} = 4\\ \\text{m/s}^2$.'
      },
      {
        title: 'Resultan gaya dan percepatan',
        problem: 'Sebuah peti bermassa 10 kg ditarik ke kanan dengan gaya 50 N dan mengalami gaya gesek 20 N ke kiri. Tentukan resultan gaya dan percepatan peti.',
        solution: 'Resultan = 50 − 20 = 30 N ke kanan.\n$a = F : m = 30 : 10 = 3\\ \\text{m/s}^2$ ke kanan.'
      }
    ],
    misconceptions: [
      'Menganggap benda yang bergerak pasti sedang didorong gaya. Menurut Hukum I Newton, benda dapat terus bergerak lurus beraturan tanpa resultan gaya; gaya diperlukan untuk mengubah gerak.',
      'Menganggap gaya aksi dan reaksi saling meniadakan. Keduanya bekerja pada dua benda yang berbeda, jadi tidak bisa dijumlahkan menjadi nol.',
      'Menyamakan massa dan berat. Massa astronot sama di bumi dan di bulan, tetapi beratnya di bulan lebih kecil karena gravitasi bulan lebih kecil.'
    ],
    tutorTip: 'Untuk soal grafik v–t: kemiringan garis = percepatan, luas di bawah garis = jarak tempuh. Dua kalimat ini menjawab hampir semua soal grafik gerak.'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Andi berjalan 5 m ke utara, kemudian berbalik dan berjalan 2 m ke selatan. Perpindahan Andi adalah...',
      options: ['7 m ke utara', '3 m ke utara', '3 m ke selatan', '2 m ke selatan'],
      answer: 'B',
      hint: 'Perpindahan = posisi akhir dikurangi posisi awal, lengkap dengan arah.',
      solution: 'Posisi akhir Andi berada 5 − 2 = **3 m di utara** titik awal. Jarak tempuhnya 7 m, tetapi perpindahannya 3 m ke utara. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Gaya berikut yang termasuk gaya tak sentuh adalah...',
      options: ['gaya otot', 'gaya gesek', 'gaya pegas', 'gaya magnet'],
      answer: 'D',
      hint: 'Gaya tak sentuh bekerja walaupun benda tidak bersentuhan.',
      solution: 'Magnet dapat menarik paku dari jarak tertentu tanpa menyentuhnya, jadi **gaya magnet** adalah gaya tak sentuh. Gaya otot, gesek, dan pegas memerlukan sentuhan. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Sebuah mobil menempuh jarak 150 km dalam waktu 3 jam. Kelajuan rata-rata mobil tersebut adalah...',
      options: ['50 km/jam', '450 km/jam', '153 km/jam', '30 km/jam'],
      answer: 'A',
      hint: '$v = s : t$.',
      solution: '$v = 150\\ \\text{km} : 3\\ \\text{jam} = 50\\ \\text{km/jam}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Penumpang bus terdorong ke depan ketika bus direm mendadak. Peristiwa ini sesuai dengan...',
      options: ['Hukum I Newton', 'Hukum II Newton', 'Hukum III Newton', 'hukum kekekalan massa'],
      answer: 'A',
      hint: 'Tubuh penumpang cenderung mempertahankan geraknya.',
      solution: 'Tubuh penumpang cenderung **mempertahankan keadaan geraknya** (kelembaman/inersia), sehingga tetap bergerak ke depan saat bus berhenti. Ini adalah **Hukum I Newton**. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Benda yang bergerak lurus beraturan (GLB) memiliki ciri...',
      options: ['percepatannya tetap dan tidak nol', 'kecepatannya tetap', 'kecepatannya bertambah secara teratur', 'lintasannya melingkar'],
      answer: 'B',
      hint: 'Kata "beraturan" pada GLB merujuk pada kecepatan.',
      solution: 'Pada GLB, benda bergerak di lintasan lurus dengan **kecepatan tetap**, sehingga percepatannya nol. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Dua anak menarik sebuah meja ke arah kanan dengan gaya 30 N dan 25 N, sedangkan seorang anak lain menarik ke kiri dengan gaya 40 N. Resultan gaya pada meja adalah...',
      options: ['95 N ke kanan', '15 N ke kiri', '15 N ke kanan', '55 N ke kanan'],
      answer: 'C',
      hint: 'Jumlahkan gaya yang searah, lalu kurangi dengan gaya yang berlawanan.',
      solution: 'Ke kanan: 30 + 25 = 55 N. Ke kiri: 40 N.\nResultan = 55 − 40 = **15 N ke kanan** (arah gaya yang lebih besar). Jawaban: **C**.',
      visual: {
        type: 'force',
        props: {
          title: 'Gaya pada Meja',
          bodyLabel: 'meja',
          forces: [
            { dir: 'right', label: '30 N' },
            { dir: 'right', label: '25 N' },
            { dir: 'left', label: '40 N' }
          ]
        }
      }
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah sepeda motor mula-mula bergerak dengan kecepatan 4 m/s, kemudian dipercepat sehingga kecepatannya menjadi 16 m/s dalam 6 sekon. Percepatan sepeda motor adalah...',
      options: ['2 m/s²', '3 m/s²', '12 m/s²', '20 m/s²'],
      answer: 'A',
      hint: '$a = (v_t - v_0) : t$.',
      solution: '$a = \\dfrac{16 - 4}{6} = \\dfrac{12}{6} = 2\\ \\text{m/s}^2$. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Massa seorang anak 40 kg. Jika percepatan gravitasi bumi 10 m/s², berat anak tersebut adalah...',
      options: ['4 N', '40 N', '50 N', '400 N'],
      answer: 'D',
      hint: '$w = m \\times g$.',
      solution: '$w = 40\\ \\text{kg} \\times 10\\ \\text{m/s}^2 = 400\\ \\text{N}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Peristiwa berikut yang merupakan contoh gerak lurus berubah beraturan dipercepat adalah...',
      options: ['bola menggelinding di lantai datar hingga berhenti', 'kelapa jatuh dari pohonnya', 'mobil melaju dengan kecepatan tetap di jalan tol', 'bola dilempar vertikal ke atas sebelum mencapai titik tertinggi'],
      answer: 'B',
      hint: 'Cari benda yang kecepatannya makin besar secara teratur.',
      solution: 'Kelapa yang jatuh bebas makin lama makin cepat karena gravitasi, jadi termasuk **GLBB dipercepat**. Pilihan A dan D diperlambat, pilihan C adalah GLB. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Saat berenang, perenang mendorong air ke belakang dan tubuhnya terdorong ke depan. Peristiwa ini sesuai dengan...',
      options: ['Hukum I Newton', 'Hukum II Newton', 'Hukum III Newton', 'gaya gesek'],
      answer: 'C',
      hint: 'Ada pasangan gaya aksi dan reaksi.',
      solution: 'Tangan mendorong air ke belakang (aksi) dan air mendorong perenang ke depan (reaksi) dengan gaya sama besar tetapi berlawanan arah. Ini adalah **Hukum III Newton**. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah balok bermassa 5 kg ditarik dengan gaya 40 N ke kanan. Gaya gesek antara balok dan lantai sebesar 10 N. Percepatan balok adalah...',
      options: ['2 m/s²', '6 m/s²', '8 m/s²', '10 m/s²'],
      answer: 'B',
      hint: 'Hitung dulu resultan gayanya, lalu gunakan $a = \\Sigma F : m$.',
      solution: '$\\Sigma F = 40 - 10 = 30\\ \\text{N}$.\n$a = \\Sigma F : m = 30 : 5 = 6\\ \\text{m/s}^2$. Jawaban: **B**.',
      visual: {
        type: 'force',
        props: {
          title: 'Gaya pada Balok',
          bodyLabel: '5 kg',
          forces: [
            { dir: 'right', label: 'F = 40 N' },
            { dir: 'left', label: 'f = 10 N' }
          ]
        }
      }
    }),
    soal({
      level: 'Tantangan',
      q: 'Grafik kecepatan terhadap waktu sebuah mobil ditunjukkan pada gambar. Mobil bergerak dari keadaan diam hingga kecepatannya 10 m/s pada detik ke-5. Jarak yang ditempuh mobil selama 5 sekon tersebut adalah...',
      options: ['50 m', '2 m', '25 m', '15 m'],
      answer: 'C',
      hint: 'Jarak = luas daerah di bawah grafik v–t (berbentuk segitiga).',
      solution: 'Daerah di bawah grafik berbentuk segitiga dengan alas 5 s dan tinggi 10 m/s.\nJarak = ½ × 5 × 10 = **25 m**. Jawaban: **C**.',
      visual: {
        type: 'motion-graph',
        props: {
          title: 'Grafik v–t Mobil',
          points: [[0, 0], [5, 10]],
          xTicks: [0, 5],
          yTicks: [10],
          xLabel: 't (s)',
          yLabel: 'v (m/s)'
        }
      }
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah benda mula-mula bergerak 10 m/s, kemudian direm dengan perlambatan 2 m/s². Benda berhenti setelah...',
      options: ['2 s', '20 s', '8 s', '5 s'],
      answer: 'D',
      hint: 'Saat berhenti, $v_t = 0$. Gunakan $a = (v_t - v_0) : t$ dengan $a = -2$.',
      solution: '$-2 = \\dfrac{0 - 10}{t} \\Rightarrow t = \\dfrac{-10}{-2} = 5\\ \\text{s}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Massa seorang astronot 60 kg. Percepatan gravitasi di bumi 10 m/s² dan di bulan 1,6 m/s². Pernyataan yang benar adalah...',
      options: [
        'massa astronot di bulan 9,6 kg dan beratnya 96 N',
        'massa astronot di bulan 60 kg dan beratnya 96 N',
        'massa astronot di bulan 60 kg dan beratnya 600 N',
        'massa dan berat astronot di bulan sama dengan di bumi'
      ],
      answer: 'B',
      hint: 'Massa tidak bergantung pada tempat; berat bergantung pada gravitasi.',
      solution: 'Massa tetap **60 kg** di mana pun. Berat di bulan $w = 60 \\times 1{,}6 = 96\\ \\text{N}$ (di bumi 600 N). Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Gaya yang sama besar diberikan pada troli A (massa 2 kg) dan troli B (massa 4 kg). Jika percepatan troli A 6 m/s², percepatan troli B adalah...',
      options: ['3 m/s²', '12 m/s²', '6 m/s²', '1,5 m/s²'],
      answer: 'A',
      hint: 'Hitung gaya dari troli A, lalu gunakan gaya itu pada troli B.',
      solution: 'Gaya pada troli A: $F = m \\times a = 2 \\times 6 = 12\\ \\text{N}$.\nTroli B: $a = F : m = 12 : 4 = 3\\ \\text{m/s}^2$. Massa dua kali lipat, percepatan menjadi setengahnya. Jawaban: **A**.'
    })
  ]
});
