import json
import os
import re

DATA_PATH = 'src/data/grades/grade7.js'

with open(DATA_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

json_match = re.search(r'export\s+const\s+\w+\s*=\s*(\{[\s\S]*\});?\s*$', content)
if not json_match:
    raise ValueError("Could not extract grade7Data object")

grade7Data = json.loads(json_match.group(1))

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
# BAB 1: Bilangan Bulat (Existing: 4 -> Add 16 -> Total: 20)
# =========================================================================
b1_add = [
    # Paket 1 ke Paket 2 (Soal 5-10)
    make_q(
        "smp7-b1-5", "Dasar",
        "Hasil dari operasi $-15 + (-28)$ adalah...",
        ["-43", "43", "-13", "13"], "A",
        "Penjumlahan dua bilangan negatif menghasilkan bilangan negatif dengan menjumlahkan nilai mutlaknya: $-(15 + 28)$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$-15 + (-28) = -(15 + 28) = -43$$ (Opsi A)."
    ),
    make_q(
        "smp7-b1-6", "Sedang",
        "Hasil dari $(-8) \\times (-12)$ adalah...",
        ["96", "-96", "84", "-84"], "A",
        "Perkalian dua bilangan bulat bertanda sama (negatif kali negatif) menghasilkan bilangan positif: $(-a) \\times (-b) = a \\times b$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$(-8) \\times (-12) = 96$$ (Opsi A)."
    ),
    make_q(
        "smp7-b1-7", "Sedang",
        "Hasil dari $(-72) : 8$ adalah...",
        ["-9", "9", "-8", "8"], "A",
        "Pembagian bilangan berbeda tanda (negatif dibagi positif) menghasilkan bilangan negatif.",
        "**Langkah Penyelesaian Terstruktur:**\n$$(-72) : 8 = -9$$ (Opsi A)."
    ),
    make_q(
        "smp7-b1-8", "Sedang",
        "Hasil dari operasi hitung campuran $18 - (-6) \\times 4 + (-10)$ adalah...",
        ["32", "6", "40", "-16"], "A",
        "Dahulukan operasi perkalian: $(-6) \\times 4 = -24$. Kemudian $18 - (-24) + (-10) = 18 + 24 - 10 = 32$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $(-6) \\times 4 = -24$\n2. $18 - (-24) + (-10) = 18 + 24 - 10 = 32$ (Opsi A)."
    ),
    make_q(
        "smp7-b1-9", "Sedang",
        "Suhu udara di kota Tokyo pada pagi hari adalah $-3^\\circ\\text{C}$. Pada siang hari suhu naik sebesar $8^\\circ\\text{C}$, kemudian pada malam hari turun sebesar $6^\\circ\\text{C}$. Suhu udara pada malam hari adalah...",
        ["-1°C", "1°C", "-5°C", "2°C"], "A",
        "Operasikan: $-3 + 8 - 6 = 5 - 6 = -1^\\circ\\text{C}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$-3 + 8 - 6 = -1^\\circ\\text{C}$$ (Opsi A)."
    ),
    make_q(
        "smp7-b1-10", "Sedang",
        "Seorang penyelam berada pada kedalaman 18 meter di bawah permukaan laut. Penyelam tersebut naik sejauh 7 meter, lalu menyelam lagi sedalam 4 meter. Posisi penyelam sekarang berada pada kedalaman...",
        ["15 meter di bawah permukaan laut", "21 meter di bawah permukaan laut", "11 meter di bawah permukaan laut", "17 meter di bawah permukaan laut"], "A",
        "Posisi awal $-18$. Naik $+7$, turun $-4$: $-18 + 7 - 4 = -15$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$-18 + 7 - 4 = -15\\text{ meter}$$ (Opsi A)."
    ),
    # Paket 3: Aplikasi & Terapan (Soal 11-15)
    make_q(
        "smp7-b1-11", "Sedang",
        "Dalam kompetisi matematika, setiap jawaban benar diberi skor 4, salah diberi skor -2, dan tidak dijawab diberi skor 0. Dari 40 soal, Ahmad menjawab benar 31 soal dan tidak menjawab 3 soal. Skor yang diperoleh Ahmad adalah...",
        ["112", "118", "124", "106"], "A",
        "Soal salah $= 40 - 31 - 3 = 6$. Total skor $= (31 \\times 4) + (6 \\times (-2)) + (3 \\times 0) = 124 - 12 = 112$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Skor} = (31 \\times 4) + (6 \\times (-2)) = 124 - 12 = 112$$ (Opsi A)."
    ),
    make_q(
        "smp7-b1-12", "Sedang",
        "Suhu daging di dalam freezer mula-mula adalah $-12^\\circ\\text{C}$. Daging tersebut dikeluarkan dan didiamkan sehingga suhunya naik rata-rata $3^\\circ\\text{C}$ setiap 5 menit. Suhu daging setelah 25 menit adalah...",
        ["3°C", "-3°C", "0°C", "5°C"], "A",
        "Kenaikan terjadi sebanyak $25 : 5 = 5$ kali. Kenaikan $= 5 \\times 3 = 15^\\circ\\text{C}$. Suhu akhir $= -12 + 15 = 3^\\circ\\text{C}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$-12 + \\left(\\frac{25}{5} \\times 3\\right) = -12 + 15 = 3^\\circ\\text{C}$$ (Opsi A)."
    ),
    make_q(
        "smp7-b1-13", "Sedang",
        "Nilai dari $|-25| - |14| + |-8|$ adalah...",
        ["19", "3", "-29", "21"], "A",
        "Nilai mutlak selalu non-negatif: $|-25| = 25$, $|14| = 14$, $|-8| = 8$. Hitung $25 - 14 + 8 = 19$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$25 - 14 + 8 = 19$$ (Opsi A)."
    ),
    make_q(
        "smp7-b1-14", "Sedang",
        "Faktor persekutuan terbesar (FPB) dari 48 dan 72 adalah...",
        ["24", "12", "16", "8"], "A",
        "Faktorisasi prima: $48 = 2^4 \\times 3$ dan $72 = 2^3 \\times 3^2$. $\\text{FPB} = 2^3 \\times 3 = 24$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{FPB} = 2^3 \\times 3 = 24$$ (Opsi A)."
    ),
    make_q(
        "smp7-b1-15", "Sedang",
        "KPK dari 12, 18, dan 24 adalah...",
        ["72", "48", "96", "144"], "A",
        "$12 = 2^2 \\times 3$, $18 = 2 \\times 3^2$, $24 = 2^3 \\times 3$. $\\text{KPK} = 2^3 \\times 3^2 = 8 \\times 9 = 72$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{KPK} = 2^3 \\times 3^2 = 72$$ (Opsi A)."
    ),
    # Paket 4: Tantangan & Analisis (Soal 16-20)
    make_q(
        "smp7-b1-16", "Tantangan",
        "Tiga buah lampu dinyalakan bersamaan. Lampu merah menyala setiap 6 detik, lampu kuning setiap 8 detik, dan lampu hijau setiap 12 detik. Ketiga lampu akan menyala bersamaan untuk kedua kalinya setelah...",
        ["24 detik", "36 detik", "48 detik", "18 detik"], "A",
        "Cari KPK dari 6, 8, dan 12: $\\text{KPK}(6, 8, 12) = 24$ detik.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{KPK}(6, 8, 12) = 24\\text{ detik}$$ (Opsi A)."
    ),
    make_q(
        "smp7-b1-17", "Tantangan",
        "Jika $a = -3, b = 2,$ dan $c = -4$, maka nilai dari $\\frac{a^2 - 2bc}{a + b + c}$ adalah...",
        ["-5", "5", "-3", "4"], "A",
        "Pembilang: $(-3)^2 - 2(2)(-4) = 9 - (-16) = 25$. Penyebut: $-3 + 2 - 4 = -5$. Nilai $= \\frac{25}{-5} = -5$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{(-3)^2 - 2(2)(-4)}{-3 + 2 - 4} = \\frac{9 + 16}{-5} = \\frac{25}{-5} = -5$$ (Opsi A)."
    ),
    make_q(
        "smp7-b1-18", "Tantangan",
        "Di sebuah ruang pendingin, suhu mula-mula adalah $25^\\circ\\text{C}$. Mesin pendingin dinyalakan sehingga suhu turun $2^\\circ\\text{C}$ setiap 3 menit. Setelah beberapa menit, suhu ruang menjadi $-7^\\circ\\text{C}$. Lama mesin pendingin telah beroperasi adalah...",
        ["48 menit", "45 menit", "42 menit", "50 menit"], "A",
        "Total penurunan suhu $= 25 - (-7) = 32^\\circ\\text{C}$. Banyak kali penurunan $= 32 : 2 = 16$ kali. Waktu $= 16 \\times 3 = 48$ menit.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Penurunan suhu: $25 - (-7) = 32^\\circ\\text{C}$\n2. Waktu: $\\frac{32}{2} \\times 3 = 48\\text{ menit}$ (Opsi A)."
    ),
    make_q(
        "smp7-b1-19", "Tantangan",
        "Banyaknya bilangan bulat antara $-50$ dan $50$ yang habis dibagi 4 tetapi tidak habis dibagi 6 adalah...",
        ["16", "24", "8", "20"], "A",
        "Kelipatan 4 antara -50 dan 50: $\\pm 4, \\pm 8, \\dots, \\pm 48$ (ada $12 \\times 2 = 24$ bilangan, tambah 0 jika non-nol atau cek batas). Antara -50 dan 50: kelipatan 4 positif ada 12 (4..48), negatif ada 12 (-4..-48), total 24 (tidak termasuk 0). Kelipatan 12 (KPK 4 dan 6): positif ada 4 (12,24,36,48), negatif ada 4 (-12,-24,-36,-48), total 8. Sisa $= 24 - 8 = 16$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Kelipatan 4: $12 + 12 = 24$\n2. Kelipatan 12: $4 + 4 = 8$\n3. Banyak bilangan: $24 - 8 = 16$ (Opsi A)."
    ),
    make_q(
        "smp7-b1-20", "Tantangan",
        "Dua bilangan bulat $p$ dan $q$ memenuhi $p + q = -5$ dan $p \\times q = -36$. Jika $p > q$, maka nilai dari $p - q$ adalah...",
        ["13", "11", "9", "15"], "A",
        "Faktor dari $-36$ dengan jumlah $-5$ adalah $4$ dan $-9$. Karena $p > q$, maka $p = 4$ dan $q = -9$. $p - q = 4 - (-9) = 13$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $p = 4$ dan $q = -9$\n2. $p - q = 4 - (-9) = 13$ (Opsi A)."
    )
]

# =========================================================================
# BAB 2: Bilangan Rasional (Existing: 4 -> Add 16 -> Total: 20)
# =========================================================================
b2_add = [
    # Paket 1 ke Paket 2 (Soal 5-10)
    make_q(
        "smp7-b2-5", "Dasar",
        "Bilangan rasional adalah bilangan yang dapat dinyatakan dalam bentuk $\\frac{a}{b}$ dengan syarat...",
        ["a dan b bilangan bulat serta b != 0", "a dan b bilangan asli", "a dan b bilangan cacah", "b boleh bernilai nol"], "A",
        "Definisi formal bilangan rasional $\\mathbb{Q} = \\{\\frac{a}{b} \\mid a, b \\in \\mathbb{Z}, b \\neq 0\\}$.",
        "**Langkah Penyelesaian Terstruktur:**\nSyaratnya adalah **$a, b \\in \\mathbb{Z}$ dan $b \\neq 0$** (Opsi A)."
    ),
    make_q(
        "smp7-b2-6", "Sedang",
        "Bentuk pecahan biasa paling sederhana dari bilangan desimal berulang $0{,}333\\dots$ adalah...",
        ["\\frac{1}{3}", "\\frac{3}{10}", "\\frac{33}{100}", "\\frac{1}{4}"], "A",
        "Misalkan $x = 0{,}333... \\implies 10x = 3{,}333... \\implies 9x = 3 \\implies x = \\frac{1}{3}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$9x = 3 \\implies x = \\frac{1}{3}$$ (Opsi A)."
    ),
    make_q(
        "smp7-b2-7", "Sedang",
        "Hasil dari operasi $-\\frac{2}{3} + \\frac{5}{6}$ adalah...",
        ["\\frac{1}{6}", "-\\frac{1}{6}", "\\frac{3}{6}", "\\frac{7}{6}"], "A",
        "Samakan penyebut menjadi 6: $-\\frac{4}{6} + \\frac{5}{6} = \\frac{1}{6}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$-\\frac{4}{6} + \\frac{5}{6} = \\frac{1}{6}$$ (Opsi A)."
    ),
    make_q(
        "smp7-b2-8", "Sedang",
        "Hasil dari $-\\frac{3}{4} \\times \\left(-\\frac{8}{9}\\right)$ adalah...",
        ["\\frac{2}{3}", "-\\frac{2}{3}", "\\frac{6}{13}", "-\\frac{24}{36}"], "A",
        "Negatif kali negatif menghasilkan positif: $\\frac{3 \\times 8}{4 \\times 9} = \\frac{24}{36} = \\frac{2}{3}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{3 \\times 8}{4 \\times 9} = \\frac{24}{36} = \\frac{2}{3}$$ (Opsi A)."
    ),
    make_q(
        "smp7-b2-9", "Sedang",
        "Hasil pembagian $-\\frac{5}{8} : \\frac{15}{16}$ adalah...",
        ["-\\frac{2}{3}", "\\frac{2}{3}", "-\\frac{3}{2}", "\\frac{75}{128}"], "A",
        "Ubah pembagian menjadi perkalian dengan kebalikan: $-\\frac{5}{8} \\times \\frac{16}{15} = -\\frac{1 \\times 2}{1 \\times 3} = -\\frac{2}{3}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$-\\frac{5}{8} \\times \\frac{16}{15} = -\\frac{2}{3}$$ (Opsi A)."
    ),
    make_q(
        "smp7-b2-10", "Sedang",
        "Bentuk desimal dari pecahan $-\\frac{7}{8}$ adalah...",
        ["-0,875", "-0,78", "-0,85", "-0,825"], "A",
        "Bagi 7 dengan 8: $7 : 8 = 0{,}875$, sehingga $-\\frac{7}{8} = -0{,}875$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$-\\frac{7}{8} = -0{,}875$$ (Opsi A)."
    ),
    # Paket 3: Aplikasi & Terapan (Soal 11-15)
    make_q(
        "smp7-b2-11", "Sedang",
        "Urutan bilangan $-0{,}75$; $-\\frac{4}{5}$; $-0{,}6$; $-\\frac{1}{2}$ dari yang terkecil ke terbesar adalah...",
        ["-4/5; -0,75; -0,6; -1/2", "-1/2; -0,6; -0,75; -4/5", "-0,75; -4/5; -0,6; -1/2", "-0,6; -1/2; -4/5; -0,75"], "A",
        "Ubah semua ke desimal: $-\\frac{4}{5} = -0{,}80$, $-0{,}75$, $-0{,}60$, $-\\frac{1}{2} = -0{,}50$. Semakin ke kiri di garis bilangan nilainya semakin kecil.",
        "**Langkah Penyelesaian Terstruktur:**\nUrutan naik: **-4/5; -0,75; -0,6; -1/2** (Opsi A)."
    ),
    make_q(
        "smp7-b2-12", "Sedang",
        "Hasil dari operasi campuran $\\left(-\\frac{1}{2} + 0{,}75\\right) : \\left(-\\frac{1}{4}\\right)$ adalah...",
        ["-1", "1", "-0,5", "0,5"], "A",
        "Dalam kurung: $-0{,}5 + 0{,}75 = 0{,}25 = \\frac{1}{4}$. Pembagian: $\\frac{1}{4} : \\left(-\\frac{1}{4}\\right) = -1$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{1}{4} : \\left(-\\frac{1}{4}\\right) = -1$$ (Opsi A)."
    ),
    make_q(
        "smp7-b2-13", "Sedang",
        "Ibu mempunyai persediaan terigu sebanyak $3\\frac{1}{2}$ kg. Digunakan untuk membuat kue bolu $1\\frac{3}{4}$ kg dan kue nastar 0,8 kg. Sisa terigu Ibu adalah...",
        ["0,95 kg", "1,05 kg", "0,85 kg", "1,15 kg"], "A",
        "Ubah ke desimal: $3{,}5 - 1{,}75 - 0{,}8 = 1{,}75 - 0{,}8 = 0{,}95$ kg.",
        "**Langkah Penyelesaian Terstruktur:**\n$$3{,}5 - 1{,}75 - 0{,}8 = 0{,}95\\text{ kg}$$ (Opsi A)."
    ),
    make_q(
        "smp7-b2-14", "Sedang",
        "Bentuk pecahan biasa paling sederhana dari desimal berulang $0{,}454545\\dots$ adalah...",
        ["\\frac{5}{11}", "\\frac{9}{20}", "\\frac{45}{100}", "\\frac{4}{9}"], "A",
        "$100x - x = 45 \\implies 99x = 45 \\implies x = \\frac{45}{99} = \\frac{5}{11}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$x = \\frac{45}{99} = \\frac{5}{11}$$ (Opsi A)."
    ),
    make_q(
        "smp7-b2-15", "Sedang",
        "Bilangan rasional yang terletak tepat di tengah-tengah antara $\\frac{1}{3}$ dan $\\frac{1}{2}$ adalah...",
        ["\\frac{5}{12}", "\\frac{2}{5}", "\\frac{7}{12}", "\\frac{3}{8}"], "A",
        "Rata-rata: $\\frac{1}{2}\\left(\\frac{1}{3} + \\frac{1}{2}\\right) = \\frac{1}{2}\\left(\\frac{5}{6}\\right) = \\frac{5}{12}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{\\frac{1}{3} + \\frac{1}{2}}{2} = \\frac{5}{12}$$ (Opsi A)."
    ),
    # Paket 4: Tantangan & Analisis (Soal 16-20)
    make_q(
        "smp7-b2-16", "Tantangan",
        "Nilai dari $1 - \\frac{1}{1 + \\frac{1}{2}}$ adalah...",
        ["\\frac{1}{3}", "\\frac{2}{3}", "\\frac{1}{2}", "\\frac{3}{4}"], "A",
        "Penyebut: $1 + \\frac{1}{2} = \\frac{3}{2}$. Kebalikan: $\\frac{1}{\\frac{3}{2}} = \\frac{2}{3}$. Hasil $= 1 - \\frac{2}{3} = \\frac{1}{3}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$1 - \\frac{2}{3} = \\frac{1}{3}$$ (Opsi A)."
    ),
    make_q(
        "smp7-b2-17", "Tantangan",
        "Hasil dari operasi beruntun $\\left(1 - \\frac{1}{2}\\right)\\left(1 - \\frac{1}{3}\\right)\\left(1 - \\frac{1}{4}\\right)\\dots\\left(1 - \\frac{1}{10}\\right)$ adalah...",
        ["\\frac{1}{10}", "\\frac{1}{5}", "\\frac{9}{10}", "\\frac{1}{20}"], "A",
        "Perkalian teleskopik: $\\frac{1}{2} \\times \\frac{2}{3} \\times \\frac{3}{4} \\times \\dots \\times \\frac{9}{10} = \\frac{1}{10}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{1}{2} \\times \\frac{2}{3} \\times \\frac{3}{4} \\times \\dots \\times \\frac{9}{10} = \\frac{1}{10}$$ (Opsi A)."
    ),
    make_q(
        "smp7-b2-18", "Tantangan",
        "Sebuah tangki bensin terisi $\\frac{3}{8}$ bagian. Ketika ditambahkan 15 liter bensin, tangki tersebut terisi $\\frac{3}{4}$ bagian. Kapasitas penuh tangki tersebut adalah...",
        ["40 liter", "36 liter", "48 liter", "32 liter"], "A",
        "Selisih bagian: $\\frac{3}{4} - \\frac{3}{8} = \\frac{3}{8}$ bagian $= 15$ liter. Kapasitas penuh $= 15 \\times \\frac{8}{3} = 40$ liter.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Kapasitas} = 15 : \\frac{3}{8} = 40\\text{ liter}$$ (Opsi A)."
    ),
    make_q(
        "smp7-b2-19", "Tantangan",
        "Manakah di antara bilangan berikut yang BUKAN merupakan bilangan rasional?",
        ["\\sqrt{5}", "-\\frac{22}{7}", "0{,}121212\\dots", "\\sqrt{0{,}25}"], "A",
        "$\\sqrt{5}$ adalah bilangan irasional (desimal tak berulang dan tak terbatas). $\\sqrt{0{,}25} = 0{,}5 = \\frac{1}{2}$ adalah rasional.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\sqrt{5} \\text{ adalah bilangan irasional}$$ (Opsi A)."
    ),
    make_q(
        "smp7-b2-20", "Tantangan",
        "Nilai $x$ yang memenuhi persamaan $\\frac{2}{3}x - \\frac{1}{4} = \\frac{1}{2}x + \\frac{1}{6}$ adalah...",
        ["\\frac{5}{2}", "2", "\\frac{7}{4}", "3"], "A",
        "Kalikan kedua ruas dengan KPK(3, 4, 2, 6) = 12: $8x - 3 = 6x + 2 \\implies 2x = 5 \\implies x = \\frac{5}{2}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$8x - 3 = 6x + 2 \\implies 2x = 5 \\implies x = \\frac{5}{2}$$ (Opsi A)."
    )
]

# =========================================================================
# BAB 3: Rasio (Existing: 4 -> Add 16 -> Total: 20)
# =========================================================================
b3_add = [
    # Paket 1 ke Paket 2 (Soal 5-10)
    make_q(
        "smp7-b3-5", "Dasar",
        "Bentuk ekuivalen dari rasio 24 : 36 dalam bentuk paling sederhana adalah...",
        ["2 : 3", "3 : 4", "4 : 6", "1 : 2"], "A",
        "Bagi kedua suku rasio dengan FPB yaitu 12: $24 : 12 = 2$ dan $36 : 12 = 3$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$24 : 36 = 2 : 3$$ (Opsi A)."
    ),
    make_q(
        "smp7-b3-6", "Sedang",
        "Perbandingan uang jajan Budi dan Caca adalah 4 : 5. Jika uang jajan Budi Rp24.000,00, maka uang jajan Caca adalah...",
        ["Rp30.000,00", "Rp28.000,00", "Rp32.000,00", "Rp35.000,00"], "A",
        "Uang Caca $= \\frac{5}{4} \\times 24.000 = 30.000$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Uang Caca} = \\frac{5}{4} \\times 24.000 = 30.000\\text{ rupiah}$$ (Opsi A)."
    ),
    make_q(
        "smp7-b3-7", "Sedang",
        "Sebuah mobil menempuh jarak 180 km dalam waktu 3 jam. Laju kecepatan rata-rata mobil tersebut adalah...",
        ["60 km/jam", "55 km/jam", "65 km/jam", "50 km/jam"], "A",
        "Laju perubahan (kecepatan) $= \\frac{\\text{jarak}}{\\text{waktu}} = \\frac{180}{3} = 60$ km/jam.",
        "**Langkah Penyelesaian Terstruktur:**\n$$v = \\frac{180}{3} = 60\\text{ km/jam}$$ (Opsi A)."
    ),
    make_q(
        "smp7-b3-8", "Sedang",
        "Harga 5 kg beras adalah Rp65.000,00. Harga 8 kg beras yang sama adalah...",
        ["Rp104.000,00", "Rp98.000,00", "Rp110.000,00", "Rp96.000,00"], "A",
        "Harga per kg $= 65.000 : 5 = 13.000$. Untuk 8 kg $= 8 \\times 13.000 = 104.000$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$8 \\times 13.000 = 104.000\\text{ rupiah}$$ (Opsi A)."
    ),
    make_q(
        "smp7-b3-9", "Sedang",
        "Jarak 5 cm pada peta mewakili jarak sebenarnya 25 km. Skala peta tersebut adalah...",
        ["1 : 500.000", "1 : 50.000", "1 : 5.000.000", "1 : 250.000"], "A",
        "Ubah km ke cm: $25\\text{ km} = 2.500.000\\text{ cm}$. Skala $= 5 : 2.500.000 = 1 : 500.000$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Skala} = 5 : 2.500.000 = 1 : 500.000$$ (Opsi A)."
    ),
    make_q(
        "smp7-b3-10", "Sedang",
        "Rasio bahan bakar terhadap jarak tempuh sepeda motor adalah 1 liter : 45 km. Berapa liter bahan bakar yang dibutuhkan untuk perjalanan sejauh 135 km?",
        ["3 liter", "2,5 liter", "3,5 liter", "4 liter"], "A",
        "Bahan bakar $= 135 : 45 = 3$ liter.",
        "**Langkah Penyelesaian Terstruktur:**\n$$135 : 45 = 3\\text{ liter}$$ (Opsi A)."
    ),
    # Paket 3: Aplikasi & Terapan (Soal 11-15)
    make_q(
        "smp7-b3-11", "Sedang",
        "Suatu proyek gedung direncanakan selesai dalam waktu 30 hari oleh 12 orang pekerja. Jika pekerja ditambah 3 orang, proyek tersebut dapat diselesaikan dalam waktu...",
        ["24 hari", "25 hari", "20 hari", "26 hari"], "A",
        "Perbandingan berbalik nilai: $12 \\times 30 = 15 \\times H \\implies H = \\frac{360}{15} = 24$ hari.",
        "**Langkah Penyelesaian Terstruktur:**\n$$H = \\frac{12 \\times 30}{15} = 24\\text{ hari}$$ (Opsi A)."
    ),
    make_q(
        "smp7-b3-12", "Sedang",
        "Sebuah foto berukuran $3\\text{ cm} \\times 4\\text{ cm}$ diperbesar sehingga sisi panjangnya menjadi 12 cm. Luas foto setelah diperbesar adalah...",
        ["108 cm²", "96 cm²", "144 cm²", "72 cm²"], "A",
        "Faktor perbesaran $k = 12 : 4 = 3$. Lebar baru $= 3 \\times 3 = 9$ cm. Luas baru $= 9 \\times 12 = 108$ cm².",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Luas} = 9 \\times 12 = 108\\text{ cm}^2$$ (Opsi A)."
    ),
    make_q(
        "smp7-b3-13", "Sedang",
        "Debit air dari sebuah keran adalah 15 liter/menit. Waktu yang diperlukan untuk mengisi bak mandi bervolume 240 liter sampai penuh adalah...",
        ["16 menit", "15 menit", "18 menit", "20 menit"], "A",
        "Waktu $= \\frac{\\text{Volume}}{\\text{Debit}} = \\frac{240}{15} = 16$ menit.",
        "**Langkah Penyelesaian Terstruktur:**\n$$t = \\frac{240}{15} = 16\\text{ menit}$$ (Opsi A)."
    ),
    make_q(
        "smp7-b3-14", "Sedang",
        "Perbandingan kelereng Amir, Budi, dan Candra adalah 2 : 3 : 5. Jika jumlah kelereng Amir dan Candra adalah 42 butir, berapakah banyak kelereng Budi?",
        ["18 butir", "15 butir", "21 butir", "24 butir"], "A",
        "Bagian Amir + Candra $= 2 + 5 = 7$. Nilai 1 bagian $= 42 : 7 = 6$. Kelereng Budi $= 3 \\times 6 = 18$ butir.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Kelereng Budi} = \\frac{3}{2 + 5} \\times 42 = 18\\text{ butir}$$ (Opsi A)."
    ),
    make_q(
        "smp7-b3-15", "Sedang",
        "Sebuah mesin cetak mampu mencetak 480 lembar brosur dalam waktu 8 menit. Banyak brosur yang dicetak mesin tersebut dalam waktu 15 menit adalah...",
        ["900 lembar", "800 lembar", "960 lembar", "850 lembar"], "A",
        "Kecepatan cetak $= 480 : 8 = 60$ lembar/menit. Dalam 15 menit $= 15 \\times 60 = 900$ lembar.",
        "**Langkah Penyelesaian Terstruktur:**\n$$15 \\times 60 = 900\\text{ lembar}$$ (Opsi A)."
    ),
    # Paket 4: Tantangan & Analisis (Soal 16-20)
    make_q(
        "smp7-b3-16", "Tantangan",
        "Persediaan pakan ternak untuk 40 ekor sapi cukup untuk 18 hari. Jika peternak membeli 20 ekor sapi lagi, persediaan pakan tersebut akan habis dalam waktu...",
        ["12 hari", "14 hari", "10 hari", "15 hari"], "A",
        "Total sapi $= 40 + 20 = 60$. Perbandingan berbalik nilai: $40 \\times 18 = 60 \\times H \\implies H = \\frac{720}{60} = 12$ hari.",
        "**Langkah Penyelesaian Terstruktur:**\n$$H = \\frac{40 \\times 18}{60} = 12\\text{ hari}$$ (Opsi A)."
    ),
    make_q(
        "smp7-b3-17", "Tantangan",
        "Dua kota berjarak 120 km. Pada peta dengan skala 1 : 1.500.000, jarak kedua kota tersebut adalah...",
        ["8 cm", "6 cm", "10 cm", "12 cm"], "A",
        "$120\\text{ km} = 12.000.000\\text{ cm}$. Jarak pada peta $= 12.000.000 : 1.500.000 = 8$ cm.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Jarak peta} = \\frac{12.000.000}{1.500.000} = 8\\text{ cm}$$ (Opsi A)."
    ),
    make_q(
        "smp7-b3-18", "Tantangan",
        "Pembangunan jembatan direncanakan selesai dalam 30 hari oleh 16 pekerja. Setelah bekerja selama 10 hari, proyek dihentikan selama 4 hari. Agar pekerjaan tetap selesai tepat waktu (dalam 30 hari), banyak pekerja tambahan yang diperlukan adalah...",
        ["4 orang", "5 orang", "6 orang", "3 orang"], "A",
        "Sisa beban kerja: 16 pekerja selama 20 hari $= 320$ orang-hari. Sisa waktu tersedia: $20 - 4 = 16$ hari. Pekerja yang dibutuhkan: $320 : 16 = 20$ pekerja. Pekerja tambahan: $20 - 16 = 4$ orang.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Sisa beban kerja: $16 \\times (30 - 10) = 320\\text{ orang-hari}$\n2. Sisa hari riil: $20 - 4 = 16\\text{ hari}$\n3. Pekerja total: $320 : 16 = 20\\text{ orang}$\n4. Tambahan pekerja: $20 - 16 = 4\\text{ orang}$ (Opsi A)."
    ),
    make_q(
        "smp7-b3-19", "Tantangan",
        "Perbandingan keliling dua lingkaran adalah 3 : 5. Perbandingan luas kedua lingkaran tersebut adalah...",
        ["9 : 25", "3 : 5", "6 : 10", "27 : 125"], "A",
        "Rasio keliling sama dengan rasio jari-jari $r_1 : r_2 = 3 : 5$. Rasio luas $= r_1^2 : r_2^2 = 3^2 : 5^2 = 9 : 25$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Rasio luas} = 3^2 : 5^2 = 9 : 25$$ (Opsi A)."
    ),
    make_q(
        "smp7-b3-20", "Tantangan",
        "A dan B bekerja bersama dapat menyelesaikan suatu pekerjaan dalam 6 hari. Jika A bekerja sendiri membutuhkan waktu 10 hari, berapa hari waktu yang dibutuhkan jika B bekerja sendiri?",
        ["15 hari", "12 hari", "14 hari", "16 hari"], "A",
        "$\\frac{1}{B} = \\frac{1}{6} - \\frac{1}{10} = \\frac{5 - 3}{30} = \\frac{2}{30} = \\frac{1}{15} \\implies B = 15$ hari.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{1}{B} = \\frac{1}{6} - \\frac{1}{10} = \\frac{1}{15} \\implies B = 15\\text{ hari}$$ (Opsi A)."
    )
]

