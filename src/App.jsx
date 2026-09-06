import React, { useState, useEffect, useMemo } from 'react';
import { TeacherDashboard } from './components/TeacherDashboard';
import { StudentQuestView } from './components/StudentQuestView';
import { PrintableWorksheet } from './components/PrintableWorksheet';
import { ChapterSolutionView } from './components/ChapterSolutionView';
import { PublicHandbook } from './components/PublicHandbook';
import { TeacherLoginView } from './components/TeacherLoginView';
import { isTeacherAuthenticated, setTeacherAuthenticated, getQuestById } from './utils/storage';
import { getChapterSolutionData } from './data/curriculumData';
import { 
  GraduationCap, 
  Lock, 
  ShieldCheck, 
  BookOpen, 
  LogOut,
  ArrowLeft
} from 'lucide-react';

export function App() {
  // Check URL parameters directly on initial load (e.g. ?questId=...)
  const getUrlQuestId = () => {
    if (typeof window === 'undefined') return null;
    const params = new URLSearchParams(window.location.search);
    return params.get("questId");
  };

  // Check URL parameters for online solution/pembahasan (e.g. ?pembahasan=1&grade=4&chapter=...)
  const getUrlSolutionParams = () => {
    if (typeof window === 'undefined') return null;
    const params = new URLSearchParams(window.location.search);
    if (params.get("pembahasan") || params.get("solution")) {
      return {
        grade: params.get("grade"),
        chapter: params.get("chapter"),
        questId: params.get("questId")
      };
    }
    return null;
  };

  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [activeStudentQuestId, setActiveStudentQuestId] = useState(getUrlQuestId());
  const [solutionParams, setSolutionParams] = useState(getUrlSolutionParams());
  const [activeWorksheetQuest, setActiveWorksheetQuest] = useState(null);
  const [isTeacherLoggedIn, setIsTeacherLoggedIn] = useState(isTeacherAuthenticated());
  const [activeTeacherTab, setActiveTeacherTab] = useState("generator"); // "generator", "students", "syllabus"

  // Check if current route is dedicated to teacher portal (/teacher)
  const isTeacherRoute = currentPath === '/teacher' || currentPath.startsWith('/teacher/');

  // Ambil data kunci & pembahasan secara instan sesuai grade & chapterId
  const activeSolutionData = useMemo(() => {
    if (!solutionParams) return null;
    if (solutionParams.grade && solutionParams.chapter) {
      const data = getChapterSolutionData(solutionParams.grade, solutionParams.chapter);
      if (data) return data;
    }
    if (solutionParams.questId) {
      const quest = getQuestById(solutionParams.questId);
      if (quest) {
        return {
          id: quest.id,
          title: quest.chapterTitle || quest.title,
          grade: quest.grade,
          questions: quest.questions,
          level: quest.trackLabel || ""
        };
      }
    }
    return null;
  }, [solutionParams]);

  // Seamless client-side navigation
  const navigateTo = (path) => {
    window.history.pushState({ path }, '', path);
    setCurrentPath(path);
    setActiveStudentQuestId(getUrlQuestId());
    setSolutionParams(getUrlSolutionParams());
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Listen to popstate (browser back/forward button)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      setActiveStudentQuestId(getUrlQuestId());
      setSolutionParams(getUrlSolutionParams());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Launch student quest (preview or direct link)
  const handleLaunchQuest = (questId) => {
    setActiveStudentQuestId(questId);
    setActiveWorksheetQuest(null);
    const newUrl = `${window.location.pathname}?questId=${questId}`;
    window.history.pushState({ path: newUrl }, '', newUrl);
  };

  // Launch practice quest directly from Public Handbook
  const handleLaunchPracticeQuest = (practiceQuest) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setActiveWorksheetQuest(null);
    setActiveStudentQuestId(practiceQuest.id);
    localStorage.setItem(`mathquest_practice_${practiceQuest.id}`, JSON.stringify(practiceQuest));
  };

  // Open printable worksheet
  const handlePrintQuest = (quest) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setActiveWorksheetQuest(quest);
  };

  // Return to home / default view
  const handleBackToHome = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setActiveStudentQuestId(null);
    setActiveWorksheetQuest(null);
    setSolutionParams(null);
    navigateTo('/');
  };

  // Successful Teacher Login
  const handleAuthSuccess = () => {
    setTeacherAuthenticated(true);
    setIsTeacherLoggedIn(true);
    navigateTo('/teacher');
  };

  // Teacher Sign Out
  const handleSignOut = () => {
    setTeacherAuthenticated(false);
    setIsTeacherLoggedIn(false);
    navigateTo('/teacher');
  };

  return (
    <div className="app-layout">
      {/* Top Navbar: Classy Minimalist Editorial */}
      <header className="top-navbar">
        <div className="nav-container">
          {/* Brand Logo */}
          <div 
            className="brand-logo" 
            onClick={handleBackToHome} 
            style={{ cursor: 'pointer' }}
          >
            <div className="brand-icon-wrapper">
              <GraduationCap size={22} color="#FFFFFF" />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--primary-navy)', letterSpacing: '-0.02em' }}>
                  AwesomeMathJ
                </span>
                <span className="badge badge-sd" style={{ fontSize: '0.68rem' }}>
                  Kelas 4–12
                </span>
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                {isTeacherRoute ? (
                  <>Studio Guru Matematika</>
                ) : (
                  <>Buku Panduan & Latihan Matematika Mandiri</>
                )}
              </div>
            </div>
          </div>

          {/* Right Header Navigation & Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
            
            {/* In Worksheet, Solution, or Student Quest view, control bar already has 'Kembali ke Beranda', so no redundant navbar button */}
            {(activeStudentQuestId || activeWorksheetQuest || activeSolutionData) ? null : isTeacherRoute ? (
              // On /teacher Route
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                {isTeacherLoggedIn && (
                  <div 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.4rem', 
                      backgroundColor: '#ECFDF5', 
                      padding: '0.35rem 0.75rem', 
                      borderRadius: 'var(--radius-sm)', 
                      border: '1px solid #A7F3D0', 
                      fontSize: '0.8rem' 
                    }}
                  >
                    <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'var(--status-emerald)', display: 'inline-block' }}></span>
                    <span style={{ color: '#065F46', fontWeight: 700 }}>Studio Guru</span>
                  </div>
                )}

                <button
                  id="btn-nav-switch-public"
                  className="btn btn-outline"
                  style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem' }}
                  onClick={() => navigateTo('/')}
                  title="Kembali ke Buku Panduan Publik"
                >
                  <BookOpen size={14} />
                  Portal Publik
                </button>

                {isTeacherLoggedIn && (
                  <button
                    id="btn-nav-signout"
                    className="btn btn-subtle"
                    style={{ fontSize: '0.8rem', padding: '0.35rem 0.65rem', color: 'var(--status-brick)' }}
                    onClick={handleSignOut}
                    title="Keluar dari sesi guru"
                  >
                    <LogOut size={14} />
                    Keluar
                  </button>
                )}
              </div>
            ) : (
              // On / (Public Route)
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                {isTeacherLoggedIn ? (
                  <button
                    id="btn-nav-open-teacher-studio"
                    className="btn btn-royal"
                    style={{ fontSize: '0.825rem', padding: '0.4rem 0.9rem' }}
                    onClick={() => navigateTo('/teacher')}
                  >
                    <ShieldCheck size={15} />
                    Studio Guru
                  </button>
                ) : (
                  <button
                    id="btn-nav-teacher-signin"
                    className="btn btn-royal"
                    style={{ fontSize: '0.825rem', padding: '0.4rem 0.9rem' }}
                    onClick={() => navigateTo('/teacher')}
                  >
                    <Lock size={14} />
                    Portal Guru
                  </button>
                )}
              </div>
            )}

          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main>
        {activeWorksheetQuest ? (
          <PrintableWorksheet
            quest={activeWorksheetQuest}
            onBack={handleBackToHome}
          />
        ) : activeSolutionData ? (
          <ChapterSolutionView
            chapterData={activeSolutionData}
            onBack={handleBackToHome}
          />
        ) : activeStudentQuestId ? (
          <StudentQuestView 
            questId={activeStudentQuestId}
            onBackToDashboard={handleBackToHome}
          />
        ) : isTeacherRoute ? (
          isTeacherLoggedIn ? (
            <TeacherDashboard 
              onLaunchQuest={handleLaunchQuest}
              onPrintQuest={handlePrintQuest}
              activeTab={activeTeacherTab}
              setActiveTab={setActiveTeacherTab}
              onBackToPublic={() => navigateTo('/')}
              onSignOut={handleSignOut}
            />
          ) : (
            <TeacherLoginView 
              onBack={() => navigateTo('/')}
              onSuccess={handleAuthSuccess}
            />
          )
        ) : (
          <PublicHandbook 
            onOpenAuth={() => navigateTo('/teacher')}
            onLaunchPractice={handleLaunchPracticeQuest}
            onPrintQuest={handlePrintQuest}
          />
        )}
      </main>
    </div>
  );
}

export default App;
