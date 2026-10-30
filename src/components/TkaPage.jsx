import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { TKA_TESTS, TKA_PACKETS, parseTkaSlug, tkaPath } from '../data/tka';
import { buildTkaPacket, chaptersMap } from '../utils/tkaBuilder';
import { getGradeData } from '../data/curriculumData';
import { questionAnchor } from '../utils/reports';
import { tkaHomeMeta, tkaPacketMeta } from '../utils/seoMeta';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { ChapterQuiz } from './handbook/ChapterQuiz';

function ElementTable({ test }) {
  return (
    <table className="tka-table">
      <thead>
        <tr><th>Elemen</th><th>Cakupan</th><th>Soal</th></tr>
      </thead>
      <tbody>
        {test.elements.map((el) => (
          <tr key={el.name}>
            <td><strong>{el.name}</strong></td>
            <td>{el.scope}</td>
            <td>{el.quota}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function TkaHome() {
  useDocumentMeta(tkaHomeMeta());
  return (
    <div className="handbook-container seo-page tka-page">
      <h1>Latihan TKA Matematika SD dan SMP</h1>
      <p>
        Tes Kemampuan Akademik (TKA) mengukur pemahaman dan penerapan matematika murid Kelas 6 SD/MI dan Kelas 9 SMP/MTs.
        Setiap paket berisi 30 soal pilihan ganda tingkat sedang sampai tantangan yang dikelompokkan menurut elemen TKA,
        lengkap dengan kunci dan pembahasan.
      </p>
      {TKA_TESTS.map((test) => (
        <section key={test.id} className="tka-test">
          <h2>{test.title}</h2>
          <p className="topic-meta">{test.audience}</p>
          <p>{test.intro}</p>
          <ElementTable test={test} />
          <p className="tka-packets">
            {TKA_PACKETS.map((p) => (
              <Link key={p} className="btn btn-royal" to={tkaPath(test.id, p)}>Paket {p.toUpperCase()}</Link>
            ))}
          </p>
        </section>
      ))}
      <p className="tka-note">
        Muatan dan cakupan elemen mengacu pada kerangka TKA Pusat Asesmen Pendidikan (Pusmendik) Kemendikdasmen.
        Paket ini adalah latihan dari AwesomeMathJ, bukan soal resmi.
      </p>
    </div>
  );
}

function TkaPacket({ test, packet, onPrintQuest }) {
  const [questions, setQuestions] = useState(null);
  const packetId = `tka-${test.id}-${packet}`;
  const path = tkaPath(test.id, packet);
  useDocumentMeta(tkaPacketMeta(test, packet));

  useEffect(() => {
    let active = true;
    Promise.all(test.grades.map((g) => getGradeData(g)))
      .then((datas) => { if (active) setQuestions(buildTkaPacket(test, packet, chaptersMap(datas))); })
      .catch(() => { if (active) setQuestions([]); });
    return () => { active = false; };
  }, [test, packet]);

  const other = TKA_PACKETS.find((p) => p !== packet);

  return (
    <div className="handbook-container tka-page">
      <nav className="seo-breadcrumb" aria-label="Navigasi">
        <Link to="/">Beranda</Link> › <Link to="/tka">Latihan TKA</Link> › <span>{test.title} Paket {packet.toUpperCase()}</span>
      </nav>
      <h1>Latihan {test.title} — Paket {packet.toUpperCase()}</h1>
      <p>{test.audience} · 30 soal · Kerjakan dulu, lalu tekan <strong>Periksa Jawaban</strong> atau buka <strong>Pembahasan</strong> per soal.</p>
      <details className="tka-muatan">
        <summary>Muatan dan elemen TKA</summary>
        <p>{test.intro}</p>
        <ElementTable test={test} />
      </details>

      {questions === null ? (
        <div className="editorial-card tka-loading"><Loader2 size={20} className="spinner" /> Menyiapkan soal…</div>
      ) : (
        <ChapterQuiz
          questions={questions}
          chapterTitle={`${test.title} Paket ${packet.toUpperCase()}`}
          chapterId={packetId}
          grade={test.grades[test.grades.length - 1]}
          onPrintQuest={onPrintQuest}
          reportPath={(q) => `${path}#${questionAnchor(q.id)}`}
          showPackets={false}
        />
      )}

      <p className="tka-packets">
        <Link className="btn btn-outline" to={tkaPath(test.id, other)}>Coba Paket {other.toUpperCase()}</Link>
        <Link className="btn btn-subtle" to="/tka">Semua latihan TKA</Link>
      </p>
    </div>
  );
}

/** /tka dan /tka/<tes>-<paket> */
export function TkaPage({ onPrintQuest }) {
  const { paket } = useParams();
  const parsed = paket ? parseTkaSlug(paket) : null;
  if (!parsed) return <TkaHome />;
  return <TkaPacket key={paket} test={parsed.test} packet={parsed.packet} onPrintQuest={onPrintQuest} />;
}

export default TkaPage;