# =========================================================================
# BAB 4: Bentuk Aljabar (Existing: 4 -> Add 16 -> Total: 20)
# =========================================================================
b4_add = [
    # Paket 1 ke Paket 2 (Soal 5-10)
    make_q(
        "smp7-b4-5", "Dasar",
        "Koefisien dari variabel $x$ pada bentuk aljabar $3x^2 - 7x + 5$ adalah...",
        ["-7", "7", "3", "5"], "A",
        "Koefisien adalah angka pengali yang berada tepat di depan variabel $x$, yaitu $-7$.",
        "**Langkah Penyelesaian Terstruktur:**\nKoefisien dari $x$ adalah **-7** (Opsi A)."
    ),
    make_q(
        "smp7-b4-6", "Sedang",
        "Bentuk sederhana dari $4x - 5y + 3x + 8y$ adalah...",
        ["7x + 3y", "7x - 3y", "x + 3y", "7x + 13y"], "A",
        "Kelompokkan suku sejenis: $(4x + 3x) + (-5y + 8y) = 7x + 3y$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$(4x + 3x) + (-5y + 8y) = 7x + 3y$$ (Opsi A)."
    ),
    make_q(
        "smp7-b4-7", "Sedang",
        "Hasil perkalian suku tunggal $3a(2a - 5b)$ adalah...",
        ["6a² - 15ab", "6a - 15ab", "5a² - 15ab", "6a² - 5b"], "A",
        "Distribusikan $3a$: $3a \\times 2a - 3a \\times 5b = 6a^2 - 15ab$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$3a(2a - 5b) = 6a^2 - 15ab$$ (Opsi A)."
    ),
    make_q(
        "smp7-b4-8", "Sedang",
        "Hasil penjabaran dari $(2x + 3)(x - 4)$ adalah...",
        ["2x² - 5x - 12", "2x² + 5x - 12", "2x² - 8x - 12", "2x² - 5x + 12"], "A",
        "$(2x)(x) + (2x)(-4) + (3)(x) + (3)(-4) = 2x^2 - 8x + 3x - 12 = 2x^2 - 5x - 12$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$2x^2 - 8x + 3x - 12 = 2x^2 - 5x - 12$$ (Opsi A)."
    ),
    make_q(
        "smp7-b4-9", "Sedang",
        "Hasil pengurangan $3x - 2y$ oleh $5x + 4y$ adalah...",
        ["-2x - 6y", "2x + 6y", "-2x + 2y", "8x + 2y"], "A",
        "Pengurangan $A$ oleh $B$ berarti $A - B$: $(3x - 2y) - (5x + 4y) = 3x - 2y - 5x - 4y = -2x - 6y$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$(3x - 2y) - (5x + 4y) = -2x - 6y$$ (Opsi A)."
    ),
    make_q(
        "smp7-b4-10", "Sedang",
        "Jika $x = 3$ dan $y = -2$, nilai dari $2x^2 - 3xy + y^2$ adalah...",
        ["40", "28", "32", "36"], "A",
        "$2(3^2) - 3(3)(-2) + (-2)^2 = 2(9) - (-18) + 4 = 18 + 18 + 4 = 40$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$2(9) + 18 + 4 = 40$$ (Opsi A)."
    ),
    # Paket 3: Aplikasi & Terapan (Soal 11-15)
    make_q(
        "smp7-b4-11", "Sedang",
        "Bentuk pemfaktoran dari $x^2 - 9$ adalah...",
        ["(x - 3)(x + 3)", "(x - 3)²", "(x + 3)²", "(x - 9)(x + 1)"], "A",
        "Selisih dua kuadrat: $a^2 - b^2 = (a - b)(a + b) \\implies (x - 3)(x + 3)$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$x^2 - 9 = (x - 3)(x + 3)$$ (Opsi A)."
    ),
    make_q(
        "smp7-b4-12", "Sedang",
        "Keliling persegi panjang dinyatakan oleh $K = 2(p + l)$. Jika panjangnya $(3x + 2)$ cm dan lebarnya $(x + 4)$ cm, rumus kelilingnya dalam bentuk aljabar paling sederhana adalah...",
        ["8x + 12", "4x + 6", "8x + 6", "6x + 12"], "A",
        "$K = 2[(3x + 2) + (x + 4)] = 2(4x + 6) = 8x + 12$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$K = 2(4x + 6) = 8x + 12\\text{ cm}$$ (Opsi A)."
    ),
    make_q(
        "smp7-b4-13", "Sedang",
        "Bentuk paling sederhana dari pecahan aljabar $\\frac{6x^2 y}{9xy^2}$ adalah...",
        ["\\frac{2x}{3y}", "\\frac{3x}{2y}", "\\frac{2y}{3x}", "\\frac{3y}{2x}"], "A",
        "Bagi pembilang dan penyebut dengan $3xy$: $\\frac{6 : 3}{9 : 3} \\times \\frac{x}{y} = \\frac{2x}{3y}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{6x^2 y}{9xy^2} = \\frac{2x}{3y}$$ (Opsi A)."
    ),
    make_q(
        "smp7-b4-14", "Sedang",
        "Hasil penjumlahan pecahan aljabar $\\frac{2}{x} + \\frac{3}{y}$ adalah...",
        ["\\frac{2y + 3x}{xy}", "\\frac{5}{x + y}", "\\frac{5}{xy}", "\\frac{2x + 3y}{xy}"], "A",
        "Samakan penyebut menjadi $xy$: $\\frac{2y}{xy} + \\frac{3x}{xy} = \\frac{2y + 3x}{xy}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{2}{x} + \\frac{3}{y} = \\frac{2y + 3x}{xy}$$ (Opsi A)."
    ),
    make_q(
        "smp7-b4-15", "Sedang",
        "Hasil bagi dari bentuk aljabar $(6x^2 + 7x - 20) : (2x + 5)$ adalah...",
        ["3x - 4", "3x + 4", "3x - 5", "2x - 4"], "A",
        "Faktorkan pembilang: $(2x + 5)(3x - 4) : (2x + 5) = 3x - 4$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{(2x + 5)(3x - 4)}{2x + 5} = 3x - 4$$ (Opsi A)."
    ),
    # Paket 4: Tantangan & Analisis (Soal 16-20)
    make_q(
        "smp7-b4-16", "Tantangan",
        "Hasil dari $(2x - 3)^2$ adalah...",
        ["4x² - 12x + 9", "4x² - 9", "4x² + 12x + 9", "4x² - 6x + 9"], "A",
        "Kuadrat suku dua: $(a - b)^2 = a^2 - 2ab + b^2 = (2x)^2 - 2(2x)(3) + 3^2 = 4x^2 - 12x + 9$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$(2x - 3)^2 = 4x^2 - 12x + 9$$ (Opsi A)."
    ),
    make_q(
        "smp7-b4-17", "Tantangan",
        "Diketahui $a + b = 7$ dan $a \\times b = 10$. Nilai dari $a^2 + b^2$ adalah...",
        ["29", "49", "39", "19"], "A",
        "Identitas aljabar: $a^2 + b^2 = (a + b)^2 - 2ab = 7^2 - 2(10) = 49 - 20 = 29$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$a^2 + b^2 = (a + b)^2 - 2ab = 49 - 20 = 29$$ (Opsi A)."
    ),
    make_q(
        "smp7-b4-18", "Tantangan",
        "Bentuk sederhana dari $\\frac{x^2 - 5x + 6}{x^2 - 4}$ untuk $x \\neq \\pm 2$ adalah...",
        ["\\frac{x - 3}{x + 2}", "\\frac{x - 3}{x - 2}", "\\frac{x + 3}{x + 2}", "\\frac{x - 2}{x + 2}"], "A",
        "Faktorkan pembilang dan penyebut: $\\frac{(x - 2)(x - 3)}{(x - 2)(x + 2)} = \\frac{x - 3}{x + 2}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{(x - 2)(x - 3)}{(x - 2)(x + 2)} = \\frac{x - 3}{x + 2}$$ (Opsi A)."
    ),
    make_q(
        "smp7-b4-19", "Tantangan",
        "Jika $x + \\frac{1}{x} = 4$, maka nilai dari $x^2 + \\frac{1}{x^2}$ adalah...",
        ["14", "16", "18", "12"], "A",
        "Kuadratkan kedua ruas: $(x + \\frac{1}{x})^2 = x^2 + 2 + \\frac{1}{x^2} = 16 \\implies x^2 + \\frac{1}{x^2} = 14$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$x^2 + \\frac{1}{x^2} = 4^2 - 2 = 14$$ (Opsi A)."
    ),
    make_q(
        "smp7-b4-20", "Tantangan",
        "Umur Ayah saat ini adalah $(5x + 2)$ tahun, sedangkan umur Anaknya adalah $(2x - 1)$ tahun. Selisih umur Ayah dan Anak setelah 5 tahun mendatang adalah...",
        ["3x + 3 tahun", "3x + 8 tahun", "3x - 3 tahun", "7x + 1 tahun"], "A",
        "Selisih umur selalu tetap: $(5x + 2) - (2x - 1) = 3x + 3$ tahun.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Selisih} = (5x + 2) - (2x - 1) = 3x + 3\\text{ tahun}$$ (Opsi A)."
    )
]

