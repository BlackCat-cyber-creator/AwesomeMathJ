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
              "text": "Tujuh puluh empat ribu dua ratus lima"
            },
            {
              "key": "B",
              "text": "Tujuh puluh empat ribu dua puluh lima ratus"
            },
            {
              "key": "C",
              "text": "Tujuh puluh empat ribu dua puluh lima"
            },
            {
              "key": "D",
              "text": "Tujuh puluh empat ribu dua ratus lima puluh"
            }
          ],
          "correctAnswer": "C",
          "hint": "Angka ratusan bernilai 0 sehingga tidak dibaca. Bacalah 74 ribu lalu langsung dua puluh lima.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nAngka 74 menempati ribuan dan angka 25 menempati puluhan-satuan, dengan angka ratusan 0 dilewati.\nDibaca: **Tujuh puluh empat ribu dua puluh lima** (Opsi C)."
        },
        {
          "id": "sd5-b1-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Nilai angka dari digit 8 pada bilangan 58.420 adalah...",
          "options": [
            {
              "key": "A",
              "text": "80.000"
            },
            {
              "key": "B",
              "text": "800"
            },
            {
              "key": "C",
              "text": "8.000"
            },
            {
              "key": "D",
              "text": "80"
            }
          ],
          "correctAnswer": "C",
          "hint": "Digit 8 berada pada posisi nilai tempat ribuan.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nDigit 8 menempati nilai tempat ribuan, sehingga nilai angkanya adalah $8 \\times 1.000 = 8.000$ (Opsi C)."
        },
        {
          "id": "sd5-b1-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bentuk dekomposisi dari bilangan 62.308 adalah...",
          "options": [
            {
              "key": "A",
              "text": "$60.000 + 2.000 + 30 + 8$"
            },
            {
              "key": "B",
              "text": "$6.000 + 200 + 30 + 8$"
            },
            {
              "key": "C",
              "text": "$60.000 + 200 + 300 + 8$"
            },
            {
              "key": "D",
              "text": "$60.000 + 2.000 + 300 + 8$"
            }
          ],
          "correctAnswer": "D",
          "hint": "Perhatikan nilai tempat: 6 puluhan ribu, 2 ribuan, 3 ratusan, 0 puluhan, dan 8 satuan.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$62.308 = 60.000 + 2.000 + 300 + 8$$\nHasilnya adalah **$60.000 + 2.000 + 300 + 8$** (Opsi D)."
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
        },
        {
          "id": "sd5-b1-5",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Nilai angka 7 pada bilangan 74.825 adalah...",
          "options": [
            {
              "key": "A",
              "text": "7.000"
            },
            {
              "key": "B",
              "text": "700"
            },
            {
              "key": "C",
              "text": "70"
            },
            {
              "key": "D",
              "text": "70.000"
            }
          ],
          "correctAnswer": "D",
          "hint": "Angka 7 menempati posisi puluhan ribu.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nAngka 7 menempati nilai tempat puluh ribuan, sehingga bernilai **70.000** (Opsi D)."
        },
        {
          "id": "sd5-b1-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil dari operasi $45.670 + 28.450$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "73.120"
            },
            {
              "key": "B",
              "text": "74.120"
            },
            {
              "key": "C",
              "text": "74.020"
            },
            {
              "key": "D",
              "text": "73.020"
            }
          ],
          "correctAnswer": "B",
          "hint": "Jumlahkan dengan cara bersusun pendek mulai dari satuan.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$45.670 + 28.450 = 74.120$$ (Opsi B)."
        },
        {
          "id": "sd5-b1-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil pengurangan $62.500 - 37.850$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "25.650"
            },
            {
              "key": "B",
              "text": "24.750"
            },
            {
              "key": "C",
              "text": "24.650"
            },
            {
              "key": "D",
              "text": "25.750"
            }
          ],
          "correctAnswer": "C",
          "hint": "Kurangkan secara bersusun dengan teknik meminjam.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$62.500 - 37.850 = 24.650$$ (Opsi C)."
        },
        {
          "id": "sd5-b1-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bentuk perkalian $350 \\times 40$ menghasilkan nilai...",
          "options": [
            {
              "key": "A",
              "text": "140.000"
            },
            {
              "key": "B",
              "text": "1.400"
            },
            {
              "key": "C",
              "text": "12.000"
            },
            {
              "key": "D",
              "text": "14.000"
            }
          ],
          "correctAnswer": "D",
          "hint": "$35 \\times 4 = 140$, lalu tambahkan dua angka nol di belakangnya.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$350 \\times 40 = 14.000$$ (Opsi D)."
        },
        {
          "id": "sd5-b1-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil pembagian $48.000 : 60$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "800"
            },
            {
              "key": "B",
              "text": "80"
            },
            {
              "key": "C",
              "text": "8.000"
            },
            {
              "key": "D",
              "text": "600"
            }
          ],
          "correctAnswer": "A",
          "hint": "Coret satu nol: $4.800 : 6 = 800$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$48.000 : 60 = 800$$ (Opsi A)."
        },
        {
          "id": "sd5-b1-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bilangan 68.742 jika dibulatkan ke ribuan terdekat menjadi...",
          "options": [
            {
              "key": "A",
              "text": "68.000"
            },
            {
              "key": "B",
              "text": "69.000"
            },
            {
              "key": "C",
              "text": "70.000"
            },
            {
              "key": "D",
              "text": "68.700"
            }
          ],
          "correctAnswer": "B",
          "hint": "Lihat angka ratusan yaitu 7 ($7 \\ge 5$), maka bulatkan ke atas.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nKarena angka ratusannya 7, maka dibulatkan ke atas menjadi **69.000** (Opsi B)."
        },
        {
          "id": "sd5-b1-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Koperasi sekolah memiliki modal Rp85.000,00. Koperasi membeli buku seharga Rp47.500,00 dan alat tulis seharga Rp22.500,00. Sisa modal koperasi sekarang adalah...",
          "options": [
            {
              "key": "A",
              "text": "Rp16.000,00"
            },
            {
              "key": "B",
              "text": "Rp14.000,00"
            },
            {
              "key": "C",
              "text": "Rp15.000,00"
            },
            {
              "key": "D",
              "text": "Rp17.500,00"
            }
          ],
          "correctAnswer": "C",
          "hint": "Total belanja $= 47.500 + 22.500 = 70.000$. Sisa $= 85.000 - 70.000$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$85.000 - (47.500 + 22.500) = 85.000 - 70.000 = \\text{Rp}15.000,00$$ (Opsi C)."
        },
        {
          "id": "sd5-b1-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah truk mengangkut 45 karung beras. Setiap karung beras memiliki berat 25 kg. Total berat seluruh beras yang diangkut truk tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "1.100 kg"
            },
            {
              "key": "B",
              "text": "1.150 kg"
            },
            {
              "key": "C",
              "text": "1.125 kg"
            },
            {
              "key": "D",
              "text": "1.225 kg"
            }
          ],
          "correctAnswer": "C",
          "hint": "Kalikan banyak karung dengan berat tiap karung: $45 \\times 25$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$45 \\times 25 = 1.125\\text{ kg}$$ (Opsi C)."
        },
        {
          "id": "sd5-b1-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Urutan bilangan berikut dari yang terkecil hingga terbesar adalah...",
          "options": [
            {
              "key": "A",
              "text": "35.400, 35.100, 34.800, 34.500"
            },
            {
              "key": "B",
              "text": "34.800, 34.500, 35.100, 35.400"
            },
            {
              "key": "C",
              "text": "34.500, 35.100, 34.800, 35.400"
            },
            {
              "key": "D",
              "text": "34.500, 34.800, 35.100, 35.400"
            }
          ],
          "correctAnswer": "D",
          "hint": "Bandingkan nilai tempat puluhan ribu, ribuan, lalu ratusan.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nUrutan dari terkecil: **34.500 < 34.800 < 35.100 < 35.400** (Opsi D)."
        },
        {
          "id": "sd5-b1-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil operasi hitung campuran $15.000 + 4.000 \\times 5 - 8.000$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "87.000"
            },
            {
              "key": "B",
              "text": "27.000"
            },
            {
              "key": "C",
              "text": "25.000"
            },
            {
              "key": "D",
              "text": "30.000"
            }
          ],
          "correctAnswer": "B",
          "hint": "Dahulukan operasi perkalian: $4.000 \\times 5 = 20.000$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$15.000 + 20.000 - 8.000 = 35.000 - 8.000 = 27.000$$ (Opsi B)."
        },
        {
          "id": "sd5-b1-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah pabrik roti memproduksi 1.250 bungkus roti setiap hari. Berapa banyak roti yang diproduksi pabrik tersebut dalam 24 hari?",
          "options": [
            {
              "key": "A",
              "text": "28.000 bungkus"
            },
            {
              "key": "B",
              "text": "30.000 bungkus"
            },
            {
              "key": "C",
              "text": "32.000 bungkus"
            },
            {
              "key": "D",
              "text": "25.000 bungkus"
            }
          ],
          "correctAnswer": "B",
          "hint": "Kalikan $1.250 \\times 24$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$1.250 \\times 24 = 30.000\\text{ bungkus}$$ (Opsi B)."
        },
        {
          "id": "sd5-b1-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah yayasan sosial menerima sumbangan Rp75.000.000,00. Uang tersebut dibagikan kepada 30 panti asuhan secara merata. Setiap panti asuhan membagikan lagi uang yang diterima kepada 25 anak asuhnya sama rata. Berapakah uang yang diterima setiap anak asuh?",
          "options": [
            {
              "key": "A",
              "text": "Rp125.000,00"
            },
            {
              "key": "B",
              "text": "Rp80.000,00"
            },
            {
              "key": "C",
              "text": "Rp150.000,00"
            },
            {
              "key": "D",
              "text": "Rp100.000,00"
            }
          ],
          "correctAnswer": "D",
          "hint": "Tiap panti $= 75.000.000 / 30 = 2.500.000$. Tiap anak $= 2.500.000 / 25$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n1. Per panti: $75.000.000 : 30 = 2.500.000$\\n2. Per anak: $2.500.000 : 25 = \\text{Rp}100.000,00$ (Opsi D)."
        },
        {
          "id": "sd5-b1-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Nilai $n$ yang memenuhi persamaan $n - 18.750 = 34.250 + 12.000$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "65.000"
            },
            {
              "key": "B",
              "text": "64.000"
            },
            {
              "key": "C",
              "text": "66.000"
            },
            {
              "key": "D",
              "text": "63.500"
            }
          ],
          "correctAnswer": "A",
          "hint": "Sederhanakan ruas kanan: $46.250$, lalu tambahkan $18.750$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$n = 46.250 + 18.750 = 65.000$$ (Opsi A)."
        },
        {
          "id": "sd5-b1-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dalam suatu perayaan hari kemerdekaan, panitia menyiapkan 64 kotak air mineral. Setiap kotak berisi 48 botol. Jika 2.500 botol air telah dibagikan kepada peserta, berapa botol air mineral yang masih tersisa?",
          "options": [
            {
              "key": "A",
              "text": "572 botol"
            },
            {
              "key": "B",
              "text": "562 botol"
            },
            {
              "key": "C",
              "text": "582 botol"
            },
            {
              "key": "D",
              "text": "602 botol"
            }
          ],
          "correctAnswer": "A",
          "hint": "Total botol $= 64 \\times 48 = 3.072$. Sisa $= 3.072 - 2.500$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$64 \\times 48 - 2.500 = 3.072 - 2.500 = 572\\text{ botol}$$ (Opsi A)."
        },
        {
          "id": "sd5-b1-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Selisih nilai angka 8 pada bilangan 84.815 adalah...",
          "options": [
            {
              "key": "A",
              "text": "79.000"
            },
            {
              "key": "B",
              "text": "79.200"
            },
            {
              "key": "C",
              "text": "80.800"
            },
            {
              "key": "D",
              "text": "72.000"
            }
          ],
          "correctAnswer": "B",
          "hint": "Angka 8 pertama bernilai 80.000 dan angka 8 kedua bernilai 800.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$80.000 - 800 = 79.200$$ (Opsi B)."
        },
        {
          "id": "sd5-b1-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah toko grosir menjual beras kemasan 5 kg seharga Rp65.000,00 dan kemasan 10 kg seharga Rp125.000,00. Jika seorang pembeli ingin membeli 30 kg beras dengan harga paling hemat, berapakah uang yang harus ia bayar?",
          "options": [
            {
              "key": "A",
              "text": "Rp375.000,00"
            },
            {
              "key": "B",
              "text": "Rp390.000,00"
            },
            {
              "key": "C",
              "text": "Rp380.000,00"
            },
            {
              "key": "D",
              "text": "Rp400.000,00"
            }
          ],
          "correctAnswer": "A",
          "hint": "Opsi 1: $3 \\times 10\\text{ kg} = 3 \\times 125.000 = 375.000$. Opsi 2: $6 \\times 5\\text{ kg} = 6 \\times 65.000 = 390.000$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nPaling hemat membeli 3 karung kemasan 10 kg: $$3 \\times 125.000 = \\text{Rp}375.000,00$$ (Opsi A)."
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
              "text": "$2 \\times 3^2 \\times 5$"
            },
            {
              "key": "B",
              "text": "$2 \\times 3 \\times 5$"
            },
            {
              "key": "C",
              "text": "$2^3 \\times 3 \\times 5$"
            },
            {
              "key": "D",
              "text": "$2^2 \\times 3 \\times 5$"
            }
          ],
          "correctAnswer": "D",
          "hint": "Bagi 60 dengan bilangan prima: $60 : 2 = 30$, $30 : 2 = 15$, $15 : 3 = 5$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$60 = 2 \\times 2 \\times 3 \\times 5 = 2^2 \\times 3 \\times 5$$\nFaktorisasi primanya adalah **$2^2 \\times 3 \\times 5$** (Opsi D)."
        },
        {
          "id": "sd5-b2-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "FPB dari bilangan 18 dan 24 adalah...",
          "options": [
            {
              "key": "A",
              "text": "12"
            },
            {
              "key": "B",
              "text": "6"
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
          "correctAnswer": "B",
          "hint": "Faktor dari 18 yang juga membagi habis 24 yang terbesar adalah 6.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n- $18 = 2 \\times 3^2$\n- $24 = 2^3 \\times 3$\n- FPB $= 2 \\times 3 = 6$\nFPB-nya adalah **6** (Opsi B)."
        },
        {
          "id": "sd5-b2-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "KPK dari bilangan 12 dan 15 adalah...",
          "options": [
            {
              "key": "A",
              "text": "30"
            },
            {
              "key": "B",
              "text": "180"
            },
            {
              "key": "C",
              "text": "60"
            },
            {
              "key": "D",
              "text": "45"
            }
          ],
          "correctAnswer": "C",
          "hint": "Faktorisasi: $12 = 2^2 \\times 3$ dan $15 = 3 \\times 5$. KPK $= 2^2 \\times 3 \\times 5 = 4 \\times 15 = 60$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{KPK} = 2^2 \\times 3 \\times 5 = 4 \\times 15 = 60$$\nKPK-nya adalah **60** (Opsi C)."
        },
        {
          "id": "sd5-b2-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Ibu memiliki 30 kue bolu dan 45 permen cokelat. Ibu ingin memasukkan kue dan cokelat tersebut ke dalam beberapa kantong plastik dengan jumlah dan jenis yang sama banyak tanpa tersisa. Berapa kantong plastik paling banyak yang dapat dibuat Ibu?",
          "options": [
            {
              "key": "A",
              "text": "10 kantong"
            },
            {
              "key": "B",
              "text": "5 kantong"
            },
            {
              "key": "C",
              "text": "15 kantong"
            },
            {
              "key": "D",
              "text": "30 kantong"
            }
          ],
          "correctAnswer": "C",
          "hint": "Gunakan FPB dari 30 dan 45 untuk mencari banyak kantong paling banyak.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Faktorisasi prima:\n- $30 = 2 \\times 3 \\times 5$\n- $45 = 3^2 \\times 5$\n2. $\\text{FPB} = 3 \\times 5 = 15$.\nBanyak kantong plastik paling banyak adalah **15 kantong** (Opsi C)."
        },
        {
          "id": "sd5-b2-5",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Faktor persekutuan terbesar (FPB) dari 12 dan 18 adalah...",
          "options": [
            {
              "key": "A",
              "text": "4"
            },
            {
              "key": "B",
              "text": "6"
            },
            {
              "key": "C",
              "text": "3"
            },
            {
              "key": "D",
              "text": "2"
            }
          ],
          "correctAnswer": "B",
          "hint": "Faktor 12: 1, 2, 3, 4, 6, 12. Faktor 18: 1, 2, 3, 6, 9, 18. Yang terbesar adalah 6.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nFPB(12, 18) = **6** (Opsi B)."
        },
        {
          "id": "sd5-b2-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Kelipatan persekutuan terkecil (KPK) dari 15 dan 20 adalah...",
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
              "text": "45"
            },
            {
              "key": "D",
              "text": "120"
            }
          ],
          "correctAnswer": "A",
          "hint": "KPK diperoleh dari perkalian faktor prima pangkat tertinggi: $2^2 \\times 3 \\times 5$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$15 = 3 \\times 5, \\quad 20 = 2^2 \\times 5 \\implies \\text{KPK} = 4 \\times 3 \\times 5 = 60$$ (Opsi A)."
        },
        {
          "id": "sd5-b2-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Faktorisasi prima dari bilangan 72 adalah...",
          "options": [
            {
              "key": "A",
              "text": "2^2 \\times 3^3"
            },
            {
              "key": "B",
              "text": "2^4 \\times 3"
            },
            {
              "key": "C",
              "text": "2^3 \\times 3^2"
            },
            {
              "key": "D",
              "text": "2 \\times 3^3"
            }
          ],
          "correctAnswer": "C",
          "hint": "Bagi 72 dengan bilangan prima berturut-turut: $72 : 2 = 36 : 2 = 18 : 2 = 9 : 3 = 3$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$72 = 2^3 \\times 3^2$$ (Opsi C)."
        },
        {
          "id": "sd5-b2-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "FPB dari 24, 36, dan 48 adalah...",
          "options": [
            {
              "key": "A",
              "text": "12"
            },
            {
              "key": "B",
              "text": "6"
            },
            {
              "key": "C",
              "text": "8"
            },
            {
              "key": "D",
              "text": "24"
            }
          ],
          "correctAnswer": "A",
          "hint": "Faktor prima yang sama berpangkat terendah: $2^2 \\times 3 = 12$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nFPB(24, 36, 48) = **12** (Opsi A)."
        },
        {
          "id": "sd5-b2-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "KPK dari 12, 18, dan 24 adalah...",
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
              "text": "96"
            },
            {
              "key": "D",
              "text": "144"
            }
          ],
          "correctAnswer": "A",
          "hint": "Faktor prima: $12 = 2^2 \\times 3, 18 = 2 \\times 3^2, 24 = 2^3 \\times 3$. KPK $= 2^3 \\times 3^2 = 72$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\text{KPK} = 8 \\times 9 = 72$$ (Opsi A)."
        },
        {
          "id": "sd5-b2-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Lampu A menyala setiap 6 detik sekali dan lampu B menyala setiap 8 detik sekali. Jika kedua lampu menyala bersamaan pada detik ke-0, pada detik ke berapa kedua lampu akan menyala bersamaan lagi untuk pertama kali?",
          "options": [
            {
              "key": "A",
              "text": "48"
            },
            {
              "key": "B",
              "text": "14"
            },
            {
              "key": "C",
              "text": "18"
            },
            {
              "key": "D",
              "text": "24"
            }
          ],
          "correctAnswer": "D",
          "hint": "Cari KPK dari 6 dan 8.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\text{KPK}(6, 8) = 24\\text{ detik}$$ (Opsi D)."
        },
        {
          "id": "sd5-b2-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Ibu memiliki 30 kue bolu dan 45 kue sus. Kue tersebut akan dimasukkan ke dalam beberapa piring sama banyak. Berapa piring paling banyak yang dibutuhkan ibu?",
          "options": [
            {
              "key": "A",
              "text": "10 piring"
            },
            {
              "key": "B",
              "text": "15 piring"
            },
            {
              "key": "C",
              "text": "5 piring"
            },
            {
              "key": "D",
              "text": "9 piring"
            }
          ],
          "correctAnswer": "B",
          "hint": "Cari FPB dari 30 dan 45.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\text{FPB}(30, 45) = 15\\text{ piring}$$ (Opsi B)."
        },
        {
          "id": "sd5-b2-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Beni berenang setiap 4 hari sekali dan Danu berenang setiap 6 hari sekali di kolam yang sama. Jika mereka berenang bersama pada hari Senin, pada hari apa mereka akan berenang bersama lagi berikutnya?",
          "options": [
            {
              "key": "A",
              "text": "Jumat"
            },
            {
              "key": "B",
              "text": "Minggu"
            },
            {
              "key": "C",
              "text": "Senin"
            },
            {
              "key": "D",
              "text": "Sabtu"
            }
          ],
          "correctAnswer": "D",
          "hint": "KPK(4, 6) = 12 hari. Senin + 12 hari = Senin + 5 hari = Sabtu.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n1. KPK(4, 6) = 12 hari\\n2. 12 hari setelah Senin: Senin + 7 hari (Senin) + 5 hari = **Sabtu** (Opsi D)."
        },
        {
          "id": "sd5-b2-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Seorang guru memiliki 24 buku tulis dan 36 pulpen untuk dibagikan kepada siswanya sama rata. Berapakah banyak buku tulis yang diterima setiap siswa jika dibagikan ke siswa sebanyak-banyaknya?",
          "options": [
            {
              "key": "A",
              "text": "3 buku tulis"
            },
            {
              "key": "B",
              "text": "4 buku tulis"
            },
            {
              "key": "C",
              "text": "2 buku tulis"
            },
            {
              "key": "D",
              "text": "6 buku tulis"
            }
          ],
          "correctAnswer": "C",
          "hint": "Banyak siswa $= \\text{FPB}(24, 36) = 12$. Buku per siswa $= 24 : 12 = 2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$24 : \\text{FPB}(24, 36) = 24 : 12 = 2\\text{ buku tulis}$$ (Opsi C)."
        },
        {
          "id": "sd5-b2-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bilangan prima yang terletak di antara 20 dan 30 adalah...",
          "options": [
            {
              "key": "A",
              "text": "23 dan 29"
            },
            {
              "key": "B",
              "text": "21 dan 27"
            },
            {
              "key": "C",
              "text": "23 dan 27"
            },
            {
              "key": "D",
              "text": "21 dan 29"
            }
          ],
          "correctAnswer": "A",
          "hint": "Bilangan prima hanya memiliki 2 faktor (1 dan dirinya sendiri).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nBilangan prima antara 20 dan 30 adalah **23 dan 29** (Opsi A)."
        },
        {
          "id": "sd5-b2-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "KPK dan FPB dari bilangan 36 dan 60 berturut-turut adalah...",
          "options": [
            {
              "key": "A",
              "text": "120 dan 12"
            },
            {
              "key": "B",
              "text": "180 dan 6"
            },
            {
              "key": "C",
              "text": "360 dan 12"
            },
            {
              "key": "D",
              "text": "180 dan 12"
            }
          ],
          "correctAnswer": "D",
          "hint": "$36 = 2^2 \\times 3^2$, $60 = 2^2 \\times 3 \\times 5$. KPK $= 180$, FPB $= 12$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nKPK = 180 dan FPB = 12 (Opsi D)."
        },
        {
          "id": "sd5-b2-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Tiga buah jam weker berdering bersamaan pada pukul 07.00. Weker pertama berdering setiap 15 menit, weker kedua setiap 20 menit, dan weker ketiga setiap 30 menit. Pada pukul berapakah ketiga weker akan berdering bersamaan lagi untuk kedua kalinya?",
          "options": [
            {
              "key": "A",
              "text": "08.30"
            },
            {
              "key": "B",
              "text": "09.00"
            },
            {
              "key": "C",
              "text": "07.45"
            },
            {
              "key": "D",
              "text": "08.00"
            }
          ],
          "correctAnswer": "D",
          "hint": "KPK(15, 20, 30) = 60 menit (1 jam). Pukul 07.00 + 1 jam = 08.00.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\text{KPK}(15, 20, 30) = 60\\text{ menit} = 1\\text{ jam} \\implies 07.00 + 1\\text{ jam} = 08.00$$ (Opsi D)."
        },
        {
          "id": "sd5-b2-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Pak Ahmad memiliki 48 bibit mangga, 72 bibit jeruk, dan 96 bibit rambutan. Bibit tersebut akan ditanam di beberapa petak kebun dengan jumlah bibit tiap jenis sama banyak. Berapa jumlah seluruh bibit di setiap petak kebun?",
          "options": [
            {
              "key": "A",
              "text": "8 bibit"
            },
            {
              "key": "B",
              "text": "9 bibit"
            },
            {
              "key": "C",
              "text": "10 bibit"
            },
            {
              "key": "D",
              "text": "12 bibit"
            }
          ],
          "correctAnswer": "B",
          "hint": "Banyak petak $= \\text{FPB}(48, 72, 96) = 24$. Total bibit per petak $= (48 + 72 + 96) : 24 = 216 : 24 = 9$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n1. FPB(48, 72, 96) = 24 petak\\n2. Tiap petak: $\\frac{48 + 72 + 96}{24} = \\frac{216}{24} = 9\\text{ bibit}$ (Opsi B)."
        },
        {
          "id": "sd5-b2-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dua bilangan memiliki FPB 14 dan KPK 84. Jika salah satu bilangan adalah 28, maka bilangan yang lainnya adalah...",
          "options": [
            {
              "key": "A",
              "text": "56"
            },
            {
              "key": "B",
              "text": "36"
            },
            {
              "key": "C",
              "text": "42"
            },
            {
              "key": "D",
              "text": "48"
            }
          ],
          "correctAnswer": "C",
          "hint": "Gunakan sifat: Bilangan $A \\times B = \\text{FPB} \\times \\text{KPK}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$B = \\frac{\\text{FPB} \\times \\text{KPK}}{A} = \\frac{14 \\times 84}{28} = \\frac{84}{2} = 42$$ (Opsi C)."
        },
        {
          "id": "sd5-b2-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Toko sembako menerima kiriman telur setiap 8 hari, minyak goreng setiap 12 hari, dan gula pasir setiap 16 hari. Pada tanggal 1 Maret mereka menerima ketiga barang bersamaan. Pada tanggal berapa mereka akan menerima ketiga barang bersamaan lagi?",
          "options": [
            {
              "key": "A",
              "text": "25 April"
            },
            {
              "key": "B",
              "text": "18 April"
            },
            {
              "key": "C",
              "text": "1 Mei"
            },
            {
              "key": "D",
              "text": "24 April"
            }
          ],
          "correctAnswer": "B",
          "hint": "KPK(8, 12, 16) = 48 hari. Maret ada 31 hari. Sisa hari Maret: $31 - 1 = 30$ hari. April: $48 - 30 = 18$ April.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n1. KPK(8, 12, 16) = 48 hari\\n2. Tanggal: 1 Maret + 48 hari = 18 April (Opsi B)."
        },
        {
          "id": "sd5-b2-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Ibu membuat 54 kue lemper, 72 kue lapis, dan 90 kue pastel untuk disajikan dalam beberapa piring. Berapa selisih banyaknya kue pastel dan kue lemper pada masing-masing piring?",
          "options": [
            {
              "key": "A",
              "text": "2 buah"
            },
            {
              "key": "B",
              "text": "3 buah"
            },
            {
              "key": "C",
              "text": "1 buah"
            },
            {
              "key": "D",
              "text": "4 buah"
            }
          ],
          "correctAnswer": "A",
          "hint": "Piring $= \\text{FPB}(54, 72, 90) = 18$. Pastel $= 90 / 18 = 5$. Lemper $= 54 / 18 = 3$. Selisih $= 5 - 3 = 2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n1. FPB(54, 72, 90) = 18 piring\\n2. Pastel per piring: $90 : 18 = 5$\\n3. Lemper per piring: $54 : 18 = 3$\\n4. Selisih $= 5 - 3 = 2\\text{ buah}$ (Opsi A)."
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
              "text": "$\\frac{11}{5}$"
            },
            {
              "key": "B",
              "text": "$\\frac{6}{5}$"
            },
            {
              "key": "C",
              "text": "$\\frac{13}{5}$"
            },
            {
              "key": "D",
              "text": "$\\frac{15}{5}$"
            }
          ],
          "correctAnswer": "C",
          "hint": "Kalikan bilangan bulat dengan penyebut, lalu tambahkan pembilang: $(2 \\times 5) + 3 = 13$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$2\\frac{3}{5} = \\frac{(2 \\times 5) + 3}{5} = \\frac{10 + 3}{5} = \\frac{13}{5}$$\nBentuk pecahan biasanya adalah **$\\frac{13}{5}$** (Opsi C)."
        },
        {
          "id": "sd5-b3-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil dari $4 \\times \\frac{2}{3}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\frac{8}{12}$"
            },
            {
              "key": "B",
              "text": "$\\frac{6}{3}$"
            },
            {
              "key": "C",
              "text": "$\\frac{2}{12}$"
            },
            {
              "key": "D",
              "text": "$\\frac{8}{3}$ atau $2\\frac{2}{3}$"
            }
          ],
          "correctAnswer": "D",
          "hint": "Kalikan 4 dengan pembilang 2, penyebutnya tetap 3.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$4 \\times \\frac{2}{3} = \\frac{4 \\times 2}{3} = \\frac{8}{3} = 2\\frac{2}{3}$$\nHasilnya adalah **$2\\frac{2}{3}$** (Opsi D)."
        },
        {
          "id": "sd5-b3-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Siti memiliki pita sepanjang $4\\frac{1}{2}$ meter. Pita tersebut dipotong sepanjang $1\\frac{3}{4}$ meter untuk menghias kado dan $\\frac{1}{2}$ meter untuk kerajinan tangan. Sisa panjang pita Siti sekarang adalah...",
          "options": [
            {
              "key": "A",
              "text": "$2\\frac{1}{2}$ meter"
            },
            {
              "key": "B",
              "text": "$2$ meter"
            },
            {
              "key": "C",
              "text": "$2\\frac{1}{4}$ meter"
            },
            {
              "key": "D",
              "text": "$1\\frac{3}{4}$ meter"
            }
          ],
          "correctAnswer": "C",
          "hint": "Kurangkan: $4\\frac{1}{2} - \\frac{1}{2} = 4$, lalu $4 - 1\\frac{3}{4} = 2\\frac{1}{4}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Selesaikan pengurangan mudah: $4\\frac{1}{2} - \\frac{1}{2} = 4\\text{ meter}$.\n2. Kurangkan potongan kedua: $4 - 1\\frac{3}{4} = 2\\frac{1}{4}\\text{ meter}$.\nSisa panjang pita adalah **$2\\frac{1}{4}$ meter** (Opsi C)."
        },
        {
          "id": "sd5-b3-5",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Bentuk persen dari pecahan $\\frac{3}{4}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "75%"
            },
            {
              "key": "B",
              "text": "50%"
            },
            {
              "key": "C",
              "text": "25%"
            },
            {
              "key": "D",
              "text": "80%"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kalikan dengan 100%: $\\frac{3}{4} \\times 100\\% = 75\\%$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\frac{3}{4} \\times 100\\% = 75\\%$$ (Opsi A)."
        },
        {
          "id": "sd5-b3-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil penjumlahan $\\frac{2}{3} + \\frac{1}{4}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{3}{7}"
            },
            {
              "key": "B",
              "text": "\\frac{5}{12}"
            },
            {
              "key": "C",
              "text": "\\frac{11}{12}"
            },
            {
              "key": "D",
              "text": "\\frac{7}{12}"
            }
          ],
          "correctAnswer": "C",
          "hint": "Samakan penyebut dengan KPK dari 3 dan 4 yaitu 12: $\\frac{8}{12} + \\frac{3}{12}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\frac{8 + 3}{12} = \\frac{11}{12}$$ (Opsi C)."
        },
        {
          "id": "sd5-b3-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil pengurangan $2\\frac{1}{2} - 1\\frac{1}{3}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "1\\frac{1}{6}"
            },
            {
              "key": "B",
              "text": "1\\frac{1}{5}"
            },
            {
              "key": "C",
              "text": "1\\frac{2}{3}"
            },
            {
              "key": "D",
              "text": "\\frac{5}{6}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Ubah ke pecahan biasa: $\\frac{5}{2} - \\frac{4}{3} = \\frac{15 - 8}{6} = \\frac{7}{6} = 1\\frac{1}{6}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$2\\frac{1}{2} - 1\\frac{1}{3} = \\frac{15 - 8}{6} = 1\\frac{1}{6}$$ (Opsi A)."
        },
        {
          "id": "sd5-b3-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil perkalian $\\frac{3}{5} \\times \\frac{10}{9}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{1}{2}"
            },
            {
              "key": "B",
              "text": "\\frac{3}{4}"
            },
            {
              "key": "C",
              "text": "\\frac{5}{6}"
            },
            {
              "key": "D",
              "text": "\\frac{2}{3}"
            }
          ],
          "correctAnswer": "D",
          "hint": "Sederhanakan silang: $3$ dengan $9$, $10$ dengan $5$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\frac{3 \\times 10}{5 \\times 9} = \\frac{30}{45} = \\frac{2}{3}$$ (Opsi D)."
        },
        {
          "id": "sd5-b3-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil pembagian $\\frac{4}{7} : \\frac{2}{21}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "4"
            },
            {
              "key": "B",
              "text": "6"
            },
            {
              "key": "C",
              "text": "8"
            },
            {
              "key": "D",
              "text": "3"
            }
          ],
          "correctAnswer": "B",
          "hint": "Ubah menjadi perkalian dengan kebalikan pecahan kedua: $\\frac{4}{7} \\times \\frac{21}{2}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\frac{4}{7} \\times \\frac{21}{2} = 2 \\times 3 = 6$$ (Opsi B)."
        },
        {
          "id": "sd5-b3-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bentuk pecahan desimal dari $\\frac{5}{8}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "0,58"
            },
            {
              "key": "B",
              "text": "0,625"
            },
            {
              "key": "C",
              "text": "0,65"
            },
            {
              "key": "D",
              "text": "0,375"
            }
          ],
          "correctAnswer": "B",
          "hint": "Bagi 5 dengan 8 secara bersusun: $5 : 8 = 0{,}625$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\frac{5}{8} = 0{,}625$$ (Opsi B)."
        },
        {
          "id": "sd5-b3-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Ibu membeli gula pasir seberat $3\\frac{1}{4}\\text{ kg}$. Ibu menggunakan $1\\frac{1}{2}\\text{ kg}$ untuk membuat sirup. Sisa gula pasir ibu adalah...",
          "options": [
            {
              "key": "A",
              "text": "1\\frac{1}{4}\\text{ kg}"
            },
            {
              "key": "B",
              "text": "2\\frac{1}{4}\\text{ kg}"
            },
            {
              "key": "C",
              "text": "1\\frac{3}{4}\\text{ kg}"
            },
            {
              "key": "D",
              "text": "1\\frac{1}{2}\\text{ kg}"
            }
          ],
          "correctAnswer": "C",
          "hint": "$3\\frac{1}{4} - 1\\frac{2}{4} = 2\\frac{5}{4} - 1\\frac{2}{4} = 1\\frac{3}{4}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$3\\frac{1}{4} - 1\\frac{2}{4} = 1\\frac{3}{4}\\text{ kg}$$ (Opsi C)."
        },
        {
          "id": "sd5-b3-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Pak Doni memiliki sebidang tanah seluas 600 meter persegi. $\\frac{2}{5}$ bagian ditanami jagung dan sisanya ditanami kedelai. Luas tanah yang ditanami kedelai adalah...",
          "options": [
            {
              "key": "A",
              "text": "240 m^2"
            },
            {
              "key": "B",
              "text": "300 m^2"
            },
            {
              "key": "C",
              "text": "400 m^2"
            },
            {
              "key": "D",
              "text": "360 m^2"
            }
          ],
          "correctAnswer": "D",
          "hint": "Bagian kedelai $= 1 - 2/5 = 3/5$. Luas $= \\frac{3}{5} \\times 600 = 360$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\frac{3}{5} \\times 600 = 360\\text{ m}^2$$ (Opsi D)."
        },
        {
          "id": "sd5-b3-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil dari operasi desimal $4{,}85 + 2{,}6 - 1{,}32$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "6,23"
            },
            {
              "key": "B",
              "text": "6,13"
            },
            {
              "key": "C",
              "text": "5,93"
            },
            {
              "key": "D",
              "text": "6,03"
            }
          ],
          "correctAnswer": "B",
          "hint": "Lakukan penjumlahan desimal: $7{,}45 - 1{,}32 = 6{,}13$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$4{,}85 + 2{,}60 - 1{,}32 = 6{,}13$$ (Opsi B)."
        },
        {
          "id": "sd5-b3-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah ember berisi $15\\frac{3}{4}$ liter air. Air tersebut akan dituangkan ke dalam beberapa botol yang masing-masing berkapasitas $\\frac{3}{4}$ liter. Berapa botol yang dibutuhkan?",
          "options": [
            {
              "key": "A",
              "text": "21 botol"
            },
            {
              "key": "B",
              "text": "20 botol"
            },
            {
              "key": "C",
              "text": "18 botol"
            },
            {
              "key": "D",
              "text": "24 botol"
            }
          ],
          "correctAnswer": "A",
          "hint": "Bagi $15\\frac{3}{4} = \\frac{63}{4}$ dengan $\\frac{3}{4}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\frac{63}{4} : \\frac{3}{4} = \\frac{63}{3} = 21\\text{ botol}$$ (Opsi A)."
        },
        {
          "id": "sd5-b3-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Urutan pecahan $\\frac{1}{2}, \\frac{3}{4}, 0{,}6, 45\\%$ dari yang terkecil adalah...",
          "options": [
            {
              "key": "A",
              "text": "1/2, 45%, 0,6, 3/4"
            },
            {
              "key": "B",
              "text": "45%, 0,6, 1/2, 3/4"
            },
            {
              "key": "C",
              "text": "1/2, 3/4, 45%, 0,6"
            },
            {
              "key": "D",
              "text": "45%, 1/2, 0,6, 3/4"
            }
          ],
          "correctAnswer": "D",
          "hint": "Ubah ke bentuk desimal: $45\\% = 0{,}45$, $1/2 = 0{,}50$, $0{,}60$, $3/4 = 0{,}75$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n0,45 < 0,50 < 0,60 < 0,75 $\\implies$ **45%, 1/2, 0,6, 3/4** (Opsi D)."
        },
        {
          "id": "sd5-b3-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah bak mandi mula-mula terisi $\\frac{1}{3}$ bagian. Setelah ditambah 40 liter air, bak tersebut terisi $\\frac{5}{6}$ bagian. Kapasitas penuh bak mandi tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "90 liter"
            },
            {
              "key": "B",
              "text": "75 liter"
            },
            {
              "key": "C",
              "text": "80 liter"
            },
            {
              "key": "D",
              "text": "100 liter"
            }
          ],
          "correctAnswer": "C",
          "hint": "Selisih bagian: $\\frac{5}{6} - \\frac{2}{6} = \\frac{3}{6} = \\frac{1}{2}$. Kapasitas $= 40 : \\frac{1}{2} = 80$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\text{Kapasitas} = 40 : \\left(\\frac{5}{6} - \\frac{1}{3}\\right) = 40 : \\frac{1}{2} = 80\\text{ liter}$$ (Opsi C)."
        },
        {
          "id": "sd5-b3-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Harga sebuah baju adalah Rp120.000,00. Toko memberikan diskon $25\\%$. Berapakah harga baju tersebut setelah didiskon?",
          "options": [
            {
              "key": "A",
              "text": "Rp95.000,00"
            },
            {
              "key": "B",
              "text": "Rp90.000,00"
            },
            {
              "key": "C",
              "text": "Rp100.000,00"
            },
            {
              "key": "D",
              "text": "Rp85.000,00"
            }
          ],
          "correctAnswer": "B",
          "hint": "Diskon $= 25\\% \\times 120.000 = 30.000$. Harga bayar $= 120.000 - 30.000$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$120.000 - 30.000 = \\text{Rp}90.000,00$$ (Opsi B)."
        },
        {
          "id": "sd5-b3-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Rani mempunyai pita sepanjang $5\\frac{1}{2}\\text{ m}$. Diberikan kepada adiknya $1\\frac{3}{4}\\text{ m}$, lalu ia membeli lagi pita sepanjang $2\\frac{1}{4}\\text{ m}$. Panjang pita Rani sekarang adalah...",
          "options": [
            {
              "key": "A",
              "text": "5,5 m"
            },
            {
              "key": "B",
              "text": "6 m"
            },
            {
              "key": "C",
              "text": "6,25 m"
            },
            {
              "key": "D",
              "text": "5,75 m"
            }
          ],
          "correctAnswer": "B",
          "hint": "$5\\frac{2}{4} - 1\\frac{3}{4} + 2\\frac{1}{4} = 3\\frac{3}{4} + 2\\frac{1}{4} = 6$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$5\\frac{1}{2} - 1\\frac{3}{4} + 2\\frac{1}{4} = 6\\text{ meter}$$ (Opsi B)."
        },
        {
          "id": "sd5-b3-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Nilai dari $\\left(1 - \\frac{1}{2}\\right) \\times \\left(1 - \\frac{1}{3}\\right) \\times \\left(1 - \\frac{1}{4}\\right) \\times \\left(1 - \\frac{1}{5}\\right)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{1}{4}"
            },
            {
              "key": "B",
              "text": "\\frac{2}{5}"
            },
            {
              "key": "C",
              "text": "\\frac{1}{10}"
            },
            {
              "key": "D",
              "text": "\\frac{1}{5}"
            }
          ],
          "correctAnswer": "D",
          "hint": "Sederhanakan setiap kurung: $\\frac{1}{2} \\times \\frac{2}{3} \\times \\frac{3}{4} \\times \\frac{4}{5} = \\frac{1}{5}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\frac{1}{2} \\times \\frac{2}{3} \\times \\frac{3}{4} \\times \\frac{4}{5} = \\frac{1}{5}$$ (Opsi D)."
        },
        {
          "id": "sd5-b3-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Perbandingan tabungan Andi dan Budi adalah 3 : 5. Jika jumlah tabungan mereka berdua adalah Rp400.000,00, selisih tabungan mereka adalah...",
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
              "text": "Rp150.000,00"
            }
          ],
          "correctAnswer": "A",
          "hint": "Selisih $= \\frac{5 - 3}{3 + 5} \\times 400.000 = \\frac{2}{8} \\times 400.000 = 100.000$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\frac{2}{8} \\times 400.000 = \\text{Rp}100.000,00$$ (Opsi A)."
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
              "text": "81 cm"
            },
            {
              "key": "B",
              "text": "36 cm"
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
          "correctAnswer": "B",
          "hint": "Kalikan panjang sisi dengan 4: $K = 4 \\times 9$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$K = 4 \\times 9 = 36\\text{ cm}$$\nKeliling persegi adalah **36 cm** (Opsi B)."
        },
        {
          "id": "sd5-b4-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Keliling sebuah persegi panjang dengan panjang 14 cm dan lebar 6 cm adalah...",
          "options": [
            {
              "key": "A",
              "text": "84 cm"
            },
            {
              "key": "B",
              "text": "20 cm"
            },
            {
              "key": "C",
              "text": "40 cm"
            },
            {
              "key": "D",
              "text": "48 cm"
            }
          ],
          "correctAnswer": "C",
          "hint": "Gunakan rumus $K = 2 \\times (p + l) = 2 \\times (14 + 6)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$K = 2 \\times (14 + 6) = 2 \\times 20 = 40\\text{ cm}$$\nKelilingnya adalah **40 cm** (Opsi C)."
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
              "text": "15 tiang"
            },
            {
              "key": "B",
              "text": "14 tiang"
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
          "correctAnswer": "B",
          "hint": "Hitung keliling kebun terlebih dahulu: $K = 2 \\times (20 + 15) = 70\\text{ m}$, lalu bagi dengan jarak antar-tiang (5 m).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Keliling kebun: $K = 2 \\times (20 + 15) = 2 \\times 35 = 70\\text{ meter}$.\n2. Banyak tiang yang dibutuhkan:\n$$\\text{Banyak tiang} = \\frac{70}{5} = 14\\text{ tiang}$$\nBanyak tiang yang dibutuhkan adalah **14 tiang** (Opsi B)."
        },
        {
          "id": "sd5-b4-5",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Keliling sebuah persegi yang memiliki panjang sisi 12 cm adalah...",
          "options": [
            {
              "key": "A",
              "text": "36 cm"
            },
            {
              "key": "B",
              "text": "48 cm"
            },
            {
              "key": "C",
              "text": "24 cm"
            },
            {
              "key": "D",
              "text": "144 cm"
            }
          ],
          "correctAnswer": "B",
          "hint": "Keliling persegi: $K = 4 \\times s$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$K = 4 \\times 12 = 48\\text{ cm}$$ (Opsi B)."
        },
        {
          "id": "sd5-b4-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Keliling persegi panjang berukuran panjang 18 cm dan lebar 10 cm adalah...",
          "options": [
            {
              "key": "A",
              "text": "48 cm"
            },
            {
              "key": "B",
              "text": "54 cm"
            },
            {
              "key": "C",
              "text": "180 cm"
            },
            {
              "key": "D",
              "text": "56 cm"
            }
          ],
          "correctAnswer": "D",
          "hint": "$K = 2(p + l) = 2(18 + 10) = 56$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$K = 2(18 + 10) = 2 \\times 28 = 56\\text{ cm}$$ (Opsi D)."
        },
        {
          "id": "sd5-b4-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah segitiga sama sisi memiliki keliling 45 cm. Panjang masing-masing sisinya adalah...",
          "options": [
            {
              "key": "A",
              "text": "12 cm"
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
              "text": "10 cm"
            }
          ],
          "correctAnswer": "B",
          "hint": "Sisi segitiga sama sisi: $s = K / 3 = 45 / 3 = 15$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$s = \\frac{45}{3} = 15\\text{ cm}$$ (Opsi B)."
        },
        {
          "id": "sd5-b4-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah jajar genjang memiliki panjang sisi sejajar 14 cm dan 9 cm. Keliling jajar genjang tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "44 cm"
            },
            {
              "key": "B",
              "text": "48 cm"
            },
            {
              "key": "C",
              "text": "46 cm"
            },
            {
              "key": "D",
              "text": "50 cm"
            }
          ],
          "correctAnswer": "C",
          "hint": "$K = 2(a + b) = 2(14 + 9) = 46$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$K = 2(14 + 9) = 46\\text{ cm}$$ (Opsi C)."
        },
        {
          "id": "sd5-b4-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Keliling sebuah belah ketupat adalah 68 cm. Panjang sisi belah ketupat tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "16 cm"
            },
            {
              "key": "B",
              "text": "18 cm"
            },
            {
              "key": "C",
              "text": "15 cm"
            },
            {
              "key": "D",
              "text": "17 cm"
            }
          ],
          "correctAnswer": "D",
          "hint": "Sisi belah ketupat: $s = K / 4 = 68 / 4 = 17$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$s = \\frac{68}{4} = 17\\text{ cm}$$ (Opsi D)."
        },
        {
          "id": "sd5-b4-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Layang-layang memiliki panjang sisi yang berdekatan masing-masing 12 cm dan 18 cm. Keliling layang-layang tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "54 cm"
            },
            {
              "key": "B",
              "text": "64 cm"
            },
            {
              "key": "C",
              "text": "60 cm"
            },
            {
              "key": "D",
              "text": "72 cm"
            }
          ],
          "correctAnswer": "C",
          "hint": "$K = 2(12 + 18) = 60$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$K = 2(12 + 18) = 60\\text{ cm}$$ (Opsi C)."
        },
        {
          "id": "sd5-b4-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Pak Budi memagari kebunnya yang berbentuk persegi panjang berukuran $25\\text{ m} \\times 15\\text{ m}$. Jika biaya pembuatan pagar Rp50.000,00 per meter, total biaya yang dibutuhkan adalah...",
          "options": [
            {
              "key": "A",
              "text": "Rp3.500.000,00"
            },
            {
              "key": "B",
              "text": "Rp4.500.000,00"
            },
            {
              "key": "C",
              "text": "Rp3.000.000,00"
            },
            {
              "key": "D",
              "text": "Rp4.000.000,00"
            }
          ],
          "correctAnswer": "D",
          "hint": "Keliling $= 2(25 + 15) = 80$ m. Biaya $= 80 \\times 50.000$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$80 \\times 50.000 = \\text{Rp}4.000.000,00$$ (Opsi D)."
        },
        {
          "id": "sd5-b4-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Keliling trapesium sama kaki dengan panjang sisi sejajar 10 cm dan 20 cm, serta panjang sisi miring 8 cm adalah...",
          "options": [
            {
              "key": "A",
              "text": "46 cm"
            },
            {
              "key": "B",
              "text": "38 cm"
            },
            {
              "key": "C",
              "text": "44 cm"
            },
            {
              "key": "D",
              "text": "48 cm"
            }
          ],
          "correctAnswer": "A",
          "hint": "Keliling $= 10 + 20 + 8 + 8 = 46$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$K = 10 + 20 + 2(8) = 46\\text{ cm}$$ (Opsi A)."
        },
        {
          "id": "sd5-b4-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah lapangan berbentuk persegi memiliki keliling 160 meter. Danu berlari mengelilingi lapangan tersebut sebanyak 3 putaran. Jarak yang ditempuh Danu adalah...",
          "options": [
            {
              "key": "A",
              "text": "320 meter"
            },
            {
              "key": "B",
              "text": "640 meter"
            },
            {
              "key": "C",
              "text": "400 meter"
            },
            {
              "key": "D",
              "text": "480 meter"
            }
          ],
          "correctAnswer": "D",
          "hint": "Jarak $= 3 \\times 160 = 480$ meter.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$3 \\times 160 = 480\\text{ meter}$$ (Opsi D)."
        },
        {
          "id": "sd5-b4-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Keliling segitiga siku-siku dengan panjang sisi siku-siku 6 cm dan 8 cm adalah...",
          "options": [
            {
              "key": "A",
              "text": "24 cm"
            },
            {
              "key": "B",
              "text": "20 cm"
            },
            {
              "key": "C",
              "text": "26 cm"
            },
            {
              "key": "D",
              "text": "28 cm"
            }
          ],
          "correctAnswer": "A",
          "hint": "Hipotenusa $= \\sqrt{6^2 + 8^2} = 10$ cm. Keliling $= 6 + 8 + 10 = 24$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$K = 6 + 8 + 10 = 24\\text{ cm}$$ (Opsi A)."
        },
        {
          "id": "sd5-b4-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah persegi panjang memiliki keliling 44 cm. Jika lebarnya 8 cm, maka panjang persegi panjang tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "12 cm"
            },
            {
              "key": "B",
              "text": "14 cm"
            },
            {
              "key": "C",
              "text": "15 cm"
            },
            {
              "key": "D",
              "text": "16 cm"
            }
          ],
          "correctAnswer": "B",
          "hint": "$p = (K / 2) - l = 22 - 8 = 14$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$p = \\frac{44}{2} - 8 = 22 - 8 = 14\\text{ cm}$$ (Opsi B)."
        },
        {
          "id": "sd5-b4-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dua buah persegi memiliki perbandingan sisi 2 : 3. Jika keliling persegi yang lebih kecil adalah 32 cm, keliling persegi yang lebih besar adalah...",
          "options": [
            {
              "key": "A",
              "text": "48 cm"
            },
            {
              "key": "B",
              "text": "40 cm"
            },
            {
              "key": "C",
              "text": "56 cm"
            },
            {
              "key": "D",
              "text": "64 cm"
            }
          ],
          "correctAnswer": "A",
          "hint": "Sisi kecil $= 32 / 4 = 8$ cm. Sisi besar $= \\frac{3}{2} \\times 8 = 12$ cm. Keliling $= 4 \\times 12 = 48$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$K_2 = \\frac{3}{2} \\times 32 = 48\\text{ cm}$$ (Opsi A)."
        },
        {
          "id": "sd5-b4-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah taman berbentuk persegi panjang memiliki panjang $(2x + 3)$ meter dan lebar $(x + 2)$ meter. Jika keliling taman adalah 46 meter, panjang taman tersebut sebenarnya adalah...",
          "options": [
            {
              "key": "A",
              "text": "12 meter"
            },
            {
              "key": "B",
              "text": "14 meter"
            },
            {
              "key": "C",
              "text": "15 meter"
            },
            {
              "key": "D",
              "text": "16 meter"
            }
          ],
          "correctAnswer": "C",
          "hint": "$2(3x + 5) = 46 \\implies 3x + 5 = 23 \\implies 3x = 18 \\implies x = 6$. Panjang $= 2(6) + 3 = 15$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$p = 2(6) + 3 = 15\\text{ meter}$$ (Opsi C)."
        },
        {
          "id": "sd5-b4-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Di sekeliling kolam berbentuk persegi panjang dengan ukuran $16\\text{ m} \\times 12\\text{ m}$ dibuat jalan setapak selebar 1 meter. Keliling luar jalan setapak tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "60 meter"
            },
            {
              "key": "B",
              "text": "56 meter"
            },
            {
              "key": "C",
              "text": "68 meter"
            },
            {
              "key": "D",
              "text": "64 meter"
            }
          ],
          "correctAnswer": "D",
          "hint": "Panjang luar $= 16 + 2 = 18$ m, lebar luar $= 12 + 2 = 14$ m. $K = 2(18 + 14) = 64$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$K = 2(18 + 14) = 64\\text{ meter}$$ (Opsi D)."
        },
        {
          "id": "sd5-b4-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah kawat sepanjang 60 cm akan dibentuk menjadi segitiga sama kaki. Jika panjang alas segitiga 16 cm, panjang masing-masing sisi kakinya adalah...",
          "options": [
            {
              "key": "A",
              "text": "22 cm"
            },
            {
              "key": "B",
              "text": "20 cm"
            },
            {
              "key": "C",
              "text": "24 cm"
            },
            {
              "key": "D",
              "text": "18 cm"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kaki segitiga $= (60 - 16) / 2 = 44 / 2 = 22$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\text{kaki} = \\frac{60 - 16}{2} = 22\\text{ cm}$$ (Opsi A)."
        },
        {
          "id": "sd5-b4-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Rangka layang-layang dibuat dari kawat. Jika panjang sisi-sisi layang-layang adalah 15 cm dan 25 cm, serta terdapat dua bilah bambu penyangga sepanjang 30 cm dan 40 cm, total panjang kawat dan bilah bambu yang dibutuhkan adalah...",
          "options": [
            {
              "key": "A",
              "text": "140 cm"
            },
            {
              "key": "B",
              "text": "160 cm"
            },
            {
              "key": "C",
              "text": "150 cm"
            },
            {
              "key": "D",
              "text": "130 cm"
            }
          ],
          "correctAnswer": "C",
          "hint": "Keliling $= 2(15 + 25) = 80$ cm. Total $= 80 + 30 + 40 = 150$ cm.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$80 + 30 + 40 = 150\\text{ cm}$$ (Opsi C)."
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
              "text": "$80\\text{ cm}^2$"
            },
            {
              "key": "B",
              "text": "$18\\text{ cm}^2$"
            },
            {
              "key": "C",
              "text": "$36\\text{ cm}^2$"
            },
            {
              "key": "D",
              "text": "$40\\text{ cm}^2$"
            }
          ],
          "correctAnswer": "D",
          "hint": "Gunakan rumus luas segitiga: $L = \\frac{1}{2} \\times a \\times t = \\frac{1}{2} \\times 10 \\times 8$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$L = \\frac{1}{2} \\times 10 \\times 8 = 5 \\times 8 = 40\\text{ cm}^2$$\nLuas segitiga adalah **$40\\text{ cm}^2$** (Opsi D)."
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
              "text": "$54\\text{ cm}^2$"
            },
            {
              "key": "B",
              "text": "$108\\text{ cm}^2$"
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
          "correctAnswer": "B",
          "hint": "Rumus luas jajar genjang adalah $L = a \\times t = 12 \\times 9$. (Jangan dibagi 2!)",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$L = 12 \\times 9 = 108\\text{ cm}^2$$\nLuas jajar genjang adalah **$108\\text{ cm}^2$** (Opsi B)."
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
        },
        {
          "id": "sd5-b5-5",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Luas persegi dengan panjang sisi 9 cm adalah...",
          "options": [
            {
              "key": "A",
              "text": "81 cm^2"
            },
            {
              "key": "B",
              "text": "72 cm^2"
            },
            {
              "key": "C",
              "text": "36 cm^2"
            },
            {
              "key": "D",
              "text": "90 cm^2"
            }
          ],
          "correctAnswer": "A",
          "hint": "Luas persegi: $L = s \\times s = 9 \\times 9$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$L = 9 \\times 9 = 81\\text{ cm}^2$$ (Opsi A)."
        },
        {
          "id": "sd5-b5-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Luas daerah persegi panjang dengan panjang 15 cm dan lebar 8 cm adalah...",
          "options": [
            {
              "key": "A",
              "text": "110 cm^2"
            },
            {
              "key": "B",
              "text": "46 cm^2"
            },
            {
              "key": "C",
              "text": "120 cm^2"
            },
            {
              "key": "D",
              "text": "125 cm^2"
            }
          ],
          "correctAnswer": "C",
          "hint": "$L = p \\times l = 15 \\times 8 = 120$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$L = 15 \\times 8 = 120\\text{ cm}^2$$ (Opsi C)."
        },
        {
          "id": "sd5-b5-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Luas segitiga dengan panjang alas 14 cm dan tinggi 10 cm adalah...",
          "options": [
            {
              "key": "A",
              "text": "140 cm^2"
            },
            {
              "key": "B",
              "text": "70 cm^2"
            },
            {
              "key": "C",
              "text": "80 cm^2"
            },
            {
              "key": "D",
              "text": "60 cm^2"
            }
          ],
          "correctAnswer": "B",
          "hint": "Luas segitiga: $L = \\frac{1}{2} \\times a \\times t$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$L = \\frac{1}{2} \\times 14 \\times 10 = 70\\text{ cm}^2$$ (Opsi B)."
        },
        {
          "id": "sd5-b5-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah jajar genjang memiliki alas 18 cm dan tinggi 7 cm. Luas jajar genjang tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "116 cm^2"
            },
            {
              "key": "B",
              "text": "136 cm^2"
            },
            {
              "key": "C",
              "text": "126 cm^2"
            },
            {
              "key": "D",
              "text": "63 cm^2"
            }
          ],
          "correctAnswer": "C",
          "hint": "Luas jajar genjang: $L = a \\times t = 18 \\times 7$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$L = 18 \\times 7 = 126\\text{ cm}^2$$ (Opsi C)."
        },
        {
          "id": "sd5-b5-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Luas belah ketupat yang memiliki panjang diagonal 16 cm dan 12 cm adalah...",
          "options": [
            {
              "key": "A",
              "text": "192 cm^2"
            },
            {
              "key": "B",
              "text": "96 cm^2"
            },
            {
              "key": "C",
              "text": "84 cm^2"
            },
            {
              "key": "D",
              "text": "108 cm^2"
            }
          ],
          "correctAnswer": "B",
          "hint": "Luas belah ketupat: $L = \\frac{1}{2} \\times d_1 \\times d_2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$L = \\frac{1}{2} \\times 16 \\times 12 = 96\\text{ cm}^2$$ (Opsi B)."
        },
        {
          "id": "sd5-b5-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah layang-layang memiliki panjang diagonal 20 cm dan 15 cm. Luas layang-layang tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "300 cm^2"
            },
            {
              "key": "B",
              "text": "150 cm^2"
            },
            {
              "key": "C",
              "text": "175 cm^2"
            },
            {
              "key": "D",
              "text": "125 cm^2"
            }
          ],
          "correctAnswer": "B",
          "hint": "$L = \\frac{1}{2} \\times 20 \\times 15 = 150$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$L = \\frac{1}{2} \\times 20 \\times 15 = 150\\text{ cm}^2$$ (Opsi B)."
        },
        {
          "id": "sd5-b5-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Luas trapesium dengan panjang sisi sejajar 12 cm dan 18 cm serta tinggi 8 cm adalah...",
          "options": [
            {
              "key": "A",
              "text": "240 cm^2"
            },
            {
              "key": "B",
              "text": "108 cm^2"
            },
            {
              "key": "C",
              "text": "120 cm^2"
            },
            {
              "key": "D",
              "text": "130 cm^2"
            }
          ],
          "correctAnswer": "C",
          "hint": "$L = \\frac{a + b}{2} \\times t = \\frac{30}{2} \\times 8 = 120$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$L = \\frac{12 + 18}{2} \\times 8 = 15 \\times 8 = 120\\text{ cm}^2$$ (Opsi C)."
        },
        {
          "id": "sd5-b5-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Luas sebuah persegi adalah $144\\text{ cm}^2$. Keliling persegi tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "48 cm"
            },
            {
              "key": "B",
              "text": "36 cm"
            },
            {
              "key": "C",
              "text": "52 cm"
            },
            {
              "key": "D",
              "text": "44 cm"
            }
          ],
          "correctAnswer": "A",
          "hint": "Sisi $= \\sqrt{144} = 12$ cm. Keliling $= 4 \\times 12 = 48$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$K = 4 \\times \\sqrt{144} = 4 \\times 12 = 48\\text{ cm}$$ (Opsi A)."
        },
        {
          "id": "sd5-b5-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Lantai sebuah ruangan berukuran $6\\text{ m} \\times 4\\text{ m}$ akan dipasangi ubin berukuran $40\\text{ cm} \\times 40\\text{ cm}$. Banyak ubin yang dibutuhkan adalah...",
          "options": [
            {
              "key": "A",
              "text": "120 ubin"
            },
            {
              "key": "B",
              "text": "200 ubin"
            },
            {
              "key": "C",
              "text": "160 ubin"
            },
            {
              "key": "D",
              "text": "150 ubin"
            }
          ],
          "correctAnswer": "D",
          "hint": "Luas lantai $= 240.000\\text{ cm}^2$. Luas ubin $= 1.600\\text{ cm}^2$. Banyak ubin $= 240.000 / 1.600 = 150$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\text{Banyak ubin} = \\frac{600 \\times 400}{40 \\times 40} = 15 \\times 10 = 150\\text{ ubin}$$ (Opsi D)."
        },
        {
          "id": "sd5-b5-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah segitiga memiliki luas $84\\text{ cm}^2$. Jika tingginya 12 cm, maka panjang alas segitiga tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "14 cm"
            },
            {
              "key": "B",
              "text": "12 cm"
            },
            {
              "key": "C",
              "text": "16 cm"
            },
            {
              "key": "D",
              "text": "10 cm"
            }
          ],
          "correctAnswer": "A",
          "hint": "Alas $= \\frac{2 \\times L}{t} = \\frac{168}{12} = 14$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$a = \\frac{2 \\times 84}{12} = 14\\text{ cm}$$ (Opsi A)."
        },
        {
          "id": "sd5-b5-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Kebun sayur Pak Harun berbentuk jajar genjang seluas $180\\text{ m}^2$. Jika panjang alas kebun 15 meter, tinggi kebun tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "10 meter"
            },
            {
              "key": "B",
              "text": "14 meter"
            },
            {
              "key": "C",
              "text": "11 meter"
            },
            {
              "key": "D",
              "text": "12 meter"
            }
          ],
          "correctAnswer": "D",
          "hint": "Tinggi $= L / a = 180 / 15 = 12$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$t = \\frac{180}{15} = 12\\text{ meter}$$ (Opsi D)."
        },
        {
          "id": "sd5-b5-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah persegi panjang dan persegi memiliki keliling yang sama yaitu 40 cm. Jika lebar persegi panjang 8 cm, selisih luas kedua bangun datar tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "8 cm^2"
            },
            {
              "key": "B",
              "text": "6 cm^2"
            },
            {
              "key": "C",
              "text": "4 cm^2"
            },
            {
              "key": "D",
              "text": "10 cm^2"
            }
          ],
          "correctAnswer": "C",
          "hint": "Persegi: $s = 10 \\implies L = 100$. Persegi panjang: $p = 12 \\implies L = 96$. Selisih $= 100 - 96 = 4$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$100 - (12 \\times 8) = 100 - 96 = 4\\text{ cm}^2$$ (Opsi C)."
        },
        {
          "id": "sd5-b5-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Di tengah taman berbentuk persegi berukuran $14\\text{ m} \\times 14\\text{ m}$ dibuat kolam ikan berbentuk lingkaran dengan diameter 14 meter. Luas taman di luar kolam ikan adalah...",
          "options": [
            {
              "key": "A",
              "text": "56 m^2"
            },
            {
              "key": "B",
              "text": "38 m^2"
            },
            {
              "key": "C",
              "text": "48 m^2"
            },
            {
              "key": "D",
              "text": "42 m^2"
            }
          ],
          "correctAnswer": "D",
          "hint": "Luas persegi $= 196$. Luas lingkaran $= \\frac{22}{7} \\times 7^2 = 154$. Sisa $= 196 - 154 = 42$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$196 - 154 = 42\\text{ m}^2$$ (Opsi D)."
        },
        {
          "id": "sd5-b5-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah trapesium memiliki luas $150\\text{ cm}^2$ dan tinggi 10 cm. Jika perbandingan panjang kedua sisi sejajarnya adalah 2 : 3, panjang sisi sejajar yang lebih panjang adalah...",
          "options": [
            {
              "key": "A",
              "text": "12 cm"
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
              "text": "20 cm"
            }
          ],
          "correctAnswer": "C",
          "hint": "$a + b = \\frac{2 \\times 150}{10} = 30$. Sisi panjang $= \\frac{3}{5} \\times 30 = 18$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\frac{3}{5} \\times 30 = 18\\text{ cm}$$ (Opsi C)."
        },
        {
          "id": "sd5-b5-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Bangun datar gabungan terdiri atas persegi panjang berukuran $10\\text{ cm} \\times 6\\text{ cm}$ dan segitiga yang berimpit pada salah satu sisi 10 cm dengan tinggi segitiga 4 cm. Luas total bangun gabungan tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "90 cm^2"
            },
            {
              "key": "B",
              "text": "70 cm^2"
            },
            {
              "key": "C",
              "text": "85 cm^2"
            },
            {
              "key": "D",
              "text": "80 cm^2"
            }
          ],
          "correctAnswer": "D",
          "hint": "Luas persegi panjang $= 60$. Luas segitiga $= \\frac{1}{2} \\times 10 \\times 4 = 20$. Total $= 60 + 20 = 80$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$60 + 20 = 80\\text{ cm}^2$$ (Opsi D)."
        },
        {
          "id": "sd5-b5-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Tanah berbentuk belah ketupat dengan keliling 52 cm memiliki salah satu diagonal sepanjang 24 cm. Luas tanah tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "240 cm^2"
            },
            {
              "key": "B",
              "text": "120 cm^2"
            },
            {
              "key": "C",
              "text": "144 cm^2"
            },
            {
              "key": "D",
              "text": "156 cm^2"
            }
          ],
          "correctAnswer": "B",
          "hint": "Sisi $= 13$. Diagonal lain: $2 \\times \\sqrt{13^2 - 12^2} = 10$. Luas $= \\frac{1}{2} \\times 24 \\times 10 = 120$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$L = \\frac{1}{2} \\times 24 \\times 10 = 120\\text{ cm}^2$$ (Opsi B)."
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
              "text": "Sudut tumpul"
            },
            {
              "key": "B",
              "text": "Sudut siku-siku"
            },
            {
              "key": "C",
              "text": "Sudut lancip"
            },
            {
              "key": "D",
              "text": "Sudut lurus"
            }
          ],
          "correctAnswer": "C",
          "hint": "Sudut lancip memiliki ukuran bukaan yang sempit di bawah $90^\\circ$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nSudut dengan ukuran antara $0^\\circ$ dan $90^\\circ$ disebut **sudut lancip** (Opsi C)."
        },
        {
          "id": "sd5-b6-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Besar sudut yang dibentuk oleh kedua jarum jam pada pukul 03.00 tepat adalah...",
          "options": [
            {
              "key": "A",
              "text": "$60^\\circ$"
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
              "text": "$90^\\circ$"
            }
          ],
          "correctAnswer": "D",
          "hint": "Pukul 03.00 membentuk sudut siku-siku: 3 langkah $\\times 30^\\circ$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$3 \\times 30^\\circ = 90^\\circ$$\nBesar sudutnya adalah **$90^\\circ$** (Opsi D)."
        },
        {
          "id": "sd5-b6-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Besar sudut terkecil yang dibentuk oleh kedua jarum jam pada pukul 05.00 tepat adalah...",
          "options": [
            {
              "key": "A",
              "text": "$120^\\circ$"
            },
            {
              "key": "B",
              "text": "$150^\\circ$"
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
          "correctAnswer": "B",
          "hint": "Jarak dari angka 12 ke angka 5 adalah 5 langkah angka jam: $5 \\times 30^\\circ$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$5 \\times 30^\\circ = 150^\\circ$$\nBesar sudutnya adalah **$150^\\circ$** (Opsi B)."
        },
        {
          "id": "sd5-b6-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah sudut terbentuk dari $\\frac{1}{3}$ putaran penuh lingkaran. Jenis sudut tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "Sudut lancip"
            },
            {
              "key": "B",
              "text": "Sudut siku-siku"
            },
            {
              "key": "C",
              "text": "Sudut lurus"
            },
            {
              "key": "D",
              "text": "Sudut tumpul"
            }
          ],
          "correctAnswer": "D",
          "hint": "Satu putaran penuh $= 360^\\circ$. Hitung $\\frac{1}{3} \\times 360^\\circ = 120^\\circ$, lalu tentukan jenisnya.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Hitung besar sudut: $\\frac{1}{3} \\times 360^\\circ = 120^\\circ$.\n2. Karena $120^\\circ$ berada di antara $90^\\circ$ dan $180^\\circ$, maka termasuk **sudut tumpul** (Opsi D)."
        },
        {
          "id": "sd5-b6-5",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Sudut yang besarnya tepat $90^\\circ$ disebut sudut...",
          "options": [
            {
              "key": "A",
              "text": "Siku-siku"
            },
            {
              "key": "B",
              "text": "Lancip"
            },
            {
              "key": "C",
              "text": "Tumpul"
            },
            {
              "key": "D",
              "text": "Lurus"
            }
          ],
          "correctAnswer": "A",
          "hint": "Sudut $90^\\circ$ membentuk sudut siku-siku.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nSudut $90^\\circ$ adalah **sudut siku-siku** (Opsi A)."
        },
        {
          "id": "sd5-b6-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sudut yang besarnya antara $0^\\circ$ dan $90^\\circ$ dikelompokkan sebagai sudut...",
          "options": [
            {
              "key": "A",
              "text": "Tumpul"
            },
            {
              "key": "B",
              "text": "Lancip"
            },
            {
              "key": "C",
              "text": "Lurus"
            },
            {
              "key": "D",
              "text": "Refleks"
            }
          ],
          "correctAnswer": "B",
          "hint": "Besar sudut kurang dari $90^\\circ$ adalah sudut lancip.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nSudut tersebut adalah **sudut lancip** (Opsi B)."
        },
        {
          "id": "sd5-b6-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Besar sudut yang dibentuk oleh kedua jarum jam pada pukul 03.00 tepat adalah...",
          "options": [
            {
              "key": "A",
              "text": "60^\\circ"
            },
            {
              "key": "B",
              "text": "90^\\circ"
            },
            {
              "key": "C",
              "text": "120^\\circ"
            },
            {
              "key": "D",
              "text": "45^\\circ"
            }
          ],
          "correctAnswer": "B",
          "hint": "Jarum jam pendek di angka 3 dan jarum panjang di angka 12: $3 \\times 30^\\circ = 90^\\circ$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$3 \\times 30^\\circ = 90^\\circ$$ (Opsi B)."
        },
        {
          "id": "sd5-b6-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sudut terkecil yang dibentuk oleh kedua jarum jam pada pukul 04.00 adalah...",
          "options": [
            {
              "key": "A",
              "text": "100^\\circ"
            },
            {
              "key": "B",
              "text": "150^\\circ"
            },
            {
              "key": "C",
              "text": "120^\\circ"
            },
            {
              "key": "D",
              "text": "90^\\circ"
            }
          ],
          "correctAnswer": "C",
          "hint": "Tiap 1 jam bernilai $30^\\circ$. Pukul 04.00 $= 4 \\times 30^\\circ = 120^\\circ$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$4 \\times 30^\\circ = 120^\\circ$$ (Opsi C)."
        },
        {
          "id": "sd5-b6-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Alat yang digunakan untuk mengukur besar sudut secara akurat adalah...",
          "options": [
            {
              "key": "A",
              "text": "Jangka"
            },
            {
              "key": "B",
              "text": "Penggaris segitiga"
            },
            {
              "key": "C",
              "text": "Busur derajat"
            },
            {
              "key": "D",
              "text": "Meteran"
            }
          ],
          "correctAnswer": "C",
          "hint": "Busur derajat adalah instrumen pengukur besar sudut.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nAlatnya adalah **busur derajat** (Opsi C)."
        },
        {
          "id": "sd5-b6-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jumlah seluruh sudut dalam pada sebuah segitiga selalu sama dengan...",
          "options": [
            {
              "key": "A",
              "text": "360^\\circ"
            },
            {
              "key": "B",
              "text": "180^\\circ"
            },
            {
              "key": "C",
              "text": "90^\\circ"
            },
            {
              "key": "D",
              "text": "270^\\circ"
            }
          ],
          "correctAnswer": "B",
          "hint": "Teorema jumlah sudut segitiga $= 180^\\circ$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nJumlah sudut segitiga adalah **$180^\\circ$** (Opsi B)."
        },
        {
          "id": "sd5-b6-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Pada segitiga siku-siku, jika salah satu sudut lancipnya adalah $35^\\circ$, maka besar sudut lancip lainnya adalah...",
          "options": [
            {
              "key": "A",
              "text": "55^\\circ"
            },
            {
              "key": "B",
              "text": "45^\\circ"
            },
            {
              "key": "C",
              "text": "65^\\circ"
            },
            {
              "key": "D",
              "text": "50^\\circ"
            }
          ],
          "correctAnswer": "A",
          "hint": "Sudut kedua $= 90^\\circ - 35^\\circ = 55^\\circ$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$90^\\circ - 35^\\circ = 55^\\circ$$ (Opsi A)."
        },
        {
          "id": "sd5-b6-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah segitiga sama kaki memiliki satu sudut puncak sebesar $50^\\circ$. Besar masing-masing sudut alasnya adalah...",
          "options": [
            {
              "key": "A",
              "text": "70^\\circ"
            },
            {
              "key": "B",
              "text": "60^\\circ"
            },
            {
              "key": "C",
              "text": "55^\\circ"
            },
            {
              "key": "D",
              "text": "65^\\circ"
            }
          ],
          "correctAnswer": "D",
          "hint": "Sudut alas $= (180^\\circ - 50^\\circ) / 2 = 130^\\circ / 2 = 65^\\circ$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\frac{180^\\circ - 50^\\circ}{2} = 65^\\circ$$ (Opsi D)."
        },
        {
          "id": "sd5-b6-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Besar sudut lurus adalah...",
          "options": [
            {
              "key": "A",
              "text": "180^\\circ"
            },
            {
              "key": "B",
              "text": "360^\\circ"
            },
            {
              "key": "C",
              "text": "90^\\circ"
            },
            {
              "key": "D",
              "text": "270^\\circ"
            }
          ],
          "correctAnswer": "A",
          "hint": "Sudut lurus bernilai $180^\\circ$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nBesarnya adalah **$180^\\circ$** (Opsi A)."
        },
        {
          "id": "sd5-b6-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sudut terkecil yang dibentuk oleh kedua jarum jam pada pukul 06.00 adalah...",
          "options": [
            {
              "key": "A",
              "text": "150^\\circ"
            },
            {
              "key": "B",
              "text": "120^\\circ"
            },
            {
              "key": "C",
              "text": "180^\\circ"
            },
            {
              "key": "D",
              "text": "90^\\circ"
            }
          ],
          "correctAnswer": "C",
          "hint": "Jarum membentuk garis lurus ($180^\\circ$).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$6 \\times 30^\\circ = 180^\\circ$$ (Opsi C)."
        },
        {
          "id": "sd5-b6-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jumlah seluruh sudut dalam pada sebuah segi empat (seperti persegi atau persegi panjang) adalah...",
          "options": [
            {
              "key": "A",
              "text": "180^\\circ"
            },
            {
              "key": "B",
              "text": "270^\\circ"
            },
            {
              "key": "C",
              "text": "360^\\circ"
            },
            {
              "key": "D",
              "text": "400^\\circ"
            }
          ],
          "correctAnswer": "C",
          "hint": "Segi empat terdiri dari 2 segitiga: $2 \\times 180^\\circ = 360^\\circ$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nJumlah sudut segi empat adalah **$360^\\circ$** (Opsi C)."
        },
        {
          "id": "sd5-b6-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Besar sudut terkecil yang dibentuk oleh kedua jarum jam pada pukul 03.30 adalah...",
          "options": [
            {
              "key": "A",
              "text": "75^\\circ"
            },
            {
              "key": "B",
              "text": "90^\\circ"
            },
            {
              "key": "C",
              "text": "70^\\circ"
            },
            {
              "key": "D",
              "text": "80^\\circ"
            }
          ],
          "correctAnswer": "A",
          "hint": "Jarum menit di angka 6 ($180^\\circ$). Jarum jam di $3{,}5 \\times 30^\\circ = 105^\\circ$. Selisih $= 180^\\circ - 105^\\circ = 75^\\circ$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$180^\\circ - 105^\\circ = 75^\\circ$$ (Opsi A)."
        },
        {
          "id": "sd5-b6-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dua sudut saling berpelurus (suplemen). Jika sudut pertama besarnya tiga kali sudut kedua, besar sudut pertama adalah...",
          "options": [
            {
              "key": "A",
              "text": "135^\\circ"
            },
            {
              "key": "B",
              "text": "120^\\circ"
            },
            {
              "key": "C",
              "text": "145^\\circ"
            },
            {
              "key": "D",
              "text": "150^\\circ"
            }
          ],
          "correctAnswer": "A",
          "hint": "$3x + x = 180^\\circ \\implies 4x = 180^\\circ \\implies x = 45^\\circ$. Sudut pertama $= 3(45^\\circ) = 135^\\circ$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$3 \\times 45^\\circ = 135^\\circ$$ (Opsi A)."
        },
        {
          "id": "sd5-b6-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Pada jajar genjang $ABCD$, besar sudut $A = 70^\\circ$. Besar sudut $B$ yang bersebelahan adalah...",
          "options": [
            {
              "key": "A",
              "text": "70^\\circ"
            },
            {
              "key": "B",
              "text": "120^\\circ"
            },
            {
              "key": "C",
              "text": "90^\\circ"
            },
            {
              "key": "D",
              "text": "110^\\circ"
            }
          ],
          "correctAnswer": "D",
          "hint": "Dua sudut bersebelahan pada jajar genjang berjumlah $180^\\circ$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\angle B = 180^\\circ - 70^\\circ = 110^\\circ$$ (Opsi D)."
        },
        {
          "id": "sd5-b6-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sudut terkecil yang dibentuk oleh jarum jam pada pukul 08.20 adalah...",
          "options": [
            {
              "key": "A",
              "text": "120^\\circ"
            },
            {
              "key": "B",
              "text": "130^\\circ"
            },
            {
              "key": "C",
              "text": "140^\\circ"
            },
            {
              "key": "D",
              "text": "125^\\circ"
            }
          ],
          "correctAnswer": "B",
          "hint": "Jarum jam: $8 \\times 30^\\circ + 20 \\times 0{,}5^\\circ = 250^\\circ$. Jarum menit: $20 \\times 6^\\circ = 120^\\circ$. Selisih $= 250^\\circ - 120^\\circ = 130^\\circ$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$250^\\circ - 120^\\circ = 130^\\circ$$ (Opsi B)."
        },
        {
          "id": "sd5-b6-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah segi lima beraturan memiliki 5 sudut yang sama besar. Besar setiap sudut dalam segi lima beraturan tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "120^\\circ"
            },
            {
              "key": "B",
              "text": "100^\\circ"
            },
            {
              "key": "C",
              "text": "115^\\circ"
            },
            {
              "key": "D",
              "text": "108^\\circ"
            }
          ],
          "correctAnswer": "D",
          "hint": "Total sudut segi-$n$: $(n - 2) \\times 180^\\circ = 3 \\times 180^\\circ = 540^\\circ$. Tiap sudut $= 540^\\circ / 5 = 108^\\circ$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\frac{3 \\times 180^\\circ}{5} = 108^\\circ$$ (Opsi D)."
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
              "text": "Belah ketupat"
            },
            {
              "key": "B",
              "text": "Persegi"
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
          "correctAnswer": "B",
          "hint": "Ciri khas: 4 sisi sama panjang DAN semua sudutnya $90^\\circ$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nBangun datar dengan 4 sisi sama panjang dan 4 sudut siku-siku adalah **persegi** (Opsi B)."
        },
        {
          "id": "sd5-b7-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Banyaknya simetri lipat yang dimiliki oleh bangun persegi panjang adalah...",
          "options": [
            {
              "key": "A",
              "text": "4"
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
          "correctAnswer": "D",
          "hint": "Persegi panjang hanya bisa dilipat tegak dan mendatar, diagonalnya tidak menghasilkan lipatan yang saling menutup.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nPersegi panjang memiliki **2 simetri lipat** (Opsi D)."
        },
        {
          "id": "sd5-b7-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Ciri-ciri suatu bangun datar: memiliki dua pasang sisi berdampingan sama panjang, kedua diagonalnya berpotongan tegak lurus, dan memiliki tepat 1 sumbu simetri lipat. Bangun datar yang dimaksud adalah...",
          "options": [
            {
              "key": "A",
              "text": "Belah ketupat"
            },
            {
              "key": "B",
              "text": "Jajar genjang"
            },
            {
              "key": "C",
              "text": "Trapesium sama kaki"
            },
            {
              "key": "D",
              "text": "Layang-layang"
            }
          ],
          "correctAnswer": "D",
          "hint": "Bentuk seperti mainan layangan di udara dengan 1 sumbu simetri.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nBangun dengan 2 pasang sisi berdampingan sama panjang dan 1 sumbu simetri adalah **layang-layang** (Opsi D)."
        },
        {
          "id": "sd5-b7-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Pernyataan berikut mengenai sifat jajar genjang yang benar adalah...",
          "options": [
            {
              "key": "A",
              "text": "Memiliki 2 simetri lipat dan 2 simetri putar"
            },
            {
              "key": "B",
              "text": "Memiliki 4 simetri putar"
            },
            {
              "key": "C",
              "text": "Memiliki 2 simetri putar dan 0 simetri lipat"
            },
            {
              "key": "D",
              "text": "Kedua diagonalnya berpotongan tegak lurus"
            }
          ],
          "correctAnswer": "C",
          "hint": "Jajar genjang tidak bisa dilipat saling menutupi, tetapi dapat menempati bingkainya pada putaran $180^\\circ$ dan $360^\\circ$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nJajar genjang tidak memiliki simetri lipat (0 simetri lipat) dan memiliki **2 simetri putar** (Opsi C)."
        },
        {
          "id": "sd5-b7-5",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Banyak simetri lipat yang dimiliki oleh bangun persegi adalah...",
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
              "text": "3"
            },
            {
              "key": "D",
              "text": "8"
            }
          ],
          "correctAnswer": "B",
          "hint": "Persegi memiliki 4 sumbu simetri lipat.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nPersegi memiliki **4 simetri lipat** (Opsi B)."
        },
        {
          "id": "sd5-b7-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bangun datar yang memiliki 2 simetri lipat dan 2 simetri putar adalah...",
          "options": [
            {
              "key": "A",
              "text": "Persegi panjang"
            },
            {
              "key": "B",
              "text": "Segitiga sama sisi"
            },
            {
              "key": "C",
              "text": "Trapesium sama kaki"
            },
            {
              "key": "D",
              "text": "Layang-layang"
            }
          ],
          "correctAnswer": "A",
          "hint": "Persegi panjang memiliki 2 simetri lipat dan 2 simetri putar.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nBangun tersebut adalah **persegi panjang** (Opsi A)."
        },
        {
          "id": "sd5-b7-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Banyak simetri putar yang dimiliki oleh bangun belah ketupat adalah...",
          "options": [
            {
              "key": "A",
              "text": "4"
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
              "text": "3"
            }
          ],
          "correctAnswer": "C",
          "hint": "Belah ketupat memiliki 2 simetri putar tingkat dua.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nBelah ketupat memiliki **2 simetri putar** (Opsi C)."
        },
        {
          "id": "sd5-b7-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bangun datar yang memiliki 4 sisi sama panjang dan 4 sudut siku-siku adalah...",
          "options": [
            {
              "key": "A",
              "text": "Persegi panjang"
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
              "text": "Persegi"
            }
          ],
          "correctAnswer": "D",
          "hint": "Karakteristik 4 sisi sama dan sudut siku-siku adalah persegi.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nBangun tersebut adalah **persegi** (Opsi D)."
        },
        {
          "id": "sd5-b7-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bangun datar yang memiliki satu pasang sisi sejajar tetapi panjangnya tidak sama dinamakan...",
          "options": [
            {
              "key": "A",
              "text": "Trapesium"
            },
            {
              "key": "B",
              "text": "Jajar genjang"
            },
            {
              "key": "C",
              "text": "Layang-layang"
            },
            {
              "key": "D",
              "text": "Belah ketupat"
            }
          ],
          "correctAnswer": "A",
          "hint": "Definisi trapesium adalah bangun segi empat dengan tepat sepasang sisi sejajar.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nBangun tersebut adalah **trapesium** (Opsi A)."
        },
        {
          "id": "sd5-b7-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jumlah simetri lipat pada segitiga sama sisi adalah...",
          "options": [
            {
              "key": "A",
              "text": "3"
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
              "text": "0"
            }
          ],
          "correctAnswer": "A",
          "hint": "Segitiga sama sisi memiliki 3 sumbu simetri lipat.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nSegitiga sama sisi memiliki **3 simetri lipat** (Opsi A)."
        },
        {
          "id": "sd5-b7-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bangun layang-layang memiliki simetri lipat sebanyak...",
          "options": [
            {
              "key": "A",
              "text": "2"
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
              "text": "4"
            }
          ],
          "correctAnswer": "C",
          "hint": "Layang-layang memiliki 1 sumbu simetri lipat di sepanjang diagonal terpanjangnya.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nLayang-layang memiliki **1 simetri lipat** (Opsi C)."
        },
        {
          "id": "sd5-b7-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bangun datar yang memiliki simetri lipat dan simetri putar tak terhingga adalah...",
          "options": [
            {
              "key": "A",
              "text": "Persegi"
            },
            {
              "key": "B",
              "text": "Segi delapan"
            },
            {
              "key": "C",
              "text": "Oval"
            },
            {
              "key": "D",
              "text": "Lingkaran"
            }
          ],
          "correctAnswer": "D",
          "hint": "Lingkaran simetris sempurna di setiap garis tengahnya.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nBangun tersebut adalah **lingkaran** (Opsi D)."
        },
        {
          "id": "sd5-b7-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Persamaan antara persegi dan belah ketupat adalah...",
          "options": [
            {
              "key": "A",
              "text": "Semua sudutnya siku-siku"
            },
            {
              "key": "B",
              "text": "Kedua diagonalnya sama panjang"
            },
            {
              "key": "C",
              "text": "Semua sisinya sama panjang"
            },
            {
              "key": "D",
              "text": "Memiliki 4 simetri lipat"
            }
          ],
          "correctAnswer": "C",
          "hint": "Keduanya memiliki 4 sisi yang sama panjang.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nPersamaannya adalah **semua sisinya sama panjang** (Opsi C)."
        },
        {
          "id": "sd5-b7-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bangun jajar genjang memiliki simetri lipat sebanyak...",
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
              "text": "4"
            }
          ],
          "correctAnswer": "B",
          "hint": "Jajar genjang umum tidak memiliki sumbu simetri lipat (0 simetri lipat).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nJajar genjang memiliki **0 simetri lipat** (Opsi B)."
        },
        {
          "id": "sd5-b7-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Perbedaan antara persegi panjang dan jajar genjang terletak pada...",
          "options": [
            {
              "key": "A",
              "text": "Besar sudut-sudutnya"
            },
            {
              "key": "B",
              "text": "Jumlah sisinya"
            },
            {
              "key": "C",
              "text": "Banyak pasangan sisi sejajar"
            },
            {
              "key": "D",
              "text": "Kelilingnya"
            }
          ],
          "correctAnswer": "A",
          "hint": "Persegi panjang memiliki sudut siku-siku ($90^\\circ$), sedangkan jajar genjang sudutnya tidak siku-siku.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nPerbedaannya terletak pada **besar sudut-sudutnya** (Opsi A)."
        },
        {
          "id": "sd5-b7-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah segi delapan beraturan memiliki simetri putar sebanyak...",
          "options": [
            {
              "key": "A",
              "text": "8"
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
              "text": "16"
            }
          ],
          "correctAnswer": "A",
          "hint": "Segi-$n$ beraturan memiliki $n$ simetri putar.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nSegi delapan beraturan memiliki **8 simetri putar** (Opsi A)."
        },
        {
          "id": "sd5-b7-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dua bangun datar yang selalu sebangun tanpa bergantung pada ukuran sisinya adalah...",
          "options": [
            {
              "key": "A",
              "text": "Dua persegi panjang"
            },
            {
              "key": "B",
              "text": "Dua lingkaran"
            },
            {
              "key": "C",
              "text": "Dua segitiga sama kaki"
            },
            {
              "key": "D",
              "text": "Dua belah ketupat"
            }
          ],
          "correctAnswer": "B",
          "hint": "Semua lingkaran memiliki perbandingan bentuk yang identik (konstan $\\pi$).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nDua lingkaran selalu **sebangun** (Opsi B)."
        },
        {
          "id": "sd5-b7-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Suatu segi empat memiliki sifat: kedua diagonalnya saling tegak lurus, membagi dua sama panjang, dan sama panjang. Bangun tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "Belah ketupat"
            },
            {
              "key": "B",
              "text": "Persegi panjang"
            },
            {
              "key": "C",
              "text": "Persegi"
            },
            {
              "key": "D",
              "text": "Layang-layang"
            }
          ],
          "correctAnswer": "C",
          "hint": "Saling tegak lurus, membagi dua, dan sama panjang adalah ciri khusus persegi.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nBangun tersebut adalah **persegi** (Opsi C)."
        },
        {
          "id": "sd5-b7-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Banyak diagonal yang dapat ditarik pada bangun segi enam adalah...",
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
              "text": "12"
            },
            {
              "key": "D",
              "text": "9"
            }
          ],
          "correctAnswer": "D",
          "hint": "Rumus banyak diagonal segi-$n$: $D = \\frac{n(n - 3)}{2} = \\frac{6 \\times 3}{2} = 9$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$D = \\frac{6(6 - 3)}{2} = 9$$ (Opsi D)."
        },
        {
          "id": "sd5-b7-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Bangun datar yang dibentuk oleh dua pasang sisi sama panjang, tetapi tidak sejajar, serta memiliki sepasang sudut berhadapan sama besar adalah...",
          "options": [
            {
              "key": "A",
              "text": "Jajar genjang"
            },
            {
              "key": "B",
              "text": "Layang-layang"
            },
            {
              "key": "C",
              "text": "Trapesium sama kaki"
            },
            {
              "key": "D",
              "text": "Belah ketupat"
            }
          ],
          "correctAnswer": "B",
          "hint": "Ciri-ciri tersebut mendefinisikan bangun layang-layang.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nBangun datar tersebut adalah **layang-layang** (Opsi B)."
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
              "text": "7"
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
              "text": "8,5"
            }
          ],
          "correctAnswer": "B",
          "hint": "Cari nilai yang muncul paling banyak: angka 8 muncul 3 kali.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nAngka 8 muncul sebanyak 3 kali, paling sering dibanding angka lain. Jadi, modusnya adalah **8** (Opsi B)."
        },
        {
          "id": "sd5-b8-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dalam diagram batang jumlah ekstrakurikuler: Pramuka diikuti 40 siswa, Futsal 35 siswa, Paduan Suara 25 siswa, dan Seni Tari 20 siswa. Selisih jumlah siswa yang mengikuti Pramuka dan Seni Tari adalah...",
          "options": [
            {
              "key": "A",
              "text": "15 siswa"
            },
            {
              "key": "B",
              "text": "10 siswa"
            },
            {
              "key": "C",
              "text": "20 siswa"
            },
            {
              "key": "D",
              "text": "25 siswa"
            }
          ],
          "correctAnswer": "C",
          "hint": "Kurangkan jumlah peserta Pramuka (40) dengan Seni Tari (20).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Selisih} = 40 - 20 = 20\\text{ siswa}$$\nSelisihnya adalah **20 siswa** (Opsi C)."
        },
        {
          "id": "sd5-b8-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah tabel frekuensi mencatat jumlah pengunjung perpustakaan: Senin 25 orang, Selasa 30 orang, Rabu 35 orang, Kamis 20 orang, dan Jumat 40 orang. Rata-rata (mean) jumlah pengunjung perpustakaan per hari adalah...",
          "options": [
            {
              "key": "A",
              "text": "28 orang"
            },
            {
              "key": "B",
              "text": "32 orang"
            },
            {
              "key": "C",
              "text": "35 orang"
            },
            {
              "key": "D",
              "text": "30 orang"
            }
          ],
          "correctAnswer": "D",
          "hint": "Jumlahkan seluruh pengunjung ($25 + 30 + 35 + 20 + 40 = 150$), lalu bagi dengan 5 hari.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Total pengunjung: $25 + 30 + 35 + 20 + 40 = 150\\text{ orang}$.\n2. Rata-rata per hari:\n$$\\text{Rata-rata} = \\frac{150}{5} = 30\\text{ orang}$$\nRata-rata pengunjung per hari adalah **30 orang** (Opsi D)."
        },
        {
          "id": "sd5-b8-5",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Modus dari data berat badan (kg): 32, 34, 32, 35, 33, 32, 36 adalah...",
          "options": [
            {
              "key": "A",
              "text": "34 kg"
            },
            {
              "key": "B",
              "text": "33 kg"
            },
            {
              "key": "C",
              "text": "35 kg"
            },
            {
              "key": "D",
              "text": "32 kg"
            }
          ],
          "correctAnswer": "D",
          "hint": "Nilai 32 muncul paling banyak (3 kali).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nModus adalah **32 kg** (Opsi D)."
        },
        {
          "id": "sd5-b8-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Median dari data terurut: 5, 6, 7, 8, 9, 10, 11 adalah...",
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
              "text": "8"
            },
            {
              "key": "D",
              "text": "7,5"
            }
          ],
          "correctAnswer": "C",
          "hint": "Data tengah dari 7 data ganjil adalah data ke-4.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nMedian data tersebut adalah **8** (Opsi C)."
        },
        {
          "id": "sd5-b8-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Nilai rata-rata dari data: 7, 8, 9, 6, 10 adalah...",
          "options": [
            {
              "key": "A",
              "text": "8"
            },
            {
              "key": "B",
              "text": "7,5"
            },
            {
              "key": "C",
              "text": "8,5"
            },
            {
              "key": "D",
              "text": "9"
            }
          ],
          "correctAnswer": "A",
          "hint": "Mean $= (7 + 8 + 9 + 6 + 10) / 5 = 40 / 5 = 8$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\bar{x} = \\frac{40}{5} = 8$$ (Opsi A)."
        },
        {
          "id": "sd5-b8-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Pada piktogram (diagram gambar), 1 simbol buku mewakili 50 eksemplar buku. Jika perpustakaan memiliki 7 simbol buku, total buku adalah...",
          "options": [
            {
              "key": "A",
              "text": "350 buku"
            },
            {
              "key": "B",
              "text": "300 buku"
            },
            {
              "key": "C",
              "text": "250 buku"
            },
            {
              "key": "D",
              "text": "400 buku"
            }
          ],
          "correctAnswer": "A",
          "hint": "Total $= 7 \\times 50 = 350$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$7 \\times 50 = 350\\text{ buku}$$ (Opsi A)."
        },
        {
          "id": "sd5-b8-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Diagram batang tinggi badan menunjukkan: Kelas A 135 cm, Kelas B 140 cm, Kelas C 138 cm, Kelas D 142 cm. Selisih tinggi tertinggi dan terendah adalah...",
          "options": [
            {
              "key": "A",
              "text": "5 cm"
            },
            {
              "key": "B",
              "text": "7 cm"
            },
            {
              "key": "C",
              "text": "8 cm"
            },
            {
              "key": "D",
              "text": "6 cm"
            }
          ],
          "correctAnswer": "B",
          "hint": "$142 - 135 = 7$ cm.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$142 - 135 = 7\\text{ cm}$$ (Opsi B)."
        },
        {
          "id": "sd5-b8-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Median dari data genap: 10, 12, 14, 16, 18, 20 adalah...",
          "options": [
            {
              "key": "A",
              "text": "14"
            },
            {
              "key": "B",
              "text": "16"
            },
            {
              "key": "C",
              "text": "15"
            },
            {
              "key": "D",
              "text": "14,5"
            }
          ],
          "correctAnswer": "C",
          "hint": "Rata-rata dua data tengah: $(14 + 16) / 2 = 15$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\frac{14 + 16}{2} = 15$$ (Opsi C)."
        },
        {
          "id": "sd5-b8-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Nilai ulangan matematika 5 orang siswa adalah 75, 80, 85, 90, 70. Nilai rata-rata ulangan mereka adalah...",
          "options": [
            {
              "key": "A",
              "text": "78"
            },
            {
              "key": "B",
              "text": "80"
            },
            {
              "key": "C",
              "text": "82"
            },
            {
              "key": "D",
              "text": "79"
            }
          ],
          "correctAnswer": "B",
          "hint": "Total $= 400 / 5 = 80$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\frac{400}{5} = 80$$ (Opsi B)."
        },
        {
          "id": "sd5-b8-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Tabel frekuensi nilai siswa: Nilai 6 (4 anak), Nilai 7 (6 anak), Nilai 8 (8 anak), Nilai 9 (2 anak). Banyak siswa yang mendapat nilai lebih dari 7 adalah...",
          "options": [
            {
              "key": "A",
              "text": "8 anak"
            },
            {
              "key": "B",
              "text": "12 anak"
            },
            {
              "key": "C",
              "text": "14 anak"
            },
            {
              "key": "D",
              "text": "10 anak"
            }
          ],
          "correctAnswer": "D",
          "hint": "Siswa nilai 8 dan 9: $8 + 2 = 10$ anak.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$8 + 2 = 10\\text{ anak}$$ (Opsi D)."
        },
        {
          "id": "sd5-b8-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Diagram lingkaran menunjukkan hobi siswa: Futsal $40\\%$, Musik $25\\%$, Menari $15\\%$, sisanya Membaca. Persentase siswa yang gemar membaca adalah...",
          "options": [
            {
              "key": "A",
              "text": "20%"
            },
            {
              "key": "B",
              "text": "25%"
            },
            {
              "key": "C",
              "text": "15%"
            },
            {
              "key": "D",
              "text": "30%"
            }
          ],
          "correctAnswer": "A",
          "hint": "$100\\% - (40\\% + 25\\% + 15\\%) = 100\\% - 80\\% = 20\\%$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$100\\% - 80\\% = 20\\%$$ (Opsi A)."
        },
        {
          "id": "sd5-b8-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jika persentase gemar membaca adalah $20\\%$ dari total 150 siswa, banyak siswa yang gemar membaca adalah...",
          "options": [
            {
              "key": "A",
              "text": "25 siswa"
            },
            {
              "key": "B",
              "text": "35 siswa"
            },
            {
              "key": "C",
              "text": "30 siswa"
            },
            {
              "key": "D",
              "text": "40 siswa"
            }
          ],
          "correctAnswer": "C",
          "hint": "$20\\% \\times 150 = 30$ siswa.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$0{,}20 \\times 150 = 30\\text{ siswa}$$ (Opsi C)."
        },
        {
          "id": "sd5-b8-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Data hasil panen padi (ton) selama 5 tahun: 24, 28, 26, 30, 32. Rata-rata hasil panen per tahun adalah...",
          "options": [
            {
              "key": "A",
              "text": "27 ton"
            },
            {
              "key": "B",
              "text": "29 ton"
            },
            {
              "key": "C",
              "text": "30 ton"
            },
            {
              "key": "D",
              "text": "28 ton"
            }
          ],
          "correctAnswer": "D",
          "hint": "Total $= 140 / 5 = 28$ ton.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\frac{140}{5} = 28\\text{ ton}$$ (Opsi D)."
        },
        {
          "id": "sd5-b8-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Rata-rata nilai ulangan 9 orang siswa adalah 78. Jika seorang siswa lain bernama Edo digabungkan, nilai rata-ratanya menjadi 80. Nilai ulangan Edo adalah...",
          "options": [
            {
              "key": "A",
              "text": "96"
            },
            {
              "key": "B",
              "text": "98"
            },
            {
              "key": "C",
              "text": "95"
            },
            {
              "key": "D",
              "text": "92"
            }
          ],
          "correctAnswer": "B",
          "hint": "Total 10 siswa $= 800$. Total 9 siswa $= 702$. Nilai Edo $= 800 - 702 = 98$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$10(80) - 9(78) = 800 - 702 = 98$$ (Opsi B)."
        },
        {
          "id": "sd5-b8-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Nilai rata-rata tes matematika dari 20 siswa perempuan adalah 82, sedangkan 10 siswa laki-laki memiliki rata-rata 76. Rata-rata seluruh siswa adalah...",
          "options": [
            {
              "key": "A",
              "text": "79"
            },
            {
              "key": "B",
              "text": "80"
            },
            {
              "key": "C",
              "text": "81"
            },
            {
              "key": "D",
              "text": "78,5"
            }
          ],
          "correctAnswer": "B",
          "hint": "$\\bar{x} = \\frac{20(82) + 10(76)}{30} = \\frac{1.640 + 760}{30} = \\frac{2.400}{30} = 80$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\frac{2.400}{30} = 80$$ (Opsi B)."
        },
        {
          "id": "sd5-b8-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dalam diagram garis suhu badan pasien selama 5 jam tercatat: $37^\\circ\\text{C}, 38^\\circ\\text{C}, 39^\\circ\\text{C}, 38{,}5^\\circ\\text{C}, 37{,}5^\\circ\\text{C}$. Penurunan suhu terbesar terjadi antara jam ke...",
          "options": [
            {
              "key": "A",
              "text": "Jam ke-3 dan jam ke-4 (turun 0,5 C)"
            },
            {
              "key": "B",
              "text": "Jam ke-1 dan jam ke-2"
            },
            {
              "key": "C",
              "text": "Jam ke-4 dan jam ke-5 (turun 1,0 C)"
            },
            {
              "key": "D",
              "text": "Jam ke-2 dan jam ke-3"
            }
          ],
          "correctAnswer": "C",
          "hint": "Dari $38{,}5^\\circ$ ke $37{,}5^\\circ$ turun $1{,}0^\\circ\\text{C}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nPenurunan terbesar adalah $38{,}5^\\circ - 37{,}5^\\circ = 1{,}0^\\circ\\text{C}$ (Opsi C)."
        },
        {
          "id": "sd5-b8-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Data nilai: 6, 7, 7, $x$, 8, 9 memiliki rata-rata 7,5. Nilai $x$ adalah...",
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
              "text": "6"
            }
          ],
          "correctAnswer": "A",
          "hint": "Total $= 6 \\times 7{,}5 = 45$. $6 + 7 + 7 + 8 + 9 = 37 \\implies x = 45 - 37 = 8$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$x = 45 - 37 = 8$$ (Opsi A)."
        },
        {
          "id": "sd5-b8-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah toko buku mencatat penjualan buku selama 6 hari dengan data: 20, 25, 22, 28, 25, $y$. Jika rata-rata penjualannya 24 buku per hari, maka nilai $y$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "23"
            },
            {
              "key": "B",
              "text": "25"
            },
            {
              "key": "C",
              "text": "22"
            },
            {
              "key": "D",
              "text": "24"
            }
          ],
          "correctAnswer": "D",
          "hint": "Total $= 6 \\times 24 = 144$. $20 + 25 + 22 + 28 + 25 = 120 \\implies y = 144 - 120 = 24$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$y = 144 - 120 = 24\\text{ buku}$$ (Opsi D)."
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
              "text": "Puluhan ribu"
            },
            {
              "key": "B",
              "text": "Jutaan"
            },
            {
              "key": "C",
              "text": "Ratusan ribu"
            },
            {
              "key": "D",
              "text": "Ribuan"
            }
          ],
          "correctAnswer": "C",
          "hint": "Digit ke-6 dari kanan menempati nilai tempat ratusan ribu ($9 \\times 100.000 = 900.000$).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nDigit 9 menempati nilai tempat **ratusan ribu** (Opsi C)."
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
              "text": "Rp250.000,00"
            },
            {
              "key": "B",
              "text": "Rp275.000,00"
            },
            {
              "key": "C",
              "text": "Rp215.000,00"
            },
            {
              "key": "D",
              "text": "Rp225.000,00"
            }
          ],
          "correctAnswer": "D",
          "hint": "Hitung total sumbangan ($350.000 + 425.000 = 775.000$), lalu kurangkan dari 1.000.000.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Total sumbangan: $350.000 + 425.000 = 775.000$.\n2. Sisa uang:\n$$1.000.000 - 775.000 = \\text{Rp}225.000,00$$\nSisa uang dermawan adalah **Rp225.000,00** (Opsi D)."
        },
        {
          "id": "sd5-b9-5",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Nilai tempat angka 4 pada bilangan 482.750 adalah...",
          "options": [
            {
              "key": "A",
              "text": "Puluh ribuan"
            },
            {
              "key": "B",
              "text": "Ribuan"
            },
            {
              "key": "C",
              "text": "Jutaan"
            },
            {
              "key": "D",
              "text": "Ratus ribuan"
            }
          ],
          "correctAnswer": "D",
          "hint": "Angka 4 berada di posisi ratus ribuan.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nNilai tempatnya adalah **ratus ribuan** (Opsi D)."
        },
        {
          "id": "sd5-b9-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bilangan 'tiga ratus tujuh puluh lima ribu enam ratus dua puluh' dituliskan dalam angka menjadi...",
          "options": [
            {
              "key": "A",
              "text": "375.620"
            },
            {
              "key": "B",
              "text": "375.260"
            },
            {
              "key": "C",
              "text": "357.620"
            },
            {
              "key": "D",
              "text": "375.602"
            }
          ],
          "correctAnswer": "A",
          "hint": "375 ribu (375.000) + 620 = 375.620.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nPenulisan yang benar adalah **375.620** (Opsi A)."
        },
        {
          "id": "sd5-b9-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil penjumlahan $450.000 + 375.000$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "815.000"
            },
            {
              "key": "B",
              "text": "825.000"
            },
            {
              "key": "C",
              "text": "835.000"
            },
            {
              "key": "D",
              "text": "725.000"
            }
          ],
          "correctAnswer": "B",
          "hint": "$450 + 375 = 825$ ribu.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$450.000 + 375.000 = 825.000$$ (Opsi B)."
        },
        {
          "id": "sd5-b9-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil pengurangan $1.000.000 - 645.000$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "365.000"
            },
            {
              "key": "B",
              "text": "455.000"
            },
            {
              "key": "C",
              "text": "355.000"
            },
            {
              "key": "D",
              "text": "345.000"
            }
          ],
          "correctAnswer": "C",
          "hint": "$1.000 - 645 = 355$ ribu.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$1.000.000 - 645.000 = 355.000$$ (Opsi C)."
        },
        {
          "id": "sd5-b9-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil dari $25.000 \\times 30$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "75.000"
            },
            {
              "key": "B",
              "text": "7.500.000"
            },
            {
              "key": "C",
              "text": "700.000"
            },
            {
              "key": "D",
              "text": "750.000"
            }
          ],
          "correctAnswer": "D",
          "hint": "$25 \\times 3 = 75$ diikuti empat nol: 750.000.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$25.000 \\times 30 = 750.000$$ (Opsi D)."
        },
        {
          "id": "sd5-b9-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil pembagian $600.000 : 15$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "4.000"
            },
            {
              "key": "B",
              "text": "40.000"
            },
            {
              "key": "C",
              "text": "400.000"
            },
            {
              "key": "D",
              "text": "50.000"
            }
          ],
          "correctAnswer": "B",
          "hint": "$60 : 15 = 4$ diikuti empat nol: 40.000.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$600.000 : 15 = 40.000$$ (Opsi B)."
        },
        {
          "id": "sd5-b9-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bilangan 786.450 jika dibulatkan ke puluh ribuan terdekat menjadi...",
          "options": [
            {
              "key": "A",
              "text": "780.000"
            },
            {
              "key": "B",
              "text": "800.000"
            },
            {
              "key": "C",
              "text": "790.000"
            },
            {
              "key": "D",
              "text": "786.000"
            }
          ],
          "correctAnswer": "C",
          "hint": "Lihat angka ribuan yaitu 6 ($6 \\ge 5$), maka bulatkan ke atas.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nKarena angka ribuannya 6, maka dibulatkan ke atas menjadi **790.000** (Opsi C)."
        },
        {
          "id": "sd5-b9-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah perusahaan menyumbangkan 500 paket sembako. Jika tiap paket bernilai Rp180.000,00, total dana sumbangan tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "Rp9.000.000,00"
            },
            {
              "key": "B",
              "text": "Rp90.000.000,00"
            },
            {
              "key": "C",
              "text": "Rp85.000.000,00"
            },
            {
              "key": "D",
              "text": "Rp95.000.000,00"
            }
          ],
          "correctAnswer": "B",
          "hint": "$500 \\times 180.000 = 90.000.000$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$500 \\times 180.000 = \\text{Rp}90.000.000,00$$ (Opsi B)."
        },
        {
          "id": "sd5-b9-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Di antara bilangan berikut, manakah yang nilainya paling mendekati 500.000?",
          "options": [
            {
              "key": "A",
              "text": "502.500"
            },
            {
              "key": "B",
              "text": "495.000"
            },
            {
              "key": "C",
              "text": "505.000"
            },
            {
              "key": "D",
              "text": "498.750"
            }
          ],
          "correctAnswer": "D",
          "hint": "Selisih $498.750$ ke $500.000$ hanya $1.250$ (terkecil).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\nSelisih terkecil adalah $|500.000 - 498.750| = 1.250$ (Opsi D)."
        },
        {
          "id": "sd5-b9-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil operasi hitung campuran $250.000 + 150.000 : 3$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "400.000"
            },
            {
              "key": "B",
              "text": "200.000"
            },
            {
              "key": "C",
              "text": "300.000"
            },
            {
              "key": "D",
              "text": "350.000"
            }
          ],
          "correctAnswer": "C",
          "hint": "Dahulukan pembagian: $150.000 : 3 = 50.000$. Lalu jumlahkan: $250.000 + 50.000 = 300.000$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$250.000 + 50.000 = 300.000$$ (Opsi C)."
        },
        {
          "id": "sd5-b9-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Pemerintah membangun jalan desa sepanjang 12.500 meter di tahap I dan 18.750 meter di tahap II. Target total pembangunan adalah 40.000 meter. Berapa panjang jalan yang belum dibangun?",
          "options": [
            {
              "key": "A",
              "text": "9.750 meter"
            },
            {
              "key": "B",
              "text": "8.750 meter"
            },
            {
              "key": "C",
              "text": "7.750 meter"
            },
            {
              "key": "D",
              "text": "8.250 meter"
            }
          ],
          "correctAnswer": "B",
          "hint": "$40.000 - (12.500 + 18.750) = 40.000 - 31.250 = 8.750$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$40.000 - 31.250 = 8.750\\text{ meter}$$ (Opsi B)."
        },
        {
          "id": "sd5-b9-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah gudang beras menyimpan 850.000 kg beras. Pada minggu pertama dikeluarkan 240.000 kg dan minggu kedua 315.000 kg. Kemudian masuk pasokan baru sebanyak 175.000 kg. Stok beras di gudang sekarang adalah...",
          "options": [
            {
              "key": "A",
              "text": "480.000 kg"
            },
            {
              "key": "B",
              "text": "470.000 kg"
            },
            {
              "key": "C",
              "text": "460.000 kg"
            },
            {
              "key": "D",
              "text": "490.000 kg"
            }
          ],
          "correctAnswer": "B",
          "hint": "$850.000 - 555.000 + 175.000 = 295.000 + 175.000 = 470.000$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$850.000 - (240.000 + 315.000) + 175.000 = 470.000\\text{ kg}$$ (Opsi B)."
        },
        {
          "id": "sd5-b9-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Nilai dari $(450.000 - 150.000) : (25 \\times 4)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "3.000"
            },
            {
              "key": "B",
              "text": "300"
            },
            {
              "key": "C",
              "text": "30.000"
            },
            {
              "key": "D",
              "text": "300.000"
            }
          ],
          "correctAnswer": "A",
          "hint": "$300.000 : 100 = 3.000$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$300.000 : 100 = 3.000$$ (Opsi A)."
        },
        {
          "id": "sd5-b9-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah mesin cetak otomatis dapat mencetak 12.000 lembar brosur per jam. Jika mesin beroperasi 8 jam sehari selama 5 hari kerja, total brosur yang dicetak adalah...",
          "options": [
            {
              "key": "A",
              "text": "460.000 lembar"
            },
            {
              "key": "B",
              "text": "500.000 lembar"
            },
            {
              "key": "C",
              "text": "480.000 lembar"
            },
            {
              "key": "D",
              "text": "520.000 lembar"
            }
          ],
          "correctAnswer": "C",
          "hint": "$12.000 \\times 8 \\times 5 = 12.000 \\times 40 = 480.000$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$12.000 \\times 40 = 480.000\\text{ lembar}$$ (Opsi C)."
        },
        {
          "id": "sd5-b9-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Selisih antara nilai angka 7 terbesar dan nilai angka 7 terkecil pada bilangan 757.270 adalah...",
          "options": [
            {
              "key": "A",
              "text": "699.930"
            },
            {
              "key": "B",
              "text": "700.000"
            },
            {
              "key": "C",
              "text": "693.000"
            },
            {
              "key": "D",
              "text": "699.300"
            }
          ],
          "correctAnswer": "A",
          "hint": "Angka 7 ratus ribuan (700.000) dan angka 7 puluhan (70): $700.000 - 70 = 699.930$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$700.000 - 70 = 699.930$$ (Opsi A)."
        },
        {
          "id": "sd5-b9-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dalam rangka program penghijauan, disiapkan 1.000.000 bibit pohon untuk 8 kabupaten sama rata. Jika setiap kabupaten membagikan lagi bibit tersebut ke 25 kecamatan secara merata, berapa bibit yang diterima setiap kecamatan?",
          "options": [
            {
              "key": "A",
              "text": "4.000 bibit"
            },
            {
              "key": "B",
              "text": "6.000 bibit"
            },
            {
              "key": "C",
              "text": "4.500 bibit"
            },
            {
              "key": "D",
              "text": "5.000 bibit"
            }
          ],
          "correctAnswer": "D",
          "hint": "Tiap kabupaten $= 1.000.000 : 8 = 125.000$. Tiap kecamatan $= 125.000 : 25 = 5.000$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\\n$$\\frac{1.000.000}{8 \\times 25} = \\frac{1.000.000}{200} = 5.000\\text{ bibit}$$ (Opsi D)."
        }
      ]
    }
  ]
};
