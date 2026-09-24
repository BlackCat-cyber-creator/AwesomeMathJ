import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CURRICULUM_DATA } from '../data/curriculumData';
import { useGradeData } from '../hooks/useCurriculum';
import { 
  AMC_LEVELS_METADATA, 
  ALL_AMC_CHAPTERS_INDEX, 
  getAmcModuleData, 
  getLoadedAmcModuleData 
} from '../data/amc';
import { PillarsAccordion } from './handbook/PillarsAccordion';
import { ChapterQuiz } from './handbook/ChapterQuiz';
import { AmcChapterView } from './handbook/AmcChapterView';
import { 
  BookOpen, 
  Search, 
  Printer, 
  Share2, 
  Check, 
  X,
  Compass,
  Trophy,
  Loader2
} from 'lucide-react';

/**
 * Pure helper to parse handbook search parameters with backward compatibility.
 */
function parseHandbookParams(searchParams) {
  const params = searchParams instanceof URLSearchParams 
    ? searchParams 
    : new URLSearchParams(typeof searchParams === 'string' ? searchParams : '');

  const modeParam = params.get('mode');
  const isAmc = modeParam === 'amc';
  const rawGrade = Number(params.get('grade'));
  const grade = (rawGrade >= 4 && rawGrade <= 12) ? rawGrade : 4;
  const rawLevel = Number(params.get('level'));
  const level = [8, 10, 12].includes(rawLevel) ? rawLevel : 8;
  const chapter = params.get('chapter') || null;

  return {
    mode: isAmc ? 'amc' : 'school',
    isAmc,
    grade,
    level,
    chapter
  };
}

/**
 * Pure helper to construct bidirectional synchronized handbook URLs.
 */
function buildHandbookUrl({ mode, grade, level, chapter }) {
  const isAmc = mode === 'amc';
  const params = new URLSearchParams();
  if (isAmc) {
    params.set('mode', 'amc');
    params.set('level', String(level || 8));
    if (chapter) params.set('chapter', chapter);
  } else {
    params.set('grade', String(grade || 4));
    if (chapter) params.set('chapter', chapter);
  }
  return `/?${params.toString()}`;
}

