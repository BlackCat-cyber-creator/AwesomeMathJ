import json
import os
import re

DATA_PATH = 'src/data/grades/grade8.js'

with open(DATA_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

json_match = re.search(r'export\s+const\s+\w+\s*=\s*(\{[\s\S]*\});?\s*$', content)
if not json_match:
    raise ValueError("Could not extract grade8Data object")

grade8Data = json.loads(json_match.group(1))

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
# BAB 1: Bilangan Berpangkat (Existing: 4 -> Add 16 -> Total: 20)
# =========================================================================
b1_add = [
    # Paket 1: Dasar (Soal 5)
    make_q(
        "smp8-b1-5", "Dasar",
        "Bentuk sederhana dari operasi $(2^3)^4$ adalah...",
        ["2^{12}", "2^7", "2^{64}", "8^4"], "A",
        "Gunakan sifat pemangkatan bilangan berpangkat: $(a^m)^n = a^{m \\times n}$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Sesuai sifat eksponen $(a^m)^n = a^{m \\times n}$:\n$$(2^3)^4 = 2^{3 \\times 4} = 2^{12}$$\nHasil sederhananya adalah **$2^{12}$** (Opsi A)."
    ),
    # Paket 2: Sedang (Soal 6-10)
    make_q(
        "smp8-b1-6", "Sedang",
        "Nilai dari $5^{-3}$ adalah...",
        ["\\frac{1}{125}", "-\\frac{1}{125}", "-125", "\\frac{1}{15}"], "A",
        "Ingat definisi pangkat bulat negatif: $a^{-n} = \\frac{1}{a^n}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$5^{-3} = \\frac{1}{5^3} = \\frac{1}{125}$$\nNilainya adalah **$\\frac{1}{125}$** (Opsi A)."
    ),
    make_q(
        "smp8-b1-7", "Sedang",
        "Bentuk sederhana dari $\\frac{a^6 b^4}{a^2 b}$ adalah...",
        ["a^4 b^3", "a^3 b^4", "a^8 b^5", "a^4 b^4"], "A",
        "Kurangkan pangkat variabel yang sama: $a^{6-2} b^{4-1}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{a^6 b^4}{a^2 b^1} = a^{6-2} b^{4-1} = a^4 b^3$$\nBentuk sederhananya adalah **$a^4 b^3$** (Opsi A)."
    ),
    make_q(
        "smp8-b1-8", "Sedang",
        "Hasil penyederhanaan bentuk akar $\\sqrt{72}$ adalah...",
        ["6\\sqrt{2}", "3\\sqrt{8}", "2\\sqrt{6}", "4\\sqrt{3}"], "A",
        "Cari faktor kuadrat terbesar dari 72, yaitu $36 \\times 2$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\sqrt{72} = \\sqrt{36 \\times 2} = \\sqrt{36} \\times \\sqrt{2} = 6\\sqrt{2}$$\nHasil sederhananya adalah **$6\\sqrt{2}$** (Opsi A)."
    ),
    make_q(
        "smp8-b1-9", "Sedang",
        "Bentuk baku (notasi ilmiah) dari bilangan 0,0000056 adalah...",
        ["5{,}6 \\times 10^{-6}", "5{,}6 \\times 10^{-5}", "56 \\times 10^{-7}", "0{,}56 \\times 10^{-5}"], "A",
        "Geser koma desimal ke kanan sampai berada di antara 5 dan 6 (geser 6 kali).",
        "**Langkah Penyelesaian Terstruktur:**\n$$0{,}0000056 = 5{,}6 \\times 10^{-6}$$\nBentuk bakunya adalah **$5{,}6 \\times 10^{-6}$** (Opsi A)."
    ),
    make_q(
        "smp8-b1-10", "Sedang",
        "Hasil dari $2\\sqrt{3} + 5\\sqrt{3} - 4\\sqrt{3}$ adalah...",
        ["3\\sqrt{3}", "4\\sqrt{3}", "2\\sqrt{3}", "7\\sqrt{3}"], "A",
        "Jumlahkan dan kurangkan koefisien dari bentuk akar yang sejenis.",
        "**Langkah Penyelesaian Terstruktur:**\n$$(2 + 5 - 4)\\sqrt{3} = 3\\sqrt{3}$$\nHasilnya adalah **$3\\sqrt{3}$** (Opsi A)."
    ),
    # Paket 3: Terapan (Soal 11-15)
    make_q(
        "smp8-b1-11", "Sedang",
        "Nilai dari operasi perpangkatan $\\frac{4^3 \\times 2^4}{8^2}$ adalah...",
        ["16", "8", "32", "4"], "A",
        "Ubah semua basis menjadi bilangan pokok 2: $4 = 2^2$ dan $8 = 2^3$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Pembilang: $4^3 \\times 2^4 = (2^2)^3 \\times 2^4 = 2^6 \\times 2^4 = 2^{10}$\n2. Penyebut: $8^2 = (2^3)^2 = 2^6$\n3. Operasi: $\\frac{2^{10}}{2^6} = 2^{10-6} = 2^4 = 16$ (Opsi A)."
    ),
    make_q(
        "smp8-b1-12", "Sedang",
        "Bentuk rasional dari pecahan $\\frac{6}{\\sqrt{3}}$ adalah...",
        ["2\\sqrt{3}", "3\\sqrt{2}", "6\\sqrt{3}", "3\\sqrt{3}"], "A",
        "Kalikan pembilang dan penyebut dengan $\\frac{\\sqrt{3}}{\\sqrt{3}}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{6}{\\sqrt{3}} \\times \\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{6\\sqrt{3}}{3} = 2\\sqrt{3}$$\nBentuk rasionalnya adalah **$2\\sqrt{3}$** (Opsi A)."
    ),
    make_q(
        "smp8-b1-13", "Sedang",
        "Jarak bumi ke bulan adalah sekitar $384.000\\text{ km}$. Jika dituliskan dalam satuan meter dan bentuk notasi ilmiah baku, jarak tersebut adalah...",
        ["3{,}84 \\times 10^8\\text{ m}", "3{,}84 \\times 10^5\\text{ m}", "38{,}4 \\times 10^7\\text{ m}", "3{,}84 \\times 10^6\\text{ m}"], "A",
        "Ubah kilometer ke meter dengan mengalikan $10^3$, lalu nyatakan dalam notasi ilmiah.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $384.000\\text{ km} = 384.000.000\\text{ m}$\n2. Dalam notasi ilmiah: $3{,}84 \\times 10^8\\text{ m}$ (Opsi A)."
    ),
    make_q(
        "smp8-b1-14", "Sedang",
        "Hasil perkalian bentuk akar $\\sqrt{6} \\times \\sqrt{8}$ adalah...",
        ["4\\sqrt{3}", "2\\sqrt{12}", "3\\sqrt{4}", "4\\sqrt{2}"], "A",
        "Kalikan isi akar: $\\sqrt{48}$, lalu sederhanakan $48 = 16 \\times 3$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\sqrt{6 \\times 8} = \\sqrt{48} = \\sqrt{16 \\times 3} = 4\\sqrt{3}$$\nHasil sederhananya adalah **$4\\sqrt{3}$** (Opsi A)."
    ),
    make_q(
        "smp8-b1-15", "Sedang",
        "Sebuah bakteri membelah diri menjadi 2 setiap 20 menit. Jika mula-mula ada 15 bakteri, banyak bakteri setelah 2 jam adalah...",
        ["960", "480", "1.920", "240"], "A",
        "2 jam $= 120$ menit. Banyak pembelahan $n = 120 / 20 = 6$. Total $= 15 \\times 2^6$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $n = \\frac{120}{20} = 6$\n2. Banyak bakteri $= 15 \\times 2^6 = 15 \\times 64 = 960$ bakteri (Opsi A)."
    ),
    # Paket 4: Tantangan (Soal 16-20)
    make_q(
        "smp8-b1-16", "Tantangan",
        "Nilai dari $x$ yang memenuhi persamaan eksponen $3^{2x - 1} = 81$ adalah...",
        ["\\frac{5}{2}", "2", "3", "\\frac{3}{2}"], "A",
        "Ubah 81 menjadi basis 3: $81 = 3^4$, lalu samakan eksponennya.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $3^{2x - 1} = 3^4$\n2. $2x - 1 = 4 \\implies 2x = 5 \\implies x = \\frac{5}{2}$ (Opsi A)."
    ),
    make_q(
        "smp8-b1-17", "Tantangan",
        "Bentuk rasional dari pecahan $\\frac{4}{\\sqrt{5} - 1}$ adalah...",
        ["\\sqrt{5} + 1", "\\sqrt{5} - 1", "2(\\sqrt{5} + 1)", "\\frac{\\sqrt{5} + 1}{2}"], "A",
        "Kalikan dengan sekawan penyebut yaitu $\\frac{\\sqrt{5} + 1}{\\sqrt{5} + 1}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{4}{\\sqrt{5} - 1} \\times \\frac{\\sqrt{5} + 1}{\\sqrt{5} + 1} = \\frac{4(\\sqrt{5} + 1)}{5 - 1} = \\frac{4(\\sqrt{5} + 1)}{4} = \\sqrt{5} + 1$$ (Opsi A)."
    ),
    make_q(
        "smp8-b1-18", "Tantangan",
        "Hasil dari operasi $\\left(\\frac{2}{3}\\right)^{-2} + \\left(\\frac{1}{2}\\right)^{-3}$ adalah...",
        ["\\frac{41}{4}", "10", "\\frac{35}{4}", "12"], "A",
        "Ingat bahwa $\\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^n$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $\\left(\\frac{2}{3}\\right)^{-2} = \\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4}$\n2. $\\left(\\frac{1}{2}\\right)^{-3} = 2^3 = 8 = \\frac{32}{4}$\n3. $\\frac{9}{4} + \\frac{32}{4} = \\frac{41}{4} = 10{,}25$ (Opsi A)."
    ),
    make_q(
        "smp8-b1-19", "Tantangan",
        "Bentuk sederhana dari $\\sqrt{18} + \\sqrt{50} - \\sqrt{32}$ adalah...",
        ["4\\sqrt{2}", "3\\sqrt{2}", "5\\sqrt{2}", "2\\sqrt{2}"], "A",
        "Faktorkan masing-masing bentuk akar dengan bilangan kuadrat sempurna: $18=9\\times 2$, $50=25\\times 2$, $32=16\\times 2$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\sqrt{18} + \\sqrt{50} - \\sqrt{32} = 3\\sqrt{2} + 5\\sqrt{2} - 4\\sqrt{2} = (3 + 5 - 4)\\sqrt{2} = 4\\sqrt{2}$$ (Opsi A)."
    ),
    make_q(
        "smp8-b1-20", "Tantangan",
        "Sebuah ruangan laboratorium berukuran panjang $4 \\times 10^3\\text{ cm}$, lebar $3 \\times 10^3\\text{ cm}$, dan tinggi $2{,}5 \\times 10^2\\text{ cm}$. Volume udara di dalam ruangan tersebut dalam satuan meter kubik ($\\text{m}^3$) adalah...",
        ["300\\text{ m}^3", "30\\text{ m}^3", "3.000\\text{ m}^3", "30.000\\text{ m}^3"], "A",
        "Konversikan ukuran ke meter terlebih dahulu: $1\\text{ m} = 10^2\\text{ cm}$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Panjang $= 40\\text{ m}$, Lebar $= 30\\text{ m}$, Tinggi $= 2{,}5\\text{ m}$\n2. Volume $= 40 \\times 30 \\times 2{,}5 = 300\\text{ m}^3$ (Opsi A)."
    )
]

# =========================================================================
# BAB 2: Teorema Pythagoras (Existing: 4 -> Add 16 -> Total: 20)
# =========================================================================
b2_add = [
    # Paket 1: Dasar (Soal 5)
    make_q(
        "smp8-b2-5", "Dasar",
        "Diketahui sebuah segitiga siku-siku memiliki panjang sisi siku-siku 9 cm dan 12 cm. Panjang sisi miring (hipotenusa) segitiga tersebut adalah...",
        ["15 cm", "13 cm", "14 cm", "16 cm"], "A",
        "Gunakan rumus Pythagoras: $c = \\sqrt{a^2 + b^2}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$c = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15\\text{ cm}$$\nPanjang hipotenusa adalah **15 cm** (Opsi A)."
    ),
    # Paket 2: Sedang (Soal 6-10)
    make_q(
        "smp8-b2-6", "Sedang",
        "Di antara kelompok tiga bilangan berikut, manakah yang merupakan tripel Pythagoras?",
        ["7, 24, 25", "6, 8, 11", "9, 12, 16", "8, 15, 18"], "A",
        "Ujilah apakah kuadrat bilangan terbesar sama dengan jumlah kuadrat dua bilangan lainnya ($a^2 + b^2 = c^2$).",
        "**Langkah Penyelesaian Terstruktur:**\n$$7^2 + 24^2 = 49 + 576 = 625 = 25^2$$\nJadi, **7, 24, 25** adalah tripel Pythagoras (Opsi A)."
    ),
    make_q(
        "smp8-b2-7", "Sedang",
        "Sebuah segitiga memiliki sisi-sisi berukuran 8 cm, 15 cm, dan 17 cm. Jenis segitiga tersebut adalah...",
        ["Segitiga siku-siku", "Segitiga lancip", "Segitiga tumpul", "Segitiga sama kaki"], "A",
        "Bandingkan nilai $c^2$ dengan $a^2 + b^2$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$17^2 = 289$$\n$$8^2 + 15^2 = 64 + 225 = 289$$\nKarena $c^2 = a^2 + b^2$, segitiga tersebut adalah **segitiga siku-siku** (Opsi A)."
    ),
    make_q(
        "smp8-b2-8", "Sedang",
        "Sebuah tangga dengan panjang 10 meter disandarkan pada dinding tembok. Jika jarak ujung bawah tangga ke dinding adalah 6 meter, tinggi dinding yang dicapai tangga adalah...",
        ["8 meter", "7 meter", "9 meter", "8,5 meter"], "A",
        "Dinding dan tanah membentuk sudut siku-siku. Tinggi dinding $t = \\sqrt{10^2 - 6^2}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$t = \\sqrt{10^2 - 6^2} = \\sqrt{100 - 36} = \\sqrt{64} = 8\\text{ meter}$$\nTinggi dinding adalah **8 meter** (Opsi A)."
    ),
    make_q(
        "smp8-b2-9", "Sedang",
        "Pada segitiga siku-siku sama kaki dengan sudut $45^\\circ - 45^\\circ - 90^\\circ$, jika panjang sisi siku-sikunya 6 cm, maka panjang sisi miringnya adalah...",
        ["6\\sqrt{2} cm", "12 cm", "6\\sqrt{3} cm", "8 cm"], "A",
        "Perbandingan sisi pada segitiga siku-siku sama kaki adalah $1 : 1 : \\sqrt{2}$.",
        "**Langkah Penyelesaian Terstruktur:**\nPanjang hipotenusa $= 6 \\times \\sqrt{2} = 6\\sqrt{2}\\text{ cm}$ (Opsi A)."
    ),
    make_q(
        "smp8-b2-10", "Sedang",
        "Pada segitiga siku-siku dengan sudut $30^\\circ - 60^\\circ - 90^\\circ$, jika panjang sisi di depan sudut $30^\\circ$ adalah 5 cm, maka panjang hipotenusanya adalah...",
        ["10 cm", "5\\sqrt{3} cm", "15 cm", "10\\sqrt{3} cm"], "A",
        "Perbandingan sisi di depan sudut $30^\\circ : 60^\\circ : 90^\\circ$ adalah $1 : \\sqrt{3} : 2$.",
        "**Langkah Penyelesaian Terstruktur:**\nHipotenusa $= 2 \\times 5 = 10\\text{ cm}$ (Opsi A)."
    ),
    # Paket 3: Terapan (Soal 11-15)
    make_q(
        "smp8-b2-11", "Sedang",
        "Panjang diagonal suatu persegi panjang yang berukuran $16\\text{ cm} \\times 12\\text{ cm}$ adalah...",
        ["20 cm", "18 cm", "24 cm", "22 cm"], "A",
        "Diagonal persegi panjang membagi persegi panjang menjadi dua segitiga siku-siku: $d = \\sqrt{p^2 + l^2}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$d = \\sqrt{16^2 + 12^2} = \\sqrt{256 + 144} = \\sqrt{400} = 20\\text{ cm}$$\nPanjang diagonalnya adalah **20 cm** (Opsi A)."
    ),
    make_q(
        "smp8-b2-12", "Sedang",
        "Sebuah kapal berlayar dari pelabuhan ke arah utara sejauh 24 km, kemudian berbelok ke arah timur sejauh 10 km. Jarak terdekat kapal dari titik awal pelabuhan adalah...",
        ["26 km", "28 km", "34 km", "25 km"], "A",
        "Arah utara dan timur saling tegak lurus ($90^\\circ$). Jarak terdekat adalah hipotenusa: $s = \\sqrt{24^2 + 10^2}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$s = \\sqrt{24^2 + 10^2} = \\sqrt{576 + 100} = \\sqrt{676} = 26\\text{ km}$$\nJarak terdekatnya adalah **26 km** (Opsi A)."
    ),
    make_q(
        "smp8-b2-13", "Sedang",
        "Jarak antara titik $P(2, 3)$ dan titik $Q(6, 6)$ pada bidang koordinat Kartesius adalah...",
        ["5 satuan", "6 satuan", "7 satuan", "4 satuan"], "A",
        "Rumus jarak dua titik: $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$d = \\sqrt{(6 - 2)^2 + (6 - 3)^2} = \\sqrt{4^2 + 3^2} = \\sqrt{16 + 9} = 5$$\nJaraknya adalah **5 satuan** (Opsi A)."
    ),
    make_q(
        "smp8-b2-14", "Sedang",
        "Panjang diagonal sebuah persegi adalah $10\\text{ cm}$. Luas persegi tersebut adalah...",
        ["50 cm^2", "100 cm^2", "25 cm^2", "75 cm^2"], "A",
        "Rumus luas persegi dengan diagonal $d$ adalah $L = \\frac{1}{2} d^2$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$L = \\frac{1}{2} \\times 10^2 = \\frac{1}{2} \\times 100 = 50\\text{ cm}^2$$\nLuas persegi adalah **$50\\text{ cm}^2$** (Opsi A)."
    ),
    make_q(
        "smp8-b2-15", "Sedang",
        "Sebuah layang-layang terbang dengan panjang tali 25 meter. Jika jarak mendatar anak yang memegang tali ke titik tepat di bawah layang-layang adalah 15 meter, tinggi layang-layang dari tanah (abaikan tinggi anak) adalah...",
        ["20 meter", "18 meter", "22 meter", "19 meter"], "A",
        "Tinggi layang-layang adalah salah satu sisi tegak segitiga siku-siku: $t = \\sqrt{25^2 - 15^2}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$t = \\sqrt{625 - 225} = \\sqrt{400} = 20\\text{ meter}$$\nTinggi layang-layang adalah **20 meter** (Opsi A)."
    ),
    # Paket 4: Tantangan (Soal 16-20)
    make_q(
        "smp8-b2-16", "Tantangan",
        "Sebuah balok berukuran panjang 12 cm, lebar 4 cm, dan tinggi 3 cm. Panjang diagonal ruang balok tersebut adalah...",
        ["13 cm", "15 cm", "14 cm", "12\\sqrt{2} cm"], "A",
        "Rumus diagonal ruang balok: $d = \\sqrt{p^2 + l^2 + t^2}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$d = \\sqrt{12^2 + 4^2 + 3^2} = \\sqrt{144 + 16 + 9} = \\sqrt{169} = 13\\text{ cm}$$\nPanjang diagonal ruang balok adalah **13 cm** (Opsi A)."
    ),
    make_q(
        "smp8-b2-17", "Tantangan",
        "Keliling sebuah belah ketupat adalah 52 cm. Jika panjang salah satu diagonalnya 24 cm, luas belah ketupat tersebut adalah...",
        ["120 cm^2", "240 cm^2", "144 cm^2", "156 cm^2"], "A",
        "Sisi belah ketupat $s = 52 / 4 = 13$ cm. Setengah diagonal pertama $= 12$ cm. Cari setengah diagonal kedua dengan Pythagoras.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Sisi belah ketupat $s = 13\\text{ cm}$\n2. Setengah diagonal $d_2$: $\\sqrt{13^2 - 12^2} = \\sqrt{169 - 144} = 5\\text{ cm} \\implies d_2 = 10\\text{ cm}$\n3. Luas $= \\frac{1}{2} \\times d_1 \\times d_2 = \\frac{1}{2} \\times 24 \\times 10 = 120\\text{ cm}^2$ (Opsi A)."
    ),
    make_q(
        "smp8-b2-18", "Tantangan",
        "Diberikan segitiga dengan panjang sisi masing-masing 9 cm, 12 cm, dan 16 cm. Jenis segitiga tersebut berdasarkan besar sudutnya adalah...",
        ["Segitiga tumpul", "Segitiga lancip", "Segitiga siku-siku", "Segitiga sembarang lancip"], "A",
        "Hitung $c^2$ dan bandingkan dengan $a^2 + b^2$. Jika $c^2 > a^2 + b^2$, segitiga adalah tumpul.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Sisi terpanjang $c = 16 \\implies 16^2 = 256$\n2. $a^2 + b^2 = 9^2 + 12^2 = 81 + 144 = 225$\n3. Karena $256 > 225$ ($c^2 > a^2 + b^2$), segitiga tersebut adalah **segitiga tumpul** (Opsi A)."
    ),
    make_q(
        "smp8-b2-19", "Tantangan",
        "Pada trapesium sama kaki $ABCD$, panjang sisi sejajar $AB = 22\\text{ cm}$ dan $CD = 10\\text{ cm}$. Jika panjang sisi miringnya $10\\text{ cm}$, maka luas trapesium tersebut adalah...",
        ["128 cm^2", "160 cm^2", "96 cm^2", "140 cm^2"], "A",
        "Cari tinggi trapesium dengan Pythagoras pada salah satu segitiga di sisi samping.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Proyeksi alas: $\\frac{22 - 10}{2} = 6\\text{ cm}$\n2. Tinggi trapesium: $t = \\sqrt{10^2 - 6^2} = 8\\text{ cm}$\n3. Luas $= \\frac{22 + 10}{2} \\times 8 = 16 \\times 8 = 128\\text{ cm}^2$ (Opsi A)."
    ),
    make_q(
        "smp8-b2-20", "Tantangan",
        "Dua tiang berdiri tegak di atas tanah datar dengan jarak antartiang 12 meter. Tinggi tiang pertama 14 meter dan tiang kedua 9 meter. Panjang kawat penghubung kedua ujung tiang atas adalah...",
        ["13 meter", "15 meter", "14 meter", "12,5 meter"], "A",
        "Bentuk segitiga siku-siku dengan alas 12 m dan tinggi selisih kedua tiang ($14 - 9 = 5$ m).",
        "**Langkah Penyelesaian Terstruktur:**\n$$k = \\sqrt{12^2 + (14 - 9)^2} = \\sqrt{144 + 25} = \\sqrt{169} = 13\\text{ meter}$$\nPanjang kawat adalah **13 meter** (Opsi A)."
    )
]

# =========================================================================
# BAB 3: PLSV & PtLSV (Existing: 4 -> Add 16 -> Total: 20)
# =========================================================================
b3_add = [
    # Paket 1: Dasar (Soal 5)
    make_q(
        "smp8-b3-5", "Dasar",
        "Nilai $x$ yang memenuhi persamaan $4x - 7 = 13$ adalah...",
        ["5", "4", "6", "3"], "A",
        "Pindahkan konstanta ke ruas kanan lalu bagi dengan koefisien $x$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$4x = 13 + 7 \\implies 4x = 20 \\implies x = 5$$\nNilai $x$ adalah **5** (Opsi A)."
    ),
    # Paket 2: Sedang (Soal 6-10)
    make_q(
        "smp8-b3-6", "Sedang",
        "Penyelesaian dari persamaan $3(2x - 1) = 2(x + 6) + 1$ adalah...",
        ["4", "3", "5", "2"], "A",
        "Kalikan ke dalam kurung terlebih dahulu, lalu kumpulkan suku sejenis.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $6x - 3 = 2x + 12 + 1$\n2. $6x - 3 = 2x + 13$\n3. $6x - 2x = 13 + 3 \\implies 4x = 16 \\implies x = 4$ (Opsi A)."
    ),
    make_q(
        "smp8-b3-7", "Sedang",
        "Himpunan penyelesaian dari pertidaksamaan $2x - 5 < 7$ untuk $x$ bilangan bulat positif adalah...",
        ["{1, 2, 3, 4, 5}", "{1, 2, 3, 4, 5, 6}", "{0, 1, 2, 3, 4, 5}", "{1, 2, 3, 4}"], "A",
        "Selesaikan pertidaksamaan: $2x < 12 \\implies x < 6$. Bilangan bulat positif dimulai dari 1.",
        "**Langkah Penyelesaian Terstruktur:**\n$$2x < 12 \\implies x < 6$$\nKarena $x$ bilangan bulat positif: **{1, 2, 3, 4, 5}** (Opsi A)."
    ),
    make_q(
        "smp8-b3-8", "Sedang",
        "Penyelesaian dari pertidaksamaan $-3x + 4 \\le 19$ adalah...",
        ["x \\ge -5", "x \\le -5", "x \\ge 5", "x \\le 5"], "A",
        "Ingat aturan penting: membagi pertidaksamaan dengan bilangan negatif akan MEMBALIK tanda pertidaksamaan.",
        "**Langkah Penyelesaian Terstruktur:**\n$$-3x \\le 19 - 4 \\implies -3x \\le 15 \\implies x \\ge -5$$ (Opsi A)."
    ),
    make_q(
        "smp8-b3-9", "Sedang",
        "Penyelesaian dari persamaan pecahan $\\frac{x - 1}{2} = \\frac{2x + 1}{5}$ adalah...",
        ["7", "5", "6", "8"], "A",
        "Kalikan silang kedua ruas: $5(x - 1) = 2(2x + 1)$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$5x - 5 = 4x + 2 \\implies 5x - 4x = 2 + 5 \\implies x = 7$$\nNilai $x$ adalah **7** (Opsi A)."
    ),
    make_q(
        "smp8-b3-10", "Sedang",
        "Jumlah tiga bilangan bulat berurutan adalah 72. Bilangan terbesar dari ketiga bilangan tersebut adalah...",
        ["25", "24", "23", "26"], "A",
        "Misalkan tiga bilangan itu $n - 1, n, n + 1$. Jumlahnya adalah $3n = 72$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $3n = 72 \\implies n = 24$\n2. Ketiga bilangan: 23, 24, 25\n3. Bilangan terbesarnya adalah **25** (Opsi A)."
    ),
    # Paket 3: Terapan (Soal 11-15)
    make_q(
        "smp8-b3-11", "Sedang",
        "Keliling sebuah kebun berbentuk persegi panjang adalah 64 meter. Jika panjangnya 6 meter lebih panjang dari lebarnya, maka lebar kebun tersebut adalah...",
        ["13 meter", "19 meter", "14 meter", "12 meter"], "A",
        "Keliling $= 2(p + l) = 64 \\implies p + l = 32$. Substitusi $p = l + 6$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$(l + 6) + l = 32 \\implies 2l + 6 = 32 \\implies 2l = 26 \\implies l = 13\\text{ meter}$$ (Opsi A)."
    ),
    make_q(
        "smp8-b3-12", "Sedang",
        "Umur seorang ayah saat ini adalah 3 kali umur anaknya. Jika 4 tahun yang lalu jumlah umur mereka adalah 48 tahun, maka umur anak saat ini adalah...",
        ["14 tahun", "12 tahun", "15 tahun", "16 tahun"], "A",
        "Misalkan umur anak sekarang $x$, maka ayah $3x$. Empat tahun lalu: $(3x - 4) + (x - 4) = 48$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$4x - 8 = 48 \\implies 4x = 56 \\implies x = 14\\text{ tahun}$$ (Opsi A)."
    ),
    make_q(
        "smp8-b3-13", "Sedang",
        "Seorang pedagang membeli 5 kardus mie instan seharga Rp450.000,00. Jika tiap kardus berisi 40 bungkus mie dan ia ingin memperoleh keuntungan Rp50.000,00 secara keseluruhan, harga jual per bungkus mie adalah...",
        ["Rp2.500,00", "Rp2.250,00", "Rp2.750,00", "Rp2.400,00"], "A",
        "Total pendapatan yang diinginkan $= 450.000 + 50.000 = 500.000$. Total bungkus $= 5 \\times 40 = 200$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Harga per bungkus} = \\frac{500.000}{200} = \\text{Rp}2.500,00$$ (Opsi A)."
    ),
    make_q(
        "smp8-b3-14", "Sedang",
        "Sebuah mobil memerlukan 8 liter bensin untuk menempuh jarak 96 km. Jika mobil tersebut masih memiliki bensin sebanyak 15 liter di tangkinya, jarak maksimum yang dapat ditempuh mobil adalah...",
        ["180 km", "160 km", "175 km", "192 km"], "A",
        "Hitung konsumsi per liter $= 96 / 8 = 12$ km/liter, lalu kalikan dengan 15 liter.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Jarak} = 15 \\times 12 = 180\\text{ km}$$ (Opsi A)."
    ),
    make_q(
        "smp8-b3-15", "Sedang",
        "Sebuah segitiga memiliki panjang sisi-sisi $(x + 2)$ cm, $(2x - 1)$ cm, dan $(3x - 5)$ cm. Jika keliling segitiga tersebut tidak lebih dari 32 cm, batas nilai $x$ adalah...",
        ["x \\le 6", "x \\le 5", "x < 6", "x \\ge 6"], "A",
        "Keliling $= (x + 2) + (2x - 1) + (3x - 5) \\le 32$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$6x - 4 \\le 32 \\implies 6x \\le 36 \\implies x \\le 6$$ (Opsi A)."
    ),
    # Paket 4: Tantangan (Soal 16-20)
    make_q(
        "smp8-b3-16", "Tantangan",
        "Nilai $x$ yang memenuhi persamaan $\\frac{2x - 3}{3} - \\frac{x - 2}{2} = 1$ adalah...",
        ["6", "5", "4", "8"], "A",
        "Kalikan kedua ruas dengan 6 untuk menghilangkan penyebut.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $2(2x - 3) - 3(x - 2) = 6$\n2. $4x - 6 - 3x + 6 = 6 \\implies x = 6$ (Opsi A)."
    ),
    make_q(
        "smp8-b3-17", "Tantangan",
        "Himpunan penyelesaian dari $\\frac{1}{2}(x - 2) \\le \\frac{1}{3}(2x + 1)$ adalah...",
        ["x \\ge -8", "x \\le -8", "x \\ge 8", "x \\le 8"], "A",
        "Kalikan kedua ruas dengan 6 untuk mengeliminasi pecahan.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $3(x - 2) \\le 2(2x + 1)$\n2. $3x - 6 \\le 4x + 2$\n3. $3x - 4x \\le 2 + 6 \\implies -x \\le 8 \\implies x \\ge -8$ (Opsi A)."
    ),
    make_q(
        "smp8-b3-18", "Tantangan",
        "Sebuah bak air memiliki kapasitas 600 liter. Keran A dapat mengisi bak hingga penuh dalam 20 menit, sedangkan lubang pembuangan B dapat mengosongkan bak dalam 30 menit. Jika keran A dan lubang B terbuka bersamaan, waktu yang diperlukan untuk mengisi bak hingga penuh adalah...",
        ["60 menit", "45 menit", "50 menit", "40 menit"], "A",
        "Debit pengisian bersih $= \\frac{1}{20} - \\frac{1}{30} = \\frac{3 - 2}{60} = \\frac{1}{60}$ bagian/menit.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Laju netto} = \\frac{1}{20} - \\frac{1}{30} = \\frac{1}{60}\\text{ per menit}$$\nWaktu $= 60$ menit (Opsi A)."
    ),
    make_q(
        "smp8-b3-19", "Tantangan",
        "Jika $a$ dan $b$ adalah bilangan bulat positif sehingga persamaan $ax + 5 = 17$ memiliki penyelesaian $x = 3$, maka nilai dari $a$ adalah...",
        ["4", "3", "5", "6"], "A",
        "Substitusikan $x = 3$ ke dalam persamaan: $3a + 5 = 17$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$3a + 5 = 17 \\implies 3a = 12 \\implies a = 4$$ (Opsi A)."
    ),
    make_q(
        "smp8-b3-20", "Tantangan",
        "Suatu tempat parkir menampung 60 kendaraan yang terdiri atas motor dan mobil. Jumlah seluruh roda kendaraan adalah 160 buah. Jika tarif parkir motor Rp2.000,00 dan mobil Rp5.000,00, total pendapatan parkir adalah...",
        ["Rp180.000,00", "Rp160.000,00", "Rp150.000,00", "Rp200.000,00"], "A",
        "Misalkan banyak motor $= m$, maka mobil $= 60 - m$. Roda: $2m + 4(60 - m) = 160$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $2m + 240 - 4m = 160 \\implies 2m = 80 \\implies m = 40$ motor\n2. Banyak mobil $= 60 - 40 = 20$ mobil\n3. Pendapatan $= (40 \\times 2.000) + (20 \\times 5.000) = 80.000 + 100.000 = \\text{Rp}180.000,00$ (Opsi A)."
    )
]

# =========================================================================
# BAB 4: Relasi dan Fungsi (Existing: 4 -> Add 16 -> Total: 20)
# =========================================================================
b4_add = [
    # Paket 1: Dasar (Soal 5)
    make_q(
        "smp8-b4-5", "Dasar",
        "Suatu fungsi didefinisikan dengan rumus $f(x) = 3x - 5$. Nilai dari $f(4)$ adalah...",
        ["7", "9", "6", "8"], "A",
        "Substitusikan nilai $x = 4$ ke dalam rumus fungsi.",
        "**Langkah Penyelesaian Terstruktur:**\n$$f(4) = 3(4) - 5 = 12 - 5 = 7$$\nNilai dari $f(4)$ adalah **7** (Opsi A)."
    ),
    # Paket 2: Sedang (Soal 6-10)
    make_q(
        "smp8-b4-6", "Sedang",
        "Di antara himpunan pasangan berurutan berikut, manakah yang merupakan fungsi (pemetaan)?",
        ["{(1, a), (2, b), (3, c), (4, a)}", "{(1, a), (1, b), (2, c), (3, d)}", "{(2, 1), (2, 2), (2, 3), (2, 4)}", "{(1, 3), (2, 4), (2, 5), (3, 6)}"], "A",
        "Fungsi mensyaratkan setiap anggota domain (elemen pertama) dipasangkan tepat satu kali ke kodomain.",
        "**Langkah Penyelesaian Terstruktur:**\nPada himpunan {(1, a), (2, b), (3, c), (4, a)}, setiap elemen pertama (1, 2, 3, 4) muncul tepat satu kali. Jadi ini adalah **fungsi** (Opsi A)."
    ),
    make_q(
        "smp8-b4-7", "Sedang",
        "Diketahui himpunan $A = \\{1, 2, 3\\}$ dan himpunan $B = \\{a, b\\}$. Banyak pemetaan yang mungkin dari himpunan $A$ ke himpunan $B$ adalah...",
        ["8", "9", "6", "12"], "A",
        "Banyak pemetaan dari $A$ ke $B$ dirumuskan dengan $n(B)^{n(A)}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$n(A) = 3, \\quad n(B) = 2$$\nBanyak pemetaan $= n(B)^{n(A)} = 2^3 = 8$ (Opsi A)."
    ),
    make_q(
        "smp8-b4-8", "Sedang",
        "Suatu fungsi linear dinyatakan dengan rumus $g(x) = 5 - 2x$. Jika $g(a) = -7$, maka nilai $a$ adalah...",
        ["6", "-6", "5", "-5"], "A",
        "Buat persamaan $5 - 2a = -7$ lalu selesaikan untuk mencari $a$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$5 - 2a = -7 \\implies -2a = -12 \\implies a = 6$$ (Opsi A)."
    ),
    make_q(
        "smp8-b4-9", "Sedang",
        "Diketahui domain fungsi $f(x) = 2x + 3$ adalah $D = \\{-1, 0, 1, 2\\}$. Daerah hasil (range) fungsi tersebut adalah...",
        ["{1, 3, 5, 7}", "{2, 3, 4, 5}", "{1, 2, 3, 4}", "{0, 2, 4, 6}"], "A",
        "Hitung nilai fungsi untuk setiap anggota domain: $f(-1), f(0), f(1), f(2)$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $f(-1) = 2(-1) + 3 = 1$\n2. $f(0) = 3$\n3. $f(1) = 5$\n4. $f(2) = 7$\nRange $= \\{1, 3, 5, 7\\}$ (Opsi A)."
    ),
    make_q(
        "smp8-b4-10", "Sedang",
        "Banyaknya korespondensi satu-satu yang mungkin terjadi antara dua himpunan dengan masing-masing 4 anggota adalah...",
        ["24", "16", "12", "64"], "A",
        "Korespondensi satu-satu dengan $n$ anggota dirumuskan dengan $n! = n \\times (n-1) \\times \\dots \\times 1$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$4! = 4 \\times 3 \\times 2 \\times 1 = 24$$ (Opsi A)."
    ),
    # Paket 3: Terapan (Soal 11-15)
    make_q(
        "smp8-b4-11", "Sedang",
        "Diketahui fungsi $f(x) = ax + b$. Jika $f(2) = 7$ dan $f(4) = 13$, maka rumus fungsi $f(x)$ adalah...",
        ["f(x) = 3x + 1", "f(x) = 2x + 3", "f(x) = 3x - 1", "f(x) = 4x - 1"], "A",
        "Eliminasi nilai $a$ dengan mengurangkan persamaan $f(4) - f(2)$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $4a + b = 13$\n2. $2a + b = 7$\n3. $(4a - 2a) = 13 - 7 \\implies 2a = 6 \\implies a = 3$\n4. $2(3) + b = 7 \\implies b = 1$\nRumus fungsi: $f(x) = 3x + 1$ (Opsi A)."
    ),
    make_q(
        "smp8-b4-12", "Sedang",
        "Sebuah perusahaan taksi memberlakukan tarif awal Rp8.000,00 dan tarif tambahan Rp4.000,00 per kilometer. Jika seorang penumpang menempuh jarak $x$ km, rumus tarif taksi $T(x)$ dan total biaya untuk jarak 12 km adalah...",
        ["T(x) = 4.000x + 8.000, biaya Rp56.000,00", "T(x) = 8.000x + 4.000, biaya Rp100.000,00", "T(x) = 4.000x + 8.000, biaya Rp48.000,00", "T(x) = 12.000x, biaya Rp144.000,00"], "A",
        "Bentuk fungsi biaya linear: $T(x) = \\text{biaya per km} \\times x + \\text{tarif awal}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$T(x) = 4.000x + 8.000$$\n$$T(12) = 4.000(12) + 8.000 = 48.000 + 8.000 = \\text{Rp}56.000,00$$ (Opsi A)."
    ),
    make_q(
        "smp8-b4-13", "Sedang",
        "Jika $f(2x - 3) = 4x + 5$, maka nilai dari $f(5)$ adalah...",
        ["21", "25", "17", "19"], "A",
        "Samakan argumen di dalam kurung: $2x - 3 = 5 \\implies 2x = 8 \\implies x = 4$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $2x - 3 = 5 \\implies x = 4$\n2. Substitusikan $x = 4$: $f(5) = 4(4) + 5 = 16 + 5 = 21$ (Opsi A)."
    ),
    make_q(
        "smp8-b4-14", "Sedang",
        "Relasi dari himpunan $P = \\{2, 3, 4\\}$ ke himpunan $Q = \\{4, 6, 8\\}$ dinyatakan dengan himpunan pasangan berurutan $\\{(2, 4), (3, 6), (4, 8)\\}$. Aturan relasi yang tepat adalah...",
        ["Setengah dari", "Dua kali dari", "Faktor dari", "Kurang dari"], "A",
        "Perhatikan hubungan antara anggota pertama dan kedua: 2 adalah setengah dari 4, 3 adalah setengah dari 6.",
        "**Langkah Penyelesaian Terstruktur:**\nKarena $2 = \\frac{1}{2} \\times 4$, $3 = \\frac{1}{2} \\times 6$, $4 = \\frac{1}{2} \\times 8$, relasi tersebut adalah **setengah dari** (Opsi A)."
    ),
    make_q(
        "smp8-b4-15", "Sedang",
        "Suatu fungsi linear memiliki rumus $h(x) = px + q$. Jika $h(-2) = -11$ dan $h(3) = 9$, maka nilai dari $p + q$ adalah...",
        ["1", "2", "3", "-1"], "A",
        "Cari nilai $p$ dan $q$ terlebih dahulu dengan metode eliminasi/substitusi.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $3p + q = 9$ dan $-2p + q = -11$\n2. $3p - (-2p) = 9 - (-11) \\implies 5p = 20 \\implies p = 4$\n3. $3(4) + q = 9 \\implies q = -3$\n4. $p + q = 4 + (-3) = 1$ (Opsi A)."
    ),
    # Paket 4: Tantangan (Soal 16-20)
    make_q(
        "smp8-b4-16", "Tantangan",
        "Diketahui fungsi $f(x) = ax + b$. Jika $f(1) = 4$ dan $f(x + 2) - f(x) = 6$, maka nilai dari $f(5)$ adalah...",
        ["16", "15", "18", "14"], "A",
        "Perhatikan $f(x+2) - f(x) = a(x+2) + b - (ax + b) = 2a = 6 \\implies a = 3$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $2a = 6 \\implies a = 3$\n2. $f(1) = 3(1) + b = 4 \\implies b = 1$\n3. $f(x) = 3x + 1$\n4. $f(5) = 3(5) + 1 = 16$ (Opsi A)."
    ),
    make_q(
        "smp8-b4-17", "Tantangan",
        "Sebuah kolam renang diisi air melalui pompa air. Hubungan antara waktu pengisian $t$ (dalam jam) dan volume air $V$ (dalam liter) dinyatakan dengan $V(t) = 1.200t + 500$. Jika kapasitas maksimal kolam adalah 7.700 liter, waktu yang diperlukan hingga kolam penuh adalah...",
        ["6 jam", "5,5 jam", "6,5 jam", "7 jam"], "A",
        "Selesaikan persamaan $1.200t + 500 = 7.700$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$1.200t = 7.700 - 500 = 7.200 \\implies t = \\frac{7.200}{1.200} = 6\\text{ jam}$$ (Opsi A)."
    ),
    make_q(
        "smp8-b4-18", "Tantangan",
        "Fungsi $f$ dinyatakan dengan rumus $f(x) = x^2 - 4x + 3$. Nilai minimum dari fungsi tersebut adalah...",
        ["-1", "0", "-2", "3"], "A",
        "Gunakan koordinat titik puncak parabola: $x_p = -\\frac{b}{2a}$, lalu cari $f(x_p)$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $x_p = -\\frac{-4}{2(1)} = 2$\n2. Nilai minimum: $f(2) = 2^2 - 4(2) + 3 = 4 - 8 + 3 = -1$ (Opsi A)."
    ),
    make_q(
        "smp8-b4-19", "Tantangan",
        "Diketahui himpunan pasangan berurutan yang merupakan korespondensi satu-satu adalah $R = \\{(1, 4), (2, a), (3, 6), (4, 7)\\}$. Jika kodomainnya adalah $\\{4, 5, 6, 7\\}$, maka nilai $a$ adalah...",
        ["5", "4", "6", "7"], "A",
        "Pada korespondensi satu-satu, seluruh elemen kodomain harus digunakan tepat satu kali.",
        "**Langkah Penyelesaian Terstruktur:**\nElemen kodomain: {4, 5, 6, 7}. Elemen yang sudah berpasangan: 4, 6, 7. Maka nilai $a$ haruslah **5** (Opsi A)."
    ),
    make_q(
        "smp8-b4-20", "Tantangan",
        "Jika $f(x) = \\frac{2x + 1}{x - 3}$ dengan $x \\neq 3$, maka nilai $k$ yang memenuhi $f(k) = 5$ adalah...",
        ["\\frac{16}{3}", "5", "4", "\\frac{14}{3}"], "A",
        "Selesaikan persamaan $\\frac{2k + 1}{k - 3} = 5$ dengan mengalikan silang.",
        "**Langkah Penyelesaian Terstruktur:**\n$$2k + 1 = 5(k - 3) \\implies 2k + 1 = 5k - 15 \\implies 16 = 3k \\implies k = \\frac{16}{3}$$ (Opsi A)."
    )
]

# =========================================================================
# BAB 5: Persamaan Garis Lurus (Existing: 4 -> Add 16 -> Total: 20)
# =========================================================================
b5_add = [
    # Paket 1: Dasar (Soal 5)
    make_q(
        "smp8-b5-5", "Dasar",
        "Gradien garis dengan persamaan $y = 4x - 7$ adalah...",
        ["4", "-7", "-4", "\\frac{1}{4}"], "A",
        "Bentuk umum persamaan garis adalah $y = mx + c$, di mana $m$ adalah gradien.",
        "**Langkah Penyelesaian Terstruktur:**\nKoefisien di depan variabel $x$ adalah $m = 4$. Jadi gradiennya adalah **4** (Opsi A)."
    ),
    # Paket 2: Sedang (Soal 6-10)
    make_q(
        "smp8-b5-6", "Sedang",
        "Gradien garis yang melalui titik $A(2, 3)$ dan $B(6, 11)$ adalah...",
        ["2", "3", "\\frac{1}{2}", "4"], "A",
        "Rumus gradien dua titik: $m = \\frac{y_2 - y_1}{x_2 - x_1}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$m = \\frac{11 - 3}{6 - 2} = \\frac{8}{4} = 2$$\nGradien garis tersebut adalah **2** (Opsi A)."
    ),
    make_q(
        "smp8-b5-7", "Sedang",
        "Gradien garis dengan bentuk persamaan implisit $3x + 2y - 6 = 0$ adalah...",
        ["-\\frac{3}{2}", "\\frac{3}{2}", "-\\frac{2}{3}", "\\frac{2}{3}"], "A",
        "Ubah persamaan ke bentuk $y = mx + c$ atau gunakan rumus cepat $m = -\\frac{a}{b}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$2y = -3x + 6 \\implies y = -\\frac{3}{2}x + 3$$\nGradiennya adalah **$-\\frac{3}{2}$** (Opsi A)."
    ),
    make_q(
        "smp8-b5-8", "Sedang",
        "Titik potong garis $2x - 3y = 12$ dengan sumbu-X dan sumbu-Y berturut-turut adalah...",
        ["(6, 0) dan (0, -4)", "(0, 6) dan (-4, 0)", "(4, 0) dan (0, -6)", "(6, 0) dan (0, 4)"], "A",
        "Potong sumbu-X saat $y = 0$, potong sumbu-Y saat $x = 0$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Sumbu-X ($y=0$): $2x = 12 \\implies x = 6 \\implies (6, 0)$\n2. Sumbu-Y ($x=0$): $-3y = 12 \\implies y = -4 \\implies (0, -4)$ (Opsi A)."
    ),
    make_q(
        "smp8-b5-9", "Sedang",
        "Persamaan garis yang bergradien 3 dan melalui titik $(2, 5)$ adalah...",
        ["y = 3x - 1", "y = 3x + 1", "y = 3x - 5", "y = 2x + 1"], "A",
        "Gunakan rumus persamaan garis satu titik: $y - y_1 = m(x - x_1)$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$y - 5 = 3(x - 2) \\implies y - 5 = 3x - 6 \\implies y = 3x - 1$$ (Opsi A)."
    ),
    make_q(
        "smp8-b5-10", "Sedang",
        "Dua buah garis dikatakan saling sejajar jika...",
        ["Gradien kedua garis bernilai sama (m1 = m2)", "Hasil kali gradiennya bernilai -1 (m1 . m2 = -1)", "Kedua garis berpotongan di titik (0, 0)", "Jumlah gradiennya sama dengan 0"], "A",
        "Syarat dua garis sejajar adalah memiliki kemiringan (gradien) yang sama persis.",
        "**Langkah Penyelesaian Terstruktur:**\nDua garis sejajar jika memiliki kemiringan yang sama, yaitu **$m_1 = m_2$** (Opsi A)."
    ),
    # Paket 3: Terapan (Soal 11-15)
    make_q(
        "smp8-b5-11", "Sedang",
        "Persamaan garis yang melalui titik $(3, -2)$ dan sejajar dengan garis $y = 2x + 7$ adalah...",
        ["y = 2x - 8", "y = 2x + 8", "y = -2x - 8", "y = 2x - 4"], "A",
        "Karena sejajar, gradien garis baru adalah $m = 2$. Gunakan $y - y_1 = m(x - x_1)$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$y - (-2) = 2(x - 3) \\implies y + 2 = 2x - 6 \\implies y = 2x - 8$$ (Opsi A)."
    ),
    make_q(
        "smp8-b5-12", "Sedang",
        "Persamaan garis yang melalui titik $(1, 4)$ dan tegak lurus dengan garis $y = -\\frac{1}{3}x + 2$ adalah...",
        ["y = 3x + 1", "y = -3x + 7", "y = 3x - 1", "y = \\frac{1}{3}x + 4"], "A",
        "Garis tegak lurus: $m_1 \\times m_2 = -1 \\implies -\\frac{1}{3} \\times m_2 = -1 \\implies m_2 = 3$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$y - 4 = 3(x - 1) \\implies y - 4 = 3x - 3 \\implies y = 3x + 1$$ (Opsi A)."
    ),
    make_q(
        "smp8-b5-13", "Sedang",
        "Persamaan garis lurus yang melalui dua titik $A(1, 2)$ dan $B(3, 8)$ adalah...",
        ["y = 3x - 1", "y = 3x + 1", "y = 2x + 2", "y = 4x - 2"], "A",
        "Hitung gradien $m = \\frac{8 - 2}{3 - 1} = 3$, lalu masukkan ke salah satu titik.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $m = \\frac{8 - 2}{3 - 1} = \\frac{6}{2} = 3$\n2. $y - 2 = 3(x - 1) \\implies y = 3x - 1$ (Opsi A)."
    ),
    make_q(
        "smp8-b5-14", "Sedang",
        "Sebuah mobil bergerak dengan kecepatan tetap. Jarak tempuh $s$ (km) setelah waktu $t$ (jam) dinyatakan oleh garis lurus pada grafik koordinat. Jika pada $t = 2$ jaraknya 120 km dan pada $t = 5$ jaraknya 300 km, kecepatan tetap mobil tersebut (gradien garis) adalah...",
        ["60 km/jam", "50 km/jam", "70 km/jam", "80 km/jam"], "A",
        "Kecepatan adalah gradien garis jarak-waktu: $v = \\frac{s_2 - s_1}{t_2 - t_1}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$v = \\frac{300 - 120}{5 - 2} = \\frac{180}{3} = 60\\text{ km/jam}$$ (Opsi A)."
    ),
    make_q(
        "smp8-b5-15", "Sedang",
        "Titik $P(a, 5)$ terletak pada garis $2x + 3y = 19$. Nilai dari $a$ adalah...",
        ["2", "3", "1", "4"], "A",
        "Substitusikan titik $(a, 5)$ ke dalam persamaan garis.",
        "**Langkah Penyelesaian Terstruktur:**\n$$2a + 3(5) = 19 \\implies 2a + 15 = 19 \\implies 2a = 4 \\implies a = 2$$ (Opsi A)."
    ),
    # Paket 4: Tantangan (Soal 16-20)
    make_q(
        "smp8-b5-16", "Tantangan",
        "Titik potong antara garis $y = 2x - 1$ dan garis $x + y = 5$ adalah...",
        ["(2, 3)", "(3, 2)", "(1, 4)", "(4, 1)"], "A",
        "Substitusikan persamaan pertama ke persamaan kedua: $x + (2x - 1) = 5$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $3x - 1 = 5 \\implies 3x = 6 \\implies x = 2$\n2. $y = 2(2) - 1 = 3$\nTitik potongnya adalah **(2, 3)** (Opsi A)."
    ),
    make_q(
        "smp8-b5-17", "Tantangan",
        "Persamaan garis yang melalui titik $(4, -1)$ dan tegak lurus terhadap garis $2x - 5y + 10 = 0$ adalah...",
        ["5x + 2y - 18 = 0", "5x - 2y - 22 = 0", "2x + 5y - 3 = 0", "5x + 2y + 18 = 0"], "A",
        "Gradien garis pertama $m_1 = \\frac{2}{5}$. Karena tegak lurus, $m_2 = -\\frac{5}{2}$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $m_2 = -\\frac{5}{2}$\n2. $y - (-1) = -\\frac{5}{2}(x - 4) \\implies 2(y + 1) = -5(x - 4)$\n3. $2y + 2 = -5x + 20 \\implies 5x + 2y - 18 = 0$ (Opsi A)."
    ),
    make_q(
        "smp8-b5-18", "Tantangan",
        "Luas daerah segitiga yang dibentuk oleh garis $3x + 4y = 24$, sumbu-X, dan sumbu-Y adalah...",
        ["24 satuan luas", "12 satuan luas", "48 satuan luas", "36 satuan luas"], "A",
        "Cari titik potong garis dengan kedua sumbu koordinat sebagai panjang alas dan tinggi segitiga.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Potong sumbu-X: $3x = 24 \\implies x = 8 \\implies \\text{alas} = 8$\n2. Potong sumbu-Y: $4y = 24 \\implies y = 6 \\implies \\text{tinggi} = 6$\n3. Luas $= \\frac{1}{2} \\times 8 \\times 6 = 24\\text{ satuan luas}$ (Opsi A)."
    ),
    make_q(
        "smp8-b5-19", "Tantangan",
        "Garis $g$ melalui titik $(2, k)$ dan $(4, 7)$ memiliki gradien yang sama dengan garis yang melalui titik $(-1, 1)$ dan $(1, 5)$. Nilai dari $k$ adalah...",
        ["3", "4", "2", "5"], "A",
        "Hitung gradien kedua titik yang diketahui, lalu samakan.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Gradien pembanding: $m = \\frac{5 - 1}{1 - (-1)} = \\frac{4}{2} = 2$\n2. Gradien garis $g$: $\\frac{7 - k}{4 - 2} = 2 \\implies 7 - k = 4 \\implies k = 3$ (Opsi A)."
    ),
    make_q(
        "smp8-b5-20", "Tantangan",
        "Jarak antara titik asal $(0, 0)$ ke garis $3x + 4y - 20 = 0$ adalah...",
        ["4 satuan", "5 satuan", "3 satuan", "2 satuan"], "A",
        "Gunakan rumus jarak titik $(x_0, y_0)$ ke garis $ax + by + c = 0$: $d = \\frac{|ax_0 + by_0 + c|}{\\sqrt{a^2 + b^2}}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$d = \\frac{|3(0) + 4(0) - 20|}{\\sqrt{3^2 + 4^2}} = \\frac{|-20|}{\\sqrt{25}} = \\frac{20}{5} = 4\\text{ satuan}$$ (Opsi A)."
    )
]

# =========================================================================
# BAB 6: Statistika (Existing: 4 -> Add 16 -> Total: 20)
# =========================================================================
b6_add = [
    # Paket 1: Dasar (Soal 5)
    make_q(
        "smp8-b6-5", "Dasar",
        "Modus dari data nilai matematika: 7, 8, 6, 8, 9, 7, 8, 5, 8, 10 adalah...",
        ["8", "7", "9", "7,5"], "A",
        "Modus adalah nilai data yang paling sering muncul (memiliki frekuensi tertinggi).",
        "**Langkah Penyelesaian Terstruktur:**\nAngka 8 muncul sebanyak 4 kali (frekuensi terbanyak). Jadi modusnya adalah **8** (Opsi A)."
    ),
    # Paket 2: Sedang (Soal 6-10)
    make_q(
        "smp8-b6-6", "Sedang",
        "Median dari sekumpulan data: 4, 7, 5, 6, 9, 8, 7 adalah...",
        ["7", "6", "6,5", "8"], "A",
        "Urutkan data dari yang terkecil hingga terbesar, lalu cari nilai tengahnya.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Urutan data: 4, 5, 6, **7**, 7, 8, 9\n2. Karena banyak data ada 7 (ganjil), nilai tengahnya adalah data ke-4 yaitu **7** (Opsi A)."
    ),
    make_q(
        "smp8-b6-7", "Sedang",
        "Nilai rata-rata (mean) dari data: 6, 8, 7, 9, 5, 10, 7, 8 adalah...",
        ["7,5", "7,25", "8,0", "7,0"], "A",
        "Mean diperoleh dengan menjumlahkan seluruh nilai data dibagi banyak data.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\bar{x} = \\frac{6 + 8 + 7 + 9 + 5 + 10 + 7 + 8}{8} = \\frac{60}{8} = 7{,}5$$\nNilai rata-ratanya adalah **7,5** (Opsi A)."
    ),
    make_q(
        "smp8-b6-8", "Sedang",
        "Median dari data genap: 12, 14, 11, 15, 13, 16 adalah...",
        ["13,5", "13", "14", "14,5"], "A",
        "Urutkan data, lalu rata-ratakan dua nilai yang berada di posisi tengah.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Data berurutan: 11, 12, **13, 14**, 15, 16\n2. $\\text{Median} = \\frac{13 + 14}{2} = 13{,}5$ (Opsi A)."
    ),
    make_q(
        "smp8-b6-9", "Sedang",
        "Jangkauan (range) dari data: 15, 23, 18, 35, 20, 12, 28 adalah...",
        ["23", "20", "25", "22"], "A",
        "Jangkauan adalah selisih antara nilai datum terbesar dengan datum terkecil: $R = x_{\\max} - x_{\\min}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$R = 35 - 12 = 23$$\nJangkauan data tersebut adalah **23** (Opsi A)."
    ),
    make_q(
        "smp8-b6-10", "Sedang",
        "Diberikan data nilai ulangan berikut: 5 (2 siswa), 6 (5 siswa), 7 (8 siswa), 8 (10 siswa), 9 (5 siswa). Nilai modus dari data tersebut adalah...",
        ["8", "7", "10", "9"], "A",
        "Cari nilai ulangan yang memiliki frekuensi siswa terbanyak.",
        "**Langkah Penyelesaian Terstruktur:**\nNilai 8 diperoleh oleh 10 orang siswa (frekuensi tertinggi), sehingga modusnya adalah **8** (Opsi A)."
    ),
    # Paket 3: Terapan (Soal 11-15)
    make_q(
        "smp8-b6-11", "Sedang",
        "Nilai rata-rata ulangan matematika dari 24 siswa adalah 75. Jika nilai dari 6 siswa lainnya digabungkan, nilai rata-ratanya menjadi 76. Nilai rata-rata dari 6 siswa tersebut adalah...",
        ["80", "78", "82", "79"], "A",
        "Gunakan rumus rata-rata gabungan: $\\bar{x}_{\\text{gab}} = \\frac{n_1 \\bar{x}_1 + n_2 \\bar{x}_2}{n_1 + n_2}$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Total nilai awal: $24 \\times 75 = 1.800$\n2. Total nilai akhir: $(24 + 6) \\times 76 = 30 \\times 76 = 2.280$\n3. Total 6 siswa: $2.280 - 1.800 = 480$\n4. Rata-rata 6 siswa: $\\frac{480}{6} = 80$ (Opsi A)."
    ),
    make_q(
        "smp8-b6-12", "Sedang",
        "Kuartil bawah ($Q_1$), median ($Q_2$), dan kuartil atas ($Q_3$) dari data: 3, 5, 6, 7, 8, 9, 10 berturut-turut adalah...",
        ["5, 7, dan 9", "6, 7, dan 8", "5, 7, dan 10", "3, 7, dan 9"], "A",
        "Bagi data menjadi dua bagian di kiri dan kanan median, lalu cari nilai tengah masing-masing bagian.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Median ($Q_2$) data ke-4 $= 7$\n2. Bagian kiri: 3, 5, 6 $\\implies Q_1 = 5$\n3. Bagian kanan: 8, 9, 10 $\\implies Q_3 = 9$\nNilai berturut-turut adalah **5, 7, dan 9** (Opsi A)."
    ),
    make_q(
        "smp8-b6-13", "Sedang",
        "Jangkauan interkuartil ($QR$) dari data: 4, 5, 6, 7, 9, 10, 12, 15 adalah...",
        ["5,5", "5", "6", "4,5"], "A",
        "Jangkauan interkuartil dirumuskan $QR = Q_3 - Q_1$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $Q_1 = \\frac{5 + 6}{2} = 5{,}5$\n2. $Q_3 = \\frac{10 + 12}{2} = 11$\n3. $QR = 11 - 5{,}5 = 5{,}5$ (Opsi A)."
    ),
    make_q(
        "smp8-b6-14", "Sedang",
        "Diagram lingkaran menunjukkan kegemaran olahraga 120 siswa: Sepak Bola $150^\\circ$, Bulu Tangkis $90^\\circ$, Basket $60^\\circ$, dan sisanya Renang. Banyak siswa yang gemar renang adalah...",
        ["20 siswa", "15 siswa", "25 siswa", "30 siswa"], "A",
        "Total sudut satu lingkaran adalah $360^\\circ$. Cari sudut renang lalu kalikan dengan proporsi siswa.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Sudut Renang: $360^\\circ - (150^\\circ + 90^\\circ + 60^\\circ) = 360^\\circ - 300^\\circ = 60^\\circ$\n2. Banyak siswa $= \\frac{60^\\circ}{360^\\circ} \\times 120 = \\frac{1}{6} \\times 120 = 20\\text{ siswa}$ (Opsi A)."
    ),
    make_q(
        "smp8-b6-15", "Sedang",
        "Nilai rata-rata tes matematika dari 15 siswa putri adalah 80, sedangkan rata-rata 10 siswa putra adalah 75. Nilai rata-rata seluruh siswa di kelas tersebut adalah...",
        ["78", "77,5", "78,5", "77"], "A",
        "Rata-rata gabungan $= \\frac{(15 \\times 80) + (10 \\times 75)}{15 + 10}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\bar{x} = \\frac{1.200 + 750}{25} = \\frac{1.950}{25} = 78$$\nRata-rata seluruh siswa adalah **78** (Opsi A)."
    ),
    # Paket 4: Tantangan (Soal 16-20)
    make_q(
        "smp8-b6-16", "Tantangan",
        "Nilai rata-rata ulangan harian dari 30 siswa adalah 7,0. Jika seorang siswa dengan nilai 9,9 tidak diikutsertakan karena pindah sekolah, maka nilai rata-rata 29 siswa yang tersisa adalah...",
        ["6,9", "6,8", "7,1", "6,7"], "A",
        "Hitung total nilai baru lalu bagi dengan 29.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Total nilai awal: $30 \\times 7{,}0 = 210$\n2. Total nilai baru: $210 - 9{,}9 = 200{,}1$\n3. Rata-rata baru: $\\frac{200{,}1}{29} = 6{,}9$ (Opsi A)."
    ),
    make_q(
        "smp8-b6-17", "Tantangan",
        "Diberikan sekumpulan data: $x, 4, 7, 8, 9, 11$. Jika median data tersebut adalah 7,5 dan $x$ adalah bilangan bulat positif terkecil, maka nilai mean data tersebut adalah...",
        ["7", "7,5", "6,8", "7,2"], "A",
        "Karena median 7,5 dari 6 data, maka dua nilai tengah yang dirata-ratakan adalah 7 dan 8. Maka $x \\le 4$. Jika $x=3$, periksa mean.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Karena dua nilai tengah adalah 7 dan 8, urutan data: $x, 4, 7, 8, 9, 11$.\n2. Jika $x = 3$, mean $= \\frac{3 + 4 + 7 + 8 + 9 + 11}{6} = \\frac{42}{6} = 7$ (Opsi A)."
    ),
    make_q(
        "smp8-b6-18", "Tantangan",
        "Jika setiap nilai data pada sekumpulan data dikalikan dengan 2 kemudian dikurangi 3, maka yang terjadi pada nilai rata-rata (mean) dan jangkauan (range) adalah...",
        ["Mean menjadi 2x - 3 dan range menjadi 2x semula", "Mean dan range keduanya menjadi 2x - 3", "Mean tetap dan range menjadi 2x semula", "Mean menjadi 2x - 3 dan range tetap"], "A",
        "Operasi penjumlahan/pengurangan menggeser mean tetapi tidak mengubah ukuran penyebaran (range). Operasi perkalian mengalikan mean dan range.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Mean baru $= 2 \\times \\text{mean lama} - 3$\n2. Range baru $= 2 \\times \\text{range lama}$ (operasi pengurangan tidak mengubah selisih) (Opsi A)."
    ),
    make_q(
        "smp8-b6-19", "Tantangan",
        "Dalam suatu tes, skor rata-rata siswa yang lulus adalah 82, sedangkan skor rata-rata siswa yang tidak lulus adalah 62. Jika skor rata-rata seluruh siswa adalah 74, maka persentase siswa yang lulus tes adalah...",
        ["60%", "50%", "65%", "70%"], "A",
        "Gunakan aturan perbandingan rata-rata gabungan atau perbandingan selisih.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Selisih lulus ke gabungan: $82 - 74 = 8$\n2. Selisih tidak lulus ke gabungan: $74 - 62 = 12$\n3. Rasio (lulus : tidak lulus) $= 12 : 8 = 3 : 2$\n4. Persentase lulus $= \\frac{3}{3 + 2} \\times 100\\% = 60\\%$ (Opsi A)."
    ),
    make_q(
        "smp8-b6-20", "Tantangan",
        "Lima orang anak memiliki tinggi badan rata-rata 150 cm. Tidak ada anak yang tingginya kurang dari 142 cm. Tinggi maksimal yang mungkin dicapai oleh anak tertinggi di antara kelima anak tersebut adalah...",
        ["182 cm", "175 cm", "180 cm", "178 cm"], "A",
        "Agar salah satu anak mencapai tinggi maksimal, 4 anak lainnya harus memiliki tinggi minimal (142 cm).",
        "**Langkah Penyelesaian Terstruktur:**\n1. Total tinggi 5 anak $= 5 \\times 150 = 750\\text{ cm}$\n2. Tinggi minimal 4 anak $= 4 \\times 142 = 568\\text{ cm}$\n3. Tinggi maksimal anak ke-5 $= 750 - 568 = 182\\text{ cm}$ (Opsi A)."
    )
]

# Append to grade8Data
grade8Data["chapters"][0]["questions"].extend(b1_add)
grade8Data["chapters"][1]["questions"].extend(b2_add)
grade8Data["chapters"][2]["questions"].extend(b3_add)
grade8Data["chapters"][3]["questions"].extend(b4_add)
grade8Data["chapters"][4]["questions"].extend(b5_add)
grade8Data["chapters"][5]["questions"].extend(b6_add)

# Verify
for i, ch in enumerate(grade8Data["chapters"]):
    print(f"Bab {i+1} ({ch['id']}): {len(ch['questions'])} questions")

fileContent = f"""/**
 * Data Kurikulum Kelas 8 SMP (Fase D)
 * 6 Bab Wajib Resmi Sesuai Buku Siswa Matematika
 */

export const grade8Data = {json.dumps(grade8Data, indent=2, ensure_ascii=False)};
"""

with open(DATA_PATH, 'w', encoding='utf-8') as f:
    f.write(fileContent)

print("Successfully expanded grade8.js to 20 questions per chapter!")
