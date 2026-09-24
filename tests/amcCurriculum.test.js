import { describe, it, expect } from 'vitest';
import {
  AMC_LEVELS_METADATA,
  ALL_AMC_CHAPTERS_INDEX,
  AMC_CURRICULUM_DATA,
  getAmcModuleData,
  getLoadedAmcModuleData,
  getAmcChapterSolutionData
} from '../src/data/amc/amcData.js';

describe('AMC Curriculum Metadata and Index Integrity', () => {
  it('should export metadata for all 3 competition tracks (AMC 8, AMC 10, AMC 12)', () => {
    expect(AMC_LEVELS_METADATA).toHaveLength(3);
    const levels = AMC_LEVELS_METADATA.map((l) => l.level);
    expect(levels).toEqual([8, 10, 12]);

    AMC_LEVELS_METADATA.forEach((meta) => {
      expect(meta.title).toBeDefined();
      expect(meta.subtitle).toBeDefined();
      expect(meta.chaptersCount).toBe(12);
      expect(meta.badge).toContain('AMC');
    });
  });

  it('should have exactly 36 chapters indexed in ALL_AMC_CHAPTERS_INDEX', () => {
    expect(ALL_AMC_CHAPTERS_INDEX).toHaveLength(36);

    const amc8Chapters = ALL_AMC_CHAPTERS_INDEX.filter((c) => c.level === 8);
    const amc10Chapters = ALL_AMC_CHAPTERS_INDEX.filter((c) => c.level === 10);
    const amc12Chapters = ALL_AMC_CHAPTERS_INDEX.filter((c) => c.level === 12);

    expect(amc8Chapters).toHaveLength(12);
    expect(amc10Chapters).toHaveLength(12);
    expect(amc12Chapters).toHaveLength(12);

    ALL_AMC_CHAPTERS_INDEX.forEach((ch) => {
      expect(ch.id).toBeDefined();
      expect(ch.id).toMatch(/^amc(8|10|12)-ch\d+/);
      expect(ch.title).toBeDefined();
      expect(ch.domain).toBeDefined();
      expect([8, 10, 12]).toContain(ch.level);
    });
  });

  it('should maintain lightweight synchronous AMC_CURRICULUM_DATA with 12 chapters per level', () => {
    expect(AMC_CURRICULUM_DATA).toHaveLength(3);
    AMC_CURRICULUM_DATA.forEach((track) => {
      expect(track.chapters).toHaveLength(12);
      expect(track.chapters[0].title).toBeDefined();
      expect(track.chapters[0].id).toBeDefined();
    });
  });
});

describe('AMC Dynamic Module Loader (getAmcModuleData)', () => {
  it('should dynamically load AMC 8 dataset without throwing', async () => {
    const data = await getAmcModuleData(8);
    expect(data).toBeDefined();
    expect(data.level).toBe(8);
    expect(data.title).toContain('AMC 8');
    expect(Array.isArray(data.chapters)).toBe(true);
    expect(data.chapters.length).toBeGreaterThan(0);
  });

  it('should dynamically load AMC 10 dataset without throwing', async () => {
    const data = await getAmcModuleData(10);
    expect(data).toBeDefined();
    expect(data.level).toBe(10);
    expect(data.title).toContain('AMC 10');
    expect(Array.isArray(data.chapters)).toBe(true);
    expect(data.chapters.length).toBeGreaterThan(0);
  });

  it('should dynamically load AMC 12 dataset without throwing', async () => {
    const data = await getAmcModuleData(12);
    expect(data).toBeDefined();
    expect(data.level).toBe(12);
    expect(data.title).toContain('AMC 12');
    expect(Array.isArray(data.chapters)).toBe(true);
    expect(data.chapters.length).toBeGreaterThan(0);
  });

  it('should support string-based level inputs like "8", "10", "12"', async () => {
    const data8 = await getAmcModuleData('8');
    const data10 = await getAmcModuleData('10');
    const data12 = await getAmcModuleData('12');

    expect(data8?.level).toBe(8);
    expect(data10?.level).toBe(10);
    expect(data12?.level).toBe(12);
  });

  it('should return null for invalid or non-existent competition levels', async () => {
    const invalidLevel = await getAmcModuleData(99);
    expect(invalidLevel).toBeNull();

    const emptyLevel = await getAmcModuleData('invalid-level');
    expect(emptyLevel).toBeNull();
  });

  it('should retrieve cached dataset synchronously via getLoadedAmcModuleData', async () => {
    // Ensure module 8 is loaded
    await getAmcModuleData(8);
    const cached = getLoadedAmcModuleData(8);
    expect(cached).toBeDefined();
    expect(cached?.level).toBe(8);

    // Level 99 is never cached
    expect(getLoadedAmcModuleData(99)).toBeNull();
  });
});

