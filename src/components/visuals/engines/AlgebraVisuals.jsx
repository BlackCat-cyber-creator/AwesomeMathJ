import React from 'react';
import { VISUAL_THEME } from '../theme';
import { SvgContainer } from '../common/SvgContainer';
import { DimensionLine, UnknownBadge } from '../common/VisualElements';

/**
 * BarModelVisual:
 * Visualisasi Singapore Math Bar Model untuk SPLDV, Rasio, dan Selisih.
 */
export function BarModelVisual({ 
  title = "Diagram Model Pita SPLDV",
  caption,
  bars = [], // [{ label: 'x', width: 130, color: 'blue' }, { label: 'y', width: 65, color: 'green' }]
  rows = [], // [{ segments: [...], totalLabel: '10' }, { segments: [...], diffLabel: '4' }]
  target = "(?, ?)",
  targetLabel = "Nilai (x, y)",
  width = 350,
  height = 150
}) {
  // Hitung lebar maksimum baris untuk auto-scale agar tidak bertabrakan dengan target badge
  const hasTarget = Boolean(target);
  const targetAreaWidth = hasTarget ? 85 : 20;
  const maxAvailableBarWidth = width - 40 - targetAreaWidth; // misal 350 - 40 - 85 = 225

  // Cek apakah ada baris yang lebarnya melebihi maxAvailableBarWidth
  let maxRawWidth = 0;
  rows.forEach(r => {
    let rowW = (r.segments || []).reduce((sum, s) => sum + (s.width || 60) + (s.gap || 6), 0);
    if (r.totalLabel) rowW += 72;
    if (rowW > maxRawWidth) maxRawWidth = rowW;
  });

  const scaleFactor = (maxRawWidth > maxAvailableBarWidth && maxRawWidth > 0) 
    ? (maxAvailableBarWidth / maxRawWidth) 
    : 1;

  return (
    <SvgContainer width={width} height={height} title={title} caption={caption}>
      <rect x="8" y="6" width={width - 16} height={height - 12} rx="8" fill="#FFFFFF" stroke={VISUAL_THEME.borderSubtle} strokeWidth="1" />
      
      {rows.map((row, rIdx) => {
        const yPos = 36 + rIdx * 46;
        let curX = 24;

        return (
          <g key={`row-${rIdx}`}>
            {row.segments.map((seg, sIdx) => {
              const baseWidth = seg.width || 60;
              const segWidth = Math.round(baseWidth * scaleFactor);
              const isBlue = seg.color === 'blue' || !seg.color;
              const isGreen = seg.color === 'green';
              const isAmber = seg.color === 'amber';

              const fill = isGreen ? VISUAL_THEME.secondarySoft : isAmber ? VISUAL_THEME.accentSoft : VISUAL_THEME.primarySoft;
              const stroke = isGreen ? VISUAL_THEME.secondary : isAmber ? VISUAL_THEME.accent : VISUAL_THEME.primary;
              const textFill = isGreen ? VISUAL_THEME.secondaryDark : isAmber ? VISUAL_THEME.accentDark : VISUAL_THEME.primaryDark;

              const element = (
                <g key={`seg-${sIdx}`}>
                  <rect 
                    x={curX} 
                    y={yPos} 
                    width={segWidth} 
                    height="28" 
                    rx="4" 
                    fill={fill} 
                    stroke={stroke} 
                    strokeWidth="1.75" 
                    strokeDasharray={seg.dashed ? "3 2" : "none"}
                  />
                  <text 
                    x={curX + segWidth / 2} 
                    y={yPos + 18} 
                    textAnchor="middle" 
                    fontSize={segWidth < 30 ? "9.5" : "11"} 
                    fontWeight="800" 
                    fill={textFill}
                  >
                    {seg.label}
                  </text>
                </g>
              );
              curX += segWidth + (seg.gap || 6);
              return element;
            })}

            {/* Total Bracket / Label */}
            {row.totalLabel && (
              <g transform={`translate(${curX + 6}, ${yPos})`}>
                <rect width="64" height="28" rx="5" fill={VISUAL_THEME.primarySoft} stroke={VISUAL_THEME.primary} strokeWidth="1.25" />
                <text x="32" y="18" textAnchor="middle" fontSize="10.5" fontWeight="800" fill={VISUAL_THEME.primaryDark}>
                  = {row.totalLabel}
                </text>
              </g>
            )}

            {/* Difference / Note */}
            {row.note && (
              <text x={curX + 10} y={yPos + 18} fontSize="10" fontWeight="700" fill={VISUAL_THEME.accentDark}>
                {row.note}
              </text>
            )}
          </g>
        );
      })}

      {/* Target Focus Badge */}
      {target && (
        <g transform={`translate(${width - 82}, 78)`}>
          <rect width="70" height="46" rx="6" fill={VISUAL_THEME.dangerSoft} stroke={VISUAL_THEME.danger} strokeWidth="1.5" />
          <text x="35" y="18" textAnchor="middle" fontSize="9" fontWeight="700" fill={VISUAL_THEME.dangerDark}>
            {targetLabel}
          </text>
          <text x="35" y="36" textAnchor="middle" fontSize="13" fontWeight="900" fill={VISUAL_THEME.danger}>
            {target}
          </text>
        </g>
      )}
    </SvgContainer>
  );
}

