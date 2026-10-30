/**
 * Prerender halaman publik untuk mesin pencari (dijalankan setelah `vite build`).
 *
 * Setiap bab mendapat file HTML sendiri berisi materi lengkap (ringkasan, konsep,
 * rumus, contoh soal, latihan) + judul/deskripsi unik + data terstruktur (JSON-LD),
 * sehingga Google bisa membaca isinya tanpa menjalankan JavaScript. Saat dibuka di
 * browser, aplikasi React mengambil alih halaman seperti biasa.
 *
 * Keluaran (dengan "cleanUrls" Vercel, /matematika/kelas-4 → matematika/kelas-4.html):
 *   dist/index.html                       beranda
 *   dist/app.html                         kerangka SPA untuk rute lain (Studio Guru, PR)
 *   dist/matematika/kelas-N.html          daftar bab per kelas
 *   dist/matematika/kelas-N/<bab>.html    halaman bab
 *   dist/olimpiade/amc-N[.html|/<bab>.html]
 *   dist/sitemap.xml
 */
import fs from 'fs';
import path from 'path';
import katex from 'katex';
import { GRADE_METADATA } from '../src/data/chapterIndex.js';
import { AMC_LEVELS_METADATA } from '../src/data/amc/amcMetadata.js';
import { questionAnchor } from '../src/utils/reports.js';
import { splitSubbab, articleSections } from '../src/utils/chapterOutline.js';
import { ipaGrade7Data } from '../src/data/ipa/grade7.js';
import { TOPIC_GROUPS } from '../src/data/topics.js';
import { topicChapters, relatedChapters } from '../src/utils/relatedChapters.js';
import { TKA_TESTS, TKA_PACKETS, tkaPath } from '../src/data/tka.js';
import { buildTkaPacket, chaptersMap } from '../src/utils/tkaBuilder.js';
import { ALL_AMC_CHAPTERS_INDEX } from '../src/data/amc/amcMetadata.js';
import { ipaGrade8Data } from '../src/data/ipa/grade8.js';
import { ipaGrade9Data } from '../src/data/ipa/grade9.js';
import { grade4Data } from '../src/data/grades/grade4.js';
import { grade5Data } from '../src/data/grades/grade5.js';
import { grade6Data } from '../src/data/grades/grade6.js';
import { grade7Data } from '../src/data/grades/grade7.js';
import { grade8Data } from '../src/data/grades/grade8.js';
import { grade9Data } from '../src/data/grades/grade9.js';
import { grade10Data } from '../src/data/grades/grade10.js';
import { grade11Data } from '../src/data/grades/grade11.js';
import { grade12Data } from '../src/data/grades/grade12.js';
import { amc8Data } from '../src/data/amc/amc8Data.js';
import { amc10Data } from '../src/data/amc/amc10Data.js';
import { amc12Data } from '../src/data/amc/amc12Data.js';
import { getCp2025Note } from '../src/data/cp2025Mapping.js';
import { SITE_URL, SITE_NAME, gradePath, chapterPath, amcLevelPath, amcChapterPath } from '../src/utils/seoRoutes.js';
import { HOME_META, ABOUT_META, TOPIC_INDEX_META, tkaHomeMeta, tkaPacketMeta, gradeMeta, chapterMeta, amcLevelMeta, amcChapterMeta, levelLabel, SUBJECT_NAME } from '../src/utils/seoMeta.js';
import { AUTHOR, ABOUT } from '../src/data/siteInfo.js';

const DIST = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../dist');
const GRADES = [grade4Data, grade5Data, grade6Data, grade7Data, grade8Data, grade9Data, grade10Data, grade11Data, grade12Data];
const IPA = [ipaGrade7Data, ipaGrade8Data, ipaGrade9Data].filter((g) => g.chapters.length > 0);
const AMC = [amc8Data, amc10Data, amc12Data];
const PHASE = Object.fromEntries(GRADE_METADATA.map((g) => [g.grade, g.phase]));

