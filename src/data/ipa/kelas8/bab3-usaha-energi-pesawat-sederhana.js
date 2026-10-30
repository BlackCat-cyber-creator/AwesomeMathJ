import { bab, soal } from '../author.js';

export default bab({
  grade: 8,
  number: 3,
  slug: 'usaha-energi-pesawat-sederhana',
  title: 'Usaha, Energi, dan Pesawat Sederhana',
  element: 'Energi dan perubahannya: hubungan usaha dan energi',
  summary: {
    overview: 'Ketika kita mendorong lemari sampai berpindah, kita melakukan usaha dan memakai energi. Bab ini membahas usaha, bentuk-bentuk energi beserta perubahannya, daya, serta pesawat sederhana seperti tuas, bidang miring, dan katrol yang memudahkan pekerjaan manusia.',
    coreConcepts: [
      'Usaha: Usaha dilakukan jika gaya menyebabkan benda berpindah searah gaya: $W = F \\times s$, satuannya joule (J). Jika benda tidak berpindah (mendorong tembok) atau gaya tegak lurus perpindahan (membawa tas sambil berjalan mendatar), usaha yang dilakukan gaya itu bernilai nol.',
      'Energi dan Bentuknya: Energi adalah kemampuan melakukan usaha. Energi kinetik dimiliki benda bergerak: $E_k = \\tfrac{1}{2} m v^2$. Energi potensial gravitasi dimiliki benda pada ketinggian: $E_p = m g h$. Energi mekanik $E_m = E_p + E_k$. Bentuk lain: energi kimia (makanan, baterai), listrik, kalor, cahaya, bunyi, dan nuklir.',
      'Hukum Kekekalan Energi: Energi tidak dapat diciptakan atau dimusnahkan, hanya berubah bentuk. Contoh: buah jatuh (energi potensial → kinetik), lampu (listrik → cahaya + kalor), fotosintesis (cahaya → kimia). Tanpa gesekan, energi mekanik benda selalu tetap.',
      'Daya: Daya adalah usaha yang dilakukan setiap satuan waktu: $P = \\dfrac{W}{t}$, satuannya watt (W). Lampu 60 watt memakai energi listrik 60 joule setiap sekon.',
      'Tuas (Pengungkit): Pada tuas berlaku $w \\times L_b = F \\times L_k$ (beban × lengan beban = kuasa × lengan kuasa). Keuntungan mekanis $KM = \\dfrac{w}{F} = \\dfrac{L_k}{L_b}$. Tuas jenis I: titik tumpu di tengah (gunting, jungkat-jungkit, linggis). Jenis II: beban di tengah (gerobak dorong, pembuka botol). Jenis III: kuasa di tengah (sekop, pinset, lengan bawah manusia).',
      'Bidang Miring, Katrol, dan Roda Berporos: Bidang miring: $KM = \\dfrac{s}{h}$ (panjang lintasan dibagi tinggi), contoh tangga, jalan berkelok di gunung, sekrup. Katrol tetap mengubah arah gaya, KM = 1; katrol bebas KM = 2; katrol majemuk KM = jumlah tali penahan beban. Roda berporos (setir, gerinda) memudahkan memutar benda. Pesawat sederhana tidak mengurangi usaha; ia mengurangi gaya dengan menambah jarak.'
    ],
    keyFormulas: [
      { label: 'Usaha', formula: 'W = F \\times s' },
      { label: 'Energi kinetik & potensial', formula: 'E_k = \\tfrac{1}{2}mv^2 \\qquad E_p = mgh' },
      { label: 'Daya', formula: 'P = \\dfrac{W}{t}' },
      { label: 'Tuas', formula: 'w \\times L_b = F \\times L_k \\qquad KM = \\dfrac{w}{F} = \\dfrac{L_k}{L_b}' },
      { label: 'Bidang miring', formula: 'KM = \\dfrac{w}{F} = \\dfrac{s}{h}' }
    ],
    workedExamples: [
      {
        title: 'Menghitung usaha dan daya',
        problem: 'Andi mendorong meja dengan gaya 50 N sehingga meja berpindah 4 m dalam 10 sekon. Hitung usaha dan dayanya.',
        solution: '$W = F \\times s = 50 \\times 4 = 200\\ \\text{J}$.\n$P = W : t = 200 : 10 = 20\\ \\text{W}$.'
      },
      {
        title: 'Tuas jenis pertama',
        problem: 'Batu seberat 600 N diungkit dengan linggis. Lengan beban 0,5 m dan lengan kuasa 1,5 m. Berapa gaya kuasa minimal dan keuntungan mekanisnya?',
        solution: '$F = \\dfrac{w \\times L_b}{L_k} = \\dfrac{600 \\times 0{,}5}{1{,}5} = 200\\ \\text{N}$.\n$KM = 600 : 200 = 3$ (sama dengan $L_k : L_b = 1{,}5 : 0{,}5$).'
      },
      {
        title: 'Energi potensial',
        problem: 'Sebuah kelapa bermassa 2 kg berada 10 m di atas tanah ($g = 10$ m/s²). Berapa energi potensialnya?',
        solution: '$E_p = m g h = 2 \\times 10 \\times 10 = 200\\ \\text{J}$. Saat jatuh, energi ini berubah menjadi energi kinetik.'
      }
    ],
    misconceptions: [
      'Menganggap mendorong tembok sampai lelah berarti melakukan usaha. Dalam IPA, usaha nol karena tembok tidak berpindah (energi tubuh berubah menjadi kalor di otot).',
      'Menganggap pesawat sederhana mengurangi usaha. Pesawat sederhana memperkecil gaya yang diperlukan, tetapi jarak tempuhnya bertambah sehingga usahanya tetap.',
      'Menganggap katrol tetap memperingan beban. Katrol tetap hanya mengubah arah gaya (KM = 1).'
    ],
    tutorTip: 'Untuk menentukan jenis tuas, lihat apa yang berada di TENGAH: titik tumpu (jenis I), beban (jenis II), atau kuasa (jenis III). Singkatan "T-B-K" = 1-2-3.'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Satuan usaha dalam Sistem Internasional adalah...',
      options: ['newton', 'watt', 'joule', 'pascal'],
      answer: 'C',
      hint: 'Satuan usaha sama dengan satuan energi.',
      solution: 'Usaha $W = F \\times s$ bersatuan N·m = **joule (J)**. Watt adalah satuan daya, newton satuan gaya, pascal satuan tekanan. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Kegiatan berikut yang menurut IPA tidak menghasilkan usaha adalah...',
      options: ['menarik gerobak hingga berpindah', 'mendorong tembok yang tidak bergeser', 'mengangkat buku dari lantai ke meja', 'menendang bola hingga melambung'],
      answer: 'B',
      hint: 'Usaha memerlukan perpindahan benda.',
      solution: 'Tembok **tidak berpindah** sehingga $s = 0$ dan usahanya nol, walaupun orang yang mendorong merasa lelah. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Gunting, jungkat-jungkit, dan linggis termasuk tuas jenis pertama karena...',
      options: ['beban berada di antara titik tumpu dan kuasa', 'kuasa berada di antara titik tumpu dan beban', 'tidak memiliki titik tumpu', 'titik tumpu berada di antara beban dan kuasa'],
      answer: 'D',
      hint: 'Lihat apa yang berada di tengah.',
      solution: 'Pada tuas jenis pertama, **titik tumpu berada di antara beban dan kuasa**. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Saat buah mangga jatuh dari pohon, perubahan energi yang terjadi adalah...',
      options: ['energi potensial menjadi energi kinetik', 'energi kinetik menjadi energi potensial', 'energi kimia menjadi energi listrik', 'energi listrik menjadi energi gerak'],
      answer: 'A',
      hint: 'Ketinggian berkurang, kecepatan bertambah.',
      solution: 'Ketinggian mangga berkurang (energi potensial turun) dan kecepatannya bertambah (energi kinetik naik), jadi **energi potensial berubah menjadi energi kinetik**. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Katrol tunggal tetap yang dipasang di tiang bendera berfungsi untuk...',
      options: ['memperkecil gaya menjadi setengahnya', 'mengubah arah gaya sehingga lebih mudah menarik', 'memperbesar berat bendera', 'menghilangkan gesekan'],
      answer: 'B',
      hint: 'Keuntungan mekanis katrol tetap adalah 1.',
      solution: 'Katrol tetap memiliki KM = 1, sehingga gaya tidak berkurang. Fungsinya **mengubah arah gaya**: kita menarik tali ke bawah untuk menaikkan bendera. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah lemari didorong dengan gaya 120 N sehingga berpindah sejauh 3 m. Usaha yang dilakukan adalah...',
      options: ['40 J', '123 J', '360 J', '117 J'],
      answer: 'C',
      hint: '$W = F \\times s$.',
      solution: '$W = 120 \\times 3 = 360\\ \\text{J}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah benda bermassa 4 kg bergerak dengan kecepatan 5 m/s. Energi kinetik benda tersebut adalah...',
      options: ['10 J', '20 J', '100 J', '50 J'],
      answer: 'D',
      hint: '$E_k = \\tfrac{1}{2} m v^2$.',
      solution: '$E_k = \\tfrac{1}{2} \\times 4 \\times 5^2 = 2 \\times 25 = 50\\ \\text{J}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Seorang anak menaiki tangga dan melakukan usaha 1.500 J dalam waktu 30 s. Daya anak tersebut adalah...',
      options: ['50 W', '45.000 W', '1.530 W', '20 W'],
      answer: 'A',
      hint: '$P = W : t$.',
      solution: '$P = 1.500 : 30 = 50\\ \\text{W}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Lengan bawah manusia saat mengangkat beban di telapak tangan bekerja seperti tuas jenis ketiga. Hal ini karena...',
      options: [
        'titik tumpu berada di telapak tangan',
        'kuasa (otot bisep) berada di antara titik tumpu (siku) dan beban',
        'beban berada di antara siku dan otot bisep',
        'lengan bawah tidak memiliki titik tumpu'
      ],
      answer: 'B',
      hint: 'Otot bisep menempel di dekat siku.',
      solution: 'Siku adalah titik tumpu, beban di telapak tangan, dan **otot bisep (kuasa) menarik di antara keduanya**. Kuasa di tengah = tuas jenis ketiga. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Jalan menuju puncak gunung dibuat berkelok-kelok. Prinsip pesawat sederhana yang diterapkan dan tujuannya adalah...',
      options: [
        'katrol, agar kendaraan lebih ringan',
        'tuas, agar jarak tempuh lebih pendek',
        'bidang miring, agar gaya yang diperlukan kendaraan lebih kecil',
        'roda berporos, agar kendaraan lebih cepat'
      ],
      answer: 'C',
      hint: 'Lintasan yang lebih panjang untuk ketinggian yang sama.',
      solution: 'Jalan berkelok memperpanjang lintasan untuk ketinggian yang sama, sehingga kemiringannya landai. Ini prinsip **bidang miring**: KM = s/h makin besar, gaya yang diperlukan makin kecil. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Perhatikan tuas pada gambar. Beban 600 N, lengan beban 0,5 m, dan lengan kuasa 1,5 m. Gaya kuasa minimal yang diperlukan untuk mengangkat beban adalah...',
      options: ['200 N', '300 N', '1.800 N', '900 N'],
      answer: 'A',
      hint: '$w \\times L_b = F \\times L_k$.',
      solution: '$F = \\dfrac{600 \\times 0{,}5}{1{,}5} = \\dfrac{300}{1{,}5} = 200\\ \\text{N}$. Jawaban: **A**.',
      visual: {
        type: 'lever',
        props: {
          title: 'Tuas Jenis Pertama',
          loadLabel: 'w = 600 N',
          effortLabel: 'F = ?',
          loadArmLabel: '0,5 m',
          effortArmLabel: '1,5 m',
          ratio: 3
        }
      }
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah drum seberat 1.200 N dinaikkan ke atas truk setinggi 1 m menggunakan papan miring sepanjang 4 m. Jika gesekan diabaikan, gaya dorong minimal yang diperlukan adalah...',
      options: ['4.800 N', '300 N', '1.200 N', '400 N'],
      answer: 'B',
      hint: '$w \\times h = F \\times s$.',
      solution: '$F = \\dfrac{w \\times h}{s} = \\dfrac{1.200 \\times 1}{4} = 300\\ \\text{N}$. Keuntungan mekanisnya $s : h = 4$. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah bola bermassa 0,5 kg dijatuhkan dari ketinggian 20 m ($g = 10$ m/s²). Jika gesekan udara diabaikan, energi kinetik bola saat berada pada ketinggian 5 m adalah...',
      options: ['25 J', '100 J', '75 J', '50 J'],
      answer: 'C',
      hint: 'Energi mekanik tetap: $E_k$ di bawah = $E_p$ yang hilang.',
      solution: 'Energi potensial yang berubah menjadi energi kinetik = $m g (h_1 - h_2) = 0{,}5 \\times 10 \\times (20 - 5) = 75\\ \\text{J}$. Karena energi kinetik awal nol, $E_k = 75$ J. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Beban 800 N diangkat dengan sistem katrol majemuk yang memiliki 4 tali penahan beban. Gaya tarik minimal yang diperlukan adalah...',
      options: ['3.200 N', '400 N', '800 N', '200 N'],
      answer: 'D',
      hint: 'KM katrol majemuk = jumlah tali penahan beban.',
      solution: 'KM = 4, sehingga $F = w : KM = 800 : 4 = 200\\ \\text{N}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Dua mesin pompa air, P dan Q, masing-masing mengangkat air dengan usaha 6.000 J. Mesin P menyelesaikannya dalam 20 s, mesin Q dalam 30 s. Pernyataan yang benar adalah...',
      options: [
        'daya P 300 W, lebih besar daripada daya Q yang 200 W',
        'daya P dan Q sama karena usahanya sama',
        'daya Q lebih besar karena waktunya lebih lama',
        'daya P 120.000 W dan daya Q 180.000 W'
      ],
      answer: 'A',
      hint: 'Daya = usaha dibagi waktu.',
      solution: '$P_P = 6.000 : 20 = 300\\ \\text{W}$; $P_Q = 6.000 : 30 = 200\\ \\text{W}$. Untuk usaha yang sama, mesin yang lebih cepat memiliki **daya lebih besar**. Jawaban: **A**.'
    })
  ]
});
