import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import {
  REPORT_CATEGORIES,
  REPORT_NOTE_MAX,
  buildReportPayload,
  groupReportsByQuestion,
  questionAnchor
} from '../src/utils/reports';
import { searchChapters, normalizeSearchText } from '../src/utils/chapterSearch';

const rules = fs.readFileSync(path.resolve(__dirname, '../firestore.rules'), 'utf8');

describe('Laporan soal salah', () => {
  it('payload hanya berisi field yang diizinkan aturan Firestore', () => {
    const payload = buildReportPayload({
      questionId: 'sd4-b2-3', chapterId: 'sd4-bab2-pecahan', context: 'handbook',
      category: 'gambar', note: '  gambar 5 cm, soal 6 cm  ', path: '/matematika/kelas-4/bab2-pecahan#soal-sd4-b2-3', questionNumber: 3
    });
    expect(payload).toMatchObject({ questionId: 'sd4-b2-3', category: 'gambar', note: 'gambar 5 cm, soal 6 cm', status: 'open', questionNumber: 3 });
    const allowed = rules.match(/match \/reports\/\{reportId\}[\s\S]*?hasOnly\(\[([^\]]+)\]\)/)[1]
      .split(',').map((s) => s.trim().replace(/'/g, ''));
    expect(Object.keys(payload).every((k) => allowed.includes(k))).toBe(true);
  });

  it('kategori di aplikasi sama dengan kategori di aturan Firestore', () => {
    const ruleCats = rules.match(/category in \[([^\]]+)\]/)[1].split(',').map((s) => s.trim().replace(/'/g, ''));
    expect(REPORT_CATEGORIES.map((c) => c.id)).toEqual(ruleCats);
    expect(rules).toContain(`size() <= ${REPORT_NOTE_MAX}`);
  });

  it('menolak laporan tanpa soal atau kategori, dan memotong catatan panjang', () => {
    expect(buildReportPayload({ questionId: 'x', category: 'ngawur' })).toBeNull();
    expect(buildReportPayload({ category: 'kunci' })).toBeNull();
    const long = buildReportPayload({ questionId: 'x', category: 'kunci', note: 'a'.repeat(900), context: 'aneh' });
    expect(long.note).toHaveLength(REPORT_NOTE_MAX);
    expect(long.context).toBe('handbook');
    expect(long.questionNumber).toBe(0);
  });

  it('mengelompokkan laporan per soal, terbaru dulu', () => {
    const groups = groupReportsByQuestion([
      { id: '1', questionId: 'a', createdAt: '2026-10-01T00:00:00Z', path: '/p#a' },
      { id: '2', questionId: 'b', createdAt: '2026-10-03T00:00:00Z' },
      { id: '3', questionId: 'a', createdAt: '2026-10-02T00:00:00Z' }
    ]);
    expect(groups.map((g) => g.questionId)).toEqual(['b', 'a']);
    expect(groups[1].reports.map((r) => r.id)).toEqual(['3', '1']);
    expect(groups[1].path).toBe('/p#a');
  });

  it('anchor soal aman dipakai sebagai id HTML', () => {
    expect(questionAnchor('sd4-b2-3')).toBe('soal-sd4-b2-3');
    expect(questionAnchor('a b"<x>')).toBe('soal-abx');
  });
});

describe('Cari materi di semua kelas', () => {
  it('menemukan bab dari judul di beberapa kelas', () => {
    const labels = searchChapters('pecahan').map((r) => r.label);
    expect(labels).toEqual(expect.arrayContaining(['Matematika 4', 'Matematika 5', 'Matematika 6']));
  });

  it('kata "kelas N" mempersempit hasil', () => {
    const results = searchChapters('kelas 5 pecahan');
    expect(results[0]).toMatchObject({ label: 'Matematika 5', path: '/matematika/kelas-5/bab3-bilangan-pecahan' });
  });

  it('mencakup bab IPA dengan alamat /ipa', () => {
    const top = searchChapters('ipa kalor')[0];
    expect(top).toMatchObject({ label: 'IPA 7', path: '/ipa/kelas-7/bab3-suhu-kalor-pemuaian' });
    expect(searchChapters('fotosintesis').length + searchChapters('gerak').length).toBeGreaterThan(0);
  });

  it('mencakup bab AMC dengan alamat olimpiade', () => {
    const top = searchChapters('permutasi')[0];
    expect(top.path).toMatch(/^\/olimpiade\/amc-8\//);
  });

  it('tidak peka huruf besar, tanda baca, dan LaTeX', () => {
    expect(normalizeSearchText('KPK & FPB: $\\frac{1}{2}$')).toBe('kpk fpb 1 2');
    expect(searchChapters('')).toEqual([]);
    expect(searchChapters('zzzqqq')).toEqual([]);
  });
});
