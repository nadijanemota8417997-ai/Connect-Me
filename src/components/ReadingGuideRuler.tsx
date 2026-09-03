import React, { useState, useEffect } from 'react';

interface ReadingGuideRulerProps {
  enabled: boolean;
  highContrast: boolean;
}

export const ReadingGuideRuler: React.FC<ReadingGuideRulerProps> = ({ enabled, highContrast }) => {
  const [mouseY, setMouseY] = useState<number>(200);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMouseY(e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        setMouseY(e.touches[0].clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [enabled]);

  if (!enabled) return null;

  const rulerHeight = 64; // height of the reading focus band
  const topEdge = Math.max(0, mouseY - rulerHeight / 2);

  return (
    <div 
      id="reading-guide-ruler-overlay"
      className="fixed inset-0 pointer-events-none z-40 transition-opacity duration-200 select-none"
      aria-hidden="true"
    >
      {/* Top Mask / Dim */}
      <div 
        className={`absolute top-0 left-0 right-0 transition-all ${
          highContrast ? 'bg-black/40' : 'bg-slate-900/20'
        }`}
        style={{ height: `${topEdge}px` }}
      />

      {/* Focus Highlight Band */}
      <div 
        className={`absolute left-0 right-0 transition-all flex items-center justify-between px-4 border-y-2 ${
          highContrast 
            ? 'bg-yellow-400/15 border-yellow-400' 
            : 'bg-indigo-500/10 border-indigo-400/60 shadow-[0_0_15px_rgba(99,102,241,0.15)]'
        }`}
        style={{ 
          top: `${topEdge}px`,
          height: `${rulerHeight}px` 
        }}
      >
        <div className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded ${
          highContrast ? 'bg-yellow-400 text-black' : 'bg-indigo-600 text-white'
        }`}>
          📏 Régua DUA
        </div>
        <div className={`text-[10px] font-bold ${
          highContrast ? 'text-yellow-300' : 'text-indigo-600'
        }`}>
          Foco de Leitura
        </div>
      </div>

      {/* Bottom Mask / Dim */}
      <div 
        className={`absolute left-0 right-0 bottom-0 transition-all ${
          highContrast ? 'bg-black/40' : 'bg-slate-900/20'
        }`}
        style={{ top: `${topEdge + rulerHeight}px` }}
      />
    </div>
  );
};
