import React from 'react';
import { VISUAL_THEME as T } from '../theme';
import { SvgContainer } from '../common/SvgContainer';

/**
 * Gambar stimulus IPA. Semua angka berasal dari props (data soal) agar sama dengan
 * teks soal; engine tidak menambahkan angka sendiri.
 */

function Arrow({ x1, y1, x2, y2, color = T.primary, width = 2.5 }) {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const h = 8;
  const p1 = [x2 - h * Math.cos(angle - 0.45), y2 - h * Math.sin(angle - 0.45)];
  const p2 = [x2 - h * Math.cos(angle + 0.45), y2 - h * Math.sin(angle + 0.45)];
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={width} strokeLinecap="round" />
      <polygon points={`${x2},${y2} ${p1[0]},${p1[1]} ${p2[0]},${p2[1]}`} fill={color} />
    </g>
  );
}

function Label({ x, y, children, anchor = 'middle', size = 11, weight = 700, color = T.textDark }) {
  return (
    <text x={x} y={y} textAnchor={anchor} fontSize={size} fontWeight={weight} fill={color}>
      {children}
    </text>
  );
}

// ---------------------------------------------------------------------------
// 1. Termometer (perbandingan skala)
// scales: [{ name: 'Celsius', bottom: '0', top: '100', reading: '?', level: 0.4 }]
// ---------------------------------------------------------------------------
export function ThermometerVisual({ title = 'Perbandingan Skala Termometer', caption, scales = [] }) {
  const width = Math.max(220, scales.length * 110);
  const height = 210;
  const colW = width / Math.max(scales.length, 1);
  const tubeTop = 34;
  const tubeBottom = 160;

  return (
    <SvgContainer width={width} height={height} title={title} caption={caption}>
      {scales.map((s, i) => {
        const cx = colW * i + colW / 2;
        const level = Math.min(Math.max(s.level ?? 0.5, 0), 1);
        const liquidY = tubeBottom - (tubeBottom - tubeTop) * level;
        return (
          <g key={s.name || i}>
            <Label x={cx} y={18} size={11.5}>{s.name}</Label>
            <rect x={cx - 7} y={tubeTop - 6} width={14} height={tubeBottom - tubeTop + 16} rx={7} fill="#FFFFFF" stroke={T.axisLine} strokeWidth={1.5} />
            <rect x={cx - 3.5} y={liquidY} width={7} height={tubeBottom - liquidY + 8} fill={T.danger} />
            <circle cx={cx} cy={tubeBottom + 18} r={12} fill={T.danger} stroke={T.dangerDark} strokeWidth={1.5} />
            {/* titik tetap atas & bawah */}
            <line x1={cx + 8} y1={tubeTop} x2={cx + 18} y2={tubeTop} stroke={T.axisLine} strokeWidth={1.5} />
            <line x1={cx + 8} y1={tubeBottom} x2={cx + 18} y2={tubeBottom} stroke={T.axisLine} strokeWidth={1.5} />
            {s.top !== undefined && <Label x={cx + 22} y={tubeTop + 4} anchor="start" size={10.5} color={T.textSecondary}>{s.top}</Label>}
            {s.bottom !== undefined && <Label x={cx + 22} y={tubeBottom + 4} anchor="start" size={10.5} color={T.textSecondary}>{s.bottom}</Label>}
            {/* pembacaan */}
            {s.reading !== undefined && (
              <g>
                <line x1={cx - 18} y1={liquidY} x2={cx - 8} y2={liquidY} stroke={T.accent} strokeWidth={2} />
                <rect x={cx - 52} y={liquidY - 10} width={34} height={20} rx={5} fill={s.reading === '?' ? T.accentSoft : T.primarySoft} stroke={s.reading === '?' ? T.accent : T.primary} strokeWidth={1.2} />
                <Label x={cx - 35} y={liquidY + 4} size={10.5} color={s.reading === '?' ? T.accentDark : T.primaryDark}>{s.reading}</Label>
              </g>
            )}
          </g>
        );
      })}
    </SvgContainer>
  );
}