// ---------------------------------------------------------------------------
// Teks → HTML (LaTeX dirender KaTeX, **tebal**, baris baru)
// ---------------------------------------------------------------------------
const escapeHtml = (s) => String(s ?? '')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function renderMath(tex, displayMode) {
  try {
    return katex.renderToString(tex, { displayMode, throwOnError: false, strict: 'ignore', output: 'html' });
  } catch {
    return escapeHtml(tex);
  }
}

function rich(text) {
  const src = String(text ?? '');
  const hasDelimiters = /\$/.test(src);
  // Teks tanpa $ tetapi berisi perintah LaTeX (mis. opsi "\frac{1}{2}") dirender utuh sebagai rumus
  if (!hasDelimiters && /\\[a-zA-Z]+|\^\{?/.test(src)) return renderMath(src, false);
  return src
    .split(/(\$\$[\s\S]*?\$\$|\$[^$\n]+?\$)/g)
    .map((part) => {
      if (part.startsWith('$$') && part.endsWith('$$') && part.length > 4) return renderMath(part.slice(2, -2), true);
      if (part.startsWith('$') && part.endsWith('$') && part.length > 2) return renderMath(part.slice(1, -1), false);
      return escapeHtml(part)
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br>');
    })
    .join('');
}

const paragraphs = (text) => String(text || '').split(/\n\s*\n/).map((p) => `<p>${rich(p)}</p>`).join('\n');

// ---------------------------------------------------------------------------
// Kerangka halaman
// ---------------------------------------------------------------------------
const shell = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');
// CSS KaTeX ada di chunk terpisah yang baru dimuat lewat JavaScript; tautkan langsung
// agar rumus pada HTML statis tampil benar (pecahan bertingkat, akar, dll).
const katexCss = fs.readdirSync(path.join(DIST, 'assets')).find((f) => /katex.*\.css$/.test(f));
if (!shell.includes('<div id="root"></div>')) throw new Error('dist/index.html tidak berisi <div id="root"></div>');
fs.writeFileSync(path.join(DIST, 'app.html'), shell);

function renderPage({ meta, body, jsonLd = [] }) {
  const url = `${SITE_URL}${meta.path === '/' ? '/' : meta.path}`;
  const head = [
    `<title>${escapeHtml(meta.title)}</title>`,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:locale" content="id_ID" />`,
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta name="twitter:card" content="summary" />`,
    ...(katexCss ? [`<link rel="stylesheet" href="/assets/${katexCss}" />`] : []),
    ...jsonLd.map((obj) => `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`)
  ].join('\n    ');

  return shell
    .replace(/<title>[\s\S]*?<\/title>/, '')
    .replace(/<meta name="description"[^>]*>/, '')
    .replace('</head>', `    ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root"><div class="handbook-container seo-page">${body}${FOOTER_HTML}</div></div>`);
}

const FOOTER_HTML = `<footer class="seo-footer"><p>${SITE_NAME} — dibuat dan dikelola oleh <a href="/tentang">${escapeHtml(AUTHOR.name)}</a>, ${escapeHtml(AUTHOR.jobTitle)}.</p></footer>`;

// Data terstruktur pembuat situs (dipakai sebagai author/creator di setiap halaman)
const PERSON_LD = {
  '@type': 'Person',
  name: AUTHOR.name,
  jobTitle: AUTHOR.jobTitle,
  url: `${SITE_URL}/tentang`,
  ...(AUTHOR.sameAs.length ? { sameAs: AUTHOR.sameAs } : {})
};

function writePage(routePath, html) {
  const file = routePath === '/' ? path.join(DIST, 'index.html') : path.join(DIST, `${routePath.slice(1)}.html`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}

const breadcrumbLd = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, p], i) => ({ '@type': 'ListItem', position: i + 1, name, item: `${SITE_URL}${p}` }))
});

const breadcrumbHtml = (items) => `<nav class="seo-breadcrumb" aria-label="Navigasi">${items
  .map(([name, p], i) => (i === items.length - 1 ? `<span>${escapeHtml(name)}</span>` : `<a href="${p}">${escapeHtml(name)}</a>`))
  .join(' › ')}</nav>`;

