import { describe, it, expect } from 'vitest';
import { generateId } from '../src/utils/idGenerator';

describe('Unique ID Generator', () => {
  it('should generate an ID with the specified prefix', () => {
    const studentId = generateId('std');
    expect(studentId.startsWith('std-')).toBe(true);

    const questId = generateId('quest');
    expect(questId.startsWith('quest-')).toBe(true);

    const subId = generateId('sub');
    expect(subId.startsWith('sub-')).toBe(true);
  });

  it('should generate distinct unique IDs across 1,000 invocations', () => {
    const set = new Set();
    for (let i = 0; i < 1000; i++) {
      const id = generateId('test');
      expect(set.has(id)).toBe(false);
      set.add(id);
    }
    expect(set.size).toBe(1000);
  });
});
