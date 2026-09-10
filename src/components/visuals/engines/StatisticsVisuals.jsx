import React from 'react';
import { VISUAL_THEME } from '../theme';
import { SvgContainer } from '../common/SvgContainer';

/**
 * BarChartVisual:
 * Diagram batang proporsional untuk bab Statistika / Data.
 */
export function BarChartVisual({
  title = "Diagram Batang",
  caption,
  categories = [
    { label: 'Basket', val: 12 },
    { label: 'Futsal', val: 18 },
    { label: 'Renang', val: 8 },
    { label: 'Musik', val: 14 }
  ],
  yMax = 20,
  yStep = 5,
  width = 330,
  heightSvg = 160
}) {
  const chartX = 42;
  const chartY = 22;
  const chartW = 265;
  const chartH = 95;
  const barW = 32;

  const slotW = chartW / categories.length;

  return (
    <SvgContainer width={width} height={heightSvg} title={title} caption={caption}>
      {/* Garis Grid Horizontal & Skala Sumbu Y */}
      {Array.from({ length: Math.floor(yMax / yStep) + 1 }).map((_, i) => {
        const val = i * yStep;
        const lineY = chartY + chartH - (val / yMax) * chartH;
        return (
          <g key={`y-${val}`}>
            <line x1={chartX} y1={lineY} x2={chartX + chartW} y2={lineY} stroke={VISUAL_THEME.gridLine} strokeWidth="1" />
            <text x={chartX - 6} y={lineY + 4} textAnchor="end" fontSize="9" fontWeight="600" fill={VISUAL_THEME.textMuted}>
              {val}
            </text>
          </g>
        );
      })}

      {/* Sumbu X & Y Utama */}
      <line x1={chartX} y1={chartY + chartH} x2={chartX + chartW} y2={chartY + chartH} stroke={VISUAL_THEME.axisLine} strokeWidth="1.5" />
      <line x1={chartX} y1={chartY} x2={chartX} y2={chartY + chartH} stroke={VISUAL_THEME.axisLine} strokeWidth="1.5" />

      {/* Batang Data */}
      {categories.map((cat, idx) => {
        const bH = (cat.val / yMax) * chartH;
        const bX = chartX + idx * slotW + (slotW - barW) / 2;
        const bY = chartY + chartH - bH;

        return (
          <g key={`bar-${idx}`}>
            {/* Batang */}
            <rect 
              x={bX} 
              y={bY} 
              width={barW} 
              height={bH} 
              rx="4" 
              fill={VISUAL_THEME.primarySoft} 
              stroke={VISUAL_THEME.primary} 
              strokeWidth="1.75" 
            />
            {/* Nilai Frekuensi di Atas Batang */}
            <text x={bX + barW / 2} y={bY - 4} textAnchor="middle" fontSize="10" fontWeight="800" fill={VISUAL_THEME.primaryDark}>
              {cat.val}
            </text>
            {/* Label Kategori di Bawah Sumbu */}
            <text x={bX + barW / 2} y={chartY + chartH + 16} textAnchor="middle" fontSize="9.5" fontWeight="700" fill={VISUAL_THEME.textDark}>
              {cat.label}
            </text>
          </g>
        );
      })}
    </SvgContainer>
  );
}

/**
 * ScatterPlotVisual:
 * Diagram pencar untuk Statistika SMA Kelas 11 (Korelasi & Regresi Linear).
 */
export function ScatterPlotVisual({
  title = "Diagram Pencar (Scatter Plot)",
  caption,
  trend = "positive", // 'positive' | 'negative' | 'none'
  points = [
    { x: 2, y: 3 }, { x: 3, y: 5 }, { x: 4, y: 6 }, { x: 5, y: 8 }, { x: 6, y: 9 }, { x: 7, y: 11 }
  ],
  trendLabel = "Korelasi Positif Kuat",
  width = 330,
  heightSvg = 160
}) {
  const chartX = 40;
  const chartY = 22;
  const chartW = 265;
  const chartH = 95;

  return (
    <SvgContainer width={width} height={heightSvg} title={title} caption={caption}>
      {/* Garis Sumbu X & Y */}
      <line x1={chartX} y1={chartY + chartH} x2={chartX + chartW} y2={chartY + chartH} stroke={VISUAL_THEME.axisLine} strokeWidth="1.5" />
      <line x1={chartX} y1={chartY} x2={chartX} y2={chartY + chartH} stroke={VISUAL_THEME.axisLine} strokeWidth="1.5" />

      {/* Garis Tren Regresi (Putus-putus) */}
      {trend === 'positive' && (
        <line x1={chartX + 15} y1={chartY + chartH - 15} x2={chartX + chartW - 20} y2={chartY + 15} stroke={VISUAL_THEME.accent} strokeWidth="2" strokeDasharray="4 2" />
      )}
      {trend === 'negative' && (
        <line x1={chartX + 15} y1={chartY + 15} x2={chartX + chartW - 20} y2={chartY + chartH - 15} stroke={VISUAL_THEME.accent} strokeWidth="2" strokeDasharray="4 2" />
      )}

      {/* Titik-Titik Sebaran */}
      {points.map((pt, i) => {
        const px = chartX + (pt.x / 8) * chartW;
        const py = chartY + chartH - (pt.y / 12) * chartH;
        return (
          <circle key={`pt-${i}`} cx={px} cy={py} r="4" fill={VISUAL_THEME.primary} stroke="#FFFFFF" strokeWidth="1.5" />
        );
      })}

      {/* Label Sumbu */}
      <text x={chartX + chartW - 10} y={chartY + chartH + 16} fontSize="9.5" fontWeight="700" fill={VISUAL_THEME.textSecondary}>Variabel X</text>
      <text x={chartX - 5} y={chartY + 10} textAnchor="end" fontSize="9.5" fontWeight="700" fill={VISUAL_THEME.textSecondary}>Y</text>

      {/* Badge Tren */}
      {trendLabel && (
        <g transform={`translate(${width / 2}, ${heightSvg - 10})`}>
          <rect x="-60" y="-10" width="120" height="20" rx="4" fill={VISUAL_THEME.accentSoft} stroke={VISUAL_THEME.accent} strokeWidth="1" />
          <text x="0" y="4" textAnchor="middle" fontSize="9.5" fontWeight="800" fill={VISUAL_THEME.accentDark}>
            {trendLabel}
          </text>
        </g>
      )}
    </SvgContainer>
  );
}
