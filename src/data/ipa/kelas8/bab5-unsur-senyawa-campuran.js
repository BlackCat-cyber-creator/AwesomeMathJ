import { bab, soal } from '../author.js';

export default bab({
  grade: 8,
  number: 5,
  slug: 'unsur-senyawa-campuran',
  title: 'Unsur, Senyawa, dan Campuran',
  element: 'Zat dan sifatnya: klasifikasi materi',
  summary: {
    overview: 'Air, garam, udara, dan sirup adalah materi yang tersusun dengan cara berbeda. Bab ini membahas pengelompokan materi menjadi unsur, senyawa, dan campuran, cara membaca rumus kimia, jenis-jenis campuran, teknik pemisahan campuran, serta sifat asam, basa, dan garam beserta indikatornya.',
    coreConcepts: [
      'Unsur: Unsur adalah zat tunggal yang tidak dapat diuraikan lagi menjadi zat lain dengan reaksi kimia biasa. Unsur dikelompokkan menjadi logam (mengilap, menghantarkan listrik dan panas, contoh besi Fe, tembaga Cu, emas Au), nonlogam (contoh oksigen O, karbon C, belerang S), dan metaloid (sifat di antara keduanya, contoh silikon Si). Lambang unsur ditulis dengan satu huruf kapital atau huruf kapital diikuti huruf kecil, misalnya Na (natrium) dan Cl (klorin).',
      'Senyawa dan Rumus Kimia: Senyawa terbentuk dari dua unsur atau lebih yang bergabung secara kimia dengan perbandingan tetap, dan sifatnya berbeda dari unsur penyusunnya. Contoh: air (H₂O) tersusun atas 2 atom hidrogen dan 1 atom oksigen; garam dapur (NaCl) dari natrium dan klorin; karbon dioksida (CO₂). Senyawa hanya dapat diuraikan dengan reaksi kimia.',
      'Campuran: Campuran terbentuk dari dua zat atau lebih yang bercampur tanpa reaksi kimia, perbandingannya tidak tetap, dan sifat zat penyusunnya masih tampak. Campuran homogen (larutan) tampak seragam, contoh air gula dan udara. Campuran heterogen tidak seragam, contoh air kopi tubruk, pasir dan air. Koloid adalah campuran di antara keduanya, contoh susu dan santan; suspensi mudah mengendap, contoh air sungai keruh.',
      'Pemisahan Campuran: Filtrasi (penyaringan) memisahkan padatan tak larut dari cairan berdasarkan ukuran partikel. Evaporasi (penguapan) mengambil zat terlarut padat, contoh garam dari air laut. Distilasi (penyulingan) memisahkan cairan berdasarkan perbedaan titik didih, contoh minyak atsiri dan air murni. Kromatografi memisahkan berdasarkan perbedaan kecepatan merambat, contoh komponen warna tinta. Sublimasi untuk zat yang dapat menyublim (kapur barus). Dekantasi menuangkan cairan di atas endapan, sentrifugasi memakai putaran cepat.',
      'Asam, Basa, dan Garam: Asam berasa masam, pH < 7, memerahkan kertas lakmus biru (contoh cuka, jeruk, asam lambung). Basa berasa pahit, licin, pH > 7, membirukan kertas lakmus merah (contoh sabun, pasta gigi, air kapur). Garam terbentuk dari reaksi asam dan basa (netralisasi), pH = 7 untuk garam netral seperti NaCl. Contoh penerapan: obat maag (basa) menetralkan asam lambung.',
      'Indikator Asam-Basa: Kertas lakmus merah dan biru, larutan fenolftalein (tidak berwarna dalam asam, merah muda dalam basa), indikator universal yang menunjukkan nilai pH, serta indikator alami seperti kunyit (kuning dalam asam, merah kecokelatan dalam basa), kubis ungu, dan bunga sepatu.'
    ],
    keyFormulas: [
      { label: 'Contoh rumus kimia', formula: '\\text{H}_2\\text{O},\\ \\text{NaCl},\\ \\text{CO}_2,\\ \\text{C}_6\\text{H}_{12}\\text{O}_6' },
      { label: 'Netralisasi', formula: '\\text{asam} + \\text{basa} \\to \\text{garam} + \\text{air}' },
      { label: 'Skala pH', formula: '\\text{asam: pH} < 7 \\quad \\text{netral: pH} = 7 \\quad \\text{basa: pH} > 7' }
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
        title: 'Menebak sifat larutan',
        problem: 'Larutan X membirukan lakmus merah dan membuat fenolftalein merah muda. Apa sifat larutan X dan perkiraan pH-nya?',
        solution: 'Kedua indikator menunjukkan **basa**, sehingga pH larutan X lebih dari 7.'
      }
    ],
    misconceptions: [
      'Menganggap air adalah unsur karena sangat umum. Air adalah senyawa (H₂O) yang dapat diuraikan menjadi hidrogen dan oksigen dengan elektrolisis.',
      'Menganggap udara adalah senyawa. Udara adalah campuran homogen berbagai gas (nitrogen, oksigen, argon, karbon dioksida) dengan perbandingan tidak tetap.',
      'Menganggap semua garam berasa asin dan netral. Garam adalah hasil reaksi asam dan basa; tidak semua garam bersifat netral.'
    ],
    tutorTip: 'Untuk lakmus, ingat "BiMA": Biru → Merah oleh Asam. Kebalikannya, merah → biru oleh basa.'
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
      q: 'Zat berikut yang akan mengubah kertas lakmus biru menjadi merah adalah...',
      options: ['air sabun', 'larutan kapur', 'pasta gigi', 'air jeruk nipis'],
      answer: 'D',
      hint: 'Lakmus biru memerah dalam larutan asam.',
      solution: '**Air jeruk nipis** bersifat asam sehingga memerahkan lakmus biru. Sabun, kapur, dan pasta gigi bersifat basa. Jawaban: **D**.'
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
      q: 'Obat maag diminum untuk mengurangi rasa perih di lambung. Obat maag bekerja dengan cara...',
      options: [
        'menambah asam lambung',
        'menetralkan asam lambung karena bersifat basa',
        'mengubah asam lambung menjadi gula',
        'membunuh bakteri di lambung'
      ],
      answer: 'B',
      hint: 'Asam dapat dinetralkan oleh basa.',
      solution: 'Asam lambung berlebih menimbulkan perih. Obat maag mengandung **basa** (misalnya magnesium hidroksida) yang **menetralkan asam** melalui reaksi netralisasi. Jawaban: **B**.'
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
      q: 'Larutan P memerahkan lakmus biru, larutan Q membirukan lakmus merah, dan larutan R tidak mengubah warna kedua lakmus. Urutan pH dari yang paling kecil adalah...',
      options: ['P, R, Q', 'Q, R, P', 'R, P, Q', 'P, Q, R'],
      answer: 'A',
      hint: 'Asam memiliki pH paling kecil.',
      solution: 'P asam (pH < 7), R netral (pH = 7), Q basa (pH > 7). Urutan dari pH terkecil: **P, R, Q**. Jawaban: **A**.'
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
      q: 'Kunyit berwarna kuning dalam larutan asam dan merah kecokelatan dalam larutan basa. Jika parutan kunyit diteteskan ke air sabun, warna yang terbentuk adalah...',
      options: ['kuning terang', 'tidak berwarna', 'biru', 'merah kecokelatan'],
      answer: 'D',
      hint: 'Tentukan dulu sifat air sabun.',
      solution: 'Air sabun bersifat **basa**, sehingga kunyit berubah menjadi **merah kecokelatan**. Jawaban: **D**.'
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
