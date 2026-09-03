import React from 'react';
import confetti from 'canvas-confetti';
import { 
  Trophy, 
  Award, 
  RotateCcw, 
  Heart, 
  Sparkles, 
  ShieldCheck, 
  Share2, 
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Crown
} from 'lucide-react';
import { Badge, AccessibilitySettings, GradeLevel } from '../types';
import { sounds } from '../utils/soundEffects';
import { SpeechService } from '../utils/speechUtils';

interface SummaryScreenProps {
  empathyScore: number;
  badges: Badge[];
  settings: AccessibilitySettings;
  playerName?: string;
  playerAvatar?: string;
  onRestart: () => void;
  onViewRanking: () => void;
  onOpenCredits: () => void;
  onViewCertificate?: () => void;
  completedGrades?: GradeLevel[];
  selectedGrade?: GradeLevel | 'all';
}

export const SummaryScreen: React.FC<SummaryScreenProps> = ({
  empathyScore,
  badges,
  settings,
  playerName,
  playerAvatar,
  onRestart,
  onViewRanking,
  onOpenCredits,
  onViewCertificate,
  completedGrades = [],
  selectedGrade = 'all',
}) => {
  const unlockedBadges = badges.filter(b => b.unlocked);
  const displayName = playerName?.trim() || 'Estudante Conectado';

  const gradeName = selectedGrade !== 'all' ? `${selectedGrade}º Ano` : 'Ensino Fundamental';

  const isTopMaster = completedGrades.length >= 5;

  const handleCelebrate = () => {
    sounds.playBadgeFanfare();
    confetti({
      particleCount: isTopMaster ? 150 : 80,
      spread: isTopMaster ? 100 : 70,
      origin: { y: 0.6 }
    });
    if (settings.autoReadTTS) {
      if (isTopMaster) {
        SpeechService.speak(`Parabéns, ${displayName}! Você concluiu todas as 5 séries escolares e conquistou o Título de Top Master em Cidadania e Empatia Digital! Seu Certificado Oficial e Selo de Honra com o título estão liberados.`);
      } else {
        SpeechService.speak(`Parabéns, ${displayName}! Você concluiu os desafios do ${gradeName} com ${empathyScore} pontos de empatia. Seu Certificado e Selo de Honra estão liberados!`);
      }
    }
  };

  React.useEffect(() => {
    handleCelebrate();
  }, []);

  return (
    <div 
      id="summary-screen-container"
      className={`min-h-[90vh] p-4 sm:p-6 max-w-3xl mx-auto flex flex-col items-center justify-center text-center transition-colors ${
        settings.highContrast ? 'text-yellow-300' : 'text-white'
      }`}
    >
      {/* Certificate / Trophy Card */}
      <div 
        id="completion-certificate-card"
        className={`w-full rounded-3xl p-6 sm:p-8 border shadow-2xl relative overflow-hidden transition-all ${
          settings.highContrast
            ? 'bg-black border-4 border-yellow-400 text-yellow-300'
            : 'bg-gradient-to-b from-[#141b4d] via-[#0d102c] to-[#0a0d24] border-cyan-400/50 shadow-[0_0_60px_rgba(6,182,212,0.3)]'
        }`}
      >
        {/* Top Glow & Badge */}
        <div className="w-20 h-20 mx-auto rounded-3xl bg-cyan-500/20 border-2 border-cyan-400/60 flex items-center justify-center text-4xl mb-4 shadow-[0_0_30px_rgba(6,182,212,0.5)]">
          {playerAvatar || '🎓'}
        </div>

        {isTopMaster ? (
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 text-slate-950 text-xs sm:text-sm font-black uppercase tracking-wider mb-3 shadow-lg animate-bounce">
            <Crown className="w-4 h-4 text-slate-950 fill-amber-950" />
            <span>TÍTULO DE TOP MASTER CONQUISTADO! (5 SÉRIES)</span>
            <Crown className="w-4 h-4 text-slate-950 fill-amber-950" />
          </div>
        ) : (
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/50 text-amber-300 text-xs font-black uppercase tracking-wider mb-2 animate-pulse">
            <Sparkles className="w-4 h-4 text-amber-400" />
            Certificado & Selo de Honra Liberados!
          </div>
        )}

        <h2 className="text-2xl sm:text-4xl font-black text-white mb-1">
          Parabéns, {displayName}!
        </h2>
        <p className="text-sm font-bold text-cyan-300 mb-2">
          {isTopMaster 
            ? 'Top Master da Cidadania & Empatia Digital • 5º ao 9º Ano' 
            : `Defensor(a) Oficial da Empatia Digital • ${gradeName}`}
        </p>
        <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mb-4">
          {isTopMaster
            ? 'Você completou com louvor todas as 5 séries formativas, provando maturidade, respeito e liderança exemplar em todo o ambiente escolar virtual!'
            : 'Você demonstrou que pensar antes de postar, acolher vítimas e recusar fofocas transforma a escola em um lugar mais seguro e feliz.'}
        </p>

        {/* Certificate Unlocked Notice */}
        <div className="mb-6 p-3 rounded-2xl bg-amber-500/15 border border-amber-400/40 text-amber-200 text-xs font-medium max-w-lg mx-auto flex items-center justify-center gap-2">
          <Award className="w-5 h-5 text-amber-400 shrink-0" />
          <span>
            {isTopMaster ? (
              <>
                Seu <strong>Certificado Oficial com Título de Top Master</strong> e o <strong>Selo de Mérito</strong> foram outorgados com honra máxima!
              </>
            ) : (
              <>
                Seu <strong>Certificado Oficial</strong> e o <strong>Selo de Mérito com seu nome</strong> foram liberados com sucesso!
              </>
            )}
          </span>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-2.5 mb-6 max-w-lg mx-auto">
          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-xl sm:text-2xl font-black text-cyan-300">
              {empathyScore}
            </div>
            <div className="text-[10px] font-bold text-slate-400 uppercase mt-0.5">
              Pts Empatia
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-xl sm:text-2xl font-black text-amber-400">
              {unlockedBadges.length}
            </div>
            <div className="text-[10px] font-bold text-slate-400 uppercase mt-0.5">
              Medalhas
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/5 border border-amber-400/30 bg-amber-400/10">
            <div className="text-xl sm:text-2xl font-black text-amber-300">
              #1º Rank
            </div>
            <div className="text-[10px] font-bold text-amber-200 uppercase mt-0.5">
              Posição Rank
            </div>
          </div>
        </div>

        {/* Unlocked Badges Preview */}
        <div className="mb-6">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            Medalhas em Destaque:
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {unlockedBadges.map(b => (
              <span 
                key={b.id}
                className="px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-xs font-bold text-cyan-200 flex items-center gap-1.5"
              >
                <span>{b.icon}</span>
                <span>{b.title}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-white/10">
          {onViewCertificate && (
            <button
              id="btn-summary-certificate"
              onClick={() => {
                sounds.playBadgeFanfare();
                onViewCertificate();
              }}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 shadow-[0_0_25px_rgba(245,158,11,0.7)] hover:brightness-110 transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              <GraduationCap className="w-4 h-4" />
              <span>
                Emitir Certificado & Selo com Meu Nome
              </span>
            </button>
          )}

          <button
            id="btn-summary-ranking"
            onClick={() => {
              sounds.playClick();
              onViewRanking();
            }}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.5)] hover:brightness-110 transition-all cursor-pointer"
          >
            <Trophy className="w-4 h-4 text-slate-950 fill-slate-950" />
            <span>Ver Ranking / Placar</span>
          </button>

          <button
            id="btn-summary-restart"
            onClick={() => {
              sounds.playClick();
              onRestart();
            }}
            className="px-5 py-2.5 rounded-xl border border-white/20 hover:bg-white/10 text-xs font-bold text-slate-300 flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Jogar Novamente</span>
          </button>
        </div>

        {/* School Creators Credit */}
        <div className="mt-6 pt-4 border-t border-white/5 text-center text-[11px] text-slate-400">
          Iniciativa ConnectMe • Criado por Agatha Kaylanne, Karollayne, Christopher, Isabella, Sofia, Luiz Eduardo
        </div>
      </div>
    </div>
  );
};
