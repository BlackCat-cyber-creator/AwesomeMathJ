import json
import os
import re

DATA_PATH = 'src/data/grades/grade9.js'

with open(DATA_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

json_match = re.search(r'export\s+const\s+\w+\s*=\s*(\{[\s\S]*\});?\s*$', content)
if not json_match:
    raise ValueError("Could not extract grade9Data object")

grade9Data = json.loads(json_match.group(1))

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
# BAB 1: SPLDV (Existing: 5 -> Add 15 -> Total: 20)
# =========================================================================
b1_add = [
    # Paket 2: Sedang (Soal 6-10)
    make_q(
        "smp9-b1-6", "Sedang",
        "Himpunan penyelesaian dari SPLDV $\\begin{cases} 2x + y = 9 \\\\ x - y = 3 \\end{cases}$ adalah...",
        ["{(4, 1)}", "{(3, 3)}", "{(5, -1)}", "{(2, 5)}"], "A",
        "Gunakan metode eliminasi dengan menjumlahkan kedua persamaan untuk menghilangkan variabel $y$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Jumlahkan kedua persamaan: $(2x + y) + (x - y) = 9 + 3 \\implies 3x = 12 \\implies x = 4$\n2. Substitusikan $x = 4$ ke persamaan kedua: $4 - y = 3 \\implies y = 1$\nHimpunan penyelesaiannya adalah **{(4, 1)}** (Opsi A)."
    ),
    make_q(
        "smp9-b1-7", "Sedang",
        "Jika $x$ dan $y$ memenuhi sistem persamaan $\\begin{cases} 3x + 2y = 12 \\\\ x + 2y = 8 \\end{cases}$, maka nilai dari $x + y$ adalah...",
        ["5", "6", "4", "7"], "A",
        "Kurangkan kedua persamaan untuk mengeliminasi $y$, cari nilai $x$ lalu $y$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $(3x + 2y) - (x + 2y) = 12 - 8 \\implies 2x = 4 \\implies x = 2$\n2. $2 + 2y = 8 \\implies 2y = 6 \\implies y = 3$\n3. Nilai $x + y = 2 + 3 = 5$ (Opsi A)."
    ),
    make_q(
        "smp9-b1-8", "Sedang",
        "Harga 3 buku tulis dan 2 pulpen adalah Rp16.500,00, sedangkan harga 2 buku tulis dan 4 pulpen adalah Rp19.000,00. Model matematika yang sesuai adalah...",
        ["\\begin{cases} 3x + 2y = 16.500 \\\\ 2x + 4y = 19.000 \\end{cases}", "\\begin{cases} 3x + 2y = 19.000 \\\\ 2x + 4y = 16.500 \\end{cases}", "\\begin{cases} 2x + 3y = 16.500 \\\\ 4x + 2y = 19.000 \\end{cases}", "\\begin{cases} 3x + 4y = 16.500 \\\\ 2x + 2y = 19.000 \\end{cases}"], "A",
        "Misalkan $x =$ harga buku tulis dan $y =$ harga pulpen.",
        "**Langkah Penyelesaian Terstruktur:**\nModel matematika yang tepat adalah:\n$$\\begin{cases} 3x + 2y = 16.500 \\\\ 2x + 4y = 19.000 \\end{cases}$$ (Opsi A)."
    ),
    make_q(
        "smp9-b1-9", "Sedang",
        "Diketahui sistem persamaan $\\begin{cases} x = 2y - 1 \\\\ 3x + y = 11 \\end{cases}$. Nilai $x$ yang memenuhi adalah...",
        ["3", "2", "4", "1"], "A",
        "Substitusikan bentuk $x = 2y - 1$ langsung ke persamaan kedua: $3(2y - 1) + y = 11$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $3(2y - 1) + y = 11 \\implies 6y - 3 + y = 11 \\implies 7y = 14 \\implies y = 2$\n2. $x = 2(2) - 1 = 3$\nNilai $x$ adalah **3** (Opsi A)."
    ),
    make_q(
        "smp9-b1-10", "Sedang",
        "Penyelesaian dari sistem persamaan $\\begin{cases} 4x - 3y = 1 \\\\ 2x - y = 3 \\end{cases}$ adalah $(x_0, y_0)$. Nilai dari $2x_0 - 3y_0$ adalah...",
        ["-7", "5", "7", "-5"], "A",
        "Kalikan persamaan kedua dengan 2 lalu eliminasikan $x$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Kalikan persamaan kedua dengan 2: $4x - 2y = 6$\n2. Kurangkan dengan persamaan pertama: $(4x - 2y) - (4x - 3y) = 6 - 1 \\implies y = 5$\n3. $2x - 5 = 3 \\implies 2x = 8 \\implies x = 4$\n4. Nilai $2(4) - 3(5) = 8 - 15 = -7$ (Opsi A)."
    ),
    # Paket 3: Aplikasi & Terapan (Soal 11-15)
    make_q(
        "smp9-b1-11", "Sedang",
        "Keliling sebuah persegi panjang adalah 44 cm. Jika panjangnya 6 cm lebih dari lebarnya, maka luas persegi panjang tersebut adalah...",
        ["112 cm²", "120 cm²", "108 cm²", "96 cm²"], "A",
        "Misalkan $p = l + 6$. Keliling: $2(p + l) = 44 \\implies p + l = 22$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $(l + 6) + l = 22 \\implies 2l = 16 \\implies l = 8\\text{ cm}$\n2. $p = 8 + 6 = 14\\text{ cm}$\n3. Luas $= 14 \\times 8 = 112\\text{ cm}^2$ (Opsi A)."
    ),
    make_q(
        "smp9-b1-12", "Sedang",
        "Jumlah umur Ayah dan umur Rian adalah 50 tahun. Empat tahun lalu, umur Ayah adalah empat kali umur Rian. Umur Rian sekarang adalah...",
        ["12 tahun", "10 tahun", "14 tahun", "8 tahun"], "A",
        "Buat persamaan: $A + R = 50$ dan $(A - 4) = 4(R - 4)$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $A = 50 - R$\n2. $(50 - R) - 4 = 4R - 16 \\implies 46 - R = 4R - 16 \\implies 5R = 62...$ Periksa: $(A - 4) + (R - 4) = 42$. $A - 4 = 4(R - 4) \\implies 5(R - 4) = 42$ tidak bulat. Jika jumlah umur 50: jika $R=12$, $A=38$. 4 th lalu $R=8, A=34$ (bukan 4x). Jika jumlah 48 th: $A+R=48$, 4 th lalu total 40, $R-4=8 \\implies R=12, A=36$.",
    ),
    make_q(
        "smp9-b1-13", "Sedang",
        "Di tempat parkir terdapat 75 kendaraan yang terdiri dari sepeda motor dan mobil. Jumlah seluruh roda adalah 210 buah. Jika tarif parkir motor Rp2.000 dan mobil Rp5.000, pendapatan parkir saat itu adalah...",
        ["Rp255.000,00", "Rp240.000,00", "Rp270.000,00", "Rp225.000,00"], "A",
        "SPLDV: $m + k = 75$ dan $2m + 4k = 210$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Bagi persamaan roda dengan 2: $m + 2k = 105$\n2. Kurangkan dengan $m + k = 75 \\implies k = 30$ mobil\n3. $m = 75 - 30 = 45$ motor\n4. Pendapatan $= (45 \\times 2.000) + (30 \\times 5.000) = 90.000 + 150.000 = 240.000$ (Opsi B)."
    ),
    make_q(
        "smp9-b1-14", "Sedang",
        "Seorang pedagang menjual beras jenis A seharga Rp12.000/kg dan jenis B seharga Rp10.000/kg. Ia mencampur kedua beras tersebut sehingga diperoleh 50 kg beras campuran dengan harga rata-rata Rp11.200/kg. Banyak beras jenis A adalah...",
        ["30 kg", "20 kg", "25 kg", "35 kg"], "A",
        "SPLDV: $a + b = 50$ dan $12.000a + 10.000b = 50 \\times 11.200 = 560.000$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $12a + 10b = 560$\n2. $10a + 10b = 500$\n3. $2a = 60 \\implies a = 30\\text{ kg}$ (Opsi A)."
    ),
    make_q(
        "smp9-b1-15", "Sedang",
        "Sistem persamaan linear $\\begin{cases} \\frac{1}{x} + \\frac{1}{y} = \\frac{5}{6} \\\\ \\frac{1}{x} - \\frac{1}{y} = \\frac{1}{6} \\end{cases}$. Nilai dari $x \\times y$ adalah...",
        ["6", "5", "4", "8"], "A",
        "Misalkan $u = \\frac{1}{x}$ dan $v = \\frac{1}{y}$. Maka $2u = 1 \\implies u = \\frac{1}{2} \\implies x = 2$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $2u = \\frac{6}{6} = 1 \\implies u = \\frac{1}{2} \\implies x = 2$\n2. $v = \\frac{5}{6} - \\frac{3}{6} = \\frac{2}{6} = \\frac{1}{3} \\implies y = 3$\n3. $x \\times y = 2 \\times 3 = 6$ (Opsi A)."
    ),
    # Paket 4: Tantangan & Analisis (Soal 16-20)
    make_q(
        "smp9-b1-16", "Tantangan",
        "Nilai $k$ agar sistem persamaan $\\begin{cases} 2x - 3y = 7 \\\\ 4x - ky = 14 \\end{cases}$ memiliki tak hingga banyak penyelesaian adalah...",
        ["6", "-6", "3", "-3"], "A",
        "Agar tak hingga banyak penyelesaian, rasio koefisien harus sama: $\\frac{2}{4} = \\frac{-3}{-k} = \\frac{7}{14}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{2}{4} = \\frac{3}{k} \\implies \\frac{1}{2} = \\frac{3}{k} \\implies k = 6$$\nNilai $k$ adalah **6** (Opsi A)."
    ),
    make_q(
        "smp9-b1-17", "Tantangan",
        "Sebuah perahu motor menempuh jarak 36 km ke arah hulu (melawan arus) dalam waktu 3 jam. Dalam perjalanan kembali ke arah hilir (searah arus), perahu menempuh jarak yang sama dalam waktu 2 jam. Kecepatan arus air sungai adalah...",
        ["3 km/jam", "12 km/jam", "15 km/jam", "2 km/jam"], "A",
        "Kecepatan lawan arus: $v_p - v_a = 36 : 3 = 12$. Kecepatan searah arus: $v_p + v_a = 36 : 2 = 18$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $v_p - v_a = 12$\n2. $v_p + v_a = 18$\n3. Kurangkan: $2v_a = 6 \\implies v_a = 3\\text{ km/jam}$ (Opsi A)."
    ),
    make_q(
        "smp9-b1-18", "Tantangan",
        "Sebuah bilangan dua digit bernilai 7 kali jumlah digit-digitnya. Jika kedua digit ditukar posisinya, bilangan baru yang terbentuk bernilai 36 kurangnya dari bilangan semula. Bilangan mula-mula adalah...",
        ["84", "42", "63", "96"], "A",
        "Misalkan bilangan $10a + b$. $10a + b = 7(a + b) \\implies 3a = 6b \\implies a = 2b$. Selisih tukar: $9(a - b) = 36 \\implies a - b = 4$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $a = 2b$\n2. $2b - b = 4 \\implies b = 4$\n3. $a = 2(4) = 8$\nBilangan semula adalah **84** (Opsi A)."
    ),
    make_q(
        "smp9-b1-19", "Tantangan",
        "Dua pipa A dan B jika dibuka bersamaan dapat mengisi kolam renang dalam waktu 6 jam. Jika pipa A dibuka 4 jam lalu ditutup, kemudian pipa B meneruskan selama 9 jam, kolam terisi penuh. Waktu yang diperlukan pipa A sendiri untuk mengisi kolam adalah...",
        ["10 jam", "12 jam", "15 jam", "8 jam"], "A",
        "Misalkan kecepatan $\\frac{1}{a} + \\frac{1}{b} = \\frac{1}{6}$ dan $\\frac{4}{a} + \\frac{9}{b} = 1$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $4(\\frac{1}{a} + \\frac{1}{b}) + \\frac{5}{b} = 1 \\implies \\frac{4}{6} + \\frac{5}{b} = 1 \\implies \\frac{5}{b} = \\frac{1}{3} \\implies b = 15$ jam\n2. $\\frac{1}{a} = \\frac{1}{6} - \\frac{1}{15} = \\frac{5 - 2}{30} = \\frac{3}{30} = \\frac{1}{10} \\implies a = 10$ jam (Opsi A)."
    ),
    make_q(
        "smp9-b1-20", "Tantangan",
        "Diketahui $x$ dan $y$ bilangan bulat positif yang memenuhi sistem $\\begin{cases} x^2 - y^2 = 33 \\\\ x + y = 11 \\end{cases}$. Nilai dari $2x - y$ adalah...",
        ["10", "12", "8", "14"], "A",
        "Faktorkan: $(x - y)(x + y) = 33 \\implies (x - y)(11) = 33 \\implies x - y = 3$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $x + y = 11$\n2. $x - y = 3$\n3. Jumlahkan: $2x = 14 \\implies x = 7$\n4. $y = 11 - 7 = 4$\n5. $2(7) - 4 = 14 - 4 = 10$ (Opsi A)."
    )
]

# Adjust b1-12 to be mathematically clean
b1_add[6] = make_q(
    "smp9-b1-12", "Sedang",
    "Jumlah umur Ibu dan umur Susi adalah 48 tahun. Empat tahun yang lalu, umur Ibu adalah empat kali umur Susi. Umur Susi saat ini adalah...",
    ["12 tahun", "10 tahun", "14 tahun", "8 tahun"], "A",
    "Empat tahun lalu jumlah umur mereka adalah $48 - 8 = 40$ tahun. Umur Susi 4 tahun lalu: $40 : 5 = 8$ tahun.",
    "**Langkah Penyelesaian Terstruktur:**\n1. Empat tahun lalu: $(I - 4) + (S - 4) = 40$\n2. Karena $I - 4 = 4(S - 4)$, maka $5(S - 4) = 40 \\implies S - 4 = 8$\n3. Umur Susi sekarang: $8 + 4 = 12\\text{ tahun}$ (Opsi A)."
)

# Adjust b1-13 options to make A correct
b1_add[7]["options"] = [
    {"key": "A", "text": "Rp240.000,00"},
    {"key": "B", "text": "Rp255.000,00"},
    {"key": "C", "text": "Rp270.000,00"},
    {"key": "D", "text": "Rp225.000,00"}
]
b1_add[7]["correctAnswer"] = "A"

# =========================================================================
# BAB 2: Bangun Ruang (Existing: 5 -> Add 15 -> Total: 20)
# =========================================================================
b2_add = [
    # Paket 2: Sedang (Soal 6-10)
    make_q(
        "smp9-b2-6", "Sedang",
        "Sebuah tabung memiliki jari-jari alas 7 cm dan tinggi 10 cm. Volume tabung tersebut dengan $\\pi = \\frac{22}{7}$ adalah...",
        ["1.540 cm³", "1.450 cm³", "1.520 cm³", "1.600 cm³"], "A",
        "Rumus volume tabung: $V = \\pi r^2 t = \\frac{22}{7} \\times 7^2 \\times 10$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$V = \\frac{22}{7} \\times 49 \\times 10 = 154 \\times 10 = 1.540\\text{ cm}^3$$\nVolumenya adalah **1.540 cm³** (Opsi A)."
    ),
    make_q(
        "smp9-b2-7", "Sedang",
        "Luas selimut tabung yang berdiameter 14 cm dan tinggi 20 cm adalah... ($\\pi = \\frac{22}{7}$)",
        ["880 cm²", "840 cm²", "920 cm²", "780 cm²"], "A",
        "Luas selimut $= 2\\pi r t = \\pi d t = \\frac{22}{7} \\times 14 \\times 20$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$L_s = \\frac{22}{7} \\times 14 \\times 20 = 44 \\times 20 = 880\\text{ cm}^2$$\nLuas selimutnya adalah **880 cm²** (Opsi A)."
    ),
    make_q(
        "smp9-b2-8", "Sedang",
        "Sebuah kerucut memiliki jari-jari alas 6 cm dan tinggi 8 cm. Panjang garis pelukis ($s$) kerucut tersebut adalah...",
        ["10 cm", "12 cm", "14 cm", "9 cm"], "A",
        "Gunakan teorema Pythagoras: $s = \\sqrt{r^2 + t^2} = \\sqrt{6^2 + 8^2}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$s = \\sqrt{36 + 64} = \\sqrt{100} = 10\\text{ cm}$$\nPanjang garis pelukisnya adalah **10 cm** (Opsi A)."
    ),
    make_q(
        "smp9-b2-9", "Sedang",
        "Volume kerucut dengan panjang jari-jari alas 7 cm dan tinggi 12 cm adalah... ($\\pi = \\frac{22}{7}$)",
        ["616 cm³", "528 cm³", "640 cm³", "580 cm³"], "A",
        "Volume kerucut $= \\frac{1}{3}\\pi r^2 t = \\frac{1}{3} \\times \\frac{22}{7} \\times 49 \\times 12$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$V = \\frac{1}{3} \\times 154 \\times 12 = 154 \\times 4 = 616\\text{ cm}^3$$\nVolumenya adalah **616 cm³** (Opsi A)."
    ),
    make_q(
        "smp9-b2-10", "Sedang",
        "Volume bola yang berjari-jari 21 cm dengan $\\pi = \\frac{22}{7}$ adalah...",
        ["38.808 cm³", "36.408 cm³", "42.108 cm³", "32.808 cm³"], "A",
        "Volume bola $= \\frac{4}{3}\\pi r^3 = \\frac{4}{3} \\times \\frac{22}{7} \\times 21^3$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$V = \\frac{4}{3} \\times \\frac{22}{7} \\times 9.261 = \\frac{88}{21} \\times 9.261 = 88 \\times 441 = 38.808\\text{ cm}^3$$\nVolumenya adalah **38.808 cm³** (Opsi A)."
    ),
    # Paket 3: Aplikasi & Terapan (Soal 11-15)
    make_q(
        "smp9-b2-11", "Sedang",
        "Luas permukaan bola yang berjari-jari 7 cm dengan $\\pi = \\frac{22}{7}$ adalah...",
        ["616 cm²", "308 cm²", "154 cm²", "1.232 cm²"], "A",
        "Luas bola $= 4\\pi r^2 = 4 \\times \\frac{22}{7} \\times 49$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$L = 4 \\times 154 = 616\\text{ cm}^2$$\nLuas permukaannya adalah **616 cm²** (Opsi A)."
    ),
    make_q(
        "smp9-b2-12", "Sedang",
        "Sebuah drum minyak berbentuk tabung berdiameter 70 cm dan tinggi 1 meter. Jika drum terisi penuh, volume minyak adalah... ($\\pi = \\frac{22}{7}$)",
        ["385 liter", "350 liter", "420 liter", "320 liter"], "A",
        "Jari-jari $= 35$ cm, tinggi $= 100$ cm. $V = \\frac{22}{7} \\times 35^2 \\times 100 = 385.000\\text{ cm}^3 = 385\\text{ liter}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$V = \\frac{22}{7} \\times 1.225 \\times 100 = 385.000\\text{ cm}^3 = 385\\text{ liter}$$\nVolume minyak adalah **385 liter** (Opsi A)."
    ),
    make_q(
        "smp9-b2-13", "Sedang",
        "Sebuah topi ulang tahun berbentuk kerucut memiliki diameter alas 14 cm dan garis pelukis 25 cm. Luas kertas karton minimal untuk membuat topi tersebut adalah... ($\\pi = \\frac{22}{7}$)",
        ["550 cm²", "500 cm²", "600 cm²", "450 cm²"], "A",
        "Topi ulang tahun tanpa alas: Luas selimut kerucut $= \\pi r s = \\frac{22}{7} \\times 7 \\times 25$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$L_s = 22 \\times 25 = 550\\text{ cm}^2$$\nLuas kertas karton adalah **550 cm²** (Opsi A)."
    ),
    make_q(
        "smp9-b2-14", "Sedang",
        "Sebuah bola besi dimasukkan ke dalam tabung berisi air penuh. Jika jari-jari bola sama dengan jari-jari tabung yaitu 6 cm dan tinggi tabung 12 cm, perbandingan volume bola terhadap volume tabung adalah...",
        ["2 : 3", "1 : 2", "3 : 4", "1 : 3"], "A",
        "Volume bola $= \\frac{4}{3}\\pi r^3$. Volume tabung $= \\pi r^2 (2r) = 2\\pi r^3$. Rasio $= \\frac{4}{3} : 2 = 4 : 6 = 2 : 3$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{V_{\\text{bola}}}{V_{\\text{tabung}}} = \\frac{\\frac{4}{3}\\pi r^3}{2\\pi r^3} = \\frac{2}{3}$$\nPerbandingannya adalah **2 : 3** (Opsi A)."
    ),
    make_q(
        "smp9-b2-15", "Sedang",
        "Luas permukaan setengah bola padat (pejal) yang memiliki jari-jari 10 cm adalah... ($\\pi = 3{,}14$)",
        ["942 cm²", "628 cm²", "314 cm²", "1.256 cm²"], "A",
        "Luas setengah bola pejal $= 3\\pi r^2 = 3 \\times 3{,}14 \\times 100$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$L = 3\\pi r^2 = 3 \\times 314 = 942\\text{ cm}^2$$\nLuas permukaannya adalah **942 cm²** (Opsi A)."
    ),
    # Paket 4: Tantangan & Analisis (Soal 16-20)
    make_q(
        "smp9-b2-16", "Tantangan",
        "Jika jari-jari sebuah tabung diperbesar menjadi 2 kali semula dan tingginya diperkecil menjadi $\\frac{1}{2}$ kali semula, perbandingan volume tabung setelah perubahan terhadap volume semula adalah...",
        ["2 : 1", "4 : 1", "1 : 1", "1 : 2"], "A",
        "$V_2 = \\pi (2r)^2 (\\frac{1}{2}t) = \\pi (4r^2) (\\frac{1}{2}t) = 2\\pi r^2 t = 2 V_1$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$V_2 = \\pi (2r)^2 \\left(\\frac{1}{2}t\\right) = 2 \\pi r^2 t = 2V_1$$\nPerbandingannya adalah **2 : 1** (Opsi A)."
    ),
    make_q(
        "smp9-b2-17", "Tantangan",
        "Sebuah bandul timah padat dibentuk dari gabungan kerucut dan belahan bola dengan jari-jari sama yaitu 7 cm. Jika tinggi kerucut 24 cm, volume bandul tersebut adalah... ($\\pi = \\frac{22}{7}$)",
        ["1.950,67 cm³", "1.840,33 cm³", "2.100,50 cm³", "1.750,25 cm³"], "A",
        "Volume kerucut: $\\frac{1}{3} \\times \\frac{22}{7} \\times 49 \\times 24 = 1.232$. Setengah bola: $\\frac{2}{3} \\times \\frac{22}{7} \\times 343 = 718{,}67$. Total $= 1.232 + 718{,}67 = 1.950{,}67$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $V_{\\text{kerucut}} = \\frac{1}{3} \\times 154 \\times 24 = 1.232\\text{ cm}^3$\n2. $V_{\\text{setengah bola}} = \\frac{2}{3} \\times \\frac{22}{7} \\times 343 = 718{,}67\\text{ cm}^3$\n3. Total $= 1.232 + 718{,}67 = 1.950{,}67\\text{ cm}^3$ (Opsi A)."
    ),
    make_q(
        "smp9-b2-18", "Tantangan",
        "Sebuah tangki air berbentuk tabung dengan jari-jari 1,4 meter dan tinggi 2 meter bocor sehingga air berkurang sebanyak 308 liter per jam. Waktu yang dibutuhkan agar air di dalam tangki yang semula penuh menjadi kosong adalah... ($\\pi = \\frac{22}{7}$)",
        ["40 jam", "35 jam", "45 jam", "50 jam"], "A",
        "Volume tangki $= \\frac{22}{7} \\times 1{,}4^2 \\times 2 = 12{,}32\\text{ m}^3 = 12.320\\text{ liter}$. Waktu $= 12.320 : 308 = 40$ jam.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $V = \\frac{22}{7} \\times 1{,}96 \\times 2 = 12{,}32\\text{ m}^3 = 12.320\\text{ liter}$\n2. Waktu $= 12.320 : 308 = 40\\text{ jam}$ (Opsi A)."
    ),
    make_q(
        "smp9-b2-19", "Tantangan",
        "Suatu kerucut terpancung memiliki jari-jari lingkaran alas 10 cm, jari-jari lingkaran atas 4 cm, dan tinggi 8 cm. Volume kerucut terpancung tersebut adalah... ($\\pi = 3{,}14$)",
        ["1.306,24 cm³", "1.250,50 cm³", "1.420,10 cm³", "1.180,60 cm³"], "A",
        "Volume kerucut terpancung: $V = \\frac{1}{3}\\pi t (R^2 + Rr + r^2) = \\frac{1}{3} \\times 3{,}14 \\times 8 \\times (100 + 40 + 16) = \\frac{1}{3} \\times 25{,}12 \\times 156 = 1.306{,}24$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$V = \\frac{1}{3}\\pi t (R^2 + Rr + r^2) = \\frac{1}{3} \\times 3{,}14 \\times 8 \\times 156 = 1.306{,}24\\text{ cm}^3$$ (Opsi A)."
    ),
    make_q(
        "smp9-b2-20", "Tantangan",
        "Sebuah kawat silinder tembaga memiliki panjang 100 meter (10.000 cm) dan jari-jari penampang 0,1 cm. Jika massa jenis tembaga adalah $8{,}9\\text{ g/cm}^3$, massa kawat tersebut dengan $\\pi = 3{,}14$ adalah...",
        ["2.794,6 gram", "2.540,0 gram", "2.980,0 gram", "3.140,0 gram"], "A",
        "Volume kawat $= \\pi r^2 t = 3{,}14 \\times (0{,}1)^2 \\times 10.000 = 314\\text{ cm}^3$. Massa $= 314 \\times 8{,}9 = 2.794{,}6$ gram.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $V = 3{,}14 \\times 0{,}01 \\times 10.000 = 314\\text{ cm}^3$\n2. $\\text{Massa} = 314 \\times 8{,}9 = 2.794{,}6\\text{ gram}$ (Opsi A)."
    )
]

# =========================================================================
# BAB 3: Transformasi Geometri (Existing: 4 -> Add 16 -> Total: 20)
# =========================================================================
b3_add = [
    # Paket 1 ke Paket 2 (Soal 5-10)
    make_q(
        "smp9-b3-5", "Dasar",
        "Bayangan titik $A(2, 5)$ yang ditranslasikan oleh $T = \\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}$ adalah...",
        ["A'(5, 3)", "A'(5, 7)", "A'(-1, 7)", "A'(6, -10)"], "A",
        "Jumlahkan koordinat awal dengan vektor translasi: $(x + a, y + b) = (2 + 3, 5 - 2)$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$A' = (2 + 3, 5 - 2) = (5, 3)$$\nKoordinat bayangannya adalah **A'(5, 3)** (Opsi A)."
    ),
    make_q(
        "smp9-b3-6", "Sedang",
        "Bayangan titik $B(-4, 7)$ yang direfleksikan terhadap sumbu-$X$ adalah...",
        ["B'(-4, -7)", "B'(4, 7)", "B'(4, -7)", "B'(-7, -4)"], "A",
        "Refleksi terhadap sumbu-$X$: $(x, y) \\to (x, -y)$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$B'(-4, -7)$$\nBayangannya adalah **B'(-4, -7)** (Opsi A)."
    ),
    make_q(
        "smp9-b3-7", "Sedang",
        "Bayangan titik $C(3, -8)$ yang direfleksikan terhadap sumbu-$Y$ adalah...",
        ["C'(-3, -8)", "C'(3, 8)", "C'(-3, 8)", "C'(-8, 3)"], "A",
        "Refleksi terhadap sumbu-$Y$: $(x, y) \\to (-x, y)$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$C'(-3, -8)$$\nBayangannya adalah **C'(-3, -8)** (Opsi A)."
    ),
    make_q(
        "smp9-b3-8", "Sedang",
        "Bayangan titik $D(5, 2)$ yang direfleksikan terhadap garis $y = x$ adalah...",
        ["D'(2, 5)", "D'(-5, -2)", "D'(-2, -5)", "D'(5, -2)"], "A",
        "Refleksi terhadap garis $y = x$: $(x, y) \\to (y, x)$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$D'(2, 5)$$\nBayangannya adalah **D'(2, 5)** (Opsi A)."
    ),
    make_q(
        "smp9-b3-9", "Sedang",
        "Bayangan titik $P(4, -3)$ yang dirotasikan sejauh $90^\\circ$ berlawanan arah jarum jam dengan pusat $O(0, 0)$ adalah...",
        ["P'(3, 4)", "P'(-3, -4)", "P'(-4, 3)", "P'(4, 3)"], "A",
        "Rotasi $[O, 90^\\circ]$: $(x, y) \\to (-y, x)$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$P'(-(-3), 4) = P'(3, 4)$$\nBayangannya adalah **P'(3, 4)** (Opsi A)."
    ),
    make_q(
        "smp9-b3-10", "Sedang",
        "Titik $Q(-2, 6)$ didilatasikan dengan pusat $O(0, 0)$ dan faktor skala $k = 3$. Koordinat bayangan titik $Q$ adalah...",
        ["Q'(-6, 18)", "Q'(-6, 2)", "Q'(1, 9)", "Q'(6, -18)"], "A",
        "Dilatasi $[O, k]$: $(x, y) \\to (kx, ky) = (3(-2), 3(6))$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$Q' = (3 \\times (-2), 3 \\times 6) = (-6, 18)$$\nBayangannya adalah **Q'(-6, 18)** (Opsi A)."
    ),
    # Paket 3: Aplikasi & Terapan (Soal 11-15)
    make_q(
        "smp9-b3-11", "Sedang",
        "Titik $A(1, 4)$ ditranslasikan oleh $T_1 = \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$ kemudian dilanjutkan translasi oleh $T_2 = \\begin{pmatrix} -4 \\\\ 1 \\end{pmatrix}$. Bayangan akhir titik $A$ adalah...",
        ["A'(-1, 8)", "A'(3, 7)", "A'(-1, 6)", "A'(1, 8)"], "A",
        "Translasi gabungan: $T = T_1 + T_2 = \\begin{pmatrix} 2 - 4 \\\\ 3 + 1 \\end{pmatrix} = \\begin{pmatrix} -2 \\\\ 4 \\end{pmatrix}$. $A' = (1 - 2, 4 + 4)$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$A' = (1 + 2 - 4, 4 + 3 + 1) = (-1, 8)$$\nBayangannya adalah **A'(-1, 8)** (Opsi A)."
    ),
    make_q(
        "smp9-b3-12", "Sedang",
        "Bayangan titik $K(3, 7)$ yang direfleksikan terhadap garis $x = 5$ adalah...",
        ["K'(7, 7)", "K'(5, 7)", "K'(2, 7)", "K'(8, 7)"], "A",
        "Refleksi terhadap $x = h$: $x' = 2h - x = 2(5) - 3 = 7$, sedangkan $y' = y = 7$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$x' = 2(5) - 3 = 7, \\quad y' = 7 \\implies K'(7, 7)$$\nBayangannya adalah **K'(7, 7)** (Opsi A)."
    ),
    make_q(
        "smp9-b3-13", "Sedang",
        "Bayangan titik $M(-2, 4)$ yang direfleksikan terhadap garis $y = 1$ adalah...",
        ["M'(-2, -2)", "M'(-2, 2)", "M'(4, 1)", "M'(-2, 3)"], "A",
        "Refleksi terhadap $y = k$: $y' = 2k - y = 2(1) - 4 = -2$, sedangkan $x' = x = -2$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$x' = -2, \\quad y' = 2(1) - 4 = -2 \\implies M'(-2, -2)$$\nBayangannya adalah **M'(-2, -2)** (Opsi A)."
    ),
    make_q(
        "smp9-b3-14", "Sedang",
        "Bayangan titik $R(5, -1)$ yang dirotasikan sejauh $180^\\circ$ dengan pusat $O(0, 0)$ adalah...",
        ["R'(-5, 1)", "R'(5, 1)", "R'(-1, 5)", "R'(-5, -1)"], "A",
        "Rotasi $[O, 180^\\circ]$: $(x, y) \\to (-x, -y)$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$R'(-5, -(-1)) = R'(-5, 1)$$\nBayangannya adalah **R'(-5, 1)** (Opsi A)."
    ),
    make_q(
        "smp9-b3-15", "Sedang",
        "Sebuah segitiga $ABC$ dengan luas 15 cm² didilatasikan dengan faktor skala $k = 4$. Luas bayangan segitiga tersebut adalah...",
        ["240 cm²", "60 cm²", "120 cm²", "180 cm²"], "A",
        "Luas bangun hasil dilatasi $= k^2 \\times \\text{Luas awal} = 4^2 \\times 15 = 16 \\times 15 = 240$ cm².",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Luas bayangan} = 4^2 \\times 15 = 16 \\times 15 = 240\\text{ cm}^2$$\nLuasnya adalah **240 cm²** (Opsi A)."
    ),
    # Paket 4: Tantangan & Analisis (Soal 16-20)
    make_q(
        "smp9-b3-16", "Tantangan",
        "Bayangan garis $2x + 3y = 6$ yang ditranslasikan oleh $T = \\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix}$ memiliki persamaan...",
        ["2x + 3y = 2", "2x + 3y = 10", "2x - 3y = 2", "3x + 2y = 4"], "A",
        "Gunakan substitusi $x = x' - 1$ dan $y = y' + 2$: $2(x - 1) + 3(y + 2) = 6 \\implies 2x - 2 + 3y + 6 = 6 \\implies 2x + 3y = 2$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$2(x - 1) + 3(y + 2) = 6 \\implies 2x + 3y + 4 = 6 \\implies 2x + 3y = 2$$ (Opsi A)."
    ),
    make_q(
        "smp9-b3-17", "Tantangan",
        "Titik $P(2, -3)$ direfleksikan terhadap garis $y = -x$, kemudian dilanjutkan dengan translasi oleh $T = \\begin{pmatrix} -1 \\\\ 4 \\end{pmatrix}$. Koordinat bayangan akhir titik $P$ adalah...",
        ["P'(2, 2)", "P'(4, 2)", "P'(2, -2)", "P'(3, 1)"], "A",
        "1. Refleksi $y = -x$: $(x, y) \\to (-y, -x) = (3, -2)$. 2. Translasi: $(3 - 1, -2 + 4) = (2, 2)$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Cermin $y = -x$: $P'(3, -2)$\n2. Translasi: $P''(3 - 1, -2 + 4) = P''(2, 2)$ (Opsi A)."
    ),
    make_q(
        "smp9-b3-18", "Tantangan",
        "Bayangan titik $A(3, 5)$ oleh dilatasi dengan pusat $P(1, 2)$ dan faktor skala $k = 2$ adalah...",
        ["A'(5, 8)", "A'(6, 10)", "A'(4, 7)", "A'(7, 11)"], "A",
        "Rumus dilatasi pusat $(a, b)$: $x' = a + k(x - a) = 1 + 2(3 - 1) = 5$, $y' = b + k(y - b) = 2 + 2(5 - 2) = 8$.",
        "**Langkah Penyelesaian Terstruktur:**\n- $x' = 1 + 2(2) = 5$\n- $y' = 2 + 2(3) = 8$\nBayangannya adalah **A'(5, 8)** (Opsi A)."
    ),
    make_q(
        "smp9-b3-19", "Tantangan",
        "Sebuah titik $T(a, b)$ dicerminkan terhadap sumbu-$X$ menghasilkan titik $(4, -6)$. Kemudian titik $(4, -6)$ ditranslasikan oleh $\\begin{pmatrix} -1 \\\\ 2 \\end{pmatrix}$ menghasilkan $(c, d)$. Nilai dari $a + b + c + d$ adalah...",
        ["9", "11", "7", "13"], "A",
        "Dari $T'(4, -6)$ cermin sumbu-$X$, maka $a = 4$ dan $b = 6$. Bayangan translasi: $c = 4 - 1 = 3$ dan $d = -6 + 2 = -4$. $a + b + c + d = 4 + 6 + 3 - 4 = 9$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $T(a, b) = (4, 6) \\implies a = 4, b = 6$\n2. $(c, d) = (4 - 1, -6 + 2) = (3, -4)$\n3. $a + b + c + d = 4 + 6 + 3 - 4 = 9$ (Opsi A)."
    ),
    make_q(
        "smp9-b3-20", "Tantangan",
        "Luas lingkaran $L$ dengan jari-jari 7 cm didilatasikan oleh $[O, 3]$. Perubahan (pertambahan) luas lingkaran tersebut dengan $\\pi = \\frac{22}{7}$ adalah...",
        ["1.232 cm²", "1.386 cm²", "1.540 cm²", "1.078 cm²"], "A",
        "Luas awal $= \\frac{22}{7} \\times 49 = 154$ cm². Luas baru $= 3^2 \\times 154 = 9 \\times 154 = 1.386$ cm². Pertambahan luas $= 1.386 - 154 = 1.232$ cm².",
        "**Langkah Penyelesaian Terstruktur:**\n1. Luas awal $= 154\\text{ cm}^2$\n2. Luas baru $= 9 \\times 154 = 1.386\\text{ cm}^2$\n3. Pertambahan $= 1.386 - 154 = 1.232\\text{ cm}^2$ (Opsi A)."
    )
]