const learningResourceLd = ({ meta, educationalLevel, subject = 'Matematika' }) => ({
  '@context': 'https://schema.org',
  '@type': 'LearningResource',
  name: meta.title.split(' | ')[0],
  description: meta.description,
  url: `${SITE_URL}${meta.path}`,
  inLanguage: 'id',
  isAccessibleForFree: true,
  educationalLevel,
  learningResourceType: ['Ringkasan materi', 'Contoh soal', 'Latihan soal'],
  about: { '@type': 'Thing', name: subject },
  provider: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  author: PERSON_LD
});

function questionList(questions) {
  return `<ol class="seo-questions">${questions.map((q) => {
    const options = (q.options || []).length
      ? `<ul class="seo-options">${q.options.map((o) => `<li><strong>${escapeHtml(o.key)}.</strong> ${rich(o.text)}</li>`).join('')}</ul>`
      : '';
    const key = q.correctAnswer || q.answer;
    const solution = q.bestSolution || q.conceptualSolution || q.explanation;
    const answerText = q.correctAnswer
      ? `${escapeHtml(q.correctAnswer)}. ${rich((q.options || []).find((o) => o.key === q.correctAnswer)?.text || '')}`
      : rich(String(key ?? ''));
    const details = key || solution
      ? `<details class="seo-solution"><summary>Pembahasan</summary>${key ? `<p><strong>Jawaban: ${answerText}</strong></p>` : ''}${solution ? `<div>${rich(solution)}</div>` : ''}</details>`
      : '';
    return `<li id="${questionAnchor(q.id)}"><div>${rich(q.question)}</div>${options}${details}</li>`;
  }).join('\n')}</ol>`;
}

/** Isi bab dengan struktur yang sama seperti ChapterArticle (daftar isi, subbab bernomor, anchor). */
function chapterBody(chapter) {
  const s = chapter.summary || {};
  const practiceCount = chapter.questions?.length || 0;
  const subbab = (s.coreConcepts || []).map(splitSubbab);
  const toc = articleSections(s, practiceCount).map((sec) => {
    const sub = sec.id === 'materi'
      ? `<ol type="a">${subbab.map((sb, i) => `<li><a href="#materi-${i + 1}">${rich(sb.title)}</a></li>`).join('')}</ol>`
      : '';
    return `<li><a href="#${sec.id}">${escapeHtml(sec.label)}</a>${sub}</li>`;
  }).join('');
  const parts = [`<nav class="seo-toc" aria-label="Daftar isi bab"><h2>Daftar Isi</h2><ol>${toc}</ol></nav>`];
  if (s.overview) parts.push(`<section id="pengantar"><h2>Pengantar</h2>${paragraphs(s.overview)}</section>`);
  if (subbab.length) {
    parts.push(`<section id="materi"><h2>Materi</h2>${subbab.map((sb, i) => `
      <div id="materi-${i + 1}"><h3>${i + 1}. ${rich(sb.title)}</h3><p>${rich(sb.body)}</p></div>`).join('')}</section>`);
  }
  if (s.keyFormulas?.length) parts.push(`<section id="rumus"><h2>Rumus Kunci</h2><ul>${s.keyFormulas.map((f) => `<li><strong>${rich(f.label)}</strong>: ${renderMath(f.formula, false)}</li>`).join('')}</ul></section>`);
  if (s.workedExamples?.length) {
    parts.push(`<section id="contoh"><h2>Contoh Soal dan Pembahasan</h2>${s.workedExamples.map((ex, i) => `
      <article><h3>Contoh ${i + 1}${ex.title ? `: ${rich(ex.title)}` : ''}</h3><p>${rich(ex.problem)}</p><details><summary>Lihat pembahasan</summary><div>${rich(ex.solution)}</div></details></article>`).join('')}</section>`);
  }
  if (s.misconceptions?.length) parts.push(`<section id="kesalahan"><h2>Kesalahan yang Sering Terjadi</h2><ul>${s.misconceptions.map((m) => `<li>${rich(m)}</li>`).join('')}</ul></section>`);
  if (s.tutorTip) parts.push(`<section><h2>Tips</h2><p>${rich(s.tutorTip)}</p></section>`);
  return parts.join('\n');
}

