# MASTER PROMPT & ARSITEKTUR: STUDIO GURU AWESOMEMATHJ

> **Instruksi untuk AI Pelaksana:**
> Anda berperan sebagai **Lead Full-Stack Web Architect & EdTech Software Engineer**.
> Dokumen ini memuat arsitektur lengkap, alur data, penjelasan teknis hosting (Vercel & Git), serta panduan pengembangan lebih lanjut untuk modul **Studio Guru Matematika (Teacher Dashboard)** pada proyek **AwesomeMathJ**.

---

## I. ARSITEKTUR SISTEM & ALUR PENYIMPANAN DATA

### 1. Bagaimana Data Bekerja Saat Ini?
Aplikasi **AwesomeMathJ** menggunakan dua lapis data yang berbeda sifatnya:

1. **Data Kurikulum & Bank Soal (Static Code di Git):**
   - Lokasi: `src/data/grades/grade4.js` s.d. `grade12.js`, dikompilasi melalui `src/data/curriculumData.js`.
   - Sifat: Menempel langsung pada kode program (*source code*). Setiap kali diubah dan di-push ke Git, Vercel akan otomatis melakukan *build* baru dan memperbarui konten materi di web.
2. **Data Operasional Guru (CRM Murid & Riwayat PR di LocalStorage):**
   - Lokasi: `src/utils/storage.js`.
   - Kunci Penyimpanan:
     - `awesomemathj_students_v2`: Data murid privat (nama, kelas, asal sekolah, nomor WhatsApp, catatan belajar, streak, total XP).
     - `awesomemathj_quests_v2`: Riwayat paket tugas PR 5 soal yang digenerate untuk murid (bab, paket, tenggat waktu, status pengerjaan, skor).
     - `awesomemathj_submissions_v2`: Rekaman jawaban dan nilai murid saat mengerjakan tugas.
     - `awesomemathj_auth_teacher_v1`: Status sesi login guru (PIN: `1907`).

---

## II. APA YANG TERJADI JIKA MENGHAPUS DATA / DEPLOYMENT DI VERCEL?

Banyak pengguna pemula khawatir bahwa menghapus deployment di Vercel atau melakukan `git push` akan menghapus data murid mereka. Berikut fakta teknisnya:

| Skenario Tindakan | Dampak Terhadap Data Murid & Riwayat PR | Penjelasan Teknis |
|-------------------|-----------------------------------------|-------------------|
| **Git Push / Update Kode Baru** | **AMAN (Tidak Terhapus)** | Vercel hanya mengompilasi ulang aset statis (`dist/`). Browser pengguna tetap menyimpan `localStorage` di bawah domain yang sama. |
| **Hapus Deployment di Vercel lalu Deploy Ulang** | **AMAN (Asalkan Domain Sama)** | `localStorage` terikat pada domain browser (misal: `awesomemathj.vercel.app`), bukan pada server Vercel. Selama domainnya sama, data tetap ada. |
| **Ganti Domain / URL Web Berbeda** | **Data Tidak Terbawa Otomatis** | `localStorage` tidak bisa menyeberang ke domain yang berbeda (kebijakan keamanan browser *Same-Origin Policy*). Gunakan fitur **Export JSON** lalu **Import JSON**. |
| **Buka Web dari Perangkat Lain (misal dari Laptop ke HP)** | **Data Belum Tersinkron** | Karena data tersimpan di browser lokal laptop, membuka web dari HP akan menampilkan data demo default. Solusinya: unduh Backup JSON dari laptop, kirim ke HP, lalu klik **Restore JSON**. |
| **Clear Browser Cache & Cookies** | **DATA TERHAPUS** | Jika pengguna melakukan *"Clear Browsing Data / Site Data"*, data `localStorage` akan terhapus dan kembali ke data percontohan awal. |

> **Fitur Pengaman yang Sudah Tersedia:**
> Pada pojok kanan atas tab navigasi Studio Guru, terdapat tombol **"Backup & Restore (JSON)"**:
> - **Unduh Cadangan (.json):** Menyimpan seluruh data murid dan tugas ke dalam 1 file JSON portabel dengan 1 klik.
> - **Pulihkan Data (Import):** Mengunggah kembali file JSON cadangan kapan saja.
> - **Reset ke Demo:** Mengembalikan ke 4 siswa percontohan awal jika diperlukan.

---

## III. STRUKTUR KOMPONEN TEACHER DASHBOARD (`src/components/TeacherDashboard.jsx`)

Studio Guru memiliki 3 tab fungsional terintegrasi:

