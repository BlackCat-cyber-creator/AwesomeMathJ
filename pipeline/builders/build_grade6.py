import json
import os

grade6Data = {
  "grade": 6,
  "level": "SD",
  "phase": "Fase C",
  "description": "Pecahan dan Desimal, Rasio, Kubus dan Balok (Jaring-Jaring, Luas Permukaan & Volume), serta Konsep Peluang Sederhana",
  "chapters": [
    {
      "id": "sd6-bab1-pecahan-desimal",
      "title": "Bab 1: Pecahan dan Desimal",
      "summary": {
        "overview": "Di kehidupan sehari-hari, kita sangat akrab dengan pembagian makanan dan pengukuran bahan. Ketika seorang ibu membagi kue tart menjadi beberapa bagian yang sama rata untuk tamu, seorang anak menakar $\\frac{1}{4}$ liter susu cair untuk membuat puding, atau seorang penjahit mengukur panjang kain 1,75 meter untuk membuat kemeja, kita menggunakan bilangan pecahan dan desimal. Petani di sawah juga menggunakan takaran pecahan saat melarutkan konsentrat pupuk cair ke dalam tangki semprot air agar tanaman tumbuh subur.\n\nPecahan dan desimal adalah dua cara berbeda untuk menyatakan besaran bagian dari satu kesatuan utuh. Dalam sains, teknologi, dan perdagangan, bilangan desimal mempermudah perhitungan menggunakan timbangan digital dan kasir pembayaran, sementara bentuk pecahan sangat memudahkan operasi pembagian proporsional tanpa pembulatan desimal yang panjang.\n\nBab ini membimbing siswa Kelas 6 mendalami operasi perkalian dan pembagian pecahan dengan bilangan asli, pembagian pecahan dengan pecahan lain menggunakan konsep kebalikan, mengubah pecahan menjadi bentuk desimal secara bersusun (porogapit), serta mengoperasikan perkalian dan pembagian desimal untuk menyelesaikan persoalan kontekstual sehari-hari secara akurat.",
        "coreConcepts": [
          "Perkalian Pecahan dengan Bilangan Asli: Dilakukan dengan mengalikan bilangan asli dengan pembilang pecahan, sementara penyebutnya tetap: $n \\times \\frac{a}{b} = \\frac{n \\times a}{b}$.",
          "Pembagian Pecahan dengan Bilangan Asli: Dilakukan dengan mengalikan penyebut pecahan dengan bilangan asli tersebut: $\\frac{a}{b} : n = \\frac{a}{b \\times n}$.",
          "Pembagian Pecahan dengan Pecahan: Membagi dengan pecahan sama artinya dengan mengalikan dengan kebalikan pecahan pembaginya: $\\frac{a}{b} : \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$.",
          "Konversi Pecahan dan Desimal: Mengubah pecahan biasa menjadi desimal dengan membagi pembilang dengan penyebut secara bersusun atau mengubah penyebut menjadi 10, 100, atau 1.000.",
          "Operasi Hitung Desimal: Penjumlahan dan pengurangan desimal dilakukan bersusun dengan meluruskan tanda koma desimal. Perkalian desimal dihitung seperti perkalian biasa, lalu jumlah angka di belakang koma dijumlahkan."
        ],
        "workedExamples": [
          {
            "title": "Pembagian Pecahan untuk Membuat Minuman Sirup",
            "problem": "Ibu memiliki $\\frac{3}{4}$ liter sirup manis. Setiap gelas minuman membutuhkan $\\frac{1}{8}$ liter sirup. Berapa banyak gelas minuman yang dapat dibuat oleh Ibu?",
            "solution": "Langkah 1: Tuliskan kalimat matematika pembagian pecahan:\n$$\\frac{3}{4} : \\frac{1}{8}$$\n\nLangkah 2: Ubah operasi pembagian menjadi perkalian dengan membalik pecahan pembagi:\n$$\\frac{3}{4} \\times \\frac{8}{1} = \\frac{3 \\times 8}{4 \\times 1} = \\frac{24}{4} = 6$$\nJadi, banyak gelas minuman yang dapat dibuat adalah **6 gelas**."
          },
          {
            "title": "Perkalian Desimal Pembelian Buah Apel",
            "problem": "Beni membeli 2,5 kg buah apel di pasar. Jika harga 1 kg buah apel adalah Rp24.000,00, berapa total uang yang harus dibayar Beni?",
            "solution": "Langkah 1: Kalikan berat buah dengan harga per kilogram:\n$$\\text{Total} = 2{,}5 \\times 24.000$$\n\nLangkah 2: Kalikan tanpa koma: $25 \\times 24.000 = 600.000$.\n\nLangkah 3: Karena terdapat 1 angka di belakang koma pada 2,5, geser koma 1 angka ke kiri:\n$$600.000 \\to 60.000{,}0$$\nJadi, total uang yang harus dibayar Beni adalah **Rp60.000,00**."
          }
        ],
        "keyFormulas": [
          { "label": "Pembagian Pecahan", "formula": "\\frac{a}{b} : \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}" },
          { "label": "Perkalian Pecahan", "formula": "\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}" }
        ],
        "misconceptions": [
          "Membagi pecahan dengan membagi langsung pembilang dan penyebut tanpa membalik pecahan pembagi.",
          "Lupa meluruskan tanda koma saat melakukan penjumlahan atau pengurangan bersusun pada bilangan desimal."
        ],
        "tutorTip": "Ingat jurus pembagian pecahan: 'Tahan depan, Ubah kali, Balik belakang!' Misalnya $\\frac{2}{5} : \\frac{3}{10} = \\frac{2}{5} \\times \\frac{10}{3} = \\frac{4}{3}$."
      },
      "questions": [
        {
          "id": "sd6-b1-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Hasil dari operasi pembagian pecahan $\\frac{2}{3} : \\frac{4}{9}$ adalah...",
          "options": [
            { "key": "A", "text": "$\\frac{3}{2}$ atau $1\\frac{1}{2}$" },
            { "key": "B", "text": "$\\frac{8}{27}$" },
            { "key": "C", "text": "$\\frac{2}{3}$" },
            { "key": "D", "text": "$\\frac{1}{2}$" }
          ],
          "correctAnswer": "A",
          "hint": "Balikkan pecahan kedua menjadi $\\frac{9}{4}$, lalu lakukan operasi perkalian.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{2}{3} : \\frac{4}{9} = \\frac{2}{3} \\times \\frac{9}{4} = \\frac{18}{12} = \\frac{3}{2} = 1\\frac{1}{2}$$\nHasilnya adalah **$1\\frac{1}{2}$** (Opsi A)."
        },
        {
          "id": "sd6-b1-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Bentuk pecahan desimal dari $\\frac{3}{5}$ adalah...",
          "options": [
            { "key": "A", "text": "0,6" },
            { "key": "B", "text": "0,35" },
            { "key": "C", "text": "0,53" },
            { "key": "D", "text": "0,8" }
          ],
          "correctAnswer": "A",
          "hint": "Ubah penyebut menjadi 10 dengan mengalikan pembilang dan penyebut dengan 2: $\\frac{3 \\times 2}{5 \\times 2} = \\frac{6}{10}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{3}{5} = \\frac{3 \\times 2}{5 \\times 2} = \\frac{6}{10} = 0{,}6$$\nBentuk desimalnya adalah **0,6** (Opsi A)."
        },
        {
          "id": "sd6-b1-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil dari perkalian bilangan desimal $1{,}2 \\times 0{,}4$ adalah...",
          "options": [
            { "key": "A", "text": "0,48" },
            { "key": "B", "text": "4,8" },
            { "key": "C", "text": "0,048" },
            { "key": "D", "text": "0,84" }
          ],
          "correctAnswer": "A",
          "hint": "Kalikan $12 \\times 4 = 48$. Karena ada 2 angka di belakang koma (1 angka dari 1,2 dan 1 angka dari 0,4), hasilnya memiliki 2 desimal.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $12 \\times 4 = 48$\n2. Total digit desimal di belakang koma: $1 + 1 = 2$ angka.\n3. Letakkan koma: $0{,}48$\nHasilnya adalah **0,48** (Opsi A)."
        },
        {
          "id": "sd6-b1-4",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Pak Edo memiliki tali sepanjang 15 meter. Tali tersebut dipotong-potong menjadi beberapa bagian yang sama panjang, di mana masing-masing panjangnya $1\\frac{1}{4}$ meter. Banyak potongan tali yang dihasilkan adalah...",
          "options": [
            { "key": "A", "text": "12 potongan" },
            { "key": "B", "text": "10 potongan" },
            { "key": "C", "text": "15 potongan" },
            { "key": "D", "text": "14 potongan" }
          ],
          "correctAnswer": "A",
          "hint": "Ubah $1\\frac{1}{4}$ menjadi $\\frac{5}{4}$, lalu hitung $15 : \\frac{5}{4}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Ubah ke pecahan biasa: $1\\frac{1}{4} = \\frac{5}{4}$\n2. Hitung pembagian:\n$$15 : \\frac{5}{4} = 15 \\times \\frac{4}{5} = \\frac{60}{5} = 12$$\nBanyak potongan tali adalah **12 potongan** (Opsi A)."
        },
        {
          "id": "sd6-b1-5",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Ibu membeli 3 kantong beras, masing-masing berisi 2,5 kg. Beras tersebut akan dimasukkan ke dalam beberapa wadah kecil berukuran 0,5 kg hingga habis. Banyak wadah kecil yang dibutuhkan Ibu adalah...",
          "options": [
            { "key": "A", "text": "15 wadah" },
            { "key": "B", "text": "12 wadah" },
            { "key": "C", "text": "10 wadah" },
            { "key": "D", "text": "18 wadah" }
          ],
          "correctAnswer": "A",
          "hint": "Hitung total beras: $3 \\times 2{,}5 = 7{,}5\\text{ kg}$, lalu bagi dengan 0,5.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Total beras: $3 \\times 2{,}5 = 7{,}5\\text{ kg}$.\n2. Banyak wadah yang dibutuhkan:\n$$\\text{Banyak wadah} = \\frac{7{,}5}{0{,}5} = \\frac{75}{5} = 15$$\nBanyak wadah kecil yang dibutuhkan adalah **15 wadah** (Opsi A)."
        }
      ]
    },
    {
      "id": "sd6-bab2-rasio",
      "title": "Bab 2: Rasio",
      "summary": {
        "overview": "Pernahkah kalian membantu ibu mencampurkan air sirup dan air mineral saat menyiapkan hidangan buka puasa? Jika ibu menyarankan 'Campurkan 1 gelas sirup untuk setiap 3 gelas air', artinya perbandingan sirup terhadap air adalah 1 banding 3. Jika kalian ingin membuat minuman yang lebih banyak untuk 12 orang tamu, berapa gelas sirup dan air yang harus disiapkan? Pertanyaan ini diselesaikan menggunakan konsep Rasio. Para insinyur sipil dan arsitek juga menggunakan prinsip perbandingan rasio serupa saat mencampurkan semen, pasir, dan kerikil untuk mengecor tiang fondasi bangunan yang kokoh.\n\nRasio adalah perbandingan matematis antara dua kuantitas besaran yang sejenis. Pemahaman rasio sangat berguna dalam banyak hal: menentukan takaran bahan adonan roti, menghitung perbandingan jumlah siswa laki-laki dan perempuan di kelas, memperkirakan waktu tempuh perjalanan, hingga membaca skala gambar denah rumah idaman.\n\nBab ini menuntun siswa Kelas 6 memahami konsep dasar rasio $a : b$, menyederhanakan bentuk rasio, mencari rasio senilai (ekuivalen), membagi jumlah barang berdasarkan perbandingan proporsional yang diketahui, serta menyelesaikan masalah perbandingan kontekstual di lingkungan sekitar.",
        "coreConcepts": [
          "Konsep Rasio: Cara membandingkan dua nilai besaran yang sejenis. Ditulis dalam bentuk $a : b$ (dibaca '$a$ berbanding $b$') atau dalam bentuk pecahan $\\frac{a}{b}$.",
          "Rasio Sederhana: Menyederhanakan nilai perbandingan dengan membagi kedua angka dengan Faktor Persekutuan Terbesar (FPB) sampai tidak dapat dibagi lagi.",
          "Rasio Senilai (Ekuivalen): Rasio yang memiliki nilai perbandingan yang sama. Diperoleh dengan mengalikan atau membagi kedua besaran dengan bilangan yang sama.",
          "Pembagian Berdasarkan Rasio: Jika sejumlah kuantitas total $T$ dibagi dengan rasio $a : b$, maka bagian pertama adalah $\\frac{a}{a + b} \\times T$ dan bagian kedua adalah $\\frac{b}{a + b} \\times T$."
        ],
        "workedExamples": [
          {
            "title": "Menyederhanakan Rasio Siswa Kelas",
            "problem": "Di sebuah kelas terdapat 16 siswa laki-laki dan 24 siswa perempuan. Tentukan rasio perbandingan paling sederhana antara jumlah siswa laki-laki dan siswa perempuan.",
            "solution": "Langkah 1: Tuliskan rasio perbandingannya:\n$$\\text{Laki-laki} : \\text{Perempuan} = 16 : 24$$\n\nLangkah 2: Cari FPB dari 16 dan 24, yaitu 8.\n\nLangkah 3: Bagi kedua angka dengan FPB 8:\n$$16 : 8 = 2$$\n$$24 : 8 = 3$$\nRasio paling sederhananya adalah **$2 : 3$**."
          },
          {
            "title": "Membagi Uang Saku Berdasarkan Rasio",
            "problem": "Ayah membagikan uang saku sebesar Rp50.000,00 kepada Andi dan Budi dengan perbandingan $2 : 3$. Berapa rupiah uang saku yang diterima masing-masing anak?",
            "solution": "Langkah 1: Hitung jumlah bagian rasio: $2 + 3 = 5$ bagian.\n\nLangkah 2: Hitung uang yang diterima Andi (2 bagian):\n$$\\text{Andi} = \\frac{2}{5} \\times 50.000 = 20.000$$\n\nLangkah 3: Hitung uang yang diterima Budi (3 bagian):\n$$\\text{Budi} = \\frac{3}{5} \\times 50.000 = 30.000$$\nAndi menerima **Rp20.000,00** dan Budi menerima **Rp30.000,00**."
          }
        ],
        "keyFormulas": [
          { "label": "Notasi Rasio", "formula": "a : b = \\frac{a}{b}" },
          { "label": "Proporsi Bagian", "formula": "\\text{Bagian } A = \\frac{a}{a + b} \\times \\text{Total}" }
        ],
        "misconceptions": [
          "Tertukar urutan saat menuliskan rasio: jika ditanya rasio laki-laki terhadap perempuan, jangan menuliskan jumlah perempuan terlebih dahulu.",
          "Membagi total jumlah barang langsung dengan salah satu angka rasio tanpa menjumlahkan seluruh bagian rasio terlebih dahulu."
        ],
        "tutorTip": "Ingat rumus praktis pembagian rasio: Cari total bagian terlebih dahulu (jumlahkan angka rasionya), lalu bagi total benda dengan total bagian tersebut untuk mencari nilai per 1 bagian!"
      },
      "questions": [
        {
          "id": "sd6-b2-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Bentuk paling sederhana dari rasio 15 : 25 adalah...",
          "options": [
            { "key": "A", "text": "3 : 5" },
            { "key": "B", "text": "5 : 3" },
            { "key": "C", "text": "1 : 2" },
            { "key": "D", "text": "3 : 4" }
          ],
          "correctAnswer": "A",
          "hint": "Bagi kedua angka dengan angka 5 (FPB dari 15 dan 25).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$15 : 5 = 3 \\quad \\text{dan} \\quad 25 : 5 = 5$$\nRasio paling sederhananya adalah **3 : 5** (Opsi A)."
        },
        {
          "id": "sd6-b2-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Di dalam sebuah kandang terdapat 12 ekor ayam dan 18 ekor bebek. Rasio jumlah ayam terhadap jumlah seluruh ternak di kandang adalah...",
          "options": [
            { "key": "A", "text": "2 : 5" },
            { "key": "B", "text": "2 : 3" },
            { "key": "C", "text": "3 : 5" },
            { "key": "D", "text": "1 : 3" }
          ],
          "correctAnswer": "A",
          "hint": "Hitung total seluruh ternak terlebih dahulu: $12 + 18 = 30$. Lalu bandingkan ayam terhadap total: $12 : 30$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Total ternak: $12 + 18 = 30$\n2. Rasio ayam terhadap total: $12 : 30$\n3. Sederhanakan dengan membagi 6: $2 : 5$\nRasionya adalah **2 : 5** (Opsi A)."
        },
        {
          "id": "sd6-b2-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Perbandingan umur Rina dan umur adiknya adalah 5 : 3. Jika umur Rina saat ini adalah 15 tahun, maka umur adiknya adalah...",
          "options": [
            { "key": "A", "text": "9 tahun" },
            { "key": "B", "text": "10 tahun" },
            { "key": "C", "text": "8 tahun" },
            { "key": "D", "text": "12 tahun" }
          ],
          "correctAnswer": "A",
          "hint": "Nilai 1 bagian rasio: $15 : 5 = 3$ tahun. Kalikan bagian adik dengan 3: $3 \\times 3$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Nilai 1 bagian: $15 : 5 = 3\\text{ tahun}$\n2. Umur adik (3 bagian): $3 \\times 3 = 9\\text{ tahun}$\nUmur adik adalah **9 tahun** (Opsi A)."
        },
        {
          "id": "sd6-b2-4",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah resep kue membutuhkan tepung dan gula dengan rasio 4 : 3. Jika seorang koki menggunakan 600 gram tepung terigu, berapa gram gula pasir yang harus ditambahkan?",
          "options": [
            { "key": "A", "text": "450 gram" },
            { "key": "B", "text": "400 gram" },
            { "key": "C", "text": "500 gram" },
            { "key": "D", "text": "350 gram" }
          ],
          "correctAnswer": "A",
          "hint": "Hitung per 1 bagian: $600 : 4 = 150$ gram. Lalu kalikan untuk gula: $3 \\times 150$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Nilai 1 bagian rasio: $\\frac{600}{4} = 150\\text{ gram}$\n2. Gula pasir yang dibutuhkan: $3 \\times 150 = 450\\text{ gram}$\nGula yang harus ditambahkan adalah **450 gram** (Opsi A)."
        },
        {
          "id": "sd6-b2-5",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Uang tabungan Dimas dan Fajar berjumlah Rp120.000,00. Jika perbandingan uang Dimas dan Fajar adalah 3 : 5, maka selisih uang tabungan mereka berdua adalah...",
          "options": [
            { "key": "A", "text": "Rp30.000,00" },
            { "key": "B", "text": "Rp45.000,00" },
            { "key": "C", "text": "Rp75.000,00" },
            { "key": "D", "text": "Rp20.000,00" }
          ],
          "correctAnswer": "A",
          "hint": "Total bagian $= 3 + 5 = 8$. Nilai per bagian $= 120.000 : 8 = 15.000$. Selisih bagian $= 5 - 3 = 2$ bagian. Kalikan $2 \\times 15.000$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Total bagian: $3 + 5 = 8$ bagian.\n2. Nilai 1 bagian: $\\frac{120.000}{8} = 15.000$.\n3. Selisih rasio: $5 - 3 = 2$ bagian.\n4. Selisih uang: $2 \\times 15.000 = \\text{Rp}30.000,00$.\nSelisih tabungan mereka adalah **Rp30.000,00** (Opsi A)."
        }
      ]
    },
    {
      "id": "sd6-bab3-kubus-balok",
      "title": "Bab 3: Kubus dan Balok",
      "summary": {
        "overview": "Kotak kado ulang tahun, kardus kemasan mie instan, akuarium ikan hias di ruang tamu, hingga dadu permainan monopoli memiliki bentuk ruang tiga dimensi yang beraturan. Bentuk-bentuk ini dinamakan Kubus dan Balok. Keduanya merupakan bangun ruang sisi datar yang paling banyak dimanfaatkan dalam kehidupan sehari-hari. Bahkan peti kemas kontainer di pelabuhan peti kemas dirancang berbentuk balok agar dapat disusun rapi dan memaksimalkan ruang muat kapal kargo.\n\nMemahami sifat-sifat kubus dan balok sangat penting dalam berbagai bidang praktis. Saat kita ingin membungkus kotak kado dengan kertas kado bermotif, kita harus mengetahui luas permukaan seluruh sisinya agar kertas yang dibeli pas dan tidak kurang. Di sisi lain, saat kita ingin mengisi bak penampungan air atau menata kardus barang di dalam bagasi mobil, kita harus menghitung volume kapasitas isi ruangan tersebut.\n\nBab ini membimbing siswa Kelas 6 mengenali ciri-ciri dan sifat kubus serta balok (jumlah sisi, rusuk, titik sudut), membedah bentuk jaring-jaring yang valid jika lipatannya dirakit menjadi bangun utuh, menghitung luas permukaan, serta menghitung volume ruang kubus dan balok dalam berbagai situasi terapan.",
        "coreConcepts": [
          "Ciri-Ciri Kubus dan Balok:\n- Memiliki 6 sisi, 12 rusuk, dan 8 titik sudut.\n- Kubus: Keenam sisinya berbentuk persegi yang sama dan sebangun (kongruen).\n- Balok: Memiliki 3 pasang sisi berbentuk persegi panjang yang saling berhadapan dan kongruen.",
          "Jaring-Jaring Kubus dan Balok: Pola susunan 6 persegi (kubus) atau 6 persegi panjang (balok) pada bidang datar yang jika dilipat mengikuti garis rusuknya akan membentuk bangun ruang tertutup yang sempurna tanpa tumpang tindih.",
          "Luas Permukaan:\n- Kubus dengan rusuk $s$: $L = 6 \\times s^2$.\n- Balok dengan panjang $p$, lebar $l$, dan tinggi $t$: $L = 2 \\times (p \\cdot l + p \\cdot t + l \\cdot t)$.",
          "Volume (Kapasitas Isi Ruang):\n- Kubus: $V = s \\times s \\times s = s^3$.\n- Balok: $V = p \\times l \\times t$."
        ],
        "workedExamples": [
          {
            "title": "Menghitung Luas Kertas Kado Pembungkus Kubus",
            "problem": "Siti memiliki sebuah kotak kado berbentuk kubus dengan panjang rusuk 10 cm. Berapa sentimeter persegi luas kertas kado minimal yang dibutuhkan Siti untuk melapisi seluruh permukaan kotak kado tersebut?",
            "solution": "Langkah 1: Identifikasi panjang rusuk kubus: $s = 10\\text{ cm}$.\n\nLangkah 2: Gunakan rumus luas permukaan kubus (terdiri dari 6 persegi identik):\n$$L = 6 \\times s^2$$\n\nLangkah 3: Hitung nilai numerik:\n$$L = 6 \\times 10^2 = 6 \\times 100 = 600\\text{ cm}^2$$\nLuas kertas kado minimal yang dibutuhkan adalah **$600\\text{ cm}^2$**."
          },
          {
            "title": "Menghitung Volume Air Akuarium Balok",
            "problem": "Sebuah akuarium berbentuk balok berukuran panjang 50 cm, lebar 30 cm, dan tinggi 40 cm. Berapa liter air yang dibutuhkan untuk mengisi akuarium tersebut sampai penuh? ($1\\text{ liter} = 1.000\\text{ cm}^3$)",
            "solution": "Langkah 1: Hitung volume balok:\n$$V = p \\times l \\times t$$\n$$V = 50 \\times 30 \\times 40 = 60.000\\text{ cm}^3$$\n\nLangkah 2: Konversikan satuan $\\text{cm}^3$ ke liter dengan membagi 1.000:\n$$\\text{Volume} = \\frac{60.000}{1.000} = 60\\text{ liter}$$\nAir yang dibutuhkan untuk mengisi penuh akuarium adalah **60 liter**."
          }
        ],
        "keyFormulas": [
          { "label": "Volume Kubus", "formula": "V = s^3" },
          { "label": "Luas Permukaan Kubus", "formula": "L = 6s^2" },
          { "label": "Volume Balok", "formula": "V = p \\times l \\times t" },
          { "label": "Luas Permukaan Balok", "formula": "L = 2(pl + pt + lt)" }
        ],
        "misconceptions": [
          "Tertukar antara rumus luas permukaan dengan volume: volume menyatakan kapasitas isi ($\text{cm}^3$), sedangkan luas permukaan menyatakan luas bentangan selimut luar ($\text{cm}^2$).",
          "Mengira semua pola susunan 6 persegi pasti dapat dilipat membentuk kubus. Ada pola tertentu yang jika dilipat sisinya akan bertumpuk."
        ],
        "tutorTip": "Ingat: Luas permukaan kubus dikalikan 6 karena kubus memiliki 6 sisi berbentuk persegi yang sama luasnya: $6 \\times (s \\times s)$!"
      },
      "questions": [
        {
          "id": "sd6-b3-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Volume sebuah kubus yang memiliki panjang rusuk 8 cm adalah...",
          "options": [
            { "key": "A", "text": "$512\\text{ cm}^3$" },
            { "key": "B", "text": "$384\\text{ cm}^3$" },
            { "key": "C", "text": "$256\\text{ cm}^3$" },
            { "key": "D", "text": "$64\\text{ cm}^3$" }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan rumus volume kubus: $V = s \\times s \\times s = 8 \\times 8 \\times 8$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$V = 8 \\times 8 \\times 8 = 64 \\times 8 = 512\\text{ cm}^3$$\nVolume kubus adalah **$512\\text{ cm}^3$** (Opsi A)."
        },
        {
          "id": "sd6-b3-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Sebuah balok memiliki ukuran panjang 12 cm, lebar 5 cm, dan tinggi 4 cm. Volume balok tersebut adalah...",
          "options": [
            { "key": "A", "text": "$240\\text{ cm}^3$" },
            { "key": "B", "text": "$120\\text{ cm}^3$" },
            { "key": "C", "text": "$260\\text{ cm}^3$" },
            { "key": "D", "text": "$180\\text{ cm}^3$" }
          ],
          "correctAnswer": "A",
          "hint": "Kalikan panjang, lebar, dan tinggi: $12 \\times 5 \\times 4$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$V = 12 \\times 5 \\times 4 = 60 \\times 4 = 240\\text{ cm}^3$$\nVolume balok adalah **$240\\text{ cm}^3$** (Opsi A)."
        },
        {
          "id": "sd6-b3-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Luas permukaan sebuah kubus yang memiliki panjang rusuk 5 cm adalah...",
          "options": [
            { "key": "A", "text": "$150\\text{ cm}^2$" },
            { "key": "B", "text": "$125\\text{ cm}^2$" },
            { "key": "C", "text": "$100\\text{ cm}^2$" },
            { "key": "D", "text": "$175\\text{ cm}^2$" }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan rumus luas permukaan kubus: $L = 6 \\times s^2 = 6 \\times 5^2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$L = 6 \\times (5 \\times 5) = 6 \\times 25 = 150\\text{ cm}^2$$\nLuas permukaan kubus adalah **$150\\text{ cm}^2$** (Opsi A)."
        },
        {
          "id": "sd6-b3-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah bak mandi berbentuk balok memiliki ukuran panjang 80 cm, lebar 60 cm, dan tinggi 50 cm. Bak mandi tersebut telah terisi air sebanyak setengah bagiannya. Volume air yang perlu ditambahkan agar bak mandi terisi penuh adalah... (1 liter = $1.000\\text{ cm}^3$)",
          "options": [
            { "key": "A", "text": "120 liter" },
            { "key": "B", "text": "240 liter" },
            { "key": "C", "text": "100 liter" },
            { "key": "D", "text": "150 liter" }
          ],
          "correctAnswer": "A",
          "hint": "Hitung volume total balok: $80 \\times 60 \\times 50 = 240.000\\text{ cm}^3 = 240\\text{ liter}$. Karena sudah terisi setengah, sisa yang perlu ditambahkan adalah setengahnya.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Volume total bak mandi:\n$$V = 80 \\times 60 \\times 50 = 240.000\\text{ cm}^3 = 240\\text{ liter}$$\n2. Air yang perlu ditambahkan adalah setengah bagian:\n$$\\text{Air tambahan} = \\frac{1}{2} \\times 240 = 120\\text{ liter}$$\nVolume air yang perlu ditambahkan adalah **120 liter** (Opsi A)."
        }
      ]
    },
    {
      "id": "sd6-bab4-peluang",
      "title": "Bab 4: Peluang",
      "summary": {
        "overview": "Sebelum pertandingan sepak bola dimulai, wasit melempar koin logam ke udara untuk menentukan tim mana yang berhak memilih sisi gawang atau menendang bola pertama kali. Mengapa wasit menggunakan koin? Karena kedua kapten tim memiliki kesempatan atau peluang yang sama persis dan adil (50:50) untuk mendapatkan sisi Angka atau sisi Gambar. Prinsip keacakan ini juga digunakan dalam undian arisan keluarga dan pemilihan giliran presentasi kelompok di kelas.\n\nDalam kehidupan sehari-hari, kita sering membuat perkiraan mengenai kejadian yang belum terjadi: 'Apakah besok akan turun hujan?', 'Mungkinkah matahari terbit dari sebelah barat?', atau 'Berapa besar kemungkinan kita memenangkan undian doorprize berhadiah sepeda?'. Konsep derajat kemungkinan terjadinya suatu peristiwa inilah yang dipelajari dalam Teori Peluang Sederhana.\n\nBab ini membimbing siswa Kelas 6 mengenali skala kemungkinan suatu peristiwa (pasti terjadi, mungkin terjadi, atau mustahil terjadi), menentukan ruang sampel pada pelemparan koin logam dan dadu bermata enam, membandingkan peluang teoritik sederhana dalam bentuk pecahan, serta memahami arti keadilan (fairness) dalam permainan acak.",
        "coreConcepts": [
          "Tingkat Kepastian Peristiwa:\n- Peristiwa Pasti: Kejadian yang sudah pasti terjadi (nilai peluang $= 1$), contoh: manusia pasti bernapas membutuhkan oksigen.\n- Peristiwa Mungkin: Kejadian yang bisa terjadi atau bisa tidak terjadi (nilai peluang antara 0 dan 1), contoh: besok sore turun hujan.\n- Peristiwa Mustahil: Kejadian yang tidak mungkin terjadi (nilai peluang $= 0$), contoh: matahari terbit dari arah barat.",
          "Titik Sampel dan Ruang Sampel: Ruang sampel ($S$) adalah himpunan semua hasil yang mungkin dari suatu percobaan. Titik sampel adalah setiap anggota kemungkinan dalam ruang sampel. Contoh: pelemparan koin memiliki ruang sampel $\\{\\text{Angka}, \\text{Gambar}\\}$ dengan $n(S) = 2$.",
          "Peluang Sederhana: Rasio antara banyaknya kejadian yang diharapkan ($n(A)$) terhadap seluruh ruang sampel ($n(S)$): $P(A) = \\frac{n(A)}{n(S)}$."
        ],
        "workedExamples": [
          {
            "title": "Peluang Munculnya Mata Dadu Genap",
            "problem": "Sebuah dadu bermata enam dilempar satu kali. Berapakah peluang munculnya mata dadu bilangan genap?",
            "solution": "Langkah 1: Tentukan ruang sampel pelemparan dadu:\n$$S = \\{1, 2, 3, 4, 5, 6\\} \\implies n(S) = 6$$\n\nLangkah 2: Tentukan kejadian muncul mata dadu genap:\n$$A = \\{2, 4, 6\\} \\implies n(A) = 3$$\n\nLangkah 3: Hitung peluangnya:\n$$P(A) = \\frac{n(A)}{n(S)} = \\frac{3}{6} = \\frac{1}{2}$$\nPeluang muncul mata dadu genap adalah **$\\frac{1}{2}$**."
          },
          {
            "title": "Peluang Mengambil Kelereng dari Kantong",
            "problem": "Di dalam sebuah kantong terdapat 3 kelereng merah, 5 kelereng biru, dan 2 kelereng kuning. Jika Budi mengambil satu kelereng secara acak, berapakah peluang terambilnya kelereng berwarna merah?",
            "solution": "Langkah 1: Hitung total seluruh kelereng dalam kantong (ruang sampel):\n$$n(S) = 3 + 5 + 2 = 10$$\n\nLangkah 2: Banyak kelereng merah: $n(M) = 3$.\n\nLangkah 3: Hitung peluangnya:\n$$P(M) = \\frac{n(M)}{n(S)} = \\frac{3}{10}$$\nPeluang terambilnya kelereng merah adalah **$\\frac{3}{10}$** (atau 0,3)."
          }
        ],
        "keyFormulas": [
          { "label": "Peluang Suatu Kejadian", "formula": "P(A) = \\frac{n(A)}{n(S)}" },
          { "label": "Rentang Nilai Peluang", "formula": "0 \\le P(A) \\le 1" }
        ],
        "misconceptions": [
          "Menyatakan nilai peluang lebih dari 1. Nilai peluang selalu berkisar antara 0 (mustahil) sampai 1 (pasti terjadi).",
          "Menganggap semua kejadian selalu memiliki peluang 50:50, padahal peluang sangat bergantung pada proporsi jumlah titik sampel terhadap total seluruhnya."
        ],
        "tutorTip": "Ingat rumus sederhana peluang: 'Jumlah yang dicari dibagi Jumlah seluruhnya!' Misalnya ada 3 kelereng merah dari total 10 kelereng, peluangnya langsung $\\frac{3}{10}$!"
      },
      "questions": [
        {
          "id": "sd6-b4-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Sebuah koin logam dilempar satu kali. Peluang munculnya sisi Gambar adalah...",
          "options": [
            { "key": "A", "text": "$\\frac{1}{2}$" },
            { "key": "B", "text": "$\\frac{1}{3}$" },
            { "key": "C", "text": "1" },
            { "key": "D", "text": "0" }
          ],
          "correctAnswer": "A",
          "hint": "Koin memiliki 2 sisi (Angka dan Gambar). Peluang sisi Gambar adalah 1 dari 2.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{1}{2}$$\nPeluang muncul sisi Gambar adalah **$\\frac{1}{2}$** (Opsi A)."
        },
        {
          "id": "sd6-b4-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Pernyataan berikut yang merupakan contoh peristiwa yang pasti terjadi adalah...",
          "options": [
            { "key": "A", "text": "Matahari terbit dari sebelah timur" },
            { "key": "B", "text": "Hari ini akan turun hujan lebat" },
            { "key": "C", "text": "Mendapatkan angka 7 saat melempar dadu biasa" },
            { "key": "D", "text": "Kucing dapat bertelur" }
          ],
          "correctAnswer": "A",
          "hint": "Peristiwa pasti memiliki peluang 1 dan selalu terjadi sesuai hukum alam.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nMatahari terbit dari sebelah timur adalah kepastian hukum alam (peluang $= 1$). Jadi, pernyataan tersebut adalah **peristiwa pasti terjadi** (Opsi A)."
        },
        {
          "id": "sd6-b4-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah dadu bermata enam dilempar satu kali. Peluang munculnya mata dadu lebih dari 4 adalah...",
          "options": [
            { "key": "A", "text": "$\\frac{1}{3}$" },
            { "key": "B", "text": "$\\frac{1}{2}$" },
            { "key": "C", "text": "$\\frac{1}{6}$" },
            { "key": "D", "text": "$\\frac{2}{3}$" }
          ],
          "correctAnswer": "A",
          "hint": "Mata dadu yang lebih dari 4 adalah $\\{5, 6\\}$ (ada 2 dari 6). Sederhanakan $\\frac{2}{6}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Angka lebih dari 4: $\\{5, 6\\} \\implies 2$ kemungkinan.\n2. Total kemungkinan mata dadu: 6.\n3. Peluang: $\\frac{2}{6} = \\frac{1}{3}$.\nPeluangnya adalah **$\\frac{1}{3}$** (Opsi A)."
        },
        {
          "id": "sd6-b4-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dalam sebuah kotak terdapat 4 bola merah, 6 bola biru, dan 5 bola hijau. Jika diambil satu bola secara acak, peluang terambilnya bola yang BUKAN berwarna biru adalah...",
          "options": [
            { "key": "A", "text": "$\\frac{3}{5}$" },
            { "key": "B", "text": "$\\frac{2}{5}$" },
            { "key": "C", "text": "$\\frac{1}{3}$" },
            { "key": "D", "text": "$\\frac{4}{15}$" }
          ],
          "correctAnswer": "A",
          "hint": "Bukan biru artinya merah atau hijau: $4 + 5 = 9$ bola. Total seluruh bola: $4 + 6 + 5 = 15$. Sederhanakan $\\frac{9}{15}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Bola bukan biru (merah + hijau): $4 + 5 = 9$ bola.\n2. Total seluruh bola: $4 + 6 + 5 = 15$ bola.\n3. Peluang:\n$$P = \\frac{9}{15} = \\frac{9 : 3}{15 : 3} = \\frac{3}{5}$$\nPeluang terambil bola bukan biru adalah **$\\frac{3}{5}$** (Opsi A)."
        }
      ]
    }
  ]
}

fileContent = f"""/**
 * Data Kurikulum Kelas 6 SD (Fase C)
 * 4 Bab Wajib Resmi Sesuai Buku Siswa Matematika
 */

export const grade6Data = {json.dumps(grade6Data, indent=2, ensure_ascii=False)};
"""

with open('src/data/grades/grade6.js', 'w', encoding='utf-8') as f:
    f.write(fileContent)

print("Successfully generated upgraded src/data/grades/grade6.js!")
