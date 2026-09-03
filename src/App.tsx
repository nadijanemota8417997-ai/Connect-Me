/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  AppScreen, 
  AccessibilitySettings, 
  Badge, 
  RankingStudent, 
  AnonymousReport,
  GradeLevel
} from './types';
import { initialBadges } from './data/badgesData';
import { initialRanking } from './data/rankingData';
import { initialReports } from './data/reportsData';
import { HomeScreen } from './components/HomeScreen';
import { GameScreen } from './components/GameScreen';
import { BadgesScreen } from './components/BadgesScreen';
import { RankingScreen } from './components/RankingScreen';
import { ReportChannelScreen } from './components/ReportChannelScreen';
import { SummaryScreen } from './components/SummaryScreen';
import { CertificateScreen } from './components/CertificateScreen';
import { CreditsModal } from './components/CreditsModal';
import { DUAToolbar } from './components/DUAToolbar';
import { DUAGlossaryModal } from './components/DUAGlossaryModal';
import { DUAPedagogicalModal } from './components/DUAPedagogicalModal';
import { ReadingGuideRuler } from './components/ReadingGuideRuler';
import { VisualSoundToast } from './components/VisualSoundToast';
import { HeaderNav } from './components/HeaderNav';
import { sounds } from './utils/soundEffects';
import { SpeechService, VoiceRecognitionService } from './utils/speechUtils';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('home');
  const [isCreditsOpen, setIsCreditsOpen] = useState<boolean>(false);
  const [isGlossaryOpen, setIsGlossaryOpen] = useState<boolean>(false);
  const [isPedagogicalModalOpen, setIsPedagogicalModalOpen] = useState<boolean>(false);
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel | 'all'>(() => {
    const saved = localStorage.getItem('connectme_selected_grade');
    return (saved as GradeLevel | 'all') || '5';
  });

  // Player Profile State
  const [playerName, setPlayerName] = useState<string>(() => {
    const saved = localStorage.getItem('connectme_player_name');
    return saved || '';
  });

  const [playerAvatar, setPlayerAvatar] = useState<string>(() => {
    const saved = localStorage.getItem('connectme_player_avatar');
    return saved || '🌟';
  });

  // User State
  const [empathyScore, setEmpathyScore] = useState<number>(() => {
    const saved = localStorage.getItem('connectme_empathy');
    return saved ? parseInt(saved, 10) : 840;
  });

  const [badges, setBadges] = useState<Badge[]>(() => {
    const saved = localStorage.getItem('connectme_badges');
    return saved ? JSON.parse(saved) : initialBadges;
  });

  const [rankingList, setRankingList] = useState<RankingStudent[]>(() => {
    const saved = localStorage.getItem('connectme_ranking');
    const list = saved ? JSON.parse(saved) : initialRanking;
    const initialName = localStorage.getItem('connectme_player_name');
    const initialAv = localStorage.getItem('connectme_player_avatar');
    return list.map((item: RankingStudent) => {
      if (item.id === 'user-me') {
        return {
          ...item,
          name: initialName ? `${initialName} (Você)` : 'Você (Estudante Conectado)',
          avatar: initialAv || '🌟'
        };
      }
      return item;
    });
  });

  const [reports, setReports] = useState<AnonymousReport[]>(() => {
    const saved = localStorage.getItem('connectme_reports');
    return saved ? JSON.parse(saved) : initialReports;
  });

  const [completedGrades, setCompletedGrades] = useState<GradeLevel[]>(() => {
    const saved = localStorage.getItem('connectme_completed_grades');
    return saved ? JSON.parse(saved) : [];
  });

  const handleGradeComplete = (grade: GradeLevel) => {
    setCompletedGrades((prev) => {
      if (!prev.includes(grade)) {
        const updated = [...prev, grade];
        localStorage.setItem('connectme_completed_grades', JSON.stringify(updated));
        if (updated.length >= 5) {
          handleUnlockBadge('badge-top-master');
        }
        return updated;
      }
      return prev;
    });
  };

  // Sync badge-top-master progress and unlock state with completedGrades
  useEffect(() => {
    setBadges((prev) =>
      prev.map((b) => {
        if (b.id === 'badge-top-master') {
          const count = completedGrades.length;
          const isDone = count >= 5;
          if (isDone && !b.unlocked) {
            return {
              ...b,
              unlocked: true,
              progress: 5,
              unlockedAt: 'Hoje',
            };
          }
          if (!b.unlocked && b.progress !== count) {
            return {
              ...b,
              progress: count,
            };
          }
        }
        return b;
      })
    );
  }, [completedGrades]);

  // Save Player Name & Avatar and update Ranking
  useEffect(() => {
    localStorage.setItem('connectme_player_name', playerName);
    setRankingList((prev) =>
      prev.map((item) => {
        if (item.id === 'user-me') {
          return {
            ...item,
            name: playerName ? `${playerName} (Você)` : 'Você (Estudante Conectado)',
            avatar: playerAvatar || '🌟',
            grade: selectedGrade !== 'all' ? `${selectedGrade}º Ano` : 'Ensino Fundamental'
          };
        }
        return item;
      })
    );
  }, [playerName, playerAvatar, selectedGrade]);

  useEffect(() => {
    localStorage.setItem('connectme_player_avatar', playerAvatar);
  }, [playerAvatar]);

  // DUA & Accessibility Settings
  const [accessibilitySettings, setAccessibilitySettings] = useState<AccessibilitySettings>(() => {
    const saved = localStorage.getItem('connectme_accessibility');
    return saved ? JSON.parse(saved) : {
      highContrast: false,
      fontSize: 'normal',
      simplifiedText: false,
      soundEnabled: true,
      autoReadTTS: false,
      voiceCommandsEnabled: false,
      readingGuideEnabled: false,
      dyslexiaFriendlyFont: false,
      speechSpeed: 1.0,
      visualSoundCaptions: true,
    };
  });

  // Save to LocalStorage
  useEffect(() => {
    localStorage.setItem('connectme_empathy', empathyScore.toString());
  }, [empathyScore]);

  useEffect(() => {
    localStorage.setItem('connectme_badges', JSON.stringify(badges));
  }, [badges]);

  useEffect(() => {
    localStorage.setItem('connectme_reports', JSON.stringify(reports));
  }, [reports]);

  useEffect(() => {
    localStorage.setItem('connectme_accessibility', JSON.stringify(accessibilitySettings));
  }, [accessibilitySettings]);

  useEffect(() => {
    localStorage.setItem('connectme_selected_grade', selectedGrade);
  }, [selectedGrade]);

  // Unlock badge helper
  const handleUnlockBadge = (badgeId: string) => {
    setBadges((prev) =>
      prev.map((b) => {
        if (b.id === badgeId && !b.unlocked) {
          sounds.playBadgeFanfare();
          return {
            ...b,
            unlocked: true,
            progress: b.maxProgress,
            unlockedAt: 'Hoje',
          };
        }
        return b;
      })
    );
  };

  // Empathy points increment
  const handleEmpathyChange = (delta: number) => {
    setEmpathyScore((prev) => Math.max(0, prev + delta));
  };

  // Add report
  const handleAddReport = (newReport: Omit<AnonymousReport, 'id' | 'timestamp' | 'likesOrSupportCount'>) => {
    const reportItem: AnonymousReport = {
      ...newReport,
      id: `rep-${Date.now()}`,
      timestamp: 'Agora',
      likesOrSupportCount: 1,
    };
    setReports((prev) => [reportItem, ...prev]);
    handleUnlockBadge('badge-voz-ativa');
  };

  // Update report moderation status
  const handleUpdateReportStatus = (id: string, newStatus: AnonymousReport['status'], notes?: string) => {
    setReports((prev) =>
      prev.map((r) => {
        if (r.id === id) {
          return {
            ...r,
            status: newStatus,
            moderatorNotes: notes || r.moderatorNotes,
          };
        }
        return r;
      })
    );
  };

  // Update DUA settings
  const handleUpdateSettings = (newSettings: Partial<AccessibilitySettings>) => {
    setAccessibilitySettings((prev) => ({ ...prev, ...newSettings }));
  };

  // Voice Command Dispatcher
  const handleVoiceCommand = (command: string) => {
    const lower = command.toLowerCase().trim();

    if (lower.includes('5º') || lower.includes('quinto ano') || lower.includes('5 ano')) {
      sounds.playClick();
      setSelectedGrade('5');
      setCurrentScreen('game');
      SpeechService.speak('Selecionado 5º Ano. Iniciando desafios.');
    } else if (lower.includes('6º') || lower.includes('sexto ano') || lower.includes('6 ano')) {
      sounds.playClick();
      setSelectedGrade('6');
      setCurrentScreen('game');
      SpeechService.speak('Selecionado 6º Ano. Iniciando desafios.');
    } else if (lower.includes('7º') || lower.includes('sétimo ano') || lower.includes('7 ano')) {
      sounds.playClick();
      setSelectedGrade('7');
      setCurrentScreen('game');
      SpeechService.speak('Selecionado 7º Ano. Iniciando desafios.');
    } else if (lower.includes('8º') || lower.includes('oitavo ano') || lower.includes('8 ano')) {
      sounds.playClick();
      setSelectedGrade('8');
      setCurrentScreen('game');
      SpeechService.speak('Selecionado 8º Ano. Iniciando desafios.');
    } else if (lower.includes('9º') || lower.includes('nono ano') || lower.includes('9 ano')) {
      sounds.playClick();
      setSelectedGrade('9');
      setCurrentScreen('game');
      SpeechService.speak('Selecionado 9º Ano. Iniciando desafios.');
    } else if (lower.includes('jogar') || lower.includes('começar') || lower.includes('iniciar')) {
      sounds.playClick();
      setCurrentScreen('game');
      SpeechService.speak('Iniciando o jogo ConnectMe.');
    } else if (lower.includes('classificação') || lower.includes('ranking') || lower.includes('placar') || lower.includes('líderes')) {
      sounds.playClick();
      setCurrentScreen('ranking');
      SpeechService.speak('Abrindo classificação escolar.');
    } else if (lower.includes('medalha') || lower.includes('conquista') || lower.includes('troféu')) {
      sounds.playClick();
      setCurrentScreen('badges');
      SpeechService.speak('Abrindo galeria de medalhas.');
    } else if (lower.includes('certificado') || lower.includes('selo') || lower.includes('diploma')) {
      sounds.playBadgeFanfare();
      setCurrentScreen('certificate');
      SpeechService.speak('Abrindo emissão do Certificado e Selo com seu nome.');
    } else if (lower.includes('denúncia') || lower.includes('relato') || lower.includes('seguro')) {
      sounds.playClick();
      setCurrentScreen('reports');
      SpeechService.speak('Abrindo canal de denúncia anônima.');
    } else if (lower.includes('crédito') || lower.includes('criadores') || lower.includes('equipe')) {
      sounds.playClick();
      setIsCreditsOpen(true);
      SpeechService.speak('Créditos: Agatha Kaylanne, Karollayne, Christopher, Isabella, Sofia, Luiz Eduardo.');
    } else if (lower.includes('glossário') || lower.includes('dicionário') || lower.includes('termos')) {
      sounds.playClick();
      setIsGlossaryOpen(true);
      SpeechService.speak('Abrindo glossário da cultura digital.');
    } else if (lower.includes('dua') || lower.includes('bncc') || lower.includes('acessibilidade') || lower.includes('pedagógico')) {
      sounds.playClick();
      setIsPedagogicalModalOpen(true);
      SpeechService.speak('Abrindo painel do Desenho Universal para a Aprendizagem.');
    } else if (lower.includes('régua') || lower.includes('linha de foco')) {
      sounds.playClick();
      setAccessibilitySettings(s => ({ ...s, readingGuideEnabled: !s.readingGuideEnabled }));
    } else if (lower.includes('início') || lower.includes('home') || lower.includes('voltar')) {
      sounds.playClick();
      setCurrentScreen('home');
      setIsCreditsOpen(false);
      setIsGlossaryOpen(false);
      setIsPedagogicalModalOpen(false);
    } else if (lower.includes('opção 1') || lower.includes('opção a') || lower.includes('primeira opção')) {
      const btn = document.getElementById('choice-btn-1');
      if (btn) btn.click();
    } else if (lower.includes('opção 2') || lower.includes('opção b') || lower.includes('segunda opção')) {
      const btn = document.getElementById('choice-btn-2');
      if (btn) btn.click();
    } else if (lower.includes('opção 3') || lower.includes('opção c') || lower.includes('terceira opção')) {
      const btn = document.getElementById('choice-btn-3');
      if (btn) btn.click();
    } else if (lower.includes('próxima') || lower.includes('avançar') || lower.includes('continuar')) {
      const btn = document.getElementById('btn-next-scenario');
      if (btn) btn.click();
    } else if (lower.includes('tentar') || lower.includes('repetir') || lower.includes('outra escolha')) {
      const btn = document.getElementById('btn-retry-scenario');
      if (btn) btn.click();
    } else if (lower.includes('parar') || lower.includes('silêncio')) {
      SpeechService.stop();
    } else if (lower.includes('alto contraste')) {
      sounds.playClick();
      setAccessibilitySettings(s => ({ ...s, highContrast: !s.highContrast }));
    } else if (lower.includes('texto simples') || lower.includes('simplificar')) {
      sounds.playClick();
      setAccessibilitySettings(s => ({ ...s, simplifiedText: !s.simplifiedText }));
    }
  };

  const unlockedBadgesCount = badges.filter((b) => b.unlocked).length;

  return (
    <div 
      id="connectme-app-root"
      className={`min-h-screen flex flex-col justify-between transition-colors font-sans ${
        accessibilitySettings.dyslexiaFriendlyFont ? 'dyslexia-mode' : ''
      } ${
        accessibilitySettings.highContrast
          ? 'bg-black text-yellow-300'
          : 'bg-[#F8FAFC] text-slate-800'
      }`}
    >
      {/* Interactive DUA Reading Guide Ruler */}
      <ReadingGuideRuler 
        enabled={accessibilitySettings.readingGuideEnabled} 
        highContrast={accessibilitySettings.highContrast} 
      />

      {/* Visual Closed-Captions Sound Indicator for Hearing Inclusivity */}
      <VisualSoundToast 
        enabled={accessibilitySettings.visualSoundCaptions} 
        highContrast={accessibilitySettings.highContrast} 
      />

      {/* Top Header Navigation (active when outside home) */}
      <HeaderNav
        currentScreen={currentScreen}
        onNavigate={setCurrentScreen}
        empathyScore={empathyScore}
        unlockedBadgesCount={unlockedBadgesCount}
        settings={accessibilitySettings}
        playerName={playerName}
        playerAvatar={playerAvatar}
        onOpenCredits={() => setIsCreditsOpen(true)}
        onOpenPedagogicalModal={() => setIsPedagogicalModalOpen(true)}
        onOpenGlossary={() => setIsGlossaryOpen(true)}
      />

      {/* Main Screen View Router */}
      <main className="w-full flex-1 pb-16">
        {currentScreen === 'home' && (
          <HomeScreen
            onNavigate={setCurrentScreen}
            onOpenCredits={() => setIsCreditsOpen(true)}
            empathyScore={empathyScore}
            unlockedBadgesCount={unlockedBadgesCount}
            totalBadgesCount={badges.length}
            settings={accessibilitySettings}
            selectedGrade={selectedGrade}
            onSelectGrade={setSelectedGrade}
            playerName={playerName}
            onUpdatePlayerName={setPlayerName}
            playerAvatar={playerAvatar}
            onUpdatePlayerAvatar={setPlayerAvatar}
            onOpenPedagogicalModal={() => setIsPedagogicalModalOpen(true)}
            onOpenGlossary={() => setIsGlossaryOpen(true)}
            completedGrades={completedGrades}
            rankingList={rankingList}
          />
        )}

        {currentScreen === 'game' && (
          <GameScreen
            settings={accessibilitySettings}
            selectedGrade={selectedGrade}
            onSelectGrade={setSelectedGrade}
            playerName={playerName}
            playerAvatar={playerAvatar}
            onEmpathyChange={handleEmpathyChange}
            onUnlockBadge={handleUnlockBadge}
            onFinishAllScenarios={() => setCurrentScreen('summary')}
            onGradeComplete={handleGradeComplete}
            onNavigateToCertificate={() => setCurrentScreen('certificate')}
            completedGrades={completedGrades}
          />
        )}

        {currentScreen === 'ranking' && (
          <RankingScreen
            rankingList={rankingList}
            settings={accessibilitySettings}
            userEmpathyScore={empathyScore}
          />
        )}

        {currentScreen === 'badges' && (
          <BadgesScreen
            badges={badges}
            settings={accessibilitySettings}
            empathyScore={empathyScore}
            playerName={playerName}
            playerAvatar={playerAvatar}
            onNavigateToCertificate={() => setCurrentScreen('certificate')}
            completedGrades={completedGrades}
          />
        )}

        {currentScreen === 'reports' && (
          <ReportChannelScreen
            reports={reports}
            settings={accessibilitySettings}
            onAddReport={handleAddReport}
            onUpdateStatus={handleUpdateReportStatus}
          />
        )}

        {currentScreen === 'summary' && (
          <SummaryScreen
            empathyScore={empathyScore}
            badges={badges}
            playerName={playerName}
            playerAvatar={playerAvatar}
            settings={accessibilitySettings}
            onRestart={() => setCurrentScreen('game')}
            onViewRanking={() => setCurrentScreen('ranking')}
            onOpenCredits={() => setIsCreditsOpen(true)}
            onViewCertificate={() => setCurrentScreen('certificate')}
            completedGrades={completedGrades}
            selectedGrade={selectedGrade}
          />
        )}

        {currentScreen === 'certificate' && (
          <CertificateScreen
            playerName={playerName}
            playerAvatar={playerAvatar}
            onUpdatePlayerName={setPlayerName}
            onUpdatePlayerAvatar={setPlayerAvatar}
            empathyScore={empathyScore}
            badges={badges}
            selectedGrade={selectedGrade}
            completedGrades={completedGrades}
            settings={accessibilitySettings}
            onNavigate={setCurrentScreen}
            onSelectGradeAndPlay={(grade) => {
              setSelectedGrade(grade);
              setCurrentScreen('game');
            }}
          />
        )}
      </main>

      {/* Professional Polish Footer Bar */}
      <footer 
        id="app-global-footer"
        className={`h-12 border-t px-4 sm:px-8 flex flex-wrap items-center justify-between text-[11px] shrink-0 font-medium z-20 ${
          accessibilitySettings.highContrast
            ? 'bg-black border-yellow-400 text-yellow-300'
            : 'bg-white border-slate-200 text-slate-500 shadow-sm'
        }`}
      >
        <div className="flex items-center gap-3 flex-wrap">
          <span className="font-semibold text-slate-700">ConnectMe • Empatia Digital</span>
          <span className="text-slate-300 hidden sm:inline">|</span>
          <span className="hidden md:inline text-slate-500">
            Créditos: Agatha Kaylanne, Karollayne, Christopher, Isabella, Sofia, Luiz Eduardo
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsCreditsOpen(true)}
            className="hover:underline text-indigo-600 font-semibold cursor-pointer"
          >
            Ver Equipe
          </button>
          <button
            onClick={() => {
              sounds.playClick();
              setIsPedagogicalModalOpen(true);
            }}
            className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded-full font-bold text-[10px] uppercase tracking-wider transition-all cursor-pointer"
          >
            🌟 DUA & BNCC
          </button>
        </div>
      </footer>

      {/* Floating Universal Design for Learning (DUA) & Accessibility Bar */}
      <DUAToolbar
        settings={accessibilitySettings}
        onUpdateSettings={handleUpdateSettings}
        onVoiceCommandTrigger={handleVoiceCommand}
        onOpenGlossary={() => setIsGlossaryOpen(true)}
        onOpenPedagogicalModal={() => setIsPedagogicalModalOpen(true)}
      />

      {/* Creators & Pedagogy Credits Modal */}
      <CreditsModal
        isOpen={isCreditsOpen}
        onClose={() => setIsCreditsOpen(false)}
        highContrast={accessibilitySettings.highContrast}
      />

      {/* DUA Digital Culture Interactive Glossary Modal */}
      <DUAGlossaryModal
        isOpen={isGlossaryOpen}
        onClose={() => setIsGlossaryOpen(false)}
        settings={accessibilitySettings}
      />

      {/* DUA CAST Principles & BNCC Pedagogical Modal */}
      <DUAPedagogicalModal
        isOpen={isPedagogicalModalOpen}
        onClose={() => setIsPedagogicalModalOpen(false)}
        settings={accessibilitySettings}
        onUpdateSettings={handleUpdateSettings}
        onOpenGlossary={() => setIsGlossaryOpen(true)}
      />
    </div>
  );
}
