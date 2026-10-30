import { ALL_CHAPTERS_INDEX } from '../data/chapterIndex.js';
import { ALL_IPA_CHAPTERS_INDEX } from '../data/ipa/chapterIndex.js';
import { topicOfChapter } from '../data/topics.js';
import { chapterPath } from './seoRoutes.js';

/**
 * "Materi terkait" (seperti "Baca Juga"): bab lain dalam topik yang sama, diutamakan
 * yang judulnya berkata kunci sama (pecahan, peluang, ...) lalu yang kelasnya terdekat.
 */
const INDEX = new Map([...ALL_CHAPTERS_INDEX, ...ALL_IPA_CHAPTERS_INDEX].map((c) => [c.id, c]));
const STOP = new Set(['bab', 'dan', 'serta', 'sampai', 'dengan', 'pada', 'satu', 'dua', 'tiga', 'operasinya', 'aplikasinya']);

const words = (title) => new Set(
  String(title || '').toLowerCase().replace(/^bab \d+:\s*/, '').split(/[^a-z]+/).filter((w) => w.length > 3 && !STOP.has(w))
);

export function chapterEntry(id) {
  const c = INDEX.get(id);
  if (!c) return null;
  const subjectLabel = c.subject === 'ipa' ? 'IPA' : 'Matematika';
  return { id, title: c.title, grade: c.grade, label: `${subjectLabel} Kelas ${c.grade}`, path: chapterPath(c.grade, id) };
}

export function relatedChapters(chapterId, limit = 4) {
  const topic = topicOfChapter(chapterId);
  const self = INDEX.get(chapterId);
  if (!topic || !self) return [];
  const own = words(self.title);
  return topic.chapters
    .filter((id) => id !== chapterId && INDEX.has(id))
    .map((id) => {
      const c = INDEX.get(id);
      const shared = [...words(c.title)].filter((w) => own.has(w)).length;
      return { id, score: shared * 10 - Math.abs(c.grade - self.grade) };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => chapterEntry(r.id));
}

/** Bab dalam satu topik, urut kelas lalu nomor bab. */
export function topicChapters(topic) {
  return topic.chapters
    .map((id) => ({ ...chapterEntry(id), chapterIndex: INDEX.get(id)?.chapterIndex ?? 0 }))
    .filter((c) => c.id)
    .sort((a, b) => a.grade - b.grade || a.chapterIndex - b.chapterIndex);
}
