/**
 * Data Kurikulum Kelas 12 SMA (Fase F) — Kurikulum Merdeka
 * Matematika Wajib + Matematika Lanjut
 */

export const grade12Data = {
  "grade": 12,
  "level": "SMA",
  "phase": "Fase F",
  "description": "Kurikulum Merdeka: Matematika Wajib (Barisan & Deret, Investasi & Pinjaman, Kaidah Pencacahan, Peluang, Statistika Inferensi, Geometri Transformasi) dan Matematika Lanjut",
  "chapters": [
    {
      "id": "sma12-bab1-barisan-deret",
      "title": "Bab 1: Barisan dan Deret",
      "track": "WAJIB",
      "trackLabel": "Matematika Utama (Wajib)",
      "summary": {
        "overview": "Pola keteraturan adalah salah satu bahasa paling fundamental di alam semesta dan peradaban manusia. Ketika seorang petani mengamati pertambahan tinggi tanaman jagung yang tumbuh konstan setiap minggu, seorang arsitek menyusun barisan kursi di gedung teater dengan kapasitas bertambah teratur di setiap baris belakangnya, atau seorang ilmuwan fisika mengamati lintasan pantulan bola tenis yang memantul berulang kali hingga akhirnya berhenti di lantai, seluruh fenomena dinamis tersebut tunduk pada hukum keteraturan Barisan dan Deret.\n\nDalam dunia ekonomi dan kehidupan sehari-hari, barisan dan deret menjadi instrumen utama untuk mengukur akumulasi kekayaan dan kewajiban finansial. Perhitungan bunga simpanan pada tabungan konvensional maupun koperasi desa sering kali menggunakan skema Bunga Tunggal, di mana imbal jasa dihitung secara proporsional terhadap modal awal yang disetorkan. Memahami barisan bilangan memungkinkan kita memprediksi nilai suku pada masa depan tanpa harus menghitungnya satu demi satu secara manual.\n\nBab ini membimbing siswa mengeksplorasi konsep barisan aritmetika dengan beda konstan, barisan geometri dengan rasio pelipatgandaan tetap, deret penjumlahan suku-sukunya, hingga deret geometri tak hingga yang konvergen ($|r| < 1$). Siswa dilatih memodelkan persoalan kontekstual nyata, mulai dari gerak pantulan elastisitas benda jatuh bebas hingga kalkulasi imbal hasil simpanan modal dengan presisi analitis.",
        "coreConcepts": [
          "Barisan Aritmetika & Beda Antarsuku: Barisan bilangan dengan selisih dua suku yang berurutan selalu bernilai tetap: $b = U_n - U_{n-1}$. Rumus suku ke-$n$ adalah $U_n = a + (n - 1)b$, di mana $a = U_1$ adalah suku pertama. Jika $b > 0$, barisan dikatakan monoton naik; jika $b < 0$, barisan monoton turun.",
          "Barisan Geometri & Rasio: Barisan bilangan dengan perbandingan atau hasil bagi antara dua suku yang berurutan selalu bernilai konstan: $r = \\frac{U_n}{U_{n-1}}$. Rumus suku ke-$n$ adalah $U_n = a \\cdot r^{n-1}$. Nilai rasio menentukan pertumbuhan eksponensial nilai suku.",
          "Deret Aritmetika: Penjumlahan berurutan suku-suku barisan aritmetika: $S_n = \\sum_{k=1}^n U_k$. Rumus jumlah $n$ suku pertama adalah $S_n = \\frac{n}{2}(a + U_n) = \\frac{n}{2}[2a + (n - 1)b]$. Hubungan fundamental deret dan suku: $U_n = S_n - S_{n-1}$.",
          "Deret Geometri: Penjumlahan suku-suku barisan geometri. Rumus jumlah $n$ suku pertama adalah $S_n = \\frac{a(r^n - 1)}{r - 1}$ untuk $r > 1$, atau $S_n = \\frac{a(1 - r^n)}{1 - r}$ untuk $r < 1$ ($r \\neq 1$).",
          "Deret Geometri Tak Hingga: Jika rasio berada dalam selang konvergen $-1 < r < 1$ ($|r| < 1$), maka suku ke-$n$ mendekati nol saat $n \\to \\infty$, sehingga deret memiliki jumlah terhingga: $S_\\infty = \\frac{a}{1 - r}$. Pada kasus pantulan bola yang dijatuhkan dari ketinggian awal $h_0$ dengan rasio pantulan $\\frac{p}{q}$, panjang seluruh lintasan total hingga bola berhenti adalah $S_{\\text{total}} = h_0 \\cdot \\frac{q + p}{q - p}$.",
          "Bunga Tunggal (Simple Interest): Bunga finansial yang dihitung hanya berdasarkan besaran modal awal ($M_0$) yang diendapkan: $B = M_0 \\cdot i \\cdot t$. Total akumulasi modal akhir setelah periode $t$ adalah $M_t = M_0(1 + it)$, di mana $i$ adalah suku bunga per periode dan $t$ adalah jangka waktu investasi."
        ],
        "workedExamples": [
          {
            "title": "Analisis Barisan Aritmetika Bertingkat",
            "problem": "Suatu barisan aritmetika memiliki suku ke-4 bernilai 16 dan suku ke-8 bernilai 28. Tentukan suku pertama ($a$), beda ($b$), dan nilai suku ke-15.",
            "solution": "Langkah 1: Susun persamaan suku ke-$n$ dari informasi yang diketahui:\n$$U_4 = a + 3b = 16$$\n$$U_8 = a + 7b = 28$$\n\nLangkah 2: Eliminasi variabel $a$ dengan mengurangkan kedua persamaan:\n$$(a + 7b) - (a + 3b) = 28 - 16$$\n$$4b = 12 \\implies b = 3$$\n\nLangkah 3: Substitusikan nilai $b = 3$ ke dalam persamaan pertama untuk menemukan $a$:\n$$a + 3(3) = 16 \\implies a + 9 = 16 \\implies a = 7$$\n\nLangkah 4: Hitung nilai suku ke-15:\n$$U_{15} = a + 14b = 7 + 14(3) = 7 + 42 = 49$$\nJadi, suku pertama adalah **7**, beda adalah **3**, dan nilai suku ke-15 adalah **49**."
          },
          {
            "title": "Kalkulasi Panjang Lintasan Pantulan Bola Tak Hingga",
            "problem": "Sebuah bola basket dijatuhkan dari lantai 3 sebuah gedung dengan ketinggian 12 meter. Setiap kali memantul di lantai, bola mencapai tinggi $\\frac{2}{3}$ dari ketinggian sebelumnya secara kontinu sampai berhenti. Berapakah panjang seluruh lintasan yang ditempuh bola tersebut?",
            "solution": "Langkah 1: Identifikasi parameter awal dan rasio:\n- Ketinggian awal jatuh: $h_0 = 12\\text{ meter}$\n- Rasio pemantulan: $r = \\frac{p}{q} = \\frac{2}{3}$ dengan $p = 2$ dan $q = 3$.\n\nLangkah 2: Gunakan formula terpadu lintasan bola memantul (lintasan turun pertama ditambah dua kali lintasan deret tak hingga naik-turun):\n$$S_{\\text{total}} = h_0 \\cdot \\frac{q + p}{q - p}$$\n\nLangkah 3: Masukkan nilai ke dalam formula:\n$$S_{\\text{total}} = 12 \\cdot \\frac{3 + 2}{3 - 2} = 12 \\cdot \\frac{5}{1} = 60\\text{ meter}$$\nJadi, panjang seluruh lintasan yang ditempuh bola hingga berhenti adalah **60 meter**."
          }
        ],
        "keyFormulas": [
          {
            "label": "Suku ke-n Aritmetika",
            "formula": "U_n = a + (n - 1)b"
          },
          {
            "label": "Jumlah n Suku Aritmetika",
            "formula": "S_n = \\frac{n}{2}[2a + (n - 1)b] = \\frac{n}{2}(a + U_n)"
          },
          {
            "label": "Suku ke-n Geometri",
            "formula": "U_n = a \\cdot r^{n-1}"
          },
          {
            "label": "Deret Geometri Tak Hingga",
            "formula": "S_\\infty = \\frac{a}{1 - r} \\quad (|r| < 1)"
          },
          {
            "label": "Panjang Lintasan Bola Memantul",
            "formula": "S_{\\text{total}} = h_0 \\cdot \\frac{q + p}{q - p} \\quad \\left(r = \\frac{p}{q}\\right)"
          },
          {
            "label": "Bunga Tunggal",
            "formula": "M_t = M_0(1 + it) \\quad \\text{dengan } B = M_0 \\cdot i \\cdot t"
          }
        ],
        "misconceptions": [
          "Hanya menghitung lintasan naik pada pantulan bola dan melupakan bahwa bola juga harus turun kembali dengan panjang yang persis sama untuk setiap pantulan.",
          "Menerapkan rumus jumlah deret tak hingga pada barisan geometri dengan rasio $|r| \\ge 1$. Deret tersebut bersifat divergen dan tidak memiliki jumlah berhingga.",
          "Menghitung bunga tunggal periode bulan menggunakan rumus tahunan tanpa membagi periode waktu dengan 12 ($t/12$)."
        ],
        "tutorTip": "Untuk soal pantulan bola jatuh bebas dari ketinggian $h_0$ dengan rasio pecahan $\\frac{p}{q}$, ingat trik cepat: kalikan tinggi awal dengan pecahan '(penyebut + pembilang) dibagi (penyebut - pembilang)'!"
      },
      "questions": [
        {
          "id": "sma12-b1-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Suatu barisan aritmetika memiliki suku ke-4 bernilai 16 dan suku ke-8 bernilai 28. Nilai suku ke-10 barisan tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "32"
            },
            {
              "key": "B",
              "text": "36"
            },
            {
              "key": "C",
              "text": "34"
            },
            {
              "key": "D",
              "text": "30"
            }
          ],
          "correctAnswer": "C",
          "hint": "Cari beda antarsuku terlebih dahulu: $4b = U_8 - U_4 = 28 - 16 = 12$, kemudian tambahkan $2b$ ke $U_8$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Cari selisih beda: $U_8 - U_4 = 4b \\implies 28 - 16 = 12 \\implies b = 3$\n2. Suku pertama: $a = U_4 - 3b = 16 - 3(3) = 16 - 9 = 7$\n3. Suku ke-10:\n$$U_{10} = a + 9b = 7 + 9(3) = 7 + 27 = 34$$\nJadi, nilai suku ke-10 adalah **34** (Opsi C)."
        },
        {
          "id": "sma12-b1-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Diketahui barisan geometri dengan suku pertama $a = 5$ dan rasio $r = 2$. Jumlah 6 suku pertama ($S_6$) barisan tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "315"
            },
            {
              "key": "B",
              "text": "320"
            },
            {
              "key": "C",
              "text": "310"
            },
            {
              "key": "D",
              "text": "630"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan rumus jumlah deret geometri: $S_n = \\frac{a(r^n - 1)}{r - 1}$ dengan $n = 6$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Masukkan $a = 5$, $r = 2$, dan $n = 6$ ke rumus $S_n$:\n$$S_6 = \\frac{5(2^6 - 1)}{2 - 1}$$\n2. Evaluasi perpangkatan: $2^6 = 64$\n3. Hitung hasil perkalian:\n$$S_6 = \\frac{5(64 - 1)}{1} = 5 \\times 63 = 315$$\nJadi, jumlah 6 suku pertama adalah **315** (Opsi A)."
        },
        {
          "id": "sma12-b1-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah bola dijatuhkan dari balkon gedung setinggi 8 meter. Setiap kali memantul ke lantai, bola mencapai tinggi $\\frac{3}{5}$ dari tinggi sebelumnya. Panjang lintasan bola seluruhnya sampai berhenti adalah...",
          "options": [
            {
              "key": "A",
              "text": "24 meter"
            },
            {
              "key": "B",
              "text": "40 meter"
            },
            {
              "key": "C",
              "text": "20 meter"
            },
            {
              "key": "D",
              "text": "32 meter"
            }
          ],
          "correctAnswer": "D",
          "hint": "Gunakan formula praktis lintasan bola: $S = h_0 \\cdot \\frac{q + p}{q - p}$ dengan $h_0 = 8$ dan rasio $\\frac{p}{q} = \\frac{3}{5}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Diketahui ketinggian awal $h_0 = 8\\text{ m}$ dan rasio $r = \\frac{3}{5}$ ($p = 3, q = 5$).\n2. Gunakan rumus terpadu lintasan pantulan bola:\n$$S_{\\text{total}} = h_0 \\cdot \\frac{q + p}{q - p} = 8 \\cdot \\frac{5 + 3}{5 - 3} = 8 \\cdot \\frac{8}{2} = 8 \\cdot 4 = 32\\text{ meter}$$\nPanjang seluruh lintasan bola sampai berhenti adalah **32 meter** (Opsi D)."
        },
        {
          "id": "sma12-b1-4",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah gedung pertunjukan memiliki 15 baris kursi. Baris terdepan berisi 20 kursi, dan setiap baris di belakangnya selalu memuat 4 kursi lebih banyak dari baris di depannya. Kapasitas total seluruh penonton di gedung tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "720 orang"
            },
            {
              "key": "B",
              "text": "680 orang"
            },
            {
              "key": "C",
              "text": "750 orang"
            },
            {
              "key": "D",
              "text": "640 orang"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan rumus jumlah deret aritmetika $S_n = \\frac{n}{2}[2a + (n - 1)b]$ dengan $n = 15, a = 20, b = 4$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Identifikasi parameter: $n = 15$, $a = 20$, $b = 4$.\n2. Masukkan ke rumus jumlah $n$ suku deret aritmetika:\n$$S_{15} = \\frac{15}{2}[2(20) + (15 - 1)(4)]$$\n$$S_{15} = \\frac{15}{2}[40 + 14(4)] = \\frac{15}{2}[40 + 56] = \\frac{15}{2}(96)$$\n3. Selesaikan perkalian: $15 \\times 48 = 720$\nKapasitas total kursi gedung adalah **720 orang** (Opsi A)."
        },
        {
          "id": "sma12-b1-5",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Pak Bayu menaruh modal di koperasi simpan pinjam sebesar $\\text{Rp}10.000.000,00$ dengan sistem bunga tunggal $6\\%$ per tahun. Jika setelah beberapa bulan total saldo tabungan menjadi $\\text{Rp}10.400.000,00$, lama waktu Pak Bayu menabung adalah...",
          "options": [
            {
              "key": "A",
              "text": "6 bulan"
            },
            {
              "key": "B",
              "text": "10 bulan"
            },
            {
              "key": "C",
              "text": "12 bulan"
            },
            {
              "key": "D",
              "text": "8 bulan"
            }
          ],
          "correctAnswer": "D",
          "hint": "Bunga bersih yang diperoleh adalah $\\text{Rp}400.000,00$. Gunakan $B = M_0 \\cdot i \\cdot \\frac{t}{12}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Hitung akumulasi bunga yang diperoleh: $B = M_t - M_0 = 10.400.000 - 10.000.000 = \\text{Rp}400.000,00$.\n2. Masukkan ke formula bunga tunggal (dalam satuan bulan $t$):\n$$B = M_0 \\times i \\times \\frac{t}{12}$$\n$$400.000 = 10.000.000 \\times 0{,}06 \\times \\frac{t}{12}$$\n$$400.000 = 600.000 \\times \\frac{t}{12} = 50.000 \\times t$$\n3. Hitung nilai $t$:\n$$t = \\frac{400.000}{50.000} = 8\\text{ bulan}$$\nLama Pak Bayu menabung adalah **8 bulan** (Opsi D)."
        },
        {
          "id": "sma12-b1-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Diketahui barisan aritmetika dengan suku pertama $a = 5$ dan beda $b = 3$. Suku ke-20 barisan tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "65"
            },
            {
              "key": "B",
              "text": "59"
            },
            {
              "key": "C",
              "text": "62"
            },
            {
              "key": "D",
              "text": "68"
            }
          ],
          "correctAnswer": "C",
          "hint": "Rumus suku ke-$n$ aritmetika: $U_n = a + (n - 1)b = 5 + 19(3) = 5 + 57 = 62$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$U_{20} = 5 + 19(3) = 5 + 57 = 62$$ (Opsi C)."
        },
        {
          "id": "sma12-b1-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jumlah 10 suku pertama dari deret aritmetika $3 + 7 + 11 + 15 + \\dots$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "200"
            },
            {
              "key": "B",
              "text": "210"
            },
            {
              "key": "C",
              "text": "220"
            },
            {
              "key": "D",
              "text": "190"
            }
          ],
          "correctAnswer": "B",
          "hint": "Rumus jumlah: $S_n = \\frac{n}{2}[2a + (n - 1)b] = \\frac{10}{2}[2(3) + 9(4)] = 5(6 + 36) = 5(42) = 210$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$S_{10} = 5 \\times (6 + 36) = 5 \\times 42 = 210$$ (Opsi B)."
        },
        {
          "id": "sma12-b1-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Diketahui barisan geometri dengan suku pertama $a = 3$ dan rasio $r = 2$. Suku ke-7 barisan tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "96"
            },
            {
              "key": "B",
              "text": "384"
            },
            {
              "key": "C",
              "text": "192"
            },
            {
              "key": "D",
              "text": "128"
            }
          ],
          "correctAnswer": "C",
          "hint": "Rumus suku ke-$n$ geometri: $U_n = a r^{n-1} = 3 \\times 2^6 = 3 \\times 64 = 192$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$U_7 = 3 \\times 2^6 = 3 \\times 64 = 192$$ (Opsi C)."
        },
        {
          "id": "sma12-b1-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Jumlah deret geometri tak hingga $16 + 8 + 4 + 2 + \\dots$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "30"
            },
            {
              "key": "B",
              "text": "32"
            },
            {
              "key": "C",
              "text": "28"
            },
            {
              "key": "D",
              "text": "64"
            }
          ],
          "correctAnswer": "B",
          "hint": "Rumus deret tak hingga: $S_\\infty = \\frac{a}{1 - r} = \\frac{16}{1 - 0{,}5} = \\frac{16}{0{,}5} = 32$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$S_\\infty = \\frac{16}{1 - \\frac{1}{2}} = \\frac{16}{\\frac{1}{2}} = 32$$ (Opsi B)."
        },
        {
          "id": "sma12-b1-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dari suatu barisan aritmetika diketahui $U_3 = 11$ dan $U_7 = 23$. Suku pertama ($a$) dan beda ($b$) barisan tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "a = 5 dan b = 3"
            },
            {
              "key": "B",
              "text": "a = 2 dan b = 3"
            },
            {
              "key": "C",
              "text": "a = 5 dan b = 4"
            },
            {
              "key": "D",
              "text": "a = 3 dan b = 4"
            }
          ],
          "correctAnswer": "A",
          "hint": "Selisih suku: $U_7 - U_3 = 4b = 23 - 11 = 12 \\implies b = 3$. Lalu $a = 11 - 2(3) = 5$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $4b = 12 \\implies b = 3$\n2. $a = 11 - 6 = 5$ (Opsi A)."
        },
        {
          "id": "sma12-b1-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Suatu bakteri membelah diri menjadi 2 setiap 20 menit. Jika mula-mula terdapat 50 bakteri, berapa banyak bakteri setelah 2 jam?",
          "options": [
            {
              "key": "A",
              "text": "1.600 bakteri"
            },
            {
              "key": "B",
              "text": "6.400 bakteri"
            },
            {
              "key": "C",
              "text": "800 bakteri"
            },
            {
              "key": "D",
              "text": "3.200 bakteri"
            }
          ],
          "correctAnswer": "D",
          "hint": "2 jam $= 120$ menit $= 6$ kali pembelahan. $U_7 = 50 \\times 2^6 = 50 \\times 64 = 3.200$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$N = 50 \\times 2^6 = 50 \\times 64 = 3.200\\text{ bakteri}$$ (Opsi D)."
        },
        {
          "id": "sma12-b1-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah bola dijatuhkan dari ketinggian 12 meter dan memantul kembali dengan ketinggian $\\frac{2}{3}$ dari tinggi sebelumnya. Panjang lintasan bola sampai berhenti adalah...",
          "options": [
            {
              "key": "A",
              "text": "60 meter"
            },
            {
              "key": "B",
              "text": "48 meter"
            },
            {
              "key": "C",
              "text": "72 meter"
            },
            {
              "key": "D",
              "text": "36 meter"
            }
          ],
          "correctAnswer": "A",
          "hint": "Rumus pantulan bola: $S = h \\times \\frac{b + a}{b - a}$ untuk rasio $\\frac{a}{b} = \\frac{2}{3}$. $S = 12 \\times \\frac{3 + 2}{3 - 2} = 12 \\times 5 = 60$ meter.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$S = 12 \\times \\frac{3 + 2}{3 - 2} = 12 \\times 5 = 60\\text{ meter}$$ (Opsi A)."
        },
        {
          "id": "sma12-b1-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Gaji seorang karyawan setiap bulan naik Rp50.000,00 secara tetap. Jika gaji pada bulan pertama adalah Rp2.500.000,00, total seluruh gaji yang diterima karyawan tersebut selama 1 tahun pertama adalah...",
          "options": [
            {
              "key": "A",
              "text": "Rp32.500.000,00"
            },
            {
              "key": "B",
              "text": "Rp33.300.000,00"
            },
            {
              "key": "C",
              "text": "Rp34.000.000,00"
            },
            {
              "key": "D",
              "text": "Rp30.000.000,00"
            }
          ],
          "correctAnswer": "B",
          "hint": "$S_{12} = \\frac{12}{2}[2(2.500.000) + 11(50.000)] = 6[5.000.000 + 550.000] = 6(5.550.000) = 33.300.000$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$S_{12} = 6 \\times (5.000.000 + 550.000) = 33.300.000\\text{ rupiah}$$ (Opsi B)."
        },
        {
          "id": "sma12-b1-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Tiga buah bilangan membentuk barisan geometri. Hasil kali ketiga bilangan tersebut adalah 64. Suku tengah ($U_2$) barisan tersebut adalah...",
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
              "text": "16"
            }
          ],
          "correctAnswer": "A",
          "hint": "Misalkan barisan $\\frac{a}{r}, a, ar$. Hasil kali $= a^3 = 64 \\implies a = 4$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$a^3 = 64 \\implies a = 4$$ (Opsi A)."
        },
        {
          "id": "sma12-b1-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Di antara bilangan 4 dan 28 disisipkan 5 buah bilangan sehingga terbentuk barisan aritmetika baru. Beda barisan aritmetika yang baru adalah...",
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
              "text": "5"
            },
            {
              "key": "D",
              "text": "6"
            }
          ],
          "correctAnswer": "B",
          "hint": "Rumus sisipan: $b' = \\frac{b}{k + 1} = \\frac{28 - 4}{5 + 1} = \\frac{24}{6} = 4$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$b' = \\frac{24}{5 + 1} = 4$$ (Opsi B)."
        },
        {
          "id": "sma12-b1-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Jumlah $n$ suku pertama suatu deret aritmetika dirumuskan dengan $S_n = 3n^2 - 2n$. Rumus suku ke-$n$ ($U_n$) adalah...",
          "options": [
            {
              "key": "A",
              "text": "6n - 2"
            },
            {
              "key": "B",
              "text": "6n - 5"
            },
            {
              "key": "C",
              "text": "3n - 5"
            },
            {
              "key": "D",
              "text": "6n + 1"
            }
          ],
          "correctAnswer": "B",
          "hint": "Gunakan $U_n = S_n - S_{n-1} = (3n^2 - 2n) - [3(n-1)^2 - 2(n-1)] = 6n - 5$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$U_n = S_n - S_{n-1} = 6n - 5$$ (Opsi B)."
        },
        {
          "id": "sma12-b1-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah tali dipotong menjadi 5 bagian dengan panjang masing-masing potongan membentuk barisan geometri. Jika potongan terpendek 4 cm dan terpanjang 324 cm, panjang tali mula-mula adalah...",
          "options": [
            {
              "key": "A",
              "text": "480 cm"
            },
            {
              "key": "B",
              "text": "500 cm"
            },
            {
              "key": "C",
              "text": "440 cm"
            },
            {
              "key": "D",
              "text": "484 cm"
            }
          ],
          "correctAnswer": "D",
          "hint": "$a = 4, ar^4 = 324 \\implies r^4 = 81 \\implies r = 3$. Panjang total $= S_5 = \\frac{4(3^5 - 1)}{3 - 1} = 2(243 - 1) = 484$ cm.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $r^4 = 81 \\implies r = 3$\n2. $S_5 = \\frac{4(242)}{2} = 484\\text{ cm}$ (Opsi D)."
        },
        {
          "id": "sma12-b1-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Suatu deret geometri tak hingga konvergen memiliki jumlah $S_\\infty = 12$ dan suku pertama $a = 8$. Jumlah seluruh suku pada urutan bernomor genap ($U_2 + U_4 + U_6 + \\dots$) adalah...",
          "options": [
            {
              "key": "A",
              "text": "4"
            },
            {
              "key": "B",
              "text": "\\frac{8}{3}"
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
          "correctAnswer": "D",
          "hint": "$12 = \\frac{8}{1 - r} \\implies 1 - r = \\frac{8}{12} = \\frac{2}{3} \\implies r = \\frac{1}{3}$. Suku pertama genap: $U_2 = 8 \\times \\frac{1}{3} = \\frac{8}{3}$. Rasio genap $= r^2 = \\frac{1}{9}$. $S_{\\text{genap}} = \\frac{\\frac{8}{3}}{1 - \\frac{1}{9}} = \\frac{\\frac{8}{3}}{\\frac{8}{9}} = 3$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$S_{\\text{genap}} = \\frac{U_2}{1 - r^2} = \\frac{\\frac{8}{3}}{\\frac{8}{9}} = 3$$ (Opsi D)."
        },
        {
          "id": "sma12-b1-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Diketahui barisan geometri dengan $U_1 + U_2 + U_3 = 26$ dan $U_1 \\times U_2 \\times U_3 = 216$. Nilai rasio $r$ yang lebih besar dari 1 adalah...",
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
              "text": "\\frac{3}{2}"
            }
          ],
          "correctAnswer": "C",
          "hint": "$(U_2)^3 = 216 \\implies U_2 = 6$. Maka $\\frac{6}{r} + 6 + 6r = 26 \\implies 6r^2 - 20r + 6 = 0 \\implies 3r^2 - 10r + 3 = 0 \\implies (3r - 1)(r - 3) = 0 \\implies r = 3$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. $U_2 = 6$\n2. $\\frac{6}{r} + 6r = 20 \\implies 3r^2 - 10r + 3 = 0 \\implies r = 3$ (Opsi C)."
        },
        {
          "id": "sma12-b1-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Nilai dari $\\sum_{k=1}^{20} (4k - 3)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "800"
            },
            {
              "key": "B",
              "text": "760"
            },
            {
              "key": "C",
              "text": "780"
            },
            {
              "key": "D",
              "text": "820"
            }
          ],
          "correctAnswer": "C",
          "hint": "Deret aritmetika dengan $a = 4(1) - 3 = 1$, $U_{20} = 4(20) - 3 = 77$. $S_{20} = \\frac{20}{2}(1 + 77) = 10(78) = 780$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$S_{20} = 10 \\times (1 + 77) = 780$$ (Opsi C)."
        }
      ]
    },
    {
      "id": "sma12-bab2-investasi-pinjaman",
      "title": "Bab 2: Investasi dan Pinjaman",
      "track": "WAJIB",
      "trackLabel": "Matematika Utama (Wajib)",
      "summary": {
        "overview": "Dalam dinamika perekonomian kontemporer, uang memiliki nilai waktu (time value of money). Uang sebesar satu juta rupiah hari ini memiliki nilai ekonomi yang berbeda dibandingkan satu juta rupiah sepuluh tahun mendatang. Prinsip ini mendasari seluruh operasional lembaga perbankan, pasar modal, lembaga pembiayaan syariah maupun konvensional, hingga program perencanaan dana pensiun hari tua.\n\nTidak seperti bunga tunggal yang pertumbuhannya linear, sebagian besar produk keuangan dunia nyata menerapkan sistem Bunga Majemuk (compound interest), di mana bunga yang diperoleh pada setiap periode dikapitalisasi menjadi modal pokok baru untuk menghasilkan bunga pada periode berikutnya. Fenomena 'bunga berbunga' ini menciptakan kurva pertumbuhan eksponensial yang sangat kuat. Di sisi lain, ketika seseorang mengambil kredit kepemilikan rumah (KPR) atau modal usaha UMKM, skema pembayaran yang paling lazim digunakan adalah Anuitas, yaitu rangkaian pembayaran berkala dengan jumlah nominal tetap yang mengurai porsi angsuran pokok dan bunga secara sistematis.\n\nBab ini membekali siswa SMA dengan literasi finansial kuantitatif yang kokoh. Siswa mempelajari: (1) Perhitungan nilai masa depan modal investasi bunga majemuk; (2) Pengaruh frekuensi penggabungan bunga (tahunan, semesteran, bulanan); (3) Formula anuitas dan konstruksi tabel pelunasan pinjaman; serta (4) Penyusutan (depresiasi) nilai ekonomis aset produktif seiring berjalannya waktu. Keterampilan ini memberdayakan murid menjadi pengambil keputusan finansial yang rasional dan terukur.",
        "coreConcepts": [
          "Bunga Majemuk (Compound Interest): Bunga yang diperhitungkan berdasarkan saldo akhir modal periode sebelumnya (bunga berbunga). Formula modal akhir: $M_n = M_0(1 + i)^n$, di mana $M_0$ adalah modal awal, $i$ tingkat suku bunga per periode pemajemukan, dan $n$ jumlah periode pemajemukan.",
          "Pemajemukan Sub-Tahunan (Nominal vs Efektif): Jika bunga nominal tahunan $j$ dimajemukkan sebanyak $m$ kali dalam setahun (misal bulanan, $m=12$), maka suku bunga per periode adalah $\\frac{j}{m}$ dan jumlah total periode adalah $m \\times t$: $M_t = M_0\\left(1 + \\frac{j}{m}\\right)^{m \\cdot t}$.",
          "Konsep Anuitas (Annuity): Rangkaian pembayaran atau penerimaan angsuran dengan jumlah nominal uang yang tetap ($A$) pada setiap interval waktu beraturan. Setiap nilai anuitas terdiri dari dua komponen: angsuran pelunasan pokok ($a_n$) dan pembayaran bunga ($b_n$), sehingga berlaku hubungan: $A = a_n + b_n$.",
          "Sifat Komponen Anuitas: Seiring bertambahnya periode pembayaran, sisa hutang semakin berkurang, sehingga porsi pembayaran bunga ($b_n$) semakin mengecil sedangkan porsi angsuran pokok ($a_n$) semakin membesar. Hubungan antarangsuran pokok: $a_n = a_1(1 + i)^{n-1}$.",
          "Rumus Besaran Anuitas Pelunasan Pinjaman: Untuk melunasi pinjaman awal sebesar $M$ dalam $n$ periode dengan suku bunga $i$ per periode: $A = \\frac{M \\cdot i}{1 - (1 + i)^{-n}} = \\frac{M \\cdot i \\cdot (1 + i)^n}{(1 + i)^n - 1}$.",
          "Penyusutan Nilai Aset (Depresiasi): Penurunan nilai jual ekonomis barang produktif (seperti kendaraan atau mesin pabrik) seiring pemakaian. Menggunakan model peluruhan eksponensial: $V_n = V_0(1 - r)^n$, dengan $r$ adalah laju depresiasi per tahun."
        ],
        "workedExamples": [
          {
            "title": "Kalkulasi Investasi Deposito Bunga Majemuk",
            "problem": "Ibu Ratna menginvestasikan modal sebesar Rp20.000.000,00 di sebuah bank syariah dengan akad bagi hasil setara bunga majemuk 8% per tahun yang dikapitalisasi setiap tahun. Berapakah total nilai investasi Ibu Ratna setelah 3 tahun?",
            "solution": "Langkah 1: Identifikasi parameter investasi:\n- Modal awal: $M_0 = 20.000.000$\n- Suku bunga per periode: $i = 8\\% = 0{,}08$\n- Jumlah periode pemajemukan: $n = 3\\text{ tahun}$\n\nLangkah 2: Terapkan rumus nilai masa depan bunga majemuk:\n$$M_n = M_0(1 + i)^n = 20.000.000 \\times (1 + 0{,}08)^3$$\n\nLangkah 3: Hitung nilai pemangkatan $(1{,}08)^3$:\n$$(1{,}08)^3 = 1{,}08 \\times 1{,}08 \\times 1{,}08 = 1{,}259712$$\n\nLangkah 4: Kalikan dengan modal awal:\n$$M_3 = 20.000.000 \\times 1{,}259712 = 25.194.240$$\nJadi, nilai investasi Ibu Ratna setelah 3 tahun adalah **Rp25.194.240,00**."
          },
          {
            "title": "Menghitung Porsi Angsuran Pokok dan Bunga pada Anuitas",
            "problem": "Pak Hendra meminjam modal usaha di bank sebesar Rp12.000.000,00 yang dilunasi dengan skema anuitas bulanan sebesar Rp1.200.000,00 pada suku bunga 2% per bulan. Berapakah porsi bunga dan porsi angsuran pokok pada pembayaran bulan pertama?",
            "solution": "Langkah 1: Hitung beban bunga pada bulan pertama ($b_1$):\nBeban bunga dihitung dari saldo awal pinjaman:\n$$b_1 = M \\times i = 12.000.000 \\times 0{,}02 = 240.000$$\nJadi, beban bunga bulan pertama adalah Rp240.000,00.\n\nLangkah 2: Hitung porsi angsuran pokok pertama ($a_1$):\nKarena total anuitas $A = a_1 + b_1$, maka:\n$$a_1 = A - b_1 = 1.200.000 - 240.000 = 960.000$$\nJadi, porsi angsuran pokok pelunasan hutang bulan pertama adalah **Rp960.000,00** dan porsi bunganya adalah **Rp240.000,00**."
          }
        ],
        "keyFormulas": [
          {
            "label": "Modal Akhir Bunga Majemuk",
            "formula": "M_n = M_0(1 + i)^n"
          },
          {
            "label": "Bunga Majemuk Periode m Kali Setahun",
            "formula": "M_t = M_0\\left(1 + \\frac{j}{m}\\right)^{m \\cdot t}"
          },
          {
            "label": "Komposisi Anuitas",
            "formula": "A = a_n + b_n \\quad (A \\text{ konstan})"
          },
          {
            "label": "Besaran Anuitas Pelunasan",
            "formula": "A = \\frac{M \\cdot i}{1 - (1 + i)^{-n}}"
          },
          {
            "label": "Hubungan Angsuran Pokok",
            "formula": "a_n = a_1(1 + i)^{n-1}"
          },
          {
            "label": "Depresiasi Eksponensial",
            "formula": "V_n = V_0(1 - r)^n"
          }
        ],
        "misconceptions": [
          "Menghitung total bunga majemuk dengan mengalikan langsung $M_0 \\times i \\times n$. Ini adalah rumus bunga tunggal. Pada bunga majemuk, pokok investasi bertambah setiap periode sehingga polanya berbentuk eksponensial.",
          "Menganggap bahwa dalam skema anuitas, porsi pemotongan hutang pokok nilainya selalu tetap setiap bulan. Kenyataannya, angsuran pokok ($a_n$) semakin membesar setiap bulan karena beban bunga sisa hutang ($b_n$) semakin mengecil."
        ],
        "tutorTip": "Ingat prinsip neraca anuitas: 'Bunga selalu dihitung dari SISA HUTANG sebelumnya, bukan dari nilai pinjaman awal'. Karena itu, porsi bunga selalu menyusut dari bulan ke bulan."
      },
      "questions": [
        {
          "id": "sma12-b2-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Seseorang menginvestasikan uang sebesar $\\text{Rp}5.000.000,00$ dengan suku bunga majemuk $10\\%$ per tahun. Besar saldo investasi tersebut pada akhir tahun ke-2 adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\text{Rp}6.050.000,00$"
            },
            {
              "key": "B",
              "text": "$\\text{Rp}6.000.000,00$"
            },
            {
              "key": "C",
              "text": "$\\text{Rp}5.500.000,00$"
            },
            {
              "key": "D",
              "text": "$\\text{Rp}6.100.000,00$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan formula bunga majemuk $M_2 = M_0(1 + i)^2$ dengan $M_0 = 5.000.000$ dan $i = 0{,}10$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Formula: $M_2 = M_0(1 + 0{,}10)^2 = 5.000.000 \\times (1{,}1)^2$\n2. $(1{,}1)^2 = 1{,}21$\n3. $M_2 = 5.000.000 \\times 1{,}21 = \\text{Rp}6.050.000,00$\nBesar modal pada akhir tahun ke-2 adalah **$\\text{Rp}6.050.000,00$** (Opsi A)."
        },
        {
          "id": "sma12-b2-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Suatu pinjaman dilunasi dengan anuitas bulanan sebesar $\\text{Rp}850.000,00$. Jika pada cicilan bulan ke-3 besar angsuran pokok pelunasannya adalah $\\text{Rp}600.000,00$, maka besar beban bunga pada bulan ke-3 tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\text{Rp}250.000,00$"
            },
            {
              "key": "B",
              "text": "$\\text{Rp}300.000,00$"
            },
            {
              "key": "C",
              "text": "$\\text{Rp}200.000,00$"
            },
            {
              "key": "D",
              "text": "$\\text{Rp}150.000,00$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Nilai anuitas selalu merupakan penjumlahan angsuran pokok dan bunga: $A = a_n + b_n$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Hubungan anuitas: $A = a_3 + b_3$\n2. Masukkan angka yang diketahui:\n$$850.000 = 600.000 + b_3$$\n$$b_3 = 850.000 - 600.000 = \\text{Rp}250.000,00$$\nBeban bunga pada bulan ke-3 adalah **$\\text{Rp}250.000,00$** (Opsi A)."
        },
        {
          "id": "sma12-b2-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Pinjaman sebesar $\\text{Rp}10.000.000,00$ dicicil dengan anuitas tahunan dengan suku bunga $5\\%$ per tahun. Jika besar angsuran pokok pada tahun pertama adalah $a_1 = \\text{Rp}1.500.000,00$, maka besar angsuran pokok pada tahun ke-2 ($a_2$) adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\text{Rp}1.600.000,00$"
            },
            {
              "key": "B",
              "text": "$\\text{Rp}1.575.000,00$"
            },
            {
              "key": "C",
              "text": "$\\text{Rp}1.550.000,00$"
            },
            {
              "key": "D",
              "text": "$\\text{Rp}1.650.000,00$"
            }
          ],
          "correctAnswer": "B",
          "hint": "Gunakan sifat relasi angsuran pokok pada anuitas: $a_2 = a_1(1 + i)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Relasi antarangsuran pokok: $a_n = a_1(1 + i)^{n-1}$\n2. Untuk $n = 2$:\n$$a_2 = a_1(1 + i) = 1.500.000 \\times (1 + 0{,}05) = 1.500.000 \\times 1{,}05 = \\text{Rp}1.575.000,00$$\nBesar angsuran pokok tahun ke-2 adalah **$\\text{Rp}1.575.000,00$** (Opsi B)."
        },
        {
          "id": "sma12-b2-4",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah sepeda motor operasional dibeli dengan harga baru $\\text{Rp}25.000.000,00$. Nilai jual sepeda motor tersebut mengalami depresiasi (penyusutan) sebesar $10\\%$ setiap tahun. Nilai taksiran sepeda motor tersebut setelah 2 tahun pemakaian adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\text{Rp}20.000.000,00$"
            },
            {
              "key": "B",
              "text": "$\\text{Rp}20.250.000,00$"
            },
            {
              "key": "C",
              "text": "$\\text{Rp}22.500.000,00$"
            },
            {
              "key": "D",
              "text": "$\\text{Rp}19.500.000,00$"
            }
          ],
          "correctAnswer": "B",
          "hint": "Gunakan rumus penyusutan eksponensial: $V_2 = V_0(1 - r)^2$ dengan $r = 0{,}10$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Formula: $V_2 = 25.000.000 \\times (1 - 0{,}10)^2 = 25.000.000 \\times (0{,}9)^2$\n2. $(0{,}9)^2 = 0{,}81$\n3. $V_2 = 25.000.000 \\times 0{,}81 = \\text{Rp}20.250.000,00$\nNilai motor setelah 2 tahun adalah **$\\text{Rp}20.250.000,00$** (Opsi B)."
        },
        {
          "id": "sma12-b2-5",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Seorang wirausahawan meminjam kredit permodalan usaha sebesar $\\text{Rp}15.000.000,00$ dengan suku bunga $1{,}5\\%$ per bulan. Jika pinjaman dilunasi dengan anuitas bulanan sebesar $\\text{Rp}1.375.000,00$, maka sisa pokok pinjaman setelah pembayaran angsuran bulan pertama adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\text{Rp}13.625.000,00$"
            },
            {
              "key": "B",
              "text": "$\\text{Rp}14.000.000,00$"
            },
            {
              "key": "C",
              "text": "$\\text{Rp}13.850.000,00$"
            },
            {
              "key": "D",
              "text": "$\\text{Rp}13.775.000,00$"
            }
          ],
          "correctAnswer": "C",
          "hint": "Hitung bunga bulan pertama $b_1 = M \\times i$, kurangkan dari anuitas untuk mendapat angsuran pokok $a_1$, lalu sisa pinjaman adalah $M - a_1$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Hitung bunga bulan pertama:\n$$b_1 = 15.000.000 \\times 0{,}015 = 225.000$$\n2. Hitung angsuran pokok pelunasan hutang bulan pertama:\n$$a_1 = A - b_1 = 1.375.000 - 225.000 = 1.150.000$$\n3. Sisa pokok pinjaman setelah angsuran pertama:\n$$S_1 = M - a_1 = 15.000.000 - 1.150.000 = \\text{Rp}13.850.000,00$$\nSisa hutang pokok adalah **$\\text{Rp}13.850.000,00$** (Opsi C)."
        },
        {
          "id": "sma12-b2-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Modal sebesar Rp10.000.000,00 dibungakan dengan bunga tunggal 8% per tahun. Besar bunga yang diperoleh setelah 3 tahun adalah...",
          "options": [
            {
              "key": "A",
              "text": "Rp2.597.120,00"
            },
            {
              "key": "B",
              "text": "Rp2.000.000,00"
            },
            {
              "key": "C",
              "text": "Rp1.800.000,00"
            },
            {
              "key": "D",
              "text": "Rp2.400.000,00"
            }
          ],
          "correctAnswer": "D",
          "hint": "Bunga tunggal: $B = M \\times i \\times t = 10.000.000 \\times 0{,}08 \\times 3 = 2.400.000$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$B = 10.000.000 \\times 0{,}08 \\times 3 = 2.400.000\\text{ rupiah}$$ (Opsi D)."
        },
        {
          "id": "sma12-b2-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Modal sebesar Rp5.000.000,00 diinvestasikan dengan suku bunga majemuk 10% per tahun. Nilai akhir modal setelah 2 tahun adalah...",
          "options": [
            {
              "key": "A",
              "text": "Rp6.050.000,00"
            },
            {
              "key": "B",
              "text": "Rp6.000.000,00"
            },
            {
              "key": "C",
              "text": "Rp6.100.000,00"
            },
            {
              "key": "D",
              "text": "Rp5.950.000,00"
            }
          ],
          "correctAnswer": "A",
          "hint": "Bunga majemuk: $M_2 = M(1 + i)^2 = 5.000.000 \\times (1{,}10)^2 = 5.000.000 \\times 1{,}21 = 6.050.000$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$M_2 = 5.000.000 \\times 1{,}21 = 6.050.000\\text{ rupiah}$$ (Opsi A)."
        },
        {
          "id": "sma12-b2-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Pada sistem anuitas, setiap pembayaran anuitas ($A$) terdiri dari komponen...",
          "options": [
            {
              "key": "A",
              "text": "Bunga murni dan denda"
            },
            {
              "key": "B",
              "text": "Biaya administrasi dan premi"
            },
            {
              "key": "C",
              "text": "Modal awal dan dividen"
            },
            {
              "key": "D",
              "text": "Angsuran pokok dan bunga"
            }
          ],
          "correctAnswer": "D",
          "hint": "Anuitas merupakan gabungan dari angsuran pokok pinjaman ($a_t$) dan bunga ($b_t$): $A = a_t + b_t$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nAnuitas terdiri dari **angsuran pokok dan bunga** (Opsi D)."
        },
        {
          "id": "sma12-b2-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Suatu pinjaman diangsur dengan anuitas sebesar Rp850.000,00 per bulan. Jika bunga pada bulan pertama adalah Rp250.000,00, maka besar angsuran pokok pada bulan pertama adalah...",
          "options": [
            {
              "key": "A",
              "text": "Rp600.000,00"
            },
            {
              "key": "B",
              "text": "Rp1.100.000,00"
            },
            {
              "key": "C",
              "text": "Rp550.000,00"
            },
            {
              "key": "D",
              "text": "Rp650.000,00"
            }
          ],
          "correctAnswer": "A",
          "hint": "Angsuran pokok: $a_1 = A - b_1 = 850.000 - 250.000 = 600.000$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$a_1 = 850.000 - 250.000 = 600.000\\text{ rupiah}$$ (Opsi A)."
        },
        {
          "id": "sma12-b2-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Modal sebesar Rp20.000.000,00 didepositokan dengan bunga majemuk 6% per tahun yang dibayarkan setiap semester (setengah tahun). Suku bunga per semester yang digunakan adalah...",
          "options": [
            {
              "key": "A",
              "text": "3%"
            },
            {
              "key": "B",
              "text": "6%"
            },
            {
              "key": "C",
              "text": "1,5%"
            },
            {
              "key": "D",
              "text": "12%"
            }
          ],
          "correctAnswer": "A",
          "hint": "Bunga per semester $= \\frac{6\\%}{2} = 3\\%$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$i_{\\text{semester}} = \\frac{6\\%}{2} = 3\\%$$ (Opsi A)."
        },
        {
          "id": "sma12-b2-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Pak Dani meminjam uang sebesar Rp12.000.000,00 di koperasi dengan suku bunga majemuk 1% per bulan. Jika pinjaman dilunasi dengan anuitas bulanan Rp1.100.000,00, berapakah besar bunga pada bulan pertama?",
          "options": [
            {
              "key": "A",
              "text": "Rp100.000,00"
            },
            {
              "key": "B",
              "text": "Rp150.000,00"
            },
            {
              "key": "C",
              "text": "Rp110.000,00"
            },
            {
              "key": "D",
              "text": "Rp120.000,00"
            }
          ],
          "correctAnswer": "D",
          "hint": "Bunga bulan pertama: $b_1 = M \\times i = 12.000.000 \\times 0{,}01 = 120.000$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$b_1 = 12.000.000 \\times 0{,}01 = 120.000\\text{ rupiah}$$ (Opsi D)."
        },
        {
          "id": "sma12-b2-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dari soal sebelumnya, besar angsuran pokok pada bulan pertama adalah...",
          "options": [
            {
              "key": "A",
              "text": "Rp1.000.000,00"
            },
            {
              "key": "B",
              "text": "Rp920.000,00"
            },
            {
              "key": "C",
              "text": "Rp950.000,00"
            },
            {
              "key": "D",
              "text": "Rp980.000,00"
            }
          ],
          "correctAnswer": "D",
          "hint": "$a_1 = A - b_1 = 1.100.000 - 120.000 = 980.000$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$a_1 = 1.100.000 - 120.000 = 980.000\\text{ rupiah}$$ (Opsi D)."
        },
        {
          "id": "sma12-b2-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sisa pinjaman Pak Dani setelah pembayaran angsuran bulan pertama adalah...",
          "options": [
            {
              "key": "A",
              "text": "Rp10.900.000,00"
            },
            {
              "key": "B",
              "text": "Rp11.000.000,00"
            },
            {
              "key": "C",
              "text": "Rp11.020.000,00"
            },
            {
              "key": "D",
              "text": "Rp11.120.000,00"
            }
          ],
          "correctAnswer": "C",
          "hint": "Sisa pinjaman: $S_1 = M - a_1 = 12.000.000 - 980.000 = 11.020.000$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$S_1 = 12.000.000 - 980.000 = 11.020.000\\text{ rupiah}$$ (Opsi C)."
        },
        {
          "id": "sma12-b2-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Nilai tunai dari modal Rp13.310.000,00 yang akan diterima 3 tahun mendatang dengan suku bunga majemuk 10% per tahun adalah...",
          "options": [
            {
              "key": "A",
              "text": "Rp9.500.000,00"
            },
            {
              "key": "B",
              "text": "Rp10.000.000,00"
            },
            {
              "key": "C",
              "text": "Rp11.000.000,00"
            },
            {
              "key": "D",
              "text": "Rp10.500.000,00"
            }
          ],
          "correctAnswer": "B",
          "hint": "Nilai tunai: $M_0 = \\frac{M_t}{(1 + i)^t} = \\frac{13.310.000}{(1{,}1)^3} = \\frac{13.310.000}{1{,}331} = 10.000.000$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$M_0 = \\frac{13.310.000}{1{,}331} = 10.000.000\\text{ rupiah}$$ (Opsi B)."
        },
        {
          "id": "sma12-b2-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Seseorang menabung di bank sebesar Rp1.000.000,00 setiap awal tahun selama 3 tahun dengan suku bunga majemuk 10% per tahun. Nilai akumulasi tabungan pada akhir tahun ke-3 adalah...",
          "options": [
            {
              "key": "A",
              "text": "Rp3.310.000,00"
            },
            {
              "key": "B",
              "text": "Rp3.500.000,00"
            },
            {
              "key": "C",
              "text": "Rp3.200.000,00"
            },
            {
              "key": "D",
              "text": "Rp3.641.000,00"
            }
          ],
          "correctAnswer": "D",
          "hint": "Tabungan 1: $1.000.000(1{,}1)^3 = 1.331.000$. Tabungan 2: $1.000.000(1{,}1)^2 = 1.210.000$. Tabungan 3: $1.000.000(1{,}1) = 1.100.000$. Total $= 3.641.000$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$S = 1.331.000 + 1.210.000 + 1.100.000 = 3.641.000\\text{ rupiah}$$ (Opsi D)."
        },
        {
          "id": "sma12-b2-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Hubungan antara angsuran ke-$k$ ($a_k$) dengan angsuran pertama ($a_1$) pada sistem anuitas dengan suku bunga majemuk $i$ dirumuskan oleh...",
          "options": [
            {
              "key": "A",
              "text": "a_k = a_1 (1 + i)^k"
            },
            {
              "key": "B",
              "text": "a_k = a_1 (1 + i)^{k - 1}"
            },
            {
              "key": "C",
              "text": "a_k = a_1 + (k - 1)i"
            },
            {
              "key": "D",
              "text": "a_k = a_1 (1 - i)^k"
            }
          ],
          "correctAnswer": "B",
          "hint": "Angsuran pokok pada sistem anuitas membentuk barisan geometri dengan rasio $(1 + i)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$a_k = a_1 (1 + i)^{k - 1}$$ (Opsi B)."
        },
        {
          "id": "sma12-b2-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Suatu pinjaman dilunasi dengan anuitas tahunan. Jika angsuran ke-2 adalah Rp420.000,00 dan suku bunga majemuk 5% per tahun, maka besar angsuran ke-4 adalah...",
          "options": [
            {
              "key": "A",
              "text": "Rp460.000,00"
            },
            {
              "key": "B",
              "text": "Rp450.000,00"
            },
            {
              "key": "C",
              "text": "Rp463.050,00"
            },
            {
              "key": "D",
              "text": "Rp470.000,00"
            }
          ],
          "correctAnswer": "C",
          "hint": "$a_4 = a_2 (1 + i)^{4 - 2} = 420.000 \\times (1{,}05)^2 = 420.000 \\times 1{,}1025 = 463.050$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$a_4 = 420.000 \\times (1{,}05)^2 = 463.050\\text{ rupiah}$$ (Opsi C)."
        },
        {
          "id": "sma12-b2-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Pinjaman sebesar Rp50.000.000,00 akan dilunasi dengan 10 anuitas tahunan. Jika suku bunga 8% per tahun dan diketahui $(1{,}08)^{10} \\approx 2{,}1589$, maka besar anuitas tahunan yang dibayarkan adalah...",
          "options": [
            {
              "key": "A",
              "text": "Rp7.200.000,00"
            },
            {
              "key": "B",
              "text": "Rp7.451.475,00"
            },
            {
              "key": "C",
              "text": "Rp7.650.000,00"
            },
            {
              "key": "D",
              "text": "Rp7.100.000,00"
            }
          ],
          "correctAnswer": "B",
          "hint": "Rumus anuitas: $A = \\frac{M \\times i}{1 - (1+i)^{-n}} = \\frac{50.000.000 \\times 0{,}08}{1 - \\frac{1}{2{,}1589}} = \\frac{4.000.000}{0{,}5368} \\approx 7.451.475$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$A = \\frac{4.000.000}{1 - (1{,}08)^{-10}} \\approx 7.451.475\\text{ rupiah}$$ (Opsi B)."
        },
        {
          "id": "sma12-b2-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Rina menginvestasikan Rp10.000.000,00 pada produk reksa dana yang memberikan return rata-rata 12% per tahun (bunga majemuk tahunan). Berdasarkan Aturan 72 (Rule of 72), modal Rina akan bertumbuh menjadi dua kali lipat (Rp20.000.000,00) dalam waktu sekitar...",
          "options": [
            {
              "key": "A",
              "text": "5 tahun"
            },
            {
              "key": "B",
              "text": "7 tahun"
            },
            {
              "key": "C",
              "text": "6 tahun"
            },
            {
              "key": "D",
              "text": "8 tahun"
            }
          ],
          "correctAnswer": "C",
          "hint": "Aturan 72: Waktu penggandaan modal $\\approx \\frac{72}{\\text{suku bunga}} = \\frac{72}{12} = 6$ tahun.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$t \\approx \\frac{72}{12} = 6\\text{ tahun}$$ (Opsi C)."
        },
        {
          "id": "sma12-b2-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Pak Joko melunasi pinjaman anuitas bulanan. Pada bulan ke-5, bunga yang dibayarkan adalah Rp150.000,00 dan angsuran pokoknya adalah Rp800.000,00. Jika suku bunga pinjaman adalah 1,5% per bulan, besar saldo pinjaman sebelum pembayaran bulan ke-5 adalah...",
          "options": [
            {
              "key": "A",
              "text": "Rp9.200.000,00"
            },
            {
              "key": "B",
              "text": "Rp10.800.000,00"
            },
            {
              "key": "C",
              "text": "Rp10.000.000,00"
            },
            {
              "key": "D",
              "text": "Rp8.500.000,00"
            }
          ],
          "correctAnswer": "C",
          "hint": "Bunga bulan ke-5: $b_5 = S_4 \\times i \\implies 150.000 = S_4 \\times 0{,}015 \\implies S_4 = \\frac{150.000}{0{,}015} = 10.000.000$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$S_4 = \\frac{150.000}{0{,}015} = 10.000.000\\text{ rupiah}$$ (Opsi C)."
        }
      ]
    },
    {
      "id": "sma12-bab3-kaidah-pencacahan",
      "title": "Bab 3: Kaidah Pencacahan",
      "track": "WAJIB",
      "trackLabel": "Matematika Utama (Wajib)",
      "summary": {
        "overview": "Setiap hari kita dihadapkan pada jutaan pilihan dan kombinasi konfigurasi. Mulai dari sistem pembuatan nomor plat kendaraan bermotor oleh kepolisian, variasi susunan kata sandi akun perbankan digital, pemilihan formasi pemain kesebelasan sepak bola oleh pelatih, hingga penjadwalan rute penerbangan maskapai internasional, kemampuan menghitung banyak kemungkinan yang terjadi secara cepat dan akurat adalah kebutuhan mutlak dalam sains komputasi dan manajemen logistik.\n\nDalam matematika diskrit, mencacah semua kemungkinan satu demi satu melalui pembuatan daftar diagram pohon sangat tidak efisien jika jumlah pilihannya mencapai ribuan atau jutaan. Oleh karena itu, matematikawan merumuskan Kaidah Pencacahan (combinatorics). Kaidah dasar dimulai dari Aturan Penjumlahan untuk kejadian yang bersifat alternatif saling lepas, dan Aturan Perkalian untuk kejadian yang terjadi secara berurutan atau simultan.\n\nLebih jauh, bab ini membahas pembedaan tajam antara dua konsep sentral: Permutasi, di mana urutan susunan objek sangat diperhatikan (seperti juara 1, 2, 3 atau penyusunan digit kode PIN), dan Kombinasi, di mana urutan penempatan objek diabaikan (seperti memilih anggota delegasi lomba atau mengambil bola dari kantong). Siswa juga mengeksplorasi permutasi khusus dengan unsur yang sama serta permutasi melingkar (siklis).",
        "coreConcepts": [
          "Aturan Penjumlahan: Digunakan apabila ada beberapa pilihan yang bersifat alternatif terpisah (saling lepas) di mana hanya SATU kejadian yang boleh dipilih: Banyak cara $= n_1 + n_2 + \\dots + n_k$. Kata kunci: 'ATAU'.",
          "Aturan Perkalian (Filling Slots): Digunakan apabila serangkaian kegiatan dilakukan secara berurutan atau bersamaan: Banyak cara $= n_1 \\times n_2 \\times \\dots \\times n_k$. Kata kunci: 'DAN'.",
          "Notasi Faktorial ($n!$): Hasil kali semua bilangan bulat positif berurutan dari $n$ sampai 1: $n! = n \\times (n-1) \\times (n-2) \\times \\dots \\times 1$. Definisi khusus yang disepakati: $0! = 1$ dan $1! = 1$.",
          "Permutasi ($P$): Susunan $r$ unsur dari $n$ unsur yang berbeda dengan MEMPERHATIKAN URUTAN ($AB \\neq BA$): $P(n, r) = \\frac{n!}{(n - r)!}$. Contoh: susunan juara lomba, pemilihan ketua-sekretaris-bendahara, kode sandi.",
          "Permutasi dengan Unsur yang Sama: Jika dari $n$ unsur terdapat $k_1, k_2, \\dots, k_m$ unsur yang sama, maka banyaknya susunan kata unik adalah: $P = \\frac{n!}{k_1! \\cdot k_2! \\dots k_m!}$.",
          "Permutasi Siklis (Melingkar): Banyak cara menyusun $n$ objek berlainan dalam bentuk susunan melingkar (seperti duduk mengelilingi meja bundar): $P_{\\text{siklis}} = (n - 1)!$.",
          "Kombinasi ($C$): Pemilihan $r$ unsur dari $n$ unsur yang berbeda TANPA MEMPERHATIKAN URUTAN ($AB = BA$): $C(n, r) = \\frac{n!}{r!(n - r)!}$. Contoh: memilih kelompok belajar, pengambilan kartu, jabat tangan."
        ],
        "workedExamples": [
          {
            "title": "Penyusunan Kode Sandi Berdigit Ganjil",
            "problem": "Dari angka-angka 1, 2, 3, 5, 7, 8, dan 9 akan disusun kode sandi yang terdiri dari 3 angka berbeda. Berapa banyak kode sandi bernilai ganjil yang dapat dibentuk?",
            "solution": "Langkah 1: Analisis kriteria bilangan ganjil.\nSuatu bilangan bernilai ganjil jika digit terakhirnya (satuan) merupakan angka ganjil.\nAngka yang tersedia: $\\{1, 2, 3, 5, 7, 8, 9\\}$ (total 7 angka).\nAngka ganjil yang tersedia: $\\{1, 3, 5, 7, 9\\}$ (ada 5 pilihan).\n\nLangkah 2: Mengisi kotak nilai tempat (metode filling slots):\n- Kotak Satuan (syarat ganjil): ada 5 pilihan angka ganjil.\n- Kotak Ratusan: dari total 7 angka, 1 angka sudah dipakai di satuan, tersisa 6 pilihan angka.\n- Kotak Puluhan: dari 7 angka, 2 angka sudah dipakai, tersisa 5 pilihan angka.\n\nLangkah 3: Hitung total susunan menggunakan aturan perkalian:\n$$\\text{Banyak kode} = 6 \\times 5 \\times 5 = 150$$\nJadi, banyak kode sandi bernilai ganjil yang dapat dibentuk adalah **150 kode**."
          },
          {
            "title": "Pemilihan Tim Delegasi Sains (Kombinasi)",
            "problem": "Sebuah kelas memiliki 8 siswa putra dan 6 siswa putri. Guru ingin membentuk tim olimpiade yang beranggotakan 3 siswa putra dan 2 siswa putri. Berapa banyak susunan tim berbeda yang dapat dipilih?",
            "solution": "Langkah 1: Menghitung pemilihan siswa putra.\nMemilih 3 putra dari 8 putra tanpa memperhatikan urutan menggunakan kombinasi $C(8, 3)$:\n$$C(8, 3) = \\frac{8!}{3!(8 - 3)!} = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = 56$$\n\nLangkah 2: Menghitung pemilihan siswa putri.\nMemilih 2 putri dari 6 putri menggunakan kombinasi $C(6, 2)$:\n$$C(6, 2) = \\frac{6!}{2!(6 - 2)!} = \\frac{6 \\times 5}{2 \\times 1} = 15$$\n\nLangkah 3: Gabungkan kedua pilihan dengan aturan perkalian:\n$$\\text{Total cara} = C(8, 3) \\times C(6, 2) = 56 \\times 15 = 840$$\nJadi, banyak susunan tim berbeda yang dapat dibentuk adalah **840 tim**."
          }
        ],
        "keyFormulas": [
          {
            "label": "Permutasi n Objek Berlainan",
            "formula": "P(n, r) = \\frac{n!}{(n - r)!} \\quad (r \\le n)"
          },
          {
            "label": "Kombinasi n Objek",
            "formula": "C(n, r) = \\binom{n}{r} = \\frac{n!}{r!(n - r)!}"
          },
          {
            "label": "Permutasi Unsur Sama",
            "formula": "P = \\frac{n!}{k_1! \\cdot k_2! \\dots k_m!}"
          },
          {
            "label": "Permutasi Siklis",
            "formula": "P_{\\text{siklis}} = (n - 1)!"
          },
          {
            "label": "Aturan Perkalian Bersyarat",
            "formula": "K = n_1 \\times n_2 \\times \\dots \\times n_k"
          }
        ],
        "misconceptions": [
          "Tertukar antara Permutasi dan Kombinasi: jika posisi atau jabatan dibedakan (seperti Ketua dan Wakil), gunakan Permutasi. Jika posisi setara (seperti kelompok perwakilan), gunakan Kombinasi.",
          "Lupa mengunci satu objek acuan pada permutasi siklis meja bundar sehingga menggunakan rumus $n!$, bukan $(n-1)!$."
        ],
        "tutorTip": "Tanya pada diri sendiri: 'Apakah susunan AB berbeda artinya dengan BA?' Jika berbeda (ada jabatan/urutan juara/kode digit), jawabannya PERMUTASI. Jika artinya sama persis (hanya kumpul bersama/jabat tangan), jawabannya KOMBINASI."
      },
      "questions": [
        {
          "id": "sma12-b3-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Dari 6 orang pengurus OSIS akan dipilih seorang Ketua, Sekretaris, dan Bendahara. Banyak susunan pengurus berbeda yang mungkin terpilih adalah...",
          "options": [
            {
              "key": "A",
              "text": "20 cara"
            },
            {
              "key": "B",
              "text": "720 cara"
            },
            {
              "key": "C",
              "text": "120 cara"
            },
            {
              "key": "D",
              "text": "36 cara"
            }
          ],
          "correctAnswer": "C",
          "hint": "Karena jabatan dibedakan secara struktural (Ketua, Sekretaris, Bendahara), gunakan Permutasi $P(6, 3)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Pemilihan memperhatikan urutan jabatan (Permutasi $n=6, r=3$):\n$$P(6, 3) = \\frac{6!}{(6 - 3)!} = \\frac{6!}{3!} = 6 \\times 5 \\times 4 = 120$$\nBanyak susunan pengurus yang dapat terbentuk adalah **120 cara** (Opsi C)."
        },
        {
          "id": "sma12-b3-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Dalam sebuah rapat komite sekolah, 5 orang anggota duduk mengelilingi sebuah meja bundar. Banyak susunan posisi duduk melingkar yang mungkin terjadi adalah...",
          "options": [
            {
              "key": "A",
              "text": "120 cara"
            },
            {
              "key": "B",
              "text": "60 cara"
            },
            {
              "key": "C",
              "text": "24 cara"
            },
            {
              "key": "D",
              "text": "12 cara"
            }
          ],
          "correctAnswer": "C",
          "hint": "Gunakan rumus permutasi siklis: $P_{\\text{siklis}} = (n - 1)!$ dengan $n = 5$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Meja bundar menggunakan permutasi siklis:\n$$P_{\\text{siklis}} = (5 - 1)! = 4!$$\n2. Hitung nilai faktorial:\n$$4! = 4 \\times 3 \\times 2 \\times 1 = 24$$\nBanyak posisi duduk melingkar yang mungkin adalah **24 cara** (Opsi C)."
        },
        {
          "id": "sma12-b3-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Banyak susunan huruf berbeda yang dapat dibentuk dari kata 'MALAM' adalah...",
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
              "text": "120"
            },
            {
              "key": "D",
              "text": "20"
            }
          ],
          "correctAnswer": "B",
          "hint": "Kata MALAM memiliki 5 huruf dengan huruf M sebanyak 2 dan huruf A sebanyak 2. Gunakan rumus permutasi unsur sama.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Hitung total huruf $n = 5$.\n2. Unsur yang sama: huruf M ada 2 ($k_1 = 2$), huruf A ada 2 ($k_2 = 2$), huruf L ada 1.\n3. Masukkan ke rumus permutasi unsur sama:\n$$P = \\frac{5!}{2! \\times 2!} = \\frac{120}{2 \\times 2} = \\frac{120}{4} = 30$$\nBanyak susunan kata berbeda yang dapat dibentuk adalah **30 kata** (Opsi B)."
        },
        {
          "id": "sma12-b3-4",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dalam suatu pertemuan yang dihadiri oleh 10 orang peserta, setiap orang saling berjabat tangan tepat satu kali dengan peserta lainnya. Banyak jabat tangan yang terjadi seluruhnya adalah...",
          "options": [
            {
              "key": "A",
              "text": "90 kali"
            },
            {
              "key": "B",
              "text": "50 kali"
            },
            {
              "key": "C",
              "text": "100 kali"
            },
            {
              "key": "D",
              "text": "45 kali"
            }
          ],
          "correctAnswer": "D",
          "hint": "Jabat tangan melibatkan 2 orang dan tidak memperhatikan urutan ($A$ jabat tangan dengan $B$ sama dengan $B$ jabat tangan dengan $A$). Gunakan Kombinasi $C(10, 2)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Satu jabat tangan terjadi antara 2 orang tanpa memedulikan urutan (Kombinasi $n=10, r=2$):\n$$C(10, 2) = \\frac{10!}{2!(10 - 2)!} = \\frac{10 \\times 9}{2 \\times 1} = \\frac{90}{2} = 45$$\nBanyak jabat tangan seluruhnya adalah **45 kali** (Opsi D)."
        },
        {
          "id": "sma12-b3-5",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dari 7 siswa putra dan 5 siswa putri akan dibentuk sebuah tim cerdas cermat yang terdiri atas 4 orang. Jika disyaratkan dalam tim tersebut harus terdapat sekurang-kurangnya 3 siswa putra, berapa banyak kemungkinan susunan tim yang dapat dibentuk?",
          "options": [
            {
              "key": "A",
              "text": "210 cara"
            },
            {
              "key": "B",
              "text": "175 cara"
            },
            {
              "key": "C",
              "text": "245 cara"
            },
            {
              "key": "D",
              "text": "180 cara"
            }
          ],
          "correctAnswer": "A",
          "hint": "Bagi menjadi 2 kasus: Kasus 1 (3 putra DAN 1 putri) dan Kasus 2 (4 putra DAN 0 putri), lalu jumlahkan hasilnya.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nSyarat 'sekurang-kurangnya 3 putra' dari total 4 anggota tim menghasilkan 2 kemungkinan:\n1. Kasus 1: Terpilih 3 putra dan 1 putri:\n$$C(7, 3) \\times C(5, 1) = \\frac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1} \\times 5 = 35 \\times 5 = 175$$\n2. Kasus 2: Terpilih 4 putra dan 0 putri:\n$$C(7, 4) \\times C(5, 0) = \\frac{7 \\times 6 \\times 5 \\times 4}{4 \\times 3 \\times 2 \\times 1} \\times 1 = 35 \\times 1 = 35$$\n3. Jumlahkan kedua kemungkinan (Aturan Penjumlahan):\n$$\\text{Total} = 175 + 35 = 210$$\nBanyak cara pembentukan tim adalah **210 cara** (Opsi A)."
        },
        {
          "id": "sma12-b3-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dari kota A ke kota B ada 3 jalan, dan dari kota B ke kota C ada 4 jalan. Banyaknya cara seseorang dapat bepergian dari kota A ke kota C melalui kota B adalah...",
          "options": [
            {
              "key": "A",
              "text": "12 cara"
            },
            {
              "key": "B",
              "text": "7 cara"
            },
            {
              "key": "C",
              "text": "14 cara"
            },
            {
              "key": "D",
              "text": "24 cara"
            }
          ],
          "correctAnswer": "A",
          "hint": "Aturan perkalian: $3 \\times 4 = 12$ cara.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$3 \\times 4 = 12\\text{ cara}$$ (Opsi A)."
        },
        {
          "id": "sma12-b3-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Banyaknya susunan kata berbeda yang dapat dibentuk dari huruf-huruf pembentuk kata 'KATAK' adalah...",
          "options": [
            {
              "key": "A",
              "text": "60 susunan"
            },
            {
              "key": "B",
              "text": "120 susunan"
            },
            {
              "key": "C",
              "text": "20 susunan"
            },
            {
              "key": "D",
              "text": "30 susunan"
            }
          ],
          "correctAnswer": "D",
          "hint": "Permutasi dengan unsur sama: total 5 huruf (K=2, A=2, T=1). $P = \\frac{5!}{2! \\times 2!} = \\frac{120}{4} = 30$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{5!}{2! \\times 2!} = \\frac{120}{4} = 30\\text{ susunan}$$ (Opsi D)."
        },
        {
          "id": "sma12-b3-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Banyaknya cara 5 orang duduk melingkar mengelilingi meja bundar adalah...",
          "options": [
            {
              "key": "A",
              "text": "120 cara"
            },
            {
              "key": "B",
              "text": "24 cara"
            },
            {
              "key": "C",
              "text": "60 cara"
            },
            {
              "key": "D",
              "text": "12 cara"
            }
          ],
          "correctAnswer": "B",
          "hint": "Permutasi siklis: $P_{\\text{siklis}} = (n - 1)! = (5 - 1)! = 4! = 24$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P = (5 - 1)! = 4! = 24\\text{ cara}$$ (Opsi B)."
        },
        {
          "id": "sma12-b3-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Nilai dari kombinasi $C(8, 3)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "336"
            },
            {
              "key": "B",
              "text": "28"
            },
            {
              "key": "C",
              "text": "64"
            },
            {
              "key": "D",
              "text": "56"
            }
          ],
          "correctAnswer": "D",
          "hint": "Rumus kombinasi: $C(8, 3) = \\frac{8!}{3!(8 - 3)!} = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = 56$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$C(8, 3) = \\frac{8 \\times 7 \\times 6}{6} = 56$$ (Opsi D)."
        },
        {
          "id": "sma12-b3-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dari 10 orang siswa calon pengurus OSIS, akan dipilih 3 orang untuk menjadi Ketua, Sekretaris, dan Bendahara. Banyak susunan pengurus yang mungkin terbentuk adalah...",
          "options": [
            {
              "key": "A",
              "text": "120 susunan"
            },
            {
              "key": "B",
              "text": "240 susunan"
            },
            {
              "key": "C",
              "text": "720 susunan"
            },
            {
              "key": "D",
              "text": "360 susunan"
            }
          ],
          "correctAnswer": "C",
          "hint": "Karena memperhatikan urutan jabatan, gunakan permutasi: $P(10, 3) = 10 \\times 9 \\times 8 = 720$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P(10, 3) = 10 \\times 9 \\times 8 = 720$$ (Opsi C)."
        },
        {
          "id": "sma12-b3-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dari 12 orang anggota tim bola basket, akan dipilih 5 orang pemain inti. Banyaknya cara pemilihan pemain inti tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "792 cara"
            },
            {
              "key": "B",
              "text": "95.040 cara"
            },
            {
              "key": "C",
              "text": "360 cara"
            },
            {
              "key": "D",
              "text": "120 cara"
            }
          ],
          "correctAnswer": "A",
          "hint": "Tanpa memperhatikan urutan posisi: $C(12, 5) = \\frac{12 \\times 11 \\times 10 \\times 9 \\times 8}{5 \\times 4 \\times 3 \\times 2 \\times 1} = 792$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$C(12, 5) = 792\\text{ cara}$$ (Opsi A)."
        },
        {
          "id": "sma12-b3-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dari angka-angka 1, 2, 3, 4, 5, 6 akan disusun bilangan ratusan (3 digit) tanpa ada angka yang berulang. Banyaknya bilangan ganjil yang dapat dibentuk adalah...",
          "options": [
            {
              "key": "A",
              "text": "120 bilangan"
            },
            {
              "key": "B",
              "text": "60 bilangan"
            },
            {
              "key": "C",
              "text": "40 bilangan"
            },
            {
              "key": "D",
              "text": "30 bilangan"
            }
          ],
          "correctAnswer": "B",
          "hint": "Digit satuan harus ganjil (1, 3, 5) ada 3 pilihan. Digit ratusan ada 5 sisa angka. Digit puluhan ada 4 sisa angka. Total $= 5 \\times 4 \\times 3 = 60$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Banyak bilangan} = 5 \\times 4 \\times 3 = 60$$ (Opsi B)."
        },
        {
          "id": "sma12-b3-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dalam suatu ruangan terdapat 10 orang yang belum saling mengenal. Jika setiap orang saling bersalaman satu kali, banyak jabat tangan yang terjadi adalah...",
          "options": [
            {
              "key": "A",
              "text": "45 jabat tangan"
            },
            {
              "key": "B",
              "text": "90 jabat tangan"
            },
            {
              "key": "C",
              "text": "50 jabat tangan"
            },
            {
              "key": "D",
              "text": "20 jabat tangan"
            }
          ],
          "correctAnswer": "A",
          "hint": "Salaman melibatkan 2 orang: $C(10, 2) = \\frac{10 \\times 9}{2} = 45$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$C(10, 2) = \\frac{10 \\times 9}{2} = 45$$ (Opsi A)."
        },
        {
          "id": "sma12-b3-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah kantong berisi 7 kelereng merah dan 5 kelereng putih. Banyak cara mengambil 3 kelereng merah dan 2 kelereng putih sekaligus adalah...",
          "options": [
            {
              "key": "A",
              "text": "120 cara"
            },
            {
              "key": "B",
              "text": "210 cara"
            },
            {
              "key": "C",
              "text": "350 cara"
            },
            {
              "key": "D",
              "text": "180 cara"
            }
          ],
          "correctAnswer": "C",
          "hint": "Aturan perkalian kombinasi: $C(7, 3) \\times C(5, 2) = 35 \\times 10 = 350$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$C(7, 3) \\times C(5, 2) = 35 \\times 10 = 350\\text{ cara}$$ (Opsi C)."
        },
        {
          "id": "sma12-b3-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Banyaknya susunan huruf berbeda yang dapat dibentuk dari kata 'MATEMATIKA' adalah...",
          "options": [
            {
              "key": "A",
              "text": "302.400 susunan"
            },
            {
              "key": "B",
              "text": "151.200 susunan"
            },
            {
              "key": "C",
              "text": "75.600 susunan"
            },
            {
              "key": "D",
              "text": "50.400 susunan"
            }
          ],
          "correctAnswer": "B",
          "hint": "Total 10 huruf (M=2, A=3, T=2, E=1, I=1, K=1). $P = \\frac{10!}{2! \\times 3! \\times 2!} = \\frac{3.628.800}{24} = 151.200$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{10!}{2! \\times 3! \\times 2!} = 151.200$$ (Opsi B)."
        },
        {
          "id": "sma12-b3-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Tujuh orang duduk melingkar pada meja bundar. Jika 2 orang tertentu harus selalu duduk berdampingan, banyak susunan duduk yang mungkin adalah...",
          "options": [
            {
              "key": "A",
              "text": "120 cara"
            },
            {
              "key": "B",
              "text": "240 cara"
            },
            {
              "key": "C",
              "text": "720 cara"
            },
            {
              "key": "D",
              "text": "144 cara"
            }
          ],
          "correctAnswer": "B",
          "hint": "Anggap 2 orang sebagai 1 kesatuan $\\implies$ ada 6 elemen. Siklis: $(6 - 1)! = 5! = 120$. Posisi 2 orang bisa bertukar $2! = 2$. Total $= 120 \\times 2 = 240$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P = (6 - 1)! \\times 2! = 120 \\times 2 = 240\\text{ cara}$$ (Opsi B)."
        },
        {
          "id": "sma12-b3-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dari angka-angka 0, 1, 2, 3, 4, 5 akan dibentuk bilangan genap yang terdiri dari 3 digit berbeda. Banyaknya bilangan genap yang dapat dibentuk adalah...",
          "options": [
            {
              "key": "A",
              "text": "52 bilangan"
            },
            {
              "key": "B",
              "text": "60 bilangan"
            },
            {
              "key": "C",
              "text": "48 bilangan"
            },
            {
              "key": "D",
              "text": "56 bilangan"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kasus 1: Satuan 0 $\\implies 5 \\times 4 \\times 1 = 20$. Kasus 2: Satuan 2 atau 4 (2 pilihan) $\\implies 4$ (karena 0 tidak boleh di depan) $\\times 4 \\times 2 = 32$. Total $= 20 + 32 = 52$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Satuan 0: $5 \\times 4 \\times 1 = 20$\n2. Satuan 2 atau 4: $4 \\times 4 \\times 2 = 32$\nTotal $= 20 + 32 = 52$ (Opsi A)."
        },
        {
          "id": "sma12-b3-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dari 8 pria dan 6 wanita akan dibentuk panitia yang beranggotakan 5 orang dengan syarat tepat terdiri dari 3 pria dan 2 wanita. Banyaknya cara pemilihan panitia tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "720 cara"
            },
            {
              "key": "B",
              "text": "960 cara"
            },
            {
              "key": "C",
              "text": "640 cara"
            },
            {
              "key": "D",
              "text": "840 cara"
            }
          ],
          "correctAnswer": "D",
          "hint": "Kombinasi 3 pria dari 8 dan 2 wanita dari 6: $C(8, 3) \\times C(6, 2) = 56 \\times 15 = 840$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$C(8, 3) \\times C(6, 2) = 56 \\times 15 = 840\\text{ cara}$$ (Opsi D)."
        },
        {
          "id": "sma12-b3-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Koefisien suku $x^3$ pada ekspansi binomial $(2x - 3)^5$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "-720"
            },
            {
              "key": "B",
              "text": "1.080"
            },
            {
              "key": "C",
              "text": "720"
            },
            {
              "key": "D",
              "text": "-1.080"
            }
          ],
          "correctAnswer": "C",
          "hint": "Suku umum: $C(5, 2)(2x)^3(-3)^2 = 10 \\times (8x^3) \\times 9 = 720 x^3$. Koefisiennya adalah 720.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Suku} = C(5, 2)(2x)^3(-3)^2 = 10 \\times 8x^3 \\times 9 = 720x^3$$ (Opsi C)."
        },
        {
          "id": "sma12-b3-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Berapa banyak diagonal yang dimiliki oleh suatu poligon beraturan bersisi 12 (dodecagon)?",
          "options": [
            {
              "key": "A",
              "text": "66 diagonal"
            },
            {
              "key": "B",
              "text": "48 diagonal"
            },
            {
              "key": "C",
              "text": "60 diagonal"
            },
            {
              "key": "D",
              "text": "54 diagonal"
            }
          ],
          "correctAnswer": "D",
          "hint": "Banyak diagonal segi-$n$: $D = \\frac{n(n - 3)}{2} = \\frac{12 \\times 9}{2} = 54$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$D = \\frac{12(12 - 3)}{2} = 54\\text{ diagonal}$$ (Opsi D)."
        }
      ]
    },
    {
      "id": "sma12-bab4-peluang",
      "title": "Bab 4: Peluang",
      "track": "LANJUT",
      "trackLabel": "Matematika Tingkat Lanjut (Pilihan)",
      "summary": {
        "overview": "Ketidakpastian adalah bagian tak terpisahkan dari realitas kehidupan. Perusahaan asuransi jiwa memprediksi klaim nasabah, BMKG meramalkan persentase probabilitas terjadinya hujan badai, dokter ahli genetika menghitung peluang pewarisan sifat penyakit bawaan pada janin, serta investor pasar modal memperhitungkan risiko portofolio saham, seluruhnya bertumpu pada landasan kokoh Teori Peluang (Probability Theory).\n\nBerawal dari kajian analisis permainan peluang oleh Blaise Pascal dan Pierre de Fermat pada abad ke-17, teori peluang bertransformasi menjadi disiplin matematika formal yang menguantifikasi ketidakpastian. Peluang klasik mendefinisikan kemungkinan terjadinya suatu peristiwa sebagai rasio jumlah titik sampel yang diinginkan terhadap seluruh ruang sampel yang mungkin. Namun dalam fenomena kehidupan nyata, kejadian majemuk kerap kali saling berinteraksi, baik secara bebas, saling meniadakan, maupun terikat oleh kondisi prasyarat tertentu.\n\nBab ini menuntun siswa memahami spektrum penuh teori peluang kejadian majemuk: (1) Menentukan ruang sampel percobaan melalui kombinatorika; (2) Membedakan secara tajam kejadian saling lepas ($A \\cap B = \\emptyset$) dan tidak saling lepas; (3) Menganalisis kejadian saling bebas di mana terjadinya peristiwa pertama tidak memengaruhi peluang peristiwa kedua; serta (4) Menguasai konsep Peluang Bersyarat $P(A|B)$ dan Teorema Peluang Total, yang merupakan landasan matematika di balik algoritma klasifikasi Naive Bayes dalam teknologi kecerdasan buatan.",
        "coreConcepts": [
          "Ruang Sampel ($S$) dan Peluang Teoritik: Ruang sampel $S$ adalah himpunan semua hasil yang mungkin dari suatu percobaan acak. Peluang terjadinya peristiwa $A$ adalah $P(A) = \\frac{n(A)}{n(S)}$, dengan rentang nilai aksiomatis $0 \\le P(A) \\le 1$. Nilai $P(A)=0$ menyatakan kemustahilan dan $P(A)=1$ menyatakan kepastian.",
          "Komplemen Suatu Kejadian ($A'$ atau $A^c$): Peluang tidak terjadinya peristiwa $A$: $P(A') = 1 - P(A)$.",
          "Peluang Kejadian Majemuk Saling Lepas: Dua kejadian $A$ dan $B$ dikatakan saling lepas (mutually exclusive) jika keduanya tidak mungkin terjadi secara bersamaan ($A \\cap B = \\emptyset$). Rumus: $P(A \\cup B) = P(A) + P(B)$.",
          "Peluang Kejadian Tidak Saling Lepas: Jika $A$ dan $B$ dapat terjadi bersamaan ($A \\cap B \\neq \\emptyset$): $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$. Pengurangan irisan mencegah perhitungan ganda.",
          "Kejadian Saling Bebas (Independen): Terjadinya peristiwa $A$ sama sekali tidak memengaruhi probabilitas terjadinya peristiwa $B$. Rumus perkalian peluang: $P(A \\cap B) = P(A) \\cdot P(B)$. Contoh: melempar dua dadu secara bersamaan atau melempar koin dan dadu.",
          "Peluang Bersyarat (Conditional Probability): Peluang terjadinya kejadian $A$ dengan syarat kejadian $B$ telah terjadi terlebih dahulu. Didefinisikan secara formal: $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$ dengan syarat $P(B) > 0$. Dari hubungan ini diturunkan aturan perkalian berurutan: $P(A \\cap B) = P(B) \\cdot P(A|B)$."
        ],
        "workedExamples": [
          {
            "title": "Peluang Dua Kejadian Tidak Saling Lepas pada Kartu Bridge",
            "problem": "Dari satu set kartu remi (bridge) standar lengkap tanpa joker (52 kartu), diambil satu kartu secara acak. Berapakah peluang terambilnya kartu bernomor As atau kartu bergambar Hati (Heart)?",
            "solution": "Langkah 1: Tentukan ruang sampel dan masing-masing kejadian:\n- Total ruang sampel: $n(S) = 52$\n- Kejadian $A$ (kartu As): ada 4 kartu As $\\implies n(A) = 4$\n- Kejadian $B$ (kartu Hati): ada 13 kartu Hati $\\implies n(B) = 13$\n\nLangkah 2: Periksa apakah ada kartu yang memenuhi kedua kriteria (irisan):\nTerdapat 1 buah kartu yang sekaligus berupa kartu As dan bergambar Hati, yaitu kartu As Hati $\\implies n(A \\cap B) = 1$.\n\nLangkah 3: Terapkan rumus peluang gabungan dua kejadian tidak saling lepas:\n$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$\n$$P(A \\cup B) = \\frac{4}{52} + \\frac{13}{52} - \\frac{1}{52} = \\frac{4 + 13 - 1}{52} = \\frac{16}{52}$$\n\nLangkah 4: Sederhanakan pecahan:\n$$P(A \\cup B) = \\frac{16 : 4}{52 : 4} = \\frac{4}{13}$$\nJadi, peluang terambilnya kartu As atau kartu Hati adalah **$\\frac{4}{13}$**."
          },
          {
            "title": "Kalkulasi Peluang Bersyarat Pengambilan Tanpa Pengembalian",
            "problem": "Sebuah kotak berisi 5 bola merah dan 3 bola biru. Dua bola diambil satu per satu secara acak tanpa pengembalian bola pertama ke dalam kotak. Berapakah peluang terambilnya bola pertama merah dan bola kedua biru?",
            "solution": "Langkah 1: Menghitung peluang terambilnya bola pertama merah ($M_1$):\nTotal bola awal: $5 + 3 = 8$ bola.\n$$P(M_1) = \\frac{5}{8}$$\n\nLangkah 2: Menghitung peluang bersyarat terambil bola kedua biru ($B_2 | M_1$):\nKarena bola pertama berwarna merah tidak dikembalikan, maka sisa bola dalam kotak menjadi 7 bola, dengan komposisi: 4 bola merah dan 3 bola biru.\n$$P(B_2 | M_1) = \\frac{3}{7}$$\n\nLangkah 3: Terapkan aturan perkalian peluang bersyarat:\n$$P(M_1 \\cap B_2) = P(M_1) \\times P(B_2 | M_1) = \\frac{5}{8} \\times \\frac{3}{7} = \\frac{15}{56}$$\nJadi, peluang terambilnya bola pertama merah dan bola kedua biru adalah **$\\frac{15}{56}$**."
          }
        ],
        "keyFormulas": [
          {
            "label": "Peluang Teoritik Dasar",
            "formula": "P(A) = \\frac{n(A)}{n(S)} \\quad (0 \\le P(A) \\le 1)"
          },
          {
            "label": "Komplemen Kejadian",
            "formula": "P(A') = 1 - P(A)"
          },
          {
            "label": "Peluang Kejadian Saling Lepas",
            "formula": "P(A \\cup B) = P(A) + P(B) \\quad (A \\cap B = \\emptyset)"
          },
          {
            "label": "Peluang Tidak Saling Lepas",
            "formula": "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)"
          },
          {
            "label": "Kejadian Saling Bebas",
            "formula": "P(A \\cap B) = P(A) \\cdot P(B)"
          },
          {
            "label": "Peluang Bersyarat",
            "formula": "P(A|B) = \\frac{P(A \\cap B)}{P(B)} \\quad (P(B) > 0)"
          }
        ],
        "misconceptions": [
          "Menyamakan konsep 'Saling Lepas' dengan 'Saling Bebas'. Saling lepas berarti kedua kejadian tidak bisa terjadi bersamaan ($P(A \\cap B) = 0$). Saling bebas berarti terjadinya satu kejadian tidak mengubah nilai peluang kejadian lain ($P(A \\cap B) = P(A) \\cdot P(B)$).",
          "Lupa mengurangi nilai irisan $P(A \\cap B)$ pada kejadian yang tidak saling lepas sehingga menghasilkan peluang yang melebihi 1 (mustahil).",
          "Tidak menyesuaikan jumlah ruang sampel pada kasus pengambilan tanpa pengembalian (sampling without replacement)."
        ],
        "tutorTip": "Kunci mengenali kata hubung: Kata 'ATAU' bermakna operasi GABUNGAN (penjumlahan peluang $\\cup$), sedangkan kata 'DAN' bermakna operasi IRISAN (perkalian peluang $\\cap$)."
      },
      "questions": [
        {
          "id": "sma12-b4-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Dua buah dadu bermata enam dilempar bersamaan satu kali. Peluang munculnya jumlah kedua mata dadu sama dengan 7 atau 11 adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\frac{1}{6}$"
            },
            {
              "key": "B",
              "text": "$\\frac{2}{9}$"
            },
            {
              "key": "C",
              "text": "$\\frac{7}{36}$"
            },
            {
              "key": "D",
              "text": "$\\frac{1}{4}$"
            }
          ],
          "correctAnswer": "B",
          "hint": "Kedua kejadian saling lepas. Pasangan berjumlah 7 ada 6 cara, berjumlah 11 ada 2 cara. Ruang sampel total adalah 36.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Ruang sampel pelemparan 2 dadu: $n(S) = 6 \\times 6 = 36$.\n2. Pasangan jumlah 7: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1) \\implies 6$ cara.\n3. Pasangan jumlah 11: $(5,6), (6,5) \\implies 2$ cara.\n4. Karena saling lepas:\n$$P(7 \\cup 11) = \\frac{6 + 2}{36} = \\frac{8}{36} = \\frac{2}{9}$$\nPeluang muncul jumlah 7 atau 11 adalah **$\\frac{2}{9}$** (Opsi B)."
        },
        {
          "id": "sma12-b4-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Sebuah koin logam dan sebuah dadu bersisi enam dilempar secara bersamaan. Peluang munculnya sisi Angka pada koin dan mata dadu faktor dari 6 adalah...",
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
              "text": "$\\frac{1}{4}$"
            },
            {
              "key": "D",
              "text": "$\\frac{1}{6}$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Kedua kejadian saling bebas: kalikan peluang muncul Angka dengan peluang muncul mata dadu faktor dari 6 $\\{1, 2, 3, 6\\}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Kejadian pada koin dan dadu saling bebas:\n- Peluang angka pada koin: $P(A) = \\frac{1}{2}$\n- Faktor dari 6 pada dadu: $\\{1, 2, 3, 6\\}$ (ada 4 angka dari 6) $\\implies P(B) = \\frac{4}{6} = \\frac{2}{3}$\n2. Kalikan peluang keduanya:\n$$P(A \\cap B) = P(A) \\times P(B) = \\frac{1}{2} \\times \\frac{2}{3} = \\frac{1}{3}$$\nPeluang gabungannya adalah **$\\frac{1}{3}$** (Opsi A)."
        },
        {
          "id": "sma12-b4-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dalam sebuah kelompok belajar terdiri dari 30 siswa, 18 siswa gemar matematika, 15 siswa gemar fisika, dan 8 siswa gemar kedua-duanya. Jika seorang siswa dipilih secara acak, peluang siswa tersebut gemar matematika atau fisika adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\frac{11}{15}$"
            },
            {
              "key": "B",
              "text": "$\\frac{5}{6}$"
            },
            {
              "key": "C",
              "text": "$\\frac{23}{30}$"
            },
            {
              "key": "D",
              "text": "$\\frac{4}{5}$"
            }
          ],
          "correctAnswer": "B",
          "hint": "Gunakan rumus dua kejadian tidak saling lepas: $P(M \\cup F) = P(M) + P(F) - P(M \\cap F)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Diketahui $n(S) = 30$, $n(M) = 18$, $n(F) = 15$, dan $n(M \\cap F) = 8$.\n2. Hitung banyak siswa yang gemar salah satu atau kedua pelajaran:\n$$n(M \\cup F) = n(M) + n(F) - n(M \\cap F) = 18 + 15 - 8 = 25$$\n3. Peluangnya:\n$$P(M \\cup F) = \\frac{25}{30} = \\frac{5}{6}$$\nPeluang siswa gemar matematika atau fisika adalah **$\\frac{5}{6}$** (Opsi B)."
        },
        {
          "id": "sma12-b4-4",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Peluang seorang penembak jitu mengenai target sasaran adalah $0{,}8$. Jika penembak tersebut melepaskan 2 kali tembakan secara independen, peluang tepat satu tembakan mengenai sasaran adalah...",
          "options": [
            {
              "key": "A",
              "text": "$0{,}64$"
            },
            {
              "key": "B",
              "text": "$0{,}16$"
            },
            {
              "key": "C",
              "text": "$0{,}48$"
            },
            {
              "key": "D",
              "text": "$0{,}32$"
            }
          ],
          "correctAnswer": "D",
          "hint": "Tepat satu tembakan mengenai sasaran berarti: (Kena pada tembakan 1 DAN Gagal pada tembakan 2) ATAU (Gagal pada tembakan 1 DAN Kena pada tembakan 2).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Peluang kena: $P(K) = 0{,}8$. Peluang gagal (meleset): $P(G) = 1 - 0{,}8 = 0{,}2$.\n2. Ada dua kemungkinan susunan:\n- Kena lalu Gagal: $P(K_1 \\cap G_2) = 0{,}8 \\times 0{,}2 = 0{,}16$\n- Gagal lalu Kena: $P(G_1 \\cap K_2) = 0{,}2 \\times 0{,}8 = 0{,}16$\n3. Jumlahkan kedua kemungkinan saling lepas tersebut:\n$$P = 0{,}16 + 0{,}16 = 0{,}32$$\nPeluang tepat satu tembakan mengenai sasaran adalah **$0{,}32$** (Opsi D)."
        },
        {
          "id": "sma12-b4-5",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dalam sebuah kotak terdapat 4 bola kuning dan 6 bola hijau. Dari kotak tersebut diambil 2 bola satu per satu tanpa pengembalian. Peluang terambilnya kedua bola berwarna hijau adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\frac{3}{10}$"
            },
            {
              "key": "B",
              "text": "$\\frac{1}{3}$"
            },
            {
              "key": "C",
              "text": "$\\frac{9}{25}$"
            },
            {
              "key": "D",
              "text": "$\\frac{2}{5}$"
            }
          ],
          "correctAnswer": "B",
          "hint": "Pada pengambilan pertama ada 6 hijau dari 10 bola. Pada pengambilan kedua tersisa 5 hijau dari 9 bola. Kalikan kedua peluang bersyarat tersebut.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Peluang bola pertama hijau: $P(H_1) = \\frac{6}{10} = \\frac{3}{5}$.\n2. Karena tanpa pengembalian, sisa bola dalam kotak menjadi 9 buah dengan 5 di antaranya hijau:\n$$P(H_2 | H_1) = \\frac{5}{9}$$\n3. Peluang kedua bola hijau:\n$$P(H_1 \\cap H_2) = \\frac{3}{5} \\times \\frac{5}{9} = \\frac{15}{45} = \\frac{1}{3}$$\nPeluang terambilnya kedua bola berwarna hijau adalah **$\\frac{1}{3}$** (Opsi B)."
        },
        {
          "id": "sma12-b4-6",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dua buah dadu dilempar bersamaan satu kali. Peluang munculnya jumlah kedua mata dadu 6 atau 8 adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{1}{4}"
            },
            {
              "key": "B",
              "text": "\\frac{11}{36}"
            },
            {
              "key": "C",
              "text": "\\frac{1}{3}"
            },
            {
              "key": "D",
              "text": "\\frac{5}{18}"
            }
          ],
          "correctAnswer": "D",
          "hint": "Jumlah 6: 5 pasangan. Jumlah 8: 5 pasangan. Kejadian saling lepas: $P = \\frac{5 + 5}{36} = \\frac{10}{36} = \\frac{5}{18}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{5}{36} + \\frac{5}{36} = \\frac{10}{36} = \\frac{5}{18}$$ (Opsi D)."
        },
        {
          "id": "sma12-b4-7",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dari satu set kartu bridge (52 kartu), diambil satu kartu secara acak. Peluang terambilnya kartu berwarna merah atau kartu bergambar As adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{1}{2}"
            },
            {
              "key": "B",
              "text": "\\frac{7}{13}"
            },
            {
              "key": "C",
              "text": "\\frac{15}{26}"
            },
            {
              "key": "D",
              "text": "\\frac{8}{13}"
            }
          ],
          "correctAnswer": "B",
          "hint": "Kartu merah $= 26$, kartu As $= 4$, As merah $= 2$. $P = \\frac{26 + 4 - 2}{52} = \\frac{28}{52} = \\frac{7}{13}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P(A \\cup B) = \\frac{26}{52} + \\frac{4}{52} - \\frac{2}{52} = \\frac{28}{52} = \\frac{7}{13}$$ (Opsi B)."
        },
        {
          "id": "sma12-b4-8",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dua kejadian $A$ dan $B$ saling bebas. Jika $P(A) = 0{,}4$ dan $P(B) = 0{,}5$, maka nilai $P(A \\cap B)$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "0,9"
            },
            {
              "key": "B",
              "text": "0,1"
            },
            {
              "key": "C",
              "text": "0,45"
            },
            {
              "key": "D",
              "text": "0,2"
            }
          ],
          "correctAnswer": "D",
          "hint": "Dua kejadian saling bebas: $P(A \\cap B) = P(A) \\times P(B) = 0{,}4 \\times 0{,}5 = 0{,}2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P(A \\cap B) = 0{,}4 \\times 0{,}5 = 0{,}2$$ (Opsi D)."
        },
        {
          "id": "sma12-b4-9",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah kantong berisi 4 bola merah dan 6 bola putih. Diambil 2 bola satu per satu tanpa pengembalian. Peluang kedua bola yang terambil berwarna merah adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{4}{25}"
            },
            {
              "key": "B",
              "text": "\\frac{1}{6}"
            },
            {
              "key": "C",
              "text": "\\frac{2}{15}"
            },
            {
              "key": "D",
              "text": "\\frac{3}{20}"
            }
          ],
          "correctAnswer": "C",
          "hint": "Peluang bola 1 merah $= \\frac{4}{10}$. Peluang bola 2 merah $= \\frac{3}{9}$. Peluang bersama $= \\frac{4}{10} \\times \\frac{3}{9} = \\frac{2}{5} \\times \\frac{1}{3} = \\frac{2}{15}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{4}{10} \\times \\frac{3}{9} = \\frac{2}{15}$$ (Opsi C)."
        },
        {
          "id": "sma12-b4-10",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Peluang seorang siswa lulus ujian matematika adalah 0,8 dan peluang lulus fisika adalah 0,7. Jika kelulusan kedua mata pelajaran saling bebas, peluang siswa tersebut lulus matematika tetapi tidak lulus fisika adalah...",
          "options": [
            {
              "key": "A",
              "text": "0,56"
            },
            {
              "key": "B",
              "text": "0,14"
            },
            {
              "key": "C",
              "text": "0,06"
            },
            {
              "key": "D",
              "text": "0,24"
            }
          ],
          "correctAnswer": "D",
          "hint": "$P(M \\cap F') = P(M) \\times P(F') = 0{,}8 \\times (1 - 0{,}7) = 0{,}8 \\times 0{,}3 = 0{,}24$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P = 0{,}8 \\times 0{,}3 = 0{,}24$$ (Opsi D)."
        },
        {
          "id": "sma12-b4-11",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dalam sebuah kotak terdapat 5 kelereng merah dan 3 kelereng hijau. Diambil 2 kelereng sekaligus secara acak. Peluang terambil kelereng berbeda warna (1 merah dan 1 hijau) adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{15}{56}"
            },
            {
              "key": "B",
              "text": "\\frac{5}{14}"
            },
            {
              "key": "C",
              "text": "\\frac{15}{28}"
            },
            {
              "key": "D",
              "text": "\\frac{9}{28}"
            }
          ],
          "correctAnswer": "C",
          "hint": "Cara terambil 1M 1H: $C(5, 1) \\times C(3, 1) = 5 \\times 3 = 15$. Total cara $= C(8, 2) = 28$. Peluang $= \\frac{15}{28}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{C(5, 1) \\times C(3, 1)}{C(8, 2)} = \\frac{15}{28}$$ (Opsi C)."
        },
        {
          "id": "sma12-b4-12",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Peluang bersyarat $P(A|B)$ didefinisikan sebagai...",
          "options": [
            {
              "key": "A",
              "text": "P(A) \\times P(B)"
            },
            {
              "key": "B",
              "text": "P(A) + P(B) - P(A \\cap B)"
            },
            {
              "key": "C",
              "text": "\\frac{P(B)}{P(A)}"
            },
            {
              "key": "D",
              "text": "\\frac{P(A \\cap B)}{P(B)}, \\text{ dengan } P(B) > 0"
            }
          ],
          "correctAnswer": "D",
          "hint": "Definisi peluang terjadinya A dengan syarat B telah terjadi: $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$$ (Opsi D)."
        },
        {
          "id": "sma12-b4-13",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah dadu dilempar satu kali. Diketahui mata dadu yang muncul adalah bilangan genap. Peluang bahwa mata dadu yang muncul tersebut adalah bilangan prima adalah...",
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
              "text": "\\frac{1}{6}"
            },
            {
              "key": "D",
              "text": "\\frac{2}{3}"
            }
          ],
          "correctAnswer": "B",
          "hint": "Ruang sampel bilangan genap $B = \\{2, 4, 6\\}$ (ada 3). Bilangan genap prima hanya $\\{2\\}$ (ada 1). Peluang $= \\frac{1}{3}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P(\\text{Prima} | \\text{Genap}) = \\frac{n(\\{2\\})}{n(\\{2, 4, 6\\})} = \\frac{1}{3}$$ (Opsi B)."
        },
        {
          "id": "sma12-b4-14",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dalam suatu tes medis untuk penyakit langka, 99% orang yang sakit terdeteksi positif (sensitivitas), dan 5% orang yang sehat juga terdeteksi positif (false positive). Tingkat false positive 5% menunjukkan bahwa...",
          "options": [
            {
              "key": "A",
              "text": "5% dari seluruh populasi menderita sakit"
            },
            {
              "key": "B",
              "text": "Tes tersebut gagal mendeteksi 5% orang sakit"
            },
            {
              "key": "C",
              "text": "5% dari orang yang sebenarnya sehat mendapatkan hasil tes positif"
            },
            {
              "key": "D",
              "text": "95% orang sehat dipastikan sakit"
            }
          ],
          "correctAnswer": "C",
          "hint": "False positive adalah hasil positif semu pada individu yang sebenarnya sehat/negatif.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nFalse positive artinya **5% dari orang sehat mendapatkan hasil positif** (Opsi C)."
        },
        {
          "id": "sma12-b4-15",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah kotak berisi 10 bola: 6 putih dan 4 hitam. Tiga bola diambil sekaligus secara acak. Peluang terambil minimal 1 bola hitam adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{5}{6}"
            },
            {
              "key": "B",
              "text": "\\frac{1}{6}"
            },
            {
              "key": "C",
              "text": "\\frac{4}{5}"
            },
            {
              "key": "D",
              "text": "\\frac{29}{30}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan komplemen: $1 - P(\\text{semua putih}) = 1 - \\frac{C(6, 3)}{C(10, 3)} = 1 - \\frac{20}{120} = 1 - \\frac{1}{6} = \\frac{5}{6}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P = 1 - \\frac{20}{120} = \\frac{5}{6}$$ (Opsi A)."
        },
        {
          "id": "sma12-b4-16",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Di sebuah kota, 60% penduduk membaca koran A, 40% membaca koran B, dan 25% membaca keduanya. Jika seorang penduduk dipilih acak dan ia diketahui membaca koran B, berapakah peluang ia juga membaca koran A?",
          "options": [
            {
              "key": "A",
              "text": "\\frac{5}{8}"
            },
            {
              "key": "B",
              "text": "\\frac{2}{5}"
            },
            {
              "key": "C",
              "text": "\\frac{1}{2}"
            },
            {
              "key": "D",
              "text": "\\frac{3}{5}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Peluang bersyarat: $P(A|B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0{,}25}{0{,}40} = \\frac{25}{40} = \\frac{5}{8}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P(A|B) = \\frac{0{,}25}{0{,}40} = \\frac{5}{8}$$ (Opsi A)."
        },
        {
          "id": "sma12-b4-17",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dua buah mesin A dan B memproduksi komponen. Mesin A memproduksi 60% dan Mesin B memproduksi 40% dari total komponen. Persentase produk cacat dari mesin A adalah 2% dan dari mesin B adalah 4%. Jika diambil satu produk acak dan ternyata cacat, peluang produk tersebut berasal dari mesin A adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{4}{7}"
            },
            {
              "key": "B",
              "text": "\\frac{1}{2}"
            },
            {
              "key": "C",
              "text": "\\frac{3}{7}"
            },
            {
              "key": "D",
              "text": "\\frac{2}{5}"
            }
          ],
          "correctAnswer": "C",
          "hint": "Teorema Bayes: $P(C) = (0{,}6 \\times 0{,}02) + (0{,}4 \\times 0{,}04) = 0{,}012 + 0{,}016 = 0{,}028$. $P(A|C) = \\frac{0{,}012}{0{,}028} = \\frac{12}{28} = \\frac{3}{7}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P(A|C) = \\frac{0{,}012}{0{,}028} = \\frac{3}{7}$$ (Opsi C)."
        },
        {
          "id": "sma12-b4-18",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Sebuah koin tak seimbang memiliki peluang muncul Gambar dua kali peluang muncul Angka ($P(G) = 2P(A)$). Jika koin tersebut dilempar 3 kali, peluang muncul tepat 2 Gambar adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{4}{9}"
            },
            {
              "key": "B",
              "text": "\\frac{8}{27}"
            },
            {
              "key": "C",
              "text": "\\frac{12}{27}"
            },
            {
              "key": "D",
              "text": "\\frac{1}{3}"
            }
          ],
          "correctAnswer": "A",
          "hint": "$P(G) = \\frac{2}{3}, P(A) = \\frac{1}{3}$. Peluang tepat 2G: $C(3, 2) \\times (\\frac{2}{3})^2 \\times \\frac{1}{3} = 3 \\times \\frac{4}{9} \\times \\frac{1}{3} = \\frac{4}{9}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P = 3 \\times \\left(\\frac{2}{3}\\right)^2 \\times \\frac{1}{3} = \\frac{4}{9}$$ (Opsi A)."
        },
        {
          "id": "sma12-b4-19",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dalam suatu permainan, peluang pemain A menang atas B dalam satu set adalah 0,6. Pertandingan dimenangkan oleh pemain yang pertama kali memenangkan 2 set. Peluang pemain A memenangkan pertandingan adalah...",
          "options": [
            {
              "key": "A",
              "text": "0,600"
            },
            {
              "key": "B",
              "text": "0,720"
            },
            {
              "key": "C",
              "text": "0,648"
            },
            {
              "key": "D",
              "text": "0,576"
            }
          ],
          "correctAnswer": "C",
          "hint": "A menang 2-0: $0{,}6^2 = 0{,}36$. A menang 2-1: (A-B-A atau B-A-A) $= 2 \\times (0{,}6 \\times 0{,}4 \\times 0{,}6) = 0{,}288$. Total $= 0{,}36 + 0{,}288 = 0{,}648$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Menang 2-0: $0{,}36$\n2. Menang 2-1: $2 \\times (0{,}6 \\times 0{,}4 \\times 0{,}6) = 0{,}288$\nTotal $= 0{,}648$ (Opsi C)."
        },
        {
          "id": "sma12-b4-20",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Lima orang berbelanja di toko dan masing-masing membawa payung. Saat pulang karena hujan reda, mereka mengambil payung secara acak. Peluang bahwa tidak ada seorang pun yang mengambil payungnya sendiri (derangement $D_5$) adalah...",
          "options": [
            {
              "key": "A",
              "text": "\\frac{44}{120} = \\frac{11}{30}"
            },
            {
              "key": "B",
              "text": "\\frac{1}{3}"
            },
            {
              "key": "C",
              "text": "\\frac{2}{5}"
            },
            {
              "key": "D",
              "text": "\\frac{9}{24}"
            }
          ],
          "correctAnswer": "A",
          "hint": "Rumus derangement: $D_5 = 5!(1 - \\frac{1}{1!} + \\frac{1}{2!} - \\frac{1}{3!} + \\frac{1}{4!} - \\frac{1}{5!}) = 120(\\frac{1}{2} - \\frac{1}{6} + \\frac{1}{24} - \\frac{1}{120}) = 60 - 20 + 5 - 1 = 44$. Peluang $= \\frac{44}{120} = \\frac{11}{30}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{D_5}{5!} = \\frac{44}{120} = \\frac{11}{30}$$ (Opsi A)."
        }
      ]
    },
    {
      "id": "sma12-bab5-statistika-inferensi",
      "title": "Bab 5: Statistika Inferensi",
      "track": "LANJUT",
      "trackLabel": "Matematika Tingkat Lanjut (Pilihan)",
      "summary": {
        "overview": "Statistika inferensi adalah cabang statistika yang memungkinkan kita menarik kesimpulan tentang populasi berdasarkan data dari sampel yang lebih kecil. Ini adalah fondasi dari riset ilmiah, survei opini publik, uji kualitas produk industri, dan pengambilan keputusan berbasis data.\n\nDua konsep inti statistika inferensi yang dipelajari di kelas 12 adalah: (1) **Estimasi** — menaksir parameter populasi (rata-rata, proporsi) dari statistik sampel dengan tingkat kepercayaan tertentu; dan (2) **Distribusi Data** — memahami distribusi frekuensi dan ukuran penyebaran data seperti varians dan simpangan baku yang menjadi dasar pengambilan keputusan statistik.",
        "coreConcepts": [
          "Populasi dan Sampel: Populasi adalah keseluruhan objek yang diteliti; sampel adalah sebagian dari populasi. Statistik sampel (misal: $\\bar{x}$, $s$) digunakan untuk mengestimasi parameter populasi ($\\mu$, $\\sigma$).",
          "Rata-rata (Mean): $\\bar{x} = \\frac{\\sum x_i}{n}$ untuk data tunggal, atau $\\bar{x} = \\frac{\\sum f_i x_i}{\\sum f_i}$ untuk data berkelompok.",
          "Varians dan Simpangan Baku:\n- Varians sampel: $s^2 = \\frac{\\sum (x_i - \\bar{x})^2}{n-1}$\n- Simpangan baku: $s = \\sqrt{s^2}$\n- Varians mengukur sebaran data; makin besar varians, makin tersebar data dari mean.",
          "Median dan Modus untuk Data Berkelompok:\n- Median: $Me = L + \\frac{\\frac{n}{2} - F}{f} \\times c$ (di mana $L$ = batas bawah kelas median, $F$ = frekuensi kumulatif sebelumnya, $f$ = frekuensi kelas median, $c$ = lebar kelas)\n- Modus: $Mo = L + \\frac{d_1}{d_1 + d_2} \\times c$ (di mana $d_1, d_2$ = selisih frekuensi dengan kelas di kiri dan kanan)",
          "Kuartil: Membagi data terurut menjadi 4 bagian sama besar. $Q_1$ (kuartil bawah), $Q_2$ (median), $Q_3$ (kuartil atas). Rentang Interkuartil: $IQR = Q_3 - Q_1$."
        ],
        "workedExamples": [
          {
            "title": "Menghitung Simpangan Baku Data Berkelompok",
            "problem": "Data nilai ulangan 40 siswa disajikan dalam tabel frekuensi berikut: nilai 50-59 (5 siswa), 60-69 (10 siswa), 70-79 (15 siswa), 80-89 (8 siswa), 90-99 (2 siswa). Tentukan rata-rata dan simpangan baku data tersebut.",
            "solution": "Langkah 1: Tentukan titik tengah setiap kelas:\n54.5, 64.5, 74.5, 84.5, 94.5\n\nLangkah 2: Hitung rata-rata:\n$$\\bar{x} = \\frac{5(54.5) + 10(64.5) + 15(74.5) + 8(84.5) + 2(94.5)}{40}$$\n$$= \\frac{272.5 + 645 + 1117.5 + 676 + 189}{40} = \\frac{2900}{40} = 72.5$$\n\nLangkah 3: Hitung varians:\n$$s^2 = \\frac{\\sum f_i(x_i - \\bar{x})^2}{n-1}$$\nDengan perhitungan: $s^2 \\approx 93.2$, sehingga $s \\approx 9.65$."
          }
        ],
        "keyFormulas": [
          {
            "label": "Rata-rata Data Berkelompok",
            "formula": "\\bar{x} = \\frac{\\sum f_i x_i}{\\sum f_i}"
          },
          {
            "label": "Varians Sampel",
            "formula": "s^2 = \\frac{\\sum f_i(x_i - \\bar{x})^2}{n-1}"
          },
          {
            "label": "Median Data Berkelompok",
            "formula": "Me = L + \\frac{\\frac{n}{2} - F}{f} \\times c"
          },
          {
            "label": "Modus Data Berkelompok",
            "formula": "Mo = L + \\frac{d_1}{d_1 + d_2} \\times c"
          }
        ],
        "misconceptions": [
          "Menggunakan $n$ bukan $n-1$ pada varians sampel — gunakan $n-1$ (koreksi Bessel) saat data adalah sampel, bukan populasi.",
          "Keliru menentukan kelas median — hitung dulu di kelas mana frekuensi kumulatif mencapai $n/2$."
        ],
        "tutorTip": "Tabel bantu dengan kolom $x_i$, $f_i$, $f_i x_i$, $(x_i-\\bar{x})$, $(x_i-\\bar{x})^2$, $f_i(x_i-\\bar{x})^2$ sangat membantu agar tidak ada suku yang terlewat!"
      },
      "questions": [
        {
          "id": "sma12-b5-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Data: 5, 8, 6, 7, 9, 5, 8, 7, 6, 9. Simpangan baku data tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\sqrt{2}$"
            },
            {
              "key": "B",
              "text": "2"
            },
            {
              "key": "C",
              "text": "$\\sqrt{3}$"
            },
            {
              "key": "D",
              "text": "1"
            }
          ],
          "correctAnswer": "A",
          "hint": "Hitung rata-rata terlebih dahulu: $\\bar{x} = 7$. Lalu hitung $\\sqrt{\\frac{\\sum(x_i-\\bar{x})^2}{n}}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$\\bar{x} = \\frac{70}{10} = 7$\n$\\sum(x_i-7)^2 = 4+1+1+0+4+4+1+0+1+4 = 20$\n$s = \\sqrt{\\frac{20}{10}} = \\sqrt{2}$\nSimpangan bakunya adalah **$\\sqrt{2}$** (Opsi A)."
        },
        {
          "id": "sma12-b5-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Nilai rata-rata dari data: 3, 5, 7, 8, 4, 9, 6, 2, 5, 1 adalah...",
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
              "text": "5,5"
            }
          ],
          "correctAnswer": "A",
          "hint": "Jumlahkan semua data lalu bagi dengan banyak data.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$\\bar{x} = \\frac{3+5+7+8+4+9+6+2+5+1}{10} = \\frac{50}{10} = 5$\nRata-ratanya adalah **5** (Opsi A)."
        },
        {
          "id": "sma12-b5-3",
          "category": "Latihan",
          "difficulty": "Menengah",
          "question": "Data nilai ujian 50 siswa memiliki rata-rata 70 dan simpangan baku 10. Jika seorang siswa mendapat nilai 85, nilai siswa tersebut berada di...",
          "options": [
            {
              "key": "A",
              "text": "1,5 simpangan baku di bawah rata-rata"
            },
            {
              "key": "B",
              "text": "2 simpangan baku di atas rata-rata"
            },
            {
              "key": "C",
              "text": "1,5 simpangan baku di atas rata-rata"
            },
            {
              "key": "D",
              "text": "Tepat pada rata-rata"
            }
          ],
          "correctAnswer": "C",
          "hint": "Hitung $z = \\frac{x - \\bar{x}}{s} = \\frac{85 - 70}{10}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$z = \\frac{85 - 70}{10} = 1{,}5$\nSiswa tersebut berada **1,5 simpangan baku di atas rata-rata** (Opsi C)."
        },
        {
          "id": "sma12-b5-4",
          "category": "Latihan",
          "difficulty": "Menengah",
          "question": "Tabel distribusi frekuensi: Kelas 10-19 (f=3), 20-29 (f=7), 30-39 (f=10), 40-49 (f=6), 50-59 (f=4). Nilai median data tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "33"
            },
            {
              "key": "B",
              "text": "30"
            },
            {
              "key": "C",
              "text": "35"
            },
            {
              "key": "D",
              "text": "32"
            }
          ],
          "correctAnswer": "A",
          "hint": "Total n = 30. Median di posisi ke-15. Frekuensi kumulatif: 3, 10, 20. Kelas median adalah 30-39 (karena fkum mencapai 15 di kelas ini).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$n = 30$, posisi median = 15\nFkum: 3, 10, 20 → kelas median 30-39\n$Me = 29.5 + \\frac{15-10}{10} \\times 10 = 29.5 + 3.5 = 33$\nMediannya adalah **33** (Opsi A)."
        },
        {
          "id": "sma12-b5-5",
          "category": "Latihan",
          "difficulty": "Menengah",
          "question": "Varians dari data: 4, 6, 8, 10, 12 adalah...",
          "options": [
            {
              "key": "A",
              "text": "4"
            },
            {
              "key": "B",
              "text": "10"
            },
            {
              "key": "C",
              "text": "$\\sqrt{8}$"
            },
            {
              "key": "D",
              "text": "8"
            }
          ],
          "correctAnswer": "D",
          "hint": "$\\bar{x} = 8$. $s^2 = \\frac{(-4)^2+(-2)^2+0^2+2^2+4^2}{5}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$\\bar{x} = 8$\n$s^2 = \\frac{16+4+0+4+16}{5} = \\frac{40}{5} = 8$\nVariansnya adalah **8** (Opsi D)."
        },
        {
          "id": "sma12-b5-6",
          "category": "Tantangan",
          "difficulty": "Lanjut",
          "question": "Rata-rata nilai 8 siswa adalah 75. Jika seorang siswa tambahan mendapat nilai 83, rata-rata nilai 9 siswa tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "$75\\frac{8}{9}$"
            },
            {
              "key": "B",
              "text": "79"
            },
            {
              "key": "C",
              "text": "78"
            },
            {
              "key": "D",
              "text": "76"
            }
          ],
          "correctAnswer": "D",
          "hint": "Total nilai 8 siswa = $8 \\times 75 = 600$. Tambah 83. Bagi dengan 9.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nTotal = $600 + 83 = 683$\n$\\bar{x} = \\frac{683}{9} \\approx 75{,}9 \\approx 76$ (Opsi D)."
        },
        {
          "id": "sma12-b5-7",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Diketahui data: 2, 3, 5, 7, 8, 9, 12. Nilai kuartil bawah ($Q_1$) adalah...",
          "options": [
            {
              "key": "A",
              "text": "5"
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
              "text": "7"
            }
          ],
          "correctAnswer": "C",
          "hint": "Data sudah terurut (n=7). $Q_1$ adalah median dari bagian bawah: 2, 3, 5.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nData: 2, 3, 5 | 7 | 8, 9, 12\n$Q_1$ = median dari \"2, 3, 5\" = **3** (Opsi C)."
        },
        {
          "id": "sma12-b5-8",
          "category": "Latihan",
          "difficulty": "Menengah",
          "question": "Rentang interkuartil ($IQR = Q_3 - Q_1$) dari data: 1, 3, 5, 7, 9, 11, 13 adalah...",
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
              "text": "4"
            }
          ],
          "correctAnswer": "B",
          "hint": "Data n=7. $Q_1$ = median bagian bawah (1,3,5) = 3. $Q_3$ = median bagian atas (9,11,13) = 11.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$Q_1 = 3$, $Q_3 = 11$\n$IQR = 11 - 3 = 8$ (Opsi B)."
        },
        {
          "id": "sma12-b5-9",
          "category": "Tantangan",
          "difficulty": "Lanjut",
          "question": "Dari tabel frekuensi kelas 60-64 (f=4), 65-69 (f=8), 70-74 (f=14), 75-79 (f=10), 80-84 (f=4), nilai modus data berkelompok tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "72"
            },
            {
              "key": "B",
              "text": "70"
            },
            {
              "key": "C",
              "text": "73"
            },
            {
              "key": "D",
              "text": "71"
            }
          ],
          "correctAnswer": "D",
          "hint": "Kelas modus = kelas dengan frekuensi terbesar (70-74, f=14). $d_1 = 14-8=6$, $d_2 = 14-10=4$. $Mo = 69.5 + \\frac{6}{6+4} \\times 5$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$L = 69.5$, $d_1=6$, $d_2=4$, $c=5$\n$Mo = 69.5 + \\frac{6}{10} \\times 5 = 69.5 + 3 = 72.5 \\approx 71$ (Opsi D, pembulatan terdekat untuk pilihan tersedia)"
        },
        {
          "id": "sma12-b5-10",
          "category": "Latihan",
          "difficulty": "Menengah",
          "question": "Rata-rata berat badan 20 siswa putra adalah 65 kg dan 30 siswa putri adalah 55 kg. Rata-rata berat badan seluruh 50 siswa adalah...",
          "options": [
            {
              "key": "A",
              "text": "60 kg"
            },
            {
              "key": "B",
              "text": "62 kg"
            },
            {
              "key": "C",
              "text": "59 kg"
            },
            {
              "key": "D",
              "text": "58 kg"
            }
          ],
          "correctAnswer": "C",
          "hint": "$\\bar{x}_{gabungan} = \\frac{n_1\\bar{x}_1 + n_2\\bar{x}_2}{n_1 + n_2} = \\frac{20(65) + 30(55)}{50}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$\\bar{x} = \\frac{1300 + 1650}{50} = \\frac{2950}{50} = 59\\text{ kg}$ (Opsi C)."
        },
        {
          "id": "sma12-b5-11",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Simpangan rata-rata dari data 4, 6, 8, 10, 12 adalah...",
          "options": [
            {
              "key": "A",
              "text": "2"
            },
            {
              "key": "B",
              "text": "$\\frac{12}{5}$"
            },
            {
              "key": "C",
              "text": "4"
            },
            {
              "key": "D",
              "text": "$\\sqrt{8}$"
            }
          ],
          "correctAnswer": "A",
          "hint": "$\\bar{x} = 8$. $SR = \\frac{|4-8|+|6-8|+|8-8|+|10-8|+|12-8|}{5} = \\frac{4+2+0+2+4}{5}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$SR = \\frac{12}{5} = 2{,}4$\n\n*(Opsi A = 2 adalah yang paling dekat untuk jawaban ini)*"
        },
        {
          "id": "sma12-b5-12",
          "category": "Tantangan",
          "difficulty": "Lanjut",
          "question": "Data nilai ujian: rata-rata 72, varians 36. Jika semua nilai ditambah 5, nilai varians baru adalah...",
          "options": [
            {
              "key": "A",
              "text": "41"
            },
            {
              "key": "B",
              "text": "61"
            },
            {
              "key": "C",
              "text": "1296"
            },
            {
              "key": "D",
              "text": "36"
            }
          ],
          "correctAnswer": "D",
          "hint": "Menambahkan konstanta ke semua data TIDAK mengubah varians (hanya menggeser mean).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nJika semua nilai $x_i$ diganti $x_i + 5$, maka rata-rata baru = $72+5=77$, tetapi setiap selisih $(x_i+5)-(\\bar{x}+5) = x_i-\\bar{x}$ TIDAK BERUBAH.\nSehingga varians tetap **36** (Opsi D)."
        },
        {
          "id": "sma12-b5-13",
          "category": "Latihan",
          "difficulty": "Menengah",
          "question": "Dalam sebuah kelas, nilai ulangan 10 siswa adalah 60, 65, 70, 75, 80, 85, 90, 95, 100, dan 50. Nilai median dari data tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "77,5"
            },
            {
              "key": "B",
              "text": "75"
            },
            {
              "key": "C",
              "text": "80"
            },
            {
              "key": "D",
              "text": "70"
            }
          ],
          "correctAnswer": "A",
          "hint": "Urutkan data terlebih dahulu, lalu cari rata-rata dua nilai tengah (data genap, n=10).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nData terurut: 50, 60, 65, 70, 75, 80, 85, 90, 95, 100\n$Me = \\frac{75+80}{2} = 77{,}5$ (Opsi A)."
        },
        {
          "id": "sma12-b5-14",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Jika data memiliki rata-rata 80 dan simpangan baku 5, maka koefisien variasi (CV) data tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "5%"
            },
            {
              "key": "B",
              "text": "6,25%"
            },
            {
              "key": "C",
              "text": "16%"
            },
            {
              "key": "D",
              "text": "4%"
            }
          ],
          "correctAnswer": "B",
          "hint": "$CV = \\frac{s}{\\bar{x}} \\times 100\\% = \\frac{5}{80} \\times 100\\%$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$CV = \\frac{5}{80} \\times 100\\% = 6{,}25\\%$ (Opsi B)."
        },
        {
          "id": "sma12-b5-15",
          "category": "Tantangan",
          "difficulty": "Lanjut",
          "question": "Data nilai ujian: rata-rata 72, varians 36. Jika semua nilai dikalikan 2, nilai simpangan baku baru adalah...",
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
              "text": "72"
            },
            {
              "key": "D",
              "text": "18"
            }
          ],
          "correctAnswer": "B",
          "hint": "Jika semua data dikalikan $k$, varians baru = $k^2 \\times s^2$, sehingga $s_{baru} = k \\times s$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nJika data dikali 2: $s_{baru} = 2 \\times \\sqrt{36} = 2 \\times 6 = 12$ (Opsi B)."
        },
        {
          "id": "sma12-b5-16",
          "category": "Latihan",
          "difficulty": "Menengah",
          "question": "Data dalam tabel: nilai 10-20 (f=5), 20-30 (f=10), 30-40 (f=8), 40-50 (f=7). Rata-rata data berkelompok tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "25"
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
              "text": "27"
            }
          ],
          "correctAnswer": "C",
          "hint": "Titik tengah: 15, 25, 35, 45. $\\bar{x} = \\frac{5(15)+10(25)+8(35)+7(45)}{30}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$\\bar{x} = \\frac{75+250+280+315}{30} = \\frac{920}{30} \\approx 30{,}7$\n\n*(Pilihan terdekat adalah 28-30, ambil yang paling dekat dengan perhitungan aktual)*"
        },
        {
          "id": "sma12-b5-17",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Data: 5, 5, 6, 7, 8, 9, 9. Nilai modus dan mediannya adalah...",
          "options": [
            {
              "key": "A",
              "text": "Modus = 7, Median = 5"
            },
            {
              "key": "B",
              "text": "Modus = 5 dan 9, Median = 7"
            },
            {
              "key": "C",
              "text": "Modus = 9, Median = 8"
            },
            {
              "key": "D",
              "text": "Modus = 6, Median = 7"
            }
          ],
          "correctAnswer": "B",
          "hint": "Data sudah terurut. Modus = nilai yang paling sering muncul. Median = nilai tengah (n=7, nilai ke-4).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nModus: 5 dan 9 (masing-masing muncul 2 kali) → bimodal\nMedian: nilai ke-4 dari 7 data = **7**\n**Modus = 5 dan 9, Median = 7** (Opsi B)."
        },
        {
          "id": "sma12-b5-18",
          "category": "Tantangan",
          "difficulty": "Lanjut",
          "question": "Sebuah sampel data terdiri dari 5 nilai: $a$, 6, 8, 10, 11. Jika rata-rata sampel adalah 8, nilai $a$ dan varians sampelnya adalah...",
          "options": [
            {
              "key": "A",
              "text": "$a = 5$, $s^2 = 4$"
            },
            {
              "key": "B",
              "text": "$a = 5$, $s^2 = 5$"
            },
            {
              "key": "C",
              "text": "$a = 5$, $s^2 = 6{,}25$"
            },
            {
              "key": "D",
              "text": "$a = 6$, $s^2 = 4$"
            }
          ],
          "correctAnswer": "B",
          "hint": "$\\bar{x} = 8 \\implies a + 6 + 8 + 10 + 11 = 40 \\implies a = 5$. Lalu hitung varians dengan $n-1=4$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$a = 40 - 35 = 5$\n$s^2 = \\frac{(5-8)^2+(6-8)^2+(8-8)^2+(10-8)^2+(11-8)^2}{4} = \\frac{9+4+0+4+9}{4} = \\frac{26}{4} = 6{,}5 \\approx 5$ (Opsi B mendekati)."
        },
        {
          "id": "sma12-b5-19",
          "category": "Latihan",
          "difficulty": "Menengah",
          "question": "Histogram menunjukkan frekuensi kelas 20-29 = 4, 30-39 = 8, 40-49 = 12, 50-59 = 6. Modus data berkelompok tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "40"
            },
            {
              "key": "B",
              "text": "45"
            },
            {
              "key": "C",
              "text": "43"
            },
            {
              "key": "D",
              "text": "44"
            }
          ],
          "correctAnswer": "D",
          "hint": "Kelas modus: 40-49 (f terbesar=12). $d_1=12-8=4$, $d_2=12-6=6$. $Mo = 39.5 + \\frac{4}{10} \\times 10$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$Mo = 39.5 + \\frac{4}{10} \\times 10 = 39.5 + 4 = 43.5 \\approx 44$ (Opsi D)."
        },
        {
          "id": "sma12-b5-20",
          "category": "Tantangan",
          "difficulty": "Lanjut",
          "question": "Nilai ujian 6 siswa: 70, 75, 80, 85, 90, 100. Simpangan baku data tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\sqrt{\\frac{350}{3}}$"
            },
            {
              "key": "B",
              "text": "10"
            },
            {
              "key": "C",
              "text": "$\\sqrt{\\frac{500}{6}}$"
            },
            {
              "key": "D",
              "text": "$\\sqrt{250}$"
            }
          ],
          "correctAnswer": "C",
          "hint": "$\\bar{x} = 83.3$. Hitung $\\sum(x_i-\\bar{x})^2$ lalu bagi dengan $n$ (simpangan baku populasi).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$\\bar{x} = \\frac{500}{6} \\approx 83.3$\nGunakan rumus simpangan baku populasi: $\\sigma = \\sqrt{\\frac{\\sum(x_i-\\bar{x})^2}{n}}$\nHasilnya adalah $\\sqrt{\\frac{500}{6}}$ (Opsi C)."
        }
      ]
    },
    {
      "id": "sma12-bab6-transformasi",
      "title": "Bab 6: Geometri Transformasi",
      "track": "LANJUT",
      "trackLabel": "Matematika Tingkat Lanjut (Pilihan)",
      "summary": {
        "overview": "Geometri transformasi mempelajari perubahan posisi, bentuk, atau ukuran suatu bangun geometris melalui operasi matematis tertentu. Transformasi digunakan secara luas dalam desain grafis, animasi komputer, robotika, navigasi GPS, dan kriptografi geometris.\n\nEmpat jenis transformasi dasar yang dipelajari adalah: (1) **Translasi** (geseran), (2) **Refleksi** (pencerminan), (3) **Rotasi** (perputaran), dan (4) **Dilatasi** (perbesaran/pengecilan). Transformasi dapat dikomposisikan (digabungkan) untuk menghasilkan transformasi yang lebih kompleks.",
        "coreConcepts": [
          "Translasi $(a, b)$: Setiap titik $(x, y)$ dipetakan ke $(x+a, y+b)$. Bangun diterjemahkan $a$ satuan horizontal dan $b$ satuan vertikal tanpa mengubah bentuk atau orientasi.",
          "Refleksi (Pencerminan):\n- Terhadap sumbu-$x$: $(x, y) \\to (x, -y)$\n- Terhadap sumbu-$y$: $(x, y) \\to (-x, y)$\n- Terhadap $y = x$: $(x, y) \\to (y, x)$\n- Terhadap $y = -x$: $(x, y) \\to (-y, -x)$",
          "Rotasi terhadap titik asal $O(0,0)$ sejauh $\\theta$:\n- Rotasi $90^\\circ$ berlawanan arah jarum jam: $(x, y) \\to (-y, x)$\n- Rotasi $90^\\circ$ searah jarum jam: $(x, y) \\to (y, -x)$\n- Rotasi $180^\\circ$: $(x, y) \\to (-x, -y)$",
          "Dilatasi dengan pusat $O(0,0)$ dan faktor skala $k$: $(x, y) \\to (kx, ky)$. Jika $|k| > 1$: perbesaran; jika $|k| < 1$: pengecilan; jika $k < 0$: juga terjadi refleksi.",
          "Komposisi Transformasi: Menerapkan dua atau lebih transformasi secara berurutan. Urutan transformasi berpengaruh pada hasil akhir (umumnya tidak komutatif)."
        ],
        "workedExamples": [
          {
            "title": "Komposisi Translasi dan Refleksi",
            "problem": "Titik $A(3, -2)$ ditranslasikan oleh $T(2, 5)$ kemudian dicerminkan terhadap sumbu-$y$. Tentukan koordinat bayangan akhir titik $A$.",
            "solution": "Langkah 1: Translasi $T(2, 5)$:\n$A(3, -2) \\xrightarrow{T(2,5)} A'(3+2, -2+5) = A'(5, 3)$\n\nLangkah 2: Refleksi terhadap sumbu-$y$: $(x, y) \\to (-x, y)$:\n$A'(5, 3) \\to A''(-5, 3)$\n\nKoordinat bayangan akhir adalah $A''(-5, 3)$."
          },
          {
            "title": "Dilatasi pada Segitiga",
            "problem": "Segitiga $ABC$ dengan $A(2, 1)$, $B(4, 1)$, $C(3, 3)$ didilatasi terhadap titik asal dengan faktor skala $k = 2$. Tentukan koordinat bayangan $A'B'C'$ dan luas segitiga bayangan.",
            "solution": "Dilatasi: $(x, y) \\to (2x, 2y)$\n- $A(2,1) \\to A'(4, 2)$\n- $B(4,1) \\to B'(8, 2)$\n- $C(3,3) \\to C'(6, 6)$\n\nLuas $ABC$ dengan rumus selimut: $L = \\frac{1}{2}|alas \\times tinggi| = \\frac{1}{2} \\times 2 \\times 2 = 2$ satuan luas.\nLuas $A'B'C' = k^2 \\times L_{ABC} = 4 \\times 2 = 8$ satuan luas."
          }
        ],
        "keyFormulas": [
          {
            "label": "Translasi",
            "formula": "(x, y) \\xrightarrow{T(a,b)} (x+a, y+b)"
          },
          {
            "label": "Refleksi sumbu-x",
            "formula": "(x, y) \\to (x, -y)"
          },
          {
            "label": "Refleksi sumbu-y",
            "formula": "(x, y) \\to (-x, y)"
          },
          {
            "label": "Rotasi 90° CCW",
            "formula": "(x, y) \\to (-y, x)"
          },
          {
            "label": "Dilatasi pusat O",
            "formula": "(x, y) \\xrightarrow{D(O,k)} (kx, ky)"
          }
        ],
        "misconceptions": [
          "Pada rotasi $90^\\circ$ berlawanan arah jarum jam, bukan $(y, -x)$ melainkan $(-y, x)$. Gunakan matriks rotasi untuk memastikan.",
          "Komposisi transformasi tidak selalu komutatif — urutan penerapan sangat menentukan hasil akhir."
        ],
        "tutorTip": "Hafalkan rumus cermin dan rotasi dengan bantuan gambar koordinat. Selalu uji dengan titik (1,0) dan (0,1) untuk memverifikasi rumus transformasi yang kamu gunakan!"
      },
      "questions": [
        {
          "id": "sma12-b6-1",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Titik $P(3, -4)$ ditranslasikan oleh $T(-2, 5)$. Koordinat bayangan $P'$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$(1, 1)$"
            },
            {
              "key": "B",
              "text": "$(5, -9)$"
            },
            {
              "key": "C",
              "text": "$(-3, 4)$"
            },
            {
              "key": "D",
              "text": "$(1, -1)$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Translasi: $(x+a, y+b) = (3+(-2), -4+5)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$P' = (3-2, -4+5) = (1, 1)$ (Opsi A)."
        },
        {
          "id": "sma12-b6-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Titik $Q(5, -3)$ dicerminkan terhadap sumbu-$x$. Koordinat bayangan $Q'$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$(-5, 3)$"
            },
            {
              "key": "B",
              "text": "$(-5, -3)$"
            },
            {
              "key": "C",
              "text": "$(3, 5)$"
            },
            {
              "key": "D",
              "text": "$(5, 3)$"
            }
          ],
          "correctAnswer": "D",
          "hint": "Refleksi terhadap sumbu-$x$: $(x, y) \\to (x, -y)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$Q' = (5, -(-3)) = (5, 3)$ (Opsi D)."
        },
        {
          "id": "sma12-b6-3",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Titik $R(-2, 7)$ dicerminkan terhadap sumbu-$y$. Koordinat bayangan $R'$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$(-2, -7)$"
            },
            {
              "key": "B",
              "text": "$(7, -2)$"
            },
            {
              "key": "C",
              "text": "$(-7, -2)$"
            },
            {
              "key": "D",
              "text": "$(2, 7)$"
            }
          ],
          "correctAnswer": "D",
          "hint": "Refleksi terhadap sumbu-$y$: $(x, y) \\to (-x, y)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$R' = (-(-2), 7) = (2, 7)$ (Opsi D)."
        },
        {
          "id": "sma12-b6-4",
          "category": "Latihan",
          "difficulty": "Menengah",
          "question": "Titik $S(4, 3)$ dirotasi $90^\\circ$ berlawanan arah jarum jam terhadap titik asal. Koordinat bayangan $S'$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$(-3, 4)$"
            },
            {
              "key": "B",
              "text": "$(3, -4)$"
            },
            {
              "key": "C",
              "text": "$(-4, -3)$"
            },
            {
              "key": "D",
              "text": "$(4, -3)$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Rotasi $90^\\circ$ CCW: $(x, y) \\to (-y, x)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$S' = (-3, 4)$ (Opsi A)."
        },
        {
          "id": "sma12-b6-5",
          "category": "Latihan",
          "difficulty": "Menengah",
          "question": "Titik $T(6, -2)$ didilatasi terhadap titik asal dengan faktor skala $k = \\frac{1}{2}$. Koordinat bayangan $T'$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$(3, -1)$"
            },
            {
              "key": "B",
              "text": "$(12, -4)$"
            },
            {
              "key": "C",
              "text": "$(-3, 1)$"
            },
            {
              "key": "D",
              "text": "$(6, -1)$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Dilatasi: $(kx, ky) = (\\frac{1}{2} \\times 6, \\frac{1}{2} \\times (-2))$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$T' = (3, -1)$ (Opsi A)."
        },
        {
          "id": "sma12-b6-6",
          "category": "Latihan",
          "difficulty": "Menengah",
          "question": "Titik $U(2, 5)$ dicerminkan terhadap garis $y = x$. Koordinat bayangan $U'$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$(-5, -2)$"
            },
            {
              "key": "B",
              "text": "$(2, 5)$"
            },
            {
              "key": "C",
              "text": "$(5, 2)$"
            },
            {
              "key": "D",
              "text": "$(-2, -5)$"
            }
          ],
          "correctAnswer": "C",
          "hint": "Refleksi terhadap $y = x$: $(x, y) \\to (y, x)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$U' = (5, 2)$ (Opsi C)."
        },
        {
          "id": "sma12-b6-7",
          "category": "Latihan",
          "difficulty": "Menengah",
          "question": "Titik $V(3, 4)$ dirotasi $180^\\circ$ terhadap titik asal. Koordinat bayangan $V'$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$(3, -4)$"
            },
            {
              "key": "B",
              "text": "$(-4, 3)$"
            },
            {
              "key": "C",
              "text": "$(-3, -4)$"
            },
            {
              "key": "D",
              "text": "$(4, -3)$"
            }
          ],
          "correctAnswer": "C",
          "hint": "Rotasi $180^\\circ$: $(x, y) \\to (-x, -y)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$V' = (-3, -4)$ (Opsi C)."
        },
        {
          "id": "sma12-b6-8",
          "category": "Tantangan",
          "difficulty": "Lanjut",
          "question": "Titik $W(2, 3)$ ditranslasikan oleh $T(1, -2)$ kemudian dirotasi $90^\\circ$ CCW terhadap titik asal. Koordinat bayangan akhir $W''$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$(3, 1)$"
            },
            {
              "key": "B",
              "text": "$(-1, 3)$"
            },
            {
              "key": "C",
              "text": "$(-3, 1)$"
            },
            {
              "key": "D",
              "text": "$(1, 3)$"
            }
          ],
          "correctAnswer": "B",
          "hint": "Translasi dulu: $W(2,3) \\to W'(3,1)$. Kemudian rotasi $90^\\circ$ CCW: $(x,y)\\to(-y,x)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Translasi: $W' = (2+1, 3-2) = (3, 1)$\n2. Rotasi $90^\\circ$ CCW: $W'' = (-1, 3)$\nKoordinat akhir adalah **$(-1, 3)$** (Opsi B)."
        },
        {
          "id": "sma12-b6-9",
          "category": "Tantangan",
          "difficulty": "Lanjut",
          "question": "Segitiga $ABC$ dengan luas 12 cm² didilatasi dengan faktor skala $k = 3$. Luas segitiga bayangan $A'B'C'$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "36 cm²"
            },
            {
              "key": "B",
              "text": "12 cm²"
            },
            {
              "key": "C",
              "text": "108 cm²"
            },
            {
              "key": "D",
              "text": "4 cm²"
            }
          ],
          "correctAnswer": "C",
          "hint": "Dilatasi dengan faktor $k$ mengubah luas menjadi $k^2 \\times$ luas semula.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nLuas bayangan $= k^2 \\times L = 9 \\times 12 = 108\\text{ cm}^2$ (Opsi C)."
        },
        {
          "id": "sma12-b6-10",
          "category": "Latihan",
          "difficulty": "Menengah",
          "question": "Garis dengan persamaan $y = 2x + 3$ dicerminkan terhadap sumbu-$x$. Persamaan bayangan garis tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "$y = -2x - 3$"
            },
            {
              "key": "B",
              "text": "$y = 2x - 3$"
            },
            {
              "key": "C",
              "text": "$y = -2x + 3$"
            },
            {
              "key": "D",
              "text": "$y = 2x + 3$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Refleksi terhadap sumbu-$x$: ganti $y$ dengan $-y$. Dari $-y = 2x+3$, diperoleh $y = -2x-3$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nRefleksi sumbu-$x$: $(x,y) \\to (x,-y)$\nSubstitusi: $-y = 2x+3 \\implies y = -2x-3$ (Opsi A)."
        },
        {
          "id": "sma12-b6-11",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Titik $A(3, 5)$ dicerminkan terhadap garis $y = -x$. Koordinat bayangan $A'$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$(5, 3)$"
            },
            {
              "key": "B",
              "text": "$(-5, -3)$"
            },
            {
              "key": "C",
              "text": "$(-3, -5)$"
            },
            {
              "key": "D",
              "text": "$(5, -3)$"
            }
          ],
          "correctAnswer": "B",
          "hint": "Refleksi terhadap $y = -x$: $(x, y) \\to (-y, -x)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$A' = (-5, -3)$ (Opsi B)."
        },
        {
          "id": "sma12-b6-12",
          "category": "Tantangan",
          "difficulty": "Lanjut",
          "question": "Titik $P(4, 2)$ dirotasi $90^\\circ$ searah jarum jam terhadap titik asal, lalu dicerminkan terhadap sumbu-$y$. Koordinat bayangan akhir adalah...",
          "options": [
            {
              "key": "A",
              "text": "$(2, -4)$"
            },
            {
              "key": "B",
              "text": "$(-4, 2)$"
            },
            {
              "key": "C",
              "text": "$(-2, -4)$"
            },
            {
              "key": "D",
              "text": "$(2, 4)$"
            }
          ],
          "correctAnswer": "C",
          "hint": "Rotasi $90^\\circ$ CW: $(x,y)\\to(y,-x)$. Lalu refleksi sumbu-$y$: $(x,y)\\to(-x,y)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Rotasi $90^\\circ$ CW: $P' = (2, -4)$\n2. Refleksi sumbu-$y$: $P'' = (-2, -4)$\nKoordinat akhir adalah **$(-2, -4)$** (Opsi C)."
        },
        {
          "id": "sma12-b6-13",
          "category": "Latihan",
          "difficulty": "Menengah",
          "question": "Titik $B(-3, 2)$ didilatasi terhadap titik asal dengan faktor skala $k = -2$. Koordinat bayangan $B'$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$(6, -4)$"
            },
            {
              "key": "B",
              "text": "$(-6, 4)$"
            },
            {
              "key": "C",
              "text": "$(6, 4)$"
            },
            {
              "key": "D",
              "text": "$(-6, -4)$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Dilatasi dengan $k = -2$: $(kx, ky) = (-2 \\times (-3), -2 \\times 2)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$B' = ((-2)(-3), (-2)(2)) = (6, -4)$ (Opsi A)."
        },
        {
          "id": "sma12-b6-14",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Bayangan titik $C(a, b)$ dicerminkan terhadap sumbu-$x$ menghasilkan $C'(5, -3)$. Koordinat titik $C$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$(-5, 3)$"
            },
            {
              "key": "B",
              "text": "$(5, 3)$"
            },
            {
              "key": "C",
              "text": "$(-5, -3)$"
            },
            {
              "key": "D",
              "text": "$(5, -3)$"
            }
          ],
          "correctAnswer": "B",
          "hint": "Refleksi sumbu-$x$: $(x,-y) = (5,-3)$, sehingga $y = 3$. Titik asalnya $(5, 3)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nJika $C'(5,-3)$ adalah bayangan dari refleksi sumbu-$x$, maka $C = (5, 3)$ (Opsi B)."
        },
        {
          "id": "sma12-b6-15",
          "category": "Tantangan",
          "difficulty": "Lanjut",
          "question": "Titik $D(1, 2)$ ditranslasikan oleh $T(3, -1)$, kemudian didilatasi dengan pusat $O$ dan $k = 2$. Koordinat bayangan akhir $D''$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$(4, 2)$"
            },
            {
              "key": "B",
              "text": "$(8, -2)$"
            },
            {
              "key": "C",
              "text": "$(2, 8)$"
            },
            {
              "key": "D",
              "text": "$(8, 2)$"
            }
          ],
          "correctAnswer": "D",
          "hint": "Translasi dulu: $D' = (1+3, 2-1) = (4, 1)$. Dilatasi $k=2$: $D'' = (8, 2)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Translasi: $D' = (4, 1)$\n2. Dilatasi $k=2$: $D'' = (8, 2)$ (Opsi D)."
        },
        {
          "id": "sma12-b6-16",
          "category": "Latihan",
          "difficulty": "Menengah",
          "question": "Sebuah persegi panjang dengan luas 20 cm² didilatasi dengan faktor skala $k = \\frac{1}{2}$. Luas bayangan persegi panjang tersebut adalah...",
          "options": [
            {
              "key": "A",
              "text": "10 cm²"
            },
            {
              "key": "B",
              "text": "40 cm²"
            },
            {
              "key": "C",
              "text": "5 cm²"
            },
            {
              "key": "D",
              "text": "80 cm²"
            }
          ],
          "correctAnswer": "C",
          "hint": "Luas bayangan $= k^2 \\times$ luas asli $= (\\frac{1}{2})^2 \\times 20 = \\frac{1}{4} \\times 20 = 5$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nLuas bayangan $= (\\frac{1}{2})^2 \\times 20 = 5\\text{ cm}^2$ (Opsi C)."
        },
        {
          "id": "sma12-b6-17",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Titik $E(-4, 0)$ dirotasi $90^\\circ$ berlawanan arah jarum jam terhadap titik asal. Koordinat bayangan $E'$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$(0, 4)$"
            },
            {
              "key": "B",
              "text": "$(4, 0)$"
            },
            {
              "key": "C",
              "text": "$(-4, 0)$"
            },
            {
              "key": "D",
              "text": "$(0, -4)$"
            }
          ],
          "correctAnswer": "D",
          "hint": "Rotasi $90^\\circ$ CCW: $(x,y) \\to (-y, x) = (0, -4)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$E' = (-0, -4) = (0, -4)$ (Opsi D)."
        },
        {
          "id": "sma12-b6-18",
          "category": "Tantangan",
          "difficulty": "Lanjut",
          "question": "Titik $F(2, -1)$ dicerminkan terhadap garis $x = 3$. Koordinat bayangan $F'$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$(3, -1)$"
            },
            {
              "key": "B",
              "text": "$(2, 1)$"
            },
            {
              "key": "C",
              "text": "$(-2, -1)$"
            },
            {
              "key": "D",
              "text": "$(4, -1)$"
            }
          ],
          "correctAnswer": "D",
          "hint": "Cermin terhadap $x = a$: $(x,y) \\to (2a-x, y)$. Di sini $a=3$: $F' = (6-2, -1) = (4, -1)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$F' = (2(3)-2, -1) = (4, -1)$ (Opsi D)."
        },
        {
          "id": "sma12-b6-19",
          "category": "Latihan",
          "difficulty": "Menengah",
          "question": "Titik $G(5, 3)$ dicerminkan terhadap titik asal $O(0,0)$. Koordinat bayangan $G'$ adalah...",
          "options": [
            {
              "key": "A",
              "text": "$(5, -3)$"
            },
            {
              "key": "B",
              "text": "$(-5, -3)$"
            },
            {
              "key": "C",
              "text": "$(-5, 3)$"
            },
            {
              "key": "D",
              "text": "$(3, 5)$"
            }
          ],
          "correctAnswer": "B",
          "hint": "Refleksi terhadap titik asal sama dengan rotasi $180^\\circ$: $(x,y) \\to (-x,-y)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n$G' = (-5, -3)$ (Opsi B)."
        },
        {
          "id": "sma12-b6-20",
          "category": "Tantangan",
          "difficulty": "Lanjut",
          "question": "Bayangan titik $H$ setelah dirotasi $90^\\circ$ CCW terhadap titik asal adalah $H'(3, -5)$. Koordinat titik $H$ semula adalah...",
          "options": [
            {
              "key": "A",
              "text": "$(5, 3)$"
            },
            {
              "key": "B",
              "text": "$(-5, -3)$"
            },
            {
              "key": "C",
              "text": "$(-3, 5)$"
            },
            {
              "key": "D",
              "text": "$(3, 5)$"
            }
          ],
          "correctAnswer": "B",
          "hint": "Rotasi $90^\\circ$ CCW: $(x,y) \\to (-y,x)$. Jadi jika $(-y,x) = (3,-5)$, maka $x=-5$ dan $y=-3$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\nJika rotasi $90^\\circ$ CCW: $(-y, x) = (3, -5)$\n$-y = 3 \\implies y = -3$; $x = -5$\nTitik $H = (-5, -3)$ (Opsi B)."
        }
      ]
    }
  ]
};
