/**
 * LocalStorage Manager untuk AwesomeMathJ (Sir Jevon)
 * Mengelola Siswa (CRM), Tugas PR (Quest), Rekam Nilai, Autentikasi Guru, dan Streak
 */

const STORAGE_KEYS = {
  STUDENTS: "awesomemathj_students_v2",
  QUESTS: "awesomemathj_quests_v2",
  SUBMISSIONS: "awesomemathj_submissions_v2",
  AUTH_TEACHER: "awesomemathj_auth_teacher_v1",
  SETTINGS: "awesomemathj_settings_v2"
};

const DEFAULT_STUDENTS = [
  {
    id: "std-1",
    name: "Rian Pratama",
    grade: 8,
    level: "SMP",
    parentPhone: "081234567890",
    streak: 3,
    totalXp: 280,
    lastActive: "2026-09-05",
    notes: "Sudah paham Aljabar dasar, sekarang fokus latihan SPLDV dan Teorema Pythagoras."
  },
  {
    id: "std-2",
    name: "Nadia Safira",
    grade: 5,
    level: "SD",
    parentPhone: "082198765432",
    streak: 5,
    totalXp: 450,
    lastActive: "2026-09-06",
    notes: "Lancar perkalian porogapit, perlu latihan soal cerita KPK dan FPB."
  },
  {
    id: "std-3",
    name: "Kevin Ardiansyah",
    grade: 12,
    level: "SMA",
    parentPhone: "085711223344",
    streak: 2,
    totalXp: 320,
    lastActive: "2026-09-04",
    notes: "Persiapan Ujian Sekolah & Asesmen Akhir, materi kalkulus diferensial dan integral."
  },
  {
    id: "std-4",
    name: "Alya Zahra",
    grade: 11,
    level: "SMA",
    parentPhone: "081399887766",
    streak: 4,
    totalXp: 510,
    lastActive: "2026-09-06",
    notes: "Pilihan Matematika Tingkat Lanjut: materi Polinomial dan Matriks."
  }
];

// Helper to get formatted default date (+3 days from now)
export function getDefaultDeadlineDate() {
  const d = new Date();
  d.setDate(d.getDate() + 3);
  return d.toISOString().split("T")[0];
}

export function formatIndonesianDate(dateStr) {
  if (!dateStr) return "-";
  try {
    const d = new Date(dateStr);
    const months = [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  } catch {
    return dateStr;
  }
}

// -------------------------------------------------------------
// TEACHER AUTHENTICATION
// -------------------------------------------------------------
export function isTeacherAuthenticated() {
  try {
    return localStorage.getItem(STORAGE_KEYS.AUTH_TEACHER) === "true";
  } catch {
    return false;
  }
}

export function setTeacherAuthenticated(isAuthenticated) {
  try {
    if (isAuthenticated) {
      localStorage.setItem(STORAGE_KEYS.AUTH_TEACHER, "true");
    } else {
      localStorage.removeItem(STORAGE_KEYS.AUTH_TEACHER);
    }
  } catch (e) {
    console.error("Error setting teacher auth:", e);
  }
}

// -------------------------------------------------------------
// STUDENTS CRM
// -------------------------------------------------------------
export function getStudents() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.STUDENTS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.STUDENTS, JSON.stringify(DEFAULT_STUDENTS));
      return DEFAULT_STUDENTS;
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error("Error reading students from storage:", e);
    return DEFAULT_STUDENTS;
  }
}

export function saveStudents(students) {
  try {
    localStorage.setItem(STORAGE_KEYS.STUDENTS, JSON.stringify(students));
  } catch (e) {
    console.error("Error saving students:", e);
  }
}

export function addStudent(student) {
  const students = getStudents();
  const newStudent = {
    ...student,
    id: `std-${Date.now()}`,
    streak: 0,
    totalXp: 0,
    lastActive: null
  };
  students.push(newStudent);
  saveStudents(students);
  return newStudent;
}

export function updateStudent(updatedStudent) {
  const students = getStudents();
  const index = students.findIndex((s) => s.id === updatedStudent.id);
  if (index !== -1) {
    students[index] = {
      ...students[index],
      ...updatedStudent
    };
    saveStudents(students);
    return students[index];
  }
  return null;
}

export function deleteStudent(studentId) {
  const students = getStudents();
  const filtered = students.filter((s) => s.id !== studentId);
  saveStudents(filtered);
  return filtered;
}

