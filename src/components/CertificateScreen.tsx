import React, { useState, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Award, 
  Sparkles, 
  Printer, 
  Share2, 
  CheckCircle2, 
  ShieldCheck, 
  GraduationCap, 
  Edit3, 
  RotateCcw, 
  ChevronRight, 
  Volume2, 
  Medal,
  BookOpen,
  Lock,
  Play,
  Eye,
  AlertCircle,
  Crown
} from 'lucide-react';
import { Badge, AccessibilitySettings, GradeLevel } from '../types';
import { GRADES_METADATA, ALL_GRADES_LIST } from '../data/gradesMetadata';
import { sounds } from '../utils/soundEffects';
import { SpeechService } from '../utils/speechUtils';

interface CertificateScreenProps {
  playerName: string;
  onUpdatePlayerName: (name: string) => void;
  playerAvatar: string;
  onUpdatePlayerAvatar?: (avatar: string) => void;
  empathyScore: number;
  badges: Badge[];
  selectedGrade?: GradeLevel | 'all';
  completedGrades: GradeLevel[];
  settings: AccessibilitySettings;
  onNavigate: (screen: any) => void;
  onSelectGradeAndPlay?: (grade: GradeLevel) => void;
}

export const CertificateScreen: React.FC<CertificateScreenProps> = ({
  playerName,
  onUpdatePlayerName,
  playerAvatar,
  empathyScore,
  badges,
  selectedGrade = 'all',
  completedGrades,
  settings,
  onNavigate,
  onSelectGradeAndPlay,
}) => {
  const [activeTab, setActiveTab] = useState<'certificate' | 'seal' | 'competencies'>('certificate');
  const [isEditingName, setIsEditingName] = useState<boolean>(false);
  const [tempName, setTempName] = useState<string>(playerName || '');
  const [copiedNotification, setCopiedNotification] = useState<boolean>(false);
  const [showDemoPreview, setShowDemoPreview] = useState<boolean>(false);
  const certificateRef = useRef<HTMLDivElement>(null);

  const displayName = playerName.trim() || 'Estudante Conectado';
  const unlockedBadges = badges.filter(b => b.unlocked);
  
  // Total grades count and check if all 5 are completed
  const totalGradesCount = ALL_GRADES_LIST.length; // 5
  const completedCount = completedGrades.filter(g => ALL_GRADES_LIST.some(item => item.id === g)).length;
  const allGradesCompleted = completedCount >= totalGradesCount;
  const progressPercent = Math.round((completedCount / totalGradesCount) * 100);

  // Selected grade for certification viewing: '5' | '6' | '7' | '8' | '9' | 'master'
  const [viewingGrade, setViewingGrade] = useState<GradeLevel | 'master'>(() => {
    if (selectedGrade && selectedGrade !== 'all' && completedGrades.includes(selectedGrade)) {
      return selectedGrade;
    }
    if (selectedGrade && selectedGrade !== 'all') {
      return selectedGrade;
    }
    if (completedGrades.length === ALL_GRADES_LIST.length) {
      return 'master';
    }
    if (completedGrades.length > 0) {
      return completedGrades[completedGrades.length - 1];
    }
    return '5';
  });

  const isCurrentGradeUnlocked = 
    viewingGrade === 'master'
      ? allGradesCompleted
      : completedGrades.includes(viewingGrade as GradeLevel);

  const canViewCertificate = isCurrentGradeUnlocked || showDemoPreview;
  const currentGradeMeta = viewingGrade !== 'master' ? GRADES_METADATA[viewingGrade] : null;

  // Formatted date
  const todayFormatted = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(new Date());

  // Certificate Unique Validation Hash Code
  const certificateCode = `CM-${new Date().getFullYear()}-${Math.abs(
    (displayName + empathyScore + viewingGrade).split('').reduce((acc, char) => acc + char.charCodeAt(0), 1234)
  ).toString().padStart(6, '0')}`;

  useEffect(() => {
    if (isCurrentGradeUnlocked) {
      sounds.playBadgeFanfare();
      confetti({
        particleCount: 75,
        spread: 75,
        origin: { y: 0.5 }
      });

      if (settings.autoReadTTS) {
        const title = viewingGrade === 'master' ? 'todas as 5 séries com o Título de Top Master' : currentGradeMeta?.fullName;
        SpeechService.speak(`Parabéns ${displayName}! O Certificado Oficial e Selo de Honra do ${title} estão liberados com seu nome gravado.`);
      }
    } else {
      if (settings.autoReadTTS) {
        const title = viewingGrade === 'master' ? 'todas as 5 séries para conquistar o Título de Top Master' : currentGradeMeta?.name;
        SpeechService.speak(`Certificado do ${title}. Conclua os desafios desta série para emitir o certificado e selo com seu nome.`);
      }
    }
  }, [viewingGrade, isCurrentGradeUnlocked]);

  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempName.trim()) {
      onUpdatePlayerName(tempName.trim());
      sounds.playSuccess();
      setIsEditingName(false);
      if (settings.autoReadTTS) {
        SpeechService.speak(`Nome atualizado no certificado para: ${tempName.trim()}`);
      }
    }
  };

  const handlePrint = () => {
    sounds.playClick();
    window.print();
  };

  const handleShareOrCopy = () => {
    sounds.playSuccess();
    const gradeTitle = viewingGrade === 'master' ? 'as 5 séries completas conquistando o Título de Top Master' : `os desafios do ${currentGradeMeta?.fullName}`;
    const textToShare = `🎓 Concluí ${gradeTitle} no ConnectMe - Empatia Digital! 🏅 Estudante: ${displayName} | Pontuação: ${empathyScore} pts | Código de Autenticidade: ${certificateCode}`;
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToShare);
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 3500);
    }
  };

  const handleReadCertificate = () => {
    sounds.playClick();
    if (viewingGrade === 'master') {
      const text = `Certificado Oficial com Outorga do Título de Top Master em Cidadania e Empatia Digital. Certificamos que ${displayName} concluiu com honra máxima todas as 5 séries do Ensino Fundamental (5º ao 9º Ano) no programa ConnectMe, conquistando o supremo Título de Top Master com ${empathyScore} pontos de empatia.`;
      SpeechService.speak(text);
    } else if (currentGradeMeta) {
      const text = `Certificado de Conclusão do ${currentGradeMeta.fullName}. Certificamos que ${displayName} concluiu com pleno êxito os desafios formativos de ${currentGradeMeta.themeFocus}, acumulando ${empathyScore} pontos de empatia.`;
      SpeechService.speak(text);
    }
  };

  return (
    <div 
      id="certificate-screen-root"
      className={`min-h-[85vh] p-3 sm:p-6 max-w-5xl mx-auto flex flex-col items-center justify-start transition-colors ${
        settings.highContrast ? 'text-yellow-300' : 'text-slate-800'
      }`}
    >
      {/* Top Header */}
      <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 no-print">
        <div>
          <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider mb-1">
            <GraduationCap className="w-4 h-4 text-amber-500" />
            Certificação Escolar • ConnectMe Empatia Digital
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Certificados & Selos por Série
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Cada série concluída libera imediatamente o Certificado Oficial e o Selo de Mérito correspondente com seu nome gravado.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {canViewCertificate && (
            <>
              <button
                id="btn-edit-cert-name"
                onClick={() => {
                  sounds.playClick();
                  setTempName(displayName);
                  setIsEditingName(true);
                }}
                className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:border-indigo-400 text-slate-700 font-bold text-xs flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
                title="Alterar o nome no diploma"
              >
                <Edit3 className="w-3.5 h-3.5 text-indigo-600" />
                <span>Nome: {displayName}</span>
              </button>

              <button
                id="btn-print-certificate"
                onClick={handlePrint}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all cursor-pointer hover:scale-102 active:scale-98"
              >
                <Printer className="w-4 h-4" />
                <span>Imprimir / Salvar PDF</span>
              </button>
            </>
          )}

          {!isCurrentGradeUnlocked && (
            <button
              id="btn-toggle-demo-preview"
              onClick={() => {
                sounds.playClick();
                setShowDemoPreview(!showDemoPreview);
              }}
              className="px-3.5 py-2 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5 text-indigo-600" />
              <span>{showDemoPreview ? 'Ocultar Prévia' : 'Ver Prévia Deste Certificado'}</span>
            </button>
          )}
        </div>
      </div>

      {/* ========================================================= */}
      {/* GRADE SELECTOR TABS (5º, 6º, 7º, 8º, 9º & MASTER)         */}
      {/* ========================================================= */}
      <div className="w-full flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 mb-5 no-print">
        {ALL_GRADES_LIST.map((grade) => {
          const isDone = completedGrades.includes(grade.id);
          const isSelected = viewingGrade === grade.id;

          return (
            <button
              key={grade.id}
              onClick={() => {
                sounds.playClick();
                setViewingGrade(grade.id);
                setShowDemoPreview(false);
              }}
              className={`px-3.5 py-2 rounded-2xl text-xs font-black flex items-center gap-1.5 transition-all whitespace-nowrap cursor-pointer border ${
                isSelected
                  ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md scale-105'
                  : isDone
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span>{grade.badgeIcon}</span>
              <span>{grade.name}</span>
              {isDone ? (
                <span className="text-[10px] bg-emerald-600 text-white px-1.5 py-0.5 rounded-full font-bold">
                  Liberado ✓
                </span>
              ) : (
                <span className="text-[10px] text-slate-400">
                  🔒
                </span>
              )}
            </button>
          );
        })}

        {/* Master / Ciclo Completo Chip */}
        <button
          onClick={() => {
            sounds.playClick();
            setViewingGrade('master');
            setShowDemoPreview(false);
          }}
          className={`px-3.5 py-2 rounded-2xl text-xs font-black flex items-center gap-1.5 transition-all whitespace-nowrap cursor-pointer border ${
            viewingGrade === 'master'
              ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 border-amber-400 shadow-md scale-105'
              : allGradesCompleted
                ? 'bg-amber-50 text-amber-900 border-amber-300 hover:bg-amber-100'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
          }`}
        >
          <span>👑</span>
          <span>Título Top Master (5 Séries)</span>
          {allGradesCompleted ? (
            <span className="text-[10px] bg-amber-600 text-white px-1.5 py-0.5 rounded-full font-bold">
              Liberado ✓
            </span>
          ) : (
            <span className="text-[10px] text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded-full font-bold">
              {completedCount}/5
            </span>
          )}
        </button>
      </div>

      {/* ========================================================= */}
      {/* LOCKED STATE BANNER (When this specific grade is not done)*/}
      {/* ========================================================= */}
      {!canViewCertificate && (
        <div 
          id="certificate-grade-locked-container"
          className="w-full max-w-3xl flex flex-col gap-6 animate-fadeIn my-4"
        >
          {viewingGrade !== 'master' && currentGradeMeta ? (
            /* Specific Single Grade Locked Card */
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 text-white border-2 border-indigo-500/30 shadow-2xl relative overflow-hidden text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center text-3xl mb-3 shadow-inner">
                <Lock className="w-7 h-7" />
              </div>

              <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 mb-2">
                Missões do {currentGradeMeta.name} Pendentes
              </span>

              <h3 className="text-xl sm:text-2xl font-black text-white">
                Certificado & Selo do {currentGradeMeta.name} Bloqueados
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 max-w-md mt-2 leading-relaxed">
                Complete os 10 cenários educativos do <strong>{currentGradeMeta.fullName}</strong> ({currentGradeMeta.themeFocus}) para liberar o Certificado Oficial e o Selo de Honra gravados com seu nome!
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => {
                    sounds.playClick();
                    if (onSelectGradeAndPlay) {
                      onSelectGradeAndPlay(currentGradeMeta.id);
                    } else {
                      onNavigate('game');
                    }
                  }}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-amber-500/20 hover:brightness-110 transition-all cursor-pointer hover:scale-105"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Jogar Desafios do {currentGradeMeta.name} Agora</span>
                </button>

                <button
                  onClick={() => {
                    sounds.playClick();
                    setShowDemoPreview(true);
                  }}
                  className="px-4 py-2.5 rounded-xl border border-white/20 hover:bg-white/10 text-xs font-bold text-slate-300 flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Ver Prévia Demonstrativa</span>
                </button>
              </div>
            </div>
          ) : (
            /* Master Ciclo Completo Locked Card */
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white border-2 border-indigo-500/30 shadow-2xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center text-2xl shadow-inner">
                  <Crown className="w-6 h-6 text-amber-300" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30">
                    Requisito de Conclusão das 5 Séries
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-1 flex items-center gap-2">
                    <span>Título de Top Master (5º ao 9º Ano)</span>
                    <Crown className="w-5 h-5 text-amber-400 fill-amber-400" />
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed mt-2">
                Conclua todas as 5 séries escolares para conquistar a honra máxima: o <strong className="text-amber-300 font-bold">Título de Top Master</strong> gravado no seu certificado oficial e selo de mérito! Você já pode emitir os certificados individuais de qualquer série que já concluiu.
              </p>

              {/* Progress Bar with Big Counter */}
              <div className="my-6 p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xs">
                <div className="flex items-center justify-between text-xs font-bold mb-2">
                  <span className="text-slate-200">Progresso do Ciclo Completo:</span>
                  <span className="text-amber-300 text-sm font-black">
                    {completedCount} de {totalGradesCount} Séries Concluídas ({progressPercent}%)
                  </span>
                </div>
                <div className="w-full h-3.5 bg-black/40 rounded-full overflow-hidden border border-white/20 p-0.5">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-500 via-yellow-400 to-emerald-400 rounded-full transition-all duration-700 shadow-md"
                    style={{ width: `${Math.max(progressPercent, 4)}%` }}
                  />
                </div>
              </div>

              {/* Series Completion Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mt-4">
                {ALL_GRADES_LIST.map((grade) => {
                  const isDone = completedGrades.includes(grade.id);
                  return (
                    <div 
                      key={grade.id}
                      className={`p-3.5 rounded-2xl border transition-all flex flex-col justify-between ${
                        isDone
                          ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-100 shadow-sm'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:border-indigo-400/50'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xl">{grade.badgeIcon}</span>
                          {isDone ? (
                            <span className="flex items-center gap-1 text-[10px] font-black uppercase text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-400/40">
                              <CheckCircle2 className="w-3 h-3" />
                              Concluído
                            </span>
                          ) : (
                            <span className="flex items-center gap-1 text-[10px] font-bold uppercase text-amber-300 bg-amber-500/15 px-2 py-0.5 rounded-full border border-amber-400/30">
                              <Lock className="w-2.5 h-2.5" />
                              Pendente
                            </span>
                          )}
                        </div>
                        <h4 className="font-extrabold text-sm text-white">{grade.name}</h4>
                        <p className="text-[11px] text-slate-300 mt-0.5 line-clamp-2">{grade.themeFocus}</p>
                      </div>

                      <div className="mt-3 pt-2 border-t border-white/10">
                        {isDone ? (
                          <button
                            onClick={() => {
                              sounds.playClick();
                              setViewingGrade(grade.id);
                            }}
                            className="w-full py-1.5 px-2 rounded-lg bg-emerald-600/60 hover:bg-emerald-600 text-white font-bold text-[10px] flex items-center justify-center gap-1 transition-all cursor-pointer"
                          >
                            <span>Ver Certificado Liberado</span>
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              sounds.playClick();
                              if (onSelectGradeAndPlay) {
                                onSelectGradeAndPlay(grade.id);
                              } else {
                                onNavigate('game');
                              }
                            }}
                            className="w-full py-1.5 px-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-[11px] flex items-center justify-center gap-1 transition-all cursor-pointer shadow-xs"
                          >
                            <Play className="w-3 h-3 fill-current" />
                            <span>Jogar {grade.name}</span>
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================= */}
      {/* NAVIGATION TABS (Shown when unlocked or in preview mode)   */}
      {/* ========================================================= */}
      {canViewCertificate && (
        <>
          {/* Unlocked / Preview Banner */}
          {isCurrentGradeUnlocked ? (
            <div className="w-full max-w-4xl mb-3 p-3 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-900 text-xs font-bold flex items-center justify-between no-print">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  <strong>Certificado e Selo Liberados:</strong> {viewingGrade === 'master' ? 'Parabéns! Você completou todas as 5 séries escolares e conquistou o Título de Top Master da Empatia Digital!' : `Você completou com honra os desafios do ${currentGradeMeta?.fullName}.`}
                </span>
              </div>
            </div>
          ) : (
            <div className="w-full max-w-4xl mb-3 p-3 rounded-2xl bg-amber-500/15 border border-amber-400/50 text-amber-900 text-xs font-bold flex items-center justify-between no-print">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-amber-700 shrink-0" />
                <span>
                  Modo de Prévia Demonstrativa do {viewingGrade === 'master' ? 'Ciclo Completo' : currentGradeMeta?.name}. Conclua a série para salvar de forma permanente.
                </span>
              </div>
              <button
                onClick={() => setShowDemoPreview(false)}
                className="px-3 py-1 rounded-lg bg-amber-600 text-white text-xs font-bold hover:bg-amber-700 cursor-pointer shrink-0"
              >
                Fechar Prévia
              </button>
            </div>
          )}

          <div className="w-full max-w-4xl flex items-center justify-between gap-2 border-b border-slate-200 pb-3 mb-6 no-print overflow-x-auto">
            <div className="flex items-center gap-2">
              <button
                id="tab-btn-certificate"
                onClick={() => {
                  sounds.playClick();
                  setActiveTab('certificate');
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap cursor-pointer border ${
                  activeTab === 'certificate'
                    ? settings.highContrast
                      ? 'bg-yellow-400 text-black border-yellow-400'
                      : 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Award className="w-4 h-4" />
                <span>📜 Certificado Oficial (A4)</span>
              </button>

              <button
                id="tab-btn-seal"
                onClick={() => {
                  sounds.playClick();
                  setActiveTab('seal');
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap cursor-pointer border ${
                  activeTab === 'seal'
                    ? settings.highContrast
                      ? 'bg-yellow-400 text-black border-yellow-400'
                      : 'bg-amber-500 text-white border-amber-500 shadow-sm'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Medal className="w-4 h-4 text-yellow-300" />
                <span>🏅 Selo de Honra com Seu Nome</span>
              </button>

              <button
                id="tab-btn-competencies"
                onClick={() => {
                  sounds.playClick();
                  setActiveTab('competencies');
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap cursor-pointer border ${
                  activeTab === 'competencies'
                    ? settings.highContrast
                      ? 'bg-yellow-400 text-black border-yellow-400'
                      : 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>📋 Habilidades da BNCC</span>
              </button>
            </div>

            {/* Audio TTS button */}
            <button
              onClick={handleReadCertificate}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5 cursor-pointer shrink-0"
              title="Ouvir leitura do certificado"
            >
              <Volume2 className="w-4 h-4 text-indigo-600" />
              <span className="hidden sm:inline">Ouvir Certificado</span>
            </button>
          </div>

          {/* ========================================================= */}
          {/* TAB 1: OFFICIAL DIPLOMA CERTIFICATE (A4 / PRINT FRIENDLY) */}
          {/* ========================================================= */}
          {activeTab === 'certificate' && (
            <div 
              ref={certificateRef}
              id="official-certificate-container"
              className="w-full max-w-4xl certificate-print-area rounded-3xl p-6 sm:p-10 border-4 border-amber-600/60 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5EFEB] shadow-2xl relative overflow-hidden text-slate-900 transition-all"
              style={{
                backgroundImage: 'radial-gradient(#d97706 0.75px, transparent 0.75px), radial-gradient(#d97706 0.75px, #faf6ee 0.75px)',
                backgroundSize: '30px 30px',
                backgroundPosition: '0 0, 15px 15px'
              }}
            >
              {/* Ornate Inner Double Frame Border */}
              <div className="w-full h-full border-2 border-dashed border-amber-700/40 rounded-2xl p-6 sm:p-8 bg-white/85 backdrop-blur-xs relative flex flex-col justify-between">
                
                {/* Top Ornamental Header */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b-2 border-amber-600/30 pb-5">
                  
                  {/* Left School/Initiative Crest */}
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-700 via-indigo-600 to-purple-600 text-white flex items-center justify-center text-2xl font-black shadow-md border-2 border-amber-300">
                      {viewingGrade !== 'master' && currentGradeMeta ? currentGradeMeta.badgeIcon : '🎓'}
                    </div>
                    <div>
                      <h3 className="text-base font-black tracking-tight text-indigo-950 uppercase">
                        ConnectMe • Cidadania Digital
                      </h3>
                      <p className="text-[11px] font-semibold text-amber-800 tracking-wider">
                        {viewingGrade !== 'master' && currentGradeMeta
                          ? `PROGRAMA DE PREVENÇÃO • ${currentGradeMeta.fullName.toUpperCase()}`
                          : 'PROGRAMA INTEGRAL DE PREVENÇÃO & EMPATIA ESCOLAR'}
                      </p>
                    </div>
                  </div>

                  {/* Right Golden Laurel Seal */}
                  <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-400/50 px-3.5 py-1.5 rounded-full shadow-2xs">
                    <Medal className="w-5 h-5 text-amber-600" />
                    <span className="text-xs font-black text-amber-900 uppercase tracking-widest">
                      HONRA AO MÉRITO ÉTICO
                    </span>
                  </div>
                </div>

                {/* Main Certificate Body */}
                <div className="my-8 text-center flex flex-col items-center">
                  
                  {/* Supreme Master Ribbon when viewing Master / 5 Grades */}
                  {viewingGrade === 'master' && (
                    <div className="mb-4 inline-flex items-center gap-2 px-6 py-1.5 rounded-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-slate-950 font-black text-xs sm:text-sm tracking-widest uppercase shadow-md border-2 border-amber-200">
                      <Crown className="w-4 h-4 text-slate-950 fill-amber-950" />
                      <span>OUTORGA DO TÍTULO DE TOP MASTER • DISTINÇÃO MÁXIMA</span>
                      <Sparkles className="w-4 h-4 text-slate-950 fill-amber-950" />
                    </div>
                  )}

                  <span className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-amber-800 mb-2">
                    {viewingGrade !== 'master' && currentGradeMeta
                      ? `DIPLOMA DE CONCLUSÃO • ${currentGradeMeta.name.toUpperCase()} DO ENSINO FUNDAMENTAL`
                      : 'DIPLOMA DE CONCLUSÃO INTEGRAL • TÍTULO DE TOP MASTER (5º AO 9º ANO)'}
                  </span>

                  <h1 className="text-2xl sm:text-4xl font-serif font-black text-slate-900 tracking-tight leading-tight max-w-2xl">
                    Certificamos que
                  </h1>

                  {/* Student Name Display in Grand Typography */}
                  <div className="my-4 relative group inline-block">
                    <div className="px-8 py-2 border-b-2 border-amber-600 bg-amber-500/5 rounded-t-xl">
                      <h2 className="text-3xl sm:text-5xl font-serif font-black text-indigo-950 tracking-tight drop-shadow-xs">
                        {displayName}
                      </h2>
                    </div>

                    {/* Official Title Distinction below Student Name */}
                    {viewingGrade === 'master' ? (
                      <div className="mt-2 flex flex-col items-center">
                        <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-1 rounded-full bg-gradient-to-r from-amber-500/20 via-yellow-300/35 to-amber-500/20 border-2 border-amber-600/50 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-widest shadow-2xs">
                          <Crown className="w-4 h-4 text-amber-800 fill-amber-400" />
                          <span>TÍTULO DE TOP MASTER DA EMPATIA DIGITAL</span>
                          <Crown className="w-4 h-4 text-amber-800 fill-amber-400" />
                        </div>
                        <div className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mt-1">
                          Defensor(a) Supremo(a) da Convivência Ética • 5 Séries Concluídas (5º ao 9º Ano)
                        </div>
                      </div>
                    ) : (
                      <div className="text-xs font-bold text-amber-800 uppercase tracking-widest mt-1">
                        Defensor(a) Oficial da Convivência Ética • {currentGradeMeta?.name}
                      </div>
                    )}
                  </div>

                  {/* Concession Description Text */}
                  <p className="text-sm sm:text-base text-slate-700 max-w-2xl leading-relaxed mx-auto mt-2 font-medium">
                    {viewingGrade !== 'master' && currentGradeMeta ? (
                      <>
                        Concluiu com pleno êxito e maturidade todos os 10 desafios formativos do <strong className="text-indigo-900 font-bold">{currentGradeMeta.fullName}</strong> no programa educativo <strong className="text-indigo-900 font-bold">ConnectMe: Empatia Digital</strong>, demonstrando conduta exemplar em: <strong className="text-slate-900">{currentGradeMeta.themeFocus}</strong>, promovendo a empatia, o respeito mútuo, a inclusão de colegas e a segurança no ambiente virtual.
                      </>
                    ) : (
                      <>
                        Concluiu com honra máxima todas as 5 séries escolares do programa educativo <strong className="text-indigo-900 font-bold">ConnectMe: Empatia Digital</strong> (abrangendo o 5º, 6º, 7º, 8º e 9º Anos do Ensino Fundamental), superando todos os 50 desafios com maturidade e discernimento ético. Por este feito exemplar, é outorgado com mérito supremo o <strong className="text-amber-950 font-black text-base underline decoration-amber-500 decoration-2">Título de Top Master em Cidadania e Empatia Digital</strong>, reconhecendo sua liderança ética no combate ao cyberbullying, resolução empática de conflitos virtuais, respeito à privacidade e promoção de uma cultura escolar inclusiva e segura.
                      </>
                    )}
                  </p>

                  {/* Key Achievements Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6 w-full max-w-2xl">
                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-300/60 text-center">
                      <div className="text-base sm:text-xl font-black text-indigo-900 truncate">
                        {viewingGrade === 'master' ? 'TOP MASTER' : `${empathyScore} pts`}
                      </div>
                      <div className="text-[10px] font-bold text-amber-900 uppercase">
                        {viewingGrade === 'master' ? 'Título Supremo' : 'Pontuação Ética'}
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-200 text-center">
                      <div className="text-xl sm:text-2xl font-black text-indigo-900">
                        {viewingGrade !== 'master' && currentGradeMeta ? currentGradeMeta.name : '5 de 5 Séries'}
                      </div>
                      <div className="text-[10px] font-bold text-indigo-900 uppercase">
                        {viewingGrade !== 'master' ? '10/10 Desafios' : '50/50 Desafios'}
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-200 text-center">
                      <div className="text-xl sm:text-2xl font-black text-emerald-900">
                        BNCC 4, 5 e 9
                      </div>
                      <div className="text-[10px] font-bold text-emerald-900 uppercase">
                        Cultura Digital & Empatia
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-200 text-center">
                      <div className="text-xl sm:text-2xl font-black text-purple-900">
                        {viewingGrade === 'master' ? `${empathyScore} pts` : '100% Ético'}
                      </div>
                      <div className="text-[10px] font-bold text-purple-900 uppercase">
                        {viewingGrade === 'master' ? 'Pontuação Ética' : 'Navegação Segura'}
                      </div>
                    </div>
                  </div>

                </div>

                {/* Certificate Footer: Clean Institutional Signatures & Seal */}
                <div className="pt-6 border-t-2 border-amber-600/30 grid grid-cols-1 sm:grid-cols-3 gap-6 items-end text-center">
                  
                  {/* Left Signatory: Pedagogical Coordination */}
                  <div className="flex flex-col items-center">
                    <div className="w-44 border-b border-slate-400 mb-1.5 pb-1 font-serif italic text-sm text-slate-700">
                      Coordenação Pedagógica
                    </div>
                    <div className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                      Programa ConnectMe
                    </div>
                    <div className="text-[10px] text-slate-500">Cidadania & Convivência Digital</div>
                  </div>

                  {/* Center Golden Holographic Seal Badge */}
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-600 text-slate-950 flex flex-col items-center justify-center shadow-lg border-2 border-amber-200 p-1">
                      {viewingGrade === 'master' ? (
                        <Crown className="w-5 h-5 text-amber-950 fill-amber-950" />
                      ) : (
                        <Sparkles className="w-4 h-4 text-amber-950" />
                      )}
                      <span className="text-[8px] font-black uppercase text-center leading-tight">
                        {viewingGrade === 'master' ? 'SELO TOP MASTER' : 'SELO DE AUTENTICIDADE'}
                      </span>
                    </div>
                    <div className="text-[9px] font-mono text-slate-500 mt-1">
                      Cód: {certificateCode}
                    </div>
                  </div>

                  {/* Right Signatory: School Leadership & SME */}
                  <div className="flex flex-col items-center">
                    <div className="w-44 border-b border-slate-400 mb-1.5 pb-1 font-serif italic text-sm text-slate-700">
                      Mediação Escolar & DUA
                    </div>
                    <div className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                      Ensino Fundamental • SME
                    </div>
                    <div className="text-[10px] text-slate-500">Emitido em {todayFormatted}</div>
                  </div>

                </div>

              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 2: SPECIAL EMBOSSED DIGITAL HONOR SEAL WITH NAME     */}
          {/* ========================================================= */}
          {activeTab === 'seal' && (
            <div 
              id="custom-digital-seal-container"
              className="w-full max-w-2xl flex flex-col items-center justify-center p-4 sm:p-8 rounded-3xl bg-slate-900 border-2 border-indigo-500/40 shadow-2xl text-white text-center relative overflow-hidden seal-print-area"
            >
              {/* Decorative Subtle Background Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(#312e81_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none no-print" />

              {/* Printable Decorative Header */}
              <div className="w-full mb-3 border-b border-amber-500/30 pb-3 flex flex-col sm:flex-row items-center justify-between gap-2 relative z-10">
                <div className="text-left">
                  <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    Selo Oficial de Honra & Mérito Escolar
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-100 mt-0.5">
                    ConnectMe • {viewingGrade !== 'master' && currentGradeMeta ? currentGradeMeta.fullName : 'Ensino Fundamental (5º ao 9º Ano)'}
                  </h4>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-mono font-bold text-amber-300 bg-black/40 px-2.5 py-1 rounded border border-amber-400/30">
                    CÓD: {certificateCode}
                  </span>
                </div>
              </div>

              {/* Golden Medal Seal Container */}
              <div className="relative z-10 flex flex-col items-center w-full my-2">
                
                {/* Top Hanging Ribbon */}
                <div className="px-4 h-10 bg-gradient-to-b from-amber-400 via-amber-300 to-amber-600 rounded-t-lg shadow-md -mb-2 z-0 border-t-2 border-x-2 border-amber-200 flex items-center justify-center gap-1.5 text-[11px] font-black text-slate-950 uppercase tracking-widest">
                  {viewingGrade === 'master' ? (
                    <>
                      <span>👑</span>
                      <span>TOP MASTER</span>
                      <span>👑</span>
                    </>
                  ) : (
                    <>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </>
                  )}
                </div>

                {/* Main Medallion SVG with Razor-Sharp Geometric Text Paths */}
                <div className="relative flex items-center justify-center p-1">
                  <svg 
                    viewBox="0 0 400 400" 
                    className="w-80 h-80 sm:w-[380px] sm:h-[380px]"
                    style={{ textRendering: 'geometricPrecision', shapeRendering: 'geometricPrecision' }}
                  >
                    <defs>
                      {/* Gradient Definitions */}
                      <linearGradient id="goldRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#d97706" />
                        <stop offset="30%" stopColor="#fef08a" />
                        <stop offset="50%" stopColor="#f59e0b" />
                        <stop offset="70%" stopColor="#fef08a" />
                        <stop offset="100%" stopColor="#b45309" />
                      </linearGradient>

                      <linearGradient id="goldInnerRingGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#78350f" />
                        <stop offset="50%" stopColor="#fbbf24" />
                        <stop offset="100%" stopColor="#92400e" />
                      </linearGradient>

                      {/* Top Curved Text Path */}
                      <path 
                        id="seal-path-top" 
                        d="M 62,200 A 138,138 0 0,1 338,200" 
                        fill="none" 
                      />

                      {/* Bottom Curved Text Path */}
                      <path 
                        id="seal-path-bottom" 
                        d="M 62,200 A 138,138 0 0,0 338,200" 
                        fill="none" 
                      />
                    </defs>

                    {/* Outer Gold Coin Layer */}
                    <circle cx="200" cy="200" r="192" fill="url(#goldRimGrad)" stroke="#fef08a" strokeWidth="4" />
                    
                    {/* Coin Milled Border Ring */}
                    <circle cx="200" cy="200" r="180" fill="none" stroke="#78350f" strokeWidth="3" strokeDasharray="6 4" />
                    <circle cx="200" cy="200" r="172" fill="url(#goldInnerRingGrad)" />

                    {/* High-Contrast Dark Track for Text Readability */}
                    <circle cx="200" cy="200" r="160" fill="#090d16" stroke="#fef08a" strokeWidth="2.5" />
                    <circle cx="200" cy="200" r="118" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />

                    {/* Inner Gold Guilloche Ring & Center Medallion Disc */}
                    <circle cx="200" cy="200" r="112" fill="none" stroke="#fde047" strokeWidth="1" strokeDasharray="4 3" opacity="0.8" />
                    <circle cx="200" cy="200" r="106" fill="#020617" />

                    {/* TOP TEXT: TÍTULO DE TOP MASTER ou DEFENSOR */}
                    <text 
                      fill="#FFFFFF" 
                      fontSize={viewingGrade === 'master' ? "13.5" : "13"} 
                      fontWeight="900" 
                      letterSpacing={viewingGrade === 'master' ? "3" : "2.8"}
                      style={{
                        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                      }}
                    >
                      <textPath 
                        href="#seal-path-top" 
                        startOffset="50%" 
                        textAnchor="middle"
                      >
                        {viewingGrade === 'master' ? '★ TÍTULO DE TOP MASTER ★' : '★ DEFENSOR(A) DA ÉTICA DIGITAL ★'}
                      </textPath>
                    </text>

                    {/* BOTTOM TEXT: CONNECTME • GRADE LABEL */}
                    <text 
                      fill="#FDE047" 
                      fontSize="12" 
                      fontWeight="900" 
                      letterSpacing="2.5"
                      style={{
                        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                      }}
                    >
                      <textPath 
                        href="#seal-path-bottom" 
                        startOffset="50%" 
                        textAnchor="middle"
                      >
                        {viewingGrade !== 'master' && currentGradeMeta
                          ? `CONNECTME • ${currentGradeMeta.name.toUpperCase()}`
                          : 'CONNECTME • 5 SÉRIES CONCLUÍDAS'}
                      </textPath>
                    </text>
                  </svg>

                  {/* Centered High-Contrast Student Name & Avatar Plate */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none">
                    
                    {/* Student Avatar Icon */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-amber-400 via-yellow-200 to-amber-500 border-2 border-white flex items-center justify-center text-2xl sm:text-3xl shadow-lg mb-1 pointer-events-auto">
                      {playerAvatar || (viewingGrade !== 'master' && currentGradeMeta ? currentGradeMeta.badgeIcon : '🌟')}
                    </div>

                    {/* Label Badge */}
                    <div className="text-[9.5px] font-black uppercase tracking-widest text-amber-300 mb-1 flex items-center gap-1">
                      {viewingGrade === 'master' && <Crown className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />}
                      <span>{viewingGrade === 'master' ? 'TÍTULO DE TOP MASTER' : 'ESTUDANTE CERTIFICADO(A)'}</span>
                      {viewingGrade === 'master' && <Crown className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />}
                    </div>

                    {/* Student Name Plaque - Crystal Clear Solid Cream Background */}
                    <div className="px-4 py-2 rounded-xl bg-[#FFFDF5] text-slate-950 shadow-xl border-2 border-amber-400 max-w-[210px] sm:max-w-[240px] pointer-events-auto leading-tight">
                      <span 
                        className={`block font-black uppercase tracking-wide text-slate-950 ${
                          displayName.length > 24 
                            ? 'text-xs' 
                            : displayName.length > 16 
                              ? 'text-sm' 
                              : 'text-base sm:text-lg'
                        }`}
                        style={{
                          wordBreak: 'break-word'
                        }}
                      >
                        {displayName}
                      </span>
                    </div>

                    {/* Meritorious Subtitle / Role Badge */}
                    <div className="mt-1.5 flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/50 text-[9.5px] font-black uppercase tracking-wider text-amber-300">
                      <span>★</span>
                      <span>
                        {viewingGrade !== 'master' && currentGradeMeta
                          ? `${currentGradeMeta.name.toUpperCase()} CONCLUÍDO`
                          : 'TOP MASTER • 5 SÉRIES'}
                      </span>
                      <span>★</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Twin Golden Ribbons */}
                <div className="flex items-start justify-center gap-4 -mt-3 z-0">
                  <div className="w-8 h-16 bg-gradient-to-b from-amber-500 to-amber-700 shadow-lg transform -rotate-12 rounded-b-md border-x border-b border-amber-300/40" />
                  <div className="w-8 h-16 bg-gradient-to-b from-amber-500 to-amber-700 shadow-lg transform rotate-12 rounded-b-md border-x border-b border-amber-300/40" />
                </div>
              </div>

              {/* Seal Description Card */}
              <div className="mt-4 p-4 rounded-2xl bg-white/5 border border-white/10 max-w-lg text-center relative z-10">
                <p className="text-xs text-slate-300 leading-relaxed">
                  {viewingGrade !== 'master' && currentGradeMeta ? (
                    <>
                      Certifica que <strong className="text-amber-200 font-bold">{displayName}</strong> concluiu com honra os 10 desafios educativos do <strong>{currentGradeMeta.fullName}</strong> ({currentGradeMeta.themeFocus}).
                    </>
                  ) : (
                    <>
                      Certifica solenemente que <strong className="text-amber-200 font-bold">{displayName}</strong> superou com honra máxima todos os 50 desafios das 5 séries escolares (5º ao 9º Ano), outorgando com louvor o supremo <strong className="text-amber-300 font-black">Título de Top Master da Empatia e Cidadania Digital</strong>.
                    </>
                  )}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 mt-6 relative z-10 no-print">
                <button
                  id="btn-copy-seal-info"
                  onClick={handleShareOrCopy}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-300 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-amber-500/20 hover:brightness-110 transition-all cursor-pointer"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Compartilhar / Copiar Código</span>
                </button>

                <button
                  onClick={handlePrint}
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center gap-2 border border-white/20 transition-all cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Imprimir Selo de Honra</span>
                </button>

                <button
                  onClick={() => {
                    sounds.playClick();
                    setTempName(displayName);
                    setIsEditingName(true);
                  }}
                  className="px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 font-bold text-xs flex items-center gap-1.5 border border-white/10 transition-all cursor-pointer"
                >
                  <Edit3 className="w-3.5 h-3.5 text-amber-300" />
                  <span>Alterar Nome</span>
                </button>
              </div>

              {copiedNotification && (
                <div className="mt-3 text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-3 py-1 rounded-full animate-fadeIn">
                  ✓ Texto de validação copiado com sucesso!
                </div>
              )}
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 3: CURRICULAR COMPETENCIES (BNCC & ETHICS)           */}
          {/* ========================================================= */}
          {activeTab === 'competencies' && (
            <div 
              id="competencies-container"
              className="w-full max-w-4xl p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl text-slate-800 space-y-6 animate-fadeIn"
            >
              <div className="border-b border-slate-200 pb-4">
                <span className="text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Alinhamento Curricular BNCC & DUA
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                  Competências Desenvolvidas {viewingGrade !== 'master' && currentGradeMeta ? `no ${currentGradeMeta.fullName}` : 'no Ciclo Fundamental'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Este certificado valida o aprendizado ativo e as condutas éticas observadas ao longo das situações-problema:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 flex items-start gap-3">
                  <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                    4
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-indigo-950">
                      Competência Geral 4: Comunicação Empática
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Utilizar diferentes linguagens e mídias digitais para expressar-se e partilhar informações com clareza, ética e sensibilidade aos sentimentos dos pares.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-cyan-50/60 border border-cyan-100 flex items-start gap-3">
                  <span className="w-7 h-7 rounded-lg bg-cyan-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                    5
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-cyan-950">
                      Competência Geral 5: Cultura e Cidadania Digital
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Compreender, utilizar e criar tecnologias de forma crítica, reflexiva e ética, prevenindo golpes, desinformação, ciberameaças e exclusão virtual.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100 flex items-start gap-3">
                  <span className="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                    9
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-purple-950">
                      Competência Geral 9: Empatia, Diálogo e Resolução de Conflitos
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Exercitar a empatia, o diálogo, o acolhimento a vítimas de intimidação e a recusa ativa à cultura do cancelamento e à violência verbal.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between flex-wrap gap-3">
                <div>
                  <div className="text-xs font-bold text-slate-700">Autenticidade Curricular:</div>
                  <div className="text-[11px] font-mono text-slate-500">Validador: {certificateCode}</div>
                </div>
                <button
                  onClick={handlePrint}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Imprimir Relatório</span>
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {/* Quick Navigation Footer */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3 no-print">
        <button
          id="btn-cert-back-game"
          onClick={() => {
            sounds.playClick();
            onNavigate('game');
          }}
          className="px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-xs font-bold text-slate-700 flex items-center gap-1.5 transition-all cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Jogar Mais Desafios</span>
        </button>

        <button
          id="btn-cert-back-home"
          onClick={() => {
            sounds.playClick();
            onNavigate('home');
          }}
          className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all cursor-pointer"
        >
          <span>Voltar ao Menu Principal</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Edit Student Name Modal */}
      {isEditingName && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-6 shadow-2xl text-left animate-scaleUp">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center text-xl mb-3">
              ✏️
            </div>

            <h3 className="text-lg font-black text-slate-900">
              Nome para o Certificado & Selo
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Digite seu nome completo ou a forma exata como deseja que apareça no diploma oficial.
            </p>

            <form onSubmit={handleSaveName} className="mt-4">
              <label htmlFor="cert-name-input" className="text-xs font-bold text-slate-700 block mb-1">
                Nome do(a) Estudante:
              </label>
              <input
                id="cert-name-input"
                type="text"
                maxLength={40}
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                placeholder="Ex: Mariana Silva Santos"
                className="w-full px-4 py-2.5 rounded-xl text-sm font-semibold border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                autoFocus
              />

              <div className="mt-5 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsEditingName(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md cursor-pointer"
                >
                  Salvar no Certificado
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
