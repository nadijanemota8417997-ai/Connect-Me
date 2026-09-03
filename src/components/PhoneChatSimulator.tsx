import React, { useState, useEffect, useMemo } from 'react';
import { 
  Wifi, 
  Battery, 
  Signal, 
  Volume2, 
  Play, 
  Pause, 
  Image as ImageIcon, 
  Send, 
  Smile, 
  Paperclip, 
  Camera, 
  Mic, 
  Phone, 
  Video, 
  MoreVertical, 
  ChevronLeft, 
  Heart, 
  MessageCircle, 
  Share2, 
  Bookmark, 
  Hash, 
  Search, 
  Users, 
  Radio, 
  Sparkles,
  Maximize2,
  X,
  Check,
  CheckCheck
} from 'lucide-react';
import { Scenario, ChatMessage, ScenarioChoice, AccessibilitySettings } from '../types';
import { SCENARIO_IMAGES_MAP } from '../data/scenarioImages';
import { OptimizedImage } from './OptimizedImage';
import { sounds } from '../utils/soundEffects';
import { SpeechService } from '../utils/speechUtils';

interface PhoneChatSimulatorProps {
  scenario: Scenario;
  settings: AccessibilitySettings;
  hasAnswered: boolean;
  selectedChoice: ScenarioChoice | null;
  playerName?: string;
  playerAvatar?: string;
  onReadAloud: (text: string) => void;
}

