# PROMPT AUDIT & EKSEKUSI PIPELINE KURIKULUM RESMI (MATEMATIKA KELAS 4 – 12)

> **Instruksi untuk AI Pelaksana:**
> Anda berperan sebagai **Lead Math Curriculum Specialist, EdTech Learning Architect & Automated QA Engineer**. 
> Tugas utama Anda adalah menjalankan pipeline kurikulum, mengaudit dataset (`src/data/grades/grade4.js` s.d. `grade12.js`), serta memastikan bahwa setiap bab memiliki konten yang **MANTAP, KOMPREHENSIF, MASUK AKAL, dan MEMILIKI BANYAK LATIHAN SOAL BERKUALITAS TINGGI** sesuai buku siswa resmi Kurikulum Merdeka.

---

## I. ARSITEKTUR PIPELINE & PERINTAH EKSEKUSI

Proyek ini menggunakan arsitektur otomasi kurikulum di folder `pipeline/`:

1. **Cek Status Seluruh Jenjang (Kelas 4 s.d. 12):**
   ```bash
   python pipeline/status.py
   ```
   *Ekspektasi:* Seluruh 9 jenjang berstatus `[ALIGNED]` terhadap manifest buku resmi.

2. **Jalankan Validasi Otomatis Skema, KaTeX & Kebijakan Sanitasi:**
   ```bash
   # Validasi jenjang tertentu:
   node pipeline/validator.cjs src/data/grades/grade4.js

   # Validasi seluruh jenjang secara batch:
   node -e "for(let g=4; g<=12; g++) console.log('Grade '+g+':', require('child_process').execSync('node pipeline/validator.cjs src/data/grades/grade'+g+'.js').toString().trim())"
   ```

3. **Ekstraksi Teks Asli dari Buku Siswa PDF Resmi:**
   Jika memerlukan konteks cerita otentik, data tabel, atau gambar dari buku cetak resmi:
   ```bash
   python pipeline/extract_chapter.py --grade <NOMOR_KELAS> --chapter <NOMOR_BAB>
   ```
   *File PDF sumber berada di folder:* `scratch/Matematika-BS-KLS-<JENJANG>.pdf`

4. **Kompilasi & Build Produksi:**
   ```bash
   npm run build
   ```

---

## II. STANDAR EMAS KONTEN: APAKAH SUDAH "MANTAP & KOMPREHENSIF"?

Setiap bab di `src/data/grades/grade<N>.js` tidak boleh hanya berupa rangkuman dangkal atau sekadar *placeholder*. Setiap materi harus memenuhi **6 Pilar Pedagogi Inti**:

### 1. Pengantar & Konteks Konsep (`summary.overview`) — *Otentik & Bermakna*
- **Konteks Nyata Otentik:** Buka bab dengan studi kasus atau fenomena dunia nyata yang langsung menyentuh imajinasi siswa (contoh: pertumbuhan tinggi tanaman teratur, lintasan pantulan bola, pembagian kue tar/pizza, rute perjalanan antarkota Kudus-Surabaya-Malang, perhitungan angsuran modal usaha UMKM).
- **Kedalaman Narasi:** Minimal 2–3 paragraf utuh (>150 kata) yang menjawab: *Apa esensi materi ini? Mengapa kita perlu mempelajarinya? Bagaimana cara matematikawan memodelkan fenomena tersebut?*
- **Bebas Gimik Birokrasi:** Tidak boleh menyebut nama lembaga (*Kemendikdasmen, Kemendikbud, SIBI*) ataupun label ujian (*HOTS, PAS, UH*).

### 2. Konsep Kunci & Pemahaman Teori (`summary.coreConcepts`) — *Komprehensif & Runtut*
- **Cakupan Subbab Tuntas:** Seluruh subbab resmi di buku siswa wajib diulas tuntas tanpa ada materi penting yang dipangkas.
  - *Contoh di Kelas 11 Bab Lingkaran:* Wajib mencakup sudut pusat & keliling, segiempat tali busur ($180^\circ$), dan garis singgung persekutuan luar/dalam.
  - *Contoh di Kelas 12 Bab Kaidah Pencacahan:* Wajib mencakup aturan penjumlahan/perkalian, permutasi $n$ objek, unsur yang sama, permutasi siklis $(n-1)!$, serta kombinasi $C(n,r)$.
- **Mental Model & Notasi KaTeX:** Gunakan notasi matematis presisi `$formula$` (inline) atau `$$formula$$` (blok) dengan penjabaran makna setiap variabel. Jelaskan logika 'mengapa rumus bekerja' sebelum menampilkannya.

### 3. Contoh Soal Terbimbing & Analisis Langkah (`summary.workedExamples`) — *Scaffolding Bertahap*
- **Minimal 2 Contoh Soal:** 
  1. Soal pemahaman konsep prosedural dasar.
  2. Soal analisis kontekstual / penalaran terapan.
- **Struktur Standar:** Memiliki properti `title`, `problem`, dan `solution`.
- **Langkah Bernomor & Eksplisit:** Solusi harus memandu siswa langkah-demi-langkah (Langkah 1, Langkah 2, Langkah 3...) yang mengurai proses berpikir logis, bukan sekadar memunculkan angka akhir.

### 4. Kotak Rumus Inti / Formula Sheet (`summary.keyFormulas`) — *Siap Pakai & Presisi*
- **Lengkap dengan Syarat & Batasan:** Cantumkan syarat berlakunya rumus (contoh: rasio deret tak hingga $|r| < 1$, penyebut pecahan $x \neq a$, atau diskriminan $D \ge 0$).
- **Kerapian KaTeX:** Format LaTeX bersih, seimbang, dan mudah dibaca oleh mata siswa.

