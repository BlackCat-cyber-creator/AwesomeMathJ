import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { ChapterSolutionView } from '../src/components/ChapterSolutionView.jsx';
import { PrintableWorksheet } from '../src/components/PrintableWorksheet.jsx';
import { QueryRedirectHandler } from '../src/App.jsx';
import { getAmcChapterSolutionData, getAmcModuleData, normalizeAmcLevel } from '../src/data/amc/amcData.js';
import { getChapterSolutionData } from '../src/data/curriculumData.js';
import { ALL_AMC_CHAPTERS_INDEX } from '../src/data/amc/amcMetadata.js';

const getWorksheetSolutionPath = PrintableWorksheet.getSolutionPath;
const getWorksheetSolutionUrl = PrintableWorksheet.getSolutionUrl;
const resolveQueryRedirect = QueryRedirectHandler.resolve;

describe('Milestone M4: Polymorphic Solution Viewer & Dynamic AMC Loading', () => {
  it('should normalize AMC levels correctly and fetch module data for 8, 10, 12', async () => {
    expect(normalizeAmcLevel(8)).toBe(8);
    expect(normalizeAmcLevel('AMC 10')).toBe(10);
    expect(normalizeAmcLevel('amc 12')).toBe(12);
    expect(normalizeAmcLevel('invalid')).toBeNaN();

    const mod8 = await getAmcModuleData(8);
    expect(mod8.chapters.length).toBe(12);
    const mod10 = await getAmcModuleData(10);
    expect(mod10.chapters.length).toBe(12);
    const mod12 = await getAmcModuleData(12);
    expect(mod12.chapters.length).toBe(12);
  });
  it('should dynamically load and resolve solution data for AMC 8 chapters', async () => {
    const amc8Chapter = await getAmcChapterSolutionData(8, 'amc8-ch1-permutations');
    expect(amc8Chapter).toBeDefined();
    expect(amc8Chapter.id).toBe('amc8-ch1-permutations');
    expect(amc8Chapter.level).toBe(8);
    expect(amc8Chapter.badge).toBe('AMC 8');
    expect(Array.isArray(amc8Chapter.questions)).toBe(true);
    expect(amc8Chapter.questions.length).toBeGreaterThan(0);

    // Render in ChapterSolutionView
    const html = renderToString(
      React.createElement(
        MemoryRouter,
        null,
        React.createElement(ChapterSolutionView, { chapterData: amc8Chapter })
      )
    );

    expect(html).toContain('Kunci Jawaban &amp; Pembahasan:');
    expect(html).toContain('AMC 8');
    expect(html).toContain('Permutasi &amp; Kaidah Pengaturan');
    expect(html).toContain('Target Jawaban Resmi:');
    expect(html).toContain('Kunci Jawaban Singkat (Quick Key)');
  });

  it('should dynamically load and resolve solution data for AMC 10 chapters', async () => {
    const amc10Chapter = await getAmcChapterSolutionData(10, 'amc10-ch1-advanced-combinatorics');
    expect(amc10Chapter).toBeDefined();
    expect(amc10Chapter.id).toBe('amc10-ch1-advanced-combinatorics');
    expect(amc10Chapter.level).toBe(10);
    expect(amc10Chapter.badge).toBe('AMC 10');
    expect(amc10Chapter.questions.length).toBeGreaterThan(0);

    const html = renderToString(
      React.createElement(
        MemoryRouter,
        null,
        React.createElement(ChapterSolutionView, { chapterData: amc10Chapter })
      )
    );

    expect(html).toContain('AMC 10');
    expect(html).toContain('Stars &amp; Bars');
    expect(html).toContain('Target Jawaban Resmi:');
  });

  it('should dynamically load and resolve solution data for AMC 12 chapters', async () => {
    const amc12Chapter = await getAmcChapterSolutionData(12, 'amc12-ch1-advanced-recursion-states');
    expect(amc12Chapter).toBeDefined();
    expect(amc12Chapter.id).toBe('amc12-ch1-advanced-recursion-states');
    expect(amc12Chapter.level).toBe(12);
    expect(amc12Chapter.badge).toBe('AMC 12');
    expect(amc12Chapter.questions.length).toBeGreaterThan(0);

    const html = renderToString(
      React.createElement(
        MemoryRouter,
        null,
        React.createElement(ChapterSolutionView, { chapterData: amc12Chapter })
      )
    );

    expect(html).toContain('AMC 12');
    expect(html).toContain('Rekursi Lanjut');
    expect(html).toContain('Target Jawaban Resmi:');
  });

  it('should verify getAmcChapterSolutionData accepts numeric, string, and prefixed level formats', async () => {
    const resNum = await getAmcChapterSolutionData(8, 'amc8-ch1-permutations');
    const resStr = await getAmcChapterSolutionData('8', 'amc8-ch1-permutations');
    const resPrefixed = await getAmcChapterSolutionData('AMC 8', 'amc8-ch1-permutations');

    expect(resNum).not.toBeNull();
    expect(resStr).not.toBeNull();
    expect(resPrefixed).not.toBeNull();
    expect(resNum.id).toBe(resStr.id);
    expect(resStr.id).toBe(resPrefixed.id);
  });

  it('should ensure all 36 AMC competition chapters across AMC 8, 10, 12 load valid solution data', async () => {
    expect(ALL_AMC_CHAPTERS_INDEX.length).toBe(36);

    for (const indexItem of ALL_AMC_CHAPTERS_INDEX) {
      const solution = await getAmcChapterSolutionData(indexItem.level, indexItem.id);
      expect(solution, `Chapter ${indexItem.id} at level ${indexItem.level} must load`).toBeDefined();
      expect(solution.questions.length).toBeGreaterThanOrEqual(4);
      expect(solution.title).toBe(indexItem.title);
    }
  });

  it('should handle non-MCQ questions with q.problem and no options without throwing TypeError', () => {
    const mockAmcChapter = {
      id: 'amc-mock-ch',
      title: 'Uji Non-MCQ Resilience',
      level: 10,
      badge: 'AMC 10',
      questions: [
        {
          id: 'q-short-1',
          type: 'short_answer',
          problem: 'Tentukan banyaknya solusi bulat non-negatif dari $x + y + z = 10$.',
          answer: '66',
          acceptedAnswers: ['66', '66 pasangan', '66 solusi'],
          bestSolution: 'Gunakan metode Stars and Bars: $\\binom{10 + 3 - 1}{3 - 1} = \\binom{12}{2} = 66$.',
          hint: 'Gunakan teorema bintang dan garis (Stars and Bars).'
        },
        {
          id: 'q-essay-2',
          type: 'essay',
          source: 'AMC 10 Invitational',
          problem: 'Buktikan bahwa untuk setiap bilangan bulat positif $n$, $n^3 - n$ habis dibagi 6.',
          answer: 'Terbukti',
          acceptedAnswers: ['Terbukti', 'Q.E.D.'],
          bestSolution: 'Faktorkan: $n^3 - n = (n-1)n(n+1)$, yang merupakan perkalian 3 bilangan bulat berurutan.',
          hint: 'Faktorkan menjadi perkalian 3 bilangan berturutan.'
        }
      ]
    };

    let html = '';
    expect(() => {
      html = renderToString(
        React.createElement(
          MemoryRouter,
          null,
          React.createElement(ChapterSolutionView, { chapterData: mockAmcChapter })
        )
      );
    }).not.toThrow();

    // Verify question statements rendered from q.problem
    expect(html).toContain('Tentukan banyaknya solusi bulat non-negatif');
    expect(html).toContain('Buktikan bahwa untuk setiap bilangan bulat positif');

    // Verify Target Jawaban Resmi card
    expect(html).toContain('Target Jawaban Resmi:');
    expect(html).toContain('66');
    expect(html).toContain('66 pasangan, 66 solusi');
    expect(html).toContain('Terbukti');

    // Verify Step-by-step rigorous proof
    expect(html).toContain('Langkah Penyelesaian Terstruktur &amp; Pembuktian:');
    expect(html).toContain('Stars and Bars');
    expect(html).toContain('Faktorkan:');

    // Verify quick key pills
    expect(html).toContain('Kunci Jawaban Singkat (Quick Key)');
    expect(html).toContain('pembahasan-soal-1');
    expect(html).toContain('pembahasan-soal-2');

    // Verify tips/hints
    expect(html).toContain('Tips Cepat:');
    expect(html).toContain('Gunakan teorema bintang dan garis');

    // Verify essay badge
    expect(html).toContain('Esai / Pembuktian');
  });

  it('should render standard multiple-choice questions correctly alongside non-MCQ without conflict', async () => {
    const k12Chapter = await getChapterSolutionData(7, 'smp7-bab1-bilangan-bulat');
    expect(k12Chapter).toBeDefined();

    const html = renderToString(
      React.createElement(
        MemoryRouter,
        null,
        React.createElement(ChapterSolutionView, { chapterData: k12Chapter })
      )
    );

    expect(html).toContain('Kunci: Opsi');
    expect(html).toContain('Langkah Penyelesaian Terstruktur &amp; Pembuktian:');
  });
});