export function PublicHandbook({ onLaunchPractice, onPrintQuest }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // Mode resolution: 'amc' vs standard school mode ('school')
  const modeParam = searchParams.get('mode');
  const isAmcMode = modeParam === 'amc';

  // School Grade (4–12, default 4)
  const selectedGrade = useMemo(() => {
    const g = Number(searchParams.get('grade'));
    return (g >= 4 && g <= 12) ? g : 4;
  }, [searchParams]);

  // AMC Competition Level (8, 10, 12, default 8)
  const selectedAmcLevel = useMemo(() => {
    const lvl = Number(searchParams.get('level'));
    return [8, 10, 12].includes(lvl) ? lvl : 8;
  }, [searchParams]);

  const activeChapterParam = searchParams.get('chapter');

  // Filter and search states
  const [selectedTrackFilter, setSelectedTrackFilter] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedLinkNotification, setCopiedLinkNotification] = useState(false);
  const [isMobileChaptersOpen, setIsMobileChaptersOpen] = useState(false);

  // Dynamic Grade Data Loader (Kurikulum Merdeka)
  const { gradeData: currentGradeData, fullGradeData, loading: isGradeLoading } = useGradeData(selectedGrade);

  // Dynamic AMC Module Data Loader (AMC 8, AMC 10, AMC 12)
  const [currentLevelState, setCurrentLevelState] = useState(selectedAmcLevel);
  const [amcModuleData, setAmcModuleData] = useState(() => getLoadedAmcModuleData(selectedAmcLevel));
  const [isAmcLoading, setIsAmcLoading] = useState(() => !getLoadedAmcModuleData(selectedAmcLevel));

  if (currentLevelState !== selectedAmcLevel) {
    setCurrentLevelState(selectedAmcLevel);
    const cached = getLoadedAmcModuleData(selectedAmcLevel);
    if (cached) {
      setAmcModuleData(cached);
      setIsAmcLoading(false);
    } else {
      setAmcModuleData(null);
      setIsAmcLoading(true);
    }
  }

  useEffect(() => {
    if (!isAmcMode) return;
    let active = true;
    if (amcModuleData && amcModuleData.level === selectedAmcLevel) {
      return;
    }

    getAmcModuleData(selectedAmcLevel)
      .then((data) => {
        if (active) {
          setAmcModuleData(data);
          setIsAmcLoading(false);
        }
      })
      .catch((err) => {
        console.error('Failed to load AMC module data:', err);
        if (active) setIsAmcLoading(false);
      });

    return () => { active = false; };
  }, [isAmcMode, selectedAmcLevel, amcModuleData]);

  // ----------------------------------------------------
  // SCHOOL MODE DATA PIPELINE
  // ----------------------------------------------------
  const filteredChaptersByTrack = useMemo(() => {
    if (!currentGradeData?.chapters) return [];
    if (selectedTrackFilter === "ALL") return currentGradeData.chapters;
    return currentGradeData.chapters.filter((ch) => {
      const chTrack = (ch.track || "").toUpperCase();
      return chTrack === selectedTrackFilter.toUpperCase();
    });
  }, [currentGradeData, selectedTrackFilter]);

  const displayedChapters = useMemo(() => {
    if (!searchQuery.trim()) return filteredChaptersByTrack;
    const q = searchQuery.toLowerCase();
    return filteredChaptersByTrack.filter((ch) => {
      const matchTitle = ch.title.toLowerCase().includes(q);
      const matchConcept = ch.concepts?.some((c) => c.toLowerCase().includes(q));
      return matchTitle || matchConcept;
    });
  }, [filteredChaptersByTrack, searchQuery]);

  const currentChapter = useMemo(() => {
    if (!currentGradeData?.chapters || currentGradeData.chapters.length === 0) return null;
    if (activeChapterParam) {
      const found = currentGradeData.chapters.find((c) => c.id === activeChapterParam);
      if (found) return found;
    }
    return currentGradeData.chapters[0];
  }, [currentGradeData, activeChapterParam]);

  const fullQuestionsForChapter = useMemo(() => {
    if (fullGradeData && fullGradeData.chapters) {
      const foundFull = fullGradeData.chapters.find((c) => c.id === currentChapter?.id);
      if (foundFull && foundFull.questions) {
        return foundFull.questions;
      }
    }
    return currentChapter?.questions || [];
  }, [fullGradeData, currentChapter]);

  const trackCounts = useMemo(() => {
    if (!currentGradeData?.chapters) return { all: 0, wajib: 0, lanjut: 0 };
    const all = currentGradeData.chapters.length;
    const wajib = currentGradeData.chapters.filter(ch => (ch.track || '').toUpperCase() === 'WAJIB').length;
    const lanjut = currentGradeData.chapters.filter(ch => (ch.track || '').toUpperCase() === 'LANJUT').length;
    return { all, wajib, lanjut };
  }, [currentGradeData]);

  // ----------------------------------------------------
  // AMC COMPETITION MODE DATA PIPELINE
  // ----------------------------------------------------
  const currentAmcLevelMeta = useMemo(() => {
    return AMC_LEVELS_METADATA.find(m => m.level === selectedAmcLevel) || AMC_LEVELS_METADATA[0];
  }, [selectedAmcLevel]);

  const amcLevelChapters = useMemo(() => {
    const indexChapters = ALL_AMC_CHAPTERS_INDEX.filter((c) => c.level === selectedAmcLevel);
    if (amcModuleData && amcModuleData.level === selectedAmcLevel && amcModuleData.chapters) {
      return amcModuleData.chapters.map((ch) => {
        const meta = indexChapters.find((ic) => ic.id === ch.id);
        return {
          ...ch,
          level: selectedAmcLevel,
          domain: ch.domain || meta?.domain || '',
          concepts: (ch.concepts && ch.concepts.length > 0) ? ch.concepts : (meta?.concepts || []),
          questionCount: (ch.questions && ch.questions.length) || meta?.questionCount || 6
        };
      });
    }
    return indexChapters;
  }, [amcModuleData, selectedAmcLevel]);

  const displayedAmcChapters = useMemo(() => {
    if (!searchQuery.trim()) return amcLevelChapters;
    const q = searchQuery.toLowerCase();
    return amcLevelChapters.filter((ch) => {
      const matchTitle = (ch.title || '').toLowerCase().includes(q);
      const matchDomain = (ch.domain || '').toLowerCase().includes(q);
      const matchConcept = ch.concepts?.some((c) => c.toLowerCase().includes(q));
      return matchTitle || matchDomain || matchConcept;
    });
  }, [amcLevelChapters, searchQuery]);

  const activeAmcChapter = useMemo(() => {
    if (!amcLevelChapters || amcLevelChapters.length === 0) return null;
    if (activeChapterParam) {
      const found = amcLevelChapters.find((c) => c.id === activeChapterParam);
      if (found) return found;
    }
    return amcLevelChapters[0];
  }, [amcLevelChapters, activeChapterParam]);

  // ----------------------------------------------------
  // NAVIGATION & MODE SWITCH HANDLERS
  // ----------------------------------------------------
  const handleSwitchToSchoolMode = () => {
    const gradeObj = CURRICULUM_DATA.find(g => g.grade === selectedGrade) || CURRICULUM_DATA[0];
    const firstCh = gradeObj?.chapters?.[0]?.id || '';
    setSearchParams({ grade: selectedGrade, ...(firstCh ? { chapter: firstCh } : {}) });
    setSelectedTrackFilter("ALL");
    setSearchQuery("");
    setIsMobileChaptersOpen(false);
  };

  const handleSwitchToAmcMode = () => {
    const firstAmcCh = ALL_AMC_CHAPTERS_INDEX.find(c => c.level === selectedAmcLevel)?.id || 'amc8-ch1-permutations';
    setSearchParams({ mode: 'amc', level: selectedAmcLevel, chapter: firstAmcCh });
    setSelectedAmcDomainFilter("ALL");
    setSearchQuery("");
    setIsMobileChaptersOpen(false);
  };

  const handleSelectGrade = (grade) => {
    const gradeObj = CURRICULUM_DATA.find(g => g.grade === grade);
    const firstCh = gradeObj?.chapters?.[0]?.id || '';
    setSearchParams({ grade, ...(firstCh ? { chapter: firstCh } : {}) });
    setSelectedTrackFilter("ALL");
    setSearchQuery("");
    setIsMobileChaptersOpen(false);
  };

  const handleSelectAmcLevel = (lvl) => {
    const firstCh = ALL_AMC_CHAPTERS_INDEX.find(c => c.level === lvl)?.id || '';
    setSearchParams({ mode: 'amc', level: lvl, ...(firstCh ? { chapter: firstCh } : {}) });
    setSelectedAmcDomainFilter("ALL");
    setSearchQuery("");
    setIsMobileChaptersOpen(false);
  };

  const handleSelectSchoolChapter = (chapterId) => {
    setSearchParams({ grade: selectedGrade, chapter: chapterId });
    setIsMobileChaptersOpen(false);
    if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
      window.scrollTo({ top: 180, behavior: 'smooth' });
    }
  };

  const handleSelectAmcChapter = (chapterId) => {
    setSearchParams({ mode: 'amc', level: selectedAmcLevel, chapter: chapterId });
    setIsMobileChaptersOpen(false);
    if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
      window.scrollTo({ top: 180, behavior: 'smooth' });
    }
  };

  const handleSelectTrack = (track) => {
    setSelectedTrackFilter(track);
    if (!currentGradeData?.chapters) return;
    const matching = track === 'ALL'
      ? currentGradeData.chapters
      : currentGradeData.chapters.filter(ch => (ch.track || '').toUpperCase() === track.toUpperCase());
    if (matching.length > 0 && (!currentChapter || !matching.some(ch => ch.id === currentChapter.id))) {
      const nextCh = matching[0].id;
      setSearchParams({ grade: selectedGrade, chapter: nextCh });
    }
  };


  const handleCopyChapterLink = () => {
    const url = isAmcMode
      ? `${window.location.origin}/?mode=amc&level=${selectedAmcLevel}&chapter=${activeAmcChapter?.id || ''}`
      : `${window.location.origin}/?grade=${selectedGrade}&chapter=${currentChapter?.id || ''}`;
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(url);
    }
    setCopiedLinkNotification(true);
    setTimeout(() => setCopiedLinkNotification(false), 2500);
  };

  return (
    <div className="handbook-container">
      {/* Top Hero Banner */}
      <div className="handbook-hero">
        <div className="handbook-hero-badges">
          {isAmcMode ? (
            <>
              <span className="badge badge-sd" style={{ fontSize: '0.72rem' }}>
                Olimpiade Matematika AMC (American Mathematics Competitions)
              </span>
              <span className="badge badge-cat-pas" style={{ fontSize: '0.72rem' }}>
                36 Bab • 216 Soal Kompetisi
              </span>
            </>
          ) : (
            <>
              <span className="badge badge-sd" style={{ fontSize: '0.72rem' }}>
                Kurikulum Merdeka Kemendikbudristek
              </span>
              <span className="badge badge-cat-pas" style={{ fontSize: '0.72rem' }}>
                55 Bab • 1.100 Soal Terverifikasi
              </span>
            </>
          )}
        </div>
        <h1 className="handbook-hero-title">
          {isAmcMode ? "Buku Panduan & Latihan Soal Olimpiade AMC" : "Buku Saku & Portal Mandiri Matematika"}
        </h1>
        <p className="handbook-hero-desc">
          {isAmcMode 
            ? "Materi komprehensif 6 pilar teori, pembuktian bertahap, dan bank soal isian singkat untuk persiapan kompetisi AMC 8, AMC 10, dan AMC 12."
            : "Akses bebas rangkuman konsep, rumus penting, miskonsepsi umum, dan latihan diagnostik interaktif untuk seluruh jenjang SD, SMP, hingga SMA."}
        </p>
      </div>

      {/* Mode Selector Segmented Controls (Kurikulum Merdeka vs Olimpiade AMC) */}
      <div className="handbook-mode-selector" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
        <div 
          role="tablist"
          aria-label="Mode Pembelajaran"
          style={{
            display: 'inline-flex',
            backgroundColor: '#F1F5F9',
            padding: '0.35rem',
            borderRadius: '12px',
            border: '1px solid #CBD5E1',
            gap: '0.35rem',
            maxWidth: '100%',
            overflowX: 'auto'
          }}
        >
          <button
            id="btn-mode-school"
            type="button"
            role="tab"
            aria-selected={!isAmcMode}
            className={`btn ${!isAmcMode ? 'btn-royal' : 'btn-ghost'}`}
            style={{
              padding: '0.55rem 1.25rem',
              borderRadius: '8px',
              fontWeight: !isAmcMode ? 700 : 500,
              fontSize: '0.875rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: !isAmcMode ? '0 2px 6px rgba(15, 23, 42, 0.15)' : 'none'
            }}
            onClick={handleSwitchToSchoolMode}
          >
            <BookOpen size={16} />
            <span>Kurikulum Merdeka (Kelas 4–12)</span>
          </button>

          <button
            id="btn-mode-amc"
            type="button"
            role="tab"
            aria-selected={isAmcMode}
            className={`btn ${isAmcMode ? 'btn-royal' : 'btn-ghost'}`}
            style={{
              padding: '0.55rem 1.25rem',
              borderRadius: '8px',
              fontWeight: isAmcMode ? 700 : 500,
              fontSize: '0.875rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: isAmcMode ? '0 2px 6px rgba(15, 23, 42, 0.15)' : 'none'
            }}
            onClick={handleSwitchToAmcMode}
          >
            <Trophy size={16} />
            <span>Olimpiade AMC (AMC 8, AMC 10, AMC 12)</span>
          </button>
        </div>
      </div>

      {/* Grade / Level Selector Tabs */}
      <div className="handbook-grade-tabs-wrapper">
        <div className="handbook-grade-tabs">
          {isAmcMode ? (
            /* AMC Competition Level Buttons (AMC 8, AMC 10, AMC 12) */
            AMC_LEVELS_METADATA.map((lvl) => {
              const isSelected = Number(selectedAmcLevel) === lvl.level;
              return (
                <button
                  key={lvl.level}
                  id={`btn-public-amc-${lvl.level}`}
                  onClick={() => handleSelectAmcLevel(lvl.level)}
                  className={`btn ${isSelected ? 'btn-royal' : 'btn-outline'} handbook-grade-btn`}
                  style={{ padding: '0.5rem 0.9rem', fontSize: '0.825rem', fontWeight: isSelected ? 700 : 500 }}
                >
                  <span>{lvl.title} • {lvl.targetGrades}</span>
                </button>
              );
            })
          ) : (
            /* Standard School Grade Buttons (Kelas 4 - 12) */
            CURRICULUM_DATA.map((gradeObj) => {
              const isSelected = Number(selectedGrade) === gradeObj.grade;
              return (
                <button
                  key={gradeObj.grade}
                  id={`btn-public-grade-${gradeObj.grade}`}
                  onClick={() => handleSelectGrade(gradeObj.grade)}
                  className={`btn ${isSelected ? 'btn-royal' : 'btn-outline'} handbook-grade-btn`}
                  style={{ padding: '0.5rem 0.9rem', fontSize: '0.825rem', fontWeight: isSelected ? 700 : 500 }}
                >
                  <span>Kelas {gradeObj.grade} {gradeObj.level}</span>
                </button>
              );
            })
          )}
        </div>
      </div>

      {/* Track Filter Pills (Only for SMA Fase F Grade 11 & 12) */}
      {!isAmcMode && selectedGrade >= 11 && (
        <div className="editorial-card" style={{ padding: '0.75rem 1.25rem', marginBottom: '1.25rem', backgroundColor: '#F8FAFC' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
              Peminatan / Jalur:
            </span>
            <div className="nav-pill-group" style={{ margin: 0 }}>
              <button
                id="btn-filter-track-all"
                className={`nav-pill ${selectedTrackFilter === 'ALL' ? 'active' : ''}`}
                style={{ padding: '0.35rem 0.8rem', fontSize: '0.8rem' }}
                onClick={() => handleSelectTrack('ALL')}
              >
                Semua ({trackCounts.all})
              </button>
              <button
                id="btn-filter-track-wajib"
                className={`nav-pill ${selectedTrackFilter === 'WAJIB' ? 'active' : ''}`}
                style={{ padding: '0.35rem 0.8rem', fontSize: '0.8rem' }}
                onClick={() => handleSelectTrack('WAJIB')}
              >
                📘 Matematika Utama ({trackCounts.wajib})
              </button>
              <button
                id="btn-filter-track-lanjut"
                className={`nav-pill ${selectedTrackFilter === 'LANJUT' ? 'active' : ''}`}
                style={{ padding: '0.35rem 0.8rem', fontSize: '0.8rem' }}
                onClick={() => handleSelectTrack('LANJUT')}
              >
                🔬 Matematika Tingkat Lanjut ({trackCounts.lanjut})
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chapter Explorer Grid */}
      <div className="handbook-explorer-grid">
        {/* Mobile Quick Chapter Selector Bar */}
        <div className="mobile-chapter-bar">
          <button
            type="button"
            className="mobile-chapter-btn"
            onClick={() => setIsMobileChaptersOpen(!isMobileChaptersOpen)}
          >
            <div style={{ textAlign: 'left', flex: 1, minWidth: 0 }}>
              {isAmcMode ? (
                <>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    Bab {displayedAmcChapters.findIndex(c => c.id === activeAmcChapter?.id) + 1} dari {displayedAmcChapters.length} • AMC {selectedAmcLevel}
                  </div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--primary-navy)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {activeAmcChapter?.title}
                  </div>
                </>
              ) : (
                <>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    Bab {displayedChapters.findIndex(c => c.id === currentChapter?.id) + 1} dari {displayedChapters.length} • Kelas {currentGradeData.grade}
                  </div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--primary-navy)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {currentChapter?.title}
                  </div>
                </>
              )}
            </div>
            <span className="btn btn-outline" style={{ fontSize: '0.75rem', padding: '0.35rem 0.75rem', flexShrink: 0 }}>
              {isMobileChaptersOpen ? "Tutup Bab ▴" : "Ganti Bab ▾"}
            </span>
          </button>
        </div>

        {/* LEFT COLUMN: CHAPTERS LIST */}
        <div className={`editorial-card chapter-sidebar-wrapper ${isMobileChaptersOpen ? 'mobile-open' : ''}`} style={{ padding: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
            <h3 style={{ fontSize: '1.05rem', color: 'var(--primary-navy)', display: 'flex', alignItems: 'center', gap: '0.4rem', margin: 0 }}>
              <BookOpen size={17} />
              {isAmcMode 
                ? `Daftar Bab AMC ${selectedAmcLevel} (${displayedAmcChapters.length})` 
                : `Daftar Bab (${displayedChapters.length})`}
            </h3>
          </div>

          {/* Search Input */}
          <div style={{ position: 'relative', marginBottom: '0.85rem' }}>
            <Search size={14} color="var(--text-muted)" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="text" 
              className="form-input" 
              placeholder={isAmcMode ? "Cari bab, topik, atau konsep AMC..." : "Cari bab atau konsep..."} 
              style={{ paddingLeft: '2.2rem', fontSize: '0.825rem' }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                style={{ position: 'absolute', right: '0.65rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
              >
                <X size={13} />
              </button>
            )}
          </div>

          {/* Chapters List */}
          <div className="chapter-list-scrollable" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {isAmcMode ? (
              /* AMC Chapters in Sidebar */
              displayedAmcChapters.map((ch, idx) => {
                const isSelected = activeAmcChapter?.id === ch.id;
                return (
                  <button
                    key={ch.id}
                    id={`btn-sidebar-chapter-${ch.id}`}
                    onClick={() => handleSelectAmcChapter(ch.id)}
                    className={`chapter-sidebar-item ${isSelected ? 'active' : ''}`}
                  >
                    <div className="chapter-sidebar-item-header">
                      <span className="chapter-num-badge">
                        Bab {ch.chapterIndex !== undefined ? ch.chapterIndex + 1 : idx + 1}
                      </span>
                      {ch.domain && (
                        <span className="badge badge-subtle" style={{ fontSize: '0.62rem', padding: '0.1rem 0.4rem' }}>
                          {ch.domain}
                        </span>
                      )}
                    </div>
                    <div className="chapter-item-title">{ch.title}</div>
                    <div className="chapter-item-subtitle">
                      {ch.questionCount || 6} butir latihan & pembahasan
                    </div>
                  </button>
                );
              })
            ) : (
              /* School Chapters in Sidebar */
              displayedChapters.map((ch, idx) => {
                const isSelected = currentChapter?.id === ch.id;
                const isLanjut = (ch.track || '').toUpperCase() === 'LANJUT';
                return (
                  <button
                    key={ch.id}
                    id={`btn-sidebar-chapter-${ch.id}`}
                    onClick={() => handleSelectSchoolChapter(ch.id)}
                    className={`chapter-sidebar-item ${isSelected ? 'active' : ''}`}
                  >
                    <div className="chapter-sidebar-item-header">
                      <span className="chapter-num-badge">Bab {idx + 1}</span>
                      {ch.trackLabel && (
                        <span className={`badge ${isLanjut ? 'badge-cat-hots' : 'badge-subtle'}`} style={{ fontSize: '0.62rem', padding: '0.1rem 0.4rem' }}>
                          {isLanjut ? 'Tingkat Lanjut' : 'Wajib'}
                        </span>
                      )}
                    </div>
                    <div className="chapter-item-title">{ch.title}</div>
                    <div className="chapter-item-subtitle">
                      20 butir latihan & pembahasan
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: CHAPTER CONTENT AREA */}
        <div className="chapter-main-content">
          {isAmcMode ? (
            /* AMC Chapter View with 6 Pillars & Competition Practice */
            isAmcLoading && (!amcModuleData || amcModuleData.level !== selectedAmcLevel) ? (
              <div className="editorial-card" style={{ padding: '3rem 2rem', textAlign: 'center' }}>
                <Loader2 size={36} className="spinner" style={{ color: 'var(--primary-blue)', animation: 'spin 1s linear infinite', margin: '0 auto 1rem' }} />
                <h3 style={{ color: 'var(--primary-navy)' }}>Memuat Modul Olimpiade AMC {selectedAmcLevel}...</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Menyiapkan 6 pilar teori, rumus kunci KaTeX, dan latihan soal kompetisi interaktif...
                </p>
              </div>
            ) : activeAmcChapter ? (
              <AmcChapterView
                chapter={activeAmcChapter}
                levelMeta={currentAmcLevelMeta}
                onPrintQuest={onPrintQuest}
              />
            ) : (
              <div className="editorial-card" style={{ padding: '3rem 2rem', textAlign: 'center' }}>
                <Compass size={40} color="var(--text-muted)" style={{ margin: '0 auto 1rem' }} />
                <h3>Pilih Bab Olimpiade untuk Membaca Materi</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Silakan pilih salah satu bab AMC dari panel di sebelah kiri.
                </p>
              </div>
            )
          ) : (
            /* School Grade Chapter View */
            currentChapter ? (
              <div>
                {/* Active Chapter Header */}
                <div className="editorial-card chapter-header-card">
                  <div className="chapter-header-top-bar">
                    <div className="chapter-header-badges">
                      <span className="badge badge-sd" style={{ fontSize: '0.75rem' }}>
                        Kelas {currentGradeData.grade} {currentGradeData.level}
                      </span>
                      {currentChapter.trackLabel && (
                        <span className="badge badge-cat-pas" style={{ fontSize: '0.75rem' }}>
                          {currentChapter.trackLabel}
                        </span>
                      )}
                    </div>

                    <div className="chapter-header-actions">
                      <button 
                        id="btn-copy-chapter-link"
                        className="btn btn-outline" 
                        style={{ padding: '0.4rem 0.75rem', fontSize: '0.8rem' }}
                        onClick={handleCopyChapterLink}
                      >
                        {copiedLinkNotification ? (
                          <>
                            <Check size={14} color="var(--status-emerald)" />
                            Link Tersalin!
                          </>
                        ) : (
                          <>
                            <Share2 size={14} />
                            Bagikan Bab
                          </>
                        )}
                      </button>

                      <button 
                        id="btn-print-chapter-worksheet"
                        className="btn btn-primary allow-print"
                        style={{ padding: '0.4rem 0.75rem', fontSize: '0.8rem' }}
                        onClick={() => onPrintQuest({
                          title: `Lembar Kerja: ${currentChapter.title}`,
                          grade: currentGradeData.grade,
                          chapterId: currentChapter.id,
                          chapterTitle: currentChapter.title,
                          questions: fullQuestionsForChapter
                        })}
                      >
                        <Printer size={14} />
                        Cetak LKPD A4
                      </button>
                    </div>
                  </div>

                  <h2 className="chapter-header-title">
                    {currentChapter.title}
                  </h2>

                  {currentChapter.concepts && currentChapter.concepts.length > 0 && (
                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                      {currentChapter.concepts.map((concept, cIdx) => (
                        <span key={cIdx} className="badge badge-subtle" style={{ fontSize: '0.72rem' }}>
                          {concept}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* 6 Pedagogical Pillars Accordion */}
                <PillarsAccordion summary={currentChapter.summary} />

                {/* Interactive Diagnostic Quiz */}
                <ChapterQuiz
                  questions={fullQuestionsForChapter}
                  chapterTitle={currentChapter.title}
                  grade={currentGradeData.grade}
                  isLoadingQuestions={isGradeLoading}
                  onLaunchPractice={onLaunchPractice}
                  onPrintQuest={onPrintQuest}
                />
              </div>
            ) : (
              <div className="editorial-card" style={{ padding: '3rem 2rem', textAlign: 'center' }}>
                <Compass size={40} color="var(--text-muted)" style={{ margin: '0 auto 1rem' }} />
                <h3>Pilih Bab untuk Membaca Materi</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Silakan pilih salah satu bab kurikulum dari panel di sebelah kiri.
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

// Attach pure utilities to component for testing and external validation
PublicHandbook.parseParams = parseHandbookParams;
PublicHandbook.buildUrl = buildHandbookUrl;

export default PublicHandbook;
