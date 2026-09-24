import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Printer, 
  Share2, 
  Check, 
  Lightbulb, 
  FileText, 
  RotateCcw,
  PenTool,
  BookOpen
} from 'lucide-react';
import { MathText } from '../MathRenderer';
import { QuestionVisual } from '../QuestionVisual';
import { PillarsAccordion } from './PillarsAccordion';

function isNumericString(str) {
  return /^[+-]?(?:\d+(?:\.\d+)?|\.\d+)(?:\/[+-]?(?:\d+(?:\.\d+)?|\.\d+))?$/.test(str);
}

function parseNumericValue(str) {
  if (!str) return NaN;
  const fracMatch = str.match(/^([+-]?\d+(?:\.\d+)?)\/([+-]?\d+(?:\.\d+)?)$/);
  if (fracMatch) {
    const num = parseFloat(fracMatch[1]);
    const den = parseFloat(fracMatch[2]);
    if (den !== 0) return num / den;
  }
  return parseFloat(str);
}

/**
 * Evaluasi jawaban soal AMC (short answer):
 * - Normalisasi spasi dan koma desimal
 * - Pencocokan eksak terhadap answer atau acceptedAnswers
 * - Kesetaraan numerik & pecahan (misal: "36.0" === "36", "0.75" === "3/4", "0,75" === "3/4")
 * - Menolak substring false-positives (misal: "123" vs "1")
 */
function evaluateAmcAnswer(rawInput, q) {
  if (!rawInput || !q) return false;
  const cleanInput = String(rawInput).trim().toLowerCase().replace(/\s+/g, '').replace(/,/g, '.');
  if (!cleanInput) return false;

  const validAnswers = [
    String(q.answer ?? '').toLowerCase().trim(),
    ...(q.acceptedAnswers || []).map(a => String(a ?? '').toLowerCase().trim())
  ].filter(Boolean);

  if (validAnswers.length === 0) return false;

  const isInputNumeric = isNumericString(cleanInput);
  const inputNum = isInputNumeric ? parseNumericValue(cleanInput) : NaN;

  return validAnswers.some(ans => {
    const cleanAns = ans.replace(/\s+/g, '').replace(/,/g, '.');
    if (cleanInput === cleanAns) return true;
    if (isInputNumeric && isNumericString(cleanAns)) {
      const ansNum = parseNumericValue(cleanAns);
      if (!isNaN(inputNum) && !isNaN(ansNum) && Math.abs(inputNum - ansNum) < 1e-9) {
        return true;
      }
    }
    return false;
  });
}

/**
 * AmcChapterView:
 * Tampilan Khusus Modul Kompetisi Matematika AMC (AMC 8, AMC 10, AMC 12).
 */
