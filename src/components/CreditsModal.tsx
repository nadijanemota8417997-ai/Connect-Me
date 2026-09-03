import React from 'react';
import { X, Award, Users, Heart, Sparkles, BookOpen, ShieldCheck } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface CreditsModalProps {
  isOpen: boolean;
  onClose: () => void;
  highContrast?: boolean;
}

export const CreditsModal: React.FC<CreditsModalProps> = ({ isOpen, onClose, highContrast }) => {
  if (!isOpen) return null;

  const creators = [
    { name: 'AGATHA KAYLANNE', role: 'Design & Concepção de Roteiros', avatar: '🎨' },
    { name: 'KAROLLAYNE', role: 'Pesquisa & Empatia Escolar', avatar: '✨' },
    { name: 'CHRISTOPHER', role: 'Lógica dos Cenários & Estratégia', avatar: '🚀' },
    { name: 'ISABELLA', role: 'Mediação Ética & Comunicação', avatar: '📚' },
    { name: 'SOFIA', role: 'Acessibilidade & DUA na Educação', avatar: '🌸' },
    { name: 'LUIZ EDUARDO', role: 'Engajamento & Dinâmica de Jogo', avatar: '⚽' },
  ];

  return (
    <div 
      id="credits-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        id="credits-modal-card"
        className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 md:p-8 shadow-2xl border transition-all ${
          highContrast 
            ? 'bg-black text-yellow-300 border-yellow-400' 
            : 'bg-white text-slate-800 border-slate-200 shadow-2xl'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          id="btn-close-credits"
          onClick={() => {
            sounds.playClick();
            onClose();
          }}
          className={`absolute top-5 right-5 p-2 rounded-full transition-all ${
            highContrast
              ? 'bg-yellow-400 text-black hover:bg-yellow-300'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 hover:scale-105'
          }`}
          aria-label="Fechar créditos"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Projeto Escolar Conexão Ética
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 mb-2">
            Connect<span className="text-indigo-600">Me</span>
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-md mx-auto">
            Jogo educativo contra o Cyberbullying baseado em Empatia e Desenho Universal para a Aprendizagem (DUA).
          </p>
        </div>

        {/* Creators Grid */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3 text-indigo-600 text-xs font-bold uppercase tracking-wider">
            <Users className="w-4 h-4" />
            Equipe Criadora & Idealizadores
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {creators.map((creator) => (
              <div
                key={creator.name}
                className={`flex items-center gap-3.5 p-3.5 rounded-2xl border transition-all ${
                  highContrast
                    ? 'bg-neutral-900 border-yellow-400/60 text-yellow-300'
                    : 'bg-white border-slate-200 shadow-sm hover:border-indigo-300 hover:bg-indigo-50/30'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-xl border border-indigo-200 shadow-inner">
                  {creator.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 tracking-wide">
                    {creator.name}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {creator.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pillars / Principles */}
        <div className={`p-4 rounded-2xl border mb-6 ${
          highContrast ? 'bg-neutral-900 border-yellow-400' : 'bg-indigo-50 border-indigo-100'
        }`}>
          <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-900 mb-2 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-indigo-600" />
            Princípios Pedagógicos & DUA
          </h4>
          <ul className="space-y-1.5 text-xs text-slate-700">
            <li className="flex items-start gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-600 mt-0.5 shrink-0" />
              <span><strong>Empatia Ativa:</strong> Tomada de decisão consciente com consequências lógicas e emocionais reais.</span>
            </li>
            <li className="flex items-start gap-2">
              <Heart className="w-3.5 h-3.5 text-rose-500 mt-0.5 shrink-0" />
              <span><strong>Inclusão & DUA:</strong> Múltiplas formas de representação, leitura em voz alta e comandos de voz.</span>
            </li>
            <li className="flex items-start gap-2">
              <Award className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
              <span><strong>Cultura de Paz:</strong> Canal de escuta anônima com acolhimento pedagógico e mediação escolar.</span>
            </li>
          </ul>
        </div>

        {/* Footer info */}
        <div className="text-center pt-2 border-t border-slate-100">
          <p className="text-[11px] text-slate-400">
            "Pense antes de postar. Um ambiente digital saudável começa na empatia de cada escolha."
          </p>
          <button
            id="btn-close-credits-bottom"
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            className="mt-4 px-6 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm transition-all shadow-sm"
          >
            Voltar ao Jogo
          </button>
        </div>
      </div>
    </div>
  );
};
