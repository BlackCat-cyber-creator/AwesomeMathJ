import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { PublicHandbook } from '../src/components/PublicHandbook.jsx';
import { AmcChapterView } from '../src/components/handbook/AmcChapterView.jsx';
import { getVisualConfig } from '../src/components/visuals/registry/index.js';
import { 
  AMC_LEVELS_METADATA, 
  ALL_AMC_CHAPTERS_INDEX, 
  getAmcModuleData 
} from '../src/data/amc/index.js';

describe('AMC UI Integration: Mode Switching & Parameter Synchronization', () => {
  it('should default to standard school mode grade 4 when no search parameters are provided', () => {
    const parsed = PublicHandbook.parseParams(new URLSearchParams(''));
    expect(parsed.mode).toBe('school');
    expect(parsed.isAmc).toBe(false);
    expect(parsed.grade).toBe(4);
    expect(parsed.chapter).toBeNull();
  });

  it('should maintain backward compatibility with legacy Kurikulum Merdeka URLs', () => {
    const params = new URLSearchParams('grade=8&chapter=smp8-bab1-pola-bilangan');
    const parsed = PublicHandbook.parseParams(params);
    expect(parsed.mode).toBe('school');
    expect(parsed.isAmc).toBe(false);
    expect(parsed.grade).toBe(8);
    expect(parsed.chapter).toBe('smp8-bab1-pola-bilangan');
  });

  it('should recognize AMC Olympiad mode and parse level and chapter correctly', () => {
    const params8 = new URLSearchParams('mode=amc&level=8&chapter=amc8-ch1-permutations');
    const parsed8 = PublicHandbook.parseParams(params8);
    expect(parsed8.mode).toBe('amc');
    expect(parsed8.isAmc).toBe(true);
    expect(parsed8.level).toBe(8);
    expect(parsed8.chapter).toBe('amc8-ch1-permutations');

    const params10 = new URLSearchParams('mode=amc&level=10&chapter=amc10-ch3-vieta-polynomials');
    const parsed10 = PublicHandbook.parseParams(params10);
    expect(parsed10.mode).toBe('amc');
    expect(parsed10.isAmc).toBe(true);
    expect(parsed10.level).toBe(10);
    expect(parsed10.chapter).toBe('amc10-ch3-vieta-polynomials');

    const params12 = new URLSearchParams('mode=amc&level=12&chapter=amc12-ch9-3d-geometry-vectors');
    const parsed12 = PublicHandbook.parseParams(params12);
    expect(parsed12.mode).toBe('amc');
    expect(parsed12.isAmc).toBe(true);
    expect(parsed12.level).toBe(12);
    expect(parsed12.chapter).toBe('amc12-ch9-3d-geometry-vectors');
  });

  it('should gracefully fallback invalid AMC levels to default level 8', () => {
    const invalidLevelParams = new URLSearchParams('mode=amc&level=999&chapter=amc8-ch1-permutations');
    const parsed = PublicHandbook.parseParams(invalidLevelParams);
    expect(parsed.mode).toBe('amc');
    expect(parsed.level).toBe(8);
  });

  it('should gracefully fallback invalid school grades to default grade 4', () => {
    const invalidGradeParams = new URLSearchParams('grade=99');
    const parsed = PublicHandbook.parseParams(invalidGradeParams);
    expect(parsed.mode).toBe('school');
    expect(parsed.grade).toBe(4);
  });

  it('should construct clean bidirectional query URLs for school and AMC modes', () => {
    const schoolUrl = PublicHandbook.buildUrl({
      mode: 'school',
      grade: 8,
      chapter: 'smp8-bab1-pola-bilangan'
    });
    expect(schoolUrl).toBe('/?grade=8&chapter=smp8-bab1-pola-bilangan');
    expect(schoolUrl).not.toContain('mode=');

    const amcUrl = PublicHandbook.buildUrl({
      mode: 'amc',
      level: 10,
      chapter: 'amc10-ch1-advanced-combinatorics'
    });
    expect(amcUrl).toBe('/?mode=amc&level=10&chapter=amc10-ch1-advanced-combinatorics');
  });
});

