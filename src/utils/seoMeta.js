/**
 * seoMeta:
 * Judul & deskripsi halaman untuk mesin pencari dan pratinjau link (WhatsApp, dsb).
 * Dipakai oleh aplikasi (useDocumentMeta) dan prerender (scripts/prerender.mjs)
 * agar teks yang dibaca Google sama dengan yang tampil di browser.
 */
import { SITE_NAME, gradePath, chapterPath, amcLevelPath, amcChapterPath } from './seoRoutes.js';
import { AUTHOR } from '../data/siteInfo.js';

/** Teks polos dari string bercampur LaTeX/markdown. */
export function plainText(text) {
  return String(text || '')
    .replace(/\$\$?([^$]*)\$\$?/g, (_, m) => m)
    .replace(/\\(text|mathrm|textbf)\{([^}]*)\}/g, '$2')
    .replace(/\\frac\{([^}]*)\}\{([^}]*)\}/g, '$1/$2')
    .replace(/\\(times|cdot)/g, '×')
    .replace(/\\[a-zA-Z]+/g, ' ')
    .replace(/[{}*_#]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function truncate(text, max = 155) {
  const t = plainText(text);
  if (t.length <= max) return t;
  const cut = t.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(' ') > 80 ? cut.lastIndexOf(' ') : cut.length)}…`;
}

export function levelLabel(grade) {
  const g = Number(grade);
  return g <= 6 ? 'SD' : g <= 9 ? 'SMP' : 'SMA';
}

export const HOME_META = {
  title: `${SITE_NAME} oleh ${AUTHOR.name} • Materi & Latihan Matematika Kelas 4–12 dan Olimpiade AMC`,
  description: `Belajar matematika gratis tanpa daftar bersama ${AUTHOR.name}: ringkasan materi, rumus, contoh soal, dan latihan Kurikulum Merdeka Kelas 4 SD sampai 12 SMA, plus persiapan olimpiade AMC 8, 10, dan 12.`,
  path: '/'
};

export const ABOUT_META = {
  title: `Tentang ${SITE_NAME} — ${AUTHOR.name}, ${AUTHOR.jobTitle}`,
  description: `${SITE_NAME} dibuat dan dikelola oleh ${AUTHOR.name}, guru matematika Kelas 4 SD sampai 12 SMA dan pembina olimpiade AMC. Materi gratis, sesuai Capaian Pembelajaran Kurikulum Merdeka.`,
  path: '/tentang'
};

export function gradeMeta(grade) {
  const lvl = levelLabel(grade);
  return {
    title: `Matematika Kelas ${grade} ${lvl} Kurikulum Merdeka — Materi & Latihan | ${SITE_NAME}`,
    description: `Daftar bab Matematika Kelas ${grade} ${lvl} Kurikulum Merdeka lengkap dengan ringkasan materi, rumus penting, contoh soal, dan latihan soal pilihan ganda beserta pembahasan.`,
    path: gradePath(grade)
  };
}

export function chapterMeta(grade, chapter) {
  const lvl = levelLabel(grade);
  const overview = chapter?.summary?.overview || '';
  return {
    title: `${chapter.title} — Matematika Kelas ${grade} ${lvl} | ${SITE_NAME}`,
    description: overview
      ? truncate(overview)
      : `Materi ${plainText(chapter.title)} Matematika Kelas ${grade} ${lvl}: ringkasan, rumus, contoh soal, dan latihan.`,
    path: chapterPath(grade, chapter.id)
  };
}

export function amcLevelMeta(level) {
  return {
    title: `Persiapan Olimpiade AMC ${level} — Materi & Soal | ${SITE_NAME}`,
    description: `Modul persiapan olimpiade matematika AMC ${level}: konsep, strategi, soal isian kompetisi, petunjuk, dan pembahasan langkah demi langkah dalam Bahasa Indonesia.`,
    path: amcLevelPath(level)
  };
}

export function amcChapterMeta(level, chapter) {
  const overview = chapter?.summary?.overview || '';
  return {
    title: `${chapter.title} — Olimpiade AMC ${level} | ${SITE_NAME}`,
    description: overview
      ? truncate(overview)
      : `Materi ${plainText(chapter.title)} untuk persiapan AMC ${level}: konsep, soal kompetisi, dan pembahasan.`,
    path: amcChapterPath(level, chapter.id)
  };
}
