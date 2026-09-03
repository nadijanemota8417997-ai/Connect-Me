import { Badge } from '../types';

export const initialBadges: Badge[] = [
  {
    id: 'badge-guardiao',
    title: 'Guardião Digital',
    description: 'Completou escolhas positivas em múltiplos cenários com alto nível de empatia.',
    category: 'Empatia',
    icon: '🛡️',
    unlocked: true,
    unlockedAt: 'Hoje',
    progress: 1,
    maxProgress: 1,
    rewardXP: 100
  },
  {
    id: 'badge-acolhedor',
    title: 'Acolhedor de Primeira',
    description: 'Apoiou uma vítima de cyberbullying e quebrou o isolamento com gentileza.',
    category: 'Inclusão',
    icon: '🤝',
    unlocked: true,
    unlockedAt: 'Hoje',
    progress: 1,
    maxProgress: 1,
    rewardXP: 120
  },
  {
    id: 'badge-antifake',
    title: 'Combate a Boatos & Notícias Falsas',
    description: 'Recusou-se a repassar boatos e denunciou perfis difamatórios anônimos.',
    category: 'Coragem',
    icon: '🚫',
    unlocked: false,
    progress: 1,
    maxProgress: 2,
    rewardXP: 150
  },
  {
    id: 'badge-mediador',
    title: 'Mediador de Paz',
    description: 'Transformou uma discussão tóxica em ambiente de jogo ou rede em diálogo respeitoso.',
    category: 'Liderança',
    icon: '🕊️',
    unlocked: false,
    progress: 0,
    maxProgress: 1,
    rewardXP: 140
  },
  {
    id: 'badge-voz-ativa',
    title: 'Voz da Conexão Ética',
    description: 'Utilizou recursos de acessibilidade, leitura em voz alta ou canal de denúncias.',
    category: 'Acessibilidade',
    icon: '🎙️',
    unlocked: false,
    progress: 0,
    maxProgress: 1,
    rewardXP: 100
  },
  {
    id: 'badge-pense-antes',
    title: 'Pense Antes de Postar',
    description: 'Tomou 3 decisões consecutivas com impacto 100% positivo no clima escolar.',
    category: 'Empatia',
    icon: '🧘',
    unlocked: false,
    progress: 1,
    maxProgress: 3,
    rewardXP: 200
  },
  {
    id: 'badge-mural-gentileza',
    title: 'Mural da Gentileza',
    description: 'Espalhou mensagens de apoio e encorajamento para colegas.',
    category: 'Inclusão',
    icon: '💖',
    unlocked: false,
    progress: 0,
    maxProgress: 1,
    rewardXP: 110
  },
  {
    id: 'badge-campeao-inclusao',
    title: 'Campeão DUA & Inclusão',
    description: 'Incentivou a acessibilidade e o Desenho Universal para a Aprendizagem na escola.',
    category: 'Acessibilidade',
    icon: '⭐',
    unlocked: false,
    progress: 0,
    maxProgress: 1,
    rewardXP: 180
  },
  {
    id: 'badge-top-master',
    title: 'Título de Top Master',
    description: 'Concluiu com honra máxima todas as 5 séries (5º ao 9º Ano) em Cidadania e Empatia Digital.',
    category: 'Liderança',
    icon: '👑',
    unlocked: false,
    progress: 0,
    maxProgress: 5,
    rewardXP: 500
  }
];
