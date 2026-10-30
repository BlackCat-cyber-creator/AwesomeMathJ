import { ALL_CHAPTERS_INDEX } from '../data/chapterIndex';
import { ALL_AMC_CHAPTERS_INDEX } from '../data/amc/amcMetadata';
import { chapterPath, amcChapterPath } from './seoRoutes';

/**
 * Pencarian materi di semua kelas (Kelas 4–12) dan AMC, tanpa memuat bank soal.
 * Setiap kata kunci harus muncul; kecocokan di judul bab diberi skor lebih tinggi.
 */

export function normalizeSearchText(text) {
  return String(text || '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/\\[a-z]+/g, ' ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function conceptLabels(concepts = []) {
  return concepts.map((c) => String(c).split(':')[0]);
}

function buildEntries() {
  const school = ALL_CHAPTERS_INDEX.map((ch) => ({
    id: ch.id,
    title: ch.title,
    label: `Kelas ${ch.grade} ${ch.level}`,
    path: chapterPath(ch.grade, ch.id),
    titleText: normalizeSearchText(ch.title),
    labelText: normalizeSearchText(`kelas ${ch.grade} ${ch.level} ${ch.phase || ''}`),
    bodyText: normalizeSearchText((ch.coreConcepts || []).join(' ')),
    conceptText: normalizeSearchText(conceptLabels(ch.coreConcepts).join(' '))
  }));
  const amc = ALL_AMC_CHAPTERS_INDEX.map((ch) => ({
    id: ch.id,
    title: ch.title,
    label: `AMC ${ch.level}`,
    path: amcChapterPath(ch.level, ch.id),
    titleText: normalizeSearchText(ch.title),
    labelText: normalizeSearchText(`amc ${ch.level} olimpiade ${ch.domain || ''}`),
    bodyText: normalizeSearchText(`${ch.bookChapter || ''} ${(ch.concepts || []).join(' ')}`),
    conceptText: normalizeSearchText((ch.concepts || []).join(' '))
  }));
  return [...school, ...amc];
}

let entries = null;

export function searchChapters(query, limit = 8) {
  const terms = normalizeSearchText(query).split(' ').filter((t) => t.length > 0);
  if (terms.length === 0) return [];
  entries ||= buildEntries();

  const results = [];
  for (const e of entries) {
    let score = 0;
    let ok = true;
    for (const t of terms) {
      const w = t.length < 3 ? new RegExp(`\\b${t}\\b`) : null;
      const has = (text) => (w ? w.test(text) : text.includes(t));
      if (has(e.titleText)) score += 10;
      else if (has(e.labelText)) score += 6;
      else if (has(e.conceptText)) score += 4;
      else if (has(e.bodyText)) score += 1;
      else { ok = false; break; }
    }
    if (ok) results.push({ id: e.id, title: e.title, label: e.label, path: e.path, score });
  }
  return results.sort((a, b) => b.score - a.score || a.path.localeCompare(b.path, undefined, { numeric: true })).slice(0, limit);
}
