/**
 * Academic Calendar Engine for Kurikulum Merdeka
 * 
 * Maps Indonesian school year semesters to chapter pacing for each grade.
 * 
 * Indonesian Academic Calendar:
 * - Semester 1 (Ganjil): Mid-July → Mid-December (~22 effective weeks)
 * - Semester 2 (Genap): Mid-January → Mid-June (~22 effective weeks)
 * 
 * This is a DEFAULT sensible mapping. Schools have autonomy under
 * Kurikulum Merdeka, so this can be overridden per-student.
 */

// Semester date boundaries (using conservative estimates)
const SEMESTER_BOUNDARIES = {
  // Academic year starts mid-July
  semester1: {
    start: { month: 7, day: 15 },   // 15 Juli
    end: { month: 12, day: 20 },     // 20 Desember
    label: 'Semester 1 (Ganjil)',
    shortLabel: 'Sem 1',
  },
  // Semester 2 starts mid-January
  semester2: {
    start: { month: 1, day: 15 },    // 15 Januari
    end: { month: 6, day: 15 },      // 15 Juni
    label: 'Semester 2 (Genap)',
    shortLabel: 'Sem 2',
  },
};

/**
 * Chapter pacing: maps each grade to its semester distribution.
 * 
 * Each entry has:
 * - semester: 1 or 2
 * - monthRange: [startMonth, endMonth] (1-indexed)
 * - chapterIndex: 0-based index into the grade's chapters array
 * 
 * Rationale: distribute chapters evenly across semesters,
 * heavier/longer chapters get more time.
 */
const CHAPTER_PACING = {
  // === SD KELAS 4 (6 bab) ===
  4: [
    { chapterIndex: 0, semester: 1, monthRange: [7, 8],   label: 'Jul–Agt' },
    { chapterIndex: 1, semester: 1, monthRange: [9, 9],   label: 'Sep' },
    { chapterIndex: 2, semester: 1, monthRange: [10, 11],  label: 'Okt–Nov' },
    { chapterIndex: 3, semester: 2, monthRange: [1, 2],   label: 'Jan–Feb' },
    { chapterIndex: 4, semester: 2, monthRange: [3, 4],   label: 'Mar–Apr' },
    { chapterIndex: 5, semester: 2, monthRange: [5, 6],   label: 'Mei–Jun' },
  ],

  // === SD KELAS 5 (9 bab) ===
  5: [
    { chapterIndex: 0, semester: 1, monthRange: [7, 8],   label: 'Jul–Agt' },
    { chapterIndex: 1, semester: 1, monthRange: [8, 9],   label: 'Agt–Sep' },
    { chapterIndex: 2, semester: 1, monthRange: [9, 10],  label: 'Sep–Okt' },
    { chapterIndex: 3, semester: 1, monthRange: [10, 11], label: 'Okt–Nov' },
    { chapterIndex: 4, semester: 1, monthRange: [11, 12], label: 'Nov–Des' },
    { chapterIndex: 5, semester: 2, monthRange: [1, 2],   label: 'Jan–Feb' },
    { chapterIndex: 6, semester: 2, monthRange: [2, 3],   label: 'Feb–Mar' },
    { chapterIndex: 7, semester: 2, monthRange: [4, 5],   label: 'Apr–Mei' },
    { chapterIndex: 8, semester: 2, monthRange: [5, 6],   label: 'Mei–Jun' },
  ],

  // === SD KELAS 6 (4 bab) ===
  6: [
    { chapterIndex: 0, semester: 1, monthRange: [7, 9],   label: 'Jul–Sep' },
    { chapterIndex: 1, semester: 1, monthRange: [10, 12], label: 'Okt–Des' },
    { chapterIndex: 2, semester: 2, monthRange: [1, 3],   label: 'Jan–Mar' },
    { chapterIndex: 3, semester: 2, monthRange: [4, 6],   label: 'Apr–Jun' },
  ],

  // === SMP KELAS 7 (6 bab) ===
  7: [
    { chapterIndex: 0, semester: 1, monthRange: [7, 8],   label: 'Jul–Agt' },
    { chapterIndex: 1, semester: 1, monthRange: [9, 10],  label: 'Sep–Okt' },
    { chapterIndex: 2, semester: 1, monthRange: [11, 12], label: 'Nov–Des' },
    { chapterIndex: 3, semester: 2, monthRange: [1, 2],   label: 'Jan–Feb' },
    { chapterIndex: 4, semester: 2, monthRange: [3, 4],   label: 'Mar–Apr' },
    { chapterIndex: 5, semester: 2, monthRange: [5, 6],   label: 'Mei–Jun' },
  ],

  // === SMP KELAS 8 (6 bab) ===
  8: [
    { chapterIndex: 0, semester: 1, monthRange: [7, 8],   label: 'Jul–Agt' },
    { chapterIndex: 1, semester: 1, monthRange: [9, 10],  label: 'Sep–Okt' },
    { chapterIndex: 2, semester: 1, monthRange: [11, 12], label: 'Nov–Des' },
    { chapterIndex: 3, semester: 2, monthRange: [1, 2],   label: 'Jan–Feb' },
    { chapterIndex: 4, semester: 2, monthRange: [3, 4],   label: 'Mar–Apr' },
    { chapterIndex: 5, semester: 2, monthRange: [5, 6],   label: 'Mei–Jun' },
  ],

  // === SMP KELAS 9 (4 bab) ===
  9: [
    { chapterIndex: 0, semester: 1, monthRange: [7, 9],   label: 'Jul–Sep' },
    { chapterIndex: 1, semester: 1, monthRange: [10, 12], label: 'Okt–Des' },
    { chapterIndex: 2, semester: 2, monthRange: [1, 3],   label: 'Jan–Mar' },
    { chapterIndex: 3, semester: 2, monthRange: [4, 6],   label: 'Apr–Jun' },
  ],

  // === SMA KELAS 10 (8 bab) ===
  10: [
    { chapterIndex: 0, semester: 1, monthRange: [7, 8],   label: 'Jul–Agt' },
    { chapterIndex: 1, semester: 1, monthRange: [8, 9],   label: 'Agt–Sep' },
    { chapterIndex: 2, semester: 1, monthRange: [10, 10], label: 'Okt' },
    { chapterIndex: 3, semester: 1, monthRange: [11, 12], label: 'Nov–Des' },
    { chapterIndex: 4, semester: 2, monthRange: [1, 2],   label: 'Jan–Feb' },
    { chapterIndex: 5, semester: 2, monthRange: [3, 3],   label: 'Mar' },
    { chapterIndex: 6, semester: 2, monthRange: [4, 5],   label: 'Apr–Mei' },
    { chapterIndex: 7, semester: 2, monthRange: [5, 6],   label: 'Mei–Jun' },
  ],

  // === SMA KELAS 11 (3 bab) ===
  11: [
    { chapterIndex: 0, semester: 1, monthRange: [7, 10],  label: 'Jul–Okt' },
    { chapterIndex: 1, semester: 1, monthRange: [10, 12], label: 'Okt–Des' },
    { chapterIndex: 2, semester: 2, monthRange: [1, 6],   label: 'Jan–Jun' },
  ],

  // === SMA KELAS 12 (4 bab) ===
  12: [
    { chapterIndex: 0, semester: 1, monthRange: [7, 9],   label: 'Jul–Sep' },
    { chapterIndex: 1, semester: 1, monthRange: [10, 12], label: 'Okt–Des' },
    { chapterIndex: 2, semester: 2, monthRange: [1, 3],   label: 'Jan–Mar' },
    { chapterIndex: 3, semester: 2, monthRange: [4, 6],   label: 'Apr–Jun' },
  ],
};

