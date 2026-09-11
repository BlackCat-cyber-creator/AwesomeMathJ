const fs = require('fs');
const path = require('path');

const FORBIDDEN_WORDS = [
  /sir\s+jevon/i,
  /kemendikdasmen/i,
  /kemendikbud/i,
  /pusat\s+perbukuan/i,
  /sibi/i,
  /\[UH\]/i,
  /\[PAS\]/i,
  /\[PAT\]/i,
  /\[HOTS\]/i,
  /\[SMA FAVORIT\]/i
];

function checkBalance(str, delim) {
  let count = 0;
  let pos = 0;
  while ((pos = str.indexOf(delim, pos)) !== -1) {
    count++;
    pos += delim.length;
  }
  return count % 2 === 0;
}

function validateGradeFile(filePath) {
  const absPath = path.resolve(filePath);
  if (!fs.existsSync(absPath)) {
    return { ok: false, errors: [`File not found: ${filePath}`] };
  }

  const raw = fs.readFileSync(absPath, 'utf8');
  const errors = [];
  const warnings = [];

  // 1. Check forbidden words
  FORBIDDEN_WORDS.forEach(regex => {
    if (regex.test(raw)) {
      errors.push(`Violates sanitization policy: contains forbidden pattern '${regex}'`);
    }
  });

  // 2. Parse data safely without arbitrary eval
  let data;
  try {
    const jsonMatch = raw.match(/export\s+const\s+\w+\s*=\s*(\{[\s\S]*\});?\s*$/);
    if (jsonMatch) {
      const vm = require('vm');
      data = vm.runInNewContext(`(${jsonMatch[1]})`, Object.create(null), { timeout: 2000 });
    } else {
      errors.push("Could not extract exported grade data object.");
      return { ok: false, errors, warnings };
    }
  } catch (e) {
    errors.push(`Syntax / parsing error: ${e.message}`);
    return { ok: false, errors, warnings };
  }

  if (!data.grade || !data.chapters || !Array.isArray(data.chapters)) {
    errors.push("Invalid grade object: missing 'grade' or 'chapters' array.");
    return { ok: false, errors, warnings };
  }

  // 3. Validate chapters
  data.chapters.forEach((ch, chIdx) => {
    const chPrefix = `[Bab ${chIdx + 1} - ${ch.title || ch.id}]`;
    if (!ch.id || !ch.title) {
      errors.push(`${chPrefix} missing 'id' or 'title'`);
    }

    // Summary validation
    if (!ch.summary) {
      errors.push(`${chPrefix} missing 'summary' object`);
    } else {
      const { overview, coreConcepts, workedExamples, keyFormulas, misconceptions, tutorTip } = ch.summary;
      if (!overview || typeof overview !== 'string' || overview.length < 50) {
        errors.push(`${chPrefix} 'summary.overview' is missing or too short (< 50 chars)`);
      }
      if (!coreConcepts || !Array.isArray(coreConcepts) || coreConcepts.length < 2) {
        errors.push(`${chPrefix} 'summary.coreConcepts' must have at least 2 concepts`);
      }
      if (!workedExamples || !Array.isArray(workedExamples) || workedExamples.length < 1) {
        warnings.push(`${chPrefix} has no workedExamples`);
      }
      if (!keyFormulas || !Array.isArray(keyFormulas) || keyFormulas.length < 1) {
        warnings.push(`${chPrefix} has no keyFormulas`);
      }
      if (!misconceptions || !Array.isArray(misconceptions)) {
        warnings.push(`${chPrefix} missing misconceptions array`);
      }
      if (!tutorTip) {
        warnings.push(`${chPrefix} missing tutorTip`);
      }
    }

    // Questions validation
    if (!ch.questions || !Array.isArray(ch.questions) || ch.questions.length === 0) {
      errors.push(`${chPrefix} has no questions!`);
    } else {
      ch.questions.forEach((q, qIdx) => {
        const qPrefix = `${chPrefix} [Soal ${qIdx + 1}]`;
        if (!q.question) errors.push(`${qPrefix} missing 'question'`);
        if (!q.options || !Array.isArray(q.options) || q.options.length !== 4) {
          errors.push(`${qPrefix} must have exactly 4 options`);
        } else {
          const keys = q.options.map(o => o.key);
          if (!keys.includes(q.correctAnswer)) {
            errors.push(`${qPrefix} correctAnswer '${q.correctAnswer}' not found in options keys: [${keys.join(', ')}]`);
          }
        }
        if (!q.bestSolution) errors.push(`${qPrefix} missing 'bestSolution'`);
        if (q.question && !checkBalance(q.question, '$$')) {
          warnings.push(`${qPrefix} potentially unbalanced '$$' in question text`);
        }
      });
    }
  });

  return {
    ok: errors.length === 0,
    grade: data.grade,
    chaptersCount: data.chapters.length,
    totalQuestions: data.chapters.reduce((acc, c) => acc + (c.questions ? c.questions.length : 0), 0),
    errors,
    warnings
  };
}

if (require.main === module) {
  const target = process.argv[2] || 'src/data/grades/grade4.js';
  console.log(`\nValidating: ${target}...`);
  const result = validateGradeFile(target);
  if (result.ok) {
    console.log(`✅ VALIDATION PASSED!`);
    console.log(`   Grade: ${result.grade}`);
    console.log(`   Chapters: ${result.chaptersCount}`);
    console.log(`   Total Questions: ${result.totalQuestions}`);
    if (result.warnings.length > 0) {
      console.log(`   ⚠️ Warnings (${result.warnings.length}):`);
      result.warnings.forEach(w => console.log(`      - ${w}`));
    }
  } else {
    console.error(`❌ VALIDATION FAILED with ${result.errors.length} error(s):`);
    result.errors.forEach(e => console.error(`   - ${e}`));
    if (result.warnings.length > 0) {
      console.log(`   ⚠️ Warnings (${result.warnings.length}):`);
      result.warnings.forEach(w => console.log(`      - ${w}`));
    }
    process.exit(1);
  }
}

module.exports = { validateGradeFile };
