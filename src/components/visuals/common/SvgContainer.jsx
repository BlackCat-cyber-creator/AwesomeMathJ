import React from 'react';
import { VISUAL_THEME } from '../theme';

/**
 * SvgContainer:
 * Wrapper standar untuk semua SVG soal.
 * Memberikan padding, border halus, responsivitas viewBox, dan caption edukatif.
 */
export function SvgContainer({ 
  width = 340, 
  height = 150, 
  title, 
  caption = "*Gambar ilustrasi penunjang soal (skala proporsional)", 
  children 
}) {
  return (
    <div 
      className="question-visual-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0.85rem auto 1.15rem',
        padding: '0.75rem',
        backgroundColor: VISUAL_THEME.bgContainer,
        borderRadius: 'var(--radius-sm, 8px)',
        border: `1px solid ${VISUAL_THEME.borderSubtle}`,
        maxWidth: 420,
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      {title && (
        <span style={{ 
          fontSize: '0.75rem', 
          fontWeight: 700, 
          color: VISUAL_THEME.textSecondary, 
          marginBottom: '0.4rem', 
          letterSpacing: '0.02em',
          textTransform: 'uppercase'
        }}>
          {title}
        </span>
      )}

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <svg 
          width={width} 
          height={height} 
          viewBox={`0 0 ${width} ${height}`} 
          style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
        >
          {children}
        </svg>
      </div>

      {caption && (
        <span style={{ fontSize: '0.72rem', color: VISUAL_THEME.textMuted, marginTop: '0.4rem', fontStyle: 'italic' }}>
          {caption}
        </span>
      )}
    </div>
  );
}