describe('AmcChapterView: Answer Evaluation & Substring False-Positive Rejection', () => {
  const evaluate = AmcChapterView.evaluateAnswer;

  it('should correctly validate exact string matches', () => {
    expect(evaluate('36', { answer: '36' })).toBe(true);
    expect(evaluate('1/3', { answer: '1/3' })).toBe(true);
    expect(evaluate('x+2', { answer: 'x+2' })).toBe(true);
    expect(evaluate('45', { answer: '45' })).toBe(true);
  });

  it('should normalize spaces, case, and decimal commas', () => {
    expect(evaluate('  36  ', { answer: '36' })).toBe(true);
    expect(evaluate('36 BILANGAN', { answer: '36 bilangan' })).toBe(true);
    expect(evaluate('3,5', { answer: '3.5' })).toBe(true);
    expect(evaluate('0,125', { answer: '0.125' })).toBe(true);
  });

  it('should evaluate numerical equivalence accurately', () => {
    expect(evaluate('36.0', { answer: '36' })).toBe(true);
    expect(evaluate('36', { answer: '36.00' })).toBe(true);
    expect(evaluate('0.5', { answer: '0.50' })).toBe(true);
    expect(evaluate('.5', { answer: '0.5' })).toBe(true);
    expect(evaluate('100.000', { answer: '100' })).toBe(true);
  });

  it('should validate against acceptedAnswers variations', () => {
    const question = {
      answer: '36',
      acceptedAnswers: ['36', '36 bilangan', '36 kemungkinan']
    };
    expect(evaluate('36', question)).toBe(true);
    expect(evaluate('36 bilangan', question)).toBe(true);
    expect(evaluate('36 kemungkinan', question)).toBe(true);
    expect(evaluate('36.0', question)).toBe(true);
  });

  it('CRITICAL: should strictly reject false-positive substring matches', () => {
    // If answer is '1', typing '123' must NOT match!
    expect(evaluate('123', { answer: '1' })).toBe(false);
    expect(evaluate('10', { answer: '1' })).toBe(false);
    expect(evaluate('51', { answer: '1' })).toBe(false);
    expect(evaluate('11', { answer: '1' })).toBe(false);

    // If answer is '60', typing '160' or '600' must NOT match!
    expect(evaluate('160', { answer: '60' })).toBe(false);
    expect(evaluate('600', { answer: '60' })).toBe(false);

    // If answer is '25', typing '250' or '125' must NOT match!
    expect(evaluate('250', { answer: '25' })).toBe(false);
    expect(evaluate('125', { answer: '25' })).toBe(false);

    // If answer is '1/3', typing '1/33' or '1' must NOT match!
    expect(evaluate('1/33', { answer: '1/3' })).toBe(false);
    expect(evaluate('1', { answer: '1/3' })).toBe(false);
  });

  it('should safely return false for empty or non-string inputs', () => {
    expect(evaluate('', { answer: '36' })).toBe(false);
    expect(evaluate('   ', { answer: '36' })).toBe(false);
    expect(evaluate(null, { answer: '36' })).toBe(false);
    expect(evaluate(undefined, { answer: '36' })).toBe(false);
    expect(evaluate('36', null)).toBe(false);
    expect(evaluate('36', {})).toBe(false);
  });
});

describe('Visual Registry: getVisualConfig with question.visualId', () => {
  it('should resolve visual configuration when question.visualId is declared', () => {
    const q1 = { id: 'test-q1', visualId: 'amc8-geo-q1' };
    const config1 = getVisualConfig(q1);
    expect(config1).toBeDefined();
    expect(config1.type).toBe('right-triangle');
    expect(config1.props.title).toContain('45°-45°-90°');

    const q2 = { id: 'test-q2', visualId: 'amc8-geo-q2' };
    const config2 = getVisualConfig(q2);
    expect(config2).toBeDefined();
    expect(config2.type).toBe('right-triangle');
    expect(config2.props.caption).toContain('30°');

    const q3 = { id: 'test-q3', visualId: 'amc8-geo-q3' };
    const config3 = getVisualConfig(q3);
    expect(config3).toBeDefined();
    expect(config3.type).toBe('circle-angle');
    expect(config3.props.centralAngle).toBe('80°');

    const qTrapezoid = { id: 'test-trap', visualId: 'amc10-geo-q1' };
    const configTrap = getVisualConfig(qTrapezoid);
    expect(configTrap).toBeDefined();
    expect(configTrap.type).toBe('trapezoid');

    const qPlane = { id: 'test-plane', visualId: 'amc10-geo-q2' };
    const configPlane = getVisualConfig(qPlane);
    expect(configPlane).toBeDefined();
    expect(configPlane.type).toBe('cartesian-plot');

    const qCube = { id: 'test-cube', visualId: 'amc12-geo-q1' };
    const configCube = getVisualConfig(qCube);
    expect(configCube).toBeDefined();
    expect(configCube.type).toBe('solid-3d');
  });

  it('should fallback to question.id when visualId is omitted', () => {
    const question = { id: 'amc8-geo-q1' };
    const config = getVisualConfig(question);
    expect(config).toBeDefined();
    expect(config.type).toBe('right-triangle');
  });

  it('should prioritize visualId over id if both are specified', () => {
    const question = { id: 'amc8-geo-q1', visualId: 'amc8-geo-q3' };
    const config = getVisualConfig(question);
    expect(config).toBeDefined();
    expect(config.type).toBe('circle-angle');
  });

  it('should prioritize direct declarative question.visual property over registry lookup', () => {
    const customVisual = { type: 'custom-diagram', props: { note: 'custom' } };
    const question = { id: 'amc8-geo-q1', visualId: 'amc8-geo-q1', visual: customVisual };
    const config = getVisualConfig(question);
    expect(config).toBe(customVisual);
  });

  it('should return null for questions without matching visual configurations', () => {
    expect(getVisualConfig(null)).toBeNull();
    expect(getVisualConfig({})).toBeNull();
    expect(getVisualConfig({ id: 'non-existent-question-id-999' })).toBeNull();
  });
});