// ---------------------------------------------------------------------------
// 2. Tuas jenis pertama
// ---------------------------------------------------------------------------
export function LeverVisual({
  title = 'Tuas (Pengungkit)',
  caption,
  loadLabel = 'w',
  effortLabel = 'F',
  loadArmLabel = 'Lb',
  effortArmLabel = 'Lk',
  ratio = 2
}) {
  const width = 340;
  const height = 170;
  const beamY = 92;
  const total = 280;
  const loadArm = total / (1 + ratio);
  const fulcrumX = 30 + loadArm;
  const leftX = 30;
  const rightX = 30 + total;

  return (
    <SvgContainer width={width} height={height} title={title} caption={caption}>
      <rect x={leftX} y={beamY - 4} width={total} height={8} rx={3} fill="#E2E8F0" stroke={T.axisLine} strokeWidth={1.2} />
      <polygon points={`${fulcrumX},${beamY + 4} ${fulcrumX - 16},${beamY + 34} ${fulcrumX + 16},${beamY + 34}`} fill={T.secondarySoft} stroke={T.secondary} strokeWidth={1.5} />
      <Label x={fulcrumX} y={beamY + 48} size={10} color={T.secondaryDark}>titik tumpu</Label>
      {/* beban */}
      <rect x={leftX} y={beamY - 40} width={40} height={36} rx={4} fill={T.primarySoft} stroke={T.primary} strokeWidth={1.5} />
      <Label x={leftX + 20} y={beamY - 18} size={10.5} color={T.primaryDark}>beban</Label>
      <Label x={leftX + 20} y={beamY - 48} size={11}>{loadLabel}</Label>
      {/* kuasa */}
      <Arrow x1={rightX - 6} y1={beamY - 52} x2={rightX - 6} y2={beamY - 8} color={T.accent} />
      <Label x={rightX - 6} y={beamY - 58} size={11}>{effortLabel}</Label>
      {/* lengan */}
      <line x1={leftX + 20} y1={beamY + 62} x2={fulcrumX} y2={beamY + 62} stroke={T.textMuted} strokeWidth={1} />
      <line x1={fulcrumX} y1={beamY + 62} x2={rightX - 6} y2={beamY + 62} stroke={T.textMuted} strokeWidth={1} />
      {[leftX + 20, fulcrumX, rightX - 6].map((x) => (
        <line key={x} x1={x} y1={beamY + 56} x2={x} y2={beamY + 68} stroke={T.textMuted} strokeWidth={1} />
      ))}
      <Label x={(leftX + 20 + fulcrumX) / 2} y={beamY + 76} size={10.5} color={T.textSecondary}>{loadArmLabel}</Label>
      <Label x={(fulcrumX + rightX - 6) / 2} y={beamY + 76} size={10.5} color={T.textSecondary}>{effortArmLabel}</Label>
    </SvgContainer>
  );
}

// ---------------------------------------------------------------------------
// 3. Rangkaian listrik sederhana (seri / paralel)
// ---------------------------------------------------------------------------
function Resistor({ x, y, vertical = false, label }) {
  const w = vertical ? 14 : 40;
  const h = vertical ? 40 : 14;
  return (
    <g>
      <rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx={2} fill="#FFFFFF" stroke={T.primaryDark} strokeWidth={1.8} />
      <Label x={vertical ? x + 12 : x} y={vertical ? y + 4 : y - 12} anchor={vertical ? 'start' : 'middle'} size={10.5} color={T.primaryDark}>{label}</Label>
    </g>
  );
}

