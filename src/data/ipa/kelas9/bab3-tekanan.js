import { bab, soal } from '../author.js';

export default bab({
  grade: 9,
  number: 3,
  slug: 'tekanan',
  title: 'Tekanan',
  element: 'Energi dan perubahannya: ragam gerak, gaya, dan tekanan',
  summary: {
    overview: 'Mengapa pisau yang tajam mudah memotong, bendungan dibuat makin tebal ke bawah, dan kapal baja bisa terapung? Bab ini membahas tekanan pada zat padat, tekanan hidrostatis, hukum Pascal, hukum Archimedes, tekanan udara, serta penerapan tekanan pada makhluk hidup.',
    coreConcepts: [
      'Tekanan Zat Padat: Tekanan adalah gaya tekan tiap satuan luas bidang tekan: $P = \\dfrac{F}{A}$, satuannya pascal (Pa) = N/m². Makin kecil luas bidang tekan, makin besar tekanannya. Contoh: pisau tajam dan paku runcing mudah menembus benda; sepatu salju dan roda traktor yang lebar mengurangi tekanan agar tidak terbenam.',
      'Tekanan Hidrostatis: Tekanan oleh zat cair diam: $P_h = \\rho \\times g \\times h$, dengan $h$ kedalaman dari permukaan. Makin dalam, tekanan makin besar. Karena itu dinding bendungan dibuat makin tebal ke bawah dan penyelam di laut dalam memerlukan pakaian khusus. Tekanan hidrostatis tidak bergantung pada bentuk wadah.',
      'Hukum Pascal: Tekanan yang diberikan pada zat cair dalam ruang tertutup diteruskan ke segala arah sama besar: $\\dfrac{F_1}{A_1} = \\dfrac{F_2}{A_2}$. Gaya kecil pada pengisap kecil dapat menghasilkan gaya besar pada pengisap besar. Penerapan: dongkrak hidrolik, rem hidrolik, kursi dokter gigi, dan mesin pengepres.',
      'Hukum Archimedes: Benda yang dicelupkan ke zat cair mendapat gaya ke atas sebesar berat zat cair yang dipindahkan: $F_A = \\rho_{\\text{cair}} \\times g \\times V_{\\text{tercelup}}$. Benda terapung jika $\\rho_{\\text{benda}} < \\rho_{\\text{cair}}$, melayang jika sama, tenggelam jika lebih besar. Penerapan: kapal laut, kapal selam (mengatur air di tangki pemberat), hidrometer, dan balon udara (Archimedes pada gas).',
      'Tekanan Udara: Udara memiliki berat sehingga menekan permukaan bumi; diukur dengan barometer. Tekanan udara di permukaan laut sekitar 1 atm = 76 cmHg. Makin tinggi tempat, tekanan udara makin kecil (kira-kira turun 1 cmHg setiap naik 100 m). Penerapan: sedotan minuman, alat suntik, dan pompa air.',
      'Tekanan pada Makhluk Hidup: Jantung memompa darah sehingga timbul tekanan darah, dinyatakan sistol/diastol (normal sekitar 120/80 mmHg). Pengangkutan air pada tumbuhan dibantu daya kapilaritas pembuluh xilem, tekanan akar, dan daya isap daun akibat penguapan (transpirasi). Bernapas juga terjadi karena perbedaan tekanan udara di dalam paru-paru dan di luar tubuh.'
    ],
    keyFormulas: [
      { label: 'Tekanan zat padat', formula: 'P = \\dfrac{F}{A}' },
      { label: 'Tekanan hidrostatis', formula: 'P_h = \\rho \\, g \\, h' },
      { label: 'Hukum Pascal', formula: '\\dfrac{F_1}{A_1} = \\dfrac{F_2}{A_2}' },
      { label: 'Gaya apung (Archimedes)', formula: 'F_A = \\rho_{\\text{cair}} \\, g \\, V_{\\text{tercelup}}' }
    ],
    workedExamples: [
      {
        title: 'Tekanan balok pada lantai',
        problem: 'Sebuah kotak seberat 600 N berdiri di lantai dengan luas alas 2 m². Berapa tekanannya pada lantai?',
        solution: '$P = F : A = 600 : 2 = 300\\ \\text{Pa}$.'
      },
      {
        title: 'Tekanan hidrostatis pada penyelam',
        problem: 'Seorang penyelam berada 5 m di bawah permukaan air ($\\rho = 1.000$ kg/m³, $g = 10$ m/s²). Berapa tekanan hidrostatis yang dialaminya?',
        solution: '$P_h = \\rho g h = 1.000 \\times 10 \\times 5 = 50.000\\ \\text{Pa}$.'
      },
      {
        title: 'Dongkrak hidrolik',
        problem: 'Pengisap kecil dongkrak memiliki luas 10 cm² dan pengisap besar 500 cm². Berapa gaya minimal pada pengisap kecil untuk mengangkat mobil seberat 10.000 N?',
        solution: '$F_1 = F_2 \\times \\dfrac{A_1}{A_2} = 10.000 \\times \\dfrac{10}{500} = 200\\ \\text{N}$.'
      }
    ],
    misconceptions: [
      'Menganggap tekanan zat cair bergantung pada banyaknya air atau bentuk wadah. Tekanan hidrostatis hanya bergantung pada massa jenis zat cair, gravitasi, dan kedalaman.',
      'Menganggap benda tenggelam karena berat. Benda tenggelam jika massa jenisnya lebih besar daripada zat cair, atau gaya apungnya lebih kecil daripada beratnya.',
      'Menganggap kedalaman $h$ diukur dari dasar wadah. Kedalaman diukur dari permukaan zat cair.'
    ],
    tutorTip: 'Untuk soal Pascal, cukup ingat "perbandingan": gaya berbanding lurus dengan luas. Jika luas pengisap besar 50 kali luas pengisap kecil, gaya yang dihasilkan juga 50 kali.'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Satuan tekanan dalam Sistem Internasional adalah...',
      options: ['newton', 'joule', 'pascal', 'watt'],
      answer: 'C',
      hint: '1 satuan ini = 1 N/m².',
      solution: 'Satuan SI tekanan adalah **pascal (Pa)** = N/m². Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Pisau yang tajam lebih mudah memotong daripada pisau tumpul karena...',
      options: [
        'luas bidang tekan pisau tajam lebih kecil sehingga tekanannya lebih besar',
        'pisau tajam lebih berat',
        'luas bidang tekan pisau tajam lebih besar',
        'pisau tajam terbuat dari bahan yang berbeda'
      ],
      answer: 'A',
      hint: '$P = F : A$.',
      solution: 'Dengan gaya yang sama, **luas bidang tekan yang kecil menghasilkan tekanan besar**, sehingga pisau tajam mudah memotong. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Dinding bendungan dibuat makin tebal di bagian bawah karena...',
      options: [
        'agar bendungan terlihat kokoh',
        'air di bagian bawah lebih dingin',
        'tekanan hidrostatis makin besar pada kedalaman yang lebih dalam',
        'air di bagian bawah lebih sedikit'
      ],
      answer: 'C',
      hint: 'Tekanan zat cair bertambah dengan kedalaman.',
      solution: '**Tekanan hidrostatis bertambah dengan kedalaman** ($P_h = \\rho g h$), sehingga bagian bawah bendungan harus menahan tekanan paling besar. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Alat berikut yang bekerja berdasarkan hukum Pascal adalah...',
      options: ['kapal selam', 'dongkrak hidrolik', 'balon udara', 'hidrometer'],
      answer: 'B',
      hint: 'Tekanan diteruskan oleh zat cair dalam ruang tertutup.',
      solution: '**Dongkrak hidrolik** meneruskan tekanan melalui zat cair tertutup (hukum Pascal). Kapal selam, balon udara, dan hidrometer menerapkan hukum Archimedes. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Alat untuk mengukur tekanan udara adalah...',
      options: ['termometer', 'higrometer', 'hidrometer', 'barometer'],
      answer: 'D',
      hint: '"Baros" berarti berat/tekanan.',
      solution: 'Tekanan udara diukur dengan **barometer**. Termometer mengukur suhu, higrometer kelembapan, hidrometer massa jenis zat cair. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah peti bermassa 50 kg diletakkan di lantai dengan luas alas 0,5 m². Jika $g = 10$ m/s², tekanan peti pada lantai adalah...',
      options: ['100 Pa', '250 Pa', '25 Pa', '1.000 Pa'],
      answer: 'D',
      hint: 'Ubah massa menjadi berat dulu: $F = m \\times g$.',
      solution: '$F = 50 \\times 10 = 500\\ \\text{N}$.\n$P = 500 : 0{,}5 = 1.000\\ \\text{Pa}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Seekor ikan berada pada kedalaman 2 m di bawah permukaan kolam. Jika massa jenis air 1.000 kg/m³ dan $g = 10$ m/s², tekanan hidrostatis yang dialami ikan adalah...',
      options: ['2.000 Pa', '20.000 Pa', '200 Pa', '5.000 Pa'],
      answer: 'B',
      hint: '$P_h = \\rho g h$.',
      solution: '$P_h = 1.000 \\times 10 \\times 2 = 20.000\\ \\text{Pa}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Kapal selam dapat menyelam dengan cara...',
      options: [
        'mengisi tangki pemberat dengan air sehingga massa jenis rata-ratanya lebih besar daripada air laut',
        'mengosongkan tangki pemberat dari air',
        'memperbesar volume kapal',
        'mematikan mesin'
      ],
      answer: 'A',
      hint: 'Agar tenggelam, massa jenis rata-rata kapal harus naik.',
      solution: 'Kapal selam **mengisi tangki pemberat dengan air** sehingga beratnya bertambah dan massa jenis rata-ratanya lebih besar daripada air laut, lalu menyelam. Untuk naik, air dipompa keluar. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Tekanan udara di permukaan laut 76 cmHg. Jika setiap kenaikan 100 m tekanan udara turun 1 cmHg, tekanan udara di kota yang berada 600 m di atas permukaan laut adalah...',
      options: ['82 cmHg', '76 cmHg', '70 cmHg', '60 cmHg'],
      answer: 'C',
      hint: 'Hitung berapa kali 100 m dalam 600 m.',
      solution: 'Penurunan = 600 : 100 = 6 cmHg. Tekanan = 76 − 6 = **70 cmHg**. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Air dari akar dapat naik ke daun pohon yang tinggi. Faktor yang membantu pengangkutan ini adalah...',
      options: [
        'tekanan darah dan detak jantung',
        'gaya gravitasi dan angin',
        'tekanan udara dan suhu',
        'daya kapilaritas xilem, tekanan akar, dan daya isap daun akibat transpirasi'
      ],
      answer: 'D',
      hint: 'Tumbuhan tidak memiliki jantung.',
      solution: 'Air naik karena **kapilaritas pembuluh xilem**, **tekanan akar**, dan **daya isap daun** akibat penguapan air (transpirasi). Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Perhatikan dongkrak hidrolik pada gambar. Luas pengisap kecil 10 cm², luas pengisap besar 400 cm², dan beban pada pengisap besar 8.000 N. Gaya minimal pada pengisap kecil untuk mengangkat beban adalah...',
      options: ['200 N', '20 N', '800 N', '320.000 N'],
      answer: 'A',
      hint: '$\\dfrac{F_1}{A_1} = \\dfrac{F_2}{A_2}$.',
      solution: '$F_1 = F_2 \\times \\dfrac{A_1}{A_2} = 8.000 \\times \\dfrac{10}{400} = 200\\ \\text{N}$. Jawaban: **A**.',
      visual: {
        type: 'hydraulic',
        props: {
          smallForce: 'F₁ = ?',
          smallArea: 'A₁ = 10 cm²',
          bigForce: 'F₂ = 8.000 N',
          bigArea: 'A₂ = 400 cm²'
        }
      }
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah balok bervolume 0,002 m³ dicelupkan seluruhnya ke dalam air ($\\rho = 1.000$ kg/m³, $g = 10$ m/s²). Gaya ke atas yang dialami balok adalah...',
      options: ['2 N', '0,2 N', '200 N', '20 N'],
      answer: 'D',
      hint: '$F_A = \\rho \\, g \\, V$.',
      solution: '$F_A = 1.000 \\times 10 \\times 0{,}002 = 20\\ \\text{N}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah batu beratnya 30 N di udara dan 20 N ketika dicelupkan seluruhnya ke dalam air. Pernyataan yang benar adalah...',
      options: [
        'gaya ke atas oleh air 10 N dan batu tenggelam',
        'gaya ke atas oleh air 50 N dan batu terapung',
        'gaya ke atas oleh air 20 N dan batu melayang',
        'massa batu berkurang 10 kg di dalam air'
      ],
      answer: 'A',
      hint: 'Selisih berat di udara dan di air = gaya ke atas.',
      solution: 'Gaya ke atas = 30 − 20 = **10 N**. Karena gaya ke atas (10 N) lebih kecil daripada berat batu (30 N), **batu tenggelam**. Massanya tidak berubah; yang berkurang hanya berat semunya. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Dua wadah berbeda bentuk, wadah P lebar dan wadah Q sempit, diisi air sampai ketinggian yang sama, yaitu 30 cm. Perbandingan tekanan hidrostatis di dasar wadah P dan Q adalah...',
      options: [
        'tekanan di P lebih besar karena airnya lebih banyak',
        'tekanan di Q lebih besar karena wadahnya sempit',
        'tekanan di P dan Q sama besar',
        'tidak dapat dibandingkan tanpa mengetahui volume air'
      ],
      answer: 'C',
      hint: 'Rumus tekanan hidrostatis tidak memuat luas atau volume.',
      solution: '$P_h = \\rho g h$ hanya bergantung pada massa jenis, gravitasi, dan kedalaman. Karena ketinggian air sama, **tekanan di dasar kedua wadah sama besar**. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Saat seseorang mendaki gunung yang tinggi, telinganya terasa "penuh" dan sering berdengung. Penjelasan yang paling tepat adalah...',
      options: [
        'udara di gunung lebih panas sehingga telinga memuai',
        'tekanan udara luar makin kecil sehingga terjadi perbedaan tekanan dengan udara di telinga tengah',
        'tekanan udara di gunung lebih besar daripada di pantai',
        'telinga kemasukan air dari awan'
      ],
      answer: 'B',
      hint: 'Tekanan udara berkurang seiring ketinggian.',
      solution: 'Makin tinggi tempat, **tekanan udara luar makin kecil**, sedangkan udara di telinga tengah masih bertekanan lebih besar. Perbedaan tekanan ini mendorong gendang telinga sehingga terasa penuh. Menelan atau menguap membantu menyamakan tekanan. Jawaban: **B**.'
    })
  ]
});