describe('UI Component Integration & Rendering', () => {
  it('should render AmcChapterView with 6 pillars accordion, question cards, and action buttons', async () => {
    const amc8Module = await getAmcModuleData(8);
    expect(amc8Module).toBeDefined();
    const chapter1 = amc8Module.chapters[0];
    const levelMeta = AMC_LEVELS_METADATA[0];

    const html = renderToString(
      React.createElement(AmcChapterView, {
        chapter: chapter1,
        levelMeta,
        onPrintQuest: () => {}
      })
    );

    // Verify badges and header
    expect(html).toContain('AMC 8');
    expect(html).toContain(chapter1.domain);
    expect(html).toContain(chapter1.title.replace(/&/g, '&amp;'));

    // Verify 6 Pedagogical Pillars Accordion
    expect(html).toContain('Pahami Materi');
    expect(html).toContain('Rumus Kunci');

    // Verify action buttons
    expect(html).toContain('id="btn-print-amc-worksheet"');
    expect(html).toContain('Cetak LKPD AMC (A4)');
    expect(html).toContain('id="btn-copy-amc-link"');
    expect(html).toContain('Bagikan Bab');

    // Verify questions practice section
    expect(html).toContain('Latihan Soal &amp; Pemahaman Konsep');
    expect(html).toContain('Soal #');
    expect(html).toContain('Periksa Jawaban');
  });

  it('should render PublicHandbook in default school mode with grade tabs', () => {
    const html = renderToString(
      React.createElement(
        MemoryRouter,
        { initialEntries: ['/'] },
        React.createElement(PublicHandbook, {
          onLaunchPractice: () => {},
          onPrintQuest: () => {}
        })
      )
    );

    // Mode Switchers
    expect(html).toContain('id="btn-mode-school"');
    expect(html).toContain('id="btn-mode-amc"');
    expect(html).toContain('Kurikulum Merdeka (Kelas 4–12)');
    expect(html).toContain('Olimpiade AMC (AMC 8, AMC 10, AMC 12)');

    // School Grade Tabs
    expect(html).toContain('id="btn-public-grade-4"');
    expect(html).toContain('id="btn-public-grade-12"');
  });

  it('should render PublicHandbook in AMC mode with level buttons and AMC chapters in sidebar', () => {
    const html = renderToString(
      React.createElement(
        MemoryRouter,
        { initialEntries: ['/?mode=amc&level=8'] },
        React.createElement(PublicHandbook, {
          onLaunchPractice: () => {},
          onPrintQuest: () => {}
        })
      )
    );

    // Mode Switcher active state
    expect(html).toContain('id="btn-mode-amc"');

    // AMC Level Selector Tabs
    expect(html).toContain('id="btn-public-amc-8"');
    expect(html).toContain('id="btn-public-amc-10"');
    expect(html).toContain('id="btn-public-amc-12"');

    // Verify domain filter is removed per user specification
    expect(html).not.toContain('id="btn-filter-domain-all"');

    // Sidebar chapters for AMC 8
    expect(html).toContain('Daftar Bab AMC');
    expect(html).toContain('amc8-ch1-permutations');
  });

  it('should render all 12 chapters across AMC 8, AMC 10, and AMC 12 in ALL_AMC_CHAPTERS_INDEX', () => {
    const amc8List = ALL_AMC_CHAPTERS_INDEX.filter(c => c.level === 8);
    const amc10List = ALL_AMC_CHAPTERS_INDEX.filter(c => c.level === 10);
    const amc12List = ALL_AMC_CHAPTERS_INDEX.filter(c => c.level === 12);

    expect(amc8List).toHaveLength(12);
    expect(amc10List).toHaveLength(12);
    expect(amc12List).toHaveLength(12);
  });
});
