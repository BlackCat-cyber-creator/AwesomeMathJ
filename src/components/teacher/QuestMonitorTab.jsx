import React, { useState } from 'react';
import { 
  Send, 
  Clock, 
  Search, 
  ExternalLink, 
  Printer, 
  Trash2, 
  X, 
  Check, 
  XCircle, 
  Download, 
  Upload, 
  RotateCcw,
  Database,
  Eye
} from 'lucide-react';
import { formatIndonesianDate } from '../../utils/storage';
import { MathText } from '../MathRenderer';

export function QuestMonitorTab({
  quests,
  students,
  historyStats,
  onLaunchQuest,
  onPrintQuest,
  onDeleteQuest,
  onOpenWhatsAppWeb,
  onSwitchToGenerator,
  onExportData,
  onImportData,
  onResetDemoData
}) {
  const [historySearchTerm, setHistorySearchTerm] = useState("");
  const [historyStatusFilter, setHistoryStatusFilter] = useState("ALL");
  const [historyStudentFilter, setHistoryStudentFilter] = useState("ALL");
  const [inspectingQuest, setInspectingQuest] = useState(null);

  // Filter quests
  const filteredQuests = quests.filter((q) => {
    const matchesSearch = 
      q.studentName.toLowerCase().includes(historySearchTerm.toLowerCase()) ||
      (q.chapterTitle && q.chapterTitle.toLowerCase().includes(historySearchTerm.toLowerCase()));
    const matchesStatus = historyStatusFilter === "ALL" || q.status === historyStatusFilter;
    const matchesStudent = historyStudentFilter === "ALL" || q.studentId === historyStudentFilter;
    return matchesSearch && matchesStatus && matchesStudent;
  });

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)' }}>
            Riwayat Penugasan PR & Hasil Evaluasi Siswa
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            Memantau status pengerjaan, skor evaluasi real-time, dan pengumpulan tugas murid.
          </p>
        </div>

        <button 
          className="btn btn-royal" 
          onClick={onSwitchToGenerator}
          style={{ fontSize: '0.85rem' }}
        >
          <Send size={15} />
          Buat Tugas Baru
        </button>
      </div>

      {/* 5 KPI Summary Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.85rem', marginBottom: '1.5rem' }}>
        <div className="editorial-card" style={{ padding: '1rem', backgroundColor: '#FFFFFF' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700 }}>TOTAL TUGAS</span>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary-navy)', marginTop: '0.2rem' }}>
            {historyStats.total}
          </div>
        </div>

        <div className="editorial-card" style={{ padding: '1rem', backgroundColor: '#F0FDF4', borderColor: '#BBF7D0' }}>
          <span style={{ fontSize: '0.75rem', color: '#166534', fontWeight: 700 }}>SELESAI DIKERJAKAN</span>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--status-emerald)', marginTop: '0.2rem' }}>
            {historyStats.completed}
          </div>
        </div>

        <div className="editorial-card" style={{ padding: '1rem', backgroundColor: '#EFF6FF', borderColor: '#BFDBFE' }}>
          <span style={{ fontSize: '0.75rem', color: '#1E40AF', fontWeight: 700 }}>SEDANG BERJALAN</span>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary-blue)', marginTop: '0.2rem' }}>
            {historyStats.inProgress}
          </div>
        </div>

        <div className="editorial-card" style={{ padding: '1rem', backgroundColor: '#FFFBEB', borderColor: '#FDE68A' }}>
          <span style={{ fontSize: '0.75rem', color: '#92400E', fontWeight: 700 }}>BELUM DIKERJAKAN</span>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--accent-amber)', marginTop: '0.2rem' }}>
            {historyStats.assigned}
          </div>
        </div>

        <div className="editorial-card" style={{ padding: '1rem', backgroundColor: '#F8FAFC' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700 }}>RATA-RATA SKOR</span>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: historyStats.avgScore ? (historyStats.avgScore >= 70 ? 'var(--status-emerald)' : 'var(--accent-amber)') : 'var(--text-muted)', marginTop: '0.2rem' }}>
            {historyStats.avgScore !== null ? `${historyStats.avgScore}/100` : "-"}
          </div>
        </div>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="editorial-card" style={{ padding: '1.25rem', marginBottom: '1.5rem', backgroundColor: '#F9FAFB' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.85rem', alignItems: 'center' }}>
          {/* Search input */}
          <div style={{ position: 'relative' }}>
            <Search size={15} color="var(--text-muted)" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="text" 
              className="form-input" 
              placeholder="Cari nama murid atau bab..." 
              style={{ paddingLeft: '2.25rem', fontSize: '0.825rem' }}
              value={historySearchTerm}
              onChange={(e) => setHistorySearchTerm(e.target.value)}
            />
          </div>

          {/* Status Filter */}
          <div>
            <select 
              className="form-select" 
              style={{ fontSize: '0.825rem' }}
              value={historyStatusFilter}
              onChange={(e) => setHistoryStatusFilter(e.target.value)}
            >
              <option value="ALL">Semua Status Pengerjaan</option>
              <option value="completed">● Selesai</option>
              <option value="in_progress">● Sedang Dikerjakan</option>
              <option value="assigned">○ Belum Dikerjakan</option>
            </select>
          </div>

          {/* Student Filter */}
          <div>
            <select 
              className="form-select" 
              style={{ fontSize: '0.825rem' }}
              value={historyStudentFilter}
              onChange={(e) => setHistoryStudentFilter(e.target.value)}
            >
              <option value="ALL">Semua Murid Privat</option>
              {students.map((s) => (
                <option key={s.id} value={s.id}>{s.name} (Kelas {s.grade})</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Live History Table */}
      <div className="editorial-card" style={{ padding: '1.75rem', marginBottom: '1.75rem' }}>
        {filteredQuests.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '2.5rem 1rem', color: 'var(--text-muted)' }}>
            <Clock size={32} style={{ margin: '0 auto 0.65rem', opacity: 0.5 }} />
            <h4 style={{ fontSize: '1.05rem', color: 'var(--primary-navy)', marginBottom: '0.3rem' }}>
              Tidak Ada Riwayat Tugas yang Ditemukan
            </h4>
            <p style={{ fontSize: '0.85rem' }}>
              {quests.length === 0 ? "Belum ada penugasan PR yang dibuat." : "Tidak ada tugas yang sesuai dengan kriteria filter."}
            </p>
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border-medium)', color: 'var(--text-primary)', backgroundColor: '#F9FAFB' }}>
                  <th style={{ padding: '0.75rem' }}>Siswa</th>
                  <th style={{ padding: '0.75rem' }}>Materi Bab & Paket</th>
                  <th style={{ padding: '0.75rem' }}>Tenggat</th>
                  <th style={{ padding: '0.75rem' }}>Status</th>
                  <th style={{ padding: '0.75rem' }}>Skor</th>
                  <th style={{ padding: '0.75rem', textAlign: 'center' }}>Aksi Guru</th>
                </tr>
              </thead>
              <tbody>
                {filteredQuests.map((q) => {
                  const isDone = q.status === "completed";
                  const isInProgress = q.status === "in_progress";

                  return (
                    <tr key={q.id} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                      <td style={{ padding: '0.75rem' }}>
                        <div style={{ fontWeight: 600, color: 'var(--primary-navy)' }}>
                          {q.studentName}
                        </div>
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                          Kelas {q.grade}
                        </span>
                      </td>
                      <td style={{ padding: '0.75rem' }}>
                        <div style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>
                          {q.chapterTitle}
                        </div>
                        {q.packetIndex && (
                          <span className="badge badge-sd" style={{ fontSize: '0.68rem', marginTop: '0.2rem' }}>
                            Paket {q.packetIndex} (Soal {q.packetRange || '5 Soal'})
                          </span>
                        )}
                      </td>
                      <td style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        {formatIndonesianDate(q.deadline)}
                      </td>
                      <td style={{ padding: '0.75rem' }}>
                        {isDone ? (
                          <span className="badge badge-cat-uh" style={{ fontSize: '0.72rem' }}>
                            ● Selesai
                          </span>
                        ) : isInProgress ? (
                          <span className="badge badge-cat-pas" style={{ fontSize: '0.72rem' }}>
                            ● Sedang Dikerjakan
                          </span>
                        ) : (
                          <span className="badge badge-streak" style={{ fontSize: '0.72rem' }}>
                            ○ Belum Dikerjakan
                          </span>
                        )}
                      </td>
                      <td style={{ padding: '0.75rem' }}>
                        {isDone ? (
                          <strong style={{ fontSize: '0.95rem', color: (q.lastScore || 100) >= 70 ? 'var(--status-emerald)' : 'var(--status-brick)' }}>
                            {q.lastScore || 100}/100
                          </strong>
                        ) : (
                          <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>-</span>
                        )}
                      </td>
                      <td style={{ padding: '0.75rem', textAlign: 'center' }}>
                        <div style={{ display: 'flex', gap: '0.35rem', justifyContent: 'center', alignItems: 'center' }}>
                          {isDone && (
                            <button
                              className="btn btn-outline"
                              style={{ padding: '0.3rem 0.6rem', fontSize: '0.75rem' }}
                              onClick={() => setInspectingQuest(q)}
                              title="Inspeksi Rincian Jawaban Siswa"
                            >
                              <Eye size={13} />
                              Inspeksi
                            </button>
                          )}
                          <button
                            className="btn btn-emerald"
                            style={{ padding: '0.3rem 0.6rem', fontSize: '0.75rem' }}
                            onClick={() => onOpenWhatsAppWeb(q)}
                            title="Kirim Ulang Link WA"
                          >
                            <Send size={13} />
                            WA
                          </button>
                          <button
                            className="btn btn-outline"
                            style={{ padding: '0.3rem 0.6rem', fontSize: '0.75rem' }}
                            onClick={() => onLaunchQuest(q.id)}
                            title="Uji Pengerjaan Soal"
                          >
                            <ExternalLink size={13} />
                          </button>
                          <button
                            className="btn btn-outline"
                            style={{ padding: '0.3rem 0.6rem', fontSize: '0.75rem' }}
                            onClick={() => onPrintQuest(q)}
                            title="Cetak Lembar Kerja A4"
                          >
                            <Printer size={13} />
                          </button>
                          <button
                            className="btn btn-subtle"
                            style={{ padding: '0.3rem 0.5rem', fontSize: '0.75rem', color: 'var(--status-brick)' }}
                            onClick={() => {
                              if (window.confirm(`Hapus tugas PR "${q.title}"?`)) {
                                onDeleteQuest(q.id);
                              }
                            }}
                            title="Hapus Tugas"
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* BACKUP & RESTORE DATA SECTION */}
      <div className="editorial-card" style={{ padding: '1.5rem', backgroundColor: '#F8FAFC' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--primary-navy)' }}>
          <Database size={18} />
          <h4 style={{ fontSize: '1.05rem', margin: 0 }}>Cadangan & Pemulihan Data (Backup / Restore)</h4>
        </div>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          Simpan seluruh data murid privat, paket PR, dan riwayat pengerjaan ke dalam file JSON di komputer Anda agar data selalu aman dan dapat dipindahkan antar perangkat.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <button 
            id="btn-export-backup-data"
            className="btn btn-outline" 
            onClick={onExportData}
            style={{ fontSize: '0.825rem' }}
          >
            <Download size={15} />
            Ekspor Cadangan JSON
          </button>

          <label 
            id="label-import-backup-data"
            className="btn btn-outline" 
            style={{ fontSize: '0.825rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', margin: 0 }}
          >
            <Upload size={15} />
            Impor File Cadangan
            <input 
              type="file" 
              accept=".json" 
              style={{ display: 'none' }} 
              onChange={onImportData} 
            />
          </label>

          <button 
            id="btn-reset-demo-data"
            className="btn btn-subtle" 
            onClick={onResetDemoData}
            style={{ fontSize: '0.825rem', color: 'var(--text-muted)', marginLeft: 'auto' }}
            title="Reset ke kondisi awal (4 murid demo)"
          >
            <RotateCcw size={14} />
            Reset Data Demo Awal
          </button>
        </div>
      </div>

      {/* MODAL INSPEKSI JAWABAN SISWA */}
      {inspectingQuest && (
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
          <div className="editorial-card" style={{ width: '100%', maxWidth: 700, maxHeight: '85vh', display: 'flex', flexDirection: 'column', padding: '1.75rem', backgroundColor: '#FFFFFF', boxShadow: 'var(--shadow-elevated)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
              <div>
                <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center', marginBottom: '0.35rem' }}>
                  <span className="badge badge-cat-uh">Skor: {inspectingQuest.lastScore || 100}/100</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    Dikumpulkan: {formatIndonesianDate(inspectingQuest.submittedAt)}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)', margin: 0 }}>
                  Inspeksi Hasil: {inspectingQuest.studentName}
                </h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                  {inspectingQuest.chapterTitle} ({inspectingQuest.questions?.length || 5} Butir Soal)
                </div>
              </div>

              <button 
                className="btn btn-subtle"
                style={{ padding: '0.35rem' }}
                onClick={() => setInspectingQuest(null)}
              >
                <X size={18} />
              </button>
            </div>

            <div style={{ overflowY: 'auto', flex: 1, paddingRight: '0.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {(inspectingQuest.questions || []).map((q, idx) => {
                const answerRecord = inspectingQuest.answers ? inspectingQuest.answers[idx] : null;
                const studentAns = answerRecord?.selected;
                const isCorrect = answerRecord?.isCorrect !== undefined ? answerRecord.isCorrect : studentAns === q.correctAnswer;

                return (
                  <div key={q.id || idx} style={{ padding: '1.15rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', backgroundColor: isCorrect ? '#F0FDF4' : '#FEF2F2' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--primary-navy)' }}>
                        Soal #{idx + 1}
                      </span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.78rem', fontWeight: 700, color: isCorrect ? 'var(--status-emerald)' : 'var(--status-brick)' }}>
                        {isCorrect ? (
                          <>
                            <Check size={14} /> Benar (Kunci: {q.correctAnswer})
                          </>
                        ) : (
                          <>
                            <XCircle size={14} /> Salah (Jawaban: {studentAns || "-"}, Kunci: {q.correctAnswer})
                          </>
                        )}
                      </span>
                    </div>

                    <div style={{ fontSize: '0.92rem', marginBottom: '0.75rem' }}>
                      <MathText text={q.question} />
                    </div>

                    <div style={{ backgroundColor: '#FFFFFF', padding: '0.75rem', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-subtle)', fontSize: '0.85rem' }}>
                      <strong>Kunci Jawaban: {q.correctAnswer}</strong>
                      <div style={{ marginTop: '0.35rem', color: 'var(--text-secondary)' }}>
                        <MathText text={(q.bestSolution || q.conceptualSolution || q.explanation || "").replace(/\*\*Metode Simpel & Efektif Sir Jevon:\*\*/gi, "**Langkah Penyelesaian Terstruktur:**")} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem', marginTop: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
              <button 
                className="btn btn-royal" 
                onClick={() => setInspectingQuest(null)}
              >
                Tutup Inspeksi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuestMonitorTab;
