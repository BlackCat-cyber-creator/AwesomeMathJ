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

| Jenjang | Fase | Kelas | Jumlah Bab | Soal Latihan (Paket A-D) | Status Penyelarasan |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Sekolah Dasar (SD)** | Fase B & C | Kelas 4 | 6 Bab | 120 Soal | ✅ 100% Aligned |
| | Fase C | Kelas 5 | 9 Bab | 180 Soal | ✅ 100% Aligned |
| | Fase C | Kelas 6 | 4 Bab | 80 Soal | ✅ 100% Aligned |
| **SMP** | Fase D | Kelas 7 | 6 Bab | 120 Soal | ✅ 100% Aligned |
| | Fase D | Kelas 8 | 6 Bab | 120 Soal | ✅ 100% Aligned |
| | Fase D | Kelas 9 | 4 Bab | 80 Soal | ✅ 100% Aligned |
| **SMA** | Fase E | Kelas 10 | 8 Bab | 160 Soal | ✅ 100% Aligned |
| | Fase F | Kelas 11 (Wajib & Lanjut) | 6 Bab | 120 Soal | ✅ 100% Aligned |
| | Fase F | Kelas 12 (Wajib & Lanjut) | 6 Bab | 120 Soal | ✅ 100% Aligned |
| **TOTAL** | | **9 Kelas** | **55 Bab** | **1.100 Soal** | **100% Validated** |

---

## 🧭 Arsitektur Routing Deklaratif & Deep Linking

Aplikasi mengadopsi **React Router v7** dengan skema rute kanonik dan dukungan penuh mundur (*backward compatibility*) untuk QR code fisik yang sudah tercetak:

| Rute Kanonik | Komponen | Deskripsi |
| :--- | :--- | :--- |
| `/` | `PublicHandbook` | Portal buku saku digital 55 bab dengan 6 pilar pedagogis dan kuis mandiri |
| `/quest/:questId` | `StudentQuestView` | Player pengerjaan tugas/PR interaktif siswa dengan scratchpad kanvas |
| `/worksheet/:questId` | `PrintableWorksheet` | Lembar Kerja Peserta Didik (LKPD) cetak A4 siap print dengan QR code |
| `/solution/:grade/:chapterId` | `ChapterSolutionView` | Kunci jawaban & pembahasan bertahap resmi (target scan QR dari LKPD) |
| `/teacher/login` | `TeacherLoginView` | Gerbang autentikasi guru (Login & Registrasi akun baru) |
| `/teacher/*` | `TeacherDashboard` | Studio manajemen pengajar (CRM Siswa, Quest Generator, Monitor Pengerjaan) |

> **Kompatibilitas QR Code Fisik**: Permintaan lawas seperti `/?pembahasan=1&grade=8&chapter=smp8-b2` atau `/?questId=...` secara otomatis diarahkan ke URL kanonik melalui `QueryRedirectHandler` tanpa memutus link cetak yang sudah tersebar.

---

## 🏗️ Struktur Direktori Proyek

```
AwesomeMathJ/
├── public/                    # Aset statis & favicon
├── scratch/                   # Skrip utilitas & pipeline
├── pipeline/                  # Pipeline kurikulum otomatis
│   ├── catalog_manifest.json  # Katalog silabus dan sumber resmi
│   ├── validator.cjs          # Validator integritas 6 pilar & sanitasi data
│   └── audit.cjs              # Audit konsistensi 20 soal per bab
├── src/
│   ├── assets/                # Gambar vektor & ikon pendukung
│   ├── components/            # Komponen antarmuka React modular
│   │   ├── handbook/          # Subkomponen Buku Saku Publik
│   │   │   ├── ChapterQuiz.jsx       # Mesin kuis mandiri & filter paket A-D
│   │   │   └── PillarsAccordion.jsx  # 6 pilar pedagogis materi dengan KaTeX
│   │   ├── teacher/           # Subkomponen Studio Guru
│   │   │   ├── QuestGeneratorTab.jsx # Pembuat paket tugas & kartu WhatsApp
│   │   │   ├── QuestMonitorTab.jsx   # Monitoring status pengerjaan & modal inspeksi
│   │   │   ├── StudentCrmTab.jsx     # Manajemen profil siswa & multi-tenant roster
│   │   │   ├── TeacherHeader.jsx     # Header navigasi guru & status cloud
│   │   │   └── teacherConstants.js   # Definisi paket PR & konstanta guru
│   │   ├── visuals/           # Engine stimulus visual SVG murni
│   │   │   ├── common/        # Elemen geometri dasar & kontainer SVG
│   │   │   ├── engines/       # Engine Aljabar, Geometri, Koordinat, Aritmetika
│   │   │   └── registry/      # Registry visual per jenjang (Kelas 4 s/d 12)
│   │   ├── AcademicTimeline.jsx      # Peta jadwal kalender pendidikan
│   │   ├── ChapterSolutionView.jsx   # Tampilan kunci pembahasan via scan QR
│   │   ├── MathRenderer.jsx          # Render formula matematika KaTeX polimorfik
│   │   ├── PrintableWorksheet.jsx    # Generator LKPD cetak A4 + QR code
│   │   ├── PublicHandbook.jsx        # Koordinator portal publik buku saku siswa
│   │   ├── QuestionVisual.jsx        # Registry dispatcher diagram stimulus SVG
│   │   ├── ScratchpadModal.jsx       # Kanvas papan cakar digital siswa
│   │   ├── StudentQuestView.jsx      # Player latihan PR siswa interaktif
│   │   ├── TeacherDashboard.jsx      # Koordinator studio guru
│   │   └── TeacherLoginView.jsx      # Form login & registrasi guru baru
│   ├── context/
│   │   └── AuthContext.jsx           # Provider autentikasi guru multi-tenant
│   ├── data/
│   │   ├── curriculumData.js         # Master kurikulum loader & code-splitting
│   │   └── grades/                   # Modul silabus per kelas (grade4.js - grade12.js)
│   ├── firebase/
│   │   ├── auth.js                   # SDK Autentikasi Firebase
│   │   ├── config.js                 # Inisialisasi Firebase aman berbasis .env
│   │   └── firestore.js              # Sinkronisasi cloud Firestore & atomic increment
│   ├── hooks/
│   │   ├── useAuth.js                # Custom hook akses konteks auth
│   │   └── useCurriculum.js          # Custom hook data kurikulum ter-cache
│   ├── utils/
│   │   ├── idGenerator.js            # Generator ID unik std-, quest-, sub-
│   │   └── storage.js                # LocalStorage fallback manager
│   ├── App.jsx                       # Top-level declarative routing & redirects
│   ├── index.css                     # Design system (Notion-editorial, print A4 CSS)
│   └── main.jsx                      # Vite React entrypoint
├── tests/                            # Vitest automated test suite (33 tests)
│   ├── academicCalendar.test.js
│   ├── answerDistribution.test.js
│   ├── authAndSync.test.js
│   ├── curriculum.test.js
│   ├── idGenerator.test.js
│   ├── routing.test.js
│   └── visualAccuracy.test.js
├── firestore.rules                   # Aturan keamanan Firestore tersanitasi
├── index.html                        # HTML template tanpa KaTeX CDN ganda
├── package.json
├── vercel.json                      # Konfigurasi SPA routing Vercel
└── vite.config.js                    # Vite configuration & chunk-splitting rules
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
