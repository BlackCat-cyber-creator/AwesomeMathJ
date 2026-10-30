import { difficultyRank } from './questBuilder.js';

/**
 * Menyusun satu paket latihan TKA dari bank soal bab.
 * - Hanya soal pilihan ganda tingkat Sedang ke atas.
 * - Soal tiap elemen diambil bergiliran dari setiap bab (agar topiknya merata),
 *   lalu dibagi: urutan genap → Paket A, ganjil → Paket B (tidak ada soal yang sama).
 * - Hasil diurutkan per elemen, lalu dari sedang ke tantangan.
 * @param test       entri TKA_TESTS
 * @param packet     'a' | 'b'
 * @param chaptersById Map<chapterId, chapter lengkap dengan questions>
 */
export function buildTkaPacket(test, packet, chaptersById) {
  const offset = packet === 'b' ? 1 : 0;
  const result = [];
  for (const element of test.elements) {
    const pools = element.chapters
      .map((id) => chaptersById.get(id))
      .filter(Boolean)
      .map((ch) => (ch.questions || []).filter((q) => q.options?.length && difficultyRank(q.difficulty) >= 2));
    const sequence = [];
    for (let i = 0; pools.some((p) => i < p.length); i++) {
      for (const pool of pools) if (pool[i]) sequence.push(pool[i]);
    }
    const picked = sequence.filter((_, i) => i % 2 === offset).slice(0, element.quota);
    picked
      .map((q, i) => ({ q, i }))
      .sort((a, b) => difficultyRank(a.q.difficulty) - difficultyRank(b.q.difficulty) || a.i - b.i)
      .forEach(({ q }) => result.push({ ...q, tkaElement: element.name }));
  }
  return result;
}

/** Map bab dari beberapa data kelas. */
export function chaptersMap(gradeDatas) {
  return new Map(gradeDatas.flatMap((g) => (g?.chapters || []).map((ch) => [ch.id, ch])));
}
