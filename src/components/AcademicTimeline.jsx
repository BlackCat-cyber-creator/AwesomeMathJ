import React from 'react';
import { Calendar, BookOpen, Clock, CheckCircle2 } from 'lucide-react';
import { getCurrentSemester, getChapterTimeline, getCurrentMaterialInfo } from '../data/academicCalendar';

/**
 * SemesterBadge — Compact inline badge showing current semester and progress.
 * Used in navbar, chapter headers, and teacher dashboard.
 */
export function SemesterBadge({ date = new Date() }) {
  const sem = getCurrentSemester(date);

  return (
    <div
      className="semester-badge"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.4rem',
        padding: '0.3rem 0.65rem',
        borderRadius: 'var(--radius-full)',
        fontSize: '0.7rem',
        fontWeight: 700,
        backgroundColor: sem.isBreak ? 'var(--accent-amber-light)' : 'var(--primary-light)',
        color: sem.isBreak ? 'var(--accent-amber)' : 'var(--primary-blue)',
        border: `1px solid ${sem.isBreak ? 'var(--accent-amber-border)' : 'var(--border-subtle)'}`,
        whiteSpace: 'nowrap',
      }}
    >
      <Calendar size={12} />
      <span>{sem.shortLabel}</span>
      {!sem.isBreak && (
        <span style={{ opacity: 0.7 }}>• {sem.progress}%</span>
      )}
    </div>
  );
}

/**
 * MateriSekarangCard — Shows what chapter a student should be studying right now.
 * Used in teacher dashboard student cards and generator.
 */
export function MateriSekarangCard({ grade, chapters, date = new Date(), compact = false, onAssign = null }) {
  const info = getCurrentMaterialInfo(grade, chapters, date);
  if (!info) return null;

  if (compact) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.5rem',
          fontSize: '0.78rem',
          backgroundColor: info.isCurrent ? '#F0FDF4' : '#F8FAFC',
          border: `1px solid ${info.isCurrent ? '#BBF7D0' : 'var(--border-subtle)'}`,
          padding: '0.55rem 0.75rem',
          borderRadius: 'var(--radius-sm)',
          margin: '0.65rem 0',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', minWidth: 0 }}>
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: '50%',
              backgroundColor: info.isCurrent ? '#059669' : 'var(--text-muted)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <BookOpen size={12} />
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: '0.68rem', fontWeight: 700, color: info.isCurrent ? '#065F46' : 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              {info.isCurrent ? '🎯 Materi Sekarang' : '📌 Jadwal Kurikulum'}
            </div>
            <div style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--primary-navy)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '210px' }}>
              {info.title.startsWith('Bab') ? info.title : `Bab ${info.babNumber}: ${info.title}`}
            </div>
          </div>
        </div>

        {onAssign && (
          <button
            type="button"
            className="btn btn-outline"
            style={{
              padding: '0.25rem 0.55rem',
              fontSize: '0.72rem',
              borderColor: info.isCurrent ? '#059669' : 'var(--border-subtle)',
              color: info.isCurrent ? '#059669' : 'var(--text-secondary)',
              backgroundColor: '#FFFFFF',
              whiteSpace: 'nowrap',
              fontWeight: 600,
            }}
            onClick={(e) => {
              e.stopPropagation();
              onAssign(info);
            }}
            title="Tugaskan bab ini di Generator PR"
          >
            Tugaskan Bab Ini →
          </button>
        )}
      </div>
    );
  }

  return (
    <div
      className="materi-sekarang-card"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '0.75rem',
        padding: '0.85rem 1rem',
        borderRadius: 'var(--radius-md)',
        backgroundColor: info.isCurrent ? '#ECFDF5' : '#F8FAFC',
        border: `1px solid ${info.isCurrent ? '#A7F3D0' : 'var(--border-subtle)'}`,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', minWidth: 0, flex: 1 }}>
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: '50%',
            backgroundColor: info.isCurrent ? '#059669' : 'var(--text-muted)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <BookOpen size={16} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: info.isCurrent ? '#065F46' : 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.15rem' }}>
            {info.isCurrent ? '🎯 Rekomendasi Materi Bulan Ini' : '📌 Jadwal Kurikulum'}
          </div>
          <div style={{ fontSize: '0.925rem', fontWeight: 700, color: 'var(--primary-navy)', lineHeight: 1.3 }}>
            {info.title.startsWith('Bab') ? info.title : `Bab ${info.babNumber}: ${info.title}`}
          </div>
          <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
            Semester {info.semester} • Periode: {info.timeLabel}
          </div>
        </div>
      </div>

      {onAssign && (
        <button
          type="button"
          className="btn btn-royal"
          style={{
            padding: '0.4rem 0.85rem',
            fontSize: '0.8rem',
            whiteSpace: 'nowrap',
          }}
          onClick={(e) => {
            e.stopPropagation();
            onAssign(info);
          }}
        >
          Tugaskan Bab Ini
        </button>
      )}
    </div>
  );
}