export function CircuitVisual({
  title = 'Rangkaian Listrik',
  caption,
  mode = 'series',
  batteryLabel = 'V',
  resistors = ['R₁', 'R₂'],
  ammeterLabel
}) {
  const width = 340;
  const height = 190;
  const left = 50;
  const right = 300;
  const top = 40;
  const bottom = 160;
  const wire = { stroke: T.axisLine, strokeWidth: 2, fill: 'none' };
  const midY = (top + bottom) / 2;

  return (
    <SvgContainer width={width} height={height} title={title} caption={caption}>
      {/* baterai di sisi kiri */}
      <line x1={left} y1={top} x2={left} y2={midY - 10} {...wire} />
      <line x1={left} y1={midY + 10} x2={left} y2={bottom} {...wire} />
      <line x1={left - 14} y1={midY - 10} x2={left + 14} y2={midY - 10} stroke={T.textDark} strokeWidth={2.5} />
      <line x1={left - 7} y1={midY + 10} x2={left + 7} y2={midY + 10} stroke={T.textDark} strokeWidth={4} />
      <Label x={left - 18} y={midY + 4} anchor="end" size={11}>{batteryLabel}</Label>
      <Label x={left + 18} y={midY - 12} anchor="start" size={9} color={T.textMuted}>+</Label>

      {mode === 'parallel' ? (
        <g>
          <line x1={left} y1={top} x2={right} y2={top} {...wire} />
          <line x1={left} y1={bottom} x2={right} y2={bottom} {...wire} />
          {resistors.map((r, i) => {
            const x = 130 + (i * (right - 130)) / Math.max(resistors.length - 1, 1);
            return (
              <g key={r + i}>
                <line x1={x} y1={top} x2={x} y2={midY - 20} {...wire} />
                <line x1={x} y1={midY + 20} x2={x} y2={bottom} {...wire} />
                <Resistor x={x} y={midY} vertical label={r} />
              </g>
            );
          })}
        </g>
      ) : (
        <g>
          <line x1={left} y1={top} x2={right} y2={top} {...wire} />
          <line x1={right} y1={top} x2={right} y2={bottom} {...wire} />
          <line x1={left} y1={bottom} x2={right} y2={bottom} {...wire} />
          {resistors.map((r, i) => {
            const x = left + ((i + 1) * (right - left)) / (resistors.length + 1);
            return (
              <g key={r + i}>
                <rect x={x - 22} y={top - 3} width={44} height={6} fill={T.bgContainer} />
                <Resistor x={x} y={top} label={r} />
              </g>
            );
          })}
        </g>
      )}

      {ammeterLabel && (
        <g>
          <circle cx={(left + right) / 2} cy={bottom} r={12} fill="#FFFFFF" stroke={T.secondary} strokeWidth={2} />
          <Label x={(left + right) / 2} y={bottom + 4} size={11} color={T.secondaryDark}>A</Label>
          <Label x={(left + right) / 2} y={bottom + 26} size={10.5} color={T.secondaryDark}>{ammeterLabel}</Label>
        </g>
      )}
    </SvgContainer>
  );
}

// ---------------------------------------------------------------------------
// 4. Gelombang transversal / longitudinal
// ---------------------------------------------------------------------------
export function WaveVisual({
  title = 'Gelombang',
  caption,
  kind = 'transversal',
  cycles = 2,
  lengthLabel,
  amplitudeLabel,
  showPoints = false
}) {
  const width = 340;
  const height = kind === 'transversal' ? 170 : 130;
  const x0 = 30;
  const x1 = 310;
  const midY = kind === 'transversal' ? 70 : 55;
  const amp = 32;

  if (kind === 'longitudinal') {
    const lines = [];
    const n = Math.round(cycles) * 12;
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      const phase = t * cycles * 2 * Math.PI;
      const x = x0 + t * (x1 - x0) + 7 * Math.sin(phase);
      lines.push(<line key={i} x1={x} y1={midY - 22} x2={x} y2={midY + 22} stroke={T.primary} strokeWidth={1.6} />);
    }
    return (
      <SvgContainer width={width} height={height} title={title} caption={caption}>
        {lines}
        <Label x={x0 + (x1 - x0) * 0.05} y={midY - 30} size={10} color={T.textSecondary}>rapatan</Label>
        <Label x={x0 + (x1 - x0) * (0.25 / cycles) + 30} y={midY - 30} size={10} color={T.textSecondary}>renggangan</Label>
        {lengthLabel && <Dimension x0={x0} x1={x1} y={midY + 40} label={lengthLabel} />}
      </SvgContainer>
    );
  }

  let d = '';
  const steps = 160;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const x = x0 + t * (x1 - x0);
    const y = midY - amp * Math.sin(t * cycles * 2 * Math.PI);
    d += `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)} `;
  }
  const crestX = x0 + (x1 - x0) / (4 * cycles);
  const pointLabels = [];
  if (showPoints) {
    const letters = 'ABCDEFGHIJ';
    for (let k = 0; k <= cycles * 4 && k < letters.length; k++) {
      const t = k / (cycles * 4);
      const x = x0 + t * (x1 - x0);
      const y = midY - amp * Math.sin(t * cycles * 2 * Math.PI);
      pointLabels.push(
        <g key={k}>
          <circle cx={x} cy={y} r={3} fill={T.accent} />
          <Label x={x} y={y + (Math.sin(t * cycles * 2 * Math.PI) > 0.5 ? -8 : 14)} size={10} color={T.accentDark}>{letters[k]}</Label>
        </g>
      );
    }
  }

  return (
    <SvgContainer width={width} height={height} title={title} caption={caption}>
      <line x1={x0} y1={midY} x2={x1} y2={midY} stroke={T.gridLine} strokeWidth={1} strokeDasharray="4 3" />
      <path d={d} fill="none" stroke={T.primary} strokeWidth={2.5} />
      {amplitudeLabel && (
        <g>
          <line x1={crestX} y1={midY} x2={crestX} y2={midY - amp} stroke={T.secondary} strokeWidth={1.5} />
          <Label x={crestX + 6} y={midY - amp / 2 + 4} anchor="start" size={10.5} color={T.secondaryDark}>{amplitudeLabel}</Label>
        </g>
      )}
      {pointLabels}
      {lengthLabel && <Dimension x0={x0} x1={x1} y={midY + amp + 26} label={lengthLabel} />}
    </SvgContainer>
  );
}

