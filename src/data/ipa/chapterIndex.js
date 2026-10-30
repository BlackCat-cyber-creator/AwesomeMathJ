/**
 * Indeks ringan IPA Kurikulum Merdeka (tanpa soal). Dibuat otomatis oleh
 * pipeline/build_chapter_index.mjs — jangan diedit manual; edit file bab di src/data/ipa/kelasN/.
 */

export const IPA_GRADE_METADATA = [
  {
    "subject": "ipa",
    "grade": 7,
    "level": "SMP",
    "phase": "Fase D",
    "description": "Metode Ilmiah, Zat dan Perubahannya, Suhu dan Kalor, Gerak dan Gaya, Klasifikasi Makhluk Hidup, Ekologi, serta Bumi dan Tata Surya",
    "chaptersCount": 7
  },
  {
    "subject": "ipa",
    "grade": 8,
    "level": "SMP",
    "phase": "Fase D",
    "description": "Sel, Struktur dan Fungsi Tubuh Makhluk Hidup, Usaha dan Pesawat Sederhana, Getaran Gelombang dan Cahaya, Unsur Senyawa Campuran, serta Struktur Bumi",
    "chaptersCount": 0
  },
  {
    "subject": "ipa",
    "grade": 9,
    "level": "SMP",
    "phase": "Fase D",
    "description": "Pertumbuhan dan Perkembangan, Sistem Koordinasi dan Reproduksi, Tekanan, Listrik dan Magnet, Reaksi Kimia, Pewarisan Sifat dan Bioteknologi, serta Isu Lingkungan",
    "chaptersCount": 0
  }
];

