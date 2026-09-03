import React, { useState, useEffect, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { 
  Volume2, 
  ArrowRight, 
  RotateCcw, 
  Sparkles, 
  Heart, 
  CheckCircle2, 
  AlertTriangle, 
  Trophy, 
  Smartphone,
  GraduationCap,
  Target,
  ChevronRight,
  Award,
  Maximize2,
  X,
  Users,
  Image as ImageIcon
} from 'lucide-react';
import { Scenario, ScenarioChoice, AccessibilitySettings, GradeLevel } from '../types';
import { scenariosData } from '../data/scenariosData';
import { GRADES_METADATA } from '../data/gradesMetadata';
import { GRADE_THEMES } from '../utils/gradeThemes';
import { SCENARIO_IMAGES_MAP } from '../data/scenarioImages';
import { OptimizedImage } from './OptimizedImage';
import { PhoneChatSimulator } from './PhoneChatSimulator';
import { GradeSelector } from './GradeSelector';
import { sounds } from '../utils/soundEffects';
import { SpeechService } from '../utils/speechUtils';

// Helper to deterministically shuffle choices per scenario so the correct answer is balanced across A, B, and C
const getShuffledChoices = (sc: Scenario): ScenarioChoice[] => {
  if (!sc || !sc.choices || sc.choices.length <= 1) {
    return sc?.choices || [];
  }
  let hash = 0;
  for (let i = 0; i < sc.id.length; i++) {
    hash = (hash << 5) - hash + sc.id.charCodeAt(i);
    hash |= 0;
  }
  hash = Math.abs(hash);
  const arr = [...sc.choices];
  for (let i = arr.length - 1; i > 0; i--) {
    hash = (hash * 9301 + 49297) % 233280;
    const j = Math.floor((hash / 233280) * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

interface GameScreenProps {
  settings: AccessibilitySettings;
  selectedGrade: GradeLevel | 'all';
  playerName?: string;
  playerAvatar?: string;
  onSelectGrade: (grade: GradeLevel | 'all') => void;
  onEmpathyChange: (delta: number) => void;
  onUnlockBadge: (badgeId: string) => void;
  onFinishAllScenarios: () => void;
  onGradeComplete?: (grade: GradeLevel) => void;
  onNavigateToCertificate?: () => void;
  completedGrades?: GradeLevel[];
}

export const GameScreen: React.FC<GameScreenProps> = ({
  settings,
  selectedGrade,
  playerName,
  playerAvatar,
  onSelectGrade,
  onEmpathyChange,
  onUnlockBadge,
  onFinishAllScenarios,
  onGradeComplete,
  onNavigateToCertificate,
  completedGrades = [],
}) => {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<ScenarioChoice | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [showGradeCompleteModal, setShowGradeCompleteModal] = useState(false);
  const [activeMediaModal, setActiveMediaModal] = useState<{
    url: string;
    title: string;
    caption?: string;
  } | null>(null);

  // Filter scenarios by selected grade
  const filteredScenarios = selectedGrade === 'all'
    ? scenariosData
    : scenariosData.filter((s) => s.grade === selectedGrade);

  const scenario = filteredScenarios[currentScenarioIndex] || filteredScenarios[0];
  const scenarioMedia = scenario ? SCENARIO_IMAGES_MAP[scenario.id] : null;

  // Distribute choices across A, B, and C so that the correct answer is not always Option A
  const displayedChoices = useMemo(() => {
    return getShuffledChoices(scenario);
  }, [scenario?.id]);

  // Reset indices when grade changes
  useEffect(() => {
    setCurrentScenarioIndex(0);
    setSelectedChoice(null);
    setHasAnswered(false);
    setShowGradeCompleteModal(false);
  }, [selectedGrade]);

  // Preload next scenario image in background for instant transitions without lag
  useEffect(() => {
    const nextScenario = filteredScenarios[currentScenarioIndex + 1];
    if (nextScenario) {
      const nextMedia = SCENARIO_IMAGES_MAP[nextScenario.id];
      if (nextMedia?.coverUrl) {
        const preloadedImg = new Image();
        preloadedImg.src = nextMedia.coverUrl;
      }
    }
  }, [currentScenarioIndex, filteredScenarios]);

  // Auto-speak scenario when changed if autoReadTTS is enabled
  useEffect(() => {
    setSelectedChoice(null);
    setHasAnswered(false);

    if (settings.autoReadTTS && scenario) {
      const textToRead = settings.simplifiedText 
        ? `${scenario.gradeLabel}: ${scenario.title}. ${scenario.simplifiedContext}`
        : `${scenario.gradeLabel}: ${scenario.title}. Categoria: ${scenario.category}. ${scenario.context}. Objetivo: ${scenario.pedagogicalObjective}`;
      SpeechService.speak(textToRead);
    }
  }, [currentScenarioIndex, scenario?.id, settings.autoReadTTS, settings.simplifiedText]);

  // Read message or context aloud
  const handleReadAloud = (text: string) => {
    sounds.playClick();
    SpeechService.speak(text);
  };

  // User selects an option
  const handleSelectChoice = (choice: ScenarioChoice) => {
    if (hasAnswered) return;
    
    setSelectedChoice(choice);
    setHasAnswered(true);

    if (choice.points > 0) {
      sounds.playSuccess();
      confetti({
        particleCount: 50,
        spread: 65,
        origin: { y: 0.7 }
      });
      // Check for badge unlocks
      if (choice.type === 'empathetic') {
        onUnlockBadge('badge-acolhedor');
        onUnlockBadge('badge-guardiao');
      }
      if (choice.type === 'mediator') {
        onUnlockBadge('badge-mediador');
      }
    } else {
      sounds.playWarning();
    }

    onEmpathyChange(choice.points);

    // Speak consequence
    if (settings.autoReadTTS) {
      const resultText = settings.simplifiedText
        ? `Resultado: ${choice.consequence.simplifiedDescription}. Lição: ${choice.consequence.simplifiedLesson}`
        : `Consequência: ${choice.consequence.title}. ${choice.consequence.description}. Impacto: ${choice.points} pontos de empatia.`;
      SpeechService.speak(resultText);
    }
  };

  const handleNextScenario = () => {
    sounds.playClick();
    SpeechService.stop();
    if (currentScenarioIndex < filteredScenarios.length - 1) {
      setCurrentScenarioIndex((prev) => prev + 1);
    } else {
      // Completed all missions of this grade
      sounds.playBadgeFanfare();
      if (selectedGrade !== 'all' && onGradeComplete) {
        onGradeComplete(selectedGrade);
      }
      setShowGradeCompleteModal(true);
    }
  };

  const handleRestartScenario = () => {
    sounds.playClick();
    SpeechService.stop();
    setHasAnswered(false);
    setSelectedChoice(null);
  };

  const handleAdvanceToNextGrade = () => {
    setShowGradeCompleteModal(false);
    sounds.playClick();
    if (selectedGrade === '5') onSelectGrade('6');
    else if (selectedGrade === '6') onSelectGrade('7');
    else if (selectedGrade === '7') onSelectGrade('8');
    else if (selectedGrade === '8') onSelectGrade('9');
    else onFinishAllScenarios();
  };

  // Keyboard navigation for options (1/2/3 or A/B/C)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (hasAnswered) {
        if (e.key === 'Enter' || e.key === ' ') {
          handleNextScenario();
        }
        return;
      }
      const keyLower = e.key.toLowerCase();
      if ((e.key === '1' || keyLower === 'a') && displayedChoices[0]) {
        handleSelectChoice(displayedChoices[0]);
      } else if ((e.key === '2' || keyLower === 'b') && displayedChoices[1]) {
        handleSelectChoice(displayedChoices[1]);
      } else if ((e.key === '3' || keyLower === 'c') && displayedChoices[2]) {
        handleSelectChoice(displayedChoices[2]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [hasAnswered, displayedChoices, currentScenarioIndex]);

  if (!scenario) return null;

  const currentGradeInfo = selectedGrade !== 'all' ? GRADES_METADATA[selectedGrade] : null;
  const gradeTheme = GRADE_THEMES[scenario.grade] || GRADE_THEMES['all'];

  return (
    <div 
      id="game-screen-container"
      className={`min-h-[85vh] p-3 sm:p-6 flex flex-col items-center justify-start max-w-6xl mx-auto transition-all rounded-3xl ${
        settings.highContrast 
          ? 'bg-black text-yellow-300' 
          : `bg-gradient-to-b ${gradeTheme.ambientGradient} text-slate-800`
      }`}
    >
      {/* Top Grade Switcher Bar */}
      <div className="w-full mb-4 flex flex-col sm:flex-row items-center justify-between gap-3 bg-white/90 backdrop-blur-xs border border-slate-200/80 rounded-2xl p-3 shadow-xs">
        <div className="flex items-center gap-2">
          <div className={`p-1.5 rounded-xl bg-gradient-to-r ${gradeTheme.headerBg} text-white shadow-xs`}>
            <GraduationCap className="w-4 h-4" />
          </div>
          <span className="text-xs font-black text-slate-800 uppercase tracking-wider">
            Série Ativa:
          </span>
        </div>

        {/* Compact Grade Filter Chips */}
        <GradeSelector
          selectedGrade={selectedGrade}
          onSelectGrade={onSelectGrade}
          settings={settings}
          compact={true}
        />
      </div>

      {/* Top Scenario Progress & Header Bar */}
      <div className={`w-full flex flex-wrap items-center justify-between gap-3 mb-4 bg-white/95 backdrop-blur-xs border ${gradeTheme.cardBorder} rounded-2xl p-4 shadow-sm transition-all`}>
        <div className="flex items-center gap-3">
          <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${gradeTheme.headerBg} text-white flex items-center justify-center font-black text-base shadow-sm shrink-0 ring-2 ring-white`}>
            <span>{currentScenarioIndex + 1}</span>
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`text-[11px] font-black px-2.5 py-0.5 rounded-lg bg-gradient-to-r ${gradeTheme.headerBg} text-white shadow-xs flex items-center gap-1`}>
                <span>{gradeTheme.badgeEmoji}</span>
                <span>{scenario.gradeLabel}</span>
              </span>
              <h2 className="font-extrabold text-sm sm:text-base text-slate-900 leading-tight">
                {scenario.title}
              </h2>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                {scenario.difficulty}
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium mt-1 flex items-center gap-1.5 flex-wrap">
              <span>Ambiente:</span>
              <span className="font-bold text-slate-800 capitalize px-2 py-0.2 rounded-md bg-slate-100 border border-slate-200">
                {scenario.platformType}
              </span>
              <span>•</span>
              <span className="text-slate-600">{scenario.category}</span>
            </p>
          </div>
        </div>

        {/* Progress Metric & Player Profile Badge */}
        <div className="flex items-center gap-3">
          {playerName && (
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-2xs">
              <span className="text-base">{playerAvatar || '🎮'}</span>
              <span className="max-w-[100px] truncate">{playerName}</span>
            </div>
          )}
          <div className="flex flex-col items-end">
            <span className={`text-xs font-black ${gradeTheme.accentText}`}>
              Missão {currentScenarioIndex + 1} de {filteredScenarios.length}
              {selectedGrade !== 'all' ? ` (${scenario.gradeLabel})` : ''}
            </span>
            <div className="w-32 sm:w-44 h-3 rounded-full bg-slate-200/80 overflow-hidden mt-1 p-0.5 shadow-inner">
              <div 
                className={`h-full bg-gradient-to-r ${gradeTheme.progressGradient} transition-all duration-500 rounded-full shadow-xs`}
                style={{ width: `${((currentScenarioIndex + (hasAnswered ? 1 : 0)) / filteredScenarios.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Pedagogical Objective Highlight Banner (DUA / BNCC) */}
      <div className={`w-full mb-4 px-4 py-3 rounded-2xl ${gradeTheme.subtleBg} border ${gradeTheme.cardBorder} flex items-center justify-between text-xs font-medium text-slate-800 shadow-2xs`}>
        <div className="flex items-center gap-2.5">
          <div className={`p-1.5 rounded-lg bg-white shadow-2xs ${gradeTheme.accentText}`}>
            <Target className="w-4 h-4 shrink-0" />
          </div>
          <span className="leading-relaxed">
            <strong className={`font-black ${gradeTheme.accentText}`}>Objetivo Pedagógico ({scenario.gradeLabel}):</strong>{' '}
            {scenario.pedagogicalObjective}
          </span>
        </div>
        <button
          onClick={() => handleReadAloud(`Objetivo Pedagógico do ${scenario.gradeLabel}: ${scenario.pedagogicalObjective}`)}
          className="p-1.5 rounded-xl hover:bg-white text-slate-600 hover:text-indigo-600 transition-colors shrink-0 ml-2"
          title="Ouvir objetivo"
        >
          <Volume2 className="w-4 h-4" />
        </button>
      </div>

      {/* Main Dual View: Realistic Phone Simulator on Left, Choices & Consequences on Right */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Realistic Smartphone Interactive Screen */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <div className="w-full flex items-center justify-between mb-2 px-2 text-xs text-slate-600">
            <span className={`font-bold flex items-center gap-1.5 ${gradeTheme.accentText}`}>
              <Smartphone className="w-4 h-4" />
              <span>Simulação em Celular Real ({scenario.gradeLabel})</span>
            </span>
            <span className="text-[11px] text-slate-400 font-medium">
              Toque nas mídias para ampliar
            </span>
          </div>

          <PhoneChatSimulator
            scenario={scenario}
            settings={settings}
            hasAnswered={hasAnswered}
            selectedChoice={selectedChoice}
            playerName={playerName}
            playerAvatar={playerAvatar}
            onReadAloud={handleReadAloud}
          />
        </div>

        {/* Right Column: Objective Decision Making & Immediate Consequences */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          
          {/* Case Narrative & Evidence Statement Card */}
          <div
            id="scenario-narrative-card"
            className={`p-4 sm:p-5 rounded-3xl border shadow-xs transition-all ${
              settings.highContrast
                ? 'bg-neutral-950 border-2 border-yellow-400 text-yellow-300'
                : `bg-white/95 backdrop-blur-xs ${gradeTheme.cardBorder} text-slate-800`
            }`}
          >
            <div className="flex flex-col sm:flex-row items-start gap-4">
              {/* Evidence Image Thumbnail */}
              {scenarioMedia?.coverUrl && (
                <div 
                  className="w-full sm:w-28 h-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 border border-slate-200/80 relative group cursor-pointer shadow-xs bg-slate-900/5 ring-1 ring-slate-100"
                  onClick={() => {
                    sounds.playClick();
                    setActiveMediaModal({
                      url: scenarioMedia.coverUrl,
                      title: scenarioMedia.attachmentTitle || scenario.title,
                      caption: scenarioMedia.attachmentCaption || scenario.context
                    });
                  }}
                  title="Clique para ampliar evidência visual"
                >
                  <OptimizedImage
                    src={scenarioMedia.coverUrl}
                    alt={scenarioMedia.attachmentTitle || scenario.title}
                    fallbackText={scenarioMedia.attachmentTitle || scenario.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-1">
                    <Maximize2 className="w-4 h-4" />
                    <span className="sm:hidden">Ampliar</span>
                  </div>
                  {scenarioMedia.attachmentCaption && (
                    <div className="absolute bottom-0 inset-x-0 bg-black/70 p-1 text-[9px] text-white truncate font-medium">
                      {scenarioMedia.attachmentTitle}
                    </div>
                  )}
                </div>
              )}

              {/* Case Text & Details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-lg ${gradeTheme.pillBg} ${gradeTheme.pillText} border ${gradeTheme.pillBorder}`}>
                    Enunciado do Caso
                  </span>
                  <button
                    onClick={() => handleReadAloud(`Situação: ${scenario.title}. ${settings.simplifiedText ? scenario.simplifiedContext : scenario.context}`)}
                    className="p-1.5 rounded-xl bg-slate-100 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 border border-slate-200 transition-colors cursor-pointer"
                    title="Ouvir enunciado da questão"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                <h4 className="font-extrabold text-sm sm:text-base text-slate-900 leading-snug mb-1">
                  {scenario.title}
                </h4>

                <p className={`font-medium text-slate-600 leading-relaxed ${settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'xlarge' ? 'text-lg' : 'text-xs sm:text-sm'}`}>
                  {settings.simplifiedText ? scenario.simplifiedContext : scenario.context}
                </p>

                {/* Involved Characters Tag List */}
                {scenario.characters && scenario.characters.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5 mt-2.5 pt-2 border-t border-slate-100">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <Users className="w-3 h-3 text-slate-400" /> Envolvidos:
                    </span>
                    {scenario.characters.map((char, cIdx) => (
                      <span 
                        key={cIdx} 
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border flex items-center gap-1 ${
                          char.role === 'Vítima'
                            ? 'bg-amber-50 text-amber-800 border-amber-200'
                            : char.role === 'Agresor(a)'
                            ? 'bg-rose-50 text-rose-800 border-rose-200'
                            : char.role === 'Professor(a)'
                            ? 'bg-purple-50 text-purple-800 border-purple-200'
                            : 'bg-slate-100 text-slate-700 border-slate-200'
                        }`}
                      >
                        <span>{char.avatar}</span>
                        <span>{char.name} ({char.role})</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {!hasAnswered ? (
            /* Choices Selection View - Completely Neutral without Spoilers, with Colorful Comfort & Interaction */
            <div 
              id="scenario-choices-container"
              className={`p-5 sm:p-6 rounded-3xl border shadow-sm transition-all ${
                settings.highContrast
                  ? 'bg-black border-2 border-yellow-400'
                  : `bg-white/95 backdrop-blur-xs ${gradeTheme.cardBorder}`
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className={`w-9 h-9 rounded-2xl ${gradeTheme.pillBg} ${gradeTheme.pillText} border ${gradeTheme.pillBorder} flex items-center justify-center font-black text-sm shadow-2xs`}>
                    ?
                  </span>
                  <div>
                    <h3 className="font-extrabold text-sm sm:text-base text-slate-900 leading-tight">
                      Como você escolhe agir nesta situação?
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      Analise com atenção. A resposta correta e a consequência real serão reveladas após sua escolha.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {displayedChoices.map((choice, index) => {
                  const letter = String.fromCharCode(65 + index); // A, B, C
                  const optStyle = gradeTheme.optionAccents[index % gradeTheme.optionAccents.length];

                  return (
                    <div
                      key={choice.id}
                      id={`choice-btn-${index + 1}`}
                      role="button"
                      tabIndex={0}
                      onClick={() => handleSelectChoice(choice)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleSelectChoice(choice);
                        }
                      }}
                      className={`w-full p-4 rounded-2xl border-2 text-left transition-all duration-200 flex items-start gap-3.5 group cursor-pointer select-none focus:outline-none focus:ring-2 ${optStyle.activeRing} ${
                        settings.highContrast
                          ? 'bg-neutral-900 border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-black focus:bg-yellow-400 focus:text-black'
                          : `bg-white border-slate-100 ${optStyle.hoverBorder} ${optStyle.hoverBg} text-slate-800 shadow-2xs hover:shadow-md hover:scale-[1.015] active:scale-[0.99]`
                      }`}
                    >
                      {/* Pastel Color Letter Badge */}
                      <div className={`w-10 h-10 rounded-xl ${optStyle.letterBg} ${optStyle.letterText} border ${optStyle.letterBorder} flex items-center justify-center text-sm font-black shrink-0 group-hover:scale-110 transition-all shadow-2xs`}>
                        {letter}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className={`font-bold text-xs text-slate-500 group-hover:${gradeTheme.accentText} uppercase tracking-wide flex items-center gap-1.5`}>
                            <span>Opção {letter}</span>
                          </span>
                          <span className="text-[10px] font-semibold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                            Tecla [{index + 1} ou {letter}]
                          </span>
                        </div>
                        
                        <p className={`font-semibold text-slate-800 leading-snug ${settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'xlarge' ? 'text-lg' : 'text-sm'}`}>
                          {settings.simplifiedText ? choice.simplifiedText : choice.text}
                        </p>
                      </div>

                      <div className="shrink-0 self-center">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleReadAloud(`Opção ${letter}: ${settings.simplifiedText ? choice.simplifiedText : choice.text}`);
                          }}
                          className={`p-2 rounded-xl bg-slate-100 hover:bg-white text-slate-600 hover:${gradeTheme.accentText} border border-slate-200 cursor-pointer shadow-2xs transition-colors`}
                          title="Ouvir esta opção"
                          aria-label={`Ouvir Opção ${letter}`}
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            /* Consequence & Logical Feedback View - Revealed ONLY After Responding */
            selectedChoice && (() => {
              const bestChoice = scenario.choices.find(c => c.type === 'empathetic') || 
                                 scenario.choices.reduce((max, c) => c.points > max.points ? c : max, scenario.choices[0]);
              const isBestChoice = selectedChoice.id === bestChoice.id;

              return (
                <div className="space-y-4 animate-fadeIn">
                  {/* Consequence Card of the Chosen Option */}
                  <div 
                    id="scenario-consequence-card"
                    className={`p-5 sm:p-6 rounded-3xl border shadow-md transition-all ${
                      isBestChoice
                        ? settings.highContrast
                          ? 'bg-black border-4 border-yellow-400 text-yellow-300'
                          : 'bg-white border-2 border-emerald-400 text-slate-800 shadow-emerald-100/60'
                        : settings.highContrast
                        ? 'bg-black border-4 border-rose-400 text-rose-300'
                        : 'bg-white border-2 border-amber-300 text-slate-800 shadow-amber-100/60'
                    }`}
                  >
                    {/* Header Tag Indicating Result */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2.5">
                        {isBestChoice ? (
                          <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-xs">
                            <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                          </div>
                        ) : (
                          <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shadow-xs">
                            <AlertTriangle className="w-6 h-6 text-amber-600" />
                          </div>
                        )}
                        <div>
                          <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md ${
                            isBestChoice 
                              ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' 
                              : 'bg-amber-100 text-amber-800 border border-amber-200'
                          }`}>
                            {isBestChoice ? '✅ Resposta Correta!' : '⚠️ Resposta Selecionada'}
                          </span>
                          <h3 className="font-black text-base sm:text-lg text-slate-900 mt-0.5">
                            {selectedChoice.consequence.title}
                          </h3>
                        </div>
                      </div>

                      <div className={`px-3 py-1 rounded-xl text-xs font-black flex items-center gap-1 shrink-0 shadow-2xs ${
                        selectedChoice.points > 0 
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                          : 'bg-rose-50 text-rose-700 border border-rose-200'
                      }`}>
                        <Heart className="w-3.5 h-3.5 fill-current" />
                        <span>{selectedChoice.points > 0 ? `+${selectedChoice.points}` : selectedChoice.points} pts</span>
                      </div>
                    </div>

                    {/* Consequence Description */}
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-4">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        O que aconteceu na turma:
                      </span>
                      <p className={`leading-relaxed text-slate-700 font-medium ${
                        settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'xlarge' ? 'text-lg' : 'text-sm'
                      }`}>
                        {settings.simplifiedText 
                          ? selectedChoice.consequence.simplifiedDescription 
                          : selectedChoice.consequence.description}
                      </p>
                    </div>

                    {/* Emotional Impact Indicators with Interactive Progress Bars */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 p-3 rounded-2xl bg-slate-50/60 border border-slate-200 mb-4">
                      {/* Empatia Bar */}
                      <div className="bg-white p-2.5 rounded-xl border border-slate-100 shadow-2xs">
                        <div className="flex items-center justify-between text-[10px] text-slate-500 font-bold uppercase mb-1">
                          <span className="flex items-center gap-1"><Heart className="w-3 h-3 text-rose-500 fill-current" /> Empatia</span>
                          <span className={selectedChoice.consequence.impact.empathyChange >= 0 ? 'text-emerald-600 font-black' : 'text-rose-600 font-black'}>
                            {selectedChoice.consequence.impact.empathyChange >= 0 ? `+${selectedChoice.consequence.impact.empathyChange}` : selectedChoice.consequence.impact.empathyChange}%
                          </span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                          <div 
                            className={`h-full transition-all duration-700 rounded-full ${selectedChoice.consequence.impact.empathyChange >= 0 ? 'bg-gradient-to-r from-emerald-400 to-teal-500' : 'bg-gradient-to-r from-rose-400 to-rose-600'}`}
                            style={{ width: `${Math.min(100, Math.max(20, Math.abs(selectedChoice.consequence.impact.empathyChange) * 4))}%` }}
                          />
                        </div>
                      </div>

                      {/* Confiança Bar */}
                      <div className="bg-white p-2.5 rounded-xl border border-slate-100 shadow-2xs">
                        <div className="flex items-center justify-between text-[10px] text-slate-500 font-bold uppercase mb-1">
                          <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-blue-500" /> Confiança</span>
                          <span className={selectedChoice.consequence.impact.trustChange >= 0 ? 'text-blue-600 font-black' : 'text-rose-600 font-black'}>
                            {selectedChoice.consequence.impact.trustChange >= 0 ? `+${selectedChoice.consequence.impact.trustChange}` : selectedChoice.consequence.impact.trustChange}%
                          </span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                          <div 
                            className={`h-full transition-all duration-700 rounded-full ${selectedChoice.consequence.impact.trustChange >= 0 ? 'bg-gradient-to-r from-blue-400 to-indigo-500' : 'bg-gradient-to-r from-rose-400 to-rose-600'}`}
                            style={{ width: `${Math.min(100, Math.max(20, Math.abs(selectedChoice.consequence.impact.trustChange) * 4))}%` }}
                          />
                        </div>
                      </div>

                      {/* Clima Escolar Bar */}
                      <div className="bg-white p-2.5 rounded-xl border border-slate-100 shadow-2xs">
                        <div className="flex items-center justify-between text-[10px] text-slate-500 font-bold uppercase mb-1">
                          <span className="flex items-center gap-1"><Sparkles className="w-3 h-3 text-amber-500" /> Clima Escolar</span>
                          <span className={selectedChoice.consequence.impact.schoolClimateChange >= 0 ? 'text-amber-600 font-black' : 'text-rose-600 font-black'}>
                            {selectedChoice.consequence.impact.schoolClimateChange >= 0 ? `+${selectedChoice.consequence.impact.schoolClimateChange}` : selectedChoice.consequence.impact.schoolClimateChange}%
                          </span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                          <div 
                            className={`h-full transition-all duration-700 rounded-full ${selectedChoice.consequence.impact.schoolClimateChange >= 0 ? 'bg-gradient-to-r from-amber-400 to-orange-500' : 'bg-gradient-to-r from-rose-400 to-rose-600'}`}
                            style={{ width: `${Math.min(100, Math.max(20, Math.abs(selectedChoice.consequence.impact.schoolClimateChange) * 4))}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Educational Takeaway Lesson (DUA) */}
                    <div className="p-3.5 rounded-2xl bg-gradient-to-r from-indigo-50/90 to-purple-50/90 border border-indigo-200/80 mb-5 shadow-2xs">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-800 mb-1">
                        <Sparkles className="w-4 h-4 text-indigo-600" />
                        <span>Aprendizado Ético ({scenario.gradeLabel}):</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        {settings.simplifiedText ? selectedChoice.consequence.simplifiedLesson : selectedChoice.consequence.lesson}
                      </p>
                    </div>

                    {/* Correct Answer Pedagogical Section (If student chose a non-ideal answer) */}
                    {!isBestChoice && (
                      <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-300 mb-5 shadow-xs">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-black shadow-xs">
                            ✓
                          </span>
                          <h4 className="font-extrabold text-xs sm:text-sm text-emerald-900">
                            Resposta Correta / Atitude Recomendada:
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-emerald-950 font-semibold mb-2">
                          "{settings.simplifiedText ? bestChoice.simplifiedText : bestChoice.text}"
                        </p>
                        <p className="text-xs text-emerald-800 leading-relaxed">
                          <strong>Por que esta é a melhor escolha:</strong> {bestChoice.consequence.lesson}
                        </p>
                      </div>
                    )}

                    {/* Review of all choices with their revealed badges */}
                    <div className="border-t border-slate-200 pt-3 mb-4">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                        Análise de Todas as Alternativas:
                      </span>
                      <div className="space-y-1.5">
                        {displayedChoices.map((c, i) => {
                          const letter = String.fromCharCode(65 + i);
                          const isThisBest = c.id === bestChoice.id;
                          const isThisSelected = c.id === selectedChoice.id;
                          return (
                            <div 
                              key={c.id} 
                              className={`p-2 rounded-xl text-xs flex items-center justify-between gap-2 border transition-all ${
                                isThisSelected 
                                  ? 'bg-indigo-50/80 border-indigo-300 font-bold text-indigo-950 shadow-2xs' 
                                  : 'bg-white border-slate-200 text-slate-600'
                              }`}
                            >
                              <div className="flex items-center gap-2 truncate">
                                <span className="font-black text-[11px] px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200">
                                  {letter}
                                </span>
                                <span className="truncate">{settings.simplifiedText ? c.simplifiedText : c.text}</span>
                              </div>
                              <div className="flex items-center gap-1.5 shrink-0">
                                {isThisBest && (
                                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold border border-emerald-200">
                                    Correta ✨
                                  </span>
                                )}
                                {c.type === 'passive' && (
                                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                                    Passiva
                                  </span>
                                )}
                                {c.type === 'hostile' && (
                                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 font-bold border border-rose-200">
                                    Tóxica
                                  </span>
                                )}
                                {c.type === 'mediator' && (
                                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-bold border border-blue-200">
                                    Mediação
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Actions: Retry or Next */}
                    <div className="flex items-center justify-between gap-3">
                      <button
                        id="btn-retry-scenario"
                        onClick={handleRestartScenario}
                        className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-xs font-bold text-slate-700 flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Tentar outra escolha</span>
                      </button>

                      <button
                        id="btn-next-scenario"
                        onClick={handleNextScenario}
                        className={`px-6 py-2.5 rounded-xl bg-gradient-to-r ${gradeTheme.headerBg} hover:opacity-95 text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 shadow-md transition-all cursor-pointer hover:scale-102 active:scale-98`}
                      >
                        <span>{currentScenarioIndex < filteredScenarios.length - 1 ? 'Próxima Missão' : `Concluir ${scenario.gradeLabel}`}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()
          )}

        </div>

      </div>

      {/* Grade Complete Celebration Modal */}
      {showGradeCompleteModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-6 shadow-2xl text-center animate-scaleUp">
            <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 border border-amber-200 flex items-center justify-center text-3xl mx-auto mb-4 shadow-sm">
              🏆
            </div>
            
            <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 uppercase tracking-widest inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Série Concluída • Certificado & Selo Liberados!
            </span>

            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
              Parabéns! Você completou os desafios do {scenario.gradeLabel}!
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Você demonstrou grande maturidade digital e ética. Seu <strong className="text-amber-600 font-bold">Certificado Oficial</strong> e o <strong className="text-amber-600 font-bold">Selo de Honra</strong> do {scenario.gradeLabel} com seu nome gravado foram liberados!
            </p>

            <div className="mt-6 flex flex-col gap-2.5">
              {onNavigateToCertificate && (
                <button
                  id="btn-emit-grade-certificate"
                  onClick={() => {
                    setShowGradeCompleteModal(false);
                    sounds.playBadgeFanfare();
                    onNavigateToCertificate();
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 hover:from-amber-500 hover:to-yellow-400 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 transition-all cursor-pointer hover:scale-[1.02] active:scale-98"
                >
                  <Award className="w-4 h-4 text-slate-950 fill-amber-950" />
                  <span>🎓 Emitir Certificado & Selo do {scenario.gradeLabel} com Meu Nome</span>
                </button>
              )}

              {selectedGrade !== '9' && selectedGrade !== 'all' ? (
                <button
                  onClick={handleAdvanceToNextGrade}
                  className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer hover:scale-[1.01]"
                >
                  <span>Avançar para o {selectedGrade === '5' ? '6º Ano' : selectedGrade === '6' ? '7º Ano' : selectedGrade === '7' ? '8º Ano' : '9º Ano'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={onFinishAllScenarios}
                  className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <span>Ver Resumo de Conquistas & Ranking</span>
                  <Award className="w-4 h-4" />
                </button>
              )}

              <button
                onClick={() => {
                  setShowGradeCompleteModal(false);
                  onSelectGrade('all');
                }}
                className="w-full py-2 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs border border-slate-200 transition-all cursor-pointer"
              >
                Jogar Outra Série
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox / Zoom Modal for Scenario Evidence Visuals */}
      {activeMediaModal && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setActiveMediaModal(null)}
        >
          <div 
            className="w-full max-w-lg bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-indigo-400" />
                <h4 className="font-bold text-sm text-white truncate max-w-[280px]">
                  {activeMediaModal.title}
                </h4>
              </div>
              <button 
                onClick={() => setActiveMediaModal(null)}
                className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white"
                title="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Full Image */}
            <div className="p-3 bg-black flex items-center justify-center min-h-[220px]">
              <OptimizedImage
                src={activeMediaModal.url} 
                alt={activeMediaModal.title}
                fallbackText={activeMediaModal.title}
                className="max-h-[60vh] w-auto object-contain rounded-xl shadow-lg"
              />
            </div>

            {/* Modal Caption */}
            {activeMediaModal.caption && (
              <div className="p-4 bg-slate-900 border-t border-slate-800 text-xs text-slate-300">
                <p className="font-semibold text-white mb-1">Contexto da Evidência:</p>
                <p className="leading-relaxed">{activeMediaModal.caption}</p>
              </div>
            )}

            {/* Modal Footer */}
            <div className="p-3 bg-slate-950 flex justify-end">
              <button 
                onClick={() => setActiveMediaModal(null)}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs cursor-pointer"
              >
                Fechar Visualização
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