/**
 * BalanceScaleVisual:
 * Neraca timbangan dua sisi untuk memodelkan persamaan aljabar (SPLDV / PLSV).
 */
export function BalanceScaleVisual({
  title = "Model Timbangan Neraca Seimbang",
  caption,
  leftItems = [{ type: 'box', label: 'x', count: 2 }, { type: 'weight', val: 5 }],
  rightItems = [{ type: 'weight', val: 13 }],
  width = 340,
  height = 155
}) {
  return (
    <SvgContainer width={width} height={height} title={title} caption={caption}>
      {/* Landasan dan Titik Tumpu (Fulcrum) */}
      <line x1="40" y1="138" x2="300" y2="138" stroke={VISUAL_THEME.textMuted} strokeWidth="2.5" strokeLinecap="round" />
      <polygon points="170,82 155,138 185,138" fill="#E2E8F0" stroke={VISUAL_THEME.textSecondary} strokeWidth="2" />
      <circle cx="170" cy="82" r="5" fill={VISUAL_THEME.primary} />

      {/* Lengan Timbangan (Seimbang Horizontal) */}
      <line x1="60" y1="82" x2="280" y2="82" stroke={VISUAL_THEME.primaryDark} strokeWidth="4" strokeLinecap="round" />

      {/* Tali Gantungan Kiri */}
      <line x1="90" y1="82" x2="65" y2="112" stroke="#94A3B8" strokeWidth="1.5" />
      <line x1="90" y1="82" x2="115" y2="112" stroke="#94A3B8" strokeWidth="1.5" />
      {/* Piringan Kiri */}
      <ellipse cx="90" cy="112" rx="35" ry="7" fill="#F1F5F9" stroke={VISUAL_THEME.primary} strokeWidth="2" />

      {/* Tali Gantungan Kanan */}
      <line x1="250" y1="82" x2="225" y2="112" stroke="#94A3B8" strokeWidth="1.5" />
      <line x1="250" y1="82" x2="275" y2="112" stroke="#94A3B8" strokeWidth="1.5" />
      {/* Piringan Kanan */}
      <ellipse cx="250" cy="112" rx="35" ry="7" fill="#F1F5F9" stroke={VISUAL_THEME.primary} strokeWidth="2" />

      {/* Muatan di Piringan Kiri */}
      <g transform="translate(62, 74)">
        {leftItems.map((item, i) => {
          if (item.type === 'box') {
            return (
              <g key={`lb-${i}`} transform={`translate(${i * 26}, 0)`}>
                <rect width="22" height="26" rx="4" fill={VISUAL_THEME.primarySoft} stroke={VISUAL_THEME.primary} strokeWidth="1.75" />
                <text x="11" y="17" textAnchor="middle" fontSize="12" fontWeight="800" fill={VISUAL_THEME.primaryDark}>{item.label || 'x'}</text>
              </g>
            );
          }
          return (
            <g key={`lw-${i}`} transform={`translate(48, 4)`}>
              <circle cx="12" cy="10" r="12" fill={VISUAL_THEME.secondarySoft} stroke={VISUAL_THEME.secondary} strokeWidth="1.75" />
              <text x="12" y="14" textAnchor="middle" fontSize="10" fontWeight="800" fill={VISUAL_THEME.secondaryDark}>+{item.val}</text>
            </g>
          );
        })}
      </g>

      {/* Muatan di Piringan Kanan */}
      <g transform="translate(225, 76)">
        {rightItems.map((item, i) => (
          <g key={`rw-${i}`}>
            <rect width="50" height="24" rx="4" fill={VISUAL_THEME.accentSoft} stroke={VISUAL_THEME.accent} strokeWidth="1.75" />
            <text x="25" y="16" textAnchor="middle" fontSize="12" fontWeight="800" fill={VISUAL_THEME.accentDark}>{item.val}</text>
          </g>
        ))}
      </g>

      {/* Indikator Seimbang (=) */}
      <circle cx="170" cy="48" r="14" fill="#FFFFFF" stroke={VISUAL_THEME.secondary} strokeWidth="1.5" />
      <text x="170" y="53" textAnchor="middle" fontSize="14" fontWeight="900" fill={VISUAL_THEME.secondary}>=</text>
    </SvgContainer>
  );
}

