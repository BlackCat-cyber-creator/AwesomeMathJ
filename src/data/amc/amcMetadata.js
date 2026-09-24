/**
 * Lightweight Metadata and Chapter Index for AMC Competition Modules (AMC 8, AMC 10, AMC 12)
 * Based on "Mastering AMC 8" & "Mastering AMC 10/12" (OmegaLearn Competition Series)
 * 
 * Khusus penggunaan personal/tutoring:
 * - Soal bertipe Isian Singkat (Short Answer) & Esai/Langkah Pembuktian (bukan pilihan ganda biasa)
 * - Teori lengkap, rumus kunci KaTeX, contoh soal terbimbing, dan pembahasan bertahap
 * - Siap cetak per bab A4 LKPD kompetisi
 */

export const AMC_LEVELS_METADATA = [
  {
    level: 8,
    code: 'amc8',
    title: 'AMC 8',
    subtitle: 'Tingkat SMP (Middle School Math Contest)',
    targetGrades: 'Kelas 7–8 SMP',
    badge: 'AMC 8',
    bookSource: 'Mastering AMC 8 (OmegaLearn)',
    domains: ['Kombinatorika', 'Aljabar', 'Teori Bilangan', 'Geometri'],
    chaptersCount: 12
  },
  {
    level: 10,
    code: 'amc10',
    title: 'AMC 10',
    subtitle: 'Tingkat SMA Awal (Early High School Contest)',
    targetGrades: 'Kelas 9–10 SMA',
    badge: 'AMC 10',
    bookSource: 'Mastering AMC 10/12 (OmegaLearn)',
    domains: ['Kombinatorika', 'Aljabar', 'Teori Bilangan', 'Geometri', 'Topik Lanjut'],
    chaptersCount: 12
  },
  {
    level: 12,
    code: 'amc12',
    title: 'AMC 12',
    subtitle: 'Tingkat SMA Lanjut (Comprehensive High School Contest)',
    targetGrades: 'Kelas 11–12 SMA',
    badge: 'AMC 12',
    bookSource: 'Mastering AMC 10/12 (OmegaLearn)',
    domains: ['Kombinatorika Lanjut', 'Aljabar Lanjut', 'Teori Bilangan Lanjut', 'Geometri & Trigonometri', 'Topik Lanjut'],
    chaptersCount: 12
  }
];

