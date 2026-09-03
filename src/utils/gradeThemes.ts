import { GradeLevel } from '../types';

export interface GradeThemeConfig {
  id: GradeLevel | 'all';
  name: string;
  badgeEmoji: string;
  headerBg: string;
  headerText: string;
  ambientGradient: string;
  cardBorder: string;
  cardBorderHover: string;
  pillBg: string;
  pillText: string;
  pillBorder: string;
  accentText: string;
  progressGradient: string;
  badgeBg: string;
  badgeText: string;
  subtleBg: string;
  optionAccents: {
    letterBg: string;
    letterText: string;
    letterBorder: string;
    hoverBorder: string;
    hoverBg: string;
    activeRing: string;
  }[];
}

export const GRADE_THEMES: Record<GradeLevel | 'all', GradeThemeConfig> = {
  '5': {
    id: '5',
    name: '5º Ano',
    badgeEmoji: '🌱',
    headerBg: 'from-emerald-600 via-teal-600 to-emerald-700',
    headerText: 'text-emerald-950',
    ambientGradient: 'from-emerald-50/70 via-teal-50/30 to-slate-50/80',
    cardBorder: 'border-emerald-200/80',
    cardBorderHover: 'hover:border-emerald-400',
    pillBg: 'bg-emerald-50',
    pillText: 'text-emerald-800',
    pillBorder: 'border-emerald-200',
    accentText: 'text-emerald-700',
    progressGradient: 'from-emerald-500 to-teal-500',
    badgeBg: 'bg-emerald-600',
    badgeText: 'text-white',
    subtleBg: 'bg-emerald-50/60',
    optionAccents: [
      {
        letterBg: 'bg-emerald-100/90',
        letterText: 'text-emerald-800',
        letterBorder: 'border-emerald-200',
        hoverBorder: 'hover:border-emerald-400',
        hoverBg: 'hover:bg-emerald-50/50',
        activeRing: 'focus:ring-emerald-400'
      },
      {
        letterBg: 'bg-teal-100/90',
        letterText: 'text-teal-800',
        letterBorder: 'border-teal-200',
        hoverBorder: 'hover:border-teal-400',
        hoverBg: 'hover:bg-teal-50/50',
        activeRing: 'focus:ring-teal-400'
      },
      {
        letterBg: 'bg-cyan-100/90',
        letterText: 'text-cyan-800',
        letterBorder: 'border-cyan-200',
        hoverBorder: 'hover:border-cyan-400',
        hoverBg: 'hover:bg-cyan-50/50',
        activeRing: 'focus:ring-cyan-400'
      }
    ]
  },
  '6': {
    id: '6',
    name: '6º Ano',
    badgeEmoji: '🎨',
    headerBg: 'from-cyan-600 via-sky-600 to-blue-600',
    headerText: 'text-cyan-950',
    ambientGradient: 'from-cyan-50/70 via-sky-50/30 to-slate-50/80',
    cardBorder: 'border-cyan-200/80',
    cardBorderHover: 'hover:border-cyan-400',
    pillBg: 'bg-cyan-50',
    pillText: 'text-cyan-800',
    pillBorder: 'border-cyan-200',
    accentText: 'text-cyan-700',
    progressGradient: 'from-cyan-500 to-sky-500',
    badgeBg: 'bg-cyan-600',
    badgeText: 'text-white',
    subtleBg: 'bg-cyan-50/60',
    optionAccents: [
      {
        letterBg: 'bg-sky-100/90',
        letterText: 'text-sky-800',
        letterBorder: 'border-sky-200',
        hoverBorder: 'hover:border-sky-400',
        hoverBg: 'hover:bg-sky-50/50',
        activeRing: 'focus:ring-sky-400'
      },
      {
        letterBg: 'bg-cyan-100/90',
        letterText: 'text-cyan-800',
        letterBorder: 'border-cyan-200',
        hoverBorder: 'hover:border-cyan-400',
        hoverBg: 'hover:bg-cyan-50/50',
        activeRing: 'focus:ring-cyan-400'
      },
      {
        letterBg: 'bg-blue-100/90',
        letterText: 'text-blue-800',
        letterBorder: 'border-blue-200',
        hoverBorder: 'hover:border-blue-400',
        hoverBg: 'hover:bg-blue-50/50',
        activeRing: 'focus:ring-blue-400'
      }
    ]
  },
  '7': {
    id: '7',
    name: '7º Ano',
    badgeEmoji: '🎮',
    headerBg: 'from-blue-600 via-indigo-600 to-violet-600',
    headerText: 'text-indigo-950',
    ambientGradient: 'from-blue-50/70 via-indigo-50/30 to-slate-50/80',
    cardBorder: 'border-indigo-200/80',
    cardBorderHover: 'hover:border-indigo-400',
    pillBg: 'bg-indigo-50',
    pillText: 'text-indigo-800',
    pillBorder: 'border-indigo-200',
    accentText: 'text-indigo-700',
    progressGradient: 'from-blue-500 to-indigo-600',
    badgeBg: 'bg-indigo-600',
    badgeText: 'text-white',
    subtleBg: 'bg-indigo-50/60',
    optionAccents: [
      {
        letterBg: 'bg-indigo-100/90',
        letterText: 'text-indigo-800',
        letterBorder: 'border-indigo-200',
        hoverBorder: 'hover:border-indigo-400',
        hoverBg: 'hover:bg-indigo-50/50',
        activeRing: 'focus:ring-indigo-400'
      },
      {
        letterBg: 'bg-blue-100/90',
        letterText: 'text-blue-800',
        letterBorder: 'border-blue-200',
        hoverBorder: 'hover:border-blue-400',
        hoverBg: 'hover:bg-blue-50/50',
        activeRing: 'focus:ring-blue-400'
      },
      {
        letterBg: 'bg-violet-100/90',
        letterText: 'text-violet-800',
        letterBorder: 'border-violet-200',
        hoverBorder: 'hover:border-violet-400',
        hoverBg: 'hover:bg-violet-50/50',
        activeRing: 'focus:ring-violet-400'
      }
    ]
  },
  '8': {
    id: '8',
    name: '8º Ano',
    badgeEmoji: '🌟',
    headerBg: 'from-purple-600 via-fuchsia-600 to-pink-600',
    headerText: 'text-purple-950',
    ambientGradient: 'from-purple-50/70 via-fuchsia-50/30 to-slate-50/80',
    cardBorder: 'border-purple-200/80',
    cardBorderHover: 'hover:border-purple-400',
    pillBg: 'bg-purple-50',
    pillText: 'text-purple-800',
    pillBorder: 'border-purple-200',
    accentText: 'text-purple-700',
    progressGradient: 'from-purple-500 to-fuchsia-500',
    badgeBg: 'bg-purple-600',
    badgeText: 'text-white',
    subtleBg: 'bg-purple-50/60',
    optionAccents: [
      {
        letterBg: 'bg-purple-100/90',
        letterText: 'text-purple-800',
        letterBorder: 'border-purple-200',
        hoverBorder: 'hover:border-purple-400',
        hoverBg: 'hover:bg-purple-50/50',
        activeRing: 'focus:ring-purple-400'
      },
      {
        letterBg: 'bg-fuchsia-100/90',
        letterText: 'text-fuchsia-800',
        letterBorder: 'border-fuchsia-200',
        hoverBorder: 'hover:border-fuchsia-400',
        hoverBg: 'hover:bg-fuchsia-50/50',
        activeRing: 'focus:ring-fuchsia-400'
      },
      {
        letterBg: 'bg-pink-100/90',
        letterText: 'text-pink-800',
        letterBorder: 'border-pink-200',
        hoverBorder: 'hover:border-pink-400',
        hoverBg: 'hover:bg-pink-50/50',
        activeRing: 'focus:ring-pink-400'
      }
    ]
  },
  '9': {
    id: '9',
    name: '9º Ano',
    badgeEmoji: '🛡️',
    headerBg: 'from-rose-600 via-orange-600 to-amber-600',
    headerText: 'text-rose-950',
    ambientGradient: 'from-rose-50/70 via-amber-50/30 to-slate-50/80',
    cardBorder: 'border-rose-200/80',
    cardBorderHover: 'hover:border-rose-400',
    pillBg: 'bg-rose-50',
    pillText: 'text-rose-800',
    pillBorder: 'border-rose-200',
    accentText: 'text-rose-700',
    progressGradient: 'from-rose-500 to-amber-500',
    badgeBg: 'bg-rose-600',
    badgeText: 'text-white',
    subtleBg: 'bg-rose-50/60',
    optionAccents: [
      {
        letterBg: 'bg-rose-100/90',
        letterText: 'text-rose-800',
        letterBorder: 'border-rose-200',
        hoverBorder: 'hover:border-rose-400',
        hoverBg: 'hover:bg-rose-50/50',
        activeRing: 'focus:ring-rose-400'
      },
      {
        letterBg: 'bg-amber-100/90',
        letterText: 'text-amber-800',
        letterBorder: 'border-amber-200',
        hoverBorder: 'hover:border-amber-400',
        hoverBg: 'hover:bg-amber-50/50',
        activeRing: 'focus:ring-amber-400'
      },
      {
        letterBg: 'bg-orange-100/90',
        letterText: 'text-orange-800',
        letterBorder: 'border-orange-200',
        hoverBorder: 'hover:border-orange-400',
        hoverBg: 'hover:bg-orange-50/50',
        activeRing: 'focus:ring-orange-400'
      }
    ]
  },
  'all': {
    id: 'all',
    name: 'Todas as Séries',
    badgeEmoji: '✨',
    headerBg: 'from-indigo-600 via-purple-600 to-pink-600',
    headerText: 'text-indigo-950',
    ambientGradient: 'from-indigo-50/60 via-purple-50/20 to-slate-50/80',
    cardBorder: 'border-indigo-200/80',
    cardBorderHover: 'hover:border-indigo-400',
    pillBg: 'bg-indigo-50',
    pillText: 'text-indigo-800',
    pillBorder: 'border-indigo-200',
    accentText: 'text-indigo-700',
    progressGradient: 'from-indigo-600 via-purple-600 to-pink-600',
    badgeBg: 'bg-indigo-600',
    badgeText: 'text-white',
    subtleBg: 'bg-indigo-50/60',
    optionAccents: [
      {
        letterBg: 'bg-indigo-100/90',
        letterText: 'text-indigo-800',
        letterBorder: 'border-indigo-200',
        hoverBorder: 'hover:border-indigo-400',
        hoverBg: 'hover:bg-indigo-50/50',
        activeRing: 'focus:ring-indigo-400'
      },
      {
        letterBg: 'bg-purple-100/90',
        letterText: 'text-purple-800',
        letterBorder: 'border-purple-200',
        hoverBorder: 'hover:border-purple-400',
        hoverBg: 'hover:bg-purple-50/50',
        activeRing: 'focus:ring-purple-400'
      },
      {
        letterBg: 'bg-teal-100/90',
        letterText: 'text-teal-800',
        letterBorder: 'border-teal-200',
        hoverBorder: 'hover:border-teal-400',
        hoverBg: 'hover:bg-teal-50/50',
        activeRing: 'focus:ring-teal-400'
      }
    ]
  }
};
