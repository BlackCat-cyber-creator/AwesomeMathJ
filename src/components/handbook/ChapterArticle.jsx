import React from 'react';
import { ListOrdered, Bookmark, FileText, AlertTriangle, Lightbulb } from 'lucide-react';
import { MathText } from '../MathRenderer';
import { splitSubbab, articleSections } from '../../utils/chapterOutline';

/**
 * Materi satu bab dalam bentuk artikel yang mudah dibaca dan dilompati:
 * Daftar Isi → Pengantar → Subbab bernomor → Rumus Kunci → Contoh Soal & Pembahasan →
 * Kesalahan yang Sering Terjadi → Tips. Latihan soal ada di bawahnya (#latihan-soal).
 * Struktur yang sama dipakai prerender (scripts/prerender.mjs) agar Google membaca isi yang sama.
 */
export function ChapterArticle({ summary, practiceCount = 0 }) {
  if (!summary) return null;
  const subbab = (summary.coreConcepts || []).map(splitSubbab);
  const sections = articleSections(summary, practiceCount);

  return (
    <article className="chapter-article">
      <nav className="chapter-toc editorial-card" aria-label="Daftar isi bab">
        <div className="chapter-toc-title">
          <ListOrdered size={16} /> Daftar Isi
        </div>
        <ol>
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`}>{s.label}</a>
              {s.id === 'materi' && subbab.length > 0 && (
                <ol className="chapter-toc-sub">
                  {subbab.map((sb, i) => (
                    <li key={i}><a href={`#materi-${i + 1}`}><MathText text={sb.title} /></a></li>
                  ))}
                </ol>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {summary.overview && (
        <section id="pengantar" className="chapter-section">
          <h3>Pengantar</h3>
          <div className="chapter-prose"><MathText text={summary.overview} /></div>
        </section>
      )}

      {subbab.length > 0 && (
        <section id="materi" className="chapter-section">
          <h3>Materi</h3>
          {subbab.map((sb, i) => (
            <div key={i} id={`materi-${i + 1}`} className="chapter-subbab">
              <h4><span className="chapter-subbab-num">{i + 1}</span> <MathText text={sb.title} /></h4>
              <div className="chapter-prose"><MathText text={sb.body} /></div>
            </div>
          ))}
        </section>
      )}

      {summary.keyFormulas?.length > 0 && (
        <section id="rumus" className="chapter-section">
          <h3><Bookmark size={16} /> Rumus Kunci</h3>
          <div className="chapter-formula-grid">
            {summary.keyFormulas.map((kf, i) => (
              <div key={i} className={`chapter-formula ${kf.formula.length > 45 ? 'is-wide' : ''}`}>
                <div className="chapter-formula-label">{kf.label}</div>
                <MathText text={`$$${kf.formula}$$`} />
              </div>
            ))}
          </div>
        </section>
      )}

      {summary.workedExamples?.length > 0 && (
        <section id="contoh" className="chapter-section">
          <h3><FileText size={16} /> Contoh Soal dan Pembahasan</h3>
          {summary.workedExamples.map((ex, i) => (
            <div key={i} className="chapter-example">
              <div className="chapter-example-title">
                Contoh {i + 1}{ex.title ? `: ${ex.title}` : ''}
              </div>
              <div className="chapter-prose"><MathText text={ex.problem} /></div>
              <details className="chapter-example-solution">
                <summary>Lihat pembahasan</summary>
                <div className="chapter-prose"><MathText text={ex.solution} /></div>
              </details>
            </div>
          ))}
        </section>
      )}

      {summary.misconceptions?.length > 0 && (
        <section id="kesalahan" className="chapter-section">
          <h3><AlertTriangle size={16} /> Kesalahan yang Sering Terjadi</h3>
          <ul className="chapter-mistakes">
            {summary.misconceptions.map((m, i) => (
              <li key={i}><MathText text={m} /></li>
            ))}
          </ul>
        </section>
      )}

      {summary.tutorTip && (
        <aside className="chapter-tip">
          <Lightbulb size={16} />
          <div>
            <strong>Tips</strong>
            <MathText text={summary.tutorTip.replace(/Sir Jevon/gi, 'Tutor Pengajar')} />
          </div>
        </aside>
      )}

    </article>
  );
}

export default ChapterArticle;
