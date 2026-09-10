import json
import os
import re

DATA_PATH = 'src/data/grades/grade11.js'

with open(DATA_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

json_match = re.search(r'export\s+const\s+\w+\s*=\s*(\{[\s\S]*\});?\s*$', content)
if not json_match:
    raise ValueError("Could not extract grade11Data object")

grade11Data = json.loads(json_match.group(1))

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
# BAB 1: Fungsi Komposisi & Invers (Existing: 5 -> Add 15 -> Total: 20)
# =========================================================================
b1_add = [
    # Paket 2: Sedang (Soal 6-10)
    make_q(
        "sma11-b1-6", "Sedang",
        "Diketahui $f(x) = 2x + 5$ dan $g(x) = 3x - 1$. Rumus fungsi $(f \\circ g)(x)$ adalah...",
        ["6x + 3", "6x + 14", "6x - 2", "5x + 4"], "A",
        "Substitusikan $g(x)$ ke dalam $f(x)$: $(f \\circ g)(x) = f(g(x)) = 2(3x - 1) + 5$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$(f \\circ g)(x) = 2(3x - 1) + 5 = 6x - 2 + 5 = 6x + 3$$\nRumusnya adalah **$6x + 3$** (Opsi A)."
    ),
    make_q(
        "sma11-b1-7", "Sedang",
        "Diketahui $f(x) = x^2 - 4$ dan $g(x) = x + 3$. Nilai dari $(g \\circ f)(2)$ adalah...",
        ["3", "0", "7", "-1"], "A",
        "Hitung $f(2) = 2^2 - 4 = 0$, kemudian hitung $g(0) = 0 + 3 = 3$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $f(2) = 2^2 - 4 = 0$\n2. $(g \\circ f)(2) = g(f(2)) = g(0) = 0 + 3 = 3$ (Opsi A)."
    ),
    make_q(
        "sma11-b1-8", "Sedang",
        "Invers dari fungsi $f(x) = 3x - 7$ adalah $f^{-1}(x) = \\dots$",
        ["\\frac{x + 7}{3}", "\\frac{x - 7}{3}", "3x + 7", "\\frac{7 - x}{3}"], "A",
        "Misalkan $y = 3x - 7$, lalu nyatakan $x$ dalam bentuk $y$: $x = \\frac{y + 7}{3}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$y = 3x - 7 \\implies 3x = y + 7 \\implies x = \\frac{y + 7}{3}$$\nInversnya adalah **$f^{-1}(x) = \\frac{x + 7}{3}$** (Opsi A)."
    ),
    make_q(
        "sma11-b1-9", "Sedang",
        "Invers dari fungsi rasional $f(x) = \\frac{2x + 1}{x - 3}$, untuk $x \\neq 3$ adalah...",
        ["\\frac{3x + 1}{x - 2}, x \\neq 2", "\\frac{3x - 1}{x + 2}, x \\neq -2", "\\frac{2x - 1}{x + 3}, x \\neq -3", "\\frac{-3x + 1}{x - 2}, x \\neq 2"], "A",
        "Rumus cepat invers $f(x) = \\frac{ax + b}{cx + d} \\implies f^{-1}(x) = \\frac{-dx + b}{cx - a}$.",
        "**Langkah Penyelesaian Terstruktur:**\nDengan $a = 2, b = 1, c = 1, d = -3$:\n$$f^{-1}(x) = \\frac{-(-3)x + 1}{1x - 2} = \\frac{3x + 1}{x - 2}, \\quad x \\neq 2$$ (Opsi A)."
    ),
    make_q(
        "sma11-b1-10", "Sedang",
        "Diketahui $(f \\circ g)(x) = 4x + 6$ dan $f(x) = 2x - 4$. Rumus fungsi $g(x)$ adalah...",
        ["2x + 5", "2x + 1", "2x - 5", "4x + 10"], "A",
        "Gunakan $f(g(x)) = 2g(x) - 4 = 4x + 6 \\implies 2g(x) = 4x + 10$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$2g(x) - 4 = 4x + 6 \\implies 2g(x) = 4x + 10 \\implies g(x) = 2x + 5$$ (Opsi A)."
    ),
    # Paket 3: Aplikasi & Terapan (Soal 11-15)
    make_q(
        "sma11-b1-11", "Sedang",
        "Diketahui $(f \\circ g)(x) = 2x^2 - 6x + 1$ dan $g(x) = x - 2$. Nilai dari $f(1)$ adalah...",
        ["1", "-3", "5", "0"], "A",
        "Untuk mencari $f(1)$, cari $x$ sehingga $g(x) = 1 \\implies x - 2 = 1 \\implies x = 3$. Lalu hitung $(f \\circ g)(3)$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $g(x) = 1 \\implies x = 3$\n2. $f(1) = (f \\circ g)(3) = 2(3^2) - 6(3) + 1 = 18 - 18 + 1 = 1$ (Opsi A)."
    ),
    make_q(
        "sma11-b1-12", "Sedang",
        "Sebuah pabrik kertas memproses kayu melalui dua tahap. Tahap I menghasilkan bubur kertas $m = f(x) = 0{,}8x - 10$ (dalam ton). Tahap II menghasilkan kertas siap jual $g(m) = 0{,}6m - 5$. Jika tersedia 100 ton kayu, berapa ton kertas siap jual yang dihasilkan?",
        ["37 ton", "35 ton", "42 ton", "39 ton"], "A",
        "Hitung $m = f(100) = 0{,}8(100) - 10 = 70$ ton. Lalu $g(70) = 0{,}6(70) - 5 = 42 - 5 = 37$ ton.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $m = 0{,}8(100) - 10 = 70\\text{ ton}$\n2. $g(70) = 0{,}6(70) - 5 = 37\\text{ ton}$ (Opsi A)."
    ),
    make_q(
        "sma11-b1-13", "Sedang",
        "Jika $f(x) = \\frac{x}{x + 1}$ untuk $x \\neq -1$, maka nilai dari $f^{-1}\\left(\\frac{1}{2}\\right)$ adalah...",
        ["1", "2", "\\frac{1}{3}", "-1"], "A",
        "Misalkan $f(x) = \\frac{1}{2} \\implies \\frac{x}{x + 1} = \\frac{1}{2} \\implies 2x = x + 1 \\implies x = 1$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{x}{x + 1} = \\frac{1}{2} \\implies 2x = x + 1 \\implies x = 1$$\nNilainya adalah **1** (Opsi A)."
    ),
    make_q(
        "sma11-b1-14", "Sedang",
        "Diketahui $f(x) = 3x - 2$ dan $g(x) = x + 4$. Rumus fungsi $(f \\circ g)^{-1}(x)$ adalah...",
        ["\\frac{x - 10}{3}", "\\frac{x + 10}{3}", "\\frac{x + 2}{3}", "\\frac{x - 2}{3}"], "A",
        "Tentukan $(f \\circ g)(x) = 3(x + 4) - 2 = 3x + 10$. Inversnya adalah $\\frac{x - 10}{3}$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $(f \\circ g)(x) = 3x + 12 - 2 = 3x + 10$\n2. Invers: $y = 3x + 10 \\implies x = \\frac{y - 10}{3}$ (Opsi A)."
    ),
    make_q(
        "sma11-b1-15", "Sedang",
        "Jika $f(x) = 2x + 1$ dan $(f \\circ g)(x) = 2x^2 + 4x + 1$, maka rumus $g(x)$ adalah...",
        ["x² + 2x", "x² + 4x", "2x² + 4x", "x² - 2x"], "A",
        "$2g(x) + 1 = 2x^2 + 4x + 1 \\implies 2g(x) = 2x^2 + 4x \\implies g(x) = x^2 + 2x$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$2g(x) + 1 = 2x^2 + 4x + 1 \\implies g(x) = x^2 + 2x$$ (Opsi A)."
    ),
    # Paket 4: Tantangan & Analisis (Soal 16-20)
    make_q(
        "sma11-b1-16", "Tantangan",
        "Diketahui fungsi $f(x) = \\frac{ax + 1}{2x - 3}$. Jika $f^{-1}(1) = 2$, maka nilai dari konstanta $a$ adalah...",
        ["0", "1", "2", "-1"], "A",
        "Sifat invers: $f^{-1}(1) = 2 \\iff f(2) = 1$. Hitung $f(2) = \\frac{2a + 1}{2(2) - 3} = \\frac{2a + 1}{1} = 1 \\implies 2a = 0 \\implies a = 0$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$f(2) = 1 \\implies \\frac{2a + 1}{4 - 3} = 1 \\implies 2a + 1 = 1 \\implies a = 0$$ (Opsi A)."
    ),
    make_q(
        "sma11-b1-17", "Tantangan",
        "Jika $f(x) = \\frac{x}{x - 1}$ untuk $x \\neq 1$, maka nilai dari $(f \\circ f \\circ f)(x)$ adalah...",
        ["\\frac{x}{x - 1}", "x", "\\frac{1}{x}", "x - 1"], "A",
        "$(f \\circ f)(x) = \\frac{\\frac{x}{x-1}}{\\frac{x}{x-1} - 1} = \\frac{x}{x - (x - 1)} = x$. Maka $(f \\circ f \\circ f)(x) = f(x) = \\frac{x}{x - 1}$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $(f \\circ f)(x) = x$ (fungsi identitas)\n2. $(f \\circ f \\circ f)(x) = f(x) = \\frac{x}{x - 1}$ (Opsi A)."
    ),
    make_q(
        "sma11-b1-18", "Tantangan",
        "Suatu fungsi memenuhi $f(2x + 1) = \\frac{4x + 3}{2x - 1}$. Rumus $f(x)$ untuk $x \\neq 2$ adalah...",
        ["\\frac{2x + 1}{x - 2}", "\\frac{2x - 1}{x - 2}", "\\frac{x + 2}{x - 1}", "\\frac{4x - 1}{2x - 3}"], "A",
        "Misalkan $u = 2x + 1 \\implies 2x = u - 1$. Substitusikan ke pembilang $2(u - 1) + 3 = 2u + 1$ dan penyebut $(u - 1) - 1 = u - 2$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$f(u) = \\frac{2(u - 1) + 3}{(u - 1) - 1} = \\frac{2u + 1}{u - 2} \\implies f(x) = \\frac{2x + 1}{x - 2}$$ (Opsi A)."
    ),
    make_q(
        "sma11-b1-19", "Tantangan",
        "Fungsi $f: \\mathbb{R} \\to \\mathbb{R}$ didefinisikan oleh $f(x) = x^2 - 4x + 7$ dengan domain $x \\ge 2$. Rumus invers $f^{-1}(x)$ adalah...",
        ["2 + \\sqrt{x - 3}", "2 - \\sqrt{x - 3}", "-2 + \\sqrt{x + 3}", "4 + \\sqrt{x - 7}"], "A",
        "Ubah ke kuadrat sempurna: $y = (x - 2)^2 + 3 \\implies (x - 2)^2 = y - 3 \\implies x - 2 = +\\sqrt{y - 3}$ (karena $x \\ge 2$).",
        "**Langkah Penyelesaian Terstruktur:**\n$$(x - 2)^2 = y - 3 \\implies x = 2 + \\sqrt{y - 3} \\implies f^{-1}(x) = 2 + \\sqrt{x - 3}$$ (Opsi A)."
    ),
    make_q(
        "sma11-b1-20", "Tantangan",
        "Diberikan $f(x) = 2x - 3$ dan $g(x) = 3x + k$. Jika $(f \\circ g)(x) = (g \\circ f)(x)$ berlaku untuk setiap $x \\in \\mathbb{R}$, maka nilai dari konstanta $k$ adalah...",
        ["-6", "6", "-3", "3"], "A",
        "$(f \\circ g)(x) = 2(3x + k) - 3 = 6x + 2k - 3$. $(g \\circ f)(x) = 3(2x - 3) + k = 6x - 9 + k$. Samakan konstanta: $2k - 3 = k - 9 \\implies k = -6$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$2k - 3 = k - 9 \\implies 2k - k = -9 + 3 \\implies k = -6$$ (Opsi A)."
    )
]

# =========================================================================
# BAB 2: Lingkaran (Existing: 5 -> Add 15 -> Total: 20)
# =========================================================================
b2_add = [
    # Paket 2: Sedang (Soal 6-10)
    make_q(
        "sma11-b2-6", "Sedang",
        "Besar sudut keliling yang menghadap busur yang sama dengan sudut pusat $80^\\circ$ adalah...",
        ["40°", "160°", "80°", "20°"], "A",
        "Besar sudut keliling sama dengan setengah dari besar sudut pusat: $\\frac{1}{2} \\times 80^\\circ = 40^\\circ$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\angle \\text{keliling} = \\frac{1}{2} \\times \\angle \\text{pusat} = \\frac{1}{2} \\times 80^\\circ = 40^\\circ$$ (Opsi A)."
    ),
    make_q(
        "sma11-b2-7", "Sedang",
        "Besar sudut keliling yang menghadap diameter lingkaran selalu sama dengan...",
        ["90°", "180°", "60°", "45°"], "A",
        "Diameter membentuk sudut pusat $180^\\circ$, sehingga sudut kelilingnya adalah $\\frac{1}{2} \\times 180^\\circ = 90^\\circ$.",
        "**Langkah Penyelesaian Terstruktur:**\nSudut keliling menghadap diameter selalu **$90^\\circ$ (siku-siku)** (Opsi A)."
    ),
    make_q(
        "sma11-b2-8", "Sedang",
        "Pada segiempat tali busur $ABCD$, besar $\\angle A = 75^\\circ$. Besar sudut yang berhadapan yaitu $\\angle C$ adalah...",
        ["105°", "75°", "115°", "125°"], "A",
        "Jumlah dua sudut yang saling berhadapan pada segiempat tali busur selalu $180^\\circ$: $\\angle C = 180^\\circ - 75^\\circ = 105^\\circ$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\angle A + \\angle C = 180^\\circ \\implies \\angle C = 180^\\circ - 75^\\circ = 105^\\circ$$ (Opsi A)."
    ),
    make_q(
        "sma11-b2-9", "Sedang",
        "Dua lingkaran memiliki jari-jari masing-masing 9 cm dan 4 cm. Jika jarak kedua pusat lingkaran adalah 13 cm, panjang garis singgung persekutuan luar (GSPL) adalah...",
        ["12 cm", "10 cm", "8 cm", "11 cm"], "A",
        "Rumus GSPL: $d = \\sqrt{p^2 - (R - r)^2} = \\sqrt{13^2 - (9 - 4)^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$ cm.",
        "**Langkah Penyelesaian Terstruktur:**\n$$d = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12\\text{ cm}$$ (Opsi A)."
    ),
    make_q(
        "sma11-b2-10", "Sedang",
        "Dua lingkaran dengan jari-jari 5 cm dan 3 cm berjarak pusat 10 cm. Panjang garis singgung persekutuan dalam (GSPD) adalah...",
        ["6 cm", "8 cm", "7 cm", "9 cm"], "A",
        "Rumus GSPD: $d = \\sqrt{p^2 - (R + r)^2} = \\sqrt{10^2 - (5 + 3)^2} = \\sqrt{100 - 64} = \\sqrt{36} = 6$ cm.",
        "**Langkah Penyelesaian Terstruktur:**\n$$d = \\sqrt{10^2 - 8^2} = \\sqrt{100 - 64} = \\sqrt{36} = 6\\text{ cm}$$ (Opsi A)."
    ),
    # Paket 3: Aplikasi & Terapan (Soal 11-15)
    make_q(
        "sma11-b2-11", "Sedang",
        "Sebuah juring lingkaran dengan jari-jari 14 cm memiliki sudut pusat $90^\\circ$. Luas juring tersebut dengan $\\pi = \\frac{22}{7}$ adalah...",
        ["154 cm²", "308 cm²", "77 cm²", "616 cm²"], "A",
        "Luas juring $= \\frac{\\theta}{360^\\circ} \\times \\pi r^2 = \\frac{90}{360} \\times \\frac{22}{7} \\times 196 = \\frac{1}{4} \\times 616 = 154$ cm².",
        "**Langkah Penyelesaian Terstruktur:**\n$$L_j = \\frac{1}{4} \\times 616 = 154\\text{ cm}^2$$ (Opsi A)."
    ),
    make_q(
        "sma11-b2-12", "Sedang",
        "Panjang busur lingkaran yang memiliki sudut pusat $60^\\circ$ dan jari-jari 21 cm dengan $\\pi = \\frac{22}{7}$ adalah...",
        ["22 cm", "44 cm", "11 cm", "33 cm"], "A",
        "Panjang busur $= \\frac{60}{360} \\times 2\\pi r = \\frac{1}{6} \\times 2 \\times \\frac{22}{7} \\times 21 = \\frac{1}{6} \\times 132 = 22$ cm.",
        "**Langkah Penyelesaian Terstruktur:**\n$$s = \\frac{1}{6} \\times 132 = 22\\text{ cm}$$ (Opsi A)."
    ),
    make_q(
        "sma11-b2-13", "Sedang",
        "Luas tembereng lingkaran dengan sudut pusat $90^\\circ$ dan jari-jari 10 cm dengan $\\pi = 3{,}14$ adalah...",
        ["28,5 cm²", "50 cm²", "78,5 cm²", "25 cm²"], "A",
        "Luas juring $= \\frac{1}{4} \\times 3{,}14 \\times 100 = 78{,}5$ cm². Luas segitiga $= \\frac{1}{2} \\times 10 \\times 10 = 50$ cm². Luas tembereng $= 78{,}5 - 50 = 28{,}5$ cm².",
        "**Langkah Penyelesaian Terstruktur:**\n$$L_{\\text{tembereng}} = 78{,}5 - 50 = 28{,}5\\text{ cm}^2$$ (Opsi A)."
    ),
    make_q(
        "sma11-b2-14", "Sedang",
        "Pada lingkaran dengan pusat $O$, titik $A, B, C$ terletak pada lingkaran. Jika $\\angle AOB = 110^\\circ$ dan $\\angle BOC = 130^\\circ$, maka besar sudut keliling $\\angle ABC$ adalah...",
        ["60°", "120°", "55°", "65°"], "A",
        "Sudut pusat $\\angle AOC = 360^\\circ - (110^\\circ + 130^\\circ) = 360^\\circ - 240^\\circ = 120^\\circ$. Sudut keliling $= \\frac{1}{2} \\times 120^\\circ = 60^\\circ$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\angle AOC = 120^\\circ \\implies \\angle ABC = \\frac{1}{2} \\times 120^\\circ = 60^\\circ$$ (Opsi A)."
    ),
    make_q(
        "sma11-b2-15", "Sedang",
        "Dua roda gerigi dihubungkan oleh rantai luar. Jari-jari kedua roda adalah 15 cm dan 3 cm, serta jarak antara kedua pusat roda adalah 20 cm. Panjang rantai lurus bebas (garis singgung persekutuan luar) adalah...",
        ["16 cm", "15 cm", "18 cm", "14 cm"], "A",
        "GSPL $= \\sqrt{20^2 - (15 - 3)^2} = \\sqrt{400 - 144} = \\sqrt{256} = 16$ cm.",
        "**Langkah Penyelesaian Terstruktur:**\n$$d = \\sqrt{20^2 - 12^2} = \\sqrt{256} = 16\\text{ cm}$$ (Opsi A)."
    ),
    # Paket 4: Tantangan & Analisis (Soal 16-20)
    make_q(
        "sma11-b2-16", "Tantangan",
        "Pada segiempat tali busur $PQRS$, diketahui $\\angle P = (2x + 10)^\\circ$ dan $\\angle R = (3x + 20)^\\circ$. Nilai dari $x$ adalah...",
        ["30", "25", "35", "40"], "A",
        "$\\angle P + \\angle R = 180^\\circ \\implies 5x + 30 = 180 \\implies 5x = 150 \\implies x = 30$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$(2x + 10) + (3x + 20) = 180 \\implies 5x = 150 \\implies x = 30$$ (Opsi A)."
    ),
    make_q(
        "sma11-b2-17", "Tantangan",
        "Dua tali busur $AB$ dan $CD$ berpotongan di dalam lingkaran pada titik $E$. Jika $AE = 6$ cm, $EB = 8$ cm, dan $CE = 4$ cm, panjang ruas garis $ED$ adalah...",
        ["12 cm", "10 cm", "9 cm", "14 cm"], "A",
        "Teorema perpotongan tali busur: $AE \\times EB = CE \\times ED \\implies 6 \\times 8 = 4 \\times ED \\implies ED = 12$ cm.",
        "**Langkah Penyelesaian Terstruktur:**\n$$ED = \\frac{6 \\times 8}{4} = 12\\text{ cm}$$ (Opsi A)."
    ),
    make_q(
        "sma11-b2-18", "Tantangan",
        "Dari sebuah titik $P$ di luar lingkaran ditarik garis singgung $PT$ sepanjang 12 cm dan garis potong $PAB$ dengan $PA = 8$ cm. Panjang tali busur $AB$ adalah...",
        ["10 cm", "18 cm", "8 cm", "12 cm"], "A",
        "Teorema garis singgung dan garis potong: $PT^2 = PA \\times PB \\implies 144 = 8 \\times PB \\implies PB = 18$ cm. Maka $AB = PB - PA = 18 - 8 = 10$ cm.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $PB = \\frac{144}{8} = 18\\text{ cm}$\n2. $AB = 18 - 8 = 10\\text{ cm}$ (Opsi A)."
    ),
    make_q(
        "sma11-b2-19", "Tantangan",
        "Diketahui persamaan lingkaran $x^2 + y^2 = 25$. Persamaan garis singgung lingkaran tersebut yang melalui titik $P(3, 4)$ pada lingkaran adalah...",
        ["3x + 4y = 25", "4x + 3y = 25", "3x - 4y = 25", "4x - 3y = 25"], "A",
        "Rumus bagi adil: $x_1 x + y_1 y = r^2 \\implies 3x + 4y = 25$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$3x + 4y = 25$$ (Opsi A)."
    ),
    make_q(
        "sma11-b2-20", "Tantangan",
        "Titik pusat dan jari-jari lingkaran dengan persamaan $x^2 + y^2 - 6x + 8y - 11 = 0$ berturut-turut adalah...",
        ["P(3, -4) dan r = 6", "P(-3, 4) dan r = 6", "P(3, -4) dan r = 36", "P(-3, 4) dan r = 5"], "A",
        "Pusat: $(-\\frac{A}{2}, -\\frac{B}{2}) = (3, -4)$. Jari-jari: $r = \\sqrt{3^2 + (-4)^2 - (-11)} = \\sqrt{9 + 16 + 11} = \\sqrt{36} = 6$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Pusat $= (-\\frac{-6}{2}, -\\frac{8}{2}) = (3, -4)$\n2. Jari-jari $= \\sqrt{9 + 16 + 11} = \\sqrt{36} = 6$ (Opsi A)."
    )
]

# =========================================================================
# BAB 3: Statistika Bivariat (Existing: 5 -> Add 15 -> Total: 20)
# =========================================================================
b3_add = [
    # Paket 2: Sedang (Soal 6-10)
    make_q(
        "sma11-b3-6", "Sedang",
        "Pada diagram pencar (scatter plot), jika titik-titik data membentuk pola yang cenderung naik dari kiri bawah ke kanan atas, maka hubungan antara kedua variabel adalah...",
        ["Korelasi positif", "Korelasi negatif", "Tidak ada korelasi", "Korelasi kuadratik"], "A",
        "Pola naik dari kiri bawah ke kanan atas menunjukkan korelasi linear positif.",
        "**Langkah Penyelesaian Terstruktur:**\nHubungan tersebut adalah **korelasi positif** (Opsi A)."
    ),
    make_q(
        "sma11-b3-7", "Sedang",
        "Sebuah garis regresi linear memiliki persamaan $\\hat{y} = 2{,}5x + 10$. Jika nilai variabel bebas $x = 8$, maka nilai prediksi $\\hat{y}$ adalah...",
        ["30", "28", "32", "25"], "A",
        "Substitusikan $x = 8$: $\\hat{y} = 2{,}5(8) + 10 = 20 + 10 = 30$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\hat{y} = 2{,}5(8) + 10 = 20 + 10 = 30$$ (Opsi A)."
    ),
    make_q(
        "sma11-b3-8", "Sedang",
        "Rentang nilai koefisien korelasi Pearson ($r$) selalu berada pada interval...",
        ["-1 <= r <= 1", "0 <= r <= 1", "-1 < r < 1", "r >= 0"], "A",
        "Nilai $r$ dibatasi antara $-1$ (korelasi negatif sempurna) hingga $+1$ (korelasi positif sempurna).",
        "**Langkah Penyelesaian Terstruktur:**\nNilai $r$ berada pada rentang **$-1 \\le r \\le 1$** (Opsi A)."
    ),
    make_q(
        "sma11-b3-9", "Sedang",
        "Jika koefisien korelasi dua variabel adalah $r = 0{,}8$, maka nilai koefisien determinasi ($R^2$) adalah...",
        ["64%", "80%", "16%", "40%"], "A",
        "Koefisien determinasi $= r^2 = (0{,}8)^2 = 0{,}64 = 64\\%$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$R^2 = (0{,}8)^2 = 0{,}64 = 64\\%$$ (Opsi A)."
    ),
    make_q(
        "sma11-b3-10", "Sedang",
        "Arti dari koefisien determinasi $R^2 = 75\\%$ adalah...",
        ["75% variasi nilai variabel terikat y dapat dijelaskan oleh variabel bebas x", "75% data berada tepat pada garis lurus regresi", "Korelasi kedua variabel bernilai 0,75", "Variabel x menyebabkan perubahan 75% pada variabel y"], "A",
        "$R^2$ mengukur proporsi variabilitas variabel respons yang dijelaskan oleh model regresi.",
        "**Langkah Penyelesaian Terstruktur:**\nMaknanya adalah **75% variasi nilai $y$ dapat dijelaskan oleh variabel $x$** (Opsi A)."
    ),
    # Paket 3: Aplikasi & Terapan (Soal 11-15)
    make_q(
        "sma11-b3-11", "Sedang",
        "Persamaan regresi biaya promosi ($x$ dalam juta rupiah) terhadap omzet penjualan ($y$ dalam juta rupiah) adalah $\\hat{y} = 15 + 4{,}2x$. Jika biaya promosi adalah 10 juta rupiah, taksiran omzet penjualan adalah...",
        ["57 juta rupiah", "52 juta rupiah", "62 juta rupiah", "47 juta rupiah"], "A",
        "Substitusikan $x = 10$: $\\hat{y} = 15 + 4{,}2(10) = 15 + 42 = 57$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\hat{y} = 15 + 4{,}2(10) = 57\\text{ juta rupiah}$$ (Opsi A)."
    ),
    make_q(
        "sma11-b3-12", "Sedang",
        "Dalam analisis regresi $\\hat{y} = a + bx$, titik koordinat yang selalu dilalui oleh garis regresi terbaik adalah...",
        ["(\\bar{x}, \\bar{y})", "(0, 0)", "(\\bar{x}, 0)", "(0, \\bar{y})"], "A",
        "Garis regresi metode kuadrat terkecil selalu melewati titik rata-rata $(\\bar{x}, \\bar{y})$.",
        "**Langkah Penyelesaian Terstruktur:**\nGaris regresi selalu melewati titik rata-rata **$(\\bar{x}, \\bar{y})$** (Opsi A)."
    ),
    make_q(
        "sma11-b3-13", "Sedang",
        "Residu pada pengamatan ke-$i$ didefinisikan sebagai selisih antara nilai aktual dan nilai prediksi: $e_i = y_i - \\hat{y}_i$. Jika nilai aktual $y = 45$ dan nilai prediksinya $\\hat{y} = 42$, maka residunya adalah...",
        ["3", "-3", "87", "1,07"], "A",
        "Residu $= 45 - 42 = 3$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$e = y - \\hat{y} = 45 - 42 = 3$$ (Opsi A)."
    ),
    make_q(
        "sma11-b3-14", "Sedang",
        "Jika korelasi antara lama belajar ($x$) dan nilai ujian ($y$) adalah $r = 0{,}92$, kesimpulan yang paling tepat mengenai hubungan kedua variabel adalah...",
        ["Hubungan linear positif yang sangat kuat", "Hubungan linear positif yang lemah", "Lama belajar menjadi satu-satunya penyebab nilai tinggi", "Hubungan negatif kuat"], "A",
        "Nilai $r$ di atas 0,8 menunjukkan korelasi linear positif yang sangat kuat.",
        "**Langkah Penyelesaian Terstruktur:**\nNilai $r = 0{,}92$ mengindikasikan **hubungan linear positif yang sangat kuat** (Opsi A)."
    ),
    make_q(
        "sma11-b3-15", "Sedang",
        "Jika nilai korelasi $r = 0$, interpretasi yang tepat adalah...",
        ["Tidak ada hubungan linear antara kedua variabel", "Kedua variabel tidak memiliki hubungan sama sekali", "Garis regresi tegak lurus sempurna", "Data tidak valid"], "A",
        "$r = 0$ menunjukkan tidak adanya korelasi linear (namun mungkin ada hubungan non-linear).",
        "**Langkah Penyelesaian Terstruktur:**\n$r = 0$ berarti **tidak ada hubungan linear** (Opsi A)."
    ),
    # Paket 4: Tantangan & Analisis (Soal 16-20)
    make_q(
        "sma11-b3-16", "Tantangan",
        "Diberikan data sampel dengan $\\bar{x} = 5, \\bar{y} = 14$ dan gradien garis regresi $b = 1{,}8$. Nilai intersep $a$ dari garis regresi $\\hat{y} = a + bx$ adalah...",
        ["5", "4", "6", "3"], "A",
        "Rumus intersep: $a = \\bar{y} - b\\bar{x} = 14 - 1{,}8(5) = 14 - 9 = 5$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$a = 14 - 1{,}8(5) = 14 - 9 = 5$$ (Opsi A)."
    ),
    make_q(
        "sma11-b3-17", "Tantangan",
        "Suatu model regresi $\\hat{y} = -0{,}6x + 80$ memodelkan hubungan kecepatan berkendara ($x$ km/jam) terhadap jarak tempuh per liter bahan bakar ($y$). Jika seorang pengemudi melaju 60 km/jam dan kenyataannya menempuh 41 km/liter, berapakah residu pengamatan tersebut?",
        ["-3", "3", "44", "-44"], "A",
        "Nilai prediksi: $\\hat{y} = -0{,}6(60) + 80 = -36 + 80 = 44$. Residu: $e = y - \\hat{y} = 41 - 44 = -3$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $\\hat{y} = 44$\n2. $e = 41 - 44 = -3$ (Opsi A)."
    ),
    make_q(
        "sma11-b3-18", "Tantangan",
        "Pemberian pupuk ($x$) dan tinggi tanaman ($y$) memiliki kovarian $s_{xy} = 18$, simpangan baku $s_x = 3$, dan simpangan baku $s_y = 7{,}5$. Koefisien korelasi Pearson ($r$) antara $x$ dan $y$ adalah...",
        ["0,8", "0,75", "0,6", "0,85"], "A",
        "Rumus Pearson: $r = \\frac{s_{xy}}{s_x \\times s_y} = \\frac{18}{3 \\times 7{,}5} = \\frac{18}{22{,}5} = 0{,}8$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$r = \\frac{18}{22{,}5} = 0{,}8$$ (Opsi A)."
    ),
    make_q(
        "sma11-b3-19", "Tantangan",
        "Fenomena 'Korelasi Spurious' (Korelasi Semu) terjadi ketika...",
        ["Dua variabel tampak berkorelasi tinggi secara statistik tetapi tidak memiliki hubungan sebab-akibat nyata", "Koefisien korelasi bernilai tepat 1", "Diagram pencar membentuk garis horizontal sempurna", "Data memiliki nilai residu yang selalu nol"], "A",
        "Korelasi semu adalah korelasi statistik kebetulan atau dipengaruhi variabel ketiga tersembunyi (confounding).",
        "**Langkah Penyelesaian Terstruktur:**\nKorelasi semu adalah **dua variabel tampak berkorelasi tinggi tetapi tidak memiliki hubungan sebab-akibat nyata** (Opsi A)."
    ),
    make_q(
        "sma11-b3-20", "Tantangan",
        "Sebuah garis regresi $\\hat{y} = 5 + 2x$ dihitung dari data dengan rentang $x$ antara 2 dan 10. Jika model digunakan untuk memprediksi nilai $y$ saat $x = 35$, tindakan tersebut dinamakan...",
        ["Ekstrapolasi (yang berisiko kurang akurat)", "Interpolasi (yang sangat valid)", "Transformasi data kuadratik", "Uji autokorelasi"], "A",
        "Memprediksi nilai di luar rentang domain data sampel dinamakan ekstrapolasi.",
        "**Langkah Penyelesaian Terstruktur:**\nTindakan memprediksi di luar rentang data pengamatan disebut **ekstrapolasi** (Opsi A)."
    )
]

# Append
grade11Data["chapters"][0]["questions"].extend(b1_add)
grade11Data["chapters"][1]["questions"].extend(b2_add)
grade11Data["chapters"][2]["questions"].extend(b3_add)

# Verify
for i, ch in enumerate(grade11Data["chapters"]):
    print(f"Bab {i+1} ({ch['id']}): {len(ch['questions'])} questions")

fileContent = f"""/**
 * Data Kurikulum Kelas 11 SMA (Fase F)
 * 3 Bab Utama Wajib Resmi Sesuai Buku Siswa Matematika
 */

export const grade11Data = {json.dumps(grade11Data, indent=2, ensure_ascii=False)};
"""

with open(DATA_PATH, 'w', encoding='utf-8') as f:
    f.write(fileContent)

print("Successfully expanded grade11.js to 20 questions per chapter!")
