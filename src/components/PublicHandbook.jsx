import React, { useState, useMemo, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { CURRICULUM_DATA } from '../data/curriculumData';
import { MathText } from './MathRenderer';
import { 
  BookOpen, 
  Search, 
  Sparkles, 
  Printer, 
  Lightbulb, 
  HelpCircle, 
  CheckCircle2, 
  Layers, 
  GraduationCap, 
  Bookmark, 
  Share2, 
  Check,
  AlertTriangle,
  FileText,
  Compass,
  XCircle,
  RotateCcw
} from 'lucide-react';
import { QuestionVisual } from './QuestionVisual';

/**
 * PublicHandbook:
 * Portal Terbuka untuk Publik (Public Math Handbook & Knowledge Hub)
 * Seluruh materi matematika (Kelas 4 SD s/d 12 SMA)
 * dapat diakses bebas oleh siapa saja secara mandiri tanpa login.
 * Dilengkapi mode pengerjaan latihan mandiri dengan tombol Selesai untuk evaluasi.
 */
export function PublicHandbook({ onOpenAuth, onLaunchPractice, onPrintQuest }) {
  const [selectedGrade, setSelectedGrade] = useState(4);
  const [selectedChapterId, setSelectedChapterId] = useState("sd4-bab1-bilangan-cacah");
  const [selectedTrackFilter, setSelectedTrackFilter] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Chapter reading state
  const [revealedSolutions, setRevealedSolutions] = useState({}); // { [qId]: boolean }
  const [revealedHints, setRevealedHints] = useState({}); // { [qId]: boolean }
  const [selectedAnswers, setSelectedAnswers] = useState({}); // { [qId]: optionKey }
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);
  const [copiedLinkNotification, setCopiedLinkNotification] = useState(false);

  // Reset quiz & answers state when switching chapter or grade
  useEffect(() => {
    setSelectedAnswers({});
    setIsQuizSubmitted(false);
    setRevealedSolutions({});
    setRevealedHints({});
  }, [selectedGrade, selectedChapterId]);

  const handleSelectOption = (qId, optionKey) => {
    if (isQuizSubmitted) return; // Locked once evaluated; can be retried with "Ulangi Latihan"
    setSelectedAnswers(prev => ({
      ...prev,
      [qId]: optionKey
    }));
  };

  const handleResetAnswer = (qId) => {
    if (isQuizSubmitted) return;
    setSelectedAnswers(prev => {
      const next = { ...prev };
      delete next[qId];
      return next;
    });
  };

  // Active Grade Data
  const currentGradeData = useMemo(() => {
    return CURRICULUM_DATA.find((g) => g.grade === Number(selectedGrade)) || CURRICULUM_DATA[0];
  }, [selectedGrade]);

  // Chapters filtered by track (for Grade 11 & 12)
  const displayedChapters = useMemo(() => {
    if (!currentGradeData?.chapters) return [];
    if (currentGradeData.grade !== 11 && currentGradeData.grade !== 12) {
      return currentGradeData.chapters;
    }
    if (selectedTrackFilter === "ALL") return currentGradeData.chapters;
    return currentGradeData.chapters.filter((c) => c.track === selectedTrackFilter);
  }, [currentGradeData, selectedTrackFilter]);

  // Active Chapter
  const currentChapter = useMemo(() => {
    if (!currentGradeData?.chapters?.length) return null;
    const found = displayedChapters.find((c) => c.id === selectedChapterId);
    return found || displayedChapters[0] || currentGradeData.chapters[0];
  }, [currentGradeData, displayedChapters, selectedChapterId]);

  // Quiz progress and evaluation for current chapter
  const answeredCount = useMemo(() => {
    if (!currentChapter?.questions) return 0;
    return currentChapter.questions.filter((q) => selectedAnswers[q.id] !== undefined).length;
  }, [currentChapter, selectedAnswers]);

  const { correctCount, quizScore } = useMemo(() => {
    if (!currentChapter?.questions) return { correctCount: 0, quizScore: 0 };
    const total = currentChapter.questions.length;
    if (total === 0) return { correctCount: 0, quizScore: 0 };
    let correct = 0;
    currentChapter.questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) correct++;
    });
    const score = Math.round((correct / total) * 100);
    return { correctCount: correct, quizScore: score };
  }, [currentChapter, selectedAnswers]);

  const handleSubmitQuiz = () => {
    setIsQuizSubmitted(true);
    if (quizScore >= 60) {
      try {
        confetti({
          particleCount: 85,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {}
    }
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setIsQuizSubmitted(false);
    setRevealedSolutions({});
    setRevealedHints({});
  };

  // Global Search Results across all grades & chapters
  const searchResults = useMemo(() => {
    if (!searchQuery.trim() || searchQuery.trim().length < 2) return null;
    const q = searchQuery.toLowerCase().trim();
    const results = [];

    CURRICULUM_DATA.forEach((gradeItem) => {
      gradeItem.chapters.forEach((chapter) => {
        let matchScore = 0;
        let matchedReason = "";

        if (chapter.title.toLowerCase().includes(q)) {
          matchScore += 10;
          matchedReason = "Judul Bab";
        } else if (chapter.summary?.coreConcepts?.some((c) => c.toLowerCase().includes(q))) {
          matchScore += 5;
          matchedReason = "Konsep Kunci";
        } else if (chapter.summary?.tutorTip?.toLowerCase().includes(q)) {
          matchScore += 4;
          matchedReason = "Tips Belajar";
        } else if (chapter.questions?.some((qu) => qu.question.toLowerCase().includes(q))) {
          matchScore += 3;
          matchedReason = "Latihan Soal";
        }

        if (matchScore > 0) {
          results.push({
            grade: gradeItem.grade,
            level: gradeItem.level,
            phase: gradeItem.phase,
            chapter,
            matchedReason
          });
        }
      });
    });

    return results;
  }, [searchQuery]);

  // Toggle Solution Visibility
  const toggleSolution = (qId) => {
    setRevealedSolutions((prev) => ({
      ...prev,
      [qId]: !prev[qId]
    }));
  };

  // Toggle Hint Visibility
  const toggleHint = (qId) => {
    setRevealedHints((prev) => ({
      ...prev,
      [qId]: !prev[qId]
    }));
  };

  // Quick jump to search result
  const handleSelectSearchResult = (result) => {
    setSelectedGrade(result.grade);
    setSelectedChapterId(result.chapter.id);
    if (result.chapter.track) {
      setSelectedTrackFilter(result.chapter.track);
    } else {
      setSelectedTrackFilter("ALL");
    }
    setSearchQuery("");
  };

  // Share link handler
  const handleShareChapter = () => {
    const url = window.location.href.split('?')[0];
    navigator.clipboard.writeText(url);
    setCopiedLinkNotification(true);
    setTimeout(() => setCopiedLinkNotification(false), 2500);
  };

  // Launch Practice Quest for this chapter
  const handlePracticeThisChapter = () => {
    if (!currentChapter) return;
    onLaunchPractice({
      id: `practice-${currentChapter.id}-${Date.now()}`,
      title: `Latihan Mandiri: ${currentChapter.title}`,
      grade: currentGradeData.grade,
      chapterId: currentChapter.id,
      chapterTitle: currentChapter.title,
      track: currentChapter.track || null,
      trackLabel: currentChapter.trackLabel || null,
      category: "LATIHAN MANDIRI",
      studentId: "guest",
      studentName: "Siswa Pengunjung",
      deadline: null,
      questions: currentChapter.questions || [],
      tutorTip: currentChapter.summary?.tutorTip
    });
  };

  // Print Worksheet for this chapter
  const handlePrintThisChapter = () => {
    if (!currentChapter) return;
    onPrintQuest({
      id: `sheet-${currentChapter.id}`,
      title: `Lembar Kerja: ${currentChapter.title}`,
      grade: currentGradeData.grade,
      chapterId: currentChapter.id,
      chapterTitle: currentChapter.title,
      track: currentChapter.track || null,
      trackLabel: currentChapter.trackLabel || null,
      questions: currentChapter.questions || [],
      studentName: "Lembar Siswa",
      tutorTip: currentChapter.summary?.tutorTip
    });
  };

  // Helper to sanitize solutions from any "Sir Jevon" text on public view
  const formatSolutionText = (text) => {
    if (!text) return "";
    return text
      .replace(/\*\*Metode Simpel & Efektif Sir Jevon:\*\*/gi, "**Langkah Penyelesaian Terstruktur:**")
      .replace(/Sir Jevon/gi, "Tutor Pengajar");
  };

  const formatTipText = (text) => {
    if (!text) return "";
    return text.replace(/Sir Jevon/gi, "Tutor");
  };

  return (
    <div style={{ maxWidth: 1240, margin: '0 auto', padding: '1.5rem 1rem 4rem' }}>
      
      {/* ======================================================== */}
      {/* HERO SECTION: Clean, Independent & Academic             */}
      {/* ======================================================== */}
      <div 
        className="editorial-card" 
        style={{ 
          padding: '2.25rem 2rem', 
          marginBottom: '2rem', 
          background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)',
          borderLeft: '5px solid var(--primary-navy)',
          position: 'relative'
        }}
      >
        <div style={{ maxWidth: 880 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
            <span className="badge badge-primary" style={{ fontWeight: 700, letterSpacing: '0.04em' }}>
              BUKU PANDUAN & LATIHAN MATEMATIKA MANDIRI
            </span>
            <span className="badge badge-subtle">
              Kelas 4 SD – 12 SMA
            </span>
          </div>

          <h1 style={{ color: 'var(--primary-navy)', fontSize: '2rem', lineHeight: 1.25, marginBottom: '0.65rem' }}>
            AwesomeMathJ • Ensiklopedia & Latihan Matematika
          </h1>

          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
            Platform panduan belajar matematika lengkap dan terstruktur mulai dari jenjang SD, SMP, hingga SMA.
            Setiap bab memuat ringkasan konsep inti, kotak rumus teruji, tips cara cepat, serta kumpulan latihan soal 
            terbimbing untuk memperkuat pemahaman konsep secara mandiri.
          </p>
        </div>
      </div>

      {/* ======================================================== */}
      {/* SEARCH BAR & SHARE                                       */}
      {/* ======================================================== */}
      <div className="editorial-card" style={{ padding: '1.25rem 1.5rem', marginBottom: '1.75rem' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          {/* Search Input */}
          <div style={{ flex: '1 1 320px', position: 'relative' }}>
            <Search 
              size={18} 
              style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} 
            />
            <input 
              id="input-global-math-search"
              type="text" 
              className="form-input" 
              placeholder="Cari materi atau rumus (misal: Pythagoras, Aljabar, Porogapit, Integral, SPLDV, Matriks)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ paddingLeft: '2.5rem', fontSize: '0.9rem' }}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                style={{ position: 'absolute', right: '0.85rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontSize: '0.8rem' }}
              >
                ✕ Hapus
              </button>
            )}
          </div>

          {/* Action buttons */}
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <button 
              className="btn btn-outline" 
              onClick={handleShareChapter}
              title="Salin tautan buku panduan ini"
              style={{ fontSize: '0.825rem' }}
            >
              {copiedLinkNotification ? (
                <>
                  <Check size={14} color="var(--status-emerald)" />
                  Tautan Disalin!
                </>
              ) : (
                <>
                  <Share2 size={14} />
                  Bagikan Portal
                </>
              )}
            </button>
          </div>
        </div>

        {/* Global Search Results Dropdown/Box */}
        {searchResults && (
          <div style={{ marginTop: '1rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                Ditemukan {searchResults.length} materi terkait "{searchQuery}":
              </span>
            </div>
            {searchResults.length === 0 ? (
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                Tidak ditemukan materi yang cocok. Coba kata kunci lain seperti "pecahan", "sudut", "fungsi", "lingkaran".
              </p>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.6rem' }}>
                {searchResults.slice(0, 8).map((res) => (
                  <div 
                    key={res.chapter.id}
                    onClick={() => handleSelectSearchResult(res)}
                    style={{
                      padding: '0.65rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-subtle)',
                      backgroundColor: '#F9FAFB',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#EFF6FF';
                      e.currentTarget.style.borderColor = '#BFDBFE';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#F9FAFB';
                      e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.2rem' }}>
                      <span className="badge badge-sd" style={{ fontSize: '0.65rem' }}>
                        Kelas {res.grade} {res.level}
                      </span>
                      <span style={{ fontSize: '0.7rem', color: 'var(--primary-blue)', fontWeight: 600 }}>
                        {res.matchedReason}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary-navy)' }}>
                      {res.chapter.title}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* ======================================================== */}
      {/* GRADE NAVIGATION SELECTOR PILLS                         */}
      {/* ======================================================== */}
      <div style={{ marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-navy)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Pilih Tingkat Kelas:
          </span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Kurikulum Matematika Terstruktur (SD – SMA)
          </span>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
          {CURRICULUM_DATA.map((gradeObj) => {
            const isSelected = Number(selectedGrade) === gradeObj.grade;
            const label = `Kelas ${gradeObj.grade} ${gradeObj.level}`;

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
                }}
                className={`btn ${isSelected ? 'btn-royal' : 'btn-outline'}`}
                style={{
                  padding: '0.5rem 0.9rem',
                  fontSize: '0.825rem',
                  whiteSpace: 'nowrap',
                  fontWeight: isSelected ? 700 : 500
                }}
              >
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Special Track Filter for Grade 11 & 12 (Wajib vs Pilihan Lanjut) */}
      {(currentGradeData.grade === 11 || currentGradeData.grade === 12) && (
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

      {/* ======================================================== */}
      {/* MAIN CHAPTER EXPLORER LAYOUT                             */}
      {/* ======================================================== */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 340px) 1fr', gap: '1.5rem', alignItems: 'start' }}>
        
        {/* LEFT COLUMN: CHAPTERS LIST */}
        <div className="editorial-card" style={{ padding: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
            <h3 style={{ fontSize: '1.05rem', color: 'var(--primary-navy)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <BookOpen size={17} />
              Daftar Bab ({displayedChapters.length})
            </h3>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              {currentGradeData.level}
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxHeight: '720px', overflowY: 'auto', paddingRight: '0.25rem' }}>
            {displayedChapters.map((chapter, idx) => {
              const isSelected = currentChapter?.id === chapter.id;
              const isLanjut = chapter.track === "LANJUT";

              return (
                <button
                  key={chapter.id}
                  id={`btn-select-chapter-${chapter.id}`}
                  onClick={() => setSelectedChapterId(chapter.id)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    textAlign: 'left',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: `1px solid ${isSelected ? 'var(--primary-navy)' : 'var(--border-subtle)'}`,
                    backgroundColor: isSelected ? 'var(--primary-light)' : '#FFFFFF',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    boxShadow: isSelected ? 'var(--shadow-card)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', marginBottom: '0.25rem' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: isSelected ? 'var(--primary-navy)' : 'var(--text-muted)' }}>
                      Bab {idx + 1}
                    </span>
                    {chapter.trackLabel && (
                      <span className={`badge ${isLanjut ? 'badge-cat-hots' : 'badge-subtle'}`} style={{ fontSize: '0.62rem' }}>
                        {isLanjut ? 'Tingkat Lanjut' : 'Wajib'}
                      </span>
                    )}
                  </div>
                  <span style={{ fontSize: '0.88rem', fontWeight: isSelected ? 700 : 500, color: isSelected ? 'var(--primary-navy)' : 'var(--text-primary)', lineHeight: 1.35 }}>
                    {chapter.title}
                  </span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
                    {chapter.questions?.length || 0} latihan soal & pembahasan
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: CHAPTER CONTENT & QUESTIONS */}
        {currentChapter ? (
          <div>
            {/* CHAPTER HEADER BANNER */}
            <div className="editorial-card" style={{ padding: '1.75rem', marginBottom: '1.5rem', borderTop: '4px solid var(--primary-navy)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.85rem' }}>
                <div>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
                    <span className="badge badge-sd">
                      Kelas {currentGradeData.grade} {currentGradeData.level}
                    </span>
                    {currentChapter.trackLabel && (
                      <span className="badge badge-cat-pas">
                        {currentChapter.trackLabel}
                      </span>
                    )}
                  </div>
                  <h2 style={{ color: 'var(--primary-navy)', fontSize: '1.45rem', marginTop: '0.25rem' }}>
                    {currentChapter.title}
                  </h2>
                </div>

                {/* Chapter Action Buttons */}
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <button 
                    id="btn-print-this-chapter"
                    className="btn btn-outline" 
                    onClick={handlePrintThisChapter}
                    style={{ fontSize: '0.825rem' }}
                    title="Cetak lembar kerja A4 / Simpan PDF"
                  >
                    <Printer size={15} />
                    Cetak Lembar A4
                  </button>
                </div>
              </div>

              {/* 1. PENJELASAN PENGANTAR & KONTEKS MATERI */}
              {currentChapter.summary?.overview && (
                <div style={{ marginTop: '1.25rem', backgroundColor: '#F8FAFC', padding: '1.25rem', borderRadius: 'var(--radius-sm)', borderLeft: '4px solid var(--primary-blue)', borderTop: '1px solid var(--border-subtle)', borderRight: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
                  <h4 style={{ fontSize: '0.95rem', color: 'var(--primary-navy)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <Compass size={17} color="var(--primary-blue)" />
                    Pengantar & Konteks Konsep:
                  </h4>
                  <div style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                    <MathText text={currentChapter.summary.overview} />
                  </div>
                </div>
              )}

              {/* 2. KONSEP KUNCI & TEOREMA INTI */}
              {currentChapter.summary?.coreConcepts && (
                <div style={{ marginTop: '1rem', backgroundColor: '#FFFFFF', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-subtle)' }}>
                  <h4 style={{ fontSize: '0.95rem', color: 'var(--primary-navy)', marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <Layers size={17} color="var(--primary-navy)" />
                    Konsep Kunci & Pemahaman Teori:
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {currentChapter.summary.coreConcepts.map((concept, cIdx) => (
                      <div key={cIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        <span style={{ color: 'var(--primary-blue)', fontWeight: 700, marginTop: '2px' }}>•</span>
                        <div style={{ flex: 1 }}>
                          <MathText text={concept} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 3. CONTOH SOAL TERBIMBING (WORKED EXAMPLES) */}
              {currentChapter.summary?.workedExamples && currentChapter.summary.workedExamples.length > 0 && (
                <div style={{ marginTop: '1rem', backgroundColor: '#F9FAFB', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                  <h4 style={{ fontSize: '0.95rem', color: 'var(--primary-navy)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <FileText size={17} color="var(--primary-navy)" />
                    Contoh Soal Terbimbing & Analisis Langkah:
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {currentChapter.summary.workedExamples.map((ex, exIdx) => (
                      <div 
                        key={exIdx} 
                        style={{ 
                          backgroundColor: '#FFFFFF', 
                          padding: '1rem 1.15rem', 
                          borderRadius: 'var(--radius-xs)', 
                          border: '1px solid var(--border-medium)' 
                        }}
                      >
                        <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--primary-navy)', marginBottom: '0.35rem' }}>
                          Contoh #{exIdx + 1}: {ex.title}
                        </div>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.65rem' }}>
                          <MathText text={ex.problem} />
                        </div>
                        <div style={{ backgroundColor: '#F0FDF4', padding: '0.75rem 0.95rem', borderRadius: 'var(--radius-xs)', borderLeft: '3px solid var(--status-emerald)', fontSize: '0.85rem', color: '#14532D', lineHeight: 1.6 }}>
                          <strong>💡 Langkah Analisis & Penyelesaian:</strong>
                          <div style={{ marginTop: '0.35rem' }}>
                            <MathText text={formatSolutionText(ex.solution)} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 4. FORMULA SHEET / RUMUS KUNCI KATEX */}
              {currentChapter.summary?.keyFormulas && currentChapter.summary.keyFormulas.length > 0 && (
                <div style={{ marginTop: '1rem', backgroundColor: '#FFFFFF', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-medium)', maxWidth: '100%', overflow: 'hidden' }}>
                  <h4 style={{ fontSize: '0.95rem', color: 'var(--primary-navy)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <Bookmark size={17} color="var(--primary-navy)" />
                    Kotak Rumus Inti (Formula Sheet):
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.85rem', maxWidth: '100%' }}>
                    {currentChapter.summary.keyFormulas.map((kf, kfIdx) => (
                      <div 
                        key={kfIdx}
                        style={{
                          backgroundColor: '#F8FAFC',
                          padding: '0.85rem',
                          borderRadius: 'var(--radius-xs)',
                          border: '1px solid var(--border-subtle)',
                          textAlign: 'center',
                          minWidth: 0,
                          maxWidth: '100%',
                          overflowX: 'auto'
                        }}
                      >
                        <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                          {kf.label}
                        </div>
                        <div style={{ fontSize: '1rem', color: 'var(--primary-navy)', maxWidth: '100%', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
                          <MathText text={`$$${kf.formula}$$`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 5. AWAS TERJEBAK: MISKONSEPSI UMUM */}
              {currentChapter.summary?.misconceptions && currentChapter.summary.misconceptions.length > 0 && (
                <div style={{ marginTop: '1rem', backgroundColor: '#FEF2F2', padding: '1rem 1.15rem', borderRadius: 'var(--radius-sm)', border: '1px solid #FECACA', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <AlertTriangle size={20} color="#DC2626" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                  <div>
                    <strong style={{ fontSize: '0.85rem', color: '#991B1B', display: 'block', marginBottom: '0.35rem' }}>
                      Awas Terjebak! Miskonsepsi yang Sering Terjadi:
                    </strong>
                    <ul style={{ paddingLeft: '1.15rem', margin: 0, fontSize: '0.85rem', color: '#7F1D1D', lineHeight: 1.5 }}>
                      {currentChapter.summary.misconceptions.map((misc, mIdx) => (
                        <li key={mIdx} style={{ marginBottom: '0.25rem' }}>
                          <MathText text={misc} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* 6. TIPS & CARA CEPAT EFEKTIF */}
              {currentChapter.summary?.tutorTip && (
                <div style={{ marginTop: '1rem', backgroundColor: '#FFFBEB', padding: '1rem 1.15rem', borderRadius: 'var(--radius-sm)', border: '1px solid #FDE68A', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <Lightbulb size={20} color="#D97706" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                  <div>
                    <strong style={{ fontSize: '0.85rem', color: '#92400E', display: 'block', marginBottom: '0.2rem' }}>
                      Tips & Cara Berpikir Efektif:
                    </strong>
                    <div style={{ fontSize: '0.875rem', color: '#78350F' }}>
                      <MathText text={formatTipText(currentChapter.summary.tutorTip)} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. LATIHAN SOAL & PEMAHAMAN KONSEP (TANPA LABEL UH/HOTS) */}
            <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-navy)' }}>
                Latihan Soal & Pemahaman Konsep
              </h3>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {currentChapter.questions?.length || 0} Soal Latihan Mandiri
              </span>
            </div>

            {/* Question Cards List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {(currentChapter.questions || []).map((q, qIndex) => {
                const isSolOpen = !!revealedSolutions[q.id];
                const isHintOpen = !!revealedHints[q.id];

                return (
                  <div key={q.id} className="editorial-card" style={{ padding: '1.5rem', position: 'relative' }}>
                    {/* Question Header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--primary-navy)' }}>
                          Latihan #{qIndex + 1}
                        </span>
                      </div>

                      <div style={{ display: 'flex', gap: '0.4rem' }}>
                        {q.hint && (
                          <button
                            className="btn btn-subtle"
                            style={{ padding: '0.3rem 0.65rem', fontSize: '0.75rem' }}
                            onClick={() => toggleHint(q.id)}
                          >
                            <Lightbulb size={13} color="#D97706" />
                            {isHintOpen ? "Tutup Petunjuk" : "Petunjuk (Hint)"}
                          </button>
                        )}
                        <button
                          className="btn btn-outline"
                          style={{ padding: '0.3rem 0.75rem', fontSize: '0.75rem', borderColor: isSolOpen ? 'var(--primary-blue)' : 'var(--border-subtle)' }}
                          onClick={() => toggleSolution(q.id)}
                        >
                          <HelpCircle size={13} color="var(--primary-navy)" />
                          {isSolOpen ? "Tutup Pembahasan" : "Lihat Pembahasan"}
                        </button>
                      </div>
                    </div>

                    {/* Question Body */}
                    <div style={{ fontSize: '0.975rem', color: 'var(--text-primary)', marginBottom: '0.65rem', lineHeight: 1.6 }}>
                      <MathText text={q.question} />
                    </div>

                    {/* Visual Diagram if relevant */}
                    <QuestionVisual question={q} />

                    {/* Interactive Options List (Clickable A, B, C, D) */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.65rem', marginBottom: '0.75rem' }}>
                      {q.options.map((opt) => {
                        const isSelected = selectedAnswers[q.id] === opt.key;
                        const isCorrectKey = opt.key === q.correctAnswer;
                        const showCorrectHighlight = isSolOpen && isCorrectKey;

                        let borderColor = 'var(--border-subtle)';
                        let bgColor = '#F9FAFB';
                        let circleBg = '#E5E7EB';
                        let circleColor = 'var(--text-primary)';
                        let opacity = 1;
                        let trailingIndicator = null;

                        if (!isQuizSubmitted) {
                          // BEFORE SUBMISSION: Neutral selection styling only! Never show right/wrong yet!
                          if (isSelected) {
                            borderColor = 'var(--primary-blue)';
                            bgColor = 'var(--primary-light)';
                            circleBg = 'var(--primary-blue)';
                            circleColor = '#FFFFFF';
                          }
                          if (showCorrectHighlight) {
                            borderColor = 'var(--status-emerald)';
                            bgColor = 'var(--status-emerald-light)';
                            circleBg = 'var(--status-emerald)';
                            circleColor = '#FFFFFF';
                            trailingIndicator = <CheckCircle2 size={18} color="var(--status-emerald)" style={{ flexShrink: 0 }} />;
                          }
                        } else {
                          // AFTER SUBMISSION: Full evaluation colors & indicators
                          const isCorrectSelected = isSelected && isCorrectKey;
                          const isIncorrectSelected = isSelected && !isCorrectKey;

                          if (isCorrectSelected) {
                            borderColor = 'var(--status-emerald)';
                            bgColor = 'var(--status-emerald-light)';
                            circleBg = 'var(--status-emerald)';
                            circleColor = '#FFFFFF';
                            trailingIndicator = <CheckCircle2 size={18} color="var(--status-emerald)" style={{ flexShrink: 0 }} />;
                          } else if (isIncorrectSelected) {
                            borderColor = 'var(--status-brick)';
                            bgColor = 'var(--status-brick-light)';
                            circleBg = 'var(--status-brick)';
                            circleColor = '#FFFFFF';
                            trailingIndicator = <XCircle size={18} color="var(--status-brick)" style={{ flexShrink: 0 }} />;
                          } else if (isCorrectKey) {
                            // Correct answer that was not chosen by user
                            borderColor = 'var(--status-emerald)';
                            bgColor = '#F0FDF4';
                            circleBg = '#BBF7D0';
                            circleColor = '#166534';
                            trailingIndicator = (
                              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--status-emerald)', backgroundColor: '#DCFCE7', padding: '0.15rem 0.5rem', borderRadius: '4px', flexShrink: 0 }}>
                                Kunci Jawaban
                              </span>
                            );
                          } else {
                            opacity = 0.55;
                          }
                        }

                        return (
                          <button
                            key={opt.key}
                            type="button"
                            onClick={() => handleSelectOption(q.id, opt.key)}
                            disabled={isQuizSubmitted}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.65rem',
                              padding: '0.75rem 0.95rem',
                              borderRadius: 'var(--radius-sm)',
                              border: `2px solid ${borderColor}`,
                              backgroundColor: bgColor,
                              opacity: opacity,
                              fontSize: '0.925rem',
                              cursor: isQuizSubmitted ? 'default' : 'pointer',
                              textAlign: 'left',
                              width: '100%',
                              transition: 'all 0.15s ease',
                              boxShadow: isSelected ? '0 2px 4px rgba(0,0,0,0.06)' : 'none'
                            }}
                          >
                            <span 
                              style={{ 
                                width: 28, 
                                height: 28, 
                                borderRadius: '50%', 
                                display: 'inline-flex', 
                                alignItems: 'center', 
                                justifyContent: 'center', 
                                fontSize: '0.85rem', 
                                fontWeight: 800, 
                                backgroundColor: circleBg,
                                color: circleColor,
                                flexShrink: 0
                              }}
                            >
                              {opt.key}
                            </span>
                            <div style={{ flex: 1, color: 'var(--text-primary)' }}>
                              <MathText text={opt.text} />
                            </div>
                            {trailingIndicator}
                          </button>
                        );
                      })}
                    </div>

                    {/* Evaluation feedback shown ONLY after user clicks "Selesai" */}
                    {isQuizSubmitted && (
                      <div style={{ marginTop: '0.4rem', marginBottom: '0.75rem' }}>
                        {selectedAnswers[q.id] === q.correctAnswer ? (
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '0.65rem 0.95rem',
                            borderRadius: 'var(--radius-sm)',
                            backgroundColor: 'var(--status-emerald-light)',
                            border: '1px solid var(--status-emerald-border)',
                            color: 'var(--status-emerald)'
                          }}>
                            <span style={{ fontWeight: 700, fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                              <CheckCircle2 size={17} /> Jawaban Anda Benar (Pilihan {q.correctAnswer})! 🎉
                            </span>
                            {!isSolOpen && (
                              <button
                                type="button"
                                onClick={() => toggleSolution(q.id)}
                                className="btn btn-subtle"
                                style={{ padding: '0.2rem 0.6rem', fontSize: '0.75rem' }}
                              >
                                Pembahasan
                              </button>
                            )}
                          </div>
                        ) : selectedAnswers[q.id] ? (
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '0.65rem 0.95rem',
                            borderRadius: 'var(--radius-sm)',
                            backgroundColor: 'var(--status-brick-light)',
                            border: '1px solid var(--status-brick-border)',
                            color: 'var(--status-brick)'
                          }}>
                            <span style={{ fontWeight: 700, fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                              <XCircle size={17} /> Jawaban Anda: Pilihan {selectedAnswers[q.id]} • Kunci Jawaban: Pilihan {q.correctAnswer}
                            </span>
                            {!isSolOpen && (
                              <button
                                type="button"
                                onClick={() => toggleSolution(q.id)}
                                className="btn btn-subtle"
                                style={{ padding: '0.2rem 0.6rem', fontSize: '0.75rem' }}
                              >
                                Buka Pembahasan
                              </button>
                            )}
                          </div>
                        ) : (
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '0.65rem 0.95rem',
                            borderRadius: 'var(--radius-sm)',
                            backgroundColor: '#F3F4F6',
                            border: '1px solid var(--border-subtle)',
                            color: 'var(--text-secondary)'
                          }}>
                            <span style={{ fontWeight: 600, fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                              <AlertTriangle size={17} color="var(--text-muted)" /> Soal ini belum dijawab • Kunci Jawaban: Pilihan {q.correctAnswer}
                            </span>
                            {!isSolOpen && (
                              <button
                                type="button"
                                onClick={() => toggleSolution(q.id)}
                                className="btn btn-subtle"
                                style={{ padding: '0.2rem 0.6rem', fontSize: '0.75rem' }}
                              >
                                Buka Pembahasan
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    )}

                    {/* HINT DRAWER */}
                    {isHintOpen && q.hint && (
                      <div style={{ backgroundColor: '#FFFBEB', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid #FDE68A', marginBottom: '0.85rem', fontSize: '0.85rem', color: '#92400E' }}>
                        <strong>💡 Petunjuk Pengerjaan: </strong>
                        <MathText text={q.hint} />
                      </div>
                    )}

                    {/* SOLUTION DRAWER */}
                    {isSolOpen && (
                      <div 
                        style={{ 
                          backgroundColor: '#F0FDF4', 
                          padding: '1.15rem', 
                          borderRadius: 'var(--radius-sm)', 
                          border: '1px solid #BBF7D0',
                          marginTop: '0.5rem'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem', color: 'var(--status-emerald)', fontWeight: 700, fontSize: '0.875rem' }}>
                          <CheckCircle2 size={16} />
                          Kunci Jawaban: {q.correctAnswer}
                        </div>
                        <div style={{ fontSize: '0.9rem', color: '#14532D', lineHeight: 1.6 }}>
                          <MathText text={formatSolutionText(q.bestSolution || q.explanation)} />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* ======================================================== */}
              {/* BOTTOM PANEL: TOMBOL SELESAI & EVALUASI SKOR LATIHAN     */}
              {/* ======================================================== */}
              {currentChapter.questions && currentChapter.questions.length > 0 && (
                !isQuizSubmitted ? (
                  <div 
                    className="editorial-card" 
                    style={{ 
                      padding: '1.5rem', 
                      marginTop: '1.5rem', 
                      backgroundColor: '#FFFFFF',
                      border: '2px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '1rem',
                      boxShadow: '0 4px 14px rgba(0,0,0,0.04)'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.35rem' }}>
                        <span style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--primary-navy)' }}>
                          Lembar Jawaban Latihan
                        </span>
                        <span className="badge badge-primary" style={{ fontSize: '0.75rem', fontWeight: 700 }}>
                          {answeredCount} / {currentChapter.questions.length} Terjawab
                        </span>
                      </div>
                      <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                        {answeredCount === currentChapter.questions.length 
                          ? 'Semua soal sudah dijawab. Silakan klik tombol "Selesai & Periksa Jawaban" untuk mengecek hasil.' 
                          : answeredCount === 0 
                            ? 'Pilih jawaban A, B, C, atau D pada soal-soal di atas, lalu tekan tombol "Selesai" untuk memeriksa.'
                            : `Masih ada ${currentChapter.questions.length - answeredCount} soal belum dijawab. Kamu bisa melengkapi dulu atau langsung memeriksa.`
                        }
                      </p>
                    </div>

                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                      {answeredCount > 0 && (
                        <button
                          type="button"
                          onClick={() => setSelectedAnswers({})}
                          className="btn btn-subtle"
                          style={{ fontSize: '0.85rem' }}
                        >
                          Reset Pilihan
                        </button>
                      )}
                      <button
                        id="btn-submit-quiz-chapter"
                        type="button"
                        onClick={handleSubmitQuiz}
                        disabled={answeredCount === 0}
                        className="btn btn-royal"
                        style={{ 
                          padding: '0.75rem 1.5rem', 
                          fontSize: '0.95rem', 
                          fontWeight: 700,
                          opacity: answeredCount === 0 ? 0.5 : 1,
                          cursor: answeredCount === 0 ? 'not-allowed' : 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        <CheckCircle2 size={18} />
                        Selesai & Periksa Jawaban
                      </button>
                    </div>
                  </div>
                ) : (
                  <div 
                    className="editorial-card" 
                    style={{ 
                      padding: '1.75rem 2rem', 
                      marginTop: '1.5rem', 
                      background: quizScore >= 80 
                        ? 'linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)' 
                        : quizScore >= 60 
                          ? 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)' 
                          : 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)',
                      border: `2px solid ${quizScore >= 80 ? 'var(--status-emerald)' : quizScore >= 60 ? 'var(--primary-blue)' : '#F59E0B'}`,
                      borderRadius: 'var(--radius-md)',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.06)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.25rem' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                          <span className="badge badge-primary" style={{ fontWeight: 800 }}>
                            HASIL EVALUASI LATIHAN
                          </span>
                          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-navy)' }}>
                            {currentChapter.title}
                          </span>
                        </div>
                        <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '0.3rem' }}>
                          {quizScore >= 80 
                            ? '🎉 Luar Biasa! Pemahaman konsepmu pada materi ini sudah sangat matang!' 
                            : quizScore >= 60 
                              ? '👍 Bagus! Sebagian besar soal latihan berhasil kamu selesaikan.' 
                              : '💪 Terus Semangat! Pelajari pembahasan pada setiap soal untuk mendalami konsep.'}
                        </div>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                          Total Benar: <strong style={{ color: 'var(--status-emerald)' }}>{correctCount}</strong> dari <strong>{currentChapter.questions.length}</strong> soal • Skor Akhir: <strong>{quizScore} / 100</strong>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        {/* Score Badge */}
                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          minWidth: '90px',
                          padding: '0.6rem 1.1rem',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: '#FFFFFF',
                          border: '1px solid rgba(0,0,0,0.1)',
                          boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
                        }}>
                          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                            Skor Kamu
                          </span>
                          <span style={{ 
                            fontSize: '1.85rem', 
                            fontWeight: 900, 
                            color: quizScore >= 80 ? 'var(--status-emerald)' : quizScore >= 60 ? 'var(--primary-blue)' : '#D97706',
                            lineHeight: 1.1
                          }}>
                            {quizScore}
                          </span>
                          <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                            / 100
                          </span>
                        </div>

                        {/* Reset Button */}
                        <button
                          id="btn-retry-quiz"
                          type="button"
                          onClick={handleResetQuiz}
                          className="btn btn-royal"
                          style={{ padding: '0.75rem 1.25rem', fontSize: '0.9rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.45rem' }}
                        >
                          <RotateCcw size={16} />
                          Ulangi Latihan
                        </button>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        ) : (
          <div className="editorial-card" style={{ padding: '3rem 2rem', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-muted)' }}>Silakan pilih bab di sebelah kiri untuk melihat materi.</p>
          </div>
        )}
      </div>

    </div>
  );
}

export default PublicHandbook;
