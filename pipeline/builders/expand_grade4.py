import json
import os
import re

DATA_PATH = 'src/data/grades/grade4.js'

with open(DATA_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

json_match = re.search(r'export\s+const\s+\w+\s*=\s*(\{[\s\S]*\});?\s*$', content)
if not json_match:
    raise ValueError("Could not extract grade4Data object")

grade4Data = json.loads(json_match.group(1))

def make_q(q_id, difficulty, question, options_list, correct_key, hint, best_solution):
    return {
        "id": q_id,
        "category": "Latihan",
        "difficulty": difficulty,
        "question": question,
        "options": [
            {"key": "A", "text": options_list[0]},
            {"key": "B", "text": options_list[1]},
            {"key": "C", "text": options_list[2]},
            {"key": "D", "text": options_list[3]}
        ],
        "correctAnswer": correct_key,
        "hint": hint,
        "bestSolution": best_solution
    }

# =========================================================================
# BAB 1: Bilangan Cacah sampai 10.000 (Existing: 6 -> Add 14 -> Total: 20)
# =========================================================================
b1_add = [
    make_q(
        "sd4-b1-7", "Sedang",
        "Hasil dari penjumlahan bersusun $3.456 + 2.789$ adalah...",
        ["6.245", "6.235", "6.145", "6.345"], "A",
        "Jumlahkan dari nilai satuan: $6 + 9 = 15$ (tulis 5, simpan 1 ke puluhan).",
        "**Langkah Penyelesaian Terstruktur:**\n1. Satuan: $6 + 9 = 15$ (simpan 1)\n2. Puluhan: $1 + 5 + 8 = 14$ (simpan 1)\n3. Ratusan: $1 + 4 + 7 = 12$ (simpan 1)\n4. Ribuan: $1 + 3 + 2 = 6$\nHasilnya adalah **6.245** (Opsi A)."
    ),
    make_q(
        "sd4-b1-8", "Sedang",
        "Hasil pengurangan bersusun $7.020 - 3.485$ adalah...",
        ["3.535", "3.635", "3.545", "4.535"], "A",
        "Gunakan teknik meminjam secara berurutan dari digit ribuan ke ratusan dan puluhan.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Satuan: $10 - 5 = 5$\n2. Puluhan: $11 - 8 = 3$\n3. Ratusan: $9 - 4 = 5$\n4. Ribuan: $6 - 3 = 3$\nHasilnya adalah **3.535** (Opsi A)."
    ),
    make_q(
        "sd4-b1-9", "Sedang",
        "Hasil perkalian bersusun $145 \\times 6$ adalah...",
        ["870", "840", "860", "890"], "A",
        "Kalikan tiap angka mulai dari satuan: $5 \\times 6$, $4 \\times 6$, lalu $1 \\times 6$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $5 \\times 6 = 30$ (simpan 3)\n2. $4 \\times 6 = 24 + 3 = 27$ (simpan 2)\n3. $1 \\times 6 = 6 + 2 = 8$\nHasilnya adalah **870** (Opsi A)."
    ),
    make_q(
        "sd4-b1-10", "Sedang",
        "Hasil bagi dan sisa dari pembagian bersusun (porogapit) $95 : 4$ adalah...",
        ["23 sisa 3", "24 sisa 1", "22 sisa 7", "23 sisa 2"], "A",
        "Bagi puluhan terlebih dahulu: $9 : 4 = 2$ sisa 1. Turunkan 5 menjadi 15, lalu $15 : 4 = 3$ sisa 3.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $9 : 4 = 2$ sisa 1 ($2 \\times 4 = 8$)\n2. Turunkan 5 menjadi 15\n3. $15 : 4 = 3$ sisa 3 ($3 \\times 4 = 12$, $15 - 12 = 3$)\nHasilnya adalah **23 sisa 3** (Opsi A)."
    ),
    make_q(
        "sd4-b1-11", "Sedang",
        "Sebuah perpustakaan memiliki 4.350 buku cerita dan 2.875 buku pelajaran. Jumlah seluruh buku di perpustakaan tersebut adalah...",
        ["7.225 buku", "7.125 buku", "7.235 buku", "6.225 buku"], "A",
        "Jumlahkan kedua jenis buku: $4.350 + 2.875$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$4.350 + 2.875 = 7.225$$\nJumlah seluruh buku adalah **7.225 buku** (Opsi A)."
    ),
    make_q(
        "sd4-b1-12", "Sedang",
        "Doni memiliki uang tabungan sebesar Rp8.500,00. Ia membeli buku tulis seharga Rp3.750,00. Sisa uang tabungan Doni adalah...",
        ["Rp4.750,00", "Rp4.650,00", "Rp5.250,00", "Rp4.850,00"], "A",
        "Kurangkan saldo awal dengan harga pembelian: $8.500 - 3.750$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$8.500 - 3.750 = 4.750$$\nSisa uang tabungan adalah **Rp4.750,00** (Opsi A)."
    ),
    make_q(
        "sd4-b1-13", "Sedang",
        "Sebuah toko roti mengemas 8 kotak kue setiap hari. Jika setiap kotak berisi 24 kue, berapa butir kue yang diproduksi toko tersebut dalam 5 hari?",
        ["960 kue", "940 kue", "920 kue", "860 kue"], "A",
        "Hitung banyak kue per hari ($8 \\times 24$), lalu kalikan dengan 5 hari.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Produksi per hari: $8 \\times 24 = 192$ kue\n2. Dalam 5 hari: $192 \\times 5 = 960$ kue (Opsi A)."
    ),
    make_q(
        "sd4-b1-14", "Sedang",
        "Koperasi sekolah menerima 120 buku tulis yang akan dibagikan sama banyak kepada 8 kelas. Berapa buku tulis yang diterima setiap kelas?",
        ["15 buku", "14 buku", "16 buku", "12 buku"], "A",
        "Gunakan pembagian: $120 : 8$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$120 : 8 = 15$$\nSetiap kelas menerima **15 buku tulis** (Opsi A)."
    ),
    make_q(
        "sd4-b1-15", "Sedang",
        "Bilangan kelipatan 6 yang berada di antara 30 dan 50 adalah...",
        ["36, 42, 48", "36, 40, 48", "32, 38, 44", "36, 42, 46"], "A",
        "Daftar kelipatan 6: $6 \\times 6 = 36$, $6 \\times 7 = 42$, $6 \\times 8 = 48$.",
        "**Langkah Penyelesaian Terstruktur:**\nKelipatan 6 setelah 30 adalah $36, 42, 48$ (Opsi A)."
    ),
    make_q(
        "sd4-b1-16", "Tantangan",
        "Aku adalah bilangan empat angka. Digit ribuanku 5, digit ratusanku 0, digit puluhanku dua kali digit satuanku. Jika digit satuanku 3, bilangan berapakah aku?",
        ["5.063", "5.603", "5.036", "5.360"], "A",
        "Tentukan setiap nilai tempat: ribuan = 5, ratusan = 0, puluhan = $2 \\times 3 = 6$, satuan = 3.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Ribuan: 5\n2. Ratusan: 0\n3. Puluhan: $2 \\times 3 = 6$\n4. Satuan: 3\nMaka bilangan tersebut adalah **5.063** (Opsi A)."
    ),
    make_q(
        "sd4-b1-17", "Tantangan",
        "Tiga truk pengangkut beras memuat masing-masing 2.450 kg, 2.780 kg, dan 3.120 kg beras. Beras tersebut disimpan di gudang. Jika 4.600 kg beras sudah didistribusikan, sisa beras di gudang adalah...",
        ["3.750 kg", "3.650 kg", "3.850 kg", "3.550 kg"], "A",
        "Jumlahkan seluruh muatan beras ketiga truk, lalu kurangi dengan yang didistribusikan.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Total muatan: $2.450 + 2.780 + 3.120 = 8.350\\text{ kg}$\n2. Sisa beras: $8.350 - 4.600 = 3.750\\text{ kg}$ (Opsi A)."
    ),
    make_q(
        "sd4-b1-18", "Tantangan",
        "Panitia lomba menyediakan 1.000 botol minuman. Setiap pos minum diisi 135 botol. Jika terdapat 7 pos minum, berapa botol minuman yang tersisa di ruang panitia?",
        ["55 botol", "65 botol", "45 botol", "75 botol"], "A",
        "Hitung total air di pos minum ($7 \\times 135$), lalu kurangkan dari 1.000.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Total air di pos: $7 \\times 135 = 945$ botol\n2. Sisa: $1.000 - 945 = 55$ botol (Opsi A)."
    ),
    make_q(
        "sd4-b1-19", "Tantangan",
        "Paman membeli 4 karung pupuk seharga Rp48.000,00 per karung dan 3 sak semen seharga Rp65.000,00 per sak. Jika Paman membayar dengan 4 lembar uang Rp100.000,00, uang kembalian yang diterima Paman adalah...",
        ["Rp13.000,00", "Rp15.000,00", "Rp17.000,00", "Rp12.000,00"], "A",
        "Hitung total belanja: $(4 \\times 48.000) + (3 \\times 65.000)$, lalu kurangkan dari Rp400.000,00.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Pupuk: $4 \\times 48.000 = 192.000$\n2. Semen: $3 \\times 65.000 = 195.000$\n3. Total belanja: $192.000 + 195.000 = 387.000$\n4. Kembalian: $400.000 - 387.000 = 13.000$ (Opsi A)."
    ),
    make_q(
        "sd4-b1-20", "Tantangan",
        "Faktor persekutuan dari 24 dan 36 yang merupakan bilangan genap lebih dari 4 adalah...",
        ["6 dan 12", "6 dan 8", "8 dan 12", "12 dan 18"], "A",
        "Tentukan faktor persekutuan 24 dan 36: 1, 2, 3, 4, 6, 12. Pilih yang genap dan lebih dari 4.",
        "**Langkah Penyelesaian Terstruktur:**\nFaktor 24: 1, 2, 3, 4, 6, 8, 12, 24\nFaktor 36: 1, 2, 3, 4, 6, 9, 12, 18, 36\nFaktor persekutuan: 1, 2, 3, 4, 6, 12\nBilangan genap yang lebih dari 4 adalah **6 dan 12** (Opsi A)."
    )
]

# =========================================================================
# BAB 2: Pecahan (Existing: 5 -> Add 15 -> Total: 20)
# =========================================================================
b2_add = [
    # Paket 2: Sedang (Soal 6-10)
    make_q(
        "sd4-b2-6", "Sedang",
        "Bentuk pecahan paling sederhana dari $\\frac{12}{16}$ adalah...",
        ["\\frac{3}{4}", "\\frac{2}{3}", "\\frac{6}{8}", "\\frac{4}{5}"], "A",
        "Bagi pembilang dan penyebut dengan FPB dari 12 dan 16 yaitu 4.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{12 : 4}{16 : 4} = \\frac{3}{4}$$\nBentuk paling sederhananya adalah **$\\frac{3}{4}$** (Opsi A)."
    ),
    make_q(
        "sd4-b2-7", "Sedang",
        "Pecahan yang senilai dengan $\\frac{2}{5}$ adalah...",
        ["\\frac{6}{15}", "\\frac{4}{15}", "\\frac{5}{10}", "\\frac{6}{10}"], "A",
        "Kalikan pembilang dan penyebut dengan bilangan yang sama: $\\frac{2 \\times 3}{5 \\times 3}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{2 \\times 3}{5 \\times 3} = \\frac{6}{15}$$\nPecahan yang senilai adalah **$\\frac{6}{15}$** (Opsi A)."
    ),
    make_q(
        "sd4-b2-8", "Sedang",
        "Hasil dari penjumlahan $\\frac{2}{7} + \\frac{3}{7}$ adalah...",
        ["\\frac{5}{7}", "\\frac{5}{14}", "\\frac{6}{7}", "\\frac{1}{7}"], "A",
        "Karena penyebut sudah sama, cukup jumlahkan pembilangnya: $2 + 3 = 5$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{2}{7} + \\frac{3}{7} = \\frac{2 + 3}{7} = \\frac{5}{7}$$\nHasilnya adalah **$\\frac{5}{7}$** (Opsi A)."
    ),
    make_q(
        "sd4-b2-9", "Sedang",
        "Hasil pengurangan pecahan $\\frac{7}{9} - \\frac{4}{9}$ adalah...",
        ["\\frac{3}{9} = \\frac{1}{3}", "\\frac{3}{0}", "\\frac{11}{9}", "\\frac{2}{9}"], "A",
        "Kurangkan pembilangnya: $7 - 4 = 3$, lalu sederhanakan $\\frac{3}{9}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{7 - 4}{9} = \\frac{3}{9} = \\frac{1}{3}$$\nHasilnya adalah **$\\frac{1}{3}$** (Opsi A)."
    ),
    make_q(
        "sd4-b2-10", "Sedang",
        "Bentuk pecahan campuran dari $\\frac{11}{4}$ adalah...",
        ["2 \\frac{3}{4}", "3 \\frac{1}{4}", "2 \\frac{1}{4}", "1 \\frac{7}{4}"], "A",
        "Bagi 11 dengan 4: $11 : 4 = 2$ sisa 3, sehingga menjadi $2 \\frac{3}{4}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$11 : 4 = 2 \\text{ sisa } 3 \\implies 2\\frac{3}{4}$$\nBentuk campurannya adalah **$2\\frac{3}{4}$** (Opsi A)."
    ),
    # Paket 3: Aplikasi & Terapan (Soal 11-15)
    make_q(
        "sd4-b2-11", "Sedang",
        "Ibu membeli semangka lalu memotongnya menjadi 8 bagian sama besar. Kakak memakan 2 potong dan Adik memakan 3 potong. Bagian semangka yang telah dimakan adalah...",
        ["\\frac{5}{8}", "\\frac{3}{8}", "\\frac{6}{8}", "\\frac{4}{8}"], "A",
        "Jumlahkan bagian Kakak dan Adik: $\\frac{2}{8} + \\frac{3}{8}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{2}{8} + \\frac{3}{8} = \\frac{5}{8}$$\nBagian yang telah dimakan adalah **$\\frac{5}{8}$** (Opsi A)."
    ),
    make_q(
        "sd4-b2-12", "Sedang",
        "Dari soal sebelumnya, sisa bagian semangka yang belum dimakan adalah...",
        ["\\frac{3}{8}", "\\frac{5}{8}", "\\frac{2}{8}", "\\frac{1}{8}"], "A",
        "Kurangkan 1 bagian utuh ($\\frac{8}{8}$) dengan bagian yang sudah dimakan ($\\frac{5}{8}$).",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{8}{8} - \\frac{5}{8} = \\frac{3}{8}$$\nSisa semangka adalah **$\\frac{3}{8}$** (Opsi A)."
    ),
    make_q(
        "sd4-b2-13", "Sedang",
        "Bentuk desimal dari pecahan $\\frac{3}{4}$ adalah...",
        ["0,75", "0,50", "0,25", "0,34"], "A",
        "Ubah penyebut menjadi per 100 dengan mengalikan 25: $\\frac{3 \\times 25}{4 \\times 25} = \\frac{75}{100}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{3 \\times 25}{4 \\times 25} = \\frac{75}{100} = 0{,}75$$\nBentuk desimalnya adalah **0,75** (Opsi A)."
    ),
    make_q(
        "sd4-b2-14", "Sedang",
        "Bentuk pecahan persen dari $\\frac{1}{5}$ adalah...",
        ["20%", "25%", "15%", "10%"], "A",
        "Persen artinya per seratus: $\\frac{1}{5} \\times 100\\% = 20\\%$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{1}{5} \\times 100\\% = 20\\%$$\nBentuk persennya adalah **20%** (Opsi A)."
    ),
    make_q(
        "sd4-b2-15", "Sedang",
        "Tanda pertidaksamaan yang tepat untuk mengisi $\\frac{3}{5} \\dots \\frac{4}{7}$ adalah...",
        [">", "<", "=", "\\le"], "A",
        "Samakan penyebut atau kali silang: $3 \\times 7 = 21$ dibandingkan $4 \\times 5 = 20$.",
        "**Langkah Penyelesaian Terstruktur:**\nKali silang:\n- $3 \\times 7 = 21$\n- $4 \\times 5 = 20$\nKarena $21 > 20$, maka $\\frac{3}{5} > \\frac{4}{7}$ (Opsi A)."
    ),
    # Paket 4: Tantangan & Analisis (Soal 16-20)
    make_q(
        "sd4-b2-16", "Tantangan",
        "Ayah memiliki tali sepanjang $3\\frac{1}{2}$ meter. Ayah menggunakan tali tersebut sepanjang $1\\frac{1}{2}$ meter untuk mengikat kayu. Berapa meter sisa tali Ayah?",
        ["2 meter", "1 meter", "2,5 meter", "1,5 meter"], "A",
        "Kurangkan bilangan bulat dan pecahannya: $(3 - 1) + (\\frac{1}{2} - \\frac{1}{2})$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$3\\frac{1}{2} - 1\\frac{1}{2} = 2\\text{ meter}$$\nSisa tali Ayah adalah **2 meter** (Opsi A)."
    ),
    make_q(
        "sd4-b2-17", "Tantangan",
        "Urutan pecahan $\\frac{1}{2}$, $\\frac{3}{4}$, $\\frac{2}{5}$ dari yang terkecil ke terbesar adalah...",
        ["\\frac{2}{5}, \\frac{1}{2}, \\frac{3}{4}", "\\frac{1}{2}, \\frac{2}{5}, \\frac{3}{4}", "\\frac{3}{4}, \\frac{1}{2}, \\frac{2}{5}", "\\frac{2}{5}, \\frac{3}{4}, \\frac{1}{2}"], "A",
        "Ubah ke bentuk desimal: $\\frac{2}{5} = 0,4$, $\\frac{1}{2} = 0,5$, $\\frac{3}{4} = 0,75$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $\\frac{2}{5} = 0{,}40$\n2. $\\frac{1}{2} = 0{,}50$\n3. $\\frac{3}{4} = 0{,}75$\nUrutan naik: **$\\frac{2}{5}, \\frac{1}{2}, \\frac{3}{4}$** (Opsi A)."
    ),
    make_q(
        "sd4-b2-18", "Tantangan",
        "Sebuah botol berisi $\\frac{4}{5}$ liter minyak goreng. Ibu menuangkan $\\frac{1}{5}$ liter ke dalam wajan. Kemudian Bibi menambahkan $\\frac{2}{5}$ liter minyak ke botol tersebut. Berapa liter minyak dalam botol sekarang?",
        ["1 liter", "\\frac{5}{5} = 1", "\\frac{6}{5} = 1\\frac{1}{5} liter", "\\frac{3}{5} liter"], "C",
        "Operasikan berurutan: $\\frac{4}{5} - \\frac{1}{5} + \\frac{2}{5} = \\frac{5}{5} = 1$ liter.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{4 - 1 + 2}{5} = \\frac{5}{5} = 1\\text{ liter}$$\nMinyak di dalam botol adalah **1 liter** (Opsi A)."
    ),
    make_q(
        "sd4-b2-19", "Tantangan",
        "Siti mempunyai pita sepanjang $\\frac{7}{10}$ meter, sedangkan Dayu mempunyai pita sepanjang $\\frac{3}{5}$ meter. Selisih panjang pita Siti dan Dayu adalah...",
        ["\\frac{1}{10} meter", "\\frac{4}{10} meter", "\\frac{2}{10} meter", "\\frac{1}{5} meter"], "A",
        "Samakan penyebut Dayu: $\\frac{3}{5} = \\frac{6}{10}$. Selisih: $\\frac{7}{10} - \\frac{6}{10}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{7}{10} - \\frac{6}{10} = \\frac{1}{10}\\text{ meter}$$\nSelisihnya adalah **$\\frac{1}{10}$ meter** (Opsi A)."
    ),
    make_q(
        "sd4-b2-20", "Tantangan",
        "Di dalam keranjang terdapat 30 buah apel. Sebanyak $\\frac{2}{5}$ bagian dari apel tersebut berwarna merah dan sisanya berwarna hijau. Berapa banyak apel yang berwarna hijau?",
        ["18 buah", "12 buah", "15 buah", "20 buah"], "A",
        "Apel merah: $\\frac{2}{5} \\times 30 = 12$. Apel hijau: $30 - 12 = 18$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Apel merah: $\\frac{2}{5} \\times 30 = 12$ buah\n2. Apel hijau: $30 - 12 = 18$ buah (Opsi A)."
    )
]

# Adjust b2-18 correct key to A because 5/5 = 1
b2_add[12]["options"] = [
    {"key": "A", "text": "1 liter"},
    {"key": "B", "text": "1 1/5 liter"},
    {"key": "C", "text": "3/5 liter"},
    {"key": "D", "text": "4/5 liter"}
]
b2_add[12]["correctAnswer"] = "A"

# =========================================================================
# BAB 3: Pola Gambar dan Pola Bilangan (Existing: 4 -> Add 16 -> Total: 20)
# =========================================================================
b3_add = [
    # Paket 1 ke Paket 2 (Soal 5-10)
    make_q(
        "sd4-b3-5", "Dasar",
        "Pada barisan bilangan $2, 4, 6, 8, \\dots$, pola yang digunakan adalah...",
        ["Bertambah 2", "Berkurang 2", "Dikalikan 2", "Bertambah 4"], "A",
        "Perhatikan selisih antar suku yang berurutan: $4 - 2 = 2, 6 - 4 = 2$.",
        "**Langkah Penyelesaian Terstruktur:**\nSelisih tiap suku adalah $+2$, jadi polanya **bertambah 2** (Opsi A)."
    ),
    make_q(
        "sd4-b3-6", "Sedang",
        "Dua suku berikutnya dari barisan bilangan $5, 10, 15, 20, \\dots$ adalah...",
        ["25 dan 30", "25 dan 35", "22 dan 27", "30 dan 35"], "A",
        "Pola bilangan kelipatan 5 atau bertambah 5 secara berulang.",
        "**Langkah Penyelesaian Terstruktur:**\n- $20 + 5 = 25$\n- $25 + 5 = 30$\nDua suku berikutnya adalah **25 dan 30** (Opsi A)."
    ),
    make_q(
        "sd4-b3-7", "Sedang",
        "Bilangan yang tepat untuk melengkapi titik-titik pada barisan $12, 16, \\dots, 24, 28$ adalah...",
        ["20", "18", "22", "19"], "A",
        "Perhatikan beda suku: $16 - 12 = 4$, maka suku ketiga adalah $16 + 4$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$16 + 4 = 20$$\nBilangannya adalah **20** (Opsi A)."
    ),
    make_q(
        "sd4-b3-8", "Sedang",
        "Perhatikan barisan bilangan yang mengecil: $50, 45, 40, \\dots, 30$. Suku yang hilang adalah...",
        ["35", "36", "38", "32"], "A",
        "Pola berkurang 5: $40 - 5 = 35$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$40 - 5 = 35$$\nBilangannya adalah **35** (Opsi A)."
    ),
    make_q(
        "sd4-b3-9", "Sedang",
        "Pada susunan batang korek api, pola ke-1 butuh 3 batang, pola ke-2 butuh 5 batang, pola ke-3 butuh 7 batang. Banyak batang korek api pada pola ke-4 adalah...",
        ["9 batang", "8 batang", "10 batang", "11 batang"], "A",
        "Pola bertambah 2: $3, 5, 7, 9$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$7 + 2 = 9$$\nPola ke-4 membutuhkan **9 batang korek api** (Opsi A)."
    ),
    make_q(
        "sd4-b3-10", "Sedang",
        "Suku ke-6 dari pola bilangan ganjil $1, 3, 5, 7, \\dots$ adalah...",
        ["11", "9", "13", "15"], "A",
        "Rumus suku ke-n bilangan ganjil adalah $2n - 1$. Untuk $n = 6$: $2(6) - 1 = 11$.",
        "**Langkah Penyelesaian Terstruktur:**\nBarisan: 1, 3, 5, 7, 9, 11\nSuku ke-6 adalah **11** (Opsi A)."
    ),
    # Paket 3: Aplikasi & Terapan (Soal 11-15)
    make_q(
        "sd4-b3-11", "Sedang",
        "Rani menabung setiap hari dengan pola: hari ke-1 Rp1.000, hari ke-2 Rp1.500, hari ke-3 Rp2.000, dan seterusnya. Berapa uang yang ditabung Rani pada hari ke-5?",
        ["Rp3.000,00", "Rp2.500,00", "Rp3.500,00", "Rp4.000,00"], "A",
        "Pola bertambah Rp500,00 setiap hari: hari ke-4 Rp2.500, hari ke-5 Rp3.000.",
        "**Langkah Penyelesaian Terstruktur:**\n- Hari 4: $2.000 + 500 = 2.500$\n- Hari 5: $2.500 + 500 = 3.000$\nUang tabungan hari ke-5 adalah **Rp3.000,00** (Opsi A)."
    ),
    make_q(
        "sd4-b3-12", "Sedang",
        "Lampu hias berkedip dengan urutan warna: Merah, Kuning, Hijau, Biru, Merah, Kuning, Hijau, Biru... Warna lampu pada urutan ke-10 adalah...",
        ["Kuning", "Merah", "Hijau", "Biru"], "A",
        "Pola berulang setiap 4 warna. Bagi $10 : 4 = 2$ sisa 2. Urutan ke-2 adalah Kuning.",
        "**Langkah Penyelesaian Terstruktur:**\nSiklus 4 warna: 1 Merah, 2 Kuning, 3 Hijau, 4 Biru.\n$10 = (2 \\times 4) + 2 \\implies$ sisa 2 = **Kuning** (Opsi A)."
    ),
    make_q(
        "sd4-b3-13", "Sedang",
        "Seorang pedagang menata jeruk membentuk piramida mini: baris paling atas 1 jeruk, baris kedua 3 jeruk, baris ketiga 5 jeruk, baris keempat 7 jeruk. Berapa total jeruk pada keempat baris tersebut?",
        ["16 jeruk", "15 jeruk", "18 jeruk", "14 jeruk"], "A",
        "Jumlahkan seluruhnya: $1 + 3 + 5 + 7 = 16$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$1 + 3 + 5 + 7 = 16$$\nTotalnya adalah **16 jeruk** (Opsi A)."
    ),
    make_q(
        "sd4-b3-14", "Sedang",
        "Suku ke-7 dari barisan bilangan $3, 7, 11, 15, \\dots$ adalah...",
        ["27", "25", "29", "31"], "A",
        "Beda pola adalah $+4$. Lanjutkan hingga suku ke-7.",
        "**Langkah Penyelesaian Terstruktur:**\nS1=3, S2=7, S3=11, S4=15, S5=19, S6=23, S7=27.\nSuku ke-7 adalah **27** (Opsi A)."
    ),
    make_q(
        "sd4-b3-15", "Sedang",
        "Tiga suku berikutnya dari barisan berkurang $100, 92, 84, 76, \\dots$ adalah...",
        ["68, 60, 52", "68, 62, 54", "70, 62, 54", "66, 58, 50"], "A",
        "Pola berkurang 8 secara konsisten.",
        "**Langkah Penyelesaian Terstruktur:**\n- $76 - 8 = 68$\n- $68 - 8 = 60$\n- $60 - 8 = 52$\nTiga suku berikutnya adalah **68, 60, 52** (Opsi A)."
    ),
    # Paket 4: Tantangan & Analisis (Soal 16-20)
    make_q(
        "sd4-b3-16", "Tantangan",
        "Perhatikan pola bilangan bertingkat: $1, 2, 4, 7, 11, \\dots$. Suku berikutnya adalah...",
        ["16", "15", "17", "18"], "A",
        "Perhatikan penambahannya: $+1, +2, +3, +4, +5$. Maka $11 + 5 = 16$.",
        "**Langkah Penyelesaian Terstruktur:**\nSelisih bertambah 1 setiap langkah: $11 + 5 = 16$ (Opsi A)."
    ),
    make_q(
        "sd4-b3-17", "Tantangan",
        "Budi menyusun ubin hitam dan putih. Pola ubin putih mengikuti barisan: $4, 8, 12, 16, \\dots$. Berapakah banyak ubin putih pada pola ke-10?",
        ["40 ubin", "36 ubin", "44 ubin", "48 ubin"], "A",
        "Gunakan rumus kelipatan 4: $4 \\times n$. Untuk $n = 10$: $4 \\times 10 = 40$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$4 \\times 10 = 40$$\nBanyak ubin putih pada pola ke-10 adalah **40 ubin** (Opsi A)."
    ),
    make_q(
        "sd4-b3-18", "Tantangan",
        "Jumlah 5 suku pertama dari barisan bilangan $2, 5, 8, 11, 14$ adalah...",
        ["40", "38", "42", "45"], "A",
        "Jumlahkan kelima bilangan tersebut: $2 + 5 + 8 + 11 + 14$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$2 + 5 + 8 + 11 + 14 = 40$$\nJumlahnya adalah **40** (Opsi A)."
    ),
    make_q(
        "sd4-b3-19", "Tantangan",
        "Dalam sebuah gedung pertemuan, baris pertama memiliki 12 kursi, baris kedua 15 kursi, baris ketiga 18 kursi, dan seterusnya bertambah 3 kursi setiap baris. Berapa banyak kursi pada baris ke-8?",
        ["33 kursi", "30 kursi", "36 kursi", "27 kursi"], "A",
        "Kursi baris ke-n: $12 + (n - 1) \\times 3$. Untuk $n = 8$: $12 + 7 \\times 3 = 33$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$12 + (7 \\times 3) = 12 + 21 = 33$$\nBanyak kursi baris ke-8 adalah **33 kursi** (Opsi A)."
    ),
    make_q(
        "sd4-b3-20", "Tantangan",
        "Jika pola bilangan $a, b, c, \\dots$ memiliki aturan: 'suku berikutnya diperoleh dari dua kali suku sebelumnya dikurangi 1'. Jika suku pertama adalah 3, maka suku ke-4 adalah...",
        ["17", "9", "33", "15"], "A",
        "Hitung berurutan: S1 = 3, S2 = $2(3) - 1 = 5$, S3 = $2(5) - 1 = 9$, S4 = $2(9) - 1 = 17$.",
        "**Langkah Penyelesaian Terstruktur:**\n- Suku 1 = 3\n- Suku 2 = $2 \\times 3 - 1 = 5$\n- Suku 3 = $2 \\times 5 - 1 = 9$\n- Suku 4 = $2 \\times 9 - 1 = 17$ (Opsi A)."
    )
]

# =========================================================================
# BAB 4: Pengukuran Luas dan Volume (Existing: 7 -> Add 13 -> Total: 20)
# =========================================================================
b4_add = [
    # Paket 2 ke Paket 3 (Soal 8-15)
    make_q(
        "sd4-b4-8", "Sedang",
        "Sebuah persegi panjang memiliki panjang 15 cm dan lebar 8 cm. Luas persegi panjang tersebut adalah...",
        ["120 cm²", "110 cm²", "125 cm²", "46 cm²"], "A",
        "Gunakan rumus luas persegi panjang: $L = p \\times l = 15 \\times 8$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$L = 15 \\times 8 = 120\\text{ cm}^2$$\nLuasnya adalah **120 cm²** (Opsi A)."
    ),
    make_q(
        "sd4-b4-9", "Sedang",
        "Sebuah persegi memiliki panjang sisi 12 cm. Luas persegi tersebut adalah...",
        ["144 cm²", "124 cm²", "48 cm²", "164 cm²"], "A",
        "Rumus luas persegi: $L = s \\times s = 12 \\times 12$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$L = 12 \\times 12 = 144\\text{ cm}^2$$\nLuasnya adalah **144 cm²** (Opsi A)."
    ),
    make_q(
        "sd4-b4-10", "Sedang",
        "Luas sebuah persegi panjang adalah 84 cm². Jika lebarnya 7 cm, maka panjangnya adalah...",
        ["12 cm", "14 cm", "11 cm", "13 cm"], "A",
        "Panjang = Luas : lebar $= 84 : 7$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$p = 84 : 7 = 12\\text{ cm}$$\nPanjangnya adalah **12 cm** (Opsi A)."
    ),
    make_q(
        "sd4-b4-11", "Sedang",
        "Sebuah kubus tersusun dari kubus-kubus satuan. Jika panjang rusuknya 4 kubus satuan, volume kubus tersebut adalah...",
        ["64 kubus satuan", "16 kubus satuan", "48 kubus satuan", "32 kubus satuan"], "A",
        "Volume kubus: $s \\times s \\times s = 4 \\times 4 \\times 4$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$V = 4 \\times 4 \\times 4 = 64\\text{ kubus satuan}$$\nVolumenya adalah **64 kubus satuan** (Opsi A)."
    ),
    make_q(
        "sd4-b4-12", "Sedang",
        "Sebuah balok memiliki panjang 6 cm, lebar 4 cm, dan tinggi 5 cm. Volume balok tersebut adalah...",
        ["120 cm³", "100 cm³", "150 cm³", "60 cm³"], "A",
        "Volume balok: $V = p \\times l \\times t = 6 \\times 4 \\times 5$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$V = 6 \\times 4 \\times 5 = 120\\text{ cm}^3$$\nVolumenya adalah **120 cm³** (Opsi A)."
    ),
    make_q(
        "sd4-b4-13", "Sedang",
        "Ibu menuangkan 3 botol air mineral ke dalam teko. Setiap botol berisi 500 mL. Berapa liter volume air di dalam teko tersebut?",
        ["1,5 liter", "1,2 liter", "1,8 liter", "2,0 liter"], "A",
        "Hitung total mL: $3 \\times 500 = 1.500$ mL, lalu ubah ke liter ($1.500 : 1.000$).",
        "**Langkah Penyelesaian Terstruktur:**\n1. Total volume: $3 \\times 500 = 1.500\\text{ mL}$\n2. Konversi ke liter: $1.500 : 1.000 = 1{,}5\\text{ liter}$ (Opsi A)."
    ),
    make_q(
        "sd4-b4-14", "Sedang",
        "Kamar tidur berukuran panjang 4 meter dan lebar 3 meter akan dipasangi ubin berukuran $1\\text{ m} \\times 1\\text{ m}$. Banyak ubin yang dibutuhkan adalah...",
        ["12 ubin", "14 ubin", "10 ubin", "7 ubin"], "A",
        "Banyak ubin = Luas kamar : Luas ubin $= (4 \\times 3) : (1 \\times 1)$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Banyak ubin} = 12 : 1 = 12\\text{ ubin}$$\nDibutuhkan **12 ubin** (Opsi A)."
    ),
    make_q(
        "sd4-b4-15", "Sedang",
        "Sebuah wadah berbentuk balok memiliki volume 240 cm³. Jika panjangnya 8 cm dan lebarnya 6 cm, maka tinggi wadah tersebut adalah...",
        ["5 cm", "6 cm", "4 cm", "8 cm"], "A",
        "Tinggi = Volume : $(p \\times l) = 240 : (8 \\times 6)$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$t = 240 : 48 = 5\\text{ cm}$$\nTingginya adalah **5 cm** (Opsi A)."
    ),
    # Paket 4: Tantangan & Analisis (Soal 16-20)
    make_q(
        "sd4-b4-16", "Tantangan",
        "Pak Rudi memiliki sebidang kebun berbentuk persegi panjang berukuran $20\\text{ m} \\times 15\\text{ m}$. Di tengah kebun dibuat kolam ikan berbentuk persegi dengan sisi 5 meter. Berapa luas kebun yang tersisa untuk ditanami sayur?",
        ["275 m²", "250 m²", "280 m²", "300 m²"], "A",
        "Luas sisa = Luas kebun - Luas kolam ikan $= (20 \\times 15) - (5 \\times 5)$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Luas kebun: $20 \\times 15 = 300\\text{ m}^2$\n2. Luas kolam: $5 \\times 5 = 25\\text{ m}^2$\n3. Luas sisa: $300 - 25 = 275\\text{ m}^2$ (Opsi A)."
    ),
    make_q(
        "sd4-b4-17", "Tantangan",
        "Sebuah akuarium berbentuk balok memiliki ukuran panjang 50 cm, lebar 30 cm, dan tinggi 40 cm. Jika akuarium tersebut baru terisi air setengah bagian, berapa cm³ air yang ada di dalam akuarium?",
        ["30.000 cm³", "60.000 cm³", "15.000 cm³", "45.000 cm³"], "A",
        "Volume penuh = $50 \\times 30 \\times 40 = 60.000$ cm³. Setengahnya $= 60.000 : 2$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$V = \\frac{1}{2} \\times (50 \\times 30 \\times 40) = 30.000\\text{ cm}^3$$\nVolume air adalah **30.000 cm³** (Opsi A)."
    ),
    make_q(
        "sd4-b4-18", "Tantangan",
        "Dua buah kubus memiliki perbandingan panjang rusuk 1 : 2. Jika panjang rusuk kubus kecil adalah 3 cm, berapakah volume kubus besar?",
        ["216 cm³", "54 cm³", "108 cm³", "72 cm³"], "A",
        "Rusuk kubus besar = $2 \\times 3 = 6$ cm. Volume kubus besar = $6 \\times 6 \\times 6$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$V = 6 \\times 6 \\times 6 = 216\\text{ cm}^3$$\nVolumenya adalah **216 cm³** (Opsi A)."
    ),
    make_q(
        "sd4-b4-19", "Tantangan",
        "Lantai sebuah aula berukuran $10\\text{ m} \\times 8\\text{ m}$ akan ditutup karpet berbentuk persegi dengan sisi 2 meter. Berapa banyak karpet yang diperlukan agar seluruh lantai tertutup rapi tanpa tumpang tindih?",
        ["20 karpet", "25 karpet", "18 karpet", "40 karpet"], "A",
        "Luas aula $= 80\\text{ m}^2$. Luas 1 karpet $= 4\\text{ m}^2$. Banyak karpet $= 80 : 4$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Banyak karpet} = \\frac{10 \\times 8}{2 \\times 2} = \\frac{80}{4} = 20\\text{ karpet}$$\nDibutuhkan **20 karpet** (Opsi A)."
    ),
    make_q(
        "sd4-b4-20", "Tantangan",
        "Sebuah bak mandi berbentuk kubus dengan panjang rusuk bagian dalam 80 cm terisi air penuh. Jika air tersebut digunakan mandi sebanyak 112.000 cm³, berapakah sisa air di dalam bak mandi dalam satuan liter?",
        ["400 liter", "412 liter", "380 liter", "512 liter"], "A",
        "Volume kubus $= 80^3 = 512.000\\text{ cm}^3$. Sisa $= 512.000 - 112.000 = 400.000\\text{ cm}^3 = 400\\text{ liter}$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Volume total: $80 \\times 80 \\times 80 = 512.000\\text{ cm}^3$\n2. Sisa volume: $512.000 - 112.000 = 400.000\\text{ cm}^3$\n3. Ubah ke liter ($1\\text{ liter} = 1.000\\text{ cm}^3$): $400.000 : 1.000 = 400\\text{ liter}$ (Opsi A)."
    )
]

# =========================================================================
# BAB 5: Bangun Datar (Existing: 4 -> Add 16 -> Total: 20)
# =========================================================================
b5_add = [
    # Paket 1 ke Paket 2 (Soal 5-10)
    make_q(
        "sd4-b5-5", "Dasar",
        "Bangun datar yang memiliki 3 sisi dan 3 sudut disebut...",
        ["Segitiga", "Segiempat", "Lingkaran", "Jajargenjang"], "A",
        "Bangun tertutup bersisi tiga disebut segitiga.",
        "**Langkah Penyelesaian Terstruktur:**\nBangun datar bersisi 3 adalah **segitiga** (Opsi A)."
    ),
    make_q(
        "sd4-b5-6", "Sedang",
        "Segitiga yang ketiga sisinya sama panjang disebut segitiga...",
        ["Sama sisi", "Sama kaki", "Siku-siku", "Sembarang"], "A",
        "Jika ketiga sisi memiliki panjang sama, maka disebut sama sisi.",
        "**Langkah Penyelesaian Terstruktur:**\nSegitiga dengan tiga sisi sama panjang adalah **segitiga sama sisi** (Opsi A)."
    ),
    make_q(
        "sd4-b5-7", "Sedang",
        "Jumlah besar seluruh sudut di dalam sebuah segitiga adalah...",
        ["180°", "360°", "90°", "270°"], "A",
        "Total ketiga sudut segitiga selalu sama dengan sudut lurus ($180^\\circ$).",
        "**Langkah Penyelesaian Terstruktur:**\nJumlah sudut segitiga $= 180^\\circ$ (Opsi A)."
    ),
    make_q(
        "sd4-b5-8", "Sedang",
        "Bangun datar segiempat yang memiliki sepasang sisi sejajar yang tidak sama panjang adalah...",
        ["Trapesium", "Jajargenjang", "Belah ketupat", "Layang-layang"], "A",
        "Ciri khas trapesium adalah memiliki tepat sepasang sisi berhadapan yang sejajar.",
        "**Langkah Penyelesaian Terstruktur:**\nBangun datar dengan sepasang sisi sejajar adalah **trapesium** (Opsi A)."
    ),
    make_q(
        "sd4-b5-9", "Sedang",
        "Banyaknya sumbu simetri lipat pada sebuah persegi adalah...",
        ["4", "2", "8", "1"], "A",
        "Persegi memiliki 2 sumbu simetri melalui sisi dan 2 sumbu diagonal, total 4.",
        "**Langkah Penyelesaian Terstruktur:**\nPersegi memiliki **4 sumbu simetri** (Opsi A)."
    ),
    make_q(
        "sd4-b5-10", "Sedang",
        "Persegi panjang memiliki sumbu simetri lipat sebanyak...",
        ["2", "4", "1", "0"], "A",
        "Persegi panjang memiliki sumbu simetri vertikal dan horizontal (diagonal bukan sumbu simetri lipat).",
        "**Langkah Penyelesaian Terstruktur:**\nPersegi panjang memiliki **2 sumbu simetri lipat** (Opsi A)."
    ),
    # Paket 3: Aplikasi & Terapan (Soal 11-15)
    make_q(
        "sd4-b5-11", "Sedang",
        "Sebuah segitiga siku-siku memiliki salah satu sudut lancip berukuran 35°. Besar sudut lancip lainnya adalah...",
        ["55°", "45°", "65°", "35°"], "A",
        "Sudut siku-siku $= 90^\\circ$. Sisa sudut $= 180^\\circ - (90^\\circ + 35^\\circ) = 55^\\circ$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$180^\\circ - 90^\\circ - 35^\\circ = 55^\\circ$$\nBesar sudut lainnya adalah **55°** (Opsi A)."
    ),
    make_q(
        "sd4-b5-12", "Sedang",
        "Keliling sebuah segitiga sama sisi yang panjang sisinya 9 cm adalah...",
        ["27 cm", "18 cm", "81 cm", "36 cm"], "A",
        "Keliling segitiga sama sisi $= 3 \\times s = 3 \\times 9$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$K = 3 \\times 9 = 27\\text{ cm}$$\nKelilingnya adalah **27 cm** (Opsi A)."
    ),
    make_q(
        "sd4-b5-13", "Sedang",
        "Bangun datar yang memiliki 4 sisi sama panjang tetapi sudut-sudutnya bukan sudut siku-siku adalah...",
        ["Belah ketupat", "Persegi", "Jajargenjang", "Layang-layang"], "A",
        "Belah ketupat memiliki 4 sisi sama panjang, sedangkan sudutnya terdiri dari 2 lancip dan 2 tumpul.",
        "**Langkah Penyelesaian Terstruktur:**\nBangun tersebut adalah **belah ketupat** (Opsi A)."
    ),
    make_q(
        "sd4-b5-14", "Sedang",
        "Keliling sebuah persegi adalah 48 cm. Panjang sisi persegi tersebut adalah...",
        ["12 cm", "14 cm", "16 cm", "10 cm"], "A",
        "Panjang sisi = Keliling : $4 = 48 : 4$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$s = 48 : 4 = 12\\text{ cm}$$\nPanjang sisinya adalah **12 cm** (Opsi A)."
    ),
    make_q(
        "sd4-b5-15", "Sedang",
        "Keliling persegi panjang berukuran panjang 14 cm dan lebar 6 cm adalah...",
        ["40 cm", "84 cm", "20 cm", "48 cm"], "A",
        "Keliling persegi panjang $= 2 \\times (p + l) = 2 \\times (14 + 6)$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$K = 2 \\times (14 + 6) = 2 \\times 20 = 40\\text{ cm}$$\nKelilingnya adalah **40 cm** (Opsi A)."
    ),
    # Paket 4: Tantangan & Analisis (Soal 16-20)
    make_q(
        "sd4-b5-16", "Tantangan",
        "Sebuah taman berbentuk segitiga sama kaki memiliki keliling 36 meter. Jika panjang sisi alasnya 10 meter, berapakah panjang masing-masing sisi kakinya?",
        ["13 meter", "12 meter", "14 meter", "11 meter"], "A",
        "Jumlah kedua kaki $= 36 - 10 = 26$ meter. Panjang tiap kaki $= 26 : 2$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Panjang satu kaki} = (36 - 10) : 2 = 26 : 2 = 13\\text{ meter}$$\nPanjang kakinya adalah **13 meter** (Opsi A)."
    ),
    make_q(
        "sd4-b5-17", "Tantangan",
        "Ali berlari mengelilingi lapangan sepak bola berbentuk persegi panjang berukuran $100\\text{ m} \\times 60\\text{ m}$ sebanyak 3 putaran penuh. Jarak total yang ditempuh Ali adalah...",
        ["960 meter", "320 meter", "640 meter", "1.200 meter"], "A",
        "Keliling lapangan $= 2 \\times (100 + 60) = 320$ m. Dalam 3 putaran $= 3 \\times 320$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Keliling lapangan: $2 \\times (100 + 60) = 320\\text{ m}$\n2. 3 putaran: $3 \\times 320 = 960\\text{ m}$ (Opsi A)."
    ),
    make_q(
        "sd4-b5-18", "Tantangan",
        "Kawat sepanjang 60 cm akan dibentuk menjadi kerangka persegi dan kerangka segitiga sama sisi yang masing-masing panjang sisinya sama. Jika panjang sisi kedua bangun adalah $s$, maka nilai $s$ adalah...",
        ["8,57 cm", "10 cm", "12 cm", "15 cm"], "A",
        "Total sisi $= 4s + 3s = 7s = 60$, atau jika dibuat persegi keliling 32 cm dan segitiga keliling 28 cm. Jika dibuat 1 persegi dengan kawat 60 cm sisinya 15 cm.",
        "**Langkah Penyelesaian Terstruktur:**\nJika kawat dibuat menjadi sebuah persegi utuh: $s = 60 : 4 = 15\\text{ cm}$."
    ),
    make_q(
        "sd4-b5-19", "Tantangan",
        "Sebuah jajar genjang memiliki keliling 50 cm. Jika salah satu sisi panjangnya 16 cm, maka panjang sisi lainnya yang bersebelahan adalah...",
        ["9 cm", "8 cm", "10 cm", "12 cm"], "A",
        "Keliling jajargenjang $= 2 \\times (a + b) = 50 \\implies a + b = 25$. Jika $a = 16$, maka $b = 25 - 16 = 9$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$b = (50 : 2) - 16 = 25 - 16 = 9\\text{ cm}$$\nPanjang sisi lainnya adalah **9 cm** (Opsi A)."
    ),
    make_q(
        "sd4-b5-20", "Tantangan",
        "Berapa banyak segitiga kecil sama sisi dengan sisi 1 cm yang dapat disusun untuk membentuk segitiga sama sisi besar dengan panjang sisi 4 cm?",
        ["16 segitiga", "12 segitiga", "8 segitiga", "4 segitiga"], "A",
        "Banyak segitiga kecil $= 4^2 = 16$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$4 \\times 4 = 16$$\nDibutuhkan **16 segitiga kecil** (Opsi A)."
    )
]

# Adjust b5-18 question to be crisp
b5_add[13] = make_q(
    "sd4-b5-18", "Tantangan",
    "Kawat sepanjang 64 cm akan dibentuk menjadi kerangka sebuah persegi. Panjang sisi persegi yang terbentuk adalah...",
    ["16 cm", "14 cm", "18 cm", "12 cm"], "A",
    "Bagi panjang kawat dengan 4 sisi: $64 : 4 = 16$.",
    "**Langkah Penyelesaian Terstruktur:**\n$$s = 64 : 4 = 16\\text{ cm}$$\nPanjang sisinya adalah **16 cm** (Opsi A)."
)

# =========================================================================
# BAB 6: Piktogram dan Diagram Batang (Existing: 4 -> Add 16 -> Total: 20)
# =========================================================================
b6_add = [
    # Paket 1 ke Paket 2 (Soal 5-10)
    make_q(
        "sd4-b6-5", "Dasar",
        "Diagram yang menyajikan data menggunakan gambar atau simbol tertentu disebut...",
        ["Piktogram", "Diagram batang", "Diagram garis", "Diagram lingkaran"], "A",
        "Piktogram menyajikan data kuantitatif menggunakan gambar/ikon.",
        "**Langkah Penyelesaian Terstruktur:**\nDiagram dengan simbol gambar disebut **piktogram** (Opsi A)."
    ),
    make_q(
        "sd4-b6-6", "Sedang",
        "Pada sebuah piktogram, 1 simbol buku mewakili 5 buah buku. Jika di hari Selasa terdapat 6 simbol buku, berapa buku yang dipinjam pada hari Selasa?",
        ["30 buku", "25 buku", "35 buku", "20 buku"], "A",
        "Kalikan banyak simbol dengan nilai per simbol: $6 \\times 5 = 30$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$6 \\times 5 = 30\\text{ buku}$$\nJumlahnya adalah **30 buku** (Opsi A)."
    ),
    make_q(
        "sd4-b6-7", "Sedang",
        "Jika 40 orang siswa diwakili oleh simbol orang di mana 1 simbol = 8 siswa, berapa banyak simbol orang yang harus digambar?",
        ["5 simbol", "4 simbol", "6 simbol", "8 simbol"], "A",
        "Bagi jumlah siswa dengan nilai per simbol: $40 : 8 = 5$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$40 : 8 = 5\\text{ simbol}$$\nDibutuhkan **5 simbol** (Opsi A)."
    ),
    make_q(
        "sd4-b6-8", "Sedang",
        "Tinggi batang pada diagram batang tegak menunjukkan...",
        ["Frekuensi atau banyaknya data", "Nama kategori data", "Waktu pengamatan", "Rata-rata data"], "A",
        "Tinggi batang berbanding lurus dengan frekuensi atau jumlah data.",
        "**Langkah Penyelesaian Terstruktur:**\nTinggi batang menyatakan **banyaknya data (frekuensi)** (Opsi A)."
    ),
    make_q(
        "sd4-b6-9", "Sedang",
        "Data nilai ulangan matematika: 70, 80, 80, 90, 70, 80, 100, 90. Nilai yang paling sering muncul (modus) adalah...",
        ["80", "70", "90", "100"], "A",
        "Hitung kemunculan: nilai 70 ada 2, nilai 80 ada 3, nilai 90 ada 2, nilai 100 ada 1.",
        "**Langkah Penyelesaian Terstruktur:**\nNilai 80 muncul paling banyak (3 kali) sehingga modusnya adalah **80** (Opsi A)."
    ),
    make_q(
        "sd4-b6-10", "Sedang",
        "Data berat badan 5 siswa (dalam kg): 32, 34, 30, 36, 38. Rata-rata berat badan kelima siswa tersebut adalah...",
        ["34 kg", "33 kg", "35 kg", "32 kg"], "A",
        "Jumlahkan semua data lalu bagi 5: $(32 + 34 + 30 + 36 + 38) : 5 = 170 : 5$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Rata-rata} = 170 : 5 = 34\\text{ kg}$$\nRata-ratanya adalah **34 kg** (Opsi A)."
    ),
    # Paket 3: Aplikasi & Terapan (Soal 11-15)
    make_q(
        "sd4-b6-11", "Sedang",
        "Data penjualan buah di toko segar: Apel 45 kg, Jeruk 60 kg, Mangga 35 kg, Pisang 50 kg. Buah yang paling sedikit terjual adalah...",
        ["Mangga", "Apel", "Pisang", "Jeruk"], "A",
        "Bandingkan angka penjualan: Mangga hanya terjual 35 kg.",
        "**Langkah Penyelesaian Terstruktur:**\nBuah dengan penjualan terendah adalah **Mangga (35 kg)** (Opsi A)."
    ),
    make_q(
        "sd4-b6-12", "Sedang",
        "Dari data penjualan buah pada soal sebelumnya, selisih penjualan Jeruk dan Pisang adalah...",
        ["10 kg", "15 kg", "20 kg", "5 kg"], "A",
        "Kurangkan penjualan Jeruk (60 kg) dengan Pisang (50 kg).",
        "**Langkah Penyelesaian Terstruktur:**\n$$60 - 50 = 10\\text{ kg}$$\nSelisihnya adalah **10 kg** (Opsi A)."
    ),
    make_q(
        "sd4-b6-13", "Sedang",
        "Tabel pengunjung kebun binatang: Senin 120 orang, Selasa 150 orang, Rabu 130 orang, Kamis 180 orang. Total pengunjung selama 4 hari tersebut adalah...",
        ["580 orang", "560 orang", "600 orang", "540 orang"], "A",
        "Jumlahkan data: $120 + 150 + 130 + 180 = 580$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$120 + 150 + 130 + 180 = 580\\text{ orang}$$\nTotalnya adalah **580 orang** (Opsi A)."
    ),
    make_q(
        "sd4-b6-14", "Sedang",
        "Data jenis transportasi siswa: Jalan kaki 12 siswa, Sepeda 18 siswa, Angkutan kota 15 siswa, Diantar motor 25 siswa. Berapa persen siswa yang menggunakan sepeda jika total siswa 70 orang?",
        ["25,7%", "30%", "20%", "18%"], "A",
        "Persentase sepeda $= \\frac{18}{70} \\times 100\\% \\approx 25,7\\%$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{18}{70} \\times 100\\% \\approx 25{,}7\\%$$\nPersentasenya adalah **25,7%** (Opsi A)."
    ),
    make_q(
        "sd4-b6-15", "Sedang",
        "Dalam sebuah piktogram, 1 simbol pensil mewakili 12 pensil. Jika kelas 4A menerima 48 pensil, berapa simbol pensil yang digambar?",
        ["4 simbol", "3 simbol", "5 simbol", "6 simbol"], "A",
        "Bagi 48 pensil dengan 12: $48 : 12 = 4$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$48 : 12 = 4\\text{ simbol}$$\nDigambar sebanyak **4 simbol** (Opsi A)."
    ),
    # Paket 4: Tantangan & Analisis (Soal 16-20)
    make_q(
        "sd4-b6-16", "Tantangan",
        "Diagram batang menunjukkan sumbangan buku: Kelas 4A (25 buku), Kelas 4B (30 buku), Kelas 4C (20 buku), Kelas 4D (x buku). Jika rata-rata sumbangan buku tiap kelas adalah 28 buku, berapakah nilai x (sumbangan Kelas 4D)?",
        ["37 buku", "35 buku", "32 buku", "30 buku"], "A",
        "Total sumbangan 4 kelas $= 4 \\times 28 = 112$. Nilai $x = 112 - (25 + 30 + 20)$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Total target: $4 \\times 28 = 112$ buku\n2. Jumlah 3 kelas: $25 + 30 + 20 = 75$ buku\n3. Sumbangan Kelas 4D: $112 - 75 = 37$ buku (Opsi A)."
    ),
    make_q(
        "sd4-b6-17", "Tantangan",
        "Piktogram hasil panen jagung desa: Tahun 2021 (4 karung simbol), Tahun 2022 (6 karung simbol), Tahun 2023 (9 karung simbol). Jika 1 karung simbol = 250 kg jagung, berapakah kenaikan hasil panen dari tahun 2021 ke 2023?",
        ["1.250 kg", "1.500 kg", "1.000 kg", "750 kg"], "A",
        "Selisih simbol: $9 - 4 = 5$ simbol. Kenaikan panen: $5 \\times 250 = 1.250$ kg.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Kenaikan} = (9 - 4) \\times 250 = 5 \\times 250 = 1.250\\text{ kg}$$\nKenaikannya adalah **1.250 kg** (Opsi A)."
    ),
    make_q(
        "sd4-b6-18", "Tantangan",
        "Data koleksi buku di pojok baca: Cerita 40%, Pengetahuan 30%, Ensiklopedia 20%, Majalah 10%. Jika total buku adalah 150 buku, selisih buku Cerita dan Majalah adalah...",
        ["45 buku", "30 buku", "60 buku", "15 buku"], "A",
        "Selisih persentase: $40\\% - 10\\% = 30\\%$. Selisih buku: $30\\% \\times 150 = 45$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Selisih} = (40\\% - 10\\%) \\times 150 = 30\\% \\times 150 = 45\\text{ buku}$$\nSelisihnya adalah **45 buku** (Opsi A)."
    ),
    make_q(
        "sd4-b6-19", "Tantangan",
        "Tabel frekuensi nilai matematika 20 siswa: nilai 60 (3 siswa), nilai 70 (5 siswa), nilai 80 (7 siswa), nilai 90 (4 siswa), nilai 100 (1 siswa). Berapa persentase siswa yang memperoleh nilai minimal 80?",
        ["60%", "55%", "65%", "50%"], "A",
        "Siswa dengan nilai minimal 80: nilai 80 + 90 + 100 $= 7 + 4 + 1 = 12$ siswa. Persen $= \\frac{12}{20} \\times 100\\% = 60\\%$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{7 + 4 + 1}{20} \\times 100\\% = \\frac{12}{20} \\times 100\\% = 60\\%$$\nPersentasenya adalah **60%** (Opsi A)."
    ),
    make_q(
        "sd4-b6-20", "Tantangan",
        "Dalam suatu pameran seni, pengunjung hari pertama hingga kelima membentuk pola: 40, 55, 70, 85, 100 orang. Jika panitia menargetkan total 500 pengunjung dalam 6 hari, berapa pengunjung yang harus hadir pada hari keenam?",
        ["150 orang", "140 orang", "160 orang", "115 orang"], "A",
        "Jumlahkan 5 hari pertama: $40 + 55 + 70 + 85 + 100 = 350$. Hari keenam: $500 - 350 = 150$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Total 5 hari: $40 + 55 + 70 + 85 + 100 = 350$ orang\n2. Target hari ke-6: $500 - 350 = 150$ orang (Opsi A)."
    )
]

# Append questions to chapters
grade4Data["chapters"][0]["questions"].extend(b1_add)
grade4Data["chapters"][1]["questions"].extend(b2_add)
grade4Data["chapters"][2]["questions"].extend(b3_add)
grade4Data["chapters"][3]["questions"].extend(b4_add)
grade4Data["chapters"][4]["questions"].extend(b5_add)
grade4Data["chapters"][5]["questions"].extend(b6_add)

# Verify counts
for i, ch in enumerate(grade4Data["chapters"]):
    print(f"Bab {i+1} ({ch['id']}): {len(ch['questions'])} questions")

# Save updated grade4.js
fileContent = f"""/**
 * Data Kurikulum Kelas 4 SD (Fase B)
 * 6 Bab Resmi Sesuai Buku Siswa Matematika
 */

export const grade4Data = {json.dumps(grade4Data, indent=2, ensure_ascii=False)};
"""

with open(DATA_PATH, 'w', encoding='utf-8') as f:
    f.write(fileContent)

print("Successfully expanded grade4.js to 20 questions per chapter!")
