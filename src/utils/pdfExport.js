import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

/**
 * PDF Export Utilities for AwesomeMathJ
 * 
 * Features:
 * - Smart Element-Aware Pagination (Anti-potong):
 *   Analyzes DOM boundaries of every question (.worksheet-question-item),
 *   header, and footer to ensure NO question, math formula, or SVG diagram
 *   is ever sliced horizontally across page breaks.
 * - High-resolution client-side PDF export (A4 multi-page, scale 2)
 * - Page numbering footer on every page
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
 * Calculates page slices based on DOM bounding boxes of content blocks,
 * ensuring that page breaks ONLY occur between blocks (never through a question).
 * 
 * @param {HTMLElement} element - The root container (.printable-page)
 * @param {number} canvasWidth - Rendered canvas width in pixels
 * @param {number} canvasHeight - Rendered canvas height in pixels
 * @param {Object} pageConfig - Page dimensions and margins in millimeters
 * @returns {Object} Slicing plan and coordinates
 */
export function calculatePageSlices(element, canvasWidth, canvasHeight, pageConfig = {}) {
  const {
    pageWidthMm = 210,
    pageHeightMm = 297,
    marginTopMm = 12,
    marginBottomMm = 14,
    marginLeftMm = 10,
    marginRightMm = 10,
  } = pageConfig;

  const printWidthMm = pageWidthMm - marginLeftMm - marginRightMm; // 190mm
  const printHeightMm = pageHeightMm - marginTopMm - marginBottomMm; // 271mm

  const elementRect = element.getBoundingClientRect 
    ? element.getBoundingClientRect() 
    : { top: 0, bottom: element.offsetHeight || 1000, width: element.offsetWidth || 800, height: element.offsetHeight || 1000 };
  
  const elementWidthPx = element.offsetWidth || elementRect.width || 800;
  const elementHeightPx = element.offsetHeight || elementRect.height || element.scrollHeight || 1000;

  // Scale between DOM pixels and canvas pixels
  const scaleY = canvasHeight / elementHeightPx;
  
  // Ratio between DOM pixels and PDF millimeters
  const mmPerDomPx = printWidthMm / elementWidthPx;
  const maxPageHeightDomPx = printHeightMm / mmPerDomPx;

  // Find all atomic blocks inside element:
  // 1. Header (.print-header)
  // 2. Question items (.worksheet-question-item)
  // 3. Footer (.print-footer)
  const header = element.querySelector ? element.querySelector('.print-header') : null;
  const questions = element.querySelectorAll ? Array.from(element.querySelectorAll('.worksheet-question-item')) : [];
  const footer = element.querySelector ? element.querySelector('.print-footer') : null;

  const blocks = [];

  if (header) {
    const r = header.getBoundingClientRect ? header.getBoundingClientRect() : { top: 0, bottom: 200, height: 200 };
    blocks.push({
      type: 'header',
      top: Math.max(0, r.top - elementRect.top),
      bottom: r.bottom - elementRect.top,
      height: r.height
    });
  }

  questions.forEach((qEl, idx) => {
    const r = qEl.getBoundingClientRect ? qEl.getBoundingClientRect() : { top: 220 + idx * 300, bottom: 500 + idx * 300, height: 280 };
    blocks.push({
      type: 'question',
      index: idx,
      top: Math.max(0, r.top - elementRect.top),
      bottom: r.bottom - elementRect.top,
      height: r.height
    });
  });

  if (footer) {
    const r = footer.getBoundingClientRect ? footer.getBoundingClientRect() : { top: elementHeightPx - 50, bottom: elementHeightPx, height: 50 };
    blocks.push({
      type: 'footer',
      top: Math.max(0, r.top - elementRect.top),
      bottom: r.bottom - elementRect.top,
      height: r.height
    });
  }

  // Fallback: if no blocks were found, use standard uniform height slicing
  if (blocks.length === 0) {
    const pages = [];
    let y = 0;
    while (y < elementHeightPx) {
      const sliceHeight = Math.min(maxPageHeightDomPx, elementHeightPx - y);
      pages.push({ startPx: y, endPx: y + sliceHeight });
      y += sliceHeight;
    }
    return { 
      pages, 
      scaleY, 
      mmPerDomPx, 
      printWidthMm, 
      printHeightMm,
      pageWidthMm, 
      pageHeightMm,
      marginTopMm, 
      marginBottomMm,
      marginLeftMm 
    };
  }

  // Smart Element-Aware Grouping:
  // Pack blocks into pages, cutting ONLY at gaps between blocks
  const pages = [];
  let currentPageBlocks = [];
  let pageStartPx = 0;

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];

    if (currentPageBlocks.length === 0) {
      // First block on this page (even if unusually tall, must start a page)
      currentPageBlocks.push(block);
      continue;
    }

    const proposedEndPx = block.bottom;
    const proposedHeight = proposedEndPx - pageStartPx;

    // Small tolerance (up to 20px ≈ 4.5mm) for trailing footers so we don't spawn a page just for 1 line
    const tolerance = block.type === 'footer' ? 25 : 0;

    if (proposedHeight <= maxPageHeightDomPx + tolerance) {
      // Block fits on current page
      currentPageBlocks.push(block);
    } else {
      // Block would overflow! Finalize current page and cut before this block.
      const prevBlock = currentPageBlocks[currentPageBlocks.length - 1];
      const cutPoint = Math.min(
        elementHeightPx,
        Math.round((prevBlock.bottom + block.top) / 2)
      );

      pages.push({
        startPx: pageStartPx,
        endPx: cutPoint,
        blocks: [...currentPageBlocks]
      });

      // Next page starts at the cut point
      pageStartPx = cutPoint;
      currentPageBlocks = [block];
    }
  }

  // Finalize the last page
  if (currentPageBlocks.length > 0) {
    pages.push({
      startPx: pageStartPx,
      endPx: elementHeightPx,
      blocks: [...currentPageBlocks]
    });
  }

  return { 
    pages, 
    scaleY, 
    mmPerDomPx, 
    printWidthMm, 
    printHeightMm,
    pageWidthMm, 
    pageHeightMm,
    marginTopMm, 
    marginBottomMm,
    marginLeftMm 
  };
}

