/**
 * Migrasi: pindahkan konfigurasi gambar dari registry terpisah
 * (src/components/visuals/registry/gradeXRegistry.js) ke dalam objek soal
 * sebagai properti `visual`. Satu soal = satu sumber kebenaran, sehingga
 * gambar tidak bisa lagi "bergeser" ketika soal diurutkan ulang atau ditulis ulang.
 *
 * Sudah dijalankan (Oktober 2026); registry lama telah dihapus, jadi skrip ini
 * disimpan sebagai catatan dan tidak perlu dijalankan lagi.
 */
import path from 'path';
import { pathToFileURL } from 'url';
import { ROOT, GRADES, loadGrade, saveGrade, allQuestions } from './lib.mjs';

let moved = 0;
const orphans = [];
for (const grade of GRADES) {
  const regFile = path.join(ROOT, `src/components/visuals/registry/grade${grade}Registry.js`);
  const regMod = await import(pathToFileURL(regFile).href);
  const registry = regMod[`grade${grade}VisualRegistry`];
  const g = await loadGrade(grade);
  const used = new Set();
  for (const { q } of allQuestions(g.data)) {
    const key = q.visualId || q.id;
    if (!q.visual && registry[key]) {
      q.visual = registry[key];
      used.add(key);
      moved++;
    }
    delete q.visualId;
  }
  for (const key of Object.keys(registry)) if (!used.has(key)) orphans.push(key);
  saveGrade(g);
}
console.log(`Gambar dipindahkan ke soal: ${moved}`);
console.log(`Entri registry tanpa soal (dibuang): ${orphans.length ? orphans.join(', ') : '-'}`);
