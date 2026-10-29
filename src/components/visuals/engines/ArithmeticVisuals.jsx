import React from 'react';
import { VISUAL_THEME } from '../theme';
import { SvgContainer } from '../common/SvgContainer';

/**
 * NumberLineVisual:
 * Garis bilangan dengan busur lompatan pola berulang (Pola Bilangan, Lompatan, Barisan).
 */
/**
 * IntegerNumberLine:
 * Garis bilangan bulat berskala. Hanya menandai bilangan yang diketahui di soal
 * (marks); hasil akhir tidak pernah digambar agar tidak membocorkan jawaban.
 */
function IntegerNumberLine({ title, caption, min, max, step, marks, targetLabel, width, heightSvg }) {
  const startX = 24;
  const endX = width - 24;
  const lineY = 70;
  const toX = (v) => startX + ((v - min) / (max - min)) * (endX - startX);
  const ticks = [];
  for (let v = min; v <= max; v += step) ticks.push(v);
  const labelEvery = Math.max(1, Math.ceil(ticks.length / 11));

  return (
    <SvgContainer width={width} height={heightSvg} title={title} caption={caption}>
      <line x1={startX - 10} y1={lineY} x2={endX + 10} y2={lineY} stroke={VISUAL_THEME.textSecondary} strokeWidth="2" />
      <polygon points={`${endX + 14},${lineY} ${endX + 6},${lineY - 4} ${endX + 6},${lineY + 4}`} fill={VISUAL_THEME.textSecondary} />
      <polygon points={`${startX - 14},${lineY} ${startX - 6},${lineY - 4} ${startX - 6},${lineY + 4}`} fill={VISUAL_THEME.textSecondary} />
      {ticks.map((v, i) => (
        <g key={`tick-${v}`}>
          <line x1={toX(v)} y1={lineY - 5} x2={toX(v)} y2={lineY + 5} stroke={VISUAL_THEME.textSecondary} strokeWidth={v === 0 ? 2 : 1.25} />
          {(i % labelEvery === 0 || v === 0) && (
            <text x={toX(v)} y={lineY + 18} textAnchor="middle" fontSize="9" fontWeight={v === 0 ? 800 : 600} fill={VISUAL_THEME.textDark}>
              {v < 0 ? `−${Math.abs(v)}` : v}
            </text>
          )}
        </g>
      ))}
      {marks.map((m, i) => (
        <g key={`mark-${i}`}>
          <circle cx={toX(m.val)} cy={lineY} r="5" fill={VISUAL_THEME.primary} stroke="#FFFFFF" strokeWidth="1.5" />
          <text x={toX(m.val)} y={lineY - 12} textAnchor="middle" fontSize="10" fontWeight="800" fill={VISUAL_THEME.primaryDark}>
            {m.label}
          </text>
        </g>
      ))}
      {targetLabel && (
        <g transform={`translate(${width - 70}, 22)`}>
          <rect x="-58" y="-11" width="116" height="22" rx="5" fill={VISUAL_THEME.accentSoft} stroke={VISUAL_THEME.accent} strokeWidth="1.5" />
          <text x="0" y="4" textAnchor="middle" fontSize="10" fontWeight="800" fill={VISUAL_THEME.accentDark}>{targetLabel}</text>
        </g>
      )}
    </SvgContainer>
  );
}