/**
 * Get the current semester info based on a date.
 * @param {Date} date - defaults to now
 * @returns {{ semester: 1|2, label: string, shortLabel: string, progress: number, isBreak: boolean }}
 */
export function getCurrentSemester(date = new Date()) {
  const month = date.getMonth() + 1; // 1-indexed
  const day = date.getDate();

  const sem1 = SEMESTER_BOUNDARIES.semester1;
  const sem2 = SEMESTER_BOUNDARIES.semester2;

  // Check Semester 1: July 15 → December 20
  if (
    (month > sem1.start.month || (month === sem1.start.month && day >= sem1.start.day)) &&
    (month < sem1.end.month || (month === sem1.end.month && day <= sem1.end.day))
  ) {
    // Calculate progress within semester 1
    const startDate = new Date(date.getFullYear(), sem1.start.month - 1, sem1.start.day);
    const endDate = new Date(date.getFullYear(), sem1.end.month - 1, sem1.end.day);
    const elapsed = date - startDate;
    const total = endDate - startDate;
    const progress = Math.max(0, Math.min(1, elapsed / total));

    return {
      semester: 1,
      label: sem1.label,
      shortLabel: sem1.shortLabel,
      progress: Math.round(progress * 100),
      isBreak: false,
      academicYear: `${date.getFullYear()}/${date.getFullYear() + 1}`,
    };
  }

  // Check Semester 2: January 15 → June 15
  if (
    (month > sem2.start.month || (month === sem2.start.month && day >= sem2.start.day)) &&
    (month < sem2.end.month || (month === sem2.end.month && day <= sem2.end.day))
  ) {
    const startDate = new Date(date.getFullYear(), sem2.start.month - 1, sem2.start.day);
    const endDate = new Date(date.getFullYear(), sem2.end.month - 1, sem2.end.day);
    const elapsed = date - startDate;
    const total = endDate - startDate;
    const progress = Math.max(0, Math.min(1, elapsed / total));

    return {
      semester: 2,
      label: sem2.label,
      shortLabel: sem2.shortLabel,
      progress: Math.round(progress * 100),
      isBreak: false,
      academicYear: `${date.getFullYear() - 1}/${date.getFullYear()}`,
    };
  }

  // We're in a break period (Dec 21 - Jan 14 or Jun 16 - Jul 14)
  if (month <= 6) {
    // Between semesters (Jun break → Jul start)
    return {
      semester: 2,
      label: 'Libur Semester 2',
      shortLabel: 'Libur',
      progress: 100,
      isBreak: true,
      academicYear: `${date.getFullYear() - 1}/${date.getFullYear()}`,
    };
  } else if (month === 7 && day < 15) {
    return {
      semester: 1,
      label: 'Menjelang Semester 1',
      shortLabel: 'Pra-Sem 1',
      progress: 0,
      isBreak: true,
      academicYear: `${date.getFullYear()}/${date.getFullYear() + 1}`,
    };
  } else {
    // December break
    return {
      semester: 1,
      label: 'Libur Semester 1',
      shortLabel: 'Libur',
      progress: 100,
      isBreak: true,
      academicYear: `${date.getFullYear()}/${date.getFullYear() + 1}`,
    };
  }
}

