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
import { HOME_META, gradeMeta, chapterMeta, amcLevelMeta, amcChapterMeta, levelLabel } from '../src/utils/seoMeta.js';

const DIST = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../dist');
const GRADES = [grade4Data, grade5Data, grade6Data, grade7Data, grade8Data, grade9Data, grade10Data, grade11Data, grade12Data];
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
    .replace('<div id="root"></div>', `<div id="root"><div class="handbook-container seo-page">${body}</div></div>`);
}

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
  provider: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL }
});

function questionList(questions) {
  return `<ol class="seo-questions">${questions.map((q) => {
    const options = (q.options || []).length
      ? `<ul class="seo-options">${q.options.map((o) => `<li><strong>${escapeHtml(o.key)}.</strong> ${rich(o.text)}</li>`).join('')}</ul>`
      : '';
    return `<li><div>${rich(q.question)}</div>${options}</li>`;
  }).join('\n')}</ol>`;
}

function chapterBody(chapter) {
  const s = chapter.summary || {};
  const parts = [];
  if (s.overview) parts.push(`<section><h2>Ringkasan Materi</h2>${paragraphs(s.overview)}</section>`);
  if (s.coreConcepts?.length) parts.push(`<section><h2>Konsep Kunci</h2><ul>${s.coreConcepts.map((c) => `<li>${rich(c)}</li>`).join('')}</ul></section>`);
  if (s.keyFormulas?.length) parts.push(`<section><h2>Rumus Penting</h2><ul>${s.keyFormulas.map((f) => `<li><strong>${rich(f.label)}</strong>: ${renderMath(f.formula, false)}</li>`).join('')}</ul></section>`);
  if (s.workedExamples?.length) {
    parts.push(`<section><h2>Contoh Soal &amp; Pembahasan</h2>${s.workedExamples.map((ex) => `
      <article><h3>${rich(ex.title)}</h3><p>${rich(ex.problem)}</p><div>${rich(ex.solution)}</div></article>`).join('')}</section>`);
  }
  if (s.misconceptions?.length) parts.push(`<section><h2>Kesalahan yang Sering Terjadi</h2><ul>${s.misconceptions.map((m) => `<li>${rich(m)}</li>`).join('')}</ul></section>`);
  if (s.tutorTip) parts.push(`<section><h2>Tips</h2><p>${rich(s.tutorTip)}</p></section>`);
  return parts.join('\n');
}

const siblingLinks = (items, currentId, toPath) => `<nav class="seo-chapters"><h2>Bab Lainnya</h2><ul>${items
  .map((c) => (c.id === currentId ? `<li><strong>${escapeHtml(c.title)}</strong></li>` : `<li><a href="${toPath(c)}">${escapeHtml(c.title)}</a></li>`))
  .join('')}</ul></nav>`;

const sitemap = [];
const addToSitemap = (p, priority) => sitemap.push({ loc: `${SITE_URL}${p === '/' ? '/' : p}`, priority });

// ---------------------------------------------------------------------------
// Beranda
// ---------------------------------------------------------------------------
{
  const gradeList = GRADES.map((g) => `<li><a href="${gradePath(g.grade)}"><strong>Matematika Kelas ${g.grade} ${levelLabel(g.grade)}</strong></a> — ${g.chapters.map((c) => `<a href="${chapterPath(g.grade, c.id)}">${escapeHtml(c.title)}</a>`).join(', ')}</li>`).join('\n');
  const amcList = AMC.map((d) => `<li><a href="${amcLevelPath(d.level)}"><strong>AMC ${d.level}</strong></a> — ${d.chapters.map((c) => `<a href="${amcChapterPath(d.level, c.id)}">${escapeHtml(c.title)}</a>`).join(', ')}</li>`).join('\n');
  const body = `
    <h1>Belajar Matematika Kelas 4–12 dan Olimpiade AMC</h1>
    <p>${escapeHtml(HOME_META.description)}</p>
    <section><h2>Kurikulum Merdeka</h2><ul>${gradeList}</ul></section>
    <section><h2>Olimpiade Matematika AMC</h2><ul>${amcList}</ul></section>`;
  const ld = [{
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: 'id',
    description: HOME_META.description
  }];
  writePage('/', renderPage({ meta: HOME_META, body, jsonLd: ld }));
  addToSitemap('/', '1.0');
}

// ---------------------------------------------------------------------------
// Kurikulum Merdeka
// ---------------------------------------------------------------------------
for (const g of GRADES) {
  const lvl = levelLabel(g.grade);
  const phase = PHASE[g.grade] || '';
  const crumbsBase = [['Beranda', '/'], [`Matematika Kelas ${g.grade}`, gradePath(g.grade)]];

  const gMeta = gradeMeta(g.grade);
  const gradeBody = `
    ${breadcrumbHtml(crumbsBase)}
    <h1>Matematika Kelas ${g.grade} ${lvl} Kurikulum Merdeka</h1>
    <p>${escapeHtml(phase)} · ${g.chapters.length} bab · ${g.chapters.reduce((n, c) => n + (c.questions?.length || 0), 0)} latihan soal dengan pembahasan.</p>
    <ul>${g.chapters.map((c) => `<li><a href="${chapterPath(g.grade, c.id)}">${escapeHtml(c.title)}</a>${c.trackLabel ? ` (${escapeHtml(c.trackLabel)})` : ''}</li>`).join('')}</ul>`;
  writePage(gMeta.path, renderPage({ meta: gMeta, body: gradeBody, jsonLd: [breadcrumbLd(crumbsBase)] }));
  addToSitemap(gMeta.path, '0.8');

  for (const ch of g.chapters) {
    const meta = chapterMeta(g.grade, ch);
    const crumbs = [...crumbsBase, [ch.title, meta.path]];
    const note = getCp2025Note(ch.id);
    const body = `
      ${breadcrumbHtml(crumbs)}
      <h1>${escapeHtml(ch.title)}</h1>
      <p class="seo-subtitle">Matematika Kelas ${g.grade} ${lvl} · ${escapeHtml(phase)} · Kurikulum Merdeka${ch.trackLabel ? ` · ${escapeHtml(ch.trackLabel)}` : ''}</p>
      ${note ? `<p class="cp2025-note"><strong>${escapeHtml(note.label)}.</strong> ${escapeHtml(note.note)}</p>` : ''}
      ${chapterBody(ch)}
      <section><h2>Latihan Soal (${ch.questions?.length || 0} soal)</h2>
        <p>Kerjakan latihan interaktif di halaman ini untuk melihat nilai dan pembahasan setiap soal.</p>
        ${questionList(ch.questions || [])}
      </section>
      ${siblingLinks(g.chapters, ch.id, (c) => chapterPath(g.grade, c.id))}`;
    const ld = [learningResourceLd({ meta, educationalLevel: `Kelas ${g.grade} ${lvl} (${phase})` }), breadcrumbLd(crumbs)];
    writePage(meta.path, renderPage({ meta, body, jsonLd: ld }));
    addToSitemap(meta.path, '0.7');
  }
}

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
      <section><h2>Soal Latihan Kompetisi (${ch.questions?.length || 0} soal)</h2>${questionList(ch.questions || [])}</section>
      ${siblingLinks(d.chapters, ch.id, (c) => amcChapterPath(d.level, c.id))}`;
    const ld = [learningResourceLd({ meta, educationalLevel: `Olimpiade AMC ${d.level}` }), breadcrumbLd(crumbs)];
    writePage(meta.path, renderPage({ meta, body, jsonLd: ld }));
    addToSitemap(meta.path, '0.5');
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