/** Daftar isi satu kelas: setiap bab beserta subbabnya (seperti halaman indeks materi). */
function gradeToc(chapters, toPath) {
  return `<ol class="seo-grade-toc">${chapters.map((c) => {
    const subs = (c.summary?.coreConcepts || []).map(splitSubbab);
    return `<li><a href="${toPath(c)}"><strong>${escapeHtml(c.title)}</strong></a>${c.trackLabel ? ` (${escapeHtml(c.trackLabel)})` : ''}
      <ul>${subs.map((sb, i) => `<li><a href="${toPath(c)}#materi-${i + 1}">${rich(sb.title)}</a></li>`).join('')}</ul></li>`;
  }).join('\n')}</ol>`;
}

const siblingLinks = (items, currentId, toPath) => `<nav class="seo-chapters"><h2>Bab Lainnya</h2><ul>${items
  .map((c) => (c.id === currentId ? `<li><strong>${escapeHtml(c.title)}</strong></li>` : `<li><a href="${toPath(c)}">${escapeHtml(c.title)}</a></li>`))
  .join('')}</ul></nav>`;

const relatedHtml = (chapterId) => {
  const items = relatedChapters(chapterId);
  return items.length
    ? `<aside class="seo-related"><h2>Materi Terkait</h2><ul>${items.map((c) => `<li><a href="${c.path}">${escapeHtml(c.title)}</a> (${escapeHtml(c.label)})</li>`).join('')}</ul></aside>`
    : '';
};

const sitemap = [];
const addToSitemap = (p, priority) => sitemap.push({ loc: `${SITE_URL}${p === '/' ? '/' : p}`, priority });

// ---------------------------------------------------------------------------
// Beranda
// ---------------------------------------------------------------------------
{
  const gradeList = GRADES.map((g) => `<li><a href="${gradePath(g.grade)}"><strong>Matematika Kelas ${g.grade} ${levelLabel(g.grade)}</strong></a> — ${g.chapters.map((c) => `<a href="${chapterPath(g.grade, c.id)}">${escapeHtml(c.title)}</a>`).join(', ')}</li>`).join('\n');
  const ipaList = IPA.map((g) => `<li><a href="${gradePath(g.grade, 'ipa')}"><strong>IPA Kelas ${g.grade} ${levelLabel(g.grade)}</strong></a> — ${g.chapters.map((c) => `<a href="${chapterPath(g.grade, c.id)}">${escapeHtml(c.title)}</a>`).join(', ')}</li>`).join('\n');
  const amcList = AMC.map((d) => `<li><a href="${amcLevelPath(d.level)}"><strong>AMC ${d.level}</strong></a> — ${d.chapters.map((c) => `<a href="${amcChapterPath(d.level, c.id)}">${escapeHtml(c.title)}</a>`).join(', ')}</li>`).join('\n');
  const body = `
    <h1>Belajar Matematika Kelas 4–12, IPA SMP, dan Olimpiade AMC</h1>
    <p>${escapeHtml(HOME_META.description)}</p>
    <p>Disusun oleh <a href="/tentang">${escapeHtml(AUTHOR.name)}</a>, ${escapeHtml(AUTHOR.jobTitle)}.</p>
    <p><a href="/daftar-isi">Daftar isi semua materi per topik</a> · <a href="/tka">Latihan TKA Matematika SD &amp; SMP</a></p>
    <section><h2>Matematika Kurikulum Merdeka</h2><ul>${gradeList}</ul></section>
    ${ipaList ? `<section><h2>IPA Kurikulum Merdeka</h2><ul>${ipaList}</ul></section>` : ''}
    <section><h2>Olimpiade Matematika AMC</h2><ul>${amcList}</ul></section>`;
  const ld = [{
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: 'id',
    description: HOME_META.description,
    creator: PERSON_LD,
    author: PERSON_LD
  }];
  writePage('/', renderPage({ meta: HOME_META, body, jsonLd: ld }));
  addToSitemap('/', '1.0');
}

