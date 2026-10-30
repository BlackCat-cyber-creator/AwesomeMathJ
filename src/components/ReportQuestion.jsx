import React, { useState } from 'react';
import { Flag, X } from 'lucide-react';
import { createReportCloud } from '../firebase/firestore';
import {
  REPORT_CATEGORIES,
  REPORT_NOTE_MAX,
  buildReportPayload,
  getReportedQuestions,
  markQuestionReported
} from '../utils/reports';

/**
 * Tombol kecil "Laporkan" di setiap soal. Membuka formulir singkat (jenis masalah +
 * catatan opsional) lalu mengirim laporan ke antrean tinjauan di Studio Guru.
 * Props: questionId, chapterId, context ('handbook' | 'amc' | 'quest'), path, questionNumber
 */
export function ReportQuestion({ questionId, chapterId, context, path, questionNumber }) {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState('');
  const [note, setNote] = useState('');
  const [status, setStatus] = useState(() => (getReportedQuestions().includes(questionId) ? 'sent' : 'idle'));
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = buildReportPayload({ questionId, chapterId, context, category, note, path, questionNumber });
    if (!payload) {
      setError('Pilih jenis masalahnya dulu.');
      return;
    }
    setStatus('sending');
    setError('');
    try {
      await createReportCloud(payload);
      markQuestionReported(questionId);
      setStatus('sent');
      setIsOpen(false);
    } catch (err) {
      console.error('Gagal mengirim laporan:', err);
      setStatus('idle');
      setError('Laporan gagal terkirim. Periksa internet lalu coba lagi.');
    }
  };

  if (status === 'sent' && !isOpen) {
    return <span className="report-done">Terima kasih, laporan terkirim</span>;
  }

  if (!isOpen) {
    return (
      <button type="button" className="btn btn-subtle report-trigger" onClick={() => setIsOpen(true)}>
        <Flag size={13} /> Laporkan soal
      </button>
    );
  }

  return (
    <form className="report-form" onSubmit={handleSubmit}>
      <div className="report-form-head">
        <strong>Apa yang salah dengan soal ini?</strong>
        <button type="button" className="btn btn-ghost report-close" onClick={() => setIsOpen(false)} aria-label="Tutup">
          <X size={14} />
        </button>
      </div>
      <div className="report-options" role="radiogroup" aria-label="Jenis masalah">
        {REPORT_CATEGORIES.map((c) => (
          <label key={c.id} className={`report-option ${category === c.id ? 'is-active' : ''}`}>
            <input
              type="radio"
              name={`report-${questionId}`}
              value={c.id}
              checked={category === c.id}
              onChange={() => { setCategory(c.id); setError(''); }}
            />
            {c.label}
          </label>
        ))}
      </div>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        maxLength={REPORT_NOTE_MAX}
        rows={2}
        placeholder="Catatan (opsional), misalnya: gambar menunjukkan 5 cm, soal 6 cm"
      />
      {error && <p className="report-error">{error}</p>}
      <div className="report-actions">
        <button type="submit" className="btn btn-royal" disabled={status === 'sending'}>
          {status === 'sending' ? 'Mengirim...' : 'Kirim laporan'}
        </button>
        <span className="report-privacy">Tanpa nama atau email.</span>
      </div>
    </form>
  );
}

export default ReportQuestion;
