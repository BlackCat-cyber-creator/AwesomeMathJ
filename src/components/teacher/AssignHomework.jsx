import React, { useMemo, useState } from 'react';
import { Send, Copy, Printer, ExternalLink, Check } from 'lucide-react';
import { ALL_CHAPTERS_INDEX, getGradeData } from '../../data/curriculumData';
import { ALL_AMC_CHAPTERS_INDEX, getAmcModuleData } from '../../data/amc/amcData';
import { getRecommendedChapter } from '../../data/academicCalendar';
import { amcLevelOfTrack, buildQuest } from '../../utils/questBuilder';
import { getDefaultDeadlineDate } from '../../utils/storage';

/** Sumber materi: kurikulum kelas murid atau salah satu level AMC. */
function sourceOptions(student) {
  return [
    { value: 'merdeka', label: `Kurikulum Merdeka Kelas ${student.grade}` },
    { value: 'amc8', label: 'Olimpiade AMC 8' },
    { value: 'amc10', label: 'Olimpiade AMC 10' },
    { value: 'amc12', label: 'Olimpiade AMC 12' }
  ];
}

function defaultSource(student) {
  return amcLevelOfTrack(student.track) ? student.track : 'merdeka';
}

function chaptersFor(student, source) {
  const amcLevel = amcLevelOfTrack(source);
  if (amcLevel) return ALL_AMC_CHAPTERS_INDEX.filter((c) => c.level === amcLevel);
  return ALL_CHAPTERS_INDEX.filter((c) => c.grade === Number(student.grade));
}

function recommendedChapterId(student, source, chapters) {
  if (source !== 'merdeka') return chapters[0]?.id || '';
  const rec = getRecommendedChapter(Number(student.grade));
  return (rec && chapters[rec.chapterIndex]?.id) || chapters[0]?.id || '';
}

/**
 * Kartu "Kirim PR": satu bab = satu PR, soal diurutkan dari mudah ke sulit.
 * Parent memberi `key` per murid agar pilihan kembali ke bawaan saat murid diganti.
 */
export function AssignHomework({ student, quests, onCreate, onShareWhatsApp, onCopyMessage, onPrint, onOpen }) {
  const [source, setSource] = useState(() => defaultSource(student));
  const chapters = useMemo(() => chaptersFor(student, source), [student, source]);
  const [chapterId, setChapterId] = useState(() => recommendedChapterId(student, source, chapters));
  const [deadline, setDeadline] = useState(() => getDefaultDeadlineDate());
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState('');
  const [created, setCreated] = useState(null);
  const [copied, setCopied] = useState(false);

  const sentChapterIds = useMemo(
    () => new Set(quests.filter((q) => q.studentId === student.id).map((q) => q.chapterId)),
    [quests, student.id]
  );

  const selected = chapters.find((c) => c.id === chapterId);

  const handleSourceChange = (e) => {
    const next = e.target.value;
    setSource(next);
    setChapterId(recommendedChapterId(student, next, chaptersFor(student, next)));
  };

  const handleCreate = async () => {
    if (!selected) return;
    setIsCreating(true);
    setError('');
    try {
      const amcLevel = amcLevelOfTrack(source);
      let chapter;
      if (amcLevel) {
        const data = await getAmcModuleData(amcLevel);
        chapter = data?.chapters?.find((c) => c.id === chapterId);
      } else {
        const data = await getGradeData(student.grade);
        chapter = data?.chapters?.find((c) => c.id === chapterId);
      }
      if (!chapter?.questions?.length) throw new Error('Bab ini belum memiliki soal.');

      const payload = buildQuest({
        student,
        deadline,
        source: amcLevel ? { kind: 'amc', level: amcLevel, chapter } : { kind: 'merdeka', grade: student.grade, chapter }
      });
      setCreated(await onCreate(payload));
    } catch (err) {
      setError(err.message || 'Gagal membuat PR.');
    } finally {
      setIsCreating(false);
    }
  };

  const handleCopy = async (quest) => {
    await onCopyMessage(quest);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (created) {
    return (
      <section className="editorial-card studio-card studio-card-success">
        <h3 className="studio-card-title">PR siap dikirim ✓</h3>
        <p className="studio-muted">
          {created.chapterTitle} · {created.questions.length} soal · untuk {created.studentName}
        </p>
        <div className="studio-actions">
          <button className="btn btn-whatsapp" onClick={() => onShareWhatsApp(created)}>
            <Send size={15} /> Kirim via WhatsApp
          </button>
          <button className="btn btn-outline" onClick={() => handleCopy(created)}>
            {copied ? <Check size={15} /> : <Copy size={15} />} {copied ? 'Tersalin' : 'Salin pesan'}
          </button>
          <button className="btn btn-outline" onClick={() => onPrint(created)}>
            <Printer size={15} /> Cetak LKPD
          </button>
          <button className="btn btn-subtle" onClick={() => onOpen(created)}>
            <ExternalLink size={15} /> Lihat sebagai murid
          </button>
        </div>
        <button className="btn btn-subtle studio-link-btn" onClick={() => setCreated(null)}>
          + Buat PR lain
        </button>
      </section>
    );
  }

  return (
    <section className="editorial-card studio-card">
      <h3 className="studio-card-title">Kirim PR</h3>

      <div className="studio-form-grid">
        <label className="studio-field">
          <span>Materi</span>
          <select className="form-select" value={source} onChange={handleSourceChange}>
            {sourceOptions(student).map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </label>

        <label className="studio-field">
          <span>Tenggat</span>
          <input type="date" className="form-select" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
        </label>

        <label className="studio-field studio-field-wide">
          <span>Bab</span>
          <select className="form-select" value={chapterId} onChange={(e) => setChapterId(e.target.value)}>
            {chapters.map((c) => (
              <option key={c.id} value={c.id}>
                {sentChapterIds.has(c.id) ? '✓ ' : ''}{c.title}{c.trackLabel ? ` (${c.trackLabel})` : ''}
              </option>
            ))}
          </select>
        </label>
      </div>

      {selected && (
        <p className="studio-muted">
          {selected.questionCount || 'Semua'} soal dari bab ini, diurutkan dari mudah ke sulit.
          {sentChapterIds.has(selected.id) && ' Bab ini sudah pernah dikirim ke murid ini.'}
        </p>
      )}

      {error && <p className="studio-error">{error}</p>}

      <div className="studio-actions">
        <button className="btn btn-royal" onClick={handleCreate} disabled={!selected || isCreating}>
          {isCreating ? 'Membuat PR...' : 'Buat PR'}
        </button>
      </div>
    </section>
  );
}

export default AssignHomework;
