import { describe, it, expect } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { ipaGrade7Data } from '../src/data/ipa/grade7.js';
import { ipaGrade8Data } from '../src/data/ipa/grade8.js';
import { ipaGrade9Data } from '../src/data/ipa/grade9.js';
import { ALL_IPA_CHAPTERS_INDEX, IPA_GRADE_METADATA } from '../src/data/ipa/chapterIndex.js';
import { getVisualConfig } from '../src/components/visuals/registry/index.js';
import { renderVisualEngine } from '../src/components/visuals/engines/index.jsx';
import { visibleTextFromMarkup, leaksAnswer, leaksAnswerWords } from '../src/utils/contentAudit.js';
import { auditQuestion } from './support/visualAuditRunner.jsx';

/**
 * Penjaga kualitas IPA: bentuk bab dan soal, kunci jawaban konsisten dengan pembahasan,
 * gambar sesuai soal, dan indeks bab sinkron.
 */
const GRADES = [ipaGrade7Data, ipaGrade8Data, ipaGrade9Data];
const CHAPTERS = GRADES.flatMap((g) => g.chapters.map((ch) => ({ grade: g.grade, ch })));
const QUESTIONS = CHAPTERS.flatMap(({ grade, ch }) => ch.questions.map((q) => ({ grade, ch, q })));
// Jawaban berupa nama yang memang dibaca dari label gambar (mis. jaring makanan)
const WORD_LEAK_OK = new Set(['food-web', 'pendulum', 'wave']);

describe('IPA: bentuk bab', () => {
  it('ID bab dan soal unik serta berawalan ipa<kelas>', () => {
    const ids = [...CHAPTERS.map(({ ch }) => ch.id), ...QUESTIONS.map(({ q }) => q.id)];
    expect(new Set(ids).size).toBe(ids.length);
    for (const { grade, ch } of CHAPTERS) expect(ch.id.startsWith(`ipa${grade}-bab`)).toBe(true);
  });

  it('setiap bab punya 6 bagian materi yang lengkap', () => {
    const problems = [];
    for (const { ch } of CHAPTERS) {
      const s = ch.summary || {};
      if (!s.overview || s.overview.length < 120) problems.push(`${ch.id}: overview`);
      if ((s.coreConcepts || []).length < 4) problems.push(`${ch.id}: coreConcepts < 4`);
      if ((s.coreConcepts || []).some((c) => !/^[^:]{3,70}: /.test(c))) problems.push(`${ch.id}: subbab harus "Judul: isi"`);
      if ((s.keyFormulas || []).length < 2) problems.push(`${ch.id}: keyFormulas < 2`);
      if ((s.workedExamples || []).length < 3) problems.push(`${ch.id}: workedExamples < 3`);
      if ((s.misconceptions || []).length < 3) problems.push(`${ch.id}: misconceptions < 3`);
      if (!s.tutorTip) problems.push(`${ch.id}: tutorTip`);
    }
    expect(problems).toEqual([]);
  });

  it('15 soal per bab, urut 5 Dasar → 5 Sedang → 5 Tantangan', () => {
    const bad = CHAPTERS
      .filter(({ ch }) => ch.questions.map((q) => q.difficulty).join() !== [...Array(5).fill('Dasar'), ...Array(5).fill('Sedang'), ...Array(5).fill('Tantangan')].join())
      .map(({ ch }) => ch.id);
    expect(bad).toEqual([]);
  });
});

