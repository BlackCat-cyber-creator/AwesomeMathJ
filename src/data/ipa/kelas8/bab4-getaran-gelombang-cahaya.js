import { bab, soal } from '../author.js';

export default bab({
  grade: 8,
  number: 4,
  slug: 'getaran-gelombang-cahaya',
  title: 'Getaran, Gelombang, dan Cahaya',
  element: 'Gelombang: getaran, bunyi, cahaya, dan pemanfaatannya',
  summary: {
    overview: 'Suara musik, gelombang di kolam, dan bayangan di cermin semuanya berhubungan dengan getaran dan gelombang. Bab ini membahas getaran dan besarannya, jenis-jenis gelombang, bunyi dan pemanfaatannya, sifat-sifat cahaya, pembentukan bayangan pada cermin dan lensa, serta mata dan kacamata.',
    coreConcepts: [
      'Getaran: Getaran adalah gerak bolak-balik di sekitar titik setimbang. Pada bandul A–B–C, satu getaran adalah A → B → C → B → A. Amplitudo adalah simpangan terjauh dari titik setimbang. Frekuensi $f = \\dfrac{n}{t}$ (hertz, Hz) adalah banyak getaran tiap sekon; periode $T = \\dfrac{t}{n}$ (sekon) adalah waktu satu getaran; $f = \\dfrac{1}{T}$.',
      'Gelombang: Gelombang adalah getaran yang merambat dan membawa energi. Gelombang transversal arah getarnya tegak lurus arah rambat (gelombang tali, air, cahaya) dan terdiri atas bukit dan lembah. Gelombang longitudinal arah getarnya sejajar arah rambat (slinki, bunyi) dan terdiri atas rapatan dan renggangan. Satu panjang gelombang (λ) = satu bukit + satu lembah atau satu rapatan + satu renggangan. Cepat rambat $v = \\lambda \\times f = \\dfrac{\\lambda}{T}$.',
      'Bunyi: Bunyi adalah gelombang longitudinal yang memerlukan medium (padat, cair, gas), sehingga tidak dapat merambat di ruang hampa. Cepat rambat bunyi paling besar di zat padat. Berdasarkan frekuensinya: infrasonik (< 20 Hz, didengar gajah dan anjing), audiosonik (20–20.000 Hz, didengar manusia), ultrasonik (> 20.000 Hz, dipakai kelelawar, lumba-lumba, USG). Tinggi nada ditentukan frekuensi; kuat bunyi ditentukan amplitudo. Resonansi adalah ikut bergetarnya benda karena frekuensinya sama.',
      'Pemantulan Bunyi: Bunyi pantul dapat berupa gaung (mengganggu bunyi asli) atau gema (terdengar jelas setelah bunyi asli). Sonar memanfaatkan pantulan bunyi untuk mengukur kedalaman laut: $d = \\dfrac{v \\times t}{2}$, dibagi dua karena bunyi pergi lalu kembali.',
      'Cahaya, Cermin, dan Lensa: Cahaya merambat lurus, dapat dipantulkan, dibiaskan, dan diuraikan (pelangi). Cermin datar menghasilkan bayangan maya, tegak, sama besar. Cermin cekung (konkaf) mengumpulkan cahaya, dipakai pada lampu senter; cermin cembung (konveks) menyebarkan cahaya dan bayangannya selalu maya, tegak, diperkecil, dipakai pada spion. Rumus cermin dan lensa: $\\dfrac{1}{f} = \\dfrac{1}{s} + \\dfrac{1}{s\'}$, perbesaran $M = \\dfrac{s\'}{s}$.',
      'Mata dan Kacamata: Lensa mata membentuk bayangan nyata, terbalik, diperkecil pada retina; daya akomodasi adalah kemampuan lensa mata mencembung atau memipih. Rabun jauh (miopi) bayangan jatuh di depan retina, ditolong kacamata lensa cekung (negatif). Rabun dekat (hipermetropi) bayangan jatuh di belakang retina, ditolong kacamata lensa cembung (positif).'
    ],
    keyFormulas: [
      { label: 'Frekuensi & periode', formula: 'f = \\dfrac{n}{t} \\qquad T = \\dfrac{t}{n} \\qquad f = \\dfrac{1}{T}' },
      { label: 'Cepat rambat gelombang', formula: 'v = \\lambda \\times f' },
      { label: 'Kedalaman (pantulan bunyi)', formula: 'd = \\dfrac{v \\times t}{2}' },
      { label: 'Cermin & lensa', formula: '\\dfrac{1}{f} = \\dfrac{1}{s} + \\dfrac{1}{s\'} \\qquad M = \\dfrac{s\'}{s}' }
    ],
    workedExamples: [
      {
        title: 'Frekuensi dan periode bandul',
        problem: 'Sebuah bandul melakukan 30 getaran dalam 15 sekon. Tentukan frekuensi dan periodenya.',
        solution: '$f = 30 : 15 = 2\\ \\text{Hz}$. $T = 15 : 30 = 0{,}5\\ \\text{s}$ (atau $T = 1/f$).'
      },
      {
        title: 'Cepat rambat gelombang',
        problem: 'Gelombang air memiliki panjang gelombang 2 m dan frekuensi 3 Hz. Berapa cepat rambatnya?',
        solution: '$v = \\lambda \\times f = 2 \\times 3 = 6\\ \\text{m/s}$.'
      },
      {
        title: 'Mengukur kedalaman laut',
        problem: 'Sonar kapal memancarkan bunyi dan pantulannya diterima 4 s kemudian. Cepat rambat bunyi di air laut 1.500 m/s. Berapa kedalaman laut?',
        solution: '$d = \\dfrac{1.500 \\times 4}{2} = 3.000\\ \\text{m}$.'
      }
    ],
    misconceptions: [
      'Menganggap satu getaran bandul adalah A → C. Itu baru setengah getaran; satu getaran harus kembali ke titik awal (A → B → C → B → A).',
      'Menganggap bunyi dapat merambat di luar angkasa. Ruang hampa tidak memiliki medium, sehingga bunyi tidak dapat merambat.',
      'Menganggap penderita rabun jauh memakai lensa cembung. Rabun jauh memerlukan lensa cekung (negatif) agar bayangan mundur tepat ke retina.'
    ],
    tutorTip: 'Untuk soal gelombang bergambar, hitung dulu ada berapa gelombang (1 bukit + 1 lembah = 1 gelombang), lalu panjang gelombang = jarak total dibagi jumlah gelombang.'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Perhatikan ayunan bandul pada gambar. Bandul dilepas dari A dan berayun melewati B ke C. Gerakan yang menunjukkan satu getaran adalah...',
      options: ['A – B – C', 'A – B – C – B – A', 'A – B', 'B – C – B'],
      answer: 'B',
      hint: 'Satu getaran berakhir di posisi awal dengan arah gerak yang sama.',
      solution: 'Satu getaran adalah gerak bolak-balik penuh dari A kembali ke A: **A – B – C – B – A**. Jawaban: **B**.',
      visual: { type: 'pendulum', props: { title: 'Ayunan Bandul', labels: ['A', 'B', 'C'] } }
    }),
    soal({
      level: 'Dasar',
      q: 'Contoh gelombang longitudinal adalah...',
      options: ['gelombang pada tali', 'gelombang cahaya', 'gelombang bunyi', 'gelombang permukaan air'],
      answer: 'C',
      hint: 'Gelombang longitudinal terdiri atas rapatan dan renggangan.',
      solution: '**Bunyi** merambat sebagai rapatan dan renggangan partikel medium, sehingga termasuk gelombang longitudinal. Tali, cahaya, dan permukaan air adalah gelombang transversal. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Bunyi tidak dapat merambat di ruang hampa karena...',
      options: ['bunyi memerlukan medium untuk merambat', 'ruang hampa terlalu dingin', 'bunyi hanya merambat di air', 'ruang hampa memiliki gravitasi besar'],
      answer: 'A',
      hint: 'Bunyi adalah getaran partikel.',
      solution: 'Bunyi merambat melalui getaran partikel zat (**medium**). Ruang hampa tidak memiliki partikel, sehingga bunyi tidak dapat merambat. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Cermin yang digunakan sebagai kaca spion kendaraan agar jangkauan pandangan luas adalah...',
      options: ['cermin datar', 'cermin cekung', 'lensa cekung', 'cermin cembung'],
      answer: 'D',
      hint: 'Bayangannya selalu tegak dan diperkecil.',
      solution: '**Cermin cembung** menghasilkan bayangan maya, tegak, dan diperkecil, sehingga daerah yang terlihat lebih luas. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Bunyi dengan frekuensi di atas 20.000 Hz yang dimanfaatkan kelelawar untuk mendeteksi mangsa disebut...',
      options: ['infrasonik', 'ultrasonik', 'audiosonik', 'resonansi'],
      answer: 'B',
      hint: '"Ultra" berarti melampaui.',
      solution: 'Bunyi di atas 20.000 Hz disebut **ultrasonik**. Kelelawar memancarkannya dan mendengar pantulannya (ekolokasi). Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah bandul melakukan 60 getaran dalam waktu 20 sekon. Frekuensi getaran bandul tersebut adalah...',
      options: ['3 Hz', '0,33 Hz', '40 Hz', '1.200 Hz'],
      answer: 'A',
      hint: '$f = n : t$.',
      solution: '$f = 60 : 20 = 3\\ \\text{Hz}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah gelombang memiliki frekuensi 50 Hz dan panjang gelombang 4 m. Cepat rambat gelombang tersebut adalah...',
      options: ['12,5 m/s', '54 m/s', '200 m/s', '46 m/s'],
      answer: 'C',
      hint: '$v = \\lambda \\times f$.',
      solution: '$v = 4 \\times 50 = 200\\ \\text{m/s}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Periode getaran sebuah pegas adalah 0,25 s. Frekuensi getarannya adalah...',
      options: ['0,25 Hz', '2,5 Hz', '25 Hz', '4 Hz'],
      answer: 'D',
      hint: '$f = 1 : T$.',
      solution: '$f = 1 : 0{,}25 = 4\\ \\text{Hz}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Seseorang dapat melihat jelas benda yang dekat, tetapi benda yang jauh tampak kabur. Kelainan mata dan jenis kacamata yang tepat adalah...',
      options: [
        'rabun jauh (miopi), lensa cekung',
        'rabun dekat (hipermetropi), lensa cekung',
        'rabun jauh (miopi), lensa cembung',
        'rabun dekat (hipermetropi), lensa cembung'
      ],
      answer: 'A',
      hint: 'Tidak dapat melihat jauh = rabun jauh.',
      solution: 'Tidak jelas melihat benda jauh adalah **rabun jauh (miopi)**: bayangan jatuh di depan retina. Ditolong **lensa cekung** (negatif) yang menyebarkan cahaya. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Kaca jendela ikut bergetar ketika ada truk besar lewat di depan rumah. Peristiwa ini disebut...',
      options: ['gema', 'pembiasan', 'resonansi', 'interferensi'],
      answer: 'C',
      hint: 'Benda ikut bergetar karena getaran benda lain.',
      solution: 'Kaca ikut bergetar karena frekuensi alaminya sama atau mendekati frekuensi getaran mesin truk. Peristiwa ini disebut **resonansi**. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Perhatikan gelombang transversal pada gambar. Panjang tali yang membentuk 2 gelombang penuh adalah 60 cm, dan gelombang merambat dengan frekuensi 5 Hz. Cepat rambat gelombang tersebut adalah...',
      options: ['150 cm/s', '300 cm/s', '12 cm/s', '30 cm/s'],
      answer: 'A',
      hint: 'Hitung panjang satu gelombang dulu: λ = 60 cm : 2.',
      solution: '$\\lambda = 60 : 2 = 30\\ \\text{cm}$.\n$v = \\lambda \\times f = 30 \\times 5 = 150\\ \\text{cm/s}$. Jawaban: **A**.',
      visual: {
        type: 'wave',
        props: { title: 'Gelombang pada Tali', kind: 'transversal', cycles: 2, lengthLabel: '60 cm' }
      }
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah kapal memancarkan bunyi ke dasar laut dan menerima pantulannya setelah 2 s. Jika cepat rambat bunyi di air laut 1.400 m/s, kedalaman laut tersebut adalah...',
      options: ['2.800 m', '700 m', '1.400 m', '5.600 m'],
      answer: 'C',
      hint: 'Bunyi menempuh jarak pergi-pulang.',
      solution: '$d = \\dfrac{v \\times t}{2} = \\dfrac{1.400 \\times 2}{2} = 1.400\\ \\text{m}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah benda diletakkan 30 cm di depan cermin cekung yang jarak fokusnya 20 cm. Jarak bayangan dari cermin adalah...',
      options: ['10 cm', '12 cm', '50 cm', '60 cm'],
      answer: 'D',
      hint: '$\\dfrac{1}{s\'} = \\dfrac{1}{f} - \\dfrac{1}{s}$.',
      solution: '$\\dfrac{1}{s\'} = \\dfrac{1}{20} - \\dfrac{1}{30} = \\dfrac{3 - 2}{60} = \\dfrac{1}{60}$, sehingga $s\' = 60\\ \\text{cm}$ (nyata, di depan cermin). Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Dua garpu tala P dan Q dipukul dengan kekuatan sama. Garpu tala P berfrekuensi 512 Hz dan Q 256 Hz. Pernyataan yang benar adalah...',
      options: [
        'bunyi P lebih keras karena frekuensinya lebih tinggi',
        'nada P lebih tinggi daripada nada Q',
        'nada Q lebih tinggi karena frekuensinya lebih kecil',
        'P dan Q terdengar sama karena dipukul dengan kekuatan sama'
      ],
      answer: 'B',
      hint: 'Frekuensi menentukan tinggi nada, amplitudo menentukan kuat bunyi.',
      solution: 'Tinggi rendahnya nada ditentukan **frekuensi**: 512 Hz lebih tinggi daripada 256 Hz, jadi **nada P lebih tinggi**. Kuat bunyi ditentukan amplitudo, yang di sini sama. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Seorang anak berteriak di depan tebing dan mendengar gemanya 1,5 s kemudian. Jika cepat rambat bunyi di udara 340 m/s, jarak anak ke tebing adalah...',
      options: ['510 m', '226 m', '1.020 m', '255 m'],
      answer: 'D',
      hint: 'Waktu 1,5 s adalah waktu pergi dan kembali.',
      solution: '$d = \\dfrac{340 \\times 1{,}5}{2} = \\dfrac{510}{2} = 255\\ \\text{m}$. Jawaban: **D**.'
    })
  ]
});
