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
              "text": "$\\frac{3}{2}$ atau $1\\frac{1}{2}$"
            },
            {
              "key": "B",
              "text": "$\\frac{8}{27}$"
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
            {
              "key": "A",
              "text": "0,6"
            },
            {
              "key": "B",
              "text": "0,35"
            },
            {
              "key": "C",
              "text": "0,53"
            },
            {
              "key": "D",
              "text": "0,8"
            }
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
            {
              "key": "A",
              "text": "0,48"
            },
            {
              "key": "B",
              "text": "4,8"
            },
            {
              "key": "C",
              "text": "0,048"
            },
            {
              "key": "D",
              "text": "0,84"
            }
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
            {
              "key": "A",
              "text": "12 potongan"
            },
            {
              "key": "B",
              "text": "10 potongan"
            },
            {
              "key": "C",
              "text": "15 potongan"
            },
            {
              "key": "D",
              "text": "14 potongan"
            }
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
            {
              "key": "A",
              "text": "15 wadah"
            },
            {
              "key": "B",
              "text": "12 wadah"
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
          "correctAnswer": "A",
          "hint": "Hitung total beras: $3 \\times 2{,}5 = 7{,}5\\text{ kg}$, lalu bagi dengan 0,5.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Total beras: $3 \\times 2{,}5 = 7{,}5\\text{ kg}$.\n2. Banyak wadah yang dibutuhkan:\n$$\\text{Banyak wadah} = \\frac{7{,}5}{0{,}5} = \\frac{75}{5} = 15$$\nBanyak wadah kecil yang dibutuhkan adalah **15 wadah** (Opsi A)."
        },
        {
          "id": "sd6-b1-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil perkalian pecahan $\\frac{3}{4} \\times \\frac{2}{5}$ dalam bentuk paling sederhana adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{3}{10}"
            },
            {
              "key": "B",
              "text": "\\frac{6}{20}"
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
          "correctAnswer": "A",
          "hint": "Kalikan pembilang dengan pembilang, penyebut dengan penyebut, lalu sederhanakan.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{3 \\times 2}{4 \\times 5} = \\frac{6}{20} = \\frac{3}{10}$$\nHasil paling sederhananya adalah **$\\frac{3}{10}$** (Opsi A)."
        },
        {
          "id": "sd6-b1-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil pembagian pecahan $\\frac{5}{6} : \\frac{2}{3}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "1 \\frac{1}{4}"
            },
            {
              "key": "B",
              "text": "1 \\frac{1}{2}"
            },
            {
              "key": "C",
              "text": "\\frac{10}{18}"
            },
            {
              "key": "D",
              "text": "1 \\frac{1}{5}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Ubah pembagian menjadi perkalian dengan kebalikan pecahan kedua: $\\frac{5}{6} \\times \\frac{3}{2}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{5}{6} \\times \\frac{3}{2} = \\frac{15}{12} = \\frac{5}{4} = 1\\frac{1}{4}$$\nHasilnya adalah **$1\\frac{1}{4}$** (Opsi A)."
        },
        {
          "id": "sd6-b1-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil dari $2{,}45 + 1{,}78$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "4,23"
            },
            {
              "key": "B",
              "text": "4,13"
            },
            {
              "key": "C",
              "text": "3,23"
            },
            {
              "key": "D",
              "text": "4,25"
            }
          ],
          "correctAnswer": "A",
          "hint": "Luruskan tanda koma desimal sebelum menjumlahkan bersusun.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$2{,}45 + 1{,}78 = 4{,}23$$\nHasilnya adalah **4,23** (Opsi A)."
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
              "text": "0,1"
            },
            {
              "key": "B",
              "text": "0,01"
            },
            {
              "key": "C",
              "text": "1,0"
            },
            {
              "key": "D",
              "text": "0,15"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kalikan bilangan bulat $4 \\times 25 = 100$, lalu hitung total 3 tempat desimal.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$4 \\times 25 = 100 \\implies 0{,}100 = 0{,}1$$\nHasilnya adalah **0,1** (Opsi A)."
        },
        {
          "id": "sd6-b1-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Ibu membeli $2\\frac{1}{2}$ kg gula pasir. Jika setiap cangkir teh membutuhkan 0,05 kg gula, berapa cangkir teh yang dapat dibuat Ibu?",
          "options": [
            {
              "key": "A",
              "text": "50 cangkir"
            },
            {
              "key": "B",
              "text": "40 cangkir"
            },
            {
              "key": "C",
              "text": "60 cangkir"
            },
            {
              "key": "D",
              "text": "25 cangkir"
            }
          ],
          "correctAnswer": "A",
          "hint": "Ubah $2\\frac{1}{2}$ kg ke desimal $= 2{,}5$ kg, lalu bagi dengan 0,05.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$2{,}5 : 0{,}05 = 250 : 5 = 50$$\nDapat dibuat **50 cangkir teh** (Opsi A)."
        },
        {
          "id": "sd6-b1-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Pak Budi memiliki sebidang tanah seluas 400 m². Sebanyak 0,35 bagian dibangun rumah dan $\\frac{1}{4}$ bagian dijadikan kebun. Sisa tanah untuk halaman adalah...",
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
          "correctAnswer": "A",
          "hint": "Hitung luas rumah ($0{,}35 \\times 400 = 140$) dan kebun ($\\frac{1}{4} \\times 400 = 100$). Sisa $= 400 - 240$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Rumah: $0{,}35 \\times 400 = 140\\text{ m}^2$\n2. Kebun: $\\frac{1}{4} \\times 400 = 100\\text{ m}^2$\n3. Sisa: $400 - (140 + 100) = 160\\text{ m}^2$ (Opsi A)."
        },
        {
          "id": "sd6-b1-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil dari $3 : 0{,}6$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "5"
            },
            {
              "key": "B",
              "text": "0,5"
            },
            {
              "key": "C",
              "text": "18"
            },
            {
              "key": "D",
              "text": "2"
            }
          ],
          "correctAnswer": "A",
          "hint": "Ubah menjadi $30 : 6 = 5$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{3}{0{,}6} = \\frac{30}{6} = 5$$\nHasilnya adalah **5** (Opsi A)."
        },
        {
          "id": "sd6-b1-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bentuk pecahan biasa paling sederhana dari bilangan desimal 0,375 adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{3}{8}"
            },
            {
              "key": "B",
              "text": "\\frac{3}{4}"
            },
            {
              "key": "C",
              "text": "\\frac{7}{20}"
            },
            {
              "key": "D",
              "text": "\\frac{15}{40}"
            }
          ],
          "correctAnswer": "A",
          "hint": "0,375 $= \\frac{375}{1000}$. Bagi pembilang dan penyebut dengan 125.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{375 : 125}{1000 : 125} = \\frac{3}{8}$$\nBentuk sederhananya adalah **$\\frac{3}{8}$** (Opsi A)."
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
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Diminum: $1{,}2 \\times \\frac{1}{3} = 0{,}4\\text{ liter}$\n2. Sisa: $1{,}2 - 0{,}4 = 0{,}8\\text{ liter}$ (Opsi A)."
        },
        {
          "id": "sd6-b1-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Hasil dari operasi campuran $\\left(1\\frac{1}{2} + 0{,}75\\right) \\times 0{,}4$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "0,9"
            },
            {
              "key": "B",
              "text": "1,2"
            },
            {
              "key": "C",
              "text": "0,8"
            },
            {
              "key": "D",
              "text": "1,5"
            }
          ],
          "correctAnswer": "A",
          "hint": "Ubah ke desimal: $1\\frac{1}{2} = 1{,}5$. Maka $(1{,}5 + 0{,}75) \\times 0{,}4 = 2{,}25 \\times 0{,}4$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$2{,}25 \\times 0{,}4 = 0{,}90 = 0{,}9$$\nHasilnya adalah **0,9** (Opsi A)."
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
          "question": "Sebuah mobil menempuh jarak $150\\frac{1}{2}$ km dengan menghabiskan 10,75 liter bensin. Konsumsi bensin rata-rata mobil tersebut per liter adalah...",
          "options": [
            {
              "key": "A",
              "text": "14 km/liter"
            },
            {
              "key": "B",
              "text": "15 km/liter"
            },
            {
              "key": "C",
              "text": "13 km/liter"
            },
            {
              "key": "D",
              "text": "16 km/liter"
            }
          ],
          "correctAnswer": "A",
          "hint": "Bagi jarak dengan konsumsi bensin: $150{,}5 : 10{,}75 = 14$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$150{,}5 : 10{,}75 = 15.050 : 1.075 = 14\\text{ km/liter}$$\nKonsumsinya adalah **14 km/liter** (Opsi A)."
        },
        {
          "id": "sd6-b1-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Urutan bilangan $0{,}65$; $\\frac{5}{8}$; $60\\%$; $0{,}7$ dari yang terbesar ke terkecil adalah...",
          "options": [
            {
              "key": "A",
              "text": "0,7; 0,65; 5/8; 60%"
            },
            {
              "key": "B",
              "text": "0,7; 5/8; 0,65; 60%"
            },
            {
              "key": "C",
              "text": "60%; 5/8; 0,65; 0,7"
            },
            {
              "key": "D",
              "text": "0,65; 0,7; 5/8; 60%"
            }
          ],
          "correctAnswer": "A",
          "hint": "Ubah semua ke desimal: $0{,}7 = 0{,}70$; $0{,}65$; $\\frac{5}{8} = 0{,}625$; $60\\% = 0{,}60$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $0{,}7 = 0{,}700$\n2. $0{,}65 = 0{,}650$\n3. $\\frac{5}{8} = 0{,}625$\n4. $60\\% = 0{,}600$\nUrutan turun: **0,7; 0,65; 5/8; 60%** (Opsi A)."
        },
        {
          "id": "sd6-b1-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Nilai dari $\\frac{0{,}25 \\times 0{,}8}{0{,}05}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "4"
            },
            {
              "key": "B",
              "text": "0,4"
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
          "correctAnswer": "A",
          "hint": "Hitung pembilang: $0{,}25 \\times 0{,}8 = 0{,}2$. Lalu bagi: $0{,}2 : 0{,}05 = 20 : 5 = 4$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{0{,}2}{0{,}05} = \\frac{20}{5} = 4$$\nHasilnya adalah **4** (Opsi A)."
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
              "text": "3 : 5"
            },
            {
              "key": "B",
              "text": "5 : 3"
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
            {
              "key": "A",
              "text": "2 : 5"
            },
            {
              "key": "B",
              "text": "2 : 3"
            },
            {
              "key": "C",
              "text": "3 : 5"
            },
            {
              "key": "D",
              "text": "1 : 3"
            }
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
            {
              "key": "A",
              "text": "9 tahun"
            },
            {
              "key": "B",
              "text": "10 tahun"
            },
            {
              "key": "C",
              "text": "8 tahun"
            },
            {
              "key": "D",
              "text": "12 tahun"
            }
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
          "hint": "Hitung per 1 bagian: $600 : 4 = 150$ gram. Lalu kalikan untuk gula: $3 \\times 150$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Nilai 1 bagian rasio: $\\frac{600}{4} = 150\\text{ gram}$\n2. Gula pasir yang dibutuhkan: $3 \\times 150 = 450\\text{ gram}$\nGula yang harus ditambahkan adalah **450 gram** (Opsi A)."
        },
        {
          "id": "sd6-b2-5",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Uang tabungan Dimas dan Fajar berjumlah Rp120.000,00. Jika perbandingan uang Dimas dan Fajar adalah 3 : 5, maka selisih uang tabungan mereka berdua adalah...",
          "options": [
            {
              "key": "A",
              "text": "Rp30.000,00"
            },
            {
              "key": "B",
              "text": "Rp45.000,00"
            },
            {
              "key": "C",
              "text": "Rp75.000,00"
            },
            {
              "key": "D",
              "text": "Rp20.000,00"
            }
          ],
          "correctAnswer": "A",
          "hint": "Total bagian $= 3 + 5 = 8$. Nilai per bagian $= 120.000 : 8 = 15.000$. Selisih bagian $= 5 - 3 = 2$ bagian. Kalikan $2 \\times 15.000$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Total bagian: $3 + 5 = 8$ bagian.\n2. Nilai 1 bagian: $\\frac{120.000}{8} = 15.000$.\n3. Selisih rasio: $5 - 3 = 2$ bagian.\n4. Selisih uang: $2 \\times 15.000 = \\text{Rp}30.000,00$.\nSelisih tabungan mereka adalah **Rp30.000,00** (Opsi A)."
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
              "text": "21 butir"
            },
            {
              "key": "B",
              "text": "20 butir"
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
          "correctAnswer": "A",
          "hint": "Nilai 1 bagian rasio $= 35 : 5 = 7$. Kelereng Doni $= 3 \\times 7 = 21$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Kelereng Doni} = \\frac{3}{5} \\times 35 = 21\\text{ butir}$$\nBanyak kelereng Doni adalah **21 butir** (Opsi A)."
        },
        {
          "id": "sd6-b2-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Umur Ayah berbanding umur Dimas adalah 7 : 2. Jika jumlah umur keduanya adalah 45 tahun, berapakah umur Dimas?",
          "options": [
            {
              "key": "A",
              "text": "10 tahun"
            },
            {
              "key": "B",
              "text": "14 tahun"
            },
            {
              "key": "C",
              "text": "8 tahun"
            },
            {
              "key": "D",
              "text": "12 tahun"
            }
          ],
          "correctAnswer": "A",
          "hint": "Jumlah bagian rasio $= 7 + 2 = 9$. Umur Dimas $= \\frac{2}{9} \\times 45 = 10$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Umur Dimas} = \\frac{2}{7 + 2} \\times 45 = \\frac{2}{9} \\times 45 = 10\\text{ tahun}$$\nUmur Dimas adalah **10 tahun** (Opsi A)."
        },
        {
          "id": "sd6-b2-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Perbandingan uang saku Riko dan Andi adalah 4 : 7. Jika selisih uang saku mereka adalah Rp15.000,00, berapakah uang saku Riko?",
          "options": [
            {
              "key": "A",
              "text": "Rp20.000,00"
            },
            {
              "key": "B",
              "text": "Rp25.000,00"
            },
            {
              "key": "C",
              "text": "Rp35.000,00"
            },
            {
              "key": "D",
              "text": "Rp18.000,00"
            }
          ],
          "correctAnswer": "A",
          "hint": "Selisih bagian rasio $= 7 - 4 = 3$. Nilai 1 bagian $= 15.000 : 3 = 5.000$. Uang Riko $= 4 \\times 5.000$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Uang Riko} = \\frac{4}{7 - 4} \\times 15.000 = \\frac{4}{3} \\times 15.000 = 20.000$$\nUang saku Riko adalah **Rp20.000,00** (Opsi A)."
        },
        {
          "id": "sd6-b2-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah mobil membutuhkan 3 liter bensin untuk menempuh jarak 45 km. Berapa liter bensin yang dibutuhkan untuk menempuh jarak 120 km?",
          "options": [
            {
              "key": "A",
              "text": "8 liter"
            },
            {
              "key": "B",
              "text": "9 liter"
            },
            {
              "key": "C",
              "text": "10 liter"
            },
            {
              "key": "D",
              "text": "7 liter"
            }
          ],
          "correctAnswer": "A",
          "hint": "Rasio bensin : jarak $= 3 : 45 = 1 : 15$ km/liter. Untuk 120 km $= 120 : 15 = 8$ liter.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Bensin} = \\frac{120}{15} = 8\\text{ liter}$$\nDibutuhkan **8 liter bensin** (Opsi A)."
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
              "text": "15 cm"
            },
            {
              "key": "B",
              "text": "1,5 cm"
            },
            {
              "key": "C",
              "text": "150 cm"
            },
            {
              "key": "D",
              "text": "0,15 cm"
            }
          ],
          "correctAnswer": "A",
          "hint": "Ubah meter ke cm ($150\\text{ m} = 15.000\\text{ cm}$), lalu bagi skala: $15.000 : 1.000 = 15$ cm.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Jarak denah} = \\frac{15.000}{1.000} = 15\\text{ cm}$$\nJarak pada denah adalah **15 cm** (Opsi A)."
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
              "text": "40 potong"
            },
            {
              "key": "B",
              "text": "36 potong"
            },
            {
              "key": "C",
              "text": "45 potong"
            },
            {
              "key": "D",
              "text": "30 potong"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kecepatan penjahit $= 12 : 3 = 4$ kemeja/hari. Dalam 10 hari $= 10 \\times 4 = 40$ kemeja.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Kemeja} = 4 \\times 10 = 40\\text{ potong}$$\nDapat diselesaikan **40 potong kemeja** (Opsi A)."
        },
        {
          "id": "sd6-b2-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Perbandingan siswa laki-laki dan perempuan di kelas 6 adalah 3 : 4. Jika jumlah siswa perempuan adalah 20 orang, berapa jumlah seluruh siswa di kelas tersebut?",
          "options": [
            {
              "key": "A",
              "text": "35 orang"
            },
            {
              "key": "B",
              "text": "32 orang"
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
          "correctAnswer": "A",
          "hint": "Laki-laki $= \\frac{3}{4} \\times 20 = 15$. Total siswa $= 15 + 20 = 35$ orang.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Siswa laki-laki: $\\frac{3}{4} \\times 20 = 15$ orang\n2. Total siswa: $15 + 20 = 35$ orang (Opsi A)."
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
              "text": "3 orang"
            },
            {
              "key": "B",
              "text": "4 orang"
            },
            {
              "key": "C",
              "text": "2 orang"
            },
            {
              "key": "D",
              "text": "5 orang"
            }
          ],
          "correctAnswer": "A",
          "hint": "Perbandingan berbalik nilai: $6 \\times 15 = P \\times 10 \\implies P = 90 : 10 = 9$ orang. Tambahan $= 9 - 6 = 3$ orang.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Pekerja total yang dibutuhkan: $\\frac{6 \\times 15}{10} = 9$ orang\n2. Pekerja tambahan: $9 - 6 = 3$ orang (Opsi A)."
        },
        {
          "id": "sd6-b2-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah kolam renang memiliki denah berukuran $8\\text{ cm} \\times 5\\text{ cm}$ pada skala 1 : 250. Luas sebenarnya dari kolam renang tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "250 m²"
            },
            {
              "key": "B",
              "text": "200 m²"
            },
            {
              "key": "C",
              "text": "300 m²"
            },
            {
              "key": "D",
              "text": "400 m²"
            }
          ],
          "correctAnswer": "A",
          "hint": "Panjang asli $= 8 \\times 250 = 2.000\\text{ cm} = 20\\text{ m}$. Lebar asli $= 5 \\times 250 = 1.250\\text{ cm} = 12{,}5\\text{ m}$. Luas $= 20 \\times 12{,}5 = 250\\text{ m}^2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $p = 8 \\times 250\\text{ cm} = 20\\text{ m}$\n2. $l = 5 \\times 250\\text{ cm} = 12{,}5\\text{ m}$\n3. Luas $= 20 \\times 12{,}5 = 250\\text{ m}^2$ (Opsi A)."
        },
        {
          "id": "sd6-b2-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dua tahun lalu perbandingan umur Kakak dan Adik adalah 3 : 2. Jika umur Adik saat ini adalah 10 tahun, berapa tahun umur Kakak saat ini?",
          "options": [
            {
              "key": "A",
              "text": "14 tahun"
            },
            {
              "key": "B",
              "text": "12 tahun"
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
          "correctAnswer": "A",
          "hint": "Dua tahun lalu: umur Adik $= 10 - 2 = 8$ tahun. Umur Kakak $= \\frac{3}{2} \\times 8 = 12$ tahun. Saat ini umur Kakak $= 12 + 2 = 14$ tahun.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Umur Adik 2 tahun lalu: $10 - 2 = 8$ tahun\n2. Umur Kakak 2 tahun lalu: $\\frac{3}{2} \\times 8 = 12$ tahun\n3. Umur Kakak sekarang: $12 + 2 = 14$ tahun (Opsi A)."
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
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$V = 8 \\times 8 \\times 8 = 64 \\times 8 = 512\\text{ cm}^3$$\nVolume kubus adalah **$512\\text{ cm}^3$** (Opsi A)."
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
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$V = 12 \\times 5 \\times 4 = 60 \\times 4 = 240\\text{ cm}^3$$\nVolume balok adalah **$240\\text{ cm}^3$** (Opsi A)."
        },
        {
          "id": "sd6-b3-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Luas permukaan sebuah kubus yang memiliki panjang rusuk 5 cm adalah...",
          "options": [
            {
              "key": "A",
              "text": "$150\\text{ cm}^2$"
            },
            {
              "key": "B",
              "text": "$125\\text{ cm}^2$"
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
            {
              "key": "A",
              "text": "120 liter"
            },
            {
              "key": "B",
              "text": "240 liter"
            },
            {
              "key": "C",
              "text": "100 liter"
            },
            {
              "key": "D",
              "text": "150 liter"
            }
          ],
          "correctAnswer": "A",
          "hint": "Hitung volume total balok: $80 \\times 60 \\times 50 = 240.000\\text{ cm}^3 = 240\\text{ liter}$. Karena sudah terisi setengah, sisa yang perlu ditambahkan adalah setengahnya.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Volume total bak mandi:\n$$V = 80 \\times 60 \\times 50 = 240.000\\text{ cm}^3 = 240\\text{ liter}$$\n2. Air yang perlu ditambahkan adalah setengah bagian:\n$$\\text{Air tambahan} = \\frac{1}{2} \\times 240 = 120\\text{ liter}$$\nVolume air yang perlu ditambahkan adalah **120 liter** (Opsi A)."
        },
        {
          "id": "sd6-b3-5",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Banyaknya titik sudut pada sebuah balok adalah...",
          "options": [
            {
              "key": "A",
              "text": "8"
            },
            {
              "key": "B",
              "text": "6"
            },
            {
              "key": "C",
              "text": "12"
            },
            {
              "key": "D",
              "text": "4"
            }
          ],
          "correctAnswer": "A",
          "hint": "Balok memiliki 6 sisi, 12 rusuk, dan 8 titik sudut.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nBanyak titik sudut balok adalah **8** (Opsi A)."
        },
        {
          "id": "sd6-b3-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Panjang seluruh rusuk sebuah kubus adalah 96 cm. Panjang satu rusuk kubus tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "8 cm"
            },
            {
              "key": "B",
              "text": "6 cm"
            },
            {
              "key": "C",
              "text": "12 cm"
            },
            {
              "key": "D",
              "text": "16 cm"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kubus memiliki 12 rusuk sama panjang: $s = 96 : 12 = 8$ cm.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$s = 96 : 12 = 8\\text{ cm}$$\nPanjang rusuknya adalah **8 cm** (Opsi A)."
        },
        {
          "id": "sd6-b3-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah balok memiliki ukuran panjang 10 cm, lebar 6 cm, dan tinggi 4 cm. Jumlah panjang seluruh rusuk balok tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "80 cm"
            },
            {
              "key": "B",
              "text": "40 cm"
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
          "correctAnswer": "A",
          "hint": "Total panjang rusuk balok $= 4 \\times (p + l + t) = 4 \\times (10 + 6 + 4) = 4 \\times 20 = 80$ cm.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$R = 4 \\times (10 + 6 + 4) = 4 \\times 20 = 80\\text{ cm}$$\nPanjang seluruh rusuk adalah **80 cm** (Opsi A)."
        },
        {
          "id": "sd6-b3-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Luas permukaan kubus yang memiliki panjang rusuk 5 cm adalah...",
          "options": [
            {
              "key": "A",
              "text": "150 cm²"
            },
            {
              "key": "B",
              "text": "125 cm²"
            },
            {
              "key": "C",
              "text": "100 cm²"
            },
            {
              "key": "D",
              "text": "175 cm²"
            }
          ],
          "correctAnswer": "A",
          "hint": "Luas permukaan kubus $= 6 \\times s^2 = 6 \\times 5^2 = 6 \\times 25 = 150$ cm².",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$L = 6 \\times 5^2 = 6 \\times 25 = 150\\text{ cm}^2$$\nLuas permukaannya adalah **150 cm²** (Opsi A)."
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
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$L = 2 \\times (8\\times 5 + 8\\times 3 + 5\\times 3) = 2 \\times 79 = 158\\text{ cm}^2$$\nLuas permukaannya adalah **158 cm²** (Opsi A)."
        },
        {
          "id": "sd6-b3-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Volume sebuah kubus adalah 512 cm³. Luas salah satu bidang sisi kubus tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "64 cm²"
            },
            {
              "key": "B",
              "text": "36 cm²"
            },
            {
              "key": "C",
              "text": "81 cm²"
            },
            {
              "key": "D",
              "text": "49 cm²"
            }
          ],
          "correctAnswer": "A",
          "hint": "Rusuk $s = \\sqrt[3]{512} = 8$ cm. Luas 1 sisi $= 8 \\times 8 = 64$ cm².",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $s = \\sqrt[3]{512} = 8\\text{ cm}$\n2. Luas sisi $= 8^2 = 64\\text{ cm}^2$ (Opsi A)."
        },
        {
          "id": "sd6-b3-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah kardus berbentuk balok berukuran $40\\text{ cm} \\times 30\\text{ cm} \\times 20\\text{ cm}$ akan dimasukkan kotak mainan kubus bersisi 10 cm. Berapa banyak kotak mainan yang dapat masuk ke dalam kardus?",
          "options": [
            {
              "key": "A",
              "text": "24 kotak"
            },
            {
              "key": "B",
              "text": "20 kotak"
            },
            {
              "key": "C",
              "text": "18 kotak"
            },
            {
              "key": "D",
              "text": "30 kotak"
            }
          ],
          "correctAnswer": "A",
          "hint": "Hitung kapasitas tiap dimensi: $(40 : 10) \\times (30 : 10) \\times (20 : 10) = 4 \\times 3 \\times 2 = 24$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Banyak kotak} = \\frac{40 \\times 30 \\times 20}{10 \\times 10 \\times 10} = 4 \\times 3 \\times 2 = 24\\text{ kotak}$$\nDapat memuat **24 kotak mainan** (Opsi A)."
        },
        {
          "id": "sd6-b3-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah bak penampungan air berbentuk kubus memiliki panjang sisi dalam 1 meter. Jika bak tersebut sudah terisi air 650 liter, berapa liter air lagi yang harus ditambahkan agar bak terisi penuh?",
          "options": [
            {
              "key": "A",
              "text": "350 liter"
            },
            {
              "key": "B",
              "text": "450 liter"
            },
            {
              "key": "C",
              "text": "250 liter"
            },
            {
              "key": "D",
              "text": "300 liter"
            }
          ],
          "correctAnswer": "A",
          "hint": "Volume penuh $= 1\\text{ m}^3 = 1.000$ liter. Kekurangan $= 1.000 - 650 = 350$ liter.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$1.000 - 650 = 350\\text{ liter}$$\nHarus ditambahkan **350 liter air** (Opsi A)."
        },
        {
          "id": "sd6-b3-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Kawat sepanjang 2 meter akan digunakan untuk membuat kerangka balok berukuran $20\\text{ cm} \\times 15\\text{ cm} \\times 10\\text{ cm}$. Sisa kawat yang tidak terpakai adalah...",
          "options": [
            {
              "key": "A",
              "text": "20 cm"
            },
            {
              "key": "B",
              "text": "30 cm"
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
          "correctAnswer": "A",
          "hint": "Panjang kawat kerangka $= 4 \\times (20 + 15 + 10) = 4 \\times 45 = 180$ cm. Sisa $= 200 - 180 = 20$ cm.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Kebutuhan kawat: $4 \\times (20 + 15 + 10) = 180\\text{ cm}$\n2. Sisa kawat: $200 - 180 = 20\\text{ cm}$ (Opsi A)."
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
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$L = 2 \\times (150 + 120 + 80) = 700\\text{ cm}^2$$\nLuas minimal kertas kado adalah **700 cm²** (Opsi A)."
        },
        {
          "id": "sd6-b3-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Perbandingan panjang rusuk dua buah kubus adalah 2 : 3. Jika volume kubus pertama adalah 64 cm³, berapakah volume kubus kedua?",
          "options": [
            {
              "key": "A",
              "text": "216 cm³"
            },
            {
              "key": "B",
              "text": "144 cm³"
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
          "correctAnswer": "A",
          "hint": "Rusuk kubus 1 $= \\sqrt[3]{64} = 4$ cm. Rusuk kubus 2 $= \\frac{3}{2} \\times 4 = 6$ cm. Volume kubus 2 $= 6^3 = 216$ cm³.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $s_1 = \\sqrt[3]{64} = 4\\text{ cm}$\n2. $s_2 = \\frac{3}{2} \\times 4 = 6\\text{ cm}$\n3. $V_2 = 6^3 = 216\\text{ cm}^3$ (Opsi A)."
        },
        {
          "id": "sd6-b3-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah balok memiliki perbandingan panjang : lebar : tinggi = 4 : 3 : 2. Jika volume balok tersebut adalah 192 cm³, maka panjang balok tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "8 cm"
            },
            {
              "key": "B",
              "text": "6 cm"
            },
            {
              "key": "C",
              "text": "4 cm"
            },
            {
              "key": "D",
              "text": "10 cm"
            }
          ],
          "correctAnswer": "A",
          "hint": "Misalkan $p = 4x, l = 3x, t = 2x$. Volume $= 24x^3 = 192 \\implies x^3 = 8 \\implies x = 2$. Panjang $= 4 \\times 2 = 8$ cm.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $4x \\times 3x \\times 2x = 24x^3 = 192$\n2. $x^3 = 8 \\implies x = 2$\n3. $p = 4 \\times 2 = 8\\text{ cm}$ (Opsi A)."
        },
        {
          "id": "sd6-b3-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah kolam renang berukuran panjang 20 m, lebar 10 m, dan kedalaman 1,5 m. Dinding bagian dalam dan lantai kolam akan dipasangi keramik. Luas permukaan yang dipasangi keramik adalah...",
          "options": [
            {
              "key": "A",
              "text": "290 m²"
            },
            {
              "key": "B",
              "text": "380 m²"
            },
            {
              "key": "C",
              "text": "300 m²"
            },
            {
              "key": "D",
              "text": "260 m²"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kolam tanpa tutup: Luas $= pl + 2pt + 2lt = (20 \\times 10) + 2(20 \\times 1{,}5) + 2(10 \\times 1{,}5) = 200 + 60 + 30 = 290$ m².",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Lantai: $20 \\times 10 = 200\\text{ m}^2$\n2. Dinding panjang: $2 \\times (20 \\times 1{,}5) = 60\\text{ m}^2$\n3. Dinding lebar: $2 \\times (10 \\times 1{,}5) = 30\\text{ m}^2$\nTotal luas $= 290\\text{ m}^2$ (Opsi A)."
        },
        {
          "id": "sd6-b3-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah kubus kayu padat berukuran rusuk 6 cm dicat merah seluruh permukaannya, kemudian dipotong-potong menjadi kubus-kubus kecil bersisi 1 cm. Berapa banyak kubus kecil yang memiliki tepat 2 sisi bercat merah?",
          "options": [
            {
              "key": "A",
              "text": "48 kubus"
            },
            {
              "key": "B",
              "text": "36 kubus"
            },
            {
              "key": "C",
              "text": "24 kubus"
            },
            {
              "key": "D",
              "text": "54 kubus"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kubus dengan 2 sisi merah berada di rusuk tanpa sudut: $12 \\times (s - 2) = 12 \\times (6 - 2) = 12 \\times 4 = 48$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Banyak kubus} = 12 \\times (n - 2) = 12 \\times (6 - 2) = 48\\text{ kubus}$$\nAda **48 kubus kecil** (Opsi A)."
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
              "text": "12.000 cm³"
            },
            {
              "key": "B",
              "text": "10.000 cm³"
            },
            {
              "key": "C",
              "text": "15.000 cm³"
            },
            {
              "key": "D",
              "text": "8.000 cm³"
            }
          ],
          "correctAnswer": "A",
          "hint": "Volume batu = Luas alas $\\times$ kenaikan tinggi air $= 80 \\times 50 \\times (33 - 30) = 4.000 \\times 3 = 12.000$ cm³.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$V = 80 \\times 50 \\times 3 = 12.000\\text{ cm}^3$$\nVolume batu adalah **12.000 cm³** (Opsi A)."
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
          {
            "label": "Peluang Suatu Kejadian",
            "formula": "P(A) = \\frac{n(A)}{n(S)}"
          },
          {
            "label": "Rentang Nilai Peluang",
            "formula": "0 \\le P(A) \\le 1"
          }
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
            {
              "key": "A",
              "text": "$\\frac{1}{2}$"
            },
            {
              "key": "B",
              "text": "$\\frac{1}{3}$"
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
          "hint": "Koin memiliki 2 sisi (Angka dan Gambar). Peluang sisi Gambar adalah 1 dari 2.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{1}{2}$$\nPeluang muncul sisi Gambar adalah **$\\frac{1}{2}$** (Opsi A)."
        },
        {
          "id": "sd6-b4-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Pernyataan berikut yang merupakan contoh peristiwa yang pasti terjadi adalah...",
          "options": [
            {
              "key": "A",
              "text": "Matahari terbit dari sebelah timur"
            },
            {
              "key": "B",
              "text": "Hari ini akan turun hujan lebat"
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
            {
              "key": "A",
              "text": "$\\frac{1}{3}$"
            },
            {
              "key": "B",
              "text": "$\\frac{1}{2}$"
            },
            {
              "key": "C",
              "text": "$\\frac{1}{6}$"
            },
            {
              "key": "D",
              "text": "$\\frac{2}{3}$"
            }
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
            {
              "key": "A",
              "text": "$\\frac{3}{5}$"
            },
            {
              "key": "B",
              "text": "$\\frac{2}{5}$"
            },
            {
              "key": "C",
              "text": "$\\frac{1}{3}$"
            },
            {
              "key": "D",
              "text": "$\\frac{4}{15}$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Bukan biru artinya merah atau hijau: $4 + 5 = 9$ bola. Total seluruh bola: $4 + 6 + 5 = 15$. Sederhanakan $\\frac{9}{15}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Bola bukan biru (merah + hijau): $4 + 5 = 9$ bola.\n2. Total seluruh bola: $4 + 6 + 5 = 15$ bola.\n3. Peluang:\n$$P = \\frac{9}{15} = \\frac{9 : 3}{15 : 3} = \\frac{3}{5}$$\nPeluang terambil bola bukan biru adalah **$\\frac{3}{5}$** (Opsi A)."
        },
        {
          "id": "sd6-b4-5",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Sebuah uang logam dilempar satu kali. Peluang munculnya sisi gambar adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{1}{2}"
            },
            {
              "key": "B",
              "text": "\\frac{1}{4}"
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
          "hint": "Titik sampel uang logam ada 2 (Angka dan Gambar). Peluang Gambar $= \\frac{1}{2}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P(\\text{Gambar}) = \\frac{1}{2}$$\nPeluangnya adalah **$\\frac{1}{2}$** (Opsi A)."
        },
        {
          "id": "sd6-b4-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah dadu bersisi 6 dilempar satu kali. Peluang munculnya mata dadu ganjil adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{1}{2}"
            },
            {
              "key": "B",
              "text": "\\frac{1}{3}"
            },
            {
              "key": "C",
              "text": "\\frac{2}{3}"
            },
            {
              "key": "D",
              "text": "\\frac{1}{6}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Mata dadu ganjil: 1, 3, 5 (ada 3). Ruang sampel $= 6$. Peluang $= \\frac{3}{6} = \\frac{1}{2}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{3}{6} = \\frac{1}{2}$$\nPeluangnya adalah **$\\frac{1}{2}$** (Opsi A)."
        },
        {
          "id": "sd6-b4-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dalam sebuah kotak terdapat 4 bola merah, 5 bola biru, dan 3 bola hijau. Jika diambil satu bola secara acak, peluang terambilnya bola biru adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{5}{12}"
            },
            {
              "key": "B",
              "text": "\\frac{1}{3}"
            },
            {
              "key": "C",
              "text": "\\frac{1}{4}"
            },
            {
              "key": "D",
              "text": "\\frac{5}{7}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Total bola $= 4 + 5 + 3 = 12$. Bola biru $= 5$. Peluang $= \\frac{5}{12}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{5}{12}$$\nPeluangnya adalah **$\\frac{5}{12}$** (Opsi A)."
        },
        {
          "id": "sd6-b4-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Peluang terjadinya suatu peristiwa yang pasti terjadi memiliki nilai sebesar...",
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
              "text": "0,5"
            },
            {
              "key": "D",
              "text": "100"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kepastian dalam teori peluang memiliki nilai probabilitas 1.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nPeluang kepastian adalah **1** (Opsi A)."
        },
        {
          "id": "sd6-b4-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Pada pelemparan sebuah dadu, peluang muncul mata dadu lebih dari 4 adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{1}{3}"
            },
            {
              "key": "B",
              "text": "\\frac{1}{2}"
            },
            {
              "key": "C",
              "text": "\\frac{2}{3}"
            },
            {
              "key": "D",
              "text": "\\frac{1}{6}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Mata dadu > 4 adalah 5 dan 6 (2 angka). Peluang $= \\frac{2}{6} = \\frac{1}{3}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{2}{6} = \\frac{1}{3}$$\nPeluangnya adalah **$\\frac{1}{3}$** (Opsi A)."
        },
        {
          "id": "sd6-b4-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dalam sebuah kantong terdapat 20 kelereng bernomor 1 sampai 20. Jika diambil satu kelereng secara acak, peluang terambil kelereng bernomor kelipatan 5 adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{1}{5}"
            },
            {
              "key": "B",
              "text": "\\frac{1}{4}"
            },
            {
              "key": "C",
              "text": "\\frac{1}{10}"
            },
            {
              "key": "D",
              "text": "\\frac{2}{5}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Nomor kelipatan 5: 5, 10, 15, 20 (ada 4 kelereng). Peluang $= \\frac{4}{20} = \\frac{1}{5}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{4}{20} = \\frac{1}{5}$$\nPeluangnya adalah **$\\frac{1}{5}$** (Opsi A)."
        },
        {
          "id": "sd6-b4-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah dadu dilempar sebanyak 60 kali. Frekuensi harapan munculnya mata dadu prima (2, 3, 5) adalah...",
          "options": [
            {
              "key": "A",
              "text": "30 kali"
            },
            {
              "key": "B",
              "text": "20 kali"
            },
            {
              "key": "C",
              "text": "15 kali"
            },
            {
              "key": "D",
              "text": "40 kali"
            }
          ],
          "correctAnswer": "A",
          "hint": "Peluang prima $= \\frac{3}{6} = \\frac{1}{2}$. Frekuensi harapan $= 60 \\times \\frac{1}{2} = 30$ kali.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$F_h = 60 \\times \\frac{1}{2} = 30\\text{ kali}$$\nFrekuensi harapannya adalah **30 kali** (Opsi A)."
        },
        {
          "id": "sd6-b4-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dari satu set kartu angka 1 sampai 10, diambil satu kartu secara acak. Peluang terambilnya kartu bilangan bukan genap adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{1}{2}"
            },
            {
              "key": "B",
              "text": "\\frac{2}{5}"
            },
            {
              "key": "C",
              "text": "\\frac{3}{5}"
            },
            {
              "key": "D",
              "text": "\\frac{1}{10}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Bukan genap artinya ganjil: 1, 3, 5, 7, 9 (5 kartu). Peluang $= \\frac{5}{10} = \\frac{1}{2}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{5}{10} = \\frac{1}{2}$$\nPeluangnya adalah **$\\frac{1}{2}$** (Opsi A)."
        },
        {
          "id": "sd6-b4-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah roda putar dibagi menjadi 8 juring sama besar: 3 juring merah, 3 juring kuning, dan 2 juring hijau. Peluang jarum penunjuk berhenti di warna hijau adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{1}{4}"
            },
            {
              "key": "B",
              "text": "\\frac{3}{8}"
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
          "hint": "Juring hijau $= 2$ dari total 8. Peluang $= \\frac{2}{8} = \\frac{1}{4}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{2}{8} = \\frac{1}{4}$$\nPeluangnya adalah **$\\frac{1}{4}$** (Opsi A)."
        },
        {
          "id": "sd6-b4-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Peluang hari esok turun hujan adalah 0,35. Peluang hari esok tidak turun hujan adalah...",
          "options": [
            {
              "key": "A",
              "text": "0,65"
            },
            {
              "key": "B",
              "text": "0,75"
            },
            {
              "key": "C",
              "text": "0,55"
            },
            {
              "key": "D",
              "text": "0,45"
            }
          ],
          "correctAnswer": "A",
          "hint": "Peluang komplemen $= 1 - P = 1 - 0{,}35 = 0{,}65$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P(\\text{tidak hujan}) = 1 - 0{,}35 = 0{,}65$$\nPeluangnya adalah **0,65** (Opsi A)."
        },
        {
          "id": "sd6-b4-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dua keping uang logam dilempar bersamaan. Peluang munculnya kedua-duanya sisi gambar (G, G) adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{1}{4}"
            },
            {
              "key": "B",
              "text": "\\frac{1}{2}"
            },
            {
              "key": "C",
              "text": "\\frac{3}{4}"
            },
            {
              "key": "D",
              "text": "\\frac{1}{3}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Ruang sampel 2 koin: (A,A), (A,G), (G,A), (G,G) ada 4 kemungkinan. Peluang (G,G) $= \\frac{1}{4}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{1}{4}$$\nPeluangnya adalah **$\\frac{1}{4}$** (Opsi A)."
        },
        {
          "id": "sd6-b4-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dalam sebuah kotak terdapat 6 kelereng merah dan sejumlah kelereng putih. Jika peluang terambilnya kelereng merah adalah $\\frac{2}{5}$, berapakah jumlah seluruh kelereng di dalam kotak?",
          "options": [
            {
              "key": "A",
              "text": "15 kelereng"
            },
            {
              "key": "B",
              "text": "12 kelereng"
            },
            {
              "key": "C",
              "text": "18 kelereng"
            },
            {
              "key": "D",
              "text": "20 kelereng"
            }
          ],
          "correctAnswer": "A",
          "hint": "$\\frac{6}{\\text{Total}} = \\frac{2}{5} \\implies \\text{Total} = \\frac{6 \\times 5}{2} = 15$ kelereng.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Total} = \\frac{6 \\times 5}{2} = 15\\text{ kelereng}$$\nJumlah seluruh kelereng adalah **15 butir** (Opsi A)."
        },
        {
          "id": "sd6-b4-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dua buah dadu dilempar bersamaan satu kali. Peluang munculnya jumlah kedua mata dadu sama dengan 7 adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{6}{36} = \\frac{1}{6}"
            },
            {
              "key": "B",
              "text": "\\frac{5}{36}"
            },
            {
              "key": "C",
              "text": "\\frac{7}{36}"
            },
            {
              "key": "D",
              "text": "\\frac{1}{12}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Pasangan berjumlah 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) ada 6 pasangan. Total $= 36$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{6}{36} = \\frac{1}{6}$$\nPeluangnya adalah **$\\frac{1}{6}$** (Opsi A)."
        },
        {
          "id": "sd6-b4-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah kantong berisi 5 permen rasa jeruk, 8 permen rasa mangga, dan 7 permen rasa stroberi. Jika diambil 2 permen satu per satu tanpa pengembalian, peluang terambil permen pertama jeruk dan kedua jeruk adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{1}{19}"
            },
            {
              "key": "B",
              "text": "\\frac{1}{16}"
            },
            {
              "key": "C",
              "text": "\\frac{5}{38}"
            },
            {
              "key": "D",
              "text": "\\frac{1}{20}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Peluang pertama $= \\frac{5}{20} = \\frac{1}{4}$. Peluang kedua $= \\frac{4}{19}$. Peluang bersama $= \\frac{5}{20} \\times \\frac{4}{19} = \\frac{1}{19}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{5}{20} \\times \\frac{4}{19} = \\frac{1}{4} \\times \\frac{4}{19} = \\frac{1}{19}$$\nPeluangnya adalah **$\\frac{1}{19}$** (Opsi A)."
        },
        {
          "id": "sd6-b4-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Tiga keping uang logam dilempar bersamaan. Peluang munculnya minimal 2 sisi angka adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{1}{2}"
            },
            {
              "key": "B",
              "text": "\\frac{3}{8}"
            },
            {
              "key": "C",
              "text": "\\frac{5}{8}"
            },
            {
              "key": "D",
              "text": "\\frac{7}{8}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Ruang sampel 3 koin $= 8$. Kejadian minimal 2 angka: (A,A,G), (A,G,A), (G,A,A), (A,A,A) ada 4 kejadian. Peluang $= \\frac{4}{8} = \\frac{1}{2}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{4}{8} = \\frac{1}{2}$$\nPeluangnya adalah **$\\frac{1}{2}$** (Opsi A)."
        },
        {
          "id": "sd6-b4-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Hasil survei 50 siswa: 30 gemar renang, 25 gemar bulu tangkis, dan 10 gemar keduanya. Jika dipilih satu siswa secara acak, peluang terpilih siswa yang tidak gemar renang maupun bulu tangkis adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{1}{10}"
            },
            {
              "key": "B",
              "text": "\\frac{1}{5}"
            },
            {
              "key": "C",
              "text": "\\frac{3}{25}"
            },
            {
              "key": "D",
              "text": "\\frac{1}{25}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gemar renang saja $= 20$, bulu tangkis saja $= 15$, keduanya $= 10$. Total gemar $= 45$. Tidak gemar $= 5$. Peluang $= \\frac{5}{50} = \\frac{1}{10}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Jumlah gemar setidaknya satu olahraga: $30 + 25 - 10 = 45$\n2. Tidak gemar keduanya: $50 - 45 = 5$\n3. Peluang: $\\frac{5}{50} = \\frac{1}{10}$ (Opsi A)."
        }
      ]
    }
  ]
};