// -------------------------------------------------------------
// QUESTS (PENUGASAN PR)
// -------------------------------------------------------------
export function getQuests() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.QUESTS);
    if (!raw) {
      // Seed an initial quest for demonstration
      const initialQuests = [
        {
          id: "quest-demo-spldv",
          title: "Quest: Sistem Persamaan Linear Dua Variabel (SPLDV)",
          grade: 8,
          chapterId: "smp8-spldv",
          chapterTitle: "Sistem Persamaan Linear Dua Variabel (SPLDV)",
          track: null,
          trackLabel: null,
          category: "UH",
          studentId: "std-1",
          studentName: "Rian Pratama",
          deadline: getDefaultDeadlineDate(),
          createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
          status: "completed", // completed
          lastScore: 100,
          submittedAt: new Date(Date.now() - 3600000 * 5).toISOString(),
          questions: [
            {
              id: "smp8-spldv-1",
              category: "UH",
              difficulty: "Dasar",
              question: "Penyelesaian dari sistem persamaan $x + y = 7$ dan $x - y = 3$ adalah...",
              options: [
                { key: "A", text: "$x = 5, y = 2$" },
                { key: "B", text: "$x = 4, y = 3$" },
                { key: "C", text: "$x = 2, y = 5$" },
                { key: "D", text: "$x = 6, y = 1$" }
              ],
              correctAnswer: "A",
              hint: "Jumlahkan kedua persamaan: $(x+y) + (x-y) = 2x$.",
              bestSolution: "**Langkah Penyelesaian Terstruktur:**\nJumlahkan langsung:\n$$(x + y) + (x - y) = 7 + 3 \\implies 2x = 10 \\implies x = 5$$\nSubstitusikan $x = 5$ ke $x + y = 7$:\n$$5 + y = 7 \\implies y = 2$$\nJadi $(x, y) = (5, 2)$ (Opsi A)."
            }
          ]
        },
        {
          id: "quest-demo-kpk",
          title: "Quest: KPK & FPB Soal Cerita",
          grade: 5,
          chapterId: "sd5-kpk-fpb",
          chapterTitle: "KPK dan FPB serta Soal Cerita",
          track: null,
          trackLabel: null,
          category: "UH",
          studentId: "std-2",
          studentName: "Nadia Safira",
          deadline: getDefaultDeadlineDate(),
          createdAt: new Date().toISOString(),
          status: "assigned", // assigned
          questions: []
        }
      ];
      localStorage.setItem(STORAGE_KEYS.QUESTS, JSON.stringify(initialQuests));
      return initialQuests;
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error("Error reading quests:", e);
    return [];
  }
}

export function saveQuests(quests) {
  try {
    localStorage.setItem(STORAGE_KEYS.QUESTS, JSON.stringify(quests));
  } catch (e) {
    console.error("Error saving quests:", e);
  }
}

export function createQuest(questData) {
  const quests = getQuests();
  const newQuest = {
    ...questData,
    id: `quest-${Date.now().toString(36)}-${Math.random().toString(36).substr(2, 4)}`,
    createdAt: new Date().toISOString(),
    status: "assigned", // assigned, in_progress, completed
    deadline: questData.deadline || getDefaultDeadlineDate()
  };
  quests.unshift(newQuest);
  saveQuests(quests);
  return newQuest;
}

export function updateQuestStatus(questId, status) {
  const quests = getQuests();
  const index = quests.findIndex((q) => q.id === questId);
  if (index !== -1 && quests[index].status !== "completed") {
    quests[index].status = status;
    saveQuests(quests);
  }
}

export function deleteQuest(questId) {
  const quests = getQuests();
  const filtered = quests.filter((q) => q.id !== questId);
  saveQuests(filtered);
  return filtered;
}

export function getQuestById(questId) {
  const quests = getQuests();
  return quests.find((q) => q.id === questId) || null;
}

// -------------------------------------------------------------
// SUBMISSIONS (HASIL EVALUASI REAL-TIME)
// -------------------------------------------------------------
export function getSubmissions() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SUBMISSIONS);
    if (!raw) {
      const initialSubs = [
        {
          id: "sub-seed-1",
          questId: "quest-demo-spldv",
          studentId: "std-1",
          studentName: "Rian Pratama",
          score: 100,
          earnedXp: 170,
          totalQuestions: 5,
          correctCount: 5,
          submittedAt: new Date(Date.now() - 3600000 * 5).toISOString(),
          answers: { 0: { selected: "A", isCorrect: true } }
        }
      ];
      localStorage.setItem(STORAGE_KEYS.SUBMISSIONS, JSON.stringify(initialSubs));
      return initialSubs;
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error("Error reading submissions:", e);
    return [];
  }
}

export function saveSubmissions(submissions) {
  try {
    localStorage.setItem(STORAGE_KEYS.SUBMISSIONS, JSON.stringify(submissions));
  } catch (e) {
    console.error("Error saving submissions:", e);
  }
}

export function submitQuestResult(submissionData) {
  const submissions = getSubmissions();
  const quests = getQuests();
  const students = getStudents();

  const newSubmission = {
    ...submissionData,
    id: `sub-${Date.now()}`,
    submittedAt: new Date().toISOString()
  };
  submissions.unshift(newSubmission);
  saveSubmissions(submissions);

  // Update Quest status to completed
  const questIndex = quests.findIndex((q) => q.id === submissionData.questId);
  if (questIndex !== -1) {
    quests[questIndex].status = "completed";
    quests[questIndex].lastScore = submissionData.score;
    quests[questIndex].submittedAt = newSubmission.submittedAt;
    quests[questIndex].answers = submissionData.answersState;
    saveQuests(quests);
  }

  // Update Student Streak & XP
  const studentIndex = students.findIndex((s) => s.id === submissionData.studentId);
  if (studentIndex !== -1) {
    const student = students[studentIndex];
    const today = new Date().toISOString().split("T")[0];
    
    // Check streak
    if (student.lastActive !== today) {
      student.streak = (student.streak || 0) + 1;
      student.lastActive = today;
    }
    student.totalXp = (student.totalXp || 0) + (submissionData.earnedXp || 50);
    saveStudents(students);
  }

  return newSubmission;
}
