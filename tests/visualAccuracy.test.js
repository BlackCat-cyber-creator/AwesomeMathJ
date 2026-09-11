import { describe, it, expect } from 'vitest';
import { grade4VisualRegistry } from '../src/components/visuals/registry/grade4Registry';
import { grade5VisualRegistry } from '../src/components/visuals/registry/grade5Registry';
import { grade6VisualRegistry } from '../src/components/visuals/registry/grade6Registry';
import { grade8VisualRegistry } from '../src/components/visuals/registry/grade8Registry';
import { grade9VisualRegistry } from '../src/components/visuals/registry/grade9Registry';
import { grade8Data } from '../src/data/grades/grade8';

describe('Visual Accuracy, Mathematical Fidelity, and Zero-Spoiler Tests', () => {
  const allRegistries = [
    { grade: 4, registry: grade4VisualRegistry },
    { grade: 5, registry: grade5VisualRegistry },
    { grade: 6, registry: grade6VisualRegistry },
    { grade: 8, registry: grade8VisualRegistry },
    { grade: 9, registry: grade9VisualRegistry }
  ];

  it('should have 0 answer spoilers in labels, targetLabels, and angleLabels', () => {
    const spoilers = [];

    for (const { grade, registry } of allRegistries) {
      for (const [qId, config] of Object.entries(registry)) {
        const props = config.props || {};

        // Fraction strip should not display equation without question mark
        if (config.type === 'fraction-strip' && props.label) {
          if ((props.label.includes('=') || props.label.includes('+') || props.label.includes('-')) && !props.label.includes('?')) {
            spoilers.push({ grade, qId, field: 'label', val: props.label });
          }
        }

        // Check targetLabel, label, target, angleLabel
        for (const field of ['targetLabel', 'label', 'target', 'angleLabel']) {
          const val = props[field];
          if (typeof val === 'string' && val.trim() !== '') {
            if (val.includes('=') && !val.includes('?') && !val.includes('Total') && !val.includes('Diketahui')) {
              spoilers.push({ grade, qId, field, val });
            }
          }
        }

        // Check captions that reveal answers directly
        if (props.caption && typeof props.caption === 'string') {
          const cap = props.caption.toLowerCase();
          if (
            cap.includes('tepat 90°') || 
            cap.includes('tepat (180°)') || 
            cap.includes('memiliki 4 sumbu') || 
            cap.includes('memiliki 2 sumbu') || 
            cap.includes('memiliki 3 sumbu')
          ) {
            spoilers.push({ grade, qId, field: 'caption', val: props.caption });
          }
        }
      }
    }

    expect(spoilers).toEqual([]);
  });

  it('Photo 1 (smp8-b1-20): should have formatted options and accurate 3D laboratory visual', () => {
    const ch1 = grade8Data.chapters[0];
    const q20 = ch1.questions.find(q => q.id === 'smp8-b1-20');
    expect(q20).toBeDefined();

    // Ensure options have proper math delimiters
    expect(q20.options[0].text).toContain('$300\\text{ m}^3$');
    expect(q20.options[1].text).toContain('$30\\text{ m}^3$');
    expect(q20.options[2].text).toContain('$3.000\\text{ m}^3$');
    expect(q20.options[3].text).toContain('$30.000\\text{ m}^3$');

    // Ensure visual is registered with faithful dimensions and zero spoiler
    const vis = grade8VisualRegistry['smp8-b1-20'];
    expect(vis).toBeDefined();
    expect(vis.type).toBe('solid-3d');
    expect(vis.props.lengthLabel).toBe('p = 4 × 10³ cm');
    expect(vis.props.widthLabel).toBe('l = 3 × 10³ cm');
    expect(vis.props.heightLabel).toBe('t = 2,5 × 10² cm');
    expect(vis.props.targetLabel).toBe('Volume = ? m³');
  });

  it('Photo 2 (sd4-b2-3): should use multi-group shading without spoiling sum answer', () => {
    const vis = grade4VisualRegistry['sd4-b2-3'];
    expect(vis).toBeDefined();
    expect(vis.type).toBe('fraction-strip');
    expect(vis.props.totalParts).toBe(7);
    expect(vis.props.shadedGroups).toEqual([3, 2]);
    expect(vis.props.targetBadge).toBe('Total = ?');
    // Ensure no spoiled label like '3/7 + 2/7 = 5/7'
    expect(vis.props.label).toBeUndefined();
  });

  it('Photo 3 (sd4-b3-14): should have accurate term target (U7) instead of next term (U5)', () => {
    const vis = grade4VisualRegistry['sd4-b3-14'];
    expect(vis).toBeDefined();
    expect(vis.type).toBe('number-line');
    expect(vis.props.items).toEqual([3, 7, 11, 15]);
    expect(vis.props.targetIndex).toBe(7);
    expect(vis.props.target).toBe('?');
    expect(vis.props.promptText).toContain('suku ke-7 (U₇)');
  });

  it('Sequence visuals: should accurately represent missing terms in the middle and higher terms', () => {
    // sd4-b3-10: Suku ke-6
    const vis10 = grade4VisualRegistry['sd4-b3-10'];
    expect(vis10.props.targetIndex).toBe(6);

    // sd4-b3-7: Missing term in middle (12, 16, ?, 24, 28)
    const vis7 = grade4VisualRegistry['sd4-b3-7'];
    expect(vis7.props.slots).toBeDefined();
    expect(vis7.props.slots).toHaveLength(5);
    expect(vis7.props.slots[2].isTarget).toBe(true);
    expect(vis7.props.slots[2].val).toBe('?');

    // sd4-b3-8: Missing term in middle (50, 45, 40, ?, 30)
    const vis8 = grade4VisualRegistry['sd4-b3-8'];
    expect(vis8.props.slots).toBeDefined();
    expect(vis8.props.slots).toHaveLength(5);
    expect(vis8.props.slots[3].isTarget).toBe(true);
    expect(vis8.props.slots[3].val).toBe('?');
  });

  it('Clock angle visuals: should never give away angle degrees in label', () => {
    const clockQuestions = ['sd5-b6-2', 'sd5-b6-3', 'sd5-b6-7', 'sd5-b6-8', 'sd5-b6-14', 'sd5-b6-16', 'sd5-b6-19'];
    for (const id of clockQuestions) {
      const vis = grade5VisualRegistry[id];
      expect(vis).toBeDefined();
      expect(vis.props.angleLabel).toBe('?°');
      expect(vis.props.angleType).toBe('Besar Sudut = ?');
    }
  });
});
