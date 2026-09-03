import { Scenario } from '../../types';
import grade7SportsImg from '../../assets/images/grade7_sports_video_1787759880327.jpg';
import gamingMatchImg from '../../assets/images/school_gaming_match_1787756994296.jpg';

export const grade7Scenarios: Scenario[] = [
  // 7.1
  {
    id: 'cenario-7-1',
    grade: '7',
    gradeLabel: '7º Ano',
    title: 'O Lance Perdido no Torneio da Escola',
    category: 'Ataques em Redes Sociais',
    difficulty: 'Intermediário',
    platformType: 'tiktok',
    pedagogicalObjective: 'Combater a cultura do linchamento virtual após erros em atividades esportivas e coletivas.',
    context: 'Na final do torneio de futsal do 7º ano, Gabriel chutou o pênalti decisivo para fora. Gravaram o momento em câmera lenta com música triste e o vídeo atingiu 2.000 visualizações com comentários ofensivos.',
    simplifiedContext: 'Gravaram o erro de Gabriel no pênalti, publicaram com música triste e encheram de ofensas.',
    characters: [
      { name: 'Gabriel', role: 'Vítima', avatar: '⚽' },
      { name: 'Matheus', role: 'Agresor(a)', avatar: '📹' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c7_1_video',
        sender: 'Matheus_Futsal',
        avatar: '📹',
        isAggressor: true,
        text: 'O INIMIGO DO GOL KKKKK Perdeu o título sozinho! Comentem aqui a nota pro perna de pau 👇👇',
        simplifiedText: 'Olha quem perdeu o jogo sozinho! Comentem zombando dele!',
        time: '17:20',
        attachment: {
          type: 'post',
          imageUrl: grade7SportsImg,
          content: 'Vídeo do chute para fora em câmera lenta',
          likes: 243,
          comments: 48,
          caption: 'O pior chute da história do 7º ano'
        },
        reactions: [{ emoji: '😭', count: 12 }, { emoji: '🤡', count: 18 }]
      },
      {
        id: 'c7_1_biel',
        sender: 'Gabriel',
        avatar: '⚽',
        isVictim: true,
        text: 'Gente, eu já estava me sentindo mal por ter errado... agora até gente de outras escolas tá me xingando nos comentários...',
        simplifiedText: 'Já estava triste por errar... agora todo mundo tá me xingando.',
        time: '17:25'
      }
    ],
    choices: [
      {
        id: 'c7-1-empatica',
        text: 'Comentar no vídeo em defesa de Gabriel: "Gente, o Gabriel jogou com muita garra o campeonato inteiro e colocou o time na final! O esporte é feito de acertos e erros, e ninguém ganha ou perde sozinho. Menos ofensas e mais respeito pelo nosso atleta!"',
        simplifiedText: 'Defender o colega no vídeo, elogiando sua dedicação no campeonato e lembrando que erros acontecem.',
        type: 'empathetic',
        icon: '🛡️',
        points: 60,
        consequence: {
          title: 'Jogo Limpo e Apoio ao Companheiro',
          description: 'Seu comentário virou o mais curtido da publicação, outros colegas passaram a defender Gabriel e Matheus apagou a publicação por vergonha.',
          simplifiedDescription: 'Você transformou o clima de deboche em apoio e respeito ao colega.',
          victimEmotion: 'acolhido',
          chatFeedback: [
            { sender: 'Gabriel', avatar: '⚽', text: 'Muito obrigado, de verdade! Seu comentário me deu forças pra levantar a cabeça.' }
          ],
          impact: { empathyChange: 60, trustChange: 55, schoolClimateChange: 45 },
          lesson: 'No esporte e na vida, errar faz parte do aprendizado. A verdadeira nobreza está em apoiar quem tropeçou.',
          simplifiedLesson: 'Apoiar quem errou mostra verdadeiro espírito de equipe e amizade.'
        }
      },
      {
        id: 'c7-1-hostil',
        text: 'Comentar: "Jogou mal demais, devia ser expulso do time mesmo!" para ganhar curtidas dos rivais.',
        simplifiedText: 'Comentar xingando o colega para ganhar curtidas.',
        type: 'hostile',
        icon: '👎',
        points: -35,
        consequence: {
          title: 'Aprofundamento da Dor',
          description: 'Gabriel teve uma crise de choro, desistiu dos treinos e não quis mais frequentar a escolinha de futebol.',
          simplifiedDescription: 'O colega desistiu do esporte por causa dos ataques virtuais.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Gabriel', avatar: '⚽', text: 'Nunca mais jogo futebol...' }
          ],
          impact: { empathyChange: -55, trustChange: -60, schoolClimateChange: -50 },
          lesson: 'Comentários maldosos na internet destroem a autoestima e os sonhos das pessoas.',
          simplifiedLesson: 'Palavras cruéis podem destruir a vontade de uma pessoa de tentar de novo.'
        }
      },
      {
        id: 'c7-1-mediadora',
        text: 'Gravar um vídeo curto mostrando os melhores gols que o Gabriel fez durante o campeonato e publicar marcando o time.',
        simplifiedText: 'Publicar um vídeo com os gols bonitos que ele fez durante os jogos.',
        type: 'mediator',
        icon: '🎬',
        points: 55,
        consequence: {
          title: 'Reconhecimento e Valorização',
          description: 'O vídeo de homenagem repercutiu positivamente e resgatou a confiança de Gabriel.',
          simplifiedDescription: 'A homenagem devolveu a alegria e a confiança ao colega.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Gabriel', avatar: '⚽', text: 'Nossa, que vídeo incrível! Valeu de coração!' }
          ],
          impact: { empathyChange: 55, trustChange: 45, schoolClimateChange: 45 },
          lesson: 'Usar as redes para destacar o lado positivo das pessoas gera uma corrente de empatia.',
          simplifiedLesson: 'Exaltar as qualidades dos outros melhora o ambiente de todos.'
        }
      }
    ]
  },

  // 7.2
  {
    id: 'cenario-7-2',
    grade: '7',
    gradeLabel: '7º Ano',
    title: 'Hostilidade e Ofensas na Equipe de Jogos',
    category: 'Jogos Online Tóxicos',
    difficulty: 'Intermediário',
    platformType: 'discord',
    pedagogicalObjective: 'Combater ofensas, gritos e comportamentos agressivos em partidas competitivas pela internet.',
    context: 'Durante uma partida de classificação, o líder da equipe começou a gritar e ofender a família de Lucas porque ele não conseguiu dar cobertura no momento final do jogo.',
    simplifiedContext: 'O líder da equipe começou a gritar ofensas pesadas no microfone porque o colega cometeu um erro no jogo.',
    characters: [
      { name: 'Lucas', role: 'Vítima', avatar: '🎮' },
      { name: 'Líder da Equipe', role: 'Agresor(a)', avatar: '🤬' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c7_2_match',
        sender: 'Líder da Equipe',
        avatar: '🤬',
        isAggressor: true,
        text: 'SEU INÚTIL! DESINSTALA ESSE JOGO! POR SUA CULPA PERDEMOS NOSSA PONTUAÇÃO! NUNCA MAIS JOGA COMIGO!',
        simplifiedText: 'Gritando ofensas no microfone por causa de um erro no jogo.',
        time: '21:10',
        attachment: {
          type: 'image',
          imageUrl: gamingMatchImg,
          content: 'Tela de derrota na partida de classificação',
          caption: 'Partida competitiva de 7º ano'
        }
      },
      {
        id: 'c7_2_lucas',
        sender: 'Lucas',
        avatar: '🎮',
        isVictim: true,
        text: 'Desculpa gente... meu controle travou na hora... não precisa me xingar desse jeito...',
        simplifiedText: 'Meu controle travou, não precisava falar comigo desse jeito...',
        time: '21:11'
      }
    ],
    choices: [
      {
        id: 'c7-2-empatica',
        text: 'Desafiar a agressividade na chamada: "Ei, abaixa o tom! É só uma partida de videogame e nada justifica xingar um amigo. Lucas jogou muito bem o jogo todo. Se a equipe for para agir com essa agressividade, eu não jogo mais aqui."',
        simplifiedText: 'Exigir respeito na chamada, defender o colega e lembrar que videogame é diversão, não motivo para ofensas.',
        type: 'empathetic',
        icon: '🛡️',
        points: 60,
        consequence: {
          title: 'Liderança Ética nos Jogos',
          description: 'Sua atitude encorajou os outros membros a se posicionarem contra a agressividade. O líder se desculpou pelo destempero.',
          simplifiedDescription: 'Você colocou limites na agressividade e protegeu seu amigo.',
          victimEmotion: 'acolhido',
          chatFeedback: [
            { sender: 'Lucas', avatar: '🎮', text: 'Valeu demais mano... eu estava tremendo de nervoso com os gritos dele.' }
          ],
          impact: { empathyChange: 60, trustChange: 50, schoolClimateChange: 45 },
          lesson: 'Nenhuma classificação ou troféu virtual vale mais do que a saúde mental e o respeito às pessoas.',
          simplifiedLesson: 'Jogos são para se divertir. Nunca aceite desrespeito ou agressões virtuais.'
        }
      },
      {
        id: 'c7-2-hostil',
        text: 'Concordar com o líder e xingar Lucas também para não ser expulso da equipe.',
        simplifiedText: 'Xingar o colega também para agradar o líder do grupo.',
        type: 'hostile',
        icon: '😡',
        points: -35,
        consequence: {
          title: 'Cumplicidade com a Hostilidade',
          description: 'Lucas saiu do grupo profundamente magoado e o ambiente da equipe se tornou insuportável.',
          simplifiedDescription: 'O grupo virou um ambiente agressivo e sem amigos de verdade.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Lucas', avatar: '🎮', text: 'Pensei que éramos amigos fora do jogo...' }
          ],
          impact: { empathyChange: -55, trustChange: -60, schoolClimateChange: -45 },
          lesson: 'Ceder à pressão de líderes agressivos transforma você em cúmplice de humilhações.',
          simplifiedLesson: 'Nunca apoie quem grita ou humilha os outros.'
        }
      },
      {
        id: 'c7-2-mediadora',
        text: 'Propor criar um novo grupo focado em jogar de forma descontraída, colaborativa e sem cobranças exageradas.',
        simplifiedText: 'Criar um grupo focado em amizade, diversão e respeito mútuo.',
        type: 'mediator',
        icon: '🌟',
        points: 55,
        consequence: {
          title: 'Criação de Espaço Seguro',
          description: 'O novo grupo reuniu alunos que queriam apenas se divertir em equipe com respeito.',
          simplifiedDescription: 'O novo grupo de jogos se tornou um sucesso de amizade.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Lucas', avatar: '🎮', text: 'Agora sim dá gosto de jogar! Obrigado!' }
          ],
          impact: { empathyChange: 55, trustChange: 45, schoolClimateChange: 40 },
          lesson: 'Construir ambientes saudáveis é a melhor resposta contra comunidades agressivas.',
          simplifiedLesson: 'Jogar com amigos que te respeitam é a melhor experiência.'
        }
      }
    ]
  },

  // 7.3
  {
    id: 'cenario-7-3',
    grade: '7',
    gradeLabel: '7º Ano',
    title: 'A Exposição de Mensagens Privadas no Grupo',
    category: 'Privacidade e Segredos',
    difficulty: 'Intermediário',
    platformType: 'whatsapp',
    pedagogicalObjective: 'Compreender a gravidade de expor conversas íntimas após o término de relacionamentos ou amizades.',
    context: 'Após terminar um namoro de duas semanas, Gustavo mandou no grupo da sala fotos e capturas de tela das mensagens carinhosas e declarações que Natália havia lhe enviado em particular.',
    simplifiedContext: 'Gustavo publicou capturas de tela de conversas íntimas e carinhosas da ex-namorada no grupo para rir dela.',
    characters: [
      { name: 'Natália', role: 'Vítima', avatar: '👧🏻' },
      { name: 'Gustavo', role: 'Agresor(a)', avatar: '📱' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c7_3_exposed',
        sender: 'Gustavo',
        avatar: '📱',
        isAggressor: true,
        text: 'Vejam o que a Natália me mandava kkkk que vergonha alheia! Olhem as mensagens particulares:',
        simplifiedText: 'Olhem as mensagens que a Natália me mandava kkkk',
        time: '19:00',
        reactions: [{ emoji: '👀', count: 5 }, { emoji: '😂', count: 7 }]
      },
      {
        id: 'c7_3_nat',
        sender: 'Natália',
        avatar: '👧🏻',
        isVictim: true,
        text: 'Gustavo, eu confiei em você... isso era uma conversa PRIVADA entre nós dois! Como você pôde fazer isso comigo? 😭💔',
        simplifiedText: 'Isso era uma conversa particular... como você pôde expor meus sentimentos?',
        time: '19:03'
      }
    ],
    choices: [
      {
        id: 'c7-3-empatica',
        text: 'Interromper o vazamento com seriedade: "Gustavo, apague essas fotos da conversa agora! Expor mensagens particulares de alguém que confiou em você é covardia e desrespeito. Ninguém tem o direito de expor a intimidade alheia."',
        simplifiedText: 'Exigir que ele apague as capturas de tela e lembrar que vazar conversas particulares é covardia e errado.',
        type: 'empathetic',
        icon: '🛑',
        points: 65,
        consequence: {
          title: 'Proteção da Dignidade e Intimidade',
          description: 'A atitude fez outros colegas apoiarem Natália. Gustavo apagou as mensagens e a turma repudiou o vazamento.',
          simplifiedDescription: 'Você protegeu a dignidade da colega e impediu que as mensagens íntimas se espalhassem.',
          victimEmotion: 'acolhida',
          chatFeedback: [
            { sender: 'Natália', avatar: '👧🏻', text: 'Obrigada por se importar comigo quando todos estavam rindo...' }
          ],
          impact: { empathyChange: 65, trustChange: 55, schoolClimateChange: 45 },
          lesson: 'O Marco Civil da Internet e a lei protegem o sigilo das comunicações privadas. Vazar conversas íntimas é violação de privacidade.',
          simplifiedLesson: 'Nunca exponha mensagens particulares de ninguém. Respeite os sentimentos das pessoas.'
        }
      },
      {
        id: 'c7-3-hostil',
        text: 'Encaminhar as capturas da conversa para outros grupos com legendas de deboche.',
        simplifiedText: 'Encaminhar as mensagens para outros grupos para rir mais.',
        type: 'hostile',
        icon: '🤡',
        points: -40,
        consequence: {
          title: 'Trauma Emocional Severo',
          description: 'Natália entrou em crise de ansiedade e os pais precisaram transferi-la de escola.',
          simplifiedDescription: 'A colega sofreu tanto com a vergonha que precisou mudar de escola.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Natália', avatar: '👧🏻', text: 'Eu nunca mais vou confiar em ninguém na minha vida.' }
          ],
          impact: { empathyChange: -65, trustChange: -70, schoolClimateChange: -60 },
          lesson: 'Exposições de intimidade causam cicatrizes emocionais gravíssimas e podem ser enquadradas criminalmente.',
          simplifiedLesson: 'Espalhar segredos íntimos destrói a vida de uma pessoa.'
        }
      },
      {
        id: 'c7-3-mediadora',
        text: 'Ajudar Natália a buscar o apoio da coordenação escolar e denunciar a quebra de privacidade aos responsáveis.',
        simplifiedText: 'Ajudar a colega a conversar com a escola para tomar as medidas cabíveis.',
        type: 'mediator',
        icon: '🏫',
        points: 55,
        consequence: {
          title: 'Ação Institucional Restaurativa',
          description: 'A coordenação realizou uma mediação educativa com os pais de ambos os alunos.',
          simplifiedDescription: 'A escola orientou as famílias e conteve o conflito com seriedade.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Natália', avatar: '👧🏻', text: 'A escola interveio e me protegeu. Obrigada por me acompanhar.' }
          ],
          impact: { empathyChange: 55, trustChange: 45, schoolClimateChange: 40 },
          lesson: 'Buscar auxílio da equipe pedagógica traz amparo legal e psicológico para a vítima.',
          simplifiedLesson: 'Pedir ajuda aos educadores protege seus direitos e sua integridade.'
        }
      }
    ]
  },

  // 7.4
  {
    id: 'cenario-7-4',
    grade: '7',
    gradeLabel: '7º Ano',
    title: 'Golpe de Sorteio Falso de Celular no Instagram',
    category: 'Golpes e Phishing',
    difficulty: 'Intermediário',
    platformType: 'instagram',
    pedagogicalObjective: 'Identificar técnicas de persuasão maldosa, contas falsas e links fraudulentos em redes sociais.',
    context: 'Uma conta falsa com a foto de uma pessoa famosa mandou mensagem privada para Camila dizendo que ela foi "a ganhadora secreta de um celular de última geração", pedindo que ela pagasse apenas o "frete de R$ 50 via transferência eletrônica".',
    simplifiedContext: 'Uma conta falsa disse que Camila ganhou um celular caro e pediu R$ 50 para pagar o frete.',
    characters: [
      { name: 'Camila', role: 'Vítima', avatar: '📱' },
      { name: 'Perfil Falso de Sorteios', role: 'Agresor(a)', avatar: '🎁' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c7_4_scam',
        sender: 'Sorteios_Oficiais_Premiados',
        avatar: '🎁',
        isAggressor: true,
        text: 'PARABÉNS CAMILA! Você ganhou um celular topo de linha novinho! Para receber em 24h, faça o pagamento do frete de R$ 49,90 na chave: sorteio-rapido@fraude.com',
        simplifiedText: 'Você ganhou um celular! Pague R$ 50 para receber!',
        time: '14:00'
      },
      {
        id: 'c7_4_cam',
        sender: 'Camila',
        avatar: '📱',
        isVictim: true,
        text: 'Gente, ganhei um celular da famosa!! Vou pedir o dinheiro do lanche emprestado pra minha avó pra fazer o pagamento agora!',
        simplifiedText: 'Acho que ganhei um celular de verdade! Vou fazer o pagamento agora!',
        time: '14:02'
      }
    ],
    choices: [
      {
        id: 'c7-4-empatica',
        text: 'Alertar Camila com dados claros: "Camila, SEGURA! É golpe clássico de fraude digital! Nenhum sorteio oficial cobra taxa ou frete para entregar prêmios. Olhe o perfil: tem poucos seguidores, foi criado ontem e o nome tem letras trocadas. Não transfira dinheiro e denuncie a conta!"',
        simplifiedText: 'Avisar que é um golpe falso, que sorteios reais não cobram pagamento e ajudá-la a não perder o dinheiro.',
        type: 'empathetic',
        icon: '🛡️',
        points: 60,
        consequence: {
          title: 'Proteção Financeira e Consciência',
          description: 'Camila checou o perfil, viu que era falso e evitou perder as economias da família.',
          simplifiedDescription: 'Você salvou sua amiga de cair em um golpe financeiro na internet.',
          victimEmotion: 'aliviado',
          chatFeedback: [
            { sender: 'Camila', avatar: '📱', text: 'Nossa, olhei aqui e a conta tem só 10 seguidores! Quase mandei o dinheiro da minha avó... Muito obrigada!!' }
          ],
          impact: { empathyChange: 60, trustChange: 55, schoolClimateChange: 45 },
          lesson: 'Sorteios que exigem pagamentos antecipados são fraudes. Sempre verifique a autenticidade e a data de criação das contas.',
          simplifiedLesson: 'Nunca pague taxas para receber prêmios na internet. É sempre golpe.'
        }
      },
      {
        id: 'c7-4-passiva',
        text: 'Achar que é mentira, mas não falar nada para ver se o celular chega mesmo.',
        simplifiedText: 'Ficar quieto e ver se o celular chega.',
        type: 'passive',
        icon: '😶',
        points: -10,
        consequence: {
          title: 'Golpe Concluído',
          description: 'Camila transferiu o dinheiro, foi bloqueada imediatamente e ficou no prejuízo sem o prêmio.',
          simplifiedDescription: 'A colega perdeu o dinheiro e ficou muito triste.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Camila', avatar: '📱', text: 'Transferi e me bloquearam... perdi meu dinheiro...' }
          ],
          impact: { empathyChange: -20, trustChange: -30, schoolClimateChange: -20 },
          lesson: 'Ajudar a desmascarar fraudes protege as economias e a tranquilidade dos nossos amigos.',
          simplifiedLesson: 'Avise seus amigos imediatamente quando desconfiar de uma mentira.'
        }
      },
      {
        id: 'c7-4-mediadora',
        text: 'Denunciar o perfil falso na central de segurança da rede social como "Golpe ou Fraude".',
        simplifiedText: 'Denunciar o perfil como golpe na rede social.',
        type: 'mediator',
        icon: '🚨',
        points: 55,
        consequence: {
          title: 'Derrubada do Golpe',
          description: 'A conta golpista foi desativada pela plataforma, impedindo que outras pessoas fossem prejudicadas.',
          simplifiedDescription: 'A conta do golpista foi removida da rede social.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Central de Segurança', avatar: '📱', text: 'Obrigado por ajudar a manter nossa comunidade segura.' }
          ],
          impact: { empathyChange: 55, trustChange: 45, schoolClimateChange: 40 },
          lesson: 'Denúncias precisas ajudam a remover fraudadores digitais de circulação.',
          simplifiedLesson: 'Denunciar perfis falsos protege milhares de usuários.'
        }
      }
    ]
  },

  // 7.5
  {
    id: 'cenario-7-5',
    grade: '7',
    gradeLabel: '7º Ano',
    title: 'Superexposição da Rotina e Perfis Abertos',
    category: 'Perigos e Estranhos na Rede',
    difficulty: 'Intermediário',
    platformType: 'instagram',
    pedagogicalObjective: 'Conscientizar sobre os riscos de publicar localização em tempo real, uniformes e rotinas diárias.',
    context: 'Vinícius deixou seu perfil na rede social 100% público e começou a publicar mensagens temporárias mostrando a fachada do seu prédio, o uniforme da escola e dizendo: "Meus pais viajaram, estou sozinho em casa a semana toda!".',
    simplifiedContext: 'Vinícius publicou no perfil público onde mora, o uniforme da escola e que está sozinho em casa.',
    characters: [
      { name: 'Vinícius', role: 'Vítima', avatar: '🏠' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c7_5_vini',
        sender: 'Vinícius',
        avatar: '🏠',
        text: 'Publicação temporária: "Casa livre a semana inteira galera! Rua das Flores nº 120, quem quiser vir aqui só mandar mensagem no privado!" 🍕🎉',
        simplifiedText: 'Publicou o endereço da casa dizendo que está sozinho sem os pais.',
        time: '18:30'
      }
    ],
    choices: [
      {
        id: 'c7-5-empatica',
        text: 'Ligar para Vinícius imediatamente e alertar com firmeza: "Vini, APAGA ESSA PUBLICAÇÃO AGORA! Seu perfil é público, qualquer desconhecido na cidade pode ver seu endereço e saber que você está sozinho em casa! Isso coloca sua segurança em risco real. Coloque seu perfil em modo privado e nunca divulgue sua rotina em tempo real!"',
        simplifiedText: 'Ligar na hora para ele apagar a publicação, privar o perfil e explicar o perigo de divulgar que está sozinho em casa.',
        type: 'empathetic',
        icon: '🔒',
        points: 65,
        consequence: {
          title: 'Proteção e Segurança Pessoal',
          description: 'Vinícius apagou a publicação imediatamente, fechou a conta para modo privado e agradeceu pelo alerta protetor.',
          simplifiedDescription: 'Você protegeu seu amigo de um perigo grave de segurança na vida real.',
          victimEmotion: 'aliviado',
          chatFeedback: [
            { sender: 'Vinícius', avatar: '🏠', text: 'Cara, você tem toda razão. Não tinha pensado no perigo de estranhos verem isso. Já apaguei e tranquei a conta!' }
          ],
          impact: { empathyChange: 65, trustChange: 60, schoolClimateChange: 50 },
          lesson: 'Nunca publique fotos de uniformes, rotinas diárias ou avisos de que está sozinho. A exposição excessiva atrai pessoas mal-intencionadas.',
          simplifiedLesson: 'Nunca publique onde você mora nem quando estiver sozinho em casa.'
        }
      },
      {
        id: 'c7-5-passiva',
        text: 'Achar perigoso, mas não falar nada para não parecer intrometido.',
        simplifiedText: 'Achar perigoso mas não avisar nada.',
        type: 'passive',
        icon: '🤐',
        points: -10,
        consequence: {
          title: 'Vulnerabilidade Real',
          description: 'Pessoas estranhas começaram a mandar mensagens suspeitas perguntando detalhes da rotina de Vinícius, deixando-o em pânico.',
          simplifiedDescription: 'Pessoas desconhecidas começaram a sondar a casa do colega.',
          victimEmotion: 'ansioso',
          chatFeedback: [
            { sender: 'Vinícius', avatar: '🏠', text: 'Tem gente estranha me mandando mensagem... estou com muito medo.' }
          ],
          impact: { empathyChange: -20, trustChange: -30, schoolClimateChange: -25 },
          lesson: 'Alertar sobre riscos de segurança não é intromissão, é um dever de cuidado e amizade.',
          simplifiedLesson: 'Avise sempre seus amigos quando vir um risco de segurança.'
        }
      },
      {
        id: 'c7-5-mediadora',
        text: 'Ensinar Vinícius a configurar as opções de privacidade (Amigos Próximos / Conta Privada) e desativar a localização automática.',
        simplifiedText: 'Ajudar o colega a configurar a privacidade da conta para modo seguro.',
        type: 'mediator',
        icon: '⚙️',
        points: 55,
        consequence: {
          title: 'Configuração Segura',
          description: 'Vinícius aprendeu a gerenciar suas redes sociais com responsabilidade e controle de público.',
          simplifiedDescription: 'O amigo aprendeu a proteger seus dados e fotos nas redes.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Vinícius', avatar: '🏠', text: 'Configurei tudo certinho agora. Obrigado pelas dicas de segurança!' }
          ],
          impact: { empathyChange: 55, trustChange: 45, schoolClimateChange: 40 },
          lesson: 'Dominar as ferramentas de privacidade garante uma experiência digital rica e segura.',
          simplifiedLesson: 'Configurar a privacidade mantém seus dados longe de estranhos.'
        }
      }
    ]
  },

  // 7.6
  {
    id: 'cenario-7-6',
    grade: '7',
    gradeLabel: '7º Ano',
    title: 'Compartilhamento de Vídeos de Brigas Escolares',
    category: 'Discurso de Ódio e Intolerância',
    difficulty: 'Intermediário',
    platformType: 'whatsapp',
    pedagogicalObjective: 'Desestimular a gravação e a circulação de agressões físicas entre estudantes.',
    context: 'Dois alunos se desentenderam na saída da escola e começaram a brigar. Vários estudantes formaram uma roda, gravaram vídeos em vez de buscar ajuda e jogaram nos grupos com legendas incentivando a violência.',
    simplifiedContext: 'Gravaram uma briga física de dois alunos na saída da escola e jogaram nos grupos para se espalhar.',
    characters: [
      { name: 'Aluno Ferido', role: 'Vítima', avatar: '🩹' },
      { name: 'Gravador da Briga', role: 'Agresor(a)', avatar: '📹' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c7_6_briga',
        sender: 'Gravador da Briga',
        avatar: '📹',
        isAggressor: true,
        text: 'BRIGA NA SAÍDA KKKKK Assistam até o final o tombo! Compartilhem aí! 🥊💥',
        simplifiedText: 'Olha o vídeo da briga na saída da escola! Repassem pra todo mundo!',
        time: '12:40',
        reactions: [{ emoji: '😱', count: 9 }, { emoji: '🥊', count: 6 }]
      }
    ],
    choices: [
      {
        id: 'c7-6-empatica',
        text: 'Repudiar o vídeo no grupo e agir para cessar o ciclo: "Galera, parem de compartilhar esse vídeo! Violência física não é entretenimento nem motivo de piada. Quem grava e incentiva briga é tão responsável quanto quem bate. Apaguem isso e vamos ajudar a mediar a paz entre eles."',
        simplifiedText: 'Pedir para pararem de compartilhar o vídeo, lembrar que violência não é entretenimento e incentivar a paz.',
        type: 'empathetic',
        icon: '🛑',
        points: 60,
        consequence: {
          title: 'Cultura de Não Violência e Paz',
          description: 'Sua mensagem fez a turma parar de encaminhar o arquivo. Os alunos envolvidos foram orientados e resolveram a questão pacificamente.',
          simplifiedDescription: 'Você impediu a circulação da violência e estimulou a paz na escola.',
          victimEmotion: 'acolhido',
          chatFeedback: [
            { sender: 'Aluno Ferido', avatar: '🩹', text: 'Obrigado por pedir pra apagarem o vídeo... já foi horrível ter passado por isso.' }
          ],
          impact: { empathyChange: 60, trustChange: 50, schoolClimateChange: 50 },
          lesson: 'Gravar ou compartilhar violência física gera humilhação pública e alimenta a agressividade. A atitude ética é buscar ajuda de adultos e acalmar os ânimos.',
          simplifiedLesson: 'Nunca grave nem compartilhe vídeos de brigas. Ajude a chamar um adulto para separar.'
        }
      },
      {
        id: 'c7-6-hostil',
        text: 'Publicar o vídeo no status do aplicativo para ganhar visualizações.',
        simplifiedText: 'Publicar a briga no status para ganhar visualizações.',
        type: 'hostile',
        icon: '📢',
        points: -35,
        consequence: {
          title: 'Humilhação e Repercussão Policial',
          description: 'O vídeo gerou novas ameaças entre grupos rivais e a direção precisou intervir na porta da escola.',
          simplifiedDescription: 'O vídeo causou mais brigas e problemas graves.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Diretoria Escolar', avatar: '🏫', text: 'Compartilhar vídeos de agressão é infração grave do regimento escolar.' }
          ],
          impact: { empathyChange: -55, trustChange: -60, schoolClimateChange: -60 },
          lesson: 'A espetacularização da violência multiplica o sofrimento e estimula novos confrontos.',
          simplifiedLesson: 'Divulgar brigas só piora a violência na escola.'
        }
      },
      {
        id: 'c7-6-mediadora',
        text: 'Avisar a equipe gestora da escola para que os envolvidos recebam apoio socioemocional.',
        simplifiedText: 'Avisar a coordenação da escola para acolher os alunos envolvidos.',
        type: 'mediator',
        icon: '🤝',
        points: 55,
        consequence: {
          title: 'Intervenção Educativa',
          description: 'A escola conduziu um círculo de construção de paz que evitou futuros conflitos.',
          simplifiedDescription: 'A escola ajudou os dois colegas a fazerem as pazes.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Coordenação Pedagógica', avatar: '🏫', text: 'Obrigado pela postura responsável.' }
          ],
          impact: { empathyChange: 55, trustChange: 45, schoolClimateChange: 45 },
          lesson: 'Resolver conflitos pela via do diálogo e do acolhimento é o caminho da maturidade.',
          simplifiedLesson: 'Conversar com a escola ajuda a resolver desentendimentos em paz.'
        }
      }
    ]
  },

  // 7.7
  {
    id: 'cenario-7-7',
    grade: '7',
    gradeLabel: '7º Ano',
    title: 'O Cancelamento Virtual por Gosto Musical Divergente',
    category: 'Cultura do Cancelamento',
    difficulty: 'Intermediário',
    platformType: 'instagram',
    pedagogicalObjective: 'Desenvolver a tolerância à diversidade de opiniões e combater a cultura do linchamento virtual.',
    context: 'Bruna comentou que não gostava da banda favorita da maioria da sala. Um grupo de alunos iniciou uma campanha de exclusão e perseguição, mandando mensagens em massa mandando ela calar a boca e a bloqueando.',
    simplifiedContext: 'Bruna disse que não gostava da banda famosa e a turma iniciou um linchamento virtual para excluí-la.',
    characters: [
      { name: 'Bruna', role: 'Vítima', avatar: '🎧' },
      { name: 'Líder do Clube de Fãs', role: 'Agresor(a)', avatar: '💥' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c7_7_cancel',
        sender: 'Líder do Clube de Fãs',
        avatar: '💥',
        isAggressor: true,
        text: 'MUTIRÃO PRA EXCLUIR A BRUNA! Ninguém mais fala com ela até ela pedir desculpas por falar mal da nossa banda favorita! #Cancelada',
        simplifiedText: 'Mutirão pra ninguém mais falar com a Bruna porque ela não gosta da nossa banda!',
        time: '16:00',
        reactions: [{ emoji: '🚫', count: 8 }]
      },
      {
        id: 'c7_7_bru',
        sender: 'Bruna',
        avatar: '🎧',
        isVictim: true,
        text: 'Gente... eu só dei minha opinião sobre música, não ofendi ninguém... por que vocês estão me excluindo assim?',
        simplifiedText: 'Eu só dei minha opinião sincera sobre música... por que estão me excluindo?',
        time: '16:03'
      }
    ],
    choices: [
      {
        id: 'c7-7-empatica',
        text: 'Posicionar-se contra a intolerância: "Galera, parem com essa infantilidade! Todo mundo tem o direito de gostar de músicas e coisas diferentes. A Bruna não desrespeitou ninguém. A perseguição virtual é uma forma covarde de censurar os outros. Respeitem a diversidade de gostos!"',
        simplifiedText: 'Defender que cada pessoa tem seus próprios gostos e que ninguém pode ser excluído por ter uma opinião diferente.',
        type: 'empathetic',
        icon: '🌈',
        points: 60,
        consequence: {
          title: 'Respeito à Pluralidade e Liberdade',
          description: 'A campanha de perseguição perdeu força e vários colegas concordaram que a diversidade de gostos é natural.',
          simplifiedDescription: 'Você defendeu o direito de cada um ter seus próprios gostos com respeito.',
          victimEmotion: 'acolhida',
          chatFeedback: [
            { sender: 'Bruna', avatar: '🎧', text: 'Muito obrigada! Eu estava me sentindo muito mal só por ter meu próprio gosto musical.' }
          ],
          impact: { empathyChange: 60, trustChange: 55, schoolClimateChange: 45 },
          lesson: 'A convivência democrática exige respeitar gostos e visões diferentes. Ninguém deve ser punido por sua individualidade.',
          simplifiedLesson: 'Ter gostos diferentes é normal. Respeitar as diferenças torna a convivência saudável.'
        }
      },
      {
        id: 'c7-7-hostil',
        text: 'Entrar no mutirão de ofensas e deixar de seguir a Bruna para agradar o grupo.',
        simplifiedText: 'Ajudar na perseguição para não ser excluído também.',
        type: 'hostile',
        icon: '🚫',
        points: -30,
        consequence: {
          title: 'Censura e Intolerância',
          description: 'Bruna passou a se calar sobre tudo o que pensava por medo de novos linchamentos.',
          simplifiedDescription: 'A colega ficou com medo de se expressar.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Bruna', avatar: '🎧', text: 'Não posso ser eu mesma aqui...' }
          ],
          impact: { empathyChange: -50, trustChange: -60, schoolClimateChange: -50 },
          lesson: 'O cancelamento virtual sufoca a espontaneidade e cria um ambiente de medo e falsidade.',
          simplifiedLesson: 'Excluir pessoas por opiniões simples cria um clima de medo na turma.'
        }
      },
      {
        id: 'c7-7-mediadora',
        text: 'Criar uma lista colaborativa de músicas onde cada aluno da sala adiciona 2 músicas que ama para todos conhecerem estilos novos.',
        simplifiedText: 'Criar uma lista de músicas onde todo mundo coloca as canções que mais gosta.',
        type: 'mediator',
        icon: '🎵',
        points: 55,
        consequence: {
          title: 'Celebração da Diversidade',
          description: 'A turma descobriu músicas incríveis de vários estilos e a discussão virou uma experiência de aprendizado cultural.',
          simplifiedDescription: 'Todo mundo se divertiu ouvindo as músicas favoritas dos colegas.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Bruna', avatar: '🎧', text: 'Adorei a lista de músicas! Descobri artistas novos muito legais!' }
          ],
          impact: { empathyChange: 55, trustChange: 45, schoolClimateChange: 40 },
          lesson: 'Transformar divergências em oportunidades de troca amplia nossos horizontes culturais.',
          simplifiedLesson: 'Conhecer gostos diferentes enriquece nossa cultura e amizade.'
        }
      }
    ]
  },

  // 7.8
  {
    id: 'cenario-7-8',
    grade: '7',
    gradeLabel: '7º Ano',
    title: 'Apostas Virtuais e a Falsa Promessa de Dinheiro Fácil',
    category: 'Apostas e Fraudes Digitais',
    difficulty: 'Intermediário',
    platformType: 'tiktok',
    pedagogicalObjective: 'Conscientizar sobre os perigos das apostas virtuais e cassinos na internet, vícios e ilegalidade para menores.',
    context: 'Diego viu um vídeo de um criador de conteúdo prometendo que ele podia "multiplicar a mesada de R$ 20 para R$ 500 em 5 minutos" em um site de apostas e queria usar o documento do pai escondido para se cadastrar.',
    simplifiedContext: 'Diego quer usar o documento do pai escondido para apostar dinheiro num site de apostas que promete lucro fácil.',
    characters: [
      { name: 'Diego', role: 'Vítima', avatar: '🎰' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c7_8_bet',
        sender: 'Diego',
        avatar: '🎰',
        text: 'Galera, achei a falha do joguinho da roleta! Coloquei R$ 20 e o criador do vídeo disse que devolve R$ 500 garantido! Peguei o documento do meu pai escondido pra criar a conta!',
        simplifiedText: 'Vou apostar a mesada com o documento do meu pai pra ganhar R$ 500 garantido!',
        time: '19:40'
      }
    ],
    choices: [
      {
        id: 'c7-8-empatica',
        text: 'Avisar Diego com clareza e responsabilidade: "Diego, NÃO FAÇA ISSO! Jogos de aposta são programados matematicamente para o participante SEMPRE PERDER o dinheiro. Esses vídeos são propagandas enganosas pagas para iludir pessoas. Usar documentos de terceiros é crime e apostas são estritamente proibidas para menores de idade. Você vai perder toda a sua mesada!"',
        simplifiedText: 'Explicar que jogos de aposta são programados para fazer perder dinheiro, que menores não podem apostar e evitar o prejuízo.',
        type: 'empathetic',
        icon: '🛑',
        points: 65,
        consequence: {
          title: 'Proteção Contra o Vício em Apostas',
          description: 'Diego cancelou a tentativa de cadastro, compreendeu a armadilha matemática dos cassinos e guardou sua mesada.',
          simplifiedDescription: 'Você salvou seu amigo de perder o dinheiro e entrar no mundo perigoso das apostas.',
          victimEmotion: 'aliviado',
          chatFeedback: [
            { sender: 'Diego', avatar: '🎰', text: 'Nossa mano, vi aqui que o site tem milhares de reclamações de gente que perdeu todo o salário... Valeu pelo choque de realidade!' }
          ],
          impact: { empathyChange: 65, trustChange: 55, schoolClimateChange: 45 },
          lesson: 'Apostas virtuais causam dependência grave e prejuízo financeiro. O único caminho seguro para conquistas é o estudo, o esforço e a paciência.',
          simplifiedLesson: 'Não existe dinheiro fácil na internet. Apostas são armadilhas perigosas.'
        }
      },
      {
        id: 'c7-8-hostil',
        text: 'Pedir para ele apostar R$ 50 para você também para ver se ganham juntos.',
        simplifiedText: 'Mandar dinheiro para ele apostar por você também.',
        type: 'hostile',
        icon: '💸',
        points: -30,
        consequence: {
          title: 'Perda Total e Consequências Graves',
          description: 'O site reteve o dinheiro e bloqueou o resgate. O pai de Diego descobriu o uso indevido do documento e houve uma crise familiar séria.',
          simplifiedDescription: 'O dinheiro foi perdido e os pais descobriram o uso indevido do documento.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Diego', avatar: '🎰', text: 'Perdi tudo e meu pai descobriu... estou de castigo até o fim do ano.' }
          ],
          impact: { empathyChange: -50, trustChange: -55, schoolClimateChange: -40 },
          lesson: 'Incentivar apostas coloca amigos em risco de endividamento e compulsão.',
          simplifiedLesson: 'Nunca aposte dinheiro nem incentive amigos a entrarem em jogos de azar.'
        }
      },
      {
        id: 'c7-8-mediadora',
        text: 'Pesquisar juntos sobre educação financeira e como os sistemas de cassino são desenhados para lucrar em cima dos usuários.',
        simplifiedText: 'Aprender sobre como os cassinos funcionam para entender por que ninguém ganha dinheiro fácil.',
        type: 'mediator',
        icon: '📊',
        points: 55,
        consequence: {
          title: 'Educação Financeira Crítica',
          description: 'Diego entendeu como funcionam as probabilidades matemáticas e decidiu investir em um curso de programação.',
          simplifiedDescription: 'O colega aprendeu a cuidar do dinheiro com inteligência.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Diego', avatar: '🎰', text: 'Aprender sobre probabilidades abriu meus olhos!' }
          ],
          impact: { empathyChange: 55, trustChange: 45, schoolClimateChange: 40 },
          lesson: 'A educação financeira desenvolve pensamento crítico contra promessas milagrosas.',
          simplifiedLesson: 'Saber cuidar do dinheiro protege contra golpes e promessas falsas.'
        }
      }
    ]
  },

  // 7.9
  {
    id: 'cenario-7-9',
    grade: '7',
    gradeLabel: '7º Ano',
    title: 'Desabafos e Sinais de Sofrimento na Rede',
    category: 'Saúde Mental e Autoimagem',
    difficulty: 'Avançado',
    platformType: 'instagram',
    pedagogicalObjective: 'Identificar sinais de sofrimento emocional, oferecer acolhimento ético e acionar suporte qualificado.',
    context: 'Às 23h, Lorena publicou nas histórias temporárias uma tela preta com a frase: "Não aguento mais ser um peso para todo mundo... acho que seria melhor se eu simplesmente desaparecesse."',
    simplifiedContext: 'Lorena publicou uma mensagem muito triste de madrugada dizendo que queria desaparecer.',
    characters: [
      { name: 'Lorena', role: 'Vítima', avatar: '🕯️' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c7_9_post',
        sender: 'Lorena',
        avatar: '🕯️',
        isVictim: true,
        text: 'Publicação: "Ninguém sentiria minha falta de verdade se eu não estivesse mais aqui..." 🖤',
        simplifiedText: 'Publicou que ninguém sentiria sua falta se ela sumisse.',
        time: '23:15'
      }
    ],
    choices: [
      {
        id: 'c7-9-empatica',
        text: 'Acolher imediatamente no privado com carinho e acionar a rede de apoio: "Lorena, estou aqui com você agora! Você é muito especial para mim e para toda a nossa turma. Sua vida tem um valor imenso. Não guarde essa dor sozinha. Por favor, me deixe conversar com você e vamos falar com seus pais ou com o Centro de Valorização da Vida (Ligue 188). Você não está sozinha!"',
        simplifiedText: 'Mandar mensagem com muito carinho, dizer que a vida dela é preciosa e ajudá-la a buscar apoio na família e no apoio especializado 188.',
        type: 'empathetic',
        icon: '💖',
        points: 70,
        consequence: {
          title: 'Apoio à Vida e Acolhimento Humano',
          description: 'Lorena desabafou com você, sentiu-se ouvida e aceitou conversar com a mãe na manhã seguinte. O apoio psicológico foi iniciado.',
          simplifiedDescription: 'Você acolheu sua amiga em um momento muito difícil e prestou apoio verdadeiro.',
          victimEmotion: 'acolhida',
          chatFeedback: [
            { sender: 'Lorena', avatar: '🕯️', text: 'Suas palavras me confortaram muito ontem à noite... Eu só precisava sentir que alguém se importava de verdade comigo. Muito obrigada.' }
          ],
          impact: { empathyChange: 70, trustChange: 65, schoolClimateChange: 55 },
          lesson: 'Sinais de sofrimento nunca devem ser ignorados ou tratados como exagero. Ouvir com empatia e buscar ajuda profissional salva vidas.',
          simplifiedLesson: 'Nunca ignore a tristeza de um amigo. Esteja por perto e ajude a buscar apoio.'
        }
      },
      {
        id: 'c7-9-hostil',
        text: 'Comentar na publicação: "Parem de fazer drama pra querer atenção!"',
        simplifiedText: 'Dizer que é exagero para chamar atenção.',
        type: 'hostile',
        icon: '💔',
        points: -50,
        consequence: {
          title: 'Insensibilidade e Risco Grave',
          description: 'O comentário cruel aprofundou o desespero de Lorena, colocando sua segurança em risco imediato.',
          simplifiedDescription: 'O desprezo aumentou muito a dor da colega.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Lorena', avatar: '🕯️', text: 'Eu realmente não deveria ter falado nada...' }
          ],
          impact: { empathyChange: -70, trustChange: -80, schoolClimateChange: -70 },
          lesson: 'Menosprezar a dor alheia é uma grave crueldade que pode ter consequências irreparáveis.',
          simplifiedLesson: 'A dor das pessoas nunca é brincadeira ou motivo de deboche. Respeite sempre.'
        }
      },
      {
        id: 'c7-9-mediadora',
        text: 'Informar com discrição e urgência a coordenação pedagógica da escola na manhã seguinte para suporte com a família.',
        simplifiedText: 'Avisar a escola com discrição para que os orientadores cuidem dela.',
        type: 'mediator',
        icon: '🛡️',
        points: 60,
        consequence: {
          title: 'Encaminhamento Cuidadoso',
          description: 'A equipe da escola acionou a família com acolhimento profissional e garantiu o suporte necessário.',
          simplifiedDescription: 'A escola ofereceu todo o suporte necessário com carinho.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Orientação Educacional', avatar: '🏫', text: 'Sua atitude atenta e cuidadosa fez toda a diferença.' }
          ],
          impact: { empathyChange: 60, trustChange: 50, schoolClimateChange: 50 },
          lesson: 'Acionar adultos capacitados é um ato de suprema responsabilidade e proteção.',
          simplifiedLesson: 'Avisar a escola ajuda quem precisa a receber os melhores cuidados.'
        }
      }
    ]
  },

  // 7.10
  {
    id: 'cenario-7-10',
    grade: '7',
    gradeLabel: '7º Ano',
    title: 'Discurso de Ódio e Preconceito Disfarçado de Piada',
    category: 'Discurso de Ódio e Intolerância',
    difficulty: 'Intermediário',
    platformType: 'discord',
    pedagogicalObjective: 'Combater o racismo, machismo, xenofobia e qualquer forma de preconceito disfarçado de "humor".',
    context: 'Um aluno mandou no grupo de jogos uma montagem com ofensas racistas contra o cabelo e a cor de pele de Tiago, dizendo que era apenas "humor ácido de internet".',
    simplifiedContext: 'Mandaram uma imagem racista zombando da cor de pele de Tiago e disseram que era só piada.',
    characters: [
      { name: 'Tiago', role: 'Vítima', avatar: '🧑🏾' },
      { name: 'Autor da Ofensa', role: 'Agresor(a)', avatar: '🤡' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c7_10_meme',
        sender: 'Autor da Ofensa',
        avatar: '🤡',
        isAggressor: true,
        text: 'Olha essa montagem do Tiago kkkk é só piada galera, não fiquem ofendidos à toa!',
        simplifiedText: 'Olha a piada com o Tiago, é só pra rir.',
        time: '17:50',
        reactions: [{ emoji: '😐', count: 2 }]
      },
      {
        id: 'c7_10_tiago',
        sender: 'Tiago',
        avatar: '🧑🏾',
        isVictim: true,
        text: 'Racismo não é piada nem humor... Meu cabelo e minha cor de pele são minha identidade e meu orgulho. Isso dói demais.',
        simplifiedText: 'Racismo não é piada. Meu cabelo e minha cor são meu orgulho.',
        time: '17:52'
      }
    ],
    choices: [
      {
        id: 'c7-10-empatica',
        text: 'Combater o preconceito com firmeza ética: "Tiago, você está 100% certo e tem todo o nosso respeito e admiração! Racismo é crime inafiançável e NUNCA é piada. Usar a desculpa de "humor" para ofender a dignidade das pessoas é inaceitável. Exigimos a remoção dessa imagem e a expulsão de quem destila preconceito!"',
        simplifiedText: 'Defender Tiago firmemente, declarar que racismo é crime e nunca é piada, e exigir respeito absoluto.',
        type: 'empathetic',
        icon: '✊🏾',
        points: 70,
        consequence: {
          title: 'Postura Antirracista e Firmeza Ética',
          description: 'A comunidade do grupo expulsou o agressor, removeu o conteúdo e reafirmou seu compromisso com a igualdade e o respeito.',
          simplifiedDescription: 'Você teve uma postura corajosa contra o racismo e defendeu seu colega.',
          victimEmotion: 'acolhido',
          chatFeedback: [
            { sender: 'Tiago', avatar: '🧑🏾', text: 'Obrigado por se levantar comigo! Ver amigos ao meu lado me dá muito orgulho de quem eu sou.' }
          ],
          impact: { empathyChange: 70, trustChange: 65, schoolClimateChange: 55 },
          lesson: 'Não basta não ser preconceituoso: é preciso ser ativamente antirracista e não tolerar nenhuma forma de discriminação.',
          simplifiedLesson: 'Racismo e preconceito são crimes graves. O respeito a todas as pessoas é sagrado.'
        }
      },
      {
        id: 'c7-10-passiva',
        text: 'Ficar em silêncio para não ser chamado de "chato" pelo autor da mensagem.',
        simplifiedText: 'Ficar quieto com medo de ser criticado.',
        type: 'passive',
        icon: '🤐',
        points: -15,
        consequence: {
          title: 'Conivência com o Preconceito',
          description: 'O agressor se sentiu livre para postar mais ofensas e Tiago se sentiu desamparado.',
          simplifiedDescription: 'O silêncio fez o agressor continuar ofendendo.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Tiago', avatar: '🧑🏾', text: 'O silêncio machuca quase tanto quanto a ofensa...' }
          ],
          impact: { empathyChange: -35, trustChange: -45, schoolClimateChange: -35 },
          lesson: 'O silêncio diante do preconceito fortalece a injustiça e deixa as vítimas vulneráveis.',
          simplifiedLesson: 'Não se cale diante de injustiças ou ofensas preconceituosas.'
        }
      },
      {
        id: 'c7-10-mediadora',
        text: 'Reportar o caso à comissão de igualdade racial da escola e propor um trabalho sobre a história da cultura afro-brasileira.',
        simplifiedText: 'Levar o debate para a escola para valorizar a história e a cultura afro-brasileira.',
        type: 'mediator',
        icon: '📚',
        points: 60,
        consequence: {
          title: 'Educação para as Relações Étnico-Raciais',
          description: 'A escola realizou oficinas pedagógicas que transformaram a consciência da turma.',
          simplifiedDescription: 'A escola ensinou sobre a beleza da diversidade racial.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Tiago', avatar: '🧑🏾', text: 'Essas oficinas valorizaram muito a nossa história!' }
          ],
          impact: { empathyChange: 60, trustChange: 50, schoolClimateChange: 50 },
          lesson: 'A educação e a memória histórica desconstroem preconceitos enraizados.',
          simplifiedLesson: 'Aprender sobre a história e a diversidade combate todo tipo de preconceito.'
        }
      }
    ]
  }
];

