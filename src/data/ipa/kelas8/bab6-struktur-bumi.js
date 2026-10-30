import { bab, soal } from '../author.js';

export default bab({
  grade: 8,
  number: 6,
  slug: 'struktur-bumi',
  title: 'Struktur Bumi dan Perkembangannya',
  element: 'Bumi dan antariksa: struktur bumi, gempa, dan gunung api',
  summary: {
    overview: 'Indonesia sering mengalami gempa bumi dan letusan gunung api karena berada di pertemuan lempeng-lempeng bumi. Bab ini membahas lapisan bumi, gerak lempeng tektonik, gempa bumi dan tsunami beserta mitigasinya, gunung api, batuan dan siklusnya, serta tanah dan pelapukan.',
    coreConcepts: [
      'Lapisan Bumi: Dari luar ke dalam: kerak bumi (padat, tipis, tempat hidup), mantel (sangat tebal, sebagian cair kental), inti luar (cair, berisi besi dan nikel), dan inti dalam (padat karena tekanan sangat tinggi, suhu sangat panas). Litosfer adalah kerak dan bagian atas mantel yang padat; di bawahnya ada astenosfer yang plastis sehingga lempeng dapat bergerak di atasnya.',
      'Lempeng Tektonik: Litosfer terpecah menjadi lempeng-lempeng yang bergerak karena arus konveksi di mantel. Batas lempeng: divergen (saling menjauh, membentuk punggung tengah samudra), konvergen (saling bertumbukan, membentuk palung, gunung, dan jalur gempa), dan transform (saling bergeser mendatar). Indonesia terletak di pertemuan tiga lempeng besar: Indo-Australia, Eurasia, dan Pasifik.',
      'Gempa Bumi: Gempa tektonik terjadi karena pelepasan energi akibat gerak lempeng; gempa vulkanik karena aktivitas gunung api. Hiposentrum adalah pusat gempa di dalam bumi, episentrum adalah titik di permukaan bumi tepat di atasnya. Getaran gempa dicatat oleh seismograf dan kekuatannya dinyatakan dalam magnitudo. Saat gempa: lindungi kepala, berlindung di bawah meja yang kuat, jauhi kaca, lalu menuju lapangan terbuka.',
      'Tsunami dan Gunung Api: Tsunami adalah gelombang laut besar akibat gempa dasar laut, letusan gunung api bawah laut, atau longsor bawah laut. Tanda alam: air laut tiba-tiba surut jauh setelah gempa kuat, sehingga harus segera mengungsi ke tempat tinggi. Gunung api terbentuk dari magma yang naik ke permukaan; banyak di jalur pertemuan lempeng (Cincin Api Pasifik). Letusan berbahaya (awan panas, lahar) tetapi abunya menyuburkan tanah.',
      'Batuan dan Siklus Batuan: Batuan beku terbentuk dari magma yang membeku (granit, basalt, batu apung). Batuan sedimen terbentuk dari endapan hasil pelapukan yang memadat (batu pasir, batu kapur) dan dapat mengandung fosil. Batuan metamorf terbentuk dari batuan lain yang berubah karena suhu dan tekanan tinggi (marmer dari batu kapur, batu sabak). Ketiganya dapat berubah satu sama lain dalam siklus batuan.',
      'Tanah dan Pelapukan: Tanah terbentuk dari pelapukan batuan dan bahan organik selama ribuan tahun. Pelapukan fisika (perubahan suhu, akar menembus batuan), kimia (batu kapur larut oleh air hujan yang mengandung karbon dioksida), dan biologi (lumut dan mikroorganisme). Lapisan teratas (humus) paling subur. Erosi (pengikisan tanah oleh air atau angin) dicegah dengan reboisasi dan terasering.'
    ],
    keyFormulas: [
      { label: 'Lapisan bumi (luar → dalam)', formula: '\\text{kerak} \\to \\text{mantel} \\to \\text{inti luar (cair)} \\to \\text{inti dalam (padat)}' },
      { label: 'Siklus batuan', formula: '\\text{beku} \\to \\text{sedimen} \\to \\text{metamorf} \\to \\text{magma} \\to \\text{beku}' }
    ],
    workedExamples: [
      {
        title: 'Membedakan episentrum dan hiposentrum',
        problem: 'Sebuah gempa berpusat 10 km di bawah dasar laut di selatan Jawa. Mana hiposentrum dan mana episentrumnya?',
        solution: 'Hiposentrum = titik pusat gempa 10 km di dalam bumi. Episentrum = titik di permukaan (dasar laut) tepat di atas hiposentrum. Karena episentrumnya di laut, gempa ini perlu diwaspadai dapat memicu tsunami.'
      },
      {
        title: 'Mengenali jenis batuan',
        problem: 'Batu apung ringan, berpori, dan dapat terapung di air. Batuan jenis apa dan bagaimana terbentuknya?',
        solution: 'Batu apung adalah **batuan beku luar**. Lava yang penuh gas membeku sangat cepat di permukaan sehingga terbentuk banyak pori (rongga udara).'
      },
      {
        title: 'Tindakan saat tanda tsunami',
        problem: 'Setelah gempa kuat, warga pantai melihat air laut surut jauh dan banyak ikan menggelepar. Apa yang harus dilakukan?',
        solution: 'Surutnya air laut secara tiba-tiba adalah tanda tsunami. Warga harus **segera mengungsi ke tempat tinggi** melalui jalur evakuasi, bukan memungut ikan.'
      }
    ],
    misconceptions: [
      'Menganggap inti bumi seluruhnya cair. Inti luar cair, tetapi inti dalam padat karena tekanan yang sangat besar.',
      'Menganggap gempa terjadi di episentrum. Sumber gempa ada di hiposentrum di dalam bumi; episentrum hanya proyeksinya di permukaan.',
      'Menganggap letusan gunung api hanya merugikan. Abu vulkanik dalam jangka panjang menyuburkan tanah dan gunung api menyimpan energi panas bumi.'
    ],
    tutorTip: 'Ingat urutan batuan dari cara terbentuknya: BEKU dari magma, SEDIMEN dari endapan, METAMORF dari "metamorfosis" batuan lain karena panas dan tekanan.'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Lapisan bumi yang berwujud cair dan tersusun terutama atas besi dan nikel adalah...',
      options: ['kerak bumi', 'inti luar', 'inti dalam', 'litosfer'],
      answer: 'B',
      hint: 'Ada dua bagian inti bumi; salah satunya cair.',
      solution: '**Inti luar** berwujud cair dan tersusun atas besi dan nikel. Inti dalam padat. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Titik di permukaan bumi yang terletak tepat di atas pusat gempa disebut...',
      options: ['hiposentrum', 'seismograf', 'episentrum', 'magnitudo'],
      answer: 'C',
      hint: '"Epi" berarti di atas.',
      solution: 'Titik di permukaan tepat di atas pusat gempa disebut **episentrum**. Pusat gempa di dalam bumi disebut hiposentrum. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Batuan yang terbentuk dari magma yang membeku disebut batuan...',
      options: ['beku', 'sedimen', 'metamorf', 'fosil'],
      answer: 'A',
      hint: 'Magma yang mendingin dan mengeras.',
      solution: 'Magma yang mendingin dan membeku membentuk **batuan beku**, contoh granit dan basalt. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Alat yang digunakan untuk mencatat getaran gempa bumi adalah...',
      options: ['barometer', 'termometer', 'anemometer', 'seismograf'],
      answer: 'D',
      hint: '"Seismos" berarti gempa.',
      solution: '**Seismograf** mencatat getaran gempa (hasilnya disebut seismogram). Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Saat terjadi gempa bumi dan kamu berada di dalam kelas, tindakan pertama yang paling tepat adalah...',
      options: [
        'berlari ke luar melalui tangga sambil berdesakan',
        'berlindung di bawah meja yang kuat sambil melindungi kepala',
        'berdiri di dekat jendela kaca',
        'menggunakan lift agar cepat turun'
      ],
      answer: 'B',
      hint: 'Prioritas pertama adalah melindungi kepala dari benda jatuh.',
      solution: 'Saat guncangan, **berlindung di bawah meja yang kuat dan lindungi kepala**. Setelah guncangan berhenti, keluar dengan tertib ke lapangan terbuka. Jauhi kaca dan jangan memakai lift. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Indonesia memiliki banyak gunung api dan sering mengalami gempa karena...',
      options: [
        'terletak di garis khatulistiwa',
        'memiliki banyak pulau',
        'berada di pertemuan lempeng Indo-Australia, Eurasia, dan Pasifik',
        'memiliki iklim tropis'
      ],
      answer: 'C',
      hint: 'Gempa dan gunung api banyak terjadi di batas lempeng.',
      solution: 'Indonesia berada di **pertemuan tiga lempeng besar** yang terus bergerak dan bertumbukan, sehingga banyak terjadi gempa tektonik dan terbentuk jalur gunung api. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Marmer terbentuk dari batu kapur yang mengalami suhu dan tekanan sangat tinggi. Marmer termasuk batuan...',
      options: ['sedimen', 'metamorf', 'beku dalam', 'beku luar'],
      answer: 'B',
      hint: 'Batuan yang berubah bentuk dari batuan lain.',
      solution: 'Batuan yang terbentuk dari perubahan batuan lain akibat suhu dan tekanan tinggi disebut **batuan metamorf**. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Akar pohon yang tumbuh di celah batu lama-kelamaan membuat batu itu retak dan pecah. Peristiwa ini termasuk pelapukan...',
      options: ['kimia', 'fisika', 'biologi', 'erosi'],
      answer: 'C',
      hint: 'Pelapukan yang disebabkan makhluk hidup.',
      solution: 'Batu pecah karena aktivitas **makhluk hidup** (akar pohon), sehingga termasuk **pelapukan biologi**. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Batas lempeng tempat dua lempeng saling bertumbukan dan dapat membentuk palung laut serta pegunungan disebut batas...',
      options: ['konvergen', 'divergen', 'transform', 'paralel'],
      answer: 'A',
      hint: '"Konvergen" berarti saling mendekat.',
      solution: 'Pada batas **konvergen**, lempeng saling mendekat dan bertumbukan; lempeng samudra menunjam membentuk palung, dan terbentuk jalur gunung api. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Terasering pada lahan pertanian di lereng bukit bertujuan untuk...',
      options: ['mempercepat aliran air hujan', 'mencegah erosi tanah', 'mempermudah pelapukan batuan', 'menambah kemiringan lereng'],
      answer: 'B',
      hint: 'Bentuk bertingkat memperlambat aliran air.',
      solution: 'Terasering membuat lereng bertingkat sehingga aliran air hujan melambat dan tidak mengikis tanah. Tujuannya **mencegah erosi**. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Setelah gempa kuat di pantai, air laut tiba-tiba surut jauh. Tindakan yang paling tepat dan alasannya adalah...',
      options: [
        'mengumpulkan ikan di pantai karena air sedang surut',
        'menunggu informasi di pantai karena surut tidak berbahaya',
        'segera mengungsi ke tempat tinggi karena surut mendadak adalah tanda tsunami akan datang',
        'berenang ke tengah laut agar terhindar dari gempa susulan'
      ],
      answer: 'C',
      hint: 'Tsunami sering didahului surutnya air laut.',
      solution: 'Surut mendadak setelah gempa kuat adalah **tanda alam tsunami**. Gelombang besar dapat datang dalam hitungan menit, sehingga harus **segera mengungsi ke tempat tinggi**. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Lempeng tektonik dapat bergerak perlahan di atas lapisan di bawahnya. Penjelasan yang paling tepat adalah...',
      options: [
        'lempeng terapung di atas inti luar yang cair',
        'astenosfer bersifat plastis dan arus konveksi di mantel menggerakkan lempeng',
        'lempeng didorong angin dan arus laut',
        'gravitasi bulan menarik lempeng'
      ],
      answer: 'B',
      hint: 'Lempeng berada di atas astenosfer, bukan di atas inti.',
      solution: 'Lempeng (litosfer) berada di atas **astenosfer yang plastis**. **Arus konveksi** batuan panas di mantel mendorong lempeng bergerak beberapa sentimeter per tahun. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Seorang siswa menemukan batuan berlapis-lapis yang di dalamnya terdapat cetakan cangkang kerang. Batuan tersebut paling mungkin adalah batuan...',
      options: ['beku dalam', 'beku luar', 'metamorf', 'sedimen'],
      answer: 'D',
      hint: 'Fosil ikut terkubur dalam endapan yang memadat.',
      solution: 'Lapisan-lapisan dan **fosil** adalah ciri **batuan sedimen**, yang terbentuk dari endapan yang memadat dan dapat mengubur sisa makhluk hidup. Batuan beku dan metamorf terbentuk pada suhu tinggi yang merusak fosil. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Daerah di sekitar gunung api aktif seperti lereng Merapi umumnya sangat subur. Hal ini disebabkan...',
      options: [
        'abu vulkanik kaya mineral yang lama-kelamaan melapuk menjadi tanah subur',
        'suhu di sekitar gunung api selalu dingin',
        'gunung api tidak pernah meletus',
        'tanah di sekitarnya tidak pernah terkena hujan'
      ],
      answer: 'A',
      hint: 'Pikirkan dampak jangka panjang dari letusan.',
      solution: 'Abu dan material vulkanik mengandung banyak **mineral** (seperti kalium dan fosfor). Setelah melapuk, material ini membentuk tanah yang sangat subur. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Gua-gua kapur dan stalaktit terbentuk karena air hujan yang sedikit asam (mengandung karbon dioksida) melarutkan batu kapur. Proses ini termasuk...',
      options: ['pelapukan fisika', 'pelapukan biologi', 'pelapukan kimia', 'erosi oleh angin'],
      answer: 'C',
      hint: 'Ada reaksi antara air asam dan batu kapur.',
      solution: 'Air hujan yang mengandung CO₂ **bereaksi** dengan batu kapur sehingga batu kapur larut. Karena melibatkan reaksi kimia, proses ini adalah **pelapukan kimia**. Jawaban: **C**.'
    })
  ]
});
