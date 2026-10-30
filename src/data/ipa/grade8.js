import { kelas } from './author.js';
import bab1 from './kelas8/bab1-sel.js';
import bab2 from './kelas8/bab2-struktur-fungsi-tubuh.js';
import bab3 from './kelas8/bab3-usaha-energi-pesawat-sederhana.js';
import bab4 from './kelas8/bab4-getaran-gelombang-cahaya.js';
import bab5 from './kelas8/bab5-unsur-senyawa-campuran.js';
import bab6 from './kelas8/bab6-struktur-bumi.js';

/** IPA Kelas 8 (Fase D), urutan bab mengikuti buku siswa IPA Kurikulum Merdeka. */
export const ipaGrade8Data = kelas({
  grade: 8,
  description: 'Sel, Struktur dan Fungsi Tubuh Makhluk Hidup, Usaha dan Pesawat Sederhana, Getaran Gelombang dan Cahaya, Unsur Senyawa Campuran, serta Struktur Bumi',
  chapters: [bab1, bab2, bab3, bab4, bab5, bab6]
});
