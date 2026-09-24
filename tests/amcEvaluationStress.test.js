import { describe, it, expect } from 'vitest';
import { AmcChapterView } from '../src/components/handbook/AmcChapterView.jsx';
import { getVisualConfig } from '../src/components/visuals/registry/index.js';

describe('Adversarial Stress Test: evaluateAmcAnswer', () => {
  const evaluate = AmcChapterView.evaluateAnswer;

  describe('Task 1.1: Substring Inputs (MUST FAIL)', () => {
    it('should reject 123 vs 1', () => {
      expect(evaluate('123', { answer: '1' })).toBe(false);
    });
    it('should reject 10 vs 1', () => {
      expect(evaluate('10', { answer: '1' })).toBe(false);
    });
    it('should reject 160 vs 60', () => {
      expect(evaluate('160', { answer: '60' })).toBe(false);
    });
    it('should reject 250 vs 25', () => {
      expect(evaluate('250', { answer: '25' })).toBe(false);
    });
    it('additional substring stress: prefix/suffix/in-between', () => {
      expect(evaluate('01', { answer: '1' })).toBe(true); // numeric equal: 01 === 1
      expect(evaluate('100', { answer: '10' })).toBe(false);
      expect(evaluate('600', { answer: '60' })).toBe(false);
      expect(evaluate('125', { answer: '25' })).toBe(false);
      expect(evaluate('5250', { answer: '25' })).toBe(false);
      expect(evaluate('1/33', { answer: '1/3' })).toBe(false);
      expect(evaluate('11/3', { answer: '1/3' })).toBe(false);
    });
  });

  describe('Task 1.2: Numerical Equivalence', () => {
    it('should accept 36.0 vs 36', () => {
      expect(evaluate('36.0', { answer: '36' })).toBe(true);
    });
    it('should accept 36 vs 36.0', () => {
      expect(evaluate('36', { answer: '36.0' })).toBe(true);
    });
    it('should accept 0,75 vs 0.75 (comma to dot normalization)', () => {
      expect(evaluate('0,75', { answer: '0.75' })).toBe(true);
      expect(evaluate('0.75', { answer: '0,75' })).toBe(true);
    });

    it('CRITICAL: should accept 0.75 vs 3/4 and 0,75 vs 3/4 (MUST PASS requirement)', () => {
      // Numerical equivalence between decimal (dot/comma) and fraction
      // User prompt requirement: 36.0 vs 36, 0.75 vs 0,75 vs 3/4 (MUST PASS)
      expect(evaluate('0.75', { answer: '3/4' })).toBe(true);
      expect(evaluate('0,75', { answer: '3/4' })).toBe(true);
      expect(evaluate('3/4', { answer: '0.75' })).toBe(true);
    });
  });

  describe('Task 1.3: Whitespace and Casing Tolerance', () => {
    it('should tolerate arbitrary whitespaces', () => {
      expect(evaluate('   36   ', { answer: '36' })).toBe(true);
      expect(evaluate('\t36\n', { answer: '36' })).toBe(true);
      expect(evaluate('3 6', { answer: '36' })).toBe(true); // whitespace stripped
      expect(evaluate('1 / 3', { answer: '1/3' })).toBe(true);
    });

    it('should tolerate mixed casing', () => {
      expect(evaluate('Pi', { answer: 'pi' })).toBe(true);
      expect(evaluate('36 CARA', { answer: '36 cara' })).toBe(true);
      expect(evaluate('36 Cara', { acceptedAnswers: ['36 cara'] })).toBe(true);
    });
  });

  describe('Task 1.4: Empty, null, undefined, special characters', () => {
    it('should return false for empty/null/undefined inputs', () => {
      expect(evaluate('', { answer: '36' })).toBe(false);
      expect(evaluate('   ', { answer: '36' })).toBe(false);
      expect(evaluate(null, { answer: '36' })).toBe(false);
      expect(evaluate(undefined, { answer: '36' })).toBe(false);
    });

    it('should return false for missing or empty question objects', () => {
      expect(evaluate('36', null)).toBe(false);
      expect(evaluate('36', undefined)).toBe(false);
      expect(evaluate('36', {})).toBe(false);
      expect(evaluate('36', { answer: '' })).toBe(false);
    });

    it('handles numeric q.answer safely without throwing TypeError', () => {
      // (q.answer || '').toLowerCase() throws TypeError if q.answer is a number
      expect(() => evaluate('36', { answer: 36 })).not.toThrow();
      expect(evaluate('36', { answer: 36 })).toBe(true);
    });

    it('should safely handle special characters without throwing', () => {
      expect(() => evaluate('!@#$%^&*()', { answer: '36' })).not.toThrow();
      expect(evaluate('!@#$%^&*()', { answer: '36' })).toBe(false);
      expect(evaluate('\\frac{1}{2}', { answer: '1/2' })).toBe(false);
    });
  });

  describe('Task 2: Visual Registry Resolution via question.visualId', () => {
    it('should resolve visual configuration using question.visualId', () => {
      const qVisualId = { id: 'custom-question-id', visualId: 'amc8-geo-q1' };
      const config = getVisualConfig(qVisualId);
      expect(config).toBeDefined();
      expect(config.type).toBe('right-triangle');
    });

    it('should fallback to question.id when visualId is not present', () => {
      const qFallback = { id: 'amc8-geo-q1' };
      const config = getVisualConfig(qFallback);
      expect(config).toBeDefined();
      expect(config.type).toBe('right-triangle');
    });

    it('should prioritize visualId over id', () => {
      const qConflict = { id: 'amc8-geo-q1', visualId: 'amc10-geo-q1' };
      const config = getVisualConfig(qConflict);
      expect(config).toBeDefined();
      expect(config.type).toBe('trapezoid');
    });
  });
});
