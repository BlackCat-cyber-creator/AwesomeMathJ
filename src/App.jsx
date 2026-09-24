import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
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

/**
 * Backward Compatibility Layer:
 * Automatically redirects legacy query-string URLs (from previously printed QR codes or bookmarks):
 * - /?questId=... -> /quest/:questId
 * - /?pembahasan=1&grade=...&chapter=... -> /solution/:grade/:chapter
 */
function QueryRedirectHandler() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') return;

    const questId = searchParams.get('questId');
    const isSolution = searchParams.get('pembahasan') || searchParams.get('solution');
    const grade = searchParams.get('grade');
    const chapter = searchParams.get('chapter');
    const view = searchParams.get('view');

    if (view === 'worksheet' && questId) {
      navigate(`/worksheet/${encodeURIComponent(questId)}`, { replace: true });
    } else if (questId && !isSolution) {
      navigate(`/quest/${encodeURIComponent(questId)}`, { replace: true });
    } else if (isSolution && grade && chapter) {
      navigate(`/solution/${encodeURIComponent(grade)}/${encodeURIComponent(chapter)}`, { replace: true });
    }
  }, [searchParams, location.pathname, navigate]);

  return null;
}

export function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, teacherName, isAuthenticated, logout } = useAuth();
  const [activeTeacherTab, setActiveTeacherTab] = useState("generator");

  const isTeacherRoute = location.pathname.startsWith('/teacher');
  const isFullScreenView = location.pathname.startsWith('/quest/') || 
                           location.pathname.startsWith('/worksheet') || 
                           location.pathname.startsWith('/solution/');

  const handleBackToHome = () => {
    navigate('/');
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handleLaunchQuest = (qId) => {
    navigate(`/quest/${encodeURIComponent(qId)}`);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handleLaunchPracticeQuest = (practiceQuest) => {
    try {
      localStorage.setItem(`mathquest_practice_${practiceQuest.id}`, JSON.stringify(practiceQuest));
    } catch {}
    navigate(`/quest/${encodeURIComponent(practiceQuest.id)}`);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handlePrintQuest = (quest) => {
    if (!quest) return;
    try {
      localStorage.setItem(`mathquest_worksheet_${quest.id || 'current'}`, JSON.stringify(quest));
    } catch {}
    navigate(`/worksheet/${encodeURIComponent(quest.id || 'current')}`, { state: { quest } });
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handleSignOut = async () => {
    await logout();
    navigate('/teacher/login');
  };

  return (
    <div className="app-layout">
      {/* Backward-compatibility query redirector */}
      <QueryRedirectHandler />

      {/* Top Navbar */}
      <header className="top-navbar no-print">
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
            <div className="brand-text-content">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap' }}>
                <span className="brand-name-title" style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--primary-navy)', letterSpacing: '-0.02em' }}>
                  AwesomeMathJ
                </span>
                <span className="badge badge-sd" style={{ fontSize: '0.65rem', padding: '0.15rem 0.45rem' }}>
                  Kelas 4–12
                </span>
              </div>
              <div className="brand-subtitle" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>
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
            {isFullScreenView ? (
              <button
                id="btn-nav-back-home"
                className="btn btn-outline"
                style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem' }}
                onClick={handleBackToHome}
              >
                <BookOpen size={14} />
                Portal Utama
              </button>
            ) : isTeacherRoute ? (
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

      {/* Main Content Area with Declarative React Router v7 */}
      <main>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            {/* 1. Public Handbook */}
            <Route path="/" element={
              <PublicHandbook 
                onLaunchPractice={handleLaunchPracticeQuest}
                onPrintQuest={handlePrintQuest}
              />
            } />

            {/* 2. Interactive Student Quest Player */}
            <Route path="/quest/:questId" element={
              <StudentQuestView onBackToDashboard={handleBackToHome} />
            } />

            {/* 3. Printable Worksheet A4 with QR Code */}
            <Route path="/worksheet/:questId" element={
              <PrintableWorksheet onBack={handleBackToHome} />
            } />
            <Route path="/worksheet" element={
              <PrintableWorksheet onBack={handleBackToHome} />
            } />

            {/* 4. Chapter Online Solution via QR Code Scan */}
            <Route path="/solution/:grade/:chapterId" element={
              <ChapterSolutionView onBack={handleBackToHome} />
            } />

            {/* 5. Teacher Authentication */}
            <Route path="/teacher/login" element={
              isAuthenticated ? <Navigate to="/teacher" replace /> : (
                <TeacherLoginView 
                  onBack={handleBackToHome}
                  onSuccess={() => navigate('/teacher')}
                />
              )
            } />

            {/* 6. Teacher Studio Workspace (Protected) */}
            <Route path="/teacher" element={
              isAuthenticated ? (
                <TeacherDashboard 
                  onLaunchQuest={handleLaunchQuest}
                  onPrintQuest={handlePrintQuest}
                  activeTab={activeTeacherTab}
                  setActiveTab={setActiveTeacherTab}
                  onSignOut={handleSignOut}
                  currentTeacher={user}
                />
              ) : (
                <TeacherLoginView 
                  onBack={handleBackToHome}
                  onSuccess={() => navigate('/teacher')}
                />
              )
            } />
            <Route path="/teacher/*" element={
              <Navigate to="/teacher" replace />
            } />

            {/* Catch-all fallback redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