/**
 * Exports a DOM element directly to a downloadable multi-page A4 PDF file.
 * Uses smart element-aware slicing so that questions and diagrams are NEVER cut in half.
 * 
 * @param {HTMLElement} element - The DOM element to capture (.printable-page)
 * @param {string} filename - Output PDF filename
 * @param {function} onProgress - Optional status callback
 * @returns {Promise<boolean>}
 */
export async function exportWorksheetToPdf(element, filename = 'Lembar_Kerja_Matematika.pdf', onProgress = null) {
  if (!element) return false;

  try {
    if (onProgress) onProgress('Menyiapkan dokumen & font...');

    // Wait for fonts to be ready
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }

    // Brief stabilization tick for KaTeX formulas and SVG rendering
    await new Promise(resolve => setTimeout(resolve, 150));

    if (onProgress) onProgress('Merender tampilan lembar kerja...');

    // Capture the entire element using html2canvas
    const canvas = await html2canvas(element, {
      scale: 2, // 2x for crisp print resolution
      useCORS: true,
      logging: false,
      backgroundColor: '#FFFFFF',
      windowWidth: element.scrollWidth || 880,
      onclone: (clonedDoc) => {
        // Ensure control bars and no-print items are strictly hidden
        const noPrintElements = clonedDoc.querySelectorAll('.no-print');
        noPrintElements.forEach(el => { el.style.display = 'none'; });
      }
    });

    if (onProgress) onProgress('Menganalisis batas butir soal...');

    // Calculate intelligent page cuts ensuring no question is cut
    const slicePlan = calculatePageSlices(element, canvas.width, canvas.height);
    const { 
      pages, 
      scaleY, 
      mmPerDomPx, 
      printWidthMm, 
      pageWidthMm, 
      pageHeightMm, 
      marginTopMm, 
      marginLeftMm 
    } = slicePlan;

    // Initialize jsPDF A4 document
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true
    });

    const totalPages = pages.length;

    for (let pageIndex = 0; pageIndex < totalPages; pageIndex++) {
      const page = pages[pageIndex];
      if (onProgress) {
        onProgress(`Menyusun halaman ${pageIndex + 1} dari ${totalPages}...`);
      }

      const canvasY = Math.max(0, Math.floor(page.startPx * scaleY));
      const canvasEndY = Math.min(canvas.height, Math.ceil(page.endPx * scaleY));
      const canvasSliceHeight = Math.max(1, canvasEndY - canvasY);

      // Create an individual sub-canvas for this page slice
      const pageCanvas = document.createElement('canvas');
      pageCanvas.width = canvas.width;
      pageCanvas.height = canvasSliceHeight;

      const ctx = pageCanvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
        ctx.drawImage(
          canvas,
          0, canvasY, canvas.width, canvasSliceHeight,
          0, 0, canvas.width, canvasSliceHeight
        );
      }

      const pageImgData = pageCanvas.toDataURL('image/jpeg', 0.96);
      const sliceHeightMm = (canvasSliceHeight / scaleY) * mmPerDomPx;

      if (pageIndex > 0) {
        pdf.addPage();
      }

      pdf.addImage(
        pageImgData,
        'JPEG',
        marginLeftMm,
        marginTopMm,
        printWidthMm,
        sliceHeightMm,
        undefined,
        'FAST'
      );

      // Add elegant page footer at the bottom margin
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(8);
      pdf.setTextColor(140, 140, 140);
      pdf.text(
        `AwesomeMathJ • Halaman ${pageIndex + 1} dari ${totalPages}`,
        pageWidthMm / 2,
        pageHeightMm - 6,
        { align: 'center' }
      );
    }

    if (onProgress) onProgress('Menyimpan file PDF...');
    pdf.save(filename);

    if (onProgress) onProgress('Selesai!');
    return true;
  } catch (err) {
    console.error('Gagal membuat PDF langsung:', err);
    throw err;
  }
}
