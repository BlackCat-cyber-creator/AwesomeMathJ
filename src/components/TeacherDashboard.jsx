import React, { useState, useMemo } from 'react';
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
import { 
  BookOpen, 
  Send, 
  Users, 
  Sparkles, 
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
  X 
} from 'lucide-react';

export function TeacherDashboard({ onLaunchQuest, onPrintQuest, activeTab, setActiveTab, onBackToPublic, onSignOut }) {
  const [students, setStudents] = useState(getStudents());
  const [quests, setQuests] = useState(getQuests());
  
  // Curriculum browser state
  const [selectedGrade, setSelectedGrade] = useState(4);
  const [selectedChapterId, setSelectedChapterId] = useState("sd4-bab1-bilangan-cacah");
  
  // Quest Generator state - default to 5 questions
  const [targetStudentId, setTargetStudentId] = useState(students[0]?.id || "");
  const [generatorGrade, setGeneratorGrade] = useState(4);
  const [generatorChapterId, setGeneratorChapterId] = useState("sd4-bab1-bilangan-cacah");
  const [questionCount, setQuestionCount] = useState(5);
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

  // Track filter state for Grade 11 and 12 (Matematika Utama vs Tingkat Lanjut)
  const [selectedTrackFilter, setSelectedTrackFilter] = useState("ALL");

  // Grade data for syllabus
  const currentGradeData = useMemo(() => {
    return CURRICULUM_DATA.find((g) => g.grade === Number(selectedGrade)) || CURRICULUM_DATA[0];
  }, [selectedGrade]);

  // Filtered chapters for Grade 11 & 12 tracks
  const displayedChapters = useMemo(() => {
    if (!currentGradeData?.chapters) return [];
    if (currentGradeData.grade !== 11 && currentGradeData.grade !== 12) {
      return currentGradeData.chapters;
    }
    if (selectedTrackFilter === "ALL") return currentGradeData.chapters;
    return currentGradeData.chapters.filter((c) => c.track === selectedTrackFilter);
  }, [currentGradeData, selectedTrackFilter]);

  const currentChapter = useMemo(() => {
    if (!currentGradeData?.chapters?.length) return null;
    const found = displayedChapters.find((c) => c.id === selectedChapterId);
    return found || displayedChapters[0] || currentGradeData.chapters[0];
  }, [currentGradeData, displayedChapters, selectedChapterId]);

  const filteredChapterQuestions = useMemo(() => {
    return currentChapter?.questions || [];
  }, [currentChapter]);

  // Generator Grade data
  const genGradeData = useMemo(() => {
    return CURRICULUM_DATA.find((g) => g.grade === Number(generatorGrade)) || CURRICULUM_DATA[0];
  }, [generatorGrade]);

  const genChapter = useMemo(() => {
    const ch = genGradeData.chapters.find((c) => c.id === generatorChapterId);
    return ch || genGradeData.chapters[0];
  }, [genGradeData, generatorChapterId]);

  // Handle student selection change in generator -> auto-match grade
  const handleStudentChange = (e) => {
    const studentId = e.target.value;
    setTargetStudentId(studentId);
    const student = students.find((s) => s.id === studentId);
    if (student) {
      setGeneratorGrade(student.grade);
      const gradeObj = CURRICULUM_DATA.find((g) => g.grade === student.grade);
      if (gradeObj && gradeObj.chapters.length > 0) {
        setGeneratorChapterId(gradeObj.chapters[0].id);
      }
    }
  };

  // Handle Create Quest (5 questions by default)
  const handleCreateQuest = () => {
    const student = students.find((s) => s.id === targetStudentId);
    // Pick questions according to count directly from chapter questions
    const selectedQuestions = genChapter.questions.slice(0, Math.min(questionCount, genChapter.questions.length));
    
    const newQuest = createQuest({
      title: `Quest: ${genChapter.title}`,
      grade: generatorGrade,
      chapterId: genChapter.id,
      chapterTitle: genChapter.title,
      track: genChapter.track || null,
      trackLabel: genChapter.trackLabel || null,
      category: "LATIHAN",
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
    const deadlineText = quest.deadline ? `\n📅 *Tenggat Pengumpulan*: ${formatIndonesianDate(quest.deadline)}` : "";

    return `Halo *${quest.studentName}*, ini tugas latihan matematika bab *${quest.chapterTitle}*${trackInfo} dari Sir Jevon.\n\nSilakan kerjakan 5 butir soal pada link berikut:\n🔗 ${questUrl}${deadlineText}\n\nLatihan sudah dilengkapi papan cakar digital dan pembahasan simpel dari Sir Jevon. Semangat belajar! 🔥\n\nSalam hangat,\n*Sir Jevon — AwesomeMathJ*`;
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
    <div style={{ maxWidth: 1240, margin: '0 auto', padding: '1.5rem 1rem 4rem' }}>
      
      {/* Top Editorial Banner */}
      <div 
        className="editorial-card" 
        style={{ 
          padding: '1.5rem 2rem', 
          marginBottom: '1.5rem', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          gap: '1rem', 
          borderLeft: '5px solid var(--primary-navy)' 
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '1.5rem' }}>📐</span>
            <h2 style={{ color: 'var(--primary-navy)', fontSize: '1.45rem' }}>
              Teacher Command Center & CRM • Sir Jevon
            </h2>
            <span className="badge" style={{ backgroundColor: '#ECFDF5', color: '#047857', border: '1px solid #A7F3D0', fontSize: '0.72rem' }}>
              ● Autentikasi Aktif (Sir Jevon)
            </span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
            Kelola murid privat, generate PR 5-soal otomatis, distribusikan ke WhatsApp dengan 1-klik, dan pantau rekap pengerjaan *real-time*.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <button 
            id="btn-switch-to-public"
            className="btn btn-outline"
            style={{ fontSize: '0.85rem' }}
            onClick={onBackToPublic}
            title="Buka Math Handbook Publik"
          >
            <BookOpen size={16} />
            Portal Publik
          </button>
          
          <button 
            id="btn-quick-generate-banner"
            className="btn btn-royal" 
            style={{ fontSize: '0.85rem' }}
            onClick={() => setActiveTab("generator")}
          >
            <Sparkles size={16} />
            Buat PR 5 Soal
          </button>

          <button
            id="btn-teacher-logout"
            className="btn btn-subtle"
            style={{ fontSize: '0.825rem', color: 'var(--status-brick)' }}
            onClick={onSignOut}
            title="Keluar dari sesi guru"
          >
            Keluar
          </button>
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
        <button 
          id="tab-btn-syllabus"
          className={`nav-pill ${activeTab === 'syllabus' ? 'active' : ''}`}
          onClick={() => setActiveTab('syllabus')}
        >
          <BookOpen size={17} />
          Peta Kurikulum & Rumus (4–12)
        </button>
      </div>

      {/* ======================================================== */}
      {/* TAB 1: GENERATOR PR 5 SOAL & WHATSAPP DISTRIBUTION     */}
      {/* ======================================================== */}
      {activeTab === 'generator' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(340px, 460px) 1fr', gap: '1.5rem', alignItems: 'start' }}>
          
          {/* LEFT: GENERATOR CONTROLS */}
          <div className="editorial-card" style={{ padding: '1.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', color: 'var(--primary-navy)' }}>
              <Sparkles size={20} />
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
                  const grObj = CURRICULUM_DATA.find((g) => g.grade === gr);
                  if (grObj && grObj.chapters.length > 0) {
                    setGeneratorChapterId(grObj.chapters[0].id);
                  }
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
            </div>


            {/* Question Count & Deadline Date in 2 columns */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <div className="form-group">
                <label className="form-label" htmlFor="select-generator-count">
                  4. Jumlah Soal:
                </label>
                <select 
                  id="select-generator-count"
                  className="form-select"
                  value={questionCount}
                  onChange={(e) => setQuestionCount(Number(e.target.value))}
                >
                  <option value={3}>3 Butir Soal</option>
                  <option value={5}>5 Butir Soal (Standar)</option>
                </select>
              </div>

              <div className="form-group">
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
              </div>
            </div>

            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
              📅 Tenggat terpasang: <strong>{formatIndonesianDate(deadline)}</strong>
            </div>

            {/* Action to create quest */}
            <button 
              id="btn-generate-quest-confirm"
              className="btn btn-royal" 
              style={{ width: '100%', justifyContent: 'center', padding: '0.75rem' }}
              onClick={handleCreateQuest}
            >
              <Sparkles size={17} />
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
                <Sparkles size={36} color="var(--primary-blue)" style={{ margin: '0 auto 1rem', display: 'block', opacity: 0.8 }} />
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
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
                      onClick={() => {
                        setTargetStudentId(student.id);
                        setGeneratorGrade(student.grade);
                        setQuestionCount(5);
                        const gData = CURRICULUM_DATA.find((g) => g.grade === student.grade);
                        if (gData && gData.chapters.length > 0) {
                          setGeneratorChapterId(gData.chapters[0].id);
                        }
                        setActiveTab('generator');
                      }}
                    >
                      <Sparkles size={14} />
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

      {/* ======================================================== */}
      {/* TAB 3: PETA KURIKULUM & RUMUS LENGKAP (4–12)           */}
      {/* ======================================================== */}
      {activeTab === 'syllabus' && (
        <div>
          {/* Grade Selector Row */}
          <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.75rem', marginBottom: '1.25rem' }}>
            {CURRICULUM_DATA.map((gradeObj) => {
              const isSelected = Number(selectedGrade) === gradeObj.grade;
              const label = `Kelas ${gradeObj.grade} ${gradeObj.level}`;
              const phaseTag = gradeObj.phase ? `(${gradeObj.phase})` : "";

              return (
                <button
                  key={gradeObj.grade}
                  id={`btn-grade-${gradeObj.grade}`}
                  onClick={() => {
                    setSelectedGrade(gradeObj.grade);
                    if (gradeObj.chapters.length > 0) {
                      setSelectedChapterId(gradeObj.chapters[0].id);
                    }
                    setSelectedTrackFilter("ALL");
                  }}
                  className={`btn ${isSelected ? 'btn-royal' : 'btn-outline'}`}
                  style={{
                    padding: '0.5rem 0.9rem',
                    fontSize: '0.825rem',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <span>{label}</span>
                  <span style={{ opacity: 0.75, fontSize: '0.72rem' }}>{phaseTag}</span>
                </button>
              );
            })}
          </div>

          {/* Track Filter for Grade 11 & 12 */}
          {(currentGradeData.grade === 11 || currentGradeData.grade === 12) && (
            <div className="editorial-card" style={{ padding: '0.75rem 1.25rem', marginBottom: '1.25rem', backgroundColor: '#F8FAFC' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                  Filter Jurusan / Jalur:
                </span>
                <div className="nav-pill-group" style={{ margin: 0 }}>
                  <button
                    className={`nav-pill ${selectedTrackFilter === 'ALL' ? 'active' : ''}`}
                    style={{ padding: '0.35rem 0.8rem', fontSize: '0.8rem' }}
                    onClick={() => setSelectedTrackFilter('ALL')}
                  >
                    Semua ({currentGradeData.chapters.length})
                  </button>
                  <button
                    className={`nav-pill ${selectedTrackFilter === 'WAJIB' ? 'active' : ''}`}
                    style={{ padding: '0.35rem 0.8rem', fontSize: '0.8rem' }}
                    onClick={() => setSelectedTrackFilter('WAJIB')}
                  >
                    📘 Matematika Utama (Wajib)
                  </button>
                  <button
                    className={`nav-pill ${selectedTrackFilter === 'LANJUT' ? 'active' : ''}`}
                    style={{ padding: '0.35rem 0.8rem', fontSize: '0.8rem' }}
                    onClick={() => setSelectedTrackFilter('LANJUT')}
                  >
                    🔬 Matematika Tingkat Lanjut (Pilihan)
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Two-Column Syllabus Explorer */}
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 340px) 1fr', gap: '1.5rem', alignItems: 'start' }}>
            {/* Chapters List */}
            <div className="editorial-card" style={{ padding: '1.25rem' }}>
              <h3 style={{ fontSize: '1.05rem', color: 'var(--primary-navy)', marginBottom: '0.85rem' }}>
                Daftar Bab ({displayedChapters.length})
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', maxHeight: '720px', overflowY: 'auto' }}>
                {displayedChapters.map((chapter, idx) => {
                  const isSelected = currentChapter?.id === chapter.id;
                  const isLanjut = chapter.track === "LANJUT";

                  return (
                    <button
                      key={chapter.id}
                      onClick={() => setSelectedChapterId(chapter.id)}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        textAlign: 'left',
                        padding: '0.75rem 0.9rem',
                        borderRadius: 'var(--radius-sm)',
                        border: `1px solid ${isSelected ? 'var(--primary-navy)' : 'var(--border-subtle)'}`,
                        backgroundColor: isSelected ? 'var(--primary-light)' : '#FFFFFF',
                        cursor: 'pointer'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', marginBottom: '0.2rem' }}>
                        <span style={{ fontSize: '0.72rem', fontWeight: 700, color: isSelected ? 'var(--primary-navy)' : 'var(--text-muted)' }}>
                          Bab {idx + 1}
                        </span>
                        {chapter.trackLabel && (
                          <span className={`badge ${isLanjut ? 'badge-cat-hots' : 'badge-subtle'}`} style={{ fontSize: '0.62rem' }}>
                            {isLanjut ? 'Lanjut' : 'Wajib'}
                          </span>
                        )}
                      </div>
                      <span style={{ fontSize: '0.88rem', fontWeight: isSelected ? 700 : 500, color: isSelected ? 'var(--primary-navy)' : 'var(--text-primary)' }}>
                        {chapter.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Chapter Detail View */}
            {currentChapter && (
              <div className="editorial-card" style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.35rem' }}>
                      <span className="badge badge-sd">Kelas {currentGradeData.grade}</span>
                      <span className="badge badge-subtle">{currentGradeData.phase}</span>
                      {currentChapter.trackLabel && (
                        <span className="badge badge-cat-pas">{currentChapter.trackLabel}</span>
                      )}
                    </div>
                    <h2 style={{ color: 'var(--primary-navy)', fontSize: '1.4rem' }}>
                      {currentChapter.title}
                    </h2>
                  </div>

                  <button 
                    className="btn btn-royal"
                    style={{ fontSize: '0.825rem' }}
                    onClick={() => {
                      setGeneratorGrade(currentGradeData.grade);
                      setGeneratorChapterId(currentChapter.id);
                      setActiveTab('generator');
                    }}
                  >
                    <Sparkles size={15} />
                    Buat PR Bab Ini
                  </button>
                </div>

                {/* Concepts */}
                {currentChapter.summary?.coreConcepts && (
                  <div style={{ backgroundColor: '#F9FAFB', padding: '1.15rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', marginBottom: '1rem' }}>
                    <h4 style={{ fontSize: '0.925rem', color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>
                      Konsep Kunci & Pemahaman Materi:
                    </h4>
                    <ul style={{ paddingLeft: '1.25rem', margin: 0, fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                      {currentChapter.summary.coreConcepts.map((c, i) => (
                        <li key={i} style={{ marginBottom: '0.3rem' }}><MathText text={c} /></li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Formulas */}
                {currentChapter.summary?.keyFormulas && (
                  <div style={{ backgroundColor: '#FFFFFF', padding: '1.15rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-medium)', marginBottom: '1rem', maxWidth: '100%', overflow: 'hidden' }}>
                    <h4 style={{ fontSize: '0.925rem', color: 'var(--primary-navy)', marginBottom: '0.65rem' }}>
                      Kotak Rumus Inti (KaTeX):
                    </h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', maxWidth: '100%' }}>
                      {currentChapter.summary.keyFormulas.map((f, i) => (
                        <div key={i} style={{ backgroundColor: '#F8FAFC', padding: '0.75rem', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-subtle)', textAlign: 'center', minWidth: 0, maxWidth: '100%', overflowX: 'auto' }}>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>{f.label}</div>
                          <div style={{ maxWidth: '100%', overflowX: 'auto' }}>
                            <MathText text={`$$${f.formula}$$`} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tutor Tip */}
                {currentChapter.summary?.tutorTip && (
                  <div style={{ backgroundColor: '#FFFBEB', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid #FDE68A', display: 'flex', gap: '0.75rem', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                    <Lightbulb size={20} color="#D97706" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                    <div>
                      <strong style={{ fontSize: '0.85rem', color: '#92400E' }}>Metode Simpel & Efektif Tutor:</strong>
                      <div style={{ fontSize: '0.875rem', color: '#78350F' }}>
                        <MathText text={currentChapter.summary.tutorTip} />
                      </div>
                    </div>
                  </div>
                )}

                {/* Questions Preview */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--primary-navy)' }}>
                    Latihan Soal Materi Ini:
                  </h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {filteredChapterQuestions.length} Butir Soal
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {filteredChapterQuestions.map((q, qIdx) => (
                    <div key={q.id} style={{ padding: '1rem', backgroundColor: '#F9FAFB', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.825rem' }}>
                        <strong style={{ color: 'var(--primary-navy)' }}>Soal #{qIdx + 1}</strong>
                      </div>
                      <MathText text={q.question} />
                      <QuestionVisual question={q} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

export default TeacherDashboard;
