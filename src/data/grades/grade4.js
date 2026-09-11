/**
 * Data Kurikulum Kelas 4 SD (Fase B)
 * 6 Bab Resmi Sesuai Buku Siswa Matematika
 */

export const grade4Data = {
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
          {
            "label": "Tabel Nilai Tempat 4 Angka",
            "formula": "\\text{Ribuan (1.000)} \\mid \\text{Ratusan (100)} \\mid \\text{Puluhan (10)} \\mid \\text{Satuan (1)}"
          },
          {
            "label": "Dekomposisi Nilai Tempat",
            "formula": "N = (a \\times 1.000) + (b \\times 100) + (c \\times 10) + d"
          },
          {
            "label": "Aturan Porogapit",
            "formula": "a : b = c \\iff c \\times b + \\text{sisa} = a"
          }
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
            {
              "key": "A",
              "text": "7.025"
            },
            {
              "key": "B",
              "text": "7.250"
            },
            {
              "key": "C",
              "text": "7.205"
            },
            {
              "key": "D",
              "text": "7.052"
            }
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
            {
              "key": "A",
              "text": "Ribuan"
            },
            {
              "key": "B",
              "text": "Puluhan"
            },
            {
              "key": "C",
              "text": "Satuan"
            },
            {
              "key": "D",
              "text": "Ratusan"
            }
          ],
          "correctAnswer": "D",
          "hint": "Hitung dari belakang: 8 satuan, 1 puluhan, 6...",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nAngka 6 berada pada posisi digit kedua dari kiri atau ketiga dari kanan, yaitu bernilai tempat **ratusan** dengan nilai angka 600 (Opsi D)."
        },
        {
          "id": "sd4-b1-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bentuk dekomposisi dari bilangan 8.352 yang benar adalah...",
          "options": [
            {
              "key": "A",
              "text": "800 + 300 + 50 + 2"
            },
            {
              "key": "B",
              "text": "8.000 + 30 + 50 + 2"
            },
            {
              "key": "C",
              "text": "8.000 + 300 + 50 + 2"
            },
            {
              "key": "D",
              "text": "8.000 + 300 + 5 + 20"
            }
          ],
          "correctAnswer": "C",
          "hint": "Uraikan nilai setiap angka: 8 ribuan, 3 ratusan, 5 puluhan, 2 satuan.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$8.352 = 8.000 + 300 + 50 + 2$$\nHasilnya adalah **8.000 + 300 + 50 + 2** (Opsi C)."
        },
        {
          "id": "sd4-b1-4",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil pembagian bersusun dari $84 : 3$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "28"
            },
            {
              "key": "B",
              "text": "26"
            },
            {
              "key": "C",
              "text": "24"
            },
            {
              "key": "D",
              "text": "32"
            }
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
            {
              "key": "A",
              "text": "375 buku"
            },
            {
              "key": "B",
              "text": "475 buku"
            },
            {
              "key": "C",
              "text": "325 buku"
            },
            {
              "key": "D",
              "text": "425 buku"
            }
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
            {
              "key": "A",
              "text": "24 potong"
            },
            {
              "key": "B",
              "text": "32 potong"
            },
            {
              "key": "C",
              "text": "30 potong"
            },
            {
              "key": "D",
              "text": "28 potong"
            }
          ],
          "correctAnswer": "D",
          "hint": "Hitung total bolu: $7 \\times 24 = 168$, lalu bagi 6.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Total bolu: $7 \\times 24 = 168$ potong.\n2. Dibagi ke 6 panti asuhan: $168 : 6 = 28$ potong.\nSetiap panti asuhan menerima **28 potong bolu** (Opsi D)."
        },
        {
          "id": "sd4-b1-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil dari penjumlahan bersusun $3.456 + 2.789$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "6.235"
            },
            {
              "key": "B",
              "text": "6.245"
            },
            {
              "key": "C",
              "text": "6.145"
            },
            {
              "key": "D",
              "text": "6.345"
            }
          ],
          "correctAnswer": "B",
          "hint": "Jumlahkan dari nilai satuan: $6 + 9 = 15$ (tulis 5, simpan 1 ke puluhan).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Satuan: $6 + 9 = 15$ (simpan 1)\n2. Puluhan: $1 + 5 + 8 = 14$ (simpan 1)\n3. Ratusan: $1 + 4 + 7 = 12$ (simpan 1)\n4. Ribuan: $1 + 3 + 2 = 6$\nHasilnya adalah **6.245** (Opsi B)."
        },
        {
          "id": "sd4-b1-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil pengurangan bersusun $7.020 - 3.485$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "3.635"
            },
            {
              "key": "B",
              "text": "3.535"
            },
            {
              "key": "C",
              "text": "3.545"
            },
            {
              "key": "D",
              "text": "4.535"
            }
          ],
          "correctAnswer": "B",
          "hint": "Gunakan teknik meminjam secara berurutan dari digit ribuan ke ratusan dan puluhan.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Satuan: $10 - 5 = 5$\n2. Puluhan: $11 - 8 = 3$\n3. Ratusan: $9 - 4 = 5$\n4. Ribuan: $6 - 3 = 3$\nHasilnya adalah **3.535** (Opsi B)."
        },
        {
          "id": "sd4-b1-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil perkalian bersusun $145 \\times 6$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "840"
            },
            {
              "key": "B",
              "text": "860"
            },
            {
              "key": "C",
              "text": "870"
            },
            {
              "key": "D",
              "text": "890"
            }
          ],
          "correctAnswer": "C",
          "hint": "Kalikan tiap angka mulai dari satuan: $5 \\times 6$, $4 \\times 6$, lalu $1 \\times 6$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $5 \\times 6 = 30$ (simpan 3)\n2. $4 \\times 6 = 24 + 3 = 27$ (simpan 2)\n3. $1 \\times 6 = 6 + 2 = 8$\nHasilnya adalah **870** (Opsi C)."
        },
        {
          "id": "sd4-b1-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil bagi dan sisa dari pembagian bersusun (porogapit) $95 : 4$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "24 sisa 1"
            },
            {
              "key": "B",
              "text": "22 sisa 7"
            },
            {
              "key": "C",
              "text": "23 sisa 3"
            },
            {
              "key": "D",
              "text": "23 sisa 2"
            }
          ],
          "correctAnswer": "C",
          "hint": "Bagi puluhan terlebih dahulu: $9 : 4 = 2$ sisa 1. Turunkan 5 menjadi 15, lalu $15 : 4 = 3$ sisa 3.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $9 : 4 = 2$ sisa 1 ($2 \\times 4 = 8$)\n2. Turunkan 5 menjadi 15\n3. $15 : 4 = 3$ sisa 3 ($3 \\times 4 = 12$, $15 - 12 = 3$)\nHasilnya adalah **23 sisa 3** (Opsi C)."
        },
        {
          "id": "sd4-b1-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah perpustakaan memiliki 4.350 buku cerita dan 2.875 buku pelajaran. Jumlah seluruh buku di perpustakaan tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "7.125 buku"
            },
            {
              "key": "B",
              "text": "7.225 buku"
            },
            {
              "key": "C",
              "text": "7.235 buku"
            },
            {
              "key": "D",
              "text": "6.225 buku"
            }
          ],
          "correctAnswer": "B",
          "hint": "Jumlahkan kedua jenis buku: $4.350 + 2.875$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$4.350 + 2.875 = 7.225$$\nJumlah seluruh buku adalah **7.225 buku** (Opsi B)."
        },
        {
          "id": "sd4-b1-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Doni memiliki uang tabungan sebesar Rp8.500,00. Ia membeli buku tulis seharga Rp3.750,00. Sisa uang tabungan Doni adalah...",
          "options": [
            {
              "key": "A",
              "text": "Rp4.750,00"
            },
            {
              "key": "B",
              "text": "Rp4.650,00"
            },
            {
              "key": "C",
              "text": "Rp5.250,00"
            },
            {
              "key": "D",
              "text": "Rp4.850,00"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kurangkan saldo awal dengan harga pembelian: $8.500 - 3.750$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$8.500 - 3.750 = 4.750$$\nSisa uang tabungan adalah **Rp4.750,00** (Opsi A)."
        },
        {
          "id": "sd4-b1-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah toko roti mengemas 8 kotak kue setiap hari. Jika setiap kotak berisi 24 kue, berapa butir kue yang diproduksi toko tersebut dalam 5 hari?",
          "options": [
            {
              "key": "A",
              "text": "940 kue"
            },
            {
              "key": "B",
              "text": "960 kue"
            },
            {
              "key": "C",
              "text": "920 kue"
            },
            {
              "key": "D",
              "text": "860 kue"
            }
          ],
          "correctAnswer": "B",
          "hint": "Hitung banyak kue per hari ($8 \\times 24$), lalu kalikan dengan 5 hari.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Produksi per hari: $8 \\times 24 = 192$ kue\n2. Dalam 5 hari: $192 \\times 5 = 960$ kue (Opsi B)."
        },
        {
          "id": "sd4-b1-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Koperasi sekolah menerima 120 buku tulis yang akan dibagikan sama banyak kepada 8 kelas. Berapa buku tulis yang diterima setiap kelas?",
          "options": [
            {
              "key": "A",
              "text": "14 buku"
            },
            {
              "key": "B",
              "text": "16 buku"
            },
            {
              "key": "C",
              "text": "12 buku"
            },
            {
              "key": "D",
              "text": "15 buku"
            }
          ],
          "correctAnswer": "D",
          "hint": "Gunakan pembagian: $120 : 8$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$120 : 8 = 15$$\nSetiap kelas menerima **15 buku tulis** (Opsi D)."
        },
        {
          "id": "sd4-b1-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bilangan kelipatan 6 yang berada di antara 30 dan 50 adalah...",
          "options": [
            {
              "key": "A",
              "text": "36, 40, 48"
            },
            {
              "key": "B",
              "text": "36, 42, 48"
            },
            {
              "key": "C",
              "text": "32, 38, 44"
            },
            {
              "key": "D",
              "text": "36, 42, 46"
            }
          ],
          "correctAnswer": "B",
          "hint": "Daftar kelipatan 6: $6 \\times 6 = 36$, $6 \\times 7 = 42$, $6 \\times 8 = 48$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nKelipatan 6 setelah 30 adalah $36, 42, 48$ (Opsi B)."
        },
        {
          "id": "sd4-b1-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Aku adalah bilangan empat angka. Digit ribuanku 5, digit ratusanku 0, digit puluhanku dua kali digit satuanku. Jika digit satuanku 3, bilangan berapakah aku?",
          "options": [
            {
              "key": "A",
              "text": "5.603"
            },
            {
              "key": "B",
              "text": "5.036"
            },
            {
              "key": "C",
              "text": "5.063"
            },
            {
              "key": "D",
              "text": "5.360"
            }
          ],
          "correctAnswer": "C",
          "hint": "Tentukan setiap nilai tempat: ribuan = 5, ratusan = 0, puluhan = $2 \\times 3 = 6$, satuan = 3.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Ribuan: 5\n2. Ratusan: 0\n3. Puluhan: $2 \\times 3 = 6$\n4. Satuan: 3\nMaka bilangan tersebut adalah **5.063** (Opsi C)."
        },
        {
          "id": "sd4-b1-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Tiga truk pengangkut beras memuat masing-masing 2.450 kg, 2.780 kg, dan 3.120 kg beras. Beras tersebut disimpan di gudang. Jika 4.600 kg beras sudah didistribusikan, sisa beras di gudang adalah...",
          "options": [
            {
              "key": "A",
              "text": "3.750 kg"
            },
            {
              "key": "B",
              "text": "3.650 kg"
            },
            {
              "key": "C",
              "text": "3.850 kg"
            },
            {
              "key": "D",
              "text": "3.550 kg"
            }
          ],
          "correctAnswer": "A",
          "hint": "Jumlahkan seluruh muatan beras ketiga truk, lalu kurangi dengan yang didistribusikan.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Total muatan: $2.450 + 2.780 + 3.120 = 8.350\\text{ kg}$\n2. Sisa beras: $8.350 - 4.600 = 3.750\\text{ kg}$ (Opsi A)."
        },
        {
          "id": "sd4-b1-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Panitia lomba menyediakan 1.000 botol minuman. Setiap pos minum diisi 135 botol. Jika terdapat 7 pos minum, berapa botol minuman yang tersisa di ruang panitia?",
          "options": [
            {
              "key": "A",
              "text": "65 botol"
            },
            {
              "key": "B",
              "text": "45 botol"
            },
            {
              "key": "C",
              "text": "55 botol"
            },
            {
              "key": "D",
              "text": "75 botol"
            }
          ],
          "correctAnswer": "C",
          "hint": "Hitung total air di pos minum ($7 \\times 135$), lalu kurangkan dari 1.000.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Total air di pos: $7 \\times 135 = 945$ botol\n2. Sisa: $1.000 - 945 = 55$ botol (Opsi C)."
        },
        {
          "id": "sd4-b1-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Paman membeli 4 karung pupuk seharga Rp48.000,00 per karung dan 3 sak semen seharga Rp65.000,00 per sak. Jika Paman membayar dengan 4 lembar uang Rp100.000,00, uang kembalian yang diterima Paman adalah...",
          "options": [
            {
              "key": "A",
              "text": "Rp15.000,00"
            },
            {
              "key": "B",
              "text": "Rp17.000,00"
            },
            {
              "key": "C",
              "text": "Rp12.000,00"
            },
            {
              "key": "D",
              "text": "Rp13.000,00"
            }
          ],
          "correctAnswer": "D",
          "hint": "Hitung total belanja: $(4 \\times 48.000) + (3 \\times 65.000)$, lalu kurangkan dari Rp400.000,00.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Pupuk: $4 \\times 48.000 = 192.000$\n2. Semen: $3 \\times 65.000 = 195.000$\n3. Total belanja: $192.000 + 195.000 = 387.000$\n4. Kembalian: $400.000 - 387.000 = 13.000$ (Opsi D)."
        },
        {
          "id": "sd4-b1-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Faktor persekutuan dari 24 dan 36 yang merupakan bilangan genap lebih dari 4 adalah...",
          "options": [
            {
              "key": "A",
              "text": "6 dan 8"
            },
            {
              "key": "B",
              "text": "8 dan 12"
            },
            {
              "key": "C",
              "text": "12 dan 18"
            },
            {
              "key": "D",
              "text": "6 dan 12"
            }
          ],
          "correctAnswer": "D",
          "hint": "Tentukan faktor persekutuan 24 dan 36: 1, 2, 3, 4, 6, 12. Pilih yang genap dan lebih dari 4.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nFaktor 24: 1, 2, 3, 4, 6, 8, 12, 24\nFaktor 36: 1, 2, 3, 4, 6, 9, 12, 18, 36\nFaktor persekutuan: 1, 2, 3, 4, 6, 12\nBilangan genap yang lebih dari 4 adalah **6 dan 12** (Opsi D)."
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
          {
            "label": "Pecahan Senilai",
            "formula": "\\frac{a}{b} = \\frac{a \\times k}{b \\times k}"
          },
          {
            "label": "Penjumlahan Penyebut Sama",
            "formula": "\\frac{a}{c} + \\frac{b}{c} = \\frac{a + b}{c}"
          }
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
            {
              "key": "A",
              "text": "$\\frac{2}{5}$"
            },
            {
              "key": "B",
              "text": "$\\frac{3}{6}$"
            },
            {
              "key": "C",
              "text": "$\\frac{3}{9}$"
            },
            {
              "key": "D",
              "text": "$\\frac{4}{10}$"
            }
          ],
          "correctAnswer": "C",
          "hint": "Kalikan pembilang dan penyebut dengan angka 3: $\\frac{1 \\times 3}{3 \\times 3}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{1 \\times 3}{3 \\times 3} = \\frac{3}{9}$$\nPecahan yang senilai adalah **$\\frac{3}{9}$** (Opsi C)."
        },
        {
          "id": "sd4-b2-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Bentuk paling sederhana dari pecahan $\\frac{6}{8}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\frac{2}{3}$"
            },
            {
              "key": "B",
              "text": "$\\frac{1}{2}$"
            },
            {
              "key": "C",
              "text": "$\\frac{3}{5}$"
            },
            {
              "key": "D",
              "text": "$\\frac{3}{4}$"
            }
          ],
          "correctAnswer": "D",
          "hint": "Bagi pembilang dan penyebut dengan angka 2.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{6 : 2}{8 : 2} = \\frac{3}{4}$$\nBentuk sederhananya adalah **$\\frac{3}{4}$** (Opsi D)."
        },
        {
          "id": "sd4-b2-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil dari operasi penjumlahan $\\frac{3}{7} + \\frac{2}{7}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\frac{5}{14}$"
            },
            {
              "key": "B",
              "text": "$\\frac{6}{7}$"
            },
            {
              "key": "C",
              "text": "$\\frac{5}{7}$"
            },
            {
              "key": "D",
              "text": "$\\frac{1}{7}$"
            }
          ],
          "correctAnswer": "C",
          "hint": "Penyebutnya sudah sama yaitu 7, jumlahkan pembilangnya: $3 + 2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{3}{7} + \\frac{2}{7} = \\frac{3 + 2}{7} = \\frac{5}{7}$$\nHasilnya adalah **$\\frac{5}{7}$** (Opsi C)."
        },
        {
          "id": "sd4-b2-4",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Tanda pembanding yang tepat untuk mengisi titik-titik pada $\\frac{3}{5} \\dots \\frac{2}{5}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": ">"
            },
            {
              "key": "B",
              "text": "<"
            },
            {
              "key": "C",
              "text": "="
            },
            {
              "key": "D",
              "text": "$\\le$"
            }
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
            {
              "key": "A",
              "text": "$\\frac{1}{6}$ bagian"
            },
            {
              "key": "B",
              "text": "$\\frac{2}{6}$ bagian"
            },
            {
              "key": "C",
              "text": "$\\frac{5}{6}$ bagian"
            },
            {
              "key": "D",
              "text": "$\\frac{4}{6}$ bagian"
            }
          ],
          "correctAnswer": "A",
          "hint": "Melon utuh $= \\frac{6}{6}$. Kurangkan dengan total yang dibagikan: $\\frac{6}{6} - (\\frac{2}{6} + \\frac{3}{6})$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Melon yang dibagikan: $\\frac{2}{6} + \\frac{3}{6} = \\frac{5}{6}$.\n2. Sisa melon: $\\frac{6}{6} - \\frac{5}{6} = \\frac{1}{6}$.\nSisa melon Ibu adalah **$\\frac{1}{6}$ bagian** (Opsi A)."
        },
        {
          "id": "sd4-b2-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bentuk pecahan paling sederhana dari $\\frac{12}{16}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{2}{3}"
            },
            {
              "key": "B",
              "text": "\\frac{6}{8}"
            },
            {
              "key": "C",
              "text": "\\frac{4}{5}"
            },
            {
              "key": "D",
              "text": "\\frac{3}{4}"
            }
          ],
          "correctAnswer": "D",
          "hint": "Bagi pembilang dan penyebut dengan FPB dari 12 dan 16 yaitu 4.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{12 : 4}{16 : 4} = \\frac{3}{4}$$\nBentuk paling sederhananya adalah **$\\frac{3}{4}$** (Opsi D)."
        },
        {
          "id": "sd4-b2-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Pecahan yang senilai dengan $\\frac{2}{5}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{4}{15}"
            },
            {
              "key": "B",
              "text": "\\frac{6}{15}"
            },
            {
              "key": "C",
              "text": "\\frac{5}{10}"
            },
            {
              "key": "D",
              "text": "\\frac{6}{10}"
            }
          ],
          "correctAnswer": "B",
          "hint": "Kalikan pembilang dan penyebut dengan bilangan yang sama: $\\frac{2 \\times 3}{5 \\times 3}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{2 \\times 3}{5 \\times 3} = \\frac{6}{15}$$\nPecahan yang senilai adalah **$\\frac{6}{15}$** (Opsi B)."
        },
        {
          "id": "sd4-b2-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil dari penjumlahan $\\frac{2}{7} + \\frac{3}{7}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{5}{14}"
            },
            {
              "key": "B",
              "text": "\\frac{6}{7}"
            },
            {
              "key": "C",
              "text": "\\frac{1}{7}"
            },
            {
              "key": "D",
              "text": "\\frac{5}{7}"
            }
          ],
          "correctAnswer": "D",
          "hint": "Karena penyebut sudah sama, cukup jumlahkan pembilangnya: $2 + 3 = 5$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{2}{7} + \\frac{3}{7} = \\frac{2 + 3}{7} = \\frac{5}{7}$$\nHasilnya adalah **$\\frac{5}{7}$** (Opsi D)."
        },
        {
          "id": "sd4-b2-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil pengurangan pecahan $\\frac{7}{9} - \\frac{4}{9}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{3}{0}"
            },
            {
              "key": "B",
              "text": "\\frac{11}{9}"
            },
            {
              "key": "C",
              "text": "\\frac{3}{9} = \\frac{1}{3}"
            },
            {
              "key": "D",
              "text": "\\frac{2}{9}"
            }
          ],
          "correctAnswer": "C",
          "hint": "Kurangkan pembilangnya: $7 - 4 = 3$, lalu sederhanakan $\\frac{3}{9}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{7 - 4}{9} = \\frac{3}{9} = \\frac{1}{3}$$\nHasilnya adalah **$\\frac{1}{3}$** (Opsi C)."
        },
        {
          "id": "sd4-b2-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bentuk pecahan campuran dari $\\frac{11}{4}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "3 \\frac{1}{4}"
            },
            {
              "key": "B",
              "text": "2 \\frac{3}{4}"
            },
            {
              "key": "C",
              "text": "2 \\frac{1}{4}"
            },
            {
              "key": "D",
              "text": "1 \\frac{7}{4}"
            }
          ],
          "correctAnswer": "B",
          "hint": "Bagi 11 dengan 4: $11 : 4 = 2$ sisa 3, sehingga menjadi $2 \\frac{3}{4}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$11 : 4 = 2 \\text{ sisa } 3 \\implies 2\\frac{3}{4}$$\nBentuk campurannya adalah **$2\\frac{3}{4}$** (Opsi B)."
        },
        {
          "id": "sd4-b2-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Ibu membeli semangka lalu memotongnya menjadi 8 bagian sama besar. Kakak memakan 2 potong dan Adik memakan 3 potong. Bagian semangka yang telah dimakan adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{3}{8}"
            },
            {
              "key": "B",
              "text": "\\frac{5}{8}"
            },
            {
              "key": "C",
              "text": "\\frac{6}{8}"
            },
            {
              "key": "D",
              "text": "\\frac{4}{8}"
            }
          ],
          "correctAnswer": "B",
          "hint": "Jumlahkan bagian Kakak dan Adik: $\\frac{2}{8} + \\frac{3}{8}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{2}{8} + \\frac{3}{8} = \\frac{5}{8}$$\nBagian yang telah dimakan adalah **$\\frac{5}{8}$** (Opsi B)."
        },
        {
          "id": "sd4-b2-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dari soal sebelumnya, sisa bagian semangka yang belum dimakan adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{3}{8}"
            },
            {
              "key": "B",
              "text": "\\frac{5}{8}"
            },
            {
              "key": "C",
              "text": "\\frac{2}{8}"
            },
            {
              "key": "D",
              "text": "\\frac{1}{8}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kurangkan 1 bagian utuh ($\\frac{8}{8}$) dengan bagian yang sudah dimakan ($\\frac{5}{8}$).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{8}{8} - \\frac{5}{8} = \\frac{3}{8}$$\nSisa semangka adalah **$\\frac{3}{8}$** (Opsi A)."
        },
        {
          "id": "sd4-b2-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bentuk desimal dari pecahan $\\frac{3}{4}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "0,50"
            },
            {
              "key": "B",
              "text": "0,25"
            },
            {
              "key": "C",
              "text": "0,75"
            },
            {
              "key": "D",
              "text": "0,34"
            }
          ],
          "correctAnswer": "C",
          "hint": "Ubah penyebut menjadi per 100 dengan mengalikan 25: $\\frac{3 \\times 25}{4 \\times 25} = \\frac{75}{100}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{3 \\times 25}{4 \\times 25} = \\frac{75}{100} = 0{,}75$$\nBentuk desimalnya adalah **0,75** (Opsi C)."
        },
        {
          "id": "sd4-b2-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bentuk pecahan persen dari $\\frac{1}{5}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "25%"
            },
            {
              "key": "B",
              "text": "20%"
            },
            {
              "key": "C",
              "text": "15%"
            },
            {
              "key": "D",
              "text": "10%"
            }
          ],
          "correctAnswer": "B",
          "hint": "Persen artinya per seratus: $\\frac{1}{5} \\times 100\\% = 20\\%$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{1}{5} \\times 100\\% = 20\\%$$\nBentuk persennya adalah **20%** (Opsi B)."
        },
        {
          "id": "sd4-b2-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Tanda pertidaksamaan yang tepat untuk mengisi $\\frac{3}{5} \\dots \\frac{4}{7}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "<"
            },
            {
              "key": "B",
              "text": "="
            },
            {
              "key": "C",
              "text": "\\le"
            },
            {
              "key": "D",
              "text": ">"
            }
          ],
          "correctAnswer": "D",
          "hint": "Samakan penyebut atau kali silang: $3 \\times 7 = 21$ dibandingkan $4 \\times 5 = 20$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nKali silang:\n- $3 \\times 7 = 21$\n- $4 \\times 5 = 20$\nKarena $21 > 20$, maka $\\frac{3}{5} > \\frac{4}{7}$ (Opsi D)."
        },
        {
          "id": "sd4-b2-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Ayah memiliki tali sepanjang $3\\frac{1}{2}$ meter. Ayah menggunakan tali tersebut sepanjang $1\\frac{1}{2}$ meter untuk mengikat kayu. Berapa meter sisa tali Ayah?",
          "options": [
            {
              "key": "A",
              "text": "1 meter"
            },
            {
              "key": "B",
              "text": "2,5 meter"
            },
            {
              "key": "C",
              "text": "1,5 meter"
            },
            {
              "key": "D",
              "text": "2 meter"
            }
          ],
          "correctAnswer": "D",
          "hint": "Kurangkan bilangan bulat dan pecahannya: $(3 - 1) + (\\frac{1}{2} - \\frac{1}{2})$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$3\\frac{1}{2} - 1\\frac{1}{2} = 2\\text{ meter}$$\nSisa tali Ayah adalah **2 meter** (Opsi D)."
        },
        {
          "id": "sd4-b2-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Urutan pecahan $\\frac{1}{2}$, $\\frac{3}{4}$, $\\frac{2}{5}$ dari yang terkecil ke terbesar adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{1}{2}, \\frac{2}{5}, \\frac{3}{4}"
            },
            {
              "key": "B",
              "text": "\\frac{2}{5}, \\frac{1}{2}, \\frac{3}{4}"
            },
            {
              "key": "C",
              "text": "\\frac{3}{4}, \\frac{1}{2}, \\frac{2}{5}"
            },
            {
              "key": "D",
              "text": "\\frac{2}{5}, \\frac{3}{4}, \\frac{1}{2}"
            }
          ],
          "correctAnswer": "B",
          "hint": "Ubah ke bentuk desimal: $\\frac{2}{5} = 0,4$, $\\frac{1}{2} = 0,5$, $\\frac{3}{4} = 0,75$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $\\frac{2}{5} = 0{,}40$\n2. $\\frac{1}{2} = 0{,}50$\n3. $\\frac{3}{4} = 0{,}75$\nUrutan naik: **$\\frac{2}{5}, \\frac{1}{2}, \\frac{3}{4}$** (Opsi B)."
        },
        {
          "id": "sd4-b2-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah botol berisi $\\frac{4}{5}$ liter minyak goreng. Ibu menuangkan $\\frac{1}{5}$ liter ke dalam wajan. Kemudian Bibi menambahkan $\\frac{2}{5}$ liter minyak ke botol tersebut. Berapa liter minyak dalam botol sekarang?",
          "options": [
            {
              "key": "A",
              "text": "1 liter"
            },
            {
              "key": "B",
              "text": "1 1/5 liter"
            },
            {
              "key": "C",
              "text": "3/5 liter"
            },
            {
              "key": "D",
              "text": "4/5 liter"
            }
          ],
          "correctAnswer": "A",
          "hint": "Operasikan berurutan: $\\frac{4}{5} - \\frac{1}{5} + \\frac{2}{5} = \\frac{5}{5} = 1$ liter.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{4 - 1 + 2}{5} = \\frac{5}{5} = 1\\text{ liter}$$\nMinyak di dalam botol adalah **1 liter** (Opsi A)."
        },
        {
          "id": "sd4-b2-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Siti mempunyai pita sepanjang $\\frac{7}{10}$ meter, sedangkan Dayu mempunyai pita sepanjang $\\frac{3}{5}$ meter. Selisih panjang pita Siti dan Dayu adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{1}{10} meter"
            },
            {
              "key": "B",
              "text": "\\frac{4}{10} meter"
            },
            {
              "key": "C",
              "text": "\\frac{2}{10} meter"
            },
            {
              "key": "D",
              "text": "\\frac{1}{5} meter"
            }
          ],
          "correctAnswer": "A",
          "hint": "Samakan penyebut Dayu: $\\frac{3}{5} = \\frac{6}{10}$. Selisih: $\\frac{7}{10} - \\frac{6}{10}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{7}{10} - \\frac{6}{10} = \\frac{1}{10}\\text{ meter}$$\nSelisihnya adalah **$\\frac{1}{10}$ meter** (Opsi A)."
        },
        {
          "id": "sd4-b2-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Di dalam keranjang terdapat 30 buah apel. Sebanyak $\\frac{2}{5}$ bagian dari apel tersebut berwarna merah dan sisanya berwarna hijau. Berapa banyak apel yang berwarna hijau?",
          "options": [
            {
              "key": "A",
              "text": "12 buah"
            },
            {
              "key": "B",
              "text": "15 buah"
            },
            {
              "key": "C",
              "text": "18 buah"
            },
            {
              "key": "D",
              "text": "20 buah"
            }
          ],
          "correctAnswer": "C",
          "hint": "Apel merah: $\\frac{2}{5} \\times 30 = 12$. Apel hijau: $30 - 12 = 18$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Apel merah: $\\frac{2}{5} \\times 30 = 12$ buah\n2. Apel hijau: $30 - 12 = 18$ buah (Opsi C)."
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
          {
            "label": "Pola Bilangan Bertambah",
            "formula": "U_n = U_{n-1} + b"
          },
          {
            "label": "Pola Bilangan Berkurang",
            "formula": "U_n = U_{n-1} - b"
          }
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
            {
              "key": "A",
              "text": "20"
            },
            {
              "key": "B",
              "text": "22"
            },
            {
              "key": "C",
              "text": "21"
            },
            {
              "key": "D",
              "text": "19"
            }
          ],
          "correctAnswer": "C",
          "hint": "Cari selisihnya: $9 - 5 = 4$. Tambahkan 4 ke angka 17.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Aturan pola: bertambah 4 ($+4$).\n2. Suku berikutnya: $17 + 4 = 21$.\nBilangan berikutnya adalah **21** (Opsi C)."
        },
        {
          "id": "sd4-b3-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Dua bilangan berikutnya dari pola bilangan mengecil $35, 30, 25, 20, \\dots$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "15 dan 5"
            },
            {
              "key": "B",
              "text": "10 dan 5"
            },
            {
              "key": "C",
              "text": "18 dan 16"
            },
            {
              "key": "D",
              "text": "15 dan 10"
            }
          ],
          "correctAnswer": "D",
          "hint": "Aturan polanya berkurang 5: $20 - 5 = 15$, lalu $15 - 5 = 10$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Aturan pola: berkurang 5 ($-5$).\n2. Suku berikutnya: $20 - 5 = 15$ dan $15 - 5 = 10$.\nDua bilangan berikutnya adalah **15 dan 10** (Opsi D)."
        },
        {
          "id": "sd4-b3-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Perhatikan barisan bilangan berikut: $2, 6, 10, \\dots, 18, 22$. Bilangan yang tepat untuk mengisi titik-titik tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "12"
            },
            {
              "key": "B",
              "text": "14"
            },
            {
              "key": "C",
              "text": "16"
            },
            {
              "key": "D",
              "text": "15"
            }
          ],
          "correctAnswer": "B",
          "hint": "Selisih polanya adalah $+4$: $10 + 4 = 14$ dan $14 + 4 = 18$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Beda pola: $6 - 2 = 4$ dan $10 - 6 = 4$.\n2. Angka pengisi titik-titik: $10 + 4 = 14$.\nBilangan yang tepat adalah **14** (Opsi B)."
        },
        {
          "id": "sd4-b3-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Lani menyusun kelereng membentuk segitiga: baris pertama 1 kelereng, baris kedua 3 kelereng, baris ketiga 5 kelereng, baris keempat 7 kelereng. Banyak kelereng pada baris keenam adalah...",
          "options": [
            {
              "key": "A",
              "text": "9 kelereng"
            },
            {
              "key": "B",
              "text": "13 kelereng"
            },
            {
              "key": "C",
              "text": "11 kelereng"
            },
            {
              "key": "D",
              "text": "15 kelereng"
            }
          ],
          "correctAnswer": "C",
          "hint": "Barisan bilangan ganjil bertambah 2: baris kelima $= 7 + 2 = 9$, baris keenam $= 9 + 2 = 11$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Pola bilangan ganjil: $1, 3, 5, 7, \\dots$ (bertambah 2).\n2. Baris ke-5: $7 + 2 = 9$.\n3. Baris ke-6: $9 + 2 = 11$.\nBanyak kelereng pada baris keenam adalah **11 kelereng** (Opsi C)."
        },
        {
          "id": "sd4-b3-5",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Pada barisan bilangan $2, 4, 6, 8, \\dots$, pola yang digunakan adalah...",
          "options": [
            {
              "key": "A",
              "text": "Berkurang 2"
            },
            {
              "key": "B",
              "text": "Dikalikan 2"
            },
            {
              "key": "C",
              "text": "Bertambah 2"
            },
            {
              "key": "D",
              "text": "Bertambah 4"
            }
          ],
          "correctAnswer": "C",
          "hint": "Perhatikan selisih antar suku yang berurutan: $4 - 2 = 2, 6 - 4 = 2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nSelisih tiap suku adalah $+2$, jadi polanya **bertambah 2** (Opsi C)."
        },
        {
          "id": "sd4-b3-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dua suku berikutnya dari barisan bilangan $5, 10, 15, 20, \\dots$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "25 dan 35"
            },
            {
              "key": "B",
              "text": "25 dan 30"
            },
            {
              "key": "C",
              "text": "22 dan 27"
            },
            {
              "key": "D",
              "text": "30 dan 35"
            }
          ],
          "correctAnswer": "B",
          "hint": "Pola bilangan kelipatan 5 atau bertambah 5 secara berulang.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n- $20 + 5 = 25$\n- $25 + 5 = 30$\nDua suku berikutnya adalah **25 dan 30** (Opsi B)."
        },
        {
          "id": "sd4-b3-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bilangan yang tepat untuk melengkapi titik-titik pada barisan $12, 16, \\dots, 24, 28$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "20"
            },
            {
              "key": "B",
              "text": "18"
            },
            {
              "key": "C",
              "text": "22"
            },
            {
              "key": "D",
              "text": "19"
            }
          ],
          "correctAnswer": "A",
          "hint": "Perhatikan beda suku: $16 - 12 = 4$, maka suku ketiga adalah $16 + 4$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$16 + 4 = 20$$\nBilangannya adalah **20** (Opsi A)."
        },
        {
          "id": "sd4-b3-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Perhatikan barisan bilangan yang mengecil: $50, 45, 40, \\dots, 30$. Suku yang hilang adalah...",
          "options": [
            {
              "key": "A",
              "text": "36"
            },
            {
              "key": "B",
              "text": "38"
            },
            {
              "key": "C",
              "text": "32"
            },
            {
              "key": "D",
              "text": "35"
            }
          ],
          "correctAnswer": "D",
          "hint": "Pola berkurang 5: $40 - 5 = 35$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$40 - 5 = 35$$\nBilangannya adalah **35** (Opsi D)."
        },
        {
          "id": "sd4-b3-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Pada susunan batang korek api, pola ke-1 butuh 3 batang, pola ke-2 butuh 5 batang, pola ke-3 butuh 7 batang. Banyak batang korek api pada pola ke-4 adalah...",
          "options": [
            {
              "key": "A",
              "text": "8 batang"
            },
            {
              "key": "B",
              "text": "10 batang"
            },
            {
              "key": "C",
              "text": "11 batang"
            },
            {
              "key": "D",
              "text": "9 batang"
            }
          ],
          "correctAnswer": "D",
          "hint": "Pola bertambah 2: $3, 5, 7, 9$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$7 + 2 = 9$$\nPola ke-4 membutuhkan **9 batang korek api** (Opsi D)."
        },
        {
          "id": "sd4-b3-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Suku ke-6 dari pola bilangan ganjil $1, 3, 5, 7, \\dots$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "9"
            },
            {
              "key": "B",
              "text": "11"
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
          "correctAnswer": "B",
          "hint": "Rumus suku ke-n bilangan ganjil adalah $2n - 1$. Untuk $n = 6$: $2(6) - 1 = 11$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nBarisan: 1, 3, 5, 7, 9, 11\nSuku ke-6 adalah **11** (Opsi B)."
        },
        {
          "id": "sd4-b3-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Rani menabung setiap hari dengan pola: hari ke-1 Rp1.000, hari ke-2 Rp1.500, hari ke-3 Rp2.000, dan seterusnya. Berapa uang yang ditabung Rani pada hari ke-5?",
          "options": [
            {
              "key": "A",
              "text": "Rp2.500,00"
            },
            {
              "key": "B",
              "text": "Rp3.500,00"
            },
            {
              "key": "C",
              "text": "Rp4.000,00"
            },
            {
              "key": "D",
              "text": "Rp3.000,00"
            }
          ],
          "correctAnswer": "D",
          "hint": "Pola bertambah Rp500,00 setiap hari: hari ke-4 Rp2.500, hari ke-5 Rp3.000.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n- Hari 4: $2.000 + 500 = 2.500$\n- Hari 5: $2.500 + 500 = 3.000$\nUang tabungan hari ke-5 adalah **Rp3.000,00** (Opsi D)."
        },
        {
          "id": "sd4-b3-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Lampu hias berkedip dengan urutan warna: Merah, Kuning, Hijau, Biru, Merah, Kuning, Hijau, Biru... Warna lampu pada urutan ke-10 adalah...",
          "options": [
            {
              "key": "A",
              "text": "Kuning"
            },
            {
              "key": "B",
              "text": "Merah"
            },
            {
              "key": "C",
              "text": "Hijau"
            },
            {
              "key": "D",
              "text": "Biru"
            }
          ],
          "correctAnswer": "A",
          "hint": "Pola berulang setiap 4 warna. Bagi $10 : 4 = 2$ sisa 2. Urutan ke-2 adalah Kuning.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nSiklus 4 warna: 1 Merah, 2 Kuning, 3 Hijau, 4 Biru.\n$10 = (2 \\times 4) + 2 \\implies$ sisa 2 = **Kuning** (Opsi A)."
        },
        {
          "id": "sd4-b3-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Seorang pedagang menata jeruk membentuk piramida mini: baris paling atas 1 jeruk, baris kedua 3 jeruk, baris ketiga 5 jeruk, baris keempat 7 jeruk. Berapa total jeruk pada keempat baris tersebut?",
          "options": [
            {
              "key": "A",
              "text": "15 jeruk"
            },
            {
              "key": "B",
              "text": "18 jeruk"
            },
            {
              "key": "C",
              "text": "16 jeruk"
            },
            {
              "key": "D",
              "text": "14 jeruk"
            }
          ],
          "correctAnswer": "C",
          "hint": "Jumlahkan seluruhnya: $1 + 3 + 5 + 7 = 16$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$1 + 3 + 5 + 7 = 16$$\nTotalnya adalah **16 jeruk** (Opsi C)."
        },
        {
          "id": "sd4-b3-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Suku ke-7 dari barisan bilangan $3, 7, 11, 15, \\dots$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "27"
            },
            {
              "key": "B",
              "text": "25"
            },
            {
              "key": "C",
              "text": "29"
            },
            {
              "key": "D",
              "text": "31"
            }
          ],
          "correctAnswer": "A",
          "hint": "Beda pola adalah $+4$. Lanjutkan hingga suku ke-7.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nS1=3, S2=7, S3=11, S4=15, S5=19, S6=23, S7=27.\nSuku ke-7 adalah **27** (Opsi A)."
        },
        {
          "id": "sd4-b3-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Tiga suku berikutnya dari barisan berkurang $100, 92, 84, 76, \\dots$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "68, 62, 54"
            },
            {
              "key": "B",
              "text": "70, 62, 54"
            },
            {
              "key": "C",
              "text": "66, 58, 50"
            },
            {
              "key": "D",
              "text": "68, 60, 52"
            }
          ],
          "correctAnswer": "D",
          "hint": "Pola berkurang 8 secara konsisten.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n- $76 - 8 = 68$\n- $68 - 8 = 60$\n- $60 - 8 = 52$\nTiga suku berikutnya adalah **68, 60, 52** (Opsi D)."
        },
        {
          "id": "sd4-b3-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Perhatikan pola bilangan bertingkat: $1, 2, 4, 7, 11, \\dots$. Suku berikutnya adalah...",
          "options": [
            {
              "key": "A",
              "text": "16"
            },
            {
              "key": "B",
              "text": "15"
            },
            {
              "key": "C",
              "text": "17"
            },
            {
              "key": "D",
              "text": "18"
            }
          ],
          "correctAnswer": "A",
          "hint": "Perhatikan penambahannya: $+1, +2, +3, +4, +5$. Maka $11 + 5 = 16$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nSelisih bertambah 1 setiap langkah: $11 + 5 = 16$ (Opsi A)."
        },
        {
          "id": "sd4-b3-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Budi menyusun ubin hitam dan putih. Pola ubin putih mengikuti barisan: $4, 8, 12, 16, \\dots$. Berapakah banyak ubin putih pada pola ke-10?",
          "options": [
            {
              "key": "A",
              "text": "36 ubin"
            },
            {
              "key": "B",
              "text": "40 ubin"
            },
            {
              "key": "C",
              "text": "44 ubin"
            },
            {
              "key": "D",
              "text": "48 ubin"
            }
          ],
          "correctAnswer": "B",
          "hint": "Gunakan rumus kelipatan 4: $4 \\times n$. Untuk $n = 10$: $4 \\times 10 = 40$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$4 \\times 10 = 40$$\nBanyak ubin putih pada pola ke-10 adalah **40 ubin** (Opsi B)."
        },
        {
          "id": "sd4-b3-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Jumlah 5 suku pertama dari barisan bilangan $2, 5, 8, 11, 14$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "40"
            },
            {
              "key": "B",
              "text": "38"
            },
            {
              "key": "C",
              "text": "42"
            },
            {
              "key": "D",
              "text": "45"
            }
          ],
          "correctAnswer": "A",
          "hint": "Jumlahkan kelima bilangan tersebut: $2 + 5 + 8 + 11 + 14$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$2 + 5 + 8 + 11 + 14 = 40$$\nJumlahnya adalah **40** (Opsi A)."
        },
        {
          "id": "sd4-b3-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dalam sebuah gedung pertemuan, baris pertama memiliki 12 kursi, baris kedua 15 kursi, baris ketiga 18 kursi, dan seterusnya bertambah 3 kursi setiap baris. Berapa banyak kursi pada baris ke-8?",
          "options": [
            {
              "key": "A",
              "text": "30 kursi"
            },
            {
              "key": "B",
              "text": "36 kursi"
            },
            {
              "key": "C",
              "text": "33 kursi"
            },
            {
              "key": "D",
              "text": "27 kursi"
            }
          ],
          "correctAnswer": "C",
          "hint": "Kursi baris ke-n: $12 + (n - 1) \\times 3$. Untuk $n = 8$: $12 + 7 \\times 3 = 33$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$12 + (7 \\times 3) = 12 + 21 = 33$$\nBanyak kursi baris ke-8 adalah **33 kursi** (Opsi C)."
        },
        {
          "id": "sd4-b3-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Jika pola bilangan $a, b, c, \\dots$ memiliki aturan: 'suku berikutnya diperoleh dari dua kali suku sebelumnya dikurangi 1'. Jika suku pertama adalah 3, maka suku ke-4 adalah...",
          "options": [
            {
              "key": "A",
              "text": "9"
            },
            {
              "key": "B",
              "text": "17"
            },
            {
              "key": "C",
              "text": "33"
            },
            {
              "key": "D",
              "text": "15"
            }
          ],
          "correctAnswer": "B",
          "hint": "Hitung berurutan: S1 = 3, S2 = $2(3) - 1 = 5$, S3 = $2(5) - 1 = 9$, S4 = $2(9) - 1 = 17$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n- Suku 1 = 3\n- Suku 2 = $2 \\times 3 - 1 = 5$\n- Suku 3 = $2 \\times 5 - 1 = 9$\n- Suku 4 = $2 \\times 9 - 1 = 17$ (Opsi B)."
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
          {
            "label": "Luas Petak Satuan",
            "formula": "\\text{Luas} = \\text{Jumlah Petak Kotak Persegi}"
          },
          {
            "label": "Volume Kubus Satuan",
            "formula": "V = p \\times l \\times t \\text{ kubus satuan}"
          }
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
            {
              "key": "A",
              "text": "20 petak satuan"
            },
            {
              "key": "B",
              "text": "10 petak satuan"
            },
            {
              "key": "C",
              "text": "12 petak satuan"
            },
            {
              "key": "D",
              "text": "24 petak satuan"
            }
          ],
          "correctAnswer": "D",
          "hint": "Kalikan panjang petak dengan lebar petak: $6 \\times 4$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Luas} = 6 \\times 4 = 24\\text{ petak satuan}$$\nLuasnya adalah **24 petak satuan** (Opsi D)."
        },
        {
          "id": "sd4-b4-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Sebuah wadah berbentuk balok diisi penuh dengan kubus mainan. Jika alas wadah memuat 12 kubus dan disusun setinggi 3 tumpukan, volume wadah tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "15 kubus satuan"
            },
            {
              "key": "B",
              "text": "24 kubus satuan"
            },
            {
              "key": "C",
              "text": "48 kubus satuan"
            },
            {
              "key": "D",
              "text": "36 kubus satuan"
            }
          ],
          "correctAnswer": "D",
          "hint": "Kalikan luas alas (12) dengan tinggi tumpukan (3): $12 \\times 3$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Volume} = 12 \\times 3 = 36\\text{ kubus satuan}$$\nVolumenya adalah **36 kubus satuan** (Opsi D)."
        },
        {
          "id": "sd4-b4-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah ember dapat diisi penuh oleh 8 gayung air. Jika 1 gayung air sama dengan 2 gelas air, maka sebuah ember dapat diisi penuh oleh berapa gelas air?",
          "options": [
            {
              "key": "A",
              "text": "10 gelas air"
            },
            {
              "key": "B",
              "text": "12 gelas air"
            },
            {
              "key": "C",
              "text": "16 gelas air"
            },
            {
              "key": "D",
              "text": "14 gelas air"
            }
          ],
          "correctAnswer": "C",
          "hint": "Kalikan banyak gayung dengan isi gelas per gayung: $8 \\times 2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Volume} = 8 \\times 2 = 16\\text{ gelas air}$$\nDiperlukan **16 gelas air** (Opsi C)."
        },
        {
          "id": "sd4-b4-4",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Luas selembar kertas gambar adalah $200\\text{ cm}^2$. Kertas tersebut dipotong menjadi 4 bagian yang sama luasnya. Luas setiap potongan kertas adalah...",
          "options": [
            {
              "key": "A",
              "text": "$40\\text{ cm}^2$"
            },
            {
              "key": "B",
              "text": "$50\\text{ cm}^2$"
            },
            {
              "key": "C",
              "text": "$25\\text{ cm}^2$"
            },
            {
              "key": "D",
              "text": "$100\\text{ cm}^2$"
            }
          ],
          "correctAnswer": "B",
          "hint": "Bagi luas kertas total dengan 4: $200 : 4$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Luas} = \\frac{200}{4} = 50\\text{ cm}^2$$\nLuas setiap potongan adalah **$50\\text{ cm}^2$** (Opsi B)."
        },
        {
          "id": "sd4-b4-5",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah lantai ruangan berukuran panjang 5 meter dan lebar 4 meter akan ditutup dengan ubin karpet berukuran $1\\text{ m} \\times 1\\text{ m}$. Banyak ubin karpet yang dibutuhkan adalah...",
          "options": [
            {
              "key": "A",
              "text": "20 ubin"
            },
            {
              "key": "B",
              "text": "18 ubin"
            },
            {
              "key": "C",
              "text": "24 ubin"
            },
            {
              "key": "D",
              "text": "16 ubin"
            }
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
            {
              "key": "A",
              "text": "8 kubus satuan"
            },
            {
              "key": "B",
              "text": "4 kubus satuan"
            },
            {
              "key": "C",
              "text": "16 kubus satuan"
            },
            {
              "key": "D",
              "text": "2 kubus satuan"
            }
          ],
          "correctAnswer": "B",
          "hint": "Gunakan $V = p \\times l \\times t$: $64 = 4 \\times 4 \\times t = 16 \\times t$. Bagi 64 dengan 16.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$64 = 16 \\times t \\implies t = \\frac{64}{16} = 4\\text{ kubus satuan}$$\nTinggi kotak adalah **4 kubus satuan** (Opsi B)."
        },
        {
          "id": "sd4-b4-7",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dua buah botol sirup berukuran sama dapat mengisi penuh sebuah teko besar. Jika sebuah teko besar dapat mengisi 6 cangkir, maka 1 botol sirup setara dengan berapa cangkir?",
          "options": [
            {
              "key": "A",
              "text": "2 cangkir"
            },
            {
              "key": "B",
              "text": "3 cangkir"
            },
            {
              "key": "C",
              "text": "4 cangkir"
            },
            {
              "key": "D",
              "text": "6 cangkir"
            }
          ],
          "correctAnswer": "B",
          "hint": "2 botol $= 6$ cangkir. Maka 1 botol $= 6 : 2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Kapasitas 1 botol} = \\frac{6}{2} = 3\\text{ cangkir}$$\nHasilnya adalah **3 cangkir** (Opsi B)."
        },
        {
          "id": "sd4-b4-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah persegi panjang memiliki panjang 15 cm dan lebar 8 cm. Luas persegi panjang tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "120 cm²"
            },
            {
              "key": "B",
              "text": "110 cm²"
            },
            {
              "key": "C",
              "text": "125 cm²"
            },
            {
              "key": "D",
              "text": "46 cm²"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan rumus luas persegi panjang: $L = p \\times l = 15 \\times 8$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$L = 15 \\times 8 = 120\\text{ cm}^2$$\nLuasnya adalah **120 cm²** (Opsi A)."
        },
        {
          "id": "sd4-b4-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah persegi memiliki panjang sisi 12 cm. Luas persegi tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "124 cm²"
            },
            {
              "key": "B",
              "text": "144 cm²"
            },
            {
              "key": "C",
              "text": "48 cm²"
            },
            {
              "key": "D",
              "text": "164 cm²"
            }
          ],
          "correctAnswer": "B",
          "hint": "Rumus luas persegi: $L = s \\times s = 12 \\times 12$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$L = 12 \\times 12 = 144\\text{ cm}^2$$\nLuasnya adalah **144 cm²** (Opsi B)."
        },
        {
          "id": "sd4-b4-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Luas sebuah persegi panjang adalah 84 cm². Jika lebarnya 7 cm, maka panjangnya adalah...",
          "options": [
            {
              "key": "A",
              "text": "14 cm"
            },
            {
              "key": "B",
              "text": "11 cm"
            },
            {
              "key": "C",
              "text": "12 cm"
            },
            {
              "key": "D",
              "text": "13 cm"
            }
          ],
          "correctAnswer": "C",
          "hint": "Panjang = Luas : lebar $= 84 : 7$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$p = 84 : 7 = 12\\text{ cm}$$\nPanjangnya adalah **12 cm** (Opsi C)."
        },
        {
          "id": "sd4-b4-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah kubus tersusun dari kubus-kubus satuan. Jika panjang rusuknya 4 kubus satuan, volume kubus tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "16 kubus satuan"
            },
            {
              "key": "B",
              "text": "48 kubus satuan"
            },
            {
              "key": "C",
              "text": "64 kubus satuan"
            },
            {
              "key": "D",
              "text": "32 kubus satuan"
            }
          ],
          "correctAnswer": "C",
          "hint": "Volume kubus: $s \\times s \\times s = 4 \\times 4 \\times 4$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$V = 4 \\times 4 \\times 4 = 64\\text{ kubus satuan}$$\nVolumenya adalah **64 kubus satuan** (Opsi C)."
        },
        {
          "id": "sd4-b4-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah balok memiliki panjang 6 cm, lebar 4 cm, dan tinggi 5 cm. Volume balok tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "100 cm³"
            },
            {
              "key": "B",
              "text": "120 cm³"
            },
            {
              "key": "C",
              "text": "150 cm³"
            },
            {
              "key": "D",
              "text": "60 cm³"
            }
          ],
          "correctAnswer": "B",
          "hint": "Volume balok: $V = p \\times l \\times t = 6 \\times 4 \\times 5$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$V = 6 \\times 4 \\times 5 = 120\\text{ cm}^3$$\nVolumenya adalah **120 cm³** (Opsi B)."
        },
        {
          "id": "sd4-b4-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Ibu menuangkan 3 botol air mineral ke dalam teko. Setiap botol berisi 500 mL. Berapa liter volume air di dalam teko tersebut?",
          "options": [
            {
              "key": "A",
              "text": "1,2 liter"
            },
            {
              "key": "B",
              "text": "1,8 liter"
            },
            {
              "key": "C",
              "text": "2,0 liter"
            },
            {
              "key": "D",
              "text": "1,5 liter"
            }
          ],
          "correctAnswer": "D",
          "hint": "Hitung total mL: $3 \\times 500 = 1.500$ mL, lalu ubah ke liter ($1.500 : 1.000$).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Total volume: $3 \\times 500 = 1.500\\text{ mL}$\n2. Konversi ke liter: $1.500 : 1.000 = 1{,}5\\text{ liter}$ (Opsi D)."
        },
        {
          "id": "sd4-b4-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Kamar tidur berukuran panjang 4 meter dan lebar 3 meter akan dipasangi ubin berukuran $1\\text{ m} \\times 1\\text{ m}$. Banyak ubin yang dibutuhkan adalah...",
          "options": [
            {
              "key": "A",
              "text": "12 ubin"
            },
            {
              "key": "B",
              "text": "14 ubin"
            },
            {
              "key": "C",
              "text": "10 ubin"
            },
            {
              "key": "D",
              "text": "7 ubin"
            }
          ],
          "correctAnswer": "A",
          "hint": "Banyak ubin = Luas kamar : Luas ubin $= (4 \\times 3) : (1 \\times 1)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Banyak ubin} = 12 : 1 = 12\\text{ ubin}$$\nDibutuhkan **12 ubin** (Opsi A)."
        },
        {
          "id": "sd4-b4-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah wadah berbentuk balok memiliki volume 240 cm³. Jika panjangnya 8 cm dan lebarnya 6 cm, maka tinggi wadah tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "6 cm"
            },
            {
              "key": "B",
              "text": "4 cm"
            },
            {
              "key": "C",
              "text": "8 cm"
            },
            {
              "key": "D",
              "text": "5 cm"
            }
          ],
          "correctAnswer": "D",
          "hint": "Tinggi = Volume : $(p \\times l) = 240 : (8 \\times 6)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$t = 240 : 48 = 5\\text{ cm}$$\nTingginya adalah **5 cm** (Opsi D)."
        },
        {
          "id": "sd4-b4-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Pak Rudi memiliki sebidang kebun berbentuk persegi panjang berukuran $20\\text{ m} \\times 15\\text{ m}$. Di tengah kebun dibuat kolam ikan berbentuk persegi dengan sisi 5 meter. Berapa luas kebun yang tersisa untuk ditanami sayur?",
          "options": [
            {
              "key": "A",
              "text": "275 m²"
            },
            {
              "key": "B",
              "text": "250 m²"
            },
            {
              "key": "C",
              "text": "280 m²"
            },
            {
              "key": "D",
              "text": "300 m²"
            }
          ],
          "correctAnswer": "A",
          "hint": "Luas sisa = Luas kebun - Luas kolam ikan $= (20 \\times 15) - (5 \\times 5)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Luas kebun: $20 \\times 15 = 300\\text{ m}^2$\n2. Luas kolam: $5 \\times 5 = 25\\text{ m}^2$\n3. Luas sisa: $300 - 25 = 275\\text{ m}^2$ (Opsi A)."
        },
        {
          "id": "sd4-b4-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah akuarium berbentuk balok memiliki ukuran panjang 50 cm, lebar 30 cm, dan tinggi 40 cm. Jika akuarium tersebut baru terisi air setengah bagian, berapa cm³ air yang ada di dalam akuarium?",
          "options": [
            {
              "key": "A",
              "text": "60.000 cm³"
            },
            {
              "key": "B",
              "text": "15.000 cm³"
            },
            {
              "key": "C",
              "text": "45.000 cm³"
            },
            {
              "key": "D",
              "text": "30.000 cm³"
            }
          ],
          "correctAnswer": "D",
          "hint": "Volume penuh = $50 \\times 30 \\times 40 = 60.000$ cm³. Setengahnya $= 60.000 : 2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$V = \\frac{1}{2} \\times (50 \\times 30 \\times 40) = 30.000\\text{ cm}^3$$\nVolume air adalah **30.000 cm³** (Opsi D)."
        },
        {
          "id": "sd4-b4-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dua buah kubus memiliki perbandingan panjang rusuk 1 : 2. Jika panjang rusuk kubus kecil adalah 3 cm, berapakah volume kubus besar?",
          "options": [
            {
              "key": "A",
              "text": "54 cm³"
            },
            {
              "key": "B",
              "text": "108 cm³"
            },
            {
              "key": "C",
              "text": "216 cm³"
            },
            {
              "key": "D",
              "text": "72 cm³"
            }
          ],
          "correctAnswer": "C",
          "hint": "Rusuk kubus besar = $2 \\times 3 = 6$ cm. Volume kubus besar = $6 \\times 6 \\times 6$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$V = 6 \\times 6 \\times 6 = 216\\text{ cm}^3$$\nVolumenya adalah **216 cm³** (Opsi C)."
        },
        {
          "id": "sd4-b4-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Lantai sebuah aula berukuran $10\\text{ m} \\times 8\\text{ m}$ akan ditutup karpet berbentuk persegi dengan sisi 2 meter. Berapa banyak karpet yang diperlukan agar seluruh lantai tertutup rapi tanpa tumpang tindih?",
          "options": [
            {
              "key": "A",
              "text": "25 karpet"
            },
            {
              "key": "B",
              "text": "18 karpet"
            },
            {
              "key": "C",
              "text": "20 karpet"
            },
            {
              "key": "D",
              "text": "40 karpet"
            }
          ],
          "correctAnswer": "C",
          "hint": "Luas aula $= 80\\text{ m}^2$. Luas 1 karpet $= 4\\text{ m}^2$. Banyak karpet $= 80 : 4$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Banyak karpet} = \\frac{10 \\times 8}{2 \\times 2} = \\frac{80}{4} = 20\\text{ karpet}$$\nDibutuhkan **20 karpet** (Opsi C)."
        },
        {
          "id": "sd4-b4-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah bak mandi berbentuk kubus dengan panjang rusuk bagian dalam 80 cm terisi air penuh. Jika air tersebut digunakan mandi sebanyak 112.000 cm³, berapakah sisa air di dalam bak mandi dalam satuan liter?",
          "options": [
            {
              "key": "A",
              "text": "400 liter"
            },
            {
              "key": "B",
              "text": "412 liter"
            },
            {
              "key": "C",
              "text": "380 liter"
            },
            {
              "key": "D",
              "text": "512 liter"
            }
          ],
          "correctAnswer": "A",
          "hint": "Volume kubus $= 80^3 = 512.000\\text{ cm}^3$. Sisa $= 512.000 - 112.000 = 400.000\\text{ cm}^3 = 400\\text{ liter}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Volume total: $80 \\times 80 \\times 80 = 512.000\\text{ cm}^3$\n2. Sisa volume: $512.000 - 112.000 = 400.000\\text{ cm}^3$\n3. Ubah ke liter ($1\\text{ liter} = 1.000\\text{ cm}^3$): $400.000 : 1.000 = 400\\text{ liter}$ (Opsi A)."
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
          {
            "label": "Jumlah Sudut Segitiga",
            "formula": "\\angle A + \\angle B + \\angle C = 180^\\circ"
          },
          {
            "label": "Jumlah Sudut Segiempat",
            "formula": "\\text{Total Sudut} = 360^\\circ"
          }
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
            {
              "key": "A",
              "text": "Segitiga sama sisi"
            },
            {
              "key": "B",
              "text": "Segitiga sama kaki"
            },
            {
              "key": "C",
              "text": "Segitiga siku-siku"
            },
            {
              "key": "D",
              "text": "Segitiga sembarang"
            }
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
            {
              "key": "A",
              "text": "Dua persegi panjang"
            },
            {
              "key": "B",
              "text": "Dua segitiga sama sisi"
            },
            {
              "key": "C",
              "text": "Dua trapesium"
            },
            {
              "key": "D",
              "text": "Dua segitiga siku-siku sama kaki"
            }
          ],
          "correctAnswer": "D",
          "hint": "Sudut persegi adalah siku-siku ($90^\\circ$) dan kedua sisinya sama panjang.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nDiagonal persegi membagi sudut $90^\\circ$ dan menghubungkan dua sisi yang sama panjang, menghasilkan **dua segitiga siku-siku sama kaki** (Opsi D)."
        },
        {
          "id": "sd4-b5-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Banyaknya sudut siku-siku yang dimiliki oleh sebuah persegi panjang adalah...",
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
              "text": "3"
            },
            {
              "key": "D",
              "text": "0"
            }
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
            {
              "key": "A",
              "text": "Persegi panjang"
            },
            {
              "key": "B",
              "text": "Jajar genjang"
            },
            {
              "key": "C",
              "text": "Trapesium"
            },
            {
              "key": "D",
              "text": "Belah ketupat"
            }
          ],
          "correctAnswer": "D",
          "hint": "Keempat sisi luarnya memiliki panjang yang sama karena berasal dari kaki-kaki segitiga yang sama.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nKarena keempat sisi luarnya sama panjang dan alas persekutuan menjadi diagonalnya, bangun yang terbentuk adalah **belah ketupat** (Opsi D)."
        },
        {
          "id": "sd4-b5-5",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Bangun datar yang memiliki 3 sisi dan 3 sudut disebut...",
          "options": [
            {
              "key": "A",
              "text": "Segitiga"
            },
            {
              "key": "B",
              "text": "Segiempat"
            },
            {
              "key": "C",
              "text": "Lingkaran"
            },
            {
              "key": "D",
              "text": "Jajargenjang"
            }
          ],
          "correctAnswer": "A",
          "hint": "Bangun tertutup bersisi tiga disebut segitiga.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nBangun datar bersisi 3 adalah **segitiga** (Opsi A)."
        },
        {
          "id": "sd4-b5-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Segitiga yang ketiga sisinya sama panjang disebut segitiga...",
          "options": [
            {
              "key": "A",
              "text": "Sama kaki"
            },
            {
              "key": "B",
              "text": "Siku-siku"
            },
            {
              "key": "C",
              "text": "Sembarang"
            },
            {
              "key": "D",
              "text": "Sama sisi"
            }
          ],
          "correctAnswer": "D",
          "hint": "Jika ketiga sisi memiliki panjang sama, maka disebut sama sisi.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nSegitiga dengan tiga sisi sama panjang adalah **segitiga sama sisi** (Opsi D)."
        },
        {
          "id": "sd4-b5-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jumlah besar seluruh sudut di dalam sebuah segitiga adalah...",
          "options": [
            {
              "key": "A",
              "text": "360°"
            },
            {
              "key": "B",
              "text": "180°"
            },
            {
              "key": "C",
              "text": "90°"
            },
            {
              "key": "D",
              "text": "270°"
            }
          ],
          "correctAnswer": "B",
          "hint": "Total ketiga sudut segitiga selalu sama dengan sudut lurus ($180^\\circ$).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nJumlah sudut segitiga $= 180^\\circ$ (Opsi B)."
        },
        {
          "id": "sd4-b5-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bangun datar segiempat yang memiliki sepasang sisi sejajar yang tidak sama panjang adalah...",
          "options": [
            {
              "key": "A",
              "text": "Jajargenjang"
            },
            {
              "key": "B",
              "text": "Belah ketupat"
            },
            {
              "key": "C",
              "text": "Trapesium"
            },
            {
              "key": "D",
              "text": "Layang-layang"
            }
          ],
          "correctAnswer": "C",
          "hint": "Ciri khas trapesium adalah memiliki tepat sepasang sisi berhadapan yang sejajar.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nBangun datar dengan sepasang sisi sejajar adalah **trapesium** (Opsi C)."
        },
        {
          "id": "sd4-b5-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Banyaknya sumbu simetri lipat pada sebuah persegi adalah...",
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
              "text": "8"
            },
            {
              "key": "D",
              "text": "1"
            }
          ],
          "correctAnswer": "A",
          "hint": "Persegi memiliki 2 sumbu simetri melalui sisi dan 2 sumbu diagonal, total 4.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nPersegi memiliki **4 sumbu simetri** (Opsi A)."
        },
        {
          "id": "sd4-b5-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Persegi panjang memiliki sumbu simetri lipat sebanyak...",
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
              "text": "0"
            }
          ],
          "correctAnswer": "C",
          "hint": "Persegi panjang memiliki sumbu simetri vertikal dan horizontal (diagonal bukan sumbu simetri lipat).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nPersegi panjang memiliki **2 sumbu simetri lipat** (Opsi C)."
        },
        {
          "id": "sd4-b5-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah segitiga siku-siku memiliki salah satu sudut lancip berukuran 35°. Besar sudut lancip lainnya adalah...",
          "options": [
            {
              "key": "A",
              "text": "45°"
            },
            {
              "key": "B",
              "text": "65°"
            },
            {
              "key": "C",
              "text": "55°"
            },
            {
              "key": "D",
              "text": "35°"
            }
          ],
          "correctAnswer": "C",
          "hint": "Sudut siku-siku $= 90^\\circ$. Sisa sudut $= 180^\\circ - (90^\\circ + 35^\\circ) = 55^\\circ$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$180^\\circ - 90^\\circ - 35^\\circ = 55^\\circ$$\nBesar sudut lainnya adalah **55°** (Opsi C)."
        },
        {
          "id": "sd4-b5-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Keliling sebuah segitiga sama sisi yang panjang sisinya 9 cm adalah...",
          "options": [
            {
              "key": "A",
              "text": "18 cm"
            },
            {
              "key": "B",
              "text": "81 cm"
            },
            {
              "key": "C",
              "text": "36 cm"
            },
            {
              "key": "D",
              "text": "27 cm"
            }
          ],
          "correctAnswer": "D",
          "hint": "Keliling segitiga sama sisi $= 3 \\times s = 3 \\times 9$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$K = 3 \\times 9 = 27\\text{ cm}$$\nKelilingnya adalah **27 cm** (Opsi D)."
        },
        {
          "id": "sd4-b5-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bangun datar yang memiliki 4 sisi sama panjang tetapi sudut-sudutnya bukan sudut siku-siku adalah...",
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
              "text": "Jajargenjang"
            },
            {
              "key": "D",
              "text": "Layang-layang"
            }
          ],
          "correctAnswer": "A",
          "hint": "Belah ketupat memiliki 4 sisi sama panjang, sedangkan sudutnya terdiri dari 2 lancip dan 2 tumpul.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nBangun tersebut adalah **belah ketupat** (Opsi A)."
        },
        {
          "id": "sd4-b5-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Keliling sebuah persegi adalah 48 cm. Panjang sisi persegi tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "14 cm"
            },
            {
              "key": "B",
              "text": "16 cm"
            },
            {
              "key": "C",
              "text": "12 cm"
            },
            {
              "key": "D",
              "text": "10 cm"
            }
          ],
          "correctAnswer": "C",
          "hint": "Panjang sisi = Keliling : $4 = 48 : 4$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$s = 48 : 4 = 12\\text{ cm}$$\nPanjang sisinya adalah **12 cm** (Opsi C)."
        },
        {
          "id": "sd4-b5-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Keliling persegi panjang berukuran panjang 14 cm dan lebar 6 cm adalah...",
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
              "text": "48 cm"
            },
            {
              "key": "D",
              "text": "40 cm"
            }
          ],
          "correctAnswer": "D",
          "hint": "Keliling persegi panjang $= 2 \\times (p + l) = 2 \\times (14 + 6)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$K = 2 \\times (14 + 6) = 2 \\times 20 = 40\\text{ cm}$$\nKelilingnya adalah **40 cm** (Opsi D)."
        },
        {
          "id": "sd4-b5-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah taman berbentuk segitiga sama kaki memiliki keliling 36 meter. Jika panjang sisi alasnya 10 meter, berapakah panjang masing-masing sisi kakinya?",
          "options": [
            {
              "key": "A",
              "text": "12 meter"
            },
            {
              "key": "B",
              "text": "13 meter"
            },
            {
              "key": "C",
              "text": "14 meter"
            },
            {
              "key": "D",
              "text": "11 meter"
            }
          ],
          "correctAnswer": "B",
          "hint": "Jumlah kedua kaki $= 36 - 10 = 26$ meter. Panjang tiap kaki $= 26 : 2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Panjang satu kaki} = (36 - 10) : 2 = 26 : 2 = 13\\text{ meter}$$\nPanjang kakinya adalah **13 meter** (Opsi B)."
        },
        {
          "id": "sd4-b5-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Ali berlari mengelilingi lapangan sepak bola berbentuk persegi panjang berukuran $100\\text{ m} \\times 60\\text{ m}$ sebanyak 3 putaran penuh. Jarak total yang ditempuh Ali adalah...",
          "options": [
            {
              "key": "A",
              "text": "320 meter"
            },
            {
              "key": "B",
              "text": "960 meter"
            },
            {
              "key": "C",
              "text": "640 meter"
            },
            {
              "key": "D",
              "text": "1.200 meter"
            }
          ],
          "correctAnswer": "B",
          "hint": "Keliling lapangan $= 2 \\times (100 + 60) = 320$ m. Dalam 3 putaran $= 3 \\times 320$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Keliling lapangan: $2 \\times (100 + 60) = 320\\text{ m}$\n2. 3 putaran: $3 \\times 320 = 960\\text{ m}$ (Opsi B)."
        },
        {
          "id": "sd4-b5-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Kawat sepanjang 64 cm akan dibentuk menjadi kerangka sebuah persegi. Panjang sisi persegi yang terbentuk adalah...",
          "options": [
            {
              "key": "A",
              "text": "14 cm"
            },
            {
              "key": "B",
              "text": "18 cm"
            },
            {
              "key": "C",
              "text": "16 cm"
            },
            {
              "key": "D",
              "text": "12 cm"
            }
          ],
          "correctAnswer": "C",
          "hint": "Bagi panjang kawat dengan 4 sisi: $64 : 4 = 16$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$s = 64 : 4 = 16\\text{ cm}$$\nPanjang sisinya adalah **16 cm** (Opsi C)."
        },
        {
          "id": "sd4-b5-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah jajar genjang memiliki keliling 50 cm. Jika salah satu sisi panjangnya 16 cm, maka panjang sisi lainnya yang bersebelahan adalah...",
          "options": [
            {
              "key": "A",
              "text": "8 cm"
            },
            {
              "key": "B",
              "text": "9 cm"
            },
            {
              "key": "C",
              "text": "10 cm"
            },
            {
              "key": "D",
              "text": "12 cm"
            }
          ],
          "correctAnswer": "B",
          "hint": "Keliling jajargenjang $= 2 \\times (a + b) = 50 \\implies a + b = 25$. Jika $a = 16$, maka $b = 25 - 16 = 9$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$b = (50 : 2) - 16 = 25 - 16 = 9\\text{ cm}$$\nPanjang sisi lainnya adalah **9 cm** (Opsi B)."
        },
        {
          "id": "sd4-b5-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Berapa banyak segitiga kecil sama sisi dengan sisi 1 cm yang dapat disusun untuk membentuk segitiga sama sisi besar dengan panjang sisi 4 cm?",
          "options": [
            {
              "key": "A",
              "text": "12 segitiga"
            },
            {
              "key": "B",
              "text": "16 segitiga"
            },
            {
              "key": "C",
              "text": "8 segitiga"
            },
            {
              "key": "D",
              "text": "4 segitiga"
            }
          ],
          "correctAnswer": "B",
          "hint": "Banyak segitiga kecil $= 4^2 = 16$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$4 \\times 4 = 16$$\nDibutuhkan **16 segitiga kecil** (Opsi B)."
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
          {
            "label": "Nilai Piktogram",
            "formula": "\\text{Nilai Data} = \\text{Banyak Gambar} \\times \\text{Skala Gambar}"
          },
          {
            "label": "Selisih Data",
            "formula": "\\text{Selisih} = \\text{Data Maksimal} - \\text{Data Minimal}"
          }
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
            {
              "key": "A",
              "text": "15 poin"
            },
            {
              "key": "B",
              "text": "25 poin"
            },
            {
              "key": "C",
              "text": "9 poin"
            },
            {
              "key": "D",
              "text": "20 poin"
            }
          ],
          "correctAnswer": "D",
          "hint": "Kalikan jumlah bintang (4) dengan nilai tiap bintang (5).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$4 \\times 5 = 20\\text{ poin}$$\nTotal poinnya adalah **20 poin** (Opsi D)."
        },
        {
          "id": "sd4-b6-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Diagram yang menggunakan persegi panjang tegak atau mendatar untuk menunjukkan banyak data disebut...",
          "options": [
            {
              "key": "A",
              "text": "Diagram lingkaran"
            },
            {
              "key": "B",
              "text": "Diagram garis"
            },
            {
              "key": "C",
              "text": "Diagram batang"
            },
            {
              "key": "D",
              "text": "Piktogram"
            }
          ],
          "correctAnswer": "C",
          "hint": "Diagram berbentuk balok tegak/mendatar disebut diagram batang.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nDiagram berbentuk persegi panjang tegak atau mendatar adalah **diagram batang** (Opsi C)."
        },
        {
          "id": "sd4-b6-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Diagram batang ekstrakurikuler SD: Tari 15 siswa, Renang 25 siswa, Lukis 20 siswa, Silat 30 siswa. Jumlah seluruh siswa yang mengikuti ekstrakurikuler adalah...",
          "options": [
            {
              "key": "A",
              "text": "85 siswa"
            },
            {
              "key": "B",
              "text": "95 siswa"
            },
            {
              "key": "C",
              "text": "90 siswa"
            },
            {
              "key": "D",
              "text": "80 siswa"
            }
          ],
          "correctAnswer": "C",
          "hint": "Jumlahkan seluruh siswa: $15 + 25 + 20 + 30$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$15 + 25 + 20 + 30 = 90\\text{ siswa}$$\nTotalnya adalah **90 siswa** (Opsi C)."
        },
        {
          "id": "sd4-b6-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dari data pada soal sebelumnya, selisih jumlah siswa yang mengikuti Silat dan Tari adalah...",
          "options": [
            {
              "key": "A",
              "text": "10 siswa"
            },
            {
              "key": "B",
              "text": "15 siswa"
            },
            {
              "key": "C",
              "text": "20 siswa"
            },
            {
              "key": "D",
              "text": "5 siswa"
            }
          ],
          "correctAnswer": "B",
          "hint": "Kurangkan peserta Silat (30) dengan Tari (15).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Selisih} = 30 - 15 = 15\\text{ siswa}$$\nSelisihnya adalah **15 siswa** (Opsi B)."
        },
        {
          "id": "sd4-b6-5",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Diagram yang menyajikan data menggunakan gambar atau simbol tertentu disebut...",
          "options": [
            {
              "key": "A",
              "text": "Piktogram"
            },
            {
              "key": "B",
              "text": "Diagram batang"
            },
            {
              "key": "C",
              "text": "Diagram garis"
            },
            {
              "key": "D",
              "text": "Diagram lingkaran"
            }
          ],
          "correctAnswer": "A",
          "hint": "Piktogram menyajikan data kuantitatif menggunakan gambar/ikon.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nDiagram dengan simbol gambar disebut **piktogram** (Opsi A)."
        },
        {
          "id": "sd4-b6-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Pada sebuah piktogram, 1 simbol buku mewakili 5 buah buku. Jika di hari Selasa terdapat 6 simbol buku, berapa buku yang dipinjam pada hari Selasa?",
          "options": [
            {
              "key": "A",
              "text": "30 buku"
            },
            {
              "key": "B",
              "text": "25 buku"
            },
            {
              "key": "C",
              "text": "35 buku"
            },
            {
              "key": "D",
              "text": "20 buku"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kalikan banyak simbol dengan nilai per simbol: $6 \\times 5 = 30$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$6 \\times 5 = 30\\text{ buku}$$\nJumlahnya adalah **30 buku** (Opsi A)."
        },
        {
          "id": "sd4-b6-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jika 40 orang siswa diwakili oleh simbol orang di mana 1 simbol = 8 siswa, berapa banyak simbol orang yang harus digambar?",
          "options": [
            {
              "key": "A",
              "text": "4 simbol"
            },
            {
              "key": "B",
              "text": "6 simbol"
            },
            {
              "key": "C",
              "text": "5 simbol"
            },
            {
              "key": "D",
              "text": "8 simbol"
            }
          ],
          "correctAnswer": "C",
          "hint": "Bagi jumlah siswa dengan nilai per simbol: $40 : 8 = 5$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$40 : 8 = 5\\text{ simbol}$$\nDibutuhkan **5 simbol** (Opsi C)."
        },
        {
          "id": "sd4-b6-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Tinggi batang pada diagram batang tegak menunjukkan...",
          "options": [
            {
              "key": "A",
              "text": "Nama kategori data"
            },
            {
              "key": "B",
              "text": "Waktu pengamatan"
            },
            {
              "key": "C",
              "text": "Rata-rata data"
            },
            {
              "key": "D",
              "text": "Frekuensi atau banyaknya data"
            }
          ],
          "correctAnswer": "D",
          "hint": "Tinggi batang berbanding lurus dengan frekuensi atau jumlah data.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nTinggi batang menyatakan **banyaknya data (frekuensi)** (Opsi D)."
        },
        {
          "id": "sd4-b6-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Data nilai ulangan matematika: 70, 80, 80, 90, 70, 80, 100, 90. Nilai yang paling sering muncul (modus) adalah...",
          "options": [
            {
              "key": "A",
              "text": "80"
            },
            {
              "key": "B",
              "text": "70"
            },
            {
              "key": "C",
              "text": "90"
            },
            {
              "key": "D",
              "text": "100"
            }
          ],
          "correctAnswer": "A",
          "hint": "Hitung kemunculan: nilai 70 ada 2, nilai 80 ada 3, nilai 90 ada 2, nilai 100 ada 1.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nNilai 80 muncul paling banyak (3 kali) sehingga modusnya adalah **80** (Opsi A)."
        },
        {
          "id": "sd4-b6-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Data berat badan 5 siswa (dalam kg): 32, 34, 30, 36, 38. Rata-rata berat badan kelima siswa tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "33 kg"
            },
            {
              "key": "B",
              "text": "34 kg"
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
          "correctAnswer": "B",
          "hint": "Jumlahkan semua data lalu bagi 5: $(32 + 34 + 30 + 36 + 38) : 5 = 170 : 5$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Rata-rata} = 170 : 5 = 34\\text{ kg}$$\nRata-ratanya adalah **34 kg** (Opsi B)."
        },
        {
          "id": "sd4-b6-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Data penjualan buah di toko segar: Apel 45 kg, Jeruk 60 kg, Mangga 35 kg, Pisang 50 kg. Buah yang paling sedikit terjual adalah...",
          "options": [
            {
              "key": "A",
              "text": "Apel"
            },
            {
              "key": "B",
              "text": "Pisang"
            },
            {
              "key": "C",
              "text": "Jeruk"
            },
            {
              "key": "D",
              "text": "Mangga"
            }
          ],
          "correctAnswer": "D",
          "hint": "Bandingkan angka penjualan: Mangga hanya terjual 35 kg.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nBuah dengan penjualan terendah adalah **Mangga (35 kg)** (Opsi D)."
        },
        {
          "id": "sd4-b6-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dari data penjualan buah pada soal sebelumnya, selisih penjualan Jeruk dan Pisang adalah...",
          "options": [
            {
              "key": "A",
              "text": "15 kg"
            },
            {
              "key": "B",
              "text": "20 kg"
            },
            {
              "key": "C",
              "text": "5 kg"
            },
            {
              "key": "D",
              "text": "10 kg"
            }
          ],
          "correctAnswer": "D",
          "hint": "Kurangkan penjualan Jeruk (60 kg) dengan Pisang (50 kg).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$60 - 50 = 10\\text{ kg}$$\nSelisihnya adalah **10 kg** (Opsi D)."
        },
        {
          "id": "sd4-b6-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Tabel pengunjung kebun binatang: Senin 120 orang, Selasa 150 orang, Rabu 130 orang, Kamis 180 orang. Total pengunjung selama 4 hari tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "560 orang"
            },
            {
              "key": "B",
              "text": "600 orang"
            },
            {
              "key": "C",
              "text": "580 orang"
            },
            {
              "key": "D",
              "text": "540 orang"
            }
          ],
          "correctAnswer": "C",
          "hint": "Jumlahkan data: $120 + 150 + 130 + 180 = 580$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$120 + 150 + 130 + 180 = 580\\text{ orang}$$\nTotalnya adalah **580 orang** (Opsi C)."
        },
        {
          "id": "sd4-b6-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Data jenis transportasi siswa: Jalan kaki 12 siswa, Sepeda 18 siswa, Angkutan kota 15 siswa, Diantar motor 25 siswa. Berapa persen siswa yang menggunakan sepeda jika total siswa 70 orang?",
          "options": [
            {
              "key": "A",
              "text": "30%"
            },
            {
              "key": "B",
              "text": "25,7%"
            },
            {
              "key": "C",
              "text": "20%"
            },
            {
              "key": "D",
              "text": "18%"
            }
          ],
          "correctAnswer": "B",
          "hint": "Persentase sepeda $= \\frac{18}{70} \\times 100\\% \\approx 25,7\\%$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{18}{70} \\times 100\\% \\approx 25{,}7\\%$$\nPersentasenya adalah **25,7%** (Opsi B)."
        },
        {
          "id": "sd4-b6-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dalam sebuah piktogram, 1 simbol pensil mewakili 12 pensil. Jika kelas 4A menerima 48 pensil, berapa simbol pensil yang digambar?",
          "options": [
            {
              "key": "A",
              "text": "4 simbol"
            },
            {
              "key": "B",
              "text": "3 simbol"
            },
            {
              "key": "C",
              "text": "5 simbol"
            },
            {
              "key": "D",
              "text": "6 simbol"
            }
          ],
          "correctAnswer": "A",
          "hint": "Bagi 48 pensil dengan 12: $48 : 12 = 4$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$48 : 12 = 4\\text{ simbol}$$\nDigambar sebanyak **4 simbol** (Opsi A)."
        },
        {
          "id": "sd4-b6-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Diagram batang menunjukkan sumbangan buku: Kelas 4A (25 buku), Kelas 4B (30 buku), Kelas 4C (20 buku), Kelas 4D (x buku). Jika rata-rata sumbangan buku tiap kelas adalah 28 buku, berapakah nilai x (sumbangan Kelas 4D)?",
          "options": [
            {
              "key": "A",
              "text": "37 buku"
            },
            {
              "key": "B",
              "text": "35 buku"
            },
            {
              "key": "C",
              "text": "32 buku"
            },
            {
              "key": "D",
              "text": "30 buku"
            }
          ],
          "correctAnswer": "A",
          "hint": "Total sumbangan 4 kelas $= 4 \\times 28 = 112$. Nilai $x = 112 - (25 + 30 + 20)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Total target: $4 \\times 28 = 112$ buku\n2. Jumlah 3 kelas: $25 + 30 + 20 = 75$ buku\n3. Sumbangan Kelas 4D: $112 - 75 = 37$ buku (Opsi A)."
        },
        {
          "id": "sd4-b6-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Piktogram hasil panen jagung desa: Tahun 2021 (4 karung simbol), Tahun 2022 (6 karung simbol), Tahun 2023 (9 karung simbol). Jika 1 karung simbol = 250 kg jagung, berapakah kenaikan hasil panen dari tahun 2021 ke 2023?",
          "options": [
            {
              "key": "A",
              "text": "1.500 kg"
            },
            {
              "key": "B",
              "text": "1.250 kg"
            },
            {
              "key": "C",
              "text": "1.000 kg"
            },
            {
              "key": "D",
              "text": "750 kg"
            }
          ],
          "correctAnswer": "B",
          "hint": "Selisih simbol: $9 - 4 = 5$ simbol. Kenaikan panen: $5 \\times 250 = 1.250$ kg.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Kenaikan} = (9 - 4) \\times 250 = 5 \\times 250 = 1.250\\text{ kg}$$\nKenaikannya adalah **1.250 kg** (Opsi B)."
        },
        {
          "id": "sd4-b6-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Data koleksi buku di pojok baca: Cerita 40%, Pengetahuan 30%, Ensiklopedia 20%, Majalah 10%. Jika total buku adalah 150 buku, selisih buku Cerita dan Majalah adalah...",
          "options": [
            {
              "key": "A",
              "text": "30 buku"
            },
            {
              "key": "B",
              "text": "60 buku"
            },
            {
              "key": "C",
              "text": "15 buku"
            },
            {
              "key": "D",
              "text": "45 buku"
            }
          ],
          "correctAnswer": "D",
          "hint": "Selisih persentase: $40\\% - 10\\% = 30\\%$. Selisih buku: $30\\% \\times 150 = 45$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Selisih} = (40\\% - 10\\%) \\times 150 = 30\\% \\times 150 = 45\\text{ buku}$$\nSelisihnya adalah **45 buku** (Opsi D)."
        },
        {
          "id": "sd4-b6-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Tabel frekuensi nilai matematika 20 siswa: nilai 60 (3 siswa), nilai 70 (5 siswa), nilai 80 (7 siswa), nilai 90 (4 siswa), nilai 100 (1 siswa). Berapa persentase siswa yang memperoleh nilai minimal 80?",
          "options": [
            {
              "key": "A",
              "text": "55%"
            },
            {
              "key": "B",
              "text": "60%"
            },
            {
              "key": "C",
              "text": "65%"
            },
            {
              "key": "D",
              "text": "50%"
            }
          ],
          "correctAnswer": "B",
          "hint": "Siswa dengan nilai minimal 80: nilai 80 + 90 + 100 $= 7 + 4 + 1 = 12$ siswa. Persen $= \\frac{12}{20} \\times 100\\% = 60\\%$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{7 + 4 + 1}{20} \\times 100\\% = \\frac{12}{20} \\times 100\\% = 60\\%$$\nPersentasenya adalah **60%** (Opsi B)."
        },
        {
          "id": "sd4-b6-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dalam suatu pameran seni, pengunjung hari pertama hingga kelima membentuk pola: 40, 55, 70, 85, 100 orang. Jika panitia menargetkan total 500 pengunjung dalam 6 hari, berapa pengunjung yang harus hadir pada hari keenam?",
          "options": [
            {
              "key": "A",
              "text": "140 orang"
            },
            {
              "key": "B",
              "text": "160 orang"
            },
            {
              "key": "C",
              "text": "150 orang"
            },
            {
              "key": "D",
              "text": "115 orang"
            }
          ],
          "correctAnswer": "C",
          "hint": "Jumlahkan 5 hari pertama: $40 + 55 + 70 + 85 + 100 = 350$. Hari keenam: $500 - 350 = 150$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Total 5 hari: $40 + 55 + 70 + 85 + 100 = 350$ orang\n2. Target hari ke-6: $500 - 350 = 150$ orang (Opsi C)."
        }
      ]
    }
  ]
};