export function NumberLineVisual({
  title = "Pola Barisan Bilangan",
  caption = "*Temukan aturan pola untuk menentukan bilangan selanjutnya",
  items = [],
  target = "?",
  slots = null,
  targetIndex = null,
  promptText = "Berapakah bilangan pada kotak bertanda tanya?",
  min,
  max,
  step = 1,
  marks = [],
  targetLabel,
  width = 345,
  heightSvg = 145
}) {
  // Mode garis bilangan bulat (Kelas 7): sumbu berskala dengan titik awal yang diketahui
  if (min !== undefined && max !== undefined) {
    return (
      <IntegerNumberLine
        title={title} caption={caption} min={min} max={max} step={step}
        marks={marks} targetLabel={targetLabel} width={width} heightSvg={heightSvg}
      />
    );
  }

  // Normalize slots data
  let resolvedSlots = [];
  if (Array.isArray(slots) && slots.length > 0) {
    resolvedSlots = slots.map((s, idx) => {
      if (typeof s === 'object' && s !== null) {
        return {
          val: s.val !== undefined ? s.val : '?',
          sub: s.sub || `U${idx + 1}`,
          isTarget: Boolean(s.isTarget || s.val === '?'),
          isPlaceholder: Boolean(s.isPlaceholder)
        };
      }
      return {
        val: s,
        sub: `U${idx + 1}`,
        isTarget: s === '?',
        isPlaceholder: false
      };
    });
  } else if (targetIndex && targetIndex > items.length + 1) {
    // Generate intermediate placeholder jumps to targetIndex (e.g. U7)
    resolvedSlots = items.map((val, i) => ({
      val,
      sub: `U${i + 1}`,
      isTarget: false,
      isPlaceholder: false
    }));
    for (let u = items.length + 1; u < targetIndex; u++) {
      resolvedSlots.push({
        val: '…',
        sub: `U${u}`,
        isTarget: false,
        isPlaceholder: true
      });
    }
    resolvedSlots.push({
      val: target,
      sub: `U${targetIndex}`,
      isTarget: true,
      isPlaceholder: false
    });
  } else {
    // Standard sequence items + target at end
    resolvedSlots = items.map((val, i) => ({
      val,
      sub: `U${i + 1}`,
      isTarget: false,
      isPlaceholder: false
    }));
    resolvedSlots.push({
      val: target,
      sub: `U${items.length + 1}`,
      isTarget: true,
      isPlaceholder: false
    });
  }

  const totalSpots = resolvedSlots.length;
  const startX = 32;
  const endX = width - 32;
  const stepX = (endX - startX) / Math.max(1, totalSpots - 1);
  const lineY = 68;

  return (
    <SvgContainer width={width} height={heightSvg} title={title} caption={caption}>
      {/* Garis Dasar Bilangan */}
      <line x1={startX - 15} y1={lineY} x2={endX + 15} y2={lineY} stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />

      {/* Titik / Nilai / Kotak Bilangan */}
      {resolvedSlots.map((slot, i) => {
        const cx = startX + i * stepX;
        return (
          <g key={`spot-${i}`}>
            {slot.isTarget ? (
              <rect 
                x={cx - 16} y={lineY - 16} width="32" height="32" rx="6" 
                fill={VISUAL_THEME.accentSoft} 
                stroke={VISUAL_THEME.accent} 
                strokeWidth="2" 
                strokeDasharray="3 2" 
              />
            ) : slot.isPlaceholder ? (
              <circle 
                cx={cx} cy={lineY} r="15" 
                fill="#F8FAFC" 
                stroke="#94A3B8" 
                strokeWidth="1.5" 
                strokeDasharray="3 2" 
              />
            ) : (
              <circle 
                cx={cx} cy={lineY} r="16" 
                fill={VISUAL_THEME.primarySoft} 
                stroke={VISUAL_THEME.primary} 
                strokeWidth="2" 
              />
            )}

            {/* Label Nilai Utama */}
            <text 
              x={cx} 
              y={lineY + (slot.isTarget ? 6 : slot.isPlaceholder ? 4 : 5)} 
              textAnchor="middle" 
              fontSize={slot.isTarget ? "15" : slot.isPlaceholder ? "10" : "11.5"} 
              fontWeight={slot.isTarget ? "900" : slot.isPlaceholder ? "700" : "800"} 
              fill={slot.isTarget ? VISUAL_THEME.accentDark : slot.isPlaceholder ? "#64748B" : VISUAL_THEME.primaryDark}
            >
              {slot.val}
            </text>

            {/* Subscript Identifikasi Suku (U₁, U₂, dst.) */}
            {slot.sub && (
              <text 
                x={cx} 
                y={lineY + 28} 
                textAnchor="middle" 
                fontSize="9.5" 
                fontWeight="700" 
                fill={slot.isTarget ? VISUAL_THEME.accentDark : "#64748B"}
              >
                {slot.sub}
              </text>
            )}
          </g>
        );
      })}

      {/* Busur Lompatan Antar Suku Berurutan */}
      {resolvedSlots.slice(0, -1).map((slot, i) => {
        const nextSlot = resolvedSlots[i + 1];
        const x1 = startX + i * stepX;
        const x2 = startX + (i + 1) * stepX;
        const midX = (x1 + x2) / 2;
        const isDashed = slot.isPlaceholder || nextSlot.isPlaceholder;

        return (
          <g key={`arc-${i}`}>
            <path 
              d={`M ${x1} ${lineY - 17} Q ${midX} ${lineY - 40} ${x2} ${lineY - 17}`} 
              fill="none" 
              stroke={isDashed ? "#94A3B8" : VISUAL_THEME.primary} 
              strokeWidth="1.75" 
              strokeDasharray={isDashed ? "3 2" : undefined}
            />
            {/* Titik Puncak Busur Halus */}
            <circle cx={midX} cy={lineY - 28.5} r="2.25" fill={isDashed ? "#94A3B8" : VISUAL_THEME.primary} />
          </g>
        );
      })}

      <text x={width / 2} y={heightSvg - 8} textAnchor="middle" fontSize="9.5" fontWeight="600" fill={VISUAL_THEME.textMuted}>
        {promptText}
      </text>
    </SvgContainer>
  );
}

