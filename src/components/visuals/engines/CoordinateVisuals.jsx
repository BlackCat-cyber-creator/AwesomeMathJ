import React from 'react';
import { VISUAL_THEME } from '../theme';
import { SvgContainer } from '../common/SvgContainer';
import { GridBackdrop } from '../common/VisualElements';

/**
 * CartesianPlotVisual:
 * Bidang Kartesius interaktif untuk Transformasi Geometri (Translasi, Refleksi, Rotasi, Dilatasi) & Vektor.
 */
export function CartesianPlotVisual({
  title = "Bidang Koordinat Kartesius",
  caption,
  points = [], // [{ x: 3, y: -5, label: 'A(3, -5)', color: 'blue' }]
  arrow = null, // { from: {x: 3, y: -5}, to: {x: 1, y: 2}, label: 'T(-2, 7)', color: 'purple' }
  mirrorLine = null, // { type: 'x=2' | 'y=x' | 'axis-x' | 'axis-y' | 'x=h', label: 'Garis Cermin' }
  _rotationArc = null, // { center: {x: 0, y: 0}, angle: '90° CCW' }
  targetPoint = null, // { label: "A'(?, ?)", x: 1, y: 2 }
  xRange: xRangeProp,
  yRange: yRangeProp,
  width = 330,
  heightSvg = 165
}) {
  // Auto-compute range from all data points if not explicitly provided
  const allCoords = [];
  points.forEach(p => allCoords.push({ x: p.x, y: p.y }));
  if (arrow) {
    allCoords.push({ x: arrow.from.x, y: arrow.from.y });
    allCoords.push({ x: arrow.to.x, y: arrow.to.y });
  }
  if (targetPoint) allCoords.push({ x: targetPoint.x, y: targetPoint.y });
  if (mirrorLine && mirrorLine.type === 'x=h' && mirrorLine.val != null) {
    allCoords.push({ x: mirrorLine.val, y: 0 });
  }
  allCoords.push({ x: 0, y: 0 }); // Always include origin

  const xMin = Math.min(...allCoords.map(c => c.x));
  const xMax = Math.max(...allCoords.map(c => c.x));
  const yMin = Math.min(...allCoords.map(c => c.y));
  const yMax = Math.max(...allCoords.map(c => c.y));

  const xRange = xRangeProp || [Math.min(xMin - 1, -2), Math.max(xMax + 1, 2)];
  const yRange = yRangeProp || [Math.min(yMin - 1, -2), Math.max(yMax + 1, 2)];

  const gridPadding = 30;
  const usableW = width - gridPadding * 2;
  const usableH = heightSvg - gridPadding * 2;
  const xSpan = xRange[1] - xRange[0];
  const ySpan = yRange[1] - yRange[0];
  const unitPx = Math.min(usableW / xSpan, usableH / ySpan, 18);

  // Position origin so it maps correctly
  const originCanvasX = gridPadding + (-xRange[0]) * unitPx;
  const originCanvasY = gridPadding + yRange[1] * unitPx;

  const toCanvas = (cx, cy) => ({
    x: originCanvasX + cx * unitPx,
    y: originCanvasY - cy * unitPx
  });

  return (
    <SvgContainer width={width} height={heightSvg} title={title} caption={caption}>
      {/* Grid Petak Latar Belakang */}
      <GridBackdrop x={15} y={10} width={width - 30} height={heightSvg - 20} step={unitPx} />

      {/* Sumbu X dan Sumbu Y */}
      <line x1={20} y1={originCanvasY} x2={width - 20} y2={originCanvasY} stroke={VISUAL_THEME.axisLine} strokeWidth="1.75" />
      <line x1={originCanvasX} y1={heightSvg - 15} x2={originCanvasX} y2={15} stroke={VISUAL_THEME.axisLine} strokeWidth="1.75" />

      {/* Panah Ujung Sumbu */}
      <polygon points={`${width - 20},${originCanvasY - 3} ${width - 14},${originCanvasY} ${width - 20},${originCanvasY + 3}`} fill={VISUAL_THEME.axisLine} />
      <polygon points={`${originCanvasX - 3},20 ${originCanvasX},14 ${originCanvasX + 3},20`} fill={VISUAL_THEME.axisLine} />

      {/* Label Sumbu X & Y */}
      <text x={width - 24} y={originCanvasY - 6} fontSize="11" fontWeight="800" fill={VISUAL_THEME.textSecondary}>x</text>
      <text x={originCanvasX + 7} y={23} fontSize="11" fontWeight="800" fill={VISUAL_THEME.textSecondary}>y</text>
      <text x={originCanvasX - 8} y={originCanvasY + 12} fontSize="9" fontWeight="700" fill={VISUAL_THEME.textMuted}>O</text>

      {/* Garis Cermin Refleksi jika ada */}
      {mirrorLine && (
        <g>
          {mirrorLine.type === 'x=h' ? (
            (() => {
              const mx = originCanvasX + (mirrorLine.val || 0) * unitPx;
              return (
                <>
                  <line x1={mx} y1={15} x2={mx} y2={heightSvg - 15} stroke={VISUAL_THEME.danger} strokeWidth="1.75" strokeDasharray="4 2" />
                  <text x={mx + 4} y={26} fontSize="9.5" fontWeight="800" fill={VISUAL_THEME.dangerDark}>{mirrorLine.label}</text>
                </>
              );
            })()
          ) : mirrorLine.type === 'y=x' ? (
            <>
              <line x1={originCanvasX - 70} y1={originCanvasY + 70} x2={originCanvasX + 70} y2={originCanvasY - 70} stroke={VISUAL_THEME.danger} strokeWidth="1.75" strokeDasharray="4 2" />
              <text x={originCanvasX + 45} y={originCanvasY - 50} fontSize="9.5" fontWeight="800" fill={VISUAL_THEME.dangerDark}>{mirrorLine.label || 'y = x'}</text>
            </>
          ) : mirrorLine.type === 'axis-x' ? (
            <>
              <line x1={20} y1={originCanvasY} x2={width - 20} y2={originCanvasY} stroke={VISUAL_THEME.danger} strokeWidth="2.5" strokeDasharray="5 3" />
              <text x={width - 55} y={originCanvasY - 6} fontSize="9.5" fontWeight="800" fill={VISUAL_THEME.dangerDark}>{mirrorLine.label || 'Sumbu-X'}</text>
            </>
          ) : mirrorLine.type === 'axis-y' ? (
            <>
              <line x1={originCanvasX} y1={15} x2={originCanvasX} y2={heightSvg - 15} stroke={VISUAL_THEME.danger} strokeWidth="2.5" strokeDasharray="5 3" />
              <text x={originCanvasX + 6} y={24} fontSize="9.5" fontWeight="800" fill={VISUAL_THEME.dangerDark}>{mirrorLine.label || 'Sumbu-Y'}</text>
            </>
          ) : null}
        </g>
      )}

      {/* Panah Transformasi Translasi / Vektor */}
      {arrow && (() => {
        const p1 = toCanvas(arrow.from.x, arrow.from.y);
        const p2 = toCanvas(arrow.to.x, arrow.to.y);
        return (
          <g>
            <line 
              x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} 
              stroke={VISUAL_THEME.purple} 
              strokeWidth="2.25" 
              strokeDasharray="4 2" 
            />
            {/* Titik Tiba Panah */}
            <circle cx={p2.x} cy={p2.y} r="3" fill={VISUAL_THEME.purple} />
            {arrow.label && (
              <g transform={`translate(${(p1.x + p2.x) / 2}, ${(p1.y + p2.y) / 2 - 10})`}>
                <rect x="-24" y="-8" width="48" height="16" rx="3" fill={VISUAL_THEME.purpleSoft} stroke={VISUAL_THEME.purple} strokeWidth="1" />
                <text x="0" y="4" textAnchor="middle" fontSize="9" fontWeight="800" fill={VISUAL_THEME.purpleDark}>
                  {arrow.label}
                </text>
              </g>
            )}
          </g>
        );
      })()}

      {/* Titik-Titik Awal (Points) */}
      {points.map((pt, i) => {
        const cp = toCanvas(pt.x, pt.y);
        return (
          <g key={`pt-${i}`}>
            {/* Garis Proyeksi Putus-putus ke Sumbu */}
            <line x1={cp.x} y1={cp.y} x2={cp.x} y2={originCanvasY} stroke="#94A3B8" strokeWidth="1" strokeDasharray="2 2" />
            <line x1={cp.x} y1={cp.y} x2={originCanvasX} y2={cp.y} stroke="#94A3B8" strokeWidth="1" strokeDasharray="2 2" />
            
            <circle cx={cp.x} cy={cp.y} r="4.5" fill={VISUAL_THEME.primary} stroke="#FFFFFF" strokeWidth="1.5" />
            {pt.label && (
              <text x={cp.x + 7} y={cp.y - 6} fontSize="10.5" fontWeight="800" fill={VISUAL_THEME.primaryDark}>
                {pt.label}
              </text>
            )}
          </g>
        );
      })}

      {/* Titik Bayangan Target yang Dicari (?) */}
      {targetPoint && (() => {
        const tp = toCanvas(targetPoint.x, targetPoint.y);
        return (
          <g>
            <circle cx={tp.x} cy={tp.y} r="6" fill={VISUAL_THEME.accentSoft} stroke={VISUAL_THEME.accent} strokeWidth="2" strokeDasharray="2 2" />
            <g transform={`translate(${tp.x + 8}, ${tp.y + 16})`}>
              <rect x="-26" y="-9" width="52" height="18" rx="4" fill={VISUAL_THEME.accentSoft} stroke={VISUAL_THEME.accent} strokeWidth="1.25" />
              <text x="0" y="4" textAnchor="middle" fontSize="9.5" fontWeight="900" fill={VISUAL_THEME.accentDark}>
                {targetPoint.label || "A'(?, ?)"}
              </text>
            </g>
          </g>
        );
      })()}
    </SvgContainer>
  );
}
