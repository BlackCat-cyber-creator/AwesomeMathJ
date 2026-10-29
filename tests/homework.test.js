import { describe, it, expect } from 'vitest';
import { sortByDifficulty, buildQuest, buildWhatsAppMessage, normalizePhone, amcLevelOfTrack } from '../src/utils/questBuilder';
import { checkAnswer, getQuestionKind, scoreResponses, readAnswers } from '../src/utils/answerCheck';
import { getGradeData } from '../src/data/curriculumData';
import { getAmcModuleData } from '../src/data/amc/amcData';
import { difficultyRank } from '../src/utils/questBuilder';

const student = { id: 'std-1', name: 'Nadia', grade: 5, track: 'reguler' };

describe('Penyusun PR: 1 bab = 1 PR, mudah → sulit', () => {
  it('mengurutkan soal dari mudah ke sulit dan menjaga urutan asli dalam tingkat yang sama', () => {
    const qs = [
      { id: 'a', difficulty: 'Tantangan' },
      { id: 'b', difficulty: 'Mudah' },
      { id: 'c', difficulty: 'Sedang' },
      { id: 'd', difficulty: 'Dasar' },
      { id: 'e', difficulty: 'Olimpiade' }
    ];
    expect(sortByDifficulty(qs).map((q) => q.id)).toEqual(['b', 'd', 'c', 'a', 'e']);
  });

  it('PR kurikulum berisi seluruh soal bab dengan tingkat kesulitan yang tidak menurun', async () => {
    const data = await getGradeData(5);
    const chapter = data.chapters[0];
    const quest = buildQuest({ student, deadline: '2026-11-01', source: { kind: 'merdeka', grade: 5, chapter } });
    expect(quest.questions).toHaveLength(chapter.questions.length);
    const ranks = quest.questions.map((q) => difficultyRank(q.difficulty));
    expect(ranks).toEqual([...ranks].sort((a, b) => a - b));
    expect(quest).toMatchObject({ chapterId: chapter.id, grade: 5, source: 'merdeka', studentId: 'std-1' });
  });

  it('PR AMC memakai level untuk tautan QR pembahasan', async () => {
    const data = await getAmcModuleData(8);
    const chapter = data.chapters[0];
    const quest = buildQuest({ student: { ...student, track: 'amc8' }, source: { kind: 'amc', level: 8, chapter } });
    expect(quest).toMatchObject({ grade: 8, level: 'AMC 8', source: 'amc' });
    expect(quest.questions).toHaveLength(chapter.questions.length);
  });

  it('jalur murid dikenali', () => {
    expect(amcLevelOfTrack('amc10')).toBe(10);
    expect(amcLevelOfTrack('reguler')).toBeNull();
  });

  it('pesan WhatsApp memuat link PR dan nomor ortu dinormalkan ke 62', () => {
    const msg = buildWhatsAppMessage({
      quest: { id: 'quest-1', studentName: 'Nadia', chapterTitle: 'Bab 2: KPK dan FPB', questions: new Array(20).fill({}), deadline: '2026-11-01', source: 'merdeka' },
      teacherName: 'Sir Jevon',
      origin: 'https://example.com',
      formatDate: (d) => d
    });
    expect(msg).toContain('https://example.com/quest/quest-1');
    expect(msg).toContain('20 soal');
    expect(normalizePhone('0812-3456-7890')).toBe('6281234567890');
  });
});

describe('Pemeriksa jawaban PR', () => {
  const mcq = { options: [{ key: 'A', text: '1' }, { key: 'B', text: '2' }], correctAnswer: 'B' };
  const short = { type: 'short_answer', answer: '3/4', acceptedAnswers: ['0,75'] };
  const essayWithAnswer = { type: 'essay', answer: '66' };
  const essayOpen = { type: 'essay' };

  it('mengenali jenis soal', () => {
    expect(getQuestionKind(mcq)).toBe('mcq');
    expect(getQuestionKind(short)).toBe('short_answer');
    expect(getQuestionKind(essayWithAnswer)).toBe('short_answer');
    expect(getQuestionKind(essayOpen)).toBe('essay');
  });

  it('menilai pilihan ganda, isian (setara numerik), dan esai terbuka', () => {
    expect(checkAnswer(mcq, 'B')).toBe(true);
    expect(checkAnswer(mcq, 'A')).toBe(false);
    expect(checkAnswer(short, '0.75')).toBe(true);
    expect(checkAnswer(short, '3/4')).toBe(true);
    expect(checkAnswer(short, '')).toBe(false);
    expect(checkAnswer(essayOpen, 'uraian')).toBeNull();
  });

  it('nilai hanya menghitung soal yang bisa dinilai otomatis', () => {
    const { score, correct, gradable } = scoreResponses([mcq, short, essayOpen], { 0: 'B', 1: '1/2', 2: 'jawaban' });
    expect({ score, correct, gradable }).toEqual({ score: 50, correct: 1, gradable: 2 });
  });

  it('membaca jawaban format baru dan format lama', () => {
    const questions = [mcq, short];
    expect(readAnswers({ questions, answers: { responses: { 0: 'B' }, results: [true, false] } }))
      .toEqual([{ response: 'B', isCorrect: true }, { response: '', isCorrect: false }]);
    expect(readAnswers({ questions, answers: { 0: { selected: 'A', isCorrect: false } } }))
      .toEqual([{ response: 'A', isCorrect: false }, { response: '', isCorrect: null }]);
  });
});