// ---------------------------------------------------------------------------
// Tentang (pembuat situs)
// ---------------------------------------------------------------------------
{
  const body = `
    <h1>${escapeHtml(ABOUT.title)}</h1>
    <p><strong>${escapeHtml(ABOUT.intro)}</strong></p>
    ${ABOUT.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join('\n')}
    <h2>Pembuat</h2>
    <p>${escapeHtml(AUTHOR.name)} — ${escapeHtml(AUTHOR.jobTitle)}</p>
    <h2>Mulai Belajar</h2>
    <ul>${GRADES.map((g) => `<li><a href="${gradePath(g.grade)}">Matematika Kelas ${g.grade}</a></li>`).join('')}${IPA.map((g) => `<li><a href="${gradePath(g.grade, 'ipa')}">IPA Kelas ${g.grade}</a></li>`).join('')}${AMC.map((d) => `<li><a href="${amcLevelPath(d.level)}">Olimpiade AMC ${d.level}</a></li>`).join('')}</ul>`;
  const ld = [{
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: `${SITE_URL}${ABOUT_META.path}`,
    name: ABOUT_META.title,
    mainEntity: { ...PERSON_LD, description: ABOUT.intro, worksFor: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL } }
  }];
  writePage(ABOUT_META.path, renderPage({ meta: ABOUT_META, body, jsonLd: ld }));
  addToSitemap(ABOUT_META.path, '0.6');
}

// ---------------------------------------------------------------------------
// Kurikulum Merdeka: Matematika dan IPA
// ---------------------------------------------------------------------------
function renderCurriculum(subject, grades) {
  const name = SUBJECT_NAME[subject];
  for (const g of grades) {
    const lvl = levelLabel(g.grade);
    const phase = g.phase || PHASE[g.grade] || '';
    const crumbsBase = [['Beranda', '/'], [`${name} Kelas ${g.grade}`, gradePath(g.grade, subject)]];

    const gMeta = gradeMeta(g.grade, subject);
    const gradeBody = `
      ${breadcrumbHtml(crumbsBase)}
      <h1>${name} Kelas ${g.grade} ${lvl} Kurikulum Merdeka</h1>
      <p>${escapeHtml(phase)} · ${g.chapters.length} bab · ${g.chapters.reduce((n, c) => n + (c.questions?.length || 0), 0)} latihan soal dengan pembahasan.</p>
      <h2>Daftar Isi</h2>
      ${gradeToc(g.chapters, (c) => chapterPath(g.grade, c.id))}`;
    writePage(gMeta.path, renderPage({ meta: gMeta, body: gradeBody, jsonLd: [breadcrumbLd(crumbsBase)] }));
    addToSitemap(gMeta.path, '0.8');

    for (const ch of g.chapters) {
      const meta = chapterMeta(g.grade, ch);
      const crumbs = [...crumbsBase, [ch.title, meta.path]];
      const note = getCp2025Note(ch.id);
      const body = `
        ${breadcrumbHtml(crumbs)}
        <h1>${escapeHtml(ch.title)}</h1>
        <p class="seo-subtitle">${name} Kelas ${g.grade} ${lvl} · ${escapeHtml(phase)} · Kurikulum Merdeka${ch.trackLabel ? ` · ${escapeHtml(ch.trackLabel)}` : ''}</p>
        ${note ? `<p class="cp2025-note"><strong>${escapeHtml(note.label)}.</strong> ${escapeHtml(note.note)}</p>` : ''}
        ${chapterBody(ch)}
        <section id="latihan-soal"><h2>Latihan Soal (${ch.questions?.length || 0} soal)</h2>
          <p>Kerjakan latihan interaktif di halaman ini untuk melihat nilai dan pembahasan setiap soal.</p>
          ${questionList(ch.questions || [])}
        </section>
        ${relatedHtml(ch.id)}
        ${siblingLinks(g.chapters, ch.id, (c) => chapterPath(g.grade, c.id))}`;
      const ld = [learningResourceLd({ meta, educationalLevel: `Kelas ${g.grade} ${lvl} (${phase})`, subject: name }), breadcrumbLd(crumbs)];
      writePage(meta.path, renderPage({ meta, body, jsonLd: ld }));
      addToSitemap(meta.path, '0.7');
    }
  }
}

