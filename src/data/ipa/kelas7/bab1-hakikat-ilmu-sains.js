import { bab, soal } from '../author.js';

export default bab({
  grade: 7,
  number: 1,
  slug: 'hakikat-ilmu-sains',
  title: 'Hakikat Ilmu Sains dan Metode Ilmiah',
  element: 'Keterampilan proses; pengukuran aspek fisis',
  summary: {
    overview: 'IPA (sains) adalah cara mempelajari alam dengan mengamati, bertanya, menyelidiki, lalu menarik kesimpulan berdasarkan bukti. Di bab ini kamu belajar cara bekerja aman di laboratorium, langkah-langkah metode ilmiah dan merancang percobaan, besaran dan satuan, cara mengukur dengan alat yang tepat, serta melaporkan hasil percobaan.',
    coreConcepts: [
      'Hakikat IPA dan Sikap Ilmiah: IPA mempelajari benda hidup dan benda tak hidup beserta peristiwa alam. Sikap ilmiah meliputi rasa ingin tahu, jujur dalam mencatat data (tidak mengubah data agar sesuai harapan), teliti, objektif, terbuka terhadap pendapat lain, dan tidak mudah menyerah.',
      'Laboratorium dan Keselamatan Kerja: Gunakan jas laboratorium, kacamata pelindung, dan sarung tangan saat bekerja dengan bahan kimia. Kenali simbol bahaya: mudah terbakar (api), korosif (merusak kulit dan logam), beracun (tengkorak), mudah meledak, iritan, dan berbahaya bagi lingkungan. Jangan mencicipi bahan, dan cium bau dengan mengibaskan uap ke arah hidung.',
      'Langkah Metode Ilmiah: (1) mengamati dan merumuskan masalah dalam bentuk pertanyaan, (2) menyusun hipotesis, yaitu dugaan sementara yang dapat diuji, (3) merancang dan melakukan percobaan, (4) mengumpulkan dan menganalisis data, (5) menarik kesimpulan, (6) mengomunikasikan hasil. Jika data tidak mendukung hipotesis, hipotesis diperbaiki lalu diuji lagi.',
      'Variabel Percobaan: Variabel bebas adalah faktor yang sengaja diubah-ubah oleh peneliti. Variabel terikat adalah hasil yang diukur dan dipengaruhi variabel bebas. Variabel kontrol adalah faktor yang dibuat sama pada semua perlakuan agar percobaan adil.',
      'Besaran Pokok dan Besaran Turunan: Besaran adalah sesuatu yang dapat diukur dan dinyatakan dengan angka serta satuan. Ada 7 besaran pokok SI: panjang (meter, m), massa (kilogram, kg), waktu (sekon, s), suhu (kelvin, K), kuat arus listrik (ampere, A), intensitas cahaya (kandela, cd), dan jumlah zat (mol). Besaran turunan diturunkan dari besaran pokok, misalnya luas (m²), volume (m³), kecepatan (m/s), dan massa jenis (kg/m³).',
      'Pengukuran dan Alat Ukur: Mistar memiliki ketelitian 1 mm, jangka sorong 0,1 mm (0,01 cm), dan mikrometer sekrup 0,01 mm. Massa diukur dengan neraca, waktu dengan stopwatch, dan suhu dengan termometer. Hasil jangka sorong = skala utama + (garis nonius yang berimpit × 0,01 cm). Hasil mikrometer = skala utama + (skala putar × 0,01 mm).',
      'Pelaporan Hasil Percobaan: Hasil percobaan dilaporkan secara tertulis (judul, tujuan, alat dan bahan, langkah kerja, data dalam tabel atau grafik, pembahasan, dan kesimpulan) atau secara lisan dan poster. Data ditulis apa adanya. Grafik garis cocok untuk data yang berubah terus-menerus (misalnya suhu terhadap waktu), sedangkan diagram batang cocok untuk membandingkan beberapa kelompok.'
    ],
    keyFormulas: [
      { label: 'Kecepatan (besaran turunan)', formula: 'v = \\dfrac{s}{t} \\quad \\left[\\dfrac{\\text{m}}{\\text{s}}\\right]' },
      { label: 'Konversi kecepatan', formula: '1\\ \\dfrac{\\text{km}}{\\text{jam}} = \\dfrac{1000\\ \\text{m}}{3600\\ \\text{s}} = \\dfrac{5}{18}\\ \\dfrac{\\text{m}}{\\text{s}}' },
      { label: 'Jangka sorong', formula: '\\text{hasil} = \\text{skala utama} + n \\times 0{,}01\\ \\text{cm}' },
      { label: 'Mikrometer sekrup', formula: '\\text{hasil} = \\text{skala utama} + n \\times 0{,}01\\ \\text{mm}' }
    ],
    workedExamples: [
      {
        title: 'Menentukan variabel percobaan',
        problem: 'Rina menanam kacang hijau di tiga pot. Pot A disiram 10 mL air per hari, pot B 20 mL, dan pot C 30 mL. Jenis tanah, jumlah biji, dan tempat pot dibuat sama. Setelah 7 hari ia mengukur tinggi kecambah. Tentukan variabel bebas, terikat, dan kontrolnya.',
        solution: 'Variabel bebas = banyak air yang disiramkan (sengaja dibuat berbeda: 10, 20, 30 mL).\nVariabel terikat = tinggi kecambah (yang diukur sebagai hasil).\nVariabel kontrol = jenis tanah, jumlah biji, tempat pot, dan lama pengamatan (dibuat sama).'
      },
      {
        title: 'Membaca jangka sorong',
        problem: 'Skala utama jangka sorong menunjukkan 3,4 cm dan garis nonius ke-7 berimpit dengan garis skala utama. Berapa hasil pengukurannya?',
        solution: 'Hasil = skala utama + n × 0,01 cm = 3,4 cm + 7 × 0,01 cm = 3,4 cm + 0,07 cm = **3,47 cm**.'
      },
      {
        title: 'Mengubah satuan kecepatan',
        problem: 'Sebuah bus melaju 54 km/jam. Nyatakan kecepatan itu dalam m/s.',
        solution: '54 km/jam = 54 × 1.000 m : 3.600 s = 54.000 m : 3.600 s = **15 m/s**.\nCara cepat: kalikan dengan 5/18, yaitu 54 × 5/18 = 15 m/s.'
      }
    ],
    misconceptions: [
      'Menganggap hipotesis pasti benar. Hipotesis hanyalah dugaan sementara; percobaanlah yang menentukan apakah hipotesis diterima atau ditolak.',
      'Tertukar variabel bebas dan terikat. Ingat: variabel bebas = yang kamu ubah, variabel terikat = yang kamu ukur.',
      'Menganggap berat dan massa sama. Massa (kg) adalah banyaknya zat dan diukur dengan neraca; berat adalah gaya gravitasi (newton) dan diukur dengan neraca pegas.',
      'Menyebut suhu besaran turunan karena sering ditulis °C. Suhu termasuk besaran pokok dengan satuan SI kelvin.'
    ],
    tutorTip: 'Hafalkan 7 besaran pokok dengan singkatan "PaMa WaSu KuInJu": Panjang, Massa, Waktu, Suhu, Kuat arus, Intensitas cahaya, Jumlah zat. Selain tujuh itu, semuanya besaran turunan.'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Urutan langkah metode ilmiah yang benar adalah...',
      options: [
        'merumuskan masalah → menyusun hipotesis → melakukan percobaan → menarik kesimpulan',
        'menyusun hipotesis → merumuskan masalah → menarik kesimpulan → melakukan percobaan',
        'melakukan percobaan → merumuskan masalah → menyusun hipotesis → menarik kesimpulan',
        'menarik kesimpulan → melakukan percobaan → menyusun hipotesis → merumuskan masalah'
      ],
      answer: 'A',
      hint: 'Sebelum menduga jawaban, kita harus tahu dulu pertanyaannya.',
      solution: 'Metode ilmiah dimulai dari **merumuskan masalah** (pertanyaan), lalu **menyusun hipotesis** (dugaan jawaban), kemudian **menguji dengan percobaan**, dan terakhir **menarik kesimpulan** dari data. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Asam sulfat pekat dapat merusak kulit dan melubangi logam. Simbol bahaya yang harus tertera pada botol bahan ini adalah...',
      options: ['mudah terbakar', 'beracun', 'korosif', 'mudah meledak'],
      answer: 'C',
      hint: 'Cari simbol untuk bahan yang "memakan" kulit dan logam.',
      solution: 'Bahan yang merusak jaringan hidup (kulit) dan logam disebut **korosif**. Simbolnya berupa cairan yang menetes ke tangan dan ke logam. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Kelompok besaran berikut yang semuanya termasuk besaran pokok adalah...',
      options: ['panjang, luas, volume', 'massa, berat, gaya', 'kecepatan, waktu, suhu', 'panjang, massa, suhu'],
      answer: 'D',
      hint: 'Ingat 7 besaran pokok SI. Luas, berat, gaya, dan kecepatan diturunkan dari besaran lain.',
      solution: 'Panjang (m), massa (kg), dan suhu (K) termasuk 7 besaran pokok SI. Luas, volume, berat, gaya, dan kecepatan adalah besaran turunan. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Satuan Sistem Internasional (SI) untuk kuat arus listrik adalah...',
      options: ['ampere', 'volt', 'ohm', 'watt'],
      answer: 'A',
      hint: 'Kuat arus listrik adalah salah satu besaran pokok.',
      solution: 'Kuat arus listrik adalah besaran pokok dengan satuan SI **ampere (A)**. Volt adalah satuan tegangan, ohm satuan hambatan, dan watt satuan daya. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Saat mencium bau zat kimia di laboratorium, cara yang benar adalah...',
      options: [
        'mendekatkan hidung langsung ke mulut tabung',
        'mengibaskan uap zat dengan tangan ke arah hidung',
        'mencicipi sedikit zat agar baunya lebih jelas',
        'memanaskan zat lalu menghirup uapnya dalam-dalam'
      ],
      answer: 'B',
      hint: 'Prinsip keselamatan: jangan menghirup langsung.',
      solution: 'Uap zat kimia bisa beracun atau iritan. Cara aman adalah **mengibaskan uap ke arah hidung** dari jarak aman, bukan menghirup langsung. Mencicipi zat di laboratorium dilarang. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Doni ingin mengetahui pengaruh jumlah pupuk terhadap tinggi tanaman cabai. Ia memberi 3 pot tanaman pupuk sebanyak 5 g, 10 g, dan 15 g, dengan jenis tanah, air, dan cahaya yang sama. Variabel terikat pada percobaan ini adalah...',
      options: ['jumlah pupuk', 'jenis tanah', 'tinggi tanaman cabai', 'banyak air'],
      answer: 'C',
      hint: 'Variabel terikat adalah hasil yang diukur.',
      solution: 'Yang diubah-ubah adalah jumlah pupuk (variabel bebas). Yang diukur sebagai hasil adalah **tinggi tanaman cabai** (variabel terikat). Jenis tanah, air, dan cahaya dibuat sama (variabel kontrol). Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Jarak rumah Sinta ke sekolah adalah 2,5 km. Jarak tersebut sama dengan...',
      options: ['25 m', '250 m', '25.000 m', '2.500 m'],
      answer: 'D',
      hint: '1 km = 1.000 m.',
      solution: '2,5 km = 2,5 × 1.000 m = **2.500 m**. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah sepeda motor melaju dengan kecepatan 72 km/jam. Kecepatan tersebut jika dinyatakan dalam satuan SI adalah...',
      options: ['20 m/s', '7,2 m/s', '72 m/s', '200 m/s'],
      answer: 'A',
      hint: 'Satuan SI kecepatan adalah m/s. Ubah km ke m dan jam ke sekon.',
      solution: '72 km/jam = 72 × 1.000 m : 3.600 s = 72.000 : 3.600 = **20 m/s**. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Alat ukur yang paling tepat untuk mengukur diameter dalam sebuah tabung reaksi adalah...',
      options: ['mistar', 'jangka sorong', 'meteran kain', 'neraca'],
      answer: 'B',
      hint: 'Alat ini punya rahang atas yang dapat masuk ke dalam lubang.',
      solution: '**Jangka sorong** memiliki rahang dalam (rahang atas) untuk mengukur diameter dalam benda berlubang, dengan ketelitian 0,1 mm. Mistar tidak bisa masuk ke dalam tabung dengan tepat. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Seorang siswa bertanya, "Apakah garam mempercepat es mencair?" Pernyataan yang merupakan hipotesis untuk pertanyaan itu adalah...',
      options: [
        'Es adalah air yang membeku.',
        'Saya akan memakai 2 gelas es yang sama.',
        'Es yang ditaburi garam akan mencair lebih cepat daripada es tanpa garam.',
        'Es mencair dalam 10 menit.'
      ],
      answer: 'C',
      hint: 'Hipotesis adalah dugaan jawaban yang bisa diuji dengan percobaan.',
      solution: 'Hipotesis adalah dugaan sementara yang menjawab rumusan masalah dan dapat diuji: **"Es yang ditaburi garam akan mencair lebih cepat."** Pilihan lain berupa fakta, rencana alat, atau data. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Saat mengukur diameter kelereng dengan jangka sorong, skala utama menunjukkan 2,3 cm dan garis nonius ke-6 tepat berimpit dengan garis skala utama. Diameter kelereng tersebut adalah...',
      options: ['2,36 cm', '2,30 cm', '2,9 cm', '2,306 cm'],
      answer: 'A',
      hint: 'Hasil = skala utama + n × 0,01 cm.',
      solution: 'Hasil = 2,3 cm + 6 × 0,01 cm = 2,3 cm + 0,06 cm = **2,36 cm**. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Pada pengukuran tebal sebuah koin dengan mikrometer sekrup, skala utama menunjukkan 1,5 mm dan garis ke-28 pada skala putar berimpit dengan garis mendatar skala utama. Tebal koin adalah...',
      options: ['1,28 mm', '1,78 mm', '4,3 mm', '1,528 mm'],
      answer: 'B',
      hint: 'Skala putar mikrometer bernilai 0,01 mm tiap garis.',
      solution: 'Hasil = 1,5 mm + 28 × 0,01 mm = 1,5 mm + 0,28 mm = **1,78 mm**. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Ani menguji apakah warna gelas memengaruhi kenaikan suhu air yang dijemur. Ia memakai gelas hitam berisi 200 mL air dan gelas putih berisi 100 mL air, lalu menjemur keduanya selama 30 menit. Kelemahan rancangan percobaan Ani adalah...',
      options: [
        'Ani seharusnya memakai lebih banyak warna gelas.',
        'Waktu penjemuran terlalu singkat.',
        'Volume air tidak sama sehingga perbedaan suhu tidak bisa dipastikan karena warna gelas.',
        'Ani tidak boleh memakai termometer.'
      ],
      answer: 'C',
      hint: 'Dalam percobaan yang adil, hanya satu faktor yang boleh berbeda.',
      solution: 'Variabel bebasnya warna gelas, jadi faktor lain termasuk **volume air harus sama** (variabel kontrol). Karena volumenya berbeda (200 mL dan 100 mL), perbedaan suhu bisa disebabkan oleh volume air, bukan warna gelas. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Data percobaan: tanaman yang disiram air garam layu dalam 2 hari, sedangkan tanaman yang disiram air biasa tetap segar selama 2 hari. Hipotesis awal siswa adalah "air garam tidak berpengaruh pada tanaman." Sikap ilmiah yang tepat adalah...',
      options: [
        'mengubah data agar sesuai hipotesis',
        'menyimpulkan bahwa hipotesis ditolak dan melaporkan data apa adanya',
        'mengulang percobaan sampai hasilnya sesuai hipotesis',
        'tidak melaporkan percobaan karena gagal'
      ],
      answer: 'B',
      hint: 'Data adalah hakim bagi hipotesis.',
      solution: 'Data menunjukkan air garam membuat tanaman layu, jadi hipotesis "tidak berpengaruh" **ditolak**. Ilmuwan bersikap **jujur dan objektif**: melaporkan data apa adanya, bukan mengubah atau menyembunyikannya. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Massa jenis adalah massa dibagi volume. Jika massa diukur dalam kilogram dan volume dalam meter kubik, satuan SI massa jenis adalah...',
      options: ['kg·m³', 'kg/m', 'kg/m³', 'm³/kg'],
      answer: 'C',
      hint: 'Satuan hasil bagi = satuan pembilang dibagi satuan penyebut.',
      solution: 'Massa jenis = massa : volume, sehingga satuannya = kg : m³ = **kg/m³**. Massa jenis adalah besaran turunan yang diturunkan dari massa dan panjang. Jawaban: **C**.'
    })
  ]
});
