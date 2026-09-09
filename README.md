# AwesomeMathJ • Platform Belajar & Studio Guru Matematika

> **Platform Pembelajaran & Manajemen Bimbingan Belajar Matematika Kurikulum Merdeka (Kelas 4 SD – 12 SMA)**  
> Menggabungkan buku saku digital mandiri, studio manajemen bimbingan privat (*Sir Jevon*), lembar kerja cetak A4 ber-QR code, dan player penugasan digital interaktif.

---

## 🌟 Gambaran Utama (Overview)

**AwesomeMathJ** dirancang untuk menghubungkan pembelajaran di kelas, latihan mandiri di rumah, dan bimbingan guru secara efisien tanpa latensi server backend. Seluruh status aplikasi, data siswa, penugasan PR, dan riwayat pengerjaan dikelola secara instan melalui client-side architecture berbasis **React 19**, **Vite 8**, dan **KaTeX**.

### 🎯 Fitur Unggulan

1. **📖 Buku Saku & Portal Publik (`/`)**
   - Menjangkau seluruh jenjang: **SD (Kelas 4–6)**, **SMP (Kelas 7–9)**, hingga **SMA (Kelas 10–12)**.
   - Pembedaan tegas pada jenjang SMA Kelas 11 & 12 antara **Matematika Utama (Wajib)** dan **Matematika Tingkat Lanjut**.
   - Setiap bab terstruktur rapi dalam **6 Pilar Pedagogis**:
     - *Ringkasan Materi & Konteks Nyata*
     - *Konsep & Teorema Kunci*
     - *Contoh Soal & Pembahasan Bertahap*
     - *Rumus Penting (KaTeX)*
     - *Miskonsepsi Umum & Jebakan Konsep*
     - *Tips Guru & Solusi Cepat*
   - Dilengkapi kuis diagnostik interaktif dengan evaluasi nilai terpusat (*deferred checking*).

2. **👨‍🏫 Studio Guru Matematika (`/teacher`)**
   - **CRM Siswa**: Kelola profil murid les/bimbingan (nama, kelas, nomor kontak orang tua, catatan perkembangan belajar).
   - **Quest / PR Generator**: Buat penugasan PR 5 butir soal secara instan untuk tiap murid sesuai bab kurikulum yang sedang dipelajari.
   - **Gerbang WhatsApp Otomatis**: Buat pesan WhatsApp terformat rapi beserta tautan langsung tugas untuk dikirimkan ke orang tua atau siswa dalam 1 klik.
   - **Pelacak Tugas Real-Time**: Pantau status pengerjaan siswa (*Belum Dikerjakan*, *Sedang Mengerjakan*, *Selesai*) lengkap dengan rekap nilai dan modal inspeksi rincian jawaban siswa.

3. **🎮 Interactive Student Quest Player (`/?questId=...`)**
   - Tautan pengerjaan PR yang ramah ponsel dan tablet.
   - Formula matematika dirender tajam menggunakan KaTeX tanpa risiko pecah resolusi.
   - Dilengkapi stimulus soal visual interaktif berbasis **SVG murni** (geometri, koordinat Kartesius, diagram Venn, statistik, dll.).
   - **Papan Cakar Digital (Digital Scratchpad)**: Kanvas interaktif dengan kuas, penghapus, dan pilihan warna agar siswa dapat mencoret-coret hitungan langsung di layar.
   - Gamifikasi: Perolehan XP, *streak counter*, dan efek selebrasi konfeti saat menyelesaikan latihan.

4. **📄 Lembar Kerja Cetak A4 & Pembahasan QR (`PrintableWorksheet.jsx`)**
   - Hasilkan **Lembar Kerja Peserta Didik (LKPD)** siap cetak format A4 standar sekolah.
   - Layout tipografi monokrom berdaya kontras tinggi lengkap dengan identitas siswa, nama guru, kotak skor penilaian, dan kolom tanda tangan.
   - **Integrasi Kode QR**: Dilengkapi QR code scannable di pojok LKPD yang mengarahkan siswa langsung ke halaman pembahasan online langkah demi langkah (`ChapterSolutionView.jsx`) melalui ponsel cerdas mereka.

---

## 📊 Cakupan Kurikulum & Data Statistik

Semua materi diselaraskan langsung dari buku teks resmi Kemendikbudristek:

| Jenjang | Fase | Kelas | Jumlah Bab | Soal Latihan | Status Penyelarasan |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Sekolah Dasar (SD)** | Fase B & C | Kelas 4 | 6 Bab | 30 Soal | ✅ Aligned |
| | Fase C | Kelas 5 | 9 Bab | 36 Soal | ✅ Aligned |
| | Fase C | Kelas 6 | 4 Bab | 18 Soal | ✅ Aligned |
| **SMP** | Fase D | Kelas 7 | 6 Bab | 24 Soal | ✅ Aligned |
| | Fase D | Kelas 8 | 6 Bab | 24 Soal | ✅ Aligned |
| | Fase D | Kelas 9 | 4 Bab | 18 Soal | ✅ Aligned |
| **SMA** | Fase E | Kelas 10 | 8 Bab | 32 Soal | ✅ Aligned |
| | Fase F | Kelas 11 (Wajib & Lanjut) | 3 Bab | 15 Soal | ✅ Aligned |
| | Fase F | Kelas 12 (Wajib & Lanjut) | 4 Bab | 20 Soal | ✅ Aligned |
| **TOTAL** | | **9 Kelas** | **50 Bab** | **217 Soal** | **100% Validated** |