export const ALL_AMC_CHAPTERS_INDEX = [
  // ==========================================
  // AMC 8 CHAPTERS (12 Chapters)
  // ==========================================
  {
    id: 'amc8-ch1-permutations',
    level: 8,
    domain: 'Kombinatorika',
    chapterIndex: 0,
    title: 'Bab 1: Permutasi & Kaidah Pengaturan (Permutations)',
    bookChapter: 'Chapter 1: Permutations',
    concepts: ['Faktorial', 'Permutasi Digit', 'Pengaturan Melingkar (Circular Permutations)', 'Prinsip Perkalian'],
    questionCount: 6,
    format: 'Isian Singkat & Analisis Langkah'
  },
  {
    id: 'amc8-ch2-combinations',
    level: 8,
    domain: 'Kombinatorika',
    chapterIndex: 1,
    title: 'Bab 2: Kombinasi & Identitas Binomial (Combinations)',
    bookChapter: 'Chapter 2: Combinations',
    concepts: ['Rumus nCr', 'Identitas Pascal', 'Pemilihan Tim dengan Syarat', 'Kombinasi Pengelompokan'],
    questionCount: 6,
    format: 'Isian Singkat'
  },
  {
    id: 'amc8-ch3-probability',
    level: 8,
    domain: 'Kombinatorika',
    chapterIndex: 2,
    title: 'Bab 3: Peluang & Perhitungan Komplemen (Probability & Complementary Counting)',
    bookChapter: 'Chapter 4 & 6: Probability & Complementary Counting',
    concepts: ['Peluang Kejadian Bebas', 'Kejadian Bersyarat', 'Pencacahan Komplemen ("Setidaknya Satu")', 'Analisis Ruang Sampel'],
    questionCount: 6,
    format: 'Isian Singkat & Uraian'
  },
  {
    id: 'amc8-ch4-casework-pie',
    level: 8,
    domain: 'Kombinatorika',
    chapterIndex: 3,
    title: 'Bab 4: Kasus Terbagi & Prinsip Inklusi-Eksklusi (Casework & PIE)',
    bookChapter: 'Chapter 5 & 7: Casework & PIE',
    concepts: ['Casework Terstruktur', 'PIE 2 Himpunan', 'PIE 3 Himpunan', 'Stars and Bars Dasar'],
    questionCount: 6,
    format: 'Isian Singkat & Uraian'
  },
  {
    id: 'amc8-ch5-algebraic-manipulations',
    level: 8,
    domain: 'Aljabar',
    chapterIndex: 4,
    title: 'Bab 5: Manipulasi Aljabar & Sistem Persamaan (Algebraic Manipulations)',
    bookChapter: 'Chapter 12: Algebraic Manipulations and Equations',
    concepts: ['Substitusi Cerdas', 'Penjumlahan/Pengurangan Sistem Persamaan', 'Penyelesaian Cepat Soal Cerita', 'Faktorisasi Dasar'],
    questionCount: 6,
    format: 'Isian Singkat'
  },
  {
    id: 'amc8-ch6-speed-distance-time',
    level: 8,
    domain: 'Aljabar',
    chapterIndex: 5,
    title: 'Bab 6: Kecepatan, Jarak, Waktu & Rata-rata Laju (Speed, Distance & Time)',
    bookChapter: 'Chapter 13: Speed, Distance, and Time',
    concepts: ['Hubungan d = v × t', 'Kecepatan Rata-rata Harmonik', 'Pengejaran & Berpapasan', 'Kerja Bersama (Work Rate)'],
    questionCount: 6,
    format: 'Isian Singkat'
  },
  {
    id: 'amc8-ch7-sequences-series',
    level: 8,
    domain: 'Aljabar',
    chapterIndex: 6,
    title: 'Bab 7: Barisan, Deret & Telescoping (Sequences, Series & Telescoping)',
    bookChapter: 'Chapter 14 & 16: Sequences and Series & Telescoping',
    concepts: ['Barisan Aritmatika', 'Deret Gauss', 'Barisan Geometri', 'Penjumlahan Telescoping Pecahan'],
    questionCount: 6,
    format: 'Isian Singkat & Uraian'
  },
  {
    id: 'amc8-ch8-primes-divisibility',
    level: 8,
    domain: 'Teori Bilangan',
    chapterIndex: 7,
    title: 'Bab 8: Bilangan Prima, Keterbagian & Faktorisasi (Primes & Divisibility)',
    bookChapter: 'Chapter 17: Primes and Divisibility',
    concepts: ['Uji Prima', 'Aturan Keterbagian 3, 4, 7, 8, 9, 11', 'Faktorisasi Prima Unik (FTA)', 'Rumus Legendre Pangkat Prima'],
    questionCount: 6,
    format: 'Isian Singkat'
  },
  {
    id: 'amc8-ch9-factors-gcd-lcm',
    level: 8,
    domain: 'Teori Bilangan',
    chapterIndex: 8,
    title: 'Bab 9: Sifat Faktor, FPB, KPK & Algoritma Euclidean (Factors, GCD & LCM)',
    bookChapter: 'Chapter 18 & 19: Factors & GCD and LCM',
    concepts: ['Jumlah Banyak Faktor tau(n)', 'Jumlah Total Faktor sigma(n)', 'Hubungan FPB × KPK = a × b', 'Algoritma Euclidean'],
    questionCount: 6,
    format: 'Isian Singkat'
  },
  {
    id: 'amc8-ch10-modular-arithmetic',
    level: 8,
    domain: 'Teori Bilangan',
    chapterIndex: 9,
    title: 'Bab 10: Aritmatika Modular & Pola Digit Satuan (Modular Arithmetic & Digit Cycles)',
    bookChapter: 'Chapter 20: Modular Arithmetic',
    concepts: ['Kongruensi Modulo n', 'Sifat Penjumlahan & Perkalian Modulo', 'Siklus Satuan Pangkat (Units Digit Cycles)', 'Sisa Pembagian'],
    questionCount: 6,
    format: 'Isian Singkat'
  },
  {
    id: 'amc8-ch11-triangles-pythagoras',
    level: 8,
    domain: 'Geometri',
    chapterIndex: 10,
    title: 'Bab 11: Segitiga Khusus, Pythagoras & Luas (Triangles & Pythagorean Theorem)',
    bookChapter: 'Chapter 24: Triangles',
    concepts: ['Tripel Pythagoras', 'Segitiga 30-60-90 & 45-45-90', 'Teorema Garis Bagi Sudut', 'Rumus Luas Heron & Trigonometri Dasar'],
    questionCount: 6,
    format: 'Isian Singkat'
  },
  {
    id: 'amc8-ch12-circles-angles',
    level: 8,
    domain: 'Geometri',
    chapterIndex: 11,
    title: 'Bab 12: Sudut Lingkaran, Tali Busur & Kesebangunan (Circles & Angle Chasing)',
    bookChapter: 'Chapter 23, 26 & 27: Angle Chasing, Circles & Similar Triangles',
    concepts: ['Sudut Pusat vs Keliling', 'Segiempat Tali Busur', 'Kesebangunan Segitiga AA & SAS', 'Keliling & Luas Sektor Lingkaran'],
    questionCount: 6,
    format: 'Isian Singkat & Uraian'
  },

  // ==========================================
  // AMC 10 CHAPTERS (12 Chapters)
  // ==========================================
  {
    id: 'amc10-ch1-advanced-combinatorics',
    level: 10,
    domain: 'Kombinatorika',
    chapterIndex: 0,
    title: 'Bab 1: Stars & Bars, Pembagian Objek & Identitas Kombinatorik',
    bookChapter: 'Chapter 6 & 7: Stars & Bars and Combinatorial Identities',
    concepts: ['Stars & Bars Tanpa Syarat C(n+k-1, k-1)', 'Stars & Bars Bilangan Asli Positif', 'Identitas Hockey Stick', 'Vandermonde Identity'],
    questionCount: 6,
    format: 'Isian Singkat'
  },
  {
    id: 'amc10-ch2-geometric-probability-expected-value',
    level: 10,
    domain: 'Kombinatorika',
    chapterIndex: 1,
    title: 'Bab 2: Peluang Geometris & Nilai Harapan (Geometric Probability & Expected Value)',
    bookChapter: 'Chapter 9 & 10: Geometric Probability & Expected Value',
    concepts: ['Peluang pada Bidang Kartesius / Luas Rasio', 'Linearitas Nilai Harapan E[X+Y] = E[X]+E[Y]', 'Peluang Berhenti & Rekursi Peluang Sederhana'],
    questionCount: 6,
    format: 'Isian Singkat & Uraian'
  },
  {
    id: 'amc10-ch3-vieta-polynomials',
    level: 10,
    domain: 'Aljabar',
    chapterIndex: 2,
    title: 'Bab 3: Teorema Vieta & Hubungan Akar Polinomial (Vieta\'s Formulas)',
    bookChapter: 'Chapter 14 & 15: Vieta\'s Formulas & Polynomial Roots',
    concepts: ['Vieta Kuadrat & Kubik', 'Jumlah Kuadrat Akar a^2 + b^2', 'Manipulasi Simetris Akar', 'Polinomial Berkoefisien Real'],
    questionCount: 6,
    format: 'Isian Singkat'
  },
  {
    id: 'amc10-ch4-algebraic-factorizations',
    level: 10,
    domain: 'Aljabar',
    chapterIndex: 3,
    title: 'Bab 4: Simon\'s Favorite Factoring Trick (SFFT) & Faktorisasi Khusus',
    bookChapter: 'Chapter 13 & 27: Algebraic Manipulations & SFFT',
    concepts: ['Teknik SFFT: xy + ax + by + ab = (x+b)(y+a)', 'Identitas Sophie Germain', 'Faktorisasi Kuadratik & Selisih Kubik', 'Bentuk Simetris'],
    questionCount: 6,
    format: 'Isian Singkat & Uraian'
  },
  {
    id: 'amc10-ch5-advanced-sequences',
    level: 10,
    domain: 'Aljabar',
    chapterIndex: 4,
    title: 'Bab 5: Barisan Rekursif, Deret Aritmatika-Geometri & Pola Polinomial',
    bookChapter: 'Chapter 16, 17, 18: Sequences and Special Sequences',
    concepts: ['Relasi Rekursi Linier Orde 2', 'Deret Aritmetiko-Geometris (AGS)', 'Metode Selisih Hingga (Finite Differences)', 'Deret Kuadrat & Kubik'],
    questionCount: 6,
    format: 'Isian Singkat'
  },
  {
    id: 'amc10-ch6-legendre-modular-theorems',
    level: 10,
    domain: 'Teori Bilangan',
    chapterIndex: 5,
    title: 'Bab 6: Rumus Legendre, Teorema Fermat & Aritmatika Modular Lanjut',
    bookChapter: 'Chapter 23 & 25: Legendre\'s Formula & Modular Arithmetic',
    concepts: ['Rumus Legendre untuk Faktorial n!', 'Teorema Kecil Fermat a^(p-1) = 1 (mod p)', 'Invers Perkalian Modular', 'Persamaan Kongruensi Linier'],
    questionCount: 6,
    format: 'Isian Singkat'
  },
  {
    id: 'amc10-ch7-diophantine-bases',
    level: 10,
    domain: 'Teori Bilangan',
    chapterIndex: 6,
    title: 'Bab 7: Persamaan Diophantine & Konversi Basis Bilangan (Bases & Diophantine)',
    bookChapter: 'Chapter 27 & 28: Diophantine Equations & Bases',
    concepts: ['Persamaan Linier Diophantine ax + by = c', 'Syarat Solusi Integer gcd(a,b)|c', 'Konversi Basis b dan Aritmatika Basis', 'Pecahan Berulang pada Basis'],
    questionCount: 6,
    format: 'Isian Singkat & Uraian'
  },
  {
    id: 'amc10-ch8-power-of-a-point',
    level: 10,
    domain: 'Geometri',
    chapterIndex: 7,
    title: 'Bab 8: Kuasa Titik pada Lingkaran (Power of a Point Theorem)',
    bookChapter: 'Chapter 35: Circles & Power of a Point',
    concepts: ['Teorema Dua Tali Busur Berpotongan', 'Teorema Garis Potong dan Garis Potong', 'Teorema Garis Singgung dan Garis Potong PT^2 = PA × PB', 'Garis Kuasa'],
    questionCount: 6,
    format: 'Isian Singkat'
  },
  {
    id: 'amc10-ch9-triangle-geometry',
    level: 10,
    domain: 'Geometri',
    chapterIndex: 8,
    title: 'Bab 9: Titik Istimewa Segitiga & Dalil Menelaus / Ceva',
    bookChapter: 'Chapter 31 & 33: Triangle Area, Length & Similar Triangles',
    concepts: ['Titik Berat (Centroid), Titik Tinggi (Orthocenter), Titik Pusat Lingkaran Luar & Dalam', 'Teorema Ceva', 'Teorema Menelaus', 'Teorema Stewart Panjang Garis Bagi/Cevian'],
    questionCount: 6,
    format: 'Isian Singkat & Uraian'
  },
  {
    id: 'amc10-ch10-coordinate-geometry',
    level: 10,
    domain: 'Geometri',
    chapterIndex: 9,
    title: 'Bab 10: Geometri Analitik & Rumus Tali Sepatu (Shoelace Formula)',
    bookChapter: 'Chapter 39: Coordinate Geometry',
    concepts: ['Rumus Tali Sepatu Gauss untuk Luas Poligon Sembarang', 'Jarak Titik ke Garis', 'Titik Kisi (Pick\'s Theorem: Area = I + B/2 - 1)', 'Persamaan Lingkaran Kartesius'],
    questionCount: 6,
    format: 'Isian Singkat'
  },
  {
    id: 'amc10-ch11-floor-ceiling-functions',
    level: 10,
    domain: 'Topik Lanjut',
    chapterIndex: 10,
    title: 'Bab 11: Fungsi Lantai & Atap (Floor & Ceiling Functions)',
    bookChapter: 'Chapter 40: Floor and Ceiling Functions',
    concepts: ['Definisi [x] dan Bagian Pecahan {x}', 'Sifat [x+n] = [x]+n untuk n integer', 'Persamaan Aljabar Melibatkan Fungsi Floor', 'Identitas Hermite'],
    questionCount: 6,
    format: 'Isian Singkat & Uraian'
  },
  {
    id: 'amc10-ch12-inequalities-amgm',
    level: 10,
    domain: 'Topik Lanjut',
    chapterIndex: 11,
    title: 'Bab 12: Ketaksamaan Dasar AM-GM & Nilai Ekstrem (Inequalities: AM-GM)',
    bookChapter: 'Chapter 41: Inequalities',
    concepts: ['Ketaksamaan Rata-rata Aritmatika-Geometri: (a+b)/2 >= sqrt(ab)', 'AM-GM untuk n Variabel Positif', 'Syarat Kesamaan a = b = ...', 'Aplikasi Maksimum & Minimum Aljabar'],
    questionCount: 6,
    format: 'Isian Singkat & Uraian'
  },

  // ==========================================
  // AMC 12 CHAPTERS (12 Chapters)
  // ==========================================
  {
    id: 'amc12-ch1-advanced-recursion-states',
    level: 12,
    domain: 'Kombinatorika Lanjut',
    chapterIndex: 0,
    title: 'Bab 1: Rekursi Lanjut & Rantai Peluang Keadaan (Probability States & Markov)',
    bookChapter: 'Chapter 11 & 12: Recursion & Probability States',
    concepts: ['Penyelesaian Persamaan Karakteristik Rekursi', 'Rantai Keadaan Peluang (Markov States)', 'Prinsip Derangement D_n', 'Pencacahan Siklis & Polya Sederhana'],
    questionCount: 6,
    format: 'Isian Singkat & Uraian'
  },
  {
    id: 'amc12-ch2-complex-numbers-geometry',
    level: 12,
    domain: 'Topik Lanjut',
    chapterIndex: 1,
    title: 'Bab 2: Bilangan Kompleks & Bentuk Polar Euler (Complex Numbers in Geometry)',
    bookChapter: 'Chapter 45: Complex Numbers',
    concepts: ['Bentuk Polar r(cos theta + i sin theta) = r e^(i theta)', 'Rumus De Moivre', 'Akar Kesatuan (Roots of Unity)', 'Rotasi dan Geometri Bidang Argand'],
    questionCount: 6,
    format: 'Isian Singkat & Uraian'
  },
  {
    id: 'amc12-ch3-polynomials-roots-unity',
    level: 12,
    domain: 'Aljabar Lanjut',
    chapterIndex: 2,
    title: 'Bab 3: Teorema Sisa Polinomial & Polinomial Siklotomik',
    bookChapter: 'Chapter 15 & 45: Polynomial Roots & Roots of Unity',
    concepts: ['Teorema Sisa Cina untuk Polinomial', 'Polinomial Berakar Rasional (Rational Root Theorem)', 'Polinomial Simetrik Dasar & Rumus Newton-Girard', 'Akar-akar Kompleks Konjugat'],
    questionCount: 6,
    format: 'Isian Singkat'
  },
  {
    id: 'amc12-ch4-logarithms-exponents',
    level: 12,
    domain: 'Aljabar Lanjut',
    chapterIndex: 3,
    title: 'Bab 4: Persamaan Logaritma Kompleks & Basis Variabel',
    bookChapter: 'Chapter 42: Logarithms',
    concepts: ['Sifat Pergantian Basis log_b(a) = log(a)/log(b)', 'Persamaan Eksponensial Bertingkat', 'Ketaksamaan Logaritma dengan Domain Khusus', 'Fungsi Karakteristik dan Mantisa'],
    questionCount: 6,
    format: 'Isian Singkat'
  },
  {
    id: 'amc12-ch5-euler-totient-crt',
    level: 12,
    domain: 'Teori Bilangan Lanjut',
    chapterIndex: 4,
    title: 'Bab 5: Fungsi Totient Euler & Teorema Sisa Cina (Euler\'s Totient & CRT)',
    bookChapter: 'Chapter 25: Modular Arithmetic & Advanced Number Theory',
    concepts: ['Fungsi Phi Euler phi(n) = n(1-1/p1)...', 'Teorema Euler: a^phi(n) = 1 (mod n)', 'Teorema Sisa Cina (Chinese Remainder Theorem)', 'Order Modular dan Primitive Roots'],
    questionCount: 6,
    format: 'Isian Singkat & Uraian'
  },
  {
    id: 'amc12-ch6-algebraic-number-theory',
    level: 12,
    domain: 'Teori Bilangan Lanjut',
    chapterIndex: 5,
    title: 'Bab 6: Teori Bilangan Aljabar, Residu Kuadratik & Simbol Legendre',
    bookChapter: 'Chapter 26: Algebraic Number Theory',
    concepts: ['Kriteria Euler a^((p-1)/2) = (a/p) (mod p)', 'Residu Kuadratik Modulo Bilangan Prima', 'Persamaan Pell x^2 - D y^2 = 1', 'Faktorisasi Gaussian Integer a^2 + b^2'],
    questionCount: 6,
    format: 'Isian Singkat & Uraian'
  },
  {
    id: 'amc12-ch7-trigonometry-identities',
    level: 12,
    domain: 'Geometri & Trigonometri',
    chapterIndex: 6,
    title: 'Bab 7: Identitas Trigonometri & Sudut Ganda / Jumlah Perkalian',
    bookChapter: 'Chapter 43: Algebraic Trigonometry',
    concepts: ['Rumus Penjumlahan Sudut sin(A+B), cos(A+B)', 'Transformasi Hasil Kali ke Jumlah (Product-to-Sum)', 'Nilai Eksak Trigonometri (15°, 75°, 18°, 36°)', 'Persamaan Trigonometri dengan Batas Domain'],
    questionCount: 6,
    format: 'Isian Singkat'
  },
  {
    id: 'amc12-ch8-geometric-trigonometry',
    level: 12,
    domain: 'Geometri & Trigonometri',
    chapterIndex: 7,
    title: 'Bab 8: Aturan Sinus, Kosinus, & Garis Luar Segitiga (Geometric Trigonometry)',
    bookChapter: 'Chapter 44: Geometric Trigonometry',
    concepts: ['Hukum Sinus a/sin A = 2R', 'Hukum Kosinus c^2 = a^2 + b^2 - 2ab cos C', 'Rumus Jari-jari Lingkaran Dalam r = Luas/s dan Luar R = abc/(4L)', 'Teorema Ptolemy Segiempat Tali Busur AC×BD = AB×CD + BC×AD'],
    questionCount: 6,
    format: 'Isian Singkat & Uraian'
  },
  {
    id: 'amc12-ch9-3d-geometry-vectors',
    level: 12,
    domain: 'Geometri & Trigonometri',
    chapterIndex: 8,
    title: 'Bab 9: Geometri Ruang 3 Dimensi, Vektor & Irisan Bangun Ruang',
    bookChapter: 'Chapter 37: 3-D Geometry',
    concepts: ['Irisan Bidang pada Kubus/Balok', 'Jarak Titik ke Bidang 3 Dimensi', 'Sudut Antar-dua Bidang (Dihedral Angle)', 'Volume Tetrahedron dan Bola Luar/Dalam'],
    questionCount: 6,
    format: 'Isian Singkat'
  },
  {
    id: 'amc12-ch10-cauchy-schwarz-inequality',
    level: 12,
    domain: 'Topik Lanjut',
    chapterIndex: 9,
    title: 'Bab 10: Ketaksamaan Cauchy-Schwarz & Titu\'s Lemma',
    bookChapter: 'Chapter 41: Inequalities',
    concepts: ['Ketaksamaan Cauchy-Schwarz: (sum a_i^2)(sum b_i^2) >= (sum a_i b_i)^2', 'Bentuk Engel / Titu\'s Lemma: sum (x_i^2 / a_i) >= (sum x_i)^2 / sum a_i', 'Teknik Normalisasi & Pemilihan Bobot'],
    questionCount: 6,
    format: 'Isian Singkat & Uraian'
  },
  {
    id: 'amc12-ch11-functional-equations',
    level: 12,
    domain: 'Aljabar Lanjut',
    chapterIndex: 10,
    title: 'Bab 11: Persamaan Fungsional & Sifat Pemetaan (Functional Equations)',
    bookChapter: 'Chapter 46: Additional Techniques and Strategies',
    concepts: ['Substitusi Nilai Khusus x=0, y=0', 'Injektif, Surjektif, dan Bijektif', 'Persamaan Fungsional Cauchy f(x+y) = f(x) + f(y)', 'Involusi f(f(x)) = x'],
    questionCount: 6,
    format: 'Isian Singkat & Pembuktian'
  },
  {
    id: 'amc12-ch12-olympiad-meta-solving',
    level: 12,
    domain: 'Topik Lanjut',
    chapterIndex: 11,
    title: 'Bab 12: Strategi Meta-Solving, Prinsip Sarang Merpati & Ekstremal',
    bookChapter: 'Chapter 46: Additional Techniques and Strategies',
    concepts: ['Prinsip Sarang Merpati (Pigeonhole Principle - PHP)', 'Prinsip Ekstremal (Memilih Elemen Terbesar/Terkecil)', 'Invarian dan Monovarian', 'Strategi Eliminasi Kasus & Estimasi Batas'],
    questionCount: 6,
    format: 'Isian Singkat & Pembuktian'
  }
];
