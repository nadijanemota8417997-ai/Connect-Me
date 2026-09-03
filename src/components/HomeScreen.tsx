import React from 'react';
import { 
  Play, 
  Info, 
  Award, 
  Trophy, 
  ShieldAlert, 
  Sparkles, 
  Wifi, 
  Battery, 
  Signal, 
  GraduationCap,
  ChevronRight,
  CheckCircle2,
  Heart,
  Users,
  Volume2
} from 'lucide-react';
import { AppScreen, AccessibilitySettings, GradeLevel, RankingStudent } from '../types';
import { GRADES_METADATA, ALL_GRADES_LIST } from '../data/gradesMetadata';
import { scenariosData } from '../data/scenariosData';
import { initialRanking } from '../data/rankingData';
import { GradeSelector } from './GradeSelector';
import { sounds } from '../utils/soundEffects';
import { SpeechService } from '../utils/speechUtils';

import connectmeHeroImg from '../assets/images/connectme_hero_banner_1787761225876.jpg';

interface HomeScreenProps {
  onNavigate: (screen: AppScreen) => void;
  onOpenCredits: () => void;
  empathyScore: number;
  unlockedBadgesCount: number;
  totalBadgesCount: number;
  settings: AccessibilitySettings;
  selectedGrade: GradeLevel | 'all';
  onSelectGrade: (grade: GradeLevel | 'all') => void;
  playerName: string;
  onUpdatePlayerName: (name: string) => void;
  playerAvatar: string;
  onUpdatePlayerAvatar: (avatar: string) => void;
  onOpenPedagogicalModal?: () => void;
  onOpenGlossary?: () => void;
  completedGrades?: GradeLevel[];
  rankingList?: RankingStudent[];
}

