import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { ChapterSolutionView } from '../src/components/ChapterSolutionView.jsx';
import { getAmcChapterSolutionData, getAmcModuleData } from '../src/data/amc/amcData.js';
import { getChapterSolutionData } from '../src/data/curriculumData.js';


describe('ChapterSolutionView Polymorphic Resolution & Non-MCQ Resilience', () => {
  it('should render standard Kurikulum Merdeka MCQ chapter solution with options and quick key', async () => {
    const k12Chapter = await getChapterSolutionData(4, 'sd4-bab1-bilangan-cacah');
    expect(k12Chapter).toBeDefined();

    const html = renderToString(
      React.createElement(
        MemoryRouter,
        null,
        React.createElement(ChapterSolutionView, { chapterData: k12Chapter })
      )
    );

    expect(html).toContain('Kunci Jawaban &amp; Pembahasan:');
    expect(html).toContain('Kelas 4');
    expect(html).toContain('Kunci Jawaban Singkat (Quick Key)');
    expect(html).toContain('Kunci: Opsi');
    expect(html).toContain('Langkah Penyelesaian Terstruktur &amp; Pembuktian:');
  });

  it('should render AMC 8 competition non-MCQ chapter solution WITHOUT crashing (no options.map error)', async () => {
    const amc8Chapter = await getAmcChapterSolutionData(8, 'amc8-ch1-permutations');
    expect(amc8Chapter).toBeDefined();
    expect(amc8Chapter.questions.length).toBeGreaterThan(0);
    // Verify no ABCD options exist in AMC data
    expect(amc8Chapter.questions[0].options).toBeUndefined();

    // Render should not throw
    let html = '';
    expect(() => {
      html = renderToString(
        React.createElement(
          MemoryRouter,
          null,
          React.createElement(ChapterSolutionView, { chapterData: amc8Chapter })
        )
      );
    }).not.toThrow();

    expect(html).toContain('AMC 8');
    expect(html).toContain('Permutasi &amp; Kaidah Pengaturan');
    expect(html).toContain('Target Jawaban Resmi:');
    expect(html).toContain('Kunci Jawaban:');
    expect(html).not.toContain('Kunci: Opsi');
    expect(html).toContain('Langkah Penyelesaian Terstruktur &amp; Pembuktian:');
  });

  it('should render AMC 10 competition chapter with essay proof question without crash', async () => {
    const amc10Chapter = await getAmcChapterSolutionData(10, 'amc10-ch1-advanced-combinatorics');
    expect(amc10Chapter).toBeDefined();

    let html = '';
    expect(() => {
      html = renderToString(
        React.createElement(
          MemoryRouter,
          null,
          React.createElement(ChapterSolutionView, { chapterData: amc10Chapter })
        )
      );
    }).not.toThrow();

    expect(html).toContain('AMC 10');
    expect(html).toContain('Target Jawaban Resmi:');
  });

  it('should render AMC 12 competition chapter without crash', async () => {
    const amc12Chapter = await getAmcChapterSolutionData(12, 'amc12-ch1-advanced-recursion-states');
    expect(amc12Chapter).toBeDefined();

    let html = '';
    expect(() => {
      html = renderToString(
        React.createElement(
          MemoryRouter,
          null,
          React.createElement(ChapterSolutionView, { chapterData: amc12Chapter })
        )
      );
    }).not.toThrow();

    expect(html).toContain('AMC 12');
    expect(html).toContain('Target Jawaban Resmi:');
  });

  it('should display empty state gracefully when chapter is not found', () => {
    const html = renderToString(
      React.createElement(
        MemoryRouter,
        null,
        React.createElement(ChapterSolutionView, { chapterData: null })
      )
    );

    expect(html).toContain('Pembahasan Tidak Ditemukan');
  });

  it('should render all 36 AMC competition chapters across AMC 8, 10, 12 in ChapterSolutionView seamlessly', async () => {
    for (const lvl of [8, 10, 12]) {
      const moduleData = await getAmcModuleData(lvl);
      expect(moduleData.chapters.length).toBe(12);

      for (const chapter of moduleData.chapters) {
        const fullSolutionData = {
          ...chapter,
          level: moduleData.level,
          levelTitle: moduleData.title,
          badge: `AMC ${moduleData.level}`
        };

        expect(() => {
          const html = renderToString(
            React.createElement(
              MemoryRouter,
              null,
              React.createElement(ChapterSolutionView, { chapterData: fullSolutionData })
            )
          );
          expect(html).toContain('Target Jawaban Resmi:');
        }).not.toThrow();
      }
    }
  });

  it('should verify getChapterSolutionData gracefully delegates AMC chapters to getAmcChapterSolutionData', async () => {
    const res = await getChapterSolutionData(8, 'amc8-ch1-permutations');
    expect(res).toBeDefined();
    expect(res.id).toBe('amc8-ch1-permutations');
    expect(res.questions.length).toBe(6);
  });
});