function Dimension({ x0, x1, y, label }) {
  return (
    <g>
      <line x1={x0} y1={y} x2={x1} y2={y} stroke={T.textMuted} strokeWidth={1} />
      <line x1={x0} y1={y - 6} x2={x0} y2={y + 6} stroke={T.textMuted} strokeWidth={1} />
      <line x1={x1} y1={y - 6} x2={x1} y2={y + 6} stroke={T.textMuted} strokeWidth={1} />
      <rect x={(x0 + x1) / 2 - 34} y={y - 9} width={68} height={18} rx={4} fill={T.bgContainer} />
      <Label x={(x0 + x1) / 2} y={y + 4} size={10.5} color={T.textSecondary}>{label}</Label>
    </g>
  );
}

// ---------------------------------------------------------------------------
// 5. Diagram gaya pada benda
// forces: [{ dir: 'left'|'right'|'up'|'down', label: 'F₁ = 20 N' }]
// ---------------------------------------------------------------------------
export function ForceVisual({ title = 'Gaya pada Benda', caption, bodyLabel = '', forces = [] }) {
  const width = 340;
  const height = 170;
  const cx = 170;
  const cy = 88;
  const half = 30;
  const len = 70;
  const sameDirCount = {};

  return (
    <SvgContainer width={width} height={height} title={title} caption={caption}>
      <line x1={20} y1={cy + half} x2={320} y2={cy + half} stroke={T.axisLine} strokeWidth={1.5} />
      <rect x={cx - half} y={cy - half} width={half * 2} height={half * 2} rx={4} fill={T.primarySoft} stroke={T.primary} strokeWidth={1.8} />
      <Label x={cx} y={cy + 4} size={11} color={T.primaryDark}>{bodyLabel}</Label>
      {forces.map((f, i) => {
        const k = (sameDirCount[f.dir] = (sameDirCount[f.dir] || 0) + 1) - 1;
        const off = k * 18 - 9 * (forces.filter((g) => g.dir === f.dir).length - 1);
        if (f.dir === 'left') {
          return (
            <g key={i}>
              <Arrow x1={cx - half} y1={cy + off} x2={cx - half - len} y2={cy + off} color={T.accent} />
              <Label x={cx - half - len / 2} y={cy + off - 6} size={10.5} color={T.accentDark}>{f.label}</Label>
            </g>
          );
        }
        if (f.dir === 'right') {
          return (
            <g key={i}>
              <Arrow x1={cx + half} y1={cy + off} x2={cx + half + len} y2={cy + off} color={T.secondary} />
              <Label x={cx + half + len / 2} y={cy + off - 6} size={10.5} color={T.secondaryDark}>{f.label}</Label>
            </g>
          );
        }
        if (f.dir === 'up') {
          return (
            <g key={i}>
              <Arrow x1={cx + off} y1={cy - half} x2={cx + off} y2={cy - half - 40} color={T.purple} />
              <Label x={cx + off + 8} y={cy - half - 30} anchor="start" size={10.5} color={T.purpleDark}>{f.label}</Label>
            </g>
          );
        }
        return (
          <g key={i}>
            <Arrow x1={cx + off} y1={cy} x2={cx + off} y2={cy + half + 34} color={T.danger} />
            <Label x={cx + off + 8} y={cy + half + 28} anchor="start" size={10.5} color={T.dangerDark}>{f.label}</Label>
          </g>
        );
      })}
    </SvgContainer>
  );
}

