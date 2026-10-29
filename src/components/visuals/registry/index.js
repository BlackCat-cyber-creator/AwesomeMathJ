import { amcVisualRegistry } from './amcRegistry.js';

/**
 * getVisualConfig:
 * Mengambil konfigurasi visual berdasarkan objek soal.
 * 1. question.visual — sumber utama; gambar disimpan bersama soalnya
 *    (Kelas 4–12) sehingga tidak bisa bergeser saat soal diubah/diurutkan ulang.
 * 2. Registry AMC berdasarkan visualId/id (modul olimpiade).
 */
export function getVisualConfig(question) {
  if (!question) return null;

  if (question.visual && question.visual.type) {
    return question.visual;
  }

  const visualKey = question.visualId || question.id || '';
  if (visualKey && amcVisualRegistry[visualKey]) {
    return amcVisualRegistry[visualKey];
  }

  return null;
}