---

## 🏗️ Struktur Direktori Proyek

```
AwesomeMathJ/
├── public/                    # Aset statis & favicon
├── scratch/                   # PDF buku teks referensi & skrip utilitas ekstraksi
├── pipeline/                  # Pipeline kurikulum otomatis
│   ├── catalog_manifest.json  # Katalog silabus dan sumber resmi
│   ├── extract_chapter.py     # Ekstraktor teks bab dari PDF
│   ├── validator.cjs          # Validator integritas 6 pilar & sanitasi data
│   ├── status.py              # Monitor status progres kurikulum
│   └── builders/              # Skrip builder modul kurikulum per jenjang
├── src/
│   ├── assets/                # Gambar vektor & ikon pendukung
│   ├── components/            # Komponen antarmuka React
│   │   ├── ChapterSolutionView.jsx  # Tampilan kunci pembahasan via scan QR
│   │   ├── MathRenderer.jsx         # Render formula matematika KaTeX
│   │   ├── PrintableWorksheet.jsx   # Generator LKPD cetak A4 + QR code
│   │   ├── PublicHandbook.jsx       # Portal publik buku saku siswa
│   │   ├── QuestionVisual.jsx       # Engine diagram stimulus SVG murni
│   │   ├── ScratchpadModal.jsx      # Kanvas papan cakar digital
│   │   ├── StudentQuestView.jsx     # Player latihan PR siswa
│   │   ├── TeacherAuthModal.jsx     # Dialog login guru
│   │   ├── TeacherDashboard.jsx     # Studio Guru (CRM & generator tugas)
│   │   └── TeacherLoginView.jsx     # Halaman otentikasi Studio Guru (/teacher)
│   ├── data/
│   │   ├── curriculumData.js        # Master kurikulum loader
│   │   └── grades/                  # Modul silabus per kelas (grade4.js - grade12.js)
│   ├── utils/
│   │   └── storage.js               # LocalStorage manager (CRM, Quest, Auth, Score)
│   ├── App.css
│   ├── App.jsx                      # Routing top-level & state controller
│   ├── index.css                    # Design system (tokens, responsive, print stylesheet)
│   └── main.jsx                     # Vite React entrypoint
├── index.html
├── package.json
├── vercel.json                      # Konfigurasi SPA routing Vercel
└── vite.config.js
```

---

## 🚀 Panduan Memulai Cepat (Quick Start)

### 1. Prasyarat
- [Node.js](https://nodejs.org/) versi 18.0 atau lebih baru.
- npm atau pnpm.
- (Opsional untuk pipeline kurikulum) Python 3.9+ dengan `pypdf`.

### 2. Instalasi Dependensi
```bash
git clone https://github.com/BlackCat-cyber-creator/AwesomeMathJ.git
cd AwesomeMathJ
npm install
```

### 3. Menjalankan Server Pengembangan Lokal
```bash
npm run dev
```
Buka peramban Anda di `http://localhost:5173`.

### 4. Build untuk Produksi
```bash
npm run build
```
Hasil build produksi siap saji akan dibuat di folder `dist/`.

### 5. Pengecekan Kualitas Kode (Linting)
```bash
npm run lint
```

---

## 🛠️ Perintah Pipeline Kurikulum

AwesomeMathJ menyertakan rangkaian alat untuk menjaga konsistensi konten kurikulum:

* **Periksa Status Kurikulum & Soal:**
  ```bash
  python pipeline/status.py
  ```
* **Validasi Integritas Data Modul (6 Pilar & Sanitasi):**
  ```bash
  node pipeline/validator.cjs src/data/grades/grade4.js
  ```
* **Ekstraksi Bab dari PDF Buku Teks:**
  ```bash
  python pipeline/extract_chapter.py --grade 5 --chapter 1
  ```

---

## 🌐 Panduan Navigasi & Routing

| URL / Query Parameter | Tampilan / Fungsi |
| :--- | :--- |
| `/` | **Portal Buku Panduan Publik**: Eksplorasi materi, kuis mandiri, cetak lembar kerja. |
| `/teacher` | **Studio Guru Sir Jevon**: Manajemen siswa CRM, penugasan PR, dan diseminasi WhatsApp. |
| `/?questId=<ID>` | **Latihan PR Murid**: Akses langsung penugasan PR interaktif untuk siswa. |
| `/?pembahasan=1&grade=<G>&chapter=<C>` | **Pembahasan Online**: Dibuka melalui scan QR code pada LKPD cetak. |

---

## 📄 Lisensi & Hak Cipta

- Platform web, kode sumber, dan antarmuka dikembangkan untuk ekosistem pembelajaran matematika **AwesomeMathJ**.
- Materi silabus diselaraskan dengan Capaian Pembelajaran Kurikulum Merdeka Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi Republik Indonesia.
