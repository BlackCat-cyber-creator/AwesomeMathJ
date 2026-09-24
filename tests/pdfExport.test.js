import { describe, it, expect } from 'vitest';
import { calculatePageSlices } from '../src/utils/pdfExport';

describe('PDF Export & Smart Pagination (Anti-potong)', () => {
  it('should never cut through a question block when overflowing a page', () => {
    // Mock container structure:
    // Header: top 0, bottom 200, height 200
    // Question 1: top 220, bottom 570, height 350
    // Question 2: top 600, bottom 1200, height 600 (contains rectangle diagram + options + scratchpad)
    // Question 3: top 1230, bottom 1530, height 300
    // Question 4: top 1560, bottom 1860, height 300
    // Footer: top 1890, bottom 1940, height 50

    const mockElement = {
      offsetWidth: 800,
      offsetHeight: 1940,
      scrollHeight: 1940,
      getBoundingClientRect: () => ({ top: 0, bottom: 1940, width: 800, height: 1940 }),
      querySelector: (selector) => {
        if (selector === '.print-header') {
          return { getBoundingClientRect: () => ({ top: 0, bottom: 200, height: 200 }) };
        }
        if (selector === '.print-footer') {
          return { getBoundingClientRect: () => ({ top: 1890, bottom: 1940, height: 50 }) };
        }
        return null;
      },
      querySelectorAll: (selector) => {
        if (selector === '.worksheet-question-item') {
          return [
            { getBoundingClientRect: () => ({ top: 220, bottom: 570, height: 350 }) },
            { getBoundingClientRect: () => ({ top: 600, bottom: 1200, height: 600 }) },
            { getBoundingClientRect: () => ({ top: 1230, bottom: 1530, height: 300 }) },
            { getBoundingClientRect: () => ({ top: 1560, bottom: 1860, height: 300 }) },
          ];
        }
        return [];
      }
    };

    const canvasWidth = 1600;
    const canvasHeight = 3880;

    const result = calculatePageSlices(mockElement, canvasWidth, canvasHeight);

    // Verify pages structure
    expect(result.pages.length).toBeGreaterThanOrEqual(2);

    // Page 1 should contain Header + Question 1 (200 + 350 = 570 <= maxPageHeight ~1141px)
    // Question 2 (bottom 1200 > 1141) should NOT be on Page 1!
    const page1 = result.pages[0];
    expect(page1.blocks.map(b => b.type)).toEqual(['header', 'question']);
    expect(page1.blocks[1].index).toBe(0); // Question 1

    // Page 1 cut point MUST be between Question 1 bottom (570) and Question 2 top (600)
    expect(page1.endPx).toBeGreaterThanOrEqual(570);
    expect(page1.endPx).toBeLessThanOrEqual(600);

    // Page 2 MUST start with Question 2 (index 1) in its entirety!
    const page2 = result.pages[1];
    expect(page2.blocks[0].type).toBe('question');
    expect(page2.blocks[0].index).toBe(1); // Question 2 starts cleanly at top of page 2
  });

  it('should ensure all cut points fall strictly in gaps between blocks', () => {
    const questionCount = 8;
    const questions = [];
    let currentY = 220;

    for (let i = 0; i < questionCount; i++) {
      const height = i % 2 === 0 ? 400 : 250;
      questions.push({
        top: currentY,
        bottom: currentY + height,
        height
      });
      currentY += height + 30; // 30px gap
    }

    const totalHeight = currentY + 60;

    const mockElement = {
      offsetWidth: 800,
      offsetHeight: totalHeight,
      scrollHeight: totalHeight,
      getBoundingClientRect: () => ({ top: 0, bottom: totalHeight, width: 800, height: totalHeight }),
      querySelector: (selector) => {
        if (selector === '.print-header') return { getBoundingClientRect: () => ({ top: 0, bottom: 200, height: 200 }) };
        if (selector === '.print-footer') return { getBoundingClientRect: () => ({ top: totalHeight - 40, bottom: totalHeight, height: 40 }) };
        return null;
      },
      querySelectorAll: (selector) => {
        if (selector === '.worksheet-question-item') {
          return questions.map(q => ({ getBoundingClientRect: () => ({ top: q.top, bottom: q.bottom, height: q.height }) }));
        }
        return [];
      }
    };

    const result = calculatePageSlices(mockElement, 1600, totalHeight * 2);

    // For every page cut (except the last which ends at totalHeight),
    // the endPx must not intersect with any question's inner body
    result.pages.slice(0, -1).forEach(page => {
      questions.forEach(q => {
        // Cut point must NOT be strictly inside (q.top, q.bottom)
        const isCutInsideQuestion = page.endPx > q.top && page.endPx < q.bottom;
        expect(isCutInsideQuestion).toBe(false);
      });
    });
  });

  it('should gracefully handle empty or unfindable blocks using uniform fallback', () => {
    const mockElement = {
      offsetWidth: 800,
      offsetHeight: 3000,
      scrollHeight: 3000,
      getBoundingClientRect: () => ({ top: 0, bottom: 3000, width: 800, height: 3000 }),
      querySelector: () => null,
      querySelectorAll: () => []
    };

    const result = calculatePageSlices(mockElement, 1600, 6000);
    expect(result.pages.length).toBeGreaterThan(1);
    expect(result.pages[0].startPx).toBe(0);
    expect(result.pages[result.pages.length - 1].endPx).toBe(3000);
  });
});