/**
 * FractionStripVisual:
 * Strip pecahan berpetak dengan arsiran (Singapore Math Fraction Bar).
 */
export function FractionStripVisual({
  title = "Model Pecahan",
  caption,
  totalParts = 5,
  shadedParts = 3,
  shadedGroups = null, // e.g. [3, 2] for 3/7 + 2/7
  _label,
  targetBadge = null,
  showAnswerBadge = false,
  width = 320,
  heightSvg = 130
}) {
  const startX = 35;
  const startY = 42;
  const barW = 250;
  const barH = 34;
  const partW = barW / totalParts;

  const getCellTheme = (index) => {
    if (shadedGroups && Array.isArray(shadedGroups)) {
      let cumulative = 0;
      const palette = [
        { fill: VISUAL_THEME.primarySoft, stroke: VISUAL_THEME.primary, text: VISUAL_THEME.primaryDark },
        { fill: VISUAL_THEME.accentSoft, stroke: VISUAL_THEME.accent, text: VISUAL_THEME.accentDark },
        { fill: '#DCFCE7', stroke: '#16A34A', text: '#15803D' }
      ];
      for (let g = 0; g < shadedGroups.length; g++) {
        const count = shadedGroups[g];
        if (index >= cumulative && index < cumulative + count) {
          return palette[g % palette.length];
        }
        cumulative += count;
      }
      return { fill: '#FFFFFF', stroke: '#E2E8F0', text: VISUAL_THEME.textMuted };
    }
    const isShaded = index < shadedParts;
    return {
      fill: isShaded ? VISUAL_THEME.primarySoft : '#FFFFFF',
      stroke: isShaded ? VISUAL_THEME.primary : '#E2E8F0',
      text: isShaded ? VISUAL_THEME.primaryDark : VISUAL_THEME.textMuted
    };
  };

  const badgeText = targetBadge || (showAnswerBadge ? `${shadedParts} dari ${totalParts} bagian` : null);

  return (
    <SvgContainer width={width} height={heightSvg} title={title} caption={caption}>
      <rect x={startX} y={startY} width={barW} height={barH} rx="5" fill="#FFFFFF" stroke={VISUAL_THEME.borderSubtle} strokeWidth="1.5" />

      {Array.from({ length: totalParts }).map((_, i) => {
        const theme = getCellTheme(i);
        return (
          <g key={`part-${i}`}>
            <rect 
              x={startX + i * partW} 
              y={startY} 
              width={partW} 
              height={barH} 
              fill={theme.fill} 
              stroke={theme.stroke} 
              strokeWidth="1.25" 
            />
            <text 
              x={startX + i * partW + partW / 2} 
              y={startY + 21} 
              textAnchor="middle" 
              fontSize="10" 
              fontWeight="700" 
              fill={theme.text}
            >
              1/{totalParts}
            </text>
          </g>
        );
      })}

      {badgeText && (
        <g transform={`translate(${width / 2}, ${startY + barH + 24})`}>
          <rect x="-55" y="-12" width="110" height="24" rx="4" fill={VISUAL_THEME.primarySoft} stroke={VISUAL_THEME.primary} strokeWidth="1" />
          <text x="0" y="4" textAnchor="middle" fontSize="11" fontWeight="800" fill={VISUAL_THEME.primaryDark}>
            {badgeText}
          </text>
        </g>
      )}
    </SvgContainer>
  );
}