describe('AMC Chapter Solution Loader (getAmcChapterSolutionData)', () => {
  it('should retrieve AMC 8 chapter solution data by level and chapterId', async () => {
    const solution = await getAmcChapterSolutionData(8, 'amc8-ch1-permutations');
    expect(solution).toBeDefined();
    expect(solution?.id).toBe('amc8-ch1-permutations');
    expect(solution?.level).toBe(8);
    expect(solution?.badge).toBe('AMC 8');
    expect(solution?.title).toContain('Permutasi');
    expect(Array.isArray(solution?.questions)).toBe(true);
    expect(solution?.questions.length).toBeGreaterThan(0);
  });

  it('should return null for non-existent chapterId or invalid level', async () => {
    const nonExistentChapter = await getAmcChapterSolutionData(8, 'non-existent-amc-chapter');
    expect(nonExistentChapter).toBeNull();

    const invalidLevel = await getAmcChapterSolutionData(99, 'amc8-ch1-permutations');
    expect(invalidLevel).toBeNull();

    const missingArgs = await getAmcChapterSolutionData(null, null);
    expect(missingArgs).toBeNull();
  });
});

describe('AMC Question Format & Non-MCQ Integrity', () => {
  it('should ensure all loaded AMC questions follow short-answer/essay format without forced ABCD options', async () => {
    const levels = [8, 10, 12];

    for (const lvl of levels) {
      const moduleData = await getAmcModuleData(lvl);
      expect(moduleData).toBeDefined();

      for (const chapter of moduleData.chapters) {
        expect(chapter.id).toBeDefined();
        expect(chapter.title).toBeDefined();
        expect(Array.isArray(chapter.questions)).toBe(true);

        for (const q of chapter.questions) {
          // Strictly authentic competition formats
          expect(['short_answer', 'essay']).toContain(q.type);

          // Strictly NO forced multiple choice options
          expect(q.options).toBeUndefined();

          // Must have valid question text, answer, and proof solution
          expect(typeof q.question).toBe('string');
          expect(q.question.length).toBeGreaterThan(0);
          expect(typeof q.answer).toBe('string');
          expect(q.answer.length).toBeGreaterThan(0);

          // Accepted answers must be a non-empty array of valid answer variations
          expect(Array.isArray(q.acceptedAnswers)).toBe(true);
          expect(q.acceptedAnswers.length).toBeGreaterThan(0);

          // Hint and bestSolution
          expect(typeof q.hint).toBe('string');
          expect(typeof q.bestSolution).toBe('string');
          expect(q.bestSolution.length).toBeGreaterThan(0);
        }
      }
    }
  });

  it('should verify 6 pedagogical pillars exist in all loaded AMC chapters', async () => {
    const levels = [8, 10, 12];

    for (const lvl of levels) {
      const moduleData = await getAmcModuleData(lvl);
      for (const chapter of moduleData.chapters) {
        expect(chapter.summary).toBeDefined();
        const { summary } = chapter;

        // Pillar 1: Overview
        expect(typeof summary.overview).toBe('string');
        expect(summary.overview.length).toBeGreaterThan(0);

        // Pillar 2: Core Concepts
        expect(Array.isArray(summary.coreConcepts)).toBe(true);
        expect(summary.coreConcepts.length).toBeGreaterThan(0);

        // Pillar 3: Key Formulas
        expect(Array.isArray(summary.keyFormulas)).toBe(true);
        expect(summary.keyFormulas.length).toBeGreaterThan(0);
        summary.keyFormulas.forEach((kf) => {
          expect(kf.label).toBeDefined();
          expect(kf.formula).toBeDefined();
        });

        // Pillar 4: Worked Examples
        expect(Array.isArray(summary.workedExamples)).toBe(true);
        expect(summary.workedExamples.length).toBeGreaterThan(0);
        summary.workedExamples.forEach((we) => {
          expect(we.problem).toBeDefined();
          expect(we.solution).toBeDefined();
        });

        // Pillar 5: Common Misconceptions
        expect(Array.isArray(summary.misconceptions)).toBe(true);
        expect(summary.misconceptions.length).toBeGreaterThan(0);

        // Pillar 6: Tutor Tip
        expect(typeof summary.tutorTip).toBe('string');
        expect(summary.tutorTip.length).toBeGreaterThan(0);
      }
    }
  });
});
