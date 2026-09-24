import React from 'react';
import { 
  Wand2, 
  Clock, 
  Send, 
  Copy, 
  Check, 
  ExternalLink, 
  Printer, 
  ClipboardList 
} from 'lucide-react';
import { CURRICULUM_DATA } from '../../data/curriculumData';
import { formatIndonesianDate } from '../../utils/storage';
import { MathText } from '../MathRenderer';
import { PR_PACKETS } from './teacherConstants';

export function QuestGeneratorTab({
  students,
  targetStudentId,
  onStudentChange,
  generatorGrade,
  setGeneratorGrade,
  generatorChapterId,
  setGeneratorChapterId,
  genGradeData,
  recChapterForGen,
  selectedPacket,
  setSelectedPacket,
  assignedPacketsForTarget,
  recommendedPacketForTarget,
  deadline,
  setDeadline,
  onCreateQuest,
  createdQuestInfo,
  copiedNotification,
  onCopyWhatsApp,
  onOpenWhatsAppWeb,
  onLaunchQuest,
  onPrintQuest
}) {
  return (
    <div className="teacher-generator-grid">
      {/* LEFT: GENERATOR CONTROLS */}
      <div className="editorial-card" style={{ padding: '1.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', color: 'var(--primary-navy)' }}>
          <Wand2 size={20} />
          <h3 style={{ fontSize: '1.2rem' }}>Susun PR Otomatis (5 Soal)</h3>
        </div>

        {/* Target Student Select */}
        <div className="form-group">
          <label className="form-label" htmlFor="select-generator-student">
            1. Pilih Murid Privat:
          </label>
          <select 
            id="select-generator-student"
            className="form-select"
            value={targetStudentId}
            onChange={onStudentChange}
          >
            {students.map((std) => (
              <option key={std.id} value={std.id}>
                {std.name} — Kelas {std.grade} {std.level} ({std.parentPhone || "No WA"})
              </option>
            ))}
            {students.length === 0 && (
              <option value="">(Belum ada murid bimbingan terdaftar)</option>
            )}
          </select>
        </div>

        {/* Curriculum Grade Select */}
        <div className="form-group">
          <label className="form-label" htmlFor="select-generator-grade">
            2. Tingkat Kelas:
          </label>
          <select 
            id="select-generator-grade"
            className="form-select"
            value={generatorGrade}
            onChange={(e) => {
              const gr = Number(e.target.value);
              setGeneratorGrade(gr);
              const targetGrade = CURRICULUM_DATA.find((g) => g.grade === gr);
              if (targetGrade && targetGrade.chapters.length > 0) {
                setGeneratorChapterId(targetGrade.chapters[0].id);
              }
            }}
          >
            {CURRICULUM_DATA.map((g) => (
              <option key={g.grade} value={g.grade}>
                Kelas {g.grade} {g.level} ({g.phase})
              </option>
            ))}
          </select>
        </div>

        {/* Chapter Select */}
        <div className="form-group">
          <label className="form-label" htmlFor="select-generator-chapter">
            3. Bab Kurikulum:
          </label>
          <select 
            id="select-generator-chapter"
            className="form-select"
            value={generatorChapterId}
            onChange={(e) => setGeneratorChapterId(e.target.value)}
          >
            {genGradeData.chapters.map((ch) => {
              const trackText = ch.trackLabel ? ` [${ch.trackLabel}]` : "";
              return (
                <option key={ch.id} value={ch.id}>
                  {ch.title}{trackText} ({ch.questions?.length || 0} soal)
                </option>
              );
            })}
          </select>

          {/* Smart Academic Calendar Recommendation Badge */}
          {recChapterForGen && (
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                padding: '0.55rem 0.85rem', 
                borderRadius: 'var(--radius-sm)', 
                backgroundColor: '#F0FDF4', 
                border: '1px solid #BBF7D0', 
                marginTop: '0.5rem', 
                fontSize: '0.8rem',
                gap: '0.5rem',
                flexWrap: 'wrap'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#166534', minWidth: 0 }}>
                <Clock size={14} style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.78rem' }}>
                  <strong>Rekomendasi Kalender ({recChapterForGen.timeLabel}):</strong> {recChapterForGen.title.startsWith('Bab') ? recChapterForGen.title : `Bab ${recChapterForGen.babNumber}: ${recChapterForGen.title}`}
                </span>
              </div>
              {generatorChapterId !== recChapterForGen.id ? (
                <button
                  type="button"
                  className="btn btn-outline"
                  style={{ padding: '0.2rem 0.6rem', fontSize: '0.72rem', borderColor: '#16a34a', color: '#16a34a', backgroundColor: '#FFFFFF', fontWeight: 600 }}
                  onClick={() => setGeneratorChapterId(recChapterForGen.id)}
                >
                  Gunakan Bab Ini
                </button>
              ) : (
                <span style={{ fontSize: '0.72rem', color: '#166534', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                  ✓ Bab Ini Terpilih
                </span>
              )}
            </div>
          )}
        </div>

        {/* 4. Segment / Paket Selection (5 questions per packet) */}
        <div className="form-group" style={{ marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem', flexWrap: 'wrap', gap: '0.25rem' }}>
            <label className="form-label" style={{ marginBottom: 0 }}>
              4. Pilih Paket PR (5 Soal per Segmen):
            </label>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Total 20 Soal Kurikulum Resmi
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.5rem' }}>
            {PR_PACKETS.map((pkt) => {
              const isSelected = selectedPacket === pkt.index;
              const isAlreadyAssigned = assignedPacketsForTarget.includes(pkt.index);
              const isRecommended = recommendedPacketForTarget === pkt.index;

              return (
                <button
                  key={pkt.index}
                  type="button"
                  id={`btn-select-packet-${pkt.index}`}
                  onClick={() => setSelectedPacket(pkt.index)}
                  style={{
                    textAlign: 'left',
                    padding: '0.65rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    border: isSelected ? '2px solid var(--primary-blue)' : '1px solid var(--border-subtle)',
                    backgroundColor: isSelected ? 'var(--primary-light)' : '#FFFFFF',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    position: 'relative'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.2rem' }}>
                    <strong style={{ fontSize: '0.85rem', color: isSelected ? 'var(--primary-navy)' : 'var(--text-primary)' }}>
                      {pkt.title}
                    </strong>
                    {isAlreadyAssigned && (
                      <span title="Sudah pernah ditugaskan" style={{ fontSize: '0.75rem', color: 'var(--status-emerald)', fontWeight: 700 }}>
                        ✓ Diberikan
                      </span>
                    )}
                    {isRecommended && !isAlreadyAssigned && (
                      <span title="Rekomendasi Paket Berikutnya" style={{ fontSize: '0.72rem', color: '#B45309', fontWeight: 600 }}>
                        ⭐ Rekomendasi
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)' }}>
                    {pkt.range}
                  </div>
                  <div style={{ fontSize: '0.68rem', color: isSelected ? 'var(--primary-blue)' : 'var(--text-muted)', marginTop: '0.2rem' }}>
                    {pkt.desc}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 5. Deadline Date */}
        <div className="form-group" style={{ marginBottom: '1.25rem' }}>
          <label className="form-label" htmlFor="input-generator-deadline">
            5. Tenggat (Deadline):
          </label>
          <input 
            id="input-generator-deadline"
            type="date"
            className="form-input"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
            📅 Tenggat terpasang: <strong>{formatIndonesianDate(deadline)}</strong>
          </div>
        </div>

        {/* Action to create quest */}
        <button 
          id="btn-generate-quest-confirm"
          className="btn btn-royal" 
          style={{ width: '100%', justifyContent: 'center', padding: '0.75rem' }}
          onClick={onCreateQuest}
          disabled={students.length === 0}
        >
          <Wand2 size={18} />
          Generate Paket PR Sekarang
        </button>
      </div>

      {/* RIGHT: GENERATED QUEST & WHATSAPP DISTRIBUTION CARD */}
      <div>
        {createdQuestInfo ? (
          <div className="editorial-card" style={{ padding: '1.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span className="badge badge-cat-uh" style={{ fontSize: '0.78rem' }}>
                ✓ Paket PR Berhasil Dibuat
              </span>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                ID: {createdQuestInfo.id}
              </span>
            </div>

            <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)', marginBottom: '0.25rem' }}>
              {createdQuestInfo.title}
            </h3>

            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              Ditugaskan untuk: <strong>{createdQuestInfo.studentName}</strong> • Tenggat: {formatIndonesianDate(createdQuestInfo.deadline)}
            </div>

            {/* WhatsApp Ready Share Preview Box */}
            <div style={{ backgroundColor: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#166534', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span>💬</span>
                Format Pesan WhatsApp Resmi:
              </div>
              <pre style={{ 
                fontFamily: 'inherit', 
                fontSize: '0.825rem', 
                lineHeight: 1.6, 
                color: '#14532D', 
                whiteSpace: 'pre-wrap', 
                backgroundColor: '#FFFFFF', 
                padding: '1rem', 
                borderRadius: 'var(--radius-sm)', 
                border: '1px solid #DCFCE7',
                maxHeight: 180,
                overflowY: 'auto'
              }}>
                {createdQuestInfo.shareText}
              </pre>
            </div>

            {/* Distribution Buttons */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
              <button 
                id="btn-send-whatsapp-web"
                className="btn btn-emerald"
                style={{ justifyContent: 'center' }}
                onClick={() => onOpenWhatsAppWeb(createdQuestInfo)}
              >
                <Send size={16} />
                Kirim via WhatsApp Web
              </button>

              <button 
                id="btn-copy-whatsapp-text"
                className="btn btn-subtle"
                style={{ justifyContent: 'center' }}
                onClick={() => onCopyWhatsApp(createdQuestInfo)}
              >
                {copiedNotification ? (
                  <>
                    <Check size={16} color="var(--status-emerald)" />
                    Tersalin ke Clipboard!
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    Salin Pesan WA & Link
                  </>
                )}
              </button>

              <button 
                id="btn-preview-quest-direct"
                className="btn btn-outline"
                style={{ justifyContent: 'center' }}
                onClick={() => onLaunchQuest(createdQuestInfo.id)}
              >
                <ExternalLink size={16} />
                Uji Pengerjaan Siswa
              </button>

              <button 
                id="btn-print-quest-worksheet"
                className="btn btn-outline"
                style={{ justifyContent: 'center' }}
                onClick={() => onPrintQuest(createdQuestInfo)}
              >
                <Printer size={16} />
                Cetak Lembar Kerja A4
              </button>
            </div>

            {/* Selected Questions Preview */}
            <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--primary-navy)', marginBottom: '0.75rem' }}>
                Daftar {createdQuestInfo.questions.length} Butir Soal Terpilih:
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {createdQuestInfo.questions.map((q, idx) => (
                  <div key={q.id} style={{ padding: '0.85rem', backgroundColor: '#F9FAFB', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', fontSize: '0.88rem' }}>
                    <div style={{ fontWeight: 600, marginBottom: '0.35rem', color: 'var(--primary-navy)' }}>
                      Soal Latihan #{idx + 1}
                    </div>
                    <MathText text={q.question} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="editorial-card" style={{ padding: '3.5rem 2rem', textAlign: 'center' }}>
            <ClipboardList size={36} color="var(--primary-blue)" style={{ margin: '0 auto 1rem', display: 'block', opacity: 0.8 }} />
            <h3 style={{ fontSize: '1.2rem', color: 'var(--primary-navy)', marginBottom: '0.4rem' }}>
              Belum Ada Paket PR yang Dibuat
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: 460, margin: '0 auto' }}>
              Pilih murid dan bab kurikulum di formulir sebelah kiri, lalu tekan <strong>"Generate Paket PR Sekarang"</strong> untuk membuat link penugasan WhatsApp otomatis.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestGeneratorTab;
