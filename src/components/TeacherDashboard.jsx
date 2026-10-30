import React, { useEffect, useMemo, useState } from 'react';
import { UserPlus, Pencil, Trash2, Search, Flag } from 'lucide-react';
import {
  subscribeStudents,
  saveStudentCloud,
  deleteStudentCloud,
  subscribeQuests,
  createQuestCloud,
  deleteQuestCloud,
  subscribeReports,
  deleteReportCloud
} from '../firebase/firestore';
import { formatIndonesianDate } from '../utils/storage';
import { buildWhatsAppMessage, normalizePhone, trackLabel } from '../utils/questBuilder';
import { StudentForm } from './teacher/StudentForm';
import { AssignHomework } from './teacher/AssignHomework';
import { HomeworkList } from './teacher/HomeworkList';
import { ReportList } from './teacher/ReportList';

function pendingCount(quests, studentId) {
  return quests.filter((q) => q.studentId === studentId && q.status !== 'completed').length;
}

/**
 * Studio Guru: satu halaman berbasis murid.
 * Kiri: daftar murid. Kanan: data murid, kirim PR (1 bab = 1 PR), dan riwayat PR.
 * Firestore adalah satu-satunya sumber data.
 */
export function TeacherDashboard({ onLaunchQuest, onPrintQuest, currentTeacher }) {
  const teacherId = currentTeacher?.uid || null;
  const teacherName = currentTeacher?.displayName || currentTeacher?.email?.split('@')[0] || 'Guru';

  const [students, setStudents] = useState([]);
  const [quests, setQuests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [connectionError, setConnectionError] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  const [formMode, setFormMode] = useState(null); // null | 'add' | 'edit'
  const [search, setSearch] = useState('');
  const [reports, setReports] = useState([]);
  const [view, setView] = useState('students'); // 'students' | 'reports'

  useEffect(() => {
    if (!teacherId) return undefined;
    const onError = () => setConnectionError('Tidak bisa terhubung ke database. Periksa internet lalu muat ulang halaman.');
    const unsubStudents = subscribeStudents(teacherId, (list) => {
      setStudents(list);
      setIsLoading(false);
      setConnectionError('');
    }, onError);
    const unsubQuests = subscribeQuests(teacherId, setQuests, onError);
    // Laporan soal bersifat opsional: bila aturan Firestore belum di-deploy, abaikan saja
    const unsubReports = subscribeReports(setReports, () => setReports([]));
    return () => {
      unsubStudents();
      unsubQuests();
      unsubReports();
    };
  }, [teacherId]);

  const selected = students.find((s) => s.id === selectedId) || students[0] || null;

  const filteredStudents = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return students;
    return students.filter((s) => `${s.name} ${s.school || ''} kelas ${s.grade}`.toLowerCase().includes(term));
  }, [students, search]);

  const studentQuests = useMemo(
    () => (selected ? quests.filter((q) => q.studentId === selected.id) : []),
    [quests, selected]
  );

  // ---- Murid ----
  const handleSaveStudent = async (data) => {
    const saved = await saveStudentCloud(teacherId, {
      ...data,
      level: data.grade <= 6 ? 'SD' : data.grade <= 9 ? 'SMP' : 'SMA'
    });
    setSelectedId(saved.id);
    setFormMode(null);
  };

  const handleDeleteStudent = async (student) => {
    const count = quests.filter((q) => q.studentId === student.id).length;
    const extra = count ? ` Riwayat ${count} PR-nya juga akan dihapus.` : '';
    if (!window.confirm(`Hapus murid "${student.name}"?${extra}`)) return;
    await Promise.all(quests.filter((q) => q.studentId === student.id).map((q) => deleteQuestCloud(q.id)));
    await deleteStudentCloud(teacherId, student.id);
    setSelectedId(null);
  };

  // ---- PR ----
  const handleCreateQuest = (payload) => createQuestCloud(teacherId, payload);

  const messageFor = (quest) => buildWhatsAppMessage({
    quest,
    teacherName,
    origin: window.location.origin,
    formatDate: formatIndonesianDate
  });

  const handleShareWhatsApp = (quest) => {
    const student = students.find((s) => s.id === quest.studentId);
    const phone = normalizePhone(student?.parentPhone);
    const text = encodeURIComponent(messageFor(quest));
    const url = phone ? `https://wa.me/${phone}?text=${text}` : `https://wa.me/?text=${text}`;
    window.open(url, '_blank', 'noopener');
  };

  const handleCopyMessage = (quest) => navigator.clipboard.writeText(messageFor(quest));

  const handleResolveReports = (ids) => Promise.all(ids.map((id) => deleteReportCloud(id)));
  const reportedQuestionCount = new Set(reports.map((r) => r.questionId)).size;

  if (!teacherId) return null;

  return (
    <div className="handbook-container studio">
      {connectionError && <div className="studio-banner-error">{connectionError}</div>}

      <div className="studio-layout">
        {/* ---------- Daftar murid ---------- */}
        <aside className="editorial-card studio-sidebar">
          <div className="studio-sidebar-head">
            <h2 className="studio-heading">Murid ({students.length})</h2>
            <button className="btn btn-royal" onClick={() => { setFormMode('add'); setView('students'); }}>
              <UserPlus size={15} /> Tambah
            </button>
          </div>

          {students.length > 5 && (
            <label className="studio-search">
              <Search size={14} />
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Cari murid..." />
            </label>
          )}

          {isLoading ? (
            <p className="studio-muted">Memuat murid...</p>
          ) : students.length === 0 ? (
            <p className="studio-muted">Belum ada murid. Klik <strong>Tambah</strong> untuk mulai.</p>
          ) : (
            <ul className="studio-student-list">
              {filteredStudents.map((s) => {
                const pending = pendingCount(quests, s.id);
                return (
                  <li key={s.id}>
                    <button
                      className={`studio-student-btn ${view === 'students' && selected?.id === s.id ? 'is-active' : ''}`}
                      onClick={() => { setSelectedId(s.id); setFormMode(null); setView('students'); }}
                    >
                      <span className="studio-student-name">{s.name}</span>
                      <span className="studio-muted">
                        Kelas {s.grade}{s.track && s.track !== 'reguler' ? ` · ${s.track.toUpperCase()}` : ''}
                      </span>
                      {pending > 0 && <span className="studio-pill" title="PR belum selesai">{pending}</span>}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}

          <button
            className={`studio-student-btn studio-report-btn ${view === 'reports' ? 'is-active' : ''}`}
            onClick={() => setView('reports')}
          >
            <span className="studio-student-name"><Flag size={14} /> Laporan soal</span>
            <span className="studio-muted">Soal yang dilaporkan salah</span>
            {reportedQuestionCount > 0 && <span className="studio-pill">{reportedQuestionCount}</span>}
          </button>
        </aside>

        {/* ---------- Panel murid ---------- */}
        <div className="studio-main">
          {view === 'reports' && <ReportList reports={reports} onResolve={handleResolveReports} />}

          {view === 'students' && formMode === 'add' && (
            <StudentForm onSave={handleSaveStudent} onCancel={() => setFormMode(null)} />
          )}
          {view === 'students' && formMode === 'edit' && selected && (
            <StudentForm key={selected.id} student={selected} onSave={handleSaveStudent} onCancel={() => setFormMode(null)} />
          )}

          {view === 'students' && !formMode && selected && (
            <>
              <section className="editorial-card studio-card">
                <div className="studio-profile-head">
                  <div>
                    <h2 className="studio-heading">{selected.name}</h2>
                    <p className="studio-muted">
                      Kelas {selected.grade}{selected.school ? ` · ${selected.school}` : ''} · {trackLabel(selected.track)}
                    </p>
                  </div>
                  <div className="studio-actions studio-actions-compact">
                    <button className="btn btn-subtle" onClick={() => setFormMode('edit')}>
                      <Pencil size={14} /> Ubah
                    </button>
                    <button className="btn btn-subtle studio-danger" onClick={() => handleDeleteStudent(selected)}>
                      <Trash2 size={14} /> Hapus
                    </button>
                  </div>
                </div>
                {(selected.parentPhone || selected.notes) && (
                  <dl className="studio-profile-details">
                    {selected.parentPhone && (<><dt>WhatsApp ortu</dt><dd>{selected.parentPhone}</dd></>)}
                    {selected.notes && (<><dt>Catatan</dt><dd>{selected.notes}</dd></>)}
                  </dl>
                )}
              </section>

              <AssignHomework
                key={`${selected.id}-${selected.grade}-${selected.track}`}
                student={selected}
                quests={quests}
                onCreate={handleCreateQuest}
                onShareWhatsApp={handleShareWhatsApp}
                onCopyMessage={handleCopyMessage}
                onPrint={onPrintQuest}
                onOpen={(q) => onLaunchQuest(q.id)}
              />

              <HomeworkList
                quests={studentQuests}
                onShareWhatsApp={handleShareWhatsApp}
                onPrint={onPrintQuest}
                onOpen={(q) => onLaunchQuest(q.id)}
                onDelete={(id) => deleteQuestCloud(id)}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeacherDashboard;
