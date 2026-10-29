import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Lightbulb, Edit3, Loader2, CheckCircle, XCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { MathText } from './MathRenderer';
import { QuestionVisual } from './QuestionVisual';
import { ScratchpadModal } from './ScratchpadModal';
import { getQuestById, formatIndonesianDate, getDraftResponses, saveDraftResponses, clearDraftResponses } from '../utils/storage';
import { getQuestByIdCloud, markQuestInProgressCloud, submitQuestAnswersCloud } from '../firebase/firestore';
import { getQuestionKind, scoreResponses, readAnswers, correctValue } from '../utils/answerCheck';
import { AnswerText } from './AnswerText';

function isFilled(value) {
  return value !== undefined && value !== null && String(value).trim() !== '';
}

/** Satu soal: pilihan ganda, isian singkat, atau uraian. */
function QuestionInput({ question, value, onChange }) {
  const kind = getQuestionKind(question);

  if (kind === 'mcq') {
    return (
      <div className="question-options-grid">
        {question.options.map((opt) => (
          <button
            key={opt.key}
            type="button"
            className={`option-btn ${value === opt.key ? 'selected' : ''}`}
            onClick={() => onChange(opt.key)}
          >
            <div className="option-circle">{opt.key}</div>
            <MathText text={opt.text} />
          </button>
        ))}
      </div>
    );
  }

  if (kind === 'essay') {
    return (
      <textarea
        className="form-select quest-answer-input"
        rows={5}
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Tulis jawaban dan langkah penyelesaianmu..."
      />
    );
  }

  return (
    <div>
      <input
        className="form-select quest-answer-input"
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Tulis jawaban akhir (contoh: 78 atau 3/4)"
        inputMode="text"
        autoComplete="off"
      />
      {question.type === 'essay' && (
        <p className="studio-muted">Kerjakan langkahnya di kertas atau papan coret, lalu tulis jawaban akhirnya di sini.</p>
      )}
    </div>
  );
}

