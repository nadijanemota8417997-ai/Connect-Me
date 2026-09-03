import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Award, 
  Lock, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  Users, 
  Volume2, 
  Info,
  X,
  GraduationCap,
  Medal,
  ChevronRight
} from 'lucide-react';
import { Badge, AccessibilitySettings, GradeLevel } from '../types';
import { sounds } from '../utils/soundEffects';
import { SpeechService } from '../utils/speechUtils';

interface BadgesScreenProps {
  badges: Badge[];
  settings: AccessibilitySettings;
  empathyScore: number;
  playerName?: string;
  playerAvatar?: string;
  onNavigateToCertificate?: () => void;
  completedGrades?: GradeLevel[];
}

export const BadgesScreen: React.FC<BadgesScreenProps> = ({
  badges,
  settings,
  empathyScore,
  playerName,
  playerAvatar,
  onNavigateToCertificate,
  completedGrades = [],
}) => {
  const [selectedBadge, setSelectedBadge] = useState<Badge | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');

  const displayName = playerName?.trim() || 'Estudante Conectado';

  const categories = ['Todas', 'Empatia', 'Inclusão', 'Coragem', 'Acessibilidade', 'Liderança'];

  const filteredBadges = selectedCategory === 'Todas'
    ? badges
    : badges.filter(b => b.category === selectedCategory);

  const unlockedCount = badges.filter(b => b.unlocked).length;

  const handleInspectBadge = (badge: Badge) => {
    sounds.playClick();
    setSelectedBadge(badge);

    if (badge.unlocked) {
      sounds.playBadgeFanfare();
      confetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.6 }
      });
    }

    if (settings.autoReadTTS) {
      SpeechService.speak(`Medalha: ${badge.title}. ${badge.description}. Status: ${badge.unlocked ? 'Desbloqueada!' : 'Em progresso.'}`);
    }
  };

  return (
    <div 
      id="badges-screen-container"
      className={`min-h-[85vh] p-4 sm:p-6 max-w-5xl mx-auto transition-colors ${
        settings.highContrast ? 'text-yellow-300' : 'text-slate-800'
      }`}
    >
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider mb-1">
            <Award className="w-4 h-4" />
            Galeria de Conquistas Éticas
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Sistema de Medalhas & Empatia
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Incentivando comportamentos colaborativos, acolhimento e respeito no ambiente escolar.
          </p>
        </div>

        {/* Status Counter Card */}
        <div className={`p-4 rounded-2xl border flex items-center gap-4 shrink-0 ${
          settings.highContrast 
            ? 'bg-black border-2 border-yellow-400' 
            : 'bg-white border-slate-200 shadow-sm text-slate-800'
        }`}>
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-2xl">
            🎖️
          </div>
          <div>
            <div className="text-[11px] font-bold text-slate-400 uppercase">Medalhas Conquistadas</div>
            <div className="text-xl font-black text-indigo-900">
              {unlockedCount} <span className="text-xs text-slate-400 font-normal">de {badges.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Top Banner with Custom Seal Showcase */}
      {onNavigateToCertificate && (
        <div 
          onClick={() => {
            sounds.playClick();
            onNavigateToCertificate();
          }}
          className={`mb-6 p-4 sm:p-5 rounded-3xl border transition-all hover:scale-[1.01] active:scale-99 cursor-pointer flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md ${
            settings.highContrast
              ? 'bg-black border-2 border-yellow-400 text-yellow-300'
              : completedGrades.length >= 5
                ? 'bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-indigo-500/15 border-emerald-400/80 shadow-emerald-500/10'
                : 'bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-indigo-500/15 border-amber-300/80 shadow-amber-500/10'
          }`}
        >
          <div className="flex items-center gap-3.5">
            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-300 to-amber-600 text-slate-950 flex items-center justify-center text-2xl shadow-lg border-2 border-yellow-200 shrink-0">
              {playerAvatar || '🌟'}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${
                  completedGrades.length >= 5
                    ? 'bg-emerald-500/20 text-emerald-900 border-emerald-400/40'
                    : 'bg-amber-500/20 text-amber-900 border-amber-400/40'
                }`}>
                  {completedGrades.length >= 5 ? '✓ Conclusão Integral' : 'Selo de Honra & Diploma'}
                </span>
                <span className="text-xs text-amber-700 font-bold">
                  {completedGrades.length >= 5 ? '★ Todas as 5 Séries Concluídas' : `${completedGrades.length}/5 Séries Concluídas`}
                </span>
              </div>
              <h3 className="text-base font-black text-slate-900 mt-0.5">
                {completedGrades.length >= 5
                  ? `Certificado Escolar & Selo com o Nome de ${displayName}`
                  : `Conclua todas as 5 séries para emitir o Diploma de ${displayName}`}
              </h3>
              <p className="text-xs text-slate-600">
                {completedGrades.length >= 5
                  ? 'Acesse o diploma oficial em formato A4 e o selo digital personalizado com seu nome e código de autenticidade.'
                  : 'O Certificado Oficial e o Selo Digital são liberados ao concluir todas as etapas do 5º ao 9º ano.'}
              </p>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              sounds.playClick();
              onNavigateToCertificate();
            }}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md shrink-0 cursor-pointer"
          >
            <GraduationCap className="w-4 h-4" />
            <span>{completedGrades.length >= 5 ? 'Ver Certificado & Selo' : 'Ver Progresso'}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Categories Filter Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              sounds.playClick();
              setSelectedCategory(cat);
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap border ${
              selectedCategory === cat
                ? settings.highContrast
                  ? 'bg-yellow-400 text-black border-yellow-400'
                  : 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredBadges.map((badge) => (
          <div
            key={badge.id}
            id={`badge-card-${badge.id}`}
            onClick={() => handleInspectBadge(badge)}
            className={`p-5 rounded-3xl border transition-all cursor-pointer relative flex flex-col justify-between group hover:scale-[1.02] ${
              badge.unlocked
                ? settings.highContrast
                  ? 'bg-neutral-900 border-2 border-yellow-400 text-yellow-300'
                  : 'bg-white border-2 border-indigo-100 shadow-sm hover:border-indigo-400 hover:shadow-md'
                : 'bg-slate-50 border-slate-200 opacity-70 hover:opacity-90'
            }`}
          >
            {/* Top Tag */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-indigo-700">
                {badge.category}
              </span>
              {badge.unlocked ? (
                <span className="p-1 rounded-full bg-emerald-50 text-emerald-700 text-xs border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </span>
              ) : (
                <span className="p-1 rounded-full bg-slate-200 text-slate-500 text-xs">
                  <Lock className="w-3.5 h-3.5" />
                </span>
              )}
            </div>

            {/* Icon & Title */}
            <div className="text-center my-2">
              <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-3xl mb-2.5 transition-transform group-hover:scale-110 ${
                badge.unlocked
                  ? 'bg-indigo-50 border border-indigo-200 shadow-inner'
                  : 'bg-slate-100 border border-slate-200 text-slate-400 grayscale'
              }`}>
                {badge.icon}
              </div>
              <h3 className="font-bold text-sm text-slate-900 leading-tight">
                {badge.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-xs text-slate-500 text-center line-clamp-2 my-2">
              {badge.description}
            </p>

            {/* Progress / Status */}
            <div className="mt-2 pt-2.5 border-t border-slate-100">
              <div className="flex items-center justify-between text-[10px] font-bold mb-1">
                <span className="text-slate-400">Progresso</span>
                <span className={badge.unlocked ? 'text-emerald-600' : 'text-slate-400'}>
                  {badge.progress} / {badge.maxProgress}
                </span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all ${
                    badge.unlocked ? 'bg-indigo-600' : 'bg-slate-400'
                  }`}
                  style={{ width: `${(badge.progress / badge.maxProgress) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Inspect Badge Modal */}
      {selectedBadge && (
        <div 
          id="badge-inspect-modal-overlay"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedBadge(null)}
        >
          <div 
            id="badge-inspect-modal"
            className={`w-full max-w-sm rounded-3xl p-6 border shadow-2xl text-center relative ${
              selectedBadge.unlocked
                ? settings.highContrast
                  ? 'bg-black border-4 border-yellow-400 text-yellow-300'
                  : 'bg-white border-indigo-200 text-slate-800'
                : 'bg-white border-slate-200 text-slate-800'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedBadge(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-20 h-20 mx-auto rounded-3xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-4xl mb-3 shadow-inner">
              {selectedBadge.icon}
            </div>

            <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 inline-block mb-2">
              {selectedBadge.category}
            </span>

            <h3 className="text-xl font-black text-slate-900 mb-2">
              {selectedBadge.title}
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              {selectedBadge.description}
            </p>

            <div className="p-3 rounded-2xl bg-indigo-50/70 border border-indigo-100 mb-4 text-xs">
              <div className="text-slate-500 mb-1">Recompensa Ética:</div>
              <div className="font-bold text-indigo-700 flex items-center justify-center gap-1">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                +{selectedBadge.rewardXP} XP de Colaboração
              </div>
            </div>

            <button
              onClick={() => {
                sounds.playClick();
                setSelectedBadge(null);
              }}
              className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition-all shadow-sm"
            >
              Fechar Detalhes
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
