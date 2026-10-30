import { bab, soal } from '../author.js';

export default bab({
  grade: 9,
  number: 7,
  slug: 'isu-lingkungan',
  title: 'Isu-Isu Lingkungan',
  element: 'Makhluk hidup dan lingkungannya: upaya mencegah dan mengatasi perubahan iklim',
  summary: {
    overview: 'Sampah plastik di sungai, asap kendaraan, dan cuaca yang makin ekstrem adalah masalah lingkungan yang dekat dengan kehidupan kita. Sesuai urutan buku siswa, bab ini membahas kesehatan lingkungan (pencemaran air, udara, dan tanah serta pengelolaan sampah), pemanasan global, krisis energi, dan ketersediaan pangan, serta aksi nyata yang dapat dilakukan pelajar.',
    coreConcepts: [
      'Kesehatan Lingkungan – Pencemaran Air: Masuknya zat pencemar seperti limbah rumah tangga (deterjen), limbah industri (logam berat seperti merkuri), limbah pertanian (pupuk dan pestisida), serta sampah ke perairan. Pupuk dan deterjen yang berlebihan memicu ledakan pertumbuhan alga dan eceng gondok (eutrofikasi), sehingga oksigen di air berkurang dan ikan mati. Ciri air tercemar: berbau, berwarna, keruh, dan banyak hewan air mati.',
      'Kesehatan Lingkungan – Pencemaran Udara: Sumbernya asap kendaraan, pabrik, pembakaran sampah dan hutan. Karbon monoksida (CO) mengikat hemoglobin lebih kuat daripada oksigen sehingga dapat menyebabkan pingsan hingga kematian. Gas belerang dioksida dan nitrogen oksida bereaksi dengan air hujan membentuk hujan asam yang merusak bangunan dan tumbuhan. CFC (dari freon dan aerosol lama) merusak lapisan ozon yang melindungi bumi dari sinar ultraviolet.',
      'Kesehatan Lingkungan – Pencemaran Tanah: Disebabkan sampah plastik yang sulit terurai (ratusan tahun), limbah B3 seperti baterai, serta penggunaan pupuk kimia dan pestisida berlebihan. Akibatnya tanah kehilangan kesuburan, mikroorganisme tanah mati, dan zat beracun dapat masuk ke rantai makanan.',
      'Pengelolaan Sampah: Prinsip 3R: reduce (mengurangi, misalnya membawa tas belanja sendiri), reuse (memakai ulang, misalnya botol sebagai pot), dan recycle (mendaur ulang, misalnya kertas bekas menjadi kertas daur ulang). Sampah organik dapat diolah menjadi kompos atau biogas; sampah dipilah menjadi organik, anorganik, dan B3. Bank sampah memberi nilai ekonomi pada sampah yang sudah dipilah.',
      'Pemanasan Global dan Perubahan Iklim: Gas rumah kaca (karbon dioksida, metana, dinitrogen oksida) menahan panas di atmosfer. Penambahan gas ini dari pembakaran bahan bakar fosil, penggundulan hutan, dan peternakan membuat suhu rata-rata bumi naik. Dampaknya: es kutub mencair, permukaan laut naik, cuaca ekstrem, kekeringan, banjir, dan terancamnya terumbu karang. Upaya mitigasi (mengurangi penyebab): menghemat energi, memakai energi terbarukan, menanam pohon. Upaya adaptasi (menyesuaikan diri): membuat tanggul, menanam varietas tahan kekeringan.',
      'Krisis Energi: Sebagian besar listrik dan bahan bakar di Indonesia masih berasal dari batu bara dan minyak bumi yang tidak terbarukan. Cadangannya terus berkurang, sedangkan kebutuhan energi meningkat karena pertambahan penduduk dan industri. Akibatnya harga energi naik dan pasokan terancam. Solusinya adalah menghemat energi, meningkatkan efisiensi, dan beralih ke energi terbarukan seperti surya, angin, air, panas bumi, dan biomassa.',
      'Ketersediaan Pangan: Pertambahan penduduk, alih fungsi lahan pertanian, dan perubahan iklim (kemarau panjang, banjir, hama) mengancam ketersediaan pangan. Upaya menjaga ketahanan pangan: diversifikasi pangan (tidak hanya beras, tetapi juga jagung, sagu, umbi-umbian), varietas tanaman tahan kekeringan, irigasi hemat air, pertanian organik, memanfaatkan pekarangan, dan tidak membuang-buang makanan.',
      'Aksi Nyata Pelajar: Mematikan lampu dan alat listrik yang tidak dipakai, berjalan kaki atau bersepeda untuk jarak dekat, membawa botol minum sendiri, tidak membakar sampah, membuat lubang biopori untuk resapan air, ikut menanam pohon dan mangrove, serta mengajak keluarga dan teman. Kearifan lokal seperti sasi di Maluku dan subak di Bali juga membantu menjaga kelestarian alam.'
    ],
    keyFormulas: [
      { label: 'Prinsip 3R', formula: '\\text{Reduce} \\to \\text{Reuse} \\to \\text{Recycle}' },
      { label: 'Gas rumah kaca utama', formula: '\\text{CO}_2,\\ \\text{CH}_4,\\ \\text{N}_2\\text{O}' },
      { label: 'Penyebab hujan asam', formula: '\\text{SO}_2,\\ \\text{NO}_x + \\text{H}_2\\text{O} \\rightarrow \\text{asam}' }
    ],
    workedExamples: [
      {
        title: 'Menganalisis eutrofikasi',
        problem: 'Sebuah danau di dekat sawah dipenuhi eceng gondok dan banyak ikan mati. Apa penyebab dan solusinya?',
        solution: 'Pupuk dari sawah terbawa air ke danau sehingga eceng gondok tumbuh sangat cepat (**eutrofikasi**). Tanaman menutupi permukaan dan menghabiskan oksigen terlarut saat membusuk, sehingga ikan mati. Solusi: memakai pupuk sesuai takaran atau pupuk organik, membuat saluran penyaring, dan mengangkat eceng gondok untuk dijadikan kerajinan atau kompos.'
      },
      {
        title: 'Mitigasi atau adaptasi?',
        problem: 'Kelompokkan: (1) memasang panel surya di sekolah, (2) membangun rumah panggung di daerah rawan banjir rob, (3) menanam mangrove.',
        solution: '(1) **Mitigasi**: mengurangi emisi dari listrik fosil. (2) **Adaptasi**: menyesuaikan diri dengan naiknya muka air. (3) Keduanya: mangrove menyerap CO₂ (mitigasi) dan menahan abrasi serta gelombang (adaptasi).'
      },
      {
        title: 'Menerapkan 3R',
        problem: 'Berikan satu contoh reduce, reuse, dan recycle untuk sampah botol plastik di sekolah.',
        solution: 'Reduce: membawa botol minum isi ulang sehingga tidak membeli air kemasan. Reuse: memakai botol bekas sebagai pot tanaman. Recycle: mengumpulkan botol untuk diolah pabrik menjadi biji plastik atau serat kain.'
      }
    ],
    misconceptions: [
      'Menganggap efek rumah kaca selalu buruk. Efek rumah kaca alami menjaga bumi tetap hangat; yang berbahaya adalah penambahan gas rumah kaca berlebihan oleh manusia.',
      'Menganggap membakar sampah adalah cara aman membuang sampah. Pembakaran sampah menghasilkan asap beracun dan gas rumah kaca.',
      'Menganggap lubang ozon dan pemanasan global adalah hal yang sama. Lubang ozon disebabkan CFC dan meningkatkan sinar UV; pemanasan global disebabkan gas rumah kaca.'
    ],
    tutorTip: 'Untuk soal dampak lingkungan, telusuri rantai sebab-akibatnya: sumber pencemar → perubahan pada lingkungan → dampak pada makhluk hidup → solusi yang memutus rantai itu.'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Gas yang paling banyak menyumbang efek rumah kaca dari pembakaran bahan bakar fosil adalah...',
      options: ['oksigen', 'nitrogen', 'karbon dioksida', 'hidrogen'],
      answer: 'C',
      hint: 'Gas ini juga dihasilkan saat kita bernapas.',
      solution: 'Pembakaran bahan bakar fosil menghasilkan banyak **karbon dioksida (CO₂)**, gas rumah kaca utama. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Lapisan ozon di atmosfer berfungsi untuk...',
      options: ['menghasilkan hujan', 'menyaring sinar ultraviolet dari matahari', 'menyimpan karbon dioksida', 'mendinginkan bumi pada malam hari'],
      answer: 'B',
      hint: 'Sinar ini dapat menyebabkan kanker kulit.',
      solution: 'Lapisan ozon **menyaring sinar ultraviolet (UV)** yang berbahaya bagi makhluk hidup. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Memakai kembali botol bekas sebagai tempat pensil termasuk prinsip...',
      options: ['reuse', 'reduce', 'recycle', 'replace'],
      answer: 'A',
      hint: 'Barang dipakai ulang tanpa diolah.',
      solution: 'Memakai kembali barang untuk fungsi lain tanpa mengolahnya adalah **reuse**. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Hujan asam terutama disebabkan oleh gas...',
      options: ['oksigen dan nitrogen', 'karbon dioksida dan uap air', 'CFC dan metana', 'belerang dioksida dan nitrogen oksida'],
      answer: 'D',
      hint: 'Gas-gas ini dihasilkan pabrik dan kendaraan.',
      solution: '**Belerang dioksida (SO₂) dan nitrogen oksida (NOx)** bereaksi dengan air hujan membentuk asam. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Sampah berikut yang paling sulit terurai di tanah adalah...',
      options: ['daun kering', 'kulit buah', 'kantong plastik', 'sisa nasi'],
      answer: 'C',
      hint: 'Sampah anorganik membutuhkan waktu sangat lama untuk terurai.',
      solution: '**Kantong plastik** adalah sampah anorganik yang memerlukan ratusan tahun untuk terurai. Daun, kulit buah, dan nasi adalah sampah organik yang cepat terurai. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Seseorang yang lama berada di dalam mobil tertutup dengan mesin menyala bisa pingsan. Gas berbahaya penyebabnya dan alasannya adalah...',
      options: [
        'karbon monoksida, karena mengikat hemoglobin lebih kuat daripada oksigen',
        'oksigen, karena kadarnya terlalu tinggi',
        'nitrogen, karena mengikat sel darah putih',
        'uap air, karena menyumbat paru-paru'
      ],
      answer: 'A',
      hint: 'Gas tidak berwarna dan tidak berbau dari pembakaran tidak sempurna.',
      solution: '**Karbon monoksida (CO)** mengikat hemoglobin jauh lebih kuat daripada oksigen, sehingga darah kekurangan oksigen dan orang bisa pingsan bahkan meninggal. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Di sebuah sungai yang dekat permukiman, banyak busa deterjen dan eceng gondok tumbuh sangat lebat. Dampak yang paling mungkin terjadi pada ikan adalah...',
      options: [
        'ikan bertambah banyak karena makanan berlimpah',
        'ikan mati karena kadar oksigen terlarut di air berkurang',
        'ikan berpindah ke darat',
        'ikan tumbuh lebih besar'
      ],
      answer: 'B',
      hint: 'Pikirkan eutrofikasi.',
      solution: 'Fosfat dari deterjen memicu **eutrofikasi**: eceng gondok tumbuh lebat menutupi permukaan dan menghabiskan oksigen saat membusuk. **Oksigen terlarut berkurang sehingga ikan mati**. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Dampak pemanasan global terhadap daerah pesisir di Indonesia adalah...',
      options: [
        'permukaan laut turun sehingga pantai makin luas',
        'jumlah ikan di laut bertambah',
        'naiknya permukaan laut sehingga terjadi banjir rob dan abrasi',
        'suhu laut menjadi lebih dingin'
      ],
      answer: 'C',
      hint: 'Es di kutub mencair.',
      solution: 'Mencairnya es kutub dan memuainya air laut menyebabkan **permukaan laut naik**, sehingga daerah pesisir mengalami banjir rob dan abrasi. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Kegiatan berikut yang termasuk upaya mitigasi perubahan iklim adalah...',
      options: [
        'membangun rumah panggung di daerah banjir',
        'menanam padi varietas tahan kekeringan',
        'membuat tanggul laut',
        'mengganti lampu biasa dengan lampu LED hemat energi'
      ],
      answer: 'D',
      hint: 'Mitigasi = mengurangi penyebab (emisi).',
      solution: 'Lampu LED mengurangi pemakaian listrik dari pembangkit berbahan bakar fosil, sehingga **mengurangi emisi** gas rumah kaca: ini mitigasi. Pilihan lain adalah adaptasi (menyesuaikan diri dengan dampak). Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebagian besar listrik di Indonesia masih dihasilkan dari batu bara. Alasan utama hal ini dapat memicu krisis energi adalah...',
      options: [
        'batu bara terlalu ringan untuk dibakar',
        'batu bara hanya ada di luar negeri',
        'batu bara tidak terbarukan sehingga cadangannya terus berkurang, sedangkan kebutuhan listrik terus meningkat',
        'pembangkit listrik batu bara tidak menghasilkan panas'
      ],
      answer: 'C',
      hint: 'Bandingkan persediaan dan kebutuhan.',
      solution: 'Batu bara adalah bahan bakar fosil yang **tidak terbarukan**. Cadangannya berkurang setiap kali dipakai, sementara **kebutuhan energi terus naik**. Kesenjangan inilah yang memicu krisis energi, sehingga perlu penghematan dan peralihan ke energi terbarukan. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Petani menyemprot sawah dengan pestisida DDT. Beberapa tahun kemudian, kadar DDT tertinggi ditemukan pada burung elang pemakan ular, bukan pada padi atau tikus. Hal ini terjadi karena...',
      options: [
        'elang menyemprotkan DDT sendiri',
        'DDT terakumulasi dan makin pekat di setiap tingkat trofik rantai makanan',
        'DDT hanya beracun bagi elang',
        'padi dan tikus mengubah DDT menjadi zat lain'
      ],
      answer: 'B',
      hint: 'Zat yang tidak terurai dalam tubuh menumpuk dari mangsa ke pemangsa.',
      solution: 'DDT sulit diurai dan tersimpan dalam tubuh. Setiap pemangsa memakan banyak mangsa, sehingga DDT **terakumulasi makin pekat di tingkat trofik yang lebih tinggi** (biomagnifikasi). Konsumen puncak seperti elang menerima kadar tertinggi. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah sekolah menghasilkan sampah: botol plastik, kertas, sisa makanan, dan baterai bekas. Rencana pengelolaan yang paling tepat adalah...',
      options: [
        'semua sampah dibakar di belakang sekolah',
        'semua sampah dimasukkan ke satu tempat sampah',
        'sisa makanan dikompos, botol dan kertas disetor ke bank sampah, baterai dikumpulkan terpisah sebagai limbah B3',
        'baterai ditimbun di tanah dan sampah lain dibuang ke sungai'
      ],
      answer: 'C',
      hint: 'Pilah berdasarkan jenis: organik, anorganik, dan B3.',
      solution: 'Pengelolaan yang benar dimulai dengan **memilah**: organik dikompos, anorganik yang bernilai disetor ke bank sampah untuk didaur ulang, dan **baterai sebagai limbah B3** dikumpulkan terpisah agar logam beratnya tidak mencemari tanah dan air. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Data suhu rata-rata sebuah kota: tahun 1990 sebesar 26,1 °C, tahun 2010 sebesar 26,6 °C, dan tahun 2025 sebesar 27,0 °C. Kesimpulan yang paling tepat dari data ini adalah...',
      options: [
        'suhu kota cenderung naik, sesuai dengan gejala pemanasan global',
        'suhu kota turun setiap tahun',
        'suhu kota tidak berubah',
        'data membuktikan kota itu pasti akan tenggelam'
      ],
      answer: 'A',
      hint: 'Bandingkan angka dari tahun ke tahun.',
      solution: 'Suhu naik dari 26,1 °C menjadi 27,0 °C, sehingga **cenderung naik**, sesuai gejala pemanasan global. Data ini tidak cukup untuk menyimpulkan kota pasti tenggelam. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Kemarau yang makin panjang akibat perubahan iklim menyebabkan banyak sawah gagal panen. Kombinasi upaya yang paling tepat untuk menjaga ketersediaan pangan adalah...',
      options: [
        'membuka hutan seluas-luasnya untuk sawah baru',
        'hanya mengonsumsi beras agar petani padi untung',
        'membakar jerami di sawah agar tanah cepat kering',
        'diversifikasi pangan, menanam varietas tahan kekeringan, dan memakai irigasi hemat air'
      ],
      answer: 'D',
      hint: 'Cari upaya yang tidak menimbulkan masalah lingkungan baru.',
      solution: '**Diversifikasi pangan** (jagung, sagu, umbi-umbian) mengurangi ketergantungan pada beras, **varietas tahan kekeringan** tetap dapat dipanen saat kemarau, dan **irigasi hemat air** menjaga pasokan air. Membuka hutan dan membakar jerami justru memperparah perubahan iklim. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Menanam mangrove di pesisir sering disebut upaya mitigasi sekaligus adaptasi perubahan iklim. Alasan yang tepat adalah...',
      options: [
        'mangrove mempercepat naiknya permukaan laut',
        'mangrove menyerap karbon dioksida (mitigasi) dan melindungi pantai dari abrasi serta gelombang (adaptasi)',
        'mangrove menghasilkan gas rumah kaca',
        'mangrove hanya berguna sebagai tempat wisata'
      ],
      answer: 'B',
      hint: 'Mitigasi mengurangi penyebab; adaptasi mengurangi dampak.',
      solution: 'Mangrove **menyimpan banyak karbon** sehingga mengurangi CO₂ di udara (mitigasi), dan akarnya **menahan abrasi serta gelombang** sehingga melindungi permukiman pesisir (adaptasi). Jawaban: **B**.'
    })
  ]
});
