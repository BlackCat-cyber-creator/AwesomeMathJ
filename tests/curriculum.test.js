import { describe, it, expect } from 'vitest';
import { 
  GRADE_METADATA, 
  ALL_CHAPTERS_INDEX, 
  CURRICULUM_DATA, 
  getGradeData, 
  getChapterSolutionData 
} from '../src/data/curriculumData';

describe('Curriculum Data and Dynamic Code-Splitting', () => {
  it('should have 9 grades in GRADE_METADATA', () => {
    expect(GRADE_METADATA).toHaveLength(9);
    expect(GRADE_METADATA.map(g => g.grade)).toEqual([4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });

  it('should have exactly 55 chapters in ALL_CHAPTERS_INDEX', () => {
    expect(ALL_CHAPTERS_INDEX).toHaveLength(55);
  });

  it('should have lightweight chapters in synchronous CURRICULUM_DATA', () => {
    expect(CURRICULUM_DATA).toHaveLength(9);
    const grade4 = CURRICULUM_DATA.find(g => g.grade === 4);
    expect(grade4).toBeDefined();
    expect(grade4.chapters).toHaveLength(6);
    expect(grade4.chapters[0].title).toBeDefined();
  });

  it('should dynamically load full questions for Grade 4', async () => {
    const data = await getGradeData(4);
    expect(data).toBeDefined();
    expect(data.grade).toBe(4);
    expect(data.chapters).toHaveLength(6);
    // Grade 4 Bab 1 has 20 questions
    expect(data.chapters[0].questions).toHaveLength(20);
    expect(data.chapters[0].questions[0].correctAnswer).toBeDefined();
  });

  it('should find chapter solution data by grade and chapterId', async () => {
    const solution = await getChapterSolutionData(4, 'sd4-bab1-bilangan-cacah');
    expect(solution).toBeDefined();
    expect(solution.title).toContain('Bilangan Cacah');
    expect(solution.questions).toHaveLength(20);
    expect(solution.grade).toBe(4);
  });

  it('should return null for non-existent chapter or grade', async () => {
    const invalidChapter = await getChapterSolutionData(4, 'non-existent-ch');
    expect(invalidChapter).toBeNull();

    const invalidGrade = await getChapterSolutionData(99, 'sd4-bab1-bilangan-cacah');
    expect(invalidGrade).toBeNull();
  });
});
