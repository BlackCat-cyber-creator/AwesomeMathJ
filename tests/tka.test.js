import { describe, it, expect } from 'vitest';
import { TKA_TESTS, parseTkaSlug, tkaPath } from '../src/data/tka.js';
import { buildTkaPacket, chaptersMap } from '../src/utils/tkaBuilder.js';
import { getGradeData } from '../src/data/curriculumData';
import { ALL_CHAPTERS_INDEX } from '../src/data/chapterIndex.js';

const load = async (grades) => chaptersMap(await Promise.all(grades.map((g) => getGradeData(g))));

describe('Latihan TKA', () => {
  it('semua bab di kerangka TKA ada dan sesuai jenjangnya', () => {
    const ids = new Map(ALL_CHAPTERS_INDEX.map((c) => [c.id, c.grade]));
    for (const t of TKA_TESTS) {
      for (const el of t.elements) {
        for (const id of el.chapters) {
          expect(ids.has(id), id).toBe(true);
          expect(t.grades).toContain(ids.get(id));
        }
      }
    }
  });

  it.each(TKA_TESTS.map((t) => [t.id, t]))('%s: paket A dan B masing-masing 30 soal, tanpa soal yang sama', async (_, test) => {
    const chapters = await load(test.grades);
    const a = buildTkaPacket(test, 'a', chapters);
    const b = buildTkaPacket(test, 'b', chapters);
    expect(a).toHaveLength(30);
    expect(b).toHaveLength(30);
    const idsA = new Set(a.map((q) => q.id));
    expect(b.filter((q) => idsA.has(q.id))).toEqual([]);
    expect(new Set(a.map((q) => q.id)).size).toBe(30);
    // jumlah soal per elemen sesuai kuota
    for (const el of test.elements) expect(a.filter((q) => q.tkaElement === el.name)).toHaveLength(el.quota);
    expect(a.every((q) => q.options.length >= 2 && q.difficulty !== 'Dasar' && q.difficulty !== 'Mudah')).toBe(true);
  });

  it('alamat paket dapat dibaca kembali', () => {
    expect(tkaPath('matematika-smp', 'b')).toBe('/tka/matematika-smp-b');
    expect(parseTkaSlug('matematika-smp-b').test.id).toBe('matematika-smp');
    expect(parseTkaSlug('matematika-smp-z')).toBeNull();
  });
});
