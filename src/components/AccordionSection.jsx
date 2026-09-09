import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * AccordionSection — Reusable collapsible content panel with smooth animation.
 * 
 * Props:
 * - icon: Lucide icon component (rendered)
 * - title: string — section heading
 * - accentColor: string — left border color for this pillar
 * - accentBg: string — subtle background tint
 * - defaultOpen: boolean — whether to start expanded
 * - preview: string — 1-line preview shown when collapsed (optional)
 * - children: the full content
 * - id: optional HTML id for the section wrapper
 */
export function AccordionSection({ 
  icon, 
  title, 
  accentColor = 'var(--primary-blue)', 
  accentBg = '#F8FAFC',
  defaultOpen = false, 
  preview = '', 
  children, 
  id 
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef(null);
  const [measuredHeight, setMeasuredHeight] = useState(0);

  // Measure content height for smooth animation
  useEffect(() => {
    if (contentRef.current) {
      setMeasuredHeight(contentRef.current.scrollHeight);
    }
  }, [children, isOpen]);

  // Re-measure on window resize (KaTeX can change height)
  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        setMeasuredHeight(contentRef.current.scrollHeight);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Truncate preview to ~120 chars
  const truncatedPreview = preview.length > 120 
    ? preview.slice(0, 120).replace(/\s+\S*$/, '') + '...' 
    : preview;

  return (
    <div 
      id={id}
      className={`accordion-section ${isOpen ? 'accordion-open' : ''}`}
      style={{
        borderLeft: `4px solid ${accentColor}`,
        backgroundColor: isOpen ? accentBg : '#FFFFFF',
      }}
    >
      {/* Clickable Header */}
      <button
        type="button"
        className="accordion-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="accordion-header-left">
          <span className="accordion-icon" style={{ color: accentColor }}>
            {icon}
          </span>
          <div className="accordion-title-group">
            <span className="accordion-title">{title}</span>
            {!isOpen && truncatedPreview && (
              <span className="accordion-preview">{truncatedPreview}</span>
            )}
          </div>
        </div>
        <span 
          className="accordion-chevron"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <ChevronDown size={18} />
        </span>
      </button>

      {/* Animated Content */}
      <div 
        className="accordion-body"
        style={{
          maxHeight: isOpen ? `${measuredHeight + 40}px` : '0px',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div ref={contentRef} className="accordion-body-inner">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AccordionSection;
