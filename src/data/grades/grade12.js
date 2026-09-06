/**
 * Data Kurikulum Kelas 12 SMA (Fase F)
 * 4 Bab Wajib Resmi Sesuai Buku Siswa Matematika
 */

export const grade12Data = {
  "grade": 12,
  "level": "SMA",
  "phase": "Fase F",
  "description": "Barisan dan Deret (Aritmetika, Geometri, Tak Hingga & Bunga Tunggal), Investasi dan Pinjaman (Bunga Majemuk & Anuitas), Kaidah Pencacahan (Aturan Penjumlahan/Perkalian, Permutasi & Kombinasi), serta Teori Peluang (Kejadian Majemuk, Saling Lepas, Saling Bebas & Peluang Bersyarat)",
  "chapters": [
    {
      "id": "sma12-bab1-barisan-deret",
      "title": "Bab 1: Barisan dan Deret",
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
              "text": "34"
            },
            {
              "key": "B",
              "text": "32"
            },
            {
              "key": "C",
              "text": "36"
            },
            {
              "key": "D",
              "text": "30"
            }
          ],
          "correctAnswer": "A",
          "hint": "Cari beda antarsuku terlebih dahulu: $4b = U_8 - U_4 = 28 - 16 = 12$, kemudian tambahkan $2b$ ke $U_8$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Cari selisih beda: $U_8 - U_4 = 4b \\implies 28 - 16 = 12 \\implies b = 3$\n2. Suku pertama: $a = U_4 - 3b = 16 - 3(3) = 16 - 9 = 7$\n3. Suku ke-10:\n$$U_{10} = a + 9b = 7 + 9(3) = 7 + 27 = 34$$\nJadi, nilai suku ke-10 adalah **34** (Opsi A)."
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
              "text": "32 meter"
            },
            {
              "key": "B",
              "text": "24 meter"
            },
            {
              "key": "C",
              "text": "40 meter"
            },
            {
              "key": "D",
              "text": "20 meter"
            }
          ],
          "correctAnswer": "A",
          "hint": "Gunakan formula praktis lintasan bola: $S = h_0 \\cdot \\frac{q + p}{q - p}$ dengan $h_0 = 8$ dan rasio $\\frac{p}{q} = \\frac{3}{5}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Diketahui ketinggian awal $h_0 = 8\\text{ m}$ dan rasio $r = \\frac{3}{5}$ ($p = 3, q = 5$).\n2. Gunakan rumus terpadu lintasan pantulan bola:\n$$S_{\\text{total}} = h_0 \\cdot \\frac{q + p}{q - p} = 8 \\cdot \\frac{5 + 3}{5 - 3} = 8 \\cdot \\frac{8}{2} = 8 \\cdot 4 = 32\\text{ meter}$$\nPanjang seluruh lintasan bola sampai berhenti adalah **32 meter** (Opsi A)."
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
              "text": "8 bulan"
            },
            {
              "key": "B",
              "text": "6 bulan"
            },
            {
              "key": "C",
              "text": "10 bulan"
            },
            {
              "key": "D",
              "text": "12 bulan"
            }
          ],
          "correctAnswer": "A",
          "hint": "Bunga bersih yang diperoleh adalah $\\text{Rp}400.000,00$. Gunakan $B = M_0 \\cdot i \\cdot \\frac{t}{12}$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Hitung akumulasi bunga yang diperoleh: $B = M_t - M_0 = 10.400.000 - 10.000.000 = \\text{Rp}400.000,00$.\n2. Masukkan ke formula bunga tunggal (dalam satuan bulan $t$):\n$$B = M_0 \\times i \\times \\frac{t}{12}$$\n$$400.000 = 10.000.000 \\times 0{,}06 \\times \\frac{t}{12}$$\n$$400.000 = 600.000 \\times \\frac{t}{12} = 50.000 \\times t$$\n3. Hitung nilai $t$:\n$$t = \\frac{400.000}{50.000} = 8\\text{ bulan}$$\nLama Pak Bayu menabung adalah **8 bulan** (Opsi A)."
        }
      ]
    },
    {
      "id": "sma12-bab2-investasi-pinjaman",
      "title": "Bab 2: Investasi dan Pinjaman",
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
              "text": "$\\text{Rp}1.575.000,00$"
            },
            {
              "key": "B",
              "text": "$\\text{Rp}1.600.000,00$"
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
          "correctAnswer": "A",
          "hint": "Gunakan sifat relasi angsuran pokok pada anuitas: $a_2 = a_1(1 + i)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Relasi antarangsuran pokok: $a_n = a_1(1 + i)^{n-1}$\n2. Untuk $n = 2$:\n$$a_2 = a_1(1 + i) = 1.500.000 \\times (1 + 0{,}05) = 1.500.000 \\times 1{,}05 = \\text{Rp}1.575.000,00$$\nBesar angsuran pokok tahun ke-2 adalah **$\\text{Rp}1.575.000,00$** (Opsi A)."
        },
        {
          "id": "sma12-b2-4",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Sebuah sepeda motor operasional dibeli dengan harga baru $\\text{Rp}25.000.000,00$. Nilai jual sepeda motor tersebut mengalami depresiasi (penyusutan) sebesar $10\\%$ setiap tahun. Nilai taksiran sepeda motor tersebut setelah 2 tahun pemakaian adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\text{Rp}20.250.000,00$"
            },
            {
              "key": "B",
              "text": "$\\text{Rp}20.000.000,00$"
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
          "correctAnswer": "A",
          "hint": "Gunakan rumus penyusutan eksponensial: $V_2 = V_0(1 - r)^2$ dengan $r = 0{,}10$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Formula: $V_2 = 25.000.000 \\times (1 - 0{,}10)^2 = 25.000.000 \\times (0{,}9)^2$\n2. $(0{,}9)^2 = 0{,}81$\n3. $V_2 = 25.000.000 \\times 0{,}81 = \\text{Rp}20.250.000,00$\nNilai motor setelah 2 tahun adalah **$\\text{Rp}20.250.000,00$** (Opsi A)."
        },
        {
          "id": "sma12-b2-5",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Seorang wirausahawan meminjam kredit permodalan usaha sebesar $\\text{Rp}15.000.000,00$ dengan suku bunga $1{,}5\\%$ per bulan. Jika pinjaman dilunasi dengan anuitas bulanan sebesar $\\text{Rp}1.375.000,00$, maka sisa pokok pinjaman setelah pembayaran angsuran bulan pertama adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\text{Rp}13.850.000,00$"
            },
            {
              "key": "B",
              "text": "$\\text{Rp}13.625.000,00$"
            },
            {
              "key": "C",
              "text": "$\\text{Rp}14.000.000,00$"
            },
            {
              "key": "D",
              "text": "$\\text{Rp}13.775.000,00$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Hitung bunga bulan pertama $b_1 = M \\times i$, kurangkan dari anuitas untuk mendapat angsuran pokok $a_1$, lalu sisa pinjaman adalah $M - a_1$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Hitung bunga bulan pertama:\n$$b_1 = 15.000.000 \\times 0{,}015 = 225.000$$\n2. Hitung angsuran pokok pelunasan hutang bulan pertama:\n$$a_1 = A - b_1 = 1.375.000 - 225.000 = 1.150.000$$\n3. Sisa pokok pinjaman setelah angsuran pertama:\n$$S_1 = M - a_1 = 15.000.000 - 1.150.000 = \\text{Rp}13.850.000,00$$\nSisa hutang pokok adalah **$\\text{Rp}13.850.000,00$** (Opsi A)."
        }
      ]
    },
    {
      "id": "sma12-bab3-kaidah-pencacahan",
      "title": "Bab 3: Kaidah Pencacahan",
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
              "text": "120 cara"
            },
            {
              "key": "B",
              "text": "20 cara"
            },
            {
              "key": "C",
              "text": "720 cara"
            },
            {
              "key": "D",
              "text": "36 cara"
            }
          ],
          "correctAnswer": "A",
          "hint": "Karena jabatan dibedakan secara struktural (Ketua, Sekretaris, Bendahara), gunakan Permutasi $P(6, 3)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Pemilihan memperhatikan urutan jabatan (Permutasi $n=6, r=3$):\n$$P(6, 3) = \\frac{6!}{(6 - 3)!} = \\frac{6!}{3!} = 6 \\times 5 \\times 4 = 120$$\nBanyak susunan pengurus yang dapat terbentuk adalah **120 cara** (Opsi A)."
        },
        {
          "id": "sma12-b3-2",
          "category": "Latihan",
          "difficulty": "Dasar",
          "question": "Dalam sebuah rapat komite sekolah, 5 orang anggota duduk mengelilingi sebuah meja bundar. Banyak susunan posisi duduk melingkar yang mungkin terjadi adalah...",
          "options": [
            {
              "key": "A",
              "text": "24 cara"
            },
            {
              "key": "B",
              "text": "120 cara"
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
          "correctAnswer": "A",
          "hint": "Gunakan rumus permutasi siklis: $P_{\\text{siklis}} = (n - 1)!$ dengan $n = 5$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Meja bundar menggunakan permutasi siklis:\n$$P_{\\text{siklis}} = (5 - 1)! = 4!$$\n2. Hitung nilai faktorial:\n$$4! = 4 \\times 3 \\times 2 \\times 1 = 24$$\nBanyak posisi duduk melingkar yang mungkin adalah **24 cara** (Opsi A)."
        },
        {
          "id": "sma12-b3-3",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Banyak susunan huruf berbeda yang dapat dibentuk dari kata 'MALAM' adalah...",
          "options": [
            {
              "key": "A",
              "text": "30"
            },
            {
              "key": "B",
              "text": "60"
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
          "correctAnswer": "A",
          "hint": "Kata MALAM memiliki 5 huruf dengan huruf M sebanyak 2 dan huruf A sebanyak 2. Gunakan rumus permutasi unsur sama.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Hitung total huruf $n = 5$.\n2. Unsur yang sama: huruf M ada 2 ($k_1 = 2$), huruf A ada 2 ($k_2 = 2$), huruf L ada 1.\n3. Masukkan ke rumus permutasi unsur sama:\n$$P = \\frac{5!}{2! \\times 2!} = \\frac{120}{2 \\times 2} = \\frac{120}{4} = 30$$\nBanyak susunan kata berbeda yang dapat dibentuk adalah **30 kata** (Opsi A)."
        },
        {
          "id": "sma12-b3-4",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Dalam suatu pertemuan yang dihadiri oleh 10 orang peserta, setiap orang saling berjabat tangan tepat satu kali dengan peserta lainnya. Banyak jabat tangan yang terjadi seluruhnya adalah...",
          "options": [
            {
              "key": "A",
              "text": "45 kali"
            },
            {
              "key": "B",
              "text": "90 kali"
            },
            {
              "key": "C",
              "text": "50 kali"
            },
            {
              "key": "D",
              "text": "100 kali"
            }
          ],
          "correctAnswer": "A",
          "hint": "Jabat tangan melibatkan 2 orang dan tidak memperhatikan urutan ($A$ jabat tangan dengan $B$ sama dengan $B$ jabat tangan dengan $A$). Gunakan Kombinasi $C(10, 2)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Satu jabat tangan terjadi antara 2 orang tanpa memedulikan urutan (Kombinasi $n=10, r=2$):\n$$C(10, 2) = \\frac{10!}{2!(10 - 2)!} = \\frac{10 \\times 9}{2 \\times 1} = \\frac{90}{2} = 45$$\nBanyak jabat tangan seluruhnya adalah **45 kali** (Opsi A)."
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
        }
      ]
    },
    {
      "id": "sma12-bab4-peluang",
      "title": "Bab 4: Peluang",
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
              "text": "$\\frac{2}{9}$"
            },
            {
              "key": "B",
              "text": "$\\frac{1}{6}$"
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
          "correctAnswer": "A",
          "hint": "Kedua kejadian saling lepas. Pasangan berjumlah 7 ada 6 cara, berjumlah 11 ada 2 cara. Ruang sampel total adalah 36.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Ruang sampel pelemparan 2 dadu: $n(S) = 6 \\times 6 = 36$.\n2. Pasangan jumlah 7: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1) \\implies 6$ cara.\n3. Pasangan jumlah 11: $(5,6), (6,5) \\implies 2$ cara.\n4. Karena saling lepas:\n$$P(7 \\cup 11) = \\frac{6 + 2}{36} = \\frac{8}{36} = \\frac{2}{9}$$\nPeluang muncul jumlah 7 atau 11 adalah **$\\frac{2}{9}$** (Opsi A)."
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
              "text": "$\\frac{5}{6}$"
            },
            {
              "key": "B",
              "text": "$\\frac{11}{15}$"
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
          "correctAnswer": "A",
          "hint": "Gunakan rumus dua kejadian tidak saling lepas: $P(M \\cup F) = P(M) + P(F) - P(M \\cap F)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Diketahui $n(S) = 30$, $n(M) = 18$, $n(F) = 15$, dan $n(M \\cap F) = 8$.\n2. Hitung banyak siswa yang gemar salah satu atau kedua pelajaran:\n$$n(M \\cup F) = n(M) + n(F) - n(M \\cap F) = 18 + 15 - 8 = 25$$\n3. Peluangnya:\n$$P(M \\cup F) = \\frac{25}{30} = \\frac{5}{6}$$\nPeluang siswa gemar matematika atau fisika adalah **$\\frac{5}{6}$** (Opsi A)."
        },
        {
          "id": "sma12-b4-4",
          "category": "Latihan",
          "difficulty": "Sedang",
          "question": "Peluang seorang penembak jitu mengenai target sasaran adalah $0{,}8$. Jika penembak tersebut melepaskan 2 kali tembakan secara independen, peluang tepat satu tembakan mengenai sasaran adalah...",
          "options": [
            {
              "key": "A",
              "text": "$0{,}32$"
            },
            {
              "key": "B",
              "text": "$0{,}64$"
            },
            {
              "key": "C",
              "text": "$0{,}16$"
            },
            {
              "key": "D",
              "text": "$0{,}48$"
            }
          ],
          "correctAnswer": "A",
          "hint": "Tepat satu tembakan mengenai sasaran berarti: (Kena pada tembakan 1 DAN Gagal pada tembakan 2) ATAU (Gagal pada tembakan 1 DAN Kena pada tembakan 2).",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Peluang kena: $P(K) = 0{,}8$. Peluang gagal (meleset): $P(G) = 1 - 0{,}8 = 0{,}2$.\n2. Ada dua kemungkinan susunan:\n- Kena lalu Gagal: $P(K_1 \\cap G_2) = 0{,}8 \\times 0{,}2 = 0{,}16$\n- Gagal lalu Kena: $P(G_1 \\cap K_2) = 0{,}2 \\times 0{,}8 = 0{,}16$\n3. Jumlahkan kedua kemungkinan saling lepas tersebut:\n$$P = 0{,}16 + 0{,}16 = 0{,}32$$\nPeluang tepat satu tembakan mengenai sasaran adalah **$0{,}32$** (Opsi A)."
        },
        {
          "id": "sma12-b4-5",
          "category": "Latihan",
          "difficulty": "Tantangan",
          "question": "Dalam sebuah kotak terdapat 4 bola kuning dan 6 bola hijau. Dari kotak tersebut diambil 2 bola satu per satu tanpa pengembalian. Peluang terambilnya kedua bola berwarna hijau adalah...",
          "options": [
            {
              "key": "A",
              "text": "$\\frac{1}{3}$"
            },
            {
              "key": "B",
              "text": "$\\frac{3}{10}$"
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
          "correctAnswer": "A",
          "hint": "Pada pengambilan pertama ada 6 hijau dari 10 bola. Pada pengambilan kedua tersisa 5 hijau dari 9 bola. Kalikan kedua peluang bersyarat tersebut.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Peluang bola pertama hijau: $P(H_1) = \\frac{6}{10} = \\frac{3}{5}$.\n2. Karena tanpa pengembalian, sisa bola dalam kotak menjadi 9 buah dengan 5 di antaranya hijau:\n$$P(H_2 | H_1) = \\frac{5}{9}$$\n3. Peluang kedua bola hijau:\n$$P(H_1 \\cap H_2) = \\frac{3}{5} \\times \\frac{5}{9} = \\frac{15}{45} = \\frac{1}{3}$$\nPeluang terambilnya kedua bola berwarna hijau adalah **$\\frac{1}{3}$** (Opsi A)."
        }
      ]
    }
  ]
};
