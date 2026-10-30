/**
 * Kerangka artikel satu bab (dipakai ChapterArticle dan prerender) agar daftar isi,
 * nomor subbab, dan anchor sama di aplikasi maupun di HTML yang dibaca Google.
 */

/**
 * "Judul Subbab: isi" → { title, body }. Titik dua di dalam rumus $...$ diabaikan.
 * Tanpa judul yang jelas → judul dari awal kalimat.
 */
export function splitSubbab(text) {
  const raw = String(text || '');
  let inMath = false;
  for (let i = 0; i < Math.min(raw.length, 110); i++) {
    const c = raw[i];
    if (c === '\n') break;
    if (c === '$') inMath = !inMath;
    else if (c === ':' && !inMath && i >= 3 && /\s/.test(raw[i + 1] || '')) {
      return { title: raw.slice(0, i).trim(), body: raw.slice(i + 1).trim() };
    }
  }
  const words = raw.replace(/\$[^$]*\$/g, '').split(/\s+/).slice(0, 6).join(' ');
  return { title: words || 'Konsep', body: raw };
}

/** Bagian artikel yang ada isinya, berurutan, beserta id anchor-nya. */
export function articleSections(summary, practiceCount = 0) {
  const s = summary || {};
  return [
    s.overview && { id: 'pengantar', label: 'Pengantar' },
    s.coreConcepts?.length && { id: 'materi', label: 'Materi' },
    s.keyFormulas?.length && { id: 'rumus', label: 'Rumus Kunci' },
    s.workedExamples?.length && { id: 'contoh', label: 'Contoh Soal dan Pembahasan' },
    s.misconceptions?.length && { id: 'kesalahan', label: 'Kesalahan yang Sering Terjadi' },
    practiceCount > 0 && { id: 'latihan-soal', label: `Latihan Soal (${practiceCount} soal)` }
  ].filter(Boolean);
}
