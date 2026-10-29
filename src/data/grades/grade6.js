/**
 * Data Kurikulum Kelas 6 SD (Fase C)
 * 4 Bab Resmi Sesuai Buku Siswa Matematika
 */

export const grade6Data = {
  "grade": 6,
  "level": "SD",
  "phase": "Fase C",
  "description": "Pecahan dan Desimal, Rasio, Kubus dan Balok (Jaring-Jaring, Luas Permukaan & Volume), serta Konsep Peluang Sederhana",
  "chapters": [
    {
      "id": "sd6-bab1-pecahan-desimal",
      "title": "Bab 1: Pecahan dan Desimal",
      "summary": {
        "overview": "Di kehidupan sehari-hari, kita sangat akrab dengan pembagian makanan dan pengukuran bahan. Ketika seorang ibu membagi kue tart menjadi beberapa bagian yang sama rata untuk tamu, seorang anak menakar $\\frac{1}{4}$ liter susu cair untuk membuat puding, atau seorang penjahit mengukur panjang kain 1,5 meter untuk membuat kemeja, kita menggunakan bilangan pecahan dan desimal. Petani di sawah juga menggunakan takaran pecahan saat melarutkan konsentrat pupuk cair ke dalam tangki semprot air agar tanaman tumbuh subur.\n\nPecahan dan desimal adalah dua cara berbeda untuk menyatakan besaran bagian dari satu kesatuan utuh. Dalam sains, teknologi, dan perdagangan, bilangan desimal mempermudah perhitungan menggunakan timbangan digital dan kasir pembayaran, sementara bentuk pecahan sangat memudahkan operasi pembagian proporsional tanpa pembulatan desimal yang panjang.\n\nBab ini membimbing siswa Kelas 6 mendalami operasi perkalian dan pembagian pecahan dengan bilangan asli, pembagian pecahan dengan pecahan lain menggunakan konsep kebalikan, mengubah pecahan menjadi bentuk desimal secara bersusun (porogapit), serta mengoperasikan perkalian dan pembagian desimal untuk menyelesaikan persoalan kontekstual sehari-hari secara akurat.",
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
          {
            "label": "Pembagian Pecahan",
            "formula": "\\frac{a}{b} : \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}"
          },
          {
            "label": "Perkalian Pecahan",
            "formula": "\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}"
          }
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
            {
              "key": "A",
              "text": "$\\frac{8}{27}$"
            },
            {
              "key": "B",
              "text": "$\\frac{3}{2}$ atau $1\\frac{1}{2}$"
            },
            {
              "key": "C",
              "text": "$\\frac{2}{3}$"
            },
            {
              "key": "D",
              "text": "$\\frac{1}{2}$"
            }
          ],
          "correctAnswer": "B",
          "hint": "Balikkan pecahan kedua menjadi $\\frac{9}{4}$, lalu lakukan operasi perkalian.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{2}{3} : \\frac{4}{9} = \\frac{2}{3} \\times \\frac{9}{4} = \\frac{18}{12} = \\frac{3}{2} = 1\\frac{1}{2}$$\nHasilnya adalah **$1\\frac{1}{2}$** (Opsi B)."
        },
        {
          "id": "sd6-b1-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Bentuk pecahan desimal dari $\\frac{3}{5}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "0,35"
            },
            {
              "key": "B",
              "text": "0,53"
            },
            {
              "key": "C",
              "text": "0,8"
            },
            {
              "key": "D",
              "text": "0,6"
            }
          ],
          "correctAnswer": "D",
          "hint": "Ubah penyebut menjadi 10 dengan mengalikan pembilang dan penyebut dengan 2: $\\frac{3 \\times 2}{5 \\times 2} = \\frac{6}{10}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{3}{5} = \\frac{3 \\times 2}{5 \\times 2} = \\frac{6}{10} = 0{,}6$$\nBentuk desimalnya adalah **0,6** (Opsi D).",
          "visual": {
            "type": "fraction-strip",
            "props": {
              "title": "Model 3/5 Bagian",
              "caption": "*Nyatakan 3 dari 5 bagian ke bentuk desimal",
              "totalParts": 5,
              "shadedParts": 3,
              "targetBadge": "Desimal = ?"
            }
          }
        },
        {
          "id": "sd6-b1-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil dari perkalian bilangan desimal $1{,}2 \\times 0{,}4$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "4,8"
            },
            {
              "key": "B",
              "text": "0,048"
            },
            {
              "key": "C",
              "text": "0,84"
            },
            {
              "key": "D",
              "text": "0,48"
            }
          ],
          "correctAnswer": "D",
          "hint": "Kalikan $12 \\times 4 = 48$. Karena ada 2 angka di belakang koma (1 angka dari 1,2 dan 1 angka dari 0,4), hasilnya memiliki 2 desimal.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $12 \\times 4 = 48$\n2. Total digit desimal di belakang koma: $1 + 1 = 2$ angka.\n3. Letakkan koma: $0{,}48$\nHasilnya adalah **0,48** (Opsi D)."
        },
        {
          "id": "sd6-b1-4",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Pak Edo memiliki tali sepanjang 15 meter. Tali tersebut dipotong-potong menjadi beberapa bagian yang sama panjang, di mana masing-masing panjangnya $1\\frac{1}{4}$ meter. Banyak potongan tali yang dihasilkan adalah...",
          "options": [
            {
              "key": "A",
              "text": "10 potongan"
            },
            {
              "key": "B",
              "text": "15 potongan"
            },
            {
              "key": "C",
              "text": "12 potongan"
            },
            {
              "key": "D",
              "text": "14 potongan"
            }
          ],
          "correctAnswer": "C",
          "hint": "Ubah $1\\frac{1}{4}$ menjadi $\\frac{5}{4}$, lalu hitung $15 : \\frac{5}{4}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Ubah ke pecahan biasa: $1\\frac{1}{4} = \\frac{5}{4}$\n2. Hitung pembagian:\n$$15 : \\frac{5}{4} = 15 \\times \\frac{4}{5} = \\frac{60}{5} = 12$$\nBanyak potongan tali adalah **12 potongan** (Opsi C).",
          "visual": {
            "type": "bar-model",
            "props": {
              "title": "Pemotongan Panjang Tali",
              "caption": "*Tali 15 meter dipotong-potong, masing-masing 1¼ meter",
              "rows": [
                {
                  "segments": [
                    {
                      "label": "1¼ m",
                      "width": 45,
                      "color": "blue"
                    },
                    {
                      "label": "1¼ m",
                      "width": 45,
                      "color": "blue"
                    },
                    {
                      "label": "...",
                      "width": 60,
                      "color": "blue"
                    },
                    {
                      "label": "1¼ m",
                      "width": 45,
                      "color": "blue"
                    }
                  ],
                  "totalLabel": "Total 15 m"
                }
              ],
              "target": "? potong",
              "targetLabel": "Banyak Potongan"
            }
          }
        },
        {
          "id": "sd6-b1-5",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Ibu membeli 3 kantong beras, masing-masing berisi 2,5 kg. Beras tersebut akan dimasukkan ke dalam beberapa wadah kecil berukuran 0,5 kg hingga habis. Banyak wadah kecil yang dibutuhkan Ibu adalah...",
          "options": [
            {
              "key": "A",
              "text": "12 wadah"
            },
            {
              "key": "B",
              "text": "15 wadah"
            },
            {
              "key": "C",
              "text": "10 wadah"
            },
            {
              "key": "D",
              "text": "18 wadah"
            }
          ],
          "correctAnswer": "B",
          "hint": "Hitung total beras: $3 \\times 2{,}5 = 7{,}5\\text{ kg}$, lalu bagi dengan 0,5.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Total beras: $3 \\times 2{,}5 = 7{,}5\\text{ kg}$.\n2. Banyak wadah yang dibutuhkan:\n$$\\text{Banyak wadah} = \\frac{7{,}5}{0{,}5} = \\frac{75}{5} = 15$$\nBanyak wadah kecil yang dibutuhkan adalah **15 wadah** (Opsi B)."
        },
        {
          "id": "sd6-b1-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil perkalian pecahan $\\frac{3}{4} \\times \\frac{2}{5}$ dalam bentuk paling sederhana adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{6}{20}"
            },
            {
              "key": "B",
              "text": "\\frac{3}{10}"
            },
            {
              "key": "C",
              "text": "\\frac{5}{9}"
            },
            {
              "key": "D",
              "text": "\\frac{1}{2}"
            }
          ],
          "correctAnswer": "B",
          "hint": "Kalikan pembilang dengan pembilang, penyebut dengan penyebut, lalu sederhanakan.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{3 \\times 2}{4 \\times 5} = \\frac{6}{20} = \\frac{3}{10}$$\nHasil paling sederhananya adalah **$\\frac{3}{10}$** (Opsi B)."
        },
        {
          "id": "sd6-b1-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil pembagian pecahan $\\frac{5}{6} : \\frac{2}{3}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "1 \\frac{1}{2}"
            },
            {
              "key": "B",
              "text": "\\frac{10}{18}"
            },
            {
              "key": "C",
              "text": "1 \\frac{1}{4}"
            },
            {
              "key": "D",
              "text": "1 \\frac{1}{5}"
            }
          ],
          "correctAnswer": "C",
          "hint": "Ubah pembagian menjadi perkalian dengan kebalikan pecahan kedua: $\\frac{5}{6} \\times \\frac{3}{2}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{5}{6} \\times \\frac{3}{2} = \\frac{15}{12} = \\frac{5}{4} = 1\\frac{1}{4}$$\nHasilnya adalah **$1\\frac{1}{4}$** (Opsi C)."
        },
        {
          "id": "sd6-b1-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil dari $2{,}45 + 1{,}78$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "4,13"
            },
            {
              "key": "B",
              "text": "3,23"
            },
            {
              "key": "C",
              "text": "4,25"
            },
            {
              "key": "D",
              "text": "4,23"
            }
          ],
          "correctAnswer": "D",
          "hint": "Luruskan tanda koma desimal sebelum menjumlahkan bersusun.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$2{,}45 + 1{,}78 = 4{,}23$$\nHasilnya adalah **4,23** (Opsi D)."
        },
        {
          "id": "sd6-b1-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil dari $6{,}5 - 2{,}84$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "3,66"
            },
            {
              "key": "B",
              "text": "3,76"
            },
            {
              "key": "C",
              "text": "4,66"
            },
            {
              "key": "D",
              "text": "3,56"
            }
          ],
          "correctAnswer": "A",
          "hint": "Tulis $6{,}50$ agar jumlah digit desimal sama sebelum dikurangkan.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$6{,}50 - 2{,}84 = 3{,}66$$\nHasilnya adalah **3,66** (Opsi A)."
        },
        {
          "id": "sd6-b1-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil perkalian desimal $0{,}4 \\times 0{,}25$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "0,01"
            },
            {
              "key": "B",
              "text": "1,0"
            },
            {
              "key": "C",
              "text": "0,1"
            },
            {
              "key": "D",
              "text": "0,15"
            }
          ],
          "correctAnswer": "C",
          "hint": "Kalikan bilangan bulat $4 \\times 25 = 100$, lalu hitung total 3 tempat desimal.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$4 \\times 25 = 100 \\implies 0{,}100 = 0{,}1$$\nHasilnya adalah **0,1** (Opsi C)."
        },
        {
          "id": "sd6-b1-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Ibu memiliki 5 kg gula pasir yang akan dibagi sama banyak ke dalam 4 toples. Berapa kg gula dalam setiap toples?",
          "options": [
            {
              "key": "A",
              "text": "$1\\frac{1}{2}$ kg"
            },
            {
              "key": "B",
              "text": "$\\frac{3}{4}$ kg"
            },
            {
              "key": "C",
              "text": "$1\\frac{1}{4}$ kg"
            },
            {
              "key": "D",
              "text": "2 kg"
            }
          ],
          "correctAnswer": "C",
          "hint": "Bagilah 5 dengan 4, lalu nyatakan dalam pecahan campuran.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$5 : 4 = \\frac{5}{4} = 1\\frac{1}{4}\\text{ kg}$$\n(Opsi C)."
        },
        {
          "id": "sd6-b1-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Pak Budi memiliki sebidang tanah seluas 400 m². Sebanyak 0,4 bagian dibangun rumah dan $\\frac{1}{4}$ bagian dijadikan kebun. Sisa tanah untuk halaman adalah...",
          "options": [
            {
              "key": "A",
              "text": "160 m²"
            },
            {
              "key": "B",
              "text": "140 m²"
            },
            {
              "key": "C",
              "text": "180 m²"
            },
            {
              "key": "D",
              "text": "150 m²"
            }
          ],
          "correctAnswer": "B",
          "hint": "Ubah 0,4 menjadi pecahan $\\frac{4}{10}$, lalu hitung luas rumah dan kebun.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Rumah: $\\frac{4}{10} \\times 400 = 160\\text{ m}^2$.\n2. Kebun: $\\frac{1}{4} \\times 400 = 100\\text{ m}^2$.\n3. Halaman: $400 - (160 + 100) = 140\\text{ m}^2$.\n(Opsi B).",
          "visual": {
            "type": "bar-model",
            "props": {
              "title": "Pembagian Lahan Tanah",
              "caption": "*Tanah 400 m²: 0,4 bagian rumah dan ¼ bagian kebun",
              "rows": [
                {
                  "segments": [
                    {
                      "label": "Rumah 0,4",
                      "width": 95,
                      "color": "green"
                    },
                    {
                      "label": "Kebun ¼",
                      "width": 75,
                      "color": "blue"
                    },
                    {
                      "label": "Halaman ?",
                      "width": 80,
                      "color": "amber"
                    }
                  ],
                  "totalLabel": "400 m²"
                }
              ],
              "target": "? m²",
              "targetLabel": "Luas Halaman"
            }
          }
        },
        {
          "id": "sd6-b1-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil dari $3 : 0{,}6$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "0,5"
            },
            {
              "key": "B",
              "text": "18"
            },
            {
              "key": "C",
              "text": "5"
            },
            {
              "key": "D",
              "text": "2"
            }
          ],
          "correctAnswer": "C",
          "hint": "Ubah menjadi $30 : 6 = 5$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{3}{0{,}6} = \\frac{30}{6} = 5$$\nHasilnya adalah **5** (Opsi C)."
        },
        {
          "id": "sd6-b1-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bentuk pecahan biasa paling sederhana dari bilangan desimal 0,6 adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\frac{3}{5}$"
            },
            {
              "key": "B",
              "text": "$\\frac{6}{100}$"
            },
            {
              "key": "C",
              "text": "$\\frac{2}{3}$"
            },
            {
              "key": "D",
              "text": "$\\frac{6}{10}$"
            }
          ],
          "correctAnswer": "A",
          "hint": "0,6 dibaca \"enam persepuluh\". Sederhanakan $\\frac{6}{10}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$0{,}6 = \\frac{6}{10} = \\frac{6 : 2}{10 : 2} = \\frac{3}{5}$$\n(Opsi A)."
        },
        {
          "id": "sd6-b1-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah botol berisi $1{,}2$ liter air. Anton meminum $\\frac{1}{3}$ bagiannya. Sisa air di dalam botol adalah...",
          "options": [
            {
              "key": "A",
              "text": "0,8 liter"
            },
            {
              "key": "B",
              "text": "0,4 liter"
            },
            {
              "key": "C",
              "text": "0,6 liter"
            },
            {
              "key": "D",
              "text": "0,9 liter"
            }
          ],
          "correctAnswer": "A",
          "hint": "Air yang diminum $= \\frac{1}{3} \\times 1{,}2 = 0{,}4$ liter. Sisa $= 1{,}2 - 0{,}4 = 0{,}8$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Diminum: $1{,}2 \\times \\frac{1}{3} = 0{,}4\\text{ liter}$\n2. Sisa: $1{,}2 - 0{,}4 = 0{,}8\\text{ liter}$ (Opsi A).",
          "visual": {
            "type": "fraction-strip",
            "props": {
              "title": "Kapasitas Air Botol Minum",
              "caption": "*Isi 1,2 liter diminum 1/3 bagiannya",
              "totalParts": 3,
              "shadedParts": 1,
              "label": "1/3 Diminum"
            }
          }
        },
        {
          "id": "sd6-b1-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Hasil dari operasi campuran $\\left(1\\frac{1}{2} + 0{,}75\\right) \\times 0{,}4$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "1,2"
            },
            {
              "key": "B",
              "text": "0,8"
            },
            {
              "key": "C",
              "text": "1,5"
            },
            {
              "key": "D",
              "text": "0,9"
            }
          ],
          "correctAnswer": "D",
          "hint": "Ubah ke desimal: $1\\frac{1}{2} = 1{,}5$. Maka $(1{,}5 + 0{,}75) \\times 0{,}4 = 2{,}25 \\times 0{,}4$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$2{,}25 \\times 0{,}4 = 0{,}90 = 0{,}9$$\nHasilnya adalah **0,9** (Opsi D)."
        },
        {
          "id": "sd6-b1-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Rina memiliki pita sepanjang 4,5 meter. Ia memotong pita tersebut masing-masing sepanjang $\\frac{3}{4}$ meter. Berapa banyak potongan pita yang diperoleh Rina?",
          "options": [
            {
              "key": "A",
              "text": "6 potongan"
            },
            {
              "key": "B",
              "text": "5 potongan"
            },
            {
              "key": "C",
              "text": "7 potongan"
            },
            {
              "key": "D",
              "text": "8 potongan"
            }
          ],
          "correctAnswer": "A",
          "hint": "Bagi 4,5 dengan 0,75: $4{,}5 : 0{,}75 = 450 : 75 = 6$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$4{,}5 : \\frac{3}{4} = \\frac{9}{2} \\times \\frac{4}{3} = \\frac{36}{6} = 6$$\nDiperoleh **6 potongan pita** (Opsi A)."
        },
        {
          "id": "sd6-b1-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah botol berisi $1\\frac{1}{2}$ liter jus yang dibagikan sama banyak kepada 6 anak. Setiap anak mendapat jus sebanyak...",
          "options": [
            {
              "key": "A",
              "text": "$\\frac{1}{4}$ liter"
            },
            {
              "key": "B",
              "text": "$\\frac{1}{3}$ liter"
            },
            {
              "key": "C",
              "text": "$\\frac{1}{2}$ liter"
            },
            {
              "key": "D",
              "text": "$\\frac{1}{6}$ liter"
            }
          ],
          "correctAnswer": "A",
          "hint": "Ubah $1\\frac{1}{2}$ menjadi $\\frac{3}{2}$, lalu bagi dengan 6.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{3}{2} : 6 = \\frac{3}{2 \\times 6} = \\frac{3}{12} = \\frac{1}{4}\\text{ liter}$$\n(Opsi A)."
        },
        {
          "id": "sd6-b1-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Urutan bilangan $0{,}65$; $\\frac{5}{8}$; $60\\%$; $0{,}7$ dari yang terbesar ke terkecil adalah...",
          "options": [
            {
              "key": "A",
              "text": "0,7; 5/8; 0,65; 60%"
            },
            {
              "key": "B",
              "text": "60%; 5/8; 0,65; 0,7"
            },
            {
              "key": "C",
              "text": "0,65; 0,7; 5/8; 60%"
            },
            {
              "key": "D",
              "text": "0,7; 0,65; 5/8; 60%"
            }
          ],
          "correctAnswer": "D",
          "hint": "Ubah semua ke desimal: $0{,}7 = 0{,}70$; $0{,}65$; $\\frac{5}{8} = 0{,}625$; $60\\% = 0{,}60$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $0{,}7 = 0{,}700$\n2. $0{,}65 = 0{,}650$\n3. $\\frac{5}{8} = 0{,}625$\n4. $60\\% = 0{,}600$\nUrutan turun: **0,7; 0,65; 5/8; 60%** (Opsi D)."
        },
        {
          "id": "sd6-b1-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Nilai dari $\\frac{0{,}25 \\times 0{,}8}{0{,}05}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "0,4"
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
              "text": "0,04"
            }
          ],
          "correctAnswer": "B",
          "hint": "Hitung pembilang: $0{,}25 \\times 0{,}8 = 0{,}2$. Lalu bagi: $0{,}2 : 0{,}05 = 20 : 5 = 4$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{0{,}2}{0{,}05} = \\frac{20}{5} = 4$$\nHasilnya adalah **4** (Opsi B)."
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
          {
            "label": "Notasi Rasio",
            "formula": "a : b = \\frac{a}{b}"
          },
          {
            "label": "Proporsi Bagian",
            "formula": "\\text{Bagian } A = \\frac{a}{a + b} \\times \\text{Total}"
          }
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
            {
              "key": "A",
              "text": "5 : 3"
            },
            {
              "key": "B",
              "text": "3 : 5"
            },
            {
              "key": "C",
              "text": "1 : 2"
            },
            {
              "key": "D",
              "text": "3 : 4"
            }
          ],
          "correctAnswer": "B",
          "hint": "Bagi kedua angka dengan angka 5 (FPB dari 15 dan 25).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$15 : 5 = 3 \\quad \\text{dan} \\quad 25 : 5 = 5$$\nRasio paling sederhananya adalah **3 : 5** (Opsi B).",
          "visual": {
            "type": "bar-model",
            "props": {
              "title": "Penyederhanaan Rasio 15 : 25",
              "caption": "*Bagi kedua bilangan dengan faktor persekutuan terbesarnya",
              "rows": [
                {
                  "segments": [
                    {
                      "label": "15",
                      "width": 75,
                      "color": "blue"
                    }
                  ],
                  "totalLabel": "Bilangan pertama"
                },
                {
                  "segments": [
                    {
                      "label": "25",
                      "width": 125,
                      "color": "green"
                    }
                  ],
                  "totalLabel": "Bilangan kedua"
                }
              ],
              "target": "? : ?",
              "targetLabel": "Rasio Sederhana"
            }
          }
        },
        {
          "id": "sd6-b2-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Di dalam sebuah kandang terdapat 12 ekor ayam dan 18 ekor bebek. Rasio jumlah ayam terhadap jumlah seluruh ternak di kandang adalah...",
          "options": [
            {
              "key": "A",
              "text": "2 : 3"
            },
            {
              "key": "B",
              "text": "3 : 5"
            },
            {
              "key": "C",
              "text": "2 : 5"
            },
            {
              "key": "D",
              "text": "1 : 3"
            }
          ],
          "correctAnswer": "C",
          "hint": "Hitung total seluruh ternak terlebih dahulu: $12 + 18 = 30$. Lalu bandingkan ayam terhadap total: $12 : 30$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Total ternak: $12 + 18 = 30$\n2. Rasio ayam terhadap total: $12 : 30$\n3. Sederhanakan dengan membagi 6: $2 : 5$\nRasionya adalah **2 : 5** (Opsi C).",
          "visual": {
            "type": "bar-model",
            "props": {
              "title": "Ternak di Kandang",
              "caption": "*12 ekor ayam dan 18 ekor bebek",
              "rows": [
                {
                  "segments": [
                    {
                      "label": "Ayam (12)",
                      "width": 60,
                      "color": "blue"
                    }
                  ],
                  "totalLabel": "12 Ekor"
                },
                {
                  "segments": [
                    {
                      "label": "Bebek (18)",
                      "width": 90,
                      "color": "green"
                    }
                  ],
                  "totalLabel": "18 Ekor"
                }
              ],
              "target": "? : ?",
              "targetLabel": "Ayam : Seluruh Ternak"
            }
          }
        },
        {
          "id": "sd6-b2-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Perbandingan umur Rina dan umur adiknya adalah 5 : 3. Jika umur Rina saat ini adalah 15 tahun, maka umur adiknya adalah...",
          "options": [
            {
              "key": "A",
              "text": "10 tahun"
            },
            {
              "key": "B",
              "text": "8 tahun"
            },
            {
              "key": "C",
              "text": "9 tahun"
            },
            {
              "key": "D",
              "text": "12 tahun"
            }
          ],
          "correctAnswer": "C",
          "hint": "Nilai 1 bagian rasio: $15 : 5 = 3$ tahun. Kalikan bagian adik dengan 3: $3 \\times 3$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Nilai 1 bagian: $15 : 5 = 3\\text{ tahun}$\n2. Umur adik (3 bagian): $3 \\times 3 = 9\\text{ tahun}$\nUmur adik adalah **9 tahun** (Opsi C).",
          "visual": {
            "type": "bar-model",
            "props": {
              "title": "Model Bar Perbandingan Umur",
              "caption": "*Rasio umur Rina (5 kotak) dan adik (3 kotak)",
              "rows": [
                {
                  "segments": [
                    {
                      "label": "1",
                      "width": 18,
                      "color": "blue"
                    },
                    {
                      "label": "1",
                      "width": 18,
                      "color": "blue"
                    },
                    {
                      "label": "1",
                      "width": 18,
                      "color": "blue"
                    },
                    {
                      "label": "1",
                      "width": 18,
                      "color": "blue"
                    },
                    {
                      "label": "1",
                      "width": 18,
                      "color": "blue"
                    }
                  ],
                  "totalLabel": "Rina (5)"
                },
                {
                  "segments": [
                    {
                      "label": "1",
                      "width": 18,
                      "color": "green"
                    },
                    {
                      "label": "1",
                      "width": 18,
                      "color": "green"
                    },
                    {
                      "label": "1",
                      "width": 18,
                      "color": "green"
                    }
                  ],
                  "totalLabel": "Adik (3)"
                }
              ],
              "target": "5 : 3",
              "targetLabel": "Rasio Umur"
            }
          }
        },
        {
          "id": "sd6-b2-4",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah resep kue membutuhkan tepung dan gula dengan rasio 4 : 3. Jika seorang koki menggunakan 600 gram tepung terigu, berapa gram gula pasir yang harus ditambahkan?",
          "options": [
            {
              "key": "A",
              "text": "400 gram"
            },
            {
              "key": "B",
              "text": "500 gram"
            },
            {
              "key": "C",
              "text": "350 gram"
            },
            {
              "key": "D",
              "text": "450 gram"
            }
          ],
          "correctAnswer": "D",
          "hint": "Hitung per 1 bagian: $600 : 4 = 150$ gram. Lalu kalikan untuk gula: $3 \\times 150$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Nilai 1 bagian rasio: $\\frac{600}{4} = 150\\text{ gram}$\n2. Gula pasir yang dibutuhkan: $3 \\times 150 = 450\\text{ gram}$\nGula yang harus ditambahkan adalah **450 gram** (Opsi D).",
          "visual": {
            "type": "bar-model",
            "props": {
              "title": "Resep Kue (Tepung & Gula)",
              "caption": "*Rasio 4 bagian tepung dan 3 bagian gula",
              "rows": [
                {
                  "segments": [
                    {
                      "label": "Tepung (4)",
                      "width": 80,
                      "color": "blue"
                    }
                  ],
                  "totalLabel": "4 Bagian"
                },
                {
                  "segments": [
                    {
                      "label": "Gula (3)",
                      "width": 60,
                      "color": "amber"
                    }
                  ],
                  "totalLabel": "3 Bagian"
                }
              ],
              "target": "4 : 3",
              "targetLabel": "Rasio Bahan"
            }
          }
        },
        {
          "id": "sd6-b2-5",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Uang tabungan Dimas dan Fajar berjumlah Rp120.000,00. Jika perbandingan uang Dimas dan Fajar adalah 3 : 5, maka selisih uang tabungan mereka berdua adalah...",
          "options": [
            {
              "key": "A",
              "text": "Rp45.000,00"
            },
            {
              "key": "B",
              "text": "Rp75.000,00"
            },
            {
              "key": "C",
              "text": "Rp20.000,00"
            },
            {
              "key": "D",
              "text": "Rp30.000,00"
            }
          ],
          "correctAnswer": "D",
          "hint": "Total bagian $= 3 + 5 = 8$. Nilai per bagian $= 120.000 : 8 = 15.000$. Selisih bagian $= 5 - 3 = 2$ bagian. Kalikan $2 \\times 15.000$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Total bagian: $3 + 5 = 8$ bagian.\n2. Nilai 1 bagian: $\\frac{120.000}{8} = 15.000$.\n3. Selisih rasio: $5 - 3 = 2$ bagian.\n4. Selisih uang: $2 \\times 15.000 = \\text{Rp}30.000,00$.\nSelisih tabungan mereka adalah **Rp30.000,00** (Opsi D).",
          "visual": {
            "type": "bar-model",
            "props": {
              "title": "Tabungan Dimas dan Fajar",
              "caption": "*Jumlah tabungan Rp120.000 dengan rasio 3 : 5",
              "rows": [
                {
                  "segments": [
                    {
                      "label": "Dimas (3)",
                      "width": 60,
                      "color": "blue"
                    }
                  ],
                  "totalLabel": "3 Bagian"
                },
                {
                  "segments": [
                    {
                      "label": "Fajar (5)",
                      "width": 100,
                      "color": "green"
                    }
                  ],
                  "totalLabel": "5 Bagian"
                }
              ],
              "target": "Rp120.000",
              "targetLabel": "Total Tabungan"
            }
          }
        },
        {
          "id": "sd6-b2-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bentuk paling sederhana dari rasio 18 : 24 adalah...",
          "options": [
            {
              "key": "A",
              "text": "3 : 4"
            },
            {
              "key": "B",
              "text": "2 : 3"
            },
            {
              "key": "C",
              "text": "4 : 5"
            },
            {
              "key": "D",
              "text": "9 : 12"
            }
          ],
          "correctAnswer": "A",
          "hint": "Bagi kedua bilangan dengan FPB yaitu 6: $18 : 6 = 3$ dan $24 : 6 = 4$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$18 : 24 = (18:6) : (24:6) = 3 : 4$$\nRasio sederhananya adalah **3 : 4** (Opsi A)."
        },
        {
          "id": "sd6-b2-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Perbandingan banyak kelereng Doni dan Budi adalah 3 : 5. Jika kelereng Budi berjumlah 35 butir, banyak kelereng Doni adalah...",
          "options": [
            {
              "key": "A",
              "text": "20 butir"
            },
            {
              "key": "B",
              "text": "21 butir"
            },
            {
              "key": "C",
              "text": "25 butir"
            },
            {
              "key": "D",
              "text": "15 butir"
            }
          ],
          "correctAnswer": "B",
          "hint": "Nilai 1 bagian rasio $= 35 : 5 = 7$. Kelereng Doni $= 3 \\times 7 = 21$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Kelereng Doni} = \\frac{3}{5} \\times 35 = 21\\text{ butir}$$\nBanyak kelereng Doni adalah **21 butir** (Opsi B).",
          "visual": {
            "type": "bar-model",
            "props": {
              "title": "Kelereng Doni dan Budi",
              "caption": "*Rasio 3 : 5, kelereng Budi berjumlah 35 butir",
              "rows": [
                {
                  "segments": [
                    {
                      "label": "Doni (3)",
                      "width": 60,
                      "color": "blue"
                    }
                  ],
                  "totalLabel": "? Butir"
                },
                {
                  "segments": [
                    {
                      "label": "Budi (5)",
                      "width": 100,
                      "color": "green"
                    }
                  ],
                  "totalLabel": "35 Butir"
                }
              ],
              "target": "? butir",
              "targetLabel": "Kelereng Doni"
            }
          }
        },
        {
          "id": "sd6-b2-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Umur Ayah berbanding umur Dimas adalah 7 : 2. Jika jumlah umur keduanya adalah 45 tahun, berapakah umur Dimas?",
          "options": [
            {
              "key": "A",
              "text": "14 tahun"
            },
            {
              "key": "B",
              "text": "8 tahun"
            },
            {
              "key": "C",
              "text": "10 tahun"
            },
            {
              "key": "D",
              "text": "12 tahun"
            }
          ],
          "correctAnswer": "C",
          "hint": "Jumlah bagian rasio $= 7 + 2 = 9$. Umur Dimas $= \\frac{2}{9} \\times 45 = 10$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Umur Dimas} = \\frac{2}{7 + 2} \\times 45 = \\frac{2}{9} \\times 45 = 10\\text{ tahun}$$\nUmur Dimas adalah **10 tahun** (Opsi C).",
          "visual": {
            "type": "bar-model",
            "props": {
              "title": "Perbandingan Umur Ayah dan Dimas",
              "caption": "*Rasio 7 : 2, jumlah umur keduanya adalah 45 tahun",
              "rows": [
                {
                  "segments": [
                    {
                      "label": "Ayah (7 kotak)",
                      "width": 105,
                      "color": "blue"
                    }
                  ],
                  "totalLabel": "7 Unit"
                },
                {
                  "segments": [
                    {
                      "label": "Dimas (2 kotak)",
                      "width": 35,
                      "color": "green"
                    }
                  ],
                  "totalLabel": "2 Unit"
                }
              ],
              "target": "45 Tahun",
              "targetLabel": "Jumlah Umur"
            }
          }
        },
        {
          "id": "sd6-b2-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Perbandingan uang saku Riko dan Andi adalah 4 : 7. Jika selisih uang saku mereka adalah Rp15.000,00, berapakah uang saku Riko?",
          "options": [
            {
              "key": "A",
              "text": "Rp25.000,00"
            },
            {
              "key": "B",
              "text": "Rp35.000,00"
            },
            {
              "key": "C",
              "text": "Rp18.000,00"
            },
            {
              "key": "D",
              "text": "Rp20.000,00"
            }
          ],
          "correctAnswer": "D",
          "hint": "Selisih bagian rasio $= 7 - 4 = 3$. Nilai 1 bagian $= 15.000 : 3 = 5.000$. Uang Riko $= 4 \\times 5.000$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Uang Riko} = \\frac{4}{7 - 4} \\times 15.000 = \\frac{4}{3} \\times 15.000 = 20.000$$\nUang saku Riko adalah **Rp20.000,00** (Opsi D).",
          "visual": {
            "type": "bar-model",
            "props": {
              "title": "Selisih Uang Saku Riko dan Andi",
              "caption": "*Rasio 4 : 7 dengan selisih uang saku Rp15.000",
              "rows": [
                {
                  "segments": [
                    {
                      "label": "Riko (4)",
                      "width": 60,
                      "color": "blue"
                    }
                  ],
                  "totalLabel": "4 Bagian"
                },
                {
                  "segments": [
                    {
                      "label": "Andi (7)",
                      "width": 105,
                      "color": "green"
                    }
                  ],
                  "totalLabel": "7 Bagian"
                }
              ],
              "target": "Rp15.000",
              "targetLabel": "Selisih (3 Unit)"
            }
          }
        },
        {
          "id": "sd6-b2-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah mobil membutuhkan 3 liter bensin untuk menempuh jarak 45 km. Berapa liter bensin yang dibutuhkan untuk menempuh jarak 120 km?",
          "options": [
            {
              "key": "A",
              "text": "9 liter"
            },
            {
              "key": "B",
              "text": "10 liter"
            },
            {
              "key": "C",
              "text": "8 liter"
            },
            {
              "key": "D",
              "text": "7 liter"
            }
          ],
          "correctAnswer": "C",
          "hint": "Rasio bensin : jarak $= 3 : 45 = 1 : 15$ km/liter. Untuk 120 km $= 120 : 15 = 8$ liter.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Bensin} = \\frac{120}{15} = 8\\text{ liter}$$\nDibutuhkan **8 liter bensin** (Opsi C).",
          "visual": {
            "type": "bar-model",
            "props": {
              "title": "Konsumsi Bensin Mobil",
              "caption": "*3 liter bensin untuk menempuh jarak 45 km",
              "rows": [
                {
                  "segments": [
                    {
                      "label": "3 Liter",
                      "width": 60,
                      "color": "blue"
                    }
                  ],
                  "totalLabel": "Bahan Bakar"
                },
                {
                  "segments": [
                    {
                      "label": "45 km",
                      "width": 150,
                      "color": "green"
                    }
                  ],
                  "totalLabel": "Jarak Tempuh"
                }
              ],
              "target": "? liter",
              "targetLabel": "Bahan Bakar 120 km"
            }
          }
        },
        {
          "id": "sd6-b2-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Pada peta berskala 1 : 500.000, jarak antara kota A dan kota B adalah 4 cm. Jarak sebenarnya antara kedua kota tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "20 km"
            },
            {
              "key": "B",
              "text": "200 km"
            },
            {
              "key": "C",
              "text": "2 km"
            },
            {
              "key": "D",
              "text": "25 km"
            }
          ],
          "correctAnswer": "A",
          "hint": "Jarak sebenarnya $= 4 \\times 500.000 = 2.000.000$ cm $= 20$ km.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Jarak sebenarnya} = 4 \\times 500.000 = 2.000.000\\text{ cm} = 20\\text{ km}$$\nJarak sebenarnya adalah **20 km** (Opsi A)."
        },
        {
          "id": "sd6-b2-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jarak sebenarnya antara dua gedung adalah 150 meter. Pada denah berskala 1 : 1.000, jarak kedua gedung tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "1,5 cm"
            },
            {
              "key": "B",
              "text": "150 cm"
            },
            {
              "key": "C",
              "text": "15 cm"
            },
            {
              "key": "D",
              "text": "0,15 cm"
            }
          ],
          "correctAnswer": "C",
          "hint": "Ubah meter ke cm ($150\\text{ m} = 15.000\\text{ cm}$), lalu bagi skala: $15.000 : 1.000 = 15$ cm.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Jarak denah} = \\frac{15.000}{1.000} = 15\\text{ cm}$$\nJarak pada denah adalah **15 cm** (Opsi C)."
        },
        {
          "id": "sd6-b2-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Resep kue membutuhkan 200 gram tepung untuk setiap 150 gram gula. Jika Ibu menggunakan 600 gram tepung, berapa gram gula yang harus ditambahkan?",
          "options": [
            {
              "key": "A",
              "text": "450 gram"
            },
            {
              "key": "B",
              "text": "400 gram"
            },
            {
              "key": "C",
              "text": "500 gram"
            },
            {
              "key": "D",
              "text": "350 gram"
            }
          ],
          "correctAnswer": "A",
          "hint": "Faktor pengali tepung $= 600 : 200 = 3$. Gula $= 150 \\times 3 = 450$ gram.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Gula} = 3 \\times 150 = 450\\text{ gram}$$\nDibutuhkan **450 gram gula** (Opsi A)."
        },
        {
          "id": "sd6-b2-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Seorang penjahit dapat menyelesaikan 12 potong kemeja dalam waktu 3 hari. Berapa potong kemeja yang dapat diselesaikan dalam waktu 10 hari?",
          "options": [
            {
              "key": "A",
              "text": "36 potong"
            },
            {
              "key": "B",
              "text": "45 potong"
            },
            {
              "key": "C",
              "text": "30 potong"
            },
            {
              "key": "D",
              "text": "40 potong"
            }
          ],
          "correctAnswer": "D",
          "hint": "Kecepatan penjahit $= 12 : 3 = 4$ kemeja/hari. Dalam 10 hari $= 10 \\times 4 = 40$ kemeja.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Kemeja} = 4 \\times 10 = 40\\text{ potong}$$\nDapat diselesaikan **40 potong kemeja** (Opsi D)."
        },
        {
          "id": "sd6-b2-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Perbandingan siswa laki-laki dan perempuan di kelas 6 adalah 3 : 4. Jika jumlah siswa perempuan adalah 20 orang, berapa jumlah seluruh siswa di kelas tersebut?",
          "options": [
            {
              "key": "A",
              "text": "32 orang"
            },
            {
              "key": "B",
              "text": "35 orang"
            },
            {
              "key": "C",
              "text": "40 orang"
            },
            {
              "key": "D",
              "text": "30 orang"
            }
          ],
          "correctAnswer": "B",
          "hint": "Laki-laki $= \\frac{3}{4} \\times 20 = 15$. Total siswa $= 15 + 20 = 35$ orang.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Siswa laki-laki: $\\frac{3}{4} \\times 20 = 15$ orang\n2. Total siswa: $15 + 20 = 35$ orang (Opsi B).",
          "visual": {
            "type": "bar-model",
            "props": {
              "title": "Siswa Laki-Laki dan Perempuan",
              "caption": "*Rasio 3 : 4 di kelas 6",
              "rows": [
                {
                  "segments": [
                    {
                      "label": "Laki-laki (3)",
                      "width": 75,
                      "color": "blue"
                    }
                  ],
                  "totalLabel": "3 Bagian"
                },
                {
                  "segments": [
                    {
                      "label": "Perempuan (4)",
                      "width": 100,
                      "color": "pink"
                    }
                  ],
                  "totalLabel": "4 Bagian"
                }
              ],
              "target": "3 : 4",
              "targetLabel": "Perbandingan"
            }
          }
        },
        {
          "id": "sd6-b2-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Perbandingan uang A : B = 2 : 3 dan B : C = 4 : 5. Perbandingan uang A : B : C adalah...",
          "options": [
            {
              "key": "A",
              "text": "8 : 12 : 15"
            },
            {
              "key": "B",
              "text": "6 : 12 : 15"
            },
            {
              "key": "C",
              "text": "8 : 10 : 15"
            },
            {
              "key": "D",
              "text": "2 : 4 : 5"
            }
          ],
          "correctAnswer": "A",
          "hint": "Samakan nilai B (KPK dari 3 dan 4 yaitu 12): A : B = 8 : 12, B : C = 12 : 15.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n- $A : B = 2 : 3 = 8 : 12$\n- $B : C = 4 : 5 = 12 : 15$\nMaka $A : B : C =$ **8 : 12 : 15** (Opsi A)."
        },
        {
          "id": "sd6-b2-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Perbandingan kelereng Farhan, Gilang, dan Hendi adalah 2 : 3 : 5. Jika selisih kelereng Farhan dan Hendi adalah 24 butir, berapa jumlah seluruh kelereng mereka?",
          "options": [
            {
              "key": "A",
              "text": "80 butir"
            },
            {
              "key": "B",
              "text": "72 butir"
            },
            {
              "key": "C",
              "text": "90 butir"
            },
            {
              "key": "D",
              "text": "60 butir"
            }
          ],
          "correctAnswer": "A",
          "hint": "Selisih rasio Farhan dan Hendi $= 5 - 2 = 3$. Nilai 1 bagian $= 24 : 3 = 8$. Total rasio $= 2 + 3 + 5 = 10$. Total $= 10 \\times 8 = 80$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Total kelereng} = \\frac{2 + 3 + 5}{5 - 2} \\times 24 = \\frac{10}{3} \\times 24 = 80\\text{ butir}$$\nJumlah kelereng mereka adalah **80 butir** (Opsi A)."
        },
        {
          "id": "sd6-b2-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Suatu pekerjaan dapat diselesaikan oleh 6 orang pekerja dalam waktu 15 hari. Jika pekerjaan tersebut ingin diselesaikan dalam waktu 10 hari, berapa banyak pekerja tambahan yang dibutuhkan?",
          "options": [
            {
              "key": "A",
              "text": "4 orang"
            },
            {
              "key": "B",
              "text": "2 orang"
            },
            {
              "key": "C",
              "text": "5 orang"
            },
            {
              "key": "D",
              "text": "3 orang"
            }
          ],
          "correctAnswer": "D",
          "hint": "Perbandingan berbalik nilai: $6 \\times 15 = P \\times 10 \\implies P = 90 : 10 = 9$ orang. Tambahan $= 9 - 6 = 3$ orang.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Pekerja total yang dibutuhkan: $\\frac{6 \\times 15}{10} = 9$ orang\n2. Pekerja tambahan: $9 - 6 = 3$ orang (Opsi D)."
        },
        {
          "id": "sd6-b2-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah resep kue untuk 4 orang membutuhkan 300 gram tepung. Berapa gram tepung yang dibutuhkan untuk membuat kue bagi 10 orang?",
          "options": [
            {
              "key": "A",
              "text": "600 gram"
            },
            {
              "key": "B",
              "text": "750 gram"
            },
            {
              "key": "C",
              "text": "900 gram"
            },
            {
              "key": "D",
              "text": "700 gram"
            }
          ],
          "correctAnswer": "B",
          "hint": "Hitung dahulu tepung untuk 1 orang (rasio satuan).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Untuk 1 orang: $300 : 4 = 75$ gram.\n2. Untuk 10 orang: $75 \\times 10 = 750$ gram.\n(Opsi B)."
        },
        {
          "id": "sd6-b2-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dua tahun lalu perbandingan umur Kakak dan Adik adalah 3 : 2. Jika umur Adik saat ini adalah 10 tahun, berapa tahun umur Kakak saat ini?",
          "options": [
            {
              "key": "A",
              "text": "12 tahun"
            },
            {
              "key": "B",
              "text": "14 tahun"
            },
            {
              "key": "C",
              "text": "15 tahun"
            },
            {
              "key": "D",
              "text": "16 tahun"
            }
          ],
          "correctAnswer": "B",
          "hint": "Dua tahun lalu: umur Adik $= 10 - 2 = 8$ tahun. Umur Kakak $= \\frac{3}{2} \\times 8 = 12$ tahun. Saat ini umur Kakak $= 12 + 2 = 14$ tahun.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Umur Adik 2 tahun lalu: $10 - 2 = 8$ tahun\n2. Umur Kakak 2 tahun lalu: $\\frac{3}{2} \\times 8 = 12$ tahun\n3. Umur Kakak sekarang: $12 + 2 = 14$ tahun (Opsi B)."
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
          {
            "label": "Volume Kubus",
            "formula": "V = s^3"
          },
          {
            "label": "Luas Permukaan Kubus",
            "formula": "L = 6s^2"
          },
          {
            "label": "Volume Balok",
            "formula": "V = p \\times l \\times t"
          },
          {
            "label": "Luas Permukaan Balok",
            "formula": "L = 2(pl + pt + lt)"
          }
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
            {
              "key": "A",
              "text": "$512\\text{ cm}^3$"
            },
            {
              "key": "B",
              "text": "$384\\text{ cm}^3$"
            },
            {
              "key": "C",
              "text": "$256\\text{ cm}^3$"
            },
            {
              "key": "D",
              "text": "$64\\text{ cm}^3$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan rumus volume kubus: $V = s \\times s \\times s = 8 \\times 8 \\times 8$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$V = 8 \\times 8 \\times 8 = 64 \\times 8 = 512\\text{ cm}^3$$\nVolume kubus adalah **$512\\text{ cm}^3$** (Opsi A).",
          "visual": {
            "type": "solid-3d",
            "props": {
              "title": "Volume Kubus",
              "caption": "*Panjang rusuk s = 8 cm",
              "solid": "box",
              "lengthLabel": "s = 8 cm",
              "widthLabel": "s = 8 cm",
              "heightLabel": "s = 8 cm",
              "targetLabel": "Volume = ? cm³"
            }
          }
        },
        {
          "id": "sd6-b3-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Sebuah balok memiliki ukuran panjang 12 cm, lebar 5 cm, dan tinggi 4 cm. Volume balok tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "$240\\text{ cm}^3$"
            },
            {
              "key": "B",
              "text": "$120\\text{ cm}^3$"
            },
            {
              "key": "C",
              "text": "$260\\text{ cm}^3$"
            },
            {
              "key": "D",
              "text": "$180\\text{ cm}^3$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kalikan panjang, lebar, dan tinggi: $12 \\times 5 \\times 4$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$V = 12 \\times 5 \\times 4 = 60 \\times 4 = 240\\text{ cm}^3$$\nVolume balok adalah **$240\\text{ cm}^3$** (Opsi A).",
          "visual": {
            "type": "solid-3d",
            "props": {
              "title": "Volume Balok",
              "caption": "*Panjang 12 cm, lebar 5 cm, dan tinggi 4 cm",
              "solid": "box",
              "lengthLabel": "p = 12 cm",
              "widthLabel": "l = 5 cm",
              "heightLabel": "t = 4 cm",
              "targetLabel": "Volume = ? cm³"
            }
          }
        },
        {
          "id": "sd6-b3-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Luas permukaan sebuah kubus yang memiliki panjang rusuk 5 cm adalah...",
          "options": [
            {
              "key": "A",
              "text": "$125\\text{ cm}^2$"
            },
            {
              "key": "B",
              "text": "$150\\text{ cm}^2$"
            },
            {
              "key": "C",
              "text": "$100\\text{ cm}^2$"
            },
            {
              "key": "D",
              "text": "$175\\text{ cm}^2$"
            }
          ],
          "correctAnswer": "B",
          "hint": "Gunakan rumus luas permukaan kubus: $L = 6 \\times s^2 = 6 \\times 5^2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$L = 6 \\times (5 \\times 5) = 6 \\times 25 = 150\\text{ cm}^2$$\nLuas permukaan kubus adalah **$150\\text{ cm}^2$** (Opsi B).",
          "visual": {
            "type": "solid-3d",
            "props": {
              "title": "Luas Permukaan Kubus",
              "caption": "*Memiliki 6 bidang sisi bujursangkar kongruen (s = 5 cm)",
              "solid": "box",
              "lengthLabel": "s = 5 cm",
              "widthLabel": "s = 5 cm",
              "heightLabel": "s = 5 cm",
              "targetLabel": "Luas = ? cm²"
            }
          }
        },
        {
          "id": "sd6-b3-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah bak mandi berbentuk balok memiliki ukuran panjang 80 cm, lebar 60 cm, dan tinggi 50 cm. Bak mandi tersebut telah terisi air sebanyak setengah bagiannya. Volume air yang perlu ditambahkan agar bak mandi terisi penuh adalah... (1 liter = $1.000\\text{ cm}^3$)",
          "options": [
            {
              "key": "A",
              "text": "240 liter"
            },
            {
              "key": "B",
              "text": "100 liter"
            },
            {
              "key": "C",
              "text": "120 liter"
            },
            {
              "key": "D",
              "text": "150 liter"
            }
          ],
          "correctAnswer": "C",
          "hint": "Hitung volume total balok: $80 \\times 60 \\times 50 = 240.000\\text{ cm}^3 = 240\\text{ liter}$. Karena sudah terisi setengah, sisa yang perlu ditambahkan adalah setengahnya.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Volume total bak mandi:\n$$V = 80 \\times 60 \\times 50 = 240.000\\text{ cm}^3 = 240\\text{ liter}$$\n2. Air yang perlu ditambahkan adalah setengah bagian:\n$$\\text{Air tambahan} = \\frac{1}{2} \\times 240 = 120\\text{ liter}$$\nVolume air yang perlu ditambahkan adalah **120 liter** (Opsi C).",
          "visual": {
            "type": "solid-3d",
            "props": {
              "title": "Bak Mandi Balok",
              "caption": "*Ukuran panjang 80 cm, lebar 60 cm, dan tinggi 50 cm",
              "solid": "box",
              "lengthLabel": "p = 80 cm",
              "widthLabel": "l = 60 cm",
              "heightLabel": "t = 50 cm",
              "targetLabel": "Volume = ? liter"
            }
          }
        },
        {
          "id": "sd6-b3-5",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Banyaknya titik sudut pada sebuah balok adalah...",
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
              "text": "4"
            },
            {
              "key": "D",
              "text": "8"
            }
          ],
          "correctAnswer": "D",
          "hint": "Balok memiliki 6 sisi, 12 rusuk, dan 8 titik sudut.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nBanyak titik sudut balok adalah **8** (Opsi D)."
        },
        {
          "id": "sd6-b3-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Panjang seluruh rusuk sebuah kubus adalah 96 cm. Panjang satu rusuk kubus tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "6 cm"
            },
            {
              "key": "B",
              "text": "12 cm"
            },
            {
              "key": "C",
              "text": "8 cm"
            },
            {
              "key": "D",
              "text": "16 cm"
            }
          ],
          "correctAnswer": "C",
          "hint": "Kubus memiliki 12 rusuk sama panjang: $s = 96 : 12 = 8$ cm.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$s = 96 : 12 = 8\\text{ cm}$$\nPanjang rusuknya adalah **8 cm** (Opsi C).",
          "visual": {
            "type": "solid-3d",
            "props": {
              "title": "Panjang Seluruh Rusuk Kubus",
              "caption": "*Panjang 12 rusuk kubus adalah 96 cm",
              "solid": "box",
              "lengthLabel": "s = ? cm",
              "widthLabel": "s = ? cm",
              "heightLabel": "s = ? cm",
              "targetLabel": "Diketahui: 12 Rusuk = 96 cm"
            }
          }
        },
        {
          "id": "sd6-b3-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah balok memiliki ukuran panjang 10 cm, lebar 6 cm, dan tinggi 4 cm. Jumlah panjang seluruh rusuk balok tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "40 cm"
            },
            {
              "key": "B",
              "text": "80 cm"
            },
            {
              "key": "C",
              "text": "20 cm"
            },
            {
              "key": "D",
              "text": "60 cm"
            }
          ],
          "correctAnswer": "B",
          "hint": "Total panjang rusuk balok $= 4 \\times (p + l + t) = 4 \\times (10 + 6 + 4) = 4 \\times 20 = 80$ cm.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$R = 4 \\times (10 + 6 + 4) = 4 \\times 20 = 80\\text{ cm}$$\nPanjang seluruh rusuk adalah **80 cm** (Opsi B).",
          "visual": {
            "type": "solid-3d",
            "props": {
              "title": "Kerangka Balok",
              "caption": "*Panjang 10 cm, lebar 6 cm, dan tinggi 4 cm",
              "solid": "box",
              "lengthLabel": "p = 10 cm",
              "widthLabel": "l = 6 cm",
              "heightLabel": "t = 4 cm",
              "targetLabel": "Total Rusuk = ?"
            }
          }
        },
        {
          "id": "sd6-b3-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Luas permukaan sebuah kubus adalah 216 cm². Panjang rusuk kubus tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "4 cm"
            },
            {
              "key": "B",
              "text": "6 cm"
            },
            {
              "key": "C",
              "text": "8 cm"
            },
            {
              "key": "D",
              "text": "36 cm"
            }
          ],
          "correctAnswer": "B",
          "hint": "Kubus memiliki 6 sisi persegi yang sama. Luas satu sisi $= 216 : 6$, lalu cari bilangan yang jika dikuadratkan menghasilkan luas tersebut.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Luas satu sisi: $216 : 6 = 36\\text{ cm}^2$.\n2. $s \\times s = 36$, maka $s = 6$ cm.\nPanjang rusuknya adalah **6 cm** (Opsi B).",
          "visual": {
            "type": "solid-3d",
            "props": {
              "title": "Mencari Rusuk dari Luas Permukaan",
              "caption": "*Luas permukaan kubus 216 cm²",
              "solid": "box",
              "lengthLabel": "s = ? cm",
              "widthLabel": "s",
              "heightLabel": "s",
              "targetLabel": "Diketahui: L = 216 cm²"
            }
          }
        },
        {
          "id": "sd6-b3-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Luas permukaan sebuah balok dengan panjang 8 cm, lebar 5 cm, dan tinggi 3 cm adalah...",
          "options": [
            {
              "key": "A",
              "text": "158 cm²"
            },
            {
              "key": "B",
              "text": "120 cm²"
            },
            {
              "key": "C",
              "text": "160 cm²"
            },
            {
              "key": "D",
              "text": "148 cm²"
            }
          ],
          "correctAnswer": "A",
          "hint": "Luas permukaan balok $= 2 \\times (pl + pt + lt) = 2 \\times (40 + 24 + 15) = 2 \\times 79 = 158$ cm².",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$L = 2 \\times (8\\times 5 + 8\\times 3 + 5\\times 3) = 2 \\times 79 = 158\\text{ cm}^2$$\nLuas permukaannya adalah **158 cm²** (Opsi A).",
          "visual": {
            "type": "solid-3d",
            "props": {
              "title": "Luas Permukaan Balok",
              "caption": "*Panjang 8 cm, lebar 5 cm, dan tinggi 3 cm",
              "solid": "box",
              "lengthLabel": "p = 8 cm",
              "widthLabel": "l = 5 cm",
              "heightLabel": "t = 3 cm",
              "targetLabel": "Luas = ? cm²"
            }
          }
        },
        {
          "id": "sd6-b3-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Volume sebuah kubus adalah 512 cm³. Luas salah satu bidang sisi kubus tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "36 cm²"
            },
            {
              "key": "B",
              "text": "81 cm²"
            },
            {
              "key": "C",
              "text": "64 cm²"
            },
            {
              "key": "D",
              "text": "49 cm²"
            }
          ],
          "correctAnswer": "C",
          "hint": "Rusuk $s = \\sqrt[3]{512} = 8$ cm. Luas 1 sisi $= 8 \\times 8 = 64$ cm².",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $s = \\sqrt[3]{512} = 8\\text{ cm}$\n2. Luas sisi $= 8^2 = 64\\text{ cm}^2$ (Opsi C).",
          "visual": {
            "type": "solid-3d",
            "props": {
              "title": "Luas Bidang Sisi Kubus",
              "caption": "*Volume kubus adalah 512 cm³",
              "solid": "box",
              "lengthLabel": "s",
              "widthLabel": "s",
              "heightLabel": "s",
              "targetLabel": "V = 512 cm³ (Luas sisi = ?)"
            }
          }
        },
        {
          "id": "sd6-b3-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah kardus berbentuk balok berukuran $40\\text{ cm} \\times 30\\text{ cm} \\times 20\\text{ cm}$ akan dimasukkan kotak mainan kubus bersisi 10 cm. Berapa banyak kotak mainan yang dapat masuk ke dalam kardus?",
          "options": [
            {
              "key": "A",
              "text": "20 kotak"
            },
            {
              "key": "B",
              "text": "18 kotak"
            },
            {
              "key": "C",
              "text": "30 kotak"
            },
            {
              "key": "D",
              "text": "24 kotak"
            }
          ],
          "correctAnswer": "D",
          "hint": "Hitung kapasitas tiap dimensi: $(40 : 10) \\times (30 : 10) \\times (20 : 10) = 4 \\times 3 \\times 2 = 24$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Banyak kotak} = \\frac{40 \\times 30 \\times 20}{10 \\times 10 \\times 10} = 4 \\times 3 \\times 2 = 24\\text{ kotak}$$\nDapat memuat **24 kotak mainan** (Opsi D).",
          "visual": {
            "type": "solid-3d",
            "props": {
              "title": "Kardus Balok",
              "caption": "*Ukuran 40 cm × 30 cm × 20 cm",
              "solid": "box",
              "lengthLabel": "p = 40 cm",
              "widthLabel": "l = 30 cm",
              "heightLabel": "t = 20 cm",
              "targetLabel": "Banyak Kotak = ?"
            }
          }
        },
        {
          "id": "sd6-b3-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah bak penampungan air berbentuk kubus memiliki panjang sisi dalam 1 meter. Jika bak tersebut sudah terisi air 650 liter, berapa liter air lagi yang harus ditambahkan agar bak terisi penuh?",
          "options": [
            {
              "key": "A",
              "text": "450 liter"
            },
            {
              "key": "B",
              "text": "250 liter"
            },
            {
              "key": "C",
              "text": "350 liter"
            },
            {
              "key": "D",
              "text": "300 liter"
            }
          ],
          "correctAnswer": "C",
          "hint": "Volume penuh $= 1\\text{ m}^3 = 1.000$ liter. Kekurangan $= 1.000 - 650 = 350$ liter.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$1.000 - 650 = 350\\text{ liter}$$\nHarus ditambahkan **350 liter air** (Opsi C).",
          "visual": {
            "type": "solid-3d",
            "props": {
              "title": "Bak Penampungan Air Kubus",
              "caption": "*Panjang rusuk bagian dalam 1 meter (100 cm)",
              "solid": "box",
              "lengthLabel": "s = 1 m",
              "widthLabel": "s = 1 m",
              "heightLabel": "s = 1 m",
              "targetLabel": "V = ? liter"
            }
          }
        },
        {
          "id": "sd6-b3-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Kawat sepanjang 2 meter akan digunakan untuk membuat kerangka balok berukuran $20\\text{ cm} \\times 15\\text{ cm} \\times 10\\text{ cm}$. Sisa kawat yang tidak terpakai adalah...",
          "options": [
            {
              "key": "A",
              "text": "30 cm"
            },
            {
              "key": "B",
              "text": "20 cm"
            },
            {
              "key": "C",
              "text": "15 cm"
            },
            {
              "key": "D",
              "text": "25 cm"
            }
          ],
          "correctAnswer": "B",
          "hint": "Panjang kawat kerangka $= 4 \\times (20 + 15 + 10) = 4 \\times 45 = 180$ cm. Sisa $= 200 - 180 = 20$ cm.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Kebutuhan kawat: $4 \\times (20 + 15 + 10) = 180\\text{ cm}$\n2. Sisa kawat: $200 - 180 = 20\\text{ cm}$ (Opsi B)."
        },
        {
          "id": "sd6-b3-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah kotak kado berbentuk balok berukuran $15\\text{ cm} \\times 10\\text{ cm} \\times 8\\text{ cm}$ akan dibungkus kertas kado. Luas minimal kertas kado yang dibutuhkan adalah...",
          "options": [
            {
              "key": "A",
              "text": "700 cm²"
            },
            {
              "key": "B",
              "text": "650 cm²"
            },
            {
              "key": "C",
              "text": "750 cm²"
            },
            {
              "key": "D",
              "text": "800 cm²"
            }
          ],
          "correctAnswer": "A",
          "hint": "Luas $= 2 \\times (15\\times 10 + 15\\times 8 + 10\\times 8) = 2 \\times (150 + 120 + 80) = 2 \\times 350 = 700$ cm².",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$L = 2 \\times (150 + 120 + 80) = 700\\text{ cm}^2$$\nLuas minimal kertas kado adalah **700 cm²** (Opsi A).",
          "visual": {
            "type": "solid-3d",
            "props": {
              "title": "Kotak Kado Balok",
              "caption": "*Ukuran 15 cm × 10 cm × 8 cm",
              "solid": "box",
              "lengthLabel": "p = 15 cm",
              "widthLabel": "l = 10 cm",
              "heightLabel": "t = 8 cm",
              "targetLabel": "Luas Kertas = ?"
            }
          }
        },
        {
          "id": "sd6-b3-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Perbandingan panjang rusuk dua buah kubus adalah 2 : 3. Jika volume kubus pertama adalah 64 cm³, berapakah volume kubus kedua?",
          "options": [
            {
              "key": "A",
              "text": "144 cm³"
            },
            {
              "key": "B",
              "text": "216 cm³"
            },
            {
              "key": "C",
              "text": "196 cm³"
            },
            {
              "key": "D",
              "text": "256 cm³"
            }
          ],
          "correctAnswer": "B",
          "hint": "Rusuk kubus 1 $= \\sqrt[3]{64} = 4$ cm. Rusuk kubus 2 $= \\frac{3}{2} \\times 4 = 6$ cm. Volume kubus 2 $= 6^3 = 216$ cm³.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $s_1 = \\sqrt[3]{64} = 4\\text{ cm}$\n2. $s_2 = \\frac{3}{2} \\times 4 = 6\\text{ cm}$\n3. $V_2 = 6^3 = 216\\text{ cm}^3$ (Opsi B)."
        },
        {
          "id": "sd6-b3-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah balok memiliki perbandingan panjang : lebar : tinggi = 4 : 3 : 2. Jika volume balok tersebut adalah 192 cm³, maka panjang balok tersebut adalah...",
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
              "text": "10 cm"
            },
            {
              "key": "D",
              "text": "8 cm"
            }
          ],
          "correctAnswer": "D",
          "hint": "Misalkan $p = 4x, l = 3x, t = 2x$. Volume $= 24x^3 = 192 \\implies x^3 = 8 \\implies x = 2$. Panjang $= 4 \\times 2 = 8$ cm.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $4x \\times 3x \\times 2x = 24x^3 = 192$\n2. $x^3 = 8 \\implies x = 2$\n3. $p = 4 \\times 2 = 8\\text{ cm}$ (Opsi D)."
        },
        {
          "id": "sd6-b3-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah kolam renang berukuran panjang 20 m, lebar 10 m, dan kedalaman 1,5 m. Dinding bagian dalam dan lantai kolam akan dipasangi keramik. Luas permukaan yang dipasangi keramik adalah...",
          "options": [
            {
              "key": "A",
              "text": "380 m²"
            },
            {
              "key": "B",
              "text": "300 m²"
            },
            {
              "key": "C",
              "text": "290 m²"
            },
            {
              "key": "D",
              "text": "260 m²"
            }
          ],
          "correctAnswer": "C",
          "hint": "Kolam tanpa tutup: Luas $= pl + 2pt + 2lt = (20 \\times 10) + 2(20 \\times 1{,}5) + 2(10 \\times 1{,}5) = 200 + 60 + 30 = 290$ m².",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Lantai: $20 \\times 10 = 200\\text{ m}^2$\n2. Dinding panjang: $2 \\times (20 \\times 1{,}5) = 60\\text{ m}^2$\n3. Dinding lebar: $2 \\times (10 \\times 1{,}5) = 30\\text{ m}^2$\nTotal luas $= 290\\text{ m}^2$ (Opsi C).",
          "visual": {
            "type": "solid-3d",
            "props": {
              "title": "Kolam Renang Balok",
              "caption": "*Panjang 20 m, lebar 10 m, kedalaman 1,5 m",
              "solid": "box",
              "lengthLabel": "p = 20 m",
              "widthLabel": "l = 10 m",
              "heightLabel": "kedalaman 1,5 m",
              "targetLabel": "Luas Keramik = ?"
            }
          }
        },
        {
          "id": "sd6-b3-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah kubus kayu padat berukuran rusuk 6 cm dicat merah seluruh permukaannya, kemudian dipotong-potong menjadi kubus-kubus kecil bersisi 1 cm. Berapa banyak kubus kecil yang memiliki tepat 2 sisi bercat merah?",
          "options": [
            {
              "key": "A",
              "text": "36 kubus"
            },
            {
              "key": "B",
              "text": "24 kubus"
            },
            {
              "key": "C",
              "text": "54 kubus"
            },
            {
              "key": "D",
              "text": "48 kubus"
            }
          ],
          "correctAnswer": "D",
          "hint": "Kubus dengan 2 sisi merah berada di rusuk tanpa sudut: $12 \\times (s - 2) = 12 \\times (6 - 2) = 12 \\times 4 = 48$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Banyak kubus} = 12 \\times (n - 2) = 12 \\times (6 - 2) = 48\\text{ kubus}$$\nAda **48 kubus kecil** (Opsi D)."
        },
        {
          "id": "sd6-b3-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Balok A berukuran $12\\text{ cm} \\times 8\\text{ cm} \\times 6\\text{ cm}$. Balok B memiliki panjang, lebar, dan tinggi masing-masing 1,5 kali ukuran balok A. Perbandingan volume balok A dan balok B adalah...",
          "options": [
            {
              "key": "A",
              "text": "8 : 27"
            },
            {
              "key": "B",
              "text": "2 : 3"
            },
            {
              "key": "C",
              "text": "4 : 9"
            },
            {
              "key": "D",
              "text": "1 : 3"
            }
          ],
          "correctAnswer": "A",
          "hint": "Perbandingan volume kubus/balok sebangun $= k^3 = (1 : 1{,}5)^3 = (2 : 3)^3 = 8 : 27$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Rasio volume} = 1 : (1{,}5)^3 = 1 : 3{,}375 = 8 : 27$$\nPerbandingannya adalah **8 : 27** (Opsi A)."
        },
        {
          "id": "sd6-b3-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Akuarium berbentuk balok dengan panjang 80 cm dan lebar 50 cm berisi air setinggi 30 cm. Ketika sebuah batu dimasukkan ke dalam akuarium dan tenggelam seluruhnya, tinggi air naik menjadi 33 cm. Volume batu tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "10.000 cm³"
            },
            {
              "key": "B",
              "text": "15.000 cm³"
            },
            {
              "key": "C",
              "text": "8.000 cm³"
            },
            {
              "key": "D",
              "text": "12.000 cm³"
            }
          ],
          "correctAnswer": "D",
          "hint": "Volume batu = Luas alas $\\times$ kenaikan tinggi air $= 80 \\times 50 \\times (33 - 30) = 4.000 \\times 3 = 12.000$ cm³.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$V = 80 \\times 50 \\times 3 = 12.000\\text{ cm}^3$$\nVolume batu adalah **12.000 cm³** (Opsi D).",
          "visual": {
            "type": "solid-3d",
            "props": {
              "title": "Akuarium Balok",
              "caption": "*Tinggi air naik dari 30 cm menjadi 33 cm setelah batu dimasukkan",
              "solid": "box",
              "lengthLabel": "p = 80 cm",
              "widthLabel": "l = 50 cm",
              "heightLabel": "30 → 33 cm",
              "targetLabel": "V Batu = ?"
            }
          }
        }
      ]
    },
    {
      "id": "sd6-bab4-peluang",
      "title": "Bab 4: Peluang",
      "summary": {
        "overview": "Sebelum pertandingan sepak bola dimulai, wasit melempar koin ke udara untuk menentukan tim mana yang memilih sisi lapangan lebih dahulu. Mengapa memakai koin? Karena sisi Angka dan sisi Gambar sama mungkin muncul, sehingga undian itu adil bagi kedua tim. Prinsip yang sama dipakai saat mengundi giliran presentasi kelompok atau arisan keluarga.\n\nDalam kehidupan sehari-hari kita sering memperkirakan kejadian yang belum terjadi: \"Apakah besok akan hujan?\", \"Mungkinkah matahari terbit dari barat?\", atau \"Warna kelereng apa yang paling mungkin terambil dari kantong?\". Kita tidak selalu bisa memastikan hasilnya, tetapi kita bisa membandingkan kejadian mana yang lebih mungkin, sama mungkin, atau kurang mungkin terjadi.\n\nBab ini membimbing siswa Kelas 6 mengenali kejadian yang pasti, mungkin, dan mustahil; mendaftar semua hasil yang dapat muncul pada percobaan sederhana seperti melempar koin, dadu, atau memutar roda putar; serta membandingkan kemungkinan dua kejadian dengan menghitung banyak hasil yang mendukung masing-masing kejadian.",
        "coreConcepts": [
          "Pasti, Mungkin, dan Mustahil:\n- Pasti terjadi: kejadian yang selalu terjadi, contoh: matahari terbit dari timur.\n- Mungkin terjadi: kejadian yang bisa terjadi atau tidak, contoh: besok sore turun hujan.\n- Mustahil terjadi: kejadian yang tidak mungkin terjadi, contoh: mendapat mata dadu 7 dari satu dadu biasa.",
          "Mendaftar Hasil yang Mungkin: Sebelum membandingkan, tuliskan semua hasil yang dapat muncul. Koin: Angka atau Gambar (2 hasil). Dadu: 1, 2, 3, 4, 5, 6 (6 hasil). Kantong berisi 4 kelereng merah dan 2 kelereng biru: 6 kelereng yang masing-masing bisa terambil.",
          "Membandingkan Kemungkinan: Kejadian yang didukung oleh lebih banyak hasil atau benda lebih mungkin terjadi. Jika banyaknya sama, kedua kejadian sama mungkin. Contoh: pada dadu, \"muncul kurang dari 5\" (1, 2, 3, 4) lebih mungkin daripada \"muncul lebih dari 4\" (5, 6).",
          "Percobaan Adil: Sebuah undian adil jika setiap peserta memiliki kemungkinan yang sama. Hasil percobaan nyata bisa sedikit berbeda dari perkiraan (misalnya koin dilempar 20 kali menghasilkan 11 Angka dan 9 Gambar), dan itu wajar."
        ],
        "workedExamples": [
          {
            "title": "Membandingkan Kemungkinan pada Dadu",
            "problem": "Sebuah dadu dilempar satu kali. Manakah yang lebih mungkin: muncul mata dadu genap atau muncul mata dadu 1?",
            "solution": "Langkah 1: Daftar hasil yang mendukung setiap kejadian:\n- Mata dadu genap: 2, 4, 6 (3 hasil)\n- Mata dadu 1: hanya 1 hasil\n\nLangkah 2: Bandingkan banyaknya hasil: $3 > 1$.\n\nJadi, **muncul mata dadu genap lebih mungkin** daripada muncul mata dadu 1."
          },
          {
            "title": "Kelereng Mana yang Paling Mungkin Terambil?",
            "problem": "Di dalam kantong terdapat 3 kelereng merah, 5 kelereng biru, dan 2 kelereng kuning. Budi mengambil satu kelereng tanpa melihat. Urutkan warna dari yang paling mungkin sampai yang paling kecil kemungkinannya terambil.",
            "solution": "Langkah 1: Bandingkan banyak kelereng setiap warna: biru 5, merah 3, kuning 2.\n\nLangkah 2: Warna dengan kelereng lebih banyak lebih mungkin terambil.\n\nUrutannya: **biru, merah, kuning**."
          }
        ],
        "keyFormulas": [
          {
            "label": "Membandingkan Kemungkinan",
            "formula": "\\text{lebih banyak hasil yang mendukung} \\Rightarrow \\text{lebih mungkin terjadi}"
          },
          {
            "label": "Skala Kemungkinan",
            "formula": "\\text{mustahil} \\;<\\; \\text{kurang mungkin} \\;<\\; \\text{sama mungkin} \\;<\\; \\text{lebih mungkin} \\;<\\; \\text{pasti}"
          }
        ],
        "misconceptions": [
          "Menganggap angka yang \"lebih besar\" lebih mudah muncul pada dadu. Setiap mata dadu sama mungkin muncul; yang dibandingkan adalah banyaknya hasil yang mendukung suatu kejadian.",
          "Mengira setelah 3 kali muncul Angka, lemparan berikutnya pasti Gambar. Setiap lemparan koin tetap sama mungkin menghasilkan Angka atau Gambar.",
          "Menganggap semua kejadian selalu 50:50, padahal kemungkinan bergantung pada banyaknya hasil atau benda yang mendukung kejadian itu."
        ],
        "tutorTip": "Biasakan menulis daftar semua hasil yang mungkin sebelum menjawab. Setelah daftar lengkap, cukup bandingkan mana yang hasilnya lebih banyak."
      },
      "questions": [
        {
          "id": "sd6-b4-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Sebuah koin dilempar satu kali. Pernyataan yang benar tentang munculnya sisi Angka dan sisi Gambar adalah...",
          "options": [
            {
              "key": "A",
              "text": "Sisi Angka lebih mungkin muncul"
            },
            {
              "key": "B",
              "text": "Sisi Gambar lebih mungkin muncul"
            },
            {
              "key": "C",
              "text": "Keduanya sama mungkin muncul"
            },
            {
              "key": "D",
              "text": "Sisi Gambar mustahil muncul"
            }
          ],
          "correctAnswer": "C",
          "hint": "Koin hanya memiliki dua sisi yang sama-sama bisa muncul.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nKoin memiliki 2 sisi (Angka dan Gambar) dan masing-masing hanya 1 sisi, sehingga **keduanya sama mungkin muncul**.\n(Opsi C).",
          "visual": {
            "type": "coin",
            "props": {
              "title": "Pelemparan Koin",
              "caption": "*Koin memiliki sisi Angka dan sisi Gambar",
              "targetLabel": "Bandingkan!"
            }
          }
        },
        {
          "id": "sd6-b4-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Pernyataan berikut yang merupakan contoh peristiwa yang pasti terjadi adalah...",
          "options": [
            {
              "key": "A",
              "text": "Hari ini akan turun hujan lebat"
            },
            {
              "key": "B",
              "text": "Matahari terbit dari sebelah timur"
            },
            {
              "key": "C",
              "text": "Mendapatkan angka 7 saat melempar dadu biasa"
            },
            {
              "key": "D",
              "text": "Kucing dapat bertelur"
            }
          ],
          "correctAnswer": "B",
          "hint": "Peristiwa pasti memiliki peluang 1 dan selalu terjadi sesuai hukum alam.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nMatahari terbit dari sebelah timur adalah kepastian hukum alam (peluang $= 1$). Jadi, pernyataan tersebut adalah **peristiwa pasti terjadi** (Opsi B)."
        },
        {
          "id": "sd6-b4-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah dadu dilempar satu kali. Manakah yang lebih mungkin: muncul mata dadu lebih dari 4, atau muncul mata dadu kurang dari 5?",
          "options": [
            {
              "key": "A",
              "text": "Lebih dari 4, karena angkanya besar"
            },
            {
              "key": "B",
              "text": "Keduanya sama mungkin"
            },
            {
              "key": "C",
              "text": "Kurang dari 5, karena ada 4 mata dadu yang memenuhi (1, 2, 3, 4)"
            },
            {
              "key": "D",
              "text": "Lebih dari 4, karena ada 3 mata dadu yang memenuhi"
            }
          ],
          "correctAnswer": "C",
          "hint": "Daftar mata dadu yang lebih dari 4, lalu yang kurang dari 5.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Lebih dari 4: mata dadu 5 dan 6 (2 kemungkinan).\n2. Kurang dari 5: mata dadu 1, 2, 3, 4 (4 kemungkinan).\nJadi **kurang dari 5 lebih mungkin**.\n(Opsi C).",
          "visual": {
            "type": "dice",
            "props": {
              "title": "Pelemparan Dadu",
              "caption": "*Dadu bermata 1 sampai 6",
              "diceValue": 5,
              "targetLabel": "Lebih mungkin?"
            }
          }
        },
        {
          "id": "sd6-b4-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah kotak berisi 4 bola merah, 6 bola biru, dan 5 bola hijau. Diambil satu bola tanpa melihat. Urutan warna dari yang paling mungkin sampai yang paling kecil kemungkinannya terambil adalah...",
          "options": [
            {
              "key": "A",
              "text": "merah, hijau, biru"
            },
            {
              "key": "B",
              "text": "biru, hijau, merah"
            },
            {
              "key": "C",
              "text": "hijau, biru, merah"
            },
            {
              "key": "D",
              "text": "biru, merah, hijau"
            }
          ],
          "correctAnswer": "B",
          "hint": "Semakin banyak bola suatu warna, semakin besar kemungkinannya terambil.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nBanyak bola: biru 6, hijau 5, merah 4.\nUrutan dari yang paling mungkin: **biru, hijau, merah**.\n(Opsi B).",
          "visual": {
            "type": "probability-bag",
            "props": {
              "title": "Bola dalam Kotak",
              "caption": "*4 bola merah, 6 bola biru, dan 5 bola hijau",
              "targetLabel": "Bandingkan!",
              "items": [
                {
                  "color": "red",
                  "count": 4,
                  "fill": "#FCA5A5",
                  "stroke": "#DC2626",
                  "label": "4 Merah"
                },
                {
                  "color": "blue",
                  "count": 6,
                  "fill": "#93C5FD",
                  "stroke": "#2563EB",
                  "label": "6 Biru"
                },
                {
                  "color": "green",
                  "count": 5,
                  "fill": "#86EFAC",
                  "stroke": "#16A34A",
                  "label": "5 Hijau"
                }
              ]
            }
          }
        },
        {
          "id": "sd6-b4-5",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Kejadian berikut yang mustahil terjadi adalah...",
          "options": [
            {
              "key": "A",
              "text": "Hari ini turun hujan"
            },
            {
              "key": "B",
              "text": "Besok hari Senin"
            },
            {
              "key": "C",
              "text": "Mendapat mata dadu 7 saat melempar satu dadu biasa"
            },
            {
              "key": "D",
              "text": "Koin yang dilempar menunjukkan sisi Angka"
            }
          ],
          "correctAnswer": "C",
          "hint": "Dadu biasa hanya memiliki mata dadu 1 sampai 6.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nDadu biasa tidak memiliki mata dadu 7, sehingga **mendapat mata dadu 7** adalah kejadian mustahil.\n(Opsi C)."
        },
        {
          "id": "sd6-b4-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah dadu dilempar satu kali. Bagaimana kemungkinan muncul mata dadu ganjil dibandingkan mata dadu genap?",
          "options": [
            {
              "key": "A",
              "text": "Mata dadu ganjil lebih mungkin"
            },
            {
              "key": "B",
              "text": "Mata dadu genap lebih mungkin"
            },
            {
              "key": "C",
              "text": "Sama mungkin, karena masing-masing ada 3 mata dadu"
            },
            {
              "key": "D",
              "text": "Mata dadu ganjil mustahil muncul"
            }
          ],
          "correctAnswer": "C",
          "hint": "Mata dadu ganjil: 1, 3, 5. Mata dadu genap: 2, 4, 6.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nGanjil (1, 3, 5) dan genap (2, 4, 6) sama-sama ada 3 mata dadu, sehingga keduanya **sama mungkin**.\n(Opsi C).",
          "visual": {
            "type": "dice",
            "props": {
              "title": "Mata Dadu Ganjil dan Genap",
              "caption": "*Dadu bermata 1 sampai 6",
              "diceValue": 3,
              "targetLabel": "Bandingkan!"
            }
          }
        },
        {
          "id": "sd6-b4-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah kotak berisi 4 bola merah, 5 bola biru, dan 3 bola hijau. Diambil satu bola tanpa melihat. Warna yang paling mungkin terambil adalah...",
          "options": [
            {
              "key": "A",
              "text": "Merah"
            },
            {
              "key": "B",
              "text": "Biru"
            },
            {
              "key": "C",
              "text": "Hijau"
            },
            {
              "key": "D",
              "text": "Ketiganya sama mungkin"
            }
          ],
          "correctAnswer": "B",
          "hint": "Bandingkan banyak bola setiap warna.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nBola biru paling banyak (5 bola), sehingga **biru** paling mungkin terambil.\n(Opsi B).",
          "visual": {
            "type": "probability-bag",
            "props": {
              "title": "Bola dalam Kotak",
              "caption": "*4 bola merah, 5 bola biru, dan 3 bola hijau",
              "targetLabel": "Bandingkan!",
              "items": [
                {
                  "color": "red",
                  "count": 4,
                  "fill": "#FCA5A5",
                  "stroke": "#DC2626",
                  "label": "4 Merah"
                },
                {
                  "color": "blue",
                  "count": 5,
                  "fill": "#93C5FD",
                  "stroke": "#2563EB",
                  "label": "5 Biru"
                },
                {
                  "color": "green",
                  "count": 3,
                  "fill": "#86EFAC",
                  "stroke": "#16A34A",
                  "label": "3 Hijau"
                }
              ]
            }
          }
        },
        {
          "id": "sd6-b4-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Andi memasukkan 10 kelereng merah ke dalam kantong kosong, lalu mengambil satu kelereng tanpa melihat. Kejadian \"terambil kelereng merah\" termasuk kejadian yang...",
          "options": [
            {
              "key": "A",
              "text": "mustahil"
            },
            {
              "key": "B",
              "text": "kurang mungkin"
            },
            {
              "key": "C",
              "text": "sama mungkin"
            },
            {
              "key": "D",
              "text": "pasti"
            }
          ],
          "correctAnswer": "D",
          "hint": "Apa saja isi kantong tersebut?",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nSemua kelereng di kantong berwarna merah, sehingga kelereng yang terambil **pasti** merah.\n(Opsi D)."
        },
        {
          "id": "sd6-b4-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah roda putar dibagi menjadi 4 bagian sama besar: 3 bagian biru dan 1 bagian merah. Jika roda diputar satu kali, pernyataan yang benar adalah...",
          "options": [
            {
              "key": "A",
              "text": "Jarum lebih mungkin berhenti di merah"
            },
            {
              "key": "B",
              "text": "Jarum lebih mungkin berhenti di biru"
            },
            {
              "key": "C",
              "text": "Biru dan merah sama mungkin"
            },
            {
              "key": "D",
              "text": "Jarum pasti berhenti di merah"
            }
          ],
          "correctAnswer": "B",
          "hint": "Warna dengan bagian lebih banyak lebih mungkin ditunjuk jarum.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nBagian biru (3) lebih banyak daripada merah (1), sehingga jarum **lebih mungkin berhenti di biru**.\n(Opsi B).",
          "visual": {
            "type": "spinner",
            "props": {
              "title": "Roda Putar",
              "caption": "*3 bagian biru dan 1 bagian merah",
              "sectors": [
                "biru",
                "biru",
                "biru",
                "merah"
              ],
              "targetLabel": "Bandingkan!"
            }
          }
        },
        {
          "id": "sd6-b4-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah kantong berisi 20 kartu bernomor 1 sampai 20. Diambil satu kartu tanpa melihat. Kejadian manakah yang paling kecil kemungkinannya?",
          "options": [
            {
              "key": "A",
              "text": "Terambil kartu bernomor genap"
            },
            {
              "key": "B",
              "text": "Terambil kartu bernomor kurang dari 15"
            },
            {
              "key": "C",
              "text": "Terambil kartu bernomor ganjil"
            },
            {
              "key": "D",
              "text": "Terambil kartu bernomor kelipatan 5"
            }
          ],
          "correctAnswer": "D",
          "hint": "Hitung banyak kartu yang memenuhi setiap kejadian.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Genap: 10 kartu.\n2. Kurang dari 15: 14 kartu.\n3. Ganjil: 10 kartu.\n4. Kelipatan 5 (5, 10, 15, 20): 4 kartu.\nYang paling kecil kemungkinannya adalah **kelipatan 5**.\n(Opsi D)."
        },
        {
          "id": "sd6-b4-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Lia melempar koin 20 kali dan mencatat hasilnya: Angka 11 kali dan Gambar 9 kali. Kesimpulan yang tepat adalah...",
          "options": [
            {
              "key": "A",
              "text": "Hasil itu wajar, karena Angka dan Gambar sama mungkin sehingga jumlahnya hampir sama"
            },
            {
              "key": "B",
              "text": "Koin pasti rusak karena hasilnya tidak tepat 10 dan 10"
            },
            {
              "key": "C",
              "text": "Pada lemparan berikutnya pasti muncul Gambar"
            },
            {
              "key": "D",
              "text": "Angka selalu lebih mungkin muncul daripada Gambar"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kejadian yang sama mungkin tidak harus muncul dengan jumlah yang persis sama.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nAngka dan Gambar sama mungkin, tetapi hasil percobaan bisa sedikit berbeda. Angka 11 dan Gambar 9 masih **wajar** karena jumlahnya hampir sama.\n(Opsi A)."
        },
        {
          "id": "sd6-b4-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dari kartu angka 1 sampai 10 diambil satu kartu tanpa melihat. Manakah yang lebih mungkin: terambil kartu bilangan prima atau kartu bilangan bukan prima?",
          "options": [
            {
              "key": "A",
              "text": "Bukan prima, karena ada 6 kartu"
            },
            {
              "key": "B",
              "text": "Prima, karena ada 4 kartu"
            },
            {
              "key": "C",
              "text": "Keduanya sama mungkin"
            },
            {
              "key": "D",
              "text": "Kartu prima mustahil terambil"
            }
          ],
          "correctAnswer": "A",
          "hint": "Bilangan prima dari 1 sampai 10 adalah 2, 3, 5, dan 7.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Prima: 2, 3, 5, 7 (4 kartu).\n2. Bukan prima: 1, 4, 6, 8, 9, 10 (6 kartu).\nJadi **kartu bukan prima lebih mungkin** terambil.\n(Opsi A)."
        },
        {
          "id": "sd6-b4-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah roda putar dibagi menjadi 8 juring sama besar: 3 juring merah, 3 juring kuning, dan 2 juring hijau. Pernyataan yang benar adalah...",
          "options": [
            {
              "key": "A",
              "text": "Hijau paling mungkin ditunjuk jarum"
            },
            {
              "key": "B",
              "text": "Merah dan kuning sama mungkin, dan keduanya lebih mungkin daripada hijau"
            },
            {
              "key": "C",
              "text": "Ketiga warna sama mungkin"
            },
            {
              "key": "D",
              "text": "Hijau mustahil ditunjuk jarum"
            }
          ],
          "correctAnswer": "B",
          "hint": "Bandingkan banyak juring setiap warna.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nMerah (3) dan kuning (3) sama banyak, sedangkan hijau hanya 2. Jadi **merah dan kuning sama mungkin dan lebih mungkin daripada hijau**.\n(Opsi B).",
          "visual": {
            "type": "spinner",
            "props": {
              "title": "Roda Putar",
              "caption": "*8 juring sama besar: 3 merah, 3 kuning, 2 hijau",
              "sectors": [
                "merah",
                "merah",
                "merah",
                "kuning",
                "kuning",
                "kuning",
                "hijau",
                "hijau"
              ],
              "targetLabel": "Bandingkan!"
            }
          }
        },
        {
          "id": "sd6-b4-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Urutkan kejadian berikut dari yang paling mungkin: (1) Matahari terbit besok pagi, (2) Mendapat mata dadu 6 saat melempar satu dadu, (3) Seekor kucing berbicara bahasa Indonesia.",
          "options": [
            {
              "key": "A",
              "text": "2, 1, 3"
            },
            {
              "key": "B",
              "text": "3, 2, 1"
            },
            {
              "key": "C",
              "text": "1, 3, 2"
            },
            {
              "key": "D",
              "text": "1, 2, 3"
            }
          ],
          "correctAnswer": "D",
          "hint": "Tentukan mana yang pasti, mana yang mungkin, dan mana yang mustahil.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n(1) pasti terjadi, (2) mungkin terjadi, (3) mustahil terjadi.\nUrutannya **1, 2, 3**.\n(Opsi D)."
        },
        {
          "id": "sd6-b4-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Kantong A berisi 2 bola merah dan 8 bola putih. Kantong B berisi 5 bola merah dan 5 bola putih. Dina ingin mendapat bola merah dengan sekali ambil. Dari kantong mana sebaiknya ia mengambil?",
          "options": [
            {
              "key": "A",
              "text": "Kantong B"
            },
            {
              "key": "B",
              "text": "Kantong A"
            },
            {
              "key": "C",
              "text": "Sama saja"
            },
            {
              "key": "D",
              "text": "Tidak dapat ditentukan"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kedua kantong berisi 10 bola. Kantong mana yang bola merahnya lebih banyak?",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nKedua kantong berisi 10 bola, tetapi kantong B memiliki lebih banyak bola merah (5) daripada kantong A (2). Jadi sebaiknya mengambil dari **kantong B**.\n(Opsi A)."
        },
        {
          "id": "sd6-b4-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah kotak berisi 6 kelereng merah dan 9 kelereng putih. Paling sedikit berapa kelereng merah yang harus ditambahkan agar kelereng merah lebih mungkin terambil daripada kelereng putih?",
          "options": [
            {
              "key": "A",
              "text": "4 kelereng"
            },
            {
              "key": "B",
              "text": "3 kelereng"
            },
            {
              "key": "C",
              "text": "9 kelereng"
            },
            {
              "key": "D",
              "text": "6 kelereng"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kelereng merah harus lebih banyak daripada 9.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nAgar lebih mungkin, kelereng merah harus lebih dari 9, yaitu paling sedikit 10.\n$$10 - 6 = 4\\text{ kelereng}$$\n(Opsi A)."
        },
        {
          "id": "sd6-b4-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Setiap huruf dari kata MATEMATIKA ditulis pada sebuah kartu, lalu semua kartu dimasukkan ke dalam kantong. Diambil satu kartu tanpa melihat. Huruf yang paling mungkin terambil adalah...",
          "options": [
            {
              "key": "A",
              "text": "M"
            },
            {
              "key": "B",
              "text": "T"
            },
            {
              "key": "C",
              "text": "K"
            },
            {
              "key": "D",
              "text": "A"
            }
          ],
          "correctAnswer": "D",
          "hint": "Hitung berapa kali setiap huruf muncul pada kata MATEMATIKA.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nM: 2 kali, A: 3 kali, T: 2 kali, E: 1 kali, I: 1 kali, K: 1 kali.\nHuruf **A** paling banyak, sehingga paling mungkin terambil.\n(Opsi D)."
        },
        {
          "id": "sd6-b4-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah kantong berisi 5 permen rasa jeruk, 8 permen rasa mangga, dan 7 permen rasa stroberi. Rina mengambil 1 permen mangga lalu memakannya. Jika ia mengambil satu permen lagi tanpa melihat, rasa yang paling mungkin terambil sekarang adalah...",
          "options": [
            {
              "key": "A",
              "text": "Jeruk"
            },
            {
              "key": "B",
              "text": "Mangga"
            },
            {
              "key": "C",
              "text": "Stroberi"
            },
            {
              "key": "D",
              "text": "Mangga dan stroberi sama mungkin"
            }
          ],
          "correctAnswer": "D",
          "hint": "Hitung sisa permen setiap rasa setelah 1 permen mangga dimakan.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nSisa permen: jeruk 5, mangga 7, stroberi 7.\nMangga dan stroberi sama banyak, sehingga **mangga dan stroberi sama mungkin** terambil.\n(Opsi D)."
        },
        {
          "id": "sd6-b4-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Tiga koin dilempar bersamaan. Manakah yang lebih mungkin: muncul 3 Angka semua, atau muncul 2 Angka dan 1 Gambar?",
          "options": [
            {
              "key": "A",
              "text": "3 Angka semua"
            },
            {
              "key": "B",
              "text": "Keduanya sama mungkin"
            },
            {
              "key": "C",
              "text": "2 Angka dan 1 Gambar, karena dapat terjadi dengan 3 cara (AAG, AGA, GAA)"
            },
            {
              "key": "D",
              "text": "Tidak dapat dibandingkan"
            }
          ],
          "correctAnswer": "C",
          "hint": "Tuliskan semua cara agar setiap kejadian terjadi.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. 3 Angka: hanya 1 cara (AAA).\n2. 2 Angka dan 1 Gambar: 3 cara (AAG, AGA, GAA).\nJadi **2 Angka dan 1 Gambar lebih mungkin**.\n(Opsi C)."
        },
        {
          "id": "sd6-b4-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Guru mengundi 1 nama ketua kelas dari kertas berisi nama 12 siswa perempuan dan 18 siswa laki-laki. Pernyataan yang benar adalah...",
          "options": [
            {
              "key": "A",
              "text": "Siswa laki-laki lebih mungkin terpilih"
            },
            {
              "key": "B",
              "text": "Siswa perempuan lebih mungkin terpilih"
            },
            {
              "key": "C",
              "text": "Keduanya sama mungkin terpilih"
            },
            {
              "key": "D",
              "text": "Siswa perempuan pasti terpilih"
            }
          ],
          "correctAnswer": "A",
          "hint": "Bandingkan banyak nama siswa laki-laki dan perempuan.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nNama siswa laki-laki (18) lebih banyak daripada siswa perempuan (12), sehingga **siswa laki-laki lebih mungkin terpilih**.\n(Opsi A)."
        }
      ]
    }
  ]
};
