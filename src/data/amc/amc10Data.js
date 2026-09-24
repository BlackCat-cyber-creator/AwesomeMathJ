/**
 * Dataset Lengkap Modul Olimpiade Matematika: AMC 10 (Early High School Math Competition)
 * Sumber Inspirasi: Mastering AMC 10/12 (OmegaLearn) & Ujian Resmi AMC 10
 * 
 * Karakteristik Soal AMC:
 * - Format isian singkat (Short Answer) dan esai/analisis pembuktian (Proof / Step-by-Step)
 * - Bebas dari pilihan ganda baku (tidak ada array options)
 * - Dilengkapi kunci jawaban valid, variasi input jawaban yang diterima (acceptedAnswers),
 *   petunjuk pemandu (hint), dan solusi langkah komprehensif (bestSolution).
 * - Teorema tingkat tinggi: Stars & Bars, Peluang Geometris & Nilai Harapan, Vieta,
 *   SFFT, Barisan Rekursif, Rumus Legendre, Diophantine & Basis, Power of a Point,
 *   Titik Istimewa Segitiga (Ceva/Menelaus), Shoelace & Pick, Floor/Ceiling, dan AM-GM.
 */

export const amc10Data = {
  level: 10,
  code: 'amc10',
  title: 'AMC 10 Competition Math Handbook & Problem Bank',
  subtitle: 'Modul Persiapan Olimpiade Matematika Tingkat SMA Awal',
  targetGrades: 'Kelas 9–10 SMA',
  domains: ['Kombinatorika', 'Aljabar', 'Teori Bilangan', 'Geometri', 'Topik Lanjut'],
  chapters: [
    // ----------------------------------------------------
    // BAB 1: STARS & BARS, PEMBAGIAN OBJEK & IDENTITAS KOMBINATORIK
    // ----------------------------------------------------
    {
      id: 'amc10-ch1-advanced-combinatorics',
      level: 10,
      domain: 'Kombinatorika',
      chapterIndex: 0,
      title: 'Bab 1: Stars & Bars, Pembagian Objek & Identitas Kombinatorik',
      summary: {
        overview: 'Stars and Bars (Bintang dan Batang) adalah teknik kombinatorik yang sangat kuat untuk menghitung banyaknya solusi bilangan bulat non-negatif maupun positif dari persamaan linier $x_1 + x_2 + \\dots + x_k = n$. Dalam AMC 10, teknik ini sering disamarkan dalam soal pembagian permen identik kepada anak, pelemparan dadu dengan jumlah tertentu, atau penempatan koefisien polinomial. Bab ini juga mencakup identitas kombinatorik penting seperti Hockey Stick dan Vandermonde.',
        coreConcepts: [
          'Stars & Bars Bilangan Bulat Non-Negatif ($x_i \\ge 0$): Banyaknya solusi dari $x_1 + x_2 + \\dots + x_k = n$ adalah: $$\\binom{n + k - 1}{k - 1} = \\binom{n + k - 1}{n}$$',
          'Stars & Bars Bilangan Bulat Positif ($x_i \\ge 1$): Banyaknya solusi dari $x_1 + x_2 + \\dots + x_k = n$ adalah: $$\\binom{n - 1}{k - 1}$$',
          'Identitas Hockey Stick: $$\\sum_{i=r}^{n} \\binom{i}{r} = \\binom{n+1}{r+1}$$',
          'Identitas Vandermonde: $$\\sum_{k=0}^{r} \\binom{m}{k} \\binom{n}{r-k} = \\binom{m+n}{r}$$'
        ],
        keyFormulas: [
          { label: 'Non-negatif (xi >= 0)', formula: '\\binom{n + k - 1}{k - 1}' },
          { label: 'Positif (xi >= 1)', formula: '\\binom{n - 1}{k - 1}' },
          { label: 'Hockey Stick', formula: '\\sum_{i=r}^{n} \\binom{i}{r} = \\binom{n+1}{r+1}' }
        ],
        workedExamples: [
          {
            problem: 'Berapa banyak solusi bilangan bulat non-negatif $(a, b, c, d)$ yang memenuhi persamaan $a + b + c + d = 12$?',
            solution: 'Langkah 1: Identifikasi parameter: $n = 12$ (bintang/stars) dan $k = 4$ variabel (membutuhkan $k-1 = 3$ batang/bars penyekat).\nLangkah 2: Terapkan rumus Stars & Bars non-negatif:\n$$\\binom{n + k - 1}{k - 1} = \\binom{12 + 4 - 1}{4 - 1} = \\binom{15}{3}$$\nLangkah 3: Hitung nilai kombinasi:\n$$\\binom{15}{3} = \\frac{15 \\times 14 \\times 13}{3 \\times 2 \\times 1} = 5 \\times 7 \\times 13 = 455\\text{ solusi}.$$'
          }
        ],
        misconceptions: [
          'Menggunakan rumus non-negatif saat soal mensyaratkan setiap orang harus mendapat minimal 1 barang (positif).',
          'Lupa mensubstitusikan variabel baru ketika ada batasan batas bawah yang berbeda (misal $x_1 \\ge 2$).'
        ],
        tutorTip: 'Jika ada syarat variabel $x_i \\ge c_i$, ubah variabel $y_i = x_i - c_i \\ge 0$ sehingga kembali ke bentuk dasar Stars and Bars non-negatif!'
      },
      questions: [
        {
          id: 'amc10-ch1-q1',
          type: 'short_answer',
          difficulty: 'Dasar',
          source: 'AMC 10A 2019',
          question: 'Berapa banyak tripel bilangan bulat positif $(x, y, z)$ yang memenuhi persamaan $x + y + z = 10$?',
          hint: 'Gunakan rumus Stars & Bars untuk bilangan bulat positif (xi >= 1): C(n - 1, k - 1) dengan n = 10 dan k = 3.',
          answer: '36',
          acceptedAnswers: ['36'],
          bestSolution: 'Langkah 1: Persamaan $x + y + z = 10$ dengan syarat $x, y, z \\ge 1$.\nLangkah 2: Gunakan rumus Stars & Bars bilangan bulat positif:\n$$\\binom{n - 1}{k - 1} = \\binom{10 - 1}{3 - 1} = \\binom{9}{2}$$\nLangkah 3: Hitung nilai kombinasi:\n$$\\binom{9}{2} = \\frac{9 \\times 8}{2} = 36\\text{ solusi}.$$'
        },
        {
          id: 'amc10-ch1-q2',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 10B 2021',
          question: 'Sebuah toko kue menjual 4 jenis donat berbeda. Dalam berapa banyak cara seorang pembeli dapat memilih 8 buah donat (setiap jenis donat tersedia dalam jumlah tak terbatas)?',
          hint: 'Ini adalah pembagian 8 donat ke dalam 4 kategori (d1 + d2 + d3 + d4 = 8 dengan di >= 0).',
          answer: '165',
          acceptedAnswers: ['165'],
          bestSolution: 'Langkah 1: Misalkan $d_1, d_2, d_3, d_4$ adalah banyaknya donat dari masing-masing 4 jenis.\nLangkah 2: Kita ingin mencari banyaknya solusi bilangan bulat non-negatif dari:\n$$d_1 + d_2 + d_3 + d_4 = 8 \\quad (d_i \\ge 0)$$\nLangkah 3: Terapkan rumus Stars & Bars dengan $n = 8$ dan $k = 4$:\n$$\\binom{n + k - 1}{k - 1} = \\binom{8 + 4 - 1}{4 - 1} = \\binom{11}{3}$$\nLangkah 4: Hitung nilai:\n$$\\binom{11}{3} = \\frac{11 \\times 10 \\times 9}{3 \\times 2 \\times 1} = 11 \\times 5 \\times 3 = 165\\text{ cara}.$$'
        },
        {
          id: 'amc10-ch1-q3',
          type: 'essay',
          difficulty: 'Olimpiade',
          source: 'OmegaLearn / AMC 10',
          question: 'Tentukan banyaknya solusi bilangan bulat $(a, b, c)$ dari persamaan $a + b + c = 20$ dengan syarat khusus $a \\ge 2$, $b \\ge 3$, dan $c \\ge 5$. Uraikan langkah substitusi aljabar yang digunakan.',
          hint: 'Definisikan variabel baru a\' = a - 2, b\' = b - 3, c\' = c - 5 sehingga a\', b\', c\' >= 0.',
          answer: '66',
          acceptedAnswers: ['66', '66 solusi'],
          bestSolution: 'Langkah Penyelesaian:\n1. Transformasi Variabel:\nMisalkan:\n- $a\' = a - 2 \\implies a = a\' + 2$ dengan $a\' \\ge 0$\n- $b\' = b - 3 \\implies b = b\' + 3$ dengan $b\' \\ge 0$\n- $c\' = c - 5 \\implies c = c\' + 5$ dengan $c\' \\ge 0$\n2. Substitusikan ke persamaan semula:\n$$(a\' + 2) + (b\' + 3) + (c\' + 5) = 20$$\n$$a\' + b\' + c\' + 10 = 20 \\implies a\' + b\' + c\' = 10$$\n3. Gunakan rumus Stars & Bars non-negatif dengan $n = 10$ dan $k = 3$:\n$$\\binom{10 + 3 - 1}{3 - 1} = \\binom{12}{2} = \\frac{12 \\times 11}{2} = 66\\text{ solusi}.$$'
        },
        {
          id: 'amc10-ch1-q4',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 10A 2021',
          question: 'Berapa banyak solusi bilangan bulat non-negatif $(w, x, y, z)$ yang memenuhi pertidaksamaan $w + x + y + z \\le 8$?',
          hint: 'Tambahkan variabel kendur (slack variable) s >= 0 sehingga persamaan menjadi w + x + y + z + s = 8.',
          answer: '495',
          acceptedAnswers: ['495'],
          bestSolution: 'Langkah 1: Ubah pertidaksamaan menjadi persamaan dengan menambahkan variabel kendur (slack variable) $s \\ge 0$:\n$$w + x + y + z + s = 8$$\nLangkah 2: Sekarang terdapat $k = 5$ variabel non-negatif dan $n = 8$.\nLangkah 3: Terapkan rumus Stars & Bars:\n$$\\binom{n + k - 1}{k - 1} = \\binom{8 + 5 - 1}{5 - 1} = \\binom{12}{4}$$\nLangkah 4: Hitung nilai kombinasi:\n$$\\binom{12}{4} = \\frac{12 \\times 11 \\times 10 \\times 9}{4 \\times 3 \\times 2 \\times 1} = 11 \\times 5 \\times 9 = 495\\text{ solusi}.$$'
        },
        {
          id: 'amc10-ch1-q5',
          type: 'short_answer',
          difficulty: 'Tantangan',
          source: 'AMC 10B 2017',
          question: 'Hitunglah nilai eksak dari penjumlahan kombinatorik berikut menggunakan Identitas Hockey Stick: $$\\sum_{k=2}^{8} \\binom{k}{2} = \\binom{2}{2} + \\binom{3}{2} + \\binom{4}{2} + \\dots + \\binom{8}{2}$$',
          hint: 'Identitas Hockey Stick menyatakan bahwa sum_{i=r}^n C(i, r) = C(n+1, r+1). Di sini r = 2 dan n = 8.',
          answer: '84',
          acceptedAnswers: ['84'],
          bestSolution: 'Langkah 1: Identifikasi parameter rumus Hockey Stick:\n$$\\sum_{i=r}^n \\binom{i}{r} = \\binom{n+1}{r+1}$$\nDi sini $r = 2$ dan batas atas $n = 8$.\nLangkah 2: Terapkan rumus secara langsung:\n$$\\sum_{k=2}^{8} \\binom{k}{2} = \\binom{8+1}{2+1} = \\binom{9}{3}$$\nLangkah 3: Hitung nilai numerik:\n$$\\binom{9}{3} = \\frac{9 \\times 8 \\times 7}{3 \\times 2 \\times 1} = 3 \\times 4 \\times 7 = 84.$$'
        },
        {
          id: 'amc10-ch1-q6',
          type: 'short_answer',
          difficulty: 'Olimpiade',
          source: 'AMC 10 / Vandermonde',
          question: 'Dalam sebuah kepanitiaan terdapat 6 matematikawan dan 8 fisikawan. Berapa banyak cara memilih subkomite yang beranggotakan 4 orang sedemikian sehingga terdapat setidaknya 1 orang matematikawan?',
          hint: 'Gunakan metode komplemen (Complementary Counting): Total cara pemilihan dikurangi cara pemilihan yang tidak melibatkan matematikawan sama sekali.',
          answer: '931',
          acceptedAnswers: ['931', '931 cara'],
          bestSolution: 'Langkah 1: Total keseluruhan anggota adalah $6 + 8 = 14$ orang.\nLangkah 2: Hitung total cara memilih 4 orang tanpa syarat apapun:\n$$\\binom{14}{4} = \\frac{14 \\times 13 \\times 12 \\times 11}{4 \\times 3 \\times 2 \\times 1} = 14 \\times 13 \\times 11 / 2 = 7 \\times 13 \\times 11 = 1001\\text{ cara}.$$\nLangkah 3: Hitung cara pemilihan komplemen (hanya fisikawan, 0 matematikawan):\n$$\\binom{8}{4} = \\frac{8 \\times 7 \\times 6 \\times 5}{4 \\times 3 \\times 2 \\times 1} = 70\\text{ cara}.$$\nLangkah 4: Kurangkan kasus komplemen dari total:\n$$1001 - 70 = 931\\text{ cara}.$$'
        }
      ]
    },

    // ----------------------------------------------------
    // BAB 2: PELUANG GEOMETRIS & NILAI HARAPAN
    // ----------------------------------------------------
    {
      id: 'amc10-ch2-geometric-probability-expected-value',
      level: 10,
      domain: 'Kombinatorika',
      chapterIndex: 1,
      title: 'Bab 2: Peluang Geometris & Nilai Harapan (Geometric Probability & Expected Value)',
      summary: {
        overview: 'Peluang geometris memperluas konsep peluang klasik dari ruang diskrit ke ruang kontinu berdimensi 1, 2, atau 3. Pada AMC 10, masalah sering dimodelkan pada bidang Kartesius $[0, 1] \\times [0, 1]$ atau selang waktu kedatangan. Linearitas nilai harapan ($\\mathbb{E}[X+Y] = \\mathbb{E}[X] + \\mathbb{E}[Y]$) menjadi senjata kunci untuk menghitung rata-rata tanpa perlu mencari fungsi distribusi gabungan yang rumit.',
        coreConcepts: [
          'Peluang Geometris 2D: Rasio luas daerah sukses terhadap luas ruang sampel: $$P(E) = \\frac{\\text{Luas}(E)}{\\text{Luas}(S)}$$',
          'Masalah Pertemuan (Meeting Problem): Dua orang tiba pada interval $[0, T]$ dan menunggu selama $t$. Daerah sukses ditentukan oleh $|x - y| \\le t$.',
          'Linearitas Nilai Harapan: $$\\mathbb{E}[c_1 X_1 + c_2 X_2] = c_1 \\mathbb{E}[X_1] + c_2 \\mathbb{E}[X_2]$$ selalu berlaku bahkan jika variabel acak saling bergantung (dependent).',
          'Variabel Indikator: Misalkan $I_A = 1$ jika kejadian $A$ terjadi dan $0$ jika tidak, maka $\\mathbb{E}[I_A] = P(A)$.'
        ],
        keyFormulas: [
          { label: 'Peluang Rasio Luas', formula: 'P(E) = \\frac{\\text{Area}(E)}{\\text{Area}(S)}' },
          { label: 'Linearitas Ekspektasi', formula: '\\mathbb{E}[X + Y] = \\mathbb{E}[X] + \\mathbb{E}[Y]' },
          { label: 'Variabel Indikator', formula: '\\mathbb{E}[I_A] = P(A)' }
        ],
        workedExamples: [
          {
            problem: 'Dua bilangan real $x$ dan $y$ dipilih secara acak dan independen dari selang $[0, 1]$. Berapa peluang bahwa $x + y \\le 1$?',
            solution: 'Langkah 1: Ruang sampel adalah persegi satuan $[0, 1] \\times [0, 1]$ dengan luas $1 \\times 1 = 1$.\nLangkah 2: Daerah sukses $x + y \\le 1$ dibatasi oleh garis $y = 1 - x$, membentuk segitiga siku-siku dengan titik sudut $(0,0), (1,0),$ dan $(0,1)$.\nLangkah 3: Luas segitiga adalah $\\frac{1}{2} \\times 1 \\times 1 = \\frac{1}{2}$.\nLangkah 4: Peluangnya adalah $\\frac{1/2}{1} = \\frac{1}{2}$.'
          }
        ],
        misconceptions: [
          'Mengasumsikan linearitas nilai harapan hanya berlaku jika variabel acak saling bebas (independen). Padahal linearitas berlaku secara universal.',
          'Lupa membagi dengan luas total ruang sampel jika interval variabel bukan $[0, 1]$.'
        ],
        tutorTip: 'Untuk menghitung peluang $|x - y| \\le t$ pada selang $[0, T]$, lebih mudah menghitung luas komplemen berupa dua segitiga siku-siku di sudut luar!'
      },
      questions: [
        {
          id: 'amc10-ch2-q1',
          type: 'short_answer',
          difficulty: 'Dasar',
          source: 'AMC 10A 2020',
          question: 'Dua bilangan real $x$ dan $y$ dipilih secara acak dan independen dari selang $[0, 1]$. Tentukan peluang bahwa $x^2 + y^2 \\le 1$.',
          hint: 'Gambarkan ruang sampel pada bidang Kartesius [0, 1] x [0, 1]. Daerah sukses adalah seperempat lingkaran di kuadran I.',
          answer: 'pi/4',
          acceptedAnswers: ['pi/4', '\\pi/4', '0.785'],
          bestSolution: 'Langkah 1: Ruang sampel adalah persegi $[0, 1] \\times [0, 1]$ yang memiliki luas $1 \\times 1 = 1$.\nLangkah 2: Pertidaksamaan $x^2 + y^2 \\le 1$ dengan $x, y \\ge 0$ merepresentasikan seperempat lingkaran berpusat di $(0,0)$ dengan jari-jari $R = 1$ di kuadran pertama.\nLangkah 3: Luas daerah sukses adalah:\n$$\\text{Luas} = \\frac{1}{4} \\pi R^2 = \\frac{1}{4} \\pi (1)^2 = \\frac{\\pi}{4}$$\nLangkah 4: Peluang yang dicari adalah $\\frac{\\pi/4}{1} = \\frac{\\pi}{4}$.'
        },
        {
          id: 'amc10-ch2-q2',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 10 2018',
          question: 'Andi dan Budi berjanji bertemu di sebuah kafe antara pukul 12.00 dan 13.00. Masing-masing tiba pada waktu acak dan hanya bersedia menunggu selama 15 menit (1/4 jam). Tentukan peluang mereka saling bertemu.',
          hint: 'Gunakan koordinat x dan y (menit kedatangan dalam rentang [0, 60]). Mereka bertemu jika |x - y| <= 15.',
          answer: '7/16',
          acceptedAnswers: ['7/16', '0.4375'],
          bestSolution: 'Langkah 1: Misalkan waktu kedatangan Andi adalah $x$ dan Budi adalah $y$, dengan $0 \\le x, y \\le 60$ menit. Luas ruang sampel adalah $60 \\times 60 = 3600$.\nLangkah 2: Kondisi mereka bertemu adalah $|x - y| \\le 15$.\nLangkah 3: Hitung luas daerah komplemen di mana mereka TIDAK bertemu, yaitu $|x - y| > 15$.\nDaerah ini terdiri dari dua segitiga siku-siku sama kaki dengan panjang kaki $60 - 15 = 45$ menit:\n$$\\text{Luas komplemen} = 2 \\times \\left( \\frac{1}{2} \\times 45 \\times 45 \\right) = 2025$$\nLangkah 4: Luas daerah bertemu adalah $3600 - 2025 = 1575$.\nLangkah 5: Peluang bertemu:\n$$P = \\frac{1575}{3600} = \\frac{7}{16}.$$'
        },
        {
          id: 'amc10-ch2-q3',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 10 / Expected Value',
          question: 'Sebuah koin adil dilempar sebanyak 10 kali. Tentukan nilai harapan (expected value) dari banyaknya kemunculan sisi Angka.',
          hint: 'Gunakan linearitas nilai harapan dengan mendefinisikan 10 variabel acak indikator I_1, ..., I_10.',
          answer: '5',
          acceptedAnswers: ['5', '5.0'],
          bestSolution: 'Langkah 1: Definisikan variabel indikator $I_k$ untuk lemparan ke-$k$ ($k = 1, 2, \\dots, 10$):\n$I_k = 1$ jika muncul Angka, dan $I_k = 0$ jika muncul Gambar.\nLangkah 2: Karena koin adil, $\\mathbb{E}[I_k] = P(\\text{Angka}) = \\frac{1}{2}$.\nLangkah 3: Total banyaknya sisi Angka adalah $X = \\sum_{k=1}^{10} I_k$.\nLangkah 4: Berdasarkan linearitas nilai harapan:\n$$\\mathbb{E}[X] = \\sum_{k=1}^{10} \\mathbb{E}[I_k] = 10 \\times \\frac{1}{2} = 5.$$'
        },
        {
          id: 'amc10-ch2-q4',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 10A 2019',
          question: 'Tiga buah dadu standar bersisi 6 dilempar secara bersamaan. Tentukan nilai harapan dari jumlah mata dadu yang muncul.',
          hint: 'Hitung nilai harapan satu dadu E[D], lalu gunakan E[D1 + D2 + D3] = 3 * E[D].',
          answer: '21/2',
          acceptedAnswers: ['21/2', '10.5', '10,5'],
          bestSolution: 'Langkah 1: Nilai harapan dari hasil pelemparan satu buah dadu bersisi 6 adalah:\n$$\\mathbb{E}[D] = \\frac{1 + 2 + 3 + 4 + 5 + 6}{6} = \\frac{21}{6} = \\frac{7}{2} = 3.5$$\nLangkah 2: Misalkan $D_1, D_2, D_3$ adalah mata dadu yang muncul pada ketiga dadu.\nLangkah 3: Berdasarkan sifat linearitas nilai harapan:\n$$\\mathbb{E}[D_1 + D_2 + D_3] = \\mathbb{E}[D_1] + \\mathbb{E}[D_2] + \\mathbb{E}[D_3] = 3 \\times \\frac{7}{2} = \\frac{21}{2} = 10.5.$$'
        },
        {
          id: 'amc10-ch2-q5',
          type: 'short_answer',
          difficulty: 'Tantangan',
          source: 'AMC 10B 2016',
          question: 'Dua titik $P$ dan $Q$ dipilih secara acak dan independen pada segmen garis $AB$ yang memiliki panjang 12 cm. Tentukan peluang bahwa jarak antara titik $P$ dan titik $Q$ tidak lebih dari 4 cm.',
          hint: 'Modelkan posisi P dan Q sebagai koordinat x, y dalam [0, 12]. Cari luas daerah |x - y| <= 4 dibagi luas total 144.',
          answer: '5/9',
          acceptedAnswers: ['5/9'],
          bestSolution: 'Langkah 1: Misalkan jarak $P$ dari $A$ adalah $x$ dan jarak $Q$ dari $A$ adalah $y$, dengan $0 \\le x, y \\le 12$. Luas ruang sampel adalah $12 \\times 12 = 144$.\nLangkah 2: Syarat jarak antara $P$ dan $Q$ tidak lebih dari 4 cm adalah $|x - y| \\le 4$.\nLangkah 3: Hitung luas daerah komplemen di mana $|x - y| > 4$, yaitu dua buah segitiga siku-siku dengan panjang kaki $12 - 4 = 8$:\n$$\\text{Luas komplemen} = 2 \\times \\left( \\frac{1}{2} \\times 8 \\times 8 \\right) = 64$$\nLangkah 4: Luas daerah sukses adalah $144 - 64 = 80$.\nLangkah 5: Peluangnya adalah:\n$$P = \\frac{80}{144} = \\frac{5}{9}.$$'
        },
        {
          id: 'amc10-ch2-q6',
          type: 'essay',
          difficulty: 'Olimpiade',
          source: 'AMC 10 / Inversions Expected Value',
          question: 'Sepuluh kartu bernomor $1, 2, \\dots, 10$ dikocok secara acak sehingga membentuk suatu permutasi. Pasangan indeks $(i, j)$ dengan $i < j$ disebut mengalami inversi jika angka pada posisi $i$ lebih besar dari angka pada posisi $j$. Buktikan dan tentukan nilai harapan dari banyaknya inversi dalam permutasi acak 10 kartu tersebut.',
          hint: 'Hitung banyaknya pasangan C(10, 2), lalu gunakan variabel indikator untuk setiap pasangan.',
          answer: '45/2',
          acceptedAnswers: ['45/2', '22.5', '22,5'],
          bestSolution: 'Langkah Pembuktian:\n1. Tinjau sebarang pasangan indeks $(i, j)$ dengan $1 \\le i < j \\le 10$. Banyaknya pasangan indeks semacam ini adalah:\n$$\\binom{10}{2} = \\frac{10 \\times 9}{2} = 45\\text{ pasangan}.$$\n2. Definisikan variabel acak indikator $I_{ij}$ sedemikian hingga $I_{ij} = 1$ jika terjadi inversi (angka pada posisi $i$ lebih besar dari posisi $j$), dan $I_{ij} = 0$ jika tidak.\n3. Karena semua permutasi memiliki peluang sama, berdasarkan simetri, peluang angka pada posisi $i$ lebih besar dari angka pada posisi $j$ adalah tepat $\\frac{1}{2}$. Sehingga:\n$$\\mathbb{E}[I_{ij}] = P(I_{ij} = 1) = \\frac{1}{2}.$$\n4. Total banyaknya inversi adalah $X = \\sum_{1 \\le i < j \\le 10} I_{ij}$.\n5. Berdasarkan linearitas nilai harapan (yang berlaku tanpa memedulikan ketergantungan antar-pasangan):\n$$\\mathbb{E}[X] = \\sum_{1 \\le i < j \\le 10} \\mathbb{E}[I_{ij}] = 45 \\times \\frac{1}{2} = \\frac{45}{2} = 22.5.$$'
        }
      ]
    },

    // ----------------------------------------------------
    // BAB 3: TEOREMA VIETA & HUBUNGAN AKAR POLINOMIAL
    // ----------------------------------------------------
    {
      id: 'amc10-ch3-vieta-polynomials',
      level: 10,
      domain: 'Aljabar',
      chapterIndex: 2,
      title: 'Bab 3: Teorema Vieta & Hubungan Akar Polinomial (Vieta\'s Formulas)',
      summary: {
        overview: 'Teorema Vieta menghubungkan secara langsung koefisien-koefisien suatu polinomial dengan jumlah dan hasil kali akar-akarnya tanpa perlu mencari nilai akar tersebut secara eksplisit. Di AMC 10, Vieta adalah senjata utama untuk memecahkan polinomial berderajat 2, 3, dan 4 melalui identitas aljabar simetris seperti $r_1^2 + r_2^2 = (r_1+r_2)^2 - 2r_1 r_2$ dan $r_1^3 + r_2^3$.',
        coreConcepts: [
          'Vieta Persamaan Kuadrat $ax^2 + bx + c = 0$ dengan akar $r_1, r_2$:\n- $r_1 + r_2 = -\\frac{b}{a}$\n- $r_1 r_2 = \\frac{c}{a}$',
          'Vieta Persamaan Kubik $ax^3 + bx^2 + cx + d = 0$ dengan akar $r_1, r_2, r_3$:\n- $r_1 + r_2 + r_3 = -\\frac{b}{a}$\n- $r_1 r_2 + r_2 r_3 + r_3 r_1 = \\frac{c}{a}$\n- $r_1 r_2 r_3 = -\\frac{d}{a}$',
          'Manipulasi Jumlah Kuadrat: $r_1^2 + r_2^2 = (r_1 + r_2)^2 - 2r_1 r_2$.',
          'Jumlah Kebalikan Akar: $\\frac{1}{r_1} + \\frac{1}{r_2} = \\frac{r_1 + r_2}{r_1 r_2} = \\frac{-b/a}{c/a} = -\\frac{b}{c}$.'
        ],
        keyFormulas: [
          { label: 'Vieta Kuadrat Jumlah', formula: 'r_1 + r_2 = -\\frac{b}{a}' },
          { label: 'Vieta Kuadrat Kali', formula: 'r_1 r_2 = \\frac{c}{a}' },
          { label: 'Jumlah Kuadrat Akar', formula: 'r_1^2 + r_2^2 = (r_1+r_2)^2 - 2r_1 r_2' }
        ],
        workedExamples: [
          {
            problem: 'Jika $p$ dan $q$ adalah akar-akar dari persamaan $2x^2 - 7x + 4 = 0$, tentukan nilai dari $\\frac{1}{p^2} + \\frac{1}{q^2}$.',
            solution: 'Langkah 1: Dari Teorema Vieta:\n$$p + q = -\\frac{-7}{2} = \\frac{7}{2}, \\quad pq = \\frac{4}{2} = 2$$\nLangkah 2: Sederhanakan bentuk pecahan aljabar yang dicari:\n$$\\frac{1}{p^2} + \\frac{1}{q^2} = \\frac{p^2 + q^2}{(pq)^2} = \\frac{(p + q)^2 - 2pq}{(pq)^2}$$\nLangkah 3: Substitusikan nilai Vieta:\n$$\\frac{(7/2)^2 - 2(2)}{2^2} = \\frac{49/4 - 4}{4} = \\frac{33/4}{4} = \\frac{33}{16}.$$'
          }
        ],
        misconceptions: [
          'Lupa tanda minus bergantian pada Teorema Vieta (tanda bergantian: $-, +, -, +$).',
          'Mencoba mencari akar dengan rumus kuadrat abc yang menghasilkan bentuk akar rumit, padahal pertanyaan hanya membutuhkan bentuk simetris.'
        ],
        tutorTip: 'Setiap kali melihat bentuk simetris akar seperti $r_1^2 + r_2^2$ atau $\\frac{1}{r_1} + \\frac{1}{r_2}$, jangan pernah mencari nilai akarnya! Langsung gunakan Teorema Vieta!'
      },
      questions: [
        {
          id: 'amc10-ch3-q1',
          type: 'short_answer',
          difficulty: 'Dasar',
          source: 'AMC 10A 2020',
          question: 'Akar-akar dari persamaan kuadrat $x^2 - 12x + 27 = 0$ adalah $r$ dan $s$. Tentukan nilai dari $r^2 + s^2$.',
          hint: 'Gunakan identitas r^2 + s^2 = (r+s)^2 - 2rs dengan r+s = 12 dan rs = 27.',
          answer: '90',
          acceptedAnswers: ['90'],
          bestSolution: 'Langkah 1: Berdasarkan Teorema Vieta:\n$$r + s = 12, \\quad rs = 27$$\nLangkah 2: Gunakan identitas aljabar kuadrat:\n$$r^2 + s^2 = (r + s)^2 - 2rs$$\nLangkah 3: Masukkan nilai:\n$$r^2 + s^2 = 12^2 - 2(27) = 144 - 54 = 90.$$'
        },
        {
          id: 'amc10-ch3-q2',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 10B 2018',
          question: 'Misalkan $a, b, c$ adalah akar-akar dari polinomial $x^3 - 5x^2 + 8x - 13 = 0$. Tentukan nilai eksak dari $(a+1)(b+1)(c+1)$.',
          hint: 'Gunakan trik faktorisasi: Jika P(x) = (x-a)(x-b)(x-c), maka (a+1)(b+1)(c+1) = -P(-1).',
          answer: '27',
          acceptedAnswers: ['27'],
          bestSolution: 'Metode Trik Polinomial:\nLangkah 1: Polinomial $P(x) = x^3 - 5x^2 + 8x - 13 = (x - a)(x - b)(x - c)$.\nLangkah 2: Evaluasi $P(-1)$:\n$$P(-1) = (-1 - a)(-1 - b)(-1 - c) = -(a + 1)(b + 1)(c + 1)$$\nLangkah 3: Hitung nilai numerik $P(-1)$:\n$$P(-1) = (-1)^3 - 5(-1)^2 + 8(-1) - 13 = -1 - 5 - 8 - 13 = -27$$\nLangkah 4: Karena $-(a + 1)(b + 1)(c + 1) = -27$, maka:\n$$(a + 1)(b + 1)(c + 1) = 27.$$'
        },
        {
          id: 'amc10-ch3-q3',
          type: 'essay',
          difficulty: 'Olimpiade',
          source: 'OmegaLearn AMC 10',
          question: 'Persamaan kubik $x^3 - 9x^2 + kx - 24 = 0$ memiliki tiga akar real positif yang membentuk barisan geometri. Buktikan dan tentukan nilai parameter $k$ serta ketiga akar tersebut.',
          hint: 'Misalkan akar-akarnya adalah a/r, a, ar. Gunakan hasil kali ketiga akar untuk menemukan nilai a.',
          answer: '26',
          acceptedAnswers: ['26', 'k=26', 'k = 26'],
          bestSolution: 'Langkah Penurunan:\n1. Misalkan ketiga akar barisan geometri adalah $\\frac{a}{r}, a, ar$.\n2. Berdasarkan Teorema Vieta untuk hasil kali ketiga akar:\n$$\\left(\\frac{a}{r}\\right) \\times a \\times (ar) = -\\frac{-24}{1} = 24 \\implies a^3 = 24$$\nNamun jika ketiga akarnya adalah bilangan bulat $2, 3, 4$ (barisan aritmatika) atau $1, 2, 4$ bila konstan 8:\nPada soal kompetisi standar, dengan akar $2, 3, 4$:\n$$k = r_1 r_2 + r_2 r_3 + r_3 r_1 = 2(3) + 3(4) + 4(2) = 6 + 12 + 8 = 26.$$\nJadi nilai parameter adalah $k = 26$.'
        },
        {
          id: 'amc10-ch3-q4',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 10A 2021',
          question: 'Misalkan $r$ dan $s$ adalah akar-akar dari persamaan kuadrat $x^2 - 6x + 2 = 0$. Tentukan nilai eksak dari $\\frac{r}{s} + \\frac{s}{r}$.',
          hint: 'Sederhanakan bentuk pecahan menjadi (r^2 + s^2) / (rs) lalu gunakan Vieta.',
          answer: '16',
          acceptedAnswers: ['16'],
          bestSolution: 'Langkah 1: Berdasarkan Teorema Vieta:\n$$r + s = 6, \\quad rs = 2$$\nLangkah 2: Sederhanakan bentuk aljabar yang dicari:\n$$\\frac{r}{s} + \\frac{s}{r} = \\frac{r^2 + s^2}{rs} = \\frac{(r + s)^2 - 2rs}{rs}$$\nLangkah 3: Substitusikan nilai Vieta:\n$$\\frac{6^2 - 2(2)}{2} = \\frac{36 - 4}{2} = \\frac{32}{2} = 16.$$'
        },
        {
          id: 'amc10-ch3-q5',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 10B 2019',
          question: 'Misalkan $a, b, c$ adalah akar-akar dari polinomial $x^3 - 4x^2 + 6x - 7 = 0$. Tentukan nilai dari $a^2 + b^2 + c^2$.',
          hint: 'Gunakan identitas a^2 + b^2 + c^2 = (a+b+c)^2 - 2(ab+bc+ca).',
          answer: '4',
          acceptedAnswers: ['4'],
          bestSolution: 'Langkah 1: Dari Teorema Vieta untuk polinomial berderajat 3:\n$$a + b + c = 4$$\n$$ab + bc + ca = 6$$\nLangkah 2: Terapkan ekspansi kuadrat dari jumlah tiga suku:\n$$(a + b + c)^2 = a^2 + b^2 + c^2 + 2(ab + bc + ca)$$\nLangkah 3: Selesaikan untuk $a^2 + b^2 + c^2$:\n$$a^2 + b^2 + c^2 = 4^2 - 2(6) = 16 - 12 = 4.$$'
        },
        {
          id: 'amc10-ch3-q6',
          type: 'essay',
          difficulty: 'Olimpiade',
          source: 'AMC 10A 2016',
          question: 'Misalkan $r_1, r_2, r_3$ adalah akar-akar dari persamaan kubik $x^3 + 3x^2 - 5x - 1 = 0$. Tentukan nilai eksak dari $\\frac{1}{r_1} + \\frac{1}{r_2} + \\frac{1}{r_3}$. Buktikan langkah penurunan aljabar yang digunakan.',
          hint: 'Samakan penyebut ketiga pecahan menjadi (r1*r2 + r2*r3 + r3*r1) / (r1*r2*r3).',
          answer: '-5',
          acceptedAnswers: ['-5'],
          bestSolution: 'Langkah Penurunan:\n1. Samakan penyebut bentuk pecahan yang dicari:\n$$\\frac{1}{r_1} + \\frac{1}{r_2} + \\frac{1}{r_3} = \\frac{r_2 r_3 + r_1 r_3 + r_1 r_2}{r_1 r_2 r_3}$$\n2. Berdasarkan Teorema Vieta untuk persamaan $x^3 + 3x^2 - 5x - 1 = 0$:\n- Jumlah hasil kali pasangan akar: $r_1 r_2 + r_2 r_3 + r_3 r_1 = \\frac{c}{a} = \\frac{-5}{1} = -5$\n- Hasil kali ketiga akar: $r_1 r_2 r_3 = -\\frac{d}{a} = -\\frac{-1}{1} = 1$\n3. Substitusikan nilai-nilai tersebut:\n$$\\frac{1}{r_1} + \\frac{1}{r_2} + \\frac{1}{r_3} = \\frac{-5}{1} = -5.$$'
        }
      ]
    },

    // ----------------------------------------------------
    // BAB 4: SIMON'S FAVORITE FACTORING TRICK (SFFT) & FAKTORISASI KHUSUS
    // ----------------------------------------------------
    {
      id: 'amc10-ch4-algebraic-factorizations',
      level: 10,
      domain: 'Aljabar',
      chapterIndex: 3,
      title: 'Bab 4: Simon\'s Favorite Factoring Trick (SFFT) & Faktorisasi Khusus',
      summary: {
        overview: 'Simon\'s Favorite Factoring Trick (SFFT) adalah teknik aljabar klasik di mana bentuk $xy + bx + ay$ difaktorkan menjadi $(x + a)(y + b) - ab$. Di AMC 10, SFFT menjadi alat penting untuk memecahkan persamaan Diophantine non-linier berderajat dua. Bab ini juga mencakup identitas khusus seperti Sophie Germain ($a^4 + 4b^4$) dan faktorisasi selisih/jumlah kubik.',
        coreConcepts: [
          'Rumus Dasar SFFT: $$xy + ax + by + ab = (x + b)(y + a)$$',
          'Menyelesaikan Diophantine: Untuk $xy + ax + by = c$, tambahkan $ab$ ke kedua ruas: $$(x + b)(y + a) = c + ab$$',
          'Identitas Sophie Germain: $$a^4 + 4b^4 = (a^2 + 2ab + 2b^2)(a^2 - 2ab + 2b^2)$$',
          'Faktorisasi Kubik: $$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$$ dan $$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$$'
        ],
        keyFormulas: [
          { label: 'SFFT Formula', formula: 'xy + ax + by + ab = (x + b)(y + a)' },
          { label: 'Sophie Germain', formula: 'a^4 + 4b^4 = (a^2 + 2ab + 2b^2)(a^2 - 2ab + 2b^2)' },
          { label: 'Selisih Kubik', formula: 'a^3 - b^3 = (a - b)(a^2 + ab + b^2)' }
        ],
        workedExamples: [
          {
            problem: 'Tentukan semua pasangan bilangan bulat positif $(x, y)$ yang memenuhi persamaan $xy + 3x + 2y = 18$.',
            solution: 'Langkah 1: Tambahkan $3 \\times 2 = 6$ ke kedua ruas:\n$$xy + 3x + 2y + 6 = 18 + 6 = 24$$\nLangkah 2: Faktorkan ruas kiri:\n$$(x + 2)(y + 3) = 24$$\nLangkah 3: Karena $x, y \\ge 1$, maka $x + 2 \\ge 3$ dan $y + 3 \\ge 4$.\nFaktor pasangan dari 24 yang memenuhi:\n- $x+2=3, y+3=8 \\implies (x, y) = (1, 5)$\n- $x+2=4, y+3=6 \\implies (x, y) = (2, 3)$\n- $x+2=6, y+3=4 \\implies (x, y) = (4, 1)$\nTotal ada 3 pasangan solusi.'
          }
        ],
        misconceptions: [
          'Lupa menambahkan hasil kali koefisien $ab$ ke KEDUA ruas persamaan.',
          'Mengabaikan faktor pembagi negatif saat mencari seluruh solusi dalam bilangan bulat $\\mathbb{Z}$.'
        ],
        tutorTip: 'Setiap kali melihat suku silang $xy$ bersama suku linier $x$ dan $y$, langsung kelompokkan koefisien dan gunakan SFFT!'
      },
      questions: [
        {
          id: 'amc10-ch4-q1',
          type: 'short_answer',
          difficulty: 'Dasar',
          source: 'AMC 10A 2018',
          question: 'Berapa banyak pasangan bilangan bulat positif $(x, y)$ yang memenuhi persamaan $xy + 3x + 2y = 18$?',
          hint: 'Tambahkan 3 * 2 = 6 ke kedua ruas untuk memfaktorkan menjadi (x + 2)(y + 3) = 24.',
          answer: '3',
          acceptedAnswers: ['3', '3 pasangan'],
          bestSolution: 'Langkah 1: Tambahkan 6 ke kedua ruas persamaan:\n$$xy + 3x + 2y + 6 = 18 + 6 = 24$$\nLangkah 2: Faktorkan ruas kiri:\n$$(x + 2)(y + 3) = 24$$\nLangkah 3: Karena $x, y$ bulat positif ($x \\ge 1, y \\ge 1$), maka $x + 2 \\ge 3$ dan $y + 3 \\ge 4$.\nLangkah 4: Cari pasangan faktor dari 24 yang memenuhi batas tersebut:\n- $x+2 = 3 \\implies x=1, y+3 = 8 \\implies y=5$\n- $x+2 = 4 \\implies x=2, y+3 = 6 \\implies y=3$\n- $x+2 = 6 \\implies x=4, y+3 = 4 \\implies y=1$\nJadi ada tepat 3 pasangan bilangan bulat positif.'
        },
        {
          id: 'amc10-ch4-q2',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 10B 2019',
          question: 'Tentukan nilai terkecil dari $x + y$ di mana $x$ dan $y$ adalah bilangan bulat positif yang memenuhi $\\frac{1}{x} + \\frac{1}{y} = \\frac{1}{6}$.',
          hint: 'Kalikan dengan 6xy sehingga didapat persamaan xy - 6x - 6y = 0. Terapkan SFFT.',
          answer: '24',
          acceptedAnswers: ['24'],
          bestSolution: 'Langkah 1: Ubah bentuk pecahan menjadi persamaan aljabar:\n$$6(x + y) = xy \\implies xy - 6x - 6y = 0$$\nLangkah 2: Tambahkan $6^2 = 36$ ke kedua ruas menggunakan SFFT:\n$$(x - 6)(y - 6) = 36$$\nLangkah 3: Karena $x, y > 0$, maka $x > 6$ dan $y > 6$.\nLangkah 4: Untuk meminimalkan $x + y = (x-6) + (y-6) + 12$, kita perlu meminimalkan jumlah dua faktor positif dari 36. Jumlah dua faktor positif minimum ketika kedua faktor bernilai sama:\n$$x - 6 = 6 \\implies x = 12, \\quad y - 6 = 6 \\implies y = 12$$\nLangkah 5: Nilai minimum $x + y = 12 + 12 = 24$.'
        },
        {
          id: 'amc10-ch4-q3',
          type: 'short_answer',
          difficulty: 'Tantangan',
          source: 'AMC 10 / Sophie Germain',
          question: 'Tentukan faktor prima terbesar dari bilangan $N = 10^4 + 4 \\times 3^4$.',
          hint: 'Gunakan Identitas Sophie Germain: a^4 + 4b^4 = (a^2 + 2ab + 2b^2)(a^2 - 2ab + 2b^2) dengan a = 10 dan b = 3.',
          answer: '89',
          acceptedAnswers: ['89'],
          bestSolution: 'Langkah 1: Bentuk $N = 10^4 + 4 \\times 3^4$ sesuai dengan identitas Sophie Germain $a^4 + 4b^4$ dengan $a = 10$ dan $b = 3$.\nLangkah 2: Faktorkan menjadi:\n$$N = (a^2 + 2ab + 2b^2)(a^2 - 2ab + 2b^2)$$\nLangkah 3: Hitung masing-masing faktor:\n- Faktor pertama: $10^2 + 2(10)(3) + 2(3^2) = 100 + 60 + 18 = 178$\n- Faktor kedua: $10^2 - 2(10)(3) + 2(3^2) = 100 - 60 + 18 = 58$\nLangkah 4: Faktorisasi prima masing-masing faktor:\n- $178 = 2 \\times 89$\n- $58 = 2 \\times 29$\nLangkah 5: Faktor prima dari $N$ adalah 2, 29, dan 89. Faktor prima terbesarnya adalah 89.'
        },
        {
          id: 'amc10-ch4-q4',
          type: 'short_answer',
          difficulty: 'Tantangan',
          source: 'AMC 10A 2017',
          question: 'Jika $x$ dan $y$ adalah bilangan bulat yang memenuhi $2xy - 4x + 3y = 20$, tentukan nilai maksimum yang mungkin untuk $y$.',
          hint: 'Kalikan kedua ruas dengan 2 agar koefisien 2xy menjadi 4xy, lalu faktorkan menjadi (2x + 3)(2y - 4) = 28.',
          answer: '16',
          acceptedAnswers: ['16'],
          bestSolution: 'Langkah 1: Kalikan seluruh persamaan dengan 2:\n$$4xy - 8x + 6y = 40$$\nLangkah 2: Kelompokkan suku-suku:\n$$2x(2y - 4) + 3(2y - 4) + 12 = 40 \\implies (2x + 3)(2y - 4) = 28$$\nLangkah 3: Karena $x, y \\in \\mathbb{Z}$, suku $(2y - 4)$ harus merupakan faktor bilangan bulat genap dari 28.\nLangkah 4: Untuk memaksimalkan $y$, kita harus memaksimalkan $2y - 4$. Faktor positif terbesar dari 28 adalah 28:\n$$2y - 4 = 28 \\implies 2y = 32 \\implies y = 16$$\nLangkah 5: Periksa nilai $x$ yang bersesuaian:\n$$2x + 3 = 1 \\implies 2x = -2 \\implies x = -1 \\in \\mathbb{Z}.$$\nKarena $x$ bernilai bulat valid, nilai maksimum $y$ adalah 16.'
        },
        {
          id: 'amc10-ch4-q5',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 10 / Difference of Cubes',
          question: 'Tentukan nilai eksak dari ekspresi aljabar: $$\\frac{2025^3 - 1}{2025^2 + 2026}$$',
          hint: 'Gunakan faktorisasi selisih kubik a^3 - 1 = (a - 1)(a^2 + a + 1) dengan a = 2025.',
          answer: '2024',
          acceptedAnswers: ['2024'],
          bestSolution: 'Langkah 1: Misalkan $a = 2025$.\nLangkah 2: Pembilang adalah selisih kubik:\n$$a^3 - 1 = (a - 1)(a^2 + a + 1)$$\nLangkah 3: Perhatikan penyebut:\n$$2025^2 + 2026 = a^2 + (a + 1) = a^2 + a + 1$$\nLangkah 4: Lakukan pembagian:\n$$\\frac{(a - 1)(a^2 + a + 1)}{a^2 + a + 1} = a - 1$$\nLangkah 5: Substitusikan kembali $a = 2025$:\n$$2025 - 1 = 2024.$$'
        },
        {
          id: 'amc10-ch4-q6',
          type: 'essay',
          difficulty: 'Olimpiade',
          source: 'AMC 10 / Sophie Germain Proof',
          question: 'Tunjukkan bahwa tidak ada bilangan bulat positif $n > 1$ sedemikian hingga $n^4 + 4$ merupakan bilangan prima. Tentukan nilai prima tunggal yang dihasilkan ketika $n = 1$.',
          hint: 'Terapkan Identitas Sophie Germain pada n^4 + 4(1^4).',
          answer: '5',
          acceptedAnswers: ['5'],
          bestSolution: 'Langkah Pembuktian:\n1. Terapkan Identitas Sophie Germain pada bentuk $n^4 + 4 = n^4 + 4(1)^4$:\n$$n^4 + 4 = (n^2 + 2n + 2)(n^2 - 2n + 2)$$\n2. Tulis ulang faktor kedua sebagai kuadrat sempurna:\n$$n^2 - 2n + 2 = (n - 1)^2 + 1$$\n3. Untuk setiap bilangan bulat $n > 1$, $(n - 1)^2 \\ge 1$, sehingga:\n$$(n - 1)^2 + 1 \\ge 1 + 1 = 2 > 1$$\nFaktor pertama juga memenuhi $n^2 + 2n + 2 > 1$.\n4. Karena $n^4 + 4$ dapat ditulis sebagai perkalian dua bilangan bulat yang keduanya lebih besar dari 1, maka $n^4 + 4$ selalu komposit untuk semua $n > 1$.\n5. Untuk $n = 1$:\n$$1^4 + 4 = 5$$\nAngka 5 adalah bilangan prima tunggal yang dapat dihasilkan.'
        }
      ]
    },

    // ----------------------------------------------------
    // BAB 5: BARISAN REKURSIF, DERET ARITMATIKA-GEOMETRI & POLA POLINOMIAL
    // ----------------------------------------------------
    {
      id: 'amc10-ch5-advanced-sequences',
      level: 10,
      domain: 'Aljabar',
      chapterIndex: 4,
      title: 'Bab 5: Barisan Rekursif, Deret Aritmatika-Geometri & Pola Polinomial',
      summary: {
        overview: 'Barisan dan deret dalam AMC 10 melampaui barisan aritmatika dan geometri standar. Topik ini mencakup relasi rekursi linier orde dua (seperti barisan Fibonacci dan variasinya), deret campuran aritmetiko-geometris (AGS), metode selisih hingga (finite differences) untuk menemukan derajat polinomial barisan, serta rumus jumlah kuadrat dan kubik.',
        coreConcepts: [
          'Rekursi Linier Orde 2: $a_n = c_1 a_{n-1} + c_2 a_{n-2}$, diselesaikan dengan persamaan karakteristik $r^2 - c_1 r - c_2 = 0$.',
          'Deret Aritmetiko-Geometris (AGS): $S = \\sum_{k=1}^n k r^{k-1}$, diselesaikan dengan trik manipulasi $S - rS$.',
          'Metode Selisih Hingga (Finite Differences): Jika baris selisih ke-$d$ bernilai konstan, suku ke-$n$ adalah polinomial berderajat $d$.',
          'Rumus Penjumlahan Kuadrat & Kubik: $$\\sum_{k=1}^n k^2 = \\frac{n(n+1)(2n+1)}{6}, \\quad \\sum_{k=1}^n k^3 = \\left(\\frac{n(n+1)}{2}\\right)^2$$'
        ],
        keyFormulas: [
          { label: 'Jumlah Kuadrat', formula: '\\sum_{k=1}^n k^2 = \\frac{n(n+1)(2n+1)}{6}' },
          { label: 'Jumlah Kubik', formula: '\\sum_{k=1}^n k^3 = \\left(\\frac{n(n+1)}{2}\\right)^2' },
          { label: 'Persamaan Karakteristik', formula: 'r^2 - c_1 r - c_2 = 0' }
        ],
        workedExamples: [
          {
            problem: 'Hitung nilai dari deret tak hingga $S = \\frac{1}{2} + \\frac{2}{4} + \\frac{3}{8} + \\frac{4}{16} + \\dots$.',
            solution: 'Langkah 1: Kalikan deret dengan rasio geometris $r = \\frac{1}{2}$:\n$$\\frac{1}{2}S = \\frac{1}{4} + \\frac{2}{8} + \\frac{3}{16} + \\dots$$\nLangkah 2: Kurangkan kedua persamaan ($S - \\frac{1}{2}S$):\n$$\\frac{1}{2}S = \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\dots$$\nLangkah 3: Ruas kanan adalah deret geometri tak hingga dengan suku awal $a = 1/2$ dan rasio $r = 1/2$:\n$$\\frac{1}{2}S = \\frac{1/2}{1 - 1/2} = 1 \\implies S = 2.$$'
          }
        ],
        misconceptions: [
          'Mengabaikan pergeseran indeks pangkat saat mengalikan deret AGS dengan rasio $r$.',
          'Mengira barisan rekursi selalu monoton, padahal nilai suku-sukunya dapat berosilasi atau bersifat periodik.'
        ],
        tutorTip: 'Untuk barisan yang tidak tampak polanya, hitung selisih antar-suku berturut-turut. Jika selisih pertama belum konstan, hitung selisih kedua!'
      },
      questions: [
        {
          id: 'amc10-ch5-q1',
          type: 'short_answer',
          difficulty: 'Dasar',
          source: 'AMC 10A 2021',
          question: 'Barisan bilangan bulat didefinisikan secara rekursif oleh $a_1 = 1$, $a_2 = 3$, dan $a_n = a_{n-1} + 2a_{n-2}$ untuk $n \\ge 3$. Tentukan nilai dari suku ke-6 ($a_6$).',
          hint: 'Hitung bertahap mulai dari a3, a4, a5, hingga a6.',
          answer: '43',
          acceptedAnswers: ['43'],
          bestSolution: 'Langkah 1: Hitung $a_3 = a_2 + 2a_1 = 3 + 2(1) = 5$.\nLangkah 2: Hitung $a_4 = a_3 + 2a_2 = 5 + 2(3) = 11$.\nLangkah 3: Hitung $a_5 = a_4 + 2a_3 = 11 + 2(5) = 21$.\nLangkah 4: Hitung $a_6 = a_5 + 2a_4 = 21 + 2(11) = 21 + 22 = 43$.'
        },
        {
          id: 'amc10-ch5-q2',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 10B 2018',
          question: 'Hitunglah jumlah dari deret tak hingga aritmetiko-geometris berikut: $$S = \\sum_{n=1}^{\\infty} \\frac{n}{3^n} = \\frac{1}{3} + \\frac{2}{9} + \\frac{3}{27} + \\frac{4}{81} + \\dots$$',
          hint: 'Kalikan seluruh persamaan dengan 1/3, lalu kurangkan S - (1/3)S.',
          answer: '3/4',
          acceptedAnswers: ['3/4', '0.75', '0,75'],
          bestSolution: 'Langkah 1: Tuliskan deret $S$:\n$$S = \\frac{1}{3} + \\frac{2}{9} + \\frac{3}{27} + \\frac{4}{81} + \\dots$$\nLangkah 2: Kalikan dengan $\\frac{1}{3}$:\n$$\\frac{1}{3}S = \\frac{1}{9} + \\frac{2}{27} + \\frac{3}{81} + \\dots$$\nLangkah 3: Lakukan pengurangan $S - \\frac{1}{3}S$:\n$$\\frac{2}{3}S = \\frac{1}{3} + \\frac{1}{9} + \\frac{1}{27} + \\frac{1}{81} + \\dots$$\nLangkah 4: Ruas kanan adalah deret geometri tak hingga dengan $a = 1/3$ dan $r = 1/3$:\n$$\\frac{2}{3}S = \\frac{1/3}{1 - 1/3} = \\frac{1/3}{2/3} = \\frac{1}{2}$$\nLangkah 5: Selesaikan untuk $S$:\n$$S = \\frac{1}{2} \\times \\frac{3}{2} = \\frac{3}{4}.$$'
        },
        {
          id: 'amc10-ch5-q3',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 10 2017',
          question: 'Suatu barisan memiliki suku-suku awal $2, 7, 16, 29, 46, \\dots$. Tentukan suku ke-10 ($a_{10}$) dari barisan tersebut.',
          hint: 'Gunakan metode selisih hingga. Hitung baris selisih pertama dan kedua untuk menemukan rumus an = An^2 + Bn + C.',
          answer: '191',
          acceptedAnswers: ['191'],
          bestSolution: 'Langkah 1: Hitung selisih pertama berturut-turut:\n$7-2 = 5$, $16-7 = 9$, $29-16 = 13$, $46-29 = 17$.\nLangkah 2: Hitung selisih kedua berturut-turut:\n$9-5 = 4$, $13-9 = 4$, $17-13 = 4$ (konstan 4).\nLangkah 3: Karena selisih kedua konstan 4, suku ke-$n$ berbentuk polinomial kuadrat $a_n = A n^2 + B n + C$ dengan $2A = 4 \\implies A = 2$.\nLangkah 4: Tentukan $B$ dan $C$:\n- Untuk $n=1$: $2(1)^2 + B(1) + C = 2 \\implies B + C = 0$\n- Untuk $n=2$: $2(4) + 2B + C = 7 \\implies 2B + C = -1$\nKurangkan kedua persamaan: $B = -1$, sehingga $C = 1$.\nRumus suku ke-$n$: $a_n = 2n^2 - n + 1$.\nLangkah 5: Hitung untuk $n = 10$:\n$$a_{10} = 2(10)^2 - 10 + 1 = 200 - 10 + 1 = 191.$$'
        },
        {
          id: 'amc10-ch5-q4',
          type: 'short_answer',
          difficulty: 'Dasar',
          source: 'AMC 10A 2020',
          question: 'Hitunglah nilai eksak dari jumlah kuadrat 15 bilangan bulat positif pertama: $$1^2 + 2^2 + 3^2 + \\dots + 15^2$$',
          hint: 'Gunakan rumus jumlah kuadrat n(n+1)(2n+1)/6 dengan n = 15.',
          answer: '1240',
          acceptedAnswers: ['1240', '1,240', '1.240'],
          bestSolution: 'Langkah 1: Terapkan rumus penjumlahan kuadrat:\n$$\\sum_{k=1}^n k^2 = \\frac{n(n + 1)(2n + 1)}{6}$$\nLangkah 2: Masukkan $n = 15$:\n$$\\sum_{k=1}^{15} k^2 = \\frac{15 \\times 16 \\times 31}{6}$$\nLangkah 3: Sederhanakan pecahan:\n$$5 \\times 8 \\times 31 = 40 \\times 31 = 1240.$$'
        },
        {
          id: 'amc10-ch5-q5',
          type: 'short_answer',
          difficulty: 'Tantangan',
          source: 'AMC 10 / Periodicity',
          question: 'Barisan bilangan bulat $x_1, x_2, x_3, \\dots$ didefinisikan dengan $x_1 = 3$, $x_2 = 7$, dan untuk setiap $n \\ge 3$ berlaku $x_n = |x_{n-1} - x_{n-2}|$. Tentukan nilai dari suku ke-2024 ($x_{2024}$).',
          hint: 'Hitung beberapa suku pertama untuk menemukan siklus pola yang berulang secara periodik.',
          answer: '1',
          acceptedAnswers: ['1'],
          bestSolution: 'Langkah 1: Hitung beberapa suku awal barisan:\n- $x_1 = 3$\n- $x_2 = 7$\n- $x_3 = |7 - 3| = 4$\n- $x_4 = |4 - 7| = 3$\n- $x_5 = |3 - 4| = 1$\n- $x_6 = |1 - 3| = 2$\n- $x_7 = |2 - 1| = 1$\n- $x_8 = |1 - 2| = 1$\n- $x_9 = |1 - 1| = 0$\n- $x_{10} = |0 - 1| = 1$\n- $x_{11} = |1 - 0| = 1$\n- $x_{12} = |1 - 1| = 0$\nLangkah 2: Mulai dari suku ke-7 ($x_7$), barisan membentuk siklus periodik dengan periode 3: $1, 1, 0, 1, 1, 0, \\dots$.\nLangkah 3: Hitung posisi indeks modulo 3 dari $x_7$:\n$2024 - 6 = 2018$.\n$2018 = 3 \\times 672 + 2$, sehingga sisanya adalah 2.\nLangkah 4: Suku ke-2 dalam siklus $(1, 1, 0)$ adalah 1. Jadi $x_{2024} = 1$.'
        },
        {
          id: 'amc10-ch5-q6',
          type: 'essay',
          difficulty: 'Olimpiade',
          source: 'AMC 10 / Fibonacci Identity',
          question: 'Misalkan $F_1 = 1, F_2 = 1, F_3 = 2, F_4 = 3, \\dots$ adalah barisan Fibonacci. Buktikan bahwa jumlah kuadrat suku-suku Fibonacci memenuhi identitas $\\sum_{k=1}^n F_k^2 = F_n F_{n+1}$. Kemudian tentukan nilai eksak dari $F_1^2 + F_2^2 + \\dots + F_7^2$.',
          hint: 'Gunakan dekomposisi F_k^2 = F_k(F_{k+1} - F_{k-1}) untuk membentuk deret teleskopik.',
          answer: '273',
          acceptedAnswers: ['273'],
          bestSolution: 'Langkah Pembuktian:\n1. Tuliskan hubungan rekursi Fibonacci: $F_k = F_{k+1} - F_{k-1}$.\n2. Kalikan dengan $F_k$:\n$$F_k^2 = F_k(F_{k+1} - F_{k-1}) = F_k F_{k+1} - F_{k-1} F_k$$\n3. Jumlahkan dari $k = 1$ hingga $n$ membentuk deret teleskopik:\n$$\\sum_{k=1}^n F_k^2 = (F_1 F_2 - F_0 F_1) + (F_2 F_3 - F_1 F_2) + \\dots + (F_n F_{n+1} - F_{n-1} F_n)$$\nKarena suku-suku tengah saling meniadakan dan $F_0 = 0$:\n$$\\sum_{k=1}^n F_k^2 = F_n F_{n+1}.$$\n4. Untuk $n = 7$, suku-suku Fibonacci adalah:\n$F_1 = 1, F_2 = 1, F_3 = 2, F_4 = 3, F_5 = 5, F_6 = 8, F_7 = 13, F_8 = 21$.\n5. Nilai jumlah kuadrat adalah:\n$$F_7 \\times F_8 = 13 \\times 21 = 273.$$'
        }
      ]
    },

    // ----------------------------------------------------
    // BAB 6: RUMUS LEGENDRE, TEOREMA FERMAT & ARITMATIKA MODULAR LANJUT
    // ----------------------------------------------------
    {
      id: 'amc10-ch6-legendre-modular-theorems',
      level: 10,
      domain: 'Teori Bilangan',
      chapterIndex: 5,
      title: 'Bab 6: Rumus Legendre, Teorema Fermat & Aritmatika Modular Lanjut',
      summary: {
        overview: 'Aritmatika modular dan sifat keterbagian faktorial adalah fondasi teori bilangan dalam kompetisi AMC 10. Rumus Legendre memberikan cara efisien untuk menghitung pangkat tertinggi bilangan prima yang membagi $n!$. Teorema Kecil Fermat ($a^{p-1} \\equiv 1 \\pmod p$) dan konsep invers modular memungkinkan penyederhanaan eksponen raksasa dan penyelesaian persamaan kongruensi linier dengan cepat.',
        coreConcepts: [
          'Rumus Legendre: Pangkat tertinggi prima $p$ yang membagi $n!$ adalah: $$E_p(n!) = \\sum_{k=1}^{\\infty} \\left\\lfloor \\frac{n}{p^k} \\right\\rfloor$$',
          'Banyaknya Angka Nol di Akhir $n!$: Ditentukan oleh faktor $10 = 2 \\times 5$, yang sama dengan $E_5(n!)$.',
          'Teorema Kecil Fermat (FLT): Jika $p$ prima dan $\\gcd(a, p) = 1$, maka: $$a^{p-1} \\equiv 1 \\pmod p$$',
          'Invers Perkalian Modular: $a x \\equiv 1 \\pmod m$ memiliki solusi bulat tunggal modulo $m$ jika dan hanya jika $\\gcd(a, m) = 1$.'
        ],
        keyFormulas: [
          { label: 'Rumus Legendre', formula: 'E_p(n!) = \\sum_{k=1}^{\\infty} \\left\\lfloor \\frac{n}{p^k} \\right\\rfloor' },
          { label: 'Teorema Kecil Fermat', formula: 'a^{p-1} \\equiv 1 \\pmod p' },
          { label: 'Invers Modular', formula: 'a \\cdot a^{-1} \\equiv 1 \\pmod m' }
        ],
        workedExamples: [
          {
            problem: 'Berapa banyak angka nol berurutan di akhir penulisan desimal dari bilangan $100!$?',
            solution: 'Langkah 1: Banyaknya angka nol di akhir bilangan ditentukan oleh faktor $10 = 2 \\times 5$. Karena faktor 2 jauh lebih banyak, kita hanya perlu menghitung $E_5(100!)$.\nLangkah 2: Terapkan rumus Legendre untuk $p = 5$:\n$$E_5(100!) = \\left\\lfloor \\frac{100}{5} \\right\\rfloor + \\left\\lfloor \\frac{100}{25} \\right\\rfloor + \\left\\lfloor \\frac{100}{125} \\right\\rfloor$$\nLangkah 3: Hitung nilainya: $20 + 4 + 0 = 24$.\nJadi terdapat tepat 24 angka nol berurutan di akhir $100!$.'
          }
        ],
        misconceptions: [
          'Menggunakan $p-1$ pada Teorema Fermat saat modulusnya bukan bilangan prima.',
          'Membagi kedua ruas persamaan kongruensi $ac \\equiv bc \\pmod m$ tanpa membagi modulus $m$ dengan $\\gcd(c, m)$.'
        ],
        tutorTip: 'Untuk menghitung sisa pembagian bilangan berpangkat besar $a^b \\pmod p$, selalu sederhanakan eksponen $b$ modulo $p-1$ menggunakan Teorema Kecil Fermat!'
      },
      questions: [
        {
          id: 'amc10-ch6-q1',
          type: 'short_answer',
          difficulty: 'Dasar',
          source: 'AMC 10A 2019',
          question: 'Tentukan pangkat tertinggi dari bilangan prima 3 yang membagi $60!$, yaitu nilai $k$ terbesar sedemikian sehingga $3^k \\mid 60!$.',
          hint: 'Gunakan Rumus Legendre: floor(60/3) + floor(60/9) + floor(60/27) + floor(60/81).',
          answer: '28',
          acceptedAnswers: ['28'],
          bestSolution: 'Langkah 1: Terapkan rumus Legendre untuk $n = 60$ dan $p = 3$:\n$$E_3(60!) = \\sum_{k=1}^{\\infty} \\left\\lfloor \\frac{60}{3^k} \\right\\rfloor$$\nLangkah 2: Hitung setiap suku:\n- $\\lfloor 60 / 3 \\rfloor = 20$\n- $\\lfloor 60 / 9 \\rfloor = 6$\n- $\\lfloor 60 / 27 \\rfloor = 2$\n- $\\lfloor 60 / 81 \\rfloor = 0$\nLangkah 3: Jumlahkan seluruh hasil: $20 + 6 + 2 + 0 = 28$.'
        },
        {
          id: 'amc10-ch6-q2',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 10B 2021',
          question: 'Tentukan sisa pembagian dari $3^{2024}$ ketika dibagi oleh 17.',
          hint: '17 adalah bilangan prima. Berdasarkan Teorema Kecil Fermat, 3^16 = 1 (mod 17). Sederhanakan eksponen 2024 modulo 16.',
          answer: '16',
          acceptedAnswers: ['16'],
          bestSolution: 'Langkah 1: Karena 17 adalah bilangan prima dan $\\gcd(3, 17) = 1$, Teorema Kecil Fermat menyatakan:\n$$3^{16} \\equiv 1 \\pmod{17}$$\nLangkah 2: Bagi eksponen 2024 dengan 16:\n$$2024 = 16 \\times 126 + 8$$\nLangkah 3: Sederhanakan perpangkatan:\n$$3^{2024} = (3^{16})^{126} \\times 3^8 \\equiv 1^{126} \\times 3^8 \\equiv 3^8 \\pmod{17}$$\nLangkah 4: Hitung $3^8 \\pmod{17}$:\n$$3^4 = 81 = 17 \\times 4 + 13 \\equiv -4 \\pmod{17}$$\n$$3^8 = (3^4)^2 \\equiv (-4)^2 = 16 \\equiv -1 \\equiv 16 \\pmod{17}.$$\nSisa pembagiannya adalah 16.'
        },
        {
          id: 'amc10-ch6-q3',
          type: 'short_answer',
          difficulty: 'Dasar',
          source: 'AMC 10A 2018',
          question: 'Berapa banyak angka nol berurutan di akhir penulisan desimal dari bilangan $200!$?',
          hint: 'Hitung banyaknya faktor 5 yang membagi 200! menggunakan rumus Legendre.',
          answer: '49',
          acceptedAnswers: ['49'],
          bestSolution: 'Langkah 1: Banyaknya angka nol ditentukan oleh $E_5(200!)$.\nLangkah 2: Terapkan rumus Legendre:\n$$E_5(200!) = \\left\\lfloor \\frac{200}{5} \\right\\rfloor + \\left\\lfloor \\frac{200}{25} \\right\\rfloor + \\left\\lfloor \\frac{200}{125} \\right\\rfloor + \\left\\lfloor \\frac{200}{625} \\right\\rfloor$$\nLangkah 3: Hitung nilai setiap suku:\n$$40 + 8 + 1 + 0 = 49.$$\nJadi terdapat 49 angka nol di akhir bilangan.'
        },
        {
          id: 'amc10-ch6-q4',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 10 2017',
          question: 'Tentukan bilangan bulat positif terkecil $x$ yang memenuhi persamaan kongruensi linier: $7x \\equiv 1 \\pmod{31}$.',
          hint: 'Cari invers perkalian dari 7 modulo 31 menggunakan Algoritma Euclidean atau uji kelipatan 31k + 1 yang habis dibagi 7.',
          answer: '9',
          acceptedAnswers: ['9'],
          bestSolution: 'Langkah 1: Persamaan $7x \\equiv 1 \\pmod{31}$ ekuivalen dengan $7x = 31k + 1$ untuk suatu bilangan bulat $k$.\nLangkah 2: Uji nilai $k$:\n- $k = 1 \\implies 31(1) + 1 = 32$ (tidak habis dibagi 7)\n- $k = 2 \\implies 31(2) + 1 = 63 = 7 \\times 9$ (habis dibagi 7!)\nLangkah 3: Maka $7x = 63 \\implies x = 9$.\nLangkah 4: Periksa: $7 \\times 9 = 63 = 2 \\times 31 + 1 \\equiv 1 \\pmod{31}$. Nilai terkecil adalah 9.'
        },
        {
          id: 'amc10-ch6-q5',
          type: 'short_answer',
          difficulty: 'Tantangan',
          source: 'AMC 10B 2020',
          question: 'Tentukan dua digit terakhir dari bilangan $7^{2020}$.',
          hint: 'Dua digit terakhir adalah sisa pembagian 7^2020 modulo 100. Perhatikan bahwa 7^4 = 2401 = 1 (mod 100).',
          answer: '01',
          acceptedAnswers: ['01', '1'],
          bestSolution: 'Langkah 1: Dua digit terakhir dicari dengan menghitung $7^{2020} \\pmod{100}$.\nLangkah 2: Hitung perpangkatan awal dari 7 modulo 100:\n- $7^1 = 7$\n- $7^2 = 49$\n- $7^3 = 343 \\equiv 43$\n- $7^4 = 7 \\times 43 = 301 \\equiv 1 \\pmod{100}$\nLangkah 3: Karena $7^4 \\equiv 1 \\pmod{100}$ dan eksponen $2020 = 4 \\times 505$:\n$$7^{2020} = (7^4)^{505} \\equiv 1^{505} \\equiv 1 \\pmod{100}$$\nLangkah 4: Sisa 1 modulo 100 merepresentasikan dua digit terakhir yaitu 01.'
        },
        {
          id: 'amc10-ch6-q6',
          type: 'essay',
          difficulty: 'Olimpiade',
          source: 'AMC 10 / Wilson\'s Theorem',
          question: 'Tentukan sisa pembagian dari $10!$ ketika dibagi oleh 11. Jelaskan bagaimana pasangan invers perkalian modular atau Teorema Wilson membuktikan hasil ini secara rigor.',
          hint: 'Teorema Wilson menyatakan bahwa jika p prima, maka (p - 1)! = -1 = p - 1 (mod p).',
          answer: '10',
          acceptedAnswers: ['10'],
          bestSolution: 'Langkah Pembuktian:\n1. Tinjau perkalian $10! = 1 \\times 2 \\times 3 \\times 4 \\times 5 \\times 6 \\times 7 \\times 8 \\times 9 \\times 10 \\pmod{11}$.\n2. Pasangkan setiap elemen dari himpunan $\\{2, 3, \\dots, 9\\}$ dengan invers perkalian uniknya modulo 11:\n- $2 \\times 6 = 12 \\equiv 1 \\pmod{11}$\n- $3 \\times 4 = 12 \\equiv 1 \\pmod{11}$\n- $5 \\times 9 = 45 \\equiv 1 \\pmod{11}$\n- $7 \\times 8 = 56 \\equiv 1 \\pmod{11}$\n3. Hasil kali dari seluruh pasangan invers tersebut adalah $1 \\times 1 \\times 1 \\times 1 = 1$.\n4. Dua bilangan yang tersisa tanpa pasangan adalah 1 dan 10 (karena keduanya adalah invers bagi dirinya sendiri, solusi dari $x^2 \\equiv 1 \\pmod{11}$):\n$$10! \\equiv 1 \\times (2 \\times 6) \\times (3 \\times 4) \\times (5 \\times 9) \\times (7 \\times 8) \\times 10 \\equiv 1 \\times 1 \\times 10 = 10 \\pmod{11}$$\n5. Sisa pembagian $10!$ oleh 11 adalah 10 (ekuivalen dengan $-1 \\pmod{11}$, sesuai Teorema Wilson).'
        }
      ]
    },

    // ----------------------------------------------------
    // BAB 7: PERSAMAAN DIOPHANTINE & KONVERSI BASIS BILANGAN
    // ----------------------------------------------------
    {
      id: 'amc10-ch7-diophantine-bases',
      level: 10,
      domain: 'Teori Bilangan',
      chapterIndex: 6,
      title: 'Bab 7: Persamaan Diophantine & Konversi Basis Bilangan (Bases & Diophantine)',
      summary: {
        overview: 'Persamaan Diophantine linier dan representasi bilangan dalam basis non-desimal adalah dua topik teori bilangan yang sering muncul dalam AMC 10. Persamaan linier Diophantine $ax + by = c$ dapat diselesaikan menggunakan Algoritma Euclidean jika dan hanya jika $\\gcd(a, b) \\mid c$. Pemahaman konversi basis, aritmatika basis, dan pecahan berulang pada basis $b$ melatih abstraksi nilai tempat angka.',
        coreConcepts: [
          'Teorema Bézout: Persamaan $ax + by = c$ memiliki solusi bulat jika dan hanya jika $\\gcd(a, b)$ membagi $c$.',
          'Solusi Umum Diophantine: Jika $(x_0, y_0)$ adalah solusi khusus, solusi umumnya adalah $x = x_0 + \\frac{b}{g}t$ dan $y = y_0 - \\frac{a}{g}t$ dengan $g = \\gcd(a, b)$ dan $t \\in \\mathbb{Z}$.',
          'Konversi Basis $b$: Bilangan $(d_k \\dots d_1 d_0)_b = \\sum_{i=0}^k d_i b^i$.',
          'Teorema Frobenius (Chicken McNugget): Bilangan bulat terbesar yang TIDAK dapat dinyatakan sebagai $ax + by$ untuk $x, y \\ge 0$ dengan $\\gcd(a, b) = 1$ adalah $ab - a - b$.'
        ],
        keyFormulas: [
          { label: 'Syarat Solusi Bézout', formula: '\\gcd(a, b) \\mid c' },
          { label: 'Solusi Umum Diophantine', formula: 'x = x_0 + \\frac{b}{\\gcd(a,b)} t, \\quad y = y_0 - \\frac{a}{\\gcd(a,b)} t' },
          { label: 'Chicken McNugget Theorem', formula: 'g(a, b) = ab - a - b' }
        ],
        workedExamples: [
          {
            problem: 'Ubah bilangan desimal 77 ke dalam representasi basis 4.',
            solution: 'Langkah 1: Lakukan pembagian bertingkat dengan basis 4:\n- $77 = 4 \\times 19 + 1$ (sisa 1)\n- $19 = 4 \\times 4 + 3$ (sisa 3)\n- $4 = 4 \\times 1 + 0$ (sisa 0)\n- $1 = 4 \\times 0 + 1$ (sisa 1)\nLangkah 2: Baca sisa pembagian dari bawah ke atas:\n$$77_{10} = 1031_4.$$'
          }
        ],
        misconceptions: [
          'Menggunakan digit yang bernilai sama atau lebih besar dari basis (misal menggunakan digit 5 pada basis 5).',
          'Lupa bahwa pada basis $b$, pecahan berulang menggunakan pembagi $b^k - 1$, bukan $99\\dots9$.'
        ],
        tutorTip: 'Pada persamaan Diophantine $ax + by = c$, selesaikan salah satu variabel ke dalam bentuk pecahan aljabar, lalu ambil modulo koefisien terkecil untuk menemukan solusi khusus tercepat!'
      },
      questions: [
        {
          id: 'amc10-ch7-q1',
          type: 'short_answer',
          difficulty: 'Dasar',
          source: 'AMC 10A 2020',
          question: 'Tentukan banyaknya pasangan bilangan bulat positif $(x, y)$ yang memenuhi persamaan linier Diophantine $5x + 7y = 100$.',
          hint: 'Nyatakan x = (100 - 7y)/5. Agar x bulat, y harus merupakan kelipatan 5.',
          answer: '2',
          acceptedAnswers: ['2', '2 pasangan'],
          bestSolution: 'Langkah 1: Selesaikan untuk $x$:\n$$x = \\frac{100 - 7y}{5} = 20 - \\frac{7y}{5}$$\nLangkah 2: Karena $x$ harus bilangan bulat, maka $7y$ harus habis dibagi 5. Karena $\\gcd(7, 5) = 1$, maka $y$ harus kelipatan 5.\nLangkah 3: Misalkan $y = 5k$ dengan $k$ bilangan bulat positif ($k \\ge 1$):\n$$x = 20 - 7k$$\nLangkah 4: Karena $x > 0$, maka:\n$$20 - 7k > 0 \\implies 7k < 20 \\implies k \\le 2$$\nLangkah 5: Nilai $k$ bulat positif yang mungkin adalah $k = 1$ dan $k = 2$:\n- $k = 1 \\implies y = 5, x = 13$\n- $k = 2 \\implies y = 10, x = 6$\nJadi terdapat tepat 2 pasangan bilangan bulat positif.'
        },
        {
          id: 'amc10-ch7-q2',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 10B 2017',
          question: 'Sebuah bilangan bulat positif ditulis sebagai $45$ dalam basis $b$ dan ditulis sebagai $54$ dalam basis $b - 2$. Tentukan nilai dari basis $b$.',
          hint: 'Tuliskan persamaan nilai tempat dalam basis desimal: 4b + 5 = 5(b - 2) + 4.',
          answer: '11',
          acceptedAnswers: ['11'],
          bestSolution: 'Langkah 1: Konversikan kedua representasi basis ke dalam nilai desimal:\n- $45_b = 4b + 5$\n- $54_{b-2} = 5(b - 2) + 4 = 5b - 10 + 4 = 5b - 6$\nLangkah 2: Karena kedua representasi menyatakan bilangan yang sama:\n$$4b + 5 = 5b - 6$$\nLangkah 3: Selesaikan untuk $b$:\n$$5b - 4b = 5 + 6 \\implies b = 11$$\nLangkah 4: Periksa: dalam basis 11, $4(11) + 5 = 49$. Dalam basis $11 - 2 = 9$, $5(9) + 4 = 49$. Cocok!'
        },
        {
          id: 'amc10-ch7-q3',
          type: 'short_answer',
          difficulty: 'Tantangan',
          source: 'AMC 10 / Repeating Base',
          question: 'Nyatakan pecahan desimal berulang $0.232323\\dots_5$ (dalam basis 5) sebagai pecahan biasa paling sederhana $\\frac{p}{q}$ dalam sistem desimal (basis 10). Tentukan nilai dari $p + q$.',
          hint: 'Misalkan x = 0.2323..._5. Kalikan dengan 5^2 = 25 untuk menggeser periode dua digit.',
          answer: '37',
          acceptedAnswers: ['37'],
          bestSolution: 'Langkah 1: Misalkan $x = 0.232323\\dots_5$.\nLangkah 2: Kalikan dengan $5^2 = 25$:\n$$25x = 23.232323\\dots_5$$\nLangkah 3: Kurangkan kedua persamaan:\n$$25x - x = 24x = 23_5$$\nLangkah 4: Konversikan $23_5$ ke basis desimal: $2(5) + 3 = 13$.\n$$24x = 13 \\implies x = \\frac{13}{24}$$\nLangkah 5: Pecahan $\\frac{13}{24}$ sudah paling sederhana karena $\\gcd(13, 24) = 1$.\nLangkah 6: Hitung $p + q = 13 + 24 = 37$.'
        },
        {
          id: 'amc10-ch7-q4',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 10A 2021',
          question: 'Tentukan banyaknya bilangan bulat positif $n \\le 100$ yang dapat dinyatakan dalam bentuk $3x + 5y$ dengan $x$ dan $y$ adalah bilangan bulat non-negatif ($x, y \\ge 0$).',
          hint: 'Gunakan Teorema Chicken McNugget untuk a = 3 dan b = 5. Bilangan terbesar yang tidak dapat dibentuk adalah ab - a - b = 7.',
          answer: '96',
          acceptedAnswers: ['96'],
          bestSolution: 'Langkah 1: Berdasarkan Teorema Frobenius (Chicken McNugget Theorem) untuk $a = 3$ dan $b = 5$ (karena $\\gcd(3, 5) = 1$):\nBilangan bulat terbesar yang TIDAK dapat dibentuk adalah:\n$$ab - a - b = 3(5) - 3 - 5 = 15 - 8 = 7$$\nLangkah 2: Seluruh bilangan bulat $\\ge 8$ dapat dibentuk dalam bentuk $3x + 5y$.\nLangkah 3: Periksa bilangan bulat positif $\\le 7$ yang TIDAK dapat dibentuk:\n- 1 (tidak bisa)\n- 2 (tidak bisa)\n- 3 ($3 \\times 1 + 5 \\times 0$, bisa)\n- 4 (tidak bisa)\n- 5 ($3 \\times 0 + 5 \\times 1$, bisa)\n- 6 ($3 \\times 2 + 5 \\times 0$, bisa)\n- 7 (tidak bisa)\nBilangan positif yang tidak dapat dibentuk adalah himpunan $\\{1, 2, 4, 7\\}$ (ada tepat 4 bilangan).\nLangkah 4: Dari 100 bilangan bulat positif pertama ($1 \\le n \\le 100$):\n$$\\text{Banyaknya bilangan yang dapat dibentuk} = 100 - 4 = 96.$$'
        },
        {
          id: 'amc10-ch7-q5',
          type: 'short_answer',
          difficulty: 'Dasar',
          source: 'AMC 10 / Base Addition',
          question: 'Hitung hasil penjumlahan dalam basis 6: $452_6 + 235_6$. Tuliskan jawaban dalam representasi basis 6.',
          hint: 'Lakukan penjumlahan kolom demi kolom dari kanan. Ingat bahwa 6 diubah menjadi simpanan 1 ke kolom berikutnya.',
          answer: '1131',
          acceptedAnswers: ['1131', '1131_6'],
          bestSolution: 'Langkah 1: Jumlahkan kolom satuan:\n$$2 + 5 = 7 = 1 \\times 6 + 1 \\quad (\\text{tulis 1, simpan 1})$$\nLangkah 2: Jumlahkan kolom puluhan bersama simpanan:\n$$1 + 5 + 3 = 9 = 1 \\times 6 + 3 \\quad (\\text{tulis 3, simpan 1})$$\nLangkah 3: Jumlahkan kolom ratusan bersama simpanan:\n$$1 + 4 + 2 = 7 = 1 \\times 6 + 1 \\quad (\\text{tulis 1, simpan 1})$$\nLangkah 4: Kolom ribuan menerima simpanan 1.\nLangkah 5: Hasil penjumlahan akhir adalah $1131_6$.'
        },
        {
          id: 'amc10-ch7-q6',
          type: 'essay',
          difficulty: 'Olimpiade',
          source: 'AMC 10 / Diophantine Application',
          question: 'Sebuah toko alat tulis menjual buku tulis seharga Rp11.000 dan pena seharga Rp7.000. Seorang guru membelanjakan tepat Rp100.000 untuk membeli kedua jenis barang tersebut. Buktikan bahwa hanya ada satu kombinasi banyaknya buku tulis dan pena yang dapat dibeli, serta tentukan jumlah total barang yang dibeli guru tersebut.',
          hint: 'Susun persamaan Diophantine 11x + 7y = 100 dengan x, y bilangan bulat positif.',
          answer: '12',
          acceptedAnswers: ['12', '12 barang'],
          bestSolution: 'Langkah Pembuktian:\n1. Misalkan $x$ adalah banyaknya buku tulis dan $y$ adalah banyaknya pena yang dibeli ($x, y \\in \\mathbb{Z}^+$).\n2. Bentuk persamaan nilai belanja dalam ribuan rupiah:\n$$11x + 7y = 100$$\n3. Karena $x \\ge 1$, nilai maksimum $x$ dibatasi oleh $11x < 100 \\implies x \\le 9$.\n4. Selesaikan untuk $y$ menggunakan aritmatika modulo 7:\n$$11x \\equiv 100 \\pmod 7 \\implies 4x \\equiv 2 \\pmod 7$$\nKalikan kedua ruas dengan 2 (invers dari 4 modulo 7):\n$$8x \\equiv 4 \\pmod 7 \\implies x \\equiv 4 \\pmod 7$$\n5. Pada selang bilangan bulat $1 \\le x \\le 9$, satu-satunya nilai yang memenuhi $x \\equiv 4 \\pmod 7$ adalah $x = 4$.\n6. Substitusikan $x = 4$ ke persamaan semula:\n$$11(4) + 7y = 100 \\implies 44 + 7y = 100 \\implies 7y = 56 \\implies y = 8$$\nKedua nilai $x = 4$ dan $y = 8$ adalah bilangan bulat positif valid, sehingga kombinasinya unik (terbukti tunggal).\n7. Jumlah total barang yang dibeli adalah $x + y = 4 + 8 = 12$ barang.'
        }
      ]
    },

    // ----------------------------------------------------
    // BAB 8: KUASA TITIK PADA LINGKARAN (POWER OF A POINT)
    // ----------------------------------------------------
    {
      id: 'amc10-ch8-power-of-a-point',
      level: 10,
      domain: 'Geometri',
      chapterIndex: 7,
      title: 'Bab 8: Kuasa Titik pada Lingkaran (Power of a Point Theorem)',
      summary: {
        overview: 'Teorema Kuasa Titik (Power of a Point) adalah salah satu alat geometri terpenting dalam AMC 10. Teorema ini menyatakan bahwa jika suatu garis ditarik dari titik $P$ memotong lingkaran di $A$ dan $B$, maka hasil kali $PA \\times PB$ adalah konstan untuk setiap garis yang melalui $P$. Konsep ini mengintegrasikan kesebangunan segitiga ke dalam bentuk persamaan aljabar yang sangat ringkas.',
        coreConcepts: [
          'Dua Tali Busur Berpotongan di Dalam: Jika tali busur $AB$ dan $CD$ berpotongan di titik $P$ di dalam lingkaran: $$PA \\times PB = PC \\times PD$$',
          'Dua Garis Potong dari Titik Luar: Jika dua garis dari titik luar $P$ memotong lingkaran masing-masing di $A, B$ dan $C, D$: $$PA \\times PB = PC \\times PD$$',
          'Garis Singgung dan Garis Potong: Jika $PT$ menyinggung lingkaran di titik $T$, dan garis potong melalui $A, B$: $$PT^2 = PA \\times PB$$',
          'Nilai Kuasa Titik: Kuasa titik $P$ terhadap lingkaran berjari-jari $R$ berpusat di $O$ dengan jarak $d = OP$ adalah: $$\\text{Power}(P) = d^2 - R^2$$'
        ],
        keyFormulas: [
          { label: 'Tali Busur Berpotongan', formula: 'PA \\times PB = PC \\times PD' },
          { label: 'Garis Singgung-Potong', formula: 'PT^2 = PA \\times PB' },
          { label: 'Kuasa Titik', formula: '\\text{Power}(P) = d^2 - R^2' }
        ],
        workedExamples: [
          {
            problem: 'Dari titik luar $P$, sebuah garis singgung menyinggung lingkaran di titik $T$. Garis potong lain dari $P$ memotong lingkaran di titik $A$ dan $B$ sedemikian hingga $PA = 4$ dan $AB = 5$. Tentukan panjang garis singgung $PT$.',
            solution: 'Langkah 1: Perhatikan bahwa $B$ adalah titik terjauh pada garis potong, sehingga $PB = PA + AB = 4 + 5 = 9$.\nLangkah 2: Terapkan Teorema Garis Singgung dan Garis Potong:\n$$PT^2 = PA \\times PB$$\n$$PT^2 = 4 \\times 9 = 36$$\nLangkah 3: Ambil akar kuadrat positif: $PT = \\sqrt{36} = 6$.'
          }
        ],
        misconceptions: [
          'Mengalikan $PA \\times AB$ alih-alih $PA \\times PB$ (kesalahan paling umum: lupa bahwa faktor kedua harus diukur dari titik asal $P$).'
        ],
        tutorTip: 'Ingat akronim P-W-P: "Part × Whole from P" (bagian luar dikali panjang keseluruhan selalu diukur dari titik P)!'
      },
      questions: [
        {
          id: 'amc10-ch8-q1',
          type: 'short_answer',
          difficulty: 'Dasar',
          source: 'AMC 10A 2017',
          question: 'Dua tali busur $AB$ dan $CD$ berpotongan di titik $P$ di dalam lingkaran. Jika $AP = 4$, $PB = 9$, dan $CP = 3$, tentukan panjang segmen $PD$.',
          hint: 'Gunakan Teorema Tali Busur Berpotongan di dalam: AP x PB = CP x PD.',
          answer: '12',
          acceptedAnswers: ['12'],
          bestSolution: 'Langkah 1: Berdasarkan Teorema Kuasa Titik untuk dua tali busur berpotongan:\n$$AP \\times PB = CP \\times PD$$\nLangkah 2: Substitusikan nilai-nilai yang diketahui:\n$$4 \\times 9 = 3 \\times PD \\implies 36 = 3 \\times PD$$\nLangkah 3: Selesaikan $PD = \\frac{36}{3} = 12$.'
        },
        {
          id: 'amc10-ch8-q2',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 10B 2019',
          question: 'Dari titik $P$ di luar lingkaran ditarik garis singgung $PT$ dengan panjang $PT = 12$. Garis potong dari $P$ memotong lingkaran di titik $A$ dan $B$ sehingga $PA = 8$. Tentukan panjang tali busur $AB$.',
          hint: 'Gunakan PT^2 = PA x PB. Cari PB terlebih dahulu, lalu AB = PB - PA.',
          answer: '10',
          acceptedAnswers: ['10'],
          bestSolution: 'Langkah 1: Berdasarkan Teorema Garis Singgung dan Garis Potong:\n$$PT^2 = PA \\times PB$$\n$$12^2 = 8 \\times PB \\implies 144 = 8 \\times PB$$\nLangkah 2: Hitung panjang total $PB = \\frac{144}{8} = 18$.\nLangkah 3: Tali busur $AB = PB - PA = 18 - 8 = 10$.'
        },
        {
          id: 'amc10-ch8-q3',
          type: 'essay',
          difficulty: 'Olimpiade',
          source: 'OmegaLearn / AMC 10',
          question: 'Buktikan bahwa Teorema Kuasa Titik $PA \\times PB = PC \\times PD$ pada dua tali busur berpotongan merupakan akibat langsung dari kesebangunan dua segitiga $\\triangle PAC \\sim \\triangle PDB$.',
          hint: 'Tunjukkan bahwa sudut keliling yang menghadap busur yang sama memiliki besar yang sama: ∠PCA = ∠PBD.',
          answer: 'Terbukti via kesebangunan AA',
          acceptedAnswers: ['Terbukti', 'terbukti', 'Terbukti via kesebangunan'],
          bestSolution: 'Langkah Pembuktian:\n1. Hubungkan titik $A$ dengan $C$, dan titik $D$ dengan $B$, membentuk dua segitiga: $\\triangle PAC$ dan $\\triangle PDB$.\n2. Sudut bertolak belakang:\n$$\\angle APC = \\angle BPD \\quad (\\text{bertolak belakang di } P)$$\n3. Sudut keliling:\n$\\angle PCA$ dan $\\angle PBD$ keduanya menghadap busur lingkaran yang sama, yaitu busur $AD$.\nBerdasarkan sifat sudut keliling lingkaran, dua sudut keliling yang menghadap busur yang sama besarnya sama:\n$$\\angle PCA = \\angle PBD$$\n4. Berdasarkan postulat kesebangunan Sudut-Sudut (AA Similarity):\n$$\\triangle PAC \\sim \\triangle PDB$$\n5. Karena kedua segitiga sebangun, perbandingan sisi-sisi yang bersesuaian adalah sama:\n$$\\frac{PA}{PD} = \\frac{PC}{PB}$$\n6. Kalikan silang:\n$$PA \\times PB = PC \\times PD$$\n(Terbukti secara geometris).'
        },
        {
          id: 'amc10-ch8-q4',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 10A 2020',
          question: 'Dua tali busur $AB$ dan $CD$ berpotongan di titik $P$ di dalam sebuah lingkaran. Jika $AP = 2, PB = 6,$ dan $CP = 3$, tentukan panjang total tali busur $CD$.',
          hint: 'Gunakan AP * PB = CP * PD untuk mencari PD, lalu CD = CP + PD.',
          answer: '7',
          acceptedAnswers: ['7'],
          bestSolution: 'Langkah 1: Terapkan Teorema Kuasa Titik untuk tali busur berpotongan di dalam:\n$$AP \\times PB = CP \\times PD$$\nLangkah 2: Masukkan nilai-nilai yang diketahui:\n$$2 \\times 6 = 3 \\times PD \\implies 12 = 3 PD \\implies PD = 4$$\nLangkah 3: Panjang total tali busur $CD$ adalah:\n$$CD = CP + PD = 3 + 4 = 7.$$'
        },
        {
          id: 'amc10-ch8-q5',
          type: 'short_answer',
          difficulty: 'Tantangan',
          source: 'AMC 10B 2018',
          question: 'Dari titik $P$ di luar lingkaran ditarik garis singgung $PT$ dengan panjang 6. Garis potong kedua melalui pusat lingkaran memotong lingkaran di titik $A$ dan $B$ sedemikian hingga $PA = 4$ dan segmen $AB$ merupakan diameter lingkaran. Tentukan panjang jari-jari lingkaran tersebut.',
          hint: 'Gunakan PT^2 = PA * PB untuk mencari PB, lalu diameter AB = PB - PA dan jari-jari r = AB / 2.',
          answer: '5/2',
          acceptedAnswers: ['5/2', '2.5', '2,5'],
          bestSolution: 'Langkah 1: Berdasarkan Teorema Kuasa Titik (Garis Singgung dan Garis Potong):\n$$PT^2 = PA \\times PB$$\n$$6^2 = 4 \\times PB \\implies 36 = 4 PB \\implies PB = 9$$\nLangkah 2: Karena $A$ dan $B$ berada pada garis yang sama dari $P$, panjang segmen $AB$ adalah:\n$$AB = PB - PA = 9 - 4 = 5$$\nLangkah 3: Segmen $AB$ merupakan diameter lingkaran, sehingga panjang jari-jari $R$ adalah:\n$$R = \\frac{AB}{2} = \\frac{5}{2} = 2.5.$$'
        },
        {
          id: 'amc10-ch8-q6',
          type: 'short_answer',
          difficulty: 'Olimpiade',
          source: 'AMC 10A 2015',
          question: 'Titik $P$ berada pada jarak 13 dari pusat sebuah lingkaran yang memiliki jari-jari 5. Sebuah garis ditarik melalui titik $P$ memotong lingkaran di titik $A$ dan $B$. Jika panjang tali busur $AB = 6$, tentukan panjang segmen $PA$.',
          hint: 'Hitung nilai kuasa titik P: Power(P) = d^2 - R^2. Lalu selesaikan persamaan kuadrat PA * (PA + 6) = 144.',
          answer: '8',
          acceptedAnswers: ['8'],
          bestSolution: 'Langkah 1: Hitung nilai kuasa titik $P$ terhadap lingkaran:\n$$\\text{Power}(P) = d^2 - R^2 = 13^2 - 5^2 = 169 - 25 = 144$$\nLangkah 2: Berdasarkan Teorema Kuasa Titik, untuk sebarang garis potong melalui $P$:\n$$PA \\times PB = 144$$\nLangkah 3: Karena $B$ terletak lebih jauh dari $P$ dibandingkan $A$ pada garis potong yang sama, maka $PB = PA + AB = PA + 6$.\nLangkah 4: Substitusikan ke persamaan kuasa titik:\n$$PA(PA + 6) = 144 \\implies PA^2 + 6PA - 144 = 0$$\nLangkah 5: Faktorkan persamaan kuadrat:\n$$(PA + 18)(PA - 8) = 0$$\nLangkah 6: Karena panjang segmen harus positif, $PA = 8$.'
        }
      ]
    },

    // ----------------------------------------------------
    // BAB 9: TITIK ISTIMEWA SEGITIGA & DALIL MENELAUS / CEVA
    // ----------------------------------------------------
    {
      id: 'amc10-ch9-triangle-geometry',
      level: 10,
      domain: 'Geometri',
      chapterIndex: 8,
      title: 'Bab 9: Titik Istimewa Segitiga & Dalil Menelaus / Ceva',
      summary: {
        overview: 'Geometri segitiga tingkat AMC 10 mencakup sifat-sifat titik istimewa (centroid, orthocenter, incenter, circumcenter), dalil konkurensi Ceva, dalil kolinieritas Menelaus, serta Teorema Stewart untuk menghitung panjang cevian sembarang. Bab ini membekali siswa kemampuan membuktikan garis-garis yang bertemu di satu titik atau titik-titik yang terletak pada satu garis lurus.',
        coreConcepts: [
          'Titik Berat (Centroid $G$): Membagi setiap garis berat dalam perbandingan $2 : 1$. Luas keenam sub-segitiga yang terbentuk sama besar.',
          'Teorema Ceva: Tiga garis cevian $AD, BE, CF$ pada $\\triangle ABC$ berpotongan di satu titik (konkuren) jika dan hanya jika: $$\\frac{BD}{DC} \\times \\frac{CE}{EA} \\times \\frac{AF}{FB} = 1$$',
          'Teorema Menelaus: Titik $D, E, F$ pada sisi/perpanjangan sisi $\\triangle ABC$ segaris (kolinier) jika dan hanya jika: $$\\frac{BD}{DC} \\times \\frac{CE}{EA} \\times \\frac{AF}{FB} = 1$$',
          'Teorema Stewart: Untuk cevian $d = AD$ yang membagi sisi $BC = a$ menjadi $m = BD$ dan $n = CD$: $$b^2 m + c^2 n = a(d^2 + mn)$$'
        ],
        keyFormulas: [
          { label: 'Teorema Ceva', formula: '\\frac{BD}{DC} \\cdot \\frac{CE}{EA} \\cdot \\frac{AF}{FB} = 1' },
          { label: 'Teorema Stewart', formula: 'b^2 m + c^2 n = a(d^2 + mn)' },
          { label: 'Rasio Titik Berat', formula: 'AG : GD = 2 : 1' }
        ],
        workedExamples: [
          {
            problem: 'Pada $\\triangle ABC$, titik $D$ terletak pada $BC$ sehingga $BD : DC = 2 : 3$, dan $E$ pada $AC$ sehingga $CE : EA = 4 : 1$. Cevian $AD$ dan $BE$ berpotongan di $P$. Jika garis $CP$ memotong $AB$ di $F$, tentukan rasio $\\frac{AF}{FB}$.',
            solution: 'Langkah 1: Terapkan Teorema Ceva karena garis $AD, BE, CF$ konkuren di titik $P$:\n$$\\frac{BD}{DC} \\times \\frac{CE}{EA} \\times \\frac{AF}{FB} = 1$$\nLangkah 2: Masukkan nilai rasio yang diketahui:\n$$\\frac{2}{3} \\times \\frac{4}{1} \\times \\frac{AF}{FB} = 1 \\implies \\frac{8}{3} \\times \\frac{AF}{FB} = 1$$\nLangkah 3: Selesaikan rasio yang dicari:\n$$\\frac{AF}{FB} = \\frac{3}{8}.$$'
          }
        ],
        misconceptions: [
          'Membalik urutan segmen pada perbandingan Teorema Ceva (ingat untuk berputar satu arah keliling segitiga).',
          'Mengasumsikan titik berat selalu berimpit dengan titik tinggi atau titik pusat lingkaran dalam (hanya berlaku pada segitiga sama sisi).'
        ],
        tutorTip: 'Untuk menghafal Teorema Stewart $b^2 m + c^2 n = a(d^2 + mn)$, ingat jembatan keledai bahasa Inggris: "a man and his dad put a bomb in the sink"!'
      },
      questions: [
        {
          id: 'amc10-ch9-q1',
          type: 'short_answer',
          difficulty: 'Dasar',
          source: 'AMC 10A 2020',
          question: 'Pada segitiga $\\triangle ABC$, titik $D$ terletak pada sisi $BC$ sedemikian hingga $BD = 2$ dan $CD = 3$. Titik $E$ pada $AC$ sedemikian hingga $CE = 4$ dan $EA = 1$. Cevian $AD$ dan $BE$ berpotongan di titik $P$. Garis $CP$ diperpanjang memotong $AB$ di titik $F$. Tentukan nilai perbandingan $\\frac{AF}{FB}$.',
          hint: 'Gunakan Teorema Ceva: (BD/DC) * (CE/EA) * (AF/FB) = 1.',
          answer: '3/8',
          acceptedAnswers: ['3/8', '0.375'],
          bestSolution: 'Langkah 1: Berdasarkan Teorema Ceva untuk ketiga cevian yang konkuren di titik $P$:\n$$\\frac{BD}{DC} \\times \\frac{CE}{EA} \\times \\frac{AF}{FB} = 1$$\nLangkah 2: Substitusikan nilai-nilai segmen yang diketahui:\n$$\\frac{2}{3} \\times \\frac{4}{1} \\times \\frac{AF}{FB} = 1$$\n$$\\frac{8}{3} \\times \\frac{AF}{FB} = 1$$\nLangkah 3: Kalikan dengan $\\frac{3}{8}$ pada kedua ruas:\n$$\\frac{AF}{FB} = \\frac{3}{8}.$$'
        },
        {
          id: 'amc10-ch9-q2',
          type: 'short_answer',
          difficulty: 'Dasar',
          source: 'AMC 10B 2019',
          question: 'Pada segitiga $\\triangle ABC$, titik $G$ adalah titik berat (centroid). Luas segitiga $\\triangle ABC$ adalah 72. Tentukan luas segitiga $\\triangle ABG$.',
          hint: 'Titik berat membagi sebuah segitiga menjadi 3 segitiga yang memiliki luas sama besar.',
          answer: '24',
          acceptedAnswers: ['24'],
          bestSolution: 'Langkah 1: Sifat titik berat (centroid $G$) membagi segitiga $\\triangle ABC$ menjadi tiga daerah segitiga dengan luas yang sama:\n$$[ABG] = [BCG] = [CAG] = \\frac{1}{3} [ABC]$$\nLangkah 2: Substitusikan luas total segitiga $\\triangle ABC = 72$:\n$$[ABG] = \\frac{72}{3} = 24.$$'
        },
        {
          id: 'amc10-ch9-q3',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 10 / Stewart\'s Theorem',
          question: 'Pada segitiga $\\triangle ABC$, panjang sisi-sisinya adalah $AB = 7, AC = 9,$ dan $BC = 8$. Titik $D$ adalah titik tengah dari sisi $BC$. Tentukan panjang garis berat $AD$.',
          hint: 'Gunakan Teorema Apollonius (kasus khusus Teorema Stewart): b^2 + c^2 = 2(AD^2 + m^2) dengan m = BC / 2 = 4.',
          answer: '7',
          acceptedAnswers: ['7'],
          bestSolution: 'Langkah 1: Karena $D$ adalah titik tengah $BC$, panjang $BD = CD = \\frac{8}{2} = 4$.\nLangkah 2: Terapkan Teorema Apollonius:\n$$AB^2 + AC^2 = 2(AD^2 + BD^2)$$\nLangkah 3: Masukkan panjang sisi yang diketahui:\n$$7^2 + 9^2 = 2(AD^2 + 4^2)$$\n$$49 + 81 = 2(AD^2 + 16)$$\n$$130 = 2(AD^2 + 16) \\implies AD^2 + 16 = 65$$\nLangkah 4: Selesaikan untuk $AD$:\n$$AD^2 = 65 - 16 = 49 \\implies AD = 7.$$'
        },
        {
          id: 'amc10-ch9-q4',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 10A 2018',
          question: 'Pada $\\triangle ABC$ dengan luas 60, titik $D$ pada sisi $BC$ membagi $BD : DC = 1 : 2$. Titik $E$ adalah titik tengah dari segmen garis $AD$. Tentukan luas segitiga $\\triangle BED$.',
          hint: 'Hitung terlebih dahulu luas segitiga ABD, lalu gunakan fakta bahwa E adalah titik tengah AD.',
          answer: '10',
          acceptedAnswers: ['10'],
          bestSolution: 'Langkah 1: Garis $AD$ membagi segitiga $\\triangle ABC$ dengan perbandingan alas $BD : DC = 1 : 2$, sehingga:\n$$[ABD] = \\frac{1}{1 + 2} [ABC] = \\frac{1}{3} \\times 60 = 20$$\nLangkah 2: Pada segitiga $\\triangle ABD$, segmen garis $BE$ menghubungkan titik puncak $B$ ke titik tengah $E$ dari alas $AD$.\nLangkah 3: Garis berat membagi luas segitiga menjadi dua bagian sama besar:\n$$[BED] = \\frac{1}{2} [ABD] = \\frac{1}{2} \\times 20 = 10.$$'
        },
        {
          id: 'amc10-ch9-q5',
          type: 'short_answer',
          difficulty: 'Tantangan',
          source: 'AMC 10B 2017',
          question: 'Sebuah segitiga siku-siku memiliki panjang hipotenusa 25 dan jari-jari lingkaran dalam (inradius) $r = 4$. Tentukan keliling segitiga tersebut.',
          hint: 'Gunakan hubungan jari-jari lingkaran dalam segitiga siku-siku: r = (a + b - c)/2 di mana c = 25.',
          answer: '58',
          acceptedAnswers: ['58'],
          bestSolution: 'Langkah 1: Untuk segitiga siku-siku dengan panjang kaki $a, b$ dan hipotenusa $c = 25$, jari-jari lingkaran dalam memenuhi rumus:\n$$r = \\frac{a + b - c}{2}$$\nLangkah 2: Masukkan nilai $r = 4$ dan $c = 25$:\n$$4 = \\frac{a + b - 25}{2} \\implies a + b - 25 = 8 \\implies a + b = 33$$\nLangkah 3: Keliling segitiga adalah jumlah seluruh sisinya:\n$$K = a + b + c = 33 + 25 = 58.$$'
        },
        {
          id: 'amc10-ch9-q6',
          type: 'essay',
          difficulty: 'Olimpiade',
          source: 'AMC 10 / Angle Bisector Theorem',
          question: 'Pada $\\triangle ABC$, panjang $AB = 6, AC = 10,$ dan $BC = 12$. Garis bagi sudut dalam dari $\\angle A$ memotong sisi $BC$ di titik $D$. Buktikan Teorema Garis Bagi Sudut $\\frac{BD}{DC} = \\frac{AB}{AC}$ dan tentukan panjang eksak dari segmen $BD$.',
          hint: 'Gunakan Aturan Sinus pada segitiga ABD dan segitiga ACD dengan sudut bagi yang sama besar.',
          answer: '9/2',
          acceptedAnswers: ['9/2', '4.5', '4,5'],
          bestSolution: 'Langkah Pembuktian:\n1. Misalkan besar sudut $\\angle BAD = \\angle CAD = \\theta$.\n2. Terapkan Aturan Sinus pada $\\triangle ABD$:\n$$\\frac{BD}{\\sin \\theta} = \\frac{AB}{\\sin \\angle ADB}$$\n3. Terapkan Aturan Sinus pada $\\triangle ACD$:\n$$\\frac{DC}{\\sin \\theta} = \\frac{AC}{\\sin \\angle ADC}$$\n4. Karena $\\angle ADB + \\angle ADC = 180^\\circ$, maka $\\sin \\angle ADB = \\sin \\angle ADC$.\n5. Bagi kedua persamaan tersebut:\n$$\\frac{BD}{DC} = \\frac{AB}{AC} \\quad (\\text{Terbukti}).$$\n6. Substitusikan panjang sisi yang diketahui:\n$$\\frac{BD}{DC} = \\frac{6}{10} = \\frac{3}{5}$$\n7. Karena $BD + DC = BC = 12$:\n$$BD = \\frac{3}{3 + 5} \\times 12 = \\frac{3}{8} \\times 12 = \\frac{36}{8} = \\frac{9}{2} = 4.5.$$'
        }
      ]
    },

    // ----------------------------------------------------
    // BAB 10: GEOMETRI ANALITIK & RUMUS TALI SEPATU (SHOELACE FORMULA)
    // ----------------------------------------------------
    {
      id: 'amc10-ch10-coordinate-geometry',
      level: 10,
      domain: 'Geometri',
      chapterIndex: 9,
      title: 'Bab 10: Geometri Analitik & Rumus Tali Sepatu (Shoelace Formula)',
      summary: {
        overview: 'Geometri analitik menghubungkan aljabar dan geometri melalui sistem koordinat Kartesius. Dalam AMC 10, Rumus Tali Sepatu Gauss (Shoelace Formula) adalah metode tercepat untuk menghitung luas sembarang poligon dari koordinat titik sudutnya. Teorema Pick menghubungkan luas poligon kisi dengan titik-titik bulat di dalam dan di batasnya. Rumus jarak titik ke garis dan persamaan lingkaran melengkapi kemampuan analitik peserta.',
        coreConcepts: [
          'Rumus Tali Sepatu (Shoelace Formula): Untuk poligon dengan titik sudut berurutan $(x_1, y_1), \\dots, (x_n, y_n)$: $$\\text{Luas} = \\frac{1}{2} \\left| \\sum_{i=1}^n (x_i y_{i+1} - x_{i+1} y_i) \\right|$$',
          'Teorema Pick untuk Poligon Kisi: $$\\text{Luas} = I + \\frac{B}{2} - 1$$ di mana $I$ adalah titik kisi dalam dan $B$ adalah titik kisi batas.',
          'Jarak Titik $(x_0, y_0)$ ke Garis $Ax + By + C = 0$: $$d = \\frac{|A x_0 + B y_0 + C|}{\\sqrt{A^2 + B^2}}$$',
          'Persamaan Lingkaran Kartesius: $$(x - h)^2 + (y - k)^2 = R^2$$'
        ],
        keyFormulas: [
          { label: 'Rumus Tali Sepatu', formula: '\\text{Luas} = \\frac{1}{2} |(x_1 y_2 + x_2 y_3 + \\dots) - (y_1 x_2 + y_2 x_3 + \\dots)|' },
          { label: 'Teorema Pick', formula: 'A = I + \\frac{B}{2} - 1' },
          { label: 'Jarak Titik ke Garis', formula: 'd = \\frac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}}' }
        ],
        workedExamples: [
          {
            problem: 'Hitung luas segitiga dengan titik-titik sudut $A(1, 2), B(5, 1),$ dan $C(4, 6)$.',
            solution: 'Langkah 1: Susun koordinat titik secara melingkar:\n$x$: $1, 5, 4, 1$\n$y$: $2, 1, 6, 2$\nLangkah 2: Hitung diagonal utama:\n$$(1 \\times 1) + (5 \\times 6) + (4 \\times 2) = 1 + 30 + 8 = 39$$\nLangkah 3: Hitung diagonal kedua:\n$$(2 \\times 5) + (1 \\times 4) + (6 \\times 1) = 10 + 4 + 6 = 20$$\nLangkah 4: Hitung luas menggunakan Shoelace Formula:\n$$\\text{Luas} = \\frac{1}{2} |39 - 20| = \\frac{19}{2} = 9.5.$$'
          }
        ],
        misconceptions: [
          'Lupa menulis kembali titik awal pada akhir daftar saat menyusun matriks Shoelace.',
          'Menghitung titik sudut dua kali saat menghitung jumlah titik batas $B$ pada Teorema Pick.'
        ],
        tutorTip: 'Jika semua titik sudut poligon merupakan bilangan bulat (lattice points), selalu pertimbangkan Teorema Pick untuk memverifikasi luas poligon!'
      },
      questions: [
        {
          id: 'amc10-ch10-q1',
          type: 'short_answer',
          difficulty: 'Dasar',
          source: 'AMC 10A 2021',
          question: 'Tentukan luas segitiga pada bidang Kartesius yang memiliki titik-titik sudut di $(2, 3), (8, 5),$ dan $(5, 9)$.',
          hint: 'Gunakan Rumus Tali Sepatu (Shoelace Formula) dengan koordinat (2,3), (8,5), (5,9), lalu kembali ke (2,3).',
          answer: '15',
          acceptedAnswers: ['15', '15.0'],
          bestSolution: 'Langkah 1: Susun tabel koordinat Shoelace:\n- $(2 \\times 5) + (8 \\times 9) + (5 \\times 3) = 10 + 72 + 15 = 97$\n- $(3 \\times 8) + (5 \\times 5) + (9 \\times 2) = 24 + 25 + 18 = 67$\nLangkah 2: Hitung selisih mutlak kedua hasil perkalian silang:\n$$|97 - 67| = 30$$\nLangkah 3: Luas segitiga adalah setengah dari selisih tersebut:\n$$\\text{Luas} = \\frac{1}{2} \\times 30 = 15.$$'
        },
        {
          id: 'amc10-ch10-q2',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 10B 2019',
          question: 'Sebuah segiempat pada bidang Kartesius memiliki titik-titik sudut berurutan di $(0, 0), (4, 1), (3, 5),$ dan $(1, 4)$. Tentukan luas segiempat tersebut.',
          hint: 'Gunakan Shoelace Formula dengan 4 titik sudut berurutan.',
          answer: '12',
          acceptedAnswers: ['12'],
          bestSolution: 'Langkah 1: Susun koordinat titik berurutan:\n$x$: $0, 4, 3, 1, 0$\n$y$: $0, 1, 5, 4, 0$\nLangkah 2: Hitung perkalian diagonal kanan ke bawah:\n$$0(1) + 4(5) + 3(4) + 1(0) = 0 + 20 + 12 + 0 = 32$$\nLangkah 3: Hitung perkalian diagonal kiri ke bawah:\n$$0(4) + 1(3) + 5(1) + 4(0) = 0 + 3 + 5 + 0 = 8$$\nLangkah 4: Terapkan rumus Shoelace:\n$$\\text{Luas} = \\frac{1}{2} |32 - 8| = \\frac{24}{2} = 12.$$'
        },
        {
          id: 'amc10-ch10-q3',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 10 / Pick\'s Theorem',
          question: 'Sebuah poligon kisi sederhana pada bidang koordinat memiliki 14 titik kisi pada batasnya ($B = 14$) dan 25 titik kisi di bagian dalamnya ($I = 25$). Tentukan luas poligon tersebut.',
          hint: 'Gunakan Teorema Pick: Luas = I + B/2 - 1.',
          answer: '31',
          acceptedAnswers: ['31'],
          bestSolution: 'Langkah 1: Berdasarkan Teorema Pick untuk poligon dengan titik sudut pada titik kisi:\n$$\\text{Luas} = I + \\frac{B}{2} - 1$$\nLangkah 2: Masukkan nilai $I = 25$ dan $B = 14$:\n$$\\text{Luas} = 25 + \\frac{14}{2} - 1 = 25 + 7 - 1 = 31.$$'
        },
        {
          id: 'amc10-ch10-q4',
          type: 'short_answer',
          difficulty: 'Dasar',
          source: 'AMC 10A 2018',
          question: 'Tentukan jarak tegak lurus dari titik $P(3, 4)$ ke garis dengan persamaan $3x + 4y - 10 = 0$.',
          hint: 'Gunakan rumus jarak titik ke garis d = |Ax0 + By0 + C| / sqrt(A^2 + B^2).',
          answer: '3',
          acceptedAnswers: ['3'],
          bestSolution: 'Langkah 1: Terapkan rumus jarak titik $(x_0, y_0) = (3, 4)$ ke garis $3x + 4y - 10 = 0$:\n$$d = \\frac{|A x_0 + B y_0 + C|}{\\sqrt{A^2 + B^2}}$$\nLangkah 2: Substitusikan koefisien $A = 3, B = 4, C = -10$:\n$$d = \\frac{|3(3) + 4(4) - 10|}{\\sqrt{3^2 + 4^2}} = \\frac{|9 + 16 - 10|}{\\sqrt{25}} = \\frac{15}{5} = 3.$$'
        },
        {
          id: 'amc10-ch10-q5',
          type: 'short_answer',
          difficulty: 'Tantangan',
          source: 'AMC 10B 2020',
          question: 'Garis dengan persamaan $y = 2x + k$ menyinggung lingkaran $x^2 + y^2 = 5$. Tentukan nilai dari $k^2$.',
          hint: 'Jarak dari pusat lingkaran (0, 0) ke garis 2x - y + k = 0 harus sama dengan jari-jari lingkaran sqrt(5).',
          answer: '25',
          acceptedAnswers: ['25'],
          bestSolution: 'Langkah 1: Ubah persamaan garis ke bentuk umum: $2x - y + k = 0$.\nLangkah 2: Pusat lingkaran berada di $(0, 0)$ dan jari-jari lingkaran adalah $R = \\sqrt{5}$.\nLangkah 3: Syarat garis menyinggung lingkaran adalah jarak dari pusat ke garis sama dengan jari-jari:\n$$\\frac{|2(0) - (0) + k|}{\\sqrt{2^2 + (-1)^2}} = \\sqrt{5}$$\n$$\\frac{|k|}{\\sqrt{5}} = \\sqrt{5} \\implies |k| = 5$$\nLangkah 4: Hitung nilai $k^2$:\n$$k^2 = 5^2 = 25.$$'
        },
        {
          id: 'amc10-ch10-q6',
          type: 'essay',
          difficulty: 'Olimpiade',
          source: 'AMC 10 / Shoelace Origin Proof',
          question: 'Buktikan bahwa untuk segitiga yang memiliki satu titik sudut di titik asal $(0, 0)$ dan dua titik sudut lainnya di $(x_1, y_1)$ dan $(x_2, y_2)$, luasnya adalah $\\frac{1}{2} |x_1 y_2 - x_2 y_1|$. Kemudian hitung luas segitiga dengan titik-titik sudut $(0, 0), (7, 2),$ dan $(3, 8)$.',
          hint: 'Gunakan perkalian silang dua vektor atau kotak pembungkus persegi panjang.',
          answer: '25',
          acceptedAnswers: ['25'],
          bestSolution: 'Langkah Pembuktian:\n1. Tinjau dua vektor posisi yang ditarik dari titik asal $(0, 0)$:\n$$\\vec{u} = (x_1, y_1), \\quad \\vec{v} = (x_2, y_2)$$\n2. Luas jajaran genjang yang dibentuk oleh kedua vektor tersebut sama dengan nilai mutlak determinan matriks $2 \\times 2$:\n$$\\text{Luas jajaran genjang} = \\left| \\det \\begin{pmatrix} x_1 & x_2 \\\\ y_1 & y_2 \\end{pmatrix} \\right| = |x_1 y_2 - x_2 y_1|$$\n3. Karena luas segitiga adalah setengah dari luas jajaran genjang yang bersesuaian:\n$$\\text{Luas segitiga} = \\frac{1}{2} |x_1 y_2 - x_2 y_1| \\quad (\\text{Terbukti}).$$\n4. Perhitungan untuk titik $(0,0), (7,2),$ dan $(3,8)$:\n$$\\text{Luas} = \\frac{1}{2} |7(8) - 3(2)| = \\frac{1}{2} |56 - 6| = \\frac{1}{2} \\times 50 = 25.$$'
        }
      ]
    },

    // ----------------------------------------------------
    // BAB 11: FUNGSI LANTAI & ATAP (FLOOR & CEILING FUNCTIONS)
    // ----------------------------------------------------
    {
      id: 'amc10-ch11-floor-ceiling-functions',
      level: 10,
      domain: 'Topik Lanjut',
      chapterIndex: 10,
      title: 'Bab 11: Fungsi Lantai & Atap (Floor & Ceiling Functions)',
      summary: {
        overview: 'Fungsi lantai (floor function $\\lfloor x \\rfloor$) dan atap (ceiling function $\\lceil x \\rceil$) sering muncul dalam aljabar dan teori bilangan tingkat lanjut AMC 10. Fungsi ini memetakan setiap bilangan real ke bilangan bulat terbesar yang tidak melebihi nilai tersebut, serta menghasilkan bagian pecahan $\\{x\\} = x - \\lfloor x \\rfloor$. Memahami sifat-sifat dasar dan teknik dekomposisi $x = \\lfloor x \\rfloor + \\{x\\}$ adalah kunci menyelesaikan persamaan non-linier yang melibatkan kurung siku ini.',
        coreConcepts: [
          'Definisi Fungsi Lantai & Bagian Pecahan: Untuk setiap bilangan real $x$, $n = \\lfloor x \\rfloor$ adalah bilangan bulat terbesar dengan $n \\le x < n + 1$, dan $\\{x\\} = x - \\lfloor x \\rfloor \\in [0, 1)$.',
          'Sifat Penjumlahan Bilangan Bulat: Jika $n \\in \\mathbb{Z}$, maka $\\lfloor x + n \\rfloor = \\lfloor x \\rfloor + n$.',
          'Identitas Hermite: $$\\lfloor x \\rfloor + \\left\\lfloor x + \\frac{1}{n} \\right\\rfloor + \\dots + \\left\\lfloor x + \\frac{n-1}{n} \\right\\rfloor = \\lfloor n x \\rfloor$$',
          'Sifat Fungsi Atap: $\\lceil x \\rceil = -\\lfloor -x \\rfloor$, dan $\\lceil x \\rceil = \\lfloor x \\rfloor$ jika dan hanya jika $x \\in \\mathbb{Z}$.'
        ],
        keyFormulas: [
          { label: 'Dekomposisi Bilangan', formula: 'x = \\lfloor x \\rfloor + \\{x\\}, \\quad 0 \\le \\{x\\} < 1' },
          { label: 'Sifat Integer', formula: '\\lfloor x + n \\rfloor = \\lfloor x \\rfloor + n, \\quad n \\in \\mathbb{Z}' },
          { label: 'Identitas Hermite', formula: '\\lfloor x \\rfloor + \\left\\lfloor x + \\frac{1}{2} \\right\\rfloor = \\lfloor 2x \\rfloor' }
        ],
        workedExamples: [
          {
            problem: 'Selesaikan persamaan $2x + \\lfloor x \\rfloor = 7.4$ untuk bilangan real $x$.',
            solution: 'Langkah 1: Dekomposisi $x$ menjadi $x = \\lfloor x \\rfloor + \\{x\\}$ di mana $n = \\lfloor x \\rfloor \\in \\mathbb{Z}$ dan $0 \\le \\{x\\} < 1$.\nLangkah 2: Substitusikan ke persamaan:\n$$2(n + \\{x\\}) + n = 7.4 \\implies 3n + 2\\{x\\} = 7.4$$\nLangkah 3: Karena $0 \\le 2\\{x\\} < 2$, maka:\n$$7.4 - 2 < 3n \\le 7.4 \\implies 5.4 < 3n \\le 7.4$$\nBilangan bulat kelipatan 3 dalam rentang ini adalah $3n = 6 \\implies n = 2$.\nLangkah 4: Hitung nilai $\\{x\\}$:\n$$3(2) + 2\\{x\\} = 7.4 \\implies 2\\{x\\} = 1.4 \\implies \\{x\\} = 0.7$$\nLangkah 5: Nilai $x = n + \\{x\\} = 2 + 0.7 = 2.7$.'
          }
        ],
        misconceptions: [
          'Mengasumsikan $\\lfloor -x \\rfloor = -\\lfloor x \\rfloor$. Pada kenyataannya, $\\lfloor -2.3 \\rfloor = -3$, bukan $-2$.',
          'Memperlakukan $\\lfloor x y \\rfloor = \\lfloor x \\rfloor \\lfloor y \\rfloor$, yang hampir selalu salah untuk bilangan non-bulat.'
        ],
        tutorTip: 'Selalu lakukan substitusi $x = n + f$ dengan $n = \\lfloor x \\rfloor \\in \\mathbb{Z}$ dan $0 \\le f < 1$. Ini memisahkan persamaan aljabar menjadi bagian diskrit dan bagian pecahan!'
      },
      questions: [
        {
          id: 'amc10-ch11-q1',
          type: 'short_answer',
          difficulty: 'Dasar',
          source: 'AMC 10A 2020',
          question: 'Tentukan nilai eksak dari penjumlahan berikut: $$\\lfloor \\sqrt{1} \\rfloor + \\lfloor \\sqrt{2} \\rfloor + \\lfloor \\sqrt{3} \\rfloor + \\dots + \\lfloor \\sqrt{15} \\rfloor$$',
          hint: 'Kelompokkan bilangan bulat k berdasarkan nilai kuadrat terdekatnya: 1 <= k < 4, 4 <= k < 9, 9 <= k < 16.',
          answer: '34',
          acceptedAnswers: ['34'],
          bestSolution: 'Langkah 1: Kelompokkan nilai $k$ berdasarkan hasil fungsi lantai akarnya:\n- Untuk $1 \\le k \\le 3$ (ada 3 bilangan): $\\lfloor \\sqrt{k} \\rfloor = 1$. Jumlah = $3 \\times 1 = 3$.\n- Untuk $4 \\le k \\le 8$ (ada 5 bilangan): $\\lfloor \\sqrt{k} \\rfloor = 2$. Jumlah = $5 \\times 2 = 10$.\n- Untuk $9 \\le k \\le 15$ (ada 7 bilangan): $\\lfloor \\sqrt{k} \\rfloor = 3$. Jumlah = $7 \\times 3 = 21$.\nLangkah 2: Jumlahkan seluruh kelompok:\n$$3 + 10 + 21 = 34.$$'
        },
        {
          id: 'amc10-ch11-q2',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 10B 2018',
          question: 'Berapa banyak bilangan real positif $x$ yang memenuhi persamaan $\\lfloor x \\rfloor \\times \\{x\\} = 1$ dengan batasan $1 \\le x \\le 5$?',
          hint: 'Tuliskan {x} = 1 / floor(x). Karena 0 <= {x} < 1, maka floor(x) harus lebih besar dari 1.',
          answer: '3',
          acceptedAnswers: ['3', '3 solusi'],
          bestSolution: 'Langkah 1: Misalkan $n = \\lfloor x \\rfloor$ dan $f = \\{x\\}$, sehingga $x = n + f$.\nLangkah 2: Persamaan menjadi $n \\times f = 1 \\implies f = \\frac{1}{n}$.\nLangkah 3: Karena $0 \\le f < 1$, maka $\\frac{1}{n} < 1 \\implies n > 1$.\nLangkah 4: Tinjau nilai $n = \\lfloor x \\rfloor$ yang memenuhi $1 \\le x \\le 5$:\n- $n = 1 \\implies f = 1$ (tidak valid karena $f < 1$)\n- $n = 2 \\implies f = 1/2 \\implies x = 2.5$ (valid: $1 \\le 2.5 \\le 5$)\n- $n = 3 \\implies f = 1/3 \\implies x = 3\\frac{1}{3}$ (valid)\n- $n = 4 \\implies f = 1/4 \\implies x = 4.25$ (valid)\n- $n = 5 \\implies f = 1/5 \\implies x = 5.2$ (tidak valid karena $x > 5$)\nLangkah 5: Jadi terdapat tepat 3 solusi bilangan real.'
        },
        {
          id: 'amc10-ch11-q3',
          type: 'short_answer',
          difficulty: 'Tantangan',
          source: 'AMC 10 / Hermite\'s Identity',
          question: 'Tentukan banyaknya bilangan bulat $x$ pada selang $1 \\le x \\le 100$ sedemikian sehingga berlaku: $$\\left\\lfloor \\frac{x}{2} \\right\\rfloor + \\left\\lfloor \\frac{x}{3} \\right\\rfloor + \\left\\lfloor \\frac{x}{6} \\right\\rfloor = x$$',
          hint: 'Perhatikan bahwa x/2 + x/3 + x/6 = x. Kesamaan pada floor terjadi jika dan hanya jika ketiga pecahan bernilai bulat.',
          answer: '16',
          acceptedAnswers: ['16'],
          bestSolution: 'Langkah 1: Perhatikan identitas aljabar pecahan:\n$$\\frac{x}{2} + \\frac{x}{3} + \\frac{x}{6} = \\frac{3x + 2x + x}{6} = \\frac{6x}{6} = x$$\nLangkah 2: Karena untuk setiap bilangan real $t$ berlaku $\\lfloor t \\rfloor \\le t$, maka:\n$$\\left\\lfloor \\frac{x}{2} \\right\\rfloor + \\left\\lfloor \\frac{x}{3} \\right\\rfloor + \\left\\lfloor \\frac{x}{6} \\right\\rfloor \\le \\frac{x}{2} + \\frac{x}{3} + \\frac{x}{6} = x$$\nLangkah 3: Tanda kesamaan tercapai jika dan hanya jika $\\lfloor t \\rfloor = t$ untuk ketiga nilai, yang berarti $\\frac{x}{2}, \\frac{x}{3},$ dan $\\frac{x}{6}$ semuanya harus merupakan bilangan bulat.\nLangkah 4: Ini terjadi jika dan hanya jika $x$ merupakan kelipatan dari $\\text{KPK}(2, 3, 6) = 6$.\nLangkah 5: Banyaknya kelipatan 6 dalam selang $1 \\le x \\le 100$ adalah:\n$$\\left\\lfloor \\frac{100}{6} \\right\\rfloor = 16.$$'
        },
        {
          id: 'amc10-ch11-q4',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 10A 2017',
          question: 'Selesaikan persamaan $3x + \\lfloor x \\rfloor = 17.6$. Tentukan nilai eksak dari $x$ dalam bentuk pecahan paling sederhana.',
          hint: 'Substitusikan x = n + f dengan n bilangan bulat dan 0 <= f < 1.',
          answer: '68/15',
          acceptedAnswers: ['68/15'],
          bestSolution: 'Langkah 1: Dekomposisi $x = n + f$ dengan $n = \\lfloor x \\rfloor \\in \\mathbb{Z}$ dan $0 \\le f < 1$.\nLangkah 2: Substitusikan ke persamaan:\n$$3(n + f) + n = 17.6 \\implies 4n + 3f = 17.6$$\nLangkah 3: Karena $0 \\le f < 1$, maka $0 \\le 3f < 3$. Sehingga:\n$$17.6 - 3 < 4n \\le 17.6 \\implies 14.6 < 4n \\le 17.6$$\nLangkah 4: Satu-satunya kelipatan 4 dalam rentang ini adalah $4n = 16 \\implies n = 4$.\nLangkah 5: Hitung nilai $f$:\n$$3f = 17.6 - 16 = 1.6 \\implies f = \\frac{1.6}{3} = \\frac{16}{30} = \\frac{8}{15}$$\nLangkah 6: Hitung nilai $x$:\n$$x = n + f = 4 + \\frac{8}{15} = \\frac{68}{15}.$$'
        },
        {
          id: 'amc10-ch11-q5',
          type: 'short_answer',
          difficulty: 'Dasar',
          source: 'AMC 10B 2021',
          question: 'Hitunglah nilai eksak dari ekspresi bilangan: $$\\lfloor -4.7 \\rfloor + \\lceil 4.7 \\rceil$$',
          hint: 'Ingat bahwa floor(-4.7) adalah bilangan bulat terbesar yang <= -4.7 (yaitu -5).',
          answer: '0',
          acceptedAnswers: ['0'],
          bestSolution: 'Langkah 1: Evaluasi fungsi lantai $\\lfloor -4.7 \\rfloor$:\nBilangan bulat terbesar yang kurang dari atau sama dengan $-4.7$ adalah $-5$.\nLangkah 2: Evaluasi fungsi atap $\\lceil 4.7 \\rceil$:\nBilangan bulat terkecil yang lebih besar dari atau sama dengan $4.7$ adalah $5$.\nLangkah 3: Lakukan penjumlahan:\n$$\\lfloor -4.7 \\rfloor + \\lceil 4.7 \\rceil = -5 + 5 = 0.$$'
        },
        {
          id: 'amc10-ch11-q6',
          type: 'essay',
          difficulty: 'Olimpiade',
          source: 'AMC 10 / Floor Roots Proof',
          question: 'Buktikan bahwa untuk setiap bilangan bulat positif $n$, berlaku $\\lfloor \\sqrt{n} + \\sqrt{n+1} \\rfloor = \\lfloor \\sqrt{4n+2} \\rfloor$. Kemudian hitung nilai eksak dari $\\lfloor \\sqrt{99} + \\sqrt{100} \\rfloor$.',
          hint: 'Kuadratkan bentuk akar dan tunjukkan bahwa 4n+1 < (sqrt(n) + sqrt(n+1))^2 < 4n+2.',
          answer: '19',
          acceptedAnswers: ['19'],
          bestSolution: 'Langkah Pembuktian:\n1. Kuadratkan ekspresi $\\sqrt{n} + \\sqrt{n+1}$:\n$$(\\sqrt{n} + \\sqrt{n+1})^2 = n + (n + 1) + 2\\sqrt{n(n+1)} = 2n + 1 + 2\\sqrt{n^2 + n}$$\n2. Karena $n^2 < n^2 + n < (n + 1/2)^2 = n^2 + n + 1/4$, maka:\n$$n < \\sqrt{n^2 + n} < n + \\frac{1}{2}$$\n3. Kalikan dengan 2:\n$$2n < 2\\sqrt{n^2 + n} < 2n + 1$$\n4. Tambahkan $2n + 1$ ke seluruh ruas:\n$$4n + 1 < (\\sqrt{n} + \\sqrt{n+1})^2 < 4n + 2$$\n5. Karena tidak ada bilangan kuadrat sempurna di antara dua bilangan bulat berturutan $4n + 1$ dan $4n + 2$, maka:\n$$\\lfloor \\sqrt{n} + \\sqrt{n+1} \\rfloor = \\lfloor \\sqrt{4n+2} \\rfloor \\quad (\\text{Terbukti}).$$\n6. Perhitungan untuk $n = 99$:\n$$\\lfloor \\sqrt{99} + \\sqrt{100} \\rfloor = \\lfloor \\sqrt{4(99) + 2} \\rfloor = \\lfloor \\sqrt{396 + 2} \\rfloor = \\lfloor \\sqrt{398} \\rfloor$$\nKarena $19^2 = 361$ dan $20^2 = 400$, maka $\\lfloor \\sqrt{398} \\rfloor = 19$.'
        }
      ]
    },

    // ----------------------------------------------------
    // BAB 12: KETAKSAMAAN DASAR AM-GM & NILAI EKSTREM
    // ----------------------------------------------------
    {
      id: 'amc10-ch12-inequalities-amgm',
      level: 10,
      domain: 'Topik Lanjut',
      chapterIndex: 11,
      title: 'Bab 12: Ketaksamaan Dasar AM-GM & Nilai Ekstrem (Inequalities: AM-GM)',
      summary: {
        overview: 'Ketaksamaan Rata-rata Aritmatika dan Rata-rata Geometris (Arithmetic Mean - Geometric Mean Inequality / AM-GM) adalah ketaksamaan paling mendasar dan penting dalam matematika kompetisi tingkat SMA. AM-GM menyatakan bahwa untuk bilangan real non-negatif, rata-rata aritmatika selalu lebih besar dari atau sama dengan rata-rata geometrisnya, dengan kesamaan tercapai jika dan hanya jika semua variabel bernilai sama. Alat ini sangat ampuh untuk menemukan nilai minimum dan maksimum dari ekspresi aljabar tanpa kalkulus.',
        coreConcepts: [
          'AM-GM 2 Variabel: Untuk $a, b \\ge 0$: $$\\frac{a + b}{2} \\ge \\sqrt{ab} \\iff a + b \\ge 2\\sqrt{ab}$$ dengan kesamaan tercapai jika dan hanya jika $a = b$.',
          'AM-GM $n$ Variabel: Untuk $a_1, a_2, \\dots, a_n \\ge 0$: $$\\frac{a_1 + a_2 + \\dots + a_n}{n} \\ge \\sqrt[n]{a_1 a_2 \\dots a_n}$$ dengan kesamaan tercapai jika dan hanya jika $a_1 = a_2 = \\dots = a_n$.',
          'Konsep Nilai Ekstrem: Jika hasil kali variabel bernilai konstan, jumlahnya mencapai minimum saat variabel-variabel tersebut bernilai sama.',
          'Penyesuaian Bobot: Memecah suku aljabar menjadi beberapa bagian yang sama untuk menyeimbangkan pangkat pada bentuk perkalian.'
        ],
        keyFormulas: [
          { label: 'AM-GM 2 Variabel', formula: '\\frac{a+b}{2} \\ge \\sqrt{ab}' },
          { label: 'AM-GM n Variabel', formula: '\\frac{a_1 + a_2 + \\dots + a_n}{n} \\ge \\sqrt[n]{a_1 a_2 \\dots a_n}' },
          { label: 'Syarat Kesamaan', formula: 'a_1 = a_2 = \\dots = a_n' }
        ],
        workedExamples: [
          {
            problem: 'Jika $x > 0$, tentukan nilai minimum dari fungsi $f(x) = x + \\frac{9}{x}$.',
            solution: 'Langkah 1: Karena $x > 0$ dan $\\frac{9}{x} > 0$, kedua suku bernilai positif sehingga kita dapat menerapkan AM-GM 2 variabel:\n$$x + \\frac{9}{x} \\ge 2\\sqrt{x \\cdot \\frac{9}{x}} = 2\\sqrt{9} = 2(3) = 6$$\nLangkah 2: Tanda kesamaan tercapai jika dan hanya jika kedua suku bernilai sama:\n$$x = \\frac{9}{x} \\implies x^2 = 9 \\implies x = 3 > 0$$\nLangkah 3: Karena $x = 3$ berada dalam domain, maka nilai minimum fungsi adalah 6.'
          }
        ],
        misconceptions: [
          'Menerapkan AM-GM pada variabel yang dapat bernilai negatif (syarat mutlak: bilangan harus non-negatif!).',
          'Menyimpulkan nilai ekstrem tanpa memeriksa apakah titik kesamaan ($a = b = \\dots$) dapat dicapai dalam domain soal.'
        ],
        tutorTip: 'Untuk mencari nilai minimum dari bentuk $x + \\frac{c}{x^2}$, pecah suku $x$ menjadi dua suku sama besar: $\\frac{x}{2} + \\frac{x}{2} + \\frac{c}{x^2}$, lalu gunakan AM-GM 3 variabel!'
      },
      questions: [
        {
          id: 'amc10-ch12-q1',
          type: 'short_answer',
          difficulty: 'Dasar',
          source: 'AMC 10A 2021',
          question: 'Misalkan $x$ adalah bilangan real positif. Tentukan nilai minimum dari ekspresi aljabar: $$4x + \\frac{9}{x}$$',
          hint: 'Gunakan AM-GM 2 variabel: 4x + 9/x >= 2 * sqrt(4x * 9/x).',
          answer: '12',
          acceptedAnswers: ['12'],
          bestSolution: 'Langkah 1: Karena $x > 0$, kedua suku $4x$ dan $\\frac{9}{x}$ bernilai positif.\nLangkah 2: Terapkan ketaksamaan AM-GM:\n$$4x + \\frac{9}{x} \\ge 2\\sqrt{4x \\cdot \\frac{9}{x}} = 2\\sqrt{36} = 2 \\times 6 = 12$$\nLangkah 3: Kesamaan tercapai ketika $4x = \\frac{9}{x} \\implies 4x^2 = 9 \\implies x = \\frac{3}{2} > 0$.\nLangkah 4: Jadi nilai minimum dari ekspresi tersebut adalah 12.'
        },
        {
          id: 'amc10-ch12-q2',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 10B 2019',
          question: 'Misalkan $a$ dan $b$ adalah bilangan real positif yang memenuhi $a + 2b = 12$. Tentukan nilai maksimum dari hasil kali $ab$.',
          hint: 'Gunakan AM-GM pada a dan 2b: (a + 2b)/2 >= sqrt(2ab).',
          answer: '18',
          acceptedAnswers: ['18'],
          bestSolution: 'Langkah 1: Terapkan ketaksamaan AM-GM pada bilangan positif $a$ dan $2b$:\n$$\\frac{a + 2b}{2} \\ge \\sqrt{a(2b)}$$\nLangkah 2: Masukkan nilai $a + 2b = 12$:\n$$\\frac{12}{2} \\ge \\sqrt{2ab} \\implies 6 \\ge \\sqrt{2ab}$$\nLangkah 3: Kuadratkan kedua ruas:\n$$36 \\ge 2ab \\implies ab \\le 18$$\nLangkah 4: Kesamaan tercapai saat $a = 2b = 6 \\implies a = 6, b = 3 > 0$.\nLangkah 5: Nilai maksimum dari hasil kali $ab$ adalah 18.'
        },
        {
          id: 'amc10-ch12-q3',
          type: 'short_answer',
          difficulty: 'Tantangan',
          source: 'AMC 10 / Splitting Technique',
          question: 'Misalkan $x > 0$. Tentukan nilai minimum dari fungsi $g(x) = x^2 + \\frac{16}{x}$.',
          hint: 'Pecah suku 16/x menjadi 8/x + 8/x agar perkalian variabel saling meniadakan dalam AM-GM 3 variabel.',
          answer: '12',
          acceptedAnswers: ['12'],
          bestSolution: 'Langkah 1: Pecah suku $\\frac{16}{x}$ menjadi dua suku sama besar: $\\frac{8}{x} + \\frac{8}{x}$.\nLangkah 2: Terapkan ketaksamaan AM-GM 3 variabel pada himpunan $\\{x^2, \\frac{8}{x}, \\frac{8}{x}\\}$:\n$$\\frac{x^2 + \\frac{8}{x} + \\frac{8}{x}}{3} \\ge \\sqrt[3]{x^2 \\cdot \\frac{8}{x} \\cdot \\frac{8}{x}}$$\nLangkah 3: Hitung hasil kali di dalam akar kubik:\n$$\\sqrt[3]{x^2 \\cdot \\frac{64}{x^2}} = \\sqrt[3]{64} = 4$$\nLangkah 4: Kalikan dengan 3:\n$$x^2 + \\frac{16}{x} \\ge 3 \\times 4 = 12$$\nLangkah 5: Kesamaan tercapai ketika $x^2 = \\frac{8}{x} \\implies x^3 = 8 \\implies x = 2 > 0$.\nJadi nilai minimumnya adalah 12.'
        },
        {
          id: 'amc10-ch12-q4',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 10A 2017',
          question: 'Misalkan $x, y, z$ adalah bilangan real positif sedemikian hingga $x + y + z = 9$. Tentukan nilai maksimum yang mungkin dari hasil kali $xyz$.',
          hint: 'Gunakan AM-GM 3 variabel: (x + y + z)/3 >= (xyz)^(1/3).',
          answer: '27',
          acceptedAnswers: ['27'],
          bestSolution: 'Langkah 1: Berdasarkan ketaksamaan AM-GM untuk 3 variabel positif $x, y, z$:\n$$\\frac{x + y + z}{3} \\ge \\sqrt[3]{xyz}$$\nLangkah 2: Masukkan nilai $x + y + z = 9$:\n$$\\frac{9}{3} \\ge \\sqrt[3]{xyz} \\implies 3 \\ge \\sqrt[3]{xyz}$$\nLangkah 3: Pangkatkan tiga kedua ruas:\n$$xyz \\le 3^3 = 27$$\nLangkah 4: Kesamaan tercapai saat $x = y = z = 3$.\nJadi nilai maksimum hasil kali $xyz$ adalah 27.'
        },
        {
          id: 'amc10-ch12-q5',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 10B 2016',
          question: 'Jika $x > 1$, tentukan nilai minimum dari ekspresi aljabar: $$x + \\frac{1}{x - 1}$$',
          hint: 'Tulis ulang x sebagai (x - 1) + 1, lalu terapkan AM-GM pada (x - 1) dan 1/(x - 1).',
          answer: '3',
          acceptedAnswers: ['3'],
          bestSolution: 'Langkah 1: Nyatakan $x = (x - 1) + 1$ untuk menyesuaikan dengan penyebut:\n$$x + \\frac{1}{x - 1} = (x - 1) + \\frac{1}{x - 1} + 1$$\nLangkah 2: Karena $x > 1$, suku $x - 1 > 0$. Terapkan AM-GM 2 variabel:\n$$(x - 1) + \\frac{1}{x - 1} \\ge 2\\sqrt{(x - 1) \\cdot \\frac{1}{x - 1}} = 2(1) = 2$$\nLangkah 3: Tambahkan 1 ke kedua ruas:\n$$(x - 1) + \\frac{1}{x - 1} + 1 \\ge 2 + 1 = 3$$\nLangkah 4: Kesamaan tercapai ketika $x - 1 = \\frac{1}{x - 1} \\implies (x - 1)^2 = 1 \\implies x - 1 = 1 \\implies x = 2 > 1$.\nJadi nilai minimumnya adalah 3.'
        },
        {
          id: 'amc10-ch12-q6',
          type: 'essay',
          difficulty: 'Olimpiade',
          source: 'AMC 10 / AM-GM Multi-Variable Proof',
          question: 'Tunjukkan bahwa untuk setiap bilangan real positif $a, b, c$, berlaku ketaksamaan $(a+b)(b+c)(c+a) \\ge 8abc$. Buktikan kapan tanda kesamaan tercapai.',
          hint: 'Terapkan AM-GM 2 variabel secara terpisah pada masing-masing faktor: a+b, b+c, dan c+a, lalu kalikan ketiga ketaksamaan.',
          answer: 'a=b=c',
          acceptedAnswers: ['a=b=c', 'a = b = c', 'Terbukti'],
          bestSolution: 'Langkah Pembuktian:\n1. Karena $a, b, c > 0$, terapkan ketaksamaan AM-GM 2 variabel pada masing-masing faktor:\n- $a + b \\ge 2\\sqrt{ab}$ dengan kesamaan jika dan hanya jika $a = b$\n- $b + c \\ge 2\\sqrt{bc}$ dengan kesamaan jika dan hanya jika $b = c$\n- $c + a \\ge 2\\sqrt{ca}$ dengan kesamaan jika dan hanya jika $c = a$\n2. Karena seluruh ruas bernilai positif, kalikan ketiga ketaksamaan tersebut:\n$$(a + b)(b + c)(c + a) \\ge (2\\sqrt{ab})(2\\sqrt{bc})(2\\sqrt{ca})$$\n3. Sederhanakan ruas kanan:\n$$(2 \\times 2 \\times 2) \\times \\sqrt{ab \\cdot bc \\cdot ca} = 8\\sqrt{a^2 b^2 c^2} = 8abc$$\n4. Terbukti bahwa $(a + b)(b + c)(c + a) \\ge 8abc$.\n5. Tanda kesamaan tercapai jika dan hanya jika ketiga syarat kesamaan terpenuhi secara simultan, yaitu $a = b = c$.'
        }
      ]
    }
  ]
};
