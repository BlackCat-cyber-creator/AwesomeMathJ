import json
import os
import re

DATA_PATH = 'src/data/grades/grade12.js'

with open(DATA_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

json_match = re.search(r'export\s+const\s+\w+\s*=\s*(\{[\s\S]*\});?\s*$', content)
if not json_match:
    raise ValueError("Could not extract grade12Data object")

grade12Data = json.loads(json_match.group(1))

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
# BAB 1: Barisan dan Deret (Existing: 5 -> Add 15 -> Total: 20)
# =========================================================================
b1_add = [
    # Paket 2: Sedang (Soal 6-10)
    make_q(
        "sma12-b1-6", "Sedang",
        "Diketahui barisan aritmetika dengan suku pertama $a = 5$ dan beda $b = 3$. Suku ke-20 barisan tersebut adalah...",
        ["62", "65", "59", "68"], "A",
        "Rumus suku ke-$n$ aritmetika: $U_n = a + (n - 1)b = 5 + 19(3) = 5 + 57 = 62$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$U_{20} = 5 + 19(3) = 5 + 57 = 62$$ (Opsi A)."
    ),
    make_q(
        "sma12-b1-7", "Sedang",
        "Jumlah 10 suku pertama dari deret aritmetika $3 + 7 + 11 + 15 + \\dots$ adalah...",
        ["210", "200", "220", "190"], "A",
        "Rumus jumlah: $S_n = \\frac{n}{2}[2a + (n - 1)b] = \\frac{10}{2}[2(3) + 9(4)] = 5(6 + 36) = 5(42) = 210$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$S_{10} = 5 \\times (6 + 36) = 5 \\times 42 = 210$$ (Opsi A)."
    ),
    make_q(
        "sma12-b1-8", "Sedang",
        "Diketahui barisan geometri dengan suku pertama $a = 3$ dan rasio $r = 2$. Suku ke-7 barisan tersebut adalah...",
        ["192", "96", "384", "128"], "A",
        "Rumus suku ke-$n$ geometri: $U_n = a r^{n-1} = 3 \\times 2^6 = 3 \\times 64 = 192$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$U_7 = 3 \\times 2^6 = 3 \\times 64 = 192$$ (Opsi A)."
    ),
    make_q(
        "sma12-b1-9", "Sedang",
        "Jumlah deret geometri tak hingga $16 + 8 + 4 + 2 + \\dots$ adalah...",
        ["32", "30", "28", "64"], "A",
        "Rumus deret tak hingga: $S_\\infty = \\frac{a}{1 - r} = \\frac{16}{1 - 0{,}5} = \\frac{16}{0{,}5} = 32$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$S_\\infty = \\frac{16}{1 - \\frac{1}{2}} = \\frac{16}{\\frac{1}{2}} = 32$$ (Opsi A)."
    ),
    make_q(
        "sma12-b1-10", "Sedang",
        "Dari suatu barisan aritmetika diketahui $U_3 = 11$ dan $U_7 = 23$. Suku pertama ($a$) dan beda ($b$) barisan tersebut adalah...",
        ["a = 5 dan b = 3", "a = 2 dan b = 3", "a = 5 dan b = 4", "a = 3 dan b = 4"], "A",
        "Selisih suku: $U_7 - U_3 = 4b = 23 - 11 = 12 \\implies b = 3$. Lalu $a = 11 - 2(3) = 5$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $4b = 12 \\implies b = 3$\n2. $a = 11 - 6 = 5$ (Opsi A)."
    ),
    # Paket 3: Aplikasi & Terapan (Soal 11-15)
    make_q(
        "sma12-b1-11", "Sedang",
        "Suatu bakteri membelah diri menjadi 2 setiap 20 menit. Jika mula-mula terdapat 50 bakteri, berapa banyak bakteri setelah 2 jam?",
        ["3.200 bakteri", "1.600 bakteri", "6.400 bakteri", "800 bakteri"], "A",
        "2 jam $= 120$ menit $= 6$ kali pembelahan. $U_7 = 50 \\times 2^6 = 50 \\times 64 = 3.200$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$N = 50 \\times 2^6 = 50 \\times 64 = 3.200\\text{ bakteri}$$ (Opsi A)."
    ),
    make_q(
        "sma12-b1-12", "Sedang",
        "Sebuah bola dijatuhkan dari ketinggian 12 meter dan memantul kembali dengan ketinggian $\\frac{2}{3}$ dari tinggi sebelumnya. Panjang lintasan bola sampai berhenti adalah...",
        ["60 meter", "48 meter", "72 meter", "36 meter"], "A",
        "Rumus pantulan bola: $S = h \\times \\frac{b + a}{b - a}$ untuk rasio $\\frac{a}{b} = \\frac{2}{3}$. $S = 12 \\times \\frac{3 + 2}{3 - 2} = 12 \\times 5 = 60$ meter.",
        "**Langkah Penyelesaian Terstruktur:**\n$$S = 12 \\times \\frac{3 + 2}{3 - 2} = 12 \\times 5 = 60\\text{ meter}$$ (Opsi A)."
    ),
    make_q(
        "sma12-b1-13", "Sedang",
        "Gaji seorang karyawan setiap bulan naik Rp50.000,00 secara tetap. Jika gaji pada bulan pertama adalah Rp2.500.000,00, total seluruh gaji yang diterima karyawan tersebut selama 1 tahun pertama adalah...",
        ["Rp33.300.000,00", "Rp32.500.000,00", "Rp34.000.000,00", "Rp30.000.000,00"], "A",
        "$S_{12} = \\frac{12}{2}[2(2.500.000) + 11(50.000)] = 6[5.000.000 + 550.000] = 6(5.550.000) = 33.300.000$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$S_{12} = 6 \\times (5.000.000 + 550.000) = 33.300.000\\text{ rupiah}$$ (Opsi A)."
    ),
    make_q(
        "sma12-b1-14", "Sedang",
        "Tiga buah bilangan membentuk barisan geometri. Hasil kali ketiga bilangan tersebut adalah 64. Suku tengah ($U_2$) barisan tersebut adalah...",
        ["4", "2", "8", "16"], "A",
        "Misalkan barisan $\\frac{a}{r}, a, ar$. Hasil kali $= a^3 = 64 \\implies a = 4$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$a^3 = 64 \\implies a = 4$$ (Opsi A)."
    ),
    make_q(
        "sma12-b1-15", "Sedang",
        "Di antara bilangan 4 dan 28 disisipkan 5 buah bilangan sehingga terbentuk barisan aritmetika baru. Beda barisan aritmetika yang baru adalah...",
        ["4", "3", "5", "6"], "A",
        "Rumus sisipan: $b' = \\frac{b}{k + 1} = \\frac{28 - 4}{5 + 1} = \\frac{24}{6} = 4$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$b' = \\frac{24}{5 + 1} = 4$$ (Opsi A)."
    ),
    # Paket 4: Tantangan & Analisis (Soal 16-20)
    make_q(
        "sma12-b1-16", "Tantangan",
        "Jumlah $n$ suku pertama suatu deret aritmetika dirumuskan dengan $S_n = 3n^2 - 2n$. Rumus suku ke-$n$ ($U_n$) adalah...",
        ["6n - 5", "6n - 2", "3n - 5", "6n + 1"], "A",
        "Gunakan $U_n = S_n - S_{n-1} = (3n^2 - 2n) - [3(n-1)^2 - 2(n-1)] = 6n - 5$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$U_n = S_n - S_{n-1} = 6n - 5$$ (Opsi A)."
    ),
    make_q(
        "sma12-b1-17", "Tantangan",
        "Sebuah tali dipotong menjadi 5 bagian dengan panjang masing-masing potongan membentuk barisan geometri. Jika potongan terpendek 4 cm dan terpanjang 324 cm, panjang tali mula-mula adalah...",
        ["484 cm", "480 cm", "500 cm", "440 cm"], "A",
        "$a = 4, ar^4 = 324 \\implies r^4 = 81 \\implies r = 3$. Panjang total $= S_5 = \\frac{4(3^5 - 1)}{3 - 1} = 2(243 - 1) = 484$ cm.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $r^4 = 81 \\implies r = 3$\n2. $S_5 = \\frac{4(242)}{2} = 484\\text{ cm}$ (Opsi A)."
    ),
    make_q(
        "sma12-b1-18", "Tantangan",
        "Suatu deret geometri tak hingga konvergen memiliki jumlah $S_\\infty = 12$ dan suku pertama $a = 8$. Jumlah seluruh suku pada urutan bernomor genap ($U_2 + U_4 + U_6 + \\dots$) adalah...",
        ["3", "4", "\\frac{8}{3}", "2"], "A",
        "$12 = \\frac{8}{1 - r} \\implies 1 - r = \\frac{8}{12} = \\frac{2}{3} \\implies r = \\frac{1}{3}$. Suku pertama genap: $U_2 = 8 \\times \\frac{1}{3} = \\frac{8}{3}$. Rasio genap $= r^2 = \\frac{1}{9}$. $S_{\\text{genap}} = \\frac{\\frac{8}{3}}{1 - \\frac{1}{9}} = \\frac{\\frac{8}{3}}{\\frac{8}{9}} = 3$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$S_{\\text{genap}} = \\frac{U_2}{1 - r^2} = \\frac{\\frac{8}{3}}{\\frac{8}{9}} = 3$$ (Opsi A)."
    ),
    make_q(
        "sma12-b1-19", "Tantangan",
        "Diketahui barisan geometri dengan $U_1 + U_2 + U_3 = 26$ dan $U_1 \\times U_2 \\times U_3 = 216$. Nilai rasio $r$ yang lebih besar dari 1 adalah...",
        ["3", "2", "4", "\\frac{3}{2}"], "A",
        "$(U_2)^3 = 216 \\implies U_2 = 6$. Maka $\\frac{6}{r} + 6 + 6r = 26 \\implies 6r^2 - 20r + 6 = 0 \\implies 3r^2 - 10r + 3 = 0 \\implies (3r - 1)(r - 3) = 0 \\implies r = 3$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $U_2 = 6$\n2. $\\frac{6}{r} + 6r = 20 \\implies 3r^2 - 10r + 3 = 0 \\implies r = 3$ (Opsi A)."
    ),
    make_q(
        "sma12-b1-20", "Tantangan",
        "Nilai dari $\\sum_{k=1}^{20} (4k - 3)$ adalah...",
        ["780", "800", "760", "820"], "A",
        "Deret aritmetika dengan $a = 4(1) - 3 = 1$, $U_{20} = 4(20) - 3 = 77$. $S_{20} = \\frac{20}{2}(1 + 77) = 10(78) = 780$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$S_{20} = 10 \\times (1 + 77) = 780$$ (Opsi A)."
    )
]

# =========================================================================
# BAB 2: Investasi dan Pinjaman (Existing: 5 -> Add 15 -> Total: 20)
# =========================================================================
b2_add = [
    # Paket 2: Sedang (Soal 6-10)
    make_q(
        "sma12-b2-6", "Sedang",
        "Modal sebesar Rp10.000.000,00 dibungakan dengan bunga tunggal 8% per tahun. Besar bunga yang diperoleh setelah 3 tahun adalah...",
        ["Rp2.400.000,00", "Rp2.597.120,00", "Rp2.000.000,00", "Rp1.800.000,00"], "A",
        "Bunga tunggal: $B = M \\times i \\times t = 10.000.000 \\times 0{,}08 \\times 3 = 2.400.000$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$B = 10.000.000 \\times 0{,}08 \\times 3 = 2.400.000\\text{ rupiah}$$ (Opsi A)."
    ),
    make_q(
        "sma12-b2-7", "Sedang",
        "Modal sebesar Rp5.000.000,00 diinvestasikan dengan suku bunga majemuk 10% per tahun. Nilai akhir modal setelah 2 tahun adalah...",
        ["Rp6.050.000,00", "Rp6.000.000,00", "Rp6.100.000,00", "Rp5.950.000,00"], "A",
        "Bunga majemuk: $M_2 = M(1 + i)^2 = 5.000.000 \\times (1{,}10)^2 = 5.000.000 \\times 1{,}21 = 6.050.000$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$M_2 = 5.000.000 \\times 1{,}21 = 6.050.000\\text{ rupiah}$$ (Opsi A)."
    ),
    make_q(
        "sma12-b2-8", "Sedang",
        "Pada sistem anuitas, setiap pembayaran anuitas ($A$) terdiri dari komponen...",
        ["Angsuran pokok dan bunga", "Bunga murni dan denda", "Biaya administrasi dan premi", "Modal awal dan dividen"], "A",
        "Anuitas merupakan gabungan dari angsuran pokok pinjaman ($a_t$) dan bunga ($b_t$): $A = a_t + b_t$.",
        "**Langkah Penyelesaian Terstruktur:**\nAnuitas terdiri dari **angsuran pokok dan bunga** (Opsi A)."
    ),
    make_q(
        "sma12-b2-9", "Sedang",
        "Suatu pinjaman diangsur dengan anuitas sebesar Rp850.000,00 per bulan. Jika bunga pada bulan pertama adalah Rp250.000,00, maka besar angsuran pokok pada bulan pertama adalah...",
        ["Rp600.000,00", "Rp1.100.000,00", "Rp550.000,00", "Rp650.000,00"], "A",
        "Angsuran pokok: $a_1 = A - b_1 = 850.000 - 250.000 = 600.000$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$a_1 = 850.000 - 250.000 = 600.000\\text{ rupiah}$$ (Opsi A)."
    ),
    make_q(
        "sma12-b2-10", "Sedang",
        "Modal sebesar Rp20.000.000,00 didepositokan dengan bunga majemuk 6% per tahun yang dibayarkan setiap semester (setengah tahun). Suku bunga per semester yang digunakan adalah...",
        ["3%", "6%", "1,5%", "12%"], "A",
        "Bunga per semester $= \\frac{6\\%}{2} = 3\\%$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$i_{\\text{semester}} = \\frac{6\\%}{2} = 3\\%$$ (Opsi A)."
    ),
    # Paket 3: Aplikasi & Terapan (Soal 11-15)
    make_q(
        "sma12-b2-11", "Sedang",
        "Pak Dani meminjam uang sebesar Rp12.000.000,00 di koperasi dengan suku bunga majemuk 1% per bulan. Jika pinjaman dilunasi dengan anuitas bulanan Rp1.100.000,00, berapakah besar bunga pada bulan pertama?",
        ["Rp120.000,00", "Rp100.000,00", "Rp150.000,00", "Rp110.000,00"], "A",
        "Bunga bulan pertama: $b_1 = M \\times i = 12.000.000 \\times 0{,}01 = 120.000$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$b_1 = 12.000.000 \\times 0{,}01 = 120.000\\text{ rupiah}$$ (Opsi A)."
    ),
    make_q(
        "sma12-b2-12", "Sedang",
        "Dari soal sebelumnya, besar angsuran pokok pada bulan pertama adalah...",
        ["Rp980.000,00", "Rp1.000.000,00", "Rp920.000,00", "Rp950.000,00"], "A",
        "$a_1 = A - b_1 = 1.100.000 - 120.000 = 980.000$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$a_1 = 1.100.000 - 120.000 = 980.000\\text{ rupiah}$$ (Opsi A)."
    ),
    make_q(
        "sma12-b2-13", "Sedang",
        "Sisa pinjaman Pak Dani setelah pembayaran angsuran bulan pertama adalah...",
        ["Rp11.020.000,00", "Rp10.900.000,00", "Rp11.000.000,00", "Rp11.120.000,00"], "A",
        "Sisa pinjaman: $S_1 = M - a_1 = 12.000.000 - 980.000 = 11.020.000$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$S_1 = 12.000.000 - 980.000 = 11.020.000\\text{ rupiah}$$ (Opsi A)."
    ),
    make_q(
        "sma12-b2-14", "Sedang",
        "Nilai tunai dari modal Rp13.310.000,00 yang akan diterima 3 tahun mendatang dengan suku bunga majemuk 10% per tahun adalah...",
        ["Rp10.000.000,00", "Rp9.500.000,00", "Rp11.000.000,00", "Rp10.500.000,00"], "A",
        "Nilai tunai: $M_0 = \\frac{M_t}{(1 + i)^t} = \\frac{13.310.000}{(1{,}1)^3} = \\frac{13.310.000}{1{,}331} = 10.000.000$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$M_0 = \\frac{13.310.000}{1{,}331} = 10.000.000\\text{ rupiah}$$ (Opsi A)."
    ),
    make_q(
        "sma12-b2-15", "Sedang",
        "Seseorang menabung di bank sebesar Rp1.000.000,00 setiap awal tahun selama 3 tahun dengan suku bunga majemuk 10% per tahun. Nilai akumulasi tabungan pada akhir tahun ke-3 adalah...",
        ["Rp3.641.000,00", "Rp3.310.000,00", "Rp3.500.000,00", "Rp3.200.000,00"], "A",
        "Tabungan 1: $1.000.000(1{,}1)^3 = 1.331.000$. Tabungan 2: $1.000.000(1{,}1)^2 = 1.210.000$. Tabungan 3: $1.000.000(1{,}1) = 1.100.000$. Total $= 3.641.000$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$S = 1.331.000 + 1.210.000 + 1.100.000 = 3.641.000\\text{ rupiah}$$ (Opsi A)."
    ),
    # Paket 4: Tantangan & Analisis (Soal 16-20)
    make_q(
        "sma12-b2-16", "Tantangan",
        "Hubungan antara angsuran ke-$k$ ($a_k$) dengan angsuran pertama ($a_1$) pada sistem anuitas dengan suku bunga majemuk $i$ dirumuskan oleh...",
        ["a_k = a_1 (1 + i)^{k - 1}", "a_k = a_1 (1 + i)^k", "a_k = a_1 + (k - 1)i", "a_k = a_1 (1 - i)^k"], "A",
        "Angsuran pokok pada sistem anuitas membentuk barisan geometri dengan rasio $(1 + i)$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$a_k = a_1 (1 + i)^{k - 1}$$ (Opsi A)."
    ),
    make_q(
        "sma12-b2-17", "Tantangan",
        "Suatu pinjaman dilunasi dengan anuitas tahunan. Jika angsuran ke-2 adalah Rp420.000,00 dan suku bunga majemuk 5% per tahun, maka besar angsuran ke-4 adalah...",
        ["Rp463.050,00", "Rp460.000,00", "Rp450.000,00", "Rp470.000,00"], "A",
        "$a_4 = a_2 (1 + i)^{4 - 2} = 420.000 \\times (1{,}05)^2 = 420.000 \\times 1{,}1025 = 463.050$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$a_4 = 420.000 \\times (1{,}05)^2 = 463.050\\text{ rupiah}$$ (Opsi A)."
    ),
    make_q(
        "sma12-b2-18", "Tantangan",
        "Pinjaman sebesar Rp50.000.000,00 akan dilunasi dengan 10 anuitas tahunan. Jika suku bunga 8% per tahun dan diketahui $(1{,}08)^{10} \\approx 2{,}1589$, maka besar anuitas tahunan yang dibayarkan adalah...",
        ["Rp7.451.475,00", "Rp7.200.000,00", "Rp7.650.000,00", "Rp7.100.000,00"], "A",
        "Rumus anuitas: $A = \\frac{M \\times i}{1 - (1+i)^{-n}} = \\frac{50.000.000 \\times 0{,}08}{1 - \\frac{1}{2{,}1589}} = \\frac{4.000.000}{0{,}5368} \\approx 7.451.475$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$A = \\frac{4.000.000}{1 - (1{,}08)^{-10}} \\approx 7.451.475\\text{ rupiah}$$ (Opsi A)."
    ),
    make_q(
        "sma12-b2-19", "Tantangan",
        "Rina menginvestasikan Rp10.000.000,00 pada produk reksa dana yang memberikan return rata-rata 12% per tahun (bunga majemuk tahunan). Berdasarkan Aturan 72 (Rule of 72), modal Rina akan bertumbuh menjadi dua kali lipat (Rp20.000.000,00) dalam waktu sekitar...",
        ["6 tahun", "5 tahun", "7 tahun", "8 tahun"], "A",
        "Aturan 72: Waktu penggandaan modal $\\approx \\frac{72}{\\text{suku bunga}} = \\frac{72}{12} = 6$ tahun.",
        "**Langkah Penyelesaian Terstruktur:**\n$$t \\approx \\frac{72}{12} = 6\\text{ tahun}$$ (Opsi A)."
    ),
    make_q(
        "sma12-b2-20", "Tantangan",
        "Pak Joko melunasi pinjaman anuitas bulanan. Pada bulan ke-5, bunga yang dibayarkan adalah Rp150.000,00 dan angsuran pokoknya adalah Rp800.000,00. Jika suku bunga pinjaman adalah 1,5% per bulan, besar saldo pinjaman sebelum pembayaran bulan ke-5 adalah...",
        ["Rp10.000.000,00", "Rp9.200.000,00", "Rp10.800.000,00", "Rp8.500.000,00"], "A",
        "Bunga bulan ke-5: $b_5 = S_4 \\times i \\implies 150.000 = S_4 \\times 0{,}015 \\implies S_4 = \\frac{150.000}{0{,}015} = 10.000.000$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$S_4 = \\frac{150.000}{0{,}015} = 10.000.000\\text{ rupiah}$$ (Opsi A)."
    )
]

# =========================================================================
# BAB 3: Kaidah Pencacahan (Existing: 5 -> Add 15 -> Total: 20)
# =========================================================================
b3_add = [
    # Paket 2: Sedang (Soal 6-10)
    make_q(
        "sma12-b3-6", "Sedang",
        "Dari kota A ke kota B ada 3 jalan, dan dari kota B ke kota C ada 4 jalan. Banyaknya cara seseorang dapat bepergian dari kota A ke kota C melalui kota B adalah...",
        ["12 cara", "7 cara", "14 cara", "24 cara"], "A",
        "Aturan perkalian: $3 \\times 4 = 12$ cara.",
        "**Langkah Penyelesaian Terstruktur:**\n$$3 \\times 4 = 12\\text{ cara}$$ (Opsi A)."
    ),
    make_q(
        "sma12-b3-7", "Sedang",
        "Banyaknya susunan kata berbeda yang dapat dibentuk dari huruf-huruf pembentuk kata 'KATAK' adalah...",
        ["30 susunan", "60 susunan", "120 susunan", "20 susunan"], "A",
        "Permutasi dengan unsur sama: total 5 huruf (K=2, A=2, T=1). $P = \\frac{5!}{2! \\times 2!} = \\frac{120}{4} = 30$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{5!}{2! \\times 2!} = \\frac{120}{4} = 30\\text{ susunan}$$ (Opsi A)."
    ),
    make_q(
        "sma12-b3-8", "Sedang",
        "Banyaknya cara 5 orang duduk melingkar mengelilingi meja bundar adalah...",
        ["24 cara", "120 cara", "60 cara", "12 cara"], "A",
        "Permutasi siklis: $P_{\\text{siklis}} = (n - 1)! = (5 - 1)! = 4! = 24$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$P = (5 - 1)! = 4! = 24\\text{ cara}$$ (Opsi A)."
    ),
    make_q(
        "sma12-b3-9", "Sedang",
        "Nilai dari kombinasi $C(8, 3)$ adalah...",
        ["56", "336", "28", "64"], "A",
        "Rumus kombinasi: $C(8, 3) = \\frac{8!}{3!(8 - 3)!} = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = 56$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$C(8, 3) = \\frac{8 \\times 7 \\times 6}{6} = 56$$ (Opsi A)."
    ),
    make_q(
        "sma12-b3-10", "Sedang",
        "Dari 10 orang siswa calon pengurus OSIS, akan dipilih 3 orang untuk menjadi Ketua, Sekretaris, dan Bendahara. Banyak susunan pengurus yang mungkin terbentuk adalah...",
        ["720 susunan", "120 susunan", "240 susunan", "360 susunan"], "A",
        "Karena memperhatikan urutan jabatan, gunakan permutasi: $P(10, 3) = 10 \\times 9 \\times 8 = 720$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$P(10, 3) = 10 \\times 9 \\times 8 = 720$$ (Opsi A)."
    ),
    # Paket 3: Aplikasi & Terapan (Soal 11-15)
    make_q(
        "sma12-b3-11", "Sedang",
        "Dari 12 orang anggota tim bola basket, akan dipilih 5 orang pemain inti. Banyaknya cara pemilihan pemain inti tersebut adalah...",
        ["792 cara", "95.040 cara", "360 cara", "120 cara"], "A",
        "Tanpa memperhatikan urutan posisi: $C(12, 5) = \\frac{12 \\times 11 \\times 10 \\times 9 \\times 8}{5 \\times 4 \\times 3 \\times 2 \\times 1} = 792$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$C(12, 5) = 792\\text{ cara}$$ (Opsi A)."
    ),
    make_q(
        "sma12-b3-12", "Sedang",
        "Dari angka-angka 1, 2, 3, 4, 5, 6 akan disusun bilangan ratusan (3 digit) tanpa ada angka yang berulang. Banyaknya bilangan ganjil yang dapat dibentuk adalah...",
        ["60 bilangan", "120 bilangan", "40 bilangan", "30 bilangan"], "A",
        "Digit satuan harus ganjil (1, 3, 5) ada 3 pilihan. Digit ratusan ada 5 sisa angka. Digit puluhan ada 4 sisa angka. Total $= 5 \\times 4 \\times 3 = 60$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Banyak bilangan} = 5 \\times 4 \\times 3 = 60$$ (Opsi A)."
    ),
    make_q(
        "sma12-b3-13", "Sedang",
        "Dalam suatu ruangan terdapat 10 orang yang belum saling mengenal. Jika setiap orang saling bersalaman satu kali, banyak jabat tangan yang terjadi adalah...",
        ["45 jabat tangan", "90 jabat tangan", "50 jabat tangan", "20 jabat tangan"], "A",
        "Salaman melibatkan 2 orang: $C(10, 2) = \\frac{10 \\times 9}{2} = 45$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$C(10, 2) = \\frac{10 \\times 9}{2} = 45$$ (Opsi A)."
    ),
    make_q(
        "sma12-b3-14", "Sedang",
        "Sebuah kantong berisi 7 kelereng merah dan 5 kelereng putih. Banyak cara mengambil 3 kelereng merah dan 2 kelereng putih sekaligus adalah...",
        ["350 cara", "120 cara", "210 cara", "180 cara"], "A",
        "Aturan perkalian kombinasi: $C(7, 3) \\times C(5, 2) = 35 \\times 10 = 350$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$C(7, 3) \\times C(5, 2) = 35 \\times 10 = 350\\text{ cara}$$ (Opsi A)."
    ),
    make_q(
        "sma12-b3-15", "Sedang",
        "Banyaknya susunan huruf berbeda yang dapat dibentuk dari kata 'MATEMATIKA' adalah...",
        ["151.200 susunan", "302.400 susunan", "75.600 susunan", "50.400 susunan"], "A",
        "Total 10 huruf (M=2, A=3, T=2, E=1, I=1, K=1). $P = \\frac{10!}{2! \\times 3! \\times 2!} = \\frac{3.628.800}{24} = 151.200$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{10!}{2! \\times 3! \\times 2!} = 151.200$$ (Opsi A)."
    ),
    # Paket 4: Tantangan & Analisis (Soal 16-20)
    make_q(
        "sma12-b3-16", "Tantangan",
        "Tujuh orang duduk melingkar pada meja bundar. Jika 2 orang tertentu harus selalu duduk berdampingan, banyak susunan duduk yang mungkin adalah...",
        ["240 cara", "120 cara", "720 cara", "144 cara"], "A",
        "Anggap 2 orang sebagai 1 kesatuan $\\implies$ ada 6 elemen. Siklis: $(6 - 1)! = 5! = 120$. Posisi 2 orang bisa bertukar $2! = 2$. Total $= 120 \\times 2 = 240$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$P = (6 - 1)! \\times 2! = 120 \\times 2 = 240\\text{ cara}$$ (Opsi A)."
    ),
    make_q(
        "sma12-b3-17", "Tantangan",
        "Dari angka-angka 0, 1, 2, 3, 4, 5 akan dibentuk bilangan genap yang terdiri dari 3 digit berbeda. Banyaknya bilangan genap yang dapat dibentuk adalah...",
        ["52 bilangan", "60 bilangan", "48 bilangan", "56 bilangan"], "A",
        "Kasus 1: Satuan 0 $\\implies 5 \\times 4 \\times 1 = 20$. Kasus 2: Satuan 2 atau 4 (2 pilihan) $\\implies 4$ (karena 0 tidak boleh di depan) $\\times 4 \\times 2 = 32$. Total $= 20 + 32 = 52$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Satuan 0: $5 \\times 4 \\times 1 = 20$\n2. Satuan 2 atau 4: $4 \\times 4 \\times 2 = 32$\nTotal $= 20 + 32 = 52$ (Opsi A)."
    ),
    make_q(
        "sma12-b3-18", "Tantangan",
        "Dari 8 pria dan 6 wanita akan dibentuk panitia yang beranggotakan 5 orang dengan syarat tepat terdiri dari 3 pria dan 2 wanita. Banyaknya cara pemilihan panitia tersebut adalah...",
        ["840 cara", "720 cara", "960 cara", "640 cara"], "A",
        "Kombinasi 3 pria dari 8 dan 2 wanita dari 6: $C(8, 3) \\times C(6, 2) = 56 \\times 15 = 840$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$C(8, 3) \\times C(6, 2) = 56 \\times 15 = 840\\text{ cara}$$ (Opsi A)."
    ),
    make_q(
        "sma12-b3-19", "Tantangan",
        "Koefisien suku $x^3$ pada ekspansi binomial $(2x - 3)^5$ adalah...",
        ["720", "-720", "1.080", "-1.080"], "A",
        "Suku umum: $C(5, 2)(2x)^3(-3)^2 = 10 \\times (8x^3) \\times 9 = 720 x^3$. Koefisiennya adalah 720.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Suku} = C(5, 2)(2x)^3(-3)^2 = 10 \\times 8x^3 \\times 9 = 720x^3$$ (Opsi A)."
    ),
    make_q(
        "sma12-b3-20", "Tantangan",
        "Berapa banyak diagonal yang dimiliki oleh suatu poligon beraturan bersisi 12 (dodecagon)?",
        ["54 diagonal", "66 diagonal", "48 diagonal", "60 diagonal"], "A",
        "Banyak diagonal segi-$n$: $D = \\frac{n(n - 3)}{2} = \\frac{12 \\times 9}{2} = 54$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$D = \\frac{12(12 - 3)}{2} = 54\\text{ diagonal}$$ (Opsi A)."
    )
]

# =========================================================================
# BAB 4: Peluang (Existing: 5 -> Add 15 -> Total: 20)
# =========================================================================
b4_add = [
    # Paket 2: Sedang (Soal 6-10)
    make_q(
        "sma12-b4-6", "Sedang",
        "Dua buah dadu dilempar bersamaan satu kali. Peluang munculnya jumlah kedua mata dadu 6 atau 8 adalah...",
        ["\\frac{5}{18}", "\\frac{1}{4}", "\\frac{11}{36}", "\\frac{1}{3}"], "A",
        "Jumlah 6: 5 pasangan. Jumlah 8: 5 pasangan. Kejadian saling lepas: $P = \\frac{5 + 5}{36} = \\frac{10}{36} = \\frac{5}{18}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{5}{36} + \\frac{5}{36} = \\frac{10}{36} = \\frac{5}{18}$$ (Opsi A)."
    ),
    make_q(
        "sma12-b4-7", "Sedang",
        "Dari satu set kartu bridge (52 kartu), diambil satu kartu secara acak. Peluang terambilnya kartu berwarna merah atau kartu bergambar As adalah...",
        ["\\frac{7}{13}", "\\frac{1}{2}", "\\frac{15}{26}", "\\frac{8}{13}"], "A",
        "Kartu merah $= 26$, kartu As $= 4$, As merah $= 2$. $P = \\frac{26 + 4 - 2}{52} = \\frac{28}{52} = \\frac{7}{13}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$P(A \\cup B) = \\frac{26}{52} + \\frac{4}{52} - \\frac{2}{52} = \\frac{28}{52} = \\frac{7}{13}$$ (Opsi A)."
    ),
    make_q(
        "sma12-b4-8", "Sedang",
        "Dua kejadian $A$ dan $B$ saling bebas. Jika $P(A) = 0{,}4$ dan $P(B) = 0{,}5$, maka nilai $P(A \\cap B)$ adalah...",
        ["0,2", "0,9", "0,1", "0,45"], "A",
        "Dua kejadian saling bebas: $P(A \\cap B) = P(A) \\times P(B) = 0{,}4 \\times 0{,}5 = 0{,}2$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$P(A \\cap B) = 0{,}4 \\times 0{,}5 = 0{,}2$$ (Opsi A)."
    ),
    make_q(
        "sma12-b4-9", "Sedang",
        "Sebuah kantong berisi 4 bola merah dan 6 bola putih. Diambil 2 bola satu per satu tanpa pengembalian. Peluang kedua bola yang terambil berwarna merah adalah...",
        ["\\frac{2}{15}", "\\frac{4}{25}", "\\frac{1}{6}", "\\frac{3}{20}"], "A",
        "Peluang bola 1 merah $= \\frac{4}{10}$. Peluang bola 2 merah $= \\frac{3}{9}$. Peluang bersama $= \\frac{4}{10} \\times \\frac{3}{9} = \\frac{2}{5} \\times \\frac{1}{3} = \\frac{2}{15}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{4}{10} \\times \\frac{3}{9} = \\frac{2}{15}$$ (Opsi A)."
    ),
    make_q(
        "sma12-b4-10", "Sedang",
        "Peluang seorang siswa lulus ujian matematika adalah 0,8 dan peluang lulus fisika adalah 0,7. Jika kelulusan kedua mata pelajaran saling bebas, peluang siswa tersebut lulus matematika tetapi tidak lulus fisika adalah...",
        ["0,24", "0,56", "0,14", "0,06"], "A",
        "$P(M \\cap F') = P(M) \\times P(F') = 0{,}8 \\times (1 - 0{,}7) = 0{,}8 \\times 0{,}3 = 0{,}24$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$P = 0{,}8 \\times 0{,}3 = 0{,}24$$ (Opsi A)."
    ),
    # Paket 3: Aplikasi & Terapan (Soal 11-15)
    make_q(
        "sma12-b4-11", "Sedang",
        "Dalam sebuah kotak terdapat 5 kelereng merah dan 3 kelereng hijau. Diambil 2 kelereng sekaligus secara acak. Peluang terambil kelereng berbeda warna (1 merah dan 1 hijau) adalah...",
        ["\\frac{15}{28}", "\\frac{15}{56}", "\\frac{5}{14}", "\\frac{9}{28}"], "A",
        "Cara terambil 1M 1H: $C(5, 1) \\times C(3, 1) = 5 \\times 3 = 15$. Total cara $= C(8, 2) = 28$. Peluang $= \\frac{15}{28}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{C(5, 1) \\times C(3, 1)}{C(8, 2)} = \\frac{15}{28}$$ (Opsi A)."
    ),
    make_q(
        "sma12-b4-12", "Sedang",
        "Peluang bersyarat $P(A|B)$ didefinisikan sebagai...",
        ["\\frac{P(A \\cap B)}{P(B)}, \\text{ dengan } P(B) > 0", "P(A) \\times P(B)", "P(A) + P(B) - P(A \\cap B)", "\\frac{P(B)}{P(A)}"], "A",
        "Definisi peluang terjadinya A dengan syarat B telah terjadi: $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$$ (Opsi A)."
    ),
    make_q(
        "sma12-b4-13", "Sedang",
        "Sebuah dadu dilempar satu kali. Diketahui mata dadu yang muncul adalah bilangan genap. Peluang bahwa mata dadu yang muncul tersebut adalah bilangan prima adalah...",
        ["\\frac{1}{3}", "\\frac{1}{2}", "\\frac{1}{6}", "\\frac{2}{3}"], "A",
        "Ruang sampel bilangan genap $B = \\{2, 4, 6\\}$ (ada 3). Bilangan genap prima hanya $\\{2\\}$ (ada 1). Peluang $= \\frac{1}{3}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$P(\\text{Prima} | \\text{Genap}) = \\frac{n(\\{2\\})}{n(\\{2, 4, 6\\})} = \\frac{1}{3}$$ (Opsi A)."
    ),
    make_q(
        "sma12-b4-14", "Sedang",
        "Dalam suatu tes medis untuk penyakit langka, 99% orang yang sakit terdeteksi positif (sensitivitas), dan 5% orang yang sehat juga terdeteksi positif (false positive). Tingkat false positive 5% menunjukkan bahwa...",
        ["5% dari orang yang sebenarnya sehat mendapatkan hasil tes positif", "5% dari seluruh populasi menderita sakit", "Tes tersebut gagal mendeteksi 5% orang sakit", "95% orang sehat dipastikan sakit"], "A",
        "False positive adalah hasil positif semu pada individu yang sebenarnya sehat/negatif.",
        "**Langkah Penyelesaian Terstruktur:**\nFalse positive artinya **5% dari orang sehat mendapatkan hasil positif** (Opsi A)."
    ),
    make_q(
        "sma12-b4-15", "Sedang",
        "Sebuah kotak berisi 10 bola: 6 putih dan 4 hitam. Tiga bola diambil sekaligus secara acak. Peluang terambil minimal 1 bola hitam adalah...",
        ["\\frac{5}{6}", "\\frac{1}{6}", "\\frac{4}{5}", "\\frac{29}{30}"], "A",
        "Gunakan komplemen: $1 - P(\\text{semua putih}) = 1 - \\frac{C(6, 3)}{C(10, 3)} = 1 - \\frac{20}{120} = 1 - \\frac{1}{6} = \\frac{5}{6}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$P = 1 - \\frac{20}{120} = \\frac{5}{6}$$ (Opsi A)."
    ),
    # Paket 4: Tantangan & Analisis (Soal 16-20)
    make_q(
        "sma12-b4-16", "Tantangan",
        "Di sebuah kota, 60% penduduk membaca koran A, 40% membaca koran B, dan 25% membaca keduanya. Jika seorang penduduk dipilih acak dan ia diketahui membaca koran B, berapakah peluang ia juga membaca koran A?",
        ["\\frac{5}{8}", "\\frac{2}{5}", "\\frac{1}{2}", "\\frac{3}{5}"], "A",
        "Peluang bersyarat: $P(A|B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0{,}25}{0{,}40} = \\frac{25}{40} = \\frac{5}{8}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$P(A|B) = \\frac{0{,}25}{0{,}40} = \\frac{5}{8}$$ (Opsi A)."
    ),
    make_q(
        "sma12-b4-17", "Tantangan",
        "Dua buah mesin A dan B memproduksi komponen. Mesin A memproduksi 60% dan Mesin B memproduksi 40% dari total komponen. Persentase produk cacat dari mesin A adalah 2% dan dari mesin B adalah 4%. Jika diambil satu produk acak dan ternyata cacat, peluang produk tersebut berasal dari mesin A adalah...",
        ["\\frac{3}{7}", "\\frac{4}{7}", "\\frac{1}{2}", "\\frac{2}{5}"], "A",
        "Teorema Bayes: $P(C) = (0{,}6 \\times 0{,}02) + (0{,}4 \\times 0{,}04) = 0{,}012 + 0{,}016 = 0{,}028$. $P(A|C) = \\frac{0{,}012}{0{,}028} = \\frac{12}{28} = \\frac{3}{7}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$P(A|C) = \\frac{0{,}012}{0{,}028} = \\frac{3}{7}$$ (Opsi A)."
    ),
    make_q(
        "sma12-b4-18", "Tantangan",
        "Sebuah koin tak seimbang memiliki peluang muncul Gambar dua kali peluang muncul Angka ($P(G) = 2P(A)$). Jika koin tersebut dilempar 3 kali, peluang muncul tepat 2 Gambar adalah...",
        ["\\frac{4}{9}", "\\frac{8}{27}", "\\frac{12}{27}", "\\frac{1}{3}"], "A",
        "$P(G) = \\frac{2}{3}, P(A) = \\frac{1}{3}$. Peluang tepat 2G: $C(3, 2) \\times (\\frac{2}{3})^2 \\times \\frac{1}{3} = 3 \\times \\frac{4}{9} \\times \\frac{1}{3} = \\frac{4}{9}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$P = 3 \\times \\left(\\frac{2}{3}\\right)^2 \\times \\frac{1}{3} = \\frac{4}{9}$$ (Opsi A)."
    ),
    make_q(
        "sma12-b4-19", "Tantangan",
        "Dalam suatu permainan, peluang pemain A menang atas B dalam satu set adalah 0,6. Pertandingan dimenangkan oleh pemain yang pertama kali memenangkan 2 set. Peluang pemain A memenangkan pertandingan adalah...",
        ["0,648", "0,600", "0,720", "0,576"], "A",
        "A menang 2-0: $0{,}6^2 = 0{,}36$. A menang 2-1: (A-B-A atau B-A-A) $= 2 \\times (0{,}6 \\times 0{,}4 \\times 0{,}6) = 0{,}288$. Total $= 0{,}36 + 0{,}288 = 0{,}648$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Menang 2-0: $0{,}36$\n2. Menang 2-1: $2 \\times (0{,}6 \\times 0{,}4 \\times 0{,}6) = 0{,}288$\nTotal $= 0{,}648$ (Opsi A)."
    ),
    make_q(
        "sma12-b4-20", "Tantangan",
        "Lima orang berbelanja di toko dan masing-masing membawa payung. Saat pulang karena hujan reda, mereka mengambil payung secara acak. Peluang bahwa tidak ada seorang pun yang mengambil payungnya sendiri (derangement $D_5$) adalah...",
        ["\\frac{44}{120} = \\frac{11}{30}", "\\frac{1}{3}", "\\frac{2}{5}", "\\frac{9}{24}"], "A",
        "Rumus derangement: $D_5 = 5!(1 - \\frac{1}{1!} + \\frac{1}{2!} - \\frac{1}{3!} + \\frac{1}{4!} - \\frac{1}{5!}) = 120(\\frac{1}{2} - \\frac{1}{6} + \\frac{1}{24} - \\frac{1}{120}) = 60 - 20 + 5 - 1 = 44$. Peluang $= \\frac{44}{120} = \\frac{11}{30}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{D_5}{5!} = \\frac{44}{120} = \\frac{11}{30}$$ (Opsi A)."
    )
]

# Append
grade12Data["chapters"][0]["questions"].extend(b1_add)
grade12Data["chapters"][1]["questions"].extend(b2_add)
grade12Data["chapters"][2]["questions"].extend(b3_add)
grade12Data["chapters"][3]["questions"].extend(b4_add)

# Verify
for i, ch in enumerate(grade12Data["chapters"]):
    print(f"Bab {i+1} ({ch['id']}): {len(ch['questions'])} questions")

fileContent = f"""/**
 * Data Kurikulum Kelas 12 SMA (Fase F)
 * 4 Bab Wajib Resmi Sesuai Buku Siswa Matematika
 */

export const grade12Data = {json.dumps(grade12Data, indent=2, ensure_ascii=False)};
"""

with open(DATA_PATH, 'w', encoding='utf-8') as f:
    f.write(fileContent)

print("Successfully expanded grade12.js to 20 questions per chapter!")
