/**
 * Database Kurikulum Matematika Lengkap Kurikulum Merdeka (Kelas 4 SD - 12 SMA)
 *
 * Seluruh silabus nasional terstruktur rapi.
 * Khusus Kelas 11 dan 12: Terpisah tegas antara:
 * - Matematika Utama (Wajib)
 * - Matematika Tingkat Lanjut (Pilihan)
 */

import { grade4Data } from "./grades/grade4.js";
import { grade5Data } from "./grades/grade5.js";
import { grade6Data } from "./grades/grade6.js";
import { grade7Data } from "./grades/grade7.js";
import { grade8Data } from "./grades/grade8.js";
import { grade9Data } from "./grades/grade9.js";
import { grade10Data } from "./grades/grade10.js";
import { grade11Data } from "./grades/grade11.js";
import { grade12Data } from "./grades/grade12.js";

export const EXAM_CATEGORIES = [
  { id: "ALL", label: "Semua Soal Latihan", badgeClass: "badge-subtle" }
];

export const CURRICULUM_DATA = [
  grade4Data,
  grade5Data,
  grade6Data,
  grade7Data,
  grade8Data,
  grade9Data,
  grade10Data,
  grade11Data,
  grade12Data
];
