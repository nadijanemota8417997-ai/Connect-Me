import React from 'react';
import { Check, ChevronRight, Sparkles } from 'lucide-react';
import { GradeLevel, AccessibilitySettings } from '../types';
import { GRADES_METADATA, ALL_GRADES_LIST } from '../data/gradesMetadata';
import { scenariosData } from '../data/scenariosData';
import { sounds } from '../utils/soundEffects';
import { SpeechService } from '../utils/speechUtils';
import { OptimizedImage } from './OptimizedImage';

interface GradeSelectorProps {
  selectedGrade: GradeLevel | 'all';
  onSelectGrade: (grade: GradeLevel | 'all') => void;
  settings: AccessibilitySettings;
  compact?: boolean;
}

export const GradeSelector: React.FC<GradeSelectorProps> = ({
  selectedGrade,
  onSelectGrade,
  settings,
  compact = false,
}) => {
  const handleGradeClick = (grade: GradeLevel | 'all') => {
    sounds.playClick();
    onSelectGrade(grade);
    if (settings.autoReadTTS) {
      if (grade === 'all') {
        SpeechService.speak('Selecionado: Todas as séries do 5º ao 9º ano.');
      } else {
        const meta = GRADES_METADATA[grade];
        SpeechService.speak(`Selecionado: ${meta.name}, para ${meta.ageRange}. Foco: ${meta.themeFocus}`);
      }
    }
  };

  if (compact) {
    return (
      <div 
        id="grade-selector-compact-bar"
        className={`flex items-center gap-1.5 overflow-x-auto p-1.5 rounded-2xl border ${
          settings.highContrast
            ? 'bg-black border-yellow-400'
            : 'bg-slate-100/90 border-slate-200 shadow-inner'
        }`}
      >
        <button
          onClick={() => handleGradeClick('all')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
            selectedGrade === 'all'
              ? settings.highContrast
                ? 'bg-yellow-400 text-black shadow'
                : 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md'
              : 'text-slate-700 hover:bg-white/80'
          }`}
        >
          ✨ Todas as Séries
        </button>

        {ALL_GRADES_LIST.map((gradeMeta) => {
          const isSelected = selectedGrade === gradeMeta.id;
          const count = scenariosData.filter((s) => s.grade === gradeMeta.id).length;
          
          const activeGradients: Record<string, string> = {
            '5': 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-emerald-200/50',
            '6': 'bg-gradient-to-r from-cyan-600 to-sky-600 text-white shadow-cyan-200/50',
            '7': 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-blue-200/50',
            '8': 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-purple-200/50',
            '9': 'bg-gradient-to-r from-rose-600 to-amber-600 text-white shadow-rose-200/50',
          };

          return (
            <button
              key={gradeMeta.id}
              onClick={() => handleGradeClick(gradeMeta.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer shadow-xs ${
                isSelected
                  ? settings.highContrast
                    ? 'bg-yellow-400 text-black shadow'
                    : `${activeGradients[gradeMeta.id] || 'bg-indigo-600 text-white'} shadow-md scale-105`
                  : 'text-slate-700 hover:bg-white/90 hover:scale-102'
              }`}
            >
              <span>{gradeMeta.badgeIcon}</span>
              <span>{gradeMeta.name}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-md font-extrabold ${
                isSelected ? 'bg-black/20 text-white' : 'bg-slate-200/80 text-slate-700'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div id="grade-selector-card-grid" className="w-full">
      <div className="flex items-center justify-between mb-3.5 px-1">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-sm shadow-sm">
            🎓
          </span>
          <h3 className="font-extrabold text-sm sm:text-base text-slate-900">
            Escolha sua Série Escolar:
          </h3>
        </div>
        <span className="text-xs text-indigo-600 font-bold bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100">
          5º ao 9º Ano • Desafios Reais
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
        {ALL_GRADES_LIST.map((gradeMeta) => {
          const isSelected = selectedGrade === gradeMeta.id;
          const count = scenariosData.filter((s) => s.grade === gradeMeta.id).length;

          // Distinct vibrant styling configurations per grade
          const gradeStyles: Record<GradeLevel, {
            borderSelected: string;
            ringSelected: string;
            borderHover: string;
            badgeBg: string;
            badgeText: string;
            tagBg: string;
            tagText: string;
            tagBorder: string;
            checkBg: string;
            glowShadow: string;
          }> = {
            '5': {
              borderSelected: 'border-emerald-500',
              ringSelected: 'ring-4 ring-emerald-400/40',
              borderHover: 'hover:border-emerald-400',
              badgeBg: 'bg-emerald-600',
              badgeText: 'text-emerald-100',
              tagBg: 'bg-emerald-50',
              tagText: 'text-emerald-800',
              tagBorder: 'border-emerald-200',
              checkBg: 'bg-emerald-600',
              glowShadow: 'shadow-[0_10px_25px_rgba(16,185,129,0.25)]',
            },
            '6': {
              borderSelected: 'border-cyan-500',
              ringSelected: 'ring-4 ring-cyan-400/40',
              borderHover: 'hover:border-cyan-400',
              badgeBg: 'bg-cyan-600',
              badgeText: 'text-cyan-100',
              tagBg: 'bg-cyan-50',
              tagText: 'text-cyan-800',
              tagBorder: 'border-cyan-200',
              checkBg: 'bg-cyan-600',
              glowShadow: 'shadow-[0_10px_25px_rgba(6,182,212,0.25)]',
            },
            '7': {
              borderSelected: 'border-blue-600',
              ringSelected: 'ring-4 ring-blue-400/40',
              borderHover: 'hover:border-blue-400',
              badgeBg: 'bg-blue-600',
              badgeText: 'text-blue-100',
              tagBg: 'bg-blue-50',
              tagText: 'text-blue-800',
              tagBorder: 'border-blue-200',
              checkBg: 'bg-blue-600',
              glowShadow: 'shadow-[0_10px_25px_rgba(37,99,235,0.25)]',
            },
            '8': {
              borderSelected: 'border-purple-600',
              ringSelected: 'ring-4 ring-purple-400/40',
              borderHover: 'hover:border-purple-400',
              badgeBg: 'bg-purple-600',
              badgeText: 'text-purple-100',
              tagBg: 'bg-purple-50',
              tagText: 'text-purple-800',
              tagBorder: 'border-purple-200',
              checkBg: 'bg-purple-600',
              glowShadow: 'shadow-[0_10px_25px_rgba(147,51,234,0.25)]',
            },
            '9': {
              borderSelected: 'border-rose-500',
              ringSelected: 'ring-4 ring-rose-400/40',
              borderHover: 'hover:border-rose-400',
              badgeBg: 'bg-rose-600',
              badgeText: 'text-rose-100',
              tagBg: 'bg-rose-50',
              tagText: 'text-rose-800',
              tagBorder: 'border-rose-200',
              checkBg: 'bg-rose-600',
              glowShadow: 'shadow-[0_10px_25px_rgba(244,63,94,0.25)]',
            },
          };

          const style = gradeStyles[gradeMeta.id];

          return (
            <button
              key={gradeMeta.id}
              id={`grade-card-${gradeMeta.id}`}
              onClick={() => handleGradeClick(gradeMeta.id)}
              className={`relative rounded-2xl border-2 text-left transition-all flex flex-col justify-between overflow-hidden cursor-pointer group hover:scale-[1.03] shadow-sm hover:shadow-lg ${
                isSelected
                  ? settings.highContrast
                    ? 'bg-black border-4 border-yellow-400 text-yellow-300 ring-2 ring-yellow-400'
                    : `bg-white ${style.borderSelected} ${style.ringSelected} ${style.glowShadow} scale-[1.02]`
                  : settings.highContrast
                  ? 'bg-neutral-900 border-yellow-700 text-yellow-500 hover:border-yellow-400'
                  : `bg-white border-slate-200 ${style.borderHover} text-slate-800`
              }`}
            >
              {/* Thumbnail Image Header with Color Accent */}
              {gradeMeta.coverImage && (
                <div className="relative w-full h-24 sm:h-28 overflow-hidden bg-slate-100">
                  <OptimizedImage
                    src={gradeMeta.coverImage}
                    alt={`Ilustração do ${gradeMeta.name}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                  
                  {/* Grade Badge overlay with Grade's Unique Theme Color */}
                  <div className={`absolute bottom-2 left-2.5 flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg ${style.badgeBg} text-white text-[11px] font-black border border-white/30 shadow-md`}>
                    <span>{gradeMeta.badgeIcon}</span>
                    <span>{gradeMeta.name}</span>
                  </div>

                  {/* Age Range overlay */}
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-white/95 backdrop-blur-xs text-slate-900 text-[10px] font-black shadow-md border border-slate-200/50">
                    {gradeMeta.ageRange}
                  </div>

                  {/* Selected Checkmark Badge */}
                  {isSelected && (
                    <div className={`absolute top-2 left-2 w-6 h-6 rounded-full ${style.checkBg} text-white flex items-center justify-center shadow-lg border-2 border-white animate-bounce`}>
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  )}
                </div>
              )}

              {/* Card Body */}
              <div className="p-3 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 group-hover:text-indigo-600 transition-colors flex items-center gap-1.5">
                    <span>{gradeMeta.fullName}</span>
                  </h4>

                  {/* Focus Theme Description */}
                  <p className="text-[11px] text-slate-600 leading-snug line-clamp-3 mt-1 font-medium">
                    {gradeMeta.themeFocus}
                  </p>
                </div>

                {/* Card Footer: Missions count tag & Action hint with Grade Color */}
                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className={`font-extrabold ${style.tagText} ${style.tagBg} px-2.5 py-0.5 rounded-md border ${style.tagBorder} shadow-2xs`}>
                    {count} {count === 1 ? 'Missão' : 'Missões'}
                  </span>
                  <span className={`font-bold flex items-center gap-0.5 ${
                    isSelected ? 'text-indigo-600' : 'text-slate-400 group-hover:text-indigo-600'
                  }`}>
                    <span>{isSelected ? 'Pronto' : 'Jogar'}</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
