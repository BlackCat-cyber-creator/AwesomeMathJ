import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { 
  PenTool, 
  Lightbulb, 
  CheckCircle2, 
  RotateCcw, 
  Printer, 
  Check,
  Zap
} from 'lucide-react';
import { MathText } from '../MathRenderer';
import { QuestionVisual } from '../QuestionVisual';

export function ChapterQuiz({
  questions = [],
  chapterTitle,
  grade,
  isLoadingQuestions = false,
  onLaunchPractice: _onLaunchPractice,
  onPrintQuest
}) {
  const [selectedPacketFilter, setSelectedPacketFilter] = useState('ALL');
  const [selectedAnswers, setSelectedAnswers] = useState({}); // { [qId]: optionKey }
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);
  const [revealedSolutions, setRevealedSolutions] = useState({});
  const [revealedHints, setRevealedHints] = useState({});

  // Reset quiz answers when packet filter or questions change
  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setIsQuizSubmitted(false);
    setRevealedSolutions({});
    setRevealedHints({});
  };

  const handleSelectOption = (qId, optionKey) => {
    if (isQuizSubmitted) return; // Locked once evaluated
    setSelectedAnswers(prev => ({
      ...prev,
      [qId]: optionKey
    }));
  };

  const toggleHint = (qId) => {
    setRevealedHints(prev => ({
      ...prev,
      [qId]: !prev[qId]
    }));
  };

  const toggleSolution = (qId) => {
    setRevealedSolutions(prev => ({
      ...prev,
      [qId]: !prev[qId]
    }));
  };

  // Filtered questions based on packet
  const filteredQuestions = useMemo(() => {
    if (selectedPacketFilter === 'ALL') return questions;
    const pIndex = Number(selectedPacketFilter);
    return questions.slice((pIndex - 1) * 5, pIndex * 5);
  }, [questions, selectedPacketFilter]);

  // Scoring calculation
  const scoreStats = useMemo(() => {
    if (!isQuizSubmitted) return null;
    let correct = 0;
    const answeredCount = Object.keys(selectedAnswers).length;
    filteredQuestions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    const total = filteredQuestions.length;
    const score = total > 0 ? Math.round((correct / total) * 100) : 0;
    return { correct, total, answeredCount, score };
  }, [isQuizSubmitted, selectedAnswers, filteredQuestions]);

  // Submit Quiz
  const handleSubmitQuiz = () => {
    setIsQuizSubmitted(true);
    // Reveal all solutions for review
    const allRevealed = {};
    filteredQuestions.forEach(q => {
      allRevealed[q.id] = true;
    });
    setRevealedSolutions(allRevealed);

    // Confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {}
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      {/* Header */}
      <div style={{ marginBottom: '0.85rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
        <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-navy)', display: 'flex', alignItems: 'center', gap: '0.45rem', margin: 0 }}>
          <PenTool size={18} color="var(--primary-blue)" />
          Latihan Soal & Pemahaman Konsep
        </h3>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          {questions.length} Soal Lengkap (4 Paket)
        </span>
      </div>

      {/* Packet Filter Tabs */}
      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
        <button
          type="button"
          id="filter-packet-all"
          className={`btn ${selectedPacketFilter === 'ALL' ? 'btn-royal' : 'btn-outline'}`}
          style={{ fontSize: '0.78rem', padding: '0.35rem 0.75rem' }}
          onClick={() => { setSelectedPacketFilter('ALL'); handleResetQuiz(); }}
        >
          Semua ({questions.length} Soal)
        </button>
        <button
          type="button"
          id="filter-packet-1"
          className={`btn ${selectedPacketFilter === 1 ? 'btn-royal' : 'btn-outline'}`}
          style={{ fontSize: '0.78rem', padding: '0.35rem 0.75rem' }}
          onClick={() => { setSelectedPacketFilter(1); handleResetQuiz(); }}
        >
          Paket 1 (Soal 1–5: Dasar)
        </button>
        <button
          type="button"
          id="filter-packet-2"
          className={`btn ${selectedPacketFilter === 2 ? 'btn-royal' : 'btn-outline'}`}
          style={{ fontSize: '0.78rem', padding: '0.35rem 0.75rem' }}
          onClick={() => { setSelectedPacketFilter(2); handleResetQuiz(); }}
        >
          Paket 2 (Soal 6–10: Sedang)
        </button>
        <button
          type="button"
          id="filter-packet-3"
          className={`btn ${selectedPacketFilter === 3 ? 'btn-royal' : 'btn-outline'}`}
          style={{ fontSize: '0.78rem', padding: '0.35rem 0.75rem' }}
          onClick={() => { setSelectedPacketFilter(3); handleResetQuiz(); }}
        >
          Paket 3 (Soal 11–15: Terapan)
        </button>
        <button
          type="button"
          id="filter-packet-4"
          className={`btn ${selectedPacketFilter === 4 ? 'btn-royal' : 'btn-outline'}`}
          style={{ fontSize: '0.78rem', padding: '0.35rem 0.75rem' }}
          onClick={() => { setSelectedPacketFilter(4); handleResetQuiz(); }}
        >
          Paket 4 (Soal 16–20: Tantangan)
        </button>
      </div>

      {/* Score Result Card (if submitted) */}
      {isQuizSubmitted && scoreStats && (
        <div className="editorial-card" style={{ padding: '1.5rem', marginBottom: '1.5rem', backgroundColor: '#F0FDF4', border: '1px solid #BBF7D0', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <CheckCircle2 size={24} color="var(--status-emerald)" />
            <h4 style={{ fontSize: '1.25rem', color: '#166534', margin: 0 }}>
              Hasil Evaluasi Latihan Mandiri
            </h4>
          </div>
          <div style={{ fontSize: '2.5rem', fontWeight: 900, color: scoreStats.score >= 70 ? 'var(--status-emerald)' : 'var(--status-brick)', margin: '0.25rem 0' }}>
            {scoreStats.score}/100
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: '0 0 1rem' }}>
            Benar <strong>{scoreStats.correct}</strong> dari <strong>{scoreStats.total}</strong> butir soal ({scoreStats.answeredCount} soal terjawab).
          </p>
          <button 
            className="btn btn-royal" 
            style={{ fontSize: '0.85rem' }}
            onClick={handleResetQuiz}
          >
            <RotateCcw size={15} />
            Ulangi Latihan
          </button>
        </div>
      )}

      {/* Questions List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {filteredQuestions.length === 0 ? (
          <div className="editorial-card" style={{ padding: '3rem 2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
            {isLoadingQuestions ? "Memuat soal latihan..." : "Belum ada soal untuk paket ini."}
          </div>
        ) : (
          filteredQuestions.map((q, idx) => {
            const originalIndex = questions.findIndex(item => item.id === q.id);
            const qNum = originalIndex !== -1 ? originalIndex + 1 : idx + 1;
            const isSelected = selectedAnswers[q.id];
            const isHintOpen = revealedHints[q.id];
            const isSolOpen = revealedSolutions[q.id];

            return (
              <div key={q.id} className="editorial-card question-card" style={{ padding: '1.5rem' }}>
                {/* Top Question Info */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className="badge badge-subtle" style={{ fontSize: '0.72rem' }}>
                      Soal #{qNum}
                    </span>
                    <span className="badge badge-sd" style={{ fontSize: '0.68rem' }}>
                      {q.difficulty || "Standar"}
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: '0.4rem' }}>
                    {q.hint && (
                      <button
                        className="btn btn-subtle"
                        style={{ padding: '0.25rem 0.55rem', fontSize: '0.75rem' }}
                        onClick={() => toggleHint(q.id)}
                      >
                        <Lightbulb size={13} color="#D97706" />
                        {isHintOpen ? "Tutup Petunjuk" : "Petunjuk"}
                      </button>
                    )}
                    {isQuizSubmitted && (
                      <button
                        className="btn btn-subtle"
                        style={{ padding: '0.25rem 0.55rem', fontSize: '0.75rem' }}
                        onClick={() => toggleSolution(q.id)}
                      >
                        {isSolOpen ? "Tutup Pembahasan" : "Buka Pembahasan"}
                      </button>
                    )}
                  </div>
                </div>

                {/* Hint Card */}
                {isHintOpen && q.hint && (
                  <div style={{ backgroundColor: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: 'var(--radius-sm)', padding: '0.75rem', marginBottom: '0.85rem', fontSize: '0.825rem', color: '#92400E' }}>
                    <strong>Petunjuk:</strong> <MathText text={q.hint} />
                  </div>
                )}

                {/* Question Text */}
                <div style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: '1.65' }}>
                  <MathText text={q.question} />
                </div>

                {/* Question Visual if present */}
                <QuestionVisual question={q} />

                {/* Options List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '0.75rem' }}>
                  {q.options.map((opt) => {
                    const isChosen = isSelected === opt.key;
                    let btnClass = "option-btn";

                    if (isChosen) btnClass += " selected";

                    if (isQuizSubmitted) {
                      if (opt.key === q.correctAnswer) {
                        btnClass += " correct";
                      } else if (isChosen && opt.key !== q.correctAnswer) {
                        btnClass += " incorrect";
                      }
                    }

                    return (
                      <button
                        key={opt.key}
                        id={`btn-option-${q.id}-${opt.key}`}
                        disabled={isQuizSubmitted}
                        className={btnClass}
                        onClick={() => handleSelectOption(q.id, opt.key)}
                      >
                        <div className="option-circle">
                          {opt.key}
                        </div>
                        <div style={{ flex: 1, textAlign: 'left' }}>
                          <MathText text={opt.text} />
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Solution Box (when revealed) */}
                {isSolOpen && (
                  <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#F8FAFC', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', fontSize: '0.88rem' }}>
                    <div style={{ fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Check size={15} color="var(--status-emerald)" />
                      Kunci Jawaban: {q.correctAnswer}
                    </div>
                    <div style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      <MathText text={(q.bestSolution || q.conceptualSolution || q.explanation || "Pembahasan terstruktur.").replace(/\*\*Metode Simpel & Efektif Sir Jevon:\*\*/gi, "**Langkah Penyelesaian Terstruktur:**")} />
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Quiz Evaluation Action Bar */}
      {filteredQuestions.length > 0 && (
        <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          {!isQuizSubmitted ? (
            <button
              id="btn-evaluate-public-quiz"
              className="btn btn-royal"
              style={{ padding: '0.75rem 1.75rem', fontSize: '0.95rem' }}
              onClick={handleSubmitQuiz}
              disabled={Object.keys(selectedAnswers).length === 0}
            >
              <Zap size={17} />
              Periksa Jawaban ({Object.keys(selectedAnswers).length}/{filteredQuestions.length})
            </button>
          ) : (
            <button
              id="btn-retry-public-quiz"
              className="btn btn-royal"
              style={{ padding: '0.75rem 1.75rem', fontSize: '0.95rem' }}
              onClick={handleResetQuiz}
            >
              <RotateCcw size={17} />
              Ulangi Latihan
            </button>
          )}

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              className="btn btn-outline"
              style={{ fontSize: '0.825rem' }}
              onClick={() => onPrintQuest({
                title: `Latihan Soal: ${chapterTitle}`,
                grade,
                chapterTitle,
                questions: filteredQuestions
              })}
            >
              <Printer size={15} />
              Cetak LKPD A4
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChapterQuiz;
