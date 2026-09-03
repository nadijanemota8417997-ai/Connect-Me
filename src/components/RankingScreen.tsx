import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Trophy, 
  Award, 
  Heart, 
  Flame, 
  Sparkles, 
  Search, 
  Users, 
  ThumbsUp,
  ShieldCheck,
  Star,
  Crown,
  Medal,
  ChevronRight,
  TrendingUp,
  GraduationCap
} from 'lucide-react';
import { RankingStudent, AccessibilitySettings } from '../types';
import { sounds } from '../utils/soundEffects';
import { SpeechService } from '../utils/speechUtils';

interface RankingScreenProps {
  rankingList: RankingStudent[];
  settings: AccessibilitySettings;
  userEmpathyScore: number;
}

export const RankingScreen: React.FC<RankingScreenProps> = ({
  rankingList,
  settings,
  userEmpathyScore,
}) => {
  const [filterGrade, setFilterGrade] = useState<string>('Todos');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [cheeredStudents, setCheeredStudents] = useState<Record<string, number>>({});

  // Sync user score and calculate sorted list
  const updatedList = rankingList.map(st => {
    if (st.isCurrentUser) {
      return { ...st, empathyScore: userEmpathyScore };
    }
    return st;
  }).sort((a, b) => b.empathyScore - a.empathyScore);

  // User index in the full list
  const userGlobalIndex = updatedList.findIndex(st => st.isCurrentUser);
  const currentUser = updatedList[userGlobalIndex];

  const filtered = updatedList.filter(st => {
    const matchesGrade = filterGrade === 'Todos' || st.grade.includes(filterGrade);
    const matchesSearch = st.name.toLowerCase().includes(searchTerm.toLowerCase()) || st.grade.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesGrade && matchesSearch;
  });

  const handleCheer = (studentId: string, studentName: string) => {
    sounds.playEmpathyGain();
    confetti({
      particleCount: 20,
      spread: 40,
      origin: { y: 0.8 }
    });
    setCheeredStudents(prev => ({
      ...prev,
      [studentId]: (prev[studentId] || 0) + 1
    }));
    if (settings.autoReadTTS) {
      SpeechService.speak(`Você enviou um incentivo positivo para ${studentName}!`);
    }
  };

  const topThree = filtered.slice(0, 3);

  return (
    <div 
      id="ranking-screen-container"
      className={`min-h-[85vh] p-3 sm:p-6 max-w-5xl mx-auto transition-colors ${
        settings.highContrast ? 'text-yellow-300' : 'text-slate-800'
      }`}
    >
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-amber-600 font-black text-xs uppercase tracking-wider mb-1">
            <Trophy className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>Rank Oficial ConnectMe • Empatia & Cidadania Digital</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Placar & Classificação Escolar
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl font-medium">
            Acompanhe o ranking dos defensores da empatia digital do 5º ao 9º ano. Pontue acolhendo colegas e recusando fofocas!
          </p>
        </div>

        {/* User Quick Rank Summary Badge */}
        {currentUser && (
          <div className={`p-4 rounded-2xl border flex items-center gap-3.5 shrink-0 shadow-md ${
            settings.highContrast
              ? 'bg-black border-2 border-yellow-400 text-yellow-300'
              : 'bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-950 text-white border-indigo-500/40 shadow-indigo-900/20'
          }`}>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400 to-yellow-300 text-slate-950 flex items-center justify-center text-2xl font-black shadow-md shrink-0">
              {currentUser.avatar || '🌟'}
            </div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-amber-300 flex items-center gap-1">
                <Crown className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span>Sua Posição no Rank</span>
              </div>
              <div className="text-base font-black text-white flex items-center gap-1.5">
                <span className="text-amber-400 text-lg">#{userGlobalIndex + 1}º Lugar</span>
                <span className="text-xs font-normal text-indigo-200">Geral</span>
              </div>
              <div className="text-xs font-bold text-cyan-300">
                {currentUser.empathyScore} pts de empatia
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Top 3 Podium Visualizer */}
      {topThree.length >= 3 && filterGrade === 'Todos' && !searchTerm && (
        <div className="w-full mb-8 p-4 sm:p-6 rounded-3xl bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-950 text-white border border-indigo-500/30 shadow-xl overflow-hidden relative">
          
          <div className="text-center mb-6">
            <span className="px-3.5 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-[11px] font-black uppercase tracking-widest inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Pódio dos Campeões da Empatia
            </span>
            <h3 className="text-lg sm:text-xl font-black text-white mt-1.5">
              Top 3 Líderes da Convivência Ética
            </h3>
          </div>

          {/* Podium Grid (2nd place left, 1st place center, 3rd place right) */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-2xl mx-auto items-end pt-2">
            
            {/* 2nd Place */}
            {topThree[1] && (
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-2">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-slate-300 to-slate-100 text-slate-900 flex items-center justify-center text-2xl sm:text-3xl font-black shadow-lg border-2 border-slate-300">
                    {topThree[1].avatar}
                  </div>
                  <span className="absolute -top-2 -right-1 text-xl sm:text-2xl drop-shadow-md">
                    🥈
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-black text-slate-200 truncate max-w-[100px] sm:max-w-[140px]">
                  {topThree[1].name}
                </h4>
                <p className="text-[10px] sm:text-xs text-slate-400">{topThree[1].grade}</p>
                <div className="mt-1 px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 text-[11px] font-bold">
                  {topThree[1].empathyScore} pts
                </div>
                {/* Pedestal */}
                <div className="w-full h-16 sm:h-20 bg-gradient-to-t from-slate-800 to-slate-700 rounded-t-2xl mt-2 flex items-center justify-center border-t-2 border-slate-400">
                  <span className="text-lg sm:text-xl font-black text-slate-300">2º</span>
                </div>
              </div>
            )}

            {/* 1st Place (Center, Tallest) */}
            {topThree[0] && (
              <div className="flex flex-col items-center text-center -mt-4">
                <div className="relative mb-2">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-amber-400 via-yellow-200 to-amber-500 text-slate-950 flex items-center justify-center text-3xl sm:text-4xl font-black shadow-[0_0_25px_rgba(245,158,11,0.5)] border-3 border-amber-300 ring-4 ring-amber-400/30">
                    {topThree[0].avatar}
                  </div>
                  <span className="absolute -top-3 -right-2 text-2xl sm:text-3xl drop-shadow-md">
                    👑
                  </span>
                </div>
                <h4 className="text-xs sm:text-base font-black text-amber-300 truncate max-w-[120px] sm:max-w-[160px]">
                  {topThree[0].name}
                </h4>
                <p className="text-[10px] sm:text-xs text-slate-300 font-semibold">{topThree[0].grade}</p>
                <div className="mt-1 px-3 py-0.5 rounded-full bg-amber-500/30 border border-amber-400/50 text-amber-300 text-xs sm:text-sm font-black">
                  {topThree[0].empathyScore} pts
                </div>
                {/* Pedestal */}
                <div className="w-full h-24 sm:h-28 bg-gradient-to-t from-amber-600 via-amber-500 to-yellow-400 rounded-t-2xl mt-2 flex flex-col items-center justify-center border-t-2 border-yellow-200 shadow-lg text-slate-950">
                  <span className="text-2xl sm:text-3xl font-black">1º</span>
                  <span className="text-[10px] font-black uppercase tracking-wider">Campeão</span>
                </div>
              </div>
            )}

            {/* 3rd Place */}
            {topThree[2] && (
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-2">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-amber-700 to-amber-500 text-white flex items-center justify-center text-2xl sm:text-3xl font-black shadow-lg border-2 border-amber-600">
                    {topThree[2].avatar}
                  </div>
                  <span className="absolute -top-2 -right-1 text-xl sm:text-2xl drop-shadow-md">
                    🥉
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-black text-slate-200 truncate max-w-[100px] sm:max-w-[140px]">
                  {topThree[2].name}
                </h4>
                <p className="text-[10px] sm:text-xs text-slate-400">{topThree[2].grade}</p>
                <div className="mt-1 px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 text-[11px] font-bold">
                  {topThree[2].empathyScore} pts
                </div>
                {/* Pedestal */}
                <div className="w-full h-12 sm:h-16 bg-gradient-to-t from-amber-900 to-amber-800 rounded-t-2xl mt-2 flex items-center justify-center border-t-2 border-amber-600">
                  <span className="text-lg sm:text-xl font-black text-amber-200">3º</span>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* Filters & Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-5 bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
        
        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar estudante ou série no Rank..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full pl-9 pr-3 py-2.5 rounded-xl text-xs sm:text-sm border font-medium outline-none transition-all ${
              settings.highContrast
                ? 'bg-black border-yellow-400 text-yellow-300 placeholder-yellow-600'
                : 'bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400 focus:bg-white focus:border-indigo-500'
            }`}
          />
        </div>

        {/* Grade Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {['Todos', '5º Ano', '6º Ano', '7º Ano', '8º Ano', '9º Ano'].map((grade) => (
            <button
              key={grade}
              onClick={() => {
                sounds.playClick();
                setFilterGrade(grade);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all whitespace-nowrap border cursor-pointer ${
                filterGrade === grade
                  ? settings.highContrast
                    ? 'bg-yellow-400 text-black border-yellow-400'
                    : 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {grade}
            </button>
          ))}
        </div>
      </div>

      {/* Ranking List Table / Cards */}
      <div className="space-y-2.5">
        {filtered.map((student, index) => {
          const rankPosition = index + 1;
          const isTop3 = rankPosition <= 3;
          
          return (
            <div
              key={student.id}
              id={`ranking-row-${student.id}`}
              className={`p-3.5 sm:p-4 rounded-2xl border flex items-center justify-between gap-3 transition-all ${
                student.isCurrentUser
                  ? settings.highContrast
                    ? 'bg-neutral-900 border-2 border-yellow-400 text-yellow-300'
                    : 'bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 border-2 border-indigo-400 shadow-md ring-2 ring-indigo-300/40'
                  : isTop3
                    ? 'bg-amber-50/40 border-amber-200/90 hover:bg-amber-50 shadow-sm'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 shadow-xs'
              }`}
            >
              {/* Left: Position & Avatar & Info */}
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                {/* Position Medal */}
                <div className="w-9 text-center font-black text-sm sm:text-base shrink-0">
                  {rankPosition === 1 ? (
                    <span className="text-xl" title="1º Lugar">🥇</span>
                  ) : rankPosition === 2 ? (
                    <span className="text-xl" title="2º Lugar">🥈</span>
                  ) : rankPosition === 3 ? (
                    <span className="text-xl" title="3º Lugar">🥉</span>
                  ) : (
                    <span className="text-slate-500 font-black">#{rankPosition}</span>
                  )}
                </div>

                {/* Avatar */}
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center text-xl shrink-0 shadow-sm border ${
                  student.isCurrentUser
                    ? 'bg-indigo-600 text-white border-indigo-400 ring-2 ring-indigo-200'
                    : isTop3
                      ? 'bg-amber-100 border-amber-300'
                      : 'bg-slate-100 border-slate-200'
                }`}>
                  {student.avatar}
                </div>

                {/* Name & Grade */}
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className={`font-black text-xs sm:text-sm truncate ${
                      student.isCurrentUser ? 'text-indigo-950 font-black' : 'text-slate-900'
                    }`}>
                      {student.name}
                    </h4>
                    {student.isCurrentUser && (
                      <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-indigo-600 text-white shadow-xs">
                        Você
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 font-medium truncate">
                    {student.grade}
                  </p>
                </div>
              </div>

              {/* Right: Scores & Cheer Action */}
              <div className="flex items-center gap-3 sm:gap-6 shrink-0">
                
                {/* Streak */}
                <div className="hidden sm:flex items-center gap-1 text-xs font-bold text-amber-600" title="Dias seguidos de atitudes empáticas">
                  <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <span>{student.collaborativeStreak}d</span>
                </div>

                {/* Badges count */}
                <div className="hidden md:flex items-center gap-1 text-xs font-bold text-indigo-700" title="Medalhas conquistadas">
                  <Award className="w-4 h-4" />
                  <span>{student.badgesCount}</span>
                </div>

                {/* Score */}
                <div className="text-right min-w-[70px]">
                  <div className="text-sm sm:text-base font-black text-indigo-950">
                    {student.empathyScore}
                  </div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold">
                    pts empatia
                  </div>
                </div>

                {/* Send Cheer / Incentivo button */}
                {!student.isCurrentUser && (
                  <button
                    id={`cheer-btn-${student.id}`}
                    onClick={() => handleCheer(student.id, student.name)}
                    className={`p-2.5 rounded-xl border transition-all flex items-center gap-1 text-xs font-bold cursor-pointer ${
                      cheeredStudents[student.id]
                        ? 'bg-rose-50 border-rose-300 text-rose-700 scale-105'
                        : 'bg-slate-50 border-slate-200 hover:bg-rose-50 hover:border-rose-300 text-slate-600 hover:text-rose-600'
                    }`}
                    title="Enviar incentivo ético positivo"
                    aria-label={`Incentivar ${student.name}`}
                  >
                    <Heart className={`w-4 h-4 ${cheeredStudents[student.id] ? 'fill-rose-500 text-rose-500 animate-ping duration-300' : ''}`} />
                    {cheeredStudents[student.id] && <span className="text-rose-600">+{cheeredStudents[student.id]}</span>}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Encouragement Banner */}
      <div className="mt-8 p-4 rounded-3xl bg-gradient-to-r from-indigo-50 via-purple-50 to-amber-50 border border-indigo-200/80 text-center text-xs text-indigo-950 flex items-center justify-center gap-2 shadow-xs">
        <Trophy className="w-4 h-4 text-amber-500 shrink-0 fill-amber-400" />
        <span>
          <strong>Como subir no Rank:</strong> Responda às missões do 5º ao 9º ano acolhendo as vítimas, recusando correntes de difamação e mediando conversas em grupo!
        </span>
      </div>
    </div>
  );
};
