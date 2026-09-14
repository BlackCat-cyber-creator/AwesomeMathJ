import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MathText } from './MathRenderer';
import { QuestionVisual } from './QuestionVisual';
import { getChapterSolutionData } from '../data/curriculumData';
import { 
  CheckCircle2, 
  ArrowLeft, 
  BookOpen, 
  Lightbulb, 
  Check, 
  GraduationCap,
  Loader2
} from 'lucide-react';

/**
 * ChapterSolutionView:
 * Halaman Kunci Jawaban & Pembahasan Online Resmi AwesomeMathJ.
 * Dibuka langsung saat siswa atau pengajar memindai QR Code di Lembar Kerja Cetak A4
 * atau membuka URL rute /solution/:grade/:chapterId.
 */
export function ChapterSolutionView({ 
  chapterData: propData = null, 
  onBack = null 
}) {
  const { grade: paramGrade, chapterId: paramChapterId } = useParams();
  const navigate = useNavigate();
  const [loadedData, setLoadedData] = useState(propData);
  const [isLoading, setIsLoading] = useState(!propData && !!(paramGrade && paramChapterId));

  const effectiveGrade = propData?.grade || (paramGrade ? Number(paramGrade) : null);
  const effectiveChapterId = propData?.id || paramChapterId;

  // Pastikan saat dibuka langsung scroll ke paling atas
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  // Fetch solution if opened via URL route directly
  useEffect(() => {
    let active = true;
    if (!propData && effectiveGrade && effectiveChapterId) {
      getChapterSolutionData(effectiveGrade, effectiveChapterId)
        .then((res) => {
          if (active) {
            setLoadedData(res);
            setIsLoading(false);
          }
        })
        .catch(() => {
          if (active) setIsLoading(false);
        });
    }
    return () => { active = false; };
  }, [propData, effectiveGrade, effectiveChapterId]);

  const handleBack = onBack || (() => navigate('/'));

  if (isLoading) {
    return (
      <div style={{ maxWidth: 680, margin: '5rem auto', textAlign: 'center', padding: '1rem' }}>
        <div className="editorial-card" style={{ padding: '3.5rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Loader2 size={36} className="spinner" style={{ color: 'var(--primary-blue)', animation: 'spin 1s linear infinite', marginBottom: '1rem' }} />
          <h3 style={{ color: 'var(--primary-navy)', marginBottom: '0.4rem' }}>Memuat Kunci Pembahasan...</h3>
          <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>
            Mengambil data pembahasan resmi bab matematika.
          </p>
        </div>
      </div>
    );
  }

  const chapterData = propData || loadedData;

  if (!chapterData || !chapterData.questions || chapterData.questions.length === 0) {
    return (
      <div style={{ maxWidth: 680, margin: '4rem auto', textAlign: 'center', padding: '1rem' }}>
        <div className="editorial-card" style={{ padding: '3rem 2rem' }}>
          <BookOpen size={48} color="var(--text-muted)" style={{ margin: '0 auto 1rem' }} />
          <h3>Pembahasan Tidak Ditemukan</h3>
          <p style={{ color: 'var(--text-secondary)', margin: '0.75rem 0 1.5rem' }}>
            Data pembahasan untuk bab ini belum tersedia atau tautan tidak lengkap.
          </p>
          <button className="btn btn-royal" onClick={handleBack}>
            <ArrowLeft size={16} />
            Kembali ke Beranda AwesomeMathJ
          </button>
        </div>
      </div>
    );
  }

  const questions = chapterData.questions;

  return (
    <div style={{ maxWidth: 860, margin: '1.5rem auto 5rem', padding: '0 1rem' }}>
      {/* Top Nav Control */}
      <div style={{ marginBottom: '1.5rem' }}>
        <button 
          id="btn-back-from-solution" 
          className="btn btn-outline" 
          onClick={onBack}
        >
          <ArrowLeft size={16} />
          Kembali ke Beranda
        </button>
      </div>

      {/* Header Banner */}
      <div className="editorial-card" style={{ 
        padding: '2rem 1.75rem', 
        marginBottom: '1.75rem', 
        borderLeft: '5px solid var(--primary-navy)',
        background: 'linear-gradient(to right, #F8FAFC, #FFFFFF)'
      }}>
        <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '0.6rem' }}>
          <span className="badge badge-sd" style={{ fontSize: '0.75rem' }}>
            Kelas {chapterData.grade} {chapterData.level ? `(${chapterData.level})` : ''}
          </span>
          {chapterData.phase && (
            <span className="badge badge-subtle" style={{ fontSize: '0.75rem' }}>
              {chapterData.phase}
            </span>
          )}
          <span className="badge badge-cat-pas" style={{ fontSize: '0.75rem', backgroundColor: '#ECFDF5', color: '#065F46', border: '1px solid #A7F3D0' }}>
            ✓ Kunci & Pembahasan Terverifikasi
          </span>
        </div>

        <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--primary-navy)', margin: '0.25rem 0 0.5rem' }}>
          Kunci Jawaban & Pembahasan: {chapterData.title}
        </h2>
        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          Panduan penyelesaian soal resmi AwesomeMathJ. Disertai metode terstruktur, rumus matematika, dan penjabaran detail per butir soal.
        </p>
      </div>

      {/* Quick Answer Key Card (Tabel Kunci Jawaban Singkat) */}
      <div className="editorial-card" style={{ padding: '1.5rem', marginBottom: '2rem', backgroundColor: '#FFFFFF' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <CheckCircle2 size={20} color="var(--status-emerald)" />
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, color: 'var(--primary-navy)' }}>
            Kunci Jawaban Singkat (Quick Key)
          </h3>
        </div>
        
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
          Cocokkan jawaban Anda secara cepat di bawah ini sebelum membaca langkah pembahasan terperinci:
        </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', 
          gap: '0.65rem' 
        }}>
          {questions.map((q, idx) => (
            <div 
              key={`quick-${q.id || idx}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.6rem 0.4rem',
                borderRadius: '8px',
                backgroundColor: '#F1F5F9',
                border: '1px solid #E2E8F0',
                transition: 'all 0.2s ease'
              }}
            >
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                No. {idx + 1}
              </span>
              <span style={{ 
                fontSize: '1.2rem', 
                fontWeight: 800, 
                color: 'var(--primary-navy)',
                marginTop: '0.15rem'
              }}>
                {q.correctAnswer}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Solutions Section */}
      <div style={{ marginBottom: '1rem' }}>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <BookOpen size={20} />
          Pembahasan Langkah demi Langkah Lengkap ({questions.length} Butir Soal):
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {questions.map((q, idx) => {
            return (
              <div 
                key={q.id || idx}
                id={`pembahasan-soal-${idx + 1}`}
                className="editorial-card"
                style={{
                  padding: '1.75rem',
                  borderTop: '3px solid var(--primary-navy)',
                  backgroundColor: '#FFFFFF'
                }}
              >
                {/* Question Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span style={{ 
                      backgroundColor: 'var(--primary-navy)', 
                      color: '#FFFFFF', 
                      fontWeight: 800, 
                      fontSize: '0.85rem', 
                      padding: '0.25rem 0.65rem', 
                      borderRadius: '6px' 
                    }}>
                      Soal #{idx + 1}
                    </span>
                    <span className="badge badge-subtle" style={{ fontSize: '0.72rem' }}>
                      Paket {Math.floor(idx / 5) + 1}
                    </span>
                  </div>

                  {/* Kunci Jawaban Badge */}
                  <div style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '0.35rem', 
                    backgroundColor: '#ECFDF5', 
                    border: '1.5px solid #10B981', 
                    padding: '0.3rem 0.75rem', 
                    borderRadius: '20px',
                    color: '#065F46',
                    fontWeight: 800,
                    fontSize: '0.875rem'
                  }}>
                    <Check size={16} strokeWidth={2.5} />
                    <span>Kunci: Opsi {q.correctAnswer}</span>
                  </div>
                </div>

                {/* Question Text */}
                <div style={{ fontSize: '1.025rem', lineHeight: '1.65', color: '#1E293B', marginBottom: '1rem' }}>
                  <MathText text={q.question} />
                </div>

                {/* Question Visual if any */}
                <QuestionVisual question={q} />

                {/* Options List */}
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
                  gap: '0.6rem', 
                  margin: '1.25rem 0 1.5rem' 
                }}>
                  {q.options.map((opt) => {
                    const isCorrect = opt.key === q.correctAnswer;
                    return (
                      <div 
                        key={opt.key}
                        style={{
                          display: 'flex',
                          alignItems: 'baseline',
                          gap: '0.6rem',
                          padding: '0.65rem 0.85rem',
                          borderRadius: '8px',
                          border: isCorrect ? '1.5px solid #10B981' : '1px solid #E2E8F0',
                          backgroundColor: isCorrect ? '#F0FDF4' : '#FAFAFA',
                          fontSize: '0.925rem'
                        }}
                      >
                        <span style={{ 
                          width: '24px', 
                          height: '24px', 
                          borderRadius: '50%', 
                          backgroundColor: isCorrect ? '#10B981' : '#E2E8F0',
                          color: isCorrect ? '#FFFFFF' : '#334155',
                          display: 'inline-flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          fontWeight: 700, 
                          fontSize: '0.78rem',
                          flexShrink: 0
                        }}>
                          {opt.key}
                        </span>
                        <div style={{ flex: 1, fontWeight: isCorrect ? 600 : 400, color: isCorrect ? '#065F46' : 'inherit' }}>
                          <MathText text={opt.text} />
                        </div>
                        {isCorrect && (
                          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#10B981', flexShrink: 0 }}>
                            (Benar)
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Step-by-Step Structured Solution Box */}
                <div style={{ 
                  backgroundColor: '#F8FAFC', 
                  border: '1px solid #CBD5E1', 
                  borderRadius: '8px', 
                  padding: '1.25rem',
                  borderLeft: '4px solid #2563EB'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.45rem', 
                    fontSize: '0.85rem', 
                    fontWeight: 700, 
                    color: '#1E3A8A', 
                    marginBottom: '0.5rem' 
                  }}>
                    <Lightbulb size={17} color="#2563EB" />
                    <span>Langkah Penyelesaian Terstruktur:</span>
                  </div>
                  <div style={{ fontSize: '0.95rem', lineHeight: '1.65', color: '#334155' }}>
                    <MathText text={(q.bestSolution || q.conceptualSolution || q.explanation || "Pembahasan belum tersedia untuk butir ini.").replace(/\*\*Metode Simpel & Efektif Sir Jevon:\*\*/gi, "**Langkah Penyelesaian Terstruktur:**")} />
                  </div>
                </div>

                {/* Tutor Tip / Hint if available */}
                {q.hint && (
                  <div style={{ 
                    marginTop: '0.85rem', 
                    padding: '0.65rem 0.9rem', 
                    backgroundColor: '#FEFCE8', 
                    border: '1px solid #FEF08A', 
                    borderRadius: '6px', 
                    fontSize: '0.825rem', 
                    color: '#854D0E',
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '0.4rem'
                  }}>
                    <strong>💡 Tips Cepat:</strong>
                    <div style={{ flex: 1 }}>
                      <MathText text={q.hint} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Floating/Fixed CTA */}
      <div style={{ 
        marginTop: '2.5rem', 
        padding: '1.5rem', 
        textAlign: 'center', 
        backgroundColor: '#FFFFFF', 
        borderRadius: '12px', 
        border: '1px solid #E2E8F0',
        boxShadow: 'var(--shadow-card)'
      }}>
        <GraduationCap size={32} color="var(--primary-navy)" style={{ margin: '0 auto 0.5rem' }} />
        <h4 style={{ margin: '0 0 0.5rem', color: 'var(--primary-navy)', fontSize: '1.1rem' }}>
          Selesai Mencocokkan Kunci Jawaban?
        </h4>
        <p style={{ margin: '0 0 1.25rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
          Jelajahi seluruh materi matematika kelas 4 sampai 12 secara mandiri di AwesomeMathJ.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button className="btn btn-royal" onClick={onBack} style={{ padding: '0.65rem 1.5rem' }}>
            <ArrowLeft size={16} />
            Kembali ke Beranda
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChapterSolutionView;
