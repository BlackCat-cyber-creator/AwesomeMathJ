/**
 * Database Modul Kompetisi Matematika AMC (AMC 8, AMC 10, AMC 12)
 * 
 * Code-Splitting & Caching:
 * - Metadata ringan & index bab dimuat seketika (instant navigation)
 * - Butir soal lengkap & pembahasan diimpor dinamis saat modul dibuka
 */

import { AMC_LEVELS_METADATA, ALL_AMC_CHAPTERS_INDEX } from './amcMetadata.js';

export { AMC_LEVELS_METADATA, ALL_AMC_CHAPTERS_INDEX };

export const amcLoaders = {
  8: () => import('./amc8Data.js').then((m) => m.amc8Data),
  10: () => import('./amc10Data.js').then((m) => m.amc10Data),
  12: () => import('./amc12Data.js').then((m) => m.amc12Data),
};

const amcCache = new Map();

/**
 * Normalizes input level (e.g. 8, '8', 'AMC 8', 'AMC 10') to number (8, 10, 12).
 * Safely returns NaN for non-competition levels or invalid inputs.
 */
export function normalizeAmcLevel(level) {
  if (level === null || level === undefined || typeof level === 'boolean') return NaN;
  if (typeof level === 'number') {
    return Number.isFinite(level) ? level : NaN;
  }
  if (typeof level !== 'string') return NaN;
  const str = level.trim();
  if (!str) return NaN;
  const match = str.match(/^(?:amc\s*)?(8|10|12)$/i);
  if (match) {
    return Number(match[1]);
  }
  if (/^\d+$/.test(str)) {
    return Number(str);
  }
  return NaN;
}

/**
 * Memuat dataset lengkap modul AMC berdasarkan level (8, 10, atau 12)
 */
export async function getAmcModuleData(level) {
  const lvlNum = normalizeAmcLevel(level);
  if (amcCache.has(lvlNum)) {
    return amcCache.get(lvlNum);
  }
  const loader = amcLoaders[lvlNum];
  if (!loader) return null;
  const data = await loader();
  amcCache.set(lvlNum, data);
  return data;
}

/**
 * Mengambil data modul yang sudah di-cache secara sinkron (jika ada)
 */
export function getLoadedAmcModuleData(level) {
  const lvlNum = normalizeAmcLevel(level);
  return amcCache.get(lvlNum) || null;
}

/**
 * Mencari data bab dan kunci pembahasan AMC lengkap berdasarkan level & chapterId
 */
export async function getAmcChapterSolutionData(level, chapterId) {
  if (!level || !chapterId || typeof chapterId !== 'string') return null;
  const moduleObj = await getAmcModuleData(level);
  if (!moduleObj || !moduleObj.chapters) return null;
  const chapter = moduleObj.chapters.find((ch) => ch.id === chapterId || (Array.isArray(ch.aliases) && ch.aliases.includes(chapterId)));
  if (!chapter) return null;
  return {
    ...chapter,
    level: moduleObj.level,
    levelTitle: moduleObj.title,
    badge: `AMC ${moduleObj.level}`
  };
}

/**
 * Lightweight synchronous AMC curriculum index
 */
export const AMC_CURRICULUM_DATA = AMC_LEVELS_METADATA.map((meta) => {
  const chapters = ALL_AMC_CHAPTERS_INDEX.filter((c) => c.level === meta.level);
  return {
    ...meta,
    chapters
  };
});
