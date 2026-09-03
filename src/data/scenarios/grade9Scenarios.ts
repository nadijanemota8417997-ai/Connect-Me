import { Scenario } from '../../types';
import spottedPostImg from '../../assets/images/school_spotted_post_1787757028617.jpg';
import studyGroupImg from '../../assets/images/school_study_group_1787756957320.jpg';

export const grade9Scenarios: Scenario[] = [
  // 9.1
  {
    id: 'cenario-9-1',
    grade: '9',
    gradeLabel: '9º Ano',
    title: 'O Mural de Recados Anônimos e a Difamação',
    category: 'Fofocas e Perfis Falsos',
    difficulty: 'Avançado',
    platformType: 'instagram',
    pedagogicalObjective: 'Conscientizar sobre as implicações éticas e jurídicas (Calúnia, Injúria e Difamação) de páginas anônimas de confissão escolar.',
    context: 'Uma página anônima chamada "Mural Anônimo 9º Ano" postou uma acusação falsa e difamatória contra Manuela, dizendo que ela roubou pertences da sala dos professores para comprar roupas.',
    simplifiedContext: 'Uma página anônima de fofocas postou mentiras graves sobre Manuela ter furtado pertences na escola.',
    characters: [
      { name: 'Manuela', role: 'Vítima', avatar: '👩🏻' },
      { name: 'Admin do Mural', role: 'Agresor(a)', avatar: '🎭' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c9_1_post',
        sender: 'Mural_9Ano_Real',
        avatar: '🎭',
        isAggressor: true,
        text: 'BOMBA NO 9º ANO: Dizem as más línguas que a Manuela foi quem pegou o dinheiro da gaveta dos professores pra ostentar no shopping! O que acham dessa ladra? 💣👀',
        simplifiedText: 'Página anônima acusando falsamente a Manuela de roubo na escola.',
        time: '12:30',
        attachment: {
          type: 'post',
          imageUrl: spottedPostImg,
          content: 'Publicação anônima de fofoca difamatória',
          likes: 312,
          comments: 84,
          caption: 'Mural Anônimo 9º Ano - Segredos Revelados'
        },
        reactions: [{ emoji: '😱', count: 18 }, { emoji: '🔥', count: 10 }]
      },
      {
        id: 'c9_1_manu',
        sender: 'Manuela',
        avatar: '👩🏻',
        isVictim: true,
        text: 'Isso é uma CALÚNIA NOJENTA! Eu estava na biblioteca estudando! Minha mãe tá na diretoria chorando de tanta humilhação... Não aguento mais essa página 😭💔',
        simplifiedText: 'Isso é uma calúnia terrível! Eu nunca roubei nada! Minha família está arrasada...',
        time: '12:35'
      }
    ],
    choices: [
      {
        id: 'c9-1-empatica',
        text: 'Agir com firmeza legal e liderança moral: "Galera do 9º ano, CHEGA! Criar página anônima para inventar crimes e difamar colegas é CRIME previsto no Código Penal (Calúnia e Difamação) e no Marco Civil da Internet! O administrador é rastreável judicialmente pelo IP. Deixem de seguir essa página podre e denunciem a publicação agora em massa para derrubar esse perfil!"',
        simplifiedText: 'Denunciar que calúnia é crime no Código Penal, parar de seguir a página de fofocas e mobilizar a turma para derrubar o perfil.',
        type: 'empathetic',
        icon: '⚖️',
        points: 70,
        consequence: {
          title: 'Combate à Calúnia e Responsabilização',
          description: 'A página perdeu centenas de seguidores em horas e foi banida pelo Instagram. A polícia civil identificou o criador através de ordem judicial de quebra de IP.',
          simplifiedDescription: 'Você liderou o fim da página de fofocas e defendeu a honra de Manuela com a lei.',
          victimEmotion: 'acolhida',
          chatFeedback: [
            { sender: 'Manuela', avatar: '👩🏻', text: 'Você teve a coragem que ninguém teve de enfrentar esses covardes. Minha família te agradece eternamente!' }
          ],
          impact: { empathyChange: 70, trustChange: 65, schoolClimateChange: 55 },
          lesson: 'O anonimato na internet é ilusório. O Marco Civil da Internet (Lei 12.965/14) e a justiça responsabilizam autores de difamação e calúnia online.',
          simplifiedLesson: 'Páginas anônimas de fofoca cometem crimes. Nunca dê audiência a mentiras sobre os outros.'
        }
      },
      {
        id: 'c9-1-passiva',
        text: 'Ficar lendo os comentários com pipoca para ver as próximas fofocas da escola.',
        simplifiedText: 'Apenas ficar lendo os comentários curiosos.',
        type: 'passive',
        icon: '🍿',
        points: -20,
        consequence: {
          title: 'Alimentando o Monstro da Difamação',
          description: 'A audiência incentivou a página a criar mentiras sobre mais 5 estudantes na mesma semana.',
          simplifiedDescription: 'Dar audiência à fofoca fez mais colegas serem atacados.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Manuela', avatar: '👩🏻', text: 'A curiosidade de vocês alimenta a nossa destruição...' }
          ],
          impact: { empathyChange: -40, trustChange: -50, schoolClimateChange: -45 },
          lesson: 'A audiência é o combustível da difamação. Quem consome fofocas anônimas financia moralmente o assédio.',
          simplifiedLesson: 'Curiosidade por fofocas machuca os colegas e destrói o clima da escola.'
        }
      },
      {
        id: 'c9-1-mediadora',
        text: 'Apoiar a família de Manuela na coleta de provas técnicas (links, datas, prints autenticados) para registro em cartório e ata notarial.',
        simplifiedText: 'Ajudar a salvar as provas técnicas de forma correta para a ação jurídica.',
        type: 'mediator',
        icon: '📂',
        points: 65,
        consequence: {
          title: 'Preservação de Evidências Digitais',
          description: 'A documentação adequada permitiu uma ação jurídica rápida e a retratação pública obrigatória.',
          simplifiedDescription: 'As provas bem guardadas garantiram que a justiça fosse feita com rapidez.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Manuela', avatar: '👩🏻', text: 'As provas que você salvou foram fundamentais para o processo.' }
          ],
          impact: { empathyChange: 65, trustChange: 55, schoolClimateChange: 50 },
          lesson: 'Preservar a cadeia de custódia das evidências digitais é essencial para o sucesso de ações legais.',
          simplifiedLesson: 'Guardar provas com links e horários ajuda a provar a verdade na justiça.'
        }
      }
    ]
  },

  // 9.2
  {
    id: 'cenario-9-2',
    grade: '9',
    gradeLabel: '9º Ano',
    title: 'A Montagem Digital e Fake News',
    category: 'Deepfake e Manipulação',
    difficulty: 'Avançado',
    platformType: 'whatsapp',
    pedagogicalObjective: 'Identificar manipulações digitais, montagens e fotos forjadas para arruinar relações entre estudantes.',
    context: 'Criaram uma montagem de conversa falsa no WhatsApp para fazer parecer que Beatriz estava falando mal de toda a comissão de formatura do 9º ano.',
    simplifiedContext: 'Fizeram um print falso de conversa para fingir que a Beatriz falou mal dos colegas.',
    characters: [
      { name: 'Beatriz', role: 'Vítima', avatar: '👩🏻' },
      { name: 'Rodrigo', role: 'Agresor(a)', avatar: '📱' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c9_2_print',
        sender: 'Rodrigo',
        avatar: '📱',
        isAggressor: true,
        text: 'Vazou a conversa da Beatriz falando mal do 9º ano inteiro! Ela acha todo mundo aqui falso! Vejam o print:',
        simplifiedText: 'Olha o print da Beatriz falando mal de todo mundo!',
        time: '13:30',
        attachment: {
          type: 'image',
          imageUrl: studyGroupImg,
          content: 'Print Manipulado com Fonte Adulterada',
          caption: 'Montagem feita em aplicativo gerador de conversas falsas'
        },
        reactions: [{ emoji: '😱', count: 14 }, { emoji: '😡', count: 9 }]
      },
      {
        id: 'c9_2_bia',
        sender: 'Beatriz',
        avatar: '👩🏻',
        isVictim: true,
        text: 'Gente, eu NUNCA escrevi isso! Olha a fonte do print, o espaçamento tá todo errado, é uma montagem descarada!',
        simplifiedText: 'Eu nunca escrevi isso! É uma montagem falsa!',
        time: '13:32',
        reactions: [{ emoji: '💔', count: 4 }]
      }
    ],
    choices: [
      {
        id: 'c9-2-empatica',
        text: 'Analisar tecnicamente o print no grupo e provar a fraude: "Galera, parem tudo. Essa imagem foi gerada num site de prints falsos, olha o alinhamento do texto e a foto antiga da Bia. Parem de linchar uma colega por montagem barata."',
        simplifiedText: 'Mostrar para o grupo que o print é falso e defender a Beatriz com provas técnicas.',
        type: 'empathetic',
        icon: '🔍',
        points: 65,
        consequence: {
          title: 'Pensamento Crítico e Justiça Digital',
          description: 'A turma analisou as evidências e desmascarou a mentira. A amizade da turma foi preservada e a formatura continuou unida.',
          simplifiedDescription: 'Você provou que era mentira e salvou a reputação da Beatriz.',
          victimEmotion: 'acolhida',
          chatFeedback: [
            { sender: 'Beatriz', avatar: '👩🏻', text: 'Nossa, muito obrigada! Eu estava desesperada achando que ninguém acreditaria em mim.' }
          ],
          impact: { empathyChange: 65, trustChange: 55, schoolClimateChange: 50 },
          lesson: 'Nunca acredite em capturas de tela sem checar a veracidade. A alfabetização midiática e o senso crítico protegem contra notícias falsas e injustiças.',
          simplifiedLesson: 'Cheque sempre as informações antes de acusar alguém. Mensagens podem ser facilmente forjadas.'
        }
      },
      {
        id: 'c9-2-hostil',
        text: 'Xingar Beatriz no grupo dizendo que "quem desdenha quer comprar" e excluí-la da formatura.',
        simplifiedText: 'Xingar a colega e excluí-la do grupo da formatura.',
        type: 'hostile',
        icon: '🚫',
        points: -40,
        consequence: {
          title: 'Injustiça Consumada',
          description: 'Beatriz foi excluída da festa de formatura injustamente, gerando um trauma irreparável no fim do ciclo escolar.',
          simplifiedDescription: 'A colega sofreu injustiça grave e foi banida da formatura.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Beatriz', avatar: '👩🏻', text: 'Vocês acreditaram em uma mentira em vez de acreditarem em mim...' }
          ],
          impact: { empathyChange: -60, trustChange: -70, schoolClimateChange: -60 },
          lesson: 'Julgar e condenar sem provas é a marca do linchamento virtual.',
          simplifiedLesson: 'Nunca julgue ninguém com base em boatos ou imagens suspeitas.'
        }
      },
      {
        id: 'c9-2-mediadora',
        text: 'Chamar uma reunião presencial com a comissão de formatura para esclarecer os fatos olhando nos olhos.',
        simplifiedText: 'Organizar uma conversa presencial com a turma para esclarecer tudo em paz.',
        type: 'mediator',
        icon: '🤝',
        points: 60,
        consequence: {
          title: 'Transparência Presencial',
          description: 'A conversa presencial desfez os mal-entendidos e uniu o grupo ainda mais.',
          simplifiedDescription: 'A conversa cara a cara resolveu a mentira com maturidade.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Beatriz', avatar: '👩🏻', text: 'Conversar pessoalmente resolveu tudo!' }
          ],
          impact: { empathyChange: 60, trustChange: 50, schoolClimateChange: 45 },
          lesson: 'A comunicação humana direta e presencial desmancha intrigas virtuais.',
          simplifiedLesson: 'Conversar pessoalmente é sempre melhor do que discutir em mensagens.'
        }
      }
    ]
  },

  // 9.3
  {
    id: 'cenario-9-3',
    grade: '9',
    gradeLabel: '9º Ano',
    title: 'Venda de Cigarros Eletrônicos (Vapes) em Grupos',
    category: 'Cidadania Digital e Pegada Digital',
    difficulty: 'Avançado',
    platformType: 'whatsapp',
    pedagogicalObjective: 'Conscientizar sobre a ilegalidade da comercialização de substâncias ilícitas para menores e proteção da saúde pública.',
    context: 'Um aluno começou a vender cigarros eletrônicos (Vapes e Pods) dentro de um grupo fechado de WhatsApp de alunos do 9º ano, dizendo que "não faz mal porque tem cheiro de morango".',
    simplifiedContext: 'Um aluno está vendendo cigarros eletrônicos no grupo da escola dizendo que não faz mal à saúde.',
    characters: [
      { name: 'Vendedor de Vape', role: 'Agresor(a)', avatar: '💨' },
      { name: 'Leandro (Tentado a comprar)', role: 'Vítima', avatar: '👦🏻' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c9_3_vape',
        sender: 'Vendedor de Vape',
        avatar: '💨',
        isAggressor: true,
        text: 'Chegou pod novo de sabor Melancia com Menta! R$ 60 na entrega do banheiro! Vende rápido, quem quer?! 🍉💨',
        simplifiedText: 'Vendendo cigarro eletrônico no banheiro da escola por R$ 60.',
        time: '10:15'
      },
      {
        id: 'c9_3_leo',
        sender: 'Leandro',
        avatar: '👦🏻',
        isVictim: true,
        text: 'Mano, tô pensando em comprar pra experimentar com a galera no fim de semana... todo mundo tá usando nos rolês.',
        simplifiedText: 'Acho que vou comprar pra experimentar no final de semana...',
        time: '10:17'
      }
    ],
    choices: [
      {
        id: 'c9-3-empatica',
        text: 'Alertar Leandro com evidências médicas e combater a venda ilegal: "Leandro, não caia nessa ilusão! O cigarro eletrônico tem doses altíssimas de nicotina, metais pesados tóxicos e causa dependência severa e danos graves aos pulmões (doença EVALI). Além disso, a venda de vapes é PROIBIDA no Brasil pela ANVISA e vender para menores é crime! Sua saúde e seu futuro valem muito mais do que modinhas perigosas!"',
        simplifiedText: 'Explicar que cigarros eletrônicos destroem os pulmões, são proibidos pela Anvisa e que vender para menores é crime.',
        type: 'empathetic',
        icon: '🫁',
        points: 65,
        consequence: {
          title: 'Proteção à Saúde e Cidadania',
          description: 'Leandro desistiu da compra e agradeceu pelo alerta. O grupo repudiou a venda clandestina e a escola tomou providências preventivas.',
          simplifiedDescription: 'Você salvou seu amigo de um vício químico perigoso e protegeu a saúde da turma.',
          victimEmotion: 'aliviado',
          chatFeedback: [
            { sender: 'Leandro', avatar: '👦🏻', text: 'Caraca, pesquisei sobre a doença do pulmão de pipoca e me assustei real... Valeu por abrir meus olhos!' }
          ],
          impact: { empathyChange: 65, trustChange: 55, schoolClimateChange: 50 },
          lesson: 'A venda e o consumo de vapes destroem a saúde respiratória e cardiovascular. Dizer não à pressão de grupo é sinal de maturidade.',
          simplifiedLesson: 'Cigarros eletrônicos são perigosos e proibidos. Cuidar dos pulmões é cuidar da vida.'
        }
      },
      {
        id: 'c9-3-hostil',
        text: 'Comprar um vape junto com Leandro para parecer "descolado" nas festas.',
        simplifiedText: 'Comprar o produto junto para tentar parecer mais velho.',
        type: 'hostile',
        icon: '💨',
        points: -35,
        consequence: {
          title: 'Dependência Química e Complicações',
          description: 'Ambos desenvolveram crises de falta de ar e foram flagrados pela direção escolar, sofrendo suspensão.',
          simplifiedDescription: 'O uso causou problemas de saúde e problemas graves na escola.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Leandro', avatar: '👦🏻', text: 'Tô tossindo direto e meus pais descobriram tudo...' }
          ],
          impact: { empathyChange: -55, trustChange: -60, schoolClimateChange: -50 },
          lesson: 'Ceder ao consumo de substâncias proibidas prejudica a saúde e compromete o futuro.',
          simplifiedLesson: 'Nunca use substâncias perigosas por pressão de amigos.'
        }
      },
      {
        id: 'c9-3-mediadora',
        text: 'Avisar a coordenação da escola de forma anônima para que palestras de saúde pulmonar sejam realizadas na instituição.',
        simplifiedText: 'Fazer uma denúncia anônima para a escola orientar todos os alunos sobre os riscos.',
        type: 'mediator',
        icon: '🛡️',
        points: 60,
        consequence: {
          title: 'Prevenção Escolar Ampla',
          description: 'A escola trouxe médicos pneumologistas para uma palestra impactante que conscientizou o 9º ano inteiro.',
          simplifiedDescription: 'A palestra médica conscientizou toda a escola sobre os perigos do fumo.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Coordenação Pedagógica', avatar: '🏫', text: 'Obrigado por colaborar com a saúde e segurança de todos.' }
          ],
          impact: { empathyChange: 60, trustChange: 50, schoolClimateChange: 45 },
          lesson: 'A informação médica de qualidade é a melhor ferramenta preventiva contra vícios.',
          simplifiedLesson: 'A educação e a informação médica protegem toda a comunidade escolar.'
        }
      }
    ]
  },

  // 9.4
  {
    id: 'cenario-9-4',
    grade: '9',
    gradeLabel: '9º Ano',
    title: 'Esquemas de Pirâmide Financeira para Jovens',
    category: 'Apostas e Fraudes Digitais',
    difficulty: 'Avançado',
    platformType: 'instagram',
    pedagogicalObjective: 'Reconhecer fraudes financeiras, pirâmides e promessas irreais de enriquecimento rápido na internet.',
    context: 'Um perfil de "mentor jovem milionário" abordou Gabriel prometendo que ele ganharia R$ 5.000 por mês trabalhando 10 minutos por dia se ele pagasse R$ 200 de entrada e convidasse 5 amigos da escola.',
    simplifiedContext: 'Prometeram R$ 5.000 por mês para Gabriel se ele pagasse R$ 200 e convencesse 5 colegas da sala a entrar no esquema.',
    characters: [
      { name: 'Gabriel', role: 'Vítima', avatar: '📈' },
      { name: 'Mentor Fake', role: 'Agresor(a)', avatar: '👔' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c9_4_pyramid',
        sender: 'Mentor_Jovem_Milionário',
        avatar: '👔',
        isAggressor: true,
        text: 'Gabriel, você quer continuar sendo um estudante comum ou quer andar de carro importado aos 15 anos? Transfira R$ 200 para liberar o curso VIP e traga 5 amigos da sua escola para ganhar comissão em cascata! 💸🚀',
        simplifiedText: 'Pague R$ 200 e traga 5 amigos da escola para ganhar R$ 5.000 por mês!',
        time: '20:10'
      },
      {
        id: 'c9_4_gab',
        sender: 'Gabriel',
        avatar: '📈',
        isVictim: true,
        text: 'Galera do 9º ano, vou mandar o convite pra vocês! Vamos ficar ricos juntos, só precisamos de R$ 200 cada um!',
        simplifiedText: 'Vou convidar todo mundo da sala pra gente ficar rico junto!',
        time: '20:12'
      }
    ],
    choices: [
      {
        id: 'c9-4-empatica',
        text: 'Desmascarar o golpe para a turma: "Gabriel, PARE! Isso é uma PIRÂMIDE FINANCEIRA clássica e CRIME CONTRA A ECONOMIA POPULAR! Não existe enriquecimento fácil na internet. O modelo de pirâmide sempre colapsa e 99% das pessoas perdem todo o dinheiro investido. Se você envolver seus amigos, você estará prejudicando as pessoas que gostam de você. Não transfira nada e bloqueie esse perfil!"',
        simplifiedText: 'Avisar que é um crime de pirâmide financeira, que todos vão perder dinheiro e impedir que o amigo envolva os colegas.',
        type: 'empathetic',
        icon: '🛡️',
        points: 70,
        consequence: {
          title: 'Proteção Patrimonial e Consciência Econômica',
          description: 'Gabriel compreendeu a armadilha, cancelou a entrada no esquema e impediu que dezenas de famílias da escola fossem lesadas.',
          simplifiedDescription: 'Você evitou que seu amigo e a turma inteira caíssem num golpe financeiro grave.',
          victimEmotion: 'aliviado',
          chatFeedback: [
            { sender: 'Gabriel', avatar: '📈', text: 'Pesquisei no Procon e vi que essa mesma empresa foi fechada pela polícia ontem! Você salvou meu dinheiro e a confiança dos meus amigos!' }
          ],
          impact: { empathyChange: 70, trustChange: 65, schoolClimateChange: 55 },
          lesson: 'Pirâmides financeiras são crimes insustentáveis. Ganhar dinheiro honesto exige qualificação, estudo, trabalho e respeito ao próximo.',
          simplifiedLesson: 'Promessas de dinheiro fácil que exigem recrutar pessoas são golpes perigosos.'
        }
      },
      {
        id: 'c9-4-passiva',
        text: 'Mandar R$ 200 para Gabriel para ajudá-lo a bater a meta.',
        simplifiedText: 'Mandar o dinheiro para ajudar o amigo a bater a meta.',
        type: 'passive',
        icon: '💸',
        points: -30,
        consequence: {
          title: 'Prejuízo Coletivo',
          description: 'O mentor falso sumiu com o dinheiro de todos e as famílias dos alunos brigaram na porta da escola.',
          simplifiedDescription: 'O golpista sumiu com o dinheiro e os pais ficaram com prejuízo.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Gabriel', avatar: '📈', text: 'Perdi a amizade de todo mundo que convidei...' }
          ],
          impact: { empathyChange: -50, trustChange: -60, schoolClimateChange: -50 },
          lesson: 'Envolver amigos em esquemas fraudulentos destrói laços de confiança e gera dívidas morais.',
          simplifiedLesson: 'Nunca envolva amigos em negócios suspeitos.'
        }
      },
      {
        id: 'c9-4-mediadora',
        text: 'Denunciar o perfil à Comissão de Valores Mobiliários (CVM) e ao Ministério Público.',
        simplifiedText: 'Denunciar o esquema financeiro aos órgãos de fiscalização pública.',
        type: 'mediator',
        icon: '⚖️',
        points: 60,
        consequence: {
          title: 'Atuação Cidadã e Fiscalização',
          description: 'A denúncia embasou a operação policial que derrubou a rede de estelionatários.',
          simplifiedDescription: 'A denúncia ajudou a fechar a empresa golpista.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Gabriel', avatar: '📈', text: 'A justiça agiu rápido. Obrigado pela orientação!' }
          ],
          impact: { empathyChange: 60, trustChange: 50, schoolClimateChange: 45 },
          lesson: 'Acionar órgãos reguladores protege toda a sociedade contra fraudadores.',
          simplifiedLesson: 'Denunciar golpes aos órgãos corretos protege a sociedade inteira.'
        }
      }
    ]
  },

  // 9.5
  {
    id: 'cenario-9-5',
    grade: '9',
    gradeLabel: '9º Ano',
    title: 'Clonagem de Voz com IA (Deepfake de Áudio)',
    category: 'Deepfake e Manipulação',
    difficulty: 'Avançado',
    platformType: 'whatsapp',
    pedagogicalObjective: 'Reconhecer fraudes sofisticadas de clonagem de voz por inteligência artificial e protocolos de checagem.',
    context: 'A mãe de Gustavo recebeu um áudio no WhatsApp com a voz idêntica à dele chorando e dizendo que foi assaltado na saída da escola e precisava de R$ 800 via Pix com urgência.',
    simplifiedContext: 'Usaram IA para clonar a voz de Gustavo pedindo dinheiro no WhatsApp da mãe dele.',
    characters: [
      { name: 'Gustavo', role: 'Vítima', avatar: '📞' },
      { name: 'Mãe do Gustavo', role: 'Vítima', avatar: '👩🏻' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c9_5_audio',
        sender: 'Número Desconhecido',
        avatar: '📞',
        isAggressor: true,
        text: 'ÁUDIO DE VOZ CLONADA: "Mãe... socorro... roubaram minha mochila na saída... manda R$ 800 nesse Pix do rapaz que tá me ajudando agora por favor..."',
        simplifiedText: 'Áudio falso com a voz de Gustavo pedindo Pix urgente para a mãe.',
        time: '12:50',
        attachment: {
          type: 'audio',
          content: 'voz_clonada_ia_urgente.mp3',
          duration: '0:14',
          caption: 'Áudio gerado por clonagem de voz de IA'
        }
      },
      {
        id: 'c9_5_gus',
        sender: 'Gustavo',
        avatar: '📞',
        isVictim: true,
        text: 'Gente, minha mãe me ligou desesperada chorando achando que eu fui sequestrado! Eu tô aqui na sala de aula tranquilo! Como conseguiram a minha voz exata?!',
        simplifiedText: 'Minha mãe quase teve um ataque de pânico achando que fui assaltado... Como clonaram minha voz?!',
        time: '12:53'
      }
    ],
    choices: [
      {
        id: 'c9-5-empatica',
        text: 'Ajudar a tranquilizar a família e explicar a tecnologia: "Gustavo, ligue para a sua mãe por chamada de vídeo imediatamente para ela te ver bem! Criminosos usam trechos de vídeos e histórias que postamos falando para treinar IAs que clonam a voz. Criem uma "PALAVRA-CHAVE SECRETA" na sua família para confirmar qualquer emergência e nunca transfiram dinheiro sem antes ver a pessoa ao vivo!"',
        simplifiedText: 'Ligar por chamada de vídeo para a mãe ver que está tudo bem, explicar o golpe de IA e criar uma palavra-passe familiar de segurança.',
        type: 'empathetic',
        icon: '🛡️',
        points: 70,
        consequence: {
          title: 'Segurança Familiar e Desativação do Pânico',
          description: 'A mãe de Gustavo atendeu o vídeo, viu o filho seguro e não realizou o pagamento. A família adotou a palavra-chave de emergência.',
          simplifiedDescription: 'Você acalmou a mãe do colega e ensinou a família a se blindar contra golpes de IA.',
          victimEmotion: 'aliviado',
          chatFeedback: [
            { sender: 'Gustavo', avatar: '📞', text: 'Minha mãe chorou de alívio na chamada de vídeo! A dica da palavra-chave familiar é genial, já combinamos com a casa inteira!' }
          ],
          impact: { empathyChange: 70, trustChange: 65, schoolClimateChange: 55 },
          lesson: 'A inteligência artificial generativa exige novas rotinas de segurança: sempre confirme emergências por vídeo ou contato direto e crie códigos de segurança familiares.',
          simplifiedLesson: 'Golpistas podem imitar vozes com IA. Sempre confirme por chamada de vídeo antes de transferir dinheiro.'
        }
      },
      {
        id: 'c9-5-passiva',
        text: 'Achar assustador, mas não se envolver.',
        simplifiedText: 'Achar perigoso mas não ajudar o amigo.',
        type: 'passive',
        icon: '😶',
        points: -10,
        consequence: {
          title: 'Pânico Familiar Desnecessário',
          description: 'A família quase acionou o resgate policial antes de conseguir confirmar que Gustavo estava na escola.',
          simplifiedDescription: 'A família passou por um susto terrível e desesperador.',
          victimEmotion: 'ansioso',
          chatFeedback: [
            { sender: 'Gustavo', avatar: '📞', text: 'Foi um dos piores sustos da vida dos meus pais...' }
          ],
          impact: { empathyChange: -20, trustChange: -30, schoolClimateChange: -25 },
          lesson: 'Ajudar os amigos a desarmar golpes de IA protege vidas e patrimônios.',
          simplifiedLesson: 'Ajude sempre a esclarecer golpes tecnológicos rápidos.'
        }
      },
      {
        id: 'c9-5-mediadora',
        text: 'Organizar uma campanha informativa na escola sobre os novos golpes com inteligência artificial para orientar pais e responsáveis.',
        simplifiedText: 'Criar um folheto explicativo para os pais sobre segurança contra golpes de voz de IA.',
        type: 'mediator',
        icon: '📢',
        points: 65,
        consequence: {
          title: 'Educação Comunitária contra Crimes com IA',
          description: 'A escola enviou um comunicado especial para todas as famílias, protegendo a comunidade inteira.',
          simplifiedDescription: 'A escola orientou todas as famílias da comunidade.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Associação de Pais', avatar: '👨‍👩‍👧‍👦', text: 'Excelente iniciativa que protegeu centenas de lares!' }
          ],
          impact: { empathyChange: 65, trustChange: 55, schoolClimateChange: 50 },
          lesson: 'A conscientização comunitária é o escudo mais eficaz contra o cibercrime avançado.',
          simplifiedLesson: 'Informar as famílias protege toda a comunidade escolar.'
        }
      }
    ]
  },

  // 9.6
  {
    id: 'cenario-9-6',
    grade: '9',
    gradeLabel: '9º Ano',
    title: 'Cyberbullying Motivado por Intolerância e Homofobia',
    category: 'Discurso de Ódio e Intolerância',
    difficulty: 'Avançado',
    platformType: 'instagram',
    pedagogicalObjective: 'Defender os direitos humanos, combater a homofobia, machismo e intolerâncias na rede e no ambiente escolar.',
    context: 'Após postar uma foto expressando sua identidade e afeto, Pedro se tornou alvo de uma onda de ataques de ódio, ofensas homofóbicas e ameaças de agressão física em uma rede social.',
    simplifiedContext: 'Pedro postou uma foto feliz e foi atacado com comentários homofóbicos e ameaças na internet.',
    characters: [
      { name: 'Pedro', role: 'Vítima', avatar: '🌈' },
      { name: 'Grupo Intolerante', role: 'Agresor(a)', avatar: '💥' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c9_6_hate',
        sender: 'Grupo Intolerante',
        avatar: '💥',
        isAggressor: true,
        text: 'Olha que vergonha na nossa escola! Merece levar uma surra na saída pra aprender a ser homem! Não queremos esse tipo de gente aqui! 🤮',
        simplifiedText: 'Ataques homofóbicos e ameaças de agressão contra o colega.',
        time: '16:00',
        reactions: [{ emoji: '👎', count: 7 }]
      },
      {
        id: 'c9_6_pedro',
        sender: 'Pedro',
        avatar: '🌈',
        isVictim: true,
        text: 'Eu só quero ser feliz e ter o direito de existir sem medo de morrer... Por que tanto ódio no coração dessas pessoas? 😭💔',
        simplifiedText: 'Eu só quero ter o direito de existir e ser feliz sem medo...',
        time: '16:04'
      }
    ],
    choices: [
      {
        id: 'c9-6-empatica',
        text: 'Levantar uma barreira de solidariedade inabalável: "Pedro, você é amado, respeitado e tem todo o direito de ser exatamente quem você é! HOMOFOBIA É CRIME equiparado ao racismo pela lei brasileira (STF). Ameaçar agressão física é ato de extrema covardia. Denunciem essas contas agora e vamos acompanhar o Pedro até em casa com segurança. O ódio nunca vencerá o amor e o respeito!"',
        simplifiedText: 'Declarar que homofobia é crime pela lei brasileira, apoiar Pedro com todo carinho e garantir a segurança física dele.',
        type: 'empathetic',
        icon: '🌈',
        points: 75,
        consequence: {
          title: 'Defesa Intransigente dos Direitos Humanos',
          description: 'A turma formou uma rede de apoio espetacular. A escola e o Ministério Público abriram procedimento formal contra os agressores.',
          simplifiedDescription: 'Você liderou a defesa dos direitos humanos e acolheu seu amigo com amor e segurança.',
          victimEmotion: 'acolhido',
          chatFeedback: [
            { sender: 'Pedro', avatar: '🌈', text: 'Seu abraço e sua voz me deram coragem para continuar existindo e tendo orgulho de quem eu sou. Muito obrigado por não me deixar sozinho!' }
          ],
          impact: { empathyChange: 75, trustChange: 70, schoolClimateChange: 60 },
          lesson: 'A dignidade humana e o respeito à diversidade são inegociáveis. Toda forma de preconceito e discriminação deve ser combatida com rigor legal e empatia ativa.',
          simplifiedLesson: 'Todas as pessoas merecem viver e ser respeitadas. Homofobia e preconceito são crimes inaceitáveis.'
        }
      },
      {
        id: 'c9-6-passiva',
        text: 'Dizer para Pedro apagar a foto para não "provocar" os agressores.',
        simplifiedText: 'Dizer para a vítima apagar a foto e se esconder.',
        type: 'passive',
        icon: '🤐',
        points: -25,
        consequence: {
          title: 'Culpabilização da Vítima',
          description: 'Pedro sentiu que sua própria identidade era errada e entrou em depressão profunda.',
          simplifiedDescription: 'A mensagem fez o colega se sentir culpado por sofrer preconceito.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Pedro', avatar: '🌈', text: 'Eu não estou provocando... eu só estou existindo...' }
          ],
          impact: { empathyChange: -50, trustChange: -60, schoolClimateChange: -45 },
          lesson: 'A culpa do preconceito NUNCA é de quem existe com autenticidade, mas sim do agressor intolerante.',
          simplifiedLesson: 'Nunca culpe a vítima por ser quem ela é.'
        }
      },
      {
        id: 'c9-6-mediadora',
        text: 'Propor a criação do Comitê de Diversidade e Direitos Humanos dos Estudantes na escola.',
        simplifiedText: 'Criar um grêmio estudantil de direitos humanos para combater todo tipo de preconceito.',
        type: 'mediator',
        icon: '🏛️',
        points: 65,
        consequence: {
          title: 'Fortalecimento Institucional dos Direitos Humanos',
          description: 'O comitê estudantil transformou a cultura da escola em um ambiente de tolerância e acolhimento exemplar.',
          simplifiedDescription: 'O comitê estudantil garantiu que todos fossem respeitados.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Grêmio Estudantil', avatar: '📢', text: 'Nossa escola é um território livre de qualquer preconceito!' }
          ],
          impact: { empathyChange: 65, trustChange: 55, schoolClimateChange: 50 },
          lesson: 'Espaços democráticos organizados asseguram a convivência pacífica e o respeito aos direitos de todos.',
          simplifiedLesson: 'Organizar espaços de respeito torna a escola um lugar seguro para todos.'
        }
      }
    ]
  },

  // 9.7
  {
    id: 'cenario-9-7',
    grade: '9',
    gradeLabel: '9º Ano',
    title: 'Invasão da Rede Escolar e Vazamento de Provas',
    category: 'Segurança e Senhas',
    difficulty: 'Avançado',
    platformType: 'discord',
    pedagogicalObjective: 'Compreender a ética hacker, a inviolabilidade de sistemas institucionais e o valor do mérito acadêmico.',
    context: 'Um aluno conseguiu a senha da rede interna da secretaria da escola e baixou o arquivo da prova final de Matemática, oferecendo o gabarito por R$ 50 para os colegas passarem de ano sem estudar.',
    simplifiedContext: 'Um aluno invadiu o sistema da escola, pegou a prova final e está vendendo o gabarito no Discord.',
    characters: [
      { name: 'Vendedor do Gabarito', role: 'Agresor(a)', avatar: '💻' },
      { name: 'Eduardo (Com dúvida se compra)', role: 'Vítima', avatar: '📚' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c9_7_leak',
        sender: 'Vendedor do Gabarito',
        avatar: '💻',
        isAggressor: true,
        text: 'PROVA FINAL DE MATEMÁTICA VAZADA! Quem quiser gabarito 100% garantido manda R$ 50 no Pix! Ninguém precisa reprovar de ano! 📝🔓',
        simplifiedText: 'Vendendo a prova final de matemática por R$ 50 no Pix.',
        time: '19:00'
      },
      {
        id: 'c9_7_edu',
        sender: 'Eduardo',
        avatar: '📚',
        isVictim: true,
        text: 'Mano, preciso de 6 pontos pra não reprovar o 9º ano... será que eu compro? Tô com tanto medo de não me formar com a turma...',
        simplifiedText: 'Preciso de nota pra me formar... será que compro o gabarito?',
        time: '19:03'
      }
    ],
    choices: [
      {
        id: 'c9-7-empatica',
        text: 'Apoiar Eduardo nos estudos e alertar sobre a gravidade do ato: "Eduardo, NÃO COMPRE! Invadir sistema e roubar provas é CRIME DE INVASÃO DE DISPOSITIVO INFORMÁTICO (Lei Carolina Dieckmann) e anula a formatura de quem usar! Você é capaz de aprender. Venha para a minha casa hoje, vamos virar a noite estudando juntos e você vai passar pelo seu próprio mérito e esforço!"',
        simplifiedText: 'Avisar que roubar provas é crime que anula o ano letivo, e se oferecer para estudar junto com o amigo para ele passar pelo próprio esforço.',
        type: 'empathetic',
        icon: '🤝',
        points: 70,
        consequence: {
          title: 'Ética, Estudo Cooperativo e Conquista Real',
          description: 'Eduardo estudou com você, compreendeu a matéria, tirou nota 8,5 na prova oficial e celebrou a formatura com a cabeça erguida.',
          simplifiedDescription: 'Vocês estudaram juntos e seu amigo passou de ano com orgulho e honestidade.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Eduardo', avatar: '📚', text: 'Você mudou minha vida! Passei na prova estudando de verdade! A sensação de dever cumprido é a melhor do mundo!' }
          ],
          impact: { empathyChange: 70, trustChange: 65, schoolClimateChange: 55 },
          lesson: 'O mérito alcançado pelo estudo sincero constrói autoconfiança real. Trapaças e fraudes anulam o valor do diploma e corroem a integridade.',
          simplifiedLesson: 'Conquistar seus objetivos pelo próprio esforço e estudo é o único caminho verdadeiro.'
        }
      },
      {
        id: 'c9-7-hostil',
        text: 'Comprar o gabarito e mandar no grupo geral para todos passarem sem estudar.',
        simplifiedText: 'Comprar e espalhar as respostas para a turma toda.',
        type: 'hostile',
        icon: '📋',
        points: -40,
        consequence: {
          title: 'Anulação Geral da Prova e Punições Severas',
          description: 'A escola identificou a fraude no sistema, cancelou a prova do 9º ano inteiro e todos os envolvidos receberam advertência grave no histórico escolar.',
          simplifiedDescription: 'A fraude foi descoberta e a prova de todos foi cancelada.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Diretoria de Ensino', avatar: '🏫', text: 'Fraudes acadêmicas mancham permanentemente o histórico escolar.' }
          ],
          impact: { empathyChange: -60, trustChange: -70, schoolClimateChange: -60 },
          lesson: 'Fraudar avaliações destrói a credibilidade da turma e anula o valor do aprendizado.',
          simplifiedLesson: 'Fraudar provas prejudica toda a escola e anula o aprendizado.'
        }
      },
      {
        id: 'c9-7-mediadora',
        text: 'Avisar a equipe de TI da escola para corrigir a vulnerabilidade de segurança do sistema.',
        simplifiedText: 'Avisar a escola para proteger o sistema contra invasões.',
        type: 'mediator',
        icon: '🔒',
        points: 60,
        consequence: {
          title: 'Segurança da Informação Restaurada',
          description: 'A escola atualizou os firewalls e reforçou as políticas de segurança digital.',
          simplifiedDescription: 'A escola corrigiu o sistema e ficou mais segura.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Equipe de TI da Escola', avatar: '💻', text: 'Obrigado por apontar a falha com ética e responsabilidade.' }
          ],
          impact: { empathyChange: 60, trustChange: 50, schoolClimateChange: 45 },
          lesson: 'A postura do hacker ético (White Hat) é reportar falhas para proteger os sistemas, nunca para se aproveitar delas.',
          simplifiedLesson: 'Reportar problemas de segurança ajuda a proteger os sistemas de todos.'
        }
      }
    ]
  },

  // 9.8
  {
    id: 'cenario-9-8',
    grade: '9',
    gradeLabel: '9º Ano',
    title: 'Linchamento Virtual de Professor em Rede Social',
    category: 'Hate em Redes Sociais',
    difficulty: 'Avançado',
    platformType: 'tiktok',
    pedagogicalObjective: 'Respeitar a autoridade e integridade profissional dos professores e canalizar divergências pela mediação formal.',
    context: 'Após tirar nota baixa em História por não ter entregue a pesquisa, um aluno gravou um vídeo no TikTok com mentiras graves acusando o professor de perseguição e xingando a integridade moral dele.',
    simplifiedContext: 'Um aluno tirou nota baixa e postou um vídeo com mentiras para difamar o professor de história.',
    characters: [
      { name: 'Prof. Marcos', role: 'Vítima', avatar: '👨🏻‍🏫' },
      { name: 'Aluno Revoltado', role: 'Agresor(a)', avatar: '📱' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c9_8_hateprof',
        sender: 'Aluno Revoltado',
        avatar: '📱',
        isAggressor: true,
        text: 'ESSE PROFESSOR É UM LIXO E PERSEGUE ALUNOS! Comentem no perfil dele xingando até ele ser demitido! O link tá na bio! 💣😡',
        simplifiedText: 'Vídeo difamando o professor e incitando a internet a atacá-lo.',
        time: '15:20'
      }
    ],
    choices: [
      {
        id: 'c9-8-empatica',
        text: 'Defender a verdade e a dignidade do professor: "Isso é uma injustiça inaceitável! O Professor Marcos é um dos educadores mais dedicados da escola. Você tirou nota baixa porque não entregou a pesquisa no prazo de 3 semanas. Linchar um profissional na internet por frustração pessoal é crime e desrespeito com a educação. Apague esse vídeo e resolva sua nota estudando para a recuperação!"',
        simplifiedText: 'Defender o professor, esclarecer que notas dependem de entregas e esforço, e repudiar o ataque virtual contra o educador.',
        type: 'empathetic',
        icon: '👨🏻‍🏫',
        points: 70,
        consequence: {
          title: 'Respeito ao Magistério e Ética Cidadã',
          description: 'A turma apoiou seu posicionamento, repudiou o ataque e o aluno reconheceu a mentira, apagando o vídeo e pedindo desculpas ao professor.',
          simplifiedDescription: 'Você defendeu o professor com a verdade e restaurou a justiça na turma.',
          victimEmotion: 'acolhido',
          chatFeedback: [
            { sender: 'Prof. Marcos', avatar: '👨🏻‍🏫', text: 'Muito obrigado por sua retidão moral. Saber que formamos estudantes com senso de justiça como você dá sentido a toda a minha carreira.' }
          ],
          impact: { empathyChange: 70, trustChange: 65, schoolClimateChange: 55 },
          lesson: 'Educadores dedicam suas vidas à formação humana. Desentendimentos pedagógicos se resolvem pelo diálogo e pela recuperação, nunca por difamações na rede.',
          simplifiedLesson: 'Respeite sempre os professores. Conflitos de notas se resolvem estudando e conversando com respeito.'
        }
      },
      {
        id: 'c9-8-hostil',
        text: 'Ir no perfil do professor deixar comentários de ódio para ajudar o colega a pressionar por nota.',
        simplifiedText: 'Ajudar a xingar o professor nas redes sociais.',
        type: 'hostile',
        icon: '💥',
        points: -40,
        consequence: {
          title: 'Assédio Moral e Processo Judicial',
          description: 'O professor entrou em licença médica por estresse grave e abriu queixa-crime por calúnia e difamação contra os autores.',
          simplifiedDescription: 'O professor adoeceu de tristeza e os agressores foram processados.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Prof. Marcos', avatar: '👨🏻‍🏫', text: 'Dediquei 20 anos a ensinar... isso quebrou meu coração.' }
          ],
          impact: { empathyChange: -60, trustChange: -70, schoolClimateChange: -60 },
          lesson: 'Atacar a honra de profissionais da educação destrói a saúde mental de quem dedica a vida ao ensino.',
          simplifiedLesson: 'Nunca ataque ou ofenda professores na internet.'
        }
      },
      {
        id: 'c9-8-mediadora',
        text: 'Ajudar a agendar um plantão de dúvidas entre o aluno e o professor para revisar o trabalho com serenidade.',
        simplifiedText: 'Ajudar o colega a conversar com o professor para tirar dúvidas e refazer a lição.',
        type: 'mediator',
        icon: '📚',
        points: 60,
        consequence: {
          title: 'Mediação Pedagógica Produtiva',
          description: 'O professor explicou os critérios, deu uma oportunidade de recuperação e o aluno aprendeu o conteúdo.',
          simplifiedDescription: 'A conversa calma permitiu a recuperação da nota e o aprendizado.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Prof. Marcos', avatar: '👨🏻‍🏫', text: 'O diálogo e o estudo sempre vencem o confronto.' }
          ],
          impact: { empathyChange: 60, trustChange: 50, schoolClimateChange: 50 },
          lesson: 'O diálogo respeitoso transforma conflitos escolares em oportunidades de evolução pessoal.',
          simplifiedLesson: 'Conversar com calma resolve os problemas escolares da melhor forma.'
        }
      }
    ]
  },

  // 9.9
  {
    id: 'cenario-9-9',
    grade: '9',
    gradeLabel: '9º Ano',
    title: 'Roubo de Identidade e Contas Digitais Fraudulentas',
    category: 'Segurança e Senhas',
    difficulty: 'Avançado',
    platformType: 'whatsapp',
    pedagogicalObjective: 'Proteger dados cadastrais de menores e prevenir fraudes financeiras e abertura indevida de contas bancárias.',
    context: 'Larissa descobriu que alguém usou a foto do seu documento postada em uma publicação temporária antiga para abrir uma conta bancária digital e movimentar dinheiro de golpes do Pix.',
    simplifiedContext: 'Criminosos usaram a foto de um documento que Larissa postou na internet para abrir uma conta de banco falsa.',
    characters: [
      { name: 'Larissa', role: 'Vítima', avatar: '💳' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c9_9_bank',
        sender: 'Larissa',
        avatar: '💳',
        isVictim: true,
        text: 'Gente socorro! Chegou uma notificação do Banco Central no nome da minha mãe dizendo que tem uma conta digital com meu CPF movimentando R$ 10.000 de golpes! Eu nunca abri conta em banco nenhum! 😭😭',
        simplifiedText: 'Abriram uma conta digital com meu CPF e estão aplicando golpes no meu nome! Socorro!',
        time: '18:30'
      }
    ],
    choices: [
      {
        id: 'c9-9-empatica',
        text: 'Apoiar Larissa com passos técnicos de segurança: "Larissa, fique calma, nós vamos resolver! 1º: Acesse o sistema Registrato do Banco Central para ver todas as contas abertas no seu CPF; 2º: Façam um Boletim de Ocorrência por Fraude/Falsa Identidade imediatamente; 3º: Notifiquem o banco digital para congelar e encerrar a conta fraudulenta. Isso prova que você é vítima de clonagem e te isenta de qualquer culpa!"',
        simplifiedText: 'Ajudar a checar as contas no Registrato do Banco Central, registrar Boletim de Ocorrência e notificar o banco para cancelar a fraude.',
        type: 'empathetic',
        icon: '🛡️',
        points: 70,
        consequence: {
          title: 'Blindagem Jurídica e Proteção Documental',
          description: 'Com o boletim de ocorrência e o alerta ao Banco Central, a conta foi cancelada e Larissa foi totalmente protegida de processos indevidos.',
          simplifiedDescription: 'Você orientou sua amiga com passos precisos e a livrou de problemas judiciais graves.',
          victimEmotion: 'aliviado',
          chatFeedback: [
            { sender: 'Larissa', avatar: '💳', text: 'Os passos do Registrato e o B.O. salvaram minha vida! O banco encerrou a conta falsa na hora. Muito obrigada pelo suporte!' }
          ],
          impact: { empathyChange: 70, trustChange: 65, schoolClimateChange: 55 },
          lesson: 'Nunca poste fotos de RG, CPF, cartões de vacina ou comprovantes de residência. O roubo de identidade é prevenido com sigilo absoluto dos seus documentos.',
          simplifiedLesson: 'Nunca poste fotos dos seus documentos na internet. Cuide do seu CPF com sigilo total.'
        }
      },
      {
        id: 'c9-9-passiva',
        text: 'Dizer que não entende de banco e que ela deve ignorar a notificação.',
        simplifiedText: 'Dizer para ela não se preocupar e ignorar o aviso.',
        type: 'passive',
        icon: '🤷‍♀️',
        points: -20,
        consequence: {
          title: 'Responsabilização Indevida',
          description: 'A falta de providências fez o nome da família ser negativado e bloqueado pela justiça.',
          simplifiedDescription: 'Ignorar a fraude causou bloqueio de bens da família.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Larissa', avatar: '💳', text: 'Bloquearam as contas da minha mãe... devíamos ter agido rápido...' }
          ],
          impact: { empathyChange: -40, trustChange: -50, schoolClimateChange: -40 },
          lesson: 'Fraudes cadastrais devem ser contestadas e registradas imediatamente para resguardar a inocência da vítima.',
          simplifiedLesson: 'Nunca ignore avisos de fraudes com seus documentos.'
        }
      },
      {
        id: 'c9-9-mediadora',
        text: 'Organizar uma oficina de conscientização na escola sobre a Lei Geral de Proteção de Dados (LGPD) e segurança documental.',
        simplifiedText: 'Realizar uma apresentação na escola sobre como proteger dados e documentos pessoais.',
        type: 'mediator',
        icon: '📄',
        points: 60,
        consequence: {
          title: 'Educação em Privacidade e LGPD',
          description: 'Os alunos aprenderam a proteger seus dados biométricos e documentais.',
          simplifiedDescription: 'A turma inteira aprendeu a cuidar dos seus documentos.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Larissa', avatar: '💳', text: 'Essa oficina ensinou todo mundo a nunca mais postar documentos!' }
          ],
          impact: { empathyChange: 60, trustChange: 50, schoolClimateChange: 45 },
          lesson: 'A privacidade de dados pessoais é um direito fundamental garantido pela Constituição.',
          simplifiedLesson: 'Cuidar dos seus dados pessoais é um direito e um dever de segurança.'
        }
      }
    ]
  },

  // 9.10
  {
    id: 'cenario-9-10',
    grade: '9',
    gradeLabel: '9º Ano',
    title: 'A Pegada Digital e o Futuro que Começa Agora',
    category: 'Cidadania Digital e Pegada Digital',
    difficulty: 'Avançado',
    platformType: 'schoolpage',
    pedagogicalObjective: 'Refletir sobre a construção da reputação digital (Digital Footprint), legado ético e transição para o Ensino Médio.',
    context: 'Na véspera da formatura do 9º ano, a turma realizou um projeto final de reflexão sobre como tudo o que publicamos hoje permanece registrado e constrói nossa história e nosso futuro.',
    simplifiedContext: 'No encerramento do 9º ano, a turma reflete sobre como a internet guarda tudo o que fazemos e a importância da ética digital.',
    characters: [
      { name: 'Turma do 9º Ano', role: 'Colega', avatar: '🎓' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c9_10_final',
        sender: 'Turma do 9º Ano',
        avatar: '🎓',
        text: 'Galera, estamos nos formando no Fundamental II! Que legado queremos deixar na internet e na história da nossa escola? 🌟✨',
        simplifiedText: 'Estamos nos formando! Que legado de respeito e amizade queremos deixar na internet?',
        time: '11:00'
      }
    ],
    choices: [
      {
        id: 'c9-10-empatica',
        text: 'Sintetizar o compromisso ético de cidadania digital: "O maior legado que podemos construir é usar a tecnologia para conectar pessoas com empatia, proteger quem é vulnerável, combater mentiras com a verdade e nunca usar as redes como armas de ódio. Que a nossa pegada digital seja de respeito, gentileza e justiça, abrindo portas para um futuro brilhante no Ensino Médio e na vida!"',
        simplifiedText: 'Comprometer-se a usar a internet sempre para o bem, com respeito, empatia, proteção aos colegas e verdade.',
        type: 'empathetic',
        icon: '🌟',
        points: 80,
        consequence: {
          title: 'Cidadania Digital Plena e Formatura com Honra',
          description: 'A turma assinou o Manifesto de Ética Digital do 9º Ano, aplaudida de pé por professores, pais e colegas de todas as séries.',
          simplifiedDescription: 'Você e seus colegas concluíram o Ensino Fundamental como verdadeiros guardiões da empatia e da cidadania digital!',
          victimEmotion: 'acolhido',
          chatFeedback: [
            { sender: 'Professores e Colegas', avatar: '🎓', text: 'Parabéns por concluírem essa jornada com honra, empatia e compromisso ético! O mundo precisa de jovens como vocês!' }
          ],
          impact: { empathyChange: 80, trustChange: 80, schoolClimateChange: 70 },
          lesson: 'A pegada digital é o rastro da sua humanidade na história. Escolher a empatia e a ética todos os dias constrói um mundo melhor para todos.',
          simplifiedLesson: 'Use sempre a tecnologia com amor, respeito e sabedoria. Você é o futuro da internet!'
        }
      },
      {
        id: 'c9-10-mediadora',
        text: 'Criar uma cápsula do tempo digital com conselhos de empatia para os alunos que vão entrar no 5º ano no próximo ano.',
        simplifiedText: 'Deixar mensagens de carinho e conselhos de segurança digital para as turmas mais novas da escola.',
        type: 'mediator',
        icon: '🎁',
        points: 70,
        consequence: {
          title: 'Legado entre Gerações',
          description: 'A cápsula do tempo foi guardada pela escola e será aberta a cada início de ano para acolher os novos estudantes.',
          simplifiedDescription: 'Seus conselhos vão proteger e inspirar as próximas gerações de alunos da escola.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Alunos do 5º Ano', avatar: '🌱', text: 'Obrigado pelos conselhos de ouro dos veteranos!' }
          ],
          impact: { empathyChange: 70, trustChange: 65, schoolClimateChange: 60 },
          lesson: 'Transmitir sabedoria e acolhimento para os mais jovens é a maior demonstração de maturidade.',
          simplifiedLesson: 'Ajudar os mais novos a crescerem com segurança é um ato lindo de generosidade.'
        }
      },
      {
        id: 'c9-10-passiva',
        text: 'Apenas sair do grupo da escola sem dizer nada.',
        simplifiedText: 'Apenas sair do grupo sem participar.',
        type: 'passive',
        icon: '🚪',
        points: 0,
        consequence: {
          title: 'Despedida Sem Memórias',
          description: 'Você se formou, mas perdeu a oportunidade de celebrar e marcar sua história de forma positiva.',
          simplifiedDescription: 'O ciclo terminou sem uma celebração compartilhada.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Colegas', avatar: '🎓', text: 'Sentimos sua falta na celebração...' }
          ],
          impact: { empathyChange: 0, trustChange: 0, schoolClimateChange: 0 },
          lesson: 'Celebrar conquistas e firmar compromissos éticos marca momentos inesquecíveis da vida.',
          simplifiedLesson: 'Participar e celebrar com os amigos faz a vida ter mais sentido.'
        }
      }
    ]
  }
];
