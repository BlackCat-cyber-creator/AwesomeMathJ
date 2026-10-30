/**
 * Pengelompokan bab per topik (seperti "Daftar Isi Blog" per topik di mathcyber1997),
 * dipakai halaman /daftar-isi, bagian "Materi terkait" di setiap bab, dan paket TKA.
 * Topik Matematika mengikuti elemen CP 046/2025; topik IPA mengikuti bidang ilmunya.
 * Bab baru WAJIB didaftarkan di sini (dijaga oleh tests/topics.test.js).
 */

export const MATH_TOPICS = [
  {
    id: 'bilangan',
    name: 'Bilangan',
    description: 'Bilangan cacah, pecahan, desimal, bilangan bulat dan rasional, KPK–FPB, rasio, pangkat, dan logaritma.',
    chapters: [
      'sd4-bab1-bilangan-cacah', 'sd5-bab1-bilangan-cacah-100k', 'sd5-bab9-cacah-satu-juta',
      'sd4-bab2-pecahan', 'sd5-bab3-bilangan-pecahan', 'sd6-bab1-pecahan-desimal',
      'sd5-bab2-kpk-fpb', 'sd6-bab2-rasio',
      'smp7-bab1-bilangan-bulat', 'smp7-bab2-bilangan-rasional', 'smp7-bab3-rasio',
      'smp8-bab1-bilangan-berpangkat', 'sma10-bab1-eksponen-logaritma', 'sma12-bab2-investasi-pinjaman'
    ]
  },
  {
    id: 'aljabar',
    name: 'Aljabar dan Fungsi',
    description: 'Pola bilangan, bentuk aljabar, persamaan dan pertidaksamaan, fungsi, persamaan garis, barisan dan deret.',
    chapters: [
      'sd4-bab3-pola-gambar-bilangan', 'smp7-bab4-bentuk-aljabar',
      'smp8-bab3-persamaan-pertidaksamaan-linear', 'smp9-bab1-spldv', 'sma10-bab5-spltv-sptldv',
      'smp8-bab4-relasi-fungsi', 'smp8-bab5-persamaan-garis-lurus', 'sma10-bab6-fungsi-kuadrat', 'sma11-bab1-fungsi-invers',
      'sma10-bab2-barisan-deret', 'sma12-bab1-barisan-deret'
    ]
  },
  {
    id: 'geometri',
    name: 'Geometri dan Pengukuran',
    description: 'Bangun datar dan ruang, keliling, luas, volume, sudut, Pythagoras, kesebangunan, transformasi, vektor, trigonometri, dan lingkaran.',
    chapters: [
      'sd4-bab4-luas-volume', 'sd4-bab5-bangun-datar', 'sd5-bab4-keliling-bangun-datar', 'sd5-bab5-luas-daerah-bangun-datar',
      'sd5-bab6-sudut', 'sd5-bab7-membandingkan-bangun-datar', 'sd6-bab3-kubus-balok',
      'smp7-bab5-kesebangunan', 'smp8-bab2-teorema-pythagoras', 'smp9-bab2-bangun-ruang', 'smp9-bab3-transformasi-geometri',
      'sma10-bab3-vektor', 'sma10-bab4-trigonometri', 'sma11-bab2-lingkaran', 'sma12-bab6-transformasi'
    ]
  },
  {
    id: 'data-peluang',
    name: 'Data dan Peluang',
    description: 'Piktogram, diagram, statistika, peluang, kaidah pencacahan, dan statistika inferensi.',
    chapters: [
      'sd4-bab6-piktogram-diagram-batang', 'sd5-bab8-data', 'smp7-bab6-data-diagram', 'smp8-bab6-statistika',
      'sma10-bab7-statistika', 'sma11-bab3-statistika-bivariat', 'sma12-bab5-statistika-inferensi',
      'sd6-bab4-peluang', 'smp9-bab4-peluang-sampel', 'sma10-bab8-peluang', 'sma12-bab3-kaidah-pencacahan', 'sma12-bab4-peluang'
    ]
  },
  {
    id: 'kalkulus',
    name: 'Kalkulus',
    description: 'Limit, turunan, dan integral fungsi aljabar (Matematika Tingkat Lanjut).',
    chapters: ['sma11-bab4-limit', 'sma11-bab5-turunan', 'sma11-bab6-integral']
  }
];