describe('Milestone M4: PrintableWorksheet QR Deep Linking & A4 Print Engine', () => {
  it('should generate canonical deep link path for AMC 8 worksheet', () => {
    const quest = {
      id: 'amc8-ch1-permutations',
      chapterId: 'amc8-ch1-permutations',
      level: 'AMC 8',
      grade: 8
    };

    const path = getWorksheetSolutionPath(quest);
    expect(path).toBe('/solution/amc/8/amc8-ch1-permutations');

    const url = getWorksheetSolutionUrl(quest, 'https://awesomemathj.web.app');
    expect(url).toBe('https://awesomemathj.web.app/solution/amc/8/amc8-ch1-permutations');
  });

  it('should generate canonical deep link path for AMC 10 worksheet', () => {
    const quest = {
      id: 'amc10-ch5-coordinate-geometry',
      chapterId: 'amc10-ch5-coordinate-geometry',
      level: 'AMC 10',
      grade: 10
    };

    const path = getWorksheetSolutionPath(quest);
    expect(path).toBe('/solution/amc/10/amc10-ch5-coordinate-geometry');

    const url = getWorksheetSolutionUrl(quest, 'https://awesomemathj.web.app');
    expect(url).toBe('https://awesomemathj.web.app/solution/amc/10/amc10-ch5-coordinate-geometry');
  });

  it('should generate canonical deep link path for AMC 12 worksheet', () => {
    const quest = {
      id: 'amc12-ch4-complex-numbers',
      chapterId: 'amc12-ch4-complex-numbers',
      level: 'AMC 12',
      grade: 12
    };

    const path = getWorksheetSolutionPath(quest);
    expect(path).toBe('/solution/amc/12/amc12-ch4-complex-numbers');

    const url = getWorksheetSolutionUrl(quest, 'https://awesomemathj.web.app');
    expect(url).toBe('https://awesomemathj.web.app/solution/amc/12/amc12-ch4-complex-numbers');
  });

  it('should generate canonical deep link path for Kurikulum Merdeka worksheet', () => {
    const quest = {
      id: 'smp8-bab2-teorema-pythagoras',
      chapterId: 'smp8-bab2-teorema-pythagoras',
      grade: 8
    };

    const path = getWorksheetSolutionPath(quest);
    expect(path).toBe('/solution/8/smp8-bab2-teorema-pythagoras');

    const url = getWorksheetSolutionUrl(quest, 'https://awesomemathj.web.app');
    expect(url).toBe('https://awesomemathj.web.app/solution/8/smp8-bab2-teorema-pythagoras');
  });

  it('should render official AMC competition header and student metadata box', () => {
    const amcQuest = {
      id: 'amc8-ch1-permutations',
      chapterId: 'amc8-ch1-permutations',
      title: 'Permutasi & Kombinatorika',
      chapterTitle: 'Permutasi & Kombinatorika',
      level: 'AMC 8',
      grade: 8,
      levelTitle: 'AMC 8: Fondasi Kompetisi',
      trackLabel: 'Kombinatorika',
      studentName: 'Budi Santoso',
      questions: [
        {
          id: 'q1',
          type: 'short_answer',
          problem: 'Berapa banyak susunan 3 huruf dari kata MATH?',
          answer: '24'
        },
        {
          id: 'q2',
          type: 'essay',
          source: 'AMC 8 Proof',
          problem: 'Buktikan bahwa $n! > 2^n$ untuk $n \\ge 4$.',
          answer: 'Terbukti'
        }
      ]
    };

    const html = renderToString(
      React.createElement(
        MemoryRouter,
        null,
        React.createElement(PrintableWorksheet, { quest: amcQuest })
      )
    );

    // Official AMC Header
    expect(html).toContain('LEMBAR SOAL LATIHAN OLIMPIADE AMC');
    expect(html).toContain('AMC 8: Fondasi Kompetisi');

    // Student metadata box
    expect(html).toContain('NAMA SISWA:');
    expect(html).toContain('Budi Santoso');
    expect(html).toContain('KELAS / JENJANG:');
    expect(html).toContain('AMC 8');
    expect(html).toContain('WAKTU PENGERJAAN:');
    expect(html).toContain('NILAI AKHIR:');

    // Non-MCQ student answer boxes
    expect(html).toContain('KOTAK JAWABAN AKHIR SISWA:');
    expect(html).toContain('KESIMPULAN JAWABAN AKHIR:');

    // Problem statements rendered from q.problem
    expect(html).toContain('Berapa banyak susunan 3 huruf dari kata MATH?');
    expect(html).toContain('Buktikan bahwa');

    // Scratch workspace with guidelines
    expect(html).toContain('Ruang coretan hitungan siswa:');
    expect(html).toContain('Ruang uraian langkah penyelesaian &amp; pembuktian siswa:');

    // Scannable QR code block
    expect(html).toContain('KUNCI &amp; PEMBAHASAN ONLINE');
    expect(html).toContain('Pindai dengan Kamera HP');
    expect(html).toContain('<svg');

    // CSS print break protection
    expect(html).toContain('worksheet-question-item');
    expect(html).toContain('break-inside:avoid');
    expect(html).toContain('page-break-inside:avoid');
  });

  it('should render standard Kurikulum Merdeka header when quest is not AMC', () => {
    const k12Quest = {
      id: 'sd4-bab1-bilangan-cacah',
      chapterId: 'sd4-bab1-bilangan-cacah',
      title: 'Bilangan Cacah',
      grade: 4,
      studentName: 'Siti Rahma',
      questions: [
        {
          id: 'q1',
          question: 'Nilai tempat angka 5 pada 5.432 adalah...',
          options: [
            { key: 'A', text: 'Ribuan' },
            { key: 'B', text: 'Ratusan' }
          ]
        }
      ]
    };

    const html = renderToString(
      React.createElement(
        MemoryRouter,
        null,
        React.createElement(PrintableWorksheet, { quest: k12Quest })
      )
    );

    expect(html).toContain('LEMBAR LATIHAN &amp; PR MATEMATIKA MANDIRI');
    expect(html).toContain('Kelas 4');
    expect(html).toContain('Ribuan');
  });
});

