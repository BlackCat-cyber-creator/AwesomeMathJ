import json
import os

grade9Data = {
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
          { "label": "Bentuk Umum SPLDV", "formula": "\\begin{cases} a_1 x + b_1 y = c_1 \\\\ a_2 x + b_2 y = c_2 \\end{cases}" },
          { "label": "Syarat Tepat Satu Penyelesaian", "formula": "\\frac{a_1}{a_2} \\neq \\frac{b_1}{b_2}" },
          { "label": "Model Persegi Panjang", "formula": "K = 2(p + l) \\quad \\text{dan} \\quad L = p \\times l" }
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
            { "key": "A", "text": "$(7, 3)$" },
            { "key": "B", "text": "$(6, 4)$" },
            { "key": "C", "text": "$(8, 2)$" },
            { "key": "D", "text": "$(5, 5)$" }
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
            { "key": "A", "text": "5" },
            { "key": "B", "text": "4" },
            { "key": "C", "text": "6" },
            { "key": "D", "text": "7" }
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
            { "key": "A", "text": "$96\\text{ cm}^2$" },
            { "key": "B", "text": "$100\\text{ cm}^2$" },
            { "key": "C", "text": "$84\\text{ cm}^2$" },
            { "key": "D", "text": "$90\\text{ cm}^2$" }
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
            { "key": "A", "text": "Rp125.000,00" },
            { "key": "B", "text": "Rp130.000,00" },
            { "key": "C", "text": "Rp120.000,00" },
            { "key": "D", "text": "Rp140.000,00" }
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
            { "key": "A", "text": "38 tahun" },
            { "key": "B", "text": "40 tahun" },
            { "key": "C", "text": "36 tahun" },
            { "key": "D", "text": "42 tahun" }
          ],
          "correctAnswer": "A",
          "hint": "Misalkan usia ayah $= x$ dan anak $= y$. Dua tahun lalu: $x - 2 = 4(y - 2)$. Tiga tahun lagi: $(x + 3) + (y + 3) = 55$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Hubungan waktu lampau (2 tahun lalu):\n$$x - 2 = 4(y - 2) \\implies x - 2 = 4y - 8 \\implies x - 4y = -6$$\n2. Hubungan masa depan (3 tahun lagi):\n$$(x + 3) + (y + 3) = 55 \\implies x + y + 6 = 55 \\implies x + y = 49$$\n3. Eliminasi $x$ dengan mengurangkan kedua persamaan:\n$$(x + y) - (x - 4y) = 49 - (-6)$$\n$$5y = 55 \\implies y = 11\\text{ tahun}$$\n4. Usia ayah sekarang:\n$$x = 49 - 11 = 38\\text{ tahun}$$\nUsia ayah sekarang adalah **38 tahun** (Opsi A)."
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
          { "label": "Volume Tabung", "formula": "V = \\pi r^2 t" },
          { "label": "Volume Kerucut", "formula": "V = \\frac{1}{3}\\pi r^2 t" },
          { "label": "Volume Bola", "formula": "V = \\frac{4}{3}\\pi r^3" },
          { "label": "Luas Permukaan Bola", "formula": "L = 4\\pi r^2" },
          { "label": "Garis Pelukis Kerucut", "formula": "s = \\sqrt{r^2 + t^2}" }
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
            { "key": "A", "text": "$1.540\\text{ cm}^3$" },
            { "key": "B", "text": "$1.450\\text{ cm}^3$" },
            { "key": "C", "text": "$1.500\\text{ cm}^3$" },
            { "key": "D", "text": "$770\\text{ cm}^3$" }
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
            { "key": "A", "text": "10 cm" },
            { "key": "B", "text": "12 cm" },
            { "key": "C", "text": "14 cm" },
            { "key": "D", "text": "9 cm" }
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
            { "key": "A", "text": "$616\\text{ cm}^2$" },
            { "key": "B", "text": "$308\\text{ cm}^2$" },
            { "key": "C", "text": "$154\\text{ cm}^2$" },
            { "key": "D", "text": "$1.232\\text{ cm}^2$" }
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
            { "key": "A", "text": "12 cm" },
            { "key": "B", "text": "10 cm" },
            { "key": "C", "text": "15 cm" },
            { "key": "D", "text": "9 cm" }
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
            { "key": "A", "text": "1.540 liter" },
            { "key": "B", "text": "1.500 liter" },
            { "key": "C", "text": "1.450 liter" },
            { "key": "D", "text": "770 liter" }
          ],
          "correctAnswer": "A",
          "hint": "Ubah satuan ke cm: $r = 70\\text{ cm}$, tinggi $t = 1\\text{ m} = 100\\text{ cm}$. Cari volume dalam $\\text{cm}^3$, lalu bagi 1.000 untuk konversi ke liter.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Parameter: $r = \\frac{140}{2} = 70\\text{ cm}$ dan $t = 100\\text{ cm}$.\n2. Hitung volume tabung:\n$$V = \\frac{22}{7} \\times 70^2 \\times 100 = \\frac{22}{7} \\times 4.900 \\times 100 = 22 \\times 700 \\times 100 = 1.540.000\\text{ cm}^3$$\n3. Konversi ke liter:\n$$\\text{Volume} = \\frac{1.540.000}{1.000} = 1.540\\text{ liter}$$\nVolume minyak dalam drum adalah **1.540 liter** (Opsi A)."
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
          { "label": "Translasi", "formula": "(x', y') = (x + a, y + b)" },
          { "label": "Refleksi Sumbu-X", "formula": "(x', y') = (x, -y)" },
          { "label": "Refleksi Garis y = x", "formula": "(x', y') = (y, x)" },
          { "label": "Rotasi [O, 90°]", "formula": "(x', y') = (-y, x)" },
          { "label": "Dilatasi [O, k]", "formula": "(x', y') = (kx, ky)" }
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
            { "key": "A", "text": "$(1, 2)$" },
            { "key": "B", "text": "$(5, 2)$" },
            { "key": "C", "text": "$(1, -12)$" },
            { "key": "D", "text": "$(-6, -35)$" }
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
            { "key": "A", "text": "$(-4, -6)$" },
            { "key": "B", "text": "$(4, 6)$" },
            { "key": "C", "text": "$(4, -6)$" },
            { "key": "D", "text": "$(6, -4)$" }
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
            { "key": "A", "text": "$(-2, 5)$" },
            { "key": "B", "text": "$(2, -5)$" },
            { "key": "C", "text": "$(-5, -2)$" },
            { "key": "D", "text": "$(2, 5)$" }
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
            { "key": "A", "text": "$(-9, 6)$" },
            { "key": "B", "text": "$(6, -9)$" },
            { "key": "C", "text": "$(-6, 9)$" },
            { "key": "D", "text": "$(9, -6)$" }
          ],
          "correctAnswer": "A",
          "hint": "Lakukan dilatasi terlebih dahulu: $(-3(-2), -3(3)) = (6, -9)$, lalu tukar posisinya untuk refleksi garis $y = x$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Dilatasi dengan pusat $O$ dan skala $k = -3$:\n$$K'(-3(-2), -3(3)) = K'(6, -9)$$\n2. Refleksi titik $K'(6, -9)$ terhadap garis $y = x$ menukar posisinya: $(x, y) \\to (y, x)$:\n$$K''(-9, 6)$$\nKoordinat akhirnya adalah **$(-9, 6)$** (Opsi A)."
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
          { "label": "Peluang Empirik", "formula": "P_{\\text{emp}} = \\frac{f}{n}" },
          { "label": "Peluang Teoritik", "formula": "P(A) = \\frac{n(A)}{n(S)}" },
          { "label": "Frekuensi Harapan", "formula": "F_h = N \\times P(A)" }
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
            { "key": "A", "text": "$\\frac{1}{5}$" },
            { "key": "B", "text": "$\\frac{1}{6}$" },
            { "key": "C", "text": "$\\frac{1}{4}$" },
            { "key": "D", "text": "$\\frac{1}{3}$" }
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
            { "key": "A", "text": "90 siswa yang terpilih secara acak" },
            { "key": "B", "text": "Seluruh 900 siswa SMP tersebut" },
            { "key": "C", "text": "Guru-guru di SMP tersebut" },
            { "key": "D", "text": "Rata-rata waktu belajar" }
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
            { "key": "A", "text": "$\\frac{5}{12}$" },
            { "key": "B", "text": "$\\frac{1}{3}$" },
            { "key": "C", "text": "$\\frac{1}{4}$" },
            { "key": "D", "text": "$\\frac{1}{2}$" }
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
            { "key": "A", "text": "30 kali" },
            { "key": "B", "text": "60 kali" },
            { "key": "C", "text": "20 kali" },
            { "key": "D", "text": "40 kali" }
          ],
          "correctAnswer": "A",
          "hint": "Peluang sisi Gambar $= \\frac{1}{2}$, peluang mata dadu ganjil $\\{1, 3, 5\\} = \\frac{3}{6} = \\frac{1}{2}$. Kalikan keduanya, lalu kalikan 120.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Peluang gabungan saling bebas:\n$$P = P(\\text{Gambar}) \\times P(\\text{Ganjil}) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$$\n2. Frekuensi harapan:\n$$F_h = 120 \\times \\frac{1}{4} = 30\\text{ kali}$$\nFrekuensi harapan adalah **30 kali** (Opsi A)."
        }
      ]
    }
  ]
}

fileContent = f"""/**
 * Data Kurikulum Kelas 9 SMP (Fase D)
 * 4 Bab Wajib Resmi Sesuai Buku Siswa Matematika
 */

export const grade9Data = {json.dumps(grade9Data, indent=2, ensure_ascii=False)};
"""

with open('src/data/grades/grade9.js', 'w', encoding='utf-8') as f:
    f.write(fileContent)

print("Successfully generated upgraded src/data/grades/grade9.js!")
