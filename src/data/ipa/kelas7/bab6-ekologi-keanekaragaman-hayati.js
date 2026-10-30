import { bab, soal } from '../author.js';

const SAWAH = {
  type: 'food-web',
  props: {
    title: 'Jaring-Jaring Makanan di Sawah',
    caption: '*Arah panah: dari yang dimakan ke yang memakan',
    nodes: [
      { id: 'padi', label: 'Padi', x: 0.0, y: 0.85 },
      { id: 'belalang', label: 'Belalang', x: 0.35, y: 0.55 },
      { id: 'tikus', label: 'Tikus', x: 0.35, y: 1.0 },
      { id: 'katak', label: 'Katak', x: 0.7, y: 0.4 },
      { id: 'ular', label: 'Ular', x: 1.0, y: 0.75 },
      { id: 'elang', label: 'Elang', x: 1.0, y: 0.0 }
    ],
    edges: [['padi', 'belalang'], ['padi', 'tikus'], ['belalang', 'katak'], ['katak', 'ular'], ['tikus', 'ular'], ['ular', 'elang']]
  }
};

export default bab({
  grade: 7,
  number: 6,
  slug: 'ekologi-keanekaragaman-hayati',
  title: 'Ekologi dan Keanekaragaman Hayati Indonesia',
  element: 'Makhluk hidup dan lingkungannya: interaksi dan upaya mengatasi perubahan iklim',
  summary: {
    overview: 'Makhluk hidup tidak dapat hidup sendiri; ia berinteraksi dengan makhluk hidup lain dan lingkungan tak hidupnya. Bab ini membahas komponen ekosistem, aliran energi melalui rantai dan jaring makanan, pola interaksi, keanekaragaman hayati Indonesia, serta upaya pelestariannya di tengah perubahan iklim.',
    coreConcepts: [
      'Komponen dan Tingkatan Organisasi Ekosistem: Ekosistem terdiri atas komponen biotik (makhluk hidup) dan abiotik (air, tanah, udara, cahaya, suhu). Tingkatan organisasi: individu (satu makhluk hidup) → populasi (sekelompok individu sejenis di satu tempat) → komunitas (beberapa populasi berbeda) → ekosistem (komunitas + lingkungan abiotiknya) → bioma → biosfer.',
      'Peran Makhluk Hidup dalam Ekosistem: Produsen (tumbuhan hijau) membuat makanan sendiri melalui fotosintesis. Konsumen memakan makhluk hidup lain: konsumen I (herbivor) memakan produsen, konsumen II memakan konsumen I, dan seterusnya. Dekomposer (bakteri, jamur) menguraikan sisa makhluk hidup menjadi zat hara.',
      'Rantai Makanan, Jaring Makanan, dan Piramida Ekologi: Rantai makanan adalah urutan makan-dimakan dengan arah tertentu (panah menunjuk ke pemakan). Jaring makanan adalah gabungan beberapa rantai makanan yang saling berhubungan. Energi berkurang di setiap tingkat trofik (hanya sekitar 10% yang diteruskan), sehingga piramida energi selalu meruncing ke atas.',
      'Pola Interaksi: Simbiosis mutualisme (keduanya untung, contoh lebah dan bunga), komensalisme (satu untung, yang lain tidak dirugikan, contoh anggrek pada pohon), parasitisme (satu untung, yang lain rugi, contoh benalu pada pohon mangga). Ada juga predasi (pemangsaan) dan kompetisi (persaingan memperebutkan makanan atau tempat).',
      'Keanekaragaman Hayati Indonesia: Keanekaragaman tingkat gen (variasi dalam satu jenis, misal mangga harum manis dan mangga golek), tingkat jenis (berbagai spesies dalam satu genus/famili, misal harimau dan kucing), dan tingkat ekosistem (hutan hujan, mangrove, terumbu karang). Garis Wallace dan Weber membagi fauna Indonesia menjadi tipe Asiatis (barat), peralihan (Sulawesi, Nusa Tenggara), dan Australis (timur).',
      'Pelestarian dan Perubahan Iklim: Pelestarian in situ dilakukan di habitat aslinya (taman nasional, cagar alam), sedangkan ex situ di luar habitat aslinya (kebun binatang, kebun raya, bank biji). Penebangan dan pembakaran hutan mengurangi penyerap karbon dioksida sehingga memperparah pemanasan global. Upaya mitigasi: reboisasi, menanam mangrove, menghemat energi, dan mengurangi sampah.'
    ],
    keyFormulas: [
      { label: 'Tingkatan organisasi', formula: '\\text{individu} \\to \\text{populasi} \\to \\text{komunitas} \\to \\text{ekosistem} \\to \\text{bioma} \\to \\text{biosfer}' },
      { label: 'Aliran energi (aturan 10%)', formula: 'E_{\\text{tingkat berikutnya}} \\approx 10\\% \\times E_{\\text{tingkat sebelumnya}}' }
    ],
    workedExamples: [
      {
        title: 'Menentukan peran dalam rantai makanan',
        problem: 'Rantai makanan: rumput → kelinci → ular → elang. Tentukan produsen, konsumen I, konsumen II, dan konsumen puncak.',
        solution: 'Produsen = rumput; konsumen I (herbivor) = kelinci; konsumen II = ular; konsumen III sekaligus konsumen puncak = elang.'
      },
      {
        title: 'Menghitung energi dengan aturan 10%',
        problem: 'Produsen dalam suatu ekosistem menyimpan 20.000 kJ energi. Berapa energi yang sampai ke konsumen II?',
        solution: 'Konsumen I ≈ 10% × 20.000 = 2.000 kJ. Konsumen II ≈ 10% × 2.000 = **200 kJ**.'
      },
      {
        title: 'Menebak dampak gangguan',
        problem: 'Pada rantai padi → tikus → ular, ular banyak diburu manusia. Apa yang terjadi?',
        solution: 'Pemangsa tikus berkurang sehingga populasi tikus meningkat, akibatnya tanaman padi banyak dimakan dan panen menurun. Keseimbangan ekosistem terganggu.'
      }
    ],
    misconceptions: [
      'Menggambar panah rantai makanan dari pemakan ke yang dimakan. Panah menunjukkan arah aliran energi, yaitu dari yang dimakan menuju yang memakan.',
      'Menganggap populasi berisi berbagai jenis makhluk hidup. Populasi hanya berisi satu jenis; kumpulan berbagai jenis disebut komunitas.',
      'Menganggap dekomposer tidak penting. Tanpa dekomposer, zat hara tidak kembali ke tanah dan produsen kekurangan nutrisi.'
    ],
    tutorTip: 'Untuk soal jaring makanan, telusuri satu per satu jalur panahnya dengan jari, lalu hitung tingkat trofik dari produsen (tingkat I). Satu hewan bisa menjadi konsumen I di satu rantai dan konsumen II di rantai lain.'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Sekelompok rusa sejenis yang hidup di padang rumput Taman Nasional Baluran disebut...',
      options: ['individu', 'populasi', 'komunitas', 'ekosistem'],
      answer: 'B',
      hint: 'Kelompok makhluk hidup sejenis di satu tempat.',
      solution: 'Sekelompok individu **sejenis** yang hidup di tempat dan waktu yang sama disebut **populasi**. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Berikut ini yang termasuk komponen abiotik dalam ekosistem kolam adalah...',
      options: ['ikan dan air', 'ganggang dan lumpur', 'katak dan bakteri', 'cahaya matahari dan suhu'],
      answer: 'D',
      hint: 'Abiotik = komponen tak hidup.',
      solution: '**Cahaya matahari dan suhu** adalah komponen tak hidup (abiotik). Ikan, ganggang, katak, dan bakteri adalah komponen biotik. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Bunga anggrek menempel pada batang pohon untuk mendapatkan cahaya matahari, sedangkan pohon tidak dirugikan. Hubungan ini disebut simbiosis...',
      options: ['mutualisme', 'parasitisme', 'komensalisme', 'predasi'],
      answer: 'C',
      hint: 'Satu pihak untung, pihak lain tidak untung dan tidak rugi.',
      solution: 'Anggrek diuntungkan, pohon tidak dirugikan. Ini adalah **simbiosis komensalisme**. Anggrek membuat makanan sendiri, jadi tidak mengambil makanan dari pohon. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Bakteri dan jamur yang menguraikan sisa-sisa makhluk hidup yang mati berperan sebagai...',
      options: ['dekomposer', 'produsen', 'konsumen I', 'konsumen puncak'],
      answer: 'A',
      hint: 'Mereka "mendaur ulang" zat hara ke tanah.',
      solution: 'Organisme yang menguraikan sisa makhluk hidup menjadi zat hara disebut **dekomposer (pengurai)**. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Pelestarian hewan langka komodo di Taman Nasional Komodo, habitat aslinya, termasuk pelestarian...',
      options: ['ex situ', 'in situ', 'budidaya', 'reboisasi'],
      answer: 'B',
      hint: '"In situ" berarti di tempat asalnya.',
      solution: 'Pelestarian yang dilakukan **di habitat aslinya** disebut pelestarian **in situ**. Kebun binatang adalah contoh ex situ. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Perhatikan jaring-jaring makanan di sawah pada gambar. Organisme yang berperan sebagai konsumen I adalah...',
      options: ['padi dan belalang', 'katak dan tikus', 'belalang dan tikus', 'ular dan elang'],
      answer: 'C',
      hint: 'Konsumen I memakan produsen (padi) secara langsung.',
      solution: 'Panah dari padi menuju **belalang** dan **tikus**, artinya keduanya memakan produsen sehingga menjadi konsumen I (herbivor). Jawaban: **C**.',
      visual: SAWAH
    }),
    soal({
      level: 'Sedang',
      q: 'Berdasarkan jaring-jaring makanan di sawah pada gambar, jika populasi ular menurun drastis karena diburu, yang paling mungkin terjadi adalah...',
      options: [
        'populasi tikus dan katak meningkat',
        'populasi padi meningkat',
        'populasi elang meningkat',
        'populasi belalang menurun karena tidak ada makanan'
      ],
      answer: 'A',
      hint: 'Ular memakan tikus dan katak.',
      solution: 'Ular adalah pemangsa **tikus dan katak**. Jika ular berkurang, kedua populasi itu meningkat. Elang kekurangan makanan, dan padi justru makin banyak dimakan tikus. Jawaban: **A**.',
      visual: SAWAH
    }),
    soal({
      level: 'Sedang',
      q: 'Varietas mangga harum manis, mangga golek, dan mangga manalagi menunjukkan keanekaragaman hayati tingkat...',
      options: ['ekosistem', 'jenis', 'kingdom', 'gen'],
      answer: 'D',
      hint: 'Semuanya masih satu spesies, yaitu Mangifera indica.',
      solution: 'Ketiganya satu spesies (*Mangifera indica*) tetapi sifatnya berbeda karena perbedaan susunan gen. Ini adalah keanekaragaman **tingkat gen**. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Fauna Indonesia bagian timur seperti kanguru pohon dan burung cenderawasih termasuk tipe...',
      options: ['Asiatis', 'Australis', 'peralihan', 'Oriental'],
      answer: 'B',
      hint: 'Fauna di timur garis Weber mirip fauna benua Australia.',
      solution: 'Fauna di sebelah timur garis Weber (Papua dan sekitarnya) mirip fauna Australia, sehingga disebut tipe **Australis**. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Lebah mengisap nektar bunga, sementara bunga terbantu penyerbukannya. Pola interaksi yang sama ditunjukkan oleh...',
      options: [
        'benalu dan pohon mangga',
        'ikan remora dan ikan hiu',
        'burung jalak dan kerbau',
        'kucing dan tikus'
      ],
      answer: 'C',
      hint: 'Lebah dan bunga sama-sama untung (mutualisme).',
      solution: 'Burung jalak memakan kutu di tubuh kerbau (jalak dapat makanan, kerbau bersih dari kutu): **mutualisme**, sama seperti lebah dan bunga. Benalu–mangga parasitisme, remora–hiu komensalisme, kucing–tikus predasi. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Perhatikan jaring-jaring makanan di sawah pada gambar. Ular dapat menempati tingkat trofik yang berbeda. Pernyataan yang benar adalah...',
      options: [
        'ular hanya sebagai konsumen II',
        'ular sebagai konsumen II pada rantai melalui tikus dan konsumen III pada rantai melalui katak',
        'ular sebagai konsumen I karena memakan katak',
        'ular sebagai konsumen puncak pada semua rantai'
      ],
      answer: 'B',
      hint: 'Hitung tingkat trofik pada rantai padi → tikus → ular dan padi → belalang → katak → ular.',
      solution: 'Rantai padi → tikus → ular: ular adalah **konsumen II**. Rantai padi → belalang → katak → ular: ular adalah **konsumen III**. Konsumen puncaknya elang. Jawaban: **B**.',
      visual: SAWAH
    }),
    soal({
      level: 'Tantangan',
      q: 'Produsen pada suatu ekosistem mengandung energi 50.000 kJ. Jika hanya 10% energi yang diteruskan ke setiap tingkat trofik berikutnya, energi yang diterima konsumen III adalah...',
      options: ['5.000 kJ', '500 kJ', '50 kJ', '5 kJ'],
      answer: 'C',
      hint: 'Produsen → konsumen I → konsumen II → konsumen III: tiga kali dikali 10%.',
      solution: 'Konsumen I = 5.000 kJ, konsumen II = 500 kJ, konsumen III = **50 kJ**. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Di sebuah daerah, petani menyemprotkan pestisida secara berlebihan sehingga banyak katak dan burung pemakan serangga mati. Akibat jangka panjang yang paling mungkin adalah...',
      options: [
        'populasi serangga hama makin tidak terkendali karena pemangsanya berkurang',
        'populasi serangga hama hilang selamanya',
        'tanaman padi tumbuh lebih subur',
        'ekosistem sawah menjadi lebih seimbang'
      ],
      answer: 'A',
      hint: 'Pikirkan siapa yang mengendalikan populasi serangga secara alami.',
      solution: 'Katak dan burung adalah **pengendali alami** serangga. Jika keduanya mati, serangga hama (yang sering kebal pestisida) berkembang tanpa pemangsa sehingga makin tidak terkendali. Keseimbangan ekosistem terganggu. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Hutan mangrove di pantai banyak ditebang untuk tambak. Selain merusak tempat berkembang biak ikan, dampak penebangan mangrove terhadap perubahan iklim adalah...',
      options: [
        'menambah oksigen di udara',
        'mengurangi tumbuhan penyerap karbon dioksida sehingga memperparah pemanasan global',
        'menurunkan suhu permukaan laut',
        'tidak berpengaruh karena mangrove tumbuh di air'
      ],
      answer: 'B',
      hint: 'Tumbuhan menyerap CO₂ saat fotosintesis.',
      solution: 'Mangrove menyerap dan menyimpan banyak karbon dioksida. Penebangannya **mengurangi penyerap CO₂** dan melepaskan karbon yang tersimpan, sehingga **memperparah pemanasan global**. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Bunga bangkai (*Amorphophallus titanum*) yang terancam punah dikembangbiakkan di Kebun Raya Bogor, sementara habitat aslinya di hutan Sumatra juga dilindungi. Kesimpulan yang tepat adalah...',
      options: [
        'kedua upaya termasuk pelestarian in situ',
        'kedua upaya termasuk pelestarian ex situ',
        'pengembangbiakan di kebun raya termasuk in situ, perlindungan hutan termasuk ex situ',
        'pengembangbiakan di kebun raya termasuk ex situ, perlindungan hutan termasuk in situ'
      ],
      answer: 'D',
      hint: 'Bedakan di habitat asli dan di luar habitat asli.',
      solution: 'Kebun Raya Bogor berada di luar habitat asli bunga bangkai, jadi termasuk **ex situ**. Perlindungan hutan Sumatra adalah pelestarian di habitat asli, yaitu **in situ**. Kedua upaya saling melengkapi. Jawaban: **D**.'
    })
  ]
});
