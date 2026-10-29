/**
 * Utilitas baca/tulis data kelas (src/data/grades/gradeX.js).
 * File data adalah JSON murni di balik `export const gradeXData = ...;`,
 * sehingga bisa diubah secara terprogram tanpa merusak format.
 */
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

export const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..');
export const GRADES = [4, 5, 6, 7, 8, 9, 10, 11, 12];

export function gradeFile(grade) {
  return path.join(ROOT, `src/data/grades/grade${grade}.js`);
}

export async function loadGrade(grade) {
  const file = gradeFile(grade);
  const src = fs.readFileSync(file, 'utf8');
  const name = `grade${grade}Data`;
  const marker = `export const ${name} = `;
  const idx = src.indexOf(marker);
  if (idx < 0) throw new Error(`${file}: tidak menemukan ${marker}`);
  const mod = await import(`${pathToFileURL(file).href}?t=${Date.now()}`);
  return { file, name, header: src.slice(0, idx), data: structuredClone(mod[name]) };
}

export function saveGrade({ file, name, header, data }) {
  fs.writeFileSync(file, `${header}export const ${name} = ${JSON.stringify(data, null, 2)};\n`);
}

export function allQuestions(data) {
  return data.chapters.flatMap((ch) => (ch.questions || []).map((q) => ({ ch, q })));
}
