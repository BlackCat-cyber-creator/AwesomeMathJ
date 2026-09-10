/**
 * Data Kurikulum Kelas 9 SMP (Fase D)
 * 4 Bab Resmi Sesuai Buku Siswa Matematika
 */

export const grade9Data = {
  "grade": 9,
  "level": "SMP",
  "phase": "Fase D",
  "description": "Sistem Persamaan Linear Dua Variabel (SPLDV), Bangun Ruang Sisi Datar & Lengkung, Transformasi Geometri, serta Peluang dan Sampel",
  "chapters": [
    {
      "id": "smp9-bab1-spldv",
      "title": "Bab 1: Sistem Persamaan Linear Dua Variabel",
      "summary": {
        "overview": "Dalam transaksi jual beli, pengelolaan usaha kecil, dan rekayasa sains, kita sering kali dihadapkan pada situasi di mana dua besaran yang berbeda nilainya tidak diketahui secara langsung, tetapi hubungan antarkeduanya saling terikat secara serentak. Sebagai contoh, di kantin sekolah dua orang siswa membeli kombinasi mangkok bakso dan gelas es teh: siswa pertama membayar Rp36.000,00 untuk 2 mangkok bakso dan 3 gelas es teh, sedangkan siswa kedua membayar Rp40.000,00 untuk 3 mangkok bakso dan 1 gelas es teh. Berapakah harga satuan satu mangkok bakso dan satu gelas es teh?\n\nMasalah transaksi ganda tersebut tidak dapat diselesaikan hanya dengan menebak-nebak angka secara acak. Matematikawan memodelkannya ke dalam bentuk Sistem Persamaan Linear Dua Variabel (SPLDV), di mana setiap transaksi dinyatakan sebagai persamaan garis lurus $ax + by = c$ pada bidang koordinat Cartesius. Solusi bersama dari kedua persamaan tersebut merupakan titik koordinat $(x, y)$ di mana kedua garis saling berpotongan.\n\nBab ini membimbing siswa Kelas 9 memahami representasi aljabar dan grafis SPLDV, menguasai empat metode penyelesaian baku: Metode Grafik, Metode Substitusi, Metode Eliminasi, dan Metode Gabungan (Campuran), serta menerapkannya dalam memecahkan masalah kontekstual dunia nyata seperti keliling dan luas lahan, tarif parkir kendaraan bermotor, hingga perhitungan selisih usia.",
        "coreConcepts": [
          "Bentuk Umum PLDV dan SPLDV: Persamaan linear dua variabel memiliki bentuk $ax + by = c$ dengan $a, b \\neq 0$. SPLDV adalah kumpulan dua atau lebih PLDV yang memiliki pasangan variabel yang sama dan saling terikat: $\\begin{cases} a_1 x + b_1 y = c_1 \\\\ a_2 x + b_2 y = c_2 \\end{cases}$.",
          "Metode Grafik: Menggambar garis kedua persamaan pada bidang koordinat Cartesius. Titik potong $(x, y)$ kedua garis adalah solusi tunggal sistem. Jika kedua garis sejajar, sistem tidak memiliki solusi; jika kedua garis berimpit, sistem memiliki tak terhingga solusi.",
          "Metode Substitusi: Menyatakan salah satu variabel dalam bentuk variabel lain pada persamaan pertama (misal $y = \\frac{c_1 - a_1 x}{b_1}$), kemudian mensubstitusikannya ke dalam persamaan kedua.",
          "Metode Eliminasi: Menyamakan koefisien salah satu variabel melalui perkalian dengan bilangan pengali yang sesuai, kemudian mengurangkan atau menjumlahkan kedua persamaan untuk mengeliminasi variabel tersebut.",
          "Metode Gabungan (Campuran): Mengeliminasi satu variabel terlebih dahulu untuk memperoleh nilai variabel pertama, lalu mensubstitusikan nilai tersebut ke salah satu persamaan asal untuk memperoleh nilai variabel kedua. Metode ini merupakan teknik paling cepat dan efisien."
        ],
        "workedExamples": [
          {
            "title": "Penyelesaian SPLDV Transaksi Pembelian Buku dan Pensil",
            "problem": "Di sebuah koperasi siswa, harga 2 buku tulis dan 3 pensil adalah Rp19.000,00, sedangkan harga 3 buku tulis dan 1 pensil adalah Rp18.000,00. Tentukan harga 1 buku tulis dan harga 1 pensil.",
            "solution": "Langkah 1: Misalkan harga 1 buku tulis $= x$ dan harga 1 pensil $= y$.\nSusun model matematika:\n$$\\begin{cases} 2x + 3y = 19.000 \\quad \\text{--- (1)} \\\\ 3x + y = 18.000 \\quad \\text{--- (2)} \\end{cases}$$\n\nLangkah 2: Gunakan metode eliminasi variabel $y$. Kalikan persamaan (2) dengan 3:\n$$2x + 3y = 19.000$$\n$$9x + 3y = 54.000$$\n\nLangkah 3: Kurangkan persamaan kedua dengan persamaan pertama:\n$$(9x + 3y) - (2x + 3y) = 54.000 - 19.000$$\n$$7x = 35.000 \\implies x = 5.000$$\n\nLangkah 4: Substitusikan nilai $x = 5.000$ ke persamaan (2):\n$$3(5.000) + y = 18.000$$\n$$15.000 + y = 18.000 \\implies y = 18.000 - 15.000 = 3.000$$\nJadi, harga 1 buku tulis adalah **Rp5.000,00** dan harga 1 pensil adalah **Rp3.000,00**."
          },
          {
            "title": "Menentukan Ukuran dan Luas Lahan Persegi Panjang",
            "problem": "Keliling sebuah kebun sayur berbentuk persegi panjang adalah 48 meter. Jika panjang kebun 6 meter lebih dari lebarnya, hitunglah luas kebun sayur tersebut.",
            "solution": "Langkah 1: Misalkan panjang $= p$ dan lebar $= l$.\nHubungan keliling: $2(p + l) = 48 \\implies p + l = 24$.\nHubungan selisih panjang dan lebar: $p - l = 6$.\n\nLangkah 2: Selesaikan sistem persamaan dengan metode eliminasi-substitusi:\n$$\\begin{cases} p + l = 24 \\\\ p - l = 6 \\end{cases}$$\nJumlahkan kedua persamaan:\n$$2p = 30 \\implies p = 15\\text{ meter}$$\n\nLangkah 3: Hitung nilai lebar $l$:\n$$15 + l = 24 \\implies l = 24 - 15 = 9\\text{ meter}$$\n\nLangkah 4: Hitung luas kebun sayur:\n$$\\text{Luas} = p \\times l = 15 \\times 9 = 135\\text{ m}^2$$\nJadi, luas kebun sayur tersebut adalah **$135\\text{ m}^2$**."
          }
        ],
        "keyFormulas": [
          {
            "label": "Bentuk Umum SPLDV",
            "formula": "\\begin{cases} a_1 x + b_1 y = c_1 \\\\ a_2 x + b_2 y = c_2 \\end{cases}"
          },
          {
            "label": "Syarat Tepat Satu Penyelesaian",
            "formula": "\\frac{a_1}{a_2} \\neq \\frac{b_1}{b_2}"
          },
          {
            "label": "Model Persegi Panjang",
            "formula": "K = 2(p + l) \\quad \\text{dan} \\quad L = p \\times l"
          }
        ],
        "misconceptions": [
          "Lupa mengalikan suku konstanta ($c$) saat melakukan perkalian baris untuk menyamakan koefisien variabel.",
          "Salah menentukan tanda operasi eliminasi: jika tanda koefisien sama (keduanya positif atau keduanya negatif), gunakan operasi pengurangan ($-$). Jika berlawanan tanda, gunakan operasi penjumlahan ($+$)."
        ],
        "tutorTip": "Gunakan metode campuran: eliminasi terlebih dahulu variabel yang memiliki koefisien 1 atau paling mudah disamakan angkanya, lalu substitusikan hasilnya ke persamaan paling sederhana!"
      },
      "questions": [
        {
          "id": "smp9-b1-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Himpunan penyelesaian dari sistem persamaan $x + y = 10$ dan $x - y = 4$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$(7, 3)$"
            },
            {
              "key": "B",
              "text": "$(6, 4)$"
            },
            {
              "key": "C",
              "text": "$(8, 2)$"
            },
            {
              "key": "D",
              "text": "$(5, 5)$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Jumlahkan kedua persamaan untuk mengeliminasi $y$: $(x + y) + (x - y) = 10 + 4$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Jumlahkan kedua persamaan:\n$$(x + y) + (x - y) = 10 + 4$$\n$$2x = 14 \\implies x = 7$$\n2. Substitusikan $x = 7$ ke dalam persamaan pertama:\n$$7 + y = 10 \\implies y = 3$$\nJadi, himpunan penyelesaiannya adalah **$(7, 3)$** (Opsi A)."
        },
        {
          "id": "smp9-b1-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Jika $2x + y = 13$ dan $x = 4$, maka nilai dari $y$ adalah...",
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
              "text": "7"
            }
          ],
          "correctAnswer": "A",
          "hint": "Substitusikan nilai $x = 4$ langsung ke dalam persamaan: $2(4) + y = 13$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Masukkan $x = 4$:\n$$2(4) + y = 13$$\n$$8 + y = 13$$\n$$y = 13 - 8 = 5$$\nNilai $y$ adalah **5** (Opsi A)."
        },
        {
          "id": "smp9-b1-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Keliling sebuah persegi panjang adalah 40 cm. Jika panjangnya 4 cm lebih dari lebarnya, maka luas persegi panjang tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "$96\\text{ cm}^2$"
            },
            {
              "key": "B",
              "text": "$100\\text{ cm}^2$"
            },
            {
              "key": "C",
              "text": "$84\\text{ cm}^2$"
            },
            {
              "key": "D",
              "text": "$90\\text{ cm}^2$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Buat sistem persamaan: $p + l = 20$ dan $p - l = 4$. Cari $p$ dan $l$, lalu kalikan keduanya.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Keliling $= 2(p + l) = 40 \\implies p + l = 20$.\n2. Selisih: $p - l = 4$.\n3. Jumlahkan kedua persamaan:\n$$2p = 24 \\implies p = 12\\text{ cm}$$\n4. Lebar: $l = 20 - 12 = 8\\text{ cm}$.\n5. Luas persegi panjang:\n$$\\text{Luas} = p \\times l = 12 \\times 8 = 96\\text{ cm}^2$$\nLuasnya adalah **$96\\text{ cm}^2$** (Opsi A)."
        },
        {
          "id": "smp9-b1-4",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Di sebuah tempat parkir terdapat 40 kendaraan yang terdiri dari sepeda motor dan mobil. Jumlah seluruh roda kendaraan tersebut adalah 110 buah. Jika tarif parkir motor Rp2.000,00 dan mobil Rp5.000,00, total pendapatan uang parkir adalah...",
          "options": [
            {
              "key": "A",
              "text": "Rp125.000,00"
            },
            {
              "key": "B",
              "text": "Rp130.000,00"
            },
            {
              "key": "C",
              "text": "Rp120.000,00"
            },
            {
              "key": "D",
              "text": "Rp140.000,00"
            }
          ],
          "correctAnswer": "A",
          "hint": "Misalkan motor $= m$ (2 roda) dan mobil $= c$ (4 roda): $m + c = 40$ dan $2m + 4c = 110$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Sistem persamaan:\n$$m + c = 40 \\quad (\\times 2) \\implies 2m + 2c = 80$$\n$$2m + 4c = 110$$\n2. Kurangkan kedua persamaan:\n$$2c = 30 \\implies c = 15\\text{ mobil}$$\n3. Jumlah motor:\n$$m = 40 - 15 = 25\\text{ motor}$$\n4. Total pendapatan parkir:\n$$\\text{Total} = (25 \\times 2.000) + (15 \\times 5.000) = 50.000 + 75.000 = \\text{Rp}125.000,00$$\nTotal pendapatan adalah **Rp125.000,00** (Opsi A)."
        },
        {
          "id": "smp9-b1-5",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dua tahun yang lalu, usia seorang ayah adalah 4 kali usia anaknya. Tiga tahun yang akan datang, jumlah usia ayah dan anaknya adalah 55 tahun. Usia ayah sekarang adalah...",
          "options": [
            {
              "key": "A",
              "text": "38 tahun"
            },
            {
              "key": "B",
              "text": "40 tahun"
            },
            {
              "key": "C",
              "text": "36 tahun"
            },
            {
              "key": "D",
              "text": "42 tahun"
            }
          ],
          "correctAnswer": "A",
          "hint": "Misalkan usia ayah $= x$ dan anak $= y$. Dua tahun lalu: $x - 2 = 4(y - 2)$. Tiga tahun lagi: $(x + 3) + (y + 3) = 55$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Hubungan waktu lampau (2 tahun lalu):\n$$x - 2 = 4(y - 2) \\implies x - 2 = 4y - 8 \\implies x - 4y = -6$$\n2. Hubungan masa depan (3 tahun lagi):\n$$(x + 3) + (y + 3) = 55 \\implies x + y + 6 = 55 \\implies x + y = 49$$\n3. Eliminasi $x$ dengan mengurangkan kedua persamaan:\n$$(x + y) - (x - 4y) = 49 - (-6)$$\n$$5y = 55 \\implies y = 11\\text{ tahun}$$\n4. Usia ayah sekarang:\n$$x = 49 - 11 = 38\\text{ tahun}$$\nUsia ayah sekarang adalah **38 tahun** (Opsi A)."
        },
        {
          "id": "smp9-b1-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Himpunan penyelesaian dari SPLDV $\\begin{cases} 2x + y = 9 \\\\ x - y = 3 \\end{cases}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "{(4, 1)}"
            },
            {
              "key": "B",
              "text": "{(3, 3)}"
            },
            {
              "key": "C",
              "text": "{(5, -1)}"
            },
            {
              "key": "D",
              "text": "{(2, 5)}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan metode eliminasi dengan menjumlahkan kedua persamaan untuk menghilangkan variabel $y$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Jumlahkan kedua persamaan: $(2x + y) + (x - y) = 9 + 3 \\implies 3x = 12 \\implies x = 4$\n2. Substitusikan $x = 4$ ke persamaan kedua: $4 - y = 3 \\implies y = 1$\nHimpunan penyelesaiannya adalah **{(4, 1)}** (Opsi A)."
        },
        {
          "id": "smp9-b1-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jika $x$ dan $y$ memenuhi sistem persamaan $\\begin{cases} 3x + 2y = 12 \\\\ x + 2y = 8 \\end{cases}$, maka nilai dari $x + y$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "5"
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
              "text": "7"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kurangkan kedua persamaan untuk mengeliminasi $y$, cari nilai $x$ lalu $y$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $(3x + 2y) - (x + 2y) = 12 - 8 \\implies 2x = 4 \\implies x = 2$\n2. $2 + 2y = 8 \\implies 2y = 6 \\implies y = 3$\n3. Nilai $x + y = 2 + 3 = 5$ (Opsi A)."
        },
        {
          "id": "smp9-b1-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Harga 3 buku tulis dan 2 pulpen adalah Rp16.500,00, sedangkan harga 2 buku tulis dan 4 pulpen adalah Rp19.000,00. Model matematika yang sesuai adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\begin{cases} 3x + 2y = 16.500 \\\\ 2x + 4y = 19.000 \\end{cases}"
            },
            {
              "key": "B",
              "text": "\\begin{cases} 3x + 2y = 19.000 \\\\ 2x + 4y = 16.500 \\end{cases}"
            },
            {
              "key": "C",
              "text": "\\begin{cases} 2x + 3y = 16.500 \\\\ 4x + 2y = 19.000 \\end{cases}"
            },
            {
              "key": "D",
              "text": "\\begin{cases} 3x + 4y = 16.500 \\\\ 2x + 2y = 19.000 \\end{cases}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Misalkan $x =$ harga buku tulis dan $y =$ harga pulpen.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nModel matematika yang tepat adalah:\n$$\\begin{cases} 3x + 2y = 16.500 \\\\ 2x + 4y = 19.000 \\end{cases}$$ (Opsi A)."
        },
        {
          "id": "smp9-b1-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Diketahui sistem persamaan $\\begin{cases} x = 2y - 1 \\\\ 3x + y = 11 \\end{cases}$. Nilai $x$ yang memenuhi adalah...",
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
          "hint": "Substitusikan bentuk $x = 2y - 1$ langsung ke persamaan kedua: $3(2y - 1) + y = 11$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $3(2y - 1) + y = 11 \\implies 6y - 3 + y = 11 \\implies 7y = 14 \\implies y = 2$\n2. $x = 2(2) - 1 = 3$\nNilai $x$ adalah **3** (Opsi A)."
        },
        {
          "id": "smp9-b1-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Penyelesaian dari sistem persamaan $\\begin{cases} 4x - 3y = 1 \\\\ 2x - y = 3 \\end{cases}$ adalah $(x_0, y_0)$. Nilai dari $2x_0 - 3y_0$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "-7"
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
              "text": "-5"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kalikan persamaan kedua dengan 2 lalu eliminasikan $x$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Kalikan persamaan kedua dengan 2: $4x - 2y = 6$\n2. Kurangkan dengan persamaan pertama: $(4x - 2y) - (4x - 3y) = 6 - 1 \\implies y = 5$\n3. $2x - 5 = 3 \\implies 2x = 8 \\implies x = 4$\n4. Nilai $2(4) - 3(5) = 8 - 15 = -7$ (Opsi A)."
        },
        {
          "id": "smp9-b1-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Keliling sebuah persegi panjang adalah 44 cm. Jika panjangnya 6 cm lebih dari lebarnya, maka luas persegi panjang tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "112 cm²"
            },
            {
              "key": "B",
              "text": "120 cm²"
            },
            {
              "key": "C",
              "text": "108 cm²"
            },
            {
              "key": "D",
              "text": "96 cm²"
            }
          ],
          "correctAnswer": "A",
          "hint": "Misalkan $p = l + 6$. Keliling: $2(p + l) = 44 \\implies p + l = 22$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $(l + 6) + l = 22 \\implies 2l = 16 \\implies l = 8\\text{ cm}$\n2. $p = 8 + 6 = 14\\text{ cm}$\n3. Luas $= 14 \\times 8 = 112\\text{ cm}^2$ (Opsi A)."
        },
        {
          "id": "smp9-b1-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jumlah umur Ibu dan umur Susi adalah 48 tahun. Empat tahun yang lalu, umur Ibu adalah empat kali umur Susi. Umur Susi saat ini adalah...",
          "options": [
            {
              "key": "A",
              "text": "12 tahun"
            },
            {
              "key": "B",
              "text": "10 tahun"
            },
            {
              "key": "C",
              "text": "14 tahun"
            },
            {
              "key": "D",
              "text": "8 tahun"
            }
          ],
          "correctAnswer": "A",
          "hint": "Empat tahun lalu jumlah umur mereka adalah $48 - 8 = 40$ tahun. Umur Susi 4 tahun lalu: $40 : 5 = 8$ tahun.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Empat tahun lalu: $(I - 4) + (S - 4) = 40$\n2. Karena $I - 4 = 4(S - 4)$, maka $5(S - 4) = 40 \\implies S - 4 = 8$\n3. Umur Susi sekarang: $8 + 4 = 12\\text{ tahun}$ (Opsi A)."
        },
        {
          "id": "smp9-b1-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Di tempat parkir terdapat 75 kendaraan yang terdiri dari sepeda motor dan mobil. Jumlah seluruh roda adalah 210 buah. Jika tarif parkir motor Rp2.000 dan mobil Rp5.000, pendapatan parkir saat itu adalah...",
          "options": [
            {
              "key": "A",
              "text": "Rp240.000,00"
            },
            {
              "key": "B",
              "text": "Rp255.000,00"
            },
            {
              "key": "C",
              "text": "Rp270.000,00"
            },
            {
              "key": "D",
              "text": "Rp225.000,00"
            }
          ],
          "correctAnswer": "A",
          "hint": "SPLDV: $m + k = 75$ dan $2m + 4k = 210$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Bagi persamaan roda dengan 2: $m + 2k = 105$\n2. Kurangkan dengan $m + k = 75 \\implies k = 30$ mobil\n3. $m = 75 - 30 = 45$ motor\n4. Pendapatan $= (45 \\times 2.000) + (30 \\times 5.000) = 90.000 + 150.000 = 240.000$ (Opsi B)."
        },
        {
          "id": "smp9-b1-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Seorang pedagang menjual beras jenis A seharga Rp12.000/kg dan jenis B seharga Rp10.000/kg. Ia mencampur kedua beras tersebut sehingga diperoleh 50 kg beras campuran dengan harga rata-rata Rp11.200/kg. Banyak beras jenis A adalah...",
          "options": [
            {
              "key": "A",
              "text": "30 kg"
            },
            {
              "key": "B",
              "text": "20 kg"
            },
            {
              "key": "C",
              "text": "25 kg"
            },
            {
              "key": "D",
              "text": "35 kg"
            }
          ],
          "correctAnswer": "A",
          "hint": "SPLDV: $a + b = 50$ dan $12.000a + 10.000b = 50 \\times 11.200 = 560.000$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $12a + 10b = 560$\n2. $10a + 10b = 500$\n3. $2a = 60 \\implies a = 30\\text{ kg}$ (Opsi A)."
        },
        {
          "id": "smp9-b1-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sistem persamaan linear $\\begin{cases} \\frac{1}{x} + \\frac{1}{y} = \\frac{5}{6} \\\\ \\frac{1}{x} - \\frac{1}{y} = \\frac{1}{6} \\end{cases}$. Nilai dari $x \\times y$ adalah...",
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
              "text": "4"
            },
            {
              "key": "D",
              "text": "8"
            }
          ],
          "correctAnswer": "A",
          "hint": "Misalkan $u = \\frac{1}{x}$ dan $v = \\frac{1}{y}$. Maka $2u = 1 \\implies u = \\frac{1}{2} \\implies x = 2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $2u = \\frac{6}{6} = 1 \\implies u = \\frac{1}{2} \\implies x = 2$\n2. $v = \\frac{5}{6} - \\frac{3}{6} = \\frac{2}{6} = \\frac{1}{3} \\implies y = 3$\n3. $x \\times y = 2 \\times 3 = 6$ (Opsi A)."
        },
        {
          "id": "smp9-b1-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Nilai $k$ agar sistem persamaan $\\begin{cases} 2x - 3y = 7 \\\\ 4x - ky = 14 \\end{cases}$ memiliki tak hingga banyak penyelesaian adalah...",
          "options": [
            {
              "key": "A",
              "text": "6"
            },
            {
              "key": "B",
              "text": "-6"
            },
            {
              "key": "C",
              "text": "3"
            },
            {
              "key": "D",
              "text": "-3"
            }
          ],
          "correctAnswer": "A",
          "hint": "Agar tak hingga banyak penyelesaian, rasio koefisien harus sama: $\\frac{2}{4} = \\frac{-3}{-k} = \\frac{7}{14}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{2}{4} = \\frac{3}{k} \\implies \\frac{1}{2} = \\frac{3}{k} \\implies k = 6$$\nNilai $k$ adalah **6** (Opsi A)."
        },
        {
          "id": "smp9-b1-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah perahu motor menempuh jarak 36 km ke arah hulu (melawan arus) dalam waktu 3 jam. Dalam perjalanan kembali ke arah hilir (searah arus), perahu menempuh jarak yang sama dalam waktu 2 jam. Kecepatan arus air sungai adalah...",
          "options": [
            {
              "key": "A",
              "text": "3 km/jam"
            },
            {
              "key": "B",
              "text": "12 km/jam"
            },
            {
              "key": "C",
              "text": "15 km/jam"
            },
            {
              "key": "D",
              "text": "2 km/jam"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kecepatan lawan arus: $v_p - v_a = 36 : 3 = 12$. Kecepatan searah arus: $v_p + v_a = 36 : 2 = 18$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $v_p - v_a = 12$\n2. $v_p + v_a = 18$\n3. Kurangkan: $2v_a = 6 \\implies v_a = 3\\text{ km/jam}$ (Opsi A)."
        },
        {
          "id": "smp9-b1-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah bilangan dua digit bernilai 7 kali jumlah digit-digitnya. Jika kedua digit ditukar posisinya, bilangan baru yang terbentuk bernilai 36 kurangnya dari bilangan semula. Bilangan mula-mula adalah...",
          "options": [
            {
              "key": "A",
              "text": "84"
            },
            {
              "key": "B",
              "text": "42"
            },
            {
              "key": "C",
              "text": "63"
            },
            {
              "key": "D",
              "text": "96"
            }
          ],
          "correctAnswer": "A",
          "hint": "Misalkan bilangan $10a + b$. $10a + b = 7(a + b) \\implies 3a = 6b \\implies a = 2b$. Selisih tukar: $9(a - b) = 36 \\implies a - b = 4$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $a = 2b$\n2. $2b - b = 4 \\implies b = 4$\n3. $a = 2(4) = 8$\nBilangan semula adalah **84** (Opsi A)."
        },
        {
          "id": "smp9-b1-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dua pipa A dan B jika dibuka bersamaan dapat mengisi kolam renang dalam waktu 6 jam. Jika pipa A dibuka 4 jam lalu ditutup, kemudian pipa B meneruskan selama 9 jam, kolam terisi penuh. Waktu yang diperlukan pipa A sendiri untuk mengisi kolam adalah...",
          "options": [
            {
              "key": "A",
              "text": "10 jam"
            },
            {
              "key": "B",
              "text": "12 jam"
            },
            {
              "key": "C",
              "text": "15 jam"
            },
            {
              "key": "D",
              "text": "8 jam"
            }
          ],
          "correctAnswer": "A",
          "hint": "Misalkan kecepatan $\\frac{1}{a} + \\frac{1}{b} = \\frac{1}{6}$ dan $\\frac{4}{a} + \\frac{9}{b} = 1$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $4(\\frac{1}{a} + \\frac{1}{b}) + \\frac{5}{b} = 1 \\implies \\frac{4}{6} + \\frac{5}{b} = 1 \\implies \\frac{5}{b} = \\frac{1}{3} \\implies b = 15$ jam\n2. $\\frac{1}{a} = \\frac{1}{6} - \\frac{1}{15} = \\frac{5 - 2}{30} = \\frac{3}{30} = \\frac{1}{10} \\implies a = 10$ jam (Opsi A)."
        },
        {
          "id": "smp9-b1-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Diketahui $x$ dan $y$ bilangan bulat positif yang memenuhi sistem $\\begin{cases} x^2 - y^2 = 33 \\\\ x + y = 11 \\end{cases}$. Nilai dari $2x - y$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "10"
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
              "text": "14"
            }
          ],
          "correctAnswer": "A",
          "hint": "Faktorkan: $(x - y)(x + y) = 33 \\implies (x - y)(11) = 33 \\implies x - y = 3$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $x + y = 11$\n2. $x - y = 3$\n3. Jumlahkan: $2x = 14 \\implies x = 7$\n4. $y = 11 - 7 = 4$\n5. $2(7) - 4 = 14 - 4 = 10$ (Opsi A)."
        }
      ]
    },
    {
      "id": "smp9-bab2-bangun-ruang",
      "title": "Bab 2: Bangun Ruang",
      "summary": {
        "overview": "Bentuk-bentuk tiga dimensi yang memiliki lengkungan mulus dapat kita temui di sekeliling kita setiap hari. Kaleng biskuit dan drum minyak tanah berbentuk Tabung (Silinder), corong es krim dan caping petani berbentuk Kerucut, serta bola sepak, gelembung sabun, hingga planet bumi tempat kita tinggal berbentuk Bola. Bangun-bangun ini dinamakan Bangun Ruang Sisi Lengkung. Bahkan kubah masjid megah dan tangki gas elpiji dirancang melengkung agar mampu menahan tekanan gas dan beban gravitasi secara merata.\n\nDalam dunia arsitektur, teknik sipil, dan industri pengemasan modern, pemahaman mengenai bangun ruang sisi lengkung sangat krusial. Seorang insinyur perminyakan harus mampu menghitung kapasitas tampung kilang minyak berbentuk tabung, perancang tenda harus menghitung kebutuhan bahan terpal berbentuk kerucut, dan pabrik pembuatan bola karet harus memperhitungkan luas permukaan bahan polimer yang diperlukan agar proses produksi efisien dan hemat biaya.\n\nBab ini menuntun siswa Kelas 9 mendalami sifat-sifat geometris unsur bangun ruang sisi lengkung (jari-jari, tinggi, garis pelukis), membuktikan rumus luas selimut dan luas permukaan, menghitung volume kapasitas isi, serta menyelesaikan persoalan terapan bangun ruang gabungan (seperti tenda kerucut-tabung atau kapsul silinder-setengah bola).",
        "coreConcepts": [
          "Tabung (Silinder): Bangun ruang yang dibatasi oleh dua lingkaran kongruen dan sejajar sebagai alas dan tutup, serta bidang lengkung persegi panjang yang digulung (selimut tabung):\n- Luas Selimut: $L_s = 2\\pi r t$\n- Luas Permukaan Lengkap: $L = 2\\pi r (r + t)$\n- Volume: $V = \\pi r^2 t$.",
          "Kerucut: Bangun ruang yang dibatasi oleh alas lingkaran dan sebuah selimut berbentuk juring lingkaran yang mengerucut ke satu titik puncak:\n- Garis Pelukis ($s$): Memenuhi teorema Pythagoras $s = \\sqrt{r^2 + t^2}$\n- Luas Selimut: $L_s = \\pi r s$\n- Luas Permukaan Lengkap: $L = \\pi r (r + s)$\n- Volume: $V = \\frac{1}{3} \\pi r^2 t$.",
          "Bola: Bangun ruang yang dibentuk oleh tak terhingga lingkaran dengan jari-jari sama yang berpusat pada satu titik tengah tunggal:\n- Luas Permukaan: $L = 4\\pi r^2$\n- Luas Permukaan Setengah Bola Pejal/Padat: $L = 3\\pi r^2$\n- Volume: $V = \\frac{4}{3} \\pi r^3$."
        ],
        "workedExamples": [
          {
            "title": "Menghitung Luas Permukaan dan Volume Tabung",
            "problem": "Sebuah kaleng susu berbentuk tabung memiliki jari-jari alas $r = 7\\text{ cm}$ dan tinggi $t = 10\\text{ cm}$. Dengan menggunakan $\\pi = \\frac{22}{7}$, hitunglah luas permukaan kaleng dan volume susu di dalamnya.",
            "solution": "Langkah 1: Menghitung luas permukaan tabung tertutup:\n$$L = 2\\pi r (r + t)$$\n$$L = 2 \\times \\frac{22}{7} \\times 7 \\times (7 + 10) = 44 \\times 17 = 748\\text{ cm}^2$$\n\nLangkah 2: Menghitung volume tabung:\n$$V = \\pi r^2 t = \\frac{22}{7} \\times 7^2 \\times 10 = \\frac{22}{7} \\times 49 \\times 10 = 22 \\times 7 \\times 10 = 1.540\\text{ cm}^3$$\nLuas permukaan kaleng adalah **$748\\text{ cm}^2$** dan volumenya adalah **$1.540\\text{ cm}^3$**."
          },
          {
            "title": "Menghitung Luas Selimut Kerucut",
            "problem": "Sebuah topi ulang tahun berbentuk kerucut memiliki jari-jari alas $r = 6\\text{ cm}$ dan tinggi $t = 8\\text{ cm}$. Tentukan panjang garis pelukis ($s$) dan luas kertas karton yang dibutuhkan untuk membuat selimut topi tersebut (gunakan $\\pi = 3{,}14$).",
            "solution": "Langkah 1: Cari garis pelukis ($s$) dengan Pythagoras:\n$$s = \\sqrt{r^2 + t^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\text{ cm}$$\n\nLangkah 2: Hitung luas selimut kerucut tanpa alas:\n$$L_s = \\pi r s = 3{,}14 \\times 6 \\times 10 = 188{,}4\\text{ cm}^2$$\nJadi, panjang garis pelukisnya adalah **10 cm** dan luas kertas karton selimut adalah **$188{,}4\\text{ cm}^2$**."
          }
        ],
        "keyFormulas": [
          {
            "label": "Volume Tabung",
            "formula": "V = \\pi r^2 t"
          },
          {
            "label": "Volume Kerucut",
            "formula": "V = \\frac{1}{3}\\pi r^2 t"
          },
          {
            "label": "Volume Bola",
            "formula": "V = \\frac{4}{3}\\pi r^3"
          },
          {
            "label": "Luas Permukaan Bola",
            "formula": "L = 4\\pi r^2"
          },
          {
            "label": "Garis Pelukis Kerucut",
            "formula": "s = \\sqrt{r^2 + t^2}"
          }
        ],
        "misconceptions": [
          "Tertukar antara tinggi kerucut ($t$) dengan panjang garis pelukis ($s$) saat menghitung volume atau luas selimut.",
          "Lupa bahwa luas permukaan setengah bola padat (pejal) terdiri dari luas lengkung ($2\\pi r^2$) ditambah luas lingkaran penampang alas ($1\\pi r^2$), sehingga totalnya $3\\pi r^2$."
        ],
        "tutorTip": "Ingat perbandingan volume jika jari-jari dan tingginya sama ($t = 2r$): Volume Kerucut : Volume Bola : Volume Tabung selalu berbanding $1 : 2 : 3$!"
      },
      "questions": [
        {
          "id": "smp9-b2-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Volume sebuah tabung yang memiliki jari-jari alas 7 cm dan tinggi 10 cm (dengan $\\pi = \\frac{22}{7}$) adalah...",
          "options": [
            {
              "key": "A",
              "text": "$1.540\\text{ cm}^3$"
            },
            {
              "key": "B",
              "text": "$1.450\\text{ cm}^3$"
            },
            {
              "key": "C",
              "text": "$1.500\\text{ cm}^3$"
            },
            {
              "key": "D",
              "text": "$770\\text{ cm}^3$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan rumus volume tabung: $V = \\pi r^2 t$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$V = \\frac{22}{7} \\times 7^2 \\times 10 = \\frac{22}{7} \\times 49 \\times 10 = 22 \\times 7 \\times 10 = 1.540\\text{ cm}^3$$\nVolume tabung adalah **$1.540\\text{ cm}^3$** (Opsi A)."
        },
        {
          "id": "smp9-b2-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Sebuah kerucut memiliki jari-jari alas 6 cm dan tinggi 8 cm. Panjang garis pelukis ($s$) kerucut tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "10 cm"
            },
            {
              "key": "B",
              "text": "12 cm"
            },
            {
              "key": "C",
              "text": "14 cm"
            },
            {
              "key": "D",
              "text": "9 cm"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan teorema Pythagoras: $s = \\sqrt{r^2 + t^2} = \\sqrt{6^2 + 8^2}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$s = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\text{ cm}$$\nPanjang garis pelukis adalah **10 cm** (Opsi A)."
        },
        {
          "id": "smp9-b2-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Luas permukaan sebuah bola yang memiliki jari-jari 7 cm dengan $\\pi = \\frac{22}{7}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$616\\text{ cm}^2$"
            },
            {
              "key": "B",
              "text": "$308\\text{ cm}^2$"
            },
            {
              "key": "C",
              "text": "$154\\text{ cm}^2$"
            },
            {
              "key": "D",
              "text": "$1.232\\text{ cm}^2$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan rumus luas permukaan bola: $L = 4\\pi r^2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$L = 4 \\times \\frac{22}{7} \\times 7^2 = 4 \\times \\frac{22}{7} \\times 49 = 4 \\times 22 \\times 7 = 616\\text{ cm}^2$$\nLuas permukaannya adalah **$616\\text{ cm}^2$** (Opsi A)."
        },
        {
          "id": "smp9-b2-4",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Volume sebuah kerucut adalah $314\\text{ cm}^3$. Jika jari-jari alasnya 5 cm dan $\\pi = 3{,}14$, maka tinggi kerucut tersebut adalah...",
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
              "text": "15 cm"
            },
            {
              "key": "D",
              "text": "9 cm"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan $V = \\frac{1}{3}\\pi r^2 t$, masukkan $V = 314$ dan $r = 5$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $V = \\frac{1}{3} \\times 3{,}14 \\times 5^2 \\times t$\n2. $314 = \\frac{1}{3} \\times 3{,}14 \\times 25 \\times t$\n3. Bagi kedua ruas dengan 3,14:\n$$100 = \\frac{25}{3} t \\implies t = \\frac{100 \\times 3}{25} = 4 \\times 3 = 12\\text{ cm}$$\nTinggi kerucut adalah **12 cm** (Opsi A)."
        },
        {
          "id": "smp9-b2-5",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah drum minyak berbentuk tabung tertutup memiliki diameter alas 140 cm dan tinggi 1 meter. Jika drum tersebut terisi penuh minyak tanah, volume minyak dalam drum tersebut adalah... (1 liter = $1.000\\text{ cm}^3$)",
          "options": [
            {
              "key": "A",
              "text": "1.540 liter"
            },
            {
              "key": "B",
              "text": "1.500 liter"
            },
            {
              "key": "C",
              "text": "1.450 liter"
            },
            {
              "key": "D",
              "text": "770 liter"
            }
          ],
          "correctAnswer": "A",
          "hint": "Ubah satuan ke cm: $r = 70\\text{ cm}$, tinggi $t = 1\\text{ m} = 100\\text{ cm}$. Cari volume dalam $\\text{cm}^3$, lalu bagi 1.000 untuk konversi ke liter.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Parameter: $r = \\frac{140}{2} = 70\\text{ cm}$ dan $t = 100\\text{ cm}$.\n2. Hitung volume tabung:\n$$V = \\frac{22}{7} \\times 70^2 \\times 100 = \\frac{22}{7} \\times 4.900 \\times 100 = 22 \\times 700 \\times 100 = 1.540.000\\text{ cm}^3$$\n3. Konversi ke liter:\n$$\\text{Volume} = \\frac{1.540.000}{1.000} = 1.540\\text{ liter}$$\nVolume minyak dalam drum adalah **1.540 liter** (Opsi A)."
        },
        {
          "id": "smp9-b2-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah tabung memiliki jari-jari alas 7 cm dan tinggi 10 cm. Volume tabung tersebut dengan $\\pi = \\frac{22}{7}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "1.540 cm³"
            },
            {
              "key": "B",
              "text": "1.450 cm³"
            },
            {
              "key": "C",
              "text": "1.520 cm³"
            },
            {
              "key": "D",
              "text": "1.600 cm³"
            }
          ],
          "correctAnswer": "A",
          "hint": "Rumus volume tabung: $V = \\pi r^2 t = \\frac{22}{7} \\times 7^2 \\times 10$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$V = \\frac{22}{7} \\times 49 \\times 10 = 154 \\times 10 = 1.540\\text{ cm}^3$$\nVolumenya adalah **1.540 cm³** (Opsi A)."
        },
        {
          "id": "smp9-b2-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Luas selimut tabung yang berdiameter 14 cm dan tinggi 20 cm adalah... ($\\pi = \\frac{22}{7}$)",
          "options": [
            {
              "key": "A",
              "text": "880 cm²"
            },
            {
              "key": "B",
              "text": "840 cm²"
            },
            {
              "key": "C",
              "text": "920 cm²"
            },
            {
              "key": "D",
              "text": "780 cm²"
            }
          ],
          "correctAnswer": "A",
          "hint": "Luas selimut $= 2\\pi r t = \\pi d t = \\frac{22}{7} \\times 14 \\times 20$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$L_s = \\frac{22}{7} \\times 14 \\times 20 = 44 \\times 20 = 880\\text{ cm}^2$$\nLuas selimutnya adalah **880 cm²** (Opsi A)."
        },
        {
          "id": "smp9-b2-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah kerucut memiliki jari-jari alas 6 cm dan tinggi 8 cm. Panjang garis pelukis ($s$) kerucut tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "10 cm"
            },
            {
              "key": "B",
              "text": "12 cm"
            },
            {
              "key": "C",
              "text": "14 cm"
            },
            {
              "key": "D",
              "text": "9 cm"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan teorema Pythagoras: $s = \\sqrt{r^2 + t^2} = \\sqrt{6^2 + 8^2}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$s = \\sqrt{36 + 64} = \\sqrt{100} = 10\\text{ cm}$$\nPanjang garis pelukisnya adalah **10 cm** (Opsi A)."
        },
        {
          "id": "smp9-b2-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Volume kerucut dengan panjang jari-jari alas 7 cm dan tinggi 12 cm adalah... ($\\pi = \\frac{22}{7}$)",
          "options": [
            {
              "key": "A",
              "text": "616 cm³"
            },
            {
              "key": "B",
              "text": "528 cm³"
            },
            {
              "key": "C",
              "text": "640 cm³"
            },
            {
              "key": "D",
              "text": "580 cm³"
            }
          ],
          "correctAnswer": "A",
          "hint": "Volume kerucut $= \\frac{1}{3}\\pi r^2 t = \\frac{1}{3} \\times \\frac{22}{7} \\times 49 \\times 12$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$V = \\frac{1}{3} \\times 154 \\times 12 = 154 \\times 4 = 616\\text{ cm}^3$$\nVolumenya adalah **616 cm³** (Opsi A)."
        },
        {
          "id": "smp9-b2-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Volume bola yang berjari-jari 21 cm dengan $\\pi = \\frac{22}{7}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "38.808 cm³"
            },
            {
              "key": "B",
              "text": "36.408 cm³"
            },
            {
              "key": "C",
              "text": "42.108 cm³"
            },
            {
              "key": "D",
              "text": "32.808 cm³"
            }
          ],
          "correctAnswer": "A",
          "hint": "Volume bola $= \\frac{4}{3}\\pi r^3 = \\frac{4}{3} \\times \\frac{22}{7} \\times 21^3$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$V = \\frac{4}{3} \\times \\frac{22}{7} \\times 9.261 = \\frac{88}{21} \\times 9.261 = 88 \\times 441 = 38.808\\text{ cm}^3$$\nVolumenya adalah **38.808 cm³** (Opsi A)."
        },
        {
          "id": "smp9-b2-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Luas permukaan bola yang berjari-jari 7 cm dengan $\\pi = \\frac{22}{7}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "616 cm²"
            },
            {
              "key": "B",
              "text": "308 cm²"
            },
            {
              "key": "C",
              "text": "154 cm²"
            },
            {
              "key": "D",
              "text": "1.232 cm²"
            }
          ],
          "correctAnswer": "A",
          "hint": "Luas bola $= 4\\pi r^2 = 4 \\times \\frac{22}{7} \\times 49$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$L = 4 \\times 154 = 616\\text{ cm}^2$$\nLuas permukaannya adalah **616 cm²** (Opsi A)."
        },
        {
          "id": "smp9-b2-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah drum minyak berbentuk tabung berdiameter 70 cm dan tinggi 1 meter. Jika drum terisi penuh, volume minyak adalah... ($\\pi = \\frac{22}{7}$)",
          "options": [
            {
              "key": "A",
              "text": "385 liter"
            },
            {
              "key": "B",
              "text": "350 liter"
            },
            {
              "key": "C",
              "text": "420 liter"
            },
            {
              "key": "D",
              "text": "320 liter"
            }
          ],
          "correctAnswer": "A",
          "hint": "Jari-jari $= 35$ cm, tinggi $= 100$ cm. $V = \\frac{22}{7} \\times 35^2 \\times 100 = 385.000\\text{ cm}^3 = 385\\text{ liter}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$V = \\frac{22}{7} \\times 1.225 \\times 100 = 385.000\\text{ cm}^3 = 385\\text{ liter}$$\nVolume minyak adalah **385 liter** (Opsi A)."
        },
        {
          "id": "smp9-b2-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah topi ulang tahun berbentuk kerucut memiliki diameter alas 14 cm dan garis pelukis 25 cm. Luas kertas karton minimal untuk membuat topi tersebut adalah... ($\\pi = \\frac{22}{7}$)",
          "options": [
            {
              "key": "A",
              "text": "550 cm²"
            },
            {
              "key": "B",
              "text": "500 cm²"
            },
            {
              "key": "C",
              "text": "600 cm²"
            },
            {
              "key": "D",
              "text": "450 cm²"
            }
          ],
          "correctAnswer": "A",
          "hint": "Topi ulang tahun tanpa alas: Luas selimut kerucut $= \\pi r s = \\frac{22}{7} \\times 7 \\times 25$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$L_s = 22 \\times 25 = 550\\text{ cm}^2$$\nLuas kertas karton adalah **550 cm²** (Opsi A)."
        },
        {
          "id": "smp9-b2-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah bola besi dimasukkan ke dalam tabung berisi air penuh. Jika jari-jari bola sama dengan jari-jari tabung yaitu 6 cm dan tinggi tabung 12 cm, perbandingan volume bola terhadap volume tabung adalah...",
          "options": [
            {
              "key": "A",
              "text": "2 : 3"
            },
            {
              "key": "B",
              "text": "1 : 2"
            },
            {
              "key": "C",
              "text": "3 : 4"
            },
            {
              "key": "D",
              "text": "1 : 3"
            }
          ],
          "correctAnswer": "A",
          "hint": "Volume bola $= \\frac{4}{3}\\pi r^3$. Volume tabung $= \\pi r^2 (2r) = 2\\pi r^3$. Rasio $= \\frac{4}{3} : 2 = 4 : 6 = 2 : 3$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{V_{\\text{bola}}}{V_{\\text{tabung}}} = \\frac{\\frac{4}{3}\\pi r^3}{2\\pi r^3} = \\frac{2}{3}$$\nPerbandingannya adalah **2 : 3** (Opsi A)."
        },
        {
          "id": "smp9-b2-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Luas permukaan setengah bola padat (pejal) yang memiliki jari-jari 10 cm adalah... ($\\pi = 3{,}14$)",
          "options": [
            {
              "key": "A",
              "text": "942 cm²"
            },
            {
              "key": "B",
              "text": "628 cm²"
            },
            {
              "key": "C",
              "text": "314 cm²"
            },
            {
              "key": "D",
              "text": "1.256 cm²"
            }
          ],
          "correctAnswer": "A",
          "hint": "Luas setengah bola pejal $= 3\\pi r^2 = 3 \\times 3{,}14 \\times 100$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$L = 3\\pi r^2 = 3 \\times 314 = 942\\text{ cm}^2$$\nLuas permukaannya adalah **942 cm²** (Opsi A)."
        },
        {
          "id": "smp9-b2-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Jika jari-jari sebuah tabung diperbesar menjadi 2 kali semula dan tingginya diperkecil menjadi $\\frac{1}{2}$ kali semula, perbandingan volume tabung setelah perubahan terhadap volume semula adalah...",
          "options": [
            {
              "key": "A",
              "text": "2 : 1"
            },
            {
              "key": "B",
              "text": "4 : 1"
            },
            {
              "key": "C",
              "text": "1 : 1"
            },
            {
              "key": "D",
              "text": "1 : 2"
            }
          ],
          "correctAnswer": "A",
          "hint": "$V_2 = \\pi (2r)^2 (\\frac{1}{2}t) = \\pi (4r^2) (\\frac{1}{2}t) = 2\\pi r^2 t = 2 V_1$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$V_2 = \\pi (2r)^2 \\left(\\frac{1}{2}t\\right) = 2 \\pi r^2 t = 2V_1$$\nPerbandingannya adalah **2 : 1** (Opsi A)."
        },
        {
          "id": "smp9-b2-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah bandul timah padat dibentuk dari gabungan kerucut dan belahan bola dengan jari-jari sama yaitu 7 cm. Jika tinggi kerucut 24 cm, volume bandul tersebut adalah... ($\\pi = \\frac{22}{7}$)",
          "options": [
            {
              "key": "A",
              "text": "1.950,67 cm³"
            },
            {
              "key": "B",
              "text": "1.840,33 cm³"
            },
            {
              "key": "C",
              "text": "2.100,50 cm³"
            },
            {
              "key": "D",
              "text": "1.750,25 cm³"
            }
          ],
          "correctAnswer": "A",
          "hint": "Volume kerucut: $\\frac{1}{3} \\times \\frac{22}{7} \\times 49 \\times 24 = 1.232$. Setengah bola: $\\frac{2}{3} \\times \\frac{22}{7} \\times 343 = 718{,}67$. Total $= 1.232 + 718{,}67 = 1.950{,}67$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $V_{\\text{kerucut}} = \\frac{1}{3} \\times 154 \\times 24 = 1.232\\text{ cm}^3$\n2. $V_{\\text{setengah bola}} = \\frac{2}{3} \\times \\frac{22}{7} \\times 343 = 718{,}67\\text{ cm}^3$\n3. Total $= 1.232 + 718{,}67 = 1.950{,}67\\text{ cm}^3$ (Opsi A)."
        },
        {
          "id": "smp9-b2-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah tangki air berbentuk tabung dengan jari-jari 1,4 meter dan tinggi 2 meter bocor sehingga air berkurang sebanyak 308 liter per jam. Waktu yang dibutuhkan agar air di dalam tangki yang semula penuh menjadi kosong adalah... ($\\pi = \\frac{22}{7}$)",
          "options": [
            {
              "key": "A",
              "text": "40 jam"
            },
            {
              "key": "B",
              "text": "35 jam"
            },
            {
              "key": "C",
              "text": "45 jam"
            },
            {
              "key": "D",
              "text": "50 jam"
            }
          ],
          "correctAnswer": "A",
          "hint": "Volume tangki $= \\frac{22}{7} \\times 1{,}4^2 \\times 2 = 12{,}32\\text{ m}^3 = 12.320\\text{ liter}$. Waktu $= 12.320 : 308 = 40$ jam.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $V = \\frac{22}{7} \\times 1{,}96 \\times 2 = 12{,}32\\text{ m}^3 = 12.320\\text{ liter}$\n2. Waktu $= 12.320 : 308 = 40\\text{ jam}$ (Opsi A)."
        },
        {
          "id": "smp9-b2-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Suatu kerucut terpancung memiliki jari-jari lingkaran alas 10 cm, jari-jari lingkaran atas 4 cm, dan tinggi 8 cm. Volume kerucut terpancung tersebut adalah... ($\\pi = 3{,}14$)",
          "options": [
            {
              "key": "A",
              "text": "1.306,24 cm³"
            },
            {
              "key": "B",
              "text": "1.250,50 cm³"
            },
            {
              "key": "C",
              "text": "1.420,10 cm³"
            },
            {
              "key": "D",
              "text": "1.180,60 cm³"
            }
          ],
          "correctAnswer": "A",
          "hint": "Volume kerucut terpancung: $V = \\frac{1}{3}\\pi t (R^2 + Rr + r^2) = \\frac{1}{3} \\times 3{,}14 \\times 8 \\times (100 + 40 + 16) = \\frac{1}{3} \\times 25{,}12 \\times 156 = 1.306{,}24$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$V = \\frac{1}{3}\\pi t (R^2 + Rr + r^2) = \\frac{1}{3} \\times 3{,}14 \\times 8 \\times 156 = 1.306{,}24\\text{ cm}^3$$ (Opsi A)."
        },
        {
          "id": "smp9-b2-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah kawat silinder tembaga memiliki panjang 100 meter (10.000 cm) dan jari-jari penampang 0,1 cm. Jika massa jenis tembaga adalah $8{,}9\\text{ g/cm}^3$, massa kawat tersebut dengan $\\pi = 3{,}14$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "2.794,6 gram"
            },
            {
              "key": "B",
              "text": "2.540,0 gram"
            },
            {
              "key": "C",
              "text": "2.980,0 gram"
            },
            {
              "key": "D",
              "text": "3.140,0 gram"
            }
          ],
          "correctAnswer": "A",
          "hint": "Volume kawat $= \\pi r^2 t = 3{,}14 \\times (0{,}1)^2 \\times 10.000 = 314\\text{ cm}^3$. Massa $= 314 \\times 8{,}9 = 2.794{,}6$ gram.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $V = 3{,}14 \\times 0{,}01 \\times 10.000 = 314\\text{ cm}^3$\n2. $\\text{Massa} = 314 \\times 8{,}9 = 2.794{,}6\\text{ gram}$ (Opsi A)."
        }
      ]
    },
    {
      "id": "smp9-bab3-transformasi-geometri",
      "title": "Bab 3: Transformasi Geometri",
      "summary": {
        "overview": "Pernahkah kalian mengamati bayangan wajah sendiri saat berdiri di depan cermin datar? Mengapa bayangan tampak berada pada jarak yang sama persis di belakang cermin namun posisinya bertukar kiri dan kanan? Atau pernahkah kalian melihat motif kain batik tradisional Nusantara yang mengulang bentuk bunga yang sama setelah digeser, diputar, atau diperbesar ukurannya? Fenomena visual perpindahan posisi dan ukuran objek geometri ini dipelajari dalam Transformasi Geometri.\n\nDalam dunia animasi komputer, pemrograman game, hingga desain grafis digital, transformasi geometri adalah tulang punggung perangkat lunak render. Ketika sebuah mobil dalam video game melaju di jalan (pergeseran koordinat), ban mobil berputar mengelilingi porosnya (perputaran sudut), kaca spion merefleksikan pemandangan jalan di belakang (pencerminan garis), dan objek kamera mendekat melakukan zooming (perbesaran skala), seluruh gerakan tersebut dieksekusi secara matematis melalui rumus transformasi geometri.\n\nBab ini membimbing siswa Kelas 9 memahami empat pilar transformasi geometri pada bidang Cartesius: (1) Translasi (pergeseran posisi sejauh vektor tertentu); (2) Refleksi (pencerminan terhadap titik asal, sumbu-$x$, sumbu-$y$, garis $y=x$, atau garis $y=-x$); (3) Rotasi (perputaran terhadap pusat titik tertentu dengan sudut $90^\\circ$ atau $180^\\circ$); serta (4) Dilatasi (perbesaran atau perkecilan ukuran dengan faktor skala $k$).",
        "coreConcepts": [
          "Translasi (Pergeseran): Menggeser setiap titik $(x, y)$ sejauh vektor $T = \\begin{pmatrix} a \\\\ b \\end{pmatrix}$. Bayangan titik: $A'(x + a, y + b)$. Sifat: bentuk dan ukuran bangun tidak berubah sama sekali (isometri).",
          "Refleksi (Pencerminan): Membalikkan posisi objek terhadap garis cermin tertentu:\n- Terhadap sumbu-$x$: $(x, -y)$\n- Terhadap sumbu-$y$: $(-x, y)$\n- Terhadap garis $y = x$: $(y, x)$\n- Terhadap garis $y = -x$: $(-y, -x)$\n- Terhadap titik asal $(0, 0)$: $(-x, -y)$.",
          "Rotasi (Perputaran): Memutar objek sejauh sudut $\\alpha$ terhadap pusat $O(0,0)$ (arah berlawanan jarum jam bernilai positif):\n- Rotasi $[O, +90^\\circ]$: $(-y, x)$\n- Rotasi $[O, 180^\\circ]$: $(-x, -y)$\n- Rotasi $[O, -90^\\circ]$: $(y, -x)$.",
          "Dilatasi (Perkalian Skala): Mengubah ukuran bangun dengan faktor skala $k$ terhadap pusat $O(0, 0)$: $A'(kx, ky)$. Jika $|k| > 1$ bangun diperbesar; jika $0 < |k| < 1$ bangun diperkecil."
        ],
        "workedExamples": [
          {
            "title": "Bayangan Titik oleh Translasi Berurutan",
            "problem": "Titik $P(3, -5)$ ditranslasikan oleh $T_1 = \\begin{pmatrix} -2 \\\\ 4 \\end{pmatrix}$, kemudian dilanjutkan oleh translasi $T_2 = \\begin{pmatrix} 5 \\\\ 1 \\end{pmatrix}$. Tentukan koordinat akhir bayangan titik $P$.",
            "solution": "Langkah 1: Gabungkan kedua vektor translasi:\n$$T = T_1 + T_2 = \\begin{pmatrix} -2 + 5 \\\\ 4 + 1 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 5 \\end{pmatrix}$$\n\nLangkah 2: Terapkan translasi gabungan pada titik $P(3, -5)$:\n$$x' = 3 + 3 = 6$$\n$$y' = -5 + 5 = 0$$\nKoordinat akhir bayangan titik adalah **$P''(6, 0)$**."
          },
          {
            "title": "Refleksi terhadap Garis y = x dilanjutkan Dilatasi",
            "problem": "Titik $A(2, -4)$ dicerminkan terhadap garis $y = x$, kemudian didilatasikan terhadap pusat $O(0,0)$ dengan faktor skala $k = 3$. Tentukan koordinat akhir titik tersebut.",
            "solution": "Langkah 1: Refleksi titik $A(2, -4)$ terhadap garis $y = x$ menukar nilai absis dan ordinat:\n$$(x, y) \\to (y, x) \\implies A'(-4, 2)$$\n\nLangkah 2: Dilatasi titik $A'(-4, 2)$ dengan faktor skala $k = 3$:\n$$A''(k \\cdot x', k \\cdot y') = A''(3(-4), 3(2)) = A''(-12, 6)$$\nKoordinat akhir bayangan titik adalah **$A''(-12, 6)$**."
          }
        ],
        "keyFormulas": [
          {
            "label": "Translasi",
            "formula": "(x', y') = (x + a, y + b)"
          },
          {
            "label": "Refleksi Sumbu-X",
            "formula": "(x', y') = (x, -y)"
          },
          {
            "label": "Refleksi Garis y = x",
            "formula": "(x', y') = (y, x)"
          },
          {
            "label": "Rotasi [O, 90°]",
            "formula": "(x', y') = (-y, x)"
          },
          {
            "label": "Dilatasi [O, k]",
            "formula": "(x', y') = (kx, ky)"
          }
        ],
        "misconceptions": [
          "Tertukar antara sudut putaran rotasi positif dan negatif: sudut positif berlawanan arah jarum jam, sedangkan sudut negatif searah jarum jam.",
          "Tertukar koordinat bayangan refleksi garis $y = x$ dengan $y = -x$: pada $y=x$ tanda tidak berubah $(y, x)$, sedangkan pada $y=-x$ tandanya dinegatifkan $(-y, -x)$."
        ],
        "tutorTip": "Ingat rumus praktis rotasi pusat $O(0,0)$: Rotasi $90^\\circ$ berlawanan arah jarum jam membalik posisi dan mengubah tanda $y$ pertama menjadi $(-y, x)$!"
      },
      "questions": [
        {
          "id": "smp9-b3-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Bayangan titik $A(3, -5)$ oleh translasi $T = \\begin{pmatrix} -2 \\\\ 7 \\end{pmatrix}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$(1, 2)$"
            },
            {
              "key": "B",
              "text": "$(5, 2)$"
            },
            {
              "key": "C",
              "text": "$(1, -12)$"
            },
            {
              "key": "D",
              "text": "$(-6, -35)$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Jumlahkan komponen absis dan ordinat: $x' = 3 + (-2)$ dan $y' = -5 + 7$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $x' = 3 + (-2) = 1$\n2. $y' = -5 + 7 = 2$\nKoordinat bayangannya adalah **$(1, 2)$** (Opsi A)."
        },
        {
          "id": "smp9-b3-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Bayangan titik $B(-4, 6)$ jika dicerminkan terhadap sumbu-$x$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$(-4, -6)$"
            },
            {
              "key": "B",
              "text": "$(4, 6)$"
            },
            {
              "key": "C",
              "text": "$(4, -6)$"
            },
            {
              "key": "D",
              "text": "$(6, -4)$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Pencerminan terhadap sumbu-$x$ mengubah tanda $y$ menjadi lawannya: $(x, y) \\to (x, -y)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Absis $x$ tetap: $-4$.\n2. Ordinat $y$ dinegatifkan: $-(6) = -6$.\nBayangannya adalah **$(-4, -6)$** (Opsi A)."
        },
        {
          "id": "smp9-b3-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Titik $P(5, 2)$ dirotasikan sebesar $90^\\circ$ berlawanan arah jarum jam dengan pusat $O(0,0)$. Koordinat bayangan titik $P$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$(-2, 5)$"
            },
            {
              "key": "B",
              "text": "$(2, -5)$"
            },
            {
              "key": "C",
              "text": "$(-5, -2)$"
            },
            {
              "key": "D",
              "text": "$(2, 5)$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Rumus rotasi $[O, 90^\\circ]$ berlawanan arah jarum jam: $(x, y) \\to (-y, x)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $x = 5, y = 2$\n2. Masukkan ke rumus: $(-y, x) = (-2, 5)$\nKoordinat bayangannya adalah **$(-2, 5)$** (Opsi A)."
        },
        {
          "id": "smp9-b3-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Titik $K(-2, 3)$ didilatasikan dengan faktor skala $k = -3$ terhadap pusat $O(0,0)$, kemudian bayangannya dicerminkan terhadap garis $y = x$. Koordinat akhir titik $K$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$(-9, 6)$"
            },
            {
              "key": "B",
              "text": "$(6, -9)$"
            },
            {
              "key": "C",
              "text": "$(-6, 9)$"
            },
            {
              "key": "D",
              "text": "$(9, -6)$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Lakukan dilatasi terlebih dahulu: $(-3(-2), -3(3)) = (6, -9)$, lalu tukar posisinya untuk refleksi garis $y = x$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Dilatasi dengan pusat $O$ dan skala $k = -3$:\n$$K'(-3(-2), -3(3)) = K'(6, -9)$$\n2. Refleksi titik $K'(6, -9)$ terhadap garis $y = x$ menukar posisinya: $(x, y) \\to (y, x)$:\n$$K''(-9, 6)$$\nKoordinat akhirnya adalah **$(-9, 6)$** (Opsi A)."
        },
        {
          "id": "smp9-b3-5",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Bayangan titik $A(2, 5)$ yang ditranslasikan oleh $T = \\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "A'(5, 3)"
            },
            {
              "key": "B",
              "text": "A'(5, 7)"
            },
            {
              "key": "C",
              "text": "A'(-1, 7)"
            },
            {
              "key": "D",
              "text": "A'(6, -10)"
            }
          ],
          "correctAnswer": "A",
          "hint": "Jumlahkan koordinat awal dengan vektor translasi: $(x + a, y + b) = (2 + 3, 5 - 2)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$A' = (2 + 3, 5 - 2) = (5, 3)$$\nKoordinat bayangannya adalah **A'(5, 3)** (Opsi A)."
        },
        {
          "id": "smp9-b3-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bayangan titik $B(-4, 7)$ yang direfleksikan terhadap sumbu-$X$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "B'(-4, -7)"
            },
            {
              "key": "B",
              "text": "B'(4, 7)"
            },
            {
              "key": "C",
              "text": "B'(4, -7)"
            },
            {
              "key": "D",
              "text": "B'(-7, -4)"
            }
          ],
          "correctAnswer": "A",
          "hint": "Refleksi terhadap sumbu-$X$: $(x, y) \\to (x, -y)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$B'(-4, -7)$$\nBayangannya adalah **B'(-4, -7)** (Opsi A)."
        },
        {
          "id": "smp9-b3-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bayangan titik $C(3, -8)$ yang direfleksikan terhadap sumbu-$Y$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "C'(-3, -8)"
            },
            {
              "key": "B",
              "text": "C'(3, 8)"
            },
            {
              "key": "C",
              "text": "C'(-3, 8)"
            },
            {
              "key": "D",
              "text": "C'(-8, 3)"
            }
          ],
          "correctAnswer": "A",
          "hint": "Refleksi terhadap sumbu-$Y$: $(x, y) \\to (-x, y)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$C'(-3, -8)$$\nBayangannya adalah **C'(-3, -8)** (Opsi A)."
        },
        {
          "id": "smp9-b3-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bayangan titik $D(5, 2)$ yang direfleksikan terhadap garis $y = x$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "D'(2, 5)"
            },
            {
              "key": "B",
              "text": "D'(-5, -2)"
            },
            {
              "key": "C",
              "text": "D'(-2, -5)"
            },
            {
              "key": "D",
              "text": "D'(5, -2)"
            }
          ],
          "correctAnswer": "A",
          "hint": "Refleksi terhadap garis $y = x$: $(x, y) \\to (y, x)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$D'(2, 5)$$\nBayangannya adalah **D'(2, 5)** (Opsi A)."
        },
        {
          "id": "smp9-b3-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bayangan titik $P(4, -3)$ yang dirotasikan sejauh $90^\\circ$ berlawanan arah jarum jam dengan pusat $O(0, 0)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "P'(3, 4)"
            },
            {
              "key": "B",
              "text": "P'(-3, -4)"
            },
            {
              "key": "C",
              "text": "P'(-4, 3)"
            },
            {
              "key": "D",
              "text": "P'(4, 3)"
            }
          ],
          "correctAnswer": "A",
          "hint": "Rotasi $[O, 90^\\circ]$: $(x, y) \\to (-y, x)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P'(-(-3), 4) = P'(3, 4)$$\nBayangannya adalah **P'(3, 4)** (Opsi A)."
        },
        {
          "id": "smp9-b3-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Titik $Q(-2, 6)$ didilatasikan dengan pusat $O(0, 0)$ dan faktor skala $k = 3$. Koordinat bayangan titik $Q$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "Q'(-6, 18)"
            },
            {
              "key": "B",
              "text": "Q'(-6, 2)"
            },
            {
              "key": "C",
              "text": "Q'(1, 9)"
            },
            {
              "key": "D",
              "text": "Q'(6, -18)"
            }
          ],
          "correctAnswer": "A",
          "hint": "Dilatasi $[O, k]$: $(x, y) \\to (kx, ky) = (3(-2), 3(6))$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$Q' = (3 \\times (-2), 3 \\times 6) = (-6, 18)$$\nBayangannya adalah **Q'(-6, 18)** (Opsi A)."
        },
        {
          "id": "smp9-b3-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Titik $A(1, 4)$ ditranslasikan oleh $T_1 = \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$ kemudian dilanjutkan translasi oleh $T_2 = \\begin{pmatrix} -4 \\\\ 1 \\end{pmatrix}$. Bayangan akhir titik $A$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "A'(-1, 8)"
            },
            {
              "key": "B",
              "text": "A'(3, 7)"
            },
            {
              "key": "C",
              "text": "A'(-1, 6)"
            },
            {
              "key": "D",
              "text": "A'(1, 8)"
            }
          ],
          "correctAnswer": "A",
          "hint": "Translasi gabungan: $T = T_1 + T_2 = \\begin{pmatrix} 2 - 4 \\\\ 3 + 1 \\end{pmatrix} = \\begin{pmatrix} -2 \\\\ 4 \\end{pmatrix}$. $A' = (1 - 2, 4 + 4)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$A' = (1 + 2 - 4, 4 + 3 + 1) = (-1, 8)$$\nBayangannya adalah **A'(-1, 8)** (Opsi A)."
        },
        {
          "id": "smp9-b3-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bayangan titik $K(3, 7)$ yang direfleksikan terhadap garis $x = 5$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "K'(7, 7)"
            },
            {
              "key": "B",
              "text": "K'(5, 7)"
            },
            {
              "key": "C",
              "text": "K'(2, 7)"
            },
            {
              "key": "D",
              "text": "K'(8, 7)"
            }
          ],
          "correctAnswer": "A",
          "hint": "Refleksi terhadap $x = h$: $x' = 2h - x = 2(5) - 3 = 7$, sedangkan $y' = y = 7$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$x' = 2(5) - 3 = 7, \\quad y' = 7 \\implies K'(7, 7)$$\nBayangannya adalah **K'(7, 7)** (Opsi A)."
        },
        {
          "id": "smp9-b3-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bayangan titik $M(-2, 4)$ yang direfleksikan terhadap garis $y = 1$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "M'(-2, -2)"
            },
            {
              "key": "B",
              "text": "M'(-2, 2)"
            },
            {
              "key": "C",
              "text": "M'(4, 1)"
            },
            {
              "key": "D",
              "text": "M'(-2, 3)"
            }
          ],
          "correctAnswer": "A",
          "hint": "Refleksi terhadap $y = k$: $y' = 2k - y = 2(1) - 4 = -2$, sedangkan $x' = x = -2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$x' = -2, \\quad y' = 2(1) - 4 = -2 \\implies M'(-2, -2)$$\nBayangannya adalah **M'(-2, -2)** (Opsi A)."
        },
        {
          "id": "smp9-b3-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bayangan titik $R(5, -1)$ yang dirotasikan sejauh $180^\\circ$ dengan pusat $O(0, 0)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "R'(-5, 1)"
            },
            {
              "key": "B",
              "text": "R'(5, 1)"
            },
            {
              "key": "C",
              "text": "R'(-1, 5)"
            },
            {
              "key": "D",
              "text": "R'(-5, -1)"
            }
          ],
          "correctAnswer": "A",
          "hint": "Rotasi $[O, 180^\\circ]$: $(x, y) \\to (-x, -y)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$R'(-5, -(-1)) = R'(-5, 1)$$\nBayangannya adalah **R'(-5, 1)** (Opsi A)."
        },
        {
          "id": "smp9-b3-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah segitiga $ABC$ dengan luas 15 cm² didilatasikan dengan faktor skala $k = 4$. Luas bayangan segitiga tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "240 cm²"
            },
            {
              "key": "B",
              "text": "60 cm²"
            },
            {
              "key": "C",
              "text": "120 cm²"
            },
            {
              "key": "D",
              "text": "180 cm²"
            }
          ],
          "correctAnswer": "A",
          "hint": "Luas bangun hasil dilatasi $= k^2 \\times \\text{Luas awal} = 4^2 \\times 15 = 16 \\times 15 = 240$ cm².",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Luas bayangan} = 4^2 \\times 15 = 16 \\times 15 = 240\\text{ cm}^2$$\nLuasnya adalah **240 cm²** (Opsi A)."
        },
        {
          "id": "smp9-b3-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Bayangan garis $2x + 3y = 6$ yang ditranslasikan oleh $T = \\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix}$ memiliki persamaan...",
          "options": [
            {
              "key": "A",
              "text": "2x + 3y = 2"
            },
            {
              "key": "B",
              "text": "2x + 3y = 10"
            },
            {
              "key": "C",
              "text": "2x - 3y = 2"
            },
            {
              "key": "D",
              "text": "3x + 2y = 4"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan substitusi $x = x' - 1$ dan $y = y' + 2$: $2(x - 1) + 3(y + 2) = 6 \\implies 2x - 2 + 3y + 6 = 6 \\implies 2x + 3y = 2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$2(x - 1) + 3(y + 2) = 6 \\implies 2x + 3y + 4 = 6 \\implies 2x + 3y = 2$$ (Opsi A)."
        },
        {
          "id": "smp9-b3-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Titik $P(2, -3)$ direfleksikan terhadap garis $y = -x$, kemudian dilanjutkan dengan translasi oleh $T = \\begin{pmatrix} -1 \\\\ 4 \\end{pmatrix}$. Koordinat bayangan akhir titik $P$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "P'(2, 2)"
            },
            {
              "key": "B",
              "text": "P'(4, 2)"
            },
            {
              "key": "C",
              "text": "P'(2, -2)"
            },
            {
              "key": "D",
              "text": "P'(3, 1)"
            }
          ],
          "correctAnswer": "A",
          "hint": "1. Refleksi $y = -x$: $(x, y) \\to (-y, -x) = (3, -2)$. 2. Translasi: $(3 - 1, -2 + 4) = (2, 2)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Cermin $y = -x$: $P'(3, -2)$\n2. Translasi: $P''(3 - 1, -2 + 4) = P''(2, 2)$ (Opsi A)."
        },
        {
          "id": "smp9-b3-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Bayangan titik $A(3, 5)$ oleh dilatasi dengan pusat $P(1, 2)$ dan faktor skala $k = 2$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "A'(5, 8)"
            },
            {
              "key": "B",
              "text": "A'(6, 10)"
            },
            {
              "key": "C",
              "text": "A'(4, 7)"
            },
            {
              "key": "D",
              "text": "A'(7, 11)"
            }
          ],
          "correctAnswer": "A",
          "hint": "Rumus dilatasi pusat $(a, b)$: $x' = a + k(x - a) = 1 + 2(3 - 1) = 5$, $y' = b + k(y - b) = 2 + 2(5 - 2) = 8$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n- $x' = 1 + 2(2) = 5$\n- $y' = 2 + 2(3) = 8$\nBayangannya adalah **A'(5, 8)** (Opsi A)."
        },
        {
          "id": "smp9-b3-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah titik $T(a, b)$ dicerminkan terhadap sumbu-$X$ menghasilkan titik $(4, -6)$. Kemudian titik $(4, -6)$ ditranslasikan oleh $\\begin{pmatrix} -1 \\\\ 2 \\end{pmatrix}$ menghasilkan $(c, d)$. Nilai dari $a + b + c + d$ adalah...",
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
              "text": "7"
            },
            {
              "key": "D",
              "text": "13"
            }
          ],
          "correctAnswer": "A",
          "hint": "Dari $T'(4, -6)$ cermin sumbu-$X$, maka $a = 4$ dan $b = 6$. Bayangan translasi: $c = 4 - 1 = 3$ dan $d = -6 + 2 = -4$. $a + b + c + d = 4 + 6 + 3 - 4 = 9$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $T(a, b) = (4, 6) \\implies a = 4, b = 6$\n2. $(c, d) = (4 - 1, -6 + 2) = (3, -4)$\n3. $a + b + c + d = 4 + 6 + 3 - 4 = 9$ (Opsi A)."
        },
        {
          "id": "smp9-b3-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Luas lingkaran $L$ dengan jari-jari 7 cm didilatasikan oleh $[O, 3]$. Perubahan (pertambahan) luas lingkaran tersebut dengan $\\pi = \\frac{22}{7}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "1.232 cm²"
            },
            {
              "key": "B",
              "text": "1.386 cm²"
            },
            {
              "key": "C",
              "text": "1.540 cm²"
            },
            {
              "key": "D",
              "text": "1.078 cm²"
            }
          ],
          "correctAnswer": "A",
          "hint": "Luas awal $= \\frac{22}{7} \\times 49 = 154$ cm². Luas baru $= 3^2 \\times 154 = 9 \\times 154 = 1.386$ cm². Pertambahan luas $= 1.386 - 154 = 1.232$ cm².",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Luas awal $= 154\\text{ cm}^2$\n2. Luas baru $= 9 \\times 154 = 1.386\\text{ cm}^2$\n3. Pertambahan $= 1.386 - 154 = 1.232\\text{ cm}^2$ (Opsi A)."
        }
      ]
    },
    {
      "id": "smp9-bab4-peluang-sampel",
      "title": "Bab 4: Peluang dan Pemilihan Sampel",
      "summary": {
        "overview": "Setiap hari kita disuguhi hasil survei dan jajak pendapat di media massa: tingkat elektabilitas calon kepala daerah, persentase kepuasan masyarakat terhadap layanan transportasi publik, hingga tingkat efektivitas obat flu baru. Bagaimana lembaga survei dapat mengetahui pandangan jutaan penduduk hanya dengan mewawancarai seribu orang responden? Jawabannya terletak pada keterpaduan Teori Peluang dan Teknik Penarikan Sampel (Sampling).\n\nJika sampel yang diambil bias (misalnya survei kebiasaan berolahraga hanya dilakukan di pusat kebugaran elit), maka kesimpulan yang ditarik tidak akan mewakili populasi yang sesungguhnya. Matematika membekali kita dengan metode penarikan sampel acak (random sampling) yang representatif. Di sisi lain, teori peluang memungkinkan kita menguantifikasi derajat kepastian dari suatu kejadian acak, baik melalui pendekatan peluang empirik (frekuensi relatif berdasarkan percobaan langsung) maupun peluang teoritik (rasio titik sampel terhadap ruang sampel).\n\nBab ini membimbing siswa Kelas 9 membedakan konsep populasi dan sampel representatif, memahami teknik acak sederhana dalam survei, membandingkan peluang empirik dari hasil eksperimen dengan peluang teoritik matematis, serta menggunakan konsep frekuensi harapan untuk memprediksi kejadian berulang dalam kehidupan sehari-hari.",
        "coreConcepts": [
          "Populasi vs Sampel: Populasi adalah keseluruhan objek atau subjek penelitian yang menjadi sasaran penyelidikan. Sampel adalah sebagian anggota populasi yang dipilih secara representatif untuk diteliti secara langsung.",
          "Teknik Penarikan Sampel Representatif: Sampel harus mencerminkan sifat populasi tanpa bias. Metode utama: Sampel Acak Sederhana (setiap anggota populasi memiliki kesempatan yang sama untuk terpilih).",
          "Peluang Empirik (Frekuensi Relatif): Rasio terjadinya suatu peristiwa terhadap total banyaknya percobaan yang telah dilakukan: $P_{\\text{empirik}} = \\frac{\\text{Banyak kejadian muncul}}{\\text{Total percobaan}} = \\frac{f}{n}$. Sesuai Hukum Bilangan Besar, semakin banyak percobaan dilakukan, peluang empirik akan mendekati peluang teoritik.",
          "Peluang Teoritik: Perbandingan banyaknya kejadian $A$ yang diharapkan terhadap seluruh kemungkinan ruang sampel $S$: $P(A) = \\frac{n(A)}{n(S)}$, di mana $0 \\le P(A) \\le 1$.",
          "Frekuensi Harapan: Prediksi berapa kali kejadian $A$ akan muncul jika percobaan dilakukan sebanyak $N$ kali: $F_h(A) = N \\times P(A)$."
        ],
        "workedExamples": [
          {
            "title": "Membandingkan Peluang Empirik dan Teoritik",
            "problem": "Sebuah koin logam dilempar sebanyak 100 kali, dan sisi Angka muncul sebanyak 54 kali. Tentukan peluang empirik munculnya sisi Angka dari percobaan tersebut dan bandingkan dengan peluang teoritiknya.",
            "solution": "Langkah 1: Hitung peluang empirik dari hasil percobaan:\n$$P_{\\text{empirik}} = \\frac{\\text{Frekuensi muncul}}{\\text{Total lemparan}} = \\frac{54}{100} = 0{,}54$$\n\nLangkah 2: Hitung peluang teoritik koin seimbang:\nRuang sampel koin: $S = \\{\\text{Angka}, \\text{Gambar}\\} \\implies n(S) = 2$.\n$$P_{\\text{teoritik}} = \\frac{n(A)}{n(S)} = \\frac{1}{2} = 0{,}50$$\n\nLangkah 3: Kesimpulan:\nPeluang empiriknya adalah **$0{,}54$** yang nilainya sangat mendekati nilai peluang teoritik idealnya yaitu **$0{,}50$**."
          },
          {
            "title": "Menghitung Frekuensi Harapan Undian Dadu",
            "problem": "Sebuah dadu bermata enam dilempar sebanyak 150 kali. Berapakah frekuensi harapan munculnya mata dadu faktor prima dari 6?",
            "solution": "Langkah 1: Tentukan ruang sampel dan himpunan kejadian:\n- Ruang sampel dadu: $S = \\{1, 2, 3, 4, 5, 6\\} \\implies n(S) = 6$\n- Faktor prima dari 6 adalah $\\{2, 3\\} \\implies n(A) = 2$\n\nLangkah 2: Hitung peluang teoritik:\n$$P(A) = \\frac{2}{6} = \\frac{1}{3}$$\n\nLangkah 3: Hitung frekuensi harapan untuk $N = 150$ kali lemparan:\n$$F_h(A) = 150 \\times \\frac{1}{3} = 50\\text{ kali}$$\nFrekuensi harapan muncul mata dadu faktor prima dari 6 adalah **50 kali**."
          }
        ],
        "keyFormulas": [
          {
            "label": "Peluang Empirik",
            "formula": "P_{\\text{emp}} = \\frac{f}{n}"
          },
          {
            "label": "Peluang Teoritik",
            "formula": "P(A) = \\frac{n(A)}{n(S)}"
          },
          {
            "label": "Frekuensi Harapan",
            "formula": "F_h = N \\times P(A)"
          }
        ],
        "misconceptions": [
          "Mengira peluang empirik selalu harus bernilai sama persis dengan peluang teoritik pada percobaan kecil. Fluktuasi acak wajar terjadi pada jumlah sampel sedikit.",
          "Memilih sampel secara sengaja pada kelompok tertentu (convenience sampling) lalu mengklaimnya mewakili seluruh populasi luas."
        ],
        "tutorTip": "Semakin banyak kamu melakukan percobaan pelemparan, frekuensi relatif (peluang empirik) akan bergerak semakin mendekati nilai peluang teoritiknya secara eksak!"
      },
      "questions": [
        {
          "id": "smp9-b4-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Sebuah dadu dilempar sebanyak 60 kali dan mata dadu 4 muncul sebanyak 12 kali. Peluang empirik munculnya mata dadu 4 adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\frac{1}{5}$"
            },
            {
              "key": "B",
              "text": "$\\frac{1}{6}$"
            },
            {
              "key": "C",
              "text": "$\\frac{1}{4}$"
            },
            {
              "key": "D",
              "text": "$\\frac{1}{3}$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Bagi banyaknya kejadian muncul (12) dengan total percobaan (60).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P_{\\text{empirik}} = \\frac{12}{60} = \\frac{1}{5}$$\nPeluang empiriknya adalah **$\\frac{1}{5}$** (Opsi A)."
        },
        {
          "id": "smp9-b4-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Seorang peneliti ingin mengetahui rata-rata waktu belajar harian seluruh siswa di sebuah SMP yang memiliki 900 siswa. Peneliti tersebut mengambil 90 siswa dari berbagai kelas secara acak. Sampel dari penelitian tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "90 siswa yang terpilih secara acak"
            },
            {
              "key": "B",
              "text": "Seluruh 900 siswa SMP tersebut"
            },
            {
              "key": "C",
              "text": "Guru-guru di SMP tersebut"
            },
            {
              "key": "D",
              "text": "Rata-rata waktu belajar"
            }
          ],
          "correctAnswer": "A",
          "hint": "Sampel adalah sebagian anggota populasi yang diambil untuk diteliti.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nPopulasinya adalah seluruh 900 siswa, sedangkan sampelnya adalah bagian yang dipilih untuk diwawancarai, yaitu **90 siswa yang terpilih secara acak** (Opsi A)."
        },
        {
          "id": "smp9-b4-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah kantong berisi 8 kelereng putih, 10 kelereng kuning, dan 6 kelereng hijau. Jika diambil satu kelereng secara acak, peluang terambilnya kelereng kuning adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\frac{5}{12}$"
            },
            {
              "key": "B",
              "text": "$\\frac{1}{3}$"
            },
            {
              "key": "C",
              "text": "$\\frac{1}{4}$"
            },
            {
              "key": "D",
              "text": "$\\frac{1}{2}$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Total seluruh kelereng: $8 + 10 + 6 = 24$. Peluangnya adalah $\\frac{10}{24}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Ruang sampel: $n(S) = 8 + 10 + 6 = 24$.\n2. Kelereng kuning: $n(K) = 10$.\n3. Peluang: $P = \\frac{10}{24} = \\frac{5}{12}$.\nPeluangnya adalah **$\\frac{5}{12}$** (Opsi A)."
        },
        {
          "id": "smp9-b4-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah koin logam dan sebuah dadu bersisi enam dilempar secara bersamaan sebanyak 120 kali. Frekuensi harapan munculnya pasangan sisi Gambar pada koin dan mata dadu bilangan ganjil adalah...",
          "options": [
            {
              "key": "A",
              "text": "30 kali"
            },
            {
              "key": "B",
              "text": "60 kali"
            },
            {
              "key": "C",
              "text": "20 kali"
            },
            {
              "key": "D",
              "text": "40 kali"
            }
          ],
          "correctAnswer": "A",
          "hint": "Peluang sisi Gambar $= \\frac{1}{2}$, peluang mata dadu ganjil $\\{1, 3, 5\\} = \\frac{3}{6} = \\frac{1}{2}$. Kalikan keduanya, lalu kalikan 120.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Peluang gabungan saling bebas:\n$$P = P(\\text{Gambar}) \\times P(\\text{Ganjil}) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$$\n2. Frekuensi harapan:\n$$F_h = 120 \\times \\frac{1}{4} = 30\\text{ kali}$$\nFrekuensi harapan adalah **30 kali** (Opsi A)."
        },
        {
          "id": "smp9-b4-5",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Populasi adalah seluruh objek yang menjadi sasaran penelitian, sedangkan sampel adalah...",
          "options": [
            {
              "key": "A",
              "text": "Sebagian dari populasi yang diambil untuk mewakili populasi"
            },
            {
              "key": "B",
              "text": "Data yang sudah diolah menjadi tabel"
            },
            {
              "key": "C",
              "text": "Seluruh data yang bernilai ekstrem"
            },
            {
              "key": "D",
              "text": "Jumlah frekuensi terbanyak"
            }
          ],
          "correctAnswer": "A",
          "hint": "Sampel merupakan bagian representatif yang diambil dari populasi.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nSampel adalah **sebagian dari populasi yang mewakili populasi** (Opsi A)."
        },
        {
          "id": "smp9-b4-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Seorang peneliti ingin mengetahui kualitas air sumur di sebuah desa yang terdiri dari 500 rumah. Peneliti mengambil sampel air dari 25 rumah yang dipilih secara acak. Populasi dari penelitian tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "Air sumur seluruh rumah di desa tersebut (500 rumah)"
            },
            {
              "key": "B",
              "text": "Air sumur dari 25 rumah yang diambil"
            },
            {
              "key": "C",
              "text": "Peneliti yang mengambil sampel"
            },
            {
              "key": "D",
              "text": "Kedalaman sumur rata-rata"
            }
          ],
          "correctAnswer": "A",
          "hint": "Populasi mencakup seluruh sasaran: air sumur seluruh 500 rumah.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nPopulasinya adalah **air sumur seluruh rumah di desa tersebut** (Opsi A)."
        },
        {
          "id": "smp9-b4-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dua buah dadu dilempar bersamaan satu kali. Peluang munculnya mata dadu kembar (sama) adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{1}{6}"
            },
            {
              "key": "B",
              "text": "\\frac{1}{12}"
            },
            {
              "key": "C",
              "text": "\\frac{1}{36}"
            },
            {
              "key": "D",
              "text": "\\frac{1}{4}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Mata dadu kembar: (1,1), (2,2), (3,3), (4,4), (5,5), (6,6) ada 6 dari 36 kemungkinan. Peluang $= \\frac{6}{36} = \\frac{1}{6}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{6}{36} = \\frac{1}{6}$$\nPeluangnya adalah **$\\frac{1}{6}$** (Opsi A)."
        },
        {
          "id": "smp9-b4-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah kartu diambil secara acak dari satu set kartu bridge (52 kartu). Peluang terambilnya kartu As adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{1}{13}"
            },
            {
              "key": "B",
              "text": "\\frac{1}{52}"
            },
            {
              "key": "C",
              "text": "\\frac{1}{4}"
            },
            {
              "key": "D",
              "text": "\\frac{2}{13}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Terdapat 4 kartu As dalam 52 kartu. Peluang $= \\frac{4}{52} = \\frac{1}{13}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{4}{52} = \\frac{1}{13}$$\nPeluangnya adalah **$\\frac{1}{13}$** (Opsi A)."
        },
        {
          "id": "smp9-b4-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dari pelemparan sebuah dadu sebanyak 120 kali, frekuensi harapan munculnya mata dadu faktor dari 6 (1, 2, 3, 6) adalah...",
          "options": [
            {
              "key": "A",
              "text": "80 kali"
            },
            {
              "key": "B",
              "text": "60 kali"
            },
            {
              "key": "C",
              "text": "90 kali"
            },
            {
              "key": "D",
              "text": "40 kali"
            }
          ],
          "correctAnswer": "A",
          "hint": "Peluang faktor dari 6 $= \\frac{4}{6} = \\frac{2}{3}$. Frekuensi harapan $= 120 \\times \\frac{2}{3} = 80$ kali.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$F_h = 120 \\times \\frac{4}{6} = 80\\text{ kali}$$\nFrekuensi harapannya adalah **80 kali** (Opsi A)."
        },
        {
          "id": "smp9-b4-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dalam sebuah kantong terdapat 8 kelereng merah, 7 kelereng kuning, dan 5 kelereng biru. Peluang terambilnya bukan kelereng kuning adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{13}{20}"
            },
            {
              "key": "B",
              "text": "\\frac{7}{20}"
            },
            {
              "key": "C",
              "text": "\\frac{3}{5}"
            },
            {
              "key": "D",
              "text": "\\frac{1}{2}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Bukan kuning $= 8 + 5 = 13$. Total $= 20$. Peluang $= \\frac{13}{20}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P = 1 - \\frac{7}{20} = \\frac{13}{20}$$\nPeluangnya adalah **$\\frac{13}{20}$** (Opsi A)."
        },
        {
          "id": "smp9-b4-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Tiga koin dilempar bersamaan. Peluang muncul tepat 2 sisi Gambar adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{3}{8}"
            },
            {
              "key": "B",
              "text": "\\frac{1}{4}"
            },
            {
              "key": "C",
              "text": "\\frac{1}{2}"
            },
            {
              "key": "D",
              "text": "\\frac{1}{8}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kejadian tepat 2 Gambar: (G,G,A), (G,A,G), (A,G,G) ada 3 dari 8 kemungkinan.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{3}{8}$$\nPeluangnya adalah **$\\frac{3}{8}$** (Opsi A)."
        },
        {
          "id": "smp9-b4-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dalam pemilihan ketua OSIS dengan 400 pemilih, survei cepat terhadap 50 sampel acak menunjukkan 35 pemilih memilih kandidat A. Perkiraan perolehan suara total kandidat A adalah...",
          "options": [
            {
              "key": "A",
              "text": "280 suara"
            },
            {
              "key": "B",
              "text": "250 suara"
            },
            {
              "key": "C",
              "text": "300 suara"
            },
            {
              "key": "D",
              "text": "320 suara"
            }
          ],
          "correctAnswer": "A",
          "hint": "Proporsi sampel $= \\frac{35}{50} = 0{,}7$. Estimasi total $= 0{,}7 \\times 400 = 280$ suara.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Estimasi} = \\frac{35}{50} \\times 400 = 280\\text{ suara}$$\nPerkiraannya adalah **280 suara** (Opsi A)."
        },
        {
          "id": "smp9-b4-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dua buah dadu dilempar bersamaan. Peluang muncul jumlah kedua mata dadu kurang dari 5 adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{1}{6}"
            },
            {
              "key": "B",
              "text": "\\frac{5}{36}"
            },
            {
              "key": "C",
              "text": "\\frac{1}{9}"
            },
            {
              "key": "D",
              "text": "\\frac{7}{36}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Pasangan jumlah < 5: jumlah 2 (1,1), jumlah 3 (1,2),(2,1), jumlah 4 (1,3),(2,2),(3,1) total 6 pasangan. Peluang $= \\frac{6}{36} = \\frac{1}{6}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{6}{36} = \\frac{1}{6}$$\nPeluangnya adalah **$\\frac{1}{6}$** (Opsi A)."
        },
        {
          "id": "smp9-b4-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah pabrik lampu memproduksi 10.000 bohlam lampu. Dari pengujian 500 sampel acak, ditemukan 15 bohlam cacat. Perkiraan banyak bohlam cacat dari seluruh produksi adalah...",
          "options": [
            {
              "key": "A",
              "text": "300 bohlam"
            },
            {
              "key": "B",
              "text": "250 bohlam"
            },
            {
              "key": "C",
              "text": "350 bohlam"
            },
            {
              "key": "D",
              "text": "200 bohlam"
            }
          ],
          "correctAnswer": "A",
          "hint": "Persentase cacat $= \\frac{15}{500} = 0{,}03 = 3\\%$. Total cacat $= 3\\% \\times 10.000 = 300$ bohlam.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Estimasi} = \\frac{15}{500} \\times 10.000 = 300\\text{ bohlam}$$\nPerkiraannya adalah **300 bohlam** (Opsi A)."
        },
        {
          "id": "smp9-b4-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Peluang seorang penembak jitu tepat mengenai sasaran adalah 0,85. Jika penembak tersebut menembak sebanyak 40 kali, frekuensi harapan tembakan meleset adalah...",
          "options": [
            {
              "key": "A",
              "text": "6 kali"
            },
            {
              "key": "B",
              "text": "8 kali"
            },
            {
              "key": "C",
              "text": "5 kali"
            },
            {
              "key": "D",
              "text": "7 kali"
            }
          ],
          "correctAnswer": "A",
          "hint": "Peluang meleset $= 1 - 0{,}85 = 0{,}15$. Frekuensi meleset $= 40 \\times 0{,}15 = 6$ kali.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$F_h = 40 \\times (1 - 0{,}85) = 40 \\times 0{,}15 = 6\\text{ kali}$$\nFrekuensi meleset adalah **6 kali** (Opsi A)."
        },
        {
          "id": "smp9-b4-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah kantong berisi 6 bola merah dan 4 bola putih. Diambil 2 bola satu demi satu tanpa pengembalian. Peluang terambil bola pertama merah dan bola kedua putih adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{4}{15}"
            },
            {
              "key": "B",
              "text": "\\frac{6}{25}"
            },
            {
              "key": "C",
              "text": "\\frac{1}{5}"
            },
            {
              "key": "D",
              "text": "\\frac{2}{9}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Peluang merah pertama $= \\frac{6}{10}$. Peluang putih kedua $= \\frac{4}{9}$. Peluang bersama $= \\frac{6}{10} \\times \\frac{4}{9} = \\frac{24}{90} = \\frac{4}{15}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{6}{10} \\times \\frac{4}{9} = \\frac{24}{90} = \\frac{4}{15}$$\nPeluangnya adalah **$\\frac{4}{15}$** (Opsi A)."
        },
        {
          "id": "smp9-b4-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dua dadu dilempar bersamaan. Peluang muncul jumlah kedua mata dadu bernilai bilangan prima (2, 3, 5, 7, 11) adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{15}{36} = \\frac{5}{12}"
            },
            {
              "key": "B",
              "text": "\\frac{7}{18}"
            },
            {
              "key": "C",
              "text": "\\frac{1}{2}"
            },
            {
              "key": "D",
              "text": "\\frac{13}{36}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Jumlah 2: 1 pasang; Jumlah 3: 2 pasang; Jumlah 5: 4 pasang; Jumlah 7: 6 pasang; Jumlah 11: 2 pasang. Total $= 1 + 2 + 4 + 6 + 2 = 15$. Peluang $= \\frac{15}{36} = \\frac{5}{12}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{15}{36} = \\frac{5}{12}$$\nPeluangnya adalah **$\\frac{5}{12}$** (Opsi A)."
        },
        {
          "id": "smp9-b4-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Suatu keluarga berencana memiliki 3 orang anak. Peluang keluarga tersebut memiliki paling sedikit 1 anak laki-laki adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{7}{8}"
            },
            {
              "key": "B",
              "text": "\\frac{3}{4}"
            },
            {
              "key": "C",
              "text": "\\frac{1}{2}"
            },
            {
              "key": "D",
              "text": "\\frac{3}{8}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan komplemen: $1 - P(\\text{semua perempuan}) = 1 - \\frac{1}{8} = \\frac{7}{8}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P = 1 - \\left(\\frac{1}{2}\\right)^3 = 1 - \\frac{1}{8} = \\frac{7}{8}$$\nPeluangnya adalah **$\\frac{7}{8}$** (Opsi A)."
        },
        {
          "id": "smp9-b4-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dalam sebuah kotak terdapat 10 kartu bernomor 1 sampai 10. Jika diambil dua kartu sekaligus secara acak, peluang terambil kedua kartu bernomor genap adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{2}{9}"
            },
            {
              "key": "B",
              "text": "\\frac{1}{4}"
            },
            {
              "key": "C",
              "text": "\\frac{1}{5}"
            },
            {
              "key": "D",
              "text": "\\frac{3}{10}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kartu genap: 2, 4, 6, 8, 10 (ada 5). Total cara $= C(10, 2) = 45$. Cara genap $= C(5, 2) = 10$. Peluang $= \\frac{10}{45} = \\frac{2}{9}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{C(5, 2)}{C(10, 2)} = \\frac{10}{45} = \\frac{2}{9}$$\nPeluangnya adalah **$\\frac{2}{9}$** (Opsi A)."
        },
        {
          "id": "smp9-b4-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah survei mengenai kebiasaan membaca melibatkan siswa SMP. Jika teknik pengambilan sampel dilakukan dengan membagi siswa menjadi strata berdasarkan tingkatan kelas (Kelas 7, 8, 9) lalu mengambil sampel acak proporsional dari setiap tingkatan, teknik sampling tersebut dinamakan...",
          "options": [
            {
              "key": "A",
              "text": "Stratified Random Sampling"
            },
            {
              "key": "B",
              "text": "Simple Random Sampling"
            },
            {
              "key": "C",
              "text": "Cluster Sampling"
            },
            {
              "key": "D",
              "text": "Convenience Sampling"
            }
          ],
          "correctAnswer": "A",
          "hint": "Pengambilan sampel berstrata sesuai tingkatan disebut stratified random sampling.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nTeknik tersebut adalah **Stratified Random Sampling** (Opsi A)."
        }
      ]
    }
  ]
};