const AVATAR_OPTIONS = ['🌟', '🚀', '🎨', '🛡️', '💡', '🦁', '🌸', '⚡', '🎧', '🎮'];

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onOpenCredits,
  empathyScore,
  unlockedBadgesCount,
  totalBadgesCount,
  settings,
  selectedGrade,
  onSelectGrade,
  playerName,
  onUpdatePlayerName,
  playerAvatar,
  onUpdatePlayerAvatar,
  onOpenPedagogicalModal,
  onOpenGlossary,
  completedGrades = [],
  rankingList = initialRanking,
}) => {
  const [nameError, setNameError] = React.useState<boolean>(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const currentGradeMeta = selectedGrade !== 'all' ? GRADES_METADATA[selectedGrade] : null;

  // Calculate live ranking list with current user's score
  const sortedRankList = React.useMemo(() => {
    return rankingList.map((st) => {
      if (st.isCurrentUser) {
        return {
          ...st,
          name: playerName?.trim() ? `${playerName.trim()} (Você)` : 'Você (Estudante Conectado)',
          avatar: playerAvatar || '🌟',
          empathyScore,
        };
      }
      return st;
    }).sort((a, b) => b.empathyScore - a.empathyScore);
  }, [rankingList, playerName, playerAvatar, empathyScore]);

  const userRankIndex = sortedRankList.findIndex(st => st.isCurrentUser);
  const userRankPosition = userRankIndex !== -1 ? userRankIndex + 1 : 1;
  const topThreeStudents = sortedRankList.slice(0, 3);

  const handleStartGame = () => {
    sounds.playClick();
    if (!playerName.trim()) {
      setNameError(true);
      if (inputRef.current) {
        inputRef.current.focus();
      }
      if (settings.autoReadTTS) {
        SpeechService.speak('Por favor, digite seu nome antes de iniciar o jogo.');
      }
      return;
    }
    setNameError(false);
    if (settings.autoReadTTS) {
      if (currentGradeMeta) {
        SpeechService.speak(`Bem-vindo, ${playerName}! Iniciando missões exclusivas do ${currentGradeMeta.name}. Pense antes de postar.`);
      } else {
        SpeechService.speak(`Bem-vindo, ${playerName}! Iniciando ConnectMe.`);
      }
    }
    onNavigate('game');
  };

  const handleSpeakTitle = () => {
    SpeechService.speak('ConnectMe. Conexão Ética. Pense antes de postar. Jogo escolar com missões exclusivas do 5º ao 9º ano para combater o cyberbullying com empatia.');
  };

  return (
    <div 
      id="home-screen-root"
      className={`relative min-h-[85vh] flex flex-col items-center justify-start p-3 sm:p-6 overflow-hidden select-none transition-colors ${
        settings.highContrast
          ? 'bg-black text-yellow-300'
          : 'bg-gradient-to-br from-indigo-50/70 via-sky-50/50 to-purple-50/60 text-slate-800'
      }`}
    >
      {/* Background Ambient Color Spots */}
      {!settings.highContrast && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-10 left-1/4 -translate-x-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-indigo-400/25 via-purple-400/20 to-pink-400/25 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute top-1/3 right-5 w-[550px] h-[400px] bg-gradient-to-br from-cyan-400/25 via-teal-300/20 to-emerald-400/25 blur-[90px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-10 left-10 w-[500px] h-[350px] bg-gradient-to-tr from-amber-300/20 via-rose-300/20 to-violet-400/20 blur-[90px] rounded-full pointer-events-none" />

          {/* Floating Gamified Emoji Badges with Colorful Shadows */}
          <div className="absolute top-10 left-8 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-indigo-200 shadow-[0_8px_20px_rgba(99,102,241,0.18)] text-xl animate-bounce duration-1000 hidden md:block">💬</div>
          <div className="absolute top-14 right-12 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-purple-200 shadow-[0_8px_20px_rgba(168,85,247,0.18)] text-xl animate-pulse hidden md:block">🤝</div>
          <div className="absolute bottom-28 left-12 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-rose-200 shadow-[0_8px_20px_rgba(244,63,94,0.18)] text-xl animate-pulse hidden md:block">❤️</div>
          <div className="absolute bottom-40 right-10 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-amber-200 shadow-[0_8px_20px_rgba(245,158,11,0.2)] text-xl hidden md:block">🏆</div>
          <div className="absolute top-1/2 left-4 -translate-y-1/2 p-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-cyan-200 shadow-[0_8px_20px_rgba(6,182,212,0.18)] text-lg hidden lg:block">🎮</div>
          <div className="absolute top-1/2 right-4 -translate-y-1/2 p-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-emerald-200 shadow-[0_8px_20px_rgba(16,185,129,0.18)] text-lg hidden lg:block">🛡️</div>
        </div>
      )}

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center gap-6">
        
        {/* Visual Hero Device Frame with Artwork */}
        <div 
          id="connectme-device-frame"
          className={`relative w-full max-w-[820px] rounded-[36px] sm:rounded-[44px] overflow-hidden transition-all border shadow-2xl ${
            settings.highContrast
              ? 'bg-black border-4 border-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.4)]'
              : 'bg-white border-indigo-200/80 shadow-[0_25px_60px_rgba(79,70,229,0.2)] ring-4 ring-indigo-500/10'
          }`}
        >
          {/* Top Status Bar */}
          <div className="w-full flex items-center justify-between px-6 pt-3.5 pb-2 text-xs tracking-wider text-slate-400 font-semibold bg-slate-950 text-white border-b border-indigo-900/40">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white tracking-normal">09:41</span>
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-xs">
                ConnectMe Escolar
              </span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Signal className="w-3.5 h-3.5 text-cyan-400" />
              <Wifi className="w-3.5 h-3.5 text-indigo-400" />
              <Battery className="w-4 h-4 text-emerald-400" />
            </div>
          </div>

          {/* Hero Banner Image & Overlay Content */}
          <div className="relative w-full min-h-[320px] sm:min-h-[370px] md:min-h-[410px] flex flex-col justify-end p-5 sm:p-8 overflow-hidden">
            {/* Background Cover Image */}
            <img 
              src={connectmeHeroImg}
              alt="Estudantes conectados com empatia no ConnectMe"
              referrerPolicy="no-referrer"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Rich Dynamic Colorful Gradient Overlays for maximum impact & contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-indigo-950/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/80 via-purple-950/40 to-cyan-950/60" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-pink-500/20 via-purple-500/10 to-transparent blur-2xl pointer-events-none" />

            {/* Foreground Content inside Hero */}
            <div className="relative z-10 flex flex-col items-start text-left max-w-xl">
              
              {/* Category Pill Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 backdrop-blur-md border border-white/30 text-white text-xs font-black tracking-wider uppercase mb-3 shadow-[0_4px_15px_rgba(168,85,247,0.4)]">
                <span className="text-sm">✨</span>
                <span>CONEXÃO ÉTICA • 5º AO 9º ANO</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              </div>

              {/* Main App Title with Colorful Multi-stop Gradient */}
              <div className="cursor-pointer group flex items-baseline gap-2.5" onClick={handleSpeakTitle}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
                  <span>Connect</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-pink-300 ml-1 drop-shadow-sm">
                    Me
                  </span>
                </h1>
                <button 
                  onClick={(e) => { e.stopPropagation(); handleSpeakTitle(); }}
                  className="p-2 rounded-full bg-white/15 hover:bg-white/30 text-cyan-200 hover:text-white backdrop-blur-md border border-cyan-400/40 transition-all shadow-md"
                  title="Ouvir introdução"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              {/* Subtitle */}
              <p className="mt-1 text-xs sm:text-sm font-black tracking-[0.22em] text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-emerald-300 uppercase drop-shadow-md">
                PENSE ANTES DE POSTAR • JOGO DE EMPATIA DIGITAL
              </p>

              <p className="mt-2 text-xs sm:text-sm text-slate-100 max-w-lg leading-relaxed font-medium drop-shadow-sm">
                Enfrente desafios reais de cyberbullying, figurinhas, jogos online, vídeos e fofocas anônimas com perguntas exclusivas para sua série!
              </p>

              {/* Player Name & Avatar Setup Area with Colorful Highlights */}
              <div 
                id="player-setup-card"
                className={`mt-4 w-full p-4 rounded-2xl border transition-all shadow-xl ${
                  nameError 
                    ? 'bg-rose-950/90 border-rose-400 ring-4 ring-rose-400/50 animate-pulse' 
                    : 'bg-slate-900/90 backdrop-blur-xl border-indigo-400/50 shadow-[0_10px_25px_rgba(0,0,0,0.3)] ring-1 ring-indigo-300/30'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <label htmlFor="player-name-input" className="text-xs font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-cyan-200 to-pink-200 flex items-center gap-1.5 uppercase tracking-wider">
                    <span className="text-sm">🎮</span>
                    <span>Identificação do(a) Jogador(a):</span>
                  </label>
                  {playerName.trim() ? (
                    <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-md border border-emerald-500/40 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Pronto(a)!
                    </span>
                  ) : (
                    <span className="text-[11px] font-bold text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded-md border border-amber-500/40">
                      Digite seu nome
                    </span>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                  <div className="relative flex-1">
                    <input
                      id="player-name-input"
                      ref={inputRef}
                      type="text"
                      maxLength={24}
                      value={playerName}
                      onChange={(e) => {
                        onUpdatePlayerName(e.target.value);
                        if (nameError && e.target.value.trim()) setNameError(false);
                      }}
                      placeholder="Digite seu nome (Ex: Mariana, Lucas...)"
                      className={`w-full px-4 py-2.5 rounded-xl text-sm font-semibold bg-white/10 border text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all ${
                        nameError ? 'border-rose-400 bg-rose-950/50' : 'border-indigo-300/40 hover:border-cyan-300/60'
                      }`}
                    />
                    {playerName && (
                      <button
                        type="button"
                        onClick={() => onUpdatePlayerName('')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white px-1.5 py-0.5 rounded-md hover:bg-white/10"
                        title="Limpar nome"
                      >
                        ✕
                      </button>
                    )}
                  </div>

                  {/* Colorful Avatar Picker with Fun Gradients */}
                  <div className="flex items-center gap-1.5 bg-white/10 p-1.5 rounded-xl border border-white/20 overflow-x-auto">
                    {AVATAR_OPTIONS.slice(0, 6).map((av, idx) => {
                      const isSelected = playerAvatar === av;
                      const avatarColors = [
                        'from-amber-400 to-yellow-500 shadow-amber-500/50',
                        'from-sky-400 to-blue-600 shadow-blue-500/50',
                        'from-pink-400 to-rose-600 shadow-pink-500/50',
                        'from-emerald-400 to-teal-600 shadow-emerald-500/50',
                        'from-violet-400 to-purple-600 shadow-purple-500/50',
                        'from-orange-400 to-amber-600 shadow-orange-500/50',
                      ];
                      const colorClass = avatarColors[idx % avatarColors.length];

                      return (
                        <button
                          key={av}
                          type="button"
                          onClick={() => {
                            sounds.playClick();
                            onUpdatePlayerAvatar(av);
                          }}
                          className={`w-8 h-8 rounded-lg flex items-center justify-center text-base transition-all cursor-pointer ${
                            isSelected 
                              ? `bg-gradient-to-tr ${colorClass} border-2 border-white text-lg scale-115 shadow-lg` 
                              : 'bg-white/10 hover:bg-white/20 opacity-75 hover:opacity-100 hover:scale-105'
                          }`}
                          title={`Escolher avatar ${av}`}
                        >
                          {av}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {nameError && (
                  <p className="mt-2 text-xs text-rose-300 font-bold flex items-center gap-1 animate-bounce">
                    ⚠️ Por favor, digite seu nome acima para iniciar as missões personalizadas!
                  </p>
                )}
              </div>

              {/* Selected Grade Notification Badge with Gradient */}
              {currentGradeMeta && (
                <div className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-gradient-to-r from-slate-900/90 to-indigo-950/90 backdrop-blur-md border border-cyan-400/40 text-white text-xs font-bold shadow-md">
                  <span className="text-slate-300">Série Selecionada:</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-300 font-black flex items-center gap-1 text-sm">
                    <span>{currentGradeMeta.badgeIcon}</span>
                    <span>{currentGradeMeta.name}</span>
                  </span>
                  <span className="text-indigo-200 font-normal">({currentGradeMeta.ageRange})</span>
                </div>
              )}

              {/* Action Buttons with Vibrant Colors */}
              <div className="mt-5 flex flex-wrap items-center gap-3 w-full">
                <button
                  id="btn-play-game"
                  onClick={handleStartGame}
                  className={`py-3.5 px-8 rounded-2xl font-black text-sm md:text-base tracking-wider uppercase flex items-center justify-center gap-2.5 transition-all transform hover:scale-105 active:scale-95 cursor-pointer shadow-[0_8px_30px_rgba(79,70,229,0.5)] ${
                    settings.highContrast
                      ? 'bg-yellow-400 text-black border-2 border-yellow-300'
                      : 'bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 hover:from-indigo-600 hover:via-purple-700 hover:to-pink-600 text-white border-2 border-white/30'
                  }`}
                  aria-label="Jogar Missões do ConnectMe"
                >
                  <Play className="w-5 h-5 fill-current text-yellow-300" />
                  <span>
                    {playerName.trim() 
                      ? (currentGradeMeta ? `JOGAR ${currentGradeMeta.name} (${playerName})` : `JOGAR COMO ${playerName}`) 
                      : (currentGradeMeta ? `JOGAR ${currentGradeMeta.name}` : 'JOGAR TODAS AS SÉRIES')}
                  </span>
                </button>

                <button
                  id="btn-open-credits"
                  onClick={() => {
                    sounds.playClick();
                    onOpenCredits();
                  }}
                  className={`py-3.5 px-6 rounded-2xl font-extrabold text-xs md:text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all transform hover:scale-105 active:scale-95 cursor-pointer border ${
                    settings.highContrast
                      ? 'bg-neutral-900 border-yellow-400 text-yellow-300'
                      : 'bg-white/20 hover:bg-white/30 text-white border-white/40 backdrop-blur-md shadow-lg hover:shadow-xl'
                  }`}
                  aria-label="Ver Créditos dos Criadores"
                >
                  <Info className="w-4 h-4 text-cyan-300" />
                  <span>CRÉDITOS</span>
                </button>
              </div>

            </div>
          </div>

          {/* Bottom Home Indicator */}
          <div className="w-full flex justify-center py-2 bg-slate-950 border-t border-slate-800">
            <div className="w-28 h-1 rounded-full bg-slate-700" />
          </div>
        </div>

        {/* Quick Highlights Bar with Vibrant Badges */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2.5 px-1">
          <div className="p-3 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-indigo-500/5 border border-indigo-200/80 flex items-center gap-2.5 shadow-xs">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-400 text-white flex items-center justify-center text-sm shadow-xs font-bold">
              50
            </div>
            <div>
              <p className="text-[10px] text-indigo-900 font-black uppercase tracking-wider">Desafios Reais</p>
              <p className="text-[11px] text-slate-600 font-semibold">5º ao 9º Ano</p>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/5 border border-emerald-200/80 flex items-center gap-2.5 shadow-xs">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 text-white flex items-center justify-center text-sm shadow-xs">
              🛡️
            </div>
            <div>
              <p className="text-[10px] text-emerald-900 font-black uppercase tracking-wider">Segurança</p>
              <p className="text-[11px] text-slate-600 font-semibold">Empatia Digital</p>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-gradient-to-r from-amber-500/10 to-yellow-500/5 border border-amber-200/80 flex items-center gap-2.5 shadow-xs">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-400 text-white flex items-center justify-center text-sm shadow-xs">
              🎓
            </div>
            <div>
              <p className="text-[10px] text-amber-900 font-black uppercase tracking-wider">Certificação</p>
              <p className="text-[11px] text-slate-600 font-semibold">Selo com seu Nome</p>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/5 border border-purple-200/80 flex items-center gap-2.5 shadow-xs">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 text-white flex items-center justify-center text-sm shadow-xs">
              ✨
            </div>
            <div>
              <p className="text-[10px] text-purple-900 font-black uppercase tracking-wider">Inclusivo</p>
              <p className="text-[11px] text-slate-600 font-semibold">DUA & BNCC</p>
            </div>
          </div>
        </div>

        {/* Certificate & Honor Seal Prize Invitation Banner */}
        {(() => {
          const isAllDone = completedGrades.length >= 5;
          return (
            <div 
              id="home-certificate-banner"
              onClick={() => {
                sounds.playClick();
                onNavigate('certificate');
              }}
              className={`w-full p-4 sm:p-5 rounded-3xl border transition-all hover:scale-[1.01] active:scale-99 cursor-pointer flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md ${
                settings.highContrast
                  ? 'bg-black border-2 border-yellow-400 text-yellow-300'
                  : isAllDone
                    ? 'bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-indigo-500/15 border-emerald-400/80 hover:border-emerald-500 shadow-emerald-500/10'
                    : 'bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-indigo-500/15 border-amber-300/80 hover:border-amber-400 shadow-amber-500/10'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-400 text-slate-950 flex items-center justify-center text-2xl shadow-md shrink-0">
                  {isAllDone ? '🎓' : '🏅'}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${
                      isAllDone 
                        ? 'bg-emerald-500/20 text-emerald-900 border-emerald-400/40' 
                        : 'bg-amber-500/20 text-amber-900 border-amber-400/40'
                    }`}>
                      {isAllDone ? '✓ Certificação Desbloqueada' : 'Premiação de Conclusão'}
                    </span>
                    <span className="text-xs text-amber-700 font-bold">
                      {isAllDone ? '★ Todas as 5 Séries Concluídas' : `${completedGrades.length}/5 Séries Concluídas`}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-black text-slate-900 mt-0.5">
                    {isAllDone 
                      ? 'Parabéns! Seu Certificado & Selo Oficial com seu Nome estão prontos!' 
                      : 'Conclua as 5 Séries (5º ao 9º Ano) para Ganhar seu Certificado & Selo!'}
                  </h3>
                  <p className="text-xs text-slate-600">
                    {isAllDone
                      ? 'Emita seu diploma oficial A4 para impressão e o selo digital personalizado.'
                      : 'Conclua todas as séries do Ensino Fundamental para desbloquear o diploma com seu nome e código de autenticidade.'}
                  </p>
                </div>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  sounds.playClick();
                  onNavigate('certificate');
                }}
                className={`px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 shadow-md transition-all shrink-0 cursor-pointer ${
                  isAllDone
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 text-white'
                    : 'bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-slate-950'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>{isAllDone ? 'Emitir Certificado' : 'Ver Progresso'}</span>
              </button>
            </div>
          );
        })()}

        {/* Dedicated Grade Selector Grid with Cover Images (5º, 6º, 7º, 8º, 9º Anos) */}
        <div 
          id="home-grade-selector-section"
          className="w-full bg-white/95 backdrop-blur-md border border-indigo-100 rounded-3xl p-4 sm:p-6 shadow-[0_10px_30px_rgba(99,102,241,0.08)]"
        >
          <GradeSelector
            selectedGrade={selectedGrade}
            onSelectGrade={onSelectGrade}
            settings={settings}
            compact={false}
          />
        </div>

        {/* Dedicated Top Rank Highlights Showcase Card */}
        <div 
          id="home-rank-preview-section"
          className={`w-full p-4 sm:p-6 rounded-3xl border transition-all ${
            settings.highContrast
              ? 'bg-black border-2 border-yellow-400 text-yellow-300'
              : 'bg-gradient-to-r from-amber-500/10 via-yellow-500/5 to-indigo-500/10 border-amber-300/80 shadow-md'
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-400 text-slate-950 flex items-center justify-center font-black shadow-md">
                <Trophy className="w-5 h-5 fill-slate-950" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-700">
                  Placar Geral • 5º ao 9º Ano
                </span>
                <h3 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                  Top Rank dos Defensores da Empatia
                </h3>
              </div>
            </div>

            {/* User Rank Position Pill & Button */}
            <div className="flex items-center gap-2">
              <div className="px-3 py-1.5 rounded-xl bg-white border border-amber-300 shadow-2xs text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <span className="text-amber-600 font-black">Sua Posição:</span>
                <span className="px-2 py-0.5 rounded-md bg-amber-500 text-slate-950 font-black text-xs">
                  #{userRankPosition}º Lugar
                </span>
              </div>
              <button
                id="btn-home-open-full-rank"
                onClick={() => {
                  sounds.playClick();
                  onNavigate('ranking');
                }}
                className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs flex items-center gap-1 shadow-sm transition-transform hover:scale-105 cursor-pointer"
              >
                <span>Ver Rank Completo</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick 3 Top Students preview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {topThreeStudents.map((st, i) => (
              <div 
                key={st.id}
                onClick={() => {
                  sounds.playClick();
                  onNavigate('ranking');
                }}
                className={`p-3 rounded-2xl border flex items-center justify-between gap-2.5 transition-all cursor-pointer hover:scale-[1.02] ${
                  st.isCurrentUser
                    ? 'bg-indigo-50 border-indigo-300 ring-2 ring-indigo-200'
                    : i === 0
                      ? 'bg-white border-amber-300 shadow-xs'
                      : 'bg-white/80 border-slate-200'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="text-base font-black shrink-0">
                    {i === 0 ? '🥇' : i === 1 ? '🥈' : '🥉'}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-sm shrink-0 border border-slate-200">
                    {st.avatar}
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-xs font-black text-slate-900 truncate">
                      {st.name}
                    </h5>
                    <p className="text-[10px] text-slate-500 truncate">{st.grade}</p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xs font-black text-amber-700">{st.empathyScore}</span>
                  <span className="block text-[9px] text-slate-400 font-bold uppercase">pts</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Colorful Quick Hub Navigation Cards */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          
          {/* Ranking Card - Gold Theme */}
          <button
            id="hub-btn-ranking"
            onClick={() => {
              sounds.playClick();
              onNavigate('ranking');
            }}
            className={`p-4 rounded-2xl border text-left transition-all hover:scale-[1.03] active:scale-98 cursor-pointer group shadow-sm hover:shadow-lg ${
              settings.highContrast
                ? 'bg-black border-yellow-400 text-yellow-300'
                : 'bg-gradient-to-br from-amber-400/15 via-yellow-500/10 to-white border-amber-300/80 hover:border-amber-500 text-slate-800 shadow-amber-500/10'
            }`}
          >
            <div className="flex items-center justify-between mb-2.5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-400 text-white flex items-center justify-center shadow-md shadow-amber-500/30 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <Trophy className="w-5 h-5 fill-current" />
              </div>
              <span className="text-[10px] font-black text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full border border-amber-200 uppercase tracking-wider">
                Rank #{userRankPosition}
              </span>
            </div>
            <h4 className="font-black text-xs sm:text-sm text-slate-900 group-hover:text-amber-700 transition-colors">
              Ranking Escolar (Rank)
            </h4>
            <p className="text-[11px] text-slate-600 mt-0.5 font-medium">
              Placar de empatia e posições
            </p>
          </button>

          {/* Badges Card - Electric Blue & Indigo Theme */}
          <button
            id="hub-btn-badges"
            onClick={() => {
              sounds.playClick();
              onNavigate('badges');
            }}
            className={`p-4 rounded-2xl border text-left transition-all hover:scale-[1.03] active:scale-98 cursor-pointer group shadow-sm hover:shadow-lg ${
              settings.highContrast
                ? 'bg-black border-yellow-400 text-yellow-300'
                : 'bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-white border-blue-300/80 hover:border-blue-500 text-slate-800 shadow-blue-500/10'
            }`}
          >
            <div className="flex items-center justify-between mb-2.5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/30 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-black text-blue-800 bg-blue-100 px-2 py-0.5 rounded-full border border-blue-200 uppercase tracking-wider">
                {unlockedBadgesCount}/{totalBadgesCount}
              </span>
            </div>
            <h4 className="font-black text-xs sm:text-sm text-slate-900 group-hover:text-blue-700 transition-colors">
              Medalhas Éticas
            </h4>
            <p className="text-[11px] text-slate-600 mt-0.5 font-medium">
              Conquistas e troféus
            </p>
          </button>

          {/* Anonymous Report Feed Card - Rose Theme */}
          <button
            id="hub-btn-reports"
            onClick={() => {
              sounds.playClick();
              onNavigate('reports');
            }}
            className={`p-4 rounded-2xl border text-left transition-all hover:scale-[1.03] active:scale-98 cursor-pointer group shadow-sm hover:shadow-lg ${
              settings.highContrast
                ? 'bg-black border-yellow-400 text-yellow-300'
                : 'bg-gradient-to-br from-rose-500/15 via-pink-500/10 to-white border-rose-300/80 hover:border-rose-500 text-slate-800 shadow-rose-500/10'
            }`}
          >
            <div className="flex items-center justify-between mb-2.5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-rose-500 to-pink-600 text-white flex items-center justify-center shadow-md shadow-rose-500/30 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-black text-rose-800 bg-rose-100 px-2 py-0.5 rounded-full border border-rose-200 uppercase tracking-wider">
                Seguro
              </span>
            </div>
            <h4 className="font-black text-xs sm:text-sm text-slate-900 group-hover:text-rose-700 transition-colors">
              Canal de Denúncia
            </h4>
            <p className="text-[11px] text-slate-600 mt-0.5 font-medium">
              100% Anônimo e acolhedor
            </p>
          </button>

          {/* DUA & Accessibility Quick Info - Emerald Theme */}
          <button
            id="hub-btn-dua"
            onClick={() => {
              sounds.playClick();
              if (onOpenPedagogicalModal) {
                onOpenPedagogicalModal();
              } else {
                SpeechService.speak('Desenho Universal para a Aprendizagem ativado com leitura em voz alta, modo simplificado e alto contraste.');
              }
            }}
            className={`p-4 rounded-2xl border text-left transition-all hover:scale-[1.03] active:scale-98 cursor-pointer group shadow-sm hover:shadow-lg ${
              settings.highContrast
                ? 'bg-black border-yellow-400 text-yellow-300'
                : 'bg-gradient-to-br from-emerald-500/15 via-teal-500/10 to-white border-emerald-300/80 hover:border-emerald-500 text-slate-800 shadow-emerald-500/10'
            }`}
          >
            <div className="flex items-center justify-between mb-2.5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500 text-white flex items-center justify-center shadow-md shadow-emerald-500/30 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-black text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-200 uppercase tracking-wider">
                DUA & BNCC
              </span>
            </div>
            <h4 className="font-black text-xs sm:text-sm text-slate-900 group-hover:text-emerald-700 transition-colors">
              Recursos DUA
            </h4>
            <p className="text-[11px] text-slate-600 mt-0.5 font-medium">
              Guia inclusivo e acessibilidade
            </p>
          </button>
        </div>

        {/* Creators Banner with Color Accents */}
        <div className="mt-1 w-full p-4 rounded-2xl bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 border border-indigo-200/80 shadow-xs flex flex-wrap items-center justify-center gap-2 text-center text-xs text-slate-700">
          <span className="font-bold text-slate-600 flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
            Desenvolvido com carinho por:
          </span>
          <span className="font-extrabold text-indigo-900 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-xl border border-indigo-200/80 shadow-2xs">
            AGATHA KAYLANNE • KAROLLAYNE • CHRISTOPHER • ISABELLA • SOFIA • LUIZ EDUARDO
          </span>
        </div>
      </div>
    </div>
  );
};
