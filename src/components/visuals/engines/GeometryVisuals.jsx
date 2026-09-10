import React from 'react';
import { VISUAL_THEME } from '../theme';
import { SvgContainer } from '../common/SvgContainer';
import { DimensionLine, RightAngleMarker, UnknownBadge } from '../common/VisualElements';

/**
 * RightTriangleVisual:
 * Segitiga siku-siku parametrik presisi untuk Teorema Pythagoras dan Trigonometri.
 * Menghindari tumpang-tindih teks (no overlapping text) dengan margin aman dan background pill.
 */
export function RightTriangleVisual({
  title = "Segitiga Siku-Siku",
  caption,
  base = 8,
  height = 6,
  hypotenuse = "?",
  baseLabel = "8 cm",
  heightLabel = "6 cm",
  hypLabel = "? cm",
  vertices = { right: 'B', top: 'A', far: 'C' },
  width = 340,
  heightSvg = 165
}) {
  const ox = 90;
  const oy = 118;
  const triW = 145;
  const triH = 80;

  const pRight = { x: ox, y: oy };
  const pTop = { x: ox, y: oy - triH };
  const pFar = { x: ox + triW, y: oy };

  const isHypTarget = String(hypLabel).includes('?');
  const isBaseTarget = String(baseLabel).includes('?');
  const isHeightTarget = String(heightLabel).includes('?');

  return (
    <SvgContainer width={width} height={heightSvg} title={title} caption={caption}>
      <polygon 
        points={`${pRight.x},${pRight.y} ${pTop.x},${pTop.y} ${pFar.x},${pFar.y}`}
        fill={VISUAL_THEME.primarySoft}
        stroke={VISUAL_THEME.primary}
        strokeWidth="2.25"
        strokeLinejoin="round"
      />

      <RightAngleMarker x={ox} y={oy} size={11} dirX={1} dirY={-1} color={VISUAL_THEME.primaryDark} />

      {vertices.top && (
        <g transform={`translate(${pTop.x}, ${pTop.y - 12})`}>
          <rect x="-24" y="-8" width="48" height="16" rx="3" fill="#FFFFFF" stroke={VISUAL_THEME.borderSubtle} strokeWidth="1" />
          <text x="0" y="4" textAnchor="middle" fontSize="10" fontWeight="800" fill={VISUAL_THEME.textDark}>
            {vertices.top}
          </text>
        </g>
      )}

      {vertices.right && (
        <g transform={`translate(${pRight.x - 30}, ${pRight.y + 14})`}>
          <rect x="-24" y="-8" width="48" height="16" rx="3" fill="#FFFFFF" stroke={VISUAL_THEME.borderSubtle} strokeWidth="1" />
          <text x="0" y="4" textAnchor="middle" fontSize="9.5" fontWeight="800" fill={VISUAL_THEME.textDark}>
            {vertices.right}
          </text>
        </g>
      )}

      {vertices.far && (
        <g transform={`translate(${pFar.x + 30}, ${pFar.y + 14})`}>
          <rect x="-28" y="-8" width="56" height="16" rx="3" fill="#FFFFFF" stroke={VISUAL_THEME.borderSubtle} strokeWidth="1" />
          <text x="0" y="4" textAnchor="middle" fontSize="9.5" fontWeight="800" fill={VISUAL_THEME.textDark}>
            {vertices.far}
          </text>
        </g>
      )}

      {baseLabel && (
        <g>
          <line x1={ox} y1={oy + 14} x2={ox + triW} y2={oy + 14} stroke={isBaseTarget ? VISUAL_THEME.accent : VISUAL_THEME.textSecondary} strokeWidth="1.5" />
          <line x1={ox} y1={oy + 9} x2={ox} y2={oy + 19} stroke={isBaseTarget ? VISUAL_THEME.accent : VISUAL_THEME.textSecondary} strokeWidth="1.5" />
          <line x1={ox + triW} y1={oy + 9} x2={ox + triW} y2={oy + 19} stroke={isBaseTarget ? VISUAL_THEME.accent : VISUAL_THEME.textSecondary} strokeWidth="1.5" />
          
          <g transform={`translate(${ox + triW / 2}, ${oy + 14})`}>
            <rect 
              x="-28" y="-9" width="56" height="18" rx="4" 
              fill={isBaseTarget ? VISUAL_THEME.accentSoft : "#FFFFFF"} 
              stroke={isBaseTarget ? VISUAL_THEME.accent : VISUAL_THEME.borderSubtle} 
              strokeWidth="1.25" 
            />
            <text x="0" y="4" textAnchor="middle" fontSize="10" fontWeight="800" fill={isBaseTarget ? VISUAL_THEME.accentDark : VISUAL_THEME.textDark}>
              {baseLabel}
            </text>
          </g>
        </g>
      )}

      {heightLabel && (
        <g>
          <line x1={ox - 24} y1={oy - triH} x2={ox - 24} y2={oy} stroke={isHeightTarget ? VISUAL_THEME.accent : VISUAL_THEME.textSecondary} strokeWidth="1.5" />
          <line x1={ox - 29} y1={oy - triH} x2={ox - 19} y2={oy - triH} stroke={isHeightTarget ? VISUAL_THEME.accent : VISUAL_THEME.textSecondary} strokeWidth="1.5" />
          <line x1={ox - 29} y1={oy} x2={ox - 19} y2={oy} stroke={isHeightTarget ? VISUAL_THEME.accent : VISUAL_THEME.textSecondary} strokeWidth="1.5" />

          <g transform={`translate(${ox - 24}, ${(oy - triH + oy) / 2})`}>
            <rect 
              x="-36" y="-10" width="72" height="20" rx="4" 
              fill={isHeightTarget ? VISUAL_THEME.accentSoft : "#FFFFFF"} 
              stroke={isHeightTarget ? VISUAL_THEME.accent : VISUAL_THEME.borderSubtle} 
              strokeWidth="1.25" 
            />
            <text x="0" y="4.5" textAnchor="middle" fontSize="10" fontWeight="800" fill={isHeightTarget ? VISUAL_THEME.accentDark : VISUAL_THEME.textDark}>
              {heightLabel}
            </text>
          </g>
        </g>
      )}

      {hypLabel && (
        <g transform={`translate(${(pTop.x + pFar.x) / 2 + 18}, ${(pTop.y + pFar.y) / 2 - 14})`}>
          <rect 
            x="-36" y="-10" width="72" height="20" rx="4" 
            fill={isHypTarget ? VISUAL_THEME.accentSoft : '#FFFFFF'} 
            stroke={isHypTarget ? VISUAL_THEME.accent : VISUAL_THEME.borderSubtle} 
            strokeWidth="1.25" 
            strokeDasharray={isHypTarget ? "3 2" : "none"}
          />
          <text 
            x="0" y="4.5" 
            textAnchor="middle" 
            fontSize="10.5" 
            fontWeight={isHypTarget ? "900" : "800"} 
            fill={isHypTarget ? VISUAL_THEME.accentDark : VISUAL_THEME.textDark}
          >
            {hypLabel}
          </text>
        </g>
      )}
    </SvgContainer>
  );
}

