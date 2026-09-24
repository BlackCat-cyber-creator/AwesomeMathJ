import { grade4VisualRegistry } from './grade4Registry.js';
import { grade5VisualRegistry } from './grade5Registry.js';
import { grade6VisualRegistry } from './grade6Registry.js';
import { grade7VisualRegistry } from './grade7Registry.js';
import { grade8VisualRegistry } from './grade8Registry.js';
import { grade9VisualRegistry } from './grade9Registry.js';
import { grade10VisualRegistry } from './grade10Registry.js';
import { grade11VisualRegistry } from './grade11Registry.js';
import { grade12VisualRegistry } from './grade12Registry.js';
import { amcVisualRegistry } from './amcRegistry.js';

// Gabungan seluruh registry visual bertahap (Kelas 4 SD s/d 12 SMA + Modul AMC)
const MASTER_VISUAL_REGISTRY = {
  ...grade4VisualRegistry,
  ...grade5VisualRegistry,
  ...grade6VisualRegistry,
  ...grade7VisualRegistry,
  ...grade8VisualRegistry,
  ...grade9VisualRegistry,
  ...grade10VisualRegistry,
  ...grade11VisualRegistry,
  ...grade12VisualRegistry,
  ...amcVisualRegistry
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

  // 2. Lookup berdasarkan ID visual eksplisit atau ID soal
  const visualKey = question.visualId || question.id || '';
  if (visualKey && MASTER_VISUAL_REGISTRY[visualKey]) {
    return MASTER_VISUAL_REGISTRY[visualKey];
  }

  return null;
}
