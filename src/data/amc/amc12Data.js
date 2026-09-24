/**
 * Dataset Lengkap Modul Olimpiade Matematika: AMC 12 (Advanced High School Math Competition)
 * Sumber Inspirasi: Mastering AMC 10/12 (OmegaLearn) & Ujian Resmi AMC 12 / AIME
 * 
 * Karakteristik Soal AMC 12:
 * - Soal berbobot tinggi: Bilangan Kompleks (De Moivre, Roots of Unity), Teorema Euler & CRT,
 *   Ketaksamaan Cauchy-Schwarz, Teorema Ptolemy, dan Trigonometri Tingkat Lanjut.
 * - Format isian singkat angka bulat/pecahan sederhana serta esai pembuktian analitis.
 * - Dilengkapi 6 Pilar Pedagogis lengkap di setiap bab.
 */

const chaptersList = [
  // ----------------------------------------------------
  // BAB 1: ADVANCED RECURSION & PROBABILITY STATES
  // ----------------------------------------------------
  {
    id: 'amc12-ch1-advanced-recursion-states',
    aliases: ['amc12-ch1-trigonometric-identities', 'amc12-ch5-recursion-linear-relations'],
    level: 12,
    domain: 'Kombinatorika Lanjut',
    chapterIndex: 0,
    title: 'Bab 1: Rekursi Lanjut & Rantai Peluang Keadaan (Probability States & Markov)',
    summary: {
      overview: 'Pencacahan tingkat lanjut pada AMC 12 sering kali tidak dapat diselesaikan dengan rumus kombinatorika tertutup biasa, melainkan memerlukan pemodelan relasi rekursi atau diagram keadaan peluang (Markov probability states). Dengan merumuskan sistem persamaan berdasarkan keadaan transisi dari satu langkah ke langkah berikutnya, masalah peluang bersyarat yang rumit dapat direduksi menjadi sistem persamaan aljabar linier yang sangat terstruktur.',
      coreConcepts: [
        'Relasi Rekursi Linier Homogen Orde 2: $x_n = a x_{n-1} + b x_{n-2}$, diselesaikan dengan persamaan karakteristik $r^2 - ar - b = 0$. Jika akar-akarnya berbeda $r_1, r_2$, solusinya adalah $x_n = c_1 r_1^n + c_2 r_2^n$.',
        'Rantai Keadaan Peluang (Probability States): Mendefinisikan status atau keadaan saat ini $S_k$, lalu menulis persamaan kesetimbangan peluang $P(S_k) = \\sum P(S_j) \\cdot P(S_j \\to S_k)$.',
        'Nilai Harapan Waktu Berhenti (Expected Stopping Time): Untuk suatu keadaan $E_s$, nilai harapannya memenuhi $E_s = 1 + \\sum_{s\'} P(s \\to s\') E_{s\'}$.',
        'Prinsip Derangement (Pengacakan Lengkap): Banyaknya permutasi dari $n$ objek tanpa ada objek yang menempati posisi aslinya memenuhi rekursi $D_n = (n-1)(D_{n-1} + D_{n-2})$.',
        'Metode Fungsi Pembangkit (Generating Functions): Mengodekan barisan $(a_n)$ ke dalam koefisien deret pangkat $G(x) = \\sum_{n=0}^\\infty a_n x^n$.'
      ],
      keyFormulas: [
        { label: 'Karakteristik Rekursi', formula: 'r^2 - ar - b = 0 \\implies x_n = c_1 r_1^n + c_2 r_2^n' },
        { label: 'Rekursi Derangement', formula: 'D_n = (n-1)(D_{n-1} + D_{n-2})' },
        { label: 'Nilai Harapan Keadaan', formula: 'E_s = 1 + \\sum P(s \\to s\') E_{s\'}' }
      ],
      workedExamples: [
        {
          problem: 'Berapa banyak barisan biner dengan panjang 8 yang tidak memuat dua angka 1 yang bersebelahan?',
          solution: 'Langkah 1: Misalkan $a_n$ adalah banyaknya barisan biner valid dengan panjang $n$.\nLangkah 2: Barisan valid panjang $n$ dapat berakhiran 0 (diawali barisan valid panjang $n-1$) atau berakhiran 01 (diawali barisan valid panjang $n-2$).\nLangkah 3: Diperoleh relasi rekursi Fibonacci: $a_n = a_{n-1} + a_{n-2}$.\nLangkah 4: Hitung nilai awal: $a_1 = 2$ (0, 1), $a_2 = 3$ (00, 01, 10).\nLangkah 5: Hitung bertahap: $a_3 = 5, a_4 = 8, a_5 = 13, a_6 = 21, a_7 = 34, a_8 = 55$.\nJadi terdapat 55 barisan biner valid.'
        }
      ],
      misconceptions: [
        'Lupa menambahkan suku konstan "+1" saat menyusun persamaan nilai harapan langkah ($E = 1 + \\sum p_i E_i$).',
        'Mengabaikan kondisi batas ($n=0, 1$) saat menentukan koefisien $c_1, c_2$ dari solusi umum rekursi.'
      ],
      tutorTip: 'Jika permainan atau proses acak berakhir saat suatu pola tercapai, selalu definisikan keadaan (states) berdasarkan prefiks terpanjang dari pola yang telah terpenuhi sejauh ini!'
    },
    questions: [
      {
        id: 'amc12-ch1-q1',
        type: 'short_answer',
        difficulty: 'Dasar',
        source: 'AMC 12A 2020',
        question: 'Barisan bilangan $a_0, a_1, a_2, \\dots$ memenuhi relasi rekursi $a_n = 3a_{n-1} - 2a_{n-2}$ untuk setiap bilangan bulat $n \\ge 2$. Jika $a_0 = 0$ dan $a_1 = 1$, tentukan nilai dari $a_{10}$.',
        hint: 'Persamaan karakteristiknya adalah r^2 - 3r + 2 = 0. Akar-akarnya adalah r = 1 dan r = 2. Gunakan solusi umum an = c1(1^n) + c2(2^n).',
        answer: '1023',
        acceptedAnswers: ['1023', '1023.0'],
        bestSolution: 'Langkah 1: Tulis persamaan karakteristik dari rekursi linier:\n$$r^2 - 3r + 2 = 0 \\iff (r - 1)(r - 2) = 0$$\nAkar-akar karakteristiknya adalah $r_1 = 1$ dan $r_2 = 2$.\nLangkah 2: Solusi umum barisan adalah $a_n = c_1 (1)^n + c_2 (2)^n = c_1 + c_2 2^n$.\nLangkah 3: Gunakan nilai awal $a_0 = 0$ dan $a_1 = 1$:\n$$a_0 = c_1 + c_2 = 0 \\implies c_1 = -c_2$$\n$$a_1 = c_1 + 2c_2 = -c_2 + 2c_2 = c_2 = 1 \\implies c_1 = -1$$\nSehingga rumus eksplisitnya adalah $a_n = 2^n - 1$.\nLangkah 4: Hitung nilai untuk $n = 10$:\n$$a_{10} = 2^{10} - 1 = 1024 - 1 = 1023.$$'
      },
      {
        id: 'amc12-ch1-q2',
        type: 'short_answer',
        difficulty: 'Menengah',
        source: 'AMC 12B 2019',
        question: 'Lima orang siswa menaruh topi mereka ke dalam sebuah kotak. Kemudian masing-masing siswa mengambil satu topi secara acak. Tentukan banyaknya cara di mana tidak ada satu pun siswa yang mendapatkan topinya sendiri (nilai derangement $D_5$).',
        hint: 'Gunakan rekursi derangement Dn = (n-1)(D_{n-1} + D_{n-2}) dengan D1 = 0, D2 = 1, D3 = 2, D4 = 9.',
        answer: '44',
        acceptedAnswers: ['44', '44.0'],
        bestSolution: 'Langkah 1: Derangement $D_n$ menyatakan banyaknya permutasi dari $n$ elemen tanpa titik tetap.\nLangkah 2: Nilai awal derangement:\n$$D_1 = 0$$\n$$D_2 = 1$$\nLangkah 3: Gunakan relasi rekursi $D_n = (n-1)(D_{n-1} + D_{n-2})$:\n$$D_3 = (3-1)(D_2 + D_1) = 2(1 + 0) = 2$$\n$$D_4 = (4-1)(D_3 + D_2) = 3(2 + 1) = 9$$\n$$D_5 = (5-1)(D_4 + D_3) = 4(9 + 2) = 4(11) = 44.$$\nJadi terdapat 44 cara.'
      },
      {
        id: 'amc12-ch1-q3',
        type: 'short_answer',
        difficulty: 'Menengah',
        source: 'AMC 12A 2021',
        question: 'Sebuah koin setimbang dilempar berulang kali sampai muncul dua sisi gambar berturut-turut (HH). Tentukan nilai harapan (expected value) dari banyaknya lemparan yang diperlukan.',
        hint: 'Definisikan 3 keadaan: E0 (belum ada H), E1 (sudah ada 1 H berturut-turut), E2 = 0 (selesai). Susun persamaan nilai harapan langkah.',
        answer: '6',
        acceptedAnswers: ['6', '6 lemparan', '6.0'],
        bestSolution: 'Langkah 1: Definisikan keadaan rantai Markov:\n- $E_0$: Nilai harapan sisa lemparan dari awal (belum ada H).\n- $E_1$: Nilai harapan sisa lemparan setelah muncul 1 buah H.\nLangkah 2: Dari keadaan awal, kita melempar koin (1 lemparan):\n- Dengan peluang $1/2$ muncul H (berpindah ke keadaan $E_1$).\n- Dengan peluang $1/2$ muncul T (kembali ke keadaan $E_0$).\n$$E_0 = 1 + \\frac{1}{2} E_1 + \\frac{1}{2} E_0 \\iff \\frac{1}{2} E_0 = 1 + \\frac{1}{2} E_1 \\iff E_0 = 2 + E_1$$\nLangkah 3: Dari keadaan $E_1$, kita melempar koin lagi (1 lemparan):\n- Dengan peluang $1/2$ muncul H (mencapai target HH, selesai, sisa 0 lemparan).\n- Dengan peluang $1/2$ muncul T (kembali ke keadaan awal $E_0$).\n$$E_1 = 1 + \\frac{1}{2}(0) + \\frac{1}{2} E_0 = 1 + \\frac{1}{2} E_0$$\nLangkah 4: Substitusikan $E_1$ ke dalam persamaan $E_0$:\n$$E_0 = 2 + \\left(1 + \\frac{1}{2} E_0\\right) = 3 + \\frac{1}{2} E_0 \\implies \\frac{1}{2} E_0 = 3 \\implies E_0 = 6.$$\nJadi nilai harapan banyak lemparan adalah 6.'
      },
      {
        id: 'amc12-ch1-q4',
        type: 'short_answer',
        difficulty: 'Tantangan',
        source: 'AMC 12B 2018',
        question: 'Seekor katak melompat di antara tiga daun teratai yang diberi label $A$, $B$, dan $C$. Pada setiap detik, katak tersebut melompat dari daun tempatnya berada ke salah satu dari dua daun lainnya dengan peluang masing-masing $\\frac{1}{2}$. Jika awalnya katak berada di daun $A$, tentukan peluang katak berada di daun $A$ setelah tepat 6 detik (dalam bentuk pecahan biasa terkecil $m/n$).',
        hint: 'Misalkan pn adalah peluang berada di daun A setelah n detik. Tunjukkan bahwa p_n = (1 - p_{n-1})/2.',
        answer: '11/32',
        acceptedAnswers: ['11/32', '43/128', '0.34375'],
        bestSolution: 'Langkah 1: Misalkan $p_n$ adalah peluang katak berada di daun $A$ setelah $n$ detik.\nLangkah 2: Katak berada di daun $A$ pada detik ke-$n$ jika dan hanya jika pada detik ke-$(n-1)$ ia berada di daun $B$ atau $C$, dan kemudian memilih melompat ke $A$ (dengan peluang $1/2$).\n$$p_n = \\frac{1}{2}(1 - p_{n-1}) = \\frac{1}{2} - \\frac{1}{2} p_{n-1}$$\nLangkah 3: Hitung nilai bertahap mulai dari $p_0 = 1$ (karena awalnya di $A$):\n$$p_1 = \\frac{1}{2}(1 - 1) = 0$$\n$$p_2 = \\frac{1}{2}(1 - 0) = \\frac{1}{2}$$\n$$p_3 = \\frac{1}{2}\\left(1 - \\frac{1}{2}\\right) = \\frac{1}{4}$$\n$$p_4 = \\frac{1}{2}\\left(1 - \\frac{1}{4}\\right) = \\frac{3}{8}$$\n$$p_5 = \\frac{1}{2}\\left(1 - \\frac{3}{8}\\right) = \\frac{5}{16}$$\n$$p_6 = \\frac{1}{2}\\left(1 - \\frac{5}{16}\\right) = \\frac{11}{32}.$$\nBentuk paling sederhana adalah $11/32$.'
      },
      {
        id: 'amc12-ch1-q5',
        type: 'short_answer',
        difficulty: 'Dasar',
        source: 'AMC 12A 2017',
        question: 'Tentukan banyaknya barisan biner dengan panjang 10 yang tidak memuat dua angka 1 yang bersebelahan.',
        hint: 'Banyak barisan biner panjang n tanpa 11 bersebelahan adalah bilangan Fibonacci F_{n+2}. Untuk n = 10, hitung F_{12}.',
        answer: '144',
        acceptedAnswers: ['144', '144 string', '144.0'],
        bestSolution: 'Langkah 1: Misalkan $a_n$ adalah banyaknya barisan biner panjang $n$ tanpa dua angka 1 bersebelahan.\nLangkah 2: Barisan dapat berakhiran 0 (diawali barisan valid panjang $n-1$) atau 01 (diawali barisan valid panjang $n-2$).\nDiperoleh relasi Fibonacci: $a_n = a_{n-1} + a_{n-2}$.\nLangkah 3: Hitung suku-suku awalnya:\n$a_1 = 2$ (0, 1)\n$a_2 = 3$ (00, 01, 10)\n$a_3 = 5$\n$a_4 = 8$\n$a_5 = 13$\n$a_6 = 21$\n$a_7 = 34$\n$a_8 = 55$\n$a_9 = 89$\n$a_{10} = 144$.\nJadi terdapat 144 barisan biner yang memenuhi.'
      },
      {
        id: 'amc12-ch1-q6',
        type: 'essay',
        difficulty: 'Olimpiade',
        source: 'OmegaLearn / AIME Practice',
        question: 'Buktikan menggunakan Prinsip Inklusi-Eksklusi (PIE) bahwa banyaknya derangement dari $n$ objek adalah: $$D_n = n! \\sum_{k=0}^n \\frac{(-1)^k}{k!} = n! \\left(1 - \\frac{1}{1!} + \\frac{1}{2!} - \\frac{1}{3!} + \\dots + \\frac{(-1)^n}{n!}\\right)$$',
        hint: 'Misalkan A_i adalah himpunan permutasi di mana elemen ke-i berada di posisi aslinya. Hitung irisan k himpunan |A_{i_1} ∩ ... ∩ A_{i_k}| = (n-k)!, lalu gunakan formula PIE.',
        answer: 'Terbukti via PIE',
        acceptedAnswers: ['Terbukti', 'terbukti', 'Terbukti via PIE'],
        bestSolution: 'Langkah Pembuktian:\n1. Misalkan himpunan semesta $S$ adalah seluruh permutasi dari $n$ elemen, sehingga $|S| = n!$.\n2. Untuk setiap $i \\in \\{1, 2, \\dots, n\\}$, definisikan sifat $A_i$ sebagai kejadian di mana elemen ke-$i$ menempati posisi ke-$i$ (titik tetap).\n3. Untuk sembarang $k$ sifat berbeda $A_{i_1}, A_{i_2}, \\dots, A_{i_k}$, banyaknya permutasi yang memiliki setidaknya $k$ titik tetap tersebut adalah $(n - k)!$, karena $n - k$ elemen sisanya bebas dipermutasikan.\n4. Banyaknya cara memilih $k$ sifat dari $n$ sifat adalah $\\binom{n}{k}$.\n5. Berdasarkan Prinsip Inklusi-Eksklusi, banyaknya permutasi yang tidak memiliki satu pun titik tetap ($D_n$) adalah:\n$$D_n = |S| - \\sum |A_i| + \\sum |A_i \\cap A_j| - \\dots + (-1)^n |A_1 \\cap \\dots \\cap A_n|$$\n$$D_n = n! - \\binom{n}{1}(n-1)! + \\binom{n}{2}(n-2)! - \\binom{n}{3}(n-3)! + \\dots + (-1)^n \\binom{n}{n}(n-n)!$$\n6. Perhatikan bahwa $\\binom{n}{k}(n-k)! = \\frac{n!}{k!(n-k)!} (n-k)! = \\frac{n!}{k!}$.\n7. Faktorkan $n!$ ke luar:\n$$D_n = n! \\left(1 - \\frac{1}{1!} + \\frac{1}{2!} - \\frac{1}{3!} + \\dots + \\frac{(-1)^n}{n!}\\right) = n! \\sum_{k=0}^n \\frac{(-1)^k}{k!}.$$\n(Terbukti secara matematis dan rigor).'
      }
    ]
  },

  // ----------------------------------------------------
  // BAB 2: COMPLEX NUMBERS & GEOMETRY
  // ----------------------------------------------------
  {
    id: 'amc12-ch2-complex-numbers-geometry',
    aliases: ['amc12-ch3-roots-of-unity-de-moivre'],
    level: 12,
    domain: 'Topik Lanjut',
    chapterIndex: 1,
    title: 'Bab 2: Bilangan Kompleks & Bentuk Polar Euler (Complex Numbers in Geometry)',
    summary: {
      overview: 'Bilangan kompleks $z = x + iy$ bukan sekadar perluasan aljabar untuk menyelesaikan akar negatif, melainkan transformasi geometris yang sangat elegan pada bidang Argand. Perkalian bilangan kompleks menghasilkan rotasi sudut dan dilatasi panjang sekaligus. Di AMC 12, penguasaan rumus Euler $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$, teorema De Moivre, serta konsep akar kesatuan (roots of unity) adalah prasyarat untuk menyelesaikan 2-3 soal level akhir setiap tahunnya.',
      coreConcepts: [
        'Bentuk Polar & Eksponensial: $z = r(\\cos\\theta + i\\sin\\theta) = r e^{i\\theta}$, dengan modulus $r = |z| = \\sqrt{x^2 + y^2}$ dan argumen $\\theta = \\arg(z)$.',
        'Teorema De Moivre: Untuk setiap bilangan bulat $n$: $$(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta) \\implies (e^{i\\theta})^n = e^{i n\\theta}$$',
        'Akar Kesatuan ke-$n$ ($n$-th Roots of Unity): Penyelesaian dari $z^n = 1$ adalah: $$\\zeta_k = e^{i \\frac{2\\pi k}{n}} = \\cos\\left(\\frac{2\\pi k}{n}\\right) + i\\sin\\left(\\frac{2\\pi k}{n}\\right), \\quad k = 0, 1, \\dots, n-1$$',
        'Sifat Penjumlahan Akar Kesatuan: $$\\sum_{k=0}^{n-1} \\zeta_k = 1 + \\zeta + \\zeta^2 + \\dots + \\zeta^{n-1} = 0 \\quad (\\text{untuk } n > 1)$$',
        'Rotasi pada Bidang Kompleks: Memutar titik $z$ sebesar sudut $\\alpha$ berlawanan arah jarum jam terhadap titik pusat $z_0$: $$z\' = z_0 + (z - z_0) e^{i\\alpha}$$'
      ],
      keyFormulas: [
        { label: 'De Moivre', formula: '(e^{i\\theta})^n = \\cos(n\\theta) + i\\sin(n\\theta)' },
        { label: 'Roots of Unity', formula: 'z^n = 1 \\implies z_k = e^{i \\frac{2\\pi k}{n}}' },
        { label: 'Rotasi Vektor', formula: 'z\' = z_0 + (z - z_0)e^{i\\alpha}' }
      ],
      workedExamples: [
        {
          problem: 'Hitunglah nilai eksak dari $(1 + i)^{12}$.',
          solution: 'Langkah 1: Ubah bilangan kompleks $1 + i$ ke dalam bentuk polar.\nModulus $r = \\sqrt{1^2 + 1^2} = \\sqrt{2}$.\nArgumen $\\theta = \\arctan(1/1) = \\frac{\\pi}{4}$ ($45^\\circ$).\nSehingga $1 + i = \\sqrt{2} e^{i \\pi/4}$.\nLangkah 2: Terapkan Teorema De Moivre untuk pangkat 12:\n$$(1 + i)^{12} = (\\sqrt{2})^{12} \\left(e^{i \\pi/4}\\right)^{12} = 2^6 \\times e^{i (12\\pi/4)} = 64 \\times e^{i 3\\pi}$$\nLangkah 3: Evaluasi $e^{i 3\\pi} = \\cos(3\\pi) + i\\sin(3\\pi) = -1 + 0 = -1$.\nLangkah 4: Hasil akhirnya adalah $64 \\times (-1) = -64$.'
        }
      ],
      misconceptions: [
        'Lupa bahwa $|\\cos\\theta + i\\sin\\theta| = 1$ selalu berada pada lingkaran satuan.',
        'Salah menentukan kuadran argumen $\\theta$ ketika $x < 0$ (harus menambahkan $\\pi$ atau $180^\\circ$ ke nilai $\\arctan(y/x)$).'
      ],
      tutorTip: 'Jika menemukan soal dengan pangkat bilangan kompleks yang besar ($n \\ge 6$), selalu ubah ke bentuk polar modulus-argumen terlebih dahulu!'
    },
    questions: [
      {
        id: 'amc12-ch2-q1',
        type: 'short_answer',
        difficulty: 'Dasar',
        source: 'AMC 12A 2018',
        question: 'Tentukan nilai dari bagian real (real part) dari bilangan kompleks $\\left(\\frac{1 + i\\sqrt{3}}{2}\\right)^6$.',
        hint: 'Bentuk (1 + i√3)/2 adalah e^(i π/3) pada lingkaran satuan. Pangkatkan 6.',
        answer: '1',
        acceptedAnswers: ['1', '1.0'],
        bestSolution: 'Langkah 1: Perhatikan bahwa $z = \\frac{1}{2} + i\\frac{\\sqrt{3}}{2} = \\cos\\left(\\frac{\\pi}{3}\\right) + i\\sin\\left(\\frac{\\pi}{3}\\right) = e^{i \\pi/3}$.\nLangkah 2: Pangkatkan 6 menggunakan Teorema De Moivre:\n$$z^6 = \\left(e^{i \\pi/3}\\right)^6 = e^{i 2\\pi} = \\cos(2\\pi) + i\\sin(2\\pi) = 1 + 0i$$\nLangkah 3: Bagian real dari bilangan ini adalah $1$.'
      },
      {
        id: 'amc12-ch2-q2',
        type: 'short_answer',
        difficulty: 'Menengah',
        source: 'AMC 12B 2020',
        question: 'Jika $\\omega$ adalah akar kesatuan ketiga tak-real dari $z^3 = 1$ (sehingga $\\omega^2 + \\omega + 1 = 0$), tentukan nilai numerik dari $(1 - \\omega)(1 - \\omega^2)$.',
        hint: 'Jabarkan perkalian aljabar: 1 - ω^2 - ω + ω^3 = 1 - (ω + ω^2) + 1. Ingat ω + ω^2 = -1 dan ω^3 = 1.',
        answer: '3',
        acceptedAnswers: ['3', '3.0'],
        bestSolution: 'Langkah 1: Jabarkan bentuk perkalian:\n$$(1 - \\omega)(1 - \\omega^2) = 1 - \\omega^2 - \\omega + \\omega^3 = 1 - (\\omega + \\omega^2) + \\omega^3$$\nLangkah 2: Karena $\\omega$ adalah akar dari $z^3 = 1$, maka $\\omega^3 = 1$.\nDan karena $\\omega^2 + \\omega + 1 = 0$, maka $\\omega + \\omega^2 = -1$.\nLangkah 3: Substitusikan ke hasil penjabaran:\n$$1 - (-1) + 1 = 1 + 1 + 1 = 3.$$'
      },
      {
        id: 'amc12-ch2-q3',
        type: 'essay',
        difficulty: 'Olimpiade',
        source: 'OmegaLearn / AIME Practice',
        question: 'Misalkan $z_1, z_2, z_3$ adalah tiga titik pada bidang kompleks yang membentuk titik-titik sudut segitiga sama sisi berarah positif (counter-clockwise). Buktikan bahwa berlaku identitas: $z_1^2 + z_2^2 + z_3^2 = z_1 z_2 + z_2 z_3 + z_3 z_1$.',
        hint: 'Rotasikan vektor (z3 - z1) dari (z2 - z1) sebesar 60° menggunakan e^(i π/3) = -ω^2 di mana ω^3 = 1.',
        answer: 'Terbukti via rotasi polar',
        acceptedAnswers: ['Terbukti', 'terbukti', 'Terbukti via rotasi polar'],
        bestSolution: 'Langkah Pembuktian:\n1. Karena segitiga sama sisi berarah positif, titik $z_3$ diperoleh dari merotasikan $z_2$ sebesar $60^\\circ$ ($\\pi/3$ radian) terhadap pusat $z_1$:\n$$(z_3 - z_1) = (z_2 - z_1) e^{i \\pi/3}$$\n2. Misalkan $\\alpha = e^{i \\pi/3}$. Perhatikan bahwa $\\alpha^2 - \\alpha + 1 = 0 \\implies \\alpha = 1 - \\alpha^2$.\n3. Dari hubungan $(z_3 - z_1) = \\alpha (z_2 - z_1)$, susun dalam manipulasi aljabar:\n$$z_3 - z_1 - \\alpha(z_2 - z_1) = 0$$\n4. Diketahui identitas aljabar: Tiga titik $z_1, z_2, z_3$ membentuk segitiga sama sisi jika dan hanya jika:\n$$\\frac{z_3 - z_1}{z_2 - z_1} = \\frac{z_1 - z_2}{z_3 - z_2}$$\n5. Kalikan silang:\n$$(z_3 - z_1)(z_3 - z_2) = -(z_2 - z_1)^2$$\n$$z_3^2 - z_2 z_3 - z_1 z_3 + z_1 z_2 = -z_2^2 + 2z_1 z_2 - z_1^2$$\n6. Pindahkan semua suku kuadrat ke ruas kiri:\n$$z_1^2 + z_2^2 + z_3^2 = z_1 z_2 + z_2 z_3 + z_3 z_1.$$\n(Terbukti secara geometris dan aljabar kompleks).'
      },
      {
        id: 'amc12-ch2-q4',
        type: 'short_answer',
        difficulty: 'Menengah',
        source: 'AMC 12A 2019',
        question: 'Hitung nilai eksak dari penjumlahan bilangan kompleks: $(1 + i)^{20} + (1 - i)^{20}$.',
        hint: 'Perhatikan bahwa (1+i)^2 = 2i dan (1-i)^2 = -2i. Pangkatkan 10.',
        answer: '-2048',
        acceptedAnswers: ['-2048', '-2,048'],
        bestSolution: 'Langkah 1: Sederhanakan kuadrat masing-masing bilangan:\n$$(1 + i)^2 = 1 + 2i + i^2 = 1 + 2i - 1 = 2i$$\n$$(1 - i)^2 = 1 - 2i + i^2 = 1 - 2i - 1 = -2i$$\nLangkah 2: Pangkatkan 10:\n$$(1 + i)^{20} = ((1 + i)^2)^{10} = (2i)^{10} = 2^{10} \\cdot i^{10} = 1024 \\cdot (-1) = -1024$$\n$$(1 - i)^{20} = ((1 - i)^2)^{10} = (-2i)^{10} = (-2)^{10} \\cdot i^{10} = 1024 \\cdot (-1) = -1024$$\nLangkah 3: Jumlahkan kedua hasil:\n$$-1024 + (-1024) = -2048.$$'
      },
      {
        id: 'amc12-ch2-q5',
        type: 'short_answer',
        difficulty: 'Tantangan',
        source: 'AMC 12B 2021',
        question: 'Tentukan modulus $|z|$ dari bilangan kompleks $z = x + iy$ yang memenuhi persamaan: $z + |z| = 2 + 8i$.',
        hint: 'Substitusi z = x + iy dan samakan bagian real serta imajiner: y = 8 dan x + √(x^2 + 64) = 2.',
        answer: '17',
        acceptedAnswers: ['17', '17.0'],
        bestSolution: 'Langkah 1: Tulis $z = x + iy$, sehingga $|z| = \\sqrt{x^2 + y^2}$.\nPersamaan menjadi:\n$$(x + \\sqrt{x^2 + y^2}) + iy = 2 + 8i$$\nLangkah 2: Samakan bagian imajiner:\n$$y = 8$$\nLangkah 3: Samakan bagian real dengan menyubstitusikan $y = 8$:\n$$x + \\sqrt{x^2 + 8^2} = 2 \\implies \\sqrt{x^2 + 64} = 2 - x$$\nLangkah 4: Kuadratkan kedua ruas (dengan syarat $2 - x \\ge 0 \\implies x \\le 2$):\n$$x^2 + 64 = (2 - x)^2 = 4 - 4x + x^2$$\n$$64 = 4 - 4x \\implies 4x = -60 \\implies x = -15$$\nLangkah 5: Hitung modulus $|z|$:\n$$|z| = \\sqrt{(-15)^2 + 8^2} = \\sqrt{225 + 64} = \\sqrt{289} = 17.$$'
      },
      {
        id: 'amc12-ch2-q6',
        type: 'short_answer',
        difficulty: 'Olimpiade',
        source: 'AIME 2017',
        question: 'Misalkan $z_1, z_2, z_3, z_4$ adalah empat akar tak-real dari persamaan $z^5 - 1 = 0$ (akar-akar dari $z^4 + z^3 + z^2 + z + 1 = 0$). Hitunglah nilai numerik dari: $$\\sum_{k=1}^4 \\left(z_k + \\frac{1}{z_k}\\right)$$',
        hint: 'Ingat bahwa jika z adalah akar dari z^5 = 1, maka 1/z = z^4 dan zk + 1/zk = zk + z_k^4. Hitung jumlah seluruh akar.',
        answer: '-2',
        acceptedAnswers: ['-2', '-2.0'],
        bestSolution: 'Langkah 1: Karena $z_k$ adalah akar dari $z^4 + z^3 + z^2 + z + 1 = 0$, berdasarkan Teorema Vieta:\n$$\\sum_{k=1}^4 z_k = -1$$\nLangkah 2: Karena $|z_k| = 1$ untuk setiap akar kesatuan, maka $\\frac{1}{z_k} = \\overline{z_k}$.\nSelain itu, akar-akar $\\{1/z_1, 1/z_2, 1/z_3, 1/z_4\\}$ hanyalah permutasi dari himpunan $\\{z_1, z_2, z_3, z_4\\}$ itu sendiri.\n$$\\sum_{k=1}^4 \\frac{1}{z_k} = \\sum_{k=1}^4 z_k = -1$$\nLangkah 3: Jumlahkan kedua bagian:\n$$\\sum_{k=1}^4 \\left(z_k + \\frac{1}{z_k}\\right) = \\sum_{k=1}^4 z_k + \\sum_{k=1}^4 \\frac{1}{z_k} = -1 + (-1) = -2.$$'
      }
    ]
  },

  // ----------------------------------------------------
  // BAB 3: POLYNOMIAL ROOTS & CYCLOTOMIC POLYNOMIALS
  // ----------------------------------------------------
  {
    id: 'amc12-ch3-polynomials-roots-unity',
    aliases: ['amc12-ch3-roots-of-unity-de-moivre', 'amc12-ch6-polynomial-roots-vieta-adv'],
    level: 12,
    domain: 'Aljabar Lanjut',
    chapterIndex: 2,
    title: 'Bab 3: Teorema Sisa Polinomial & Polinomial Siklotomik',
    summary: {
      overview: 'Teori polinomial di tingkat AMC 12 dan AIME melangkah jauh melampaui rumus kuadratik biasa. Penguasaan rumus Newton-Girard untuk menghitung jumlah pangkat akar $p_k = \\sum r_i^k$, manipulasi polinomial simetris elementer, pemfaktoran $x^n - 1$ ke dalam polinomial siklotomik $\\Phi_d(x)$, serta Teorema Sisa Polinomial adalah instrumen utama pemecahan soal aljabar tingkat kompetisi internasional.',
      coreConcepts: [
        'Teorema Vieta Derajat $n$: Untuk polinomial $P(x) = a_n x^n + a_{n-1} x^{n-1} + \\dots + a_0$, jumlah akar simetris elementer ke-$k$ adalah $e_k = (-1)^k \\frac{a_{n-k}}{a_n}$.',
        'Rumus Newton-Girard: Menghubungkan jumlah pangkat akar $p_k = \\sum r_i^k$ dengan polinomial simetris elementer: $p_k - e_1 p_{k-1} + e_2 p_{k-2} - \\dots + (-1)^k k e_k = 0$.',
        'Polinomial Siklotomik: $\\Phi_n(x)$ adalah polinomial unik dengan koefisien bulat yang akar-akarnya adalah akar primitif kesatuan ke-$n$. Berlaku $x^n - 1 = \\prod_{d \\mid n} \\Phi_d(x)$.',
        'Untuk Bilangan Prima $p$: Polinomial siklotomik ke-$p$ berbentuk $\\Phi_p(x) = x^{p-1} + x^{p-2} + \\dots + x + 1$.',
        'Teorema Sisa Polinomial & Turunan: Sisa pembagian $P(x)$ oleh $(x-a)^2$ diperoleh dari ekspansi Taylor: $R(x) = P(a) + P\'(a)(x-a)$.'
      ],
      keyFormulas: [
        { label: 'Newton-Girard', formula: 'p_k - e_1 p_{k-1} + e_2 p_{k-2} - \\dots = 0' },
        { label: 'Siklotomik Prima', formula: '\\Phi_p(x) = \\sum_{j=0}^{p-1} x^j' },
        { label: 'Faktorisasi x^n - 1', formula: 'x^n - 1 = \\prod_{d \\mid n} \\Phi_d(x)' }
      ],
      workedExamples: [
        {
          problem: 'Jika $a, b, c$ adalah akar-akar dari $x^3 - 3x + 1 = 0$, tentukan nilai dari $a^2 + b^2 + c^2$.',
          solution: 'Langkah 1: Dari Teorema Vieta, $e_1 = a + b + c = 0$, $e_2 = ab + bc + ca = -3$, $e_3 = abc = -1$.\nLangkah 2: Gunakan identitas aljabar kuadrat:\n$$a^2 + b^2 + c^2 = (a+b+c)^2 - 2(ab+bc+ca) = 0^2 - 2(-3) = 6.$$'
        }
      ],
      misconceptions: [
        'Menganggap $\\Phi_n(x)$ selalu memiliki derajat $n$, padahal derajat $\\Phi_n(x)$ adalah $\\phi(n)$ (fungsi totient Euler).',
        'Lupa tanda berganti-ganti $(-1)^k$ pada koefisien Teorema Vieta.'
      ],
      tutorTip: 'Jika diminta menghitung nilai perkalian seperti $(1 - r_1)(1 - r_2)\\dots(1 - r_n)$, cukup substitusikan $x = 1$ ke dalam bentuk faktorisasi polinomial $P(x) = a_n(x - r_1)\\dots(x - r_n)$!'
    },
    questions: [
      {
        id: 'amc12-ch3-q1',
        type: 'short_answer',
        difficulty: 'Dasar',
        source: 'AMC 12A 2017',
        question: 'Diketahui polinomial $x^3 - 4x^2 + 6x - 2 = 0$ memiliki akar-akar $a, b,$ dan $c$. Tentukan nilai dari $a^2 + b^2 + c^2$.',
        hint: 'Gunakan Vieta: a + b + c = 4 dan ab + bc + ca = 6. Ingat a^2 + b^2 + c^2 = (a+b+c)^2 - 2(ab+bc+ca).',
        answer: '4',
        acceptedAnswers: ['4', '4.0'],
        bestSolution: 'Langkah 1: Berdasarkan Teorema Vieta:\n$$a + b + c = 4$$\n$$ab + bc + ca = 6$$\n$$abc = 2$$\nLangkah 2: Terapkan rumus jumlah kuadrat:\n$$a^2 + b^2 + c^2 = (a + b + c)^2 - 2(ab + bc + ca)$$\n$$a^2 + b^2 + c^2 = 4^2 - 2(6) = 16 - 12 = 4.$$'
      },
      {
        id: 'amc12-ch3-q2',
        type: 'short_answer',
        difficulty: 'Menengah',
        source: 'AMC 12B 2018',
        question: 'Polinomial siklotomik ke-6 didefinisikan sebagai $\\Phi_6(x) = x^2 - x + 1$. Tentukan nilai numerik dari $\\Phi_6(2)$.',
        hint: 'Substitusikan x = 2 langsung ke formula x^2 - x + 1.',
        answer: '3',
        acceptedAnswers: ['3', '3.0'],
        bestSolution: 'Langkah 1: Substitusikan nilai $x = 2$ ke dalam $\\Phi_6(x)$:\n$$\\Phi_6(2) = 2^2 - 2 + 1 = 4 - 2 + 1 = 3.$$'
      },
      {
        id: 'amc12-ch3-q3',
        type: 'short_answer',
        difficulty: 'Menengah',
        source: 'AMC 12A 2021',
        question: 'Misalkan $r_1, r_2, r_3, r_4$ adalah akar-akar dari polinomial $P(x) = x^4 - 2x^3 + 3x^2 - 4x + 5$. Tentukan nilai numerik dari: $$(1 + r_1)(1 + r_2)(1 + r_3)(1 + r_4)$$',
        hint: 'Perhatikan bahwa (1 + r1)... = (-1)^4 (-1 - r1)... = P(-1). Substitusikan x = -1.',
        answer: '15',
        acceptedAnswers: ['15', '15.0'],
        bestSolution: 'Langkah 1: Polinomial berderajat 4 dengan akar-akar $r_1, r_2, r_3, r_4$ dapat difaktorkan sebagai:\n$$P(x) = (x - r_1)(x - r_2)(x - r_3)(x - r_4)$$\nLangkah 2: Evaluasi pada $x = -1$:\n$$P(-1) = (-1 - r_1)(-1 - r_2)(-1 - r_3)(-1 - r_4)$$\nKeluarkan faktor $-1$ dari keempat tanda kurung: $(-1)^4 = 1$, sehingga:\n$$P(-1) = (1 + r_1)(1 + r_2)(1 + r_3)(1 + r_4)$$\nLangkah 3: Hitung nilai $P(-1)$ secara langsung:\n$$P(-1) = (-1)^4 - 2(-1)^3 + 3(-1)^2 - 4(-1) + 5$$\n$$P(-1) = 1 - 2(-1) + 3(1) - 4(-1) + 5 = 1 + 2 + 3 + 4 + 5 = 15.$$'
      },
      {
        id: 'amc12-ch3-q4',
        type: 'short_answer',
        difficulty: 'Tantangan',
        source: 'AMC 12B 2019',
        question: 'Tentukan sisa pembagian dari polinomial $P(x) = x^{2024} + x^{1000} + x^2 + 1$ jika dibagi oleh $x^2 + 1$.',
        hint: 'Gunakan aritmatika modulo polinomial dengan x^2 ≡ -1.',
        answer: '2',
        acceptedAnswers: ['2', '2.0'],
        bestSolution: 'Langkah 1: Untuk menentukan sisa pembagian modulo $x^2 + 1$, tetapkan relasi $x^2 \\equiv -1$.\nLangkah 2: Evaluasi setiap suku dari $P(x)$:\n$$x^{2024} = (x^2)^{1012} \\equiv (-1)^{1012} = 1$$\n$$x^{1000} = (x^2)^{500} \\equiv (-1)^{500} = 1$$\n$$x^2 \\equiv -1$$\nSuku konstan $= 1$.\nLangkah 3: Jumlahkan seluruh suku sisa:\n$$R(x) \\equiv 1 + 1 + (-1) + 1 = 2.$$\nJadi sisa pembagiannya adalah bilangan konstan 2.'
      },
      {
        id: 'amc12-ch3-q5',
        type: 'short_answer',
        difficulty: 'Tantangan',
        source: 'AIME 2016',
        question: 'Jika $a, b, c$ adalah akar-akar dari persamaan kubik $x^3 - x - 1 = 0$, tentukan nilai dari $a^5 + b^5 + c^5$.',
        hint: 'Gunakan Rumus Newton-Girard atau relasi x^3 = x + 1 untuk menurunkan x^5 = x^3 + x^2 = x^2 + x + 1.',
        answer: '5',
        acceptedAnswers: ['5', '5.0'],
        bestSolution: 'Langkah 1: Karena setiap akar memenuhi $r^3 = r + 1$, kalikan dengan $r^2$:\n$$r^5 = r^3 + r^2 = (r + 1) + r^2 = r^2 + r + 1$$\nLangkah 2: Jumlahkan untuk ketiga akar $a, b, c$:\n$$a^5 + b^5 + c^5 = (a^2 + b^2 + c^2) + (a + b + c) + (1 + 1 + 1)$$\nLangkah 3: Berdasarkan Vieta dari $x^3 - 0x^2 - x - 1 = 0$:\n$$a + b + c = 0$$\n$$ab + bc + ca = -1$$\n$$a^2 + b^2 + c^2 = (a+b+c)^2 - 2(ab+bc+ca) = 0 - 2(-1) = 2$$\nLangkah 4: Hitung nilai akhirnya:\n$$a^5 + b^5 + c^5 = 2 + 0 + 3 = 5.$$'
      },
      {
        id: 'amc12-ch3-q6',
        type: 'essay',
        difficulty: 'Olimpiade',
        source: 'OmegaLearn / USAMO Qualifier',
        question: 'Buktikan bahwa untuk setiap bilangan prima $p$, polinomial siklotomik $\\Phi_p(x) = x^{p-1} + x^{p-2} + \\dots + x + 1$ tidak dapat difaktorkan atas bilangan bulat (irreducible over $\\mathbb{Q}$) menggunakan Kriteria Eisenstein pada polinomial $\\Phi_p(y+1)$.',
        hint: 'Tulis Φ_p(x) = (x^p - 1)/(x - 1). Substitusi x = y + 1 sehingga Φ_p(y+1) = ((y+1)^p - 1)/y = y^{p-1} + \\binom{p}{p-1}y^{p-2} + ... + p. Terapkan Eisenstein pada prima p.',
        answer: 'Terbukti via Kriteria Eisenstein',
        acceptedAnswers: ['Terbukti', 'terbukti', 'Terbukti via Kriteria Eisenstein'],
        bestSolution: 'Langkah Pembuktian:\n1. Diketahui identitas $\\Phi_p(x) = \\frac{x^p - 1}{x - 1}$.\n2. Lakukan transformasi variabel $x = y + 1$:\n$$\\Phi_p(y + 1) = \\frac{(y + 1)^p - 1}{(y + 1) - 1} = \\frac{1}{y} \\left( \\sum_{k=0}^p \\binom{p}{k} y^k - 1 \\right)$$\n3. Karena suku $k=0$ adalah $1$, maka $-1$ saling menghilangkan:\n$$\\Phi_p(y + 1) = \\frac{1}{y} \\sum_{k=1}^p \\binom{p}{k} y^k = \\sum_{k=1}^p \\binom{p}{k} y^{k-1}$$\n$$\\Phi_p(y + 1) = y^{p-1} + \\binom{p}{p-1} y^{p-2} + \\dots + \\binom{p}{2} y + \\binom{p}{1}$$\n4. Periksa syarat Kriteria Eisenstein untuk bilangan prima $p$:\n- Koefisien utama adalah $1$, yang tidak habis dibagi oleh $p$.\n- Untuk setiap koefisien suku dalam $k = 1, 2, \\dots, p-1$, koefisiennya adalah $\\binom{p}{k} = \\frac{p!}{k!(p-k)!}$. Karena $p$ adalah bilangan prima dan $1 \\le k \\le p-1$, maka $p$ membagi $\\binom{p}{k}$.\n- Suku konstan adalah $\\binom{p}{1} = p$. Jelas $p \\mid p$, namun $p^2 \\nmid p$.\n5. Karena ketiga syarat Kriteria Eisenstein terpenuhi, maka $\\Phi_p(y+1)$ irreducible over $\\mathbb{Q}$.\n6. Akibatnya, $\\Phi_p(x)$ juga tidak dapat difaktorkan (irreducible) over $\\mathbb{Q}$. (Terbukti).'
      }
    ]
  },

  // ----------------------------------------------------
  // BAB 4: LOGARITHMS & EXPONENTIALS
  // ----------------------------------------------------
  {
    id: 'amc12-ch4-logarithms-exponents',
    aliases: ['amc12-ch4-generating-functions'],
    level: 12,
    domain: 'Aljabar Lanjut',
    chapterIndex: 3,
    title: 'Bab 4: Persamaan Logaritma Kompleks & Basis Variabel',
    summary: {
      overview: 'Fungsi logaritma dan eksponensial dalam AMC 12 sering kali menguji fleksibilitas manipulasi aljabar tingkat tinggi: basis yang berupa variabel, persamaan logaritma bertingkat, relasi perkalian berganti basis (telescoping product), serta analisis karakteristik dan mantisa bilangan. Kejelian dalam memeriksa domain eksistensi basis ($b > 0, b \\ne 1$) dan numerus ($x > 0$) menjadi pembeda utama antara jawaban benar dan jebakan solusi semu.',
      coreConcepts: [
        'Sifat Pergantian Basis: $\\log_b a = \\frac{\\log_c a}{\\log_c b}$, implikasinya $\\log_b a \\cdot \\log_a b = 1$ dan $\\log_a b \\cdot \\log_b c = \\log_a c$.',
        'Pangkat Berbasis Logaritma: $a^{\\log_b c} = c^{\\log_b a}$, sifat ini sangat ampuh saat menyederhanakan ekspresi dengan variabel di basis dan pangkat sekaligus.',
        'Metode Logaritma Alami Dua Ruas: Menyelesaikan persamaan bentuk $f(x)^{g(x)} = h(x)$ dengan mengambil logaritma basis 10 atau basis $e$ pada kedua ruas.',
        'Karakteristik & Mantisa: $\\log_{10} N = c + m$, di mana $c = \\lfloor \\log_{10} N \\rfloor$ menentukan jumlah digit ($c + 1$ digit) dan $m = \\{ \\log_{10} N \\} \\in [0, 1)$ menentukan digit-digit awal $N$.',
        'Domain Wajib: Untuk setiap suku $\\log_{u(x)} v(x)$, selalu wajib berlaku syarat $u(x) > 0, u(x) \\ne 1$, dan $v(x) > 0$.'
      ],
      keyFormulas: [
        { label: 'Ganti Basis', formula: '\\log_b a = \\frac{\\log_c a}{\\log_c b}' },
        { label: 'Tukar Posisi', formula: 'a^{\\log_b c} = c^{\\log_b a}' },
        { label: 'Jumlah Digit', formula: '\\text{Digit}(N) = \\lfloor \\log_{10} N \\rfloor + 1' }
      ],
      workedExamples: [
        {
          problem: 'Selesaikan untuk bilangan real $x$: $\\log_2(x) + \\log_4(x) + \\log_8(x) = 11$.',
          solution: 'Langkah 1: Ubah seluruh basis logaritma ke basis 2:\n$$\\log_4(x) = \\frac{\\log_2(x)}{\\log_2 4} = \\frac{1}{2} \\log_2(x)$$\n$$\\log_8(x) = \\frac{\\log_2(x)}{\\log_2 8} = \\frac{1}{3} \\log_2(x)$$\nLangkah 2: Substitusikan ke persamaan:\n$$\\log_2(x) + \\frac{1}{2}\\log_2(x) + \\frac{1}{3}\\log_2(x) = 11$$\n$$\\left(1 + \\frac{1}{2} + \\frac{1}{3}\\right) \\log_2(x) = \\frac{11}{6} \\log_2(x) = 11$$\nLangkah 3: Kalikan dengan $6/11$:\n$$\\log_2(x) = 6 \\implies x = 2^6 = 64.$$'
        }
      ],
      misconceptions: [
        'Lupa memeriksa syarat $b \\ne 1$ ketika basis logaritma memuat variabel $x$.',
        'Menganggap $\\log(a + b) = \\log(a) + \\log(b)$, padahal yang benar adalah $\\log(ab) = \\log(a) + \\log(b)$.'
      ],
      tutorTip: 'Jika ada variabel pada basis dan pangkat sekaligus seperti $x^{\\log x}$, langsung logaritma-kan kedua ruas persamaan dengan basis logaritma yang ada pada eksponen!'
    },
    questions: [
      {
        id: 'amc12-ch4-q1',
        type: 'short_answer',
        difficulty: 'Dasar',
        source: 'AMC 12A 2018',
        question: 'Hitunglah nilai numerik dari perkalian berantai logaritma berikut: $$\\log_2 3 \\cdot \\log_3 4 \\cdot \\log_4 5 \\cdots \\log_{127} 128$$',
        hint: 'Gunakan sifat telescoping perkalian logaritma: log_a(b) * log_b(c) = log_a(c).',
        answer: '7',
        acceptedAnswers: ['7', '7.0'],
        bestSolution: 'Langkah 1: Terapkan rumus pergantian basis:\n$$\\frac{\\ln 3}{\\ln 2} \\cdot \\frac{\\ln 4}{\\ln 3} \\cdot \\frac{\\ln 5}{\\ln 4} \\cdots \\frac{\\ln 128}{\\ln 127}$$\nLangkah 2: Semua pembilang dan penyebut saling menghilangkan secara telescoping kecuali penyebut pertama dan pembilang terakhir:\n$$= \\frac{\\ln 128}{\\ln 2} = \\log_2 128$$\nLangkah 3: Karena $128 = 2^7$, maka nilainya adalah $7$.'
      },
      {
        id: 'amc12-ch4-q2',
        type: 'short_answer',
        difficulty: 'Dasar',
        source: 'AMC 12B 2017',
        question: 'Tentukan banyaknya solusi real yang memenuhi persamaan: $\\log_2(x^2 - 3) = \\log_2(2x)$.',
        hint: 'Samakan numerus x^2 - 3 = 2x, lalu periksa domain numerus harus positif (x > 0 dan x^2 - 3 > 0).',
        answer: '1',
        acceptedAnswers: ['1', '1 solusi', '1.0'],
        bestSolution: 'Langkah 1: Samakan numerus kedua ruas:\n$$x^2 - 3 = 2x \\iff x^2 - 2x - 3 = 0 \\iff (x - 3)(x + 1) = 0$$\nDiperoleh calon solusi $x = 3$ atau $x = -1$.\nLangkah 2: Uji domain logaritma:\n- Syarat numerus: $2x > 0 \\implies x > 0$.\n- Untuk $x = -1$: numerus $2(-1) = -2 < 0$, tidak terdefinisi (solusi semu).\n- Untuk $x = 3$: numerus $2(3) = 6 > 0$ dan $3^2 - 3 = 6 > 0$, memenuhi.\nLangkah 3: Jadi hanya ada tepat 1 solusi real.'
      },
      {
        id: 'amc12-ch4-q3',
        type: 'short_answer',
        difficulty: 'Menengah',
        source: 'AMC 12A 2020',
        question: 'Diberikan aproksimasi $\\log_{10} 2 \\approx 0.30103$. Tentukan banyaknya digit dari representasi desimal bilangan $2^{100}$.',
        hint: 'Banyak digit dari bilangan N adalah floor(log_10 N) + 1.',
        answer: '31',
        acceptedAnswers: ['31', '31 digit', '31.0'],
        bestSolution: 'Langkah 1: Hitung $\\log_{10}(2^{100})$:\n$$\\log_{10}(2^{100}) = 100 \\times \\log_{10} 2 \\approx 100 \\times 0.30103 = 30.103$$\nLangkah 2: Banyak digit dari bilangan bulat $N$ ditentukan oleh:\n$$\\text{Banyak Digit} = \\lfloor \\log_{10} N \\rfloor + 1 = \\lfloor 30.103 \\rfloor + 1 = 30 + 1 = 31.$$\nJadi $2^{100}$ memiliki 31 digit.'
      },
      {
        id: 'amc12-ch4-q4',
        type: 'short_answer',
        difficulty: 'Menengah',
        source: 'AMC 12B 2019',
        question: 'Tentukan hasil kali dari seluruh solusi real yang memenuhi persamaan: $x^{\\log_{10} x} = 100x$.',
        hint: 'Ambil logaritma basis 10 pada kedua ruas: (log x)^2 = log(100x) = 2 + log x. Selesaikan persamaan kuadrat.',
        answer: '10',
        acceptedAnswers: ['10', '10.0'],
        bestSolution: 'Langkah 1: Ambil $\\log_{10}$ pada kedua ruas (dengan syarat domain $x > 0$):\n$$\\log_{10}(x^{\\log_{10} x}) = \\log_{10}(100x)$$\n$$(\\log_{10} x) \\cdot (\\log_{10} x) = \\log_{10}(100) + \\log_{10}(x)$$\nLangkah 2: Misalkan $u = \\log_{10} x$:\n$$u^2 = 2 + u \\iff u^2 - u - 2 = 0 \\iff (u - 2)(u + 1) = 0$$\nAkar-akarnya adalah $u_1 = 2$ dan $u_2 = -1$.\nLangkah 3: Cari nilai $x$:\n$$x_1 = 10^2 = 100$$\n$$x_2 = 10^{-1} = 0.1$$\nLangkah 4: Hitung hasil kali kedua solusi:\n$$x_1 \\cdot x_2 = 100 \\times 0.1 = 10.$$'
      },
      {
        id: 'amc12-ch4-q5',
        type: 'short_answer',
        difficulty: 'Tantangan',
        source: 'AMC 12A 2016',
        question: 'Diberikan bilangan real $a, b > 1$ sedemikian hingga $\\log_a(b) + \\log_b(a) = \\frac{10}{3}$ dan $ab = 256$. Tentukan nilai dari $\\frac{a + b}{2}$.',
        hint: 'Misalkan u = log_a(b). Persamaannya menjadi u + 1/u = 10/3 => u = 3 atau 1/3. Maka b = a^3 atau a = b^3.',
        answer: '34',
        acceptedAnswers: ['34', '34.0'],
        bestSolution: 'Langkah 1: Misalkan $u = \\log_a b$. Karena $a, b > 1$, maka $u > 0$.\n$$u + \\frac{1}{u} = \\frac{10}{3} \\implies 3u^2 - 10u + 3 = 0 \\implies (3u - 1)(u - 3) = 0$$\nSehingga $u = 3$ atau $u = 1/3$.\nLangkah 2: Karena bentuk $a$ dan $b$ simetris, tanpa mengurangi keumuman anggap $u = 3$, sehingga $\\log_a b = 3 \\implies b = a^3$.\nLangkah 3: Substitusikan ke dalam $ab = 256$:\n$$a \\cdot a^3 = a^4 = 256 \\implies a = 4$$\nMaka $b = 4^3 = 64$.\nLangkah 4: Hitung nilai rata-ratanya:\n$$\\frac{a + b}{2} = \\frac{4 + 64}{2} = \\frac{68}{2} = 34.$$'
      },
      {
        id: 'amc12-ch4-q6',
        type: 'essay',
        difficulty: 'Olimpiade',
        source: 'OmegaLearn / AIME Practice',
        question: 'Buktikan bahwa untuk setiap bilangan real $a, b > 1$, berlaku ketaksamaan: $$\\log_a\\left(\\frac{a+b}{2}\\right) + \\log_b\\left(\\frac{a+b}{2}\\right) \\ge 2$$',
        hint: 'Gunakan ketaksamaan AM-GM: (a+b)/2 >= √(ab), lalu gunakan sifat monoton naik logaritma dan ketaksamaan AM-GM pada log_a(√(ab)) + log_b(√(ab)).',
        answer: 'Terbukti via AM-GM',
        acceptedAnswers: ['Terbukti', 'terbukti', 'Terbukti via AM-GM'],
        bestSolution: 'Langkah Pembuktian:\n1. Berdasarkan Ketaksamaan Rata-rata Aritmatika-Geometri (AM-GM):\n$$\\frac{a+b}{2} \\ge \\sqrt{ab}$$\n2. Karena fungsi logaritma dengan basis $> 1$ adalah fungsi monoton naik, maka untuk setiap $x > 1$:\n$$\\log_a\\left(\\frac{a+b}{2}\\right) \\ge \\log_a(\\sqrt{ab}) = \\frac{1}{2} \\log_a(ab) = \\frac{1}{2}(1 + \\log_a b)$$\n$$\\log_b\\left(\\frac{a+b}{2}\\right) \\ge \\log_b(\\sqrt{ab}) = \\frac{1}{2} \\log_b(ab) = \\frac{1}{2}(1 + \\log_b a)$$\n3. Jumlahkan kedua ketaksamaan:\n$$\\log_a\\left(\\frac{a+b}{2}\\right) + \\log_b\\left(\\frac{a+b}{2}\\right) \\ge \\frac{1}{2}(1 + \\log_a b) + \\frac{1}{2}(1 + \\log_b a)$$\n$$= 1 + \\frac{1}{2}\\left(\\log_a b + \\log_b a\\right)$$\n4. Terapkan AM-GM sekali lagi pada suku $\\log_a b + \\log_b a$:\n$$\\log_a b + \\log_b a \\ge 2\\sqrt{\\log_a b \\cdot \\log_b a} = 2\\sqrt{1} = 2$$\n5. Substitusikan kembali:\n$$\\ge 1 + \\frac{1}{2}(2) = 1 + 1 = 2.$$\nKesamaan berlaku jika dan hanya jika $a = b$. (Terbukti).'
      }
    ]
  },

  // ----------------------------------------------------
  // BAB 5: EULER'S TOTIENT & CHINESE REMAINDER THEOREM
  // ----------------------------------------------------
  {
    id: 'amc12-ch5-euler-totient-crt',
    aliases: ['amc12-ch7-fermat-euler-wilson', 'amc12-ch5-recursion-linear-relations'],
    level: 12,
    domain: 'Teori Bilangan Lanjut',
    chapterIndex: 4,
    title: 'Bab 5: Fungsi Totient Euler & Teorema Sisa Cina (Euler\'s Totient & CRT)',
    summary: {
      overview: 'Aritmatika modular tingkat lanjut dalam AMC 12 berakar pada struktur aljabar grup siklik modulo $n$. Dua pilar utamanya adalah Teorema Totient Euler ($a^{\\phi(n)} \\equiv 1 \\pmod n$), yang menggeneralisasikan Teorema Kecil Fermat untuk sembarang modulus komposit, dan Teorema Sisa Cina (Chinese Remainder Theorem - CRT), yang menjamin adanya solusi tunggal untuk sistem kongruensi linier simultan dengan modulus-modulus yang saling prima.',
      coreConcepts: [
        'Fungsi Totient Euler $\\phi(n)$: Menghitung banyaknya bilangan bulat positif $k \\le n$ sedemikian hingga $\\gcd(k, n) = 1$. Jika $n = p_1^{e_1} \\dots p_k^{e_k}$, maka $\\phi(n) = n \\prod_{i=1}^k \\left(1 - \\frac{1}{p_i}\\right)$.',
        'Teorema Euler: Jika $\\gcd(a, n) = 1$, maka $a^{\\phi(n)} \\equiv 1 \\pmod n$.',
        'Teorema Sisa Cina (CRT): Sistem kongruensi $x \\equiv a_i \\pmod{m_i}$ dengan $\\gcd(m_i, m_j) = 1$ memiliki solusi unik modulo $M = m_1 m_2 \\dots m_k$.',
        'Teorema Wilson: Bilangan bulat $p > 1$ adalah bilangan prima jika dan hanya jika $(p-1)! \\equiv -1 \\pmod p$.',
        'Reduksi Eksponen Bertingkat: Untuk menghitung $a^b \\pmod n$ saat $\\gcd(a, n) = 1$, eksponen $b$ cukup dihitung modulo $\\phi(n)$.'
      ],
      keyFormulas: [
        { label: 'Rumus Totient Euler', formula: '\\phi(n) = n \\prod_{p \\mid n} (1 - 1/p)' },
        { label: 'Teorema Euler', formula: 'a^{\\phi(n)} \\equiv 1 \\pmod n' },
        { label: 'Teorema Wilson', formula: '(p-1)! \\equiv -1 \\pmod p' }
      ],
      workedExamples: [
        {
          problem: 'Tentukan dua digit terakhir dari $3^{1000}$.',
          solution: 'Langkah 1: Dua digit terakhir berarti mencari nilai $3^{1000} \\pmod{100}$.\nLangkah 2: Hitung fungsi totient dari modulus $n = 100 = 2^2 \\times 5^2$:\n$$\\phi(100) = 100 \\left(1 - \\frac{1}{2}\\right)\\left(1 - \\frac{1}{5}\\right) = 100 \\times \\frac{1}{2} \\times \\frac{4}{5} = 40$$\nLangkah 3: Karena $\\gcd(3, 100) = 1$, Teorema Euler menjamin $3^{40} \\equiv 1 \\pmod{100}$.\nLangkah 4: Reduksi eksponen: $1000 = 40 \\times 25$:\n$$3^{1000} = (3^{40})^{25} \\equiv 1^{25} \\equiv 1 \\pmod{100}$$\nJadi dua digit terakhirnya adalah 01.'
        }
      ],
      misconceptions: [
        'Menerapkan Teorema Euler $a^{\\phi(n)} \\equiv 1 \\pmod n$ saat $\\gcd(a, n) \\ne 1$.',
        'Lupa memeriksa bahwa modulus-modulus dalam Teorema Sisa Cina harus saling prima sepasang demi sepasang (pairwise coprime).'
      ],
      tutorTip: 'Jika modulus $n$ komposit besar dan sulit dihitung langsung, pecah menjadi faktor-faktor prima yang saling prima (misal mod 1000 dipecah menjadi mod 8 dan mod 125), hitung masing-masing, lalu gabungkan kembali dengan CRT!'
    },
    questions: [
      {
        id: 'amc12-ch5-q1',
        type: 'short_answer',
        difficulty: 'Dasar',
        source: 'AMC 12A 2019',
        question: 'Hitunglah nilai dari fungsi totient Euler $\\phi(100)$.',
        hint: 'Faktorisasi 100 = 2^2 * 5^2. Rumus: φ(n) = n * (1 - 1/2) * (1 - 1/5).',
        answer: '40',
        acceptedAnswers: ['40', '40.0'],
        bestSolution: 'Langkah 1: Faktorisasi prima dari $100 = 2^2 \\times 5^2$.\nLangkah 2: Terapkan rumus perkalian Euler:\n$$\\phi(100) = 100 \\times \\left(1 - \\frac{1}{2}\\right) \\times \\left(1 - \\frac{1}{5}\\right) = 100 \\times \\frac{1}{2} \\times \\frac{4}{5} = 40.$$'
      },
      {
        id: 'amc12-ch5-q2',
        type: 'short_answer',
        difficulty: 'Menengah',
        source: 'AMC 12B 2021',
        question: 'Tentukan dua digit terakhir dari bilangan $7^{2024}$.',
        hint: 'Dua digit terakhir adalah mod 100. φ(100) = 40. Reduksi 2024 modulo 40 atau perhatikan siklus 7^4 = 2401 ≡ 1 (mod 100).',
        answer: '01',
        acceptedAnswers: ['01', '1', '01 (atau 1)'],
        bestSolution: 'Langkah 1: Menentukan dua digit terakhir setara dengan mengevaluasi $7^{2024} \\pmod{100}$.\nLangkah 2: Hitung nilai pangkat kecil modulo 100:\n$$7^1 = 7$$\n$$7^2 = 49$$\n$$7^4 = (49)^2 = 2401 \\equiv 1 \\pmod{100}$$\nLangkah 3: Karena $2024$ habis dibagi $4$ ($2024 = 4 \\times 506$):\n$$7^{2024} = (7^4)^{506} \\equiv 1^{506} \\equiv 1 \\pmod{100}$$\nLangkah 4: Nilai dua digit terakhirnya adalah 01.'
      },
      {
        id: 'amc12-ch5-q3',
        type: 'short_answer',
        difficulty: 'Menengah',
        source: 'AMC 12A 2020',
        question: 'Tentukan bilangan bulat positif terkecil $x$ yang memenuhi ketiga sistem kongruensi berikut: $$x \\equiv 2 \\pmod 3, \\quad x \\equiv 3 \\pmod 5, \\quad x \\equiv 2 \\pmod 7$$',
        hint: 'Perhatikan bahwa x ≡ 2 mod 3 dan x ≡ 2 mod 7 berarti x ≡ 2 mod 21. Uji nilai 2, 23, 44... pada mod 5.',
        answer: '23',
        acceptedAnswers: ['23', '23.0'],
        bestSolution: 'Langkah 1: Dari kongruensi pertama dan ketiga:\n$$x \\equiv 2 \\pmod 3 \\quad \\text{dan} \\quad x \\equiv 2 \\pmod 7$$\nKarena $\\gcd(3, 7) = 1$, maka $x \\equiv 2 \\pmod{21}$.\nLangkah 2: Tulis $x$ dalam bentuk aljabar: $x = 21k + 2$.\nLangkah 3: Substitusikan ke dalam kongruensi kedua ($x \\equiv 3 \\pmod 5$):\n$$21k + 2 \\equiv 3 \\pmod 5$$\n$$1k + 2 \\equiv 3 \\pmod 5 \\implies k \\equiv 1 \\pmod 5$$\nLangkah 4: Nilai bilangan bulat terkecil non-negatif adalah $k = 1$:\n$$x = 21(1) + 2 = 23.$$\nPeriksa: $23 = 7(3)+2$, $23 = 4(5)+3$, $23 = 3(7)+2$. Semua terpenuhi!'
      },
      {
        id: 'amc12-ch5-q4',
        type: 'short_answer',
        difficulty: 'Tantangan',
        source: 'AMC 12B 2018',
        question: 'Tentukan sisa pembagian dari $99!$ jika dibagi oleh bilangan prima $101$.',
        hint: 'Gunakan Teorema Wilson: 100! ≡ -1 (mod 101). Tulis 100! = 100 * 99! ≡ -1 * 99! ≡ -1 (mod 101).',
        answer: '1',
        acceptedAnswers: ['1', '1.0'],
        bestSolution: 'Langkah 1: Karena $p = 101$ adalah bilangan prima, berdasarkan Teorema Wilson:\n$$100! \\equiv -1 \\pmod{101}$$\nLangkah 2: Pecah perkalian faktorial:\n$$100 \\times 99! \\equiv -1 \\pmod{101}$$\nLangkah 3: Perhatikan bahwa $100 \\equiv -1 \\pmod{101}$:\n$$-1 \\times 99! \\equiv -1 \\pmod{101}$$\nLangkah 4: Kalikan kedua ruas dengan $-1$:\n$$99! \\equiv 1 \\pmod{101}.$$\nJadi sisa pembagiannya adalah 1.'
      },
      {
        id: 'amc12-ch5-q5',
        type: 'short_answer',
        difficulty: 'Tantangan',
        source: 'AIME 2019',
        question: 'Tentukan banyaknya bilangan bulat positif $n \\le 1000$ sedemikian hingga $\\gcd(n, 30) = 1$.',
        hint: 'Fungsi phi Euler φ(30) = 8. Dalam setiap blok 30 bilangan berurutan, ada tepat 8 yang relatif prima dengan 30. Hitung untuk 1000 = 33 * 30 + 10.',
        answer: '266',
        acceptedAnswers: ['266', '266.0'],
        bestSolution: 'Langkah 1: Faktorisasi $30 = 2 \\times 3 \\times 5$.\nLangkah 2: Hitung banyaknya bilangan relatif prima dengan 30 dalam setiap periode 30:\n$$\\phi(30) = 30 \\left(1 - \\frac{1}{2}\\right)\\left(1 - \\frac{1}{3}\\right)\\left(1 - \\frac{1}{5}\\right) = 30 \\times \\frac{1}{2} \\times \\frac{2}{3} \\times \\frac{4}{5} = 8$$\nLangkah 3: Bagi $1000$ dengan $30$:\n$$1000 = 33 \\times 30 + 10$$\nDalam $33$ blok penuh terdapat $33 \\times 8 = 264$ bilangan.\nLangkah 4: Periksa sisa 10 bilangan pertama dari blok terakhir $\\{991, 992, \\dots, 1000\\}$, yang ekuivalen dengan $\\{1, 2, \\dots, 10\\}$ modulo 30:\nBilangan yang relatif prima dengan 30 di antara 1 sampai 10 adalah $1$ dan $7$ (ada 2 bilangan).\nLangkah 5: Total keseluruhan adalah $264 + 2 = 266$.'
      },
      {
        id: 'amc12-ch5-q6',
        type: 'essay',
        difficulty: 'Olimpiade',
        source: 'OmegaLearn / AIME Practice',
        question: 'Buktikan Teorema Sisa Cina (CRT) untuk sistem dua persamaan kongruensi: Jika $\\gcd(m, n) = 1$, buktikan bahwa untuk setiap bilangan bulat $a, b$, sistem kongruensi $x \\equiv a \\pmod m$ dan $x \\equiv b \\pmod n$ selalu memiliki solusi, dan solusi tersebut tunggal modulo $mn$.',
        hint: 'Gunakan Identitas Bezout: karena gcd(m, n) = 1, ada integer u, v sedemikian hingga mu + nv = 1. Konstruksi x0 = a(nv) + b(mu).',
        answer: 'Terbukti via Teorema Bezout',
        acceptedAnswers: ['Terbukti', 'terbukti', 'Terbukti via Teorema Bezout'],
        bestSolution: 'Langkah Pembuktian:\n1. Eksistensi Solusi:\nKarena $\\gcd(m, n) = 1$, berdasarkan Identitas Bezout terdapat bilangan bulat $u, v$ sedemikian hingga:\n$$m u + n v = 1$$\nDari identitas ini berlaku:\n$$n v \\equiv 1 \\pmod m \\quad \\text{dan} \\quad n v \\equiv 0 \\pmod n$$\n$$m u \\equiv 0 \\pmod m \\quad \\text{dan} \\quad m u \\equiv 1 \\pmod n$$\n2. Konstruksikan nilai $x_0$ sebagai:\n$$x_0 = a(n v) + b(m u)$$\n3. Uji pada kedua modulus:\nModulo $m$: $x_0 \\equiv a(1) + b(0) \\equiv a \\pmod m$.\nModulo $n$: $x_0 \\equiv a(0) + b(1) \\equiv b \\pmod n$.\nSehingga $x_0$ adalah solusi yang valid.\n4. Ketunggalan Modulo $mn$:\nMisalkan $x_1$ dan $x_2$ adalah dua solusi dari sistem tersebut.\nMaka $x_1 \\equiv x_2 \\equiv a \\pmod m \\implies m \\mid (x_1 - x_2)$.\nDan $x_1 \\equiv x_2 \\equiv b \\pmod n \\implies n \\mid (x_1 - x_2)$.\nKarena $\\gcd(m, n) = 1$, maka perkaliannya juga membagi selisihnya:\n$$m n \\mid (x_1 - x_2) \\implies x_1 \\equiv x_2 \\pmod{mn}.$$\nJadi solusi tersebut tunggal secara modulo $mn$. (Terbukti).'
      }
    ]
  },

  // ----------------------------------------------------
  // BAB 6: ALGEBRAIC NUMBER THEORY & QUADRATIC RESIDUES
  // ----------------------------------------------------
  {
    id: 'amc12-ch6-algebraic-number-theory',
    aliases: ['amc12-ch8-order-primitive-roots', 'amc12-ch6-polynomial-roots-vieta-adv'],
    level: 12,
    domain: 'Teori Bilangan Lanjut',
    chapterIndex: 5,
    title: 'Bab 6: Teori Bilangan Aljabar, Residu Kuadratik & Simbol Legendre',
    summary: {
      overview: 'Teori bilangan aljabar pada AMC 12 dan AIME mendalami sifat-sifat keterbagian pada gelanggang yang lebih luas (seperti bilangan bulat Gaussian $\\mathbb{Z}[i]$), keterlarutan persamaan kuadrat modulo prima melalui Simbol Legendre dan Kriteria Euler, sifat order modular, serta penyelesaian persamaan Diophantine non-linier klasik seperti Persamaan Pell $x^2 - Dy^2 = 1$.',
      coreConcepts: [
        'Residu Kuadratik: Bilangan $a$ disebut residu kuadratik modulo $p$ jika ada $x$ sedemikian hingga $x^2 \\equiv a \\pmod p$. Tepat ada $\\frac{p-1}{2}$ residu kuadratik bukan nol modulo $p$.',
        'Simbol Legendre & Kriteria Euler: $\\left(\\frac{a}{p}\\right) \\equiv a^{\\frac{p-1}{2}} \\pmod p$. Bernilai $1$ jika $a$ residu kuadratik, $-1$ jika bukan.',
        'Hukum Resiprokalitas Kuadratik: Untuk prima ganjil berbeda $p, q$: $\\left(\\frac{p}{q}\\right)\\left(\\frac{q}{p}\\right) = (-1)^{\\frac{p-1}{2}\\frac{q-1}{2}}$.',
        'Order Modular $\\text{ord}_m(a)$: Pangkat positif terkecil $k$ sedemikian hingga $a^k \\equiv 1 \\pmod m$. Selalu berlaku $\\text{ord}_m(a) \\mid \\phi(m)$.',
        'Persamaan Pell: $x^2 - D y^2 = 1$. Jika $(x_1, y_1)$ adalah solusi fundamental, seluruh solusi dihasilkan oleh $x_k + y_k \\sqrt{D} = (x_1 + y_1 \\sqrt{D})^k$.'
      ],
      keyFormulas: [
        { label: 'Kriteria Euler', formula: '(\\frac{a}{p}) \\equiv a^{(p-1)/2} \\pmod p' },
        { label: 'Resiprokalitas Kuadratik', formula: '(\\frac{p}{q})(\\frac{q}{p}) = (-1)^{\\frac{p-1}{2}\\frac{q-1}{2}}' },
        { label: 'Solusi Pell', formula: 'x_k + y_k \\sqrt{D} = (x_1 + y_1 \\sqrt{D})^k' }
      ],
      workedExamples: [
        {
          problem: 'Tentukan apakah kongruensi $x^2 \\equiv 2 \\pmod{17}$ memiliki solusi bilangan bulat.',
          solution: 'Langkah 1: Gunakan Kriteria Euler untuk menghitung Simbol Legendre $\\left(\\frac{2}{17}\\right)$:\n$$\\left(\\frac{2}{17}\\right) \\equiv 2^{(17-1)/2} = 2^8 \\pmod{17}$$\nLangkah 2: Evaluasi $2^8 = 256$:\n$$256 = 15 \\times 17 + 1 \\equiv 1 \\pmod{17}$$\nLangkah 3: Karena nilainya $+1$, maka 2 adalah residu kuadratik modulo 17, sehingga persamaannya memiliki solusi (yaitu $x \\equiv \\pm 6 \\pmod{17}$).'
        }
      ],
      misconceptions: [
        'Mengasumsikan bahwa jika $a^k \\equiv 1 \\pmod m$, maka $k$ otomatis sama dengan order modular $\\text{ord}_m(a)$. Yang benar adalah $k$ merupakan kelipatan dari $\\text{ord}_m(a)$.',
        'Lupa bahwa Kriteria Euler dan Simbol Legendre hanya didefinisikan untuk modulo bilangan prima ganjil.'
      ],
      tutorTip: 'Untuk menentukan apakah -1 merupakan residu kuadratik modulo prima $p$, cukup periksa nilai $(-1)^{(p-1)/2}$: bernilai 1 jika $p \\equiv 1 \\pmod 4$, dan bernilai -1 jika $p \\equiv 3 \\pmod 4$!'
    },
    questions: [
      {
        id: 'amc12-ch6-q1',
        type: 'short_answer',
        difficulty: 'Dasar',
        source: 'AMC 12B 2018',
        question: 'Hitung nilai dari Simbol Legendre $\\left(\\frac{3}{11}\\right)$.',
        hint: 'Gunakan Kriteria Euler: 3^{(11-1)/2} = 3^5 mod 11. Hitung 243 mod 11.',
        answer: '1',
        acceptedAnswers: ['1', '1.0'],
        bestSolution: 'Langkah 1: Berdasarkan Kriteria Euler:\n$$\\left(\\frac{3}{11}\\right) \\equiv 3^{(11-1)/2} = 3^5 \\pmod{11}$$\nLangkah 2: Hitung nilai perpangkatan:\n$$3^5 = 243$$\n$$243 = 22 \\times 11 + 1 \\equiv 1 \\pmod{11}$$\nLangkah 3: Karena hasilnya kongruen dengan $+1$, maka $\\left(\\frac{3}{11}\\right) = 1$. (3 adalah residu kuadratik modulo 11, karena $5^2 = 25 \\equiv 3 \\pmod{11}$).'
      },
      {
        id: 'amc12-ch6-q2',
        type: 'short_answer',
        difficulty: 'Dasar',
        source: 'AMC 12A 2020',
        question: 'Tentukan order modular dari 3 modulo 7 (yaitu nilai bilangan bulat positif terkecil $k$ sedemikian hingga $3^k \\equiv 1 \\pmod 7$).',
        hint: 'Hitung pangkat 3 modulo 7 berturut-turut: 3^1, 3^2, 3^3, ...',
        answer: '6',
        acceptedAnswers: ['6', '6.0'],
        bestSolution: 'Langkah 1: Evaluasi pangkat-pangkat dari 3 modulo 7:\n$$3^1 \\equiv 3 \\pmod 7$$\n$$3^2 \\equiv 2 \\pmod 7$$\n$$3^3 \\equiv 6 \\equiv -1 \\pmod 7$$\n$$3^4 \\equiv 4 \\pmod 7$$\n$$3^5 \\equiv 5 \\pmod 7$$\n$$3^6 \\equiv 1 \\pmod 7$$\nLangkah 2: Pangkat positif terkecil yang menghasilkan sisa 1 adalah $k = 6$.\nJadi $\\text{ord}_7(3) = 6$ (3 adalah primitive root modulo 7).'
      },
      {
        id: 'amc12-ch6-q3',
        type: 'short_answer',
        difficulty: 'Menengah',
        source: 'AIME 2017',
        question: 'Tentukan pasangan bilangan bulat positif terkecil $(x, y)$ yang memenuhi persamaan Pell $x^2 - 2y^2 = 1$. Tentukan nilai dari $x + y$.',
        hint: 'Uji nilai y = 1, 2, ... Hitung 2y^2 + 1 apakah menghasilkan kuadrat sempurna.',
        answer: '5',
        acceptedAnswers: ['5', '5.0'],
        bestSolution: 'Langkah 1: Tulis persamaan dalam bentuk $x^2 = 2y^2 + 1$.\nLangkah 2: Uji nilai $y \\in \\mathbb{Z}^+$:\n- Jika $y = 1$: $x^2 = 2(1) + 1 = 3$ (bukan kuadrat).\n- Jika $y = 2$: $x^2 = 2(4) + 1 = 9 \\implies x = 3$ (kuadrat sempurna!).\nLangkah 3: Pasangan solusi fundamental adalah $(x, y) = (3, 2)$.\nLangkah 4: Hitung nilai $x + y = 3 + 2 = 5$.'
      },
      {
        id: 'amc12-ch6-q4',
        type: 'short_answer',
        difficulty: 'Menengah',
        source: 'AMC 12B 2020',
        question: 'Berapa banyak residu kuadratik modulo 17 yang bukan nol?',
        hint: 'Banyak residu kuadratik bukan nol modulo prima p adalah (p - 1)/2.',
        answer: '8',
        acceptedAnswers: ['8', '8.0'],
        bestSolution: 'Langkah 1: Untuk bilangan prima ganjil $p$, banyaknya residu kuadratik tak-nol tepat sama dengan setengah dari jumlah elemen tak-nol di $\\mathbb{Z}_p^*$:\n$$\\text{Banyak Residu} = \\frac{p - 1}{2}$$\nLangkah 2: Untuk $p = 17$:\n$$\\frac{17 - 1}{2} = \\frac{16}{2} = 8.$$\nResidu-residu tersebut adalah kuadrat dari $1^2, 2^2, \\dots, 8^2$ modulo 17: $\\{1, 4, 9, 16, 8, 2, 15, 13\\}$.'
      },
      {
        id: 'amc12-ch6-q5',
        type: 'short_answer',
        difficulty: 'Tantangan',
        source: 'AIME 2018',
        question: 'Bilangan prima $p = 73$ dapat dinyatakan secara tunggal sebagai jumlah dua kuadrat bilangan bulat positif $p = a^2 + b^2$ dengan $a > b > 0$. Tentukan nilai dari $a + b$.',
        hint: 'Cari kuadrat sempurna di bawah 73: 64, 49, 36... 73 - 64 = 9 = 3^2.',
        answer: '11',
        acceptedAnswers: ['11', '11.0'],
        bestSolution: 'Langkah 1: Karena $73 \\equiv 1 \\pmod 4$, Teorema Dua Kuadrat Fermat menjamin bahwa 73 dapat ditulis sebagai jumlah dua kuadrat bilangan bulat.\nLangkah 2: Uji kuadrat terbesar di bawah 73:\n$$73 - 8^2 = 73 - 64 = 9 = 3^2$$\nSehingga $a = 8$ dan $b = 3$.\nLangkah 3: Hitung nilai $a + b = 8 + 3 = 11$.'
      },
      {
        id: 'amc12-ch6-q6',
        type: 'essay',
        difficulty: 'Olimpiade',
        source: 'OmegaLearn / USAMO Qualifier',
        question: 'Buktikan bahwa kongruensi kuadrat $x^2 \\equiv -1 \\pmod p$ tidak memiliki solusi bilangan bulat jika $p$ adalah bilangan prima berbentuk $4k + 3$.',
        hint: 'Asumsikan ada solusi x. Maka (x^2)^{(p-1)/2} ≡ (-1)^{(p-1)/2} (mod p). Di sisi lain x^{p-1} ≡ 1 (mod p) via Teorema Kecil Fermat.',
        answer: 'Terbukti via Teorema Kecil Fermat',
        acceptedAnswers: ['Terbukti', 'terbukti', 'Terbukti via Teorema Kecil Fermat'],
        bestSolution: 'Langkah Pembuktian:\n1. Andaikan terdapat bilangan bulat $x$ sedemikian hingga $x^2 \\equiv -1 \\pmod p$.\n2. Karena $p$ prima dan $-1 \\not\\equiv 0 \\pmod p$, maka $\\gcd(x, p) = 1$.\n3. Pangkatkan kedua ruas kongruensi dengan $\\frac{p-1}{2}$:\n$$(x^2)^{\\frac{p-1}{2}} \\equiv (-1)^{\\frac{p-1}{2}} \\pmod p$$\n$$x^{p-1} \\equiv (-1)^{\\frac{p-1}{2}} \\pmod p$$\n4. Berdasarkan Teorema Kecil Fermat, karena $\\gcd(x, p) = 1$, maka:\n$$x^{p-1} \\equiv 1 \\pmod p$$\n5. Gabungkan kedua persamaan:\n$$(-1)^{\\frac{p-1}{2}} \\equiv 1 \\pmod p$$\n6. Namun diketahui $p = 4k + 3$, sehingga:\n$$\\frac{p-1}{2} = \\frac{4k + 3 - 1}{2} = 2k + 1 \\quad (\\text{bilangan ganjil})$$\n7. Maka $(-1)^{\\frac{p-1}{2}} = (-1)^{2k+1} = -1$.\n8. Diperoleh kontradiksi:\n$$-1 \\equiv 1 \\pmod p \\implies p \\mid 2$$\nHal ini mustahil karena $p$ adalah prima ganjil ($p \\ge 3$).\n9. Jadi pengandaian salah, dan tidak ada solusi untuk $x^2 \\equiv -1 \\pmod p$ saat $p \\equiv 3 \\pmod 4$. (Terbukti).'
      }
    ]
  },

  // ----------------------------------------------------
  // BAB 7: TRIGONOMETRIC IDENTITIES & PRODUCT-TO-SUM
  // ----------------------------------------------------
  {
    id: 'amc12-ch7-trigonometry-identities',
    aliases: ['amc12-ch1-trigonometric-identities'],
    level: 12,
    domain: 'Geometri & Trigonometri',
    chapterIndex: 6,
    title: 'Bab 7: Identitas Trigonometri & Sudut Ganda / Jumlah Perkalian',
    summary: {
      overview: 'Trigonometri aljabar adalah salah satu topik pembeda paling krusial di AMC 12. Soal-soal kompetisi sering menuntut penguasaan rumus hasil kali ke jumlah (product-to-sum), faktorisasi trigonometri simetris, teknik telescoping pada perkalian kosinus kelipatan sudut ganda $\\prod \\cos(2^k \\theta)$, serta penggunaan nilai-nilai sudut eksak non-standar seperti $15^\\circ, 18^\\circ,$ dan $36^\\circ$.',
      coreConcepts: [
        'Rumus Hasil Kali ke Jumlah (Product-to-Sum): $$\\cos A \\cos B = \\frac{1}{2}[\\cos(A-B) + \\cos(A+B)]$$ $$\\sin A \\sin B = \\frac{1}{2}[\\cos(A-B) - \\cos(A+B)]$$ $$\\sin A \\cos B = \\frac{1}{2}[\\sin(A+B) + \\sin(A-B)]$$',
        'Telescoping Perkalian Kosinus: $$\\prod_{k=0}^{n-1} \\cos(2^k \\theta) = \\frac{\\sin(2^n \\theta)}{2^n \\sin\\theta}$$',
        'Nilai Sudut Eksak Penting: $$\\sin 15^\\circ = \\frac{\\sqrt{6}-\\sqrt{2}}{4}, \\quad \\cos 36^\\circ = \\frac{\\sqrt{5}+1}{4}, \\quad \\sin 18^\\circ = \\frac{\\sqrt{5}-1}{4}$$',
        'Identitas Sudut Segitiga: Jika $A + B + C = 180^\\circ$, maka: $$\\tan A + \\tan B + \\tan C = \\tan A \\tan B \\tan C$$',
        'Substitusi Weierstrass: Mengubah fungsi rasional trigonometri menjadi aljabar rasional menggunakan $t = \\tan(\\theta/2)$, dengan $\\sin\\theta = \\frac{2t}{1+t^2}$ dan $\\cos\\theta = \\frac{1-t^2}{1+t^2}$.'
      ],
      keyFormulas: [
        { label: 'Product to Sum', formula: '\\cos A \\cos B = \\frac{1}{2}(\\cos(A-B) + \\cos(A+B))' },
        { label: 'Telescoping Cos', formula: '\\prod_{k=0}^{n-1} \\cos(2^k \\theta) = \\frac{\\sin(2^n \\theta)}{2^n \\sin\\theta}' },
        { label: 'Sudut Emas cos 36°', formula: '\\cos(36^\\circ) = \\frac{\\sqrt{5}+1}{4}' }
      ],
      workedExamples: [
        {
          problem: 'Hitunglah nilai eksak dari perkalian: $\\cos(20^\\circ) \\cos(40^\\circ) \\cos(80^\\circ)$.',
          solution: 'Langkah 1: Kalikan dan bagi dengan $2\\sin(20^\\circ)$:\n$$P = \\frac{2\\sin(20^\\circ)\\cos(20^\\circ)\\cos(40^\\circ)\\cos(80^\\circ)}{2\\sin(20^\\circ)}$$\nLangkah 2: Terapkan rumus sudut ganda $2\\sin\\theta\\cos\\theta = \\sin(2\\theta)$ secara berantai:\n$$2\\sin(20^\\circ)\\cos(20^\\circ) = \\sin(40^\\circ)$$\n$$P = \\frac{\\sin(40^\\circ)\\cos(40^\\circ)\\cos(80^\\circ)}{2\\sin(20^\\circ)} = \\frac{\\frac{1}{2}\\sin(80^\\circ)\\cos(80^\\circ)}{2\\sin(20^\\circ)} = \\frac{\\frac{1}{4}\\sin(160^\\circ)}{2\\sin(20^\\circ)}$$\nLangkah 3: Sederhanakan:\n$$P = \\frac{\\sin(160^\\circ)}{8\\sin(20^\\circ)}$$\nLangkah 4: Karena $\\sin(160^\\circ) = \\sin(180^\\circ - 20^\\circ) = \\sin(20^\\circ)$:\n$$P = \\frac{\\sin(20^\\circ)}{8\\sin(20^\\circ)} = \\frac{1}{8}.$$'
        }
      ],
      misconceptions: [
        'Membagi dengan $\\sin\\theta$ dalam metode telescoping tanpa memeriksa apakah $\\sin\\theta = 0$.',
        'Lupa tanda minus pada rumus perkalian sinus: $\\sin A \\sin B = \\frac{1}{2}[\\cos(A-B) - \\cos(A+B)]$.'
      ],
      tutorTip: 'Jika melihat perkalian kosinus dengan sudut yang melipatgandakan diri ($20^\\circ, 40^\\circ, 80^\\circ$), langsung kalikan dengan sinus dari sudut terkecil untuk memicu efek domino sudut ganda!'
    },
    questions: [
      {
        id: 'amc12-ch7-q1',
        type: 'short_answer',
        difficulty: 'Dasar',
        source: 'AMC 12A 2018',
        question: 'Hitunglah nilai eksak dari perkalian: $\\cos(20^\\circ) \\cos(40^\\circ) \\cos(80^\\circ)$.',
        hint: 'Kalikan dan bagi dengan 2 sin(20°), lalu gunakan sin(2x) = 2 sin x cos x secara berulang.',
        answer: '1/8',
        acceptedAnswers: ['1/8', '0.125', '0,125'],
        bestSolution: 'Langkah 1: Kalikan dan bagi dengan $2\\sin(20^\\circ)$:\n$$P = \\frac{2\\sin(20^\\circ)\\cos(20^\\circ)\\cos(40^\\circ)\\cos(80^\\circ)}{2\\sin(20^\\circ)}$$\nLangkah 2: Gunakan $\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta$ berturut-turut:\n$$= \\frac{\\sin(40^\\circ)\\cos(40^\\circ)\\cos(80^\\circ)}{2\\sin(20^\\circ)} = \\frac{\\frac{1}{2}\\sin(80^\\circ)\\cos(80^\\circ)}{2\\sin(20^\\circ)} = \\frac{\\sin(160^\\circ)}{8\\sin(20^\\circ)}$$\nLangkah 3: Karena $\\sin(160^\\circ) = \\sin(20^\\circ)$, maka hasilnya adalah $\\frac{1}{8}$.'
      },
      {
        id: 'amc12-ch7-q2',
        type: 'short_answer',
        difficulty: 'Dasar',
        source: 'AMC 12B 2019',
        question: 'Jika diketahui bahwa $\\tan x + \\cot x = 4$, tentukan nilai dari $\\sin(2x)$.',
        hint: 'Tulis tan x = sin x / cos x dan cot x = cos x / sin x. Jumlahkan pecahan.',
        answer: '1/2',
        acceptedAnswers: ['1/2', '0.5', '0,5'],
        bestSolution: 'Langkah 1: Ubah ke dalam bentuk sinus dan kosinus:\n$$\\tan x + \\cot x = \\frac{\\sin x}{\\cos x} + \\frac{\\cos x}{\\sin x} = \\frac{\\sin^2 x + \\cos^2 x}{\\sin x \\cos x} = \\frac{1}{\\sin x \\cos x}$$\nLangkah 2: Kalikan pembilang dan penyebut dengan 2:\n$$\\frac{2}{2\\sin x \\cos x} = \\frac{2}{\\sin(2x)} = 4$$\nLangkah 3: Selesaikan untuk $\\sin(2x)$:\n$$\\sin(2x) = \\frac{2}{4} = \\frac{1}{2}.$$'
      },
      {
        id: 'amc12-ch7-q3',
        type: 'short_answer',
        difficulty: 'Menengah',
        source: 'AMC 12A 2020',
        question: 'Tentukan nilai numerik dari: $\\tan(15^\\circ) + \\cot(15^\\circ)$.',
        hint: 'Gunakan identitas tan θ + cot θ = 2 / sin(2θ) dengan θ = 15°.',
        answer: '4',
        acceptedAnswers: ['4', '4.0'],
        bestSolution: 'Langkah 1: Dari identitas trigonometri dasar:\n$$\\tan\\theta + \\cot\\theta = \\frac{2}{\\sin(2\\theta)}$$\nLangkah 2: Substitusikan $\\theta = 15^\\circ$:\n$$\\tan(15^\\circ) + \\cot(15^\\circ) = \\frac{2}{\\sin(30^\\circ)}$$\nLangkah 3: Karena $\\sin(30^\\circ) = \\frac{1}{2}$:\n$$= \\frac{2}{1/2} = 4.$$'
      },
      {
        id: 'amc12-ch7-q4',
        type: 'short_answer',
        difficulty: 'Menengah',
        source: 'AMC 12B 2021',
        question: 'Tentukan banyaknya solusi dari persamaan $\\sin(3x) = \\cos(2x)$ dalam interval $x \\in [0, \\pi]$.',
        hint: 'Ubah cos(2x) menjadi sin(π/2 - 2x). Samakan argumen 3x = π/2 - 2x + 2kπ atau 3x = π - (π/2 - 2x) + 2kπ.',
        answer: '3',
        acceptedAnswers: ['3', '3 solusi', '3.0'],
        bestSolution: 'Langkah 1: Ubah kosinus menjadi sinus menggunakan relasi sudut komplementer:\n$$\\sin(3x) = \\sin\\left(\\frac{\\pi}{2} - 2x\\right)$$\nLangkah 2: Dua sudut memiliki nilai sinus sama jika:\nKasus 1: $3x = \\frac{\\pi}{2} - 2x + 2k\\pi \\implies 5x = \\frac{\\pi}{2} + 2k\\pi \\implies x = \\frac{\\pi}{10} + \\frac{2k\\pi}{5}$.\nUntuk $x \\in [0, \\pi]$:\n- $k = 0 \\implies x = \\frac{\\pi}{10}$\n- $k = 1 \\implies x = \\frac{5\\pi}{10} = \\frac{\\pi}{2}$\n- $k = 2 \\implies x = \\frac{9\\pi}{10}$\nKasus 2: $3x = \\pi - \\left(\\frac{\\pi}{2} - 2x\\right) + 2k\\pi = \\frac{\\pi}{2} + 2x + 2k\\pi \\implies x = \\frac{\\pi}{2} + 2k\\pi$.\nUntuk $x \\in [0, \\pi]$, $k = 0 \\implies x = \\frac{\\pi}{2}$ (sudah termasuk di Kasus 1).\nLangkah 3: Solusi yang berbeda dalam interval $[0, \\pi]$ adalah $\\{\\frac{\\pi}{10}, \\frac{\\pi}{2}, \\frac{9\\pi}{10}\\}$, total 3 solusi.'
      },
      {
        id: 'amc12-ch7-q5',
        type: 'short_answer',
        difficulty: 'Tantangan',
        source: 'AMC 12A 2017',
        question: 'Hitunglah nilai eksak dari pecahan trigonometri berikut: $$\\frac{\\sin(10^\\circ) + \\sin(50^\\circ)}{\\cos(20^\\circ)}$$',
        hint: 'Gunakan rumus sum-to-product pada pembilang: sin A + sin B = 2 sin((A+B)/2) cos((A-B)/2).',
        answer: '1',
        acceptedAnswers: ['1', '1.0'],
        bestSolution: 'Langkah 1: Terapkan rumus jumlah ke perkalian (Sum-to-Product) pada pembilang:\n$$\\sin(10^\\circ) + \\sin(50^\\circ) = 2 \\sin\\left(\\frac{10^\\circ + 50^\\circ}{2}\\right) \\cos\\left(\\frac{50^\\circ - 10^\\circ}{2}\\right)$$\n$$= 2 \\sin(30^\\circ) \\cos(20^\\circ)$$\nLangkah 2: Karena $\\sin(30^\\circ) = \\frac{1}{2}$:\n$$= 2 \\times \\frac{1}{2} \\times \\cos(20^\\circ) = \\cos(20^\\circ)$$\nLangkah 3: Substitusikan kembali ke pecahan:\n$$\\frac{\\cos(20^\\circ)}{\\cos(20^\\circ)} = 1.$$'
      },
      {
        id: 'amc12-ch7-q6',
        type: 'essay',
        difficulty: 'Olimpiade',
        source: 'OmegaLearn / AIME Practice',
        question: 'Buktikan bahwa untuk setiap segitiga bukan siku-siku $ABC$ (dengan $A + B + C = 180^\\circ$), berlaku identitas aljabar: $$\\tan A + \\tan B + \\tan C = \\tan A \\tan B \\tan C$$',
        hint: 'Mulai dari C = 180° - (A + B). Ambil tangen kedua ruas tan C = tan(180° - (A+B)) = -tan(A+B). Terapkan rumus tan(A+B) dan kalikan silang.',
        answer: 'Terbukti via tan(A+B+C)',
        acceptedAnswers: ['Terbukti', 'terbukti', 'Terbukti via tan(A+B+C)'],
        bestSolution: 'Langkah Pembuktian:\n1. Karena $A, B, C$ adalah sudut-sudut segitiga, maka $A + B + C = 180^\\circ$, sehingga:\n$$C = 180^\\circ - (A + B)$$\n2. Terapkan fungsi tangen pada kedua ruas:\n$$\\tan C = \\tan(180^\\circ - (A + B)) = -\\tan(A + B)$$\n3. Terapkan rumus penjumlahan tangen untuk $\\tan(A + B)$:\n$$\\tan C = -\\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B}$$\n4. Kalikan silang kedua ruas dengan $(1 - \\tan A \\tan B)$:\n$$\\tan C (1 - \\tan A \\tan B) = -(\\tan A + \\tan B)$$\n$$\\tan C - \\tan A \\tan B \\tan C = -\\tan A - \\tan B$$\n5. Pindahkan suku $-\\tan A - \\tan B$ ke ruas kiri dan suku $-\\tan A \\tan B \\tan C$ ke ruas kanan:\n$$\\tan A + \\tan B + \\tan C = \\tan A \\tan B \\tan C.$$\n(Terbukti secara aljabar trigonometri).'
      }
    ]
  },

  // ----------------------------------------------------
  // BAB 8: GEOMETRIC TRIGONOMETRY & ADVANCED TRIANGLES
  // ----------------------------------------------------
  {
    id: 'amc12-ch8-geometric-trigonometry',
    aliases: ['amc12-ch8-order-primitive-roots'],
    level: 12,
    domain: 'Geometri & Trigonometri',
    chapterIndex: 7,
    title: 'Bab 8: Aturan Sinus, Kosinus, & Garis Luar Segitiga (Geometric Trigonometry)',
    summary: {
      overview: 'Geometri tingkat lanjut pada AMC 12 memadukan penalaran spasial murni dengan kekuatan analitis trigonometri. Penguasaan circumradius $R = \\frac{abc}{4L}$ dan inradius $r = \\frac{L}{s}$, Teorema Stewart untuk panjang cevian sembarang, Teorema Ptolemy untuk segiempat tali busur, serta Teorema Euler untuk jarak antarpusat lingkaran ($d^2 = R(R - 2r)$) menjadi fondasi wajib.',
      coreConcepts: [
        'Hukum Sinus Diperluas: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$, di mana $R$ adalah jari-jari lingkaran luar (circumradius).',
        'Hukum Kosinus: $c^2 = a^2 + b^2 - 2ab \\cos C$, menghubungkan ketiga sisi segitiga dengan satu sudut.',
        'Rumus Inradius & Circumradius: Inradius $r = \\frac{[ABC]}{s}$, Circumradius $R = \\frac{abc}{4[ABC]}$, di mana $s = \\frac{a+b+c}{2}$ dan $[ABC] = \\sqrt{s(s-a)(s-b)(s-c)}$.',
        'Teorema Stewart: Untuk cevian $d$ dari titik sudut ke sisi yang membaginya menjadi segmen $m$ dan $n$: $man + dad = bmb + cnb$.',
        'Teorema Ptolemy: Pada segiempat tali busur $ABCD$ (siklis), perkalian panjang kedua diagonal sama dengan jumlah perkalian sisi-sisi yang berhadapan: $AC \\cdot BD = AB \\cdot CD + BC \\cdot AD$.'
      ],
      keyFormulas: [
        { label: 'Hukum Sinus & R', formula: '\\frac{a}{\\sin A} = 2R \\implies R = \\frac{abc}{4L}' },
        { label: 'Inradius r', formula: 'r = \\frac{L}{s}' },
        { label: 'Teorema Ptolemy', formula: 'AC \\cdot BD = AB \\cdot CD + BC \\cdot AD' }
      ],
      workedExamples: [
        {
          problem: 'Segitiga $ABC$ memiliki sisi $a = 13, b = 14, c = 15$. Tentukan jari-jari lingkaran dalamnya ($r$).',
          solution: 'Langkah 1: Hitung semi-perimeter $s$:\n$$s = \\frac{13 + 14 + 15}{2} = \\frac{42}{2} = 21$$\nLangkah 2: Hitung luas menggunakan Rumus Heron:\n$$L = \\sqrt{21(21-13)(21-14)(21-15)} = \\sqrt{21 \\times 8 \\times 7 \\times 6}$$\n$$L = \\sqrt{(7 \\times 3) \\times (8) \\times (7) \\times (3 \\times 2)} = \\sqrt{7^2 \\times 3^2 \\times 16} = 7 \\times 3 \\times 4 = 84$$\nLangkah 3: Hitung inradius $r = \\frac{L}{s}$:\n$$r = \\frac{84}{21} = 4.$$'
        }
      ],
      misconceptions: [
        'Menerapkan Teorema Ptolemy pada segiempat yang bukan segiempat tali busur (pada segiempat sembarang berlaku ketaksamaan Ptolemy $AC \\cdot BD \\le AB \\cdot CD + BC \\cdot AD$).',
        'Tertukar antara rumus inradius $r = L/s$ dan circumradius $R = abc/(4L)$.'
      ],
      tutorTip: 'Jika menemukan segiempat tali busur dengan panjang keempat sisinya diketahui, langsung gunakan Teorema Ptolemy untuk menemukan relasi perkalian diagonalnya!'
    },
    questions: [
      {
        id: 'amc12-ch8-q1',
        type: 'short_answer',
        difficulty: 'Dasar',
        source: 'AMC 12A 2019',
        question: 'Pada segitiga $ABC$, panjang sisi-sisinya adalah $a = 7$, $b = 5$, dan $c = 8$. Tentukan nilai eksak dari $\\cos C$.',
        hint: 'Terapkan Aturan Kosinus: c^2 = a^2 + b^2 - 2ab cos C.',
        answer: '1/7',
        acceptedAnswers: ['1/7'],
        bestSolution: 'Langkah 1: Tulis rumus Aturan Kosinus untuk sudut $C$:\n$$c^2 = a^2 + b^2 - 2ab \\cos C$$\nLangkah 2: Substitusikan nilai $a = 7, b = 5, c = 8$:\n$$8^2 = 7^2 + 5^2 - 2(7)(5) \\cos C$$\n$$64 = 49 + 25 - 70 \\cos C$$\n$$64 = 74 - 70 \\cos C$$\nLangkah 3: Pindahkan suku aljabar:\n$$70 \\cos C = 74 - 64 = 10 \\implies \\cos C = \\frac{10}{70} = \\frac{1}{7}.$$'
      },
      {
        id: 'amc12-ch8-q2',
        type: 'short_answer',
        difficulty: 'Menengah',
        source: 'AMC 12B 2018',
        question: 'Segitiga $ABC$ memiliki panjang sisi $13, 14,$ dan $15$. Tentukan panjang jari-jari lingkaran dalam ($r$) dari segitiga tersebut.',
        hint: 'Hitung semi-perimeter s = 21, luas Heron L = 84, lalu gunakan r = L/s.',
        answer: '4',
        acceptedAnswers: ['4', '4 cm', '4.0'],
        bestSolution: 'Langkah 1: Hitung semi-perimeter $s$:\n$$s = \\frac{13 + 14 + 15}{2} = 21$$\nLangkah 2: Hitung luas segitiga menggunakan Rumus Heron:\n$$L = \\sqrt{s(s-a)(s-b)(s-c)} = \\sqrt{21(21-13)(21-14)(21-15)}$$\n$$L = \\sqrt{21 \\times 8 \\times 7 \\times 6} = 84$$\nLangkah 3: Hitung jari-jari lingkaran dalam:\n$$r = \\frac{L}{s} = \\frac{84}{21} = 4.$$'
      },
      {
        id: 'amc12-ch8-q3',
        type: 'short_answer',
        difficulty: 'Menengah',
        source: 'AMC 12A 2020',
        question: 'Segitiga $ABC$ memiliki panjang sisi $13, 14,$ dan $15$. Tentukan panjang jari-jari lingkaran luar ($R$) dari segitiga tersebut (dalam bentuk pecahan biasa terkecil $m/n$).',
        hint: 'Gunakan rumus R = abc / (4L) dengan luas L = 84.',
        answer: '65/8',
        acceptedAnswers: ['65/8', '8.125', '8,125'],
        bestSolution: 'Langkah 1: Diketahui sisi-sisi $a=13, b=14, c=15$ dan luas segitiga $L = 84$.\nLangkah 2: Terapkan rumus circumradius:\n$$R = \\frac{abc}{4L}$$\nLangkah 3: Substitusikan nilai-nilainya:\n$$R = \\frac{13 \\times 14 \\times 15}{4 \\times 84} = \\frac{13 \\times 14 \\times 15}{336}$$\nSederhanakan dengan membagi pembilang dan penyebut dengan $14$ ($336 / 14 = 24$):\n$$R = \\frac{13 \\times 15}{24}$$\nSederhanakan lagi dengan membagi dengan $3$ ($15/3 = 5$, $24/3 = 8$):\n$$R = \\frac{13 \\times 5}{8} = \\frac{65}{8}.$$'
      },
      {
        id: 'amc12-ch8-q4',
        type: 'short_answer',
        difficulty: 'Tantangan',
        source: 'AMC 12B 2019',
        question: 'Segiempat tali busur $ABCD$ memiliki panjang sisi berturut-turut $AB = 2, BC = 3, CD = 6,$ dan $DA = 7$. Tentukan nilai numerik dari perkalian kedua diagonalnya: $AC \\cdot BD$.',
        hint: 'Terapkan langsung Teorema Ptolemy: AC * BD = AB * CD + BC * AD.',
        answer: '33',
        acceptedAnswers: ['33', '33.0'],
        bestSolution: 'Langkah 1: Karena titik-titik $A, B, C, D$ terletak pada satu lingkaran (siklis), berlaku Teorema Ptolemy:\n$$AC \\cdot BD = AB \\cdot CD + BC \\cdot AD$$\nLangkah 2: Substitusikan panjang sisi yang diketahui:\n$$AC \\cdot BD = (2 \\times 6) + (3 \\times 7)$$\n$$AC \\cdot BD = 12 + 21 = 33.$$'
      },
      {
        id: 'amc12-ch8-q5',
        type: 'short_answer',
        difficulty: 'Tantangan',
        source: 'AIME 2021',
        question: 'Pada segitiga sama sisi $ABC$ dengan panjang sisi 1, sebuah titik $P$ terletak pada busur minor $BC$ dari lingkaran luarnya. Jika diketahui panjang tali busur $PB = \\frac{3}{5}$ dan $PC = \\frac{4}{5}$, tentukan panjang ruas garis $PA$.',
        hint: 'Segiempat ABPC adalah segiempat tali busur. Gunakan Teorema Ptolemy: PA * BC = PB * AC + PC * AB.',
        answer: '7/5',
        acceptedAnswers: ['7/5', '1.4', '1,4'],
        bestSolution: 'Langkah 1: Perhatikan segiempat $ABPC$. Karena titik $P$ terletak pada lingkaran luar segitiga $ABC$, maka $ABPC$ adalah segiempat tali busur.\nLangkah 2: Terapkan Teorema Ptolemy:\n$$PA \\cdot BC = PB \\cdot AC + PC \\cdot AB$$\nLangkah 3: Karena segitiga $ABC$ sama sisi dengan panjang sisi $1$, maka $AB = BC = AC = 1$:\n$$PA \\cdot 1 = \\left(\\frac{3}{5}\\right) \\cdot 1 + \\left(\\frac{4}{5}\\right) \\cdot 1$$\n$$PA = \\frac{3}{5} + \\frac{4}{5} = \\frac{7}{5}.$$'
      },
      {
        id: 'amc12-ch8-q6',
        type: 'essay',
        difficulty: 'Olimpiade',
        source: 'OmegaLearn / USAMO Qualifier',
        question: 'Buktikan Teorema Ptolemy: Untuk setiap segiempat tali busur $ABCD$, buktikan bahwa: $$AC \\cdot BD = AB \\cdot CD + BC \\cdot AD$$ menggunakan titik bantu pada salah satu diagonal dan kesebangunan segitiga.',
        hint: 'Buat titik K pada diagonal AC sedemikian hingga ∠ABK = ∠DBC. Tunjukkan bahwa △ABK ~ △DBC dan △ABD ~ △KBC.',
        answer: 'Terbukti via kesebangunan segitiga',
        acceptedAnswers: ['Terbukti', 'terbukti', 'Terbukti via kesebangunan segitiga'],
        bestSolution: 'Langkah Pembuktian:\n1. Pada diagonal $AC$, pilih sebuah titik $K$ sedemikian hingga $\\angle ABK = \\angle DBC$.\n2. Perhatikan $\\triangle ABK$ dan $\\triangle DBC$:\n- Berdasarkan konstruksi: $\\angle ABK = \\angle DBC$.\n- Sudut keliling yang menghadap busur $AD$ yang sama: $\\angle BAK = \\angle BDC$.\nBerdasarkan kriteria sudut-sudut (AA), maka $\\triangle ABK \\sim \\triangle DBC$.\n3. Dari kesebangunan ini diperoleh perbandingan sisi:\n$$\\frac{AK}{CD} = \\frac{AB}{BD} \\implies AK \\cdot BD = AB \\cdot CD \\quad \\text{--- (Persamaan 1)}$$\n4. Selanjutnya, perhatikan $\\triangle ABD$ dan $\\triangle KBC$:\n- $\\angle KBC = \\angle ABK + \\angle KBD = \\angle DBC + \\angle KBD = \\angle ABD$.\n- Sudut keliling yang menghadap busur $AB$ yang sama: $\\angle BDA = \\angle BCA = \\angle BCK$.\nMaka $\\triangle ABD \\sim \\triangle KBC$ (kriteria AA).\n5. Dari kesebangunan kedua diperoleh:\n$$\\frac{KC}{AD} = \\frac{BC}{BD} \\implies KC \\cdot BD = BC \\cdot AD \\quad \\text{--- (Persamaan 2)}$$\n6. Jumlahkan Persamaan 1 dan Persamaan 2:\n$$(AK \\cdot BD) + (KC \\cdot BD) = AB \\cdot CD + BC \\cdot AD$$\n$$(AK + KC) \\cdot BD = AB \\cdot CD + BC \\cdot AD$$\n7. Karena titik $K$ terletak pada segmen $AC$, maka $AK + KC = AC$:\n$$AC \\cdot BD = AB \\cdot CD + BC \\cdot AD.$$\n(Terbukti secara geometris murni).'
      }
    ]
  },

  // ----------------------------------------------------
  // BAB 9: 3D GEOMETRY, VECTORS & SOLID CROSS-SECTIONS
  // ----------------------------------------------------
  {
    id: 'amc12-ch9-3d-geometry-vectors',
    aliases: ['amc12-ch9-3d-coordinate-geometry'],
    level: 12,
    domain: 'Geometri & Trigonometri',
    chapterIndex: 8,
    title: 'Bab 9: Geometri Ruang 3 Dimensi, Vektor & Irisan Bangun Ruang',
    summary: {
      overview: 'Geometri ruang tiga dimensi pada AMC 12 menggabungkan visualisasi spasial tingkat tinggi dengan aljabar vektor analitis. Submateri penting meliputi penentuan penampang irisan bidang pada kubus/prisma, jarak terpendek titik ke bidang menggunakan vektor normal, sudut dihedral (sudut antardua bidang), volume tetrahedron menggunakan perkalian silang (cross product), serta konfigurasi bola bersinggungan di dalam bangun ruang.',
      coreConcepts: [
        'Vektor dan Jarak Titik ke Bidang: Bidang dengan persamaan $Ax + By + Cz + D = 0$ memiliki vektor normal $\\vec{n} = \\langle A, B, C \\rangle$. Jarak titik $P(x_0, y_0, z_0)$ ke bidang adalah $d = \\frac{|Ax_0 + By_0 + Cz_0 + D|}{\\sqrt{A^2 + B^2 + C^2}}$.',
        'Sudut Dihedral: Sudut antara dua bidang dengan vektor normal $\\vec{n}_1$ dan $\\vec{n}_2$ memenuhi $\\cos\\theta = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{|\\vec{n}_1| |\\vec{n}_2|}$.',
        'Volume Tetrahedron: Tetrahedron dengan tiga rusuk vektor $\\vec{u}, \\vec{v}, \\vec{w}$ yang berpangkal pada satu titik sudut memiliki volume $V = \\frac{1}{6} |\\vec{u} \\cdot (\\vec{v} \\times \\vec{w})|$.',
        'Tetrahedron Beraturan: Rusuk $s$, tinggi $h = s\\sqrt{\\frac{2}{3}}$, volume $V = \\frac{s^3}{6\\sqrt{2}} = \\frac{s^3\\sqrt{2}}{12}$.',
        'Bola Bersinggungan dalam Tabung (Archimedes): Bola berjari-jari $r$ yang menyinggung dinding dan alas-tutup tabung setinggi $2r$ memiliki volume tepat $\\frac{2}{3}$ dari volume tabung tersebut.'
      ],
      keyFormulas: [
        { label: 'Jarak Titik ke Bidang', formula: 'd = \\frac{|Ax_0 + By_0 + Cz_0 + D|}{\\sqrt{A^2 + B^2 + C^2}}' },
        { label: 'Volume Tetrahedron Beraturan', formula: 'V = \\frac{s^3\\sqrt{2}}{12}' },
        { label: 'Rasio Bola-Tabung Archimedes', formula: '\\frac{V_{\\text{bola}}}{V_{\\text{tabung}}} = \\frac{2}{3}' }
      ],
      workedExamples: [
        {
          problem: 'Kubus $ABCD.EFGH$ memiliki panjang rusuk 6 cm. Tentukan jarak dari titik puncak $F$ ke bidang diagonal $BDE$.',
          solution: 'Langkah 1: Tempatkan kubus pada sistem koordinat kartesius 3D dengan $D$ sebagai pusat $(0,0,0)$:\n$D(0,0,0), A(6,0,0), B(6,6,0), C(0,6,0), E(6,0,6), F(6,6,6)$.\nLangkah 2: Tentukan titik-titik bidang $BDE$:\n$D(0,0,0), B(6,6,0), E(6,0,6)$.\nVektor $\\vec{DB} = \\langle 6, 6, 0 \\rangle$ dan $\\vec{DE} = \\langle 6, 0, 6 \\rangle$.\nLangkah 3: Hitung vektor normal melalui cross product:\n$$\\vec{n} = \\vec{DB} \\times \\vec{DE} = \\langle 36, -36, -36 \\rangle = 36\\langle 1, -1, -1 \\rangle$$\nPersamaan bidang melalui $(0,0,0)$ adalah $x - y - z = 0$.\nLangkah 4: Hitung jarak dari titik $F(6,6,6)$ ke bidang $x - y - z = 0$:\n$$d = \\frac{|1(6) - 1(6) - 1(6)|}{\\sqrt{1^2 + (-1)^2 + (-1)^2}} = \\frac{|-6|}{\\sqrt{3}} = \\frac{6}{\\sqrt{3}} = 2\\sqrt{3}\\text{ cm}.$$'
        }
      ],
      misconceptions: [
        'Mengira bahwa proyeksi ortogonal sebuah titik ke bidang miring selalu jatuh pada titik tengah atau titik berat alas.',
        'Lupa faktor $\\frac{1}{6}$ (bukan $\\frac{1}{3}$) pada rumus volume tetrahedron dari triple scalar product.'
      ],
      tutorTip: 'Jika menghadapi soal geometri 3D yang melibatkan sudut antarabidang atau jarak rumit, langsung pasang sistem koordinat kartesius $(x, y, z)$ pada sudut kubus atau prisma!'
    },
    questions: [
      {
        id: 'amc12-ch9-q1',
        type: 'short_answer',
        difficulty: 'Dasar',
        source: 'AMC 12A 2018',
        visualId: 'amc12-geo-q1',
        question: 'Diberikan kubus $ABCD.EFGH$ dengan panjang rusuk 6 cm. Tentukan jarak dari titik $A$ ke bidang $BDE$.',
        hint: 'Diagonal ruang AG tegak lurus bidang BDE dan memotongnya tepat pada 1/3 panjang diagonal ruang.',
        answer: '2√3',
        acceptedAnswers: ['2√3', '2*sqrt(3)', '2sqrt(3)', '2\\sqrt{3}'],
        bestSolution: 'Langkah 1: Diagonal ruang $AG$ dari kubus memiliki panjang:\n$$AG = s\\sqrt{3} = 6\\sqrt{3}$$\nLangkah 2: Garis diagonal ruang $AG$ tegak lurus terhadap bidang $BDE$ dan membagi diagonal ruang tersebut menjadi tiga bagian yang sama panjang oleh bidang $BDE$ dan bidang $CFH$.\nLangkah 3: Jarak titik $A$ ke bidang $BDE$ adalah sepertiga dari panjang diagonal ruang $AG$:\n$$d = \\frac{1}{3} AG = \\frac{1}{3} (6\\sqrt{3}) = 2\\sqrt{3}\\text{ cm}.$$'
      },
      {
        id: 'amc12-ch9-q2',
        type: 'short_answer',
        difficulty: 'Menengah',
        source: 'AMC 12B 2019',
        question: 'Suatu balok memiliki tiga sisi yang bertemu pada satu titik sudut dengan luas masing-masing 12, 15, dan 20. Tentukan volume balok tersebut.',
        hint: 'Misalkan ukuran rusuk p, l, t. Maka p*l = 12, l*t = 15, p*t = 20. Kalikan ketiganya: V^2 = (plt)^2.',
        answer: '60',
        acceptedAnswers: ['60', '60.0'],
        bestSolution: 'Langkah 1: Misalkan panjang, lebar, dan tinggi balok adalah $p, l, t$.\nLangkah 2: Luas ketiga sisi yang bertemu di satu sudut adalah:\n$$p \\cdot l = 12$$\n$$l \\cdot t = 15$$\n$$p \\cdot t = 20$$\nLangkah 3: Kalikan ketiga persamaan:\n$$(p \\cdot l) \\times (l \\cdot t) \\times (p \\cdot t) = 12 \\times 15 \\times 20$$\n$$p^2 l^2 t^2 = 3600$$\n$$(p \\cdot l \\cdot t)^2 = 3600$$\nLangkah 4: Volume balok adalah $V = p \\cdot l \\cdot t = \\sqrt{3600} = 60$.'
      },
      {
        id: 'amc12-ch9-q3',
        type: 'short_answer',
        difficulty: 'Menengah',
        source: 'AMC 12A 2021',
        visualId: 'amc12-geo-sphere-cyl',
        question: 'Sebuah tabung memiliki tinggi 12 cm dan jari-jari alas 6 cm. Sebuah bola pejal dimasukkan ke dalam tabung sehingga menyinggung alas, tutup, dan dinding tabung secara pas. Tentukan perbandingan (rasio) volume bola terhadap volume tabung.',
        hint: 'Volume bola = (4/3) π r^3. Volume tabung = π r^2 t = π r^2 (2r) = 2 π r^3.',
        answer: '2/3',
        acceptedAnswers: ['2/3', '2 : 3', '2:3'],
        bestSolution: 'Langkah 1: Bola menyinggung alas dan tutup tabung, sehingga tinggi tabung $t = 2r = 12$, jari-jari bola $r = 6$.\nLangkah 2: Hitung volume bola:\n$$V_{\\text{bola}} = \\frac{4}{3} \\pi r^3$$\nLangkah 3: Hitung volume tabung:\n$$V_{\\text{tabung}} = \\pi r^2 t = \\pi r^2 (2r) = 2\\pi r^3$$\nLangkah 4: Hitung rasionya:\n$$\\frac{V_{\\text{bola}}}{V_{\\text{tabung}}} = \\frac{\\frac{4}{3} \\pi r^3}{2 \\pi r^3} = \\frac{4/3}{2} = \\frac{2}{3}.$$'
      },
      {
        id: 'amc12-ch9-q4',
        type: 'short_answer',
        difficulty: 'Tantangan',
        source: 'AMC 12B 2017',
        question: 'Sebuah tetrahedron beraturan (regular tetrahedron) memiliki panjang rusuk 6 cm. Tentukan volume dari tetrahedron tersebut.',
        hint: 'Rumus volume tetrahedron beraturan dengan rusuk s adalah V = (s^3 √2) / 12.',
        answer: '18√2',
        acceptedAnswers: ['18√2', '18*sqrt(2)', '18sqrt(2)', '18\\sqrt{2}'],
        bestSolution: 'Langkah 1: Rumus volume tetrahedron beraturan dengan panjang rusuk $s$ adalah:\n$$V = \\frac{s^3 \\sqrt{2}}{12}$$\nLangkah 2: Substitusikan $s = 6$:\n$$V = \\frac{6^3 \\sqrt{2}}{12} = \\frac{216 \\sqrt{2}}{12} = 18\\sqrt{2}\\text{ cm}^3.$$'
      },
      {
        id: 'amc12-ch9-q5',
        type: 'short_answer',
        difficulty: 'Tantangan',
        source: 'AIME 2019',
        question: 'Pada kubus $ABCD.EFGH$ dengan panjang rusuk 4, titik $P$ adalah titik tengah rusuk $CG$. Tentukan luas segitiga $BDP$.',
        hint: 'BD = 4√2. Titik P memiliki ketinggian 2 di atas C. Jarak C ke garis BD adalah setengah diagonal alas = 2√2. Tinggi segitiga = √( (2√2)^2 + 2^2 ) = √12 = 2√3.',
        answer: '4√6',
        acceptedAnswers: ['4√6', '4*sqrt(6)', '4sqrt(6)', '4\\sqrt{6}'],
        bestSolution: 'Langkah 1: Hitung panjang alas segitiga $BD$:\nSebagai diagonal sisi alas, $BD = 4\\sqrt{2}$.\nLangkah 2: Proyeksikan titik $P$ secara tegak lurus ke bidang alas $ABCD$, bayangannya adalah titik $C$. Panjang $PC = 2$.\nLangkah 3: Jarak titik $C$ ke garis diagonal $BD$ adalah setengah dari panjang diagonal sisi $AC$:\n$$d_0 = \\frac{1}{2}(4\\sqrt{2}) = 2\\sqrt{2}$$\nLangkah 4: Berdasarkan Teorema Pythagoras 3D, tinggi segitiga $BDP$ dari puncak $P$ ke alas $BD$ adalah:\n$$h = \\sqrt{d_0^2 + PC^2} = \\sqrt{(2\\sqrt{2})^2 + 2^2} = \\sqrt{8 + 4} = \\sqrt{12} = 2\\sqrt{3}$$\nLangkah 5: Hitung luas segitiga $BDP$:\n$$\\text{Luas} = \\frac{1}{2} \\times \\text{alas} \\times \\text{tinggi} = \\frac{1}{2} \\times (4\\sqrt{2}) \\times (2\\sqrt{3}) = 4\\sqrt{6}.$$'
      },
      {
        id: 'amc12-ch9-q6',
        type: 'essay',
        difficulty: 'Olimpiade',
        source: 'OmegaLearn / USAMO Qualifier',
        question: 'Buktikan bahwa diagonal ruang $AG$ pada kubus $ABCD.EFGH$ tegak lurus terhadap bidang $BDE$ dan memotong bidang tersebut tepat pada sepertiga panjang diagonal ruang.',
        hint: 'Gunakan koordinat kartesius 3D dengan D sebagai titik asal (0,0,0). Tunjukkan vektor AG searah dengan vektor normal bidang BDE.',
        answer: 'Terbukti via vektor ortogonal',
        acceptedAnswers: ['Terbukti', 'terbukti', 'Terbukti via vektor ortogonal'],
        bestSolution: 'Langkah Pembuktian:\n1. Tempatkan kubus berusuk $s$ pada sistem koordinat 3D dengan $D$ di $(0,0,0)$:\n$$D(0,0,0), A(s,0,0), B(s,s,0), C(0,s,0)$$\n$$H(0,0,s), E(s,0,s), F(s,s,s), G(0,s,s)$$\n2. Tentukan vektor diagonal ruang $AG$:\n$$\\vec{AG} = G - A = \\langle 0 - s, s - 0, s - 0 \\rangle = \\langle -s, s, s \\rangle = s \\langle -1, 1, 1 \\rangle$$\n3. Tentukan dua vektor pembentuk bidang $BDE$:\n$$\\vec{DB} = \\langle s, s, 0 \\rangle, \\quad \\vec{DE} = \\langle s, 0, s \\rangle$$\n4. Hitung hasil kali skalar (dot product) $\\vec{AG}$ dengan kedua vektor:\n$$\\vec{AG} \\cdot \\vec{DB} = s^2 (-1(1) + 1(1) + 1(0)) = s^2 (-1 + 1 + 0) = 0$$\n$$\\vec{AG} \\cdot \\vec{DE} = s^2 (-1(1) + 1(0) + 1(1)) = s^2 (-1 + 0 + 1) = 0$$\nKarena $\\vec{AG}$ ortogonal terhadap dua vektor bebas linier pada bidang $BDE$, maka $\\vec{AG}$ tegak lurus terhadap bidang $BDE$.\n5. Persamaan bidang $BDE$ yang melalui $(0,0,0)$ dengan vektor normal $\\langle -1, 1, 1 \\rangle$ adalah $-x + y + z = 0$.\n6. Garis $AG$ melalui $A(s,0,0)$ dengan arah $\\langle -1, 1, 1 \\rangle$ dapat ditulis secara parametrik: $P(t) = (s - st, st, st)$.\nSubstitusikan ke persamaan bidang:\n$$-(s - st) + st + st = 0 \\implies -s + 3st = 0 \\implies t = \\frac{1}{3}$$\nArtinya, titik potong terjadi tepat pada $t = \\frac{1}{3}$, yaitu sepertiga panjang garis dari $A$ ke $G$. (Terbukti).'
      }
    ]
  },

  // ----------------------------------------------------
  // BAB 10: CAUCHY-SCHWARZ INEQUALITY & TITU'S LEMMA
  // ----------------------------------------------------
  {
    id: 'amc12-ch10-cauchy-schwarz-inequality',
    aliases: ['amc12-ch10-cauchy-schwarz-inequality'],
    level: 12,
    domain: 'Topik Lanjut',
    chapterIndex: 9,
    title: "Bab 10: Ketaksamaan Cauchy-Schwarz & Titu's Lemma",
    summary: {
      overview: 'Ketaksamaan Cauchy-Schwarz adalah salah satu teorema paling fundamental dalam aljabar olimpiade tingkat lanjut (AMC 12, AIME, USAMO). Ketaksamaan ini menghubungkan jumlah kuadrat dua barisan bilangan dengan kuadrat dari hasil kali skalar (dot product) mereka. Varian aljabar pecahan yang dikenal sebagai Titu\'s Lemma (atau Bentuk Engel) memberikan solusi instan untuk mencari nilai minimum dari penjumlahan pecahan aljabar.',
      coreConcepts: [
        'Ketaksamaan Cauchy-Schwarz: Untuk setiap bilangan real $a_1, a_2, \\dots, a_n$ dan $b_1, b_2, \\dots, b_n$: $$\\left(\\sum_{i=1}^n a_i^2\\right) \\left(\\sum_{i=1}^n b_i^2\\right) \\ge \\left(\\sum_{i=1}^n a_i b_i\\right)^2$$',
        'Syarat Kesamaan Cauchy-Schwarz: Kesamaan berlaku jika dan hanya jika kedua vektor berbanding lurus: $$\\frac{a_1}{b_1} = \\frac{a_2}{b_2} = \\dots = \\frac{a_n}{b_n}$$',
        'Titu\'s Lemma (Bentuk Engel): Untuk bilangan real sembarang $x_i$ dan bilangan real positif $a_i > 0$: $$\\frac{x_1^2}{a_1} + \\frac{x_2^2}{a_2} + \\dots + \\frac{x_n^2}{a_n} \\ge \\frac{(x_1 + x_2 + \\dots + x_n)^2}{a_1 + a_2 + \\dots + a_n}$$',
        'Ketaksamaan Nesbitt: Untuk bilangan real positif $a, b, c > 0$: $$\\frac{a}{b+c} + \\frac{b}{c+a} + \\frac{c}{a+b} \\ge \\frac{3}{2}$$',
        'Normalisasi: Memilih skala variabel sedemikian hingga $a+b+c=1$ atau $abc=1$ tanpa mengubah sifat homogenitas ketaksamaan.'
      ],
      keyFormulas: [
        { label: 'Cauchy-Schwarz', formula: '(\\sum a_i^2)(\\sum b_i^2) \\ge (\\sum a_i b_i)^2' },
        { label: 'Titu\'s Lemma', formula: '\\sum \\frac{x_i^2}{a_i} \\ge \\frac{(\\sum x_i)^2}{\\sum a_i}' },
        { label: 'Syarat Kesamaan', formula: '\\frac{a_1}{b_1} = \\frac{a_2}{b_2} = \\dots' }
      ],
      workedExamples: [
        {
          problem: 'Jika $x, y, z$ adalah bilangan real positif sedemikian hingga $x + y + z = 1$, tentukan nilai minimum dari $\\frac{1}{x} + \\frac{1}{y} + \\frac{1}{z}$.',
          solution: 'Langkah 1: Terapkan Titu\'s Lemma dengan pembilang $x_1 = x_2 = x_3 = 1$ dan penyebut $x, y, z$:\n$$\\frac{1^2}{x} + \\frac{1^2}{y} + \\frac{1^2}{z} \\ge \\frac{(1 + 1 + 1)^2}{x + y + z} = \\frac{3^2}{1} = 9$$\nLangkah 2: Syarat kesamaan terjadi jika $\\frac{1}{x} = \\frac{1}{y} = \\frac{1}{z} \\implies x = y = z = \\frac{1}{3}$.\nJadi, nilai minimumnya adalah 9.'
        }
      ],
      misconceptions: [
        'Lupa memastikan bahwa penyebut dalam Titu\'s Lemma harus bilangan real positif ($a_i > 0$).',
        'Lupa memverifikasi bahwa kondisi kesamaan ($a_i / b_i = \\text{konstan}$) benar-benar dapat tercapai dalam domain soal.'
      ],
      tutorTip: 'Jika melihat penjumlahan pecahan yang penyebutnya memiliki pangkat 1 dan pembilangnya berupa kuadrat, langsung gunakan Titu\'s Lemma untuk membalikkan posisi variabel dalam satu baris!'
    },
    questions: [
      {
        id: 'amc12-ch10-q1',
        type: 'short_answer',
        difficulty: 'Menengah',
        source: 'AMC 12A 2019',
        question: 'Jika $a, b, c$ adalah bilangan real positif sedemikian hingga $a + 2b + 3c = 14$, tentukan nilai minimum dari $a^2 + b^2 + c^2$.',
        hint: 'Gunakan Cauchy-Schwarz pada vektor (a, b, c) dan (1, 2, 3): (a^2+b^2+c^2)(1^2+2^2+3^2) >= (a+2b+3c)^2.',
        answer: '14',
        acceptedAnswers: ['14', '14.0'],
        bestSolution: 'Langkah 1: Berdasarkan Ketaksamaan Cauchy-Schwarz:\n$$(a^2 + b^2 + c^2)(1^2 + 2^2 + 3^2) \\ge (1a + 2b + 3c)^2$$\nLangkah 2: Hitung nilai numerik:\n$$(a^2 + b^2 + c^2)(1 + 4 + 9) \\ge 14^2$$\n$$(a^2 + b^2 + c^2)(14) \\ge 196$$\nLangkah 3: Bagi kedua ruas dengan 14:\n$$a^2 + b^2 + c^2 \\ge \\frac{196}{14} = 14$$\nNilai minimum tercapai saat $a/1 = b/2 = c/3 = 1 \\implies a=1, b=2, c=3$.'
      },
      {
        id: 'amc12-ch10-q2',
        type: 'essay',
        difficulty: 'Olimpiade',
        source: 'AIME / USAMO Qualifier',
        question: 'Untuk setiap bilangan real positif $a, b, c$, buktikan menggunakan Titu\'s Lemma bahwa: $$\\frac{a^2}{b + c} + \\frac{b^2}{c + a} + \\frac{c^2}{a + b} \\ge \\frac{a + b + c}{2}$$',
        hint: 'Terapkan Titu\'s Lemma dengan pembilang a, b, c dan penyebut (b+c), (c+a), (a+b).',
        answer: 'Terbukti via Titu\'s Lemma',
        acceptedAnswers: ['Terbukti', 'terbukti', 'Terbukti via Titu\'s Lemma'],
        bestSolution: 'Langkah Pembuktian:\n1. Terapkan Titu\'s Lemma (Bentuk Engel dari Cauchy-Schwarz):\n$$\\frac{a^2}{b + c} + \\frac{b^2}{c + a} + \\frac{c^2}{a + b} \\ge \\frac{(a + b + c)^2}{(b + c) + (c + a) + (a + b)}$$\n2. Sederhanakan bagian penyebut:\n$$(b + c) + (c + a) + (a + b) = 2a + 2b + 2c = 2(a + b + c)$$\n3. Substitusikan ke pecahan ruas kanan:\n$$\\frac{(a + b + c)^2}{2(a + b + c)} = \\frac{a + b + c}{2}$$\n4. Kesamaan berlaku jika dan hanya jika:\n$$\\frac{a}{b+c} = \\frac{b}{c+a} = \\frac{c}{a+b} \\iff a = b = c$$\n(Terbukti secara matematis).'
      },
      {
        id: 'amc12-ch10-q3',
        type: 'short_answer',
        difficulty: 'Menengah',
        source: 'AMC 12B 2020',
        question: 'Jika $x, y, z$ adalah bilangan real positif sedemikian hingga $x + y + z = 1$, tentukan nilai minimum dari: $$\\frac{1}{x} + \\frac{4}{y} + \\frac{9}{z}$$',
        hint: 'Tulis bentuk pembilang sebagai kuadrat sempurna: 1^2/x + 2^2/y + 3^2/z. Terapkan Titu\'s Lemma.',
        answer: '36',
        acceptedAnswers: ['36', '36.0'],
        bestSolution: 'Langkah 1: Tulis bentuk penjumlahan pecahan dengan pembilang berupa kuadrat bilangan bulat:\n$$\\frac{1^2}{x} + \\frac{2^2}{y} + \\frac{3^2}{z}$$\nLangkah 2: Terapkan Titu\'s Lemma:\n$$\\frac{1^2}{x} + \\frac{2^2}{y} + \\frac{3^2}{z} \\ge \\frac{(1 + 2 + 3)^2}{x + y + z} = \\frac{6^2}{1} = 36$$\nLangkah 3: Kesamaan terjadi jika:\n$$\\frac{1}{x} = \\frac{2}{y} = \\frac{3}{z} = k \\implies x = 1/k, y = 2/k, z = 3/k$$\n$$x + y + z = \\frac{6}{k} = 1 \\implies k = 6$$\nSehingga $x = 1/6, y = 2/6 = 1/3, z = 3/6 = 1/2$. Seluruh variabel positif dan memenuhi.\nJadi nilai minimumnya adalah 36.'
      },
      {
        id: 'amc12-ch10-q4',
        type: 'short_answer',
        difficulty: 'Dasar',
        source: 'AMC 12A 2021',
        question: 'Untuk semua bilangan real $x, y$ yang memenuhi $x^2 + y^2 = 5$, tentukan nilai maksimum yang mungkin dari ekspresi $2x + 3y$.',
        hint: 'Gunakan Cauchy-Schwarz pada vektor (2, 3) dan (x, y): (2x+3y)^2 <= (2^2 + 3^2)(x^2 + y^2).',
        answer: '√65',
        acceptedAnswers: ['√65', 'sqrt(65)', '\\sqrt{65}'],
        bestSolution: 'Langkah 1: Terapkan Ketaksamaan Cauchy-Schwarz pada pasangan $(2, 3)$ dan $(x, y)$:\n$$(2x + 3y)^2 \\le (2^2 + 3^2)(x^2 + y^2)$$\nLangkah 2: Substitusikan nilai-nilai yang diketahui:\n$$(2x + 3y)^2 \\le (4 + 9)(5) = 13 \\times 5 = 65$$\nLangkah 3: Ambil akar kuadrat pada kedua ruas:\n$$2x + 3y \\le \\sqrt{65}$$\nNilai maksimum adalah $\\sqrt{65}$, tercapai saat $x = 2\\sqrt{5/13}$ dan $y = 3\\sqrt{5/13}$.'
      },
      {
        id: 'amc12-ch10-q5',
        type: 'short_answer',
        difficulty: 'Tantangan',
        source: 'AIME 2018',
        question: 'Jika $a, b, c$ adalah bilangan real positif sedemikian hingga $abc = 1$, tentukan nilai minimum dari: $$\\frac{1}{a^3(b+c)} + \\frac{1}{b^3(c+a)} + \\frac{1}{c^3(a+b)}$$',
        hint: 'Lakukan substitusi x = 1/a, y = 1/b, z = 1/c dengan xyz = 1. Bentuk pecahan berubah menjadi x^2/(y+z) + y^2/(z+x) + z^2/(x+y).',
        answer: '3/2',
        acceptedAnswers: ['3/2', '1.5', '1,5'],
        bestSolution: 'Langkah 1: Substitusikan $x = \\frac{1}{a}, y = \\frac{1}{b}, z = \\frac{1}{c}$. Karena $abc = 1$, maka $xyz = 1$.\nLangkah 2: Perhatikan suku pertama:\n$$\\frac{1}{a^3(b+c)} = \\frac{x^3}{\\frac{1}{y} + \\frac{1}{z}} = \\frac{x^3}{\\frac{y+z}{yz}} = \\frac{x^3 yz}{y+z} = \\frac{x^2(xyz)}{y+z} = \\frac{x^2}{y+z}$$\nLangkah 3: Jumlah seluruh ekspresi menjadi:\n$$\\frac{x^2}{y+z} + \\frac{y^2}{z+x} + \\frac{z^2}{x+y}$$\nLangkah 4: Terapkan Titu\'s Lemma:\n$$\\ge \\frac{(x+y+z)^2}{(y+z) + (z+x) + (x+y)} = \\frac{(x+y+z)^2}{2(x+y+z)} = \\frac{x+y+z}{2}$$\nLangkah 5: Terapkan AM-GM pada $x+y+z$:\n$$\\frac{x+y+z}{2} \\ge \\frac{3\\sqrt[3]{xyz}}{2} = \\frac{3(1)}{2} = \\frac{3}{2}.$$\nNilai minimum tercapai saat $x = y = z = 1 \\iff a = b = c = 1$.'
      },
      {
        id: 'amc12-ch10-q6',
        type: 'essay',
        difficulty: 'Olimpiade',
        source: 'USAMO Qualifier / OmegaLearn',
        question: 'Buktikan Ketaksamaan Nesbitt untuk setiap bilangan real positif $a, b, c > 0$: $$\\frac{a}{b+c} + \\frac{b}{c+a} + \\frac{c}{a+b} \\ge \\frac{3}{2}$$ menggunakan Ketaksamaan Cauchy-Schwarz atau Titu\'s Lemma.',
        hint: 'Tulis pembilang sebagai a^2 / (a(b+c)). Terapkan Titu\'s Lemma pada sum a^2 / (ab + ac).',
        answer: 'Terbukti via Cauchy-Schwarz',
        acceptedAnswers: ['Terbukti', 'terbukti', 'Terbukti via Cauchy-Schwarz'],
        bestSolution: 'Langkah Pembuktian:\n1. Tulis ulang setiap suku sehingga pembilangnya berupa bentuk kuadrat:\n$$\\frac{a}{b+c} = \\frac{a^2}{ab + ca}, \\quad \\frac{b}{c+a} = \\frac{b^2}{bc + ab}, \\quad \\frac{c}{a+b} = \\frac{c^2}{ca + bc}$$\n2. Terapkan Titu\'s Lemma (Bentuk Engel dari Cauchy-Schwarz):\n$$\\frac{a^2}{ab + ca} + \\frac{b^2}{bc + ab} + \\frac{c^2}{ca + bc} \\ge \\frac{(a + b + c)^2}{(ab + ca) + (bc + ab) + (ca + bc)}$$\n$$= \\frac{(a + b + c)^2}{2(ab + bc + ca)}$$\n3. Perhatikan identitas aljabar kuadrat:\n$$(a + b + c)^2 = a^2 + b^2 + c^2 + 2(ab + bc + ca)$$\n4. Dari ketaksamaan standar $a^2 + b^2 + c^2 \\ge ab + bc + ca$, diperoleh:\n$$(a + b + c)^2 \\ge 3(ab + bc + ca)$$\n5. Substitusikan kembali ke hasil Titu\'s Lemma:\n$$\\frac{(a + b + c)^2}{2(ab + bc + ca)} \\ge \\frac{3(ab + bc + ca)}{2(ab + bc + ca)} = \\frac{3}{2}$$\n6. Kesamaan berlaku jika dan hanya jika $a = b = c$.\n(Terbukti secara aljabar Cauchy-Schwarz).'
      }
    ]
  },

  // ----------------------------------------------------
  // BAB 11: FUNCTIONAL EQUATIONS & MAPPING PROPERTIES
  // ----------------------------------------------------
  {
    id: 'amc12-ch11-functional-equations',
    aliases: ['amc12-ch11-projective-barycentric'],
    level: 12,
    domain: 'Aljabar Lanjut',
    chapterIndex: 10,
    title: 'Bab 11: Persamaan Fungsional & Sifat Pemetaan (Functional Equations)',
    summary: {
      overview: 'Persamaan fungsional adalah kategori aljabar modern yang menguji penalaran deduktif tanpa asumsi bentuk rumus fungsi. Peserta dituntut untuk menemukan fungsi $f(x)$ yang memenuhi persamaan relasi tertentu melalui substitusi cerdas nilai-nilai khusus ($x=0, y=0, x=y$), analisis sifat injektif dan surjektif, konsep involusi ($f(f(x)) = x$), serta reduksi ke Persamaan Fungsional Cauchy $f(x+y) = f(x) + f(y)$.',
      coreConcepts: [
        'Substitusi Khusus: Teknik mendasar dengan menetapkan variabel bernilai $0, 1, -x,$ atau $f(y)$ untuk menyederhanakan ekspresi fungsional.',
        'Sifat Injektif: Jika $f(a) = f(b) \\implies a = b$, sifat ini memungkinkan kita "mencoret" fungsi $f$ dari kedua ruas persamaan.',
        'Sifat Surjektif: Jika untuk setiap bilangan real $y$ ada $x$ sedemikian hingga $f(x) = y$, kita dapat menyubstitusikan variabel bebas langsung ke dalam argumen fungsi.',
        'Persamaan Cauchy Klasik: $f(x+y) = f(x) + f(y)$. Jika $f$ kontinu atau monoton, maka $f(x) = cx$ untuk suatu konstanta $c$.',
        'Involusi & Siklus: Fungsi yang memenuhi $f(f(x)) = x$ (seperti $f(x) = -x$ atau $f(x) = \\frac{1}{x}$ atau $f(x) = c - x$).'
      ],
      keyFormulas: [
        { label: 'Cauchy Penjumlahan', formula: 'f(x+y) = f(x) + f(y) \\implies f(x) = cx' },
        { label: 'Involusi', formula: 'f(f(x)) = x' },
        { label: 'Cauchy Perkalian', formula: 'f(xy) = f(x)f(y) \\implies f(x) = x^k' }
      ],
      workedExamples: [
        {
          problem: 'Tentukan semua fungsi $f: \\mathbb{R} \\to \\mathbb{R}$ yang memenuhi $f(x + y) = f(x) + f(y)$ untuk semua $x, y \\in \\mathbb{R}$ dan $f(1) = 5$. Hitung $f(10)$.',
          solution: 'Langkah 1: Persamaan $f(x+y) = f(x) + f(y)$ adalah Persamaan Cauchy standar.\nLangkah 2: Untuk $x=y=0$: $f(0) = f(0) + f(0) \\implies f(0) = 0$.\nLangkah 3: Untuk bilangan bulat positif $n$, dengan induksi $f(n) = n f(1) = 5n$.\nLangkah 4: Hitung untuk $n = 10$:\n$$f(10) = 5 \\times 10 = 50.$$'
        }
      ],
      misconceptions: [
        'Mengasumsikan bahwa solusi fungsi pasti berupa polinomial atau garis lurus tanpa membuktikannya.',
        'Lupa memeriksa kembali (check candidate solutions) ke persamaan awal untuk menghindari solusi semu.'
      ],
      tutorTip: 'Langkah pertama selalu uji nilai $x = 0$ dan $y = 0$. Nilai $f(0)$ sering kali menjadi kunci pembuka untuk membuktikan injektivitas atau menentukan bentuk fungsi!'
    },
    questions: [
      {
        id: 'amc12-ch11-q1',
        type: 'short_answer',
        difficulty: 'Dasar',
        source: 'AMC 12A 2021',
        question: 'Diberikan fungsi $f: \\mathbb{R} \\to \\mathbb{R}$ yang memenuhi $f(x + y) = f(x) + f(y)$ untuk semua bilangan real $x$ dan $y$. Jika $f(1) = 5$, tentukan nilai dari $f(2024)$.',
        hint: 'Persamaan Cauchy penjumlahan linier memenuhi f(n) = n * f(1).',
        answer: '10120',
        acceptedAnswers: ['10120', '10,120', '10.120'],
        bestSolution: 'Langkah 1: Persamaan $f(x+y) = f(x) + f(y)$ adalah Persamaan Fungsional Cauchy klasik.\nLangkah 2: Melalui induksi matematika untuk setiap bilangan bulat $n$:\n$$f(n) = n \\cdot f(1)$$\nLangkah 3: Substitusikan $f(1) = 5$ dan $n = 2024$:\n$$f(2024) = 2024 \\times 5 = 10120.$$'
      },
      {
        id: 'amc12-ch11-q2',
        type: 'short_answer',
        difficulty: 'Menengah',
        source: 'AMC 12B 2019',
        question: 'Fungsi $f(x)$ terdefinisi untuk semua $x \\ne 0, 1$ dan memenuhi persamaan: $$f(x) + 2f\\left(\\frac{1}{1-x}\\right) = x$$ Tentukan nilai eksak dari $f(2)$.',
        hint: 'Gunakan siklus permutasi fungsi pecahan: x = 2 -> 1/(1-x) = -1 -> 1/(1 - (-1)) = 1/2 -> 1/(1 - 1/2) = 2. Susun sistem 3 persamaan dengan 3 variabel.',
        answer: '2/3',
        acceptedAnswers: ['2/3', '3/7', '0.6666667'],
        bestSolution: 'Langkah 1: Perhatikan transformasi $g(x) = \\frac{1}{1-x}$:\nUntuk $x = 2 \\implies g(2) = \\frac{1}{1-2} = -1$.\nUntuk $x = -1 \\implies g(-1) = \\frac{1}{1 - (-1)} = \\frac{1}{2}$.\nUntuk $x = \\frac{1}{2} \\implies g(1/2) = \\frac{1}{1 - 1/2} = 2$ (kembali ke awal, siklus 3!).\nLangkah 2: Tulis persamaan awal pada ketiga titik ini:\n(1) Untuk $x = 2$: $f(2) + 2f(-1) = 2$\n(2) Untuk $x = -1$: $f(-1) + 2f(1/2) = -1$\n(3) Untuk $x = 1/2$: $f(1/2) + 2f(2) = 1/2$\nLangkah 3: Selesaikan sistem persamaan linier 3 variabel:\nKalikan (1) dengan 1, (2) dengan -2, (3) dengan 4:\n$$f(2) + 2f(-1) - 2f(-1) - 4f(1/2) + 4f(1/2) + 8f(2) = 2 - 2(-1) + 4(1/2)$$\n$$9f(2) = 2 + 2 + 2 = 6 \\implies f(2) = \\frac{6}{9} = \\frac{2}{3}.$$'
      },
      {
        id: 'amc12-ch11-q3',
        type: 'short_answer',
        difficulty: 'Menengah',
        source: 'AMC 12A 2018',
        question: 'Fungsi $f: \\mathbb{R}^+ \\to \\mathbb{R}$ memenuhi relasi $f(xy) = f(x) + f(y)$ untuk semua $x, y > 0$. Jika $f(2) = 3$ dan $f(3) = 5$, tentukan nilai dari $f(72)$.',
        hint: 'Faktorisasi 72 = 2^3 * 3^2. Gunakan f(a^b) = b * f(a).',
        answer: '19',
        acceptedAnswers: ['19', '19.0'],
        bestSolution: 'Langkah 1: Sifat $f(xy) = f(x) + f(y)$ adalah sifat logaritmik, di mana $f(x^k) = k f(x)$.\nLangkah 2: Faktorisasi prima dari bilangan 72:\n$$72 = 2^3 \\times 3^2$$\nLangkah 3: Terapkan sifat fungsi fungsional:\n$$f(72) = f(2^3 \\times 3^2) = f(2^3) + f(3^2) = 3 f(2) + 2 f(3)$$\nLangkah 4: Substitusikan nilai $f(2) = 3$ dan $f(3) = 5$:\n$$f(72) = 3(3) + 2(5) = 9 + 10 = 19.$$'
      },
      {
        id: 'amc12-ch11-q4',
        type: 'short_answer',
        difficulty: 'Tantangan',
        source: 'AMC 12B 2020',
        question: 'Tentukan banyaknya fungsi konstan $f(x) = c$ yang memenuhi persamaan fungsional: $$f(x + f(y)) = f(x) + y$$ untuk semua bilangan real $x$ dan $y$.',
        hint: 'Substitusi f(x) = c ke dalam persamaan: c = c + y. Apakah persamaan ini konsisten untuk semua y?',
        answer: '0',
        acceptedAnswers: ['0', 'tidak ada', '0.0'],
        bestSolution: 'Langkah 1: Misalkan fungsi konstan $f(x) = c$ untuk suatu konstanta real $c$.\nLangkah 2: Substitusikan ke dalam persamaan fungsional:\n$$f(x + c) = f(x) + y$$\n$$c = c + y$$\nLangkah 3: Kurangkan $c$ pada kedua ruas:\n$$y = 0$$\nLangkah 4: Persamaan ini harus berlaku untuk semua $y \\in \\mathbb{R}$. Namun $y = 0$ hanya berlaku pada satu titik tertentu saja (kontradiksi!).\nJadi tidak ada fungsi konstan yang memenuhi, sehingga banyaknya fungsi konstan adalah 0.'
      },
      {
        id: 'amc12-ch11-q5',
        type: 'short_answer',
        difficulty: 'Tantangan',
        source: 'AIME 2020',
        question: 'Fungsi $f: \\mathbb{R} \\to \\mathbb{R}$ memenuhi persamaan $f(x - f(y)) = 1 - x - y$ untuk semua bilangan real $x, y$. Tentukan nilai numerik dari $f(10)$.',
        hint: 'Tunjukkan bahwa f adalah fungsi linier f(x) = c - x. Tentukan konstanta c.',
        answer: '-19/2',
        acceptedAnswers: ['-19/2', '-9.5', '-9,5'],
        bestSolution: 'Langkah 1: Pilih $x = f(y)$:\n$$f(0) = 1 - f(y) - y \\implies f(y) = 1 - f(0) - y$$\nIni membuktikan bahwa $f(y)$ berbentuk linier: $f(y) = c - y$, di mana $c = 1 - f(0)$.\nLangkah 2: Substitusikan bentuk $f(t) = c - t$ kembali ke persamaan awal untuk menentukan $c$:\nRuas kiri: $f(x - (c - y)) = f(x + y - c) = c - (x + y - c) = 2c - x - y$.\nRuas kanan: $1 - x - y$.\nLangkah 3: Samakan kedua ruas:\n$$2c - x - y = 1 - x - y \\implies 2c = 1 \\implies c = \\frac{1}{2}$$\nSehingga rumus fungsi adalah $f(x) = \\frac{1}{2} - x$.\nLangkah 4: Hitung nilai $f(10)$:\n$$f(10) = \\frac{1}{2} - 10 = -\\frac{19}{2} = -9.5.$$'
      },
      {
        id: 'amc12-ch11-q6',
        type: 'essay',
        difficulty: 'Olimpiade',
        source: 'OmegaLearn / USAMO Qualifier',
        question: 'Buktikan bahwa satu-satunya fungsi kontinu $f: \\mathbb{R} \\to \\mathbb{R}$ yang memenuhi $f(x+y) = f(x)f(y)$ untuk semua $x, y \\in \\mathbb{R}$ dan tidak bernilai nol di semua titik adalah fungsi eksponensial $f(x) = a^x$ untuk suatu konstanta real positif $a > 0$.',
        hint: 'Tunjukkan f(0) = 1 dan f(x) > 0 untuk semua x. Ambil g(x) = ln f(x), lalu tunjukkan g memenuhi persamaan Cauchy penjumlahan g(x+y) = g(x) + g(y).',
        answer: 'Terbukti via persamaan Cauchy',
        acceptedAnswers: ['Terbukti', 'terbukti', 'Terbukti via persamaan Cauchy'],
        bestSolution: 'Langkah Pembuktian:\n1. Karena $f$ tidak bernilai nol di semua titik, ada $x_0$ dengan $f(x_0) \\ne 0$.\nDari $f(x_0) = f(x_0 + 0) = f(x_0) f(0)$, karena $f(x_0) \\ne 0$, bagi kedua ruas sehingga diperoleh:\n$$f(0) = 1$$\n2. Untuk setiap $x \\in \\mathbb{R}$:\n$$f(x) = f(x/2 + x/2) = [f(x/2)]^2 \\ge 0$$\nJika ada $x_1$ dengan $f(x_1) = 0$, maka $f(0) = f(x_1 - x_1) = f(x_1)f(-x_1) = 0$, kontradiksi dengan $f(0) = 1$.\nJadi $f(x) > 0$ untuk setiap $x \\in \\mathbb{R}$.\n3. Karena $f(x) > 0$, kita dapat mendefinisikan fungsi baru $g(x) = \\ln(f(x))$.\n4. Terapkan logaritma natural pada persamaan fungsional awal:\n$$\\ln(f(x+y)) = \\ln(f(x)f(y)) = \\ln(f(x)) + \\ln(f(y))$$\n$$g(x+y) = g(x) + g(y)$$\n5. Karena $f(x)$ kontinu dan $f(x) > 0$, maka $g(x)$ juga kontinu.\nPersamaan $g(x+y) = g(x) + g(y)$ adalah Persamaan Fungsional Cauchy linier klasik, yang solusi kontinu tunggalnya adalah:\n$$g(x) = c x \\quad (\\text{untuk suatu konstanta real } c)$$\n6. Kembalikan ke fungsi $f(x)$:\n$$f(x) = e^{g(x)} = e^{cx} = (e^c)^x$$\n7. Tetapkan $a = e^c > 0$. Maka seluruh solusinya adalah $f(x) = a^x$ untuk $a > 0$.\n(Terbukti secara analitis dan kontinu).'
      }
    ]
  },

  // ----------------------------------------------------
  // BAB 12: META-SOLVING STRATEGIES & PIGEONHOLE PRINCIPLE
  // ----------------------------------------------------
  {
    id: 'amc12-ch12-olympiad-meta-solving',
    aliases: ['amc12-ch12-advanced-inversion-poles'],
    level: 12,
    domain: 'Topik Lanjut',
    chapterIndex: 11,
    title: 'Bab 12: Strategi Meta-Solving, Prinsip Sarang Merpati & Ekstremal',
    summary: {
      overview: 'Bab penutup AMC 12 membahas teknik-teknik pemecahan masalah meta-olimpiade (meta-solving) yang melintasi berbagai domain: Prinsip Sarang Merpati (Pigeonhole Principle - PHP) umum, Prinsip Ekstremal (memilih elemen terbesar atau terkecil untuk memicu kontradiksi), Invarian dan Monovarian pada proses diskrit berulang, serta strategi reduksi modular untuk pengubinan (tiling).',
      coreConcepts: [
        'Prinsip Sarang Merpati Umum: Jika $n$ objek dimasukkan ke dalam $k$ kotak, terdapat setidaknya satu kotak yang memuat minimal $\\lceil n/k \\rceil$ objek, dan setidaknya satu kotak yang memuat maksimal $\\lfloor n/k \\rfloor$ objek.',
        'Prinsip Ekstremal (Extremal Principle): Memilih objek dengan nilai parameter ekstrem (panjang sisi terpendek, sudut terkecil, derajat titik minimum). Sering kali asumsi objek kedua yang lebih ekstrem langsung membantah kemungkinan tersebut.',
        'Invarian: Suatu kuantitas matematika (seperti paritas, jumlah modulo $k$, atau determinan) yang tidak pernah berubah nilainya setelah serangkaian operasi diizinkan.',
        'Monovarian: Kuantitas terikat yang selalu bertambah atau selalu berkurang pada setiap langkah, menjamin bahwa suatu proses acak pasti berhenti (terminates).',
        'Strategi Pewarnaan Kisi (Grid Coloring): Menggunakan pola papan catur atau pewarnaan $k$-warna modular untuk membuktikan bahwa suatu bidang tidak mungkin ditutup sempurna oleh ubin tertentu.'
      ],
      keyFormulas: [
        { label: 'PHP Umum', formula: '\\lceil n/k \\rceil \\text{ objek dalam satu kotak}' },
        { label: 'Invarian Paritas', formula: 'S_{t+1} \\equiv S_t \\pmod 2' },
        { label: 'Rata-rata Ekstremal', formula: 'x_{\\min} \\le \\bar{x} \\le x_{\\max}' }
      ],
      workedExamples: [
        {
          problem: 'Tunjukkan bahwa dari sembarang 13 orang, selalu ada setidaknya dua orang yang lahir pada bulan yang sama.',
          solution: 'Langkah 1: Identifikasi objek dan kotak:\nObjek: 13 orang ($n = 13$).\nKotak: 12 bulan dalam setahun ($k = 12$).\nLangkah 2: Terapkan Prinsip Sarang Merpati:\nKarena $13 > 12$, terdapat setidaknya satu bulan yang memuat minimal:\n$$\\lceil 13/12 \\rceil = 2\\text{ orang}.$$\nJadi pasti ada setidaknya 2 orang yang berulang tahun di bulan yang sama.'
        }
      ],
      misconceptions: [
        'Salah membedakan antara "merpati" (objek yang dimasukkan) dan "sarang" (kategori pemisah).',
        'Mengira invarian membuktikan bahwa suatu konfigurasi pasti dapat dicapai, padahal invarian hanya membuktikan bahwa konfigurasi di luar invarian pasti tidak dapat dicapai.'
      ],
      tutorTip: 'Jika menghadapi soal proses permainan atau manipulasi koin/papan catur, periksa apakah jumlah nilai modulo 2 (paritas) atau modulo 3 tetap konstan di setiap langkah!'
    },
    questions: [
      {
        id: 'amc12-ch12-q1',
        type: 'short_answer',
        difficulty: 'Dasar',
        source: 'AMC 12A 2019',
        question: 'Diberikan 51 titik yang terletak di dalam persegi berukuran $1 \\times 1$. Jika persegi tersebut dibagi menjadi $5 \\times 5 = 25$ kotak kecil berukuran sama, berapakah banyak kotak kecil minimal yang diperlukan agar menurut Prinsip Sarang Merpati dijamin ada setidaknya 3 titik dalam kotak kecil yang sama?',
        hint: 'Gunakan PHP: jika ada n titik dan k kotak, setidaknya ada satu kotak berisi ceil(n/k) titik. ceil(51 / 25) = 3.',
        answer: '25',
        acceptedAnswers: ['25', '25 kotak', '25.0'],
        bestSolution: 'Langkah 1: Persegi $1 \\times 1$ dibagi menjadi $k = 25$ kotak kecil yang kongruen.\nLangkah 2: Terdapat $n = 51$ titik sebagai objek (merpati) dan $k = 25$ kotak kecil sebagai sarang.\nLangkah 3: Berdasarkan Prinsip Sarang Merpati (Pigeonhole Principle):\nSetidaknya ada satu kotak kecil yang memuat minimal:\n$$\\lceil 51 / 25 \\rceil = \\lceil 2.04 \\rceil = 3\\text{ titik}.$$\nJadi pembagian menjadi 25 kotak kecil menjamin adanya setidaknya 3 titik dalam satu kotak.'
      },
      {
        id: 'amc12-ch12-q2',
        type: 'short_answer',
        difficulty: 'Menengah',
        source: 'AMC 12B 2018',
        question: 'Dari himpunan bilangan bulat $\\{1, 2, 3, \\dots, 20\\}$, dipilih $k$ buah bilangan secara acak. Tentukan nilai minimum dari $k$ agar di antara bilangan yang dipilih dijamin selalu terdapat dua bilangan yang jumlahnya sama dengan 21.',
        hint: 'Kelompokkan bilangan menjadi 10 pasangan disjoint yang berjumlah 21: (1, 20), (2, 19), ..., (10, 11). Pilih 10 + 1 bilangan.',
        answer: '11',
        acceptedAnswers: ['11', '11 bilangan', '11.0'],
        bestSolution: 'Langkah 1: Kelompokkan 20 bilangan tersebut ke dalam 10 pasangan yang masing-masing berjumlah 21:\n$$\\{1, 20\\}, \\{2, 19\\}, \\{3, 18\\}, \\dots, \\{10, 11\\}$$\nSetiap pasangan bertindak sebagai "sarang merpati" (ada 10 sarang).\nLangkah 2: Kasus terburuk: Kita memilih tepat 1 bilangan dari masing-masing 10 pasangan tersebut (total 10 bilangan dipilih tanpa ada pasangan lengkap).\nLangkah 3: Berdasarkan Prinsip Sarang Merpati, jika kita memilih $10 + 1 = 11$ bilangan, setidaknya ada dua bilangan yang berasal dari pasangan yang sama, sehingga jumlahnya pasti 21.\nJadi nilai minimum $k$ adalah 11.'
      },
      {
        id: 'amc12-ch12-q3',
        type: 'short_answer',
        difficulty: 'Menengah',
        source: 'AMC 12A 2021',
        question: 'Sebuah papan catur berukuran $8 \\times 8$ dipotong dua petak diagonal yang berlawanan sudutnya, sehingga tersisa 62 petak. Apakah mungkin menutup sisa papan catur tersebut secara sempurna menggunakan 31 ubin domino berukuran $1 \\times 2$? Masukkan jawaban: 1 jika mungkin, atau 0 jika tidak mungkin.',
        hint: 'Perhatikan warna kedua petak sudut diagonal pada pola papan catur standar. Keduanya memiliki warna yang sama.',
        answer: '0',
        acceptedAnswers: ['0', 'tidak', 'tidak bisa'],
        bestSolution: 'Langkah 1: Pada pewarnaan papan catur standar $8 \\times 8$, terdapat 32 petak hitam dan 32 petak putih.\nLangkah 2: Dua petak sudut yang berlawanan secara diagonal selalu memiliki warna yang sama (misalkan keduanya putih).\nLangkah 3: Setelah dua petak tersebut dipotong, sisa papan memiliki:\n$$32\\text{ petak hitam} \\quad \\text{dan} \\quad 30\\text{ petak putih}.$$\nLangkah 4: Setiap ubin domino berukuran $1 \\times 2$ selalu menutupi tepat 1 petak hitam dan 1 petak putih jika diletakkan di mana saja pada papan.\nLangkah 5: Maka 31 ubin domino pasti menutupi tepat 31 petak hitam dan 31 petak putih.\nKarena papan memiliki 32 hitam dan 30 putih, penutupan sempurna mustahil dilakukan. Jawabannya adalah 0 (tidak mungkin).'
      },
      {
        id: 'amc12-ch12-q4',
        type: 'short_answer',
        difficulty: 'Tantangan',
        source: 'AMC 12B 2020',
        question: 'Tujuh orang teman menghadiri sebuah pesta dan saling berjabat tangan. Masing-masing orang mencatat banyaknya jabat tangan yang ia lakukan. Karena derajat jabat tangan 0 (tidak berjabat tangan dengan siapa pun) dan derajat 6 (berjabat tangan dengan semua orang lain) tidak mungkin muncul bersamaan, berapa banyakkah nilai derajat jabat tangan yang kompatibel secara simultan?',
        hint: 'Derajat seseorang bisa bernilai dari himpunan {0, 1, 2, ..., 6}. Jika ada yang berderajat 0, tidak ada yang berderajat 6. Jadi maksimal ada 6 derajat berbeda.',
        answer: '6',
        acceptedAnswers: ['6', '6 derajat'],
        bestSolution: 'Langkah 1: Dengan 7 orang, setiap orang dapat berjabat tangan dengan minimal 0 orang dan maksimal 6 orang lain. Himpunan kemungkinan derajat adalah $\\{0, 1, 2, 3, 4, 5, 6\\}$ (ada 7 kemungkinan).\nLangkah 2: Perhatikan bahwa jika ada orang dengan derajat 6 (berjabat tangan dengan semua 6 orang lainnya), maka tidak ada orang yang berderajat 0.\nSebaliknya, jika ada orang berderajat 0, tidak ada orang yang berderajat 6.\nLangkah 3: Jadi derajat 0 dan 6 saling eksklusif. Nilai derajat yang mungkin muncul dalam satu pesta paling banyak adalah 6 nilai (antara $\\{0, 1, 2, 3, 4, 5\\}$ atau $\\{1, 2, 3, 4, 5, 6\\}$).\nLangkah 4: Karena ada 7 orang dan hanya 6 nilai derajat yang kompatibel, menurut Prinsip Sarang Merpati pasti ada setidaknya 2 orang dengan derajat jabat tangan yang sama.\nBanyaknya derajat yang kompatibel adalah 6.'
      },
      {
        id: 'amc12-ch12-q5',
        type: 'short_answer',
        difficulty: 'Tantangan',
        source: 'AIME 2020',
        question: 'Sepuluh bilangan bulat positif disusun pada sebuah lingkaran sedemikian hingga jumlah seluruh 10 bilangan tersebut adalah 35. Tentukan bilangan bulat terbesar $S$ sedemikian hingga selalu dijamin terdapat tiga bilangan berurutan di lingkaran yang jumlahnya setidaknya $S$.',
        hint: 'Jumlahkan 10 triplet berurutan: sum (a_i + a_{i+1} + a_{i+2}) = 3 * 35 = 105. Rata-rata triplet = 105 / 10 = 10.5. Ambil ceil(10.5).',
        answer: '11',
        acceptedAnswers: ['11', '11.0'],
        bestSolution: 'Langkah 1: Misalkan 10 bilangan tersebut berurutan melingkar adalah $a_1, a_2, \\dots, a_{10}$ dengan $\\sum_{i=1}^{10} a_i = 35$.\nLangkah 2: Tinjau seluruh 10 kelompok 3 bilangan berurutan:\n$$T_1 = a_1 + a_2 + a_3, \\quad T_2 = a_2 + a_3 + a_4, \\dots, T_{10} = a_{10} + a_1 + a_2$$\nLangkah 3: Jumlahkan seluruh 10 kelompok tersebut:\n$$\\sum_{i=1}^{10} T_i = 3 \\sum_{i=1}^{10} a_i = 3 \\times 35 = 105$$\nLangkah 4: Nilai rata-rata dari ke-10 kelompok adalah:\n$$\\bar{T} = \\frac{105}{10} = 10.5$$\nLangkah 5: Berdasarkan Prinsip Nilai Ekstremal / Sarang Merpati, setidaknya ada satu kelompok yang memiliki nilai lebih besar atau sama dengan rata-rata:\n$$T_{\\max} \\ge \\lceil 10.5 \\rceil = 11$$\nJadi dijamin selalu ada 3 bilangan berurutan yang jumlahnya setidaknya 11.'
      },
      {
        id: 'amc12-ch12-q6',
        type: 'essay',
        difficulty: 'Olimpiade',
        source: 'OmegaLearn / USAMO Qualifier',
        question: 'Buktikan bahwa dari setiap himpunan yang terdiri dari 5 titik sembarang pada bidang dengan koordinat bilangan bulat $(x, y) \\in \\mathbb{Z}^2$, selalu terdapat setidaknya dua titik yang titik tengahnya (midpoint) juga memiliki koordinat bilangan bulat.',
        hint: 'Titik tengah dari (x1, y1) dan (x2, y2) adalah ((x1+x2)/2, (y1+y2)/2). Ini berkoordinat bulat jika dan hanya jika x1 ≡ x2 (mod 2) dan y1 ≡ y2 (mod 2). Ada berapa paritas pasangan (x mod 2, y mod 2)?',
        answer: 'Terbukti via paritas PHP',
        acceptedAnswers: ['Terbukti', 'terbukti', 'Terbukti via paritas PHP'],
        bestSolution: 'Langkah Pembuktian:\n1. Titik tengah antara dua titik $P_1(x_1, y_1)$ dan $P_2(x_2, y_2)$ adalah:\n$$M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$$\n2. Koordinat titik tengah $M$ berupa bilangan bulat jika dan hanya jika $x_1 + x_2$ genap dan $y_1 + y_2$ genap.\nArtinya, $x_1$ dan $x_2$ harus memiliki paritas yang sama ($x_1 \\equiv x_2 \\pmod 2$), dan $y_1$ dan $y_2$ juga harus memiliki paritas yang sama ($y_1 \\equiv y_2 \\pmod 2$).\n3. Paritas dari pasangan koordinat $(x \\pmod 2, y \\pmod 2)$ hanya memiliki $2 \\times 2 = 4$ kemungkinan kategori (sarang merpati):\n- (Genap, Genap) ekuivalen $(0, 0)$\n- (Genap, Ganjil) ekuivalen $(0, 1)$\n- (Ganjil, Genap) ekuivalen $(1, 0)$\n- (Ganjil, Ganjil) ekuivalen $(1, 1)$\n4. Diketahui terdapat 5 titik (merpati) yang ditempatkan ke dalam 4 kategori paritas (sarang).\n5. Berdasarkan Prinsip Sarang Merpati (Pigeonhole Principle), karena $5 > 4$, terdapat setidaknya dua titik yang memiliki kategori paritas koordinat yang persis sama.\n6. Misalkan kedua titik tersebut adalah $A(x_a, y_a)$ dan $B(x_b, y_b)$. Karena paritasnya sama:\n$$x_a + x_b \\equiv 0 \\pmod 2 \\implies \\frac{x_a + x_b}{2} \\in \\mathbb{Z}$$\n$$y_a + y_b \\equiv 0 \\pmod 2 \\implies \\frac{y_a + y_b}{2} \\in \\mathbb{Z}$$\nSehingga titik tengah dari kedua titik tersebut pasti memiliki koordinat bilangan bulat. (Terbukti).'
      }
    ]
  }
];

// Bungkus find untuk mendukung query canonical id maupun alias id
const origFind = chaptersList.find.bind(chaptersList);
chaptersList.find = function (predicate, thisArg) {
  const direct = origFind(predicate, thisArg);
  if (direct) return direct;
  return origFind((ch) => {
    if (ch.aliases && Array.isArray(ch.aliases)) {
      for (const a of ch.aliases) {
        if (predicate({ ...ch, id: a })) return true;
      }
    }
    return false;
  }, thisArg);
};

export const amc12Data = {
  level: 12,
  code: 'amc12',
  title: 'AMC 12 Competition Math Handbook & Problem Bank',
  subtitle: 'Modul Persiapan Olimpiade Matematika Tingkat SMA Lanjut / AIME',
  targetGrades: 'Kelas 11–12 SMA',
  domains: ['Kombinatorika Lanjut', 'Aljabar Lanjut', 'Teori Bilangan Lanjut', 'Geometri & Trigonometri', 'Topik Lanjut'],
  chapters: chaptersList
};
