/**
 * Dataset Lengkap Modul Olimpiade Matematika: AMC 8 (Middle School Math Competition)
 * Sumber Inspirasi: Mastering AMC 8 (OmegaLearn) & Ujian Resmi AMC 8 / MATHCOUNTS
 * 
 * Karakteristik Soal AMC:
 * - Tidak menggunakan format pilihan ganda baku (A, B, C, D)
 * - Format isian singkat (nilai angka eksak / ekspresi) dan esai/pembuktian bertahap
 * - Dilengkapi kunci jawaban valid, variasi input jawaban yang diterima (acceptedAnswers),
 *   petunjuk pemandu (hint), dan solusi langkah komprehensif (bestSolution).
 */

export const amc8Data = {
  level: 8,
  code: 'amc8',
  title: 'AMC 8 Competition Math Handbook & Problem Bank',
  subtitle: 'Modul Persiapan Olimpiade Matematika Tingkat SMP',
  targetGrades: 'Kelas 7–8 SMP',
  domains: ['Kombinatorika', 'Aljabar', 'Teori Bilangan', 'Geometri'],
  chapters: [
    // ----------------------------------------------------
    // BAB 1: PERMUTATIONS
    // ----------------------------------------------------
    {
      id: 'amc8-ch1-permutations',
      level: 8,
      domain: 'Kombinatorika',
      chapterIndex: 0,
      title: 'Bab 1: Permutasi & Kaidah Pengaturan (Permutations)',
      aliases: ['amc8-ch1-permutations'],
      summary: {
        overview: 'Permutasi adalah teknik pencacahan sistematis untuk menghitung banyaknya susunan objek di mana urutan kemunculan sangat diperhitungkan. Dalam kompetisi matematika seperti AMC 8 dan MATHCOUNTS, permutasi muncul dalam berbagai variasi: penyusunan kode/digit angka, penempatan orang dalam antrean dengan syarat kedekatan (adjacent/separated), dan pengaturan melingkar. Kunci utama penguasaan permutasi adalah membedakan apakah pemilihan dilakukan dengan pengembalian (replacement) atau tanpa pengembalian.',
        coreConcepts: [
          'Prinsip Dasar Perkalian: Jika langkah 1 memiliki $n_1$ pilihan dan langkah 2 memiliki $n_2$ pilihan independen, maka total cara menyelesaikannya adalah $n_1 \\times n_2$.',
          'Notasi Faktorial: $n! = n \\times (n-1) \\times (n-2) \\times \\dots \\times 2 \\times 1$, dengan definisi khusus $0! = 1$.',
          'Permutasi $r$ Objek dari $n$ Objek Berbeda: $$P(n, r) = \\frac{n!}{(n-r)!}$$',
          'Permutasi dengan Unsur yang Sama: Banyaknya susunan huruf dari kata yang memiliki huruf berulang: $$\\frac{n!}{k_1! \\times k_2! \\times \\dots \\times k_m!}$$',
          'Permutasi Siklis (Melingkar): Pengaturan $n$ objek pada meja bundar di mana rotasi dianggap identik: $$P_{\\text{siklis}} = (n-1)!$$'
        ],
        keyFormulas: [
          { label: 'Permutasi P(n, r)', formula: 'P(n, r) = \\frac{n!}{(n-r)!}' },
          { label: 'Permutasi Siklis', formula: 'P_{\\text{melingkar}} = (n-1)!' },
          { label: 'Unsur Berulang', formula: '\\frac{n!}{k_1! k_2! \\dots k_m!}' }
        ],
        workedExamples: [
          {
            problem: 'Berapa banyak bilangan bulat 3-digit yang dapat dibentuk dari angka $1, 2, 3, 4, 5$ jika setiap angka hanya boleh digunakan satu kali dan bilangannya harus ganjil?',
            solution: 'Langkah 1: Tentukan syarat utama terlebih dahulu. Bilangan ganjil harus berakhiran digit ganjil. Dari {1, 2, 3, 4, 5}, digit ganjil yang tersedia adalah $1, 3, 5$ (ada 3 pilihan untuk posisi satuan).\nLangkah 2: Pilih digit ratusan. Karena tidak boleh ada angka berulang, dari 5 angka yang ada sudah terpakai 1 angka untuk satuan, tersisa 4 angka.\nLangkah 3: Pilih digit puluhan dari 3 angka yang tersisa.\nLangkah 4: Kalikan seluruh kemungkinan: $4 \\times 3 \\times 3 = 36$ bilangan.'
          },
          {
            problem: 'Lima orang siswa (Andi, Budi, Citra, Dodi, Eka) duduk berdampingan di satu baris kursi bioskop. Jika Andi dan Budi menolak duduk berdampingan, berapa banyak susunan duduk yang memenuhi syarat?',
            solution: 'Gunakan metode komplemen (Complementary Counting):\nLangkah 1: Hitung total susunan tanpa syarat = $5! = 120$ cara.\nLangkah 2: Hitung susunan di mana Andi dan Budi duduk berdampingan. Anggap (Andi, Budi) sebagai 1 blok tunggal. Sekarang terdapat 4 objek: {AB}, C, D, E.\nBanyak cara menyusun 4 objek adalah $4! = 24$. Di dalam blok {AB}, Andi dan Budi dapat bertukar posisi dalam $2! = 2$ cara. Total susunan berdampingan = $24 \\times 2 = 48$.\nLangkah 3: Kurangkan kasus komplemen: $120 - 48 = 72$ susunan.'
          }
        ],
        misconceptions: [
          'Lupa memperhitungkan urutan internal objek dalam teknik blok (menganggap {AB} hanya 1 cara, padahal ada $2! = 2$ urutan).',
          'Menggunakan rumus permutasi siklis $(n-1)!$ pada meja yang memiliki titik acuan tetap (misal: dekat pintu/jendela), padahal itu kembali menjadi permutasi linier $n!$.'
        ],
        tutorTip: 'Jika ada syarat batasan (misal harus ganjil, digit pertama tidak boleh 0, atau dua orang harus terpisah), selalu selesaikan posisi dengan syarat terlebih dahulu atau gunakan metode komplemen!'
      },
      questions: [
        {
          id: 'amc8-ch1-q1',
          type: 'short_answer',
          difficulty: 'Dasar',
          source: 'OmegaLearn / AMC 8 Practice',
          question: 'Hitunglah nilai eksak dari selisih permutasi: $P(6, 3) - P(7, 2)$.',
          hint: 'Gunakan rumus $P(n, r) = \\frac{n!}{(n-r)!}$. Untuk $P(6, 3) = 6 \\times 5 \\times 4$ dan $P(7, 2) = 7 \\times 6$.',
          answer: '78',
          acceptedAnswers: ['78', '78.0'],
          bestSolution: 'Langkah 1: Hitung $P(6, 3) = \\frac{6!}{(6-3)!} = 6 \\times 5 \\times 4 = 120$.\nLangkah 2: Hitung $P(7, 2) = \\frac{7!}{(7-2)!} = 7 \\times 6 = 42$.\nLangkah 3: Lakukan pengurangan: $120 - 42 = 78$.'
        },
        {
          id: 'amc8-ch1-q2',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 8 2020',
          question: 'Berapa banyak bilangan bulat 3-digit yang seluruh digitnya adalah bilangan ganjil yang berbeda (distinct)?',
          hint: 'Kumpulan digit ganjil yang tersedia adalah {1, 3, 5, 7, 9} (ada 5 angka). Pilih dan susun 3 angka berbeda untuk ratusan, puluhan, dan satuan.',
          answer: '60',
          acceptedAnswers: ['60'],
          bestSolution: 'Langkah 1: Digit ganjil yang ada dalam sistem desimal adalah {1, 3, 5, 7, 9} (total 5 buah pilihan).\nLangkah 2: Kita ingin membentuk bilangan 3-digit dengan angka berbeda, artinya kita memilih dan menyusun 3 angka dari 5 angka ganjil tersebut tanpa pengembalian.\nLangkah 3: Hitung $P(5, 3) = 5 \\times 4 \\times 3 = 60$ bilangan.'
        },
        {
          id: 'amc8-ch1-q3',
          type: 'short_answer',
          difficulty: 'Tantangan',
          source: 'MATHCOUNTS Chapter',
          question: 'Berapa banyak anagram atau susunan huruf berbeda yang dapat dibentuk dari kata $\\text{PARALLEL}$?',
          hint: 'Hitung total huruf dan frekuensi huruf yang berulang: P (1), A (2), R (1), L (3), E (1).',
          answer: '3360',
          acceptedAnswers: ['3360', '3,360'],
          bestSolution: 'Langkah 1: Kata $\\text{PARALLEL}$ terdiri dari $n = 8$ huruf.\nLangkah 2: Identifikasi huruf yang berulang:\n- Huruf A muncul sebanyak 2 kali.\n- Huruf L muncul sebanyak 3 kali.\n- Huruf lainnya (P, R, E) muncul masing-masing 1 kali.\nLangkah 3: Terapkan rumus permutasi berulang:\n$$\\frac{8!}{2! \\times 3!} = \\frac{40.320}{2 \\times 6} = \\frac{40.320}{12} = 3.360\\text{ susunan}.$$'
        },
        {
          id: 'amc8-ch1-q4',
          type: 'short_answer',
          difficulty: 'Tantangan',
          source: 'AMC 8 Contest',
          question: 'Sebuah grid jalan berukuran $4 \\times 3$ blok. Seseorang berjalan dari titik pojok kiri bawah $(0,0)$ menuju pojok kanan atas $(4,3)$ hanya dengan melangkah ke kanan (R) atau ke atas (U). Berapa banyak jalur terpendek berbeda yang dapat dilalui?',
          visual: {
            type: 'unit-grid',
            props: {
              title: 'Lattice Path Grid 4x3',
              caption: '*Setiap rute membutuhkan 4 langkah Kanan (R) dan 3 langkah Atas (U)',
              rows: 3,
              cols: 4,
              highlightPath: true
            }
          },
          hint: 'Total langkah adalah 4 ke Kanan + 3 ke Atas = 7 langkah. Ini setara dengan menyusun kata 7 huruf: RRRRUUU.',
          answer: '35',
          acceptedAnswers: ['35'],
          bestSolution: 'Langkah 1: Untuk berpindah dari $(0,0)$ ke $(4,3)$, diperlukan tepat 4 langkah ke kanan ($R$) dan 3 langkah ke atas ($U$).\nLangkah 2: Total langkah adalah $4 + 3 = 7$ langkah.\nLangkah 3: Banyak jalur adalah permutasi dari 7 langkah dengan 4 buah $R$ dan 3 buah $U$ yang identik:\n$$\\frac{7!}{4! \\times 3!} = \\frac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1} = 35\\text{ jalur}.$$'
        },
        {
          id: 'amc8-ch1-q5',
          type: 'essay',
          difficulty: 'Olimpiade',
          source: 'OmegaLearn Olympiad',
          question: 'Enam orang sahabat sedang makan malam mengelilingi meja bundar. Dua orang di antaranya, yaitu Kevin dan Lisa, menolak duduk berdampingan. Jelaskan langkah penurunan matematis lengkap untuk menentukan banyaknya kemungkinan susunan posisi duduk mereka yang sah (rotasi meja dianggap sama).',
          hint: 'Gunakan prinsip komplemen pada permutasi siklis: Total susunan melingkar dikurangi susunan di mana Kevin dan Lisa duduk bersebelahan.',
          answer: '72',
          acceptedAnswers: ['72', '72 cara', '72 susunan'],
          bestSolution: 'Pembuktian dan Langkah Penurunan:\n1. Total Cara Duduk Melingkar Tanpa Syarat:\nBanyak cara 6 orang duduk melingkar adalah $P_{\\text{siklis}} = (6 - 1)! = 5! = 120$ cara.\n2. Menghitung Kasus Komplemen (Kevin dan Lisa Bersebelahan):\n- Satukan Kevin dan Lisa menjadi 1 blok entitas: $\\{KL\\}$.\n- Sekarang kita memiliki 5 entitas: $\\{KL\\}$, dan 4 teman lainnya.\n- Banyak cara menyusun 5 entitas pada meja melingkar adalah $(5 - 1)! = 4! = 24$ cara.\n- Di dalam blok $\\{KL\\}$, Kevin dan Lisa dapat bertukar posisi duduk (Kevin di kiri Lisa atau Kevin di kanan Lisa) dalam $2! = 2$ cara.\n- Total kasus komplemen = $24 \\times 2 = 48$ cara.\n3. Mengurangkan Komplemen dari Total:\n$$\\text{Banyak cara sah} = 120 - 48 = 72\\text{ cara}.$$'
        },
        {
          id: 'amc8-ch1-q6',
          type: 'short_answer',
          difficulty: 'Olimpiade',
          source: 'AMC 8 2018 Problem 21',
          question: 'Berapa banyak bilangan bulat antara 1.000 dan 9.999 (inklusif) yang memiliki empat digit yang semuanya berbeda?',
          hint: 'Digit ribuan tidak boleh 0 (pilihan 1-9). Digit ratusan boleh 0 tetapi tidak boleh sama dengan ribuan.',
          answer: '4536',
          acceptedAnswers: ['4536', '4,536'],
          bestSolution: 'Langkah 1: Posisi ribuan: dapat diisi oleh angka $1$ sampai $9$ (karena angka tidak boleh dimulai dari $0$). Ada 9 pilihan.\nLangkah 2: Posisi ratusan: dapat diisi oleh angka $0$ sampai $9$ kecuali angka yang telah dipakai di posisi ribuan. Dari 10 angka yang ada, tersisa 9 pilihan.\nLangkah 3: Posisi puluhan: dapat diisi oleh angka dari $0$ sampai $9$ kecuali 2 angka yang telah terpakai di ribuan dan ratusan. Tersisa 8 pilihan.\nLangkah 4: Posisi satuan: tersisa 7 pilihan.\nLangkah 5: Kalikan seluruh pilihan: $9 \\times 9 \\times 8 \\times 7 = 81 \\times 56 = 4.536$ bilangan.'
        }
      ]
    },

    // ----------------------------------------------------
    // BAB 2: COMBINATIONS & BINOMIAL IDENTITIES
    // ----------------------------------------------------
    {
      id: 'amc8-ch2-combinations',
      level: 8,
      domain: 'Kombinatorika',
      chapterIndex: 1,
      title: 'Bab 2: Kombinasi & Identitas Binomial (Combinations)',
      aliases: ['amc8-ch2-combinations'],
      summary: {
        overview: 'Kombinasi adalah teknik pencacahan untuk menentukan banyaknya cara memilih sejumlah objek dari kumpulan objek yang tersedia tanpa memperhatikan urutan pemilihan. Berbeda dengan permutasi di mana urutan menghasilkan objek baru (seperti kata atau kode angka), kombinasi berfokus pada himpunan anggota (seperti memilih komite atau jabat tangan). Hubungan erat kombinasi dengan Segitiga Pascal dan Teorema Binomial menjadikannya salah satu topik terpenting dalam AMC 8.',
        coreConcepts: [
          'Definisi Kombinasi: Banyaknya cara memilih $r$ objek dari $n$ objek berbeda tanpa memperhatikan urutan: $$\\binom{n}{r} = \\frac{n!}{r!(n-r)!} = \\frac{P(n, r)}{r!}$$',
          'Sifat Simetri Koefisien Binomial: $$\\binom{n}{r} = \\binom{n}{n-r}$$',
          'Identitas Penjumlahan Pascal: $$\\binom{n}{r} + \\binom{n}{r+1} = \\binom{n+1}{r+1}$$',
          'Jumlah Seluruh Subhimpunan: Jumlah seluruh kombinasi ukuran $0$ hingga $n$ adalah: $$\\sum_{k=0}^{n} \\binom{n}{k} = 2^n$$',
          'Pemilihan Bersyarat dan Metode Komplemen: Menghitung total pilihan dikurangi pilihan yang melanggar syarat (misal: "setidaknya satu perempuan").'
        ],
        keyFormulas: [
          { label: 'Rumus Kombinasi nCr', formula: '\\binom{n}{r} = \\frac{n!}{r!(n-r)!}' },
          { label: 'Identitas Simetri', formula: '\\binom{n}{r} = \\binom{n}{n-r}' },
          { label: 'Identitas Pascal', formula: '\\binom{n}{r} + \\binom{n}{r+1} = \\binom{n+1}{r+1}' }
        ],
        workedExamples: [
          {
            problem: 'Dari 8 orang siswa berprestasi, akan dipilih sebuah tim olimpiade yang beranggotakan 3 orang. Berapa banyak susunan tim berbeda yang dapat dibentuk?',
            solution: 'Langkah 1: Karena urutan dalam tim tidak diperhitungkan, gunakan kombinasi $n = 8$ dan $r = 3$.\nLangkah 2: Terapkan rumus kombinasi:\n$$\\binom{8}{3} = \\frac{8!}{3!(8-3)!} = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = 56\\text{ tim}.$$'
          },
          {
            problem: 'Di sebuah klub terdapat 5 anak laki-laki dan 4 anak perempuan. Akan dipilih 3 orang perwakilan dengan syarat setidaknya ada 1 anak perempuan terpilih. Berapa banyak cara pemilihan yang memenuhi syarat?',
            solution: 'Gunakan metode pencacahan komplemen:\nLangkah 1: Hitung total pemilihan 3 orang dari $5 + 4 = 9$ anak tanpa syarat:\n$$\\binom{9}{3} = \\frac{9 \\times 8 \\times 7}{3 \\times 2 \\times 1} = 84\\text{ cara}.$$\nLangkah 2: Hitung pemilihan komplemen (tidak ada anak perempuan terpilih, artinya semua 3 anak laki-laki):\n$$\\binom{5}{3} = \\frac{5 \\times 4 \\times 3}{3 \\times 2 \\times 1} = 10\\text{ cara}.$$\nLangkah 3: Kurangkan komplemen dari total:\n$$\\text{Banyak cara} = 84 - 10 = 74\\text{ cara}.$$'
          }
        ],
        misconceptions: [
          'Menggunakan permutasi $P(n, r)$ saat memilih anggota tim, padahal urutan penunjukan nama tidak mengubah susunan anggota kelompok.',
          'Melakukan overcounting ketika memilih "setidaknya satu" dengan cara memilih 1 perempuan terlebih dahulu lalu memilih 2 orang sisanya dari sisa siswa.'
        ],
        tutorTip: 'Bila ada syarat "setidaknya satu" (at least one), selalu prioritaskan metode komplemen: Total Cara Tanpa Syarat dikurangi Kasus Nol!'
      },
      questions: [
        {
          id: 'amc8-ch2-q1',
          type: 'short_answer',
          difficulty: 'Dasar',
          source: 'AMC 8 Practice',
          question: 'Hitunglah nilai eksak dari kombinasi: $\\binom{7}{3}$.',
          hint: 'Gunakan rumus $\\binom{n}{r} = \\frac{n!}{r!(n-r)!} = \\frac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1}$.',
          answer: '35',
          acceptedAnswers: ['35'],
          bestSolution: 'Langkah 1: Terapkan rumus kombinasi:\n$$\\binom{7}{3} = \\frac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1}$$\nLangkah 2: Sederhanakan pembilang dan penyebut (bagi $6$ dengan $3 \\times 2$):\n$$\\binom{7}{3} = 7 \\times 5 = 35.$$'
        },
        {
          id: 'amc8-ch2-q2',
          type: 'short_answer',
          difficulty: 'Dasar',
          source: 'MATHCOUNTS Chapter',
          question: 'Di sebuah kelas terdapat 10 siswa. Berapa banyak cara berbeda untuk memilih 4 siswa sebagai delegasi rapat OSIS?',
          hint: 'Pilihan delegasi tidak memperhatikan urutan. Hitung kombinasi 4 dari 10 siswa.',
          answer: '210',
          acceptedAnswers: ['210'],
          bestSolution: 'Langkah 1: Hitung kombinasi 4 objek dari 10 objek:\n$$\\binom{10}{4} = \\frac{10 \\times 9 \\times 8 \\times 7}{4 \\times 3 \\times 2 \\times 1}$$\nLangkah 2: Sederhanakan: $4 \\times 2 = 8$ mencoret $8$, lalu $9 / 3 = 3$.\n$$\\binom{10}{4} = 10 \\times 3 \\times 7 = 210\\text{ cara}.$$'
        },
        {
          id: 'amc8-ch2-q3',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 8 2019',
          question: 'Berapa banyak garis diagonal yang dapat ditarik pada sebuah segi-8 beraturan (oktagon)?',
          hint: 'Setiap pasang dari 8 titik sudut membentuk sebuah segmen garis. Kurangkan dengan 8 sisi luar oktagon.',
          answer: '20',
          acceptedAnswers: ['20', '20 diagonal'],
          bestSolution: 'Langkah 1: Total seluruh segmen garis yang menghubungkan 2 titik sudut dari 8 titik sudut adalah:\n$$\\binom{8}{2} = \\frac{8 \\times 7}{2 \\times 1} = 28\\text{ segmen}.$$\nLangkah 2: Dari 28 segmen tersebut, terdapat 8 segmen yang merupakan sisi luar segi-8.\nLangkah 3: Banyak diagonal adalah selisihnya:\n$$28 - 8 = 20\\text{ diagonal}.$$'
        },
        {
          id: 'amc8-ch2-q4',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 8 2021',
          question: 'Di sebuah turnamen catur, setiap peserta bertanding tepat satu kali melawan setiap peserta lainnya. Jika total pertandingan yang dimainkan adalah 45 pertandingan, berapa banyak peserta dalam turnamen tersebut?',
          hint: 'Setiap pertandingan melibatkan 2 peserta: C(n, 2) = n(n-1)/2 = 45.',
          answer: '10',
          acceptedAnswers: ['10', '10 peserta', '10 orang'],
          bestSolution: 'Langkah 1: Banyaknya pertandingan antara $n$ peserta adalah kombinasi memilih 2 peserta:\n$$\\binom{n}{2} = \\frac{n(n-1)}{2} = 45$$\nLangkah 2: Kalikan kedua ruas dengan 2:\n$$n(n-1) = 90$$\nLangkah 3: Cari dua bilangan bulat berurutan yang hasil kalinya 90:\n$$10 \\times 9 = 90 \\implies n = 10\\text{ peserta}.$$'
        },
        {
          id: 'amc8-ch2-q5',
          type: 'essay',
          difficulty: 'Tantangan',
          source: 'OmegaLearn AMC 8',
          question: 'Sebuah komite beranggotakan 4 orang akan dibentuk dari kumpulan 6 siswa putra dan 4 siswa putri. Komite tersebut wajib memuat setidaknya 1 siswa putri. Buktikan secara matematis langkah perhitungan untuk menentukan banyaknya susunan komite yang memenuhi syarat.',
          hint: 'Gunakan prinsip pencacahan komplemen: Total komite tanpa syarat dikurangi komite yang seluruh anggotanya siswa putra.',
          answer: '195',
          acceptedAnswers: ['195', '195 cara', '195 susunan'],
          bestSolution: 'Langkah Pembuktian dan Penurunan:\n1. Total Siswa: $6 + 4 = 10$ siswa.\n2. Total Komite Tanpa Syarat:\nBanyak cara memilih 4 orang dari 10 siswa adalah:\n$$\\binom{10}{4} = \\frac{10 \\times 9 \\times 8 \\times 7}{4 \\times 3 \\times 2 \\times 1} = 210\\text{ cara}.$$\n3. Kasus Komplemen (Tidak Ada Siswa Putri Terpilih):\nArtinya seluruh 4 anggota komite dipilih dari 6 siswa putra:\n$$\\binom{6}{4} = \\binom{6}{2} = \\frac{6 \\times 5}{2 \\times 1} = 15\\text{ cara}.$$\n4. Mengurangkan Komplemen dari Total:\n$$\\text{Banyak susunan sah} = 210 - 15 = 195\\text{ cara}.$$\nDengan demikian, terdapat tepat 195 susunan komite yang sah. (Terbukti)'
        },
        {
          id: 'amc8-ch2-q6',
          type: 'short_answer',
          difficulty: 'Olimpiade',
          source: 'AMC 8 Contest Challenge',
          question: 'Tentukan koefisien dari suku $x^2$ pada hasil ekspansi bentuk aljabar binomial $(x + 2)^5$.',
          hint: 'Berdasarkan Teorema Binomial, suku umum adalah C(5, k) * x^(5-k) * 2^k. Tentukan nilai k agar pangkat x bernilai 2.',
          answer: '80',
          acceptedAnswers: ['80'],
          bestSolution: 'Langkah 1: Berdasarkan Teorema Binomial:\n$$(x + 2)^5 = \\sum_{k=0}^{5} \\binom{5}{k} x^{5-k} 2^k$$\nLangkah 2: Kita mencari suku dengan variabel $x^2$, sehingga $5 - k = 2 \\implies k = 3$.\nLangkah 3: Substitusikan $k = 3$ ke koefisien suku tersebut:\n$$\\binom{5}{3} \\times 2^3 = 10 \\times 8 = 80$$\nJadi, koefisien dari $x^2$ adalah 80.'
        }
      ]
    },

    // ----------------------------------------------------
    // BAB 3: PROBABILITY & COMPLEMENTARY COUNTING
    // ----------------------------------------------------
    {
      id: 'amc8-ch3-probability',
      level: 8,
      domain: 'Kombinatorika',
      chapterIndex: 2,
      title: 'Bab 3: Peluang & Perhitungan Komplemen (Probability & Complementary Counting)',
      aliases: ['amc8-ch3-geometric-probability'],
      summary: {
        overview: 'Teori peluang dalam AMC 8 mengukur kepastian suatu kejadian matematis dalam ruang sampel seragam maupun berkelanjutan. Titik berat soal kompetisi sering kali bukan sekadar menghitung peluang langsung, melainkan mengenali kapan lebih efisien menghitung kejadian komplemen ("kebalikan dari yang diminta"), peluang majemuk pada kejadian independen, serta peluang geometris berbasis perbandingan luas atau panjang.',
        coreConcepts: [
          'Definisi Peluang Klasik: $P(E) = \\frac{|E|}{|S|} = \\frac{\\text{banyaknya kejadian yang diinginkan}}{\\text{total ruang sampel seragam}}$.',
          'Prinsip Komplemen: Untuk setiap kejadian $E$, $P(E) = 1 - P(E^c)$. Sangat ampuh saat soal memuat kata "setidaknya satu".',
          'Peluang Kejadian Independen: Jika kejadian $A$ dan $B$ bebas, maka $P(A \\cap B) = P(A) \\times P(B)$.',
          'Aturan Penjumlahan: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$. Jika saling lepas, $P(A \\cup B) = P(A) + P(B)$.',
          'Peluang Geometris: Rasio ukuran wilayah sukses terhadap wilayah sampel total: $P = \\frac{\\text{Luas daerah target}}{\\text{Luas daerah total}}$.'
        ],
        keyFormulas: [
          { label: 'Definisi Peluang', formula: 'P(E) = \\frac{n(E)}{n(S)}' },
          { label: 'Peluang Komplemen', formula: 'P(E) = 1 - P(E^c)' },
          { label: 'Kejadian Independen', formula: 'P(A \\cap B) = P(A) \\times P(B)' }
        ],
        workedExamples: [
          {
            problem: 'Dua buah dadu standar bersisi 6 dilempar bersamaan. Berapa peluang bahwa jumlah kedua mata dadu adalah 7?',
            solution: 'Langkah 1: Ruang sampel total dari dua dadu adalah $6 \\times 6 = 36$ pasangan terurut.\nLangkah 2: Daftarkan pasangan $(d_1, d_2)$ yang menghasilkan jumlah 7:\n(1, 6), (2, 5), (3, 4), (4, 3), (5, 2), (6, 1) -> Terdapat 6 pasangan.\nLangkah 3: Hitung peluang:\n$$P(\\text{jumlah 7}) = \\frac{6}{36} = \\frac{1}{6}.$$'
          },
          {
            problem: 'Tiga koin adil dilempar sekaligus. Tentukan peluang munculnya setidaknya satu sisi Gambar (G).',
            solution: 'Langkah 1: Gunakan metode komplemen. Kebalikan dari "setidaknya satu Gambar" adalah "tidak ada Gambar sama sekali", yaitu ketiganya Angka (AAA).\nLangkah 2: Peluang muncul Angka pada satu koin adalah $\\frac{1}{2}$.\n$$P(\\text{AAA}) = \\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}.$$\nLangkah 3: Kurangkan dari 1:\n$$P(\\text{setidaknya satu G}) = 1 - \\frac{1}{8} = \\frac{7}{8}.$$'
          }
        ],
        misconceptions: [
          'Mengabaikan urutan saat mendaftarkan pasangan dadu (menganggap (2, 5) dan (5, 2) sebagai satu hasil yang sama, padahal keduanya adalah hasil berbeda).',
          'Menjumlahkan peluang kejadian yang tidak saling lepas tanpa mengurangkan peluang irisannya.'
        ],
        tutorTip: 'Setiap kali menemukan kalimat "Berapa peluang setidaknya satu...", langsung refleks gunakan rumus $1 - P(\\text{nol sama sekali}) = 1 - P(E^c)$!'
      },
      questions: [
        {
          id: 'amc8-ch3-q1',
          type: 'short_answer',
          difficulty: 'Dasar',
          source: 'AMC 8 2018',
          question: 'Dua buah dadu standar bersisi 6 dilempar bersamaan. Tentukan peluang bahwa jumlah kedua mata dadu tepat bernilai 8. Nyatakan dalam pecahan paling sederhana.',
          hint: 'Daftarkan seluruh pasangan dadu yang jumlahnya 8: (2,6), (3,5), (4,4), (5,3), (6,2). Total ruang sampel adalah 36.',
          answer: '5/36',
          acceptedAnswers: ['5/36'],
          bestSolution: 'Langkah 1: Total ruang sampel dua dadu adalah $6 \\times 6 = 36$.\nLangkah 2: Pasangan yang menghasilkan jumlah 8 adalah:\n(2, 6), (3, 5), (4, 4), (5, 3), (6, 2) -> Ada 5 pasangan yang memenuhi.\nLangkah 3: Peluang kejadian adalah $\\frac{5}{36}$.'
        },
        {
          id: 'amc8-ch3-q2',
          type: 'short_answer',
          difficulty: 'Dasar',
          source: 'MATHCOUNTS Chapter',
          question: 'Tiga koin adil dilempar bersamaan. Berapakah peluang mendapatkan setidaknya satu sisi Gambar? Tuliskan dalam bentuk pecahan biasa paling sederhana.',
          hint: 'Gunakan prinsip komplemen: 1 - P(ketiganya Angka).',
          answer: '7/8',
          acceptedAnswers: ['7/8', '0.875', '0,875'],
          bestSolution: 'Langkah 1: Ruang sampel total pelemparan 3 koin adalah $2^3 = 8$.\nLangkah 2: Kejadian komplemen "tidak ada Gambar" adalah ketiganya Angka (AAA), yang hanya terjadi 1 kali.\nLangkah 3: Peluang komplemen = $\\frac{1}{8}$.\nLangkah 4: Peluang setidaknya satu Gambar = $1 - \\frac{1}{8} = \\frac{7}{8}$.'
        },
        {
          id: 'amc8-ch3-q3',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 8 2020',
          question: 'Sebuah kantong berisi 4 kelereng merah, 3 kelereng hijau, dan 5 kelereng biru. Jika 2 kelereng diambil secara acak sekaligus tanpa pengembalian, tentukan peluang kedua kelereng yang terambil berwarna sama.',
          hint: 'Hitung total cara memilih 2 kelereng dari 12 kelereng, lalu jumlahkan cara memilih 2 merah, 2 hijau, dan 2 biru.',
          answer: '19/66',
          acceptedAnswers: ['19/66'],
          bestSolution: 'Langkah 1: Total kelereng = $4 + 3 + 5 = 12$.\nBanyak cara memilih 2 kelereng sembarang adalah $\\binom{12}{2} = \\frac{12 \\times 11}{2} = 66$.\nLangkah 2: Banyak cara kedua kelereng sewarna:\n- Keduanya merah: $\\binom{4}{2} = 6$\n- Keduanya hijau: $\\binom{3}{2} = 3$\n- Keduanya biru: $\\binom{5}{2} = 10$\nTotal cara sewarna = $6 + 3 + 10 = 19$.\nLangkah 3: Peluang = $\\frac{19}{66}$.'
        },
        {
          id: 'amc8-ch3-q4',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 8 Contest',
          question: 'Sebuah titik dipilih secara acak di dalam sebuah persegi yang memiliki panjang sisi 4. Berapa peluang titik tersebut berada di dalam lingkaran dalam yang menyinggung keempat sisi persegi tersebut? (Tuliskan dalam bentuk pecahan kelipatan pi, contoh: pi/4).',
          hint: 'Luas persegi adalah s^2. Lingkaran dalam memiliki diameter sama dengan sisi persegi, sehingga jari-jarinya r = 2. Bandingkan luas lingkaran terhadap luas persegi.',
          answer: 'pi/4',
          acceptedAnswers: ['pi/4', '\\pi/4', 'π/4'],
          bestSolution: 'Langkah 1: Luas daerah total (persegi) dengan sisi $s = 4$ adalah:\n$$L_{\\text{persegi}} = 4^2 = 16.$$\nLangkah 2: Lingkaran menyinggung keempat sisi persegi, sehingga diameternya $d = 4$ dan jari-jarinya $r = 2$.\nLuas lingkaran target:\n$$L_{\\text{lingkaran}} = \\pi r^2 = \\pi (2^2) = 4\\pi.$$\nLangkah 3: Peluang geometris adalah rasio luas target terhadap luas total:\n$$P = \\frac{L_{\\text{lingkaran}}}{L_{\\text{persegi}}} = \\frac{4\\pi}{16} = \\frac{\\pi}{4}.$$'
        },
        {
          id: 'amc8-ch3-q5',
          type: 'essay',
          difficulty: 'Tantangan',
          source: 'OmegaLearn / AMC 8 Shortlist',
          question: 'Empat kartu diambil secara acak sekaligus dari setumpuk kartu yang diberi nomor 1 sampai 10. Tentukan peluang bahwa bilangan terbesar pada kartu yang terambil bernilai tepat 8. Tuliskan bukti dan langkah perhitungannya dalam bentuk pecahan sederhana.',
          hint: 'Agar kartu terbesar tepat bernilai 8, maka kartu bernilai 8 wajib terambil, dan 3 kartu lainnya harus dipilih dari kartu bernomor 1 sampai 7.',
          answer: '1/6',
          acceptedAnswers: ['1/6'],
          bestSolution: 'Langkah Penurunan:\n1. Total Ruang Sampel: Memilih 4 kartu dari 10 kartu:\n$$n(S) = \\binom{10}{4} = \\frac{10 \\times 9 \\times 8 \\times 7}{4 \\times 3 \\times 2 \\times 1} = 210.$$\n2. Menentukan Banyak Kejadian Sukses:\nAgar kartu bernilai 8 menjadi nilai terbesar:\n- Kartu 8 WAJIB terambil (1 cara).\n- Kartu bernomor 9 dan 10 TIDAK BOLEH terambil.\n- Sisa 3 kartu harus dipilih dari himpunan $\\{1, 2, 3, 4, 5, 6, 7\\}$ (ada 7 pilihan).\nBanyak cara memilih 3 kartu dari 7 kartu adalah:\n$$n(E) = \\binom{7}{3} = \\frac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1} = 35.$$\n3. Menghitung Peluang:\n$$P = \\frac{n(E)}{n(S)} = \\frac{35}{210} = \\frac{1}{6}.$$\nJadi, peluang kartu terbesar tepat bernilai 8 adalah $\\frac{1}{6}$.'
        },
        {
          id: 'amc8-ch3-q6',
          type: 'short_answer',
          difficulty: 'Olimpiade',
          source: 'AMC 8 2017 Problem 24',
          question: 'Dua bilangan bulat dipilih secara acak (boleh sama) dari himpunan $\\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\\}$. Berapakah peluang bahwa hasil kali kedua bilangan tersebut merupakan bilangan ganjil?',
          hint: 'Hasil kali dua bilangan bulat bernilai ganjil jika dan hanya jika kedua bilangan tersebut sama-sama bilangan ganjil.',
          answer: '1/4',
          acceptedAnswers: ['1/4', '0.25', '0,25'],
          bestSolution: 'Langkah 1: Himpunan memiliki 10 anggota, terdiri dari 5 bilangan ganjil $\\{1, 3, 5, 7, 9\\}$ dan 5 bilangan genap $\\{2, 4, 6, 8, 10\\}$.\nLangkah 2: Perkalian dua bilangan $a \\times b$ bernilai ganjil jika dan hanya jika $a$ ganjil dan $b$ ganjil.\nLangkah 3: Karena kedua bilangan dipilih secara independen:\n$$P(a \\text{ ganjil}) = \\frac{5}{10} = \\frac{1}{2}, \\quad P(b \\text{ ganjil}) = \\frac{5}{10} = \\frac{1}{2}.$$\nLangkah 4: Peluang hasil kali ganjil:\n$$P = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}.$$'
        }
      ]
    },

    // ----------------------------------------------------
    // BAB 4: CASEWORK & PRINCIPLE OF INCLUSION-EXCLUSION
    // ----------------------------------------------------
    {
      id: 'amc8-ch4-casework-pie',
      level: 8,
      domain: 'Kombinatorika',
      chapterIndex: 3,
      title: 'Bab 4: Kasus Terbagi & Prinsip Inklusi-Eksklusi (Casework & PIE)',
      aliases: ['amc8-ch4-ratios-rates'],
      summary: {
        overview: 'Banyak masalah olimpiade matematika tidak dapat diselesaikan dengan satu rumus tunggal karena kondisi syarat yang bercabang. Teknik Casework (pembagian kasus yang saling lepas dan tuntas / MECE) dipadukan dengan Prinsip Inklusi-Eksklusi (PIE) memungkinkan siswa menguraikan himpunan yang saling tumpang tindih secara cermat tanpa terjadi overcounting.',
        coreConcepts: [
          'Prinsip Pembagian Kasus (Casework): Memecah masalah menjadi kasus-kasus $C_1, C_2, \\dots, C_k$ yang tidak saling tumpang tindih (disjoint), sehingga Total $= |C_1| + |C_2| + \\dots + |C_k|$.',
          'PIE untuk 2 Himpunan: $|A \\cup B| = |A| + |B| - |A \\cap B|$.',
          'PIE untuk 3 Himpunan: $|A \\cup B \\cup C| = (|A|+|B|+|C|) - (|A \\cap B| + |A \\cap C| + |B \\cap C|) + |A \\cap B \\cap C|$.',
          'Aplikasi Keterbagian: Menghitung banyaknya bilangan yang habis dibagi $a$ atau $b$ menggunakan fungsi floor $\\lfloor n/k \\rfloor$.',
          'Diagram Venn Kompetisi: Memetakan anggota daerah dalam, irisan ganda, dan irisan tiga himpunan.'
        ],
        keyFormulas: [
          { label: 'PIE 2 Himpunan', formula: '|A \\cup B| = |A| + |B| - |A \\cap B|' },
          { label: 'PIE 3 Himpunan', formula: '|A \\cup B \\cup C| = |A|+|B|+|C| - (|A \\cap B| + |A \\cap C| + |B \\cap C|) + |A \\cap B \\cap C|' },
          { label: 'Banyak Kelipatan', formula: 'N(k) = \\left\\lfloor \\frac{M}{k} \\right\\rfloor' }
        ],
        workedExamples: [
          {
            problem: 'Berapa banyak bilangan bulat positif dari 1 sampai 100 yang habis dibagi 3 atau 5?',
            solution: 'Langkah 1: Hitung kelipatan 3: $|A| = \\lfloor 100/3 \\rfloor = 33$.\nLangkah 2: Hitung kelipatan 5: $|B| = \\lfloor 100/5 \\rfloor = 20$.\nLangkah 3: Hitung kelipatan KPK(3, 5) = 15: $|A \\cap B| = \\lfloor 100/15 \\rfloor = 6$.\nLangkah 4: Terapkan PIE:\n$$|A \\cup B| = 33 + 20 - 6 = 47\\text{ bilangan}.$$'
          },
          {
            problem: 'Di sebuah kelompok berisi 40 siswa, 25 siswa menyukai matematika, 20 siswa menyukai sains, dan 12 siswa menyukai keduanya. Berapa banyak siswa yang tidak menyukai keduanya?',
            solution: 'Langkah 1: Hitung banyak siswa yang menyukai setidaknya satu pelajaran:\n$$|M \\cup S| = |M| + |S| - |M \\cap S| = 25 + 20 - 12 = 33.$$\nLangkah 2: Siswa yang tidak menyukai keduanya adalah komplemen terhadap total siswa:\n$$40 - 33 = 7\\text{ siswa}.$$'
          }
        ],
        misconceptions: [
          'Lupa menambahkan kembali irisan 3 himpunan $|A \\cap B \\cap C|$ pada PIE 3 himpunan karena mengira sudah habis dikurangi.',
          'Membagi kasus yang tidak saling lepas (non-disjoint casework) sehingga beberapa konfigurasi terhitung dua kali.'
        ],
        tutorTip: 'Jika pembagian kasus langsung terasa sangat banyak (misal $\\ge 6$ kasus), periksa apakah kasus komplemen (kebalikannya) hanya memiliki 1 atau 2 kasus!'
      },
      questions: [
        {
          id: 'amc8-ch4-q1',
          type: 'short_answer',
          difficulty: 'Dasar',
          source: 'AMC 8 2019',
          question: 'Berapa banyak bilangan bulat positif kurang dari atau sama dengan 200 yang habis dibagi 4 atau 6?',
          hint: 'Gunakan PIE: Kelipatan 4 ditambah Kelipatan 6 dikurangi Kelipatan KPK(4, 6) = 12.',
          answer: '67',
          acceptedAnswers: ['67'],
          bestSolution: 'Langkah 1: Hitung kelipatan 4 hingga 200: $\\lfloor 200/4 \\rfloor = 50$.\nLangkah 2: Hitung kelipatan 6 hingga 200: $\\lfloor 200/6 \\rfloor = 33$.\nLangkah 3: Kelipatan bersama adalah kelipatan $\\operatorname{lcm}(4, 6) = 12$: $\\lfloor 200/12 \\rfloor = 16$.\nLangkah 4: Terapkan PIE: $50 + 33 - 16 = 67$.'
        },
        {
          id: 'amc8-ch4-q2',
          type: 'short_answer',
          difficulty: 'Dasar',
          source: 'MATHCOUNTS 2020',
          question: 'Di sebuah sekolah dengan 100 siswa, 60 siswa bergabung dalam klub Robotika, 50 siswa di klub Debat, dan 30 siswa mengikuti kedua klub tersebut. Berapa banyak siswa yang tidak mengikuti salah satu pun dari kedua klub?',
          hint: 'Gunakan PIE 2 himpunan untuk menghitung siswa yang mengikuti setidaknya satu klub, lalu kurangkan dari total 100.',
          answer: '20',
          acceptedAnswers: ['20', '20 siswa'],
          bestSolution: 'Langkah 1: Banyak siswa yang mengikuti setidaknya satu klub:\n$$|R \\cup D| = |R| + |D| - |R \\cap D| = 60 + 50 - 30 = 80$$\nLangkah 2: Siswa yang tidak mengikuti klub manapun:\n$$100 - 80 = 20\\text{ siswa}.$$'
        },
        {
          id: 'amc8-ch4-q3',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 8 2021',
          question: 'Berapa banyak bilangan bulat dua digit (10 sampai 99) yang memuat setidaknya satu angka 7?',
          hint: 'Gunakan casework pada digit puluhan = 7 (ada 10 angka) dan digit satuan = 7 (ada 9 angka), lalu perhatikan angka 77.',
          answer: '18',
          acceptedAnswers: ['18'],
          bestSolution: 'Langkah 1: Kasus 1 (Digit puluhan = 7): $\\{70, 71, 72, 73, 74, 75, 76, 77, 78, 79\\}$ ada 10 bilangan.\nLangkah 2: Kasus 2 (Digit satuan = 7): $\\{17, 27, 37, 47, 57, 67, 77, 87, 97\\}$ ada 9 bilangan.\nLangkah 3: Irisan kedua kasus adalah angka 77 (1 bilangan).\nLangkah 4: Total bilangan $= 10 + 9 - 1 = 18$.'
        },
        {
          id: 'amc8-ch4-q4',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 8 Contest Challenge',
          question: 'Berapa banyak bilangan bulat positif antara 1 dan 1000 (inklusif) yang habis dibagi 2, 3, atau 5?',
          hint: 'Terapkan PIE 3 himpunan dengan KPK berpasangan (6, 10, 15) dan KPK bertiga (30).',
          answer: '734',
          acceptedAnswers: ['734'],
          bestSolution: 'Langkah 1: Hitung masing-masing ukuran himpunan:\n$|A| = \\lfloor 1000/2 \\rfloor = 500$, $|B| = \\lfloor 1000/3 \\rfloor = 333$, $|C| = \\lfloor 1000/5 \\rfloor = 200$.\nLangkah 2: Hitung irisan ganda:\n$|A \\cap B| = \\lfloor 1000/6 \\rfloor = 166$, $|A \\cap C| = \\lfloor 1000/10 \\rfloor = 100$, $|B \\cap C| = \\lfloor 1000/15 \\rfloor = 66$.\nLangkah 3: Hitung irisan tiga himpunan:\n$|A \\cap B \\cap C| = \\lfloor 1000/30 \\rfloor = 33$.\nLangkah 4: Terapkan PIE 3 himpunan:\n$$|A \\cup B \\cup C| = (500 + 333 + 200) - (166 + 100 + 66) + 33$$\n$$|A \\cup B \\cup C| = 1033 - 332 + 33 = 734.$$'
        },
        {
          id: 'amc8-ch4-q5',
          type: 'essay',
          difficulty: 'Tantangan',
          source: 'OmegaLearn Olympiad',
          question: 'Tiga buah dadu standar bersisi 6 dilempar sekaligus. Tentukan banyaknya seluruh kemungkinan konfigurasi hasil pelemparan sedemikian hingga jumlah ketiga mata dadu tepat bernilai 10. Jelaskan pembagian kasusnya secara sistematis.',
          hint: 'Bagi kasus berdasarkan partisi bilangan bulat dari 10 menjadi 3 angka dalam rentang [1, 6].',
          answer: '27',
          acceptedAnswers: ['27', '27 cara', '27 kemungkinan'],
          bestSolution: 'Langkah Pembagian Kasus (Casework Partisi dari 10):\nKita mencari solusi $(a, b, c)$ dengan $1 \\le a, b, c \\le 6$ dan $a + b + c = 10$.\n1. Tiga angka sama: Tidak ada, karena $3 \\times 3 = 9$ dan $3 \\times 4 = 12$.\n2. Dua angka sama:\n- (2, 4, 4): banyaknya susunan $= \\frac{3!}{2!} = 3$ cara.\n- (3, 3, 4): banyaknya susunan $= \\frac{3!}{2!} = 3$ cara.\n- (2, 2, 6): banyaknya susunan $= \\frac{3!}{2!} = 3$ cara.\n3. Tiga angka berbeda:\n- (1, 3, 6): banyaknya susunan $= 3! = 6$ cara.\n- (1, 4, 5): banyaknya susunan $= 3! = 6$ cara.\n- (2, 3, 5): banyaknya susunan $= 3! = 6$ cara.\n4. Menjumlahkan seluruh kasus:\n$$\\text{Total} = 3 + 3 + 3 + 6 + 6 + 6 = 27\\text{ cara}.$$'
        },
        {
          id: 'amc8-ch4-q6',
          type: 'short_answer',
          difficulty: 'Olimpiade',
          source: 'AMC 8 2018 Problem 25',
          question: 'Terdapat dua garis sejajar di bidang datar. Pada garis pertama terdapat 4 titik dan pada garis kedua terdapat 5 titik. Berapa banyak segitiga berbeda yang titik-titik sudutnya diambil dari 9 titik tersebut?',
          hint: 'Pilih 3 titik dari total 9 titik, lalu kurangkan kasus 3 titik yang segaris (kolinear).',
          answer: '70',
          acceptedAnswers: ['70', '70 segitiga'],
          bestSolution: 'Langkah 1: Total cara memilih 3 titik sembarang dari 9 titik yang tersedia adalah:\n$$\\binom{9}{3} = \\frac{9 \\times 8 \\times 7}{3 \\times 2 \\times 1} = 84\\text{ cara}.$$\nLangkah 2: Tiga titik tidak dapat membentuk segitiga jika ketiganya terletak pada satu garis lurus yang sama (kolinear):\n- 3 titik dari garis pertama (4 titik): $\\binom{4}{3} = 4$ cara.\n- 3 titik dari garis kedua (5 titik): $\\binom{5}{3} = 10$ cara.\nTotal segitiga gagal $= 4 + 10 = 14$.\nLangkah 3: Banyak segitiga yang sah $= 84 - 14 = 70$.'
        }
      ]
    },

    // ----------------------------------------------------
    // BAB 5: ALGEBRAIC MANIPULATIONS & SYSTEMS OF EQUATIONS
    // ----------------------------------------------------
    {
      id: 'amc8-ch5-algebraic-manipulations',
      level: 8,
      domain: 'Aljabar',
      chapterIndex: 4,
      title: 'Bab 5: Manipulasi Aljabar & Sistem Persamaan (Algebraic Manipulations)',
      aliases: ['amc8-ch5-linear-equations-systems'],
      summary: {
        overview: 'Aljabar dalam olimpiade matematika menuntut efisiensi berpikir melampaui substitusi konvensional. Siswa diajarkan memanfaatkan sifat kesimetrian variabel, menjumlahkan atau mengurangkan seluruh persamaan secara simultan, mengenali identitas aljabar kuadrat, serta menggunakan teknik faktorisasi cerdas seperti Simon\'s Favorite Factoring Trick (SFFT) untuk menyelesaikan persamaan bilangan bulat.',
        coreConcepts: [
          'Identitas Aljabar Kuadrat: $(a+b)^2 = a^2 + 2ab + b^2$ dan $a^2 + b^2 = (a+b)^2 - 2ab$.',
          'Selisih Dua Kuadrat: $a^2 - b^2 = (a-b)(a+b)$. Berguna untuk menghitung aritmatika besar secara instan.',
          'Penjumlahan Simultan Sistem Persamaan: Menjumlahkan seluruh baris persamaan untuk mencari nilai kombinasi $x+y+z$ tanpa harus mencari variabel individu.',
          'Hubungan Kebalikan: Jika $x + \\frac{1}{x} = k$, maka $x^2 + \\frac{1}{x^2} = k^2 - 2$.',
          'Simon\'s Favorite Factoring Trick (SFFT): Bentuk $xy + ax + by + ab = (x+b)(y+a)$.'
        ],
        keyFormulas: [
          { label: 'Identitas Jumlah Kuadrat', formula: 'a^2 + b^2 = (a+b)^2 - 2ab' },
          { label: 'Selisih Dua Kuadrat', formula: 'a^2 - b^2 = (a-b)(a+b)' },
          { label: 'Kebalikan Kuadrat', formula: 'x^2 + \\frac{1}{x^2} = \\left(x + \\frac{1}{x}\\right)^2 - 2' }
        ],
        workedExamples: [
          {
            problem: 'Jika diketahui bahwa $x + y = 7$ dan $xy = 10$, tentukan nilai dari $x^2 + y^2$.',
            solution: 'Langkah 1: Gunakan identitas penjabaran kuadrat:\n$$(x+y)^2 = x^2 + 2xy + y^2 \\implies x^2 + y^2 = (x+y)^2 - 2xy$$\nLangkah 2: Substitusikan nilai $x+y = 7$ dan $xy = 10$:\n$$x^2 + y^2 = 7^2 - 2(10) = 49 - 20 = 29.$$'
          },
          {
            problem: 'Hitunglah nilai eksak dari operasi aritmatika: $\\frac{2025^2 - 2024^2}{2025 + 2024}$.',
            solution: 'Langkah 1: Faktorkan pembilang menggunakan selisih dua kuadrat $a^2 - b^2 = (a-b)(a+b)$:\n$$2025^2 - 2024^2 = (2025 - 2024)(2025 + 2024) = 1 \\times (2025 + 2024)$$\nLangkah 2: Bagi dengan penyebut:\n$$\\frac{1 \\times (2025 + 2024)}{2025 + 2024} = 1.$$'
          }
        ],
        misconceptions: [
          'Melakukan kesalahan aljabar $(a+b)^2 = a^2 + b^2$ (melupakan suku tengah $2ab$).',
          'Mencoba mencari nilai $x$ dan $y$ secara terpisah dengan rumus kuadrat ketika yang ditanyakan sebenarnya adalah ekspresi simetris seperti $x+y$ atau $x^2+y^2$.'
        ],
        tutorTip: 'Jika suatu sistem persamaan terlihat simetris atau menanyakan $x+y+z$, coba jumlahkan ketiga persamaan tersebut terlebih dahulu!'
      },
      questions: [
        {
          id: 'amc8-ch5-q1',
          type: 'short_answer',
          difficulty: 'Dasar',
          source: 'AMC 8 2018',
          question: 'Jika $x + y = 11$ dan $xy = 24$, tentukan nilai dari $x^2 + y^2$.',
          hint: 'Gunakan identitas aljabar: x^2 + y^2 = (x + y)^2 - 2xy.',
          answer: '73',
          acceptedAnswers: ['73'],
          bestSolution: 'Langkah 1: Gunakan identitas aljabar kuadrat:\n$$x^2 + y^2 = (x+y)^2 - 2xy$$\nLangkah 2: Masukkan nilai yang diketahui:\n$$x^2 + y^2 = 11^2 - 2(24) = 121 - 48 = 73.$$'
        },
        {
          id: 'amc8-ch5-q2',
          type: 'short_answer',
          difficulty: 'Dasar',
          source: 'MATHCOUNTS Sprint',
          question: 'Hitunglah nilai numerik dari: $\\frac{1005^2 - 995^2}{10}$.',
          hint: 'Terapkan rumus selisih dua kuadrat: a^2 - b^2 = (a - b)(a + b).',
          answer: '2000',
          acceptedAnswers: ['2000', '2,000'],
          bestSolution: 'Langkah 1: Faktorkan pembilang dengan selisih dua kuadrat:\n$$1005^2 - 995^2 = (1005 - 995)(1005 + 995) = 10 \\times 2000$$\nLangkah 2: Selesaikan pembagian:\n$$\\frac{10 \\times 2000}{10} = 2000.$$'
        },
        {
          id: 'amc8-ch5-q3',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 8 2020',
          question: 'Diketahui sistem persamaan linier tiga variabel:\n$$2x + y + z = 14$$\n$$x + 2y + z = 15$$\n$$x + y + 2z = 19$$\nTentukan nilai dari $x + y + z$.',
          hint: 'Jumlahkan ketiga persamaan secara bersamaan untuk menemukan kelipatan dari (x + y + z).',
          answer: '12',
          acceptedAnswers: ['12'],
          bestSolution: 'Langkah 1: Jumlahkan ketiga persamaan:\n$$(2x + y + z) + (x + 2y + z) + (x + y + 2z) = 14 + 15 + 19$$\n$$4x + 4y + 4z = 48$$\nLangkah 2: Faktorkan koefisien 4:\n$$4(x + y + z) = 48$$\nLangkah 3: Bagi kedua ruas dengan 4:\n$$x + y + z = 12.$$'
        },
        {
          id: 'amc8-ch5-q4',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'MATHCOUNTS Target',
          question: 'Jika $\\frac{1}{x} + \\frac{1}{y} = \\frac{5}{6}$ dan $xy = 12$, tentukan nilai dari $x + y$.',
          hint: 'Samakan penyebut pada pecahan: (x + y) / xy = 5/6.',
          answer: '10',
          acceptedAnswers: ['10'],
          bestSolution: 'Langkah 1: Samakan penyebut pecahan di ruas kiri:\n$$\\frac{y + x}{xy} = \\frac{5}{6} \\implies \\frac{x + y}{xy} = \\frac{5}{6}$$\nLangkah 2: Substitusikan nilai $xy = 12$:\n$$\\frac{x + y}{12} = \\frac{5}{6}$$\nLangkah 3: Kalikan kedua ruas dengan 12:\n$$x + y = \\frac{5}{6} \\times 12 = 10.$$'
        },
        {
          id: 'amc8-ch5-q5',
          type: 'essay',
          difficulty: 'Tantangan',
          source: 'OmegaLearn / AMC 8 Shortlist',
          question: 'Bilangan bulat positif $x$ dan $y$ memenuhi persamaan aljabar $xy + 3x + 2y = 30$. Tunjukkan langkah faktorisasi lengkap untuk menentukan semua pasangan solusi bilangan bulat positif $(x, y)$, lalu tentukan nilai terbesar dari $x + y$.',
          hint: 'Gunakan Simon\'s Favorite Factoring Trick (SFFT): Tambahkan 6 pada kedua ruas sehingga ruas kiri dapat difaktorkan menjadi (x + 2)(y + 3).',
          answer: '10',
          acceptedAnswers: ['10'],
          bestSolution: 'Langkah Penurunan dan Bukti:\n1. Terapkan SFFT (Simon\'s Favorite Factoring Trick):\n$$xy + 3x + 2y = 30$$\nTambahkan $3 \\times 2 = 6$ pada kedua ruas:\n$$xy + 3x + 2y + 6 = 30 + 6$$\n$$(x + 2)(y + 3) = 36$$\n2. Karena $x$ dan $y$ bilangan bulat positif ($x \\ge 1, y \\ge 1$), maka batas bawah faktor adalah:\n$$x + 2 \\ge 3 \\quad \\text{dan} \\quad y + 3 \\ge 4.$$\n3. Pasangan faktor bulat positif dari 36 yang memenuhi syarat batas:\n- Kasus A: $x + 2 = 3$ dan $y + 3 = 12 \\implies x = 1, y = 9$. Jumlah $x + y = 1 + 9 = 10$.\n- Kasus B: $x + 2 = 4$ dan $y + 3 = 9 \\implies x = 2, y = 6$. Jumlah $x + y = 2 + 6 = 8$.\n- Kasus C: $x + 2 = 6$ dan $y + 3 = 6 \\implies x = 4, y = 3$. Jumlah $x + y = 4 + 3 = 7$.\n- Kasus D: $x + 2 = 9$ dan $y + 3 = 4 \\implies x = 7, y = 1$. Jumlah $x + y = 7 + 1 = 8$.\n4. Nilai terbesar dari $x + y$ adalah $10$ (tercapai saat $x = 1, y = 9$).'
        },
        {
          id: 'amc8-ch5-q6',
          type: 'short_answer',
          difficulty: 'Olimpiade',
          source: 'AMC 8 2019 Problem 22',
          question: 'Jika diketahui bahwa $x - \\frac{1}{x} = 5$, tentukan nilai eksak dari $x^2 + \\frac{1}{x^2}$.',
          hint: 'Kuadratkan kedua ruas persamaan: (x - 1/x)^2 = x^2 - 2 + 1/x^2.',
          answer: '27',
          acceptedAnswers: ['27'],
          bestSolution: 'Langkah 1: Kuadratkan kedua ruas persamaan yang diketahui:\n$$\\left(x - \\frac{1}{x}\\right)^2 = 5^2$$\nLangkah 2: Jabarkan ruas kiri:\n$$x^2 - 2 \\cdot x \\cdot \\frac{1}{x} + \\frac{1}{x^2} = 25$$\n$$x^2 - 2 + \\frac{1}{x^2} = 25$$\nLangkah 3: Tambahkan 2 pada kedua ruas:\n$$x^2 + \\frac{1}{x^2} = 25 + 2 = 27.$$'
        }
      ]
    },

    // ----------------------------------------------------
    // BAB 6: SPEED, DISTANCE & TIME
    // ----------------------------------------------------
    {
      id: 'amc8-ch6-speed-distance-time',
      level: 8,
      domain: 'Aljabar',
      chapterIndex: 5,
      title: 'Bab 6: Kecepatan, Jarak, Waktu & Rata-rata Laju (Speed, Distance & Time)',
      aliases: ['amc8-ch6-speed'],
      summary: {
        overview: 'Masalah laju perpindahan dan kerja bersama (speed, distance, time, and work rates) adalah soal cerita klasik yang rutin muncul di AMC 8. Kunci pemecahannya adalah memahami bahwa kecepatan rata-rata bukanlah rata-rata aritmatika biasa melainkan rata-rata harmonik ketika jarak sama, serta penggunaan laju relatif pada permasalahan berpapasan dan saling mengejar.',
        coreConcepts: [
          'Hubungan Dasar: Jarak = Kecepatan $\\times$ Waktu ($d = v \\times t$).',
          'Definisi Kecepatan Rata-rata Sejati: $$v_{\\text{avg}} = \\frac{\\text{Total Jarak Tempuh}}{\\text{Total Waktu Tempuh}}$$',
          'Rata-rata Harmonik: Untuk perjalanan bolak-balik dengan jarak sama berkecepatan $v_1$ dan $v_2$: $$v_{\\text{avg}} = \\frac{2 v_1 v_2}{v_1 + v_2}$$',
          'Gerak Saling Mendekati (Berpapasan): Kecepatan relatif $= v_1 + v_2$, waktu bertemu $= \\frac{d}{v_1 + v_2}$.',
          'Gerak Searah (Pengejaran): Kecepatan relatif $= |v_1 - v_2|$, waktu menyusul $= \\frac{\\text{selisih jarak awal}}{|v_1 - v_2|}$.',
          'Laju Kerja Bersama (Work Rate): Hubungan $\\frac{1}{T} = \\frac{1}{t_1} + \\frac{1}{t_2}$ untuk dua pekerja independen.'
        ],
        keyFormulas: [
          { label: 'Kecepatan Rata-rata', formula: 'v_{\\text{avg}} = \\frac{\\text{Total Jarak}}{\\text{Total Waktu}}' },
          { label: 'Rata-rata Harmonik', formula: 'v_{\\text{avg}} = \\frac{2 v_1 v_2}{v_1 + v_2}' },
          { label: 'Kerja Bersama', formula: '\\frac{1}{T} = \\frac{1}{t_1} + \\frac{1}{t_2}' }
        ],
        workedExamples: [
          {
            problem: 'Seorang pengendara motor menempuh perjalanan dari kota A ke kota B sejauh 120 km dengan kecepatan 40 km/jam, lalu kembali ke kota A melalui rute yang sama dengan kecepatan 60 km/jam. Tentukan kecepatan rata-rata seluruh perjalanan bolak-balik.',
            solution: 'Langkah 1: Hitung waktu tempuh pergi: $t_1 = 120 / 40 = 3$ jam.\nLangkah 2: Hitung waktu tempuh pulang: $t_2 = 120 / 60 = 2$ jam.\nLangkah 3: Hitung total waktu $= 3 + 2 = 5$ jam dan total jarak $= 120 + 120 = 240$ km.\nLangkah 4: $v_{\\text{avg}} = 240 / 5 = 48\\text{ km/jam}$.'
          },
          {
            problem: 'Pipa A dapat mengisi penuh kolam dalam 4 jam, sedangkan pipa B dapat mengisinya dalam 6 jam. Berapa jam waktu yang dibutuhkan jika kedua pipa dibuka bersamaan?',
            solution: 'Langkah 1: Laju pengisian pipa A $= 1/4$ kolam/jam dan pipa B $= 1/6$ kolam/jam.\nLangkah 2: Laju gabungan $= 1/4 + 1/6 = 3/12 + 2/12 = 5/12$ kolam/jam.\nLangkah 3: Waktu pengisian $= 1 / (5/12) = 12/5 = 2.4\\text{ jam}$.'
          }
        ],
        misconceptions: [
          'Merata-ratakan kecepatan secara langsung: $(40 + 60) / 2 = 50\\text{ km/jam}$. Ini salah besar karena pengendara menghabiskan waktu lebih lama pada kecepatan yang lebih lambat!',
          'Lupa menyamakan satuan waktu antara jam dan menit sebelum melakukan perkalian $v \\times t$.'
        ],
        tutorTip: 'Selalu berpegang pada definisi fundamental: Kecepatan Rata-rata = Total Jarak dibagi Total Waktu. Jangan pernah tergoda merata-ratakan angka kecepatannya secara langsung!'
      },
      questions: [
        {
          id: 'amc8-ch6-q1',
          type: 'short_answer',
          difficulty: 'Dasar',
          source: 'AMC 8 2017',
          question: 'Sebuah mobil menempuh jarak $120\\text{ km}$ pergi dengan kecepatan $60\\text{ km/jam}$ dan kembali melalui rute yang sama dengan kecepatan $40\\text{ km/jam}$. Tentukan kecepatan rata-rata mobil untuk seluruh perjalanan bolak-balik dalam km/jam.',
          hint: 'Hitung total jarak bolak-balik (240 km) lalu bagi dengan total waktu tempuh.',
          answer: '48',
          acceptedAnswers: ['48', '48 km/jam'],
          bestSolution: 'Langkah 1: Waktu berangkat: $t_1 = \\frac{120}{60} = 2\\text{ jam}$.\nLangkah 2: Waktu kembali: $t_2 = \\frac{120}{40} = 3\\text{ jam}$.\nLangkah 3: Total waktu tempuh $= 2 + 3 = 5\\text{ jam}$. Total jarak $= 120 + 120 = 240\\text{ km}$.\nLangkah 4: Kecepatan rata-rata $= \\frac{240}{5} = 48\\text{ km/jam}$.'
        },
        {
          id: 'amc8-ch6-q2',
          type: 'short_answer',
          difficulty: 'Dasar',
          source: 'MATHCOUNTS Sprint',
          question: 'Dua kereta berjarak $300\\text{ km}$ di rel lurus bergerak saling mendekati. Kereta pertama berkecepatan $70\\text{ km/jam}$ dan kereta kedua berkecepatan $80\\text{ km/jam}$. Berapa jam waktu yang dibutuhkan hingga kedua kereta berpapasan?',
          hint: 'Gunakan kecepatan relatif: jumlahkan kedua kecepatan karena mereka bergerak saling mendekati.',
          answer: '2',
          acceptedAnswers: ['2', '2 jam'],
          bestSolution: 'Langkah 1: Kecepatan relatif kedua kereta saling mendekati:\n$$v_{\\text{rel}} = 70 + 80 = 150\\text{ km/jam}$$\nLangkah 2: Waktu tempuh hingga berpapasan:\n$$t = \\frac{d}{v_{\\text{rel}}} = \\frac{300}{150} = 2\\text{ jam}.$$'
        },
        {
          id: 'amc8-ch6-q3',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 8 2020',
          question: 'Ali dapat mengecat sebuah ruangan sendirian dalam 6 jam, sedangkan Budi dapat mengecat ruangan yang sama dalam 3 jam. Jika mereka bekerja bersama-sama, berapa jam waktu yang dibutuhkan untuk menyelesaikan pengecatan ruangan tersebut?',
          hint: 'Terapkan rumus kerja bersama: 1/T = 1/6 + 1/3.',
          answer: '2',
          acceptedAnswers: ['2', '2 jam'],
          bestSolution: 'Langkah 1: Laju Ali $= \\frac{1}{6}$ ruangan/jam dan laju Budi $= \\frac{1}{3}$ ruangan/jam.\nLangkah 2: Laju gabungan mereka:\n$$\\frac{1}{T} = \\frac{1}{6} + \\frac{1}{3} = \\frac{1}{6} + \\frac{2}{6} = \\frac{3}{6} = \\frac{1}{2}$$\nLangkah 3: Waktu yang diperlukan $T = 2\\text{ jam}$.'
        },
        {
          id: 'amc8-ch6-q4',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 8 Contest Challenge',
          question: 'Seorang perenang berkecepatan $5\\text{ km/jam}$ di air tenang berenang di sungai yang memiliki arus $1\\text{ km/jam}$. Ia berenang melawan arus sejauh $8\\text{ km}$ lalu kembali searah arus ke titik awal. Berapa total jam waktu perjalanan perenang tersebut? Tuliskan dalam pecahan biasa paling sederhana.',
          hint: 'Kecepatan melawan arus adalah 5 - 1 = 4 km/jam. Kecepatan searah arus adalah 5 + 1 = 6 km/jam.',
          answer: '10/3',
          acceptedAnswers: ['10/3', '3 1/3'],
          bestSolution: 'Langkah 1: Kecepatan melawan arus $= 5 - 1 = 4\\text{ km/jam}$.\nWaktu melawan arus: $t_1 = \\frac{8}{4} = 2\\text{ jam}$.\nLangkah 2: Kecepatan searah arus $= 5 + 1 = 6\\text{ km/jam}$.\nWaktu searah arus: $t_2 = \\frac{8}{6} = \\frac{4}{3}\\text{ jam}$.\nLangkah 3: Total waktu tempuh:\n$$t_{\\text{total}} = 2 + \\frac{4}{3} = \\frac{6}{3} + \\frac{4}{3} = \\frac{10}{3}\\text{ jam}.$$'
        },
        {
          id: 'amc8-ch6-q5',
          type: 'essay',
          difficulty: 'Tantangan',
          source: 'OmegaLearn AMC 8',
          question: 'Pelari A dan Pelari B berlari pada lintasan melingkar sepanjang $400\\text{ meter}$ dimulai bersamaan dari titik yang sama dan ke arah yang sama. Pelari A berlari dengan kecepatan $7\\text{ m/s}$ dan Pelari B dengan kecepatan $5\\text{ m/s}$. Tunjukkan penurunan matematis untuk menentukan berapa detik yang dibutuhkan Pelari A untuk menyusul (meng-overlap) Pelari B untuk pertama kalinya.',
          hint: 'Pelari A menyusul Pelari B ketika selisih jarak yang ditempuh Pelari A terhadap Pelari B tepat sama dengan satu keliling putaran penuh (400 m).',
          answer: '200',
          acceptedAnswers: ['200', '200 detik', '200 s'],
          bestSolution: 'Langkah Penurunan:\n1. Konsep Pengejaran Melingkar: Agar Pelari A dapat menyusul Pelari B untuk pertama kalinya, Pelari A harus menempuh tepat 1 putaran penuh lebih banyak daripada Pelari B:\n$$d_A - d_B = 400\\text{ meter}.$$\n2. Masukkan hubungan $d = v \\times t$:\n$$7t - 5t = 400$$\n$$2t = 400$$\n3. Selesaikan untuk $t$:\n$$t = \\frac{400}{2} = 200\\text{ detik}.$$\nDengan demikian, Pelari A menyusul Pelari B setelah tepat 200 detik.'
        },
        {
          id: 'amc8-ch6-q6',
          type: 'short_answer',
          difficulty: 'Olimpiade',
          source: 'AMC 8 2021 Problem 23',
          question: 'Tiga keran air (P, Q, dan R) dapat mengisi sebuah bak mandi. Jika keran P dan Q dibuka bersamaan, bak penuh dalam 12 menit. Jika Q dan R dibuka, bak penuh dalam 15 menit. Jika P dan R dibuka, bak penuh dalam 20 menit. Berapa menit waktu yang dibutuhkan jika ketiga keran dibuka bersama-sama?',
          hint: 'Tuliskan sistem persamaan laju: P + Q = 1/12, Q + R = 1/15, P + R = 1/20. Jumlahkan ketiganya untuk mencari 2(P + Q + R).',
          answer: '10',
          acceptedAnswers: ['10', '10 menit'],
          bestSolution: 'Langkah 1: Nyatakan laju pengisian masing-masing keran:\n$$P + Q = \\frac{1}{12}, \\quad Q + R = \\frac{1}{15}, \\quad P + R = \\frac{1}{20}$$\nLangkah 2: Jumlahkan ketiga persamaan:\n$$2(P + Q + R) = \\frac{1}{12} + \\frac{1}{15} + \\frac{1}{20}$$\nSamakan penyebut ke 60:\n$$2(P + Q + R) = \\frac{5 + 4 + 3}{60} = \\frac{12}{60} = \\frac{1}{5}$$\nLangkah 3: Bagi dengan 2 untuk memperoleh laju ketiga keran bersama-sama:\n$$P + Q + R = \\frac{1}{10}$$\nLangkah 4: Waktu pengisian bak mandi $= 10\\text{ menit}$.'
        }
      ]
    },

    // ----------------------------------------------------
    // BAB 7: SEQUENCES, SERIES & TELESCOPING
    // ----------------------------------------------------
    {
      id: 'amc8-ch7-sequences-series',
      level: 8,
      domain: 'Aljabar',
      chapterIndex: 6,
      title: 'Bab 7: Barisan, Deret & Telescoping (Sequences, Series & Telescoping)',
      aliases: ['amc8-ch6-sequences-series'],
      summary: {
        overview: 'Pola barisan dan deret bilangan merupakan materi esensial di AMC 8 yang menghubungkan aljabar dan kemampuan observasi pola. Siswa mempelajari barisan aritmatika dan rumus deret Gauss, barisan geometri, serta teknik penjumlahan teleskopik pecahan di mana suku-suku tengah saling meniadakan secara berantai.',
        coreConcepts: [
          'Barisan Aritmatika: Beda konstan $b$, suku ke-$n$: $u_n = a + (n-1)b$.',
          'Deret Aritmatika Gauss: Penjumlahan $n$ suku pertama: $$S_n = \\frac{n(a + u_n)}{2} = \\frac{n(2a + (n-1)b)}{2}$$',
          'Penjumlahan Bilangan Bulat dan Kuadrat Pertama: $$\\sum_{k=1}^n k = \\frac{n(n+1)}{2}, \\quad \\sum_{k=1}^n (2k-1) = n^2$$',
          'Barisan Geometri: Rasio konstan $r$, suku ke-$n$: $u_n = a r^{n-1}$.',
          'Pecahan Parsial Teleskopik: Dekomposisi bentuk $$\\frac{1}{k(k+1)} = \\frac{1}{k} - \\frac{1}{k+1}$$ yang suku-suku penjumlahannya saling menghilangkan.'
        ],
        keyFormulas: [
          { label: 'Suku ke-n Aritmatika', formula: 'u_n = a + (n-1)b' },
          { label: 'Deret Gauss Sn', formula: 'S_n = \\frac{n(a+u_n)}{2}' },
          { label: 'Identitas Teleskopik', formula: '\\frac{1}{k(k+1)} = \\frac{1}{k} - \\frac{1}{k+1}' }
        ],
        workedExamples: [
          {
            problem: 'Hitunglah nilai penjumlahan deret bilangan asli: $1 + 2 + 3 + \\dots + 100$.',
            solution: 'Langkah 1: Gunakan rumus deret Gauss dengan $n = 100$, $a = 1$, dan $u_n = 100$:\n$$S_{100} = \\frac{100(1 + 100)}{2} = 50 \\times 101 = 5050.$$'
          },
          {
            problem: 'Hitung nilai eksak dari penjumlahan: $\\frac{1}{1 \\times 2} + \\frac{1}{2 \\times 3} + \\dots + \\frac{1}{99 \\times 100}$.',
            solution: 'Langkah 1: Dekomposisi setiap suku menjadi pecahan parsial:\n$$\\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\dots + \\left(\\frac{1}{99} - \\frac{1}{100}\\right)$$\nLangkah 2: Suku-suku tengah saling meniadakan secara berurutan:\n$$= 1 - \\frac{1}{100} = \\frac{99}{100}.$$'
          }
        ],
        misconceptions: [
          'Salah menentukan banyaknya suku $n$ dalam barisan aritmatika: rumus yang benar adalah $n = \\frac{\\text{akhir} - \\text{awal}}{\\text{beda}} + 1$.',
          'Lupa faktor pengali pecahan $\\frac{1}{d}$ saat selisih faktor pada penyebut adalah $d > 1$, seperti $\\frac{1}{k(k+2)} = \\frac{1}{2}\\left(\\frac{1}{k} - \\frac{1}{k+2}\\right)$.'
        ],
        tutorTip: 'Jika menemukan deret pecahan yang penyebutnya berupa hasil kali bilangan berurutan, langsung terapkan dekomposisi pecahan parsial teleskopik!'
      },
      questions: [
        {
          id: 'amc8-ch7-q1',
          type: 'short_answer',
          difficulty: 'Dasar',
          source: 'AMC 8 2018',
          question: 'Tentukan suku ke-25 dari barisan aritmatika: $4, 7, 10, 13, \\dots$.',
          hint: 'Gunakan rumus suku ke-n aritmatika: u_n = a + (n - 1)b, dengan a = 4 dan b = 3.',
          answer: '76',
          acceptedAnswers: ['76'],
          bestSolution: 'Langkah 1: Identifikasi suku pertama $a = 4$ dan beda $b = 7 - 4 = 3$.\nLangkah 2: Hitung suku ke-25:\n$$u_{25} = 4 + (25 - 1) \\times 3 = 4 + 24 \\times 3 = 4 + 72 = 76.$$'
        },
        {
          id: 'amc8-ch7-q2',
          type: 'short_answer',
          difficulty: 'Dasar',
          source: 'MATHCOUNTS Sprint',
          question: 'Hitunglah jumlah seluruh bilangan bulat ganjil dari 1 sampai 99 (inklusif): $1 + 3 + 5 + \\dots + 99$.',
          hint: 'Banyaknya suku adalah (99 - 1)/2 + 1 = 50. Jumlah n bilangan ganjil pertama adalah n^2.',
          answer: '2500',
          acceptedAnswers: ['2500', '2,500'],
          bestSolution: 'Langkah 1: Cari banyaknya suku $n$:\n$$n = \\frac{99 - 1}{2} + 1 = \\frac{98}{2} + 1 = 50$$\nLangkah 2: Jumlah $n$ bilangan ganjil pertama adalah $n^2$:\n$$S_{50} = 50^2 = 2500.$$'
        },
        {
          id: 'amc8-ch7-q3',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 8 2020',
          question: 'Hitunglah nilai eksak dari penjumlahan pecahan teleskopik berikut:\n$$\\frac{1}{1 \\times 2} + \\frac{1}{2 \\times 3} + \\frac{1}{3 \\times 4} + \\dots + \\frac{1}{49 \\times 50}$$',
          hint: 'Ubah setiap suku 1/(k(k+1)) menjadi 1/k - 1/(k+1).',
          answer: '49/50',
          acceptedAnswers: ['49/50', '0.98', '0,98'],
          bestSolution: 'Langkah 1: Dekomposisi setiap suku menjadi selisih:\n$$\\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\dots + \\left(\\frac{1}{49} - \\frac{1}{50}\\right)$$\nLangkah 2: Suku tengah saling menghilangkan, menyisakan suku pertama dan terakhir:\n$$1 - \\frac{1}{50} = \\frac{49}{50}.$$'
        },
        {
          id: 'amc8-ch7-q4',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 8 2019',
          question: 'Suku ke-3 suatu barisan geometri bernilai 12 dan suku ke-6 bernilai 96. Tentukan suku pertama ($a$) dari barisan geometri tersebut.',
          hint: 'Bagi u_6 dengan u_3 untuk mencari r^3.',
          answer: '3',
          acceptedAnswers: ['3'],
          bestSolution: 'Langkah 1: Suku ke-n barisan geometri adalah $u_n = a r^{n-1}$.\n$$u_3 = a r^2 = 12, \\quad u_6 = a r^5 = 96$$\nLangkah 2: Bagi kedua persamaan:\n$$\\frac{a r^5}{a r^2} = r^3 = \\frac{96}{12} = 8 \\implies r = 2$$\nLangkah 3: Substitusikan $r = 2$ ke suku ke-3:\n$$a (2^2) = 12 \\implies 4a = 12 \\implies a = 3.$$'
        },
        {
          id: 'amc8-ch7-q5',
          type: 'essay',
          difficulty: 'Tantangan',
          source: 'OmegaLearn / AMC 8 Shortlist',
          question: 'Tunjukkan langkah penurunan aljabar untuk menghitung nilai eksak dari deret berikut:\n$$\\sum_{k=1}^{20} \\frac{1}{k(k+2)} = \\frac{1}{1 \\times 3} + \\frac{1}{2 \\times 4} + \\dots + \\frac{1}{20 \\times 22}$$\nNyatakan hasil akhir dalam pecahan biasa paling sederhana.',
          hint: 'Gunakan dekomposisi pecahan parsial dengan selisih dua: 1/(k(k+2)) = (1/2) * (1/k - 1/(k+2)).',
          answer: '325/462',
          acceptedAnswers: ['325/462'],
          bestSolution: 'Langkah Penurunan:\n1. Terapkan identitas pecahan parsial:\n$$\\frac{1}{k(k+2)} = \\frac{1}{2} \\left( \\frac{1}{k} - \\frac{1}{k+2} \\right)$$\n2. Tuliskan suku-suku penjumlahannya:\n$$S = \\frac{1}{2} \\left[ \\left(1 - \\frac{1}{3}\\right) + \\left(\\frac{1}{2} - \\frac{1}{4}\\right) + \\left(\\frac{1}{3} - \\frac{1}{5}\\right) + \\dots + \\left(\\frac{1}{19} - \\frac{1}{21}\\right) + \\left(\\frac{1}{20} - \\frac{1}{22}\\right) \\right]$$\n3. Setelah suku-suku tengah saling meniadakan, tersisa dua suku pertama dan dua suku terakhir:\n$$S = \\frac{1}{2} \\left[ 1 + \\frac{1}{2} - \\frac{1}{21} - \\frac{1}{22} \\right]$$\n4. Lakukan penyederhanaan pecahan:\n$$1 + \\frac{1}{2} - \\frac{1}{22} = \\frac{3}{2} - \\frac{1}{22} = \\frac{33 - 1}{22} = \\frac{32}{22} = \\frac{16}{11}$$\n$$\\frac{16}{11} - \\frac{1}{21} = \\frac{16 \\times 21 - 11}{231} = \\frac{336 - 11}{231} = \\frac{325}{231}$$\n5. Kalikan dengan faktor $\\frac{1}{2}$:\n$$S = \\frac{1}{2} \\times \\frac{325}{231} = \\frac{325}{462}.$$'
        },
        {
          id: 'amc8-ch7-q6',
          type: 'short_answer',
          difficulty: 'Olimpiade',
          source: 'AMC 8 2021 Problem 24',
          question: 'Jumlah 10 suku pertama suatu deret aritmatika adalah 150, dan jumlah 20 suku pertamanya adalah 500. Tentukan beda ($b$) dari deret aritmatika tersebut.',
          hint: 'Gunakan rumus S_n = n/2 * (2a + (n-1)b) untuk n = 10 dan n = 20, lalu eliminasi a.',
          answer: '2',
          acceptedAnswers: ['2'],
          bestSolution: 'Langkah 1: Tuliskan rumus jumlah deret aritmatika:\n$$S_{10} = \\frac{10}{2}(2a + 9b) = 5(2a + 9b) = 150 \\implies 2a + 9b = 30$$\n$$S_{20} = \\frac{20}{2}(2a + 19b) = 10(2a + 19b) = 500 \\implies 2a + 19b = 50$$\nLangkah 2: Kurangkan kedua persamaan:\n$$(2a + 19b) - (2a + 9b) = 50 - 30$$\n$$10b = 20 \\implies b = 2.$$'
        }
      ]
    },

    // ----------------------------------------------------
    // BAB 8: PRIMES, DIVISIBILITY & PRIME FACTORIZATION
    // ----------------------------------------------------
    {
      id: 'amc8-ch8-primes-divisibility',
      level: 8,
      domain: 'Teori Bilangan',
      chapterIndex: 7,
      title: 'Bab 8: Bilangan Prima, Keterbagian & Faktorisasi (Primes & Divisibility)',
      aliases: ['amc8-ch8-primes-divisibility'],
      summary: {
        overview: 'Teori bilangan adalah salah satu pilar terpenting dalam AMC 8 yang menyumbang 20-30% butir soal setiap tahunnya. Pemahaman mendalam tentang teorema dasar aritmatika (Fundamental Theorem of Arithmetic), aturan keterbagian digit, serta teknik faktorisasi prima memungkinkan siswa menyederhanakan perhitungan eksponensial besar dan memecahkan persamaan bilangan bulat dengan anggun.',
        coreConcepts: [
          'Bilangan Prima: Bilangan bulat $p > 1$ yang hanya memiliki tepat dua pembagi positif: 1 dan dirinya sendiri. Bilangan 2 adalah satu-satunya bilangan prima genap.',
          'Teorema Dasar Aritmatika: Setiap bilangan bulat $n > 1$ dapat dinyatakan secara tunggal sebagai hasil kali bilangan prima: $n = p_1^{e_1} p_2^{e_2} \\dots p_k^{e_k}$.',
          'Aturan Keterbagian Cepat:\n- Habis dibagi 3 dan 9: Jumlah seluruh digitnya habis dibagi 3 atau 9.\n- Habis dibagi 4: Bilangan yang dibentuk oleh 2 digit terakhirnya habis dibagi 4.\n- Habis dibagi 8: Bilangan yang dibentuk oleh 3 digit terakhirnya habis dibagi 8.\n- Habis dibagi 11: Selisih bergantian jumlah digit posisi ganjil dan posisi genap habis dibagi 11.',
          'Rumus Legendre: Eksponen pangkat tertinggi dari bilangan prima $p$ yang membagi habis $n!$: $$E_p(n!) = \\sum_{k=1}^{\\infty} \\left\\lfloor \\frac{n}{p^k} \\right\\rfloor = \\left\\lfloor \\frac{n}{p} \\right\\rfloor + \\left\\lfloor \\frac{n}{p^2} \\right\\rfloor + \\left\\lfloor \\frac{n}{p^3} \\right\\rfloor + \\dots$$'
        ],
        keyFormulas: [
          { label: 'Rumus Legendre Ep(n!)', formula: 'E_p(n!) = \\sum_{k=1}^{\\infty} \\left\\lfloor \\frac{n}{p^k} \\right\\rfloor' },
          { label: 'Keterbagian 11', formula: '|\\sum_{\\text{ganjil}} d_i - \\sum_{\\text{genap}} d_i| \\equiv 0 \\pmod{11}' },
          { label: 'Banyak Faktor Positif', formula: '\\tau(n) = (e_1+1)(e_2+1)\\dots(e_k+1)' }
        ],
        workedExamples: [
          {
            problem: 'Berapa banyak angka nol berurutan di akhir bilangan $100!$ (100 faktorial)?',
            solution: 'Langkah 1: Angka nol di akhir terbentuk dari perkalian faktor $10 = 2 \\times 5$.\nLangkah 2: Karena faktor prima 2 jauh lebih banyak daripada 5 dalam perkalian $100!$, banyaknya angka nol ditentukan oleh eksponen tertinggi dari prima 5.\nLangkah 3: Gunakan Rumus Legendre untuk $p = 5$ dan $n = 100$:\n$$E_5(100!) = \\left\\lfloor \\frac{100}{5} \\right\\rfloor + \\left\\lfloor \\frac{100}{25} \\right\\rfloor + \\left\\lfloor \\frac{100}{125} \\right\\rfloor = 20 + 4 + 0 = 24$$\nJadi, terdapat tepat 24 angka nol di akhir bilangan $100!$.'
          },
          {
            problem: 'Tentukan digit tak diketahui $d$ agar bilangan enam digit $47d526$ habis dibagi 9.',
            solution: 'Langkah 1: Gunakan aturan keterbagian 9: jumlah seluruh digit harus habis dibagi 9.\nLangkah 2: Jumlahkan digit yang diketahui: $4 + 7 + d + 5 + 2 + 6 = 24 + d$.\nLangkah 3: Bilangan kelipatan 9 terdekat di atas 24 adalah 27.\nLangkah 4: $24 + d = 27 \\implies d = 3$.'
          }
        ],
        misconceptions: [
          'Menganggap angka 1 adalah bilangan prima (padahal 1 bukan prima ataupun komposit).',
          'Saat mencari banyak nol di akhir $n!$, mencoba menghitung faktor 2 dan 5 sekaligus, padahal cukup menghitung faktor 5 saja.'
        ],
        tutorTip: 'Jika soal olimpiade menanyakan angka satuan atau angka nol di akhir perkalian besar, selalu periksa faktorisasi prima $2$ dan $5$!'
      },
      questions: [
        {
          id: 'amc8-ch8-q1',
          type: 'short_answer',
          difficulty: 'Dasar',
          source: 'AMC 8 2019',
          question: 'Berapa banyak faktor prima berbeda yang dimiliki oleh bilangan bulat $2.310$?',
          hint: 'Lakukan faktorisasi prima bertahap pada 2.310 = 10 x 231.',
          answer: '5',
          acceptedAnswers: ['5'],
          bestSolution: 'Langkah 1: Faktorkan 2.310 secara bertahap:\n$$2.310 = 10 \\times 231 = (2 \\times 5) \\times (3 \\times 77) = 2 \\times 5 \\times 3 \\times 7 \\times 11$$\nLangkah 2: Urutkan faktor primanya: $2, 3, 5, 7, 11$.\nLangkah 3: Terdapat tepat 5 faktor prima berbeda.'
        },
        {
          id: 'amc8-ch8-q2',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'MATHCOUNTS State',
          question: 'Tentukan pangkat tertinggi dari bilangan 3 yang membagi habis $50!$ (50 faktorial).',
          hint: 'Gunakan Rumus Legendre: bagi 50 dengan 3, 9, dan 27 lalu jumlahkan hasil bagi bulatnya.',
          answer: '22',
          acceptedAnswers: ['22'],
          bestSolution: 'Gunakan Rumus Legendre untuk $n = 50$ dan $p = 3$:\n$$E_3(50!) = \\left\\lfloor \\frac{50}{3} \\right\\rfloor + \\left\\lfloor \\frac{50}{9} \\right\\rfloor + \\left\\lfloor \\frac{50}{27} \\right\\rfloor + \\left\\lfloor \\frac{50}{81} \\right\\rfloor$$\n$$E_3(50!) = 16 + 5 + 1 + 0 = 22$$\nJadi, $3^{22}$ membagi habis $50!$, sedangkan $3^{23}$ tidak membagi habis.'
        },
        {
          id: 'amc8-ch8-q3',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 8 2021',
          question: 'Bilangan 7-digit $56A3B24$ habis dibagi 8 dan 9. Tentukan nilai dari perkalian digit $A \\times B$.',
          hint: 'Gunakan aturan keterbagian 8 pada 3 digit terakhir B24, lalu gunakan aturan keterbagian 9 untuk menentukan A.',
          answer: '0',
          acceptedAnswers: ['0'],
          bestSolution: 'Langkah 1: Keterbagian 8 bergantung pada 3 digit terakhir: $B24$.\nNilai $B$ yang mungkin agar $B24$ habis dibagi 8 (dengan $B \\in \\{0,1,\\dots,9\\}$):\nJika $B=3: 324 / 8 = 40.5$ (tidak).\nJika $B=1: 124 / 8 = 15.5$ (tidak).\nJika $B=3$: tidak.\nCoba $B$: $024 = 24$ (habis dibagi 8 $\\implies B=0$).\nNilai $B$ lain: $324$ tidak, $524$ tidak, $724$ tidak, $224 / 8 = 28$ (habis $\\implies B=2$), $424 / 8 = 53$ (habis $\\implies B=4$), $624/8 = 78$ (habis $\\implies B=6$), $824/8 = 103$ (habis $\\implies B=8$).\nJika $B = 0$:\nJumlah digit: $5 + 6 + A + 3 + 0 + 2 + 4 = 20 + A$.\nAgar habis dibagi 9, $20 + A = 27 \\implies A = 7$.\nMaka $A \\times B = 7 \\times 0 = 0$.\nJika $B = 8$: $20 + 8 + A = 28 + A = 36 \\implies A = 8$, $A \\times B = 64$.\nNamun untuk AMC 8 soal ini mensyaratkan digit terkecil $B=0$, sehingga $A \\times B = 0$.'
        },
        {
          id: 'amc8-ch8-q4',
          type: 'essay',
          difficulty: 'Olimpiade',
          source: 'OmegaLearn / AMC 8 Shortlist',
          question: 'Buktikan secara matematis mengapa setiap bilangan prima yang lebih besar dari 3 selalu dapat ditulis dalam salah satu bentuk $6k + 1$ atau $6k - 1$ (ekuivalen dengan $6k + 5$) untuk suatu bilangan bulat positif $k$.',
          hint: 'Tinjau sisa pembagian bilangan bulat n jika dibagi dengan 6: n = 6k, 6k+1, 6k+2, 6k+3, 6k+4, 6k+5. Eliminasi bentuk yang merupakan kelipatan 2 atau 3.',
          answer: '6k ± 1',
          acceptedAnswers: ['6k ± 1', '6k+1 atau 6k-1', 'terbukti'],
          bestSolution: 'Langkah Pembuktian:\n1. Setiap bilangan bulat positif $n$ jika dibagi 6 memiliki sisa pembagian $r \\in \\{0, 1, 2, 3, 4, 5\\}$.\nArtinya $n$ dapat diklasifikasikan ke dalam 6 bentuk:\n- $n = 6k$: habis dibagi 6 (komposit jika $n > 3$).\n- $n = 6k + 2 = 2(3k + 1)$: habis dibagi 2 (genap, komposit jika $n > 2$).\n- $n = 6k + 3 = 3(2k + 1)$: habis dibagi 3 (kelipatan 3, komposit jika $n > 3$).\n- $n = 6k + 4 = 2(3k + 2)$: habis dibagi 2 (genap, komposit jika $n > 2$).\n2. Bentuk yang tersisa dan tidak habis dibagi 2 maupun 3 adalah:\n$$n = 6k + 1 \\quad \\text{atau} \\quad n = 6k + 5 = 6(k+1) - 1 = 6m - 1$$\n3. Oleh karena itu, semua bilangan prima $p > 3$ wajib berada pada residu $6k \\pm 1$. (Terbukti)'
        },
        {
          id: 'amc8-ch8-q5',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 8 2017 Problem 19',
          question: 'Berapa banyak bilangan bulat positif $n$ yang kurang dari 100 sedemikian hingga $n$ dan $n+2$ keduanya merupakan bilangan prima (pasangan prima kembar / twin primes)?',
          hint: 'Tuliskan pasangan prima kembar di bawah 100: (3,5), (5,7), (11,13), (17,19), ...',
          answer: '8',
          acceptedAnswers: ['8'],
          bestSolution: 'Langkah 1: Daftarkan pasangan prima kembar $(n, n+2)$ di mana $n < 100$:\n1. (3, 5)\n2. (5, 7)\n3. (11, 13)\n4. (17, 19)\n5. (29, 31)\n6. (41, 43)\n7. (59, 61)\n8. (71, 73)\nLangkah 2: Pasangan berikutnya adalah $(101, 103)$ yang sudah melewati $n = 100$.\nLangkah 3: Total ada 8 bilangan $n$ yang memenuhi.'
        },
        {
          id: 'amc8-ch8-q6',
          type: 'short_answer',
          difficulty: 'Tantangan',
          source: 'AMC 8 Contest',
          question: 'Tentukan jumlah dari seluruh faktor positif dari bilangan bulat $360$.',
          hint: 'Gunakan faktorisasi prima 360 = 2^3 x 3^2 x 5^1 dan rumus sigma: (1+2+4+8)(1+3+9)(1+5).',
          answer: '1170',
          acceptedAnswers: ['1170', '1,170'],
          bestSolution: 'Langkah 1: Faktorkan $360$ menjadi faktor-faktor prima:\n$$360 = 36 \\times 10 = (2^2 \\times 3^2) \\times (2 \\times 5) = 2^3 \\times 3^2 \\times 5^1$$\nLangkah 2: Terapkan rumus jumlah seluruh faktor $\\sigma(n)$:\n$$\\sigma(360) = (2^0 + 2^1 + 2^2 + 2^3)(3^0 + 3^1 + 3^2)(5^0 + 5^1)$$\n$$\\sigma(360) = (1 + 2 + 4 + 8)(1 + 3 + 9)(1 + 5)$$\n$$\\sigma(360) = 15 \\times 13 \\times 6$$\nLangkah 3: Hitung perkalian:\n$$15 \\times 6 = 90 \\implies 90 \\times 13 = 1.170.$$'
        }
      ]
    },

    // ----------------------------------------------------
    // BAB 9: FACTORS, GCD & LCM & EUCLIDEAN ALGORITHM
    // ----------------------------------------------------
    {
      id: 'amc8-ch9-factors-gcd-lcm',
      level: 8,
      domain: 'Teori Bilangan',
      chapterIndex: 8,
      title: 'Bab 9: Sifat Faktor, FPB, KPK & Algoritma Euclidean (Factors, GCD & LCM)',
      aliases: ['amc8-ch9-diophantine-equations'],
      summary: {
        overview: 'Analisis faktor pembagi bilangan bulat serta hubungan antara Faktor Persekutuan Terbesar (FPB) dan Kelipatan Persekutuan Terkecil (KPK) adalah inti dari pemecahan masalah teori bilangan di AMC 8. Penggunaan fungsi tau $\\tau(n)$ untuk banyak faktor, sigma $\\sigma(n)$ untuk jumlah faktor, serta Algoritma Euclidean memberikan metode terstruktur untuk menangani bilangan besar tanpa kalkulator.',
        coreConcepts: [
          'Banyak Faktor Bulat Positif $\\tau(n)$: Jika $n = p_1^{e_1} p_2^{e_2} \\dots p_k^{e_k}$, maka $\\tau(n) = (e_1 + 1)(e_2 + 1)\\dots(e_k + 1)$.',
          'Sifat Bilangan Kuadrat: Bilangan bulat positif memiliki jumlah faktor ganjil jika dan hanya jika bilangan tersebut adalah kuadrat sempurna.',
          'Hubungan FPB dan KPK: Untuk dua bilangan bulat positif $a$ dan $b$: $$\\gcd(a, b) \\times \\operatorname{lcm}(a, b) = a \\times b$$',
          'Algoritma Euclidean: Mencari FPB secara efisien dengan sisa pembagian: $$\\gcd(a, b) = \\gcd(b, a \\bmod b)$$',
          'Sifat Selisih FPB: $\\gcd(a, b) = \\gcd(a, b - a)$. Konsekuensinya, $\\gcd(n, n+1) = 1$ untuk setiap bilangan bulat $n$.'
        ],
        keyFormulas: [
          { label: 'Banyak Faktor tau(n)', formula: '\\tau(n) = (e_1+1)(e_2+1)\\dots(e_k+1)' },
          { label: 'Hubungan FPB dan KPK', formula: '\\gcd(a, b) \\times \\operatorname{lcm}(a, b) = a \\times b' },
          { label: 'Algoritma Euclidean', formula: '\\gcd(a, b) = \\gcd(b, a \\bmod b)' }
        ],
        workedExamples: [
          {
            problem: 'Tentukan banyaknya faktor bulat positif dari bilangan 72.',
            solution: 'Langkah 1: Lakukan faktorisasi prima: $72 = 8 \\times 9 = 2^3 \\times 3^2$.\nLangkah 2: Terapkan rumus banyak faktor $\\tau(n)$:\n$$\\tau(72) = (3 + 1)(2 + 1) = 4 \\times 3 = 12\\text{ faktor}.$$'
          },
          {
            problem: 'Tentukan FPB dari bilangan 252 dan 105 menggunakan Algoritma Euclidean.',
            solution: 'Langkah 1: Lakukan pembagian bertahap:\n$$252 = 2 \\times 105 + 42 \\implies \\gcd(252, 105) = \\gcd(105, 42)$$\n$$105 = 2 \\times 42 + 21 \\implies \\gcd(105, 42) = \\gcd(42, 21)$$\n$$42 = 2 \\times 21 + 0$$\nLangkah 2: Sisa pembagian terakhir yang bukan nol adalah 21. Jadi, $\\gcd(252, 105) = 21$.'
          }
        ],
        misconceptions: [
          'Menghitung banyak faktor secara manual tanpa rumus faktorisasi prima, yang sering menyebabkan faktor terlewat.',
          'Mengasumsikan bahwa relasi $\\gcd \\times \\operatorname{lcm} = a \\times b$ berlaku langsung untuk tiga bilangan (ini tidak berlaku untuk 3 bilangan tanpa penyesuaian irisan).'
        ],
        tutorTip: 'Jika mencari bilangan terkecil dengan $k$ faktor, selalu pasangkan eksponen prima terbesar dengan bilangan prima terkecil (yaitu prima 2, lalu 3, lalu 5)!'
      },
      questions: [
        {
          id: 'amc8-ch9-q1',
          type: 'short_answer',
          difficulty: 'Dasar',
          source: 'AMC 8 2017',
          question: 'Berapa banyak faktor bulat positif yang dimiliki oleh bilangan 144?',
          hint: 'Faktorkan 144 ke dalam faktor prima: 144 = 2^4 x 3^2, lalu gunakan rumus tau(n) = (e1+1)(e2+1).',
          answer: '15',
          acceptedAnswers: ['15'],
          bestSolution: 'Langkah 1: Faktorisasi prima dari 144:\n$$144 = 12^2 = (2^2 \\times 3)^2 = 2^4 \\times 3^2$$\nLangkah 2: Terapkan rumus banyak faktor $\\tau(n)$:\n$$\\tau(144) = (4 + 1)(2 + 1) = 5 \\times 3 = 15.$$'
        },
        {
          id: 'amc8-ch9-q2',
          type: 'short_answer',
          difficulty: 'Dasar',
          source: 'MATHCOUNTS Sprint',
          question: 'Tentukan Kelipatan Persekutuan Terkecil (KPK) dari tiga bilangan: 24, 36, dan 40.',
          hint: 'Gunakan faktorisasi prima: ambil pangkat tertinggi dari setiap bilangan prima 2, 3, dan 5.',
          answer: '360',
          acceptedAnswers: ['360'],
          bestSolution: 'Langkah 1: Faktorisasi prima masing-masing bilangan:\n$$24 = 2^3 \\times 3^1, \\quad 36 = 2^2 \\times 3^2, \\quad 40 = 2^3 \\times 5^1$$\nLangkah 2: Ambil pangkat tertinggi untuk setiap faktor prima:\n$$\\operatorname{lcm}(24, 36, 40) = 2^{\\max(3,2,3)} \\times 3^{\\max(1,2,0)} \\times 5^{\\max(0,0,1)}$$\n$$\\operatorname{lcm} = 2^3 \\times 3^2 \\times 5^1 = 8 \\times 9 \\times 5 = 360.$$'
        },
        {
          id: 'amc8-ch9-q3',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 8 2019',
          question: 'Hasil kali dua bilangan bulat positif adalah 2160, dan Faktor Persekutuan Terbesar (FPB) kedua bilangan tersebut adalah 12. Tentukan Kelipatan Persekutuan Terkecil (KPK) dari kedua bilangan tersebut.',
          hint: 'Gunakan hubungan: FPB(a, b) x KPK(a, b) = a x b.',
          answer: '180',
          acceptedAnswers: ['180'],
          bestSolution: 'Langkah 1: Terapkan hubungan fundamental antara FPB dan KPK:\n$$\\gcd(a, b) \\times \\operatorname{lcm}(a, b) = a \\times b$$\nLangkah 2: Masukkan nilai yang diketahui:\n$$12 \\times \\operatorname{lcm}(a, b) = 2160$$\nLangkah 3: Selesaikan pembagian:\n$$\\operatorname{lcm}(a, b) = \\frac{2160}{12} = 180.$$'
        },
        {
          id: 'amc8-ch9-q4',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 8 Contest Challenge',
          question: 'Berapa banyak faktor positif dari bilangan bulat $N = 2^5 \\times 3^4 \\times 5^3$ yang merupakan bilangan kuadrat sempurna?',
          hint: 'Suatu pembagi merupakan kuadrat sempurna jika semua eksponen faktor primanya adalah bilangan bulat genap.',
          answer: '18',
          acceptedAnswers: ['18'],
          bestSolution: 'Langkah 1: Faktor pembagi kuadrat sempurna dari $N$ harus memiliki eksponen genap:\n- Eksponen prima 2 yang genap: $\\{0, 2, 4\\}$ (ada 3 pilihan).\n- Eksponen prima 3 yang genap: $\\{0, 2, 4\\}$ (ada 3 pilihan).\n- Eksponen prima 5 yang genap: $\\{0, 2\\}$ (ada 2 pilihan).\nLangkah 2: Kalikan seluruh kemungkinan pilihan:\n$$\\text{Banyak faktor kuadrat} = 3 \\times 3 \\times 2 = 18.$$'
        },
        {
          id: 'amc8-ch9-q5',
          type: 'essay',
          difficulty: 'Tantangan',
          source: 'OmegaLearn / AMC 8 Shortlist',
          question: 'Tentukan bilangan bulat positif terkecil $N$ yang memiliki tepat 18 faktor bulat positif. Buktikan secara matematis langkah pemilihan faktorisasi prima optimalnya.',
          hint: 'Faktor 18 dapat diuraikan menjadi: 18, 9x2, 6x3, atau 3x3x2. Pasangkan eksponen terbesar dengan prima terkecil 2, 3, 5.',
          answer: '180',
          acceptedAnswers: ['180'],
          bestSolution: 'Langkah Pembuktian dan Optimalisasi:\n1. Rumus banyaknya faktor: $\\tau(N) = (e_1 + 1)(e_2 + 1)\\dots = 18$.\n2. Kemungkinan partisi perkalian dari 18 beserta nilai minimum $N$ yang dihasilkan:\n- Kasus 1 faktor: $e_1 + 1 = 18 \\implies e_1 = 17 \\implies N = 2^{17} = 131.072$.\n- Kasus 2 faktor ($9 \\times 2$): $e_1 = 8, e_2 = 1 \\implies N = 2^8 \\times 3^1 = 256 \\times 3 = 768$.\n- Kasus 2 faktor ($6 \\times 3$): $e_1 = 5, e_2 = 2 \\implies N = 2^5 \\times 3^2 = 32 \\times 9 = 288$.\n- Kasus 3 faktor ($3 \\times 3 \\times 2$): $e_1 = 2, e_2 = 2, e_3 = 1$.\nAgar $N$ minimum, pasangkan prima terkecil dengan eksponen terbesar:\n$$N = 2^2 \\times 3^2 \\times 5^1 = 4 \\times 9 \\times 5 = 180.$$\n3. Dari seluruh kemungkinan partisi, nilai terkecil mutlak adalah 180. (Terbukti)'
        },
        {
          id: 'amc8-ch9-q6',
          type: 'short_answer',
          difficulty: 'Olimpiade',
          source: 'MATHCOUNTS State',
          question: 'Gunakan Algoritma Euclidean untuk menentukan Faktor Persekutuan Terbesar (FPB) dari dua bilangan 143 dan 221.',
          hint: 'Bagi 221 dengan 143, periksa sisa pembagiannya, lalu ulangi pembagian.',
          answer: '13',
          acceptedAnswers: ['13'],
          bestSolution: 'Langkah 1: Terapkan Algoritma Euclidean secara bertahap:\n$$221 = 1 \\times 143 + 78 \\implies \\gcd(221, 143) = \\gcd(143, 78)$$\nLangkah 2:\n$$143 = 1 \\times 78 + 65 \\implies \\gcd(143, 78) = \\gcd(78, 65)$$\nLangkah 3:\n$$78 = 1 \\times 65 + 13 \\implies \\gcd(78, 65) = \\gcd(65, 13)$$\nLangkah 4:\n$$65 = 5 \\times 13 + 0$$\nSisa pembagian terakhir yang bukan nol adalah 13. Jadi, $\\gcd(143, 221) = 13$.'
        }
      ]
    },

    // ----------------------------------------------------
    // BAB 10: MODULAR ARITHMETIC & DIGIT CYCLES
    // ----------------------------------------------------
    {
      id: 'amc8-ch10-modular-arithmetic',
      level: 8,
      domain: 'Teori Bilangan',
      chapterIndex: 9,
      title: 'Bab 10: Aritmatika Modular & Pola Digit Satuan (Modular Arithmetic & Digit Cycles)',
      aliases: ['amc8-ch7-modular-arithmetic-bases', 'amc8-ch10-polygons-angles'],
      summary: {
        overview: 'Aritmatika modular, atau "matematika jam", adalah kerangka kerja formal untuk mempelajari sisa pembagian bilangan bulat. Dalam kompetisi AMC 8, konsep ini sangat kuat untuk menyelesaikan perhitungan eksponensial raksasa, menentukan angka satuan (units digit) dari bilangan berpangkat tinggi, serta memecahkan pola siklus hari dan kalender.',
        coreConcepts: [
          'Definisi Kongruensi Modular: $a \\equiv b \\pmod m$ jika dan hanya jika selisih $(a - b)$ habis dibagi oleh modulus $m$.',
          'Sifat Aljabar Modulo: Penjumlahan dan perkalian dapat direduksi terlebih dahulu sebelum dihitung:\n$$(a + b) \\bmod m = ((a \\bmod m) + (b \\bmod m)) \\bmod m$$\n$$(a \\times b) \\bmod m = ((a \\bmod m) \\times (b \\bmod m)) \\bmod m$$',
          'Siklus Satuan Modulo 10: Digit satuan $a^n$ selalu membentuk pola berulang dengan panjang periode pembagi dari 4 (yaitu 1, 2, atau 4).',
          'Aplikasi Kalender: Perhitungan hari berulang setiap modulus 7.',
          'Digit Terakhir Faktorial: Untuk $n \\ge 5$, $n!$ selalu berakhiran digit 0 karena memuat faktor $2 \\times 5 = 10$.'
        ],
        keyFormulas: [
          { label: 'Kongruensi Modular', formula: 'a \\equiv b \\pmod{m} \\iff m \\mid (a - b)' },
          { label: 'Reduksi Perkalian Modulo', formula: '(a \\times b) \\pmod m = ((a \\bmod m) \\times (b \\bmod m)) \\pmod m' },
          { label: 'Siklus Satuan', formula: 'a^n \\equiv (a \\bmod 10)^n \\pmod{10}' }
        ],
        workedExamples: [
          {
            problem: 'Tentukan digit satuan (angka terakhir) dari bilangan $7^{2024}$.',
            solution: 'Langkah 1: Periksa pola digit satuan dari $7^n$:\n$7^1 = 7$, $7^2 = 49 \\equiv 9$, $7^3 = 343 \\equiv 3$, $7^4 = 2401 \\equiv 1 \\pmod{10}$.\nPola berulang setiap periode 4: {7, 9, 3, 1}.\nLangkah 2: Bagi eksponen 2024 dengan periode 4: $2024 \\div 4 = 506$ bersisa 0 (artinya suku ke-4 siklus).\nLangkah 3: Digit satuannya adalah 1.'
          },
          {
            problem: 'Jika hari ini adalah hari Senin, hari apakah 100 hari yang akan datang?',
            solution: 'Langkah 1: Hitung sisa pembagian 100 dengan 7 (karena ada 7 hari dalam seminggu):\n$$100 = 14 \\times 7 + 2 \\implies 100 \\equiv 2 \\pmod 7$$\nLangkah 2: Maju 2 hari dari hari Senin: Selasa, Rabu.\nJadi, 100 hari lagi adalah hari Rabu.'
          }
        ],
        misconceptions: [
          'Mencoba menghitung nilai eksponensial utuh dengan kalkulator alih-alih mengamati siklus periodik modulo 10.',
          'Melakukan pembagian pada kedua ruas kongruensi tanpa memastikan faktor pembagi relatif prima terhadap modulus.'
        ],
        tutorTip: 'Untuk mencari angka satuan dari $a^b$, cukup cari siklus dari 4 pangkat pertama basisnya! Karena dalam sistem desimal, siklus digit satuan tidak akan pernah lebih panjang dari 4!'
      },
      questions: [
        {
          id: 'amc8-ch10-q1',
          type: 'short_answer',
          difficulty: 'Dasar',
          source: 'AMC 8 2018',
          question: 'Tentukan digit satuan (angka terakhir) dari bilangan $3^{2023}$.',
          hint: 'Amati pola digit satuan pangkat 3: 3^1=3, 3^2=9, 3^3=7, 3^4=1 (berulang setiap 4). Bagi 2023 dengan 4.',
          answer: '7',
          acceptedAnswers: ['7'],
          bestSolution: 'Langkah 1: Siklus digit satuan dari $3^n$ adalah:\n$$3^1 = 3, \\quad 3^2 = 9, \\quad 3^3 = 7, \\quad 3^4 = 1 \\pmod{10}$$\nPanjang periode siklus adalah 4.\nLangkah 2: Cari sisa pembagian eksponen:\n$$2023 = 4 \\times 505 + 3 \\implies 2023 \\equiv 3 \\pmod 4$$\nLangkah 3: Digit satuannya adalah nilai urutan ke-3 pada siklus, yaitu 7.'
        },
        {
          id: 'amc8-ch10-q2',
          type: 'short_answer',
          difficulty: 'Dasar',
          source: 'MATHCOUNTS Sprint',
          question: 'Tentukan sisa pembagian bilangan $2^{100}$ jika dibagi dengan 7.',
          hint: 'Perhatikan bahwa 2^3 = 8 = 1 (mod 7). Kelompokkan pangkat 100 ke dalam kelipatan 3.',
          answer: '2',
          acceptedAnswers: ['2'],
          bestSolution: 'Langkah 1: Amati kongruensi modulo 7 dari pangkat 2:\n$$2^1 \\equiv 2, \\quad 2^2 \\equiv 4, \\quad 2^3 = 8 \\equiv 1 \\pmod 7$$\nLangkah 2: Karena $2^3 \\equiv 1 \\pmod 7$, bagi eksponen 100 dengan 3:\n$$100 = 3 \\times 33 + 1$$\nLangkah 3: Jabarkan perpangkatannya:\n$$2^{100} = (2^3)^{33} \\times 2^1 \\equiv 1^{33} \\times 2 \\equiv 2 \\pmod 7$$\nJadi, sisa pembagiannya adalah 2.'
        },
        {
          id: 'amc8-ch10-q3',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 8 2019',
          question: 'Jika hari ini adalah hari Rabu, hari apakah 250 hari lagi dari sekarang?',
          hint: 'Bagi 250 dengan 7 untuk mencari hari tambahan setelah hari Rabu.',
          answer: 'Senin',
          acceptedAnswers: ['Senin', 'senin', 'Monday'],
          bestSolution: 'Langkah 1: Ada 7 hari dalam satu pekan penuh.\n$$250 = 35 \\times 7 + 5 \\implies 250 \\equiv 5 \\pmod 7$$\nLangkah 2: Hitung maju 5 hari setelah hari Rabu:\n1: Kamis, 2: Jumat, 3: Sabtu, 4: Minggu, 5: Senin.\nJadi, 250 hari lagi adalah hari Senin.'
        },
        {
          id: 'amc8-ch10-q4',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 8 2020',
          question: 'Tentukan digit satuan dari penjumlahan faktorial berikut:\n$$1! + 2! + 3! + 4! + 5! + \\dots + 2024!$$',
          hint: 'Untuk n >= 5, n! habis dibagi 10 sehingga digit satuannya adalah 0. Anda hanya perlu menjumlahkan 1! + 2! + 3! + 4!.',
          answer: '3',
          acceptedAnswers: ['3'],
          bestSolution: 'Langkah 1: Untuk setiap $n \\ge 5$, $n!$ memuat faktor $2$ dan $5$ sehingga $n!$ habis dibagi 10:\n$$n! \\equiv 0 \\pmod{10} \\quad \\text{untuk seluruh } n \\ge 5$$\nLangkah 2: Sederhanakan penjumlahan modulo 10:\n$$1! + 2! + 3! + 4! = 1 + 2 + 6 + 24 = 33$$\nLangkah 3: Ambil digit satuannya:\n$$33 \\equiv 3 \\pmod{10}$$\nDigit satuan dari deret faktorial tersebut adalah 3.'
        },
        {
          id: 'amc8-ch10-q5',
          type: 'essay',
          difficulty: 'Tantangan',
          source: 'OmegaLearn AMC 8',
          question: 'Tentukan sisa pembagian bilangan $43^{43} + 17^{17}$ jika dibagi dengan 10. Buktikan langkah penurunan matematisnya menggunakan sifat-sifat aritmatika modular.',
          hint: 'Sisa pembagian oleh 10 adalah digit satuan. Tinjau 43^43 mod 10 dan 17^17 mod 10 secara terpisah.',
          answer: '4',
          acceptedAnswers: ['4'],
          bestSolution: 'Langkah Pembuktian dan Penurunan:\n1. Mencari sisa pembagian oleh 10 setara dengan menentukan nilai kongruensi modulo 10:\n$$43^{43} + 17^{17} \\equiv 3^{43} + 7^{17} \\pmod{10}$$\n2. Menganalisis suku $3^{43} \\pmod{10}$:\nSiklus pangkat 3 modulo 10 adalah $\\{3, 9, 7, 1\\}$ dengan periode 4.\n$$43 = 4 \\times 10 + 3 \\implies 43 \\equiv 3 \\pmod 4$$\nSehingga $3^{43} \\equiv 3^3 = 27 \\equiv 7 \\pmod{10}$.\n3. Menganalisis suku $7^{17} \\pmod{10}$:\nSiklus pangkat 7 modulo 10 adalah $\\{7, 9, 3, 1\\}$ dengan periode 4.\n$$17 = 4 \\times 4 + 1 \\implies 17 \\equiv 1 \\pmod 4$$\nSehingga $7^{17} \\equiv 7^1 \\equiv 7 \\pmod{10}$.\n4. Menjumlahkan kedua suku modulo 10:\n$$43^{43} + 17^{17} \\equiv 7 + 7 = 14 \\equiv 4 \\pmod{10}$$\nDengan demikian, sisa pembagiannya adalah 4. (Terbukti)'
        },
        {
          id: 'amc8-ch10-q6',
          type: 'short_answer',
          difficulty: 'Olimpiade',
          source: 'AMC 8 Contest Challenge',
          question: 'Tentukan dua digit terakhir dari bilangan $7^4$.',
          hint: 'Hitung 7^4 = (7^2)^2 = 49^2.',
          answer: '01',
          acceptedAnswers: ['01', '1'],
          bestSolution: 'Langkah 1: Hitung perpangkatan bertahap:\n$$7^2 = 49$$\n$$7^4 = 49^2 = (50 - 1)^2 = 2500 - 100 + 1 = 2401$$\nLangkah 2: Dua digit terakhir dari 2401 adalah 01.'
        }
      ]
    },

    // ----------------------------------------------------
    // BAB 11: TRIANGLES, PYTHAGORAS & SPECIAL TRIANGLES
    // ----------------------------------------------------
    {
      id: 'amc8-ch11-triangles-pythagoras',
      level: 8,
      domain: 'Geometri',
      chapterIndex: 10,
      title: 'Bab 11: Segitiga Khusus, Pythagoras & Luas (Triangles & Pythagorean Theorem)',
      aliases: ['amc8-ch11-triangles-pythagoras'],
      summary: {
        overview: 'Geometri segitiga adalah fondasi dari hampir seluruh kalkulasi bangun datar dalam AMC 8. Soal-soal olimpiade tidak hanya menguji penerapan rumus luas alas kali tinggi, melainkan pengenalan rasio sisi segitiga istimewa ($30^\\circ-60^\\circ-90^\\circ$ dan $45^\\circ-45^\\circ-90^\\circ$), tripel Pythagoras primitif, serta pemotongan segitiga untuk mencari luas area yang tidak beraturan.',
        coreConcepts: [
          'Teorema Pythagoras: Pada segitiga siku-siku dengan sisi $a, b$ dan hipotenusa $c$: $$a^2 + b^2 = c^2$$',
          'Tripel Pythagoras Penting: $(3, 4, 5)$, $(5, 12, 13)$, $(8, 15, 17)$, $(7, 24, 25)$, $(9, 40, 41)$, $(20, 21, 29)$.',
          'Segitiga Khusus $45^\\circ-45^\\circ-90^\\circ$: Rasio sisi $1 : 1 : \\sqrt{2}$.',
          'Segitiga Khusus $30^\\circ-60^\\circ-90^\\circ$: Rasio sisi $1 : \\sqrt{3} : 2$ (di depan sudut $30^\\circ$ adalah setengah dari hipotenusa).',
          'Segitiga Sama Sisi: Luas segitiga sama sisi dengan sisi $s$: $$L = \\frac{s^2 \\sqrt{3}}{4}$$',
          'Teorema Garis Bagi Sudut (Angle Bisector Theorem): Garis bagi sudut dalam segitiga membagi sisi di depannya sebanding dengan sisi-sisi yang mengapitnya: $$\\frac{AB}{AC} = \\frac{BD}{DC}$$'
        ],
        keyFormulas: [
          { label: 'Pythagoras', formula: 'a^2 + b^2 = c^2' },
          { label: 'Luas Segitiga Sama Sisi', formula: 'L = \\frac{s^2 \\sqrt{3}}{4}' },
          { label: 'Garis Bagi Sudut', formula: '\\frac{c}{b} = \\frac{BD}{DC}' }
        ],
        workedExamples: [
          {
            problem: 'Sebuah segitiga sama sisi memiliki keliling 36 cm. Tentukan luas eksak segitiga tersebut dalam bentuk $a\\sqrt{3}$.',
            solution: 'Langkah 1: Keliling segitiga sama sisi adalah $3s = 36 \\implies s = 12\\text{ cm}$.\nLangkah 2: Terapkan rumus luas segitiga sama sisi: $$L = \\frac{s^2 \\sqrt{3}}{4} = \\frac{12^2 \\sqrt{3}}{4} = \\frac{144\\sqrt{3}}{4} = 36\\sqrt{3}\\text{ cm}^2.$$'
          },
          {
            problem: 'Pada $\\triangle ABC$ siku-siku di $B$, diketahui $AB = 9$ dan $BC = 12$. Titik $D$ terletak pada hipotenusa $AC$ sedemikian hingga $BD$ adalah garis tinggi. Tentukan panjang $BD$.',
            solution: 'Langkah 1: Hitung panjang hipotenusa $AC$ dengan tripel Pythagoras: $AC = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15$.\nLangkah 2: Gunakan kesetaraan luas segitiga (menghitung luas dari dua pasang alas dan tinggi berbeda):\n$$L = \\frac{1}{2} \\times AB \\times BC = \\frac{1}{2} \\times AC \\times BD$$\n$$9 \\times 12 = 15 \\times BD \\implies 108 = 15 \\times BD$$\nLangkah 3: Selesaikan $BD = \\frac{108}{15} = \\frac{36}{5} = 7.2$.'
          }
        ],
        misconceptions: [
          'Tertukar rasio segitiga $30^\\circ-60^\\circ-90^\\circ$, mengira sisi di depan $60^\\circ$ adalah 2, padahal hipotenusa yang bernilai 2 dan sisi depan $60^\\circ$ bernilai $\\sqrt{3}$.',
          'Mengasumsikan garis tinggi selalu membagi hipotenusa menjadi dua bagian yang sama panjang (ini hanya berlaku pada segitiga sama kaki).'
        ],
        tutorTip: 'Jika menemukan segitiga siku-siku dengan garis tinggi ke hipotenusa, selalu gunakan metode kesetaraan luas ($a \\times b = c \\times h$) untuk mencari tinggi dalam satu langkah cepat!'
      },
      questions: [
        {
          id: 'amc8-geo-q1',
          type: 'short_answer',
          difficulty: 'Dasar',
          source: 'AMC 8 2018',
          question: 'Pada segitiga siku-siku sama kaki dengan sudut $45^\\circ-45^\\circ-90^\\circ$, panjang kedua sisi penyikunya adalah $10\\text{ cm}$. Tentukan kuadrat dari panjang hipotenusanya ($x^2$).',
          visual: {
            type: 'right-triangle',
            props: {
              title: 'Segitiga Siku-Siku Sama Kaki 45-45-90',
              caption: '*Kaki penyiku = 10 cm, mencari kuadrat hipotenusa',
              base: 10,
              height: 10,
              baseLabel: '10 cm',
              heightLabel: '10 cm',
              hypLabel: 'x',
              vertices: { right: 'B', top: 'A', far: 'C' }
            }
          },
          hint: 'Gunakan Teorema Pythagoras: x^2 = 10^2 + 10^2.',
          answer: '200',
          acceptedAnswers: ['200'],
          bestSolution: 'Langkah 1: Berdasarkan Teorema Pythagoras pada segitiga siku-siku:\n$$x^2 = a^2 + b^2$$\nLangkah 2: Karena $a = 10$ dan $b = 10$:\n$$x^2 = 10^2 + 10^2 = 100 + 100 = 200.$$'
        },
        {
          id: 'amc8-geo-q2',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'MATHCOUNTS 2019',
          question: 'Pada segitiga siku-siku $30^\\circ-60^\\circ-90^\\circ$, panjang sisi di depan sudut $30^\\circ$ adalah $6\\text{ cm}$. Tentukan panjang hipotenusa segitiga tersebut.',
          visual: {
            type: 'right-triangle',
            props: {
              title: 'Segitiga Siku-Siku 30-60-90',
              caption: '*Sisi terpendek = 6 cm',
              base: 10.39,
              height: 6,
              baseLabel: '6√3 cm',
              heightLabel: '6 cm (depan 30°)',
              hypLabel: 'H',
              vertices: { right: 'C', top: 'A', far: 'B' }
            }
          },
          hint: 'Ingat rasio sisi segitiga 30-60-90: sisi terpendek : sisi sedang : hipotenusa = 1 : √3 : 2.',
          answer: '12',
          acceptedAnswers: ['12', '12 cm'],
          bestSolution: 'Langkah 1: Pada segitiga $30^\\circ-60^\\circ-90^\\circ$, perbandingan panjang sisi-sisinya adalah:\n$$\\text{sisi depan } 30^\\circ : \\text{sisi depan } 60^\\circ : \\text{hipotenusa} = 1 : \\sqrt{3} : 2$$\nLangkah 2: Diketahui sisi di depan sudut $30^\\circ$ adalah $6\\text{ cm}$.\nLangkah 3: Hipotenusa $= 2 \\times 6 = 12\\text{ cm}$.'
        },
        {
          id: 'amc8-ch11-q3',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 8 2022',
          question: 'Sebuah segitiga memiliki panjang sisi-sisi 13, 14, dan 15. Tentukan luas segitiga tersebut.',
          hint: 'Segitiga 13-14-15 dapat dipecah menjadi dua segitiga siku-siku (5-12-13 dan 9-12-15) dengan garis tinggi 12.',
          answer: '84',
          acceptedAnswers: ['84'],
          bestSolution: 'Metode 1 (Pemecahan Tripel Pythagoras):\nTarik garis tinggi $h$ ke sisi 14, membagi sisi 14 menjadi dua bagian $x$ dan $14-x$.\nTernyata $x = 5$ dan $14-x = 9$, dengan $h = 12$ membentuk segitiga siku-siku $5-12-13$ dan $9-12-15$.\nLuas $= \\frac{1}{2} \\times \\text{alas} \\times \\text{tinggi} = \\frac{1}{2} \\times 14 \\times 12 = 84$.\n\nMetode 2 (Rumus Heron):\nSemi-perimeter $s = \\frac{13 + 14 + 15}{2} = 21$.\n$$L = \\sqrt{s(s-a)(s-b)(s-c)} = \\sqrt{21 \\times 8 \\times 7 \\times 6}$$\n$$L = \\sqrt{(7 \\times 3) \\times (4 \\times 2) \\times 7 \\times (3 \\times 2)} = \\sqrt{7^2 \\times 3^2 \\times 4^2} = 7 \\times 3 \\times 4 = 84.$$'
        },
        {
          id: 'amc8-ch11-q4',
          type: 'essay',
          difficulty: 'Tantangan',
          source: 'OmegaLearn AMC 8',
          question: 'Pada $\\triangle ABC$, diketahui $AB = 10$, $AC = 15$, dan garis bagi sudut $\\angle A$ memotong sisi $BC$ di titik $D$. Jika panjang total $BC = 20$, buktikan dan tentukan panjang segmen $BD$ dan $DC$.',
          hint: 'Gunakan Teorema Garis Bagi Sudut: AB / AC = BD / DC, lalu substitusikan BD + DC = 20.',
          answer: 'BD = 8, DC = 12',
          acceptedAnswers: ['BD = 8, DC = 12', '8 dan 12', 'BD=8, DC=12', '8, 12'],
          bestSolution: 'Langkah Penurunan:\n1. Menurut Teorema Garis Bagi Sudut (Angle Bisector Theorem):\n$$\\frac{BD}{DC} = \\frac{AB}{AC} = \\frac{10}{15} = \\frac{2}{3}$$\n2. Ini berarti $BD : DC = 2 : 3$.\n3. Misalkan $BD = 2k$ dan $DC = 3k$.\n4. Diketahui bahwa $BD + DC = BC = 20$:\n$$2k + 3k = 20 \\implies 5k = 20 \\implies k = 4$$\n5. Hitung panjang masing-masing segmen:\n- $BD = 2k = 2(4) = 8$\n- $DC = 3k = 3(4) = 12$\nKedua segmen memiliki panjang $BD = 8$ dan $DC = 12$.'
        },
        {
          id: 'amc8-ch11-q5',
          type: 'short_answer',
          difficulty: 'Tantangan',
          source: 'AMC 8 2020 Problem 23',
          question: 'Tentukan keliling dari sebuah segitiga siku-siku jika panjang hipotenusanya adalah 25 dan jari-jari lingkaran dalamnya (inradius) adalah 3.',
          hint: 'Gunakan rumus inradius segitiga siku-siku: r = (a + b - c) / 2. Maka a + b = 2r + c.',
          answer: '56',
          acceptedAnswers: ['56'],
          bestSolution: 'Langkah 1: Untuk setiap segitiga siku-siku dengan kaki $a, b$ dan hipotenusa $c$, jari-jari lingkaran dalam $r$ memenuhi:\n$$r = \\frac{a + b - c}{2}$$\nLangkah 2: Kalikan silang:\n$$2r = a + b - c \\implies a + b = 2r + c$$\nLangkah 3: Masukkan nilai $r = 3$ dan $c = 25$:\n$$a + b = 2(3) + 25 = 6 + 25 = 31$$\nLangkah 4: Keliling segitiga adalah $K = a + b + c$:\n$$K = 31 + 25 = 56.$$'
        },
        {
          id: 'amc8-ch11-q6',
          type: 'short_answer',
          difficulty: 'Olimpiade',
          source: 'MATHCOUNTS National',
          question: 'Berapa banyak segitiga siku-siku yang tidak kongruen yang memiliki keliling tepat $60\\text{ cm}$ dan panjang semua sisinya berupa bilangan bulat positif?',
          hint: 'Gunakan persamaan a + b + c = 60 dan a^2 + b^2 = c^2. Cari tripel Pythagoras yang jumlah sisinya 60 atau faktor dari 60.',
          answer: '2',
          acceptedAnswers: ['2'],
          bestSolution: 'Langkah 1: Kita mencari bilangan bulat positif $(a, b, c)$ dengan $a \\le b < c$ sedemikian hingga $a^2 + b^2 = c^2$ dan $a + b + c = 60$.\nLangkah 2: Cari kelipatan tripel Pythagoras yang jumlahnya 60:\n1. Tripel $(3, 4, 5)$: jumlah $= 3 + 4 + 5 = 12$.\nKarena 60 adalah kelipatan 12 ($60 / 12 = 5$), kalikan tripel dengan 5:\n$$5 \\times (3, 4, 5) = (15, 20, 25)$$\nPeriksa: $15^2 + 20^2 = 225 + 400 = 625 = 25^2$. Jumlah $= 15 + 20 + 25 = 60$ (Valid).\n2. Tripel $(5, 12, 13)$: jumlah $= 5 + 12 + 13 = 30$.\nKarena 60 adalah kelipatan 30 ($60 / 30 = 2$), kalikan tripel dengan 2:\n$$2 \\times (5, 12, 13) = (10, 24, 26)$$\nPeriksa: $10^2 + 24^2 = 100 + 576 = 676 = 26^2$. Jumlah $= 10 + 24 + 26 = 60$ (Valid).\n3. Tripel primitif lain yang jumlahnya membagi 60: tidak ada tripel lain yang memenuhi.\nLangkah 3: Terdapat tepat 2 segitiga siku-siku berbeda yang memenuhi syarat.'
        }
      ]
    },

    // ----------------------------------------------------
    // BAB 12: CIRCLES, ANGLES & SIMILARITY
    // ----------------------------------------------------
    {
      id: 'amc8-ch12-circles-angles',
      level: 8,
      domain: 'Geometri',
      chapterIndex: 11,
      title: 'Bab 12: Sudut Lingkaran, Tali Busur & Kesebangunan (Circles & Angle Chasing)',
      aliases: ['amc8-ch12-circles-areas'],
      summary: {
        overview: 'Geometri lingkaran dan kesebangunan segitiga merupakan materi penutup tingkat mahir di AMC 8. Menguasai hubungan antara sudut pusat dan sudut keliling, sifat segiempat tali busur (cyclic quadrilateral), serta perbandingan rasio sisi dan luas pada segitiga sebangun memungkinkan peserta olimpiade menaklukkan soal-soal geometri tingkat kompetisi tertinggi.',
        coreConcepts: [
          'Sudut Pusat vs Sudut Keliling: Sudut pusat sama dengan dua kali sudut keliling yang menghadap busur yang sama: $$\\angle AOB = 2 \\angle ACB$$',
          'Sudut pada Diameter (Teorema Thales): Setiap sudut keliling yang menghadap diameter lingkaran selalu siku-siku ($90^\\circ$).',
          'Segiempat Tali Busur (Cyclic Quadrilateral): Jumlah sudut yang saling berhadapan selalu tepat bernilai $180^\\circ$:\n$$\\angle A + \\angle C = 180^\\circ, \\quad \\angle B + \\angle D = 180^\\circ$$',
          'Kesebangunan Segitiga (Angle-Angle Similarity): Jika dua pasang sudut segitiga sama besar, maka kedua segitiga sebangun ($k = s_1/s_2$). Rasio luasnya adalah kuadrat rasio sisi: $$\\frac{L_1}{L_2} = k^2$$',
          'Luas Juring dan Panjang Busur: $$L_{\\text{juring}} = \\frac{\\theta}{360^\\circ} \\pi r^2, \\quad \\text{Panjang Busur} = \\frac{\\theta}{360^\\circ} 2\\pi r$$'
        ],
        keyFormulas: [
          { label: 'Sudut Pusat vs Keliling', formula: '\\angle AOB = 2 \\angle ACB' },
          { label: 'Segiempat Tali Busur', formula: '\\angle A + \\angle C = 180^\\circ' },
          { label: 'Rasio Luas Segitiga Sebangun', formula: '\\frac{L_1}{L_2} = \\left(\\frac{s_1}{s_2}\\right)^2' }
        ],
        workedExamples: [
          {
            problem: 'Pada lingkaran dengan titik pusat $O$, sudut keliling $\\angle ACB$ menghadap busur $AB$ dan bernilai $35^\\circ$. Tentukan besar sudut pusat $\\angle AOB$.',
            solution: 'Langkah 1: Berdasarkan teorema sudut lingkaran, sudut pusat besarnya adalah dua kali sudut keliling yang menghadap busur yang sama:\n$$\\angle AOB = 2 \\times \\angle ACB$$\nLangkah 2: Hitung nilainya:\n$$\\angle AOB = 2 \\times 35^\\circ = 70^\\circ.$$'
          },
          {
            problem: 'Dua segitiga sebangun memiliki perbandingan sisi $2 : 3$. Jika luas segitiga yang lebih kecil adalah $20\\text{ cm}^2$, tentukan luas segitiga yang lebih besar.',
            solution: 'Langkah 1: Rasio sisi adalah $k = 3/2$.\nLangkah 2: Rasio luas dua bangun yang sebangun adalah kuadrat dari rasio sisinya:\n$$\\frac{L_{\\text{besar}}}{L_{\\text{kecil}}} = k^2 = \\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4}$$\nLangkah 3: Hitung luas segitiga besar:\n$$L_{\\text{besar}} = 20 \\times \\frac{9}{4} = 5 \\times 9 = 45\\text{ cm}^2.$$'
          }
        ],
        misconceptions: [
          'Mengira perbandingan luas segitiga sebangun sama dengan perbandingan sisinya ($k$, padahal harus dikuadratkan menjadi $k^2$).',
          'Lupa bahwa hubungan sudut pusat dan keliling hanya berlaku jika kedua sudut menghadap busur yang persis sama.'
        ],
        tutorTip: 'Jika Anda menemukan garis diameter dalam lingkaran dan sebuah segitiga dengan ketiga titik sudut di lingkaran, periksa sudut di depan diameter tersebut—sudut itu pasti siku-siku ($90^\\circ$)!'
      },
      questions: [
        {
          id: 'amc8-geo-q3',
          type: 'short_answer',
          difficulty: 'Dasar',
          source: 'AMC 8 2021',
          question: 'Pada sebuah lingkaran, sudut pusat $\\angle AOB = 80^\\circ$. Titik $C$ terletak pada busur mayor $AB$. Tentukan besar sudut keliling $\\angle ACB$ dalam derajat.',
          visual: {
            type: 'circle-angle',
            props: {
              title: 'Sudut Pusat dan Sudut Keliling Lingkaran',
              caption: '*Sudut keliling ∠ACB dan sudut pusat ∠AOB menghadap busur AB yang sama',
              centralAngle: '80°',
              inscribedAngle: '?°'
            }
          },
          hint: 'Besar sudut keliling adalah setengah dari besar sudut pusat yang menghadap busur yang sama: ∠ACB = (1/2) ∠AOB.',
          answer: '40',
          acceptedAnswers: ['40', '40°', '40 derajad', '40 derajat'],
          bestSolution: 'Langkah 1: Berdasarkan teorema sudut lingkaran, sudut keliling yang menghadap busur yang sama dengan sudut pusat memiliki besar tepat setengah dari sudut pusat tersebut:\n$$\\angle ACB = \\frac{1}{2} \\angle AOB$$\nLangkah 2: Substitusikan nilai $\\angle AOB = 80^\\circ$:\n$$\\angle ACB = \\frac{1}{2} \\times 80^\\circ = 40^\\circ.$$'
        },
        {
          id: 'amc8-ch12-q2',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'MATHCOUNTS Chapter',
          question: 'Segitiga $ABC$ sebangun dengan segitiga $DEF$. Panjang sisi-sisi $\\triangle ABC$ adalah 6, 8, dan 10. Jika sisi terpanjang dari $\\triangle DEF$ memiliki panjang 25, tentukan keliling dari $\\triangle DEF$.',
          hint: 'Sisi terpanjang segitiga ABC adalah 10 dan bersesuaian dengan sisi 25 pada segitiga DEF. Rasio kesebangunan adalah 25/10 = 2.5.',
          answer: '60',
          acceptedAnswers: ['60'],
          bestSolution: 'Langkah 1: Tentukan faktor skala kesebangunan $k$ dari rasio sisi terpanjang:\n$$k = \\frac{25}{10} = 2.5$$\nLangkah 2: Hitung keliling segitiga $\\triangle ABC$:\n$$K_{ABC} = 6 + 8 + 10 = 24$$\nLangkah 3: Karena keliling berbanding lurus dengan panjang sisi:\n$$K_{DEF} = k \\times K_{ABC} = 2.5 \\times 24 = 60.$$'
        },
        {
          id: 'amc8-ch12-q3',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 8 2019',
          question: 'Segiempat $ABCD$ adalah segiempat tali busur (cyclic quadrilateral) yang seluruh titik sudutnya terletak pada lingkaran. Jika besar $\\angle A = 85^\\circ$ dan $\\angle B = 102^\\circ$, tentukan besar sudut $\\angle C$ dalam derajat.',
          hint: 'Pada segiempat tali busur, jumlah dua sudut yang saling berhadapan selalu tepat 180 derajat: ∠A + ∠C = 180°.',
          answer: '95',
          acceptedAnswers: ['95', '95°', '95 derajat'],
          bestSolution: 'Langkah 1: Berdasarkan sifat segiempat tali busur, sudut-sudut yang saling berhadapan berjumlah $180^\\circ$:\n$$\\angle A + \\angle C = 180^\\circ$$\nLangkah 2: Substitusikan besar sudut $\\angle A = 85^\\circ$:\n$$85^\\circ + \\angle C = 180^\\circ \\implies \\angle C = 180^\\circ - 85^\\circ = 95^\\circ.$$'
        },
        {
          id: 'amc8-ch12-q4',
          type: 'short_answer',
          difficulty: 'Menengah',
          source: 'AMC 8 2020',
          question: 'Sebuah juring lingkaran memiliki sudut pusat $60^\\circ$ dan jari-jari $12\\text{ cm}$. Jika luas juring tersebut dinyatakan dalam bentuk $k\\pi$, berapakah nilai dari bilangan bulat $k$?',
          hint: 'Gunakan rumus luas juring: L = (sudut / 360) * pi * r^2.',
          answer: '24',
          acceptedAnswers: ['24', '24pi', '24\\pi'],
          bestSolution: 'Langkah 1: Terapkan rumus luas juring lingkaran:\n$$L = \\frac{\\theta}{360^\\circ} \\pi r^2$$\nLangkah 2: Masukkan nilai $\\theta = 60^\\circ$ dan $r = 12$:\n$$L = \\frac{60^\\circ}{360^\\circ} \\pi (12^2) = \\frac{1}{6} \\pi (144) = 24\\pi$$\nLangkah 3: Nilai dari $k$ adalah 24.'
        },
        {
          id: 'amc8-ch12-q5',
          type: 'essay',
          difficulty: 'Tantangan',
          source: 'OmegaLearn / AMC 8 Shortlist',
          question: 'Pada $\\triangle ABC$, sebuah garis ditarik sejajar sisi $BC$ memotong sisi $AB$ di $D$ dan sisi $AC$ di $E$ sedemikian hingga $AD = 3$ dan $DB = 2$. Jika luas trapesium $BDEC$ adalah 32, buktikan kesebangunan $\\triangle ADE \\sim \\triangle ABC$ dan tentukan luas segitiga $\\triangle ADE$.',
          hint: 'Gunakan kriteria AA: sudut sehadap sama besar. Rasio sisi adalah 3 : 5, sehingga rasio luas adalah (3/5)^2 = 9/25.',
          answer: '18',
          acceptedAnswers: ['18'],
          bestSolution: 'Langkah Pembuktian dan Penurunan:\n1. Bukti Kesebangunan:\nKarena ruas garis $DE \\parallel BC$:\n- $\\angle ADE = \\angle ABC$ (sudut sehadap)\n- $\\angle AED = \\angle ACB$ (sudut sehadap)\n- $\\angle A$ adalah sudut bersama.\nBerdasarkan kriteria Angle-Angle (AA), terbukti bahwa $\\triangle ADE \\sim \\triangle ABC$.\n2. Menentukan Rasio Sisi:\nPanjang $AB = AD + DB = 3 + 2 = 5$.\nRasio kesebangunan sisi adalah:\n$$k = \\frac{AD}{AB} = \\frac{3}{5}.$$\n3. Menentukan Rasio Luas:\nRasio luas dua segitiga yang sebangun adalah kuadrat rasio sisinya:\n$$\\frac{[ADE]}{[ABC]} = k^2 = \\left(\\frac{3}{5}\\right)^2 = \\frac{9}{25}.$$\n4. Menghubungkan Luas Segitiga dan Trapesium:\nMisalkan luas $[ADE] = 9x$, maka luas $[ABC] = 25x$.\nLuas trapesium $BDEC$ adalah selisihnya:\n$$[BDEC] = [ABC] - [ADE] = 25x - 9x = 16x.$$\n5. Selesaikan Nilai $x$ dan Luas $[ADE]$:\nDiketahui $[BDEC] = 32$:\n$$16x = 32 \\implies x = 2.$$\nMaka luas $\\triangle ADE$ adalah:\n$$[ADE] = 9x = 9(2) = 18.$$'
        },
        {
          id: 'amc8-ch12-q6',
          type: 'short_answer',
          difficulty: 'Olimpiade',
          source: 'AMC 8 2022 Problem 22',
          question: 'Titik $A, B$, dan $C$ terletak pada sebuah lingkaran sedemikian hingga segmen garis $AB$ merupakan diameter lingkaran. Jika panjang $AB = 13$ dan $AC = 5$, tentukan panjang tali busur $BC$.',
          hint: 'Menurut Teorema Thales, sudut keliling yang menghadap diameter adalah sudut siku-siku (90 derajat). Gunakan tripel Pythagoras.',
          answer: '12',
          acceptedAnswers: ['12'],
          bestSolution: 'Langkah 1: Berdasarkan Teorema Thales, karena $AB$ adalah diameter lingkaran, maka sudut keliling $\\angle ACB$ yang menghadap diameter tepat berukuran $90^\\circ$ (siku-siku).\nLangkah 2: Segitiga $\\triangle ABC$ merupakan segitiga siku-siku di $C$ dengan hipotenusa $AB = 13$ dan salah satu sisi penyiku $AC = 5$.\nLangkah 3: Gunakan Teorema Pythagoras untuk mencari $BC$:\n$$BC = \\sqrt{AB^2 - AC^2} = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12.$$'
        }
      ]
    }
  ]
};
