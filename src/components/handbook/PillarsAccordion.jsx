import React from 'react';
import { 
  Bookmark, 
  Layers, 
  Compass, 
  FileText, 
  AlertTriangle, 
  Lightbulb 
} from 'lucide-react';
import { MathText } from '../MathRenderer';
import { AccordionSection } from '../AccordionSection';

export function PillarsAccordion({ summary }) {
  if (!summary) return null;

  return (
    <div className="handbook-content-layout">
      {/* Overview & Key Formulas Banner */}
      {summary.overview && (
        <div className="chapter-overview-banner" style={{ marginBottom: '1.25rem' }}>
          <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
            <MathText text={
              summary.overview
                .replace(/^Ringkasan Bab:\s*/i, '')
                .replace(/^(Di bab ini,|Dalam bab ini,|Pada bab ini,)\s*/i, '')
                .split('\n')[0]
                .trim() + '.'
            } />
          </p>
        </div>
      )}

      {/* Formula Strip — Key formulas visible at top */}
      {summary.keyFormulas && summary.keyFormulas.length > 0 && (
        <div style={{ backgroundColor: '#FFFFFF', padding: '1rem 1.15rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-medium)', maxWidth: '100%', overflow: 'hidden', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.65rem' }}>
            <Bookmark size={15} color="var(--primary-navy)" />
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary-navy)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Rumus Kunci
            </span>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
              ({summary.keyFormulas.length} rumus)
            </span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.65rem', maxWidth: '100%' }}>
            {summary.keyFormulas.map((kf, kfIdx) => (
              <div 
                key={kfIdx}
                style={{
                  backgroundColor: '#F8FAFC',
                  padding: '0.65rem 0.75rem',
                  borderRadius: 'var(--radius-xs)',
                  border: '1px solid var(--border-subtle)',
                  textAlign: 'center',
                  minWidth: 0,
                  maxWidth: '100%',
                  overflowX: 'auto'
                }}
              >
                <div style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                  {kf.label}
                </div>
                <div style={{ fontSize: '0.95rem', color: 'var(--primary-navy)', maxWidth: '100%', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
                  <MathText text={`$$${kf.formula}$$`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* PAHAMI MATERI: Collapsible Accordions for the 6 Pillars */}
      <div className="pillar-stack" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.15rem' }}>
          <Layers size={15} color="var(--text-muted)" />
          <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Pahami Materi
          </span>
        </div>

        {/* 1. Pengantar & Konteks Konsep */}
        {summary.overview && (
          <AccordionSection
            id="pillar-overview"
            icon={<Compass size={16} />}
            title="Pengantar & Konteks Konsep"
            accentColor="#2563EB"
            accentBg="#EFF6FF"
            defaultOpen={false}
            preview={summary.overview.split('\n')[0]}
          >
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              <MathText text={summary.overview} />
            </div>
          </AccordionSection>
        )}

        {/* 2. Konsep Kunci & Pemahaman Teori */}
        {summary.coreConcepts && summary.coreConcepts.length > 0 && (
          <AccordionSection
            id="pillar-concepts"
            icon={<Layers size={16} />}
            title="Konsep Kunci & Pemahaman Teori"
            accentColor="#7C3AED"
            accentBg="#F5F3FF"
            defaultOpen={false}
            preview={summary.coreConcepts[0]}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {summary.coreConcepts.map((concept, cIdx) => (
                <div key={cIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  <span style={{ color: '#7C3AED', fontWeight: 700, marginTop: '2px', flexShrink: 0 }}>•</span>
                  <div style={{ flex: 1 }}>
                    <MathText text={concept} />
                  </div>
                </div>
              ))}
            </div>
          </AccordionSection>
        )}

        {/* 3. Contoh Soal Terbimbing */}
        {summary.workedExamples && summary.workedExamples.length > 0 && (
          <AccordionSection
            id="pillar-examples"
            icon={<FileText size={16} />}
            title="Contoh Soal & Langkah Penyelesaian Bertahap"
            accentColor="#059669"
            accentBg="#ECFDF5"
            defaultOpen={false}
            preview={summary.workedExamples[0]?.problem}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {summary.workedExamples.map((ex, exIdx) => (
                <div key={exIdx} style={{ backgroundColor: '#FFFFFF', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--primary-navy)', marginBottom: '0.4rem' }}>
                    Contoh #{exIdx + 1}:
                  </div>
                  <div style={{ fontSize: '0.88rem', marginBottom: '0.65rem' }}>
                    <MathText text={ex.problem} />
                  </div>
                  <div style={{ backgroundColor: '#F8FAFC', padding: '0.75rem', borderRadius: 'var(--radius-xs)', borderLeft: '3px solid #059669', fontSize: '0.85rem' }}>
                    <strong style={{ color: '#065F46', display: 'block', marginBottom: '0.3rem' }}>Langkah Solusi:</strong>
                    <MathText text={ex.solution} />
                  </div>
                </div>
              ))}
            </div>
          </AccordionSection>
        )}

        {/* 4. Miskonsepsi & Jebakan Konsep */}
        {summary.misconceptions && summary.misconceptions.length > 0 && (
          <AccordionSection
            id="pillar-misconceptions"
            icon={<AlertTriangle size={16} />}
            title="Miskonsepsi Umum & Jebakan Konsep"
            accentColor="#DC2626"
            accentBg="#FEF2F2"
            defaultOpen={false}
            preview={summary.misconceptions[0]}
          >
            <ul style={{ paddingLeft: '1.25rem', fontSize: '0.88rem', color: '#991B1B', lineHeight: 1.6 }}>
              {summary.misconceptions.map((misc, mIdx) => (
                <li key={mIdx} style={{ marginBottom: '0.3rem' }}>
                  <MathText text={misc} />
                </li>
              ))}
            </ul>
          </AccordionSection>
        )}

        {/* 5. Tips & Cara Cepat */}
        {summary.tutorTip && (
          <AccordionSection
            id="pillar-tips"
            icon={<Lightbulb size={16} />}
            title="Tips Guru & Solusi Cepat"
            accentColor="#D97706"
            accentBg="#FFFBEB"
            defaultOpen={true}
            preview={summary.tutorTip}
          >
            <div style={{ fontSize: '0.875rem', color: '#78350F', lineHeight: 1.55 }}>
              <MathText text={summary.tutorTip.replace(/Sir Jevon/gi, 'Tutor Pengajar')} />
            </div>
          </AccordionSection>
        )}
      </div>
    </div>
  );
}

export default PillarsAccordion;