/**
 * ClockAngleVisual:
 * Jam analog untuk bab Sudut SD (Kelas 5 Bab 6).
 */
export function ClockAngleVisual({
  title = "Sudut Jarum Jam",
  caption,
  hour = 3,
  minute = 0,
  angleLabel = "?°",
  angleType = "Besar Sudut = ?",
  width = 330,
  heightSvg = 150
}) {
  const cx = 110;
  const cy = 75;
  const r = 48;

  // Hitung sudut jarum jam dalam derajat (0 di angka 12, putaran searah jarum jam)
  const minuteAngle = minute * 6; // 360 / 60
  const hourAngle = (hour % 12) * 30 + (minute / 60) * 30; // 360 / 12

  // Koordinat ujung jarum menit
  const minRad = ((minuteAngle - 90) * Math.PI) / 180;
  const mx = cx + 38 * Math.cos(minRad);
  const my = cy + 38 * Math.sin(minRad);

  // Koordinat ujung jarum jam
  const hrRad = ((hourAngle - 90) * Math.PI) / 180;
  const hx = cx + 26 * Math.cos(hrRad);
  const hy = cy + 26 * Math.sin(hrRad);

  return (
    <SvgContainer width={width} height={heightSvg} title={title} caption={caption}>
      {/* Muka Jam */}
      <circle cx={cx} cy={cy} r={r} fill="#FFFFFF" stroke={VISUAL_THEME.primary} strokeWidth="2.25" />
      <circle cx={cx} cy={cy} r="4" fill={VISUAL_THEME.primaryDark} />

      {/* Tanda Angka Jam Kunci */}
      <text x={cx} y={cy - 34} textAnchor="middle" fontSize="9" fontWeight="800" fill={VISUAL_THEME.textSecondary}>12</text>
      <text x={cx + 38} y={cy + 3.5} textAnchor="middle" fontSize="9" fontWeight="800" fill={VISUAL_THEME.textSecondary}>3</text>
      <text x={cx} y={cy + 42} textAnchor="middle" fontSize="9" fontWeight="800" fill={VISUAL_THEME.textSecondary}>6</text>
      <text x={cx - 38} y={cy + 3.5} textAnchor="middle" fontSize="9" fontWeight="800" fill={VISUAL_THEME.textSecondary}>9</text>

      {/* Jarum Jam (Pendek & Tebal) */}
      <line x1={cx} y1={cy} x2={hx} y2={hy} stroke={VISUAL_THEME.textDark} strokeWidth="3" strokeLinecap="round" />
      {/* Jarum Menit (Panjang) */}
      <line x1={cx} y1={cy} x2={mx} y2={my} stroke={VISUAL_THEME.primary} strokeWidth="2" strokeLinecap="round" />

      {/* Keterangan Sudut di Sisi Kanan */}
      <g transform={`translate(${width - 85}, ${cy})`}>
        <rect x="-55" y="-30" width="110" height="60" rx="6" fill={VISUAL_THEME.accentSoft} stroke={VISUAL_THEME.accent} strokeWidth="1.5" />
        <text x="0" y="-12" textAnchor="middle" fontSize="10" fontWeight="700" fill={VISUAL_THEME.accentDark}>
          Pukul {String(hour).padStart(2, '0')}.{String(minute).padStart(2, '0')}
        </text>
        <text x="0" y="8" textAnchor="middle" fontSize="16" fontWeight="900" fill={VISUAL_THEME.danger}>
          {angleLabel}
        </text>
        <text x="0" y="22" textAnchor="middle" fontSize="9" fontWeight="700" fill={VISUAL_THEME.textSecondary}>
          {angleType}
        </text>
      </g>
    </SvgContainer>
  );
}

/**
 * UnitGridVisual:
 * Kotak petak satuan untuk bab Luas & Keliling SD (Kelas 4 Bab 4).
 */