/**
 * ChapterTimeline — Visual horizontal timeline showing chapter pacing for a grade.
 * Highlights the current chapter. Used in teacher dashboard and handbook.
 */
export function ChapterTimeline({ grade, chapters, date = new Date(), onChapterClick }) {
  const timeline = getChapterTimeline(grade, date);
  if (timeline.length === 0) return null;

  return (
    <div style={{ marginBottom: '1rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Clock size={14} color="var(--text-muted)" />
          <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Peta Jadwal Materi
          </span>
        </div>
        <SemesterBadge date={date} />
      </div>

      {/* Timeline Track */}
      <div style={{ position: 'relative', display: 'flex', gap: '0.35rem', overflowX: 'auto', paddingBottom: '0.5rem', WebkitOverflowScrolling: 'touch' }}>
        {timeline.map((entry, idx) => {
          const chapter = chapters?.[entry.chapterIndex];
          const babNum = entry.chapterIndex + 1;

          // Determine visual state
          let bgColor, borderColor, textColor, dotColor;
          if (entry.isCurrent) {
            bgColor = '#ECFDF5';
            borderColor = '#059669';
            textColor = '#065F46';
            dotColor = '#059669';
          } else if (entry.isPast) {
            bgColor = '#F8FAFC';
            borderColor = 'var(--border-medium)';
            textColor = 'var(--text-muted)';
            dotColor = 'var(--border-medium)';
          } else {
            bgColor = '#FFFFFF';
            borderColor = 'var(--border-subtle)';
            textColor = 'var(--text-secondary)';
            dotColor = 'var(--border-subtle)';
          }

          return (
            <button
              key={idx}
              type="button"
              onClick={() => onChapterClick?.(chapter?.id, entry.chapterIndex)}
              style={{
                flex: '0 0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.25rem',
                padding: '0.5rem 0.65rem',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: bgColor,
                border: `${entry.isCurrent ? '2px' : '1px'} solid ${borderColor}`,
                cursor: 'pointer',
                minWidth: 70,
                transition: 'all 0.15s ease',
                fontFamily: 'var(--font-body)',
              }}
              title={chapter?.title || `Bab ${babNum}`}
            >
              {/* Dot indicator */}
              <div style={{
                width: entry.isCurrent ? 10 : 7,
                height: entry.isCurrent ? 10 : 7,
                borderRadius: '50%',
                backgroundColor: dotColor,
                transition: 'all 0.15s ease',
              }} />

              {/* Bab number */}
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: textColor }}>
                Bab {babNum}
              </span>

              {/* Time label */}
              <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                {entry.label}
              </span>

              {/* Current marker */}
              {entry.isCurrent && (
                <span style={{ fontSize: '0.58rem', fontWeight: 800, color: '#059669', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Sekarang
                </span>
              )}

              {/* Past marker */}
              {entry.isPast && (
                <CheckCircle2 size={12} color="var(--border-medium)" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ChapterTimeline;

