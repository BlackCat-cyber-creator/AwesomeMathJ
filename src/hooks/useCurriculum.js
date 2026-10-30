import { useState, useEffect, useMemo } from 'react';
import { getGradeData, getLoadedGradeData, curriculumFor } from '../data/curriculumData';

/**
 * useGradeData hook
 * Loads full questions/solutions for a grade on-demand with caching.
 * subject: 'matematika' (bawaan) atau 'ipa'.
 */
export function useGradeData(grade, subject = 'matematika') {
  const key = `${subject}:${grade}`;
  const [currentKey, setCurrentKey] = useState(key);
  const [data, setData] = useState(() => getLoadedGradeData(grade, subject));
  const [loading, setLoading] = useState(() => !getLoadedGradeData(grade, subject));
  const [error, setError] = useState(null);

  if (currentKey !== key) {
    setCurrentKey(key);
    const cached = getLoadedGradeData(grade, subject);
    if (cached) {
      setData(cached);
      setLoading(false);
    } else {
      setData(null);
      setLoading(true);
    }
  }

  useEffect(() => {
    let active = true;
    if (data) return;

    getGradeData(grade, subject)
      .then((res) => {
        if (active) {
          setData(res);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (active) {
          setError(err);
          setLoading(false);
        }
      });

    return () => { active = false; };
  }, [grade, subject, data]);

  // Fallback to lightweight metadata while loading
  const safeData = useMemo(() => {
    const sameSubject = (d) => (d.subject || 'matematika') === subject;
    if (data && data.grade === Number(grade) && sameSubject(data)) return data;
    const index = curriculumFor(subject);
    return index.find((g) => g.grade === Number(grade)) || index[0];
  }, [data, grade, subject]);

  return { gradeData: safeData, fullGradeData: data, loading, error };
}

/**
 * useChapter hook
 * Returns a specific chapter from ALL_CHAPTERS_INDEX or loaded grade data
 */
export function useChapter(grade, chapterId) {
  const { gradeData, loading } = useGradeData(grade);

  const chapter = useMemo(() => {
    if (!gradeData?.chapters) return null;
    return gradeData.chapters.find((c) => c.id === chapterId) || gradeData.chapters[0] || null;
  }, [gradeData, chapterId]);

  return { chapter, gradeData, loading };
}
