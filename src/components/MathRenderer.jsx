import React, { useMemo } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

/**
 * Komponen MathRenderer:
 * Mengurai string yang berisi kombinasi teks dan rumus matematika LaTeX:
 * - $rumus$ -> inline math
 * - $$rumus$$ -> display/block math
 * Aman dari error parsing dan mempertahankan baris baru.
 */
export function MathText({ text = "", className = "" }) {
  const renderedElements = useMemo(() => {
    if (!text || typeof text !== "string") return null;

    let processedText = text;
    // Auto-detect: Jika teks mengandung perintah LaTeX umum dan tidak memiliki $
    const latexPatterns = [/\\frac/, /\\times/, /\\sum/, /\\int/, /\\sqrt/, /\\alpha/, /\\beta/, /\\gamma/, /\\theta/];
    const hasDelimiters = /\$[\s\S]*?\$|\$\$[\s\S]*?\$\$/.test(processedText);
    
    if (!hasDelimiters && latexPatterns.some(p => p.test(processedText))) {
      processedText = `$${processedText}$`;
    }

    // Pisahkan teks berdasarkan pola $...$ atau $$...$$
    // Regex menangkap $$...$$ atau $...$
    const regex = /(\$\$[\s\S]*?\$\$|\$[^$\n]+?\$)/g;
    const parts = processedText.split(regex);

    return parts.map((part, index) => {
      if (!part) return null;

      if (part.startsWith("$$") && part.endsWith("$$")) {
        const mathContent = part.slice(2, -2).trim();
        try {
          const html = katex.renderToString(mathContent, {
            displayMode: true,
            throwOnError: false
          });
          return (
            <div
              key={`math-block-${index}`}
              className="my-2 overflow-x-auto text-center py-1"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch {
          return <code key={index} className="text-red-500">{part}</code>;
        }
      }

      if (part.startsWith("$") && part.endsWith("$")) {
        const mathContent = part.slice(1, -1).trim();
        try {
          const html = katex.renderToString(mathContent, {
            displayMode: false,
            throwOnError: false
          });
          return (
            <span
              key={`math-inline-${index}`}
              className="inline-block px-0.5"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch {
          return <code key={index} className="text-red-500">{part}</code>;
        }
      }

      // Teks biasa: tangani baris baru (\n)
      const lines = part.split("\n");
      return (
        <span key={`text-${index}`}>
          {lines.map((line, lIdx) => (
            <React.Fragment key={lIdx}>
              {line}
              {lIdx < lines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </span>
      );
    });
  }, [text]);

  return <div className={`math-rendered-content ${className}`}>{renderedElements}</div>;
}

export default MathText;
