import React from 'react';
import { VISUAL_THEME } from '../theme';

/**
 * DimensionLine: Garis penunjuk dimensi dengan panah/pembatas di kedua ujungnya.
 */
export function DimensionLine({ 
  x1, y1, x2, y2, 
  label, 
  offset = 0, 
  color = VISUAL_THEME.textSecondary,
  strokeWidth = 1.5,
  isTarget = false
}) {
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  const isHorizontal = Math.abs(y1 - y2) < 2;

  return (
    <g>
      {/* Garis Utama */}
      <line 
        x1={x1} y1={y1} x2={x2} y2={y2} 
        stroke={isTarget ? VISUAL_THEME.accent : color} 
        strokeWidth={strokeWidth} 
        strokeDasharray={isTarget ? '3 2' : 'none'}
      />
      {/* Pembatas Ticks di Ujung */}
      {isHorizontal ? (
        <>
          <line x1={x1} y1={y1 - 4} x2={x1} y2={y1 + 4} stroke={isTarget ? VISUAL_THEME.accent : color} strokeWidth={strokeWidth} />
          <line x1={x2} y1={y2 - 4} x2={x2} y2={y2 + 4} stroke={isTarget ? VISUAL_THEME.accent : color} strokeWidth={strokeWidth} />
        </>
      ) : (
        <>
          <line x1={x1 - 4} y1={y1} x2={x1 + 4} y2={y1} stroke={isTarget ? VISUAL_THEME.accent : color} strokeWidth={strokeWidth} />
          <line x1={x2 - 4} y1={y2} x2={x2 + 4} y2={y2} stroke={isTarget ? VISUAL_THEME.accent : color} strokeWidth={strokeWidth} />
        </>
      )}
      {/* Label Dimensi */}
      {label && (
        <g transform={`translate(${midX}, ${midY + offset})`}>
          <rect 
            x="-22" y="-9" width="44" height="18" rx="4" 
            fill={isTarget ? VISUAL_THEME.accentSoft : '#FFFFFF'} 
            stroke={isTarget ? VISUAL_THEME.accent : VISUAL_THEME.borderSubtle} 
            strokeWidth="1"
          />
          <text 
            x="0" y="4" 
            textAnchor="middle" 
            fontSize="10.5" 
            fontWeight={isTarget ? "800" : "700"} 
            fill={isTarget ? VISUAL_THEME.accentDark : VISUAL_THEME.textDark}
          >
            {label}
          </text>
        </g>
      )}
    </g>
  );
}

/**
 * RightAngleMarker: Penanda sudut siku-siku 90 derajat.
 */
export function RightAngleMarker({ x, y, size = 10, dirX = 1, dirY = -1, color = VISUAL_THEME.primary }) {
  const p1 = `${x},${y}`;
  const p2 = `${x + size * dirX},${y}`;
  const p3 = `${x + size * dirX},${y + size * dirY}`;
  const p4 = `${x},${y + size * dirY}`;

  return (
    <polyline 
      points={`${p2} ${p3} ${p4}`} 
      fill="none" 
      stroke={color} 
      strokeWidth="1.75" 
    />
  );
}

/**
 * UnknownBadge: Lencana penanda target soal (?) dengan aksen amber/merah kontras.
 */
export function UnknownBadge({ x, y, label = "?", width = 36, height = 26, sublabel }) {
  return (
    <g transform={`translate(${x - width / 2}, ${y - height / 2})`}>
      <rect 
        width={width} 
        height={height} 
        rx="5" 
        fill={VISUAL_THEME.accentSoft} 
        stroke={VISUAL_THEME.accent} 
        strokeWidth="1.75" 
        strokeDasharray="3 2"
      />
      <text 
        x={width / 2} 
        y={sublabel ? height / 2 - 1 : height / 2 + 5} 
        textAnchor="middle" 
        fontSize="13" 
        fontWeight="900" 
        fill={VISUAL_THEME.accentDark}
      >
        {label}
      </text>
      {sublabel && (
        <text 
          x={width / 2} 
          y={height / 2 + 9} 
          textAnchor="middle" 
          fontSize="8" 
          fontWeight="700" 
          fill={VISUAL_THEME.textMuted}
        >
          {sublabel}
        </text>
      )}
    </g>
  );
}

/**
 * GridBackdrop: Latar belakang grid petak untuk bidang koordinat dan bar-model.
 */
export function GridBackdrop({ x = 0, y = 0, width = 300, height = 150, step = 20 }) {
  const verticalLines = [];
  const horizontalLines = [];

  for (let vx = x + step; vx < x + width; vx += step) {
    verticalLines.push(vx);
  }
  for (let hy = y + step; hy < y + height; hy += step) {
    horizontalLines.push(hy);
  }

  return (
    <g opacity="0.6">
      <rect x={x} y={y} width={width} height={height} fill="#FFFFFF" stroke={VISUAL_THEME.borderSubtle} strokeWidth="1" />
      {verticalLines.map((lineX) => (
        <line key={`v-${lineX}`} x1={lineX} y1={y} x2={lineX} y2={y + height} stroke={VISUAL_THEME.gridLine} strokeWidth="0.75" />
      ))}
      {horizontalLines.map((lineY) => (
        <line key={`h-${lineY}`} x1={x} y1={lineY} x2={x + width} y2={lineY} stroke={VISUAL_THEME.gridLine} strokeWidth="0.75" />
      ))}
    </g>
  );
}