export const ALL_IPA_CHAPTERS_INDEX = [
  {
    "id": "ipa7-bab1-hakikat-ilmu-sains",
    "subject": "ipa",
    "grade": 7,
    "level": "SMP",
    "phase": "Fase D",
    "chapterIndex": 0,
    "title": "Bab 1: Hakikat Ilmu Sains dan Metode Ilmiah",
    "track": null,
    "element": "Keterampilan proses; pengukuran aspek fisis",
    "coreConcepts": [
      "Hakikat IPA dan Sikap Ilmiah: IPA mempelajari benda hidup dan benda tak hidup beserta peristiwa alam. Sikap ilmiah meliputi rasa ingin tahu, jujur dalam mencatat data (tidak mengubah data agar sesuai harapan), teliti, objektif, terbuka terhadap pendapat lain, dan tidak mudah menyerah.",
      "Langkah Metode Ilmiah: (1) mengamati dan merumuskan masalah dalam bentuk pertanyaan, (2) menyusun hipotesis, yaitu dugaan sementara yang dapat diuji, (3) merancang dan melakukan percobaan, (4) mengumpulkan dan menganalisis data, (5) menarik kesimpulan, (6) mengomunikasikan hasil. Jika data tidak mendukung hipotesis, hipotesis diperbaiki lalu diuji lagi.",
      "Variabel Percobaan: Variabel bebas adalah faktor yang sengaja diubah-ubah oleh peneliti. Variabel terikat adalah hasil yang diukur dan dipengaruhi variabel bebas. Variabel kontrol adalah faktor yang dibuat sama pada semua perlakuan agar percobaan adil.",
      "Laboratorium dan Keselamatan Kerja: Gunakan jas laboratorium, kacamata pelindung, dan sarung tangan saat bekerja dengan bahan kimia. Kenali simbol bahaya: mudah terbakar (api), korosif (merusak kulit dan logam), beracun (tengkorak), mudah meledak, iritan, dan berbahaya bagi lingkungan. Jangan mencicipi bahan, dan cium bau dengan mengibaskan uap ke arah hidung.",
      "Besaran Pokok dan Besaran Turunan: Besaran adalah sesuatu yang dapat diukur dan dinyatakan dengan angka serta satuan. Ada 7 besaran pokok SI: panjang (meter, m), massa (kilogram, kg), waktu (sekon, s), suhu (kelvin, K), kuat arus listrik (ampere, A), intensitas cahaya (kandela, cd), dan jumlah zat (mol). Besaran turunan diturunkan dari besaran pokok, misalnya luas (m²), volume (m³), kecepatan (m/s), dan massa jenis (kg/m³).",
      "Pengukuran dan Alat Ukur: Mistar memiliki ketelitian 1 mm, jangka sorong 0,1 mm (0,01 cm), dan mikrometer sekrup 0,01 mm. Massa diukur dengan neraca, waktu dengan stopwatch, dan suhu dengan termometer. Hasil jangka sorong = skala utama + (garis nonius yang berimpit × 0,01 cm). Hasil mikrometer = skala utama + (skala putar × 0,01 mm)."
    ],
    "tutorTip": "Hafalkan 7 besaran pokok dengan singkatan \"PaMa WaSu KuInJu\": Panjang, Massa, Waktu, Suhu, Kuat arus, Intensitas cahaya, Jumlah zat. Selain tujuh itu, semuanya besaran turunan.",
    "questionCount": 15
  },
  {
    "id": "ipa7-bab2-zat-dan-perubahannya",
    "subject": "ipa",
    "grade": 7,
    "level": "SMP",
    "phase": "Fase D",
    "chapterIndex": 1,
    "title": "Bab 2: Zat dan Perubahannya",
    "track": null,
    "element": "Zat dan sifatnya: klasifikasi, sifat, dan perubahan materi",
    "coreConcepts": [
      "Wujud Zat dan Susunan Partikel: Zat padat partikelnya sangat rapat dan teratur sehingga bentuk dan volumenya tetap. Zat cair partikelnya agak renggang dan dapat bergeser sehingga volumenya tetap tetapi bentuknya mengikuti wadah. Gas partikelnya sangat renggang dan bergerak bebas sehingga bentuk dan volumenya mengikuti wadah.",
      "Perubahan Wujud Zat: Mencair (padat → cair) dan menguap (cair → gas) memerlukan kalor. Membeku (cair → padat) dan mengembun (gas → cair) melepaskan kalor. Menyublim adalah padat → gas (contoh kapur barus/naftalena), sedangkan mengkristal atau deposisi adalah gas → padat (contoh terbentuknya salju/bunga es).",
      "Massa Jenis: Massa jenis ($\\rho$) adalah massa zat tiap satu satuan volume: $\\rho = \\dfrac{m}{V}$. Satuannya kg/m³ atau g/cm³ (1 g/cm³ = 1.000 kg/m³). Massa jenis air 1 g/cm³. Benda yang massa jenisnya lebih kecil dari zat cair akan terapung, sama akan melayang, lebih besar akan tenggelam.",
      "Mengukur Volume Benda Tak Beraturan: Volume batu dapat diukur dengan gelas ukur: volume batu = volume air setelah batu dimasukkan − volume air awal. Cara ini memakai prinsip bahwa benda yang tercelup mendesak air sebanyak volumenya.",
      "Perubahan Fisika: Perubahan yang tidak menghasilkan zat baru, misalnya es mencair, gula larut dalam air, kertas digunting, dan kaca pecah. Zatnya tetap sama, hanya wujud, ukuran, atau bentuknya yang berubah.",
      "Perubahan Kimia: Perubahan yang menghasilkan zat baru dengan sifat berbeda, misalnya kertas dibakar, besi berkarat, makanan basi, dan fotosintesis. Ciri-cirinya: terbentuk gas, terjadi perubahan warna, terbentuk endapan, atau terjadi perubahan suhu (terasa panas/dingin)."
    ],
    "tutorTip": "Untuk perubahan wujud, ingat: menuju wujud yang partikelnya lebih renggang (padat → cair → gas) selalu MENYERAP kalor; sebaliknya MELEPAS kalor.",
    "questionCount": 15
  },
  {
    "id": "ipa7-bab3-suhu-kalor-pemuaian",
    "subject": "ipa",
    "grade": 7,
    "level": "SMP",
    "phase": "Fase D",
    "chapterIndex": 2,
    "title": "Bab 3: Suhu, Kalor, dan Pemuaian",
    "track": null,
    "element": "Energi dan perubahannya: kalor dan perpindahannya terhadap perubahan suhu",
    "coreConcepts": [
      "Suhu dan Termometer: Suhu menyatakan derajat panas atau dingin suatu benda; satuan SI-nya kelvin (K). Termometer bekerja berdasarkan pemuaian zat cair (raksa atau alkohol). Titik tetap bawah (es mencair) dan titik tetap atas (air mendidih): Celsius 0 dan 100, Reamur 0 dan 80, Fahrenheit 32 dan 212, Kelvin 273 dan 373.",
      "Konversi Skala Suhu: Perbandingan skala C : R : (F − 32) : (K − 273) = 5 : 4 : 9 : 5. Jadi $T_K = T_C + 273$, $T_R = \\frac{4}{5} T_C$, dan $T_F = \\frac{9}{5} T_C + 32$. Untuk termometer buatan X, gunakan perbandingan: $\\dfrac{X - X_{bawah}}{X_{atas} - X_{bawah}} = \\dfrac{C - 0}{100 - 0}$.",
      "Kalor dan Kalor Jenis: Kalor adalah energi yang berpindah dari benda bersuhu tinggi ke benda bersuhu rendah; satuannya joule (J). Kalor untuk menaikkan suhu: $Q = m \\times c \\times \\Delta T$, dengan $c$ kalor jenis (J/kg°C). Kalor jenis air 4.200 J/kg°C, artinya 1 kg air butuh 4.200 J untuk naik 1 °C.",
      "Kalor untuk Perubahan Wujud: Saat berubah wujud, suhu zat tetap walaupun terus diberi kalor. Kalor yang diperlukan $Q = m \\times L$ (kalor lebur atau kalor uap). Contoh: es 0 °C yang dipanaskan tetap 0 °C sampai seluruhnya mencair.",
      "Perpindahan Kalor: Konduksi adalah perpindahan kalor melalui zat tanpa disertai perpindahan partikel (sendok logam ikut panas). Konveksi disertai perpindahan partikel zat cair atau gas (air mendidih bergolak, angin darat dan angin laut). Radiasi tidak memerlukan zat perantara (panas matahari sampai ke bumi). Benda hitam dan kusam menyerap radiasi lebih baik daripada benda putih dan mengilap.",
      "Pemuaian Zat: Hampir semua zat memuai (bertambah ukuran) bila dipanaskan dan menyusut bila didinginkan. Pemuaian gas > zat cair > zat padat. Penerapan: celah pada sambungan rel dan jembatan, pemasangan kaca jendela yang diberi ruang, bimetal pada setrika otomatis dan alarm kebakaran, serta pemasangan ban besi roda pedati dalam keadaan panas."
    ],
    "tutorTip": "Untuk termometer apa pun, pakai satu rumus perbandingan: (nilai − titik bawah) dibagi (titik atas − titik bawah) bernilai sama di semua termometer.",
    "questionCount": 15
  },
  {
    "id": "ipa7-bab4-gerak-dan-gaya",
    "subject": "ipa",
    "grade": 7,
    "level": "SMP",
    "phase": "Fase D",
    "chapterIndex": 3,
    "title": "Bab 4: Gerak dan Gaya",
    "track": null,
    "element": "Energi dan perubahannya: ragam gerak dan gaya",
    "coreConcepts": [
      "Jarak dan Perpindahan: Jarak adalah panjang seluruh lintasan yang ditempuh (besaran skalar). Perpindahan adalah perubahan posisi dari titik awal ke titik akhir beserta arahnya (besaran vektor). Jika berjalan 4 m ke timur lalu 4 m kembali ke barat, jaraknya 8 m tetapi perpindahannya 0.",
      "Kelajuan dan Kecepatan: Kelajuan = jarak : waktu; kecepatan = perpindahan : waktu. Satuan SI keduanya m/s. Kelajuan rata-rata = jarak total : waktu total.",
      "Gerak Lurus Beraturan (GLB): Benda bergerak pada lintasan lurus dengan kecepatan tetap, sehingga percepatannya nol. Grafik v–t berupa garis mendatar, sedangkan grafik s–t berupa garis lurus miring. Rumus: $s = v \\times t$.",
      "Gerak Lurus Berubah Beraturan (GLBB): Kecepatan benda bertambah (dipercepat) atau berkurang (diperlambat) secara teratur. Percepatan $a = \\dfrac{v_t - v_0}{t}$ dengan satuan m/s². Grafik v–t berupa garis miring; luas daerah di bawah grafik v–t sama dengan jarak tempuh. Contoh: buah jatuh dari pohon (dipercepat), mobil direm (diperlambat).",
      "Gaya dan Jenisnya: Gaya adalah tarikan atau dorongan, satuannya newton (N), diukur dengan dinamometer. Gaya sentuh: gaya otot, gaya gesek, gaya pegas. Gaya tak sentuh: gaya gravitasi, gaya magnet, gaya listrik. Gaya dapat mengubah bentuk, arah gerak, dan kecepatan benda. Berat adalah gaya gravitasi: $w = m \\times g$.",
      "Resultan Gaya dan Hukum Newton: Gaya searah dijumlahkan, gaya berlawanan arah dikurangkan (arah resultan mengikuti gaya yang lebih besar). Hukum I Newton: jika resultan gaya nol, benda diam tetap diam atau bergerak lurus beraturan (kelembaman). Hukum II: $F = m \\times a$. Hukum III: gaya aksi = −gaya reaksi, bekerja pada dua benda berbeda (contoh: roket mendorong gas ke bawah, gas mendorong roket ke atas)."
    ],
    "tutorTip": "Untuk soal grafik v–t: kemiringan garis = percepatan, luas di bawah garis = jarak tempuh. Dua kalimat ini menjawab hampir semua soal grafik gerak.",
    "questionCount": 15
  },
  {
    "id": "ipa7-bab5-klasifikasi-makhluk-hidup",
    "subject": "ipa",
    "grade": 7,
    "level": "SMP",
    "phase": "Fase D",
    "chapterIndex": 4,
    "title": "Bab 5: Karakteristik dan Klasifikasi Makhluk Hidup",
    "track": null,
    "element": "Makhluk hidup dan lingkungannya: identifikasi dan klasifikasi makhluk hidup",
    "coreConcepts": [
      "Ciri-Ciri Makhluk Hidup: Bernapas, bergerak, peka terhadap rangsang (iritabilitas), memerlukan nutrisi, tumbuh dan berkembang, berkembang biak, mengeluarkan zat sisa (ekskresi), dan beradaptasi dengan lingkungan. Contoh: daun putri malu menutup saat disentuh menunjukkan peka rangsang.",
      "Tujuan dan Dasar Klasifikasi: Klasifikasi memudahkan mengenali dan mempelajari makhluk hidup serta mengetahui hubungan kekerabatannya. Dasar pengelompokan adalah persamaan ciri: bentuk tubuh (morfologi), struktur dalam (anatomi), cara hidup, dan cara berkembang biak.",
      "Tingkatan Takson: Urutan dari tinggi ke rendah: Kingdom (Kerajaan) – Filum (hewan) atau Divisi (tumbuhan) – Kelas – Ordo (Bangsa) – Famili (Suku) – Genus (Marga) – Spesies (Jenis). Semakin rendah takson, semakin banyak persamaan ciri, semakin sedikit jumlah anggota, dan semakin dekat kekerabatannya.",
      "Tata Nama Ilmiah (Binomial Nomenklatur): Diperkenalkan Carolus Linnaeus. Nama ilmiah terdiri atas dua kata berbahasa Latin: kata pertama genus (huruf awal kapital), kata kedua penunjuk spesies (huruf kecil semua), dicetak miring atau digarisbawahi terpisah. Contoh: *Oryza sativa* (padi), *Panthera tigris* (harimau).",
      "Kunci Determinasi: Kunci dikotom berisi pasangan pernyataan yang saling berlawanan (1a/1b, 2a/2b, ...). Kita memilih pernyataan yang sesuai dengan ciri makhluk hidup yang diamati sampai menemukan nama kelompok atau jenisnya.",
      "Sistem Lima Kingdom: Monera (sel prokariotik, tanpa membran inti, contoh bakteri), Protista (eukariotik sederhana, contoh Amoeba dan alga), Fungi (jamur, eukariotik, tidak berklorofil, dinding sel kitin), Plantae (eukariotik, berklorofil, contoh lumut, paku, tumbuhan berbiji), dan Animalia (eukariotik, multiseluler, tidak berdinding sel; vertebrata: ikan, amfibi, reptil, burung, mamalia)."
    ],
    "tutorTip": "Hafalkan urutan takson dengan jembatan keledai \"Kita Fikir Kelas Orang Fisika Gemar Sains\": Kingdom, Filum, Kelas, Ordo, Famili, Genus, Spesies.",
    "questionCount": 15
  },
  {
    "id": "ipa7-bab6-ekologi-keanekaragaman-hayati",
    "subject": "ipa",
    "grade": 7,
    "level": "SMP",
    "phase": "Fase D",
    "chapterIndex": 5,
    "title": "Bab 6: Ekologi dan Keanekaragaman Hayati Indonesia",
    "track": null,
    "element": "Makhluk hidup dan lingkungannya: interaksi dan upaya mengatasi perubahan iklim",
    "coreConcepts": [
      "Komponen dan Tingkatan Organisasi Ekosistem: Ekosistem terdiri atas komponen biotik (makhluk hidup) dan abiotik (air, tanah, udara, cahaya, suhu). Tingkatan organisasi: individu (satu makhluk hidup) → populasi (sekelompok individu sejenis di satu tempat) → komunitas (beberapa populasi berbeda) → ekosistem (komunitas + lingkungan abiotiknya) → bioma → biosfer.",
      "Peran Makhluk Hidup dalam Ekosistem: Produsen (tumbuhan hijau) membuat makanan sendiri melalui fotosintesis. Konsumen memakan makhluk hidup lain: konsumen I (herbivor) memakan produsen, konsumen II memakan konsumen I, dan seterusnya. Dekomposer (bakteri, jamur) menguraikan sisa makhluk hidup menjadi zat hara.",
      "Rantai Makanan, Jaring Makanan, dan Piramida Ekologi: Rantai makanan adalah urutan makan-dimakan dengan arah tertentu (panah menunjuk ke pemakan). Jaring makanan adalah gabungan beberapa rantai makanan yang saling berhubungan. Energi berkurang di setiap tingkat trofik (hanya sekitar 10% yang diteruskan), sehingga piramida energi selalu meruncing ke atas.",
      "Pola Interaksi: Simbiosis mutualisme (keduanya untung, contoh lebah dan bunga), komensalisme (satu untung, yang lain tidak dirugikan, contoh anggrek pada pohon), parasitisme (satu untung, yang lain rugi, contoh benalu pada pohon mangga). Ada juga predasi (pemangsaan) dan kompetisi (persaingan memperebutkan makanan atau tempat).",
      "Keanekaragaman Hayati Indonesia: Keanekaragaman tingkat gen (variasi dalam satu jenis, misal mangga harum manis dan mangga golek), tingkat jenis (berbagai spesies dalam satu genus/famili, misal harimau dan kucing), dan tingkat ekosistem (hutan hujan, mangrove, terumbu karang). Garis Wallace dan Weber membagi fauna Indonesia menjadi tipe Asiatis (barat), peralihan (Sulawesi, Nusa Tenggara), dan Australis (timur).",
      "Pelestarian dan Perubahan Iklim: Pelestarian in situ dilakukan di habitat aslinya (taman nasional, cagar alam), sedangkan ex situ di luar habitat aslinya (kebun binatang, kebun raya, bank biji). Penebangan dan pembakaran hutan mengurangi penyerap karbon dioksida sehingga memperparah pemanasan global. Upaya mitigasi: reboisasi, menanam mangrove, menghemat energi, dan mengurangi sampah."
    ],
    "tutorTip": "Untuk soal jaring makanan, telusuri satu per satu jalur panahnya dengan jari, lalu hitung tingkat trofik dari produsen (tingkat I). Satu hewan bisa menjadi konsumen I di satu rantai dan konsumen II di rantai lain.",
    "questionCount": 15
  },
  {
    "id": "ipa7-bab7-bumi-dan-tata-surya",
    "subject": "ipa",
    "grade": 7,
    "level": "SMP",
    "phase": "Fase D",
    "chapterIndex": 6,
    "title": "Bab 7: Bumi dan Tata Surya",
    "track": null,
    "element": "Bumi dan antariksa: posisi relatif bumi–bulan–matahari",
    "coreConcepts": [
      "Anggota Tata Surya: Matahari sebagai pusat dan sumber energi; delapan planet berurutan dari yang terdekat: Merkurius, Venus, Bumi, Mars, Jupiter, Saturnus, Uranus, Neptunus. Planet dalam (Merkurius, Venus) orbitnya di dalam orbit bumi; planet luar (Mars sampai Neptunus) di luar orbit bumi. Anggota lain: satelit, asteroid (sabuk asteroid antara Mars dan Jupiter), komet (berekor, menjauhi matahari), dan meteoroid (disebut meteor saat terbakar di atmosfer, meteorit jika sampai ke permukaan bumi).",
      "Rotasi Bumi: Bumi berputar pada porosnya dari barat ke timur selama sekitar 24 jam. Akibatnya: pergantian siang dan malam, gerak semu harian matahari (terbit di timur, terbenam di barat), dan perbedaan waktu. Setiap 15° bujur berbeda waktu 1 jam (360° : 24 jam). Indonesia memiliki tiga zona: WIB (UTC+7), WITA (UTC+8), dan WIT (UTC+9).",
      "Revolusi Bumi: Bumi mengelilingi matahari selama sekitar 365¼ hari (satu tahun) dengan poros miring 23,5°. Akibatnya: pergantian musim di belahan bumi utara dan selatan, gerak semu tahunan matahari (antara 23,5° LU dan 23,5° LS), perbedaan lama siang dan malam, serta terlihatnya rasi bintang yang berbeda tiap bulan. Tahun kabisat (366 hari) muncul setiap 4 tahun dari sisa ¼ hari.",
      "Gerak Bulan dan Fase Bulan: Bulan berotasi dan berevolusi mengelilingi bumi dengan periode sama (sekitar 27,3 hari), sehingga sisi bulan yang menghadap bumi selalu sama. Fase bulan (bulan baru, sabit, kuartal pertama, purnama, kuartal akhir) terjadi karena posisi bulan terhadap bumi dan matahari berubah, sehingga bagian bulan yang terkena cahaya matahari dan terlihat dari bumi berubah. Satu siklus dari purnama ke purnama sekitar 29,5 hari.",
      "Gerhana dan Pasang Surut: Gerhana matahari terjadi saat bulan berada di antara matahari dan bumi (fase bulan baru), sehingga bayangan bulan jatuh ke bumi. Gerhana bulan terjadi saat bumi berada di antara matahari dan bulan (fase purnama), sehingga bulan masuk bayangan bumi. Pasang surut air laut disebabkan terutama oleh gaya gravitasi bulan; pasang tertinggi (pasang purnama) terjadi saat bulan baru dan purnama karena matahari, bumi, dan bulan segaris.",
      "Atmosfer dan Efek Rumah Kaca: Atmosfer melindungi bumi dari radiasi berbahaya dan menjaga suhu. Gas rumah kaca (karbon dioksida, metana, uap air) menahan sebagian panas yang dipantulkan bumi. Pertambahan gas rumah kaca dari pembakaran bahan bakar fosil dan penebangan hutan memperkuat efek ini sehingga suhu rata-rata bumi naik (pemanasan global) dan memicu perubahan iklim."
    ],
    "tutorTip": "Ingat urutan planet dengan kalimat \"Mari Venus Bumi Makan Jambu Sambil Udara Nyaman\" (Merkurius, Venus, Bumi, Mars, Jupiter, Saturnus, Uranus, Neptunus).",
    "questionCount": 15
  }
];
