import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Send, 
  CheckCircle2, 
  Clock, 
  Lock, 
  UserCheck, 
  AlertCircle, 
  PhoneCall, 
  Eye, 
  Sparkles,
  HelpCircle,
  MessageSquare,
  FileText
} from 'lucide-react';
import { AnonymousReport, AccessibilitySettings } from '../types';
import { sounds } from '../utils/soundEffects';
import { SpeechService } from '../utils/speechUtils';

interface ReportChannelScreenProps {
  reports: AnonymousReport[];
  settings: AccessibilitySettings;
  onAddReport: (report: Omit<AnonymousReport, 'id' | 'timestamp' | 'likesOrSupportCount'>) => void;
  onUpdateStatus: (id: string, newStatus: AnonymousReport['status'], notes?: string) => void;
}

export const ReportChannelScreen: React.FC<ReportChannelScreenProps> = ({
  reports,
  settings,
  onAddReport,
  onUpdateStatus,
}) => {
  const [activeTab, setActiveTab] = useState<'send' | 'feed' | 'teacher-portal'>('send');
  
  // New report form state
  const [category, setCategory] = useState('Exclusão Virtual');
  const [platform, setPlatform] = useState('WhatsApp');
  const [description, setDescription] = useState('');
  const [urgency, setUrgency] = useState<'Baixa' | 'Média' | 'Alta' | 'Imediata'>('Média');
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const categories = [
    'Exclusão Virtual em Grupos',
    'Memes & Fotos Vazadas',
    'Ofensas em Jogos Online',
    'Discurso de Ódio e Comentários Ofensivos',
    'Perfis Falsos e Boatos Anônimos',
    'Ameaças ou Chantagem Digital'
  ];

  const platforms = ['WhatsApp', 'Instagram', 'Discord', 'Jogos / Free Fire / Roblox', 'TikTok', 'Outro'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;

    sounds.playSuccess();
    onAddReport({
      category,
      platform,
      description,
      urgency,
      status: 'Pendente'
    });

    setSubmittedSuccess(true);
    setDescription('');

    if (settings.autoReadTTS) {
      SpeechService.speak('Denúncia anônima enviada com sucesso e protegida. A equipe pedagógica foi notificada.');
    }
  };

  return (
    <div 
      id="report-screen-container"
      className={`min-h-[85vh] p-4 sm:p-6 max-w-4xl mx-auto transition-colors ${
        settings.highContrast ? 'text-yellow-300' : 'text-slate-800'
      }`}
    >
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold uppercase tracking-wider mb-2">
          <Lock className="w-3.5 h-3.5" />
          Canal Seguro & 100% Anônimo
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
          Espaço de Escuta & Proteção Escolar
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Relate situações de cyberbullying com segurança total. Os relatos são moderados por professores e especialistas em psicologia escolar.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
        <button
          id="tab-send-report"
          onClick={() => {
            sounds.playClick();
            setActiveTab('send');
            setSubmittedSuccess(false);
          }}
          className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all border ${
            activeTab === 'send'
              ? settings.highContrast
                ? 'bg-yellow-400 text-black border-yellow-400'
                : 'bg-rose-600 text-white border-rose-600 shadow-sm'
              : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
          }`}
        >
          <ShieldAlert className="w-4 h-4" />
          <span>Fazer Relato Anônimo</span>
        </button>

        <button
          id="tab-feed-report"
          onClick={() => {
            sounds.playClick();
            setActiveTab('feed');
          }}
          className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all border ${
            activeTab === 'feed'
              ? settings.highContrast
                ? 'bg-yellow-400 text-black border-yellow-400'
                : 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
              : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Acompanhamento Coletivo</span>
        </button>

        <button
          id="tab-teacher-portal"
          onClick={() => {
            sounds.playClick();
            setActiveTab('teacher-portal');
          }}
          className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all border ${
            activeTab === 'teacher-portal'
              ? settings.highContrast
                ? 'bg-yellow-400 text-black border-yellow-400'
                : 'bg-slate-900 text-white border-slate-900 shadow-sm'
              : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
          }`}
        >
          <UserCheck className="w-4 h-4" />
          <span>Painel dos Professores</span>
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'send' && (
        <div className={`p-5 sm:p-7 rounded-3xl border shadow-sm ${
          settings.highContrast
            ? 'bg-black border-2 border-yellow-400'
            : 'bg-white border-slate-200 text-slate-800'
        }`}>
          {submittedSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 mx-auto flex items-center justify-center text-3xl">
                🛡️
              </div>
              <h3 className="text-xl font-black text-slate-900">Relato Enviado com Sucesso!</h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                Seu anonimato está 100% garantido. A coordenação pedagógica e os psicólogos escolares analisarão o caso para agir com acolhimento e proteção.
              </p>
              <button
                onClick={() => setSubmittedSuccess(false)}
                className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-indigo-700"
              >
                Fazer outro relato
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Category & Platform Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Tipo de Ocorrência
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className={`w-full p-3 rounded-xl text-xs border outline-none font-medium ${
                      settings.highContrast
                        ? 'bg-black border-yellow-400 text-yellow-300'
                        : 'bg-white border-slate-200 text-slate-800 focus:border-indigo-500 shadow-sm'
                    }`}
                  >
                    {categories.map(c => (
                      <option key={c} value={c} className="text-slate-800">{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Onde está acontecendo?
                  </label>
                  <select
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value)}
                    className={`w-full p-3 rounded-xl text-xs border outline-none font-medium ${
                      settings.highContrast
                        ? 'bg-black border-yellow-400 text-yellow-300'
                        : 'bg-white border-slate-200 text-slate-800 focus:border-indigo-500 shadow-sm'
                    }`}
                  >
                    {platforms.map(p => (
                      <option key={p} value={p} className="text-slate-800">{p}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Urgency Level */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Nível de Urgência
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {(['Baixa', 'Média', 'Alta', 'Imediata'] as const).map((u) => (
                    <button
                      type="button"
                      key={u}
                      onClick={() => {
                        sounds.playClick();
                        setUrgency(u);
                      }}
                      className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                        urgency === u
                          ? u === 'Imediata' || u === 'Alta'
                            ? 'bg-rose-600 text-white border-rose-600 shadow-sm'
                            : 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {u}
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                  <span>Descrição Objetiva do Ocorrido</span>
                  <span className="text-[11px] text-slate-400 font-normal">Não compartilhe dados sensíveis de você mesmo</span>
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Exemplo: Estão compartilhando apelidos ofensivos e montagens no grupo do 9º ano..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className={`w-full p-3.5 rounded-2xl text-xs sm:text-sm border outline-none leading-relaxed ${
                    settings.highContrast
                      ? 'bg-black border-yellow-400 text-yellow-300 placeholder-yellow-600'
                      : 'bg-white border-slate-200 text-slate-800 placeholder-slate-400 focus:border-indigo-500 shadow-sm'
                  }`}
                />
              </div>

              {/* Security Badge Info */}
              <div className="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-100 text-[11px] text-indigo-950 flex items-start gap-2.5">
                <Lock className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                <span>
                  <strong>Garantia de Sigilo:</strong> Nenhum dado do seu dispositivo (IP, e-mail ou nome) é gravado. Este canal serve para proteger quem precisa de apoio.
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Relato com Proteção Anônima</span>
              </button>
            </form>
          )}
        </div>
      )}

      {/* Tab Feed */}
      {activeTab === 'feed' && (
        <div className="space-y-4">
          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 flex items-center justify-between shadow-sm">
            <span>Mostrando casos acompanhados coletivamente pela mediação escolar:</span>
            <span className="font-bold text-indigo-600">{reports.length} ocorrências monitoradas</span>
          </div>

          <div className="space-y-3">
            {reports.map((rep) => (
              <div
                key={rep.id}
                className={`p-4 rounded-2xl border transition-all shadow-sm ${
                  settings.highContrast
                    ? 'bg-black border-yellow-400 text-yellow-300'
                    : 'bg-white border-slate-200 text-slate-800'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-indigo-700">
                      {rep.category}
                    </span>
                    <span className="text-[11px] text-slate-400">via {rep.platform}</span>
                  </div>
                  
                  {/* Status Badge */}
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1 ${
                    rep.status === 'Ação Restaurativa Concluída'
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : rep.status === 'Acolhimento Ativo'
                      ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                      : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}>
                    <CheckCircle2 className="w-3 h-3" />
                    {rep.status}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 mb-3 leading-relaxed">
                  "{rep.description}"
                </p>

                {rep.moderatorNotes && (
                  <div className="p-2.5 rounded-xl bg-indigo-50 border border-indigo-100 text-xs text-indigo-950">
                    <span className="font-bold text-indigo-700">Ação da Mediação: </span>
                    {rep.moderatorNotes}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab Teacher / Specialist Portal */}
      {activeTab === 'teacher-portal' && (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-100 text-xs text-indigo-950">
            <h4 className="font-bold text-sm text-indigo-900 mb-1 flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-indigo-600" />
              Painel de Gestão e Mediação de Conflitos
            </h4>
            <p className="text-slate-600">
              Ambiente pedagógico para que coordenadores, professores e orientadores registrem acolhimentos, rodas de conversa restaurativas e mediação sem exposição de vítimas.
            </p>
          </div>

          <div className="space-y-3">
            {reports.map((rep) => (
              <div
                key={rep.id}
                className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="font-bold text-xs text-indigo-900">
                    ID: {rep.id} • {rep.category} ({rep.platform})
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    rep.urgency === 'Alta' || rep.urgency === 'Imediata' ? 'bg-rose-50 text-rose-700 border border-rose-200' : 'bg-slate-100 text-slate-600'
                  }`}>
                    Urgência: {rep.urgency}
                  </span>
                </div>

                <p className="text-xs text-slate-700 italic">
                  "{rep.description}"
                </p>

                {/* Status action buttons */}
                <div className="flex items-center gap-2 flex-wrap pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-slate-500">Alterar Status:</span>
                  {(['Pendente', 'Em Análise', 'Acolhimento Ativo', 'Ação Restaurativa Concluída'] as const).map((st) => (
                    <button
                      key={st}
                      onClick={() => {
                        sounds.playClick();
                        onUpdateStatus(rep.id, st, 'Acompanhamento registrado pela equipe.');
                      }}
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all border ${
                        rep.status === st
                          ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* National Help Lines */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
            <h5 className="font-bold text-slate-900 flex items-center gap-1.5">
              <PhoneCall className="w-4 h-4 text-indigo-600" />
              Canais Oficiais Gratuitos de Apoio Psicológico e Direitos
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="font-bold text-slate-900">CVV - Apoio Emocional</div>
                <div className="text-indigo-600 font-bold">Ligue 188 (Gratuito)</div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="font-bold text-slate-900">Disque 100</div>
                <div className="text-rose-600 font-bold">Direitos Humanos</div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="font-bold text-slate-900">SaferNet Brasil</div>
                <div className="text-emerald-600 font-bold">helpline.org.br</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
