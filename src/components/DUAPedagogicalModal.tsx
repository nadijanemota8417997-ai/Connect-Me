import React from 'react';
import { 
  Sparkles, 
  X, 
  CheckCircle2, 
  Volume2, 
  Mic, 
  Eye, 
  Type, 
  BookOpen, 
  Sliders, 
  GraduationCap,
  Heart,
  ShieldCheck,
  Zap,
  Layers,
  Award
} from 'lucide-react';
import { AccessibilitySettings } from '../types';
import { sounds } from '../utils/soundEffects';
import { SpeechService } from '../utils/speechUtils';

interface DUAPedagogicalModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: AccessibilitySettings;
  onUpdateSettings: (newSettings: Partial<AccessibilitySettings>) => void;
  onOpenGlossary: () => void;
}

export const DUAPedagogicalModal: React.FC<DUAPedagogicalModalProps> = ({
  isOpen,
  onClose,
  settings,
  onUpdateSettings,
  onOpenGlossary,
}) => {
  if (!isOpen) return null;

  const handleToggle = (key: keyof AccessibilitySettings) => {
    sounds.playClick();
    onUpdateSettings({ [key]: !settings[key] });
  };

  const handleSpeakOverview = () => {
    SpeechService.speak(
      'Desenho Universal para a Aprendizagem no ConnectMe. O jogo aplica os três princípios do DUA: múltiplos meios de engajamento, múltiplos meios de representação e múltiplos meios de ação e expressão, garantindo inclusão e cidadania digital para todos os estudantes do 5º ao 9º ano.',
      settings.speechSpeed || 1.0
    );
  };

  return (
    <div 
      id="dua-pedagogical-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dua-pedagogical-title"
    >
      <div 
        id="dua-pedagogical-modal-container"
        className={`w-full max-w-3xl max-h-[92vh] rounded-3xl p-5 sm:p-7 border flex flex-col shadow-2xl overflow-hidden transition-all ${
          settings.highContrast
            ? 'bg-black border-4 border-yellow-400 text-yellow-300'
            : 'bg-white border-slate-200 text-slate-800'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-3 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-md">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-[11px] font-black uppercase">
                🎓 CAST Framework & BNCC
              </div>
              <h2 id="dua-pedagogical-title" className="text-lg sm:text-xl font-black text-slate-900 mt-0.5">
                Desenho Universal para a Aprendizagem (DUA)
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSpeakOverview}
              className="p-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 transition-all text-xs font-bold flex items-center gap-1 cursor-pointer"
              title="Ouvir explicação do DUA"
            >
              <Volume2 className="w-4 h-4" />
              <span className="hidden sm:inline">Ouvir DUA</span>
            </button>
            <button
              id="btn-close-dua-pedagogical"
              onClick={() => {
                sounds.playClick();
                onClose();
              }}
              className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-all cursor-pointer"
              aria-label="Fechar painel DUA"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto py-4 space-y-6 pr-1 text-xs sm:text-sm">
          
          {/* Quick Active Controls Panel */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-purple-50/50 to-slate-50 border border-indigo-100">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-extrabold text-xs sm:text-sm text-indigo-950 flex items-center gap-1.5">
                <Sliders className="w-4 h-4 text-indigo-600" />
                Painel Rápido de Configuração DUA
              </h3>
              <button
                onClick={() => {
                  onClose();
                  onOpenGlossary();
                }}
                className="px-2.5 py-1 rounded-xl bg-white border border-indigo-200 hover:bg-indigo-50 text-indigo-700 text-xs font-bold shadow-xs cursor-pointer flex items-center gap-1"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Abrir Glossário</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              
              {/* Leitura em Voz Alta (TTS) */}
              <button
                onClick={() => handleToggle('autoReadTTS')}
                className={`p-2.5 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                  settings.autoReadTTS 
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs' 
                    : 'bg-white border-slate-200 hover:border-indigo-300 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Volume2 className="w-4 h-4" />
                  <span className="font-bold text-xs">Leitura em Voz Alta</span>
                </div>
                <span className="text-[10px] font-black uppercase">{settings.autoReadTTS ? 'ON' : 'OFF'}</span>
              </button>

              {/* Texto Simplificado */}
              <button
                onClick={() => handleToggle('simplifiedText')}
                className={`p-2.5 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                  settings.simplifiedText 
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs' 
                    : 'bg-white border-slate-200 hover:border-indigo-300 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Type className="w-4 h-4" />
                  <span className="font-bold text-xs">Linguagem Simples</span>
                </div>
                <span className="text-[10px] font-black uppercase">{settings.simplifiedText ? 'ON' : 'OFF'}</span>
              </button>

              {/* Régua de Leitura */}
              <button
                onClick={() => handleToggle('readingGuideEnabled')}
                className={`p-2.5 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                  settings.readingGuideEnabled 
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs' 
                    : 'bg-white border-slate-200 hover:border-indigo-300 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>📏</span>
                  <span className="font-bold text-xs">Régua de Foco</span>
                </div>
                <span className="text-[10px] font-black uppercase">{settings.readingGuideEnabled ? 'ON' : 'OFF'}</span>
              </button>

              {/* Fonte Amigável para Dislexia */}
              <button
                onClick={() => handleToggle('dyslexiaFriendlyFont')}
                className={`p-2.5 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                  settings.dyslexiaFriendlyFont 
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs' 
                    : 'bg-white border-slate-200 hover:border-indigo-300 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>🔤</span>
                  <span className="font-bold text-xs">Fonte Acessível</span>
                </div>
                <span className="text-[10px] font-black uppercase">{settings.dyslexiaFriendlyFont ? 'ON' : 'OFF'}</span>
              </button>

              {/* Alto Contraste */}
              <button
                onClick={() => handleToggle('highContrast')}
                className={`p-2.5 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                  settings.highContrast 
                    ? 'bg-yellow-400 text-black border-yellow-400 font-bold shadow-xs' 
                    : 'bg-white border-slate-200 hover:border-indigo-300 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span className="font-bold text-xs">Alto Contraste</span>
                </div>
                <span className="text-[10px] font-black uppercase">{settings.highContrast ? 'ON' : 'OFF'}</span>
              </button>

              {/* Legendas de Som */}
              <button
                onClick={() => handleToggle('visualSoundCaptions')}
                className={`p-2.5 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                  settings.visualSoundCaptions 
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs' 
                    : 'bg-white border-slate-200 hover:border-indigo-300 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>💬</span>
                  <span className="font-bold text-xs">Legendas Visuais</span>
                </div>
                <span className="text-[10px] font-black uppercase">{settings.visualSoundCaptions ? 'ON' : 'OFF'}</span>
              </button>

            </div>
          </div>

          {/* Os 3 Pilares do DUA */}
          <div className="space-y-4">
            <h3 className="font-black text-sm text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <span>🌟</span>
              <span>Os Três Princípios do DUA Aplicados no ConnectMe</span>
            </h3>

            {/* Pilar 1 */}
            <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/90 text-slate-800">
              <div className="flex items-center gap-2.5 mb-2 text-emerald-800 font-extrabold text-sm">
                <span className="p-1 rounded-lg bg-emerald-600 text-white text-xs">1</span>
                <span>Múltiplos Meios de Engajamento (O "Porquê" da Aprendizagem)</span>
              </div>
              <p className="text-xs text-slate-600 mb-2 leading-relaxed">
                Desperta o interesse e sustenta o esforço através de desafios conectados à realidade dos alunos:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Desafios por Faixa Etária:</strong> Cenários próprios para o 5º, 6º, 7º, 8º e 9º anos abordando figurinhas, jogos cooperativos e redes sociais.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Gamificação Não Punitiva:</strong> Pontuação de empatia positiva e feedback reflexivo imediato para cada escolha.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Autonomia do Aluno:</strong> Escolha livre de séries, controle de velocidade e exploração de medalhas socioemocionais.</span>
                </li>
              </ul>
            </div>

            {/* Pilar 2 */}
            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200/90 text-slate-800">
              <div className="flex items-center gap-2.5 mb-2 text-blue-800 font-extrabold text-sm">
                <span className="p-1 rounded-lg bg-blue-600 text-white text-xs">2</span>
                <span>Múltiplos Meios de Representação (O "O Quê" da Aprendizagem)</span>
              </div>
              <p className="text-xs text-slate-600 mb-2 leading-relaxed">
                Oferece a informação em diferentes formatos para contemplar todos os estilos de percepção:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Leitor de Voz Integrado (TTS):</strong> Narração em português com velocidade ajustável (0.8x a 1.25x) para apoio à dislexia e baixa visão.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Linguagem Simples & Glossário Digital:</strong> Explicações diretas e vocabulário acessível para gírias digitais (Exposed, Spotted, etc.).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Régua de Leitura & Alto Contraste:</strong> Linha de foco que acompanha o mouse e modo de contraste amarelo sobre preto.</span>
                </li>
              </ul>
            </div>

            {/* Pilar 3 */}
            <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-200/90 text-slate-800">
              <div className="flex items-center gap-2.5 mb-2 text-purple-800 font-extrabold text-sm">
                <span className="p-1 rounded-lg bg-purple-600 text-white text-xs">3</span>
                <span>Múltiplos Meios de Ação e Expressão (O "Como" da Aprendizagem)</span>
              </div>
              <p className="text-xs text-slate-600 mb-2 leading-relaxed">
                Garante que o estudante possa interagir e expressar suas escolhas com facilidade:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span><strong>Comandos de Voz:</strong> Reconhecimento de fala em tempo real para responder "Opção 1", "Jogar", "Medalhas" sem mouse.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span><strong>Acessibilidade por Teclado:</strong> Teclas numéricas (1, 2, 3), Espaço e Tab com anéis de foco bem visíveis.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span><strong>Canal Seguro de Denúncia:</strong> Meio seguro e guiado para expressar relatos de bullying de forma 100% anônima.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Alinhamento com a BNCC */}
          <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/90">
            <h4 className="font-extrabold text-xs sm:text-sm text-amber-900 mb-2 flex items-center gap-2">
              <span>🇧🇷</span>
              <span>Alinhamento com as Competências Gerais da BNCC</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              <div className="p-2.5 rounded-xl bg-white border border-amber-100">
                <p className="font-bold text-amber-800">Competência 5 • Cultura Digital</p>
                <p className="text-[11px] text-slate-600 mt-0.5">Uso ético, crítico e consciente das tecnologias digitais para comunicação e produção.</p>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-amber-100">
                <p className="font-bold text-amber-800">Competência 9 • Empatia e Cooperação</p>
                <p className="text-[11px] text-slate-600 mt-0.5">Exercício da empatia, diálogo e resolução pacífica de conflitos em ambientes escolares.</p>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-amber-100">
                <p className="font-bold text-amber-800">Competência 8 • Autocuidado Emocional</p>
                <p className="text-[11px] text-slate-600 mt-0.5">Reconhecer emoções e saber buscar ajuda em situações de desconforto ou assédio.</p>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-amber-100">
                <p className="font-bold text-amber-800">Competência 10 • Responsabilidade e Cidadania</p>
                <p className="text-[11px] text-slate-600 mt-0.5">Tomada de decisões fundamentadas na ética e no bem comum no espaço digital e presencial.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Inclusão escolar garantida por DUA e BNCC</span>
          <button
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black transition-all cursor-pointer shadow-sm"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
