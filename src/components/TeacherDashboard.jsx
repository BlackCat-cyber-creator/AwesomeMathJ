import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  getStudents, 
  saveStudents, 
  addStudent, 
  deleteStudent,
  getQuests, 
  saveQuests, 
  createQuest, 
  deleteQuest, 
  formatIndonesianDate, 
  getDefaultDeadlineDate,
  exportAllData,
  importAllData,
  resetToDefaultDemoData
} from '../utils/storage';
import { 
  subscribeStudents, 
  addStudentCloud, 
  deleteStudentCloud,
  subscribeQuests, 
  createQuestCloud, 
  deleteQuestCloud,
  migrateLocalDataToCloud
} from '../firebase/firestore';
import { CURRICULUM_DATA, getLoadedGradeData, getGradeData } from '../data/curriculumData';
import { getRecommendedChapter } from '../data/academicCalendar';
import { TeacherHeader } from './teacher/TeacherHeader';
import { QuestGeneratorTab } from './teacher/QuestGeneratorTab';
import { StudentCrmTab } from './teacher/StudentCrmTab';
import { QuestMonitorTab } from './teacher/QuestMonitorTab';
import { PR_PACKETS } from './teacher/teacherConstants';

export { PR_PACKETS };

function getDefaultChapterForGrade(grade) {
  const gData = CURRICULUM_DATA.find((g) => g.grade === Number(grade));
  if (gData && gData.chapters && gData.chapters.length > 0) {
    return gData.chapters[0].id;
  }
  return "sd4-bab1-bilangan-cacah";
}