export const IPA_TOPICS = [
  {
    id: 'kerja-ilmiah',
    name: 'Kerja Ilmiah dan Pengukuran',
    description: 'Metode ilmiah, variabel percobaan, keselamatan laboratorium, besaran, satuan, dan alat ukur.',
    chapters: ['ipa7-bab1-hakikat-ilmu-sains']
  },
  {
    id: 'fisika',
    name: 'Fisika: Energi, Gerak, Gelombang, dan Listrik',
    description: 'Suhu dan kalor, gerak dan gaya, usaha dan pesawat sederhana, getaran–gelombang–cahaya, tekanan, listrik dan magnet.',
    chapters: [
      'ipa7-bab3-suhu-kalor-pemuaian', 'ipa7-bab4-gerak-dan-gaya', 'ipa8-bab3-usaha-energi-pesawat-sederhana',
      'ipa8-bab4-getaran-gelombang-cahaya', 'ipa9-bab3-tekanan', 'ipa9-bab4-listrik-magnet-energi-alternatif'
    ]
  },
  {
    id: 'kimia',
    name: 'Kimia: Zat dan Perubahannya',
    description: 'Wujud dan massa jenis zat, unsur–senyawa–campuran, asam–basa, dan reaksi kimia.',
    chapters: ['ipa7-bab2-zat-dan-perubahannya', 'ipa8-bab5-unsur-senyawa-campuran', 'ipa9-bab5-reaksi-kimia']
  },
  {
    id: 'biologi',
    name: 'Biologi: Makhluk Hidup dan Lingkungannya',
    description: 'Klasifikasi, ekologi, sel, sistem organ, pertumbuhan, reproduksi, pewarisan sifat, bioteknologi, dan isu lingkungan.',
    chapters: [
      'ipa7-bab5-klasifikasi-makhluk-hidup', 'ipa7-bab6-ekologi-keanekaragaman-hayati', 'ipa8-bab1-sel',
      'ipa8-bab2-struktur-fungsi-tubuh', 'ipa9-bab1-pertumbuhan-perkembangan', 'ipa9-bab2-koordinasi-reproduksi-homeostasis',
      'ipa9-bab6-pewarisan-sifat-bioteknologi', 'ipa9-bab7-isu-lingkungan'
    ]
  },
  {
    id: 'bumi',
    name: 'Bumi dan Antariksa',
    description: 'Tata surya, rotasi–revolusi, gerhana, struktur bumi, gempa, gunung api, dan batuan.',
    chapters: ['ipa7-bab7-bumi-dan-tata-surya', 'ipa8-bab6-struktur-bumi']
  }
];

export const TOPIC_GROUPS = [
  { subject: 'matematika', name: 'Matematika', topics: MATH_TOPICS },
  { subject: 'ipa', name: 'IPA', topics: IPA_TOPICS }
];

const TOPIC_OF = new Map(
  [...MATH_TOPICS, ...IPA_TOPICS].flatMap((t) => t.chapters.map((id) => [id, t]))
);

export function topicOfChapter(chapterId) {
  return TOPIC_OF.get(chapterId) || null;
}

/** Bab lain dalam topik yang sama (urut kelas), tanpa bab itu sendiri. */
export function relatedChapterIds(chapterId, limit = 6) {
  const topic = topicOfChapter(chapterId);
  if (!topic) return [];
  return topic.chapters.filter((id) => id !== chapterId).slice(0, limit);
}
