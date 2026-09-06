/**
 * Data Kurikulum Kelas 5 SD (Fase C)
 * 9 Bab Wajib Resmi Sesuai Buku Siswa Matematika
 */

export const grade5Data = {
  "grade": 5,
  "level": "SD",
  "phase": "Fase C",
  "description": "Bilangan Cacah sampai 100.000, KPK & FPB, Pecahan, Keliling & Luas Bangun Datar, Sudut, Ciri Bangun Datar, Data, serta Bilangan Cacah sampai 1.000.000",
  "chapters": [
    {
      "id": "sd5-bab1-bilangan-cacah-100k",
      "title": "Bab 1: Bilangan Cacah Sampai 100.000",
      "summary": {
        "overview": "Dalam kehidupan sehari-hari, kita sering menjumpai bilangan lima angka bernilai puluhan ribu. Saat orang tua kalian berbelanja sembako di pasar swalayan dengan struk belanja senilai Rp85.500,00, saat sebuah stadion mini dipadati oleh 24.750 orang penonton sepak bola, atau saat membaca jarak tempuh sepeda motor yang telah mencapai 48.320 kilometer, pemahaman bilangan puluhan ribu sangat diperlukan.\n\nMemahami bilangan cacah sampai 100.000 membantu anak-anak memiliki rasa kepekaan bilangan (number sense) yang matang. Siswa tidak hanya sekadar menghafal deretan angka, melainkan mengerti hierarki nilai tempat dari satuan, puluhan, ratusan, ribuan, hingga puluhan ribu. Nilai angka 5 pada posisi puluhan ribu memiliki nilai lima puluh ribu ($50.000$), jauh lebih besar daripada angka 5 pada posisi ratusan ($500$).\n\nBab ini menuntun siswa Kelas 5 menguasai cara membaca dan menulis bilangan sampai 100.000, menentukan nilai tempat dan nilai angka, membandingkan dan mengurutkan bilangan, melakukan komposisi dan dekomposisi penjumlahan nilai tempat, serta mempraktikkan operasi penjumlahan, pengurangan, perkalian bersusun, dan pembagian bersusun (porogapit) pada transaksi jual beli nyata.",
        "coreConcepts": [
          "Membaca dan Menulis Bilangan sampai 100.000: Membaca dimulai dari digit nilai tempat tertinggi (puluhan ribu) di sebelah kiri. Contoh: 63.425 dibaca 'enam puluh tiga ribu empat ratus dua puluh lima'.",
          "Nilai Tempat dan Nilai Angka: Pada bilangan lima digit: Puluhan Ribu ($10.000$), Ribuan ($1.000$), Ratusan ($100$), Puluhan ($10$), dan Satuan ($1$). Nilai angka adalah hasil kali digit dengan nilai tempatnya.",
          "Komposisi dan Dekomposisi: Komposisi adalah menggabungkan beberapa nilai tempat: $40.000 + 7.000 + 300 + 50 + 2 = 47.352$. Dekomposisi adalah menguraikan bilangan ke dalam bentuk penjumlahan nilai tempatnya.",
          "Operasi Hitung Multi-Digit: Penjumlahan dan pengurangan bersusun teknik menyimpan dan meminjam, perkalian bilangan puluhan ribu dengan satu atau dua angka, serta pembagian bersusun porogapit."
        ],
        "workedExamples": [
          {
            "title": "Membaca dan Dekomposisi Nilai Tempat",
            "problem": "Sebuah museum mencatat jumlah pengunjung selama satu bulan sebanyak 38.642 orang. Tuliskan cara membaca bilangan tersebut dan uraikan menurut nilai tempatnya.",
            "solution": "Langkah 1: Tuliskan cara membacanya:\nBilangan 38.642 dibaca: **Tiga puluh delapan ribu enam ratus empat puluh dua**.\n\nLangkah 2: Uraikan berdasarkan nilai tempat:\n- 3 menempati puluhan ribu $= 30.000$\n- 8 menempati ribuan $= 8.000$\n- 6 menempati ratusan $= 600$\n- 4 menempati puluhan $= 40$\n- 2 menempati satuan $= 2$\nBentuk dekomposisinya adalah **$30.000 + 8.000 + 600 + 40 + 2$**."
          },
          {
            "title": "Pembagian Bersusun Hasil Panen Buah",
            "problem": "Sebuah perkebunan mengemas 4.800 buah jeruk ke dalam 16 keranjang buah secara merata. Berapa banyak buah jeruk yang ada di setiap keranjang?",
            "solution": "Langkah 1: Gunakan pembagian porogapit $4.800 : 16$.\n\nLangkah 2: Ambil dua digit pertama: $48 : 16 = 3$ (karena $3 \\times 16 = 48$). Sisa $= 0$.\n\nLangkah 3: Turunkan kedua angka nol di belakangnya ke hasil bagi:\n$$4.800 : 16 = 300$$\nSetiap keranjang berisi **300 buah jeruk**."
          }
        ],
        "keyFormulas": [
          {
            "label": "Nilai Tempat 5 Angka",
            "formula": "\\text{Puluhan Ribu} \\mid \\text{Ribuan} \\mid \\text{Ratusan} \\mid \\text{Puluhan} \\mid \\text{Satuan}"
          },
          {
            "label": "Dekomposisi Bilangan",
            "formula": "N = a(10.000) + b(1.000) + c(100) + d(10) + e"
          }
        ],
        "misconceptions": [
          "Membaca angka 0 di tengah secara salah, misalnya 40.502 dibaca 'empat puluh ribu lima ratus dua', bukan 'empat nol lima nol dua'.",
          "Lupa menuliskan angka 0 pada hasil bagi porogapit saat angka berikutnya yang diturunkan belum mencukupi untuk dibagi."
        ],
        "tutorTip": "Beri tanda titik (.) pemisah setiap 3 digit dari sebelah kanan untuk memisahkan kelompok ribuan, agar membaca bilangannya jauh lebih mudah!"
      },
      "questions": [
        {
          "id": "sd5-b1-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Bilangan 74.025 dibaca...",
          "options": [
            {
              "key": "A",
              "text": "Tujuh puluh empat ribu dua puluh lima"
            },
            {
              "key": "B",
              "text": "Tujuh puluh empat ribu dua ratus lima"
            },
            {
              "key": "C",
              "text": "Tujuh puluh empat ribu dua puluh lima ratus"
            },
            {
              "key": "D",
              "text": "Tujuh puluh empat ribu dua ratus lima puluh"
            }
          ],
          "correctAnswer": "A",
          "hint": "Angka ratusan bernilai 0 sehingga tidak dibaca. Bacalah 74 ribu lalu langsung dua puluh lima.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nAngka 74 menempati ribuan dan angka 25 menempati puluhan-satuan, dengan angka ratusan 0 dilewati.\nDibaca: **Tujuh puluh empat ribu dua puluh lima** (Opsi A)."
        },
        {
          "id": "sd5-b1-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Nilai angka dari digit 8 pada bilangan 58.420 adalah...",
          "options": [
            {
              "key": "A",
              "text": "8.000"
            },
            {
              "key": "B",
              "text": "80.000"
            },
            {
              "key": "C",
              "text": "800"
            },
            {
              "key": "D",
              "text": "80"
            }
          ],
          "correctAnswer": "A",
          "hint": "Digit 8 berada pada posisi nilai tempat ribuan.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nDigit 8 menempati nilai tempat ribuan, sehingga nilai angkanya adalah $8 \\times 1.000 = 8.000$ (Opsi A)."
        },
        {
          "id": "sd5-b1-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bentuk dekomposisi dari bilangan 62.308 adalah...",
          "options": [
            {
              "key": "A",
              "text": "$60.000 + 2.000 + 300 + 8$"
            },
            {
              "key": "B",
              "text": "$60.000 + 2.000 + 30 + 8$"
            },
            {
              "key": "C",
              "text": "$6.000 + 200 + 30 + 8$"
            },
            {
              "key": "D",
              "text": "$60.000 + 200 + 300 + 8$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Perhatikan nilai tempat: 6 puluhan ribu, 2 ribuan, 3 ratusan, 0 puluhan, dan 8 satuan.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$62.308 = 60.000 + 2.000 + 300 + 8$$\nHasilnya adalah **$60.000 + 2.000 + 300 + 8$** (Opsi A)."
        },
        {
          "id": "sd5-b1-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Pak Danu membeli 25 sak pupuk organik. Setiap sak pupuk berharga Rp32.000,00. Jika Pak Danu membayar dengan 9 lembar uang seratus ribuan, berapa rupiah uang kembalian yang diterima Pak Danu?",
          "options": [
            {
              "key": "A",
              "text": "Rp100.000,00"
            },
            {
              "key": "B",
              "text": "Rp80.000,00"
            },
            {
              "key": "C",
              "text": "Rp120.000,00"
            },
            {
              "key": "D",
              "text": "Rp90.000,00"
            }
          ],
          "correctAnswer": "A",
          "hint": "Hitung total harga pupuk ($25 \\times 32.000 = 800.000$), total uang bayar ($9 \\times 100.000 = 900.000$), lalu kurangkan keduanya.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Total harga belanja: $25 \\times 32.000 = 800.000$.\n2. Uang pembayaran: $9 \\times 100.000 = 900.000$.\n3. Uang kembalian: $900.000 - 800.000 = \\text{Rp}100.000,00$.\nUang kembalian yang diterima adalah **Rp100.000,00** (Opsi A)."
        }
      ]
    },
    {
      "id": "sd5-bab2-kpk-fpb",
      "title": "Bab 2: KPK dan FPB",
      "summary": {
        "overview": "Bayangkan dua lampu hias di gapura kampung: lampu merah berkedip setiap 4 detik sekali dan lampu hijau berkedip setiap 6 detik sekali. Kapankah kedua lampu tersebut akan menyala berkedip bersamaan untuk pertama kalinya? Atau bayangkan Ibu membuat 24 kue nastar dan 36 kue pastel yang ingin dibagikan ke dalam piring-piring dengan isi yang sama banyak tanpa tersisa. Berapa piring paling banyak yang dibutuhkan Ibu? Masalah serupa juga dihadapi petugas stasiun kereta api dalam menyinkronkan jadwal keberangkatan kereta antarkota yang berangkat secara berkala.\n\nDua permasalahan nyata tersebut diselesaikan dengan konsep matematika yang sangat terkenal: Kelipatan Persekutuan Terkecil (KPK) dan Faktor Persekutuan Terbesar (FPB). KPK digunakan untuk menyelaraskan jadwal peristiwa berulang yang terjadi bersamaan di masa depan, sedangkan FPB digunakan untuk membagi sejumlah benda menjadi kelompok-kelompok yang sama rata dan adil tanpa ada sisa sedikit pun.\n\nBab ini menuntun siswa Kelas 5 menguasai faktor bilangan dan kelipatan bilangan, mengenali bilangan prima (bilangan yang hanya memiliki 2 faktor), membuat pohon faktor untuk menentukan faktorisasi prima, serta menentukan KPK dan FPB menggunakan metode faktorisasi prima maupun metode tabel (pembagian bersama).",
        "coreConcepts": [
          "Bilangan Prima: Bilangan asli yang lebih besar dari 1 dan hanya memiliki tepat 2 faktor pembagi, yaitu 1 dan bilangan itu sendiri: $2, 3, 5, 7, 11, 13, 17, 19, 23, 29, \\dots$ Angka 2 adalah satu-satunya bilangan prima yang genap.",
          "Faktorisasi Prima: Menyatakan suatu bilangan sebagai perkalian dari bilangan-bilangan primanya (menggunakan pohon faktor).",
          "KPK (Kelipatan Persekutuan Terkecil): Bilangan kelipatan terkecil yang habis dibagi oleh kedua bilangan tersebut. Cara faktorisasi prima: kalikan SEMUA faktor prima yang ada, jika ada faktor yang sama pilih yang memiliki PANGKAT TERTINGGI.",
          "FPB (Faktor Persekutuan Terbesar): Bilangan faktor terbesar yang dapat membagi habis kedua bilangan tersebut tanpa sisa. Cara faktorisasi prima: kalikan HANYA faktor prima yang SAMA dengan memilih PANGKAT TERENDAH."
        ],
        "workedExamples": [
          {
            "title": "Menentukan KPK dan FPB dari 24 dan 36",
            "problem": "Tentukan KPK dan FPB dari bilangan 24 dan 36 menggunakan faktorisasi prima.",
            "solution": "Langkah 1: Buat faktorisasi prima menggunakan pohon faktor:\n- $24 = 2^3 \\times 3$\n- $36 = 2^2 \\times 3^2$\n\nLangkah 2: Menentukan FPB (pilih faktor yang sama dengan pangkat terendah):\n$$\\text{FPB} = 2^2 \\times 3 = 4 \\times 3 = 12$$\n\nLangkah 3: Menentukan KPK (pilih semua faktor dengan pangkat tertinggi):\n$$\\text{KPK} = 2^3 \\times 3^2 = 8 \\times 9 = 72$$\nFPB dari 24 dan 36 adalah **12** dan KPK-nya adalah **72**."
          },
          {
            "title": "Jadwal Les Bersama Menggunakan KPK",
            "problem": "Riko berlatih renang setiap 4 hari sekali, sedangkan Dimas berlatih renang setiap 6 hari sekali di kolam yang sama. Jika mereka berlatih bersama-sama pada hari Minggu, berapa hari lagikah mereka akan berlatih bersama untuk kedua kalinya?",
            "solution": "Langkah 1: Masalah jadwal bersama diselesaikan dengan mencari KPK dari 4 dan 6:\n- Kelipatan 4: $4, 8, 12, 16, 20, \\dots$\n- Kelipatan 6: $6, 12, 18, 24, \\dots$\n\nLangkah 2: Kelipatan persekutuan terkecilnya adalah **12**.\n\nLangkah 3: Kesimpulan:\nMereka akan berlatih renang bersama kembali setelah **12 hari**."
          }
        ],
        "keyFormulas": [
          {
            "label": "FPB",
            "formula": "\\text{Faktor sama pangkat terkecil}"
          },
          {
            "label": "KPK",
            "formula": "\\text{Semua faktor pangkat terbesar}"
          }
        ],
        "misconceptions": [
          "Tertukar antara KPK dan FPB pada soal cerita: ingat bahwa jadwal bersama selalu menggunakan KPK, sedangkan pembagian bingkisan merata menggunakan FPB.",
          "Memasukkan angka 1 sebagai bilangan prima. Angka 1 bukan bilangan prima karena hanya memiliki 1 faktor."
        ],
        "tutorTip": "Kata kunci soal cerita: Jika ada kata 'bersama-sama lagi, setiap sekian hari' = cari KPK. Jika ada kata 'dibagi sama banyak, bingkisan paling banyak' = cari FPB!"
      },
      "questions": [
        {
          "id": "sd5-b2-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Faktorisasi prima dari bilangan 60 adalah...",
          "options": [
            {
              "key": "A",
              "text": "$2^2 \\times 3 \\times 5$"
            },
            {
              "key": "B",
              "text": "$2 \\times 3^2 \\times 5$"
            },
            {
              "key": "C",
              "text": "$2 \\times 3 \\times 5$"
            },
            {
              "key": "D",
              "text": "$2^3 \\times 3 \\times 5$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Bagi 60 dengan bilangan prima: $60 : 2 = 30$, $30 : 2 = 15$, $15 : 3 = 5$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$60 = 2 \\times 2 \\times 3 \\times 5 = 2^2 \\times 3 \\times 5$$\nFaktorisasi primanya adalah **$2^2 \\times 3 \\times 5$** (Opsi A)."
        },
        {
          "id": "sd5-b2-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "FPB dari bilangan 18 dan 24 adalah...",
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
              "text": "3"
            },
            {
              "key": "D",
              "text": "8"
            }
          ],
          "correctAnswer": "A",
          "hint": "Faktor dari 18 yang juga membagi habis 24 yang terbesar adalah 6.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n- $18 = 2 \\times 3^2$\n- $24 = 2^3 \\times 3$\n- FPB $= 2 \\times 3 = 6$\nFPB-nya adalah **6** (Opsi A)."
        },
        {
          "id": "sd5-b2-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "KPK dari bilangan 12 dan 15 adalah...",
          "options": [
            {
              "key": "A",
              "text": "60"
            },
            {
              "key": "B",
              "text": "30"
            },
            {
              "key": "C",
              "text": "180"
            },
            {
              "key": "D",
              "text": "45"
            }
          ],
          "correctAnswer": "A",
          "hint": "Faktorisasi: $12 = 2^2 \\times 3$ dan $15 = 3 \\times 5$. KPK $= 2^2 \\times 3 \\times 5 = 4 \\times 15 = 60$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{KPK} = 2^2 \\times 3 \\times 5 = 4 \\times 15 = 60$$\nKPK-nya adalah **60** (Opsi A)."
        },
        {
          "id": "sd5-b2-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Ibu memiliki 30 kue bolu dan 45 permen cokelat. Ibu ingin memasukkan kue dan cokelat tersebut ke dalam beberapa kantong plastik dengan jumlah dan jenis yang sama banyak tanpa tersisa. Berapa kantong plastik paling banyak yang dapat dibuat Ibu?",
          "options": [
            {
              "key": "A",
              "text": "15 kantong"
            },
            {
              "key": "B",
              "text": "10 kantong"
            },
            {
              "key": "C",
              "text": "5 kantong"
            },
            {
              "key": "D",
              "text": "30 kantong"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan FPB dari 30 dan 45 untuk mencari banyak kantong paling banyak.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Faktorisasi prima:\n- $30 = 2 \\times 3 \\times 5$\n- $45 = 3^2 \\times 5$\n2. $\\text{FPB} = 3 \\times 5 = 15$.\nBanyak kantong plastik paling banyak adalah **15 kantong** (Opsi A)."
        }
      ]
    },
    {
      "id": "sd5-bab3-bilangan-pecahan",
      "title": "Bab 3: Bilangan Pecahan",
      "summary": {
        "overview": "Dalam kegiatan memasak di dapur atau mengukur panjang kayu di bengkel kriya, kita sering menjumpai ukuran yang berupa bagian dari satu kesatuan utuh. Ketika resep martabak manis membutuhkan $\\frac{1}{2}$ cangkir gula pasir dan ditambahkan lagi $\\frac{1}{3}$ cangkir gula aren, berapakah total gula yang digunakan? Kita tidak bisa langsung menjumlahkannya menjadi $\\frac{2}{5}$, melainkan harus menyamakan penyebutnya terlebih dahulu.\n\nPecahan adalah representasi matematis dari bagian-bagian yang sama besar dari suatu keseluruhan. Di Kelas 5, siswa memperdalam operasi hitung pecahan dengan penyebut yang berbeda, mengoperasikan pecahan campuran, dan mengalikan pecahan dengan bilangan asli. Keterampilan ini sangat penting dalam menakar bahan masakan, menghitung diskon belanja pakaian, membagi bidang tanah warisan, hingga menyusun ransum pakan ternak di peternakan rakyat.\n\nMatematikawan masa lampau merancang pecahan agar manusia dapat berdagang secara adil tanpa ada pihak yang dirugikan oleh pembulatan kasar. Bab ini membimbing siswa memahami konsep pecahan senilai, melakukan penjumlahan dan pengurangan pecahan berpenyebut berbeda menggunakan Kelipatan Persekutuan Terkecil (KPK), mengubah pecahan biasa ke pecahan campuran dan sebaliknya, serta mengalikan pecahan dengan bilangan bulat secara mandiri dan percaya diri.",
        "coreConcepts": [
          "Pecahan Senilai: Pecahan yang nilainya sama meskipun pembilang dan penyebutnya berbeda, diperoleh dengan mengalikan atau membagi pembilang dan penyebut dengan angka yang sama: $\\frac{a}{b} = \\frac{a \\times k}{b \\times k}$.",
          "Penjumlahan & Pengurangan Beda Penyebut: Wajib menyamakan penyebut menggunakan KPK kedua penyebut sebelum menjumlahkan atau mengurangkan pembilang: $\\frac{a}{b} + \\frac{c}{d} = \\frac{ad + bc}{bd}$.",
          "Pecahan Campuran: Pecahan yang terdiri dari bilangan bulat utuh dan pecahan biasa, contoh: $2\\frac{1}{3} = \\frac{2 \\times 3 + 1}{3} = \\frac{7}{3}$.",
          "Perkalian Pecahan dengan Bilangan Asli: Kalikan bilangan asli dengan pembilangnya saja, penyebut tetap: $c \\times \\frac{a}{b} = \\frac{c \\times a}{b}$."
        ],
        "workedExamples": [
          {
            "title": "Penjumlahan Pecahan Beda Penyebut",
            "problem": "Hitunglah hasil dari operasi penjumlahan pecahan: $\\frac{2}{3} + \\frac{1}{4}$.",
            "solution": "Langkah 1: Cari KPK dari penyebut 3 dan 4, yaitu 12.\n\nLangkah 2: Samakan penyebut kedua pecahan:\n$$\\frac{2}{3} = \\frac{2 \\times 4}{3 \\times 4} = \\frac{8}{12}$$\n$$\\frac{1}{4} = \\frac{1 \\times 3}{4 \\times 3} = \\frac{3}{12}$$\n\nLangkah 3: Jumlahkan pembilangnya:\n$$\\frac{8}{12} + \\frac{3}{12} = \\frac{8 + 3}{12} = \\frac{11}{12}$$\nHasilnya adalah **$\\frac{11}{12}$**."
          },
          {
            "title": "Pengurangan Pecahan Campuran Persediaan Tepung",
            "problem": "Ibu memiliki $3\\frac{1}{2}\\text{ kg}$ tepung terigu. Sebanyak $1\\frac{1}{4}\\text{ kg}$ digunakan untuk membuat gorengan pisang. Berapa kilogram sisa tepung terigu Ibu?",
            "solution": "Langkah 1: Pisahkan bagian bilangan bulat dan bagian pecahan:\n$$(3 - 1) + \\left(\\frac{1}{2} - \\frac{1}{4}\\right)$$\n\nLangkah 2: Samakan penyebut pecahan (KPK $= 4$):\n$$\\frac{1}{2} = \\frac{2}{4}$$\n$$\\frac{2}{4} - \\frac{1}{4} = \\frac{1}{4}$$\n\nLangkah 3: Gabungkan dengan bilangan bulatnya:\n$$2 + \\frac{1}{4} = 2\\frac{1}{4}\\text{ kg}$$\nSisa tepung terigu Ibu adalah **$2\\frac{1}{4}\\text{ kg}$**."
          }
        ],
        "keyFormulas": [
          {
            "label": "Penjumlahan Pecahan Beda Penyebut",
            "formula": "\\frac{a}{b} + \\frac{c}{d} = \\frac{ad + bc}{bd}"
          },
          {
            "label": "Perkalian Pecahan Bilangan Asli",
            "formula": "c \\times \\frac{a}{b} = \\frac{c \\times a}{b}"
          }
        ],
        "misconceptions": [
          "Menjumlahkan penyebut dengan penyebut secara langsung: $\\frac{1}{2} + \\frac{1}{3} \\neq \\frac{2}{5}$. Penyebut HANYA boleh dijumlahkan jika sudah disamakan nilainya.",
          "Salah saat mengubah pecahan campuran ke pecahan biasa: lupa menambahkan pembilang setelah mengalikan bilangan bulat dengan penyebut."
        ],
        "tutorTip": "Untuk menjumlahkan pecahan beda penyebut dua suku, gunakan metode perkalian silang cepat (kupu-kupu): $\\frac{a}{b} + \\frac{c}{d} = \\frac{a \\times d + b \\times c}{b \\times d}$!"
      },
      "questions": [
        {
          "id": "sd5-b3-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Hasil dari operasi penjumlahan $\\frac{1}{2} + \\frac{1}{3}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\frac{5}{6}$"
            },
            {
              "key": "B",
              "text": "$\\frac{2}{5}$"
            },
            {
              "key": "C",
              "text": "$\\frac{2}{6}$"
            },
            {
              "key": "D",
              "text": "$\\frac{3}{5}$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Samakan penyebut menjadi 6: $\\frac{3}{6} + \\frac{2}{6}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{1}{2} + \\frac{1}{3} = \\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$$\nHasilnya adalah **$\\frac{5}{6}$** (Opsi A)."
        },
        {
          "id": "sd5-b3-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Bentuk pecahan biasa dari pecahan campuran $2\\frac{3}{5}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\frac{13}{5}$"
            },
            {
              "key": "B",
              "text": "$\\frac{11}{5}$"
            },
            {
              "key": "C",
              "text": "$\\frac{6}{5}$"
            },
            {
              "key": "D",
              "text": "$\\frac{15}{5}$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kalikan bilangan bulat dengan penyebut, lalu tambahkan pembilang: $(2 \\times 5) + 3 = 13$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$2\\frac{3}{5} = \\frac{(2 \\times 5) + 3}{5} = \\frac{10 + 3}{5} = \\frac{13}{5}$$\nBentuk pecahan biasanya adalah **$\\frac{13}{5}$** (Opsi A)."
        },
        {
          "id": "sd5-b3-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil dari $4 \\times \\frac{2}{3}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\frac{8}{3}$ atau $2\\frac{2}{3}$"
            },
            {
              "key": "B",
              "text": "$\\frac{8}{12}$"
            },
            {
              "key": "C",
              "text": "$\\frac{6}{3}$"
            },
            {
              "key": "D",
              "text": "$\\frac{2}{12}$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kalikan 4 dengan pembilang 2, penyebutnya tetap 3.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$4 \\times \\frac{2}{3} = \\frac{4 \\times 2}{3} = \\frac{8}{3} = 2\\frac{2}{3}$$\nHasilnya adalah **$2\\frac{2}{3}$** (Opsi A)."
        },
        {
          "id": "sd5-b3-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Siti memiliki pita sepanjang $4\\frac{1}{2}$ meter. Pita tersebut dipotong sepanjang $1\\frac{3}{4}$ meter untuk menghias kado dan $\\frac{1}{2}$ meter untuk kerajinan tangan. Sisa panjang pita Siti sekarang adalah...",
          "options": [
            {
              "key": "A",
              "text": "$2\\frac{1}{4}$ meter"
            },
            {
              "key": "B",
              "text": "$2\\frac{1}{2}$ meter"
            },
            {
              "key": "C",
              "text": "$2$ meter"
            },
            {
              "key": "D",
              "text": "$1\\frac{3}{4}$ meter"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kurangkan: $4\\frac{1}{2} - \\frac{1}{2} = 4$, lalu $4 - 1\\frac{3}{4} = 2\\frac{1}{4}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Selesaikan pengurangan mudah: $4\\frac{1}{2} - \\frac{1}{2} = 4\\text{ meter}$.\n2. Kurangkan potongan kedua: $4 - 1\\frac{3}{4} = 2\\frac{1}{4}\\text{ meter}$.\nSisa panjang pita adalah **$2\\frac{1}{4}$ meter** (Opsi A)."
        }
      ]
    },
    {
      "id": "sd5-bab4-keliling-bangun-datar",
      "title": "Bab 4: Keliling Bangun Datar",
      "summary": {
        "overview": "Setiap pagi saat siswa berlari mengelilingi lapangan upacara atau lapangan sepak bola sekolah, mereka menempuh jarak di sepanjang garis tepian luar lapangan tersebut. Jarak total yang ditempuh saat mengitari sekeliling tepi bangun datar satu putaran penuh itulah yang dinamakan Keliling.\n\nDalam kehidupan nyata, perhitungan keliling sangat dibutuhkan dalam pekerjaan pertukangan, konstruksi pagar, dan penataan taman. Ketika seorang petani hendak memasang pagar kawat berduri di sekeliling kebun jagungnya agar aman dari hama ternak, seorang mandor bangunan menghitung panjang besi tulangan penahan pondasi sloof, atau seorang tukang memasang lis plin kayu di sepanjang pertemuan lantai dan dinding kamar, panjang bahan yang harus dibeli dihitung berdasarkan keliling bangun tersebut.\n\nPara perancang lintasan atletik stadion olimpiade juga menghitung keliling setiap lajur lari secara cermat agar semua pelari menempuh jarak yang persis sama. Bab ini menuntun siswa Kelas 5 memahami konsep keliling sebagai jumlah seluruh panjang sisi terluar bangun datar, menghitung keliling segitiga (sama sisi, sama kaki, sembarang), persegi, persegi panjang, jajar genjang, belah ketupat, dan trapesium, serta menyelesaikan masalah kontekstual pemagaran dan lintasan lari dengan teliti.",
        "coreConcepts": [
          "Konsep Dasar Keliling: Keliling bangun datar adalah jumlah seluruh panjang sisi-sisi yang membatasi bangun datar tersebut.",
          "Keliling Segitiga: Jumlah ketiga sisinya: $K = a + b + c$. Pada segitiga sama sisi: $K = 3 \\times s$.",
          "Keliling Persegi: Karena keempat sisinya sama panjang: $K = 4 \\times s$.",
          "Keliling Persegi Panjang dan Jajar Genjang: Karena memiliki dua pasang sisi yang sama panjang: $K = 2 \\times (p + l)$ atau $K = 2 \\times (a + b)$.",
          "Keliling Trapesium: Jumlah keempat sisinya: $K = a + b + c + d$."
        ],
        "workedExamples": [
          {
            "title": "Menghitung Keliling Lapangan Sepak Bola",
            "problem": "Sebuah lapangan sepak bola berbentuk persegi panjang memiliki panjang 100 meter dan lebar 60 meter. Jika seorang pemain berlari mengelilingi tepi lapangan tersebut sebanyak 2 kali putaran, berapa meter total jarak yang ia tempuh?",
            "solution": "Langkah 1: Hitung keliling 1 putaran lapangan:\n$$K = 2 \\times (p + l) = 2 \\times (100 + 60) = 2 \\times 160 = 320\\text{ meter}$$\n\nLangkah 2: Kalikan dengan 2 putaran:\n$$\\text{Total Jarak} = 2 \\times 320 = 640\\text{ meter}$$\nTotal jarak yang ditempuh adalah **640 meter**."
          },
          {
            "title": "Menghitung Sisi Persegi dari Keliling yang Diketahui",
            "problem": "Sebuah taman bunga berbentuk persegi memiliki keliling 48 meter. Berapakah panjang sisi taman bunga tersebut?",
            "solution": "Langkah 1: Gunakan rumus keliling persegi: $K = 4 \\times s$.\n\nLangkah 2: Selesaikan untuk mencari panjang sisi $s$:\n$$48 = 4 \\times s \\implies s = \\frac{48}{4} = 12\\text{ meter}$$\nPanjang sisi taman bunga tersebut adalah **12 meter**."
          }
        ],
        "keyFormulas": [
          {
            "label": "Keliling Persegi",
            "formula": "K = 4 \\times s"
          },
          {
            "label": "Keliling Persegi Panjang",
            "formula": "K = 2 \\times (p + l)"
          },
          {
            "label": "Keliling Segitiga",
            "formula": "K = a + b + c"
          }
        ],
        "misconceptions": [
          "Tertukar antara keliling dan luas: keliling adalah panjang garis tepi luar (satuan meter/cm), bukan perkalian luas permukaan.",
          "Lupa menjumlahkan semua sisi pada bangun segitiga atau trapesium sembarang."
        ],
        "tutorTip": "Bayangkan seekor semut berjalan menyusuri garis tepi bangun datar dari titik awal sampai kembali ke titik semula. Jarak perjalanan semut itulah Keliling!"
      },
      "questions": [
        {
          "id": "sd5-b4-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Keliling sebuah persegi yang memiliki panjang sisi 9 cm adalah...",
          "options": [
            {
              "key": "A",
              "text": "36 cm"
            },
            {
              "key": "B",
              "text": "81 cm"
            },
            {
              "key": "C",
              "text": "18 cm"
            },
            {
              "key": "D",
              "text": "27 cm"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kalikan panjang sisi dengan 4: $K = 4 \\times 9$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$K = 4 \\times 9 = 36\\text{ cm}$$\nKeliling persegi adalah **36 cm** (Opsi A)."
        },
        {
          "id": "sd5-b4-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Keliling sebuah persegi panjang dengan panjang 14 cm dan lebar 6 cm adalah...",
          "options": [
            {
              "key": "A",
              "text": "40 cm"
            },
            {
              "key": "B",
              "text": "84 cm"
            },
            {
              "key": "C",
              "text": "20 cm"
            },
            {
              "key": "D",
              "text": "48 cm"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan rumus $K = 2 \\times (p + l) = 2 \\times (14 + 6)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$K = 2 \\times (14 + 6) = 2 \\times 20 = 40\\text{ cm}$$\nKelilingnya adalah **40 cm** (Opsi A)."
        },
        {
          "id": "sd5-b4-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah segitiga sama sisi memiliki keliling 45 cm. Panjang masing-masing sisi segitiga tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "15 cm"
            },
            {
              "key": "B",
              "text": "12 cm"
            },
            {
              "key": "C",
              "text": "10 cm"
            },
            {
              "key": "D",
              "text": "18 cm"
            }
          ],
          "correctAnswer": "A",
          "hint": "Segitiga sama sisi memiliki 3 sisi sama panjang: bagi keliling dengan 3 ($45 : 3$).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$s = \\frac{K}{3} = \\frac{45}{3} = 15\\text{ cm}$$\nPanjang sisinya adalah **15 cm** (Opsi A)."
        },
        {
          "id": "sd5-b4-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Pak Budi memiliki sebidang kebun berbentuk persegi panjang berukuran $20\\text{ m} \\times 15\\text{ m}$. Di sekeliling kebun tersebut akan dipasang tiang pagar dengan jarak antar-tiang sejauh 5 meter. Banyak tiang pagar yang dibutuhkan Pak Budi adalah...",
          "options": [
            {
              "key": "A",
              "text": "14 tiang"
            },
            {
              "key": "B",
              "text": "15 tiang"
            },
            {
              "key": "C",
              "text": "12 tiang"
            },
            {
              "key": "D",
              "text": "16 tiang"
            }
          ],
          "correctAnswer": "A",
          "hint": "Hitung keliling kebun terlebih dahulu: $K = 2 \\times (20 + 15) = 70\\text{ m}$, lalu bagi dengan jarak antar-tiang (5 m).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Keliling kebun: $K = 2 \\times (20 + 15) = 2 \\times 35 = 70\\text{ meter}$.\n2. Banyak tiang yang dibutuhkan:\n$$\\text{Banyak tiang} = \\frac{70}{5} = 14\\text{ tiang}$$\nBanyak tiang yang dibutuhkan adalah **14 tiang** (Opsi A)."
        }
      ]
    },
    {
      "id": "sd5-bab5-luas-daerah-bangun-datar",
      "title": "Bab 5: Luas Daerah Bangun Datar",
      "summary": {
        "overview": "Ketika seorang tukang bangunan hendak memasang ubin keramik pada lantai ruang tamu, atau seorang petani menaburkan benih padi di atas hamparan petak sawahnya, besaran yang diukur bukan lagi sekadar garis tepinya melainkan seluruh bidang permukaan yang tertutup. Besaran ukuran bidang tertutup dua dimensi inilah yang dinamakan Luas Daerah.\n\nMemahami luas bangun datar adalah kecakapan praktis yang fundamental. Luas diukur dengan menghitung berapa banyak satuan persegi (seperti meter persegi atau sentimeter persegi) yang menutupi permukaan bidang tersebut secara rapat tanpa celah. Dengan memahami rumus luas persegi dan persegi panjang, matematikawan dapat menurunkan rumus luas jajar genjang, segitiga, trapesium, hingga belah ketupat.\n\nBab ini membimbing siswa Kelas 5 menemukan dan menggunakan rumus luas persegi ($s \\times s$), persegi panjang ($p \\times l$), segitiga (setengah dari luas persegi panjang: $\\frac{1}{2} \\times a \\times t$), jajar genjang ($a \\times t$), dan trapesium ($\\frac{1}{2} \\times (a + b) \\times t$) dalam pemecahan masalah pemasangan ubin, pengecatan dinding, dan luas pekarangan.",
        "coreConcepts": [
          "Konsep Luas: Besaran bidang datar yang dibatasi oleh sisi-sisi bangun tersebut, diukur dalam satuan luas persegi ($\\text{cm}^2, \\text{m}^2$).",
          "Luas Persegi & Persegi Panjang: Luas Persegi $= s \\times s = s^2$. Luas Persegi Panjang $= p \\times l$.",
          "Luas Segitiga: Segitiga merupakan setengah dari persegi panjang atau jajar genjang yang memiliki alas dan tinggi yang sama: $L = \\frac{1}{2} \\times a \\times t$. Garis tinggi ($t$) WAJIB tegak lurus terhadap garis alas ($a$).",
          "Luas Jajar Genjang: $L = a \\times t$, di mana $t$ adalah jarak tegak lurus antara dua sisi alas yang sejajar.",
          "Luas Trapesium: Setengah dari hasil kali jumlah sisi sejajar dengan tingginya: $L = \\frac{a + b}{2} \\times t$."
        ],
        "workedExamples": [
          {
            "title": "Menghitung Luas Segitiga Siku-Siku",
            "problem": "Sebuah layar perahu berbentuk segitiga siku-siku memiliki panjang alas 4 meter dan tinggi 6 meter. Berapakah luas kain layar perahu tersebut?",
            "solution": "Langkah 1: Identifikasi alas dan tinggi segitiga:\n$$a = 4\\text{ meter}, \\quad t = 6\\text{ meter}$$\n\nLangkah 2: Terapkan rumus luas segitiga:\n$$L = \\frac{1}{2} \\times a \\times t$$\n$$L = \\frac{1}{2} \\times 4 \\times 6 = 2 \\times 6 = 12\\text{ m}^2$$\nLuas kain layar perahu adalah **$12\\text{ m}^2$**."
          },
          {
            "title": "Menghitung Banyak Keramik Lantai Ruangan",
            "problem": "Sebuah kamar tidur berukuran $4\\text{ m} \\times 3\\text{ m}$ akan dipasangi ubin keramik berbentuk persegi berukuran $20\\text{ cm} \\times 20\\text{ cm}$. Berapa banyak ubin keramik yang dibutuhkan?",
            "solution": "Langkah 1: Hitung luas lantai dalam $\\text{cm}^2$ ($1\\text{ m} = 100\\text{ cm}$):\n$$\\text{Luas lantai} = 400\\text{ cm} \\times 300\\text{ cm} = 120.000\\text{ cm}^2$$\n\nLangkah 2: Hitung luas satu ubin keramik:\n$$\\text{Luas ubin} = 20 \\times 20 = 400\\text{ cm}^2$$\n\nLangkah 3: Bagi luas lantai dengan luas ubin:\n$$\\text{Banyak ubin} = \\frac{120.000}{400} = 300\\text{ buah}$$\nBanyak ubin keramik yang dibutuhkan adalah **300 buah**."
          }
        ],
        "keyFormulas": [
          {
            "label": "Luas Persegi Panjang",
            "formula": "L = p \\times l"
          },
          {
            "label": "Luas Segitiga",
            "formula": "L = \\frac{1}{2} \\times a \\times t"
          },
          {
            "label": "Luas Jajar Genjang",
            "formula": "L = a \\times t"
          },
          {
            "label": "Luas Trapesium",
            "formula": "L = \\frac{1}{2} \\times (a + b) \\times t"
          }
        ],
        "misconceptions": [
          "Menggunakan sisi miring sebagai tinggi segitiga atau jajar genjang. Tinggi harus selalu garis yang ditarik tegak lurus ($90^\\circ$) terhadap alas.",
          "Lupa mengalikan dengan $\\frac{1}{2}$ pada rumus luas segitiga atau trapesium."
        ],
        "tutorTip": "Tinggi bangun datar bukan sisi yang miring! Cari selalu tanda siku-siku ($90^\\circ$) yang menghubungkan alas dan tinggi."
      },
      "questions": [
        {
          "id": "sd5-b5-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Luas sebuah segitiga yang memiliki panjang alas 10 cm dan tinggi 8 cm adalah...",
          "options": [
            {
              "key": "A",
              "text": "$40\\text{ cm}^2$"
            },
            {
              "key": "B",
              "text": "$80\\text{ cm}^2$"
            },
            {
              "key": "C",
              "text": "$18\\text{ cm}^2$"
            },
            {
              "key": "D",
              "text": "$36\\text{ cm}^2$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan rumus luas segitiga: $L = \\frac{1}{2} \\times a \\times t = \\frac{1}{2} \\times 10 \\times 8$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$L = \\frac{1}{2} \\times 10 \\times 8 = 5 \\times 8 = 40\\text{ cm}^2$$\nLuas segitiga adalah **$40\\text{ cm}^2$** (Opsi A)."
        },
        {
          "id": "sd5-b5-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Luas sebuah persegi panjang dengan panjang 15 cm dan lebar 7 cm adalah...",
          "options": [
            {
              "key": "A",
              "text": "$105\\text{ cm}^2$"
            },
            {
              "key": "B",
              "text": "$44\\text{ cm}^2$"
            },
            {
              "key": "C",
              "text": "$95\\text{ cm}^2$"
            },
            {
              "key": "D",
              "text": "$110\\text{ cm}^2$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kalikan panjang dengan lebar: $15 \\times 7$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$L = 15 \\times 7 = 105\\text{ cm}^2$$\nLuasnya adalah **$105\\text{ cm}^2$** (Opsi A)."
        },
        {
          "id": "sd5-b5-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah jajar genjang memiliki panjang alas 12 cm dan tinggi 9 cm. Luas jajar genjang tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "$108\\text{ cm}^2$"
            },
            {
              "key": "B",
              "text": "$54\\text{ cm}^2$"
            },
            {
              "key": "C",
              "text": "$42\\text{ cm}^2$"
            },
            {
              "key": "D",
              "text": "$96\\text{ cm}^2$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Rumus luas jajar genjang adalah $L = a \\times t = 12 \\times 9$. (Jangan dibagi 2!)",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$L = 12 \\times 9 = 108\\text{ cm}^2$$\nLuas jajar genjang adalah **$108\\text{ cm}^2$** (Opsi A)."
        },
        {
          "id": "sd5-b5-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah trapesium memiliki panjang sisi-sisi sejajar 14 cm dan 18 cm. Jika tinggi trapesium tersebut adalah 8 cm, maka luas trapesium tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "$128\\text{ cm}^2$"
            },
            {
              "key": "B",
              "text": "$256\\text{ cm}^2$"
            },
            {
              "key": "C",
              "text": "$112\\text{ cm}^2$"
            },
            {
              "key": "D",
              "text": "$144\\text{ cm}^2$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan rumus: $L = \\frac{a + b}{2} \\times t = \\frac{14 + 18}{2} \\times 8$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Jumlah sisi sejajar: $14 + 18 = 32\\text{ cm}$.\n2. Luas trapesium:\n$$L = \\frac{32}{2} \\times 8 = 16 \\times 8 = 128\\text{ cm}^2$$\nLuas trapesium adalah **$128\\text{ cm}^2$** (Opsi A)."
        }
      ]
    },
    {
      "id": "sd5-bab6-sudut",
      "title": "Bab 6: Sudut",
      "summary": {
        "overview": "Pernahkah kalian mengamati jarum jam dinding di kelas saat menunjukkan pukul 03.00 tepat? Kedua jarum jam tersebut membentuk sudut tegak siku-siku yang sempurna. Begitu pula saat pintu rumah dibuka sedikit atau dibuka lebar-lebar, bentangan celah antara kusen pintu dan daun pintu membentuk besaran rotasi yang kita kenal sebagai Sudut. Bahkan atlet memanah dan pesepak bola profesional selalu memperhitungkan sudut bukaan tendangan agar bola dapat meluncur mulus masuk ke sudut gawang lawan.\n\nSudut terbentuk ketika dua buah garis lurus bertemu pada satu titik pangkal yang sama (titik sudut). Dalam bidang navigasi maritim, rancang bangun arsitektur rumah, hingga peluncuran roket ke angkasa, sudut memegang peranan krusial untuk menentukan arah hadap dan kemiringan objek secara presisi. Sudut diukur menggunakan satuan derajat ($^\\circ$) dengan bantuan alat ukur Busur Derajat (protractor).\n\nBab ini membimbing siswa Kelas 5 memahami unsur-unsur pembentuk sudut (kaki sudut dan titik sudut), mengelompokkan jenis-jenis sudut (sudut lancip, siku-siku $90^\\circ$, tumpul, dan lurus $180^\\circ$), mempraktikkan cara mengukur sudut menggunakan busur derajat secara tepat, serta menghitung besar sudut yang terbentuk oleh kedua jarum jam dinding.",
        "coreConcepts": [
          "Unsur-Unsur Sudut: Terdiri atas dua sinar garis (kaki sudut) yang berpangkal pada satu titik potong yang sama (titik sudut).",
          "Jenis-Jenis Sudut Berdasarkan Besarannya:\n- Sudut Siku-Siku: Sudut yang besarnya tepat $90^\\circ$.\n- Sudut Lancip: Sudut yang besarnya antara $0^\\circ$ dan $90^\\circ$ (kurang dari siku-siku).\n- Sudut Tumpul: Sudut yang besarnya antara $90^\\circ$ dan $180^\\circ$ (lebih dari siku-siku).\n- Sudut Lurus: Sudut yang besarnya tepat $180^\\circ$ (membentuk satu garis lurus penuh).",
          "Pengukuran dengan Busur Derajat: Meletakkan titik pusat busur derajat tepat pada titik sudut, meluruskan salah satu kaki sudut dengan garis nol ($0^\\circ$), lalu membaca angka skala yang berhimpit dengan kaki sudut kedua.",
          "Sudut pada Jarum Jam: Satu putaran penuh jam adalah $360^\\circ$ (12 jam). Setiap jarak 1 angka pada jam membentuk sudut sebesar $\\frac{360^\\circ}{12} = 30^\\circ$."
        ],
        "workedExamples": [
          {
            "title": "Menghitung Besar Sudut pada Jarum Jam",
            "problem": "Berapakah besar sudut terkecil yang dibentuk oleh kedua jarum jam saat menunjukkan pukul 04.00 tepat?",
            "solution": "Langkah 1: Hitung besar sudut untuk setiap langkah 1 jam (jarak antar-angka):\n$$\\text{Sudut per jam} = \\frac{360^\\circ}{12} = 30^\\circ$$\n\nLangkah 2: Pada pukul 04.00, jarum panjang menunjuk angka 12 dan jarum pendek menunjuk angka 4. Jaraknya adalah 4 langkah angka.\n\nLangkah 3: Hitung total sudutnya:\n$$\\text{Besar Sudut} = 4 \\times 30^\\circ = 120^\\circ$$\nSudut terkecil yang dibentuk adalah **$120^\\circ$** (sudut tumpul)."
          },
          {
            "title": "Mengidentifikasi Jenis Sudut",
            "problem": "Tentukan jenis sudut untuk sudut-sudut berikut: (a) $45^\\circ$, (b) $90^\\circ$, dan (c) $135^\\circ$.",
            "solution": "Langkah 1: Analisis sudut (a) $45^\\circ$:\nKarena $45^\\circ < 90^\\circ$, maka merupakan **sudut lancip**.\n\nLangkah 2: Analisis sudut (b) $90^\\circ$:\nKarena tepat $90^\\circ$, maka merupakan **sudut siku-siku**.\n\nLangkah 3: Analisis sudut (c) $135^\\circ$:\nKarena $90^\\circ < 135^\\circ < 180^\\circ$, maka merupakan **sudut tumpul**."
          }
        ],
        "keyFormulas": [
          {
            "label": "Sudut per Angka Jam",
            "formula": "\\frac{360^\\circ}{12} = 30^\\circ"
          },
          {
            "label": "Sudut Siku-Siku",
            "formula": "90^\\circ"
          },
          {
            "label": "Sudut Lurus",
            "formula": "180^\\circ"
          }
        ],
        "misconceptions": [
          "Salah membaca skala busur derajat: membaca angka pada skala luar padahal kaki sudut awal berimpit dengan nol pada skala dalam.",
          "Mengira ukuran sudut dipengaruhi oleh panjang kaki sudut. Besar sudut hanya ditentukan oleh derajat bukaan rotasinya, bukan panjang garisnya."
        ],
        "tutorTip": "Ingat patokan utama: Siku-siku adalah $90^\\circ$ (tegak lurus seperti huruf L). Jika lebih sempit dari L = Lancip, jika lebih lebar dari L = Tumpul!"
      },
      "questions": [
        {
          "id": "sd5-b6-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Sudut yang besarnya lebih dari $0^\\circ$ dan kurang dari $90^\\circ$ dinamakan...",
          "options": [
            {
              "key": "A",
              "text": "Sudut lancip"
            },
            {
              "key": "B",
              "text": "Sudut tumpul"
            },
            {
              "key": "C",
              "text": "Sudut siku-siku"
            },
            {
              "key": "D",
              "text": "Sudut lurus"
            }
          ],
          "correctAnswer": "A",
          "hint": "Sudut lancip memiliki ukuran bukaan yang sempit di bawah $90^\\circ$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nSudut dengan ukuran antara $0^\\circ$ dan $90^\\circ$ disebut **sudut lancip** (Opsi A)."
        },
        {
          "id": "sd5-b6-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Besar sudut yang dibentuk oleh kedua jarum jam pada pukul 03.00 tepat adalah...",
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
              "text": "$120^\\circ$"
            },
            {
              "key": "D",
              "text": "$180^\\circ$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Pukul 03.00 membentuk sudut siku-siku: 3 langkah $\\times 30^\\circ$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$3 \\times 30^\\circ = 90^\\circ$$\nBesar sudutnya adalah **$90^\\circ$** (Opsi A)."
        },
        {
          "id": "sd5-b6-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Besar sudut terkecil yang dibentuk oleh kedua jarum jam pada pukul 05.00 tepat adalah...",
          "options": [
            {
              "key": "A",
              "text": "$150^\\circ$"
            },
            {
              "key": "B",
              "text": "$120^\\circ$"
            },
            {
              "key": "C",
              "text": "$180^\\circ$"
            },
            {
              "key": "D",
              "text": "$160^\\circ$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Jarak dari angka 12 ke angka 5 adalah 5 langkah angka jam: $5 \\times 30^\\circ$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$5 \\times 30^\\circ = 150^\\circ$$\nBesar sudutnya adalah **$150^\\circ$** (Opsi A)."
        },
        {
          "id": "sd5-b6-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah sudut terbentuk dari $\\frac{1}{3}$ putaran penuh lingkaran. Jenis sudut tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "Sudut tumpul"
            },
            {
              "key": "B",
              "text": "Sudut lancip"
            },
            {
              "key": "C",
              "text": "Sudut siku-siku"
            },
            {
              "key": "D",
              "text": "Sudut lurus"
            }
          ],
          "correctAnswer": "A",
          "hint": "Satu putaran penuh $= 360^\\circ$. Hitung $\\frac{1}{3} \\times 360^\\circ = 120^\\circ$, lalu tentukan jenisnya.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Hitung besar sudut: $\\frac{1}{3} \\times 360^\\circ = 120^\\circ$.\n2. Karena $120^\\circ$ berada di antara $90^\\circ$ dan $180^\\circ$, maka termasuk **sudut tumpul** (Opsi A)."
        }
      ]
    },
    {
      "id": "sd5-bab7-membandingkan-bangun-datar",
      "title": "Bab 7: Membandingkan Ciri-Ciri Bangun Datar",
      "summary": {
        "overview": "Jika kalian mengamati rambu-rambu lalu lintas di jalan raya, kalian akan melihat bentuk belah ketupat kuning untuk peringatan bahaya, persegi panjang biru untuk petunjuk arah jalan, dan segitiga merah untuk rambu peringatan. Mengapa bentuk bangun-bangun datar tersebut tampak berbeda dan memiliki nama yang berlainan? Perbedaannya terletak pada ciri-ciri dan karakteristik geometris yang dimilikinya. Dalam rancangan ubin lantai dan kerajinan anyaman tradisional, kombinasi bentuk geometris ini menciptakan pola ornamen yang indah dan kokoh.\n\nSetiap bangun datar memiliki identitas unik berupa jumlah sisi, kesamaan panjang sisi, besar sudut-sudutnya, kesejajaran garis, serta garis simetri lipat dan putarnya. Persegi dan belah ketupat sama-sama memiliki 4 sisi sama panjang, namun sudut-sudut persegi semuanya siku-siku ($90^\\circ$) sedangkan sudut belah ketupat tidak selalu siku-siku. Mengidentifikasi persamaan dan perbedaan inilah yang dinamakan membandingkan ciri-ciri bangun datar.\n\nBab ini membimbing siswa Kelas 5 menganalisis dan membandingkan sifat-sifat bangun datar segiempat (persegi, persegi panjang, jajar genjang, belah ketupat, layang-layang, trapesium) dan berbagai jenis segitiga, memahami sifat diagonal yang berpotongan tegak lurus, serta menentukan jumlah simetri lipat dan simetri putar pada masing-masing bangun datar.",
        "coreConcepts": [
          "Ciri Khusus Segiempat:\n- Persegi: 4 sisi sama panjang, 4 sudut siku-siku ($90^\\circ$), diagonal berpotongan tegak lurus dan sama panjang.\n- Persegi Panjang: 2 pasang sisi sejajar sama panjang, 4 sudut siku-siku, diagonal sama panjang tetapi tidak tegak lurus.\n- Belah Ketupat: 4 sisi sama panjang, sudut berhadapan sama besar, diagonal berpotongan tegak lurus ($90^\\circ$).\n- Layang-Layang: Memiliki 2 pasang sisi berdampingan sama panjang, diagonal berpotongan tegak lurus, memiliki 1 sumbu simetri.",
          "Simetri Lipat: Jumlah lipatan yang dapat membagi bangun datar menjadi dua bagian yang persis sama besar dan saling menutupi secara sempurna.",
          "Simetri Putar: Jumlah posisi yang membuktikan bangun datar dapat menempati bingkainya kembali dalam satu putaran penuh ($360^\\circ$)."
        ],
        "workedExamples": [
          {
            "title": "Membandingkan Ciri Persegi dan Belah Ketupat",
            "problem": "Sebutkan satu persamaan dan satu perbedaan utama antara bangun datar Persegi dan Belah Ketupat.",
            "solution": "Langkah 1: Tentukan persamaannya:\nKeduanya memiliki **4 sisi yang sama panjang** dan kedua diagonalnya saling berpotongan tegak lurus ($90^\\circ$).\n\nLangkah 2: Tentukan perbedaannya:\nPersegi memiliki **4 sudut siku-siku ($90^\\circ$)**, sedangkan Belah Ketupat memiliki dua pasang sudut berhadapan yang tidak siku-siku (sepasang sudut lancip dan sepasang sudut tumpul)."
          },
          {
            "title": "Menghitung Simetri Lipat dan Putar Persegi Panjang",
            "problem": "Tentukan banyak simetri lipat dan simetri putar yang dimiliki oleh bangun persegi panjang.",
            "solution": "Langkah 1: Simetri Lipat:\nPersegi panjang dapat dilipat secara horizontal dan vertikal saling menutupi sempurna (diagonal tidak bisa). Jadi, memiliki **2 simetri lipat**.\n\nLangkah 2: Simetri Putar:\nDalam satu putaran penuh $360^\\circ$, persegi panjang menempati bingkainya pada putaran $180^\\circ$ dan $360^\\circ$. Jadi, memiliki **2 simetri putar**."
          }
        ],
        "keyFormulas": [
          {
            "label": "Simetri Persegi",
            "formula": "4 \\text{ lipat, } 4 \\text{ putar}"
          },
          {
            "label": "Simetri Persegi Panjang",
            "formula": "2 \\text{ lipat, } 2 \\text{ putar}"
          }
        ],
        "misconceptions": [
          "Mengira garis diagonal persegi panjang merupakan sumbu simetri lipat. Jika persegi panjang dilipat menurut diagonalnya, kedua bagian tidak akan saling menutupi sempurna.",
          "Mengira jajar genjang memiliki simetri lipat, padahal jajar genjang tidak memiliki simetri lipat sama sekali (0 simetri lipat)."
        ],
        "tutorTip": "Ingat: Bangun datar paling sempurna adalah PERSEGI karena memiliki 4 sisi sama panjang, 4 sudut siku-siku, 4 simetri lipat, dan 4 simetri putar!"
      },
      "questions": [
        {
          "id": "sd5-b7-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Bangun datar segiempat yang memiliki 4 sisi sama panjang dan 4 sudut siku-siku adalah...",
          "options": [
            {
              "key": "A",
              "text": "Persegi"
            },
            {
              "key": "B",
              "text": "Belah ketupat"
            },
            {
              "key": "C",
              "text": "Persegi panjang"
            },
            {
              "key": "D",
              "text": "Jajar genjang"
            }
          ],
          "correctAnswer": "A",
          "hint": "Ciri khas: 4 sisi sama panjang DAN semua sudutnya $90^\\circ$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nBangun datar dengan 4 sisi sama panjang dan 4 sudut siku-siku adalah **persegi** (Opsi A)."
        },
        {
          "id": "sd5-b7-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Banyaknya simetri lipat yang dimiliki oleh bangun persegi panjang adalah...",
          "options": [
            {
              "key": "A",
              "text": "2"
            },
            {
              "key": "B",
              "text": "4"
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
          "correctAnswer": "A",
          "hint": "Persegi panjang hanya bisa dilipat tegak dan mendatar, diagonalnya tidak menghasilkan lipatan yang saling menutup.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nPersegi panjang memiliki **2 simetri lipat** (Opsi A)."
        },
        {
          "id": "sd5-b7-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Ciri-ciri suatu bangun datar: memiliki dua pasang sisi berdampingan sama panjang, kedua diagonalnya berpotongan tegak lurus, dan memiliki tepat 1 sumbu simetri lipat. Bangun datar yang dimaksud adalah...",
          "options": [
            {
              "key": "A",
              "text": "Layang-layang"
            },
            {
              "key": "B",
              "text": "Belah ketupat"
            },
            {
              "key": "C",
              "text": "Jajar genjang"
            },
            {
              "key": "D",
              "text": "Trapesium sama kaki"
            }
          ],
          "correctAnswer": "A",
          "hint": "Bentuk seperti mainan layangan di udara dengan 1 sumbu simetri.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nBangun dengan 2 pasang sisi berdampingan sama panjang dan 1 sumbu simetri adalah **layang-layang** (Opsi A)."
        },
        {
          "id": "sd5-b7-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Pernyataan berikut mengenai sifat jajar genjang yang benar adalah...",
          "options": [
            {
              "key": "A",
              "text": "Memiliki 2 simetri putar dan 0 simetri lipat"
            },
            {
              "key": "B",
              "text": "Memiliki 2 simetri lipat dan 2 simetri putar"
            },
            {
              "key": "C",
              "text": "Memiliki 4 simetri putar"
            },
            {
              "key": "D",
              "text": "Kedua diagonalnya berpotongan tegak lurus"
            }
          ],
          "correctAnswer": "A",
          "hint": "Jajar genjang tidak bisa dilipat saling menutupi, tetapi dapat menempati bingkainya pada putaran $180^\\circ$ dan $360^\\circ$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nJajar genjang tidak memiliki simetri lipat (0 simetri lipat) dan memiliki **2 simetri putar** (Opsi A)."
        }
      ]
    },
    {
      "id": "sd5-bab8-data",
      "title": "Bab 8: Data",
      "summary": {
        "overview": "Pernahkah wali kelas kalian melakukan pemilihan ketua kelas dengan menuliskan nama-nama calon di papan tulis lalu membubuhkan garis-garis coretan (turus) setiap kali ada siswa yang mengangkat tangan memilih? Proses menghitung suara tersebut adalah contoh paling sederhana dari kegiatan Pengumpulan dan Pencatatan Data. Hal serupa juga dilakukan oleh panitia lomba 17 Agustus saat merekapitulasi perolehan poin dari setiap rukun tetangga.\n\nDi era digital modern saat ini, data ada di mana-mana. Dokter mencatat berat badan balita di posyandu, BMKG mencatat curah hujan harian, dan pengelola perpustakaan mencatat buku cerita yang paling laris dipinjam oleh siswa. Agar data mentah yang banyak tersebut mudah dibaca dan dipahami oleh orang lain, data harus disusun ke dalam Tabel Frekuensi dan disajikan ke dalam Diagram Batang atau Piktogram (diagram gambar).\n\nBab ini membimbing siswa Kelas 5 mengumpulkan data sederhana di lingkungan kelas, mengorganisasikan data ke dalam tabel frekuensi menggunakan turus (tally), menyajikan data dalam bentuk Diagram Gambar (Piktogram) dan Diagram Batang tunggal yang rapi, serta membaca informasi penting seperti data terbanyak (modus), data terkecil, dan selisih nilai antarkategori.",
        "coreConcepts": [
          "Pengumpulan & Pencatatan Data: Dilakukan melalui pencatatan langsung, wawancara, atau lembar isian (angket). Data mentah dihitung menggunakan turus (kelompok 5 garis: empat tegak satu miring).",
          "Tabel Distribusi Frekuensi: Menyajikan data dalam bentuk kolom kategori dan angka frekuensi (banyaknya data) sehingga mudah dibaca secara ringkas.",
          "Piktogram (Diagram Gambar): Diagram yang menyajikan data menggunakan simbol atau gambar tertentu, di mana setiap satu gambar mewakili sejumlah kuantitas tertentu (misal: 1 gambar buku mewakili 10 buah buku).",
          "Diagram Batang: Menyajikan data menggunakan batang-batang persegi panjang dengan tinggi sesuai frekuensi masing-masing kategori.",
          "Membaca & Menginterpretasikan Data: Mengidentifikasi nilai tertinggi (modus), nilai terendah, menghitung selisih antardua kategori, dan menjumlahkan total seluruh data."
        ],
        "workedExamples": [
          {
            "title": "Membaca Piktogram Peminjaman Buku",
            "problem": "Sebuah piktogram perpustakaan menunjukkan bahwa 1 gambar buku mewakili 5 eksemplar buku cerita yang dipinjam. Jika pada hari Rabu terdapat 6 gambar buku, berapa banyak buku cerita yang dipinjam pada hari Rabu?",
            "solution": "Langkah 1: Identifikasi nilai per 1 gambar simbol:\n$$1\\text{ gambar} = 5\\text{ buku}$$\n\nLangkah 2: Kalikan dengan banyak gambar pada hari Rabu:\n$$\\text{Total buku} = 6 \\times 5 = 30\\text{ buku}$$\nJadi, banyak buku yang dipinjam pada hari Rabu adalah **30 buku**."
          },
          {
            "title": "Menghitung Selisih Nilai pada Diagram Batang",
            "problem": "Dari diagram batang hasil panen buah apel: Desa Makmur memanen 45 ton apel dan Desa Sejahtera memanen 30 ton apel. Berapakah selisih hasil panen apel antara kedua desa tersebut?",
            "solution": "Langkah 1: Ambil data hasil panen masing-masing desa:\n- Desa Makmur: 45 ton\n- Desa Sejahtera: 30 ton\n\nLangkah 2: Kurangkan nilai terbesar dengan nilai terkecil:\n$$\\text{Selisih} = 45 - 30 = 15\\text{ ton}$$\nSelisih hasil panen apel kedua desa adalah **15 ton**."
          }
        ],
        "keyFormulas": [
          {
            "label": "Konversi Piktogram",
            "formula": "\\text{Total Data} = \\text{Banyak Simbol} \\times \\text{Nilai Per Simbol}"
          },
          {
            "label": "Selisih Data",
            "formula": "\\text{Selisih} = \\text{Nilai Terbanyak} - \\text{Nilai Terkecil}"
          }
        ],
        "misconceptions": [
          "Lupa mengalikan jumlah simbol gambar pada piktogram dengan nilai perwakilan simbolnya.",
          "Salah membaca skala sumbu tegak pada diagram batang (misalnya setiap garis mewakili kelipatan 5 atau 10, bukan kelipatan 1)."
        ],
        "tutorTip": "Selalu perhatikan 'Keterangan Kunci' di bagian bawah diagram piktogram untuk mengetahui satu gambar mewakili berapa buah benda!"
      },
      "questions": [
        {
          "id": "sd5-b8-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Pada sebuah piktogram, 1 gambar mobil mewakili 10 unit mobil sesungguhnya. Jika sebuah dealer memiliki 5 gambar mobil, banyak mobil yang dimiliki dealer tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "50 unit"
            },
            {
              "key": "B",
              "text": "5 unit"
            },
            {
              "key": "C",
              "text": "15 unit"
            },
            {
              "key": "D",
              "text": "500 unit"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kalikan jumlah gambar mobil dengan nilai per gambar: $5 \\times 10$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$5 \\times 10 = 50\\text{ unit}$$\nTotal mobil adalah **50 unit** (Opsi A)."
        },
        {
          "id": "sd5-b8-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Data nilai ulangan matematika 5 orang siswa: $7, 8, 8, 9, 8$. Modus (data yang paling sering muncul) dari nilai tersebut adalah...",
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
              "text": "9"
            },
            {
              "key": "D",
              "text": "8,5"
            }
          ],
          "correctAnswer": "A",
          "hint": "Cari nilai yang muncul paling banyak: angka 8 muncul 3 kali.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nAngka 8 muncul sebanyak 3 kali, paling sering dibanding angka lain. Jadi, modusnya adalah **8** (Opsi A)."
        },
        {
          "id": "sd5-b8-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dalam diagram batang jumlah ekstrakurikuler: Pramuka diikuti 40 siswa, Futsal 35 siswa, Paduan Suara 25 siswa, dan Seni Tari 20 siswa. Selisih jumlah siswa yang mengikuti Pramuka dan Seni Tari adalah...",
          "options": [
            {
              "key": "A",
              "text": "20 siswa"
            },
            {
              "key": "B",
              "text": "15 siswa"
            },
            {
              "key": "C",
              "text": "10 siswa"
            },
            {
              "key": "D",
              "text": "25 siswa"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kurangkan jumlah peserta Pramuka (40) dengan Seni Tari (20).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Selisih} = 40 - 20 = 20\\text{ siswa}$$\nSelisihnya adalah **20 siswa** (Opsi A)."
        },
        {
          "id": "sd5-b8-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah tabel frekuensi mencatat jumlah pengunjung perpustakaan: Senin 25 orang, Selasa 30 orang, Rabu 35 orang, Kamis 20 orang, dan Jumat 40 orang. Rata-rata (mean) jumlah pengunjung perpustakaan per hari adalah...",
          "options": [
            {
              "key": "A",
              "text": "30 orang"
            },
            {
              "key": "B",
              "text": "28 orang"
            },
            {
              "key": "C",
              "text": "32 orang"
            },
            {
              "key": "D",
              "text": "35 orang"
            }
          ],
          "correctAnswer": "A",
          "hint": "Jumlahkan seluruh pengunjung ($25 + 30 + 35 + 20 + 40 = 150$), lalu bagi dengan 5 hari.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Total pengunjung: $25 + 30 + 35 + 20 + 40 = 150\\text{ orang}$.\n2. Rata-rata per hari:\n$$\\text{Rata-rata} = \\frac{150}{5} = 30\\text{ orang}$$\nRata-rata pengunjung per hari adalah **30 orang** (Opsi A)."
        }
      ]
    },
    {
      "id": "sd5-bab9-cacah-satu-juta",
      "title": "Bab 9: Bilangan Cacah Sampai 1.000.000",
      "summary": {
        "overview": "Ketika kita membaca informasi di berita ekonomi mengenai dana anggaran renovasi sekolah senilai ratusan juta rupiah, jumlah penduduk di suatu kota administratif yang mencapai 850.000 jiwa, atau harga sebuah sepeda motor baru seharga Rp18.500.000,00, kita memasuki domain bilangan bernilai jutaan. Bilangan dengan enam sampai tujuh angka ini merupakan tingkatan tertinggi dalam kajian bilangan cacah di sekolah dasar.\n\nMemahami bilangan sampai 1.000.000 melatih siswa untuk mengelola besaran finansial dalam kehidupan nyata dengan penuh tanggung jawab. Siswa belajar bahwa satu juta ($1.000.000$) terbentuk dari sepuluh kelompok seratus ribuan, atau seribu kelompok seribuan. Penguasaan nilai tempat ratusan ribu dan jutaan mencegah terjadinya kesalahan fatal saat melakukan transaksi perbankan, penulisan cek, atau penghitungan kas organisasi sekolah.\n\nBab penutup di Kelas 5 ini membimbing siswa membaca dan menulis bilangan cacah besar sampai 1.000.000, mengidentifikasi nilai tempat dan nilai angka, membandingkan dan mengurutkan bilangan, melakukan estimasi pembulatan bilangan ke ratusan ribu terdekat, serta menyelesaikan operasi hitung penjumlahan, pengurangan, perkalian, dan pembagian bernilai ratusan ribu secara terampil.",
        "coreConcepts": [
          "Membaca dan Menulis Bilangan sampai 1.000.000: Membaca dimulai dari periode jutaan, ratusan ribu, puluhan ribu, ribuan, ratusan, puluhan, hingga satuan. Contoh: 750.400 dibaca 'tujuh ratus lima puluh ribu empat ratus'.",
          "Nilai Tempat Ratusan Ribu & Jutaan: Bilangan 6 digit memiliki nilai tempat tertinggi Ratusan Ribu ($100.000$), dan bilangan 7 digit mencapai Jutaan ($1.000.000$).",
          "Penulisan Tanda Pemisah Ribuan: Menggunakan tanda titik (.) setiap 3 angka dari digit satuan paling kanan, contoh: 1.000.000.",
          "Operasi Hitung Finansial: Menyelesaikan operasi penjumlahan dan pengurangan ratusan ribu pada anggaran belanja desa atau kas tabungan sekolah."
        ],
        "workedExamples": [
          {
            "title": "Membaca dan Menentukan Nilai Tempat Angka Jutaan",
            "problem": "Sebuah proyek pembangunan jembatan desa membutuhkan dana sebesar Rp875.000,00 untuk semen dan Rp125.000,00 untuk pasir. Hitung total biayanya dan tuliskan cara membaca hasil akhirnya.",
            "solution": "Langkah 1: Jumlahkan kedua besaran dana:\n$$\\text{Total} = 875.000 + 125.000 = 1.000.000$$\n\nLangkah 2: Tuliskan cara membaca bilangan $1.000.000$:\nBilangan $1.000.000$ dibaca: **Satu juta rupiah**."
          },
          {
            "title": "Menghitung Sisa Dana Kas Tabungan",
            "problem": "Koperasi sekolah memiliki saldo kas sebesar Rp650.000,00. Koperasi membeli seragam batik baru senilai Rp420.000,00. Berapakah sisa saldo kas koperasi sekolah sekarang?",
            "solution": "Langkah 1: Gunakan operasi pengurangan bersusun:\n$$650.000 - 420.000$$\n\nLangkah 2: Kurangkan bagian ratusan ribu dan puluhan ribu:\n$$650 - 420 = 230$$\nTambahkan kelompok tiga nol ribuan di belakangnya: $230.000$.\nSisa saldo kas koperasi adalah **Rp230.000,00**."
          }
        ],
        "keyFormulas": [
          {
            "label": "Nilai Satu Juta",
            "formula": "1.000.000 = 10 \\times 100.000 = 1.000 \\times 1.000"
          },
          {
            "label": "Hierarki Tempat",
            "formula": "\\text{Jutaan} \\mid \\text{Ratusan Ribu} \\mid \\text{Puluhan Ribu} \\dots"
          }
        ],
        "misconceptions": [
          "Kurang teliti dalam menghitung jumlah angka nol pada bilangan bernilai ratusan ribu (5 angka nol) dan jutaan (6 angka nol).",
          "Salah meletakkan tanda titik pemisah ribuan dari sebelah kiri, padahal titik pemisah selalu dihitung dari sebelah kanan."
        ],
        "tutorTip": "Ingat jumlah nolnya: Seratus ribu memiliki 5 angka nol ($100.000$), sedangkan Satu juta memiliki 6 angka nol ($1.000.000$)!"
      },
      "questions": [
        {
          "id": "sd5-b9-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Bilangan 'tujuh ratus lima puluh ribu rupiah' jika ditulis dalam bentuk lambang bilangan angka adalah...",
          "options": [
            {
              "key": "A",
              "text": "Rp750.000,00"
            },
            {
              "key": "B",
              "text": "Rp75.000,00"
            },
            {
              "key": "C",
              "text": "Rp7.500.000,00"
            },
            {
              "key": "D",
              "text": "Rp705.000,00"
            }
          ],
          "correctAnswer": "A",
          "hint": "Tujuh ratus lima puluh (750) diikuti tiga angka nol ribuan.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nLambang bilangannya adalah **Rp750.000,00** (Opsi A)."
        },
        {
          "id": "sd5-b9-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Nilai tempat dari digit 9 pada bilangan 940.200 adalah...",
          "options": [
            {
              "key": "A",
              "text": "Ratusan ribu"
            },
            {
              "key": "B",
              "text": "Puluhan ribu"
            },
            {
              "key": "C",
              "text": "Jutaan"
            },
            {
              "key": "D",
              "text": "Ribuan"
            }
          ],
          "correctAnswer": "A",
          "hint": "Digit ke-6 dari kanan menempati nilai tempat ratusan ribu ($9 \\times 100.000 = 900.000$).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nDigit 9 menempati nilai tempat **ratusan ribu** (Opsi A)."
        },
        {
          "id": "sd5-b9-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil dari operasi penjumlahan $450.000 + 380.000$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "830.000"
            },
            {
              "key": "B",
              "text": "730.000"
            },
            {
              "key": "C",
              "text": "820.000"
            },
            {
              "key": "D",
              "text": "930.000"
            }
          ],
          "correctAnswer": "A",
          "hint": "Jumlahkan: $450 + 380 = 830$, lalu tambahkan tiga angka nol.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$450.000 + 380.000 = 830.000$$\nHasilnya adalah **830.000** (Opsi A)."
        },
        {
          "id": "sd5-b9-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Seorang dermawan memiliki uang Rp1.000.000,00. Ia menyumbangkan Rp350.000,00 untuk panti asuhan dan Rp425.000,00 untuk pembangunan tempat ibadah. Sisa uang dermawan tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "Rp225.000,00"
            },
            {
              "key": "B",
              "text": "Rp250.000,00"
            },
            {
              "key": "C",
              "text": "Rp275.000,00"
            },
            {
              "key": "D",
              "text": "Rp215.000,00"
            }
          ],
          "correctAnswer": "A",
          "hint": "Hitung total sumbangan ($350.000 + 425.000 = 775.000$), lalu kurangkan dari 1.000.000.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Total sumbangan: $350.000 + 425.000 = 775.000$.\n2. Sisa uang:\n$$1.000.000 - 775.000 = \\text{Rp}225.000,00$$\nSisa uang dermawan adalah **Rp225.000,00** (Opsi A)."
        }
      ]
    }
  ]
};
