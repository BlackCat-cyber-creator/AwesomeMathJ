import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { PublicHandbook } from '../src/components/PublicHandbook.jsx';
import { AmcChapterView } from '../src/components/handbook/AmcChapterView.jsx';
import { 
  ALL_AMC_CHAPTERS_INDEX, 
  getAmcModuleData 
} from '../src/data/amc/index.js';
import { CURRICULUM_DATA } from '../src/data/curriculumData.js';

// Helper to strip React 19 SSR comment boundaries (<!-- -->)
const cleanHtml = (str) => str.replace(/<!--[\s\S]*?-->/g, '');

// Helper to escape HTML characters matching React 19 renderToString
const escapeHtml = (str) => str.replace(/&/g, '&amp;').replace(/'/g, '&#x27;');

describe('Empirical Challenger M3: Mode Switching Permutations & Navigation', () => {
  // Task 1.1: /?mode=amc&level=8 -> renders AMC 8 curriculum with all 12 chapters accessible
  it('perm 1: /?mode=amc&level=8 renders AMC 8 with all 12 chapters in sidebar navigation', () => {
    const rawHtml = renderToString(
      React.createElement(
        MemoryRouter,
        { initialEntries: ['/?mode=amc&level=8'] },
        React.createElement(PublicHandbook, {
          onLaunchPractice: () => {},
          onPrintQuest: () => {}
        })
      )
    );
    const html = cleanHtml(rawHtml);

    // Verify mode selector reflects AMC mode
    expect(html).toContain('id="btn-mode-amc"');
    expect(html).toContain('aria-selected="true"');
    expect(html).toContain('Olimpiade AMC (AMC 8, AMC 10, AMC 12)');

    // Verify AMC Level selector tabs
    expect(html).toContain('id="btn-public-amc-8"');
    expect(html).toContain('id="btn-public-amc-10"');
    expect(html).toContain('id="btn-public-amc-12"');

    // Verify AMC 8 title & sidebar count
    expect(html).toContain('Daftar Bab AMC 8 (12)');
    expect(html).not.toContain('Domain / Topik AMC');

    // Verify ALL 12 AMC 8 chapters are present in the sidebar
    const amc8Chapters = ALL_AMC_CHAPTERS_INDEX.filter(c => c.level === 8);
    expect(amc8Chapters).toHaveLength(12);

    for (const ch of amc8Chapters) {
      expect(html).toContain(`id="btn-sidebar-chapter-${ch.id}"`);
      expect(html).toContain(escapeHtml(ch.title));
    }

    // Verify default active chapter is chapter 1 (permutations)
    expect(html).toContain('amc8-ch1-permutations');
  });

  // Task 1.2: /?mode=amc&level=10 -> renders AMC 10 curriculum with all 12 chapters accessible
  it('perm 2: /?mode=amc&level=10 renders AMC 10 with all 12 chapters in sidebar navigation', () => {
    const rawHtml = renderToString(
      React.createElement(
        MemoryRouter,
        { initialEntries: ['/?mode=amc&level=10'] },
        React.createElement(PublicHandbook, {
          onLaunchPractice: () => {},
          onPrintQuest: () => {}
        })
      )
    );
    const html = cleanHtml(rawHtml);

    // Verify AMC 10 level selected
    expect(html).toContain('id="btn-public-amc-10"');
    expect(html).toContain('Daftar Bab AMC 10 (12)');
    expect(html).not.toContain('Domain / Topik AMC');

    // Verify ALL 12 AMC 10 chapters are present in the sidebar
    const amc10Chapters = ALL_AMC_CHAPTERS_INDEX.filter(c => c.level === 10);
    expect(amc10Chapters).toHaveLength(12);

    for (const ch of amc10Chapters) {
      expect(html).toContain(`id="btn-sidebar-chapter-${ch.id}"`);
      expect(html).toContain(escapeHtml(ch.title));
    }

    // Verify active chapter defaults to first chapter of AMC 10
    expect(html).toContain('amc10-ch1-advanced-combinatorics');
  });

  // Task 1.3: /?mode=amc&level=12 -> renders AMC 12 curriculum with all 12 chapters accessible
  it('perm 3: /?mode=amc&level=12 renders AMC 12 with all 12 chapters in sidebar navigation', () => {
    const rawHtml = renderToString(
      React.createElement(
        MemoryRouter,
        { initialEntries: ['/?mode=amc&level=12'] },
        React.createElement(PublicHandbook, {
          onLaunchPractice: () => {},
          onPrintQuest: () => {}
        })
      )
    );
    const html = cleanHtml(rawHtml);

    // Verify AMC 12 level selected
    expect(html).toContain('id="btn-public-amc-12"');
    expect(html).toContain('Daftar Bab AMC 12 (12)');
    expect(html).not.toContain('Domain / Topik AMC');

    // Verify ALL 12 AMC 12 chapters are present in the sidebar
    const amc12Chapters = ALL_AMC_CHAPTERS_INDEX.filter(c => c.level === 12);
    expect(amc12Chapters).toHaveLength(12);

    for (const ch of amc12Chapters) {
      expect(html).toContain(`id="btn-sidebar-chapter-${ch.id}"`);
      expect(html).toContain(escapeHtml(ch.title));
    }

    // Verify active chapter defaults to first chapter of AMC 12
    expect(html).toContain('amc12-ch1-advanced-recursion-states');
  });

  // Task 1.4: /?grade=8 (no mode param) -> renders Kurikulum Merdeka Grade 8
  it('perm 4: /?grade=8 (no mode param) renders Kurikulum Merdeka Grade 8', () => {
    const rawHtml = renderToString(
      React.createElement(
        MemoryRouter,
        { initialEntries: ['/?grade=8'] },
        React.createElement(PublicHandbook, {
          onLaunchPractice: () => {},
          onPrintQuest: () => {}
        })
      )
    );
    const html = cleanHtml(rawHtml);

    // School mode active
    expect(html).toContain('id="btn-mode-school"');
    expect(html).toContain('aria-selected="true"');
    expect(html).toContain('Kurikulum Merdeka (Kelas 4–12)');

    // School Grade 8 tab rendered
    expect(html).toContain('id="btn-public-grade-8"');
    expect(html).toContain('Kelas 8 SMP');

    // AMC Level tabs must NOT be rendered
    expect(html).not.toContain('id="btn-public-amc-8"');
    expect(html).not.toContain('id="btn-public-amc-10"');
    expect(html).not.toContain('id="btn-public-amc-12"');
    expect(html).not.toContain('Domain / Topik AMC');

    // Grade 8 chapters should be listed in sidebar
    const grade8Data = CURRICULUM_DATA.find(g => g.grade === 8);
    expect(grade8Data).toBeDefined();
    for (const ch of grade8Data.chapters) {
      expect(html).toContain(`id="btn-sidebar-chapter-${ch.id}"`);
    }

    // First chapter of Grade 8 selected by default
    expect(html).toContain('smp8-bab1-bilangan-berpangkat');
  });

  it('perm 5: backward compatibility with legacy /?grade=8&chapter=smp8-bab2-teorema-pythagoras', () => {
    const parsed = PublicHandbook.parseParams(new URLSearchParams('grade=8&chapter=smp8-bab2-teorema-pythagoras'));
    expect(parsed.mode).toBe('school');
    expect(parsed.isAmc).toBe(false);
    expect(parsed.grade).toBe(8);
    expect(parsed.chapter).toBe('smp8-bab2-teorema-pythagoras');

    const rawHtml = renderToString(
      React.createElement(
        MemoryRouter,
        { initialEntries: ['/?grade=8&chapter=smp8-bab2-teorema-pythagoras'] },
        React.createElement(PublicHandbook, {
          onLaunchPractice: () => {},
          onPrintQuest: () => {}
        })
      )
    );
    const html = cleanHtml(rawHtml);
    expect(html).toContain('smp8-bab2-teorema-pythagoras');
  });
});

describe('Empirical Challenger M3: Malformed & Missing Params Fallback Stress Tests', () => {
  const parse = PublicHandbook.parseParams;

  it('handles empty, null, or undefined query parameters', () => {
    expect(parse('')).toEqual({
      mode: 'school',
      isAmc: false,
      grade: 4,
      level: 8,
      chapter: null
    });
    expect(parse(new URLSearchParams())).toEqual({
      mode: 'school',
      isAmc: false,
      grade: 4,
      level: 8,
      chapter: null
    });
    expect(parse(null)).toEqual({
      mode: 'school',
      isAmc: false,
      grade: 4,
      level: 8,
      chapter: null
    });
    expect(parse(undefined)).toEqual({
      mode: 'school',
      isAmc: false,
      grade: 4,
      level: 8,
      chapter: null
    });
  });

  it('handles invalid or hostile mode parameters by falling back to school mode', () => {
    const hostileModes = [
      'unknown',
      'ADMIN',
      '<script>',
      'true',
      'false',
      'AMC', // case sensitive check: 'amc' vs 'AMC'
      'undefined',
      'null',
      '123'
    ];
    for (const mode of hostileModes) {
      const res = parse(`mode=${mode}`);
      expect(res.mode).toBe('school');
      expect(res.isAmc).toBe(false);
    }
  });

  it('handles invalid AMC level parameters by falling back to level 8', () => {
    const invalidLevels = [
      'mode=amc&level=0',
      'mode=amc&level=-1',
      'mode=amc&level=-8',
      'mode=amc&level=7',
      'mode=amc&level=9',
      'mode=amc&level=11',
      'mode=amc&level=13',
      'mode=amc&level=999',
      'mode=amc&level=abc',
      'mode=amc&level=NaN',
      'mode=amc&level=Infinity',
      'mode=amc&level=8.5',
      'mode=amc&level='
    ];
    for (const query of invalidLevels) {
      const res = parse(query);
      expect(res.mode).toBe('amc');
      expect(res.isAmc).toBe(true);
      expect(res.level).toBe(8);
    }
  });

  it('handles invalid School grade parameters by falling back to grade 4', () => {
    const invalidGrades = [
      'grade=0',
      'grade=1',
      'grade=2',
      'grade=3',
      'grade=13',
      'grade=99',
      'grade=-4',
      'grade=abc',
      'grade=NaN',
      'grade=undefined',
      'grade='
    ];
    for (const query of invalidGrades) {
      const res = parse(query);
      expect(res.mode).toBe('school');
      expect(res.isAmc).toBe(false);
      expect(res.grade).toBe(4);
    }
  });

  it('handles non-existent chapter parameters without crashing in SSR', () => {
    // Non-existent AMC chapter
    const rawHtmlAmc = renderToString(
      React.createElement(
        MemoryRouter,
        { initialEntries: ['/?mode=amc&level=8&chapter=non-existent-chapter-uuid-404'] },
        React.createElement(PublicHandbook, {
          onLaunchPractice: () => {},
          onPrintQuest: () => {}
        })
      )
    );
    const htmlAmc = cleanHtml(rawHtmlAmc);
    // Should fallback to first chapter of AMC 8
    expect(htmlAmc).toContain('amc8-ch1-permutations');

    // Non-existent School chapter
    const rawHtmlSchool = renderToString(
      React.createElement(
        MemoryRouter,
        { initialEntries: ['/?grade=8&chapter=non-existent-chapter-uuid-404'] },
        React.createElement(PublicHandbook, {
          onLaunchPractice: () => {},
          onPrintQuest: () => {}
        })
      )
    );
    const htmlSchool = cleanHtml(rawHtmlSchool);
    // Should fallback to first chapter of Grade 8
    expect(htmlSchool).toContain('smp8-bab1-bilangan-berpangkat');
  });

  it('buildUrl produces clean, spec-compliant URLs under all edge cases', () => {
    const build = PublicHandbook.buildUrl;

    // School mode with grade and chapter
    expect(build({ mode: 'school', grade: 7, chapter: 'smp7-bab1' }))
      .toBe('/?grade=7&chapter=smp7-bab1');

    // School mode defaults
    expect(build({ mode: 'school' }))
      .toBe('/?grade=4');

    // AMC mode with level and chapter
    expect(build({ mode: 'amc', level: 12, chapter: 'amc12-ch1-advanced-recursion-states' }))
      .toBe('/?mode=amc&level=12&chapter=amc12-ch1-advanced-recursion-states');

    // AMC mode defaults
    expect(build({ mode: 'amc' }))
      .toBe('/?mode=amc&level=8');

    // Empty object
    expect(build({}))
      .toBe('/?grade=4');
  });
});

describe('Empirical Challenger M3: Answer Evaluation Adversarial Stress Tests', () => {
  const evaluate = AmcChapterView.evaluateAnswer;

  it('accepts valid exact and equivalent numeric answers', () => {
    expect(evaluate('42', { answer: '42' })).toBe(true);
    expect(evaluate('42.0', { answer: '42' })).toBe(true);
    expect(evaluate('42.000', { answer: '42' })).toBe(true);
    expect(evaluate('42', { answer: '42.0' })).toBe(true);
    expect(evaluate('0.25', { answer: '0.25' })).toBe(true);
    expect(evaluate('.25', { answer: '0.25' })).toBe(true);
    expect(evaluate('0,25', { answer: '0.25' })).toBe(true);
    expect(evaluate(',25', { answer: '0.25' })).toBe(true);
  });

  it('evaluates zero ("0") correctly and does not treat "0" as falsy empty input', () => {
    expect(evaluate('0', { answer: '0' })).toBe(true);
    expect(evaluate('0.0', { answer: '0' })).toBe(true);
    expect(evaluate('0', { answer: '0.0' })).toBe(true);
    expect(evaluate('0', { answer: '0', acceptedAnswers: ['0', 'nol'] })).toBe(true);
    expect(evaluate('nol', { answer: '0', acceptedAnswers: ['0', 'nol'] })).toBe(true);
  });

  it('evaluates negative numbers correctly', () => {
    expect(evaluate('-15', { answer: '-15' })).toBe(true);
    expect(evaluate('-15.0', { answer: '-15' })).toBe(true);
    expect(evaluate('-15', { answer: '-15.00' })).toBe(true);
    expect(evaluate('15', { answer: '-15' })).toBe(false);
    expect(evaluate('-15', { answer: '15' })).toBe(false);
  });

  it('strictly rejects adversarial false positive inputs', () => {
    // Target 1
    expect(evaluate('10', { answer: '1' })).toBe(false);
    expect(evaluate('01', { answer: '1' })).toBe(true); // '01' === 1 numerically, valid math!
    expect(evaluate('11', { answer: '1' })).toBe(false);
    expect(evaluate('123', { answer: '1' })).toBe(false);
    expect(evaluate('91', { answer: '1' })).toBe(false);

    // Target 7
    expect(evaluate('77', { answer: '7' })).toBe(false);
    expect(evaluate('70', { answer: '7' })).toBe(false);
    expect(evaluate('17', { answer: '7' })).toBe(false);

    // Target 100
    expect(evaluate('1000', { answer: '100' })).toBe(false);
    expect(evaluate('10', { answer: '100' })).toBe(false);

    // Target 1/3 (algebraic/fraction)
    expect(evaluate('1/33', { answer: '1/3' })).toBe(false);
    expect(evaluate('11/3', { answer: '1/3' })).toBe(false);
    expect(evaluate('2/3', { answer: '1/3' })).toBe(false);
  });

  it('handles strange whitespace, tabs, and linebreaks gracefully', () => {
    expect(evaluate('  \t 36 \n ', { answer: '36' })).toBe(true);
    expect(evaluate('\n\n50\t', { answer: '50' })).toBe(true);
    expect(evaluate('   ', { answer: '36' })).toBe(false);
    expect(evaluate('\t\n', { answer: '36' })).toBe(false);
  });

  it('safely handles non-object and null question inputs without throwing', () => {
    expect(evaluate('36', null)).toBe(false);
    expect(evaluate('36', undefined)).toBe(false);
    expect(evaluate('36', {})).toBe(false);
    expect(evaluate(null, { answer: '36' })).toBe(false);
    expect(evaluate(undefined, { answer: '36' })).toBe(false);
    expect(evaluate(123, { answer: '123' })).toBe(true);
  });
});

describe('Empirical Challenger M3: Complete 36 AMC Chapters Schema & Content Audit', () => {
  it('verifies all 36 AMC chapters in ALL_AMC_CHAPTERS_INDEX have complete metadata', () => {
    expect(ALL_AMC_CHAPTERS_INDEX).toHaveLength(36);

    const levels = [8, 10, 12];
    for (const lvl of levels) {
      const chapters = ALL_AMC_CHAPTERS_INDEX.filter(c => c.level === lvl);
      expect(chapters).toHaveLength(12);

      chapters.forEach((ch, idx) => {
        expect(ch.id).toMatch(new RegExp(`^amc${lvl}-ch${idx + 1}-`));
        expect(ch.title).toBeTruthy();
        expect(ch.domain).toBeTruthy();
        expect(ch.questionCount).toBe(6);
      });
    }
  });

  it('verifies all 36 AMC chapters loaded via getAmcModuleData have 6 authentic non-MCQ questions', async () => {
    for (const lvl of [8, 10, 12]) {
      const moduleData = await getAmcModuleData(lvl);
      expect(moduleData).toBeDefined();
      expect(moduleData.chapters).toHaveLength(12);

      for (const ch of moduleData.chapters) {
        expect(ch.questions).toBeDefined();
        expect(ch.questions).toHaveLength(6);

        for (const q of ch.questions) {
          // Strictly non-MCQ
          expect(q.type).not.toBe('mcq');
          expect(['short_answer', 'essay']).toContain(q.type);
          expect(q.question || q.problem).toBeTruthy();
          expect(q.answer).toBeDefined();
          expect(q.bestSolution).toBeTruthy();
          expect(q.hint).toBeTruthy();
        }
      }
    }
  });

  it('ORACLE: verifies evaluateAmcAnswer accepts q.answer and q.acceptedAnswers for all 216 questions', async () => {
    const evaluate = AmcChapterView.evaluateAnswer;
    let totalQuestionsTested = 0;

    for (const lvl of [8, 10, 12]) {
      const moduleData = await getAmcModuleData(lvl);
      for (const ch of moduleData.chapters) {
        for (const q of ch.questions) {
          if (q.type === 'short_answer') {
            totalQuestionsTested++;
            // 1. Canonical answer MUST evaluate to true
            expect(evaluate(q.answer, q)).toBe(true);

            // 2. All acceptedAnswers MUST evaluate to true
            if (Array.isArray(q.acceptedAnswers)) {
              for (const acc of q.acceptedAnswers) {
                expect(evaluate(acc, q)).toBe(true);
              }
            }

            // 3. Appending arbitrary digits or random noise MUST evaluate to false
            expect(evaluate(q.answer + '9999xyz', q)).toBe(false);
            expect(evaluate('noise_' + q.answer, q)).toBe(false);
          }
        }
      }
    }

    // Ensure we actually tested a substantial number of competition short-answer questions
    expect(totalQuestionsTested).toBeGreaterThan(150);
  });
});