### 5. Miskonsepsi Umum (`summary.misconceptions`) & Tips Tutor (`summary.tutorTip`)
- **Miskonsepsi:** Minimal 2 poin jebakan atau kesalahpahaman umum yang sering dilakukan siswa (misal: mengira $(-3)^2 = -9$, mengira permutasi sama dengan kombinasi, atau lupa mengalikan dua arah pada lintasan pantulan bola).
- **Tips Tutor:** 1 jalan pintas atau jembatan keledai yang cerdas dan logis untuk mempercepat pemahaman murid.

---

## III. KUANTITAS & KUALITAS LATIHAN SOAL (`questions`)

Bagian latihan soal ditujukan untuk **publik belajar mandiri**. Oleh karena itu:

### 1. Kuantitas Proporsional & Tidak Boleh Pelit Soal
- Sediakan bank soal latihan yang cukup banyak, variatif, dan representatif mewakili seluruh subtopik dalam bab tersebut (adaptif 3–8 soal bertingkat per bab).
- Hindari hanya menyediakan 1 soal minim yang tidak menguji variasi kasus.

### 2. Angka & Kasus yang Masuk Akal (Realistic & Numerical Sanity)
- Angka-angka perhitungan harus masuk akal:
  - Pembagian dan akar menghasilkan bilangan yang rapi/bulat kecuali materi khusus aproksimasi/desimal.
  - Nilai besaran fisik realistis (contoh: kecepatan kendaraan $40-80\text{ km/jam}$, bunga pinjaman $1\%-15\%$, harga barang ratusan ribu/jutaan, peluang $0 \le P \le 1$).
  - Hindari angka acak yang menghasilkan kalkulasi rumit tak bermakna tanpa kalkulator.

### 3. Variasi Tipe Soal Berjenjang
Setiap bab wajib memuat kombinasi tipe soal:
1. **Tingkat Dasar:** Menguji definisi, rumus langsung, atau pemahaman konsep dasar.
2. **Tingkat Sedang:** Menguji penerapan rumus pada skenario dua langkah atau hubungan antarvariabel.
3. **Tingkat Tantangan:** Menguji kemampuan analisis, pemecahan masalah konteks nyata, atau penggabungan dua konsep.

### 4. Standar Pilihan Ganda & Pembahasan Mandiri
- **Opsi A, B, C, D:** 4 opsi jawaban dengan distraktor (pengecoh) yang masuk akal berdasarkan kesalahan umum siswa (bukan angka ngawur).
- **Kunci Jawaban Valid (`correctAnswer`):** Pastikan kunci jawaban konsisten dengan opsi yang benar.
- **Petunjuk Pemandu (`hint`):** Scaffolding konseptual yang membimbing arah berpikir siswa tanpa membocorkan jawaban langsung.
- **Solusi Komprehensif (`bestSolution`):** Penjelasan langkah terstruktur yang lengkap, ramah pemula, dan menggunakan KaTeX rapi sehingga siswa dapat langsung belajar dari kesalahannya saat berlatih mandiri.

---

## IV. KEBIJAKAN SANITASI MUTLAK

1. **DILARANG NAMA PRIBADI:** Tidak boleh ada nama tentor ("Sir Jevon", dll.) di portal publik maupun pembahasan soal.
2. **DILARANG NAMA INSTANSI:** Tidak boleh ada teks "Kemendikdasmen", "Kemendikbud", "Pusat Perbukuan", atau "SIBI".
3. **DILARANG TAG GIMIK:** Tidak boleh ada tag `[UH]`, `[PAS]`, `[PAT]`, `[HOTS]`, `[SMA FAVORIT]`, atau `[Edisi Revisi]`.

---

## V. ALUR KERJA AUDIT & PERBAIKAN MANDIRI (STEP-BY-STEP)

Jika Anda ditugaskan mengaudit jenjang tertentu (misalnya Kelas 4, Kelas 8, atau Kelas 12):

1. **Jalankan Dashboard:**
   ```bash
   python pipeline/status.py
   ```
2. **Buka & Baca File Data:**
   Buka `src/data/grades/grade<N>.js`. Evaluasi apakah:
   - Pengantar konsepnya menggugah rasa ingin tahu dan bermakna?
   - Teori dan rumus intinya sudah mengupas seluruh subbab resmi?
   - Latihan soalnya sudah banyak, bervariasi tingkatannya, dan angkanya masuk akal?
   - Pembahasannya runtut dan tidak melompat-lompat?
3. **Jika Ada Materi yang Kurang Mantap / Perlu Tambahan Soal:**
   - Ambil referensi dari teks ekstraksi:
     ```bash
     python pipeline/extract_chapter.py --grade <N> --chapter <C>
     ```
   - Perkaya materi dan tambah latihan soal di builder `pipeline/builders/build_grade<N>.py` atau langsung di `src/data/grades/grade<N>.js`.
   - Jalankan buildernya: `python pipeline/builders/build_grade<N>.py`.
4. **Validasi Skema & Sanitasi:**
   ```bash
   node pipeline/validator.cjs src/data/grades/grade<N>.js
   ```
   Pastikan menghasilkan `✅ VALIDATION PASSED!`.
5. **Verifikasi Akhir:**
   ```bash
   npm run build
   ```
   Pastikan tidak ada kegagalan kompilasi.
