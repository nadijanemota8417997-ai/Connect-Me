import { AnonymousReport } from '../types';

export const initialReports: AnonymousReport[] = [
  {
    id: 'rep-1',
    timestamp: 'Hoje às 10:35',
    category: 'Exclusão & Figurinhas Ofensivas',
    platform: 'WhatsApp',
    description: 'Estão criando grupos paralelos de WhatsApp para postar figurinhas constrangedoras de alunos tímidos durante o intervalo.',
    urgency: 'Média',
    status: 'Acolhimento Ativo',
    moderatorNotes: 'Profª Márcia conversou com os representantes de sala e iniciou atividade restaurativa sobre respeito no recreio.',
    likesOrSupportCount: 14
  },
  {
    id: 'rep-2',
    timestamp: 'Ontem às 16:20',
    category: 'Perfil Falso de Fofocas',
    platform: 'Instagram',
    description: 'Criaram uma página no Instagram usando o nome do colégio para inventar fofocas sobre a vida pessoal de estudantes do 8º e 9º ano.',
    urgency: 'Alta',
    status: 'Ação Restaurativa Concluída',
    moderatorNotes: 'A coordenação solicitou a remoção junto ao suporte da plataforma e realizou roda de conversa sobre cyberbullying e crimes contra a honra.',
    likesOrSupportCount: 28
  },
  {
    id: 'rep-3',
    timestamp: 'Há 2 dias',
    category: 'Xingamentos em Jogo Online',
    platform: 'Discord',
    description: 'No servidor da turma de jogos, dois alunos estão sofrendo ofensas verbais toda vez que cometem algum erro nas partidas.',
    urgency: 'Média',
    status: 'Acolhimento Ativo',
    moderatorNotes: 'Prof. de Educação Física e Psicóloga escolar criaram código de conduta para jogos da escola.',
    likesOrSupportCount: 9
  }
];
