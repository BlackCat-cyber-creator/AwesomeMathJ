import React from 'react';
import { Link } from 'react-router-dom';
import { relatedChapters } from '../../utils/relatedChapters';
import { topicOfChapter } from '../../data/topics';

/** "Materi terkait": bab lain dengan topik yang sama di kelas atau mata pelajaran lain. */
export function RelatedChapters({ chapterId }) {
  const items = relatedChapters(chapterId);
  if (items.length === 0) return null;
  const topic = topicOfChapter(chapterId);
  return (
    <aside className="related-chapters" aria-label="Materi terkait">
      <strong>Materi terkait</strong>
      <ul>
        {items.map((c) => (
          <li key={c.id}>
            <Link to={c.path}>{c.title}</Link> <span className="topic-meta">({c.label})</span>
          </li>
        ))}
      </ul>
      <Link className="related-all" to={`/daftar-isi#topik-${topic.id}`}>Semua materi {topic.name} →</Link>
    </aside>
  );
}

export default RelatedChapters;
