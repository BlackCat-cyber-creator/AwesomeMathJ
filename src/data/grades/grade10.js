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
      "track": "wajib",
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
              "text": "7"
            },
            {
              "key": "B",
              "text": "9"
            },
            {
              "key": "C",
              "text": "5"
            },
            {
              "key": "D",
              "text": "4"
            }
          ],
          "correctAnswer": "C",
          "hint": "Ubah numerus ke bentuk perpangkatan basisnya: $16 = 2^4$, $27 = 3^3$, dan $25 = 5^2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Sederhanakan masing-masing suku logaritma:\n- ${}^2\\log 16 = {}^2\\log(2^4) = 4$\n- ${}^3\\log 27 = {}^3\\log(3^3) = 3$\n- ${}^5\\log 25 = {}^5\\log(5^2) = 2$\n2. Operasikan seluruh suku:\n$$4 + 3 - 2 = 5$$\nJadi, nilai akhirnya adalah **5** (Opsi C)."
        },
        {
          "id": "sma10-b1-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Bentuk sederhana dari perkalian eksponen $\\frac{a^3 \\cdot b^{-2} \\cdot c^5}{a \\cdot b^3 \\cdot c^{-1}}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\frac{a^4 \\cdot c^4}{b}$"
            },
            {
              "key": "B",
              "text": "$a^2 \\cdot b^5 \\cdot c^6$"
            },
            {
              "key": "C",
              "text": "$\\frac{a^2 \\cdot c^4}{b^5}$"
            },
            {
              "key": "D",
              "text": "$\\frac{a^2 \\cdot c^6}{b^5}$"
            }
          ],
          "correctAnswer": "D",
          "hint": "Kurangkan pangkat pembilang dengan pangkat penyebut untuk variabel yang sama: $a^{3-1}$, $b^{-2-3}$, dan $c^{5-(-1)}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Hitung pangkat masing-masing variabel:\n- Variabel $a$: $3 - 1 = 2 \\implies a^2$\n- Variabel $b$: $-2 - 3 = -5 \\implies b^{-5} = \\frac{1}{b^5}$\n- Variabel $c$: $5 - (-1) = 5 + 1 = 6 \\implies c^6$\n2. Gabungkan bentuk perpangkatan positif:\n$$\\frac{a^2 \\cdot c^6}{b^5}$$\nJadi, bentuk sederhananya adalah **$\\frac{a^2 \\cdot c^6}{b^5}$** (Opsi D)."
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
        },
        {
          "id": "sma10-b1-5",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Nilai dari operasi logaritma $^2\\log 32 - ^2\\log 4$ adalah...",
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
          "correctAnswer": "B",
          "hint": "Gunakan sifat: $^a\\log b - ^a\\log c = ^a\\log (b/c)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$^2\\log 32 - ^2\\log 4 = ^2\\log \\left(\\frac{32}{4}\\right) = ^2\\log 8 = 3$$\\nNilainya adalah **3** (Opsi B)."
        },
        {
          "id": "sma10-b1-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bentuk sederhana dari $\\frac{(x^2 y^{-3})^2}{x^{-1} y^2}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{x^3}{y^8}"
            },
            {
              "key": "B",
              "text": "x^5 y^4"
            },
            {
              "key": "C",
              "text": "\\frac{x^4}{y^6}"
            },
            {
              "key": "D",
              "text": "\\frac{x^5}{y^8}"
            }
          ],
          "correctAnswer": "D",
          "hint": "Pangkatkan pembilang $(x^2)^2 y^{-6} = x^4 y^{-6}$, lalu kurangkan eksponen penyebut.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\frac{x^4 y^{-6}}{x^{-1} y^2} = x^{4 - (-1)} y^{-6 - 2} = x^5 y^{-8} = \\frac{x^5}{y^8}$$ (Opsi D)."
        },
        {
          "id": "sma10-b1-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Himpunan penyelesaian dari persamaan eksponen $2^{3x - 1} = 32$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "{3}"
            },
            {
              "key": "B",
              "text": "{1}"
            },
            {
              "key": "C",
              "text": "{2}"
            },
            {
              "key": "D",
              "text": "{\\frac{5}{3}}"
            }
          ],
          "correctAnswer": "C",
          "hint": "Ubah 32 menjadi $2^5$, lalu samakan eksponennya.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$2^{3x - 1} = 2^5 \\implies 3x - 1 = 5 \\implies 3x = 6 \\implies x = 2$$ (Opsi C)."
        },
        {
          "id": "sma10-b1-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jika $^3\\log 2 = a$, maka nilai dari $^3\\log 12$ dinyatakan dalam $a$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "a + 2"
            },
            {
              "key": "B",
              "text": "2a + 1"
            },
            {
              "key": "C",
              "text": "2a + 2"
            },
            {
              "key": "D",
              "text": "a + 1"
            }
          ],
          "correctAnswer": "B",
          "hint": "Faktorkan $12 = 2^2 \\times 3$. Gunakan sifat penjumlahan logaritma.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$^3\\log 12 = ^3\\log (2^2 \\times 3) = 2(^3\\log 2) + ^3\\log 3 = 2a + 1$$ (Opsi B)."
        },
        {
          "id": "sma10-b1-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Nilai dari operasi $^2\\log 3 \\cdot ^3\\log 5 \\cdot ^5\\log 8$ adalah...",
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
              "text": "1"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan sifat perkalian berantai logaritma: $^a\\log b \\cdot ^b\\log c = ^a\\log c$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$^2\\log 3 \\cdot ^3\\log 5 \\cdot ^5\\log 8 = ^2\\log 8 = 3$$ (Opsi A)."
        },
        {
          "id": "sma10-b1-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bentuk rasional dari $\\frac{6}{\\sqrt{7} - 2}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "2\\sqrt{7} - 4"
            },
            {
              "key": "B",
              "text": "\\sqrt{7} + 2"
            },
            {
              "key": "C",
              "text": "3\\sqrt{7} + 6"
            },
            {
              "key": "D",
              "text": "2\\sqrt{7} + 4"
            }
          ],
          "correctAnswer": "D",
          "hint": "Kalikan dengan sekawan: $\\frac{\\sqrt{7} + 2}{\\sqrt{7} + 2}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\frac{6(\\sqrt{7} + 2)}{7 - 4} = \\frac{6(\\sqrt{7} + 2)}{3} = 2\\sqrt{7} + 4$$ (Opsi D)."
        },
        {
          "id": "sma10-b1-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Penyelesaian dari persamaan eksponen $5^{x^2 - 3x - 4} = 1$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "x = 4 atau x = -1"
            },
            {
              "key": "B",
              "text": "x = 4 atau x = 1"
            },
            {
              "key": "C",
              "text": "x = -4 atau x = 1"
            },
            {
              "key": "D",
              "text": "x = 2 atau x = -2"
            }
          ],
          "correctAnswer": "A",
          "hint": "Eksponen harus sama dengan nol karena $5^0 = 1$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$x^2 - 3x - 4 = 0 \\implies (x - 4)(x + 1) = 0 \\implies x = 4 \\text{ atau } x = -1$$ (Opsi A)."
        },
        {
          "id": "sma10-b1-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Suatu modal sebesar Rp10.000.000,00 diinvestasikan dengan bunga majemuk $10\\%$ per tahun. Besar modal pada akhir tahun ke-3 adalah...",
          "options": [
            {
              "key": "A",
              "text": "Rp13.000.000,00"
            },
            {
              "key": "B",
              "text": "Rp12.100.000,00"
            },
            {
              "key": "C",
              "text": "Rp14.000.000,00"
            },
            {
              "key": "D",
              "text": "Rp13.310.000,00"
            }
          ],
          "correctAnswer": "D",
          "hint": "Rumus bunga majemuk: $M_3 = M_0 (1 + i)^3$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$M_3 = 10.000.000 \\times (1{,}1)^3 = 10.000.000 \\times 1{,}331 = \\text{Rp}13.310.000,00$$ (Opsi D)."
        },
        {
          "id": "sma10-b1-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Massa zat radioaktif mula-mula 160 gram dan meluruh menjadi setengahnya setiap 4 jam. Sisa massa zat setelah 16 jam adalah...",
          "options": [
            {
              "key": "A",
              "text": "20 gram"
            },
            {
              "key": "B",
              "text": "5 gram"
            },
            {
              "key": "C",
              "text": "15 gram"
            },
            {
              "key": "D",
              "text": "10 gram"
            }
          ],
          "correctAnswer": "D",
          "hint": "Periode $n = 16 / 4 = 4$. Rumus: $M = 160 \\times (1/2)^4$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$M = 160 \\times \\left(\\frac{1}{2}\\right)^4 = 160 \\times \\frac{1}{16} = 10\\text{ gram}$$ (Opsi D)."
        },
        {
          "id": "sma10-b1-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jika $\\log 2 = 0{,}3010$ dan $\\log 3 = 0{,}4771$, maka nilai dari $\\log 18$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "1,2792"
            },
            {
              "key": "B",
              "text": "1,1542"
            },
            {
              "key": "C",
              "text": "1,2552"
            },
            {
              "key": "D",
              "text": "1,3012"
            }
          ],
          "correctAnswer": "C",
          "hint": "$\\log 18 = \\log (2 \\times 3^2) = \\log 2 + 2\\log 3$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\log 18 = 0{,}3010 + 2(0{,}4771) = 0{,}3010 + 0{,}9542 = 1{,}2552$$ (Opsi C)."
        },
        {
          "id": "sma10-b1-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Himpunan penyelesaian dari $\\log(x + 6) + \\log(x - 3) = 1$ dengan basis 10 adalah...",
          "options": [
            {
              "key": "A",
              "text": "{4, -7}"
            },
            {
              "key": "B",
              "text": "{4}"
            },
            {
              "key": "C",
              "text": "{5}"
            },
            {
              "key": "D",
              "text": "{-7}"
            }
          ],
          "correctAnswer": "B",
          "hint": "Gabungkan logaritma: $(x+6)(x-3) = 10$. Periksa syarat numerus $x > 3$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n1. $x^2 + 3x - 18 = 10 \\implies x^2 + 3x - 28 = 0 \\implies (x + 7)(x - 4) = 0$\\n2. Syarat numerus: $x > 3$, sehingga yang memenuhi hanya $x = 4$ (Opsi B)."
        },
        {
          "id": "sma10-b1-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Nilai $x$ yang memenuhi persamaan eksponen $9^x - 4 \\cdot 3^{x+1} + 27 = 0$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "x = 0 atau x = 3"
            },
            {
              "key": "B",
              "text": "x = 1 atau x = 3"
            },
            {
              "key": "C",
              "text": "x = 1 atau x = 2"
            },
            {
              "key": "D",
              "text": "x = 2 atau x = 3"
            }
          ],
          "correctAnswer": "C",
          "hint": "Misalkan $y = 3^x$, persamaan menjadi $y^2 - 12y + 27 = 0$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n1. $(y - 3)(y - 9) = 0 \\implies y = 3$ atau $y = 9$\\n2. $3^x = 3 \\implies x = 1$ dan $3^x = 9 \\implies x = 2$ (Opsi C)."
        },
        {
          "id": "sma10-b1-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Jika $^2\\log 3 = a$ dan $^3\\log 5 = b$, maka nilai dari $^{15}\\log 20$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{2a + b}{1 + ab}"
            },
            {
              "key": "B",
              "text": "\\frac{2 + ab}{a(1 + b)}"
            },
            {
              "key": "C",
              "text": "\\frac{a + 2b}{a(1 + b)}"
            },
            {
              "key": "D",
              "text": "\\frac{2 + a}{a + b}"
            }
          ],
          "correctAnswer": "B",
          "hint": "Ubah basis ke 3: $^{15}\\log 20 = \\frac{^3\\log 20}{^3\\log 15}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$^{15}\\log 20 = \\frac{2(^3\\log 2) + ^3\\log 5}{^3\\log 3 + ^3\\log 5} = \\frac{\\frac{2}{a} + b}{1 + b} = \\frac{2 + ab}{a(1 + b)}$$ (Opsi B)."
        },
        {
          "id": "sma10-b1-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Penyelesaian dari pertidaksamaan eksponen $\\left(\\frac{1}{3}\\right)^{2x - 1} \\le 27$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "x \\le -1"
            },
            {
              "key": "B",
              "text": "x \\ge 2"
            },
            {
              "key": "C",
              "text": "x \\ge -1"
            },
            {
              "key": "D",
              "text": "x \\le 2"
            }
          ],
          "correctAnswer": "C",
          "hint": "Ubah ke basis 3: $3^{-(2x - 1)} \\le 3^3 \\implies -2x + 1 \\le 3$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$-2x + 1 \\le 3 \\implies -2x \\le 2 \\implies x \\ge -1$$ (Opsi C)."
        },
        {
          "id": "sma10-b1-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Himpunan penyelesaian dari pertidaksamaan logaritma $^2\\log(x - 2) < 3$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "x < 10"
            },
            {
              "key": "B",
              "text": "2 < x < 10"
            },
            {
              "key": "C",
              "text": "x > 2"
            },
            {
              "key": "D",
              "text": "2 < x < 8"
            }
          ],
          "correctAnswer": "B",
          "hint": "Selesaikan $x - 2 < 2^3 = 8$ dengan syarat numerus $x - 2 > 0$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n1. $x - 2 < 8 \\implies x < 10$\\n2. Syarat numerus: $x > 2$\\n3. Irisan: $2 < x < 10$ (Opsi B)."
        },
        {
          "id": "sma10-b1-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Jumlah semua nilai $x$ yang memenuhi persamaan logaritma $(^x\\log 2)^2 - 3(^x\\log 2) + 2 = 0$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "2 + \\sqrt{2}"
            },
            {
              "key": "B",
              "text": "6"
            },
            {
              "key": "C",
              "text": "4"
            },
            {
              "key": "D",
              "text": "3"
            }
          ],
          "correctAnswer": "A",
          "hint": "Faktorkan persamaan kuadrat terhadap $^x\\log 2$: $(^x\\log 2 - 1)(^x\\log 2 - 2) = 0$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n1. $^x\\log 2 = 1 \\implies x = 2$\\n2. $^x\\log 2 = 2 \\implies x^2 = 2 \\implies x = \\sqrt{2}$\\n3. Jumlah $= 2 + \\sqrt{2}$ (Opsi A)."
        }
      ]
    },
    {
      "id": "sma10-bab2-barisan-deret",
      "title": "Bab 2: Barisan dan Deret",
      "track": "wajib",
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
              "text": "240"
            },
            {
              "key": "B",
              "text": "162"
            },
            {
              "key": "C",
              "text": "484"
            },
            {
              "key": "D",
              "text": "242"
            }
          ],
          "correctAnswer": "D",
          "hint": "Suku pertama $a = 2$, rasio $r = 3$. Gunakan rumus $S_5 = \\frac{a(r^5 - 1)}{r - 1}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Identifikasi $a = 2$ dan $r = \\frac{6}{2} = 3$.\n2. Masukkan ke formula jumlah deret geometri:\n$$S_5 = \\frac{2(3^5 - 1)}{3 - 1} = \\frac{2(243 - 1)}{2} = 242$$\nJumlah 5 suku pertama adalah **242** (Opsi D)."
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
              "text": "4 dan 3"
            },
            {
              "key": "B",
              "text": "3 dan 4"
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
          "correctAnswer": "B",
          "hint": "Susun SPLDV dari $U_3 = a + 2b = 11$ dan $S_6 = 3(2a + 5b) = 78$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Persamaan 1: $a + 2b = 11 \\implies a = 11 - 2b$.\n2. Persamaan 2: $S_6 = \\frac{6}{2}(2a + 5b) = 78 \\implies 3(2a + 5b) = 78 \\implies 2a + 5b = 26$.\n3. Substitusikan $a$ ke persamaan 2:\n$$2(11 - 2b) + 5b = 26 \\implies 22 - 4b + 5b = 26 \\implies b = 4$$\n4. Hitung nilai $a$:\n$$a = 11 - 2(4) = 11 - 8 = 3$$\nJadi, suku pertama adalah **3** dan beda adalah **4** (Opsi B)."
        },
        {
          "id": "sma10-b2-5",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Suku ke-15 dari barisan aritmetika 3, 7, 11, 15, ... adalah...",
          "options": [
            {
              "key": "A",
              "text": "63"
            },
            {
              "key": "B",
              "text": "55"
            },
            {
              "key": "C",
              "text": "59"
            },
            {
              "key": "D",
              "text": "61"
            }
          ],
          "correctAnswer": "C",
          "hint": "Gunakan rumus $U_n = a + (n - 1)b$ dengan $a = 3$ dan $b = 4$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$U_{15} = 3 + 14(4) = 3 + 56 = 59$$ (Opsi C)."
        },
        {
          "id": "sma10-b2-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jumlah 20 suku pertama ($S_{20}$) dari deret aritmetika $4 + 7 + 10 + 13 + \\dots$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "620"
            },
            {
              "key": "B",
              "text": "650"
            },
            {
              "key": "C",
              "text": "680"
            },
            {
              "key": "D",
              "text": "640"
            }
          ],
          "correctAnswer": "B",
          "hint": "Gunakan rumus $S_n = \\frac{n}{2}(2a + (n - 1)b)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$S_{20} = 10(2(4) + 19(3)) = 10(8 + 57) = 650$$ (Opsi B)."
        },
        {
          "id": "sma10-b2-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Suku ke-7 dari barisan geometri 2, 6, 18, 54, ... adalah...",
          "options": [
            {
              "key": "A",
              "text": "1.458"
            },
            {
              "key": "B",
              "text": "486"
            },
            {
              "key": "C",
              "text": "4.374"
            },
            {
              "key": "D",
              "text": "729"
            }
          ],
          "correctAnswer": "A",
          "hint": "Rumus $U_n = a r^{n-1}$ dengan $a = 2$ dan $r = 3$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$U_7 = 2 \\times 3^6 = 2 \\times 729 = 1.458$$ (Opsi A)."
        },
        {
          "id": "sma10-b2-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jumlah deret geometri tak hingga $18 + 6 + 2 + \\frac{2}{3} + \\dots$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "24"
            },
            {
              "key": "B",
              "text": "36"
            },
            {
              "key": "C",
              "text": "27"
            },
            {
              "key": "D",
              "text": "18"
            }
          ],
          "correctAnswer": "C",
          "hint": "Rumus $S_\\infty = \\frac{a}{1 - r}$ dengan $a = 18$ dan $r = 1/3$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$S_\\infty = \\frac{18}{1 - \\frac{1}{3}} = 18 \\times \\frac{3}{2} = 27$$ (Opsi C)."
        },
        {
          "id": "sma10-b2-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dari suatu barisan aritmetika diketahui $U_3 = 11$ dan $U_8 = 26$. Nilai $a$ dan $b$ berturut-turut adalah...",
          "options": [
            {
              "key": "A",
              "text": "3 dan 5"
            },
            {
              "key": "B",
              "text": "5 dan 3"
            },
            {
              "key": "C",
              "text": "2 dan 4"
            },
            {
              "key": "D",
              "text": "4 dan 3"
            }
          ],
          "correctAnswer": "B",
          "hint": "$5b = U_8 - U_3 = 15 \\implies b = 3$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$a = 11 - 2(3) = 5, \\quad b = 3$$ (Opsi B)."
        },
        {
          "id": "sma10-b2-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Banyaknya suku pada barisan aritmetika 5, 9, 13, 17, ..., 121 adalah...",
          "options": [
            {
              "key": "A",
              "text": "29"
            },
            {
              "key": "B",
              "text": "30"
            },
            {
              "key": "C",
              "text": "31"
            },
            {
              "key": "D",
              "text": "28"
            }
          ],
          "correctAnswer": "B",
          "hint": "$5 + (n - 1)4 = 121 \\implies 4(n - 1) = 116$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$n - 1 = 29 \\implies n = 30$$ (Opsi B)."
        },
        {
          "id": "sma10-b2-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah bola dijatuhkan dari ketinggian 12 meter dan memantul dengan rasio $\\frac{2}{3}$. Panjang lintasan seluruh pantulan bola hingga berhenti adalah...",
          "options": [
            {
              "key": "A",
              "text": "48 meter"
            },
            {
              "key": "B",
              "text": "72 meter"
            },
            {
              "key": "C",
              "text": "60 meter"
            },
            {
              "key": "D",
              "text": "36 meter"
            }
          ],
          "correctAnswer": "C",
          "hint": "Rumus pantulan bola: $S = h \\times \\frac{b + a}{b - a}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$S = 12 \\times \\frac{3 + 2}{3 - 2} = 12 \\times 5 = 60\\text{ meter}$$ (Opsi C)."
        },
        {
          "id": "sma10-b2-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Barisan terdepan gedung pertunjukan memiliki 15 kursi. Setiap baris di belakangnya bertambah 3 kursi. Jika ada 12 baris, total kursi adalah...",
          "options": [
            {
              "key": "A",
              "text": "378 kursi"
            },
            {
              "key": "B",
              "text": "360 kursi"
            },
            {
              "key": "C",
              "text": "396 kursi"
            },
            {
              "key": "D",
              "text": "350 kursi"
            }
          ],
          "correctAnswer": "A",
          "hint": "$S_{12} = 6(2(15) + 11(3))$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$S_{12} = 6(30 + 33) = 6 \\times 63 = 378\\text{ kursi}$$ (Opsi A)."
        },
        {
          "id": "sma10-b2-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Gaji seorang karyawan bertambah tetap Rp200.000,00 setiap tahunnya dari gaji awal Rp4.000.000,00 per bulan. Total seluruh gaji yang diterima selama 5 tahun bekerja adalah...",
          "options": [
            {
              "key": "A",
              "text": "Rp240.000.000,00"
            },
            {
              "key": "B",
              "text": "Rp250.000.000,00"
            },
            {
              "key": "C",
              "text": "Rp275.000.000,00"
            },
            {
              "key": "D",
              "text": "Rp264.000.000,00"
            }
          ],
          "correctAnswer": "D",
          "hint": "Total gaji $= 12 \\times S_5$ (deret aritmetika tahunan).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n1. $S_5 = \\frac{5}{2}(8.000.000 + 4(200.000)) = 22.000.000$\\n2. Total $= 12 \\times 22.000.000 = \\text{Rp}264.000.000,00$ (Opsi D)."
        },
        {
          "id": "sma10-b2-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Tiga bilangan membentuk barisan geometri dengan hasil kali 216 dan jumlah 26. Suku kedua (tengah) barisan tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "6"
            },
            {
              "key": "B",
              "text": "8"
            },
            {
              "key": "C",
              "text": "4"
            },
            {
              "key": "D",
              "text": "9"
            }
          ],
          "correctAnswer": "A",
          "hint": "Hasil kali tiga suku berurutan geometri: $(U_2)^3 = 216$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$a^3 = 216 \\implies a = 6$$ (Opsi A)."
        },
        {
          "id": "sma10-b2-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jumlah $n$ suku pertama deret aritmetika adalah $S_n = 2n^2 + 3n$. Suku ke-8 ($U_8$) deret tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "35"
            },
            {
              "key": "B",
              "text": "31"
            },
            {
              "key": "C",
              "text": "33"
            },
            {
              "key": "D",
              "text": "37"
            }
          ],
          "correctAnswer": "C",
          "hint": "$U_8 = S_8 - S_7$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$S_8 = 2(64) + 24 = 152, \\quad S_7 = 2(49) + 21 = 119 \\implies U_8 = 33$$ (Opsi C)."
        },
        {
          "id": "sma10-b2-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Antara bilangan 3 dan 48 disisipkan 3 bilangan sehingga membentuk barisan geometri baru. Rasio barisan baru adalah...",
          "options": [
            {
              "key": "A",
              "text": "3"
            },
            {
              "key": "B",
              "text": "4"
            },
            {
              "key": "C",
              "text": "1,5"
            },
            {
              "key": "D",
              "text": "2"
            }
          ],
          "correctAnswer": "D",
          "hint": "Rumus rasio sisipan: $r' = \\sqrt[k+1]{\\frac{b}{a}}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$r' = \\sqrt[4]{\\frac{48}{3}} = \\sqrt[4]{16} = 2$$ (Opsi D)."
        },
        {
          "id": "sma10-b2-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Jumlah suku nomor ganjil deret geometri tak hingga adalah 18, dan jumlah seluruh suku adalah 24. Rasio deret tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{1}{2}"
            },
            {
              "key": "B",
              "text": "\\frac{1}{3}"
            },
            {
              "key": "C",
              "text": "\\frac{1}{4}"
            },
            {
              "key": "D",
              "text": "\\frac{2}{3}"
            }
          ],
          "correctAnswer": "B",
          "hint": "$\\frac{S_{\\text{ganjil}}}{S} = \\frac{1}{1 + r} = \\frac{18}{24} = \\frac{3}{4}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$3(1 + r) = 4 \\implies 3r = 1 \\implies r = \\frac{1}{3}$$ (Opsi B)."
        },
        {
          "id": "sma10-b2-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Tali dipotong menjadi 6 bagian membentuk barisan geometri. Potongan terpendek 3 cm dan terpanjang 96 cm. Panjang tali mula-mula adalah...",
          "options": [
            {
              "key": "A",
              "text": "192 cm"
            },
            {
              "key": "B",
              "text": "186 cm"
            },
            {
              "key": "C",
              "text": "195 cm"
            },
            {
              "key": "D",
              "text": "189 cm"
            }
          ],
          "correctAnswer": "D",
          "hint": "$3 r^5 = 96 \\implies r = 2$. Cari $S_6$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$S_6 = \\frac{3(2^6 - 1)}{2 - 1} = 3(63) = 189\\text{ cm}$$ (Opsi D)."
        },
        {
          "id": "sma10-b2-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Jika $(k - 2), (k + 1), (2k + 2)$ merupakan tiga suku berurutan barisan geometri positif, maka nilai $k$ adalah...",
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
              "text": "5"
            },
            {
              "key": "D",
              "text": "6"
            }
          ],
          "correctAnswer": "C",
          "hint": "Syarat geometri: $(k + 1)^2 = (k - 2)(2k + 2)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$k^2 + 2k + 1 = 2k^2 - 2k - 4 \\implies k^2 - 4k - 5 = 0 \\implies k = 5$$ (Opsi C)."
        },
        {
          "id": "sma10-b2-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Jumlah 10 suku pertama deret $1 \\cdot 2 + 2 \\cdot 3 + 3 \\cdot 4 + \\dots + 10 \\cdot 11$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "420"
            },
            {
              "key": "B",
              "text": "460"
            },
            {
              "key": "C",
              "text": "400"
            },
            {
              "key": "D",
              "text": "440"
            }
          ],
          "correctAnswer": "D",
          "hint": "$U_n = n^2 + n$. Jumlahkan $\\sum n^2 + \\sum n$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\frac{10 \\times 11 \\times 21}{6} + \\frac{10 \\times 11}{2} = 385 + 55 = 440$$ (Opsi D)."
        }
      ]
    },
    {
      "id": "sma10-bab3-vektor",
      "title": "Bab 3: Vektor dan Operasinya",
      "track": "wajib",
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
              "text": "17 satuan"
            },
            {
              "key": "B",
              "text": "7 satuan"
            },
            {
              "key": "C",
              "text": "15 satuan"
            },
            {
              "key": "D",
              "text": "13 satuan"
            }
          ],
          "correctAnswer": "D",
          "hint": "Gunakan teorema Pythagoras: $|\\vec{v}| = \\sqrt{x^2 + y^2} = \\sqrt{5^2 + (-12)^2}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Komponen: $x = 5, y = -12$.\n2. Panjang vektor:\n$$|\\vec{v}| = \\sqrt{5^2 + (-12)^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$$\nPanjang vektor adalah **13 satuan** (Opsi D)."
        },
        {
          "id": "sma10-b3-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Jika $\\vec{a} = \\begin{pmatrix} 2 \\\\ -3 \\end{pmatrix}$ dan $\\vec{b} = \\begin{pmatrix} 4 \\\\ 1 \\end{pmatrix}$, maka vektor $2\\vec{a} + \\vec{b}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\begin{pmatrix} 6 \\\\ -2 \\end{pmatrix}$"
            },
            {
              "key": "B",
              "text": "$\\begin{pmatrix} 8 \\\\ -5 \\end{pmatrix}$"
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
          "correctAnswer": "B",
          "hint": "Kalikan skalar 2 ke vektor $\\vec{a}$, lalu jumlahkan komponen seletaknya dengan $\\vec{b}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $2\\vec{a} = 2\\begin{pmatrix} 2 \\\\ -3 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ -6 \\end{pmatrix}$.\n2. Jumlahkan dengan $\\vec{b}$:\n$$\\begin{pmatrix} 4 \\\\ -6 \\end{pmatrix} + \\begin{pmatrix} 4 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 4 + 4 \\\\ -6 + 1 \\end{pmatrix} = \\begin{pmatrix} 8 \\\\ -5 \\end{pmatrix}$$\nHasilnya adalah **$\\begin{pmatrix} 8 \\\\ -5 \\end{pmatrix}$** (Opsi B)."
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
              "text": "-4"
            },
            {
              "key": "B",
              "text": "6"
            },
            {
              "key": "C",
              "text": "4"
            },
            {
              "key": "D",
              "text": "-6"
            }
          ],
          "correctAnswer": "C",
          "hint": "Dua vektor tegak lurus jika hasil kali skalarnya sama dengan nol: $\\vec{p} \\cdot \\vec{q} = 0$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Syarat tegak lurus: $\\vec{p} \\cdot \\vec{q} = 0$\n2. Operasikan perkalian komponen:\n$$(k)(3) + (6)(-2) = 0$$\n$$3k - 12 = 0$$\n$$3k = 12 \\implies k = 4$$\nNilai $k$ yang memenuhi adalah **4** (Opsi C)."
        },
        {
          "id": "sma10-b3-5",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Panjang vektor $\\vec{v} = \\begin{pmatrix} 6 \\\\ -8 \\end{pmatrix}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "14"
            },
            {
              "key": "B",
              "text": "12"
            },
            {
              "key": "C",
              "text": "10"
            },
            {
              "key": "D",
              "text": "8"
            }
          ],
          "correctAnswer": "C",
          "hint": "Rumus $|\\vec{v}| = \\sqrt{x^2 + y^2}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$|\\vec{v}| = \\sqrt{6^2 + (-8)^2} = \\sqrt{100} = 10$$ (Opsi C)."
        },
        {
          "id": "sma10-b3-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Diketahui vektor $\\vec{a} = 3\\vec{i} - 2\\vec{j}$ dan $\\vec{b} = -\\vec{i} + 5\\vec{j}$. Hasil dari $2\\vec{a} + 3\\vec{b}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "5\\vec{i} + 11\\vec{j}"
            },
            {
              "key": "B",
              "text": "3\\vec{i} + 9\\vec{j}"
            },
            {
              "key": "C",
              "text": "4\\vec{i} + 11\\vec{j}"
            },
            {
              "key": "D",
              "text": "3\\vec{i} + 11\\vec{j}"
            }
          ],
          "correctAnswer": "D",
          "hint": "Jumlahkan komponen $\\vec{i}$ dan $\\vec{j}$ secara terpisah.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$2(3\\vec{i} - 2\\vec{j}) + 3(-\\vec{i} + 5\\vec{j}) = 3\\vec{i} + 11\\vec{j}$$ (Opsi D)."
        },
        {
          "id": "sma10-b3-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jika titik $A(2, -3)$ dan $B(7, 9)$, maka vektor $\\vec{AB}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\begin{pmatrix} 9 \\\\ 6 \\end{pmatrix}"
            },
            {
              "key": "B",
              "text": "\\begin{pmatrix} -5 \\\\ -12 \\end{pmatrix}"
            },
            {
              "key": "C",
              "text": "\\begin{pmatrix} 5 \\\\ 12 \\end{pmatrix}"
            },
            {
              "key": "D",
              "text": "\\begin{pmatrix} 5 \\\\ 6 \\end{pmatrix}"
            }
          ],
          "correctAnswer": "C",
          "hint": "$\\vec{AB} = B - A$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\vec{AB} = \\begin{pmatrix} 7 - 2 \\\\ 9 - (-3) \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ 12 \\end{pmatrix}$$ (Opsi C)."
        },
        {
          "id": "sma10-b3-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil perkalian skalar (dot product) $\\vec{u} = \\begin{pmatrix} 4 \\\\ -2 \\\\ 5 \\end{pmatrix}$ dan $\\vec{v} = \\begin{pmatrix} 3 \\\\ 6 \\\\ 1 \\end{pmatrix}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "9"
            },
            {
              "key": "B",
              "text": "7"
            },
            {
              "key": "C",
              "text": "3"
            },
            {
              "key": "D",
              "text": "5"
            }
          ],
          "correctAnswer": "D",
          "hint": "$\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2 + z_1 z_2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\vec{u} \\cdot \\vec{v} = 12 - 12 + 5 = 5$$ (Opsi D)."
        },
        {
          "id": "sma10-b3-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Vektor satuan yang searah dengan $\\vec{a} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\begin{pmatrix} \\frac{4}{5} \\\\ \\frac{3}{5} \\end{pmatrix}"
            },
            {
              "key": "B",
              "text": "\\begin{pmatrix} \\frac{3}{5} \\\\ \\frac{4}{5} \\end{pmatrix}"
            },
            {
              "key": "C",
              "text": "\\begin{pmatrix} \\frac{3}{7} \\\\ \\frac{4}{7} \\end{pmatrix}"
            },
            {
              "key": "D",
              "text": "\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}"
            }
          ],
          "correctAnswer": "B",
          "hint": "Bagi komponen vektor dengan panjangnya ($|\\vec{a}| = 5$).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\vec{e} = \\frac{1}{5}\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} \\frac{3}{5} \\\\ \\frac{4}{5} \\end{pmatrix}$$ (Opsi B)."
        },
        {
          "id": "sma10-b3-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Vektor $\\vec{p} = \\begin{pmatrix} x \\\\ 4 \\end{pmatrix}$ dan $\\vec{q} = \\begin{pmatrix} 6 \\\\ -3 \\end{pmatrix}$ saling tegak lurus. Nilai $x$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "2"
            },
            {
              "key": "B",
              "text": "3"
            },
            {
              "key": "C",
              "text": "-2"
            },
            {
              "key": "D",
              "text": "4"
            }
          ],
          "correctAnswer": "A",
          "hint": "Syarat tegak lurus: $\\vec{p} \\cdot \\vec{q} = 0$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$6x - 12 = 0 \\implies x = 2$$ (Opsi A)."
        },
        {
          "id": "sma10-b3-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Besar sudut antara dua vektor $\\vec{a} = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$ dan $\\vec{b} = \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "30^\\circ"
            },
            {
              "key": "B",
              "text": "60^\\circ"
            },
            {
              "key": "C",
              "text": "90^\\circ"
            },
            {
              "key": "D",
              "text": "45^\\circ"
            }
          ],
          "correctAnswer": "D",
          "hint": "$\\cos \\theta = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}||\\vec{b}|}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\cos \\theta = \\frac{1}{\\sqrt{1} \\cdot \\sqrt{2}} = \\frac{1}{2}\\sqrt{2} \\implies \\theta = 45^\\circ$$ (Opsi D)."
        },
        {
          "id": "sma10-b3-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Panjang proyeksi skalar ortogonal vektor $\\vec{u} = \\begin{pmatrix} 2 \\\\ 4 \\end{pmatrix}$ pada vektor $\\vec{v} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "4"
            },
            {
              "key": "B",
              "text": "\\frac{22}{5}"
            },
            {
              "key": "C",
              "text": "\\frac{24}{5}"
            },
            {
              "key": "D",
              "text": "5"
            }
          ],
          "correctAnswer": "B",
          "hint": "Rumus $|\\vec{c}| = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{v}|}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\frac{2(3) + 4(4)}{\\sqrt{3^2 + 4^2}} = \\frac{22}{5}$$ (Opsi B)."
        },
        {
          "id": "sma10-b3-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Titik $M$ membagi $AB$ dengan perbandingan $AM : MB = 2 : 1$. Jika $A(1, 4)$ dan $B(7, 10)$, koordinat $M$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "(5, 8)"
            },
            {
              "key": "B",
              "text": "(4, 7)"
            },
            {
              "key": "C",
              "text": "(5, 7)"
            },
            {
              "key": "D",
              "text": "(6, 8)"
            }
          ],
          "correctAnswer": "A",
          "hint": "$M = \\frac{2B + A}{3}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$M = \\left(\\frac{14+1}{3}, \\frac{20+4}{3}\\right) = (5, 8)$$ (Opsi A)."
        },
        {
          "id": "sma10-b3-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Perahu bergerak dengan kelajuan 8 m/s tegak lurus arus air berkecepatan 6 m/s. Kecepatan resultan perahu adalah...",
          "options": [
            {
              "key": "A",
              "text": "14 m/s"
            },
            {
              "key": "B",
              "text": "12 m/s"
            },
            {
              "key": "C",
              "text": "10 m/s"
            },
            {
              "key": "D",
              "text": "9 m/s"
            }
          ],
          "correctAnswer": "C",
          "hint": "Resultan Pythagoras: $v = \\sqrt{8^2 + 6^2}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$v = \\sqrt{64 + 36} = 10\\text{ m/s}$$ (Opsi C)."
        },
        {
          "id": "sma10-b3-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Diketahui $|\\vec{a}| = 4$, $|\\vec{b}| = 6$, dan sudut antara keduanya $60^\\circ$. Nilai $\\vec{a} \\cdot \\vec{b}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "12\\sqrt{3}"
            },
            {
              "key": "B",
              "text": "12"
            },
            {
              "key": "C",
              "text": "24"
            },
            {
              "key": "D",
              "text": "18"
            }
          ],
          "correctAnswer": "B",
          "hint": "$\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}| \\cos 60^\\circ$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\vec{a} \\cdot \\vec{b} = 4 \\times 6 \\times \\frac{1}{2} = 12$$ (Opsi B)."
        },
        {
          "id": "sma10-b3-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Jika $|\\vec{u}| = 5$, $|\\vec{v}| = 3$, dan $|\\vec{u} - \\vec{v}| = 7$, maka $|\\vec{u} + \\vec{v}|$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\sqrt{19}"
            },
            {
              "key": "B",
              "text": "5"
            },
            {
              "key": "C",
              "text": "4\\sqrt{2}"
            },
            {
              "key": "D",
              "text": "\\sqrt{21}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Identitas jajar genjang: $|\\vec{u} + \\vec{v}|^2 + |\\vec{u} - \\vec{v}|^2 = 2(|\\vec{u}|^2 + |\\vec{v}|^2)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$|\\vec{u} + \\vec{v}|^2 + 49 = 2(25 + 9) = 68 \\implies |\\vec{u} + \\vec{v}| = \\sqrt{19}$$ (Opsi A)."
        },
        {
          "id": "sma10-b3-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Vektor proyeksi ortogonal dari $\\vec{a} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$ pada $\\vec{b} = \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\begin{pmatrix} \\frac{8}{5} \\\\ \\frac{4}{5} \\end{pmatrix}"
            },
            {
              "key": "B",
              "text": "\\begin{pmatrix} \\frac{4}{5} \\\\ \\frac{8}{5} \\end{pmatrix}"
            },
            {
              "key": "C",
              "text": "\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}"
            },
            {
              "key": "D",
              "text": "\\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}"
            }
          ],
          "correctAnswer": "A",
          "hint": "$\\vec{p} = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|^2} \\vec{b}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\vec{p} = \\frac{4}{5}\\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} \\frac{8}{5} \\\\ \\frac{4}{5} \\end{pmatrix}$$ (Opsi A)."
        },
        {
          "id": "sma10-b3-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Titik $A(1, 2, 3)$, $B(2, 4, 5)$, dan $C(x, 8, y)$ kolinier (segaris). Nilai dari $x + y$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "14"
            },
            {
              "key": "B",
              "text": "12"
            },
            {
              "key": "C",
              "text": "13"
            },
            {
              "key": "D",
              "text": "15"
            }
          ],
          "correctAnswer": "C",
          "hint": "Rasio vektor: $\\vec{BC} = 2\\vec{AB}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$x - 2 = 2(1) \\implies x = 4; \\quad y - 5 = 2(2) \\implies y = 9 \\implies x + y = 13$$ (Opsi C)."
        },
        {
          "id": "sma10-b3-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Pada segitiga $ABC$, diketahui $\\vec{AB} = \\vec{u}$ dan $\\vec{AC} = \\vec{v}$. Jika $D$ titik tengah $BC$, vektor $\\vec{AD}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{1}{2}(\\vec{u} - \\vec{v})"
            },
            {
              "key": "B",
              "text": "\\frac{1}{2}(\\vec{u} + \\vec{v})"
            },
            {
              "key": "C",
              "text": "\\vec{u} + \\frac{1}{2}\\vec{v}"
            },
            {
              "key": "D",
              "text": "\\frac{1}{2}\\vec{u} + \\vec{v}"
            }
          ],
          "correctAnswer": "B",
          "hint": "Vektor posisi titik tengah $D = \\frac{B + C}{2}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\vec{AD} = \\frac{1}{2}(\\vec{u} + \\vec{v})$$ (Opsi B)."
        },
        {
          "id": "sma10-b3-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dua gaya $F_1 = 10\\text{ N}$ arah $0^\\circ$ dan $F_2 = 10\\text{ N}$ arah $60^\\circ$ diimbangi oleh gaya $F_3$. Besar gaya $F_3$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "15\\text{ N}"
            },
            {
              "key": "B",
              "text": "20\\text{ N}"
            },
            {
              "key": "C",
              "text": "10\\sqrt{2}\\text{ N}"
            },
            {
              "key": "D",
              "text": "10\\sqrt{3}\\text{ N}"
            }
          ],
          "correctAnswer": "D",
          "hint": "Resultan gaya $F_1$ dan $F_2$: $R = \\sqrt{F_1^2 + F_2^2 + 2F_1 F_2 \\cos 60^\\circ}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$R = \\sqrt{100 + 100 + 100} = \\sqrt{300} = 10\\sqrt{3}\\text{ N}$$ (Opsi D)."
        }
      ]
    },
    {
      "id": "sma10-bab4-trigonometri",
      "title": "Bab 4: Trigonometri",
      "track": "wajib",
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
              "text": "$\\frac{4}{5}$"
            },
            {
              "key": "B",
              "text": "$\\frac{3}{5}$"
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
          "correctAnswer": "B",
          "hint": "Cari sisi miring $AC$ dengan Pythagoras: $\\sqrt{8^2 + 6^2} = 10$. Sisi depan sudut $A$ adalah $BC = 6$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Sisi miring $AC = \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = 10\\text{ cm}$.\n2. Sisi depan sudut $A$ adalah $BC = 6\\text{ cm}$.\n3. Nilai sinus:\n$$\\sin \\angle A = \\frac{\\text{depan}}{\\text{miring}} = \\frac{6}{10} = \\frac{3}{5}$$\nNilai $\\sin \\angle A$ adalah **$\\frac{3}{5}$** (Opsi B)."
        },
        {
          "id": "sma10-b4-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Nilai dari ekspresi trigonometri $\\sin 30^\\circ + \\cos 60^\\circ - \\tan 45^\\circ$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "1"
            },
            {
              "key": "B",
              "text": "$\\frac{1}{2}$"
            },
            {
              "key": "C",
              "text": "0"
            },
            {
              "key": "D",
              "text": "-1"
            }
          ],
          "correctAnswer": "C",
          "hint": "Nilai $\\sin 30^\\circ = \\frac{1}{2}$, $\\cos 60^\\circ = \\frac{1}{2}$, dan $\\tan 45^\\circ = 1$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Masukkan nilai masing-masing sudut istimewa:\n$$\\frac{1}{2} + \\frac{1}{2} - 1 = 1 - 1 = 0$$\nHasilnya adalah **0** (Opsi C)."
        },
        {
          "id": "sma10-b4-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Seorang pengamat mengamati puncak menara dari jarak 20 meter di atas tanah datar. Jika sudut elevasi yang terbentuk adalah $60^\\circ$ dan tinggi mata pengamat diabaikan, maka tinggi menara tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\frac{20}{3}\\sqrt{3}\\text{ meter}$"
            },
            {
              "key": "B",
              "text": "$40\\text{ meter}$"
            },
            {
              "key": "C",
              "text": "$20\\text{ meter}$"
            },
            {
              "key": "D",
              "text": "$20\\sqrt{3}\\text{ meter}$"
            }
          ],
          "correctAnswer": "D",
          "hint": "Gunakan $\\tan 60^\\circ = \\frac{t}{20}$ dengan nilai $\\tan 60^\\circ = \\sqrt{3}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Perbandingan tangen:\n$$\\tan 60^\\circ = \\frac{t}{20}$$\n2. Masukkan nilai $\\tan 60^\\circ = \\sqrt{3}$:\n$$\\sqrt{3} = \\frac{t}{20} \\implies t = 20\\sqrt{3}\\text{ meter}$$\nTinggi menara adalah **$20\\sqrt{3}\\text{ meter}$** (Opsi D)."
        },
        {
          "id": "sma10-b4-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Pada segitiga sembarang $ABC$, panjang sisi $a = 8\\text{ cm}$, sisi $b = 10\\text{ cm}$, dan sudut apit $\\angle C = 60^\\circ$. Panjang sisi $c$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$2\\sqrt{19}\\text{ cm}$"
            },
            {
              "key": "B",
              "text": "$\\sqrt{84}\\text{ cm}$"
            },
            {
              "key": "C",
              "text": "$2\\sqrt{21}\\text{ cm}$"
            },
            {
              "key": "D",
              "text": "$6\\text{ cm}$"
            }
          ],
          "correctAnswer": "C",
          "hint": "Gunakan Aturan Kosinus: $c^2 = a^2 + b^2 - 2ab \\cos C$ dengan $\\cos 60^\\circ = \\frac{1}{2}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Aturan kosinus:\n$$c^2 = 8^2 + 10^2 - 2(8)(10)\\cos 60^\\circ$$\n$$c^2 = 64 + 100 - 160\\left(\\frac{1}{2}\\right) = 164 - 80 = 84$$\n2. Sederhanakan bentuk akar:\n$$c = \\sqrt{84} = \\sqrt{4 \\times 21} = 2\\sqrt{21}\\text{ cm}$$\nPanjang sisi $c$ adalah **$2\\sqrt{21}\\text{ cm}$** (Opsi C)."
        },
        {
          "id": "sma10-b4-5",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Nilai dari $\\cos 60^\\circ + \\sin 30^\\circ$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{1}{2}\\sqrt{3}"
            },
            {
              "key": "B",
              "text": "\\frac{1}{2}"
            },
            {
              "key": "C",
              "text": "\\sqrt{3}"
            },
            {
              "key": "D",
              "text": "1"
            }
          ],
          "correctAnswer": "D",
          "hint": "$\\cos 60^\\circ = 1/2$ dan $\\sin 30^\\circ = 1/2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\frac{1}{2} + \\frac{1}{2} = 1$$ (Opsi D)."
        },
        {
          "id": "sma10-b4-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jika $\\sin A = \\frac{3}{5}$ dengan $A$ lancip, maka nilai $\\tan A$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{3}{4}"
            },
            {
              "key": "B",
              "text": "\\frac{4}{3}"
            },
            {
              "key": "C",
              "text": "\\frac{4}{5}"
            },
            {
              "key": "D",
              "text": "\\frac{3}{5}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Tripel Pythagoras 3-4-5, sisi samping $= 4$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\tan A = \\frac{\\text{depan}}{\\text{samping}} = \\frac{3}{4}$$ (Opsi A)."
        },
        {
          "id": "sma10-b4-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Nilai dari $\\sin 150^\\circ$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "-\\frac{1}{2}"
            },
            {
              "key": "B",
              "text": "\\frac{1}{2}"
            },
            {
              "key": "C",
              "text": "\\frac{1}{2}\\sqrt{3}"
            },
            {
              "key": "D",
              "text": "-\\frac{1}{2}\\sqrt{3}"
            }
          ],
          "correctAnswer": "B",
          "hint": "$\\sin(180^\\circ - 30^\\circ) = \\sin 30^\\circ = \\frac{1}{2}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\sin 150^\\circ = \\frac{1}{2}$$ (Opsi B)."
        },
        {
          "id": "sma10-b4-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Nilai dari $\\cos 240^\\circ$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{1}{2}"
            },
            {
              "key": "B",
              "text": "-\\frac{1}{2}"
            },
            {
              "key": "C",
              "text": "-\\frac{1}{2}\\sqrt{3}"
            },
            {
              "key": "D",
              "text": "\\frac{1}{2}\\sqrt{3}"
            }
          ],
          "correctAnswer": "B",
          "hint": "Kuadran III: $\\cos(180^\\circ + 60^\\circ) = -\\cos 60^\\circ = -\\frac{1}{2}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\cos 240^\\circ = -\\frac{1}{2}$$ (Opsi B)."
        },
        {
          "id": "sma10-b4-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bentuk sederhana dari $(1 - \\sin^2 \\theta)(1 + \\tan^2 \\theta)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\cos^2 \\theta"
            },
            {
              "key": "B",
              "text": "\\sin^2 \\theta"
            },
            {
              "key": "C",
              "text": "\\tan^2 \\theta"
            },
            {
              "key": "D",
              "text": "1"
            }
          ],
          "correctAnswer": "D",
          "hint": "$1 - \\sin^2 \\theta = \\cos^2 \\theta$ dan $1 + \\tan^2 \\theta = \\sec^2 \\theta$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\cos^2 \\theta \\times \\frac{1}{\\cos^2 \\theta} = 1$$ (Opsi D)."
        },
        {
          "id": "sma10-b4-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Pengamat melihat puncak menara dengan sudut elevasi $45^\\circ$ dari jarak mendatar 30 meter. Tinggi menara adalah...",
          "options": [
            {
              "key": "A",
              "text": "30\\sqrt{3} meter"
            },
            {
              "key": "B",
              "text": "30 meter"
            },
            {
              "key": "C",
              "text": "15 meter"
            },
            {
              "key": "D",
              "text": "15\\sqrt{2} meter"
            }
          ],
          "correctAnswer": "B",
          "hint": "$\\tan 45^\\circ = t / 30 \\implies t = 30$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$t = 30 \\times \\tan 45^\\circ = 30\\text{ meter}$$ (Opsi B)."
        },
        {
          "id": "sma10-b4-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Pada segitiga $ABC$, sisi $a = 6\\text{ cm}$, sudut $A = 30^\\circ$, dan sudut $B = 45^\\circ$. Panjang sisi $b$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "6\\sqrt{2}\\text{ cm}"
            },
            {
              "key": "B",
              "text": "3\\sqrt{2}\\text{ cm}"
            },
            {
              "key": "C",
              "text": "6\\sqrt{3}\\text{ cm}"
            },
            {
              "key": "D",
              "text": "4\\sqrt{2}\\text{ cm}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Aturan sinus: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$b = \\frac{6 \\times \\sin 45^\\circ}{\\sin 30^\\circ} = \\frac{6 \\times \\frac{1}{2}\\sqrt{2}}{\\frac{1}{2}} = 6\\sqrt{2}\\text{ cm}$$ (Opsi A)."
        },
        {
          "id": "sma10-b4-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Pada segitiga $ABC$, diketahui $b = 5\\text{ cm}$, $c = 8\\text{ cm}$, dan sudut $A = 60^\\circ$. Panjang sisi $a$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "8 cm"
            },
            {
              "key": "B",
              "text": "6 cm"
            },
            {
              "key": "C",
              "text": "7 cm"
            },
            {
              "key": "D",
              "text": "\\sqrt{53} cm"
            }
          ],
          "correctAnswer": "C",
          "hint": "Aturan cosinus: $a^2 = b^2 + c^2 - 2bc\\cos 60^\\circ$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$a^2 = 25 + 64 - 80(1/2) = 49 \\implies a = 7\\text{ cm}$$ (Opsi C)."
        },
        {
          "id": "sma10-b4-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Luas segitiga dengan dua sisi 10 cm dan 12 cm serta sudut apit $30^\\circ$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "60 cm^2"
            },
            {
              "key": "B",
              "text": "30\\sqrt{3} cm^2"
            },
            {
              "key": "C",
              "text": "45 cm^2"
            },
            {
              "key": "D",
              "text": "30 cm^2"
            }
          ],
          "correctAnswer": "D",
          "hint": "Luas $= \\frac{1}{2} a b \\sin C$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$L = \\frac{1}{2} \\times 10 \\times 12 \\times \\sin 30^\\circ = 60 \\times \\frac{1}{2} = 30\\text{ cm}^2$$ (Opsi D)."
        },
        {
          "id": "sma10-b4-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jika $\\tan \\alpha = -\\frac{4}{3}$ di Kuadran II, maka nilai $\\cos \\alpha$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{3}{5}"
            },
            {
              "key": "B",
              "text": "-\\frac{4}{5}"
            },
            {
              "key": "C",
              "text": "\\frac{4}{5}"
            },
            {
              "key": "D",
              "text": "-\\frac{3}{5}"
            }
          ],
          "correctAnswer": "D",
          "hint": "Di Kuadran II, cosinus bernilai negatif: $-3/5$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\cos \\alpha = -\\frac{3}{5}$$ (Opsi D)."
        },
        {
          "id": "sma10-b4-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Nilai dari $\\frac{\\sin 120^\\circ \\cdot \\cos 300^\\circ}{\\tan 225^\\circ}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{1}{4}\\sqrt{3}"
            },
            {
              "key": "B",
              "text": "\\frac{1}{2}\\sqrt{3}"
            },
            {
              "key": "C",
              "text": "\\frac{1}{4}"
            },
            {
              "key": "D",
              "text": "\\frac{1}{2}"
            }
          ],
          "correctAnswer": "A",
          "hint": "$\\sin 120^\\circ = \\frac{1}{2}\\sqrt{3}, \\cos 300^\\circ = \\frac{1}{2}, \\tan 225^\\circ = 1$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\frac{\\frac{1}{2}\\sqrt{3} \\times \\frac{1}{2}}{1} = \\frac{1}{4}\\sqrt{3}$$ (Opsi A)."
        },
        {
          "id": "sma10-b4-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Kapal berlayar dari $A$ arah $060^\\circ$ sejauh 20 mil ke $B$, lalu arah $120^\\circ$ sejauh 20 mil ke $C$. Jarak $A$ ke $C$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "20\\sqrt{3} mil"
            },
            {
              "key": "B",
              "text": "20 mil"
            },
            {
              "key": "C",
              "text": "40 mil"
            },
            {
              "key": "D",
              "text": "30 mil"
            }
          ],
          "correctAnswer": "A",
          "hint": "Sudut apit $B$ adalah $120^\\circ$. Gunakan aturan cosinus.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$AC = \\sqrt{400 + 400 - 800(-1/2)} = \\sqrt{1.200} = 20\\sqrt{3}\\text{ mil}$$ (Opsi A)."
        },
        {
          "id": "sma10-b4-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Bentuk sederhana dari $\\frac{\\sin x}{1 + \\cos x} + \\frac{1 + \\cos x}{\\sin x}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "2\\sec x"
            },
            {
              "key": "B",
              "text": "2\\tan x"
            },
            {
              "key": "C",
              "text": "2\\csc x"
            },
            {
              "key": "D",
              "text": "\\csc x"
            }
          ],
          "correctAnswer": "C",
          "hint": "Samakan penyebut: $\\frac{\\sin^2 x + (1 + \\cos x)^2}{(1 + \\cos x)\\sin x}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\frac{2 + 2\\cos x}{(1 + \\cos x)\\sin x} = \\frac{2}{\\sin x} = 2\\csc x$$ (Opsi C)."
        },
        {
          "id": "sma10-b4-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Himpunan penyelesaian $2\\sin x - \\sqrt{3} = 0$ untuk $0^\\circ \\le x \\le 360^\\circ$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "{30^\\circ, 150^\\circ}"
            },
            {
              "key": "B",
              "text": "{60^\\circ, 120^\\circ}"
            },
            {
              "key": "C",
              "text": "{60^\\circ, 240^\\circ}"
            },
            {
              "key": "D",
              "text": "{60^\\circ, 300^\\circ}"
            }
          ],
          "correctAnswer": "B",
          "hint": "$\\sin x = \\frac{1}{2}\\sqrt{3}$ di Kuadran I dan II.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$x = 60^\\circ \\text{ dan } x = 180^\\circ - 60^\\circ = 120^\\circ$$ (Opsi B)."
        },
        {
          "id": "sma10-b4-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Segitiga dengan sisi 5 cm, 6 cm, dan 7 cm memiliki kosinus sudut terbesar sama dengan...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{2}{5}"
            },
            {
              "key": "B",
              "text": "\\frac{1}{7}"
            },
            {
              "key": "C",
              "text": "\\frac{1}{5}"
            },
            {
              "key": "D",
              "text": "\\frac{1}{6}"
            }
          ],
          "correctAnswer": "C",
          "hint": "Sudut terbesar di depan sisi 7. Aturan cosinus: $\\cos C = \\frac{25 + 36 - 49}{60}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\cos C = \\frac{12}{60} = \\frac{1}{5}$$ (Opsi C)."
        },
        {
          "id": "sma10-b4-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Nilai dari $\\sin^2 15^\\circ + \\sin^2 75^\\circ$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "1"
            },
            {
              "key": "B",
              "text": "\\frac{1}{2}"
            },
            {
              "key": "C",
              "text": "\\frac{1}{2}\\sqrt{3}"
            },
            {
              "key": "D",
              "text": "2"
            }
          ],
          "correctAnswer": "A",
          "hint": "$\\sin 75^\\circ = \\cos 15^\\circ$. Gunakan $\\sin^2 \\theta + \\cos^2 \\theta = 1$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\sin^2 15^\\circ + \\cos^2 15^\\circ = 1$$ (Opsi A)."
        }
      ]
    },
    {
      "id": "sma10-bab5-spltv-sptldv",
      "title": "Bab 5: Sistem Persamaan dan Pertidaksamaan Linear",
      "track": "wajib",
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
              "text": "2"
            },
            {
              "key": "B",
              "text": "3"
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
          "correctAnswer": "B",
          "hint": "Kurangkan persamaan kedua dengan persamaan pertama: $(x + 2y + z) - (x + y + z) = 12 - 9$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Kurangkan pers (2) dengan pers (1):\n$$(x + 2y + z) - (x + y + z) = 12 - 9$$\n$$y = 3$$\nNilai $y$ adalah **3** (Opsi B)."
        },
        {
          "id": "sma10-b5-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Dari sistem persamaan pada soal sebelumnya, nilai dari $z$ adalah...",
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
          "correctAnswer": "C",
          "hint": "Kurangkan persamaan ketiga dengan persamaan pertama: $(x + y + 3z) - (x + y + z) = 17 - 9$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Kurangkan pers (3) dengan pers (1):\n$$(x + y + 3z) - (x + y + z) = 17 - 9$$\n$$2z = 8 \\implies z = 4$$\nNilai $z$ adalah **4** (Opsi C)."
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
              "text": "Rp12.000,00"
            },
            {
              "key": "B",
              "text": "Rp10.500,00"
            },
            {
              "key": "C",
              "text": "Rp13.000,00"
            },
            {
              "key": "D",
              "text": "Rp11.000,00"
            }
          ],
          "correctAnswer": "D",
          "hint": "Misalkan buku $= b$ dan pensil $= p$. Bentuk SPLDV, cari nilai $b$ dan $p$, lalu hitung $2b + p$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Sistem persamaan:\n$$3b + 2p = 18.000 \\quad (\\times 2) \\implies 6b + 4p = 36.000$$\n$$b + 4p = 16.000 \\quad (\\times 1) \\implies b + 4p = 16.000$$\n2. Eliminasi $p$:\n$$5b = 20.000 \\implies b = 4.000$$\n3. Hitung $p$:\n$$4.000 + 4p = 16.000 \\implies 4p = 12.000 \\implies p = 3.000$$\n4. Hitung harga 2 buku dan 1 pensil:\n$$2(4.000) + 3.000 = 8.000 + 3.000 = 11.000$$\nHarga yang harus dibayar adalah **Rp11.000,00** (Opsi D)."
        },
        {
          "id": "sma10-b5-5",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Titik berikut yang berada di dalam daerah penyelesaian $2x + 3y \\le 12$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "(1, 2)"
            },
            {
              "key": "B",
              "text": "(4, 3)"
            },
            {
              "key": "C",
              "text": "(5, 2)"
            },
            {
              "key": "D",
              "text": "(3, 4)"
            }
          ],
          "correctAnswer": "A",
          "hint": "Uji titik $(1, 2)$: $2(1) + 3(2) = 8 \\le 12$ (benar).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$2(1) + 3(2) = 8 \\le 12$$ (Opsi A)."
        },
        {
          "id": "sma10-b5-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Diketahui SPLTV $\\begin{cases} x + y + z = 6 \\\\ x + 2y + z = 8 \\\\ 2x - y + z = 3 \\end{cases}$. Nilai $x$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "2"
            },
            {
              "key": "B",
              "text": "1"
            },
            {
              "key": "C",
              "text": "3"
            },
            {
              "key": "D",
              "text": "4"
            }
          ],
          "correctAnswer": "B",
          "hint": "Kurangkan pers 2 dengan pers 1: $y = 2$. Lalu selesaikan untuk $x$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n1. $y = 2 \\implies x + z = 4$\\n2. $2x - 2 + z = 3 \\implies 2x + z = 5$\\n3. $x = 5 - 4 = 1$ (Opsi B)."
        },
        {
          "id": "sma10-b5-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Harga 2 kg mangga, 1 kg apel, dan 3 kg jeruk Rp87.000,00. Persamaan linear yang sesuai adalah...",
          "options": [
            {
              "key": "A",
              "text": "x + 2y + 3z = 87.000"
            },
            {
              "key": "B",
              "text": "3x + y + 2z = 87.000"
            },
            {
              "key": "C",
              "text": "2x + y + 3z = 87.000"
            },
            {
              "key": "D",
              "text": "2x + 3y + z = 87.000"
            }
          ],
          "correctAnswer": "C",
          "hint": "Kalikan kuantitas masing-masing buah dengan variabel harga.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$2x + y + 3z = 87.000$$ (Opsi C)."
        },
        {
          "id": "sma10-b5-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Daerah himpunan penyelesaian sistem $x + y \\ge 4, 2x + y \\le 6, x \\ge 0, y \\ge 0$ terletak pada...",
          "options": [
            {
              "key": "A",
              "text": "Kuadran II"
            },
            {
              "key": "B",
              "text": "Kuadran I"
            },
            {
              "key": "C",
              "text": "Kuadran III"
            },
            {
              "key": "D",
              "text": "Kuadran IV"
            }
          ],
          "correctAnswer": "B",
          "hint": "Syarat $x \\ge 0$ dan $y \\ge 0$ membatasi daerah hanya di Kuadran I.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nDaerah berada di **Kuadran I** (Opsi B)."
        },
        {
          "id": "sma10-b5-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Nilai maksimum dari $f(x, y) = 3x + 4y$ pada titik-titik pojok $(0, 0), (4, 0), (2, 3), (0, 4)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "16"
            },
            {
              "key": "B",
              "text": "12"
            },
            {
              "key": "C",
              "text": "18"
            },
            {
              "key": "D",
              "text": "20"
            }
          ],
          "correctAnswer": "C",
          "hint": "Uji $f(2, 3) = 3(2) + 4(3) = 18$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$f(2, 3) = 6 + 12 = 18$$ (Opsi C)."
        },
        {
          "id": "sma10-b5-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Titik potong garis pembatas $3x - 2y = 6$ dengan sumbu koordinat adalah...",
          "options": [
            {
              "key": "A",
              "text": "(3, 0) dan (0, -2)"
            },
            {
              "key": "B",
              "text": "(-2, 0) dan (0, 3)"
            },
            {
              "key": "C",
              "text": "(0, 2) dan (-3, 0)"
            },
            {
              "key": "D",
              "text": "(2, 0) dan (0, -3)"
            }
          ],
          "correctAnswer": "D",
          "hint": "Masukkan $y=0 \\implies x=2$ dan $x=0 \\implies y=-3$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nTitik potongnya adalah **(2, 0) dan (0, -3)** (Opsi D)."
        },
        {
          "id": "sma10-b5-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Total umur Ali, Budi, dan Cici adalah 45 tahun. Budi 2 tahun lebih muda dari Ali, Cici 5 tahun lebih muda dari Budi. Umur Ali adalah...",
          "options": [
            {
              "key": "A",
              "text": "18 tahun"
            },
            {
              "key": "B",
              "text": "16 tahun"
            },
            {
              "key": "C",
              "text": "15 tahun"
            },
            {
              "key": "D",
              "text": "20 tahun"
            }
          ],
          "correctAnswer": "A",
          "hint": "$A + (A - 2) + (A - 7) = 45 \\implies 3A = 54$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$A = 18\\text{ tahun}$$ (Opsi A)."
        },
        {
          "id": "sma10-b5-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Pedagang buah memiliki gerobak muatan maksimal 100 kg dan modal Rp1.200.000,00. Harga beli apel Rp15.000/kg dan jeruk Rp10.000/kg. Model pertidaksamaan yang tepat adalah...",
          "options": [
            {
              "key": "A",
              "text": "x + y \\ge 100, \\quad 3x + 2y \\le 240, \\quad x \\ge 0, y \\ge 0"
            },
            {
              "key": "B",
              "text": "x + y \\le 100, \\quad 2x + 3y \\le 240, \\quad x \\ge 0, y \\ge 0"
            },
            {
              "key": "C",
              "text": "x + y \\le 100, \\quad 3x + 2y \\le 240, \\quad x \\ge 0, y \\ge 0"
            },
            {
              "key": "D",
              "text": "x + y \\le 120, \\quad 3x + 2y \\le 100, \\quad x \\ge 0, y \\ge 0"
            }
          ],
          "correctAnswer": "C",
          "hint": "Kapasitas: $x + y \\le 100$. Modal: $15.000x + 10.000y \\le 1.200.000$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$x + y \\le 100, \\quad 3x + 2y \\le 240, \\quad x \\ge 0, y \\ge 0$$ (Opsi C)."
        },
        {
          "id": "sma10-b5-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jika $(x, y, z)$ memenuhi sistem $\\begin{cases} x + y = 5 \\\\ y + z = 7 \\\\ x + z = 6 \\end{cases}$, nilai $x + y + z$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "10"
            },
            {
              "key": "B",
              "text": "8"
            },
            {
              "key": "C",
              "text": "9"
            },
            {
              "key": "D",
              "text": "12"
            }
          ],
          "correctAnswer": "C",
          "hint": "Jumlahkan ketiga persamaan: $2(x + y + z) = 18$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$x + y + z = 9$$ (Opsi C)."
        },
        {
          "id": "sma10-b5-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Tempat parkir seluas $360\\text{ m}^2$ memuat sedan ($6\\text{ m}^2$) dan bus ($24\\text{ m}^2$). Maksimal 30 kendaraan. Sistem pertidaksamaannya adalah...",
          "options": [
            {
              "key": "A",
              "text": "x + y \\le 30, \\quad 4x + y \\le 60, \\quad x \\ge 0, y \\ge 0"
            },
            {
              "key": "B",
              "text": "x + y \\ge 30, \\quad x + 4y \\le 60, \\quad x \\ge 0, y \\ge 0"
            },
            {
              "key": "C",
              "text": "x + y \\le 30, \\quad 6x + 24y \\ge 360, \\quad x \\ge 0, y \\ge 0"
            },
            {
              "key": "D",
              "text": "x + y \\le 30, \\quad x + 4y \\le 60, \\quad x \\ge 0, y \\ge 0"
            }
          ],
          "correctAnswer": "D",
          "hint": "$6x + 24y \\le 360 \\implies x + 4y \\le 60$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$x + y \\le 30, \\quad x + 4y \\le 60, \\quad x \\ge 0, y \\ge 0$$ (Opsi D)."
        },
        {
          "id": "sma10-b5-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Nilai minimum fungsi objektif $Z = 5x + 2y$ pada daerah $x + 2y \\ge 8, x \\ge 0, y \\ge 0$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "8"
            },
            {
              "key": "B",
              "text": "10"
            },
            {
              "key": "C",
              "text": "12"
            },
            {
              "key": "D",
              "text": "16"
            }
          ],
          "correctAnswer": "A",
          "hint": "Uji titik pojok $(8, 0)$ dan $(0, 4)$. $Z(0, 4) = 8$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$Z_{\\min} = 5(0) + 2(4) = 8$$ (Opsi A)."
        },
        {
          "id": "sma10-b5-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Diketahui sistem $\\frac{1}{x} + \\frac{1}{y} = 5$, $\\frac{1}{y} + \\frac{1}{z} = 7$, $\\frac{1}{x} + \\frac{1}{z} = 6$. Nilai $x + y + z$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{11}{12}"
            },
            {
              "key": "B",
              "text": "\\frac{13}{12}"
            },
            {
              "key": "C",
              "text": "1"
            },
            {
              "key": "D",
              "text": "\\frac{7}{6}"
            }
          ],
          "correctAnswer": "B",
          "hint": "Misalkan $a, b, c$. Jumlahkan: $a + b + c = 9 \\implies x = 1/2, y = 1/3, z = 1/4$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$x + y + z = \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} = \\frac{13}{12}$$ (Opsi B)."
        },
        {
          "id": "sma10-b5-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Pabrik memproduksi barang A (untung 40.000) dan B (untung 30.000). Titik ekstrim daerah layak adalah $(0, 0), (50, 0), (40, 20), (20, 50), (0, 60)$. Untung maksimum adalah...",
          "options": [
            {
              "key": "A",
              "text": "Rp2.200.000,00"
            },
            {
              "key": "B",
              "text": "Rp2.300.000,00"
            },
            {
              "key": "C",
              "text": "Rp2.000.000,00"
            },
            {
              "key": "D",
              "text": "Rp2.400.000,00"
            }
          ],
          "correctAnswer": "B",
          "hint": "Uji $(20, 50)$: $40.000(20) + 30.000(50) = 800.000 + 1.500.000 = 2.300.000$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nKeuntungan maksimum adalah **Rp2.300.000,00** (Opsi B)."
        },
        {
          "id": "sma10-b5-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Agar SPLTV $\\begin{cases} x + 2y - z = 4 \\\\ 2x - y + z = 3 \\\\ 3x + y + az = 7 \\end{cases}$ memiliki tak hingga banyak penyelesaian, nilai $a$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "1"
            },
            {
              "key": "B",
              "text": "-1"
            },
            {
              "key": "C",
              "text": "2"
            },
            {
              "key": "D",
              "text": "0"
            }
          ],
          "correctAnswer": "D",
          "hint": "Jumlahkan pers 1 dan 2: $3x + y + 0z = 7$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nKoefisien $z$ harus cocok: $a = 0$ (Opsi D)."
        },
        {
          "id": "sma10-b5-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Titik potong kurva $y = x^2 - 4$ dan garis $y = 2x - 1$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "(-1, -3) dan (3, 5)"
            },
            {
              "key": "B",
              "text": "(-2, 0) dan (2, 0)"
            },
            {
              "key": "C",
              "text": "(1, 1) dan (3, 5)"
            },
            {
              "key": "D",
              "text": "(0, -4) dan (2, 3)"
            }
          ],
          "correctAnswer": "A",
          "hint": "$x^2 - 2x - 3 = 0 \\implies x = 3$ atau $x = -1$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$x = 3 \\implies y = 5; \\quad x = -1 \\implies y = -3$$ (Opsi A)."
        },
        {
          "id": "sma10-b5-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Peserta menjawab 13 soal (A, B, C) dengan skor 62. Bobot: A=2, B=4, C=6. Banyak soal B adalah dua kali soal A. Banyak soal C adalah...",
          "options": [
            {
              "key": "A",
              "text": "6"
            },
            {
              "key": "B",
              "text": "8"
            },
            {
              "key": "C",
              "text": "5"
            },
            {
              "key": "D",
              "text": "7"
            }
          ],
          "correctAnswer": "D",
          "hint": "Susun sistem: $3A + C = 13$ dan $10A + 6C = 62$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$10A + 6(13 - 3A) = 62 \\implies 8A = 16 \\implies A = 2 \\implies C = 7$$ (Opsi D)."
        }
      ]
    },
    {
      "id": "sma10-bab6-fungsi-kuadrat",
      "title": "Bab 6: Fungsi Kuadrat",
      "track": "wajib",
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
              "text": "$(2, 7)$"
            },
            {
              "key": "B",
              "text": "$(-2, 3)$"
            },
            {
              "key": "C",
              "text": "$(4, 7)$"
            },
            {
              "key": "D",
              "text": "$(2, 3)$"
            }
          ],
          "correctAnswer": "D",
          "hint": "Cari sumbu simetri $x_p = -\\frac{-4}{2(1)} = 2$, lalu substitusi ke $f(2)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Sumbu simetri: $x_p = -\\frac{b}{2a} = -\\frac{-4}{2(1)} = 2$\n2. Nilai optimum: $y_p = f(2) = (2)^2 - 4(2) + 7 = 4 - 8 + 7 = 3$\nTitik puncaknya adalah **$(2, 3)$** (Opsi D)."
        },
        {
          "id": "sma10-b6-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Nilai diskriminan dari fungsi kuadrat $f(x) = 2x^2 - 5x - 3$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "1"
            },
            {
              "key": "B",
              "text": "49"
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
          "correctAnswer": "B",
          "hint": "Gunakan formula $D = b^2 - 4ac$ dengan $a = 2, b = -5, c = -3$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$D = (-5)^2 - 4(2)(-3) = 25 - (-24) = 25 + 24 = 49$$\nNilai diskriminannya adalah **49** (Opsi B)."
        },
        {
          "id": "sma10-b6-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Persamaan sumbu simetri dari kurva parabola $f(x) = -3x^2 + 12x - 5$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$x = -2$"
            },
            {
              "key": "B",
              "text": "$x = 4$"
            },
            {
              "key": "C",
              "text": "$x = -4$"
            },
            {
              "key": "D",
              "text": "$x = 2$"
            }
          ],
          "correctAnswer": "D",
          "hint": "Gunakan $x = -\\frac{b}{2a}$ dengan $a = -3$ dan $b = 12$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$x = -\\frac{12}{2(-3)} = -\\frac{12}{-6} = 2$$\nPersamaan sumbu simetrinya adalah **$x = 2$** (Opsi D)."
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
        },
        {
          "id": "sma10-b6-5",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Sumbu simetri dari fungsi $f(x) = x^2 - 6x + 8$ adalah garis...",
          "options": [
            {
              "key": "A",
              "text": "x = -3"
            },
            {
              "key": "B",
              "text": "x = 3"
            },
            {
              "key": "C",
              "text": "x = 6"
            },
            {
              "key": "D",
              "text": "x = 4"
            }
          ],
          "correctAnswer": "B",
          "hint": "$x_p = -b / (2a) = 6 / 2 = 3$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$x = -\\frac{-6}{2} = 3$$ (Opsi B)."
        },
        {
          "id": "sma10-b6-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Titik puncak dari fungsi kuadrat $f(x) = x^2 - 4x - 5$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "(2, -5)"
            },
            {
              "key": "B",
              "text": "(-2, 7)"
            },
            {
              "key": "C",
              "text": "(2, -9)"
            },
            {
              "key": "D",
              "text": "(4, -5)"
            }
          ],
          "correctAnswer": "C",
          "hint": "$x_p = 2$, lalu $f(2) = 4 - 8 - 5 = -9$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nPuncak berada di **(2, -9)** (Opsi C)."
        },
        {
          "id": "sma10-b6-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Titik potong grafik $f(x) = x^2 - 5x + 6$ dengan sumbu-X adalah...",
          "options": [
            {
              "key": "A",
              "text": "(-2, 0) dan (-3, 0)"
            },
            {
              "key": "B",
              "text": "(1, 0) dan (6, 0)"
            },
            {
              "key": "C",
              "text": "(2, 0) dan (3, 0)"
            },
            {
              "key": "D",
              "text": "(-1, 0) dan (-6, 0)"
            }
          ],
          "correctAnswer": "C",
          "hint": "$(x - 2)(x - 3) = 0 \\implies x = 2$ atau $x = 3$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n**(2, 0) dan (3, 0)** (Opsi C)."
        },
        {
          "id": "sma10-b6-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Nilai diskriminan ($D$) dari $f(x) = 2x^2 - 4x + 3$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "8"
            },
            {
              "key": "B",
              "text": "-16"
            },
            {
              "key": "C",
              "text": "16"
            },
            {
              "key": "D",
              "text": "-8"
            }
          ],
          "correctAnswer": "D",
          "hint": "$D = b^2 - 4ac = 16 - 24 = -8$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$D = (-4)^2 - 4(2)(3) = -8$$ (Opsi D)."
        },
        {
          "id": "sma10-b6-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jika fungsi kuadrat memiliki $a > 0$ dan $D < 0$, maka grafiknya bersifat...",
          "options": [
            {
              "key": "A",
              "text": "Definit positif (selalu di atas sumbu-X)"
            },
            {
              "key": "B",
              "text": "Definit negatif (selalu di bawah sumbu-X)"
            },
            {
              "key": "C",
              "text": "Menyinggung sumbu-X"
            },
            {
              "key": "D",
              "text": "Memotong sumbu-X di dua titik"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kurva selalu bernilai positif untuk setiap $x$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nSifat ini dinamakan **definit positif** (Opsi A)."
        },
        {
          "id": "sma10-b6-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Persamaan fungsi kuadrat yang berpuncak di $(1, -4)$ dan melalui $(0, -3)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "f(x) = x^2 - 2x - 3"
            },
            {
              "key": "B",
              "text": "f(x) = x^2 + 2x - 3"
            },
            {
              "key": "C",
              "text": "f(x) = 2x^2 - 4x - 3"
            },
            {
              "key": "D",
              "text": "f(x) = x^2 - 2x - 4"
            }
          ],
          "correctAnswer": "A",
          "hint": "$f(x) = a(x - 1)^2 - 4$. Melalui $(0, -3) \\implies a = 1$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$f(x) = (x - 1)^2 - 4 = x^2 - 2x - 3$$ (Opsi A)."
        },
        {
          "id": "sma10-b6-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Tinggi peluru dinyatakan dengan $h(t) = 40t - 5t^2$ meter. Tinggi maksimum peluru adalah...",
          "options": [
            {
              "key": "A",
              "text": "75 meter"
            },
            {
              "key": "B",
              "text": "85 meter"
            },
            {
              "key": "C",
              "text": "100 meter"
            },
            {
              "key": "D",
              "text": "80 meter"
            }
          ],
          "correctAnswer": "D",
          "hint": "$t_{\\max} = -40 / (2 \\times -5) = 4$ detik. $h(4) = 160 - 80 = 80$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$h(4) = 40(4) - 5(16) = 80\\text{ meter}$$ (Opsi D)."
        },
        {
          "id": "sma10-b6-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Kawat 80 meter memagari 3 sisi kebun persegi panjang (satu sisi tembok). Luas maksimum kebun adalah...",
          "options": [
            {
              "key": "A",
              "text": "600 m^2"
            },
            {
              "key": "B",
              "text": "400 m^2"
            },
            {
              "key": "C",
              "text": "800 m^2"
            },
            {
              "key": "D",
              "text": "1.000 m^2"
            }
          ],
          "correctAnswer": "C",
          "hint": "$p + 2l = 80 \\implies L(l) = l(80 - 2l)$. Puncak di $l = 20, p = 40$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$L_{\\max} = 40 \\times 20 = 800\\text{ m}^2$$ (Opsi C)."
        },
        {
          "id": "sma10-b6-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dua bilangan memiliki selisih 10. Hasil kali minimum kedua bilangan tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "-20"
            },
            {
              "key": "B",
              "text": "-25"
            },
            {
              "key": "C",
              "text": "-16"
            },
            {
              "key": "D",
              "text": "-30"
            }
          ],
          "correctAnswer": "B",
          "hint": "$P(x) = x(x - 10) = x^2 - 10x$. Minimum di $x = 5 \\implies P(5) = -25$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$P_{\\min} = 5(5 - 10) = -25$$ (Opsi B)."
        },
        {
          "id": "sma10-b6-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Roket mencapai $h = 0$ saat $t = 0$ dan $t = 6$, serta mencapai $h = 45$ saat $t = 3$. Persamaan lintasannya adalah...",
          "options": [
            {
              "key": "A",
              "text": "h(t) = -5t^2 + 15t"
            },
            {
              "key": "B",
              "text": "h(t) = -3t^2 + 18t"
            },
            {
              "key": "C",
              "text": "h(t) = -4t^2 + 24t"
            },
            {
              "key": "D",
              "text": "h(t) = -5t^2 + 30t"
            }
          ],
          "correctAnswer": "D",
          "hint": "$h(t) = a t(t - 6)$. $45 = a(3)(-3) \\implies a = -5$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$h(t) = -5t(t - 6) = -5t^2 + 30t$$ (Opsi D)."
        },
        {
          "id": "sma10-b6-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Grafik fungsi kuadrat $f(x) = ax^2 + bx + c$ memotong sumbu-Y di titik...",
          "options": [
            {
              "key": "A",
              "text": "(c, 0)"
            },
            {
              "key": "B",
              "text": "(0, -c)"
            },
            {
              "key": "C",
              "text": "(0, c)"
            },
            {
              "key": "D",
              "text": "(-c, 0)"
            }
          ],
          "correctAnswer": "C",
          "hint": "Masukkan nilai $x = 0 \\implies f(0) = c$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nTitik potong sumbu-Y adalah **(0, c)** (Opsi C)."
        },
        {
          "id": "sma10-b6-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Garis $y = 2x + k$ menyinggung parabola $y = x^2 - 4x + 10$. Nilai $k$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "1"
            },
            {
              "key": "B",
              "text": "2"
            },
            {
              "key": "C",
              "text": "-1"
            },
            {
              "key": "D",
              "text": "0"
            }
          ],
          "correctAnswer": "A",
          "hint": "$x^2 - 6x + (10 - k) = 0$. Syarat menyinggung $D = 0 \\implies 36 - 4(10 - k) = 0$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$36 - 40 + 4k = 0 \\implies 4k = 4 \\implies k = 1$$ (Opsi A)."
        },
        {
          "id": "sma10-b6-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Agar $f(x) = (m - 1)x^2 + 4x + (m - 1)$ selalu bernilai negatif untuk setiap $x \\in \\mathbb{R}$, batas $m$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "m > 3"
            },
            {
              "key": "B",
              "text": "-1 < m < 3"
            },
            {
              "key": "C",
              "text": "m < -1"
            },
            {
              "key": "D",
              "text": "m < 1"
            }
          ],
          "correctAnswer": "C",
          "hint": "Syarat definit negatif: $a < 0$ dan $D < 0$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n1. $m < 1$\\n2. $16 - 4(m - 1)^2 < 0 \\implies (m - 1)^2 > 4 \\implies m > 3$ atau $m < -1$\\n3. Irisan: $m < -1$ (Opsi C)."
        },
        {
          "id": "sma10-b6-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Persamaan kuadrat yang akar-akarnya adalah absis potong $y = 2x^2 - 3x + 1$ dan $y = x^2 + 2x - 5$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "x^2 + 5x + 6 = 0"
            },
            {
              "key": "B",
              "text": "x^2 - 5x + 6 = 0"
            },
            {
              "key": "C",
              "text": "x^2 - x - 4 = 0"
            },
            {
              "key": "D",
              "text": "x^2 + x - 6 = 0"
            }
          ],
          "correctAnswer": "B",
          "hint": "Samakan kedua fungsi kuadrat: $2x^2 - 3x + 1 = x^2 + 2x - 5$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$x^2 - 5x + 6 = 0$$ (Opsi B)."
        },
        {
          "id": "sma10-b6-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Grafik $f(x) = x^2 + bx + c$ digeser 2 satuan ke kanan dan 3 ke atas menjadi $g(x) = x^2 - 2x + 6$. Nilai $b + c$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "6"
            },
            {
              "key": "B",
              "text": "5"
            },
            {
              "key": "C",
              "text": "7"
            },
            {
              "key": "D",
              "text": "4"
            }
          ],
          "correctAnswer": "B",
          "hint": "$g(x) = f(x - 2) + 3$. Samakan koefisien.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$b - 4 = -2 \\implies b = 2; \\quad 7 - 4 + c = 6 \\implies c = 3 \\implies b + c = 5$$ (Opsi B)."
        },
        {
          "id": "sma10-b6-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Nilai minimum $f(x) = 2x^2 - 8x + k$ pada interval $[0, 5]$ adalah 3. Nilai $k$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "11"
            },
            {
              "key": "B",
              "text": "9"
            },
            {
              "key": "C",
              "text": "8"
            },
            {
              "key": "D",
              "text": "13"
            }
          ],
          "correctAnswer": "A",
          "hint": "Puncak di $x = 2 \\in [0, 5]$. $f(2) = 8 - 16 + k = 3$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$k - 8 = 3 \\implies k = 11$$ (Opsi A)."
        }
      ]
    },
    {
      "id": "sma10-bab7-statistika",
      "title": "Bab 7: Statistika",
      "track": "wajib",
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
              "text": "7"
            },
            {
              "key": "B",
              "text": "8"
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
          "correctAnswer": "B",
          "hint": "Jumlahkan semua nilai: $6 + 8 + 7 + 9 + 10 = 40$, lalu bagi dengan banyaknya data $n = 5$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\bar{x} = \\frac{6 + 8 + 7 + 9 + 10}{5} = \\frac{40}{5} = 8$$\nNilai rata-rata adalah **8** (Opsi B)."
        },
        {
          "id": "sma10-b7-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Median dari data terurut $4, 5, 7, 8, 10, 12, 14$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "7"
            },
            {
              "key": "B",
              "text": "10"
            },
            {
              "key": "C",
              "text": "7,5"
            },
            {
              "key": "D",
              "text": "8"
            }
          ],
          "correctAnswer": "D",
          "hint": "Data sudah terurut dengan $n = 7$ (ganjil). Median adalah data ke-4.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nData ke-4 pada deretan tersebut adalah angka **8** (Opsi D)."
        },
        {
          "id": "sma10-b7-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jika kuartil pertama $Q_1 = 15$ dan kuartil ketiga $Q_3 = 35$, maka jangkauan interkuartil ($QR$) data tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "10"
            },
            {
              "key": "B",
              "text": "25"
            },
            {
              "key": "C",
              "text": "50"
            },
            {
              "key": "D",
              "text": "20"
            }
          ],
          "correctAnswer": "D",
          "hint": "Jangkauan interkuartil adalah selisih antara $Q_3$ dan $Q_1$: $QR = Q_3 - Q_1$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$QR = Q_3 - Q_1 = 35 - 15 = 20$$\nJangkauan interkuartil adalah **20** (Opsi D)."
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
        },
        {
          "id": "sma10-b7-5",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Simpangan rata-rata dari data: 4, 6, 8, 10, 12 adalah...",
          "options": [
            {
              "key": "A",
              "text": "2,0"
            },
            {
              "key": "B",
              "text": "2,4"
            },
            {
              "key": "C",
              "text": "2,8"
            },
            {
              "key": "D",
              "text": "3,0"
            }
          ],
          "correctAnswer": "B",
          "hint": "Rata-rata $= 8$. $SR = \\frac{4 + 2 + 0 + 2 + 4}{5}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$SR = \\frac{12}{5} = 2{,}4$$ (Opsi B)."
        },
        {
          "id": "sma10-b7-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Varians (ragam) dari data: 2, 4, 6, 8, 10 adalah...",
          "options": [
            {
              "key": "A",
              "text": "8"
            },
            {
              "key": "B",
              "text": "6"
            },
            {
              "key": "C",
              "text": "10"
            },
            {
              "key": "D",
              "text": "\\sqrt{8}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Rata-rata $= 6$. Kuadrat selisih $= 16 + 4 + 0 + 4 + 16 = 40$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$s^2 = \\frac{40}{5} = 8$$ (Opsi A)."
        },
        {
          "id": "sma10-b7-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Simpangan baku dari data: 3, 5, 7, 9, 11 adalah...",
          "options": [
            {
              "key": "A",
              "text": "8"
            },
            {
              "key": "B",
              "text": "\\sqrt{6}"
            },
            {
              "key": "C",
              "text": "2\\sqrt{2}"
            },
            {
              "key": "D",
              "text": "2\\sqrt{3}"
            }
          ],
          "correctAnswer": "C",
          "hint": "Simpangan baku $s = \\sqrt{s^2} = \\sqrt{8} = 2\\sqrt{2}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$s = \\sqrt{8} = 2\\sqrt{2}$$ (Opsi C)."
        },
        {
          "id": "sma10-b7-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Tepi bawah ($L$) dan panjang kelas ($c$) dari interval $41 - 50$ berturut-turut adalah...",
          "options": [
            {
              "key": "A",
              "text": "41 dan 9"
            },
            {
              "key": "B",
              "text": "40,5 dan 10"
            },
            {
              "key": "C",
              "text": "40,5 dan 9"
            },
            {
              "key": "D",
              "text": "41,5 dan 10"
            }
          ],
          "correctAnswer": "B",
          "hint": "Tepi bawah $= 41 - 0{,}5 = 40{,}5$. Panjang kelas $= 10$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$L = 40{,}5, \\quad c = 10$$ (Opsi B)."
        },
        {
          "id": "sma10-b7-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Titik tengah ($x_i$) dari kelas interval $60 - 64$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "61,5"
            },
            {
              "key": "B",
              "text": "62,5"
            },
            {
              "key": "C",
              "text": "63"
            },
            {
              "key": "D",
              "text": "62"
            }
          ],
          "correctAnswer": "D",
          "hint": "Titik tengah $= \\frac{60 + 64}{2} = 62$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$x_i = \\frac{60 + 64}{2} = 62$$ (Opsi D)."
        },
        {
          "id": "sma10-b7-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Desil ke-3 ($D_3$) dari 20 data terurut berada pada data ke...",
          "options": [
            {
              "key": "A",
              "text": "6"
            },
            {
              "key": "B",
              "text": "7"
            },
            {
              "key": "C",
              "text": "6,3"
            },
            {
              "key": "D",
              "text": "5,5"
            }
          ],
          "correctAnswer": "C",
          "hint": "Letak $D_3 = \\frac{3(20 + 1)}{10} = 6{,}3$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\text{Letak } D_3 = 6{,}3$$ (Opsi C)."
        },
        {
          "id": "sma10-b7-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Kelas modus $51 - 60$, frekuensi 14, frekuensi sebelum 10, sesudah 8, panjang 10. Nilai modusnya adalah...",
          "options": [
            {
              "key": "A",
              "text": "55,0"
            },
            {
              "key": "B",
              "text": "53,5"
            },
            {
              "key": "C",
              "text": "56,0"
            },
            {
              "key": "D",
              "text": "54,5"
            }
          ],
          "correctAnswer": "D",
          "hint": "$d_1 = 4, d_2 = 6$. $Mo = 50{,}5 + \\frac{4}{10} \\times 10 = 54{,}5$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$Mo = 50{,}5 + 4 = 54{,}5$$ (Opsi D)."
        },
        {
          "id": "sma10-b7-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Median data kelompok ($N = 40$) di kelas $61 - 70$ (frekuensi 10, $f_k$ sebelum 15). Nilai mediannya adalah...",
          "options": [
            {
              "key": "A",
              "text": "65,5"
            },
            {
              "key": "B",
              "text": "66,0"
            },
            {
              "key": "C",
              "text": "64,5"
            },
            {
              "key": "D",
              "text": "65,0"
            }
          ],
          "correctAnswer": "A",
          "hint": "$Me = 60{,}5 + \\left(\\frac{20 - 15}{10}\\right)10 = 65{,}5$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$Me = 60{,}5 + 5 = 65{,}5$$ (Opsi A)."
        },
        {
          "id": "sma10-b7-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Rata-rata sementara $\\bar{x}_s = 65$, $\\sum f_i d_i = 120$, $\\sum f_i = 40$. Rata-rata sebenarnya adalah...",
          "options": [
            {
              "key": "A",
              "text": "67"
            },
            {
              "key": "B",
              "text": "66"
            },
            {
              "key": "C",
              "text": "69"
            },
            {
              "key": "D",
              "text": "68"
            }
          ],
          "correctAnswer": "D",
          "hint": "$\\bar{x} = 65 + \\frac{120}{40} = 68$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\bar{x} = 65 + 3 = 68$$ (Opsi D)."
        },
        {
          "id": "sma10-b7-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jika data memiliki simpangan baku 4 dan setiap data dikalikan 3 lalu ditambah 5, simpangan baku yang baru adalah...",
          "options": [
            {
              "key": "A",
              "text": "17"
            },
            {
              "key": "B",
              "text": "12"
            },
            {
              "key": "C",
              "text": "9"
            },
            {
              "key": "D",
              "text": "7"
            }
          ],
          "correctAnswer": "B",
          "hint": "Penambahan konstanta tidak mengubah $s$. Perkalian mengalikan $s$: $3 \\times 4 = 12$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$s_{\\text{baru}} = 3 \\times 4 = 12$$ (Opsi B)."
        },
        {
          "id": "sma10-b7-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Grafik frekuensi kumulatif 'kurang dari' dinamakan...",
          "options": [
            {
              "key": "A",
              "text": "Ogive positif"
            },
            {
              "key": "B",
              "text": "Ogive negatif"
            },
            {
              "key": "C",
              "text": "Poligon frekuensi"
            },
            {
              "key": "D",
              "text": "Histogram"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kurva frekuensi kumulatif kurang dari selalu meningkat.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nKurva tersebut adalah **Ogive positif** (Opsi A)."
        },
        {
          "id": "sma10-b7-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sepuluh data terurut memiliki jangkauan 8. Jika data terbesar 15, maka data terkecil adalah...",
          "options": [
            {
              "key": "A",
              "text": "6"
            },
            {
              "key": "B",
              "text": "7"
            },
            {
              "key": "C",
              "text": "8"
            },
            {
              "key": "D",
              "text": "5"
            }
          ],
          "correctAnswer": "B",
          "hint": "$x_{\\min} = 15 - 8 = 7$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$x_{\\min} = 7$$ (Opsi B)."
        },
        {
          "id": "sma10-b7-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Kuartil atas ($Q_3$) data kelompok ($N = 80$) di kelas $71 - 80$ ($L = 70{,}5, f = 20, f_k = 50, c = 10$) bernilai...",
          "options": [
            {
              "key": "A",
              "text": "74,5"
            },
            {
              "key": "B",
              "text": "76,0"
            },
            {
              "key": "C",
              "text": "75,5"
            },
            {
              "key": "D",
              "text": "75,0"
            }
          ],
          "correctAnswer": "C",
          "hint": "Letak $Q_3 = 60$. $Q_3 = 70{,}5 + \\frac{60 - 50}{20} \\times 10 = 75{,}5$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$Q_3 = 70{,}5 + 5 = 75{,}5$$ (Opsi C)."
        },
        {
          "id": "sma10-b7-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Rata-rata ujian 70 dengan simpangan baku 8. Jika siswa mendapat nilai 86, skor baku ($z$-score) siswa tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "2,0"
            },
            {
              "key": "B",
              "text": "1,5"
            },
            {
              "key": "C",
              "text": "2,5"
            },
            {
              "key": "D",
              "text": "1,75"
            }
          ],
          "correctAnswer": "A",
          "hint": "$z = \\frac{86 - 70}{8} = 2{,}0$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$z = \\frac{16}{8} = 2{,}0$$ (Opsi A)."
        },
        {
          "id": "sma10-b7-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Nilai koefisien variasi $KV = 5\\%$ dan simpangan baku $3{,}5$. Rata-rata kelas tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "75"
            },
            {
              "key": "B",
              "text": "65"
            },
            {
              "key": "C",
              "text": "70"
            },
            {
              "key": "D",
              "text": "80"
            }
          ],
          "correctAnswer": "C",
          "hint": "$\\bar{x} = \\frac{3{,}5}{0{,}05} = 70$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\bar{x} = 70$$ (Opsi C)."
        },
        {
          "id": "sma10-b7-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Lima bilangan bulat positif terurut memiliki modus tunggal 4, median 6, rata-rata 7. Nilai maksimum datum terbesar adalah...",
          "options": [
            {
              "key": "A",
              "text": "15"
            },
            {
              "key": "B",
              "text": "13"
            },
            {
              "key": "C",
              "text": "14"
            },
            {
              "key": "D",
              "text": "16"
            }
          ],
          "correctAnswer": "C",
          "hint": "Data: $4, 4, 6, d, e$. Jumlah $= 35 \\implies d + e = 21$. Agar $e$ maksimal, $d = 7$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$e = 21 - 7 = 14$$ (Opsi C)."
        }
      ]
    },
    {
      "id": "sma10-bab8-peluang",
      "title": "Bab 8: Peluang",
      "track": "wajib",
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
              "text": "$\\frac{3}{5}$"
            },
            {
              "key": "B",
              "text": "$\\frac{1}{4}$"
            },
            {
              "key": "C",
              "text": "$\\frac{2}{5}$"
            },
            {
              "key": "D",
              "text": "$\\frac{1}{2}$"
            }
          ],
          "correctAnswer": "C",
          "hint": "Bagi jumlah kelereng merah (4) dengan total seluruh kelereng (10).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{4}{4 + 6} = \\frac{4}{10} = \\frac{2}{5}$$\nPeluangnya adalah **$\\frac{2}{5}$** (Opsi C)."
        },
        {
          "id": "sma10-b8-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dua keping koin logam dilempar bersamaan sebanyak 60 kali. Frekuensi harapan munculnya pasangan sisi Gambar dan Gambar (keduanya gambar) adalah...",
          "options": [
            {
              "key": "A",
              "text": "30 kali"
            },
            {
              "key": "B",
              "text": "15 kali"
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
          "correctAnswer": "B",
          "hint": "Ruang sampel 2 koin adalah $\\{(A,A), (A,G), (G,A), (G,G)\\}$ dengan $P(G,G) = \\frac{1}{4}$. Lalu kalikan dengan 60.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Peluang kedua sisi gambar: $P(GG) = \\frac{1}{4}$.\n2. Frekuensi harapan:\n$$F_h = 60 \\times \\frac{1}{4} = 15\\text{ kali}$$\nFrekuensi harapan adalah **15 kali** (Opsi B)."
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
        },
        {
          "id": "sma10-b8-5",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Banyak cara menyusun 3 huruf berbeda dari 7 huruf unik adalah...",
          "options": [
            {
              "key": "A",
              "text": "120"
            },
            {
              "key": "B",
              "text": "35"
            },
            {
              "key": "C",
              "text": "210"
            },
            {
              "key": "D",
              "text": "42"
            }
          ],
          "correctAnswer": "C",
          "hint": "Permutasi $P(7, 3) = 7 \\times 6 \\times 5 = 210$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$P(7, 3) = 210$$ (Opsi C)."
        },
        {
          "id": "sma10-b8-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Nilai kombinasi $C(8, 3)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "56"
            },
            {
              "key": "B",
              "text": "336"
            },
            {
              "key": "C",
              "text": "28"
            },
            {
              "key": "D",
              "text": "70"
            }
          ],
          "correctAnswer": "A",
          "hint": "$C(8, 3) = \\frac{8 \\times 7 \\times 6}{6} = 56$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$C(8, 3) = 56$$ (Opsi A)."
        },
        {
          "id": "sma10-b8-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dua dadu dilempar bersamaan. Peluang muncul jumlah mata dadu sama dengan 7 adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{5}{36}"
            },
            {
              "key": "B",
              "text": "\\frac{1}{6}"
            },
            {
              "key": "C",
              "text": "\\frac{7}{36}"
            },
            {
              "key": "D",
              "text": "\\frac{1}{12}"
            }
          ],
          "correctAnswer": "B",
          "hint": "Ada 6 pasangan berjumlah 7: $6 / 36 = 1/6$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$P = \\frac{6}{36} = \\frac{1}{6}$$ (Opsi B)."
        },
        {
          "id": "sma10-b8-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dari 52 kartu bridge, peluang terambil kartu As atau kartu merah adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{7}{13}"
            },
            {
              "key": "B",
              "text": "\\frac{1}{2}"
            },
            {
              "key": "C",
              "text": "\\frac{15}{26}"
            },
            {
              "key": "D",
              "text": "\\frac{6}{13}"
            }
          ],
          "correctAnswer": "A",
          "hint": "$P(A \\cup B) = \\frac{4 + 26 - 2}{52} = \\frac{28}{52} = \\frac{7}{13}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$P = \\frac{28}{52} = \\frac{7}{13}$$ (Opsi A)."
        },
        {
          "id": "sma10-b8-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Kantong berisi 5 bola merah dan 3 bola biru. Diambil 2 bola sekaligus. Peluang keduanya merah adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{5}{14}"
            },
            {
              "key": "B",
              "text": "\\frac{10}{28}"
            },
            {
              "key": "C",
              "text": "\\frac{15}{28}"
            },
            {
              "key": "D",
              "text": "\\frac{3}{14}"
            }
          ],
          "correctAnswer": "A",
          "hint": "$P = \\frac{C(5, 2)}{C(8, 2)} = \\frac{10}{28} = \\frac{5}{14}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$P = \\frac{10}{28} = \\frac{5}{14}$$ (Opsi A)."
        },
        {
          "id": "sma10-b8-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Koin dilempar undi 120 kali. Frekuensi harapan muncul sisi gambar adalah...",
          "options": [
            {
              "key": "A",
              "text": "40 kali"
            },
            {
              "key": "B",
              "text": "60 kali"
            },
            {
              "key": "C",
              "text": "80 kali"
            },
            {
              "key": "D",
              "text": "50 kali"
            }
          ],
          "correctAnswer": "B",
          "hint": "$F_h = 120 \\times \\frac{1}{2} = 60$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$F_h = 60\\text{ kali}$$ (Opsi B)."
        },
        {
          "id": "sma10-b8-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dari 10 calon pengurus akan dipilih Ketua, Sekretaris, Bendahara. Banyak susunan yang terbentuk adalah...",
          "options": [
            {
              "key": "A",
              "text": "120"
            },
            {
              "key": "B",
              "text": "360"
            },
            {
              "key": "C",
              "text": "720"
            },
            {
              "key": "D",
              "text": "240"
            }
          ],
          "correctAnswer": "C",
          "hint": "Permutasi posisi: $P(10, 3) = 10 \\times 9 \\times 8 = 720$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$P(10, 3) = 720$$ (Opsi C)."
        },
        {
          "id": "sma10-b8-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dalam pertemuan 8 orang, setiap orang saling berjabat tangan satu kali. Total jabat tangan adalah...",
          "options": [
            {
              "key": "A",
              "text": "56"
            },
            {
              "key": "B",
              "text": "24"
            },
            {
              "key": "C",
              "text": "32"
            },
            {
              "key": "D",
              "text": "28"
            }
          ],
          "correctAnswer": "D",
          "hint": "Kombinasi $C(8, 2) = \\frac{8 \\times 7}{2} = 28$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$C(8, 2) = 28$$ (Opsi D)."
        },
        {
          "id": "sma10-b8-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Peluang lulus matematika 0,85 dan fisika 0,70 (saling bebas). Peluang lulus matematika tapi tidak lulus fisika adalah...",
          "options": [
            {
              "key": "A",
              "text": "0,150"
            },
            {
              "key": "B",
              "text": "0,595"
            },
            {
              "key": "C",
              "text": "0,255"
            },
            {
              "key": "D",
              "text": "0,300"
            }
          ],
          "correctAnswer": "C",
          "hint": "$P = 0{,}85 \\times (1 - 0{,}70) = 0{,}255$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$P = 0{,}85 \\times 0{,}30 = 0{,}255$$ (Opsi C)."
        },
        {
          "id": "sma10-b8-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Kotak berisi 4 bola merah dan 6 bola putih. Diambil 2 bola berturut-turut tanpa pengembalian. Peluang merah lalu putih adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{6}{25}"
            },
            {
              "key": "B",
              "text": "\\frac{1}{3}"
            },
            {
              "key": "C",
              "text": "\\frac{2}{9}"
            },
            {
              "key": "D",
              "text": "\\frac{4}{15}"
            }
          ],
          "correctAnswer": "D",
          "hint": "$P = \\frac{4}{10} \\times \\frac{6}{9} = \\frac{4}{15}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$P = \\frac{4}{15}$$ (Opsi D)."
        },
        {
          "id": "sma10-b8-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Banyak bilangan ganjil 3 angka berbeda dari angka 1, 2, 3, 4, 5, 6 adalah...",
          "options": [
            {
              "key": "A",
              "text": "72"
            },
            {
              "key": "B",
              "text": "48"
            },
            {
              "key": "C",
              "text": "60"
            },
            {
              "key": "D",
              "text": "90"
            }
          ],
          "correctAnswer": "C",
          "hint": "Satuan (1, 3, 5) ada 3 cara. Ratusan 5 cara, puluhan 4 cara: $3 \\times 5 \\times 4 = 60$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$3 \\times 5 \\times 4 = 60$$ (Opsi C)."
        },
        {
          "id": "sma10-b8-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Tujuh orang duduk melingkar di mana 2 orang tertentu harus selalu berdampingan. Banyak susunan posisi duduk adalah...",
          "options": [
            {
              "key": "A",
              "text": "120"
            },
            {
              "key": "B",
              "text": "720"
            },
            {
              "key": "C",
              "text": "144"
            },
            {
              "key": "D",
              "text": "240"
            }
          ],
          "correctAnswer": "D",
          "hint": "Siklis 6 unsur: $(6 - 1)! \\times 2! = 120 \\times 2 = 240$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$5! \\times 2 = 240$$ (Opsi D)."
        },
        {
          "id": "sma10-b8-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Banyak kata yang dapat disusun dari huruf-huruf pada kata 'MATEMATIKA' adalah...",
          "options": [
            {
              "key": "A",
              "text": "75.600"
            },
            {
              "key": "B",
              "text": "151.200"
            },
            {
              "key": "C",
              "text": "302.400"
            },
            {
              "key": "D",
              "text": "50.400"
            }
          ],
          "correctAnswer": "B",
          "hint": "Permutasi unsur berulang: $\\frac{10!}{2! 3! 2!} = 151.200$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\frac{3.628.800}{24} = 151.200$$ (Opsi B)."
        },
        {
          "id": "sma10-b8-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Delegasi 4 orang dipilih dari 6 pria dan 4 wanita. Peluang terpilih sekurang-kurangnya 1 orang wanita adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{1}{14}"
            },
            {
              "key": "B",
              "text": "\\frac{13}{14}"
            },
            {
              "key": "C",
              "text": "\\frac{11}{14}"
            },
            {
              "key": "D",
              "text": "\\frac{5}{7}"
            }
          ],
          "correctAnswer": "B",
          "hint": "Komplemen: $1 - \\frac{C(6, 4)}{C(10, 4)} = 1 - \\frac{15}{210} = \\frac{13}{14}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$P = 1 - \\frac{1}{14} = \\frac{13}{14}$$ (Opsi B)."
        },
        {
          "id": "sma10-b8-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dari 4 pasang sepatu (8 sepatu) diambil 2 secara acak. Peluang terambil sepasang sepatu yang cocok adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{1}{8}"
            },
            {
              "key": "B",
              "text": "\\frac{1}{14}"
            },
            {
              "key": "C",
              "text": "\\frac{2}{7}"
            },
            {
              "key": "D",
              "text": "\\frac{1}{7}"
            }
          ],
          "correctAnswer": "D",
          "hint": "$P = \\frac{4}{C(8, 2)} = \\frac{4}{28} = \\frac{1}{7}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$P = \\frac{1}{7}$$ (Opsi D)."
        },
        {
          "id": "sma10-b8-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dua dadu dilempar bersamaan. Peluang muncul jumlah mata dadu lebih dari 9 atau kelipatan 4 adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{4}{9}"
            },
            {
              "key": "B",
              "text": "\\frac{5}{12}"
            },
            {
              "key": "C",
              "text": "\\frac{1}{2}"
            },
            {
              "key": "D",
              "text": "\\frac{7}{18}"
            }
          ],
          "correctAnswer": "D",
          "hint": "$n(> 9) = 6$, $n(\\text{kelipatan 4}) = 9$, irisan $= 1$. Total $(6 + 9 - 1) / 36 = 14 / 36 = 7 / 18$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$P = \\frac{14}{36} = \\frac{7}{18}$$ (Opsi D)."
        }
      ]
    }
  ]
};
