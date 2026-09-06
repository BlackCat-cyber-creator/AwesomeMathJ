import json
import os

grade8Data = {
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
          { "label": "Perkalian Berpangkat Basis Sama", "formula": "a^m \\times a^n = a^{m+n}" },
          { "label": "Pembagian Berpangkat Basis Sama", "formula": "\\frac{a^m}{a^n} = a^{m-n}" },
          { "label": "Pangkat Negatif", "formula": "a^{-n} = \\frac{1}{a^n}" },
          { "label": "Notasi Ilmiah", "formula": "a \\times 10^n \\quad (1 \\le a < 10)" }
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
            { "key": "A", "text": "27" },
            { "key": "B", "text": "9" },
            { "key": "C", "text": "81" },
            { "key": "D", "text": "3" }
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
            { "key": "A", "text": "$\\frac{1}{64}$" },
            { "key": "B", "text": "-64" },
            { "key": "C", "text": "-12" },
            { "key": "D", "text": "$\\frac{1}{12}$" }
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
            { "key": "A", "text": "$6\\sqrt{3}$" },
            { "key": "B", "text": "$5\\sqrt{3}$" },
            { "key": "C", "text": "$7\\sqrt{3}$" },
            { "key": "D", "text": "$4\\sqrt{3}$" }
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
            { "key": "A", "text": "$2{,}25 \\times 10^8\\text{ km}$" },
            { "key": "B", "text": "$22{,}5 \\times 10^7\\text{ km}$" },
            { "key": "C", "text": "$0{,}225 \\times 10^9\\text{ km}$" },
            { "key": "D", "text": "$2{,}25 \\times 10^6\\text{ km}$" }
          ],
          "correctAnswer": "A",
          "hint": "Syarat notasi ilmiah: $1 \\le a < 10$. Geser tanda koma desimal ke kiri sebanyak 8 angka.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Bilangan: 225.000.000\n2. Geser koma desimal 8 langkah ke kiri agar bernilai 2,25 (memenuhi $1 \\le a < 10$):\n$$225.000.000 = 2{,}25 \\times 10^8\\text{ km}$$\nBentuk bakunya adalah **$2{,}25 \\times 10^8\\text{ km}$** (Opsi A)."
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
          { "label": "Teorema Pythagoras", "formula": "c^2 = a^2 + b^2 \\iff c = \\sqrt{a^2 + b^2}" },
          { "label": "Mencari Sisi Tegak", "formula": "a = \\sqrt{c^2 - b^2} \\quad \\text{dan} \\quad b = \\sqrt{c^2 - a^2}" },
          { "label": "Tripel Pythagoras Dasar", "formula": "(3, 4, 5), \\; (5, 12, 13), \\; (7, 24, 25), \\; (8, 15, 17)" }
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
            { "key": "A", "text": "10 cm" },
            { "key": "B", "text": "14 cm" },
            { "key": "C", "text": "12 cm" },
            { "key": "D", "text": "9 cm" }
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
            { "key": "A", "text": "5, 12, 13" },
            { "key": "B", "text": "4, 5, 6" },
            { "key": "C", "text": "6, 8, 12" },
            { "key": "D", "text": "7, 10, 15" }
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
            { "key": "A", "text": "25 meter" },
            { "key": "B", "text": "31 meter" },
            { "key": "C", "text": "26 meter" },
            { "key": "D", "text": "28 meter" }
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
            { "key": "A", "text": "Segitiga tumpul" },
            { "key": "B", "text": "Segitiga lancip" },
            { "key": "C", "text": "Segitiga siku-siku" },
            { "key": "D", "text": "Segitiga sama sisi" }
          ],
          "correctAnswer": "A",
          "hint": "Bandingkan kuadrat sisi terpanjang $16^2$ dengan jumlah kuadrat dua sisi lainnya: $9^2 + 12^2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Kuadrat sisi terpanjang: $16^2 = 256$.\n2. Jumlah kuadrat dua sisi lainnya: $9^2 + 12^2 = 81 + 144 = 225$.\n3. Bandingkan:\n$$256 > 225 \\implies c^2 > a^2 + b^2$$\nKarena kuadrat sisi terpanjang lebih besar, maka segitiga tersebut adalah **segitiga tumpul** (Opsi A)."
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
          { "label": "Bentuk Baku PLSV", "formula": "ax + b = c \\implies x = \\frac{c - b}{a}" },
          { "label": "Pembalikan Tanda PtLSV", "formula": "-ax < b \\iff x > -\\frac{b}{a} \\quad (a > 0)" }
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
            { "key": "A", "text": "$x = 5$" },
            { "key": "B", "text": "$x = 4$" },
            { "key": "C", "text": "$x = 6$" },
            { "key": "D", "text": "$x = 3$" }
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
            { "key": "A", "text": "$\\{1, 2, 3\\}$" },
            { "key": "B", "text": "$\\{1, 2, 3, 4\\}$" },
            { "key": "C", "text": "$\\{0, 1, 2, 3\\}$" },
            { "key": "D", "text": "$\\{2, 3\\}$" }
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
            { "key": "A", "text": "$x \\ge 4$" },
            { "key": "B", "text": "$x \\le 4$" },
            { "key": "C", "text": "$x \\ge -4$" },
            { "key": "D", "text": "$x \\le -4$" }
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
            { "key": "A", "text": "30 kotak" },
            { "key": "B", "text": "31 kotak" },
            { "key": "C", "text": "29 kotak" },
            { "key": "D", "text": "32 kotak" }
          ],
          "correctAnswer": "A",
          "hint": "Susun pertidaksamaan: $150 + 35x \\le 1.200$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Model pertidaksamaan:\n$$150 + 35x \\le 1.200$$\n$$35x \\le 1.200 - 150$$\n$$35x \\le 1.050$$\n2. Hitung nilai maksimum $x$:\n$$x \\le \\frac{1.050}{35} = 30$$\nBanyak kotak maksimum yang dapat diangkut adalah **30 kotak** (Opsi A)."
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
          { "label": "Rumus Fungsi Linear", "formula": "f(x) = ax + b" },
          { "label": "Banyak Pemetaan A ke B", "formula": "n(B)^{n(A)}" }
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
            { "key": "A", "text": "17" },
            { "key": "B", "text": "19" },
            { "key": "C", "text": "23" },
            { "key": "D", "text": "15" }
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
            { "key": "A", "text": "$\\{(1, a), (2, b), (3, c), (4, d)\\}$" },
            { "key": "B", "text": "$\\{(1, a), (1, b), (2, c), (3, d)\\}$" },
            { "key": "C", "text": "$\\{(1, a), (2, b), (2, c), (3, d)\\}$" },
            { "key": "D", "text": "$\\{(2, a), (3, b), (3, c), (4, d)\\}$" }
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
            { "key": "A", "text": "8" },
            { "key": "B", "text": "9" },
            { "key": "C", "text": "6" },
            { "key": "D", "text": "5" }
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
            { "key": "A", "text": "20" },
            { "key": "B", "text": "18" },
            { "key": "C", "text": "21" },
            { "key": "D", "text": "22" }
          ],
          "correctAnswer": "A",
          "hint": "Cari nilai $a$ dan $b$ terlebih dahulu: $2a = 11 - 5 = 6 \\implies a = 3, b = 2$. Lalu hitung $f(6) = 3(6) + 2$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Sistem persamaan:\n$$a + b = 5$$\n$$3a + b = 11$$\n2. Eliminasi $b$:\n$$2a = 6 \\implies a = 3$$\n3. Cari $b$:\n$$3 + b = 5 \\implies b = 2$$\n4. Rumus fungsi: $f(x) = 3x + 2$.\n5. Nilai $f(6) = 3(6) + 2 = 18 + 2 = 20$.\nHasilnya adalah **20** (Opsi A)."
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
          { "label": "Gradien Dua Titik", "formula": "m = \\frac{y_2 - y_1}{x_2 - x_1}" },
          { "label": "Gradien Bentuk Implisit", "formula": "ax + by + c = 0 \\implies m = -\\frac{a}{b}" },
          { "label": "Persamaan Garis Titik & Gradien", "formula": "y - y_1 = m(x - x_1)" },
          { "label": "Garis Tegak Lurus", "formula": "m_1 \\times m_2 = -1" }
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
            { "key": "A", "text": "3" },
            { "key": "B", "text": "-5" },
            { "key": "C", "text": "-3" },
            { "key": "D", "text": "5" }
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
            { "key": "A", "text": "2" },
            { "key": "B", "text": "$\\frac{1}{2}$" },
            { "key": "C", "text": "4" },
            { "key": "D", "text": "-2" }
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
            { "key": "A", "text": "$-\\frac{1}{2}$" },
            { "key": "B", "text": "$\\frac{1}{2}$" },
            { "key": "C", "text": "-2" },
            { "key": "D", "text": "2" }
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
            { "key": "A", "text": "$y = 2x - 1$" },
            { "key": "B", "text": "$y = 2x + 1$" },
            { "key": "C", "text": "$y = -\\frac{1}{2}x + 4$" },
            { "key": "D", "text": "$y = 2x - 7$" }
          ],
          "correctAnswer": "A",
          "hint": "Karena sejajar, gradiennya sama ($m = 2$). Gunakan $y - y_1 = m(x - x_1)$ dengan titik $(2, 3)$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Karena sejajar, maka $m = 2$.\n2. Masukkan ke rumus garis melalui titik $(2, 3)$:\n$$y - 3 = 2(x - 2)$$\n$$y - 3 = 2x - 4$$\n$$y = 2x - 4 + 3 \\implies y = 2x - 1$$\nPersamaan garisnya adalah **$y = 2x - 1$** (Opsi A)."
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
          { "label": "Mean (Rata-Rata)", "formula": "\\bar{x} = \\frac{\\Sigma x}{n}" },
          { "label": "Jangkauan (Range)", "formula": "R = x_{\\text{maks}} - x_{\\text{min}}" },
          { "label": "Jangkauan Interkuartil", "formula": "QR = Q_3 - Q_1" },
          { "label": "Rata-Rata Gabungan", "formula": "\\bar{x}_{\\text{gab}} = \\frac{n_1 \\bar{x}_1 + n_2 \\bar{x}_2}{n_1 + n_2}" }
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
            { "key": "A", "text": "7" },
            { "key": "B", "text": "6,5" },
            { "key": "C", "text": "7,5" },
            { "key": "D", "text": "8" }
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
            { "key": "A", "text": "7" },
            { "key": "B", "text": "8" },
            { "key": "C", "text": "6" },
            { "key": "D", "text": "6,5" }
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
            { "key": "A", "text": "7" },
            { "key": "B", "text": "8" },
            { "key": "C", "text": "6" },
            { "key": "D", "text": "7 dan 8" }
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
            { "key": "A", "text": "4" },
            { "key": "B", "text": "5" },
            { "key": "C", "text": "3" },
            { "key": "D", "text": "9" }
          ],
          "correctAnswer": "A",
          "hint": "Bagi data menjadi dua bagian: paruh bawah $\\{3, 5, 6, 7\\} \\implies Q_1 = \\frac{5+6}{2} = 5{,}5$, paruh atas $\\{8, 9, 10, 12\\} \\implies Q_3 = \\frac{9+10}{2} = 9{,}5$. Lalu hitung $Q_3 - Q_1$.",
          "bestSolution": "**Langkah Penyelesaian Terstruktur:**\n1. Paruh bawah: $3, 5, 6, 7 \\implies Q_1 = \\frac{5 + 6}{2} = 5{,}5$.\n2. Paruh atas: $8, 9, 10, 12 \\implies Q_3 = \\frac{9 + 10}{2} = 9{,}5$.\n3. Jangkauan interkuartil:\n$$QR = Q_3 - Q_1 = 9{,}5 - 5{,}5 = 4$$\nJangkauan interkuartilnya adalah **4** (Opsi A)."
        }
      ]
    }
  ]
}

fileContent = f"""/**
 * Data Kurikulum Kelas 8 SMP (Fase D)
 * 6 Bab Wajib Resmi Sesuai Buku Siswa Matematika
 */

export const grade8Data = {json.dumps(grade8Data, indent=2, ensure_ascii=False)};
"""

with open('src/data/grades/grade8.js', 'w', encoding='utf-8') as f:
    f.write(fileContent)

print("Successfully generated upgraded src/data/grades/grade8.js!")
