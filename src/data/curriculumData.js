/**
 * Database Kurikulum Matematika Lengkap Kurikulum Merdeka (Kelas 4 SD - 12 SMA)
 *
 * Optimized with Code-Splitting:
 * - Lightweight metadata and chapter index are loaded immediately
 * - Individual grade questions (1,100 total) are loaded on-demand via dynamic imports
 */

import { GRADE_METADATA, ALL_CHAPTERS_INDEX } from "./chapterIndex.js";

export { GRADE_METADATA, ALL_CHAPTERS_INDEX };

export const EXAM_CATEGORIES = [
  { id: "ALL", label: "Semua Soal Latihan", badgeClass: "badge-subtle" }
];

export const gradeLoaders = {
  4: () => import("./grades/grade4.js").then((m) => m.grade4Data),
  5: () => import("./grades/grade5.js").then((m) => m.grade5Data),
  6: () => import("./grades/grade6.js").then((m) => m.grade6Data),
  7: () => import("./grades/grade7.js").then((m) => m.grade7Data),
  8: () => import("./grades/grade8.js").then((m) => m.grade8Data),
  9: () => import("./grades/grade9.js").then((m) => m.grade9Data),
  10: () => import("./grades/grade10.js").then((m) => m.grade10Data),
  11: () => import("./grades/grade11.js").then((m) => m.grade11Data),
  12: () => import("./grades/grade12.js").then((m) => m.grade12Data),
};

const gradeCache = new Map();

/**
 * Load full grade data on demand (returns cached promise/data once loaded)
 */
export async function getGradeData(grade) {
  const gNum = Number(grade);
  if (gradeCache.has(gNum)) {
    return gradeCache.get(gNum);
  }
  const loader = gradeLoaders[gNum];
  if (!loader) return null;
  const data = await loader();
  gradeCache.set(gNum, data);
  return data;
}

/**
 * Get synchronously loaded grade data if already cached, otherwise returns null
 */
export function getLoadedGradeData(grade) {
  return gradeCache.get(Number(grade)) || null;
}

/**
 * Lightweight synchronous curriculum index
 * Contains all metadata, grade info, and chapter titles/concepts without heavy questions array
 */
export const CURRICULUM_DATA = GRADE_METADATA.map((meta) => {
  const chapters = ALL_CHAPTERS_INDEX.filter((c) => c.grade === meta.grade);
  return {
    ...meta,
    chapters
  };
});

/**
 * Mencari data bab lengkap beserta kunci & pembahasan berdasarkan grade & chapterId
 */
export async function getChapterSolutionData(grade, chapterId) {
  if (!grade || !chapterId) return null;
  const gradeObj = await getGradeData(grade);
  if (!gradeObj || !gradeObj.chapters) return null;
  const chapter = gradeObj.chapters.find((ch) => ch.id === chapterId);
  if (!chapter) return null;
  return {
    ...chapter,
    grade: gradeObj.grade,
    level: gradeObj.level,
    phase: gradeObj.phase
  };
}
