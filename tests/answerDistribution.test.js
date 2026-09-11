import { describe, it, expect } from 'vitest';
import { grade4Data } from '../src/data/grades/grade4';
import { grade5Data } from '../src/data/grades/grade5';
import { grade6Data } from '../src/data/grades/grade6';
import { grade7Data } from '../src/data/grades/grade7';
import { grade8Data } from '../src/data/grades/grade8';
import { grade9Data } from '../src/data/grades/grade9';
import { grade10Data } from '../src/data/grades/grade10';
import { grade11Data } from '../src/data/grades/grade11';
import { grade12Data } from '../src/data/grades/grade12';

describe('Answer Distribution and Mathematical Integrity Tests', () => {
  const allGradeData = [
    grade4Data,
    grade5Data,
    grade6Data,
    grade7Data,
    grade8Data,
    grade9Data,
    grade10Data,
    grade11Data,
    grade12Data
  ];

  it('should have exactly 1,100 questions across 55 chapters', () => {
    let totalChapters = 0;
    let totalQuestions = 0;
    for (const g of allGradeData) {
      totalChapters += g.chapters.length;
      for (const ch of g.chapters) {
        totalQuestions += (ch.questions || []).length;
      }
    }
    expect(totalChapters).toBe(55);
    expect(totalQuestions).toBe(1100);
  });

  it('should have perfectly balanced overall distribution (exactly 25% A, B, C, D)', () => {
    const counts = { A: 0, B: 0, C: 0, D: 0 };
    for (const g of allGradeData) {
      for (const ch of g.chapters) {
        for (const q of ch.questions) {
          counts[q.correctAnswer] = (counts[q.correctAnswer] || 0) + 1;
        }
      }
    }
    expect(counts.A).toBe(275);
    expect(counts.B).toBe(275);
    expect(counts.C).toBe(275);
    expect(counts.D).toBe(275);
  });

  it('should have balanced keys in every chapter (5 of each letter per 20 questions)', () => {
    for (const g of allGradeData) {
      for (const ch of g.chapters) {
        const counts = { A: 0, B: 0, C: 0, D: 0 };
        for (const q of ch.questions) {
          counts[q.correctAnswer] = (counts[q.correctAnswer] || 0) + 1;
        }
        expect(counts.A, `Grade ${g.grade} ${ch.id} count of A`).toBe(5);
        expect(counts.B, `Grade ${g.grade} ${ch.id} count of B`).toBe(5);
        expect(counts.C, `Grade ${g.grade} ${ch.id} count of C`).toBe(5);
        expect(counts.D, `Grade ${g.grade} ${ch.id} count of D`).toBe(5);
      }
    }
  });

  it('should not repeat the same answer key more than 2 times consecutively in any chapter', () => {
    for (const g of allGradeData) {
      for (const ch of g.chapters) {
        const keys = ch.questions.map(q => q.correctAnswer);
        for (let i = 2; i < keys.length; i++) {
          const threeInRow = keys[i] === keys[i - 1] && keys[i] === keys[i - 2];
          expect(threeInRow, `Run of 3 identical keys in Grade ${g.grade} ${ch.id} at Q#${i+1}`).toBe(false);
        }
      }
    }
  });

  it('should have valid options [A, B, C, D] and synchronised bestSolution for every question', () => {
    for (const g of allGradeData) {
      for (const ch of g.chapters) {
        for (const q of ch.questions) {
          // Option keys must be ABCD
          expect(q.options.map(o => o.key)).toEqual(['A', 'B', 'C', 'D']);

          // Correct option must exist and have text
          const correctOpt = q.options.find(o => o.key === q.correctAnswer);
          expect(correctOpt, `Missing correct option in ${q.id}`).toBeDefined();
          expect(correctOpt.text.trim().length).toBeGreaterThan(0);

          // Solution must reference the correct option
          const sol = q.bestSolution || '';
          if (/Opsi\s+([A-D])/i.test(sol)) {
            const match = sol.match(/Opsi\s+([A-D])/i);
            expect(match[1].toUpperCase(), `bestSolution mismatch in ${q.id}`).toBe(q.correctAnswer);
          }
        }
      }
    }
  });
});