export function UnitGridVisual({
  title = "Pengukuran Luas Petak Satuan",
  caption,
  cols = 6,
  rows = 4,
  unitSize = 25,
  width = 340,
  heightSvg = 155
}) {
  const actualUnit = cols <= 4 ? 26 : unitSize;
  const gridW = cols * actualUnit;
  const gridH = rows * actualUnit;
  const startX = 85;
  const startY = Math.max(26, Math.floor((heightSvg - gridH) / 2) - 4);

  return (
    <SvgContainer width={width} height={heightSvg} title={title} caption={caption}>
      {/* Grid Petak-Petak Satuan */}
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((_, c) => (
          <rect 
            key={`cell-${r}-${c}`}
            x={startX + c * actualUnit} 
            y={startY + r * actualUnit} 
            width={actualUnit} 
            height={actualUnit} 
            fill="#EFF6FF" 
            stroke={VISUAL_THEME.primary} 
            strokeWidth="1.25" 
          />
        ))
      )}

      {/* Label Dimensi Petak Atas (Panjang) */}
      <g transform={`translate(${startX + gridW / 2}, ${startY - 10})`}>
        <rect x="-42" y="-8" width="84" height="16" rx="3" fill="#FFFFFF" stroke={VISUAL_THEME.borderSubtle} strokeWidth="1" />
        <text x="0" y="4" textAnchor="middle" fontSize="9.5" fontWeight="800" fill={VISUAL_THEME.primaryDark}>
          {cols} petak satuan
        </text>
      </g>

      {/* Label Dimensi Petak Kiri (Lebar) */}
      <g transform={`translate(${startX - 44}, ${startY + gridH / 2})`}>
        <rect x="-38" y="-8" width="76" height="16" rx="3" fill="#FFFFFF" stroke={VISUAL_THEME.borderSubtle} strokeWidth="1" />
        <text x="0" y="4" textAnchor="middle" fontSize="9" fontWeight="800" fill={VISUAL_THEME.primaryDark}>
          {rows} petak satuan
        </text>
      </g>

      {/* Target Badge */}
      <g transform={`translate(${width - 58}, ${startY + gridH / 2})`}>
        <rect x="-38" y="-14" width="76" height="28" rx="5" fill={VISUAL_THEME.accentSoft} stroke={VISUAL_THEME.accent} strokeWidth="1.5" />
        <text x="0" y="4.5" textAnchor="middle" fontSize="10" fontWeight="800" fill={VISUAL_THEME.accentDark}>
          Luas = ? petak
        </text>
      </g>
    </SvgContainer>
  );
}

/**
 * PictogramVisual:
 * Piktogram gambar simbol berulang untuk SD (Kelas 4 Bab 6 & Kelas 5 Bab 8).
 */
export function PictogramVisual({
  title = "Piktogram (Diagram Gambar)",
  caption,
  rows = [],
  symbol = "⭐",
  unitLabel = "",
  width = 330,
  heightSvg = 150
}) {
  return (
    <SvgContainer width={width} height={heightSvg} title={title} caption={caption}>
      {rows.map((row, rIdx) => {
        const yPos = 30 + rIdx * 30;
        return (
          <g key={`prow-${rIdx}`} transform={`translate(30, ${yPos})`}>
            {/* Label Kategori Hari / Nama */}
            <text x="0" y="14" fontSize="10.5" fontWeight="800" fill={VISUAL_THEME.textDark}>
              {row.label}
            </text>
            <text x="55" y="14" fontSize="11" fontWeight="700" fill={VISUAL_THEME.textMuted}>:</text>

            {/* Simbol-Simbol Berulang */}
            <g transform="translate(68, 0)">
              {typeof row.count === 'number' ? (
                Array.from({ length: row.count }).map((_, sIdx) => (
                  <text key={`sym-${sIdx}`} x={sIdx * 24} y="15" fontSize="15">
                    {symbol}
                  </text>
                ))
              ) : (
                // Jumlah simbol yang ditanyakan: tampilkan kotak tanya, bukan jawabannya
                <g>
                  <rect x="0" y="-1" width="60" height="22" rx="4" fill={VISUAL_THEME.accentSoft} stroke={VISUAL_THEME.accent} strokeWidth="1.5" strokeDasharray="3 2" />
                  <text x="30" y="14" textAnchor="middle" fontSize="11" fontWeight="800" fill={VISUAL_THEME.accentDark}>
                    {row.count || '?'}
                  </text>
                </g>
              )}
            </g>
          </g>
        );
      })}

      {/* Kunci Legenda Piktogram di Bawah */}
      {unitLabel && (
        <g transform={`translate(${width / 2}, ${heightSvg - 12})`}>
          <rect x="-70" y="-10" width="140" height="20" rx="4" fill={VISUAL_THEME.primarySoft} stroke={VISUAL_THEME.primary} strokeWidth="1" />
          <text x="0" y="4" textAnchor="middle" fontSize="9.5" fontWeight="800" fill={VISUAL_THEME.primaryDark}>
            Kunci: {unitLabel}
          </text>
        </g>
      )}
    </SvgContainer>
  );
}

