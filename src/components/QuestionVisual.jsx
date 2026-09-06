import React from 'react';

/**
 * QuestionVisual:
 * Komponen render visual / diagram SVG responsif untuk soal-soal matematika.
 * Memberikan visualisasi kontekstual (stimulus soal) tanpa membocorkan jawaban atau rumus penyelesaian.
 */
export function QuestionVisual({ question }) {
  if (!question) return null;

  const visualType = question.diagram?.type || question.visual?.type || detectVisualType(question);

  if (!visualType) return null;

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
        backgroundColor: '#F8FAFC',
        borderRadius: 'var(--radius-sm, 8px)',
        border: '1px solid var(--border-subtle, #E2E8F0)',
        maxWidth: 420,
        width: '100%'
      }}
    >
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        {renderSvgDiagram(visualType, question)}
      </div>
      <span style={{ fontSize: '0.725rem', color: '#64748B', marginTop: '0.4rem', fontStyle: 'italic' }}>
        *Gambar ilustrasi penunjang soal (skala proporsional)
      </span>
    </div>
  );
}

// Deteksi otomatis tipe diagram berdasarkan ID soal dan teks pertanyaan
function detectVisualType(question) {
  const id = question.id || '';
  const text = (question.question || '').toLowerCase();

  // ==========================================
  // KELAS 4 SD
  // ==========================================
  // Bab 2: Pecahan
  if (id === 'sd4-b2-1') return 'fraction-model-1-3';
  if (id === 'sd4-b2-2') return 'fraction-model-6-8';
  if (id === 'sd4-b2-3') return 'fraction-add-strip-3-7-plus-2-7';
  if (id === 'sd4-b2-4') return 'fraction-compare-3-5-and-2-5';
  if (id === 'sd4-b2-5') return 'fraction-melon-dedi-lani';

  // Bab 3: Pola Gambar dan Pola Bilangan
  if (id === 'sd4-b3-1') return 'pattern-hop-5-9-13-17';
  if (id === 'sd4-b3-2') return 'pattern-descend-35-30-25';
  if (id === 'sd4-b3-3') return 'pattern-fill-2-6-10-box';
  if (id === 'sd4-b3-4') return 'pattern-marble-triangle';

  // Bab 4: Pengukuran Luas dan Volume
  if (id === 'sd4-b4-1') return 'unit-grid-6x4';
  if (id === 'sd4-b4-2') return 'stacked-box-cubes-36';
  if (id === 'sd4-b4-3') return 'capacity-bucket-dippers';
  if (id === 'sd4-b4-4') return 'sheet-paper-divided-4';
  if (id === 'sd4-b4-5') return 'floor-tile-layout-5x4';
  if (id === 'sd4-b4-6') return 'cube-64-volume';
  if (id === 'sd4-b4-7') return 'syrup-bottles-teapot';

  // Bab 5: Bangun Datar
  if (id === 'sd4-b5-1') return 'polygon-three-equal-sides';
  if (id === 'sd4-b5-2') return 'square-diagonal-cut';
  if (id === 'sd4-b5-3') return 'rectangle-corner-angles';
  if (id === 'sd4-b5-4') return 'triangles-joined-base';

  // Bab 6: Piktogram dan Diagram Batang
  if (id === 'sd4-b6-1') return 'pictogram-stars-melati';
  if (id === 'sd4-b6-2') return 'bar-chart-types-comparison';
  if (id === 'sd4-b6-3') return 'bar-chart-extracurricular';
  if (id === 'sd4-b6-4') return 'bar-chart-extracurricular-diff';

  // ==========================================
  // KELAS 5 SD
  // ==========================================
  if (id === 'sd5-b4-1') return 'square-side-9';
  if (id === 'sd5-b4-2') return 'rectangle-dim-14x6';
  if (id === 'sd5-b4-3') return 'equilateral-perimeter-45';
  if (id === 'sd5-b4-4') return 'garden-dim-20x12';

  if (id === 'sd5-b5-1') return 'triangle-dim-10x8';
  if (id === 'sd5-b5-2') return 'rectangle-dim-15x7';
  if (id === 'sd5-b5-3') return 'parallelogram-dim-12x9';
  if (id === 'sd5-b5-4') return 'trapezoid-dim-14-18';

  if (id === 'sd5-b6-1') return 'angle-types';
  if (id === 'sd5-b6-2' || (text.includes('jarum jam') && text.includes('03.00'))) return 'clock-90';
  if (id === 'sd5-b6-3' || (text.includes('jarum jam') && text.includes('05.00'))) return 'clock-150';
  if (id === 'sd5-b6-4' || (text.includes('jarum jam') && text.includes('04.00'))) return 'clock-120';

  if (id === 'sd5-b7-1') return 'square-properties';
  if (id === 'sd5-b7-2') return 'rectangle-symmetry-lines';
  if (id === 'sd5-b7-4') return 'parallelogram-properties';

  if (id === 'sd5-b8-3') return 'bar-chart-scout-futsal';

  // ==========================================
  // KELAS 6 SD
  // ==========================================
  if (id === 'sd6-b3-1') return 'cube-8cm';
  if (id === 'sd6-b3-2') return 'box-12x5x4';
  if (id === 'sd6-b3-3') return 'cube-surface-5cm';
  if (id === 'sd6-b3-4') return 'bathtub-box-80x60x50';
  if (id === 'sd6-b4-4') return 'marble-bag-prob';

  // ==========================================
  // KELAS 7 SMP
  // ==========================================
  if (id === 'smp7-b5-4') return 'similar-photo-frame';
  if (id === 'smp7-b6-1') return 'circle-degrees-360';
  if (id === 'smp7-b6-2') return 'line-chart-fever';
  if (id === 'smp7-b6-3') return 'pie-chart-science-90deg';
  if (id === 'smp7-b6-4') return 'pie-chart-hobbies-200';

  // ==========================================
  // KELAS 8 SMP
  // ==========================================
  if (id === 'smp8-b2-1') return 'right-triangle-6-8-hypotenuse';
  if (id === 'smp8-b2-4') return 'right-triangle-klm-9-12';

  // ==========================================
  // KELAS 9 SMP
  // ==========================================
  if (id === 'smp9-b2-1' || id === 'smp9-b2-5') return 'cylinder-dim';
  if (id === 'smp9-b2-2' || id === 'smp9-b2-4') return 'cone-dim';
  if (id === 'smp9-b2-3') return 'sphere-7cm';

  // ==========================================
  // KELAS 10 SMA
  // ==========================================
  if (id === 'sma10-b3-1') return 'vector-cartesian-5-12';
  if (id === 'sma10-b4-1') return 'right-triangle-trig-8-6';
  if (id === 'sma10-b4-3') return 'elevation-tower';
  if (id === 'sma10-b4-4') return 'triangle-cosine';
  if (id === 'sma10-b6-1') return 'parabola-vertex';
  if (id === 'sma10-b6-3') return 'parabola-axis';

  // ==========================================
  // KELAS 11 SMA
  // ==========================================
  if (id === 'sma11-b2-1') return 'circle-inscribed-central';
  if (id === 'sma11-b2-2') return 'circle-diameter-angle';
  if (id === 'sma11-b2-3') return 'cyclic-quadrilateral';
  if (id === 'sma11-b2-4') return 'circle-common-tangent';

  // Fallback deteksi pola kata kunci
  if (text.includes('petak satuan') || text.includes('kertas berpetak')) return 'unit-grid-6x4';
  if (text.includes('jarum jam') && text.includes('03.00')) return 'clock-90';
  if (text.includes('jarum jam') && text.includes('05.00')) return 'clock-150';
  if (text.includes('pola bilangan') || text.includes('barisan pola')) return 'pattern-hop-5-9-13-17';
  if (text.includes('segitiga siku-siku') && (text.includes('8 cm') || text.includes('6 cm'))) return 'right-triangle-trig-8-6';
  if (text.includes('elevasi') && text.includes('menara')) return 'elevation-tower';
  if (text.includes('jajar genjang')) return 'parallelogram-dim-12x9';
  if (text.includes('trapesium')) return 'trapezoid-dim-14-18';
  if (text.includes('kubus') && text.includes('rusuk 8')) return 'cube-8cm';
  if (text.includes('balok') && text.includes('12 cm')) return 'box-12x5x4';
  if (text.includes('tabung') && text.includes('jari-jari')) return 'cylinder-dim';
  if (text.includes('kerucut')) return 'cone-dim';

  return null;
}

