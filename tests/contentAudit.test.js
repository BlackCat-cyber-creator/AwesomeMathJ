import { describe, it, expect } from 'vitest';
import { auditAll, ALL_GRADES } from './support/visualAuditRunner.jsx';
import { extractNumbers } from '../src/utils/contentAudit.js';

/**
 * Penjaga kualitas konten: gambar harus sesuai soal, tidak membocorkan jawaban,
 * dan soal harus sesuai cakupan kelasnya.
 *
 * REVIEWED_DERIVED berisi angka di gambar yang tidak tertulis di soal tetapi sudah
 * ditinjau dan memang benar (fakta umum atau konversi satuan). Tambahkan entri baru
 * hanya setelah memeriksa gambarnya secara manual.
 */
const REVIEWED_DERIVED = {
  'sd4-b5-4': ['2'], // "diagonal 1 / diagonal 2"
  'sd4-b5-13': ['2'], // "diagonal 1 / diagonal 2"
  'sd5-b3-1': ['6'], // penyebut persekutuan 1/2 dan 1/3
  'sd5-b4-1': ['4'], // persegi memiliki 4 sisi
  'sd5-b6-11': ['90'], // sudut siku-siku
  'sd5-b6-12': ['180'], // jumlah sudut segitiga
  'sd5-b6-18': ['180'], // sudut berdekatan jajar genjang
  'sd5-b7-1': ['90'], // sudut siku-siku
  'sd5-b7-3': ['2'], // "diagonal 1 / diagonal 2"
  'sd6-b2-9': ['3'], // selisih rasio 7 − 4 pada model batang
  'sd6-b4-3': ['6'], // dadu bermata 1 sampai 6
  'sd6-b4-6': ['6'], // dadu bermata 1 sampai 6
  'sd6-b3-3': ['6'], // kubus memiliki 6 sisi
  'sd6-b3-6': ['12'], // kubus memiliki 12 rusuk
  'sd6-b3-12': ['100'], // 1 m = 100 cm
  'smp7-b3-1': ['1000'], // 1 kg = 1.000 gram
  'smp9-b1-4': ['2', '4'], // motor beroda 2, mobil beroda 4
  'smp9-b2-5': ['70', '100'], // jari-jari = diameter : 2, 1 m = 100 cm
  'smp9-b2-12': ['35', '100'] // jari-jari = diameter : 2, 1 m = 100 cm
};

const rows = auditAll();
const withVisual = rows.filter((r) => r.hasVisual);

describe('Audit konten: gambar sesuai soal', () => {
  it('setiap gambar berhasil dirender', () => {
    const failed = withVisual.filter((r) => r.renderError).map((r) => `${r.id}: ${r.renderError}`);
    expect(failed).toEqual([]);
  });

  it('gambar tidak menampilkan angka yang tidak ada di soal', () => {
    const mismatches = withVisual
      .map((r) => ({
        id: r.id,
        extra: r.visualOnlyNumbers.filter((n) => !(REVIEWED_DERIVED[r.id] || []).includes(n))
      }))
      .filter((r) => r.extra.length > 0)
      .map((r) => `${r.id}: ${r.extra.join(', ')}`);
    expect(mismatches).toEqual([]);
  });

  it('gambar tidak membocorkan jawaban', () => {
    expect(withVisual.filter((r) => r.answerLeak).map((r) => r.id)).toEqual([]);
  });

  it('daftar pengecualian tidak berisi soal yang sudah tidak ada', () => {
    const ids = new Set(withVisual.map((r) => r.id));
    expect(Object.keys(REVIEWED_DERIVED).filter((id) => !ids.has(id))).toEqual([]);
  });
});

describe('Audit konten: cakupan dan kerapian soal', () => {
  it('soal Kelas 4–9 tidak memakai materi fase berikutnya (CP 046/2025)', () => {
    const offScope = rows.filter((r) => r.outOfScope.length > 0).map((r) => `${r.id}: ${r.outOfScope.join(', ')}`);
    expect(offScope).toEqual([]);
  });

  it('tidak ada soal kembar dalam satu bab', () => {
    const norm = (s) => s.toLowerCase().replace(/\$|\\[a-z]+|[{}()\s.,:;?!]/g, '');
    const dupes = [];
    for (const data of ALL_GRADES) {
      for (const ch of data.chapters) {
        const seen = new Map();
        for (const q of ch.questions || []) {
          const key = norm(q.question);
          if (seen.has(key)) dupes.push(`${seen.get(key)} = ${q.id}`);
          else seen.set(key, q.id);
        }
      }
    }
    expect(dupes).toEqual([]);
  });

  it('soal tidak merujuk "soal sebelumnya" (paket PR mengambil soal secara terpisah)', () => {
    const refs = rows.filter((r) => /soal sebelumnya/i.test(r.question)).map((r) => r.id);
    expect(refs).toEqual([]);
  });

  it('tidak ada teks "\\n" mentah yang tampil di layar', () => {
    const broken = [];
    const walk = (value, path) => {
      if (typeof value === 'string') {
        if (/\\n(?![a-z])/.test(value)) broken.push(path);
      } else if (value && typeof value === 'object') {
        for (const [k, v] of Object.entries(value)) walk(v, `${path}.${k}`);
      }
    };
    for (const data of ALL_GRADES) walk(data, `grade${data.grade}`);
    expect(broken).toEqual([]);
  });
});

describe('extractNumbers', () => {
  it('menormalkan format bilangan Indonesia dan LaTeX', () => {
    expect(extractNumbers('Rp48.000,00')).toEqual(['48000']);
    expect(extractNumbers('2,5 cm')).toEqual(['2.5']);
    expect(extractNumbers('$\\frac{3}{4}$')).toEqual(['3', '4']);
    expect(extractNumbers('Luas = ? cm²')).toEqual([]);
    expect(extractNumbers('U₁ = 5')).toEqual(['5']);
  });
});
