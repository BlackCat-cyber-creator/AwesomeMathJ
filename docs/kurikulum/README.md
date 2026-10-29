# Acuan Kurikulum

## Capaian Pembelajaran (CP) — Keputusan Kepala BSKAP 046/H/KR/2025

Folder `cp-046-2025/` berisi kutipan teks resmi lampiran keputusan untuk mata pelajaran yang dipakai situs ini:

| File | Isi | Fase |
| :--- | :--- | :--- |
| `matematika.md` | Matematika | A–F (Kelas 1–12) |
| `matematika-tingkat-lanjut.md` | Matematika Tingkat Lanjut (pilihan) | F (Kelas XI–XII) |
| `ipas-sd.md` | IPAS SD | A–C (Kelas 1–6) |
| `ipa.md` | IPA terpadu | D (SMP) & E (Kelas X) |
| `fisika.md`, `kimia.md`, `biologi.md` | Mata pelajaran pilihan SMA | F (Kelas XI–XII) |

**Status:** CP 046/2025 masih berlaku untuk mata pelajaran umum. Keputusan Kepala BKPDM Nomor 020 Tahun 2026 hanya mengubah CP Agama dan Budi Pekerti.

**Sumber teks:** salinan PDF lengkap keputusan (1.691 halaman, kop BSKAP, bertanda "SALINAN") yang dibagikan di [pengajarpedia.com](https://www.pengajarpedia.com/2025/09/download-capaian-pembelajaran-terbaru.html). Fase A–C Matematika dicocokkan silang dengan [kepalasekolah.id](https://kepalasekolah.id/capaian-pembelajaran-cp-matematika-sd-mi-2025-terbaru-berdasarkan-keputusan-kepala-bskap-nomor-046-h-kr-2025/), dan teksnya sama.

## Pembagian fase

| Fase | Kelas |
| :--- | :--- |
| B | III–IV |
| C | V–VI |
| D | VII–IX |
| E | X–XI |
| F | XI–XII |

## Cara memakai

- **Penjaga otomatis:** `src/utils/contentAudit.js` (`OUT_OF_SCOPE_RULES`) menerjemahkan batas fase menjadi aturan otomatis. Test `tests/contentAudit.test.js` gagal jika ada soal Kelas 4–9 yang memakai topik fase berikutnya.
- **Catatan per bab:** `src/data/cp2025Mapping.js` mencatat bab yang di CP 2025 berpindah kelas (terutama Kelas X). Babnya tetap tersedia, tetapi diberi keterangan di halaman bab dan di Studio Guru.

## Ringkasan dampak pada konten (Oktober 2026)

- **Kelas 4–9:** semua judul bab sesuai fasenya. 55 soal yang keluar fase sudah diganti:
  - 7 soal Kelas 4;
  - 15 soal Kelas 5 (rerata/median/modus, diagram lingkaran, luas lingkaran);
  - 33 soal Kelas 6 (peluang berupa angka, operasi desimal dua angka, skala, luas permukaan, akar pangkat tiga, perubahan ukuran terhadap volume).
- **Kelas X:** bab Logaritma, Barisan & Deret, Vektor, dan Peluang di CP 2025 berada di Fase F (Kelas XI–XII / Tingkat Lanjut). Bab-bab ini diberi keterangan, tidak dihapus.
- **Teks materi ikut diselaraskan:** Kelas 5 Bab 8 (istilah modus dihapus) dan Kelas 6 Bab 4 (rumus peluang diganti dengan membandingkan kemungkinan). Test `contentAudit` kini juga memeriksa teks materi, bukan hanya soal.
- **Kelas 6 Bab 3 (Kubus dan Balok)** kini mengikuti Fase C: menyusun dan mengurai, jaring-jaring, tampak depan/samping/atas, membandingkan bangun ruang, dan volume dengan kubus satuan. Luas permukaan dipindah ke SMP, sesuai keputusan guru (Oktober 2026).
