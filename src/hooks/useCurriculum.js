import { useState, useEffect, useMemo } from 'react';
import { getGradeData, getLoadedGradeData, CURRICULUM_DATA } from '../data/curriculumData';

/**
 * useGradeData hook
 * Loads full questions/solutions for a grade on-demand with caching
 */
export function useGradeData(grade) {
  const [currentGrade, setCurrentGrade] = useState(grade);
  const [data, setData] = useState(() => getLoadedGradeData(grade));
  const [loading, setLoading] = useState(() => !getLoadedGradeData(grade));
  const [error, setError] = useState(null);

  if (currentGrade !== grade) {
    setCurrentGrade(grade);
    const cached = getLoadedGradeData(grade);
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

    getGradeData(grade)
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
  }, [grade, data]);

  // Fallback to lightweight metadata while loading
  const safeData = useMemo(() => {
    if (data && data.grade === Number(grade)) return data;
    return CURRICULUM_DATA.find((g) => g.grade === Number(grade)) || CURRICULUM_DATA[0];
  }, [data, grade]);

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