/**
 * ProbabilityBagVisual:
 * Kantong/Toples transparan berisi kelereng untuk bab Peluang.
 */
export function ProbabilityBagVisual({
  title = "Peluang Pengambilan Objek",
  caption,
  items = [],
  targetLabel = "Peluang Terambil = ?",
  width = 330,
  heightSvg = 150
}) {
  return (
    <SvgContainer width={width} height={heightSvg} title={title} caption={caption}>
      <g transform="translate(45, 18)">
        <rect x="0" y="10" width="115" height="95" rx="14" fill="#F8FAFC" stroke={VISUAL_THEME.primary} strokeWidth="2" strokeDasharray="6 3" />
        <ellipse cx="57.5" cy="10" rx="45" ry="8" fill="#EFF6FF" stroke={VISUAL_THEME.primary} strokeWidth="2" />

        {[
          { cx: 30, cy: 80 }, { cx: 50, cy: 85 }, { cx: 70, cy: 80 }, { cx: 90, cy: 85 }, { cx: 40, cy: 65 }
        ].map((pt, i) => (
          <circle key={`r-${i}`} cx={pt.cx} cy={pt.cy} r="8" fill="#F87171" stroke="#DC2626" strokeWidth="1.25" />
        ))}
        {[
          { cx: 60, cy: 65 }, { cx: 80, cy: 65 }, { cx: 35, cy: 45 }, { cx: 55, cy: 45 }
        ].map((pt, i) => (
          <circle key={`b-${i}`} cx={pt.cx} cy={pt.cy} r="8" fill="#60A5FA" stroke="#2563EB" strokeWidth="1.25" />
        ))}
        {[
          { cx: 75, cy: 45 }, { cx: 50, cy: 30 }, { cx: 70, cy: 30 }
        ].map((pt, i) => (
          <circle key={`g-${i}`} cx={pt.cx} cy={pt.cy} r="8" fill="#4ADE80" stroke="#16A34A" strokeWidth="1.25" />
        ))}
      </g>

      <g transform="translate(185, 25)">
        {items.map((it, idx) => (
          <g key={`leg-${idx}`} transform={`translate(0, ${idx * 28})`}>
            <circle cx="8" cy="8" r="7" fill={it.fill} stroke={it.stroke} strokeWidth="1.5" />
            <text x="22" y="12" fontSize="11" fontWeight="700" fill={VISUAL_THEME.textDark}>
              {it.label}
            </text>
          </g>
        ))}

        <g transform="translate(0, 90)">
          <rect width="115" height="24" rx="4" fill={VISUAL_THEME.accentSoft} stroke={VISUAL_THEME.accent} strokeWidth="1.25" />
          <text x="57" y="16" textAnchor="middle" fontSize="10" fontWeight="800" fill={VISUAL_THEME.accentDark}>
            {targetLabel}
          </text>
        </g>
      </g>
    </SvgContainer>
  );
}

/**
 * CircleFractionVisual:
 * Model lingkaran / juring pizza pecahan (Fractions Circle / Pie).
 */