export function TeacherDashboard({ 
  onLaunchQuest, 
  onPrintQuest, 
  activeTab, 
  setActiveTab, 
  onSignOut, 
  currentTeacher 
}) {
  const [students, setStudents] = useState(() => getStudents());
  const [quests, setQuests] = useState(() => getQuests());
  const [isCloudConnected, setIsCloudConnected] = useState(true);

  // Active Teacher ID
  const teacherId = (currentTeacher?.uid && currentTeacher.uid !== "teacher-offline")
    ? currentTeacher.uid
    : "teacher-demo";

  // Real-time Firestore synchronization for students and quests
  useEffect(() => {
    // Subscribe to Students
    const unsubStudents = subscribeStudents(
      teacherId,
      (cloudStudents) => {
        if (cloudStudents) {
          setStudents(cloudStudents);
          saveStudents(cloudStudents);
        }
        setIsCloudConnected(true);
      },
      (err) => {
        console.warn("Firestore students listener error:", err);
        setIsCloudConnected(false);
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
        setIsCloudConnected(true);
      },
      (err) => {
        console.warn("Firestore quests listener error:", err);
        setIsCloudConnected(false);
      }
    );

    return () => {
      unsubStudents();
      unsubQuests();
    };
  }, [teacherId]);

  // Quest Generator state - 4 segments (5 questions per packet)
  const [targetStudentId, setTargetStudentId] = useState(() => students[0]?.id || "");
  const [generatorGrade, setGeneratorGrade] = useState(() => students[0]?.grade || 4);
  const [generatorChapterId, setGeneratorChapterId] = useState(() => getDefaultChapterForGrade(students[0]?.grade || 4));
  const [selectedPacket, setSelectedPacket] = useState(1);
  const [deadline, setDeadline] = useState(() => getDefaultDeadlineDate());
  const [copiedNotification, setCopiedNotification] = useState(false);
  const [createdQuestInfo, setCreatedQuestInfo] = useState(null);

  // New Student modal/form state
  const [showAddStudent, setShowAddStudent] = useState(false);
  const [newStudentName, setNewStudentName] = useState("");
  const [newStudentGrade, setNewStudentGrade] = useState(4);
  const [newStudentSchool, setNewStudentSchool] = useState("");
  const [newStudentParentPhone, setNewStudentParentPhone] = useState("");
  const [newStudentNotes, setNewStudentNotes] = useState("");

  // Target student helper
  const targetStudent = useMemo(() => {
    return students.find((s) => s.id === targetStudentId) || students[0] || null;
  }, [students, targetStudentId]);

  // Handle student selection change
  const handleStudentChange = (e) => {
    const sId = e.target.value;
    setTargetStudentId(sId);
    const found = students.find((s) => s.id === sId);
    if (found) {
      setGeneratorGrade(found.grade);
      setGeneratorChapterId(getDefaultChapterForGrade(found.grade));
    }
  };

  // Grade data for generator
  const genGradeData = useMemo(() => {
    const full = getLoadedGradeData(generatorGrade);
    if (full && full.grade === Number(generatorGrade)) return full;
    return CURRICULUM_DATA.find((g) => g.grade === Number(generatorGrade)) || CURRICULUM_DATA[0];
  }, [generatorGrade]);

  // Fetch full grade questions in background if not yet loaded
  useEffect(() => {
    getGradeData(generatorGrade).catch(console.warn);
  }, [generatorGrade]);

  // Recommended chapter from academic calendar
  const recChapterForGen = useMemo(() => {
    const rec = getRecommendedChapter(generatorGrade);
    if (!rec) return null;
    const ch = genGradeData.chapters[rec.chapterIndex];
    if (!ch) return null;
    return {
      ...ch,
      babNumber: rec.chapterIndex + 1,
      timeLabel: rec.pacing.label
    };
  }, [generatorGrade, genGradeData]);

  // Check which packets have already been assigned
  const assignedPacketsForTarget = useMemo(() => {
    if (!targetStudentId || !generatorChapterId) return [];
    return quests.reduce((acc, q) => {
      if (q.studentId === targetStudentId && q.chapterId === generatorChapterId) {
        acc.push(q.packetIndex || 1);
      }
      return acc;
    }, []);
  }, [quests, targetStudentId, generatorChapterId]);

  // Recommend packet
  const recommendedPacketForTarget = useMemo(() => {
    for (let i = 1; i <= 4; i++) {
      if (!assignedPacketsForTarget.includes(i)) return i;
    }
    return 1;
  }, [assignedPacketsForTarget]);

  // Sync selectedPacket when recommendedPacketForTarget changes
  const prevRecPacketRef = useRef(recommendedPacketForTarget);
  useEffect(() => {
    if (prevRecPacketRef.current !== recommendedPacketForTarget) {
      setSelectedPacket(recommendedPacketForTarget);
      prevRecPacketRef.current = recommendedPacketForTarget;
    }
  }, [recommendedPacketForTarget]);

  // Generate WhatsApp message text
  const getWhatsAppShareText = (quest) => {
    const origin = window.location.origin;
    const questUrl = `${origin}/quest/${quest.id}`;
    const trackInfo = quest.trackLabel ? ` [${quest.trackLabel}]` : "";
    const packetInfo = quest.packetIndex ? `\n🎯 *Paket Soal*: Paket ${quest.packetIndex} (${quest.packetRange || '5 Butir Soal'})` : "";
    const deadlineText = quest.deadline ? `\n📅 *Tenggat*: ${formatIndonesianDate(quest.deadline)}` : "";

    const rawChapterTitle = (quest.chapterTitle || "").trim();
    const chapterPrefix = rawChapterTitle.toLowerCase().startsWith("bab") ? "" : "Bab ";
    const formattedChapter = `*${rawChapterTitle}*`;
    const teacherDisplayName = currentTeacher?.displayName || "Pengajar";

    return `Halo *${quest.studentName}* & Bapak/Ibu Wali Murid,\n\nBerikut link tugas latihan matematika dari *${teacherDisplayName}*:\n📚 *Materi*: ${chapterPrefix}${formattedChapter}${trackInfo}${packetInfo}${deadlineText}\n\nSilakan buka tautan berikut untuk mulai mengerjakan:\n🔗 ${questUrl}\n\n📌 *Petunjuk Pengerjaan*:\n1. Langsung dibuka di browser HP/laptop (tanpa perlu instal aplikasi).\n2. Tersedia *Papan Cakar Digital* di layar untuk corat-coret hitungan.\n3. Nilai & coretan otomatis tersimpan langsung ke evaluasi guru.\n\nSemangat belajar! Hubungi kami jika ada kendala ya. 🔥\n\nSalam hangat,\n*${teacherDisplayName} — AwesomeMathJ*`;
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

  // Create Quest
  const handleCreateQuest = async () => {
    if (!targetStudent) {
      alert("Silakan pilih murid terlebih dahulu.");
      return;
    }

    const fullGrade = await getGradeData(generatorGrade);
    const chapter = fullGrade?.chapters?.find((c) => c.id === generatorChapterId);
    if (!chapter || !chapter.questions || chapter.questions.length === 0) {
      alert("Materi bab ini sedang disiapkan atau tidak memiliki soal.");
      return;
    }

    const packetDef = PR_PACKETS.find((p) => p.index === selectedPacket) || PR_PACKETS[0];
    const startIndex = (packetDef.index - 1) * 5;
    const selectedQuestions = chapter.questions.slice(startIndex, startIndex + 5);

    if (selectedQuestions.length === 0) {
      alert("Tidak ada butir soal dalam rentang paket ini.");
      return;
    }

    const newQuestPayload = {
      title: `Quest: ${chapter.title} - ${packetDef.title}`,
      grade: generatorGrade,
      chapterId: chapter.id,
      chapterTitle: chapter.title,
      track: chapter.track || null,
      trackLabel: chapter.trackLabel || null,
      category: "PR",
      studentId: targetStudent.id,
      studentName: targetStudent.name,
      deadline: deadline || getDefaultDeadlineDate(),
      packetIndex: packetDef.index,
      packetRange: packetDef.range,
      packetTitle: packetDef.title,
      questions: selectedQuestions
    };

    const saved = createQuest(newQuestPayload);
    createQuestCloud(teacherId, saved).catch((err) => {
      console.warn("Gagal menyimpan quest ke Firestore:", err);
    });

    setQuests(getQuests());
    setCreatedQuestInfo({
      ...saved,
      shareText: getWhatsAppShareText(saved)
    });
  };

  // Student CRUD
  const handleAddStudentSubmit = async (e) => {
    e.preventDefault();
    if (!newStudentName.trim()) return;

    const studentPayload = {
      name: newStudentName.trim(),
      grade: newStudentGrade,
      level: newStudentGrade <= 6 ? "SD" : newStudentGrade <= 9 ? "SMP" : "SMA",
      school: newStudentSchool.trim() || null,
      parentPhone: newStudentParentPhone.trim() || null,
      notes: newStudentNotes.trim() || null
    };

    const created = addStudent(studentPayload);
    addStudentCloud(teacherId, created).catch((err) => {
      console.warn("Gagal menambah murid di Firestore:", err);
    });

    setStudents(getStudents());
    setShowAddStudent(false);
    setNewStudentName("");
    setNewStudentSchool("");
    setNewStudentParentPhone("");
    setNewStudentNotes("");
    setTargetStudentId(created.id);
  };

  const handleDeleteStudent = (studentId) => {
    deleteStudent(studentId);
    deleteStudentCloud(teacherId, studentId).catch((err) => {
      console.warn("Gagal menghapus murid di Firestore:", err);
    });
    setStudents(getStudents());
  };

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

  // Seed demo data manually if requested
  const handleSeedDemoData = async () => {
    const demo = resetToDefaultDemoData();
    setStudents(demo.students);
    setQuests(demo.quests);
    try {
      await migrateLocalDataToCloud(teacherId, demo.students, demo.quests);
    } catch (e) {
      console.warn("Demo migration failed:", e);
    }
  };

  // Quest Deletion
  const handleDeleteQuest = (questId) => {
    deleteQuest(questId);
    deleteQuestCloud(questId).catch((err) => {
      console.warn("Gagal menghapus quest di Firestore:", err);
    });
    setQuests(getQuests());
  };

  // KPI Statistics for Monitor
  const historyStats = useMemo(() => {
    const total = quests.length;
    const completed = quests.filter((q) => q.status === "completed").length;
    const inProgress = quests.filter((q) => q.status === "in_progress").length;
    const assigned = quests.filter((q) => q.status === "assigned" || !q.status).length;
    const completedWithScore = quests.filter((q) => q.status === "completed" && q.lastScore !== undefined);
    const avgScore = completedWithScore.length > 0
      ? Math.round(completedWithScore.reduce((acc, q) => acc + (q.lastScore || 100), 0) / completedWithScore.length)
      : null;

    return { total, completed, inProgress, assigned, avgScore };
  }, [quests]);

  // Export JSON
  const handleExportData = () => {
    const data = exportAllData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `AwesomeMathJ_Backup_${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Import JSON
  const handleImportData = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        importAllData(parsed);
        setStudents(getStudents());
        setQuests(getQuests());
        await migrateLocalDataToCloud(teacherId, getStudents(), getQuests());
        alert("Data berhasil diimpor!");
      } catch (err) {
        alert("Gagal mengimpor file: " + err.message);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="handbook-container">
      {/* Header and Tabs Component */}
      <TeacherHeader
        currentTeacher={currentTeacher}
        isCloudConnected={isCloudConnected}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onSignOut={onSignOut}
        studentCount={students.length}
        questCount={quests.length}
      />

      {/* TAB 1: GENERATOR PR */}
      {activeTab === 'generator' && (
        <QuestGeneratorTab
          students={students}
          targetStudentId={targetStudentId}
          onStudentChange={handleStudentChange}
          generatorGrade={generatorGrade}
          setGeneratorGrade={setGeneratorGrade}
          generatorChapterId={generatorChapterId}
          setGeneratorChapterId={setGeneratorChapterId}
          genGradeData={genGradeData}
          recChapterForGen={recChapterForGen}
          selectedPacket={selectedPacket}
          setSelectedPacket={setSelectedPacket}
          assignedPacketsForTarget={assignedPacketsForTarget}
          recommendedPacketForTarget={recommendedPacketForTarget}
          deadline={deadline}
          setDeadline={setDeadline}
          onCreateQuest={handleCreateQuest}
          createdQuestInfo={createdQuestInfo}
          copiedNotification={copiedNotification}
          onCopyWhatsApp={copyWhatsAppMessage}
          onOpenWhatsAppWeb={openWhatsAppWeb}
          onLaunchQuest={onLaunchQuest}
          onPrintQuest={onPrintQuest}
        />
      )}

      {/* TAB 2: CRM MURID */}
      {activeTab === 'students' && (
        <StudentCrmTab
          students={students}
          quests={quests}
          showAddStudent={showAddStudent}
          setShowAddStudent={setShowAddStudent}
          newStudentName={newStudentName}
          setNewStudentName={setNewStudentName}
          newStudentGrade={newStudentGrade}
          setNewStudentGrade={setNewStudentGrade}
          newStudentSchool={newStudentSchool}
          setNewStudentSchool={setNewStudentSchool}
          newStudentParentPhone={newStudentParentPhone}
          setNewStudentParentPhone={setNewStudentParentPhone}
          newStudentNotes={newStudentNotes}
          setNewStudentNotes={setNewStudentNotes}
          onAddStudentSubmit={handleAddStudentSubmit}
          onAssignToStudent={handleAssignToStudent}
          onDeleteStudent={handleDeleteStudent}
          onSeedDemoData={handleSeedDemoData}
        />
      )}

      {/* TAB 3: RIWAYAT / MONITOR */}
      {activeTab === 'history' && (
        <QuestMonitorTab
          quests={quests}
          students={students}
          historyStats={historyStats}
          onLaunchQuest={onLaunchQuest}
          onPrintQuest={onPrintQuest}
          onDeleteQuest={handleDeleteQuest}
          onOpenWhatsAppWeb={openWhatsAppWeb}
          onSwitchToGenerator={() => setActiveTab('generator')}
          onExportData={handleExportData}
          onImportData={handleImportData}
          onResetDemoData={handleSeedDemoData}
        />
      )}
    </div>
  );
}

export default TeacherDashboard;
