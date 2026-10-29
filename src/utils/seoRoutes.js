/**
 * seoRoutes:
 * Alamat publik yang rapi dan mudah diindeks mesin pencari, dipakai bersama oleh
 * aplikasi (navigasi) dan skrip prerender (scripts/prerender.mjs).
 *
 *   /matematika/kelas-4                     → daftar bab Kelas 4
 *   /matematika/kelas-4/bab2-pecahan        → bab "sd4-bab2-pecahan"
 *   /olimpiade/amc-8                        → daftar bab AMC 8
 *   /olimpiade/amc-8/ch1-permutations       → bab "amc8-ch1-permutations"
 */

export const SITE_URL = 'https://awesomemathj.vercel.app';
export const SITE_NAME = 'AwesomeMathJ';

const GRADE_PREFIX = /^(sd|smp|sma)(\d+)-/;
const AMC_PREFIX = /^amc(\d+)-/;

export function chapterSlug(chapterId) {
  return String(chapterId || '').replace(GRADE_PREFIX, '').replace(AMC_PREFIX, '');
}

export function levelOfGrade(grade) {
  const g = Number(grade);
  return g <= 6 ? 'sd' : g <= 9 ? 'smp' : 'sma';
}

/** Kebalikan dari chapterSlug untuk bab kurikulum. */
export function chapterIdFromSlug(grade, slug) {
  return slug ? `${levelOfGrade(grade)}${Number(grade)}-${slug}` : null;
}

export function gradePath(grade) {
  return `/matematika/kelas-${Number(grade)}`;
}

export function chapterPath(grade, chapterId) {
  return chapterId ? `${gradePath(grade)}/${chapterSlug(chapterId)}` : gradePath(grade);
}

export function amcLevelPath(level) {
  return `/olimpiade/amc-${Number(level)}`;
}

export function amcChapterPath(level, chapterId) {
  return chapterId ? `${amcLevelPath(level)}/${chapterSlug(chapterId)}` : amcLevelPath(level);
}

/**
 * Baca alamat rapi menjadi state buku saku.
 * Mengembalikan null bila pathname bukan alamat buku saku.
 */
export function parseHandbookPath(pathname) {
  const school = String(pathname || '').match(/^\/matematika\/kelas-(\d+)(?:\/([^/]+))?\/?$/);
  if (school) {
    const grade = Number(school[1]);
    if (grade < 4 || grade > 12) return null;
    return { mode: 'school', grade, level: 8, chapter: chapterIdFromSlug(grade, school[2]) };
  }
  const amc = String(pathname || '').match(/^\/olimpiade\/amc-(\d+)(?:\/([^/]+))?\/?$/);
  if (amc) {
    const level = Number(amc[1]);
    if (![8, 10, 12].includes(level)) return null;
    return { mode: 'amc', grade: 4, level, chapter: amc[2] ? `amc${level}-${amc[2]}` : null };
  }
  return null;
}

/** Alamat rapi dari state buku saku. */
export function handbookPath({ mode, grade, level, chapter }) {
  return mode === 'amc' ? amcChapterPath(level || 8, chapter) : chapterPath(grade || 4, chapter);
}
