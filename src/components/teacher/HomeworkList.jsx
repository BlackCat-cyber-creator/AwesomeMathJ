import React, { useState } from 'react';
import { Send, Printer, Trash2, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { MathText } from '../MathRenderer';
import { readAnswers, correctValue } from '../../utils/answerCheck';
import { AnswerText } from '../AnswerText';
import { formatIndonesianDate } from '../../utils/storage';

const STATUS = {
  assigned: { label: 'Belum dikerjakan', className: 'studio-status-pending' },
  in_progress: { label: 'Sedang dikerjakan', className: 'studio-status-progress' },
  completed: { label: 'Selesai', className: 'studio-status-done' }
};

function AnswerReview({ quest }) {
  const rows = readAnswers(quest);
  return (
    <ol className="studio-review">
      {quest.questions.map((q, i) => {
        const { response, isCorrect } = rows[i];
        const mark = isCorrect === true ? '✓' : isCorrect === false ? '✗' : '•';
        const cls = isCorrect === true ? 'is-correct' : isCorrect === false ? 'is-wrong' : '';
        return (
          <li key={q.id || i} className={`studio-review-item ${cls}`}>
            <span className="studio-review-mark">{mark}</span>
            <div className="studio-review-body">
              <MathText text={q.question} className="studio-review-question" />
              <div className="studio-review-answers">
                <span>Jawaban murid: <AnswerText question={q} value={response} /></span>
                {isCorrect !== true && <span>Kunci: <AnswerText question={q} value={correctValue(q)} /></span>}
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

/**
 * Riwayat PR seorang murid: status, nilai, dan jawaban per soal.
 */
export function HomeworkList({ quests, onShareWhatsApp, onPrint, onOpen, onDelete }) {
  const [openId, setOpenId] = useState(null);

  if (quests.length === 0) {
    return (
      <section className="editorial-card studio-card">
        <h3 className="studio-card-title">Riwayat PR</h3>
        <p className="studio-muted">Belum ada PR untuk murid ini.</p>
      </section>
    );
  }

  return (
    <section className="editorial-card studio-card">
      <h3 className="studio-card-title">Riwayat PR</h3>
      <ul className="studio-homework-list">
        {quests.map((quest) => {
          const status = STATUS[quest.status] || STATUS.assigned;
          const isOpen = openId === quest.id;
          const isDone = quest.status === 'completed';
          return (
            <li key={quest.id} className="studio-homework-item">
              <div className="studio-homework-row">
                <div className="studio-homework-info">
                  <strong>{quest.chapterTitle || quest.title}</strong>
                  <span className="studio-muted">
                    {quest.level ? `${quest.level} · ` : ''}{quest.questions?.length || 0} soal · dikirim {formatIndonesianDate(quest.createdAt)}
                    {quest.deadline ? ` · tenggat ${formatIndonesianDate(quest.deadline)}` : ''}
                  </span>
                </div>
                <div className="studio-homework-status">
                  <span className={`studio-status ${status.className}`}>{status.label}</span>
                  {isDone && typeof quest.lastScore === 'number' && (
                    <span className="studio-score">{quest.lastScore}</span>
                  )}
                </div>
              </div>

              <div className="studio-actions studio-actions-compact">
                {isDone && (
                  <button className="btn btn-subtle" onClick={() => setOpenId(isOpen ? null : quest.id)}>
                    {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />} Jawaban
                  </button>
                )}
                <button className="btn btn-subtle" onClick={() => onShareWhatsApp(quest)} title="Kirim ulang via WhatsApp">
                  <Send size={14} /> WhatsApp
                </button>
                <button className="btn btn-subtle" onClick={() => onPrint(quest)} title="Cetak LKPD">
                  <Printer size={14} /> Cetak
                </button>
                <button className="btn btn-subtle" onClick={() => onOpen(quest)} title="Buka seperti murid">
                  <ExternalLink size={14} /> Buka
                </button>
                <button
                  className="btn btn-subtle studio-danger"
                  onClick={() => {
                    if (window.confirm(`Hapus PR "${quest.chapterTitle || quest.title}"?`)) onDelete(quest.id);
                  }}
                  title="Hapus PR"
                >
                  <Trash2 size={14} />
                </button>
              </div>

              {isOpen && <AnswerReview quest={quest} />}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default HomeworkList;
