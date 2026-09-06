/**
 * Data Kurikulum Kelas 10 SMA (Fase E)
 * 8 Bab Wajib Resmi Sesuai Buku Siswa Matematika
 */

export const grade10Data = {
  "grade": 10,
  "level": "SMA",
  "phase": "Fase E",
  "description": "Eksponen & Logaritma, Barisan & Deret, Vektor, Trigonometri, SPLTV & SPtLDV, Fungsi Kuadrat, Statistika, serta Peluang",
  "chapters": [
    {
      "id": "sma10-bab1-eksponen-logaritma",
      "title": "Bab 1: Eksponen dan Logaritma",
      "summary": {
        "overview": "Di alam semesta, banyak fenomena fisik dan hayati yang tidak berkembang secara perlahan dan konstan, melainkan melipatgandakan diri dengan laju yang luar biasa cepat. Pembelahan satu sel bakteri menjadi dua, empat, delapan, hingga jutaan sel hanya dalam hitungan jam, serta laju penyebaran infeksi virus dalam epidemiologi adalah contoh nyata dari Pertumbuhan Eksponensial. Sebaliknya, peluruhan isotop zat radioaktif dalam menentukan usia fosil purbakala (metode penanggalan karbon-14) atau penyusutan nilai efektivitas obat dalam plasma darah dimodelkan melalui Peluruhan Eksponensial.\n\nNamun, ketika angka-angka tersebut menjadi terlampau raksasa atau terlampau kerdil, para ilmuwan membutuhkan cara untuk menyederhanakan skala pengamatan. Skala gempa bumi Richter, derajat keasaman larutan kimia (pH), hingga intensitas kebisingan suara dalam desibel (dB) semuanya memanfaatkan konsep Logaritma. Logaritma adalah inversi alami dari perpangkatan eksponen yang mengubah relasi perkalian angka raksasa menjadi penjumlahan skala yang terukur.\n\nBab ini menuntun siswa menguasai hukum-hukum fundamental operasi eksponen rasional, teknik merasionalkan bentuk akar irasional menggunakan bentuk sekawan, serta sifat-sifat dasar dan manipulasi aljabar logaritma. Siswa juga dilatih memodelkan dan menyelesaikan problem kontekstual pertumbuhan dan peluruhan eksponensial secara analitis.",
        "coreConcepts": [
          "Sifat Eksponen Bulat & Rasional: Untuk basis real positif $a > 0$ berlaku hukum: $a^m \\cdot a^n = a^{m+n}$, $\\frac{a^m}{a^n} = a^{m-n}$, $(a^m)^n = a^{mn}$, $(ab)^n = a^n b^n$, dan bentuk pangkat pecahan $a^{m/n} = \\sqrt[n]{a^m}$. Definisi pangkat negatif dan nol: $a^{-n} = \\frac{1}{a^n}$ dan $a^0 = 1$ ($a \\neq 0$).",
          "Fungsi Eksponensial $f(x) = b \\cdot a^x$: Jika $a > 1$, fungsi merepresentasikan model PERTUMBUHAN eksponensial (seperti saldo tabungan bunga berbunga atau koloni mikroba). Jika $0 < a < 1$, fungsi memodelkan PELURUHAN eksponensial (seperti massa radioaktif atau penurunan efikasi obat).",
          "Merasionalkan Bentuk Akar: Menyederhanakan pecahan yang penyebutnya memuat bentuk akar tak rasional dengan mengalikan bentuk sekawan (conjugate):\n- Bentuk tunggal: $\\frac{a}{\\sqrt{b}} = \\frac{a\\sqrt{b}}{b}$\n- Bentuk binomial: $\\frac{c}{\\sqrt{a} + \\sqrt{b}} = \\frac{c(\\sqrt{a} - \\sqrt{b})}{a - b}$.",
          "Definisi & Hubungan Logaritma: Logaritma adalah invers dari fungsi eksponensial: $a^c = b \\iff {}^a\\log b = c$, dengan syarat basis $a > 0, a \\neq 1$ dan numerus $b > 0$. Basis umum 10 lazim ditulis $\\log b$ dan basis bilangan Euler $e \\approx 2{,}718$ ditulis $\\ln b$.",
          "Sifat Operasi Logaritma:\n- Penjumlahan: ${}^a\\log x + {}^a\\log y = {}^a\\log(xy)$\n- Pengurangan: ${}^a\\log x - {}^a\\log y = {}^a\\log\\left(\\frac{x}{y}\\right)$\n- Pemangkatan: ${}^a\\log(x^n) = n \\cdot {}^a\\log x$\n- Rantai Perkalian: ${}^a\\log b \\cdot {}^b\\log c = {}^a\\log c$\n- Perubahan Basis: ${}^a\\log b = \\frac{{}^c\\log b}{{}^c\\log a}$."
        ],
        "workedExamples": [
          {
            "title": "Model Pertumbuhan Koloni Bakteri Eksponensial",
            "problem": "Suatu kultur bakteri pada cawan petri membelah diri menjadi dua setiap 30 menit. Jika pada awal pengamatan terdapat 150 bakteri, tentukan rumus fungsi pertumbuhan bakteri setelah $t$ jam dan hitung populasi bakteri setelah 3 jam pengamatan.",
            "solution": "Langkah 1: Tentukan frekuensi pembelahan dalam $t$ jam.\nSetiap jam terdapat 2 kali periode 30 menit, sehingga dalam $t$ jam terjadi $n = 2t$ kali pembelahan.\n\nLangkah 2: Susun model fungsi pertumbuhan:\n$$N(t) = N_0 \\cdot 2^{2t} = 150 \\cdot 2^{2t}$$\n\nLangkah 3: Hitung untuk durasi $t = 3$ jam:\n$$n = 2(3) = 6 \\text{ kali pembelahan}$$\n$$N(3) = 150 \\cdot 2^6 = 150 \\cdot 64 = 9.600$$\nJadi, populasi bakteri setelah 3 jam adalah **9.600 bakteri**."
          },
          {
            "title": "Merasionalkan Penyebut Pecahan Bentuk Akar",
            "problem": "Sederhanakan bentuk pecahan $\\frac{6}{\\sqrt{5} - \\sqrt{2}}$ dengan merasionalkan penyebutnya.",
            "solution": "Langkah 1: Identifikasi bentuk sekawan penyebut.\nBentuk sekawan dari $(\\sqrt{5} - \\sqrt{2})$ adalah $(\\sqrt{5} + \\sqrt{2})$.\n\nLangkah 2: Kalikan pembilang dan penyebut dengan bentuk sekawan:\n$$\\frac{6}{\\sqrt{5} - \\sqrt{2}} \\times \\frac{\\sqrt{5} + \\sqrt{2}}{\\sqrt{5} + \\sqrt{2}} = \\frac{6(\\sqrt{5} + \\sqrt{2})}{(\\sqrt{5})^2 - (\\sqrt{2})^2}$$\n\nLangkah 3: Hitung penyebut:\n$$(\\sqrt{5})^2 - (\\sqrt{2})^2 = 5 - 2 = 3$$\n\nLangkah 4: Sederhanakan pecahan:\n$$\\frac{6(\\sqrt{5} + \\sqrt{2})}{3} = 2(\\sqrt{5} + \\sqrt{2}) = 2\\sqrt{5} + 2\\sqrt{2}$$\nBentuk rasionalnya adalah **$2\\sqrt{5} + 2\\sqrt{2}$**."
          }
        ],
        "keyFormulas": [
          {
            "label": "Definisi Logaritma",
            "formula": "a^c = b \\iff {}^a\\log b = c \\quad (a > 0, a \\neq 1, b > 0)"
          },
          {
            "label": "Sifat Penjumlahan Logaritma",
            "formula": "{}^a\\log x + {}^a\\log y = {}^a\\log(x \\cdot y)"
          },
          {
            "label": "Sifat Pengurangan Logaritma",
            "formula": "{}^a\\log x - {}^a\\log y = {}^a\\log\\left(\\frac{x}{y}\\right)"
          },
          {
            "label": "Merasionalkan Akar Binomial",
            "formula": "\\frac{c}{\\sqrt{a} + \\sqrt{b}} = \\frac{c(\\sqrt{a} - \\sqrt{b})}{a - b}"
          },
          {
            "label": "Model Pertumbuhan Eksponensial",
            "formula": "N(t) = N_0 \\cdot a^{kt}"
          }
        ],
        "misconceptions": [
          "Menjumlahkan logaritma secara keliru: sering mengira ${}^a\\log(x + y) = {}^a\\log x + {}^a\\log y$. Penjumlahan logaritma berasal dari perkalian numerus: ${}^a\\log(x \\cdot y) = {}^a\\log x + {}^a\\log y$.",
          "Mengabaikan syarat basis dan numerus pada persamaan logaritma: numerus tidak boleh bernilai negatif atau nol ($b > 0$), dan basis harus positif serta tidak sama dengan 1 ($a > 0, a \\neq 1$)."
        ],
        "tutorTip": "Ingat bahwa nilai logaritma pada dasarnya adalah pertanyaan: 'Basis pangkat berapa yang menghasilkan numerus?' Misalnya ${}^2\\log 32 = 5$ karena $2^5 = 32$."
      },
      "questions": [
        {
          "id": "sma10-b1-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Nilai dari ${}^2\\log 16 + {}^3\\log 27 - {}^5\\log 25$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "5"
            },
            {
              "key": "B",
              "text": "7"
            },
            {
              "key": "C",
              "text": "9"
            },
            {
              "key": "D",
              "text": "4"
            }
          ],
          "correctAnswer": "A",
          "hint": "Ubah numerus ke bentuk perpangkatan basisnya: $16 = 2^4$, $27 = 3^3$, dan $25 = 5^2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Sederhanakan masing-masing suku logaritma:\n- ${}^2\\log 16 = {}^2\\log(2^4) = 4$\n- ${}^3\\log 27 = {}^3\\log(3^3) = 3$\n- ${}^5\\log 25 = {}^5\\log(5^2) = 2$\n2. Operasikan seluruh suku:\n$$4 + 3 - 2 = 5$$\nJadi, nilai akhirnya adalah **5** (Opsi A)."
        },
        {
          "id": "sma10-b1-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Bentuk sederhana dari perkalian eksponen $\\frac{a^3 \\cdot b^{-2} \\cdot c^5}{a \\cdot b^3 \\cdot c^{-1}}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\frac{a^2 \\cdot c^6}{b^5}$"
            },
            {
              "key": "B",
              "text": "$\\frac{a^4 \\cdot c^4}{b}$"
            },
            {
              "key": "C",
              "text": "$a^2 \\cdot b^5 \\cdot c^6$"
            },
            {
              "key": "D",
              "text": "$\\frac{a^2 \\cdot c^4}{b^5}$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kurangkan pangkat pembilang dengan pangkat penyebut untuk variabel yang sama: $a^{3-1}$, $b^{-2-3}$, dan $c^{5-(-1)}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Hitung pangkat masing-masing variabel:\n- Variabel $a$: $3 - 1 = 2 \\implies a^2$\n- Variabel $b$: $-2 - 3 = -5 \\implies b^{-5} = \\frac{1}{b^5}$\n- Variabel $c$: $5 - (-1) = 5 + 1 = 6 \\implies c^6$\n2. Gabungkan bentuk perpangkatan positif:\n$$\\frac{a^2 \\cdot c^6}{b^5}$$\nJadi, bentuk sederhananya adalah **$\\frac{a^2 \\cdot c^6}{b^5}$** (Opsi A)."
        },
        {
          "id": "sma10-b1-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bentuk rasional dari pecahan $\\frac{8}{\\sqrt{7} - \\sqrt{3}}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$2\\sqrt{7} + 2\\sqrt{3}$"
            },
            {
              "key": "B",
              "text": "$2\\sqrt{7} - 2\\sqrt{3}$"
            },
            {
              "key": "C",
              "text": "$4\\sqrt{7} + 4\\sqrt{3}$"
            },
            {
              "key": "D",
              "text": "\\sqrt{7} + \\sqrt{3}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kalikan pembilang dan penyebut dengan bentuk sekawan $(\\sqrt{7} + \\sqrt{3})$, lalu bagi dengan $(7 - 3 = 4)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Kalikan dengan bentuk sekawan:\n$$\\frac{8}{\\sqrt{7} - \\sqrt{3}} \\times \\frac{\\sqrt{7} + \\sqrt{3}}{\\sqrt{7} + \\sqrt{3}} = \\frac{8(\\sqrt{7} + \\sqrt{3})}{(\\sqrt{7})^2 - (\\sqrt{3})^2}$$\n2. Hitung penyebut: $7 - 3 = 4$\n3. Sederhanakan:\n$$\\frac{8(\\sqrt{7} + \\sqrt{3})}{4} = 2(\\sqrt{7} + \\sqrt{3}) = 2\\sqrt{7} + 2\\sqrt{3}$$\nBentuk rasionalnya adalah **$2\\sqrt{7} + 2\\sqrt{3}$** (Opsi A)."
        },
        {
          "id": "sma10-b1-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Jumlah populasi suatu jenis serangga hama berlipat ganda setiap 4 hari sekali. Jika mula-mula terdapat 200 ekor serangga, setelah berapa harikah populasi serangga tersebut mencapai 6.400 ekor?",
          "options": [
            {
              "key": "A",
              "text": "20 hari"
            },
            {
              "key": "B",
              "text": "16 hari"
            },
            {
              "key": "C",
              "text": "24 hari"
            },
            {
              "key": "D",
              "text": "12 hari"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan persamaan $200 \\cdot 2^n = 6.400$, cari nilai periode pembelahan $n$, lalu kalikan dengan 4 hari.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Buat model persamaan eksponensial:\n$$200 \\cdot 2^n = 6.400$$\n2. Bagi kedua ruas dengan 200:\n$$2^n = \\frac{6.400}{200} = 32$$\n3. Selesaikan nilai $n$ menggunakan sifat eksponen:\n$$2^n = 2^5 \\implies n = 5$$\n4. Karena satu periode pembelahan adalah 4 hari, maka total waktu yang dibutuhkan adalah:\n$$t = 5 \\times 4\\text{ hari} = 20\\text{ hari}$$\nPopulasi mencapai 6.400 ekor setelah **20 hari** (Opsi A)."
        }
      ]
    },
    {
      "id": "sma10-bab2-barisan-deret",
      "title": "Bab 2: Barisan dan Deret",
      "summary": {
        "overview": "Keteraturan susunan bilangan dapat dijumpai dalam berbagai fenomena alam dan rekayasa manusia. Susunan pola biji pada bunga matahari, pola fraktal percabangan pohon, jumlah setoran tabungan harian yang dinaikkan secara teratur, hingga formasi penataan tribun stadion olahraga yang bertambah lebar ke arah belakang, seluruhnya mencerminkan struktur matematis Barisan dan Deret.\n\nDalam matematika Fase E, barisan dan deret menjadi gerbang awal pemodelan proses diskrit. Barisan Aritmetika memodelkan pertumbuhan dengan selisih atau beda penambahan yang konstan, sementara Barisan Geometri menggambarkan pertumbuhan atau peluruhan dengan rasio pelipatan yang berulang. Selain itu, konsep Deret Geometri Tak Hingga membuka pemahaman siswa mengenai bagaimana suatu proses penjumlahan tak hingga suku dapat menghasilkan nilai total yang berhingga (konvergen), sebagaimana lintasan total bola tenis yang memantul berulang kali di atas lantai semen hingga diam sempurna.\n\nBab ini membimbing siswa memahami perbedaan karakteristik fundamental barisan aritmetika dan geometri, menurunkan rumus suku ke-$n$ ($U_n$), menghitung jumlah deret hingga suku ke-$n$ ($S_n$), serta menerapkan pemahaman tersebut pada situasi kontekstual nyata seperti investasi sederhana dan pergerakan objek mekanis.",
        "coreConcepts": [
          "Barisan Aritmetika: Pola barisan dengan selisih dua suku berturutan selalu sama ($b = U_n - U_{n-1}$). Rumus suku ke-$n$: $U_n = a + (n - 1)b$, di mana $a$ adalah suku awal.",
          "Deret Aritmetika: Jumlah suku-suku barisan aritmetika: $S_n = \\frac{n}{2}(a + U_n) = \\frac{n}{2}[2a + (n - 1)b]$. Hubungan suku dan deret: $U_n = S_n - S_{n-1}$.",
          "Barisan Geometri: Pola barisan dengan rasio hasil bagi dua suku berturutan selalu konstan ($r = \\frac{U_n}{U_{n-1}}$). Rumus suku ke-$n$: $U_n = a \\cdot r^{n-1}$.",
          "Deret Geometri: Jumlah suku-suku barisan geometri: $S_n = \\frac{a(r^n - 1)}{r - 1}$ ($r > 1$) atau $S_n = \\frac{a(1 - r^n)}{1 - r}$ ($r < 1$).",
          "Deret Geometri Tak Hingga Konvergen: Jika nilai mutlak rasio memenuhi $|r| < 1$, maka deret memiliki jumlah terhingga: $S_\\infty = \\frac{a}{1 - r}$. Jika $|r| \\ge 1$, deret bersifat divergen."
        ],
        "workedExamples": [
          {
            "title": "Menghitung Jumlah Produksi Barang (Deret Aritmetika)",
            "problem": "Sebuah pabrik garmen pada bulan pertama memproduksi 1.000 potong kemeja. Karena penambahan tenaga kerja, produksi ditingkatkan secara stabil sebanyak 150 potong kemeja setiap bulan. Berapakah total kemeja yang berhasil diproduksi pabrik tersebut selama 1 tahun pertama (12 bulan)?",
            "solution": "Langkah 1: Identifikasi parameter barisan aritmetika:\n- Suku pertama: $a = 1.000$\n- Beda penambahan: $b = 150$\n- Jumlah periode waktu: $n = 12\\text{ bulan}$\n\nLangkah 2: Gunakan formula jumlah deret aritmetika:\n$$S_n = \\frac{n}{2}[2a + (n - 1)b]$$\n$$S_{12} = \\frac{12}{2}[2(1.000) + (12 - 1)(150)]$$\n\nLangkah 3: Hitung nilai numerik:\n$$S_{12} = 6 \\times [2.000 + 11(150)] = 6 \\times [2.000 + 1.650] = 6 \\times 3.650 = 21.900$$\nJadi, total produksi selama 1 tahun pertama adalah **21.900 potong kemeja**."
          },
          {
            "title": "Panjang Lintasan Bola Memantul Deret Tak Hingga",
            "problem": "Sebuah bola dijatuhkan dari ketinggian 10 meter dan memantul tegak lurus dengan ketinggian $\\frac{3}{4}$ dari tinggi sebelumnya secara kontinu sampai berhenti. Berapakah panjang seluruh lintasan bola tersebut?",
            "solution": "Langkah 1: Identifikasi tinggi awal dan rasio pantulan:\n- Ketinggian mula-mula: $h_0 = 10\\text{ meter}$\n- Rasio pemantulan: $r = \\frac{p}{q} = \\frac{3}{4}$ dengan $p = 3$ dan $q = 4$.\n\nLangkah 2: Terapkan rumus praktis lintasan bola memantul:\n$$S_{\\text{total}} = h_0 \\cdot \\frac{q + p}{q - p}$$\n\nLangkah 3: Masukkan angka:\n$$S_{\\text{total}} = 10 \\cdot \\frac{4 + 3}{4 - 3} = 10 \\cdot \\frac{7}{1} = 70\\text{ meter}$$\nJadi, panjang lintasan total bola sampai berhenti adalah **70 meter**."
          }
        ],
        "keyFormulas": [
          {
            "label": "Suku ke-n Aritmetika",
            "formula": "U_n = a + (n - 1)b"
          },
          {
            "label": "Jumlah n Suku Aritmetika",
            "formula": "S_n = \\frac{n}{2}[2a + (n - 1)b]"
          },
          {
            "label": "Suku ke-n Geometri",
            "formula": "U_n = a \\cdot r^{n-1}"
          },
          {
            "label": "Deret Geometri Tak Hingga",
            "formula": "S_\\infty = \\frac{a}{1 - r} \\quad (|r| < 1)"
          }
        ],
        "misconceptions": [
          "Tertukar antara rumus barisan aritmetika dan barisan geometri pada pola perkalian berulang.",
          "Lupa bahwa pada pemantulan bola terjadi dua arah pergerakan (naik dan turun kembali) untuk setiap pantulan setelah jatuhan pertama."
        ],
        "tutorTip": "Ingat rumus praktis lintasan bola memantul dari ketinggian $h$ dengan rasio $\\frac{p}{q}$: $S = h \\times \\frac{q+p}{q-p}$."
      },
      "questions": [
        {
          "id": "sma10-b2-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Suku ke-10 dari barisan aritmetika $3, 7, 11, 15, \\dots$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "39"
            },
            {
              "key": "B",
              "text": "43"
            },
            {
              "key": "C",
              "text": "35"
            },
            {
              "key": "D",
              "text": "41"
            }
          ],
          "correctAnswer": "A",
          "hint": "Tentukan suku pertama $a = 3$ dan beda $b = 4$, lalu gunakan rumus $U_{10} = a + 9b$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Suku pertama: $a = 3$, beda: $b = 7 - 3 = 4$.\n2. Masukkan ke rumus suku ke-$n$:\n$$U_{10} = 3 + (10 - 1)(4) = 3 + 9(4) = 3 + 36 = 39$$\nNilai suku ke-10 adalah **39** (Opsi A)."
        },
        {
          "id": "sma10-b2-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Jumlah 5 suku pertama dari deret geometri $2 + 6 + 18 + \\dots$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "242"
            },
            {
              "key": "B",
              "text": "240"
            },
            {
              "key": "C",
              "text": "162"
            },
            {
              "key": "D",
              "text": "484"
            }
          ],
          "correctAnswer": "A",
          "hint": "Suku pertama $a = 2$, rasio $r = 3$. Gunakan rumus $S_5 = \\frac{a(r^5 - 1)}{r - 1}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Identifikasi $a = 2$ dan $r = \\frac{6}{2} = 3$.\n2. Masukkan ke formula jumlah deret geometri:\n$$S_5 = \\frac{2(3^5 - 1)}{3 - 1} = \\frac{2(243 - 1)}{2} = 242$$\nJumlah 5 suku pertama adalah **242** (Opsi A)."
        },
        {
          "id": "sma10-b2-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah bola tenis dijatuhkan dari ketinggian 16 meter ke lantai. Setiap kali memantul, bola mencapai tinggi $\\frac{1}{2}$ dari ketinggian sebelumnya sampai berhenti. Panjang seluruh lintasan bola adalah...",
          "options": [
            {
              "key": "A",
              "text": "48 meter"
            },
            {
              "key": "B",
              "text": "32 meter"
            },
            {
              "key": "C",
              "text": "64 meter"
            },
            {
              "key": "D",
              "text": "24 meter"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan formula praktis: $S = h_0 \\cdot \\frac{q + p}{q - p}$ dengan $h_0 = 16$ dan rasio $\\frac{p}{q} = \\frac{1}{2}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Diketahui $h_0 = 16\\text{ m}$ dan rasio $r = \\frac{1}{2}$ ($p = 1, q = 2$).\n2. Gunakan rumus terpadu lintasan bola memantul:\n$$S_{\\text{total}} = 16 \\cdot \\frac{2 + 1}{2 - 1} = 16 \\cdot \\frac{3}{1} = 48\\text{ meter}$$\nPanjang seluruh lintasan bola adalah **48 meter** (Opsi A)."
        },
        {
          "id": "sma10-b2-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Diketahui suku ke-3 suatu deret aritmetika adalah 11 dan jumlah 6 suku pertamanya adalah 78. Nilai suku pertama dan beda deret tersebut berturut-turut adalah...",
          "options": [
            {
              "key": "A",
              "text": "3 dan 4"
            },
            {
              "key": "B",
              "text": "4 dan 3"
            },
            {
              "key": "C",
              "text": "5 dan 3"
            },
            {
              "key": "D",
              "text": "2 dan 4"
            }
          ],
          "correctAnswer": "A",
          "hint": "Susun SPLDV dari $U_3 = a + 2b = 11$ dan $S_6 = 3(2a + 5b) = 78$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Persamaan 1: $a + 2b = 11 \\implies a = 11 - 2b$.\n2. Persamaan 2: $S_6 = \\frac{6}{2}(2a + 5b) = 78 \\implies 3(2a + 5b) = 78 \\implies 2a + 5b = 26$.\n3. Substitusikan $a$ ke persamaan 2:\n$$2(11 - 2b) + 5b = 26 \\implies 22 - 4b + 5b = 26 \\implies b = 4$$\n4. Hitung nilai $a$:\n$$a = 11 - 2(4) = 11 - 8 = 3$$\nJadi, suku pertama adalah **3** dan beda adalah **4** (Opsi A)."
        }
      ]
    },
    {
      "id": "sma10-bab3-vektor",
      "title": "Bab 3: Vektor dan Operasinya",
      "summary": {
        "overview": "Dalam ilmu fisika dan navigasi transportasi, kita tidak cukup hanya mengetahui seberapa besar suatu nilai, melainkan juga harus mengetahui ke mana arah besaran tersebut bekerja. Menyebutkan bahwa sebuah kapal laut melaju dengan kecepatan 30 knot tidak memberikan informasi yang lengkap jika kita tidak mengetahui apakah kapal tersebut bergerak menuju arah utara atau barat daya. Besaran yang memiliki nilai (magnitudo) sekaligus arah inilah yang didefinisikan sebagai Vektor.\n\nSecara geometris, vektor digambarkan sebagai ruas garis berarah dengan titik pangkal dan titik ujung panah. Di bidang penerbangan, pilot pesawat terbang memperhitungkan vektor kecepatan hembusan angin silang (crosswind) agar pesawat tidak melenceng dari koordinat landasan pacu bandara. Demikian pula di bidang pengembangan grafika komputer dan game 3D, pergerakan karakter dan simulasi pencahayaan dihitung menggunakan aljabar vektor pada bidang Cartesius dimensi dua ($R^2$) maupun ruang dimensi tiga ($R^3$).\n\nBab ini membekali siswa dengan pemahaman komprehensif mengenai representasi vektor grafis dan komponen aljabar, operasi penjumlahan dan pengurangan vektor menggunakan metode segitiga serta jajaran genjang, penentuan vektor satuan, hingga perkalian skalar dua vektor (dot product) yang menentukan besaran sudut apit antarvektor.",
        "coreConcepts": [
          "Definisi & Komponen Vektor: Vektor pada bidang $\\vec{u} = \\begin{pmatrix} x \\\\ y \\end{pmatrix} = x\\vec{i} + y\\vec{j}$. Panjang atau magnitudo vektor dihitung dengan rumus Pythagoras: $|\\vec{u}| = \\sqrt{x^2 + y^2}$.",
          "Vektor Satuan: Vektor dengan panjang tepat satu satuan yang searah dengan vektor aslinya: $\\vec{e} = \\frac{\\vec{u}}{|\\vec{u}|}$.",
          "Operasi Penjumlahan & Pengurangan Vektor: Dilakukan dengan menjumlahkan atau mengurangkan komponen yang seletak. Secara geometris menggunakan aturan segitiga atau aturan jajaran genjang.",
          "Perkalian Skalar Dua Vektor (Dot Product): Didefinisikan secara aljabar sebagai $\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2$ dan secara geometris sebagai $\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\cdot |\\vec{v}| \\cos \\theta$, di mana $\\theta$ adalah sudut apit kedua vektor.",
          "Dua Vektor Tegak Lurus (Ortogonal): Dua vektor saling tegak lurus jika dan hanya jika hasil kali skalarnya sama dengan nol: $\\vec{u} \\cdot \\vec{v} = 0$ (karena $\\cos 90^\\circ = 0$)."
        ],
        "workedExamples": [
          {
            "title": "Menghitung Panjang Vektor dan Vektor Satuan",
            "problem": "Diketahui vektor $\\vec{a} = 6\\vec{i} - 8\\vec{j}$. Tentukan panjang vektor $|\\vec{a}|$ dan tentukan vektor satuan yang searah dengan $\\vec{a}$.",
            "solution": "Langkah 1: Hitung panjang vektor menggunakan rumus Pythagoras:\n$$|\\vec{a}| = \\sqrt{6^2 + (-8)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$$\n\nLangkah 2: Hitung vektor satuan dengan membagi komponen vektor dengan panjangnya:\n$$\\vec{e} = \\frac{\\vec{a}}{|\\vec{a}|} = \\frac{6\\vec{i} - 8\\vec{j}}{10} = \\frac{3}{5}\\vec{i} - \\frac{4}{5}\\vec{j}$$\nPanjang vektor adalah **10 satuan** dan vektor satuannya adalah **$\\frac{3}{5}\\vec{i} - \\frac{4}{5}\\vec{j}$**."
          },
          {
            "title": "Menentukan Sudut Apit Dua Vektor",
            "problem": "Diketahui vektor $\\vec{u} = \\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix}$ dan $\\vec{v} = \\begin{pmatrix} 2 \\\\ 4 \\end{pmatrix}$. Tentukan nilai kosinus sudut apit antara kedua vektor tersebut.",
            "solution": "Langkah 1: Hitung hasil kali skalar (dot product):\n$$\\vec{u} \\cdot \\vec{v} = (3)(2) + (1)(4) = 6 + 4 = 10$$\n\nLangkah 2: Hitung panjang masing-masing vektor:\n$$|\\vec{u}| = \\sqrt{3^2 + 1^2} = \\sqrt{9 + 1} = \\sqrt{10}$$\n$$|\\vec{v}| = \\sqrt{2^2 + 4^2} = \\sqrt{4 + 16} = \\sqrt{20} = 2\\sqrt{5}$$\n\nLangkah 3: Gunakan formula sudut apit kosinus:\n$$\\cos \\theta = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\cdot |\\vec{v}|} = \\frac{10}{\\sqrt{10} \\cdot 2\\sqrt{5}} = \\frac{10}{2\\sqrt{50}} = \\frac{10}{10\\sqrt{2}} = \\frac{1}{\\sqrt{2}} = \\frac{1}{2}\\sqrt{2}$$\nNilai kosinus sudut apit adalah **$\\frac{1}{2}\\sqrt{2}$** (sehingga sudut $\\theta = 45^\\circ$)."
          }
        ],
        "keyFormulas": [
          {
            "label": "Panjang Vektor",
            "formula": "|\\vec{u}| = \\sqrt{x^2 + y^2}"
          },
          {
            "label": "Vektor Satuan",
            "formula": "\\vec{e} = \\frac{\\vec{u}}{|\\vec{u}|}"
          },
          {
            "label": "Perkalian Skalar Dot Product",
            "formula": "\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2 = |\\vec{u}||\\vec{v}|\\cos\\theta"
          },
          {
            "label": "Syarat Ortogonalitas (Tegak Lurus)",
            "formula": "\\vec{u} \\cdot \\vec{v} = 0"
          }
        ],
        "misconceptions": [
          "Menjumlahkan panjang dua vektor secara langsung: $|\\vec{u} + \\vec{v}| \\neq |\\vec{u}| + |\\vec{v}|$ kecuali kedua vektor sejajar dan searah.",
          "Mengira hasil perkalian dot product berupa vektor. Dot product menghasilkan besaran skalar (bilangan tunggal)."
        ],
        "tutorTip": "Untuk membuktikan dua vektor tegak lurus, cukup kalikan komponennya $x_1 x_2 + y_1 y_2$. Jika hasilnya 0, maka keduanya pasti saling siku-siku ($90^\\circ$)!"
      },
      "questions": [
        {
          "id": "sma10-b3-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Panjang dari vektor $\\vec{v} = 5\\vec{i} - 12\\vec{j}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "13 satuan"
            },
            {
              "key": "B",
              "text": "17 satuan"
            },
            {
              "key": "C",
              "text": "7 satuan"
            },
            {
              "key": "D",
              "text": "15 satuan"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan teorema Pythagoras: $|\\vec{v}| = \\sqrt{x^2 + y^2} = \\sqrt{5^2 + (-12)^2}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Komponen: $x = 5, y = -12$.\n2. Panjang vektor:\n$$|\\vec{v}| = \\sqrt{5^2 + (-12)^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$$\nPanjang vektor adalah **13 satuan** (Opsi A)."
        },
        {
          "id": "sma10-b3-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Jika $\\vec{a} = \\begin{pmatrix} 2 \\\\ -3 \\end{pmatrix}$ dan $\\vec{b} = \\begin{pmatrix} 4 \\\\ 1 \\end{pmatrix}$, maka vektor $2\\vec{a} + \\vec{b}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\begin{pmatrix} 8 \\\\ -5 \\end{pmatrix}$"
            },
            {
              "key": "B",
              "text": "$\\begin{pmatrix} 6 \\\\ -2 \\end{pmatrix}$"
            },
            {
              "key": "C",
              "text": "$\\begin{pmatrix} 8 \\\\ -7 \\end{pmatrix}$"
            },
            {
              "key": "D",
              "text": "$\\begin{pmatrix} 10 \\\\ -5 \\end{pmatrix}$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kalikan skalar 2 ke vektor $\\vec{a}$, lalu jumlahkan komponen seletaknya dengan $\\vec{b}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $2\\vec{a} = 2\\begin{pmatrix} 2 \\\\ -3 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ -6 \\end{pmatrix}$.\n2. Jumlahkan dengan $\\vec{b}$:\n$$\\begin{pmatrix} 4 \\\\ -6 \\end{pmatrix} + \\begin{pmatrix} 4 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 4 + 4 \\\\ -6 + 1 \\end{pmatrix} = \\begin{pmatrix} 8 \\\\ -5 \\end{pmatrix}$$\nHasilnya adalah **$\\begin{pmatrix} 8 \\\\ -5 \\end{pmatrix}$** (Opsi A)."
        },
        {
          "id": "sma10-b3-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Diketahui vektor $\\vec{u} = 3\\vec{i} + 4\\vec{j}$ dan $\\vec{v} = 6\\vec{i} - 2\\vec{j}$. Hasil perkalian skalar (dot product) $\\vec{u} \\cdot \\vec{v}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "10"
            },
            {
              "key": "B",
              "text": "26"
            },
            {
              "key": "C",
              "text": "14"
            },
            {
              "key": "D",
              "text": "18"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan $\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Komponen: $x_1 = 3, y_1 = 4$ dan $x_2 = 6, y_2 = -2$.\n2. Dot product:\n$$\\vec{u} \\cdot \\vec{v} = (3)(6) + (4)(-2) = 18 - 8 = 10$$\nHasil perkalian skalar adalah **10** (Opsi A)."
        },
        {
          "id": "sma10-b3-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Vektor $\\vec{p} = k\\vec{i} + 6\\vec{j}$ saling tegak lurus dengan vektor $\\vec{q} = 3\\vec{i} - 2\\vec{j}$. Nilai $k$ yang memenuhi adalah...",
          "options": [
            {
              "key": "A",
              "text": "4"
            },
            {
              "key": "B",
              "text": "-4"
            },
            {
              "key": "C",
              "text": "6"
            },
            {
              "key": "D",
              "text": "-6"
            }
          ],
          "correctAnswer": "A",
          "hint": "Dua vektor tegak lurus jika hasil kali skalarnya sama dengan nol: $\\vec{p} \\cdot \\vec{q} = 0$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Syarat tegak lurus: $\\vec{p} \\cdot \\vec{q} = 0$\n2. Operasikan perkalian komponen:\n$$(k)(3) + (6)(-2) = 0$$\n$$3k - 12 = 0$$\n$$3k = 12 \\implies k = 4$$\nNilai $k$ yang memenuhi adalah **4** (Opsi A)."
        }
      ]
    },
    {
      "id": "sma10-bab4-trigonometri",
      "title": "Bab 4: Trigonometri",
      "summary": {
        "overview": "Bagaimanakah para astronom zaman dahulu mengukur jarak dari bumi ke bulan tanpa pernah terbang ke luar angkasa? Bagaimanakah para insinyur mengukur tinggi puncak gunung atau menara telekomunikasi yang menjulang tanpa harus memanjat puncaknya? Jawabannya terletak pada keindahan ilmu ukur sudut dan segitiga: Trigonometri. Dalam sistem penentuan posisi global (GPS) modern dan navigasi penerbangan pesawat terbang komersial, algoritma trigonometri terus bekerja di latar belakang untuk menghitung koordinat lokasi secara real-time.\n\nKata trigonometri berasal dari bahasa Yunani, trigonon (tiga sudut) dan metron (mengukur). Berawal dari perbandingan panjang sisi-sisi pada segitiga siku-siku, matematikawan merumuskan rasio sinus, kosinus, dan tangen. Dengan bantuan instrumen sederhana seperti klinometer untuk membidik sudut elevasi pandang, tinggi objek arsitektur raksasa dapat dihitung secara presisi menggunakan aljabar trigonometri.\n\nBab ini menuntun siswa menguasai rasio trigonometri dasar pada segitiga siku-siku (sinus, kosinus, tangen), menghafal dan memahami nilai perbandingan sudut-sudut istimewa ($0^\\circ, 30^\\circ, 45^\\circ, 60^\\circ, 90^\\circ$), memahami sudut pada empat kuadran lingkaran satuan, serta menerapkan Aturan Sinus dan Aturan Kosinus untuk memecahkan problem pada segitiga sembarang.",
        "coreConcepts": [
          "Rasio Trigonometri Segitiga Siku-Siku: Untuk sudut lancip $\\alpha$:\n- Sinus: $\\sin \\alpha = \\frac{\\text{depan}}{\\text{miring}}$ (Demi)\n- Kosinus: $\\cos \\alpha = \\frac{\\text{samping}}{\\text{miring}}$ (Sami)\n- Tangen: $\\tan \\alpha = \\frac{\\text{depan}}{\\text{samping}}$ (Desa).",
          "Nilai Sudut Istimewa:\n- $30^\\circ$: $\\sin = \\frac{1}{2}, \\cos = \\frac{1}{2}\\sqrt{3}, \\tan = \\frac{1}{3}\\sqrt{3}$\n- $45^\\circ$: $\\sin = \\frac{1}{2}\\sqrt{2}, \\cos = \\frac{1}{2}\\sqrt{2}, \\tan = 1$\n- $60^\\circ$: $\\sin = \\frac{1}{2}\\sqrt{3}, \\cos = \\frac{1}{2}, \\tan = \\sqrt{3}$.",
          "Sudut Elevasi dan Sudut Depresi: Sudut elevasi adalah sudut dongak dari garis horizontal mata pengamat ke arah objek di atas. Sudut depresi adalah sudut tunduk dari garis horizontal ke arah objek di bawah.",
          "Aturan Sinus (Segitiga Sembarang): $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$. Digunakan jika diketahui sisi dan sudut yang saling berhadapan.",
          "Aturan Kosinus (Segitiga Sembarang): $a^2 = b^2 + c^2 - 2bc \\cos A$. Digunakan jika diketahui dua sisi dan satu sudut apit (sisi-sudut-sisi) atau ketiga sisinya."
        ],
        "workedExamples": [
          {
            "title": "Mengukur Ketinggian Tiang Bendera Menggunakan Tangen",
            "problem": "Seorang siswa dengan tinggi mata 1,5 meter berdiri sejauh 12 meter dari pangkal tiang bendera. Ia memandang puncak tiang dengan sudut elevasi $45^\\circ$. Berapakah tinggi sebenarnya tiang bendera tersebut?",
            "solution": "Langkah 1: Identifikasi variabel geometris:\n- Jarak horizontal (samping): $x = 12\\text{ meter}$\n- Sudut elevasi: $\\alpha = 45^\\circ$\n- Tinggi pengamat: $h_0 = 1{,}5\\text{ meter}$\n\nLangkah 2: Gunakan perbandingan tangen untuk mencari tinggi di atas mata pengamat ($y$):\n$$\\tan 45^\\circ = \\frac{\\text{depan}}{\\text{samping}} = \\frac{y}{12}$$\n$$1 = \\frac{y}{12} \\implies y = 12\\text{ meter}$$\n\nLangkah 3: Jumlahkan dengan tinggi pengamat:\n$$\\text{Tinggi tiang} = y + h_0 = 12 + 1{,}5 = 13{,}5\\text{ meter}$$\nJadi, tinggi tiang bendera tersebut adalah **13,5 meter**."
          },
          {
            "title": "Menghitung Jarak dengan Aturan Kosinus",
            "problem": "Pada segitiga $ABC$, diketahui panjang sisi $b = 6\\text{ cm}$, sisi $c = 10\\text{ cm}$, dan sudut apit $\\angle A = 60^\\circ$. Berapakah panjang sisi $a$?",
            "solution": "Langkah 1: Terapkan Aturan Kosinus:\n$$a^2 = b^2 + c^2 - 2bc \\cos A$$\n\nLangkah 2: Masukkan nilai yang diketahui:\n$$a^2 = 6^2 + 10^2 - 2(6)(10) \\cos 60^\\circ$$\n$$a^2 = 36 + 100 - 120 \\left(\\frac{1}{2}\\right) = 136 - 60 = 76$$\n\nLangkah 3: Tarik akar kuadrat:\n$$a = \\sqrt{76} = \\sqrt{4 \\times 19} = 2\\sqrt{19}\\text{ cm}$$\nPanjang sisi $a$ adalah **$2\\sqrt{19}\\text{ cm}$**."
          }
        ],
        "keyFormulas": [
          {
            "label": "Perbandingan Dasar Siku-Siku",
            "formula": "\\sin\\alpha = \\frac{\\text{de}}{\\text{mi}}, \\; \\cos\\alpha = \\frac{\\text{sa}}{\\text{mi}}, \\; \\tan\\alpha = \\frac{\\text{de}}{\\text{sa}}"
          },
          {
            "label": "Aturan Sinus",
            "formula": "\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}"
          },
          {
            "label": "Aturan Kosinus",
            "formula": "a^2 = b^2 + c^2 - 2bc\\cos A"
          }
        ],
        "misconceptions": [
          "Menerapkan perbandingan Demi, Sami, Desa pada segitiga yang BUKAN siku-siku. Pada segitiga sembarang wajib menggunakan Aturan Sinus atau Aturan Kosinus.",
          "Lupa menambahkan tinggi mata pengamat saat menghitung total ketinggian objek pada persoalan sudut elevasi."
        ],
        "tutorTip": "Ingat singkatan legendaris: Sin-De-Mi (Sinus = Depan/Miring), Cos-Sa-Mi (Kosinus = Samping/Miring), Tan-De-Sa (Tangen = Depan/Samping)!"
      },
      "questions": [
        {
          "id": "sma10-b4-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Pada segitiga siku-siku $ABC$ dengan siku-siku di $B$, panjang sisi $AB = 8\\text{ cm}$ dan sisi $BC = 6\\text{ cm}$. Nilai $\\sin \\angle A$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\frac{3}{5}$"
            },
            {
              "key": "B",
              "text": "$\\frac{4}{5}$"
            },
            {
              "key": "C",
              "text": "$\\frac{3}{4}$"
            },
            {
              "key": "D",
              "text": "$\\frac{4}{3}$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Cari sisi miring $AC$ dengan Pythagoras: $\\sqrt{8^2 + 6^2} = 10$. Sisi depan sudut $A$ adalah $BC = 6$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Sisi miring $AC = \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = 10\\text{ cm}$.\n2. Sisi depan sudut $A$ adalah $BC = 6\\text{ cm}$.\n3. Nilai sinus:\n$$\\sin \\angle A = \\frac{\\text{depan}}{\\text{miring}} = \\frac{6}{10} = \\frac{3}{5}$$\nNilai $\\sin \\angle A$ adalah **$\\frac{3}{5}$** (Opsi A)."
        },
        {
          "id": "sma10-b4-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Nilai dari ekspresi trigonometri $\\sin 30^\\circ + \\cos 60^\\circ - \\tan 45^\\circ$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "0"
            },
            {
              "key": "B",
              "text": "1"
            },
            {
              "key": "C",
              "text": "$\\frac{1}{2}$"
            },
            {
              "key": "D",
              "text": "-1"
            }
          ],
          "correctAnswer": "A",
          "hint": "Nilai $\\sin 30^\\circ = \\frac{1}{2}$, $\\cos 60^\\circ = \\frac{1}{2}$, dan $\\tan 45^\\circ = 1$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Masukkan nilai masing-masing sudut istimewa:\n$$\\frac{1}{2} + \\frac{1}{2} - 1 = 1 - 1 = 0$$\nHasilnya adalah **0** (Opsi A)."
        },
        {
          "id": "sma10-b4-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Seorang pengamat mengamati puncak menara dari jarak 20 meter di atas tanah datar. Jika sudut elevasi yang terbentuk adalah $60^\\circ$ dan tinggi mata pengamat diabaikan, maka tinggi menara tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "$20\\sqrt{3}\\text{ meter}$"
            },
            {
              "key": "B",
              "text": "$\\frac{20}{3}\\sqrt{3}\\text{ meter}$"
            },
            {
              "key": "C",
              "text": "$40\\text{ meter}$"
            },
            {
              "key": "D",
              "text": "$20\\text{ meter}$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan $\\tan 60^\\circ = \\frac{t}{20}$ dengan nilai $\\tan 60^\\circ = \\sqrt{3}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Perbandingan tangen:\n$$\\tan 60^\\circ = \\frac{t}{20}$$\n2. Masukkan nilai $\\tan 60^\\circ = \\sqrt{3}$:\n$$\\sqrt{3} = \\frac{t}{20} \\implies t = 20\\sqrt{3}\\text{ meter}$$\nTinggi menara adalah **$20\\sqrt{3}\\text{ meter}$** (Opsi A)."
        },
        {
          "id": "sma10-b4-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Pada segitiga sembarang $ABC$, panjang sisi $a = 8\\text{ cm}$, sisi $b = 10\\text{ cm}$, dan sudut apit $\\angle C = 60^\\circ$. Panjang sisi $c$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$2\\sqrt{21}\\text{ cm}$"
            },
            {
              "key": "B",
              "text": "$2\\sqrt{19}\\text{ cm}$"
            },
            {
              "key": "C",
              "text": "$\\sqrt{84}\\text{ cm}$"
            },
            {
              "key": "D",
              "text": "$6\\text{ cm}$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan Aturan Kosinus: $c^2 = a^2 + b^2 - 2ab \\cos C$ dengan $\\cos 60^\\circ = \\frac{1}{2}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Aturan kosinus:\n$$c^2 = 8^2 + 10^2 - 2(8)(10)\\cos 60^\\circ$$\n$$c^2 = 64 + 100 - 160\\left(\\frac{1}{2}\\right) = 164 - 80 = 84$$\n2. Sederhanakan bentuk akar:\n$$c = \\sqrt{84} = \\sqrt{4 \\times 21} = 2\\sqrt{21}\\text{ cm}$$\nPanjang sisi $c$ adalah **$2\\sqrt{21}\\text{ cm}$** (Opsi A)."
        }
      ]
    },
    {
      "id": "sma10-bab5-spltv-sptldv",
      "title": "Bab 5: Sistem Persamaan dan Pertidaksamaan Linear",
      "summary": {
        "overview": "Pengambilan keputusan dalam dunia usaha dan pengelolaan keuangan sering kali melibatkan beberapa variabel yang saling bergantung. Ketika seorang bendahara koperasi sekolah membeli kombinasi buku tulis, pensil, dan penghapus dalam berbagai paket belanjaan, atau seorang manajer produksi mengalokasikan stok bahan baku kain katun, benang, dan kancing untuk membuat tiga jenis pakaian, hubungan kuantitatif antarvariabel tersebut dimodelkan melalui Sistem Persamaan Linear Tiga Variabel (SPLTV). Analisis multi-variabel ini juga esensial dalam farmasi ketika meracik proporsi tiga zat aktif obat agar menghasilkan dosis terapi yang tepat.\n\nSementara itu, keterbatasan anggaran modal, kapasitas gudang penyimpanan barang, dan batas maksimum jam kerja mesin industri tidak dinyatakan dengan persamaan mutlak, melainkan dengan batasan batas (constraints) pertidaksamaan. Penggabungan beberapa kendala pertidaksamaan pada bidang koordinat Cartesius membentuk Sistem Pertidaksamaan Linear Dua Variabel (SPtLDV) yang menghasilkan Daerah Himpunan Penyelesaian (DHP).\n\nBab ini menuntun siswa menguasai teknik aljabar eliminasi dan substitusi untuk menyelesaikan SPLTV secara terstruktur, memodelkan soal cerita transaksi belanja dan percampuran bahan, serta menggambar daerah arsiran himpunan penyelesaian SPtLDV sebagai fondasi materi optimasi Program Linear.",
        "coreConcepts": [
          "Bentuk Umum SPLTV: Sistem dengan 3 variabel $x, y, z$:\n$$\\begin{cases} a_1 x + b_1 y + c_1 z = d_1 \\\\ a_2 x + b_2 y + c_2 z = d_2 \\\\ a_3 x + b_3 y + c_3 z = d_3 \\end{cases}$$\nMetode penyelesaian baku: Eliminasi bertahap untuk mereduksi menjadi SPLDV, lalu substitusi mundur.",
          "Interpretasi Geometris SPLTV: Masing-masing persamaan linear tiga variabel merepresentasikan sebuah bidang datar di ruang dimensi 3. Solusi tunggal tercapai jika ketiga bidang berpotongan tepat pada satu titik koordinat $(x, y, z)$.",
          "Bentuk Pertidaksamaan Linear Dua Variabel: $ax + by \\le c$ atau $ax + by \\ge c$. Garis pembatas $ax + by = c$ digambar penuh (jika tanda $\\le, \\ge$) atau putus-putus (jika tanda $<, >$).",
          "Daerah Himpunan Penyelesaian (DHP): Daerah bidang Cartesius yang memenuhi seluruh pertidaksamaan sekaligus (irisan arsiran). Ditentukan melalui uji titik sembarang, lazimnya titik asal $(0,0)$."
        ],
        "workedExamples": [
          {
            "title": "Menyelesaikan SPLTV Transaksi Alat Tulis",
            "problem": "Selesaikan sistem persamaan linear berikut:\n$$\\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x + 2y - z = 2 \\end{cases}$$\nTentukan nilai $x, y,$ dan $z$.",
            "solution": "Langkah 1: Eliminasi $z$ dari persamaan (1) dan (3):\nJumlahkan pers (1) dan pers (3):\n$$(x + y + z) + (x + 2y - z) = 6 + 2 \\implies 2x + 3y = 8 \\quad \\text{--- pers (4)}$$\n\nLangkah 2: Eliminasi $z$ dari pers (1) dan pers (2):\nKurangkan pers (2) dari pers (1):\n$$(2x - y + z) - (x + y + z) = 3 - 6 \\implies x - 2y = -3 \\implies x = 2y - 3$$\n\nLangkah 3: Substitusi $x = 2y - 3$ ke pers (4):\n$$2(2y - 3) + 3y = 8 \\implies 4y - 6 + 3y = 8 \\implies 7y = 14 \\implies y = 2$$\n\nLangkah 4: Hitung nilai $x$ dan $z$:\n$$x = 2(2) - 3 = 4 - 3 = 1$$\n$$z = 6 - x - y = 6 - 1 - 2 = 3$$\nJadi, himpunan penyelesaiannya adalah **$x = 1, y = 2, z = 3$**."
          },
          {
            "title": "Menentukan Daerah Pertidaksamaan Linear",
            "problem": "Tentukan apakah titik $(2, 3)$ berada di dalam daerah penyelesaian pertidaksamaan $2x + 3y \\le 15$.",
            "solution": "Langkah 1: Substitusikan koordinat $x = 2$ dan $y = 3$ ke dalam ruas kiri pertidaksamaan:\n$$2(2) + 3(3) = 4 + 9 = 13$$\n\nLangkah 2: Bandingkan dengan nilai batas di ruas kanan:\n$$13 \\le 15 \\quad (\\text{Pernyataan Benar})$$\nKarena menghasilkan pernyataan yang benar, maka titik $(2, 3)$ **termasuk** di dalam daerah penyelesaian pertidaksamaan tersebut."
          }
        ],
        "keyFormulas": [
          {
            "label": "Bentuk Baku SPLTV",
            "formula": "a_i x + b_i y + c_i z = d_i \\quad (i = 1, 2, 3)"
          },
          {
            "label": "Pertidaksamaan Linear Garis Pembatas",
            "formula": "ax + by = c"
          }
        ],
        "misconceptions": [
          "Salah mengeliminasi variabel: menghilangkan variabel yang berbeda pada dua pasang persamaan sehingga tidak menghasilkan sistem dua variabel yang konsisten.",
          "Mengarsir daerah pertidaksamaan tanpa melakukan uji titik acuan terlebih dahulu."
        ],
        "tutorTip": "Gunakan titik asal $(0, 0)$ sebagai titik uji tercepat: masukkan $x=0, y=0$, lalu periksa apakah pernyataannya benar atau salah!"
      },
      "questions": [
        {
          "id": "sma10-b5-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Jika diketahui sistem persamaan:\n$$\\begin{cases} x + y + z = 9 \\\\ x + 2y + z = 12 \\\\ x + y + 3z = 17 \\end{cases}$$\nMaka nilai $y$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "3"
            },
            {
              "key": "B",
              "text": "2"
            },
            {
              "key": "C",
              "text": "4"
            },
            {
              "key": "D",
              "text": "5"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kurangkan persamaan kedua dengan persamaan pertama: $(x + 2y + z) - (x + y + z) = 12 - 9$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Kurangkan pers (2) dengan pers (1):\n$$(x + 2y + z) - (x + y + z) = 12 - 9$$\n$$y = 3$$\nNilai $y$ adalah **3** (Opsi A)."
        },
        {
          "id": "sma10-b5-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Dari sistem persamaan pada soal sebelumnya, nilai dari $z$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "4"
            },
            {
              "key": "B",
              "text": "3"
            },
            {
              "key": "C",
              "text": "2"
            },
            {
              "key": "D",
              "text": "5"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kurangkan persamaan ketiga dengan persamaan pertama: $(x + y + 3z) - (x + y + z) = 17 - 9$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Kurangkan pers (3) dengan pers (1):\n$$(x + y + 3z) - (x + y + z) = 17 - 9$$\n$$2z = 8 \\implies z = 4$$\nNilai $z$ adalah **4** (Opsi A)."
        },
        {
          "id": "sma10-b5-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Nilai dari $(x + y + z)$ jika penyelesaian sistem linear adalah $x = 2, y = 3, z = 4$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "9"
            },
            {
              "key": "B",
              "text": "10"
            },
            {
              "key": "C",
              "text": "8"
            },
            {
              "key": "D",
              "text": "12"
            }
          ],
          "correctAnswer": "A",
          "hint": "Jumlahkan ketiga nilai variabel: $2 + 3 + 4$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$x + y + z = 2 + 3 + 4 = 9$$\nHasilnya adalah **9** (Opsi A)."
        },
        {
          "id": "sma10-b5-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Di sebuah toko buku, 3 buku dan 2 pensil berharga Rp18.000,00, sedangkan 1 buku dan 4 pensil berharga Rp16.000,00. Harga untuk 2 buku dan 1 pensil adalah...",
          "options": [
            {
              "key": "A",
              "text": "Rp11.000,00"
            },
            {
              "key": "B",
              "text": "Rp12.000,00"
            },
            {
              "key": "C",
              "text": "Rp10.500,00"
            },
            {
              "key": "D",
              "text": "Rp13.000,00"
            }
          ],
          "correctAnswer": "A",
          "hint": "Misalkan buku $= b$ dan pensil $= p$. Bentuk SPLDV, cari nilai $b$ dan $p$, lalu hitung $2b + p$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Sistem persamaan:\n$$3b + 2p = 18.000 \\quad (\\times 2) \\implies 6b + 4p = 36.000$$\n$$b + 4p = 16.000 \\quad (\\times 1) \\implies b + 4p = 16.000$$\n2. Eliminasi $p$:\n$$5b = 20.000 \\implies b = 4.000$$\n3. Hitung $p$:\n$$4.000 + 4p = 16.000 \\implies 4p = 12.000 \\implies p = 3.000$$\n4. Hitung harga 2 buku dan 1 pensil:\n$$2(4.000) + 3.000 = 8.000 + 3.000 = 11.000$$\nHarga yang harus dibayar adalah **Rp11.000,00** (Opsi A)."
        }
      ]
    },
    {
      "id": "sma10-bab6-fungsi-kuadrat",
      "title": "Bab 6: Fungsi Kuadrat",
      "summary": {
        "overview": "Lintasan tembakan bola basket menuju ring, pancuran semburan air mancur di taman kota, hingga lengkungan kabel baja penopang pada jembatan gantung memiliki bentuk kurva mulus yang simetris. Kurva tersebut dalam geometri analitis dikenal sebagai Parabola, yang merupakan grafik visual dari Fungsi Kuadrat. Karakteristik reflektor parabola juga dimanfaatkan dalam perancangan lampu sorot stadion olahraga dan antena parabola telekomunikasi satelit agar gelombang cahaya atau radio terfokus sempurna pada satu titik fokus.\n\nFungsi kuadrat memiliki peran sentral dalam kalkulus dasar dan fisika mekanika klasik, khususnya gerak parabola di bawah pengaruh percepatan gravitasi bumi. Selain itu, dalam riset ekonomi manajerial, kurva kuadrat digunakan untuk memodelkan fungsi keuntungan maksimum dan biaya operasional minimum. Mengetahui di mana titik puncak parabola berada memungkinkan para pengambil keputusan menentukan strategi optimum secara matematis.\n\nBab ini membimbing siswa memahami bentuk umum fungsi kuadrat $f(x) = ax^2 + bx + c$, menganalisis peran koefisien $a$ terhadap arah keterbukaan kurva, menggunakan diskriminan $D = b^2 - 4ac$ untuk mengetahui banyaknya titik potong terhadap sumbu-$x$, menentukan koordinat titik puncak/ekstrim $(x_p, y_p)$, serta memecahkan problem optimasi nilai maksimum dan minimum.",
        "coreConcepts": [
          "Bentuk Umum Fungsi Kuadrat: $f(x) = ax^2 + bx + c$ dengan $a \\neq 0$. Nilai $c$ menyatakan titik potong grafik terhadap sumbu-$y$ di $(0, c)$.",
          "Arah Keterbukaan Parabola: Ditentukan oleh koefisien $a$:\n- Jika $a > 0$, parabola terbuka ke ATAS dan memiliki nilai MINIMUM.\n- Jika $a < 0$, parabola terbuka ke BAWAH dan memiliki nilai MAKSIMUM.",
          "Diskriminan ($D = b^2 - 4ac$):\n- $D > 0$: grafik memotong sumbu-$x$ di dua titik berbeda.\n- $D = 0$: grafik menyinggung sumbu-$x$ tepat di satu titik.\n- $D < 0$: grafik tidak memotong sumbu-$x$ (definit positif jika $a>0$, definit negatif jika $a<0$).",
          "Sumbu Simetri dan Titik Puncak (Ekstrim):\n- Persamaan sumbu simetri: $x_p = -\\frac{b}{2a}$\n- Nilai optimum/ekstrim: $y_p = -\\frac{D}{4a} = f(x_p)$\n- Titik puncak: $\\left(-\\frac{b}{2a}, -\\frac{D}{4a}\\right)$."
        ],
        "workedExamples": [
          {
            "title": "Tinggi Maksimum Peluru (Gerak Parabola)",
            "problem": "Sebuah peluru ditembakkan vertikal ke atas dengan persamaan ketinggian $h(t) = 40t - 5t^2$, di mana $h$ dalam meter dan $t$ dalam detik. Tentukan waktu yang dibutuhkan peluru untuk mencapai titik tertinggi dan berapakah tinggi maksimum tersebut?",
            "solution": "Langkah 1: Identifikasi koefisien fungsi kuadrat $h(t) = -5t^2 + 40t$:\n$$a = -5, \\quad b = 40, \\quad c = 0$$\nKarena $a = -5 < 0$, grafik terbuka ke bawah dan memiliki nilai maksimum.\n\nLangkah 2: Hitung waktu mencapai puncak ($t_p$) menggunakan sumbu simetri:\n$$t_p = -\\frac{b}{2a} = -\\frac{40}{2(-5)} = -\\frac{40}{-10} = 4\\text{ detik}$$\n\nLangkah 3: Hitung ketinggian maksimum dengan memasukkan $t = 4$:\n$$h(4) = 40(4) - 5(4^2) = 160 - 5(16) = 160 - 80 = 80\\text{ meter}$$\nPeluru mencapai titik tertinggi pada detik ke-**4** dengan tinggi maksimum **80 meter**."
          },
          {
            "title": "Menentukan Pembuat Nol Fungsi Kuadrat",
            "problem": "Tentukan titik potong grafik fungsi $f(x) = x^2 - 5x + 6$ terhadap sumbu-$x$.",
            "solution": "Langkah 1: Titik potong sumbu-$x$ terjadi saat $f(x) = 0$:\n$$x^2 - 5x + 6 = 0$$\n\nLangkah 2: Faktorkan persamaan kuadrat:\n$$(x - 2)(x - 3) = 0$$\n\nLangkah 3: Tentukan nilai $x$ pembuat nol:\n$$x - 2 = 0 \\implies x_1 = 2$$\n$$x - 3 = 0 \\implies x_2 = 3$$\nTitik potongnya terhadap sumbu-$x$ adalah **$(2, 0)$ dan $(3, 0)$**."
          }
        ],
        "keyFormulas": [
          {
            "label": "Diskriminan",
            "formula": "D = b^2 - 4ac"
          },
          {
            "label": "Sumbu Simetri",
            "formula": "x_p = -\\frac{b}{2a}"
          },
          {
            "label": "Nilai Optimum Ekstrim",
            "formula": "y_p = -\\frac{D}{4a}"
          }
        ],
        "misconceptions": [
          "Tertukar tanda minus pada rumus sumbu simetri: $x_p = -\\frac{b}{2a}$, sering lupa menuliskan tanda minus.",
          "Mengira parabola dengan $a > 0$ memiliki nilai maksimum. Jika terbuka ke atas, kurva memiliki lembah (nilai minimum)."
        ],
        "tutorTip": "Untuk mencari nilai puncak $y_p$, tidak perlu repot menghitung $-D/4a$ jika angkanya besar: cukup cari $x_p = -b/2a$ terlebih dahulu, lalu substitusikan langsung ke $f(x)$!"
      },
      "questions": [
        {
          "id": "sma10-b6-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Koordinat titik puncak dari fungsi kuadrat $f(x) = x^2 - 4x + 7$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$(2, 3)$"
            },
            {
              "key": "B",
              "text": "$(2, 7)$"
            },
            {
              "key": "C",
              "text": "$(-2, 3)$"
            },
            {
              "key": "D",
              "text": "$(4, 7)$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Cari sumbu simetri $x_p = -\\frac{-4}{2(1)} = 2$, lalu substitusi ke $f(2)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Sumbu simetri: $x_p = -\\frac{b}{2a} = -\\frac{-4}{2(1)} = 2$\n2. Nilai optimum: $y_p = f(2) = (2)^2 - 4(2) + 7 = 4 - 8 + 7 = 3$\nTitik puncaknya adalah **$(2, 3)$** (Opsi A)."
        },
        {
          "id": "sma10-b6-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Nilai diskriminan dari fungsi kuadrat $f(x) = 2x^2 - 5x - 3$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "49"
            },
            {
              "key": "B",
              "text": "1"
            },
            {
              "key": "C",
              "text": "-1"
            },
            {
              "key": "D",
              "text": "25"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan formula $D = b^2 - 4ac$ dengan $a = 2, b = -5, c = -3$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$D = (-5)^2 - 4(2)(-3) = 25 - (-24) = 25 + 24 = 49$$\nNilai diskriminannya adalah **49** (Opsi A)."
        },
        {
          "id": "sma10-b6-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Persamaan sumbu simetri dari kurva parabola $f(x) = -3x^2 + 12x - 5$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$x = 2$"
            },
            {
              "key": "B",
              "text": "$x = -2$"
            },
            {
              "key": "C",
              "text": "$x = 4$"
            },
            {
              "key": "D",
              "text": "$x = -4$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan $x = -\\frac{b}{2a}$ dengan $a = -3$ dan $b = 12$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$x = -\\frac{12}{2(-3)} = -\\frac{12}{-6} = 2$$\nPersamaan sumbu simetrinya adalah **$x = 2$** (Opsi A)."
        },
        {
          "id": "sma10-b6-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah peluru ditembakkan ke atas dengan persamaan lintasan $h(t) = 30t - 5t^2$ (dalam meter). Tinggi maksimum yang dapat dicapai peluru tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "45 meter"
            },
            {
              "key": "B",
              "text": "30 meter"
            },
            {
              "key": "C",
              "text": "50 meter"
            },
            {
              "key": "D",
              "text": "60 meter"
            }
          ],
          "correctAnswer": "A",
          "hint": "Cari waktu puncak $t = -\\frac{30}{2(-5)} = 3$ detik, lalu masukkan ke $h(3)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Waktu saat mencapai puncak:\n$$t = -\\frac{30}{2(-5)} = 3\\text{ detik}$$\n2. Ketinggian maksimum:\n$$h(3) = 30(3) - 5(3^2) = 90 - 5(9) = 90 - 45 = 45\\text{ meter}$$\nTinggi maksimumnya adalah **45 meter** (Opsi A)."
        }
      ]
    },
    {
      "id": "sma10-bab7-statistika",
      "title": "Bab 7: Statistika",
      "summary": {
        "overview": "Di tengah derasnya arus informasi di era big data, kemampuan membaca, mengolah, dan menarik kesimpulan yang valid dari kumpulan data numerik merupakan kecakapan literasi paling esensial. Pemerintah menggunakan sensus demografi untuk mendistribusikan subsidi bantuan sosial, dokter memantau grafik distribusi tensi darah pasien, serta lembaga survei menganalisis preferensi konsumen melalui ukuran pemusatan dan penyebaran data. Di sektor perbankan dan asuransi, aktuaris mengolah data klaim nasabah untuk menghitung premi yang wajar dan memitigasi risiko keuangan.\n\nStatistika bukan sekadar menghitung rata-rata secara mekanis. Matematikawan mengembangkan ukuran pemusatan data (mean, median, modus) serta ukuran penempatan (kuartil, desil, persentil) untuk menangkap gambaran utuh dari populasi data kelompok. Selain itu, ukuran penyebaran seperti jangkauan interkuartil dan diagram kotak garis (box plot) sangat berharga untuk mendeteksi adanya data pencilan (outlier) yang dapat membiaskan kesimpulan penelitian.\n\nBab ini membimbing siswa mengolah data berkelompok yang disajikan dalam tabel distribusi frekuensi dan histogram: menghitung rata-rata dengan metode nilai tengah dan rata-rata sementara, menentukan kelas median dan kuartil, mencari modus data berkelompok, serta menganalisis sebaran variabilitas data secara objektif.",
        "coreConcepts": [
          "Mean (Rata-Rata Hitung) Data Berkelompok: Dihitung dengan rumus $\\bar{x} = \\frac{\\Sigma f_i x_i}{\\Sigma f_i}$, di mana $x_i$ adalah nilai tengah kelas ke-$i$ dan $f_i$ adalah frekuensi kelas.",
          "Median Data Berkelompok: Nilai tengah yang membagi data terurut menjadi dua bagian sama besar: $Me = L + \\left(\\frac{\\frac{n}{2} - \\Sigma f_k}{f_{me}}\\right) \\cdot c$, di mana $L$ adalah tepi bawah kelas median, $\\Sigma f_k$ frekuensi kumulatif sebelum kelas median, $f_{me}$ frekuensi kelas median, dan $c$ panjang interval kelas.",
          "Modus Data Berkelompok: Nilai yang paling sering muncul: $Mo = L + \\left(\\frac{d_1}{d_1 + d_2}\\right) \\cdot c$, di mana $d_1$ selisih frekuensi kelas modus dengan frekuensi kelas sebelumnya, dan $d_2$ selisih frekuensi kelas modus dengan kelas sesudahnya.",
          "Ukuran Penyebaran Data: Jangkauan (range), Jangkauan Interkuartil ($QR = Q_3 - Q_1$), Simpangan Kuartil ($Q_d = \\frac{1}{2}(Q_3 - Q_1)$), serta deteksi pencilan (outlier)."
        ],
        "workedExamples": [
          {
            "title": "Menghitung Mean Data Berkelompok dengan Nilai Tengah",
            "problem": "Diberikan tabel frekuensi sederhana:\n- Kelas 1–5 ($f=3$, nilai tengah $x=3$)\n- Kelas 6–10 ($f=7$, nilai tengah $x=8$)\nHitunglah nilai rata-rata hitung (mean) data tersebut.",
            "solution": "Langkah 1: Hitung perkalian $f_i x_i$ untuk tiap kelas:\n- Kelas 1: $3 \\times 3 = 9$\n- Kelas 2: $7 \\times 8 = 56$\n- Total perkalian $\\Sigma f_i x_i = 9 + 56 = 65$\n\nLangkah 2: Hitung total frekuensi $\\Sigma f_i = 3 + 7 = 10$.\n\nLangkah 3: Hitung mean:\n$$\\bar{x} = \\frac{\\Sigma f_i x_i}{\\Sigma f_i} = \\frac{65}{10} = 6{,}5$$\nNilai rata-rata data tersebut adalah **6,5**."
          },
          {
            "title": "Menentukan Modus Data Berkelompok",
            "problem": "Suatu kelas modus memiliki tepi bawah $L = 20{,}5$, panjang kelas $c = 5$, selisih frekuensi dengan kelas sebelumnya $d_1 = 3$, dan selisih frekuensi dengan kelas sesudahnya $d_2 = 2$. Hitung nilai modusnya.",
            "solution": "Langkah 1: Terapkan rumus modus data berkelompok:\n$$Mo = L + \\left(\\frac{d_1}{d_1 + d_2}\\right) \\cdot c$$\n\nLangkah 2: Masukkan angka yang diketahui:\n$$Mo = 20{,}5 + \\left(\\frac{3}{3 + 2}\\right) \\cdot 5 = 20{,}5 + \\left(\\frac{3}{5}\\right) \\cdot 5 = 20{,}5 + 3 = 23{,}5$$\nNilai modus data adalah **23,5**."
          }
        ],
        "keyFormulas": [
          {
            "label": "Mean Data Berkelompok",
            "formula": "\\bar{x} = \\frac{\\Sigma f_i x_i}{\\Sigma f_i}"
          },
          {
            "label": "Modus Data Berkelompok",
            "formula": "Mo = L + \\left(\\frac{d_1}{d_1 + d_2}\\right) \\cdot c"
          },
          {
            "label": "Median Data Berkelompok",
            "formula": "Me = L + \\left(\\frac{\\frac{n}{2} - \\Sigma f_k}{f_{me}}\\right) \\cdot c"
          }
        ],
        "misconceptions": [
          "Mengira nilai tengah kelas dihitung dari tepi bawah dan tepi atas, bukan dari batas bawah dan batas atas.",
          "Lupa bahwa tepi bawah kelas bernilai batas bawah dikurangi 0,5 pada data bertingkat bulat."
        ],
        "tutorTip": "Tepi bawah ($L$) untuk bilangan bulat selalu: Batas Bawah dikurangi 0,5. Misalnya batas kelas $21-25$, maka $L = 21 - 0{,}5 = 20{,}5$!"
      },
      "questions": [
        {
          "id": "sma10-b7-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Nilai rata-rata dari data tunggal $6, 8, 7, 9, 10$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "8"
            },
            {
              "key": "B",
              "text": "7"
            },
            {
              "key": "C",
              "text": "8,5"
            },
            {
              "key": "D",
              "text": "7,5"
            }
          ],
          "correctAnswer": "A",
          "hint": "Jumlahkan semua nilai: $6 + 8 + 7 + 9 + 10 = 40$, lalu bagi dengan banyaknya data $n = 5$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\bar{x} = \\frac{6 + 8 + 7 + 9 + 10}{5} = \\frac{40}{5} = 8$$\nNilai rata-rata adalah **8** (Opsi A)."
        },
        {
          "id": "sma10-b7-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Median dari data terurut $4, 5, 7, 8, 10, 12, 14$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "8"
            },
            {
              "key": "B",
              "text": "7"
            },
            {
              "key": "C",
              "text": "10"
            },
            {
              "key": "D",
              "text": "7,5"
            }
          ],
          "correctAnswer": "A",
          "hint": "Data sudah terurut dengan $n = 7$ (ganjil). Median adalah data ke-4.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nData ke-4 pada deretan tersebut adalah angka **8** (Opsi A)."
        },
        {
          "id": "sma10-b7-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jika kuartil pertama $Q_1 = 15$ dan kuartil ketiga $Q_3 = 35$, maka jangkauan interkuartil ($QR$) data tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "20"
            },
            {
              "key": "B",
              "text": "10"
            },
            {
              "key": "C",
              "text": "25"
            },
            {
              "key": "D",
              "text": "50"
            }
          ],
          "correctAnswer": "A",
          "hint": "Jangkauan interkuartil adalah selisih antara $Q_3$ dan $Q_1$: $QR = Q_3 - Q_1$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$QR = Q_3 - Q_1 = 35 - 15 = 20$$\nJangkauan interkuartil adalah **20** (Opsi A)."
        },
        {
          "id": "sma10-b7-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Nilai rata-rata ulangan matematika 29 siswa adalah 75. Jika nilai seorang siswa susulan digabungkan, nilai rata-rata kelas menjadi 75,5. Nilai yang diperoleh siswa susulan tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "90"
            },
            {
              "key": "B",
              "text": "85"
            },
            {
              "key": "C",
              "text": "80"
            },
            {
              "key": "D",
              "text": "95"
            }
          ],
          "correctAnswer": "A",
          "hint": "Total nilai baru (30 siswa) dikurangi total nilai lama (29 siswa).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Total nilai awal 29 siswa: $29 \\times 75 = 2.175$.\n2. Total nilai gabungan 30 siswa: $30 \\times 75{,}5 = 2.265$.\n3. Nilai siswa susulan:\n$$x = 2.265 - 2.175 = 90$$\nNilai siswa susulan tersebut adalah **90** (Opsi A)."
        }
      ]
    },
    {
      "id": "sma10-bab8-peluang",
      "title": "Bab 8: Peluang",
      "summary": {
        "overview": "Dalam keseharian, kita sering menjumpai situasi yang penuh ketidakpastian. Prakiraan cuaca menyatakan 'peluang hujan lebat sore ini sebesar 70%', seorang dokter menyampaikan 'tingkat keberhasilan operasi mencapai 95%', atau seorang pedagang memperkirakan persentase barang yang laku terjual. Untuk menganalisis dan mengukur besaran derajat kemungkinan terjadinya suatu peristiwa acak, ilmu matematika menyediakan Teori Peluang (Probability).\n\nPeluang klasik bertolak dari percobaan acak yang menghasilkan ruang sampel seragam, seperti pelemparan koin logam, dadu bermata enam, atau pengundian kartu. Di tingkat menengah atas, siswa tidak hanya menghitung peluang tunggal, melainkan mulai mempelajari peluang kejadian majemuk: kapan dua kejadian saling lepas (tidak dapat terjadi bersama-sama) dan kapan dua kejadian saling bebas (terjadinya kejadian pertama tidak memengaruhi kemungkinan kejadian kedua).\n\nBab ini menuntun siswa merumuskan ruang sampel dan titik sampel, menghitung peluang teoritik dan frekuensi harapan dari suatu percobaan yang berulang, memahami hukum komplemen suatu peristiwa, serta membedakan secara logis antara aturan penjumlahan kejadian saling lepas dan aturan perkalian kejadian saling bebas.",
        "coreConcepts": [
          "Ruang Sampel ($S$) & Titik Sampel: Ruang sampel adalah himpunan semua hasil yang mungkin terjadi dari suatu percobaan acak. Titik sampel adalah setiap anggota individu dalam ruang sampel. Peluang peristiwa $A$: $P(A) = \\frac{n(A)}{n(S)}$, dengan rentang nilai pasti $0 \\le P(A) \\le 1$.",
          "Komplemen Suatu Peristiwa ($A'$): Peluang peristiwa $A$ TIDAK terjadi: $P(A') = 1 - P(A)$.",
          "Frekuensi Harapan: Banyaknya kejadian $A$ yang diharapkan terjadi dalam $N$ kali percobaan berulang: $F_h(A) = N \\times P(A)$.",
          "Peluang Kejadian Saling Lepas: Dua peristiwa $A$ dan $B$ tidak memiliki irisan sama sekali ($A \\cap B = \\emptyset$): $P(A \\cup B) = P(A) + P(B)$.",
          "Peluang Kejadian Saling Bebas: Dua peristiwa $A$ dan $B$ independen satu sama lain: $P(A \\cap B) = P(A) \\times P(B)$."
        ],
        "workedExamples": [
          {
            "title": "Frekuensi Harapan Pelemparan Dadu",
            "problem": "Sebuah dadu bersisi enam dilempar sebanyak 120 kali. Berapakah frekuensi harapan munculnya mata dadu bilangan prima?",
            "solution": "Langkah 1: Tentukan ruang sampel dan titik sampel bilangan prima:\n- Ruang sampel dadu: $S = \\{1, 2, 3, 4, 5, 6\\} \\implies n(S) = 6$\n- Bilangan prima: $A = \\{2, 3, 5\\} \\implies n(A) = 3$\n\nLangkah 2: Hitung peluang teoritis kejadian $A$:\n$$P(A) = \\frac{n(A)}{n(S)} = \\frac{3}{6} = \\frac{1}{2}$$\n\nLangkah 3: Hitung frekuensi harapan untuk $N = 120$ kali pelemparan:\n$$F_h(A) = N \\times P(A) = 120 \\times \\frac{1}{2} = 60\\text{ kali}$$\nFrekuensi harapan muncul mata dadu prima adalah **60 kali**."
          },
          {
            "title": "Peluang Kejadian Saling Bebas Koin dan Dadu",
            "problem": "Sebuah koin logam dan sebuah dadu bersisi enam dilempar secara bersamaan. Berapakah peluang munculnya sisi Angka pada koin dan mata dadu lebih dari 4?",
            "solution": "Langkah 1: Menghitung peluang pada masing-masing objek:\n- Peluang koin sisi Angka: $P(A) = \\frac{1}{2}$\n- Mata dadu lebih dari 4: $\\{5, 6\\}$ (ada 2 dari 6 mata dadu) $\\implies P(B) = \\frac{2}{6} = \\frac{1}{3}$\n\nLangkah 2: Karena kejadian pada koin dan dadu saling bebas, kalikan kedua peluang:\n$$P(A \\cap B) = P(A) \\times P(B) = \\frac{1}{2} \\times \\frac{1}{3} = \\frac{1}{6}$$\nPeluang gabungannya adalah **$\\frac{1}{6}$**."
          }
        ],
        "keyFormulas": [
          {
            "label": "Peluang Teoritik Dasar",
            "formula": "P(A) = \\frac{n(A)}{n(S)}"
          },
          {
            "label": "Frekuensi Harapan",
            "formula": "F_h(A) = N \\times P(A)"
          },
          {
            "label": "Kejadian Saling Bebas",
            "formula": "P(A \\cap B) = P(A) \\times P(B)"
          }
        ],
        "misconceptions": [
          "Menyatakan nilai peluang lebih dari 1 atau negatif. Peluang selalu berada dalam interval tertutup $[0, 1]$.",
          "Menjumlahkan peluang pada kejadian saling bebas. Kata 'DAN' mengindikasikan operasi perkalian peluang."
        ],
        "tutorTip": "Ingat: jika kejadian ditandai kata 'ATAU' maka peluang DIJUMLAHKAN (saling lepas). Jika ditandai kata 'DAN' maka peluang DIKALIKAN (saling bebas)!"
      },
      "questions": [
        {
          "id": "sma10-b8-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Sebuah dadu bermata enam dilempar satu kali. Peluang munculnya mata dadu bilangan ganjil adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\frac{1}{2}$"
            },
            {
              "key": "B",
              "text": "$\\frac{1}{3}$"
            },
            {
              "key": "C",
              "text": "$\\frac{1}{6}$"
            },
            {
              "key": "D",
              "text": "$\\frac{2}{3}$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Mata dadu ganjil adalah $\\{1, 3, 5\\}$ (ada 3 dari 6).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{3}{6} = \\frac{1}{2}$$\nPeluang muncul bilangan ganjil adalah **$\\frac{1}{2}$** (Opsi A)."
        },
        {
          "id": "sma10-b8-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Sebuah kantong berisi 4 kelereng merah dan 6 kelereng biru. Jika diambil satu kelereng secara acak, peluang terambil kelereng merah adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\frac{2}{5}$"
            },
            {
              "key": "B",
              "text": "$\\frac{3}{5}$"
            },
            {
              "key": "C",
              "text": "$\\frac{1}{4}$"
            },
            {
              "key": "D",
              "text": "$\\frac{1}{2}$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Bagi jumlah kelereng merah (4) dengan total seluruh kelereng (10).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{4}{4 + 6} = \\frac{4}{10} = \\frac{2}{5}$$\nPeluangnya adalah **$\\frac{2}{5}$** (Opsi A)."
        },
        {
          "id": "sma10-b8-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dua keping koin logam dilempar bersamaan sebanyak 60 kali. Frekuensi harapan munculnya pasangan sisi Gambar dan Gambar (keduanya gambar) adalah...",
          "options": [
            {
              "key": "A",
              "text": "15 kali"
            },
            {
              "key": "B",
              "text": "30 kali"
            },
            {
              "key": "C",
              "text": "20 kali"
            },
            {
              "key": "D",
              "text": "45 kali"
            }
          ],
          "correctAnswer": "A",
          "hint": "Ruang sampel 2 koin adalah $\\{(A,A), (A,G), (G,A), (G,G)\\}$ dengan $P(G,G) = \\frac{1}{4}$. Lalu kalikan dengan 60.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Peluang kedua sisi gambar: $P(GG) = \\frac{1}{4}$.\n2. Frekuensi harapan:\n$$F_h = 60 \\times \\frac{1}{4} = 15\\text{ kali}$$\nFrekuensi harapan adalah **15 kali** (Opsi A)."
        },
        {
          "id": "sma10-b8-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dua buah dadu bermata enam dilempar bersamaan satu kali. Peluang munculnya jumlah kedua mata dadu sama dengan 8 adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\frac{5}{36}$"
            },
            {
              "key": "B",
              "text": "$\\frac{1}{6}$"
            },
            {
              "key": "C",
              "text": "$\\frac{1}{9}$"
            },
            {
              "key": "D",
              "text": "$\\frac{7}{36}$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Cari pasangan yang berjumlah 8: $(2,6), (3,5), (4,4), (5,3), (6,2)$. Total ada 5 pasangan dari 36 ruang sampel.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Pasangan berjumlah 8:\n$$\\{(2,6), (3,5), (4,4), (5,3), (6,2)\\} \\implies n(A) = 5$$\n2. Total ruang sampel 2 dadu: $n(S) = 6 \\times 6 = 36$.\n3. Peluang:\n$$P = \\frac{5}{36}$$\nPeluangnya adalah **$\\frac{5}{36}$** (Opsi A)."
        }
      ]
    }
  ]
};
