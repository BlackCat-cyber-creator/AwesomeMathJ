/**
 * Bangun ulang src/data/chapterIndex.js dari data kelas (src/data/grades/gradeX.js).
 * Indeks ringan ini dipakai navigasi, pencarian, dan Studio Guru tanpa memuat 1.100 soal.
 * Jalankan setiap kali judul/konsep/tips bab berubah:
 *   node pipeline/build_chapter_index.mjs
 */
import fs from 'fs';
import path from 'path';
import { ROOT, GRADES, loadGrade } from './migrations/lib.mjs';
import { GRADE_METADATA } from '../src/data/chapterIndex.js';

export async function buildChapterIndex() {
  const metaByGrade = Object.fromEntries(GRADE_METADATA.map((g) => [g.grade, g]));
  const entries = [];
  for (const grade of GRADES) {
    const { data } = await loadGrade(grade);
    const meta = metaByGrade[grade];
    data.chapters.forEach((ch, i) => {
      entries.push({
        id: ch.id,
        grade,
        level: meta.level,
        phase: meta.phase,
        chapterIndex: i,
        title: ch.title,
        track: ch.track ?? null,
        ...(ch.trackLabel ? { trackLabel: ch.trackLabel } : {}),
        coreConcepts: ch.summary?.coreConcepts || [],
        tutorTip: ch.summary?.tutorTip || '',
        questionCount: (ch.questions || []).length
      });
    });
  }
  return entries;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const file = path.join(ROOT, 'src/data/chapterIndex.js');
  const src = fs.readFileSync(file, 'utf8');
  const marker = 'export const ALL_CHAPTERS_INDEX = ';
  const head = src.slice(0, src.indexOf(marker));
  const entries = await buildChapterIndex();
  fs.writeFileSync(file, `${head}${marker}${JSON.stringify(entries, null, 2)};\n`);
  console.log(`chapterIndex.js diperbarui: ${entries.length} bab`);
}
