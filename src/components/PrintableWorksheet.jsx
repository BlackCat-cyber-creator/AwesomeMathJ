import React, { useState } from 'react';
import { MathText } from './MathRenderer';
import { QuestionVisual } from './QuestionVisual';
import { Printer, ArrowLeft, Edit3 } from 'lucide-react';

/**
 * PrintableWorksheet:
 * Format Lembar Kerja Ujian Resmi AwesomeMathJ oleh Sir Jevon.
 * Siap cetak ke format PDF / Kertas A4 dengan CSS print teroptimasi.
 */
export function PrintableWorksheet({ quest, onBack }) {
  const [tutoringName, setTutoringName] = useState("AwesomeMathJ");
  const [teacherName, setTeacherName] = useState("Studio Guru Matematika");
  const [timeAlloc, setTimeAlloc] = useState("20 Menit");
  const [isEditingHeader, setIsEditingHeader] = useState(false);

  if (!quest) return null;

  return (
    <div style={{ maxWidth: 880, margin: '1.5rem auto 4rem', padding: '0 1rem' }}>
      {/* Control Bar (Hidden on Print) */}
      <div className="no-print editorial-card" style={{ padding: '1rem 1.25rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
        <button className="btn btn-outline" onClick={onBack}>
          <ArrowLeft size={16} />
          Kembali ke Beranda
        </button>

        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <button 
            className="btn btn-subtle"
            onClick={() => setIsEditingHeader(!isEditingHeader)}
          >
            <Edit3 size={15} />
            {isEditingHeader ? "Tutup Pengaturan Header" : "Atur Nama Bimbel & Durasi"}
          </button>
          <button 
            id="btn-trigger-print"
            className="btn btn-primary allow-print"
            onClick={() => window.print()}
          >
            <Printer size={16} />
            Cetak Lembar Kerja / Simpan PDF
          </button>
        </div>
      </div>

      {/* Editing Drawer (Hidden on Print) */}
      {isEditingHeader && (
        <div className="no-print editorial-card" style={{ padding: '1.25rem', marginBottom: '1.5rem', backgroundColor: '#F8FAFC' }}>
          <h4 style={{ fontSize: '0.95rem', marginBottom: '0.75rem', color: 'var(--primary-navy)' }}>
            Kustomisasi Header Lembar Ujian:
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label" style={{ fontSize: '0.8rem' }}>Nama Bimbel / Sekolah:</label>
              <input 
                type="text" 
                className="form-input" 
                value={tutoringName} 
                onChange={(e) => setTutoringName(e.target.value)} 
              />
            </div>
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label" style={{ fontSize: '0.8rem' }}>Nama Guru:</label>
              <input 
                type="text" 
                className="form-input" 
                value={teacherName} 
                onChange={(e) => setTeacherName(e.target.value)} 
              />
            </div>
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label" style={{ fontSize: '0.8rem' }}>Alokasi Waktu:</label>
              <input 
                type="text" 
                className="form-input" 
                value={timeAlloc} 
                onChange={(e) => setTimeAlloc(e.target.value)} 
              />
            </div>
          </div>
        </div>
      )}

      {/* Official Examination Worksheet Paper */}
      <div className="editorial-card printable-page" style={{ padding: '2.5rem 3rem', backgroundColor: '#FFFFFF', border: '1px solid #D1D5DB' }}>
        {/* Official Header */}
        <div className="print-header" style={{ borderBottom: '2px solid #111827', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1.5rem' }}>
            <div style={{ flex: 1 }}>
              <div style={{ textTransform: 'uppercase', fontSize: '0.825rem', fontWeight: 800, letterSpacing: '0.06em', color: 'var(--primary-navy)' }}>
                {tutoringName} • {teacherName}
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '0.2rem 0 0.35rem', color: '#111827' }}>
                LEMBAR LATIHAN & PR MATEMATIKA MANDIRI
              </h2>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Mata Pelajaran: <strong>Matematika{quest.trackLabel ? ` (${quest.trackLabel})` : ''}</strong> • Topik: <strong>{quest.chapterTitle}</strong> (Kelas {quest.grade})
              </div>
            </div>

            {/* QR Code Simulation & Online Access Badge */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              border: '1px dashed #9CA3AF', 
              padding: '0.45rem 0.65rem', 
              borderRadius: '6px',
              backgroundColor: '#FAFAFA',
              minWidth: '105px'
            }}>
              {/* Minimal SVG QR pattern */}
              <svg width="68" height="68" viewBox="0 0 100 100" fill="#1E3A8A">
                <rect width="100" height="100" fill="#FFFFFF" />
                <rect x="5" y="5" width="30" height="30" fill="#1E3A8A" />
                <rect x="10" y="10" width="20" height="20" fill="#FFFFFF" />
                <rect x="15" y="15" width="10" height="10" fill="#1E3A8A" />
                <rect x="65" y="5" width="30" height="30" fill="#1E3A8A" />
                <rect x="70" y="10" width="20" height="20" fill="#FFFFFF" />
                <rect x="75" y="15" width="10" height="10" fill="#1E3A8A" />
                <rect x="5" y="65" width="30" height="30" fill="#1E3A8A" />
                <rect x="10" y="70" width="20" height="20" fill="#FFFFFF" />
                <rect x="15" y="75" width="10" height="10" fill="#1E3A8A" />
                <rect x="42" y="10" width="8" height="8" />
                <rect x="52" y="18" width="6" height="6" />
                <rect x="40" y="32" width="6" height="6" />
                <rect x="25" y="45" width="8" height="8" />
                <rect x="45" y="45" width="10" height="10" />
                <rect x="65" y="45" width="8" height="8" />
                <rect x="80" y="55" width="8" height="8" />
                <rect x="42" y="65" width="8" height="8" />
                <rect x="60" y="72" width="8" height="8" />
                <rect x="78" y="78" width="8" height="8" />
              </svg>
              <span style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--primary-navy)', marginTop: '0.2rem', textAlign: 'center' }}>
                KUNCI & PEMBAHASAN ONLINE
              </span>
            </div>
          </div>

          {/* Student Meta Fill-in Table */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            border: '1px solid #D1D5DB', 
            borderRadius: '4px',
            marginTop: '1.25rem',
            backgroundColor: '#F9FAFB',
            fontSize: '0.85rem'
          }}>
            <div style={{ padding: '0.5rem 0.75rem', borderRight: '1px solid #D1D5DB' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', display: 'block' }}>NAMA SISWA:</span>
              <strong>{quest.studentName}</strong>
            </div>
            <div style={{ padding: '0.5rem 0.75rem', borderRight: '1px solid #D1D5DB' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', display: 'block' }}>KELAS / JENJANG:</span>
              <strong>Kelas {quest.grade}</strong>
            </div>
            <div style={{ padding: '0.5rem 0.75rem', borderRight: '1px solid #D1D5DB' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', display: 'block' }}>WAKTU PENGERJAAN:</span>
              <strong>{timeAlloc}</strong>
            </div>
            <div style={{ padding: '0.5rem 0.75rem', textAlign: 'center', backgroundColor: '#EFF6FF' }}>
              <span style={{ color: 'var(--primary-navy)', fontSize: '0.75rem', display: 'block', fontWeight: 700 }}>NILAI AKHIR:</span>
              <strong style={{ fontSize: '1.1rem' }}>_____ / 100</strong>
            </div>
          </div>

          {/* Instructions */}
          <div style={{ marginTop: '0.85rem', fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
            <strong>Petunjuk:</strong> Pilihlah salah satu jawaban yang paling tepat (A, B, C, atau D). Gunakan ruang kosong di bawah tiap nomor untuk mencakar hitungan. Setelah selesai, kumpulkan ke pengajar atau pindai QR Code di pojok atas untuk melihat pembahasan.
          </div>
        </div>

        {/* Questions List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {quest.questions.map((q, idx) => (
            <div 
              key={q.id || idx} 
              style={{ 
                borderBottom: '1px dashed #E5E7EB', 
                paddingBottom: '1.5rem',
                breakInside: 'avoid'
              }}
            >
              {/* Question Number */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--primary-navy)' }}>
                  {idx + 1}.
                </span>
              </div>

              {/* Question Text */}
              <div style={{ fontSize: '1.025rem', color: '#111827', marginBottom: '0.85rem', lineHeight: '1.65' }}>
                <MathText text={q.question} />
              </div>

              <QuestionVisual question={q} />

              {/* Options Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem 1.5rem', marginBottom: '1rem' }}>
                {q.options.map((opt) => (
                  <div key={opt.key} style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', fontSize: '0.95rem' }}>
                    <span style={{ 
                      width: '22px', 
                      height: '22px', 
                      borderRadius: '50%', 
                      border: '1.5px solid #4B5563', 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '0.8rem',
                      color: '#111827'
                    }}>
                      {opt.key}
                    </span>
                    <div style={{ flex: 1 }}>
                      <MathText text={opt.text} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Scratch Work Space on paper */}
              <div style={{ 
                height: '85px', 
                border: '1px solid #E5E7EB', 
                borderRadius: '6px', 
                backgroundColor: '#FCFCFD',
                padding: '0.4rem 0.6rem',
                fontSize: '0.72rem',
                color: '#9CA3AF'
              }}>
                <em>Ruang coretan hitungan siswa:</em>
              </div>
            </div>
          ))}
        </div>

        {/* Footer verification note */}
        <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #D1D5DB', display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#6B7280' }}>
          <span>AwesomeMathJ • Platform Pembelajaran Matematika oleh Sir Jevon</span>
          <span>Tanda Tangan Guru: _____________________</span>
        </div>
      </div>
    </div>
  );
}

export default PrintableWorksheet;
