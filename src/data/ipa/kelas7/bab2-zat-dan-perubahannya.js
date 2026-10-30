import { bab, soal } from '../author.js';

export default bab({
  grade: 7,
  number: 2,
  slug: 'zat-dan-perubahannya',
  title: 'Zat dan Perubahannya',
  element: 'Zat dan sifatnya: klasifikasi, sifat, dan perubahan materi',
  summary: {
    overview: 'Semua benda di sekitar kita tersusun dari zat yang menempati ruang dan memiliki massa. Bab ini membahas tiga wujud zat dan susunan partikelnya, perubahan wujud, massa jenis sebagai ciri khas zat, serta perbedaan perubahan fisika dan perubahan kimia.',
    coreConcepts: [
      'Wujud Zat dan Susunan Partikel: Zat padat partikelnya sangat rapat dan teratur sehingga bentuk dan volumenya tetap. Zat cair partikelnya agak renggang dan dapat bergeser sehingga volumenya tetap tetapi bentuknya mengikuti wadah. Gas partikelnya sangat renggang dan bergerak bebas sehingga bentuk dan volumenya mengikuti wadah.',
      'Perubahan Wujud Zat: Mencair (padat → cair) dan menguap (cair → gas) memerlukan kalor. Membeku (cair → padat) dan mengembun (gas → cair) melepaskan kalor. Menyublim adalah padat → gas (contoh kapur barus/naftalena), sedangkan mengkristal atau deposisi adalah gas → padat (contoh terbentuknya salju/bunga es).',
      'Massa Jenis: Massa jenis ($\\rho$) adalah massa zat tiap satu satuan volume: $\\rho = \\dfrac{m}{V}$. Satuannya kg/m³ atau g/cm³ (1 g/cm³ = 1.000 kg/m³). Massa jenis air 1 g/cm³. Benda yang massa jenisnya lebih kecil dari zat cair akan terapung, sama akan melayang, lebih besar akan tenggelam.',
      'Mengukur Volume Benda Tak Beraturan: Volume batu dapat diukur dengan gelas ukur: volume batu = volume air setelah batu dimasukkan − volume air awal. Cara ini memakai prinsip bahwa benda yang tercelup mendesak air sebanyak volumenya.',
      'Perubahan Fisika: Perubahan yang tidak menghasilkan zat baru, misalnya es mencair, gula larut dalam air, kertas digunting, dan kaca pecah. Zatnya tetap sama, hanya wujud, ukuran, atau bentuknya yang berubah.',
      'Perubahan Kimia: Perubahan yang menghasilkan zat baru dengan sifat berbeda, misalnya kertas dibakar, besi berkarat, makanan basi, dan fotosintesis. Ciri-cirinya: terbentuk gas, terjadi perubahan warna, terbentuk endapan, atau terjadi perubahan suhu (terasa panas/dingin).'
    ],
    keyFormulas: [
      { label: 'Massa jenis', formula: '\\rho = \\dfrac{m}{V}' },
      { label: 'Massa dan volume', formula: 'm = \\rho \\times V \\qquad V = \\dfrac{m}{\\rho}' },
      { label: 'Konversi satuan', formula: '1\\ \\text{g/cm}^3 = 1000\\ \\text{kg/m}^3' },
      { label: 'Volume benda tak beraturan', formula: 'V_{\\text{benda}} = V_{\\text{akhir}} - V_{\\text{awal}}' }
    ],
    workedExamples: [
      {
        title: 'Menghitung massa jenis',
        problem: 'Sebuah balok kayu bermassa 120 g dan bervolume 200 cm³. Berapa massa jenisnya? Apakah balok itu terapung di air?',
        solution: '$\\rho = m : V = 120\\ \\text{g} : 200\\ \\text{cm}^3 = 0{,}6\\ \\text{g/cm}^3$.\nKarena 0,6 g/cm³ lebih kecil dari massa jenis air (1 g/cm³), balok kayu **terapung**.'
      },
      {
        title: 'Volume batu dengan gelas ukur',
        problem: 'Gelas ukur berisi 50 mL air. Setelah sebuah batu dimasukkan, permukaan air naik menjadi 75 mL. Massa batu 65 g. Tentukan massa jenis batu.',
        solution: 'Volume batu = 75 mL − 50 mL = 25 mL = 25 cm³.\n$\\rho = 65\\ \\text{g} : 25\\ \\text{cm}^3 = 2{,}6\\ \\text{g/cm}^3$.'
      },
      {
        title: 'Membedakan perubahan fisika dan kimia',
        problem: 'Kelompokkan: (1) lilin meleleh, (2) kayu terbakar, (3) susu menjadi asam, (4) air mendidih.',
        solution: 'Perubahan fisika: (1) lilin meleleh dan (4) air mendidih — tidak ada zat baru.\nPerubahan kimia: (2) kayu terbakar (menjadi abu, asap, gas) dan (3) susu menjadi asam (rasa dan bau berubah karena zat baru).'
      }
    ],
    misconceptions: [
      'Menganggap benda berat pasti tenggelam. Yang menentukan adalah massa jenis, bukan massa. Kapal baja yang sangat berat bisa terapung karena rongganya membuat massa jenis rata-rata kapal lebih kecil dari air.',
      'Menganggap gula yang larut dalam air adalah perubahan kimia karena gulanya "hilang". Gula masih ada (air terasa manis) dan dapat diperoleh kembali dengan menguapkan air, jadi itu perubahan fisika.',
      'Menyebut uap putih di atas air mendidih sebagai gas. Uap air adalah gas yang tidak terlihat; asap putih yang terlihat adalah titik-titik air hasil pengembunan.'
    ],
    tutorTip: 'Untuk perubahan wujud, ingat: menuju wujud yang partikelnya lebih renggang (padat → cair → gas) selalu MENYERAP kalor; sebaliknya MELEPAS kalor.'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Zat yang memiliki bentuk berubah sesuai wadahnya tetapi volumenya tetap adalah...',
      options: ['zat padat', 'zat cair', 'gas', 'zat padat dan gas'],
      answer: 'B',
      hint: 'Tuang air dari gelas ke mangkuk: bentuknya berubah, banyaknya tetap.',
      solution: 'Partikel **zat cair** dapat bergeser sehingga bentuknya mengikuti wadah, tetapi jarak antarpartikel tetap dekat sehingga volumenya tetap. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Kapur barus (naftalena) di lemari lama-kelamaan habis tanpa meninggalkan cairan. Peristiwa ini disebut...',
      options: ['mencair', 'menguap', 'mengembun', 'menyublim'],
      answer: 'D',
      hint: 'Padat langsung berubah menjadi gas.',
      solution: 'Kapur barus berubah dari **padat langsung menjadi gas** tanpa melalui wujud cair. Peristiwa ini disebut **menyublim**. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Perubahan wujud yang melepaskan kalor adalah...',
      options: ['mencair dan menguap', 'menguap dan menyublim', 'membeku dan mengembun', 'mencair dan membeku'],
      answer: 'C',
      hint: 'Zat yang partikelnya menjadi lebih rapat akan melepaskan kalor.',
      solution: 'Membeku (cair → padat) dan mengembun (gas → cair) membuat partikel lebih rapat, sehingga zat **melepaskan kalor**. Mencair, menguap, dan menyublim justru menyerap kalor. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Peristiwa berikut yang merupakan perubahan kimia adalah...',
      options: ['es batu mencair', 'kertas digunting', 'besi berkarat', 'garam larut dalam air'],
      answer: 'C',
      hint: 'Cari peristiwa yang menghasilkan zat baru.',
      solution: 'Besi berkarat menghasilkan **zat baru** (karat/oksida besi) yang sifatnya berbeda dari besi. Tiga pilihan lain tidak menghasilkan zat baru (perubahan fisika). Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Rumus massa jenis yang benar adalah...',
      options: ['$\\rho = m \\times V$', '$\\rho = \\dfrac{V}{m}$', '$\\rho = m + V$', '$\\rho = \\dfrac{m}{V}$'],
      answer: 'D',
      hint: 'Massa jenis adalah massa setiap satu satuan volume.',
      solution: 'Massa jenis = massa dibagi volume, yaitu $\\rho = \\dfrac{m}{V}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah benda bermassa 300 g memiliki volume 150 cm³. Massa jenis benda tersebut adalah...',
      options: ['0,5 g/cm³', '2 g/cm³', '450 g/cm³', '150 g/cm³'],
      answer: 'B',
      hint: '$\\rho = m : V$.',
      solution: '$\\rho = 300\\ \\text{g} : 150\\ \\text{cm}^3 = 2\\ \\text{g/cm}^3$. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Gelas ukur berisi 40 mL air. Ketika sebuah batu dicelupkan seluruhnya, permukaan air naik menjadi 58 mL. Volume batu tersebut adalah...',
      options: ['18 cm³', '40 cm³', '58 cm³', '98 cm³'],
      answer: 'A',
      hint: 'Volume batu = volume akhir − volume awal.',
      solution: 'Volume batu = 58 mL − 40 mL = 18 mL = **18 cm³** (1 mL = 1 cm³). Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Massa jenis air adalah 1 g/cm³. Benda berikut yang akan tenggelam di dalam air adalah benda dengan massa jenis...',
      options: ['0,4 g/cm³', '0,9 g/cm³', '1,0 g/cm³', '2,7 g/cm³'],
      answer: 'D',
      hint: 'Benda tenggelam jika massa jenisnya lebih besar dari massa jenis zat cair.',
      solution: 'Benda tenggelam jika $\\rho_{\\text{benda}} > \\rho_{\\text{air}}$. Hanya **2,7 g/cm³** yang lebih besar dari 1 g/cm³. Benda 1,0 g/cm³ melayang, sedangkan 0,4 dan 0,9 g/cm³ terapung. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Saat tablet vitamin C dimasukkan ke dalam air, muncul gelembung-gelembung gas dan warna air berubah. Kesimpulan yang tepat adalah...',
      options: [
        'terjadi perubahan fisika karena tablet larut',
        'terjadi perubahan kimia karena terbentuk gas dan warna berubah',
        'terjadi penguapan air',
        'tidak terjadi perubahan apa pun'
      ],
      answer: 'B',
      hint: 'Ingat ciri-ciri perubahan kimia.',
      solution: 'Terbentuknya **gas** dan **perubahan warna** adalah ciri perubahan kimia: ada zat baru yang terbentuk dari reaksi tablet dengan air. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Pada pagi hari tampak titik-titik air pada permukaan luar gelas berisi es. Titik-titik air itu berasal dari...',
      options: ['uap air di udara yang mengembun', 'es yang merembes keluar dari gelas', 'air dari dalam gelas yang menguap', 'gelas kaca yang mencair'],
      answer: 'A',
      hint: 'Gelas yang dingin mendinginkan udara di sekitarnya.',
      solution: 'Uap air di udara menyentuh permukaan gelas yang dingin, melepaskan kalor, lalu **mengembun** menjadi titik-titik air. Air tidak bisa merembes menembus kaca. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah balok aluminium memiliki massa jenis 2,7 g/cm³ dan volume 20 cm³. Massa balok tersebut adalah...',
      options: ['7,4 g', '22,7 g', '54 g', '540 g'],
      answer: 'C',
      hint: '$m = \\rho \\times V$.',
      solution: '$m = \\rho \\times V = 2{,}7\\ \\text{g/cm}^3 \\times 20\\ \\text{cm}^3 = 54\\ \\text{g}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Massa jenis minyak goreng 0,8 g/cm³. Volume 400 g minyak goreng adalah...',
      options: ['320 cm³', '500 cm³', '480 cm³', '800 cm³'],
      answer: 'B',
      hint: '$V = m : \\rho$.',
      solution: '$V = m : \\rho = 400\\ \\text{g} : 0{,}8\\ \\text{g/cm}^3 = 500\\ \\text{cm}^3$. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Massa jenis sebuah logam adalah 7,8 g/cm³. Jika dinyatakan dalam satuan SI, massa jenis logam tersebut adalah...',
      options: ['0,78 kg/m³', '78 kg/m³', '780 kg/m³', '7.800 kg/m³'],
      answer: 'D',
      hint: '1 g/cm³ = 1.000 kg/m³.',
      solution: '7,8 g/cm³ × 1.000 = **7.800 kg/m³**. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah kapal laut terbuat dari baja yang massa jenisnya jauh lebih besar dari air, tetapi kapal dapat terapung. Penjelasan yang paling tepat adalah...',
      options: [
        'baja kehilangan massanya ketika berada di laut',
        'air laut lebih padat daripada baja',
        'rongga udara di dalam kapal membuat massa jenis rata-rata kapal lebih kecil daripada air laut',
        'kapal terapung karena didorong oleh mesin'
      ],
      answer: 'C',
      hint: 'Hitung massa jenis kapal secara keseluruhan, bukan hanya bajanya.',
      solution: 'Kapal berbentuk cekung dan berisi banyak udara. Massa total kapal dibagi volume total (termasuk rongga) menghasilkan **massa jenis rata-rata yang lebih kecil dari air laut**, sehingga kapal terapung. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Perhatikan peristiwa berikut: (1) nasi menjadi basi, (2) lilin meleleh, (3) kayu dibakar, (4) air laut diuapkan menjadi garam. Pasangan yang merupakan perubahan kimia adalah...',
      options: ['(1) dan (3)', '(1) dan (2)', '(2) dan (4)', '(3) dan (4)'],
      answer: 'A',
      hint: 'Pilih peristiwa yang menghasilkan zat baru dan tidak bisa dikembalikan dengan mudah.',
      solution: 'Nasi basi (bau dan rasa berubah) dan kayu dibakar (menjadi abu dan asap) menghasilkan **zat baru**, jadi termasuk perubahan kimia. Lilin meleleh dan penguapan air laut hanya mengubah wujud/memisahkan zat (perubahan fisika). Jawaban: **A**.'
    })
  ]
});
