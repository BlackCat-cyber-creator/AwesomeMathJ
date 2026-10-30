import React from 'react';
import { ExternalLink, CheckCircle } from 'lucide-react';
import { formatIndonesianDate } from '../../utils/storage';
import { groupReportsByQuestion, reportCategoryLabel } from '../../utils/reports';

const CONTEXT_LABEL = { handbook: 'Buku saku', amc: 'Olimpiade AMC', quest: 'PR murid' };

/**
 * Antrean laporan "soal salah" dari pengunjung dan murid, dikelompokkan per soal.
 * "Selesai" menghapus semua laporan untuk soal itu.
 */
export function ReportList({ reports, onResolve }) {
  const groups = groupReportsByQuestion(reports);

  return (
    <section className="editorial-card studio-card">
      <h3 className="studio-card-title">Laporan soal salah ({groups.length} soal)</h3>
      <p className="studio-muted">
        Dikirim lewat tombol &ldquo;Laporkan soal&rdquo; di buku saku dan PR. Perbaiki soalnya di data,
        lalu klik <strong>Selesai</strong>.
      </p>

      {groups.length === 0 ? (
        <p className="studio-muted">Belum ada laporan. 🎉</p>
      ) : (
        <ul className="studio-report-list">
          {groups.map((g) => (
            <li key={g.questionId} className="studio-report-item">
              <div className="studio-report-head">
                <div>
                  <strong>{g.questionId}</strong>
                  <span className="studio-muted"> · {g.reports.length} laporan</span>
                </div>
                <div className="studio-actions studio-actions-compact">
                  {g.path && (
                    <a className="btn btn-subtle" href={g.path} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} /> Buka soal
                    </a>
                  )}
                  <button className="btn btn-subtle" onClick={() => onResolve(g.reports.map((r) => r.id))}>
                    <CheckCircle size={14} /> Selesai
                  </button>
                </div>
              </div>
              <ul className="studio-report-entries">
                {g.reports.map((r) => (
                  <li key={r.id}>
                    <span className="studio-pill-soft">{reportCategoryLabel(r.category)}</span>
                    {r.note && <span className="studio-report-note">&ldquo;{r.note}&rdquo;</span>}
                    <span className="studio-muted">
                      {CONTEXT_LABEL[r.context] || 'Buku saku'} · {formatIndonesianDate(r.createdAt)}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default ReportList;
