import { bab, soal } from '../author.js';

export default bab({
  grade: 9,
  number: 2,
  slug: 'koordinasi-reproduksi-homeostasis',
  title: 'Sistem Koordinasi, Reproduksi, dan Homeostasis Manusia',
  element: 'Makhluk hidup dan lingkungannya: sistem organ; zat adiktif',
  summary: {
    overview: 'Tubuh manusia mampu menanggapi rangsang, menjaga kondisi tetap stabil, dan menghasilkan keturunan. Bab ini membahas sistem saraf dan gerak refleks, sistem hormon, homeostasis, sistem reproduksi beserta cara menjaga kesehatannya, serta bahaya zat adiktif bagi sistem saraf.',
    coreConcepts: [
      'Sistem Saraf: Unit terkecilnya adalah sel saraf (neuron) yang terdiri atas dendrit (menerima rangsang), badan sel, dan akson/neurit (meneruskan impuls). Neuron sensorik membawa impuls dari indra ke pusat saraf, neuron motorik dari pusat saraf ke otot. Sistem saraf pusat terdiri atas otak (otak besar untuk berpikir dan mengatur gerak sadar, otak kecil untuk keseimbangan, batang otak untuk detak jantung dan napas) dan sumsum tulang belakang.',
      'Gerak Biasa dan Gerak Refleks: Gerak biasa (sadar) melewati otak: rangsang → saraf sensorik → otak → saraf motorik → otot, misalnya menulis. Gerak refleks berlangsung sangat cepat tanpa diolah otak, melalui sumsum tulang belakang atau batang otak, misalnya menarik tangan saat menyentuh benda panas dan berkedip ketika ada debu.',
      'Sistem Hormon (Endokrin): Kelenjar endokrin mengeluarkan hormon langsung ke darah. Hipofisis menghasilkan hormon pertumbuhan dan mengatur kelenjar lain; tiroid menghasilkan tiroksin (metabolisme); pankreas menghasilkan insulin yang menurunkan kadar gula darah (kekurangan insulin menyebabkan diabetes melitus); kelenjar adrenal menghasilkan adrenalin saat takut atau tegang; testis dan ovarium menghasilkan hormon kelamin.',
      'Homeostasis: Homeostasis adalah kemampuan tubuh menjaga kondisi dalam tetap stabil. Saat kepanasan, tubuh berkeringat dan pembuluh darah kulit melebar agar panas terbuang; saat kedinginan, tubuh menggigil dan pembuluh darah kulit menyempit. Kadar gula darah dijaga insulin (menurunkan) dan glukagon (menaikkan); kadar air dijaga oleh ginjal.',
      'Sistem Reproduksi: Organ reproduksi laki-laki: testis (menghasilkan sperma dan testosteron), saluran sperma, dan penis. Perempuan: ovarium (menghasilkan sel telur, estrogen, dan progesteron), tuba falopi (tempat fertilisasi), dan rahim (tempat janin berkembang). Siklus menstruasi sekitar 28 hari: dinding rahim yang menebal luruh jika tidak terjadi pembuahan. Jaga kesehatan reproduksi dengan kebersihan, menghindari pergaulan bebas, dan memeriksakan diri ke tenaga kesehatan.',
      'Zat Adiktif dan Psikotropika: Zat adiktif menimbulkan ketagihan (nikotin pada rokok, alkohol, kafein berlebihan). Psikotropika dan narkotika memengaruhi kerja otak dan saraf: menekan (depresan), merangsang (stimulan), atau menimbulkan halusinasi. Dampaknya: kerusakan otak, jantung, paru-paru, dan hati, ketergantungan, hingga kematian karena overdosis. Cara menghindari: berani menolak, memilih teman dan kegiatan positif, serta mencari bantuan orang tua, guru, atau konselor.'
    ],
    keyFormulas: [
      { label: 'Jalur gerak biasa', formula: '\\text{rangsang} \\to \\text{sensorik} \\to \\text{otak} \\to \\text{motorik} \\to \\text{otot}' },
      { label: 'Jalur gerak refleks', formula: '\\text{rangsang} \\to \\text{sensorik} \\to \\text{sumsum tulang belakang} \\to \\text{motorik} \\to \\text{otot}' },
      { label: 'Pengatur gula darah', formula: '\\text{insulin} \\downarrow \\text{gula darah} \\qquad \\text{glukagon} \\uparrow \\text{gula darah}' }
    ],
    workedExamples: [
      {
        title: 'Membedakan gerak biasa dan refleks',
        problem: 'Rina menarik tangannya ketika tidak sengaja menyentuh panci panas, lalu ia memutuskan mengambil kain lap. Mana gerak refleks dan mana gerak biasa?',
        solution: 'Menarik tangan dari panci panas terjadi otomatis tanpa berpikir: **gerak refleks** (melalui sumsum tulang belakang). Memutuskan mengambil kain lap melibatkan otak: **gerak biasa**.'
      },
      {
        title: 'Homeostasis saat berolahraga',
        problem: 'Mengapa tubuh berkeringat banyak saat bermain sepak bola di siang hari?',
        solution: 'Otot yang bekerja menghasilkan panas. Agar suhu tubuh tetap sekitar 37 °C, tubuh mengeluarkan keringat; keringat menguap dan membawa panas dari kulit. Ini adalah contoh **homeostasis**.'
      },
      {
        title: 'Menghitung siklus menstruasi',
        problem: 'Siklus menstruasi seorang remaja 28 hari dan hari pertama menstruasinya tanggal 3. Kira-kira kapan menstruasi berikutnya?',
        solution: 'Tanggal 3 + 28 hari ≈ **tanggal 31** bulan yang sama (atau awal bulan berikutnya, tergantung jumlah hari dalam bulan tersebut).'
      }
    ],
    misconceptions: [
      'Menganggap semua gerak dikendalikan otak besar. Gerak refleks tidak diolah otak besar sehingga terjadi lebih cepat.',
      'Menganggap rokok elektrik aman. Rokok elektrik tetap mengandung nikotin yang adiktif dan zat yang merusak paru-paru.',
      'Menganggap fertilisasi terjadi di rahim. Fertilisasi umumnya terjadi di tuba falopi; rahim adalah tempat embrio menempel dan berkembang.'
    ],
    tutorTip: 'Untuk soal saraf, cari kata kunci "tanpa berpikir/spontan/cepat" → refleks; "memutuskan/menulis/menjawab" → gerak biasa.'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Bagian sel saraf yang berfungsi menerima rangsang dan meneruskannya ke badan sel adalah...',
      options: ['akson', 'dendrit', 'sinapsis', 'selubung mielin'],
      answer: 'B',
      hint: 'Bentuknya bercabang-cabang seperti ranting.',
      solution: '**Dendrit** menerima rangsang dan meneruskannya ke badan sel. Akson meneruskan impuls dari badan sel ke sel lain. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Bagian otak yang berperan mengatur keseimbangan tubuh adalah...',
      options: ['otak besar', 'batang otak', 'otak kecil', 'sumsum tulang belakang'],
      answer: 'C',
      hint: 'Letaknya di bagian belakang bawah kepala.',
      solution: '**Otak kecil (serebelum)** mengatur keseimbangan dan koordinasi gerak. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Hormon insulin yang mengatur kadar gula darah dihasilkan oleh...',
      options: ['pankreas', 'tiroid', 'hipofisis', 'adrenal'],
      answer: 'A',
      hint: 'Kekurangan hormon ini menyebabkan diabetes.',
      solution: '**Pankreas** menghasilkan insulin yang menurunkan kadar gula darah. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Tempat terjadinya pembuahan (fertilisasi) sel telur oleh sperma adalah...',
      options: ['ovarium', 'rahim', 'vagina', 'tuba falopi'],
      answer: 'D',
      hint: 'Saluran yang menghubungkan ovarium dan rahim.',
      solution: 'Fertilisasi umumnya terjadi di **tuba falopi** (saluran telur). Embrio kemudian menempel di rahim. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Zat yang terdapat pada rokok dan menyebabkan ketagihan adalah...',
      options: ['vitamin C', 'nikotin', 'protein', 'kalsium'],
      answer: 'B',
      hint: 'Zat ini termasuk zat adiktif.',
      solution: '**Nikotin** adalah zat adiktif dalam rokok yang menimbulkan ketagihan dan membahayakan jantung serta pembuluh darah. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Contoh gerak refleks adalah...',
      options: ['menulis jawaban ujian', 'menendang bola ke gawang', 'mata berkedip saat ada debu', 'membaca buku'],
      answer: 'C',
      hint: 'Gerak refleks terjadi spontan tanpa dipikirkan.',
      solution: '**Berkedip saat ada debu** terjadi spontan tanpa diolah otak besar, jadi termasuk gerak refleks. Pilihan lain adalah gerak sadar. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Saat cuaca sangat dingin, tubuh menggigil. Hal ini merupakan contoh homeostasis yang bertujuan untuk...',
      options: ['menghasilkan panas agar suhu tubuh tetap stabil', 'mengeluarkan keringat', 'menurunkan kadar gula darah', 'menghemat oksigen'],
      answer: 'A',
      hint: 'Gerakan otot menghasilkan panas.',
      solution: 'Menggigil adalah kontraksi otot yang cepat dan **menghasilkan panas** untuk mempertahankan suhu tubuh sekitar 37 °C. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Jalur impuls pada gerak refleks menarik tangan dari benda panas adalah...',
      options: [
        'reseptor → saraf sensorik → otak → saraf motorik → otot',
        'reseptor → saraf motorik → otak → saraf sensorik → otot',
        'reseptor → otak → sumsum tulang belakang → otot',
        'reseptor → saraf sensorik → sumsum tulang belakang → saraf motorik → otot'
      ],
      answer: 'D',
      hint: 'Pada refleks, impuls tidak melewati otak.',
      solution: 'Refleks melalui jalur pendek: **reseptor → saraf sensorik → sumsum tulang belakang → saraf motorik → otot**, tanpa melewati otak sehingga lebih cepat. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Seseorang yang sedang ketakutan merasakan jantungnya berdebar kencang. Hormon yang berperan adalah...',
      options: ['insulin', 'tiroksin', 'adrenalin', 'estrogen'],
      answer: 'C',
      hint: 'Hormon "lawan atau lari".',
      solution: '**Adrenalin** dari kelenjar adrenal dilepaskan saat takut atau tegang, mempercepat detak jantung dan napas. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Organ pada laki-laki yang menghasilkan sperma dan hormon testosteron adalah...',
      options: ['testis', 'prostat', 'ovarium', 'penis'],
      answer: 'A',
      hint: 'Pasangan organ ini pada perempuan adalah ovarium.',
      solution: '**Testis** menghasilkan sperma dan hormon testosteron. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Seorang pasien memiliki kadar gula darah yang selalu tinggi dan sering merasa haus serta sering buang air kecil. Gangguan dan penyebab yang paling mungkin adalah...',
      options: [
        'diabetes melitus karena kekurangan insulin',
        'gondok karena kekurangan tiroksin',
        'anemia karena kekurangan zat besi',
        'kerdil karena kekurangan hormon pertumbuhan'
      ],
      answer: 'A',
      hint: 'Hormon apa yang menurunkan kadar gula darah?',
      solution: 'Insulin menurunkan kadar gula darah. Jika insulin kurang atau tidak bekerja baik, gula menumpuk di darah: **diabetes melitus**. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebelum ujian, Doni sulit tidur dan sering minum kopi berlebihan agar tetap terjaga. Akibatnya ia mudah gelisah dan jantung berdebar. Kesimpulan yang tepat adalah...',
      options: [
        'kafein adalah vitamin yang baik dikonsumsi sebanyak-banyaknya',
        'kafein tidak berpengaruh pada sistem saraf',
        'kafein bersifat stimulan dan dapat menimbulkan ketergantungan bila berlebihan',
        'kopi termasuk narkotika golongan I'
      ],
      answer: 'C',
      hint: 'Kafein merangsang sistem saraf.',
      solution: 'Kafein adalah zat adiktif ringan yang bersifat **stimulan** (merangsang saraf). Konsumsi berlebihan menyebabkan gelisah, jantung berdebar, sulit tidur, dan **ketergantungan**. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Seseorang mengalami kecelakaan yang merusak otak kecilnya. Gangguan yang paling mungkin dialaminya adalah...',
      options: [
        'tidak dapat mengingat pelajaran',
        'sulit menjaga keseimbangan saat berjalan',
        'jantung berhenti berdetak',
        'tidak dapat melihat'
      ],
      answer: 'B',
      hint: 'Ingat fungsi otak kecil.',
      solution: 'Otak kecil mengatur **keseimbangan dan koordinasi gerak**, sehingga kerusakannya membuat penderita sulit berjalan seimbang. Ingatan diatur otak besar, detak jantung oleh batang otak. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Seorang teman menawarimu "obat penambah semangat" tanpa merek dan mengatakan bahwa semua anak keren memakainya. Sikap yang paling tepat adalah...',
      options: [
        'mencobanya sekali saja agar diterima teman',
        'membelinya untuk dicoba di rumah',
        'menyimpannya untuk diberikan kepada orang lain',
        'menolak dengan tegas, menjauhi tawaran itu, dan melaporkannya kepada guru atau orang tua'
      ],
      answer: 'D',
      hint: 'Obat tanpa merek dan resep bisa berupa psikotropika atau narkotika.',
      solution: 'Obat tanpa merek dan resep dapat berupa psikotropika/narkotika yang merusak saraf dan menimbulkan ketergantungan bahkan dari pemakaian pertama. Sikap yang tepat: **menolak dengan tegas dan melapor** kepada orang dewasa yang dipercaya. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Setelah makan siang, kadar gula darah seseorang naik. Beberapa jam kemudian kadarnya kembali normal. Mekanisme yang terjadi adalah...',
      options: [
        'pankreas melepaskan insulin sehingga gula diubah dan disimpan, kadar gula darah turun',
        'pankreas melepaskan glukagon sehingga kadar gula darah naik',
        'ginjal membuang semua gula melalui urine',
        'otot berhenti menggunakan gula'
      ],
      answer: 'A',
      hint: 'Hormon apa yang menurunkan gula darah?',
      solution: 'Saat gula darah tinggi, pankreas melepaskan **insulin** yang membantu sel menyerap gula dan hati menyimpannya sebagai glikogen, sehingga **kadar gula darah turun** kembali normal (homeostasis). Jawaban: **A**.'
    })
  ]
});
