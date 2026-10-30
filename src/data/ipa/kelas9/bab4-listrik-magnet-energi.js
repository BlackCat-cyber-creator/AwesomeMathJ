import { bab, soal } from '../author.js';

export default bab({
  grade: 9,
  number: 4,
  slug: 'listrik-magnet-energi-alternatif',
  title: 'Listrik, Magnet, dan Sumber Energi Alternatif',
  element: 'Energi dan perubahannya: kelistrikan, kemagnetan, dan energi ramah lingkungan',
  summary: {
    overview: 'Hampir semua peralatan di rumah memakai listrik, dan listrik dihasilkan dengan memanfaatkan kemagnetan. Bab ini membahas listrik statis, arus listrik dan hukum Ohm, rangkaian seri dan paralel, energi dan daya listrik, kemagnetan dan induksi elektromagnetik, serta sumber energi alternatif yang ramah lingkungan.',
    coreConcepts: [
      'Listrik Statis: Benda dapat bermuatan listrik karena menangkap atau melepas elektron, misalnya penggaris plastik yang digosok ke rambut. Muatan sejenis tolak-menolak, muatan berlainan jenis tarik-menarik. Elektroskop digunakan untuk mendeteksi muatan. Petir adalah pelepasan muatan listrik statis yang sangat besar dari awan; penangkal petir mengalirkannya dengan aman ke tanah.',
      'Arus Listrik dan Hukum Ohm: Arus listrik adalah aliran muatan dalam rangkaian tertutup, diukur dengan amperemeter (dipasang seri) dalam ampere (A). Beda potensial (tegangan) diukur dengan voltmeter (dipasang paralel) dalam volt (V). Hukum Ohm: $V = I \\times R$, dengan $R$ hambatan dalam ohm (Ω). Konduktor mudah menghantarkan listrik (tembaga, besi), isolator sulit (plastik, karet, kayu kering).',
      'Rangkaian Seri dan Paralel: Pada rangkaian seri, arus di setiap hambatan sama dan $R_s = R_1 + R_2 + \\dots$; jika satu lampu putus, semua padam. Pada rangkaian paralel, tegangan di setiap cabang sama dan $\\dfrac{1}{R_p} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2} + \\dots$; jika satu lampu putus, lampu lain tetap menyala. Instalasi listrik rumah memakai rangkaian paralel.',
      'Energi dan Daya Listrik: Energi listrik $W = V \\times I \\times t$ (joule). Daya listrik $P = V \\times I$ (watt). PLN menghitung pemakaian dalam kilowatt jam (kWh): energi (kWh) = daya (kW) × waktu (jam). Biaya = energi (kWh) × tarif per kWh. Hemat listrik: matikan alat yang tidak dipakai, gunakan lampu LED, dan manfaatkan cahaya matahari.',
      'Kemagnetan dan Induksi Elektromagnetik: Magnet memiliki kutub utara dan selatan; kutub sejenis tolak-menolak, berlainan tarik-menarik. Benda feromagnetik (besi, baja, nikel) dapat dibuat magnet dengan cara menggosok, induksi, atau dialiri arus listrik (elektromagnet). Bumi bersifat magnet sehingga jarum kompas menunjuk utara–selatan. Elektromagnet makin kuat jika lilitan atau arus diperbesar dan diberi inti besi. Induksi elektromagnetik: perubahan medan magnet di sekitar kumparan menghasilkan arus listrik; prinsip ini dipakai pada generator dan dinamo sepeda.',
      'Sumber Energi Alternatif: Bahan bakar fosil (minyak bumi, batu bara, gas alam) tidak terbarukan dan menghasilkan gas rumah kaca. Sumber energi terbarukan: energi surya (panel surya), angin (kincir/turbin angin), air (PLTA, mikrohidro), panas bumi (PLTP, banyak di Indonesia karena banyak gunung api), biomassa dan biogas (kotoran ternak, sampah organik), serta gelombang laut. Pemanfaatannya mengurangi polusi dan membantu mengatasi perubahan iklim.'
    ],
    keyFormulas: [
      { label: 'Hukum Ohm', formula: 'V = I \\times R' },
      { label: 'Hambatan seri & paralel', formula: 'R_s = R_1 + R_2 \\qquad \\dfrac{1}{R_p} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2}' },
      { label: 'Energi & daya listrik', formula: 'W = V I t \\qquad P = V I' },
      { label: 'Energi dalam kWh', formula: 'W\\ (\\text{kWh}) = P\\ (\\text{kW}) \\times t\\ (\\text{jam})' }
    ],
    workedExamples: [
      {
        title: 'Hukum Ohm',
        problem: 'Sebuah lampu dengan hambatan 30 Ω dipasang pada tegangan 6 V. Berapa kuat arus yang mengalir?',
        solution: '$I = V : R = 6 : 30 = 0{,}2\\ \\text{A}$.'
      },
      {
        title: 'Hambatan pengganti',
        problem: 'Dua hambatan 6 Ω dan 3 Ω disusun (a) seri, (b) paralel. Tentukan hambatan penggantinya.',
        solution: '(a) Seri: $R_s = 6 + 3 = 9\\ \\Omega$.\n(b) Paralel: $\\dfrac{1}{R_p} = \\dfrac{1}{6} + \\dfrac{1}{3} = \\dfrac{1 + 2}{6} = \\dfrac{3}{6}$, sehingga $R_p = 2\\ \\Omega$.'
      },
      {
        title: 'Menghitung biaya listrik',
        problem: 'Sebuah televisi 100 W menyala 5 jam setiap hari. Tarif listrik Rp1.500 per kWh. Berapa biaya untuk 30 hari?',
        solution: 'Energi per hari = 0,1 kW × 5 jam = 0,5 kWh. Selama 30 hari = 15 kWh. Biaya = 15 × Rp1.500 = **Rp22.500**.'
      }
    ],
    misconceptions: [
      'Menganggap arus listrik "habis" setelah melewati lampu. Arus yang masuk sama dengan arus yang keluar; yang berubah adalah energi listrik menjadi cahaya dan kalor.',
      'Menganggap hambatan paralel lebih besar daripada hambatan terkecilnya. Hambatan pengganti paralel selalu lebih kecil daripada hambatan terkecil.',
      'Menganggap semua logam dapat ditarik magnet. Aluminium, tembaga, dan emas tidak ditarik magnet; yang tertarik kuat adalah besi, baja, nikel, dan kobalt.'
    ],
    tutorTip: 'Untuk hukum Ohm, pakai segitiga "V di atas, I dan R di bawah": tutup besaran yang dicari. V = I × R, I = V : R, R = V : I.'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Dua benda bermuatan listrik negatif didekatkan. Yang akan terjadi adalah...',
      options: ['tarik-menarik', 'tolak-menolak', 'tidak terjadi apa-apa', 'muatannya menjadi positif'],
      answer: 'B',
      hint: 'Muatan sejenis...',
      solution: 'Muatan **sejenis tolak-menolak**. Dua benda bermuatan negatif akan saling menjauh. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Alat untuk mengukur kuat arus listrik dan cara memasangnya dalam rangkaian adalah...',
      options: ['voltmeter, dipasang paralel', 'ohmmeter, dipasang paralel', 'amperemeter, dipasang seri', 'voltmeter, dipasang seri'],
      answer: 'C',
      hint: 'Arus harus melewati alat ukurnya.',
      solution: 'Kuat arus diukur dengan **amperemeter yang dipasang seri**, agar seluruh arus melewatinya. Voltmeter dipasang paralel untuk mengukur tegangan. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Bahan berikut yang termasuk isolator listrik adalah...',
      options: ['karet', 'tembaga', 'besi', 'aluminium'],
      answer: 'A',
      hint: 'Isolator sulit menghantarkan listrik.',
      solution: '**Karet** adalah isolator, karena itu kabel listrik dibungkus karet atau plastik. Tembaga, besi, dan aluminium adalah konduktor. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Sumber energi berikut yang termasuk sumber energi terbarukan adalah...',
      options: ['batu bara', 'minyak bumi', 'gas alam', 'panas bumi'],
      answer: 'D',
      hint: 'Sumber yang tidak habis dalam waktu singkat.',
      solution: '**Panas bumi** terus tersedia dari dalam bumi, sehingga termasuk energi terbarukan. Batu bara, minyak bumi, dan gas alam adalah bahan bakar fosil yang tidak terbarukan. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Jarum kompas selalu menunjuk arah utara–selatan karena...',
      options: ['jarum kompas terbuat dari plastik', 'bumi bersifat seperti magnet besar', 'kompas dipengaruhi angin', 'matahari menarik jarum kompas'],
      answer: 'B',
      hint: 'Jarum kompas adalah magnet kecil.',
      solution: 'Jarum kompas adalah magnet yang dipengaruhi **medan magnet bumi**, sehingga selalu mengarah utara–selatan. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah resistor 20 Ω dihubungkan dengan sumber tegangan 12 V. Kuat arus yang mengalir adalah...',
      options: ['240 A', '1,67 A', '32 A', '0,6 A'],
      answer: 'D',
      hint: '$I = V : R$.',
      solution: '$I = 12 : 20 = 0{,}6\\ \\text{A}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Perhatikan rangkaian seri pada gambar. Baterai 12 V dihubungkan dengan dua hambatan 4 Ω dan 2 Ω yang disusun seri. Kuat arus pada rangkaian adalah...',
      options: ['2 A', '3 A', '6 A', '72 A'],
      answer: 'A',
      hint: 'Jumlahkan dulu hambatannya, lalu gunakan hukum Ohm.',
      solution: '$R_s = 4 + 2 = 6\\ \\Omega$.\n$I = V : R = 12 : 6 = 2\\ \\text{A}$. Jawaban: **A**.',
      visual: {
        type: 'circuit',
        props: { title: 'Rangkaian Seri', mode: 'series', batteryLabel: '12 V', resistors: ['4 Ω', '2 Ω'] }
      }
    }),
    soal({
      level: 'Sedang',
      q: 'Lampu-lampu di rumah dipasang secara paralel. Keuntungan susunan ini adalah...',
      options: [
        'jika satu lampu padam, lampu lain tetap menyala dan setiap lampu mendapat tegangan yang sama',
        'arus listrik menjadi lebih kecil',
        'kabel yang diperlukan lebih sedikit',
        'semua lampu dapat dimatikan dengan satu sakelar'
      ],
      answer: 'A',
      hint: 'Setiap cabang paralel memiliki jalur sendiri.',
      solution: 'Pada rangkaian paralel, setiap lampu memiliki cabang sendiri dengan **tegangan yang sama**, sehingga **jika satu padam, yang lain tetap menyala**. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Kekuatan sebuah elektromagnet dapat diperbesar dengan cara...',
      options: [
        'mengurangi jumlah lilitan',
        'memperkecil arus listrik',
        'memperbanyak lilitan dan memperbesar arus listrik',
        'mengganti inti besi dengan inti plastik'
      ],
      answer: 'C',
      hint: 'Tiga hal: lilitan, arus, dan inti besi.',
      solution: 'Elektromagnet makin kuat jika **jumlah lilitan diperbanyak dan arus diperbesar**, serta memakai inti besi. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah setrika memiliki daya 300 W dan digunakan selama 2 jam. Energi listrik yang digunakan adalah...',
      options: ['150 kWh', '0,6 kWh', '600 kWh', '6 kWh'],
      answer: 'B',
      hint: 'Ubah watt menjadi kilowatt.',
      solution: '$W = 0{,}3\\ \\text{kW} \\times 2\\ \\text{jam} = 0{,}6\\ \\text{kWh}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Perhatikan rangkaian paralel pada gambar. Dua hambatan 6 Ω dan 3 Ω disusun paralel lalu dihubungkan dengan baterai 6 V. Kuat arus total yang keluar dari baterai adalah...',
      options: ['0,67 A', '1 A', '2 A', '3 A'],
      answer: 'D',
      hint: 'Hitung hambatan pengganti paralel: $\\frac{1}{R_p} = \\frac{1}{6} + \\frac{1}{3}$.',
      solution: '$\\dfrac{1}{R_p} = \\dfrac{1}{6} + \\dfrac{2}{6} = \\dfrac{3}{6} \\Rightarrow R_p = 2\\ \\Omega$.\n$I = 6 : 2 = 3\\ \\text{A}$. Jawaban: **D**.',
      visual: {
        type: 'circuit',
        props: { title: 'Rangkaian Paralel', mode: 'parallel', batteryLabel: '6 V', resistors: ['6 Ω', '3 Ω'] }
      }
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah rumah menyalakan 4 lampu masing-masing 25 W selama 10 jam setiap hari. Jika tarif listrik Rp1.500 per kWh, biaya pemakaian lampu selama 30 hari adalah...',
      options: ['Rp4.500', 'Rp15.000', 'Rp45.000', 'Rp450.000'],
      answer: 'C',
      hint: 'Total daya × waktu → kWh, lalu kalikan tarif.',
      solution: 'Daya total = 4 × 25 = 100 W = 0,1 kW. Energi per hari = 0,1 × 10 = 1 kWh. Selama 30 hari = 30 kWh. Biaya = 30 × Rp1.500 = **Rp45.000**. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Dinamo sepeda menyalakan lampu ketika roda berputar. Prinsip kerja dinamo adalah...',
      options: [
        'listrik statis akibat gesekan ban dengan jalan',
        'induksi elektromagnetik: magnet yang berputar di dekat kumparan menghasilkan arus listrik',
        'reaksi kimia seperti pada baterai',
        'pemuaian logam akibat panas'
      ],
      answer: 'B',
      hint: 'Perubahan medan magnet di sekitar kumparan.',
      solution: 'Di dalam dinamo, magnet berputar di dekat kumparan sehingga medan magnet yang melewati kumparan berubah-ubah dan menimbulkan arus. Ini adalah **induksi elektromagnetik**, prinsip yang sama dengan generator pembangkit listrik. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah lampu dirancang untuk tegangan 220 V dan daya 55 W. Kuat arus yang mengalir saat lampu menyala normal adalah...',
      options: ['0,25 A', '4 A', '12.100 A', '2,5 A'],
      answer: 'A',
      hint: '$P = V \\times I$.',
      solution: '$I = P : V = 55 : 220 = 0{,}25\\ \\text{A}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah desa terpencil di dekat sungai berarus deras di pegunungan belum mendapat aliran listrik PLN. Pilihan sumber energi alternatif yang paling sesuai beserta alasannya adalah...',
      options: [
        'PLTU batu bara, karena paling murah',
        'pembangkit listrik tenaga gelombang laut, karena energinya besar',
        'pembangkit listrik tenaga mikrohidro, karena memanfaatkan aliran sungai yang tersedia dan ramah lingkungan',
        'generator diesel, karena tidak memerlukan bahan bakar'
      ],
      answer: 'C',
      hint: 'Sesuaikan dengan sumber daya yang ada di lokasi.',
      solution: 'Desa memiliki sungai berarus deras, sehingga **mikrohidro** paling sesuai: memanfaatkan energi air setempat, terbarukan, dan ramah lingkungan. Desa pegunungan tidak dekat laut, sedangkan batu bara dan diesel menghasilkan polusi (diesel tetap memerlukan bahan bakar). Jawaban: **C**.'
    })
  ]
});
