# Original User Request

## 2026-09-24T03:38:27Z

Complete and consolidate the **AwesomeMathJ** platform (React 19, Vite, KaTeX, React Router v7) by fixing all existing syntax/build errors, wiring up the Olympiad AMC track (AMC 8, AMC 10, AMC 12) seamlessly into the UI alongside Kurikulum Merdeka (Kelas 4–12), completing all 36 AMC competition chapters with authentic short-answer/proof formats (no forced ABCD), and perfecting the A4 printable worksheet generator with scannable QR solution deep links.

Working directory: c:\Users\USER\Downloads\Study
Integrity mode: development

---

## Requirements

### R1. System Stability & Build Pipeline Integrity
- Fix the syntax error in `src/components/PrintableWorksheet.jsx` (unclosed `try` block missing `catch`/`finally`).
- Eliminate all linter errors/warnings in `oxlint` (escape characters in `amc8Data.js`, `amc12Data.js`, unused imports in `AmcChapterView.jsx`).
- Ensure `npx vite build`, `npm run lint`, and `npm test` execute cleanly with zero errors.

### R2. Seamless UI Integration for AMC Olympiad & Kurikulum Merdeka
- In `src/components/PublicHandbook.jsx`, introduce an intuitive level/mode selector allowing users to switch between standard school grades (**Kelas 4–12**) and competition tracks (**Olimpiade AMC: AMC 8, AMC 10, AMC 12**).
- Connect `AmcChapterView.jsx` to render when AMC mode is active, displaying the 6 pedagogical pillars, hint toggles, short-answer input checking with confetti, and direct A4 worksheet print trigger.
- Maintain synchronized URL query params (`/?mode=amc&level=8&chapter=...` vs `/?grade=8&chapter=...`) and ensure backward compatibility.

### R3. Complete All 36 Chapters of AMC Competition Modules (No Forced ABCD)
- Expand `src/data/amc/amc8Data.js` to full 12 chapters (currently 3/12).
- Expand `src/data/amc/amc10Data.js` to full 12 chapters (currently 3/12).
- Expand `src/data/amc/amc12Data.js` to full 12 chapters (currently 2/12).
- **Strict Format**: Retain authentic competition questions (`type: 'short_answer'` or `type: 'essay'`), exact answer values/expressions (`answer` and `acceptedAnswers`), guiding hints (`hint`), and rigorous step-by-step mathematical proofs (`bestSolution`). Under no circumstances should questions be forced into multiple-choice (ABCD).
- Adhere strictly to valid KaTeX string escaping (double backslashes e.g. `\\frac`, `\\sqrt`, `\\binom`).

### R4. Polymorphic Solution Viewer & QR Deep Linking
- Update `src/components/ChapterSolutionView.jsx` to dynamically load both K-12 chapters and AMC chapters (via `getAmcChapterSolutionData`).
- Fix runtime crash in `ChapterSolutionView.jsx` on non-MCQ questions: do not call `q.options.map()` when `options` is absent; display the exact numerical/symbolic answer and detailed step-by-step derivation.
- Ensure `PrintableWorksheet.jsx` generates QR codes that correctly navigate to `/solution/:grade/:chapterId` and `/solution/amc/:level/:chapterId` without 404 or crashes.

### R5. A4 Printable Olympiad Worksheet Engine
- In `PrintableWorksheet.jsx`, tailor the print layout for AMC: prominent competition header, student metadata box, score box, clear "KOTAK JAWABAN AKHIR SISWA", and generous scratch/proof calculation workspace.
- Enforce clean `@media print` rules ensuring questions and work boxes do not split awkwardly across page breaks (`break-inside: avoid;`).
- Supply SVG visual configurations in `src/components/visuals/registry/amcRegistry.js` for geometry and coordinate geometry problems.

---

## Acceptance Criteria

### Verification & Automated Testing
- [ ] `npm run lint` completes with 0 errors and 0 warnings.
- [ ] `npx vite build` finishes cleanly, creating production bundles in `dist/`.
- [ ] `npm test` runs all automated test suites and reports 100% passing tests.

### Functional Verification
- [ ] Navigating to `/?mode=amc&level=8` renders the AMC 8 curriculum with all 12 chapters accessible in the navigation.
- [ ] Navigating to AMC 10 and AMC 12 displays all 12 chapters each with authentic math competition content.
- [ ] Submitting correct answers in `AmcChapterView` validates against `acceptedAnswers` and triggers completion feedback without requiring multiple-choice radio buttons.
- [ ] Clicking "Cetak LKPD AMC (A4)" generates an official A4 olympiad worksheet with scannable QR code and dedicated student answer/scratch boxes.
- [ ] Scanning or clicking the QR code link opens `ChapterSolutionView` and loads the complete step-by-step solution without throwing `undefined .map` errors.

## 2026-09-24T08:39:44Z

The user has resumed execution via /teamwork-preview with the following UI updates already applied and verified:
1. Removed AMC domain filter pills from PublicHandbook.jsx.
2. Renamed AMC practice section to 'Latihan Soal & Pemahaman Konsep' with PenTool icon in var(--primary-blue), matching Kurikulum Merdeka.
3. Unified AMC badges, sidebar items, and tab buttons with the platform royal blue theme.
4. System health: `npm run lint` = 0 errors/0 warnings, `npm test` = 162/162 passed (100%), `npx vite build` = clean build.

Please resume orchestration and proceed with:
- Milestone M4: Polymorphic ChapterSolutionView & PrintableWorksheet QR Deep Linking.
- Milestone M5: Final E2E integration verification and completion audit.
