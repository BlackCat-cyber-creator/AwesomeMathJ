import { bab, soal } from '../author.js';

export default bab({
  grade: 9,
  number: 5,
  slug: 'reaksi-kimia',
  title: 'Reaksi-Reaksi Kimia dan Dinamikanya',
  element: 'Zat dan sifatnya: perubahan materi dan reaksi kimia',
  summary: {
    overview: 'Kayu terbakar, besi berkarat, dan makanan dicerna di dalam tubuh adalah contoh reaksi kimia. Bab ini membahas ciri-ciri reaksi kimia, persamaan reaksi dan hukum kekekalan massa, jenis-jenis reaksi, reaksi eksoterm dan endoterm, laju reaksi beserta faktor yang memengaruhinya, serta reaksi kimia dalam kehidupan sehari-hari.',
    coreConcepts: [
      'Reaksi Kimia dan Cirinya: Reaksi kimia adalah perubahan zat (pereaksi/reaktan) menjadi zat baru (hasil reaksi/produk). Ciri-cirinya: terbentuk gas (gelembung), terbentuk endapan, terjadi perubahan warna, dan terjadi perubahan suhu. Contoh: cuka dicampur soda kue menghasilkan gelembung gas karbon dioksida.',
      'Persamaan Reaksi dan Hukum Kekekalan Massa: Persamaan reaksi menuliskan pereaksi di kiri tanda panah dan hasil reaksi di kanan, lengkap dengan wujud zat (s padat, l cair, g gas, aq larutan). Hukum Lavoisier: massa zat sebelum dan sesudah reaksi sama. Karena itu jumlah atom setiap unsur di kiri dan kanan harus sama (persamaan setara), misalnya $2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$.',
      'Jenis-Jenis Reaksi: Reaksi pembakaran (zat bereaksi dengan oksigen, contoh $\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$), penggabungan (dua zat membentuk satu zat), penguraian (satu zat terurai menjadi beberapa zat, contoh elektrolisis air), dan netralisasi (asam + basa → garam + air).',
      'Reaksi Eksoterm dan Endoterm: Reaksi eksoterm melepaskan kalor ke lingkungan sehingga lingkungan terasa panas, contoh pembakaran, respirasi, dan kapur tohor dicampur air. Reaksi endoterm menyerap kalor dari lingkungan sehingga terasa dingin, contoh fotosintesis dan pelarutan amonium nitrat pada kompres instan dingin.',
      'Laju Reaksi: Laju reaksi menyatakan cepat lambatnya reaksi. Faktor yang mempercepat: konsentrasi pereaksi lebih besar, suhu lebih tinggi, luas permukaan lebih besar (zat dalam bentuk serbuk atau potongan kecil), dan adanya katalis (zat yang mempercepat reaksi tanpa ikut habis, contoh enzim di dalam tubuh). Contoh: daging dicincang lebih cepat matang; makanan di kulkas lebih lambat basi.',
      'Reaksi Kimia dalam Kehidupan: Fotosintesis, respirasi sel, pencernaan makanan oleh enzim, fermentasi (tape, yoghurt, tempe), dan perkaratan besi (besi + oksigen + air). Karat dicegah dengan mengecat, melumuri oli, melapisi logam lain (galvanisasi), atau menjaga besi tetap kering. Bahan kimia rumah tangga (pemutih, pembersih lantai) harus digunakan sesuai label dan tidak dicampur sembarangan.'
    ],
    keyFormulas: [
      { label: 'Bentuk umum', formula: '\\text{pereaksi} \\rightarrow \\text{hasil reaksi}' },
      { label: 'Contoh persamaan setara', formula: '2\\text{H}_2(g) + \\text{O}_2(g) \\rightarrow 2\\text{H}_2\\text{O}(l)' },
      { label: 'Hukum kekekalan massa', formula: 'm_{\\text{sebelum}} = m_{\\text{sesudah}}' },
      { label: 'Respirasi', formula: '\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{energi}' }
    ],
    workedExamples: [
      {
        title: 'Menggunakan hukum kekekalan massa',
        problem: 'Sebanyak 56 g besi bereaksi tepat habis dengan 32 g belerang membentuk besi sulfida. Berapa massa besi sulfida yang terbentuk?',
        solution: 'Massa sebelum = massa sesudah, sehingga massa besi sulfida = 56 + 32 = **88 g**.'
      },
      {
        title: 'Menyetarakan persamaan reaksi',
        problem: 'Setarakan: $\\text{N}_2 + \\text{H}_2 \\rightarrow \\text{NH}_3$.',
        solution: 'Atom N di kiri 2, maka $\\text{NH}_3$ diberi koefisien 2 (N = 2, H = 6). Atom H di kanan 6, maka $\\text{H}_2$ diberi koefisien 3. Hasil: $\\text{N}_2 + 3\\text{H}_2 \\rightarrow 2\\text{NH}_3$.'
      },
      {
        title: 'Faktor laju reaksi',
        problem: 'Mengapa gula pasir lebih cepat larut daripada gula batu dalam air panas yang sama banyak?',
        solution: 'Gula pasir berbutir kecil sehingga **luas permukaan** yang bersentuhan dengan air lebih besar. Makin luas permukaan, makin cepat prosesnya.'
      }
    ],
    misconceptions: [
      'Menganggap massa berkurang saat kertas dibakar. Sebagian massa berubah menjadi gas (CO₂, uap air) yang lepas ke udara; jika gas ditampung, massa total tetap.',
      'Mengubah angka indeks rumus kimia untuk menyetarakan reaksi (misalnya H₂O menjadi H₂O₂). Yang boleh diubah hanya koefisien di depan rumus.',
      'Menganggap katalis ikut habis bereaksi. Katalis mempercepat reaksi dan diperoleh kembali di akhir reaksi.'
    ],
    tutorTip: 'Menyetarakan reaksi paling mudah dimulai dari unsur yang hanya muncul di satu zat di setiap sisi, lalu setarakan H dan O paling akhir.'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Berikut ini yang bukan merupakan ciri terjadinya reaksi kimia adalah...',
      options: ['terbentuk gas', 'terbentuk endapan', 'perubahan warna', 'perubahan bentuk karena dipotong'],
      answer: 'D',
      hint: 'Memotong tidak menghasilkan zat baru.',
      solution: 'Perubahan bentuk karena dipotong adalah **perubahan fisika**, bukan ciri reaksi kimia. Gas, endapan, dan perubahan warna menandakan terbentuknya zat baru. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Pada persamaan reaksi $\\text{C} + \\text{O}_2 \\rightarrow \\text{CO}_2$, zat yang berperan sebagai pereaksi adalah...',
      options: ['$\\text{CO}_2$ saja', '$\\text{C}$ dan $\\text{O}_2$', '$\\text{C}$ saja', '$\\text{O}_2$ dan $\\text{CO}_2$'],
      answer: 'B',
      hint: 'Pereaksi ditulis di sebelah kiri tanda panah.',
      solution: 'Pereaksi (reaktan) berada di kiri panah: **C dan O₂**. CO₂ adalah hasil reaksi. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Hukum kekekalan massa dikemukakan oleh...',
      options: ['Antoine Lavoisier', 'Isaac Newton', 'Archimedes', 'Gregor Mendel'],
      answer: 'A',
      hint: 'Ilmuwan Prancis yang dijuluki Bapak Kimia Modern.',
      solution: '**Antoine Lavoisier** menyatakan bahwa massa zat sebelum dan sesudah reaksi sama. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Reaksi yang melepaskan kalor ke lingkungan sehingga lingkungan terasa panas disebut reaksi...',
      options: ['endoterm', 'netralisasi', 'eksoterm', 'penguraian'],
      answer: 'C',
      hint: '"Ekso" berarti keluar.',
      solution: 'Reaksi yang melepaskan kalor ke lingkungan disebut **eksoterm**, contohnya pembakaran. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Zat yang mempercepat reaksi kimia tetapi tidak ikut habis bereaksi disebut...',
      options: ['pereaksi', 'katalis', 'endapan', 'indikator'],
      answer: 'B',
      hint: 'Enzim di tubuh adalah contohnya.',
      solution: '**Katalis** mempercepat reaksi dan diperoleh kembali di akhir reaksi. Enzim adalah katalis di dalam tubuh. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebanyak 24 g magnesium dibakar dengan 16 g oksigen dan bereaksi tepat habis membentuk magnesium oksida. Massa magnesium oksida yang terbentuk adalah...',
      options: ['8 g', '24 g', '16 g', '40 g'],
      answer: 'D',
      hint: 'Massa sebelum reaksi = massa sesudah reaksi.',
      solution: 'Menurut hukum kekekalan massa, massa MgO = 24 + 16 = **40 g**. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Agar persamaan $\\text{H}_2 + \\text{Cl}_2 \\rightarrow \\text{HCl}$ setara, koefisien HCl harus...',
      options: ['1', '3', '2', '4'],
      answer: 'C',
      hint: 'Di kiri ada 2 atom H dan 2 atom Cl.',
      solution: 'Di kiri: H = 2, Cl = 2. Agar sama, HCl diberi koefisien **2**: $\\text{H}_2 + \\text{Cl}_2 \\rightarrow 2\\text{HCl}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Kompres instan dingin terasa sangat dingin ketika bahan di dalamnya dicampur. Reaksi yang terjadi adalah...',
      options: ['endoterm, karena menyerap kalor dari lingkungan', 'eksoterm, karena melepas kalor', 'pembakaran', 'netralisasi'],
      answer: 'A',
      hint: 'Terasa dingin berarti kalor diambil dari tangan kita.',
      solution: 'Reaksi itu **menyerap kalor dari lingkungan** (termasuk tangan), sehingga terasa dingin. Ini adalah reaksi **endoterm**. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Makanan yang disimpan di lemari es lebih awet daripada yang disimpan di suhu ruang. Faktor laju reaksi yang berperan adalah...',
      options: ['luas permukaan', 'katalis', 'konsentrasi', 'suhu'],
      answer: 'D',
      hint: 'Lemari es mengubah satu kondisi lingkungan.',
      solution: 'Suhu rendah memperlambat reaksi pembusukan dan pertumbuhan mikroorganisme. Faktor yang berperan adalah **suhu**. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Cara yang tidak tepat untuk mencegah perkaratan pagar besi adalah...',
      options: ['mengecat pagar', 'melapisi pagar dengan seng', 'sering menyiram pagar dengan air garam', 'melumuri bagian engsel dengan oli'],
      answer: 'C',
      hint: 'Karat terbentuk karena besi bereaksi dengan oksigen dan air.',
      solution: '**Menyiram dengan air garam** justru mempercepat perkaratan karena air dan garam membantu reaksi besi dengan oksigen. Cara lain menghalangi besi bersentuhan dengan air dan udara. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Koefisien yang tepat agar reaksi pembakaran metana $\\text{CH}_4 + a\\,\\text{O}_2 \\rightarrow \\text{CO}_2 + b\\,\\text{H}_2\\text{O}$ setara adalah...',
      options: ['$a = 1, b = 2$', '$a = 2, b = 2$', '$a = 2, b = 1$', '$a = 3, b = 2$'],
      answer: 'B',
      hint: 'Setarakan H dulu, lalu O.',
      solution: 'H: kiri 4, maka $b = 2$ (4 atom H di kanan). O di kanan: 2 (dari CO₂) + 2 (dari 2H₂O) = 4, maka $a = 2$. Hasil: $\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Kertas seberat 10 g dibakar di ruang terbuka dan tersisa abu 1 g. Penjelasan yang sesuai dengan hukum kekekalan massa adalah...',
      options: [
        'hukum kekekalan massa tidak berlaku pada pembakaran',
        'sebagian massa berubah menjadi gas seperti karbon dioksida dan uap air yang lepas ke udara',
        'massa kertas musnah menjadi energi panas',
        'abu yang tersisa seharusnya bermassa 10 g'
      ],
      answer: 'B',
      hint: 'Di ruang terbuka, tidak semua hasil reaksi dapat ditimbang.',
      solution: 'Hukum kekekalan massa tetap berlaku. Massa yang "hilang" berubah menjadi **gas (CO₂ dan uap air) yang lepas ke udara**. Jika pembakaran dilakukan di ruang tertutup, massa total sebelum dan sesudah sama. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Tiga gelas berisi larutan HCl yang sama banyak dan sama pekatnya, masing-masing diberi 1 g pualam: gelas P berupa bongkahan, gelas Q berupa butiran kecil, gelas R berupa serbuk. Urutan reaksi dari yang paling cepat adalah...',
      options: ['P, Q, R', 'Q, P, R', 'R, P, Q', 'R, Q, P'],
      answer: 'D',
      hint: 'Makin halus, luas permukaan makin besar.',
      solution: 'Serbuk memiliki luas permukaan paling besar, lalu butiran, lalu bongkahan. Urutan dari paling cepat: **R, Q, P**. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Fotosintesis dan respirasi sel adalah dua reaksi yang saling berkebalikan. Pernyataan yang benar adalah...',
      options: [
        'fotosintesis bersifat eksoterm dan respirasi endoterm',
        'keduanya bersifat endoterm',
        'fotosintesis menyerap energi cahaya (endoterm), sedangkan respirasi melepaskan energi (eksoterm)',
        'keduanya tidak melibatkan energi'
      ],
      answer: 'C',
      hint: 'Fotosintesis memerlukan cahaya; respirasi menghasilkan energi untuk tubuh.',
      solution: 'Fotosintesis **menyerap energi cahaya** untuk membentuk glukosa (endoterm). Respirasi **memecah glukosa dan melepaskan energi** (eksoterm). Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Seorang siswa ingin membuktikan bahwa suhu memengaruhi laju reaksi tablet vitamin C dalam air. Rancangan percobaan yang paling tepat adalah...',
      options: [
        'memasukkan satu tablet utuh ke air dingin, air hangat, dan air panas dengan volume yang sama, lalu mencatat waktu sampai tablet habis bereaksi',
        'memasukkan tablet utuh ke air panas dan tablet yang digerus ke air dingin',
        'memasukkan tablet ke air dengan volume berbeda-beda',
        'memasukkan dua tablet ke air panas dan satu tablet ke air dingin'
      ],
      answer: 'A',
      hint: 'Hanya suhu yang boleh berbeda.',
      solution: 'Variabel bebasnya suhu, sehingga bentuk tablet, jumlah tablet, dan volume air harus sama. Rancangan **A** hanya membedakan suhu dan mengukur waktu reaksi. Pilihan lain mengubah lebih dari satu faktor. Jawaban: **A**.'
    })
  ]
});
