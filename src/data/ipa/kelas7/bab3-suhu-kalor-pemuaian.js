import { bab, soal } from '../author.js';

export default bab({
  grade: 7,
  number: 3,
  slug: 'suhu-kalor-pemuaian',
  title: 'Suhu, Kalor, dan Pemuaian',
  element: 'Energi dan perubahannya: kalor dan perpindahannya terhadap perubahan suhu',
  summary: {
    overview: 'Mengapa gelas kaca bisa retak jika dituangi air mendidih? Mengapa rel kereta diberi celah? Bab ini membahas suhu dan cara mengukurnya, kalor sebagai energi yang berpindah karena perbedaan suhu, cara kalor berpindah, serta pemuaian zat ketika dipanaskan.',
    coreConcepts: [
      'Suhu dan Termometer: Suhu menyatakan derajat panas atau dingin suatu benda; satuan SI-nya kelvin (K). Termometer bekerja berdasarkan pemuaian zat cair (raksa atau alkohol). Titik tetap bawah (es mencair) dan titik tetap atas (air mendidih): Celsius 0 dan 100, Reamur 0 dan 80, Fahrenheit 32 dan 212, Kelvin 273 dan 373.',
      'Konversi Skala Suhu: Perbandingan skala C : R : (F − 32) : (K − 273) = 5 : 4 : 9 : 5. Jadi $T_K = T_C + 273$, $T_R = \\frac{4}{5} T_C$, dan $T_F = \\frac{9}{5} T_C + 32$. Untuk termometer buatan X, gunakan perbandingan: $\\dfrac{X - X_{bawah}}{X_{atas} - X_{bawah}} = \\dfrac{C - 0}{100 - 0}$.',
      'Kalor dan Kalor Jenis: Kalor adalah energi yang berpindah dari benda bersuhu tinggi ke benda bersuhu rendah; satuannya joule (J). Kalor untuk menaikkan suhu: $Q = m \\times c \\times \\Delta T$, dengan $c$ kalor jenis (J/kg°C). Kalor jenis air 4.200 J/kg°C, artinya 1 kg air butuh 4.200 J untuk naik 1 °C.',
      'Kalor untuk Perubahan Wujud: Saat berubah wujud, suhu zat tetap walaupun terus diberi kalor. Kalor yang diperlukan $Q = m \\times L$ (kalor lebur atau kalor uap). Contoh: es 0 °C yang dipanaskan tetap 0 °C sampai seluruhnya mencair.',
      'Perpindahan Kalor: Konduksi adalah perpindahan kalor melalui zat tanpa disertai perpindahan partikel (sendok logam ikut panas). Konveksi disertai perpindahan partikel zat cair atau gas (air mendidih bergolak, angin darat dan angin laut). Radiasi tidak memerlukan zat perantara (panas matahari sampai ke bumi). Benda hitam dan kusam menyerap radiasi lebih baik daripada benda putih dan mengilap.',
      'Pemuaian Zat: Hampir semua zat memuai (bertambah ukuran) bila dipanaskan dan menyusut bila didinginkan. Pemuaian gas > zat cair > zat padat. Penerapan: celah pada sambungan rel dan jembatan, pemasangan kaca jendela yang diberi ruang, bimetal pada setrika otomatis dan alarm kebakaran, serta pemasangan ban besi roda pedati dalam keadaan panas.'
    ],
    keyFormulas: [
      { label: 'Perbandingan skala', formula: 'C : R : (F-32) : (K-273) = 5 : 4 : 9 : 5' },
      { label: 'Celsius ke Kelvin & Fahrenheit', formula: 'T_K = T_C + 273 \\qquad T_F = \\tfrac{9}{5}T_C + 32' },
      { label: 'Kalor perubahan suhu', formula: 'Q = m \\times c \\times \\Delta T' },
      { label: 'Kalor perubahan wujud', formula: 'Q = m \\times L' }
    ],
    workedExamples: [
      {
        title: 'Konversi Celsius ke Fahrenheit',
        problem: 'Suhu tubuh normal 37 °C. Berapa nilainya dalam skala Fahrenheit?',
        solution: '$T_F = \\tfrac{9}{5} \\times 37 + 32 = 66{,}6 + 32 = 98{,}6\\ ^\\circ\\text{F}$.'
      },
      {
        title: 'Termometer buatan',
        problem: 'Termometer X memiliki titik tetap bawah 20 °X dan titik tetap atas 220 °X. Jika termometer Celsius menunjukkan 30 °C, berapa angka pada termometer X?',
        solution: 'Rentang X = 220 − 20 = 200 skala, rentang Celsius = 100 skala.\n$\\dfrac{X - 20}{200} = \\dfrac{30}{100} \\Rightarrow X - 20 = 60 \\Rightarrow X = 80\\ ^\\circ\\text{X}$.'
      },
      {
        title: 'Menghitung kalor',
        problem: 'Berapa kalor yang diperlukan untuk memanaskan 2 kg air dari 25 °C menjadi 75 °C? (kalor jenis air 4.200 J/kg°C)',
        solution: '$\\Delta T = 75 - 25 = 50\\ ^\\circ\\text{C}$.\n$Q = m c \\Delta T = 2 \\times 4.200 \\times 50 = 420.000\\ \\text{J} = 420\\ \\text{kJ}$.'
      }
    ],
    misconceptions: [
      'Menganggap suhu dan kalor sama. Suhu adalah ukuran panas-dinginnya benda (°C, K); kalor adalah energi yang berpindah (joule).',
      'Mengira es yang sedang mencair suhunya naik. Selama berubah wujud, kalor dipakai untuk mengubah wujud sehingga suhunya tetap.',
      'Menulis Kelvin dengan derajat (°K). Penulisan yang benar adalah K tanpa tanda derajat.',
      'Menganggap jaket "memberi" panas. Jaket adalah isolator yang menghambat kalor tubuh berpindah ke udara, bukan sumber panas.'
    ],
    tutorTip: 'Untuk termometer apa pun, pakai satu rumus perbandingan: (nilai − titik bawah) dibagi (titik atas − titik bawah) bernilai sama di semua termometer.'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Satuan suhu dalam Sistem Internasional (SI) adalah...',
      options: ['celsius', 'kelvin', 'fahrenheit', 'joule'],
      answer: 'B',
      hint: 'Suhu termasuk besaran pokok.',
      solution: 'Satuan SI suhu adalah **kelvin (K)**. Joule adalah satuan energi/kalor. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Ujung sendok logam yang dicelupkan ke dalam teh panas lama-kelamaan ikut terasa panas. Perpindahan kalor ini terjadi secara...',
      options: ['konveksi', 'radiasi', 'konduksi', 'isolasi'],
      answer: 'C',
      hint: 'Kalor merambat melalui logam tanpa partikel logamnya berpindah.',
      solution: 'Kalor merambat melalui sendok logam tanpa disertai perpindahan partikel logam. Ini adalah **konduksi**. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Panas sinar matahari dapat sampai ke bumi walaupun melewati ruang hampa. Perpindahan kalor ini disebut...',
      options: ['radiasi', 'konduksi', 'konveksi', 'pemuaian'],
      answer: 'A',
      hint: 'Perpindahan kalor yang tidak memerlukan zat perantara.',
      solution: 'Kalor dari matahari berpindah tanpa zat perantara melalui ruang hampa, yaitu secara **radiasi**. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Sambungan rel kereta api diberi celah. Tujuannya adalah...',
      options: [
        'agar kereta dapat melaju lebih cepat',
        'agar rel tidak melengkung ketika memuai pada siang hari yang panas',
        'agar air hujan dapat mengalir',
        'agar rel lebih mudah dipasang'
      ],
      answer: 'B',
      hint: 'Besi memuai saat panas.',
      solution: 'Pada siang hari rel memuai. Celah memberi ruang untuk pemuaian sehingga **rel tidak melengkung**. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Suhu 30 °C jika dinyatakan dalam skala kelvin adalah...',
      options: ['243 K', '273 K', '330 K', '303 K'],
      answer: 'D',
      hint: '$T_K = T_C + 273$.',
      solution: '$T_K = 30 + 273 = 303\\ \\text{K}$. Jawaban: **D**.',
      visual: {
        type: 'thermometer',
        props: {
          title: 'Celsius dan Kelvin',
          caption: '*Kedua termometer dicelupkan ke zat yang sama',
          scales: [
            { name: 'Celsius', bottom: '0', top: '100', reading: '30', level: 0.3 },
            { name: 'Kelvin', bottom: '273', top: '373', reading: '?', level: 0.3 }
          ]
        }
      }
    }),
    soal({
      level: 'Sedang',
      q: 'Suhu sebuah ruangan 25 °C. Jika diukur dengan termometer Fahrenheit, suhunya adalah...',
      options: ['45 °F', '57 °F', '77 °F', '13 °F'],
      answer: 'C',
      hint: '$T_F = \\tfrac{9}{5}T_C + 32$.',
      solution: '$T_F = \\tfrac{9}{5} \\times 25 + 32 = 45 + 32 = 77\\ ^\\circ\\text{F}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Suhu air 60 °C. Dalam skala Reamur, suhu tersebut adalah...',
      options: ['48 °R', '75 °R', '80 °R', '140 °R'],
      answer: 'A',
      hint: '$T_R = \\tfrac{4}{5}T_C$.',
      solution: '$T_R = \\tfrac{4}{5} \\times 60 = 48\\ ^\\circ\\text{R}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Air yang dipanaskan dalam panci bergerak naik-turun membentuk arus. Peristiwa yang prinsipnya sama dengan perpindahan kalor tersebut adalah...',
      options: ['terjadinya angin laut pada siang hari', 'tangan terasa hangat di dekat api unggun', 'gagang panci logam menjadi panas', 'es batu mencair di telapak tangan'],
      answer: 'A',
      hint: 'Pada peristiwa di soal, zat perantaranya ikut berpindah.',
      solution: 'Arus air dalam panci adalah **konveksi**: zat cair yang panas naik, yang dingin turun. Angin laut juga konveksi, yaitu udara dingin dari laut bergerak menggantikan udara panas di darat yang naik. Pilihan B radiasi, C konduksi, D konduksi. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Kalor yang diperlukan untuk menaikkan suhu 1 kg air dari 20 °C menjadi 30 °C adalah... (kalor jenis air 4.200 J/kg°C)',
      options: ['4.200 J', '42.000 J', '420 J', '126.000 J'],
      answer: 'B',
      hint: '$Q = m \\times c \\times \\Delta T$.',
      solution: '$\\Delta T = 30 - 20 = 10\\ ^\\circ\\text{C}$.\n$Q = 1 \\times 4.200 \\times 10 = 42.000\\ \\text{J}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Pada saat es bersuhu 0 °C dipanaskan sampai seluruhnya mencair, suhunya tetap 0 °C. Hal ini terjadi karena...',
      options: [
        'termometer tidak dapat mengukur suhu es',
        'kalor yang diberikan hilang ke udara',
        'kalor digunakan untuk mengubah wujud es menjadi air',
        'es tidak dapat menyerap kalor'
      ],
      answer: 'C',
      hint: 'Ingat kalor lebur.',
      solution: 'Selama berubah wujud, kalor yang diserap digunakan untuk **mengubah wujud** (melepaskan ikatan partikel), bukan untuk menaikkan suhu. Karena itu suhu tetap 0 °C sampai semua es mencair. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Termometer X memiliki titik tetap bawah −10 °X dan titik tetap atas 110 °X. Jika termometer Celsius menunjukkan 40 °C, termometer X menunjukkan...',
      options: ['38 °X', '48 °X', '30 °X', '50 °X'],
      answer: 'A',
      hint: '$\\dfrac{X - (-10)}{110 - (-10)} = \\dfrac{40}{100}$.',
      solution: 'Rentang X = 110 − (−10) = 120 skala.\n$\\dfrac{X + 10}{120} = \\dfrac{40}{100} \\Rightarrow X + 10 = 48 \\Rightarrow X = 38\\ ^\\circ\\text{X}$. Jawaban: **A**.',
      visual: {
        type: 'thermometer',
        props: {
          title: 'Termometer Celsius dan Termometer X',
          caption: '*Kedua termometer mengukur zat yang sama',
          scales: [
            { name: 'Celsius', bottom: '0', top: '100', reading: '40', level: 0.4 },
            { name: 'Termometer X', bottom: '−10', top: '110', reading: '?', level: 0.4 }
          ]
        }
      }
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebanyak 500 g air bersuhu 20 °C dipanaskan hingga 80 °C. Kalor jenis air 4.200 J/kg°C. Kalor yang diperlukan adalah...',
      options: ['126 kJ', '252 kJ', '168 kJ', '1.260 kJ'],
      answer: 'A',
      hint: 'Ubah 500 g menjadi kilogram terlebih dahulu.',
      solution: '$m = 500\\ \\text{g} = 0{,}5\\ \\text{kg}$, $\\Delta T = 80 - 20 = 60\\ ^\\circ\\text{C}$.\n$Q = 0{,}5 \\times 4.200 \\times 60 = 126.000\\ \\text{J} = 126\\ \\text{kJ}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Dua benda bermassa sama, A dan B, menerima kalor yang sama besar. Suhu A naik 10 °C, sedangkan suhu B naik 20 °C. Kesimpulan yang benar adalah...',
      options: [
        'kalor jenis A sama dengan kalor jenis B',
        'kalor jenis A dua kali kalor jenis B',
        'kalor jenis B dua kali kalor jenis A',
        'massa A lebih besar daripada massa B'
      ],
      answer: 'B',
      hint: 'Dari $Q = m c \\Delta T$, jika Q dan m sama, maka $c$ berbanding terbalik dengan $\\Delta T$.',
      solution: 'Karena $Q$ dan $m$ sama, $c_A \\times 10 = c_B \\times 20$, sehingga $c_A = 2 c_B$. Benda yang kalor jenisnya besar lebih sulit naik suhunya. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Keping bimetal terbuat dari kuningan dan besi yang dikeling. Kuningan lebih mudah memuai daripada besi. Saat dipanaskan, keping bimetal akan...',
      options: [
        'tetap lurus',
        'melengkung ke arah kuningan',
        'memendek ke arah kuningan',
        'melengkung ke arah besi'
      ],
      answer: 'D',
      hint: 'Logam yang memuai lebih panjang berada di sisi luar lengkungan.',
      solution: 'Kuningan memuai lebih panjang daripada besi, sehingga kuningan berada di sisi luar lengkungan dan bimetal **melengkung ke arah besi** (logam yang pemuaiannya lebih kecil). Prinsip ini dipakai pada setrika otomatis dan alarm kebakaran. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Rani memiliki dua kaleng minuman yang sama: satu dicat hitam kusam, satu dicat putih mengilap. Keduanya berisi air dingin dan dijemur bersamaan di bawah matahari. Setelah 30 menit, hasil yang paling mungkin adalah...',
      options: [
        'suhu air di kedua kaleng sama',
        'air di kaleng putih lebih hangat karena memantulkan panas ke dalam',
        'air di kaleng hitam lebih hangat karena menyerap radiasi lebih baik',
        'air di kaleng hitam membeku'
      ],
      answer: 'C',
      hint: 'Warna permukaan memengaruhi penyerapan radiasi.',
      solution: 'Permukaan **hitam dan kusam adalah penyerap radiasi yang baik**, sedangkan permukaan putih mengilap lebih banyak memantulkan radiasi. Jadi air di kaleng hitam lebih cepat hangat. Jawaban: **C**.'
    })
  ]
});
