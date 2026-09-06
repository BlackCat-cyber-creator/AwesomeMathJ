import json
import os

grade7Data = {
  "grade": 7,
  "level": "SMP",
  "phase": "Fase D",
  "description": "Bilangan Bulat, Bilangan Rasional, Rasio & Perbandingan, Bentuk Aljabar, Kesebangunan, serta Data & Diagram",
  "chapters": [
    {
      "id": "smp7-bab1-bilangan-bulat",
      "title": "Bab 1: Bilangan Bulat",
      "summary": {
        "overview": "Dalam pengalaman sehari-hari, bilangan cacah positif tidak selalu cukup untuk menggambarkan semua keadaan fisik di alam. Ketika seorang peramal cuaca melaporkan suhu udara di puncak Gunung Jaya Wijaya mencapai 5 derajat di bawah nol Celsius, atau seorang penyelam berada di kedalaman 15 meter di bawah permukaan air laut, kita memerlukan tanda bilangan negatif untuk merepresentasikan posisi di bawah titik acuan netral nol (0).\n\nSistem Bilangan Bulat memperluas cakrawala berpikir siswa dari sekadar menghitung benda fisik menjadi memahami konsep nilai berarah. Bilangan bulat positif melambangkan keuntungan, kenaikan ketinggian, atau suhu panas, sementara bilangan bulat negatif melambangkan kerugian finansial, kedalaman palung laut, atau suhu beku. Titik nol bertindak sebagai titik kesetimbangan netral.\n\nBab ini membimbing siswa Kelas 7 memahami letak dan urutan bilangan bulat pada garis bilangan horizontal, menguasai operasi penjumlahan dan pengurangan dengan konsep kancing positif-negatif atau pergerakan langkah, memahami hukum tanda pada perkalian dan pembagian ($(-) \\times (-) = (+)$), serta menerapkan urutan hierarki operasi hitung campuran (KABATAKU: Kali, Bagi, Tambah, Kurang) dengan tanda kurung secara presisi.",
        "coreConcepts": [
          "Konsep Bilangan Bulat & Garis Bilangan: Bilangan bulat terdiri atas bilangan bulat positif, nol, dan bilangan bulat negatif: $\\mathbb{Z} = \\{\\dots, -3, -2, -1, 0, 1, 2, 3, \\dots\\}$. Pada garis bilangan horizontal, semakin ke kanan letak suatu bilangan nilainya semakin besar, dan semakin ke kiri nilainya semakin kecil ($a > b$ jika $a$ terletak di sebelah kanan $b$).",
          "Penjumlahan dan Pengurangan: Pengurangan bilangan bulat sama dengan menjumlahkan dengan lawan (invers aditif) bilangan tersebut: $a - b = a + (-b)$ dan $a - (-b) = a + b$.",
          "Perkalian dan Pembagian (Aturan Tanda):\n- Tanda sama menghasilkan positif: $(+) \\times (+) = (+)$ dan $(-) \\times (-) = (+)$\n- Tanda beda menghasilkan negatif: $(+) \\times (-) = (-)$ dan $(-) \\times (+) = (-)$.\nAturan yang persis sama berlaku penuh pada operasi pembagian.",
          "Hierarki Operasi Hitung Campuran (Urutan Operasi):\n1. Operasi di dalam tanda kurung diselesaikan terlebih dahulu.\n2. Perkalian dan pembagian memiliki derajat setara (dikerjakan berurutan dari kiri ke kanan).\n3. Penjumlahan dan pengurangan memiliki derajat setara (dikerjakan berurutan dari kiri ke kanan)."
        ],
        "workedExamples": [
          {
            "title": "Operasi Hitung Suhu Lingkungan",
            "problem": "Suhu udara di dalam ruang pembeku (freezer) mula-mula adalah $-8^\\circ\\text{C}$. Karena listrik padam selama 2 jam, suhu di dalam freezer naik sebesar $3^\\circ\\text{C}$ setiap 30 menit. Berapakah suhu akhir di dalam freezer tersebut setelah listrik padam 2 jam?",
            "solution": "Langkah 1: Hitung berapa kali kenaikan suhu terjadi dalam 2 jam:\nDurasi $= 2\\text{ jam} = 120\\text{ menit}$.\nFrekuensi kenaikan $= \\frac{120}{30} = 4\\text{ kali}$.\n\nLangkah 2: Hitung total kenaikan suhu:\n$$\\text{Total kenaikan} = 4 \\times 3^\\circ\\text{C} = 12^\\circ\\text{C}$$\n\nLangkah 3: Jumlahkan dengan suhu mula-mula:\n$$\\text{Suhu akhir} = -8 + 12 = 4^\\circ\\text{C}$$\nSuhu akhir di dalam freezer adalah **$4^\\circ\\text{C}$**."
          },
          {
            "title": "Penyelesaian Operasi Campuran Berurutan",
            "problem": "Hitunglah hasil dari operasi hitung campuran: $15 + (-4) \\times 6 - (-18) : 3$.",
            "solution": "Langkah 1: Kerjakan operasi perkalian dan pembagian terlebih dahulu:\n- Perkalian: $(-4) \\times 6 = -24$\n- Pembagian: $(-18) : 3 = -6$\n\nLangkah 2: Tuliskan kembali persamaan dengan hasil operasi tersebut:\n$$15 + (-24) - (-6)$$\n\nLangkah 3: Sederhanakan tanda operasi berurutan:\n$$15 - 24 + 6$$\n\nLangkah 4: Hitung berurutan dari kiri ke kanan:\n$$15 - 24 = -9$$\n$$-9 + 6 = -3$$\nHasil akhirnya adalah **$-3$**."
          }
        ],
        "keyFormulas": [
          { "label": "Lawan Bilangan Negatif", "formula": "a - (-b) = a + b" },
          { "label": "Perkalian Tanda Sama", "formula": "(-) \\times (-) = (+)" },
          { "label": "Perkalian Tanda Beda", "formula": "(+) \\times (-) = (-)" }
        ],
        "misconceptions": [
          "Menjumlahkan terlebih dahulu sebelum melakukan perkalian pada operasi tanpa tanda kurung: $5 + 2 \\times 3 = 5 + 6 = 11$, bukan $(5+2) \\times 3 = 21$.",
          "Mengira bilangan negatif yang angkanya besar bernilai lebih besar, padahal $-10 < -2$ karena $-10$ terletak jauh lebih ke kiri pada garis bilangan."
        ],
        "tutorTip": "Ingat perumpamaan hutang dan uang: Tanda minus ($-$) adalah hutang, tanda plus ($+$) adalah uang tunai. Jika kamu punya hutang 8 lalu mendapat uang 12, sisa uangmu adalah $+4$!"
      },
      "questions": [
        {
          "id": "smp7-b1-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Hasil dari operasi penjumlahan dan pengurangan $-12 + 7 - (-5)$ adalah...",
          "options": [
            { "key": "A", "text": "0" },
            { "key": "B", "text": "-10" },
            { "key": "C", "text": "-14" },
            { "key": "D", "text": "4" }
          ],
          "correctAnswer": "A",
          "hint": "Ubah $-(-5)$ menjadi $+5$, lalu operasikan dari kiri: $-12 + 7 + 5$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $-12 + 7 = -5$\n2. $-5 - (-5) = -5 + 5 = 0$\nHasilnya adalah **0** (Opsi A)."
        },
        {
          "id": "smp7-b1-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Hasil dari $(-6) \\times 4 : (-2)$ adalah...",
          "options": [
            { "key": "A", "text": "12" },
            { "key": "B", "text": "-12" },
            { "key": "C", "text": "8" },
            { "key": "D", "text": "-8" }
          ],
          "correctAnswer": "A",
          "hint": "Perkalian tanda beda menghasilkan negatif: $(-6) \\times 4 = -24$. Lalu negatif dibagi negatif menghasilkan positif.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $(-6) \\times 4 = -24$\n2. $-24 : (-2) = 12$\nHasilnya adalah **12** (Opsi A)."
        },
        {
          "id": "smp7-b1-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Suhu mula-mula suatu ruangan pendingin adalah $-4^\\circ\\text{C}$. Ruangan tersebut kemudian diturunkan suhunya sebesar $7^\\circ\\text{C}$. Suhu ruangan pendingin sekarang adalah...",
          "options": [
            { "key": "A", "text": "$-11^\\circ\\text{C}$" },
            { "key": "B", "text": "$3^\\circ\\text{C}$" },
            { "key": "C", "text": "$-3^\\circ\\text{C}$" },
            { "key": "D", "text": "$11^\\circ\\text{C}$" }
          ],
          "correctAnswer": "A",
          "hint": "Diturunkan artinya dikurangi: $-4 - 7$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Suhu} = -4 - 7 = -11^\\circ\\text{C}$$\nSuhu ruangan sekarang adalah **$-11^\\circ\\text{C}$** (Opsi A)."
        },
        {
          "id": "smp7-b1-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dalam suatu kompetisi matematika, setiap jawaban benar diberi skor 4, jawaban salah diberi skor -2, dan tidak dijawab diberi skor -1. Dari 40 soal yang diberikan, seorang peserta menjawab benar 31 soal dan tidak menjawab 3 soal. Total skor yang diperoleh peserta tersebut adalah...",
          "options": [
            { "key": "A", "text": "109" },
            { "key": "B", "text": "112" },
            { "key": "C", "text": "115" },
            { "key": "D", "text": "105" }
          ],
          "correctAnswer": "A",
          "hint": "Hitung jumlah soal yang dijawab salah terlebih dahulu: $40 - 31 - 3 = 6$ soal salah.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Soal salah: $40 - (31 + 3) = 40 - 34 = 6$ soal.\n2. Hitung skor perolehan:\n- Benar: $31 \\times 4 = 124$\n- Salah: $6 \\times (-2) = -12$\n- Tidak dijawab: $3 \\times (-1) = -3$\n3. Total skor:\n$$\\text{Total} = 124 + (-12) + (-3) = 124 - 15 = 109$$\nTotal skor yang diperoleh adalah **109** (Opsi A)."
        }
      ]
    },
    {
      "id": "smp7-bab2-bilangan-rasional",
      "title": "Bab 2: Bilangan Rasional",
      "summary": {
        "overview": "Di kehidupan nyata, banyak kuantitas yang tidak dapat dinyatakan dalam bilangan bulat utuh. Ketika seorang juru masak menakar $\\frac{3}{4}$ sendok teh garam dapur, seorang penjahit memotong 2,5 meter kain sutra, atau sebuah toko menawarkan diskon 35% pada musim liburan, kita berhadapan langsung dengan Bilangan Rasional.\n\nKata 'rasional' berasal dari kata rasio (perbandingan). Bilangan rasional adalah segala bilangan yang dapat dituliskan secara tepat ke dalam bentuk pecahan $\\frac{a}{b}$, di mana pembilang $a$ dan penyebut $b$ adalah bilangan bulat serta $b \\neq 0$. Bilangan bulat itu sendiri (misalnya $5 = \\frac{5}{1}$), pecahan biasa, pecahan campuran, desimal berhingga (seperti $0{,}75 = \\frac{3}{4}$), dan desimal berulang tak hingga (seperti $0{,}333\\dots = \\frac{1}{3}$) seluruhnya merupakan keluarga besar bilangan rasional.\n\nBab ini membimbing siswa Kelas 7 memahami definisi konseptual bilangan rasional, mengubah representasi pecahan ke desimal dan sebaliknya, membandingkan dan mengurutkan berbagai pecahan dengan menyamakan penyebut (KPK) atau desimal, serta melakukan operasi penjumlahan, pengurangan, perkalian, dan pembagian pecahan pada skenario kontekstual pembagian warisan, resep makanan, dan luas lahan.",
        "coreConcepts": [
          "Definisi Bilangan Rasional: Bilangan yang dapat dinyatakan dalam bentuk $\\frac{a}{b}$ dengan $a, b \\in \\mathbb{Z}$ dan $b \\neq 0$.",
          "Konversi Bentuk Pecahan dan Desimal:\n- Pecahan ke Desimal: Membagi pembilang dengan penyebut secara bersusun (porogapit).\n- Desimal ke Pecahan: Memperhatikan jumlah digit di belakang koma (1 digit persepuluh, 2 digit perseratus, dst.) lalu disederhanakan dengan membagi FPB.",
          "Membandingkan Bilangan Rasional: Menyamakan penyebut menggunakan Kelipatan Persekutuan Terkecil (KPK) atau mengalikan silang: $\\frac{a}{b} > \\frac{c}{d} \\iff a \\cdot d > b \\cdot c$ (untuk $b, d > 0$).",
          "Operasi Hitung Pecahan:\n- Penjumlahan & Pengurangan: Wajib menyamakan penyebut terlebih dahulu: $\\frac{a}{c} \\pm \\frac{b}{c} = \\frac{a \\pm b}{c}$.\n- Perkalian: Kalikan pembilang dengan pembilang, penyebut dengan penyebut: $\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\cdot c}{b \\cdot d}$.\n- Pembagian: Mengalikan dengan kebalikan pecahan pembagi: $\\frac{a}{b} : \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$."
        ],
        "workedExamples": [
          {
            "title": "Operasi Campuran Pecahan Resep Roti",
            "problem": "Ibu memiliki persediaan tepung terigu sebanyak $2\\frac{1}{2}\\text{ kg}$. Ibu membeli lagi tepung terigu sebanyak $1\\frac{3}{4}\\text{ kg}$. Jika $2\\frac{1}{4}\\text{ kg}$ tepung digunakan untuk membuat adonan roti, berapa kilogram sisa tepung terigu Ibu sekarang?",
            "solution": "Langkah 1: Susun kalimat matematika:\n$$2\\frac{1}{2} + 1\\frac{3}{4} - 2\\frac{1}{4}$$\n\nLangkah 2: Selesaikan operasi pecahan sejenis terlebih dahulu:\n$$1\\frac{3}{4} - 2\\frac{1}{4} = -\\frac{2}{4} = -\\frac{1}{2}$$\nAtau ubah seluruhnya ke pecahan berpenyebut sama (KPK $= 4$):\n$$2\\frac{2}{4} + 1\\frac{3}{4} - 2\\frac{1}{4} = (2 + 1 - 2) + \\left(\\frac{2 + 3 - 1}{4}\\right)$$\n$$= 1 + \\frac{4}{4} = 1 + 1 = 2\\text{ kg}$$\nSisa tepung terigu Ibu adalah **2 kg**."
          },
          {
            "title": "Pembagian Pecahan Pembungkus Gula Pasir",
            "problem": "Pak Ahmad memiliki $15\\text{ kg}$ gula pasir yang akan dibungkus ke dalam beberapa kantong plastik kecil. Jika setiap kantong plastik berisi $\\frac{3}{4}\\text{ kg}$ gula pasir, berapa banyak kantong plastik yang dibutuhkan?",
            "solution": "Langkah 1: Gunakan operasi pembagian pecahan:\n$$\\text{Banyak kantong} = 15 : \\frac{3}{4}$$\n\nLangkah 2: Ubah pembagian menjadi perkalian dengan kebalikan pembagi:\n$$15 \\times \\frac{4}{3} = \\frac{15 \\times 4}{3} = \\frac{60}{3} = 20$$\nBanyak kantong plastik yang dibutuhkan adalah **20 kantong**."
          }
        ],
        "keyFormulas": [
          { "label": "Perkalian Pecahan", "formula": "\\frac{a}{b} \\times \\frac{c}{d} = \\frac{ac}{bd}" },
          { "label": "Pembagian Pecahan", "formula": "\\frac{a}{b} : \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}" }
        ],
        "misconceptions": [
          "Menjumlahkan pembilang dengan pembilang dan penyebut dengan penyebut secara langsung: $\\frac{1}{2} + \\frac{1}{3} \\neq \\frac{2}{5}$. Penyebut wajib disamakan terlebih dahulu!",
          "Lupa membalik posisi pembilang dan penyebut pada pecahan kedua saat melakukan operasi pembagian."
        ],
        "tutorTip": "Ingat rumus pembagian pecahan: 'Bagi jadi Kali, Pecahan belakang Dibalik!' Contoh: $6 : \\frac{2}{3} = 6 \\times \\frac{3}{2} = 9$."
      },
      "questions": [
        {
          "id": "smp7-b2-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Hasil dari $\\frac{2}{3} + \\frac{1}{4}$ adalah...",
          "options": [
            { "key": "A", "text": "$\\frac{11}{12}$" },
            { "key": "B", "text": "$\\frac{3}{7}$" },
            { "key": "C", "text": "$\\frac{3}{12}$" },
            { "key": "D", "text": "$\\frac{5}{12}$" }
          ],
          "correctAnswer": "A",
          "hint": "Samakan penyebut dengan KPK dari 3 dan 4, yaitu 12.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{2}{3} + \\frac{1}{4} = \\frac{8}{12} + \\frac{3}{12} = \\frac{11}{12}$$\nHasilnya adalah **$\\frac{11}{12}$** (Opsi A)."
        },
        {
          "id": "smp7-b2-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Hasil perkalian pecahan $\\frac{3}{5} \\times \\frac{10}{9}$ dalam bentuk paling sederhana adalah...",
          "options": [
            { "key": "A", "text": "$\\frac{2}{3}$" },
            { "key": "B", "text": "$\\frac{30}{45}$" },
            { "key": "C", "text": "$\\frac{1}{2}$" },
            { "key": "D", "text": "$\\frac{5}{6}$" }
          ],
          "correctAnswer": "A",
          "hint": "Lakukan penyederhanaan silang: 10 dibagi 5 menjadi 2, dan 9 dibagi 3 menjadi 3.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{3}{5} \\times \\frac{10}{9} = \\frac{30}{45} = \\frac{30 : 15}{45 : 15} = \\frac{2}{3}$$\nBentuk sederhananya adalah **$\\frac{2}{3}$** (Opsi A)."
        },
        {
          "id": "smp7-b2-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bentuk pecahan biasa yang paling sederhana dari bilangan desimal 0,375 adalah...",
          "options": [
            { "key": "A", "text": "$\\frac{3}{8}$" },
            { "key": "B", "text": "$\\frac{375}{100}$" },
            { "key": "C", "text": "$\\frac{7}{20}$" },
            { "key": "D", "text": "$\\frac{5}{16}$" }
          ],
          "correctAnswer": "A",
          "hint": "Tulis sebagai $\\frac{375}{1000}$, lalu bagi pembilang dan penyebut dengan 125.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$0{,}375 = \\frac{375}{1.000} = \\frac{375 : 125}{1.000 : 125} = \\frac{3}{8}$$\nBentuk pecahannya adalah **$\\frac{3}{8}$** (Opsi A)."
        },
        {
          "id": "smp7-b2-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Seorang pedagang memiliki persediaan minyak goreng $12\\frac{1}{2}$ liter. Minyak tersebut akan dimasukkan ke dalam botol-botol kecil berukuran $\\frac{1}{4}$ liter sampai habis. Banyak botol yang diperlukan adalah...",
          "options": [
            { "key": "A", "text": "50 botol" },
            { "key": "B", "text": "48 botol" },
            { "key": "C", "text": "52 botol" },
            { "key": "D", "text": "25 botol" }
          ],
          "correctAnswer": "A",
          "hint": "Ubah ke pecahan biasa: $12\\frac{1}{2} = \\frac{25}{2}$, lalu bagi dengan $\\frac{1}{4}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Banyak botol} = \\frac{25}{2} : \\frac{1}{4} = \\frac{25}{2} \\times \\frac{4}{1} = \\frac{100}{2} = 50$$\nBanyak botol yang diperlukan adalah **50 botol** (Opsi A)."
        }
      ]
    },
    {
      "id": "smp7-bab3-rasio",
      "title": "Bab 3: Rasio",
      "summary": {
        "overview": "Saat kita melihat peta geografis Indonesia di atlas sekolah tertulis skala 1 : 2.500.000, artinya setiap jarak 1 sentimeter pada lembaran kertas mewakili jarak riil 25 kilometer di bumi sesungguhnya. Begitu pula saat seorang juru masak membuat kue bolu dengan mencampurkan 2 cangkir tepung terigu untuk setiap 1 cangkir gula pasir, atau menghitung rasio laju kecepatan kendaraan terhadap durasi tempuh perjalanan. Seluruh perbandingan tersebut dipelajari dalam materi Rasio.\n\nRasio adalah perbandingan matematis antara dua atau lebih besaran yang sejenis. Dalam pemodelan kuantitatif, perbandingan terbagi menjadi dua kategori fundamental: Perbandingan Senilai (Direct Proportion), di mana pertambahan nilai besaran pertama berbanding lurus dengan pertambahan nilai besaran kedua (seperti jarak tempuh dan bensin yang dibutuhkan), serta Perbandingan Berbalik Nilai (Inverse Proportion), di mana pertambahan nilai besaran pertama justru menyebabkan penurunan nilai besaran kedua (seperti kecepatan kendaraan terhadap waktu tempuh, atau jumlah tukang bangunan terhadap lama pengerjaan proyek).\n\nBab ini membimbing siswa Kelas 7 menyederhanakan rasio dua besaran, menghitung perbandingan senilai menggunakan metode nilai satuan atau tabel rasio, membedakan kasus perbandingan senilai dan berbalik nilai, serta memecahkan problem skala peta dan pembagian proporsional dalam dunia usaha.",
        "coreConcepts": [
          "Definisi Rasio: Perbandingan dua besaran sejenis $a$ dan $b$ yang dituliskan sebagai $a : b$ atau pecahan $\\frac{a}{b}$ dengan syarat $b \\neq 0$. Besaran yang dibandingkan wajib memiliki satuan yang sama sebelum disederhanakan.",
          "Perbandingan Senilai: Hubungan dua variabel di mana jika nilai variabel $x$ bertambah besar, maka nilai variabel $y$ juga bertambah besar secara proporsional: $\\frac{x_1}{y_1} = \\frac{x_2}{y_2}$ atau $\\frac{x_1}{x_2} = \\frac{y_1}{y_2}$. Konstanta proporsi: $k = \\frac{y}{x}$.",
          "Perbandingan Berbalik Nilai: Hubungan dua variabel di mana jika nilai variabel $x$ bertambah besar, maka nilai variabel $y$ justru berkurang secara proporsional sehingga hasil kalinya selalu konstan: $x_1 \\cdot y_1 = x_2 \\cdot y_2$ atau $\\frac{x_1}{x_2} = \\frac{y_2}{y_1}$.",
          "Skala Peta: Rasio antara jarak pada gambar/peta ($J_p$) dengan jarak sesungguhnya di lapangan ($J_s$): $\\text{Skala} = \\frac{J_p}{J_s}$."
        ],
        "workedExamples": [
          {
            "title": "Perhitungan Jarak Sebenarnya dari Skala Peta",
            "problem": "Jarak antara kota $P$ dan kota $Q$ pada sebuah peta berskala $1 : 1.500.000$ adalah $6\\text{ cm}$. Berapakah jarak sebenarnya antara kedua kota tersebut dalam kilometer?",
            "solution": "Langkah 1: Gunakan hubungan rumus skala:\n$$J_s = \\frac{J_p}{\\text{Skala}} = 6\\text{ cm} \\times 1.500.000 = 9.000.000\\text{ cm}$$\n\nLangkah 2: Konversikan satuan sentimeter ke kilometer ($1\\text{ km} = 100.000\\text{ cm}$):\n$$J_s = \\frac{9.000.000}{100.000} = 90\\text{ km}$$\nJarak sebenarnya antara kedua kota adalah **90 km**."
          },
          {
            "title": "Perbandingan Berbalik Nilai Waktu Proyek",
            "problem": "Pembangunan sebuah jembatan direncanakan selesai dalam waktu 30 hari oleh 12 orang pekerja. Jika kontraktor ingin menyelesaikan pembangunan jembatan tersebut dalam waktu 20 hari, berapa banyak pekerja yang harus ditugaskan?",
            "solution": "Langkah 1: Kenali bahwa hubungan pekerja dan waktu adalah perbandingan berbalik nilai:\n$$x_1 \\times y_1 = x_2 \\times y_2$$\nDi mana $x_1 = 30\\text{ hari}, y_1 = 12\\text{ pekerja}, x_2 = 20\\text{ hari}$, dan $y_2$ adalah pekerja yang dicari.\n\nLangkah 2: Selesaikan persamaan:\n$$30 \\times 12 = 20 \\times y_2$$\n$$360 = 20 \\times y_2$$\n$$y_2 = \\frac{360}{20} = 18\\text{ pekerja}$$\nBanyak pekerja yang harus ditugaskan adalah **18 orang**."
          }
        ],
        "keyFormulas": [
          { "label": "Perbandingan Senilai", "formula": "\\frac{x_1}{x_2} = \\frac{y_1}{y_2}" },
          { "label": "Perbandingan Berbalik Nilai", "formula": "x_1 \\cdot y_1 = x_2 \\cdot y_2 \\iff \\frac{x_1}{x_2} = \\frac{y_2}{y_1}" },
          { "label": "Skala Peta", "formula": "\\text{Skala} = \\frac{J_p}{J_s}" }
        ],
        "misconceptions": [
          "Menerapkan rumus perbandingan senilai pada masalah pekerja dan waktu. Semakin banyak pekerja, waktu penyelesaian semakin cepat (berbalik nilai), bukan semakin lama.",
          "Membandingkan dua besaran yang belum disetarakan satuannya (misal: membandingkan 500 meter dengan 2 km tanpa mengubah 2 km menjadi 2.000 meter terlebih dahulu)."
        ],
        "tutorTip": "Trik membedakan: Bayangkan skenarionya. Jika yang satu naik dan yang lain PASTI IKUT NAIK (bensin & jarak) = Senilai (kali silang). Jika yang satu naik dan yang lain PASTI TURUN (kecepatan & waktu) = Berbalik Nilai (kali lurus samping)!"
      },
      "questions": [
        {
          "id": "smp7-b3-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Bentuk paling sederhana dari perbandingan 250 gram terhadap 1 kg adalah...",
          "options": [
            { "key": "A", "text": "1 : 4" },
            { "key": "B", "text": "1 : 2" },
            { "key": "C", "text": "250 : 1" },
            { "key": "D", "text": "1 : 5" }
          ],
          "correctAnswer": "A",
          "hint": "Samakan satuan terlebih dahulu: $1\\text{ kg} = 1.000\\text{ gram}$. Lalu bagi keduanya dengan 250.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Samakan satuan: 250 gram : 1.000 gram\n2. Sederhanakan:\n$$\\frac{250}{1.000} = \\frac{1}{4} = 1 : 4$$\nBentuk sederhananya adalah **1 : 4** (Opsi A)."
        },
        {
          "id": "smp7-b3-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Sebuah mobil membutuhkan 5 liter bensin untuk menempuh jarak 60 km. Berapa liter bensin yang dibutuhkan mobil tersebut untuk menempuh jarak 180 km?",
          "options": [
            { "key": "A", "text": "15 liter" },
            { "key": "B", "text": "12 liter" },
            { "key": "C", "text": "18 liter" },
            { "key": "D", "text": "20 liter" }
          ],
          "correctAnswer": "A",
          "hint": "Ini perbandingan senilai: $\\frac{5}{60} = \\frac{x}{180}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Perbandingan senilai:\n$$x = 5 \\times \\frac{180}{60} = 5 \\times 3 = 15\\text{ liter}$$\nBensin yang dibutuhkan adalah **15 liter** (Opsi A)."
        },
        {
          "id": "smp7-b3-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jarak dua kota pada peta adalah 4 cm. Jika skala peta tersebut adalah $1 : 2.000.000$, maka jarak sebenarnya antara kedua kota tersebut adalah...",
          "options": [
            { "key": "A", "text": "80 km" },
            { "key": "B", "text": "8 km" },
            { "key": "C", "text": "800 km" },
            { "key": "D", "text": "50 km" }
          ],
          "correctAnswer": "A",
          "hint": "Kalikan 4 cm dengan 2.000.000 = 8.000.000 cm, lalu bagi 100.000 untuk konversi ke km.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$J_s = 4 \\times 2.000.000 = 8.000.000\\text{ cm} = \\frac{8.000.000}{100.000} = 80\\text{ km}$$\nJarak sebenarnya adalah **80 km** (Opsi A)."
        },
        {
          "id": "smp7-b3-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Suatu pekerjaan dapat diselesaikan oleh 15 orang dalam waktu 24 hari. Jika pekerjaan tersebut ingin diselesaikan dalam waktu 18 hari, banyak tambahan pekerja yang diperlukan adalah...",
          "options": [
            { "key": "A", "text": "5 orang" },
            { "key": "B", "text": "20 orang" },
            { "key": "C", "text": "6 orang" },
            { "key": "D", "text": "4 orang" }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan perbandingan berbalik nilai: $15 \\times 24 = x \\times 18$. Tambahan pekerja = $x - 15$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Hitung total pekerja yang dibutuhkan ($x$):\n$$15 \\times 24 = x \\times 18$$\n$$360 = 18x \\implies x = 20\\text{ pekerja}$$\n2. Hitung tambahan pekerja:\n$$\\text{Tambahan} = 20 - 15 = 5\\text{ orang}$$\nTambahan pekerja yang diperlukan adalah **5 orang** (Opsi A)."
        }
      ]
    },
    {
      "id": "smp7-bab4-bentuk-aljabar",
      "title": "Bab 4: Bentuk Aljabar",
      "summary": {
        "overview": "Dalam kehidupan sehari-hari, kita sering kali tidak mengetahui secara pasti nilai suatu kuantitas, namun kita mengetahui hubungan logisnya. Ketika seorang pedagang berkata 'Saya membeli 3 kardus mie instan dan 5 bungkus lepas', kita tidak tahu berapa persisnya jumlah bungkus dalam kardus tersebut. Matematikawan mewakili isi kardus yang belum diketahui tersebut dengan simbol huruf $x$, sehingga seluruh barang dapat ditulis ringkas sebagai $3x + 5$. Simbolisasi matematis inilah yang menjadi pintu gerbang Bentuk Aljabar.\n\nAljabar pertama kali dipelopori secara sistematis oleh matematikawan muslim Muhammad bin Musa Al-Khawarizmi melalui risalah monumentalnya Al-Kitab al-mukhtasar fi hisab al-jabr wa-l-muqabala. Aljabar memungkinkan manusia memecahkan masalah-masalah abstrak dengan memanipulasi variabel dan simbol tanpa harus terikat pada angka tertentu.\n\nBab ini membimbing siswa Kelas 7 memahami unsur-unsur bentuk aljabar (variabel, koefisien, konstanta, dan suku), mengenali suku-suku sejenis yang dapat disederhanakan, melakukan operasi aljabar penjumlahan, pengurangan, perkalian suku satu dan suku dua (sifat distributif), serta memodelkan persoalan kontekstual seperti keliling dan luas lahan bangun datar ke dalam rumus aljabar.",
        "coreConcepts": [
          "Unsur-Unsur Bentuk Aljabar:\n- Variabel (Peubah): Simbol huruf pengganti bilangan yang belum diketahui nilainya (misal $x, y$).\n- Koefisien: Faktor bilangan pengali variabel (pada $5x$, angka 5 adalah koefisien).\n- Konstanta: Suku yang hanya berupa bilangan pasti tanpa memuat variabel.\n- Suku Sejenis: Suku-suku yang memiliki variabel yang sama dan pangkat variabel yang sama (misal $3x$ dan $7x$, atau $2a^2$ dan $-5a^2$).",
          "Penjumlahan dan Pengurangan Aljabar: HANYA DAPAT dilakukan antara suku-suku yang SEJENIS dengan menjumlahkan atau mengurangkan koefisiennya: $ax + bx = (a + b)x$. Suku tak sejenis tidak dapat digabungkan.",
          "Perkalian Bentuk Aljabar: Menggunakan sifat distributif:\n- Suku satu dengan suku dua: $a(bx + c) = abx + ac$\n- Suku dua dengan suku dua: $(x + a)(x + b) = x^2 + (a + b)x + ab$.",
          "Substitusi Nilai Aljabar: Mengganti variabel aljabar dengan nilai numerik yang ditentukan untuk menghitung hasil evaluasinya."
        ],
        "workedExamples": [
          {
            "title": "Penyederhanaan Bentuk Aljabar Linear",
            "problem": "Sederhanakan bentuk aljabar berikut: $5x - 3y + 7 - 2x + 8y - 12$.",
            "solution": "Langkah 1: Kumpulkan suku-suku yang sejenis berdampingan:\n$$= (5x - 2x) + (-3y + 8y) + (7 - 12)$$\n\nLangkah 2: Operasikan masing-masing koefisien suku sejenis:\n- Suku variabel $x$: $(5 - 2)x = 3x$\n- Suku variabel $y$: $(-3 + 8)y = 5y$\n- Suku konstanta: $7 - 12 = -5$\n\nLangkah 3: Gabungkan hasil penyederhanaan:\n$$= 3x + 5y - 5$$\nBentuk sederhananya adalah **$3x + 5y - 5$**."
          },
          {
            "title": "Perkalian Suku Dua Distributif",
            "problem": "Jabarkan dan sederhanakan bentuk perkalian aljabar: $(2x + 3)(x - 4)$.",
            "solution": "Langkah 1: Gunakan hukum perkalian distributif berurutan:\n$$(2x + 3)(x - 4) = 2x(x) + 2x(-4) + 3(x) + 3(-4)$$\n\nLangkah 2: Selesaikan perkalian tiap suku:\n$$= 2x^2 - 8x + 3x - 12$$\n\nLangkah 3: Gabungkan suku sejenis $-8x + 3x = -5x$:\n$$= 2x^2 - 5x - 12$$\nHasil penjabarannya adalah **$2x^2 - 5x - 12$**."
          }
        ],
        "keyFormulas": [
          { "label": "Distributif Aljabar", "formula": "a(b + c) = ab + ac" },
          { "label": "Perkalian Dua Binomial", "formula": "(x + a)(x + b) = x^2 + (a + b)x + ab" }
        ],
        "misconceptions": [
          "Menggabungkan suku yang tidak sejenis: $3x + 2y \\neq 5xy$ dan $2x + 3 \\neq 5x$. Penjumlahan hanya dapat dilakukan pada suku yang variabel dan pangkatnya persis sama.",
          "Salah mengalikan tanda minus saat menjabarkan distributif: $-(2x - 5) = -2x + 5$, bukan $-2x - 5$."
        ],
        "tutorTip": "Ingat analogi buah: '3 Apel ditambah 2 Jeruk tetaplah 3 Apel dan 2 Jeruk, tidak bisa menjadi 5 Apel-Jeruk!' Variabel yang berbeda jenis tidak boleh dijumlahkan."
      },
      "questions": [
        {
          "id": "smp7-b4-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Koefisien dari variabel $x$ pada bentuk aljabar $3x^2 - 7x + 9$ adalah...",
          "options": [
            { "key": "A", "text": "-7" },
            { "key": "B", "text": "7" },
            { "key": "C", "text": "3" },
            { "key": "D", "text": "9" }
          ],
          "correctAnswer": "A",
          "hint": "Perhatikan tanda minus di depan angka 7 yang melekat pada variabel $x$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nBentuk aljabar $3x^2 - 7x + 9$ memiliki koefisien untuk variabel $x$ sebesar **-7** (Opsi A)."
        },
        {
          "id": "smp7-b4-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Bentuk sederhana dari $4a + 7b - 2a + 3b$ adalah...",
          "options": [
            { "key": "A", "text": "$2a + 10b$" },
            { "key": "B", "text": "$6a + 10b$" },
            { "key": "C", "text": "$2a + 4b$" },
            { "key": "D", "text": "$12ab$" }
          ],
          "correctAnswer": "A",
          "hint": "Gabungkan suku sejenis: $(4a - 2a) + (7b + 3b)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Suku $a$: $4a - 2a = 2a$\n2. Suku $b$: $7b + 3b = 10b$\nHasilnya adalah **$2a + 10b$** (Opsi A)."
        },
        {
          "id": "smp7-b4-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil penjabaran dari $(2x - 3)(x + 5)$ adalah...",
          "options": [
            { "key": "A", "text": "$2x^2 + 7x - 15$" },
            { "key": "B", "text": "$2x^2 - 7x - 15$" },
            { "key": "C", "text": "$2x^2 + 10x - 15$" },
            { "key": "D", "text": "$2x^2 + 7x + 15$" }
          ],
          "correctAnswer": "A",
          "hint": "Kalikan distributif: $2x(x) + 2x(5) - 3(x) - 3(5) = 2x^2 + 10x - 3x - 15$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $2x(x + 5) - 3(x + 5) = 2x^2 + 10x - 3x - 15$\n2. Gabungkan suku tengah: $10x - 3x = 7x$\nHasilnya adalah **$2x^2 + 7x - 15$** (Opsi A)."
        },
        {
          "id": "smp7-b4-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Keliling sebuah persegi panjang dinyatakan dengan $K = 2(3x + 2) + 2(2x - 1)$. Jika nilai $x = 4$, maka keliling persegi panjang tersebut adalah...",
          "options": [
            { "key": "A", "text": "42 cm" },
            { "key": "B", "text": "38 cm" },
            { "key": "C", "text": "44 cm" },
            { "key": "D", "text": "40 cm" }
          ],
          "correctAnswer": "A",
          "hint": "Sederhanakan bentuk aljabar terlebih dahulu menjadi $10x + 2$, lalu masukkan $x = 4$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Sederhanakan bentuk aljabar keliling:\n$$K = 6x + 4 + 4x - 2 = 10x + 2$$\n2. Substitusikan nilai $x = 4$:\n$$K = 10(4) + 2 = 40 + 2 = 42\\text{ cm}$$\nKeliling persegi panjang adalah **42 cm** (Opsi A)."
        }
      ]
    },
    {
      "id": "smp7-bab5-kesebangunan",
      "title": "Bab 5: Kesebangunan",
      "summary": {
        "overview": "Pernahkah kalian mencetak foto diri ukuran pasfoto $2 \\times 3\\text{ cm}$ dan memperbesarnya menjadi ukuran poster $20 \\times 30\\text{ cm}$? Mengapa wajah pada poster tidak tampak lonjong atau melebar secara aneh? Hal itu terjadi karena rasio perbandingan panjang dan lebar foto tetap dijaga sama persis. Dua bangun geometri yang memiliki bentuk sama persis tetapi ukurannya berbeda secara proporsional dinamakan Bangun Datar yang Sebangun.\n\nKesebangunan (Similarity) dan Kekongruenan (Congruence) adalah pilar geometri yang banyak dimanfaatkan oleh arsitek dalam membuat maket miniatur gedung bertingkat, insinyur pembuatan model terowongan angin untuk menguji aerodinamika badan pesawat terbang, hingga juru ukur tanah yang mengukur lebar sungai besar yang berarus deras tanpa harus menyeberanginya secara langsung.\n\nBab ini menuntun siswa Kelas 7 membedakan antara konsep Kongruen (bentuk dan ukuran sama persis) dan Sebangun (bentuk sama, ukuran sebanding), mengidentifikasi syarat formal dua bangun datar sebangun (sudut-sudut yang bersesuaian sama besar dan sisi-sisi yang seletak memiliki perbandingan senilai), serta menerapkan konsep kesebangunan segitiga untuk mengukur tinggi tiang bendera atau pohon melalui panjang bayangannya di tanah.",
        "coreConcepts": [
          "Definisi Kesebangunan (Notasi $\\sim$): Dua bangun datar dikatakan sebangun jika memenuhi dua syarat mutlak:\n1. Sudut-sudut yang bersesuaian (seletak) sama besar.\n2. Sisi-sisi yang bersesuaian (seletak) memiliki perbandingan yang senilai: $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2} = k$ (faktor skala).",
          "Definisi Kekongruenan (Notasi $\\cong$): Dua bangun datar dikatakan kongruen jika memiliki bentuk DAN ukuran yang sama persis (faktor skala $k = 1$). Seluruh sisi seletak sama panjang dan seluruh sudut seletak sama besar.",
          "Syarat Kesebangunan Segitiga:\n- Sudut-Sudut-Sudut (sd-sd-sd): Ketiga pasang sudut yang bersesuaian sama besar.\n- Sisi-Sisi-Sisi (s-s-s): Ketiga pasang sisi yang bersesuaian memiliki perbandingan yang sama.\n- Sisi-Sudut-Sisi (s-sd-s): Dua pasang sisi sebanding dan sudut apitnya sama besar.",
          "Penerapan Bayangan Segitiga: Mengukur objek tinggi menggunakan bayangan sinar matahari yang sejajar: $\\frac{\\text{Tinggi Objek}}{\\text{Tinggi Tongkat}} = \\frac{\\text{Bayangan Objek}}{\\text{Bayangan Tongkat}}$."
        ],
        "workedExamples": [
          {
            "title": "Mengukur Tinggi Pohon Menggunakan Tongkat dan Bayangan",
            "problem": "Sebuah tongkat yang tingginya 1,5 meter berdiri tegak di tanah lapang dan memiliki panjang bayangan 2 meter. Pada saat yang sama, sebuah pohon rindang di dekatnya memiliki panjang bayangan 16 meter. Berapakah tinggi pohon tersebut?",
            "solution": "Langkah 1: Gunakan prinsip kesebangunan segitiga bayangan sinar matahari:\n$$\\frac{\\text{Tinggi Pohon}}{\\text{Tinggi Tongkat}} = \\frac{\\text{Bayangan Pohon}}{\\text{Bayangan Tongkat}}$$\n\nLangkah 2: Masukkan angka yang diketahui:\n$$\\frac{T}{1{,}5} = \\frac{16}{2}$$\n$$\\frac{T}{1{,}5} = 8$$\n\nLangkah 3: Hitung tinggi pohon $T$:\n$$T = 8 \\times 1{,}5 = 12\\text{ meter}$$\nTinggi pohon tersebut adalah **12 meter**."
          },
          {
            "title": "Menghitung Panjang Sisi pada Dua Segitiga Sebangun",
            "problem": "Segitiga $ABC$ sebangun dengan segitiga $PQR$. Panjang sisi $AB = 6\\text{ cm}, BC = 8\\text{ cm}$, dan $PQ = 9\\text{ cm}$. Jika sisi $AB$ seletak dengan $PQ$ dan $BC$ seletak dengan $QR$, tentukan panjang sisi $QR$.",
            "solution": "Langkah 1: Susun perbandingan sisi-sisi yang seletak:\n$$\\frac{PQ}{AB} = \\frac{QR}{BC}$$\n\nLangkah 2: Masukkan nilai yang diketahui:\n$$\\frac{9}{6} = \\frac{QR}{8}$$\n\nLangkah 3: Sederhanakan perbandingan dan kalikan silang:\n$$\\frac{3}{2} = \\frac{QR}{8} \\implies 2 \\cdot QR = 24 \\implies QR = 12\\text{ cm}$$\nPanjang sisi $QR$ adalah **12 cm**."
          }
        ],
        "keyFormulas": [
          { "label": "Perbandingan Sisi Kesebangunan", "formula": "\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}" },
          { "label": "Formula Pengukuran Bayangan", "formula": "\\frac{T_1}{T_2} = \\frac{B_1}{B_2}" }
        ],
        "misconceptions": [
          "Menganggap semua persegi panjang pasti sebangun. Dua persegi panjang belum tentu sebangun karena perbandingan panjang dan lebarnya belum tentu senilai.",
          "Tertukar memasangkan sisi seletak yang bersesuaian pada dua segitiga yang posisinya diputar atau dicerminkan."
        ],
        "tutorTip": "Semua lingkaran, semua persegi, dan semua segitiga sama sisi PASTI SEBANGUN satu sama lain karena bentuk dan sudutnya selalu seragam!"
      },
      "questions": [
        {
          "id": "smp7-b5-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Pasangan bangun datar berikut yang sudah pasti sebangun adalah...",
          "options": [
            { "key": "A", "text": "Dua buah persegi" },
            { "key": "B", "text": "Dua buah persegi panjang" },
            { "key": "C", "text": "Dua buah segitiga sama kaki" },
            { "key": "D", "text": "Dua buah belah ketupat" }
          ],
          "correctAnswer": "A",
          "hint": "Persegi selalu memiliki 4 sudut siku-siku ($90^\\circ$) dan keempat sisinya selalu sama panjang (perbandingan sisi seletak selalu 1:1).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nSetiap persegi memiliki keempat sudut yang sama besar ($90^\\circ$) dan perbandingan sisi-sisinya selalu sama, sehingga **dua buah persegi** sudah pasti sebangun (Opsi A)."
        },
        {
          "id": "smp7-b5-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Sebuah foto berukuran $3\\text{ cm} \\times 4\\text{ cm}$ diperbesar sehingga sisi terpendeknya menjadi $9\\text{ cm}$. Ukuran sisi terpanjang foto setelah diperbesar adalah...",
          "options": [
            { "key": "A", "text": "12 cm" },
            { "key": "B", "text": "10 cm" },
            { "key": "C", "text": "15 cm" },
            { "key": "D", "text": "16 cm" }
          ],
          "correctAnswer": "A",
          "hint": "Faktor perbesaran: $k = \\frac{9}{3} = 3$. Kalikan sisi panjang dengan faktor perbesaran: $4 \\times 3$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Faktor skala: $k = \\frac{9}{3} = 3$\n2. Sisi panjang baru: $4 \\times 3 = 12\\text{ cm}$\nUkuran sisi terpanjangnya adalah **12 cm** (Opsi A)."
        },
        {
          "id": "smp7-b5-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah tiang bendera setinggi 6 meter memiliki panjang bayangan 4 meter di atas tanah. Pada saat yang sama, panjang bayangan sebuah gedung bertingkat adalah 24 meter. Tinggi gedung tersebut adalah...",
          "options": [
            { "key": "A", "text": "36 meter" },
            { "key": "B", "text": "30 meter" },
            { "key": "C", "text": "40 meter" },
            { "key": "D", "text": "32 meter" }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan perbandingan kesebangunan bayangan: $\\frac{T}{6} = \\frac{24}{4}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Perbandingan senilai:\n$$\\frac{T}{6} = \\frac{24}{4} = 6$$\n$$T = 6 \\times 6 = 36\\text{ meter}$$\nTinggi gedung tersebut adalah **36 meter** (Opsi A)."
        },
        {
          "id": "smp7-b5-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah bingkai foto terbuat dari kayu berukuran $30\\text{ cm} \\times 40\\text{ cm}$. Di dalam bingkai dipasang foto yang sebangun dengan bingkai tersebut. Jika lebar foto bagian dalam adalah 24 cm, maka luas daerah foto bagian dalam tersebut adalah...",
          "options": [
            { "key": "A", "text": "$768\\text{ cm}^2$" },
            { "key": "B", "text": "$720\\text{ cm}^2$" },
            { "key": "C", "text": "$800\\text{ cm}^2$" },
            { "key": "D", "text": "$640\\text{ cm}^2$" }
          ],
          "correctAnswer": "A",
          "hint": "Cari panjang foto $p$ dari perbandingan kesebangunan: $\\frac{p}{40} = \\frac{24}{30}$, lalu hitung luas $= p \\times 24$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Cari panjang foto dalam ($p$):\n$$\\frac{p}{40} = \\frac{24}{30} = \\frac{4}{5} \\implies p = 40 \\times \\frac{4}{5} = 32\\text{ cm}$$\n2. Hitung luas foto:\n$$\\text{Luas} = 32 \\times 24 = 768\\text{ cm}^2$$\nLuas foto bagian dalam adalah **$768\\text{ cm}^2$** (Opsi A)."
        }
      ]
    },
    {
      "id": "smp7-bab6-data-diagram",
      "title": "Bab 6: Data dan Diagram",
      "summary": {
        "overview": "Setiap hari kita disuguhi berbagai bentuk infografis visual di portal berita dan media sosial: diagram sebaran kasus kesehatan, grafik kenaikan harga komoditas pangan, hingga persentase pangsa pasar smartphone global. Manusia memproses informasi visual jauh lebih cepat daripada membaca deretan angka di tabel mentah. Visualisasi data inilah yang dipelajari dalam Data dan Diagram.\n\nStatistika deskriptif dimulai dari kemampuan mengumpulkan data melalui survei atau pencatatan langsung, mengorganisasikannya ke dalam tabel distribusi frekuensi dengan turus (tally), lalu memilih jenis diagram yang paling tepat sesuai tujuan komunikasi data. Diagram Batang sangat cocok untuk membandingkan kategori terpisah, Diagram Garis ideal untuk melihat tren perkembangan seiring waktu berkesinambungan, dan Diagram Lingkaran sangat efektif untuk melihat proporsi pangsa bagian terhadap keseluruhan (100% atau $360^\\circ$).\n\nBab ini menuntun siswa Kelas 7 mengumpulkan dan mengelompokkan data acak, menyajikan data ke dalam Diagram Batang, Diagram Garis, dan Diagram Lingkaran (derajat sudut pusat dan persentase), serta membaca dan menarik kesimpulan logis dari sajian diagram tersebut untuk memecahkan problem nyata.",
        "coreConcepts": [
          "Pengumpulan & Penyajian Data: Data diperoleh melalui wawancara, kuesioner, atau observasi langsung. Data mentah diorganisasikan ke dalam Tabel Frekuensi dengan bantuan turus.",
          "Diagram Batang: Menggunakan persegi panjang tegak atau mendatar dengan lebar sama untuk menampilkan perbandingan frekuensi tiap kategori.",
          "Diagram Garis: Menghubungkan titik-titik koordinat data dengan garis lurus. Digunakan secara khusus untuk menyajikan data yang berkesinambungan menurut urutan waktu (time-series), seperti suhu cuaca per jam atau kurs mata uang harian.",
          "Diagram Lingkaran (Pie Chart): Menampilkan proporsi bagian terhadap keseluruhan dalam sebuah lingkaran:\n- Format Derajat: $\\text{Sudut Pusat} = \\frac{\\text{Frekuensi Kategori}}{\\text{Total Data}} \\times 360^\\circ$\n- Format Persentase: $\\text{Persen} = \\frac{\\text{Frekuensi Kategori}}{\\text{Total Data}} \\times 100\\%$."
        ],
        "workedExamples": [
          {
            "title": "Menghitung Sudut Pusat pada Diagram Lingkaran",
            "problem": "Dari 60 siswa kelas 7, sebanyak 15 siswa memilih ekstrakurikuler basket, 20 siswa memilih futsal, 10 siswa memilih bulu tangkis, dan sisanya memilih seni lukis. Berapakah besar sudut pusat juring untuk ekstrakurikuler seni lukis pada diagram lingkaran?",
            "solution": "Langkah 1: Hitung banyak siswa yang memilih seni lukis:\n$$\\text{Seni Lukis} = 60 - (15 + 20 + 10) = 60 - 45 = 15\\text{ siswa}$$\n\nLangkah 2: Hitung besar sudut pusat juring:\n$$\\text{Besar Sudut} = \\frac{\\text{Banyak Siswa Seni Lukis}}{\\text{Total Siswa}} \\times 360^\\circ$$\n$$\\text{Besar Sudut} = \\frac{15}{60} \\times 360^\\circ = \\frac{1}{4} \\times 360^\\circ = 90^\\circ$$\nBesar sudut pusat juring seni lukis adalah **$90^\\circ$**."
          },
          {
            "title": "Membaca Kuantitas dari Persentase Diagram Lingkaran",
            "problem": "Sebuah diagram lingkaran menyajikan mata pencaharian warga desa. Sebanyak 40% bertani, 25% pedagang, 15% pegawai negeri, dan sisanya buruh pabrik. Jika jumlah seluruh warga desa adalah 1.200 orang, berapakah banyak warga yang bekerja sebagai buruh pabrik?",
            "solution": "Langkah 1: Hitung persentase warga yang bekerja sebagai buruh pabrik:\n$$\\text{Persen Buruh} = 100\\% - (40\\% + 25\\% + 15\\%) = 100\\% - 80\\% = 20\\%$$\n\nLangkah 2: Hitung banyak orang:\n$$\\text{Banyak Warga} = 20\\% \\times 1.200 = \\frac{20}{100} \\times 1.200 = 240\\text{ orang}$$\nBanyak warga yang bekerja sebagai buruh pabrik adalah **240 orang**."
          }
        ],
        "keyFormulas": [
          { "label": "Sudut Pusat Juring Lingkaran", "formula": "\\alpha = \\frac{f_i}{\\Sigma f} \\times 360^\\circ" },
          { "label": "Persentase Juring Lingkaran", "formula": "P = \\frac{f_i}{\\Sigma f} \\times 100\\%" }
        ],
        "misconceptions": [
          "Menghitung sudut juring dengan pengali 100 bukan 360. Pengali 100 digunakan untuk persentase (%), sedangkan pengali 360 digunakan untuk derajat sudut ($^\\circ$).",
          "Menggunakan diagram garis untuk membandingkan kategori kualitatif terpisah (misal: warna favorit), padahal diagram garis khusus untuk data perkembangan waktu."
        ],
        "tutorTip": "Ingat satu lingkaran penuh: Dalam derajat totalnya adalah $360^\\circ$, sedangkan dalam persentase totalnya adalah $100\\%$. Jangan sampai tertukar saat mengalikan rumus!"
      },
      "questions": [
        {
          "id": "smp7-b6-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Sebuah lingkaran penuh pada diagram lingkaran memiliki total sudut pusat sebesar...",
          "options": [
            { "key": "A", "text": "$360^\\circ$" },
            { "key": "B", "text": "$180^\\circ$" },
            { "key": "C", "text": "$100^\\circ$" },
            { "key": "D", "text": "$90^\\circ$" }
          ],
          "correctAnswer": "A",
          "hint": "Satu putaran lingkaran utuh bernilai $360^\\circ$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nSatu lingkaran penuh memiliki total sudut putaran sebesar **$360^\\circ$** (Opsi A)."
        },
        {
          "id": "smp7-b6-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Jenis diagram yang paling tepat digunakan untuk menyajikan data suhu tubuh seorang pasien yang diukur setiap jam selama 24 jam adalah...",
          "options": [
            { "key": "A", "text": "Diagram garis" },
            { "key": "B", "text": "Diagram lingkaran" },
            { "key": "C", "text": "Piktogram" },
            { "key": "D", "text": "Diagram batang bertingkat" }
          ],
          "correctAnswer": "A",
          "hint": "Data yang dicatat secara berkesinambungan menurut waktu paling jelas ditampilkan dengan diagram garis.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nUntuk melihat tren fluktuasi data yang berkembang menurut urutan waktu (time-series), jenis diagram yang paling representatif adalah **diagram garis** (Opsi A)."
        },
        {
          "id": "smp7-b6-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dalam suatu kelas berisi 40 siswa, sebanyak 10 siswa menyukai mata pelajaran sains. Jika disajikan dalam diagram lingkaran derajat, besar sudut juring untuk siswa yang menyukai sains adalah...",
          "options": [
            { "key": "A", "text": "$90^\\circ$" },
            { "key": "B", "text": "$45^\\circ$" },
            { "key": "C", "text": "$60^\\circ$" },
            { "key": "D", "text": "$100^\\circ$" }
          ],
          "correctAnswer": "A",
          "hint": "Hitung sudut juring: $\\frac{10}{40} \\times 360^\\circ$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Sudut} = \\frac{10}{40} \\times 360^\\circ = \\frac{1}{4} \\times 360^\\circ = 90^\\circ$$\nBesar sudut juringnya adalah **$90^\\circ$** (Opsi A)."
        },
        {
          "id": "smp7-b6-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Diagram lingkaran menyajikan hobi 200 siswa. Sebanyak $30\\%$ menyukai membaca, $25\\%$ olahraga, $20\\%$ musik, dan sisanya menggambar. Jumlah siswa yang memiliki hobi menggambar adalah...",
          "options": [
            { "key": "A", "text": "50 orang" },
            { "key": "B", "text": "40 orang" },
            { "key": "C", "text": "60 orang" },
            { "key": "D", "text": "45 orang" }
          ],
          "correctAnswer": "A",
          "hint": "Hitung persentase menggambar: $100\\% - (30\\% + 25\\% + 20\\%) = 25\\%$. Lalu kalikan dengan 200 siswa.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Persentase menggambar:\n$$100\\% - (30\\% + 25\\% + 20\\%) = 100\\% - 75\\% = 25\\%$$\n2. Jumlah siswa:\n$$25\\% \\times 200 = \\frac{25}{100} \\times 200 = 50\\text{ orang}$$\nJumlah siswa yang hobi menggambar adalah **50 orang** (Opsi A)."
        }
      ]
    }
  ]
}

fileContent = f"""/**
 * Data Kurikulum Kelas 7 SMP (Fase D)
 * 6 Bab Wajib Resmi Sesuai Buku Siswa Matematika
 */

export const grade7Data = {json.dumps(grade7Data, indent=2, ensure_ascii=False)};
"""

with open('src/data/grades/grade7.js', 'w', encoding='utf-8') as f:
    f.write(fileContent)

print("Successfully generated upgraded src/data/grades/grade7.js!")
