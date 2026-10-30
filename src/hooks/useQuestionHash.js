import { useEffect } from 'react';

/**
 * Link langsung ke satu soal (…/bab2-pecahan#soal-sd4-b2-3): setelah soal tampil,
 * gulir ke kartu soal itu dan beri sorotan.
 */
export function useQuestionHash(questionCount) {
  useEffect(() => {
    const hash = typeof window !== 'undefined' ? window.location.hash.slice(1) : '';
    if (!hash.startsWith('soal-') || questionCount === 0) return;
    const el = document.getElementById(decodeURIComponent(hash));
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    el.classList.add('is-linked');
  }, [questionCount]);
}