export function AmcChapterView({
  chapter,
  levelMeta,
  onPrintQuest
}) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [studentInputs, setStudentInputs] = useState({}); // { [qId]: string }
  const [evaluationResults, setEvaluationResults] = useState({}); // { [qId]: boolean }
  const [revealedHints, setRevealedHints] = useState({});
  const [revealedSolutions, setRevealedSolutions] = useState({});
  const [studentNotes, setStudentNotes] = useState({});

  if (!chapter) return null;

  const handleCopyLink = () => {
    const url = `${window.location.origin}/?mode=amc&level=${levelMeta?.level || 8}&chapter=${chapter.id}`;
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleInputChange = (qId, val) => {
    setStudentInputs(prev => ({ ...prev, [qId]: val }));
    // Reset status evaluasi jika murid mengedit input
    if (evaluationResults[qId] !== undefined) {
      setEvaluationResults(prev => {
        const next = { ...prev };
        delete next[qId];
        return next;
      });
    }
  };


  const handleCheckAnswer = (q) => {
    const rawInput = (studentInputs[q.id] || '').trim().toLowerCase();
    if (!rawInput) return;

    const isMatch = evaluateAmcAnswer(rawInput, q);

    setEvaluationResults(prev => ({ ...prev, [q.id]: isMatch }));

    if (isMatch) {
      try {
        confetti({
          particleCount: 70,
          spread: 50,
          origin: { y: 0.7 }
        });
      } catch {}
    }
  };

  const toggleHint = (qId) => {
    setRevealedHints(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  const toggleSolution = (qId) => {
    setRevealedSolutions(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  const questions = chapter.questions || [];

  return (
    <div className="amc-chapter-view">
      {/* Chapter Top Header Banner */}
      <div className="editorial-card chapter-header-card" style={{ marginBottom: '1.5rem' }}>
        <div className="chapter-header-top-bar">
          <div className="chapter-header-badges">
            <span className="badge badge-sd" style={{ fontSize: '0.75rem' }}>
              {levelMeta?.badge || `AMC ${chapter.level || 8}`}
            </span>
            <span className="badge badge-cat-pas" style={{ fontSize: '0.75rem' }}>
              {chapter.domain}
            </span>
          </div>

          <div className="chapter-header-actions">
            <button 
              id="btn-copy-amc-link"
              className="btn btn-outline" 
              style={{ padding: '0.4rem 0.75rem', fontSize: '0.8rem' }}
              onClick={handleCopyLink}
            >
              {copiedLink ? (
                <>
                  <Check size={14} color="var(--status-emerald)" />
                  Link Tersalin!
                </>
              ) : (
                <>
                  <Share2 size={14} />
                  Bagikan Bab
                </>
              )}
            </button>

            <button 
              id="btn-print-amc-worksheet"
              className="btn btn-royal allow-print"
              style={{ padding: '0.4rem 0.85rem', fontSize: '0.8rem' }}
              onClick={() => {
                const questPayload = {
                  id: chapter.id,
                  title: `Lembar Kerja: ${chapter.title}`,
                  grade: chapter.level,
                  level: `AMC ${chapter.level}`,
                  levelTitle: levelMeta?.title,
                  chapterId: chapter.id,
                  chapterTitle: chapter.title,
                  trackLabel: chapter.domain,
                  questions: chapter.questions || []
                };
                if (typeof onPrintQuest === 'function') {
                  onPrintQuest(questPayload);
                } else if (typeof window !== 'undefined' && typeof window.print === 'function') {
                  window.print();
                }
              }}
            >
              <Printer size={14} />
              Cetak LKPD AMC (A4)
            </button>
          </div>
        </div>

        <h2 className="chapter-header-title" style={{ fontSize: '1.45rem', marginTop: '0.4rem' }}>
          {chapter.title}
        </h2>

        {chapter.concepts && chapter.concepts.length > 0 && (
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '0.6rem' }}>
            {chapter.concepts.map((concept, cIdx) => (
              <span key={cIdx} className="badge badge-subtle" style={{ fontSize: '0.72rem' }}>
                {concept}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* 6 Pedagogical Pillars Accordion (Teori, Rumus KaTeX, Contoh Terbimbing) */}
      <PillarsAccordion summary={chapter.summary} />

      {/* Interactive AMC Practice Problems Section */}
      <div style={{ marginTop: '2.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-navy)', display: 'flex', alignItems: 'center', gap: '0.45rem', margin: 0 }}>
              <PenTool size={18} color="var(--primary-blue)" />
              Latihan Soal & Pemahaman Konsep
            </h3>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              {questions.length} Soal Lengkap
            </span>
          </div>

          <button
            className="btn btn-outline"
            style={{ fontSize: '0.78rem', padding: '0.35rem 0.75rem' }}
            onClick={() => {
              setStudentInputs({});
              setEvaluationResults({});
              setRevealedHints({});
              setRevealedSolutions({});
              setStudentNotes({});
            }}
          >
            <RotateCcw size={13} />
            Reset Latihan
          </button>
        </div>

        {/* Questions Cards List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {questions.map((q, idx) => {
            const isHintOpen = revealedHints[q.id];
            const isSolOpen = revealedSolutions[q.id];
            const isEvaluated = evaluationResults[q.id] !== undefined;
            const isCorrect = evaluationResults[q.id] === true;
            const currentVal = studentInputs[q.id] || '';

            return (
              <div 
                key={q.id || idx} 
                className="editorial-card question-card" 
                style={{ 
                  padding: '1.5rem',
                  backgroundColor: '#FFFFFF'
                }}
              >
                {/* Question Card Meta */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ 
                      backgroundColor: 'var(--primary-navy)', 
                      color: '#FFFFFF', 
                      fontWeight: 800, 
                      fontSize: '0.825rem', 
                      padding: '0.2rem 0.6rem', 
                      borderRadius: '5px' 
                    }}>
                      Soal #{idx + 1}
                    </span>
                    <span className="badge badge-cat-pas" style={{ fontSize: '0.72rem' }}>
                      {q.difficulty || "Kompetisi"}
                    </span>
                    {q.source && (
                      <span className="badge badge-subtle" style={{ fontSize: '0.7rem' }}>
                        {q.source}
                      </span>
                    )}
                    <span className="badge badge-sd" style={{ fontSize: '0.68rem' }}>
                      {q.type === 'essay' ? 'Esai / Pembuktian' : 'Isian Singkat'}
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: '0.4rem' }}>
                    {q.hint && (
                      <button
                        className="btn btn-subtle"
                        style={{ padding: '0.25rem 0.6rem', fontSize: '0.75rem', color: '#B45309' }}
                        onClick={() => toggleHint(q.id)}
                      >
                        <Lightbulb size={13} color="#D97706" />
                        {isHintOpen ? "Tutup Petunjuk" : "Petunjuk"}
                      </button>
                    )}
                    <button
                      className="btn btn-subtle"
                      style={{ padding: '0.25rem 0.6rem', fontSize: '0.75rem', color: 'var(--primary-navy)' }}
                      onClick={() => toggleSolution(q.id)}
                    >
                      <BookOpen size={13} />
                      {isSolOpen ? "Tutup Pembahasan" : "Buka Pembahasan"}
                    </button>
                  </div>
                </div>

                {/* Hint Panel */}
                {isHintOpen && q.hint && (
                  <div style={{ backgroundColor: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: 'var(--radius-sm)', padding: '0.75rem 1rem', marginBottom: '1rem', fontSize: '0.85rem', color: '#92400E' }}>
                    <strong>Petunjuk Solusi:</strong> <MathText text={q.hint} />
                  </div>
                )}

                {/* Question Statement */}
                <div style={{ fontSize: '1.025rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '1.25rem', lineHeight: '1.7' }}>
                  <MathText text={q.question} />
                </div>

                {/* Question Visual if defined */}
                <QuestionVisual question={q} />

                {/* Question Interactive Response Form */}
                <div style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid #F1F5F9' }}>
                  {q.type === 'short_answer' ? (
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-navy)' }}>
                          Jawaban Anda:
                        </span>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="Masukkan angka jawaban..."
                          value={currentVal}
                          onChange={(e) => handleInputChange(q.id, e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleCheckAnswer(q);
                          }}
                          style={{
                            maxWidth: '240px',
                            fontWeight: 700,
                            fontSize: '0.95rem',
                            borderColor: isEvaluated ? (isCorrect ? 'var(--status-emerald)' : 'var(--status-brick)') : '#CBD5E1'
                          }}
                        />
                        <button
                          type="button"
                          className="btn btn-royal"
                          style={{ fontSize: '0.825rem', padding: '0.45rem 1rem' }}
                          onClick={() => handleCheckAnswer(q)}
                        >
                          Periksa Jawaban
                        </button>
                      </div>

                      {/* Immediate Feedback Badge */}
                      {isEvaluated && (
                        <div style={{ marginTop: '0.75rem' }}>
                          {isCorrect ? (
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: '#ECFDF5', border: '1px solid #10B981', color: '#065F46', padding: '0.4rem 0.85rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 700 }}>
                              <Check size={16} />
                              Jawaban Tepat! Nilai target: {q.answer}
                            </div>
                          ) : (
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: '#FEF2F2', border: '1px solid #EF4444', color: '#991B1B', padding: '0.4rem 0.85rem', borderRadius: '6px', fontSize: '0.85rem' }}>
                              <span>Kurang tepat. Cek kembali perhitungan Anda atau buka petunjuk di atas.</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    /* Essay / Proof Questions */
                    <div>
                      <div style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-navy)' }}>
                          Lembar Catatan / Langkah Bukti Anda:
                        </label>
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                          Bandingkan penurunan Anda dengan kunci pembahasan resmi
                        </span>
                      </div>
                      <textarea
                        className="form-input"
                        rows={3}
                        placeholder="Tuliskan ringkasan langkah pengerjaan atau coretan pembuktian Anda di sini..."
                        value={studentNotes[q.id] || ''}
                        onChange={(e) => setStudentNotes(prev => ({ ...prev, [q.id]: e.target.value }))}
                        style={{ fontSize: '0.875rem', lineHeight: '1.5', marginBottom: '0.75rem' }}
                      />
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <button
                          type="button"
                          className="btn btn-outline"
                          style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem' }}
                          onClick={() => toggleSolution(q.id)}
                        >
                          <FileText size={14} />
                          {isSolOpen ? "Sembunyikan Solusi Resmi" : "Cocokkan dengan Solusi Resmi"}
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Detailed Step-by-Step Solution */}
                {isSolOpen && (
                  <div style={{ 
                    marginTop: '1.25rem', 
                    padding: '1.25rem', 
                    backgroundColor: '#F8FAFC', 
                    borderRadius: 'var(--radius-sm)', 
                    borderLeft: '4px solid var(--primary-navy)',
                    borderTop: '1px solid #E2E8F0',
                    borderRight: '1px solid #E2E8F0',
                    borderBottom: '1px solid #E2E8F0'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
                      <strong style={{ color: 'var(--primary-navy)', fontSize: '0.925rem' }}>
                        Kunci & Langkah Solusi Terperinci:
                      </strong>
                      {q.answer && (
                        <span style={{ 
                          backgroundColor: '#EFF6FF', 
                          color: '#1E3A8A', 
                          fontWeight: 800, 
                          padding: '0.2rem 0.6rem', 
                          borderRadius: '4px', 
                          fontSize: '0.8rem', 
                          border: '1px solid #BFDBFE' 
                        }}>
                          Target Jawaban: {q.answer}
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: '0.925rem', color: '#334155', lineHeight: '1.7' }}>
                      <MathText text={q.bestSolution} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

AmcChapterView.evaluateAnswer = evaluateAmcAnswer;

export default AmcChapterView;
