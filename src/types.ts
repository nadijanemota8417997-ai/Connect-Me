export type AppScreen = 'home' | 'game' | 'ranking' | 'badges' | 'reports' | 'credits' | 'summary' | 'certificate';

export type GradeLevel = '5' | '6' | '7' | '8' | '9';

export interface CertificateData {
  studentName: string;
  studentAvatar: string;
  grade: GradeLevel | 'all';
  gradeLabel: string;
  empathyScore: number;
  completedBadgesCount: number;
  issueDate: string;
  certificateId: string;
  completedGrades: GradeLevel[];
}

export interface GradeMetadata {
  id: GradeLevel;
  name: string; // '5º Ano'
  fullName: string; // '5º Ano do Ensino Fundamental'
  ageRange: string; // '10 - 11 anos'
  themeFocus: string; // 'Amizade digital, jogos cooperativos e primeiros grupos'
  badgeIcon: string;
  color: string;
  bgGradient: string;
  borderAccent: string;
  description: string;
  coverImage?: string;
  accentColorHex?: string;
}

export interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: 'normal' | 'large' | 'xlarge';
  simplifiedText: boolean;
  soundEnabled: boolean;
  autoReadTTS: boolean;
  voiceCommandsEnabled: boolean;
  readingGuideEnabled: boolean;
  dyslexiaFriendlyFont: boolean;
  speechSpeed: number; // 0.8, 1.0, 1.25
  visualSoundCaptions: boolean;
}

export interface GlossaryTerm {
  id: string;
  term: string;
  category: 'cyberbullying' | 'redes_sociais' | 'legislacao' | 'empatia' | 'games';
  simpleDefinition: string;
  schoolExample: string;
  pronunciationAudioText: string;
  icon: string;
}

export interface ChatMessage {
  id: string;
  sender: string;
  avatar: string;
  isVictim?: boolean;
  isAggressor?: boolean;
  isUser?: boolean;
  text: string;
  simplifiedText?: string;
  time: string;
  systemNotice?: string;
  reactions?: { emoji: string; count: number; userReacted?: boolean }[];
  attachment?: {
    type: 'image' | 'poll' | 'audio' | 'sticker' | 'post';
    content: string;
    caption?: string;
    duration?: string;
    likes?: number;
    comments?: number;
    imageUrl?: string;
  };
}

export interface ScenarioChoice {
  id: string;
  text: string;
  simplifiedText: string;
  type: 'empathetic' | 'passive' | 'hostile' | 'mediator';
  icon: string;
  points: number; // Empathy points awarded (e.g. +50, 0, -20)
  consequence: {
    title: string;
    description: string;
    simplifiedDescription: string;
    victimEmotion: 'aliviado' | 'triste' | 'acolhido' | 'acolhida' | 'ansioso' | 'confiante';
    chatFeedback: {
      sender: string;
      text: string;
      avatar: string;
    }[];
    impact: {
      empathyChange: number;
      trustChange: number;
      schoolClimateChange: number;
    };
    lesson: string;
    simplifiedLesson: string;
  };
}

export interface Scenario {
  id: string;
  grade: GradeLevel;
  gradeLabel: string; // e.g. '5º Ano'
  title: string;
  category: 
    | 'Exclusão Virtual' 
    | 'Memes e Fotos Vazadas' 
    | 'Jogos Online Tóxicos' 
    | 'Hate em Redes Sociais'
    | 'Ataques em Redes Sociais' 
    | 'Fofocas e Perfis Fake'
    | 'Fofocas e Perfis Falsos' 
    | 'Pressão de Grupo' 
    | 'Apoio e Denúncia Segura' 
    | 'Deepfake e Manipulação' 
    | 'Apelidos e Figurinhas' 
    | 'Privacidade e Segredos'
    | 'Golpes e Phishing'
    | 'Segurança e Senhas'
    | 'Desafios Perigosos'
    | 'Perigos e Estranhos na Rede'
    | 'Cultura do Cancelamento'
    | 'Direito de Imagem e Ética'
    | 'Inteligência Artificial e Plágio'
    | 'Saúde Mental e Autoimagem'
    | 'Apostas e Fraudes Digitais'
    | 'Discurso de Ódio e Intolerância'
    | 'Cidadania Digital e Pegada Digital';
  difficulty: 'Iniciante' | 'Intermediário' | 'Avançado';
  platformType: 'whatsapp' | 'instagram' | 'discord' | 'tiktok' | 'schoolpage';
  pedagogicalObjective: string;
  context: string;
  simplifiedContext: string;
  coverImage?: string;
  characters: {
    name: string;
    role: 'Vítima' | 'Colega' | 'Agresor(a)' | 'Professor(a)';
    avatar: string;
  }[];
  chatMessages: ChatMessage[];
  choices: ScenarioChoice[];
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  category: 'Empatia' | 'Inclusão' | 'Coragem' | 'Acessibilidade' | 'Liderança';
  icon: string;
  unlocked: boolean;
  unlockedAt?: string;
  progress: number;
  maxProgress: number;
  rewardXP: number;
}

export interface RankingStudent {
  id: string;
  name: string;
  grade: string;
  avatar: string;
  empathyScore: number;
  collaborativeStreak: number;
  badgesCount: number;
  isCurrentUser?: boolean;
}

export interface AnonymousReport {
  id: string;
  timestamp: string;
  category: string;
  platform: string;
  description: string;
  urgency: 'Baixa' | 'Média' | 'Alta' | 'Imediata';
  status: 'Pendente' | 'Em Análise' | 'Acolhimento Ativo' | 'Ação Restaurativa Concluída';
  moderatorNotes?: string;
  likesOrSupportCount: number;
}