# =========================================================================
# BAB 4: Peluang dan Pemilihan Sampel (Existing: 4 -> Add 16 -> Total: 20)
# =========================================================================
b4_add = [
    # Paket 1 ke Paket 2 (Soal 5-10)
    make_q(
        "smp9-b4-5", "Dasar",
        "Populasi adalah seluruh objek yang menjadi sasaran penelitian, sedangkan sampel adalah...",
        ["Sebagian dari populasi yang diambil untuk mewakili populasi", "Data yang sudah diolah menjadi tabel", "Seluruh data yang bernilai ekstrem", "Jumlah frekuensi terbanyak"], "A",
        "Sampel merupakan bagian representatif yang diambil dari populasi.",
        "**Langkah Penyelesaian Terstruktur:**\nSampel adalah **sebagian dari populasi yang mewakili populasi** (Opsi A)."
    ),
    make_q(
        "smp9-b4-6", "Sedang",
        "Seorang peneliti ingin mengetahui kualitas air sumur di sebuah desa yang terdiri dari 500 rumah. Peneliti mengambil sampel air dari 25 rumah yang dipilih secara acak. Populasi dari penelitian tersebut adalah...",
        ["Air sumur seluruh rumah di desa tersebut (500 rumah)", "Air sumur dari 25 rumah yang diambil", "Peneliti yang mengambil sampel", "Kedalaman sumur rata-rata"], "A",
        "Populasi mencakup seluruh sasaran: air sumur seluruh 500 rumah.",
        "**Langkah Penyelesaian Terstruktur:**\nPopulasinya adalah **air sumur seluruh rumah di desa tersebut** (Opsi A)."
    ),
    make_q(
        "smp9-b4-7", "Sedang",
        "Dua buah dadu dilempar bersamaan satu kali. Peluang munculnya mata dadu kembar (sama) adalah...",
        ["\\frac{1}{6}", "\\frac{1}{12}", "\\frac{1}{36}", "\\frac{1}{4}"], "A",
        "Mata dadu kembar: (1,1), (2,2), (3,3), (4,4), (5,5), (6,6) ada 6 dari 36 kemungkinan. Peluang $= \\frac{6}{36} = \\frac{1}{6}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{6}{36} = \\frac{1}{6}$$\nPeluangnya adalah **$\\frac{1}{6}$** (Opsi A)."
    ),
    make_q(
        "smp9-b4-8", "Sedang",
        "Sebuah kartu diambil secara acak dari satu set kartu bridge (52 kartu). Peluang terambilnya kartu As adalah...",
        ["\\frac{1}{13}", "\\frac{1}{52}", "\\frac{1}{4}", "\\frac{2}{13}"], "A",
        "Terdapat 4 kartu As dalam 52 kartu. Peluang $= \\frac{4}{52} = \\frac{1}{13}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{4}{52} = \\frac{1}{13}$$\nPeluangnya adalah **$\\frac{1}{13}$** (Opsi A)."
    ),
    make_q(
        "smp9-b4-9", "Sedang",
        "Dari pelemparan sebuah dadu sebanyak 120 kali, frekuensi harapan munculnya mata dadu faktor dari 6 (1, 2, 3, 6) adalah...",
        ["80 kali", "60 kali", "90 kali", "40 kali"], "A",
        "Peluang faktor dari 6 $= \\frac{4}{6} = \\frac{2}{3}$. Frekuensi harapan $= 120 \\times \\frac{2}{3} = 80$ kali.",
        "**Langkah Penyelesaian Terstruktur:**\n$$F_h = 120 \\times \\frac{4}{6} = 80\\text{ kali}$$\nFrekuensi harapannya adalah **80 kali** (Opsi A)."
    ),
    make_q(
        "smp9-b4-10", "Sedang",
        "Dalam sebuah kantong terdapat 8 kelereng merah, 7 kelereng kuning, dan 5 kelereng biru. Peluang terambilnya bukan kelereng kuning adalah...",
        ["\\frac{13}{20}", "\\frac{7}{20}", "\\frac{3}{5}", "\\frac{1}{2}"], "A",
        "Bukan kuning $= 8 + 5 = 13$. Total $= 20$. Peluang $= \\frac{13}{20}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$P = 1 - \\frac{7}{20} = \\frac{13}{20}$$\nPeluangnya adalah **$\\frac{13}{20}$** (Opsi A)."
    ),
    # Paket 3: Aplikasi & Terapan (Soal 11-15)
    make_q(
        "smp9-b4-11", "Sedang",
        "Tiga koin dilempar bersamaan. Peluang muncul tepat 2 sisi Gambar adalah...",
        ["\\frac{3}{8}", "\\frac{1}{4}", "\\frac{1}{2}", "\\frac{1}{8}"], "A",
        "Kejadian tepat 2 Gambar: (G,G,A), (G,A,G), (A,G,G) ada 3 dari 8 kemungkinan.",
        "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{3}{8}$$\nPeluangnya adalah **$\\frac{3}{8}$** (Opsi A)."
    ),
    make_q(
        "smp9-b4-12", "Sedang",
        "Dalam pemilihan ketua OSIS dengan 400 pemilih, survei cepat terhadap 50 sampel acak menunjukkan 35 pemilih memilih kandidat A. Perkiraan perolehan suara total kandidat A adalah...",
        ["280 suara", "250 suara", "300 suara", "320 suara"], "A",
        "Proporsi sampel $= \\frac{35}{50} = 0{,}7$. Estimasi total $= 0{,}7 \\times 400 = 280$ suara.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Estimasi} = \\frac{35}{50} \\times 400 = 280\\text{ suara}$$\nPerkiraannya adalah **280 suara** (Opsi A)."
    ),
    make_q(
        "smp9-b4-13", "Sedang",
        "Dua buah dadu dilempar bersamaan. Peluang muncul jumlah kedua mata dadu kurang dari 5 adalah...",
        ["\\frac{1}{6}", "\\frac{5}{36}", "\\frac{1}{9}", "\\frac{7}{36}"], "A",
        "Pasangan jumlah < 5: jumlah 2 (1,1), jumlah 3 (1,2),(2,1), jumlah 4 (1,3),(2,2),(3,1) total 6 pasangan. Peluang $= \\frac{6}{36} = \\frac{1}{6}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{6}{36} = \\frac{1}{6}$$\nPeluangnya adalah **$\\frac{1}{6}$** (Opsi A)."
    ),
    make_q(
        "smp9-b4-14", "Sedang",
        "Sebuah pabrik lampu memproduksi 10.000 bohlam lampu. Dari pengujian 500 sampel acak, ditemukan 15 bohlam cacat. Perkiraan banyak bohlam cacat dari seluruh produksi adalah...",
        ["300 bohlam", "250 bohlam", "350 bohlam", "200 bohlam"], "A",
        "Persentase cacat $= \\frac{15}{500} = 0{,}03 = 3\\%$. Total cacat $= 3\\% \\times 10.000 = 300$ bohlam.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Estimasi} = \\frac{15}{500} \\times 10.000 = 300\\text{ bohlam}$$\nPerkiraannya adalah **300 bohlam** (Opsi A)."
    ),
    make_q(
        "smp9-b4-15", "Sedang",
        "Peluang seorang penembak jitu tepat mengenai sasaran adalah 0,85. Jika penembak tersebut menembak sebanyak 40 kali, frekuensi harapan tembakan meleset adalah...",
        ["6 kali", "8 kali", "5 kali", "7 kali"], "A",
        "Peluang meleset $= 1 - 0{,}85 = 0{,}15$. Frekuensi meleset $= 40 \\times 0{,}15 = 6$ kali.",
        "**Langkah Penyelesaian Terstruktur:**\n$$F_h = 40 \\times (1 - 0{,}85) = 40 \\times 0{,}15 = 6\\text{ kali}$$\nFrekuensi meleset adalah **6 kali** (Opsi A)."
    ),
    # Paket 4: Tantangan & Analisis (Soal 16-20)
    make_q(
        "smp9-b4-16", "Tantangan",
        "Sebuah kantong berisi 6 bola merah dan 4 bola putih. Diambil 2 bola satu demi satu tanpa pengembalian. Peluang terambil bola pertama merah dan bola kedua putih adalah...",
        ["\\frac{4}{15}", "\\frac{6}{25}", "\\frac{1}{5}", "\\frac{2}{9}"], "A",
        "Peluang merah pertama $= \\frac{6}{10}$. Peluang putih kedua $= \\frac{4}{9}$. Peluang bersama $= \\frac{6}{10} \\times \\frac{4}{9} = \\frac{24}{90} = \\frac{4}{15}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{6}{10} \\times \\frac{4}{9} = \\frac{24}{90} = \\frac{4}{15}$$\nPeluangnya adalah **$\\frac{4}{15}$** (Opsi A)."
    ),
    make_q(
        "smp9-b4-17", "Tantangan",
        "Dua dadu dilempar bersamaan. Peluang muncul jumlah kedua mata dadu bernilai bilangan prima (2, 3, 5, 7, 11) adalah...",
        ["\\frac{15}{36} = \\frac{5}{12}", "\\frac{7}{18}", "\\frac{1}{2}", "\\frac{13}{36}"], "A",
        "Jumlah 2: 1 pasang; Jumlah 3: 2 pasang; Jumlah 5: 4 pasang; Jumlah 7: 6 pasang; Jumlah 11: 2 pasang. Total $= 1 + 2 + 4 + 6 + 2 = 15$. Peluang $= \\frac{15}{36} = \\frac{5}{12}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{15}{36} = \\frac{5}{12}$$\nPeluangnya adalah **$\\frac{5}{12}$** (Opsi A)."
    ),
    make_q(
        "smp9-b4-18", "Tantangan",
        "Suatu keluarga berencana memiliki 3 orang anak. Peluang keluarga tersebut memiliki paling sedikit 1 anak laki-laki adalah...",
        ["\\frac{7}{8}", "\\frac{3}{4}", "\\frac{1}{2}", "\\frac{3}{8}"], "A",
        "Gunakan komplemen: $1 - P(\\text{semua perempuan}) = 1 - \\frac{1}{8} = \\frac{7}{8}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$P = 1 - \\left(\\frac{1}{2}\\right)^3 = 1 - \\frac{1}{8} = \\frac{7}{8}$$\nPeluangnya adalah **$\\frac{7}{8}$** (Opsi A)."
    ),
    make_q(
        "smp9-b4-19", "Tantangan",
        "Dalam sebuah kotak terdapat 10 kartu bernomor 1 sampai 10. Jika diambil dua kartu sekaligus secara acak, peluang terambil kedua kartu bernomor genap adalah...",
        ["\\frac{2}{9}", "\\frac{1}{4}", "\\frac{1}{5}", "\\frac{3}{10}"], "A",
        "Kartu genap: 2, 4, 6, 8, 10 (ada 5). Total cara $= C(10, 2) = 45$. Cara genap $= C(5, 2) = 10$. Peluang $= \\frac{10}{45} = \\frac{2}{9}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{C(5, 2)}{C(10, 2)} = \\frac{10}{45} = \\frac{2}{9}$$\nPeluangnya adalah **$\\frac{2}{9}$** (Opsi A)."
    ),
    make_q(
        "smp9-b4-20", "Tantangan",
        "Sebuah survei mengenai kebiasaan membaca melibatkan siswa SMP. Jika teknik pengambilan sampel dilakukan dengan membagi siswa menjadi strata berdasarkan tingkatan kelas (Kelas 7, 8, 9) lalu mengambil sampel acak proporsional dari setiap tingkatan, teknik sampling tersebut dinamakan...",
        ["Stratified Random Sampling", "Simple Random Sampling", "Cluster Sampling", "Convenience Sampling"], "A",
        "Pengambilan sampel berstrata sesuai tingkatan disebut stratified random sampling.",
        "**Langkah Penyelesaian Terstruktur:**\nTeknik tersebut adalah **Stratified Random Sampling** (Opsi A)."
    )
]

# Append
grade9Data["chapters"][0]["questions"].extend(b1_add)
grade9Data["chapters"][1]["questions"].extend(b2_add)
grade9Data["chapters"][2]["questions"].extend(b3_add)
grade9Data["chapters"][3]["questions"].extend(b4_add)

# Verify
for i, ch in enumerate(grade9Data["chapters"]):
    print(f"Bab {i+1} ({ch['id']}): {len(ch['questions'])} questions")

fileContent = f"""/**
 * Data Kurikulum Kelas 9 SMP (Fase D)
 * 4 Bab Resmi Sesuai Buku Siswa Matematika
 */

export const grade9Data = {json.dumps(grade9Data, indent=2, ensure_ascii=False)};
"""

with open(DATA_PATH, 'w', encoding='utf-8') as f:
    f.write(fileContent)

print("Successfully expanded grade9.js to 20 questions per chapter!")
