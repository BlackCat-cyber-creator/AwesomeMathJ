import { kelas } from './author.js';
import bab1 from './kelas9/bab1-pertumbuhan-perkembangan.js';
import bab2 from './kelas9/bab2-koordinasi-reproduksi-homeostasis.js';
import bab3 from './kelas9/bab3-tekanan.js';
import bab4 from './kelas9/bab4-listrik-magnet-energi.js';
import bab5 from './kelas9/bab5-reaksi-kimia.js';
import bab6 from './kelas9/bab6-pewarisan-sifat-bioteknologi.js';
import bab7 from './kelas9/bab7-isu-lingkungan.js';

/** IPA Kelas 9 (Fase D), urutan bab mengikuti buku siswa IPA Kurikulum Merdeka. */
export const ipaGrade9Data = kelas({
  grade: 9,
  description: 'Pertumbuhan dan Perkembangan, Sistem Koordinasi dan Reproduksi, Tekanan, Listrik dan Magnet, Reaksi Kimia, Pewarisan Sifat dan Bioteknologi, serta Isu Lingkungan',
  chapters: [bab1, bab2, bab3, bab4, bab5, bab6, bab7]
});