/**
 * QuadrilateralVisual:
 * Persegi, Persegi Panjang, Trapesium, Jajar Genjang, Belah Ketupat, Layang-layang.
 */
export function QuadrilateralVisual({
  title = "Bangun Datar",
  caption,
  type = "rectangle",
  dimA = "15 cm",
  dimB = "9 cm",
  dimT,
  targetBadge = "Luas = ?",
  width = 330,
  heightSvg = 155
}) {
  return (
    <SvgContainer width={width} height={heightSvg} title={title} caption={caption}>
      {type === 'trapezoid' ? (
        <g>
          <polygon 
            points="95,45 215,45 255,115 55,115"
            fill={VISUAL_THEME.primarySoft} 
            stroke={VISUAL_THEME.primary} 
            strokeWidth="2" 
          />
          <line x1="95" y1="45" x2="95" y2="115" stroke={VISUAL_THEME.danger} strokeWidth="1.5" strokeDasharray="3 2" />
          <RightAngleMarker x={95} y={115} size={8} dirX={1} dirY={-1} color={VISUAL_THEME.danger} />
          {dimT && (
            <g transform="translate(82, 80)">
              <rect x="-18" y="-8" width="36" height="16" rx="3" fill="#FFFFFF" stroke={VISUAL_THEME.borderSubtle} strokeWidth="1" />
              <text x="0" y="4" textAnchor="middle" fontSize="10" fontWeight="800" fill={VISUAL_THEME.dangerDark}>
                {dimT}
              </text>
            </g>
          )}
          <DimensionLine x1={95} y1={33} x2={215} y2={33} label={dimA} />
          <DimensionLine x1={55} y1={127} x2={255} y2={127} label={dimB} />
        </g>
      ) : type === 'parallelogram' ? (
        <g>
          <polygon 
            points="90,42 250,42 220,115 60,115" 
            fill={VISUAL_THEME.primarySoft} 
            stroke={VISUAL_THEME.primary} 
            strokeWidth="2" 
          />
          <line x1="90" y1="42" x2="90" y2="115" stroke={VISUAL_THEME.danger} strokeWidth="1.5" strokeDasharray="3 2" />
          <RightAngleMarker x={90} y={115} size={8} dirX={1} dirY={-1} color={VISUAL_THEME.danger} />
          {dimT && (
            <g transform="translate(78, 80)">
              <rect x="-18" y="-8" width="36" height="16" rx="3" fill="#FFFFFF" stroke={VISUAL_THEME.borderSubtle} strokeWidth="1" />
              <text x="0" y="4" textAnchor="middle" fontSize="10" fontWeight="800" fill={VISUAL_THEME.dangerDark}>
                {dimT}
              </text>
            </g>
          )}
          <DimensionLine x1={60} y1={127} x2={220} y2={127} label={dimA} />
        </g>
      ) : type === 'rhombus' ? (
        <g>
          {/* Belah Ketupat dengan Diagonal d1 dan d2 */}
          <polygon 
            points="145,30 220,78 145,126 70,78" 
            fill={VISUAL_THEME.primarySoft} 
            stroke={VISUAL_THEME.primary} 
            strokeWidth="2" 
          />
          {/* Diagonal horisontal d1 */}
          <line x1="70" y1="78" x2="220" y2="78" stroke={VISUAL_THEME.textSecondary} strokeWidth="1.25" strokeDasharray="3 2" />
          {/* Diagonal vertikal d2 */}
          <line x1="145" y1="30" x2="145" y2="126" stroke={VISUAL_THEME.danger} strokeWidth="1.25" strokeDasharray="3 2" />
          <RightAngleMarker x={145} y={78} size={7} dirX={1} dirY={-1} color={VISUAL_THEME.primaryDark} />

          {/* Label d1 */}
          {dimA && (
            <g transform="translate(105, 68)">
              <rect x="-24" y="-8" width="48" height="16" rx="3" fill="#FFFFFF" stroke={VISUAL_THEME.borderSubtle} strokeWidth="1" />
              <text x="0" y="4" textAnchor="middle" fontSize="9.5" fontWeight="800" fill={VISUAL_THEME.primaryDark}>
                {dimA}
              </text>
            </g>
          )}
          {/* Label d2 */}
          {dimB && (
            <g transform="translate(145, 138)">
              <rect x="-26" y="-8" width="52" height="16" rx="3" fill="#FFFFFF" stroke={VISUAL_THEME.borderSubtle} strokeWidth="1" />
              <text x="0" y="4" textAnchor="middle" fontSize="9.5" fontWeight="800" fill={VISUAL_THEME.dangerDark}>
                {dimB}
              </text>
            </g>
          )}
        </g>
      ) : type === 'kite' ? (
        <g>
          {/* Layang-Layang */}
          <polygon 
            points="145,26 215,68 145,130 75,68" 
            fill={VISUAL_THEME.primarySoft} 
            stroke={VISUAL_THEME.primary} 
            strokeWidth="2" 
          />
          <line x1="75" y1="68" x2="215" y2="68" stroke={VISUAL_THEME.textSecondary} strokeWidth="1.25" strokeDasharray="3 2" />
          <line x1="145" y1="26" x2="145" y2="130" stroke={VISUAL_THEME.danger} strokeWidth="1.25" strokeDasharray="3 2" />
          <RightAngleMarker x={145} y={68} size={7} dirX={1} dirY={-1} color={VISUAL_THEME.primaryDark} />

          {dimA && (
            <g transform="translate(105, 58)">
              <rect x="-24" y="-8" width="48" height="16" rx="3" fill="#FFFFFF" stroke={VISUAL_THEME.borderSubtle} strokeWidth="1" />
              <text x="0" y="4" textAnchor="middle" fontSize="9.5" fontWeight="800" fill={VISUAL_THEME.primaryDark}>
                {dimA}
              </text>
            </g>
          )}
          {dimB && (
            <g transform="translate(145, 140)">
              <rect x="-26" y="-8" width="52" height="16" rx="3" fill="#FFFFFF" stroke={VISUAL_THEME.borderSubtle} strokeWidth="1" />
              <text x="0" y="4" textAnchor="middle" fontSize="9.5" fontWeight="800" fill={VISUAL_THEME.dangerDark}>
                {dimB}
              </text>
            </g>
          )}
        </g>
      ) : type === 'square' ? (
        <g>
          {/* Persegi Bujursangkar Sisi Sama */}
          <rect 
            x="85" y="32" width="95" height="95" rx="3" 
            fill={VISUAL_THEME.primarySoft} 
            stroke={VISUAL_THEME.primary} 
            strokeWidth="2" 
          />
          <RightAngleMarker x={85} y={127} size={8} dirX={1} dirY={-1} color={VISUAL_THEME.primaryDark} />
          <RightAngleMarker x={180} y={127} size={8} dirX={-1} dirY={-1} color={VISUAL_THEME.primaryDark} />
          <RightAngleMarker x={85} y={32} size={8} dirX={1} dirY={1} color={VISUAL_THEME.primaryDark} />
          <RightAngleMarker x={180} y={32} size={8} dirX={-1} dirY={1} color={VISUAL_THEME.primaryDark} />
          {/* Tanda Sisi Sama (Tick Marks) */}
          <line x1="132" y1="28" x2="132" y2="36" stroke={VISUAL_THEME.primaryDark} strokeWidth="2" />
          <line x1="132" y1="123" x2="132" y2="131" stroke={VISUAL_THEME.primaryDark} strokeWidth="2" />
          <line x1="81" y1="79" x2="89" y2="79" stroke={VISUAL_THEME.primaryDark} strokeWidth="2" />
          <line x1="176" y1="79" x2="184" y2="79" stroke={VISUAL_THEME.primaryDark} strokeWidth="2" />
          <DimensionLine x1={85} y1={138} x2={180} y2={138} label={dimA} />
        </g>
      ) : (
        <g>
          {/* Persegi Panjang Standar */}
          <rect 
            x="65" y="38" width="175" height="75" rx="3" 
            fill={VISUAL_THEME.primarySoft} 
            stroke={VISUAL_THEME.primary} 
            strokeWidth="2" 
          />
          <RightAngleMarker x={65} y={113} size={8} dirX={1} dirY={-1} color={VISUAL_THEME.primaryDark} />
          <RightAngleMarker x={240} y={113} size={8} dirX={-1} dirY={-1} color={VISUAL_THEME.primaryDark} />
          <DimensionLine x1={65} y1={125} x2={240} y2={125} label={dimA} />
          <DimensionLine x1={48} y1={38} x2={48} y2={113} label={dimB} />
        </g>
      )}

      {targetBadge && (
        <g transform={`translate(${width - 65}, 78)`}>
          <rect x="-38" y="-14" width="76" height="28" rx="5" fill={VISUAL_THEME.accentSoft} stroke={VISUAL_THEME.accent} strokeWidth="1.5" />
          <text x="0" y="4" textAnchor="middle" fontSize="10.5" fontWeight="800" fill={VISUAL_THEME.accentDark}>
            {targetBadge}
          </text>
        </g>
      )}
    </SvgContainer>
  );
}

