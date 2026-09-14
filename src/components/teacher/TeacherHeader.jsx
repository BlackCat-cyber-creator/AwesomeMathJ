import React from 'react';
import { CloudCheck, LogOut, Send, Users, History } from 'lucide-react';
import { SemesterBadge } from '../AcademicTimeline';

export function TeacherHeader({
  currentTeacher,
  isCloudConnected,
  activeTab,
  setActiveTab,
  onSignOut,
  studentCount = 0,
  questCount = 0
}) {
  return (
    <>
      {/* Studio Header Banner */}
      <div 
        className="editorial-card" 
        style={{ 
          padding: '1.25rem 1.75rem', 
          marginBottom: '1.5rem', 
          borderLeft: '5px solid var(--primary-navy)' 
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.35rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '1.5rem' }}>📐</span>
            <h2 style={{ color: 'var(--primary-navy)', fontSize: '1.45rem', margin: 0 }}>
              Studio Guru Matematika • {currentTeacher?.displayName || "Pengajar"}
            </h2>
            {isCloudConnected ? (
              <span 
                className="badge" 
                style={{ 
                  backgroundColor: '#ECFDF5', 
                  color: '#047857', 
                  border: '1px solid #A7F3D0', 
                  fontSize: '0.72rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}
              >
                <CloudCheck size={13} />
                Cloud Firestore Singapore
              </span>
            ) : (
              <span 
                className="badge" 
                style={{ 
                  backgroundColor: '#FFFBEB', 
                  color: '#B45309', 
                  border: '1px solid #FDE68A', 
                  fontSize: '0.72rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}
              >
                ● Mode Offline / Demo
              </span>
            )}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            {currentTeacher?.email && (
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {currentTeacher.email}
              </span>
            )}
            <button
              id="btn-teacher-signout"
              onClick={onSignOut}
              className="btn btn-subtle"
              style={{ padding: '0.35rem 0.65rem', fontSize: '0.78rem', color: 'var(--status-brick)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
              title="Keluar dari akun pengajar"
            >
              <LogOut size={13} />
              Keluar
            </button>
          </div>
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', margin: 0 }}>
          Kelola murid privat, generate PR 5-soal otomatis, distribusikan ke WhatsApp dengan 1-klik, dan pantau rekap pengerjaan *real-time* di cloud.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
          <SemesterBadge />
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            Kalender Akademik Kurikulum Merdeka • Rekomendasi materi aktif
          </span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div className="nav-pill-group" style={{ display: 'inline-flex' }}>
          <button 
            id="tab-btn-generator"
            className={`nav-pill ${activeTab === 'generator' ? 'active' : ''}`}
            onClick={() => setActiveTab('generator')}
          >
            <Send size={16} />
            Generator PR (5 Soal)
          </button>
          <button 
            id="tab-btn-students"
            className={`nav-pill ${activeTab === 'students' ? 'active' : ''}`}
            onClick={() => setActiveTab('students')}
          >
            <Users size={16} />
            Data Murid ({studentCount})
          </button>
          <button 
            id="tab-btn-history"
            className={`nav-pill ${activeTab === 'history' ? 'active' : ''}`}
            onClick={() => setActiveTab('history')}
          >
            <History size={16} />
            Riwayat Tugas ({questCount})
          </button>
        </div>
      </div>
    </>
  );
}

export default TeacherHeader;
