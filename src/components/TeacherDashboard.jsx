import React, { useState, useMemo, useEffect, useRef } from 'react';
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
  formatIndonesianDate,
  exportAllData,
  importAllData,
  resetToDefaultDemoData,
  saveStudents,
  saveQuests
} from '../utils/storage';
import {
  subscribeStudents,
  addStudentCloud,
  updateStudentCloud,
  deleteStudentCloud,
  subscribeQuests,
  createQuestCloud,
  deleteQuestCloud,
  migrateLocalDataToCloud
} from '../firebase/firestore';
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
  History,
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
  ClipboardList,
  Download,
  Upload,
  RotateCcw,
  Search,
  Filter,
  School,
  Share2,
  CheckCircle2,
  AlertCircle,
  Database,
  Cloud,
  CloudCheck,
  RefreshCw,
  LogOut,
  Sparkles
} from 'lucide-react';

export const PR_PACKETS = [
  { index: 1, title: "Paket 1", range: "Soal 1–5", desc: "Dasar & Konsep", fullLabel: "Paket 1 (Soal 1–5: Dasar)" },
  { index: 2, title: "Paket 2", range: "Soal 6–10", desc: "Sedang & Prosedural", fullLabel: "Paket 2 (Soal 6–10: Sedang)" },
  { index: 3, title: "Paket 3", range: "Soal 11–15", desc: "Aplikasi & Terapan", fullLabel: "Paket 3 (Soal 11–15: Terapan)" },
  { index: 4, title: "Paket 4", range: "Soal 16–20", desc: "Tantangan & Analisis", fullLabel: "Paket 4 (Soal 16–20: Tantangan)" }
];

