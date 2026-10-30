import { bab, soal } from '../author.js';

export default bab({
  grade: 8,
  number: 5,
  slug: 'unsur-senyawa-campuran',
  title: 'Unsur, Senyawa, dan Campuran',
  element: 'Zat dan sifatnya: klasifikasi materi (unsur, senyawa, campuran)',
  summary: {
    overview: 'Air, garam, udara, dan sirup adalah materi yang tersusun dengan cara berbeda. Bab ini membahas pengelompokan materi menjadi unsur, senyawa, dan campuran: unsur logam–nonlogam–metaloid, atom dan tabel periodik, molekul dan rumus kimia, jenis-jenis campuran, serta teknik pemisahan campuran. Asam dan basa dibahas di IPA Kelas 9 Bab 5.',
    coreConcepts: [
      'Unsur: Unsur adalah zat tunggal yang tidak dapat diuraikan lagi menjadi zat lain dengan reaksi kimia biasa. Unsur dikelompokkan menjadi logam (mengilap, menghantarkan listrik dan panas, contoh besi Fe, tembaga Cu, emas Au), nonlogam (contoh oksigen O, karbon C, belerang S), dan metaloid (sifat di antara keduanya, contoh silikon Si). Lambang unsur ditulis dengan satu huruf kapital atau huruf kapital diikuti huruf kecil, misalnya Na (natrium) dan Cl (klorin).',
      'Atom dan Tabel Periodik: Unsur tersusun atas partikel sangat kecil yang disebut atom. Atom terdiri atas inti atom (berisi proton yang bermuatan positif dan neutron yang tidak bermuatan) yang dikelilingi elektron bermuatan negatif. Jumlah proton (nomor atom) menentukan jenis unsur. Unsur disusun dalam tabel periodik berdasarkan kenaikan nomor atom: baris mendatar disebut periode dan kolom tegak disebut golongan; unsur dalam satu golongan memiliki sifat kimia yang mirip. Logam berada di bagian kiri dan tengah, nonlogam di kanan atas, dan metaloid di perbatasannya.',
      'Senyawa dan Rumus Kimia: Senyawa terbentuk dari dua unsur atau lebih yang bergabung secara kimia dengan perbandingan tetap, dan sifatnya berbeda dari unsur penyusunnya. Contoh: air (H₂O) tersusun atas 2 atom hidrogen dan 1 atom oksigen; garam dapur (NaCl) dari natrium dan klorin; karbon dioksida (CO₂). Senyawa hanya dapat diuraikan dengan reaksi kimia.',
      'Molekul Unsur dan Molekul Senyawa: Molekul adalah gabungan dua atom atau lebih yang terikat secara kimia. Molekul unsur tersusun atas atom-atom sejenis, misalnya O₂ (oksigen) dan N₂ (nitrogen). Molekul senyawa tersusun atas atom-atom yang berbeda jenis, misalnya H₂O dan CO₂. Unsur penting dalam tubuh antara lain kalsium (tulang dan gigi), besi (hemoglobin darah), dan iodin (hormon tiroid).',
      'Campuran: Campuran terbentuk dari dua zat atau lebih yang bercampur tanpa reaksi kimia, perbandingannya tidak tetap, dan sifat zat penyusunnya masih tampak. Campuran homogen (larutan) tampak seragam, contoh air gula dan udara. Campuran heterogen tidak seragam, contoh air kopi tubruk, pasir dan air. Koloid adalah campuran di antara keduanya, contoh susu dan santan; suspensi mudah mengendap, contoh air sungai keruh.',
      'Pemisahan Campuran: Filtrasi (penyaringan) memisahkan padatan tak larut dari cairan berdasarkan ukuran partikel. Evaporasi (penguapan) mengambil zat terlarut padat, contoh garam dari air laut. Distilasi (penyulingan) memisahkan cairan berdasarkan perbedaan titik didih, contoh minyak atsiri dan air murni. Kromatografi memisahkan berdasarkan perbedaan kecepatan merambat, contoh komponen warna tinta. Sublimasi untuk zat yang dapat menyublim (kapur barus). Dekantasi menuangkan cairan di atas endapan, sentrifugasi memakai putaran cepat.'
    ],
    keyFormulas: [
      { label: 'Contoh rumus kimia', formula: '\\text{H}_2\\text{O},\\ \\text{NaCl},\\ \\text{CO}_2,\\ \\text{C}_6\\text{H}_{12}\\text{O}_6' },
      { label: 'Partikel penyusun atom', formula: '\\text{proton}\\,(+) \\quad \\text{neutron}\\,(0) \\quad \\text{elektron}\\,(-)' },
      { label: 'Molekul unsur & senyawa', formula: '\\text{O}_2,\\ \\text{N}_2\\ (\\text{unsur}) \\qquad \\text{H}_2\\text{O},\\ \\text{CO}_2\\ (\\text{senyawa})' }
    ],
    workedExamples: [
      {
        title: 'Menghitung atom dalam rumus kimia',
        problem: 'Berapa jumlah atom setiap unsur dalam satu molekul glukosa, C₆H₁₂O₆?',
        solution: 'Karbon (C) = 6 atom, hidrogen (H) = 12 atom, oksigen (O) = 6 atom. Total = **24 atom**.'
      },
      {
        title: 'Memilih cara pemisahan',
        problem: 'Bagaimana memperoleh garam dari air laut dan air murni dari air sumur yang keruh?',
        solution: 'Garam dari air laut: **evaporasi** (air diuapkan, garam tertinggal). Air murni dari air keruh: saring dulu (**filtrasi**), lalu **distilasi** untuk memisahkan air dari zat terlarut.'
      },
      {
        title: 'Membaca tabel periodik',
        problem: 'Natrium (Na) dan kalium (K) berada dalam golongan yang sama pada tabel periodik. Apa yang dapat disimpulkan tentang sifat keduanya?',
        solution: 'Unsur dalam satu golongan memiliki **sifat kimia yang mirip**. Natrium dan kalium sama-sama logam yang lunak dan sangat reaktif, misalnya bereaksi hebat dengan air.'
      }
    ],
    misconceptions: [
      'Menganggap air adalah unsur karena sangat umum. Air adalah senyawa (H₂O) yang dapat diuraikan menjadi hidrogen dan oksigen dengan elektrolisis.',
      'Menganggap udara adalah senyawa. Udara adalah campuran homogen berbagai gas (nitrogen, oksigen, argon, karbon dioksida) dengan perbandingan tidak tetap.',
      'Menganggap molekul selalu berupa senyawa. Gas oksigen (O₂) adalah molekul, tetapi tetap unsur karena atom penyusunnya sejenis.'
    ],
    tutorTip: 'Tanyakan dua hal: "Berapa jenis atomnya?" dan "Terikat secara kimia atau hanya dicampur?". Satu jenis atom = unsur; beberapa jenis atom terikat kimia = senyawa; dicampur tanpa reaksi = campuran.'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Kelompok berikut yang semuanya termasuk unsur adalah...',
      options: ['air, garam, gula', 'besi, emas, oksigen', 'udara, tanah, air laut', 'cuka, sirup, susu'],
      answer: 'B',
      hint: 'Unsur memiliki lambang tunggal dalam tabel periodik.',
      solution: '**Besi (Fe), emas (Au), dan oksigen (O)** adalah unsur. Air, garam, dan gula adalah senyawa; udara, air laut, sirup, dan susu adalah campuran. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Lambang unsur natrium adalah...',
      options: ['N', 'Ni', 'Na', 'Nt'],
      answer: 'C',
      hint: 'Lambangnya berasal dari bahasa Latin natrium.',
      solution: 'Lambang natrium adalah **Na**. N adalah nitrogen, Ni nikel. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Larutan gula dalam air termasuk...',
      options: ['campuran homogen', 'unsur', 'senyawa', 'campuran heterogen'],
      answer: 'A',
      hint: 'Gula larut sempurna dan tidak terlihat lagi.',
      solution: 'Gula larut merata dalam air sehingga tampak seragam. Larutan adalah **campuran homogen**, dan gula dapat dipisahkan kembali dengan penguapan. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Partikel penyusun atom yang bermuatan listrik negatif adalah...',
      options: ['proton', 'neutron', 'inti atom', 'elektron'],
      answer: 'D',
      hint: 'Partikel ini bergerak mengelilingi inti atom.',
      solution: '**Elektron** bermuatan negatif dan mengelilingi inti atom. Proton bermuatan positif, neutron tidak bermuatan, dan keduanya berada di inti atom. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Metode pemisahan yang tepat untuk memisahkan pasir dari air adalah...',
      options: ['distilasi', 'penyaringan (filtrasi)', 'kromatografi', 'sublimasi'],
      answer: 'B',
      hint: 'Pasir tidak larut dan partikelnya besar.',
      solution: 'Pasir tidak larut dalam air dan ukurannya besar, sehingga dapat ditahan kertas saring. Metodenya **filtrasi**. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Rumus kimia asam sulfat adalah H₂SO₄. Jumlah atom dalam satu molekul asam sulfat adalah...',
      options: ['3', '4', '6', '7'],
      answer: 'D',
      hint: 'Jumlahkan angka indeks; tanpa angka berarti 1.',
      solution: 'H₂SO₄: H = 2, S = 1, O = 4. Jumlah = 2 + 1 + 4 = **7 atom**. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Air laut diuapkan di tambak garam sehingga tertinggal kristal garam. Metode pemisahan ini disebut...',
      options: ['evaporasi', 'distilasi', 'filtrasi', 'dekantasi'],
      answer: 'A',
      hint: 'Cairannya diuapkan dan dibiarkan hilang.',
      solution: 'Air diuapkan oleh panas matahari dan garam tertinggal. Ini adalah **evaporasi (penguapan)**. Pada distilasi, uapnya diembunkan dan ditampung kembali. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Ciri yang membedakan senyawa dari campuran adalah...',
      options: [
        'senyawa dapat dipisahkan dengan penyaringan',
        'senyawa tersusun atas zat-zat dengan perbandingan tetap dan sifatnya berbeda dari unsur penyusunnya',
        'senyawa selalu berwujud cair',
        'sifat zat penyusun senyawa masih tampak'
      ],
      answer: 'B',
      hint: 'Bandingkan air (senyawa) dengan air gula (campuran).',
      solution: 'Senyawa memiliki **perbandingan tetap** (air selalu H₂O) dan **sifatnya berbeda dari unsur penyusunnya** (hidrogen dan oksigen adalah gas, air cair). Pada campuran, sifat penyusun masih tampak. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Untuk mengetahui komponen warna penyusun tinta hitam spidol, metode yang paling tepat adalah...',
      options: ['sublimasi', 'evaporasi', 'kromatografi', 'sentrifugasi'],
      answer: 'C',
      hint: 'Tiap warna merambat dengan kecepatan berbeda pada kertas.',
      solution: '**Kromatografi** memisahkan zat warna berdasarkan perbedaan kecepatan merambat pada kertas atau media penyerap. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Pada tabel periodik, unsur-unsur yang terletak dalam satu kolom tegak (golongan) memiliki...',
      options: ['nomor atom yang sama', 'sifat kimia yang mirip', 'massa yang sama', 'wujud yang selalu gas'],
      answer: 'B',
      hint: 'Kolom tegak disebut golongan, baris mendatar disebut periode.',
      solution: 'Unsur dalam satu **golongan** memiliki **sifat kimia yang mirip**, misalnya natrium dan kalium yang sama-sama logam reaktif. Nomor atomnya berbeda dan bertambah dari atas ke bawah. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Minyak kayu putih diperoleh dari daun kayu putih yang direbus; uapnya didinginkan lalu ditampung. Metode ini dipilih karena...',
      options: [
        'minyak dan air memiliki ukuran partikel yang berbeda',
        'minyak dapat menyublim',
        'komponen penyusunnya memiliki titik didih yang berbeda sehingga dapat dipisahkan dengan distilasi',
        'minyak lebih berat daripada air'
      ],
      answer: 'C',
      hint: 'Uap didinginkan lalu ditampung kembali.',
      solution: 'Proses menguapkan lalu mengembunkan kembali adalah **distilasi (penyulingan)**, yang memisahkan zat berdasarkan **perbedaan titik didih**. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Seorang siswa menguji tiga zat. Zat X mengilap dan menghantarkan listrik dengan baik. Zat Y kusam, rapuh, dan tidak menghantarkan listrik. Zat Z agak mengilap, rapuh, dan sedikit menghantarkan listrik. Pengelompokan yang paling tepat adalah...',
      options: [
        'X logam, Y nonlogam, Z metaloid',
        'X nonlogam, Y logam, Z metaloid',
        'X metaloid, Y logam, Z nonlogam',
        'X logam, Y metaloid, Z nonlogam'
      ],
      answer: 'A',
      hint: 'Metaloid memiliki sifat di antara logam dan nonlogam.',
      solution: 'X mengilap dan konduktor baik → **logam**. Y kusam, rapuh, isolator → **nonlogam**. Z memiliki sifat campuran (agak mengilap tetapi rapuh, semikonduktor) → **metaloid**, seperti silikon. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Seorang siswa mencampur serbuk besi, garam, dan pasir. Urutan pemisahan yang paling tepat adalah...',
      options: [
        'menyaring, lalu menarik besi dengan magnet, lalu menguapkan air',
        'menarik besi dengan magnet, melarutkan sisanya dalam air dan menyaring pasir, lalu menguapkan filtrat untuk mendapat garam',
        'menguapkan campuran, lalu menyaring',
        'mendistilasi campuran, lalu menyaring'
      ],
      answer: 'B',
      hint: 'Manfaatkan sifat khas: besi tertarik magnet, garam larut, pasir tidak larut.',
      solution: 'Besi diambil dengan **magnet**. Garam dan pasir dicampur air: garam larut, pasir **disaring**. Filtrat (air garam) **diuapkan** untuk mendapat garam. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Gas oksigen (O₂) dan gas karbon dioksida (CO₂) sama-sama tersusun atas molekul. Pernyataan yang benar adalah...',
      options: [
        'keduanya molekul senyawa',
        'keduanya molekul unsur',
        'O₂ molekul senyawa, sedangkan CO₂ molekul unsur',
        'O₂ molekul unsur karena atomnya sejenis, sedangkan CO₂ molekul senyawa karena atomnya berbeda jenis'
      ],
      answer: 'D',
      hint: 'Perhatikan jenis atom penyusun setiap molekul.',
      solution: 'O₂ tersusun atas dua atom oksigen (sejenis), sehingga merupakan **molekul unsur**. CO₂ tersusun atas atom karbon dan oksigen (berbeda jenis), sehingga merupakan **molekul senyawa**. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Hidrogen adalah gas yang mudah terbakar dan oksigen adalah gas yang membantu pembakaran. Keduanya bergabung membentuk air yang justru dapat memadamkan api. Fakta ini menunjukkan bahwa...',
      options: [
        'air adalah campuran hidrogen dan oksigen',
        'air adalah unsur baru',
        'sifat senyawa berbeda dari sifat unsur-unsur penyusunnya',
        'hidrogen dan oksigen tidak bereaksi'
      ],
      answer: 'C',
      hint: 'Bandingkan sifat penyusun dengan sifat zat yang terbentuk.',
      solution: 'Air (H₂O) adalah **senyawa**. Sifatnya (cair, memadamkan api) sangat berbeda dari hidrogen dan oksigen. Inilah ciri senyawa: **sifatnya berbeda dari unsur penyusunnya**. Jawaban: **C**.'
    })
  ]
});
