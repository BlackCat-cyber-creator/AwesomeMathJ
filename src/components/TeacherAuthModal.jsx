import React, { useState } from 'react';
import { Lock, KeyRound, ArrowRight, ShieldCheck, X } from 'lucide-react';

/**
 * TeacherAuthModal:
 * Modal Autentikasi Khusus Guru.
 * Menjaga privasi data murid, generator PR, dan rekap penilaian.
 */
export function TeacherAuthModal({ isOpen, onClose, onSuccess }) {
  const [pin, setPin] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const validPins = ["7788", "sirjevon", "admin", "123456"];

  const handleLogin = (e) => {
    if (e) e.preventDefault();
    const cleanPin = pin.trim().toLowerCase();
    
    if (validPins.includes(cleanPin)) {
      setErrorMessage("");
      onSuccess();
    } else {
      setErrorMessage("PIN / sandi salah. Silakan periksa kembali kredensial Anda.");
    }
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(17, 24, 39, 0.65)',
        backdropFilter: 'blur(4px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="editorial-card"
        style={{
          width: '100%',
          maxWidth: 440,
          padding: '2rem',
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-elevated)',
          position: 'relative'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-muted)'
          }}
          title="Tutup"
        >
          <X size={20} />
        </button>

        {/* Header Icon */}
        <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
          <div 
            style={{
              width: 52,
              height: 52,
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--primary-light)',
              color: 'var(--primary-navy)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '0.75rem',
              border: '1px solid var(--primary-subtle)'
            }}
          >
            <Lock size={24} />
          </div>
          <h3 style={{ fontSize: '1.35rem', color: 'var(--primary-navy)', marginBottom: '0.35rem' }}>
            Sign In Guru
          </h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            Teacher Command Center & CRM Privat AwesomeMathJ
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin}>
          <div className="form-group" style={{ marginBottom: '1.25rem' }}>
            <label className="form-label" htmlFor="input-teacher-pin" style={{ fontSize: '0.85rem' }}>
              PIN / Sandi Akses Guru:
            </label>
            <div style={{ position: 'relative' }}>
              <input
                id="input-teacher-pin"
                type="password"
                className="form-input"
                placeholder="Masukkan PIN akses guru"
                value={pin}
                onChange={(e) => {
                  setPin(e.target.value);
                  setErrorMessage("");
                }}
                autoFocus
                style={{ paddingLeft: '2.5rem', fontSize: '1rem', letterSpacing: pin ? '0.2em' : 'normal' }}
              />
              <KeyRound 
                size={18} 
                style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} 
              />
            </div>
            {errorMessage && (
              <p style={{ color: 'var(--status-brick)', fontSize: '0.8rem', marginTop: '0.4rem' }}>
                {errorMessage}
              </p>
            )}
          </div>

          <button 
            id="btn-submit-teacher-login"
            type="submit" 
            className="btn btn-royal" 
            style={{ width: '100%', justifyContent: 'center', padding: '0.75rem' }}
          >
            <ShieldCheck size={18} />
            Buka Dashboard Guru
            <ArrowRight size={16} />
          </button>
        </form>

        <div style={{ marginTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.85rem', textAlign: 'center' }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            Materi handbook matematika tetap terbuka bebas untuk publik tanpa perlu login.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeacherAuthModal;
