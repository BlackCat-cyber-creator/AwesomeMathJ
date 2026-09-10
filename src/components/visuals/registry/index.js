import { grade9VisualRegistry } from './grade9Registry.js';
import { grade8VisualRegistry } from './grade8Registry.js';
import { grade4VisualRegistry } from './grade4Registry.js';
import { grade5VisualRegistry } from './grade5Registry.js';
import { grade6VisualRegistry } from './grade6Registry.js';

// Gabungan seluruh registry visual bertahap
const MASTER_VISUAL_REGISTRY = {
  ...grade4VisualRegistry,
  ...grade5VisualRegistry,
  ...grade6VisualRegistry,
  ...grade8VisualRegistry,
  ...grade9VisualRegistry
};

/**
 * getVisualConfig:
 * Mengambil konfigurasi visual berdasarkan objek soal.
 * Memeriksa:
 * 1. question.visual langsung (jika didefinisikan dalam JSON soal)
 * 2. ID soal yang terdaftar di MASTER_VISUAL_REGISTRY
 */
export function getVisualConfig(question) {
  if (!question) return null;

  // 1. Properti deklaratif langsung pada objek soal
  if (question.visual && question.visual.type) {
    return question.visual;
  }

  // 2. Lookup berdasarkan ID soal
  const id = question.id || '';
  if (id && MASTER_VISUAL_REGISTRY[id]) {
    return MASTER_VISUAL_REGISTRY[id];
  }

  return null;
}
