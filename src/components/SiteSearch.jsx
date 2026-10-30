import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { searchChapters } from '../utils/chapterSearch';

/** Kotak "Cari materi" lintas Kelas 4–12 dan AMC; hasilnya link langsung ke bab. */
export function SiteSearch() {
  const [query, setQuery] = useState('');
  const results = useMemo(() => (query.trim().length >= 2 ? searchChapters(query) : []), [query]);
  const showEmpty = query.trim().length >= 2 && results.length === 0;

  return (
    <div className="site-search" role="search">
      <label className="site-search-box">
        <Search size={16} aria-hidden="true" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari materi di semua kelas, misalnya: pecahan, peluang, pythagoras"
          aria-label="Cari materi di semua kelas"
        />
        {query && (
          <button type="button" className="site-search-clear" onClick={() => setQuery('')} aria-label="Hapus pencarian">
            <X size={14} />
          </button>
        )}
      </label>
      {results.length > 0 && (
        <ul className="site-search-results">
          {results.map((r) => (
            <li key={r.id}>
              <Link to={r.path} onClick={() => setQuery('')}>
                <span className="site-search-label">{r.label}</span>
                <span>{r.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {showEmpty && <p className="site-search-empty">Belum ada materi yang cocok dengan &ldquo;{query.trim()}&rdquo;.</p>}
    </div>
  );
}

export default SiteSearch;
