import { describe, it, expect } from 'vitest';
import { ALL_CHAPTERS_INDEX } from '../src/data/chapterIndex.js';
import { ALL_IPA_CHAPTERS_INDEX } from '../src/data/ipa/chapterIndex.js';
import { MATH_TOPICS, IPA_TOPICS, topicOfChapter } from '../src/data/topics.js';
import { relatedChapters, topicChapters } from '../src/utils/relatedChapters.js';

describe('Daftar isi per topik', () => {
  it('setiap bab Matematika dan IPA masuk tepat satu topik', () => {
    const listed = [...MATH_TOPICS, ...IPA_TOPICS].flatMap((t) => t.chapters);
    expect(new Set(listed).size).toBe(listed.length);
    const all = [...ALL_CHAPTERS_INDEX, ...ALL_IPA_CHAPTERS_INDEX].map((c) => c.id);
    expect(all.filter((id) => !topicOfChapter(id))).toEqual([]);
    expect(listed.filter((id) => !all.includes(id))).toEqual([]);
  });

  it('materi terkait mengutamakan kata kunci yang sama', () => {
    const rel = relatedChapters('sd4-bab2-pecahan').map((c) => c.id);
    expect(rel.slice(0, 2)).toEqual(expect.arrayContaining(['sd5-bab3-bilangan-pecahan', 'sd6-bab1-pecahan-desimal']));
    expect(relatedChapters('ipa8-bab4-getaran-gelombang-cahaya').every((c) => c.path.startsWith('/ipa/'))).toBe(true);
  });

  it('bab dalam topik diurutkan per kelas', () => {
    const grades = topicChapters(MATH_TOPICS[0]).map((c) => c.grade);
    expect(grades).toEqual([...grades].sort((a, b) => a - b));
  });
});