renderCurriculum('matematika', GRADES);
renderCurriculum('ipa', IPA);

// ---------------------------------------------------------------------------
// Olimpiade AMC
// ---------------------------------------------------------------------------
for (const d of AMC) {
  const levelInfo = AMC_LEVELS_METADATA.find((m) => m.level === d.level) || {};
  const crumbsBase = [['Beranda', '/'], [`Olimpiade AMC ${d.level}`, amcLevelPath(d.level)]];
  const lMeta = amcLevelMeta(d.level);
  const levelBody = `
    ${breadcrumbHtml(crumbsBase)}
    <h1>Persiapan Olimpiade AMC ${d.level}</h1>
    <p>${escapeHtml(levelInfo.subtitle || '')}${levelInfo.targetGrades ? ` · ${escapeHtml(levelInfo.targetGrades)}` : ''}</p>
    <ul>${d.chapters.map((c) => `<li><a href="${amcChapterPath(d.level, c.id)}">${escapeHtml(c.title)}</a>${c.domain ? ` (${escapeHtml(c.domain)})` : ''}</li>`).join('')}</ul>`;
  writePage(lMeta.path, renderPage({ meta: lMeta, body: levelBody, jsonLd: [breadcrumbLd(crumbsBase)] }));
  addToSitemap(lMeta.path, '0.6');

  for (const ch of d.chapters) {
    const meta = amcChapterMeta(d.level, ch);
    const crumbs = [...crumbsBase, [ch.title, meta.path]];
    const body = `
      ${breadcrumbHtml(crumbs)}
      <h1>${escapeHtml(ch.title)}</h1>
      <p class="seo-subtitle">Olimpiade AMC ${d.level}${ch.domain ? ` · ${escapeHtml(ch.domain)}` : ''}</p>
      ${chapterBody(ch)}
      <section id="latihan-soal"><h2>Soal Latihan Kompetisi (${ch.questions?.length || 0} soal)</h2>${questionList(ch.questions || [])}</section>
      ${siblingLinks(d.chapters, ch.id, (c) => amcChapterPath(d.level, c.id))}`;
    const ld = [learningResourceLd({ meta, educationalLevel: `Olimpiade AMC ${d.level}` }), breadcrumbLd(crumbs)];
    writePage(meta.path, renderPage({ meta, body, jsonLd: ld }));
    addToSitemap(meta.path, '0.5');
  }
}

// ---------------------------------------------------------------------------
// Daftar isi per topik
// ---------------------------------------------------------------------------
{
  const strip = (t) => escapeHtml(String(t).replace(/^Bab \d+:\s*/, ''));
  const groups = TOPIC_GROUPS.map((group) => `<section><h2>${group.name}</h2>${group.topics.map((topic) => `
    <div id="topik-${topic.id}"><h3>${escapeHtml(topic.name)}</h3><p>${escapeHtml(topic.description)}</p>
    <ul>${topicChapters(topic).map((c) => `<li><a href="${c.path}">${strip(c.title)}</a> — ${escapeHtml(c.label)}</li>`).join('')}</ul></div>`).join('')}</section>`).join('\n');
  const amc = `<section><h2>Olimpiade AMC</h2>${AMC_LEVELS_METADATA.map((lvl) => `<h3>${escapeHtml(lvl.title)} (${escapeHtml(lvl.targetGrades)})</h3><ul>${ALL_AMC_CHAPTERS_INDEX
    .filter((c) => c.level === lvl.level).map((c) => `<li><a href="${amcChapterPath(lvl.level, c.id)}">${strip(c.title)}</a> — ${escapeHtml(c.domain)}</li>`).join('')}</ul>`).join('')}</section>`;
  const crumbs = [['Beranda', '/'], ['Daftar Isi', TOPIC_INDEX_META.path]];
  const body = `${breadcrumbHtml(crumbs)}<h1>Daftar Isi Materi</h1>
    <p>Semua bab Matematika (Kelas 4–12), IPA (Kelas 7–9), dan Olimpiade AMC, dikelompokkan per topik.</p>
    <p><a href="/tka">Latihan TKA Matematika SD dan SMP</a></p>${groups}${amc}`;
  writePage(TOPIC_INDEX_META.path, renderPage({ meta: TOPIC_INDEX_META, body, jsonLd: [breadcrumbLd(crumbs)] }));
  addToSitemap(TOPIC_INDEX_META.path, '0.9');
}

