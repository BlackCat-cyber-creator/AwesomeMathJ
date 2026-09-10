import React from 'react';
import { getVisualConfig } from './visuals/registry/index.js';
import { renderVisualEngine } from './visuals/engines/index.jsx';

/**
 * QuestionVisual:
 * Komponen utama render stimulus visual / diagram matematika responsif.
 * Memberikan visualisasi kontekstual (stimulus soal) yang 100% presisi dengan angka soal
 * tanpa membocorkan jawaban atau rumus penyelesaian.
 */
export function QuestionVisual({ question }) {
  if (!question) return null;

  const visualConfig = getVisualConfig(question);
  if (!visualConfig) return null;

  return renderVisualEngine(visualConfig, question);
}

export default QuestionVisual;
