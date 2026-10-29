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

## Tahapan

### Tahap 0 — Perbaikan darurat ✅ (Oktober 2026)
- Gambar dipindahkan ke dalam soal; 63 gambar diperbaiki.
- Soal Kelas 4 di luar Fase B diganti; soal kembar dan soal yang merujuk "soal sebelumnya" dibereskan.
- Audit otomatis dipasang. Rincian ada di `docs/audit/AUDIT_2026-10.md`.

### Tahap 1 — Fondasi multi-mata pelajaran
- Struktur data baru: `src/content/<subject>/<curriculum>/<grade>/<chapter>.json`, satu file per bab supaya mudah dibaca dan diedit guru tanpa coding.
- Skema soal ditambah label `subject`, `curriculum`, `phase`, `cpElement`, dan `source`.
- Rute publik: `/matematika/merdeka/kelas-4/bab-2`, `/ipa/cambridge/stage-7/...`, dan seterusnya, dengan pencarian materi dan link per soal.
- Tombol **"Laporkan soal salah"** di setiap soal, masuk ke antrean tinjauan di Studio Guru.
- Studio Guru: pilih mata pelajaran dan jalur saat membuat PR (Matematika Merdeka / Cambridge / AMC / IPA).

### Tahap 2 — Matematika Kurikulum Merdeka edisi revisi
- Selaraskan ulang Kelas 4–6 dengan buku siswa edisi revisi dan CP 046/2025: daftar bab, urutan materi, dan contoh soal. Dilanjutkan ke SMP, lalu SMA.
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

1. **Akses buku resmi.** Sesi cloud ini tidak bisa membuka `buku.kemendikdasmen.go.id`, `kurikulum.kemendikdasmen.go.id`, dan `cambridgeinternational.org` karena diblokir pengaturan jaringan.
   - Pilihan 1: tambahkan domain itu di *Network access* environment (lihat https://code.claude.com/docs/en/cloud-environments#network-access).
   - Pilihan 2: unggah PDF buku siswa edisi revisi ke repo (misalnya folder `sources/`, tidak dipublikasikan).
2. **Contoh soal dari sekolah murid.** Lembar kerja atau ujian dari Immanuel, Tunas Bangsa, dan lainnya akan membantu menyesuaikan gaya dan tingkat kesulitan soal.
