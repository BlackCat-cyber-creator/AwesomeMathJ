import React from 'react';
import { Link } from 'react-router-dom';
import { TOPIC_GROUPS } from '../data/topics';
import { topicChapters } from '../utils/relatedChapters';
import { ALL_AMC_CHAPTERS_INDEX, AMC_LEVELS_METADATA } from '../data/amc/amcMetadata';
import { amcChapterPath } from '../utils/seoRoutes';
import { TOPIC_INDEX_META } from '../utils/seoMeta';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

/** Halaman /daftar-isi: semua materi dikelompokkan per topik (isi sama dengan prerender). */
export function TopicIndexPage() {
  useDocumentMeta(TOPIC_INDEX_META);
  return (
    <div className="handbook-container seo-page topic-index">
      <h1>Daftar Isi Materi</h1>
      <p>Semua bab Matematika (Kelas 4–12), IPA (Kelas 7–9), dan Olimpiade AMC, dikelompokkan per topik. Pilih bab untuk membaca materi, contoh soal, dan latihan beserta pembahasannya.</p>
      <p><Link to="/tka">Latihan TKA Matematika SD dan SMP →</Link></p>

      {TOPIC_GROUPS.map((group) => (
        <section key={group.subject}>
          <h2>{group.name}</h2>
          {group.topics.map((topic) => (
            <div key={topic.id} id={`topik-${topic.id}`} className="topic-block">
              <h3>{topic.name}</h3>
              <p className="topic-desc">{topic.description}</p>
              <ul>
                {topicChapters(topic).map((c) => (
                  <li key={c.id}>
                    <Link to={c.path}>{c.title.replace(/^Bab \d+:\s*/, '')}</Link>
                    <span className="topic-meta"> — {c.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      ))}

      <section>
        <h2>Olimpiade AMC</h2>
        {AMC_LEVELS_METADATA.map((lvl) => (
          <div key={lvl.level} className="topic-block">
            <h3>{lvl.title} ({lvl.targetGrades})</h3>
            <ul>
              {ALL_AMC_CHAPTERS_INDEX.filter((c) => c.level === lvl.level).map((c) => (
                <li key={c.id}>
                  <Link to={amcChapterPath(lvl.level, c.id)}>{c.title.replace(/^Bab \d+:\s*/, '')}</Link>
                  <span className="topic-meta"> — {c.domain}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}

export default TopicIndexPage;
