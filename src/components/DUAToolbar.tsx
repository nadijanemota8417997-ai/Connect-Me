import React, { useState, useEffect } from 'react';
import { 
  Volume2, 
  VolumeX, 
  Mic, 
  MicOff, 
  Type, 
  Eye, 
  Sparkles, 
  HelpCircle, 
  X, 
  Radio,
  BookOpen,
  GraduationCap,
  Gauge
} from 'lucide-react';
import { AccessibilitySettings } from '../types';
import { sounds } from '../utils/soundEffects';
import { SpeechService, VoiceRecognitionService } from '../utils/speechUtils';

interface DUAToolbarProps {
  settings: AccessibilitySettings;
  onUpdateSettings: (newSettings: Partial<AccessibilitySettings>) => void;
  onVoiceCommandTrigger?: (command: string) => void;
  onOpenGlossary?: () => void;
  onOpenPedagogicalModal?: () => void;
}

export const DUAToolbar: React.FC<DUAToolbarProps> = ({
  settings,
  onUpdateSettings,
  onVoiceCommandTrigger,
  onOpenGlossary,
  onOpenPedagogicalModal,
}) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListeningVoice, setIsListeningVoice] = useState(false);
  const [voiceTranscript, setVoiceTranscript] = useState('');
  const [showVoiceHelp, setShowVoiceHelp] = useState(false);

  useEffect(() => {
    const unsubscribe = SpeechService.subscribe((speaking) => {
      setIsSpeaking(speaking);
    });
    return () => unsubscribe();
  }, []);

  const handleToggleSound = () => {
    const nextVal = !settings.soundEnabled;
    sounds.setEnabled(nextVal);
    if (nextVal) sounds.playClick();
    onUpdateSettings({ soundEnabled: nextVal });
  };

  const handleToggleContrast = () => {
    sounds.playClick();
    onUpdateSettings({ highContrast: !settings.highContrast });
  };

  const handleCycleFontSize = () => {
    sounds.playClick();
    const sizes: ('normal' | 'large' | 'xlarge')[] = ['normal', 'large', 'xlarge'];
    const currentIndex = sizes.indexOf(settings.fontSize);
    const nextSize = sizes[(currentIndex + 1) % sizes.length];
    onUpdateSettings({ fontSize: nextSize });
  };

  const handleToggleSimplified = () => {
    sounds.playClick();
    onUpdateSettings({ simplifiedText: !settings.simplifiedText });
  };

  const handleToggleReadingGuide = () => {
    sounds.playClick();
    onUpdateSettings({ readingGuideEnabled: !settings.readingGuideEnabled });
  };

  const handleToggleDyslexiaFont = () => {
    sounds.playClick();
    onUpdateSettings({ dyslexiaFriendlyFont: !settings.dyslexiaFriendlyFont });
  };

  const handleCycleSpeed = () => {
    sounds.playClick();
    const speeds = [0.8, 1.0, 1.25];
    const current = settings.speechSpeed || 1.0;
    const nextIndex = (speeds.indexOf(current) + 1) % speeds.length;
    const nextSpeed = speeds[nextIndex];
    onUpdateSettings({ speechSpeed: nextSpeed });
    SpeechService.speak(`Velocidade de voz ajustada para ${nextSpeed} vezes.`, nextSpeed);
  };

  const handleToggleVoiceCommands = () => {
    sounds.playClick();
    if (!VoiceRecognitionService.isSupported()) {
      alert('Reconhecimento de voz não suportado neste navegador. Use o Google Chrome ou Microsoft Edge.');
      return;
    }

    if (isListeningVoice) {
      VoiceRecognitionService.stopListening();
      setIsListeningVoice(false);
      onUpdateSettings({ voiceCommandsEnabled: false });
    } else {
      setIsListeningVoice(true);
      onUpdateSettings({ voiceCommandsEnabled: true });
      VoiceRecognitionService.startListening(
        (transcript) => {
          if (onVoiceCommandTrigger) {
            onVoiceCommandTrigger(transcript);
          }
        },
        (listening, text) => {
          setIsListeningVoice(listening);
          setVoiceTranscript(text);
        }
      );
    }
  };

  const handleStopSpeaking = () => {
    SpeechService.stop();
  };

  return (
    <>
      {/* Floating Voice Transcript Banner if active */}
      {isListeningVoice && (
        <div 
          id="voice-command-live-banner"
          className="fixed top-2 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-slate-900/95 border border-indigo-400 text-indigo-200 text-xs font-semibold shadow-xl backdrop-blur-md flex items-center gap-2 animate-pulse"
        >
          <Radio className="w-4 h-4 text-indigo-400 animate-spin" />
          <span>Microfone ativo (Comando de voz):</span>
          <span className="text-white font-bold max-w-[200px] truncate">
            {voiceTranscript || 'Diga "Jogar", "Opção 1", "Medalhas"...'}
          </span>
          <button 
            onClick={() => setShowVoiceHelp(true)}
            className="underline text-indigo-300 hover:text-white text-[11px] ml-1"
          >
            Ajuda
          </button>
        </div>
      )}

      {/* Main DUA Floating Bar / Pill */}
      <div 
        id="dua-accessibility-toolbar"
        className={`fixed bottom-4 right-4 z-40 flex items-center gap-1 sm:gap-1.5 p-1.5 rounded-2xl shadow-xl backdrop-blur-xl border transition-all duration-300 max-w-[95vw] overflow-x-auto ${
          settings.highContrast
            ? 'bg-black/95 border-2 border-yellow-400 text-yellow-300'
            : 'bg-white/95 border-slate-200 text-slate-700 shadow-lg'
        }`}
        role="region"
        aria-label="Ferramentas de Acessibilidade e DUA"
      >
        {/* DUA Badge & Pedagogical Modal Trigger */}
        <button
          id="btn-dua-pedagogical-panel"
          onClick={() => {
            sounds.playClick();
            if (onOpenPedagogicalModal) onOpenPedagogicalModal();
          }}
          className="px-2.5 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
          title="Abrir Painel Pedagógico DUA & BNCC"
          aria-label="Painel Pedagógico DUA e BNCC"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>DUA</span>
        </button>

        {/* Digital Culture Glossary Trigger */}
        {onOpenGlossary && (
          <button
            id="btn-dua-glossary"
            onClick={() => {
              sounds.playClick();
              onOpenGlossary();
            }}
            className={`p-2 rounded-xl text-xs font-bold flex items-center gap-1 transition-all cursor-pointer ${
              settings.highContrast
                ? 'hover:bg-yellow-400 hover:text-black'
                : 'hover:bg-indigo-50 text-indigo-700 hover:text-indigo-900'
            }`}
            title="Dicionário de Termos e Gírias Digitais"
            aria-label="Abrir Glossário Digital"
          >
            <BookOpen className="w-4 h-4" />
            <span className="text-[11px] hidden sm:inline">Glossário</span>
          </button>
        )}

        {/* Font Size Cycle */}
        <button
          id="btn-dua-fontsize"
          onClick={handleCycleFontSize}
          className={`p-2 rounded-xl text-xs font-bold flex items-center gap-1 transition-all cursor-pointer ${
            settings.highContrast
              ? 'hover:bg-yellow-400 hover:text-black'
              : 'hover:bg-slate-100 text-slate-700'
          }`}
          title="Alterar tamanho da fonte"
          aria-label={`Tamanho da fonte: ${settings.fontSize}`}
        >
          <Type className="w-4 h-4" />
          <span className="text-[11px]">
            {settings.fontSize === 'normal' ? 'A' : settings.fontSize === 'large' ? 'A+' : 'A++'}
          </span>
        </button>

        {/* High Contrast Toggle */}
        <button
          id="btn-dua-contrast"
          onClick={handleToggleContrast}
          className={`p-2 rounded-xl transition-all cursor-pointer ${
            settings.highContrast
              ? 'bg-yellow-400 text-black font-bold'
              : 'hover:bg-slate-100 text-slate-700'
          }`}
          title="Modo Alto Contraste"
          aria-label="Alternar Alto Contraste"
        >
          <Eye className="w-4 h-4" />
        </button>

        {/* Reading Guide Ruler Toggle */}
        <button
          id="btn-dua-reading-ruler"
          onClick={handleToggleReadingGuide}
          className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer ${
            settings.readingGuideEnabled
              ? 'bg-indigo-600 text-white font-bold shadow-sm'
              : 'hover:bg-slate-100 text-slate-700'
          }`}
          title="Régua de Leitura Focal (DUA)"
          aria-label="Alternar Régua de Leitura"
        >
          <span className="text-sm">📏</span>
          <span className="text-[11px] hidden lg:inline">Régua</span>
        </button>

        {/* Dyslexia-Friendly Font Toggle */}
        <button
          id="btn-dua-dyslexia-font"
          onClick={handleToggleDyslexiaFont}
          className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer ${
            settings.dyslexiaFriendlyFont
              ? 'bg-indigo-600 text-white font-bold shadow-sm'
              : 'hover:bg-slate-100 text-slate-700'
          }`}
          title="Fonte Acessível com Espaçamento Amplo"
          aria-label="Alternar Fonte Acessível"
        >
          <span className="text-xs font-black">🔤</span>
        </button>

        {/* Simplified Text Mode Toggle */}
        <button
          id="btn-dua-simplified"
          onClick={handleToggleSimplified}
          className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer ${
            settings.simplifiedText
              ? 'bg-indigo-600 text-white font-bold shadow-sm'
              : 'hover:bg-slate-100 text-slate-700'
          }`}
          title="Modo Linguagem Simples (DUA)"
          aria-label="Alternar Linguagem Clara DUA"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span className="text-[11px] hidden md:inline">Texto Simples</span>
        </button>

        {/* Audio Speech Speed Cycle */}
        <button
          id="btn-dua-speech-speed"
          onClick={handleCycleSpeed}
          className="p-2 rounded-xl hover:bg-slate-100 text-slate-700 text-xs font-extrabold flex items-center gap-0.5 transition-all cursor-pointer"
          title={`Velocidade da Voz (${settings.speechSpeed || 1.0}x)`}
          aria-label="Ajustar velocidade de leitura"
        >
          <Gauge className="w-3.5 h-3.5" />
          <span className="text-[10px]">{settings.speechSpeed || 1.0}x</span>
        </button>

        {/* Text-to-Speech Stop if speaking */}
        {isSpeaking && (
          <button
            id="btn-stop-tts"
            onClick={handleStopSpeaking}
            className="px-2 py-1.5 rounded-xl bg-rose-600 text-white text-xs font-bold flex items-center gap-1 animate-pulse shadow-sm cursor-pointer"
            title="Parar leitura em voz alta"
          >
            <VolumeX className="w-4 h-4" />
            <span className="text-[11px]">Parar Voz</span>
          </button>
        )}

        {/* Voice Commands (Microphone) */}
        <button
          id="btn-dua-voice-command"
          onClick={handleToggleVoiceCommands}
          className={`p-2 rounded-xl transition-all flex items-center gap-1 cursor-pointer ${
            isListeningVoice
              ? 'bg-emerald-600 text-white font-bold animate-pulse shadow-sm'
              : 'hover:bg-slate-100 text-slate-700'
          }`}
          title="Comandos de Voz"
          aria-label="Alternar Comandos de Voz"
        >
          {isListeningVoice ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
          <span className="text-[11px] hidden xl:inline">Voz</span>
        </button>

        {/* Sound Effects Toggle */}
        <button
          id="btn-dua-sound"
          onClick={handleToggleSound}
          className={`p-2 rounded-xl transition-all cursor-pointer ${
            !settings.soundEnabled
              ? 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
              : 'text-indigo-600 hover:bg-slate-100'
          }`}
          title="Efeitos Sonoros"
          aria-label="Alternar Sons"
        >
          {settings.soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        </button>

        {/* Voice Help Trigger */}
        <button
          id="btn-dua-help"
          onClick={() => {
            sounds.playClick();
            setShowVoiceHelp(true);
          }}
          className="p-2 rounded-xl hover:bg-slate-100 text-slate-500 hover:text-indigo-600 transition-all cursor-pointer"
          title="Guia de Comandos de Voz e DUA"
          aria-label="Abrir guia de acessibilidade"
        >
          <HelpCircle className="w-4 h-4" />
        </button>
      </div>

      {/* Voice & DUA Help Modal */}
      {showVoiceHelp && (
        <div 
          id="voice-help-modal-overlay"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setShowVoiceHelp(false)}
        >
          <div 
            id="voice-help-modal"
            className="w-full max-w-md rounded-3xl p-6 bg-white border border-slate-200 text-slate-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-indigo-600 font-bold text-base">
                <Mic className="w-5 h-5 text-indigo-600" />
                Guia de Comandos de Voz & DUA
              </div>
              <button 
                onClick={() => setShowVoiceHelp(false)}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-600 mb-4">
              Você pode navegar no jogo usando sua voz! Ative o microfone na barra inferior e fale claramente em português:
            </p>

            <div className="space-y-2 mb-5">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                <span className="font-semibold text-indigo-700">"Opção 1" / "Opção 2" / "Opção 3"</span>
                <span className="text-slate-500">Escolhe a resposta no cenário</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                <span className="font-semibold text-indigo-700">"Jogar" / "Começar"</span>
                <span className="text-slate-500">Inicia as missões</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                <span className="font-semibold text-indigo-700">"Próximo" / "Continuar"</span>
                <span className="text-slate-500">Avança para o próximo caso</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                <span className="font-semibold text-indigo-700">"Ler" / "Ouvir"</span>
                <span className="text-slate-500">Lê o texto na tela em voz alta</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                <span className="font-semibold text-indigo-700">"Medalhas" / "Classificação" / "Denúncia"</span>
                <span className="text-slate-500">Navega direto para a tela</span>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-indigo-50 border border-indigo-100 text-[11px] text-indigo-950 mb-4">
              💡 <strong>Desenho Universal para a Aprendizagem (DUA):</strong> O jogo oferece múltiplos meios de engajamento (cenários visuais), representação (áudio TTS, texto simples, régua focal, alto contraste) e ação (teclado, toque, voz).
            </div>

            <button
              onClick={() => {
                sounds.playClick();
                setShowVoiceHelp(false);
              }}
              className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition-all shadow-sm cursor-pointer"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </>
  );
};