export const PhoneChatSimulator: React.FC<PhoneChatSimulatorProps> = ({
  scenario,
  settings,
  hasAnswered,
  selectedChoice,
  playerName,
  playerAvatar,
  onReadAloud,
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeMediaModal, setActiveMediaModal] = useState<{ url: string; title: string; caption?: string } | null>(null);
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [currentTime, setCurrentTime] = useState('14:22');
  const activePlayerName = playerName?.trim() || 'Você';
  const activePlayerAvatar = playerAvatar || '⭐';

  // Determine media for current scenario to guarantee EVERY question has a visual image
  const fallbackMedia = useMemo(() => SCENARIO_IMAGES_MAP[scenario.id], [scenario.id]);
  
  const targetMessageIndexForMedia = useMemo(() => {
    const explicitIdx = scenario.chatMessages.findIndex(m => !!m.attachment?.imageUrl);
    if (explicitIdx !== -1) return explicitIdx;
    const aggrIdx = scenario.chatMessages.findIndex(m => m.isAggressor);
    return aggrIdx !== -1 ? aggrIdx : 0;
  }, [scenario.chatMessages]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleToggleAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    sounds.playClick();
    setIsPlayingAudio(!isPlayingAudio);
    if (!isPlayingAudio) {
      SpeechService.speak('Reproduzindo áudio de voz do cenário.');
    }
  };

  const handleToggleLike = (postId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    sounds.playClick();
    setLikedPosts(prev => ({ ...prev, [postId]: !prev[postId] }));
  };

  return (
    <div className="w-full flex flex-col items-center select-none">
      
      {/* Smartphone Chassis Frame */}
      <div 
        id="real-smartphone-frame"
        className={`relative w-full max-w-[390px] sm:max-w-[410px] rounded-[46px] p-3 transition-all duration-300 shadow-2xl border-4 ${
          settings.highContrast
            ? 'bg-black border-yellow-400 text-yellow-300 shadow-[0_0_40px_rgba(250,204,21,0.4)]'
            : 'bg-slate-900 border-slate-700/80 shadow-[0_20px_50px_rgba(15,23,42,0.35)] ring-1 ring-slate-800'
        }`}
      >
        {/* Physical Smartphone Buttons Simulation (Left & Right Bezel) */}
        <div className="absolute -left-[7px] top-24 w-[5px] h-8 bg-slate-600 rounded-l-md" title="Botão Silenciar" />
        <div className="absolute -left-[7px] top-36 w-[5px] h-12 bg-slate-600 rounded-l-md" title="Volume +" />
        <div className="absolute -left-[7px] top-52 w-[5px] h-12 bg-slate-600 rounded-l-md" title="Volume -" />
        <div className="absolute -right-[7px] top-32 w-[5px] h-16 bg-slate-600 rounded-r-md" title="Botão Liga/Desliga" />

        {/* Screen Glass Container */}
        <div className="relative w-full h-[580px] sm:h-[620px] rounded-[38px] overflow-hidden flex flex-col justify-between bg-white text-slate-800 shadow-inner">
          
          {/* Top Status Bar & Dynamic Island */}
          <div className={`w-full px-5 pt-3 pb-1 flex items-center justify-between z-30 transition-colors ${
            scenario.platformType === 'whatsapp'
              ? 'bg-[#075E54] text-white'
              : scenario.platformType === 'discord'
              ? 'bg-[#2b2d31] text-slate-200'
              : scenario.platformType === 'instagram'
              ? 'bg-white border-b border-slate-100 text-slate-900'
              : scenario.platformType === 'tiktok'
              ? 'bg-black text-white'
              : 'bg-indigo-700 text-white'
          }`}>
            {/* Clock */}
            <span className="text-[11px] font-bold tracking-tight">
              {currentTime}
            </span>

            {/* Dynamic Island / Front Camera Pill */}
            <div className="flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-black text-white text-[9px] shadow-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-950 border border-slate-700 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-blue-500/80 animate-pulse" />
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
            </div>

            {/* Signal, WiFi, Battery */}
            <div className="flex items-center gap-1.5 text-[11px]">
              <Signal className="w-3 h-3" />
              <Wifi className="w-3 h-3" />
              <div className="flex items-center gap-0.5">
                <span className="text-[9px] font-bold">96%</span>
                <Battery className="w-3.5 h-3.5 fill-current" />
              </div>
            </div>
          </div>

          {/* Platform Custom Header */}
          {scenario.platformType === 'whatsapp' && (
            <div className="bg-[#075E54] text-white px-3 py-2.5 flex items-center justify-between shadow-md z-20">
              <div className="flex items-center gap-2.5">
                <ChevronLeft className="w-5 h-5 -mr-1" />
                <div className="w-9 h-9 rounded-full bg-emerald-700 border border-emerald-400 flex items-center justify-center text-sm shadow-inner">
                  📚
                </div>
                <div>
                  <div className="font-bold text-xs leading-tight flex items-center gap-1">
                    <span>9º B • Estudos & Provas</span>
                    <span className="text-[10px] bg-emerald-600/80 px-1.5 py-0.2 rounded-full">Sala</span>
                  </div>
                  <p className="text-[10px] text-emerald-100/80 truncate max-w-[140px]">
                    Bruno, Camila, Léo, Você...
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-emerald-100">
                <Video className="w-4 h-4 cursor-pointer hover:text-white" />
                <Phone className="w-4 h-4 cursor-pointer hover:text-white" />
                <button 
                  onClick={() => onReadAloud(settings.simplifiedText ? scenario.simplifiedContext : scenario.context)}
                  className="p-1 rounded-full hover:bg-white/10"
                  title="Ouvir situação"
                >
                  <Volume2 className="w-4 h-4 text-emerald-200 hover:text-white" />
                </button>
              </div>
            </div>
          )}

          {scenario.platformType === 'instagram' && (
            <div className="bg-white border-b border-slate-100 text-slate-900 px-3 py-2.5 flex items-center justify-between shadow-sm z-20">
              <div className="flex items-center gap-2.5">
                <ChevronLeft className="w-5 h-5 text-slate-800" />
                <div className="w-8 h-8 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-xs">
                    📸
                  </div>
                </div>
                <div>
                  <div className="font-bold text-xs text-slate-900 flex items-center gap-1">
                    <span>memes_9ano_oficial</span>
                    <span className="w-3 h-3 rounded-full bg-blue-500 text-white flex items-center justify-center text-[7px] font-bold">✓</span>
                  </div>
                  <p className="text-[10px] text-slate-400">Página de Memes da Escola</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <button 
                  onClick={() => onReadAloud(settings.simplifiedText ? scenario.simplifiedContext : scenario.context)}
                  className="p-1 rounded-full hover:bg-slate-100"
                  title="Ouvir situação"
                >
                  <Volume2 className="w-4 h-4 text-slate-700" />
                </button>
                <MoreVertical className="w-4 h-4" />
              </div>
            </div>
          )}

          {scenario.platformType === 'discord' && (
            <div className="bg-[#2b2d31] text-slate-100 px-3 py-2.5 flex items-center justify-between border-b border-[#1f2023] shadow-sm z-20">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-[#383a40] text-indigo-400">
                  <Hash className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-white leading-tight">geral-torneio-jogos</h4>
                  <div className="flex items-center gap-1.5 text-[10px] text-emerald-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Chamada de Voz: 3 no canal</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <button 
                  onClick={() => onReadAloud(settings.simplifiedText ? scenario.simplifiedContext : scenario.context)}
                  className="p-1 rounded-full hover:bg-white/10"
                  title="Ouvir situação"
                >
                  <Volume2 className="w-4 h-4 text-indigo-300 hover:text-white" />
                </button>
                <Users className="w-4 h-4" />
              </div>
            </div>
          )}

          {scenario.platformType === 'tiktok' && (
            <div className="bg-slate-900 text-white px-3 py-2.5 flex items-center justify-between border-b border-slate-800 z-20">
              <div className="flex items-center gap-2">
                <ChevronLeft className="w-5 h-5 text-white" />
                <div className="font-bold text-xs text-white">
                  Festival Cultural • Júlia
                </div>
              </div>
              <button 
                onClick={() => onReadAloud(settings.simplifiedText ? scenario.simplifiedContext : scenario.context)}
                className="p-1 rounded-full hover:bg-white/10"
                title="Ouvir situação"
              >
                <Volume2 className="w-4 h-4 text-pink-400 hover:text-white" />
              </button>
            </div>
          )}

          {scenario.platformType === 'schoolpage' && (
            <div className="bg-indigo-700 text-white px-3 py-2.5 flex items-center justify-between shadow-sm z-20">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm">
                  🎭
                </div>
                <div>
                  <h4 className="font-bold text-xs text-white">Spotted Escolar Anônimo</h4>
                  <p className="text-[10px] text-indigo-200">Mural Livre • 9º Ano</p>
                </div>
              </div>
              <button 
                onClick={() => onReadAloud(settings.simplifiedText ? scenario.simplifiedContext : scenario.context)}
                className="p-1 rounded-full hover:bg-white/10"
                title="Ouvir situação"
              >
                <Volume2 className="w-4 h-4 text-indigo-200 hover:text-white" />
              </button>
            </div>
          )}

          {/* Context Alert Banner inside the phone */}
          <div className="bg-amber-50 border-b border-amber-200 px-3.5 py-2 text-[11px] text-amber-900 flex items-center justify-between gap-2 shrink-0">
            <div className="flex items-center gap-1.5 overflow-hidden">
              <span className="font-bold text-amber-700 shrink-0">💡 Cenário:</span>
              <span className="truncate">{settings.simplifiedText ? scenario.simplifiedContext : scenario.context}</span>
            </div>
            <button 
              onClick={() => onReadAloud(settings.simplifiedText ? scenario.simplifiedContext : scenario.context)}
              className="shrink-0 text-amber-700 hover:text-amber-900 text-[10px] font-bold underline"
            >
              Ouvir
            </button>
          </div>

          {/* Main Feed / Chat Body */}
          <div 
            id="simulated-chat-scroll-area"
            className={`flex-1 overflow-y-auto p-3 space-y-3 relative transition-colors ${
              scenario.platformType === 'whatsapp'
                ? 'bg-[#EFEAE2]'
                : scenario.platformType === 'discord'
                ? 'bg-[#313338] text-slate-200'
                : scenario.platformType === 'tiktok'
                ? 'bg-slate-950 text-slate-100'
                : 'bg-slate-50'
            }`}
          >
            {/* WhatsApp Subtle Wallpaper Pattern overlay */}
            {scenario.platformType === 'whatsapp' && (
              <div 
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(#008069 0.75px, transparent 0.75px), radial-gradient(#008069 0.75px, #EFEAE2 0.75px)`,
                  backgroundSize: '24px 24px',
                  backgroundPosition: '0 0, 12px 12px'
                }}
              />
            )}

            {/* Discord Active Voice Bar (if Discord) */}
            {scenario.platformType === 'discord' && (
              <div className="p-2.5 rounded-xl bg-[#232428] border border-[#1e1f22] text-xs space-y-2 shadow-sm">
                <div className="flex items-center justify-between text-[10px] text-slate-400 uppercase font-bold">
                  <span>Voz Conectada (24ms)</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <Radio className="w-3 h-3 animate-spin" /> Ao Vivo
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1.5 overflow-hidden">
                    <div className="w-6 h-6 rounded-full bg-indigo-600 border-2 border-emerald-500 flex items-center justify-center text-[10px]" title="Capitão Igor (Falando)">
                      🎧
                    </div>
                    <div className="w-6 h-6 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center text-[10px]" title="Gabriel (Silenciado)">
                      🎮
                    </div>
                    <div className="w-6 h-6 rounded-full bg-indigo-500 border border-slate-600 flex items-center justify-center text-[10px]" title="Você">
                      ⭐
                    </div>
                  </div>
                  <span className="text-[11px] text-slate-300 font-medium truncate">
                    Capitão Igor está falando no microfone...
                  </span>
                </div>
              </div>
            )}

            {/* Chat Messages List */}
            {scenario.chatMessages.map((msg, index) => {
              if (msg.systemNotice) {
                return (
                  <div key={msg.id} className="flex justify-center my-1.5">
                    <span className="px-3 py-1 rounded-lg bg-black/10 text-slate-600 text-[10px] font-medium shadow-xs">
                      {msg.systemNotice}
                    </span>
                  </div>
                );
              }

              const isTargetMediaMessage = index === targetMessageIndexForMedia;
              const hasCustomMedia = !!msg.attachment?.imageUrl;
              const effectiveMedia = hasCustomMedia
                ? msg.attachment
                : isTargetMediaMessage && fallbackMedia
                ? {
                    type: (scenario.platformType === 'instagram' || scenario.platformType === 'tiktok' ? 'post' : 'image') as ('image' | 'post'),
                    imageUrl: fallbackMedia.coverUrl,
                    content: fallbackMedia.attachmentTitle,
                    caption: fallbackMedia.attachmentCaption,
                    likes: 184,
                    comments: 29
                  }
                : msg.attachment;

              return (
                <div 
                  key={msg.id}
                  className={`flex items-start gap-2 relative group ${msg.isUser ? 'flex-row-reverse' : ''}`}
                >
                  {/* Sender Avatar */}
                  <div className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-xs shrink-0 shadow-sm">
                    {msg.avatar}
                  </div>

                  {/* Message Bubble Container */}
                  <div className={`max-w-[85%] rounded-2xl p-2.5 text-xs shadow-xs relative transition-all ${
                    scenario.platformType === 'whatsapp'
                      ? msg.isUser
                        ? 'bg-[#D9FDD3] text-slate-900 rounded-tr-xs border border-emerald-200'
                        : 'bg-white text-slate-900 rounded-tl-xs border border-slate-200/80'
                      : scenario.platformType === 'discord'
                      ? msg.isAggressor
                        ? 'bg-[#3b2a2e] border border-rose-500/40 text-rose-100'
                        : 'bg-[#2b2d31] border border-slate-700 text-slate-100'
                      : msg.isAggressor
                      ? 'bg-rose-50 border border-rose-200 text-rose-950'
                      : msg.isVictim
                      ? 'bg-amber-50 border border-amber-200 text-amber-950'
                      : 'bg-white border border-slate-200 text-slate-800'
                  }`}>
                    
                    {/* Header with Sender Name and Time */}
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className={`font-bold text-[11px] flex items-center gap-1 ${
                        msg.isAggressor ? 'text-rose-600' : msg.isVictim ? 'text-amber-700' : 'text-indigo-700'
                      }`}>
                        {msg.sender}
                        {msg.isAggressor && (
                          <span className="text-[8px] px-1.5 py-0.2 rounded bg-rose-100 text-rose-700 border border-rose-200 font-bold">
                            agressão
                          </span>
                        )}
                        {msg.isVictim && (
                          <span className="text-[8px] px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 border border-amber-200 font-bold">
                            alvo
                          </span>
                        )}
                      </span>
                      <span className="text-[9px] text-slate-400">{msg.time}</span>
                    </div>

                    {/* Image / Post Attachment (Simulated Visual Media) */}
                    {effectiveMedia?.type === 'image' && effectiveMedia.imageUrl && (
                      <div className="my-2 rounded-xl overflow-hidden border border-slate-200/80 bg-slate-950/5 relative group cursor-pointer"
                        onClick={() => {
                          sounds.playClick();
                          setActiveMediaModal({
                            url: effectiveMedia.imageUrl!,
                            title: effectiveMedia.content,
                            caption: effectiveMedia.caption
                          });
                        }}
                      >
                        <OptimizedImage 
                          src={effectiveMedia.imageUrl} 
                          alt={effectiveMedia.content}
                          fallbackText={effectiveMedia.content}
                          className="w-full h-36 object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-1">
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>Clique para Ampliar</span>
                        </div>
                        {effectiveMedia.caption && (
                          <div className="p-1.5 bg-black/60 backdrop-blur-xs text-white text-[10px] font-medium truncate">
                            {effectiveMedia.caption}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Rich Post Card Simulation (Instagram / TikTok style) */}
                    {effectiveMedia?.type === 'post' && effectiveMedia.imageUrl && (
                      <div className="my-2 rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm">
                        <div className="relative cursor-pointer"
                          onClick={() => {
                            sounds.playClick();
                            setActiveMediaModal({
                              url: effectiveMedia.imageUrl!,
                              title: effectiveMedia.content,
                              caption: effectiveMedia.caption
                            });
                          }}
                        >
                          <OptimizedImage 
                            src={effectiveMedia.imageUrl} 
                            alt={effectiveMedia.content}
                            fallbackText={effectiveMedia.content}
                            className="w-full h-40 object-cover"
                          />
                          <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/60 text-white text-[9px] font-bold backdrop-blur-xs flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-amber-300" />
                            <span>Mídia do Caso</span>
                          </div>
                        </div>

                        {/* Interactive Post Actions Bar */}
                        <div className="p-2 bg-slate-50 border-t border-slate-100 text-slate-700">
                          <div className="flex items-center justify-between mb-1.5">
                            <div className="flex items-center gap-3">
                              <button 
                                onClick={(e) => handleToggleLike(msg.id, e)}
                                className={`flex items-center gap-1 text-[11px] font-bold transition-all ${
                                  likedPosts[msg.id] ? 'text-rose-600 scale-110' : 'text-slate-600 hover:text-rose-500'
                                }`}
                              >
                                <Heart className={`w-4 h-4 ${likedPosts[msg.id] ? 'fill-rose-600' : ''}`} />
                                <span>{(effectiveMedia.likes || 100) + (likedPosts[msg.id] ? 1 : 0)}</span>
                              </button>

                              <div className="flex items-center gap-1 text-[11px] text-slate-500">
                                <MessageCircle className="w-4 h-4" />
                                <span>{effectiveMedia.comments || 12}</span>
                              </div>

                              <Share2 className="w-3.5 h-3.5 text-slate-400" />
                            </div>
                            <Bookmark className="w-3.5 h-3.5 text-slate-400" />
                          </div>

                          {effectiveMedia.caption && (
                            <p className="text-[10px] text-slate-800 leading-tight font-medium">
                              <strong>{msg.sender}:</strong> {effectiveMedia.caption}
                            </p>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Audio Voice Note Bubble Simulation */}
                    {effectiveMedia?.type === 'audio' && (
                      <div className="my-1.5 p-2 rounded-xl bg-emerald-50/80 border border-emerald-200 flex flex-col gap-2">
                        <div className="flex items-center gap-2.5">
                          <button 
                            onClick={handleToggleAudio}
                            className="w-8 h-8 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-sm transition-transform active:scale-90 cursor-pointer"
                            title="Tocar áudio"
                          >
                            {isPlayingAudio ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
                          </button>
                          
                          <div className="flex-1">
                            {/* Animated Waveform Bars */}
                            <div className="flex items-center gap-0.5 h-4 my-1">
                              {[40, 70, 30, 90, 50, 80, 60, 100, 45, 65, 85, 35, 75, 55].map((h, idx) => (
                                <div 
                                  key={idx} 
                                  className={`flex-1 rounded-full transition-all duration-300 ${
                                    isPlayingAudio 
                                      ? 'bg-emerald-600 animate-pulse' 
                                      : 'bg-emerald-300'
                                  }`}
                                  style={{ 
                                    height: isPlayingAudio ? `${Math.max(20, (h + (idx * 5)) % 100)}%` : `${h * 0.5}%` 
                                  }}
                                />
                              ))}
                            </div>
                            <div className="flex items-center justify-between text-[9px] text-emerald-800 font-bold">
                              <span>{isPlayingAudio ? '0:04' : '0:00'}</span>
                              <span>{effectiveMedia.duration || '0:18'}</span>
                            </div>
                          </div>
                        </div>

                        {effectiveMedia.imageUrl && (
                          <div 
                            className="relative rounded-lg overflow-hidden border border-emerald-300/80 cursor-pointer group/audioimg"
                            onClick={() => {
                              sounds.playClick();
                              setActiveMediaModal({
                                url: effectiveMedia.imageUrl!,
                                title: effectiveMedia.content,
                                caption: effectiveMedia.caption || 'Registro da gravação de áudio no pátio'
                              });
                            }}
                          >
                            <OptimizedImage
                              src={effectiveMedia.imageUrl}
                              alt={effectiveMedia.content}
                              fallbackText={effectiveMedia.content}
                              className="w-full h-24 object-cover group-hover/audioimg:scale-105 transition-transform"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-[10px] font-bold gap-1 opacity-0 group-hover/audioimg:opacity-100 transition-opacity">
                              <Maximize2 className="w-3 h-3" />
                              <span>Ver foto da gravação</span>
                            </div>
                          </div>
                        )}

                        {effectiveMedia.caption && (
                          <div className="text-[10px] text-emerald-900 font-medium px-1">
                            {effectiveMedia.caption}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Sticker Attachment */}
                    {msg.attachment?.type === 'sticker' && (
                      <div 
                        className="my-1.5 p-1.5 rounded-2xl bg-white/90 border border-slate-200/90 text-center font-bold text-slate-800 text-xs shadow-xs cursor-pointer group/sticker"
                        onClick={() => {
                          if (msg.attachment?.imageUrl) {
                            sounds.playClick();
                            setActiveMediaModal({
                              url: msg.attachment.imageUrl,
                              title: msg.attachment.content,
                              caption: msg.attachment.caption || 'Figurinha compartilhada no grupo'
                            });
                          }
                        }}
                      >
                        {msg.attachment.imageUrl ? (
                          <div className="relative overflow-hidden rounded-xl bg-slate-100/80 p-1 flex flex-col items-center">
                            <OptimizedImage
                              src={msg.attachment.imageUrl}
                              alt={msg.attachment.content}
                              fallbackText={msg.attachment.content}
                              className="w-full max-h-36 object-contain rounded-lg drop-shadow-md hover:scale-105 transition-transform"
                            />
                            <div className="mt-1 text-[10px] text-slate-700 font-bold px-2 py-0.5 bg-white/80 rounded-md border border-slate-200/60 shadow-2xs">
                              {msg.attachment.caption || msg.attachment.content}
                            </div>
                          </div>
                        ) : (
                          <div className="p-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-900">
                            {msg.attachment.content}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Text Message Content */}
                    <p className={`leading-relaxed text-slate-800 ${
                      settings.fontSize === 'large' ? 'text-sm' : settings.fontSize === 'xlarge' ? 'text-base' : 'text-xs'
                    }`}>
                      {settings.simplifiedText && msg.simplifiedText ? msg.simplifiedText : msg.text}
                    </p>

                    {/* Read Aloud Button for this bubble */}
                    <button 
                      onClick={() => onReadAloud(settings.simplifiedText && msg.simplifiedText ? msg.simplifiedText : msg.text)}
                      className="absolute -right-2 -top-2 opacity-0 group-hover:opacity-100 p-1 rounded-full bg-indigo-600 text-white text-[9px] transition-all shadow-md"
                      title="Ouvir esta mensagem"
                    >
                      <Volume2 className="w-3 h-3" />
                    </button>

                    {/* Double Checkmarks for WhatsApp */}
                    {scenario.platformType === 'whatsapp' && (
                      <div className="flex justify-end mt-0.5 text-[#53bdeb]">
                        <CheckCheck className="w-3.5 h-3.5" />
                      </div>
                    )}

                    {/* Reaction Badges */}
                    {msg.reactions && msg.reactions.length > 0 && (
                      <div className="absolute -bottom-2 right-2 flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-white border border-slate-200 shadow-xs text-[10px]">
                        {msg.reactions.map((r, i) => (
                          <span key={i} className="flex items-center gap-0.5">
                            <span>{r.emoji}</span>
                            <span className="font-bold text-[9px] text-slate-600">{r.count}</span>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Player's Own Sent Message when they select an option */}
            {hasAnswered && selectedChoice && (
              <div className="flex items-start gap-2 relative group flex-row-reverse animate-fadeIn">
                <div className="w-7 h-7 rounded-full bg-indigo-600 text-white border border-indigo-400 flex items-center justify-center text-xs shrink-0 shadow-sm">
                  {activePlayerAvatar}
                </div>
                <div className={`max-w-[85%] rounded-2xl p-2.5 text-xs shadow-xs relative rounded-tr-xs ${
                  scenario.platformType === 'whatsapp'
                    ? 'bg-[#D9FDD3] text-slate-900 border border-emerald-300'
                    : scenario.platformType === 'discord'
                    ? 'bg-indigo-700 text-white border border-indigo-500'
                    : 'bg-indigo-600 text-white border border-indigo-500'
                }`}>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-bold text-[11px] text-emerald-800 flex items-center gap-1">
                      {activePlayerName}
                      <span className="text-[8px] px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 font-bold">
                        sua decisão
                      </span>
                    </span>
                    <span className="text-[9px] opacity-70">{currentTime}</span>
                  </div>
                  <p className="leading-relaxed font-medium">
                    {selectedChoice.icon} {settings.simplifiedText ? selectedChoice.simplifiedText : selectedChoice.text}
                  </p>
                  {scenario.platformType === 'whatsapp' && (
                    <div className="flex justify-end mt-0.5 text-[#53bdeb]">
                      <CheckCheck className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Live Feedback in chat after user made a decision */}
            {hasAnswered && selectedChoice && (
              <div className="pt-2 pb-1 border-t border-slate-200/80 space-y-2 animate-fadeIn">
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-700 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Reações Imediatas do Grupo:</span>
                </div>

                {selectedChoice.consequence.chatFeedback.map((fb, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-indigo-100 border border-indigo-200 flex items-center justify-center text-xs shrink-0">
                      {fb.avatar}
                    </div>
                    <div className="rounded-2xl p-2 bg-indigo-50 border border-indigo-100 text-xs text-indigo-950 flex-1 shadow-xs">
                      <div className="font-bold text-[10px] text-indigo-700">{fb.sender}</div>
                      <p className="text-[11px] leading-snug">{fb.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Simulated Mobile Keyboard / Quick Action Bar */}
          <div className={`p-2 border-t flex items-center gap-2 z-20 ${
            scenario.platformType === 'whatsapp'
              ? 'bg-[#F0F2F5] border-slate-200 text-slate-600'
              : scenario.platformType === 'discord'
              ? 'bg-[#383a40] border-[#2b2d31] text-slate-300'
              : scenario.platformType === 'tiktok'
              ? 'bg-slate-900 border-slate-800 text-slate-400'
              : 'bg-white border-slate-200 text-slate-500'
          }`}>
            <Smile className="w-5 h-5 cursor-pointer hover:text-indigo-600 shrink-0" />
            <Paperclip className="w-4 h-4 cursor-pointer hover:text-indigo-600 shrink-0" />
            <div className="flex-1 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-xs flex items-center justify-between shadow-xs">
              <span className="truncate">
                {hasAnswered 
                  ? `Decisão enviada por ${activePlayerName} ✨` 
                  : `${activePlayerAvatar} ${activePlayerName}: escolha sua ação 👉`}
              </span>
              <Camera className="w-3.5 h-3.5 text-slate-400" />
            </div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0 shadow-sm ${
              hasAnswered ? 'bg-emerald-600' : 'bg-indigo-600'
            }`}>
              {hasAnswered ? <Check className="w-4 h-4" /> : <Send className="w-3.5 h-3.5" />}
            </div>
          </div>

          {/* Phone Bottom Home Bar Indicator */}
          <div className="w-full bg-black py-1 flex justify-center z-30">
            <div className="w-28 h-1 rounded-full bg-white/70" />
          </div>

        </div>
      </div>

      {/* Interactive Fullscreen Media Modal */}
      {activeMediaModal && (
        <div 
          id="media-preview-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveMediaModal(null)}
        >
          <div 
            className="relative w-full max-w-lg rounded-3xl overflow-hidden bg-slate-900 text-white border border-slate-700 shadow-2xl"
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
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Full Image */}
            <div className="p-3 bg-black flex items-center justify-center">
              <img 
                src={activeMediaModal.url} 
                alt={activeMediaModal.title}
                className="max-h-[60vh] w-auto object-contain rounded-xl shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Modal Caption */}
            {activeMediaModal.caption && (
              <div className="p-4 bg-slate-900 border-t border-slate-800 text-xs text-slate-300">
                <p className="font-semibold text-white mb-1">Detalhes da Imagem:</p>
                <p>{activeMediaModal.caption}</p>
              </div>
            )}

            {/* Modal Footer */}
            <div className="p-3 bg-slate-950 flex justify-end">
              <button 
                onClick={() => setActiveMediaModal(null)}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs"
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
