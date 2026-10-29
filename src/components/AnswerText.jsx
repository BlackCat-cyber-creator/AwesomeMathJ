import React from 'react';
import { MathText } from './MathRenderer';
import { getQuestionKind } from '../utils/answerCheck';

/**
 * Menampilkan satu jawaban (milik murid atau kunci). Huruf opsi ditulis terpisah
 * dari teks opsi agar tidak ikut dirender sebagai rumus.
 */
export function AnswerText({ question, value }) {
  if (value === undefined || value === null || String(value).trim() === '') {
    return <span>— (kosong)</span>;
  }
  if (getQuestionKind(question) === 'mcq') {
    const opt = (question.options || []).find((o) => o.key === value);
    return (
      <span>
        <strong>{value}.</strong> {opt && <MathText text={opt.text} />}
      </span>
    );
  }
  return <MathText text={String(value)} />;
}

export default AnswerText;
