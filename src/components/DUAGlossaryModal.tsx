import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Volume2, 
  X, 
  Sparkles, 
  Shield, 
  HelpCircle, 
  MessageSquare,
  Scale,
  Gamepad2,
  Heart
} from 'lucide-react';
import { GlossaryTerm, AccessibilitySettings } from '../types';
import { DUA_GLOSSARY_TERMS } from '../data/duaGlossaryData';
import { SpeechService } from '../utils/speechUtils';
import { sounds } from '../utils/soundEffects';

interface DUAGlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: AccessibilitySettings;
}

export const DUAGlossaryModal: React.FC<DUAGlossaryModalProps> = ({
  isOpen,
  onClose,
  settings,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeReadingTermId, setActiveReadingTermId] = useState<string | null>(null);

  if (!isOpen) return null;

  const categories = [
    { id: 'all', label: 'Todos os Termos', icon: '✨' },
    { id: 'cyberbullying', label: 'Cyberbullying', icon: '🛡️' },
    { id: 'redes_sociais', label: 'Redes Sociais', icon: '📱' },
    { id: 'empatia', label: 'Empatia & Apoio', icon: '❤️' },
    { id: 'games', label: 'Jogos Online', icon: '🎮' },
    { id: 'legislacao', label: 'Leis & Direitos', icon: '⚖️' },
  ];

  const filteredTerms = DUA_GLOSSARY_TERMS.filter((item) => {
    const matchesSearch = 
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.simpleDefinition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.schoolExample.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const handleSpeakTerm = (term: GlossaryTerm) => {
    sounds.playClick();
    setActiveReadingTermId(term.id);
    SpeechService.speak(
      `${term.term}. ${term.simpleDefinition} ${term.schoolExample}`,
      settings.speechSpeed || 1.0,
      () => setActiveReadingTermId(null)
    );
  };

  return (
    <div 
      id="dua-glossary-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dua-glossary-modal-title"
    >
      <div 
        id="dua-glossary-modal-container"
        className={`w-full max-w-2xl max-h-[90vh] rounded-3xl p-5 sm:p-7 border flex flex-col shadow-2xl overflow-hidden transition-all ${
          settings.highContrast
            ? 'bg-black border-4 border-yellow-400 text-yellow-300'
            : 'bg-white border-slate-200 text-slate-800'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-3 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-[11px] font-black uppercase">
                <Sparkles className="w-3 h-3" /> Dicionário DUA
              </div>
              <h2 id="dua-glossary-modal-title" className="text-xl font-black text-slate-900 mt-0.5">
                Glossário da Cultura Digital
              </h2>
            </div>
          </div>

          <button
            id="btn-close-glossary"
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-all cursor-pointer"
            aria-label="Fechar glossário"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar & Category Chips */}
        <div className="py-4 space-y-3">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar gíria, conceito ou lei (Ex: Exposed, Sticker, Marco Civil)..."
              className={`w-full pl-10 pr-4 py-2.5 rounded-2xl text-xs sm:text-sm font-medium border transition-all ${
                settings.highContrast
                  ? 'bg-neutral-900 border-yellow-400 text-yellow-300 placeholder-yellow-600'
                  : 'bg-slate-50 border-slate-200 focus:bg-white focus:border-indigo-500 text-slate-800'
              }`}
            />
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  sounds.playClick();
                  setSelectedCategory(cat.id);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                  selectedCategory === cat.id
                    ? settings.highContrast
                      ? 'bg-yellow-400 text-black'
                      : 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Terms List Scrollable Area */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-1">
          {filteredTerms.length === 0 ? (
            <div className="text-center py-12 text-slate-400">
              <p className="text-sm font-bold">Nenhum termo encontrado para "{searchTerm}".</p>
              <p className="text-xs mt-1">Tente buscar por termos como Cyberbullying, Sticker ou Exposed.</p>
            </div>
          ) : (
            filteredTerms.map((term) => {
              const isReading = activeReadingTermId === term.id;
              return (
                <div
                  key={term.id}
                  id={`glossary-item-${term.id}`}
                  className={`p-4 rounded-2xl border transition-all ${
                    settings.highContrast
                      ? 'bg-neutral-900 border-yellow-700 text-yellow-300'
                      : 'bg-slate-50/80 border-slate-200/90 hover:border-indigo-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{term.icon}</span>
                      <div>
                        <h3 className="font-extrabold text-base text-slate-900">
                          {term.term}
                        </h3>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                          {term.category.replace('_', ' ')}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleSpeakTerm(term)}
                      className={`p-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                        isReading
                          ? 'bg-rose-600 text-white animate-pulse'
                          : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200'
                      }`}
                      title="Ouvir explicação em voz alta"
                      aria-label={`Ouvir definição de ${term.term}`}
                    >
                      <Volume2 className="w-4 h-4" />
                      <span className="text-[11px] hidden sm:inline">
                        {isReading ? 'Lendo...' : 'Ouvir'}
                      </span>
                    </button>
                  </div>

                  {/* Definition */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {term.simpleDefinition}
                  </p>

                  {/* School Example Box */}
                  <div className="mt-2.5 p-2.5 rounded-xl bg-white border border-slate-200/80 text-[11px] sm:text-xs text-slate-600 flex items-start gap-2">
                    <span className="text-amber-500 font-bold">💡</span>
                    <span>{term.schoolExample}</span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Note */}
        <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Princípio DUA: Múltiplos Meios de Representação</span>
          <button
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold transition-all cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
