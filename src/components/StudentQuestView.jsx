import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { MathText } from './MathRenderer';
import { QuestionVisual } from './QuestionVisual';
import { ScratchpadModal } from './ScratchpadModal';
import { getQuestById, submitQuestResult, updateQuestStatus, formatIndonesianDate } from '../utils/storage';
import { getQuestByIdCloud, submitQuestResultCloud, updateQuestStatusCloud } from '../firebase/firestore';
import { 
  Flame, 
  CheckCircle, 
  XCircle, 
  ArrowRight, 
  Trophy, 
  ArrowLeft,
  Lightbulb,
  Edit3,
  Check,
  Calendar,
  BookOpen,
  Loader2
} from 'lucide-react';

export function StudentQuestView({ questId: propQuestId = null, onBackToDashboard = null }) {
  const { questId: paramQuestId } = useParams();
  const navigate = useNavigate();
  const questId = propQuestId || paramQuestId;
  const onBack = onBackToDashboard || (() => navigate('/'));

  const [quest, setQuest] = useState(() => {
    if (!questId) return null;
    const fromStorage = getQuestById(questId);
    if (fromStorage) return fromStorage;
    try {
      const fromPractice = localStorage.getItem(`mathquest_practice_${questId}`);
      if (fromPractice) return JSON.parse(fromPractice);
    } catch {}
    return null;
  });
  const [isLoadingQuest, setIsLoadingQuest] = useState(() => !quest && !!questId);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [answersState, setAnswersState] = useState({}); // { [qIndex]: { selected, isCorrect } }
  const [isFinished, setIsFinished] = useState(false);
  const [earnedXp, setEarnedXp] = useState(0);
  const [isScratchpadOpen, setIsScratchpadOpen] = useState(false);

  // Ambil data quest dari Firestore jika tidak ada di cache lokal (misal murid buka link di HP)
  useEffect(() => {
    let isMounted = true;
    if (!quest && questId) {
      getQuestByIdCloud(questId)
        .then((cloudQuest) => {
          if (isMounted && cloudQuest) {
            setQuest(cloudQuest);
          }
        })
        .catch((err) => {
          console.error("Gagal mengambil quest dari cloud:", err);
        })
        .finally(() => {
          if (isMounted) setIsLoadingQuest(false);
        });
    }
    return () => { isMounted = false; };
  }, [questId, quest]);

  if (isLoadingQuest) {
    return (
      <div style={{ maxWidth: 640, margin: '5rem auto', textAlign: 'center', padding: '2rem' }}>
        <div className="editorial-card" style={{ padding: '3.5rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{
            width: 54,
            height: 54,
            borderRadius: '50%',
            backgroundColor: 'var(--primary-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem',
            color: 'var(--primary-navy)'
          }}>
            <Loader2 size={28} className="spin-animation" />
          </div>
          <h3 style={{ color: 'var(--primary-navy)', marginBottom: '0.4rem' }}>Memuat Soal Latihan...</h3>
          <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>
            Mengambil penugasan materi langsung dari cloud AwesomeMathJ.
          </p>
        </div>
      </div>
    );
  }

  if (!quest) {
    return (
      <div style={{ maxWidth: 640, margin: '4rem auto', textAlign: 'center', padding: '2rem' }}>
        <div className="editorial-card" style={{ padding: '3rem 2rem' }}>
          <h2>Paket Latihan Tidak Ditemukan</h2>
          <p style={{ color: 'var(--text-secondary)', margin: '1rem 0 1.5rem' }}>
            Tautan latihan ini mungkin sudah selesai atau belum diaktifkan oleh pengajar.
          </p>
          <button id="btn-back-from-not-found" className="btn btn-royal" onClick={onBack}>
            Kembali ke Beranda AwesomeMathJ
          </button>
        </div>
      </div>
    );
  }

  const currentQ = quest.questions[currentIndex];
  const isLastQuestion = currentIndex === quest.questions.length - 1;

  // Handle Check Answer
  const handleCheckAnswer = () => {
    if (!selectedOption) return;

    const isCorrect = selectedOption === currentQ.correctAnswer;
    setIsAnswerChecked(true);

    // Update quest status to in_progress in storage & Firestore
    if (quest.id && !quest.id.startsWith("practice-")) {
      updateQuestStatus(quest.id, "in_progress");
      updateQuestStatusCloud(quest.id, "in_progress").catch(() => {});
    }

    setAnswersState((prev) => ({
      ...prev,
      [currentIndex]: {
        selected: selectedOption,
        isCorrect
      }
    }));
  };

  // Handle Next Question
  const handleNext = () => {
    if (isLastQuestion) {
      // Calculate final score
      let correctCount = 0;
      Object.keys(answersState).forEach((idxKey) => {
        if (answersState[idxKey].isCorrect) correctCount++;
      });
      if (selectedOption === currentQ.correctAnswer) correctCount++;

      const finalScore = Math.round((correctCount / quest.questions.length) * 100);
      const xp = correctCount * 30 + 20; // XP calculation
      setEarnedXp(xp);

      // Trigger Confetti!
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // graceful fallback
      }

      // Save submission to local storage & Firestore cloud
      if (quest.id && !quest.id.startsWith("practice-")) {
        const subData = {
          questId: quest.id,
          teacherId: quest.teacherId || null,
          studentId: quest.studentId,
          studentName: quest.studentName,
          score: finalScore,
          earnedXp: xp,
          totalQuestions: quest.questions.length,
          correctCount,
          answersState: {
            ...answersState,
            [currentIndex]: {
              selected: selectedOption,
              isCorrect: selectedOption === currentQ.correctAnswer
            }
          }
        };

        // Simpan lokal
        submitQuestResult(subData);
        // Simpan cloud
        submitQuestResultCloud(subData).catch((err) => {
          console.warn("Gagal menyimpan hasil ke cloud:", err);
        });
      }

      setIsFinished(true);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerChecked(false);
      setShowHint(false);
    }
  };

  // If Completed Screen
  if (isFinished) {
    let correctCount = 0;
    Object.keys(answersState).forEach((k) => {
      if (answersState[k].isCorrect) correctCount++;
    });
    const finalScore = Math.round((correctCount / quest.questions.length) * 100);

    return (
      <div style={{ maxWidth: 760, margin: '2rem auto', padding: '1rem' }}>
        <div className="editorial-card" style={{ padding: '2.5rem 2rem', textAlign: 'center' }}>
          {/* Trophy Header */}
          <div style={{
            width: 72,
            height: 72,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #1E3A8A, #2563EB)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.25rem',
            boxShadow: 'var(--shadow-card)'
          }}>
            <Trophy size={36} color="#FFFFFF" />
          </div>

          <h2 style={{ fontSize: '1.75rem', marginBottom: '0.4rem', color: 'var(--primary-navy)' }}>
            Latihan Selesai! 🎉
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '1.75rem' }}>
            Kerja bagus, <strong>{quest.studentName}</strong>! Hasil pengerjaanmu otomatis tersimpan untuk dievaluasi oleh pengajar.
          </p>

          {/* Score & Streak Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            <div className="editorial-card" style={{ padding: '1.25rem', backgroundColor: '#F9FAFB' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.04em' }}>NILAI AKHIR</div>
              <div style={{ fontSize: '2.25rem', fontWeight: 800, color: finalScore >= 70 ? 'var(--status-emerald)' : 'var(--accent-amber)', margin: '0.2rem 0' }}>
                {finalScore}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                {correctCount} dari {quest.questions.length} Soal Benar
              </div>
            </div>

            <div className="editorial-card" style={{ padding: '1.25rem', backgroundColor: '#F9FAFB' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.04em' }}>TOTAL XP DIRAIH</div>
              <div style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--primary-blue)', margin: '0.2rem 0' }}>
                +{earnedXp} XP
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                Bonus Latihan Mandiri ⚡
              </div>
            </div>

            <div className="editorial-card" style={{ padding: '1.25rem', backgroundColor: '#FFFBEB', borderColor: '#FDE68A' }}>
              <div style={{ fontSize: '0.75rem', color: '#92400E', fontWeight: 700, letterSpacing: '0.04em' }}>STREAK BELAJAR</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#B45309', margin: '0.35rem 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem' }}>
                <Flame size={24} className="flame-animated" />
                Aktif!
              </div>
              <div style={{ fontSize: '0.8rem', color: '#92400E' }}>
                Pertahankan ritme harianmu! 🔥
              </div>
            </div>
          </div>

          {/* Review of all questions with Sir Jevon's best method */}
          <div style={{ textAlign: 'left', marginTop: '2rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem' }}>
            <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', color: 'var(--primary-navy)' }}>
              Langkah Penyelesaian Terstruktur & Pembahasan:
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {quest.questions.map((q, qIdx) => {
                const ans = answersState[qIdx];
                const isCorrect = ans?.isCorrect;

                return (
                  <div 
                    key={q.id || qIdx} 
                    className="editorial-card"
                    style={{ 
                      padding: '1.25rem',
                      borderLeft: isCorrect ? '4px solid var(--status-emerald)' : '4px solid var(--status-brick)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.4rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                        {isCorrect ? (
                          <CheckCircle size={18} color="var(--status-emerald)" />
                        ) : (
                          <XCircle size={18} color="var(--status-brick)" />
                        )}
                        <strong style={{ fontSize: '0.925rem', color: isCorrect ? 'var(--status-emerald)' : 'var(--status-brick)' }}>
                          Soal #{qIdx + 1}: {isCorrect ? "Jawaban Benar" : `Koreksi (Kunci: ${q.correctAnswer})`}
                        </strong>
                      </div>
                    </div>

                    <div style={{ margin: '0.65rem 0 1rem', fontSize: '0.975rem' }}>
                      <MathText text={q.question} />
                    </div>

                    <QuestionVisual question={q} />

                    {/* Single Best Method Box */}
                    <div style={{ backgroundColor: '#F8FAFC', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '0.35rem' }}>
                        💡 Langkah Penyelesaian:
                      </div>
                      <MathText text={(q.bestSolution || q.conceptualSolution || q.explanation || "").replace(/\*\*Metode Simpel & Efektif Sir Jevon:\*\*/gi, "**Langkah Penyelesaian Terstruktur:**")} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Return Button */}
          <div style={{ marginTop: '2.25rem' }}>
            <button 
              id="btn-finish-return-to-studio"
              className="btn btn-royal" 
              style={{ width: '100%', padding: '0.85rem', justifyContent: 'center' }}
              onClick={onBackToDashboard}
            >
              <BookOpen size={16} />
              Kembali ke Beranda AwesomeMathJ
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 760, margin: '1rem auto 4rem', padding: '0 1rem' }}>
      {/* Top Header Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <button 
          id="btn-student-exit-to-studio"
          className="btn btn-outline" 
          style={{ padding: '0.45rem 0.85rem', fontSize: '0.85rem' }}
          onClick={onBackToDashboard}
        >
          <ArrowLeft size={16} />
          Kembali ke Beranda
        </button>

        {/* Scratchpad Trigger Button */}
        <button
          id="btn-open-scratchpad"
          className="btn btn-subtle"
          style={{ padding: '0.45rem 0.95rem', fontSize: '0.85rem', color: 'var(--primary-navy)', border: '1px solid var(--border-medium)' }}
          onClick={() => setIsScratchpadOpen(true)}
        >
          <Edit3 size={16} />
          Buka Papan Cakar (Digital Scratchpad)
        </button>
      </div>

      {/* Quest Meta Card */}
      <div className="editorial-card" style={{ padding: '1.25rem 1.5rem', marginBottom: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', borderLeft: '4px solid var(--primary-navy)' }}>
        <div>
          <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center', marginBottom: '0.25rem' }}>
            <span className="badge badge-sd" style={{ fontSize: '0.7rem' }}>Kelas {quest.grade}</span>
            {quest.trackLabel && (
              <span className="badge badge-cat-pas" style={{ fontSize: '0.7rem' }}>{quest.trackLabel}</span>
            )}
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>AwesomeMathJ</span>
          </div>
          <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-navy)' }}>{quest.chapterTitle}</h3>
        </div>

        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Nama Murid:</span>
          <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{quest.studentName}</div>
          {quest.deadline && (
            <div style={{ fontSize: '0.75rem', color: 'var(--status-brick)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem', justifyContent: 'flex-end', marginTop: '0.2rem' }}>
              <Calendar size={12} />
              Tenggat: {formatIndonesianDate(quest.deadline)}
            </div>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.825rem', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
          <span>Soal {currentIndex + 1} dari {quest.questions.length}</span>
          <span>{Math.round(((currentIndex + 1) / quest.questions.length) * 100)}% Selesai</span>
        </div>
        <div style={{ width: '100%', height: '6px', backgroundColor: '#E5E7EB', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
          <div 
            style={{ 
              width: `${((currentIndex + 1) / quest.questions.length) * 100}%`, 
              height: '100%', 
              backgroundColor: 'var(--primary-blue)',
              transition: 'width 0.3s ease'
            }} 
          />
        </div>
      </div>

      {/* Main Question Card */}
      <div className="editorial-card" style={{ padding: '2rem 1.75rem', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>

          {/* Hint Button */}
          {currentQ.hint && (
            <button 
              id="btn-toggle-hint"
              className="btn btn-outline" 
              style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem', color: 'var(--accent-amber)', borderColor: '#FDE68A' }}
              onClick={() => setShowHint(!showHint)}
            >
              <Lightbulb size={15} />
              {showHint ? "Tutup Petunjuk" : "Petunjuk Rumus"}
            </button>
          )}
        </div>

        {/* Question Text */}
        <div style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '1.25rem', lineHeight: '1.75' }}>
          <MathText text={currentQ.question} />
        </div>

        {/* Visual Diagram if relevant */}
        <QuestionVisual question={currentQ} />

        {/* Hint Box (if toggled) */}
        {showHint && currentQ.hint && (
          <div style={{ 
            backgroundColor: 'var(--accent-amber-light)', 
            border: '1px solid var(--accent-amber-border)', 
            padding: '0.85rem 1.1rem', 
            borderRadius: 'var(--radius-sm)', 
            marginBottom: '1.5rem', 
            display: 'flex', 
            gap: '0.6rem', 
            alignItems: 'flex-start' 
          }}>
            <Lightbulb size={18} color="var(--accent-amber)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div style={{ fontSize: '0.875rem', color: '#92400E' }}>
              <strong>Petunjuk Pengerjaan:</strong> <MathText text={currentQ.hint} />
            </div>
          </div>
        )}

        {/* Options List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {currentQ.options.map((opt) => {
            const isSelected = selectedOption === opt.key;
            let btnClass = "option-btn";

            if (isSelected) btnClass += " selected";

            if (isAnswerChecked) {
              if (opt.key === currentQ.correctAnswer) {
                btnClass += " correct";
              } else if (isSelected && opt.key !== currentQ.correctAnswer) {
                btnClass += " incorrect";
              }
            }

            return (
              <button
                key={opt.key}
                id={`btn-option-${opt.key}`}
                disabled={isAnswerChecked}
                className={btnClass}
                onClick={() => setSelectedOption(opt.key)}
              >
                <div className="option-circle">
                  {opt.key}
                </div>
                <div style={{ flex: 1 }}>
                  <MathText text={opt.text} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Single Best Solution Feedback (When checked) */}
        {isAnswerChecked && (
          <div style={{ marginTop: '1.75rem' }}>
            {/* Answer Status Box */}
            <div style={{ 
              padding: '1rem 1.25rem', 
              borderRadius: 'var(--radius-sm)', 
              backgroundColor: selectedOption === currentQ.correctAnswer ? 'var(--status-emerald-light)' : 'var(--status-brick-light)',
              border: selectedOption === currentQ.correctAnswer ? '1px solid var(--status-emerald-border)' : '1px solid var(--status-brick-border)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              marginBottom: '1rem'
            }}>
              {selectedOption === currentQ.correctAnswer ? (
                <>
                  <CheckCircle size={20} color="var(--status-emerald)" />
                  <strong style={{ color: 'var(--status-emerald)', fontSize: '0.95rem' }}>
                    Jawabanmu Benar! Kerja bagus! 🌟
                  </strong>
                </>
              ) : (
                <>
                  <XCircle size={20} color="var(--status-brick)" />
                  <strong style={{ color: 'var(--status-brick)', fontSize: '0.95rem' }}>
                    Kurang Tepat. Kunci Jawaban yang Benar: {currentQ.correctAnswer}
                  </strong>
                </>
              )}
            </div>

            {/* Single Best Method Box */}
            <div style={{ backgroundColor: '#F8FAFC', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Check size={16} color="var(--status-emerald)" />
                Langkah Penyelesaian Terstruktur:
              </div>
              <div style={{ fontSize: '0.925rem', lineHeight: '1.7' }}>
                <MathText text={(currentQ.bestSolution || currentQ.conceptualSolution || currentQ.explanation || "").replace(/\*\*Metode Simpel & Efektif Sir Jevon:\*\*/gi, "**Langkah Penyelesaian Terstruktur:**")} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <button
          className="btn btn-outline"
          onClick={() => setIsScratchpadOpen(true)}
          style={{ fontSize: '0.9rem' }}
        >
          <Edit3 size={16} />
          Buka Papan Cakar
        </button>

        {!isAnswerChecked ? (
          <button
            id="btn-check-student-answer"
            className="btn btn-royal"
            style={{ padding: '0.85rem 2.25rem', fontSize: '1rem' }}
            disabled={!selectedOption}
            onClick={handleCheckAnswer}
          >
            Periksa Jawaban
          </button>
        ) : (
          <button
            id="btn-next-student-question"
            className="btn btn-emerald"
            style={{ padding: '0.85rem 2.25rem', fontSize: '1rem' }}
            onClick={handleNext}
          >
            {isLastQuestion ? "Selesaikan Latihan 🎉" : "Soal Berikutnya"}
            <ArrowRight size={18} />
          </button>
        )}
      </div>

      {/* Scratchpad Interactive Modal */}
      <ScratchpadModal 
        isOpen={isScratchpadOpen} 
        onClose={() => setIsScratchpadOpen(false)} 
      />
    </div>
  );
}

export default StudentQuestView;
