import json
import os

grade4Data = {
  "grade": 4,
  "level": "SD",
  "phase": "Fase B",
  "description": "Bilangan Cacah sampai 10.000, Pecahan, Pola Gambar & Bilangan, Pengukuran Luas & Volume, Bangun Datar, serta Piktogram & Diagram Batang",
  "chapters": [
    {
      "id": "sd4-bab1-bilangan-cacah",
      "title": "Bab 1: Bilangan Cacah sampai 10.000",
      "summary": {
        "overview": "Dalam pengalaman sehari-hari, anak-anak sering menjumpai bilangan empat angka bernilai ribuan. Ketika diajak berbelanja perlengkapan sekolah ke toko buku dengan label harga buku gambar Rp6.750,00, membaca papan petunjuk jarak tempuh dari rumah ke alun-alun kota yang mencapai 3.280 meter, atau mengamati catatan ketinggian puncak gunung di peta wisata yang menjulang 3.676 meter di atas permukaan laut, kita menggunakan bilangan empat digit.\n\nMateri Bilangan Cacah sampai 10.000 membantu siswa memahami struktur nilai tempat secara teratur. Bilangan ribuan tersusun atas kombinasi nilai ribuan, ratusan, puluhan, dan satuan. Angka 3 pada posisi ribuan bernilai 3.000, jauh berbeda nilainya dengan angka 3 pada posisi puluhan yang bernilai 30. Pemahaman ini melatih ketelitian anak saat membaca harga barang, membandingkan nominal uang saku, dan menghitung uang kembalian belanja.\n\nBab ini membimbing siswa Kelas 4 belajar membaca dan menulis bilangan cacah sampai 10.000, menentukan nilai tempat dan nilai angka, membandingkan dua bilangan menggunakan tanda lebih dari (>) dan kurang dari (<), menyusun dekomposisi nilai tempat, serta mempraktikkan operasi hitung penjumlahan, pengurangan bersusun menyimpan dan meminjam, perkalian bersusun, hingga pembagian bersusun (porogapit) dengan rapi.",
        "coreConcepts": [
          "Membaca dan Menulis Bilangan Cacah: Bilangan empat angka tersusun dari nilai tempat Ribuan, Ratusan, Puluhan, dan Satuan. Pembacaan dilakukan dari digit paling kiri (ribuan) ke kanan. Angka 1 pada ribuan dibaca 'seribu' (bukan satu ribu). Jika ada angka 0 pada posisi ratusan atau puluhan, kata 'ratus' atau 'puluh' tidak dibaca (contoh: 7.003 dibaca 'tujuh ribu tiga').",
          "Nilai Tempat vs Nilai Angka: Nilai tempat menunjukkan nama posisi digit (Ribuan, Ratusan, Puluhan, Satuan). Nilai angka adalah besaran murni dari digit tersebut. Pada bilangan 2.150: angka 2 bernilai tempat ribuan (nilai angka 2.000), angka 1 bernilai tempat ratusan (100), angka 5 bernilai tempat puluhan (50), dan angka 0 bernilai tempat satuan (0).",
          "Aturan Membandingkan & Mengurutkan: Membandingkan dua bilangan 4-angka dilakukan berurutan mulai dari nilai tempat tertinggi (ribuan). Jika digit ribuan sama, bandingkan digit ratusan, lalu puluhan, dan satuan. Notasi: lebih dari (>), kurang dari (<), dan sama dengan (=).",
          "Komposisi dan Dekomposisi: Komposisi adalah menyusun beberapa nilai tempat menjadi satu bilangan utuh: $4.000 + 100 + 20 + 8 = 4.128$. Dekomposisi adalah menguraikan bilangan menjadi bentuk penjumlahan nilai tempatnya: $6.192 = 6.000 + 100 + 90 + 2$.",
          "Operasi Hitung Multi-Digit: Penjumlahan dan pengurangan bersusun dengan teknik menyimpan dan meminjam sampai 1.000, perkalian bilangan cacah sampai 100 dengan model bersusun, serta pembagian bersusun (porogapit) bersisa dan tidak bersisa.",
          "Faktor dan Kelipatan: Kelipatan diperoleh dari perkalian bilangan dengan bilangan asli secara berurutan. Faktor adalah bilangan-bilangan yang dapat membagi habis bilangan tersebut tanpa sisa."
        ],
        "workedExamples": [
          {
            "title": "Membaca & Menulis Ketinggian Gunung Mahameru",
            "problem": "Ketinggian puncak Mahameru Gunung Semeru adalah 3.676 meter di atas permukaan laut. Tuliskan nama bilangan dari ketinggian tersebut dan tentukan nilai tempat masing-masing angkanya.",
            "solution": "Langkah 1: Uraikan setiap angka berdasarkan posisinya:\n- Ribuan: 3 dibaca 'tiga ribu'\n- Ratusan: 6 dibaca 'enam ratus'\n- Puluhan: 7 dibaca 'tujuh puluh'\n- Satuan: 6 dibaca 'enam'\n\nLangkah 2: Gabungkan nama bilangannya: **Tiga ribu enam ratus tujuh puluh enam**.\n\nLangkah 3: Nilai tempat:\n- Angka 3: ribuan ($3.000$)\n- Angka 6 pertama: ratusan ($600$)\n- Angka 7: puluhan ($70$)\n- Angka 6 kedua: satuan ($6$)."
          },
          {
            "title": "Pembagian Bersusun (Porogapit) Hasil Panen Jeruk",
            "problem": "Pak Ahmad memanen 96 buah jeruk dari kebun dan ingin memasukkannya ke dalam 4 kantong plastik secara merata. Berapa banyak buah jeruk pada setiap kantong plastik?",
            "solution": "Langkah 1: Gunakan pembagian bersusun (porogapit) $96 : 4$.\n\nLangkah 2: Bagikan angka puluhan terlebih dahulu:\n$$9 : 4 = 2 \\text{ sisa } 1 \\quad (2 \\times 4 = 8, \\text{ lalu } 9 - 8 = 1)$$\n\nLangkah 3: Turunkan angka satuan 6 sehingga menjadi bilangan 16.\n\nLangkah 4: Bagikan:\n$$16 : 4 = 4 \\quad (4 \\times 4 = 16, \\text{ sisa } 0)$$\nHasil baginya adalah **24**.\nSetiap kantong plastik berisi **24 buah jeruk**."
          }
        ],
        "keyFormulas": [
          { "label": "Tabel Nilai Tempat 4 Angka", "formula": "\\text{Ribuan (1.000)} \\mid \\text{Ratusan (100)} \\mid \\text{Puluhan (10)} \\mid \\text{Satuan (1)}" },
          { "label": "Dekomposisi Nilai Tempat", "formula": "N = (a \\times 1.000) + (b \\times 100) + (c \\times 10) + d" },
          { "label": "Aturan Porogapit", "formula": "a : b = c \\iff c \\times b + \\text{sisa} = a" }
        ],
        "misconceptions": [
          "Membaca angka 0 di tengah: 7.003 sering keliru dibaca 'tujuh ribu nol ratus tiga'. Yang benar adalah 'tujuh ribu tiga' (bagian yang bernilai 0 dilewati).",
          "Membaca angka 1 pada ribuan: 1.025 dibaca 'seribu dua puluh lima', bukan 'satu ribu dua puluh lima'.",
          "Pada porogapit: lupa menulis angka 0 pada hasil bagi saat angka yang diturunkan belum cukup untuk dibagi."
        ],
        "tutorTip": "Saat membandingkan dua bilangan 4-angka, periksa digit ribuan terlebih dahulu dari sebelah kiri, bukan dari angka belakang!"
      },
      "questions": [
        {
          "id": "sd4-b1-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Bilangan 'tujuh ribu dua puluh lima' jika ditulis dalam bentuk lambang bilangan adalah...",
          "options": [
            { "key": "A", "text": "7.025" },
            { "key": "B", "text": "7.250" },
            { "key": "C", "text": "7.205" },
            { "key": "D", "text": "7.052" }
          ],
          "correctAnswer": "A",
          "hint": "Perhatikan bahwa angka ratusannya tidak disebutkan, artinya nilai tempat ratusan diisi angka 0.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Angka ribuan: 7 (bernilai 7.000)\n2. Angka ratusan: 0 (karena tidak ada kata 'ratus')\n3. Angka puluhan dan satuan: 25 (dua puluh lima)\nLambang bilangannya adalah **7.025** (Opsi A)."
        },
        {
          "id": "sd4-b1-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Nilai tempat dari angka 6 pada bilangan 4.618 adalah...",
          "options": [
            { "key": "A", "text": "Ratusan" },
            { "key": "B", "text": "Ribuan" },
            { "key": "C", "text": "Puluhan" },
            { "key": "D", "text": "Satuan" }
          ],
          "correctAnswer": "A",
          "hint": "Hitung dari belakang: 8 satuan, 1 puluhan, 6...",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nAngka 6 berada pada posisi digit kedua dari kiri atau ketiga dari kanan, yaitu bernilai tempat **ratusan** dengan nilai angka 600 (Opsi A)."
        },
        {
          "id": "sd4-b1-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bentuk dekomposisi dari bilangan 8.352 yang benar adalah...",
          "options": [
            { "key": "A", "text": "8.000 + 300 + 50 + 2" },
            { "key": "B", "text": "800 + 300 + 50 + 2" },
            { "key": "C", "text": "8.000 + 30 + 50 + 2" },
            { "key": "D", "text": "8.000 + 300 + 5 + 20" }
          ],
          "correctAnswer": "A",
          "hint": "Uraikan nilai setiap angka: 8 ribuan, 3 ratusan, 5 puluhan, 2 satuan.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$8.352 = 8.000 + 300 + 50 + 2$$\nHasilnya adalah **8.000 + 300 + 50 + 2** (Opsi A)."
        },
        {
          "id": "sd4-b1-4",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil pembagian bersusun dari $84 : 3$ adalah...",
          "options": [
            { "key": "A", "text": "28" },
            { "key": "B", "text": "26" },
            { "key": "C", "text": "24" },
            { "key": "D", "text": "32" }
          ],
          "correctAnswer": "A",
          "hint": "Bagi angka puluhan dulu: $8 : 3 = 2$ sisa 2. Gabungkan dengan 4 menjadi $24 : 3 = 8$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $8 : 3 = 2$ sisa 2 ($2 \\times 3 = 6$, $8 - 6 = 2$)\n2. Turunkan angka 4 menjadi 24\n3. $24 : 3 = 8$ ($8 \\times 3 = 24$, sisa 0)\nHasil baginya adalah **28** (Opsi A)."
        },
        {
          "id": "sd4-b1-5",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Di sebuah perpustakaan terdapat 4.250 buku cerita dan 3.875 buku pelajaran. Selisih banyak buku cerita dan buku pelajaran tersebut adalah...",
          "options": [
            { "key": "A", "text": "375 buku" },
            { "key": "B", "text": "475 buku" },
            { "key": "C", "text": "325 buku" },
            { "key": "D", "text": "425 buku" }
          ],
          "correctAnswer": "A",
          "hint": "Kurangkan dengan teknik meminjam: $4.250 - 3.875$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Selisih} = 4.250 - 3.875 = 375$$\nSelisih buku tersebut adalah **375 buku** (Opsi A)."
        },
        {
          "id": "sd4-b1-6",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah toko kue menerima pesanan 7 kardus bolu. Setiap kardus berisi 24 potong bolu. Jika semua bolu tersebut akan dibagikan sama banyak kepada 6 panti asuhan, banyak bolu yang diterima setiap panti asuhan adalah...",
          "options": [
            { "key": "A", "text": "28 potong" },
            { "key": "B", "text": "24 potong" },
            { "key": "C", "text": "32 potong" },
            { "key": "D", "text": "30 potong" }
          ],
          "correctAnswer": "A",
          "hint": "Hitung total bolu: $7 \\times 24 = 168$, lalu bagi 6.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Total bolu: $7 \\times 24 = 168$ potong.\n2. Dibagi ke 6 panti asuhan: $168 : 6 = 28$ potong.\nSetiap panti asuhan menerima **28 potong bolu** (Opsi A)."
        }
      ]
    },
    {
      "id": "sd4-bab2-pecahan",
      "title": "Bab 2: Pecahan",
      "summary": {
        "overview": "Pernahkah kalian memotong buah semangka manis menjadi 8 potong yang sama besar untuk dinikmati bersama keluarga di siang hari yang terik? Jika kalian memakan 3 potong semangka dari 8 potong yang tersedia, kalian telah memakan $\\frac{3}{8}$ bagian semangka. Begitu pula saat memotong kue martabak atau membagi selembar kertas origami, kita memanfaatkan konsep Pecahan.\n\nPecahan adalah cara matematis untuk menyatakan bagian dari satu kesatuan utuh atau bagian dari suatu kelompok benda. Angka di atas tanda per disebut Pembilang (menunjukkan berapa banyak bagian yang diambil atau diarsir), sedangkan angka di bawahnya disebut Penyebut (menunjukkan berapa banyak potongan sama besar dalam satu kesatuan utuh).\n\nDalam dunia memasak, konstruksi bangunan, dan perdagangan sejak zaman Mesir kuno, pecahan digunakan untuk menakar bahan secara presisi agar tidak berlebih maupun kurang. Bab ini menuntun siswa Kelas 4 memahami konsep pecahan senilai dengan bantuan model gambar arsiran konkret, menyederhanakan pecahan dengan membagi FPB pembilang dan penyebut, membandingkan pecahan berpenyebut sama dan berbeda, mengenal bentuk pecahan campuran (seperti $1\\frac{1}{2}$), serta melakukan penjumlahan dan pengurangan pecahan berpenyebut sama secara terampil.",
        "coreConcepts": [
          "Konsep Pembilang dan Penyebut: Pada bentuk pecahan $\\frac{a}{b}$, $a$ adalah pembilang dan $b$ adalah penyebut ($b \\neq 0$). Penyebut menunjukkan jumlah pembagian potongan utuh.",
          "Pecahan Senilai: Pecahan yang memiliki nilai yang sama besar meskipun angkanya berbeda. Diperoleh dengan mengalikan atau membagi pembilang dan penyebut dengan angka yang sama: $\\frac{a}{b} = \\frac{a \\times k}{b \\times k}$.",
          "Menyederhanakan Pecahan: Membagi pembilang dan penyebut dengan bilangan yang sama (FPB) sampai pecahan tidak dapat dibagi lagi.",
          "Membandingkan Pecahan: Pada pecahan berpenyebut sama, bandingkan langsung pembilangnya (pembilang lebih besar berarti pecahannya lebih besar). Pada pecahan beda penyebut, gunakan perkalian silang: $\\frac{a}{b}$ vs $\\frac{c}{d} \\implies a \\times d$ vs $b \\times c$.",
          "Penjumlahan & Pengurangan Berpenyebut Sama: Jumlahkan atau kurangkan pembilangnya saja, penyebutnya tetap: $\\frac{a}{c} \\pm \\frac{b}{c} = \\frac{a \\pm b}{c}$."
        ],
        "workedExamples": [
          {
            "title": "Mencari Pecahan Senilai dengan Model Luas",
            "problem": "Tentukan dua pecahan yang senilai dengan $\\frac{2}{3}$.",
            "solution": "Langkah 1: Kalikan pembilang dan penyebut dengan angka 2:\n$$\\frac{2 \\times 2}{3 \\times 2} = \\frac{4}{6}$$\n\nLangkah 2: Kalikan pembilang dan penyebut dengan angka 3:\n$$\\frac{2 \\times 3}{3 \\times 3} = \\frac{6}{9}$$\nPecahan yang senilai dengan $\\frac{2}{3}$ adalah **$\\frac{4}{6}$** dan **$\\frac{6}{9}$**."
          },
          {
            "title": "Operasi Penjumlahan Pecahan Berpenyebut Sama",
            "problem": "Ibu memotong kue bolu menjadi 8 bagian sama besar. Kakak memakan $\\frac{2}{8}$ bagian dan adik memakan $\\frac{3}{8}$ bagian. Berapa bagian kue bolu yang sudah dimakan oleh kakak dan adik seluruhnya?",
            "solution": "Langkah 1: Tuliskan operasi penjumlahannya:\n$$\\frac{2}{8} + \\frac{3}{8}$$\n\nLangkah 2: Karena penyebutnya sudah sama yaitu 8, cukup jumlahkan pembilangnya:\n$$\\frac{2 + 3}{8} = \\frac{5}{8}$$\nBagian kue bolu yang sudah dimakan adalah **$\\frac{5}{8}$ bagian**."
          }
        ],
        "keyFormulas": [
          { "label": "Pecahan Senilai", "formula": "\\frac{a}{b} = \\frac{a \\times k}{b \\times k}" },
          { "label": "Penjumlahan Penyebut Sama", "formula": "\\frac{a}{c} + \\frac{b}{c} = \\frac{a + b}{c}" }
        ],
        "misconceptions": [
          "Menjumlahkan penyebut pada operasi pecahan berpenyebut sama: $\\frac{1}{4} + \\frac{2}{4} \\neq \\frac{3}{8}$. Penyebutnya tetap 4 sehingga hasilnya $\\frac{3}{4}$.",
          "Mengira pecahan dengan penyebut lebih besar selalu bernilai lebih besar, padahal $\\frac{1}{8} < \\frac{1}{2}$ karena dipotong menjadi potongan yang lebih kecil-kecil."
        ],
        "tutorTip": "Bayangkan pizza: jika pizza dipotong jadi 8, ukuran sepotongnya pasti jauh lebih kecil daripada pizza yang hanya dipotong jadi 2 bagian!"
      },
      "questions": [
        {
          "id": "sd4-b2-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Pecahan berikut yang senilai dengan $\\frac{1}{3}$ adalah...",
          "options": [
            { "key": "A", "text": "$\\frac{3}{9}$" },
            { "key": "B", "text": "$\\frac{2}{5}$" },
            { "key": "C", "text": "$\\frac{3}{6}$" },
            { "key": "D", "text": "$\\frac{4}{10}$" }
          ],
          "correctAnswer": "A",
          "hint": "Kalikan pembilang dan penyebut dengan angka 3: $\\frac{1 \\times 3}{3 \\times 3}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{1 \\times 3}{3 \\times 3} = \\frac{3}{9}$$\nPecahan yang senilai adalah **$\\frac{3}{9}$** (Opsi A)."
        },
        {
          "id": "sd4-b2-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Bentuk paling sederhana dari pecahan $\\frac{6}{8}$ adalah...",
          "options": [
            { "key": "A", "text": "$\\frac{3}{4}$" },
            { "key": "B", "text": "$\\frac{2}{3}$" },
            { "key": "C", "text": "$\\frac{1}{2}$" },
            { "key": "D", "text": "$\\frac{3}{5}$" }
          ],
          "correctAnswer": "A",
          "hint": "Bagi pembilang dan penyebut dengan angka 2.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{6 : 2}{8 : 2} = \\frac{3}{4}$$\nBentuk sederhananya adalah **$\\frac{3}{4}$** (Opsi A)."
        },
        {
          "id": "sd4-b2-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil dari operasi penjumlahan $\\frac{3}{7} + \\frac{2}{7}$ adalah...",
          "options": [
            { "key": "A", "text": "$\\frac{5}{7}$" },
            { "key": "B", "text": "$\\frac{5}{14}$" },
            { "key": "C", "text": "$\\frac{6}{7}$" },
            { "key": "D", "text": "$\\frac{1}{7}$" }
          ],
          "correctAnswer": "A",
          "hint": "Penyebutnya sudah sama yaitu 7, jumlahkan pembilangnya: $3 + 2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{3}{7} + \\frac{2}{7} = \\frac{3 + 2}{7} = \\frac{5}{7}$$\nHasilnya adalah **$\\frac{5}{7}$** (Opsi A)."
        },
        {
          "id": "sd4-b2-4",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Tanda pembanding yang tepat untuk mengisi titik-titik pada $\\frac{3}{5} \\dots \\frac{2}{5}$ adalah...",
          "options": [
            { "key": "A", "text": ">" },
            { "key": "B", "text": "<" },
            { "key": "C", "text": "=" },
            { "key": "D", "text": "$\\le$" }
          ],
          "correctAnswer": "A",
          "hint": "Karena penyebutnya sama (5), bandingkan pembilangnya: 3 lebih besar dari 2.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nKarena $3 > 2$, maka $\\frac{3}{5} > \\frac{2}{5}$ (Opsi A)."
        },
        {
          "id": "sd4-b2-5",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Ibu mempunyai sebuah melon utuh. Sebanyak $\\frac{2}{6}$ bagian diberikan kepada Dedi dan $\\frac{3}{6}$ bagian diberikan kepada Lani. Sisa melon Ibu sekarang adalah...",
          "options": [
            { "key": "A", "text": "$\\frac{1}{6}$ bagian" },
            { "key": "B", "text": "$\\frac{2}{6}$ bagian" },
            { "key": "C", "text": "$\\frac{5}{6}$ bagian" },
            { "key": "D", "text": "$\\frac{4}{6}$ bagian" }
          ],
          "correctAnswer": "A",
          "hint": "Melon utuh $= \\frac{6}{6}$. Kurangkan dengan total yang dibagikan: $\\frac{6}{6} - (\\frac{2}{6} + \\frac{3}{6})$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Melon yang dibagikan: $\\frac{2}{6} + \\frac{3}{6} = \\frac{5}{6}$.\n2. Sisa melon: $\\frac{6}{6} - \\frac{5}{6} = \\frac{1}{6}$.\nSisa melon Ibu adalah **$\\frac{1}{6}$ bagian** (Opsi A)."
        }
      ]
    },
    {
      "id": "sd4-bab3-pola-gambar-bilangan",
      "title": "Bab 3: Pola Gambar dan Pola Bilangan",
      "summary": {
        "overview": "Pernahkah kalian mengamati susunan batu bata pada dinding rumah atau corak ubin teras yang dipasang berselang-seling secara rapi? Mengapa susunannya tampak indah dan teratur dipandang mata? Keteraturan visual tersebut tercipta karena adanya hukum perulangan yang dinamakan Pola Gambar dan Pola Bilangan.\n\nDalam matematika dan sains komputer, pola membantu kita mengenali aturan di balik urutan kejadian dan memprediksi apa yang akan terjadi selanjutnya. Ketika kita berhitung loncat 2, 4, 6, 8, kita sedang menggunakan pola bilangan membesar dengan aturan penambahan 2. Sebaliknya, saat jam hitung mundur peluncuran roket menghitung 10, 9, 8, 7, kita menggunakan pola bilangan mengecil dengan aturan pengurangan 1. Irama ketukan musik marching band dan detak jantung manusia pun beroperasi berdasarkan pola keteraturan yang serupa.\n\nBab ini menuntun siswa Kelas 4 mengenali dan mendeskripsikan pola gambar yang berulang atau bertambah, menemukan aturan loncatan pola bilangan membesar (penjumlahan) dan mengecil (pengurangan), memprediksi bentuk gambar atau bilangan suku berikutnya, serta melatih kemampuan bernalar logis melalui teka-teki pola korek api dan susunan manik-manik secara menyenangkan.",
        "coreConcepts": [
          "Pola Gambar Membesar & Mengecil: Urutan gambar benda geometris atau objek yang jumlahnya bertambah atau berkurang dengan aturan keteraturan yang sama.",
          "Pola Bilangan Membesar: Barisan bilangan yang nilainya semakin besar karena memiliki aturan penambahan yang tetap, contoh: $3, 6, 9, 12, \\dots$ (aturan: bertambah 3).",
          "Pola Bilangan Mengecil: Barisan bilangan yang nilainya semakin kecil karena memiliki aturan pengurangan yang tetap, contoh: $20, 16, 12, 8, \\dots$ (aturan: berkurang 4).",
          "Menentukan Nilai Suku Berikutnya: Menemukan selisih (beda) antara dua suku yang berurutan, lalu menerapkan selisih tersebut untuk mencari bilangan berikutnya."
        ],
        "workedExamples": [
          {
            "title": "Menentukan Bilangan Selanjutnya pada Pola Membesar",
            "problem": "Tentukan dua bilangan berikutnya dari barisan pola bilangan: $4, 9, 14, 19, \\dots$",
            "solution": "Langkah 1: Cari aturan selisih antara dua bilangan berurutan:\n$$9 - 4 = 5$$\n$$14 - 9 = 5$$\n$$19 - 14 = 5$$\nAturan polanya adalah **selalu bertambah 5**.\n\nLangkah 2: Tambahkan 5 pada suku terakhir untuk mencari suku berikutnya:\n$$19 + 5 = 24$$\n$$24 + 5 = 29$$\nDua bilangan berikutnya adalah **24 dan 29**."
          },
          {
            "title": "Pola Batang Korek Api pada Persegi Bersambung",
            "problem": "Untuk membuat 1 persegi dibutuhkan 4 batang korek api. Untuk membuat 2 persegi bersambung dibutuhkan 7 batang korek api, dan 3 persegi bersambung butuh 10 batang korek api. Berapa banyak batang korek api yang dibutuhkan untuk membuat 5 persegi bersambung?",
            "solution": "Langkah 1: Tuliskan barisan banyak korek api:\n$$4, 7, 10, \\dots$$\n\nLangkah 2: Amati perubahannya:\nSetiap penambahan 1 persegi, banyak korek api bertambah 3 batang (karena ada 1 sisi yang berimpit).\n\nLangkah 3: Lanjutkan pola sampai persegi ke-5:\n- Persegi 1: 4 batang\n- Persegi 2: $4 + 3 = 7$ batang\n- Persegi 3: $7 + 3 = 10$ batang\n- Persegi 4: $10 + 3 = 13$ batang\n- Persegi 5: $13 + 3 = 16$ batang\nBanyak korek api yang dibutuhkan adalah **16 batang**."
          }
        ],
        "keyFormulas": [
          { "label": "Pola Bilangan Bertambah", "formula": "U_n = U_{n-1} + b" },
          { "label": "Pola Bilangan Berkurang", "formula": "U_n = U_{n-1} - b" }
        ],
        "misconceptions": [
          "Hanya memeriksa selisih dua angka pertama tanpa mengecek konsistensi pada angka-angka berikutnya.",
          "Tertukar antara pola membesar (penjumlahan) dengan pola mengecil (pengurangan)."
        ],
        "tutorTip": "Selalu kurangkan suku kedua dengan suku pertama ($U_2 - U_1$) untuk mengetahui berapa selisih loncatan polanya!"
      },
      "questions": [
        {
          "id": "sd4-b3-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Bilangan berikutnya dari barisan pola $5, 9, 13, 17, \\dots$ adalah...",
          "options": [
            { "key": "A", "text": "21" },
            { "key": "B", "text": "20" },
            { "key": "C", "text": "22" },
            { "key": "D", "text": "19" }
          ],
          "correctAnswer": "A",
          "hint": "Cari selisihnya: $9 - 5 = 4$. Tambahkan 4 ke angka 17.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Aturan pola: bertambah 4 ($+4$).\n2. Suku berikutnya: $17 + 4 = 21$.\nBilangan berikutnya adalah **21** (Opsi A)."
        },
        {
          "id": "sd4-b3-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Dua bilangan berikutnya dari pola bilangan mengecil $35, 30, 25, 20, \\dots$ adalah...",
          "options": [
            { "key": "A", "text": "15 dan 10" },
            { "key": "B", "text": "15 dan 5" },
            { "key": "C", "text": "10 dan 5" },
            { "key": "D", "text": "18 dan 16" }
          ],
          "correctAnswer": "A",
          "hint": "Aturan polanya berkurang 5: $20 - 5 = 15$, lalu $15 - 5 = 10$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Aturan pola: berkurang 5 ($-5$).\n2. Suku berikutnya: $20 - 5 = 15$ dan $15 - 5 = 10$.\nDua bilangan berikutnya adalah **15 dan 10** (Opsi A)."
        },
        {
          "id": "sd4-b3-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Perhatikan barisan bilangan berikut: $2, 6, 10, \\dots, 18, 22$. Bilangan yang tepat untuk mengisi titik-titik tersebut adalah...",
          "options": [
            { "key": "A", "text": "14" },
            { "key": "B", "text": "12" },
            { "key": "C", "text": "16" },
            { "key": "D", "text": "15" }
          ],
          "correctAnswer": "A",
          "hint": "Selisih polanya adalah $+4$: $10 + 4 = 14$ dan $14 + 4 = 18$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Beda pola: $6 - 2 = 4$ dan $10 - 6 = 4$.\n2. Angka pengisi titik-titik: $10 + 4 = 14$.\nBilangan yang tepat adalah **14** (Opsi A)."
        },
        {
          "id": "sd4-b3-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Lani menyusun kelereng membentuk segitiga: baris pertama 1 kelereng, baris kedua 3 kelereng, baris ketiga 5 kelereng, baris keempat 7 kelereng. Banyak kelereng pada baris keenam adalah...",
          "options": [
            { "key": "A", "text": "11 kelereng" },
            { "key": "B", "text": "9 kelereng" },
            { "key": "C", "text": "13 kelereng" },
            { "key": "D", "text": "15 kelereng" }
          ],
          "correctAnswer": "A",
          "hint": "Barisan bilangan ganjil bertambah 2: baris kelima $= 7 + 2 = 9$, baris keenam $= 9 + 2 = 11$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Pola bilangan ganjil: $1, 3, 5, 7, \\dots$ (bertambah 2).\n2. Baris ke-5: $7 + 2 = 9$.\n3. Baris ke-6: $9 + 2 = 11$.\nBanyak kelereng pada baris keenam adalah **11 kelereng** (Opsi A)."
        }
      ]
    },
    {
      "id": "sd4-bab4-luas-volume",
      "title": "Bab 4: Pengukuran Luas dan Volume",
      "summary": {
        "overview": "Pernahkah kalian menutup permukaan meja belajar menggunakan kertas koran, atau mengisi ember mandi menggunakan gayung air sampai penuh? Saat kalian menghitung berapa lembar kertas yang dibutuhkan untuk menutupi seluruh daun meja, kalian sedang mengukur Luas. Sementara saat kalian menghitung berapa kali gayung dituang sampai ember penuh air, kalian sedang mengukur Volume. Konsep ini juga digunakan saat tukang bangunan memperkirakan banyak ubin keramik yang harus dibeli untuk memasang lantai kamar tidur secara pas tanpa kekurangan bahan.\n\nDalam tahapan belajar Fase B, pengukuran luas dan volume dimulai dari pemahaman konkret menggunakan Satuan Tidak Baku (seperti lembaran kertas, petak ubin keramik, gelas plastik, atau gayung) sebelum beralih ke Satuan Baku Persegi ($\\text{cm}^2, \\text{m}^2$) dan Kubus Satuan ($\\text{cm}^3$ atau liter). Memahami luas dan volume melatih daya spasial anak dalam memperkirakan kebutuhan ruangan, luas permukaan dinding cat, dan kapasitas penampungan tangki air.\n\nBab ini menuntun siswa Kelas 4 membedakan konsep luas (ukuran permukaan dua dimensi) dan volume (ukuran ruang isi tiga dimensi), mengukur luas bangun datar menggunakan petak satuan berpetak, mengukur volume menggunakan kubus satuan dan wadah cair, serta membiasakan siswa menggunakan satuan baku dalam pemecahan masalah sehari-hari.",
        "coreConcepts": [
          "Konsep Luas: Besaran permukaan bidang dua dimensi yang dibatasi oleh batas tepinya. Diukur dengan menghitung banyak petak satuan persegi yang menutupi bidang tersebut.",
          "Pengukuran Luas dengan Petak Satuan: Menghitung jumlah kotak persegi utuh di dalam bidang. Jika ada setengah kotak, dua setengah kotak dihitung bernilai satu kotak utuh.",
          "Konsep Volume: Kapasitas ruang tiga dimensi yang dapat ditempati oleh suatu benda atau zat cair.",
          "Pengukuran Volume dengan Kubus Satuan: Menghitung berapa banyak kubus satuan kecil yang dapat mengisi penuh sebuah kotak mainan (Volume $=$ panjang $\\times$ lebar $\\times$ tinggi)."
        ],
        "workedExamples": [
          {
            "title": "Menghitung Luas Bidang Berpetak Satuan",
            "problem": "Sebuah persegi panjang pada kertas berpetak tersusun atas 5 kotak mendatar dan 3 kotak menurun. Berapakah luas bidang tersebut dalam petak satuan?",
            "solution": "Langkah 1: Hitung banyak kotak dalam baris dan kolom:\n$$\\text{Banyak kolom mendatar} = 5$$\n$$\\text{Banyak baris menurun} = 3$$\n\nLangkah 2: Kalikan baris dengan kolom:\n$$\\text{Luas} = 5 \\times 3 = 15\\text{ petak satuan}$$\nLuas bidang tersebut adalah **15 petak satuan**."
          },
          {
            "title": "Menghitung Volume Balok Menggunakan Kubus Satuan",
            "problem": "Sebuah kotak kardus diisi kubus-kubus satuan kecil. Kotak tersebut memuat 4 kubus ke samping, 2 kubus ke belakang, dan 3 kubus ke atas. Berapakah volume kotak kardus tersebut?",
            "solution": "Langkah 1: Identifikasi panjang, lebar, dan tinggi dalam kubus satuan:\n$$p = 4, \\quad l = 2, \\quad t = 3$$\n\nLangkah 2: Kalikan ketiga dimensi untuk mencari volume:\n$$V = 4 \\times 2 \\times 3 = 8 \\times 3 = 24\\text{ kubus satuan}$$\nVolume kotak tersebut adalah **24 kubus satuan**."
          }
        ],
        "keyFormulas": [
          { "label": "Luas Petak Satuan", "formula": "\\text{Luas} = \\text{Jumlah Petak Kotak Persegi}" },
          { "label": "Volume Kubus Satuan", "formula": "V = p \\times l \\times t \\text{ kubus satuan}" }
        ],
        "misconceptions": [
          "Tertukar antara satuan luas persegi ($\\text{cm}^2$) dengan satuan keliling ($\\text{cm}$).",
          "Menghitung volume hanya dari lapisan depan saja tanpa memperhitungkan lapisan kubus di baris belakangnya."
        ],
        "tutorTip": "Untuk menghitung volume balok kubus satuan: cukup hitung berapa kubus di lantai dasar (panjang $\\times$ lebar), lalu kalikan dengan tingginya (jumlah tumpukan lantai)!"
      },
      "questions": [
        {
          "id": "sd4-b4-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Sebuah persegi panjang pada buku berpetak memiliki panjang 6 petak satuan dan lebar 4 petak satuan. Luas persegi panjang tersebut adalah...",
          "options": [
            { "key": "A", "text": "24 petak satuan" },
            { "key": "B", "text": "20 petak satuan" },
            { "key": "C", "text": "10 petak satuan" },
            { "key": "D", "text": "12 petak satuan" }
          ],
          "correctAnswer": "A",
          "hint": "Kalikan panjang petak dengan lebar petak: $6 \\times 4$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Luas} = 6 \\times 4 = 24\\text{ petak satuan}$$\nLuasnya adalah **24 petak satuan** (Opsi A)."
        },
        {
          "id": "sd4-b4-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Sebuah wadah berbentuk balok diisi penuh dengan kubus mainan. Jika alas wadah memuat 12 kubus dan disusun setinggi 3 tumpukan, volume wadah tersebut adalah...",
          "options": [
            { "key": "A", "text": "36 kubus satuan" },
            { "key": "B", "text": "15 kubus satuan" },
            { "key": "C", "text": "24 kubus satuan" },
            { "key": "D", "text": "48 kubus satuan" }
          ],
          "correctAnswer": "A",
          "hint": "Kalikan luas alas (12) dengan tinggi tumpukan (3): $12 \\times 3$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Volume} = 12 \\times 3 = 36\\text{ kubus satuan}$$\nVolumenya adalah **36 kubus satuan** (Opsi A)."
        },
        {
          "id": "sd4-b4-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah ember dapat diisi penuh oleh 8 gayung air. Jika 1 gayung air sama dengan 2 gelas air, maka sebuah ember dapat diisi penuh oleh berapa gelas air?",
          "options": [
            { "key": "A", "text": "16 gelas air" },
            { "key": "B", "text": "10 gelas air" },
            { "key": "C", "text": "12 gelas air" },
            { "key": "D", "text": "14 gelas air" }
          ],
          "correctAnswer": "A",
          "hint": "Kalikan banyak gayung dengan isi gelas per gayung: $8 \\times 2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Volume} = 8 \\times 2 = 16\\text{ gelas air}$$\nDiperlukan **16 gelas air** (Opsi A)."
        },
        {
          "id": "sd4-b4-4",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Luas selembar kertas gambar adalah $200\\text{ cm}^2$. Kertas tersebut dipotong menjadi 4 bagian yang sama luasnya. Luas setiap potongan kertas adalah...",
          "options": [
            { "key": "A", "text": "$50\\text{ cm}^2$" },
            { "key": "B", "text": "$40\\text{ cm}^2$" },
            { "key": "C", "text": "$25\\text{ cm}^2$" },
            { "key": "D", "text": "$100\\text{ cm}^2$" }
          ],
          "correctAnswer": "A",
          "hint": "Bagi luas kertas total dengan 4: $200 : 4$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Luas} = \\frac{200}{4} = 50\\text{ cm}^2$$\nLuas setiap potongan adalah **$50\\text{ cm}^2$** (Opsi A)."
        },
        {
          "id": "sd4-b4-5",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah lantai ruangan berukuran panjang 5 meter dan lebar 4 meter akan ditutup dengan ubin karpet berukuran $1\\text{ m} \\times 1\\text{ m}$. Banyak ubin karpet yang dibutuhkan adalah...",
          "options": [
            { "key": "A", "text": "20 ubin" },
            { "key": "B", "text": "18 ubin" },
            { "key": "C", "text": "24 ubin" },
            { "key": "D", "text": "16 ubin" }
          ],
          "correctAnswer": "A",
          "hint": "Hitung luas lantai: $5 \\times 4 = 20\\text{ m}^2$. Karena luas 1 ubin adalah $1\\text{ m}^2$, dibutuhkan 20 ubin.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Luas lantai} = 5 \\times 4 = 20\\text{ m}^2$$\nBanyak ubin $= \\frac{20}{1} = 20$ ubin (Opsi A)."
        },
        {
          "id": "sd4-b4-6",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah kotak mainan berbentuk kubus memiliki volume 64 kubus satuan. Jika panjang dan lebarnya masing-masing adalah 4 kubus satuan, tinggi kotak mainan tersebut adalah...",
          "options": [
            { "key": "A", "text": "4 kubus satuan" },
            { "key": "B", "text": "8 kubus satuan" },
            { "key": "C", "text": "16 kubus satuan" },
            { "key": "D", "text": "2 kubus satuan" }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan $V = p \\times l \\times t$: $64 = 4 \\times 4 \\times t = 16 \\times t$. Bagi 64 dengan 16.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$64 = 16 \\times t \\implies t = \\frac{64}{16} = 4\\text{ kubus satuan}$$\nTinggi kotak adalah **4 kubus satuan** (Opsi A)."
        },
        {
          "id": "sd4-b4-7",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dua buah botol sirup berukuran sama dapat mengisi penuh sebuah teko besar. Jika sebuah teko besar dapat mengisi 6 cangkir, maka 1 botol sirup setara dengan berapa cangkir?",
          "options": [
            { "key": "A", "text": "3 cangkir" },
            { "key": "B", "text": "2 cangkir" },
            { "key": "C", "text": "4 cangkir" },
            { "key": "D", "text": "6 cangkir" }
          ],
          "correctAnswer": "A",
          "hint": "2 botol $= 6$ cangkir. Maka 1 botol $= 6 : 2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Kapasitas 1 botol} = \\frac{6}{2} = 3\\text{ cangkir}$$\nHasilnya adalah **3 cangkir** (Opsi A)."
        }
      ]
    },
    {
      "id": "sd4-bab5-bangun-datar",
      "title": "Bab 5: Bangun Datar",
      "summary": {
        "overview": "Di lingkungan sekitar kita, bentuk-bentuk bangun datar menghiasi pemandangan setiap hari. Layar televisi dan papan tulis kelas berbentuk persegi panjang, rambu bahaya lalu lintas berbentuk segitiga, layang-layang yang terbang di lapangan berbentuk layang-layang, dan potongan atap rumah berbentuk trapesium. Di taman bermain, paving block tersusun rapat mengunci satu sama lain tanpa celah sedikit pun.\n\nBangun datar adalah bidang rata dua dimensi yang dibatasi oleh garis lurus atau garis lengkung. Mengamati bangun datar melatih anak-anak mengenali keteraturan geometri: menghitung banyak sisi, menghitung banyak titik sudut, dan memahami bahwa bangun datar dapat dikomposisikan (digabungkan) menjadi bentuk baru atau didekomposisikan (dipotong-potong), seperti permainan teka-teki Tangram tradisional dari kayu.\n\nPara arsitek dan insinyur teknik sipil memanfaatkan kekuatan struktur segitiga untuk membangun jembatan gantung kokoh dan kerangka atap rumah tahan gempa. Bab ini membimbing siswa Kelas 4 mengidentifikasi ciri-ciri bangun datar segibanyak beraturan dan tidak beraturan, membedakan jenis-jenis segitiga dan segiempat, menyusun beberapa bangun datar menjadi satu bentuk utuh (komposisi), serta memotong suatu bangun datar menjadi bangun-bangun datar yang lebih sederhana (dekomposisi) secara analitis.",
        "coreConcepts": [
          "Segibanyak (Poligon): Bangun tertutup yang seluruh sisinya dibatasi oleh garis lurus. Terbagi menjadi Segibanyak Beraturan (seluruh sisi sama panjang dan seluruh sudut sama besar, seperti persegi dan segitiga sama sisi) dan Segibanyak Tidak Beraturan.",
          "Jenis-Jenis Segitiga:\n- Berdasarkan panjang sisi: Segitiga Sama Sisi (3 sisi sama), Segitiga Sama Kaki (2 sisi sama), Segitiga Sembarang (ketiga sisi berbeda).\n- Berdasarkan besar sudut: Segitiga Siku-Siku (ada sudut $90^\\circ$), Segitiga Lancip (semua sudut $<90^\\circ$), Segitiga Tumpul (ada satu sudut $>90^\\circ$).",
          "Komposisi Bangun Datar: Menggabungkan dua atau lebih bangun datar untuk membentuk bangun baru (contoh: menggabungkan dua segitiga siku-siku menjadi sebuah persegi panjang).",
          "Dekomposisi Bangun Datar: Memotong atau menguraikan satu bangun datar menjadi beberapa bangun datar yang lebih kecil (contoh: memotong persegi panjang secara diagonal menjadi dua segitiga siku-siku)."
        ],
        "workedExamples": [
          {
            "title": "Mengidentifikasi Segibanyak Beraturan",
            "problem": "Manakah di antara bangun berikut yang merupakan segibanyak beraturan: (a) Persegi Panjang, (b) Persegi, (c) Jajar Genjang?",
            "solution": "Langkah 1: Ingat syarat segibanyak beraturan:\n1. Semua sisi harus sama panjang.\n2. Semua sudut harus sama besar.\n\nLangkah 2: Evaluasi masing-masing bangun:\n- Persegi panjang: sudutnya sama ($90^\\circ$), tapi sisinya tidak sama panjang (ada panjang dan lebar).\n- Persegi: keempat sisinya sama panjang DAN keempat sudutnya sama besar ($90^\\circ$).\n- Jajar genjang: sisinya tidak sama panjang dan sudutnya tidak sama besar.\n\nLangkah 3: Kesimpulan:\nBangun yang merupakan segibanyak beraturan adalah **Persegi**."
          },
          {
            "title": "Komposisi Dua Segitiga Menjadi Persegi Panjang",
            "problem": "Dua buah segitiga siku-siku yang sama dan sebangun (kongruen) dengan sisi alas 4 cm dan tinggi 3 cm digabungkan pada sisi miringnya. Bangun datar apakah yang terbentuk dan berapakah ukuran sisi-sisinya?",
            "solution": "Langkah 1: Pahami sifat penggabungan segitiga siku-siku:\nJika dua segitiga siku-siku identik digabungkan pada sisi miringnya yang sama panjang, sudut-sudut siku-siku akan saling berhadapan.\n\nLangkah 2: Bangun yang terbentuk memiliki dua pasang sisi sejajar yang sama panjang (panjang 4 cm dan lebar 3 cm) serta 4 sudut siku-siku.\nBangun yang terbentuk adalah **persegi panjang** berukuran $4\\text{ cm} \\times 3\\text{ cm}$."
          }
        ],
        "keyFormulas": [
          { "label": "Jumlah Sudut Segitiga", "formula": "\\angle A + \\angle B + \\angle C = 180^\\circ" },
          { "label": "Jumlah Sudut Segiempat", "formula": "\\text{Total Sudut} = 360^\\circ" }
        ],
        "misconceptions": [
          "Mengira persegi panjang adalah segibanyak beraturan karena keempat sudutnya siku-siku. Segibanyak beraturan mewajibkan sisinya juga harus sama panjang.",
          "Menyebut lingkaran sebagai segibanyak. Lingkaran dibatasi garis lengkung, bukan garis lurus."
        ],
        "tutorTip": "Kunci segibanyak beraturan: 'Semua sisinya sama panjang, semua sudutnya sama besar!' Contoh terbaik: Persegi dan Segitiga Sama Sisi."
      },
      "questions": [
        {
          "id": "sd4-b5-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Bangun datar segibanyak beraturan yang memiliki 3 sisi sama panjang dan 3 sudut sama besar adalah...",
          "options": [
            { "key": "A", "text": "Segitiga sama sisi" },
            { "key": "B", "text": "Segitiga sama kaki" },
            { "key": "C", "text": "Segitiga siku-siku" },
            { "key": "D", "text": "Segitiga sembarang" }
          ],
          "correctAnswer": "A",
          "hint": "Segitiga dengan ketiga sisi sama panjang dan sudut masing-masing $60^\\circ$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nSegitiga yang ketiga sisinya sama panjang dan sudutnya sama besar adalah **segitiga sama sisi** (Opsi A)."
        },
        {
          "id": "sd4-b5-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Jika sebuah persegi dipotong tepat sepanjang salah satu garis diagonalnya, maka akan dihasilkan dua bangun datar berupa...",
          "options": [
            { "key": "A", "text": "Dua segitiga siku-siku sama kaki" },
            { "key": "B", "text": "Dua persegi panjang" },
            { "key": "C", "text": "Dua segitiga sama sisi" },
            { "key": "D", "text": "Dua trapesium" }
          ],
          "correctAnswer": "A",
          "hint": "Sudut persegi adalah siku-siku ($90^\\circ$) dan kedua sisinya sama panjang.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nDiagonal persegi membagi sudut $90^\\circ$ dan menghubungkan dua sisi yang sama panjang, menghasilkan **dua segitiga siku-siku sama kaki** (Opsi A)."
        },
        {
          "id": "sd4-b5-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Banyaknya sudut siku-siku yang dimiliki oleh sebuah persegi panjang adalah...",
          "options": [
            { "key": "A", "text": "4" },
            { "key": "B", "text": "2" },
            { "key": "C", "text": "3" },
            { "key": "D", "text": "0" }
          ],
          "correctAnswer": "A",
          "hint": "Keempat sudut pojok pada persegi panjang berbentuk siku-siku ($90^\\circ$).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nPersegi panjang memiliki **4 sudut siku-siku** (Opsi A)."
        },
        {
          "id": "sd4-b5-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dua buah segitiga sama kaki yang berukuran sama digabungkan pada sisi alasnya yang sama panjang. Bangun datar segiempat yang terbentuk adalah...",
          "options": [
            { "key": "A", "text": "Belah ketupat" },
            { "key": "B", "text": "Persegi panjang" },
            { "key": "C", "text": "Jajar genjang" },
            { "key": "D", "text": "Trapesium" }
          ],
          "correctAnswer": "A",
          "hint": "Keempat sisi luarnya memiliki panjang yang sama karena berasal dari kaki-kaki segitiga yang sama.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nKarena keempat sisi luarnya sama panjang dan alas persekutuan menjadi diagonalnya, bangun yang terbentuk adalah **belah ketupat** (Opsi A)."
        }
      ]
    },
    {
      "id": "sd4-bab6-piktogram-diagram-batang",
      "title": "Bab 6: Piktogram dan Diagram Batang",
      "summary": {
        "overview": "Saat guru menanyakan buah kegemaran siswa di kelas, ada yang menjawab apel, mangga, jeruk, atau pisang. Jika jawaban tersebut hanya diingat di kepala, kita akan cepat lupa berapa banyak siswa yang menyukai masing-masing buah. Namun, jika kita mencatatnya dalam bentuk tabel dan menggambarkannya dalam bentuk balok warna-warni yang berdiri tegak, semua orang dapat langsung mengetahui buah apa yang paling disukai dalam sekejap mata.\n\nSajian balok warna-warni tersebut dinamakan Diagram Batang, sedangkan penyajian data menggunakan simbol gambar dinamakan Piktogram (Diagram Gambar). Di stasiun televisi dan portal berita, penyiar prakiraan cuaca dan komentator pertandingan olahraga selalu menggunakan grafik visual untuk menampilkan skor pertandingan, perolehan medali atlet, dan persentase curah hujan. Manusia dapat memproses gambar visual beribu kali lebih cepat dibandingkan membaca teks paragraf panjang.\n\nBab ini membimbing siswa Kelas 4 mengumpulkan data sederhana dengan mencatat langsung (turus), menyajikan data ke dalam tabel frekuensi, membuat piktogram dengan skala simbol tertentu, menggambar diagram batang tegak dan mendatar, serta membaca informasi penting seperti data tertinggi, terendah, dan selisih banyak data secara teliti dan percaya diri.",
        "coreConcepts": [
          "Tabel Frekuensi dan Turus: Mengorganisasikan data acak ke dalam baris dan kolom dengan bantuan turus (tally) agar mudah dihitung jumlahnya.",
          "Piktogram (Diagram Gambar): Penyajian data dengan simbol gambar. Setiap 1 gambar dapat mewakili 1 benda, 2 benda, 5 benda, atau 10 benda.",
          "Diagram Batang: Penyajian data dengan gambar batang persegi panjang tegak atau mendatar, di mana tinggi batang menunjukkan frekuensi data.",
          "Membaca Diagram: Mengidentifikasi kategori dengan nilai terbanyak, terkecil, dan menghitung selisih antarkategori."
        ],
        "workedExamples": [
          {
            "title": "Membaca Data Piktogram Koleksi Buku",
            "problem": "Dalam sebuah piktogram, 1 gambar buku mewakili 2 eksemplar buku. Jika di samping nama Edo terdapat 4 gambar buku, berapa banyak buku yang dimiliki Edo?",
            "solution": "Langkah 1: Perhatikan keterangan simbol:\n$$1\\text{ gambar buku} = 2\\text{ buah buku}$$\n\nLangkah 2: Kalikan dengan jumlah gambar:\n$$\\text{Banyak buku} = 4 \\times 2 = 8\\text{ buah buku}$$\nEdo memiliki **8 buah buku**."
          },
          {
            "title": "Menghitung Selisih dari Diagram Batang",
            "problem": "Sebuah diagram batang menunjukkan penjualan es krim: Rasa Cokelat terjual 35 cup dan Rasa Stroberi terjual 20 cup. Berapakah selisih penjualan es krim rasa cokelat dan stroberi?",
            "solution": "Langkah 1: Ambil data frekuensi:\n- Cokelat: 35 cup\n- Stroberi: 20 cup\n\nLangkah 2: Kurangkan nilai terbesar dengan nilai terkecil:\n$$\\text{Selisih} = 35 - 20 = 15\\text{ cup}$$\nSelisih penjualannya adalah **15 cup**."
          }
        ],
        "keyFormulas": [
          { "label": "Nilai Piktogram", "formula": "\\text{Nilai Data} = \\text{Banyak Gambar} \\times \\text{Skala Gambar}" },
          { "label": "Selisih Data", "formula": "\\text{Selisih} = \\text{Data Maksimal} - \\text{Data Minimal}" }
        ],
        "misconceptions": [
          "Lupa membaca keterangan skala simbol pada piktogram (mengira 1 gambar selalu bernilai 1 buah).",
          "Salah melihat angka pada garis skala sumbu tegak diagram batang."
        ],
        "tutorTip": "Selalu perhatikan label angka pada sumbu tegak diagram batang untuk membaca tinggi batang secara akurat!"
      },
      "questions": [
        {
          "id": "sd4-b6-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Pada sebuah piktogram, 1 gambar bintang mewakili 5 poin prestasi. Jika kelompok Melati mendapatkan 4 gambar bintang, berapa total poin yang diperoleh kelompok Melati?",
          "options": [
            { "key": "A", "text": "20 poin" },
            { "key": "B", "text": "15 poin" },
            { "key": "C", "text": "25 poin" },
            { "key": "D", "text": "9 poin" }
          ],
          "correctAnswer": "A",
          "hint": "Kalikan jumlah bintang (4) dengan nilai tiap bintang (5).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$4 \\times 5 = 20\\text{ poin}$$\nTotal poinnya adalah **20 poin** (Opsi A)."
        },
        {
          "id": "sd4-b6-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Diagram yang menggunakan persegi panjang tegak atau mendatar untuk menunjukkan banyak data disebut...",
          "options": [
            { "key": "A", "text": "Diagram batang" },
            { "key": "B", "text": "Diagram lingkaran" },
            { "key": "C", "text": "Diagram garis" },
            { "key": "D", "text": "Piktogram" }
          ],
          "correctAnswer": "A",
          "hint": "Diagram berbentuk balok tegak/mendatar disebut diagram batang.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nDiagram berbentuk persegi panjang tegak atau mendatar adalah **diagram batang** (Opsi A)."
        },
        {
          "id": "sd4-b6-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Diagram batang ekstrakurikuler SD: Tari 15 siswa, Renang 25 siswa, Lukis 20 siswa, Silat 30 siswa. Jumlah seluruh siswa yang mengikuti ekstrakurikuler adalah...",
          "options": [
            { "key": "A", "text": "90 siswa" },
            { "key": "B", "text": "85 siswa" },
            { "key": "C", "text": "95 siswa" },
            { "key": "D", "text": "80 siswa" }
          ],
          "correctAnswer": "A",
          "hint": "Jumlahkan seluruh siswa: $15 + 25 + 20 + 30$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$15 + 25 + 20 + 30 = 90\\text{ siswa}$$\nTotalnya adalah **90 siswa** (Opsi A)."
        },
        {
          "id": "sd4-b6-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dari data pada soal sebelumnya, selisih jumlah siswa yang mengikuti Silat dan Tari adalah...",
          "options": [
            { "key": "A", "text": "15 siswa" },
            { "key": "B", "text": "10 siswa" },
            { "key": "C", "text": "20 siswa" },
            { "key": "D", "text": "5 siswa" }
          ],
          "correctAnswer": "A",
          "hint": "Kurangkan peserta Silat (30) dengan Tari (15).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Selisih} = 30 - 15 = 15\\text{ siswa}$$\nSelisihnya adalah **15 siswa** (Opsi A)."
        }
      ]
    }
  ]
}

fileContent = f"""/**
 * Data Kurikulum Kelas 4 SD (Fase B)
 * 6 Bab Resmi Sesuai Buku Siswa Matematika
 */

export const grade4Data = {json.dumps(grade4Data, indent=2, ensure_ascii=False)};
"""

with open('src/data/grades/grade4.js', 'w', encoding='utf-8') as f:
    f.write(fileContent)

print("Successfully generated upgraded src/data/grades/grade4.js!")