describe('IPA: soal dan kunci jawaban', () => {
  it('4 pilihan A–D yang berbeda, kunci valid, petunjuk dan pembahasan ada', () => {
    const bad = [];
    for (const { q } of QUESTIONS) {
      const keys = q.options.map((o) => o.key).join('');
      const texts = new Set(q.options.map((o) => o.text.trim()));
      if (keys !== 'ABCD') bad.push(`${q.id}: kunci pilihan ${keys}`);
      if (texts.size !== 4) bad.push(`${q.id}: pilihan kembar`);
      if (!'ABCD'.includes(q.correctAnswer)) bad.push(`${q.id}: correctAnswer`);
      if (!q.hint || !q.bestSolution) bad.push(`${q.id}: hint/pembahasan`);
    }
    expect(bad).toEqual([]);
  });

  it('huruf "Jawaban: **X**" di pembahasan sama dengan kunci', () => {
    const bad = QUESTIONS
      .filter(({ q }) => {
        const m = q.bestSolution.match(/Jawaban: \*\*([A-D])\*\*/);
        return !m || m[1] !== q.correctAnswer;
      })
      .map(({ q }) => q.id);
    expect(bad).toEqual([]);
  });

  it('sebaran kunci jawaban tidak menumpuk di satu huruf (maks. 6 dari 15)', () => {
    const bad = [];
    for (const { ch } of CHAPTERS) {
      const count = {};
      for (const q of ch.questions) count[q.correctAnswer] = (count[q.correctAnswer] || 0) + 1;
      const max = Math.max(...Object.values(count));
      if (max > 6) bad.push(`${ch.id}: ${JSON.stringify(count)}`);
    }
    expect(bad).toEqual([]);
  });

  it('tidak ada soal kembar dalam satu kelas dan tidak merujuk soal lain', () => {
    const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
    const bad = [];
    for (const g of GRADES) {
      const seen = new Map();
      for (const ch of g.chapters) {
        for (const q of ch.questions) {
          const k = norm(q.question);
          if (seen.has(k)) bad.push(`${seen.get(k)} = ${q.id}`);
          seen.set(k, q.id);
          if (/soal (sebelumnya|nomor)/i.test(q.question)) bad.push(`${q.id}: merujuk soal lain`);
        }
      }
    }
    expect(bad).toEqual([]);
  });
});

describe('IPA: gambar sesuai soal', () => {
  const withVisual = QUESTIONS.filter(({ q }) => getVisualConfig(q));

  it('setiap gambar berhasil dirender dan tidak menampilkan angka di luar soal', () => {
    const bad = [];
    for (const { grade, ch, q } of withVisual) {
      const row = auditQuestion(grade, ch, q);
      if (row.renderError) bad.push(`${q.id}: ${row.renderError}`);
      if (row.visualOnlyNumbers.length) bad.push(`${q.id}: angka ${row.visualOnlyNumbers.join(', ')}`);
    }
    expect(bad).toEqual([]);
  });

  it('gambar tidak membocorkan jawaban', () => {
    const bad = [];
    for (const { q } of withVisual) {
      const config = getVisualConfig(q);
      const texts = visibleTextFromMarkup(renderToStaticMarkup(renderVisualEngine(config, q)));
      const correct = q.options.find((o) => o.key === q.correctAnswer).text;
      if (leaksAnswer(q.question, correct, texts, [])) bad.push(`${q.id}: angka`);
      if (!WORD_LEAK_OK.has(config.type) && leaksAnswerWords(q.question, correct, texts).length) bad.push(`${q.id}: kata`);
    }
    expect(bad).toEqual([]);
  });
});

describe('IPA: indeks bab', () => {
  it('sama dengan data — jalankan `node pipeline/build_chapter_index.mjs` bila gagal', () => {
    const fromData = CHAPTERS.map(({ ch }) => ({ id: ch.id, title: ch.title, coreConcepts: ch.summary.coreConcepts, questionCount: ch.questions.length }));
    const fromIndex = ALL_IPA_CHAPTERS_INDEX.map(({ id, title, coreConcepts, questionCount }) => ({ id, title, coreConcepts, questionCount }));
    expect(fromIndex).toEqual(fromData);
    expect(IPA_GRADE_METADATA.map((g) => g.chaptersCount)).toEqual(GRADES.map((g) => g.chapters.length));
  });
});
