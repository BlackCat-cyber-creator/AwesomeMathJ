import React, { useState, useMemo } from 'react';
import { CURRICULUM_DATA } from '../data/curriculumData';
import { useGradeData } from '../hooks/useCurriculum';
import { PillarsAccordion } from './handbook/PillarsAccordion';
import { ChapterQuiz } from './handbook/ChapterQuiz';
import { 
  BookOpen, 
  Search, 
  Printer, 
  Share2, 
  Check, 
  X,
  Compass
} from 'lucide-react';

export function PublicHandbook({ onLaunchPractice, onPrintQuest }) {
  const [selectedGrade, setSelectedGrade] = useState(4);
  const [selectedChapterId, setSelectedChapterId] = useState("sd4-bab1-bilangan-cacah");
  const [selectedTrackFilter, setSelectedTrackFilter] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedLinkNotification, setCopiedLinkNotification] = useState(false);
  const [isMobileChaptersOpen, setIsMobileChaptersOpen] = useState(false);

  // Dynamic Grade Data Loader with caching
  const { gradeData: currentGradeData, fullGradeData, loading: isGradeLoading } = useGradeData(selectedGrade);

  // Filter chapters by track (Wajib / Lanjut)
  const filteredChaptersByTrack = useMemo(() => {
    if (!currentGradeData?.chapters) return [];
    if (selectedTrackFilter === "ALL") return currentGradeData.chapters;
    return currentGradeData.chapters.filter((ch) => ch.track === selectedTrackFilter);
  }, [currentGradeData, selectedTrackFilter]);

  // Filter chapters by search query
  const displayedChapters = useMemo(() => {
    if (!searchQuery.trim()) return filteredChaptersByTrack;
    const q = searchQuery.toLowerCase();
    return filteredChaptersByTrack.filter((ch) => {
      const matchTitle = ch.title.toLowerCase().includes(q);
      const matchConcept = ch.concepts?.some((c) => c.toLowerCase().includes(q));
      return matchTitle || matchConcept;
    });
  }, [filteredChaptersByTrack, searchQuery]);

  // Active Chapter (falls back to first chapter of grade)
  const currentChapter = useMemo(() => {
    if (!currentGradeData?.chapters || currentGradeData.chapters.length === 0) return null;
    const found = currentGradeData.chapters.find((c) => c.id === selectedChapterId);
    return found || currentGradeData.chapters[0];
  }, [currentGradeData, selectedChapterId]);

  // Full questions from loaded grade data if available
  const fullQuestionsForChapter = useMemo(() => {
    if (fullGradeData && fullGradeData.chapters) {
      const foundFull = fullGradeData.chapters.find((c) => c.id === currentChapter?.id);
      if (foundFull && foundFull.questions) {
        return foundFull.questions;
      }
    }
    return currentChapter?.questions || [];
  }, [fullGradeData, currentChapter]);

  // Copy shareable link
  const handleCopyChapterLink = () => {
    const url = `${window.location.origin}/?grade=${selectedGrade}&chapter=${currentChapter?.id || ''}`;
    navigator.clipboard.writeText(url);
    setCopiedLinkNotification(true);
    setTimeout(() => setCopiedLinkNotification(false), 2500);
  };

  return (
    <div className="handbook-container">
      {/* Top Banner */}
      <div className="handbook-hero">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
          <span className="badge badge-sd" style={{ fontSize: '0.72rem' }}>
            Kurikulum Merdeka Kemendikbudristek
          </span>
          <span className="badge badge-cat-pas" style={{ fontSize: '0.72rem' }}>
            55 Bab • 1.100 Soal Terverifikasi
          </span>
        </div>
        <h1 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--primary-navy)', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
          Buku Saku & Portal Mandiri Matematika
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: 720, margin: 0, lineHeight: 1.6 }}>
          Akses bebas rangkuman konsep, rumus penting, miskonsepsi umum, dan latihan diagnostik interaktif untuk seluruh jenjang SD, SMP, hingga SMA.
        </p>
      </div>

      {/* Grade Selector Tabs */}
      <div className="handbook-grade-tabs-wrapper">
        <div className="handbook-grade-tabs">
          {CURRICULUM_DATA.map((gradeObj) => {
            const isSelected = Number(selectedGrade) === gradeObj.grade;
            return (
              <button
                key={gradeObj.grade}
                id={`btn-public-grade-${gradeObj.grade}`}
                onClick={() => {
                  setSelectedGrade(gradeObj.grade);
                  if (gradeObj.chapters.length > 0) {
                    setSelectedChapterId(gradeObj.chapters[0].id);
                  }
                  setSelectedTrackFilter("ALL");
                  setIsMobileChaptersOpen(false);
                }}
                className={`btn ${isSelected ? 'btn-royal' : 'btn-outline'} handbook-grade-btn`}
                style={{ padding: '0.5rem 0.9rem', fontSize: '0.825rem', fontWeight: isSelected ? 700 : 500 }}
              >
                <span>Kelas {gradeObj.grade} {gradeObj.level}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* SMA Track Filter (Wajib vs Lanjut) */}
      {selectedGrade >= 10 && (
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
                onClick={() => setSelectedTrackFilter('ALL')}
              >
                Semua ({currentGradeData.chapters.length})
              </button>
              <button
                id="btn-filter-track-wajib"
                className={`nav-pill ${selectedTrackFilter === 'WAJIB' ? 'active' : ''}`}
                style={{ padding: '0.35rem 0.8rem', fontSize: '0.8rem' }}
                onClick={() => setSelectedTrackFilter('WAJIB')}
              >
                📘 Matematika Utama (Wajib)
              </button>
              <button
                id="btn-filter-track-lanjut"
                className={`nav-pill ${selectedTrackFilter === 'LANJUT' ? 'active' : ''}`}
                style={{ padding: '0.35rem 0.8rem', fontSize: '0.8rem' }}
                onClick={() => setSelectedTrackFilter('LANJUT')}
              >
                🔬 Matematika Tingkat Lanjut (Pilihan)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chapter Explorer Grid */}
      <div className="handbook-explorer-grid">
        {/* Mobile Quick Chapter Selector */}
        <div className="mobile-chapter-bar">
          <button
            type="button"
            className="mobile-chapter-btn"
            onClick={() => setIsMobileChaptersOpen(!isMobileChaptersOpen)}
          >
            <div style={{ textAlign: 'left', flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                Bab {displayedChapters.findIndex(c => c.id === currentChapter?.id) + 1} dari {displayedChapters.length} • Kelas {currentGradeData.grade}
              </div>
              <div style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--primary-navy)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {currentChapter?.title}
              </div>
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
              Daftar Bab ({displayedChapters.length})
            </h3>
          </div>

          {/* Search Input */}
          <div style={{ position: 'relative', marginBottom: '0.85rem' }}>
            <Search size={14} color="var(--text-muted)" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="text" 
              className="form-input" 
              placeholder="Cari bab atau konsep..." 
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
          <div className="chapter-list-scrollable" style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
            {displayedChapters.map((ch, idx) => {
              const isSelected = currentChapter?.id === ch.id;
              return (
                <button
                  key={ch.id}
                  id={`btn-sidebar-chapter-${ch.id}`}
                  onClick={() => {
                    setSelectedChapterId(ch.id);
                    setIsMobileChaptersOpen(false);
                    window.scrollTo({ top: 180, behavior: 'smooth' });
                  }}
                  className={`chapter-sidebar-item ${isSelected ? 'active' : ''}`}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
                    <span className="chapter-num-badge">Bab {idx + 1}</span>
                    {ch.trackLabel && (
                      <span className="badge badge-cat-pas" style={{ fontSize: '0.65rem', padding: '0.1rem 0.4rem' }}>
                        {ch.trackLabel}
                      </span>
                    )}
                  </div>
                  <div className="chapter-item-title">{ch.title}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: CHAPTER CONTENT & 6 PILLARS & QUIZ */}
        <div className="chapter-main-content">
          {currentChapter ? (
            <div>
              {/* Active Chapter Header */}
              <div className="editorial-card" style={{ padding: '1.75rem', marginBottom: '1.5rem', borderLeft: '5px solid var(--primary-navy)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center', flexWrap: 'wrap' }}>
                    <span className="badge badge-sd" style={{ fontSize: '0.75rem' }}>
                      Kelas {currentGradeData.grade} {currentGradeData.level}
                    </span>
                    {currentChapter.trackLabel && (
                      <span className="badge badge-cat-pas" style={{ fontSize: '0.75rem' }}>
                        {currentChapter.trackLabel}
                      </span>
                    )}
                  </div>

                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button 
                      id="btn-copy-chapter-link"
                      className="btn btn-outline" 
                      style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}
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
                      style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}
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

                <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--primary-navy)', margin: '0.35rem 0 0.5rem' }}>
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
          )}
        </div>
      </div>
    </div>
  );
}

export default PublicHandbook;
