import React from 'react';
import { Link } from 'react-router-dom';
import { ABOUT, AUTHOR } from '../data/siteInfo';
import { ABOUT_META } from '../utils/seoMeta';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { gradePath, amcLevelPath } from '../utils/seoRoutes';

/** Halaman /tentang: siapa pembuat AwesomeMathJ (isi sama dengan hasil prerender). */
export function AboutPage() {
  useDocumentMeta(ABOUT_META);
  return (
    <div className="handbook-container seo-page">
      <h1>{ABOUT.title}</h1>
      <p><strong>{ABOUT.intro}</strong></p>
      {ABOUT.paragraphs.map((p) => <p key={p}>{p}</p>)}
      <h2>Pembuat</h2>
      <p>{AUTHOR.name} — {AUTHOR.jobTitle}</p>
      <h2>Mulai Belajar</h2>
      <ul>
        {[4, 5, 6, 7, 8, 9, 10, 11, 12].map((g) => (
          <li key={g}><Link to={gradePath(g)}>Matematika Kelas {g}</Link></li>
        ))}
        {[7, 8, 9].map((g) => (
          <li key={`ipa${g}`}><Link to={gradePath(g, 'ipa')}>IPA Kelas {g}</Link></li>
        ))}
        {[8, 10, 12].map((l) => (
          <li key={`amc${l}`}><Link to={amcLevelPath(l)}>Olimpiade AMC {l}</Link></li>
        ))}
      </ul>
    </div>
  );
}

export default AboutPage;
