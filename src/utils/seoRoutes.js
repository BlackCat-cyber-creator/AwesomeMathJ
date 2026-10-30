/**
 * seoRoutes:
 * Alamat publik yang rapi dan mudah diindeks mesin pencari, dipakai bersama oleh
 * aplikasi (navigasi) dan skrip prerender (scripts/prerender.mjs).
 *
 *   /matematika/kelas-4                     → daftar bab Kelas 4
 *   /matematika/kelas-4/bab2-pecahan        → bab "sd4-bab2-pecahan"
 *   /olimpiade/amc-8                        → daftar bab AMC 8
 *   /ipa/kelas-7                            → daftar bab IPA Kelas 7
 *   /ipa/kelas-7/bab2-zat-dan-perubahannya  → bab "ipa7-bab2-zat-dan-perubahannya"
 *   /olimpiade/amc-8/ch1-permutations       → bab "amc8-ch1-permutations"
 */

export const SITE_URL = 'https://awesomemathj.vercel.app';
export const SITE_NAME = 'AwesomeMathJ';

const GRADE_PREFIX = /^(sd|smp|sma|ipa)(\d+)-/;
const AMC_PREFIX = /^amc(\d+)-/;

export function chapterSlug(chapterId) {
  return String(chapterId || '').replace(GRADE_PREFIX, '').replace(AMC_PREFIX, '');
}

export function levelOfGrade(grade) {
  const g = Number(grade);
  return g <= 6 ? 'sd' : g <= 9 ? 'smp' : 'sma';
}

/** Mata pelajaran kurikulum beserta kelas yang tersedia (alamat: /<id>/kelas-N). */
export const SUBJECT_GRADES = {
  matematika: [4, 5, 6, 7, 8, 9, 10, 11, 12],
  ipa: [7, 8, 9]
};

/** Mata pelajaran dari ID bab: "ipa7-..." → ipa, selain itu matematika. */
export function subjectOfChapter(chapterId) {
  return /^ipa\d+-/.test(String(chapterId || '')) ? 'ipa' : 'matematika';
}

/** Kebalikan dari chapterSlug untuk bab kurikulum. */
export function chapterIdFromSlug(grade, slug, subject = 'matematika') {
  if (!slug) return null;
  const prefix = subject === 'ipa' ? 'ipa' : levelOfGrade(grade);
  return `${prefix}${Number(grade)}-${slug}`;
}

export function gradePath(grade, subject = 'matematika') {
  return `/${subject === 'ipa' ? 'ipa' : 'matematika'}/kelas-${Number(grade)}`;
}

/** Mata pelajaran ditentukan dari ID bab, jadi pemanggil lama tidak perlu berubah. */
export function chapterPath(grade, chapterId, subject) {
  const subj = subject || subjectOfChapter(chapterId);
  return chapterId ? `${gradePath(grade, subj)}/${chapterSlug(chapterId)}` : gradePath(grade, subj);
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
  const school = String(pathname || '').match(/^\/(matematika|ipa)\/kelas-(\d+)(?:\/([^/]+))?\/?$/);
  if (school) {
    const subject = school[1];
    const grade = Number(school[2]);
    if (!SUBJECT_GRADES[subject].includes(grade)) return null;
    return { mode: 'school', subject, grade, level: 8, chapter: chapterIdFromSlug(grade, school[3], subject) };
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
export function handbookPath({ mode, subject, grade, level, chapter }) {
  if (mode === 'amc') return amcChapterPath(level || 8, chapter);
  const subj = subject || subjectOfChapter(chapter);
  return chapterPath(grade || SUBJECT_GRADES[subj][0], chapter, subj);
}