export function CircleFractionVisual({
  title = "Model Pecahan Lingkaran",
  caption,
  totalParts = 4,
  shadedParts = 3,
  label = "?",
  width = 330,
  heightSvg = 155
}) {
  const cx = 110;
  const cy = 76;
  const r = 48;

  // Bangun busur SVG untuk setiap juring
  const slices = Array.from({ length: totalParts }).map((_, i) => {
    const angleStart = (i * 360) / totalParts - 90;
    const angleEnd = ((i + 1) * 360) / totalParts - 90;
    const radStart = (angleStart * Math.PI) / 180;
    const radEnd = (angleEnd * Math.PI) / 180;

    const x1 = cx + r * Math.cos(radStart);
    const y1 = cy + r * Math.sin(radStart);
    const x2 = cx + r * Math.cos(radEnd);
    const y2 = cy + r * Math.sin(radEnd);

    const largeArc = (360 / totalParts) > 180 ? 1 : 0;
    const pathD = `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`;
    const isShaded = i < shadedParts;

    return { pathD, isShaded, i };
  });

  return (
    <SvgContainer width={width} height={heightSvg} title={title} caption={caption}>
      {/* Juring Lingkaran */}
      {slices.map(s => (
        <path 
          key={`slice-${s.i}`}
          d={s.pathD}
          fill={s.isShaded ? VISUAL_THEME.primarySoft : '#FFFFFF'}
          stroke={VISUAL_THEME.primary}
          strokeWidth="1.75"
        />
      ))}
      <circle cx={cx} cy={cy} r="3" fill={VISUAL_THEME.primaryDark} />

      {/* Kartu Keterangan Pecahan di Kanan */}
      <g transform={`translate(${width - 85}, ${cy})`}>
        <rect x="-55" y="-32" width="110" height="64" rx="6" fill={VISUAL_THEME.primarySoft} stroke={VISUAL_THEME.primary} strokeWidth="1.5" />
        <text x="0" y="-10" textAnchor="middle" fontSize="11" fontWeight="700" fill={VISUAL_THEME.textSecondary}>
          Nilai Pecahan:
        </text>
        <text x="0" y="12" textAnchor="middle" fontSize="18" fontWeight="900" fill={VISUAL_THEME.primaryDark}>
          {label}
        </text>
        <text x="0" y="24" textAnchor="middle" fontSize="8.5" fontWeight="700" fill={VISUAL_THEME.textMuted}>
          {shadedParts} dari {totalParts} juring
        </text>
      </g>
    </SvgContainer>
  );
}

/**
 * ProbabilityObjectVisual:
 * Model visual koin, dadu, atau roda putar untuk bab Peluang.
 */
const SPINNER_COLORS = {
  merah: '#FCA5A5',
  kuning: '#FDE68A',
  hijau: '#86EFAC',
  biru: '#93C5FD',
  ungu: '#C4B5FD',
  oranye: '#FDBA74'
};

