import re

with open('pipeline/builders/expand_grade10.py', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Let's inspect where overrides are and replace them
# b2_add[14] replaces sma10-b2-19
# b5_add[1] replaces sma10-b5-6
# b5_add[8] replaces sma10-b5-13
# b5_add[15] replaces sma10-b5-20
# b6_add[14] replaces sma10-b6-19
# b8_add[15] replaces sma10-b8-20

content = "".join(lines)

# b2-19:
content = re.sub(
    r'make_q\(\s*"sma10-b2-19"[\s\S]*?\n\s*\),',
    '''make_q(
        "sma10-b2-19", "Tantangan",
        "Jika $(k - 2), (k + 1), (2k + 2)$ merupakan tiga suku berurutan dari suatu barisan geometri dengan rasio positif, maka nilai dari $k$ adalah...",
        ["5", "4", "3", "6"], "A",
        "Syarat suku berurutan geometri: $(U_2)^2 = U_1 \\\\times U_3$.",
        "**Langkah Penyelesaian Terstruktur:**\\n1. $(k + 1)^2 = (k - 2)(2k + 2)\\n2. $k^2 + 2k + 1 = 2k^2 - 2k - 4 \\\\implies k^2 - 4k - 5 = 0$\\n3. $(k - 5)(k + 1) = 0 \\\\implies k = 5$ (karena suku positif) (Opsi A)."
    ),''',
    content,
    count=1
)

# b5-6:
content = re.sub(
    r'make_q\(\s*"sma10-b5-6"[\s\S]*?\n\s*\),',
    '''make_q(
        "sma10-b5-6", "Sedang",
        "Diketahui SPLTV $\\\\begin{cases} x + y + z = 6 \\\\\\\\ x + 2y + z = 8 \\\\\\\\ 2x - y + z = 3 \\\\end{cases}$. Nilai dari $x$ adalah...",
        ["1", "2", "3", "4"], "A",
        "Kurangkan persamaan 2 dengan persamaan 1 untuk menemukan nilai $y$, lalu selesaikan untuk $x$.",
        "**Langkah Penyelesaian Terstruktur:**\\n1. $(x + 2y + z) - (x + y + z) = 8 - 6 \\\\implies y = 2$\\n2. Dari pers 1: $x + z = 4$\\n3. Dari pers 3: $2x - 2 + z = 3 \\\\implies 2x + z = 5$\\n4. $(2x + z) - (x + z) = 5 - 4 \\\\implies x = 1$ (Opsi A)."
    ),''',
    content,
    count=1
)

# b5-13:
content = re.sub(
    r'make_q\(\s*"sma10-b5-13"[\s\S]*?\n\s*\),',
    '''make_q(
        "sma10-b5-13", "Sedang",
        "Jika $(x, y, z)$ memenuhi sistem persamaan $\\\\begin{cases} x + y = 5 \\\\\\\\ y + z = 7 \\\\\\\\ x + z = 6 \\\\end{cases}$, maka nilai dari $x + y + z$ adalah...",
        ["9", "10", "8", "12"], "A",
        "Jumlahkan ketiga persamaan sekaligus untuk mendapatkan kelipatan dari $(x + y + z)$.",
        "**Langkah Penyelesaian Terstruktur:**\\n$$(x + y) + (y + z) + (x + z) = 5 + 7 + 6 \\\\implies 2(x + y + z) = 18 \\\\implies x + y + z = 9$$ (Opsi A)."
    ),''',
    content,
    count=1
)

# b5-20:
content = re.sub(
    r'make_q\(\s*"sma10-b5-20"[\s\S]*?\n\s*\),',
    '''make_q(
        "sma10-b5-20", "Tantangan",
        "Dalam suatu kuis dengan 3 jenis soal (A, B, C), seorang peserta menjawab 13 soal dengan total skor 62. Bobot skor soal A adalah 2, soal B adalah 4, dan soal C adalah 6. Jika banyak soal B yang dijawab adalah dua kali banyak soal A, maka banyak soal C yang dijawab adalah...",
        ["7", "6", "8", "5"], "A",
        "Susun SPLTV: $A + B + C = 13$, $2A + 4B + 6C = 62$, $B = 2A$.",
        "**Langkah Penyelesaian Terstruktur:**\\n1. $B = 2A \\\\implies 3A + C = 13 \\\\implies C = 13 - 3A$\\n2. $2A + 4(2A) + 6(13 - 3A) = 62 \\\\implies 10A + 78 - 18A = 62 \\\\implies 8A = 16 \\\\implies A = 2$\\n3. Banyak soal C: $C = 13 - 3(2) = 7$ (Opsi A)."
    ),''',
    content,
    count=1
)

# b6-19:
content = re.sub(
    r'make_q\(\s*"sma10-b6-19"[\s\S]*?\n\s*\),',
    '''make_q(
        "sma10-b6-19", "Tantangan",
        "Jika grafik fungsi $f(x) = x^2 + bx + c$ bergeser 2 satuan ke kanan dan 3 satuan ke atas menghasilkan grafik $g(x) = x^2 - 2x + 6$, maka nilai dari $b + c$ adalah...",
        ["5", "6", "7", "4"], "A",
        "Pergeseran: $g(x) = f(x - 2) + 3$. Samakan koefisiennya untuk mencari $b$ dan $c$.",
        "**Langkah Penyelesaian Terstruktur:**\\n1. $g(x) = (x - 2)^2 + b(x - 2) + c + 3 = x^2 + (b - 4)x + (7 - 2b + c)$\\n2. $b - 4 = -2 \\\\implies b = 2$\\n3. $7 - 2(2) + c = 6 \\\\implies 3 + c = 6 \\\\implies c = 3$\\n4. Nilai $b + c = 2 + 3 = 5$ (Opsi A)."
    ),''',
    content,
    count=1
)

# b8-20:
content = re.sub(
    r'make_q\(\s*"sma10-b8-20"[\s\S]*?\n\s*\),',
    '''make_q(
        "sma10-b8-20", "Tantangan",
        "Dua dadu dilempar bersamaan. Peluang munculnya jumlah mata dadu lebih dari 9 atau kelipatan 4 adalah...",
        ["\\\\frac{7}{18}", "\\\\frac{4}{9}", "\\\\frac{5}{12}", "\\\\frac{1}{2}"], "A",
        "Jumlah > 9: {10, 11, 12} (6 titik sampel). Kelipatan 4: {4, 8, 12} (9 titik sampel). Irisan jumlah 12: 1 titik sampel.",
        "**Langkah Penyelesaian Terstruktur:**\\n$$P = \\\\frac{6 + 9 - 1}{36} = \\\\frac{14}{36} = \\\\frac{7}{18}$$ (Opsi A)."
    ),''',
    content,
    count=1
)

# Remove all override blocks at the bottom of sections
content = re.sub(r'# Adjust b2-19 cleanly\s+b2_add\[14\]\s*=\s*make_q\([\s\S]*?\n\)\n', '', content)
content = re.sub(r'# Adjust b5-6, b5-13, and b5-20 cleanly\s+b5_add\[1\]\s*=\s*make_q\([\s\S]*?\n\)\s+b5_add\[8\]\s*=\s*make_q\([\s\S]*?\n\)\s+b5_add\[15\]\s*=\s*make_q\([\s\S]*?\n\)\n', '', content)
content = re.sub(r'# Adjust b6-19 cleanly\s+b6_add\[14\]\s*=\s*make_q\([\s\S]*?\n\)\n', '', content)
content = re.sub(r'# Adjust b8-20 cleanly\s+b8_add\[15\]\s*=\s*make_q\([\s\S]*?\n\)\n', '', content)

with open('pipeline/builders/expand_grade10.py', 'w', encoding='utf-8') as f:
    f.write(content)

print("expand_grade10.py successfully cleaned!")