// Render SVG Diagram murni sebagai stimulus soal (bebas spoiler jawaban/rumus)
function renderSvgDiagram(type, question) {
  switch (type) {
    // ========================================================
    // KELAS 4 BAB 3: POLA GAMBAR & POLA BILANGAN
    // ========================================================
    case 'pattern-hop-5-9-13-17':
      return (
        <svg width="340" height="135" viewBox="0 0 340 135" style={{ maxWidth: '100%', height: 'auto' }}>
          <line x1="25" y1="85" x2="315" y2="85" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" />
          {[
            { val: 5, x: 45 },
            { val: 9, x: 105 },
            { val: 13, x: 165 },
            { val: 17, x: 225 }
          ].map((item, i) => (
            <g key={i}>
              <circle cx={item.x} cy="85" r="20" fill="#EFF6FF" stroke="#2563EB" strokeWidth="2.5" />
              <text x={item.x} y="91" textAnchor="middle" fontSize="14" fontWeight="800" fill="#1E40AF">{item.val}</text>
            </g>
          ))}
          {/* Kotak Tanda Tanya (Suku yang Dicari) */}
          <rect x="265" y="65" width="40" height="40" rx="8" fill="#FEF3C7" stroke="#D97706" strokeWidth="2.5" strokeDasharray="4 2" />
          <text x="285" y="91" textAnchor="middle" fontSize="18" fontWeight="900" fill="#B45309">?</text>

          {/* Lengkungan Panah Pola Tanpa Nilai */}
          {[
            { x1: 45, x2: 105 },
            { x1: 105, x2: 165 },
            { x1: 165, x2: 225 },
            { x1: 225, x2: 285 }
          ].map((arc, i) => (
            <path 
              key={i}
              d={`M ${arc.x1} 65 Q ${(arc.x1 + arc.x2) / 2} 35 ${arc.x2} 65`} 
              fill="none" 
              stroke="#2563EB" 
              strokeWidth="2" 
            />
          ))}
          <text x="170" y="20" textAnchor="middle" fontSize="12" fontWeight="700" fill="#334155">
            Pola Barisan Bilangan
          </text>
          <text x="170" y="122" textAnchor="middle" fontSize="11" fontWeight="600" fill="#64748B">
            Berapakah bilangan selanjutnya pada kotak tanda tanya?
          </text>
        </svg>
      );

    case 'pattern-descend-35-30-25':
      return (
        <svg width="340" height="145" viewBox="0 0 340 145" style={{ maxWidth: '100%', height: 'auto' }}>
          {[
            { val: 35, x: 30, y: 25, h: 85 },
            { val: 30, x: 80, y: 40, h: 70 },
            { val: 25, x: 130, y: 55, h: 55 },
            { val: 20, x: 180, y: 70, h: 40 },
            { val: '?', x: 230, y: 85, h: 25, isQuery: true },
            { val: '?', x: 280, y: 95, h: 15, isQuery: true }
          ].map((bar, i) => (
            <g key={i}>
              <rect 
                x={bar.x} 
                y={bar.y} 
                width="38" 
                height={bar.h} 
                rx="5" 
                fill={bar.isQuery ? '#FEF3C7' : '#EFF6FF'} 
                stroke={bar.isQuery ? '#D97706' : '#2563EB'} 
                strokeWidth="2" 
                strokeDasharray={bar.isQuery ? '4 2' : 'none'}
              />
              <text x={bar.x + 19} y={bar.y - 7} textAnchor="middle" fontSize="12" fontWeight="800" fill={bar.isQuery ? '#B45309' : '#1E40AF'}>
                {bar.val}
              </text>
            </g>
          ))}
          <line x1="20" y1="110" x2="330" y2="110" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
          <text x="170" y="132" textAnchor="middle" fontSize="11" fontWeight="700" fill="#475569">
            Tentukan dua bilangan berikutnya pada barisan di atas
          </text>
        </svg>
      );

    case 'pattern-fill-2-6-10-box':
      return (
        <svg width="340" height="135" viewBox="0 0 340 135" style={{ maxWidth: '100%', height: 'auto' }}>
          <rect x="15" y="10" width="310" height="115" rx="10" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
          <text x="170" y="32" textAnchor="middle" fontSize="12" fontWeight="700" fill="#475569">
            Perhatikan Keteraturan Barisan Bilangan
          </text>
          {[
            { val: 2, x: 25 },
            { val: 6, x: 75 },
            { val: 10, x: 125 },
            { val: '?', x: 175, isQuery: true },
            { val: 18, x: 225 },
            { val: 22, x: 275 }
          ].map((item, i) => (
            <g key={i}>
              <rect 
                x={item.x} 
                y="48" 
                width="40" 
                height="40" 
                rx="6" 
                fill={item.isQuery ? '#FEF08A' : '#EFF6FF'} 
                stroke={item.isQuery ? '#CA8A04' : '#3B82F6'} 
                strokeWidth={item.isQuery ? 3 : 2} 
              />
              <text 
                x={item.x + 20} 
                y="74" 
                textAnchor="middle" 
                fontSize={item.isQuery ? 20 : 14} 
                fontWeight="800" 
                fill={item.isQuery ? '#854D0E' : '#1D4ED8'}
              >
                {item.val}
              </text>
            </g>
          ))}
          <text x="170" y="112" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1E40AF">
            Bilangan berapakah yang tepat untuk mengisi kotak kuning?
          </text>
        </svg>
      );

    case 'pattern-marble-triangle':
      return (
        <svg width="340" height="165" viewBox="0 0 340 165" style={{ maxWidth: '100%', height: 'auto' }}>
          <text x="170" y="18" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1E40AF">
            Susunan Kelereng Segitiga Lani
          </text>
          {/* Baris 1: 1 kelereng */}
          <circle cx="170" cy="36" r="7" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1.5" />
          <text x="65" y="40" fontSize="11" fontWeight="700" fill="#64748B">Baris ke-1 (1)</text>

          {/* Baris 2: 3 kelereng */}
          {[150, 170, 190].map((x, i) => (
            <circle key={i} cx={x} cy="58" r="7" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1.5" />
          ))}
          <text x="65" y="62" fontSize="11" fontWeight="700" fill="#64748B">Baris ke-2 (3)</text>

          {/* Baris 3: 5 kelereng */}
          {[130, 150, 170, 190, 210].map((x, i) => (
            <circle key={i} cx={x} cy="80" r="7" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1.5" />
          ))}
          <text x="65" y="84" fontSize="11" fontWeight="700" fill="#64748B">Baris ke-3 (5)</text>

          {/* Baris 4: 7 kelereng */}
          {[110, 130, 150, 170, 190, 210, 230].map((x, i) => (
            <circle key={i} cx={x} cy="102" r="7" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1.5" />
          ))}
          <text x="65" y="106" fontSize="11" fontWeight="700" fill="#64748B">Baris ke-4 (7)</text>

          {/* Baris 6 Target Pertanyaan */}
          <rect x="75" y="125" width="190" height="28" rx="6" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1.5" />
          <text x="170" y="143" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1E40AF">
            Banyak kelereng baris ke-6 = ?
          </text>
        </svg>
      );

    // ========================================================
    // KELAS 4 BAB 4: PENGUKURAN LUAS DAN VOLUME
    // ========================================================
    case 'unit-grid-6x4':
      return (
        <svg width="280" height="185" viewBox="0 0 280 185" style={{ maxWidth: '100%', height: 'auto' }}>
          <rect x="40" y="30" width="204" height="116" fill="#EFF6FF" stroke="#2563EB" strokeWidth="3" />
          {[1, 2, 3, 4, 5].map((i) => (
            <line key={`v-${i}`} x1={40 + i * 34} y1="30" x2={40 + i * 34} y2="146" stroke="#93C5FD" strokeWidth="1.5" />
          ))}
          {[1, 2, 3].map((j) => (
            <line key={`h-${j}`} x1="40" y1={30 + j * 29} x2="244" y2={30 + j * 29} stroke="#93C5FD" strokeWidth="1.5" />
          ))}
          <text x="142" y="20" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1D4ED8">
            6 petak satuan
          </text>
          <text x="252" y="92" fontSize="11" fontWeight="800" fill="#1D4ED8">
            4 petak
          </text>
          <text x="142" y="168" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1E40AF">
            Berapa luas persegi panjang tersebut dalam petak satuan?
          </text>
        </svg>
      );

    case 'stacked-box-cubes-36':
      return (
        <svg width="280" height="185" viewBox="0 0 280 185" style={{ maxWidth: '100%', height: 'auto' }}>
          <polygon points="50,85 140,50 230,85 140,120" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2" />
          <line x1="72.5" y1="76.2" x2="162.5" y2="111.2" stroke="#BAE6FD" strokeWidth="1.5" />
          <line x1="95" y1="67.5" x2="185" y2="102.5" stroke="#BAE6FD" strokeWidth="1.5" />
          <line x1="117.5" y1="58.8" x2="207.5" y2="93.8" stroke="#BAE6FD" strokeWidth="1.5" />

          <polygon points="50,85 140,120 140,160 50,125" fill="#BAE6FD" stroke="#0284C7" strokeWidth="2" />
          <polygon points="140,120 230,85 230,125 140,160" fill="#7DD3FC" stroke="#0284C7" strokeWidth="2" />

          <line x1="50" y1="98" x2="140" y2="133" stroke="#0284C7" strokeWidth="1.5" />
          <line x1="140" y1="133" x2="230" y2="98" stroke="#0284C7" strokeWidth="1.5" />
          <line x1="50" y1="111" x2="140" y2="146" stroke="#0284C7" strokeWidth="1.5" />
          <line x1="140" y1="146" x2="230" y2="111" stroke="#0284C7" strokeWidth="1.5" />

          <text x="140" y="38" textAnchor="middle" fontSize="12" fontWeight="800" fill="#0369A1">
            Alas memuat 12 kubus satuan
          </text>
          <text x="242" y="110" fontSize="11" fontWeight="800" fill="#DC2626">
            3 tumpukan
          </text>
          <text x="140" y="178" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1E40AF">
            Volume wadah balok = ? kubus satuan
          </text>
        </svg>
      );

    case 'capacity-bucket-dippers':
      return (
        <svg width="340" height="150" viewBox="0 0 340 150" style={{ maxWidth: '100%', height: 'auto' }}>
          {/* Wadah Ember */}
          <g transform="translate(30, 20)">
            <polygon points="10,20 60,20 52,80 18,80" fill="#93C5FD" stroke="#1D4ED8" strokeWidth="2.5" />
            <ellipse cx="35" cy="20" rx="25" ry="8" fill="#DBEAFE" stroke="#1D4ED8" strokeWidth="2" />
            <path d="M 12 20 Q 35 -5 58 20" fill="none" stroke="#1D4ED8" strokeWidth="2.5" />
            <text x="35" y="96" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1E3A8A">1 Ember</text>
          </g>

          <text x="110" y="68" textAnchor="middle" fontSize="22" fontWeight="900" fill="#64748B">=</text>

          {/* 8 Gayung Air */}
          <g transform="translate(130, 15)">
            <rect x="0" y="0" width="85" height="85" rx="8" fill="#F0FDF4" stroke="#16A34A" strokeWidth="1.5" />
            <text x="42" y="24" textAnchor="middle" fontSize="18">🥣 × 8</text>
            <text x="42" y="48" textAnchor="middle" fontSize="11" fontWeight="800" fill="#15803D">8 Gayung Air</text>
            <text x="42" y="70" textAnchor="middle" fontSize="10" fontWeight="600" fill="#166534">(1 gayung = 2 gelas)</text>
          </g>

          <text x="232" y="68" textAnchor="middle" fontSize="22" fontWeight="900" fill="#64748B">→</text>

          {/* Hasil Target Gelas Air */}
          <g transform="translate(250, 15)">
            <rect x="0" y="0" width="80" height="85" rx="8" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" strokeDasharray="4 2" />
            <text x="40" y="32" textAnchor="middle" fontSize="22">🥛</text>
            <text x="40" y="58" textAnchor="middle" fontSize="14" fontWeight="900" fill="#B45309">? Gelas</text>
            <text x="40" y="74" textAnchor="middle" fontSize="10" fontWeight="700" fill="#92400E">Kapasitas</text>
          </g>

          <text x="170" y="135" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">
            Berapa gelas air untuk mengisi penuh 1 ember?
          </text>
        </svg>
      );

    case 'sheet-paper-divided-4':
      return (
        <svg width="280" height="175" viewBox="0 0 280 175" style={{ maxWidth: '100%', height: 'auto' }}>
          <rect x="35" y="25" width="210" height="115" rx="4" fill="#FEFCE8" stroke="#CA8A04" strokeWidth="2.5" />
          <line x1="140" y1="25" x2="140" y2="140" stroke="#DC2626" strokeWidth="2" strokeDasharray="5 3" />
          <line x1="35" y1="82.5" x2="245" y2="82.5" stroke="#DC2626" strokeWidth="2" strokeDasharray="5 3" />

          <circle cx="140" cy="82.5" r="9" fill="#DC2626" />
          <text x="140" y="86.5" textAnchor="middle" fontSize="10" fontWeight="900" fill="#FFFFFF">✂</text>

          {/* 4 Bagian Tanda Tanya */}
          <text x="87" y="58" textAnchor="middle" fontSize="13" fontWeight="800" fill="#854D0E">? cm²</text>
          <text x="192" y="58" textAnchor="middle" fontSize="13" fontWeight="800" fill="#854D0E">? cm²</text>
          <text x="87" y="118" textAnchor="middle" fontSize="13" fontWeight="800" fill="#854D0E">? cm²</text>
          <text x="192" y="118" textAnchor="middle" fontSize="13" fontWeight="800" fill="#854D0E">? cm²</text>

          <text x="140" y="18" textAnchor="middle" fontSize="12" fontWeight="800" fill="#A16207">
            Luas Kertas Gambar Utuh = 200 cm²
          </text>
          <text x="140" y="160" textAnchor="middle" fontSize="11" fontWeight="700" fill="#475569">
            Kertas dipotong menjadi 4 bagian yang sama luasnya
          </text>
        </svg>
      );

    case 'floor-tile-layout-5x4':
      return (
        <svg width="280" height="185" viewBox="0 0 280 185" style={{ maxWidth: '100%', height: 'auto' }}>
          <rect x="35" y="25" width="210" height="120" fill="#F0FDF4" stroke="#16A34A" strokeWidth="3" />
          {[1, 2, 3, 4].map(i => (
            <line key={`tv-${i}`} x1={35 + i * 42} y1="25" x2={35 + i * 42} y2="145" stroke="#86EFAC" strokeWidth="1.5" />
          ))}
          {[1, 2, 3].map(j => (
            <line key={`th-${j}`} x1="35" y1={25 + j * 30} x2="245" y2={25 + j * 30} stroke="#86EFAC" strokeWidth="1.5" />
          ))}

          <rect x="35" y="25" width="42" height="30" fill="#BBF7D0" stroke="#15803D" strokeWidth="2" />
          <text x="56" y="44" textAnchor="middle" fontSize="9" fontWeight="800" fill="#14532D">1 m²</text>

          <text x="140" y="18" textAnchor="middle" fontSize="12" fontWeight="800" fill="#15803D">
            Panjang Lantai = 5 m
          </text>
          <text x="252" y="90" fontSize="11" fontWeight="800" fill="#15803D">
            4 m
          </text>
          <text x="140" y="168" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">
            Berapa ubin karpet (1 m × 1 m) yang dibutuhkan?
          </text>
        </svg>
      );

    case 'cube-64-volume':
      return (
        <svg width="260" height="175" viewBox="0 0 260 175" style={{ maxWidth: '100%', height: 'auto' }}>
          <polygon points="50,70 120,70 175,35 105,35" fill="#EEF2FF" stroke="#4338CA" strokeWidth="2.5" />
          <polygon points="120,70 175,35 175,110 120,145" fill="#C7D2FE" stroke="#4338CA" strokeWidth="2.5" />
          <rect x="50" y="70" width="70" height="75" fill="#E0E7FF" stroke="#4338CA" strokeWidth="2.5" />

          <text x="85" y="160" textAnchor="middle" fontSize="11" fontWeight="800" fill="#312E81">p = 4</text>
          <text x="156" y="135" textAnchor="start" fontSize="11" fontWeight="800" fill="#312E81">l = 4</text>
          <text x="35" y="110" textAnchor="end" fontSize="12" fontWeight="900" fill="#DC2626">t = ?</text>

          <rect x="58" y="85" width="54" height="42" rx="6" fill="#FFFFFF" stroke="#4F46E5" strokeWidth="1.5" />
          <text x="85" y="102" textAnchor="middle" fontSize="9" fontWeight="700" fill="#475569">Volume</text>
          <text x="85" y="119" textAnchor="middle" fontSize="14" fontWeight="900" fill="#4338CA">64</text>

          <text x="130" y="20" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1E40AF">
            Kotak Mainan Berbentuk Kubus
          </text>
        </svg>
      );

    case 'syrup-bottles-teapot':
      return (
        <svg width="340" height="145" viewBox="0 0 340 145" style={{ maxWidth: '100%', height: 'auto' }}>
          <g transform="translate(25, 20)">
            <rect x="0" y="15" width="22" height="55" rx="4" fill="#F43F5E" stroke="#BE123C" strokeWidth="2" />
            <rect x="6" y="5" width="10" height="10" rx="2" fill="#FDA4AF" stroke="#BE123C" strokeWidth="1.5" />
            <rect x="30" y="15" width="22" height="55" rx="4" fill="#F43F5E" stroke="#BE123C" strokeWidth="2" />
            <rect x="36" y="5" width="10" height="10" rx="2" fill="#FDA4AF" stroke="#BE123C" strokeWidth="1.5" />
            <text x="26" y="88" textAnchor="middle" fontSize="11" fontWeight="800" fill="#9F1239">2 Botol Sirup</text>
          </g>

          <text x="95" y="58" textAnchor="middle" fontSize="22" fontWeight="900" fill="#64748B">=</text>

          <g transform="translate(120, 15)">
            <ellipse cx="30" cy="50" rx="24" ry="22" fill="#BAE6FD" stroke="#0284C7" strokeWidth="2" />
            <rect x="20" y="20" width="20" height="12" rx="3" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.5" />
            <path d="M 54 42 Q 68 50 54 62" fill="none" stroke="#0284C7" strokeWidth="3" />
            <path d="M 6 42 Q -6 32 0 26" fill="none" stroke="#0284C7" strokeWidth="3" />
            <text x="30" y="88" textAnchor="middle" fontSize="11" fontWeight="800" fill="#0369A1">1 Teko (6 Cangkir)</text>
          </g>

          <text x="215" y="58" textAnchor="middle" fontSize="22" fontWeight="900" fill="#64748B">→</text>

          <g transform="translate(240, 15)">
            <rect x="0" y="5" width="80" height="75" rx="8" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" strokeDasharray="4 2" />
            <text x="40" y="35" textAnchor="middle" fontSize="20">☕ ?</text>
            <text x="40" y="58" textAnchor="middle" fontSize="11" fontWeight="900" fill="#B45309">1 Botol = ?</text>
            <text x="40" y="72" textAnchor="middle" fontSize="10" fontWeight="700" fill="#92400E">Cangkir</text>
          </g>

          <text x="170" y="130" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">
            Berapa cangkir yang setara dengan 1 botol sirup?
          </text>
        </svg>
      );

    // ========================================================
    // KELAS 4 BAB 5: BANGUN DATAR
    // ========================================================
    case 'polygon-three-equal-sides':
      return (
        <svg width="260" height="175" viewBox="0 0 260 175" style={{ maxWidth: '100%', height: 'auto' }}>
          <polygon points="130,25 45,140 215,140" fill="#EFF6FF" stroke="#2563EB" strokeWidth="3" strokeLinejoin="round" />
          <line x1="82" y1="80" x2="90" y2="85" stroke="#1D4ED8" strokeWidth="2" />
          <line x1="170" y1="85" x2="178" y2="80" stroke="#1D4ED8" strokeWidth="2" />
          <line x1="128" y1="136" x2="128" y2="144" stroke="#1D4ED8" strokeWidth="2" />

          <path d="M 68 140 A 25 25 0 0 0 58 123" fill="none" stroke="#DC2626" strokeWidth="2" />
          <path d="M 192 140 A 25 25 0 0 1 202 123" fill="none" stroke="#DC2626" strokeWidth="2" />
          <path d="M 120 40 A 25 25 0 0 0 140 40" fill="none" stroke="#DC2626" strokeWidth="2" />

          <text x="130" y="18" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1E40AF">
            Segibanyak Beraturan (3 Sisi Sama Panjang)
          </text>
          <text x="130" y="162" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">
            Memiliki 3 sisi sama panjang dan 3 sudut sama besar
          </text>
        </svg>
      );

    case 'square-diagonal-cut':
      return (
        <svg width="260" height="175" viewBox="0 0 260 175" style={{ maxWidth: '100%', height: 'auto' }}>
          <rect x="50" y="25" width="110" height="110" fill="#F0FDF4" stroke="#16A34A" strokeWidth="2.5" />
          <line x1="50" y1="135" x2="160" y2="25" stroke="#DC2626" strokeWidth="2.5" strokeDasharray="5 3" />

          <path d="M 50 40 L 65 40 L 65 25" fill="none" stroke="#16A34A" strokeWidth="2" />
          <path d="M 145 135 L 145 120 L 160 120" fill="none" stroke="#16A34A" strokeWidth="2" />

          <circle cx="105" cy="80" r="9" fill="#DC2626" />
          <text x="105" y="84" textAnchor="middle" fontSize="11" fontWeight="900" fill="#FFFFFF">✂</text>

          <text x="75" y="70" fontSize="11" fontWeight="800" fill="#15803D">Bangun I</text>
          <text x="110" y="110" fontSize="11" fontWeight="800" fill="#15803D">Bangun II</text>

          <text x="130" y="16" textAnchor="middle" fontSize="11" fontWeight="800" fill="#334155">
            Persegi Dipotong Garis Diagonal
          </text>
          <text x="130" y="160" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1E40AF">
            Bangun datar apakah yang dihasilkan dari potongan tersebut?
          </text>
        </svg>
      );

    case 'rectangle-corner-angles':
      return (
        <svg width="270" height="165" viewBox="0 0 270 165" style={{ maxWidth: '100%', height: 'auto' }}>
          <rect x="40" y="30" width="190" height="95" fill="#EFF6FF" stroke="#2563EB" strokeWidth="3" rx="2" />

          {/* Sudut Siku di Keempat Pojok */}
          <path d="M 40 48 L 58 48 L 58 30" fill="none" stroke="#DC2626" strokeWidth="2" />
          <path d="M 212 30 L 212 48 L 230 48" fill="none" stroke="#DC2626" strokeWidth="2" />
          <path d="M 230 107 L 212 107 L 212 125" fill="none" stroke="#DC2626" strokeWidth="2" />
          <path d="M 40 107 L 58 107 L 58 125" fill="none" stroke="#DC2626" strokeWidth="2" />

          <text x="135" y="20" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1E40AF">
            Persegi Panjang
          </text>
          <text x="135" y="150" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">
            Berapa banyak sudut siku-siku pada bangun di atas?
          </text>
        </svg>
      );

    case 'triangles-joined-base':
      return (
        <svg width="260" height="175" viewBox="0 0 260 175" style={{ maxWidth: '100%', height: 'auto' }}>
          <polygon points="130,20 210,85 130,150 50,85" fill="#FAF5FF" stroke="#9333EA" strokeWidth="3" strokeLinejoin="round" />
          <line x1="50" y1="85" x2="210" y2="85" stroke="#7E22CE" strokeWidth="2" strokeDasharray="4 3" />

          <line x1="88" y1="48" x2="94" y2="55" stroke="#9333EA" strokeWidth="2" />
          <line x1="166" y1="55" x2="172" y2="48" stroke="#9333EA" strokeWidth="2" />
          <line x1="88" y1="122" x2="94" y2="115" stroke="#9333EA" strokeWidth="2" />
          <line x1="166" y1="115" x2="172" y2="122" stroke="#9333EA" strokeWidth="2" />

          <text x="130" y="60" textAnchor="middle" fontSize="10" fontWeight="700" fill="#7E22CE">Segitiga Sama Kaki (Atas)</text>
          <text x="130" y="112" textAnchor="middle" fontSize="10" fontWeight="700" fill="#7E22CE">Segitiga Sama Kaki (Bawah)</text>

          <text x="130" y="168" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">
            Bangun datar segiempat apakah yang terbentuk?
          </text>
        </svg>
      );

    // ========================================================
    // KELAS 4 BAB 6: PIKTOGRAM DAN DIAGRAM BATANG
    // ========================================================
    case 'pictogram-stars-melati':
      return (
        <svg width="320" height="150" viewBox="0 0 320 150" style={{ maxWidth: '100%', height: 'auto' }}>
          <rect x="20" y="15" width="280" height="65" rx="8" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="2" />
          <rect x="20" y="15" width="115" height="65" rx="8" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
          <text x="77" y="45" textAnchor="middle" fontSize="12" fontWeight="800" fill="#B45309">Kelompok Melati</text>
          <text x="77" y="62" textAnchor="middle" fontSize="10" fontWeight="600" fill="#78350F">(Piktogram)</text>

          <text x="150" y="55" fontSize="24">⭐</text>
          <text x="185" y="55" fontSize="24">⭐</text>
          <text x="220" y="55" fontSize="24">⭐</text>
          <text x="255" y="55" fontSize="24">⭐</text>

          <rect x="40" y="92" width="240" height="28" rx="6" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1.5" />
          <text x="160" y="110" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1E40AF">
            Keterangan: 1 ⭐ = 5 Poin Prestasi
          </text>
          <text x="160" y="138" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">
            Berapa total poin yang diperoleh kelompok Melati?
          </text>
        </svg>
      );

    case 'bar-chart-types-comparison':
      return (
        <svg width="340" height="150" viewBox="0 0 340 150" style={{ maxWidth: '100%', height: 'auto' }}>
          <g transform="translate(20, 15)">
            <rect x="0" y="0" width="135" height="100" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
            <line x1="20" y1="80" x2="125" y2="80" stroke="#64748B" strokeWidth="1.5" />
            <line x1="20" y1="80" x2="20" y2="15" stroke="#64748B" strokeWidth="1.5" />
            <rect x="35" y="45" width="16" height="35" fill="#3B82F6" rx="2" />
            <rect x="62" y="25" width="16" height="55" fill="#10B981" rx="2" />
            <rect x="89" y="50" width="16" height="30" fill="#F59E0B" rx="2" />
            <text x="68" y="94" textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">Bentuk Tegak</text>
          </g>

          <g transform="translate(180, 15)">
            <rect x="0" y="0" width="135" height="100" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
            <line x1="20" y1="80" x2="125" y2="80" stroke="#64748B" strokeWidth="1.5" />
            <line x1="20" y1="80" x2="20" y2="15" stroke="#64748B" strokeWidth="1.5" />
            <rect x="20" y="22" width="65" height="13" fill="#3B82F6" rx="2" />
            <rect x="20" y="42" width="90" height="13" fill="#10B981" rx="2" />
            <rect x="20" y="62" width="45" height="13" fill="#F59E0B" rx="2" />
            <text x="68" y="94" textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">Bentuk Mendatar</text>
          </g>

          <text x="170" y="136" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">
            Jenis diagram dengan penyajian balok persegi panjang di atas disebut...
          </text>
        </svg>
      );

    case 'bar-chart-extracurricular':
      return (
        <svg width="340" height="170" viewBox="0 0 340 170" style={{ maxWidth: '100%', height: 'auto' }}>
          <text x="170" y="18" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1E3A8A">
            Data Peserta Ekstrakurikuler SD
          </text>
          <line x1="45" y1="130" x2="310" y2="130" stroke="#64748B" strokeWidth="1.5" />
          <line x1="45" y1="130" x2="45" y2="30" stroke="#64748B" strokeWidth="1.5" />

          {[
            { val: 10, y: 100 },
            { val: 20, y: 70 },
            { val: 30, y: 40 }
          ].map(g => (
            <g key={g.val}>
              <line x1="45" y1={g.y} x2="310" y2={g.y} stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3 3" />
              <text x="38" y={g.y + 4} textAnchor="end" fontSize="10" fontWeight="600" fill="#64748B">{g.val}</text>
            </g>
          ))}

          <rect x="70" y="85" width="40" height="45" rx="3" fill="#8B5CF6" />
          <text x="90" y="78" textAnchor="middle" fontSize="11" fontWeight="800" fill="#6D28D9">15</text>
          <text x="90" y="146" textAnchor="middle" fontSize="11" fontWeight="700" fill="#475569">Tari</text>

          <rect x="130" y="55" width="40" height="75" rx="3" fill="#0EA5E9" />
          <text x="150" y="48" textAnchor="middle" fontSize="11" fontWeight="800" fill="#0284C7">25</text>
          <text x="150" y="146" textAnchor="middle" fontSize="11" fontWeight="700" fill="#475569">Renang</text>

          <rect x="190" y="70" width="40" height="60" rx="3" fill="#F59E0B" />
          <text x="210" y="63" textAnchor="middle" fontSize="11" fontWeight="800" fill="#B45309">20</text>
          <text x="210" y="146" textAnchor="middle" fontSize="11" fontWeight="700" fill="#475569">Lukis</text>

          <rect x="250" y="40" width="40" height="90" rx="3" fill="#10B981" />
          <text x="270" y="33" textAnchor="middle" fontSize="11" fontWeight="800" fill="#047857">30</text>
          <text x="270" y="146" textAnchor="middle" fontSize="11" fontWeight="700" fill="#475569">Silat</text>

          <text x="170" y="164" textAnchor="middle" fontSize="11" fontWeight="600" fill="#64748B">
            Berapa jumlah seluruh siswa yang mengikuti ekstrakurikuler?
          </text>
        </svg>
      );

    case 'bar-chart-extracurricular-diff':
      return (
        <svg width="340" height="170" viewBox="0 0 340 170" style={{ maxWidth: '100%', height: 'auto' }}>
          <text x="170" y="18" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1E3A8A">
            Perbandingan Data Ekstrakurikuler
          </text>
          <line x1="45" y1="130" x2="310" y2="130" stroke="#64748B" strokeWidth="1.5" />
          <line x1="45" y1="130" x2="45" y2="30" stroke="#64748B" strokeWidth="1.5" />

          <rect x="70" y="85" width="40" height="45" rx="3" fill="#8B5CF6" />
          <text x="90" y="78" textAnchor="middle" fontSize="11" fontWeight="800" fill="#6D28D9">15</text>
          <text x="90" y="146" textAnchor="middle" fontSize="11" fontWeight="700" fill="#475569">Tari</text>

          <rect x="130" y="55" width="40" height="75" rx="3" fill="#E2E8F0" />
          <text x="150" y="146" textAnchor="middle" fontSize="10" fill="#94A3B8">Renang</text>
          <rect x="190" y="70" width="40" height="60" rx="3" fill="#E2E8F0" />
          <text x="210" y="146" textAnchor="middle" fontSize="10" fill="#94A3B8">Lukis</text>

          <rect x="250" y="40" width="40" height="90" rx="3" fill="#10B981" />
          <text x="270" y="33" textAnchor="middle" fontSize="11" fontWeight="800" fill="#047857">30</text>
          <text x="270" y="146" textAnchor="middle" fontSize="11" fontWeight="700" fill="#475569">Silat</text>

          <line x1="110" y1="85" x2="250" y2="85" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="290" y1="40" x2="315" y2="40" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="290" y1="85" x2="315" y2="85" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="305" y1="40" x2="305" y2="85" stroke="#DC2626" strokeWidth="2" />
          <text x="325" y="66" textAnchor="start" fontSize="12" fontWeight="800" fill="#DC2626">?</text>

          <text x="170" y="164" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">
            Berapakah selisih jumlah peserta Silat dan Tari?
          </text>
        </svg>
      );

    // ========================================================
    // KELAS 4 BAB 2: PECAHAN
    // ========================================================
    case 'fraction-model-1-3':
      return (
        <svg width="280" height="140" viewBox="0 0 280 140" style={{ maxWidth: '100%', height: 'auto' }}>
          <text x="140" y="20" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1E40AF">
            Model Luas Pecahan (1 Bagian dari 3)
          </text>
          <rect x="40" y="35" width="200" height="45" rx="4" fill="#EFF6FF" stroke="#2563EB" strokeWidth="2" />
          <rect x="40" y="35" width="66.6" height="45" fill="#3B82F6" stroke="#2563EB" strokeWidth="2" />
          <line x1="173.3" y1="35" x2="173.3" y2="80" stroke="#2563EB" strokeWidth="1.5" />
          <text x="73" y="62" textAnchor="middle" fontSize="14" fontWeight="800" fill="#FFFFFF">1/3</text>
          <text x="140" y="105" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">
            Pecahan berapakah yang senilai dengan daerah diarsir di atas?
          </text>
        </svg>
      );

    case 'fraction-model-6-8':
      return (
        <svg width="240" height="160" viewBox="0 0 240 160" style={{ maxWidth: '100%', height: 'auto' }}>
          <text x="120" y="18" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1E40AF">
            Pecahan 6/8
          </text>
          <g transform="translate(120, 75)">
            <circle cx="0" cy="0" r="45" fill="#EFF6FF" stroke="#2563EB" strokeWidth="2" />
            <path d="M 0 0 L 0 -45 A 45 45 0 1 1 -45 0 Z" fill="#3B82F6" fillOpacity="0.85" stroke="#1D4ED8" strokeWidth="1" />
            <line x1="-45" y1="0" x2="45" y2="0" stroke="#1D4ED8" strokeWidth="1.5" />
            <line x1="0" y1="-45" x2="0" y2="45" stroke="#1D4ED8" strokeWidth="1.5" />
            <line x1="-31.8" y1="-31.8" x2="31.8" y2="31.8" stroke="#1D4ED8" strokeWidth="1.5" />
            <line x1="-31.8" y1="31.8" x2="31.8" y2="-31.8" stroke="#1D4ED8" strokeWidth="1.5" />
          </g>
          <text x="120" y="145" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">
            Berapakah bentuk paling sederhana dari pecahan di atas?
          </text>
        </svg>
      );

    case 'fraction-add-strip-3-7-plus-2-7':
      return (
        <svg width="300" height="145" viewBox="0 0 300 145" style={{ maxWidth: '100%', height: 'auto' }}>
          <text x="150" y="20" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1E40AF">
            Daerah Arsiran 3/7 dan 2/7
          </text>
          <rect x="25" y="38" width="250" height="38" rx="4" fill="#F8FAFC" stroke="#64748B" strokeWidth="2" />
          {[0, 1, 2].map(i => (
            <rect key={`b-${i}`} x={25 + i * 35.7} y="38" width="35.7" height="38" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1" />
          ))}
          {[3, 4].map(i => (
            <rect key={`y-${i}`} x={25 + i * 35.7} y="38" width="35.7" height="38" fill="#F59E0B" stroke="#B45309" strokeWidth="1" />
          ))}
          {[5, 6].map(i => (
            <line key={`l-${i}`} x1={25 + i * 35.7} y1="38" x2={25 + i * 35.7} y2="76" stroke="#CBD5E1" strokeWidth="1" />
          ))}

          <text x="78" y="96" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1D4ED8">3/7 (Biru)</text>
          <text x="130" y="96" textAnchor="middle" fontSize="11" fontWeight="800" fill="#64748B">+</text>
          <text x="165" y="96" textAnchor="middle" fontSize="11" fontWeight="800" fill="#B45309">2/7 (Oranye)</text>
          <text x="210" y="96" textAnchor="middle" fontSize="11" fontWeight="800" fill="#64748B">=</text>
          <text x="245" y="96" textAnchor="middle" fontSize="13" fontWeight="900" fill="#047857">?</text>

          <text x="150" y="128" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">
            Berapakah total seluruh bagian berwarna di atas?
          </text>
        </svg>
      );

    case 'fraction-compare-3-5-and-2-5':
      return (
        <svg width="280" height="145" viewBox="0 0 280 145" style={{ maxWidth: '100%', height: 'auto' }}>
          <text x="140" y="18" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1E40AF">
            Perbandingan Dua Model Pecahan
          </text>
          {/* Batang 1: 3/5 */}
          <rect x="40" y="30" width="200" height="28" rx="3" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
          {[0, 1, 2].map(i => (
            <rect key={i} x={40 + i * 40} y="30" width="40" height="28" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1" />
          ))}
          <text x="100" y="48" textAnchor="middle" fontSize="12" fontWeight="800" fill="#FFFFFF">3/5</text>

          {/* Batang 2: 2/5 */}
          <rect x="40" y="70" width="200" height="28" rx="3" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
          {[0, 1].map(i => (
            <rect key={i} x={40 + i * 40} y="70" width="40" height="28" fill="#10B981" stroke="#047857" strokeWidth="1" />
          ))}
          <text x="80" y="88" textAnchor="middle" fontSize="12" fontWeight="800" fill="#FFFFFF">2/5</text>

          <text x="140" y="125" textAnchor="middle" fontSize="12" fontWeight="800" fill="#334155">
            Tanda pembanding: 3/5 [ ? ] 2/5
          </text>
        </svg>
      );

    case 'fraction-melon-dedi-lani':
      return (
        <svg width="280" height="155" viewBox="0 0 280 155" style={{ maxWidth: '100%', height: 'auto' }}>
          <text x="140" y="18" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1E40AF">
            Pembagian 1 Buah Melon Utuh (6 Potong)
          </text>
          <g transform="translate(140, 72)">
            <circle cx="0" cy="0" r="42" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2" />
            {/* 2 Potong Dedi (Hijau: 2/6) */}
            <path d="M 0 0 L 0 -42 A 42 42 0 0 1 36.3 21 Z" fill="#4ADE80" stroke="#15803D" strokeWidth="1.5" />
            {/* 3 Potong Lani (Oranye: 3/6) */}
            <path d="M 0 0 L 36.3 21 A 42 42 0 0 1 -36.3 -21 Z" fill="#FB923C" stroke="#C2410C" strokeWidth="1.5" />
            {/* 1 Potong Sisa */}
            <text x="-15" y="-12" fontSize="13" fontWeight="900" fill="#854D0E">?</text>
          </g>

          <text x="35" y="65" fontSize="10" fontWeight="800" fill="#15803D">Dedi: 2/6</text>
          <text x="35" y="82" fontSize="10" fontWeight="800" fill="#C2410C">Lani: 3/6</text>
          <text x="245" y="75" textAnchor="middle" fontSize="11" fontWeight="800" fill="#854D0E">Sisa: ?</text>

          <text x="140" y="140" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">
            Berapa bagian sisa melon yang belum dibagikan?
          </text>
        </svg>
      );

    // ========================================================
    // KELAS 5 SD
    // ========================================================
    case 'square-side-9':
      return (
        <svg width="240" height="165" viewBox="0 0 240 165" style={{ maxWidth: '100%', height: 'auto' }}>
          <rect x="55" y="25" width="110" height="110" fill="#EFF6FF" stroke="#2563EB" strokeWidth="3" rx="2" />
          <text x="110" y="18" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1D4ED8">s = 9 cm</text>
          <text x="110" y="152" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">
            Keliling persegi = ? cm
          </text>
        </svg>
      );

    case 'rectangle-dim-14x6':
    case 'rectangle-dim-15x7':
      return (
        <svg width="270" height="155" viewBox="0 0 270 155" style={{ maxWidth: '100%', height: 'auto' }}>
          <rect x="40" y="30" width="180" height="80" fill="#F0FDF4" stroke="#16A34A" strokeWidth="3" rx="2" />
          <text x="130" y="20" textAnchor="middle" fontSize="12" fontWeight="800" fill="#15803D">
            panjang = {type === 'rectangle-dim-15x7' ? '15 cm' : '14 cm'}
          </text>
          <text x="228" y="75" textAnchor="start" fontSize="12" fontWeight="800" fill="#15803D">
            {type === 'rectangle-dim-15x7' ? '7 cm' : '6 cm'}
          </text>
          <text x="130" y="140" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">
            {type === 'rectangle-dim-15x7' ? 'Luas persegi panjang = ? cm²' : 'Keliling persegi panjang = ? cm'}
          </text>
        </svg>
      );

    case 'equilateral-perimeter-45':
      return (
        <svg width="240" height="160" viewBox="0 0 240 160" style={{ maxWidth: '100%', height: 'auto' }}>
          <polygon points="120,25 45,125 195,125" fill="#FEF3C7" stroke="#D97706" strokeWidth="3" strokeLinejoin="round" />
          <text x="75" y="75" fontSize="11" fontWeight="800" fill="#B45309">s</text>
          <text x="160" y="75" fontSize="11" fontWeight="800" fill="#B45309">s</text>
          <text x="120" y="142" textAnchor="middle" fontSize="11" fontWeight="800" fill="#B45309">s</text>
          <text x="120" y="85" textAnchor="middle" fontSize="11" fontWeight="800" fill="#78350F">Keliling = 45 cm</text>
          <text x="120" y="155" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">
            Panjang masing-masing sisi (s) = ? cm
          </text>
        </svg>
      );

    case 'garden-dim-20x12':
      return (
        <svg width="280" height="160" viewBox="0 0 280 160" style={{ maxWidth: '100%', height: 'auto' }}>
          <rect x="35" y="25" width="195" height="90" fill="#DCFCE7" stroke="#15803D" strokeWidth="3" strokeDasharray="6 3" />
          <text x="132" y="18" textAnchor="middle" fontSize="12" fontWeight="800" fill="#14532D">Panjang = 20 m</text>
          <text x="238" y="75" fontSize="11" fontWeight="800" fill="#14532D">12 m</text>
          <text x="132" y="145" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">
            Berapa meter keliling pagar kebun Pak Budi?
          </text>
        </svg>
      );

    case 'triangle-dim-10x8':
      return (
        <svg width="260" height="165" viewBox="0 0 260 165" style={{ maxWidth: '100%', height: 'auto' }}>
          <polygon points="50,130 210,130 130,35" fill="#EFF6FF" stroke="#2563EB" strokeWidth="3" strokeLinejoin="round" />
          <line x1="130" y1="35" x2="130" y2="130" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 3" />
          <path d="M 130 120 L 140 120 L 140 130" fill="none" stroke="#DC2626" strokeWidth="1.5" />
          <text x="130" y="148" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1D4ED8">alas = 10 cm</text>
          <text x="120" y="85" textAnchor="end" fontSize="12" fontWeight="800" fill="#DC2626">tinggi = 8 cm</text>
          <text x="130" y="162" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">
            Luas segitiga = ? cm²
          </text>
        </svg>
      );

    case 'parallelogram-dim-12x9':
      return (
        <svg width="260" height="160" viewBox="0 0 260 160" style={{ maxWidth: '100%', height: 'auto' }}>
          <polygon points="50,125 190,125 225,45 85,45" fill="#F0FDF4" stroke="#16A34A" strokeWidth="3" strokeLinejoin="round" />
          <line x1="85" y1="45" x2="85" y2="125" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 3" />
          <path d="M 85 115 L 95 115 L 95 125" fill="none" stroke="#DC2626" strokeWidth="1.5" />
          <text x="120" y="145" textAnchor="middle" fontSize="13" fontWeight="800" fill="#15803D">alas = 12 cm</text>
          <text x="70" y="90" textAnchor="end" fontSize="12" fontWeight="800" fill="#DC2626">tinggi = 9 cm</text>
          <text x="120" y="158" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">
            Luas jajar genjang = ? cm²
          </text>
        </svg>
      );

    case 'trapezoid-dim-14-18':
      return (
        <svg width="260" height="160" viewBox="0 0 260 160" style={{ maxWidth: '100%', height: 'auto' }}>
          <polygon points="35,125 225,125 185,45 65,45" fill="#FAF5FF" stroke="#9333EA" strokeWidth="3" strokeLinejoin="round" />
          <line x1="65" y1="45" x2="65" y2="125" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 3" />
          <path d="M 65 115 L 75 115 L 75 125" fill="none" stroke="#DC2626" strokeWidth="1.5" />
          <text x="125" y="35" textAnchor="middle" fontSize="12" fontWeight="700" fill="#7E22CE">a = 14 cm</text>
          <text x="130" y="145" textAnchor="middle" fontSize="12" fontWeight="800" fill="#7E22CE">b = 18 cm</text>
          <text x="52" y="90" textAnchor="end" fontSize="12" fontWeight="800" fill="#DC2626">t = 8 cm</text>
          <text x="130" y="158" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">
            Luas trapesium = ? cm²
          </text>
        </svg>
      );

    case 'angle-types':
      return (
        <svg width="320" height="135" viewBox="0 0 320 135" style={{ maxWidth: '100%', height: 'auto' }}>
          <g transform="translate(15, 15)">
            <path d="M 60 80 L 15 80 L 45 35" fill="none" stroke="#2563EB" strokeWidth="2.5" />
            <path d="M 35 80 A 20 20 0 0 0 30 62" fill="none" stroke="#DC2626" strokeWidth="2" />
            <text x="35" y="100" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1E40AF">Sudut A (&lt; 90°)</text>
          </g>
          <g transform="translate(120, 15)">
            <path d="M 60 80 L 20 80 L 20 35" fill="none" stroke="#16A34A" strokeWidth="2.5" />
            <path d="M 20 65 L 35 65 L 35 80" fill="none" stroke="#DC2626" strokeWidth="2" />
            <text x="35" y="100" textAnchor="middle" fontSize="11" fontWeight="800" fill="#15803D">Sudut B (90°)</text>
          </g>
          <g transform="translate(225, 15)">
            <path d="M 65 80 L 35 80 L 10 45" fill="none" stroke="#D97706" strokeWidth="2.5" />
            <path d="M 45 80 A 20 20 0 0 1 25 62" fill="none" stroke="#DC2626" strokeWidth="2" />
            <text x="40" y="100" textAnchor="middle" fontSize="11" fontWeight="800" fill="#B45309">Sudut C (&gt; 90°)</text>
          </g>
        </svg>
      );

    case 'clock-90':
      return (
        <svg width="190" height="190" viewBox="0 0 190 190" style={{ maxWidth: '100%', height: 'auto' }}>
          <circle cx="95" cy="95" r="80" fill="#FFFFFF" stroke="#1E3A8A" strokeWidth="3.5" />
          <circle cx="95" cy="95" r="4" fill="#1E3A8A" />
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 - 60) * (Math.PI / 180);
            const x = 95 + 66 * Math.cos(angle);
            const y = 95 + 66 * Math.sin(angle);
            return (
              <text key={i} x={x} y={y + 4} textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">
                {i + 1}
              </text>
            );
          })}
          <path d="M 95 95 L 95 45 A 50 50 0 0 1 145 95 Z" fill="#3B82F6" fillOpacity="0.18" />
          <path d="M 95 80 L 110 80 L 110 95" fill="none" stroke="#2563EB" strokeWidth="2" />
          <line x1="95" y1="95" x2="95" y2="35" stroke="#1E3A8A" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="95" y1="95" x2="142" y2="95" stroke="#DC2626" strokeWidth="4" strokeLinecap="round" />
          <text x="122" y="78" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1E40AF">?</text>
        </svg>
      );

    case 'clock-150':
      return (
        <svg width="190" height="190" viewBox="0 0 190 190" style={{ maxWidth: '100%', height: 'auto' }}>
          <circle cx="95" cy="95" r="80" fill="#FFFFFF" stroke="#1E3A8A" strokeWidth="3.5" />
          <circle cx="95" cy="95" r="4" fill="#1E3A8A" />
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 - 60) * (Math.PI / 180);
            const x = 95 + 66 * Math.cos(angle);
            const y = 95 + 66 * Math.sin(angle);
            return (
              <text key={i} x={x} y={y + 4} textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">
                {i + 1}
              </text>
            );
          })}
          <path d="M 95 95 L 95 45 A 50 50 0 0 1 120 138 Z" fill="#F59E0B" fillOpacity="0.2" />
          <line x1="95" y1="95" x2="95" y2="35" stroke="#1E3A8A" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="95" y1="95" x2="128" y2="152" stroke="#DC2626" strokeWidth="4" strokeLinecap="round" />
          <text x="122" y="85" textAnchor="middle" fontSize="12" fontWeight="800" fill="#B45309">?°</text>
        </svg>
      );

    case 'clock-120':
      return (
        <svg width="190" height="190" viewBox="0 0 190 190" style={{ maxWidth: '100%', height: 'auto' }}>
          <circle cx="95" cy="95" r="80" fill="#FFFFFF" stroke="#1E3A8A" strokeWidth="3.5" />
          <circle cx="95" cy="95" r="4" fill="#1E3A8A" />
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 - 60) * (Math.PI / 180);
            const x = 95 + 66 * Math.cos(angle);
            const y = 95 + 66 * Math.sin(angle);
            return (
              <text key={i} x={x} y={y + 4} textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">
                {i + 1}
              </text>
            );
          })}
          <path d="M 95 95 L 95 45 A 50 50 0 0 1 138 120 Z" fill="#3B82F6" fillOpacity="0.2" />
          <line x1="95" y1="95" x2="95" y2="35" stroke="#1E3A8A" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="95" y1="95" x2="142" y2="128" stroke="#DC2626" strokeWidth="4" strokeLinecap="round" />
          <text x="122" y="80" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1E40AF">?°</text>
        </svg>
      );

    case 'square-properties':
      return (
        <svg width="240" height="150" viewBox="0 0 240 150" style={{ maxWidth: '100%', height: 'auto' }}>
          <rect x="65" y="20" width="110" height="110" fill="#F0FDF4" stroke="#16A34A" strokeWidth="3" />
          <path d="M 65 35 L 80 35 L 80 20" fill="none" stroke="#DC2626" strokeWidth="2" />
          <path d="M 160 20 L 160 35 L 175 35" fill="none" stroke="#DC2626" strokeWidth="2" />
          <path d="M 175 115 L 160 115 L 160 130" fill="none" stroke="#DC2626" strokeWidth="2" />
          <path d="M 65 115 L 80 115 L 80 130" fill="none" stroke="#DC2626" strokeWidth="2" />
          <text x="120" y="145" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">
            Ciri-ciri segiempat beraturan
          </text>
        </svg>
      );

    case 'rectangle-symmetry-lines':
      return (
        <svg width="260" height="160" viewBox="0 0 260 160" style={{ maxWidth: '100%', height: 'auto' }}>
          <rect x="40" y="25" width="180" height="100" fill="#EFF6FF" stroke="#2563EB" strokeWidth="2.5" />
          <line x1="130" y1="12" x2="130" y2="138" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 3" />
          <line x1="25" y1="75" x2="235" y2="75" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 3" />
          <text x="130" y="152" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">
            Berapa banyak simetri lipat yang dimiliki persegi panjang?
          </text>
        </svg>
      );

    case 'parallelogram-properties':
      return (
        <svg width="260" height="150" viewBox="0 0 260 150" style={{ maxWidth: '100%', height: 'auto' }}>
          <polygon points="50,120 190,120 225,40 85,40" fill="#F0FDF4" stroke="#16A34A" strokeWidth="3" strokeLinejoin="round" />
          <text x="120" y="142" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">
            Sifat-sifat bangun datar jajar genjang
          </text>
        </svg>
      );

    case 'bar-chart-scout-futsal':
      return (
        <svg width="300" height="155" viewBox="0 0 300 155" style={{ maxWidth: '100%', height: 'auto' }}>
          <line x1="40" y1="120" x2="280" y2="120" stroke="#64748B" strokeWidth="2" />
          <line x1="40" y1="120" x2="40" y2="20" stroke="#64748B" strokeWidth="2" />
          <rect x="65" y="40" width="40" height="80" fill="#3B82F6" rx="2" />
          <text x="85" y="33" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1D4ED8">40</text>
          <text x="85" y="136" textAnchor="middle" fontSize="11" fontWeight="700" fill="#475569">Pramuka</text>

          <rect x="135" y="50" width="40" height="70" fill="#10B981" rx="2" />
          <text x="155" y="43" textAnchor="middle" fontSize="11" fontWeight="800" fill="#047857">35</text>
          <text x="155" y="136" textAnchor="middle" fontSize="11" fontWeight="700" fill="#475569">Futsal</text>

          <rect x="205" y="70" width="40" height="50" fill="#F59E0B" rx="2" />
          <text x="225" y="63" textAnchor="middle" fontSize="11" fontWeight="800" fill="#B45309">25</text>
          <text x="225" y="136" textAnchor="middle" fontSize="11" fontWeight="700" fill="#475569">PMR</text>
        </svg>
      );

    // ========================================================
    // KELAS 6 SD
    // ========================================================
    case 'cube-8cm':
    case 'cube-surface-5cm':
      return (
        <svg width="220" height="175" viewBox="0 0 220 175" style={{ maxWidth: '100%', height: 'auto' }}>
          <polygon points="50,145 120,145 180,105 110,105" fill="#E0E7FF" fillOpacity="0.4" />
          <polygon points="120,145 180,105 180,35 120,75" fill="#C7D2FE" fillOpacity="0.6" stroke="#4338CA" strokeWidth="2.5" />
          <polygon points="50,75 120,75 180,35 110,35" fill="#EEF2FF" stroke="#4338CA" strokeWidth="2.5" />
          <rect x="50" y="75" width="70" height="70" fill="#E0E7FF" fillOpacity="0.8" stroke="#4338CA" strokeWidth="2.5" />
          <text x="85" y="162" textAnchor="middle" fontSize="12" fontWeight="800" fill="#312E81">
            {type === 'cube-surface-5cm' ? 's = 5 cm' : 'rusuk = 8 cm'}
          </text>
          <text x="130" y="22" textAnchor="middle" fontSize="11" fontWeight="700" fill="#4338CA">
            {type === 'cube-surface-5cm' ? 'Luas permukaan = ? cm²' : 'Volume kubus = ? cm³'}
          </text>
        </svg>
      );

    case 'box-12x5x4':
    case 'bathtub-box-80x60x50':
      return (
        <svg width="260" height="165" viewBox="0 0 260 165" style={{ maxWidth: '100%', height: 'auto' }}>
          <polygon points="150,125 220,90 220,40 150,75" fill="#BAE6FD" stroke="#0284C7" strokeWidth="2.5" />
          <polygon points="30,75 150,75 220,40 100,40" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2.5" />
          <rect x="30" y="75" width="120" height="50" fill="#BAE6FD" fillOpacity="0.7" stroke="#0284C7" strokeWidth="2.5" />
          <text x="90" y="142" textAnchor="middle" fontSize="11" fontWeight="800" fill="#0369A1">
            {type === 'bathtub-box-80x60x50' ? 'p = 80 cm' : 'p = 12 cm'}
          </text>
          <text x="195" y="115" fontSize="11" fontWeight="700" fill="#0284C7">
            {type === 'bathtub-box-80x60x50' ? 'l = 60 cm' : 'l = 5 cm'}
          </text>
          <text x="15" y="105" fontSize="11" fontWeight="700" fill="#0284C7">
            {type === 'bathtub-box-80x60x50' ? 't = 50' : 't = 4'}
          </text>
          <text x="130" y="24" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">
            Volume balok = ?
          </text>
        </svg>
      );

    case 'marble-bag-prob':
      return (
        <svg width="260" height="145" viewBox="0 0 260 145" style={{ maxWidth: '100%', height: 'auto' }}>
          <rect x="40" y="20" width="180" height="95" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="2" />
          <text x="130" y="15" textAnchor="middle" fontSize="11" fontWeight="800" fill="#334155">Kotak Percobaan Peluang</text>
          <g transform="translate(55, 38)">
            <circle cx="15" cy="15" r="8" fill="#EF4444" />
            <circle cx="35" cy="15" r="8" fill="#EF4444" />
            <circle cx="15" cy="35" r="8" fill="#EF4444" />
            <circle cx="35" cy="35" r="8" fill="#EF4444" />
            <text x="25" y="58" textAnchor="middle" fontSize="10" fontWeight="700" fill="#DC2626">4 Merah</text>
          </g>
          <g transform="translate(125, 38)">
            <circle cx="15" cy="15" r="8" fill="#3B82F6" />
            <circle cx="35" cy="15" r="8" fill="#3B82F6" />
            <circle cx="55" cy="15" r="8" fill="#3B82F6" />
            <circle cx="15" cy="35" r="8" fill="#3B82F6" />
            <circle cx="35" cy="35" r="8" fill="#3B82F6" />
            <circle cx="55" cy="35" r="8" fill="#3B82F6" />
            <text x="35" y="58" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1D4ED8">6 Biru</text>
          </g>
          <text x="130" y="132" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">
            + 5 bola hijau (Peluang terambil bola biru = ?)
          </text>
        </svg>
      );

    // ========================================================
    // KELAS 7 - 12
    // ========================================================
    case 'similar-photo-frame':
      return (
        <svg width="260" height="170" viewBox="0 0 260 170" style={{ maxWidth: '100%', height: 'auto' }}>
          <rect x="50" y="15" width="160" height="120" rx="4" fill="#FEF3C7" stroke="#B45309" strokeWidth="6" />
          <rect x="65" y="30" width="130" height="90" fill="#EFF6FF" stroke="#2563EB" strokeWidth="2" />
          <circle cx="100" cy="65" r="14" fill="#FCD34D" />
          <polygon points="75,110 110,80 145,110" fill="#34D399" />
          <polygon points="120,110 155,70 190,110" fill="#059669" />
          <text x="130" y="10" textAnchor="middle" fontSize="11" fontWeight="800" fill="#B45309">Bingkai: 30 cm × 40 cm</text>
          <text x="130" y="158" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1E40AF">
            Kesebangunan Bingkai dan Foto
          </text>
        </svg>
      );

    case 'circle-degrees-360':
      return (
        <svg width="200" height="165" viewBox="0 0 200 165" style={{ maxWidth: '100%', height: 'auto' }}>
          <circle cx="100" cy="80" r="60" fill="#EFF6FF" stroke="#2563EB" strokeWidth="3" />
          <circle cx="100" cy="80" r="4" fill="#1D4ED8" />
          <path d="M 100 80 L 160 80" stroke="#2563EB" strokeWidth="2" />
          <path d="M 125 80 A 25 25 0 1 1 125 79" fill="none" stroke="#DC2626" strokeWidth="2.5" />
          <text x="100" y="85" textAnchor="middle" fontSize="13" fontWeight="900" fill="#1E40AF">1 Putaran</text>
          <text x="100" y="155" textAnchor="middle" fontSize="11" fontWeight="700" fill="#64748B">Total sudut pusat = ?°</text>
        </svg>
      );

    case 'pie-chart-hobbies-200':
    case 'pie-chart-science-90deg':
      return (
        <svg width="240" height="175" viewBox="0 0 240 175" style={{ maxWidth: '100%', height: 'auto' }}>
          <circle cx="110" cy="85" r="60" fill="#E2E8F0" stroke="#64748B" strokeWidth="2" />
          <path d="M 110 85 L 170 85 A 60 60 0 0 0 110 25 Z" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1.5" />
          <path d="M 110 85 L 110 25 A 60 60 0 0 0 50 85 Z" fill="#10B981" stroke="#047857" strokeWidth="1.5" />
          <path d="M 110 85 L 50 85 A 60 60 0 0 0 110 145 Z" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
          <text x="140" y="60" fontSize="11" fontWeight="800" fill="#FFFFFF">30%</text>
          <text x="75" y="60" fontSize="11" fontWeight="800" fill="#FFFFFF">25%</text>
          <text x="75" y="120" fontSize="11" fontWeight="800" fill="#FFFFFF">20%</text>
          <text x="110" y="165" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">Diagram Lingkaran Data Siswa</text>
        </svg>
      );

    case 'line-chart-fever':
      return (
        <svg width="260" height="155" viewBox="0 0 260 155" style={{ maxWidth: '100%', height: 'auto' }}>
          <line x1="35" y1="120" x2="245" y2="120" stroke="#64748B" strokeWidth="2" />
          <line x1="35" y1="120" x2="35" y2="20" stroke="#64748B" strokeWidth="2" />
          <polyline points="50,105 95,60 140,75 185,40 230,90" fill="none" stroke="#DC2626" strokeWidth="3" />
          {[
            { x: 50, y: 105 },
            { x: 95, y: 60 },
            { x: 140, y: 75 },
            { x: 185, y: 40 },
            { x: 230, y: 90 }
          ].map((pt, i) => (
            <circle key={i} cx={pt.x} cy={pt.y} r="4" fill="#B91C1C" />
          ))}
          <text x="140" y="142" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">
            Penyajian Data Berkesinambungan
          </text>
        </svg>
      );

    case 'right-triangle-trig-8-6':
    case 'right-triangle-6-8-hypotenuse':
    case 'right-triangle-klm-9-12':
      return (
        <svg width="260" height="175" viewBox="0 0 260 175" style={{ maxWidth: '100%', height: 'auto' }}>
          <polygon points="40,135 220,135 220,35" fill="#EFF6FF" stroke="#2563EB" strokeWidth="3" strokeLinejoin="round" />
          <path d="M 205 135 L 205 120 L 220 120" fill="none" stroke="#1E3A8A" strokeWidth="2" />
          <circle cx="40" cy="135" r="4" fill="#1E3A8A" />
          <circle cx="220" cy="135" r="4" fill="#1E3A8A" />
          <circle cx="220" cy="35" r="4" fill="#1E3A8A" />
          <text x="25" y="145" fontSize="13" fontWeight="800" fill="#1E3A8A">A</text>
          <text x="230" y="145" fontSize="13" fontWeight="800" fill="#1E3A8A">B</text>
          <text x="225" y="30" fontSize="13" fontWeight="800" fill="#1E3A8A">C</text>
          <text x="130" y="155" textAnchor="middle" fontSize="12" fontWeight="700" fill="#475569">alas = 8 cm</text>
          <text x="235" y="90" textAnchor="start" fontSize="12" fontWeight="700" fill="#475569">tinggi = 6 cm</text>
          <text x="110" y="75" textAnchor="middle" fontSize="13" fontWeight="900" fill="#DC2626" transform="rotate(-29 110 75)">
            c = ?
          </text>
        </svg>
      );

    case 'elevation-tower':
      return (
        <svg width="280" height="185" viewBox="0 0 280 185" style={{ maxWidth: '100%', height: 'auto' }}>
          <line x1="20" y1="150" x2="260" y2="150" stroke="#94A3B8" strokeWidth="3" />
          <rect x="210" y="25" width="24" height="125" fill="#475569" rx="2" />
          <polygon points="210,25 234,25 222,5" fill="#DC2626" />
          <circle cx="50" cy="140" r="7" fill="#1E3A8A" />
          <text x="50" y="168" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1E3A8A">Pengamat</text>
          <line x1="50" y1="140" x2="210" y2="25" stroke="#2563EB" strokeWidth="2.5" strokeDasharray="5 3" />
          <line x1="50" y1="140" x2="210" y2="140" stroke="#64748B" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M 85 140 A 35 35 0 0 0 80 119" fill="none" stroke="#DC2626" strokeWidth="2" />
          <text x="95" y="132" fontSize="12" fontWeight="800" fill="#DC2626">60°</text>
          <text x="130" y="168" textAnchor="middle" fontSize="12" fontWeight="700" fill="#334155">jarak = 20 m</text>
          <text x="245" y="85" fontSize="12" fontWeight="800" fill="#DC2626">t = ?</text>
        </svg>
      );

    case 'triangle-cosine':
      return (
        <svg width="260" height="165" viewBox="0 0 260 165" style={{ maxWidth: '100%', height: 'auto' }}>
          <polygon points="50,130 220,130 150,30" fill="#FEF3C7" stroke="#D97706" strokeWidth="3" strokeLinejoin="round" />
          <circle cx="50" cy="130" r="4" fill="#B45309" />
          <circle cx="220" cy="130" r="4" fill="#B45309" />
          <circle cx="150" cy="30" r="4" fill="#B45309" />
          <text x="35" y="140" fontSize="13" fontWeight="800" fill="#92400E">A</text>
          <text x="230" y="140" fontSize="13" fontWeight="800" fill="#92400E">B</text>
          <text x="150" y="20" textAnchor="middle" fontSize="13" fontWeight="800" fill="#92400E">C (60°)</text>
          <text x="85" y="75" fontSize="12" fontWeight="700" fill="#B45309">b = 10 cm</text>
          <text x="195" y="75" fontSize="12" fontWeight="700" fill="#B45309">a = 8 cm</text>
          <text x="135" y="150" textAnchor="middle" fontSize="13" fontWeight="800" fill="#DC2626">sisi c = ?</text>
        </svg>
      );

    case 'cylinder-dim':
      return (
        <svg width="220" height="175" viewBox="0 0 220 175" style={{ maxWidth: '100%', height: 'auto' }}>
          <path d="M 50 40 L 50 130 A 60 20 0 0 0 170 130 L 170 40 Z" fill="#F0FDF4" stroke="#16A34A" strokeWidth="2.5" />
          <ellipse cx="110" cy="130" rx="60" ry="20" fill="none" stroke="#16A34A" strokeWidth="2" strokeDasharray="4 3" />
          <ellipse cx="110" cy="40" rx="60" ry="20" fill="#DCFCE7" stroke="#16A34A" strokeWidth="2.5" />
          <line x1="110" y1="40" x2="170" y2="40" stroke="#2563EB" strokeWidth="2" />
          <circle cx="110" cy="40" r="3" fill="#1E3A8A" />
          <text x="138" y="33" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1D4ED8">r = 7 cm</text>
          <text x="35" y="90" textAnchor="end" fontSize="12" fontWeight="800" fill="#15803D">t = 10 cm</text>
        </svg>
      );

    case 'cone-dim':
      return (
        <svg width="220" height="175" viewBox="0 0 220 175" style={{ maxWidth: '100%', height: 'auto' }}>
          <polygon points="110,20 45,130 175,130" fill="#FEF3C7" stroke="#D97706" strokeWidth="2.5" />
          <ellipse cx="110" cy="130" rx="65" ry="18" fill="#FDE68A" fillOpacity="0.5" stroke="#D97706" strokeWidth="2.5" />
          <line x1="110" y1="20" x2="110" y2="130" stroke="#DC2626" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="110" y1="130" x2="175" y2="130" stroke="#2563EB" strokeWidth="2" />
          <circle cx="110" cy="130" r="3" fill="#1E3A8A" />
          <text x="140" y="148" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1D4ED8">r = 6 cm</text>
          <text x="95" y="80" textAnchor="end" fontSize="11" fontWeight="800" fill="#DC2626">t = 8</text>
          <text x="155" y="70" fontSize="12" fontWeight="800" fill="#B45309">s = ?</text>
        </svg>
      );

    case 'sphere-7cm':
      return (
        <svg width="220" height="170" viewBox="0 0 220 170" style={{ maxWidth: '100%', height: 'auto' }}>
          <circle cx="110" cy="85" r="60" fill="#EFF6FF" stroke="#2563EB" strokeWidth="3" />
          <ellipse cx="110" cy="85" rx="60" ry="18" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="4 3" />
          <line x1="110" y1="85" x2="170" y2="85" stroke="#DC2626" strokeWidth="2" />
          <circle cx="110" cy="85" r="4" fill="#1D4ED8" />
          <text x="140" y="78" textAnchor="middle" fontSize="12" fontWeight="800" fill="#DC2626">r = 7 cm</text>
          <text x="110" y="160" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1E40AF">
            Bola (Luas permukaan = ?)
          </text>
        </svg>
      );

    case 'vector-cartesian-5-12':
      return (
        <svg width="240" height="165" viewBox="0 0 240 165" style={{ maxWidth: '100%', height: 'auto' }}>
          <line x1="30" y1="135" x2="220" y2="135" stroke="#64748B" strokeWidth="2" />
          <line x1="50" y1="150" x2="50" y2="15" stroke="#64748B" strokeWidth="2" />
          <line x1="50" y1="135" x2="160" y2="35" stroke="#2563EB" strokeWidth="3" />
          <polygon points="160,35 150,41 155,49" fill="#2563EB" />
          <text x="105" y="75" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1D4ED8">v = 5i - 12j</text>
          <text x="130" y="155" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">
            Panjang vektor |v| = ?
          </text>
        </svg>
      );

    case 'circle-inscribed-central':
      return (
        <svg width="220" height="175" viewBox="0 0 220 175" style={{ maxWidth: '100%', height: 'auto' }}>
          <circle cx="110" cy="90" r="65" fill="#F8FAFC" stroke="#1E3A8A" strokeWidth="3" />
          <circle cx="110" cy="90" r="4" fill="#1E3A8A" />
          <circle cx="50" cy="115" r="4" fill="#DC2626" />
          <circle cx="170" cy="115" r="4" fill="#DC2626" />
          <circle cx="110" cy="25" r="4" fill="#059669" />
          <line x1="110" y1="90" x2="50" y2="115" stroke="#1E3A8A" strokeWidth="2" />
          <line x1="110" y1="90" x2="170" y2="115" stroke="#1E3A8A" strokeWidth="2" />
          <line x1="110" y1="25" x2="50" y2="115" stroke="#059669" strokeWidth="2" />
          <line x1="110" y1="25" x2="170" y2="115" stroke="#059669" strokeWidth="2" />
          <text x="110" y="108" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1E3A8A">84°</text>
          <text x="35" y="123" fontSize="12" fontWeight="800" fill="#DC2626">A</text>
          <text x="180" y="123" fontSize="12" fontWeight="800" fill="#DC2626">B</text>
          <text x="110" y="18" textAnchor="middle" fontSize="12" fontWeight="800" fill="#059669">C (?°)</text>
          <text x="110" y="168" textAnchor="middle" fontSize="11" fontWeight="700" fill="#475569">
            Sudut Pusat ∠AOB = 84° ➔ ∠ACB = ?
          </text>
        </svg>
      );

    case 'circle-diameter-angle':
      return (
        <svg width="220" height="175" viewBox="0 0 220 175" style={{ maxWidth: '100%', height: 'auto' }}>
          <circle cx="110" cy="90" r="65" fill="#F8FAFC" stroke="#1E3A8A" strokeWidth="3" />
          <line x1="45" y1="90" x2="175" y2="90" stroke="#1E3A8A" strokeWidth="2.5" />
          <circle cx="110" cy="90" r="4" fill="#1E3A8A" />
          <circle cx="45" cy="90" r="4" fill="#DC2626" />
          <circle cx="175" cy="90" r="4" fill="#DC2626" />
          <circle cx="110" cy="25" r="4" fill="#059669" />
          <line x1="45" y1="90" x2="110" y2="25" stroke="#059669" strokeWidth="2" />
          <line x1="175" y1="90" x2="110" y2="25" stroke="#059669" strokeWidth="2" />
          <text x="30" y="94" fontSize="12" fontWeight="800" fill="#DC2626">A</text>
          <text x="185" y="94" fontSize="12" fontWeight="800" fill="#DC2626">B</text>
          <text x="110" y="18" textAnchor="middle" fontSize="12" fontWeight="800" fill="#059669">C (?°)</text>
          <text x="110" y="168" textAnchor="middle" fontSize="11" fontWeight="700" fill="#475569">
            Ruas AB merupakan diameter lingkaran
          </text>
        </svg>
      );

    case 'cyclic-quadrilateral':
      return (
        <svg width="220" height="175" viewBox="0 0 220 175" style={{ maxWidth: '100%', height: 'auto' }}>
          <circle cx="110" cy="85" r="60" fill="#FAF5FF" stroke="#7E22CE" strokeWidth="2.5" />
          <polygon points="70,40 155,35 160,130 60,125" fill="#F3E8FF" stroke="#9333EA" strokeWidth="2" />
          <text x="60" y="35" fontSize="12" fontWeight="800" fill="#6B21A8">K (78°)</text>
          <text x="165" y="33" fontSize="12" fontWeight="800" fill="#6B21A8">L</text>
          <text x="170" y="140" fontSize="12" fontWeight="800" fill="#DC2626">M (?°)</text>
          <text x="50" y="135" fontSize="12" fontWeight="800" fill="#6B21A8">N</text>
          <text x="110" y="165" textAnchor="middle" fontSize="11" fontWeight="800" fill="#7E22CE">
            Segiempat Tali Busur KLMN
          </text>
        </svg>
      );

    case 'circle-common-tangent':
      return (
        <svg width="260" height="165" viewBox="0 0 260 165" style={{ maxWidth: '100%', height: 'auto' }}>
          <circle cx="70" cy="85" r="42" fill="#EFF6FF" stroke="#2563EB" strokeWidth="2" />
          <circle cx="190" cy="85" r="23" fill="#EFF6FF" stroke="#2563EB" strokeWidth="2" />
          <line x1="70" y1="43" x2="190" y2="62" stroke="#DC2626" strokeWidth="2.5" />
          <line x1="70" y1="85" x2="190" y2="85" stroke="#64748B" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="70" y="90" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1D4ED8">R = 9</text>
          <text x="190" y="90" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1D4ED8">r = 4</text>
          <text x="130" y="42" textAnchor="middle" fontSize="12" fontWeight="900" fill="#DC2626">d = ?</text>
          <text x="130" y="150" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">
            Garis singgung persekutuan luar
          </text>
        </svg>
      );

    case 'parabola-vertex':
      return (
        <svg width="240" height="165" viewBox="0 0 240 165" style={{ maxWidth: '100%', height: 'auto' }}>
          <line x1="20" y1="125" x2="220" y2="125" stroke="#64748B" strokeWidth="2" />
          <line x1="60" y1="145" x2="60" y2="15" stroke="#64748B" strokeWidth="2" />
          <text x="225" y="129" fontSize="11" fontWeight="700" fill="#64748B">x</text>
          <text x="58" y="12" fontSize="11" fontWeight="700" fill="#64748B">y</text>
          <path d="M 40 125 Q 120 10 200 125" fill="none" stroke="#2563EB" strokeWidth="3" />
          <circle cx="120" cy="38" r="5" fill="#DC2626" />
          <line x1="120" y1="38" x2="120" y2="125" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="120" y="24" textAnchor="middle" fontSize="11" fontWeight="800" fill="#DC2626">Titik Puncak (xp, yp)?</text>
          <text x="120" y="142" textAnchor="middle" fontSize="10" fontWeight="700" fill="#64748B">Sumbu Simetri</text>
        </svg>
      );

    case 'parabola-axis':
      return (
        <svg width="240" height="165" viewBox="0 0 240 165" style={{ maxWidth: '100%', height: 'auto' }}>
          <line x1="20" y1="125" x2="220" y2="125" stroke="#64748B" strokeWidth="2" />
          <line x1="60" y1="145" x2="60" y2="15" stroke="#64748B" strokeWidth="2" />
          <path d="M 40 35 Q 120 145 200 35" fill="none" stroke="#059669" strokeWidth="3" />
          <line x1="120" y1="15" x2="120" y2="135" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 3" />
          <text x="120" y="12" textAnchor="middle" fontSize="11" fontWeight="800" fill="#DC2626">x = ?</text>
          <text x="120" y="155" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">Sumbu Simetri Parabola</text>
        </svg>
      );

    default:
      return null;
  }
}