export function ProbabilityObjectVisual({
  title = "Peluang Kejadian",
  caption,
  type = "coin", // 'coin' | 'dice' | 'spinner'
  diceValue = 4,
  sectors = null, // spinner: daftar warna tiap juring, mis. ['merah', 'merah', 'kuning', 'hijau']
  targetLabel = "Peluang = ?",
  width = 330,
  heightSvg = 155
}) {
  return (
    <SvgContainer width={width} height={heightSvg} title={title} caption={caption}>
      {type === 'coin' ? (
        <g>
          {/* Dua Sisi Koin Uang Logam */}
          <g transform="translate(85, 75)">
            <circle cx="0" cy="0" r="36" fill="#FEF3C7" stroke="#D97706" strokeWidth="2.5" />
            <circle cx="0" cy="0" r="31" fill="none" stroke="#F59E0B" strokeWidth="1" strokeDasharray="3 2" />
            <text x="0" y="6" textAnchor="middle" fontSize="18" fontWeight="900" fill="#B45309">A</text>
            <text x="0" y="20" textAnchor="middle" fontSize="7.5" fontWeight="800" fill="#92400E">ANGKA</text>
          </g>

          <g transform="translate(165, 75)">
            <circle cx="0" cy="0" r="36" fill="#EFF6FF" stroke="#2563EB" strokeWidth="2.5" />
            <circle cx="0" cy="0" r="31" fill="none" stroke="#3B82F6" strokeWidth="1" strokeDasharray="3 2" />
            <text x="0" y="6" textAnchor="middle" fontSize="18" fontWeight="900" fill="#1D4ED8">G</text>
            <text x="0" y="20" textAnchor="middle" fontSize="7.5" fontWeight="800" fill="#1E40AF">GAMBAR</text>
          </g>
        </g>
      ) : type === 'dice' ? (
        <g>
          {/* Dadu Bermata 6 */}
          <g transform="translate(115, 40)">
            <rect x="0" y="0" width="70" height="70" rx="12" fill="#FFFFFF" stroke={VISUAL_THEME.textDark} strokeWidth="2.5" />
            {/* Pip dots based on value or standard 5 dots */}
            {diceValue === 1 ? (
              <circle cx="35" cy="35" r="7" fill={VISUAL_THEME.danger} />
            ) : diceValue === 3 ? (
              <>
                <circle cx="20" cy="20" r="5" fill={VISUAL_THEME.textDark} />
                <circle cx="35" cy="35" r="5" fill={VISUAL_THEME.textDark} />
                <circle cx="50" cy="50" r="5" fill={VISUAL_THEME.textDark} />
              </>
            ) : diceValue === 5 ? (
              <>
                <circle cx="20" cy="20" r="5" fill={VISUAL_THEME.textDark} />
                <circle cx="50" cy="20" r="5" fill={VISUAL_THEME.textDark} />
                <circle cx="35" cy="35" r="5" fill={VISUAL_THEME.textDark} />
                <circle cx="20" cy="50" r="5" fill={VISUAL_THEME.textDark} />
                <circle cx="50" cy="50" r="5" fill={VISUAL_THEME.textDark} />
              </>
            ) : diceValue === 6 ? (
              <>
                <circle cx="22" cy="18" r="4.5" fill={VISUAL_THEME.textDark} />
                <circle cx="22" cy="35" r="4.5" fill={VISUAL_THEME.textDark} />
                <circle cx="22" cy="52" r="4.5" fill={VISUAL_THEME.textDark} />
                <circle cx="48" cy="18" r="4.5" fill={VISUAL_THEME.textDark} />
                <circle cx="48" cy="35" r="4.5" fill={VISUAL_THEME.textDark} />
                <circle cx="48" cy="52" r="4.5" fill={VISUAL_THEME.textDark} />
              </>
            ) : (
              <>
                <circle cx="22" cy="22" r="5" fill={VISUAL_THEME.textDark} />
                <circle cx="48" cy="22" r="5" fill={VISUAL_THEME.textDark} />
                <circle cx="22" cy="48" r="5" fill={VISUAL_THEME.textDark} />
                <circle cx="48" cy="48" r="5" fill={VISUAL_THEME.textDark} />
              </>
            )}
          </g>
        </g>
      ) : (
        <g>
          {/* Roda Putar (Spinner): juring sesuai data soal bila `sectors` diisi */}
          <g transform="translate(125, 78)">
            {(sectors || ['#FEE2E2', '#FEF3C7', '#DCFCE7', '#E0E7FF', '#FCE7F3', '#FEF9C3', '#E0F2FE', '#F3E8FF']).map((color, i, arr) => {
              const step = 360 / arr.length;
              const r1 = ((i * step - 90) * Math.PI) / 180;
              const r2 = (((i + 1) * step - 90) * Math.PI) / 180;
              const x1 = 45 * Math.cos(r1);
              const y1 = 45 * Math.sin(r1);
              const x2 = 45 * Math.cos(r2);
              const y2 = 45 * Math.sin(r2);
              const largeArc = step > 180 ? 1 : 0;
              return (
                <path 
                  key={`spin-${i}`} 
                  d={`M 0 0 L ${x1} ${y1} A 45 45 0 ${largeArc} 1 ${x2} ${y2} Z`} 
                  fill={SPINNER_COLORS[color] || color} 
                  stroke={VISUAL_THEME.textDark} 
                  strokeWidth="1.25" 
                />
              );
            })}
            <circle cx="0" cy="0" r="5" fill={VISUAL_THEME.danger} />
            {/* Jarum Penunjuk di Atas */}
            <polygon points="0,-48 -6,-58 6,-58" fill={VISUAL_THEME.danger} />
          </g>
        </g>
      )}

      {/* Target Badge */}
      <g transform={`translate(${width - 65}, 78)`}>
        <rect x="-38" y="-14" width="76" height="28" rx="5" fill={VISUAL_THEME.accentSoft} stroke={VISUAL_THEME.accent} strokeWidth="1.5" />
        <text x="0" y="4" textAnchor="middle" fontSize="10.5" fontWeight="800" fill={VISUAL_THEME.accentDark}>
          {targetLabel}
        </text>
      </g>
    </SvgContainer>
  );
}
