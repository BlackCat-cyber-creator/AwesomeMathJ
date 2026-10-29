/**
 * Posisi bab menurut CP Matematika Keputusan Kepala BSKAP 046/H/KR/2025
 * (teks resmi: docs/kurikulum/cp-046-2025/matematika*.md).
 *
 * Hanya bab yang posisinya berbeda dari kelas di buku lama yang dicatat di sini.
 * Bab tetap tersedia (masih dipakai sekolah dengan buku edisi sebelumnya),
 * tetapi diberi keterangan agar murid & guru tahu letaknya di CP 2025.
 */
export const CP2025_CHAPTER_NOTES = {
  'sma10-bab1-eksponen-logaritma': {
    status: 'sebagian',
    label: 'CP 2025: logaritma di Kelas XI–XII',
    note: 'Eksponen (termasuk pangkat pecahan) dan fungsi eksponensial ada di Fase E (Kelas X). Logaritma pada CP 2025 masuk Matematika Tingkat Lanjut Fase F (Kelas XI–XII).'
  },
  'sma10-bab2-barisan-deret': {
    status: 'pindah',
    label: 'CP 2025: Kelas XI–XII',
    note: 'Pada CP 2025, barisan dan deret aritmetika–geometri masuk Fase F (Kelas XI–XII) bersama bunga majemuk dan anuitas.'
  },
  'sma10-bab3-vektor': {
    status: 'pindah',
    label: 'CP 2025: Tingkat Lanjut XI–XII',
    note: 'Pada CP 2025, vektor masuk Matematika Tingkat Lanjut Fase F (Kelas XI–XII).'
  },
  'sma10-bab5-spltv-sptldv': {
    status: 'sebagian',
    label: 'CP 2025: fokus SPtLDV',
    note: 'Fase E (Kelas X) pada CP 2025 menekankan sistem pertidaksamaan linear dua variabel. Sistem persamaan linear tiga variabel tidak lagi disebut.'
  },
  'sma10-bab8-peluang': {
    status: 'pindah',
    label: 'CP 2025: Kelas XI–XII',
    note: 'Pada CP 2025, peluang kejadian majemuk, saling lepas, saling bebas, dan bersyarat masuk Fase F (Kelas XI–XII).'
  }
};

export function getCp2025Note(chapterId) {
  return CP2025_CHAPTER_NOTES[chapterId] || null;
}
