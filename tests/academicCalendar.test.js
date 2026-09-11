import { describe, it, expect } from 'vitest';
import { getCurrentSemester, getRecommendedChapter } from '../src/data/academicCalendar';

describe('Academic Calendar and Pacing', () => {
  it('should detect Semester 1 in August', () => {
    const augDate = new Date(2026, 7, 20); // 20 August 2026
    const sem = getCurrentSemester(augDate);
    expect(sem.semester).toBe(1);
    expect(sem.shortLabel).toBe('Sem 1');
  });

  it('should detect Semester 2 in March', () => {
    const marchDate = new Date(2026, 2, 15); // 15 March 2026
    const sem = getCurrentSemester(marchDate);
    expect(sem.semester).toBe(2);
    expect(sem.shortLabel).toBe('Sem 2');
  });

  it('should provide recommended chapter for Grade 4', () => {
    const rec = getRecommendedChapter(4, new Date(2026, 7, 1));
    expect(rec).toBeDefined();
    expect(rec.chapterIndex).toBeGreaterThanOrEqual(0);
    expect(rec.pacing).toBeDefined();
  });
});
