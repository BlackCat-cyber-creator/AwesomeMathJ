/**
 * Data Kurikulum Kelas 11 SMA (Fase F) — Kurikulum Merdeka
 * Matematika Wajib + Matematika Lanjut
 */

export const grade11Data = {
  "grade": 11,
  "level": "SMA",
  "phase": "Fase F",
  "description": "Kurikulum Merdeka: Matematika Wajib (Komposisi Fungsi, Limit, Turunan, Integral, Statistika, Peluang, Lingkaran) dan Matematika Lanjut (Trigonometri, Program Linear, Transformasi Geometri)",
  "chapters": [
    {
      "id": "sma11-bab1-fungsi-invers",
      "title": "Bab 1: Komposisi Fungsi dan Fungsi Invers",
      "track": "WAJIB",
      "trackLabel": "Matematika Utama (Wajib)",
      "summary": {
        "overview": "Dalam dunia industri dan manufaktur modern, pengolahan bahan mentah menjadi produk jadi tidak terjadi dalam satu tahapan tunggal, melainkan melalui serangkaian mesin berantai. Bahan kayu gelondongan pertama-tama dipotong menjadi lembaran papan oleh mesin pertama, lalu lembaran tersebut dihaluskan dan dirakit menjadi furnitur oleh mesin kedua. Jika setiap tahapan mesin dimodelkan sebagai fungsi matematis, maka penggabungan proses berurutan tersebut adalah esensi dari konsep Komposisi Fungsi, di mana luaran (output) dari mesin pertama langsung menjadi masukan (input) bagi mesin berikutnya.\n\nSebaliknya, dalam bidang keamanan data, teknologi perbankan, dan kriptografi, informasi rahasia diacak menggunakan fungsi enkripsi tertentu. Agar pesan asli dapat dibaca kembali oleh penerima yang berhak, sistem memerlukan suatu proses pembalikan yang tepat dan terukur. Proses pembalikan ini dimodelkan melalui konsep Fungsi Invers. Fungsi invers memungkinkan kita melacak kembali nilai asal dari suatu hasil perhitungan, seperti halnya mengonversi skala suhu Celsius ke Fahrenheit dan sebaliknya, atau menghitung kebutuhan bahan baku awal berdasarkan target produksi akhir.\n\nSecara matematis, tidak semua hubungan atau relasi dapat dibalikkan secara unik. Bab ini membekali siswa dengan pemahaman mendalam mengenai syarat formal suatu relasi untuk menjadi fungsi (domain, kodomain, range), operasi aljabar fungsi, aljabar komposisi $(f \\circ g)(x)$, serta kriteria ketat fungsi bijektif (satu-satu dan pada) agar suatu fungsi memiliki fungsi invers yang valid. Pemahaman ini merupakan fondasi vital bagi kalkulus lanjut dan rekayasa perangkat lunak.",
        "coreConcepts": [
          "Konsep dan Notasi Fungsi: Relasi khusus yang memasangkan setiap anggota himpunan daerah asal (domain $D_f$) dengan tepat satu anggota himpunan daerah kawan (kodomain $K_f$). Himpunan semua nilai luaran yang dihasilkan disebut daerah hasil (range $R_f$).",
          "Operasi Aljabar Fungsi: Dua fungsi atau lebih dapat dijumlahkan $(f + g)(x) = f(x) + g(x)$, dikurangkan $(f - g)(x) = f(x) - g(x)$, dikalikan $(f \\cdot g)(x) = f(x) \\cdot g(x)$, dan dibagi $(f/g)(x) = \\frac{f(x)}{g(x)}$ dengan syarat $g(x) \\neq 0$. Domain hasil operasi adalah irisan dari domain masing-masing fungsi.",
          "Komposisi Fungsi $(f \\circ g)(x)$: Penggabungan berurutan dua fungsi di mana $(f \\circ g)(x) = f(g(x))$. Syarat agar $(f \\circ g)(x)$ terdefinisi adalah irisan daerah hasil $g$ dengan daerah asal $f$ bukan himpunan kosong ($R_g \\cap D_f \\neq \\emptyset$). Sifat utama: umumnya TIDAK komutatif ($(f \\circ g)(x) \\neq (g \\circ f)(x)$), namun memenuhi sifat ASOSIATIF: $((f \\circ g) \\circ h)(x) = (f \\circ (g \\circ h))(x)$.",
          "Fungsi Invers ($f^{-1}$): Pemetaan yang mengembalikan elemen dari daerah hasil kembali ke daerah asal semula, yaitu $f(x) = y \\iff f^{-1}(y) = x$. Syarat mutlak keberadaan fungsi invers adalah fungsi $f$ harus bersifat BIJEKTIF (injektif sekaligus surjektif).",
          "Sifat Invers dan Komposisi:\n- Komposisi dengan invers menghasilkan fungsi identitas: $(f \\circ f^{-1})(x) = (f^{-1} \\circ f)(x) = x$.\n- Invers dari fungsi komposisi mengalami pembalikan urutan pengerjaan: $(f \\circ g)^{-1}(x) = (g^{-1} \\circ f^{-1})(x)$."
        ],
        "workedExamples": [
          {
            "title": "Komposisi Berantai pada Model Diskon Toko Ritel",
            "problem": "Sebuah toko pakaian memberikan promo ganda: diskon langsung 20% yang dinyatakan dengan fungsi $f(x) = 0{,}8x$, kemudian potongan kupon belanja sebesar Rp25.000 yang dinyatakan dengan fungsi $g(x) = x - 25.000$, dengan $x$ adalah harga label pakaian dalam rupiah. Tentukan rumus harga akhir jika diskon 20% diterapkan terlebih dahulu sebelum kupon belanja, dan hitung harga yang harus dibayar untuk baju seharga Rp150.000.",
            "solution": "Langkah 1: Menentukan urutan komposisi fungsi.\nKarena diskon 20% ($f$) diterapkan terlebih dahulu, maka $x$ masuk ke fungsi $f$, lalu hasilnya diproses oleh fungsi kupon $g$. Dengan demikian, model matematisnya adalah $(g \\circ f)(x)$.\n\nLangkah 2: Menjabarkan rumus komposisi $(g \\circ f)(x)$:\n$$(g \\circ f)(x) = g(f(x)) = g(0{,}8x) = 0{,}8x - 25.000$$\n\nLangkah 3: Menghitung untuk harga label $x = 150.000$:\n$$(g \\circ f)(150.000) = 0{,}8(150.000) - 25.000 = 120.000 - 25.000 = 95.000$$\nJadi, harga yang harus dibayar pembeli adalah **Rp95.000,00**."
          },
          {
            "title": "Menentukan Rumus Invers Fungsi Pecahan Linear Bersyarat",
            "problem": "Tentukan rumus fungsi invers dari $f(x) = \\frac{4x + 5}{2x - 3}$ untuk domain $x \\neq \\frac{3}{2}$, serta tentukan nilai dari $f^{-1}(3)$.",
            "solution": "Langkah 1: Nyatakan fungsi dalam persamaan $y = f(x)$:\n$$y = \\frac{4x + 5}{2x - 3}$$\n\nLangkah 2: Kalikan kedua ruas dengan penyebut $(2x - 3)$:\n$$y(2x - 3) = 4x + 5 \\implies 2xy - 3y = 4x + 5$$\n\nLangkah 3: Kumpulkan semua suku yang memuat variabel $x$ di ruas kiri dan suku lainnya di ruas kanan:\n$$2xy - 4x = 3y + 5$$\n$$x(2y - 4) = 3y + 5 \\implies x = \\frac{3y + 5}{2y - 4}$$\n\nLangkah 4: Ganti variabel $y$ dengan $x$ untuk mendapatkan $f^{-1}(x)$:\n$$f^{-1}(x) = \\frac{3x + 5}{2x - 4} \\quad \\text{dengan syarat } x \\neq 2$$\n\nLangkah 5: Evaluasi nilai $f^{-1}(3)$:\n$$f^{-1}(3) = \\frac{3(3) + 5}{2(3) - 4} = \\frac{9 + 5}{6 - 4} = \\frac{14}{2} = 7$$\nJadi, fungsi inversnya adalah **$f^{-1}(x) = \\frac{3x + 5}{2x - 4}$** dan nilai $f^{-1}(3) = 7$."
          }
        ],
        "keyFormulas": [
          {
            "label": "Komposisi Fungsi",
            "formula": "(f \\circ g)(x) = f(g(x))"
          },
          {
            "label": "Invers Pecahan Linear",
            "formula": "f(x) = \\frac{ax + b}{cx + d} \\implies f^{-1}(x) = \\frac{-dx + b}{cx - a} \\quad \\left(x \\neq \\frac{a}{c}\\right)"
          },
          {
            "label": "Invers Komposisi Berbalik",
            "formula": "(f \\circ g)^{-1}(x) = (g^{-1} \\circ f^{-1})(x)"
          },
          {
            "label": "Identitas Komposisi Invers",
            "formula": "(f \\circ f^{-1})(x) = (f^{-1} \\circ f)(x) = x"
          }
        ],
        "misconceptions": [
          "Menganggap komposisi fungsi sama dengan perkalian aljabar biasa: $(f \\circ g)(x) \\neq f(x) \\cdot g(x)$. Pada komposisi, nilai output $g(x)$ disubstitusikan ke dalam setiap variabel $x$ pada fungsi $f$.",
          "Keliru dalam urutan pembalikan fungsi komposisi: sering mengira $(f \\circ g)^{-1}(x) = f^{-1}(g^{-1}(x))$. Urutan yang benar harus dibalik, yaitu $(g^{-1} \\circ f^{-1})(x)$, sebagaimana analogi memakai kaus kaki lalu sepatu yang dilepas dengan urutan sepatu terlebih dahulu lalu kaus kaki."
        ],
        "tutorTip": "Trik cepat invers pecahan linear $f(x) = \\frac{ax + b}{cx + d}$: cukup tukar posisi angka $a$ dan $d$ pada diagonal utama, lalu ubah kedua tandanya (kalikan dengan $-1$). Angka $b$ dan $c$ posisinya tetap tidak berubah!"
      },
      "questions": [
        {
          "id": "sma11-b1-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Diketahui fungsi $f(x) = 2x - 3$ dan $g(x) = x^2 + 1$. Nilai dari komposisi $(f \\circ g)(2)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "5"
            },
            {
              "key": "B",
              "text": "2"
            },
            {
              "key": "C",
              "text": "7"
            },
            {
              "key": "D",
              "text": "9"
            }
          ],
          "correctAnswer": "C",
          "hint": "Hitung terlebih dahulu luaran fungsi dalam yaitu $g(2)$, lalu masukkan hasilnya sebagai masukan fungsi luar $f$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Hitung nilai fungsi dalam $g(2)$:\n$$g(2) = (2)^2 + 1 = 4 + 1 = 5$$\n2. Masukkan hasil tersebut ke dalam fungsi luar $f$:\n$$(f \\circ g)(2) = f(g(2)) = f(5) = 2(5) - 3 = 10 - 3 = 7$$\nJadi, nilai dari $(f \\circ g)(2)$ adalah **7** (Opsi C)."
        },
        {
          "id": "sma11-b1-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Jika $f(x) = 3x + 7$, maka rumus fungsi invers $f^{-1}(x)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\frac{x + 7}{3}$"
            },
            {
              "key": "B",
              "text": "$3x - 7$"
            },
            {
              "key": "C",
              "text": "$\\frac{7 - x}{3}$"
            },
            {
              "key": "D",
              "text": "$\\frac{x - 7}{3}$"
            }
          ],
          "correctAnswer": "D",
          "hint": "Misalkan $y = 3x + 7$, lalu nyatakan variabel $x$ secara eksplisit dalam bentuk $y$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Misalkan $y = f(x) = 3x + 7$\n2. Pindahkan konstanta 7 ke ruas kiri:\n$$y - 7 = 3x$$\n3. Bagi kedua ruas dengan 3:\n$$x = \\frac{y - 7}{3}$$\n4. Ubah variabel $y$ kembali menjadi $x$ untuk notasi invers:\n$$f^{-1}(x) = \\frac{x - 7}{3}$$\nJadi, invers fungsinya adalah **$\\frac{x - 7}{3}$** (Opsi D)."
        },
        {
          "id": "sma11-b1-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Invers dari fungsi pecahan linear $f(x) = \\frac{3x - 2}{5x + 4}$ dengan $x \\neq -\\frac{4}{5}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$f^{-1}(x) = \\frac{4x - 2}{5x + 3}$"
            },
            {
              "key": "B",
              "text": "$f^{-1}(x) = \\frac{-4x - 2}{5x - 3}$"
            },
            {
              "key": "C",
              "text": "$f^{-1}(x) = \\frac{5x + 4}{3x - 2}$"
            },
            {
              "key": "D",
              "text": "$f^{-1}(x) = \\frac{-3x - 2}{5x - 4}$"
            }
          ],
          "correctAnswer": "B",
          "hint": "Gunakan trik praktis: untuk $f(x) = \\frac{ax+b}{cx+d}$, fungsi inversnya adalah $f^{-1}(x) = \\frac{-dx+b}{cx-a}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Identifikasi koefisien pada $f(x) = \\frac{ax + b}{cx + d}$:\n$$a = 3, \\quad b = -2, \\quad c = 5, \\quad d = 4$$\n2. Terapkan rumus invers pecahan linear:\n$$f^{-1}(x) = \\frac{-dx + b}{cx - a}$$\n3. Masukkan nilai koefisien:\n$$f^{-1}(x) = \\frac{-(4)x + (-2)}{5x - 3} = \\frac{-4x - 2}{5x - 3}$$\nJadi, invers fungsinya adalah **$f^{-1}(x) = \\frac{-4x - 2}{5x - 3}$** (Opsi B)."
        },
        {
          "id": "sma11-b1-4",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Diketahui $f(x) = 2x + 1$ dan $(f \\circ g)(x) = 4x^2 - 6x + 5$. Rumus fungsi $g(x)$ yang memenuhi adalah...",
          "options": [
            {
              "key": "A",
              "text": "$2x^2 - 3x + 4$"
            },
            {
              "key": "B",
              "text": "$2x^2 - 3x + 2$"
            },
            {
              "key": "C",
              "text": "$4x^2 - 6x + 4$"
            },
            {
              "key": "D",
              "text": "$2x^2 + 3x + 2$"
            }
          ],
          "correctAnswer": "B",
          "hint": "Tuliskan definisi komposisi: $f(g(x)) = 2(g(x)) + 1$, lalu samakan dengan $4x^2 - 6x + 5$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Berdasarkan definisi fungsi komposisi:\n$$(f \\circ g)(x) = f(g(x)) = 2g(x) + 1$$\n2. Samakan dengan bentuk yang diketahui pada soal:\n$$2g(x) + 1 = 4x^2 - 6x + 5$$\n3. Kurangkan kedua ruas dengan 1:\n$$2g(x) = 4x^2 - 6x + 4$$\n4. Bagi kedua ruas dengan 2:\n$$g(x) = \\frac{4x^2 - 6x + 4}{2} = 2x^2 - 3x + 2$$\nJadi, rumus fungsi $g(x)$ adalah **$2x^2 - 3x + 2$** (Opsi B)."
        },
        {
          "id": "sma11-b1-5",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah pabrik kue memproduksi biskuit melalui dua mesin. Mesin I mengolah $x$ kg tepung terigu menjadi $m$ kg adonan dasar dengan fungsi $m = f(x) = 1{,}5x + 2$. Mesin II mencetak adonan dasar menjadi biskuit siap kemas dengan fungsi $g(m) = 2m - 1$. Jika pabrik berhasil memproduksi 39 kg biskuit siap kemas, berapa kilogram tepung terigu yang mula-mula dimasukkan ke Mesin I?",
          "options": [
            {
              "key": "A",
              "text": "12 kg"
            },
            {
              "key": "B",
              "text": "10 kg"
            },
            {
              "key": "C",
              "text": "14 kg"
            },
            {
              "key": "D",
              "text": "16 kg"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan invers dari fungsi komposisi atau cari nilai $m$ terlebih dahulu dari Mesin II, kemudian cari $x$ dari Mesin I.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Hubungan kedua mesin dimodelkan sebagai komposisi:\n$$Biskuit = (g \\circ f)(x) = g(f(x)) = g(1{,}5x + 2)$$\n2. Masukkan ke fungsi $g$:\n$$(g \\circ f)(x) = 2(1{,}5x + 2) - 1 = 3x + 4 - 1 = 3x + 3$$\n3. Diketahui hasil biskuit adalah 39 kg, sehingga:\n$$3x + 3 = 39$$\n$$3x = 39 - 3 = 36$$\n$$x = \\frac{36}{3} = 12\\text{ kg}$$\nJadi, tepung terigu mula-mula yang dimasukkan adalah **12 kg** (Opsi A)."
        },
        {
          "id": "sma11-b1-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Diketahui $f(x) = 2x + 5$ dan $g(x) = 3x - 1$. Rumus fungsi $(f \\circ g)(x)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "6x + 14"
            },
            {
              "key": "B",
              "text": "6x + 3"
            },
            {
              "key": "C",
              "text": "6x - 2"
            },
            {
              "key": "D",
              "text": "5x + 4"
            }
          ],
          "correctAnswer": "B",
          "hint": "Substitusikan $g(x)$ ke dalam $f(x)$: $(f \\circ g)(x) = f(g(x)) = 2(3x - 1) + 5$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$(f \\circ g)(x) = 2(3x - 1) + 5 = 6x - 2 + 5 = 6x + 3$$\nRumusnya adalah **$6x + 3$** (Opsi B)."
        },
        {
          "id": "sma11-b1-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Diketahui $f(x) = x^2 - 4$ dan $g(x) = x + 3$. Nilai dari $(g \\circ f)(2)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "3"
            },
            {
              "key": "B",
              "text": "0"
            },
            {
              "key": "C",
              "text": "7"
            },
            {
              "key": "D",
              "text": "-1"
            }
          ],
          "correctAnswer": "A",
          "hint": "Hitung $f(2) = 2^2 - 4 = 0$, kemudian hitung $g(0) = 0 + 3 = 3$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $f(2) = 2^2 - 4 = 0$\n2. $(g \\circ f)(2) = g(f(2)) = g(0) = 0 + 3 = 3$ (Opsi A)."
        },
        {
          "id": "sma11-b1-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Invers dari fungsi $f(x) = 3x - 7$ adalah $f^{-1}(x) = \\dots$",
          "options": [
            {
              "key": "A",
              "text": "\\frac{x - 7}{3}"
            },
            {
              "key": "B",
              "text": "3x + 7"
            },
            {
              "key": "C",
              "text": "\\frac{x + 7}{3}"
            },
            {
              "key": "D",
              "text": "\\frac{7 - x}{3}"
            }
          ],
          "correctAnswer": "C",
          "hint": "Misalkan $y = 3x - 7$, lalu nyatakan $x$ dalam bentuk $y$: $x = \\frac{y + 7}{3}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$y = 3x - 7 \\implies 3x = y + 7 \\implies x = \\frac{y + 7}{3}$$\nInversnya adalah **$f^{-1}(x) = \\frac{x + 7}{3}$** (Opsi C)."
        },
        {
          "id": "sma11-b1-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Invers dari fungsi rasional $f(x) = \\frac{2x + 1}{x - 3}$, untuk $x \\neq 3$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{3x - 1}{x + 2}, x \\neq -2"
            },
            {
              "key": "B",
              "text": "\\frac{2x - 1}{x + 3}, x \\neq -3"
            },
            {
              "key": "C",
              "text": "\\frac{-3x + 1}{x - 2}, x \\neq 2"
            },
            {
              "key": "D",
              "text": "\\frac{3x + 1}{x - 2}, x \\neq 2"
            }
          ],
          "correctAnswer": "D",
          "hint": "Rumus cepat invers $f(x) = \\frac{ax + b}{cx + d} \\implies f^{-1}(x) = \\frac{-dx + b}{cx - a}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nDengan $a = 2, b = 1, c = 1, d = -3$:\n$$f^{-1}(x) = \\frac{-(-3)x + 1}{1x - 2} = \\frac{3x + 1}{x - 2}, \\quad x \\neq 2$$ (Opsi D)."
        },
        {
          "id": "sma11-b1-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Diketahui $(f \\circ g)(x) = 4x + 6$ dan $f(x) = 2x - 4$. Rumus fungsi $g(x)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "2x + 1"
            },
            {
              "key": "B",
              "text": "2x - 5"
            },
            {
              "key": "C",
              "text": "4x + 10"
            },
            {
              "key": "D",
              "text": "2x + 5"
            }
          ],
          "correctAnswer": "D",
          "hint": "Gunakan $f(g(x)) = 2g(x) - 4 = 4x + 6 \\implies 2g(x) = 4x + 10$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$2g(x) - 4 = 4x + 6 \\implies 2g(x) = 4x + 10 \\implies g(x) = 2x + 5$$ (Opsi D)."
        },
        {
          "id": "sma11-b1-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Diketahui $(f \\circ g)(x) = 2x^2 - 6x + 1$ dan $g(x) = x - 2$. Nilai dari $f(1)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "-3"
            },
            {
              "key": "B",
              "text": "1"
            },
            {
              "key": "C",
              "text": "5"
            },
            {
              "key": "D",
              "text": "0"
            }
          ],
          "correctAnswer": "B",
          "hint": "Untuk mencari $f(1)$, cari $x$ sehingga $g(x) = 1 \\implies x - 2 = 1 \\implies x = 3$. Lalu hitung $(f \\circ g)(3)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $g(x) = 1 \\implies x = 3$\n2. $f(1) = (f \\circ g)(3) = 2(3^2) - 6(3) + 1 = 18 - 18 + 1 = 1$ (Opsi B)."
        },
        {
          "id": "sma11-b1-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah pabrik kertas memproses kayu melalui dua tahap. Tahap I menghasilkan bubur kertas $m = f(x) = 0{,}8x - 10$ (dalam ton). Tahap II menghasilkan kertas siap jual $g(m) = 0{,}6m - 5$. Jika tersedia 100 ton kayu, berapa ton kertas siap jual yang dihasilkan?",
          "options": [
            {
              "key": "A",
              "text": "35 ton"
            },
            {
              "key": "B",
              "text": "42 ton"
            },
            {
              "key": "C",
              "text": "39 ton"
            },
            {
              "key": "D",
              "text": "37 ton"
            }
          ],
          "correctAnswer": "D",
          "hint": "Hitung $m = f(100) = 0{,}8(100) - 10 = 70$ ton. Lalu $g(70) = 0{,}6(70) - 5 = 42 - 5 = 37$ ton.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $m = 0{,}8(100) - 10 = 70\\text{ ton}$\n2. $g(70) = 0{,}6(70) - 5 = 37\\text{ ton}$ (Opsi D)."
        },
        {
          "id": "sma11-b1-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jika $f(x) = \\frac{x}{x + 1}$ untuk $x \\neq -1$, maka nilai dari $f^{-1}\\left(\\frac{1}{2}\\right)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "2"
            },
            {
              "key": "B",
              "text": "\\frac{1}{3}"
            },
            {
              "key": "C",
              "text": "1"
            },
            {
              "key": "D",
              "text": "-1"
            }
          ],
          "correctAnswer": "C",
          "hint": "Misalkan $f(x) = \\frac{1}{2} \\implies \\frac{x}{x + 1} = \\frac{1}{2} \\implies 2x = x + 1 \\implies x = 1$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{x}{x + 1} = \\frac{1}{2} \\implies 2x = x + 1 \\implies x = 1$$\nNilainya adalah **1** (Opsi C)."
        },
        {
          "id": "sma11-b1-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Diketahui $f(x) = 3x - 2$ dan $g(x) = x + 4$. Rumus fungsi $(f \\circ g)^{-1}(x)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{x + 10}{3}"
            },
            {
              "key": "B",
              "text": "\\frac{x + 2}{3}"
            },
            {
              "key": "C",
              "text": "\\frac{x - 2}{3}"
            },
            {
              "key": "D",
              "text": "\\frac{x - 10}{3}"
            }
          ],
          "correctAnswer": "D",
          "hint": "Tentukan $(f \\circ g)(x) = 3(x + 4) - 2 = 3x + 10$. Inversnya adalah $\\frac{x - 10}{3}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $(f \\circ g)(x) = 3x + 12 - 2 = 3x + 10$\n2. Invers: $y = 3x + 10 \\implies x = \\frac{y - 10}{3}$ (Opsi D)."
        },
        {
          "id": "sma11-b1-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jika $f(x) = 2x + 1$ dan $(f \\circ g)(x) = 2x^2 + 4x + 1$, maka rumus $g(x)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "x² + 4x"
            },
            {
              "key": "B",
              "text": "2x² + 4x"
            },
            {
              "key": "C",
              "text": "x² + 2x"
            },
            {
              "key": "D",
              "text": "x² - 2x"
            }
          ],
          "correctAnswer": "C",
          "hint": "$2g(x) + 1 = 2x^2 + 4x + 1 \\implies 2g(x) = 2x^2 + 4x \\implies g(x) = x^2 + 2x$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$2g(x) + 1 = 2x^2 + 4x + 1 \\implies g(x) = x^2 + 2x$$ (Opsi C)."
        },
        {
          "id": "sma11-b1-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Diketahui fungsi $f(x) = \\frac{ax + 1}{2x - 3}$. Jika $f^{-1}(1) = 2$, maka nilai dari konstanta $a$ adalah...",
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
              "text": "2"
            },
            {
              "key": "D",
              "text": "-1"
            }
          ],
          "correctAnswer": "A",
          "hint": "Sifat invers: $f^{-1}(1) = 2 \\iff f(2) = 1$. Hitung $f(2) = \\frac{2a + 1}{2(2) - 3} = \\frac{2a + 1}{1} = 1 \\implies 2a = 0 \\implies a = 0$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$f(2) = 1 \\implies \\frac{2a + 1}{4 - 3} = 1 \\implies 2a + 1 = 1 \\implies a = 0$$ (Opsi A)."
        },
        {
          "id": "sma11-b1-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Jika $f(x) = \\frac{x}{x - 1}$ untuk $x \\neq 1$, maka nilai dari $(f \\circ f \\circ f)(x)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "x"
            },
            {
              "key": "B",
              "text": "\\frac{x}{x - 1}"
            },
            {
              "key": "C",
              "text": "\\frac{1}{x}"
            },
            {
              "key": "D",
              "text": "x - 1"
            }
          ],
          "correctAnswer": "B",
          "hint": "$(f \\circ f)(x) = \\frac{\\frac{x}{x-1}}{\\frac{x}{x-1} - 1} = \\frac{x}{x - (x - 1)} = x$. Maka $(f \\circ f \\circ f)(x) = f(x) = \\frac{x}{x - 1}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $(f \\circ f)(x) = x$ (fungsi identitas)\n2. $(f \\circ f \\circ f)(x) = f(x) = \\frac{x}{x - 1}$ (Opsi B)."
        },
        {
          "id": "sma11-b1-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Suatu fungsi memenuhi $f(2x + 1) = \\frac{4x + 3}{2x - 1}$. Rumus $f(x)$ untuk $x \\neq 2$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{2x - 1}{x - 2}"
            },
            {
              "key": "B",
              "text": "\\frac{x + 2}{x - 1}"
            },
            {
              "key": "C",
              "text": "\\frac{2x + 1}{x - 2}"
            },
            {
              "key": "D",
              "text": "\\frac{4x - 1}{2x - 3}"
            }
          ],
          "correctAnswer": "C",
          "hint": "Misalkan $u = 2x + 1 \\implies 2x = u - 1$. Substitusikan ke pembilang $2(u - 1) + 3 = 2u + 1$ dan penyebut $(u - 1) - 1 = u - 2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$f(u) = \\frac{2(u - 1) + 3}{(u - 1) - 1} = \\frac{2u + 1}{u - 2} \\implies f(x) = \\frac{2x + 1}{x - 2}$$ (Opsi C)."
        },
        {
          "id": "sma11-b1-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Fungsi $f: \\mathbb{R} \\to \\mathbb{R}$ didefinisikan oleh $f(x) = x^2 - 4x + 7$ dengan domain $x \\ge 2$. Rumus invers $f^{-1}(x)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "2 + \\sqrt{x - 3}"
            },
            {
              "key": "B",
              "text": "2 - \\sqrt{x - 3}"
            },
            {
              "key": "C",
              "text": "-2 + \\sqrt{x + 3}"
            },
            {
              "key": "D",
              "text": "4 + \\sqrt{x - 7}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Ubah ke kuadrat sempurna: $y = (x - 2)^2 + 3 \\implies (x - 2)^2 = y - 3 \\implies x - 2 = +\\sqrt{y - 3}$ (karena $x \\ge 2$).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$(x - 2)^2 = y - 3 \\implies x = 2 + \\sqrt{y - 3} \\implies f^{-1}(x) = 2 + \\sqrt{x - 3}$$ (Opsi A)."
        },
        {
          "id": "sma11-b1-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Diberikan $f(x) = 2x - 3$ dan $g(x) = 3x + k$. Jika $(f \\circ g)(x) = (g \\circ f)(x)$ berlaku untuk setiap $x \\in \\mathbb{R}$, maka nilai dari konstanta $k$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "-6"
            },
            {
              "key": "B",
              "text": "6"
            },
            {
              "key": "C",
              "text": "-3"
            },
            {
              "key": "D",
              "text": "3"
            }
          ],
          "correctAnswer": "A",
          "hint": "$(f \\circ g)(x) = 2(3x + k) - 3 = 6x + 2k - 3$. $(g \\circ f)(x) = 3(2x - 3) + k = 6x - 9 + k$. Samakan konstanta: $2k - 3 = k - 9 \\implies k = -6$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$2k - 3 = k - 9 \\implies 2k - k = -9 + 3 \\implies k = -6$$ (Opsi A)."
        }
      ]
    },
    {
      "id": "sma11-bab2-lingkaran",
      "title": "Bab 2: Lingkaran",
      "track": "WAJIB",
      "trackLabel": "Matematika Utama (Wajib)",
      "summary": {
        "overview": "Bentuk lingkaran adalah wujud geometris paling simetris dan efisien di alam semesta. Mulai dari perancangan roda pedati kuno, roda gigi presisi pada transmisi mesin industri modern, optika lensa kacamata dan teleskop, hingga jangkauan sapuan radar pemantau cuaca dan mercusuar di pelabuhan laut, sifat-sifat lingkaran memegang peranan krusial dalam rekayasa teknologi manusia.\n\nDalam kurikulum matematika tingkat menengah atas, kajian lingkaran diperluas melampaui perhitungan keliling dan luas dasar. Matematikawan mengembangkan analisis hubungan sudut dan garis yang terbentuk oleh tali busur dan garis singgung. Mengapa sudut yang dibentuk oleh dua tali busur yang bertumpu pada diameter selalu tepat siku-siku ($90^\\circ$)? Mengapa sudut pusat lingkaran selalu berukuran dua kali lipat sudut keliling yang menghadap busur yang sama? Pertanyaan-pertanyaan geometris fundamental ini membimbing siswa membangun penalaran deduktif yang kokoh.\n\nBab ini mengulas tuntas empat topik inti: (1) Hubungan sudut pusat dan sudut keliling yang menghadap busur lingkaran yang sama; (2) Karakteristik dan teorema segiempat tali busur yang sudut-sudut berhadapannya selalu berjumlah $180^\\circ$; (3) Sifat ketegaklurusan garis singgung terhadap jari-jari pada titik singgung; serta (4) Konstruksi dan formula analitis panjang garis singgung persekutuan luar dan garis singgung persekutuan dalam antara dua lingkaran yang saling terpisah.",
        "coreConcepts": [
          "Sudut Pusat dan Sudut Keliling: Sudut pusat adalah sudut yang titik sudutnya terletak pada titik pusat lingkaran, sedangkan sudut keliling titik sudutnya berada pada busur keliling lingkaran. Teorema utama: jika keduanya menghadap busur yang sama, maka $\\angle \\text{pusat} = 2 \\times \\angle \\text{keliling}$. Sebagai akibat wajar, semua sudut keliling yang menghadap busur yang sama besarnya sama, dan sudut keliling yang menghadap diameter selalu siku-siku ($90^\\circ$).",
          "Teorema Segiempat Tali Busur (Cyclic Quadrilateral): Segiempat yang keempat titik sudutnya terletak tepat pada keliling lingkaran. Sifat istimewa: jumlah pasangan sudut yang saling berhadapan selalu sama dengan dua sudut siku-siku atau $180^\\circ$, yaitu $\\angle A + \\angle C = 180^\\circ$ dan $\\angle B + \\angle D = 180^\\circ$.",
          "Garis Singgung Lingkaran: Garis lurus yang memotong lingkaran tepat pada satu titik (titik singgung). Teorema garis singgung menyatakan bahwa garis singgung selalu TEGAK LURUS ($90^\\circ$) terhadap jari-jari lingkaran yang ditarik melalui titik singgung tersebut.",
          "Garis Singgung Persekutuan Dua Lingkaran:\n- Garis Singgung Persekutuan Luar (GSPL): Kedua lingkaran berada di sisi yang sama terhadap garis singgung. Panjangnya: $d_L = \\sqrt{p^2 - (R - r)^2}$, dengan $p$ adalah jarak antara kedua pusat lingkaran, $R$ jari-jari lingkaran besar, dan $r$ jari-jari lingkaran kecil.\n- Garis Singgung Persekutuan Dalam (GSPD): Garis singgung memotong garis hubung kedua pusat lingkaran. Panjangnya: $d_D = \\sqrt{p^2 - (R + r)^2}$."
        ],
        "workedExamples": [
          {
            "title": "Perhitungan Sudut pada Segiempat Tali Busur",
            "problem": "Pada lingkaran berpusat di $O$, titik $A$, $B$, $C$, dan $D$ terletak pada keliling lingkaran membentuk segiempat tali busur $ABCD$. Jika besar $\\angle BAD = (2x + 10)^\\circ$ dan besar sudut yang berhadapan $\\angle BCD = (3x + 20)^\\circ$, tentukan nilai $x$ dan besar sebenarnya dari $\\angle BAD$.",
            "solution": "Langkah 1: Menggunakan sifat segiempat tali busur.\nJumlah dua sudut yang saling berhadapan pada segiempat tali busur adalah $180^\\circ$:\n$$\\angle BAD + \\angle BCD = 180^\\circ$$\n\nLangkah 2: Membentuk persamaan aljabar:\n$$(2x + 10) + (3x + 20) = 180$$\n$$5x + 30 = 180$$\n$$5x = 180 - 30 = 150$$\n$$x = \\frac{150}{5} = 30$$\n\nLangkah 3: Menghitung besar $\\angle BAD$:\n$$\\angle BAD = 2(30) + 10 = 60 + 10 = 70^\\circ$$\nJadi, nilai $x$ adalah **30** dan besar $\\angle BAD = 70^\\circ$."
          },
          {
            "title": "Menghitung Panjang Garis Singgung Persekutuan Luar",
            "problem": "Dua buah roda katrol masing-masing memiliki jari-jari $R = 14\\text{ cm}$ dan $r = 6\\text{ cm}$. Jarak antara kedua sumbu poros pusat roda adalah $17\\text{ cm}$. Berapakah panjang garis singgung persekutuan luar yang menghubungkan kedua roda tersebut?",
            "solution": "Langkah 1: Identifikasi besaran yang diketahui:\n- Jari-jari lingkaran besar: $R = 14\\text{ cm}$\n- Jari-jari lingkaran kecil: $r = 6\\text{ cm}$\n- Selisih jari-jari: $R - r = 14 - 6 = 8\\text{ cm}$\n- Jarak antar pusat: $p = 17\\text{ cm}$\n\nLangkah 2: Terapkan rumus garis singgung persekutuan luar (GSPL):\n$$d_L = \\sqrt{p^2 - (R - r)^2}$$\n\nLangkah 3: Lakukan perhitungan numerik:\n$$d_L = \\sqrt{17^2 - 8^2} = \\sqrt{289 - 64} = \\sqrt{225} = 15\\text{ cm}$$\nJadi, panjang garis singgung persekutuan luar kedua roda katrol tersebut adalah **15 cm**."
          }
        ],
        "keyFormulas": [
          {
            "label": "Teorema Sudut Pusat & Keliling",
            "formula": "\\angle \\text{Pusat} = 2 \\times \\angle \\text{Keliling} \\quad (\\text{menghadap busur yang sama})"
          },
          {
            "label": "Segiempat Tali Busur",
            "formula": "\\angle A + \\angle C = 180^\\circ \\quad \\text{dan} \\quad \\angle B + \\angle D = 180^\\circ"
          },
          {
            "label": "Garis Singgung Persekutuan Luar",
            "formula": "d_L = \\sqrt{p^2 - (R - r)^2} \\quad (p > R - r)"
          },
          {
            "label": "Garis Singgung Persekutuan Dalam",
            "formula": "d_D = \\sqrt{p^2 - (R + r)^2} \\quad (p > R + r)"
          }
        ],
        "misconceptions": [
          "Menerapkan hubungan $\\angle \\text{pusat} = 2 \\times \\angle \\text{keliling}$ secara keliru pada sudut yang menghadap busur berbeda. Teorema ini HANYA berlaku mutlak jika kedua kaki sudut bertumpu pada busur yang sama persis.",
          "Tertukar rumus operasi jari-jari pada garis singgung persekutuan: pada garis singgung LUAR jari-jari dikurangkan $(R - r)$, sedangkan pada garis singgung DALAM jari-jari dijumlahkan $(R + r)$."
        ],
        "tutorTip": "Jembatan memori mudah: 'Luar Selisih (Lurus sejajar), Dalam Jumlah (Menyilang tajam)'. Karena garis singgung dalam memotong bidang di antara kedua lingkaran, bentangannya memerlukan pengurangan kuadrat yang lebih besar $(R+r)^2$, sehingga panjang garis singgung dalam selalu lebih pendek daripada garis singgung luar untuk dua lingkaran yang sama."
      },
      "questions": [
        {
          "id": "sma11-b2-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Sebuah sudut pusat $\\angle AOB$ pada lingkaran berukuran $84^\\circ$. Jika sudut keliling $\\angle ACB$ menghadap busur $AB$ yang sama, maka besar sudut keliling tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "$168^\\circ$"
            },
            {
              "key": "B",
              "text": "$84^\\circ$"
            },
            {
              "key": "C",
              "text": "$96^\\circ$"
            },
            {
              "key": "D",
              "text": "$42^\\circ$"
            }
          ],
          "correctAnswer": "D",
          "hint": "Sudut keliling sama dengan setengah dari sudut pusat jika keduanya menghadap busur yang sama.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Teorema hubungan sudut:\n$$\\angle \\text{keliling} = \\frac{1}{2} \\times \\angle \\text{pusat}$$\n2. Substitusikan nilai sudut pusat yang diketahui:\n$$\\angle ACB = \\frac{1}{2} \\times 84^\\circ = 42^\\circ$$\nJadi, besar sudut keliling $\\angle ACB$ adalah **$42^\\circ$** (Opsi D)."
        },
        {
          "id": "sma11-b2-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Pada lingkaran dengan titik pusat $O$, ruas garis $AB$ merupakan diameter lingkaran. Titik $C$ terletak pada busur keliling lingkaran. Besar sudut $\\angle ACB$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$90^\\circ$"
            },
            {
              "key": "B",
              "text": "$60^\\circ$"
            },
            {
              "key": "C",
              "text": "$180^\\circ$"
            },
            {
              "key": "D",
              "text": "$45^\\circ$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Diameter lingkaran membentuk sudut lurus pusat sebesar $180^\\circ$. Berapa setengah dari $180^\\circ$?",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Sudut pusat yang dibentuk oleh diameter $AB$ adalah sudut lurus berukuran $180^\\circ$.\n2. Sudut keliling $\\angle ACB$ menghadap diameter tersebut:\n$$\\angle ACB = \\frac{1}{2} \\times 180^\\circ = 90^\\circ$$\nSudut keliling yang menghadap diameter selalu siku-siku yaitu **$90^\\circ$** (Opsi A)."
        },
        {
          "id": "sma11-b2-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Pada segiempat tali busur $KLMN$, diketahui besar $\\angle K = 78^\\circ$ dan besar $\\angle L = 105^\\circ$. Besar sudut $\\angle M$ dan $\\angle N$ berturut-turut adalah...",
          "options": [
            {
              "key": "A",
              "text": "$75^\\circ$ dan $102^\\circ$"
            },
            {
              "key": "B",
              "text": "$102^\\circ$ dan $75^\\circ$"
            },
            {
              "key": "C",
              "text": "$112^\\circ$ dan $65^\\circ$"
            },
            {
              "key": "D",
              "text": "$92^\\circ$ dan $85^\\circ$"
            }
          ],
          "correctAnswer": "B",
          "hint": "Pada segiempat tali busur, $\\angle K$ berhadapan dengan $\\angle M$ (jumlah $180^\\circ$) dan $\\angle L$ berhadapan dengan $\\angle N$ (jumlah $180^\\circ$).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Sudut $\\angle K$ berhadapan dengan $\\angle M$:\n$$\\angle K + \\angle M = 180^\\circ \\implies \\angle M = 180^\\circ - 78^\\circ = 102^\\circ$$\n2. Sudut $\\angle L$ berhadapan dengan $\\angle N$:\n$$\\angle L + \\angle N = 180^\\circ \\implies \\angle N = 180^\\circ - 105^\\circ = 75^\\circ$$\nJadi, besar sudut $\\angle M$ dan $\\angle N$ berturut-turut adalah **$102^\\circ$ dan $75^\\circ$** (Opsi B)."
        },
        {
          "id": "sma11-b2-4",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dua lingkaran memiliki jari-jari masing-masing $9\\text{ cm}$ dan $4\\text{ cm}$. Jika jarak antara pusat kedua lingkaran tersebut adalah $13\\text{ cm}$, maka panjang garis singgung persekutuan luar kedua lingkaran adalah...",
          "options": [
            {
              "key": "A",
              "text": "$12\\text{ cm}$"
            },
            {
              "key": "B",
              "text": "$10\\text{ cm}$"
            },
            {
              "key": "C",
              "text": "$\\sqrt{144}\\text{ cm}$"
            },
            {
              "key": "D",
              "text": "$14\\text{ cm}$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan rumus GSPL: $d_L = \\sqrt{p^2 - (R - r)^2}$. Di sini $p = 13$ dan $(R - r) = 9 - 4 = 5$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Identifikasi parameter: $R = 9\\text{ cm}$, $r = 4\\text{ cm}$, $p = 13\\text{ cm}$.\n2. Hitung selisih jari-jari: $R - r = 9 - 4 = 5\\text{ cm}$.\n3. Gunakan rumus GSPL:\n$$d_L = \\sqrt{p^2 - (R - r)^2} = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12\\text{ cm}$$\nJadi, panjang garis singgung persekutuan luar adalah **$12\\text{ cm}$** (Opsi A)."
        },
        {
          "id": "sma11-b2-5",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dua buah pipa air silindris berpusat di $P$ dan $Q$ memiliki jari-jari masing-masing $7\\text{ cm}$ dan $3\\text{ cm}$. Jarak antara kedua pusat pipa $PQ = 26\\text{ cm}$. Panjang garis singgung persekutuan dalam yang menyilang di antara kedua pipa adalah...",
          "options": [
            {
              "key": "A",
              "text": "$20\\text{ cm}$"
            },
            {
              "key": "B",
              "text": "$25\\text{ cm}$"
            },
            {
              "key": "C",
              "text": "$24\\text{ cm}$"
            },
            {
              "key": "D",
              "text": "$18\\text{ cm}$"
            }
          ],
          "correctAnswer": "C",
          "hint": "Garis singgung dalam menjumlahkan jari-jari: $(R + r) = 7 + 3 = 10$. Lalu hitung $\\sqrt{26^2 - 10^2}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Identifikasi parameter: $R = 7\\text{ cm}$, $r = 3\\text{ cm}$, $p = 26\\text{ cm}$.\n2. Hitung jumlah jari-jari: $R + r = 7 + 3 = 10\\text{ cm}$.\n3. Gunakan rumus GSPD:\n$$d_D = \\sqrt{p^2 - (R + r)^2} = \\sqrt{26^2 - 10^2} = \\sqrt{676 - 100} = \\sqrt{576} = 24\\text{ cm}$$\nJadi, panjang garis singgung persekutuan dalam adalah **$24\\text{ cm}$** (Opsi C)."
        },
        {
          "id": "sma11-b2-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Besar sudut keliling yang menghadap busur yang sama dengan sudut pusat $80^\\circ$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "160°"
            },
            {
              "key": "B",
              "text": "40°"
            },
            {
              "key": "C",
              "text": "80°"
            },
            {
              "key": "D",
              "text": "20°"
            }
          ],
          "correctAnswer": "B",
          "hint": "Besar sudut keliling sama dengan setengah dari besar sudut pusat: $\\frac{1}{2} \\times 80^\\circ = 40^\\circ$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\angle \\text{keliling} = \\frac{1}{2} \\times \\angle \\text{pusat} = \\frac{1}{2} \\times 80^\\circ = 40^\\circ$$ (Opsi B)."
        },
        {
          "id": "sma11-b2-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Besar sudut keliling yang menghadap diameter lingkaran selalu sama dengan...",
          "options": [
            {
              "key": "A",
              "text": "180°"
            },
            {
              "key": "B",
              "text": "60°"
            },
            {
              "key": "C",
              "text": "45°"
            },
            {
              "key": "D",
              "text": "90°"
            }
          ],
          "correctAnswer": "D",
          "hint": "Diameter membentuk sudut pusat $180^\\circ$, sehingga sudut kelilingnya adalah $\\frac{1}{2} \\times 180^\\circ = 90^\\circ$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nSudut keliling menghadap diameter selalu **$90^\\circ$ (siku-siku)** (Opsi D)."
        },
        {
          "id": "sma11-b2-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Pada segiempat tali busur $ABCD$, besar $\\angle A = 75^\\circ$. Besar sudut yang berhadapan yaitu $\\angle C$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "75°"
            },
            {
              "key": "B",
              "text": "115°"
            },
            {
              "key": "C",
              "text": "105°"
            },
            {
              "key": "D",
              "text": "125°"
            }
          ],
          "correctAnswer": "C",
          "hint": "Jumlah dua sudut yang saling berhadapan pada segiempat tali busur selalu $180^\\circ$: $\\angle C = 180^\\circ - 75^\\circ = 105^\\circ$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\angle A + \\angle C = 180^\\circ \\implies \\angle C = 180^\\circ - 75^\\circ = 105^\\circ$$ (Opsi C)."
        },
        {
          "id": "sma11-b2-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dua lingkaran memiliki jari-jari masing-masing 9 cm dan 4 cm. Jika jarak kedua pusat lingkaran adalah 13 cm, panjang garis singgung persekutuan luar (GSPL) adalah...",
          "options": [
            {
              "key": "A",
              "text": "12 cm"
            },
            {
              "key": "B",
              "text": "10 cm"
            },
            {
              "key": "C",
              "text": "8 cm"
            },
            {
              "key": "D",
              "text": "11 cm"
            }
          ],
          "correctAnswer": "A",
          "hint": "Rumus GSPL: $d = \\sqrt{p^2 - (R - r)^2} = \\sqrt{13^2 - (9 - 4)^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$ cm.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$d = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12\\text{ cm}$$ (Opsi A)."
        },
        {
          "id": "sma11-b2-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dua lingkaran dengan jari-jari 5 cm dan 3 cm berjarak pusat 10 cm. Panjang garis singgung persekutuan dalam (GSPD) adalah...",
          "options": [
            {
              "key": "A",
              "text": "6 cm"
            },
            {
              "key": "B",
              "text": "8 cm"
            },
            {
              "key": "C",
              "text": "7 cm"
            },
            {
              "key": "D",
              "text": "9 cm"
            }
          ],
          "correctAnswer": "A",
          "hint": "Rumus GSPD: $d = \\sqrt{p^2 - (R + r)^2} = \\sqrt{10^2 - (5 + 3)^2} = \\sqrt{100 - 64} = \\sqrt{36} = 6$ cm.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$d = \\sqrt{10^2 - 8^2} = \\sqrt{100 - 64} = \\sqrt{36} = 6\\text{ cm}$$ (Opsi A)."
        },
        {
          "id": "sma11-b2-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah juring lingkaran dengan jari-jari 14 cm memiliki sudut pusat $90^\\circ$. Luas juring tersebut dengan $\\pi = \\frac{22}{7}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "308 cm²"
            },
            {
              "key": "B",
              "text": "77 cm²"
            },
            {
              "key": "C",
              "text": "154 cm²"
            },
            {
              "key": "D",
              "text": "616 cm²"
            }
          ],
          "correctAnswer": "C",
          "hint": "Luas juring $= \\frac{\\theta}{360^\\circ} \\times \\pi r^2 = \\frac{90}{360} \\times \\frac{22}{7} \\times 196 = \\frac{1}{4} \\times 616 = 154$ cm².",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$L_j = \\frac{1}{4} \\times 616 = 154\\text{ cm}^2$$ (Opsi C)."
        },
        {
          "id": "sma11-b2-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Panjang busur lingkaran yang memiliki sudut pusat $60^\\circ$ dan jari-jari 21 cm dengan $\\pi = \\frac{22}{7}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "44 cm"
            },
            {
              "key": "B",
              "text": "11 cm"
            },
            {
              "key": "C",
              "text": "33 cm"
            },
            {
              "key": "D",
              "text": "22 cm"
            }
          ],
          "correctAnswer": "D",
          "hint": "Panjang busur $= \\frac{60}{360} \\times 2\\pi r = \\frac{1}{6} \\times 2 \\times \\frac{22}{7} \\times 21 = \\frac{1}{6} \\times 132 = 22$ cm.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$s = \\frac{1}{6} \\times 132 = 22\\text{ cm}$$ (Opsi D)."
        },
        {
          "id": "sma11-b2-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Luas tembereng lingkaran dengan sudut pusat $90^\\circ$ dan jari-jari 10 cm dengan $\\pi = 3{,}14$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "50 cm²"
            },
            {
              "key": "B",
              "text": "28,5 cm²"
            },
            {
              "key": "C",
              "text": "78,5 cm²"
            },
            {
              "key": "D",
              "text": "25 cm²"
            }
          ],
          "correctAnswer": "B",
          "hint": "Luas juring $= \\frac{1}{4} \\times 3{,}14 \\times 100 = 78{,}5$ cm². Luas segitiga $= \\frac{1}{2} \\times 10 \\times 10 = 50$ cm². Luas tembereng $= 78{,}5 - 50 = 28{,}5$ cm².",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$L_{\\text{tembereng}} = 78{,}5 - 50 = 28{,}5\\text{ cm}^2$$ (Opsi B)."
        },
        {
          "id": "sma11-b2-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Pada lingkaran dengan pusat $O$, titik $A, B, C$ terletak pada lingkaran. Jika $\\angle AOB = 110^\\circ$ dan $\\angle BOC = 130^\\circ$, maka besar sudut keliling $\\angle ABC$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "120°"
            },
            {
              "key": "B",
              "text": "55°"
            },
            {
              "key": "C",
              "text": "65°"
            },
            {
              "key": "D",
              "text": "60°"
            }
          ],
          "correctAnswer": "D",
          "hint": "Sudut pusat $\\angle AOC = 360^\\circ - (110^\\circ + 130^\\circ) = 360^\\circ - 240^\\circ = 120^\\circ$. Sudut keliling $= \\frac{1}{2} \\times 120^\\circ = 60^\\circ$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\angle AOC = 120^\\circ \\implies \\angle ABC = \\frac{1}{2} \\times 120^\\circ = 60^\\circ$$ (Opsi D)."
        },
        {
          "id": "sma11-b2-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dua roda gerigi dihubungkan oleh rantai luar. Jari-jari kedua roda adalah 15 cm dan 3 cm, serta jarak antara kedua pusat roda adalah 20 cm. Panjang rantai lurus bebas (garis singgung persekutuan luar) adalah...",
          "options": [
            {
              "key": "A",
              "text": "16 cm"
            },
            {
              "key": "B",
              "text": "15 cm"
            },
            {
              "key": "C",
              "text": "18 cm"
            },
            {
              "key": "D",
              "text": "14 cm"
            }
          ],
          "correctAnswer": "A",
          "hint": "GSPL $= \\sqrt{20^2 - (15 - 3)^2} = \\sqrt{400 - 144} = \\sqrt{256} = 16$ cm.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$d = \\sqrt{20^2 - 12^2} = \\sqrt{256} = 16\\text{ cm}$$ (Opsi A)."
        },
        {
          "id": "sma11-b2-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Pada segiempat tali busur $PQRS$, diketahui $\\angle P = (2x + 10)^\\circ$ dan $\\angle R = (3x + 20)^\\circ$. Nilai dari $x$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "25"
            },
            {
              "key": "B",
              "text": "35"
            },
            {
              "key": "C",
              "text": "40"
            },
            {
              "key": "D",
              "text": "30"
            }
          ],
          "correctAnswer": "D",
          "hint": "$\\angle P + \\angle R = 180^\\circ \\implies 5x + 30 = 180 \\implies 5x = 150 \\implies x = 30$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$(2x + 10) + (3x + 20) = 180 \\implies 5x = 150 \\implies x = 30$$ (Opsi D)."
        },
        {
          "id": "sma11-b2-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dua tali busur $AB$ dan $CD$ berpotongan di dalam lingkaran pada titik $E$. Jika $AE = 6$ cm, $EB = 8$ cm, dan $CE = 4$ cm, panjang ruas garis $ED$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "10 cm"
            },
            {
              "key": "B",
              "text": "9 cm"
            },
            {
              "key": "C",
              "text": "12 cm"
            },
            {
              "key": "D",
              "text": "14 cm"
            }
          ],
          "correctAnswer": "C",
          "hint": "Teorema perpotongan tali busur: $AE \\times EB = CE \\times ED \\implies 6 \\times 8 = 4 \\times ED \\implies ED = 12$ cm.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$ED = \\frac{6 \\times 8}{4} = 12\\text{ cm}$$ (Opsi C)."
        },
        {
          "id": "sma11-b2-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dari sebuah titik $P$ di luar lingkaran ditarik garis singgung $PT$ sepanjang 12 cm dan garis potong $PAB$ dengan $PA = 8$ cm. Panjang tali busur $AB$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "18 cm"
            },
            {
              "key": "B",
              "text": "10 cm"
            },
            {
              "key": "C",
              "text": "8 cm"
            },
            {
              "key": "D",
              "text": "12 cm"
            }
          ],
          "correctAnswer": "B",
          "hint": "Teorema garis singgung dan garis potong: $PT^2 = PA \\times PB \\implies 144 = 8 \\times PB \\implies PB = 18$ cm. Maka $AB = PB - PA = 18 - 8 = 10$ cm.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $PB = \\frac{144}{8} = 18\\text{ cm}$\n2. $AB = 18 - 8 = 10\\text{ cm}$ (Opsi B)."
        },
        {
          "id": "sma11-b2-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Diketahui persamaan lingkaran $x^2 + y^2 = 25$. Persamaan garis singgung lingkaran tersebut yang melalui titik $P(3, 4)$ pada lingkaran adalah...",
          "options": [
            {
              "key": "A",
              "text": "4x + 3y = 25"
            },
            {
              "key": "B",
              "text": "3x + 4y = 25"
            },
            {
              "key": "C",
              "text": "3x - 4y = 25"
            },
            {
              "key": "D",
              "text": "4x - 3y = 25"
            }
          ],
          "correctAnswer": "B",
          "hint": "Rumus bagi adil: $x_1 x + y_1 y = r^2 \\implies 3x + 4y = 25$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$3x + 4y = 25$$ (Opsi B)."
        },
        {
          "id": "sma11-b2-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Titik pusat dan jari-jari lingkaran dengan persamaan $x^2 + y^2 - 6x + 8y - 11 = 0$ berturut-turut adalah...",
          "options": [
            {
              "key": "A",
              "text": "P(-3, 4) dan r = 6"
            },
            {
              "key": "B",
              "text": "P(3, -4) dan r = 36"
            },
            {
              "key": "C",
              "text": "P(3, -4) dan r = 6"
            },
            {
              "key": "D",
              "text": "P(-3, 4) dan r = 5"
            }
          ],
          "correctAnswer": "C",
          "hint": "Pusat: $(-\\frac{A}{2}, -\\frac{B}{2}) = (3, -4)$. Jari-jari: $r = \\sqrt{3^2 + (-4)^2 - (-11)} = \\sqrt{9 + 16 + 11} = \\sqrt{36} = 6$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Pusat $= (-\\frac{-6}{2}, -\\frac{8}{2}) = (3, -4)$\n2. Jari-jari $= \\sqrt{9 + 16 + 11} = \\sqrt{36} = 6$ (Opsi C)."
        }
      ]
    },
    {
      "id": "sma11-bab3-statistika-bivariat",
      "title": "Bab 3: Statistika (Diagram Pencar & Regresi Linear)",
      "track": "WAJIB",
      "trackLabel": "Matematika Utama (Wajib)",
      "summary": {
        "overview": "Dalam era kecerdasan buatan, sains data, dan riset ekonomi modern, hampir tidak ada fenomena yang terjadi secara terisolasi. Pengambil kebijakan dan ilmuwan selalu berhadapan dengan pasangan dua variabel (data bivariat) untuk meneliti hubungan saling ketergantungan: Apakah kenaikan biaya promosi digital berbanding lurus dengan peningkatan volume penjualan produk? Apakah durasi tidur siswa berpengaruh terhadap skor konsentrasi belajar? Apakah kadar pupuk berbanding lurus dengan berat hasil panen tanaman pangan?\n\nUntuk menjawab pertanyaan-pertanyaan berbasis bukti tersebut, statistika bivariat menyediakan dua instrumen analisis utama: Diagram Pencar (Scatter Plot) dan Analisis Regresi Linear. Diagram pencar memvisualisasikan sebaran titik koordinat $(x_i, y_i)$ pada bidang Cartesius untuk mengenali kecenderungan arah hubungan (positif, negatif, atau acak tanpa pola). Jika tren titik-titik tersebut menyerupai garis lurus, matematikawan menerapkan metode kuadrat terkecil (least squares method) untuk memodelkan garis regresi linear $\\hat{y} = a + bx$ yang paling representatif meminimalkan galat prediksi.\n\nBab ini membimbing siswa menguasai: (1) Konstruksi dan interpretasi pola diagram pencar; (2) Perhitungan matematis gradien kemiringan ($b$) dan konstanta intersep ($a$) pada garis regresi linear; (3) Pengukuran kekuatan hubungan linear melalui Koefisien Korelasi Pearson ($r$); serta (4) Evaluasi akurasi model menggunakan Koefisien Determinasi ($r^2$). Pemahaman ini membekali siswa dengan literasi data kritis agar mampu membedakan antara korelasi statistik dengan kausalitas nyata.",
        "coreConcepts": [
          "Diagram Pencar (Scatter Plot) & Tren Pola: Visualisasi pasangan data bivariat $(x_i, y_i)$. Mengidentifikasi 3 kategori arah hubungan:\n- Korelasi Positif: Titik-titik condong naik dari kiri bawah ke kanan atas (penambahan variabel bebas $x$ diikuti peningkatan variabel terikat $y$)\n- Korelasi Negatif: Titik-titik condong turun dari kiri atas ke kanan bawah (penambahan nilai $x$ diikuti penurunan nilai $y$)\n- Tanpa Korelasi: Titik-titik menyebar acak seperti lingkaran atau awan tanpa arah garis yang jelas.",
          "Persamaan Garis Regresi Linear (Metode Kuadrat Terkecil): Model estimasi $\\hat{y} = a + bx$ yang meminimalkan jumlah kuadrat residu $\\Sigma (y_i - \\hat{y}_i)^2$:\n- Kemiringan garis (gradien): $b = \\frac{n\\Sigma xy - (\\Sigma x)(\\Sigma y)}{n\\Sigma x^2 - (\\Sigma x)^2}$\n- Titik potong sumbu-$y$ (intersep): $a = \\bar{y} - b\\bar{x}$, di mana $\\bar{x} = \\frac{\\Sigma x}{n}$ dan $\\bar{y} = \\frac{\\Sigma y}{n}$.",
          "Interpolasi vs Ekstrapolasi: Interpolasi adalah melakukan prediksi nilai $\\hat{y}$ untuk nilai $x$ yang masih berada di dalam jangkauan data sampel (hasil sangat andal). Ekstrapolasi adalah memprediksi nilai di luar rentang pengamatan sampel (berisiko bias dan tidak valid jika kondisi sistem berubah).",
          "Koefisien Korelasi Pearson ($r$): Bilangan tanpa satuan yang mengukur kekuatan dan arah hubungan linear antara dua variabel numerik. Rentang nilai: $-1 \\le r \\le 1$. Nilai $r = +1$ berarti hubungan linear positif sempurna, $r = -1$ korelasi negatif sempurna, dan $r = 0$ menandakan ketiadaan hubungan linear.",
          "Koefisien Determinasi ($r^2$ atau $R^2$): Nilai kuadrat dari korelasi Pearson yang dinyatakan dalam persentase ($0 \\le r^2 \\le 1$). Menunjukkan proporsi atau persentase variasi variabel terikat $y$ yang berhasil dijelaskan oleh variabel bebas $x$ melalui model regresi linear."
        ],
        "workedExamples": [
          {
            "title": "Interpretasi Model Regresi Biaya Promosi terhadap Penjualan",
            "problem": "Sebuah toko komputer memodelkan hubungan antara biaya promosi mingguan dalam jutaan rupiah ($x$) dengan total pendapatan penjualan mingguan dalam jutaan rupiah ($y$) melalui persamaan regresi: $\\hat{y} = 25 + 4{,}5x$. Jika pada suatu minggu toko tersebut mengalokasikan biaya promosi sebesar Rp6.000.000 ($x = 6$), tentukan prediksi pendapatan penjualan toko tersebut dan jelaskan makna nilai intersep 25.",
            "solution": "Langkah 1: Substitusikan nilai $x = 6$ ke dalam model regresi:\n$$\\hat{y} = 25 + 4{,}5(6) = 25 + 27 = 52$$\nPrediksi pendapatan penjualan toko adalah **Rp52.000.000,00**.\n\nLangkah 2: Menjelaskan makna konstanta intersep $a = 25$:\nNilai intersep 25 menunjukkan estimasi rata-rata pendapatan penjualan sebesar Rp25.000.000,00 jika toko sama sekali tidak mengeluarkan biaya promosi ($x = 0$)."
          },
          {
            "title": "Menghitung Koefisien Korelasi Pearson dan Determinasi",
            "problem": "Dari hasil pengamatan terhadap 5 pasang data sampel diperoleh informasi ringkas:\n$\\Sigma x = 20$, $\\Sigma y = 40$, $\\Sigma x^2 = 90$, $\\Sigma y^2 = 360$, dan $\\Sigma xy = 175$ dengan $n = 5$. Tentukan nilai koefisien korelasi Pearson ($r$) dan hitung koefisien determinasinya ($r^2$).",
            "solution": "Langkah 1: Gunakan formula korelasi Pearson:\n$$r = \\frac{n\\Sigma xy - (\\Sigma x)(\\Sigma y)}{\\sqrt{[n\\Sigma x^2 - (\\Sigma x)^2][n\\Sigma y^2 - (\\Sigma y)^2]}}$$\n\nLangkah 2: Hitung pembilang:\n$$\\text{Pembilang} = 5(175) - (20)(40) = 875 - 800 = 75$$\n\nLangkah 3: Hitung penyebut:\n$$n\\Sigma x^2 - (\\Sigma x)^2 = 5(90) - (20)^2 = 450 - 400 = 50$$\n$$n\\Sigma y^2 - (\\Sigma y)^2 = 5(360) - (40)^2 = 1.800 - 1.600 = 200$$\n$$\\text{Penyebut} = \\sqrt{50 \\times 200} = \\sqrt{10.000} = 100$$\n\nLangkah 4: Hitung nilai $r$ dan $r^2$:\n$$r = \\frac{75}{100} = 0{,}75$$\n$$r^2 = (0{,}75)^2 = 0{,}5625 = 56{,}25\\%$$\nJadi, koefisien korelasinya adalah **$r = 0{,}75$** (korelasi positif kuat) dan koefisien determinasinya adalah **$56{,}25\\%$**."
          }
        ],
        "keyFormulas": [
          {
            "label": "Model Persamaan Regresi",
            "formula": "\\hat{y} = a + bx"
          },
          {
            "label": "Gradien Kemiringan Regresi",
            "formula": "b = \\frac{n\\Sigma xy - (\\Sigma x)(\\Sigma y)}{n\\Sigma x^2 - (\\Sigma x)^2}"
          },
          {
            "label": "Intersep Sumbu-Y Regresi",
            "formula": "a = \\bar{y} - b\\bar{x}"
          },
          {
            "label": "Koefisien Korelasi Pearson",
            "formula": "r = \\frac{n\\Sigma xy - (\\Sigma x)(\\Sigma y)}{\\sqrt{[n\\Sigma x^2 - (\\Sigma x)^2][n\\Sigma y^2 - (\\Sigma y)^2]}} \\quad (-1 \\le r \\le 1)"
          },
          {
            "label": "Koefisien Determinasi",
            "formula": "R^2 = r^2 \\times 100\\%"
          }
        ],
        "misconceptions": [
          "Menyimpulkan adanya hubungan sebab-akibat langsung (kausalitas) hanya karena koefisien korelasi $r$ mendekati $+1$ atau $-1$. Hubungan statistik yang kuat bisa disebabkan oleh faktor variabel ketiga yang tersembunyi (confounding variable) atau kebetulan semata (spurious correlation).",
          "Melakukan ekstrapolasi yang tidak realistis jauh melampaui rentang data pengamatan (misal: memprediksi tinggi badan balita pada usia 40 tahun menggunakan garis regresi masa pertumbuhan anak)."
        ],
        "tutorTip": "Tanda koefisien korelasi ($r$) selalu searah dengan tanda gradien regresi ($b$): jika garis regresi miring ke atas ($b > 0$), maka nilai korelasi pasti positif ($r > 0$). Keduanya tidak pernah berlawanan tanda!"
      },
      "questions": [
        {
          "id": "sma11-b3-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Jika diagram pencar menunjukkan bahwa semakin bertambah nilai variabel $x$, nilai variabel $y$ juga cenderung semakin meningkat secara linier, maka hubungan kedua variabel tersebut menunjukkan...",
          "options": [
            {
              "key": "A",
              "text": "Korelasi negatif"
            },
            {
              "key": "B",
              "text": "Tidak berkorelasi"
            },
            {
              "key": "C",
              "text": "Korelasi positif"
            },
            {
              "key": "D",
              "text": "Korelasi konstan"
            }
          ],
          "correctAnswer": "C",
          "hint": "Ketika kedua variabel bergerak searah (keduanya sama-sama bertambah nilainya), korelasinya bernilai positif.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nKetika peningkatan nilai variabel $x$ diikuti secara teratur oleh peningkatan nilai variabel $y$, titik-titik pada diagram pencar membentuk pola naik dari kiri ke kanan. Hubungan ini dinamakan **korelasi positif** (Opsi C)."
        },
        {
          "id": "sma11-b3-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Interval nilai koefisien korelasi Pearson ($r$) yang mungkin dalam analisis statistika bivariat adalah...",
          "options": [
            {
              "key": "A",
              "text": "$0 \\le r \\le 1$"
            },
            {
              "key": "B",
              "text": "$-1 < r < 0$"
            },
            {
              "key": "C",
              "text": "$r \\ge 0$"
            },
            {
              "key": "D",
              "text": "$-1 \\le r \\le 1$"
            }
          ],
          "correctAnswer": "D",
          "hint": "Korelasi dapat bernilai negatif sempurna, nol, hingga positif sempurna.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nKoefisien korelasi Pearson dinormalisasi sehingga berada dalam rentang tertutup **$-1 \\le r \\le 1$**. Nilai $-1$ menyatakan korelasi negatif sempurna dan $+1$ menyatakan korelasi positif sempurna (Opsi D)."
        },
        {
          "id": "sma11-b3-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah garis regresi linear memiliki persamaan $\\hat{y} = 15 + 2{,}5x$. Jika seorang individu memiliki nilai variabel $x = 8$, maka nilai taksiran $\\hat{y}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "35"
            },
            {
              "key": "B",
              "text": "30"
            },
            {
              "key": "C",
              "text": "40"
            },
            {
              "key": "D",
              "text": "25"
            }
          ],
          "correctAnswer": "A",
          "hint": "Substitusikan nilai $x = 8$ ke dalam persamaan garis regresi yang diberikan.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Masukkan $x = 8$ ke persamaan $\\hat{y} = 15 + 2{,}5x$:\n$$\\hat{y} = 15 + 2{,}5(8)$$\n2. Hitung perkalian: $2{,}5 \\times 8 = 20$\n3. Jumlahkan: $\\hat{y} = 15 + 20 = 35$\nJadi, nilai estimasi $\\hat{y}$ adalah **35** (Opsi A)."
        },
        {
          "id": "sma11-b3-4",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jika diperoleh nilai koefisien korelasi Pearson antara waktu latihan ($x$) dan skor performa ($y$) adalah $r = 0{,}8$, maka persentase variasi skor performa yang dapat dijelaskan oleh waktu latihan melalui koefisien determinasi adalah...",
          "options": [
            {
              "key": "A",
              "text": "$80\\%$"
            },
            {
              "key": "B",
              "text": "$16\\%$"
            },
            {
              "key": "C",
              "text": "$64\\%$"
            },
            {
              "key": "D",
              "text": "$36\\%$"
            }
          ],
          "correctAnswer": "C",
          "hint": "Koefisien determinasi adalah kuadrat dari koefisien korelasi: $R^2 = r^2 \\times 100\\%$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Hitung nilai koefisien determinasi $r^2$:\n$$r^2 = (0{,}8)^2 = 0{,}64$$\n2. Nyatakan dalam persentase:\n$$R^2 = 0{,}64 \\times 100\\% = 64\\%$$\nArtinya, sebesar **$64\\%$** variasi skor performa dapat dijelaskan oleh waktu latihan (Opsi C)."
        },
        {
          "id": "sma11-b3-5",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Seorang analis data menemukan garis regresi $\\hat{y} = 120 - 3x$ yang menghubungkan harga jual per unit dalam ribuan rupiah ($x$) dengan kuantitas permintaan barang dalam lusin ($y$). Berdasarkan model ini, jika harga dinaikkan sebesar Rp5.000 ($x$ bertambah 5 satuan), bagaimana perubahan yang terjadi pada kuantitas permintaan barang?",
          "options": [
            {
              "key": "A",
              "text": "Permintaan bertambah sebanyak 15 lusin"
            },
            {
              "key": "B",
              "text": "Permintaan berkurang sebanyak 5 lusin"
            },
            {
              "key": "C",
              "text": "Permintaan tidak berubah"
            },
            {
              "key": "D",
              "text": "Permintaan berkurang sebanyak 15 lusin"
            }
          ],
          "correctAnswer": "D",
          "hint": "Perhatikan gradien kemiringan garis $b = -3$. Setiap kenaikan 1 satuan $x$ menyebabkan perubahan $\\Delta y = b \\times \\Delta x$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Nilai gradien regresi adalah $b = -3$.\n2. Kenaikan nilai variabel bebas adalah $\\Delta x = 5$.\n3. Perubahan taksiran variabel terikat adalah:\n$$\\Delta \\hat{y} = b \\times \\Delta x = -3 \\times 5 = -15$$\nTanda negatif menyatakan penurunan, sehingga permintaan barang berkurang sebanyak **15 lusin** (Opsi D)."
        },
        {
          "id": "sma11-b3-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Pada diagram pencar (scatter plot), jika titik-titik data membentuk pola yang cenderung naik dari kiri bawah ke kanan atas, maka hubungan antara kedua variabel adalah...",
          "options": [
            {
              "key": "A",
              "text": "Korelasi negatif"
            },
            {
              "key": "B",
              "text": "Tidak ada korelasi"
            },
            {
              "key": "C",
              "text": "Korelasi positif"
            },
            {
              "key": "D",
              "text": "Korelasi kuadratik"
            }
          ],
          "correctAnswer": "C",
          "hint": "Pola naik dari kiri bawah ke kanan atas menunjukkan korelasi linear positif.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nHubungan tersebut adalah **korelasi positif** (Opsi C)."
        },
        {
          "id": "sma11-b3-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah garis regresi linear memiliki persamaan $\\hat{y} = 2{,}5x + 10$. Jika nilai variabel bebas $x = 8$, maka nilai prediksi $\\hat{y}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "28"
            },
            {
              "key": "B",
              "text": "32"
            },
            {
              "key": "C",
              "text": "30"
            },
            {
              "key": "D",
              "text": "25"
            }
          ],
          "correctAnswer": "C",
          "hint": "Substitusikan $x = 8$: $\\hat{y} = 2{,}5(8) + 10 = 20 + 10 = 30$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\hat{y} = 2{,}5(8) + 10 = 20 + 10 = 30$$ (Opsi C)."
        },
        {
          "id": "sma11-b3-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Rentang nilai koefisien korelasi Pearson ($r$) selalu berada pada interval...",
          "options": [
            {
              "key": "A",
              "text": "0 <= r <= 1"
            },
            {
              "key": "B",
              "text": "-1 < r < 1"
            },
            {
              "key": "C",
              "text": "r >= 0"
            },
            {
              "key": "D",
              "text": "-1 <= r <= 1"
            }
          ],
          "correctAnswer": "D",
          "hint": "Nilai $r$ dibatasi antara $-1$ (korelasi negatif sempurna) hingga $+1$ (korelasi positif sempurna).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nNilai $r$ berada pada rentang **$-1 \\le r \\le 1$** (Opsi D)."
        },
        {
          "id": "sma11-b3-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jika koefisien korelasi dua variabel adalah $r = 0{,}8$, maka nilai koefisien determinasi ($R^2$) adalah...",
          "options": [
            {
              "key": "A",
              "text": "80%"
            },
            {
              "key": "B",
              "text": "16%"
            },
            {
              "key": "C",
              "text": "40%"
            },
            {
              "key": "D",
              "text": "64%"
            }
          ],
          "correctAnswer": "D",
          "hint": "Koefisien determinasi $= r^2 = (0{,}8)^2 = 0{,}64 = 64\\%$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$R^2 = (0{,}8)^2 = 0{,}64 = 64\\%$$ (Opsi D)."
        },
        {
          "id": "sma11-b3-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Arti dari koefisien determinasi $R^2 = 75\\%$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "75% data berada tepat pada garis lurus regresi"
            },
            {
              "key": "B",
              "text": "Korelasi kedua variabel bernilai 0,75"
            },
            {
              "key": "C",
              "text": "75% variasi nilai variabel terikat y dapat dijelaskan oleh variabel bebas x"
            },
            {
              "key": "D",
              "text": "Variabel x menyebabkan perubahan 75% pada variabel y"
            }
          ],
          "correctAnswer": "C",
          "hint": "$R^2$ mengukur proporsi variabilitas variabel respons yang dijelaskan oleh model regresi.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nMaknanya adalah **75% variasi nilai $y$ dapat dijelaskan oleh variabel $x$** (Opsi C)."
        },
        {
          "id": "sma11-b3-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Persamaan regresi biaya promosi ($x$ dalam juta rupiah) terhadap omzet penjualan ($y$ dalam juta rupiah) adalah $\\hat{y} = 15 + 4{,}2x$. Jika biaya promosi adalah 10 juta rupiah, taksiran omzet penjualan adalah...",
          "options": [
            {
              "key": "A",
              "text": "57 juta rupiah"
            },
            {
              "key": "B",
              "text": "52 juta rupiah"
            },
            {
              "key": "C",
              "text": "62 juta rupiah"
            },
            {
              "key": "D",
              "text": "47 juta rupiah"
            }
          ],
          "correctAnswer": "A",
          "hint": "Substitusikan $x = 10$: $\\hat{y} = 15 + 4{,}2(10) = 15 + 42 = 57$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\hat{y} = 15 + 4{,}2(10) = 57\\text{ juta rupiah}$$ (Opsi A)."
        },
        {
          "id": "sma11-b3-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dalam analisis regresi $\\hat{y} = a + bx$, titik koordinat yang selalu dilalui oleh garis regresi terbaik adalah...",
          "options": [
            {
              "key": "A",
              "text": "(\\bar{x}, \\bar{y})"
            },
            {
              "key": "B",
              "text": "(0, 0)"
            },
            {
              "key": "C",
              "text": "(\\bar{x}, 0)"
            },
            {
              "key": "D",
              "text": "(0, \\bar{y})"
            }
          ],
          "correctAnswer": "A",
          "hint": "Garis regresi metode kuadrat terkecil selalu melewati titik rata-rata $(\\bar{x}, \\bar{y})$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nGaris regresi selalu melewati titik rata-rata **$(\\bar{x}, \\bar{y})$** (Opsi A)."
        },
        {
          "id": "sma11-b3-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Residu pada pengamatan ke-$i$ didefinisikan sebagai selisih antara nilai aktual dan nilai prediksi: $e_i = y_i - \\hat{y}_i$. Jika nilai aktual $y = 45$ dan nilai prediksinya $\\hat{y} = 42$, maka residunya adalah...",
          "options": [
            {
              "key": "A",
              "text": "-3"
            },
            {
              "key": "B",
              "text": "3"
            },
            {
              "key": "C",
              "text": "87"
            },
            {
              "key": "D",
              "text": "1,07"
            }
          ],
          "correctAnswer": "B",
          "hint": "Residu $= 45 - 42 = 3$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$e = y - \\hat{y} = 45 - 42 = 3$$ (Opsi B)."
        },
        {
          "id": "sma11-b3-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jika korelasi antara lama belajar ($x$) dan nilai ujian ($y$) adalah $r = 0{,}92$, kesimpulan yang paling tepat mengenai hubungan kedua variabel adalah...",
          "options": [
            {
              "key": "A",
              "text": "Hubungan linear positif yang lemah"
            },
            {
              "key": "B",
              "text": "Lama belajar menjadi satu-satunya penyebab nilai tinggi"
            },
            {
              "key": "C",
              "text": "Hubungan negatif kuat"
            },
            {
              "key": "D",
              "text": "Hubungan linear positif yang sangat kuat"
            }
          ],
          "correctAnswer": "D",
          "hint": "Nilai $r$ di atas 0,8 menunjukkan korelasi linear positif yang sangat kuat.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nNilai $r = 0{,}92$ mengindikasikan **hubungan linear positif yang sangat kuat** (Opsi D)."
        },
        {
          "id": "sma11-b3-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jika nilai korelasi $r = 0$, interpretasi yang tepat adalah...",
          "options": [
            {
              "key": "A",
              "text": "Kedua variabel tidak memiliki hubungan sama sekali"
            },
            {
              "key": "B",
              "text": "Tidak ada hubungan linear antara kedua variabel"
            },
            {
              "key": "C",
              "text": "Garis regresi tegak lurus sempurna"
            },
            {
              "key": "D",
              "text": "Data tidak valid"
            }
          ],
          "correctAnswer": "B",
          "hint": "$r = 0$ menunjukkan tidak adanya korelasi linear (namun mungkin ada hubungan non-linear).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$r = 0$ berarti **tidak ada hubungan linear** (Opsi B)."
        },
        {
          "id": "sma11-b3-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Diberikan data sampel dengan $\\bar{x} = 5, \\bar{y} = 14$ dan gradien garis regresi $b = 1{,}8$. Nilai intersep $a$ dari garis regresi $\\hat{y} = a + bx$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "5"
            },
            {
              "key": "B",
              "text": "4"
            },
            {
              "key": "C",
              "text": "6"
            },
            {
              "key": "D",
              "text": "3"
            }
          ],
          "correctAnswer": "A",
          "hint": "Rumus intersep: $a = \\bar{y} - b\\bar{x} = 14 - 1{,}8(5) = 14 - 9 = 5$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$a = 14 - 1{,}8(5) = 14 - 9 = 5$$ (Opsi A)."
        },
        {
          "id": "sma11-b3-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Suatu model regresi $\\hat{y} = -0{,}6x + 80$ memodelkan hubungan kecepatan berkendara ($x$ km/jam) terhadap jarak tempuh per liter bahan bakar ($y$). Jika seorang pengemudi melaju 60 km/jam dan kenyataannya menempuh 41 km/liter, berapakah residu pengamatan tersebut?",
          "options": [
            {
              "key": "A",
              "text": "3"
            },
            {
              "key": "B",
              "text": "-3"
            },
            {
              "key": "C",
              "text": "44"
            },
            {
              "key": "D",
              "text": "-44"
            }
          ],
          "correctAnswer": "B",
          "hint": "Nilai prediksi: $\\hat{y} = -0{,}6(60) + 80 = -36 + 80 = 44$. Residu: $e = y - \\hat{y} = 41 - 44 = -3$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $\\hat{y} = 44$\n2. $e = 41 - 44 = -3$ (Opsi B)."
        },
        {
          "id": "sma11-b3-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Pemberian pupuk ($x$) dan tinggi tanaman ($y$) memiliki kovarian $s_{xy} = 18$, simpangan baku $s_x = 3$, dan simpangan baku $s_y = 7{,}5$. Koefisien korelasi Pearson ($r$) antara $x$ dan $y$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "0,75"
            },
            {
              "key": "B",
              "text": "0,8"
            },
            {
              "key": "C",
              "text": "0,6"
            },
            {
              "key": "D",
              "text": "0,85"
            }
          ],
          "correctAnswer": "B",
          "hint": "Rumus Pearson: $r = \\frac{s_{xy}}{s_x \\times s_y} = \\frac{18}{3 \\times 7{,}5} = \\frac{18}{22{,}5} = 0{,}8$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$r = \\frac{18}{22{,}5} = 0{,}8$$ (Opsi B)."
        },
        {
          "id": "sma11-b3-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Fenomena 'Korelasi Spurious' (Korelasi Semu) terjadi ketika...",
          "options": [
            {
              "key": "A",
              "text": "Dua variabel tampak berkorelasi tinggi secara statistik tetapi tidak memiliki hubungan sebab-akibat nyata"
            },
            {
              "key": "B",
              "text": "Koefisien korelasi bernilai tepat 1"
            },
            {
              "key": "C",
              "text": "Diagram pencar membentuk garis horizontal sempurna"
            },
            {
              "key": "D",
              "text": "Data memiliki nilai residu yang selalu nol"
            }
          ],
          "correctAnswer": "A",
          "hint": "Korelasi semu adalah korelasi statistik kebetulan atau dipengaruhi variabel ketiga tersembunyi (confounding).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nKorelasi semu adalah **dua variabel tampak berkorelasi tinggi tetapi tidak memiliki hubungan sebab-akibat nyata** (Opsi A)."
        },
        {
          "id": "sma11-b3-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah garis regresi $\\hat{y} = 5 + 2x$ dihitung dari data dengan rentang $x$ antara 2 dan 10. Jika model digunakan untuk memprediksi nilai $y$ saat $x = 35$, tindakan tersebut dinamakan...",
          "options": [
            {
              "key": "A",
              "text": "Interpolasi (yang sangat valid)"
            },
            {
              "key": "B",
              "text": "Ekstrapolasi (yang berisiko kurang akurat)"
            },
            {
              "key": "C",
              "text": "Transformasi data kuadratik"
            },
            {
              "key": "D",
              "text": "Uji autokorelasi"
            }
          ],
          "correctAnswer": "B",
          "hint": "Memprediksi nilai di luar rentang domain data sampel dinamakan ekstrapolasi.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nTindakan memprediksi di luar rentang data pengamatan disebut **ekstrapolasi** (Opsi B)."
        }
      ]
    },
    {
      "id": "sma11-bab4-limit",
      "title": "Bab 4: Limit Fungsi Aljabar",
      "track": "LANJUT",
      "trackLabel": "Matematika Tingkat Lanjut (Pilihan)",
      "summary": {
        "overview": "Limit adalah konsep fundamental dalam kalkulus yang menjawab pertanyaan: \"Ke nilai berapakah suatu fungsi mendekati, saat nilai variabelnya mendekati suatu titik tertentu?\" Konsep ini menjadi fondasi bagi turunan dan integral yang digunakan secara luas dalam fisika, teknik, ekonomi, dan sains komputer. Misalnya, kecepatan sesaat sebuah benda bergerak pada waktu $t$ ditentukan melalui limit dari rasio perubahan posisi terhadap selang waktu yang mengecil mendekati nol.\n\nDalam bab ini, siswa mempelajari sifat-sifat limit fungsi aljabar, teknik substitusi dan pemfaktoran untuk mengevaluasi limit, serta konsep limit di tak hingga. Pemahaman limit yang kokoh akan menjadi kunci untuk memahami konsep turunan dan integral pada bab-bab berikutnya.",
        "coreConcepts": [
          "Definisi Informal Limit: $\\lim_{x \\to a} f(x) = L$ berarti nilai $f(x)$ mendekati $L$ saat $x$ mendekati $a$ (dari kiri maupun dari kanan), meskipun $f(a)$ sendiri belum tentu terdefinisi.",
          "Sifat-sifat Limit: Jika $\\lim_{x \\to a} f(x) = L$ dan $\\lim_{x \\to a} g(x) = M$, maka:\n- Penjumlahan: $\\lim_{x \\to a} [f(x) + g(x)] = L + M$\n- Perkalian: $\\lim_{x \\to a} [f(x) \\cdot g(x)] = L \\cdot M$\n- Pembagian: $\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\frac{L}{M}$ (asalkan $M \\neq 0$)",
          "Teknik Evaluasi Limit:\n- Substitusi langsung: jika $f(a)$ terdefinisi, maka $\\lim_{x \\to a} f(x) = f(a)$.\n- Pemfaktoran: untuk bentuk tak tentu $\\frac{0}{0}$, faktorkan pembilang dan penyebut lalu sederhanakan.\n- Perkalian sekawan: digunakan jika ada bentuk akar yang menghasilkan $\\frac{0}{0}$.",
          "Limit Fungsi Rasional Bentuk Tak Tentu $\\frac{0}{0}$: Faktorkan pembilang dan penyebut, kemudian batalkan faktor yang sama. Contoh: $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = \\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x-2} = \\lim_{x \\to 2} (x+2) = 4$.",
          "Limit di Tak Hingga: Untuk polinomial, suku berderajat tertinggi mendominasi. Untuk fungsi rasional $\\frac{P(x)}{Q(x)}$:\n- Jika derajat P < derajat Q: limit = 0\n- Jika derajat P = derajat Q: limit = rasio koefisien tertinggi\n- Jika derajat P > derajat Q: limit = $\\pm \\infty$ (tidak ada)"
        ],
        "workedExamples": [
          {
            "title": "Evaluasi Limit dengan Pemfaktoran",
            "problem": "Tentukan nilai dari $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$.",
            "solution": "Langkah 1: Uji substitusi langsung: $\\frac{3^2 - 9}{3 - 3} = \\frac{0}{0}$ (bentuk tak tentu, harus difaktorkan).\n\nLangkah 2: Faktorkan pembilang:\n$$\\frac{x^2 - 9}{x - 3} = \\frac{(x-3)(x+3)}{x-3}$$\n\nLangkah 3: Sederhanakan (batalkan faktor $(x-3)$ untuk $x \\neq 3$):\n$$\\lim_{x \\to 3} \\frac{(x-3)(x+3)}{x-3} = \\lim_{x \\to 3} (x+3) = 3 + 3 = 6$$\nJadi, $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3} = \\mathbf{6}$."
          },
          {
            "title": "Limit di Tak Hingga Fungsi Rasional",
            "problem": "Tentukan nilai dari $\\lim_{x \\to \\infty} \\frac{3x^2 - 5x + 2}{x^2 + 4}$.",
            "solution": "Langkah 1: Derajat pembilang = derajat penyebut = 2, sehingga limit adalah rasio koefisien suku berderajat tertinggi.\n\nLangkah 2: Bagi pembilang dan penyebut dengan $x^2$:\n$$\\lim_{x \\to \\infty} \\frac{3 - \\frac{5}{x} + \\frac{2}{x^2}}{1 + \\frac{4}{x^2}} = \\frac{3 - 0 + 0}{1 + 0} = 3$$\nJadi, $\\lim_{x \\to \\infty} \\frac{3x^2 - 5x + 2}{x^2 + 4} = \\mathbf{3}$."
          }
        ],
        "keyFormulas": [
          {
            "label": "Limit Dasar",
            "formula": "\\lim_{x \\to a} f(x) = f(a) \\text{ (jika } f \\text{ kontinu di } a)"
          },
          {
            "label": "Limit Tak Tentu",
            "formula": "\\lim_{x \\to a} \\frac{f(x)}{g(x)}: \\text{faktorkan jika } \\frac{0}{0}"
          },
          {
            "label": "Limit Tak Hingga Rasional",
            "formula": "\\lim_{x \\to \\infty} \\frac{ax^n + \\ldots}{bx^n + \\ldots} = \\frac{a}{b}"
          }
        ],
        "misconceptions": [
          "$\\lim_{x \\to a} f(x) = f(a)$ tidak selalu benar — $f(a)$ bisa tidak terdefinisi, tapi limitnya tetap ada.",
          "Bentuk $\\frac{0}{0}$ bukan berarti hasilnya 0 atau tidak ada, melainkan 'tak tentu' yang perlu diselesaikan lebih lanjut."
        ],
        "tutorTip": "Hafal: Jika substitusi langsung memberi $\\frac{0}{0}$, itu sinyal untuk FAKTORKAN. Jika memberi $\\frac{k}{0}$ (k ≠ 0), limit adalah ±∞. Jika langsung memberikan angka, itu sudah jawaban!"
      },
      "questions": [
        {
          "id": "sma11-b4-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Nilai dari $\\lim_{x \\to 2} (3x^2 - 2x + 1)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "8"
            },
            {
              "key": "B",
              "text": "5"
            },
            {
              "key": "C",
              "text": "9"
            },
            {
              "key": "D",
              "text": "11"
            }
          ],
          "correctAnswer": "C",
          "hint": "Karena fungsi polinomial kontinu di mana saja, substitusikan langsung $x = 2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\lim_{x \\to 2} (3x^2 - 2x + 1) = 3(2)^2 - 2(2) + 1 = 12 - 4 + 1 = 9$$\nNilainya adalah **9** (Opsi C)."
        },
        {
          "id": "sma11-b4-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Nilai dari $\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1}$ adalah...",
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
              "text": "tak tentu"
            },
            {
              "key": "D",
              "text": "2"
            }
          ],
          "correctAnswer": "D",
          "hint": "Faktorkan pembilang: $x^2 - 1 = (x-1)(x+1)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1} = \\lim_{x \\to 1} \\frac{(x-1)(x+1)}{x-1} = \\lim_{x \\to 1}(x+1) = 2$$\nNilainya adalah **2** (Opsi D)."
        },
        {
          "id": "sma11-b4-3",
          "category": "Latihan",
          "difficulty": "Menengah",
          "question": "Nilai dari $\\lim_{x \\to 3} \\frac{x^2 - 5x + 6}{x - 3}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "−1"
            },
            {
              "key": "B",
              "text": "1"
            },
            {
              "key": "C",
              "text": "0"
            },
            {
              "key": "D",
              "text": "2"
            }
          ],
          "correctAnswer": "B",
          "hint": "Faktorkan: $x^2 - 5x + 6 = (x-2)(x-3)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{x^2 - 5x + 6}{x - 3} = \\frac{(x-2)(x-3)}{x-3}$$\n$$\\lim_{x \\to 3}(x - 2) = 3 - 2 = 1$$\nHasilnya adalah **1** (Opsi B).\n\n*(Koreksi: $(x-2)(x-3)$ untuk $x=3$ memberikan $\\lim = 3-2 = 1$, jawaban A)*"
        },
        {
          "id": "sma11-b4-4",
          "category": "Latihan",
          "difficulty": "Menengah",
          "question": "Nilai dari $\\lim_{x \\to \\infty} \\frac{2x^2 + 3x}{x^2 - 1}$ adalah...",
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
              "text": "0"
            },
            {
              "key": "D",
              "text": "$\\infty$"
            }
          ],
          "correctAnswer": "B",
          "hint": "Derajat pembilang = derajat penyebut = 2, ambil rasio koefisien suku berderajat tertinggi.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nDerajat P = derajat Q = 2, sehingga:\n$$\\lim_{x \\to \\infty} \\frac{2x^2 + 3x}{x^2 - 1} = \\frac{2}{1} = 2$$\nNilainya adalah **2** (Opsi B)."
        },
        {
          "id": "sma11-b4-5",
          "category": "Latihan",
          "difficulty": "Menengah",
          "question": "Nilai dari $\\lim_{x \\to \\infty} \\frac{4x + 1}{x^2 + 3}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "4"
            },
            {
              "key": "B",
              "text": "$\\infty$"
            },
            {
              "key": "C",
              "text": "0"
            },
            {
              "key": "D",
              "text": "1"
            }
          ],
          "correctAnswer": "C",
          "hint": "Derajat pembilang (1) < derajat penyebut (2), sehingga limit = 0.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nDerajat P (1) < derajat Q (2), sehingga limit = 0.\nNilainya adalah **0** (Opsi C)."
        },
        {
          "id": "sma11-b4-6",
          "category": "Latihan",
          "difficulty": "Menengah",
          "question": "Nilai dari $\\lim_{x \\to 0} \\frac{x^2 + 3x}{x}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "3"
            },
            {
              "key": "B",
              "text": "0"
            },
            {
              "key": "C",
              "text": "1"
            },
            {
              "key": "D",
              "text": "tak terdefinisi"
            }
          ],
          "correctAnswer": "A",
          "hint": "Faktorkan pembilang: $x^2 + 3x = x(x + 3)$, lalu sederhanakan.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\lim_{x \\to 0} \\frac{x(x+3)}{x} = \\lim_{x \\to 0}(x+3) = 0+3 = 3$$\nNilainya adalah **3** (Opsi A)."
        },
        {
          "id": "sma11-b4-7",
          "category": "Tantangan",
          "difficulty": "Lanjut",
          "question": "Nilai dari $\\lim_{x \\to 2} \\frac{x^3 - 8}{x^2 - 4}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "4"
            },
            {
              "key": "B",
              "text": "2"
            },
            {
              "key": "C",
              "text": "6"
            },
            {
              "key": "D",
              "text": "3"
            }
          ],
          "correctAnswer": "D",
          "hint": "Gunakan rumus $a^3 - b^3 = (a-b)(a^2+ab+b^2)$ dan $a^2 - b^2 = (a-b)(a+b)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{x^3 - 8}{x^2 - 4} = \\frac{(x-2)(x^2+2x+4)}{(x-2)(x+2)}$$\n$$\\lim_{x \\to 2} \\frac{x^2+2x+4}{x+2} = \\frac{4+4+4}{4} = \\frac{12}{4} = 3$$\nNilainya adalah **3** (Opsi D)."
        },
        {
          "id": "sma11-b4-8",
          "category": "Tantangan",
          "difficulty": "Lanjut",
          "question": "Jika $\\lim_{x \\to 3} \\frac{x^2 + ax - 12}{x - 3} = 7$, nilai $a$ adalah...",
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
              "text": "1"
            },
            {
              "key": "D",
              "text": "4"
            }
          ],
          "correctAnswer": "C",
          "hint": "Agar limit-nya ada (tidak ∞), pembilang harus memiliki $(x-3)$ sebagai faktor, artinya $x=3$ adalah akar pembilang. Substitusi $x=3$: $9 + 3a - 12 = 0 \\implies a = 1$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Syarat: $x=3$ adalah akar pembilang: $9 + 3a - 12 = 0 \\implies 3a = 3 \\implies a = 1$.\n2. Verifikasi: $\\frac{x^2 + x - 12}{x-3} = \\frac{(x-3)(x+4)}{x-3} = x+4$\n3. $\\lim_{x \\to 3}(x+4) = 7$ ✓\nNilai $a$ adalah **1** (Opsi C)."
        },
        {
          "id": "sma11-b4-9",
          "category": "Latihan",
          "difficulty": "Menengah",
          "question": "Nilai dari $\\lim_{x \\to \\infty} \\frac{3x^3 - x}{2x^3 + 5}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\dfrac{3}{2}$"
            },
            {
              "key": "B",
              "text": "0"
            },
            {
              "key": "C",
              "text": "3"
            },
            {
              "key": "D",
              "text": "$\\infty$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Derajat sama = 3. Rasio koefisien tertinggi: $\\frac{3}{2}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nDerajat P = derajat Q = 3. Limit = rasio koefisien suku tertinggi = $\\frac{3}{2}$ (Opsi A)."
        },
        {
          "id": "sma11-b4-10",
          "category": "Latihan",
          "difficulty": "Menengah",
          "question": "Nilai dari $\\lim_{x \\to -1} \\frac{x^2 + 3x + 2}{x + 1}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "−1"
            },
            {
              "key": "B",
              "text": "0"
            },
            {
              "key": "C",
              "text": "2"
            },
            {
              "key": "D",
              "text": "1"
            }
          ],
          "correctAnswer": "D",
          "hint": "Faktorkan: $x^2 + 3x + 2 = (x+1)(x+2)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\lim_{x \\to -1} \\frac{(x+1)(x+2)}{x+1} = \\lim_{x \\to -1}(x+2) = -1+2 = 1$$\nNilainya adalah **1** (Opsi D)."
        },
        {
          "id": "sma11-b4-11",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Nilai dari $\\lim_{x \\to 4} \\frac{x^2 - 16}{x - 4}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "4"
            },
            {
              "key": "B",
              "text": "16"
            },
            {
              "key": "C",
              "text": "8"
            },
            {
              "key": "D",
              "text": "0"
            }
          ],
          "correctAnswer": "C",
          "hint": "Faktorkan: $x^2 - 16 = (x-4)(x+4)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\lim_{x \\to 4} \\frac{(x-4)(x+4)}{x-4} = \\lim_{x \\to 4}(x+4) = 8$$\nNilainya adalah **8** (Opsi C)."
        },
        {
          "id": "sma11-b4-12",
          "category": "Tantangan",
          "difficulty": "Lanjut",
          "question": "Nilai dari $\\lim_{x \\to \\infty} (\\sqrt{x^2 + 4x} - x)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "4"
            },
            {
              "key": "B",
              "text": "0"
            },
            {
              "key": "C",
              "text": "$\\infty$"
            },
            {
              "key": "D",
              "text": "2"
            }
          ],
          "correctAnswer": "D",
          "hint": "Kalikan dengan sekawannya: $(\\sqrt{x^2+4x} - x) \\times \\frac{\\sqrt{x^2+4x}+x}{\\sqrt{x^2+4x}+x}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\lim_{x \\to \\infty} \\frac{(x^2+4x) - x^2}{\\sqrt{x^2+4x}+x} = \\lim_{x \\to \\infty} \\frac{4x}{x\\sqrt{1+\\frac{4}{x}}+x} = \\frac{4}{1+1} = 2$$\nNilainya adalah **2** (Opsi D)."
        },
        {
          "id": "sma11-b4-13",
          "category": "Latihan",
          "difficulty": "Menengah",
          "question": "Nilai dari $\\lim_{x \\to 5} \\frac{x^2 - 25}{x^2 - 10x + 25}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "0"
            },
            {
              "key": "B",
              "text": "$\\infty$"
            },
            {
              "key": "C",
              "text": "1"
            },
            {
              "key": "D",
              "text": "5"
            }
          ],
          "correctAnswer": "B",
          "hint": "Faktorkan: $x^2-25=(x-5)(x+5)$ dan $x^2-10x+25=(x-5)^2$. Sederhanakan, lalu evaluasi limit.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{(x-5)(x+5)}{(x-5)^2} = \\frac{x+5}{x-5}$$\nSaat $x \\to 5$: penyebut $\\to 0$ dan pembilang $\\to 10$, sehingga limit = $\\infty$ (Opsi B)."
        },
        {
          "id": "sma11-b4-14",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Nilai dari $\\lim_{x \\to 2} \\frac{x^2 - 4}{2x - 4}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "1"
            },
            {
              "key": "B",
              "text": "4"
            },
            {
              "key": "C",
              "text": "$\\frac{1}{2}$"
            },
            {
              "key": "D",
              "text": "2"
            }
          ],
          "correctAnswer": "D",
          "hint": "Faktorkan: $x^2-4=(x-2)(x+2)$ dan $2x-4=2(x-2)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\lim_{x \\to 2} \\frac{(x-2)(x+2)}{2(x-2)} = \\lim_{x \\to 2} \\frac{x+2}{2} = \\frac{4}{2} = 2$$\nNilainya adalah **2** (Opsi D)."
        },
        {
          "id": "sma11-b4-15",
          "category": "Tantangan",
          "difficulty": "Lanjut",
          "question": "Nilai dari $\\lim_{x \\to 1} \\frac{x^3 - 1}{x^2 - 1}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\dfrac{3}{2}$"
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
              "text": "$\\dfrac{1}{2}$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan: $x^3-1=(x-1)(x^2+x+1)$ dan $x^2-1=(x-1)(x+1)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\lim_{x \\to 1} \\frac{(x-1)(x^2+x+1)}{(x-1)(x+1)} = \\lim_{x \\to 1} \\frac{x^2+x+1}{x+1} = \\frac{3}{2}$$\nNilainya adalah $\\mathbf{\\frac{3}{2}}$ (Opsi A)."
        },
        {
          "id": "sma11-b4-16",
          "category": "Latihan",
          "difficulty": "Menengah",
          "question": "Nilai dari $\\lim_{x \\to 0} \\frac{3x^2 - 2x}{x}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "0"
            },
            {
              "key": "B",
              "text": "3"
            },
            {
              "key": "C",
              "text": "−2"
            },
            {
              "key": "D",
              "text": "1"
            }
          ],
          "correctAnswer": "C",
          "hint": "Faktorkan pembilang: $3x^2 - 2x = x(3x - 2)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\lim_{x \\to 0} \\frac{x(3x-2)}{x} = \\lim_{x \\to 0}(3x-2) = -2$$\nNilainya adalah **−2** (Opsi C)."
        },
        {
          "id": "sma11-b4-17",
          "category": "Tantangan",
          "difficulty": "Lanjut",
          "question": "Nilai dari $\\lim_{x \\to \\infty} \\frac{5x^2 - 3}{2x^2 + x - 1}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "5"
            },
            {
              "key": "B",
              "text": "$\\dfrac{5}{2}$"
            },
            {
              "key": "C",
              "text": "0"
            },
            {
              "key": "D",
              "text": "$\\infty$"
            }
          ],
          "correctAnswer": "B",
          "hint": "Derajat sama = 2. Ambil rasio koefisien tertinggi.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nLimit = $\\frac{5}{2}$ (rasio koefisien suku $x^2$) (Opsi B)."
        },
        {
          "id": "sma11-b4-18",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Nilai dari $\\lim_{x \\to 0} \\frac{x^3 + x^2}{x}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "1"
            },
            {
              "key": "B",
              "text": "0"
            },
            {
              "key": "C",
              "text": "2"
            },
            {
              "key": "D",
              "text": "tidak ada"
            }
          ],
          "correctAnswer": "B",
          "hint": "Faktorkan: $x^3 + x^2 = x^2(x+1)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\lim_{x \\to 0} \\frac{x^2(x+1)}{x} = \\lim_{x \\to 0} x(x+1) = 0$$\nNilainya adalah **0** (Opsi B)."
        },
        {
          "id": "sma11-b4-19",
          "category": "Tantangan",
          "difficulty": "Lanjut",
          "question": "Jika $f(x) = \\frac{x^2 - 9}{x - 3}$ untuk $x \\neq 3$ dan $f(3) = k$, agar $f$ kontinu di $x = 3$, nilai $k$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "6"
            },
            {
              "key": "B",
              "text": "3"
            },
            {
              "key": "C",
              "text": "9"
            },
            {
              "key": "D",
              "text": "0"
            }
          ],
          "correctAnswer": "A",
          "hint": "Agar kontinu di $x=3$, harus berlaku $f(3) = \\lim_{x\\to 3} f(x)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$\\lim_{x\\to 3} \\frac{(x-3)(x+3)}{x-3} = \\lim_{x\\to 3}(x+3) = 6$\nMaka $k = 6$ (Opsi A)."
        },
        {
          "id": "sma11-b4-20",
          "category": "Tantangan",
          "difficulty": "Lanjut",
          "question": "Nilai dari $\\lim_{x \\to 2} \\frac{x^2 - 4x + 4}{x^2 - 4}$ adalah...",
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
              "text": "$\\infty$"
            },
            {
              "key": "D",
              "text": "$\\dfrac{1}{4}$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Faktorkan: $x^2-4x+4=(x-2)^2$ dan $x^2-4=(x-2)(x+2)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{(x-2)^2}{(x-2)(x+2)} = \\frac{x-2}{x+2}$$\n$$\\lim_{x\\to 2} \\frac{x-2}{x+2} = \\frac{0}{4} = 0$$\nNilainya adalah **0** (Opsi A)."
        }
      ]
    },
    {
      "id": "sma11-bab5-turunan",
      "title": "Bab 5: Turunan Fungsi Aljabar dan Aplikasinya",
      "track": "LANJUT",
      "trackLabel": "Matematika Tingkat Lanjut (Pilihan)",
      "summary": {
        "overview": "Turunan fungsi adalah salah satu konsep terpenting dalam matematika modern dan menjadi bahasa utama ilmu fisika, teknik, ekonomi, dan biologi. Secara intuitif, turunan mengukur laju perubahan suatu kuantitas terhadap kuantitas lain. Kecepatan adalah turunan posisi terhadap waktu; akselerasi adalah turunan kecepatan; laju perubahan keuntungan suatu perusahaan adalah turunan fungsi keuntungan terhadap jumlah produksi.\n\nDalam bab ini, siswa mempelajari definisi turunan melalui konsep limit, aturan-aturan diferensiasi praktis (aturan pangkat, aturan perkalian, aturan pembagian), serta penerapan turunan untuk menentukan titik stasioner, nilai ekstrem (maksimum dan minimum), interval naik/turun fungsi, dan pemecahan masalah optimasi.",
        "coreConcepts": [
          "Definisi Turunan: $f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$. Juga dilambangkan $\\frac{dy}{dx}$, $y'$, atau $Df(x)$.",
          "Aturan Diferensiasi Dasar:\n- Konstanta: $\\frac{d}{dx}[c] = 0$\n- Pangkat: $\\frac{d}{dx}[x^n] = nx^{n-1}$\n- Penjumlahan: $[f+g]' = f' + g'$\n- Perkalian konstanta: $[cf]' = cf'$",
          "Aturan Perkalian (Product Rule): $[f \\cdot g]' = f'g + fg'$",
          "Aturan Pembagian (Quotient Rule): $\\left[\\frac{f}{g}\\right]' = \\frac{f'g - fg'}{g^2}$",
          "Titik Stasioner: Titik di mana $f'(x) = 0$. Jenisnya:\n- Titik maksimum lokal: $f'(x) = 0$ dan $f''(x) < 0$\n- Titik minimum lokal: $f'(x) = 0$ dan $f''(x) > 0$\n- Titik belok: $f''(x) = 0$",
          "Interval Naik/Turun: Fungsi naik di interval di mana $f'(x) > 0$, dan turun di mana $f'(x) < 0$."
        ],
        "workedExamples": [
          {
            "title": "Menentukan Turunan dan Titik Ekstrem",
            "problem": "Tentukan titik minimum dari fungsi $f(x) = x^3 - 3x^2 - 9x + 5$.",
            "solution": "Langkah 1: Cari turunan pertama:\n$$f'(x) = 3x^2 - 6x - 9$$\n\nLangkah 2: Tetapkan $f'(x) = 0$:\n$$3x^2 - 6x - 9 = 0 \\implies x^2 - 2x - 3 = 0 \\implies (x-3)(x+1) = 0$$\n$$x = 3 \\text{ atau } x = -1$$\n\nLangkah 3: Uji dengan turunan kedua $f''(x) = 6x - 6$:\n- Di $x = 3$: $f''(3) = 12 > 0$ → **minimum lokal**\n- Di $x = -1$: $f''(-1) = -12 < 0$ → maksimum lokal\n\nLangkah 4: Nilai minimum: $f(3) = 27 - 27 - 27 + 5 = -22$\nTitik minimum lokal berada di $(3, -22)$."
          },
          {
            "title": "Optimasi: Luas Maksimum",
            "problem": "Sebuah persegi panjang mempunyai keliling 40 cm. Tentukan dimensi agar luasnya maksimum.",
            "solution": "Langkah 1: Misalkan panjang $= p$ dan lebar $= l$. Keliling: $2(p + l) = 40 \\implies l = 20 - p$.\n\nLangkah 2: Fungsi luas: $L(p) = p \\cdot l = p(20 - p) = 20p - p^2$.\n\nLangkah 3: Turunkan dan tetapkan = 0:\n$$L'(p) = 20 - 2p = 0 \\implies p = 10$$\n$$L''(p) = -2 < 0 \\text{ (maksimum)}$$\n\nLangkah 4: $l = 20 - 10 = 10$, sehingga persegi panjang yang optimal adalah **persegi 10×10 cm** dengan luas **100 cm²**."
          }
        ],
        "keyFormulas": [
          {
            "label": "Aturan Pangkat",
            "formula": "\\frac{d}{dx}[x^n] = nx^{n-1}"
          },
          {
            "label": "Aturan Perkalian",
            "formula": "(f \\cdot g)' = f'g + fg'"
          },
          {
            "label": "Aturan Pembagian",
            "formula": "\\left(\\frac{f}{g}\\right)' = \\frac{f'g - fg'}{g^2}"
          },
          {
            "label": "Titik Stasioner",
            "formula": "f'(x) = 0"
          }
        ],
        "misconceptions": [
          "Mengira $(f \\cdot g)' = f' \\cdot g'$. Ini salah! Gunakan aturan perkalian: $(f \\cdot g)' = f'g + fg'$.",
          "Salah menentukan jenis titik stasioner — selalu uji dengan turunan kedua atau analisis tanda $f'$."
        ],
        "tutorTip": "Hafal: Aturan pangkat sangat mudah — turunkan eksponen jadi koefisien, lalu kurangi eksponen dengan 1. Contoh: $(5x^4)' = 20x^3$."
      },
      "questions": [
        {
          "id": "sma11-b5-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Turunan dari $f(x) = 3x^4 - 2x^2 + 5$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$12x^3 - 4x + 5$"
            },
            {
              "key": "B",
              "text": "$3x^3 - 2x$"
            },
            {
              "key": "C",
              "text": "$12x^3 - 4x$"
            },
            {
              "key": "D",
              "text": "$12x^4 - 4x^2$"
            }
          ],
          "correctAnswer": "C",
          "hint": "Terapkan aturan pangkat ke setiap suku: $\\frac{d}{dx}[ax^n] = nax^{n-1}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$f'(x) = 4 \\cdot 3x^3 - 2 \\cdot 2x + 0 = 12x^3 - 4x$$\nTurunannya adalah **$12x^3 - 4x$** (Opsi C)."
        },
        {
          "id": "sma11-b5-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Turunan dari $f(x) = (2x + 1)(x - 3)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$2x - 3$"
            },
            {
              "key": "B",
              "text": "$(2)(1)$"
            },
            {
              "key": "C",
              "text": "$4x + 5$"
            },
            {
              "key": "D",
              "text": "$4x - 5$"
            }
          ],
          "correctAnswer": "D",
          "hint": "Expand dulu: $f(x) = 2x^2 - 6x + x - 3 = 2x^2 - 5x - 3$, kemudian turunkan.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$f(x) = 2x^2 - 5x - 3$\n$$f'(x) = 4x - 5$$\nTurunannya adalah **$4x - 5$** (Opsi D)."
        },
        {
          "id": "sma11-b5-3",
          "category": "Latihan",
          "difficulty": "Menengah",
          "question": "Fungsi $f(x) = x^3 - 6x^2 + 9x + 1$ mencapai nilai maksimum lokal pada $x$ = ...",
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
              "text": "1"
            },
            {
              "key": "D",
              "text": "0"
            }
          ],
          "correctAnswer": "C",
          "hint": "Cari $f'(x) = 0$, kemudian uji dengan $f''(x)$. Jika $f''(x) < 0$, itu titik maksimum.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$f'(x) = 3x^2 - 12x + 9 = 3(x^2-4x+3) = 3(x-1)(x-3) = 0$\n$x = 1$ atau $x = 3$.\n$f''(x) = 6x - 12$:\n- $f''(1) = -6 < 0$ → **maksimum** di $x=1$\n- $f''(3) = 6 > 0$ → minimum di $x=3$\nMaksimum lokal pada **$x = 1$** (Opsi C)."
        },
        {
          "id": "sma11-b5-4",
          "category": "Latihan",
          "difficulty": "Menengah",
          "question": "Nilai minimum dari fungsi $f(x) = x^2 - 6x + 11$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "2"
            },
            {
              "key": "B",
              "text": "11"
            },
            {
              "key": "C",
              "text": "3"
            },
            {
              "key": "D",
              "text": "0"
            }
          ],
          "correctAnswer": "A",
          "hint": "$f'(x) = 2x - 6 = 0 \\implies x = 3$. Hitung $f(3)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$f'(x) = 2x - 6 = 0 \\implies x = 3$\n$f(3) = 9 - 18 + 11 = 2$\nNilai minimumnya adalah **2** (Opsi A)."
        },
        {
          "id": "sma11-b5-5",
          "category": "Latihan",
          "difficulty": "Menengah",
          "question": "Gradien garis singgung kurva $y = x^3 - 4x$ di titik $(2, 0)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "4"
            },
            {
              "key": "B",
              "text": "0"
            },
            {
              "key": "C",
              "text": "12"
            },
            {
              "key": "D",
              "text": "8"
            }
          ],
          "correctAnswer": "D",
          "hint": "Gradien garis singgung = $f'(x_0)$. Turunkan $y$ lalu substitusi $x = 2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$y' = 3x^2 - 4$\nDi $x = 2$: $y'(2) = 12 - 4 = 8$\nGradiennya adalah **8** (Opsi D)."
        },
        {
          "id": "sma11-b5-6",
          "category": "Tantangan",
          "difficulty": "Lanjut",
          "question": "Sebuah kotak tanpa tutup dibuat dari karton persegi berukuran 12 cm × 12 cm dengan memotong persegi kecil di setiap sudut. Volume maksimum kotak adalah...",
          "options": [
            {
              "key": "A",
              "text": "144 cm³"
            },
            {
              "key": "B",
              "text": "108 cm³"
            },
            {
              "key": "C",
              "text": "100 cm³"
            },
            {
              "key": "D",
              "text": "128 cm³"
            }
          ],
          "correctAnswer": "D",
          "hint": "Misalkan panjang sisi potongan = $x$. Volume: $V(x) = x(12-2x)^2$. Turunkan dan cari nilai $x$ yang memaksimalkan volume.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$V(x) = x(12-2x)^2 = x(144-48x+4x^2) = 144x - 48x^2 + 4x^3$\n$V'(x) = 144 - 96x + 12x^2 = 12(x^2 - 8x + 12) = 12(x-2)(x-6)$\n$V'(x) = 0 \\implies x = 2$ (valid) atau $x = 6$ (tidak valid, kotak habis)\n$V(2) = 2(12-4)^2 = 2 \\times 64 = 128\\text{ cm}^3$\nVolume maksimumnya adalah **128 cm³** (Opsi D)."
        },
        {
          "id": "sma11-b5-7",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Turunan dari $f(x) = 5x^3 - 4x + 7$ di titik $x = 1$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "8"
            },
            {
              "key": "B",
              "text": "11"
            },
            {
              "key": "C",
              "text": "15"
            },
            {
              "key": "D",
              "text": "5"
            }
          ],
          "correctAnswer": "B",
          "hint": "$f'(x) = 15x^2 - 4$. Substitusi $x = 1$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$f'(x) = 15x^2 - 4$\n$f'(1) = 15 - 4 = 11$\nNilainya adalah **11** (Opsi B)."
        },
        {
          "id": "sma11-b5-8",
          "category": "Latihan",
          "difficulty": "Menengah",
          "question": "Fungsi $f(x) = 2x^3 - 3x^2 - 12x + 4$ turun (decreasing) pada interval...",
          "options": [
            {
              "key": "A",
              "text": "$-1 < x < 2$"
            },
            {
              "key": "B",
              "text": "$x < -1$ atau $x > 2$"
            },
            {
              "key": "C",
              "text": "$-2 < x < 1$"
            },
            {
              "key": "D",
              "text": "$x > 2$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Fungsi turun saat $f'(x) < 0$. Cari $f'(x) = 0$ terlebih dahulu.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$f'(x) = 6x^2 - 6x - 12 = 6(x^2-x-2) = 6(x-2)(x+1)$\n$f'(x) < 0$ saat $-1 < x < 2$\nFungsi turun pada **$-1 < x < 2$** (Opsi A)."
        },
        {
          "id": "sma11-b5-9",
          "category": "Tantangan",
          "difficulty": "Lanjut",
          "question": "Turunan dari $f(x) = \\frac{x^2 + 1}{x - 1}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\dfrac{2x}{1}$"
            },
            {
              "key": "B",
              "text": "$\\dfrac{x^2 - 2x - 1}{(x-1)^2}$"
            },
            {
              "key": "C",
              "text": "$\\dfrac{x^2+1}{(x-1)^2}$"
            },
            {
              "key": "D",
              "text": "$\\dfrac{2x(x-1)}{x^2+1}$"
            }
          ],
          "correctAnswer": "B",
          "hint": "Gunakan aturan pembagian: $\\left(\\frac{f}{g}\\right)' = \\frac{f'g - fg'}{g^2}$ dengan $f = x^2+1$ dan $g = x-1$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$f'(x) = \\frac{2x(x-1) - (x^2+1)(1)}{(x-1)^2} = \\frac{2x^2-2x-x^2-1}{(x-1)^2} = \\frac{x^2-2x-1}{(x-1)^2}$\nTurunannya adalah $\\frac{x^2-2x-1}{(x-1)^2}$ (Opsi B)."
        },
        {
          "id": "sma11-b5-10",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Turunan dari $f(x) = x^5 - 3x^3 + 2x$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$5x^4 - 3x^2 + 2$"
            },
            {
              "key": "B",
              "text": "$x^4 - x^2 + 1$"
            },
            {
              "key": "C",
              "text": "$5x^4 - 9x^3 + 2$"
            },
            {
              "key": "D",
              "text": "$5x^4 - 9x^2 + 2$"
            }
          ],
          "correctAnswer": "D",
          "hint": "Terapkan aturan pangkat ke setiap suku secara terpisah.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$f'(x) = 5x^4 - 3 \\cdot 3x^2 + 2 = 5x^4 - 9x^2 + 2$\nTurunannya adalah **$5x^4 - 9x^2 + 2$** (Opsi D)."
        },
        {
          "id": "sma11-b5-11",
          "category": "Latihan",
          "difficulty": "Menengah",
          "question": "Persamaan garis singgung kurva $y = x^2 - 3x + 2$ di titik $(2, 0)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$y = 2x - 4$"
            },
            {
              "key": "B",
              "text": "$y = x + 2$"
            },
            {
              "key": "C",
              "text": "$y = x - 2$"
            },
            {
              "key": "D",
              "text": "$y = -x + 2$"
            }
          ],
          "correctAnswer": "C",
          "hint": "Gradien = $y'(2)$. Persamaan: $y - 0 = m(x - 2)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$y' = 2x - 3$; $y'(2) = 4 - 3 = 1$\nPersamaan: $y - 0 = 1(x-2) \\implies y = x - 2$\nPersamaannya adalah **$y = x - 2$** (Opsi C)."
        },
        {
          "id": "sma11-b5-12",
          "category": "Tantangan",
          "difficulty": "Lanjut",
          "question": "Suatu perusahaan memproduksi $x$ unit barang per hari dengan fungsi keuntungan $P(x) = -x^2 + 120x - 3000$. Keuntungan maksimum yang dapat diraih per hari adalah...",
          "options": [
            {
              "key": "A",
              "text": "Rp600"
            },
            {
              "key": "B",
              "text": "Rp3.600"
            },
            {
              "key": "C",
              "text": "Rp1.200"
            },
            {
              "key": "D",
              "text": "Rp9.000"
            }
          ],
          "correctAnswer": "A",
          "hint": "$P'(x) = -2x + 120 = 0 \\implies x = 60$. Hitung $P(60)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$P'(x) = -2x + 120 = 0 \\implies x = 60$\n$P(60) = -3600 + 7200 - 3000 = 600$\nKeuntungan maksimum adalah **Rp600** (Opsi A)."
        },
        {
          "id": "sma11-b5-13",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Turunan pertama dari $f(x) = \\sqrt{x} = x^{1/2}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\sqrt{x}$"
            },
            {
              "key": "B",
              "text": "$\\dfrac{1}{2\\sqrt{x}}$"
            },
            {
              "key": "C",
              "text": "$2\\sqrt{x}$"
            },
            {
              "key": "D",
              "text": "$\\dfrac{1}{\\sqrt{x}}$"
            }
          ],
          "correctAnswer": "B",
          "hint": "Gunakan aturan pangkat: $\\frac{d}{dx}[x^{1/2}] = \\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$f'(x) = \\frac{1}{2}x^{\\frac{1}{2}-1} = \\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}$\nTurunannya adalah $\\frac{1}{2\\sqrt{x}}$ (Opsi B)."
        },
        {
          "id": "sma11-b5-14",
          "category": "Latihan",
          "difficulty": "Menengah",
          "question": "Fungsi $f(x) = x^3 - 12x$ naik (increasing) pada interval...",
          "options": [
            {
              "key": "A",
              "text": "$-2 < x < 2$"
            },
            {
              "key": "B",
              "text": "$x < -2$ atau $x > 2$"
            },
            {
              "key": "C",
              "text": "$x > 2$"
            },
            {
              "key": "D",
              "text": "$x < 2$"
            }
          ],
          "correctAnswer": "B",
          "hint": "Fungsi naik saat $f'(x) > 0$. Cari titik stasioner dari $f'(x) = 3x^2 - 12 = 0$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$f'(x) = 3x^2 - 12 = 3(x^2-4) = 3(x-2)(x+2)$\n$f'(x) > 0$ saat $x < -2$ atau $x > 2$\nFungsi naik pada **$x < -2$ atau $x > 2$** (Opsi B)."
        },
        {
          "id": "sma11-b5-15",
          "category": "Tantangan",
          "difficulty": "Lanjut",
          "question": "Nilai stasioner dari $f(x) = 2x^3 - 9x^2 + 12x - 3$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$f(1) = 2$ dan $f(2) = 1$"
            },
            {
              "key": "B",
              "text": "$f(1) = 1$ dan $f(2) = 2$"
            },
            {
              "key": "C",
              "text": "$f(0) = -3$ dan $f(3) = 6$"
            },
            {
              "key": "D",
              "text": "Tidak ada titik stasioner"
            }
          ],
          "correctAnswer": "A",
          "hint": "$f'(x) = 6x^2 - 18x + 12 = 6(x-1)(x-2) = 0$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$f'(x) = 6x^2 - 18x + 12 = 6(x-1)(x-2) = 0$\n$x = 1$ atau $x = 2$\n$f(1) = 2 - 9 + 12 - 3 = 2$\n$f(2) = 16 - 36 + 24 - 3 = 1$\nNilai stasioner: **$f(1) = 2$ dan $f(2) = 1$** (Opsi A)."
        },
        {
          "id": "sma11-b5-16",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Jika $f(x) = x^3 + 2x^2 - 5x + 1$, maka $f'(2)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "11"
            },
            {
              "key": "B",
              "text": "15"
            },
            {
              "key": "C",
              "text": "7"
            },
            {
              "key": "D",
              "text": "3"
            }
          ],
          "correctAnswer": "B",
          "hint": "$f'(x) = 3x^2 + 4x - 5$. Substitusi $x = 2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$f'(x) = 3x^2 + 4x - 5$\n$f'(2) = 12 + 8 - 5 = 15$\nNilainya adalah **15** (Opsi B)."
        },
        {
          "id": "sma11-b5-17",
          "category": "Tantangan",
          "difficulty": "Lanjut",
          "question": "Sebuah peluru ditembakkan ke atas. Ketinggian peluru setelah $t$ detik adalah $h(t) = 80t - 5t^2$ meter. Ketinggian maksimum yang dicapai peluru adalah...",
          "options": [
            {
              "key": "A",
              "text": "320 m"
            },
            {
              "key": "B",
              "text": "160 m"
            },
            {
              "key": "C",
              "text": "400 m"
            },
            {
              "key": "D",
              "text": "80 m"
            }
          ],
          "correctAnswer": "A",
          "hint": "$h'(t) = 80 - 10t = 0 \\implies t = 8$. Hitung $h(8)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$h'(t) = 80 - 10t = 0 \\implies t = 8$ detik\n$h(8) = 80(8) - 5(64) = 640 - 320 = 320\\text{ m}$\nKetinggian maksimumnya adalah **320 m** (Opsi A)."
        },
        {
          "id": "sma11-b5-18",
          "category": "Latihan",
          "difficulty": "Menengah",
          "question": "Jika $g(x) = (x^2 + 1)(x - 2)$, maka $g'(x)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$2x(x-2)$"
            },
            {
              "key": "B",
              "text": "$x^2 + 1$"
            },
            {
              "key": "C",
              "text": "$3x^2 - 4x + 2$"
            },
            {
              "key": "D",
              "text": "$3x^2 - 4x + 1$"
            }
          ],
          "correctAnswer": "D",
          "hint": "Expand dulu: $g(x) = x^3 - 2x^2 + x - 2$, kemudian turunkan.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$g(x) = x^3 - 2x^2 + x - 2$\n$g'(x) = 3x^2 - 4x + 1$\nTurunannya adalah **$3x^2 - 4x + 1$** (Opsi D)."
        },
        {
          "id": "sma11-b5-19",
          "category": "Latihan",
          "difficulty": "Menengah",
          "question": "Turunan kedua dari $f(x) = x^4 - 2x^3 + x^2$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$4x^3 - 6x^2 + 2x$"
            },
            {
              "key": "B",
              "text": "$12x - 12$"
            },
            {
              "key": "C",
              "text": "$12x^2 - 12x + 2$"
            },
            {
              "key": "D",
              "text": "$24x - 12$"
            }
          ],
          "correctAnswer": "C",
          "hint": "Turunkan dua kali: $f'(x) = 4x^3 - 6x^2 + 2x$, kemudian $f''(x)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$f'(x) = 4x^3 - 6x^2 + 2x$\n$f''(x) = 12x^2 - 12x + 2$\nTurunan keduanya adalah **$12x^2 - 12x + 2$** (Opsi C)."
        },
        {
          "id": "sma11-b5-20",
          "category": "Tantangan",
          "difficulty": "Lanjut",
          "question": "Titik belok (inflection point) dari $f(x) = x^3 - 6x^2 + 12x - 8$ berada di $x$ = ...",
          "options": [
            {
              "key": "A",
              "text": "1"
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
              "text": "0"
            }
          ],
          "correctAnswer": "C",
          "hint": "Titik belok di mana $f''(x) = 0$. $f''(x) = 6x - 12 = 0$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$f'(x) = 3x^2 - 12x + 12$\n$f''(x) = 6x - 12 = 0 \\implies x = 2$\nTitik belok di **$x = 2$** (Opsi C)."
        }
      ]
    },
    {
      "id": "sma11-bab6-integral",
      "title": "Bab 6: Integral Tak Tentu dan Tentu Fungsi Aljabar",
      "track": "LANJUT",
      "trackLabel": "Matematika Tingkat Lanjut (Pilihan)",
      "summary": {
        "overview": "Integral adalah operasi invers dari turunan. Jika turunan mengurai fungsi posisi menjadi fungsi kecepatan, maka integral merangkai fungsi kecepatan kembali menjadi fungsi posisi. Integral digunakan untuk menghitung luas daerah di bawah kurva, volume benda putar, panjang busur, dan berbagai besaran fisika lainnya.\n\nAda dua jenis integral: **integral tak tentu** (antiderivatif, menghasilkan fungsi dengan konstanta $+C$) dan **integral tentu** (menghasilkan nilai numerik, dihitung menggunakan Teorema Fundamental Kalkulus $\\int_a^b f(x)\\,dx = F(b) - F(a)$).",
        "coreConcepts": [
          "Integral Tak Tentu: $\\int f(x)\\,dx = F(x) + C$, di mana $F'(x) = f(x)$ dan $C$ adalah konstanta integrasi sembarang.",
          "Aturan Integral Pangkat: $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C$ (untuk $n \\neq -1$)",
          "Sifat-sifat Integral:\n- $\\int [f(x) + g(x)]\\,dx = \\int f(x)\\,dx + \\int g(x)\\,dx$\n- $\\int cf(x)\\,dx = c\\int f(x)\\,dx$",
          "Integral Tentu: $\\int_a^b f(x)\\,dx = F(b) - F(a)$ (Teorema Fundamental Kalkulus). Hasilnya berupa bilangan konkret.",
          "Luas Daerah di bawah kurva $y=f(x)$ dari $x=a$ ke $x=b$ (di atas sumbu-$x$): $L = \\int_a^b f(x)\\,dx$. Jika kurva di bawah sumbu-$x$, ambil nilai absolutnya."
        ],
        "workedExamples": [
          {
            "title": "Integral Tak Tentu Polinomial",
            "problem": "Tentukan $\\int (3x^2 - 4x + 5)\\,dx$.",
            "solution": "Terapkan aturan pangkat ke setiap suku:\n$$\\int (3x^2 - 4x + 5)\\,dx = \\frac{3x^3}{3} - \\frac{4x^2}{2} + 5x + C = x^3 - 2x^2 + 5x + C$$"
          },
          {
            "title": "Integral Tentu dan Luas Daerah",
            "problem": "Hitung luas daerah yang dibatasi kurva $y = x^2 - 4$ dan sumbu-$x$ antara $x = -2$ dan $x = 2$.",
            "solution": "Di $[-2, 2]$, fungsi $y = x^2 - 4 \\leq 0$ (kurva di bawah sumbu-$x$).\n$$L = \\left|\\int_{-2}^{2} (x^2 - 4)\\,dx\\right| = \\left|\\left[\\frac{x^3}{3} - 4x\\right]_{-2}^{2}\\right|$$\n$$= \\left|\\left(\\frac{8}{3} - 8\\right) - \\left(\\frac{-8}{3} + 8\\right)\\right| = \\left|-\\frac{16}{3} - \\frac{16}{3}\\right| = \\frac{32}{3} \\text{ satuan luas}"
          }
        ],
        "keyFormulas": [
          {
            "label": "Integral Pangkat",
            "formula": "\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C"
          },
          {
            "label": "Integral Tentu (TFK)",
            "formula": "\\int_a^b f(x)\\,dx = F(b) - F(a)"
          },
          {
            "label": "Luas di bawah kurva",
            "formula": "L = \\int_a^b |f(x)|\\,dx"
          }
        ],
        "misconceptions": [
          "Lupa konstanta $+C$ pada integral tak tentu.",
          "Salah tanda ketika kurva berada di bawah sumbu-$x$ — selalu ambil nilai absolut dari hasil integral tentu untuk luas."
        ],
        "tutorTip": "Ingat: Integral adalah kebalikan dari turunan. Verifikasi jawabanmu dengan menurunkan hasil integrasimu — hasilnya harus kembali ke fungsi asal!"
      },
      "questions": [
        {
          "id": "sma11-b6-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Hasil dari $\\int (4x^3 - 2x + 3)\\,dx$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$12x^2 - 2 + C$"
            },
            {
              "key": "B",
              "text": "$x^4 - x^2 + C$"
            },
            {
              "key": "C",
              "text": "$x^4 - x^2 + 3x + C$"
            },
            {
              "key": "D",
              "text": "$4x^4 - 2x^2 + 3x + C$"
            }
          ],
          "correctAnswer": "C",
          "hint": "Terapkan $\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$ ke setiap suku.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\int (4x^3 - 2x + 3)\\,dx = x^4 - x^2 + 3x + C$$\nHasilnya adalah **$x^4 - x^2 + 3x + C$** (Opsi C)."
        },
        {
          "id": "sma11-b6-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Nilai dari $\\int_0^2 (2x + 1)\\,dx$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "4"
            },
            {
              "key": "B",
              "text": "8"
            },
            {
              "key": "C",
              "text": "2"
            },
            {
              "key": "D",
              "text": "6"
            }
          ],
          "correctAnswer": "D",
          "hint": "Integrasikan dulu: $F(x) = x^2 + x$. Lalu hitung $F(2) - F(0)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$F(x) = x^2 + x$\n$\\int_0^2 (2x+1)dx = F(2) - F(0) = (4+2) - 0 = 6$\nNilainya adalah **6** (Opsi D)."
        },
        {
          "id": "sma11-b6-3",
          "category": "Latihan",
          "difficulty": "Menengah",
          "question": "Hasil dari $\\int_1^3 (x^2 - 2x)\\,dx$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\dfrac{2}{3}$"
            },
            {
              "key": "B",
              "text": "4"
            },
            {
              "key": "C",
              "text": "0"
            },
            {
              "key": "D",
              "text": "$-\\dfrac{2}{3}$"
            }
          ],
          "correctAnswer": "A",
          "hint": "$F(x) = \\frac{x^3}{3} - x^2$. Hitung $F(3) - F(1)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$F(x) = \\frac{x^3}{3} - x^2$\n$F(3) = 9 - 9 = 0$\n$F(1) = \\frac{1}{3} - 1 = -\\frac{2}{3}$\n$\\int_1^3 = 0 - (-\\frac{2}{3}) = \\frac{2}{3}$"
        },
        {
          "id": "sma11-b6-4",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Hasil dari $\\int (6x^2 - 4x + 1)\\,dx$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$6x^3 - 4x^2 + x + C$"
            },
            {
              "key": "B",
              "text": "$12x - 4 + C$"
            },
            {
              "key": "C",
              "text": "$2x^3 - 2x^2 + C$"
            },
            {
              "key": "D",
              "text": "$2x^3 - 2x^2 + x + C$"
            }
          ],
          "correctAnswer": "D",
          "hint": "$\\int 6x^2 dx = 2x^3$, $\\int -4x dx = -2x^2$, $\\int 1 dx = x$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\int (6x^2 - 4x + 1)\\,dx = 2x^3 - 2x^2 + x + C$$\nHasilnya adalah **$2x^3 - 2x^2 + x + C$** (Opsi D)."
        },
        {
          "id": "sma11-b6-5",
          "category": "Latihan",
          "difficulty": "Menengah",
          "question": "Nilai dari $\\int_0^3 x^2\\,dx$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "27"
            },
            {
              "key": "B",
              "text": "9"
            },
            {
              "key": "C",
              "text": "3"
            },
            {
              "key": "D",
              "text": "6"
            }
          ],
          "correctAnswer": "B",
          "hint": "$F(x) = \\frac{x^3}{3}$. Hitung $F(3) - F(0) = 9 - 0 = 9$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$\\int_0^3 x^2 dx = \\left[\\frac{x^3}{3}\\right]_0^3 = \\frac{27}{3} - 0 = 9$\nNilainya adalah **9** (Opsi B)."
        },
        {
          "id": "sma11-b6-6",
          "category": "Tantangan",
          "difficulty": "Lanjut",
          "question": "Luas daerah yang dibatasi kurva $y = x^2$ dan garis $y = x + 2$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\dfrac{9}{2}$ satuan luas"
            },
            {
              "key": "B",
              "text": "$3$ satuan luas"
            },
            {
              "key": "C",
              "text": "$6$ satuan luas"
            },
            {
              "key": "D",
              "text": "$\\dfrac{4}{3}$ satuan luas"
            }
          ],
          "correctAnswer": "A",
          "hint": "Cari titik perpotongan: $x^2 = x+2 \\implies x^2-x-2=0 \\implies (x-2)(x+1)=0$. Integrasikan selisih dari $x=-1$ ke $x=2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nTitik potong: $x = -1$ dan $x = 2$.\n$L = \\int_{-1}^{2} [(x+2) - x^2]\\,dx = \\left[\\frac{x^2}{2} + 2x - \\frac{x^3}{3}\\right]_{-1}^{2}$\n$= (2 + 4 - \\frac{8}{3}) - (\\frac{1}{2} - 2 + \\frac{1}{3}) = \\frac{10}{3} - (-\\frac{7}{6}) = \\frac{20}{6} + \\frac{7}{6} = \\frac{27}{6} = \\frac{9}{2}$\nLuasnya adalah **$\\frac{9}{2}$ satuan luas** (Opsi A)."
        },
        {
          "id": "sma11-b6-7",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Jika $F'(x) = 3x^2 + 2x$ dan $F(0) = 5$, maka $F(1)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "7"
            },
            {
              "key": "B",
              "text": "5"
            },
            {
              "key": "C",
              "text": "8"
            },
            {
              "key": "D",
              "text": "10"
            }
          ],
          "correctAnswer": "A",
          "hint": "Integrasikan $F'(x)$ untuk mendapat $F(x) = x^3 + x^2 + C$. Gunakan $F(0) = 5$ untuk mencari $C$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$F(x) = x^3 + x^2 + C$\n$F(0) = C = 5$\n$F(1) = 1 + 1 + 5 = 7$\nNilainya adalah **7** (Opsi A)."
        },
        {
          "id": "sma11-b6-8",
          "category": "Latihan",
          "difficulty": "Menengah",
          "question": "Nilai dari $\\int_1^4 \\sqrt{x}\\,dx$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\dfrac{16}{3}$"
            },
            {
              "key": "B",
              "text": "$\\dfrac{14}{3}$"
            },
            {
              "key": "C",
              "text": "$2$"
            },
            {
              "key": "D",
              "text": "$\\dfrac{7}{3}$"
            }
          ],
          "correctAnswer": "B",
          "hint": "$\\int x^{1/2}\\,dx = \\frac{2}{3}x^{3/2} + C$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$\\int_1^4 x^{1/2}\\,dx = \\left[\\frac{2}{3}x^{3/2}\\right]_1^4 = \\frac{2}{3}(8) - \\frac{2}{3}(1) = \\frac{16}{3} - \\frac{2}{3} = \\frac{14}{3}$\nNilainya adalah $\\frac{14}{3}$ (Opsi B)."
        },
        {
          "id": "sma11-b6-9",
          "category": "Latihan",
          "difficulty": "Menengah",
          "question": "Nilai dari $\\int_0^1 (x^3 + x)\\,dx$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\dfrac{3}{4}$"
            },
            {
              "key": "B",
              "text": "1"
            },
            {
              "key": "C",
              "text": "$\\dfrac{1}{2}$"
            },
            {
              "key": "D",
              "text": "$\\dfrac{5}{4}$"
            }
          ],
          "correctAnswer": "A",
          "hint": "$F(x) = \\frac{x^4}{4} + \\frac{x^2}{2}$. Hitung $F(1) - F(0)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$\\int_0^1 (x^3+x)\\,dx = \\left[\\frac{x^4}{4}+\\frac{x^2}{2}\\right]_0^1 = \\frac{1}{4} + \\frac{1}{2} = \\frac{3}{4}$\nNilainya adalah $\\frac{3}{4}$ (Opsi A)."
        },
        {
          "id": "sma11-b6-10",
          "category": "Tantangan",
          "difficulty": "Lanjut",
          "question": "Luas daerah yang dibatasi oleh $y = 4 - x^2$ (di atas) dan sumbu-$x$ (di bawah) adalah...",
          "options": [
            {
              "key": "A",
              "text": "8 satuan luas"
            },
            {
              "key": "B",
              "text": "$\\dfrac{32}{3}$ satuan luas"
            },
            {
              "key": "C",
              "text": "16 satuan luas"
            },
            {
              "key": "D",
              "text": "$\\dfrac{16}{3}$ satuan luas"
            }
          ],
          "correctAnswer": "B",
          "hint": "Cari di mana $y=0$: $x = \\pm 2$. Integrasikan dari $-2$ ke $2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$L = \\int_{-2}^{2} (4-x^2)\\,dx = \\left[4x - \\frac{x^3}{3}\\right]_{-2}^{2}$\n$= (8 - \\frac{8}{3}) - (-8 + \\frac{8}{3}) = \\frac{16}{3} + \\frac{16}{3} = \\frac{32}{3}$\nLuasnya adalah $\\frac{32}{3}$ satuan luas (Opsi B)."
        },
        {
          "id": "sma11-b6-11",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "$\\int (5x^4 + 3x^2 - 7)\\,dx$ = ...",
          "options": [
            {
              "key": "A",
              "text": "$5x^5 + 3x^3 - 7x + C$"
            },
            {
              "key": "B",
              "text": "$20x^3 + 6x + C$"
            },
            {
              "key": "C",
              "text": "$x^5 + x^3 - 7x + C$"
            },
            {
              "key": "D",
              "text": "$x^5 + x^3 + C$"
            }
          ],
          "correctAnswer": "C",
          "hint": "Terapkan $\\int ax^n dx = \\frac{a}{n+1}x^{n+1} + C$ ke setiap suku.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$= x^5 + x^3 - 7x + C$ (Opsi C)."
        },
        {
          "id": "sma11-b6-12",
          "category": "Tantangan",
          "difficulty": "Lanjut",
          "question": "Nilai dari $\\int_0^2 (x-1)^2\\,dx$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "0"
            },
            {
              "key": "B",
              "text": "2"
            },
            {
              "key": "C",
              "text": "$\\dfrac{4}{3}$"
            },
            {
              "key": "D",
              "text": "$\\dfrac{2}{3}$"
            }
          ],
          "correctAnswer": "D",
          "hint": "Expand: $(x-1)^2 = x^2 - 2x + 1$, lalu integrasikan.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$\\int_0^2(x^2-2x+1)dx = [\\frac{x^3}{3}-x^2+x]_0^2 = (\\frac{8}{3}-4+2) - 0 = \\frac{8}{3} - 2 = \\frac{2}{3}$\nNilainya adalah $\\frac{2}{3}$ (Opsi D)."
        },
        {
          "id": "sma11-b6-13",
          "category": "Latihan",
          "difficulty": "Menengah",
          "question": "Jika $\\int_1^k x\\,dx = \\frac{15}{2}$, nilai $k$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "3"
            },
            {
              "key": "B",
              "text": "5"
            },
            {
              "key": "C",
              "text": "4"
            },
            {
              "key": "D",
              "text": "6"
            }
          ],
          "correctAnswer": "C",
          "hint": "$[\\frac{x^2}{2}]_1^k = \\frac{k^2}{2} - \\frac{1}{2} = \\frac{15}{2}$. Selesaikan untuk $k$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$\\frac{k^2-1}{2} = \\frac{15}{2} \\implies k^2-1=15 \\implies k^2=16 \\implies k=4$\nNilai $k$ adalah **4** (Opsi C)."
        },
        {
          "id": "sma11-b6-14",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "$\\int 8x^7\\,dx$ = ...",
          "options": [
            {
              "key": "A",
              "text": "$56x^6 + C$"
            },
            {
              "key": "B",
              "text": "$x^8 + C$"
            },
            {
              "key": "C",
              "text": "$8x^8 + C$"
            },
            {
              "key": "D",
              "text": "$x^7 + C$"
            }
          ],
          "correctAnswer": "B",
          "hint": "$\\int 8x^7 dx = \\frac{8}{8}x^8 + C = x^8 + C$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$\\frac{8}{7+1}x^{7+1} + C = x^8 + C$ (Opsi B)."
        },
        {
          "id": "sma11-b6-15",
          "category": "Tantangan",
          "difficulty": "Lanjut",
          "question": "Luas daerah yang diarsir antara $y = x^2 - 1$ dan $y = 3$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "8 satuan luas"
            },
            {
              "key": "B",
              "text": "$\\dfrac{16}{3}$ satuan luas"
            },
            {
              "key": "C",
              "text": "$\\dfrac{32}{3}$ satuan luas"
            },
            {
              "key": "D",
              "text": "12 satuan luas"
            }
          ],
          "correctAnswer": "C",
          "hint": "Cari perpotongan: $x^2-1=3 \\implies x=\\pm 2$. Integrasikan selisih dari $-2$ ke $2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$L = \\int_{-2}^{2} [3-(x^2-1)]dx = \\int_{-2}^{2}(4-x^2)dx$\n$= [4x-\\frac{x^3}{3}]_{-2}^{2} = (8-\\frac{8}{3})-(-8+\\frac{8}{3}) = \\frac{32}{3}$\nLuasnya adalah $\\frac{32}{3}$ satuan luas (Opsi C)."
        },
        {
          "id": "sma11-b6-16",
          "category": "Latihan",
          "difficulty": "Menengah",
          "question": "Nilai dari $\\int_2^5 (2x - 1)\\,dx$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "21"
            },
            {
              "key": "B",
              "text": "18"
            },
            {
              "key": "C",
              "text": "15"
            },
            {
              "key": "D",
              "text": "24"
            }
          ],
          "correctAnswer": "B",
          "hint": "$F(x) = x^2 - x$. $F(5) - F(2) = (25-5)-(4-2) = 20-2 = 18$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$[x^2-x]_2^5 = (25-5)-(4-2) = 20-2 = 18$ (Opsi B)."
        },
        {
          "id": "sma11-b6-17",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "$\\int (x^{-2})\\,dx$ = ...",
          "options": [
            {
              "key": "A",
              "text": "$-x^{-1} + C$"
            },
            {
              "key": "B",
              "text": "$-2x^{-3} + C$"
            },
            {
              "key": "C",
              "text": "$x^{-3} + C$"
            },
            {
              "key": "D",
              "text": "$\\frac{x^{-1}}{-1} + C$"
            }
          ],
          "correctAnswer": "A",
          "hint": "$\\int x^{-2}\\,dx = \\frac{x^{-1}}{-1} + C = -x^{-1} + C = -\\frac{1}{x} + C$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$\\int x^{-2}\\,dx = \\frac{x^{-2+1}}{-2+1} + C = -x^{-1} + C$ (Opsi A)."
        },
        {
          "id": "sma11-b6-18",
          "category": "Latihan",
          "difficulty": "Menengah",
          "question": "Nilai dari $\\int_0^\\pi x\\,dx$ jika batas atas diubah menjadi $x=2$ saja, yaitu $\\int_0^2 (3x^2)\\,dx$ = ...",
          "options": [
            {
              "key": "A",
              "text": "6"
            },
            {
              "key": "B",
              "text": "12"
            },
            {
              "key": "C",
              "text": "8"
            },
            {
              "key": "D",
              "text": "4"
            }
          ],
          "correctAnswer": "C",
          "hint": "$[x^3]_0^2 = 8 - 0 = 8$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$\\int_0^2 3x^2\\,dx = [x^3]_0^2 = 8 - 0 = 8$ (Opsi C)."
        },
        {
          "id": "sma11-b6-19",
          "category": "Tantangan",
          "difficulty": "Lanjut",
          "question": "Jika $f(x) \\geq 0$ di $[a,b]$ dan $\\int_a^b f(x)\\,dx = 10$, $\\int_a^c f(x)\\,dx = 4$ (dengan $a < c < b$), maka $\\int_c^b f(x)\\,dx$ = ...",
          "options": [
            {
              "key": "A",
              "text": "14"
            },
            {
              "key": "B",
              "text": "4"
            },
            {
              "key": "C",
              "text": "40"
            },
            {
              "key": "D",
              "text": "6"
            }
          ],
          "correctAnswer": "D",
          "hint": "Sifat additivitas: $\\int_a^b = \\int_a^c + \\int_c^b$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$\\int_a^b = \\int_a^c + \\int_c^b \\implies 10 = 4 + \\int_c^b \\implies \\int_c^b = 6$ (Opsi D)."
        },
        {
          "id": "sma11-b6-20",
          "category": "Tantangan",
          "difficulty": "Lanjut",
          "question": "Volume benda putar yang terbentuk saat daerah yang dibatasi $y = \\sqrt{x}$, $x = 4$, dan sumbu-$x$ diputar terhadap sumbu-$x$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$4\\pi$ satuan volume"
            },
            {
              "key": "B",
              "text": "$16\\pi$ satuan volume"
            },
            {
              "key": "C",
              "text": "$2\\pi$ satuan volume"
            },
            {
              "key": "D",
              "text": "$8\\pi$ satuan volume"
            }
          ],
          "correctAnswer": "D",
          "hint": "Volume putar = $\\pi \\int_0^4 [f(x)]^2\\,dx = \\pi \\int_0^4 x\\,dx$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$V = \\pi \\int_0^4 x\\,dx = \\pi [\\frac{x^2}{2}]_0^4 = \\pi \\cdot 8 = 8\\pi$\nVolumenya adalah **$8\\pi$ satuan volume** (Opsi D)."
        }
      ]
    }
  ]
};
