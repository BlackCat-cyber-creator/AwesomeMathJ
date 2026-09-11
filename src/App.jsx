import React, { useState, useEffect, Suspense, lazy } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { getQuestById } from './utils/storage';
import { getChapterSolutionData } from './data/curriculumData';
import { 
  GraduationCap, 
  Lock, 
  ShieldCheck, 
  BookOpen, 
  LogOut,
  Loader2
} from 'lucide-react';

// Lazy-loaded Views for maximal code-splitting
const TeacherDashboard = lazy(() => import('./components/TeacherDashboard').then(m => ({ default: m.TeacherDashboard })));
const StudentQuestView = lazy(() => import('./components/StudentQuestView').then(m => ({ default: m.StudentQuestView })));
const PrintableWorksheet = lazy(() => import('./components/PrintableWorksheet').then(m => ({ default: m.PrintableWorksheet })));
const ChapterSolutionView = lazy(() => import('./components/ChapterSolutionView').then(m => ({ default: m.ChapterSolutionView })));
const PublicHandbook = lazy(() => import('./components/PublicHandbook').then(m => ({ default: m.PublicHandbook })));
const TeacherLoginView = lazy(() => import('./components/TeacherLoginView').then(m => ({ default: m.TeacherLoginView })));

function RouteFallback() {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
      color: 'var(--text-muted)'
    }}>
      <Loader2 size={36} className="spinner" style={{ color: 'var(--primary-blue)', animation: 'spin 1s linear infinite' }} />
      <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>Memuat halaman...</span>
    </div>
  );
}

export function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const { user, teacherName, isAuthenticated, isLoading: isAuthLoading, logout } = useAuth();

  const [activeWorksheetQuest, setActiveWorksheetQuest] = useState(null);
  const [activeTeacherTab, setActiveTeacherTab] = useState("generator");

  const questId = searchParams.get("questId");
  const isSolutionParam = searchParams.get("pembahasan") || searchParams.get("solution");
  const solutionGrade = searchParams.get("grade");
  const solutionChapter = searchParams.get("chapter");

  const isTeacherRoute = location.pathname === '/teacher' || location.pathname.startsWith('/teacher/');

  // Async load solution data if URL has solution params
  const [activeSolutionData, setActiveSolutionData] = useState(null);
  useEffect(() => {
    let active = true;
    if (!isSolutionParam && !solutionGrade) {
      setActiveSolutionData(null);
      return;
    }
    if (solutionGrade && solutionChapter) {
      getChapterSolutionData(solutionGrade, solutionChapter).then((data) => {
        if (active && data) setActiveSolutionData(data);
      });
    } else if (questId) {
      const quest = getQuestById(questId);
      if (quest && active) {
        setActiveSolutionData({
          id: quest.id,
          title: quest.chapterTitle || quest.title,
          grade: quest.grade,
          questions: quest.questions,
          level: quest.trackLabel || ""
        });
      }
    }
    return () => { active = false; };
  }, [isSolutionParam, solutionGrade, solutionChapter, questId]);

  const handleBackToHome = () => {
    setActiveWorksheetQuest(null);
    setActiveSolutionData(null);
    setSearchParams({});
    navigate('/');
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handleLaunchQuest = (qId) => {
    setActiveWorksheetQuest(null);
    setSearchParams({ questId: qId });
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handleLaunchPracticeQuest = (practiceQuest) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setActiveWorksheetQuest(null);
    localStorage.setItem(`mathquest_practice_${practiceQuest.id}`, JSON.stringify(practiceQuest));
    setSearchParams({ questId: practiceQuest.id });
  };

  const handlePrintQuest = (quest) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setActiveWorksheetQuest(quest);
  };

  const handleSignOut = async () => {
    await logout();
    navigate('/teacher');
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
            {(questId || activeWorksheetQuest || activeSolutionData) ? null : isTeacherRoute ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                {isAuthenticated && (
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
                    <span style={{ color: '#065F46', fontWeight: 700 }}>Studio Guru ({teacherName})</span>
                  </div>
                )}

                <button
                  id="btn-nav-switch-public"
                  className="btn btn-outline"
                  style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem' }}
                  onClick={() => navigate('/')}
                  title="Kembali ke Buku Panduan Publik"
                >
                  <BookOpen size={14} />
                  Portal Publik
                </button>

                {isAuthenticated && (
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                {isAuthenticated ? (
                  <button
                    id="btn-nav-open-teacher-studio"
                    className="btn btn-royal"
                    style={{ fontSize: '0.825rem', padding: '0.4rem 0.9rem' }}
                    onClick={() => navigate('/teacher')}
                  >
                    <ShieldCheck size={15} />
                    Studio Guru
                  </button>
                ) : (
                  <button
                    id="btn-nav-teacher-signin"
                    className="btn btn-royal"
                    style={{ fontSize: '0.825rem', padding: '0.4rem 0.9rem' }}
                    onClick={() => navigate('/teacher')}
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

      {/* Main Content Area with Suspense Lazy Routing */}
      <main>
        <Suspense fallback={<RouteFallback />}>
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
          ) : questId ? (
            <StudentQuestView 
              questId={questId}
              onBackToDashboard={handleBackToHome}
            />
          ) : isTeacherRoute ? (
            isAuthenticated ? (
              <TeacherDashboard 
                onLaunchQuest={handleLaunchQuest}
                onPrintQuest={handlePrintQuest}
                activeTab={activeTeacherTab}
                setActiveTab={setActiveTeacherTab}
                onBackToPublic={() => navigate('/')}
                onSignOut={handleSignOut}
                currentTeacher={user}
              />
            ) : (
              <TeacherLoginView 
                onBack={() => navigate('/')}
                onSuccess={() => navigate('/teacher')}
              />
            )
          ) : (
            <PublicHandbook 
              onOpenAuth={() => navigate('/teacher')}
              onLaunchPractice={handleLaunchPracticeQuest}
              onPrintQuest={handlePrintQuest}
            />
          )}
        </Suspense>
      </main>
    </div>
  );
}

export default App;