### 1. Tab `generator` (Generator PR 5 Soal & WhatsApp)
- **Logika Paket (4 Segmen):**
  - Paket 1: Soal 1–5 (Tingkat Dasar & Konsep)
  - Paket 2: Soal 6–10 (Tingkat Sedang & Prosedural)
  - Paket 3: Soal 11–15 (Tingkat Terapan & Aplikasi)
  - Paket 4: Soal 16–20 (Tingkat Tantangan & Analisis)
- **Smart Pacing Kurikulum Merdeka:** Otomatis mendeteksi rekomendasi bab berjalan berdasarkan kalender akademik Indonesia semester ganjil/genap.
- **Distribusi 1-Klik:** Membuat tautan unik pengerjaan murid (`/?questId=...`) dan pesan pengantar ramah untuk dikirim langsung via WhatsApp.

### 2. Tab `students` (CRM Data Murid Privat)
- **Pencarian & Filter Cepat:** Bar pencarian instan berdasarkan nama murid, asal sekolah, atau catatan kelemahan, dilengkapi filter jenjang (Semua, SD, SMP, SMA).
- **Formulir Tambah/Edit Murid:**
  - `name`: Nama lengkap siswa.
  - `grade`: Jenjang kelas (4 s.d. 12).
  - `school`: Asal sekolah murid (misal: "SMP Kristen Gloria 1").
  - `parentPhone`: Nomor WhatsApp aktif orang tua atau siswa.
  - `notes`: Catatan fokus materi / kelemahan siswa.
- **Kartu Murid Interaktif:**
  - Memuat indikator *Streak* harian dan akumulasi *XP*.
  - Widget *Materi Sekarang* (sinkron kalender akademik).
  - Tautan langsung WhatsApp `https://api.whatsapp.com/send?phone=...`.
  - Tombol aksi: *Buat PR 5 Soal*, *Edit Data*, *Hapus Siswa*.

### 3. Tab `history` (Riwayat Penugasan & Rekap Nilai Siswa)
- **5 Kartu Ringkasan KPI:**
  1. Total Tugas Dibuat
  2. Tugas Selesai Dikerjakan (Hijau)
  3. Tugas Sedang Dikerjakan (Biru)
  4. Tugas Belum Dikerjakan (Amber)
  5. Rata-rata Skor Murid
- **Filter Riwayat:** Pencarian teks, filter status pengerjaan, dan filter berdasarkan murid tertentu.
- **Tabel Rekap Interaktif & Aksi Guru:**
  - Tombol **Uji**: Membuka tampilan pengerjaan murid secara langsung.
  - Tombol **Mata (Detail Rekap)**: Membuka modal inspeksi jawaban murid, lengkap dengan soal, pilihan siswa, kunci jawaban, diagram visual SVG, dan pembahasan KaTeX.
  - Tombol **Bagikan (Share WA)**: Mengirim ulang tautan PR ke WhatsApp jika siswa lupa.
  - Tombol **Cetak**: Membuka lembar kerja format cetak A4 rapi (*Worksheet*).
  - Tombol **Hapus**: Menghapus tugas dari riwayat penugasan.

---

## IV. PANDUAN PENGEMBANGAN BERIKUTNYA (NEXT STEPS FOR FUTURE AI)

Jika Anda ditugaskan untuk melakukan peningkatan lebih lanjut:

1. **Migrasi Cloud Backend (Opsional - Jika Butuh Sinkronisasi Otomatis Antar Perangkat):**
   - Buat proyek di **Supabase** atau **Firebase Firestore**.
   - Gantikan fungsi di `src/utils/storage.js` (`getStudents`, `saveStudents`, `createQuest`, dll.) dengan REST API / Supabase Client SDK.
   - Skema tabel yang dibutuhkan:
     ```sql
     CREATE TABLE students (
       id TEXT PRIMARY KEY,
       name TEXT NOT NULL,
       grade INT NOT NULL,
       level TEXT NOT NULL,
       school TEXT,
       parent_phone TEXT,
       streak INT DEFAULT 0,
       total_xp INT DEFAULT 0,
       notes TEXT,
       created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
     );

     CREATE TABLE quests (
       id TEXT PRIMARY KEY,
       student_id TEXT REFERENCES students(id),
       student_name TEXT,
       grade INT,
       chapter_id TEXT,
       chapter_title TEXT,
       packet_index INT,
       packet_range TEXT,
       deadline DATE,
       status TEXT, -- 'assigned', 'in_progress', 'completed'
       last_score INT,
       questions JSONB,
       answers JSONB,
       created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
     );
     ```
2. **Kerapian Tampilan & Desain:**
   - Pertahankan tema *Classy Minimalist Editorial* (warna dasar putih `#FFFFFF` dan `#F8FAFC`, aksen *Academic Navy* `#1E3A8A`, bebas mode gelap otomatis di perangkat mobile).
   - Pastikan selalu menjalankan `npm run build` setelah melakukan perubahan kode untuk memvalidasi zero compile error.
