/**
 * Data Kurikulum Kelas 7 SMP (Fase D)
 * 6 Bab Wajib Resmi Sesuai Buku Siswa Matematika
 */

export const grade7Data = {
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
          {
            "label": "Lawan Bilangan Negatif",
            "formula": "a - (-b) = a + b"
          },
          {
            "label": "Perkalian Tanda Sama",
            "formula": "(-) \\times (-) = (+)"
          },
          {
            "label": "Perkalian Tanda Beda",
            "formula": "(+) \\times (-) = (-)"
          }
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
            {
              "key": "A",
              "text": "-10"
            },
            {
              "key": "B",
              "text": "-14"
            },
            {
              "key": "C",
              "text": "4"
            },
            {
              "key": "D",
              "text": "0"
            }
          ],
          "correctAnswer": "D",
          "hint": "Ubah $-(-5)$ menjadi $+5$, lalu operasikan dari kiri: $-12 + 7 + 5$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $-12 + 7 = -5$\n2. $-5 - (-5) = -5 + 5 = 0$\nHasilnya adalah **0** (Opsi D)."
        },
        {
          "id": "smp7-b1-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Hasil dari $(-6) \\times 4 : (-2)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "-12"
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
              "text": "-8"
            }
          ],
          "correctAnswer": "C",
          "hint": "Perkalian tanda beda menghasilkan negatif: $(-6) \\times 4 = -24$. Lalu negatif dibagi negatif menghasilkan positif.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $(-6) \\times 4 = -24$\n2. $-24 : (-2) = 12$\nHasilnya adalah **12** (Opsi C)."
        },
        {
          "id": "smp7-b1-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Suhu mula-mula suatu ruangan pendingin adalah $-4^\\circ\\text{C}$. Ruangan tersebut kemudian diturunkan suhunya sebesar $7^\\circ\\text{C}$. Suhu ruangan pendingin sekarang adalah...",
          "options": [
            {
              "key": "A",
              "text": "$-11^\\circ\\text{C}$"
            },
            {
              "key": "B",
              "text": "$3^\\circ\\text{C}$"
            },
            {
              "key": "C",
              "text": "$-3^\\circ\\text{C}$"
            },
            {
              "key": "D",
              "text": "$11^\\circ\\text{C}$"
            }
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
            {
              "key": "A",
              "text": "112"
            },
            {
              "key": "B",
              "text": "115"
            },
            {
              "key": "C",
              "text": "105"
            },
            {
              "key": "D",
              "text": "109"
            }
          ],
          "correctAnswer": "D",
          "hint": "Hitung jumlah soal yang dijawab salah terlebih dahulu: $40 - 31 - 3 = 6$ soal salah.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Soal salah: $40 - (31 + 3) = 40 - 34 = 6$ soal.\n2. Hitung skor perolehan:\n- Benar: $31 \\times 4 = 124$\n- Salah: $6 \\times (-2) = -12$\n- Tidak dijawab: $3 \\times (-1) = -3$\n3. Total skor:\n$$\\text{Total} = 124 + (-12) + (-3) = 124 - 15 = 109$$\nTotal skor yang diperoleh adalah **109** (Opsi D)."
        },
        {
          "id": "smp7-b1-5",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Hasil dari operasi $-15 + (-28)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "43"
            },
            {
              "key": "B",
              "text": "-43"
            },
            {
              "key": "C",
              "text": "-13"
            },
            {
              "key": "D",
              "text": "13"
            }
          ],
          "correctAnswer": "B",
          "hint": "Penjumlahan dua bilangan negatif menghasilkan bilangan negatif dengan menjumlahkan nilai mutlaknya: $-(15 + 28)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$-15 + (-28) = -(15 + 28) = -43$$ (Opsi B)."
        },
        {
          "id": "smp7-b1-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil dari $(-8) \\times (-12)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "-96"
            },
            {
              "key": "B",
              "text": "84"
            },
            {
              "key": "C",
              "text": "-84"
            },
            {
              "key": "D",
              "text": "96"
            }
          ],
          "correctAnswer": "D",
          "hint": "Perkalian dua bilangan bulat bertanda sama (negatif kali negatif) menghasilkan bilangan positif: $(-a) \\times (-b) = a \\times b$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$(-8) \\times (-12) = 96$$ (Opsi D)."
        },
        {
          "id": "smp7-b1-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil dari $(-72) : 8$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "9"
            },
            {
              "key": "B",
              "text": "-9"
            },
            {
              "key": "C",
              "text": "-8"
            },
            {
              "key": "D",
              "text": "8"
            }
          ],
          "correctAnswer": "B",
          "hint": "Pembagian bilangan berbeda tanda (negatif dibagi positif) menghasilkan bilangan negatif.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$(-72) : 8 = -9$$ (Opsi B)."
        },
        {
          "id": "smp7-b1-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil dari operasi hitung campuran $18 - (-6) \\times 4 + (-10)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "32"
            },
            {
              "key": "B",
              "text": "6"
            },
            {
              "key": "C",
              "text": "40"
            },
            {
              "key": "D",
              "text": "-16"
            }
          ],
          "correctAnswer": "A",
          "hint": "Dahulukan operasi perkalian: $(-6) \\times 4 = -24$. Kemudian $18 - (-24) + (-10) = 18 + 24 - 10 = 32$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $(-6) \\times 4 = -24$\n2. $18 - (-24) + (-10) = 18 + 24 - 10 = 32$ (Opsi A)."
        },
        {
          "id": "smp7-b1-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Suhu udara di kota Tokyo pada pagi hari adalah $-3^\\circ\\text{C}$. Pada siang hari suhu naik sebesar $8^\\circ\\text{C}$, kemudian pada malam hari turun sebesar $6^\\circ\\text{C}$. Suhu udara pada malam hari adalah...",
          "options": [
            {
              "key": "A",
              "text": "1°C"
            },
            {
              "key": "B",
              "text": "-5°C"
            },
            {
              "key": "C",
              "text": "2°C"
            },
            {
              "key": "D",
              "text": "-1°C"
            }
          ],
          "correctAnswer": "D",
          "hint": "Operasikan: $-3 + 8 - 6 = 5 - 6 = -1^\\circ\\text{C}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$-3 + 8 - 6 = -1^\\circ\\text{C}$$ (Opsi D)."
        },
        {
          "id": "smp7-b1-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Seorang penyelam berada pada kedalaman 18 meter di bawah permukaan laut. Penyelam tersebut naik sejauh 7 meter, lalu menyelam lagi sedalam 4 meter. Posisi penyelam sekarang berada pada kedalaman...",
          "options": [
            {
              "key": "A",
              "text": "21 meter di bawah permukaan laut"
            },
            {
              "key": "B",
              "text": "15 meter di bawah permukaan laut"
            },
            {
              "key": "C",
              "text": "11 meter di bawah permukaan laut"
            },
            {
              "key": "D",
              "text": "17 meter di bawah permukaan laut"
            }
          ],
          "correctAnswer": "B",
          "hint": "Posisi awal $-18$. Naik $+7$, turun $-4$: $-18 + 7 - 4 = -15$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$-18 + 7 - 4 = -15\\text{ meter}$$ (Opsi B)."
        },
        {
          "id": "smp7-b1-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dalam kompetisi matematika, setiap jawaban benar diberi skor 4, salah diberi skor -2, dan tidak dijawab diberi skor 0. Dari 40 soal, Ahmad menjawab benar 31 soal dan tidak menjawab 3 soal. Skor yang diperoleh Ahmad adalah...",
          "options": [
            {
              "key": "A",
              "text": "118"
            },
            {
              "key": "B",
              "text": "124"
            },
            {
              "key": "C",
              "text": "112"
            },
            {
              "key": "D",
              "text": "106"
            }
          ],
          "correctAnswer": "C",
          "hint": "Soal salah $= 40 - 31 - 3 = 6$. Total skor $= (31 \\times 4) + (6 \\times (-2)) + (3 \\times 0) = 124 - 12 = 112$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Skor} = (31 \\times 4) + (6 \\times (-2)) = 124 - 12 = 112$$ (Opsi C)."
        },
        {
          "id": "smp7-b1-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Suhu daging di dalam freezer mula-mula adalah $-12^\\circ\\text{C}$. Daging tersebut dikeluarkan dan didiamkan sehingga suhunya naik rata-rata $3^\\circ\\text{C}$ setiap 5 menit. Suhu daging setelah 25 menit adalah...",
          "options": [
            {
              "key": "A",
              "text": "-3°C"
            },
            {
              "key": "B",
              "text": "3°C"
            },
            {
              "key": "C",
              "text": "0°C"
            },
            {
              "key": "D",
              "text": "5°C"
            }
          ],
          "correctAnswer": "B",
          "hint": "Kenaikan terjadi sebanyak $25 : 5 = 5$ kali. Kenaikan $= 5 \\times 3 = 15^\\circ\\text{C}$. Suhu akhir $= -12 + 15 = 3^\\circ\\text{C}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$-12 + \\left(\\frac{25}{5} \\times 3\\right) = -12 + 15 = 3^\\circ\\text{C}$$ (Opsi B)."
        },
        {
          "id": "smp7-b1-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Nilai dari $|-25| - |14| + |-8|$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "19"
            },
            {
              "key": "B",
              "text": "3"
            },
            {
              "key": "C",
              "text": "-29"
            },
            {
              "key": "D",
              "text": "21"
            }
          ],
          "correctAnswer": "A",
          "hint": "Nilai mutlak selalu non-negatif: $|-25| = 25$, $|14| = 14$, $|-8| = 8$. Hitung $25 - 14 + 8 = 19$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$25 - 14 + 8 = 19$$ (Opsi A)."
        },
        {
          "id": "smp7-b1-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Faktor persekutuan terbesar (FPB) dari 48 dan 72 adalah...",
          "options": [
            {
              "key": "A",
              "text": "12"
            },
            {
              "key": "B",
              "text": "16"
            },
            {
              "key": "C",
              "text": "24"
            },
            {
              "key": "D",
              "text": "8"
            }
          ],
          "correctAnswer": "C",
          "hint": "Faktorisasi prima: $48 = 2^4 \\times 3$ dan $72 = 2^3 \\times 3^2$. $\\text{FPB} = 2^3 \\times 3 = 24$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{FPB} = 2^3 \\times 3 = 24$$ (Opsi C)."
        },
        {
          "id": "smp7-b1-15",
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
          "hint": "$12 = 2^2 \\times 3$, $18 = 2 \\times 3^2$, $24 = 2^3 \\times 3$. $\\text{KPK} = 2^3 \\times 3^2 = 8 \\times 9 = 72$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{KPK} = 2^3 \\times 3^2 = 72$$ (Opsi A)."
        },
        {
          "id": "smp7-b1-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Tiga buah lampu dinyalakan bersamaan. Lampu merah menyala setiap 6 detik, lampu kuning setiap 8 detik, dan lampu hijau setiap 12 detik. Ketiga lampu akan menyala bersamaan untuk kedua kalinya setelah...",
          "options": [
            {
              "key": "A",
              "text": "36 detik"
            },
            {
              "key": "B",
              "text": "48 detik"
            },
            {
              "key": "C",
              "text": "18 detik"
            },
            {
              "key": "D",
              "text": "24 detik"
            }
          ],
          "correctAnswer": "D",
          "hint": "Cari KPK dari 6, 8, dan 12: $\\text{KPK}(6, 8, 12) = 24$ detik.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{KPK}(6, 8, 12) = 24\\text{ detik}$$ (Opsi D)."
        },
        {
          "id": "smp7-b1-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Jika $a = -3, b = 2,$ dan $c = -4$, maka nilai dari $\\frac{a^2 - 2bc}{a + b + c}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "-5"
            },
            {
              "key": "B",
              "text": "5"
            },
            {
              "key": "C",
              "text": "-3"
            },
            {
              "key": "D",
              "text": "4"
            }
          ],
          "correctAnswer": "A",
          "hint": "Pembilang: $(-3)^2 - 2(2)(-4) = 9 - (-16) = 25$. Penyebut: $-3 + 2 - 4 = -5$. Nilai $= \\frac{25}{-5} = -5$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{(-3)^2 - 2(2)(-4)}{-3 + 2 - 4} = \\frac{9 + 16}{-5} = \\frac{25}{-5} = -5$$ (Opsi A)."
        },
        {
          "id": "smp7-b1-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Di sebuah ruang pendingin, suhu mula-mula adalah $25^\\circ\\text{C}$. Mesin pendingin dinyalakan sehingga suhu turun $2^\\circ\\text{C}$ setiap 3 menit. Setelah beberapa menit, suhu ruang menjadi $-7^\\circ\\text{C}$. Lama mesin pendingin telah beroperasi adalah...",
          "options": [
            {
              "key": "A",
              "text": "45 menit"
            },
            {
              "key": "B",
              "text": "48 menit"
            },
            {
              "key": "C",
              "text": "42 menit"
            },
            {
              "key": "D",
              "text": "50 menit"
            }
          ],
          "correctAnswer": "B",
          "hint": "Total penurunan suhu $= 25 - (-7) = 32^\\circ\\text{C}$. Banyak kali penurunan $= 32 : 2 = 16$ kali. Waktu $= 16 \\times 3 = 48$ menit.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Penurunan suhu: $25 - (-7) = 32^\\circ\\text{C}$\n2. Waktu: $\\frac{32}{2} \\times 3 = 48\\text{ menit}$ (Opsi B)."
        },
        {
          "id": "smp7-b1-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Banyaknya bilangan bulat antara $-50$ dan $50$ yang habis dibagi 4 tetapi tidak habis dibagi 6 adalah...",
          "options": [
            {
              "key": "A",
              "text": "24"
            },
            {
              "key": "B",
              "text": "8"
            },
            {
              "key": "C",
              "text": "16"
            },
            {
              "key": "D",
              "text": "20"
            }
          ],
          "correctAnswer": "C",
          "hint": "Kelipatan 4 antara -50 dan 50: $\\pm 4, \\pm 8, \\dots, \\pm 48$ (ada $12 \\times 2 = 24$ bilangan, tambah 0 jika non-nol atau cek batas). Antara -50 dan 50: kelipatan 4 positif ada 12 (4..48), negatif ada 12 (-4..-48), total 24 (tidak termasuk 0). Kelipatan 12 (KPK 4 dan 6): positif ada 4 (12,24,36,48), negatif ada 4 (-12,-24,-36,-48), total 8. Sisa $= 24 - 8 = 16$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Kelipatan 4: $12 + 12 = 24$\n2. Kelipatan 12: $4 + 4 = 8$\n3. Banyak bilangan: $24 - 8 = 16$ (Opsi C)."
        },
        {
          "id": "smp7-b1-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dua bilangan bulat $p$ dan $q$ memenuhi $p + q = -5$ dan $p \\times q = -36$. Jika $p > q$, maka nilai dari $p - q$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "11"
            },
            {
              "key": "B",
              "text": "9"
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
          "correctAnswer": "C",
          "hint": "Faktor dari $-36$ dengan jumlah $-5$ adalah $4$ dan $-9$. Karena $p > q$, maka $p = 4$ dan $q = -9$. $p - q = 4 - (-9) = 13$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $p = 4$ dan $q = -9$\n2. $p - q = 4 - (-9) = 13$ (Opsi C)."
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
          {
            "label": "Perkalian Pecahan",
            "formula": "\\frac{a}{b} \\times \\frac{c}{d} = \\frac{ac}{bd}"
          },
          {
            "label": "Pembagian Pecahan",
            "formula": "\\frac{a}{b} : \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}"
          }
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
            {
              "key": "A",
              "text": "$\\frac{3}{7}$"
            },
            {
              "key": "B",
              "text": "$\\frac{3}{12}$"
            },
            {
              "key": "C",
              "text": "$\\frac{11}{12}$"
            },
            {
              "key": "D",
              "text": "$\\frac{5}{12}$"
            }
          ],
          "correctAnswer": "C",
          "hint": "Samakan penyebut dengan KPK dari 3 dan 4, yaitu 12.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{2}{3} + \\frac{1}{4} = \\frac{8}{12} + \\frac{3}{12} = \\frac{11}{12}$$\nHasilnya adalah **$\\frac{11}{12}$** (Opsi C)."
        },
        {
          "id": "smp7-b2-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Hasil perkalian pecahan $\\frac{3}{5} \\times \\frac{10}{9}$ dalam bentuk paling sederhana adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\frac{2}{3}$"
            },
            {
              "key": "B",
              "text": "$\\frac{30}{45}$"
            },
            {
              "key": "C",
              "text": "$\\frac{1}{2}$"
            },
            {
              "key": "D",
              "text": "$\\frac{5}{6}$"
            }
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
            {
              "key": "A",
              "text": "$\\frac{3}{8}$"
            },
            {
              "key": "B",
              "text": "$\\frac{375}{100}$"
            },
            {
              "key": "C",
              "text": "$\\frac{7}{20}$"
            },
            {
              "key": "D",
              "text": "$\\frac{5}{16}$"
            }
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
            {
              "key": "A",
              "text": "48 botol"
            },
            {
              "key": "B",
              "text": "52 botol"
            },
            {
              "key": "C",
              "text": "50 botol"
            },
            {
              "key": "D",
              "text": "25 botol"
            }
          ],
          "correctAnswer": "C",
          "hint": "Ubah ke pecahan biasa: $12\\frac{1}{2} = \\frac{25}{2}$, lalu bagi dengan $\\frac{1}{4}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Banyak botol} = \\frac{25}{2} : \\frac{1}{4} = \\frac{25}{2} \\times \\frac{4}{1} = \\frac{100}{2} = 50$$\nBanyak botol yang diperlukan adalah **50 botol** (Opsi C)."
        },
        {
          "id": "smp7-b2-5",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Bilangan rasional adalah bilangan yang dapat dinyatakan dalam bentuk $\\frac{a}{b}$ dengan syarat...",
          "options": [
            {
              "key": "A",
              "text": "a dan b bilangan asli"
            },
            {
              "key": "B",
              "text": "a dan b bilangan bulat serta b != 0"
            },
            {
              "key": "C",
              "text": "a dan b bilangan cacah"
            },
            {
              "key": "D",
              "text": "b boleh bernilai nol"
            }
          ],
          "correctAnswer": "B",
          "hint": "Definisi formal bilangan rasional $\\mathbb{Q} = \\{\\frac{a}{b} \\mid a, b \\in \\mathbb{Z}, b \\neq 0\\}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nSyaratnya adalah **$a, b \\in \\mathbb{Z}$ dan $b \\neq 0$** (Opsi B)."
        },
        {
          "id": "smp7-b2-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bentuk pecahan biasa paling sederhana dari bilangan desimal berulang $0{,}333\\dots$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{3}{10}"
            },
            {
              "key": "B",
              "text": "\\frac{1}{3}"
            },
            {
              "key": "C",
              "text": "\\frac{33}{100}"
            },
            {
              "key": "D",
              "text": "\\frac{1}{4}"
            }
          ],
          "correctAnswer": "B",
          "hint": "Misalkan $x = 0{,}333... \\implies 10x = 3{,}333... \\implies 9x = 3 \\implies x = \\frac{1}{3}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$9x = 3 \\implies x = \\frac{1}{3}$$ (Opsi B)."
        },
        {
          "id": "smp7-b2-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil dari operasi $-\\frac{2}{3} + \\frac{5}{6}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "-\\frac{1}{6}"
            },
            {
              "key": "B",
              "text": "\\frac{3}{6}"
            },
            {
              "key": "C",
              "text": "\\frac{7}{6}"
            },
            {
              "key": "D",
              "text": "\\frac{1}{6}"
            }
          ],
          "correctAnswer": "D",
          "hint": "Samakan penyebut menjadi 6: $-\\frac{4}{6} + \\frac{5}{6} = \\frac{1}{6}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$-\\frac{4}{6} + \\frac{5}{6} = \\frac{1}{6}$$ (Opsi D)."
        },
        {
          "id": "smp7-b2-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil dari $-\\frac{3}{4} \\times \\left(-\\frac{8}{9}\\right)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "-\\frac{2}{3}"
            },
            {
              "key": "B",
              "text": "\\frac{6}{13}"
            },
            {
              "key": "C",
              "text": "\\frac{2}{3}"
            },
            {
              "key": "D",
              "text": "-\\frac{24}{36}"
            }
          ],
          "correctAnswer": "C",
          "hint": "Negatif kali negatif menghasilkan positif: $\\frac{3 \\times 8}{4 \\times 9} = \\frac{24}{36} = \\frac{2}{3}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{3 \\times 8}{4 \\times 9} = \\frac{24}{36} = \\frac{2}{3}$$ (Opsi C)."
        },
        {
          "id": "smp7-b2-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil pembagian $-\\frac{5}{8} : \\frac{15}{16}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "-\\frac{2}{3}"
            },
            {
              "key": "B",
              "text": "\\frac{2}{3}"
            },
            {
              "key": "C",
              "text": "-\\frac{3}{2}"
            },
            {
              "key": "D",
              "text": "\\frac{75}{128}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Ubah pembagian menjadi perkalian dengan kebalikan: $-\\frac{5}{8} \\times \\frac{16}{15} = -\\frac{1 \\times 2}{1 \\times 3} = -\\frac{2}{3}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$-\\frac{5}{8} \\times \\frac{16}{15} = -\\frac{2}{3}$$ (Opsi A)."
        },
        {
          "id": "smp7-b2-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bentuk desimal dari pecahan $-\\frac{7}{8}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "-0,78"
            },
            {
              "key": "B",
              "text": "-0,85"
            },
            {
              "key": "C",
              "text": "-0,825"
            },
            {
              "key": "D",
              "text": "-0,875"
            }
          ],
          "correctAnswer": "D",
          "hint": "Bagi 7 dengan 8: $7 : 8 = 0{,}875$, sehingga $-\\frac{7}{8} = -0{,}875$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$-\\frac{7}{8} = -0{,}875$$ (Opsi D)."
        },
        {
          "id": "smp7-b2-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Urutan bilangan $-0{,}75$; $-\\frac{4}{5}$; $-0{,}6$; $-\\frac{1}{2}$ dari yang terkecil ke terbesar adalah...",
          "options": [
            {
              "key": "A",
              "text": "-4/5; -0,75; -0,6; -1/2"
            },
            {
              "key": "B",
              "text": "-1/2; -0,6; -0,75; -4/5"
            },
            {
              "key": "C",
              "text": "-0,75; -4/5; -0,6; -1/2"
            },
            {
              "key": "D",
              "text": "-0,6; -1/2; -4/5; -0,75"
            }
          ],
          "correctAnswer": "A",
          "hint": "Ubah semua ke desimal: $-\\frac{4}{5} = -0{,}80$, $-0{,}75$, $-0{,}60$, $-\\frac{1}{2} = -0{,}50$. Semakin ke kiri di garis bilangan nilainya semakin kecil.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nUrutan naik: **-4/5; -0,75; -0,6; -1/2** (Opsi A)."
        },
        {
          "id": "smp7-b2-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil dari operasi campuran $\\left(-\\frac{1}{2} + 0{,}75\\right) : \\left(-\\frac{1}{4}\\right)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "1"
            },
            {
              "key": "B",
              "text": "-0,5"
            },
            {
              "key": "C",
              "text": "0,5"
            },
            {
              "key": "D",
              "text": "-1"
            }
          ],
          "correctAnswer": "D",
          "hint": "Dalam kurung: $-0{,}5 + 0{,}75 = 0{,}25 = \\frac{1}{4}$. Pembagian: $\\frac{1}{4} : \\left(-\\frac{1}{4}\\right) = -1$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{1}{4} : \\left(-\\frac{1}{4}\\right) = -1$$ (Opsi D)."
        },
        {
          "id": "smp7-b2-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Ibu mempunyai persediaan terigu sebanyak $3\\frac{1}{2}$ kg. Digunakan untuk membuat kue bolu $1\\frac{3}{4}$ kg dan kue nastar 0,8 kg. Sisa terigu Ibu adalah...",
          "options": [
            {
              "key": "A",
              "text": "1,05 kg"
            },
            {
              "key": "B",
              "text": "0,85 kg"
            },
            {
              "key": "C",
              "text": "0,95 kg"
            },
            {
              "key": "D",
              "text": "1,15 kg"
            }
          ],
          "correctAnswer": "C",
          "hint": "Ubah ke desimal: $3{,}5 - 1{,}75 - 0{,}8 = 1{,}75 - 0{,}8 = 0{,}95$ kg.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$3{,}5 - 1{,}75 - 0{,}8 = 0{,}95\\text{ kg}$$ (Opsi C)."
        },
        {
          "id": "smp7-b2-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bentuk pecahan biasa paling sederhana dari desimal berulang $0{,}454545\\dots$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{9}{20}"
            },
            {
              "key": "B",
              "text": "\\frac{5}{11}"
            },
            {
              "key": "C",
              "text": "\\frac{45}{100}"
            },
            {
              "key": "D",
              "text": "\\frac{4}{9}"
            }
          ],
          "correctAnswer": "B",
          "hint": "$100x - x = 45 \\implies 99x = 45 \\implies x = \\frac{45}{99} = \\frac{5}{11}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$x = \\frac{45}{99} = \\frac{5}{11}$$ (Opsi B)."
        },
        {
          "id": "smp7-b2-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bilangan rasional yang terletak tepat di tengah-tengah antara $\\frac{1}{3}$ dan $\\frac{1}{2}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{2}{5}"
            },
            {
              "key": "B",
              "text": "\\frac{5}{12}"
            },
            {
              "key": "C",
              "text": "\\frac{7}{12}"
            },
            {
              "key": "D",
              "text": "\\frac{3}{8}"
            }
          ],
          "correctAnswer": "B",
          "hint": "Rata-rata: $\\frac{1}{2}\\left(\\frac{1}{3} + \\frac{1}{2}\\right) = \\frac{1}{2}\\left(\\frac{5}{6}\\right) = \\frac{5}{12}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{\\frac{1}{3} + \\frac{1}{2}}{2} = \\frac{5}{12}$$ (Opsi B)."
        },
        {
          "id": "smp7-b2-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Nilai dari $1 - \\frac{1}{1 + \\frac{1}{2}}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{2}{3}"
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
          "correctAnswer": "D",
          "hint": "Penyebut: $1 + \\frac{1}{2} = \\frac{3}{2}$. Kebalikan: $\\frac{1}{\\frac{3}{2}} = \\frac{2}{3}$. Hasil $= 1 - \\frac{2}{3} = \\frac{1}{3}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$1 - \\frac{2}{3} = \\frac{1}{3}$$ (Opsi D)."
        },
        {
          "id": "smp7-b2-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Hasil dari operasi beruntun $\\left(1 - \\frac{1}{2}\\right)\\left(1 - \\frac{1}{3}\\right)\\left(1 - \\frac{1}{4}\\right)\\dots\\left(1 - \\frac{1}{10}\\right)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{1}{5}"
            },
            {
              "key": "B",
              "text": "\\frac{9}{10}"
            },
            {
              "key": "C",
              "text": "\\frac{1}{10}"
            },
            {
              "key": "D",
              "text": "\\frac{1}{20}"
            }
          ],
          "correctAnswer": "C",
          "hint": "Perkalian teleskopik: $\\frac{1}{2} \\times \\frac{2}{3} \\times \\frac{3}{4} \\times \\dots \\times \\frac{9}{10} = \\frac{1}{10}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{1}{2} \\times \\frac{2}{3} \\times \\frac{3}{4} \\times \\dots \\times \\frac{9}{10} = \\frac{1}{10}$$ (Opsi C)."
        },
        {
          "id": "smp7-b2-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah tangki bensin terisi $\\frac{3}{8}$ bagian. Ketika ditambahkan 15 liter bensin, tangki tersebut terisi $\\frac{3}{4}$ bagian. Kapasitas penuh tangki tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "40 liter"
            },
            {
              "key": "B",
              "text": "36 liter"
            },
            {
              "key": "C",
              "text": "48 liter"
            },
            {
              "key": "D",
              "text": "32 liter"
            }
          ],
          "correctAnswer": "A",
          "hint": "Selisih bagian: $\\frac{3}{4} - \\frac{3}{8} = \\frac{3}{8}$ bagian $= 15$ liter. Kapasitas penuh $= 15 \\times \\frac{8}{3} = 40$ liter.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Kapasitas} = 15 : \\frac{3}{8} = 40\\text{ liter}$$ (Opsi A)."
        },
        {
          "id": "smp7-b2-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Manakah di antara bilangan berikut yang BUKAN merupakan bilangan rasional?",
          "options": [
            {
              "key": "A",
              "text": "-\\frac{22}{7}"
            },
            {
              "key": "B",
              "text": "0{,}121212\\dots"
            },
            {
              "key": "C",
              "text": "\\sqrt{0{,}25}"
            },
            {
              "key": "D",
              "text": "\\sqrt{5}"
            }
          ],
          "correctAnswer": "D",
          "hint": "$\\sqrt{5}$ adalah bilangan irasional (desimal tak berulang dan tak terbatas). $\\sqrt{0{,}25} = 0{,}5 = \\frac{1}{2}$ adalah rasional.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\sqrt{5} \\text{ adalah bilangan irasional}$$ (Opsi D)."
        },
        {
          "id": "smp7-b2-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Nilai $x$ yang memenuhi persamaan $\\frac{2}{3}x - \\frac{1}{4} = \\frac{1}{2}x + \\frac{1}{6}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "2"
            },
            {
              "key": "B",
              "text": "\\frac{5}{2}"
            },
            {
              "key": "C",
              "text": "\\frac{7}{4}"
            },
            {
              "key": "D",
              "text": "3"
            }
          ],
          "correctAnswer": "B",
          "hint": "Kalikan kedua ruas dengan KPK(3, 4, 2, 6) = 12: $8x - 3 = 6x + 2 \\implies 2x = 5 \\implies x = \\frac{5}{2}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$8x - 3 = 6x + 2 \\implies 2x = 5 \\implies x = \\frac{5}{2}$$ (Opsi B)."
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
          {
            "label": "Perbandingan Senilai",
            "formula": "\\frac{x_1}{x_2} = \\frac{y_1}{y_2}"
          },
          {
            "label": "Perbandingan Berbalik Nilai",
            "formula": "x_1 \\cdot y_1 = x_2 \\cdot y_2 \\iff \\frac{x_1}{x_2} = \\frac{y_2}{y_1}"
          },
          {
            "label": "Skala Peta",
            "formula": "\\text{Skala} = \\frac{J_p}{J_s}"
          }
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
            {
              "key": "A",
              "text": "1 : 4"
            },
            {
              "key": "B",
              "text": "1 : 2"
            },
            {
              "key": "C",
              "text": "250 : 1"
            },
            {
              "key": "D",
              "text": "1 : 5"
            }
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
            {
              "key": "A",
              "text": "12 liter"
            },
            {
              "key": "B",
              "text": "18 liter"
            },
            {
              "key": "C",
              "text": "15 liter"
            },
            {
              "key": "D",
              "text": "20 liter"
            }
          ],
          "correctAnswer": "C",
          "hint": "Ini perbandingan senilai: $\\frac{5}{60} = \\frac{x}{180}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Perbandingan senilai:\n$$x = 5 \\times \\frac{180}{60} = 5 \\times 3 = 15\\text{ liter}$$\nBensin yang dibutuhkan adalah **15 liter** (Opsi C)."
        },
        {
          "id": "smp7-b3-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jarak dua kota pada peta adalah 4 cm. Jika skala peta tersebut adalah $1 : 2.000.000$, maka jarak sebenarnya antara kedua kota tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "8 km"
            },
            {
              "key": "B",
              "text": "800 km"
            },
            {
              "key": "C",
              "text": "50 km"
            },
            {
              "key": "D",
              "text": "80 km"
            }
          ],
          "correctAnswer": "D",
          "hint": "Kalikan 4 cm dengan 2.000.000 = 8.000.000 cm, lalu bagi 100.000 untuk konversi ke km.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$J_s = 4 \\times 2.000.000 = 8.000.000\\text{ cm} = \\frac{8.000.000}{100.000} = 80\\text{ km}$$\nJarak sebenarnya adalah **80 km** (Opsi D)."
        },
        {
          "id": "smp7-b3-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Suatu pekerjaan dapat diselesaikan oleh 15 orang dalam waktu 24 hari. Jika pekerjaan tersebut ingin diselesaikan dalam waktu 18 hari, banyak tambahan pekerja yang diperlukan adalah...",
          "options": [
            {
              "key": "A",
              "text": "5 orang"
            },
            {
              "key": "B",
              "text": "20 orang"
            },
            {
              "key": "C",
              "text": "6 orang"
            },
            {
              "key": "D",
              "text": "4 orang"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan perbandingan berbalik nilai: $15 \\times 24 = x \\times 18$. Tambahan pekerja = $x - 15$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Hitung total pekerja yang dibutuhkan ($x$):\n$$15 \\times 24 = x \\times 18$$\n$$360 = 18x \\implies x = 20\\text{ pekerja}$$\n2. Hitung tambahan pekerja:\n$$\\text{Tambahan} = 20 - 15 = 5\\text{ orang}$$\nTambahan pekerja yang diperlukan adalah **5 orang** (Opsi A)."
        },
        {
          "id": "smp7-b3-5",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Bentuk ekuivalen dari rasio 24 : 36 dalam bentuk paling sederhana adalah...",
          "options": [
            {
              "key": "A",
              "text": "3 : 4"
            },
            {
              "key": "B",
              "text": "4 : 6"
            },
            {
              "key": "C",
              "text": "1 : 2"
            },
            {
              "key": "D",
              "text": "2 : 3"
            }
          ],
          "correctAnswer": "D",
          "hint": "Bagi kedua suku rasio dengan FPB yaitu 12: $24 : 12 = 2$ dan $36 : 12 = 3$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$24 : 36 = 2 : 3$$ (Opsi D)."
        },
        {
          "id": "smp7-b3-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Perbandingan uang jajan Budi dan Caca adalah 4 : 5. Jika uang jajan Budi Rp24.000,00, maka uang jajan Caca adalah...",
          "options": [
            {
              "key": "A",
              "text": "Rp28.000,00"
            },
            {
              "key": "B",
              "text": "Rp32.000,00"
            },
            {
              "key": "C",
              "text": "Rp35.000,00"
            },
            {
              "key": "D",
              "text": "Rp30.000,00"
            }
          ],
          "correctAnswer": "D",
          "hint": "Uang Caca $= \\frac{5}{4} \\times 24.000 = 30.000$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Uang Caca} = \\frac{5}{4} \\times 24.000 = 30.000\\text{ rupiah}$$ (Opsi D)."
        },
        {
          "id": "smp7-b3-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah mobil menempuh jarak 180 km dalam waktu 3 jam. Laju kecepatan rata-rata mobil tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "55 km/jam"
            },
            {
              "key": "B",
              "text": "60 km/jam"
            },
            {
              "key": "C",
              "text": "65 km/jam"
            },
            {
              "key": "D",
              "text": "50 km/jam"
            }
          ],
          "correctAnswer": "B",
          "hint": "Laju perubahan (kecepatan) $= \\frac{\\text{jarak}}{\\text{waktu}} = \\frac{180}{3} = 60$ km/jam.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$v = \\frac{180}{3} = 60\\text{ km/jam}$$ (Opsi B)."
        },
        {
          "id": "smp7-b3-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Harga 5 kg beras adalah Rp65.000,00. Harga 8 kg beras yang sama adalah...",
          "options": [
            {
              "key": "A",
              "text": "Rp104.000,00"
            },
            {
              "key": "B",
              "text": "Rp98.000,00"
            },
            {
              "key": "C",
              "text": "Rp110.000,00"
            },
            {
              "key": "D",
              "text": "Rp96.000,00"
            }
          ],
          "correctAnswer": "A",
          "hint": "Harga per kg $= 65.000 : 5 = 13.000$. Untuk 8 kg $= 8 \\times 13.000 = 104.000$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$8 \\times 13.000 = 104.000\\text{ rupiah}$$ (Opsi A)."
        },
        {
          "id": "smp7-b3-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jarak 5 cm pada peta mewakili jarak sebenarnya 25 km. Skala peta tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "1 : 50.000"
            },
            {
              "key": "B",
              "text": "1 : 500.000"
            },
            {
              "key": "C",
              "text": "1 : 5.000.000"
            },
            {
              "key": "D",
              "text": "1 : 250.000"
            }
          ],
          "correctAnswer": "B",
          "hint": "Ubah km ke cm: $25\\text{ km} = 2.500.000\\text{ cm}$. Skala $= 5 : 2.500.000 = 1 : 500.000$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Skala} = 5 : 2.500.000 = 1 : 500.000$$ (Opsi B)."
        },
        {
          "id": "smp7-b3-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Rasio bahan bakar terhadap jarak tempuh sepeda motor adalah 1 liter : 45 km. Berapa liter bahan bakar yang dibutuhkan untuk perjalanan sejauh 135 km?",
          "options": [
            {
              "key": "A",
              "text": "2,5 liter"
            },
            {
              "key": "B",
              "text": "3,5 liter"
            },
            {
              "key": "C",
              "text": "3 liter"
            },
            {
              "key": "D",
              "text": "4 liter"
            }
          ],
          "correctAnswer": "C",
          "hint": "Bahan bakar $= 135 : 45 = 3$ liter.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$135 : 45 = 3\\text{ liter}$$ (Opsi C)."
        },
        {
          "id": "smp7-b3-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Suatu proyek gedung direncanakan selesai dalam waktu 30 hari oleh 12 orang pekerja. Jika pekerja ditambah 3 orang, proyek tersebut dapat diselesaikan dalam waktu...",
          "options": [
            {
              "key": "A",
              "text": "24 hari"
            },
            {
              "key": "B",
              "text": "25 hari"
            },
            {
              "key": "C",
              "text": "20 hari"
            },
            {
              "key": "D",
              "text": "26 hari"
            }
          ],
          "correctAnswer": "A",
          "hint": "Perbandingan berbalik nilai: $12 \\times 30 = 15 \\times H \\implies H = \\frac{360}{15} = 24$ hari.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$H = \\frac{12 \\times 30}{15} = 24\\text{ hari}$$ (Opsi A)."
        },
        {
          "id": "smp7-b3-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah foto berukuran $3\\text{ cm} \\times 4\\text{ cm}$ diperbesar sehingga sisi panjangnya menjadi 12 cm. Luas foto setelah diperbesar adalah...",
          "options": [
            {
              "key": "A",
              "text": "96 cm²"
            },
            {
              "key": "B",
              "text": "108 cm²"
            },
            {
              "key": "C",
              "text": "144 cm²"
            },
            {
              "key": "D",
              "text": "72 cm²"
            }
          ],
          "correctAnswer": "B",
          "hint": "Faktor perbesaran $k = 12 : 4 = 3$. Lebar baru $= 3 \\times 3 = 9$ cm. Luas baru $= 9 \\times 12 = 108$ cm².",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Luas} = 9 \\times 12 = 108\\text{ cm}^2$$ (Opsi B)."
        },
        {
          "id": "smp7-b3-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Debit air dari sebuah keran adalah 15 liter/menit. Waktu yang diperlukan untuk mengisi bak mandi bervolume 240 liter sampai penuh adalah...",
          "options": [
            {
              "key": "A",
              "text": "15 menit"
            },
            {
              "key": "B",
              "text": "16 menit"
            },
            {
              "key": "C",
              "text": "18 menit"
            },
            {
              "key": "D",
              "text": "20 menit"
            }
          ],
          "correctAnswer": "B",
          "hint": "Waktu $= \\frac{\\text{Volume}}{\\text{Debit}} = \\frac{240}{15} = 16$ menit.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$t = \\frac{240}{15} = 16\\text{ menit}$$ (Opsi B)."
        },
        {
          "id": "smp7-b3-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Perbandingan kelereng Amir, Budi, dan Candra adalah 2 : 3 : 5. Jika jumlah kelereng Amir dan Candra adalah 42 butir, berapakah banyak kelereng Budi?",
          "options": [
            {
              "key": "A",
              "text": "15 butir"
            },
            {
              "key": "B",
              "text": "21 butir"
            },
            {
              "key": "C",
              "text": "18 butir"
            },
            {
              "key": "D",
              "text": "24 butir"
            }
          ],
          "correctAnswer": "C",
          "hint": "Bagian Amir + Candra $= 2 + 5 = 7$. Nilai 1 bagian $= 42 : 7 = 6$. Kelereng Budi $= 3 \\times 6 = 18$ butir.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Kelereng Budi} = \\frac{3}{2 + 5} \\times 42 = 18\\text{ butir}$$ (Opsi C)."
        },
        {
          "id": "smp7-b3-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah mesin cetak mampu mencetak 480 lembar brosur dalam waktu 8 menit. Banyak brosur yang dicetak mesin tersebut dalam waktu 15 menit adalah...",
          "options": [
            {
              "key": "A",
              "text": "800 lembar"
            },
            {
              "key": "B",
              "text": "900 lembar"
            },
            {
              "key": "C",
              "text": "960 lembar"
            },
            {
              "key": "D",
              "text": "850 lembar"
            }
          ],
          "correctAnswer": "B",
          "hint": "Kecepatan cetak $= 480 : 8 = 60$ lembar/menit. Dalam 15 menit $= 15 \\times 60 = 900$ lembar.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$15 \\times 60 = 900\\text{ lembar}$$ (Opsi B)."
        },
        {
          "id": "smp7-b3-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Persediaan pakan ternak untuk 40 ekor sapi cukup untuk 18 hari. Jika peternak membeli 20 ekor sapi lagi, persediaan pakan tersebut akan habis dalam waktu...",
          "options": [
            {
              "key": "A",
              "text": "14 hari"
            },
            {
              "key": "B",
              "text": "10 hari"
            },
            {
              "key": "C",
              "text": "15 hari"
            },
            {
              "key": "D",
              "text": "12 hari"
            }
          ],
          "correctAnswer": "D",
          "hint": "Total sapi $= 40 + 20 = 60$. Perbandingan berbalik nilai: $40 \\times 18 = 60 \\times H \\implies H = \\frac{720}{60} = 12$ hari.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$H = \\frac{40 \\times 18}{60} = 12\\text{ hari}$$ (Opsi D)."
        },
        {
          "id": "smp7-b3-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dua kota berjarak 120 km. Pada peta dengan skala 1 : 1.500.000, jarak kedua kota tersebut adalah...",
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
              "text": "10 cm"
            },
            {
              "key": "D",
              "text": "12 cm"
            }
          ],
          "correctAnswer": "A",
          "hint": "$120\\text{ km} = 12.000.000\\text{ cm}$. Jarak pada peta $= 12.000.000 : 1.500.000 = 8$ cm.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Jarak peta} = \\frac{12.000.000}{1.500.000} = 8\\text{ cm}$$ (Opsi A)."
        },
        {
          "id": "smp7-b3-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Pembangunan jembatan direncanakan selesai dalam 30 hari oleh 16 pekerja. Setelah bekerja selama 10 hari, proyek dihentikan selama 4 hari. Agar pekerjaan tetap selesai tepat waktu (dalam 30 hari), banyak pekerja tambahan yang diperlukan adalah...",
          "options": [
            {
              "key": "A",
              "text": "5 orang"
            },
            {
              "key": "B",
              "text": "6 orang"
            },
            {
              "key": "C",
              "text": "3 orang"
            },
            {
              "key": "D",
              "text": "4 orang"
            }
          ],
          "correctAnswer": "D",
          "hint": "Sisa beban kerja: 16 pekerja selama 20 hari $= 320$ orang-hari. Sisa waktu tersedia: $20 - 4 = 16$ hari. Pekerja yang dibutuhkan: $320 : 16 = 20$ pekerja. Pekerja tambahan: $20 - 16 = 4$ orang.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Sisa beban kerja: $16 \\times (30 - 10) = 320\\text{ orang-hari}$\n2. Sisa hari riil: $20 - 4 = 16\\text{ hari}$\n3. Pekerja total: $320 : 16 = 20\\text{ orang}$\n4. Tambahan pekerja: $20 - 16 = 4\\text{ orang}$ (Opsi D)."
        },
        {
          "id": "smp7-b3-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Perbandingan keliling dua lingkaran adalah 3 : 5. Perbandingan luas kedua lingkaran tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "3 : 5"
            },
            {
              "key": "B",
              "text": "6 : 10"
            },
            {
              "key": "C",
              "text": "9 : 25"
            },
            {
              "key": "D",
              "text": "27 : 125"
            }
          ],
          "correctAnswer": "C",
          "hint": "Rasio keliling sama dengan rasio jari-jari $r_1 : r_2 = 3 : 5$. Rasio luas $= r_1^2 : r_2^2 = 3^2 : 5^2 = 9 : 25$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Rasio luas} = 3^2 : 5^2 = 9 : 25$$ (Opsi C)."
        },
        {
          "id": "smp7-b3-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "A dan B bekerja bersama dapat menyelesaikan suatu pekerjaan dalam 6 hari. Jika A bekerja sendiri membutuhkan waktu 10 hari, berapa hari waktu yang dibutuhkan jika B bekerja sendiri?",
          "options": [
            {
              "key": "A",
              "text": "12 hari"
            },
            {
              "key": "B",
              "text": "14 hari"
            },
            {
              "key": "C",
              "text": "15 hari"
            },
            {
              "key": "D",
              "text": "16 hari"
            }
          ],
          "correctAnswer": "C",
          "hint": "$\\frac{1}{B} = \\frac{1}{6} - \\frac{1}{10} = \\frac{5 - 3}{30} = \\frac{2}{30} = \\frac{1}{15} \\implies B = 15$ hari.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{1}{B} = \\frac{1}{6} - \\frac{1}{10} = \\frac{1}{15} \\implies B = 15\\text{ hari}$$ (Opsi C)."
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
          {
            "label": "Distributif Aljabar",
            "formula": "a(b + c) = ab + ac"
          },
          {
            "label": "Perkalian Dua Binomial",
            "formula": "(x + a)(x + b) = x^2 + (a + b)x + ab"
          }
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
            {
              "key": "A",
              "text": "7"
            },
            {
              "key": "B",
              "text": "-7"
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
          "correctAnswer": "B",
          "hint": "Perhatikan tanda minus di depan angka 7 yang melekat pada variabel $x$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nBentuk aljabar $3x^2 - 7x + 9$ memiliki koefisien untuk variabel $x$ sebesar **-7** (Opsi B)."
        },
        {
          "id": "smp7-b4-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Bentuk sederhana dari $4a + 7b - 2a + 3b$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$6a + 10b$"
            },
            {
              "key": "B",
              "text": "$2a + 4b$"
            },
            {
              "key": "C",
              "text": "$12ab$"
            },
            {
              "key": "D",
              "text": "$2a + 10b$"
            }
          ],
          "correctAnswer": "D",
          "hint": "Gabungkan suku sejenis: $(4a - 2a) + (7b + 3b)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Suku $a$: $4a - 2a = 2a$\n2. Suku $b$: $7b + 3b = 10b$\nHasilnya adalah **$2a + 10b$** (Opsi D)."
        },
        {
          "id": "smp7-b4-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil penjabaran dari $(2x - 3)(x + 5)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$2x^2 + 7x - 15$"
            },
            {
              "key": "B",
              "text": "$2x^2 - 7x - 15$"
            },
            {
              "key": "C",
              "text": "$2x^2 + 10x - 15$"
            },
            {
              "key": "D",
              "text": "$2x^2 + 7x + 15$"
            }
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
            {
              "key": "A",
              "text": "38 cm"
            },
            {
              "key": "B",
              "text": "42 cm"
            },
            {
              "key": "C",
              "text": "44 cm"
            },
            {
              "key": "D",
              "text": "40 cm"
            }
          ],
          "correctAnswer": "B",
          "hint": "Sederhanakan bentuk aljabar terlebih dahulu menjadi $10x + 2$, lalu masukkan $x = 4$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Sederhanakan bentuk aljabar keliling:\n$$K = 6x + 4 + 4x - 2 = 10x + 2$$\n2. Substitusikan nilai $x = 4$:\n$$K = 10(4) + 2 = 40 + 2 = 42\\text{ cm}$$\nKeliling persegi panjang adalah **42 cm** (Opsi B)."
        },
        {
          "id": "smp7-b4-5",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Koefisien dari variabel $x$ pada bentuk aljabar $3x^2 - 7x + 5$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "7"
            },
            {
              "key": "B",
              "text": "-7"
            },
            {
              "key": "C",
              "text": "3"
            },
            {
              "key": "D",
              "text": "5"
            }
          ],
          "correctAnswer": "B",
          "hint": "Koefisien adalah angka pengali yang berada tepat di depan variabel $x$, yaitu $-7$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nKoefisien dari $x$ adalah **-7** (Opsi B)."
        },
        {
          "id": "smp7-b4-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bentuk sederhana dari $4x - 5y + 3x + 8y$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "7x + 3y"
            },
            {
              "key": "B",
              "text": "7x - 3y"
            },
            {
              "key": "C",
              "text": "x + 3y"
            },
            {
              "key": "D",
              "text": "7x + 13y"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kelompokkan suku sejenis: $(4x + 3x) + (-5y + 8y) = 7x + 3y$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$(4x + 3x) + (-5y + 8y) = 7x + 3y$$ (Opsi A)."
        },
        {
          "id": "smp7-b4-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil perkalian suku tunggal $3a(2a - 5b)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "6a - 15ab"
            },
            {
              "key": "B",
              "text": "5a² - 15ab"
            },
            {
              "key": "C",
              "text": "6a² - 5b"
            },
            {
              "key": "D",
              "text": "6a² - 15ab"
            }
          ],
          "correctAnswer": "D",
          "hint": "Distribusikan $3a$: $3a \\times 2a - 3a \\times 5b = 6a^2 - 15ab$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$3a(2a - 5b) = 6a^2 - 15ab$$ (Opsi D)."
        },
        {
          "id": "smp7-b4-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil penjabaran dari $(2x + 3)(x - 4)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "2x² + 5x - 12"
            },
            {
              "key": "B",
              "text": "2x² - 5x - 12"
            },
            {
              "key": "C",
              "text": "2x² - 8x - 12"
            },
            {
              "key": "D",
              "text": "2x² - 5x + 12"
            }
          ],
          "correctAnswer": "B",
          "hint": "$(2x)(x) + (2x)(-4) + (3)(x) + (3)(-4) = 2x^2 - 8x + 3x - 12 = 2x^2 - 5x - 12$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$2x^2 - 8x + 3x - 12 = 2x^2 - 5x - 12$$ (Opsi B)."
        },
        {
          "id": "smp7-b4-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil pengurangan $3x - 2y$ oleh $5x + 4y$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "2x + 6y"
            },
            {
              "key": "B",
              "text": "-2x + 2y"
            },
            {
              "key": "C",
              "text": "-2x - 6y"
            },
            {
              "key": "D",
              "text": "8x + 2y"
            }
          ],
          "correctAnswer": "C",
          "hint": "Pengurangan $A$ oleh $B$ berarti $A - B$: $(3x - 2y) - (5x + 4y) = 3x - 2y - 5x - 4y = -2x - 6y$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$(3x - 2y) - (5x + 4y) = -2x - 6y$$ (Opsi C)."
        },
        {
          "id": "smp7-b4-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jika $x = 3$ dan $y = -2$, nilai dari $2x^2 - 3xy + y^2$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "40"
            },
            {
              "key": "B",
              "text": "28"
            },
            {
              "key": "C",
              "text": "32"
            },
            {
              "key": "D",
              "text": "36"
            }
          ],
          "correctAnswer": "A",
          "hint": "$2(3^2) - 3(3)(-2) + (-2)^2 = 2(9) - (-18) + 4 = 18 + 18 + 4 = 40$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$2(9) + 18 + 4 = 40$$ (Opsi A)."
        },
        {
          "id": "smp7-b4-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bentuk pemfaktoran dari $x^2 - 9$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "(x - 3)²"
            },
            {
              "key": "B",
              "text": "(x + 3)²"
            },
            {
              "key": "C",
              "text": "(x - 3)(x + 3)"
            },
            {
              "key": "D",
              "text": "(x - 9)(x + 1)"
            }
          ],
          "correctAnswer": "C",
          "hint": "Selisih dua kuadrat: $a^2 - b^2 = (a - b)(a + b) \\implies (x - 3)(x + 3)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$x^2 - 9 = (x - 3)(x + 3)$$ (Opsi C)."
        },
        {
          "id": "smp7-b4-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Keliling persegi panjang dinyatakan oleh $K = 2(p + l)$. Jika panjangnya $(3x + 2)$ cm dan lebarnya $(x + 4)$ cm, rumus kelilingnya dalam bentuk aljabar paling sederhana adalah...",
          "options": [
            {
              "key": "A",
              "text": "4x + 6"
            },
            {
              "key": "B",
              "text": "8x + 6"
            },
            {
              "key": "C",
              "text": "8x + 12"
            },
            {
              "key": "D",
              "text": "6x + 12"
            }
          ],
          "correctAnswer": "C",
          "hint": "$K = 2[(3x + 2) + (x + 4)] = 2(4x + 6) = 8x + 12$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$K = 2(4x + 6) = 8x + 12\\text{ cm}$$ (Opsi C)."
        },
        {
          "id": "smp7-b4-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Bentuk paling sederhana dari pecahan aljabar $\\frac{6x^2 y}{9xy^2}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{2x}{3y}"
            },
            {
              "key": "B",
              "text": "\\frac{3x}{2y}"
            },
            {
              "key": "C",
              "text": "\\frac{2y}{3x}"
            },
            {
              "key": "D",
              "text": "\\frac{3y}{2x}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Bagi pembilang dan penyebut dengan $3xy$: $\\frac{6 : 3}{9 : 3} \\times \\frac{x}{y} = \\frac{2x}{3y}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{6x^2 y}{9xy^2} = \\frac{2x}{3y}$$ (Opsi A)."
        },
        {
          "id": "smp7-b4-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil penjumlahan pecahan aljabar $\\frac{2}{x} + \\frac{3}{y}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{5}{x + y}"
            },
            {
              "key": "B",
              "text": "\\frac{5}{xy}"
            },
            {
              "key": "C",
              "text": "\\frac{2x + 3y}{xy}"
            },
            {
              "key": "D",
              "text": "\\frac{2y + 3x}{xy}"
            }
          ],
          "correctAnswer": "D",
          "hint": "Samakan penyebut menjadi $xy$: $\\frac{2y}{xy} + \\frac{3x}{xy} = \\frac{2y + 3x}{xy}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{2}{x} + \\frac{3}{y} = \\frac{2y + 3x}{xy}$$ (Opsi D)."
        },
        {
          "id": "smp7-b4-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Hasil bagi dari bentuk aljabar $(6x^2 + 7x - 20) : (2x + 5)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "3x + 4"
            },
            {
              "key": "B",
              "text": "3x - 5"
            },
            {
              "key": "C",
              "text": "2x - 4"
            },
            {
              "key": "D",
              "text": "3x - 4"
            }
          ],
          "correctAnswer": "D",
          "hint": "Faktorkan pembilang: $(2x + 5)(3x - 4) : (2x + 5) = 3x - 4$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{(2x + 5)(3x - 4)}{2x + 5} = 3x - 4$$ (Opsi D)."
        },
        {
          "id": "smp7-b4-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Hasil dari $(2x - 3)^2$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "4x² - 9"
            },
            {
              "key": "B",
              "text": "4x² + 12x + 9"
            },
            {
              "key": "C",
              "text": "4x² - 12x + 9"
            },
            {
              "key": "D",
              "text": "4x² - 6x + 9"
            }
          ],
          "correctAnswer": "C",
          "hint": "Kuadrat suku dua: $(a - b)^2 = a^2 - 2ab + b^2 = (2x)^2 - 2(2x)(3) + 3^2 = 4x^2 - 12x + 9$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$(2x - 3)^2 = 4x^2 - 12x + 9$$ (Opsi C)."
        },
        {
          "id": "smp7-b4-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Diketahui $a + b = 7$ dan $a \\times b = 10$. Nilai dari $a^2 + b^2$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "29"
            },
            {
              "key": "B",
              "text": "49"
            },
            {
              "key": "C",
              "text": "39"
            },
            {
              "key": "D",
              "text": "19"
            }
          ],
          "correctAnswer": "A",
          "hint": "Identitas aljabar: $a^2 + b^2 = (a + b)^2 - 2ab = 7^2 - 2(10) = 49 - 20 = 29$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$a^2 + b^2 = (a + b)^2 - 2ab = 49 - 20 = 29$$ (Opsi A)."
        },
        {
          "id": "smp7-b4-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Bentuk sederhana dari $\\frac{x^2 - 5x + 6}{x^2 - 4}$ untuk $x \\neq \\pm 2$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{x - 3}{x - 2}"
            },
            {
              "key": "B",
              "text": "\\frac{x + 3}{x + 2}"
            },
            {
              "key": "C",
              "text": "\\frac{x - 2}{x + 2}"
            },
            {
              "key": "D",
              "text": "\\frac{x - 3}{x + 2}"
            }
          ],
          "correctAnswer": "D",
          "hint": "Faktorkan pembilang dan penyebut: $\\frac{(x - 2)(x - 3)}{(x - 2)(x + 2)} = \\frac{x - 3}{x + 2}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{(x - 2)(x - 3)}{(x - 2)(x + 2)} = \\frac{x - 3}{x + 2}$$ (Opsi D)."
        },
        {
          "id": "smp7-b4-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Jika $x + \\frac{1}{x} = 4$, maka nilai dari $x^2 + \\frac{1}{x^2}$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "16"
            },
            {
              "key": "B",
              "text": "18"
            },
            {
              "key": "C",
              "text": "14"
            },
            {
              "key": "D",
              "text": "12"
            }
          ],
          "correctAnswer": "C",
          "hint": "Kuadratkan kedua ruas: $(x + \\frac{1}{x})^2 = x^2 + 2 + \\frac{1}{x^2} = 16 \\implies x^2 + \\frac{1}{x^2} = 14$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$x^2 + \\frac{1}{x^2} = 4^2 - 2 = 14$$ (Opsi C)."
        },
        {
          "id": "smp7-b4-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Umur Ayah saat ini adalah $(5x + 2)$ tahun, sedangkan umur Anaknya adalah $(2x - 1)$ tahun. Selisih umur Ayah dan Anak setelah 5 tahun mendatang adalah...",
          "options": [
            {
              "key": "A",
              "text": "3x + 8 tahun"
            },
            {
              "key": "B",
              "text": "3x + 3 tahun"
            },
            {
              "key": "C",
              "text": "3x - 3 tahun"
            },
            {
              "key": "D",
              "text": "7x + 1 tahun"
            }
          ],
          "correctAnswer": "B",
          "hint": "Selisih umur selalu tetap: $(5x + 2) - (2x - 1) = 3x + 3$ tahun.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Selisih} = (5x + 2) - (2x - 1) = 3x + 3\\text{ tahun}$$ (Opsi B)."
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
          {
            "label": "Perbandingan Sisi Kesebangunan",
            "formula": "\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}"
          },
          {
            "label": "Formula Pengukuran Bayangan",
            "formula": "\\frac{T_1}{T_2} = \\frac{B_1}{B_2}"
          }
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
            {
              "key": "A",
              "text": "Dua buah persegi panjang"
            },
            {
              "key": "B",
              "text": "Dua buah segitiga sama kaki"
            },
            {
              "key": "C",
              "text": "Dua buah belah ketupat"
            },
            {
              "key": "D",
              "text": "Dua buah persegi"
            }
          ],
          "correctAnswer": "D",
          "hint": "Persegi selalu memiliki 4 sudut siku-siku ($90^\\circ$) dan keempat sisinya selalu sama panjang (perbandingan sisi seletak selalu 1:1).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nSetiap persegi memiliki keempat sudut yang sama besar ($90^\\circ$) dan perbandingan sisi-sisinya selalu sama, sehingga **dua buah persegi** sudah pasti sebangun (Opsi D)."
        },
        {
          "id": "smp7-b5-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Sebuah foto berukuran $3\\text{ cm} \\times 4\\text{ cm}$ diperbesar sehingga sisi terpendeknya menjadi $9\\text{ cm}$. Ukuran sisi terpanjang foto setelah diperbesar adalah...",
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
              "text": "16 cm"
            }
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
            {
              "key": "A",
              "text": "30 meter"
            },
            {
              "key": "B",
              "text": "36 meter"
            },
            {
              "key": "C",
              "text": "40 meter"
            },
            {
              "key": "D",
              "text": "32 meter"
            }
          ],
          "correctAnswer": "B",
          "hint": "Gunakan perbandingan kesebangunan bayangan: $\\frac{T}{6} = \\frac{24}{4}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Perbandingan senilai:\n$$\\frac{T}{6} = \\frac{24}{4} = 6$$\n$$T = 6 \\times 6 = 36\\text{ meter}$$\nTinggi gedung tersebut adalah **36 meter** (Opsi B)."
        },
        {
          "id": "smp7-b5-4",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah bingkai foto terbuat dari kayu berukuran $30\\text{ cm} \\times 40\\text{ cm}$. Di dalam bingkai dipasang foto yang sebangun dengan bingkai tersebut. Jika lebar foto bagian dalam adalah 24 cm, maka luas daerah foto bagian dalam tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "$720\\text{ cm}^2$"
            },
            {
              "key": "B",
              "text": "$768\\text{ cm}^2$"
            },
            {
              "key": "C",
              "text": "$800\\text{ cm}^2$"
            },
            {
              "key": "D",
              "text": "$640\\text{ cm}^2$"
            }
          ],
          "correctAnswer": "B",
          "hint": "Cari panjang foto $p$ dari perbandingan kesebangunan: $\\frac{p}{40} = \\frac{24}{30}$, lalu hitung luas $= p \\times 24$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Cari panjang foto dalam ($p$):\n$$\\frac{p}{40} = \\frac{24}{30} = \\frac{4}{5} \\implies p = 40 \\times \\frac{4}{5} = 32\\text{ cm}$$\n2. Hitung luas foto:\n$$\\text{Luas} = 32 \\times 24 = 768\\text{ cm}^2$$\nLuas foto bagian dalam adalah **$768\\text{ cm}^2$** (Opsi B)."
        },
        {
          "id": "smp7-b5-5",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Dua bangun datar dikatakan kongruen (sama dan sebangun) jika memenuhi syarat...",
          "options": [
            {
              "key": "A",
              "text": "Bentuknya sama tetapi ukurannya berbeda"
            },
            {
              "key": "B",
              "text": "Hanya memiliki sudut-sudut yang sama besar"
            },
            {
              "key": "C",
              "text": "Hanya memiliki luas yang sama"
            },
            {
              "key": "D",
              "text": "Bentuk dan ukurannya sama persis"
            }
          ],
          "correctAnswer": "D",
          "hint": "Kongruen berarti bentuk dan ukuran identik sama persis.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nKongruen berarti **bentuk dan ukuran sama persis** (Opsi D)."
        },
        {
          "id": "smp7-b5-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dua bangun datar dikatakan sebangun jika...",
          "options": [
            {
              "key": "A",
              "text": "Sudut-sudut yang bersesuaian sama besar saja"
            },
            {
              "key": "B",
              "text": "Sisi-sisi yang bersesuaian sama panjang"
            },
            {
              "key": "C",
              "text": "Sudut-sudut yang bersesuaian sama besar dan sisi-sisi yang bersesuaian sebanding"
            },
            {
              "key": "D",
              "text": "Luas dan kelilingnya sama"
            }
          ],
          "correctAnswer": "C",
          "hint": "Syarat kesebangunan: sudut bersesuaian sama besar dan sisi bersesuaian sebanding.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nSyarat kesebangunan adalah **sudut sama besar dan sisi sebanding** (Opsi C)."
        },
        {
          "id": "smp7-b5-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dua persegi panjang sebangun. Persegi panjang I berukuran $6\\text{ cm} \\times 4\\text{ cm}$. Jika panjang persegi panjang II adalah 18 cm, maka lebarnya adalah...",
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
              "text": "8 cm"
            },
            {
              "key": "D",
              "text": "14 cm"
            }
          ],
          "correctAnswer": "A",
          "hint": "Rasio panjang $= 18 : 6 = 3$. Lebar II $= 4 \\times 3 = 12$ cm.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$l_2 = 4 \\times \\frac{18}{6} = 12\\text{ cm}$$ (Opsi A)."
        },
        {
          "id": "smp7-b5-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah tongkat setinggi 1,5 meter memiliki bayangan sepanjang 2 meter. Pada saat yang sama, sebuah pohon memiliki bayangan sepanjang 12 meter. Tinggi pohon tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "8 meter"
            },
            {
              "key": "B",
              "text": "10 meter"
            },
            {
              "key": "C",
              "text": "9 meter"
            },
            {
              "key": "D",
              "text": "7,5 meter"
            }
          ],
          "correctAnswer": "C",
          "hint": "Perbandingan kesebangunan: $\\frac{T}{1{,}5} = \\frac{12}{2} \\implies T = 6 \\times 1{,}5 = 9$ meter.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$T = \\frac{12}{2} \\times 1{,}5 = 9\\text{ meter}$$ (Opsi C)."
        },
        {
          "id": "smp7-b5-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Segitiga $ABC$ sebangun dengan segitiga $DEF$. Jika $AB = 6$ cm, $BC = 8$ cm, $AC = 10$ cm, dan sisi terpendek segitiga $DEF$ adalah 9 cm, panjang sisi terpanjang segitiga $DEF$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "12 cm"
            },
            {
              "key": "B",
              "text": "18 cm"
            },
            {
              "key": "C",
              "text": "20 cm"
            },
            {
              "key": "D",
              "text": "15 cm"
            }
          ],
          "correctAnswer": "D",
          "hint": "Sisi terpendek $AB = 6$, pada $DEF = 9 \\implies$ faktor skala $k = \\frac{9}{6} = 1{,}5$. Sisi terpanjang $= 10 \\times 1{,}5 = 15$ cm.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Sisi terpanjang} = 10 \\times 1{,}5 = 15\\text{ cm}$$ (Opsi D)."
        },
        {
          "id": "smp7-b5-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Manakah pasangan bangun datar berikut yang PASTI selalu sebangun?",
          "options": [
            {
              "key": "A",
              "text": "Dua buah persegi panjang"
            },
            {
              "key": "B",
              "text": "Dua buah belah ketupat"
            },
            {
              "key": "C",
              "text": "Dua buah segitiga sama kaki"
            },
            {
              "key": "D",
              "text": "Dua buah persegi"
            }
          ],
          "correctAnswer": "D",
          "hint": "Dua persegi selalu memiliki sudut-sudut $90^\\circ$ dan perbandingan sisi $1 : 1$, sehingga pasti sebangun.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nPasangan yang pasti sebangun adalah **dua buah persegi** (Opsi D)."
        },
        {
          "id": "smp7-b5-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah foto ditempelkan pada selembar karton berukuran $40\\text{ cm} \\times 50\\text{ cm}$. Di sebelah kiri, kanan, dan atas foto masih terdapat sisa karton selebar 4 cm. Jika foto dan karton sebangun, lebar sisa karton di bagian bawah foto adalah...",
          "options": [
            {
              "key": "A",
              "text": "5 cm"
            },
            {
              "key": "B",
              "text": "8 cm"
            },
            {
              "key": "C",
              "text": "6 cm"
            },
            {
              "key": "D",
              "text": "4 cm"
            }
          ],
          "correctAnswer": "C",
          "hint": "Lebar foto $= 40 - 8 = 32$ cm. Panjang foto $= 32 \\times \\frac{50}{40} = 40$ cm. Sisa bawah $= 50 - 4 - 40 = 6$ cm.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Lebar foto $= 32\\text{ cm}$\n2. Tinggi foto $= \\frac{32}{40} \\times 50 = 40\\text{ cm}$\n3. Sisa bawah $= 50 - 4 - 40 = 6\\text{ cm}$ (Opsi C)."
        },
        {
          "id": "smp7-b5-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Pada segitiga $ABC$, garis $DE$ sejajar dengan sisi $BC$ sehingga $D$ pada $AB$ dan $E$ pada $AC$. Jika $AD = 4$ cm, $DB = 6$ cm, dan $DE = 8$ cm, panjang sisi $BC$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "18 cm"
            },
            {
              "key": "B",
              "text": "16 cm"
            },
            {
              "key": "C",
              "text": "20 cm"
            },
            {
              "key": "D",
              "text": "24 cm"
            }
          ],
          "correctAnswer": "C",
          "hint": "Panjang $AB = 4 + 6 = 10$ cm. Kesebangunan: $\\frac{DE}{BC} = \\frac{AD}{AB} \\implies \\frac{8}{BC} = \\frac{4}{10} \\implies BC = 20$ cm.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$BC = \\frac{8 \\times 10}{4} = 20\\text{ cm}$$ (Opsi C)."
        },
        {
          "id": "smp7-b5-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Perbandingan keliling dua bangun yang sebangun adalah 2 : 5. Perbandingan luas kedua bangun tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "2 : 5"
            },
            {
              "key": "B",
              "text": "4 : 25"
            },
            {
              "key": "C",
              "text": "8 : 125"
            },
            {
              "key": "D",
              "text": "1 : 4"
            }
          ],
          "correctAnswer": "B",
          "hint": "Rasio luas dua bangun sebangun sama dengan kuadrat rasio sisinya/kelilingnya: $2^2 : 5^2 = 4 : 25$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Rasio luas} = 2^2 : 5^2 = 4 : 25$$ (Opsi B)."
        },
        {
          "id": "smp7-b5-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Segitiga siku-siku $ABC$ siku-siku di $B$ dengan $AB = 8$ cm dan $BC = 6$ cm. Panjang garis tinggi $BD$ yang ditarik ke sisi miring $AC$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "4,8 cm"
            },
            {
              "key": "B",
              "text": "5,0 cm"
            },
            {
              "key": "C",
              "text": "4,2 cm"
            },
            {
              "key": "D",
              "text": "5,2 cm"
            }
          ],
          "correctAnswer": "A",
          "hint": "$AC = \\sqrt{8^2 + 6^2} = 10$ cm. Luas segitiga: $\\frac{1}{2} \\times 8 \\times 6 = \\frac{1}{2} \\times 10 \\times BD \\implies BD = \\frac{48}{10} = 4{,}8$ cm.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$BD = \\frac{8 \\times 6}{10} = 4{,}8\\text{ cm}$$ (Opsi A)."
        },
        {
          "id": "smp7-b5-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dua segitiga sama sisi dengan panjang sisi masing-masing 6 cm dan 9 cm memiliki perbandingan luas sebesar...",
          "options": [
            {
              "key": "A",
              "text": "4 : 9"
            },
            {
              "key": "B",
              "text": "2 : 3"
            },
            {
              "key": "C",
              "text": "16 : 81"
            },
            {
              "key": "D",
              "text": "1 : 2"
            }
          ],
          "correctAnswer": "A",
          "hint": "Rasio sisi $= 6 : 9 = 2 : 3$. Rasio luas $= 2^2 : 3^2 = 4 : 9$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Rasio luas} = 2^2 : 3^2 = 4 : 9$$ (Opsi A)."
        },
        {
          "id": "smp7-b5-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Trapesium $ABCD$ dengan $AB \\parallel CD$ memiliki panjang $AB = 18$ cm dan $CD = 6$ cm. Titik $E$ pada $AD$ dan $F$ pada $BC$ sehingga $EF \\parallel AB$. Jika $AE : ED = 2 : 1$, panjang $EF$ adalah...",
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
              "text": "8 cm"
            },
            {
              "key": "D",
              "text": "10 cm"
            }
          ],
          "correctAnswer": "D",
          "hint": "Rumus garis bagi trapesium: $EF = \\frac{AE \\times CD + ED \\times AB}{AE + ED} = \\frac{2(6) + 1(18)}{2 + 1} = \\frac{12 + 18}{3} = 10$ cm.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$EF = \\frac{2(6) + 1(18)}{3} = \\frac{30}{3} = 10\\text{ cm}$$ (Opsi D)."
        },
        {
          "id": "smp7-b5-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah miniatur gedung bertingkat dibuat dengan skala 1 : 200. Jika volume miniatur gedung tersebut adalah 500 cm³, volume sebenarnya dari gedung tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "4.000 m³"
            },
            {
              "key": "B",
              "text": "2.000 m³"
            },
            {
              "key": "C",
              "text": "1.000 m³"
            },
            {
              "key": "D",
              "text": "8.000 m³"
            }
          ],
          "correctAnswer": "A",
          "hint": "Rasio volume $= k^3 = 200^3 = 8.000.000$. Volume nyata $= 500 \\times 8.000.000\\text{ cm}^3 = 4.000.000.000\\text{ cm}^3 = 4.000\\text{ m}^3$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$V = 500 \\times 200^3\\text{ cm}^3 = 4.000\\text{ m}^3$$ (Opsi A)."
        },
        {
          "id": "smp7-b5-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Pada segitiga siku-siku $ABC$ siku-siku di $A$, ditarik garis tinggi $AD$ tegak lurus $BC$. Jika $BD = 4$ cm dan $CD = 9$ cm, maka panjang garis tinggi $AD$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "5 cm"
            },
            {
              "key": "B",
              "text": "6 cm"
            },
            {
              "key": "C",
              "text": "7 cm"
            },
            {
              "key": "D",
              "text": "6,5 cm"
            }
          ],
          "correctAnswer": "B",
          "hint": "Teorema air mancur (kesebangunan): $AD^2 = BD \\times CD = 4 \\times 9 = 36 \\implies AD = 6$ cm.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$AD = \\sqrt{4 \\times 9} = 6\\text{ cm}$$ (Opsi B)."
        },
        {
          "id": "smp7-b5-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dari soal sebelumnya, panjang sisi $AB$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "6 cm"
            },
            {
              "key": "B",
              "text": "4\\sqrt{3} cm"
            },
            {
              "key": "C",
              "text": "2\\sqrt{13} cm"
            },
            {
              "key": "D",
              "text": "8 cm"
            }
          ],
          "correctAnswer": "C",
          "hint": "$AB^2 = BD \\times BC = 4 \\times (4 + 9) = 4 \\times 13 = 52 \\implies AB = \\sqrt{52} = 2\\sqrt{13}$ cm.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$AB = \\sqrt{4 \\times 13} = 2\\sqrt{13}\\text{ cm}$$ (Opsi C)."
        },
        {
          "id": "smp7-b5-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dua tiang berdiri tegak di atas tanah datar dengan tinggi masing-masing 6 meter dan 3 meter. Kawat dihubungkan dari puncak tiang pertama ke kaki tiang kedua, dan sebaliknya. Titik perpotongan kedua kawat berada pada ketinggian...",
          "options": [
            {
              "key": "A",
              "text": "2,5 meter"
            },
            {
              "key": "B",
              "text": "2 meter"
            },
            {
              "key": "C",
              "text": "1,8 meter"
            },
            {
              "key": "D",
              "text": "2,2 meter"
            }
          ],
          "correctAnswer": "B",
          "hint": "Rumus titik potong kabel silang: $\\frac{1}{h} = \\frac{1}{h_1} + \\frac{1}{h_2} = \\frac{1}{6} + \\frac{1}{3} = \\frac{3}{6} = \\frac{1}{2} \\implies h = 2$ meter.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$h = \\frac{6 \\times 3}{6 + 3} = \\frac{18}{9} = 2\\text{ meter}$$ (Opsi B)."
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
          {
            "label": "Sudut Pusat Juring Lingkaran",
            "formula": "\\alpha = \\frac{f_i}{\\Sigma f} \\times 360^\\circ"
          },
          {
            "label": "Persentase Juring Lingkaran",
            "formula": "P = \\frac{f_i}{\\Sigma f} \\times 100\\%"
          }
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
            {
              "key": "A",
              "text": "$360^\\circ$"
            },
            {
              "key": "B",
              "text": "$180^\\circ$"
            },
            {
              "key": "C",
              "text": "$100^\\circ$"
            },
            {
              "key": "D",
              "text": "$90^\\circ$"
            }
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
            {
              "key": "A",
              "text": "Diagram lingkaran"
            },
            {
              "key": "B",
              "text": "Piktogram"
            },
            {
              "key": "C",
              "text": "Diagram batang bertingkat"
            },
            {
              "key": "D",
              "text": "Diagram garis"
            }
          ],
          "correctAnswer": "D",
          "hint": "Data yang dicatat secara berkesinambungan menurut waktu paling jelas ditampilkan dengan diagram garis.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nUntuk melihat tren fluktuasi data yang berkembang menurut urutan waktu (time-series), jenis diagram yang paling representatif adalah **diagram garis** (Opsi D)."
        },
        {
          "id": "smp7-b6-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dalam suatu kelas berisi 40 siswa, sebanyak 10 siswa menyukai mata pelajaran sains. Jika disajikan dalam diagram lingkaran derajat, besar sudut juring untuk siswa yang menyukai sains adalah...",
          "options": [
            {
              "key": "A",
              "text": "$90^\\circ$"
            },
            {
              "key": "B",
              "text": "$45^\\circ$"
            },
            {
              "key": "C",
              "text": "$60^\\circ$"
            },
            {
              "key": "D",
              "text": "$100^\\circ$"
            }
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
            {
              "key": "A",
              "text": "50 orang"
            },
            {
              "key": "B",
              "text": "40 orang"
            },
            {
              "key": "C",
              "text": "60 orang"
            },
            {
              "key": "D",
              "text": "45 orang"
            }
          ],
          "correctAnswer": "A",
          "hint": "Hitung persentase menggambar: $100\\% - (30\\% + 25\\% + 20\\%) = 25\\%$. Lalu kalikan dengan 200 siswa.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Persentase menggambar:\n$$100\\% - (30\\% + 25\\% + 20\\%) = 100\\% - 75\\% = 25\\%$$\n2. Jumlah siswa:\n$$25\\% \\times 200 = \\frac{25}{100} \\times 200 = 50\\text{ orang}$$\nJumlah siswa yang hobi menggambar adalah **50 orang** (Opsi A)."
        },
        {
          "id": "smp7-b6-5",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Diagram lingkaran menyajikan data dalam bentuk juring lingkaran. Jumlah seluruh persentase dari juring-juring lingkaran adalah...",
          "options": [
            {
              "key": "A",
              "text": "360%"
            },
            {
              "key": "B",
              "text": "180%"
            },
            {
              "key": "C",
              "text": "90%"
            },
            {
              "key": "D",
              "text": "100%"
            }
          ],
          "correctAnswer": "D",
          "hint": "Total seluruh persentase lingkaran utuh adalah 100%.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nTotal persentase adalah **100%** (atau $360^\\circ$) (Opsi D)."
        },
        {
          "id": "smp7-b6-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Data nilai ulangan matematika 10 siswa: 6, 7, 8, 8, 7, 9, 8, 7, 8, 10. Modus dari data tersebut adalah...",
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
          "hint": "Frekuensi kemunculan: 6 (1x), 7 (3x), 8 (4x), 9 (1x), 10 (1x). Nilai 8 paling sering muncul.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nModus adalah **8** (frekuensi 4) (Opsi B)."
        },
        {
          "id": "smp7-b6-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Median dari data: 5, 8, 7, 9, 6, 8, 7, 6, 9 adalah...",
          "options": [
            {
              "key": "A",
              "text": "7,5"
            },
            {
              "key": "B",
              "text": "7"
            },
            {
              "key": "C",
              "text": "8"
            },
            {
              "key": "D",
              "text": "6,5"
            }
          ],
          "correctAnswer": "B",
          "hint": "Urutkan data: 5, 6, 6, 7, 7, 8, 8, 9, 9. Data ke-5 (tengah) adalah 7.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nData terurut: 5, 6, 6, 7, **7**, 8, 8, 9, 9 $\\implies$ Median $= 7$ (Opsi B)."
        },
        {
          "id": "smp7-b6-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Rata-rata (mean) dari data 12, 15, 18, 20, 25 adalah...",
          "options": [
            {
              "key": "A",
              "text": "18"
            },
            {
              "key": "B",
              "text": "17"
            },
            {
              "key": "C",
              "text": "19"
            },
            {
              "key": "D",
              "text": "16"
            }
          ],
          "correctAnswer": "A",
          "hint": "Jumlah $= 12 + 15 + 18 + 20 + 25 = 90$. Mean $= 90 : 5 = 18$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\bar{x} = \\frac{90}{5} = 18$$ (Opsi A)."
        },
        {
          "id": "smp7-b6-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Pada diagram lingkaran hobi siswa, juring sepak bola membentuk sudut pusat $108^\\circ$. Berapa persen siswa yang gemar sepak bola?",
          "options": [
            {
              "key": "A",
              "text": "25%"
            },
            {
              "key": "B",
              "text": "35%"
            },
            {
              "key": "C",
              "text": "30%"
            },
            {
              "key": "D",
              "text": "20%"
            }
          ],
          "correctAnswer": "C",
          "hint": "Persentase $= \\frac{108}{360} \\times 100\\% = \\frac{3}{10} \\times 100\\% = 30\\%$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{108}{360} \\times 100\\% = 30\\%$$ (Opsi C)."
        },
        {
          "id": "smp7-b6-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jangkauan (range) dari kumpulan data: 34, 45, 28, 56, 39, 62, 31 adalah...",
          "options": [
            {
              "key": "A",
              "text": "30"
            },
            {
              "key": "B",
              "text": "38"
            },
            {
              "key": "C",
              "text": "28"
            },
            {
              "key": "D",
              "text": "34"
            }
          ],
          "correctAnswer": "D",
          "hint": "Jangkauan $= X_{\\text{maks}} - X_{\\text{min}} = 62 - 28 = 34$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$R = 62 - 28 = 34$$ (Opsi D)."
        },
        {
          "id": "smp7-b6-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Nilai rata-rata ulangan matematika 29 siswa adalah 76. Jika nilai seorang siswa susulan digabungkan, nilai rata-ratanya menjadi 76,5. Nilai siswa susulan tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "89"
            },
            {
              "key": "B",
              "text": "93"
            },
            {
              "key": "C",
              "text": "88"
            },
            {
              "key": "D",
              "text": "91"
            }
          ],
          "correctAnswer": "D",
          "hint": "Total nilai awal: $29 \\times 76 = 2.204$. Total nilai baru: $30 \\times 76{,}5 = 2.295$. Nilai susulan: $2.295 - 2.204 = 91$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$x = (30 \\times 76{,}5) - (29 \\times 76) = 2.295 - 2.204 = 91$$ (Opsi D)."
        },
        {
          "id": "smp7-b6-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dalam suatu kelas terdapat 16 siswa perempuan dengan rata-rata tinggi badan 155 cm, dan 14 siswa laki-laki dengan rata-rata 165 cm. Rata-rata tinggi badan seluruh siswa di kelas tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "160,00 cm"
            },
            {
              "key": "B",
              "text": "159,67 cm"
            },
            {
              "key": "C",
              "text": "158,50 cm"
            },
            {
              "key": "D",
              "text": "161,20 cm"
            }
          ],
          "correctAnswer": "B",
          "hint": "Mean gabungan: $\\frac{(16 \\times 155) + (14 \\times 165)}{30} = \\frac{2.480 + 2.310}{30} = \\frac{4.790}{30} \\approx 159{,}67$ cm.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\bar{x} = \\frac{4.790}{30} \\approx 159{,}67\\text{ cm}$$ (Opsi B)."
        },
        {
          "id": "smp7-b6-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Diagram garis paling tepat digunakan untuk menyajikan...",
          "options": [
            {
              "key": "A",
              "text": "Data persentase pemilih pemilu"
            },
            {
              "key": "B",
              "text": "Data perbandingan kategori tanpa urutan waktu"
            },
            {
              "key": "C",
              "text": "Data berkala yang menunjukkan perkembangan dari waktu ke waktu"
            },
            {
              "key": "D",
              "text": "Data frekuensi nilai tunggal"
            }
          ],
          "correctAnswer": "C",
          "hint": "Diagram garis digunakan untuk data kontinu yang berkembang secara kronologis (waktu).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nDiagram garis untuk **perkembangan data dari waktu ke waktu** (Opsi C)."
        },
        {
          "id": "smp7-b6-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Data nilai ujian: 60 (4 siswa), 70 (8 siswa), 80 (12 siswa), 90 (6 siswa). Rata-rata nilai ujian tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "75,00"
            },
            {
              "key": "B",
              "text": "76,67"
            },
            {
              "key": "C",
              "text": "78,00"
            },
            {
              "key": "D",
              "text": "77,50"
            }
          ],
          "correctAnswer": "B",
          "hint": "Total nilai $= (4 \\times 60) + (8 \\times 70) + (12 \\times 80) + (6 \\times 90) = 240 + 560 + 960 + 540 = 2.300$. Total siswa $= 30$. Mean $= 2.300 : 30 \\approx 76{,}67$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\bar{x} = \\frac{2.300}{30} \\approx 76{,}67$$ (Opsi B)."
        },
        {
          "id": "smp7-b6-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Kuartil bawah ($Q_1$) dari data terurut: 3, 4, 4, 5, 6, 7, 8, 8, 9 adalah...",
          "options": [
            {
              "key": "A",
              "text": "4,5"
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
              "text": "3,5"
            }
          ],
          "correctAnswer": "C",
          "hint": "Median ($Q_2$) data ke-5 adalah 6. Separuh bawah: 3, 4, 4, 5. $Q_1 = \\frac{4 + 4}{2} = 4$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$Q_1 = 4$$ (Opsi C)."
        },
        {
          "id": "smp7-b6-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Rata-rata 5 bilangan asli berurutan adalah 18. Hasil kali bilangan terkecil dan terbesar dari kelima bilangan tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "315"
            },
            {
              "key": "B",
              "text": "324"
            },
            {
              "key": "C",
              "text": "320"
            },
            {
              "key": "D",
              "text": "308"
            }
          ],
          "correctAnswer": "C",
          "hint": "Bilangan tengah $= 18$. Kelima bilangan: 16, 17, 18, 19, 20. Hasil kali $= 16 \\times 20 = 320$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$16 \\times 20 = 320$$ (Opsi C)."
        },
        {
          "id": "smp7-b6-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Kuartil atas ($Q_3$) dan jangkauan interkuartil ($QR$) dari data: 2, 4, 5, 6, 7, 8, 9, 10, 12 berturut-turut adalah...",
          "options": [
            {
              "key": "A",
              "text": "Q3 = 10 dan QR = 5"
            },
            {
              "key": "B",
              "text": "Q3 = 9,5 dan QR = 5"
            },
            {
              "key": "C",
              "text": "Q3 = 9 dan QR = 4,5"
            },
            {
              "key": "D",
              "text": "Q3 = 9,5 dan QR = 4,5"
            }
          ],
          "correctAnswer": "B",
          "hint": "Median $= 7$. Bawah: 2, 4, 5, 6 $\\implies Q_1 = 4{,}5$. Atas: 8, 9, 10, 12 $\\implies Q_3 = 9{,}5$. $QR = 9{,}5 - 4{,}5 = 5$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $Q_1 = 4{,}5$\n2. $Q_3 = 9{,}5$\n3. $QR = 9{,}5 - 4{,}5 = 5$ (Opsi B)."
        },
        {
          "id": "smp7-b6-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Suatu kelompok belajar memiliki 8 siswa dengan rata-rata nilai 75. Jika nilai tertinggi dikeluarkan, rata-ratanya menjadi 73. Jika nilai terendah dikeluarkan dari 8 siswa mula-mula, rata-ratanya menjadi 77. Selisih nilai tertinggi dan terendah adalah...",
          "options": [
            {
              "key": "A",
              "text": "24"
            },
            {
              "key": "B",
              "text": "30"
            },
            {
              "key": "C",
              "text": "28"
            },
            {
              "key": "D",
              "text": "26"
            }
          ],
          "correctAnswer": "C",
          "hint": "Total 8 siswa $= 600$. Total 7 siswa tanpa tertinggi $= 7 \\times 73 = 511 \\implies X_{\\text{maks}} = 600 - 511 = 89$. Total 7 siswa tanpa terendah $= 7 \\times 77 = 539 \\implies X_{\\text{min}} = 600 - 539 = 61$. Selisih $= 89 - 61 = 28$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$X_{\\text{maks}} - X_{\\text{min}} = 89 - 61 = 28$$ (Opsi C)."
        },
        {
          "id": "smp7-b6-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Data pendapatan harian pedagang (dalam ratusan ribu rupiah): 4, 5, 6, 7, 8, 9, 10. Jika setiap pendapatan dinaikkan 20% kemudian ditambah 1 ratus ribu rupiah, perubahan nilai rata-rata dan simpangan kuartil adalah...",
          "options": [
            {
              "key": "A",
              "text": "Keduanya tetap sama"
            },
            {
              "key": "B",
              "text": "Rata-rata tetap tetapi simpangan kuartil bertambah"
            },
            {
              "key": "C",
              "text": "Keduanya hanya bertambah 1"
            },
            {
              "key": "D",
              "text": "Rata-rata bertambah dan simpangan kuartil bertambah 20%"
            }
          ],
          "correctAnswer": "D",
          "hint": "Operasi linear $Y = aX + b$: rata-rata berubah menjadi $a\\bar{X} + b$, ukuran penyebaran (simpangan kuartil) hanya dipengaruhi faktor skala $|a| = 1{,}2$ (bertambah 20%).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nUkuran penyebaran hanya terpengaruh pengali 20% (Opsi D)."
        },
        {
          "id": "smp7-b6-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Diagram batang ganda paling sesuai dimanfaatkan untuk...",
          "options": [
            {
              "key": "A",
              "text": "Membandingkan dua kelompok data berbeda pada kategori waktu atau aspek yang sama"
            },
            {
              "key": "B",
              "text": "Menyajikan data kontinu tunggal"
            },
            {
              "key": "C",
              "text": "Menghitung luas daerah di bawah kurva"
            },
            {
              "key": "D",
              "text": "Menggantikan diagram lingkaran tunggal"
            }
          ],
          "correctAnswer": "A",
          "hint": "Diagram batang ganda menyandingkan dua kelompok data untuk perbandingan langsung.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nUntuk **membandingkan dua kelompok data pada kategori yang sama** (Opsi A)."
        }
      ]
    }
  ]
};
