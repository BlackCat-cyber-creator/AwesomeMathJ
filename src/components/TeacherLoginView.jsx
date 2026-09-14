import React, { useState } from 'react';
import { 
  Lock, 
  ArrowRight, 
  ShieldCheck, 
  ArrowLeft, 
  Mail,
  Loader2
} from 'lucide-react';
import { loginTeacherWithEmail, registerTeacherWithEmail } from '../firebase/auth';

/**
 * TeacherLoginView:
 * Tampilan Halaman Login & Registrasi Pengajar
 * Menerima autentikasi Email & Kata Sandi Pengajar resmi atau pendaftaran akun baru.
 */
export function TeacherLoginView({ onBack, onSuccess }) {
  const [authMode, setAuthMode] = useState("login"); // "login" | "register"
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle Login or Registration
  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!email.trim() || !password) {
      setErrorMessage("Silakan isi email dan kata sandi pengajar.");
      return;
    }

    if (authMode === "register") {
      if (!displayName.trim()) {
        setErrorMessage("Silakan masukkan nama lengkap pengajar.");
        return;
      }
      if (password.length < 6) {
        setErrorMessage("Kata sandi minimal 6 karakter.");
        return;
      }
      if (password !== confirmPassword) {
        setErrorMessage("Konfirmasi kata sandi tidak cocok.");
        return;
      }
    }

    setIsLoading(true);
    setErrorMessage("");

    let res;
    if (authMode === "register") {
      res = await registerTeacherWithEmail(email, password, displayName.trim());
    } else {
      res = await loginTeacherWithEmail(email, password);
    }
    setIsLoading(false);

    if (res.success) {
      onSuccess(res.user);
    } else {
      setErrorMessage(res.error || (authMode === "register" ? "Pendaftaran gagal." : "Email atau kata sandi pengajar salah."));
    }
  };

  return (
    <div style={{ minHeight: '82vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem' }}>
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
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.45rem' }}>
            <span className="badge badge-primary" style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.05em' }}>
              PORTAL GURU MATEMATIKA
            </span>
          </div>
          <h2 style={{ fontSize: '1.45rem', color: 'var(--primary-navy)', marginBottom: '0.35rem', fontWeight: 800 }}>
            Studio Guru AwesomeMathJ
          </h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
            Area khusus pengajar untuk menyusun PR kurikulum, mengelola murid privat, dan memantau evaluasi belajar.
          </p>
        </div>

        {/* Auth Mode Toggle Tabs */}
        <div style={{ display: 'flex', backgroundColor: '#F1F5F9', padding: '4px', borderRadius: 'var(--radius-sm)', marginBottom: '1.25rem' }}>
          <button
            type="button"
            className={`btn ${authMode === 'login' ? 'btn-royal' : 'btn-subtle'}`}
            style={{ flex: 1, justifyContent: 'center', padding: '0.45rem', fontSize: '0.85rem' }}
            onClick={() => { setAuthMode('login'); setErrorMessage(''); }}
          >
            Masuk (Login)
          </button>
          <button
            type="button"
            className={`btn ${authMode === 'register' ? 'btn-royal' : 'btn-subtle'}`}
            style={{ flex: 1, justifyContent: 'center', padding: '0.45rem', fontSize: '0.85rem' }}
            onClick={() => { setAuthMode('register'); setErrorMessage(''); }}
          >
            Daftar Akun Baru
          </button>
        </div>

        {/* Feedback Alert */}
        {errorMessage && (
          <div 
            style={{ 
              backgroundColor: 'var(--status-brick-light)', 
              color: 'var(--status-brick)', 
              border: '1px solid var(--status-brick-border)',
              padding: '0.7rem 0.9rem', 
              borderRadius: 'var(--radius-sm)', 
              fontSize: '0.825rem', 
              fontWeight: 600,
              marginBottom: '1.25rem' 
            }}
          >
            {errorMessage}
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit}>
          {authMode === 'register' && (
            <div className="form-group" style={{ marginBottom: '1.1rem' }}>
              <label className="form-label" htmlFor="input-teacher-name" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                Nama Lengkap & Gelar Pengajar:
              </label>
              <input
                id="input-teacher-name"
                type="text"
                className="form-input"
                placeholder="Contoh: Budi Santoso, S.Pd."
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                required
              />
            </div>
          )}

          <div className="form-group" style={{ marginBottom: '1.1rem' }}>
            <label className="form-label" htmlFor="input-teacher-email" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
              Email Pengajar:
            </label>
            <div style={{ position: 'relative' }}>
              <input
                id="input-teacher-email"
                type="email"
                className="form-input"
                placeholder="guru@sekolah.id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
                required
                style={{ paddingLeft: '2.5rem' }}
              />
              <Mail 
                size={17} 
                style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} 
              />
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: authMode === 'register' ? '1.1rem' : '1.5rem' }}>
            <label className="form-label" htmlFor="input-teacher-password" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
              Kata Sandi:
            </label>
            <div style={{ position: 'relative' }}>
              <input
                id="input-teacher-password"
                type="password"
                className="form-input"
                placeholder="Minimal 6 karakter"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ paddingLeft: '2.5rem' }}
              />
              <Lock 
                size={17} 
                style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} 
              />
            </div>
          </div>

          {authMode === 'register' && (
            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
              <label className="form-label" htmlFor="input-teacher-confirm-password" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                Ulangi Kata Sandi:
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  id="input-teacher-confirm-password"
                  type="password"
                  className="form-input"
                  placeholder="Ulangi kata sandi di atas"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  style={{ paddingLeft: '2.5rem' }}
                />
                <Lock 
                  size={17} 
                  style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} 
                />
              </div>
            </div>
          )}

          <button 
            id="btn-submit-teacher-login"
            type="submit" 
            disabled={isLoading}
            className="btn btn-royal" 
            style={{ width: '100%', justifyContent: 'center', padding: '0.85rem', fontSize: '0.95rem', fontWeight: 700 }}
          >
            {isLoading ? (
              <>
                <Loader2 size={18} className="spin-animation" style={{ marginRight: '0.5rem' }} />
                {authMode === 'register' ? "Membuat Akun..." : "Memproses Masuk..."}
              </>
            ) : (
              <>
                <ShieldCheck size={18} />
                {authMode === 'register' ? "Daftar Akun Pengajar" : "Masuk ke Studio Guru"}
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>

        {/* Back to public */}
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
        </div>
      </div>
    </div>
  );
}

export default TeacherLoginView;