/**
 * TriangleVisual:
 * Segitiga Sama Kaki, Segitiga Sama Sisi, atau Segitiga Sembarang.
 */
export function TriangleVisual({
  title = "Segitiga",
  caption,
  type = "isosceles",
  baseLabel = "alas = 10 cm",
  heightLabel = "tinggi = 8 cm",
  sideLabel,
  targetBadge = "Luas = ?",
  width = 330,
  heightSvg = 155
}) {
  const cx = 135;
  const by = 120;
  const topY = 36;
  const halfBase = type === 'equilateral' ? 48 : 55;
  const pLeft = { x: cx - halfBase, y: by };
  const pRight = { x: cx + halfBase, y: by };
  const pTop = { x: cx, y: topY };

  return (
    <SvgContainer width={width} height={heightSvg} title={title} caption={caption}>
      {/* Segitiga */}
      <polygon 
        points={`${pLeft.x},${pLeft.y} ${pRight.x},${pRight.y} ${pTop.x},${pTop.y}`}
        fill={VISUAL_THEME.primarySoft}
        stroke={VISUAL_THEME.primary}
        strokeWidth="2.25"
        strokeLinejoin="round"
      />

      {/* Garis Tinggi Tegak Lurus */}
      <line x1={cx} y1={topY} x2={cx} y2={by} stroke={VISUAL_THEME.danger} strokeWidth="1.5" strokeDasharray="3 2" />
      <RightAngleMarker x={cx} y={by} size={8} dirX={1} dirY={-1} color={VISUAL_THEME.danger} />

      {/* Tanda Sisi Sama (Tick marks) */}
      {type === 'equilateral' ? (
        <g>
          {/* Tick alas */}
          <line x1={cx} y1={by - 4} x2={cx} y2={by + 4} stroke={VISUAL_THEME.primaryDark} strokeWidth="2" />
          {/* Tick kiri */}
          <line x1={(pLeft.x + pTop.x)/2 - 3} y1={(pLeft.y + pTop.y)/2 - 3} x2={(pLeft.x + pTop.x)/2 + 3} y2={(pLeft.y + pTop.y)/2 + 3} stroke={VISUAL_THEME.primaryDark} strokeWidth="2" />
          {/* Tick kanan */}
          <line x1={(pRight.x + pTop.x)/2 - 3} y1={(pRight.y + pTop.y)/2 + 3} x2={(pRight.x + pTop.x)/2 + 3} y2={(pRight.y + pTop.y)/2 - 3} stroke={VISUAL_THEME.primaryDark} strokeWidth="2" />
        </g>
      ) : type === 'isosceles' ? (
        <g>
          {/* Tick kiri */}
          <line x1={(pLeft.x + pTop.x)/2 - 3} y1={(pLeft.y + pTop.y)/2 - 3} x2={(pLeft.x + pTop.x)/2 + 3} y2={(pLeft.y + pTop.y)/2 + 3} stroke={VISUAL_THEME.primaryDark} strokeWidth="2" />
          {/* Tick kanan */}
          <line x1={(pRight.x + pTop.x)/2 - 3} y1={(pRight.y + pTop.y)/2 + 3} x2={(pRight.x + pTop.x)/2 + 3} y2={(pRight.y + pTop.y)/2 - 3} stroke={VISUAL_THEME.primaryDark} strokeWidth="2" />
        </g>
      ) : null}

      {/* Label Tinggi */}
      {heightLabel && (
        <g transform={`translate(${cx - 28}, ${(topY + by) / 2})`}>
          <rect x="-28" y="-8" width="56" height="16" rx="3" fill="#FFFFFF" stroke={VISUAL_THEME.borderSubtle} strokeWidth="1" />
          <text x="0" y="4" textAnchor="middle" fontSize="9.5" fontWeight="800" fill={VISUAL_THEME.dangerDark}>
            {heightLabel}
          </text>
        </g>
      )}

      {/* Label Sisi Miring (jika ada) */}
      {sideLabel && (
        <g transform={`translate(${(pRight.x + pTop.x) / 2 + 25}, ${(pRight.y + pTop.y) / 2})`}>
          <rect x="-24" y="-8" width="48" height="16" rx="3" fill="#FFFFFF" stroke={VISUAL_THEME.borderSubtle} strokeWidth="1" />
          <text x="0" y="4" textAnchor="middle" fontSize="9.5" fontWeight="800" fill={VISUAL_THEME.primaryDark}>
            {sideLabel}
          </text>
        </g>
      )}

      {/* Garis Ukur Alas */}
      {baseLabel && (
        <DimensionLine x1={pLeft.x} y1={by + 14} x2={pRight.x} y2={by + 14} label={baseLabel} />
      )}

      {/* Target Badge */}
      {targetBadge && (
        <g transform={`translate(${width - 65}, 78)`}>
          <rect x="-36" y="-14" width="72" height="28" rx="5" fill={VISUAL_THEME.accentSoft} stroke={VISUAL_THEME.accent} strokeWidth="1.5" />
          <text x="0" y="4" textAnchor="middle" fontSize="10.5" fontWeight="800" fill={VISUAL_THEME.accentDark}>
            {targetBadge}
          </text>
        </g>
      )}
    </SvgContainer>
  );
}

