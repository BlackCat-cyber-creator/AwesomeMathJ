import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

/**
 * PDF & Offline Worksheet Export Utilities for AwesomeMathJ
 * 
 * Features:
 * - High-resolution client-side PDF export (A4 multi-page, scale 2)
 * - Standalone offline HTML export with embedded styles and KaTeX CDN
 * - Safe print trigger with font preloading
 */

/**
 * Triggers safe browser printing after ensuring fonts are loaded
 */
export async function triggerSafePrint() {
  try {
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }
  } catch {
    // Ignore font loading errors and proceed
  }
  window.print();
}

/**
 * Exports a DOM element directly to a downloadable multi-page A4 PDF file.
 * Operates completely on the client side (works offline).
 * 
 * @param {HTMLElement} element - The DOM element to capture (.printable-page)
 * @param {string} filename - Output PDF filename
 * @param {function} onProgress - Optional status callback
 * @returns {Promise<boolean>}
 */
export async function exportWorksheetToPdf(element, filename = 'Lembar_Kerja_Matematika.pdf', onProgress = null) {
  if (!element) return false;

  try {
    if (onProgress) onProgress('Menyiapkan dokumen...');

    // Wait for fonts to be ready
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }

    if (onProgress) onProgress('Merender halaman...');

    // Capture element using html2canvas
    const canvas = await html2canvas(element, {
      scale: 2, // 2x for sharp print resolution
      useCORS: true,
      logging: false,
      backgroundColor: '#FFFFFF',
      windowWidth: element.scrollWidth || 880,
      onclone: (clonedDoc) => {
        // Ensure no-print items are hidden in the clone
        const noPrintElements = clonedDoc.querySelectorAll('.no-print');
        noPrintElements.forEach(el => { el.style.display = 'none'; });
      }
    });

    if (onProgress) onProgress('Menyusun lembar PDF (A4)...');

    const imgData = canvas.toDataURL('image/jpeg', 0.95);

    // Standard A4 dimensions in millimeters
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true
    });

    const pageWidth = 210;
    const pageHeight = 297;
    const margin = 10; // 10mm margin
    const printWidth = pageWidth - (margin * 2); // 190mm
    const printHeight = (canvas.height * printWidth) / canvas.width;

    const availablePageHeight = pageHeight - (margin * 2); // 277mm
    let heightLeft = printHeight;
    let position = margin;

    // First page
    pdf.addImage(imgData, 'JPEG', margin, position, printWidth, printHeight, '', 'FAST');
    heightLeft -= availablePageHeight;

    // Remaining pages
    while (heightLeft > 0) {
      position = margin - (printHeight - heightLeft);
      pdf.addPage();
      pdf.addImage(imgData, 'JPEG', margin, position, printWidth, printHeight, '', 'FAST');
      heightLeft -= availablePageHeight;
    }

    if (onProgress) onProgress('Menyimpan file...');
    pdf.save(filename);

    if (onProgress) onProgress('Selesai!');
    return true;
  } catch (err) {
    console.error('Gagal membuat PDF langsung:', err);
    throw err;
  }
}

/**
 * Downloads a standalone, self-contained HTML worksheet file.
 * This file can be saved to a USB drive or smartphone, opened anywhere offline,
 * and printed with full KaTeX formulas and SVG illustrations.
 * 
 * @param {HTMLElement} element - The worksheet DOM node
 * @param {string} title - Document title
 * @returns {boolean}
 */
export function exportWorksheetToHtml(element, title = 'Lembar_Kerja_Matematika') {
  if (!element) return false;

  try {
    const cleanTitle = title.replace(/[^a-zA-Z0-9_\-\s]/g, '').trim() || 'Lembar_Kerja_Matematika';
    const htmlString = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${cleanTitle} - AwesomeMathJ</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.18.6/dist/katex.min.css">
  <style>
    @page {
      size: A4 portrait;
      margin: 12mm;
    }
    *, *::before, *::after {
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background: #F8FAFC;
      color: #111827;
      margin: 0;
      padding: 24px;
      line-height: 1.5;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    .worksheet-container {
      max-width: 840px;
      margin: 0 auto;
      background: #FFFFFF;
      border: 1px solid #D1D5DB;
      padding: 36px 44px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }
    .print-bar {
      max-width: 840px;
      margin: 0 auto 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;
      background: #1E3A8A;
      color: #FFFFFF;
      border-radius: 6px;
    }
    .print-btn {
      background: #FFFFFF;
      color: #1E3A8A;
      border: none;
      padding: 8px 16px;
      font-weight: 700;
      border-radius: 4px;
      cursor: pointer;
    }
    @media print {
      body {
        background: #FFFFFF !important;
        padding: 0 !important;
      }
      .worksheet-container {
        border: none !important;
        box-shadow: none !important;
        padding: 0 !important;
        max-width: 100% !important;
      }
      .print-bar, .no-print {
        display: none !important;
      }
      div {
        break-inside: avoid;
        page-break-inside: avoid;
      }
    }
  </style>
</head>
<body>
  <div class="print-bar no-print">
    <div><strong>AwesomeMathJ</strong> • File Lembar Kerja Siap Cetak Mandiri</div>
    <button class="print-btn" onclick="window.print()">🖨️ Cetak Dokumen Sekarang</button>
  </div>
  <div class="worksheet-container">
    ${element.innerHTML}
  </div>
</body>
</html>`;

    const blob = new Blob([htmlString], { type: 'text/html;charset=utf-8' });
    const blobUrl = URL.createObjectURL(blob);
    const downloadAnchor = document.createElement('a');
    downloadAnchor.href = blobUrl;
    downloadAnchor.download = `${cleanTitle.replace(/\s+/g, '_')}.html`;
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    document.body.removeChild(downloadAnchor);
    URL.revokeObjectURL(blobUrl);
    return true;
  } catch (err) {
    console.error('Gagal mengekspor file HTML mandiri:', err);
    return false;
  }
}