describe('Milestone M4: QueryRedirectHandler & Routing Integrity', () => {
  it('should redirect view=worksheet with questId to /worksheet/:questId', () => {
    const params = new URLSearchParams('view=worksheet&questId=quest-2026-xyz');
    const target = resolveQueryRedirect(params, '/');
    expect(target).toBe('/worksheet/quest-2026-xyz');
  });

  it('should redirect view=worksheet without questId to /worksheet', () => {
    const params = new URLSearchParams('view=worksheet');
    const target = resolveQueryRedirect(params, '/');
    expect(target).toBe('/worksheet');
  });

  it('should redirect AMC solution links with mode=amc, level, and chapter to /solution/amc/:level/:chapterId', () => {
    const params8 = new URLSearchParams('solution=1&mode=amc&level=8&chapter=amc8-ch1-permutations');
    expect(resolveQueryRedirect(params8, '/')).toBe('/solution/amc/8/amc8-ch1-permutations');

    const params10 = new URLSearchParams('pembahasan=1&mode=amc&level=10&chapter=amc10-ch1-advanced-combinatorics');
    expect(resolveQueryRedirect(params10, '/')).toBe('/solution/amc/10/amc10-ch1-advanced-combinatorics');

    const params12 = new URLSearchParams('solution=1&mode=amc&level=12&chapter=amc12-ch1-advanced-recursion-states');
    expect(resolveQueryRedirect(params12, '/')).toBe('/solution/amc/12/amc12-ch1-advanced-recursion-states');
  });

  it('should redirect AMC solution links when chapterId starts with amc even if mode is omitted', () => {
    const params = new URLSearchParams('pembahasan=1&level=8&chapter=amc8-ch1-permutations');
    expect(resolveQueryRedirect(params, '/')).toBe('/solution/amc/8/amc8-ch1-permutations');
  });

  it('should redirect standard K-12 solution links to /solution/:grade/:chapterId', () => {
    const params = new URLSearchParams('pembahasan=1&grade=9&chapter=smp9-bab1-perpangkatan');
    expect(resolveQueryRedirect(params, '/')).toBe('/solution/9/smp9-bab1-perpangkatan');

    const paramsAlt = new URLSearchParams('solution=1&grade=5&chapter=sd5-bab2-pecahan');
    expect(resolveQueryRedirect(paramsAlt, '/')).toBe('/solution/5/sd5-bab2-pecahan');
  });

  it('should redirect student questId links to /quest/:questId', () => {
    const params = new URLSearchParams('questId=quest-assignment-889');
    expect(resolveQueryRedirect(params, '/')).toBe('/quest/quest-assignment-889');
  });

  it('should return null when already on subpaths (not root /)', () => {
    const params = new URLSearchParams('view=worksheet&questId=123');
    expect(resolveQueryRedirect(params, '/worksheet/123')).toBeNull();
  });

  it('should return null when searchParams contain no matching redirect keys', () => {
    const params = new URLSearchParams('tab=overview&lang=id');
    expect(resolveQueryRedirect(params, '/')).toBeNull();
  });

  it('should verify QueryRedirectHandler.resolve is statically exposed on the component', () => {
    expect(typeof QueryRedirectHandler.resolve).toBe('function');
    const result = QueryRedirectHandler.resolve(new URLSearchParams('view=worksheet&questId=test'));
    expect(result).toBe('/worksheet/test');
  });
});
