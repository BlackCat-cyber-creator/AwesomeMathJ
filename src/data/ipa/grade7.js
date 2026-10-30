import { kelas } from './author.js';
import bab1 from './kelas7/bab1-hakikat-ilmu-sains.js';
import bab2 from './kelas7/bab2-zat-dan-perubahannya.js';
import bab3 from './kelas7/bab3-suhu-kalor-pemuaian.js';
import bab4 from './kelas7/bab4-gerak-dan-gaya.js';
import bab5 from './kelas7/bab5-klasifikasi-makhluk-hidup.js';
import bab6 from './kelas7/bab6-ekologi-keanekaragaman-hayati.js';
import bab7 from './kelas7/bab7-bumi-dan-tata-surya.js';

/** IPA Kelas 7 (Fase D), urutan bab mengikuti buku siswa IPA Kurikulum Merdeka. */
export const ipaGrade7Data = kelas({
  grade: 7,
  description: 'Metode Ilmiah, Zat dan Perubahannya, Suhu dan Kalor, Gerak dan Gaya, Klasifikasi Makhluk Hidup, Ekologi, serta Bumi dan Tata Surya',
  chapters: [bab1, bab2, bab3, bab4, bab5, bab6, bab7]
});
