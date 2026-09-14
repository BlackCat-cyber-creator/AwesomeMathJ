import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import { MathText } from './MathRenderer';
import { QuestionVisual } from './QuestionVisual';
import { getQuestById } from '../utils/storage';
import { Printer, ArrowLeft, Edit3, FileQuestion } from 'lucide-react';

/**
 * PrintableWorksheet:
 * Format Lembar Kerja Ujian Resmi AwesomeMathJ.
 * Siap cetak ke format PDF / Kertas A4 dengan CSS print teroptimasi.
 */
export function PrintableWorksheet({ quest: propQuest = null, onBack = null }) {
  const { questId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const onBackAction = onBack || (() => navigate('/'));

  const [quest] = useState(() => {
    if (propQuest) return propQuest;
    if (location.state?.quest) return location.state.quest;
    if (questId) {
      const fromStorage = getQuestById(questId);
      if (fromStorage) return fromStorage;
      try {
        const fromCache = localStorage.getItem(`mathquest_worksheet_${questId}`);
        if (fromCache) return JSON.parse(fromCache);
        const fromPractice = localStorage.getItem(`mathquest_practice_${questId}`);
        if (fromPractice) return JSON.parse(fromPractice);
      } catch {}
    }
    return null;
  });

  const [tutoringName, setTutoringName] = useState("AwesomeMathJ");
  const [teacherName, setTeacherName] = useState("Studio Guru Matematika");
  const [studentName, setStudentName] = useState(quest?.studentName || "Lembar Siswa");
  const [timeAlloc, setTimeAlloc] = useState("20 Menit");
  const [isEditingHeader, setIsEditingHeader] = useState(false);

  // Otomatis scroll ke paling atas saat lembar kerja dibuka
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  if (!quest) {
    return (
      <div style={{ maxWidth: 680, margin: '4rem auto', textAlign: 'center', padding: '1rem' }}>
        <div className="editorial-card" style={{ padding: '3rem 2rem' }}>
          <FileQuestion size={48} color="var(--text-muted)" style={{ margin: '0 auto 1rem' }} />
          <h3>Lembar Kerja Tidak Ditemukan</h3>
          <p style={{ color: 'var(--text-secondary)', margin: '0.75rem 0 1.5rem' }}>
            Data soal untuk lembar kerja ini tidak ditemukan di memori browser.
          </p>
          <button className="btn btn-royal" onClick={onBackAction}>
            <ArrowLeft size={16} />
            Kembali ke Beranda
          </button>
        </div>
      </div>
    );
  }

  // URL solusi online dinamis untuk QR code yang bisa discan kamera smartphone
  const solutionUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/solution/${quest.grade || 4}/${encodeURIComponent(quest.chapterId || quest.id || '')}`
    : `/solution/${quest.grade || 4}/${encodeURIComponent(quest.chapterId || quest.id || '')}`;

  return (
    <div style={{ maxWidth: 880, margin: '1.5rem auto 4rem', padding: '0 1rem' }}>
      {/* Control Bar (Hidden on Print) */}
      <div className="no-print editorial-card" style={{ padding: '1rem 1.25rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
        <button className="btn btn-outline" onClick={onBackAction}>
          <ArrowLeft size={16} />
          Kembali ke Beranda
        </button>

        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <button 
            id="btn-toggle-customize-header"
            className="btn btn-subtle"
            onClick={() => setIsEditingHeader(!isEditingHeader)}
          >
            <Edit3 size={15} />
            {isEditingHeader ? "Tutup Pengaturan Header" : "Atur Nama Bimbel, Guru & Siswa"}
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
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
              <label className="form-label" style={{ fontSize: '0.8rem' }}>Nama Siswa:</label>
              <input 
                type="text" 
                className="form-input" 
                value={studentName} 
                onChange={(e) => setStudentName(e.target.value)} 
                placeholder="Contoh: Lembar Siswa / Nama Murid"
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

            {/* Scannable Vector QR Code & Online Access Badge */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              border: '1px solid #CBD5E1', 
              padding: '0.45rem 0.6rem', 
              borderRadius: '8px',
              backgroundColor: '#FFFFFF',
              minWidth: '105px',
              textAlign: 'center'
            }}>
              <QRCodeSVG 
                value={solutionUrl} 
                size={70} 
                level="M" 
                fgColor="#1E3A8A"
                bgColor="#FFFFFF"
              />
              <span style={{ fontSize: '0.62rem', fontWeight: 800, color: 'var(--primary-navy)', marginTop: '0.3rem', letterSpacing: '0.02em', textAlign: 'center' }}>
                KUNCI & PEMBAHASAN ONLINE
              </span>
              <span style={{ fontSize: '0.55rem', color: 'var(--text-muted)', marginTop: '0.1rem' }}>
                Pindai dengan Kamera HP
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
              <strong>{studentName || "Lembar Siswa"}</strong>
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
          <span>AwesomeMathJ • Platform Pembelajaran Matematika Kurikulum Merdeka</span>
          <span>Tanda Tangan Guru: _____________________</span>
        </div>
      </div>
    </div>
  );
}

export default PrintableWorksheet;
