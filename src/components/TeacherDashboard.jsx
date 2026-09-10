import React, { useState, useMemo, useEffect } from 'react';
import { CURRICULUM_DATA } from '../data/curriculumData';
import { 
  getStudents, 
  addStudent, 
  updateStudent, 
  deleteStudent, 
  createQuest, 
  getQuests, 
  deleteQuest, 
  getDefaultDeadlineDate, 
  formatIndonesianDate 
} from '../utils/storage';
import { MathText } from './MathRenderer';
import { QuestionVisual } from './QuestionVisual';
import { MateriSekarangCard, SemesterBadge } from './AcademicTimeline';
import { getRecommendedChapter } from '../data/academicCalendar';

// Helper to find recommended chapter ID for a given grade based on academic calendar
function getDefaultChapterForGrade(grade) {
  const grObj = CURRICULUM_DATA.find((g) => g.grade === Number(grade));
  if (!grObj || !grObj.chapters?.length) return "sd4-bab1-bilangan-cacah";
  const rec = getRecommendedChapter(Number(grade));
  if (rec && grObj.chapters[rec.chapterIndex]) {
    return grObj.chapters[rec.chapterIndex].id;
  }
  return grObj.chapters[0].id;
}
import { 
  BookOpen, 
  Send, 
  Users, 

  Flame, 
  Clock, 
  Copy, 
  ExternalLink, 
  PlusCircle, 
  Lightbulb, 
  Printer, 
  Check, 
  Edit2, 
  Trash2, 
  Phone, 
  Eye, 
  X,
  Wand2,
  PenTool,
  ClipboardList
} from 'lucide-react';

export const PR_PACKETS = [
  { index: 1, title: "Paket 1", range: "Soal 1–5", desc: "Dasar & Konsep", fullLabel: "Paket 1 (Soal 1–5: Dasar)" },
  { index: 2, title: "Paket 2", range: "Soal 6–10", desc: "Sedang & Prosedural", fullLabel: "Paket 2 (Soal 6–10: Sedang)" },
  { index: 3, title: "Paket 3", range: "Soal 11–15", desc: "Aplikasi & Terapan", fullLabel: "Paket 3 (Soal 11–15: Terapan)" },
  { index: 4, title: "Paket 4", range: "Soal 16–20", desc: "Tantangan & Analisis", fullLabel: "Paket 4 (Soal 16–20: Tantangan)" }
];

