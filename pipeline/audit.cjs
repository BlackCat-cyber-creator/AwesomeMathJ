const fs = require('fs');
const path = require('path');

const grades = [4, 5, 6, 7, 8, 9, 10, 11, 12];
let totalBab = 0;
let totalSoal = 0;

console.log('================ AUDIT STATUS SOAL SEMUA KELAS ================');
console.log('Grade\t| Chapters\t| Questions\t| Status');
console.log('----------------------------------------------------------------');

for (const g of grades) {
  const filePath = path.join(__dirname, `../src/data/grades/grade${g}.js`);
  if (!fs.existsSync(filePath)) {
    console.log(`Kelas ${g}\t| 0\t\t| 0\t\t| File Not Found`);
    continue;
  }
  const raw = fs.readFileSync(filePath, 'utf8');
  let data;
  try {
    const jsonMatch = raw.match(/export\s+const\s+\w+\s*=\s*(\{[\s\S]*\});?\s*$/);
    if (jsonMatch) {
      const vm = require('vm');
      data = vm.runInNewContext(`(${jsonMatch[1]})`, Object.create(null), { timeout: 2000 });
    }
  } catch (e) {
    console.log(`Kelas ${g}\t| ERROR parsing: ${e.message}`);
    continue;
  }

  if (!data || !data.chapters) {
    console.log(`Kelas ${g}\t| Invalid structure`);
    continue;
  }

  const numChapters = data.chapters.length;
  let qCount = 0;
  let all20 = true;
  for (const ch of data.chapters) {
    const chQ = (ch.questions || []).length;
    qCount += chQ;
    if (chQ !== 20) all20 = false;
  }
  const target = numChapters * 20;
  const status = qCount === target ? '✅ COMPLETE (20/bab)' : `⏳ NEED EXPANSION (${qCount}/${target})`;
  console.log(`Kelas ${g}\t| ${numChapters} Bab\t| ${qCount} Soal\t| ${status}`);
  totalBab += numChapters;
  totalSoal += qCount;
}

console.log('================================================================');
console.log(`TOTAL:\t| ${totalBab} Bab\t| ${totalSoal} / ${totalBab * 20} Soal\t| ${totalSoal === totalBab * 20 ? '🎉 ALL 1,000 COMPLETE' : `Remaining: ${totalBab * 20 - totalSoal} Soal`}`);
