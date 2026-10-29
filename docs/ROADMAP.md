# Roadmap AwesomeMathJ → Math & Science untuk Semua

## Tujuan

Materi **Matematika dan IPA** yang bisa dibuka, dibaca, dan dipelajari siapa saja tanpa login, ringan di HP, dan tetap bisa dipakai offline.

**Studio Guru** tetap menjadi alat pribadi untuk mengirim PR ke murid. Murid reguler mendapat materi kurikulum, sedangkan murid olimpiade mendapat AMC. Keduanya memakai bank soal yang sama.

## Kurikulum yang dicakup

| Jalur | Untuk siapa | Acuan |
| :--- | :--- | :--- |
| **Kurikulum Merdeka** | Sekolah negeri & swasta nasional | CP Keputusan Kepala BSKAP **046/H/KR/2025** dan buku siswa **edisi revisi** (SD mulai semester 2 TA 2025/2026) |
| **Cambridge** | Sekolah bilingual/internasional | Primary Mathematics 0096 & Science 0097 (Stage 1–6); Lower Secondary Mathematics 0862 & Science 0893 (Stage 7–9); IGCSE Mathematics 0580, Physics 0625, Chemistry 0620, Biology 0610 |
| **Olimpiade** | Murid kompetisi | AMC 8/10/12 (sudah ada), lalu OSN/KSN |

Jalur Cambridge dipilih karena sekolah unggulan di Pontianak memakainya:
- **Sekolah Kristen Immanuel:** kelas bilingual, kurikulum nasional ditambah Cambridge IGCSE untuk Matematika & Sains.
- **Sekolah Tunas Bangsa:** IB PYP untuk TK–SD, Cambridge untuk SMP–SMA (IGCSE, AS/A Level).
- **Stella Maris:** Cambridge.

Data ini berasal dari direktori sekolah pihak ketiga, jadi perlu dicek ulang langsung ke sekolah.

**IPA dalam Kurikulum Merdeka:**
- SD Kelas 3–6 memakai mata pelajaran **IPAS** (IPA + IPS); hanya bagian IPA yang diambil.
- SMP memakai **IPA** terpadu.
- SMA Kelas 10 memakai **IPA** (Fase E); Kelas 11–12 terbagi menjadi **Fisika, Kimia, Biologi** (Fase F).

## Prinsip konten (berlaku untuk semua mata pelajaran)

1. **Satu soal, satu sumber.** Teks, pilihan, kunci, pembahasan, dan gambar ada dalam satu objek. Sudah diterapkan untuk Matematika Kelas 4–12.
2. **Setiap soal diberi label kurikulum:** mata pelajaran, jalur, kelas/fase, elemen CP atau kode Cambridge, dan sumber buku/bab.
3. **Gambar dibuat dari data soal.** Angka di gambar harus sama dengan angka di soal, dan dijaga oleh `tests/contentAudit.test.js`.
4. **Tidak ada soal yang bergantung pada soal lain.** Paket PR mengambil soal secara terpisah.
5. **Setiap perubahan konten lewat test.** Render gambar, cakupan fase, kunci jawaban, soal kembar.

## Temuan katalog buku resmi (buku.kemendikdasmen.go.id, Oktober 2026)

Katalog Kurikulum Merdeka resmi dibaca langsung lewat API publik situs:

| Mapel | Edisi terbaru di katalog |
| :--- | :--- |
| Matematika SD Kelas IV–VI, SMP Kelas VII–IX | Edisi 2022 — **file PDF yang sama** dengan yang dipakai proyek ini (`Matematika-BS-KLS-IV.pdf`, dst.) |
| Matematika SMA Kelas X | **Edisi Revisi** (`Matematika_BS_KLS_X_Rev.pdf`) |
| Matematika Tingkat Lanjut Kelas XI | **Edisi Revisi** (`Matematika_BS_KLS_XI_TL_Rev.pdf`) |
| Matematika Kelas XI, XII, Tingkat Lanjut XII | Edisi 2021/2022 |
| IPA SMP Kelas VII & VIII, IPA SMA Kelas X, IPAS SD Kelas IV & V | **Edisi Revisi** |

Artinya, ketidaksesuaian kelas (soal Kelas 4 berisi materi Kelas 5) **bukan karena buku lama**. Penyebabnya soal tambahan yang dibuat tanpa dicek ke CP (sudah diperbaiki di Tahap 0). Buku Matematika SD–SMP di katalog resmi belum diganti edisi baru. Yang perlu diselaraskan ulang dengan edisi revisi adalah **Kelas X** dan **Matematika Tingkat Lanjut XI**.

Catatan akses: PDF buku disimpan di domain `static.buku.kemdikbud.go.id` (domain lama), yang masih harus diizinkan di pengaturan jaringan agar isi buku bisa dibaca.

## Tahapan

### Tahap 0 — Perbaikan darurat ✅ (Oktober 2026)
- Gambar dipindahkan ke dalam soal; 63 gambar diperbaiki.
- Soal Kelas 4 di luar Fase B diganti; soal kembar dan soal yang merujuk "soal sebelumnya" dibereskan.
- Audit otomatis dipasang. Rincian ada di `docs/audit/AUDIT_2026-10.md`.

