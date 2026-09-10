import React from 'react';
import { VISUAL_THEME } from '../theme';
import { SvgContainer } from '../common/SvgContainer';

/**
 * NumberLineVisual:
 * Garis bilangan dengan busur lompatan pola berulang (Pola Bilangan, Lompatan, Barisan).
 */
export function NumberLineVisual({
  title = "Pola Barisan Bilangan",
  caption = "*Temukan aturan pola untuk menentukan bilangan selanjutnya",
  items = [5, 9, 13, 17],
  target = "?",
  width = 330,
  heightSvg = 135
}) {
  const totalSpots = items.length + 1;
  const startX = 42;
  const endX = width - 42;
  const stepX = (endX - startX) / (totalSpots - 1);
  const lineY = 82;

  return (
    <SvgContainer width={width} height={heightSvg} title={title} caption={caption}>
      {/* Garis Dasar Bilangan */}
      <line x1={startX - 15} y1={lineY} x2={endX + 15} y2={lineY} stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />

      {/* Titik / Nilai Bilangan yang Diketahui */}
      {items.map((val, i) => {
        const cx = startX + i * stepX;
        return (
          <g key={`num-${i}`}>
            <circle cx={cx} cy={lineY} r="18" fill={VISUAL_THEME.primarySoft} stroke={VISUAL_THEME.primary} strokeWidth="2" />
            <text x={cx} y={lineY + 5} textAnchor="middle" fontSize="12" fontWeight="800" fill={VISUAL_THEME.primaryDark}>
              {val}
            </text>
          </g>
        );
      })}

      {/* Kotak Target Bertanda Tanya */}
      {(() => {
        const cx = startX + items.length * stepX;
        return (
          <g>
            <rect 
              x={cx - 18} y={lineY - 18} width="36" height="36" rx="6" 
              fill={VISUAL_THEME.accentSoft} 
              stroke={VISUAL_THEME.accent} 
              strokeWidth="2" 
              strokeDasharray="3 2" 
            />
            <text x={cx} y={lineY + 6} textAnchor="middle" fontSize="16" fontWeight="900" fill={VISUAL_THEME.accentDark}>
              {target}
            </text>
          </g>
        );
      })()}

      {/* Busur Lompatan Tanpa Spoiler Angka (Siswa Menentukan Sendiri) */}
      {items.map((_, i) => {
        const x1 = startX + i * stepX;
        const x2 = startX + (i + 1) * stepX;
        const midX = (x1 + x2) / 2;
        return (
          <g key={`arc-${i}`}>
            <path 
              d={`M ${x1} ${lineY - 18} Q ${midX} ${lineY - 42} ${x2} ${lineY - 18}`} 
              fill="none" 
              stroke={VISUAL_THEME.primary} 
              strokeWidth="1.75" 
            />
            {/* Titik Puncak Busur Halus */}
            <circle cx={midX} cy={lineY - 30} r="2.5" fill={VISUAL_THEME.primary} />
          </g>
        );
      })}

      <text x={width / 2} y={heightSvg - 8} textAnchor="middle" fontSize="9.5" fontWeight="600" fill={VISUAL_THEME.textMuted}>
        Berapakah bilangan selanjutnya pada kotak bertanda tanya?
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
  label = "3 / 5",
  width = 320,
  heightSvg = 130
}) {
  const startX = 35;
  const startY = 42;
  const barW = 250;
  const barH = 34;
  const partW = barW / totalParts;

  return (
    <SvgContainer width={width} height={heightSvg} title={title} caption={caption}>
      <rect x={startX} y={startY} width={barW} height={barH} rx="5" fill="#FFFFFF" stroke={VISUAL_THEME.borderSubtle} strokeWidth="1.5" />

      {Array.from({ length: totalParts }).map((_, i) => {
        const isShaded = i < shadedParts;
        return (
          <g key={`part-${i}`}>
            <rect 
              x={startX + i * partW} 
              y={startY} 
              width={partW} 
              height={barH} 
              fill={isShaded ? VISUAL_THEME.primarySoft : '#FFFFFF'} 
              stroke={VISUAL_THEME.primary} 
              strokeWidth="1.25" 
            />
            <text 
              x={startX + i * partW + partW / 2} 
              y={startY + 21} 
              textAnchor="middle" 
              fontSize="10" 
              fontWeight="700" 
              fill={isShaded ? VISUAL_THEME.primaryDark : VISUAL_THEME.textMuted}
            >
              1/{totalParts}
            </text>
          </g>
        );
      })}

      <g transform={`translate(${width / 2}, ${startY + barH + 24})`}>
        <rect x="-42" y="-12" width="84" height="24" rx="4" fill={VISUAL_THEME.primarySoft} stroke={VISUAL_THEME.primary} strokeWidth="1" />
        <text x="0" y="4" textAnchor="middle" fontSize="11" fontWeight="800" fill={VISUAL_THEME.primaryDark}>
          {shadedParts} dari {totalParts} bagian
        </text>
      </g>
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
  angleLabel = "90°",
  angleType = "Sudut Siku-Siku",
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
  rows = [
    { label: 'Senin', count: 4 },
    { label: 'Selasa', count: 5 },
    { label: 'Rabu', count: 3 }
  ],
  symbol = "⭐",
  unitLabel = "1 ⭐ = 5 poin prestasi",
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
              {Array.from({ length: row.count }).map((_, sIdx) => (
                <text key={`sym-${sIdx}`} x={sIdx * 24} y="15" fontSize="15">
                  {symbol}
                </text>
              ))}
            </g>
          </g>
        );
      })}

      {/* Kunci Legenda Piktogram di Bawah */}
      <g transform={`translate(${width / 2}, ${heightSvg - 12})`}>
        <rect x="-70" y="-10" width="140" height="20" rx="4" fill={VISUAL_THEME.primarySoft} stroke={VISUAL_THEME.primary} strokeWidth="1" />
        <text x="0" y="4" textAnchor="middle" fontSize="9.5" fontWeight="800" fill={VISUAL_THEME.primaryDark}>
          Kunci: {unitLabel}
        </text>
      </g>
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
  items = [
    { color: 'red', count: 5, fill: '#FCA5A5', stroke: '#DC2626', label: '5 Merah' },
    { color: 'blue', count: 4, fill: '#93C5FD', stroke: '#2563EB', label: '4 Biru' },
    { color: 'green', count: 3, fill: '#86EFAC', stroke: '#16A34A', label: '3 Hijau' }
  ],
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
            Peluang Terambil = ?
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
  label = "3/4",
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
export function ProbabilityObjectVisual({
  title = "Peluang Kejadian",
  caption,
  type = "coin", // 'coin' | 'dice' | 'spinner'
  diceValue = 4,
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
          {/* Roda Putar (Spinner) 8 Juring */}
          <g transform="translate(125, 78)">
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
              const r1 = (deg * Math.PI) / 180;
              const r2 = ((deg + 45) * Math.PI) / 180;
              const x1 = 45 * Math.cos(r1);
              const y1 = 45 * Math.sin(r1);
              const x2 = 45 * Math.cos(r2);
              const y2 = 45 * Math.sin(r2);
              const colors = ['#FEE2E2', '#FEF3C7', '#DCFCE7', '#E0E7FF', '#FCE7F3', '#FEF9C3', '#E0F2FE', '#F3E8FF'];
              return (
                <path 
                  key={`spin-${i}`} 
                  d={`M 0 0 L ${x1} ${y1} A 45 45 0 0 1 ${x2} ${y2} Z`} 
                  fill={colors[i]} 
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
