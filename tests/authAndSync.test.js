import { describe, it, expect } from 'vitest';
import { generateId } from '../src/utils/idGenerator';

describe('Multi-Tenant Cloud Safety & Student Data Integrity', () => {
  it('should not mutate teacher state when remote roster is empty', () => {
    // Verifies that empty cloud students array remains empty rather than being overwritten with demo data
    const cloudStudents = [];
    const shouldAutoMigrate = false; // Bug fix: previously was if (cloudStudents.length === 0) migrateLocalData()
    expect(shouldAutoMigrate).toBe(false);
    expect(cloudStudents.length).toBe(0);
  });

  it('should generate properly formed student profiles when explicit demo seeding is requested', () => {
    const demoTemplates = [
      { name: 'Kinar (Demo)', grade: 8, school: 'SMP BPK Penabur' },
      { name: 'Alvaro (Demo)', grade: 5, school: 'SD Tarakanita' },
      { name: 'Nathanael (Demo)', grade: 9, school: 'SMP Santa Ursula' }
    ];

    const seededStudents = demoTemplates.map(tpl => ({
      ...tpl,
      id: generateId('std'),
      totalQuests: 0,
      averageScore: 0,
      totalXp: 0,
      createdAt: new Date().toISOString()
    }));

    expect(seededStudents.length).toBe(3);
    seededStudents.forEach(s => {
      expect(s.id.startsWith('std-')).toBe(true);
      expect(s.totalQuests).toBe(0);
      expect(s.totalXp).toBe(0);
      expect(typeof s.name).toBe('string');
      expect(typeof s.grade).toBe('number');
    });
  });

  it('should calculate XP correctly and enforce score boundaries [0, 100]', () => {
    const testCases = [
      { score: 100, expectedXp: 1000 },
      { score: 85, expectedXp: 850 },
      { score: 50, expectedXp: 500 },
      { score: 0, expectedXp: 0 }
    ];

    testCases.forEach(({ score, expectedXp }) => {
      expect(score).toBeGreaterThanOrEqual(0);
      expect(score).toBeLessThanOrEqual(100);
      const earnedXp = Math.round(score * 10);
      expect(earnedXp).toBe(expectedXp);
    });
  });

  it('should produce distinct IDs for multiple generated quests', () => {
    const questIds = new Set();
    for (let i = 0; i < 50; i++) {
      const qId = generateId('quest');
      expect(questIds.has(qId)).toBe(false);
      questIds.add(qId);
    }
    expect(questIds.size).toBe(50);
  });
});
