import json
import os
import re

DATA_PATH = 'src/data/grades/grade6.js'

with open(DATA_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

json_match = re.search(r'export\s+const\s+\w+\s*=\s*(\{[\s\S]*\});?\s*$', content)
if not json_match:
    raise ValueError("Could not extract grade6Data object")

grade6Data = json.loads(json_match.group(1))

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
# BAB 1: Pecahan dan Desimal (Existing: 5 -> Add 15 -> Total: 20)
# =========================================================================
b1_add = [
    # Paket 2: Sedang (Soal 6-10)
    make_q(
        "sd6-b1-6", "Sedang",
        "Hasil perkalian pecahan $\\frac{3}{4} \\times \\frac{2}{5}$ dalam bentuk paling sederhana adalah...",
        ["\\frac{3}{10}", "\\frac{6}{20}", "\\frac{5}{9}", "\\frac{1}{2}"], "A",
        "Kalikan pembilang dengan pembilang, penyebut dengan penyebut, lalu sederhanakan.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{3 \\times 2}{4 \\times 5} = \\frac{6}{20} = \\frac{3}{10}$$\nHasil paling sederhananya adalah **$\\frac{3}{10}$** (Opsi A)."
    ),
    make_q(
        "sd6-b1-7", "Sedang",
        "Hasil pembagian pecahan $\\frac{5}{6} : \\frac{2}{3}$ adalah...",
        ["1 \\frac{1}{4}", "1 \\frac{1}{2}", "\\frac{10}{18}", "1 \\frac{1}{5}"], "A",
        "Ubah pembagian menjadi perkalian dengan kebalikan pecahan kedua: $\\frac{5}{6} \\times \\frac{3}{2}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{5}{6} \\times \\frac{3}{2} = \\frac{15}{12} = \\frac{5}{4} = 1\\frac{1}{4}$$\nHasilnya adalah **$1\\frac{1}{4}$** (Opsi A)."
    ),
    make_q(
        "sd6-b1-8", "Sedang",
        "Hasil dari $2{,}45 + 1{,}78$ adalah...",
        ["4,23", "4,13", "3,23", "4,25"], "A",
        "Luruskan tanda koma desimal sebelum menjumlahkan bersusun.",
        "**Langkah Penyelesaian Terstruktur:**\n$$2{,}45 + 1{,}78 = 4{,}23$$\nHasilnya adalah **4,23** (Opsi A)."
    ),
    make_q(
        "sd6-b1-9", "Sedang",
        "Hasil dari $6{,}5 - 2{,}84$ adalah...",
        ["3,66", "3,76", "4,66", "3,56"], "A",
        "Tulis $6{,}50$ agar jumlah digit desimal sama sebelum dikurangkan.",
        "**Langkah Penyelesaian Terstruktur:**\n$$6{,}50 - 2{,}84 = 3{,}66$$\nHasilnya adalah **3,66** (Opsi A)."
    ),
    make_q(
        "sd6-b1-10", "Sedang",
        "Hasil perkalian desimal $0{,}4 \\times 0{,}25$ adalah...",
        ["0,1", "0,01", "1,0", "0,15"], "A",
        "Kalikan bilangan bulat $4 \\times 25 = 100$, lalu hitung total 3 tempat desimal.",
        "**Langkah Penyelesaian Terstruktur:**\n$$4 \\times 25 = 100 \\implies 0{,}100 = 0{,}1$$\nHasilnya adalah **0,1** (Opsi A)."
    ),
    # Paket 3: Aplikasi & Terapan (Soal 11-15)
    make_q(
        "sd6-b1-11", "Sedang",
        "Ibu membeli $2\\frac{1}{2}$ kg gula pasir. Jika setiap cangkir teh membutuhkan 0,05 kg gula, berapa cangkir teh yang dapat dibuat Ibu?",
        ["50 cangkir", "40 cangkir", "60 cangkir", "25 cangkir"], "A",
        "Ubah $2\\frac{1}{2}$ kg ke desimal $= 2{,}5$ kg, lalu bagi dengan 0,05.",
        "**Langkah Penyelesaian Terstruktur:**\n$$2{,}5 : 0{,}05 = 250 : 5 = 50$$\nDapat dibuat **50 cangkir teh** (Opsi A)."
    ),
    make_q(
        "sd6-b1-12", "Sedang",
        "Pak Budi memiliki sebidang tanah seluas 400 m². Sebanyak 0,35 bagian dibangun rumah dan $\\frac{1}{4}$ bagian dijadikan kebun. Sisa tanah untuk halaman adalah...",
        ["160 m²", "140 m²", "180 m²", "150 m²"], "A",
        "Hitung luas rumah ($0{,}35 \\times 400 = 140$) dan kebun ($\\frac{1}{4} \\times 400 = 100$). Sisa $= 400 - 240$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Rumah: $0{,}35 \\times 400 = 140\\text{ m}^2$\n2. Kebun: $\\frac{1}{4} \\times 400 = 100\\text{ m}^2$\n3. Sisa: $400 - (140 + 100) = 160\\text{ m}^2$ (Opsi A)."
    ),
    make_q(
        "sd6-b1-13", "Sedang",
        "Hasil dari $3 : 0{,}6$ adalah...",
        ["5", "0,5", "18", "2"], "A",
        "Ubah menjadi $30 : 6 = 5$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{3}{0{,}6} = \\frac{30}{6} = 5$$\nHasilnya adalah **5** (Opsi A)."
    ),
    make_q(
        "sd6-b1-14", "Sedang",
        "Bentuk pecahan biasa paling sederhana dari bilangan desimal 0,375 adalah...",
        ["\\frac{3}{8}", "\\frac{3}{4}", "\\frac{7}{20}", "\\frac{15}{40}"], "A",
        "0,375 $= \\frac{375}{1000}$. Bagi pembilang dan penyebut dengan 125.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{375 : 125}{1000 : 125} = \\frac{3}{8}$$\nBentuk sederhananya adalah **$\\frac{3}{8}$** (Opsi A)."
    ),
    make_q(
        "sd6-b1-15", "Sedang",
        "Sebuah botol berisi $1{,}2$ liter air. Anton meminum $\\frac{1}{3}$ bagiannya. Sisa air di dalam botol adalah...",
        ["0,8 liter", "0,4 liter", "0,6 liter", "0,9 liter"], "A",
        "Air yang diminum $= \\frac{1}{3} \\times 1{,}2 = 0{,}4$ liter. Sisa $= 1{,}2 - 0{,}4 = 0{,}8$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Diminum: $1{,}2 \\times \\frac{1}{3} = 0{,}4\\text{ liter}$\n2. Sisa: $1{,}2 - 0{,}4 = 0{,}8\\text{ liter}$ (Opsi A)."
    ),
    # Paket 4: Tantangan & Analisis (Soal 16-20)
    make_q(
        "sd6-b1-16", "Tantangan",
        "Hasil dari operasi campuran $\\left(1\\frac{1}{2} + 0{,}75\\right) \\times 0{,}4$ adalah...",
        ["0,9", "1,2", "0,8", "1,5"], "A",
        "Ubah ke desimal: $1\\frac{1}{2} = 1{,}5$. Maka $(1{,}5 + 0{,}75) \\times 0{,}4 = 2{,}25 \\times 0{,}4$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$2{,}25 \\times 0{,}4 = 0{,}90 = 0{,}9$$\nHasilnya adalah **0,9** (Opsi A)."
    ),
    make_q(
        "sd6-b1-17", "Tantangan",
        "Rina memiliki pita sepanjang 4,5 meter. Ia memotong pita tersebut masing-masing sepanjang $\\frac{3}{4}$ meter. Berapa banyak potongan pita yang diperoleh Rina?",
        ["6 potongan", "5 potongan", "7 potongan", "8 potongan"], "A",
        "Bagi 4,5 dengan 0,75: $4{,}5 : 0{,}75 = 450 : 75 = 6$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$4{,}5 : \\frac{3}{4} = \\frac{9}{2} \\times \\frac{4}{3} = \\frac{36}{6} = 6$$\nDiperoleh **6 potongan pita** (Opsi A)."
    ),
    make_q(
        "sd6-b1-18", "Tantangan",
        "Sebuah mobil menempuh jarak $150\\frac{1}{2}$ km dengan menghabiskan 10,75 liter bensin. Konsumsi bensin rata-rata mobil tersebut per liter adalah...",
        ["14 km/liter", "15 km/liter", "13 km/liter", "16 km/liter"], "A",
        "Bagi jarak dengan konsumsi bensin: $150{,}5 : 10{,}75 = 14$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$150{,}5 : 10{,}75 = 15.050 : 1.075 = 14\\text{ km/liter}$$\nKonsumsinya adalah **14 km/liter** (Opsi A)."
    ),
    make_q(
        "sd6-b1-19", "Tantangan",
        "Urutan bilangan $0{,}65$; $\\frac{5}{8}$; $60\\%$; $0{,}7$ dari yang terbesar ke terkecil adalah...",
        ["0,7; 0,65; 5/8; 60%", "0,7; 5/8; 0,65; 60%", "60%; 5/8; 0,65; 0,7", "0,65; 0,7; 5/8; 60%"], "A",
        "Ubah semua ke desimal: $0{,}7 = 0{,}70$; $0{,}65$; $\\frac{5}{8} = 0{,}625$; $60\\% = 0{,}60$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $0{,}7 = 0{,}700$\n2. $0{,}65 = 0{,}650$\n3. $\\frac{5}{8} = 0{,}625$\n4. $60\\% = 0{,}600$\nUrutan turun: **0,7; 0,65; 5/8; 60%** (Opsi A)."
    ),
    make_q(
        "sd6-b1-20", "Tantangan",
        "Nilai dari $\\frac{0{,}25 \\times 0{,}8}{0{,}05}$ adalah...",
        ["4", "0,4", "40", "0,04"], "A",
        "Hitung pembilang: $0{,}25 \\times 0{,}8 = 0{,}2$. Lalu bagi: $0{,}2 : 0{,}05 = 20 : 5 = 4$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\frac{0{,}2}{0{,}05} = \\frac{20}{5} = 4$$\nHasilnya adalah **4** (Opsi A)."
    )
]

# =========================================================================
# BAB 2: Rasio (Existing: 5 -> Add 15 -> Total: 20)
# =========================================================================
b2_add = [
    # Paket 2: Sedang (Soal 6-10)
    make_q(
        "sd6-b2-6", "Sedang",
        "Bentuk paling sederhana dari rasio 18 : 24 adalah...",
        ["3 : 4", "2 : 3", "4 : 5", "9 : 12"], "A",
        "Bagi kedua bilangan dengan FPB yaitu 6: $18 : 6 = 3$ dan $24 : 6 = 4$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$18 : 24 = (18:6) : (24:6) = 3 : 4$$\nRasio sederhananya adalah **3 : 4** (Opsi A)."
    ),
    make_q(
        "sd6-b2-7", "Sedang",
        "Perbandingan banyak kelereng Doni dan Budi adalah 3 : 5. Jika kelereng Budi berjumlah 35 butir, banyak kelereng Doni adalah...",
        ["21 butir", "20 butir", "25 butir", "15 butir"], "A",
        "Nilai 1 bagian rasio $= 35 : 5 = 7$. Kelereng Doni $= 3 \\times 7 = 21$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Kelereng Doni} = \\frac{3}{5} \\times 35 = 21\\text{ butir}$$\nBanyak kelereng Doni adalah **21 butir** (Opsi A)."
    ),
    make_q(
        "sd6-b2-8", "Sedang",
        "Umur Ayah berbanding umur Dimas adalah 7 : 2. Jika jumlah umur keduanya adalah 45 tahun, berapakah umur Dimas?",
        ["10 tahun", "14 tahun", "8 tahun", "12 tahun"], "A",
        "Jumlah bagian rasio $= 7 + 2 = 9$. Umur Dimas $= \\frac{2}{9} \\times 45 = 10$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Umur Dimas} = \\frac{2}{7 + 2} \\times 45 = \\frac{2}{9} \\times 45 = 10\\text{ tahun}$$\nUmur Dimas adalah **10 tahun** (Opsi A)."
    ),
    make_q(
        "sd6-b2-9", "Sedang",
        "Perbandingan uang saku Riko dan Andi adalah 4 : 7. Jika selisih uang saku mereka adalah Rp15.000,00, berapakah uang saku Riko?",
        ["Rp20.000,00", "Rp25.000,00", "Rp35.000,00", "Rp18.000,00"], "A",
        "Selisih bagian rasio $= 7 - 4 = 3$. Nilai 1 bagian $= 15.000 : 3 = 5.000$. Uang Riko $= 4 \\times 5.000$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Uang Riko} = \\frac{4}{7 - 4} \\times 15.000 = \\frac{4}{3} \\times 15.000 = 20.000$$\nUang saku Riko adalah **Rp20.000,00** (Opsi A)."
    ),
    make_q(
        "sd6-b2-10", "Sedang",
        "Sebuah mobil membutuhkan 3 liter bensin untuk menempuh jarak 45 km. Berapa liter bensin yang dibutuhkan untuk menempuh jarak 120 km?",
        ["8 liter", "9 liter", "10 liter", "7 liter"], "A",
        "Rasio bensin : jarak $= 3 : 45 = 1 : 15$ km/liter. Untuk 120 km $= 120 : 15 = 8$ liter.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Bensin} = \\frac{120}{15} = 8\\text{ liter}$$\nDibutuhkan **8 liter bensin** (Opsi A)."
    ),
    # Paket 3: Aplikasi & Terapan (Soal 11-15)
    make_q(
        "sd6-b2-11", "Sedang",
        "Pada peta berskala 1 : 500.000, jarak antara kota A dan kota B adalah 4 cm. Jarak sebenarnya antara kedua kota tersebut adalah...",
        ["20 km", "200 km", "2 km", "25 km"], "A",
        "Jarak sebenarnya $= 4 \\times 500.000 = 2.000.000$ cm $= 20$ km.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Jarak sebenarnya} = 4 \\times 500.000 = 2.000.000\\text{ cm} = 20\\text{ km}$$\nJarak sebenarnya adalah **20 km** (Opsi A)."
    ),
    make_q(
        "sd6-b2-12", "Sedang",
        "Jarak sebenarnya antara dua gedung adalah 150 meter. Pada denah berskala 1 : 1.000, jarak kedua gedung tersebut adalah...",
        ["15 cm", "1,5 cm", "150 cm", "0,15 cm"], "A",
        "Ubah meter ke cm ($150\\text{ m} = 15.000\\text{ cm}$), lalu bagi skala: $15.000 : 1.000 = 15$ cm.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Jarak denah} = \\frac{15.000}{1.000} = 15\\text{ cm}$$\nJarak pada denah adalah **15 cm** (Opsi A)."
    ),
    make_q(
        "sd6-b2-13", "Sedang",
        "Resep kue membutuhkan 200 gram tepung untuk setiap 150 gram gula. Jika Ibu menggunakan 600 gram tepung, berapa gram gula yang harus ditambahkan?",
        ["450 gram", "400 gram", "500 gram", "350 gram"], "A",
        "Faktor pengali tepung $= 600 : 200 = 3$. Gula $= 150 \\times 3 = 450$ gram.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Gula} = 3 \\times 150 = 450\\text{ gram}$$\nDibutuhkan **450 gram gula** (Opsi A)."
    ),
    make_q(
        "sd6-b2-14", "Sedang",
        "Seorang penjahit dapat menyelesaikan 12 potong kemeja dalam waktu 3 hari. Berapa potong kemeja yang dapat diselesaikan dalam waktu 10 hari?",
        ["40 potong", "36 potong", "45 potong", "30 potong"], "A",
        "Kecepatan penjahit $= 12 : 3 = 4$ kemeja/hari. Dalam 10 hari $= 10 \\times 4 = 40$ kemeja.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Kemeja} = 4 \\times 10 = 40\\text{ potong}$$\nDapat diselesaikan **40 potong kemeja** (Opsi A)."
    ),
    make_q(
        "sd6-b2-15", "Sedang",
        "Perbandingan siswa laki-laki dan perempuan di kelas 6 adalah 3 : 4. Jika jumlah siswa perempuan adalah 20 orang, berapa jumlah seluruh siswa di kelas tersebut?",
        ["35 orang", "32 orang", "40 orang", "30 orang"], "A",
        "Laki-laki $= \\frac{3}{4} \\times 20 = 15$. Total siswa $= 15 + 20 = 35$ orang.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Siswa laki-laki: $\\frac{3}{4} \\times 20 = 15$ orang\n2. Total siswa: $15 + 20 = 35$ orang (Opsi A)."
    ),
    # Paket 4: Tantangan & Analisis (Soal 16-20)
    make_q(
        "sd6-b2-16", "Tantangan",
        "Perbandingan uang A : B = 2 : 3 dan B : C = 4 : 5. Perbandingan uang A : B : C adalah...",
        ["8 : 12 : 15", "6 : 12 : 15", "8 : 10 : 15", "2 : 4 : 5"], "A",
        "Samakan nilai B (KPK dari 3 dan 4 yaitu 12): A : B = 8 : 12, B : C = 12 : 15.",
        "**Langkah Penyelesaian Terstruktur:**\n- $A : B = 2 : 3 = 8 : 12$\n- $B : C = 4 : 5 = 12 : 15$\nMaka $A : B : C =$ **8 : 12 : 15** (Opsi A)."
    ),
    make_q(
        "sd6-b2-17", "Tantangan",
        "Perbandingan kelereng Farhan, Gilang, dan Hendi adalah 2 : 3 : 5. Jika selisih kelereng Farhan dan Hendi adalah 24 butir, berapa jumlah seluruh kelereng mereka?",
        ["80 butir", "72 butir", "90 butir", "60 butir"], "A",
        "Selisih rasio Farhan dan Hendi $= 5 - 2 = 3$. Nilai 1 bagian $= 24 : 3 = 8$. Total rasio $= 2 + 3 + 5 = 10$. Total $= 10 \\times 8 = 80$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Total kelereng} = \\frac{2 + 3 + 5}{5 - 2} \\times 24 = \\frac{10}{3} \\times 24 = 80\\text{ butir}$$\nJumlah kelereng mereka adalah **80 butir** (Opsi A)."
    ),
    make_q(
        "sd6-b2-18", "Tantangan",
        "Suatu pekerjaan dapat diselesaikan oleh 6 orang pekerja dalam waktu 15 hari. Jika pekerjaan tersebut ingin diselesaikan dalam waktu 10 hari, berapa banyak pekerja tambahan yang dibutuhkan?",
        ["3 orang", "4 orang", "2 orang", "5 orang"], "A",
        "Perbandingan berbalik nilai: $6 \\times 15 = P \\times 10 \\implies P = 90 : 10 = 9$ orang. Tambahan $= 9 - 6 = 3$ orang.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Pekerja total yang dibutuhkan: $\\frac{6 \\times 15}{10} = 9$ orang\n2. Pekerja tambahan: $9 - 6 = 3$ orang (Opsi A)."
    ),
    make_q(
        "sd6-b2-19", "Tantangan",
        "Sebuah kolam renang memiliki denah berukuran $8\\text{ cm} \\times 5\\text{ cm}$ pada skala 1 : 250. Luas sebenarnya dari kolam renang tersebut adalah...",
        ["250 m²", "200 m²", "300 m²", "400 m²"], "A",
        "Panjang asli $= 8 \\times 250 = 2.000\\text{ cm} = 20\\text{ m}$. Lebar asli $= 5 \\times 250 = 1.250\\text{ cm} = 12{,}5\\text{ m}$. Luas $= 20 \\times 12{,}5 = 250\\text{ m}^2$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $p = 8 \\times 250\\text{ cm} = 20\\text{ m}$\n2. $l = 5 \\times 250\\text{ cm} = 12{,}5\\text{ m}$\n3. Luas $= 20 \\times 12{,}5 = 250\\text{ m}^2$ (Opsi A)."
    ),
    make_q(
        "sd6-b2-20", "Tantangan",
        "Dua tahun lalu perbandingan umur Kakak dan Adik adalah 3 : 2. Jika umur Adik saat ini adalah 10 tahun, berapa tahun umur Kakak saat ini?",
        ["14 tahun", "12 tahun", "15 tahun", "16 tahun"], "A",
        "Dua tahun lalu: umur Adik $= 10 - 2 = 8$ tahun. Umur Kakak $= \\frac{3}{2} \\times 8 = 12$ tahun. Saat ini umur Kakak $= 12 + 2 = 14$ tahun.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Umur Adik 2 tahun lalu: $10 - 2 = 8$ tahun\n2. Umur Kakak 2 tahun lalu: $\\frac{3}{2} \\times 8 = 12$ tahun\n3. Umur Kakak sekarang: $12 + 2 = 14$ tahun (Opsi A)."
    )
]

# =========================================================================
# BAB 3: Kubus dan Balok (Existing: 4 -> Add 16 -> Total: 20)
# =========================================================================
b3_add = [
    # Paket 1 ke Paket 2 (Soal 5-10)
    make_q(
        "sd6-b3-5", "Dasar",
        "Banyaknya titik sudut pada sebuah balok adalah...",
        ["8", "6", "12", "4"], "A",
        "Balok memiliki 6 sisi, 12 rusuk, dan 8 titik sudut.",
        "**Langkah Penyelesaian Terstruktur:**\nBanyak titik sudut balok adalah **8** (Opsi A)."
    ),
    make_q(
        "sd6-b3-6", "Sedang",
        "Panjang seluruh rusuk sebuah kubus adalah 96 cm. Panjang satu rusuk kubus tersebut adalah...",
        ["8 cm", "6 cm", "12 cm", "16 cm"], "A",
        "Kubus memiliki 12 rusuk sama panjang: $s = 96 : 12 = 8$ cm.",
        "**Langkah Penyelesaian Terstruktur:**\n$$s = 96 : 12 = 8\\text{ cm}$$\nPanjang rusuknya adalah **8 cm** (Opsi A)."
    ),
    make_q(
        "sd6-b3-7", "Sedang",
        "Sebuah balok memiliki ukuran panjang 10 cm, lebar 6 cm, dan tinggi 4 cm. Jumlah panjang seluruh rusuk balok tersebut adalah...",
        ["80 cm", "40 cm", "20 cm", "60 cm"], "A",
        "Total panjang rusuk balok $= 4 \\times (p + l + t) = 4 \\times (10 + 6 + 4) = 4 \\times 20 = 80$ cm.",
        "**Langkah Penyelesaian Terstruktur:**\n$$R = 4 \\times (10 + 6 + 4) = 4 \\times 20 = 80\\text{ cm}$$\nPanjang seluruh rusuk adalah **80 cm** (Opsi A)."
    ),
    make_q(
        "sd6-b3-8", "Sedang",
        "Luas permukaan kubus yang memiliki panjang rusuk 5 cm adalah...",
        ["150 cm²", "125 cm²", "100 cm²", "175 cm²"], "A",
        "Luas permukaan kubus $= 6 \\times s^2 = 6 \\times 5^2 = 6 \\times 25 = 150$ cm².",
        "**Langkah Penyelesaian Terstruktur:**\n$$L = 6 \\times 5^2 = 6 \\times 25 = 150\\text{ cm}^2$$\nLuas permukaannya adalah **150 cm²** (Opsi A)."
    ),
    make_q(
        "sd6-b3-9", "Sedang",
        "Luas permukaan sebuah balok dengan panjang 8 cm, lebar 5 cm, dan tinggi 3 cm adalah...",
        ["158 cm²", "120 cm²", "160 cm²", "148 cm²"], "A",
        "Luas permukaan balok $= 2 \\times (pl + pt + lt) = 2 \\times (40 + 24 + 15) = 2 \\times 79 = 158$ cm².",
        "**Langkah Penyelesaian Terstruktur:**\n$$L = 2 \\times (8\\times 5 + 8\\times 3 + 5\\times 3) = 2 \\times 79 = 158\\text{ cm}^2$$\nLuas permukaannya adalah **158 cm²** (Opsi A)."
    ),
    make_q(
        "sd6-b3-10", "Sedang",
        "Volume sebuah kubus adalah 512 cm³. Luas salah satu bidang sisi kubus tersebut adalah...",
        ["64 cm²", "36 cm²", "81 cm²", "49 cm²"], "A",
        "Rusuk $s = \\sqrt[3]{512} = 8$ cm. Luas 1 sisi $= 8 \\times 8 = 64$ cm².",
        "**Langkah Penyelesaian Terstruktur:**\n1. $s = \\sqrt[3]{512} = 8\\text{ cm}$\n2. Luas sisi $= 8^2 = 64\\text{ cm}^2$ (Opsi A)."
    ),
    # Paket 3: Aplikasi & Terapan (Soal 11-15)
    make_q(
        "sd6-b3-11", "Sedang",
        "Sebuah kardus berbentuk balok berukuran $40\\text{ cm} \\times 30\\text{ cm} \\times 20\\text{ cm}$ akan dimasukkan kotak mainan kubus bersisi 10 cm. Berapa banyak kotak mainan yang dapat masuk ke dalam kardus?",
        ["24 kotak", "20 kotak", "18 kotak", "30 kotak"], "A",
        "Hitung kapasitas tiap dimensi: $(40 : 10) \\times (30 : 10) \\times (20 : 10) = 4 \\times 3 \\times 2 = 24$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Banyak kotak} = \\frac{40 \\times 30 \\times 20}{10 \\times 10 \\times 10} = 4 \\times 3 \\times 2 = 24\\text{ kotak}$$\nDapat memuat **24 kotak mainan** (Opsi A)."
    ),
    make_q(
        "sd6-b3-12", "Sedang",
        "Sebuah bak penampungan air berbentuk kubus memiliki panjang sisi dalam 1 meter. Jika bak tersebut sudah terisi air 650 liter, berapa liter air lagi yang harus ditambahkan agar bak terisi penuh?",
        ["350 liter", "450 liter", "250 liter", "300 liter"], "A",
        "Volume penuh $= 1\\text{ m}^3 = 1.000$ liter. Kekurangan $= 1.000 - 650 = 350$ liter.",
        "**Langkah Penyelesaian Terstruktur:**\n$$1.000 - 650 = 350\\text{ liter}$$\nHarus ditambahkan **350 liter air** (Opsi A)."
    ),
    make_q(
        "sd6-b3-13", "Sedang",
        "Kawat sepanjang 2 meter akan digunakan untuk membuat kerangka balok berukuran $20\\text{ cm} \\times 15\\text{ cm} \\times 10\\text{ cm}$. Sisa kawat yang tidak terpakai adalah...",
        ["20 cm", "30 cm", "15 cm", "25 cm"], "A",
        "Panjang kawat kerangka $= 4 \\times (20 + 15 + 10) = 4 \\times 45 = 180$ cm. Sisa $= 200 - 180 = 20$ cm.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Kebutuhan kawat: $4 \\times (20 + 15 + 10) = 180\\text{ cm}$\n2. Sisa kawat: $200 - 180 = 20\\text{ cm}$ (Opsi A)."
    ),
    make_q(
        "sd6-b3-14", "Sedang",
        "Sebuah kotak kado berbentuk balok berukuran $15\\text{ cm} \\times 10\\text{ cm} \\times 8\\text{ cm}$ akan dibungkus kertas kado. Luas minimal kertas kado yang dibutuhkan adalah...",
        ["700 cm²", "650 cm²", "750 cm²", "800 cm²"], "A",
        "Luas $= 2 \\times (15\\times 10 + 15\\times 8 + 10\\times 8) = 2 \\times (150 + 120 + 80) = 2 \\times 350 = 700$ cm².",
        "**Langkah Penyelesaian Terstruktur:**\n$$L = 2 \\times (150 + 120 + 80) = 700\\text{ cm}^2$$\nLuas minimal kertas kado adalah **700 cm²** (Opsi A)."
    ),
    make_q(
        "sd6-b3-15", "Sedang",
        "Perbandingan panjang rusuk dua buah kubus adalah 2 : 3. Jika volume kubus pertama adalah 64 cm³, berapakah volume kubus kedua?",
        ["216 cm³", "144 cm³", "196 cm³", "256 cm³"], "A",
        "Rusuk kubus 1 $= \\sqrt[3]{64} = 4$ cm. Rusuk kubus 2 $= \\frac{3}{2} \\times 4 = 6$ cm. Volume kubus 2 $= 6^3 = 216$ cm³.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $s_1 = \\sqrt[3]{64} = 4\\text{ cm}$\n2. $s_2 = \\frac{3}{2} \\times 4 = 6\\text{ cm}$\n3. $V_2 = 6^3 = 216\\text{ cm}^3$ (Opsi A)."
    ),
    # Paket 4: Tantangan & Analisis (Soal 16-20)
    make_q(
        "sd6-b3-16", "Tantangan",
        "Sebuah balok memiliki perbandingan panjang : lebar : tinggi = 4 : 3 : 2. Jika volume balok tersebut adalah 192 cm³, maka panjang balok tersebut adalah...",
        ["8 cm", "6 cm", "4 cm", "10 cm"], "A",
        "Misalkan $p = 4x, l = 3x, t = 2x$. Volume $= 24x^3 = 192 \\implies x^3 = 8 \\implies x = 2$. Panjang $= 4 \\times 2 = 8$ cm.",
        "**Langkah Penyelesaian Terstruktur:**\n1. $4x \\times 3x \\times 2x = 24x^3 = 192$\n2. $x^3 = 8 \\implies x = 2$\n3. $p = 4 \\times 2 = 8\\text{ cm}$ (Opsi A)."
    ),
    make_q(
        "sd6-b3-17", "Tantangan",
        "Sebuah kolam renang berukuran panjang 20 m, lebar 10 m, dan kedalaman 1,5 m. Dinding bagian dalam dan lantai kolam akan dipasangi keramik. Luas permukaan yang dipasangi keramik adalah...",
        ["290 m²", "380 m²", "300 m²", "260 m²"], "A",
        "Kolam tanpa tutup: Luas $= pl + 2pt + 2lt = (20 \\times 10) + 2(20 \\times 1{,}5) + 2(10 \\times 1{,}5) = 200 + 60 + 30 = 290$ m².",
        "**Langkah Penyelesaian Terstruktur:**\n1. Lantai: $20 \\times 10 = 200\\text{ m}^2$\n2. Dinding panjang: $2 \\times (20 \\times 1{,}5) = 60\\text{ m}^2$\n3. Dinding lebar: $2 \\times (10 \\times 1{,}5) = 30\\text{ m}^2$\nTotal luas $= 290\\text{ m}^2$ (Opsi A)."
    ),
    make_q(
        "sd6-b3-18", "Tantangan",
        "Sebuah kubus kayu padat berukuran rusuk 6 cm dicat merah seluruh permukaannya, kemudian dipotong-potong menjadi kubus-kubus kecil bersisi 1 cm. Berapa banyak kubus kecil yang memiliki tepat 2 sisi bercat merah?",
        ["48 kubus", "36 kubus", "24 kubus", "54 kubus"], "A",
        "Kubus dengan 2 sisi merah berada di rusuk tanpa sudut: $12 \\times (s - 2) = 12 \\times (6 - 2) = 12 \\times 4 = 48$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Banyak kubus} = 12 \\times (n - 2) = 12 \\times (6 - 2) = 48\\text{ kubus}$$\nAda **48 kubus kecil** (Opsi A)."
    ),
    make_q(
        "sd6-b3-19", "Tantangan",
        "Balok A berukuran $12\\text{ cm} \\times 8\\text{ cm} \\times 6\\text{ cm}$. Balok B memiliki panjang, lebar, dan tinggi masing-masing 1,5 kali ukuran balok A. Perbandingan volume balok A dan balok B adalah...",
        ["8 : 27", "2 : 3", "4 : 9", "1 : 3"], "A",
        "Perbandingan volume kubus/balok sebangun $= k^3 = (1 : 1{,}5)^3 = (2 : 3)^3 = 8 : 27$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Rasio volume} = 1 : (1{,}5)^3 = 1 : 3{,}375 = 8 : 27$$\nPerbandingannya adalah **8 : 27** (Opsi A)."
    ),
    make_q(
        "sd6-b3-20", "Tantangan",
        "Akuarium berbentuk balok dengan panjang 80 cm dan lebar 50 cm berisi air setinggi 30 cm. Ketika sebuah batu dimasukkan ke dalam akuarium dan tenggelam seluruhnya, tinggi air naik menjadi 33 cm. Volume batu tersebut adalah...",
        ["12.000 cm³", "10.000 cm³", "15.000 cm³", "8.000 cm³"], "A",
        "Volume batu = Luas alas $\\times$ kenaikan tinggi air $= 80 \\times 50 \\times (33 - 30) = 4.000 \\times 3 = 12.000$ cm³.",
        "**Langkah Penyelesaian Terstruktur:**\n$$V = 80 \\times 50 \\times 3 = 12.000\\text{ cm}^3$$\nVolume batu adalah **12.000 cm³** (Opsi A)."
    )
]

# =========================================================================
# BAB 4: Peluang (Existing: 4 -> Add 16 -> Total: 20)
# =========================================================================
b4_add = [
    # Paket 1 ke Paket 2 (Soal 5-10)
    make_q(
        "sd6-b4-5", "Dasar",
        "Sebuah uang logam dilempar satu kali. Peluang munculnya sisi gambar adalah...",
        ["\\frac{1}{2}", "\\frac{1}{4}", "1", "0"], "A",
        "Titik sampel uang logam ada 2 (Angka dan Gambar). Peluang Gambar $= \\frac{1}{2}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$P(\\text{Gambar}) = \\frac{1}{2}$$\nPeluangnya adalah **$\\frac{1}{2}$** (Opsi A)."
    ),
    make_q(
        "sd6-b4-6", "Sedang",
        "Sebuah dadu bersisi 6 dilempar satu kali. Peluang munculnya mata dadu ganjil adalah...",
        ["\\frac{1}{2}", "\\frac{1}{3}", "\\frac{2}{3}", "\\frac{1}{6}"], "A",
        "Mata dadu ganjil: 1, 3, 5 (ada 3). Ruang sampel $= 6$. Peluang $= \\frac{3}{6} = \\frac{1}{2}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{3}{6} = \\frac{1}{2}$$\nPeluangnya adalah **$\\frac{1}{2}$** (Opsi A)."
    ),
    make_q(
        "sd6-b4-7", "Sedang",
        "Dalam sebuah kotak terdapat 4 bola merah, 5 bola biru, dan 3 bola hijau. Jika diambil satu bola secara acak, peluang terambilnya bola biru adalah...",
        ["\\frac{5}{12}", "\\frac{1}{3}", "\\frac{1}{4}", "\\frac{5}{7}"], "A",
        "Total bola $= 4 + 5 + 3 = 12$. Bola biru $= 5$. Peluang $= \\frac{5}{12}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{5}{12}$$\nPeluangnya adalah **$\\frac{5}{12}$** (Opsi A)."
    ),
    make_q(
        "sd6-b4-8", "Sedang",
        "Peluang terjadinya suatu peristiwa yang pasti terjadi memiliki nilai sebesar...",
        ["1", "0", "0,5", "100"], "A",
        "Kepastian dalam teori peluang memiliki nilai probabilitas 1.",
        "**Langkah Penyelesaian Terstruktur:**\nPeluang kepastian adalah **1** (Opsi A)."
    ),
    make_q(
        "sd6-b4-9", "Sedang",
        "Pada pelemparan sebuah dadu, peluang muncul mata dadu lebih dari 4 adalah...",
        ["\\frac{1}{3}", "\\frac{1}{2}", "\\frac{2}{3}", "\\frac{1}{6}"], "A",
        "Mata dadu > 4 adalah 5 dan 6 (2 angka). Peluang $= \\frac{2}{6} = \\frac{1}{3}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{2}{6} = \\frac{1}{3}$$\nPeluangnya adalah **$\\frac{1}{3}$** (Opsi A)."
    ),
    make_q(
        "sd6-b4-10", "Sedang",
        "Dalam sebuah kantong terdapat 20 kelereng bernomor 1 sampai 20. Jika diambil satu kelereng secara acak, peluang terambil kelereng bernomor kelipatan 5 adalah...",
        ["\\frac{1}{5}", "\\frac{1}{4}", "\\frac{1}{10}", "\\frac{2}{5}"], "A",
        "Nomor kelipatan 5: 5, 10, 15, 20 (ada 4 kelereng). Peluang $= \\frac{4}{20} = \\frac{1}{5}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{4}{20} = \\frac{1}{5}$$\nPeluangnya adalah **$\\frac{1}{5}$** (Opsi A)."
    ),
    # Paket 3: Aplikasi & Terapan (Soal 11-15)
    make_q(
        "sd6-b4-11", "Sedang",
        "Sebuah dadu dilempar sebanyak 60 kali. Frekuensi harapan munculnya mata dadu prima (2, 3, 5) adalah...",
        ["30 kali", "20 kali", "15 kali", "40 kali"], "A",
        "Peluang prima $= \\frac{3}{6} = \\frac{1}{2}$. Frekuensi harapan $= 60 \\times \\frac{1}{2} = 30$ kali.",
        "**Langkah Penyelesaian Terstruktur:**\n$$F_h = 60 \\times \\frac{1}{2} = 30\\text{ kali}$$\nFrekuensi harapannya adalah **30 kali** (Opsi A)."
    ),
    make_q(
        "sd6-b4-12", "Sedang",
        "Dari satu set kartu angka 1 sampai 10, diambil satu kartu secara acak. Peluang terambilnya kartu bilangan bukan genap adalah...",
        ["\\frac{1}{2}", "\\frac{2}{5}", "\\frac{3}{5}", "\\frac{1}{10}"], "A",
        "Bukan genap artinya ganjil: 1, 3, 5, 7, 9 (5 kartu). Peluang $= \\frac{5}{10} = \\frac{1}{2}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{5}{10} = \\frac{1}{2}$$\nPeluangnya adalah **$\\frac{1}{2}$** (Opsi A)."
    ),
    make_q(
        "sd6-b4-13", "Sedang",
        "Sebuah roda putar dibagi menjadi 8 juring sama besar: 3 juring merah, 3 juring kuning, dan 2 juring hijau. Peluang jarum penunjuk berhenti di warna hijau adalah...",
        ["\\frac{1}{4}", "\\frac{3}{8}", "\\frac{1}{2}", "\\frac{1}{8}"], "A",
        "Juring hijau $= 2$ dari total 8. Peluang $= \\frac{2}{8} = \\frac{1}{4}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{2}{8} = \\frac{1}{4}$$\nPeluangnya adalah **$\\frac{1}{4}$** (Opsi A)."
    ),
    make_q(
        "sd6-b4-14", "Sedang",
        "Peluang hari esok turun hujan adalah 0,35. Peluang hari esok tidak turun hujan adalah...",
        ["0,65", "0,75", "0,55", "0,45"], "A",
        "Peluang komplemen $= 1 - P = 1 - 0{,}35 = 0{,}65$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$P(\\text{tidak hujan}) = 1 - 0{,}35 = 0{,}65$$\nPeluangnya adalah **0,65** (Opsi A)."
    ),
    make_q(
        "sd6-b4-15", "Sedang",
        "Dua keping uang logam dilempar bersamaan. Peluang munculnya kedua-duanya sisi gambar (G, G) adalah...",
        ["\\frac{1}{4}", "\\frac{1}{2}", "\\frac{3}{4}", "\\frac{1}{3}"], "A",
        "Ruang sampel 2 koin: (A,A), (A,G), (G,A), (G,G) ada 4 kemungkinan. Peluang (G,G) $= \\frac{1}{4}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{1}{4}$$\nPeluangnya adalah **$\\frac{1}{4}$** (Opsi A)."
    ),
    # Paket 4: Tantangan & Analisis (Soal 16-20)
    make_q(
        "sd6-b4-16", "Tantangan",
        "Dalam sebuah kotak terdapat 6 kelereng merah dan sejumlah kelereng putih. Jika peluang terambilnya kelereng merah adalah $\\frac{2}{5}$, berapakah jumlah seluruh kelereng di dalam kotak?",
        ["15 kelereng", "12 kelereng", "18 kelereng", "20 kelereng"], "A",
        "$\\frac{6}{\\text{Total}} = \\frac{2}{5} \\implies \\text{Total} = \\frac{6 \\times 5}{2} = 15$ kelereng.",
        "**Langkah Penyelesaian Terstruktur:**\n$$\\text{Total} = \\frac{6 \\times 5}{2} = 15\\text{ kelereng}$$\nJumlah seluruh kelereng adalah **15 butir** (Opsi A)."
    ),
    make_q(
        "sd6-b4-17", "Tantangan",
        "Dua buah dadu dilempar bersamaan satu kali. Peluang munculnya jumlah kedua mata dadu sama dengan 7 adalah...",
        ["\\frac{6}{36} = \\frac{1}{6}", "\\frac{5}{36}", "\\frac{7}{36}", "\\frac{1}{12}"], "A",
        "Pasangan berjumlah 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) ada 6 pasangan. Total $= 36$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{6}{36} = \\frac{1}{6}$$\nPeluangnya adalah **$\\frac{1}{6}$** (Opsi A)."
    ),
    make_q(
        "sd6-b4-18", "Tantangan",
        "Sebuah kantong berisi 5 permen rasa jeruk, 8 permen rasa mangga, dan 7 permen rasa stroberi. Jika diambil 2 permen satu per satu tanpa pengembalian, peluang terambil permen pertama jeruk dan kedua jeruk adalah...",
        ["\\frac{1}{19}", "\\frac{1}{16}", "\\frac{5}{38}", "\\frac{1}{20}"], "A",
        "Peluang pertama $= \\frac{5}{20} = \\frac{1}{4}$. Peluang kedua $= \\frac{4}{19}$. Peluang bersama $= \\frac{5}{20} \\times \\frac{4}{19} = \\frac{1}{19}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{5}{20} \\times \\frac{4}{19} = \\frac{1}{4} \\times \\frac{4}{19} = \\frac{1}{19}$$\nPeluangnya adalah **$\\frac{1}{19}$** (Opsi A)."
    ),
    make_q(
        "sd6-b4-19", "Tantangan",
        "Tiga keping uang logam dilempar bersamaan. Peluang munculnya minimal 2 sisi angka adalah...",
        ["\\frac{1}{2}", "\\frac{3}{8}", "\\frac{5}{8}", "\\frac{7}{8}"], "A",
        "Ruang sampel 3 koin $= 8$. Kejadian minimal 2 angka: (A,A,G), (A,G,A), (G,A,A), (A,A,A) ada 4 kejadian. Peluang $= \\frac{4}{8} = \\frac{1}{2}$.",
        "**Langkah Penyelesaian Terstruktur:**\n$$P = \\frac{4}{8} = \\frac{1}{2}$$\nPeluangnya adalah **$\\frac{1}{2}$** (Opsi A)."
    ),
    make_q(
        "sd6-b4-20", "Tantangan",
        "Hasil survei 50 siswa: 30 gemar renang, 25 gemar bulu tangkis, dan 10 gemar keduanya. Jika dipilih satu siswa secara acak, peluang terpilih siswa yang tidak gemar renang maupun bulu tangkis adalah...",
        ["\\frac{1}{10}", "\\frac{1}{5}", "\\frac{3}{25}", "\\frac{1}{25}"], "A",
        "Gemar renang saja $= 20$, bulu tangkis saja $= 15$, keduanya $= 10$. Total gemar $= 45$. Tidak gemar $= 5$. Peluang $= \\frac{5}{50} = \\frac{1}{10}$.",
        "**Langkah Penyelesaian Terstruktur:**\n1. Jumlah gemar setidaknya satu olahraga: $30 + 25 - 10 = 45$\n2. Tidak gemar keduanya: $50 - 45 = 5$\n3. Peluang: $\\frac{5}{50} = \\frac{1}{10}$ (Opsi A)."
    )
]

# Append
grade6Data["chapters"][0]["questions"].extend(b1_add)
grade6Data["chapters"][1]["questions"].extend(b2_add)
grade6Data["chapters"][2]["questions"].extend(b3_add)
grade6Data["chapters"][3]["questions"].extend(b4_add)

# Verify
for i, ch in enumerate(grade6Data["chapters"]):
    print(f"Bab {i+1} ({ch['id']}): {len(ch['questions'])} questions")

fileContent = f"""/**
 * Data Kurikulum Kelas 6 SD (Fase C)
 * 4 Bab Resmi Sesuai Buku Siswa Matematika
 */

export const grade6Data = {json.dumps(grade6Data, indent=2, ensure_ascii=False)};
"""

with open(DATA_PATH, 'w', encoding='utf-8') as f:
    f.write(fileContent)

print("Successfully expanded grade6.js to 20 questions per chapter!")
