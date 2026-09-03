import React from 'react';
import { 
  ArrowLeft, 
  Home, 
  Gamepad2, 
  Award, 
  Trophy, 
  ShieldAlert, 
  Info, 
  Sparkles, 
  Heart, 
  UserCheck,
  GraduationCap
} from 'lucide-react';
import { AppScreen, AccessibilitySettings } from '../types';
import { sounds } from '../utils/soundEffects';

interface HeaderNavProps {
  currentScreen: AppScreen;
  onNavigate: (screen: AppScreen) => void;
  empathyScore: number;
  unlockedBadgesCount: number;
  settings: AccessibilitySettings;
  playerName?: string;
  playerAvatar?: string;
  onOpenCredits: () => void;
  onOpenPedagogicalModal?: () => void;
  onOpenGlossary?: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  currentScreen,
  onNavigate,
  empathyScore,
  unlockedBadgesCount,
  settings,
  playerName,
  playerAvatar,
  onOpenCredits,
  onOpenPedagogicalModal,
  onOpenGlossary,
}) => {
  if (currentScreen === 'home') return null;

  return (
    <header 
      id="main-app-header"
      className={`sticky top-0 z-30 w-full border-b transition-all px-4 sm:px-8 py-3 ${
        settings.highContrast
          ? 'bg-black border-yellow-400 text-yellow-300'
          : 'bg-white border-slate-200 text-slate-800 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Brand / Logo */}
        <div className="flex items-center gap-3">
          <button
            id="btn-nav-home"
            onClick={() => {
              sounds.playClick();
              onNavigate('home');
            }}
            className={`p-2 rounded-lg flex items-center gap-1.5 transition-all ${
              settings.highContrast
                ? 'hover:bg-yellow-400 hover:text-black font-bold'
                : 'hover:bg-slate-100 text-slate-600'
            }`}
            title="Voltar ao Início"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-xs font-bold hidden md:inline">Início</span>
          </button>

          <div 
            onClick={() => onNavigate('home')}
            className="cursor-pointer flex items-center gap-3 select-none"
          >
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-sm">
              C
            </div>
            <div className="hidden sm:block">
              <h1 className="text-base sm:text-lg font-bold tracking-tight text-indigo-950 leading-tight">
                ConnectMe: <span className="text-indigo-600 font-semibold">Empatia Digital</span>
              </h1>
              <p className="text-[10px] text-slate-400 font-medium">Prevenção e Diálogo Ético</p>
            </div>
          </div>
        </div>

        {/* Center: Screen switch tabs */}
        <nav className="flex items-center gap-1.5 overflow-x-auto py-0.5" aria-label="Navegação Principal">
          <button
            id="nav-tab-game"
            onClick={() => {
              sounds.playClick();
              onNavigate('game');
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
              currentScreen === 'game'
                ? settings.highContrast
                  ? 'bg-yellow-400 text-black'
                  : 'bg-indigo-600 text-white shadow-sm'
                : 'hover:bg-slate-100 text-slate-600'
            }`}
          >
            <Gamepad2 className="w-4 h-4" />
            <span>Missões</span>
          </button>

          <button
            id="nav-tab-ranking"
            onClick={() => {
              sounds.playClick();
              onNavigate('ranking');
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all whitespace-nowrap cursor-pointer ${
              currentScreen === 'ranking'
                ? settings.highContrast
                  ? 'bg-yellow-400 text-black'
                  : 'bg-amber-500 text-slate-950 font-black shadow-sm ring-2 ring-amber-300'
                : 'hover:bg-amber-50 text-amber-900 font-bold bg-amber-50/60 border border-amber-200/70'
            }`}
            title="Ver Rank Escolar e Classificação de Empatia"
          >
            <Trophy className="w-4 h-4 text-amber-600 fill-amber-500" />
            <span>Rank / Placar</span>
          </button>

          <button
            id="nav-tab-badges"
            onClick={() => {
              sounds.playClick();
              onNavigate('badges');
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all whitespace-nowrap cursor-pointer ${
              currentScreen === 'badges'
                ? settings.highContrast
                  ? 'bg-yellow-400 text-black'
                  : 'bg-indigo-600 text-white shadow-sm'
                : 'hover:bg-slate-100 text-slate-600'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Medalhas ({unlockedBadgesCount})</span>
          </button>

          <button
            id="nav-tab-certificate"
            onClick={() => {
              sounds.playClick();
              onNavigate('certificate');
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all whitespace-nowrap cursor-pointer ${
              currentScreen === 'certificate'
                ? settings.highContrast
                  ? 'bg-yellow-400 text-black'
                  : 'bg-amber-500 text-white shadow-sm'
                : 'hover:bg-amber-50 text-amber-800'
            }`}
          >
            <GraduationCap className="w-4 h-4 text-amber-500" />
            <span>Certificado & Selo</span>
          </button>

          <button
            id="nav-tab-reports"
            onClick={() => {
              sounds.playClick();
              onNavigate('reports');
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all whitespace-nowrap cursor-pointer ${
              currentScreen === 'reports'
                ? settings.highContrast
                  ? 'bg-yellow-400 text-black'
                  : 'bg-rose-600 text-white shadow-sm'
                : 'hover:bg-rose-50 text-rose-700'
            }`}
          >
            <ShieldAlert className="w-4 h-4" />
            <span>Canal Seguro</span>
          </button>
        </nav>

        {/* Right: User level chip & Empathy score & Credits */}
        <div className="flex items-center gap-3 shrink-0">
          <div 
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border ${
              settings.highContrast
                ? 'border-yellow-400 bg-black text-yellow-300'
                : 'border-slate-200 bg-slate-50 text-slate-800'
            }`}
            title="Pontos de Empatia Acumulados"
          >
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            <span className="text-xs font-bold">{empathyScore} <span className="text-[10px] text-slate-500 font-normal">pts</span></span>
          </div>

          <div 
            onClick={() => onNavigate('home')}
            className="hidden lg:flex items-center gap-2.5 pl-2 border-l border-slate-200 cursor-pointer hover:opacity-85 transition-opacity"
            title="Clique para alterar seu nome no início"
          >
            <div className="text-right">
              <p className="text-xs font-bold text-slate-900 leading-tight truncate max-w-[140px]">
                {playerName || 'Estudante Conectado'}
              </p>
              <p className="text-[10px] text-indigo-600 font-semibold">Defensor(a) Digital</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-indigo-100 border-2 border-indigo-200 flex items-center justify-center text-sm shadow-xs">
              {playerAvatar || '🌟'}
            </div>
          </div>

          {onOpenPedagogicalModal && (
            <button
              id="btn-header-dua-panel"
              onClick={() => {
                sounds.playClick();
                onOpenPedagogicalModal();
              }}
              className="px-2.5 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-extrabold text-xs flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
              title="Painel de Recursos DUA & BNCC"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">DUA</span>
            </button>
          )}

          <button
            id="btn-header-credits"
            onClick={() => {
              sounds.playClick();
              onOpenCredits();
            }}
            className="p-2 rounded-xl hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-all"
            title="Créditos da Equipe"
          >
            <Info className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
