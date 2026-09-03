import React, { useState, useEffect } from 'react';
import { sounds, SoundEvent } from '../utils/soundEffects';

interface VisualSoundToastProps {
  enabled: boolean;
  highContrast: boolean;
}

export const VisualSoundToast: React.FC<VisualSoundToastProps> = ({ enabled, highContrast }) => {
  const [currentEvent, setCurrentEvent] = useState<SoundEvent | null>(null);

  useEffect(() => {
    const unsubscribe = sounds.subscribe((event) => {
      if (!enabled) return;
      // Filter out click sounds from flood if needed, or show brief tag
      if (event.type === 'info') return; // keep it clean for high-importance sounds
      setCurrentEvent(event);
      const timer = setTimeout(() => {
        setCurrentEvent(null);
      }, 2400);
      return () => clearTimeout(timer);
    });
    return () => unsubscribe();
  }, [enabled]);

  if (!enabled || !currentEvent) return null;

  const bgStyles = {
    success: highContrast ? 'bg-black border-2 border-yellow-400 text-yellow-300' : 'bg-emerald-950/90 border-emerald-500 text-white shadow-emerald-500/20',
    empathy: highContrast ? 'bg-black border-2 border-yellow-400 text-yellow-300' : 'bg-pink-950/90 border-pink-500 text-white shadow-pink-500/20',
    warning: highContrast ? 'bg-black border-2 border-yellow-400 text-yellow-300' : 'bg-amber-950/90 border-amber-500 text-white shadow-amber-500/20',
    fanfare: highContrast ? 'bg-black border-2 border-yellow-400 text-yellow-300' : 'bg-purple-950/90 border-purple-500 text-white shadow-purple-500/20',
    info: highContrast ? 'bg-black border-2 border-yellow-400 text-yellow-300' : 'bg-slate-900/90 border-slate-600 text-white shadow-slate-500/20',
  }[currentEvent.type];

  return (
    <div 
      id="visual-sound-caption-toast"
      className="fixed top-4 right-4 z-50 pointer-events-none animate-fadeIn"
      role="status"
      aria-live="polite"
    >
      <div className={`px-4 py-2.5 rounded-2xl border backdrop-blur-md shadow-xl flex items-center gap-2.5 text-xs font-bold ${bgStyles}`}>
        <span className="text-base">{currentEvent.icon}</span>
        <div className="flex flex-col">
          <span className="font-extrabold">{currentEvent.title}</span>
          <span className="text-[11px] font-normal opacity-90">{currentEvent.description}</span>
        </div>
      </div>
    </div>
  );
};
