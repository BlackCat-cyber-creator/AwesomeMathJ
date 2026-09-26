import { performance } from 'perf_hooks';
import { CURRICULUM_DATA } from './src/data/curriculumData.js';

// Current implementation
function getDefaultChapterForGrade(grade) {
  const gData = CURRICULUM_DATA.find((g) => g.grade === Number(grade));
  if (gData && gData.chapters && gData.chapters.length > 0) {
    return gData.chapters[0].id;
  }
  return "sd4-bab1-bilangan-cacah";
}

// Optimized implementation
const DEFAULT_CHAPTER_MAP = CURRICULUM_DATA.reduce((acc, g) => {
  if (g.chapters && g.chapters.length > 0) {
    acc[g.grade] = g.chapters[0].id;
  }
  return acc;
}, {});

function getDefaultChapterForGradeOptimized(grade) {
  return DEFAULT_CHAPTER_MAP[Number(grade)] || "sd4-bab1-bilangan-cacah";
}

const grades = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const iterations = 1000000;

let start = performance.now();
for (let i = 0; i < iterations; i++) {
  getDefaultChapterForGrade(grades[i % grades.length]);
}
let end = performance.now();
console.log(`Original implementation took ${end - start} milliseconds`);

start = performance.now();
for (let i = 0; i < iterations; i++) {
  getDefaultChapterForGradeOptimized(grades[i % grades.length]);
}
end = performance.now();
console.log(`Optimized implementation took ${end - start} milliseconds`);