/**
 * ShoppingVisual:
 * Paket belanja kontekstual untuk soal cerita SPLDV (Buku, Pulpen, dll).
 */
export function ShoppingVisual({
  title = "Paket Belanja Alat Tulis",
  caption,
  packages = [], // [{ items: [{ type: 'buku', count: 3, label: 'x' }, { type: 'pulpen', count: 2, label: 'y' }], price: 'Rp16.500' }]
  targetLabel = "x = ?  •  y = ?",
  width = 340,
  height = 155
}) {
  return (
    <SvgContainer width={width} height={height} title={title} caption={caption}>
      {packages.map((pkg, pIdx) => {
        const yPos = 16 + pIdx * 56;

        return (
          <g key={`pkg-${pIdx}`} transform={`translate(16, ${yPos})`}>
            {/* Rak / Base Paket */}
            <rect x="0" y="0" width="200" height="46" rx="7" fill="#F8FAFC" stroke={VISUAL_THEME.borderSubtle} strokeWidth="1.25" />
            
            {/* Item-Item Visual */}
            <g transform="translate(10, 8)">
              {pkg.items.map((it, itIdx) => {
                const startOffset = itIdx === 0 ? 0 : 90;
                return (
                  <g key={`it-${itIdx}`} transform={`translate(${startOffset}, 0)`}>
                    {Array.from({ length: it.count }).map((_, cIdx) => {
                      if (it.type === 'buku') {
                        return (
                          <g key={`b-${cIdx}`} transform={`translate(${cIdx * 24}, 0)`}>
                            <rect width="18" height="26" rx="3" fill={VISUAL_THEME.primarySoft} stroke={VISUAL_THEME.primary} strokeWidth="1.5" />
                            <line x1="4" y1="6" x2="14" y2="6" stroke={VISUAL_THEME.primary} strokeWidth="1" />
                            <text x="9" y="21" textAnchor="middle" fontSize="8" fontWeight="800" fill={VISUAL_THEME.primaryDark}>
                              {it.label || 'x'}
                            </text>
                          </g>
                        );
                      }
                      // Default Pulpen
                      return (
                        <g key={`p-${cIdx}`} transform={`translate(${cIdx * 16}, 2)`}>
                          <rect width="8" height="23" rx="2" fill={VISUAL_THEME.accentSoft} stroke={VISUAL_THEME.accent} strokeWidth="1.25" />
                          <polygon points="1,23 7,23 4,26" fill={VISUAL_THEME.accent} />
                          <text x="4" y="15" textAnchor="middle" fontSize="7" fontWeight="800" fill={VISUAL_THEME.accentDark}>
                            {it.label || 'y'}
                          </text>
                        </g>
                      );
                    })}
                  </g>
                );
              })}
              {/* Tanda Plus Antar Item */}
              {pkg.items.length > 1 && (
                <text x="80" y="20" textAnchor="middle" fontSize="13" fontWeight="800" fill={VISUAL_THEME.textMuted}>+</text>
              )}
            </g>

            {/* Tag Harga Paket */}
            <rect x="210" y="8" width="94" height="30" rx="5" fill={VISUAL_THEME.primarySoft} stroke={VISUAL_THEME.primary} strokeWidth="1.5" />
            <text x="257" y="27" textAnchor="middle" fontSize="11" fontWeight="800" fill={VISUAL_THEME.primaryDark}>
              {pkg.price}
            </text>
          </g>
        );
      })}

      {targetLabel && (
        <text x={width / 2} y={height - 10} textAnchor="middle" fontSize="9.5" fontWeight="700" fill={VISUAL_THEME.textMuted}>
          {targetLabel}
        </text>
      )}
    </SvgContainer>
  );
}
