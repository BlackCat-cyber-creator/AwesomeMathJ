/**
 * Data Kurikulum Kelas 11 SMA (Fase F)
 * 3 Bab Utama Wajib Resmi Sesuai Buku Siswa Matematika
 */

export const grade11Data = {
  "grade": 11,
  "level": "SMA",
  "phase": "Fase F",
  "description": "Komposisi Fungsi & Fungsi Invers, Lingkaran (Garis Singgung & Tali Busur), serta Statistika Bivariat (Diagram Pencar & Regresi Linear)",
  "chapters": [
    {
      "id": "sma11-bab1-fungsi-invers",
      "title": "Bab 1: Komposisi Fungsi dan Fungsi Invers",
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
              "text": "7"
            },
            {
              "key": "B",
              "text": "5"
            },
            {
              "key": "C",
              "text": "2"
            },
            {
              "key": "D",
              "text": "9"
            }
          ],
          "correctAnswer": "A",
          "hint": "Hitung terlebih dahulu luaran fungsi dalam yaitu $g(2)$, lalu masukkan hasilnya sebagai masukan fungsi luar $f$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Hitung nilai fungsi dalam $g(2)$:\n$$g(2) = (2)^2 + 1 = 4 + 1 = 5$$\n2. Masukkan hasil tersebut ke dalam fungsi luar $f$:\n$$(f \\circ g)(2) = f(g(2)) = f(5) = 2(5) - 3 = 10 - 3 = 7$$\nJadi, nilai dari $(f \\circ g)(2)$ adalah **7** (Opsi A)."
        },
        {
          "id": "sma11-b1-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Jika $f(x) = 3x + 7$, maka rumus fungsi invers $f^{-1}(x)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\frac{x - 7}{3}$"
            },
            {
              "key": "B",
              "text": "$\\frac{x + 7}{3}$"
            },
            {
              "key": "C",
              "text": "$3x - 7$"
            },
            {
              "key": "D",
              "text": "$\\frac{7 - x}{3}$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Misalkan $y = 3x + 7$, lalu nyatakan variabel $x$ secara eksplisit dalam bentuk $y$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Misalkan $y = f(x) = 3x + 7$\n2. Pindahkan konstanta 7 ke ruas kiri:\n$$y - 7 = 3x$$\n3. Bagi kedua ruas dengan 3:\n$$x = \\frac{y - 7}{3}$$\n4. Ubah variabel $y$ kembali menjadi $x$ untuk notasi invers:\n$$f^{-1}(x) = \\frac{x - 7}{3}$$\nJadi, invers fungsinya adalah **$\\frac{x - 7}{3}$** (Opsi A)."
        },
        {
          "id": "sma11-b1-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Invers dari fungsi pecahan linear $f(x) = \\frac{3x - 2}{5x + 4}$ dengan $x \\neq -\\frac{4}{5}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$f^{-1}(x) = \\frac{-4x - 2}{5x - 3}$"
            },
            {
              "key": "B",
              "text": "$f^{-1}(x) = \\frac{4x - 2}{5x + 3}$"
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
          "correctAnswer": "A",
          "hint": "Gunakan trik praktis: untuk $f(x) = \\frac{ax+b}{cx+d}$, fungsi inversnya adalah $f^{-1}(x) = \\frac{-dx+b}{cx-a}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Identifikasi koefisien pada $f(x) = \\frac{ax + b}{cx + d}$:\n$$a = 3, \\quad b = -2, \\quad c = 5, \\quad d = 4$$\n2. Terapkan rumus invers pecahan linear:\n$$f^{-1}(x) = \\frac{-dx + b}{cx - a}$$\n3. Masukkan nilai koefisien:\n$$f^{-1}(x) = \\frac{-(4)x + (-2)}{5x - 3} = \\frac{-4x - 2}{5x - 3}$$\nJadi, invers fungsinya adalah **$f^{-1}(x) = \\frac{-4x - 2}{5x - 3}$** (Opsi A)."
        },
        {
          "id": "sma11-b1-4",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Diketahui $f(x) = 2x + 1$ dan $(f \\circ g)(x) = 4x^2 - 6x + 5$. Rumus fungsi $g(x)$ yang memenuhi adalah...",
          "options": [
            {
              "key": "A",
              "text": "$2x^2 - 3x + 2$"
            },
            {
              "key": "B",
              "text": "$2x^2 - 3x + 4$"
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
          "correctAnswer": "A",
          "hint": "Tuliskan definisi komposisi: $f(g(x)) = 2(g(x)) + 1$, lalu samakan dengan $4x^2 - 6x + 5$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Berdasarkan definisi fungsi komposisi:\n$$(f \\circ g)(x) = f(g(x)) = 2g(x) + 1$$\n2. Samakan dengan bentuk yang diketahui pada soal:\n$$2g(x) + 1 = 4x^2 - 6x + 5$$\n3. Kurangkan kedua ruas dengan 1:\n$$2g(x) = 4x^2 - 6x + 4$$\n4. Bagi kedua ruas dengan 2:\n$$g(x) = \\frac{4x^2 - 6x + 4}{2} = 2x^2 - 3x + 2$$\nJadi, rumus fungsi $g(x)$ adalah **$2x^2 - 3x + 2$** (Opsi A)."
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
              "text": "6x + 3"
            },
            {
              "key": "B",
              "text": "6x + 14"
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
          "correctAnswer": "A",
          "hint": "Substitusikan $g(x)$ ke dalam $f(x)$: $(f \\circ g)(x) = f(g(x)) = 2(3x - 1) + 5$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$(f \\circ g)(x) = 2(3x - 1) + 5 = 6x - 2 + 5 = 6x + 3$$\nRumusnya adalah **$6x + 3$** (Opsi A)."
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
              "text": "\\frac{x + 7}{3}"
            },
            {
              "key": "B",
              "text": "\\frac{x - 7}{3}"
            },
            {
              "key": "C",
              "text": "3x + 7"
            },
            {
              "key": "D",
              "text": "\\frac{7 - x}{3}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Misalkan $y = 3x - 7$, lalu nyatakan $x$ dalam bentuk $y$: $x = \\frac{y + 7}{3}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$y = 3x - 7 \\implies 3x = y + 7 \\implies x = \\frac{y + 7}{3}$$\nInversnya adalah **$f^{-1}(x) = \\frac{x + 7}{3}$** (Opsi A)."
        },
        {
          "id": "sma11-b1-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Invers dari fungsi rasional $f(x) = \\frac{2x + 1}{x - 3}$, untuk $x \\neq 3$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{3x + 1}{x - 2}, x \\neq 2"
            },
            {
              "key": "B",
              "text": "\\frac{3x - 1}{x + 2}, x \\neq -2"
            },
            {
              "key": "C",
              "text": "\\frac{2x - 1}{x + 3}, x \\neq -3"
            },
            {
              "key": "D",
              "text": "\\frac{-3x + 1}{x - 2}, x \\neq 2"
            }
          ],
          "correctAnswer": "A",
          "hint": "Rumus cepat invers $f(x) = \\frac{ax + b}{cx + d} \\implies f^{-1}(x) = \\frac{-dx + b}{cx - a}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nDengan $a = 2, b = 1, c = 1, d = -3$:\n$$f^{-1}(x) = \\frac{-(-3)x + 1}{1x - 2} = \\frac{3x + 1}{x - 2}, \\quad x \\neq 2$$ (Opsi A)."
        },
        {
          "id": "sma11-b1-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Diketahui $(f \\circ g)(x) = 4x + 6$ dan $f(x) = 2x - 4$. Rumus fungsi $g(x)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "2x + 5"
            },
            {
              "key": "B",
              "text": "2x + 1"
            },
            {
              "key": "C",
              "text": "2x - 5"
            },
            {
              "key": "D",
              "text": "4x + 10"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan $f(g(x)) = 2g(x) - 4 = 4x + 6 \\implies 2g(x) = 4x + 10$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$2g(x) - 4 = 4x + 6 \\implies 2g(x) = 4x + 10 \\implies g(x) = 2x + 5$$ (Opsi A)."
        },
        {
          "id": "sma11-b1-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Diketahui $(f \\circ g)(x) = 2x^2 - 6x + 1$ dan $g(x) = x - 2$. Nilai dari $f(1)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "1"
            },
            {
              "key": "B",
              "text": "-3"
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
          "correctAnswer": "A",
          "hint": "Untuk mencari $f(1)$, cari $x$ sehingga $g(x) = 1 \\implies x - 2 = 1 \\implies x = 3$. Lalu hitung $(f \\circ g)(3)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $g(x) = 1 \\implies x = 3$\n2. $f(1) = (f \\circ g)(3) = 2(3^2) - 6(3) + 1 = 18 - 18 + 1 = 1$ (Opsi A)."
        },
        {
          "id": "sma11-b1-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah pabrik kertas memproses kayu melalui dua tahap. Tahap I menghasilkan bubur kertas $m = f(x) = 0{,}8x - 10$ (dalam ton). Tahap II menghasilkan kertas siap jual $g(m) = 0{,}6m - 5$. Jika tersedia 100 ton kayu, berapa ton kertas siap jual yang dihasilkan?",
          "options": [
            {
              "key": "A",
              "text": "37 ton"
            },
            {
              "key": "B",
              "text": "35 ton"
            },
            {
              "key": "C",
              "text": "42 ton"
            },
            {
              "key": "D",
              "text": "39 ton"
            }
          ],
          "correctAnswer": "A",
          "hint": "Hitung $m = f(100) = 0{,}8(100) - 10 = 70$ ton. Lalu $g(70) = 0{,}6(70) - 5 = 42 - 5 = 37$ ton.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $m = 0{,}8(100) - 10 = 70\\text{ ton}$\n2. $g(70) = 0{,}6(70) - 5 = 37\\text{ ton}$ (Opsi A)."
        },
        {
          "id": "sma11-b1-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jika $f(x) = \\frac{x}{x + 1}$ untuk $x \\neq -1$, maka nilai dari $f^{-1}\\left(\\frac{1}{2}\\right)$ adalah...",
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
              "text": "\\frac{1}{3}"
            },
            {
              "key": "D",
              "text": "-1"
            }
          ],
          "correctAnswer": "A",
          "hint": "Misalkan $f(x) = \\frac{1}{2} \\implies \\frac{x}{x + 1} = \\frac{1}{2} \\implies 2x = x + 1 \\implies x = 1$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{x}{x + 1} = \\frac{1}{2} \\implies 2x = x + 1 \\implies x = 1$$\nNilainya adalah **1** (Opsi A)."
        },
        {
          "id": "sma11-b1-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Diketahui $f(x) = 3x - 2$ dan $g(x) = x + 4$. Rumus fungsi $(f \\circ g)^{-1}(x)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{x - 10}{3}"
            },
            {
              "key": "B",
              "text": "\\frac{x + 10}{3}"
            },
            {
              "key": "C",
              "text": "\\frac{x + 2}{3}"
            },
            {
              "key": "D",
              "text": "\\frac{x - 2}{3}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Tentukan $(f \\circ g)(x) = 3(x + 4) - 2 = 3x + 10$. Inversnya adalah $\\frac{x - 10}{3}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $(f \\circ g)(x) = 3x + 12 - 2 = 3x + 10$\n2. Invers: $y = 3x + 10 \\implies x = \\frac{y - 10}{3}$ (Opsi A)."
        },
        {
          "id": "sma11-b1-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jika $f(x) = 2x + 1$ dan $(f \\circ g)(x) = 2x^2 + 4x + 1$, maka rumus $g(x)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "x² + 2x"
            },
            {
              "key": "B",
              "text": "x² + 4x"
            },
            {
              "key": "C",
              "text": "2x² + 4x"
            },
            {
              "key": "D",
              "text": "x² - 2x"
            }
          ],
          "correctAnswer": "A",
          "hint": "$2g(x) + 1 = 2x^2 + 4x + 1 \\implies 2g(x) = 2x^2 + 4x \\implies g(x) = x^2 + 2x$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$2g(x) + 1 = 2x^2 + 4x + 1 \\implies g(x) = x^2 + 2x$$ (Opsi A)."
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
              "text": "\\frac{x}{x - 1}"
            },
            {
              "key": "B",
              "text": "x"
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
          "correctAnswer": "A",
          "hint": "$(f \\circ f)(x) = \\frac{\\frac{x}{x-1}}{\\frac{x}{x-1} - 1} = \\frac{x}{x - (x - 1)} = x$. Maka $(f \\circ f \\circ f)(x) = f(x) = \\frac{x}{x - 1}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $(f \\circ f)(x) = x$ (fungsi identitas)\n2. $(f \\circ f \\circ f)(x) = f(x) = \\frac{x}{x - 1}$ (Opsi A)."
        },
        {
          "id": "sma11-b1-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Suatu fungsi memenuhi $f(2x + 1) = \\frac{4x + 3}{2x - 1}$. Rumus $f(x)$ untuk $x \\neq 2$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{2x + 1}{x - 2}"
            },
            {
              "key": "B",
              "text": "\\frac{2x - 1}{x - 2}"
            },
            {
              "key": "C",
              "text": "\\frac{x + 2}{x - 1}"
            },
            {
              "key": "D",
              "text": "\\frac{4x - 1}{2x - 3}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Misalkan $u = 2x + 1 \\implies 2x = u - 1$. Substitusikan ke pembilang $2(u - 1) + 3 = 2u + 1$ dan penyebut $(u - 1) - 1 = u - 2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$f(u) = \\frac{2(u - 1) + 3}{(u - 1) - 1} = \\frac{2u + 1}{u - 2} \\implies f(x) = \\frac{2x + 1}{x - 2}$$ (Opsi A)."
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
              "text": "$42^\\circ$"
            },
            {
              "key": "B",
              "text": "$168^\\circ$"
            },
            {
              "key": "C",
              "text": "$84^\\circ$"
            },
            {
              "key": "D",
              "text": "$96^\\circ$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Sudut keliling sama dengan setengah dari sudut pusat jika keduanya menghadap busur yang sama.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Teorema hubungan sudut:\n$$\\angle \\text{keliling} = \\frac{1}{2} \\times \\angle \\text{pusat}$$\n2. Substitusikan nilai sudut pusat yang diketahui:\n$$\\angle ACB = \\frac{1}{2} \\times 84^\\circ = 42^\\circ$$\nJadi, besar sudut keliling $\\angle ACB$ adalah **$42^\\circ$** (Opsi A)."
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
              "text": "$102^\\circ$ dan $75^\\circ$"
            },
            {
              "key": "B",
              "text": "$75^\\circ$ dan $102^\\circ$"
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
          "correctAnswer": "A",
          "hint": "Pada segiempat tali busur, $\\angle K$ berhadapan dengan $\\angle M$ (jumlah $180^\\circ$) dan $\\angle L$ berhadapan dengan $\\angle N$ (jumlah $180^\\circ$).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Sudut $\\angle K$ berhadapan dengan $\\angle M$:\n$$\\angle K + \\angle M = 180^\\circ \\implies \\angle M = 180^\\circ - 78^\\circ = 102^\\circ$$\n2. Sudut $\\angle L$ berhadapan dengan $\\angle N$:\n$$\\angle L + \\angle N = 180^\\circ \\implies \\angle N = 180^\\circ - 105^\\circ = 75^\\circ$$\nJadi, besar sudut $\\angle M$ dan $\\angle N$ berturut-turut adalah **$102^\\circ$ dan $75^\\circ$** (Opsi A)."
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
              "text": "$24\\text{ cm}$"
            },
            {
              "key": "B",
              "text": "$20\\text{ cm}$"
            },
            {
              "key": "C",
              "text": "$25\\text{ cm}$"
            },
            {
              "key": "D",
              "text": "$18\\text{ cm}$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Garis singgung dalam menjumlahkan jari-jari: $(R + r) = 7 + 3 = 10$. Lalu hitung $\\sqrt{26^2 - 10^2}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Identifikasi parameter: $R = 7\\text{ cm}$, $r = 3\\text{ cm}$, $p = 26\\text{ cm}$.\n2. Hitung jumlah jari-jari: $R + r = 7 + 3 = 10\\text{ cm}$.\n3. Gunakan rumus GSPD:\n$$d_D = \\sqrt{p^2 - (R + r)^2} = \\sqrt{26^2 - 10^2} = \\sqrt{676 - 100} = \\sqrt{576} = 24\\text{ cm}$$\nJadi, panjang garis singgung persekutuan dalam adalah **$24\\text{ cm}$** (Opsi A)."
        },
        {
          "id": "sma11-b2-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Besar sudut keliling yang menghadap busur yang sama dengan sudut pusat $80^\\circ$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "40°"
            },
            {
              "key": "B",
              "text": "160°"
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
          "correctAnswer": "A",
          "hint": "Besar sudut keliling sama dengan setengah dari besar sudut pusat: $\\frac{1}{2} \\times 80^\\circ = 40^\\circ$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\angle \\text{keliling} = \\frac{1}{2} \\times \\angle \\text{pusat} = \\frac{1}{2} \\times 80^\\circ = 40^\\circ$$ (Opsi A)."
        },
        {
          "id": "sma11-b2-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Besar sudut keliling yang menghadap diameter lingkaran selalu sama dengan...",
          "options": [
            {
              "key": "A",
              "text": "90°"
            },
            {
              "key": "B",
              "text": "180°"
            },
            {
              "key": "C",
              "text": "60°"
            },
            {
              "key": "D",
              "text": "45°"
            }
          ],
          "correctAnswer": "A",
          "hint": "Diameter membentuk sudut pusat $180^\\circ$, sehingga sudut kelilingnya adalah $\\frac{1}{2} \\times 180^\\circ = 90^\\circ$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nSudut keliling menghadap diameter selalu **$90^\\circ$ (siku-siku)** (Opsi A)."
        },
        {
          "id": "sma11-b2-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Pada segiempat tali busur $ABCD$, besar $\\angle A = 75^\\circ$. Besar sudut yang berhadapan yaitu $\\angle C$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "105°"
            },
            {
              "key": "B",
              "text": "75°"
            },
            {
              "key": "C",
              "text": "115°"
            },
            {
              "key": "D",
              "text": "125°"
            }
          ],
          "correctAnswer": "A",
          "hint": "Jumlah dua sudut yang saling berhadapan pada segiempat tali busur selalu $180^\\circ$: $\\angle C = 180^\\circ - 75^\\circ = 105^\\circ$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\angle A + \\angle C = 180^\\circ \\implies \\angle C = 180^\\circ - 75^\\circ = 105^\\circ$$ (Opsi A)."
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
              "text": "154 cm²"
            },
            {
              "key": "B",
              "text": "308 cm²"
            },
            {
              "key": "C",
              "text": "77 cm²"
            },
            {
              "key": "D",
              "text": "616 cm²"
            }
          ],
          "correctAnswer": "A",
          "hint": "Luas juring $= \\frac{\\theta}{360^\\circ} \\times \\pi r^2 = \\frac{90}{360} \\times \\frac{22}{7} \\times 196 = \\frac{1}{4} \\times 616 = 154$ cm².",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$L_j = \\frac{1}{4} \\times 616 = 154\\text{ cm}^2$$ (Opsi A)."
        },
        {
          "id": "sma11-b2-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Panjang busur lingkaran yang memiliki sudut pusat $60^\\circ$ dan jari-jari 21 cm dengan $\\pi = \\frac{22}{7}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "22 cm"
            },
            {
              "key": "B",
              "text": "44 cm"
            },
            {
              "key": "C",
              "text": "11 cm"
            },
            {
              "key": "D",
              "text": "33 cm"
            }
          ],
          "correctAnswer": "A",
          "hint": "Panjang busur $= \\frac{60}{360} \\times 2\\pi r = \\frac{1}{6} \\times 2 \\times \\frac{22}{7} \\times 21 = \\frac{1}{6} \\times 132 = 22$ cm.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$s = \\frac{1}{6} \\times 132 = 22\\text{ cm}$$ (Opsi A)."
        },
        {
          "id": "sma11-b2-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Luas tembereng lingkaran dengan sudut pusat $90^\\circ$ dan jari-jari 10 cm dengan $\\pi = 3{,}14$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "28,5 cm²"
            },
            {
              "key": "B",
              "text": "50 cm²"
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
          "correctAnswer": "A",
          "hint": "Luas juring $= \\frac{1}{4} \\times 3{,}14 \\times 100 = 78{,}5$ cm². Luas segitiga $= \\frac{1}{2} \\times 10 \\times 10 = 50$ cm². Luas tembereng $= 78{,}5 - 50 = 28{,}5$ cm².",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$L_{\\text{tembereng}} = 78{,}5 - 50 = 28{,}5\\text{ cm}^2$$ (Opsi A)."
        },
        {
          "id": "sma11-b2-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Pada lingkaran dengan pusat $O$, titik $A, B, C$ terletak pada lingkaran. Jika $\\angle AOB = 110^\\circ$ dan $\\angle BOC = 130^\\circ$, maka besar sudut keliling $\\angle ABC$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "60°"
            },
            {
              "key": "B",
              "text": "120°"
            },
            {
              "key": "C",
              "text": "55°"
            },
            {
              "key": "D",
              "text": "65°"
            }
          ],
          "correctAnswer": "A",
          "hint": "Sudut pusat $\\angle AOC = 360^\\circ - (110^\\circ + 130^\\circ) = 360^\\circ - 240^\\circ = 120^\\circ$. Sudut keliling $= \\frac{1}{2} \\times 120^\\circ = 60^\\circ$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\angle AOC = 120^\\circ \\implies \\angle ABC = \\frac{1}{2} \\times 120^\\circ = 60^\\circ$$ (Opsi A)."
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
              "text": "30"
            },
            {
              "key": "B",
              "text": "25"
            },
            {
              "key": "C",
              "text": "35"
            },
            {
              "key": "D",
              "text": "40"
            }
          ],
          "correctAnswer": "A",
          "hint": "$\\angle P + \\angle R = 180^\\circ \\implies 5x + 30 = 180 \\implies 5x = 150 \\implies x = 30$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$(2x + 10) + (3x + 20) = 180 \\implies 5x = 150 \\implies x = 30$$ (Opsi A)."
        },
        {
          "id": "sma11-b2-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dua tali busur $AB$ dan $CD$ berpotongan di dalam lingkaran pada titik $E$. Jika $AE = 6$ cm, $EB = 8$ cm, dan $CE = 4$ cm, panjang ruas garis $ED$ adalah...",
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
              "text": "9 cm"
            },
            {
              "key": "D",
              "text": "14 cm"
            }
          ],
          "correctAnswer": "A",
          "hint": "Teorema perpotongan tali busur: $AE \\times EB = CE \\times ED \\implies 6 \\times 8 = 4 \\times ED \\implies ED = 12$ cm.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$ED = \\frac{6 \\times 8}{4} = 12\\text{ cm}$$ (Opsi A)."
        },
        {
          "id": "sma11-b2-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dari sebuah titik $P$ di luar lingkaran ditarik garis singgung $PT$ sepanjang 12 cm dan garis potong $PAB$ dengan $PA = 8$ cm. Panjang tali busur $AB$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "10 cm"
            },
            {
              "key": "B",
              "text": "18 cm"
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
          "correctAnswer": "A",
          "hint": "Teorema garis singgung dan garis potong: $PT^2 = PA \\times PB \\implies 144 = 8 \\times PB \\implies PB = 18$ cm. Maka $AB = PB - PA = 18 - 8 = 10$ cm.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $PB = \\frac{144}{8} = 18\\text{ cm}$\n2. $AB = 18 - 8 = 10\\text{ cm}$ (Opsi A)."
        },
        {
          "id": "sma11-b2-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Diketahui persamaan lingkaran $x^2 + y^2 = 25$. Persamaan garis singgung lingkaran tersebut yang melalui titik $P(3, 4)$ pada lingkaran adalah...",
          "options": [
            {
              "key": "A",
              "text": "3x + 4y = 25"
            },
            {
              "key": "B",
              "text": "4x + 3y = 25"
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
          "correctAnswer": "A",
          "hint": "Rumus bagi adil: $x_1 x + y_1 y = r^2 \\implies 3x + 4y = 25$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$3x + 4y = 25$$ (Opsi A)."
        },
        {
          "id": "sma11-b2-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Titik pusat dan jari-jari lingkaran dengan persamaan $x^2 + y^2 - 6x + 8y - 11 = 0$ berturut-turut adalah...",
          "options": [
            {
              "key": "A",
              "text": "P(3, -4) dan r = 6"
            },
            {
              "key": "B",
              "text": "P(-3, 4) dan r = 6"
            },
            {
              "key": "C",
              "text": "P(3, -4) dan r = 36"
            },
            {
              "key": "D",
              "text": "P(-3, 4) dan r = 5"
            }
          ],
          "correctAnswer": "A",
          "hint": "Pusat: $(-\\frac{A}{2}, -\\frac{B}{2}) = (3, -4)$. Jari-jari: $r = \\sqrt{3^2 + (-4)^2 - (-11)} = \\sqrt{9 + 16 + 11} = \\sqrt{36} = 6$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Pusat $= (-\\frac{-6}{2}, -\\frac{8}{2}) = (3, -4)$\n2. Jari-jari $= \\sqrt{9 + 16 + 11} = \\sqrt{36} = 6$ (Opsi A)."
        }
      ]
    },
    {
      "id": "sma11-bab3-statistika-bivariat",
      "title": "Bab 3: Statistika (Diagram Pencar & Regresi Linear)",
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
              "text": "Korelasi positif"
            },
            {
              "key": "B",
              "text": "Korelasi negatif"
            },
            {
              "key": "C",
              "text": "Tidak berkorelasi"
            },
            {
              "key": "D",
              "text": "Korelasi konstan"
            }
          ],
          "correctAnswer": "A",
          "hint": "Ketika kedua variabel bergerak searah (keduanya sama-sama bertambah nilainya), korelasinya bernilai positif.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nKetika peningkatan nilai variabel $x$ diikuti secara teratur oleh peningkatan nilai variabel $y$, titik-titik pada diagram pencar membentuk pola naik dari kiri ke kanan. Hubungan ini dinamakan **korelasi positif** (Opsi A)."
        },
        {
          "id": "sma11-b3-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Interval nilai koefisien korelasi Pearson ($r$) yang mungkin dalam analisis statistika bivariat adalah...",
          "options": [
            {
              "key": "A",
              "text": "$-1 \\le r \\le 1$"
            },
            {
              "key": "B",
              "text": "$0 \\le r \\le 1$"
            },
            {
              "key": "C",
              "text": "$-1 < r < 0$"
            },
            {
              "key": "D",
              "text": "$r \\ge 0$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Korelasi dapat bernilai negatif sempurna, nol, hingga positif sempurna.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nKoefisien korelasi Pearson dinormalisasi sehingga berada dalam rentang tertutup **$-1 \\le r \\le 1$**. Nilai $-1$ menyatakan korelasi negatif sempurna dan $+1$ menyatakan korelasi positif sempurna (Opsi A)."
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
              "text": "$64\\%$"
            },
            {
              "key": "B",
              "text": "$80\\%$"
            },
            {
              "key": "C",
              "text": "$16\\%$"
            },
            {
              "key": "D",
              "text": "$36\\%$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Koefisien determinasi adalah kuadrat dari koefisien korelasi: $R^2 = r^2 \\times 100\\%$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Hitung nilai koefisien determinasi $r^2$:\n$$r^2 = (0{,}8)^2 = 0{,}64$$\n2. Nyatakan dalam persentase:\n$$R^2 = 0{,}64 \\times 100\\% = 64\\%$$\nArtinya, sebesar **$64\\%$** variasi skor performa dapat dijelaskan oleh waktu latihan (Opsi A)."
        },
        {
          "id": "sma11-b3-5",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Seorang analis data menemukan garis regresi $\\hat{y} = 120 - 3x$ yang menghubungkan harga jual per unit dalam ribuan rupiah ($x$) dengan kuantitas permintaan barang dalam lusin ($y$). Berdasarkan model ini, jika harga dinaikkan sebesar Rp5.000 ($x$ bertambah 5 satuan), bagaimana perubahan yang terjadi pada kuantitas permintaan barang?",
          "options": [
            {
              "key": "A",
              "text": "Permintaan berkurang sebanyak 15 lusin"
            },
            {
              "key": "B",
              "text": "Permintaan bertambah sebanyak 15 lusin"
            },
            {
              "key": "C",
              "text": "Permintaan berkurang sebanyak 5 lusin"
            },
            {
              "key": "D",
              "text": "Permintaan tidak berubah"
            }
          ],
          "correctAnswer": "A",
          "hint": "Perhatikan gradien kemiringan garis $b = -3$. Setiap kenaikan 1 satuan $x$ menyebabkan perubahan $\\Delta y = b \\times \\Delta x$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Nilai gradien regresi adalah $b = -3$.\n2. Kenaikan nilai variabel bebas adalah $\\Delta x = 5$.\n3. Perubahan taksiran variabel terikat adalah:\n$$\\Delta \\hat{y} = b \\times \\Delta x = -3 \\times 5 = -15$$\nTanda negatif menyatakan penurunan, sehingga permintaan barang berkurang sebanyak **15 lusin** (Opsi A)."
        },
        {
          "id": "sma11-b3-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Pada diagram pencar (scatter plot), jika titik-titik data membentuk pola yang cenderung naik dari kiri bawah ke kanan atas, maka hubungan antara kedua variabel adalah...",
          "options": [
            {
              "key": "A",
              "text": "Korelasi positif"
            },
            {
              "key": "B",
              "text": "Korelasi negatif"
            },
            {
              "key": "C",
              "text": "Tidak ada korelasi"
            },
            {
              "key": "D",
              "text": "Korelasi kuadratik"
            }
          ],
          "correctAnswer": "A",
          "hint": "Pola naik dari kiri bawah ke kanan atas menunjukkan korelasi linear positif.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nHubungan tersebut adalah **korelasi positif** (Opsi A)."
        },
        {
          "id": "sma11-b3-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah garis regresi linear memiliki persamaan $\\hat{y} = 2{,}5x + 10$. Jika nilai variabel bebas $x = 8$, maka nilai prediksi $\\hat{y}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "30"
            },
            {
              "key": "B",
              "text": "28"
            },
            {
              "key": "C",
              "text": "32"
            },
            {
              "key": "D",
              "text": "25"
            }
          ],
          "correctAnswer": "A",
          "hint": "Substitusikan $x = 8$: $\\hat{y} = 2{,}5(8) + 10 = 20 + 10 = 30$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\hat{y} = 2{,}5(8) + 10 = 20 + 10 = 30$$ (Opsi A)."
        },
        {
          "id": "sma11-b3-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Rentang nilai koefisien korelasi Pearson ($r$) selalu berada pada interval...",
          "options": [
            {
              "key": "A",
              "text": "-1 <= r <= 1"
            },
            {
              "key": "B",
              "text": "0 <= r <= 1"
            },
            {
              "key": "C",
              "text": "-1 < r < 1"
            },
            {
              "key": "D",
              "text": "r >= 0"
            }
          ],
          "correctAnswer": "A",
          "hint": "Nilai $r$ dibatasi antara $-1$ (korelasi negatif sempurna) hingga $+1$ (korelasi positif sempurna).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nNilai $r$ berada pada rentang **$-1 \\le r \\le 1$** (Opsi A)."
        },
        {
          "id": "sma11-b3-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jika koefisien korelasi dua variabel adalah $r = 0{,}8$, maka nilai koefisien determinasi ($R^2$) adalah...",
          "options": [
            {
              "key": "A",
              "text": "64%"
            },
            {
              "key": "B",
              "text": "80%"
            },
            {
              "key": "C",
              "text": "16%"
            },
            {
              "key": "D",
              "text": "40%"
            }
          ],
          "correctAnswer": "A",
          "hint": "Koefisien determinasi $= r^2 = (0{,}8)^2 = 0{,}64 = 64\\%$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$R^2 = (0{,}8)^2 = 0{,}64 = 64\\%$$ (Opsi A)."
        },
        {
          "id": "sma11-b3-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Arti dari koefisien determinasi $R^2 = 75\\%$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "75% variasi nilai variabel terikat y dapat dijelaskan oleh variabel bebas x"
            },
            {
              "key": "B",
              "text": "75% data berada tepat pada garis lurus regresi"
            },
            {
              "key": "C",
              "text": "Korelasi kedua variabel bernilai 0,75"
            },
            {
              "key": "D",
              "text": "Variabel x menyebabkan perubahan 75% pada variabel y"
            }
          ],
          "correctAnswer": "A",
          "hint": "$R^2$ mengukur proporsi variabilitas variabel respons yang dijelaskan oleh model regresi.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nMaknanya adalah **75% variasi nilai $y$ dapat dijelaskan oleh variabel $x$** (Opsi A)."
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
              "text": "3"
            },
            {
              "key": "B",
              "text": "-3"
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
          "correctAnswer": "A",
          "hint": "Residu $= 45 - 42 = 3$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$e = y - \\hat{y} = 45 - 42 = 3$$ (Opsi A)."
        },
        {
          "id": "sma11-b3-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jika korelasi antara lama belajar ($x$) dan nilai ujian ($y$) adalah $r = 0{,}92$, kesimpulan yang paling tepat mengenai hubungan kedua variabel adalah...",
          "options": [
            {
              "key": "A",
              "text": "Hubungan linear positif yang sangat kuat"
            },
            {
              "key": "B",
              "text": "Hubungan linear positif yang lemah"
            },
            {
              "key": "C",
              "text": "Lama belajar menjadi satu-satunya penyebab nilai tinggi"
            },
            {
              "key": "D",
              "text": "Hubungan negatif kuat"
            }
          ],
          "correctAnswer": "A",
          "hint": "Nilai $r$ di atas 0,8 menunjukkan korelasi linear positif yang sangat kuat.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nNilai $r = 0{,}92$ mengindikasikan **hubungan linear positif yang sangat kuat** (Opsi A)."
        },
        {
          "id": "sma11-b3-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jika nilai korelasi $r = 0$, interpretasi yang tepat adalah...",
          "options": [
            {
              "key": "A",
              "text": "Tidak ada hubungan linear antara kedua variabel"
            },
            {
              "key": "B",
              "text": "Kedua variabel tidak memiliki hubungan sama sekali"
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
          "correctAnswer": "A",
          "hint": "$r = 0$ menunjukkan tidak adanya korelasi linear (namun mungkin ada hubungan non-linear).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$r = 0$ berarti **tidak ada hubungan linear** (Opsi A)."
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
              "text": "-3"
            },
            {
              "key": "B",
              "text": "3"
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
          "correctAnswer": "A",
          "hint": "Nilai prediksi: $\\hat{y} = -0{,}6(60) + 80 = -36 + 80 = 44$. Residu: $e = y - \\hat{y} = 41 - 44 = -3$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $\\hat{y} = 44$\n2. $e = 41 - 44 = -3$ (Opsi A)."
        },
        {
          "id": "sma11-b3-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Pemberian pupuk ($x$) dan tinggi tanaman ($y$) memiliki kovarian $s_{xy} = 18$, simpangan baku $s_x = 3$, dan simpangan baku $s_y = 7{,}5$. Koefisien korelasi Pearson ($r$) antara $x$ dan $y$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "0,8"
            },
            {
              "key": "B",
              "text": "0,75"
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
          "correctAnswer": "A",
          "hint": "Rumus Pearson: $r = \\frac{s_{xy}}{s_x \\times s_y} = \\frac{18}{3 \\times 7{,}5} = \\frac{18}{22{,}5} = 0{,}8$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$r = \\frac{18}{22{,}5} = 0{,}8$$ (Opsi A)."
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
              "text": "Ekstrapolasi (yang berisiko kurang akurat)"
            },
            {
              "key": "B",
              "text": "Interpolasi (yang sangat valid)"
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
          "correctAnswer": "A",
          "hint": "Memprediksi nilai di luar rentang domain data sampel dinamakan ekstrapolasi.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nTindakan memprediksi di luar rentang data pengamatan disebut **ekstrapolasi** (Opsi A)."
        }
      ]
    }
  ]
};
