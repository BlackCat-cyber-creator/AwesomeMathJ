/**
 * Data Kurikulum Kelas 11 SMA (Fase F)
 * 3 Bab Wajib Resmi Sesuai Buku Siswa Matematika
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
        }
      ]
    }
  ]
};
