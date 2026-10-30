import { bab, soal } from '../author.js';

export default bab({
  grade: 8,
  number: 1,
  slug: 'sel',
  title: 'Pengenalan Sel',
  element: 'Makhluk hidup dan lingkungannya: sistem organisasi kehidupan',
  summary: {
    overview: 'Semua makhluk hidup tersusun atas sel, satuan terkecil yang dapat menjalankan proses kehidupan. Bab ini membahas penggunaan mikroskop, bagian-bagian sel dan fungsinya, perbedaan sel hewan dan sel tumbuhan, spesialisasi sel, transpor zat melalui membran, serta tingkatan organisasi kehidupan dari sel sampai organisme.',
    coreConcepts: [
      'Sel dan Mikroskop: Robert Hooke (1665) pertama kali melihat "sel" pada gabus menggunakan mikroskop. Teori sel menyatakan bahwa semua makhluk hidup tersusun atas sel dan sel berasal dari sel sebelumnya. Perbesaran mikroskop = perbesaran lensa okuler × perbesaran lensa objektif. Fokus diatur dengan makrometer (kasar) dan mikrometer (halus), cahaya diatur dengan cermin dan diafragma.',
      'Bagian Utama Sel: Membran sel mengatur keluar-masuknya zat (selektif permeabel). Sitoplasma adalah cairan sel tempat organel berada dan tempat banyak reaksi kimia berlangsung. Inti sel (nukleus) berisi materi genetik (DNA) dan mengendalikan seluruh kegiatan sel.',
      'Organel dan Fungsinya: Mitokondria tempat respirasi sel yang menghasilkan energi. Ribosom tempat sintesis protein. Retikulum endoplasma mengangkut zat di dalam sel. Badan Golgi mengemas dan mengirim zat. Lisosom mencerna zat dan bagian sel yang rusak. Vakuola menyimpan cadangan makanan, air, dan zat sisa. Kloroplas (hanya pada sel tumbuhan) tempat fotosintesis karena mengandung klorofil.',
      'Sel Hewan dan Sel Tumbuhan: Sel tumbuhan memiliki dinding sel dari selulosa (bentuk tetap, umumnya kotak), kloroplas, dan vakuola besar. Sel hewan tidak memiliki dinding sel dan kloroplas, bentuknya tidak tetap, vakuolanya kecil atau tidak ada, serta memiliki sentriol untuk pembelahan sel.',
      'Sel Prokariotik dan Eukariotik: Sel prokariotik tidak memiliki membran inti sehingga materi genetiknya tersebar di sitoplasma, contohnya bakteri. Sel eukariotik memiliki inti sel yang dibungkus membran, contohnya sel hewan, tumbuhan, dan jamur.',
      'Spesialisasi Sel: Pada makhluk hidup bersel banyak, sel memiliki bentuk khusus sesuai fungsinya. Sel saraf panjang dan bercabang untuk menghantarkan rangsang; sel darah merah berbentuk cakram cekung tanpa inti agar dapat mengangkut banyak oksigen; sel otot dapat memendek untuk bergerak; sel sperma berekor agar dapat berenang; sel rambut akar memiliki tonjolan panjang untuk memperluas permukaan penyerapan air.',
      'Transpor Zat dan Organisasi Kehidupan: Difusi adalah perpindahan zat dari konsentrasi tinggi ke rendah (contoh pertukaran oksigen di paru-paru). Osmosis adalah perpindahan air melalui membran selektif permeabel dari larutan encer ke larutan pekat (contoh kentang dalam air garam menjadi lembek). Tingkatan organisasi kehidupan: sel → jaringan → organ → sistem organ → organisme.'
    ],
    keyFormulas: [
      { label: 'Perbesaran mikroskop', formula: 'M = M_{\\text{okuler}} \\times M_{\\text{objektif}}' },
      { label: 'Organisasi kehidupan', formula: '\\text{sel} \\to \\text{jaringan} \\to \\text{organ} \\to \\text{sistem organ} \\to \\text{organisme}' },
      { label: 'Arah osmosis', formula: '\\text{air: larutan encer} \\to \\text{larutan pekat}' }
    ],
    workedExamples: [
      {
        title: 'Menghitung perbesaran mikroskop',
        problem: 'Lensa okuler bertuliskan 10× dan lensa objektif 40×. Berapa perbesaran bayangan yang terlihat?',
        solution: 'Perbesaran = 10 × 40 = **400 kali**.'
      },
      {
        title: 'Mengenali sel tumbuhan',
        problem: 'Pada pengamatan sel daun Rhoeo discolor terlihat sel berbentuk kotak dengan butir-butir hijau. Bagian apa yang membuat bentuknya tetap dan butir hijau itu apa?',
        solution: 'Bentuk tetap disebabkan **dinding sel**. Butir hijau adalah **kloroplas** yang berisi klorofil untuk fotosintesis.'
      },
      {
        title: 'Menjelaskan osmosis',
        problem: 'Potongan kentang direndam dalam larutan garam pekat selama 30 menit. Apa yang terjadi?',
        solution: 'Larutan garam lebih pekat daripada cairan sel kentang, sehingga air keluar dari sel kentang ke larutan (osmosis). Kentang menjadi **lembek dan mengecil**.'
      }
    ],
    misconceptions: [
      'Menganggap sel hewan memiliki dinding sel. Sel hewan hanya dibatasi membran sel, sehingga bentuknya dapat berubah.',
      'Menganggap inti sel ada di semua sel. Bakteri (prokariotik) tidak memiliki inti sel yang bermembran.',
      'Menganggap osmosis sama dengan difusi biasa. Osmosis khusus untuk perpindahan air melalui membran selektif permeabel.'
    ],
    tutorTip: 'Untuk membedakan sel tumbuhan dan hewan, cukup ingat tiga ciri khas tumbuhan: dinding sel, kloroplas, dan vakuola besar ("DKV").'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Ilmuwan yang pertama kali mengamati sel gabus menggunakan mikroskop adalah...',
      options: ['Robert Hooke', 'Charles Darwin', 'Gregor Mendel', 'Isaac Newton'],
      answer: 'A',
      hint: 'Ia menamai ruang-ruang kecil pada gabus dengan istilah "cell".',
      solution: '**Robert Hooke** (1665) mengamati irisan gabus dan melihat ruang-ruang kecil yang ia sebut *cell*. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Organel sel yang berfungsi sebagai tempat respirasi sel untuk menghasilkan energi adalah...',
      options: ['ribosom', 'mitokondria', 'lisosom', 'vakuola'],
      answer: 'B',
      hint: 'Organel ini sering disebut "pembangkit tenaga" sel.',
      solution: '**Mitokondria** adalah tempat respirasi sel yang menghasilkan energi. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Bagian sel yang hanya dimiliki sel tumbuhan dan tidak dimiliki sel hewan adalah...',
      options: ['membran sel dan inti sel', 'mitokondria dan ribosom', 'sitoplasma dan lisosom', 'dinding sel dan kloroplas'],
      answer: 'D',
      hint: 'Pikirkan bagian yang membuat tumbuhan berbentuk kaku dan berwarna hijau.',
      solution: '**Dinding sel** (membuat bentuk tetap) dan **kloroplas** (tempat fotosintesis) khas sel tumbuhan. Bagian lain dimiliki keduanya. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Bagian sel yang mengendalikan seluruh kegiatan sel dan berisi materi genetik adalah...',
      options: ['membran sel', 'sitoplasma', 'inti sel', 'vakuola'],
      answer: 'C',
      hint: 'Bagian ini menyimpan DNA.',
      solution: '**Inti sel (nukleus)** berisi DNA dan mengendalikan kegiatan sel. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Urutan tingkatan organisasi kehidupan dari yang paling sederhana adalah...',
      options: [
        'sel → jaringan → organ → sistem organ → organisme',
        'jaringan → sel → organ → organisme → sistem organ',
        'sel → organ → jaringan → sistem organ → organisme',
        'organisme → sistem organ → organ → jaringan → sel'
      ],
      answer: 'A',
      hint: 'Kumpulan sel sejenis membentuk jaringan.',
      solution: 'Sel-sel sejenis membentuk **jaringan**, jaringan membentuk **organ**, organ bekerja sama dalam **sistem organ**, dan sistem organ menyusun **organisme**. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Seorang siswa mengamati preparat dengan lensa okuler 15× dan lensa objektif 40×. Perbesaran bayangan yang dilihat adalah...',
      options: ['55 kali', '25 kali', '600 kali', '400 kali'],
      answer: 'C',
      hint: 'Perbesaran total = okuler × objektif.',
      solution: 'Perbesaran = 15 × 40 = **600 kali**. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Bakteri digolongkan sebagai sel prokariotik karena...',
      options: [
        'tidak memiliki membran inti sel',
        'tidak memiliki membran sel',
        'memiliki kloroplas',
        'berukuran sangat besar'
      ],
      answer: 'A',
      hint: '"Pro-karyon" berarti sebelum inti.',
      solution: 'Sel prokariotik **tidak memiliki membran inti**, sehingga materi genetiknya tersebar di sitoplasma. Bakteri tetap memiliki membran sel. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sel otot jantung membutuhkan energi sangat banyak karena terus berkontraksi. Organel yang diperkirakan paling banyak terdapat pada sel otot jantung adalah...',
      options: ['kloroplas', 'vakuola', 'dinding sel', 'mitokondria'],
      answer: 'D',
      hint: 'Organel mana yang menghasilkan energi?',
      solution: 'Sel yang aktif membutuhkan banyak energi, sehingga memiliki banyak **mitokondria** sebagai tempat respirasi sel. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Saat menyemprotkan parfum di sudut ruangan, beberapa saat kemudian baunya tercium di seluruh ruangan. Peristiwa ini adalah contoh...',
      options: ['osmosis', 'difusi', 'transpor aktif', 'fotosintesis'],
      answer: 'B',
      hint: 'Zat berpindah dari tempat yang konsentrasinya tinggi ke rendah.',
      solution: 'Partikel parfum menyebar dari daerah berkonsentrasi tinggi (dekat semprotan) ke daerah berkonsentrasi rendah. Ini adalah **difusi**. Osmosis khusus perpindahan air melalui membran. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Jantung tersusun atas jaringan otot, jaringan saraf, dan jaringan ikat. Dalam tingkatan organisasi kehidupan, jantung termasuk...',
      options: ['sel', 'jaringan', 'organ', 'sistem organ'],
      answer: 'C',
      hint: 'Gabungan beberapa jenis jaringan yang menjalankan satu fungsi.',
      solution: 'Jantung tersusun atas beberapa jenis jaringan yang bekerja sama memompa darah, sehingga termasuk **organ**. Jantung bersama pembuluh darah membentuk sistem organ peredaran darah. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Potongan wortel A direndam dalam air tawar dan potongan wortel B direndam dalam larutan garam pekat selama 1 jam. Hasil yang paling mungkin adalah...',
      options: [
        'A mengecil dan lembek, B membesar dan keras',
        'A dan B sama-sama mengecil',
        'A dan B tidak berubah',
        'A sedikit membesar dan keras, B mengecil dan lembek'
      ],
      answer: 'D',
      hint: 'Air bergerak dari larutan encer ke larutan pekat.',
      solution: 'Wortel A: air tawar lebih encer daripada cairan sel, sehingga air **masuk** ke sel → sel menegang, wortel sedikit membesar dan keras. Wortel B: larutan garam lebih pekat, sehingga air **keluar** dari sel → wortel mengecil dan lembek. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Seorang siswa menemukan sel dengan ciri: memiliki inti sel bermembran, tidak memiliki dinding sel, tidak memiliki kloroplas, dan bentuknya tidak beraturan. Sel tersebut kemungkinan berasal dari...',
      options: ['daun bayam', 'bakteri', 'pipi bagian dalam manusia', 'akar bawang merah'],
      answer: 'C',
      hint: 'Sel eukariotik tanpa dinding sel.',
      solution: 'Inti bermembran → eukariotik (bukan bakteri). Tanpa dinding sel dan kloroplas → bukan sel tumbuhan. Jadi sel itu adalah **sel hewan**, misalnya sel epitel **pipi manusia**. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Saat mengamati preparat, bayangan sudah terlihat tetapi masih kabur. Langkah yang paling tepat untuk mempertajam bayangan adalah memutar...',
      options: ['revolver', 'mikrometer (pengatur halus)', 'cermin', 'diafragma'],
      answer: 'B',
      hint: 'Makrometer untuk mencari bayangan, satu bagian lagi untuk memperjelasnya.',
      solution: 'Makrometer untuk menemukan bayangan secara kasar, sedangkan **mikrometer (pengatur halus)** untuk mempertajam bayangan. Cermin dan diafragma mengatur cahaya, revolver mengganti lensa objektif. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Jika ribosom pada suatu sel rusak sehingga tidak dapat bekerja, kegiatan sel yang paling terganggu adalah...',
      options: ['pembentukan protein', 'fotosintesis', 'pembentukan dinding sel', 'penyimpanan air'],
      answer: 'A',
      hint: 'Ingat fungsi ribosom.',
      solution: 'Ribosom adalah tempat **sintesis (pembentukan) protein**. Protein diperlukan untuk enzim dan struktur sel, sehingga kerusakan ribosom mengganggu banyak kegiatan sel. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sel saraf berbentuk panjang dan memiliki banyak cabang, berbeda dengan sel kulit yang pipih. Hubungan bentuk sel saraf dengan fungsinya yang paling tepat adalah...',
      options: [
        'menyimpan cadangan makanan dalam jumlah besar',
        'menghantarkan rangsang dengan cepat ke bagian tubuh yang jauh dan ke banyak sel lain',
        'mengangkut oksigen ke seluruh tubuh',
        'melindungi tubuh dari kuman penyakit'
      ],
      answer: 'B',
      hint: 'Ingat spesialisasi sel: bentuk sel menyesuaikan tugasnya.',
      solution: 'Bentuk sel saraf yang panjang (akson) dan bercabang (dendrit) memungkinkannya **menghantarkan rangsang dengan cepat ke tempat yang jauh dan ke banyak sel**. Ini contoh spesialisasi sel. Mengangkut oksigen adalah tugas sel darah merah, melawan kuman tugas sel darah putih. Jawaban: **B**.'
    })
  ]
});
