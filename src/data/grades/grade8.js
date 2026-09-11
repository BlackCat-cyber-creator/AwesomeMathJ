/**
 * Data Kurikulum Kelas 8 SMP (Fase D)
 * 6 Bab Wajib Resmi Sesuai Buku Siswa Matematika
 */

export const grade8Data = {
  "grade": 8,
  "level": "SMP",
  "phase": "Fase D",
  "description": "Bilangan Berpangkat, Teorema Pythagoras, Persamaan & Pertidaksamaan Linear Satu Variabel, Relasi & Fungsi, Persamaan Garis Lurus, serta Statistika",
  "chapters": [
    {
      "id": "smp8-bab1-bilangan-berpangkat",
      "title": "Bab 1: Bilangan Berpangkat",
      "summary": {
        "overview": "Pernahkah kalian membayangkan seberapa besar jarak dari bumi ke matahari? Jarak rata-ratanya mencapai sekitar 150.000.000.000 meter! Sebaliknya, ukuran virus influenza atau diameter molekul air sangatlah kerdil, hanya sekitar 0,0000000001 meter. Menuliskan angka-angka dengan deretan angka nol yang terlampau panjang tidak hanya memakan ruang, tetapi juga sangat rawan menimbulkan kesalahan pencatatan. Untuk menyederhanakan penulisan bilangan-bilangan ekstrem tersebut, matematikawan menciptakan Bilangan Berpangkat (Eksponen) dan Notasi Ilmiah.\n\nBilangan berpangkat bukan sekadar perkalian berulang yang disingkat. Konsep ini menjadi bahasa baku dalam sains astronomi, teknologi memori semikonduktor (gigabyte, terabyte), hingga perhitungan magnitudo gempa bumi. Operasi perkalian dan pembagian bilangan raksasa dapat diselesaikan secara ringkas hanya dengan menjumlahkan atau mengurangkan pangkat-pangkatnya sesuai dengan sifat-sifat aljabar eksponen.\n\nBab ini membimbing siswa Kelas 8 menguasai sifat-sifat dasar perkalian dan pembagian bilangan berpangkat bulat positif, memahami definisi logis pangkat nol ($a^0 = 1$) dan pangkat bulat negatif ($a^{-n} = \\frac{1}{a^n}$), menyederhanakan bentuk akar kuadrat, serta mahir menuliskan besaran nyata ke dalam bentuk Notasi Ilmiah baku.",
        "coreConcepts": [
          "Definisi Bilangan Berpangkat: Perkalian berulang bilangan yang sama sebanyak $n$ faktor: $a^n = a \\times a \\times \\dots \\times a$. Bilangan $a$ disebut basis (bilangan pokok) dan $n$ disebut eksponen (pangkat).",
          "Sifat Operasi Perpangkatan: Untuk basis yang sama berlaku: $a^m \\times a^n = a^{m+n}$, $\\frac{a^m}{a^n} = a^{m-n}$, $(a^m)^n = a^{mn}$, dan $(a \\times b)^n = a^n \\times b^n$.",
          "Pangkat Nol dan Negatif: Didefinisikan secara konsisten agar sifat pembagian tetap berlaku: $a^0 = 1$ ($a \\neq 0$) dan $a^{-n} = \\frac{1}{a^n}$.",
          "Bentuk Akar Kuadrat: Operasi kebalikan dari pemangkatan dua: $\\sqrt{a \\times b} = \\sqrt{a} \\times \\sqrt{b}$. Penjumlahan bentuk akar hanya dapat dilakukan jika akarnya sejenis: $p\\sqrt{a} + q\\sqrt{a} = (p + q)\\sqrt{a}$.",
          "Notasi Ilmiah (Bentuk Baku): Penulisan bilangan dalam bentuk $a \\times 10^n$, dengan syarat $1 \\le a < 10$ dan $n$ adalah bilangan bulat."
        ],
        "workedExamples": [
          {
            "title": "Penyederhanaan Operasi Bilangan Berpangkat",
            "problem": "Sederhanakan bentuk perkalian dan pembagian perpangkatan: $\\frac{2^5 \\times 2^3}{2^4 \\times 2^2}$.",
            "solution": "Langkah 1: Sederhanakan bagian pembilang dengan menjumlahkan pangkatnya:\n$$2^5 \\times 2^3 = 2^{5+3} = 2^8$$\n\nLangkah 2: Sederhanakan bagian penyebut dengan menjumlahkan pangkatnya:\n$$2^4 \\times 2^2 = 2^{4+2} = 2^6$$\n\nLangkah 3: Lakukan operasi pembagian dengan mengurangkan pangkat pembilang dengan penyebut:\n$$\\frac{2^8}{2^6} = 2^{8-6} = 2^2 = 4$$\nHasil sederhananya adalah **$2^2 = 4$**."
          },
          {
            "title": "Konversi Bilangan ke Notasi Ilmiah Baku",
            "problem": "Tuliskan bilangan 450.000.000 dan 0,000038 ke dalam bentuk notasi ilmiah baku.",
            "solution": "Langkah 1: Untuk bilangan 450.000.000:\nGeser tanda koma desimal ke kiri sebanyak 8 angka agar berada di antara 4 dan 5 (memenuhi $1 \\le a < 10$):\n$$450.000.000 = 4{,}5 \\times 10^8$$\n\nLangkah 2: Untuk bilangan 0,000038:\nGeser tanda koma desimal ke kanan sebanyak 5 angka agar berada di antara 3 dan 8:\n$$0{,}000038 = 3{,}8 \\times 10^{-5}$$\nBentuk bakunya adalah **$4{,}5 \\times 10^8$** dan **$3{,}8 \\times 10^{-5}$**."
          }
        ],
        "keyFormulas": [
          {
            "label": "Perkalian Berpangkat Basis Sama",
            "formula": "a^m \\times a^n = a^{m+n}"
          },
          {
            "label": "Pembagian Berpangkat Basis Sama",
            "formula": "\\frac{a^m}{a^n} = a^{m-n}"
          },
          {
            "label": "Pangkat Negatif",
            "formula": "a^{-n} = \\frac{1}{a^n}"
          },
          {
            "label": "Notasi Ilmiah",
            "formula": "a \\times 10^n \\quad (1 \\le a < 10)"
          }
        ],
        "misconceptions": [
          "Menjumlahkan pangkat pada perkalian dengan basis berbeda, misalnya $2^3 \\times 3^2 \\neq 6^5$. Sifat penjumlahan pangkat HANYA berlaku jika basisnya sama persis.",
          "Mengira bilangan berpangkat negatif menghasilkan nilai negatif. Tanda minus pada pangkat menyatakan pecahan kebalikan ($a^{-n} = 1/a^n$), bukan bilangan negatif."
        ],
        "tutorTip": "Ingat: 'Pangkat negatif artinya turun jadi penyebut di bawah pecahan!' Misalnya $5^{-2} = \\frac{1}{5^2} = \\frac{1}{25}$."
      },
      "questions": [
        {
          "id": "smp8-b1-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Hasil dari operasi perpangkatan $3^4 \\times 3^2 : 3^3$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "27"
            },
            {
              "key": "B",
              "text": "9"
            },
            {
              "key": "C",
              "text": "81"
            },
            {
              "key": "D",
              "text": "3"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan sifat perpangkatan: jumlahkan pangkat saat dikali dan kurangkan saat dibagi: $3^{4+2-3}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Gabungkan operasi pangkat: $4 + 2 - 3 = 3$\n2. Hitung nilai perpangkatan: $3^3 = 27$\nHasilnya adalah **27** (Opsi A)."
        },
        {
          "id": "smp8-b1-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Bentuk sederhana dari $4^{-3}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\frac{1}{64}$"
            },
            {
              "key": "B",
              "text": "-64"
            },
            {
              "key": "C",
              "text": "-12"
            },
            {
              "key": "D",
              "text": "$\\frac{1}{12}$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan aturan pangkat negatif: $a^{-n} = \\frac{1}{a^n}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$4^{-3} = \\frac{1}{4^3} = \\frac{1}{64}$$\nBentuk sederhananya adalah **$\\frac{1}{64}$** (Opsi A)."
        },
        {
          "id": "smp8-b1-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil dari penjumlahan bentuk akar $\\sqrt{75} + 2\\sqrt{12} - \\sqrt{27}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$6\\sqrt{3}$"
            },
            {
              "key": "B",
              "text": "$5\\sqrt{3}$"
            },
            {
              "key": "C",
              "text": "$7\\sqrt{3}$"
            },
            {
              "key": "D",
              "text": "$4\\sqrt{3}$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Sederhanakan masing-masing bentuk akar: $\\sqrt{75} = 5\\sqrt{3}$, $2\\sqrt{12} = 4\\sqrt{3}$, dan $\\sqrt{27} = 3\\sqrt{3}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Sederhanakan tiap suku:\n- $\\sqrt{75} = \\sqrt{25 \\times 3} = 5\\sqrt{3}$\n- $2\\sqrt{12} = 2\\sqrt{4 \\times 3} = 2(2\\sqrt{3}) = 4\\sqrt{3}$\n- $\\sqrt{27} = \\sqrt{9 \\times 3} = 3\\sqrt{3}$\n2. Gabungkan akar-akar sejenis:\n$$(5 + 4 - 3)\\sqrt{3} = 6\\sqrt{3}$$\nHasilnya adalah **$6\\sqrt{3}$** (Opsi A)."
        },
        {
          "id": "smp8-b1-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Jarak rata-rata bumi ke planet Mars adalah sekitar 225.000.000 km. Bentuk penulisan notasi ilmiah baku dari jarak tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "$2{,}25 \\times 10^8\\text{ km}$"
            },
            {
              "key": "B",
              "text": "$22{,}5 \\times 10^7\\text{ km}$"
            },
            {
              "key": "C",
              "text": "$0{,}225 \\times 10^9\\text{ km}$"
            },
            {
              "key": "D",
              "text": "$2{,}25 \\times 10^6\\text{ km}$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Syarat notasi ilmiah: $1 \\le a < 10$. Geser tanda koma desimal ke kiri sebanyak 8 angka.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Bilangan: 225.000.000\n2. Geser koma desimal 8 langkah ke kiri agar bernilai 2,25 (memenuhi $1 \\le a < 10$):\n$$225.000.000 = 2{,}25 \\times 10^8\\text{ km}$$\nBentuk bakunya adalah **$2{,}25 \\times 10^8\\text{ km}$** (Opsi A)."
        },
        {
          "id": "smp8-b1-5",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Bentuk sederhana dari operasi $(2^3)^4$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "2^{12}"
            },
            {
              "key": "B",
              "text": "2^7"
            },
            {
              "key": "C",
              "text": "2^{64}"
            },
            {
              "key": "D",
              "text": "8^4"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan sifat pemangkatan bilangan berpangkat: $(a^m)^n = a^{m \\times n}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Sesuai sifat eksponen $(a^m)^n = a^{m \\times n}$:\n$$(2^3)^4 = 2^{3 \\times 4} = 2^{12}$$\nHasil sederhananya adalah **$2^{12}$** (Opsi A)."
        },
        {
          "id": "smp8-b1-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Nilai dari $5^{-3}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{1}{125}"
            },
            {
              "key": "B",
              "text": "-\\frac{1}{125}"
            },
            {
              "key": "C",
              "text": "-125"
            },
            {
              "key": "D",
              "text": "\\frac{1}{15}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Ingat definisi pangkat bulat negatif: $a^{-n} = \\frac{1}{a^n}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$5^{-3} = \\frac{1}{5^3} = \\frac{1}{125}$$\nNilainya adalah **$\\frac{1}{125}$** (Opsi A)."
        },
        {
          "id": "smp8-b1-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bentuk sederhana dari $\\frac{a^6 b^4}{a^2 b}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "a^4 b^3"
            },
            {
              "key": "B",
              "text": "a^3 b^4"
            },
            {
              "key": "C",
              "text": "a^8 b^5"
            },
            {
              "key": "D",
              "text": "a^4 b^4"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kurangkan pangkat variabel yang sama: $a^{6-2} b^{4-1}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{a^6 b^4}{a^2 b^1} = a^{6-2} b^{4-1} = a^4 b^3$$\nBentuk sederhananya adalah **$a^4 b^3$** (Opsi A)."
        },
        {
          "id": "smp8-b1-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil penyederhanaan bentuk akar $\\sqrt{72}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "6\\sqrt{2}"
            },
            {
              "key": "B",
              "text": "3\\sqrt{8}"
            },
            {
              "key": "C",
              "text": "2\\sqrt{6}"
            },
            {
              "key": "D",
              "text": "4\\sqrt{3}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Cari faktor kuadrat terbesar dari 72, yaitu $36 \\times 2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\sqrt{72} = \\sqrt{36 \\times 2} = \\sqrt{36} \\times \\sqrt{2} = 6\\sqrt{2}$$\nHasil sederhananya adalah **$6\\sqrt{2}$** (Opsi A)."
        },
        {
          "id": "smp8-b1-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bentuk baku (notasi ilmiah) dari bilangan 0,0000056 adalah...",
          "options": [
            {
              "key": "A",
              "text": "5{,}6 \\times 10^{-6}"
            },
            {
              "key": "B",
              "text": "5{,}6 \\times 10^{-5}"
            },
            {
              "key": "C",
              "text": "56 \\times 10^{-7}"
            },
            {
              "key": "D",
              "text": "0{,}56 \\times 10^{-5}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Geser koma desimal ke kanan sampai berada di antara 5 dan 6 (geser 6 kali).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$0{,}0000056 = 5{,}6 \\times 10^{-6}$$\nBentuk bakunya adalah **$5{,}6 \\times 10^{-6}$** (Opsi A)."
        },
        {
          "id": "smp8-b1-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil dari $2\\sqrt{3} + 5\\sqrt{3} - 4\\sqrt{3}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "3\\sqrt{3}"
            },
            {
              "key": "B",
              "text": "4\\sqrt{3}"
            },
            {
              "key": "C",
              "text": "2\\sqrt{3}"
            },
            {
              "key": "D",
              "text": "7\\sqrt{3}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Jumlahkan dan kurangkan koefisien dari bentuk akar yang sejenis.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$(2 + 5 - 4)\\sqrt{3} = 3\\sqrt{3}$$\nHasilnya adalah **$3\\sqrt{3}$** (Opsi A)."
        },
        {
          "id": "smp8-b1-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Nilai dari operasi perpangkatan $\\frac{4^3 \\times 2^4}{8^2}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "16"
            },
            {
              "key": "B",
              "text": "8"
            },
            {
              "key": "C",
              "text": "32"
            },
            {
              "key": "D",
              "text": "4"
            }
          ],
          "correctAnswer": "A",
          "hint": "Ubah semua basis menjadi bilangan pokok 2: $4 = 2^2$ dan $8 = 2^3$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Pembilang: $4^3 \\times 2^4 = (2^2)^3 \\times 2^4 = 2^6 \\times 2^4 = 2^{10}$\n2. Penyebut: $8^2 = (2^3)^2 = 2^6$\n3. Operasi: $\\frac{2^{10}}{2^6} = 2^{10-6} = 2^4 = 16$ (Opsi A)."
        },
        {
          "id": "smp8-b1-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bentuk rasional dari pecahan $\\frac{6}{\\sqrt{3}}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "2\\sqrt{3}"
            },
            {
              "key": "B",
              "text": "3\\sqrt{2}"
            },
            {
              "key": "C",
              "text": "6\\sqrt{3}"
            },
            {
              "key": "D",
              "text": "3\\sqrt{3}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kalikan pembilang dan penyebut dengan $\\frac{\\sqrt{3}}{\\sqrt{3}}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{6}{\\sqrt{3}} \\times \\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{6\\sqrt{3}}{3} = 2\\sqrt{3}$$\nBentuk rasionalnya adalah **$2\\sqrt{3}$** (Opsi A)."
        },
        {
          "id": "smp8-b1-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jarak bumi ke bulan adalah sekitar $384.000\\text{ km}$. Jika dituliskan dalam satuan meter dan bentuk notasi ilmiah baku, jarak tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "3{,}84 \\times 10^8\\text{ m}"
            },
            {
              "key": "B",
              "text": "3{,}84 \\times 10^5\\text{ m}"
            },
            {
              "key": "C",
              "text": "38{,}4 \\times 10^7\\text{ m}"
            },
            {
              "key": "D",
              "text": "3{,}84 \\times 10^6\\text{ m}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Ubah kilometer ke meter dengan mengalikan $10^3$, lalu nyatakan dalam notasi ilmiah.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $384.000\\text{ km} = 384.000.000\\text{ m}$\n2. Dalam notasi ilmiah: $3{,}84 \\times 10^8\\text{ m}$ (Opsi A)."
        },
        {
          "id": "smp8-b1-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil perkalian bentuk akar $\\sqrt{6} \\times \\sqrt{8}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "4\\sqrt{3}"
            },
            {
              "key": "B",
              "text": "2\\sqrt{12}"
            },
            {
              "key": "C",
              "text": "3\\sqrt{4}"
            },
            {
              "key": "D",
              "text": "4\\sqrt{2}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kalikan isi akar: $\\sqrt{48}$, lalu sederhanakan $48 = 16 \\times 3$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\sqrt{6 \\times 8} = \\sqrt{48} = \\sqrt{16 \\times 3} = 4\\sqrt{3}$$\nHasil sederhananya adalah **$4\\sqrt{3}$** (Opsi A)."
        },
        {
          "id": "smp8-b1-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah bakteri membelah diri menjadi 2 setiap 20 menit. Jika mula-mula ada 15 bakteri, banyak bakteri setelah 2 jam adalah...",
          "options": [
            {
              "key": "A",
              "text": "960"
            },
            {
              "key": "B",
              "text": "480"
            },
            {
              "key": "C",
              "text": "1.920"
            },
            {
              "key": "D",
              "text": "240"
            }
          ],
          "correctAnswer": "A",
          "hint": "2 jam $= 120$ menit. Banyak pembelahan $n = 120 / 20 = 6$. Total $= 15 \\times 2^6$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $n = \\frac{120}{20} = 6$\n2. Banyak bakteri $= 15 \\times 2^6 = 15 \\times 64 = 960$ bakteri (Opsi A)."
        },
        {
          "id": "smp8-b1-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Nilai dari $x$ yang memenuhi persamaan eksponen $3^{2x - 1} = 81$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{5}{2}"
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
              "text": "\\frac{3}{2}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Ubah 81 menjadi basis 3: $81 = 3^4$, lalu samakan eksponennya.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $3^{2x - 1} = 3^4$\n2. $2x - 1 = 4 \\implies 2x = 5 \\implies x = \\frac{5}{2}$ (Opsi A)."
        },
        {
          "id": "smp8-b1-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Bentuk rasional dari pecahan $\\frac{4}{\\sqrt{5} - 1}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\sqrt{5} + 1"
            },
            {
              "key": "B",
              "text": "\\sqrt{5} - 1"
            },
            {
              "key": "C",
              "text": "2(\\sqrt{5} + 1)"
            },
            {
              "key": "D",
              "text": "\\frac{\\sqrt{5} + 1}{2}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kalikan dengan sekawan penyebut yaitu $\\frac{\\sqrt{5} + 1}{\\sqrt{5} + 1}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{4}{\\sqrt{5} - 1} \\times \\frac{\\sqrt{5} + 1}{\\sqrt{5} + 1} = \\frac{4(\\sqrt{5} + 1)}{5 - 1} = \\frac{4(\\sqrt{5} + 1)}{4} = \\sqrt{5} + 1$$ (Opsi A)."
        },
        {
          "id": "smp8-b1-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Hasil dari operasi $\\left(\\frac{2}{3}\\right)^{-2} + \\left(\\frac{1}{2}\\right)^{-3}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{41}{4}"
            },
            {
              "key": "B",
              "text": "10"
            },
            {
              "key": "C",
              "text": "\\frac{35}{4}"
            },
            {
              "key": "D",
              "text": "12"
            }
          ],
          "correctAnswer": "A",
          "hint": "Ingat bahwa $\\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^n$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $\\left(\\frac{2}{3}\\right)^{-2} = \\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4}$\n2. $\\left(\\frac{1}{2}\\right)^{-3} = 2^3 = 8 = \\frac{32}{4}$\n3. $\\frac{9}{4} + \\frac{32}{4} = \\frac{41}{4} = 10{,}25$ (Opsi A)."
        },
        {
          "id": "smp8-b1-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Bentuk sederhana dari $\\sqrt{18} + \\sqrt{50} - \\sqrt{32}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "4\\sqrt{2}"
            },
            {
              "key": "B",
              "text": "3\\sqrt{2}"
            },
            {
              "key": "C",
              "text": "5\\sqrt{2}"
            },
            {
              "key": "D",
              "text": "2\\sqrt{2}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Faktorkan masing-masing bentuk akar dengan bilangan kuadrat sempurna: $18=9\\times 2$, $50=25\\times 2$, $32=16\\times 2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\sqrt{18} + \\sqrt{50} - \\sqrt{32} = 3\\sqrt{2} + 5\\sqrt{2} - 4\\sqrt{2} = (3 + 5 - 4)\\sqrt{2} = 4\\sqrt{2}$$ (Opsi A)."
        },
        {
          "id": "smp8-b1-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah ruangan laboratorium berukuran panjang $4 \\times 10^3\\text{ cm}$, lebar $3 \\times 10^3\\text{ cm}$, dan tinggi $2{,}5 \\times 10^2\\text{ cm}$. Volume udara di dalam ruangan tersebut dalam satuan meter kubik ($\\text{m}^3$) adalah...",
          "options": [
            {
              "key": "A",
              "text": "$300\\text{ m}^3$"
            },
            {
              "key": "B",
              "text": "$30\\text{ m}^3$"
            },
            {
              "key": "C",
              "text": "$3.000\\text{ m}^3$"
            },
            {
              "key": "D",
              "text": "$30.000\\text{ m}^3$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Konversikan ukuran ke meter terlebih dahulu: $1\\text{ m} = 10^2\\text{ cm}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Panjang $= 40\\text{ m}$, Lebar $= 30\\text{ m}$, Tinggi $= 2{,}5\\text{ m}$\n2. Volume $= 40 \\times 30 \\times 2{,}5 = 300\\text{ m}^3$ (Opsi A)."
        }
      ]
    },
    {
      "id": "smp8-bab2-teorema-pythagoras",
      "title": "Bab 2: Teorema Pythagoras",
      "summary": {
        "overview": "Salah satu penemuan matematika paling berpengaruh dan banyak diaplikasikan dalam sejarah peradaban adalah Teori Segitiga Siku-Siku yang dirumuskan oleh filsuf Yunani kuno, Pythagoras. Para tukang bangunan tradisional di zaman Mesir kuno telah memanfaatkan tali berikat 12 simpul dengan perbandingan 3-4-5 untuk memastikan setiap sudut pondasi dinding rumah membentuk sudut siku-siku yang kokoh dan tidak miring.\n\nDalam kehidupan modern, Teorema Pythagoras digunakan di mana-mana: arsitek menghitung panjang kuda-kuda atap rumah, nahkoda kapal memetakan jarak terpendek pelayaran di samudera luas, hingga sistem satelit GPS ponsel pintar yang menghitung jarak garis lurus dari posisi pengguna ke menara pemancar sinyal terdekat. Prinsip kuadrat sisi miring selalu sama dengan jumlah kuadrat dua sisi tegaknya adalah hukum mutlak yang berlaku pada seluruh segitiga siku-siku di bidang datar.\n\nBab ini membimbing siswa Kelas 8 membuktikan Teorema Pythagoras melalui luas daerah persegi, menguasai kelompok bilangan bulat istimewa (Tripel Pythagoras), mengenali perbandingan panjang sisi-sisi pada segitiga siku-siku khusus berkemiringan $45^\\circ$ dan $30^\\circ-60^\\circ$, serta menerapkan teorema ini dalam memecahkan masalah kontekstual kehidupan sehari-hari.",
        "coreConcepts": [
          "Dalil Teorema Pythagoras: Pada setiap segitiga siku-siku, kuadrat panjang sisi miring (hipotenusa, sisi terpanjang di hadapan sudut siku-siku) sama dengan jumlah kuadrat panjang kedua sisi penyikunya: $c^2 = a^2 + b^2$ atau $c = \\sqrt{a^2 + b^2}$.",
          "Kebalikan Teorema Pythagoras (Jenis Segitiga): Jika $c$ adalah sisi terpanjang suatu segitiga:\n- Jika $c^2 = a^2 + b^2$, segitiga tersebut adalah SEGITIGA SIKU-SIKU.\n- Jika $c^2 < a^2 + b^2$, segitiga tersebut adalah SEGITIGA LANCIP.\n- Jika $c^2 > a^2 + b^2$, segitiga tersebut adalah SEGITIGA TUMPUL.",
          "Tripel Pythagoras: Kelompok tiga bilangan asli $(a, b, c)$ yang memenuhi persamaan $a^2 + b^2 = c^2$. Pola dasar yang wajib dihafal: $(3, 4, 5)$, $(5, 12, 13)$, $(7, 24, 25)$, $(8, 15, 17)$, beserta seluruh kelipatannya.",
          "Segitiga Siku-Siku Khusus:\n- Segitiga siku-siku sama kaki ($45^\\circ - 45^\\circ - 90^\\circ$): Perbandingan sisi $1 : 1 : \\sqrt{2}$.\n- Segitiga siku-siku dengan sudut $30^\\circ - 60^\\circ - 90^\\circ$: Perbandingan sisi di depan sudut $30^\\circ$, $60^\\circ$, dan $90^\\circ$ adalah $1 : \\sqrt{3} : 2$."
        ],
        "workedExamples": [
          {
            "title": "Menghitung Panjang Tangga yang Disandarkan ke Dinding",
            "problem": "Sebuah tangga yang panjangnya 5 meter disandarkan pada dinding tegak sebuah rumah. Jika jarak antara kaki tangga di tanah dengan dinding rumah adalah 3 meter, berapa tinggi dinding yang dapat dicapai oleh ujung tangga?",
            "solution": "Langkah 1: Identifikasi posisi sisi pada segitiga siku-siku:\n- Panjang tangga (sisi miring / hipotenusa): $c = 5\\text{ meter}$\n- Jarak kaki tangga ke dinding (sisi alas): $a = 3\\text{ meter}$\n- Tinggi dinding (sisi tegak): $b$\n\nLangkah 2: Terapkan Teorema Pythagoras:\n$$b^2 = c^2 - a^2$$\n$$b^2 = 5^2 - 3^2 = 25 - 9 = 16$$\n\nLangkah 3: Tarik akar kuadrat:\n$$b = \\sqrt{16} = 4\\text{ meter}$$\nJadi, tinggi dinding yang dicapai tangga adalah **4 meter**."
          },
          {
            "title": "Menghitung Jarak Terpendek Pelayaran Kapal",
            "problem": "Sebuah kapal berlayar dari pelabuhan $A$ ke arah timur sejauh 80 km, kemudian berbelok ke arah utara sejauh 60 km menuju pelabuhan $B$. Berapakah jarak terpendek garis lurus dari pelabuhan $A$ ke pelabuhan $B$?",
            "solution": "Langkah 1: Arah timur dan arah utara membentuk sudut siku-siku ($90^\\circ$).\n- Sisi penyiku 1: $a = 80\\text{ km}$\n- Sisi penyiku 2: $b = 60\\text{ km}$\n\nLangkah 2: Hitung hipotenusa jarak langsung $c$:\n$$c = \\sqrt{80^2 + 60^2} = \\sqrt{6.400 + 3.600} = \\sqrt{10.000} = 100\\text{ km}$$\nJarak terpendek kapal dari pelabuhan $A$ ke $B$ adalah **100 km**."
          }
        ],
        "keyFormulas": [
          {
            "label": "Teorema Pythagoras",
            "formula": "c^2 = a^2 + b^2 \\iff c = \\sqrt{a^2 + b^2}"
          },
          {
            "label": "Mencari Sisi Tegak",
            "formula": "a = \\sqrt{c^2 - b^2} \\quad \\text{dan} \\quad b = \\sqrt{c^2 - a^2}"
          },
          {
            "label": "Tripel Pythagoras Dasar",
            "formula": "(3, 4, 5), \\; (5, 12, 13), \\; (7, 24, 25), \\; (8, 15, 17)"
          }
        ],
        "misconceptions": [
          "Menjumlahkan kuadrat sisi tanpa memeriksa mana sisi miringnya: $c$ harus selalu merupakan sisi terpanjang di hadapan sudut siku-siku.",
          "Menerapkan rumus Pythagoras pada segitiga sembarang yang tidak memiliki sudut siku-siku."
        ],
        "tutorTip": "Kuasai 4 keluarga Tripel Pythagoras sakti: (3, 4, 5), (5, 12, 13), (7, 24, 25), dan (8, 15, 17) beserta kelipatannya. Soal ujian hampir 90% menggunakan angka-angka ini!"
      },
      "questions": [
        {
          "id": "smp8-b2-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Panjang sisi miring sebuah segitiga siku-siku dengan panjang sisi siku-sikunya 6 cm dan 8 cm adalah...",
          "options": [
            {
              "key": "A",
              "text": "10 cm"
            },
            {
              "key": "B",
              "text": "14 cm"
            },
            {
              "key": "C",
              "text": "12 cm"
            },
            {
              "key": "D",
              "text": "9 cm"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan rumus $c = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$c = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\text{ cm}$$\nPanjang sisi miringnya adalah **10 cm** (Opsi A)."
        },
        {
          "id": "smp8-b2-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Kelompok bilangan berikut yang merupakan tripel Pythagoras adalah...",
          "options": [
            {
              "key": "A",
              "text": "5, 12, 13"
            },
            {
              "key": "B",
              "text": "4, 5, 6"
            },
            {
              "key": "C",
              "text": "6, 8, 12"
            },
            {
              "key": "D",
              "text": "7, 10, 15"
            }
          ],
          "correctAnswer": "A",
          "hint": "Periksa apakah $a^2 + b^2 = c^2$: $5^2 + 12^2 = 25 + 144 = 169 = 13^2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$5^2 + 12^2 = 25 + 144 = 169$$\n$$13^2 = 169$$\nKarena nilainya sama persis, maka **5, 12, 13** adalah tripel Pythagoras (Opsi A)."
        },
        {
          "id": "smp8-b2-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah tiang pemancar setinggi 24 meter berdiri tegak di atas tanah. Dari puncak tiang diikatkan kawat baja penahan ke tanah yang berjarak 7 meter dari pangkal tiang. Panjang kawat baja yang diperlukan adalah...",
          "options": [
            {
              "key": "A",
              "text": "25 meter"
            },
            {
              "key": "B",
              "text": "31 meter"
            },
            {
              "key": "C",
              "text": "26 meter"
            },
            {
              "key": "D",
              "text": "28 meter"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan tripel Pythagoras: $\\sqrt{24^2 + 7^2} = \\sqrt{576 + 49} = \\sqrt{625}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Sisi tegak $t = 24\\text{ m}$, sisi alas $a = 7\\text{ m}$.\n2. Panjang kawat $k$:\n$$k = \\sqrt{24^2 + 7^2} = \\sqrt{576 + 49} = \\sqrt{625} = 25\\text{ meter}$$\nPanjang kawat baja yang diperlukan adalah **25 meter** (Opsi A)."
        },
        {
          "id": "smp8-b2-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Diketahui segitiga $KLM$ memiliki panjang sisi-sisi berturut-turut 9 cm, 12 cm, dan 16 cm. Berdasarkan panjang sisi-sisinya, jenis segitiga $KLM$ tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "Segitiga tumpul"
            },
            {
              "key": "B",
              "text": "Segitiga lancip"
            },
            {
              "key": "C",
              "text": "Segitiga siku-siku"
            },
            {
              "key": "D",
              "text": "Segitiga sama sisi"
            }
          ],
          "correctAnswer": "A",
          "hint": "Bandingkan kuadrat sisi terpanjang $16^2$ dengan jumlah kuadrat dua sisi lainnya: $9^2 + 12^2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Kuadrat sisi terpanjang: $16^2 = 256$.\n2. Jumlah kuadrat dua sisi lainnya: $9^2 + 12^2 = 81 + 144 = 225$.\n3. Bandingkan:\n$$256 > 225 \\implies c^2 > a^2 + b^2$$\nKarena kuadrat sisi terpanjang lebih besar, maka segitiga tersebut adalah **segitiga tumpul** (Opsi A)."
        },
        {
          "id": "smp8-b2-5",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Diketahui sebuah segitiga siku-siku memiliki panjang sisi siku-siku 9 cm dan 12 cm. Panjang sisi miring (hipotenusa) segitiga tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "15 cm"
            },
            {
              "key": "B",
              "text": "13 cm"
            },
            {
              "key": "C",
              "text": "14 cm"
            },
            {
              "key": "D",
              "text": "16 cm"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan rumus Pythagoras: $c = \\sqrt{a^2 + b^2}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$c = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15\\text{ cm}$$\nPanjang hipotenusa adalah **15 cm** (Opsi A)."
        },
        {
          "id": "smp8-b2-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Di antara kelompok tiga bilangan berikut, manakah yang merupakan tripel Pythagoras?",
          "options": [
            {
              "key": "A",
              "text": "7, 24, 25"
            },
            {
              "key": "B",
              "text": "6, 8, 11"
            },
            {
              "key": "C",
              "text": "9, 12, 16"
            },
            {
              "key": "D",
              "text": "8, 15, 18"
            }
          ],
          "correctAnswer": "A",
          "hint": "Ujilah apakah kuadrat bilangan terbesar sama dengan jumlah kuadrat dua bilangan lainnya ($a^2 + b^2 = c^2$).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$7^2 + 24^2 = 49 + 576 = 625 = 25^2$$\nJadi, **7, 24, 25** adalah tripel Pythagoras (Opsi A)."
        },
        {
          "id": "smp8-b2-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah segitiga memiliki sisi-sisi berukuran 8 cm, 15 cm, dan 17 cm. Jenis segitiga tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "Segitiga siku-siku"
            },
            {
              "key": "B",
              "text": "Segitiga lancip"
            },
            {
              "key": "C",
              "text": "Segitiga tumpul"
            },
            {
              "key": "D",
              "text": "Segitiga sama kaki"
            }
          ],
          "correctAnswer": "A",
          "hint": "Bandingkan nilai $c^2$ dengan $a^2 + b^2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$17^2 = 289$$\n$$8^2 + 15^2 = 64 + 225 = 289$$\nKarena $c^2 = a^2 + b^2$, segitiga tersebut adalah **segitiga siku-siku** (Opsi A)."
        },
        {
          "id": "smp8-b2-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah tangga dengan panjang 10 meter disandarkan pada dinding tembok. Jika jarak ujung bawah tangga ke dinding adalah 6 meter, tinggi dinding yang dicapai tangga adalah...",
          "options": [
            {
              "key": "A",
              "text": "8 meter"
            },
            {
              "key": "B",
              "text": "7 meter"
            },
            {
              "key": "C",
              "text": "9 meter"
            },
            {
              "key": "D",
              "text": "8,5 meter"
            }
          ],
          "correctAnswer": "A",
          "hint": "Dinding dan tanah membentuk sudut siku-siku. Tinggi dinding $t = \\sqrt{10^2 - 6^2}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$t = \\sqrt{10^2 - 6^2} = \\sqrt{100 - 36} = \\sqrt{64} = 8\\text{ meter}$$\nTinggi dinding adalah **8 meter** (Opsi A)."
        },
        {
          "id": "smp8-b2-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Pada segitiga siku-siku sama kaki dengan sudut $45^\\circ - 45^\\circ - 90^\\circ$, jika panjang sisi siku-sikunya 6 cm, maka panjang sisi miringnya adalah...",
          "options": [
            {
              "key": "A",
              "text": "6\\sqrt{2} cm"
            },
            {
              "key": "B",
              "text": "12 cm"
            },
            {
              "key": "C",
              "text": "6\\sqrt{3} cm"
            },
            {
              "key": "D",
              "text": "8 cm"
            }
          ],
          "correctAnswer": "A",
          "hint": "Perbandingan sisi pada segitiga siku-siku sama kaki adalah $1 : 1 : \\sqrt{2}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nPanjang hipotenusa $= 6 \\times \\sqrt{2} = 6\\sqrt{2}\\text{ cm}$ (Opsi A)."
        },
        {
          "id": "smp8-b2-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Pada segitiga siku-siku dengan sudut $30^\\circ - 60^\\circ - 90^\\circ$, jika panjang sisi di depan sudut $30^\\circ$ adalah 5 cm, maka panjang hipotenusanya adalah...",
          "options": [
            {
              "key": "A",
              "text": "10 cm"
            },
            {
              "key": "B",
              "text": "5\\sqrt{3} cm"
            },
            {
              "key": "C",
              "text": "15 cm"
            },
            {
              "key": "D",
              "text": "10\\sqrt{3} cm"
            }
          ],
          "correctAnswer": "A",
          "hint": "Perbandingan sisi di depan sudut $30^\\circ : 60^\\circ : 90^\\circ$ adalah $1 : \\sqrt{3} : 2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nHipotenusa $= 2 \\times 5 = 10\\text{ cm}$ (Opsi A)."
        },
        {
          "id": "smp8-b2-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Panjang diagonal suatu persegi panjang yang berukuran $16\\text{ cm} \\times 12\\text{ cm}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "20 cm"
            },
            {
              "key": "B",
              "text": "18 cm"
            },
            {
              "key": "C",
              "text": "24 cm"
            },
            {
              "key": "D",
              "text": "22 cm"
            }
          ],
          "correctAnswer": "A",
          "hint": "Diagonal persegi panjang membagi persegi panjang menjadi dua segitiga siku-siku: $d = \\sqrt{p^2 + l^2}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$d = \\sqrt{16^2 + 12^2} = \\sqrt{256 + 144} = \\sqrt{400} = 20\\text{ cm}$$\nPanjang diagonalnya adalah **20 cm** (Opsi A)."
        },
        {
          "id": "smp8-b2-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah kapal berlayar dari pelabuhan ke arah utara sejauh 24 km, kemudian berbelok ke arah timur sejauh 10 km. Jarak terdekat kapal dari titik awal pelabuhan adalah...",
          "options": [
            {
              "key": "A",
              "text": "26 km"
            },
            {
              "key": "B",
              "text": "28 km"
            },
            {
              "key": "C",
              "text": "34 km"
            },
            {
              "key": "D",
              "text": "25 km"
            }
          ],
          "correctAnswer": "A",
          "hint": "Arah utara dan timur saling tegak lurus ($90^\\circ$). Jarak terdekat adalah hipotenusa: $s = \\sqrt{24^2 + 10^2}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$s = \\sqrt{24^2 + 10^2} = \\sqrt{576 + 100} = \\sqrt{676} = 26\\text{ km}$$\nJarak terdekatnya adalah **26 km** (Opsi A)."
        },
        {
          "id": "smp8-b2-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jarak antara titik $P(2, 3)$ dan titik $Q(6, 6)$ pada bidang koordinat Kartesius adalah...",
          "options": [
            {
              "key": "A",
              "text": "5 satuan"
            },
            {
              "key": "B",
              "text": "6 satuan"
            },
            {
              "key": "C",
              "text": "7 satuan"
            },
            {
              "key": "D",
              "text": "4 satuan"
            }
          ],
          "correctAnswer": "A",
          "hint": "Rumus jarak dua titik: $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$d = \\sqrt{(6 - 2)^2 + (6 - 3)^2} = \\sqrt{4^2 + 3^2} = \\sqrt{16 + 9} = 5$$\nJaraknya adalah **5 satuan** (Opsi A)."
        },
        {
          "id": "smp8-b2-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Panjang diagonal sebuah persegi adalah $10\\text{ cm}$. Luas persegi tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "50 cm^2"
            },
            {
              "key": "B",
              "text": "100 cm^2"
            },
            {
              "key": "C",
              "text": "25 cm^2"
            },
            {
              "key": "D",
              "text": "75 cm^2"
            }
          ],
          "correctAnswer": "A",
          "hint": "Rumus luas persegi dengan diagonal $d$ adalah $L = \\frac{1}{2} d^2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$L = \\frac{1}{2} \\times 10^2 = \\frac{1}{2} \\times 100 = 50\\text{ cm}^2$$\nLuas persegi adalah **$50\\text{ cm}^2$** (Opsi A)."
        },
        {
          "id": "smp8-b2-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah layang-layang terbang dengan panjang tali 25 meter. Jika jarak mendatar anak yang memegang tali ke titik tepat di bawah layang-layang adalah 15 meter, tinggi layang-layang dari tanah (abaikan tinggi anak) adalah...",
          "options": [
            {
              "key": "A",
              "text": "20 meter"
            },
            {
              "key": "B",
              "text": "18 meter"
            },
            {
              "key": "C",
              "text": "22 meter"
            },
            {
              "key": "D",
              "text": "19 meter"
            }
          ],
          "correctAnswer": "A",
          "hint": "Tinggi layang-layang adalah salah satu sisi tegak segitiga siku-siku: $t = \\sqrt{25^2 - 15^2}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$t = \\sqrt{625 - 225} = \\sqrt{400} = 20\\text{ meter}$$\nTinggi layang-layang adalah **20 meter** (Opsi A)."
        },
        {
          "id": "smp8-b2-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah balok berukuran panjang 12 cm, lebar 4 cm, dan tinggi 3 cm. Panjang diagonal ruang balok tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "13 cm"
            },
            {
              "key": "B",
              "text": "15 cm"
            },
            {
              "key": "C",
              "text": "14 cm"
            },
            {
              "key": "D",
              "text": "12\\sqrt{2} cm"
            }
          ],
          "correctAnswer": "A",
          "hint": "Rumus diagonal ruang balok: $d = \\sqrt{p^2 + l^2 + t^2}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$d = \\sqrt{12^2 + 4^2 + 3^2} = \\sqrt{144 + 16 + 9} = \\sqrt{169} = 13\\text{ cm}$$\nPanjang diagonal ruang balok adalah **13 cm** (Opsi A)."
        },
        {
          "id": "smp8-b2-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Keliling sebuah belah ketupat adalah 52 cm. Jika panjang salah satu diagonalnya 24 cm, luas belah ketupat tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "120 cm^2"
            },
            {
              "key": "B",
              "text": "240 cm^2"
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
          "correctAnswer": "A",
          "hint": "Sisi belah ketupat $s = 52 / 4 = 13$ cm. Setengah diagonal pertama $= 12$ cm. Cari setengah diagonal kedua dengan Pythagoras.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Sisi belah ketupat $s = 13\\text{ cm}$\n2. Setengah diagonal $d_2$: $\\sqrt{13^2 - 12^2} = \\sqrt{169 - 144} = 5\\text{ cm} \\implies d_2 = 10\\text{ cm}$\n3. Luas $= \\frac{1}{2} \\times d_1 \\times d_2 = \\frac{1}{2} \\times 24 \\times 10 = 120\\text{ cm}^2$ (Opsi A)."
        },
        {
          "id": "smp8-b2-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Diberikan segitiga dengan panjang sisi masing-masing 9 cm, 12 cm, dan 16 cm. Jenis segitiga tersebut berdasarkan besar sudutnya adalah...",
          "options": [
            {
              "key": "A",
              "text": "Segitiga tumpul"
            },
            {
              "key": "B",
              "text": "Segitiga lancip"
            },
            {
              "key": "C",
              "text": "Segitiga siku-siku"
            },
            {
              "key": "D",
              "text": "Segitiga sembarang lancip"
            }
          ],
          "correctAnswer": "A",
          "hint": "Hitung $c^2$ dan bandingkan dengan $a^2 + b^2$. Jika $c^2 > a^2 + b^2$, segitiga adalah tumpul.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Sisi terpanjang $c = 16 \\implies 16^2 = 256$\n2. $a^2 + b^2 = 9^2 + 12^2 = 81 + 144 = 225$\n3. Karena $256 > 225$ ($c^2 > a^2 + b^2$), segitiga tersebut adalah **segitiga tumpul** (Opsi A)."
        },
        {
          "id": "smp8-b2-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Pada trapesium sama kaki $ABCD$, panjang sisi sejajar $AB = 22\\text{ cm}$ dan $CD = 10\\text{ cm}$. Jika panjang sisi miringnya $10\\text{ cm}$, maka luas trapesium tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "128 cm^2"
            },
            {
              "key": "B",
              "text": "160 cm^2"
            },
            {
              "key": "C",
              "text": "96 cm^2"
            },
            {
              "key": "D",
              "text": "140 cm^2"
            }
          ],
          "correctAnswer": "A",
          "hint": "Cari tinggi trapesium dengan Pythagoras pada salah satu segitiga di sisi samping.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Proyeksi alas: $\\frac{22 - 10}{2} = 6\\text{ cm}$\n2. Tinggi trapesium: $t = \\sqrt{10^2 - 6^2} = 8\\text{ cm}$\n3. Luas $= \\frac{22 + 10}{2} \\times 8 = 16 \\times 8 = 128\\text{ cm}^2$ (Opsi A)."
        },
        {
          "id": "smp8-b2-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dua tiang berdiri tegak di atas tanah datar dengan jarak antartiang 12 meter. Tinggi tiang pertama 14 meter dan tiang kedua 9 meter. Panjang kawat penghubung kedua ujung tiang atas adalah...",
          "options": [
            {
              "key": "A",
              "text": "13 meter"
            },
            {
              "key": "B",
              "text": "15 meter"
            },
            {
              "key": "C",
              "text": "14 meter"
            },
            {
              "key": "D",
              "text": "12,5 meter"
            }
          ],
          "correctAnswer": "A",
          "hint": "Bentuk segitiga siku-siku dengan alas 12 m dan tinggi selisih kedua tiang ($14 - 9 = 5$ m).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$k = \\sqrt{12^2 + (14 - 9)^2} = \\sqrt{144 + 25} = \\sqrt{169} = 13\\text{ meter}$$\nPanjang kawat adalah **13 meter** (Opsi A)."
        }
      ]
    },
    {
      "id": "smp8-bab3-persamaan-pertidaksamaan-linear",
      "title": "Bab 3: Persamaan Linier dan Pertidaksamaan Linier Satu Variabel",
      "summary": {
        "overview": "Pernahkah kalian menaiki lift di sebuah gedung bertingkat dan melihat tulisan peringatan: 'Kapasitas maksimum 8 orang atau tidak melebihi 600 kg'? Mengapa batas tersebut tidak ditulis dengan tanda sama dengan, melainkan tanda batas tidak melebihi? Begitu pula dalam kehidupan sehari-hari, batas kecepatan laju kendaraan di jalan tol minimal 60 km/jam dan maksimal 100 km/jam, atau batas nilai kelulusan ujian matematika yang harus sekurang-kurangnya bernilai 75.\n\nDalam matematika aljabar, kalimat terbuka yang menyatakan hubungan kesamaan disebut Persamaan Linear Satu Variabel (PLSV). Sementara itu, kalimat terbuka yang menyatakan hubungan ketidaksamaan menggunakan tanda $<, \\le, >, \\ge$ disebut Pertidaksamaan Linear Satu Variabel (PtLSV). Keduanya merupakan alat analisis paling dasar untuk memecahkan problem neraca timbangan, pembagian biaya sewa, hingga penentuan syarat kelayakan operasional teknis.\n\nBab ini menuntun siswa memahami konsep kalimat tertutup (pernyataan) dan kalimat terbuka, menemukan penyelesaian PLSV menggunakan sifat kesetaraan (menambah, mengurang, mengali, atau membagi kedua ruas dengan bilangan yang sama), serta memahami sifat unik pembalikan tanda ketidaksamaan pada PtLSV saat kedua ruas dikalikan atau dibagi dengan bilangan negatif.",
        "coreConcepts": [
          "Konsep PLSV: Kalimat terbuka yang dihubungkan tanda sama dengan ($=$) dan hanya memuat satu variabel dengan pangkat tertinggi satu. Bentuk umum: $ax + b = c$ ($a \\neq 0$).",
          "Sifat Kesetaraan Persamaan: Nilai persamaan tidak berubah jika kedua ruas ditambah, dikurangi, dikalikan, atau dibagi dengan bilangan yang sama (bukan nol).",
          "Konsep PtLSV: Kalimat terbuka yang dihubungkan tanda ketidaksamaan ($<, \\le, >, \\ge$) dan memuat satu variabel berpangkat satu. Bentuk umum: $ax + b < c$.",
          "Sifat Khusus Pembalikan Tanda PtLSV: Tanda ketidaksamaan HARUS DIBALIK arahnya (misalnya $<$ menjadi $>$, atau $\\le$ menjadi $\\ge$) apabila kedua ruas dikalikan atau dibagi dengan bilangan real NEGATIF.",
          "Penyajian Himpunan Penyelesaian: Solusi pertidaksamaan dapat disajikan dalam bentuk notasi himpunan matematika atau visualisasi garis bilangan."
        ],
        "workedExamples": [
          {
            "title": "Menyelesaikan PLSV dengan Tanda Kurung",
            "problem": "Tentukan nilai variabel $x$ yang memenuhi persamaan: $3(2x - 4) = 4x + 6$.",
            "solution": "Langkah 1: Jabarkan tanda kurung dengan sifat distributif:\n$$6x - 12 = 4x + 6$$\n\nLangkah 2: Kumpulkan suku bervariabel $x$ di ruas kiri dan konstanta di ruas kanan:\n$$6x - 4x = 6 + 12$$\n$$2x = 18$$\n\nLangkah 3: Bagi kedua ruas dengan koefisien 2:\n$$x = \\frac{18}{2} = 9$$\nNilai penyelesaiannya adalah **$x = 9$**."
          },
          {
            "title": "Menyelesaikan PtLSV dengan Pembalikan Tanda",
            "problem": "Tentukan himpunan penyelesaian dari pertidaksamaan: $5 - 3x \\le 17$ untuk $x$ bilangan bulat.",
            "solution": "Langkah 1: Kurangkan kedua ruas dengan 5:\n$$-3x \\le 17 - 5$$\n$$-3x \\le 12$$\n\nLangkah 2: Bagi kedua ruas dengan bilangan negatif $-3$ dan BALIKKAN tanda ketidaksamaan dari $\\le$ menjadi $\\ge$:\n$$x \\ge \\frac{12}{-3}$$\n$$x \\ge -4$$\nJadi, himpunan penyelesaiannya untuk $x$ bilangan bulat adalah **$\\{-4, -3, -2, -1, 0, 1, 2, \\dots\\}$**."
          }
        ],
        "keyFormulas": [
          {
            "label": "Bentuk Baku PLSV",
            "formula": "ax + b = c \\implies x = \\frac{c - b}{a}"
          },
          {
            "label": "Pembalikan Tanda PtLSV",
            "formula": "-ax < b \\iff x > -\\frac{b}{a} \\quad (a > 0)"
          }
        ],
        "misconceptions": [
          "Lupa membalik tanda ketidaksamaan saat membagi atau mengalikan kedua ruas dengan bilangan negatif pada PtLSV.",
          "Salah dalam tanda operasi saat memindahkan suku antar-ruas (lupa mengubah tanda plus menjadi minus atau sebaliknya)."
        ],
        "tutorTip": "Hati-hati: Setiap kali kamu membagi atau mengalikan kedua ruas dengan angka MINUS pada pertidaksamaan, tanda pertidaksamaan WAJIB diputar arahnya!"
      },
      "questions": [
        {
          "id": "smp8-b3-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Penyelesaian dari persamaan linear $5x - 7 = 18$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$x = 5$"
            },
            {
              "key": "B",
              "text": "$x = 4$"
            },
            {
              "key": "C",
              "text": "$x = 6$"
            },
            {
              "key": "D",
              "text": "$x = 3$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Tambahkan 7 ke kedua ruas: $5x = 18 + 7 = 25$, lalu bagi dengan 5.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $5x = 18 + 7 = 25$\n2. $x = \\frac{25}{5} = 5$\nNilai $x$ adalah **$x = 5$** (Opsi A)."
        },
        {
          "id": "smp8-b3-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Himpunan penyelesaian dari pertidaksamaan $2x + 3 < 11$ untuk $x$ bilangan bulat positif adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\{1, 2, 3\\}$"
            },
            {
              "key": "B",
              "text": "$\\{1, 2, 3, 4\\}$"
            },
            {
              "key": "C",
              "text": "$\\{0, 1, 2, 3\\}$"
            },
            {
              "key": "D",
              "text": "$\\{2, 3\\}$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kurangkan 3: $2x < 8 \\implies x < 4$. Bilangan bulat positif yang kurang dari 4 adalah 1, 2, 3.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $2x < 11 - 3 \\implies 2x < 8$\n2. $x < 4$\n3. Karena diminta bilangan bulat positif ($x \\in \\{1, 2, 3, \\dots\\}$):\nHimpunannya adalah **$\\{1, 2, 3\\}$** (Opsi A)."
        },
        {
          "id": "smp8-b3-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Penyelesaian dari pertidaksamaan linear $-4x + 6 \\le -10$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$x \\ge 4$"
            },
            {
              "key": "B",
              "text": "$x \\le 4$"
            },
            {
              "key": "C",
              "text": "$x \\ge -4$"
            },
            {
              "key": "D",
              "text": "$x \\le -4$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kurangkan 6: $-4x \\le -16$. Bagi dengan $-4$ dan balikkan tanda ketidaksamaan menjadi $\\ge$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $-4x \\le -10 - 6 \\implies -4x \\le -16$\n2. Bagi kedua ruas dengan $-4$ (tanda dibalik):\n$$x \\ge \\frac{-16}{-4} \\implies x \\ge 4$$\nPenyelesaiannya adalah **$x \\ge 4$** (Opsi A)."
        },
        {
          "id": "smp8-b3-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah mobil bak memiliki daya angkut maksimum 1.200 kg. Sopir dan kernet memiliki berat gabungan 150 kg. Jika mobil tersebut akan mengangkut sejumlah kotak barang dengan berat masing-masing 35 kg, banyak kotak maksimum yang dapat diangkut adalah...",
          "options": [
            {
              "key": "A",
              "text": "30 kotak"
            },
            {
              "key": "B",
              "text": "31 kotak"
            },
            {
              "key": "C",
              "text": "29 kotak"
            },
            {
              "key": "D",
              "text": "32 kotak"
            }
          ],
          "correctAnswer": "A",
          "hint": "Susun pertidaksamaan: $150 + 35x \\le 1.200$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Model pertidaksamaan:\n$$150 + 35x \\le 1.200$$\n$$35x \\le 1.200 - 150$$\n$$35x \\le 1.050$$\n2. Hitung nilai maksimum $x$:\n$$x \\le \\frac{1.050}{35} = 30$$\nBanyak kotak maksimum yang dapat diangkut adalah **30 kotak** (Opsi A)."
        },
        {
          "id": "smp8-b3-5",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Nilai $x$ yang memenuhi persamaan $4x - 7 = 13$ adalah...",
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
              "text": "3"
            }
          ],
          "correctAnswer": "A",
          "hint": "Pindahkan konstanta ke ruas kanan lalu bagi dengan koefisien $x$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$4x = 13 + 7 \\implies 4x = 20 \\implies x = 5$$\nNilai $x$ adalah **5** (Opsi A)."
        },
        {
          "id": "smp8-b3-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Penyelesaian dari persamaan $3(2x - 1) = 2(x + 6) + 1$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "4"
            },
            {
              "key": "B",
              "text": "3"
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
          "correctAnswer": "A",
          "hint": "Kalikan ke dalam kurung terlebih dahulu, lalu kumpulkan suku sejenis.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $6x - 3 = 2x + 12 + 1$\n2. $6x - 3 = 2x + 13$\n3. $6x - 2x = 13 + 3 \\implies 4x = 16 \\implies x = 4$ (Opsi A)."
        },
        {
          "id": "smp8-b3-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Himpunan penyelesaian dari pertidaksamaan $2x - 5 < 7$ untuk $x$ bilangan bulat positif adalah...",
          "options": [
            {
              "key": "A",
              "text": "{1, 2, 3, 4, 5}"
            },
            {
              "key": "B",
              "text": "{1, 2, 3, 4, 5, 6}"
            },
            {
              "key": "C",
              "text": "{0, 1, 2, 3, 4, 5}"
            },
            {
              "key": "D",
              "text": "{1, 2, 3, 4}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Selesaikan pertidaksamaan: $2x < 12 \\implies x < 6$. Bilangan bulat positif dimulai dari 1.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$2x < 12 \\implies x < 6$$\nKarena $x$ bilangan bulat positif: **{1, 2, 3, 4, 5}** (Opsi A)."
        },
        {
          "id": "smp8-b3-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Penyelesaian dari pertidaksamaan $-3x + 4 \\le 19$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "x \\ge -5"
            },
            {
              "key": "B",
              "text": "x \\le -5"
            },
            {
              "key": "C",
              "text": "x \\ge 5"
            },
            {
              "key": "D",
              "text": "x \\le 5"
            }
          ],
          "correctAnswer": "A",
          "hint": "Ingat aturan penting: membagi pertidaksamaan dengan bilangan negatif akan MEMBALIK tanda pertidaksamaan.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$-3x \\le 19 - 4 \\implies -3x \\le 15 \\implies x \\ge -5$$ (Opsi A)."
        },
        {
          "id": "smp8-b3-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Penyelesaian dari persamaan pecahan $\\frac{x - 1}{2} = \\frac{2x + 1}{5}$ adalah...",
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
              "text": "6"
            },
            {
              "key": "D",
              "text": "8"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kalikan silang kedua ruas: $5(x - 1) = 2(2x + 1)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$5x - 5 = 4x + 2 \\implies 5x - 4x = 2 + 5 \\implies x = 7$$\nNilai $x$ adalah **7** (Opsi A)."
        },
        {
          "id": "smp8-b3-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jumlah tiga bilangan bulat berurutan adalah 72. Bilangan terbesar dari ketiga bilangan tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "25"
            },
            {
              "key": "B",
              "text": "24"
            },
            {
              "key": "C",
              "text": "23"
            },
            {
              "key": "D",
              "text": "26"
            }
          ],
          "correctAnswer": "A",
          "hint": "Misalkan tiga bilangan itu $n - 1, n, n + 1$. Jumlahnya adalah $3n = 72$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $3n = 72 \\implies n = 24$\n2. Ketiga bilangan: 23, 24, 25\n3. Bilangan terbesarnya adalah **25** (Opsi A)."
        },
        {
          "id": "smp8-b3-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Keliling sebuah kebun berbentuk persegi panjang adalah 64 meter. Jika panjangnya 6 meter lebih panjang dari lebarnya, maka lebar kebun tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "13 meter"
            },
            {
              "key": "B",
              "text": "19 meter"
            },
            {
              "key": "C",
              "text": "14 meter"
            },
            {
              "key": "D",
              "text": "12 meter"
            }
          ],
          "correctAnswer": "A",
          "hint": "Keliling $= 2(p + l) = 64 \\implies p + l = 32$. Substitusi $p = l + 6$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$(l + 6) + l = 32 \\implies 2l + 6 = 32 \\implies 2l = 26 \\implies l = 13\\text{ meter}$$ (Opsi A)."
        },
        {
          "id": "smp8-b3-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Umur seorang ayah saat ini adalah 3 kali umur anaknya. Jika 4 tahun yang lalu jumlah umur mereka adalah 48 tahun, maka umur anak saat ini adalah...",
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
          "hint": "Misalkan umur anak sekarang $x$, maka ayah $3x$. Empat tahun lalu: $(3x - 4) + (x - 4) = 48$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$4x - 8 = 48 \\implies 4x = 56 \\implies x = 14\\text{ tahun}$$ (Opsi A)."
        },
        {
          "id": "smp8-b3-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Seorang pedagang membeli 5 kardus mie instan seharga Rp450.000,00. Jika tiap kardus berisi 40 bungkus mie dan ia ingin memperoleh keuntungan Rp50.000,00 secara keseluruhan, harga jual per bungkus mie adalah...",
          "options": [
            {
              "key": "A",
              "text": "Rp2.500,00"
            },
            {
              "key": "B",
              "text": "Rp2.250,00"
            },
            {
              "key": "C",
              "text": "Rp2.750,00"
            },
            {
              "key": "D",
              "text": "Rp2.400,00"
            }
          ],
          "correctAnswer": "A",
          "hint": "Total pendapatan yang diinginkan $= 450.000 + 50.000 = 500.000$. Total bungkus $= 5 \\times 40 = 200$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Harga per bungkus} = \\frac{500.000}{200} = \\text{Rp}2.500,00$$ (Opsi A)."
        },
        {
          "id": "smp8-b3-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah mobil memerlukan 8 liter bensin untuk menempuh jarak 96 km. Jika mobil tersebut masih memiliki bensin sebanyak 15 liter di tangkinya, jarak maksimum yang dapat ditempuh mobil adalah...",
          "options": [
            {
              "key": "A",
              "text": "180 km"
            },
            {
              "key": "B",
              "text": "160 km"
            },
            {
              "key": "C",
              "text": "175 km"
            },
            {
              "key": "D",
              "text": "192 km"
            }
          ],
          "correctAnswer": "A",
          "hint": "Hitung konsumsi per liter $= 96 / 8 = 12$ km/liter, lalu kalikan dengan 15 liter.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Jarak} = 15 \\times 12 = 180\\text{ km}$$ (Opsi A)."
        },
        {
          "id": "smp8-b3-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah segitiga memiliki panjang sisi-sisi $(x + 2)$ cm, $(2x - 1)$ cm, dan $(3x - 5)$ cm. Jika keliling segitiga tersebut tidak lebih dari 32 cm, batas nilai $x$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "x \\le 6"
            },
            {
              "key": "B",
              "text": "x \\le 5"
            },
            {
              "key": "C",
              "text": "x < 6"
            },
            {
              "key": "D",
              "text": "x \\ge 6"
            }
          ],
          "correctAnswer": "A",
          "hint": "Keliling $= (x + 2) + (2x - 1) + (3x - 5) \\le 32$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$6x - 4 \\le 32 \\implies 6x \\le 36 \\implies x \\le 6$$ (Opsi A)."
        },
        {
          "id": "smp8-b3-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Nilai $x$ yang memenuhi persamaan $\\frac{2x - 3}{3} - \\frac{x - 2}{2} = 1$ adalah...",
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
          "hint": "Kalikan kedua ruas dengan 6 untuk menghilangkan penyebut.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $2(2x - 3) - 3(x - 2) = 6$\n2. $4x - 6 - 3x + 6 = 6 \\implies x = 6$ (Opsi A)."
        },
        {
          "id": "smp8-b3-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Himpunan penyelesaian dari $\\frac{1}{2}(x - 2) \\le \\frac{1}{3}(2x + 1)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "x \\ge -8"
            },
            {
              "key": "B",
              "text": "x \\le -8"
            },
            {
              "key": "C",
              "text": "x \\ge 8"
            },
            {
              "key": "D",
              "text": "x \\le 8"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kalikan kedua ruas dengan 6 untuk mengeliminasi pecahan.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $3(x - 2) \\le 2(2x + 1)$\n2. $3x - 6 \\le 4x + 2$\n3. $3x - 4x \\le 2 + 6 \\implies -x \\le 8 \\implies x \\ge -8$ (Opsi A)."
        },
        {
          "id": "smp8-b3-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah bak air memiliki kapasitas 600 liter. Keran A dapat mengisi bak hingga penuh dalam 20 menit, sedangkan lubang pembuangan B dapat mengosongkan bak dalam 30 menit. Jika keran A dan lubang B terbuka bersamaan, waktu yang diperlukan untuk mengisi bak hingga penuh adalah...",
          "options": [
            {
              "key": "A",
              "text": "60 menit"
            },
            {
              "key": "B",
              "text": "45 menit"
            },
            {
              "key": "C",
              "text": "50 menit"
            },
            {
              "key": "D",
              "text": "40 menit"
            }
          ],
          "correctAnswer": "A",
          "hint": "Debit pengisian bersih $= \\frac{1}{20} - \\frac{1}{30} = \\frac{3 - 2}{60} = \\frac{1}{60}$ bagian/menit.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Laju netto} = \\frac{1}{20} - \\frac{1}{30} = \\frac{1}{60}\\text{ per menit}$$\nWaktu $= 60$ menit (Opsi A)."
        },
        {
          "id": "smp8-b3-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Jika $a$ dan $b$ adalah bilangan bulat positif sehingga persamaan $ax + 5 = 17$ memiliki penyelesaian $x = 3$, maka nilai dari $a$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "4"
            },
            {
              "key": "B",
              "text": "3"
            },
            {
              "key": "C",
              "text": "5"
            },
            {
              "key": "D",
              "text": "6"
            }
          ],
          "correctAnswer": "A",
          "hint": "Substitusikan $x = 3$ ke dalam persamaan: $3a + 5 = 17$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$3a + 5 = 17 \\implies 3a = 12 \\implies a = 4$$ (Opsi A)."
        },
        {
          "id": "smp8-b3-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Suatu tempat parkir menampung 60 kendaraan yang terdiri atas motor dan mobil. Jumlah seluruh roda kendaraan adalah 160 buah. Jika tarif parkir motor Rp2.000,00 dan mobil Rp5.000,00, total pendapatan parkir adalah...",
          "options": [
            {
              "key": "A",
              "text": "Rp180.000,00"
            },
            {
              "key": "B",
              "text": "Rp160.000,00"
            },
            {
              "key": "C",
              "text": "Rp150.000,00"
            },
            {
              "key": "D",
              "text": "Rp200.000,00"
            }
          ],
          "correctAnswer": "A",
          "hint": "Misalkan banyak motor $= m$, maka mobil $= 60 - m$. Roda: $2m + 4(60 - m) = 160$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $2m + 240 - 4m = 160 \\implies 2m = 80 \\implies m = 40$ motor\n2. Banyak mobil $= 60 - 40 = 20$ mobil\n3. Pendapatan $= (40 \\times 2.000) + (20 \\times 5.000) = 80.000 + 100.000 = \\text{Rp}180.000,00$ (Opsi A)."
        }
      ]
    },
    {
      "id": "smp8-bab4-relasi-fungsi",
      "title": "Bab 4: Relasi dan Fungsi",
      "summary": {
        "overview": "Di era transformasi digital saat ini, setiap siswa di sekolah memiliki Nomor Induk Siswa Nasional (NISN) yang unik, setiap warga negara memiliki Nomor Induk Kependudukan (NIK) pada kartu tanda penduduk, dan setiap kendaraan memiliki pelat nomor resmi yang tercatat di kepolisian. Tidak mungkin satu orang memiliki dua NIK yang berbeda, dan tidak mungkin satu nomor NIK dimiliki oleh dua orang sekaligus. Keteraturan hubungan satu-ke-satu yang pasti ini adalah representasi nyata dari konsep Relasi dan Fungsi.\n\nSecara matematis, Relasi adalah hubungan sembarang antara anggota suatu himpunan asal dengan anggota himpunan kawan. Namun, tidak semua relasi layak disebut sebagai Fungsi (Pemetaan). Sebuah relasi naik tingkat menjadi Fungsi apabila memenuhi syarat khusus: setiap anggota daerah asal harus memiliki tepat satu pasangan di daerah kawan. Konsep fungsi menjadi fondasi bahasa pemrograman (fungsi input-output algoritma) dan sains kalkulus.\n\nBab ini menuntun siswa Kelas 8 membedakan antara relasi dan fungsi, menyajikan fungsi dalam berbagai bentuk (diagram panah, himpunan pasangan berurutan, tabel, grafik, dan rumus persamaan), menentukan daerah asal (domain), daerah kawan (kodomain), serta daerah hasil (range), hingga menghitung nilai fungsi linear $f(x) = ax + b$ secara aljabar.",
        "coreConcepts": [
          "Relasi: Hubungan antara anggota himpunan $A$ (daerah asal) dengan anggota himpunan $B$ (daerah kawan). Anggota himpunan $A$ boleh berpasangan lebih dari satu kali atau tidak memiliki pasangan.",
          "Fungsi (Pemetaan): Relasi khusus di mana SETIAP anggota daerah asal ($A$) dipasangkan dengan TEPAT SATU anggota daerah kawan ($B$). Tidak boleh ada anggota $A$ yang bercabang atau tidak berpasangan.",
          "Domain, Kodomain, dan Range: Domain ($D_f$) adalah seluruh anggota himpunan asal. Kodomain ($K_f$) adalah seluruh anggota himpunan kawan. Range ($R_f$) adalah himpunan semua nilai anggota kodomain yang memiliki pasangan dari domain.",
          "Banyaknya Pemetaan yang Mungkin: Banyak pemetaan dari himpunan $A$ ke himpunan $B$ dengan banyak anggota $n(A) = a$ dan $n(B) = b$ adalah $b^a$.",
          "Bentuk Notasi & Rumus Fungsi: Notasi $f: x \\to ax + b$ dituliskan sebagai rumus fungsi $f(x) = ax + b$. Nilai fungsi dihitung dengan mensubstitusikan nilai input $x$ ke dalam variabelnya."
        ],
        "workedExamples": [
          {
            "title": "Menghitung Nilai Fungsi Linear",
            "problem": "Diketahui rumus suatu fungsi adalah $f(x) = 3x - 5$. Tentukan nilai dari $f(4)$ dan tentukan nilai $p$ jika diketahui $f(p) = 16$.",
            "solution": "Langkah 1: Hitung $f(4)$ dengan mensubstitusi $x = 4$:\n$$f(4) = 3(4) - 5 = 12 - 5 = 7$$\n\nLangkah 2: Cari nilai $p$ dari persamaan $f(p) = 16$:\n$$3p - 5 = 16$$\n$$3p = 16 + 5 = 21$$\n$$p = \\frac{21}{3} = 7$$\nNilai $f(4)$ adalah **7** dan nilai $p$ adalah **7**."
          },
          {
            "title": "Menentukan Rumus Fungsi dari Dua Pasangan Nilai",
            "problem": "Suatu fungsi linear dinyatakan dengan $f(x) = ax + b$. Jika diketahui $f(2) = 7$ dan $f(5) = 16$, tentukan nilai $a, b$, dan rumus fungsi $f(x)$.",
            "solution": "Langkah 1: Susun sistem persamaan:\n$$f(2) = 2a + b = 7$$\n$$f(5) = 5a + b = 16$$\n\nLangkah 2: Eliminasi variabel $b$ dengan mengurangkan persamaan kedua dengan yang pertama:\n$$(5a + b) - (2a + b) = 16 - 7$$\n$$3a = 9 \\implies a = 3$$\n\nLangkah 3: Substitusi nilai $a = 3$ ke persamaan pertama:\n$$2(3) + b = 7 \\implies 6 + b = 7 \\implies b = 1$$\nJadi, nilai $a = 3, b = 1$, dan rumus fungsinya adalah **$f(x) = 3x + 1$**."
          }
        ],
        "keyFormulas": [
          {
            "label": "Rumus Fungsi Linear",
            "formula": "f(x) = ax + b"
          },
          {
            "label": "Banyak Pemetaan A ke B",
            "formula": "n(B)^{n(A)}"
          }
        ],
        "misconceptions": [
          "Menyamakan relasi dengan fungsi: anggota kodomain boleh memiliki pasangan lebih dari satu pada fungsi, yang TIDAK BOLEH bercabang hanyalah anggota domain (daerah asal).",
          "Tertukar rumus banyak pemetaan: pemetaan dari $A$ ke $B$ adalah $b^a$, bukan $a^b$."
        ],
        "tutorTip": "Ingat analogi mudah: 'Domain adalah orang, Kodomain adalah nomor KTP'. Setiap orang wajib punya tepat 1 KTP, tidak boleh punya 2 KTP, dan tidak boleh tanpa identitas!"
      },
      "questions": [
        {
          "id": "smp8-b4-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Diketahui rumus fungsi $f(x) = 4x - 3$. Nilai dari $f(5)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "17"
            },
            {
              "key": "B",
              "text": "19"
            },
            {
              "key": "C",
              "text": "23"
            },
            {
              "key": "D",
              "text": "15"
            }
          ],
          "correctAnswer": "A",
          "hint": "Substitusikan $x = 5$ ke dalam rumus: $4(5) - 3$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$f(5) = 4(5) - 3 = 20 - 3 = 17$$\nNilai $f(5)$ adalah **17** (Opsi A)."
        },
        {
          "id": "smp8-b4-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Himpunan pasangan berurutan berikut yang merupakan fungsi (pemetaan) adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\{(1, a), (2, b), (3, c), (4, d)\\}$"
            },
            {
              "key": "B",
              "text": "$\\{(1, a), (1, b), (2, c), (3, d)\\}$"
            },
            {
              "key": "C",
              "text": "$\\{(1, a), (2, b), (2, c), (3, d)\\}$"
            },
            {
              "key": "D",
              "text": "$\\{(2, a), (3, b), (3, c), (4, d)\\}$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Periksa angka pertama (domain) pada setiap pasangan: tidak boleh ada angka yang muncul berulang kali.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nPada opsi A, domainnya adalah $\\{1, 2, 3, 4\\}$ di mana setiap angka muncul tepat satu kali dan tidak ada yang bercabang. Jadi, opsi A adalah **fungsi** (Opsi A)."
        },
        {
          "id": "smp8-b4-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jika himpunan $A = \\{1, 2, 3\\}$ dan himpunan $B = \\{a, b\\}$, maka banyaknya pemetaan yang mungkin dari himpunan $A$ ke himpunan $B$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "8"
            },
            {
              "key": "B",
              "text": "9"
            },
            {
              "key": "C",
              "text": "6"
            },
            {
              "key": "D",
              "text": "5"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan rumus banyak pemetaan dari $A$ ke $B$: $n(B)^{n(A)} = 2^3$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $n(A) = 3$ dan $n(B) = 2$.\n2. Banyak pemetaan dari $A$ ke $B$:\n$$n(B)^{n(A)} = 2^3 = 8$$\nBanyaknya pemetaan yang mungkin adalah **8** (Opsi A)."
        },
        {
          "id": "smp8-b4-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Suatu fungsi linear memiliki rumus $f(x) = ax + b$. Jika $f(1) = 5$ dan $f(3) = 11$, maka nilai dari $f(6)$ adalah...",
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
              "text": "21"
            },
            {
              "key": "D",
              "text": "22"
            }
          ],
          "correctAnswer": "A",
          "hint": "Cari nilai $a$ dan $b$ terlebih dahulu: $2a = 11 - 5 = 6 \\implies a = 3, b = 2$. Lalu hitung $f(6) = 3(6) + 2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Sistem persamaan:\n$$a + b = 5$$\n$$3a + b = 11$$\n2. Eliminasi $b$:\n$$2a = 6 \\implies a = 3$$\n3. Cari $b$:\n$$3 + b = 5 \\implies b = 2$$\n4. Rumus fungsi: $f(x) = 3x + 2$.\n5. Nilai $f(6) = 3(6) + 2 = 18 + 2 = 20$.\nHasilnya adalah **20** (Opsi A)."
        },
        {
          "id": "smp8-b4-5",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Suatu fungsi didefinisikan dengan rumus $f(x) = 3x - 5$. Nilai dari $f(4)$ adalah...",
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
              "text": "6"
            },
            {
              "key": "D",
              "text": "8"
            }
          ],
          "correctAnswer": "A",
          "hint": "Substitusikan nilai $x = 4$ ke dalam rumus fungsi.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$f(4) = 3(4) - 5 = 12 - 5 = 7$$\nNilai dari $f(4)$ adalah **7** (Opsi A)."
        },
        {
          "id": "smp8-b4-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Di antara himpunan pasangan berurutan berikut, manakah yang merupakan fungsi (pemetaan)?",
          "options": [
            {
              "key": "A",
              "text": "{(1, a), (2, b), (3, c), (4, a)}"
            },
            {
              "key": "B",
              "text": "{(1, a), (1, b), (2, c), (3, d)}"
            },
            {
              "key": "C",
              "text": "{(2, 1), (2, 2), (2, 3), (2, 4)}"
            },
            {
              "key": "D",
              "text": "{(1, 3), (2, 4), (2, 5), (3, 6)}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Fungsi mensyaratkan setiap anggota domain (elemen pertama) dipasangkan tepat satu kali ke kodomain.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nPada himpunan {(1, a), (2, b), (3, c), (4, a)}, setiap elemen pertama (1, 2, 3, 4) muncul tepat satu kali. Jadi ini adalah **fungsi** (Opsi A)."
        },
        {
          "id": "smp8-b4-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Diketahui himpunan $A = \\{1, 2, 3\\}$ dan himpunan $B = \\{a, b\\}$. Banyak pemetaan yang mungkin dari himpunan $A$ ke himpunan $B$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "8"
            },
            {
              "key": "B",
              "text": "9"
            },
            {
              "key": "C",
              "text": "6"
            },
            {
              "key": "D",
              "text": "12"
            }
          ],
          "correctAnswer": "A",
          "hint": "Banyak pemetaan dari $A$ ke $B$ dirumuskan dengan $n(B)^{n(A)}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$n(A) = 3, \\quad n(B) = 2$$\nBanyak pemetaan $= n(B)^{n(A)} = 2^3 = 8$ (Opsi A)."
        },
        {
          "id": "smp8-b4-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Suatu fungsi linear dinyatakan dengan rumus $g(x) = 5 - 2x$. Jika $g(a) = -7$, maka nilai $a$ adalah...",
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
              "text": "5"
            },
            {
              "key": "D",
              "text": "-5"
            }
          ],
          "correctAnswer": "A",
          "hint": "Buat persamaan $5 - 2a = -7$ lalu selesaikan untuk mencari $a$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$5 - 2a = -7 \\implies -2a = -12 \\implies a = 6$$ (Opsi A)."
        },
        {
          "id": "smp8-b4-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Diketahui domain fungsi $f(x) = 2x + 3$ adalah $D = \\{-1, 0, 1, 2\\}$. Daerah hasil (range) fungsi tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "{1, 3, 5, 7}"
            },
            {
              "key": "B",
              "text": "{2, 3, 4, 5}"
            },
            {
              "key": "C",
              "text": "{1, 2, 3, 4}"
            },
            {
              "key": "D",
              "text": "{0, 2, 4, 6}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Hitung nilai fungsi untuk setiap anggota domain: $f(-1), f(0), f(1), f(2)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $f(-1) = 2(-1) + 3 = 1$\n2. $f(0) = 3$\n3. $f(1) = 5$\n4. $f(2) = 7$\nRange $= \\{1, 3, 5, 7\\}$ (Opsi A)."
        },
        {
          "id": "smp8-b4-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Banyaknya korespondensi satu-satu yang mungkin terjadi antara dua himpunan dengan masing-masing 4 anggota adalah...",
          "options": [
            {
              "key": "A",
              "text": "24"
            },
            {
              "key": "B",
              "text": "16"
            },
            {
              "key": "C",
              "text": "12"
            },
            {
              "key": "D",
              "text": "64"
            }
          ],
          "correctAnswer": "A",
          "hint": "Korespondensi satu-satu dengan $n$ anggota dirumuskan dengan $n! = n \\times (n-1) \\times \\dots \\times 1$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$4! = 4 \\times 3 \\times 2 \\times 1 = 24$$ (Opsi A)."
        },
        {
          "id": "smp8-b4-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Diketahui fungsi $f(x) = ax + b$. Jika $f(2) = 7$ dan $f(4) = 13$, maka rumus fungsi $f(x)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "f(x) = 3x + 1"
            },
            {
              "key": "B",
              "text": "f(x) = 2x + 3"
            },
            {
              "key": "C",
              "text": "f(x) = 3x - 1"
            },
            {
              "key": "D",
              "text": "f(x) = 4x - 1"
            }
          ],
          "correctAnswer": "A",
          "hint": "Eliminasi nilai $a$ dengan mengurangkan persamaan $f(4) - f(2)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $4a + b = 13$\n2. $2a + b = 7$\n3. $(4a - 2a) = 13 - 7 \\implies 2a = 6 \\implies a = 3$\n4. $2(3) + b = 7 \\implies b = 1$\nRumus fungsi: $f(x) = 3x + 1$ (Opsi A)."
        },
        {
          "id": "smp8-b4-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah perusahaan taksi memberlakukan tarif awal Rp8.000,00 dan tarif tambahan Rp4.000,00 per kilometer. Jika seorang penumpang menempuh jarak $x$ km, rumus tarif taksi $T(x)$ dan total biaya untuk jarak 12 km adalah...",
          "options": [
            {
              "key": "A",
              "text": "T(x) = 4.000x + 8.000, biaya Rp56.000,00"
            },
            {
              "key": "B",
              "text": "T(x) = 8.000x + 4.000, biaya Rp100.000,00"
            },
            {
              "key": "C",
              "text": "T(x) = 4.000x + 8.000, biaya Rp48.000,00"
            },
            {
              "key": "D",
              "text": "T(x) = 12.000x, biaya Rp144.000,00"
            }
          ],
          "correctAnswer": "A",
          "hint": "Bentuk fungsi biaya linear: $T(x) = \\text{biaya per km} \\times x + \\text{tarif awal}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$T(x) = 4.000x + 8.000$$\n$$T(12) = 4.000(12) + 8.000 = 48.000 + 8.000 = \\text{Rp}56.000,00$$ (Opsi A)."
        },
        {
          "id": "smp8-b4-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jika $f(2x - 3) = 4x + 5$, maka nilai dari $f(5)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "21"
            },
            {
              "key": "B",
              "text": "25"
            },
            {
              "key": "C",
              "text": "17"
            },
            {
              "key": "D",
              "text": "19"
            }
          ],
          "correctAnswer": "A",
          "hint": "Samakan argumen di dalam kurung: $2x - 3 = 5 \\implies 2x = 8 \\implies x = 4$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $2x - 3 = 5 \\implies x = 4$\n2. Substitusikan $x = 4$: $f(5) = 4(4) + 5 = 16 + 5 = 21$ (Opsi A)."
        },
        {
          "id": "smp8-b4-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Relasi dari himpunan $P = \\{2, 3, 4\\}$ ke himpunan $Q = \\{4, 6, 8\\}$ dinyatakan dengan himpunan pasangan berurutan $\\{(2, 4), (3, 6), (4, 8)\\}$. Aturan relasi yang tepat adalah...",
          "options": [
            {
              "key": "A",
              "text": "Setengah dari"
            },
            {
              "key": "B",
              "text": "Dua kali dari"
            },
            {
              "key": "C",
              "text": "Faktor dari"
            },
            {
              "key": "D",
              "text": "Kurang dari"
            }
          ],
          "correctAnswer": "A",
          "hint": "Perhatikan hubungan antara anggota pertama dan kedua: 2 adalah setengah dari 4, 3 adalah setengah dari 6.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nKarena $2 = \\frac{1}{2} \\times 4$, $3 = \\frac{1}{2} \\times 6$, $4 = \\frac{1}{2} \\times 8$, relasi tersebut adalah **setengah dari** (Opsi A)."
        },
        {
          "id": "smp8-b4-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Suatu fungsi linear memiliki rumus $h(x) = px + q$. Jika $h(-2) = -11$ dan $h(3) = 9$, maka nilai dari $p + q$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "1"
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
              "text": "-1"
            }
          ],
          "correctAnswer": "A",
          "hint": "Cari nilai $p$ dan $q$ terlebih dahulu dengan metode eliminasi/substitusi.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $3p + q = 9$ dan $-2p + q = -11$\n2. $3p - (-2p) = 9 - (-11) \\implies 5p = 20 \\implies p = 4$\n3. $3(4) + q = 9 \\implies q = -3$\n4. $p + q = 4 + (-3) = 1$ (Opsi A)."
        },
        {
          "id": "smp8-b4-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Diketahui fungsi $f(x) = ax + b$. Jika $f(1) = 4$ dan $f(x + 2) - f(x) = 6$, maka nilai dari $f(5)$ adalah...",
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
              "text": "18"
            },
            {
              "key": "D",
              "text": "14"
            }
          ],
          "correctAnswer": "A",
          "hint": "Perhatikan $f(x+2) - f(x) = a(x+2) + b - (ax + b) = 2a = 6 \\implies a = 3$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $2a = 6 \\implies a = 3$\n2. $f(1) = 3(1) + b = 4 \\implies b = 1$\n3. $f(x) = 3x + 1$\n4. $f(5) = 3(5) + 1 = 16$ (Opsi A)."
        },
        {
          "id": "smp8-b4-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah kolam renang diisi air melalui pompa air. Hubungan antara waktu pengisian $t$ (dalam jam) dan volume air $V$ (dalam liter) dinyatakan dengan $V(t) = 1.200t + 500$. Jika kapasitas maksimal kolam adalah 7.700 liter, waktu yang diperlukan hingga kolam penuh adalah...",
          "options": [
            {
              "key": "A",
              "text": "6 jam"
            },
            {
              "key": "B",
              "text": "5,5 jam"
            },
            {
              "key": "C",
              "text": "6,5 jam"
            },
            {
              "key": "D",
              "text": "7 jam"
            }
          ],
          "correctAnswer": "A",
          "hint": "Selesaikan persamaan $1.200t + 500 = 7.700$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$1.200t = 7.700 - 500 = 7.200 \\implies t = \\frac{7.200}{1.200} = 6\\text{ jam}$$ (Opsi A)."
        },
        {
          "id": "smp8-b4-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Fungsi $f$ dinyatakan dengan rumus $f(x) = x^2 - 4x + 3$. Nilai minimum dari fungsi tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "-1"
            },
            {
              "key": "B",
              "text": "0"
            },
            {
              "key": "C",
              "text": "-2"
            },
            {
              "key": "D",
              "text": "3"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan koordinat titik puncak parabola: $x_p = -\\frac{b}{2a}$, lalu cari $f(x_p)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $x_p = -\\frac{-4}{2(1)} = 2$\n2. Nilai minimum: $f(2) = 2^2 - 4(2) + 3 = 4 - 8 + 3 = -1$ (Opsi A)."
        },
        {
          "id": "smp8-b4-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Diketahui himpunan pasangan berurutan yang merupakan korespondensi satu-satu adalah $R = \\{(1, 4), (2, a), (3, 6), (4, 7)\\}$. Jika kodomainnya adalah $\\{4, 5, 6, 7\\}$, maka nilai $a$ adalah...",
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
          "hint": "Pada korespondensi satu-satu, seluruh elemen kodomain harus digunakan tepat satu kali.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nElemen kodomain: {4, 5, 6, 7}. Elemen yang sudah berpasangan: 4, 6, 7. Maka nilai $a$ haruslah **5** (Opsi A)."
        },
        {
          "id": "smp8-b4-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Jika $f(x) = \\frac{2x + 1}{x - 3}$ dengan $x \\neq 3$, maka nilai $k$ yang memenuhi $f(k) = 5$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{16}{3}"
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
              "text": "\\frac{14}{3}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Selesaikan persamaan $\\frac{2k + 1}{k - 3} = 5$ dengan mengalikan silang.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$2k + 1 = 5(k - 3) \\implies 2k + 1 = 5k - 15 \\implies 16 = 3k \\implies k = \\frac{16}{3}$$ (Opsi A)."
        }
      ]
    },
    {
      "id": "smp8-bab5-persamaan-garis-lurus",
      "title": "Bab 5: Persamaan Garis Lurus",
      "summary": {
        "overview": "Ketika sebuah mobil melaju menaiki tanjakan bukit yang terjal atau sebuah pesawat komersial lepas landas perlahan menanjak ke angkasa, terdapat sudut kemiringan tertentu yang diukur terhadap permukaan tanah datar. Tingkat kemiringan atau kecuraman suatu garis pada bidang koordinat inilah yang dalam matematika disebut sebagai Gradien (Kemiringan Garis).\n\nPersamaan Garis Lurus (PGL) adalah fondasi utama yang menghubungkan aljabar dengan geometri analitis. Hubungan antara tarif taksi berbasis argo per kilometer perjalanan, laju konsumsi bensin kendaraan terhadap jarak tempuh, hingga grafik pemanasan air terhadap waktu, seluruhnya digambarkan sebagai garis lurus pada bidang Cartesius. Memahami gradien memungkinkan kita memprediksi laju perubahan nilai variabel secara akurat.\n\nBab ini menuntun siswa Kelas 8 memahami bentuk eksplisit ($y = mx + c$) dan bentuk implisit ($ax + by + c = 0$) persamaan garis lurus, menghitung gradien melalui dua titik koordinat, menyusun persamaan garis yang melalui satu atau dua titik, serta menguasai hubungan geometris antara dua garis yang saling sejajar ($m_1 = m_2$) dan dua garis yang saling tegak lurus ($m_1 \\times m_2 = -1$).",
        "coreConcepts": [
          "Bentuk Persamaan Garis Lurus: Bentuk eksplisit $y = mx + c$, di mana $m$ adalah gradien dan $c$ adalah titik potong garis pada sumbu-$y$ di titik $(0, c)$. Bentuk implisit: $ax + by + c = 0$, dengan gradien $m = -\\frac{a}{b}$.",
          "Gradien (Kemiringan Garis $m$): Rasio perubahan nilai vertikal ($\\Delta y$) terhadap perubahan nilai horizontal ($\\Delta x$):\n- Melalui dua titik $(x_1, y_1)$ dan $(x_2, y_2)$: $m = \\frac{y_2 - y_1}{x_2 - x_1}$.\n- Garis miring ke kanan atas bernilai positif ($m > 0$), miring ke kiri atas bernilai negatif ($m < 0$), horizontal bernilai nol ($m = 0$), dan vertikal tidak terdefinisi.",
          "Menyusun Persamaan Garis Lurus:\n- Melalui satu titik $(x_1, y_1)$ dengan gradien $m$: $y - y_1 = m(x - x_1)$.\n- Melalui dua titik $(x_1, y_1)$ dan $(x_2, y_2)$: $\\frac{y - y_1}{y_2 - y_1} = \\frac{x - x_1}{x_2 - x_1}$.",
          "Hubungan Dua Garis Lurus:\n- Dua garis SEJAJAR memiliki gradien yang sama persis: $m_1 = m_2$.\n- Dua garis saling TEGAK LURUS hasil kali gradiennya bernilai $-1$: $m_1 \\times m_2 = -1$ atau $m_2 = -\\frac{1}{m_1}$."
        ],
        "workedExamples": [
          {
            "title": "Menghitung Gradien Garis Melalui Dua Titik Koordinat",
            "problem": "Tentukan gradien garis lurus yang melalui titik $A(2, -3)$ dan titik $B(6, 5)$.",
            "solution": "Langkah 1: Identifikasi koordinat titik:\n$$x_1 = 2, \\quad y_1 = -3, \\quad x_2 = 6, \\quad y_2 = 5$$\n\nLangkah 2: Terapkan rumus gradien:\n$$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{5 - (-3)}{6 - 2}$$\n\nLangkah 3: Hitung nilai pecahan:\n$$m = \\frac{5 + 3}{4} = \\frac{8}{4} = 2$$\nGradien garis tersebut adalah **$m = 2$**."
          },
          {
            "title": "Menyusun Persamaan Garis Tegak Lurus",
            "problem": "Tentukan persamaan garis lurus yang melalui titik $(3, 1)$ dan tegak lurus dengan garis $y = -\\frac{1}{2}x + 4$.",
            "solution": "Langkah 1: Tentukan gradien garis acuan:\n$$m_1 = -\\frac{1}{2}$$\n\nLangkah 2: Karena kedua garis saling tegak lurus, maka:\n$$m_1 \\times m_2 = -1 \\implies -\\frac{1}{2} \\times m_2 = -1 \\implies m_2 = 2$$\n\nLangkah 3: Gunakan rumus persamaan garis melalui titik $(x_1, y_1) = (3, 1)$ dengan gradien $m = 2$:\n$$y - y_1 = m(x - x_1)$$\n$$y - 1 = 2(x - 3)$$\n$$y - 1 = 2x - 6 \\implies y = 2x - 5$$\nPersamaan garisnya adalah **$y = 2x - 5$**."
          }
        ],
        "keyFormulas": [
          {
            "label": "Gradien Dua Titik",
            "formula": "m = \\frac{y_2 - y_1}{x_2 - x_1}"
          },
          {
            "label": "Gradien Bentuk Implisit",
            "formula": "ax + by + c = 0 \\implies m = -\\frac{a}{b}"
          },
          {
            "label": "Persamaan Garis Titik & Gradien",
            "formula": "y - y_1 = m(x - x_1)"
          },
          {
            "label": "Garis Tegak Lurus",
            "formula": "m_1 \\times m_2 = -1"
          }
        ],
        "misconceptions": [
          "Tertukar rumus selisih ordinat dan absis saat menghitung gradien: yang berada di pembilang adalah $\\Delta y$ dan di penyebut adalah $\\Delta x$, bukan sebaliknya.",
          "Salah menentukan gradien garis tegak lurus: hanya mengubah tandanya tanpa membalikkan pecahannya."
        ],
        "tutorTip": "Trik cepat gradien tegak lurus: 'Lawan dan Balik'! Jika gradien garis awal adalah $\\frac{2}{3}$, maka gradien garis tegak lurusnya adalah lawannya (negatif) dan dibalik menjadi $-\\frac{3}{2}$."
      },
      "questions": [
        {
          "id": "smp8-b5-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Gradien dari persamaan garis lurus $y = 3x - 5$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "3"
            },
            {
              "key": "B",
              "text": "-5"
            },
            {
              "key": "C",
              "text": "-3"
            },
            {
              "key": "D",
              "text": "5"
            }
          ],
          "correctAnswer": "A",
          "hint": "Pada bentuk eksplisit $y = mx + c$, gradien garis adalah koefisien dari variabel $x$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nBerdasarkan bentuk $y = mx + c$, nilai $m = 3$.\nGradien garisnya adalah **3** (Opsi A)."
        },
        {
          "id": "smp8-b5-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Gradien garis yang melalui titik asal $O(0,0)$ dan titik $P(4, 8)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "2"
            },
            {
              "key": "B",
              "text": "$\\frac{1}{2}$"
            },
            {
              "key": "C",
              "text": "4"
            },
            {
              "key": "D",
              "text": "-2"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan $m = \\frac{y}{x} = \\frac{8}{4}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$m = \\frac{8 - 0}{4 - 0} = \\frac{8}{4} = 2$$\nGradien garis adalah **2** (Opsi A)."
        },
        {
          "id": "smp8-b5-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Gradien garis dari persamaan linear $2x + 4y - 8 = 0$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$-\\frac{1}{2}$"
            },
            {
              "key": "B",
              "text": "$\\frac{1}{2}$"
            },
            {
              "key": "C",
              "text": "-2"
            },
            {
              "key": "D",
              "text": "2"
            }
          ],
          "correctAnswer": "A",
          "hint": "Ubah ke bentuk $y = mx + c$ atau gunakan rumus $m = -\\frac{a}{b} = -\\frac{2}{4}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Rumus bentuk implisit $ax + by + c = 0$:\n$$m = -\\frac{a}{b} = -\\frac{2}{4} = -\\frac{1}{2}$$\nGradien garis adalah **$-\\frac{1}{2}$** (Opsi A)."
        },
        {
          "id": "smp8-b5-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Persamaan garis lurus yang melalui titik $(2, 3)$ dan sejajar dengan garis $y = 2x + 1$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$y = 2x - 1$"
            },
            {
              "key": "B",
              "text": "$y = 2x + 1$"
            },
            {
              "key": "C",
              "text": "$y = -\\frac{1}{2}x + 4$"
            },
            {
              "key": "D",
              "text": "$y = 2x - 7$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Karena sejajar, gradiennya sama ($m = 2$). Gunakan $y - y_1 = m(x - x_1)$ dengan titik $(2, 3)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Karena sejajar, maka $m = 2$.\n2. Masukkan ke rumus garis melalui titik $(2, 3)$:\n$$y - 3 = 2(x - 2)$$\n$$y - 3 = 2x - 4$$\n$$y = 2x - 4 + 3 \\implies y = 2x - 1$$\nPersamaan garisnya adalah **$y = 2x - 1$** (Opsi A)."
        },
        {
          "id": "smp8-b5-5",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Gradien garis dengan persamaan $y = 4x - 7$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "4"
            },
            {
              "key": "B",
              "text": "-7"
            },
            {
              "key": "C",
              "text": "-4"
            },
            {
              "key": "D",
              "text": "\\frac{1}{4}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Bentuk umum persamaan garis adalah $y = mx + c$, di mana $m$ adalah gradien.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nKoefisien di depan variabel $x$ adalah $m = 4$. Jadi gradiennya adalah **4** (Opsi A)."
        },
        {
          "id": "smp8-b5-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Gradien garis yang melalui titik $A(2, 3)$ dan $B(6, 11)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "2"
            },
            {
              "key": "B",
              "text": "3"
            },
            {
              "key": "C",
              "text": "\\frac{1}{2}"
            },
            {
              "key": "D",
              "text": "4"
            }
          ],
          "correctAnswer": "A",
          "hint": "Rumus gradien dua titik: $m = \\frac{y_2 - y_1}{x_2 - x_1}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$m = \\frac{11 - 3}{6 - 2} = \\frac{8}{4} = 2$$\nGradien garis tersebut adalah **2** (Opsi A)."
        },
        {
          "id": "smp8-b5-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Gradien garis dengan bentuk persamaan implisit $3x + 2y - 6 = 0$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "-\\frac{3}{2}"
            },
            {
              "key": "B",
              "text": "\\frac{3}{2}"
            },
            {
              "key": "C",
              "text": "-\\frac{2}{3}"
            },
            {
              "key": "D",
              "text": "\\frac{2}{3}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Ubah persamaan ke bentuk $y = mx + c$ atau gunakan rumus cepat $m = -\\frac{a}{b}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$2y = -3x + 6 \\implies y = -\\frac{3}{2}x + 3$$\nGradiennya adalah **$-\\frac{3}{2}$** (Opsi A)."
        },
        {
          "id": "smp8-b5-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Titik potong garis $2x - 3y = 12$ dengan sumbu-X dan sumbu-Y berturut-turut adalah...",
          "options": [
            {
              "key": "A",
              "text": "(6, 0) dan (0, -4)"
            },
            {
              "key": "B",
              "text": "(0, 6) dan (-4, 0)"
            },
            {
              "key": "C",
              "text": "(4, 0) dan (0, -6)"
            },
            {
              "key": "D",
              "text": "(6, 0) dan (0, 4)"
            }
          ],
          "correctAnswer": "A",
          "hint": "Potong sumbu-X saat $y = 0$, potong sumbu-Y saat $x = 0$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Sumbu-X ($y=0$): $2x = 12 \\implies x = 6 \\implies (6, 0)$\n2. Sumbu-Y ($x=0$): $-3y = 12 \\implies y = -4 \\implies (0, -4)$ (Opsi A)."
        },
        {
          "id": "smp8-b5-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Persamaan garis yang bergradien 3 dan melalui titik $(2, 5)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "y = 3x - 1"
            },
            {
              "key": "B",
              "text": "y = 3x + 1"
            },
            {
              "key": "C",
              "text": "y = 3x - 5"
            },
            {
              "key": "D",
              "text": "y = 2x + 1"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan rumus persamaan garis satu titik: $y - y_1 = m(x - x_1)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$y - 5 = 3(x - 2) \\implies y - 5 = 3x - 6 \\implies y = 3x - 1$$ (Opsi A)."
        },
        {
          "id": "smp8-b5-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dua buah garis dikatakan saling sejajar jika...",
          "options": [
            {
              "key": "A",
              "text": "Gradien kedua garis bernilai sama (m1 = m2)"
            },
            {
              "key": "B",
              "text": "Hasil kali gradiennya bernilai -1 (m1 . m2 = -1)"
            },
            {
              "key": "C",
              "text": "Kedua garis berpotongan di titik (0, 0)"
            },
            {
              "key": "D",
              "text": "Jumlah gradiennya sama dengan 0"
            }
          ],
          "correctAnswer": "A",
          "hint": "Syarat dua garis sejajar adalah memiliki kemiringan (gradien) yang sama persis.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nDua garis sejajar jika memiliki kemiringan yang sama, yaitu **$m_1 = m_2$** (Opsi A)."
        },
        {
          "id": "smp8-b5-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Persamaan garis yang melalui titik $(3, -2)$ dan sejajar dengan garis $y = 2x + 7$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "y = 2x - 8"
            },
            {
              "key": "B",
              "text": "y = 2x + 8"
            },
            {
              "key": "C",
              "text": "y = -2x - 8"
            },
            {
              "key": "D",
              "text": "y = 2x - 4"
            }
          ],
          "correctAnswer": "A",
          "hint": "Karena sejajar, gradien garis baru adalah $m = 2$. Gunakan $y - y_1 = m(x - x_1)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$y - (-2) = 2(x - 3) \\implies y + 2 = 2x - 6 \\implies y = 2x - 8$$ (Opsi A)."
        },
        {
          "id": "smp8-b5-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Persamaan garis yang melalui titik $(1, 4)$ dan tegak lurus dengan garis $y = -\\frac{1}{3}x + 2$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "y = 3x + 1"
            },
            {
              "key": "B",
              "text": "y = -3x + 7"
            },
            {
              "key": "C",
              "text": "y = 3x - 1"
            },
            {
              "key": "D",
              "text": "y = \\frac{1}{3}x + 4"
            }
          ],
          "correctAnswer": "A",
          "hint": "Garis tegak lurus: $m_1 \\times m_2 = -1 \\implies -\\frac{1}{3} \\times m_2 = -1 \\implies m_2 = 3$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$y - 4 = 3(x - 1) \\implies y - 4 = 3x - 3 \\implies y = 3x + 1$$ (Opsi A)."
        },
        {
          "id": "smp8-b5-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Persamaan garis lurus yang melalui dua titik $A(1, 2)$ dan $B(3, 8)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "y = 3x - 1"
            },
            {
              "key": "B",
              "text": "y = 3x + 1"
            },
            {
              "key": "C",
              "text": "y = 2x + 2"
            },
            {
              "key": "D",
              "text": "y = 4x - 2"
            }
          ],
          "correctAnswer": "A",
          "hint": "Hitung gradien $m = \\frac{8 - 2}{3 - 1} = 3$, lalu masukkan ke salah satu titik.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $m = \\frac{8 - 2}{3 - 1} = \\frac{6}{2} = 3$\n2. $y - 2 = 3(x - 1) \\implies y = 3x - 1$ (Opsi A)."
        },
        {
          "id": "smp8-b5-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah mobil bergerak dengan kecepatan tetap. Jarak tempuh $s$ (km) setelah waktu $t$ (jam) dinyatakan oleh garis lurus pada grafik koordinat. Jika pada $t = 2$ jaraknya 120 km dan pada $t = 5$ jaraknya 300 km, kecepatan tetap mobil tersebut (gradien garis) adalah...",
          "options": [
            {
              "key": "A",
              "text": "60 km/jam"
            },
            {
              "key": "B",
              "text": "50 km/jam"
            },
            {
              "key": "C",
              "text": "70 km/jam"
            },
            {
              "key": "D",
              "text": "80 km/jam"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kecepatan adalah gradien garis jarak-waktu: $v = \\frac{s_2 - s_1}{t_2 - t_1}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$v = \\frac{300 - 120}{5 - 2} = \\frac{180}{3} = 60\\text{ km/jam}$$ (Opsi A)."
        },
        {
          "id": "smp8-b5-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Titik $P(a, 5)$ terletak pada garis $2x + 3y = 19$. Nilai dari $a$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "2"
            },
            {
              "key": "B",
              "text": "3"
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
          "correctAnswer": "A",
          "hint": "Substitusikan titik $(a, 5)$ ke dalam persamaan garis.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$2a + 3(5) = 19 \\implies 2a + 15 = 19 \\implies 2a = 4 \\implies a = 2$$ (Opsi A)."
        },
        {
          "id": "smp8-b5-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Titik potong antara garis $y = 2x - 1$ dan garis $x + y = 5$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "(2, 3)"
            },
            {
              "key": "B",
              "text": "(3, 2)"
            },
            {
              "key": "C",
              "text": "(1, 4)"
            },
            {
              "key": "D",
              "text": "(4, 1)"
            }
          ],
          "correctAnswer": "A",
          "hint": "Substitusikan persamaan pertama ke persamaan kedua: $x + (2x - 1) = 5$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $3x - 1 = 5 \\implies 3x = 6 \\implies x = 2$\n2. $y = 2(2) - 1 = 3$\nTitik potongnya adalah **(2, 3)** (Opsi A)."
        },
        {
          "id": "smp8-b5-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Persamaan garis yang melalui titik $(4, -1)$ dan tegak lurus terhadap garis $2x - 5y + 10 = 0$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "5x + 2y - 18 = 0"
            },
            {
              "key": "B",
              "text": "5x - 2y - 22 = 0"
            },
            {
              "key": "C",
              "text": "2x + 5y - 3 = 0"
            },
            {
              "key": "D",
              "text": "5x + 2y + 18 = 0"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gradien garis pertama $m_1 = \\frac{2}{5}$. Karena tegak lurus, $m_2 = -\\frac{5}{2}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $m_2 = -\\frac{5}{2}$\n2. $y - (-1) = -\\frac{5}{2}(x - 4) \\implies 2(y + 1) = -5(x - 4)$\n3. $2y + 2 = -5x + 20 \\implies 5x + 2y - 18 = 0$ (Opsi A)."
        },
        {
          "id": "smp8-b5-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Luas daerah segitiga yang dibentuk oleh garis $3x + 4y = 24$, sumbu-X, dan sumbu-Y adalah...",
          "options": [
            {
              "key": "A",
              "text": "24 satuan luas"
            },
            {
              "key": "B",
              "text": "12 satuan luas"
            },
            {
              "key": "C",
              "text": "48 satuan luas"
            },
            {
              "key": "D",
              "text": "36 satuan luas"
            }
          ],
          "correctAnswer": "A",
          "hint": "Cari titik potong garis dengan kedua sumbu koordinat sebagai panjang alas dan tinggi segitiga.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Potong sumbu-X: $3x = 24 \\implies x = 8 \\implies \\text{alas} = 8$\n2. Potong sumbu-Y: $4y = 24 \\implies y = 6 \\implies \\text{tinggi} = 6$\n3. Luas $= \\frac{1}{2} \\times 8 \\times 6 = 24\\text{ satuan luas}$ (Opsi A)."
        },
        {
          "id": "smp8-b5-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Garis $g$ melalui titik $(2, k)$ dan $(4, 7)$ memiliki gradien yang sama dengan garis yang melalui titik $(-1, 1)$ dan $(1, 5)$. Nilai dari $k$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "3"
            },
            {
              "key": "B",
              "text": "4"
            },
            {
              "key": "C",
              "text": "2"
            },
            {
              "key": "D",
              "text": "5"
            }
          ],
          "correctAnswer": "A",
          "hint": "Hitung gradien kedua titik yang diketahui, lalu samakan.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Gradien pembanding: $m = \\frac{5 - 1}{1 - (-1)} = \\frac{4}{2} = 2$\n2. Gradien garis $g$: $\\frac{7 - k}{4 - 2} = 2 \\implies 7 - k = 4 \\implies k = 3$ (Opsi A)."
        },
        {
          "id": "smp8-b5-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Jarak antara titik asal $(0, 0)$ ke garis $3x + 4y - 20 = 0$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "4 satuan"
            },
            {
              "key": "B",
              "text": "5 satuan"
            },
            {
              "key": "C",
              "text": "3 satuan"
            },
            {
              "key": "D",
              "text": "2 satuan"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan rumus jarak titik $(x_0, y_0)$ ke garis $ax + by + c = 0$: $d = \\frac{|ax_0 + by_0 + c|}{\\sqrt{a^2 + b^2}}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$d = \\frac{|3(0) + 4(0) - 20|}{\\sqrt{3^2 + 4^2}} = \\frac{|-20|}{\\sqrt{25}} = \\frac{20}{5} = 4\\text{ satuan}$$ (Opsi A)."
        }
      ]
    },
    {
      "id": "smp8-bab6-statistika",
      "title": "Bab 6: Statistika",
      "summary": {
        "overview": "Di lingkungan sekolah dan kehidupan bermasyarakat, kita selalu menjumpai kumpulan data: catatan tinggi dan berat badan siswa saat pemeriksaan kesehatan berkala, rekapitulasi nilai ujian harian, hingga data penjualan kantin sekolah setiap minggu. Namun, deretan angka mentah yang tidak teratur sangat sulit dipahami maknanya tanpa pengolahan statistik yang runtut. Begitu pula dalam dunia olahraga profesional, statistik performa pemain digunakan pelatih untuk merancang taktik pertandingan yang unggul.\n\nStatistika adalah cabang matematika terapan yang mempelajari cara mengumpulkan data, mengorganisasi data ke dalam tabel frekuensi, menyajikannya dalam bentuk diagram yang menarik, serta menganalisis karakteristik data melalui ukuran pemusatan dan ukuran penyebaran. Dengan mengetahui nilai rata-rata (mean), nilai tengah (median), dan nilai yang paling sering muncul (modus), guru dapat mengevaluasi efektivitas pembelajaran di kelas, dan pengelola bisnis dapat mengetahui produk apa yang paling diminati konsumen.\n\nBab ini membimbing siswa Kelas 8 menyajikan data ke dalam Diagram Batang, Diagram Garis, dan Diagram Lingkaran, menghitung secara presisi tiga ukuran pemusatan data tunggal (Mean, Median, Modus), serta mengukur sebaran variabilitas data melalui Jangkauan (Range) dan Jangkauan Interkuartil.",
        "coreConcepts": [
          "Mean (Rata-Rata Hitung): Jumlah seluruh nilai data dibagi dengan banyaknya data: $\\bar{x} = \\frac{\\Sigma x}{n}$.",
          "Median ($Me$): Nilai tengah dari sekumpulan data yang telah diurutkan dari nilai terkecil ke nilai terbesar. Jika banyaknya data $n$ ganjil, median tepat berada di data ke-$\\frac{n+1}{2}$. Jika $n$ genap, median adalah rata-rata dari dua data di tengah.",
          "Modus ($Mo$): Nilai data yang paling sering muncul (memiliki frekuensi paling tinggi). Sekumpulan data dapat memiliki satu modus (unimodal), dua modus (bimodal), atau tidak memiliki modus sama sekali.",
          "Ukuran Penyebaran Data:\n- Jangkauan (Range): Selisih antara nilai data terbesar dan nilai data terkecil: $R = x_{\\text{maks}} - x_{\\text{min}}$.\n- Kuartil: Tiga nilai pembagi yang membagi data terurut menjadi 4 bagian sama banyak: Kuartil Bawah ($Q_1$), Kuartil Tengah ($Q_2 = Me$), dan Kuartil Atas ($Q_3$).\n- Jangkauan Interkuartil: Selisih antara kuartil atas dan kuartil bawah: $QR = Q_3 - Q_1$."
        ],
        "workedExamples": [
          {
            "title": "Menghitung Mean, Median, dan Modus Data Tunggal",
            "problem": "Diberikan data nilai ulangan matematika 9 orang siswa sebagai berikut:\n$$7, 8, 6, 9, 7, 8, 7, 10, 8$$\nTentukan nilai mean, median, dan modus dari data tersebut.",
            "solution": "Langkah 1: Urutkan data dari yang terkecil:\n$$6, 7, 7, 7, 8, 8, 8, 9, 10 \\quad (n = 9)$$\n\nLangkah 2: Hitung mean (rata-rata):\n$$\\bar{x} = \\frac{6 + 7 + 7 + 7 + 8 + 8 + 8 + 9 + 10}{9} = \\frac{70}{9} \\approx 7{,}78$$\n\nLangkah 3: Hitung median (nilai tengah):\nKarena $n = 9$ (ganjil), median adalah data ke-$\\frac{9+1}{2} = 5$.\nData ke-5 pada urutan adalah **8**.\n\nLangkah 4: Tentukan modus:\nAngka 7 muncul 3 kali dan angka 8 muncul 3 kali. Keduanya merupakan frekuensi tertinggi.\nJadi, modusnya adalah **7 dan 8** (bimodal)."
          },
          {
            "title": "Menghitung Nilai Rata-Rata Gabungan",
            "problem": "Nilai rata-rata ulangan harian matematika dari 15 siswa putri adalah 80, sedangkan nilai rata-rata dari 10 siswa putra adalah 75. Berapakah nilai rata-rata gabungan seluruh kelas?",
            "solution": "Langkah 1: Hitung total nilai siswa putri: $15 \\times 80 = 1.200$.\n\nLangkah 2: Hitung total nilai siswa putra: $10 \\times 75 = 750$.\n\nLangkah 3: Hitung total nilai gabungan: $1.200 + 750 = 1.950$.\n\nLangkah 4: Hitung rata-rata gabungan dengan membagi total nilai dengan total siswa ($15 + 10 = 25$):\n$$\\bar{x}_{\\text{gab}} = \\frac{1.950}{25} = 78$$\nNilai rata-rata gabungan kelas adalah **78**."
          }
        ],
        "keyFormulas": [
          {
            "label": "Mean (Rata-Rata)",
            "formula": "\\bar{x} = \\frac{\\Sigma x}{n}"
          },
          {
            "label": "Jangkauan (Range)",
            "formula": "R = x_{\\text{maks}} - x_{\\text{min}}"
          },
          {
            "label": "Jangkauan Interkuartil",
            "formula": "QR = Q_3 - Q_1"
          },
          {
            "label": "Rata-Rata Gabungan",
            "formula": "\\bar{x}_{\\text{gab}} = \\frac{n_1 \\bar{x}_1 + n_2 \\bar{x}_2}{n_1 + n_2}"
          }
        ],
        "misconceptions": [
          "Mencari median langsung dari data acak tanpa mengurutkan data dari terkecil ke terbesar terlebih dahulu.",
          "Menjumlahkan rata-rata secara langsung pada rata-rata gabungan tanpa memperhitungkan bobot jumlah siswa pada masing-masing kelompok."
        ],
        "tutorTip": "Langkah pertama dan paling penting saat mengerjakan soal median dan kuartil: selalu URUTKAN datanya dari yang paling kecil terlebih dahulu!"
      },
      "questions": [
        {
          "id": "smp8-b6-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Rata-rata (mean) dari data nilai $7, 5, 8, 6, 9$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "7"
            },
            {
              "key": "B",
              "text": "6,5"
            },
            {
              "key": "C",
              "text": "7,5"
            },
            {
              "key": "D",
              "text": "8"
            }
          ],
          "correctAnswer": "A",
          "hint": "Jumlahkan semua nilai ($7+5+8+6+9=35$), lalu bagi dengan banyak data (5).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\bar{x} = \\frac{7 + 5 + 8 + 6 + 9}{5} = \\frac{35}{5} = 7$$\nRata-ratanya adalah **7** (Opsi A)."
        },
        {
          "id": "smp8-b6-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Median dari data $8, 6, 4, 9, 7, 5, 8$ adalah...",
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
              "text": "6"
            },
            {
              "key": "D",
              "text": "6,5"
            }
          ],
          "correctAnswer": "A",
          "hint": "Urutkan data: $4, 5, 6, 7, 8, 8, 9$. Ambil data yang berada tepat di posisi tengah.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Urutkan: $4, 5, 6, 7, 8, 8, 9$ (ada 7 data).\n2. Nilai tengah adalah data ke-4 yaitu **7** (Opsi A)."
        },
        {
          "id": "smp8-b6-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Modus dari data $6, 7, 8, 7, 9, 6, 7, 8, 10$ adalah...",
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
              "text": "6"
            },
            {
              "key": "D",
              "text": "7 dan 8"
            }
          ],
          "correctAnswer": "A",
          "hint": "Cari angka yang memiliki frekuensi kemunculan paling banyak: angka 7 muncul 3 kali.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n- Angka 6 muncul 2 kali\n- Angka 7 muncul 3 kali\n- Angka 8 muncul 2 kali\n- Angka 9 muncul 1 kali\n- Angka 10 muncul 1 kali\nModus data adalah **7** (Opsi A)."
        },
        {
          "id": "smp8-b6-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Jangkauan interkuartil ($QR$) dari sekumpulan data terurut: $3, 5, 6, 7, 8, 9, 10, 12$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "4"
            },
            {
              "key": "B",
              "text": "5"
            },
            {
              "key": "C",
              "text": "3"
            },
            {
              "key": "D",
              "text": "9"
            }
          ],
          "correctAnswer": "A",
          "hint": "Bagi data menjadi dua bagian: paruh bawah $\\{3, 5, 6, 7\\} \\implies Q_1 = \\frac{5+6}{2} = 5{,}5$, paruh atas $\\{8, 9, 10, 12\\} \\implies Q_3 = \\frac{9+10}{2} = 9{,}5$. Lalu hitung $Q_3 - Q_1$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Paruh bawah: $3, 5, 6, 7 \\implies Q_1 = \\frac{5 + 6}{2} = 5{,}5$.\n2. Paruh atas: $8, 9, 10, 12 \\implies Q_3 = \\frac{9 + 10}{2} = 9{,}5$.\n3. Jangkauan interkuartil:\n$$QR = Q_3 - Q_1 = 9{,}5 - 5{,}5 = 4$$\nJangkauan interkuartilnya adalah **4** (Opsi A)."
        },
        {
          "id": "smp8-b6-5",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Modus dari data nilai matematika: 7, 8, 6, 8, 9, 7, 8, 5, 8, 10 adalah...",
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
              "text": "7,5"
            }
          ],
          "correctAnswer": "A",
          "hint": "Modus adalah nilai data yang paling sering muncul (memiliki frekuensi tertinggi).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nAngka 8 muncul sebanyak 4 kali (frekuensi terbanyak). Jadi modusnya adalah **8** (Opsi A)."
        },
        {
          "id": "smp8-b6-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Median dari sekumpulan data: 4, 7, 5, 6, 9, 8, 7 adalah...",
          "options": [
            {
              "key": "A",
              "text": "7"
            },
            {
              "key": "B",
              "text": "6"
            },
            {
              "key": "C",
              "text": "6,5"
            },
            {
              "key": "D",
              "text": "8"
            }
          ],
          "correctAnswer": "A",
          "hint": "Urutkan data dari yang terkecil hingga terbesar, lalu cari nilai tengahnya.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Urutan data: 4, 5, 6, **7**, 7, 8, 9\n2. Karena banyak data ada 7 (ganjil), nilai tengahnya adalah data ke-4 yaitu **7** (Opsi A)."
        },
        {
          "id": "smp8-b6-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Nilai rata-rata (mean) dari data: 6, 8, 7, 9, 5, 10, 7, 8 adalah...",
          "options": [
            {
              "key": "A",
              "text": "7,5"
            },
            {
              "key": "B",
              "text": "7,25"
            },
            {
              "key": "C",
              "text": "8,0"
            },
            {
              "key": "D",
              "text": "7,0"
            }
          ],
          "correctAnswer": "A",
          "hint": "Mean diperoleh dengan menjumlahkan seluruh nilai data dibagi banyak data.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\bar{x} = \\frac{6 + 8 + 7 + 9 + 5 + 10 + 7 + 8}{8} = \\frac{60}{8} = 7{,}5$$\nNilai rata-ratanya adalah **7,5** (Opsi A)."
        },
        {
          "id": "smp8-b6-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Median dari data genap: 12, 14, 11, 15, 13, 16 adalah...",
          "options": [
            {
              "key": "A",
              "text": "13,5"
            },
            {
              "key": "B",
              "text": "13"
            },
            {
              "key": "C",
              "text": "14"
            },
            {
              "key": "D",
              "text": "14,5"
            }
          ],
          "correctAnswer": "A",
          "hint": "Urutkan data, lalu rata-ratakan dua nilai yang berada di posisi tengah.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Data berurutan: 11, 12, **13, 14**, 15, 16\n2. $\\text{Median} = \\frac{13 + 14}{2} = 13{,}5$ (Opsi A)."
        },
        {
          "id": "smp8-b6-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jangkauan (range) dari data: 15, 23, 18, 35, 20, 12, 28 adalah...",
          "options": [
            {
              "key": "A",
              "text": "23"
            },
            {
              "key": "B",
              "text": "20"
            },
            {
              "key": "C",
              "text": "25"
            },
            {
              "key": "D",
              "text": "22"
            }
          ],
          "correctAnswer": "A",
          "hint": "Jangkauan adalah selisih antara nilai datum terbesar dengan datum terkecil: $R = x_{\\max} - x_{\\min}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$R = 35 - 12 = 23$$\nJangkauan data tersebut adalah **23** (Opsi A)."
        },
        {
          "id": "smp8-b6-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Diberikan data nilai ulangan berikut: 5 (2 siswa), 6 (5 siswa), 7 (8 siswa), 8 (10 siswa), 9 (5 siswa). Nilai modus dari data tersebut adalah...",
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
              "text": "10"
            },
            {
              "key": "D",
              "text": "9"
            }
          ],
          "correctAnswer": "A",
          "hint": "Cari nilai ulangan yang memiliki frekuensi siswa terbanyak.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nNilai 8 diperoleh oleh 10 orang siswa (frekuensi tertinggi), sehingga modusnya adalah **8** (Opsi A)."
        },
        {
          "id": "smp8-b6-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Nilai rata-rata ulangan matematika dari 24 siswa adalah 75. Jika nilai dari 6 siswa lainnya digabungkan, nilai rata-ratanya menjadi 76. Nilai rata-rata dari 6 siswa tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "80"
            },
            {
              "key": "B",
              "text": "78"
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
          "correctAnswer": "A",
          "hint": "Gunakan rumus rata-rata gabungan: $\\bar{x}_{\\text{gab}} = \\frac{n_1 \\bar{x}_1 + n_2 \\bar{x}_2}{n_1 + n_2}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Total nilai awal: $24 \\times 75 = 1.800$\n2. Total nilai akhir: $(24 + 6) \\times 76 = 30 \\times 76 = 2.280$\n3. Total 6 siswa: $2.280 - 1.800 = 480$\n4. Rata-rata 6 siswa: $\\frac{480}{6} = 80$ (Opsi A)."
        },
        {
          "id": "smp8-b6-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Kuartil bawah ($Q_1$), median ($Q_2$), dan kuartil atas ($Q_3$) dari data: 3, 5, 6, 7, 8, 9, 10 berturut-turut adalah...",
          "options": [
            {
              "key": "A",
              "text": "5, 7, dan 9"
            },
            {
              "key": "B",
              "text": "6, 7, dan 8"
            },
            {
              "key": "C",
              "text": "5, 7, dan 10"
            },
            {
              "key": "D",
              "text": "3, 7, dan 9"
            }
          ],
          "correctAnswer": "A",
          "hint": "Bagi data menjadi dua bagian di kiri dan kanan median, lalu cari nilai tengah masing-masing bagian.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Median ($Q_2$) data ke-4 $= 7$\n2. Bagian kiri: 3, 5, 6 $\\implies Q_1 = 5$\n3. Bagian kanan: 8, 9, 10 $\\implies Q_3 = 9$\nNilai berturut-turut adalah **5, 7, dan 9** (Opsi A)."
        },
        {
          "id": "smp8-b6-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jangkauan interkuartil ($QR$) dari data: 4, 5, 6, 7, 9, 10, 12, 15 adalah...",
          "options": [
            {
              "key": "A",
              "text": "5,5"
            },
            {
              "key": "B",
              "text": "5"
            },
            {
              "key": "C",
              "text": "6"
            },
            {
              "key": "D",
              "text": "4,5"
            }
          ],
          "correctAnswer": "A",
          "hint": "Jangkauan interkuartil dirumuskan $QR = Q_3 - Q_1$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $Q_1 = \\frac{5 + 6}{2} = 5{,}5$\n2. $Q_3 = \\frac{10 + 12}{2} = 11$\n3. $QR = 11 - 5{,}5 = 5{,}5$ (Opsi A)."
        },
        {
          "id": "smp8-b6-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Diagram lingkaran menunjukkan kegemaran olahraga 120 siswa: Sepak Bola $150^\\circ$, Bulu Tangkis $90^\\circ$, Basket $60^\\circ$, dan sisanya Renang. Banyak siswa yang gemar renang adalah...",
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
              "text": "25 siswa"
            },
            {
              "key": "D",
              "text": "30 siswa"
            }
          ],
          "correctAnswer": "A",
          "hint": "Total sudut satu lingkaran adalah $360^\\circ$. Cari sudut renang lalu kalikan dengan proporsi siswa.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Sudut Renang: $360^\\circ - (150^\\circ + 90^\\circ + 60^\\circ) = 360^\\circ - 300^\\circ = 60^\\circ$\n2. Banyak siswa $= \\frac{60^\\circ}{360^\\circ} \\times 120 = \\frac{1}{6} \\times 120 = 20\\text{ siswa}$ (Opsi A)."
        },
        {
          "id": "smp8-b6-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Nilai rata-rata tes matematika dari 15 siswa putri adalah 80, sedangkan rata-rata 10 siswa putra adalah 75. Nilai rata-rata seluruh siswa di kelas tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "78"
            },
            {
              "key": "B",
              "text": "77,5"
            },
            {
              "key": "C",
              "text": "78,5"
            },
            {
              "key": "D",
              "text": "77"
            }
          ],
          "correctAnswer": "A",
          "hint": "Rata-rata gabungan $= \\frac{(15 \\times 80) + (10 \\times 75)}{15 + 10}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\bar{x} = \\frac{1.200 + 750}{25} = \\frac{1.950}{25} = 78$$\nRata-rata seluruh siswa adalah **78** (Opsi A)."
        },
        {
          "id": "smp8-b6-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Nilai rata-rata ulangan harian dari 30 siswa adalah 7,0. Jika seorang siswa dengan nilai 9,9 tidak diikutsertakan karena pindah sekolah, maka nilai rata-rata 29 siswa yang tersisa adalah...",
          "options": [
            {
              "key": "A",
              "text": "6,9"
            },
            {
              "key": "B",
              "text": "6,8"
            },
            {
              "key": "C",
              "text": "7,1"
            },
            {
              "key": "D",
              "text": "6,7"
            }
          ],
          "correctAnswer": "A",
          "hint": "Hitung total nilai baru lalu bagi dengan 29.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Total nilai awal: $30 \\times 7{,}0 = 210$\n2. Total nilai baru: $210 - 9{,}9 = 200{,}1$\n3. Rata-rata baru: $\\frac{200{,}1}{29} = 6{,}9$ (Opsi A)."
        },
        {
          "id": "smp8-b6-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Diberikan sekumpulan data: $x, 4, 7, 8, 9, 11$. Jika median data tersebut adalah 7,5 dan $x$ adalah bilangan bulat positif terkecil, maka nilai mean data tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "7"
            },
            {
              "key": "B",
              "text": "7,5"
            },
            {
              "key": "C",
              "text": "6,8"
            },
            {
              "key": "D",
              "text": "7,2"
            }
          ],
          "correctAnswer": "A",
          "hint": "Karena median 7,5 dari 6 data, maka dua nilai tengah yang dirata-ratakan adalah 7 dan 8. Maka $x \\le 4$. Jika $x=3$, periksa mean.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Karena dua nilai tengah adalah 7 dan 8, urutan data: $x, 4, 7, 8, 9, 11$.\n2. Jika $x = 3$, mean $= \\frac{3 + 4 + 7 + 8 + 9 + 11}{6} = \\frac{42}{6} = 7$ (Opsi A)."
        },
        {
          "id": "smp8-b6-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Jika setiap nilai data pada sekumpulan data dikalikan dengan 2 kemudian dikurangi 3, maka yang terjadi pada nilai rata-rata (mean) dan jangkauan (range) adalah...",
          "options": [
            {
              "key": "A",
              "text": "Mean menjadi 2x - 3 dan range menjadi 2x semula"
            },
            {
              "key": "B",
              "text": "Mean dan range keduanya menjadi 2x - 3"
            },
            {
              "key": "C",
              "text": "Mean tetap dan range menjadi 2x semula"
            },
            {
              "key": "D",
              "text": "Mean menjadi 2x - 3 dan range tetap"
            }
          ],
          "correctAnswer": "A",
          "hint": "Operasi penjumlahan/pengurangan menggeser mean tetapi tidak mengubah ukuran penyebaran (range). Operasi perkalian mengalikan mean dan range.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Mean baru $= 2 \\times \\text{mean lama} - 3$\n2. Range baru $= 2 \\times \\text{range lama}$ (operasi pengurangan tidak mengubah selisih) (Opsi A)."
        },
        {
          "id": "smp8-b6-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dalam suatu tes, skor rata-rata siswa yang lulus adalah 82, sedangkan skor rata-rata siswa yang tidak lulus adalah 62. Jika skor rata-rata seluruh siswa adalah 74, maka persentase siswa yang lulus tes adalah...",
          "options": [
            {
              "key": "A",
              "text": "60%"
            },
            {
              "key": "B",
              "text": "50%"
            },
            {
              "key": "C",
              "text": "65%"
            },
            {
              "key": "D",
              "text": "70%"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan aturan perbandingan rata-rata gabungan atau perbandingan selisih.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Selisih lulus ke gabungan: $82 - 74 = 8$\n2. Selisih tidak lulus ke gabungan: $74 - 62 = 12$\n3. Rasio (lulus : tidak lulus) $= 12 : 8 = 3 : 2$\n4. Persentase lulus $= \\frac{3}{3 + 2} \\times 100\\% = 60\\%$ (Opsi A)."
        },
        {
          "id": "smp8-b6-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Lima orang anak memiliki tinggi badan rata-rata 150 cm. Tidak ada anak yang tingginya kurang dari 142 cm. Tinggi maksimal yang mungkin dicapai oleh anak tertinggi di antara kelima anak tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "182 cm"
            },
            {
              "key": "B",
              "text": "175 cm"
            },
            {
              "key": "C",
              "text": "180 cm"
            },
            {
              "key": "D",
              "text": "178 cm"
            }
          ],
          "correctAnswer": "A",
          "hint": "Agar salah satu anak mencapai tinggi maksimal, 4 anak lainnya harus memiliki tinggi minimal (142 cm).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Total tinggi 5 anak $= 5 \\times 150 = 750\\text{ cm}$\n2. Tinggi minimal 4 anak $= 4 \\times 142 = 568\\text{ cm}$\n3. Tinggi maksimal anak ke-5 $= 750 - 568 = 182\\text{ cm}$ (Opsi A)."
        }
      ]
    }
  ]
};
