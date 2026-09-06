import React, { useRef, useState, useEffect } from 'react';
import { 
  Pencil, 
  Eraser, 
  Trash2, 
  X, 
  Maximize2, 
  Minimize2,
  Undo
} from 'lucide-react';

/**
 * Papan Cakar / Scratchpad Digital
 * Kanvas coret-coret hitungan interaktif (pensil + penghapus) di layar HP/laptop
 * agar siswa tidak perlu repot mencari kertas buram saat berhitung.
 */
export function ScratchpadModal({ isOpen, onClose }) {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [mode, setMode] = useState('pencil'); // 'pencil' or 'eraser'
  const [lineWidth, setLineWidth] = useState(3);
  const [isMaximized, setIsMaximized] = useState(false);
  const historyRef = useRef([]);

  // Initialize canvas
  useEffect(() => {
    if (!isOpen) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Resize canvas to parent container
    const resizeCanvas = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      // Save current content
      const tempImage = ctx.getImageData(0, 0, canvas.width, canvas.height);
      canvas.width = rect.width;
      canvas.height = rect.height - 70; // deduct toolbar height
      
      // Fill clean paper white background
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw faint grid pattern like math graph paper
      ctx.strokeStyle = '#F3F4F6';
      ctx.lineWidth = 1;
      const gridSize = 24;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Restore image if width was previously set
      if (tempImage && tempImage.width > 0) {
        ctx.putImageData(tempImage, 0, 0);
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [isOpen, isMaximized]);

  // Coordinate helper
  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();

    if (e.touches && e.touches.length > 0) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top
      };
    }
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const { x, y } = getCoordinates(e);

    // Save snapshot for undo
    if (historyRef.current.length > 10) historyRef.current.shift();
    historyRef.current.push(ctx.getImageData(0, 0, canvas.width, canvas.height));

    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const { x, y } = getCoordinates(e);

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (mode === 'eraser') {
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = lineWidth * 5;
    } else {
      ctx.strokeStyle = '#1E3A8A'; // Academic navy pencil
      ctx.lineWidth = lineWidth;
    }

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.closePath();
    setIsDrawing(false);
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Save snapshot
    historyRef.current.push(ctx.getImageData(0, 0, canvas.width, canvas.height));

    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Redraw faint grid pattern
    ctx.strokeStyle = '#F3F4F6';
    ctx.lineWidth = 1;
    const gridSize = 24;
    for (let x = 0; x < canvas.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
  };

  const handleUndo = () => {
    if (historyRef.current.length === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const lastState = historyRef.current.pop();
    ctx.putImageData(lastState, 0, 0);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="editorial-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: isMaximized ? '96vw' : '88vw',
          maxWidth: isMaximized ? '1200px' : '780px',
          height: isMaximized ? '88vh' : '520px',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 'var(--shadow-elevated)',
          border: '1px solid var(--border-medium)',
          overflow: 'hidden',
          backgroundColor: '#FFFFFF',
          transition: 'all 0.2s ease'
        }}
      >
        {/* Header Toolbar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0.75rem 1.25rem',
          borderBottom: '1px solid var(--border-subtle)',
          backgroundColor: 'var(--bg-surface-elevated)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ fontSize: '1.25rem' }}>✏️</span>
            <div>
              <h4 style={{ fontSize: '0.95rem', margin: 0, color: 'var(--primary-navy)' }}>
                Papan Cakar Digital (Kertas Buram)
              </h4>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Gunakan jari di HP atau mouse di laptop untuk menghitung coret-coretan
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <button
              className="btn btn-outline"
              style={{ padding: '0.35rem 0.6rem', fontSize: '0.8rem' }}
              title={isMaximized ? "Perkecil" : "Perbesar Penuh"}
              onClick={() => setIsMaximized(!isMaximized)}
            >
              {isMaximized ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            </button>
            <button
              className="btn btn-outline"
              style={{ padding: '0.35rem 0.6rem', fontSize: '0.8rem' }}
              onClick={onClose}
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Tools Control Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#FAFAFA',
          borderBottom: '1px solid var(--border-subtle)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {/* Mode Pensil */}
            <button
              id="scratchpad-btn-pencil"
              className={`btn ${mode === 'pencil' ? 'btn-primary' : 'btn-outline'}`}
              style={{ padding: '0.35rem 0.75rem', fontSize: '0.85rem' }}
              onClick={() => setMode('pencil')}
            >
              <Pencil size={15} />
              Pensil
            </button>

            {/* Mode Penghapus */}
            <button
              id="scratchpad-btn-eraser"
              className={`btn ${mode === 'eraser' ? 'btn-primary' : 'btn-outline'}`}
              style={{ padding: '0.35rem 0.75rem', fontSize: '0.85rem' }}
              onClick={() => setMode('eraser')}
            >
              <Eraser size={15} />
              Penghapus
            </button>

            {/* Ketebalan */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginLeft: '0.5rem' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Tebal:</span>
              <input
                type="range"
                min="1"
                max="8"
                value={lineWidth}
                onChange={(e) => setLineWidth(Number(e.target.value))}
                style={{ width: '70px', accentColor: 'var(--primary-navy)', cursor: 'pointer' }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <button
              id="scratchpad-btn-undo"
              className="btn btn-outline"
              style={{ padding: '0.35rem 0.65rem', fontSize: '0.825rem' }}
              onClick={handleUndo}
              title="Undo Coretan Terakhir"
            >
              <Undo size={14} />
              Batal
            </button>
            <button
              id="scratchpad-btn-clear"
              className="btn btn-outline"
              style={{ padding: '0.35rem 0.65rem', fontSize: '0.825rem', color: 'var(--status-brick)' }}
              onClick={handleClear}
            >
              <Trash2 size={14} />
              Bersihkan
            </button>
          </div>
        </div>

        {/* Canvas Area */}
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden', touchAction: 'none' }}>
          <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
            style={{
              display: 'block',
              cursor: mode === 'eraser' ? 'cell' : 'crosshair',
              width: '100%',
              height: '100%'
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ScratchpadModal;
