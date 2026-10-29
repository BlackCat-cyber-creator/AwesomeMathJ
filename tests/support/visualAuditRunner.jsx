import { renderToStaticMarkup } from 'react-dom/server';
import { getVisualConfig } from '../../src/components/visuals/registry/index.js';
import { renderVisualEngine } from '../../src/components/visuals/engines/index.jsx';
import { visibleTextFromMarkup, numbersOnlyInVisual, findOutOfScope, leaksAnswer, leaksAnswerWords } from '../../src/utils/contentAudit.js';
import { grade4Data } from '../../src/data/grades/grade4.js';
import { grade5Data } from '../../src/data/grades/grade5.js';
import { grade6Data } from '../../src/data/grades/grade6.js';
import { grade7Data } from '../../src/data/grades/grade7.js';
import { grade8Data } from '../../src/data/grades/grade8.js';
import { grade9Data } from '../../src/data/grades/grade9.js';
import { grade10Data } from '../../src/data/grades/grade10.js';
import { grade11Data } from '../../src/data/grades/grade11.js';
import { grade12Data } from '../../src/data/grades/grade12.js';

export const ALL_GRADES = [grade4Data, grade5Data, grade6Data, grade7Data, grade8Data, grade9Data, grade10Data, grade11Data, grade12Data];

// Angka sumbu/grid yang dihasilkan engine dari props (bukan data soal)
function axisNumbers(config) {
  const p = config.props || {};
  const out = [];
  if (config.type === 'bar-chart') {
    const yMax = p.yMax ?? 20;
    const yStep = p.yStep ?? 5;
    for (let v = 0; v <= yMax; v += yStep) out.push(v);
  }
  if (config.type === 'cartesian-plot' || config.type === 'coordinate-point') {
    const [x0, x1] = p.xRange || [-6, 6];
    const [y0, y1] = p.yRange || [-6, 6];
    for (let v = Math.min(x0, y0); v <= Math.max(x1, y1); v++) out.push(Math.abs(v));
  }
  if (config.type === 'clock-angle') {
    for (let v = 1; v <= 12; v++) out.push(v);
  }
  if (config.type === 'number-line' && p.min !== undefined && p.max !== undefined) {
    for (let v = p.min; v <= p.max; v += p.step || 1) out.push(Math.abs(v));
  }
  return out;
}

export function auditQuestion(grade, chapter, q) {
  const result = {
    grade,
    chapterId: chapter.id,
    chapterTitle: chapter.title,
    id: q.id,
    question: q.question,
    outOfScope: findOutOfScope(grade, q.question),
    hasVisual: false,
    visualType: null,
    visualText: [],
    visualOnlyNumbers: [],
    answerLeak: false,
    renderError: null
  };
  const config = getVisualConfig(q);
  if (!config) return result;
  result.hasVisual = true;
  result.visualType = config.type;
  try {
    const markup = renderToStaticMarkup(renderVisualEngine(config, q));
    result.visualText = visibleTextFromMarkup(markup);
    const axis = axisNumbers(config);
    result.visualOnlyNumbers = numbersOnlyInVisual(q.question, result.visualText, axis);
    // Angka gambar yang hanya ada di opsi jawaban = potensi bocoran jawaban
    const correct = (q.options || []).find((o) => o.key === q.correctAnswer);
    result.answerLeak = leaksAnswer(q.question, correct && correct.text, result.visualText, axis)
      || leaksAnswerWords(q.question, correct && correct.text, result.visualText).length > 0;
  } catch (err) {
    result.renderError = String(err && err.message ? err.message : err);
  }
  return result;
}

export function auditAll() {
  const rows = [];
  for (const data of ALL_GRADES) {
    for (const ch of data.chapters) {
      for (const q of ch.questions || []) rows.push(auditQuestion(data.grade, ch, q));
    }
  }
  return rows;
}