// ---------------------------------------------------------------------------
// 6. Grafik gerak (v–t atau s–t)
// points: [[t, y], ...] dalam satuan data; xTicks/yTicks: angka yang ditulis di sumbu
// ---------------------------------------------------------------------------
export function MotionGraphVisual({
  title = 'Grafik Gerak',
  caption,
  points = [],
  xTicks = [],
  yTicks = [],
  xLabel = 't (s)',
  yLabel = 'v (m/s)',
  pointLabels = []
}) {
  const width = 340;
  const height = 200;
  const ox = 52;
  const oy = 165;
  const w = 250;
  const h = 130;
  const xMax = Math.max(...xTicks, ...points.map((p) => p[0]), 1);
  const yMax = Math.max(...yTicks, ...points.map((p) => p[1]), 1);
  const px = (t) => ox + (t / xMax) * w;
  const py = (v) => oy - (v / yMax) * h;
  const d = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${px(p[0])},${py(p[1])}`).join(' ');

  return (
    <SvgContainer width={width} height={height} title={title} caption={caption}>
      {yTicks.map((v) => (
        <g key={`y${v}`}>
          <line x1={ox} y1={py(v)} x2={ox + w} y2={py(v)} stroke={T.gridLine} strokeWidth={1} strokeDasharray="3 3" />
          <Label x={ox - 6} y={py(v) + 4} anchor="end" size={10} weight={600} color={T.textSecondary}>{v}</Label>
        </g>
      ))}
      {xTicks.map((t) => (
        <g key={`x${t}`}>
          <line x1={px(t)} y1={oy} x2={px(t)} y2={oy - h} stroke={T.gridLine} strokeWidth={1} strokeDasharray="3 3" />
          <Label x={px(t)} y={oy + 14} size={10} weight={600} color={T.textSecondary}>{t}</Label>
        </g>
      ))}
      <Arrow x1={ox} y1={oy} x2={ox + w + 14} y2={oy} color={T.axisLine} width={1.6} />
      <Arrow x1={ox} y1={oy} x2={ox} y2={oy - h - 16} color={T.axisLine} width={1.6} />
      <Label x={ox + w + 10} y={oy + 26} anchor="end" size={10.5} color={T.textSecondary}>{xLabel}</Label>
      <Label x={ox + 6} y={oy - h - 20} anchor="start" size={10.5} color={T.textSecondary}>{yLabel}</Label>
      <path d={d} fill="none" stroke={T.primary} strokeWidth={2.6} strokeLinejoin="round" />
      {points.map((p, i) => (
        <g key={i}>
          <circle cx={px(p[0])} cy={py(p[1])} r={3.5} fill={T.primary} />
          {pointLabels[i] && <Label x={px(p[0])} y={py(p[1]) - 9} size={10.5} color={T.primaryDark}>{pointLabels[i]}</Label>}
        </g>
      ))}
    </SvgContainer>
  );
}

// ---------------------------------------------------------------------------
// 7. Jaring-jaring / rantai makanan
// nodes: [{ id, label, x, y }] (x 0–1, y 0–1); edges: [[dimakan, pemakan], ...]
// ---------------------------------------------------------------------------
export function FoodWebVisual({ title = 'Jaring-Jaring Makanan', caption, nodes = [], edges = [] }) {
  const width = 340;
  const height = 200;
  const pos = Object.fromEntries(nodes.map((n) => [n.id, { x: 40 + n.x * 260, y: 24 + n.y * 150 }]));

  return (
    <SvgContainer width={width} height={height} title={title} caption={caption}>
      {edges.map(([from, to], i) => {
        const a = pos[from];
        const b = pos[to];
        if (!a || !b) return null;
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dist = Math.hypot(dx, dy) || 1;
        const shrinkA = 16 / dist;
        const shrinkB = 18 / dist;
        return (
          <Arrow
            key={i}
            x1={a.x + dx * shrinkA}
            y1={a.y + dy * shrinkA}
            x2={b.x - dx * shrinkB}
            y2={b.y - dy * shrinkB}
            color={T.secondary}
            width={1.8}
          />
        );
      })}
      {nodes.map((n) => {
        const p = pos[n.id];
        const w = Math.max(54, n.label.length * 6.6 + 14);
        return (
          <g key={n.id}>
            <rect x={p.x - w / 2} y={p.y - 11} width={w} height={22} rx={11} fill={n.highlight ? T.accentSoft : '#FFFFFF'} stroke={n.highlight ? T.accent : T.secondary} strokeWidth={1.5} />
            <Label x={p.x} y={p.y + 4} size={10.5} color={n.highlight ? T.accentDark : T.secondaryDark}>{n.label}</Label>
          </g>
        );
      })}
    </SvgContainer>
  );
}

// ---------------------------------------------------------------------------
// 8. Dongkrak hidrolik (hukum Pascal)
// ---------------------------------------------------------------------------
export function HydraulicVisual({
  title = 'Dongkrak Hidrolik',
  caption,
  smallForce = 'F₁',
  smallArea = 'A₁',
  bigForce = 'F₂',
  bigArea = 'A₂'
}) {
  const width = 340;
  const height = 190;
  return (
    <SvgContainer width={width} height={height} title={title} caption={caption}>
      <path d="M60,70 L60,160 L280,160 L280,60 L210,60 L210,145 L100,145 L100,70 Z" fill={T.primarySoft} stroke={T.primary} strokeWidth={1.8} />
      <rect x={58} y={62} width={44} height={10} fill={T.textSecondary} />
      <rect x={208} y={52} width={74} height={10} fill={T.textSecondary} />
      <Arrow x1={80} y1={20} x2={80} y2={58} color={T.accent} />
      <Label x={88} y={30} anchor="start" size={10.5} color={T.accentDark}>{smallForce}</Label>
      <Label x={80} y={98} size={10} color={T.primaryDark}>{smallArea}</Label>
      <Arrow x1={245} y1={48} x2={245} y2={14} color={T.secondary} />
      <Label x={253} y={26} anchor="start" size={10.5} color={T.secondaryDark}>{bigForce}</Label>
      <Label x={245} y={98} size={10} color={T.primaryDark}>{bigArea}</Label>
      <Label x={170} y={178} size={10} weight={600} color={T.textMuted}>zat cair</Label>
    </SvgContainer>
  );
}

// ---------------------------------------------------------------------------
// 9. Ayunan bandul (posisi A–B–C)
// ---------------------------------------------------------------------------
export function PendulumVisual({ title = 'Ayunan Bandul', caption, labels = ['A', 'B', 'C'] }) {
  const width = 300;
  const height = 180;
  const px = 150;
  const py = 22;
  const L = 120;
  const angles = [-30, 0, 30];
  return (
    <SvgContainer width={width} height={height} title={title} caption={caption}>
      <line x1={100} y1={py} x2={200} y2={py} stroke={T.axisLine} strokeWidth={3} />
      {angles.map((a, i) => {
        const rad = (a * Math.PI) / 180;
        const x = px + L * Math.sin(rad);
        const y = py + L * Math.cos(rad);
        return (
          <g key={a}>
            <line x1={px} y1={py} x2={x} y2={y} stroke={i === 1 ? T.textMuted : T.gridLine} strokeWidth={1.5} strokeDasharray={i === 1 ? 'none' : '4 3'} />
            <circle cx={x} cy={y} r={11} fill={i === 1 ? T.primary : T.primarySoft} stroke={T.primary} strokeWidth={1.5} />
            <Label x={x} y={y + 28} size={11.5}>{labels[i]}</Label>
          </g>
        );
      })}
    </SvgContainer>
  );
}