# =========================================================================
# BAB 5: Kesebangunan (Existing: 4 -> Add 16 -> Total: 20)
# =========================================================================
b5_add = [
    # Paket 1 ke Paket 2 (Soal 5-10)
    make_q(
        "smp7-b5-5", "Dasar",
        "Dua bangun datar dikatakan kongruen (sama dan sebangun) jika memenuhi syarat...",
        ["Bentuk dan ukurannya sama persis", "Bentuknya sama tetapi ukurannya berbeda", "Hanya memiliki sudut-sudut yang sama besar", "Hanya memiliki luas yang sama"], "A",
        "Kongruen berarti bentuk dan ukuran identik sama persis.",
        "**Langkah Penyelesaian Terstruktur:**\nKongruen berarti **bentuk dan ukuran sama persis** (Opsi A)."
    ),
    make_q(
        "smp7-b5-6", "Sedang",
        "Dua bangun datar dikatakan sebangun jika...",
        ["Sudut-sudut yang bersesuaian sama besar dan sisi-sisi yang bersesuaian sebanding", "Sudut-sudut yang bersesuaian sama besar saja", "Sisi-sisi yang bersesuaian sama panjang", "Luas dan kelilingnya sama"], "A",
        "Syarat kesebangunan: sudut bersesuaian sama besar dan sisi bersesuaian sebanding.",
        "**Langkah Penyelesaian Terstruktur:**\nSyarat kesebangunan adalah **sudut sama besar dan sisi sebanding** (Opsi A)."
    ),
    make_q(
        "smp7-b5-7", "Sedang",
        "Dua persegi panjang sebangun. Persegi panjang I berukuran $6\\text{ cm} \\times 4\\text{ cm}$. Jika panjang persegi panjang II adalah 18 cm, maka lebarnya adalah...",
        ["12 cm", "10 cm", "8 cm", "14 cm"], "A",
        "Rasio panjang $= 18 : 6 = 3$. Lebar II $= 4 \\times 3 = 12$ cm.",
        "**Langkah Penyelesaian Terstruktur:**\n$$l_2 = 4 \\times \\frac{18}{6} = 12\\text{ cm}$$ (Opsi A)."
    ),
    make_q(
        "smp7-b5-8", "Sedang",
        "Sebuah tongkat setinggi 1,5 meter memiliki bayangan sepanjang 2 meter. Pada saat yang sama, sebuah pohon memiliki bayangan sepanjang 12 meter. Tinggi pohon tersebut adalah...",
        ["9 meter", "8 meter", "10 meter", "7,5 meter"], "A",
        "Perbandingan kesebangunan: $\\frac{T}{1{,}5} = \\frac{12}{2} \\implies T = 6 \\times 1{,}5 = 9$ meter.",
        "**Langkah Penyelesaian Terstruktur:**\n$$T = \\frac{12}{2} \\times 1{,}5 = 9\\text{ meter}$$ (Opsi A)."
    ),
    make_q(
        "smp7-b5-9", "Sedang",
        "Segitiga $ABC$ sebangun dengan segitiga $DEF$. Jika $AB = 6$ cm, $BC = 8$ cm, $AC = 10$ cm, dan sisi terpendek segitiga $DEF$ adalah 9 cm, panjang sisi terpanjang segitiga $DEF$ adalah...",
        ["15 cm", "12 cm", "18 cm", "20 cm"], "A",
        "Sisi terpendek $AB = 6$, pada $DEF = 9 \\implies$ faktor skala $k = \\frac{9}{6} = 1{,}5$. Sisi terpanjang $= 10 \\times 1{,}5 = 15$ cm.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Sisi terpanjang} = 10 \\times 1{,}5 = 15\\text{ cm}$$ (Opsi A)."
    ),
    make_q(
        "smp7-b5-10", "Sedang",
        "Manakah pasangan bangun datar berikut yang PASTI selalu sebangun?",
        ["Dua buah persegi", "Dua buah persegi panjang", "Dua buah belah ketupat", "Dua buah segitiga sama kaki"], "A",
        "Dua persegi selalu memiliki sudut-sudut $90^\\circ$ dan perbandingan sisi $1 : 1$, sehingga pasti sebangun.",
        "**Langkah Penyelesaian Terstruktur:**\nPasangan yang pasti sebangun adalah **dua buah persegi** (Opsi A)."
    ),
    # Paket 3: Aplikasi & Terapan (Soal 11-15)
    make_q(
        "smp7-b5-11", "Sedang",
        "Sebuah foto ditempelkan pada selembar karton berukuran $40\\text{ cm} \\times 50\\text{ cm}$. Di sebelah kiri, kanan, dan atas foto masih terdapat sisa karton selebar 4 cm. Jika foto dan karton sebangun, lebar sisa karton di bagian bawah foto adalah...",
        ["6 cm", "5 cm", "8 cm", "4 cm"], "A",
        "Lebar foto $= 40 - 8 = 32$ cm. Panjang foto $= 32 \\times \\frac{50}{40} = 40$ cm. Sisa bawah $= 50 - 4 - 40 = 6$ cm.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Lebar foto $= 32\\text{ cm}$\n2. Tinggi foto $= \\frac{32}{40} \\times 50 = 40\\text{ cm}$\n3. Sisa bawah $= 50 - 4 - 40 = 6\\text{ cm}$ (Opsi A)."
    ),
    make_q(
        "smp7-b5-12", "Sedang",
        "Pada segitiga $ABC$, garis $DE$ sejajar dengan sisi $BC$ sehingga $D$ pada $AB$ dan $E$ pada $AC$. Jika $AD = 4$ cm, $DB = 6$ cm, dan $DE = 8$ cm, panjang sisi $BC$ adalah...",
        ["20 cm", "18 cm", "16 cm", "24 cm"], "A",
        "Panjang $AB = 4 + 6 = 10$ cm. Kesebangunan: $\\frac{DE}{BC} = \\frac{AD}{AB} \\implies \\frac{8}{BC} = \\frac{4}{10} \\implies BC = 20$ cm.",
        "**Langkah Penyelesaian Terstruktur:**\n$$BC = \\frac{8 \\times 10}{4} = 20\\text{ cm}$$ (Opsi A)."
    ),
    make_q(
        "smp7-b5-13", "Sedang",
        "Perbandingan keliling dua bangun yang sebangun adalah 2 : 5. Perbandingan luas kedua bangun tersebut adalah...",
        ["4 : 25", "2 : 5", "8 : 125", "1 : 4"], "A",
        "Rasio luas dua bangun sebangun sama dengan kuadrat rasio sisinya/kelilingnya: $2^2 : 5^2 = 4 : 25$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Rasio luas} = 2^2 : 5^2 = 4 : 25$$ (Opsi A)."
    ),
    make_q(
        "smp7-b5-14", "Sedang",
        "Segitiga siku-siku $ABC$ siku-siku di $B$ dengan $AB = 8$ cm dan $BC = 6$ cm. Panjang garis tinggi $BD$ yang ditarik ke sisi miring $AC$ adalah...",
        ["4,8 cm", "5,0 cm", "4,2 cm", "5,2 cm"], "A",
        "$AC = \\sqrt{8^2 + 6^2} = 10$ cm. Luas segitiga: $\\frac{1}{2} \\times 8 \\times 6 = \\frac{1}{2} \\times 10 \\times BD \\implies BD = \\frac{48}{10} = 4{,}8$ cm.",
        "**Langkah Penyelesaian Terstruktur:**\n$$BD = \\frac{8 \\times 6}{10} = 4{,}8\\text{ cm}$$ (Opsi A)."
    ),
    make_q(
        "smp7-b5-15", "Sedang",
        "Dua segitiga sama sisi dengan panjang sisi masing-masing 6 cm dan 9 cm memiliki perbandingan luas sebesar...",
        ["4 : 9", "2 : 3", "16 : 81", "1 : 2"], "A",
        "Rasio sisi $= 6 : 9 = 2 : 3$. Rasio luas $= 2^2 : 3^2 = 4 : 9$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Rasio luas} = 2^2 : 3^2 = 4 : 9$$ (Opsi A)."
    ),
    # Paket 4: Tantangan & Analisis (Soal 16-20)
    make_q(
        "smp7-b5-16", "Tantangan",
        "Trapesium $ABCD$ dengan $AB \\parallel CD$ memiliki panjang $AB = 18$ cm dan $CD = 6$ cm. Titik $E$ pada $AD$ dan $F$ pada $BC$ sehingga $EF \\parallel AB$. Jika $AE : ED = 2 : 1$, panjang $EF$ adalah...",
        ["10 cm", "12 cm", "14 cm", "8 cm"], "A",
        "Rumus garis bagi trapesium: $EF = \\frac{AE \\times CD + ED \\times AB}{AE + ED} = \\frac{2(6) + 1(18)}{2 + 1} = \\frac{12 + 18}{3} = 10$ cm.",
        "**Langkah Penyelesaian Terstruktur:**\n$$EF = \\frac{2(6) + 1(18)}{3} = \\frac{30}{3} = 10\\text{ cm}$$ (Opsi A)."
    ),
    make_q(
        "smp7-b5-17", "Tantangan",
        "Sebuah miniatur gedung bertingkat dibuat dengan skala 1 : 200. Jika volume miniatur gedung tersebut adalah 500 cm³, volume sebenarnya dari gedung tersebut adalah...",
        ["4.000 m³", "2.000 m³", "1.000 m³", "8.000 m³"], "A",
        "Rasio volume $= k^3 = 200^3 = 8.000.000$. Volume nyata $= 500 \\times 8.000.000\\text{ cm}^3 = 4.000.000.000\\text{ cm}^3 = 4.000\\text{ m}^3$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$V = 500 \\times 200^3\\text{ cm}^3 = 4.000\\text{ m}^3$$ (Opsi A)."
    ),
    make_q(
        "smp7-b5-18", "Tantangan",
        "Pada segitiga siku-siku $ABC$ siku-siku di $A$, ditarik garis tinggi $AD$ tegak lurus $BC$. Jika $BD = 4$ cm dan $CD = 9$ cm, maka panjang garis tinggi $AD$ adalah...",
        ["6 cm", "5 cm", "7 cm", "6,5 cm"], "A",
        "Teorema air mancur (kesebangunan): $AD^2 = BD \\times CD = 4 \\times 9 = 36 \\implies AD = 6$ cm.",
        "**Langkah Penyelesaian Terstruktur:**\n$$AD = \\sqrt{4 \\times 9} = 6\\text{ cm}$$ (Opsi A)."
    ),
    make_q(
        "smp7-b5-19", "Tantangan",
        "Dari soal sebelumnya, panjang sisi $AB$ adalah...",
        ["2\\sqrt{13} cm", "6 cm", "4\\sqrt{3} cm", "8 cm"], "A",
        "$AB^2 = BD \\times BC = 4 \\times (4 + 9) = 4 \\times 13 = 52 \\implies AB = \\sqrt{52} = 2\\sqrt{13}$ cm.",
        "**Langkah Penyelesaian Terstruktur:**\n$$AB = \\sqrt{4 \\times 13} = 2\\sqrt{13}\\text{ cm}$$ (Opsi A)."
    ),
    make_q(
        "smp7-b5-20", "Tantangan",
        "Dua tiang berdiri tegak di atas tanah datar dengan tinggi masing-masing 6 meter dan 3 meter. Kawat dihubungkan dari puncak tiang pertama ke kaki tiang kedua, dan sebaliknya. Titik perpotongan kedua kawat berada pada ketinggian...",
        ["2 meter", "2,5 meter", "1,8 meter", "2,2 meter"], "A",
        "Rumus titik potong kabel silang: $\\frac{1}{h} = \\frac{1}{h_1} + \\frac{1}{h_2} = \\frac{1}{6} + \\frac{1}{3} = \\frac{3}{6} = \\frac{1}{2} \\implies h = 2$ meter.",
        "**Langkah Penyelesaian Terstruktur:**\n$$h = \\frac{6 \\times 3}{6 + 3} = \\frac{18}{9} = 2\\text{ meter}$$ (Opsi A)."
    )
]

