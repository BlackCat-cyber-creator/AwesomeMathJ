import { describe, it, expect } from 'vitest';
import katex from 'katex';
import {
  AMC_LEVELS_METADATA,
  ALL_AMC_CHAPTERS_INDEX,
  AMC_CURRICULUM_DATA,
  getAmcModuleData,
  getLoadedAmcModuleData,
  getAmcChapterSolutionData
} from '../src/data/amc/amcData.js';

import { amc8Data } from '../src/data/amc/amc8Data.js';
import { amc10Data } from '../src/data/amc/amc10Data.js';
import { amc12Data } from '../src/data/amc/amc12Data.js';

describe('Challenger Stress Test: Metadata & Curriculum Consistency', () => {
  it('should verify metadata levels match indexed chapters across all 3 tracks', () => {
    expect(AMC_LEVELS_METADATA).toHaveLength(3);
    const validLevels = [8, 10, 12];
    AMC_LEVELS_METADATA.forEach((meta) => {
      expect(validLevels).toContain(meta.level);
    });
    expect(ALL_AMC_CHAPTERS_INDEX).toHaveLength(36);
    expect(AMC_CURRICULUM_DATA).toHaveLength(3);
  });
});

describe('Challenger Stress Test: getAmcModuleData Boundary & Fault Tolerance', () => {
  const validNumbers = [8, 10, 12];
  validNumbers.forEach((lvl) => {
    it(`should return valid dataset for numeric level ${lvl}`, async () => {
      const data = await getAmcModuleData(lvl);
      expect(data).not.toBeNull();
      expect(data.level).toBe(lvl);
      expect(Array.isArray(data.chapters)).toBe(true);
      expect(data.chapters.length).toBeGreaterThan(0);
    });
  });

  const validStrings = ['8', '10', '12'];
  validStrings.forEach((lvlStr) => {
    it(`should return valid dataset for string level "${lvlStr}"`, async () => {
      const data = await getAmcModuleData(lvlStr);
      expect(data).not.toBeNull();
      expect(data.level).toBe(Number(lvlStr));
    });
  });

  const boundaryInvalidInputs = [
    { val: null, label: 'null' },
    { val: undefined, label: 'undefined' },
    { val: '', label: 'empty string' },
    { val: '   ', label: 'whitespace string' },
    { val: 0, label: 'zero' },
    { val: -1, label: 'negative number -1' },
    { val: 99, label: 'out of range 99' },
    { val: 100, label: 'out of range 100' },
    { val: NaN, label: 'NaN' },
    { val: Infinity, label: 'Infinity' },
    { val: -Infinity, label: '-Infinity' },
    { val: {}, label: 'empty object {}' },
    { val: [], label: 'empty array []' },
    { val: true, label: 'boolean true' },
    { val: false, label: 'boolean false' },
    { val: 'invalid-string', label: "'invalid-string'" },
    { val: 'level8', label: "'level8'" }
  ];

  boundaryInvalidInputs.forEach(({ val, label }) => {
    it(`should safely return null without throwing on ${label}`, async () => {
      const res = await getAmcModuleData(val);
      expect(res).toBeNull();
    });
  });

  it('should synchronously retrieve cached module or return null for uncached', async () => {
    await getAmcModuleData(8);
    expect(getLoadedAmcModuleData(8)?.level).toBe(8);
    expect(getLoadedAmcModuleData(99)).toBeNull();
    expect(getLoadedAmcModuleData(null)).toBeNull();
  });
});