// ---------------------------------------------------------------------------
// Latihan TKA
// ---------------------------------------------------------------------------
{
  const elementTable = (test) => `<table><thead><tr><th>Elemen</th><th>Cakupan</th><th>Soal</th></tr></thead><tbody>${test.elements
    .map((el) => `<tr><td><strong>${escapeHtml(el.name)}</strong></td><td>${escapeHtml(el.scope)}</td><td>${el.quota}</td></tr>`).join('')}</tbody></table>`;
  const homeMeta = tkaHomeMeta();
  const homeCrumbs = [['Beranda', '/'], ['Latihan TKA', '/tka']];
  const homeBody = `${breadcrumbHtml(homeCrumbs)}<h1>Latihan TKA Matematika SD dan SMP</h1>
    <p>${escapeHtml(homeMeta.description)}</p>
    ${TKA_TESTS.map((test) => `<section><h2>${escapeHtml(test.title)}</h2><p>${escapeHtml(test.audience)}</p><p>${escapeHtml(test.intro)}</p>${elementTable(test)}
      <ul>${TKA_PACKETS.map((p) => `<li><a href="${tkaPath(test.id, p)}">${escapeHtml(test.title)} Paket ${p.toUpperCase()}</a></li>`).join('')}</ul></section>`).join('')}
    <p>Muatan dan cakupan elemen mengacu pada kerangka TKA Pusmendik Kemendikdasmen. Paket ini adalah latihan dari ${SITE_NAME}, bukan soal resmi.</p>`;
  writePage('/tka', renderPage({ meta: homeMeta, body: homeBody, jsonLd: [breadcrumbLd(homeCrumbs)] }));
  addToSitemap('/tka', '0.9');

  const chapters = chaptersMap(GRADES);
  for (const test of TKA_TESTS) {
    for (const packet of TKA_PACKETS) {
      const meta = tkaPacketMeta(test, packet);
      const crumbs = [...homeCrumbs, [`${test.title} Paket ${packet.toUpperCase()}`, meta.path]];
      const questions = buildTkaPacket(test, packet, chapters);
      const body = `${breadcrumbHtml(crumbs)}<h1>Latihan ${escapeHtml(test.title)} — Paket ${packet.toUpperCase()}</h1>
        <p>${escapeHtml(test.audience)} · ${questions.length} soal dengan kunci jawaban dan pembahasan.</p>
        <section><h2>Muatan dan Elemen TKA</h2><p>${escapeHtml(test.intro)}</p>${elementTable(test)}</section>
        <section id="latihan-soal"><h2>Soal Latihan</h2>${questionList(questions)}</section>
        <p><a href="${tkaPath(test.id, packet === 'a' ? 'b' : 'a')}">Paket ${packet === 'a' ? 'B' : 'A'}</a> · <a href="/tka">Semua latihan TKA</a></p>`;
      const ld = [learningResourceLd({ meta, educationalLevel: test.audience }), breadcrumbLd(crumbs)];
      writePage(meta.path, renderPage({ meta, body, jsonLd: ld }));
      addToSitemap(meta.path, '0.8');
    }
  }
}

// ---------------------------------------------------------------------------
// sitemap.xml
// ---------------------------------------------------------------------------
const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(path.join(DIST, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemap.map((u) => `  <url><loc>${u.loc}</loc><lastmod>${today}</lastmod><priority>${u.priority}</priority></url>`).join('\n')}
</urlset>
`);

console.log(`Prerender selesai: ${sitemap.length} halaman + sitemap.xml`);
