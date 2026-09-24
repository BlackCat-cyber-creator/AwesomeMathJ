import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { PrintableWorksheet } from '../src/components/PrintableWorksheet.jsx';
import { ALL_CHAPTERS_INDEX } from '../src/data/chapterIndex.js';
import { getGradeData } from '../src/data/curriculumData.js';
import { getAmcModuleData } from '../src/data/amc/amcData.js';

function renderWorksheet(props = {}) {
  return renderToString(
    React.createElement(
      MemoryRouter,
      null,
      React.createElement(PrintableWorksheet, props)
    )
  );
}

describe('PrintableWorksheet Error-Handling & Resilience', () => {
  it('should render gracefully when quest prop is null (empty state)', () => {
    const html = renderWorksheet({ quest: null });

    expect(html).toContain('Lembar Kerja Tidak Ditemukan');
    expect(html).toContain('Data soal untuk lembar kerja ini tidak ditemukan');
  });

  it('should render gracefully when quest prop is undefined', () => {
    const html = renderWorksheet({});

    expect(html).toContain('Lembar Kerja Tidak Ditemukan');
  });

  it('should render gracefully when quest is an empty object', () => {
    const html = renderWorksheet({ quest: {} });

    expect(html).toContain('LEMBAR LATIHAN &amp; PR MATEMATIKA MANDIRI');
    expect(html).toContain('Lembar Siswa');
    expect(html).toContain('NILAI AKHIR:');
  });

  it('should render gracefully when quest has empty questions array', () => {
    const emptyQuest = {
      id: 'test-empty',
      title: 'Bab Kosong',
      grade: 7,
      questions: []
    };

    const html = renderWorksheet({ quest: emptyQuest });

    expect(html).toContain('Bab Kosong');
    expect(html).toContain('Kelas 7');
    expect(html).toContain('mencakar hitungan');
  });

  it('should render question items with missing optional fields without crashing', () => {
    const malformedQuest = {
      id: 'malformed-1',
      title: 'Bab Soal Tidak Lengkap',
      grade: 5,
      questions: [
        { id: 'q1' }, // Missing question, type, options, etc.
        { id: 'q2', question: null },
        { id: 'q3', question: 'Tentukan nilai $x$.', type: undefined, options: null },
        { id: 'q4', question: 'Soal pecahan $\\frac{1}{2}$', type: 'short_answer' },
      ]
    };

    const html = renderWorksheet({ quest: malformedQuest });

    expect(html).toContain('1.');
    expect(html).toContain('2.');
    expect(html).toContain('3.');
    expect(html).toContain('4.');
    expect(html).toContain('KOTAK JAWABAN AKHIR SISWA:');
  });

  it('should render AMC competition format correctly with short_answer and essay types', () => {
    const amcQuest = {
      id: 'amc8-ch1-permutations',
      chapterId: 'amc8-ch1-permutations',
      level: 'AMC 8',
      levelTitle: 'AMC 8: Fondasi Kompetisi & Pemecahan Masalah',
      chapterTitle: 'Permutasi & Kombinatorika Dasar',
      trackLabel: 'Kombinatorika',
      timeLimit: 30,
      questions: [
        {
          id: 'q-amc-1',
          type: 'short_answer',
          source: 'AMC 8 2020 #14',
          question: 'Berapa banyak bilangan genap 3-digit?',
          options: null
        },
        {
          id: 'q-amc-2',
          type: 'essay',
          source: 'AMC 8 Proof',
          question: 'Buktikan bahwa $n^2$ selalu bernilai non-negatif.',
          options: undefined
        }
      ]
    };

    const html = renderWorksheet({ quest: amcQuest });

    expect(html).toContain('LEMBAR SOAL LATIHAN OLIMPIADE AMC');
    expect(html).toContain('AMC 8 2020 #14');
    expect(html).toContain('Esai / Pembuktian');
    expect(html).toContain('KOTAK JAWABAN AKHIR SISWA:');
    expect(html).toContain('KESIMPULAN JAWABAN AKHIR:');
    expect(html).toContain('Ruang uraian langkah penyelesaian &amp; pembuktian siswa:');
  });

  it('should safely handle malformed KaTeX expressions in questions and options', () => {
    const brokenLatexQuest = {
      id: 'broken-latex',
      title: 'Soal LaTeX Rusak',
      grade: 10,
      questions: [
        {
          id: 'q-broken',
          question: 'Rumus rusak $\\frac{1}{ dan $$\\sqrt{ yang tidak selesai',
          options: [
            { key: 'A', text: '$\\invalidMacro{123}$' },
            { key: 'B', text: 'Jawaban Normal 42' }
          ]
        }
      ]
    };

    expect(() => {
      renderWorksheet({ quest: brokenLatexQuest });
    }).not.toThrow();
  });

  it('should construct valid QR solution URLs for both standard and AMC chapters', () => {
    const amcQuest = {
      id: 'amc10-ch3-algebra',
      chapterId: 'amc10-ch3-algebra',
      level: 'AMC 10',
      grade: 10,
      questions: []
    };

    const html = renderWorksheet({ quest: amcQuest });

    expect(html).toContain('KUNCI &amp; PEMBAHASAN ONLINE');
    expect(html).toContain('<svg');
  });

  it('should verify all real curriculum and AMC chapters can be rendered in PrintableWorksheet without crash', async () => {
    // Test sample of K-12 chapters
    const sampleK12 = ALL_CHAPTERS_INDEX.slice(0, 5);
    for (const ch of sampleK12) {
      const gradeData = await getGradeData(ch.grade);
      const fullChapter = gradeData.chapters.find((c) => c.id === ch.id);
      expect(fullChapter).toBeDefined();

      const quest = {
        id: fullChapter.id,
        chapterId: fullChapter.id,
        chapterTitle: fullChapter.title,
        title: fullChapter.title,
        grade: ch.grade,
        trackLabel: fullChapter.trackLabel || null,
        questions: fullChapter.questions || [],
        studentName: 'Lembar Siswa'
      };

      expect(() => {
        renderWorksheet({ quest });
      }).not.toThrow();
    }

    // Test sample of AMC chapters
    for (const lvl of [8, 10, 12]) {
      const amcData = await getAmcModuleData(lvl);
      for (const ch of amcData.chapters) {
        const quest = {
          id: ch.id,
          chapterId: ch.id,
          chapterTitle: ch.title,
          title: ch.title,
          grade: lvl,
          level: `AMC ${lvl}`,
          levelTitle: amcData.title,
          trackLabel: ch.domain,
          questions: ch.questions || [],
          studentName: 'Lembar Siswa'
        };

        expect(() => {
          renderWorksheet({ quest });
        }).not.toThrow();
      }
    }
  });
});
