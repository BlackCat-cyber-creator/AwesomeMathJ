import { bab, soal } from '../author.js';

export default bab({
  grade: 9,
  number: 6,
  slug: 'pewarisan-sifat-bioteknologi',
  title: 'Pewarisan Sifat dan Bioteknologi',
  element: 'Makhluk hidup dan lingkungannya: pewarisan sifat dan bioteknologi konvensional',
  summary: {
    overview: 'Mengapa anak mirip orang tuanya, tetapi tidak persis sama? Bab ini membahas materi genetik, istilah dan hukum pewarisan sifat Mendel, persilangan monohibrid dan dihibrid, pewarisan sifat pada manusia, serta bioteknologi konvensional dan modern yang dimanfaatkan dalam kehidupan.',
    coreConcepts: [
      'Materi Genetik: Sifat diwariskan melalui gen, yaitu bagian DNA yang terletak pada kromosom di dalam inti sel. Sel tubuh manusia memiliki 46 kromosom (23 pasang): 22 pasang autosom dan 1 pasang kromosom kelamin (XX pada perempuan, XY pada laki-laki). Sel kelamin (sperma dan sel telur) memiliki 23 kromosom.',
      'Istilah dalam Pewarisan Sifat: Genotipe adalah susunan gen (misalnya TT, Tt, tt); fenotipe adalah sifat yang tampak (tinggi, pendek). Gen dominan (huruf kapital) menutupi gen resesif (huruf kecil). Homozigot: pasangan gen sama (TT, tt); heterozigot: berbeda (Tt). Parental (P) adalah induk, filial (F₁, F₂) adalah keturunan.',
      'Persilangan Monohibrid: Persilangan dengan satu sifat beda. Contoh Mendel: tinggi (TT) × pendek (tt) → F₁ semua Tt (tinggi). F₁ disilangkan sesamanya (Tt × Tt) → F₂ dengan genotipe TT : Tt : tt = 1 : 2 : 1 dan fenotipe tinggi : pendek = 3 : 1. Pada sifat intermediet (dominansi tidak penuh), misalnya bunga merah × putih → F₁ merah muda, perbandingan fenotipe F₂ menjadi 1 : 2 : 1.',
      'Persilangan Dihibrid: Persilangan dengan dua sifat beda, misalnya biji bulat-kuning (BBKK) × keriput-hijau (bbkk). F₁ semua BbKk (bulat-kuning). F₂ memiliki perbandingan fenotipe bulat-kuning : bulat-hijau : keriput-kuning : keriput-hijau = 9 : 3 : 3 : 1. Gamet BbKk ada 4 macam: BK, Bk, bK, bk.',
      'Pewarisan Sifat pada Manusia: Kelainan yang diturunkan antara lain albino (autosom resesif), buta warna dan hemofilia (terpaut kromosom X, resesif). Laki-laki hanya memiliki satu kromosom X sehingga lebih sering menderita buta warna; perempuan dengan satu gen buta warna disebut pembawa (karier) dan penglihatannya normal. Jenis kelamin anak ditentukan oleh kromosom dari ayah (X atau Y), dengan peluang 50% : 50%.',
      'Bioteknologi: Bioteknologi memanfaatkan makhluk hidup untuk menghasilkan produk. Bioteknologi konvensional memakai mikroorganisme secara langsung: tempe (jamur Rhizopus), tape dan roti (khamir Saccharomyces), yoghurt (bakteri Lactobacillus), kecap dan tauco (jamur Aspergillus), serta nata de coco (bakteri Acetobacter). Bioteknologi modern memakai rekayasa genetika dan teknik laboratorium: kultur jaringan, tanaman transgenik, insulin dari bakteri, dan bayi tabung. Saat membuat produk fermentasi, alat harus bersih agar mikroorganisme lain tidak tumbuh.'
    ],
    keyFormulas: [
      { label: 'Monohibrid F₂ (dominan penuh)', formula: '\\text{genotipe } 1 : 2 : 1 \\qquad \\text{fenotipe } 3 : 1' },
      { label: 'Dihibrid F₂', formula: '\\text{fenotipe } 9 : 3 : 3 : 1' },
      { label: 'Jumlah macam gamet', formula: '2^n \\quad (n = \\text{jumlah pasangan gen heterozigot})' },
      { label: 'Kromosom manusia', formula: '\\text{sel tubuh } 46\\ (2n) \\qquad \\text{gamet } 23\\ (n)' }
    ],
    workedExamples: [
      {
        title: 'Persilangan monohibrid',
        problem: 'Bunga ungu (UU) dominan terhadap putih (uu). Jika F₁ (Uu) disilangkan sesamanya dan dihasilkan 160 tanaman F₂, berapa yang berbunga putih?',
        solution: 'Uu × Uu → UU : Uu : uu = 1 : 2 : 1, fenotipe ungu : putih = 3 : 1. Bunga putih = ¼ × 160 = **40 tanaman**.'
      },
      {
        title: 'Buta warna',
        problem: 'Ibu normal pembawa buta warna (XᶜX) menikah dengan ayah normal (XY). Berapa peluang anak laki-laki mereka buta warna?',
        solution: 'Anak laki-laki menerima Y dari ayah dan salah satu X dari ibu: XY (normal) atau XᶜY (buta warna). Peluang anak laki-laki buta warna = **50%**.'
      },
      {
        title: 'Membuat tempe',
        problem: 'Mengapa kedelai yang akan dibuat tempe harus direbus, dikupas, didinginkan, lalu diberi ragi tempe?',
        solution: 'Perebusan membunuh mikroorganisme lain dan melunakkan kedelai; pendinginan mencegah ragi mati karena panas. **Rhizopus** dalam ragi lalu tumbuh dan membentuk benang-benang putih yang mengikat kedelai menjadi tempe.'
      }
    ],
    misconceptions: [
      'Menganggap sifat yang tidak tampak pada orang tua tidak bisa muncul pada anak. Gen resesif dapat dibawa tanpa tampak (heterozigot) dan muncul pada anak jika bertemu gen resesif yang sama.',
      'Menganggap jenis kelamin anak ditentukan oleh ibu. Ibu selalu memberikan kromosom X; kromosom ayah (X atau Y) yang menentukan.',
      'Menganggap semua bioteknologi adalah rekayasa genetika modern. Membuat tempe, tape, dan yoghurt juga bioteknologi, yaitu bioteknologi konvensional.'
    ],
    tutorTip: 'Gunakan papan Punnett: tulis gamet induk jantan di atas dan gamet betina di samping, lalu isi kotaknya. Cara ini mencegah salah hitung perbandingan.'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Sifat yang tampak dari luar, seperti warna bunga atau tinggi batang, disebut...',
      options: ['genotipe', 'fenotipe', 'alel', 'kromosom'],
      answer: 'B',
      hint: '"Feno" berarti tampak.',
      solution: 'Sifat yang tampak disebut **fenotipe**. Genotipe adalah susunan gennya. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Jumlah kromosom pada sel sperma manusia adalah...',
      options: ['46', '92', '23', '22'],
      answer: 'C',
      hint: 'Sel kelamin memiliki setengah jumlah kromosom sel tubuh.',
      solution: 'Sel tubuh manusia 46 kromosom; sel kelamin (sperma dan sel telur) memiliki setengahnya, yaitu **23**. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Mikroorganisme yang digunakan dalam pembuatan tempe adalah...',
      options: ['Rhizopus', 'Saccharomyces', 'Lactobacillus', 'Acetobacter'],
      answer: 'A',
      hint: 'Jamur yang membentuk benang-benang putih.',
      solution: 'Tempe dibuat dengan jamur **Rhizopus**. Saccharomyces untuk tape dan roti, Lactobacillus untuk yoghurt, Acetobacter untuk nata de coco. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Genotipe berikut yang termasuk heterozigot adalah...',
      options: ['TT', 'tt', 'BB', 'Tt'],
      answer: 'D',
      hint: 'Heterozigot = pasangan gen berbeda.',
      solution: 'Heterozigot memiliki pasangan gen yang berbeda, yaitu **Tt**. TT, tt, dan BB adalah homozigot. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Contoh produk bioteknologi modern adalah...',
      options: ['yoghurt', 'tape singkong', 'tanaman hasil kultur jaringan', 'kecap'],
      answer: 'C',
      hint: 'Bioteknologi modern memakai teknik laboratorium.',
      solution: '**Kultur jaringan** adalah teknik laboratorium untuk memperbanyak tanaman dari sel atau jaringan, sehingga termasuk bioteknologi modern. Pilihan lain adalah bioteknologi konvensional. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Tanaman kacang ercis batang tinggi (TT) disilangkan dengan batang pendek (tt). Fenotipe keturunan F₁ adalah...',
      options: ['semua tinggi', 'semua pendek', 'tinggi : pendek = 1 : 1', 'tinggi : pendek = 3 : 1'],
      answer: 'A',
      hint: 'Semua F₁ bergenotipe Tt; T dominan.',
      solution: 'TT × tt → semua F₁ bergenotipe Tt. Karena T dominan, **semua F₁ berbatang tinggi**. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Hasil persilangan F₁ bergenotipe Tt dengan sesamanya (Tt × Tt) memiliki perbandingan genotipe...',
      options: ['TT : tt = 1 : 1', 'TT : Tt : tt = 1 : 2 : 1', 'TT : Tt = 3 : 1', 'Tt : tt = 1 : 2'],
      answer: 'B',
      hint: 'Gunakan papan Punnett 2 × 2.',
      solution: 'Gamet T dan t dari masing-masing induk menghasilkan TT, Tt, Tt, tt. Perbandingan genotipe **TT : Tt : tt = 1 : 2 : 1** (fenotipe tinggi : pendek = 3 : 1). Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Bunga merah (MM) disilangkan dengan bunga putih (mm) menghasilkan F₁ berwarna merah muda. Sifat seperti ini disebut...',
      options: ['dominan penuh', 'resesif', 'intermediet', 'mutasi'],
      answer: 'C',
      hint: 'Warna F₁ berada di antara kedua induknya.',
      solution: 'F₁ memiliki sifat di antara kedua induk (merah muda), karena gen M tidak menutupi m sepenuhnya. Sifat ini disebut **intermediet** (dominansi tidak penuh). Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Jenis kelamin anak ditentukan oleh...',
      options: [
        'kromosom X dari ibu',
        'makanan yang dikonsumsi ibu selama hamil',
        'jumlah autosom',
        'kromosom X atau Y yang dibawa sperma ayah'
      ],
      answer: 'D',
      hint: 'Sel telur selalu membawa X.',
      solution: 'Sel telur selalu membawa kromosom X, sedangkan sperma membawa X atau Y. Jika sperma membawa Y, anak laki-laki (XY); jika X, anak perempuan (XX). Jadi **kromosom dari ayah** yang menentukan. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Saat membuat yoghurt di rumah, susu dipanaskan dulu lalu didinginkan sampai hangat sebelum diberi biang yoghurt. Alasan susu didinginkan dahulu adalah...',
      options: [
        'agar bakteri Lactobacillus dalam biang tidak mati karena panas',
        'agar susu tidak tumpah',
        'agar susu menjadi kental tanpa bakteri',
        'agar rasa susu menjadi manis'
      ],
      answer: 'A',
      hint: 'Biang yoghurt berisi makhluk hidup.',
      solution: 'Biang yoghurt berisi bakteri **Lactobacillus** yang akan mati bila dimasukkan ke susu yang terlalu panas. Pemanasan awal membunuh mikroba lain; pendinginan memberi suhu yang sesuai bagi bakteri yoghurt. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Bunga ungu (U) dominan terhadap bunga putih (u). Persilangan Uu × Uu menghasilkan 200 tanaman. Jumlah tanaman berbunga ungu yang diharapkan adalah...',
      options: ['50', '100', '200', '150'],
      answer: 'D',
      hint: 'Perbandingan fenotipe ungu : putih = 3 : 1.',
      solution: 'Uu × Uu → ungu : putih = 3 : 1. Ungu = ¾ × 200 = **150 tanaman**. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Kacang ercis biji bulat-kuning (BbKk) disilangkan dengan sesamanya. Perbandingan fenotipe F₂ yang diharapkan adalah...',
      options: ['3 : 1', '1 : 2 : 1', '9 : 3 : 3 : 1', '1 : 1 : 1 : 1'],
      answer: 'C',
      hint: 'Ini persilangan dihibrid antara dua individu heterozigot.',
      solution: 'BbKk × BbKk adalah persilangan dihibrid. Perbandingan fenotipe bulat-kuning : bulat-hijau : keriput-kuning : keriput-hijau = **9 : 3 : 3 : 1**. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Banyaknya macam gamet yang dapat dibentuk oleh individu bergenotipe AaBbCC adalah...',
      options: ['2', '4', '8', '6'],
      answer: 'B',
      hint: 'Hitung pasangan gen yang heterozigot, lalu gunakan $2^n$.',
      solution: 'Pasangan heterozigot: Aa dan Bb (n = 2); CC homozigot. Macam gamet = $2^2 = 4$, yaitu ABC, AbC, aBC, abC. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Seorang perempuan pembawa buta warna (XᶜX) menikah dengan laki-laki buta warna (XᶜY). Kemungkinan anak perempuan mereka yang buta warna adalah...',
      options: ['0%', '25%', '100%', '50%'],
      answer: 'D',
      hint: 'Anak perempuan selalu mendapat Xᶜ dari ayah.',
      solution: 'Anak perempuan menerima Xᶜ dari ayah dan Xᶜ atau X dari ibu: XᶜXᶜ (buta warna) atau XᶜX (pembawa). Jadi peluang anak perempuan buta warna = **50%**. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sepasang suami istri berpenglihatan normal dan berkulit normal memiliki seorang anak albino. Penjelasan yang paling tepat adalah...',
      options: [
        'albino terjadi karena anak kurang terkena sinar matahari',
        'kedua orang tua heterozigot (Aa) pembawa gen albino resesif',
        'salah satu orang tua pasti albino',
        'albino diturunkan hanya dari ayah melalui kromosom Y'
      ],
      answer: 'B',
      hint: 'Albino bersifat resesif dan anaknya bergenotipe aa.',
      solution: 'Anak albino bergenotipe aa, sehingga menerima satu gen a dari ayah dan satu dari ibu. Karena orang tuanya normal, keduanya pasti **heterozigot (Aa), yaitu pembawa** gen albino. Peluang anak albino dari Aa × Aa adalah 25%. Jawaban: **B**.'
    })
  ]
});
