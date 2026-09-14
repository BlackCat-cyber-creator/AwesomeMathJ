const fs = require('fs');
const path = require('path');
const { getGradeData } = require('../src/data/curriculumData.js');
const { getVisualConfig } = require('../src/components/visuals/registry/index.js');

// Parse CLI arguments
const args = process.argv.slice(2);
const gradeFilter = args.find(a => a.startsWith('--grade='))?.split('=')[1] || (args.includes('--grade') ? args[args.indexOf('--grade') + 1] : null);
const exportJsonPath = args.find(a => a.startsWith('--export='))?.split('=')[1] || (args.includes('--export') ? args[args.indexOf('--export') + 1] : null);
const verbose = args.includes('--verbose') || args.includes('-v');

// Keyword definitions
const EXPLICIT_VISUAL_KEYWORDS = [
  'gambar di samping',
  'gambar di bawah',
  'perhatikan gambar',
  'diagram di samping',
  'diagram di bawah',
  'perhatikan diagram',
  'grafik di bawah',
  'grafik di samping',
  'daerah yang diarsir',
  'bagian yang diarsir',
  'timbangan di atas',
  'garis bilangan berikut'
];

const SECONDARY_KEYWORDS = [
  'gambar',
  'diagram batang',
  'diagram lingkaran',
  'grafik fungsi',
  'koordinat kartesius',
  'segitiga siku-siku',
  'persegi panjang',
  'trapesium',
  'lingkaran',
  'balok',
  'kubus',
  'tabung',
  'kerucut',
  'prisma'
];

async function runAudit() {
  console.log('================================================================');
  console.log('         AWESOMEMATHJ: QUESTION VISUAL AUDIT TOOL              ');
  console.log('================================================================\n');

  const grades = gradeFilter ? [Number(gradeFilter)] : [4, 5, 6, 7, 8, 9, 10, 11, 12];
  let grandTotal = 0;
  let totalWithVisual = 0;
  let totalHighPriority = 0;
  let totalMediumPriority = 0;

  const missingList = [];

  for (const g of grades) {
    const data = await getGradeData(g);
    if (!data) continue;

    let gradeTotal = 0;
    let gradeVisual = 0;
    let gradeHigh = 0;
    let gradeMedium = 0;

    for (const ch of data.chapters) {
      for (const q of (ch.questions || [])) {
        grandTotal++;
        gradeTotal++;

        const config = getVisualConfig(q);
        if (config) {
          totalWithVisual++;
          gradeVisual++;
          continue;
        }

        const text = (q.question || '').toLowerCase();
        const highMatches = EXPLICIT_VISUAL_KEYWORDS.filter(kw => text.includes(kw));
        const medMatches = SECONDARY_KEYWORDS.filter(kw => text.includes(kw));

        if (highMatches.length > 0) {
          totalHighPriority++;
          gradeHigh++;
          missingList.push({
            id: q.id,
            grade: g,
            chapterId: ch.id,
            chapterTitle: ch.title,
            priority: 'HIGH',
            triggers: highMatches,
            question: q.question,
            options: q.options,
            correctAnswer: q.correctAnswer,
            hint: q.hint,
            bestSolution: q.bestSolution
          });
        } else if (medMatches.length > 0) {
          totalMediumPriority++;
          gradeMedium++;
          missingList.push({
            id: q.id,
            grade: g,
            chapterId: ch.id,
            chapterTitle: ch.title,
            priority: 'MEDIUM',
            triggers: medMatches,
            question: q.question,
            options: q.options,
            correctAnswer: q.correctAnswer,
            hint: q.hint,
            bestSolution: q.bestSolution
          });
        }
      }
    }

    const pct = Math.round((gradeVisual / gradeTotal) * 100);
    console.log(`Kelas ${g.toString().padEnd(2)}: ${gradeTotal} Soal | Visual: ${gradeVisual.toString().padStart(3)} (${pct}%) | ⚠️ Butuh (High): ${gradeHigh.toString().padStart(2)} | 💡 Rekomendasi (Med): ${gradeMedium.toString().padStart(2)}`);
  }

  console.log('\n----------------------------------------------------------------');
  console.log(`TOTAL SOAL DIANALISIS : ${grandTotal}`);
  console.log(`SUDAH PUNYA VISUAL    : ${totalWithVisual} (${Math.round((totalWithVisual / grandTotal) * 100)}%)`);
  console.log(`BUTUH VISUAL (HIGH)   : ${totalHighPriority} (Soal eksplisit merujuk ke gambar/diagram)`);
  console.log(`REKOMENDASI (MEDIUM)  : ${totalMediumPriority} (Topik geometri, koordinat, pecahan, statistik)`);
  console.log('----------------------------------------------------------------\n');

  if (verbose || gradeFilter) {
    console.log('=== DAFTAR SOAL HIGH PRIORITY (BUTUH DIAGRAM SEGERA) ===');
    const highList = missingList.filter(m => m.priority === 'HIGH');
    if (highList.length === 0) {
      console.log('Tidak ada soal dengan kategori HIGH yang kekurangan visual.');
    } else {
      highList.forEach((m, idx) => {
        console.log(`\n[${idx + 1}] ID: ${m.id} (Kelas ${m.grade} - ${m.chapterTitle})`);
        console.log(`    Pemicu : ${m.triggers.join(', ')}`);
        console.log(`    Soal   : ${m.question.replace(/\n/g, ' ').slice(0, 140)}...`);
      });
    }
  }

  if (exportJsonPath) {
    const outPath = path.resolve(process.cwd(), exportJsonPath);
    fs.writeFileSync(outPath, JSON.stringify(missingList, null, 2), 'utf8');
    console.log(`\n✅ Data ${missingList.length} soal berhasil diekspor ke: ${outPath}`);
    console.log(`   Gunakan file ini sebagai input batch untuk AI pembuat diagram.`);
  }
}

runAudit().catch(err => {
  console.error('Audit Error:', err);
  process.exit(1);
});
