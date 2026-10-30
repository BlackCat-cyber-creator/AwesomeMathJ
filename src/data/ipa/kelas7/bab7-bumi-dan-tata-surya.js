import { bab, soal } from '../author.js';

export default bab({
  grade: 7,
  number: 7,
  slug: 'bumi-dan-tata-surya',
  title: 'Bumi dan Tata Surya',
  element: 'Bumi dan antariksa: posisi relatif bumi–bulan–matahari',
  summary: {
    overview: 'Bumi adalah salah satu anggota tata surya yang berpusat pada matahari. Bab ini membahas anggota tata surya, gerak rotasi dan revolusi bumi beserta akibatnya, gerak bulan, fase bulan, gerhana, pasang surut, serta atmosfer bumi dan efek rumah kaca.',
    coreConcepts: [
      'Anggota Tata Surya: Matahari sebagai pusat dan sumber energi; delapan planet berurutan dari yang terdekat: Merkurius, Venus, Bumi, Mars, Jupiter, Saturnus, Uranus, Neptunus. Planet dalam (Merkurius, Venus) orbitnya di dalam orbit bumi; planet luar (Mars sampai Neptunus) di luar orbit bumi. Anggota lain: satelit, asteroid (sabuk asteroid antara Mars dan Jupiter), komet (berekor, menjauhi matahari), dan meteoroid (disebut meteor saat terbakar di atmosfer, meteorit jika sampai ke permukaan bumi).',
      'Rotasi Bumi: Bumi berputar pada porosnya dari barat ke timur selama sekitar 24 jam. Akibatnya: pergantian siang dan malam, gerak semu harian matahari (terbit di timur, terbenam di barat), dan perbedaan waktu. Setiap 15° bujur berbeda waktu 1 jam (360° : 24 jam). Indonesia memiliki tiga zona: WIB (UTC+7), WITA (UTC+8), dan WIT (UTC+9).',
      'Revolusi Bumi: Bumi mengelilingi matahari selama sekitar 365¼ hari (satu tahun) dengan poros miring 23,5°. Akibatnya: pergantian musim di belahan bumi utara dan selatan, gerak semu tahunan matahari (antara 23,5° LU dan 23,5° LS), perbedaan lama siang dan malam, serta terlihatnya rasi bintang yang berbeda tiap bulan. Tahun kabisat (366 hari) muncul setiap 4 tahun dari sisa ¼ hari.',
      'Gerak Bulan dan Fase Bulan: Bulan berotasi dan berevolusi mengelilingi bumi dengan periode sama (sekitar 27,3 hari), sehingga sisi bulan yang menghadap bumi selalu sama. Fase bulan (bulan baru, sabit, kuartal pertama, purnama, kuartal akhir) terjadi karena posisi bulan terhadap bumi dan matahari berubah, sehingga bagian bulan yang terkena cahaya matahari dan terlihat dari bumi berubah. Satu siklus dari purnama ke purnama sekitar 29,5 hari.',
      'Gerhana dan Pasang Surut: Gerhana matahari terjadi saat bulan berada di antara matahari dan bumi (fase bulan baru), sehingga bayangan bulan jatuh ke bumi. Gerhana bulan terjadi saat bumi berada di antara matahari dan bulan (fase purnama), sehingga bulan masuk bayangan bumi. Pasang surut air laut disebabkan terutama oleh gaya gravitasi bulan; pasang tertinggi (pasang purnama) terjadi saat bulan baru dan purnama karena matahari, bumi, dan bulan segaris.',
      'Atmosfer dan Efek Rumah Kaca: Atmosfer melindungi bumi dari radiasi berbahaya dan menjaga suhu. Gas rumah kaca (karbon dioksida, metana, uap air) menahan sebagian panas yang dipantulkan bumi. Pertambahan gas rumah kaca dari pembakaran bahan bakar fosil dan penebangan hutan memperkuat efek ini sehingga suhu rata-rata bumi naik (pemanasan global) dan memicu perubahan iklim.'
    ],
    keyFormulas: [
      { label: 'Perbedaan waktu karena bujur', formula: '\\Delta t = \\dfrac{\\Delta \\text{bujur}}{15^\\circ} \\ \\text{jam}' },
      { label: 'Urutan planet', formula: '\\text{Me – V – B – Ma – J – S – U – N}' },
      { label: 'Posisi saat gerhana', formula: '\\text{G. matahari: M – Bl – B} \\qquad \\text{G. bulan: M – B – Bl}' }
    ],
    workedExamples: [
      {
        title: 'Menghitung perbedaan waktu',
        problem: 'Kota A terletak di 105° BT dan kota B di 135° BT. Jika di kota A pukul 08.00, pukul berapa di kota B?',
        solution: 'Selisih bujur = 135° − 105° = 30°. Selisih waktu = 30° : 15° = 2 jam. Kota B lebih ke timur sehingga lebih dahulu: 08.00 + 2 jam = **10.00**.'
      },
      {
        title: 'Konversi WIB ke WIT',
        problem: 'Pertandingan di Jakarta dimulai pukul 19.30 WIB. Pukul berapa siaran itu di Jayapura (WIT)?',
        solution: 'WIT = WIB + 2 jam, jadi 19.30 + 2 jam = **21.30 WIT**.'
      },
      {
        title: 'Menjelaskan gerhana',
        problem: 'Mengapa gerhana matahari hanya dapat terjadi pada fase bulan baru?',
        solution: 'Gerhana matahari memerlukan posisi matahari – bulan – bumi segaris dengan bulan di tengah. Posisi bulan di antara matahari dan bumi itulah fase bulan baru.'
      }
    ],
    misconceptions: [
      'Menganggap matahari benar-benar bergerak dari timur ke barat setiap hari. Yang bergerak adalah bumi (rotasi), sehingga matahari tampak bergerak (gerak semu).',
      'Menganggap fase bulan disebabkan oleh bayangan bumi. Fase bulan terjadi karena perubahan sudut pandang terhadap bagian bulan yang diterangi matahari; bayangan bumi hanya menutupi bulan saat gerhana bulan.',
      'Menganggap musim terjadi karena jarak bumi ke matahari berubah. Musim terutama disebabkan oleh kemiringan poros bumi saat berevolusi.'
    ],
    tutorTip: 'Ingat urutan planet dengan kalimat "Mari Venus Bumi Makan Jambu Sambil Udara Nyaman" (Merkurius, Venus, Bumi, Mars, Jupiter, Saturnus, Uranus, Neptunus).'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Planet yang orbitnya terletak di antara orbit Bumi dan orbit Jupiter adalah...',
      options: ['Venus', 'Saturnus', 'Mars', 'Merkurius'],
      answer: 'C',
      hint: 'Urutkan planet dari matahari.',
      solution: 'Urutan: Merkurius, Venus, Bumi, **Mars**, Jupiter, ... Jadi planet di antara Bumi dan Jupiter adalah **Mars**. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Pergantian siang dan malam disebabkan oleh...',
      options: ['revolusi bumi', 'rotasi bumi', 'revolusi bulan', 'rotasi matahari'],
      answer: 'B',
      hint: 'Peristiwa ini berlangsung setiap 24 jam.',
      solution: 'Bumi berputar pada porosnya (**rotasi**) sehingga bagian bumi yang menghadap matahari mengalami siang dan yang membelakangi mengalami malam. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Benda langit yang memiliki ekor dan ekornya selalu menjauhi matahari adalah...',
      options: ['komet', 'asteroid', 'meteorit', 'satelit'],
      answer: 'A',
      hint: 'Ekornya terbentuk dari es dan debu yang menguap ketika mendekati matahari.',
      solution: '**Komet** tersusun dari es dan debu. Saat mendekati matahari, materialnya menguap membentuk ekor yang terdorong menjauhi matahari. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Gerhana bulan terjadi ketika...',
      options: [
        'bulan berada di antara matahari dan bumi',
        'matahari berada di antara bumi dan bulan',
        'bumi berada di antara matahari dan bulan',
        'bulan berada pada fase kuartal pertama'
      ],
      answer: 'C',
      hint: 'Bulan masuk ke bayangan bumi.',
      solution: 'Pada gerhana bulan, **bumi berada di antara matahari dan bulan** sehingga bayangan bumi menutupi bulan. Ini terjadi saat fase purnama. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Waktu yang diperlukan bumi untuk satu kali mengelilingi matahari adalah sekitar...',
      options: ['24 jam', '29,5 hari', '27,3 hari', '365¼ hari'],
      answer: 'D',
      hint: 'Periode revolusi bumi menjadi dasar satu tahun.',
      solution: 'Satu kali revolusi bumi memerlukan sekitar **365¼ hari**, yang menjadi dasar kalender Masehi (sisa ¼ hari membentuk tahun kabisat). Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Kota P terletak pada 110° BT dan kota Q pada 125° BT. Jika di kota P pukul 09.00, waktu di kota Q adalah...',
      options: ['08.00', '10.00', '09.15', '11.00'],
      answer: 'B',
      hint: 'Setiap 15° bujur berbeda 1 jam; kota yang lebih timur lebih dahulu.',
      solution: 'Selisih bujur = 125° − 110° = 15° → selisih 1 jam. Kota Q lebih timur, jadi waktunya lebih dahulu: 09.00 + 1 jam = **10.00**. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah acara televisi disiarkan langsung dari Makassar (WITA) pukul 20.00. Penonton di Medan (WIB) menyaksikannya pukul...',
      options: ['19.00', '21.00', '18.00', '22.00'],
      answer: 'A',
      hint: 'WIB = WITA − 1 jam.',
      solution: 'WITA lebih cepat 1 jam daripada WIB, sehingga 20.00 WITA = 20.00 − 1 jam = **19.00 WIB**. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Dari bumi, kita selalu melihat sisi bulan yang sama. Hal ini terjadi karena...',
      options: [
        'bulan tidak berotasi',
        'bulan hanya berevolusi mengelilingi matahari',
        'kala rotasi bulan sama dengan kala revolusinya mengelilingi bumi',
        'bumi tidak berotasi'
      ],
      answer: 'C',
      hint: 'Bulan berputar tepat satu kali setiap kali mengelilingi bumi.',
      solution: 'Bulan berotasi satu kali dalam waktu yang **sama dengan satu kali revolusinya** (sekitar 27,3 hari), sehingga sisi yang menghadap bumi selalu sama. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Pergantian musim hujan dan musim kemarau di Indonesia serta musim panas dan dingin di belahan bumi utara terutama disebabkan oleh...',
      options: [
        'rotasi bumi',
        'revolusi bumi dengan poros yang miring',
        'gravitasi bulan',
        'jarak bumi–matahari yang berubah setiap hari'
      ],
      answer: 'B',
      hint: 'Poros bumi miring 23,5° saat mengelilingi matahari.',
      solution: 'Selama **revolusi**, poros bumi yang **miring 23,5°** membuat belahan bumi utara dan selatan bergantian lebih banyak menerima sinar matahari. Hal ini menggeser angin muson dan memicu pergantian musim. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Pasang naik tertinggi air laut (pasang purnama) terjadi pada saat...',
      options: [
        'bulan baru dan bulan purnama',
        'bulan kuartal pertama dan kuartal akhir',
        'bulan sabit',
        'siang hari saja'
      ],
      answer: 'A',
      hint: 'Gaya tarik bulan dan matahari saling menguatkan saat ketiganya segaris.',
      solution: 'Saat **bulan baru dan purnama**, matahari, bumi, dan bulan segaris sehingga gaya tarik bulan dan matahari saling menguatkan dan terjadi pasang tertinggi. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah kota terletak pada 120° BT. Waktu di kota itu jika di Greenwich (0°) pukul 01.00 adalah...',
      options: ['07.00', '08.00', '09.00', '13.00'],
      answer: 'C',
      hint: 'Hitung selisih jam dari selisih bujur 120°.',
      solution: 'Selisih waktu = 120° : 15° = 8 jam. Kota berada di timur Greenwich, jadi lebih dahulu: 01.00 + 8 jam = **09.00**. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Seorang siswa mengamati bulan purnama pada tanggal 3 Maret. Perkiraan tanggal ia dapat melihat bulan purnama berikutnya adalah sekitar...',
      options: ['10 Maret', '17 Maret', '1 April', '30 Maret'],
      answer: 'C',
      hint: 'Satu siklus fase bulan sekitar 29,5 hari.',
      solution: 'Purnama berulang sekitar **29,5 hari** kemudian. Dari 3 Maret ditambah sekitar 29–30 hari (Maret memiliki 31 hari) diperoleh sekitar **1 April**. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Gerhana matahari tidak terjadi setiap kali bulan berada pada fase bulan baru. Penjelasan yang tepat adalah...',
      options: [
        'bulan terlalu kecil untuk menutupi matahari',
        'bidang orbit bulan miring sekitar 5° terhadap bidang orbit bumi, sehingga ketiganya jarang tepat segaris',
        'bulan tidak memantulkan cahaya matahari',
        'bumi berotasi terlalu cepat'
      ],
      answer: 'B',
      hint: 'Gerhana memerlukan posisi yang benar-benar segaris.',
      solution: 'Orbit bulan **miring sekitar 5°** terhadap orbit bumi. Pada sebagian besar bulan baru, bayangan bulan lewat di atas atau di bawah bumi, sehingga gerhana hanya terjadi jika ketiganya tepat segaris. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Bulan hampir tidak memiliki atmosfer. Dibandingkan dengan bumi, akibatnya perbedaan suhu siang dan malam di bulan...',
      options: [
        'jauh lebih kecil karena tidak ada angin',
        'sama dengan di bumi',
        'tidak ada karena bulan tidak berotasi',
        'jauh lebih besar karena tidak ada lapisan yang menahan dan menyebarkan panas'
      ],
      answer: 'D',
      hint: 'Atmosfer berperan seperti selimut.',
      solution: 'Atmosfer bumi menahan sebagian panas pada malam hari dan menyaring sinar matahari pada siang hari. Tanpa atmosfer, permukaan bulan sangat panas saat siang dan sangat dingin saat malam, sehingga **perbedaan suhunya jauh lebih besar**. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Kegiatan berikut yang paling berperan menambah gas rumah kaca sehingga memperkuat pemanasan global adalah...',
      options: [
        'menanam pohon di lahan kosong',
        'membakar bahan bakar fosil untuk kendaraan dan pembangkit listrik',
        'menggunakan panel surya',
        'mendaur ulang sampah plastik'
      ],
      answer: 'B',
      hint: 'Gas rumah kaca utama adalah karbon dioksida.',
      solution: 'Pembakaran **bahan bakar fosil** (bensin, solar, batu bara) menghasilkan banyak **karbon dioksida**, gas rumah kaca utama yang menahan panas di atmosfer. Pilihan lain justru mengurangi emisi. Jawaban: **B**.'
    })
  ]
});
