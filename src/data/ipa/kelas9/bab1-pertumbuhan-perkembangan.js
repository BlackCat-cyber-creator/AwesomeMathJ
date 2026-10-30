import { bab, soal } from '../author.js';

export default bab({
  grade: 9,
  number: 1,
  slug: 'pertumbuhan-perkembangan',
  title: 'Pertumbuhan dan Perkembangan',
  element: 'Makhluk hidup dan lingkungannya: sistem organisasi kehidupan',
  summary: {
    overview: 'Biji kacang tumbuh menjadi tanaman, ulat menjadi kupu-kupu, dan bayi tumbuh menjadi remaja. Bab ini membahas perbedaan pertumbuhan dan perkembangan, pembelahan sel, pertumbuhan pada tumbuhan beserta faktor yang memengaruhinya, metamorfosis pada hewan, dan tahapan pertumbuhan manusia termasuk masa pubertas.',
    coreConcepts: [
      'Pertumbuhan dan Perkembangan: Pertumbuhan adalah bertambahnya ukuran (tinggi, massa, volume) yang tidak dapat kembali (irreversibel) dan dapat diukur (kuantitatif). Perkembangan adalah proses menuju kedewasaan atau kematangan fungsi organ (kualitatif), misalnya kemampuan berbunga atau berkembang biak.',
      'Pembelahan Sel: Mitosis menghasilkan 2 sel anak yang jumlah kromosomnya sama dengan sel induk; terjadi pada sel tubuh untuk pertumbuhan dan mengganti sel rusak. Meiosis menghasilkan 4 sel anak dengan jumlah kromosom setengah sel induk; terjadi pada organ reproduksi untuk membentuk sel kelamin (gamet).',
      'Pertumbuhan pada Tumbuhan: Pertumbuhan primer terjadi di jaringan meristem apikal (ujung akar dan ujung batang) sehingga tumbuhan bertambah panjang. Pertumbuhan sekunder oleh kambium membuat batang bertambah besar dan membentuk lingkaran tahun pada tumbuhan dikotil. Perkecambahan epigeal: kotiledon terangkat ke atas tanah (kacang hijau); hipogeal: kotiledon tetap di dalam tanah (jagung, kacang kapri).',
      'Faktor yang Memengaruhi Pertumbuhan Tumbuhan: Faktor dalam: gen dan hormon (auksin merangsang pemanjangan sel, giberelin memacu tinggi tanaman dan pembuahan, sitokinin memacu pembelahan sel, etilen mempercepat pematangan buah, asam absisat menghambat pertumbuhan saat kekeringan). Faktor luar: air, nutrisi, suhu, kelembapan, dan cahaya. Tanaman di tempat gelap tumbuh lebih cepat tinggi tetapi pucat dan kurus (etiolasi), karena cahaya menghambat kerja auksin.',
      'Pertumbuhan dan Perkembangan Hewan: Metamorfosis sempurna melalui tahap telur → larva → pupa → imago (kupu-kupu, nyamuk, lalat). Metamorfosis tidak sempurna: telur → nimfa → imago (belalang, kecoak, capung). Katak mengalami metamorfosis dari telur → berudu (bernapas dengan insang) → katak muda → katak dewasa (bernapas dengan paru-paru dan kulit).',
      'Pertumbuhan Manusia dan Pubertas: Tahapan: bayi, anak-anak, remaja, dewasa, dan lanjut usia. Masa pubertas ditandai matangnya organ reproduksi akibat hormon (testosteron pada laki-laki, estrogen dan progesteron pada perempuan). Ciri sekunder laki-laki: suara membesar, tumbuh jakun dan kumis; perempuan: payudara membesar, pinggul melebar, menstruasi. Pertumbuhan manusia dipengaruhi gizi, hormon, kesehatan, dan olahraga.'
    ],
    keyFormulas: [
      { label: 'Mitosis', formula: '1\\ \\text{sel} \\ (2n) \\to 2\\ \\text{sel} \\ (2n)' },
      { label: 'Meiosis', formula: '1\\ \\text{sel} \\ (2n) \\to 4\\ \\text{sel} \\ (n)' },
      { label: 'Metamorfosis sempurna', formula: '\\text{telur} \\to \\text{larva} \\to \\text{pupa} \\to \\text{imago}' },
      { label: 'Metamorfosis tidak sempurna', formula: '\\text{telur} \\to \\text{nimfa} \\to \\text{imago}' }
    ],
    workedExamples: [
      {
        title: 'Membandingkan mitosis dan meiosis',
        problem: 'Sel tubuh manusia memiliki 46 kromosom. Berapa kromosom pada sel hasil mitosis dan sel hasil meiosis?',
        solution: 'Mitosis menghasilkan sel dengan jumlah kromosom sama: **46**. Meiosis menghasilkan gamet dengan setengahnya: **23** kromosom. Saat sperma (23) dan sel telur (23) bersatu, zigot kembali memiliki 46 kromosom.'
      },
      {
        title: 'Percobaan cahaya pada kecambah',
        problem: 'Kecambah A ditaruh di tempat gelap dan kecambah B di tempat terang selama 7 hari. Bagaimana hasilnya dan mengapa?',
        solution: 'Kecambah A lebih tinggi tetapi pucat, kurus, dan daunnya kecil (**etiolasi**), karena auksin bekerja maksimal tanpa cahaya dan klorofil tidak terbentuk. Kecambah B lebih pendek tetapi hijau, batangnya kokoh, dan daunnya lebar.'
      },
      {
        title: 'Menentukan jenis metamorfosis',
        problem: 'Capung bertelur di air, telurnya menetas menjadi hewan muda yang bentuknya mirip capung dewasa tetapi belum bersayap. Jenis metamorfosis apa ini?',
        solution: 'Hewan muda yang mirip induknya disebut **nimfa**, tanpa tahap pupa. Jadi capung mengalami **metamorfosis tidak sempurna**.'
      }
    ],
    misconceptions: [
      'Menganggap pertumbuhan dan perkembangan sama. Pertumbuhan diukur dari ukuran; perkembangan dilihat dari kematangan fungsi.',
      'Menganggap tanaman di tempat gelap tumbuh lebih sehat karena lebih tinggi. Tanaman itu mengalami etiolasi: tinggi tetapi lemah dan pucat.',
      'Menganggap meiosis terjadi di semua sel tubuh. Meiosis hanya terjadi di organ reproduksi untuk membentuk gamet.'
    ],
    tutorTip: 'Ingat angka kunci pembelahan sel: Mitosis = 2 sel, kromosom tetap; Meiosis = 4 sel, kromosom setengah. "MIToSIS untuk tubuh, MEIosis untuk keturunan."'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Pertumbuhan pada makhluk hidup memiliki ciri...',
      options: ['dapat kembali ke ukuran semula', 'tidak dapat diukur', 'bertambahnya ukuran yang tidak dapat kembali', 'hanya terjadi pada hewan'],
      answer: 'C',
      hint: 'Pertumbuhan bersifat kuantitatif dan irreversibel.',
      solution: 'Pertumbuhan adalah **bertambahnya ukuran yang tidak dapat kembali (irreversibel)** dan dapat diukur. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Jaringan yang menyebabkan ujung batang dan ujung akar tumbuhan bertambah panjang adalah...',
      options: ['meristem apikal', 'kambium', 'epidermis', 'xilem'],
      answer: 'A',
      hint: '"Apikal" berarti ujung.',
      solution: '**Meristem apikal** di ujung batang dan akar terus membelah sehingga tumbuhan bertambah panjang (pertumbuhan primer). Kambium menyebabkan pertumbuhan ke samping. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Urutan metamorfosis sempurna pada kupu-kupu adalah...',
      options: ['telur → nimfa → imago', 'telur → pupa → larva → imago', 'telur → imago → larva → pupa', 'telur → larva → pupa → imago'],
      answer: 'D',
      hint: 'Ulat adalah larva, kepompong adalah pupa.',
      solution: 'Kupu-kupu: **telur → larva (ulat) → pupa (kepompong) → imago (kupu-kupu dewasa)**. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Pembelahan sel yang menghasilkan sel kelamin (gamet) disebut...',
      options: ['mitosis', 'meiosis', 'fotosintesis', 'respirasi'],
      answer: 'B',
      hint: 'Pembelahan ini menghasilkan 4 sel dengan kromosom setengahnya.',
      solution: 'Sel kelamin dibentuk melalui **meiosis**, yang menghasilkan 4 sel dengan jumlah kromosom setengah sel induk. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Hormon tumbuhan yang berperan mempercepat pematangan buah adalah...',
      options: ['auksin', 'sitokinin', 'etilen', 'giberelin'],
      answer: 'C',
      hint: 'Pisang matang lebih cepat jika diperam bersama buah yang sudah matang.',
      solution: '**Etilen** adalah hormon berbentuk gas yang mempercepat pematangan buah. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Tanaman kacang hijau yang diletakkan di tempat gelap tumbuh lebih tinggi daripada yang di tempat terang, tetapi batangnya kurus dan daunnya pucat. Peristiwa ini disebut...',
      options: ['etiolasi', 'fotosintesis', 'dormansi', 'gutasi'],
      answer: 'A',
      hint: 'Di tempat gelap, auksin bekerja maksimal.',
      solution: 'Pertumbuhan cepat tetapi lemah dan pucat di tempat gelap disebut **etiolasi**. Cahaya menghambat auksin, sehingga tanpa cahaya batang memanjang cepat. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sel kulit manusia memiliki 46 kromosom. Jumlah kromosom pada setiap sel hasil pembelahan mitosis sel kulit tersebut adalah...',
      options: ['23', '92', '12', '46'],
      answer: 'D',
      hint: 'Mitosis mempertahankan jumlah kromosom.',
      solution: 'Mitosis menghasilkan sel anak dengan jumlah kromosom **sama** dengan sel induk, yaitu **46**. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Pada perkecambahan kacang hijau, kotiledon (keping biji) terangkat ke atas permukaan tanah. Tipe perkecambahan ini disebut...',
      options: ['hipogeal', 'epigeal', 'vegetatif', 'generatif'],
      answer: 'B',
      hint: '"Epi" berarti di atas.',
      solution: 'Kotiledon yang terangkat ke atas tanah menunjukkan perkecambahan **epigeal**. Pada hipogeal, kotiledon tetap di dalam tanah. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Berikut yang merupakan ciri pubertas pada remaja laki-laki adalah...',
      options: ['pinggul melebar', 'mulai menstruasi', 'suara membesar dan tumbuh jakun', 'payudara membesar'],
      answer: 'C',
      hint: 'Dipengaruhi hormon testosteron.',
      solution: 'Hormon testosteron menyebabkan **suara membesar dan tumbuh jakun**, kumis, serta otot berkembang. Pilihan lain adalah ciri pubertas perempuan. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Hewan berikut yang mengalami metamorfosis tidak sempurna adalah...',
      options: ['nyamuk', 'kupu-kupu', 'lalat', 'belalang'],
      answer: 'D',
      hint: 'Metamorfosis tidak sempurna tidak memiliki tahap pupa.',
      solution: '**Belalang** mengalami telur → nimfa → imago, tanpa tahap pupa. Nyamuk, kupu-kupu, dan lalat mengalami metamorfosis sempurna. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sel kelamin seekor hewan (hasil meiosis) memiliki 12 kromosom. Jumlah kromosom pada sel tubuh hewan tersebut adalah...',
      options: ['6', '24', '12', '48'],
      answer: 'B',
      hint: 'Gamet memiliki setengah jumlah kromosom sel tubuh.',
      solution: 'Gamet memiliki kromosom setengah dari sel tubuh, sehingga sel tubuh = 2 × 12 = **24** kromosom. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Pada potongan melintang batang pohon jati terlihat 25 lingkaran tahun. Lingkaran tahun ini terbentuk karena aktivitas...',
      options: [
        'meristem apikal yang membuat batang bertambah panjang',
        'kambium yang aktivitasnya berbeda pada musim hujan dan musim kemarau',
        'xilem yang mengangkut air',
        'daun yang berfotosintesis'
      ],
      answer: 'B',
      hint: 'Lingkaran tahun berkaitan dengan pertumbuhan sekunder.',
      solution: '**Kambium** membentuk jaringan baru setiap tahun. Pada musim hujan sel yang dibentuk besar dan renggang, pada musim kemarau kecil dan rapat, sehingga tampak lingkaran tahun. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Kecambah yang ditaruh di dekat jendela tumbuh membengkok ke arah datangnya cahaya. Penjelasan yang tepat adalah...',
      options: [
        'auksin berpindah ke sisi yang gelap sehingga sel di sisi gelap memanjang lebih cepat',
        'auksin berpindah ke sisi terang sehingga sisi terang tumbuh lebih cepat',
        'sel di sisi terang mati karena panas',
        'kecambah tertarik oleh gravitasi jendela'
      ],
      answer: 'A',
      hint: 'Batang membengkok ke arah sisi yang tumbuh lebih lambat.',
      solution: 'Cahaya membuat **auksin berkumpul di sisi yang gelap**. Sel di sisi gelap memanjang lebih cepat daripada sisi terang, sehingga batang membengkok ke arah cahaya (fototropisme positif). Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Dua kelompok anak kembar identik dibesarkan di lingkungan berbeda. Anak yang mendapat gizi seimbang tumbuh lebih tinggi daripada saudaranya yang kekurangan gizi. Kesimpulan yang paling tepat adalah...',
      options: [
        'pertumbuhan hanya ditentukan oleh gen',
        'gizi tidak berpengaruh pada pertumbuhan',
        'selain gen, faktor luar seperti gizi sangat memengaruhi pertumbuhan',
        'anak kembar identik memiliki gen yang berbeda'
      ],
      answer: 'C',
      hint: 'Gen mereka sama; yang berbeda adalah lingkungan.',
      solution: 'Karena gen kedua anak sama, perbedaan tinggi disebabkan **faktor luar**, yaitu gizi. Jadi pertumbuhan dipengaruhi gen dan lingkungan, termasuk gizi. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Berudu bernapas dengan insang, sedangkan katak dewasa bernapas dengan paru-paru dan kulit. Perubahan alat pernapasan ini menunjukkan bahwa metamorfosis katak...',
      options: [
        'hanya berupa pertambahan ukuran tubuh',
        'disertai perubahan bentuk dan fungsi organ yang menyesuaikan diri dengan tempat hidup di air lalu di darat',
        'terjadi karena katak kekurangan makanan',
        'membuat katak tidak dapat hidup di air'
      ],
      answer: 'B',
      hint: 'Berudu hidup di air, katak dewasa dapat hidup di darat.',
      solution: 'Metamorfosis bukan hanya pertumbuhan ukuran, tetapi **perkembangan bentuk dan fungsi organ**: insang untuk hidup di air diganti paru-paru agar dapat hidup di darat. Jawaban: **B**.'
    })
  ]
});
