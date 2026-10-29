import { useEffect } from 'react';
import { SITE_URL } from '../utils/seoRoutes';

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/**
 * Menyamakan judul, deskripsi, canonical, dan tag Open Graph dengan halaman
 * yang sedang dibuka (navigasi di dalam aplikasi tidak memuat ulang HTML).
 */
export function useDocumentMeta(meta) {
  const { title, description, path } = meta || {};
  useEffect(() => {
    if (!title || typeof document === 'undefined') return;
    const url = `${SITE_URL}${path || '/'}`;
    document.title = title;
    setMeta('name', 'description', description || '');
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description || '');
    setMeta('property', 'og:url', url);
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }, [title, description, path]);
}

export default useDocumentMeta;
