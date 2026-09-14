import React, { useState } from 'react';
import { 
  Users, 
  PlusCircle, 
  Search, 
  X, 
  School, 
  Flame, 
  Phone, 
  Send, 
  FileText, 
  Trash2, 
  Sparkles 
} from 'lucide-react';
import { CURRICULUM_DATA } from '../../data/curriculumData';
import { formatIndonesianDate } from '../../utils/storage';
import { MateriSekarangCard } from '../AcademicTimeline';

export function StudentCrmTab({
  students,
  quests,
  showAddStudent,
  setShowAddStudent,
  newStudentName,
  setNewStudentName,
  newStudentGrade,
  setNewStudentGrade,
  newStudentSchool,
  setNewStudentSchool,
  newStudentParentPhone,
  setNewStudentParentPhone,
  newStudentNotes,
  setNewStudentNotes,
  onAddStudentSubmit,
  onAssignToStudent,
  onDeleteStudent,
  onSeedDemoData
}) {
  const [studentSearchTerm, setStudentSearchTerm] = useState("");
  const [studentLevelFilter, setStudentLevelFilter] = useState("ALL");
  const [selectedStudentDetail, setSelectedStudentDetail] = useState(null);

  // Filter students
  const filteredStudents = students.filter((s) => {
    const matchesSearch = 
      s.name.toLowerCase().includes(studentSearchTerm.toLowerCase()) ||
      (s.school && s.school.toLowerCase().includes(studentSearchTerm.toLowerCase())) ||
      (s.notes && s.notes.toLowerCase().includes(studentSearchTerm.toLowerCase()));
    const matchesLevel = studentLevelFilter === "ALL" || s.level === studentLevelFilter;
    return matchesSearch && matchesLevel;
  });

  // Helper to get latest quest status for a student
  const getStudentLatestStatus = (studentId) => {
    const studentQuests = quests.filter((q) => q.studentId === studentId);
    if (studentQuests.length === 0) return { label: "Belum Diberi PR", badgeClass: "badge-subtle" };
    const latest = studentQuests[0];
    if (latest.status === "completed") {
      return { 
        label: `Selesai (${latest.lastScore || 100}/100)`, 
        badgeClass: (latest.lastScore || 100) >= 70 ? "badge-cat-uh" : "badge-cat-hots",
        quest: latest
      };
    }
    if (latest.status === "in_progress") {
      return { label: "Sedang Dikerjakan", badgeClass: "badge-cat-pas", quest: latest };
    }
    return { label: "Belum Dikerjakan", badgeClass: "badge-streak", quest: latest };
  };

  return (
    <div>
      {/* CRM Header Actions */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)' }}>
            Manajemen Data Murid Privat (CRM)
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            Menampilkan {filteredStudents.length} dari {students.length} murid terdaftar.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          {students.length === 0 && onSeedDemoData && (
            <button 
              id="btn-load-demo-students"
              className="btn btn-outline" 
              onClick={onSeedDemoData}
              title="Muat data contoh murid untuk mencoba dashboard"
            >
              <Sparkles size={16} />
              Muat Data Contoh / Demo
            </button>
          )}

          <button 
            id="btn-open-add-student"
            className="btn btn-royal" 
            onClick={() => setShowAddStudent(!showAddStudent)}
          >
            <PlusCircle size={17} />
            {showAddStudent ? "Tutup Formulir" : "Tambah Siswa Baru"}
          </button>
        </div>
      </div>

      {/* Search & Level Filter Bar */}
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ position: 'relative', flex: 1, minWidth: 260, maxWidth: 440 }}>
          <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }} />
          <input 
            id="input-search-student"
            type="text" 
            className="form-input" 
            placeholder="Cari nama murid, asal sekolah, atau catatan..." 
            style={{ paddingLeft: '2.4rem', fontSize: '0.85rem' }}
            value={studentSearchTerm}
            onChange={(e) => setStudentSearchTerm(e.target.value)}
          />
          {studentSearchTerm && (
            <button
              type="button"
              onClick={() => setStudentSearchTerm("")}
              style={{ position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
            >
              <X size={14} />
            </button>
          )}
        </div>

        <div style={{ display: 'flex', gap: '0.35rem', alignItems: 'center' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>Jenjang:</span>
          {["ALL", "SD", "SMP", "SMA"].map((lvl) => (
            <button
              key={lvl}
              type="button"
              className={`btn ${studentLevelFilter === lvl ? 'btn-royal' : 'btn-outline'}`}
              style={{ padding: '0.3rem 0.65rem', fontSize: '0.75rem' }}
              onClick={() => setStudentLevelFilter(lvl)}
            >
              {lvl === "ALL" ? "Semua" : lvl}
            </button>
          ))}
        </div>
      </div>

      {/* Form Tambah Siswa Baru */}
      {showAddStudent && (
        <form onSubmit={onAddStudentSubmit} className="editorial-card" style={{ padding: '1.5rem', marginBottom: '1.5rem', backgroundColor: '#F8FAFC' }}>
          <h4 style={{ fontSize: '1.05rem', marginBottom: '1rem', color: 'var(--primary-navy)', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <PlusCircle size={18} color="var(--primary-blue)" />
            Formulir Pendaftaran Murid Baru:
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label" htmlFor="input-new-student-name">Nama Lengkap Murid *</label>
              <input 
                id="input-new-student-name"
                type="text" 
                className="form-input" 
                placeholder="Contoh: Dimas Wahyu"
                value={newStudentName}
                onChange={(e) => setNewStudentName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="select-new-student-grade">Jenjang Kelas *</label>
              <select 
                id="select-new-student-grade"
                className="form-select"
                value={newStudentGrade}
                onChange={(e) => setNewStudentGrade(Number(e.target.value))}
              >
                {[4, 5, 6, 7, 8, 9, 10, 11, 12].map((g) => (
                  <option key={g} value={g}>Kelas {g} ({g <= 6 ? 'SD' : g <= 9 ? 'SMP' : 'SMA'})</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="input-new-student-school">Asal Sekolah (Opsional)</label>
              <input 
                id="input-new-student-school"
                type="text" 
                className="form-input" 
                placeholder="Contoh: SDN Menteng 01"
                value={newStudentSchool}
                onChange={(e) => setNewStudentSchool(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="input-new-student-parent-phone">Nomor WhatsApp Wali Murid *</label>
              <input 
                id="input-new-student-parent-phone"
                type="tel" 
                className="form-input" 
                placeholder="08123456789"
                value={newStudentParentPhone}
                onChange={(e) => setNewStudentParentPhone(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group" style={{ marginTop: '0.5rem' }}>
            <label className="form-label" htmlFor="input-new-student-notes">Catatan Materi & Target Belajar:</label>
            <input 
              id="input-new-student-notes"
              type="text" 
              className="form-input" 
              placeholder="Contoh: Perlu latihan intensif materi pecahan campuran & FPB."
              value={newStudentNotes}
              onChange={(e) => setNewStudentNotes(e.target.value)}
            />
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '0.75rem' }}>
            <button 
              id="btn-cancel-add-student"
              type="button" 
              className="btn btn-outline" 
              onClick={() => setShowAddStudent(false)}
            >
              Batal
            </button>
            <button 
              id="btn-submit-add-student"
              type="submit" 
              className="btn btn-royal"
            >
              Simpan Murid Baru
            </button>
          </div>
        </form>
      )}

      {/* Student Cards Grid */}
      {students.length === 0 ? (
        <div className="editorial-card" style={{ padding: '3.5rem 2rem', textAlign: 'center', backgroundColor: '#F8FAFC' }}>
          <Users size={42} color="var(--primary-blue)" style={{ margin: '0 auto 1rem', opacity: 0.8 }} />
          <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)', marginBottom: '0.45rem' }}>
            Belum Ada Murid Privat Terdaftar
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: 480, margin: '0 auto 1.5rem' }}>
            Tambahkan murid baru untuk mulai menyusun paket PR kurikulum, membagikan link ke WhatsApp wali murid, dan memantau perkembangan belajar.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-royal" onClick={() => setShowAddStudent(true)}>
              <PlusCircle size={16} />
              Tambah Murid Pertama
            </button>
            {onSeedDemoData && (
              <button className="btn btn-outline" onClick={onSeedDemoData}>
                <Sparkles size={16} />
                Muat Data Contoh / Demo
              </button>
            )}
          </div>
        </div>
      ) : filteredStudents.length === 0 ? (
        <div className="editorial-card" style={{ padding: '3rem 2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
          <Users size={36} style={{ margin: '0 auto 0.75rem', opacity: 0.5 }} />
          <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-navy)', marginBottom: '0.35rem' }}>
            Tidak Ada Data Murid yang Cocok
          </h4>
          <p style={{ fontSize: '0.85rem' }}>
            Coba sesuaikan kata kunci pencarian atau filter jenjang.
          </p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
          {filteredStudents.map((student) => {
            const badgeClass = student.level === "SD" ? "badge-sd" : student.level === "SMP" ? "badge-smp" : "badge-sma";
            const studentQuests = quests.filter((q) => q.studentId === student.id);
            const completedQuests = studentQuests.filter((q) => q.status === "completed");
            const latestStatus = getStudentLatestStatus(student.id);

            return (
              <div key={student.id} className="editorial-card editorial-card-interactive" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <div>
                      <h4 style={{ fontSize: '1.15rem', color: 'var(--primary-navy)', marginBottom: '0.2rem' }}>
                        {student.name}
                      </h4>
                      <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center', flexWrap: 'wrap' }}>
                        <span className={`badge ${badgeClass}`}>Kelas {student.grade} {student.level}</span>
                        {student.school && (
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
                            <School size={12} /> {student.school}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Streak Badge */}
                    <div className="badge badge-streak" style={{ padding: '0.35rem 0.75rem' }}>
                      <Flame size={16} className="flame-animated" />
                      <strong>{student.streak} Hari Streak</strong>
                    </div>
                  </div>

                  {/* Phone / WA Link */}
                  {student.parentPhone && (
                    <div style={{ marginBottom: '0.65rem' }}>
                      <a 
                        href={`https://api.whatsapp.com/send?phone=${student.parentPhone.replace(/\D/g, '')}`} 
                        target="_blank" 
                        rel="noreferrer"
                        style={{ fontSize: '0.78rem', color: 'var(--primary-blue)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                      >
                        <Phone size={12} /> WA: {student.parentPhone}
                      </a>
                    </div>
                  )}

                  {/* Academic Calendar: Materi Sekarang */}
                  {(() => {
                    const gData = CURRICULUM_DATA.find(g => g.grade === student.grade);
                    if (gData) {
                      return (
                        <MateriSekarangCard 
                          grade={student.grade} 
                          chapters={gData.chapters} 
                          compact={true} 
                          onAssign={(info) => onAssignToStudent(student, info.chapterId)}
                        />
                      );
                    }
                    return null;
                  })()}

                  {/* Catatan Guru */}
                  {student.notes && (
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', backgroundColor: '#F8FAFC', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', marginBottom: '0.85rem', fontStyle: 'italic' }}>
                      "{student.notes}"
                    </div>
                  )}
                </div>

                {/* Card Footer: Status & Actions */}
                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '0.85rem', marginTop: '0.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      Total PR: <strong>{studentQuests.length}</strong> ({completedQuests.length} selesai)
                    </div>
                    <span className={`badge ${latestStatus.badgeClass}`} style={{ fontSize: '0.72rem' }}>
                      {latestStatus.label}
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button 
                      className="btn btn-royal" 
                      style={{ flex: 1, justifyContent: 'center', padding: '0.45rem', fontSize: '0.8rem' }}
                      onClick={() => onAssignToStudent(student)}
                    >
                      <Send size={13} />
                      Beri PR
                    </button>
                    <button 
                      className="btn btn-outline" 
                      style={{ padding: '0.45rem 0.75rem', fontSize: '0.8rem' }}
                      onClick={() => setSelectedStudentDetail(student)}
                    >
                      <FileText size={13} />
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* MODAL RINCIAN SISWA & RIWAYAT TUGAS */}
      {selectedStudentDetail && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(17, 24, 39, 0.65)',
          backdropFilter: 'blur(3px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '1rem'
        }}>
          <div className="editorial-card" style={{ width: '100%', maxWidth: 540, maxHeight: '85vh', display: 'flex', flexDirection: 'column', padding: '1.75rem', backgroundColor: '#FFFFFF', boxShadow: 'var(--shadow-elevated)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)', marginBottom: '0.25rem' }}>
                  {selectedStudentDetail.name}
                </h3>
                <span className="badge badge-sd">
                  Kelas {selectedStudentDetail.grade} {selectedStudentDetail.level}
                </span>
              </div>
              <button 
                className="btn btn-subtle"
                style={{ padding: '0.35rem' }}
                onClick={() => setSelectedStudentDetail(null)}
              >
                <X size={18} />
              </button>
            </div>

            <div style={{ overflowY: 'auto', flex: 1, paddingRight: '0.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{ backgroundColor: '#F8FAFC', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>TOTAL XP</span>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary-blue)' }}>
                    {selectedStudentDetail.totalXp} XP
                  </div>
                </div>
                <div style={{ backgroundColor: '#F8FAFC', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>STREAK BELAJAR</span>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-amber)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Flame size={18} />
                    {selectedStudentDetail.streak} Hari
                  </div>
                </div>
              </div>

              {selectedStudentDetail.parentPhone && (
                <div style={{ marginBottom: '1rem', fontSize: '0.85rem' }}>
                  <strong>WhatsApp Wali Murid:</strong> {selectedStudentDetail.parentPhone}
                </div>
              )}

              {selectedStudentDetail.school && (
                <div style={{ marginBottom: '1rem', fontSize: '0.85rem' }}>
                  <strong>Asal Sekolah:</strong> {selectedStudentDetail.school}
                </div>
              )}

              <div style={{ marginBottom: '1.25rem' }}>
                <strong style={{ fontSize: '0.85rem', display: 'block', marginBottom: '0.35rem' }}>Catatan Belajar:</strong>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', backgroundColor: '#F9FAFB', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', margin: 0 }}>
                  {selectedStudentDetail.notes || "Belum ada catatan."}
                </p>
              </div>

              {/* Riwayat Quest Murid */}
              <div>
                <strong style={{ fontSize: '0.85rem', display: 'block', marginBottom: '0.5rem' }}>Riwayat Tugas PR Murid Ini:</strong>
                {(() => {
                  const sQuests = quests.filter((q) => q.studentId === selectedStudentDetail.id);
                  if (sQuests.length === 0) {
                    return <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>Belum ada riwayat penugasan.</div>;
                  }
                  return (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {sQuests.map((q) => (
                        <div key={q.id} style={{ padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.825rem' }}>
                          <div>
                            <div style={{ fontWeight: 600, color: 'var(--primary-navy)' }}>{q.chapterTitle}</div>
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Tenggat: {formatIndonesianDate(q.deadline)}</div>
                          </div>
                          <span className={q.status === 'completed' ? 'badge badge-cat-uh' : 'badge badge-streak'}>
                            {q.status === 'completed' ? `Skor: ${q.lastScore || 100}` : 'Belum Selesai'}
                          </span>
                        </div>
                      ))}
                    </div>
                  );
                })()}
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem', marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button
                type="button"
                className="btn btn-subtle"
                style={{ color: 'var(--status-brick)', fontSize: '0.8rem' }}
                onClick={() => {
                  if (window.confirm(`Hapus murid "${selectedStudentDetail.name}" dari sistem?`)) {
                    onDeleteStudent(selectedStudentDetail.id);
                    setSelectedStudentDetail(null);
                  }
                }}
              >
                <Trash2 size={14} />
                Hapus Murid
              </button>

              <button
                type="button"
                className="btn btn-royal"
                style={{ fontSize: '0.825rem' }}
                onClick={() => {
                  const std = selectedStudentDetail;
                  setSelectedStudentDetail(null);
                  onAssignToStudent(std);
                }}
              >
                <Send size={14} />
                Beri Tugas Baru
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentCrmTab;
