import React, { useState, useEffect } from 'react';
import { TeacherDashboard } from './components/TeacherDashboard';
import { StudentQuestView } from './components/StudentQuestView';
import { PrintableWorksheet } from './components/PrintableWorksheet';
import { PublicHandbook } from './components/PublicHandbook';
import { TeacherAuthModal } from './components/TeacherAuthModal';
import { isTeacherAuthenticated, setTeacherAuthenticated } from './utils/storage';
import { 
  GraduationCap, 
  Lock, 
  ShieldCheck, 
  BookOpen, 
  LogOut
} from 'lucide-react';

export function App() {
  // Check URL parameters directly on initial load (e.g. ?questId=...)
  const getUrlQuestId = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get("questId");
  };

  const [activeStudentQuestId, setActiveStudentQuestId] = useState(getUrlQuestId());
  const [activeWorksheetQuest, setActiveWorksheetQuest] = useState(null);
  const [isTeacherLoggedIn, setIsTeacherLoggedIn] = useState(isTeacherAuthenticated());
  const [viewMode, setViewMode] = useState(isTeacherAuthenticated() ? "teacher" : "public"); // 'public' or 'teacher'
  const [activeTeacherTab, setActiveTeacherTab] = useState("generator"); // "generator", "students", "syllabus"
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Listen to popstate (browser back/forward button)
  useEffect(() => {
    const handlePopState = () => {
      setActiveStudentQuestId(getUrlQuestId());
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
    // When practicing a chapter from public handbook, open in student quest view
    setActiveWorksheetQuest(null);
    setActiveStudentQuestId(practiceQuest.id);
    // Temporary cache in storage if needed
    localStorage.setItem(`mathquest_practice_${practiceQuest.id}`, JSON.stringify(practiceQuest));
  };

  // Open printable worksheet
  const handlePrintQuest = (quest) => {
    setActiveWorksheetQuest(quest);
  };

  // Return to home / default view
  const handleBackToHome = () => {
    setActiveStudentQuestId(null);
    setActiveWorksheetQuest(null);
    const cleanUrl = window.location.pathname;
    window.history.pushState({ path: cleanUrl }, '', cleanUrl);
  };

  // Successful Teacher Login
  const handleAuthSuccess = () => {
    setTeacherAuthenticated(true);
    setIsTeacherLoggedIn(true);
    setViewMode("teacher");
    setIsAuthModalOpen(false);
  };

  // Teacher Sign Out
  const handleSignOut = () => {
    setTeacherAuthenticated(false);
    setIsTeacherLoggedIn(false);
    setViewMode("public");
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
                {viewMode === "teacher" && isTeacherLoggedIn ? (
                  <>Studio Guru Matematika</>
                ) : (
                  <>Buku Panduan & Latihan Matematika Mandiri</>
                )}
              </div>
            </div>
          </div>

          {/* Right Header Navigation & Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
            
            {/* If in Student Quest or Worksheet mode, show back button */}
            {(activeStudentQuestId || activeWorksheetQuest) ? (
              <button 
                id="btn-nav-back-home"
                className="btn btn-outline"
                style={{ fontSize: '0.825rem', padding: '0.4rem 0.8rem' }}
                onClick={handleBackToHome}
              >
                <BookOpen size={15} />
                Ke Portal Publik
              </button>
            ) : viewMode === "teacher" && isTeacherLoggedIn ? (
              // Teacher Mode active in header
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
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
                  <span style={{ color: '#065F46', fontWeight: 700 }}>Studio Guru: Sir Jevon</span>
                </div>

                <button
                  id="btn-nav-switch-public"
                  className="btn btn-outline"
                  style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem' }}
                  onClick={() => setViewMode("public")}
                  title="Lihat Handbook Publik"
                >
                  <BookOpen size={14} />
                  Portal Publik
                </button>

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
              </div>
            ) : (
              // Public Mode in header
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                {isTeacherLoggedIn ? (
                  <button
                    id="btn-nav-open-teacher-studio"
                    className="btn btn-royal"
                    style={{ fontSize: '0.825rem', padding: '0.4rem 0.9rem' }}
                    onClick={() => setViewMode("teacher")}
                  >
                    <ShieldCheck size={15} />
                    Studio Guru Sir Jevon
                  </button>
                ) : (
                  <button
                    id="btn-nav-teacher-signin"
                    className="btn btn-royal"
                    style={{ fontSize: '0.825rem', padding: '0.4rem 0.9rem' }}
                    onClick={() => setIsAuthModalOpen(true)}
                  >
                    <Lock size={14} />
                    Sign In Guru
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
        ) : activeStudentQuestId ? (
          <StudentQuestView 
            questId={activeStudentQuestId}
            onBackToDashboard={handleBackToHome}
          />
        ) : viewMode === "teacher" && isTeacherLoggedIn ? (
          <TeacherDashboard 
            onLaunchQuest={handleLaunchQuest}
            onPrintQuest={handlePrintQuest}
            activeTab={activeTeacherTab}
            setActiveTab={setActiveTeacherTab}
            onBackToPublic={() => setViewMode("public")}
            onSignOut={handleSignOut}
          />
        ) : (
          <PublicHandbook 
            onOpenAuth={() => setIsAuthModalOpen(true)}
            onLaunchPractice={handleLaunchPracticeQuest}
            onPrintQuest={handlePrintQuest}
          />
        )}
      </main>

      {/* Teacher Authentication Modal */}
      <TeacherAuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={handleAuthSuccess}
      />
    </div>
  );
}

export default App;