export function TeacherDashboard({ onLaunchQuest, onPrintQuest, activeTab, setActiveTab, onBackToPublic, onSignOut }) {
  const [students, setStudents] = useState(getStudents());
  const [quests, setQuests] = useState(getQuests());
  
  // Quest Generator state - 4 segments (5 questions per packet)
  const [targetStudentId, setTargetStudentId] = useState(students[0]?.id || "");
  const [generatorGrade, setGeneratorGrade] = useState(students[0]?.grade || 4);
  const [generatorChapterId, setGeneratorChapterId] = useState(() => getDefaultChapterForGrade(students[0]?.grade || 4));
  const [selectedPacket, setSelectedPacket] = useState(1);
  const [deadline, setDeadline] = useState(getDefaultDeadlineDate());
  const [copiedNotification, setCopiedNotification] = useState(false);
  const [createdQuestInfo, setCreatedQuestInfo] = useState(null);

  // New Student modal/form state
  const [showAddStudent, setShowAddStudent] = useState(false);
  const [newStudentName, setNewStudentName] = useState("");
  const [newStudentGrade, setNewStudentGrade] = useState(4);
  const [newStudentParentPhone, setNewStudentParentPhone] = useState("");
  const [newStudentNotes, setNewStudentNotes] = useState("");

  // Edit Student modal state
  const [editingStudent, setEditingStudent] = useState(null);

  // Inspecting Quest Answers Modal state
  const [inspectingQuest, setInspectingQuest] = useState(null);

  // Automatically sync generatorGrade and recommended chapter whenever the target student changes
  useEffect(() => {
    if (targetStudentId) {
      const student = students.find((s) => s.id === targetStudentId);
      if (student) {
        setGeneratorGrade(student.grade);
        setGeneratorChapterId(getDefaultChapterForGrade(student.grade));
      }
    }
  }, [targetStudentId, students]);

  // Generator Grade data
  const genGradeData = useMemo(() => {
    return CURRICULUM_DATA.find((g) => g.grade === Number(generatorGrade)) || CURRICULUM_DATA[0];
  }, [generatorGrade]);

  const genChapter = useMemo(() => {
    const ch = genGradeData.chapters.find((c) => c.id === generatorChapterId);
    return ch || genGradeData.chapters[0];
  }, [genGradeData, generatorChapterId]);

  // Packets already assigned to this target student for this chapter
  const assignedPacketsForTarget = useMemo(() => {
    if (!targetStudentId || !generatorChapterId) return [];
    return quests
      .filter((q) => q.studentId === targetStudentId && q.chapterId === generatorChapterId)
      .map((q) => q.packetIndex || (q.title && q.title.match(/Paket (\d)/) ? Number(q.title.match(/Paket (\d)/)[1]) : null))
      .filter(Boolean);
  }, [targetStudentId, generatorChapterId, quests]);

  // Recommended next packet (first unassigned packet 1..4)
  const recommendedPacketForTarget = useMemo(() => {
    for (let p = 1; p <= 4; p++) {
      if (!assignedPacketsForTarget.includes(p)) return p;
    }
    return 1;
  }, [assignedPacketsForTarget]);

  // Auto-sync selectedPacket to recommended packet when target student or chapter changes
  useEffect(() => {
    setSelectedPacket(recommendedPacketForTarget);
  }, [recommendedPacketForTarget]);

  // Recommended chapter for current generator grade according to academic calendar
  const recChapterForGen = useMemo(() => {
    const rec = getRecommendedChapter(generatorGrade);
    if (!rec || !genGradeData?.chapters?.[rec.chapterIndex]) return null;
    const ch = genGradeData.chapters[rec.chapterIndex];
    return {
      ...rec,
      chapter: ch,
      title: ch.title,
      id: ch.id,
      babNumber: rec.chapterIndex + 1,
      timeLabel: rec.pacing?.label || "Bulan Ini"
    };
  }, [generatorGrade, genGradeData]);

  // Handle student selection change in generator -> auto-match grade and recommended chapter
  const handleStudentChange = (e) => {
    const studentId = e.target.value;
    setTargetStudentId(studentId);
    const student = students.find((s) => s.id === studentId);
    if (student) {
      setGeneratorGrade(student.grade);
      setGeneratorChapterId(getDefaultChapterForGrade(student.grade));
    }
  };

  // Quick-assign homework for a student (auto-fills student, grade, and recommended chapter)
  const handleAssignToStudent = (student, specificChapterId = null) => {
    setTargetStudentId(student.id);
    setGeneratorGrade(student.grade);
    if (specificChapterId) {
      setGeneratorChapterId(specificChapterId);
    } else {
      setGeneratorChapterId(getDefaultChapterForGrade(student.grade));
    }
    setActiveTab('generator');
  };

  // Handle Create Quest (5 questions according to selected Paket)
  const handleCreateQuest = () => {
    const student = students.find((s) => s.id === targetStudentId);
    const startIdx = (selectedPacket - 1) * 5;
    const endIdx = startIdx + 5;
    const allQuestions = genChapter.questions || [];
    const selectedQuestions = allQuestions.slice(startIdx, endIdx);
    const actualEndIdx = Math.min(endIdx, allQuestions.length);

    const newQuest = createQuest({
      title: `Quest: ${genChapter.title} — Paket ${selectedPacket} (Soal ${startIdx + 1}–${actualEndIdx})`,
      grade: generatorGrade,
      chapterId: genChapter.id,
      chapterTitle: genChapter.title,
      packetIndex: selectedPacket,
      packetRange: `${startIdx + 1}–${actualEndIdx}`,
      track: genChapter.track || null,
      trackLabel: genChapter.trackLabel || null,
      category: "PR_PAKET",
      studentId: student?.id || "guest",
      studentName: student?.name || "Siswa",
      deadline: deadline || getDefaultDeadlineDate(),
      questions: selectedQuestions,
      tutorTip: genChapter.summary?.tutorTip
    });

    setQuests(getQuests());
    setCreatedQuestInfo(newQuest);
  };

  // Handle Add New Student
  const handleAddStudentSubmit = (e) => {
    e.preventDefault();
    if (!newStudentName.trim()) return;

    const level = newStudentGrade <= 6 ? "SD" : newStudentGrade <= 9 ? "SMP" : "SMA";
    const added = addStudent({
      name: newStudentName.trim(),
      grade: Number(newStudentGrade),
      level,
      parentPhone: newStudentParentPhone.trim(),
      notes: newStudentNotes.trim()
    });

    const updated = getStudents();
    setStudents(updated);
    setTargetStudentId(added.id);
    setShowAddStudent(false);
    setNewStudentName("");
    setNewStudentNotes("");
    setNewStudentParentPhone("");
  };

  // Handle Edit Student Submit
  const handleEditStudentSubmit = (e) => {
    e.preventDefault();
    if (!editingStudent || !editingStudent.name.trim()) return;

    const level = editingStudent.grade <= 6 ? "SD" : editingStudent.grade <= 9 ? "SMP" : "SMA";
    updateStudent({
      ...editingStudent,
      grade: Number(editingStudent.grade),
      level
    });

    setStudents(getStudents());
    setEditingStudent(null);
  };

  // Handle Delete Student
  const handleDeleteStudent = (studentId, studentName) => {
    if (window.confirm(`Apakah Anda yakin ingin menghapus data murid "${studentName}" dari CRM?`)) {
      deleteStudent(studentId);
      setStudents(getStudents());
    }
  };

  // Handle Delete Quest
  const handleDeleteQuest = (questId) => {
    if (window.confirm("Hapus penugasan PR ini dari riwayat?")) {
      deleteQuest(questId);
      setQuests(getQuests());
    }
  };

  // Generate WhatsApp Message text for Sir Jevon
  const getWhatsAppShareText = (quest) => {
    const origin = window.location.origin;
    const questUrl = `${origin}/?questId=${quest.id}`;
    const trackInfo = quest.trackLabel ? ` [${quest.trackLabel}]` : "";
    const packetInfo = quest.packetIndex ? `\n🎯 *Paket PR*: Paket ${quest.packetIndex} (Soal ${quest.packetRange || '5 Soal'})` : "";
    const deadlineText = quest.deadline ? `\n📅 *Tenggat Pengumpulan*: ${formatIndonesianDate(quest.deadline)}` : "";

    return `Halo *${quest.studentName}*, ini tugas latihan matematika bab *${quest.chapterTitle}*${trackInfo} dari Sir Jevon.${packetInfo}\n\nSilakan kerjakan 5 butir soal pada link berikut:\n🔗 ${questUrl}${deadlineText}\n\nLatihan sudah dilengkapi papan cakar digital dan pembahasan simpel dari Sir Jevon. Semangat belajar! 🔥\n\nSalam hangat,\n*Sir Jevon — AwesomeMathJ*`;
  };

  const copyWhatsAppMessage = (quest) => {
    const text = getWhatsAppShareText(quest);
    navigator.clipboard.writeText(text);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 3000);
  };

  const openWhatsAppWeb = (quest) => {
    const text = encodeURIComponent(getWhatsAppShareText(quest));
    const student = students.find((s) => s.id === quest.studentId);
    let cleanPhone = (student?.parentPhone || "").replace(/\D/g, '');
    if (cleanPhone.startsWith('0')) {
      cleanPhone = '62' + cleanPhone.slice(1);
    }
    
    let url = `https://api.whatsapp.com/send?text=${text}`;
    if (cleanPhone) {
      url = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${text}`;
    }
    window.open(url, '_blank');
  };

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
    <div className="handbook-container">
      
      {/* Top Editorial Banner */}
      <div 
        className="editorial-card" 
        style={{ 
          padding: '1.25rem 1.75rem', 
          marginBottom: '1.5rem', 
          borderLeft: '5px solid var(--primary-navy)' 
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '1.5rem' }}>📐</span>
          <h2 style={{ color: 'var(--primary-navy)', fontSize: '1.45rem' }}>
            Studio Guru Matematika • Sir Jevon
          </h2>
          <span className="badge" style={{ backgroundColor: '#ECFDF5', color: '#047857', border: '1px solid #A7F3D0', fontSize: '0.72rem' }}>
            ● Sesi Aktif
          </span>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', margin: 0 }}>
          Kelola murid privat, generate PR 5-soal otomatis, distribusikan ke WhatsApp dengan 1-klik, dan pantau rekap pengerjaan *real-time*.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
          <SemesterBadge />
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            Kalender Akademik Kurikulum Merdeka • Rekomendasi materi aktif
          </span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="nav-pill-group" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
        <button 
          id="tab-btn-generator"
          className={`nav-pill ${activeTab === 'generator' ? 'active' : ''}`}
          onClick={() => setActiveTab('generator')}
        >
          <Send size={17} />
          Generator PR 5 Soal & WhatsApp
        </button>
        <button 
          id="tab-btn-students"
          className={`nav-pill ${activeTab === 'students' ? 'active' : ''}`}
          onClick={() => setActiveTab('students')}
        >
          <Users size={17} />
          CRM Murid Privat ({students.length})
        </button>
      </div>

      {/* ======================================================== */}
      {/* TAB 1: GENERATOR PR 5 SOAL & WHATSAPP DISTRIBUTION     */}
      {/* ======================================================== */}
      {activeTab === 'generator' && (
        <div className="teacher-generator-grid">
          
          {/* LEFT: GENERATOR CONTROLS */}
          <div className="editorial-card" style={{ padding: '1.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', color: 'var(--primary-navy)' }}>
              <Wand2 size={20} />
              <h3 style={{ fontSize: '1.2rem' }}>Susun PR Otomatis (5 Soal)</h3>
            </div>

            {/* Target Student Select */}
            <div className="form-group">
              <label className="form-label" htmlFor="select-generator-student">
                1. Pilih Murid Privat:
              </label>
              <select 
                id="select-generator-student"
                className="form-select"
                value={targetStudentId}
                onChange={handleStudentChange}
              >
                {students.map((std) => (
                  <option key={std.id} value={std.id}>
                    {std.name} — Kelas {std.grade} {std.level} ({std.parentPhone || "No WA"})
                  </option>
                ))}
              </select>
            </div>

            {/* Curriculum Grade Select */}
            <div className="form-group">
              <label className="form-label" htmlFor="select-generator-grade">
                2. Tingkat Kelas:
              </label>
              <select 
                id="select-generator-grade"
                className="form-select"
                value={generatorGrade}
                onChange={(e) => {
                  const gr = Number(e.target.value);
                  setGeneratorGrade(gr);
                  setGeneratorChapterId(getDefaultChapterForGrade(gr));
                }}
              >
                {CURRICULUM_DATA.map((g) => (
                  <option key={g.grade} value={g.grade}>
                    Kelas {g.grade} {g.level} ({g.phase})
                  </option>
                ))}
              </select>
            </div>

            {/* Chapter Select */}
            <div className="form-group">
              <label className="form-label" htmlFor="select-generator-chapter">
                3. Bab Kurikulum:
              </label>
              <select 
                id="select-generator-chapter"
                className="form-select"
                value={generatorChapterId}
                onChange={(e) => setGeneratorChapterId(e.target.value)}
              >
                {genGradeData.chapters.map((ch) => {
                  const trackText = ch.trackLabel ? ` [${ch.trackLabel}]` : "";
                  return (
                    <option key={ch.id} value={ch.id}>
                      {ch.title}{trackText} ({ch.questions?.length || 0} soal)
                    </option>
                  );
                })}
              </select>

              {/* Smart Academic Calendar Recommendation Badge */}
              {recChapterForGen && (
                <div 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between', 
                    padding: '0.55rem 0.85rem', 
                    borderRadius: 'var(--radius-sm)', 
                    backgroundColor: '#F0FDF4', 
                    border: '1px solid #BBF7D0', 
                    marginTop: '0.5rem', 
                    fontSize: '0.8rem',
                    gap: '0.5rem',
                    flexWrap: 'wrap'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#166534', minWidth: 0 }}>
                    <Clock size={14} style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '0.78rem' }}>
                      <strong>Rekomendasi Kalender ({recChapterForGen.timeLabel}):</strong> {recChapterForGen.title.startsWith('Bab') ? recChapterForGen.title : `Bab ${recChapterForGen.babNumber}: ${recChapterForGen.title}`}
                    </span>
                  </div>
                  {generatorChapterId !== recChapterForGen.id ? (
                    <button
                      type="button"
                      className="btn btn-outline"
                      style={{ padding: '0.2rem 0.6rem', fontSize: '0.72rem', borderColor: '#16a34a', color: '#16a34a', backgroundColor: '#FFFFFF', fontWeight: 600 }}
                      onClick={() => setGeneratorChapterId(recChapterForGen.id)}
                    >
                      Gunakan Bab Ini
                    </button>
                  ) : (
                    <span style={{ fontSize: '0.72rem', color: '#166534', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                      ✓ Bab Ini Terpilih
                    </span>
                  )}
                </div>
              )}
            </div>


            {/* 4. Segment / Paket Selection (5 questions per packet) */}
            <div className="form-group" style={{ marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem', flexWrap: 'wrap', gap: '0.25rem' }}>
                <label className="form-label" style={{ marginBottom: 0 }}>
                  4. Pilih Paket PR (5 Soal per Segmen):
                </label>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Total 20 Soal Kurikulum Resmi
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.5rem' }}>
                {PR_PACKETS.map((pkt) => {
                  const isSelected = selectedPacket === pkt.index;
                  const isAlreadyAssigned = assignedPacketsForTarget.includes(pkt.index);
                  const isRecommended = recommendedPacketForTarget === pkt.index;

                  return (
                    <button
                      key={pkt.index}
                      type="button"
                      id={`btn-select-packet-${pkt.index}`}
                      onClick={() => setSelectedPacket(pkt.index)}
                      style={{
                        textAlign: 'left',
                        padding: '0.65rem 0.75rem',
                        borderRadius: 'var(--radius-sm)',
                        border: isSelected ? '2px solid var(--primary-blue)' : '1px solid var(--border-subtle)',
                        backgroundColor: isSelected ? 'var(--primary-light)' : '#FFFFFF',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                        position: 'relative'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.2rem' }}>
                        <strong style={{ fontSize: '0.85rem', color: isSelected ? 'var(--primary-navy)' : 'var(--text-primary)' }}>
                          {pkt.title}
                        </strong>
                        {isAlreadyAssigned && (
                          <span title="Sudah pernah ditugaskan" style={{ fontSize: '0.75rem', color: 'var(--status-emerald)', fontWeight: 700 }}>
                            ✓ Diberikan
                          </span>
                        )}
                        {isRecommended && !isAlreadyAssigned && (
                          <span title="Rekomendasi Paket Berikutnya" style={{ fontSize: '0.72rem', color: '#B45309', fontWeight: 600 }}>
                            ⭐ Rekomendasi
                          </span>
                        )}
                      </div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)' }}>
                        {pkt.range}
                      </div>
                      <div style={{ fontSize: '0.68rem', color: isSelected ? 'var(--primary-blue)' : 'var(--text-muted)', marginTop: '0.2rem' }}>
                        {pkt.desc}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 5. Deadline Date */}
            <div className="form-group" style={{ marginBottom: '1.25rem' }}>
              <label className="form-label" htmlFor="input-generator-deadline">
                5. Tenggat (Deadline):
              </label>
              <input 
                id="input-generator-deadline"
                type="date"
                className="form-input"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                📅 Tenggat terpasang: <strong>{formatIndonesianDate(deadline)}</strong>
              </div>
            </div>

            {/* Action to create quest */}
            <button 
              id="btn-generate-quest-confirm"
              className="btn btn-royal" 
              style={{ width: '100%', justifyContent: 'center', padding: '0.75rem' }}
              onClick={handleCreateQuest}
            >
              <Wand2 size={17} />
              Generate Paket PR Sekarang
            </button>
          </div>

          {/* RIGHT: QUEST DISTRIBUTION PREVIEW */}
          <div>
            {createdQuestInfo ? (
              <div className="editorial-card" style={{ padding: '1.75rem', borderTop: '4px solid var(--status-emerald)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <span className="badge badge-cat-uh" style={{ marginBottom: '0.35rem' }}>
                      Paket PR Berhasil Dibuat
                    </span>
                    <h3 style={{ fontSize: '1.35rem', color: 'var(--primary-navy)' }}>
                      {createdQuestInfo.title}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                      Ditugaskan untuk: <strong>{createdQuestInfo.studentName}</strong> • Tenggat: <strong>{formatIndonesianDate(createdQuestInfo.deadline)}</strong>
                    </p>
                  </div>
                </div>

                {/* WhatsApp Message Preview Box */}
                <div style={{ backgroundColor: '#F0FDF4', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid #BBF7D0', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#166534', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                    <Phone size={15} />
                    Format Pesan WhatsApp Resmi Sir Jevon:
                  </div>
                  <pre 
                    style={{ 
                      whiteSpace: 'pre-wrap', 
                      fontFamily: 'var(--font-editorial)', 
                      fontSize: '0.85rem', 
                      color: '#14532D', 
                      margin: 0,
                      lineHeight: 1.55 
                    }}
                  >
                    {getWhatsAppShareText(createdQuestInfo)}
                  </pre>
                </div>

                {/* 1-Click Action Buttons */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
                  <button 
                    id="btn-send-wa"
                    className="btn btn-royal"
                    style={{ backgroundColor: '#16A34A', borderColor: '#15803D', justifyContent: 'center' }}
                    onClick={() => openWhatsAppWeb(createdQuestInfo)}
                  >
                    <Send size={16} />
                    Kirim PR via WhatsApp
                  </button>

                  <button 
                    id="btn-copy-wa"
                    className="btn btn-outline"
                    style={{ justifyContent: 'center' }}
                    onClick={() => copyWhatsAppMessage(createdQuestInfo)}
                  >
                    {copiedNotification ? (
                      <>
                        <Check size={16} color="var(--status-emerald)" />
                        Teks Disalin!
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        Salin Pesan WA & Link
                      </>
                    )}
                  </button>

                  <button 
                    id="btn-preview-quest-direct"
                    className="btn btn-outline"
                    style={{ justifyContent: 'center' }}
                    onClick={() => onLaunchQuest(createdQuestInfo.id)}
                  >
                    <ExternalLink size={16} />
                    Uji Pengerjaan Siswa
                  </button>

                  <button 
                    id="btn-print-quest-worksheet"
                    className="btn btn-outline"
                    style={{ justifyContent: 'center' }}
                    onClick={() => onPrintQuest(createdQuestInfo)}
                  >
                    <Printer size={16} />
                    Cetak Lembar Kerja A4
                  </button>
                </div>

                {/* Selected Questions Preview */}
                <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
                  <h4 style={{ fontSize: '0.95rem', color: 'var(--primary-navy)', marginBottom: '0.75rem' }}>
                    Daftar {createdQuestInfo.questions.length} Butir Soal Terpilih:
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {createdQuestInfo.questions.map((q, idx) => (
                      <div key={q.id} style={{ padding: '0.85rem', backgroundColor: '#F9FAFB', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', fontSize: '0.88rem' }}>
                        <div style={{ fontWeight: 600, marginBottom: '0.35rem', color: 'var(--primary-navy)' }}>
                          Soal Latihan #{idx + 1}
                        </div>
                        <MathText text={q.question} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="editorial-card" style={{ padding: '3.5rem 2rem', textAlign: 'center' }}>
                <ClipboardList size={36} color="var(--primary-blue)" style={{ margin: '0 auto 1rem', display: 'block', opacity: 0.8 }} />
                <h3 style={{ fontSize: '1.2rem', color: 'var(--primary-navy)', marginBottom: '0.4rem' }}>
                  Belum Ada Paket PR yang Dibuat
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: 460, margin: '0 auto' }}>
                  Pilih murid dan bab kurikulum di formulir sebelah kiri, lalu tekan <strong>"Generate Paket PR Sekarang"</strong> untuk membuat link penugasan WhatsApp otomatis.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 2: CRM MURID PRIVAT & SUBMISSION TRACKER            */}
      {/* ======================================================== */}
      {activeTab === 'students' && (
        <div>
          {/* CRM Header Actions */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)' }}>
                Manajemen Data Murid Privat (CRM)
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Total {students.length} siswa aktif bimbingan Sir Jevon.
              </p>
            </div>

            <button 
              id="btn-open-add-student"
              className="btn btn-royal" 
              onClick={() => setShowAddStudent(!showAddStudent)}
            >
              <PlusCircle size={17} />
              {showAddStudent ? "Tutup Formulir" : "Tambah Siswa Baru"}
            </button>
          </div>

          {/* Form Tambah Siswa */}
          {showAddStudent && (
            <form onSubmit={handleAddStudentSubmit} className="editorial-card" style={{ padding: '1.5rem', marginBottom: '1.5rem', backgroundColor: '#F8FAFC' }}>
              <h4 style={{ fontSize: '1.05rem', marginBottom: '1rem', color: 'var(--primary-navy)' }}>
                Formulir Pendaftaran Murid Baru:
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="input-new-student-name">Nama Siswa:</label>
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
                  <label className="form-label" htmlFor="select-new-student-grade">Jenjang Kelas:</label>
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
                  <label className="form-label" htmlFor="input-new-student-phone">No. WhatsApp (Ortu/Siswa):</label>
                  <input 
                    id="input-new-student-phone"
                    type="tel" 
                    className="form-input" 
                    placeholder="08123456789"
                    value={newStudentParentPhone}
                    onChange={(e) => setNewStudentParentPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="input-new-student-notes">Catatan Materi / Target Belajar:</label>
                <input 
                  id="input-new-student-notes"
                  type="text" 
                  className="form-input" 
                  placeholder="Contoh: Perlu diperkuat di materi pecahan campuran & FPB."
                  value={newStudentNotes}
                  onChange={(e) => setNewStudentNotes(e.target.value)}
                />
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
            {students.map((student) => {
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
                          {student.parentPhone && (
                            <a 
                              href={`https://api.whatsapp.com/send?phone=${student.parentPhone.replace(/\D/g, '')}`} 
                              target="_blank" 
                              rel="noreferrer"
                              style={{ fontSize: '0.78rem', color: 'var(--primary-blue)', textDecoration: 'none' }}
                            >
                              WA: {student.parentPhone}
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Streak Badge */}
                      <div className="badge badge-streak" style={{ padding: '0.35rem 0.75rem' }}>
                        <Flame size={16} className="flame-animated" />
                        <strong>{student.streak} Hari Streak</strong>
                      </div>
                    </div>

                    {/* Academic Calendar: Materi Sekarang */}
                    {(() => {
                      const gData = CURRICULUM_DATA.find(g => g.grade === student.grade);
                      if (gData) {
                        return (
                          <MateriSekarangCard 
                            grade={student.grade} 
                            chapters={gData.chapters} 
                            compact={true} 
                            onAssign={(info) => handleAssignToStudent(student, info.chapterId)}
                          />
                        );
                      }
                      return null;
                    })()}

                    {/* Latest Quest Status */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Status Terakhir:</span>
                      <span className={`badge ${latestStatus.badgeClass}`} style={{ fontSize: '0.72rem' }}>
                        {latestStatus.label}
                      </span>
                    </div>

                    {/* Notes */}
                    {student.notes && (
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', backgroundColor: '#F9FAFB', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)', marginBottom: '1rem', border: '1px solid var(--border-subtle)' }}>
                        📝 {student.notes}
                      </p>
                    )}

                    {/* Stats */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem', marginBottom: '1rem' }}>
                      <div>Total XP: <strong style={{ color: 'var(--primary-blue)' }}>{student.totalXp || 0} XP</strong></div>
                      <div>PR Selesai: <strong style={{ color: 'var(--status-emerald)' }}>{completedQuests.length} / {studentQuests.length}</strong></div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.85rem' }}>
                    <button 
                      id={`btn-assign-pr-${student.id}`}
                      className="btn btn-royal" 
                      style={{ flex: 1, fontSize: '0.825rem', justifyContent: 'center' }}
                      onClick={() => handleAssignToStudent(student)}
                      title="Susun PR 5 soal untuk siswa ini (otomatis bab kalender)"
                    >
                      <PenTool size={14} />
                      Buat PR 5 Soal
                    </button>

                    <button
                      id={`btn-edit-student-${student.id}`}
                      className="btn btn-outline"
                      style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}
                      title="Edit Data Siswa"
                      onClick={() => setEditingStudent(student)}
                    >
                      <Edit2 size={15} />
                    </button>

                    <button
                      id={`btn-delete-student-${student.id}`}
                      className="btn btn-outline"
                      style={{ padding: '0.5rem', color: 'var(--status-brick)', borderColor: 'var(--status-brick-border)' }}
                      title="Hapus Siswa"
                      onClick={() => handleDeleteStudent(student.id, student.name)}
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ======================================================== */}
          {/* LIVE SUBMISSION TRACKER TABLE                            */}
          {/* ======================================================== */}
          <div className="editorial-card" style={{ padding: '1.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
              <div>
                <h4 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-navy)' }}>
                  <Clock size={19} />
                  Live Submission Tracker & Rekap PR Real-Time
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Memantau status pengerjaan, skor evaluasi, dan tenggat waktu tugas murid.
                </p>
              </div>

              <span className="badge badge-subtle">
                Total {quests.length} Penugasan
              </span>
            </div>

            {quests.length === 0 ? (
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Belum ada penugasan PR.</p>
            ) : (
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--border-medium)', color: 'var(--text-primary)', backgroundColor: '#F9FAFB' }}>
                      <th style={{ padding: '0.75rem' }}>Siswa</th>
                      <th style={{ padding: '0.75rem' }}>Materi Bab</th>
                      <th style={{ padding: '0.75rem' }}>Tenggat</th>
                      <th style={{ padding: '0.75rem' }}>Status Pengerjaan</th>
                      <th style={{ padding: '0.75rem' }}>Skor Akhir</th>
                      <th style={{ padding: '0.75rem', textAlign: 'center' }}>Aksi Guru</th>
                    </tr>
                  </thead>
                  <tbody>
                    {quests.map((q) => {
                      const isDone = q.status === "completed";
                      const isInProgress = q.status === "in_progress";

                      return (
                        <tr key={q.id} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                          <td style={{ padding: '0.75rem', fontWeight: 600, color: 'var(--primary-navy)' }}>
                            {q.studentName}
                          </td>
                          <td style={{ padding: '0.75rem', color: 'var(--text-secondary)' }}>
                            Kelas {q.grade} - {q.chapterTitle}
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
                            {q.lastScore !== undefined ? (
                              <strong style={{ color: q.lastScore >= 70 ? 'var(--status-emerald)' : 'var(--status-brick)' }}>
                                {q.lastScore} / 100
                              </strong>
                            ) : (
                              <span style={{ color: 'var(--text-muted)' }}>-</span>
                            )}
                          </td>
                          <td style={{ padding: '0.75rem', textAlign: 'center' }}>
                            <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'center' }}>
                              <button 
                                id={`btn-open-quest-table-${q.id}`}
                                className="btn btn-outline"
                                style={{ padding: '0.35rem 0.65rem', fontSize: '0.78rem' }}
                                title="Buka Uji Pengerjaan Langsung"
                                onClick={() => onLaunchQuest(q.id)}
                              >
                                <ExternalLink size={13} />
                                Uji
                              </button>
                              
                              <button 
                                className="btn btn-outline"
                                style={{ padding: '0.35rem 0.65rem', fontSize: '0.78rem' }}
                                title="Lihat Rekap Jawaban"
                                onClick={() => setInspectingQuest(q)}
                              >
                                <Eye size={13} />
                              </button>

                              <button 
                                className="btn btn-outline"
                                style={{ padding: '0.35rem 0.65rem', fontSize: '0.78rem' }}
                                title="Cetak Worksheet A4"
                                onClick={() => onPrintQuest(q)}
                              >
                                <Printer size={13} />
                              </button>

                              <button
                                className="btn btn-subtle"
                                style={{ padding: '0.35rem 0.65rem', fontSize: '0.78rem', color: 'var(--status-brick)' }}
                                title="Hapus Tugas Ini"
                                onClick={() => handleDeleteQuest(q.id)}
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

          {/* EDIT STUDENT MODAL */}
          {editingStudent && (
            <div 
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(17, 24, 39, 0.6)',
                zIndex: 100,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem'
              }}
            >
              <div 
                className="editorial-card"
                style={{
                  width: '100%',
                  maxWidth: 480,
                  padding: '2rem',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--primary-navy)' }}>
                    Edit Data Murid: {editingStudent.name}
                  </h3>
                  <button onClick={() => setEditingStudent(null)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                    <X size={20} color="var(--text-muted)" />
                  </button>
                </div>

                <form onSubmit={handleEditStudentSubmit}>
                  <div className="form-group">
                    <label className="form-label">Nama Siswa:</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      value={editingStudent.name}
                      onChange={(e) => setEditingStudent({ ...editingStudent, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Jenjang Kelas:</label>
                    <select 
                      className="form-select"
                      value={editingStudent.grade}
                      onChange={(e) => setEditingStudent({ ...editingStudent, grade: Number(e.target.value) })}
                    >
                      {[4, 5, 6, 7, 8, 9, 10, 11, 12].map((g) => (
                        <option key={g} value={g}>Kelas {g} ({g <= 6 ? 'SD' : g <= 9 ? 'SMP' : 'SMA'})</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">No. WhatsApp (Ortu/Siswa):</label>
                    <input 
                      type="tel" 
                      className="form-input" 
                      value={editingStudent.parentPhone || ""}
                      onChange={(e) => setEditingStudent({ ...editingStudent, parentPhone: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Catatan Belajar / Kelemahan:</label>
                    <textarea 
                      className="form-input" 
                      rows={3}
                      value={editingStudent.notes || ""}
                      onChange={(e) => setEditingStudent({ ...editingStudent, notes: e.target.value })}
                    />
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1rem' }}>
                    <button type="button" className="btn btn-outline" onClick={() => setEditingStudent(null)}>
                      Batal
                    </button>
                    <button type="submit" className="btn btn-royal">
                      Simpan Perubahan
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* INSPECTING QUEST MODAL */}
          {inspectingQuest && (
            <div 
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(17, 24, 39, 0.65)',
                zIndex: 100,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem'
              }}
            >
              <div 
                className="editorial-card"
                style={{
                  width: '100%',
                  maxWidth: 680,
                  maxHeight: '85vh',
                  overflowY: 'auto',
                  padding: '2rem',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                  <div>
                    <span className="badge badge-cat-uh" style={{ marginBottom: '0.35rem' }}>
                      Detail Evaluasi PR Siswa
                    </span>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)' }}>
                      {inspectingQuest.studentName} — {inspectingQuest.chapterTitle}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      Nilai: <strong style={{ color: (inspectingQuest.lastScore || 0) >= 70 ? 'var(--status-emerald)' : 'var(--status-brick)' }}>{inspectingQuest.lastScore !== undefined ? `${inspectingQuest.lastScore}/100` : "Belum selesai"}</strong> • Tenggat: {formatIndonesianDate(inspectingQuest.deadline)}
                    </p>
                  </div>
                  <button onClick={() => setInspectingQuest(null)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                    <X size={20} color="var(--text-muted)" />
                  </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {inspectingQuest.questions.map((q, idx) => {
                    const ans = inspectingQuest.answers?.[idx];
                    return (
                      <div key={q.id || idx} style={{ padding: '1rem', backgroundColor: '#F9FAFB', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.85rem' }}>
                          <strong style={{ color: 'var(--primary-navy)' }}>Soal #{idx + 1}</strong>
                          {ans ? (
                            <span className={`badge ${ans.isCorrect ? 'badge-cat-uh' : 'badge-cat-hots'}`} style={{ fontSize: '0.72rem' }}>
                              {ans.isCorrect ? "✓ Jawaban Benar" : "✗ Jawaban Salah"} (Pilihan Siswa: {ans.selected}, Kunci: {q.correctAnswer})
                            </span>
                          ) : (
                            <span className="badge badge-subtle" style={{ fontSize: '0.72rem' }}>Kunci: {q.correctAnswer}</span>
                          )}
                        </div>
                        <div style={{ fontSize: '0.925rem', marginBottom: '0.65rem' }}>
                          <MathText text={q.question} />
                        </div>
                        <div style={{ fontSize: '0.825rem', color: '#14532D', backgroundColor: '#F0FDF4', padding: '0.75rem', borderRadius: 'var(--radius-xs)', border: '1px solid #BBF7D0' }}>
                          <strong>💡 Pembahasan Soal:</strong>
                          <div style={{ marginTop: '0.25rem' }}>
                            <MathText text={q.bestSolution || q.explanation} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div style={{ marginTop: '1.5rem', textAlign: 'right' }}>
                  <button className="btn btn-royal" onClick={() => setInspectingQuest(null)}>
                    Tutup Rekap
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      )}

    </div>
  );
}

export default TeacherDashboard;
