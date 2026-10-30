import { bab, soal } from '../author.js';

export default bab({
  grade: 8,
  number: 2,
  slug: 'struktur-fungsi-tubuh',
  title: 'Struktur dan Fungsi Tubuh Makhluk Hidup',
  element: 'Makhluk hidup dan lingkungannya: sistem organ, fungsi, dan gangguannya',
  summary: {
    overview: 'Tubuh manusia dan tumbuhan tersusun atas sistem organ yang bekerja sama menjaga kehidupan. Bab ini membahas sistem gerak, pencernaan beserta zat aditif pada makanan, pernapasan, peredaran darah, ekskresi, serta struktur dan fungsi jaringan tumbuhan, lengkap dengan gangguan yang dapat terjadi.',
    coreConcepts: [
      'Sistem Gerak: Rangka (tulang) adalah alat gerak pasif yang memberi bentuk tubuh, melindungi organ dalam, dan tempat pembentukan sel darah (sumsum merah). Otot adalah alat gerak aktif yang bekerja berpasangan: antagonis (berlawanan, misalnya bisep dan trisep) atau sinergis (searah). Sendi menghubungkan tulang: sendi engsel (siku, lutut), sendi peluru (bahu, pangkal paha), sendi putar (leher). Gangguan: osteoporosis, skoliosis, lordosis, kifosis.',
      'Sistem Pencernaan dan Uji Makanan: Saluran pencernaan: mulut → kerongkongan → lambung → usus halus → usus besar → anus. Enzim ptialin (amilase) di mulut mengubah amilum menjadi gula; pepsin di lambung memecah protein; usus halus menyerap sari makanan. Uji makanan: Lugol untuk amilum (biru kehitaman), Benedict untuk glukosa (merah bata setelah dipanaskan), Biuret untuk protein (ungu), dan kertas buram untuk lemak (noda transparan).',
      'Zat Aditif pada Makanan: Zat yang sengaja ditambahkan untuk memperbaiki warna, rasa, aroma, atau daya tahan makanan. Alami: kunyit dan daun suji (pewarna), garam dan gula (pengawet), daun pandan (pengharum). Buatan: tartrazin, natrium benzoat, aspartam, MSG. Zat yang tidak boleh untuk makanan, misalnya boraks, formalin, dan rhodamin B, berbahaya bagi hati dan ginjal. Bacalah label komposisi dan izin BPOM sebelum membeli.',
      'Sistem Pernapasan: Udara masuk melalui hidung → faring → laring → trakea → bronkus → bronkiolus → alveolus. Di alveolus terjadi pertukaran gas secara difusi: oksigen masuk ke darah, karbon dioksida keluar. Pernapasan dada dan perut terjadi karena kontraksi otot antartulang rusuk dan diafragma; saat inspirasi rongga dada membesar sehingga tekanan turun dan udara masuk. Gangguan: asma, bronkitis, pneumonia, dan kerusakan paru akibat asap rokok.',
      'Sistem Peredaran Darah: Jantung memiliki 4 ruang (serambi kanan-kiri, bilik kanan-kiri). Peredaran darah kecil: jantung (bilik kanan) → paru-paru → jantung (serambi kiri). Peredaran darah besar: jantung (bilik kiri) → seluruh tubuh → jantung (serambi kanan). Arteri membawa darah keluar dari jantung, vena membawa darah kembali ke jantung. Komponen darah: sel darah merah (mengangkut oksigen dengan hemoglobin), sel darah putih (melawan kuman), keping darah (pembekuan), dan plasma. Gangguan: anemia, hipertensi, varises.',
      'Sistem Ekskresi: Ginjal menyaring darah dan menghasilkan urine; kulit mengeluarkan keringat; paru-paru mengeluarkan karbon dioksida dan uap air; hati merombak sel darah merah tua menjadi zat warna empedu. Minum air yang cukup membantu mencegah batu ginjal.',
      'Struktur dan Fungsi Tumbuhan: Akar menyerap air dan mineral; batang mengangkut zat dan menopang tubuh; daun tempat fotosintesis. Xilem mengangkut air dan mineral dari akar ke daun, floem mengangkut hasil fotosintesis ke seluruh tubuh. Stomata pada daun tempat pertukaran gas dan penguapan air (transpirasi). Fotosintesis: karbon dioksida + air → glukosa + oksigen, dengan bantuan cahaya matahari dan klorofil.'
    ],
    keyFormulas: [
      { label: 'Peredaran darah kecil', formula: '\\text{bilik kanan} \\to \\text{paru-paru} \\to \\text{serambi kiri}' },
      { label: 'Peredaran darah besar', formula: '\\text{bilik kiri} \\to \\text{seluruh tubuh} \\to \\text{serambi kanan}' },
      { label: 'Fotosintesis', formula: '6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{cahaya, klorofil}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2' },
      { label: 'Uji makanan', formula: '\\text{Lugol: amilum} \\quad \\text{Benedict: glukosa} \\quad \\text{Biuret: protein}' }
    ],
    workedExamples: [
      {
        title: 'Membaca hasil uji makanan',
        problem: 'Bahan X ditetesi Biuret menjadi ungu, ditetesi Lugol tetap cokelat, dan ditetesi Benedict lalu dipanaskan tetap biru. Bahan X mengandung zat apa?',
        solution: 'Biuret ungu → mengandung **protein**. Lugol tidak biru kehitaman → tidak ada amilum. Benedict tidak merah bata → tidak ada glukosa. Jadi bahan X hanya positif **protein** (misalnya putih telur).'
      },
      {
        title: 'Menelusuri aliran darah',
        problem: 'Urutkan perjalanan darah dari bilik kanan sampai kembali ke jantung.',
        solution: 'Bilik kanan → arteri paru-paru → paru-paru (melepas CO₂, mengikat O₂) → vena paru-paru → **serambi kiri**. Ini adalah peredaran darah kecil.'
      },
      {
        title: 'Memilih jajanan yang aman',
        problem: 'Sebuah kerupuk berwarna merah mencolok, tidak berlabel, dan terasa getir. Apa yang perlu diwaspadai?',
        solution: 'Warna merah mencolok tanpa label dapat berasal dari **rhodamin B**, pewarna tekstil yang dilarang untuk makanan dan merusak hati. Pilih makanan berlabel komposisi dan izin BPOM.'
      }
    ],
    misconceptions: [
      'Menganggap semua arteri membawa darah kaya oksigen. Arteri paru-paru justru membawa darah kaya karbon dioksida dari jantung ke paru-paru.',
      'Menganggap pencernaan hanya terjadi di lambung. Pencernaan kimiawi sudah dimulai di mulut (ptialin) dan penyerapan sari makanan terutama di usus halus.',
      'Menganggap semua zat aditif buatan berbahaya. Zat aditif buatan yang diizinkan aman jika dalam batas takaran; yang berbahaya adalah zat yang dilarang (boraks, formalin, rhodamin B) atau penggunaan berlebihan.',
      'Menganggap tumbuhan bernapas dengan menghirup karbon dioksida saja. Tumbuhan juga melakukan respirasi (menggunakan oksigen) siang dan malam; fotosintesis hanya saat ada cahaya.'
    ],
    tutorTip: 'Untuk peredaran darah, ingat "bilik = keluar, serambi = masuk": darah selalu KELUAR jantung dari bilik dan MASUK jantung lewat serambi.'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Sendi yang memungkinkan gerakan ke segala arah, seperti pada pangkal lengan (bahu), adalah sendi...',
      options: ['engsel', 'putar', 'peluru', 'pelana'],
      answer: 'C',
      hint: 'Ujung tulangnya membulat seperti bola.',
      solution: '**Sendi peluru** memungkinkan gerakan ke segala arah, terdapat pada bahu dan pangkal paha. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Tempat terjadinya pertukaran oksigen dan karbon dioksida di paru-paru adalah...',
      options: ['trakea', 'bronkus', 'laring', 'alveolus'],
      answer: 'D',
      hint: 'Gelembung kecil berdinding tipis yang diselubungi kapiler darah.',
      solution: 'Pertukaran gas terjadi di **alveolus** secara difusi karena dindingnya sangat tipis dan dikelilingi kapiler darah. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Larutan yang digunakan untuk menguji kandungan amilum (karbohidrat) dalam makanan adalah...',
      options: ['Lugol', 'Biuret', 'Benedict', 'air kapur'],
      answer: 'A',
      hint: 'Hasil positifnya biru kehitaman.',
      solution: '**Lugol** (larutan iodin) mengubah amilum menjadi biru kehitaman. Biuret untuk protein, Benedict untuk glukosa. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Sel darah yang berfungsi mengangkut oksigen ke seluruh tubuh adalah...',
      options: ['sel darah putih', 'sel darah merah', 'keping darah', 'plasma darah'],
      answer: 'B',
      hint: 'Sel ini mengandung hemoglobin.',
      solution: '**Sel darah merah** mengandung hemoglobin yang mengikat oksigen. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Bahan berikut yang dilarang digunakan dalam makanan karena berbahaya bagi kesehatan adalah...',
      options: ['kunyit', 'garam dapur', 'formalin', 'daun pandan'],
      answer: 'C',
      hint: 'Bahan ini biasanya dipakai untuk mengawetkan mayat.',
      solution: '**Formalin** dilarang untuk makanan karena bersifat racun dan dapat merusak organ. Kunyit, garam, dan daun pandan adalah zat aditif alami yang aman. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Saat lengan ditekuk, otot bisep berkontraksi dan otot trisep berelaksasi. Hubungan kerja kedua otot ini disebut...',
      options: ['sinergis', 'antagonis', 'refleks', 'involunter'],
      answer: 'B',
      hint: 'Satu memendek, yang lain mengendur.',
      solution: 'Bisep dan trisep bekerja **berlawanan** (satu berkontraksi, yang lain relaksasi). Hubungan ini disebut **antagonis**. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Urutan peredaran darah kecil yang benar adalah...',
      options: [
        'bilik kiri → seluruh tubuh → serambi kanan',
        'serambi kanan → paru-paru → bilik kiri',
        'bilik kanan → paru-paru → serambi kiri',
        'bilik kiri → paru-paru → serambi kanan'
      ],
      answer: 'C',
      hint: 'Peredaran kecil melewati paru-paru dan dimulai dari bilik.',
      solution: 'Peredaran darah kecil: **bilik kanan → paru-paru → serambi kiri**. Pilihan A adalah peredaran darah besar. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Pada uji makanan, sampel A ditetesi larutan Benedict lalu dipanaskan dan warnanya berubah menjadi merah bata. Sampel A mengandung...',
      options: ['protein', 'lemak', 'amilum', 'glukosa'],
      answer: 'D',
      hint: 'Benedict digunakan untuk gula sederhana.',
      solution: 'Benedict bereaksi dengan **glukosa** (gula pereduksi) membentuk endapan merah bata setelah dipanaskan. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Jaringan pada tumbuhan yang berfungsi mengangkut air dan mineral dari akar ke daun adalah...',
      options: ['xilem', 'floem', 'epidermis', 'stomata'],
      answer: 'A',
      hint: 'Floem mengangkut hasil fotosintesis.',
      solution: '**Xilem** (pembuluh kayu) mengangkut air dan mineral dari akar ke daun. Floem mengangkut hasil fotosintesis dari daun ke seluruh tubuh. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Organ berikut yang berperan dalam sistem ekskresi dengan menyaring darah dan menghasilkan urine adalah...',
      options: ['hati', 'paru-paru', 'ginjal', 'kulit'],
      answer: 'C',
      hint: 'Organ berbentuk seperti kacang merah.',
      solution: '**Ginjal** menyaring darah dan membuang zat sisa dalam bentuk urine. Hati, paru-paru, dan kulit juga organ ekskresi, tetapi zat sisanya berbeda. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Ketika seseorang menarik napas (inspirasi) dengan pernapasan perut, yang terjadi adalah...',
      options: [
        'diafragma berkontraksi dan mendatar, rongga dada membesar, tekanan udara di paru-paru turun',
        'diafragma melengkung ke atas, rongga dada mengecil, tekanan naik',
        'otot perut berkontraksi sehingga udara terdorong keluar',
        'tulang rusuk turun dan rongga dada mengecil'
      ],
      answer: 'A',
      hint: 'Udara bergerak dari tekanan tinggi ke tekanan rendah.',
      solution: 'Saat inspirasi, **diafragma berkontraksi dan mendatar**, rongga dada membesar sehingga **tekanan di paru-paru turun** di bawah tekanan udara luar, lalu udara masuk. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Hasil uji makanan: bahan P → Lugol biru kehitaman, Biuret biru, Benedict biru. Bahan Q → Lugol cokelat, Biuret ungu, Benedict biru. Kesimpulan yang tepat adalah...',
      options: [
        'P mengandung protein, Q mengandung amilum',
        'P mengandung amilum, Q mengandung protein',
        'P dan Q sama-sama mengandung glukosa',
        'P mengandung glukosa, Q mengandung lemak'
      ],
      answer: 'B',
      hint: 'Cocokkan setiap pereaksi dengan warna positifnya.',
      solution: 'P: Lugol biru kehitaman → **amilum**; Biuret dan Benedict tidak berubah. Q: Biuret ungu → **protein**; Lugol tetap cokelat. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Seorang pedagang menjual bakso yang tetap kenyal dan tidak basi meskipun disimpan 4 hari di suhu ruang tanpa lemari pendingin. Sikap yang paling tepat sebagai konsumen adalah...',
      options: [
        'membelinya karena lebih awet dan hemat',
        'mencurigai adanya pengawet terlarang seperti boraks atau formalin dan memilih produk berizin BPOM',
        'menambahkan garam agar lebih aman',
        'merebusnya lebih lama agar pengawetnya hilang'
      ],
      answer: 'B',
      hint: 'Makanan basah tanpa pengawet aman biasanya cepat basi.',
      solution: 'Bakso basah yang tetap kenyal dan tidak basi berhari-hari patut **dicurigai mengandung boraks atau formalin**. Zat ini tidak hilang dengan direbus. Pilih produk berlabel dan berizin BPOM. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sel darah merah tidak memiliki inti sel dan berbentuk cakram cekung di kedua sisinya. Keuntungan bentuk ini bagi fungsinya adalah...',
      options: [
        'memperluas permukaan sehingga lebih banyak oksigen dapat diikat',
        'membuatnya mampu membelah diri dengan cepat',
        'membuatnya dapat memakan kuman',
        'membantu pembekuan darah'
      ],
      answer: 'A',
      hint: 'Hubungkan bentuk dengan tugas mengangkut oksigen.',
      solution: 'Bentuk cakram cekung **memperluas permukaan**, dan tanpa inti ada lebih banyak ruang untuk hemoglobin, sehingga lebih banyak **oksigen dapat diikat**. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Daun suatu tanaman dioles vaselin pada permukaan bawahnya. Setelah beberapa hari, daun itu layu dan menguning. Penyebab yang paling mungkin adalah...',
      options: [
        'vaselin meracuni xilem',
        'cahaya matahari tidak dapat masuk ke daun',
        'akar tidak dapat menyerap air',
        'stomata tertutup sehingga pertukaran gas dan penguapan air terhambat'
      ],
      answer: 'D',
      hint: 'Stomata paling banyak terdapat di permukaan bawah daun.',
      solution: 'Vaselin **menutup stomata** di permukaan bawah daun, sehingga CO₂ tidak dapat masuk untuk fotosintesis dan transpirasi terhambat (aliran air dari akar ikut melambat). Daun pun layu dan menguning. Jawaban: **D**.'
    })
  ]
});
