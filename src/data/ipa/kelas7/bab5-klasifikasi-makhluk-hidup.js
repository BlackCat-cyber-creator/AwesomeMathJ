import { bab, soal } from '../author.js';

export default bab({
  grade: 7,
  number: 5,
  slug: 'klasifikasi-makhluk-hidup',
  title: 'Karakteristik dan Klasifikasi Makhluk Hidup',
  element: 'Makhluk hidup dan lingkungannya: identifikasi dan klasifikasi makhluk hidup',
  summary: {
    overview: 'Ada jutaan jenis makhluk hidup di bumi. Agar mudah dipelajari, makhluk hidup dikelompokkan berdasarkan persamaan dan perbedaan cirinya. Bab ini membahas ciri-ciri makhluk hidup, tingkatan takson, tata nama ilmiah, kunci determinasi, dan sistem lima kingdom.',
    coreConcepts: [
      'Ciri-Ciri Makhluk Hidup: Bernapas, bergerak, peka terhadap rangsang (iritabilitas), memerlukan nutrisi, tumbuh dan berkembang, berkembang biak, mengeluarkan zat sisa (ekskresi), dan beradaptasi dengan lingkungan. Contoh: daun putri malu menutup saat disentuh menunjukkan peka rangsang.',
      'Tujuan dan Dasar Klasifikasi: Klasifikasi memudahkan mengenali dan mempelajari makhluk hidup serta mengetahui hubungan kekerabatannya. Dasar pengelompokan adalah persamaan ciri: bentuk tubuh (morfologi), struktur dalam (anatomi), cara hidup, dan cara berkembang biak.',
      'Tingkatan Takson: Urutan dari tinggi ke rendah: Kingdom (Kerajaan) – Filum (hewan) atau Divisi (tumbuhan) – Kelas – Ordo (Bangsa) – Famili (Suku) – Genus (Marga) – Spesies (Jenis). Semakin rendah takson, semakin banyak persamaan ciri, semakin sedikit jumlah anggota, dan semakin dekat kekerabatannya.',
      'Tata Nama Ilmiah (Binomial Nomenklatur): Diperkenalkan Carolus Linnaeus. Nama ilmiah terdiri atas dua kata berbahasa Latin: kata pertama genus (huruf awal kapital), kata kedua penunjuk spesies (huruf kecil semua), dicetak miring atau digarisbawahi terpisah. Contoh: *Oryza sativa* (padi), *Panthera tigris* (harimau).',
      'Kunci Determinasi: Kunci dikotom berisi pasangan pernyataan yang saling berlawanan (1a/1b, 2a/2b, ...). Kita memilih pernyataan yang sesuai dengan ciri makhluk hidup yang diamati sampai menemukan nama kelompok atau jenisnya.',
      'Sistem Lima Kingdom: Monera (sel prokariotik, tanpa membran inti, contoh bakteri), Protista (eukariotik sederhana, contoh Amoeba dan alga), Fungi (jamur, eukariotik, tidak berklorofil, dinding sel kitin), Plantae (eukariotik, berklorofil, contoh lumut, paku, tumbuhan berbiji), dan Animalia (eukariotik, multiseluler, tidak berdinding sel; vertebrata: ikan, amfibi, reptil, burung, mamalia).'
    ],
    keyFormulas: [
      { label: 'Urutan takson', formula: '\\text{Kingdom} \\to \\text{Filum/Divisi} \\to \\text{Kelas} \\to \\text{Ordo} \\to \\text{Famili} \\to \\text{Genus} \\to \\text{Spesies}' },
      { label: 'Nama ilmiah', formula: '\\textit{Genus}\\ \\textit{spesies} \\quad (\\text{contoh: } \\textit{Oryza sativa})' }
    ],
    workedExamples: [
      {
        title: 'Membaca hubungan kekerabatan',
        problem: 'Kucing (*Felis catus*), harimau (*Panthera tigris*), dan singa (*Panthera leo*). Mana yang kekerabatannya paling dekat?',
        solution: 'Harimau dan singa berada dalam genus yang sama (*Panthera*), sedangkan kucing berbeda genus. Jadi **harimau dan singa** paling dekat kekerabatannya.'
      },
      {
        title: 'Menggunakan kunci dikotom',
        problem: 'Kunci: 1a Berbiji → 2; 1b Tidak berbiji → tumbuhan paku/lumut. 2a Biji tertutup daun buah → Angiospermae; 2b Biji terbuka → Gymnospermae. Tumbuhan melinjo bijinya tidak dibungkus daging buah. Termasuk kelompok apa?',
        solution: 'Melinjo berbiji (1a → ke nomor 2). Bijinya terbuka (2b). Jadi melinjo termasuk **Gymnospermae**.'
      },
      {
        title: 'Menulis nama ilmiah',
        problem: 'Mana penulisan nama ilmiah jagung yang benar: "zea mays", "Zea Mays", atau "*Zea mays*"?',
        solution: 'Genus diawali huruf kapital, spesies huruf kecil, dan dicetak miring: ***Zea mays***.'
      }
    ],
    misconceptions: [
      'Menganggap jamur termasuk tumbuhan. Jamur tidak berklorofil dan dinding selnya dari kitin, sehingga masuk kingdom Fungi.',
      'Menganggap kelelawar burung karena bisa terbang, atau paus ikan karena hidup di air. Kelelawar dan paus menyusui anaknya, jadi termasuk mamalia.',
      'Menulis nama spesies dengan huruf kapital (misal *Oryza Sativa*). Kata kedua selalu huruf kecil.'
    ],
    tutorTip: 'Hafalkan urutan takson dengan jembatan keledai "Kita Fikir Kelas Orang Fisika Gemar Sains": Kingdom, Filum, Kelas, Ordo, Famili, Genus, Spesies.'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Daun putri malu menutup ketika disentuh. Ciri makhluk hidup yang ditunjukkan adalah...',
      options: ['bernapas', 'peka terhadap rangsang', 'tumbuh', 'berkembang biak'],
      answer: 'B',
      hint: 'Sentuhan adalah rangsang dari luar.',
      solution: 'Putri malu menanggapi sentuhan (rangsang) dengan menutup daunnya. Ini menunjukkan ciri **peka terhadap rangsang (iritabilitas)**. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Urutan takson dari tingkat tertinggi ke terendah yang benar adalah...',
      options: [
        'Kingdom – Kelas – Filum – Ordo – Famili – Genus – Spesies',
        'Spesies – Genus – Famili – Ordo – Kelas – Filum – Kingdom',
        'Kingdom – Filum – Kelas – Ordo – Famili – Genus – Spesies',
        'Kingdom – Filum – Ordo – Kelas – Genus – Famili – Spesies'
      ],
      answer: 'C',
      hint: 'Kingdom paling tinggi, spesies paling rendah.',
      solution: 'Urutan yang benar: **Kingdom – Filum – Kelas – Ordo – Famili – Genus – Spesies**. Pilihan B urutannya terbalik (dari rendah ke tinggi). Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Penulisan nama ilmiah padi yang benar adalah...',
      options: ['*Oryza sativa*', '*oryza sativa*', '*Oryza Sativa*', 'ORYZA SATIVA'],
      answer: 'A',
      hint: 'Huruf awal genus kapital, kata kedua huruf kecil, dicetak miring.',
      solution: 'Aturan binomial nomenklatur: genus diawali huruf kapital dan penunjuk spesies huruf kecil, dicetak miring: ***Oryza sativa***. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Makhluk hidup bersel satu yang tidak memiliki membran inti sel (prokariotik), seperti bakteri, termasuk kingdom...',
      options: ['Protista', 'Fungi', 'Plantae', 'Monera'],
      answer: 'D',
      hint: 'Kingdom ini satu-satunya yang anggotanya prokariotik.',
      solution: 'Bakteri bersifat **prokariotik** (tidak memiliki membran inti) dan dikelompokkan dalam kingdom **Monera**. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Tokoh yang memperkenalkan sistem tata nama ganda (binomial nomenklatur) adalah...',
      options: ['Charles Darwin', 'Carolus Linnaeus', 'Gregor Mendel', 'Robert Hooke'],
      answer: 'B',
      hint: 'Ia dijuluki Bapak Taksonomi.',
      solution: '**Carolus Linnaeus**, ahli botani Swedia, memperkenalkan tata nama dua kata dan dikenal sebagai Bapak Taksonomi. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Jamur tidak dimasukkan ke dalam kingdom Plantae karena...',
      options: [
        'jamur tidak memiliki klorofil dan dinding selnya tersusun atas kitin',
        'jamur hidup di tempat lembap',
        'jamur berkembang biak dengan spora',
        'jamur memiliki inti sel'
      ],
      answer: 'A',
      hint: 'Bandingkan ciri utama tumbuhan dengan jamur.',
      solution: 'Tumbuhan berklorofil sehingga dapat berfotosintesis, sedangkan **jamur tidak berklorofil** dan **dinding selnya dari kitin** (bukan selulosa). Karena itu jamur masuk kingdom Fungi. Paku juga berspora, jadi pilihan C bukan alasan pembeda. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Kucing (*Felis catus*), harimau (*Panthera tigris*), dan macan tutul (*Panthera pardus*) termasuk satu famili. Pasangan yang kekerabatannya paling dekat adalah...',
      options: ['kucing dan harimau', 'kucing dan macan tutul', 'harimau dan macan tutul', 'ketiganya sama dekat'],
      answer: 'C',
      hint: 'Lihat kata pertama nama ilmiahnya.',
      solution: 'Harimau dan macan tutul sama-sama genus ***Panthera***, sedangkan kucing genus *Felis*. Semakin rendah takson yang sama, semakin dekat kekerabatannya. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Semakin rendah tingkat takson, maka...',
      options: [
        'jumlah anggota makin banyak dan persamaan ciri makin sedikit',
        'jumlah anggota makin sedikit dan persamaan ciri makin banyak',
        'jumlah anggota dan persamaan ciri makin banyak',
        'jumlah anggota dan persamaan ciri makin sedikit'
      ],
      answer: 'B',
      hint: 'Spesies adalah takson terendah; anggotanya sangat mirip.',
      solution: 'Pada takson rendah (misal spesies), anggotanya sedikit tetapi sangat mirip. Jadi **jumlah anggota makin sedikit dan persamaan ciri makin banyak**. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Kelelawar dapat terbang, tetapi tidak dikelompokkan ke dalam kelas burung (Aves). Alasan yang tepat adalah...',
      options: ['kelelawar aktif di malam hari', 'kelelawar memakan buah', 'kelelawar berukuran kecil', 'kelelawar menyusui anaknya dan tubuhnya berambut'],
      answer: 'D',
      hint: 'Klasifikasi tidak didasarkan pada kemampuan terbang saja.',
      solution: 'Kelelawar **menyusui anaknya dan tubuhnya ditutupi rambut**, ciri khas kelas Mamalia. Burung tubuhnya berbulu dan bertelur. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Tumbuhan yang tidak memiliki akar, batang, dan daun sejati serta berkembang biak dengan spora adalah...',
      options: ['tumbuhan lumut', 'tumbuhan paku', 'tumbuhan biji terbuka', 'tumbuhan biji tertutup'],
      answer: 'A',
      hint: 'Tumbuhan paku sudah memiliki akar, batang, dan daun sejati.',
      solution: '**Tumbuhan lumut** belum memiliki akar, batang, dan daun sejati (masih berupa rizoid dan bagian mirip batang/daun) serta berkembang biak dengan spora. Tumbuhan paku sudah memiliki akar, batang, dan daun sejati. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Kunci dikotom: 1a. Bertulang belakang → 2; 1b. Tidak bertulang belakang → Avertebrata. 2a. Bernapas dengan insang seumur hidup → Ikan; 2b. Bernapas dengan paru-paru → 3. 3a. Tubuh berbulu → Burung; 3b. Tubuh bersisik kering → Reptil. Seekor kadal bertulang belakang, bernapas dengan paru-paru, dan bersisik kering. Urutan kunci yang dilalui adalah...',
      options: ['1b → Avertebrata', '1a → 2a → Ikan', '1a → 2b → 3a → Burung', '1a → 2b → 3b → Reptil'],
      answer: 'D',
      hint: 'Ikuti ciri kadal satu per satu dari nomor 1.',
      solution: 'Bertulang belakang → **1a** (ke nomor 2). Bernapas dengan paru-paru → **2b** (ke nomor 3). Bersisik kering → **3b**, yaitu **Reptil**. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Seorang siswa menemukan organisme dengan ciri: bersel banyak, eukariotik, tidak berklorofil, dinding sel dari kitin, dan berkembang biak dengan spora. Organisme tersebut termasuk kingdom...',
      options: ['Monera', 'Plantae', 'Fungi', 'Animalia'],
      answer: 'C',
      hint: 'Dinding sel kitin adalah ciri khas satu kingdom.',
      solution: 'Eukariotik, tidak berklorofil, dan berdinding sel **kitin** adalah ciri kingdom **Fungi** (jamur). Animalia tidak memiliki dinding sel, Plantae berklorofil, Monera prokariotik. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Paus hidup di laut dan bentuk tubuhnya mirip ikan, tetapi dikelompokkan sebagai mamalia. Ciri paus yang menjadi dasar pengelompokan tersebut adalah...',
      options: [
        'bernapas dengan paru-paru dan menyusui anaknya',
        'memiliki sirip dan ekor',
        'hidup di air asin',
        'berukuran sangat besar'
      ],
      answer: 'A',
      hint: 'Pengelompokan didasarkan pada struktur tubuh dan cara hidup yang khas, bukan tempat hidup.',
      solution: 'Paus **bernapas dengan paru-paru** (naik ke permukaan untuk menghirup udara) dan **melahirkan serta menyusui anaknya**. Ciri ini khas mamalia; sirip dan tempat hidup hanyalah bentuk adaptasi. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Mangga (*Mangifera indica*) dan kelapa (*Cocos nucifera*) sama-sama tumbuhan berbiji tertutup. Pernyataan yang benar tentang keduanya adalah...',
      options: [
        'keduanya satu genus karena sama-sama berbiji tertutup',
        'keduanya satu spesies karena sama-sama tumbuhan',
        'keduanya berbeda genus, tetapi berada dalam divisi yang sama',
        'keduanya berbeda kingdom'
      ],
      answer: 'C',
      hint: 'Bandingkan kata pertama nama ilmiahnya, lalu ingat bahwa berbiji tertutup adalah ciri satu divisi.',
      solution: 'Genusnya berbeda (*Mangifera* dan *Cocos*), tetapi keduanya **berbiji tertutup sehingga berada dalam divisi yang sama** (Angiospermae/Spermatophyta) dan kingdom Plantae. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Buah kelapa yang jatuh ke tanah dan biji kacang hijau yang direndam sama-sama tidak bergerak dan tidak bernapas secara nyata. Namun, biji kacang hijau dapat berkecambah ketika diberi air. Cara paling tepat membuktikan bahwa biji kacang hijau adalah makhluk hidup adalah...',
      options: [
        'menimbang biji setiap hari tanpa diberi air',
        'mengamati apakah biji dapat tumbuh menjadi kecambah ketika diberi air dan udara',
        'memotong biji menjadi dua bagian',
        'mengamati warna biji'
      ],
      answer: 'B',
      hint: 'Pilih ciri makhluk hidup yang dapat diamati dengan percobaan.',
      solution: 'Biji yang hidup dapat **tumbuh dan berkembang** menjadi kecambah ketika syarat tumbuhnya (air, udara, suhu) terpenuhi. Pertumbuhan adalah ciri makhluk hidup yang dapat diamati langsung. Jawaban: **B**.'
    })
  ]
});