/** Rekap hasil: nilai dan pembahasan per soal. */
function QuestResults({ quest, rows, score, correct, gradable, onBack, isPreview }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="quest-shell">
      <div className="editorial-card quest-result-head">
        <p className="studio-muted">{quest.chapterTitle || quest.title}</p>
        <div className="quest-score">{score}</div>
        <p>
          {gradable > 0 ? `${correct} dari ${gradable} soal benar.` : 'Jawaban sudah terkirim ke guru.'}
          {isPreview && ' (Mode pratinjau guru: hasil tidak disimpan.)'}
        </p>
        <button className="btn btn-outline" onClick={onBack}>Kembali ke beranda</button>
      </div>

      <ol className="quest-review-list">
        {quest.questions.map((q, i) => {
          const { response, isCorrect } = rows[i];
          const kind = getQuestionKind(q);
          const isOpen = openIndex === i;
          return (
            <li key={q.id || i} className="editorial-card quest-review-item">
              <div className="quest-review-top">
                {isCorrect === true && <CheckCircle size={18} className="quest-ok" />}
                {isCorrect === false && <XCircle size={18} className="quest-bad" />}
                <strong>Soal {i + 1}</strong>
              </div>
              <MathText text={q.question} />
              <p className="quest-review-answer">Jawabanmu: <AnswerText question={q} value={response} /></p>
              {isCorrect !== true && kind !== 'essay' && (
                <p className="quest-review-answer">Jawaban benar: <AnswerText question={q} value={correctValue(q)} /></p>
              )}
              {(q.bestSolution || q.explanation) && (
                <>
                  <button className="btn btn-subtle" onClick={() => setOpenIndex(isOpen ? null : i)}>
                    {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />} Pembahasan
                  </button>
                  {isOpen && (
                    <div className="quest-solution">
                      <MathText text={q.bestSolution || q.explanation} />
                    </div>
                  )}
                </>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/**
 * Pemutar PR murid: kerjakan semua soal, lalu kumpulkan sekali.
 * Jawaban sementara disimpan di perangkat agar tidak hilang saat halaman dimuat ulang.
 */
export function StudentQuestView({ questId: propQuestId = null, onBackToDashboard = null }) {
  const { questId: paramQuestId } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const questId = propQuestId || paramQuestId;
  const isPreview = searchParams.get('preview') === '1';
  const onBack = onBackToDashboard || (() => navigate('/'));

  const [quest, setQuest] = useState(() => getQuestById(questId));
  const [isLoading, setIsLoading] = useState(() => !getQuestById(questId) && Boolean(questId));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState(() => (questId ? getDraftResponses(questId) : {}));
  const [showHint, setShowHint] = useState(false);
  const [isScratchpadOpen, setIsScratchpadOpen] = useState(false);
  const [result, setResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const startedRef = useRef(false);

  const isCloudQuest = Boolean(quest?.id && !String(quest.id).startsWith('practice-') && quest.teacherId);

  // Ambil PR dari cloud bila belum ada di perangkat (murid membuka link dari WhatsApp)
  useEffect(() => {
    if (quest || !questId) return undefined;
    let active = true;
    getQuestByIdCloud(questId)
      .then((cloudQuest) => { if (active && cloudQuest) setQuest(cloudQuest); })
      .finally(() => { if (active) setIsLoading(false); });
    return () => { active = false; };
  }, [questId, quest]);

  // PR yang sudah dikumpulkan langsung menampilkan hasil (bukan dikerjakan ulang)
  const submittedRows = useMemo(() => {
    if (!quest || isPreview || quest.status !== 'completed' || !quest.answers) return null;
    return readAnswers(quest);
  }, [quest, isPreview]);

  if (isLoading) {
    return (
      <div className="quest-shell quest-center">
        <Loader2 size={28} className="spin-animation" />
        <p className="studio-muted">Memuat PR...</p>
      </div>
    );
  }

  if (!quest || !quest.questions?.length) {
    return (
      <div className="quest-shell quest-center">
        <div className="editorial-card studio-card">
          <h2>PR tidak ditemukan</h2>
          <p className="studio-muted">Link ini mungkin sudah dihapus guru atau salah ketik. Minta link baru ke guru ya.</p>
          <button className="btn btn-royal" onClick={onBack}>Ke beranda</button>
        </div>
      </div>
    );
  }

  if (result) {
    return <QuestResults quest={quest} {...result} onBack={onBack} isPreview={isPreview} />;
  }

  if (submittedRows) {
    const correct = submittedRows.filter((r) => r.isCorrect === true).length;
    const gradable = submittedRows.filter((r) => r.isCorrect !== null).length;
    return (
      <QuestResults
        quest={quest}
        rows={submittedRows}
        score={quest.lastScore ?? 0}
        correct={correct}
        gradable={gradable}
        onBack={onBack}
        isPreview={false}
      />
    );
  }

  const total = quest.questions.length;
  const question = quest.questions[currentIndex];
  const answeredCount = quest.questions.filter((_, i) => isFilled(responses[i])).length;

  const setResponse = (value) => {
    const next = { ...responses, [currentIndex]: value };
    setResponses(next);
    if (!isPreview) saveDraftResponses(questId, next);
    if (!startedRef.current && isCloudQuest && !isPreview && quest.status === 'assigned') {
      startedRef.current = true;
      markQuestInProgressCloud(quest.id);
    }
  };

  const goTo = (index) => {
    setCurrentIndex(index);
    setShowHint(false);
  };

  const handleSubmit = async () => {
    const empty = total - answeredCount;
    if (empty > 0 && !window.confirm(`Masih ada ${empty} soal kosong. Tetap kumpulkan?`)) return;

    const { correct, gradable, score, results } = scoreResponses(quest.questions, responses);
    const rows = quest.questions.map((_, i) => ({ response: responses[i] ?? '', isCorrect: results[i] }));

    if (isCloudQuest && !isPreview) {
      setIsSubmitting(true);
      setSubmitError('');
      try {
        await submitQuestAnswersCloud(quest.id, { score, answers: { responses, results, correct, gradable } });
        clearDraftResponses(questId);
      } catch {
        setSubmitError('Gagal mengirim jawaban. Periksa internet lalu tekan Kumpulkan lagi — jawabanmu tidak hilang.');
        setIsSubmitting(false);
        return;
      }
      setIsSubmitting(false);
    }
    setResult({ rows, score, correct, gradable });
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="quest-shell">
      {isPreview && <div className="studio-banner-info">Mode pratinjau guru — jawaban tidak dikirim.</div>}

      <header className="quest-head">
        <div>
          <h1 className="quest-title">{quest.chapterTitle || quest.title}</h1>
          <p className="studio-muted">
            {quest.studentName ? `Untuk ${quest.studentName}` : 'Latihan mandiri'}
            {quest.deadline ? ` · tenggat ${formatIndonesianDate(quest.deadline)}` : ''}
          </p>
        </div>
        <span className="quest-counter">{answeredCount}/{total} dijawab</span>
      </header>

      <nav className="quest-nav" aria-label="Nomor soal">
        {quest.questions.map((_, i) => (
          <button
            key={i}
            className={`quest-nav-btn ${i === currentIndex ? 'is-current' : ''} ${isFilled(responses[i]) ? 'is-answered' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Soal ${i + 1}`}
          >
            {i + 1}
          </button>
        ))}
      </nav>

      <article className="editorial-card question-card quest-card">
        <div className="quest-card-top">
          <strong>Soal {currentIndex + 1}</strong>
          {question.difficulty && <span className="badge">{question.difficulty}</span>}
        </div>
        <MathText text={question.question} className="quest-question" />
        <QuestionVisual question={question} />
        <QuestionInput question={question} value={responses[currentIndex]} onChange={setResponse} />

        <div className="studio-actions studio-actions-compact">
          {question.hint && (
            <button className="btn btn-subtle" onClick={() => setShowHint((v) => !v)}>
              <Lightbulb size={14} /> {showHint ? 'Tutup petunjuk' : 'Petunjuk'}
            </button>
          )}
          <button className="btn btn-subtle" onClick={() => setIsScratchpadOpen(true)}>
            <Edit3 size={14} /> Papan coret
          </button>
        </div>
        {showHint && <div className="quest-hint"><MathText text={question.hint} /></div>}
      </article>

      <div className="quest-footer">
        <button className="btn btn-outline" onClick={() => goTo(currentIndex - 1)} disabled={currentIndex === 0}>
          <ArrowLeft size={15} /> Sebelumnya
        </button>
        {currentIndex < total - 1 ? (
          <button className="btn btn-royal" onClick={() => goTo(currentIndex + 1)}>
            Berikutnya <ArrowRight size={15} />
          </button>
        ) : (
          <button className="btn btn-emerald" onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? 'Mengirim...' : 'Kumpulkan'}
          </button>
        )}
      </div>
      {submitError && <p className="studio-error">{submitError}</p>}

      <ScratchpadModal isOpen={isScratchpadOpen} onClose={() => setIsScratchpadOpen(false)} />
    </div>
  );
}

export default StudentQuestView;