/**
 * Get the currently recommended chapter for a grade based on today's date.
 * @param {number} grade - 4-12
 * @param {Date} date - defaults to now
 * @returns {{ chapterIndex: number, pacing: object, semester: number, isCurrent: boolean } | null}
 */
export function getRecommendedChapter(grade, date = new Date()) {
  const pacing = CHAPTER_PACING[grade];
  if (!pacing) return null;

  const month = date.getMonth() + 1;

  // Find the chapter whose monthRange contains the current month
  for (const entry of pacing) {
    const [startMonth, endMonth] = entry.monthRange;
    if (month >= startMonth && month <= endMonth) {
      return {
        chapterIndex: entry.chapterIndex,
        pacing: entry,
        semester: entry.semester,
        isCurrent: true,
      };
    }
  }

  // If we're in a break, return the last chapter of the previous semester
  // or the first chapter of the next semester
  const semInfo = getCurrentSemester(date);
  if (semInfo.isBreak) {
    if (semInfo.semester === 1) {
      // About to start sem1, recommend first chapter
      return {
        chapterIndex: 0,
        pacing: pacing[0],
        semester: 1,
        isCurrent: false,
      };
    } else {
      // End of sem2, recommend last chapter
      const lastSem2 = pacing.filter(p => p.semester === 2).pop() || pacing[pacing.length - 1];
      return {
        chapterIndex: lastSem2.chapterIndex,
        pacing: lastSem2,
        semester: 2,
        isCurrent: false,
      };
    }
  }

  return null;
}

/**
 * Get all chapter pacing entries for a grade with "current" flag.
 * @param {number} grade
 * @param {Date} date
 * @returns {Array<{ chapterIndex, semester, monthRange, label, isCurrent }>}
 */
export function getChapterTimeline(grade, date = new Date()) {
  const pacing = CHAPTER_PACING[grade];
  if (!pacing) return [];

  const recommended = getRecommendedChapter(grade, date);
  const currentIdx = recommended ? recommended.chapterIndex : -1;

  return pacing.map(entry => ({
    ...entry,
    isCurrent: entry.chapterIndex === currentIdx,
    isPast: entry.chapterIndex < currentIdx,
    isFuture: entry.chapterIndex > currentIdx,
  }));
}

/**
 * Get a human-readable "Materi Sekarang" string for a student.
 * @param {number} grade
 * @param {Array} chapters - the grade's chapters array from CURRICULUM_DATA
 * @param {Date} date
 * @returns {{ title: string, babNumber: number, semester: number, timeLabel: string } | null}
 */
export function getCurrentMaterialInfo(grade, chapters, date = new Date()) {
  const rec = getRecommendedChapter(grade, date);
  if (!rec || !chapters || !chapters[rec.chapterIndex]) return null;

  const chapter = chapters[rec.chapterIndex];
  return {
    title: chapter.title,
    chapterId: chapter.id,
    babNumber: rec.chapterIndex + 1,
    semester: rec.semester,
    timeLabel: rec.pacing.label,
    isCurrent: rec.isCurrent,
  };
}

export { SEMESTER_BOUNDARIES, CHAPTER_PACING };
