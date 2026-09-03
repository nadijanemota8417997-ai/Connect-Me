import grade5CraftBaseImg from '../assets/images/grade5_craft_base_broken_1788186669675.jpg';
import studyGroupImg from '../assets/images/school_study_group_1787756957320.jpg';
import grade6VolleyballStickerImg from '../assets/images/grade6_volleyball_fall_sticker_1788186656170.jpg';
import grade6AudioImg from '../assets/images/grade6_audio_recording_1788185597671.jpg';
import grade6ModHackImg from '../assets/images/grade6_mod_hack_link_1788185444436.jpg';
import grade6BackpackImg from '../assets/images/grade6_backpack_gossip_1788185463694.jpg';
import grade6TradeScamImg from '../assets/images/grade6_game_trade_scam_1788185485834.jpg';
import grade6OnlineClassImg from '../assets/images/grade6_online_class_1788185504412.jpg';
import grade6AiEssayImg from '../assets/images/grade6_ai_essay_desk_1788185526145.jpg';
import grade6FakeProfileImg from '../assets/images/grade6_fake_profile_1788185545896.jpg';
import grade6StatusLeakImg from '../assets/images/grade6_status_leak_1788185563337.jpg';
import grade6ChainLetterImg from '../assets/images/grade6_chain_letter_1788185580311.jpg';
import memeFallImg from '../assets/images/school_meme_fall_1787756976967.jpg';
import grade7SportsImg from '../assets/images/grade7_sports_video_1787759880327.jpg';
import gamingMatchImg from '../assets/images/school_gaming_match_1787756994296.jpg';
import grade8PollImg from '../assets/images/grade8_poll_comparison_1787759893629.jpg';
import musicStageImg from '../assets/images/school_music_stage_1787757012632.jpg';
import spottedPostImg from '../assets/images/school_spotted_post_1787757028617.jpg';

import { FALLBACK_ILLUSTRATIONS } from './scenarioIllustrations';

export interface ScenarioImageMeta {
  coverUrl: string;
  attachmentCaption: string;
  attachmentTitle: string;
}

