import React, { useState } from 'react';
import { 
  Lock, 
  KeyRound, 
  ArrowRight, 
  ShieldCheck, 
  ArrowLeft, 
  Mail, 
  User, 
  CloudCheck, 
  Sparkles,
  Loader2
} from 'lucide-react';
import { loginTeacherWithEmail, registerTeacherWithEmail } from '../firebase/auth';

/**
 * TeacherLoginView:
 * Tampilan Halaman Login Pengajar dengan Firebase Authentication & Cloud Sync
 * Mendukung Email/Password login, registrasi guru baru, serta PIN cepat untuk kemudahan akses.
 */
export function TeacherLoginView({ onBack, onSuccess }) {
  const [activeTab, setActiveTab] = useState("email"); // "email" | "register" | "pin"
  
  // Form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [pin, setPin] = useState("");
  
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const validPins = ["7788", "sirjevon", "admin", "123456"];

  // Handle Login via Firebase Email/Password
  const handleEmailLogin = async (e) => {
    if (e) e.preventDefault();
    if (!email.trim() || !password) {
      setErrorMessage("Silakan isi email dan kata sandi Anda.");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    const res = await loginTeacherWithEmail(email, password);
    setIsLoading(false);

    if (res.success) {
      onSuccess(res.user);
    } else {
      setErrorMessage(res.error || "Gagal masuk. Periksa kembali email dan kata sandi.");
    }
  };

  // Handle Register via Firebase Email/Password
  const handleRegister = async (e) => {
    if (e) e.preventDefault();
    if (!fullName.trim()) {
      setErrorMessage("Silakan masukkan nama lengkap pengajar.");
      return;
    }
    if (!email.trim() || !password) {
      setErrorMessage("Silakan lengkapi email dan kata sandi.");
      return;
    }
    if (password.length < 6) {
      setErrorMessage("Kata sandi minimal 6 karakter.");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    const res = await registerTeacherWithEmail(email, password, fullName.trim());
    setIsLoading(false);

    if (res.success) {
      setSuccessMessage("Akun guru berhasil didaftarkan! Mengalihkan ke dashboard...");
      setTimeout(() => {
        onSuccess(res.user);
      }, 700);
    } else {
      setErrorMessage(res.error || "Gagal mendaftar akun baru.");
    }
  };

  // Handle Quick PIN Access
  const handlePinLogin = (e) => {
    if (e) e.preventDefault();
    const cleanPin = pin.trim().toLowerCase();

    if (validPins.includes(cleanPin)) {
      setErrorMessage("");
      onSuccess({ uid: "teacher-offline", email: "guru@awesomemathj.com", displayName: "Sir Jevon (Akses Cepat)" });
    } else {
      setErrorMessage("PIN akses pengajar salah. Masukkan 7788 atau sandi pengajar.");
    }
  };

  return (
    <div style={{ minHeight: '82vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem' }}>
      <div 
        className="editorial-card"
        style={{
          width: '100%',
          maxWidth: 480,
          padding: '2.5rem 2rem',
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-elevated)',
          borderTop: '5px solid var(--primary-navy)'
        }}
      >
        {/* Brand Icon Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
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
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.45rem', marginBottom: '0.35rem' }}>
            <span className="badge badge-primary" style={{ fontSize: '0.72rem', fontWeight: 700 }}>
              PORTAL GURU MATEMATIKA
            </span>
            <span 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.25rem', 
                fontSize: '0.72rem', 
                fontWeight: 600, 
                color: 'var(--status-emerald)',
                backgroundColor: 'var(--status-emerald-light)',
                padding: '0.15rem 0.5rem',
                borderRadius: 'var(--radius-full)'
              }}
            >
              <Sparkles size={11} /> Cloud Firestore
            </span>
          </div>
          <h2 style={{ fontSize: '1.45rem', color: 'var(--primary-navy)', marginBottom: '0.35rem', fontWeight: 800 }}>
            Studio Guru AwesomeMathJ
          </h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
            Kelola murid privat, susun penugasan PR kurikulum, dan pantau progres belajar tersinkronisasi di cloud.
          </p>
        </div>

        {/* Tab Selector */}
        <div 
          style={{ 
            display: 'flex', 
            backgroundColor: '#F1F5F9', 
            borderRadius: 'var(--radius-sm)', 
            padding: '3px',
            marginBottom: '1.5rem',
            border: '1px solid var(--border-subtle)'
          }}
        >
          <button
            type="button"
            onClick={() => { setActiveTab("email"); setErrorMessage(""); setSuccessMessage(""); }}
            style={{
              flex: 1,
              padding: '0.55rem 0.25rem',
              fontSize: '0.825rem',
              fontWeight: activeTab === "email" ? 700 : 500,
              color: activeTab === "email" ? 'var(--primary-navy)' : 'var(--text-secondary)',
              backgroundColor: activeTab === "email" ? '#FFFFFF' : 'transparent',
              borderRadius: 'var(--radius-sm)',
              border: 'none',
              cursor: 'pointer',
              boxShadow: activeTab === "email" ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
              transition: 'all 0.2s'
            }}
          >
            Masuk Akun
          </button>
          <button
            type="button"
            onClick={() => { setActiveTab("register"); setErrorMessage(""); setSuccessMessage(""); }}
            style={{
              flex: 1,
              padding: '0.55rem 0.25rem',
              fontSize: '0.825rem',
              fontWeight: activeTab === "register" ? 700 : 500,
              color: activeTab === "register" ? 'var(--primary-navy)' : 'var(--text-secondary)',
              backgroundColor: activeTab === "register" ? '#FFFFFF' : 'transparent',
              borderRadius: 'var(--radius-sm)',
              border: 'none',
              cursor: 'pointer',
              boxShadow: activeTab === "register" ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
              transition: 'all 0.2s'
            }}
          >
            Daftar Guru
          </button>
          <button
            type="button"
            onClick={() => { setActiveTab("pin"); setErrorMessage(""); setSuccessMessage(""); }}
            style={{
              flex: 1,
              padding: '0.55rem 0.25rem',
              fontSize: '0.825rem',
              fontWeight: activeTab === "pin" ? 700 : 500,
              color: activeTab === "pin" ? 'var(--primary-navy)' : 'var(--text-secondary)',
              backgroundColor: activeTab === "pin" ? '#FFFFFF' : 'transparent',
              borderRadius: 'var(--radius-sm)',
              border: 'none',
              cursor: 'pointer',
              boxShadow: activeTab === "pin" ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
              transition: 'all 0.2s'
            }}
          >
            PIN Cepat
          </button>
        </div>

        {/* Feedback Alerts */}
        {errorMessage && (
          <div 
            style={{ 
              backgroundColor: 'var(--status-brick-light)', 
              color: 'var(--status-brick)', 
              border: '1px solid var(--status-brick-border)',
              padding: '0.65rem 0.85rem', 
              borderRadius: 'var(--radius-sm)', 
              fontSize: '0.825rem', 
              fontWeight: 600,
              marginBottom: '1.25rem' 
            }}
          >
            {errorMessage}
          </div>
        )}
        {successMessage && (
          <div 
            style={{ 
              backgroundColor: 'var(--status-emerald-light)', 
              color: 'var(--status-emerald)', 
              border: '1px solid var(--status-emerald-border)',
              padding: '0.65rem 0.85rem', 
              borderRadius: 'var(--radius-sm)', 
              fontSize: '0.825rem', 
              fontWeight: 600,
              marginBottom: '1.25rem' 
            }}
          >
            {successMessage}
          </div>
        )}

        {/* TAB 1: LOGIN EMAIL */}
        {activeTab === "email" && (
          <form onSubmit={handleEmailLogin}>
            <div className="form-group" style={{ marginBottom: '1rem' }}>
              <label className="form-label" htmlFor="input-teacher-email" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                Email Pengajar:
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  id="input-teacher-email"
                  type="email"
                  className="form-input"
                  placeholder="contoh: sirjevon@awesomemathj.com"
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

            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
              <label className="form-label" htmlFor="input-teacher-password" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                Kata Sandi:
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  id="input-teacher-password"
                  type="password"
                  className="form-input"
                  placeholder="Masukkan kata sandi"
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

            <button 
              id="btn-submit-teacher-login"
              type="submit" 
              disabled={isLoading}
              className="btn btn-royal" 
              style={{ width: '100%', justifyContent: 'center', padding: '0.85rem', fontSize: '0.95rem', fontWeight: 700 }}
            >
              {isLoading ? (
                <>Memproses Masuk...</>
              ) : (
                <>
                  <ShieldCheck size={18} />
                  Masuk ke Studio Guru
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>
        )}

        {/* TAB 2: REGISTER GURU */}
        {activeTab === "register" && (
          <form onSubmit={handleRegister}>
            <div className="form-group" style={{ marginBottom: '0.9rem' }}>
              <label className="form-label" htmlFor="input-register-name" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                Nama Pengajar:
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  id="input-register-name"
                  type="text"
                  className="form-input"
                  placeholder="contoh: Sir Jevon"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  autoFocus
                  required
                  style={{ paddingLeft: '2.5rem' }}
                />
                <User 
                  size={17} 
                  style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} 
                />
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: '0.9rem' }}>
              <label className="form-label" htmlFor="input-register-email" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                Email Pengajar:
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  id="input-register-email"
                  type="email"
                  className="form-input"
                  placeholder="guru@awesomemathj.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{ paddingLeft: '2.5rem' }}
                />
                <Mail 
                  size={17} 
                  style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} 
                />
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: '1.4rem' }}>
              <label className="form-label" htmlFor="input-register-password" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                Kata Sandi (Min. 6 karakter):
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  id="input-register-password"
                  type="password"
                  className="form-input"
                  placeholder="Buat kata sandi aman"
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

            <button 
              id="btn-submit-teacher-register"
              type="submit" 
              disabled={isLoading}
              className="btn btn-royal" 
              style={{ width: '100%', justifyContent: 'center', padding: '0.85rem', fontSize: '0.95rem', fontWeight: 700 }}
            >
              {isLoading ? (
                <>Mendaftarkan Akun...</>
              ) : (
                <>
                  <Sparkles size={18} />
                  Daftarkan Akun Guru Baru
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>
        )}

        {/* TAB 3: PIN CEPAT / DEMO */}
        {activeTab === "pin" && (
          <form onSubmit={handlePinLogin}>
            <div className="form-group" style={{ marginBottom: '1.25rem' }}>
              <label className="form-label" htmlFor="input-teacher-view-pin" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                PIN Cepat Akses Guru:
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  id="input-teacher-view-pin"
                  type="password"
                  className="form-input"
                  placeholder="Masukkan PIN: 7788"
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
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.4rem' }}>
                PIN cepat bawaan: <code>7788</code> untuk pengujian lokal cepat.
              </span>
            </div>

            <button 
              id="btn-submit-pin-login"
              type="submit" 
              className="btn btn-royal" 
              style={{ width: '100%', justifyContent: 'center', padding: '0.85rem', fontSize: '0.95rem', fontWeight: 700 }}
            >
              <ShieldCheck size={18} />
              Buka Studio Guru (Akses Cepat)
              <ArrowRight size={16} />
            </button>
          </form>
        )}

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
            Data guru dan siswa tersimpan aman di Firebase Firestore Singapore (asia-southeast1).
          </span>
        </div>
      </div>
    </div>
  );
}

export default TeacherLoginView;