# =========================================================================
# BAB 6: Data dan Diagram (Existing: 4 -> Add 16 -> Total: 20)
# =========================================================================
b6_add = [
    # Paket 1 ke Paket 2 (Soal 5-10)
    make_q(
        "smp7-b6-5", "Dasar",
        "Diagram lingkaran menyajikan data dalam bentuk juring lingkaran. Jumlah seluruh persentase dari juring-juring lingkaran adalah...",
        ["100%", "360%", "180%", "90%"], "A",
        "Total seluruh persentase lingkaran utuh adalah 100%.",
        "**Langkah Penyelesaian Terstruktur:**\nTotal persentase adalah **100%** (atau $360^\\circ$) (Opsi A)."
    ),
    make_q(
        "smp7-b6-6", "Sedang",
        "Data nilai ulangan matematika 10 siswa: 6, 7, 8, 8, 7, 9, 8, 7, 8, 10. Modus dari data tersebut adalah...",
        ["8", "7", "9", "8,5"], "A",
        "Frekuensi kemunculan: 6 (1x), 7 (3x), 8 (4x), 9 (1x), 10 (1x). Nilai 8 paling sering muncul.",
        "**Langkah Penyelesaian Terstruktur:**\nModus adalah **8** (frekuensi 4) (Opsi A)."
    ),
    make_q(
        "smp7-b6-7", "Sedang",
        "Median dari data: 5, 8, 7, 9, 6, 8, 7, 6, 9 adalah...",
        ["7", "7,5", "8", "6,5"], "A",
        "Urutkan data: 5, 6, 6, 7, 7, 8, 8, 9, 9. Data ke-5 (tengah) adalah 7.",
        "**Langkah Penyelesaian Terstruktur:**\nData terurut: 5, 6, 6, 7, **7**, 8, 8, 9, 9 $\\implies$ Median $= 7$ (Opsi A)."
    ),
    make_q(
        "smp7-b6-8", "Sedang",
        "Rata-rata (mean) dari data 12, 15, 18, 20, 25 adalah...",
        ["18", "17", "19", "16"], "A",
        "Jumlah $= 12 + 15 + 18 + 20 + 25 = 90$. Mean $= 90 : 5 = 18$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\bar{x} = \\frac{90}{5} = 18$$ (Opsi A)."
    ),
    make_q(
        "smp7-b6-9", "Sedang",
        "Pada diagram lingkaran hobi siswa, juring sepak bola membentuk sudut pusat $108^\\circ$. Berapa persen siswa yang gemar sepak bola?",
        ["30%", "25%", "35%", "20%"], "A",
        "Persentase $= \\frac{108}{360} \\times 100\\% = \\frac{3}{10} \\times 100\\% = 30\\%$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{108}{360} \\times 100\\% = 30\\%$$ (Opsi A)."
    ),
    make_q(
        "smp7-b6-10", "Sedang",
        "Jangkauan (range) dari kumpulan data: 34, 45, 28, 56, 39, 62, 31 adalah...",
        ["34", "30", "38", "28"], "A",
        "Jangkauan $= X_{\\text{maks}} - X_{\\text{min}} = 62 - 28 = 34$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$R = 62 - 28 = 34$$ (Opsi A)."
    ),
    # Paket 3: Aplikasi & Terapan (Soal 11-15)
    make_q(
        "smp7-b6-11", "Sedang",
        "Nilai rata-rata ulangan matematika 29 siswa adalah 76. Jika nilai seorang siswa susulan digabungkan, nilai rata-ratanya menjadi 76,5. Nilai siswa susulan tersebut adalah...",
        ["91", "89", "93", "88"], "A",
        "Total nilai awal: $29 \\times 76 = 2.204$. Total nilai baru: $30 \\times 76{,}5 = 2.295$. Nilai susulan: $2.295 - 2.204 = 91$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$x = (30 \\times 76{,}5) - (29 \\times 76) = 2.295 - 2.204 = 91$$ (Opsi A)."
    ),
    make_q(
        "smp7-b6-12", "Sedang",
        "Dalam suatu kelas terdapat 16 siswa perempuan dengan rata-rata tinggi badan 155 cm, dan 14 siswa laki-laki dengan rata-rata 165 cm. Rata-rata tinggi badan seluruh siswa di kelas tersebut adalah...",
        ["159,67 cm", "160,00 cm", "158,50 cm", "161,20 cm"], "A",
        "Mean gabungan: $\\frac{(16 \\times 155) + (14 \\times 165)}{30} = \\frac{2.480 + 2.310}{30} = \\frac{4.790}{30} \\approx 159{,}67$ cm.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\bar{x} = \\frac{4.790}{30} \\approx 159{,}67\\text{ cm}$$ (Opsi A)."
    ),
    make_q(
        "smp7-b6-13", "Sedang",
        "Diagram garis paling tepat digunakan untuk menyajikan...",
        ["Data berkala yang menunjukkan perkembangan dari waktu ke waktu", "Data persentase pemilih pemilu", "Data perbandingan kategori tanpa urutan waktu", "Data frekuensi nilai tunggal"], "A",
        "Diagram garis digunakan untuk data kontinu yang berkembang secara kronologis (waktu).",
        "**Langkah Penyelesaian Terstruktur:**\nDiagram garis untuk **perkembangan data dari waktu ke waktu** (Opsi A)."
    ),
    make_q(
        "smp7-b6-14", "Sedang",
        "Data nilai ujian: 60 (4 siswa), 70 (8 siswa), 80 (12 siswa), 90 (6 siswa). Rata-rata nilai ujian tersebut adalah...",
        ["76,67", "75,00", "78,00", "77,50"], "A",
        "Total nilai $= (4 \\times 60) + (8 \\times 70) + (12 \\times 80) + (6 \\times 90) = 240 + 560 + 960 + 540 = 2.300$. Total siswa $= 30$. Mean $= 2.300 : 30 \\approx 76{,}67$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\bar{x} = \\frac{2.300}{30} \\approx 76{,}67$$ (Opsi A)."
    ),
    make_q(
        "smp7-b6-15", "Sedang",
        "Kuartil bawah ($Q_1$) dari data terurut: 3, 4, 4, 5, 6, 7, 8, 8, 9 adalah...",
        ["4", "4,5", "5", "3,5"], "A",
        "Median ($Q_2$) data ke-5 adalah 6. Separuh bawah: 3, 4, 4, 5. $Q_1 = \\frac{4 + 4}{2} = 4$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$Q_1 = 4$$ (Opsi A)."
    ),
    # Paket 4: Tantangan & Analisis (Soal 16-20)
    make_q(
        "smp7-b6-16", "Tantangan",
        "Rata-rata 5 bilangan asli berurutan adalah 18. Hasil kali bilangan terkecil dan terbesar dari kelima bilangan tersebut adalah...",
        ["320", "315", "324", "308"], "A",
        "Bilangan tengah $= 18$. Kelima bilangan: 16, 17, 18, 19, 20. Hasil kali $= 16 \\times 20 = 320$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$16 \\times 20 = 320$$ (Opsi A)."
    ),
    make_q(
        "smp7-b6-17", "Tantangan",
        "Kuartil atas ($Q_3$) dan jangkauan interkuartil ($QR$) dari data: 2, 4, 5, 6, 7, 8, 9, 10, 12 berturut-turut adalah...",
        ["Q3 = 9,5 dan QR = 5", "Q3 = 10 dan QR = 5", "Q3 = 9 dan QR = 4,5", "Q3 = 9,5 dan QR = 4,5"], "A",
        "Median $= 7$. Bawah: 2, 4, 5, 6 $\\implies Q_1 = 4{,}5$. Atas: 8, 9, 10, 12 $\\implies Q_3 = 9{,}5$. $QR = 9{,}5 - 4{,}5 = 5$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $Q_1 = 4{,}5$\n2. $Q_3 = 9{,}5$\n3. $QR = 9{,}5 - 4{,}5 = 5$ (Opsi A)."
    ),
    make_q(
        "smp7-b6-18", "Tantangan",
        "Suatu kelompok belajar memiliki 8 siswa dengan rata-rata nilai 75. Jika nilai tertinggi dikeluarkan, rata-ratanya menjadi 73. Jika nilai terendah dikeluarkan dari 8 siswa mula-mula, rata-ratanya menjadi 77. Selisih nilai tertinggi dan terendah adalah...",
        ["28", "24", "30", "26"], "A",
        "Total 8 siswa $= 600$. Total 7 siswa tanpa tertinggi $= 7 \\times 73 = 511 \\implies X_{\\text{maks}} = 600 - 511 = 89$. Total 7 siswa tanpa terendah $= 7 \\times 77 = 539 \\implies X_{\\text{min}} = 600 - 539 = 61$. Selisih $= 89 - 61 = 28$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$X_{\\text{maks}} - X_{\\text{min}} = 89 - 61 = 28$$ (Opsi A)."
    ),
    make_q(
        "smp7-b6-19", "Tantangan",
        "Data pendapatan harian pedagang (dalam ratusan ribu rupiah): 4, 5, 6, 7, 8, 9, 10. Jika setiap pendapatan dinaikkan 20% kemudian ditambah 1 ratus ribu rupiah, perubahan nilai rata-rata dan simpangan kuartil adalah...",
        ["Rata-rata bertambah dan simpangan kuartil bertambah 20%", "Keduanya tetap sama", "Rata-rata tetap tetapi simpangan kuartil bertambah", "Keduanya hanya bertambah 1"], "A",
        "Operasi linear $Y = aX + b$: rata-rata berubah menjadi $a\\bar{X} + b$, ukuran penyebaran (simpangan kuartil) hanya dipengaruhi faktor skala $|a| = 1{,}2$ (bertambah 20%).",
        "**Langkah Penyelesaian Terstruktur:**\nUkuran penyebaran hanya terpengaruh pengali 20% (Opsi A)."
    ),
    make_q(
        "smp7-b6-20", "Tantangan",
        "Diagram batang ganda paling sesuai dimanfaatkan untuk...",
        ["Membandingkan dua kelompok data berbeda pada kategori waktu atau aspek yang sama", "Menyajikan data kontinu tunggal", "Menghitung luas daerah di bawah kurva", "Menggantikan diagram lingkaran tunggal"], "A",
        "Diagram batang ganda menyandingkan dua kelompok data untuk perbandingan langsung.",
        "**Langkah Penyelesaian Terstruktur:**\nUntuk **membandingkan dua kelompok data pada kategori yang sama** (Opsi A)."
    )
]

# Append
grade7Data["chapters"][0]["questions"].extend(b1_add)
grade7Data["chapters"][1]["questions"].extend(b2_add)
grade7Data["chapters"][2]["questions"].extend(b3_add)
grade7Data["chapters"][3]["questions"].extend(b4_add)
grade7Data["chapters"][4]["questions"].extend(b5_add)
grade7Data["chapters"][5]["questions"].extend(b6_add)

# Verify
for i, ch in enumerate(grade7Data["chapters"]):
    print(f"Bab {i+1} ({ch['id']}): {len(ch['questions'])} questions")

fileContent = f"""/**
 * Data Kurikulum Kelas 7 SMP (Fase D)
 * 6 Bab Wajib Resmi Sesuai Buku Siswa Matematika
 */

export const grade7Data = {json.dumps(grade7Data, indent=2, ensure_ascii=False)};
"""

with open(DATA_PATH, 'w', encoding='utf-8') as f:
    f.write(fileContent)

print("Successfully expanded grade7.js to 20 questions per chapter!")