export const SCENARIO_IMAGES_MAP: Record<string, ScenarioImageMeta> = {
  // === 5º ANO ===
  'cenario-5-1': {
    coverUrl: grade5CraftBaseImg,
    attachmentTitle: 'Construção no Servidor de Blocos',
    attachmentCaption: 'Base virtual compartilhada no jogo destruída'
  },
  'cenario-5-2': {
    coverUrl: studyGroupImg,
    attachmentTitle: 'Grupo de Estudos de Ciências',
    attachmentCaption: 'Página da lição do livro escolar'
  },
  'cenario-5-3': {
    coverUrl: FALLBACK_ILLUSTRATIONS['cenario-5-3'],
    attachmentTitle: 'Alerta de Link Falso de Moedas',
    attachmentCaption: 'Página fraudulenta de golpe prometendo gemas'
  },
  'cenario-5-4': {
    coverUrl: FALLBACK_ILLUSTRATIONS['cenario-5-4'],
    attachmentTitle: 'Vídeo do Salto Perigoso',
    attachmentCaption: 'Desafio arriscado gravado no celular'
  },
  'cenario-5-5': {
    coverUrl: FALLBACK_ILLUSTRATIONS['cenario-5-5'],
    attachmentTitle: 'Conversa com Jogador Desconhecido',
    attachmentCaption: 'Mensagem privada pedindo dados pessoais'
  },
  'cenario-5-6': {
    coverUrl: FALLBACK_ILLUSTRATIONS['cenario-5-6'],
    attachmentTitle: 'Acesso e Senha da Conta de Jogos',
    attachmentCaption: 'Compartilhamento indevido de credenciais'
  },
  'cenario-5-7': {
    coverUrl: FALLBACK_ILLUSTRATIONS['cenario-5-7'],
    attachmentTitle: 'Foto Não Autorizada no Recreio',
    attachmentCaption: 'Registro tirado escondido durante o lanche'
  },
  'cenario-5-8': {
    coverUrl: FALLBACK_ILLUSTRATIONS['cenario-5-8'],
    attachmentTitle: 'Grupo Exclusivo da Turma',
    attachmentCaption: 'Conversa fechada criada para excluir novatos'
  },
  'cenario-5-9': {
    coverUrl: FALLBACK_ILLUSTRATIONS['cenario-5-9'],
    attachmentTitle: 'Loja de Aplicativos e Moedas',
    attachmentCaption: 'Compra de moedas com cartão da família'
  },
  'cenario-5-10': {
    coverUrl: FALLBACK_ILLUSTRATIONS['cenario-5-10'],
    attachmentTitle: 'Mensagem Suspeita de Agência Falsa',
    attachmentCaption: 'Perfil pedindo fotos privadas em segredo'
  },

  // === 6º ANO ===
  'cenario-6-1': {
    coverUrl: grade6VolleyballStickerImg,
    attachmentTitle: 'Figurinha da Queda no Vôlei',
    attachmentCaption: 'Foto do tropeço compartilhada como figurinha no grupo'
  },
  'cenario-6-2': {
    coverUrl: grade6AudioImg,
    attachmentTitle: 'Áudio Remix Gravado Escondido',
    attachmentCaption: 'Gravação da voz de Gustavo com efeitos sonoros de risada'
  },
  'cenario-6-3': {
    coverUrl: grade6ModHackImg,
    attachmentTitle: 'Link Falso de Mod Menu e Hack Infinito',
    attachmentCaption: 'Download fraudulento pedindo para desativar o antivírus'
  },
  'cenario-6-4': {
    coverUrl: grade6BackpackImg,
    attachmentTitle: 'Julgamento de Roupas e Mochilas',
    attachmentCaption: 'Foto da mochila de Júlia exposta no grupo fechado das populares'
  },
  'cenario-6-5': {
    coverUrl: grade6TradeScamImg,
    attachmentTitle: 'Golpe na Troca da Espada Lendária',
    attachmentCaption: 'Promessa de troca com bloqueio e roubo de 5 itens raros'
  },
  'cenario-6-6': {
    coverUrl: grade6OnlineClassImg,
    attachmentTitle: 'Apresentação de Slides Interrompida',
    attachmentCaption: 'Aula virtual de Geografia sofrendo spam de figurinhas no chat'
  },
  'cenario-6-7': {
    coverUrl: grade6AiEssayImg,
    attachmentTitle: 'Redação Escolar Copiada de IA',
    attachmentCaption: 'Texto gerado por inteligência artificial fingindo autoria própria'
  },
  'cenario-6-8': {
    coverUrl: grade6FakeProfileImg,
    attachmentTitle: 'Perfil Fake de Chantagem Escolar',
    attachmentCaption: 'Conta anônima no Instagram exigindo respostas de provas'
  },
  'cenario-6-9': {
    coverUrl: grade6StatusLeakImg,
    attachmentTitle: 'Exposição de Segredo no Status do WhatsApp',
    attachmentCaption: 'Intimidade familiar de Henrique postada no status por vingança'
  },
  'cenario-6-10': {
    coverUrl: grade6ChainLetterImg,
    attachmentTitle: 'Corrente de Pânico e Ameaças Falsas',
    attachmentCaption: 'Mensagem com maldição assustando alunos para repassar a 15 pessoas'
  },

  // === 7º ANO ===
  'cenario-7-1': {
    coverUrl: grade7SportsImg,
    attachmentTitle: 'Lance do Torneio de Queimada',
    attachmentCaption: 'Vídeo desacelerado para zoar colega'
  },
  'cenario-7-2': {
    coverUrl: gamingMatchImg,
    attachmentTitle: 'Mensagens Ofensivas na Partida do Jogo',
    attachmentCaption: 'Ofensas e xingamentos durante jogo competitivo'
  },
  'cenario-7-3': {
    coverUrl: FALLBACK_ILLUSTRATIONS['cenario-7-3'],
    attachmentTitle: 'Filtro e Piada com Aparência',
    attachmentCaption: 'Montagem estética maldosa na rede social'
  },
  'cenario-7-4': {
    coverUrl: FALLBACK_ILLUSTRATIONS['cenario-7-4'],
    attachmentTitle: 'Corrente de Exposição nas Redes',
    attachmentCaption: 'Enquete depreciativa sobre colegas'
  },
  'cenario-7-5': {
    coverUrl: FALLBACK_ILLUSTRATIONS['cenario-7-5'],
    attachmentTitle: 'Manipulação de Voz por Inteligência Artificial',
    attachmentCaption: 'Áudio falso clonando a voz de um estudante'
  },
  'cenario-7-6': {
    coverUrl: FALLBACK_ILLUSTRATIONS['cenario-7-6'],
    attachmentTitle: 'Falso Concurso Estudantil',
    attachmentCaption: 'Formulário pedindo senhas e dados dos pais'
  },
  'cenario-7-7': {
    coverUrl: FALLBACK_ILLUSTRATIONS['cenario-7-7'],
    attachmentTitle: 'Falsa Proposta de Patrocínio em Jogos',
    attachmentCaption: 'Contrato fraudulento pedindo dados bancários'
  },
  'cenario-7-8': {
    coverUrl: FALLBACK_ILLUSTRATIONS['cenario-7-8'],
    attachmentTitle: 'Conta Invadida por Senha Fácil',
    attachmentCaption: 'Perfil bloqueado após senha simples ser adivinhada'
  },
  'cenario-7-9': {
    coverUrl: FALLBACK_ILLUSTRATIONS['cenario-7-9'],
    attachmentTitle: 'Ataques no Vídeo de Apresentação',
    attachmentCaption: 'Comentários de ódio no projeto escolar'
  },
  'cenario-7-10': {
    coverUrl: FALLBACK_ILLUSTRATIONS['cenario-7-10'],
    attachmentTitle: 'Rede de Guardiões Digitais',
    attachmentCaption: 'Equipe de apoio e mediação escolar'
  },

  // === 8º ANO ===
  'cenario-8-1': {
    coverUrl: grade8PollImg,
    attachmentTitle: 'Enquete Comparativa de Beleza',
    attachmentCaption: 'Votação tóxica julgando alunas da escola'
  },
  'cenario-8-2': {
    coverUrl: musicStageImg,
    attachmentTitle: 'Gravação Não Autorizada no Sarau',
    attachmentCaption: 'Vídeo da apresentação musical postado sem permissão'
  },
  'cenario-8-3': {
    coverUrl: FALLBACK_ILLUSTRATIONS['cenario-8-3'],
    attachmentTitle: 'Rede Wi-Fi Pública Falsa',
    attachmentCaption: 'Interceptação de dados e roubo de credenciais'
  },
  'cenario-8-4': {
    coverUrl: FALLBACK_ILLUSTRATIONS['cenario-8-4'],
    attachmentTitle: 'Golpe do Falso Jovem Aprendiz',
    attachmentCaption: 'Promessa enganosa de emprego cobrando taxas e documentos'
  },
  'cenario-8-5': {
    coverUrl: FALLBACK_ILLUSTRATIONS['cenario-8-5'],
    attachmentTitle: 'Filtros Irreais e Padrões Estéticos',
    attachmentCaption: 'Pressão estética e comparação nas redes sociais'
  },
  'cenario-8-6': {
    coverUrl: FALLBACK_ILLUSTRATIONS['cenario-8-6'],
    attachmentTitle: 'Golpe do Código SMS de Autenticação',
    attachmentCaption: 'Tentativa de roubo de conta por engenharia social'
  },
  'cenario-8-7': {
    coverUrl: FALLBACK_ILLUSTRATIONS['cenario-8-7'],
    attachmentTitle: 'Vazamento de Dados Pessoais (Doxxing)',
    attachmentCaption: 'Divulgação ilegal de endereço e contatos em fórum'
  },
  'cenario-8-8': {
    coverUrl: FALLBACK_ILLUSTRATIONS['cenario-8-8'],
    attachmentTitle: 'Malware Disfarçado de Mod de Jogo',
    attachmentCaption: 'Cavalo de Troia e roubo de senhas por links piratas'
  },
  'cenario-8-9': {
    coverUrl: FALLBACK_ILLUSTRATIONS['cenario-8-9'],
    attachmentTitle: 'Caixa de Perguntas Anônimas',
    attachmentCaption: 'Mensagens agressivas e covardia no anonimato'
  },
  'cenario-8-10': {
    coverUrl: FALLBACK_ILLUSTRATIONS['cenario-8-10'],
    attachmentTitle: 'Desinformação sobre Saúde e Dietas',
    attachmentCaption: 'Receitas perigosas e desinformação médica em vídeos virais'
  },

  // === 9º ANO ===
  'cenario-9-1': {
    coverUrl: spottedPostImg,
    attachmentTitle: 'Mural Anônimo e Difamação',
    attachmentCaption: 'Acusações falsas e difamação em página escolar'
  },
  'cenario-9-2': {
    coverUrl: FALLBACK_ILLUSTRATIONS['cenario-9-2'],
    attachmentTitle: 'Montagem de Conversa Falsa',
    attachmentCaption: 'Captura forjada para criar intrigas na turma'
  },
  'cenario-9-3': {
    coverUrl: FALLBACK_ILLUSTRATIONS['cenario-9-3'],
    attachmentTitle: 'Comércio Ilegal de Vapes em Grupos',
    attachmentCaption: 'Venda clandestina e perigos do cigarro eletrônico'
  },
  'cenario-9-4': {
    coverUrl: FALLBACK_ILLUSTRATIONS['cenario-9-4'],
    attachmentTitle: 'Esquema de Pirâmide Financeira',
    attachmentCaption: 'Promessa de dinheiro fácil recrutando amigos'
  },
  'cenario-9-5': {
    coverUrl: FALLBACK_ILLUSTRATIONS['cenario-9-5'],
    attachmentTitle: 'Clonagem de Voz com IA',
    attachmentCaption: 'Áudio falso gerado por IA para aplicar golpes'
  },
  'cenario-9-6': {
    coverUrl: FALLBACK_ILLUSTRATIONS['cenario-9-6'],
    attachmentTitle: 'Ataques de Intolerância e Homofobia',
    attachmentCaption: 'Discurso de ódio e ameaças nas redes'
  },
  'cenario-9-7': {
    coverUrl: FALLBACK_ILLUSTRATIONS['cenario-9-7'],
    attachmentTitle: 'Invasão de Rede e Vazamento de Prova',
    attachmentCaption: 'Acesso indevido a sistema escolar e venda de gabarito'
  },
  'cenario-9-8': {
    coverUrl: FALLBACK_ILLUSTRATIONS['cenario-9-8'],
    attachmentTitle: 'Ataque Virtual a Professor',
    attachmentCaption: 'Difamação e incitação ao ódio contra educador'
  },
  'cenario-9-9': {
    coverUrl: FALLBACK_ILLUSTRATIONS['cenario-9-9'],
    attachmentTitle: 'Roubo de Identidade e Conta Fraudulenta',
    attachmentCaption: 'Uso indevido de CPF para abertura de contas falsas'
  },
  'cenario-9-10': {
    coverUrl: FALLBACK_ILLUSTRATIONS['cenario-9-10'],
    attachmentTitle: 'Pegada Digital e Legado Estudantil',
    attachmentCaption: 'Compromisso com a ética e o futuro digital'
  }
};