export function TeacherDashboard({ onLaunchQuest, onPrintQuest, activeTab, setActiveTab, onBackToPublic, onSignOut, currentTeacher }) {
  const [students, setStudents] = useState(getStudents());
  const [quests, setQuests] = useState(getQuests());
  
  // Cloud Firestore state & synchronization
  const [isCloudConnected, setIsCloudConnected] = useState(!!currentTeacher?.uid && currentTeacher.uid !== "teacher-offline");
  const [isSyncingCloud, setIsSyncingCloud] = useState(false);
  const [syncCloudSuccess, setSyncCloudSuccess] = useState(false);
  const [syncCloudError, setSyncCloudError] = useState(null);

  // Real-time Firestore synchronization for students and quests
  useEffect(() => {
    const teacherId = (currentTeacher?.uid && currentTeacher.uid !== "teacher-offline")
      ? currentTeacher.uid
      : "sirjevon";

    setIsCloudConnected(true);

    // Subscribe to Students
    const unsubStudents = subscribeStudents(
      teacherId,
      (cloudStudents) => {
        if (cloudStudents && cloudStudents.length > 0) {
          setStudents(cloudStudents);
          saveStudents(cloudStudents);
        } else {
          // If cloud database is empty, migrate default local students to cloud automatically
          const localStudents = getStudents();
          if (localStudents && localStudents.length > 0) {
            migrateLocalDataToCloud(teacherId, localStudents, getQuests()).catch(console.warn);
          }
        }
      },
      (err) => {
        console.warn("Firestore students listener error:", err);
      }
    );

    // Subscribe to Quests
    const unsubQuests = subscribeQuests(
      teacherId,
      (cloudQuests) => {
        if (cloudQuests) {
          setQuests(cloudQuests);
          saveQuests(cloudQuests);
        }
      },
      (err) => {
        console.warn("Firestore quests listener error:", err);
      }
    );

    return () => {
      unsubStudents();
      unsubQuests();
    };
  }, [currentTeacher]);

  const handleManualCloudSync = async () => {
    const teacherId = (currentTeacher?.uid && currentTeacher.uid !== "teacher-offline")
      ? currentTeacher.uid
      : "sirjevon";
    try {
      setIsSyncingCloud(true);
      setSyncCloudError(null);
      await migrateLocalDataToCloud(teacherId, students, quests);
      setSyncCloudSuccess(true);
      setTimeout(() => setSyncCloudSuccess(false), 3500);
    } catch (err) {
      console.error("Gagal sinkronisasi ke cloud:", err);
      setSyncCloudError("Gagal sinkronisasi: " + err.message);
      setTimeout(() => setSyncCloudError(null), 5000);
    } finally {
      setIsSyncingCloud(false);
    }
  };
  
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
  const [newStudentSchool, setNewStudentSchool] = useState("");
  const [newStudentParentPhone, setNewStudentParentPhone] = useState("");
  const [newStudentNotes, setNewStudentNotes] = useState("");

  // Student filter & search state
  const [studentSearchTerm, setStudentSearchTerm] = useState("");
  const [studentLevelFilter, setStudentLevelFilter] = useState("ALL");

  // History filter & search state
  const [historySearchTerm, setHistorySearchTerm] = useState("");
  const [historyStatusFilter, setHistoryStatusFilter] = useState("ALL");
  const [historyStudentFilter, setHistoryStudentFilter] = useState("ALL");

  // Backup & Restore state
  const [showBackupModal, setShowBackupModal] = useState(false);
  const [backupMessage, setBackupMessage] = useState(null);
  const fileInputRef = useRef(null);

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
    const teacherId = currentTeacher?.uid || "general";

    const questData = {
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
      tutorTip: genChapter.summary?.tutorTip,
      teacherId
    };

    const newQuest = createQuest(questData);
    const cloudTeacherId = (currentTeacher?.uid && currentTeacher.uid !== "teacher-offline") 
      ? currentTeacher.uid 
      : "sirjevon";
    createQuestCloud(cloudTeacherId, newQuest).catch((err) => {
      console.warn("Gagal menyimpan quest ke Firestore:", err);
    });

    setQuests(getQuests());
    setCreatedQuestInfo(newQuest);
  };

  // Handle Add New Student
  const handleAddStudentSubmit = (e) => {
    e.preventDefault();
    if (!newStudentName.trim()) return;

    const level = newStudentGrade <= 6 ? "SD" : newStudentGrade <= 9 ? "SMP" : "SMA";
    const studentData = {
      name: newStudentName.trim(),
      grade: Number(newStudentGrade),
      level,
      school: newStudentSchool.trim(),
      parentPhone: newStudentParentPhone.trim(),
      notes: newStudentNotes.trim()
    };

    const added = addStudent(studentData);
    const cloudTeacherId = (currentTeacher?.uid && currentTeacher.uid !== "teacher-offline") 
      ? currentTeacher.uid 
      : "sirjevon";
    addStudentCloud(cloudTeacherId, added).catch((err) => {
      console.warn("Gagal menyimpan murid ke Firestore:", err);
    });

    const updated = getStudents();
    setStudents(updated);
    setTargetStudentId(added.id);
    setShowAddStudent(false);
    setNewStudentName("");
    setNewStudentGrade(4);
    setNewStudentSchool("");
    setNewStudentNotes("");
    setNewStudentParentPhone("");
  };

  // Handle Edit Student Submit
  const handleEditStudentSubmit = (e) => {
    e.preventDefault();
    if (!editingStudent || !editingStudent.name.trim()) return;

    const level = editingStudent.grade <= 6 ? "SD" : editingStudent.grade <= 9 ? "SMP" : "SMA";
    const updated = {
      ...editingStudent,
      grade: Number(editingStudent.grade),
      school: (editingStudent.school || "").trim(),
      level
    };

    updateStudent(updated);
    const cloudTeacherId = (currentTeacher?.uid && currentTeacher.uid !== "teacher-offline") 
      ? currentTeacher.uid 
      : "sirjevon";
    updateStudentCloud(cloudTeacherId, updated).catch((err) => {
      console.warn("Gagal mengupdate murid di Firestore:", err);
    });

    setStudents(getStudents());
    setEditingStudent(null);
  };

  // Backup & Restore Handlers
  const handleExportBackup = () => {
    const data = exportAllData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `awesomemathj_backup_${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setBackupMessage({ type: "success", text: "Cadangan data berhasil diunduh ke file JSON!" });
  };

  const handleImportBackup = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        importAllData(parsed);
        setStudents(getStudents());
        setQuests(getQuests());
        setBackupMessage({ type: "success", text: "Data murid & riwayat PR berhasil dipulihkan!" });
      } catch (err) {
        setBackupMessage({ type: "error", text: "Gagal memulihkan: " + err.message });
      }
    };
    reader.readAsText(file);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleResetDemo = () => {
    if (window.confirm("Apakah Anda yakin ingin mereset seluruh data kembali ke data demo awal? Semua perubahan data murid dan PR saat ini akan dikembalikan.")) {
      const fresh = resetToDefaultDemoData();
      setStudents(fresh.students);
      setQuests(fresh.quests);
      setBackupMessage({ type: "success", text: "Data berhasil direset ke data demo awal." });
    }
  };

  // Filtered Students for CRM
  const filteredStudents = useMemo(() => {
    return students.filter((s) => {
      const q = studentSearchTerm.toLowerCase();
      const matchesSearch = !studentSearchTerm.trim() || 
        s.name.toLowerCase().includes(q) ||
        (s.school && s.school.toLowerCase().includes(q)) ||
        (s.notes && s.notes.toLowerCase().includes(q));
      const matchesLevel = studentLevelFilter === "ALL" || s.level === studentLevelFilter;
      return matchesSearch && matchesLevel;
    });
  }, [students, studentSearchTerm, studentLevelFilter]);

  // Filtered Quests & Stats for History
  const filteredQuests = useMemo(() => {
    return quests.filter((q) => {
      const term = historySearchTerm.toLowerCase();
      const matchesSearch = !historySearchTerm.trim() || 
        q.studentName.toLowerCase().includes(term) ||
        q.chapterTitle.toLowerCase().includes(term);
      const matchesStatus = historyStatusFilter === "ALL" || q.status === historyStatusFilter;
      const matchesStudent = historyStudentFilter === "ALL" || q.studentId === historyStudentFilter;
      return matchesSearch && matchesStatus && matchesStudent;
    });
  }, [quests, historySearchTerm, historyStatusFilter, historyStudentFilter]);

  const historyStats = useMemo(() => {
    const total = quests.length;
    const completed = quests.filter((q) => q.status === "completed").length;
    const inProgress = quests.filter((q) => q.status === "in_progress").length;
    const assigned = quests.filter((q) => q.status === "assigned" || !q.status).length;
    const scoredQuests = quests.filter((q) => q.lastScore !== undefined && q.lastScore !== null);
    const avgScore = scoredQuests.length > 0 ? Math.round(scoredQuests.reduce((a, b) => a + b.lastScore, 0) / scoredQuests.length) : null;

    return { total, completed, inProgress, assigned, avgScore };
  }, [quests]);

  // Handle Delete Student
  const handleDeleteStudent = (studentId, studentName) => {
    if (window.confirm(`Apakah Anda yakin ingin menghapus data murid "${studentName}" dari CRM?`)) {
      deleteStudent(studentId);
      const cloudTeacherId = (currentTeacher?.uid && currentTeacher.uid !== "teacher-offline") 
        ? currentTeacher.uid 
        : "sirjevon";
      deleteStudentCloud(cloudTeacherId, studentId).catch((err) => {
        console.warn("Gagal menghapus murid di Firestore:", err);
      });
      setStudents(getStudents());
    }
  };

  // Handle Delete Quest
  const handleDeleteQuest = (questId) => {
    if (window.confirm("Hapus penugasan PR ini dari riwayat?")) {
      deleteQuest(questId);
      deleteQuestCloud(questId).catch((err) => {
        console.warn("Gagal menghapus quest di Firestore:", err);
      });
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
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.35rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '1.5rem' }}>📐</span>
            <h2 style={{ color: 'var(--primary-navy)', fontSize: '1.45rem', margin: 0 }}>
              Studio Guru Matematika • {currentTeacher?.displayName || "Sir Jevon"}
            </h2>
            {isCloudConnected ? (
              <span 
                className="badge" 
                style={{ 
                  backgroundColor: '#ECFDF5', 
                  color: '#047857', 
                  border: '1px solid #A7F3D0', 
                  fontSize: '0.72rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}
              >
                <CloudCheck size={13} />
                Cloud Firestore Singapore
              </span>
            ) : (
              <span 
                className="badge" 
                style={{ 
                  backgroundColor: '#FFFBEB', 
                  color: '#B45309', 
                  border: '1px solid #FDE68A', 
                  fontSize: '0.72rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}
              >
                ● Mode Offline / Demo
              </span>
            )}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            {currentTeacher?.email && (
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {currentTeacher.email}
              </span>
            )}
            <button
              id="btn-teacher-signout"
              onClick={onSignOut}
              className="btn btn-subtle"
              style={{ padding: '0.35rem 0.65rem', fontSize: '0.78rem', color: 'var(--status-brick)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
              title="Keluar dari akun pengajar"
            >
              <LogOut size={13} />
              Keluar
            </button>
          </div>
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', margin: 0 }}>
          Kelola murid privat, generate PR 5-soal otomatis, distribusikan ke WhatsApp dengan 1-klik, dan pantau rekap pengerjaan *real-time* di cloud.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
          <SemesterBadge />
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            Kalender Akademik Kurikulum Merdeka • Rekomendasi materi aktif
          </span>
        </div>
      </div>

      {/* Cloud Sync Notifications if triggered */}
      {syncCloudSuccess && (
        <div 
          style={{ 
            backgroundColor: 'var(--status-emerald-light)', 
            color: 'var(--status-emerald)', 
            border: '1px solid var(--status-emerald-border)',
            padding: '0.75rem 1rem', 
            borderRadius: 'var(--radius-sm)', 
            fontSize: '0.85rem', 
            fontWeight: 600,
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <CheckCircle2 size={16} />
          Data murid dan penugasan PR berhasil diunggah dan disinkronkan ke Firebase Cloud!
        </div>
      )}
      {syncCloudError && (
        <div 
          style={{ 
            backgroundColor: 'var(--status-brick-light)', 
            color: 'var(--status-brick)', 
            border: '1px solid var(--status-brick-border)',
            padding: '0.75rem 1rem', 
            borderRadius: 'var(--radius-sm)', 
            fontSize: '0.85rem', 
            fontWeight: 600,
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <AlertCircle size={16} />
          {syncCloudError}
        </div>
      )}

      {/* Navigation Tabs & Cloud / Backup Toolbar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div className="nav-pill-group" style={{ display: 'inline-flex' }}>
          <button 
            id="tab-btn-generator"
            className={`nav-pill ${activeTab === 'generator' ? 'active' : ''}`}
            onClick={() => setActiveTab('generator')}
          >
            <Send size={16} />
            Generator PR (5 Soal)
          </button>
          <button 
            id="tab-btn-students"
            className={`nav-pill ${activeTab === 'students' ? 'active' : ''}`}
            onClick={() => setActiveTab('students')}
          >
            <Users size={16} />
            Data Murid ({students.length})
          </button>
          <button 
            id="tab-btn-history"
            className={`nav-pill ${activeTab === 'history' ? 'active' : ''}`}
            onClick={() => setActiveTab('history')}
          >
            <History size={16} />
            Riwayat Tugas ({quests.length})
          </button>
        </div>

        {/* Cloud Sync & Database Backup Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          {isCloudConnected && (
            <button
              id="btn-manual-cloud-sync"
              className="btn btn-outline"
              disabled={isSyncingCloud}
              style={{ 
                fontSize: '0.8rem', 
                padding: '0.4rem 0.85rem', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.45rem',
                borderColor: syncCloudSuccess ? 'var(--status-emerald)' : undefined,
                color: syncCloudSuccess ? 'var(--status-emerald)' : undefined
              }}
              onClick={handleManualCloudSync}
              title="Unggah data siswa dan tugas lokal ke Firestore Cloud"
            >
              {isSyncingCloud ? (
                <>
                  <RefreshCw size={14} className="spin-animation" />
                  Menyinkronkan...
                </>
              ) : syncCloudSuccess ? (
                <>
                  <CheckCircle2 size={14} color="var(--status-emerald)" />
                  Tersinkron ke Cloud!
                </>
              ) : (
                <>
                  <Cloud size={14} color="var(--primary-blue)" />
                  Sinkronkan ke Cloud
                </>
              )}
            </button>
          )}

          <button
            id="btn-open-backup-modal"
            className="btn btn-outline"
            style={{ fontSize: '0.8rem', padding: '0.4rem 0.85rem', display: 'flex', alignItems: 'center', gap: '0.45rem' }}
            onClick={() => {
              setBackupMessage(null);
              setShowBackupModal(true);
            }}
            title="Cadangkan atau pulihkan data murid dan tugas"
          >
            <Database size={15} color="var(--primary-blue)" />
            Backup & Restore (JSON)
          </button>
        </div>
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
      {/* TAB 2: CRM MURID PRIVAT                                 */}
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
                Menampilkan {filteredStudents.length} dari {students.length} murid terdaftar bimbingan Sir Jevon.
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
            <form onSubmit={handleAddStudentSubmit} className="editorial-card" style={{ padding: '1.5rem', marginBottom: '1.5rem', backgroundColor: '#F8FAFC' }}>
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
                    placeholder="Contoh: SMP Kristen Petra 1"
                    value={newStudentSchool}
                    onChange={(e) => setNewStudentSchool(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="input-new-student-phone">No. WhatsApp (Ortu/Siswa)</label>
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
          {filteredStudents.length === 0 ? (
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
          )}
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 3: RIWAYAT PR & HASIL EVALUASI SISWA                 */}
      {/* ======================================================== */}
      {activeTab === 'history' && (
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
              onClick={() => setActiveTab('generator')}
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
          <div className="editorial-card" style={{ padding: '1.75rem' }}>
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
                            {q.lastScore !== undefined ? (
                              <strong style={{ color: q.lastScore >= 70 ? 'var(--status-emerald)' : 'var(--status-brick)' }}>
                                {q.lastScore} / 100
                              </strong>
                            ) : (
                              <span style={{ color: 'var(--text-muted)' }}>-</span>
                            )}
                          </td>
                          <td style={{ padding: '0.75rem', textAlign: 'center' }}>
                            <div style={{ display: 'flex', gap: '0.35rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                              <button 
                                id={`btn-open-quest-table-${q.id}`}
                                className="btn btn-outline"
                                style={{ padding: '0.3rem 0.55rem', fontSize: '0.75rem' }}
                                title="Buka Uji Pengerjaan Langsung"
                                onClick={() => onLaunchQuest(q.id)}
                              >
                                <ExternalLink size={12} />
                                Uji
                              </button>
                              
                              <button 
                                className="btn btn-outline"
                                style={{ padding: '0.3rem 0.55rem', fontSize: '0.75rem' }}
                                title="Lihat Rekap Jawaban"
                                onClick={() => setInspectingQuest(q)}
                              >
                                <Eye size={12} />
                              </button>

                              <button 
                                className="btn btn-outline"
                                style={{ padding: '0.3rem 0.55rem', fontSize: '0.75rem', color: '#16A34A' }}
                                title="Kirim Ulang ke WhatsApp"
                                onClick={() => openWhatsAppWeb(q)}
                              >
                                <Share2 size={12} />
                              </button>

                              <button 
                                className="btn btn-outline"
                                style={{ padding: '0.3rem 0.55rem', fontSize: '0.75rem' }}
                                title="Cetak Worksheet A4"
                                onClick={() => onPrintQuest(q)}
                              >
                                <Printer size={12} />
                              </button>

                              <button
                                className="btn btn-subtle"
                                style={{ padding: '0.3rem 0.55rem', fontSize: '0.75rem', color: 'var(--status-brick)' }}
                                title="Hapus Tugas Ini"
                                onClick={() => handleDeleteQuest(q.id)}
                              >
                                <Trash2 size={12} />
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
        </div>
      )}

      {/* ======================================================== */}
      {/* ROOT MODALS: EDIT STUDENT, INSPECT QUEST, BACKUP/RESTORE */}
      {/* ======================================================== */}

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
                <label className="form-label">Nama Lengkap Murid:</label>
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
                <label className="form-label">Asal Sekolah:</label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="Contoh: SMP Kristen Gloria 1"
                  value={editingStudent.school || ""}
                  onChange={(e) => setEditingStudent({ ...editingStudent, school: e.target.value })}
                />
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

      {/* INSPECTING QUEST ANSWERS MODAL */}
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
                    {/* Visual if available */}
                    <QuestionVisual question={q} />
                    <div style={{ fontSize: '0.825rem', color: '#14532D', backgroundColor: '#F0FDF4', padding: '0.75rem', borderRadius: 'var(--radius-xs)', border: '1px solid #BBF7D0', marginTop: '0.5rem' }}>
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

      {/* BACKUP & RESTORE MODAL */}
      {showBackupModal && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(17, 24, 39, 0.6)',
            zIndex: 110,
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
              maxWidth: 520,
              padding: '2rem',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-md)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Database size={20} color="var(--primary-blue)" />
                <h3 style={{ fontSize: '1.2rem', color: 'var(--primary-navy)' }}>
                  Cadangkan & Pulihkan Data
                </h3>
              </div>
              <button onClick={() => setShowBackupModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <X size={20} color="var(--text-muted)" />
              </button>
            </div>

            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: '1.6' }}>
              Data murid, tugas PR, dan hasil latihan tersimpan aman di peramban (browser) Anda. Gunakan fitur ini untuk mengunduh salinan berkas cadangan (*backup file*) atau memulihkan data jika Anda berganti komputer.
            </p>

            {/* Notification alert */}
            {backupMessage && (
              <div style={{ 
                padding: '0.75rem 1rem', 
                borderRadius: 'var(--radius-sm)', 
                marginBottom: '1.25rem', 
                fontSize: '0.825rem', 
                backgroundColor: backupMessage.type === 'success' ? '#ECFDF5' : '#FEF2F2',
                color: backupMessage.type === 'success' ? '#065F46' : '#991B1B',
                border: `1px solid ${backupMessage.type === 'success' ? '#A7F3D0' : '#FECACA'}`,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                {backupMessage.type === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                <span>{backupMessage.text}</span>
              </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Option 1: Export */}
              <div style={{ padding: '1rem', backgroundColor: '#F8FAFC', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                <strong style={{ fontSize: '0.9rem', color: 'var(--primary-navy)', display: 'block', marginBottom: '0.25rem' }}>
                  1. Unduh Cadangan Data (.json)
                </strong>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                  Ekspor seluruh data {students.length} murid dan {quests.length} tugas PR ke satu file JSON portabel.
                </p>
                <button
                  type="button"
                  className="btn btn-royal"
                  style={{ width: '100%', fontSize: '0.825rem', justifyContent: 'center' }}
                  onClick={handleExportBackup}
                >
                  <Download size={15} />
                  Unduh File Cadangan (JSON)
                </button>
              </div>

              {/* Option 2: Import */}
              <div style={{ padding: '1rem', backgroundColor: '#F8FAFC', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                <strong style={{ fontSize: '0.9rem', color: 'var(--primary-navy)', display: 'block', marginBottom: '0.25rem' }}>
                  2. Pulihkan Data dari File JSON
                </strong>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                  Pilih file backup `.json` yang sudah pernah Anda unduh sebelumnya untuk memulihkan seluruh data.
                </p>
                <input 
                  type="file" 
                  accept=".json" 
                  ref={fileInputRef} 
                  onChange={handleImportBackup} 
                  style={{ display: 'none' }}
                />
                <button
                  type="button"
                  className="btn btn-outline"
                  style={{ width: '100%', fontSize: '0.825rem', justifyContent: 'center' }}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload size={15} />
                  Pilih File Cadangan untuk Dipulihkan
                </button>
              </div>

              {/* Option 3: Reset demo */}
              <div style={{ padding: '1rem', backgroundColor: '#FFFBEB', borderRadius: 'var(--radius-sm)', border: '1px solid #FDE68A' }}>
                <strong style={{ fontSize: '0.85rem', color: '#92400E', display: 'block', marginBottom: '0.25rem' }}>
                  3. Kembalikan ke Data Demo Awal
                </strong>
                <p style={{ fontSize: '0.75rem', color: '#B45309', marginBottom: '0.65rem' }}>
                  Mereset daftar murid dan tugas PR kembali ke 4 murid privat percontohan awal.
                </p>
                <button
                  type="button"
                  className="btn btn-outline"
                  style={{ width: '100%', fontSize: '0.78rem', justifyContent: 'center', borderColor: '#F59E0B', color: '#B45309' }}
                  onClick={handleResetDemo}
                >
                  <RotateCcw size={14} />
                  Reset ke Data Demo
                </button>
              </div>
            </div>

            <div style={{ marginTop: '1.25rem', textAlign: 'right' }}>
              <button 
                type="button" 
                className="btn btn-outline" 
                onClick={() => setShowBackupModal(false)}
                style={{ fontSize: '0.825rem' }}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default TeacherDashboard;