### Tahap 0b — Studio Guru sederhana ✅ (Oktober 2026)
- Satu halaman berbasis murid; 1 bab = 1 PR (mudah → sulit); PR AMC untuk murid olimpiade.
- Pemutar PR mendukung pilihan ganda, isian, dan uraian; jawaban per soal terlihat oleh guru.
- Login Google murid dihapus; progres pengunjung publik tersimpan di perangkat.
- Aturan Firestore diperketat (daftar PR hanya untuk guru pemilik). **Perlu di-deploy:** `firebase deploy --only firestore:rules`.

### Tahap 0c — Penyelarasan CP 046/2025 ✅ (Oktober 2026)
- Teks resmi CP Matematika, Matematika Tingkat Lanjut, IPAS, IPA, Fisika, Kimia, dan Biologi disimpan di `docs/kurikulum/cp-046-2025/`.
- 39 soal SD yang memakai materi Fase D diganti (statistika, diagram lingkaran, peluang berupa angka, lingkaran, desimal dua angka, skala). Bab Peluang Kelas 6 kini membahas kemungkinan kejadian sesuai Fase C.
- Aturan otomatis cakupan fase untuk Kelas 4–9; keterangan CP 2025 untuk bab Kelas X yang berpindah fase.

### Tahap 0d — Exposure mesin pencari (SEO) ✅ (Oktober 2026)
- Alamat rapi per bab: `/matematika/kelas-4/bab2-pecahan`, `/olimpiade/amc-8/ch1-permutations` (link lama `/?grade=` dialihkan otomatis).
- `npm run build` menjalankan `scripts/prerender.mjs`. Hasilnya 104 halaman HTML berisi materi lengkap (rumus dirender KaTeX), dengan judul/deskripsi unik, canonical, Open Graph, dan JSON-LD (`LearningResource`, `BreadcrumbList`), plus `sitemap.xml`.
- `public/robots.txt` menutup Studio Guru, link PR, lembar kerja, dan halaman kunci jawaban dari indeks.
- `vercel.json`: `cleanUrls` aktif, dan rute aplikasi lain di-rewrite ke `/app` (bukan `/app.html`, yang menyebabkan 404). Hal ini dijaga oleh `tests/deployConfig.test.js`.
- Perlu dilakukan pemilik situs: daftarkan `https://awesomemathj.vercel.app` di Google Search Console, lalu kirim `sitemap.xml`.

### Tahap 1 — Fondasi multi-mata pelajaran
- Struktur data baru: `src/content/<subject>/<curriculum>/<grade>/<chapter>.json`, satu file per bab supaya mudah dibaca dan diedit guru tanpa coding.
- Skema soal ditambah label `subject`, `curriculum`, `phase`, `cpElement`, dan `source`.
- Rute publik: `/matematika/merdeka/kelas-4/bab-2`, `/ipa/cambridge/stage-7/...`, dan seterusnya, dengan pencarian materi dan link per soal.
- Tombol **"Laporkan soal salah"** di setiap soal, masuk ke antrean tinjauan di Studio Guru.
- Studio Guru: tambah pilihan mata pelajaran IPA dan jalur Cambridge saat membuat PR.

### Tahap 2 — Matematika Kurikulum Merdeka edisi revisi
- Selaraskan ulang **Kelas X** dan **Matematika Tingkat Lanjut XI** dengan edisi revisi.
- Kelas 4–9: periksa setiap soal terhadap buku 2022 (yang masih berlaku) dan CP 046/2025; ganti soal yang keluar dari cakupan bab.
- Ganti sisa soal kembar dan mirip (daftar di laporan audit).
- **Butuh:** akses ke PDF buku resmi (lihat "Kebutuhan dari Anda").

### Tahap 3 — IPA Kurikulum Merdeka
- Mulai dari IPA SMP (Kelas 7–9), lalu IPAS SD (bagian IPA), lalu IPA Kelas 10 dan Fisika/Kimia/Biologi Kelas 11–12.
- Jenis gambar baru: rangkaian listrik, diagram gaya, sel, sistem organ, tabel periodik, grafik gerak.

### Tahap 4 — Jalur Cambridge
- Cambridge Lower Secondary Mathematics & Science (Stage 7–9), lalu Primary (Stage 4–6), lalu IGCSE.
- Konten dalam bahasa Inggris, dengan istilah kunci dwibahasa.

### Tahap 5 — Olimpiade
- Rapikan modul AMC (gambar yang belum terhubung, audit otomatis yang sama).
- Tambah jalur OSN/KSN Matematika & IPA.

## Kebutuhan dari Anda

1. **Akses PDF buku resmi.** Katalog `buku.kemendikdasmen.go.id` sudah bisa dibaca, tetapi file PDF-nya ada di `static.buku.kemdikbud.go.id` yang masih diblokir. Tambahkan domain itu di *Network access* environment (https://code.claude.com/docs/en/cloud-environments#network-access), atau unggah PDF ke repo (misalnya folder `sources/`).
2. **Contoh soal dari sekolah murid.** Lembar kerja atau ujian dari Immanuel, Tunas Bangsa, dan lainnya akan membantu menyesuaikan gaya dan tingkat kesulitan soal.