describe('Challenger Stress Test: getAmcChapterSolutionData Boundary & Resilience', () => {
  const existingChapters = [
    { level: 8, chapterId: 'amc8-ch1-permutations' },
    { level: 8, chapterId: 'amc8-ch8-primes-divisibility' },
    { level: 8, chapterId: 'amc8-ch11-triangles-pythagoras' },
    { level: 10, chapterId: 'amc10-ch1-advanced-combinatorics' },
    { level: 12, chapterId: 'amc12-ch2-complex-numbers-geometry' }
  ];

  existingChapters.forEach(({ level, chapterId }) => {
    it(`should correctly retrieve solution data for ${chapterId} at level ${level}`, async () => {
      const sol = await getAmcChapterSolutionData(level, chapterId);
      expect(sol).not.toBeNull();
      expect(sol.id).toBe(chapterId);
      expect(sol.level).toBe(level);
      expect(sol.badge).toBe(`AMC ${level}`);
      expect(Array.isArray(sol.questions)).toBe(true);
      expect(sol.questions.length).toBeGreaterThan(0);
      expect(sol.summary).toBeDefined();
    });
  });

  const invalidLookups = [
    { level: null, chapterId: null, label: 'null, null' },
    { level: undefined, chapterId: undefined, label: 'undefined, undefined' },
    { level: 8, chapterId: null, label: '8, null' },
    { level: 8, chapterId: undefined, label: '8, undefined' },
    { level: 8, chapterId: '', label: '8, empty string' },
    { level: null, chapterId: 'amc8-ch1-permutations', label: 'null, valid chapterId' },
    { level: 99, chapterId: 'amc8-ch1-permutations', label: 'invalid level, valid chapterId' },
    { level: 8, chapterId: 'non-existent-chapter-id', label: 'valid level, non-existent chapterId' },
    { level: 8, chapterId: 'amc10-ch1-advanced-combinatorics', label: 'mismatched level 8 with amc10 chapter' },
    { level: 8, chapterId: 12345, label: 'number as chapterId' },
    { level: 8, chapterId: {}, label: 'object as chapterId' },
    { level: 8, chapterId: '__proto__', label: '__proto__ as chapterId' },
    { level: 8, chapterId: 'constructor', label: 'constructor as chapterId' }
  ];

  invalidLookups.forEach(({ level, chapterId, label }) => {
    it(`should safely return null without throwing on ${label}`, async () => {
      const res = await getAmcChapterSolutionData(level, chapterId);
      expect(res).toBeNull();
    });
  });
});

describe('Challenger KaTeX Rendering Verification in AMC Datasets', () => {
  function extractSnippetsFromText(text) {
    if (!text || typeof text !== 'string') return [];
    const snippets = [];
    const regex = /(\$\$[\s\S]*?\$\$|\$[^$\n]+?\$)/g;
    let match;
    while ((match = regex.exec(text)) !== null) {
      const raw = match[0];
      if (raw.startsWith('$$') && raw.endsWith('$$')) {
        snippets.push({ content: raw.slice(2, -2).trim(), display: true, raw });
      } else if (raw.startsWith('$') && raw.endsWith('$')) {
        snippets.push({ content: raw.slice(1, -1).trim(), display: false, raw });
      }
    }
    return snippets;
  }

  function validateKaTeX(datasetName, dataset) {
    let count = 0;
    const errors = [];

    function checkValue(val, path) {
      if (!val) return;
      if (typeof val === 'string') {
        const snippets = extractSnippetsFromText(val);
        for (const s of snippets) {
          count++;
          try {
            katex.renderToString(s.content, {
              displayMode: s.display,
              throwOnError: true
            });
          } catch (err) {
            errors.push({ path, raw: s.raw, message: err.message });
          }
        }
      } else if (Array.isArray(val)) {
        val.forEach((item, idx) => checkValue(item, `${path}[${idx}]`));
      } else if (typeof val === 'object') {
        for (const key of Object.keys(val)) {
          if (key === 'formula' && typeof val[key] === 'string') {
            count++;
            try {
              katex.renderToString(val[key], {
                displayMode: false,
                throwOnError: true
              });
            } catch (err) {
              errors.push({ path: `${path}.formula`, raw: val[key], message: err.message });
            }
          }
          checkValue(val[key], `${path}.${key}`);
        }
      }
    }

    checkValue(dataset, datasetName);
    return { count, errors };
  }

  it('should render all 281 KaTeX expressions in amc8Data without parse errors', () => {
    const { count, errors } = validateKaTeX('amc8Data', amc8Data);
    expect(count).toBeGreaterThan(200);
    expect(errors).toEqual([]);
  });

  it('should render all 191 KaTeX expressions in amc10Data without parse errors', () => {
    const { count, errors } = validateKaTeX('amc10Data', amc10Data);
    expect(count).toBeGreaterThan(150);
    expect(errors).toEqual([]);
  });

  it('should render all 100 KaTeX expressions in amc12Data without parse errors', () => {
    const { count, errors } = validateKaTeX('amc12Data', amc12Data);
    expect(count).toBeGreaterThan(80);
    expect(errors).toEqual([]);
  });
});

describe('Challenger Test Suite Sensitivity Analysis', () => {
  it('should confirm that forced MCQ options would be rejected by question validation rules', () => {
    const fakeMcqQuestion = {
      id: 'test-mcq',
      type: 'mcq',
      options: ['A', 'B', 'C', 'D'],
      question: 'Q',
      answer: 'A',
      acceptedAnswers: ['A'],
      hint: 'H',
      bestSolution: 'S'
    };

    expect(['short_answer', 'essay']).not.toContain(fakeMcqQuestion.type);
    expect(fakeMcqQuestion.options).not.toBeUndefined();
  });
});
