/**
 * answerCheck:
 * Pemeriksa jawaban yang dipakai bersama oleh buku saku (AMC), pemutar PR murid,
 * dan rekap guru: pilihan ganda (A–D), isian singkat, dan esai.
 */

function isNumericString(str) {
  return /^[+-]?(?:\d+(?:\.\d+)?|\.\d+)(?:\/[+-]?(?:\d+(?:\.\d+)?|\.\d+))?$/.test(str);
}

function parseNumericValue(str) {
  if (!str) return NaN;
  const fracMatch = str.match(/^([+-]?\d+(?:\.\d+)?)\/([+-]?\d+(?:\.\d+)?)$/);
  if (fracMatch) {
    const num = parseFloat(fracMatch[1]);
    const den = parseFloat(fracMatch[2]);
    if (den !== 0) return num / den;
  }
  return parseFloat(str);
}

/**
 * Evaluasi jawaban soal AMC (short answer):
 * - Normalisasi spasi dan koma desimal
 * - Pencocokan eksak terhadap answer atau acceptedAnswers
 * - Kesetaraan numerik & pecahan (misal: "36.0" === "36", "0.75" === "3/4", "0,75" === "3/4")
 * - Menolak substring false-positives (misal: "123" vs "1")
 */
export function evaluateAmcAnswer(rawInput, q) {
  if (!rawInput || !q) return false;
  const cleanInput = String(rawInput).trim().toLowerCase().replace(/\s+/g, '').replace(/,/g, '.');
  if (!cleanInput) return false;

  const validAnswers = [
    String(q.answer ?? '').toLowerCase().trim(),
    ...(q.acceptedAnswers || []).map(a => String(a ?? '').toLowerCase().trim())
  ].filter(Boolean);

  if (validAnswers.length === 0) return false;

  const isInputNumeric = isNumericString(cleanInput);
  const inputNum = isInputNumeric ? parseNumericValue(cleanInput) : NaN;

  return validAnswers.some(ans => {
    const cleanAns = ans.replace(/\s+/g, '').replace(/,/g, '.');
    if (cleanInput === cleanAns) return true;
    if (isInputNumeric && isNumericString(cleanAns)) {
      const ansNum = parseNumericValue(cleanAns);
      if (!isNaN(inputNum) && !isNaN(ansNum) && Math.abs(inputNum - ansNum) < 1e-9) {
        return true;
      }
    }
    return false;
  });
}

/**
 * Jenis soal: 'mcq' (punya opsi), 'short_answer' (punya jawaban akhir, termasuk
 * soal uraian AMC), atau 'essay' (tanpa jawaban akhir, dinilai guru).
 */
export function getQuestionKind(q) {
  if (!q) return 'mcq';
  if (Array.isArray(q.options) && q.options.length > 0) return 'mcq';
  if (q.answer === undefined || q.answer === null || String(q.answer).trim() === '') return 'essay';
  return 'short_answer';
}

/**
 * Nilai satu jawaban. Mengembalikan true/false, atau null untuk esai
 * (tidak dinilai otomatis).
 */
export function checkAnswer(q, response) {
  const kind = getQuestionKind(q);
  if (kind === 'essay') return null;
  if (response === null || response === undefined || String(response).trim() === '') return false;
  if (kind === 'mcq') return response === q.correctAnswer;
  return evaluateAmcAnswer(response, q);
}

/** Kunci jawaban: huruf opsi benar atau jawaban akhir. */
export function correctValue(q) {
  return getQuestionKind(q) === 'mcq' ? q.correctAnswer : q.answer;
}

/**
 * Rekap nilai: hanya soal yang bisa dinilai otomatis yang dihitung.
 * responses: { [questionIndex]: string }
 */
export function scoreResponses(questions, responses) {
  let correct = 0;
  let gradable = 0;
  const results = questions.map((q, i) => {
    const isCorrect = checkAnswer(q, responses[i]);
    if (isCorrect !== null) {
      gradable++;
      if (isCorrect) correct++;
    }
    return isCorrect;
  });
  const score = gradable > 0 ? Math.round((correct / gradable) * 100) : 0;
  return { correct, gradable, score, results };
}

/**
 * Jawaban murid per soal. Mendukung format baru ({ responses, results })
 * dan format lama ({ [index]: { selected, isCorrect } }).
 */
export function readAnswers(quest) {
  const answers = quest.answers || {};
  if (answers.responses) {
    return quest.questions.map((_, i) => ({
      response: answers.responses[i] ?? '',
      isCorrect: answers.results ? answers.results[i] : null
    }));
  }
  return quest.questions.map((_, i) => ({
    response: answers[i]?.selected ?? '',
    isCorrect: answers[i] ? answers[i].isCorrect : null
  }));
}
