import React, { useState } from 'react';
import { Lock, KeyRound, ArrowRight, ShieldCheck, ArrowLeft, GraduationCap } from 'lucide-react';

/**
 * TeacherLoginView:
 * Tampilan Halaman Penuh Login Guru di rute /teacher.
 * Memastikan privasi data siswa & generator PR terpisah rapi dari portal publik.
 */
export function TeacherLoginView({ onBack, onSuccess }) {
  const [pin, setPin] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validPins = ["7788", "sirjevon", "admin", "123456"];

  const handleLogin = (e) => {
    if (e) e.preventDefault();
    const cleanPin = pin.trim().toLowerCase();

    if (validPins.includes(cleanPin)) {
      setErrorMessage("");
      onSuccess();
    } else {
      setErrorMessage("PIN / sandi akses guru salah. Silakan coba lagi.");
    }
  };

  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem' }}>
      <div 
        className="editorial-card"
        style={{
          width: '100%',
          maxWidth: 460,
          padding: '2.5rem 2rem',
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-elevated)',
          borderTop: '5px solid var(--primary-navy)'
        }}
      >
        {/* Brand Icon Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <div 
            style={{
              width: 58,
              height: 58,
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--primary-light)',
              color: 'var(--primary-navy)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '0.85rem',
              border: '1px solid var(--primary-subtle)',
              boxShadow: 'var(--shadow-subtle)'
            }}
          >
            <Lock size={26} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.45rem', marginBottom: '0.25rem' }}>
            <span className="badge badge-primary" style={{ fontSize: '0.72rem', fontWeight: 700 }}>
              AREA PENGAJAR
            </span>
          </div>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-navy)', marginBottom: '0.4rem', fontWeight: 800 }}>
            Studio Guru Matematika
          </h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
            Masuk untuk menyusun PR 5-soal kurikulum resmi, mengelola data murid privat, dan mencetak lembar kerja.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          <div className="form-group" style={{ marginBottom: '1.25rem' }}>
            <label className="form-label" htmlFor="input-teacher-view-pin" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
              PIN / Sandi Akses Pengajar:
            </label>
            <div style={{ position: 'relative' }}>
              <input
                id="input-teacher-view-pin"
                type="password"
                className="form-input"
                placeholder="Masukkan PIN akses pengajar"
                value={pin}
                onChange={(e) => {
                  setPin(e.target.value);
                  setErrorMessage("");
                }}
                autoFocus
                style={{ paddingLeft: '2.5rem', fontSize: '1.05rem', letterSpacing: pin ? '0.2em' : 'normal' }}
              />
              <KeyRound 
                size={18} 
                style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} 
              />
            </div>
            {errorMessage && (
              <p style={{ color: 'var(--status-brick)', fontSize: '0.8rem', marginTop: '0.45rem', fontWeight: 600 }}>
                {errorMessage}
              </p>
            )}
          </div>

          <button 
            id="btn-submit-teacher-login-view"
            type="submit" 
            className="btn btn-royal" 
            style={{ width: '100%', justifyContent: 'center', padding: '0.85rem', fontSize: '0.95rem', fontWeight: 700 }}
          >
            <ShieldCheck size={18} />
            Buka Studio Guru
            <ArrowRight size={16} />
          </button>
        </form>

        {/* Helper & Back to public */}
        <div style={{ marginTop: '1.75rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}>
          <button
            type="button"
            onClick={onBack}
            className="btn btn-subtle"
            style={{ fontSize: '0.85rem', color: 'var(--primary-blue)', display: 'flex', alignItems: 'center', gap: '0.45rem' }}
          >
            <ArrowLeft size={15} />
            Kembali ke Portal Belajar Siswa
          </button>
          
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center' }}>
            Seluruh materi buku panduan matematika Kelas 4 SD – 12 SMA dapat diakses bebas di portal publik tanpa login.
          </span>
        </div>
      </div>
    </div>
  );
}

export default TeacherLoginView;