/**
 * Solid3DVisual:
 * Bangun ruang 3D komprehensif:
 * - Tabung (cylinder)
 * - Kerucut (cone)
 * - Bola (sphere)
 * - Setengah Bola Pejal (hemisphere)
 * - Kerucut Terpancung (frustum-cone)
 * - Bandul Gabungan Kerucut + Setengah Bola (composite-cone-sphere)
 * - Bola dalam Tabung (sphere-in-cylinder)
 * - Balok / Kubus (box)
 */
export function Solid3DVisual({
  title = "Bangun Ruang",
  caption,
  solid = "cylinder",
  radiusLabel = "r = 7 cm",
  radiusTopLabel = "r = 4 cm",
  radiusBottomLabel = "R = 10 cm",
  heightLabel = "t = 10 cm",
  slantLabel,
  lengthLabel,
  widthLabel,
  targetLabel,
  width = 340,
  heightSvg = 160
}) {
  return (
    <SvgContainer width={width} height={heightSvg} title={title} caption={caption}>
      {/* 1. TABUNG (CYLINDER) */}
      {solid === 'cylinder' && (
        <g transform="translate(55, 12)">
          <path d="M 40 115 A 45 13 0 0 1 130 115" fill="none" stroke={VISUAL_THEME.primary} strokeWidth="1.5" strokeDasharray="3 2" />
          <rect x="40" y="35" width="90" height="80" fill={VISUAL_THEME.primarySoft} stroke="none" />
          <path d="M 40 115 A 45 13 0 0 0 130 115" fill="none" stroke={VISUAL_THEME.primary} strokeWidth="2" />
          <line x1="40" y1="35" x2="40" y2="115" stroke={VISUAL_THEME.primary} strokeWidth="2" />
          <line x1="130" y1="35" x2="130" y2="115" stroke={VISUAL_THEME.primary} strokeWidth="2" />
          <ellipse cx="85" cy="35" rx="45" ry="13" fill="#DBEAFE" stroke={VISUAL_THEME.primary} strokeWidth="2" />
          
          <line x1="85" y1="35" x2="130" y2="35" stroke={VISUAL_THEME.danger} strokeWidth="1.75" />
          <circle cx="85" cy="35" r="2.5" fill={VISUAL_THEME.danger} />
          
          <g transform="translate(107, 20)">
            <rect x="-24" y="-8" width="48" height="16" rx="3" fill="#FFFFFF" stroke={VISUAL_THEME.borderSubtle} strokeWidth="1" />
            <text x="0" y="4" textAnchor="middle" fontSize="9.5" fontWeight="800" fill={VISUAL_THEME.dangerDark}>{radiusLabel}</text>
          </g>

          <DimensionLine x1="145" y1="35" x2="145" y2="115" label={heightLabel} />
        </g>
      )}

      {/* 2. KERUCUT (CONE) */}
      {solid === 'cone' && (
        <g transform="translate(75, 12)">
          <path d="M 35 115 A 45 12 0 0 1 125 115" fill="none" stroke={VISUAL_THEME.primary} strokeWidth="1.5" strokeDasharray="3 2" />
          <polygon points="80,25 35,115 125,115" fill={VISUAL_THEME.primarySoft} stroke="none" />
          <path d="M 35 115 A 45 12 0 0 0 125 115" fill="none" stroke={VISUAL_THEME.primary} strokeWidth="2" />
          <line x1="80" y1="25" x2="35" y2="115" stroke={VISUAL_THEME.primary} strokeWidth="2" />
          <line x1="80" y1="25" x2="125" y2="115" stroke={VISUAL_THEME.primary} strokeWidth="2" />
          
          <line x1="80" y1="25" x2="80" y2="115" stroke={VISUAL_THEME.danger} strokeWidth="1.75" strokeDasharray="3 2" />
          <RightAngleMarker x={80} y={115} size={7} dirX={1} dirY={-1} color={VISUAL_THEME.danger} />
          
          <g transform="translate(56, 70)">
            <rect x="-22" y="-9" width="44" height="18" rx="4" fill="#FFFFFF" stroke={VISUAL_THEME.danger} strokeWidth="1" strokeDasharray={String(heightLabel).includes('?') ? '2 2' : 'none'} />
            <text x="0" y="4" textAnchor="middle" fontSize="9.5" fontWeight="800" fill={VISUAL_THEME.dangerDark}>
              {heightLabel}
            </text>
          </g>

          <line x1="80" y1="115" x2="125" y2="115" stroke={VISUAL_THEME.primaryDark} strokeWidth="2" />
          <circle cx="80" cy="115" r="2.5" fill={VISUAL_THEME.primaryDark} />
          
          <g transform="translate(102, 134)">
            <rect x="-24" y="-8" width="48" height="16" rx="3" fill="#FFFFFF" stroke={VISUAL_THEME.borderSubtle} strokeWidth="1" />
            <text x="0" y="4" textAnchor="middle" fontSize="9.5" fontWeight="800" fill={VISUAL_THEME.primaryDark}>
              {radiusLabel}
            </text>
          </g>

          {slantLabel && (
            <g transform="translate(112, 65)">
              <rect x="-24" y="-8" width="48" height="16" rx="3" fill="#FFFFFF" stroke={VISUAL_THEME.accent} strokeWidth="1" />
              <text x="0" y="4" textAnchor="middle" fontSize="9.5" fontWeight="800" fill={VISUAL_THEME.accentDark}>
                {slantLabel}
              </text>
            </g>
          )}
        </g>
      )}

      {/* 3. BOLA (SPHERE) */}
      {solid === 'sphere' && (
        <g transform="translate(125, 78)">
          <defs>
            <radialGradient id="sphereGrad" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="55%" stopColor="#EFF6FF" />
              <stop offset="100%" stopColor="#BFDBFE" />
            </radialGradient>
          </defs>

          <circle cx="0" cy="0" r="54" fill="url(#sphereGrad)" stroke={VISUAL_THEME.primary} strokeWidth="2.25" />
          <path d="M -54 0 A 54 16 0 0 1 54 0" fill="none" stroke="#60A5FA" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M -54 0 A 54 16 0 0 0 54 0" fill="none" stroke={VISUAL_THEME.primary} strokeWidth="2" />

          <circle cx="0" cy="0" r="3" fill={VISUAL_THEME.danger} />
          <text x="-8" y="-6" fontSize="10" fontWeight="800" fill={VISUAL_THEME.dangerDark}>O</text>

          <line x1="0" y1="0" x2="49" y2="-22" stroke={VISUAL_THEME.danger} strokeWidth="2" />
          <circle cx="49" cy="-22" r="2.5" fill={VISUAL_THEME.danger} />

          <g transform="translate(24, -24)">
            <rect x="-24" y="-9" width="48" height="18" rx="4" fill="#FFFFFF" stroke={VISUAL_THEME.borderSubtle} strokeWidth="1" />
            <text x="0" y="4" textAnchor="middle" fontSize="9.5" fontWeight="800" fill={VISUAL_THEME.dangerDark}>
              {radiusLabel}
            </text>
          </g>
        </g>
      )}

      {/* 4. SETENGAH BOLA PEJAL / PADAT (HEMISPHERE) */}
      {solid === 'hemisphere' && (
        <g transform="translate(130, 85)">
          {/* Kubah Lengkung Setengah Bola */}
          <path d="M -50 0 A 50 50 0 0 1 50 0" fill="#EFF6FF" stroke={VISUAL_THEME.primary} strokeWidth="2.25" />
          {/* Bidang Datar Pejal (Elips Dasar) */}
          <ellipse cx="0" cy="0" rx="50" ry="15" fill="#DBEAFE" stroke={VISUAL_THEME.primary} strokeWidth="2" />

          {/* Jari-jari di Bidang Datar */}
          <circle cx="0" cy="0" r="3" fill={VISUAL_THEME.danger} />
          <line x1="0" y1="0" x2="50" y2="0" stroke={VISUAL_THEME.danger} strokeWidth="2" />
          <circle cx="50" cy="0" r="2.5" fill={VISUAL_THEME.danger} />

          <g transform="translate(25, 14)">
            <rect x="-24" y="-8" width="48" height="16" rx="3" fill="#FFFFFF" stroke={VISUAL_THEME.borderSubtle} strokeWidth="1" />
            <text x="0" y="4" textAnchor="middle" fontSize="9.5" fontWeight="800" fill={VISUAL_THEME.dangerDark}>{radiusLabel}</text>
          </g>
        </g>
      )}

      {/* 5. KERUCUT TERPANCUNG (FRUSTUM-CONE) */}
      {solid === 'frustum-cone' && (
        <g transform="translate(125, 15)">
          {/* Garis Alas Bawah Belakang */}
          <path d="M -55 105 A 55 13 0 0 1 55 105" fill="none" stroke={VISUAL_THEME.primary} strokeWidth="1.5" strokeDasharray="3 2" />
          {/* Selimut Terpancung */}
          <polygon points="-24,35 24,35 55,105 -55,105" fill={VISUAL_THEME.primarySoft} stroke="none" />
          {/* Garis Alas Bawah Depan */}
          <path d="M -55 105 A 55 13 0 0 0 55 105" fill="none" stroke={VISUAL_THEME.primary} strokeWidth="2" />
          {/* Garis Samping */}
          <line x1="-24" y1="35" x2="-55" y2="105" stroke={VISUAL_THEME.primary} strokeWidth="2" />
          <line x1="24" y1="35" x2="55" y2="105" stroke={VISUAL_THEME.primary} strokeWidth="2" />
          {/* Elips Atas */}
          <ellipse cx="0" cy="35" rx="24" ry="7" fill="#DBEAFE" stroke={VISUAL_THEME.primary} strokeWidth="2" />

          {/* Garis Tinggi */}
          <line x1="0" y1="35" x2="0" y2="105" stroke={VISUAL_THEME.danger} strokeWidth="1.75" strokeDasharray="3 2" />
          <g transform="translate(-18, 70)">
            <rect x="-18" y="-8" width="36" height="16" rx="3" fill="#FFFFFF" stroke={VISUAL_THEME.danger} strokeWidth="1" />
            <text x="0" y="4" textAnchor="middle" fontSize="9.5" fontWeight="800" fill={VISUAL_THEME.dangerDark}>{heightLabel}</text>
          </g>

          {/* Label Jari-jari Atas & Bawah */}
          <g transform="translate(0, 18)">
            <rect x="-24" y="-8" width="48" height="16" rx="3" fill="#FFFFFF" stroke={VISUAL_THEME.borderSubtle} strokeWidth="1" />
            <text x="0" y="4" textAnchor="middle" fontSize="9" fontWeight="800" fill={VISUAL_THEME.primaryDark}>{radiusTopLabel}</text>
          </g>
          <g transform="translate(0, 124)">
            <rect x="-26" y="-8" width="52" height="16" rx="3" fill="#FFFFFF" stroke={VISUAL_THEME.borderSubtle} strokeWidth="1" />
            <text x="0" y="4" textAnchor="middle" fontSize="9" fontWeight="800" fill={VISUAL_THEME.primaryDark}>{radiusBottomLabel}</text>
          </g>
        </g>
      )}

      {/* 6. BANDUL GABUNGAN (KERUCUT + SETENGAH BOLA) */}
      {solid === 'composite-cone-sphere' && (
        <g transform="translate(130, 72)">
          {/* Setengah Bola di Bawah */}
          <path d="M -42 0 A 42 42 0 0 0 42 0" fill="#DBEAFE" stroke={VISUAL_THEME.primary} strokeWidth="2" />
          {/* Elips Sambungan */}
          <ellipse cx="0" cy="0" rx="42" ry="10" fill="#BFDBFE" stroke={VISUAL_THEME.primary} strokeWidth="1.5" />

          {/* Kerucut di Atas */}
          <polygon points="0,-52 -42,0 42,0" fill="#EFF6FF" stroke={VISUAL_THEME.primary} strokeWidth="2" />

          {/* Garis Tinggi Kerucut */}
          <line x1="0" y1="-52" x2="0" y2="0" stroke={VISUAL_THEME.danger} strokeWidth="1.75" strokeDasharray="3 2" />
          <g transform="translate(-18, -26)">
            <rect x="-20" y="-8" width="40" height="16" rx="3" fill="#FFFFFF" stroke={VISUAL_THEME.danger} strokeWidth="1" />
            <text x="0" y="4" textAnchor="middle" fontSize="9" fontWeight="800" fill={VISUAL_THEME.dangerDark}>{heightLabel}</text>
          </g>

          {/* Jari-jari r */}
          <line x1="0" y1="0" x2="42" y2="0" stroke={VISUAL_THEME.primaryDark} strokeWidth="2" />
          <g transform="translate(21, 14)">
            <rect x="-22" y="-8" width="44" height="16" rx="3" fill="#FFFFFF" stroke={VISUAL_THEME.borderSubtle} strokeWidth="1" />
            <text x="0" y="4" textAnchor="middle" fontSize="9" fontWeight="800" fill={VISUAL_THEME.primaryDark}>{radiusLabel}</text>
          </g>
        </g>
      )}

      {/* 7. BOLA DALAM TABUNG */}
      {solid === 'sphere-in-cylinder' && (
        <g transform="translate(125, 20)">
          {/* Silinder Luar Transparan */}
          <rect x="-42" y="15" width="84" height="84" fill="#F8FAFC" stroke={VISUAL_THEME.primary} strokeWidth="1.75" strokeDasharray="4 2" />
          <ellipse cx="0" cy="15" rx="42" ry="10" fill="none" stroke={VISUAL_THEME.primary} strokeWidth="1.5" />
          <ellipse cx="0" cy="99" rx="42" ry="10" fill="none" stroke={VISUAL_THEME.primary} strokeWidth="1.5" />

          {/* Bola di Dalam Menyinggung Sisi */}
          <circle cx="0" cy="57" r="42" fill="#DBEAFE" fillOpacity="0.75" stroke={VISUAL_THEME.primary} strokeWidth="2" />
          <ellipse cx="0" cy="57" rx="42" ry="12" fill="none" stroke="#60A5FA" strokeWidth="1.25" strokeDasharray="3 2" />

          {/* Label Jari-jari */}
          <line x1="0" y1="57" x2="42" y2="57" stroke={VISUAL_THEME.danger} strokeWidth="1.75" />
          <g transform="translate(20, 50)">
            <rect x="-18" y="-7" width="36" height="14" rx="3" fill="#FFFFFF" stroke={VISUAL_THEME.danger} strokeWidth="1" />
            <text x="0" y="3.5" textAnchor="middle" fontSize="8.5" fontWeight="800" fill={VISUAL_THEME.dangerDark}>{radiusLabel}</text>
          </g>

          <DimensionLine x1="52" y1="15" x2="52" y2="99" label={heightLabel} />
        </g>
      )}

      {/* 8. BALOK / KUBUS (BOX) */}
      {solid === 'box' && (
        <g transform="translate(32, 16)">
          {/* Garis Rusuk Belakang Putus-putus */}
          <line x1="72" y1="36" x2="72" y2="92" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3 2" />
          <line x1="32" y1="64" x2="72" y2="36" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3 2" />
          <line x1="72" y1="92" x2="175" y2="92" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3 2" />

          {/* Bidang Depan */}
          <rect x="32" y="64" width="103" height="48" fill={VISUAL_THEME.primarySoft} stroke={VISUAL_THEME.primary} strokeWidth="2" />
          {/* Bidang Atas */}
          <polygon points="32,64 72,36 175,36 135,64" fill="#DBEAFE" stroke={VISUAL_THEME.primary} strokeWidth="2" />
          {/* Bidang Kanan */}
          <polygon points="135,64 175,36 175,84 135,112" fill="#BFDBFE" stroke={VISUAL_THEME.primary} strokeWidth="2" />

          {/* Label Panjang p di Bawah Depan */}
          <g transform="translate(83, 126)">
            <rect x="-28" y="-8" width="56" height="16" rx="3" fill="#FFFFFF" stroke={VISUAL_THEME.borderSubtle} strokeWidth="1" />
            <text x="0" y="4" textAnchor="middle" fontSize="9.5" fontWeight="800" fill={VISUAL_THEME.textDark}>{lengthLabel || 'p = 12 cm'}</text>
          </g>

          {/* Label Tinggi t di Sisi Kiri */}
          <g transform="translate(14, 88)">
            <rect x="-22" y="-8" width="44" height="16" rx="3" fill="#FFFFFF" stroke={VISUAL_THEME.borderSubtle} strokeWidth="1" />
            <text x="0" y="4" textAnchor="middle" fontSize="9.5" fontWeight="800" fill={VISUAL_THEME.textDark}>{heightLabel || 't = 4 cm'}</text>
          </g>

          {/* Label Lebar l di Rusuk Atas Miring */}
          <g transform="translate(150, 46)">
            <rect x="-24" y="-8" width="48" height="16" rx="3" fill="#FFFFFF" stroke={VISUAL_THEME.borderSubtle} strokeWidth="1" />
            <text x="0" y="4" textAnchor="middle" fontSize="9.5" fontWeight="800" fill={VISUAL_THEME.textDark}>{widthLabel || 'l = 5 cm'}</text>
          </g>
        </g>
      )}

      {/* Target Badge di Sisi Kanan (Bebas Tabrakan) */}
      {targetLabel && (
        <g transform={`translate(${width - 58}, 75)`}>
          <rect x="-38" y="-15" width="76" height="30" rx="6" fill={VISUAL_THEME.accentSoft} stroke={VISUAL_THEME.accent} strokeWidth="1.5" />
          <text x="0" y="4.5" textAnchor="middle" fontSize="9.5" fontWeight="800" fill={VISUAL_THEME.accentDark}>
            {targetLabel}
          </text>
        </g>
      )}
    </SvgContainer>
  );
}
