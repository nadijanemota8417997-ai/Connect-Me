import { GradeLevel, GradeMetadata } from '../types';

import grade5Cover from '../assets/images/grade5_banner_thumb_1787761238183.jpg';
import grade6Cover from '../assets/images/grade6_banner_thumb_1787761252020.jpg';
import grade7Cover from '../assets/images/grade7_banner_thumb_1787761264588.jpg';
import grade8Cover from '../assets/images/grade8_banner_thumb_1787761277953.jpg';
import grade9Cover from '../assets/images/grade9_banner_thumb_1787761288513.jpg';

export const GRADES_METADATA: Record<GradeLevel, GradeMetadata> = {
  '5': {
    id: '5',
    name: '5º Ano',
    fullName: '5º Ano do Ensino Fundamental',
    ageRange: '10 a 11 anos',
    themeFocus: 'Inclusão em jogos virtuais em equipe, respeito em conversas de grupo da turma e acolhimento de novos colegas.',
    badgeIcon: '🌱',
    color: 'text-emerald-700',
    bgGradient: 'from-emerald-500/10 via-teal-500/5 to-white',
    borderAccent: 'border-emerald-300 hover:border-emerald-500',
    description: 'Desafios focados no início da convivência digital, compartilhamento de mundos virtuais e empatia básica.',
    coverImage: grade5Cover,
    accentColorHex: '#10b981'
  },
  '6': {
    id: '6',
    name: '6º Ano',
    fullName: '6º Ano do Ensino Fundamental',
    ageRange: '11 a 12 anos',
    themeFocus: 'Uso ético de figurinhas e memes, limites das brincadeiras no recreio e respeito à imagem dos colegas.',
    badgeIcon: '🎨',
    color: 'text-cyan-700',
    bgGradient: 'from-cyan-500/10 via-sky-500/5 to-white',
    borderAccent: 'border-cyan-300 hover:border-cyan-500',
    description: 'Compreensão do impacto de piadas visuais, figurinhas compartilhadas sem permissão e adaptação a novos grupos.',
    coverImage: grade6Cover,
    accentColorHex: '#06b6d4'
  },
  '7': {
    id: '7',
    name: '7º Ano',
    fullName: '7º Ano do Ensino Fundamental',
    ageRange: '12 a 13 anos',
    themeFocus: 'Combate a comportamentos hostis em partidas de jogos cooperativos e comentários respeitosos em vídeos.',
    badgeIcon: '🎮',
    color: 'text-blue-700',
    bgGradient: 'from-blue-500/10 via-indigo-500/5 to-white',
    borderAccent: 'border-blue-300 hover:border-blue-500',
    description: 'Situações reais em partidas online, publicações em vídeos curtos e defesa ativa de quem está sendo atacado.',
    coverImage: grade7Cover,
    accentColorHex: '#3b82f6'
  },
  '8': {
    id: '8',
    name: '8º Ano',
    fullName: '8º Ano do Ensino Fundamental',
    ageRange: '13 a 14 anos',
    themeFocus: 'Pressão estética, enquetes de comparação de aparência, exposições vexatórias e empatia com a vulnerabilidade alheia.',
    badgeIcon: '🌟',
    color: 'text-purple-700',
    bgGradient: 'from-purple-500/10 via-fuchsia-500/5 to-white',
    borderAccent: 'border-purple-300 hover:border-purple-500',
    description: 'Análise crítica sobre julgamentos de aparência, fofocas na lista de "Amigos Próximos" e exclusão entre colegas.',
    coverImage: grade8Cover,
    accentColorHex: '#a855f7'
  },
  '9': {
    id: '9',
    name: '9º Ano',
    fullName: '9º Ano do Ensino Fundamental',
    ageRange: '14 a 15 anos',
    themeFocus: 'Páginas anônimas de confissão (Mural Escolar), notícias falsas difamatórias, responsabilidade legal e cidadania digital.',
    badgeIcon: '🛡️',
    color: 'text-rose-700',
    bgGradient: 'from-rose-500/10 via-amber-500/5 to-white',
    borderAccent: 'border-rose-300 hover:border-rose-500',
    description: 'Dilemas éticos complexos sobre anonimato na internet, calúnia, Marco Civil da Internet e intervenção corajosa.',
    coverImage: grade9Cover,
    accentColorHex: '#f43f5e'
  }
};

export const ALL_GRADES_LIST: GradeMetadata[] = Object.values(GRADES_METADATA);
