import { Scenario } from '../../types';
import grade5CraftBaseImg from '../../assets/images/grade5_craft_base_broken_1788186669675.jpg';
import studyGroupImg from '../../assets/images/school_study_group_1787756957320.jpg';

export const grade5Scenarios: Scenario[] = [
  // 5.1
  {
    id: 'cenario-5-1',
    grade: '5',
    gradeLabel: '5º Ano',
    title: 'O Mundo dos Blocos no Jogo',
    category: 'Jogos Online Tóxicos',
    difficulty: 'Iniciante',
    platformType: 'discord',
    pedagogicalObjective: 'Desenvolver a empatia ao jogar online e acolher colegas novatos em mundos compartilhados.',
    context: 'No jogo de blocos da turma, Enzo passou a tarde construindo uma base com seus amigos, mas o líder do servidor quebrou sua construção e o removeu da chamada de voz.',
    simplifiedContext: 'Enzo teve sua casa destruída no jogo e foi expulso da chamada de voz pelos colegas.',
    characters: [
      { name: 'Enzo', role: 'Vítima', avatar: '🧒🏻' },
      { name: 'Davi (Líder)', role: 'Agresor(a)', avatar: '👑' },
      { name: 'Clara', role: 'Colega', avatar: '👧🏽' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c5_1_sys',
        sender: 'Servidor Craft-5B',
        avatar: '⛏️',
        text: 'Davi removeu Enzo da chamada de voz',
        simplifiedText: 'Enzo foi expulso da chamada',
        time: '15:10',
        systemNotice: 'Davi removeu Enzo da sala de voz'
      },
      {
        id: 'c5_1_img',
        sender: 'Davi (Líder)',
        avatar: '👑',
        isAggressor: true,
        text: 'Destruí a casinha do Enzo kkkk ficou horrível perto do nosso castelo! Só joga quem é pro player 😎',
        simplifiedText: 'Destruí a casa do Enzo porque achei feia.',
        time: '15:11',
        reactions: [{ emoji: '😂', count: 2 }, { emoji: '😮', count: 1 }],
        attachment: {
          type: 'image',
          imageUrl: grade5CraftBaseImg,
          content: 'Mundo Virtual da Turma do 5º Ano',
          caption: 'Base destruída no servidor de blocos'
        }
      },
      {
        id: 'c5_1_victim',
        sender: 'Enzo',
        avatar: '🧒🏻',
        isVictim: true,
        text: 'Poxa Davi... demorei três dias fazendo... por que vocês fizeram isso? 😢',
        simplifiedText: 'Eu demorei tanto pra fazer... por que destruíram? 😢',
        time: '15:12',
        reactions: [{ emoji: '😢', count: 3 }]
      },
      {
        id: 'c5_1_clara',
        sender: 'Clara',
        avatar: '👧🏽',
        text: 'Nossa Davi, não precisava quebrar tudo... a gente podia ter ajudado ele a decorar.',
        simplifiedText: 'Não precisava quebrar, podíamos ter ajudado ele.',
        time: '15:13'
      }
    ],
    choices: [
      {
        id: 'c5-1-empatica',
        text: 'Convidar o Enzo de volta, ajudá-lo a reconstruir e dizer: "O servidor é pra todo mundo se divertir junto, ninguém é melhor que ninguém."',
        simplifiedText: 'Chamar o Enzo de volta e ajudar a reconstruir a casa dele.',
        type: 'empathetic',
        icon: '🤝',
        points: 60,
        consequence: {
          title: 'Cooperação e Acolhimento',
          description: 'Você chamou Enzo de volta e outros colegas ajudaram a reconstruir uma base ainda mais legal. Davi pediu desculpas pela atitude.',
          simplifiedDescription: 'Você foi um amigo leal. Todos se uniram e o jogo voltou a ser muito divertido.',
          victimEmotion: 'acolhido',
          chatFeedback: [
            { sender: 'Enzo', avatar: '🧒🏻', text: 'Muito obrigado! Vocês são amigos de verdade!' },
            { sender: 'Clara', avatar: '👧🏽', text: 'Vou doar meus blocos raros pra base do Enzo!' }
          ],
          impact: { empathyChange: 60, trustChange: 40, schoolClimateChange: 35 },
          lesson: 'Nos jogos online, o respeito e a amizade valem mais do que qualquer vitória ou construção.',
          simplifiedLesson: 'Jogar junto é respeitar e incluir todos os colegas.'
        }
      },
      {
        id: 'c5-1-passiva',
        text: 'Ficar quieto para não ser expulso da sala de voz também.',
        simplifiedText: 'Não falar nada para não brigar com o Davi.',
        type: 'passive',
        icon: '🤐',
        points: 5,
        consequence: {
          title: 'Silêncio Desconfortável',
          description: 'Enzo se sentiu sozinho, desconectou do jogo chorando e não quis brincar no recreio do dia seguinte.',
          simplifiedDescription: 'O colega continuou triste e você sentiu que podia ter ajudado.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Enzo', avatar: '🧒🏻', text: '...vou sair do jogo então. Tchau.' }
          ],
          impact: { empathyChange: 0, trustChange: -15, schoolClimateChange: -10 },
          lesson: 'Quando vemos alguém sendo maltratado e não dizemos nada, quem machuca acha que está certo.',
          simplifiedLesson: 'Ficar em silêncio faz o amigo que foi magoado se sentir sozinho.'
        }
      },
      {
        id: 'c5-1-mediadora',
        text: 'Propor uma regra de ouro no grupo: ninguém quebra nada de ninguém e as construções são sempre em equipe.',
        simplifiedText: 'Criar uma regra para ninguém estragar as coisas dos colegas.',
        type: 'mediator',
        icon: '📜',
        points: 50,
        consequence: {
          title: 'Regras de Convivência Positiva',
          description: 'A turma combinou regras claras para o jogo e o servidor passou a ser um ambiente acolhedor para todos.',
          simplifiedDescription: 'A turma criou regras de respeito e todo mundo gostou.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Davi', avatar: '👑', text: 'Beleza, foi mal Enzo, vou te ajudar a arrumar.' }
          ],
          impact: { empathyChange: 50, trustChange: 30, schoolClimateChange: 30 },
          lesson: 'Bons acordos de convivência evitam brigas e tornam qualquer grupo mais forte.',
          simplifiedLesson: 'Regras combinadas deixam a brincadeira segura pra todos.'
        }
      }
    ]
  },

  // 5.2
  {
    id: 'cenario-5-2',
    grade: '5',
    gradeLabel: '5º Ano',
    title: 'A Dúvida na Lição de Casa',
    category: 'Exclusão Virtual',
    difficulty: 'Iniciante',
    platformType: 'whatsapp',
    pedagogicalObjective: 'Estimular a solidariedade e empatia acadêmica no grupo de estudos da sala.',
    context: 'Luiza faltou à aula porque estava doente e pediu a foto da lição de ciências no grupo da turma, mas alguns alunos responderam com figurinhas debochadas.',
    simplifiedContext: 'Luiza ficou doente, pediu a lição no grupo e recebeu risadas e deboche.',
    characters: [
      { name: 'Luiza', role: 'Vítima', avatar: '👧🏻' },
      { name: 'Gabriel', role: 'Agresor(a)', avatar: '🧢' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c5_2_luiza',
        sender: 'Luiza',
        avatar: '👧🏻',
        isVictim: true,
        text: 'Oi turma, tive febre hoje e não pude ir... alguém pode me mandar foto da página do livro de ciências por favor? 🙏',
        simplifiedText: 'Alguém pode me mandar a lição de ciências? Fiquei doente hoje.',
        time: '17:40'
      },
      {
        id: 'c5_2_gabriel',
        sender: 'Gabriel',
        avatar: '🧢',
        isAggressor: true,
        text: 'Quem mandou faltar? Agora se vira kkk quem estuda é quem vai pra escola 🤡',
        simplifiedText: 'Não vou passar nada, quem mandou faltar?',
        time: '17:42',
        reactions: [{ emoji: '😂', count: 3 }]
      }
    ],
    choices: [
      {
        id: 'c5-2-empatica',
        text: 'Tirar uma foto nítida da página do livro, enviar para Luiza e dizer: "Melhoras Luiza! Se tiver dúvida em algum exercício pode me chamar que te explico."',
        simplifiedText: 'Mandar a foto da lição com carinho e desejar melhoras para a colega.',
        type: 'empathetic',
        icon: '📚',
        points: 55,
        consequence: {
          title: 'Gentileza e Solidariedade',
          description: 'Luiza conseguiu estudar tranquila, fez o dever e agradeceu com muito carinho no dia seguinte.',
          simplifiedDescription: 'Você ajudou sua amiga quando ela mais precisava.',
          victimEmotion: 'aliviado',
          chatFeedback: [
            { sender: 'Luiza', avatar: '👧🏻', text: 'Muito obrigada de coração! Você me salvou!' }
          ],
          impact: { empathyChange: 55, trustChange: 45, schoolClimateChange: 40 },
          lesson: 'Ajudar um colega com as lições fortalece os laços de amizade e torna a turma mais unida.',
          simplifiedLesson: 'Apoiar os amigos nos estudos é um gesto lindo de companheirismo.'
        }
      },
      {
        id: 'c5-2-passiva',
        text: 'Ver a mensagem e não responder nada, esperando que outro colega mande.',
        simplifiedText: 'Apenas olhar e deixar para outra pessoa responder.',
        type: 'passive',
        icon: '👀',
        points: 0,
        consequence: {
          title: 'Indiferença',
          description: 'Ninguém mandou a lição a tempo e Luiza levou uma advertência da professora sem ter culpa.',
          simplifiedDescription: 'Ninguém ajudou e a colega ficou sem a lição.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Luiza', avatar: '👧🏻', text: '...alguém? Por favor?' }
          ],
          impact: { empathyChange: -10, trustChange: -20, schoolClimateChange: -15 },
          lesson: 'A omissão diante da necessidade de um amigo machuca tanto quanto uma resposta grosseira.',
          simplifiedLesson: 'Não ajudar quando podemos é deixar um amigo na mão.'
        }
      },
      {
        id: 'c5-2-mediadora',
        text: 'Repreender o deboche no grupo: "Gabriel, o grupo é de estudos para a gente se ajudar, não pra ser grosseiro com quem está doente."',
        simplifiedText: 'Lembrar ao grupo que todos devem se ajudar.',
        type: 'mediator',
        icon: '🛡️',
        points: 45,
        consequence: {
          title: 'Postura Cidadã',
          description: 'O grupo compreendeu o recado, Gabriel apagou a mensagem e outros dois alunos compartilharam o resumo da aula.',
          simplifiedDescription: 'O grupo se conscientizou e compartilhou a lição.',
          victimEmotion: 'acolhida',
          chatFeedback: [
            { sender: 'Gabriel', avatar: '🧢', text: 'Foi mal... tava zoando.' }
          ],
          impact: { empathyChange: 45, trustChange: 35, schoolClimateChange: 35 },
          lesson: 'Defender um ambiente de respeito no grupo virtual protege a harmonia de todos.',
          simplifiedLesson: 'Lembrar os amigos das boas maneiras deixa o grupo melhor.'
        }
      }
    ]
  },

  // 5.3
  {
    id: 'cenario-5-3',
    grade: '5',
    gradeLabel: '5º Ano',
    title: 'O Golpe das Moedas Grátis no Jogo',
    category: 'Golpes e Phishing',
    difficulty: 'Iniciante',
    platformType: 'discord',
    pedagogicalObjective: 'Reconhecer links suspeitos de phishing e golpes que prometem itens grátis em jogos.',
    context: 'Um usuário desconhecido entrou no canal de bate-papo da turma prometendo 10.000 moedas grátis no jogo se os alunos clicassem em um link e colocassem o login e senha da conta.',
    simplifiedContext: 'Um link desconhecido promete moedas de graça se você digitar sua senha.',
    characters: [
      { name: 'Leo (Amigo)', role: 'Vítima', avatar: '👦🏼' },
      { name: 'Bot Estranho', role: 'Agresor(a)', avatar: '🤖' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c5_3_scam',
        sender: 'Bot_FreeGems_99',
        avatar: '🤖',
        isAggressor: true,
        text: '🚨 PROMOÇÃO RELÂMPAGO! Ganhe 10.000 Robux/Gemas agora! Clique em: http://moedas-gratis-super-seguro.xyz e digite seu usuário e senha!',
        simplifiedText: 'Ganhe 10.000 moedas grátis! Clique no link e digite sua senha!',
        time: '16:05'
      },
      {
        id: 'c5_3_leo',
        sender: 'Leo (Amigo)',
        avatar: '👦🏼',
        isVictim: true,
        text: 'Nossa galera, será que é verdade?! Vou colocar minha conta agora pra comprar o visual novo do personagem!',
        simplifiedText: 'Acho que vou colocar minha senha pra ganhar as moedas!',
        time: '16:06'
      }
    ],
    choices: [
      {
        id: 'c5-3-empatica',
        text: 'Avisar o Leo imediatamente: "Leo, NÃO CLICA! É golpe na internet pra roubar sua conta e seus itens virtuais. Nenhum jogo oficial dá moedas pedindo sua senha em sites estranhos!" e denunciar o link.',
        simplifiedText: 'Avisar ao amigo que é um golpe para roubar a conta e não digitar a senha.',
        type: 'empathetic',
        icon: '🛡️',
        points: 60,
        consequence: {
          title: 'Proteção Digital Ativa',
          description: 'Leo não digitou seus dados e salvou sua conta com todos os itens que acumulou por anos. O usuário falso foi removido do grupo.',
          simplifiedDescription: 'Você salvou a conta do seu amigo e evitou que ele caísse num golpe.',
          victimEmotion: 'aliviado',
          chatFeedback: [
            { sender: 'Leo', avatar: '👦🏼', text: 'Ufa!! Quase caí! Muito obrigado por me avisar, você é fera!' }
          ],
          impact: { empathyChange: 60, trustChange: 50, schoolClimateChange: 40 },
          lesson: 'Nunca digite sua senha em links recebidos por mensagem. Sites que prometem itens grátis são golpes para roubar suas contas.',
          simplifiedLesson: 'Não existem moedas grátis em links estranhos. Nunca passe sua senha para ninguém.'
        }
      },
      {
        id: 'c5-3-passiva',
        text: 'Deixar o Leo testar primeiro para ver se ele ganha as moedas mesmo.',
        simplifiedText: 'Esperar para ver se o amigo ganha as moedas.',
        type: 'passive',
        icon: '👀',
        points: 0,
        consequence: {
          title: 'Conta Hackeada',
          description: 'Leo colocou o login e perdeu o acesso à conta em 5 minutos. O invasor trocou o e-mail e deletou todos os itens dele.',
          simplifiedDescription: 'O amigo teve a conta roubada e ficou muito triste.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Leo', avatar: '👦🏼', text: 'Perdi tudo... trocaram minha senha! 😭😭😭' }
          ],
          impact: { empathyChange: -20, trustChange: -30, schoolClimateChange: -20 },
          lesson: 'Se você sabe que algo é perigoso na internet, alertar os amigos é um dever de proteção e cuidado.',
          simplifiedLesson: 'Avise sempre seus amigos quando vir um perigo na internet.'
        }
      },
      {
        id: 'c5-3-hostil',
        text: 'Mandar o link para outros colegas da escola para rir de quem cair.',
        simplifiedText: 'Espalhar o link para zoar quem for enganado.',
        type: 'hostile',
        icon: '⚠️',
        points: -30,
        consequence: {
          title: 'Propagação de Fraude',
          description: 'Três colegas tiveram suas contas roubadas e os pais precisaram acionar a escola. Você foi advertido por compartilhar links maliciosos.',
          simplifiedDescription: 'Vários colegas perderam suas contas por causa do link espalhado.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Leo', avatar: '👦🏼', text: 'Por que você espalhou isso se era golpe?' }
          ],
          impact: { empathyChange: -50, trustChange: -60, schoolClimateChange: -40 },
          lesson: 'Espalhar links maliciosos prejudica as pessoas e pode causar prejuízos financeiros para as famílias.',
          simplifiedLesson: 'Nunca compartilhe links perigosos ou que prometem coisas falsas.'
        }
      }
    ]
  },

  // 5.4
  {
    id: 'cenario-5-4',
    grade: '5',
    gradeLabel: '5º Ano',
    title: 'O Desafio Perigoso no Vídeo Curto',
    category: 'Desafios Perigosos',
    difficulty: 'Iniciante',
    platformType: 'tiktok',
    pedagogicalObjective: 'Compreender os riscos de desafios virais perigosos e proteger a integridade física dos colegas.',
    context: 'Um colega da sala gravou um vídeo tentando fazer um desafio perigoso de pular de um muro alto e chamou os outros alunos para repetirem o desafio para ganhar curtidas.',
    simplifiedContext: 'Um colega gravou um vídeo perigoso pulando de um lugar alto e desafiou a turma a fazer igual.',
    characters: [
      { name: 'Thiago', role: 'Vítima', avatar: '🛹' },
      { name: 'Você', role: 'Colega', avatar: '⭐' },
      { name: 'Profª Helena', role: 'Professor(a)', avatar: '👩🏻‍🏫' }
    ],
    chatMessages: [
      {
        id: 'c5_4_video',
        sender: 'Thiago',
        avatar: '🛹',
        text: 'Desafio do Salto Mortal! Quem tiver coragem grava e posta no status me marcando! Quem não fizer é medroso! 🔥',
        simplifiedText: 'Quem for corajoso pula do muro igual a mim e posta!',
        time: '14:20',
        reactions: [{ emoji: '😱', count: 4 }, { emoji: '🔥', count: 2 }]
      }
    ],
    choices: [
      {
        id: 'c5-4-empatica',
        text: 'Conversar com Thiago com calma e alertar um adulto: "Thiago, isso é muito perigoso, você pode quebrar um osso ou se machucar feio. Curtida nenhuma vale a sua saúde!"',
        simplifiedText: 'Avisar que é perigoso se machucar e que curtidas não valem a segurança.',
        type: 'empathetic',
        icon: '🛑',
        points: 60,
        consequence: {
          title: 'Proteção à Vida e Consciência',
          description: 'Thiago percebeu o perigo, apagou o vídeo e a turma conversou com a professora sobre segurança em vídeos da internet.',
          simplifiedDescription: 'Você impediu que alguém se machucasse gravemente por causa de curtidas.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Thiago', avatar: '🛹', text: 'É verdade... quase torci o pé na gravação. Vou apagar.' }
          ],
          impact: { empathyChange: 60, trustChange: 40, schoolClimateChange: 45 },
          lesson: 'Desafios virais perigosos não provam coragem. Cuidar de si e dos amigos é a verdadeira atitude responsável.',
          simplifiedLesson: 'Nunca faça brincadeiras perigosas para ganhar visualizações.'
        }
      },
      {
        id: 'c5-4-hostil',
        text: 'Chamar Thiago de covarde se ele não pular de um lugar ainda mais alto.',
        simplifiedText: 'Provocar para ele pular de um lugar mais alto.',
        type: 'hostile',
        icon: '💥',
        points: -30,
        consequence: {
          title: 'Acidente Grave',
          description: 'Thiago tentou saltar novamente pressionado pelas provocações, caiu de mau jeito e precisou ser levado ao hospital.',
          simplifiedDescription: 'O colega se machucou de verdade por causa das provocações.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Profª Helena', avatar: '👩🏻‍🏫', text: 'Incentivar perigos físicos nunca é brincadeira.' }
          ],
          impact: { empathyChange: -50, trustChange: -50, schoolClimateChange: -60 },
          lesson: 'Pressionar alguém a se arriscar por aprovação digital pode gerar sequelas físicas permanentes.',
          simplifiedLesson: 'Nunca incentive ninguém a fazer coisas perigosas.'
        }
      },
      {
        id: 'c5-4-mediadora',
        text: 'Propor um desafio saudável e criativo no grupo, como um concurso de desenho ou de construções no game.',
        simplifiedText: 'Sugerir um desafio divertido e seguro, como criar um desenho.',
        type: 'mediator',
        icon: '🎨',
        points: 50,
        consequence: {
          title: 'Criatividade Positiva',
          description: 'A turma mudou o foco para uma gincana de artes e todos participaram com segurança.',
          simplifiedDescription: 'Todo mundo se divertiu com uma brincadeira segura.',
          victimEmotion: 'acolhido',
          chatFeedback: [
            { sender: 'Thiago', avatar: '🛹', text: 'Boa ideia! Vou mostrar meu desenho no grupo.' }
          ],
          impact: { empathyChange: 50, trustChange: 35, schoolClimateChange: 40 },
          lesson: 'Canalizar a energia do grupo para atividades criativas e seguras fortalece o convívio.',
          simplifiedLesson: 'Brincadeiras legais são aquelas onde ninguém se machuca.'
        }
      }
    ]
  },

  // 5.5
  {
    id: 'cenario-5-5',
    grade: '5',
    gradeLabel: '5º Ano',
    title: 'O Estranho no Chat do Jogo Online',
    category: 'Perigos e Estranhos na Rede',
    difficulty: 'Iniciante',
    platformType: 'discord',
    pedagogicalObjective: 'Ensinar sobre privacidade infantil e o perigo de compartilhar dados pessoais com desconhecidos.',
    context: 'Durante uma partida online, um jogador desconhecido que dizia ser "amigo de um amigo" começou a perguntar para a aluna Sofia em qual escola ela estuda e qual é o endereço de sua casa.',
    simplifiedContext: 'Uma pessoa desconhecida no jogo está perguntando o nome da escola e o endereço de Sofia.',
    characters: [
      { name: 'Sofia', role: 'Vítima', avatar: '👧🏼' },
      { name: 'Jogador Misterioso', role: 'Agresor(a)', avatar: '👤' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c5_5_stranger',
        sender: 'Player_Shadow99',
        avatar: '👤',
        isAggressor: true,
        text: 'Oi Sofia, adorei sua voz na partida! Você estuda em qual escola da cidade? Onde fica sua rua pra eu te mandar um presente?',
        simplifiedText: 'Em qual escola você estuda? Qual o endereço da sua casa?',
        time: '18:10'
      },
      {
        id: 'c5_5_sofia',
        sender: 'Sofia',
        avatar: '👧🏼',
        isVictim: true,
        text: 'Gente, será que eu falo? Ele disse que vai me enviar um fone de ouvido gamer pelo correio...',
        simplifiedText: 'Devo passar meu endereço pra ganhar o presente?',
        time: '18:11'
      }
    ],
    choices: [
      {
        id: 'c5-5-empatica',
        text: 'Alertar Sofia firmemente: "Sofia, NUNCA passe seu endereço, escola ou telefone para estranhos na internet! Bloqueie esse usuário agora e mostre para seus pais ou responsáveis."',
        simplifiedText: 'Dizer para nunca passar endereço para estranhos, bloquear e avisar os pais.',
        type: 'empathetic',
        icon: '🛡️',
        points: 60,
        consequence: {
          title: 'Segurança e Autoproteção',
          description: 'Sofia bloqueou o jogador imediatamente e avisou a mãe, que elogiou a atitude protetora do grupo.',
          simplifiedDescription: 'Você protegeu sua amiga de um perigo grave e ela avisou a família.',
          victimEmotion: 'aliviado',
          chatFeedback: [
            { sender: 'Sofia', avatar: '👧🏼', text: 'Bloqueei agora mesmo! Mostrei pra minha mãe e ela me explicou o risco. Obrigada!' }
          ],
          impact: { empathyChange: 60, trustChange: 55, schoolClimateChange: 45 },
          lesson: 'Nunca compartilhe dados reais (endereço, escola, telefone, rotina) com desconhecidos na internet. Em caso de dúvida, fale sempre com seus pais.',
          simplifiedLesson: 'Dados pessoais são segredos de segurança. Estranhos na internet não são seus amigos.'
        }
      },
      {
        id: 'c5-5-passiva',
        text: 'Achar estranho, mas não se meter porque a conversa não é com você.',
        simplifiedText: 'Não falar nada e deixar a Sofia decidir sozinha.',
        type: 'passive',
        icon: '😶',
        points: 0,
        consequence: {
          title: 'Risco de Segurança',
          description: 'Sofia quase passou o telefone da família antes de desconfiar, passando por um momento de grande medo e susto.',
          simplifiedDescription: 'Sua amiga quase caiu em uma armadilha perigosa por falta de aviso.',
          victimEmotion: 'ansioso',
          chatFeedback: [
            { sender: 'Sofia', avatar: '👧🏼', text: 'Fiquei com muito medo quando ele insistiu...' }
          ],
          impact: { empathyChange: -10, trustChange: -20, schoolClimateChange: -20 },
          lesson: 'A segurança na internet é uma responsabilidade coletiva. Se um amigo está em perigo, intervenha com carinho.',
          simplifiedLesson: 'Proteja seus amigos quando alguém estranho fizer perguntas íntimas.'
        }
      },
      {
        id: 'c5-5-mediadora',
        text: 'Denunciar a conta do usuário dentro da plataforma por assédio a menores e incentivar todos a fazerem o mesmo.',
        simplifiedText: 'Apertar o botão de denúncia no jogo para a conta ser banida.',
        type: 'mediator',
        icon: '🚨',
        points: 55,
        consequence: {
          title: 'Denúncia Responsável',
          description: 'A plataforma analisou a denúncia e baniu o perfil suspeito em menos de 1 hora, protegendo outras crianças.',
          simplifiedDescription: 'O perfil perigoso foi banido do jogo.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Sistema do Jogo', avatar: '🎮', text: 'Obrigado por denunciar. O usuário foi suspenso.' }
          ],
          impact: { empathyChange: 55, trustChange: 45, schoolClimateChange: 40 },
          lesson: 'Usar as ferramentas de denúncia das plataformas ajuda a manter a internet mais segura para todos.',
          simplifiedLesson: 'Denunciar contas suspeitas protege todas as crianças que jogam.'
        }
      }
    ]
  },

  // 5.6
  {
    id: 'cenario-5-6',
    grade: '5',
    gradeLabel: '5º Ano',
    title: 'Compartilhar a Senha da Conta',
    category: 'Segurança e Senhas',
    difficulty: 'Iniciante',
    platformType: 'whatsapp',
    pedagogicalObjective: 'Compreender que senhas são intransferíveis e evitar problemas de perda ou invasão de contas.',
    context: 'Bernardo pediu a senha da conta de jogos de Pedro prometendo apenas "olhar" os itens, mas depois começou a gastar as moedas salvas sem autorização.',
    simplifiedContext: 'Pedro emprestou a senha da conta de jogos para o colega e teve seus itens gastos sem permissão.',
    characters: [
      { name: 'Pedro', role: 'Vítima', avatar: '👦🏻' },
      { name: 'Bernardo', role: 'Agresor(a)', avatar: '🎮' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c5_6_pedro',
        sender: 'Pedro',
        avatar: '👦🏻',
        isVictim: true,
        text: 'Bernardo, por que você gastou meus 500 diamantes?! Eu te passei a senha só pra você ver a roupinha nova! 😭',
        simplifiedText: 'Você gastou meus diamantes sem permissão!',
        time: '19:00'
      },
      {
        id: 'c5_6_bernardo',
        sender: 'Bernardo',
        avatar: '🎮',
        isAggressor: true,
        text: 'Ah mano, se você me deu a senha a conta é de nós dois ué kkkk agora já foi!',
        simplifiedText: 'Se você passou a senha eu posso usar como quiser.',
        time: '19:02'
      }
    ],
    choices: [
      {
        id: 'c5-6-empatica',
        text: 'Ajudar Pedro a trocar a senha na hora, ativar a verificação em duas etapas e orientar Bernardo sobre honestidade e devolução.',
        simplifiedText: 'Mudar a senha imediatamente, proteger a conta e conversar sobre respeito.',
        type: 'empathetic',
        icon: '🔑',
        points: 55,
        consequence: {
          title: 'Segurança e Respeito aos Limites',
          description: 'Pedro recuperou a privacidade da conta e Bernardo entendeu que mexer nas coisas alheias sem autorização quebra a confiança da amizade.',
          simplifiedDescription: 'Pedro trocou a senha e Bernardo aprendeu a respeitar as coisas dos amigos.',
          victimEmotion: 'aliviado',
          chatFeedback: [
            { sender: 'Pedro', avatar: '👦🏻', text: 'Troquei a senha e coloquei o e-mail do meu pai. Nunca mais passo senha pra ninguém!' }
          ],
          impact: { empathyChange: 55, trustChange: 40, schoolClimateChange: 35 },
          lesson: 'Senhas são individuais como a chave da sua casa. Nunca compartilhe suas senhas com amigos nem colegas.',
          simplifiedLesson: 'Senha é pessoal e secreta. Não empreste seu login para ninguém.'
        }
      },
      {
        id: 'c5-6-passiva',
        text: 'Dizer que Pedro foi ingênuo e que a culpa foi toda dele por ter passado a senha.',
        simplifiedText: 'Culpar o Pedro por ter passado a senha.',
        type: 'passive',
        icon: '🤷‍♂️',
        points: -10,
        consequence: {
          title: 'Falta de Apoio',
          description: 'Pedro se sentiu culpado e envergonhado, ficando isolado durante as brincadeiras.',
          simplifiedDescription: 'O amigo se sentiu ainda pior por ser julgado.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Pedro', avatar: '👦🏻', text: 'Eu achei que podia confiar nos meus amigos...' }
          ],
          impact: { empathyChange: -25, trustChange: -30, schoolClimateChange: -20 },
          lesson: 'Quando um amigo comete um erro de segurança, ele precisa de ajuda e orientação, não de julgamento.',
          simplifiedLesson: 'Apoie o amigo a resolver o problema em vez de colocar a culpa nele.'
        }
      },
      {
        id: 'c5-6-mediadora',
        text: 'Conversar com Bernardo para ele devolver o valor em itens e pedir desculpas ao Pedro.',
        simplifiedText: 'Ajudar os dois a conversarem para devolverem os itens em paz.',
        type: 'mediator',
        icon: '🤝',
        points: 50,
        consequence: {
          title: 'Reparação e Diálogo',
          description: 'Bernardo reconheceu o erro, doou itens equivalentes no jogo e a amizade foi restaurada.',
          simplifiedDescription: 'Os dois amigos fizeram as pazes e resolveram a situação.',
          victimEmotion: 'acolhido',
          chatFeedback: [
            { sender: 'Bernardo', avatar: '🎮', text: 'Foi mal Pedro, vou te mandar meus itens raros pra compensar.' }
          ],
          impact: { empathyChange: 50, trustChange: 35, schoolClimateChange: 35 },
          lesson: 'Reconhecer um erro e reparar o dano causado é o caminho para reconstruir a confiança.',
          simplifiedLesson: 'Pedir desculpas e consertar o erro restaura a amizade.'
        }
      }
    ]
  },

  // 5.7
  {
    id: 'cenario-5-7',
    grade: '5',
    gradeLabel: '5º Ano',
    title: 'A Foto Sem Permissão no Recreio',
    category: 'Direito de Imagem e Ética',
    difficulty: 'Iniciante',
    platformType: 'whatsapp',
    pedagogicalObjective: 'Compreender a importância do consentimento e do direito de imagem antes de fotografar colegas.',
    context: 'Durante o lanche, Mariana tirou uma foto de Marcelo comendo distraído com a boca suja de molho e mandou no grupo da sala com uma legenda cômica.',
    simplifiedContext: 'Tiraram uma foto de Marcelo com a boca suja de lanche e mandaram no grupo sem ele saber.',
    characters: [
      { name: 'Marcelo', role: 'Vítima', avatar: '👦🏽' },
      { name: 'Mariana', role: 'Agresor(a)', avatar: '📸' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c5_7_foto',
        sender: 'Mariana',
        avatar: '📸',
        isAggressor: true,
        text: 'Gente olha o monstro do molho kkkk Marcelo parecendo um bebê comendo 🤣🤣',
        simplifiedText: 'Olha a foto do Marcelo comendo todo sujo kkk',
        time: '10:30',
        reactions: [{ emoji: '😂', count: 5 }]
      },
      {
        id: 'c5_7_marcelo',
        sender: 'Marcelo',
        avatar: '👦🏽',
        isVictim: true,
        text: 'Apaga isso Mariana! Eu nem vi você tirando foto... que vergonha 😞',
        simplifiedText: 'Apaga por favor, eu não deixei tirar foto minha!',
        time: '10:32'
      }
    ],
    choices: [
      {
        id: 'c5-7-empatica',
        text: 'Pedir com firmeza no grupo: "Mariana, apaga para todos agora, por favor. Ninguém gosta de ser fotografado sem saber e virar piada. Respeita o Marcelo."',
        simplifiedText: 'Pedir para apagar a foto imediatamente e respeitar o colega.',
        type: 'empathetic',
        icon: '🛑',
        points: 55,
        consequence: {
          title: 'Respeito ao Consentimento',
          description: 'Mariana apagou a mensagem antes que outros salvassem e pediu desculpas ao Marcelo.',
          simplifiedDescription: 'A foto foi apagada e Mariana entendeu que não deve tirar fotos sem autorização.',
          victimEmotion: 'aliviado',
          chatFeedback: [
            { sender: 'Mariana', avatar: '📸', text: 'Apaguei Marcelo, desculpa, não pensei que você ia ficar chateado.' }
          ],
          impact: { empathyChange: 55, trustChange: 45, schoolClimateChange: 40 },
          lesson: 'A imagem de qualquer pessoa pertence somente a ela. Fotografar ou filmar sem consentimento é desrespeitoso.',
          simplifiedLesson: 'Nunca tire foto de alguém sem pedir permissão antes.'
        }
      },
      {
        id: 'c5-7-hostil',
        text: 'Fazer uma figurinha (sticker) da cara dele e mandar em outros grupos.',
        simplifiedText: 'Fazer uma figurinha com a foto para zoar mais.',
        type: 'hostile',
        icon: '🤡',
        points: -35,
        consequence: {
          title: 'Cyberbullying por Sticker',
          description: 'A figurinha se espalhou por toda a escola e Marcelo passou a ter vergonha de comer na frente dos colegas.',
          simplifiedDescription: 'O colega virou motivo de piada na escola inteira e ficou muito triste.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Marcelo', avatar: '👦🏽', text: 'Não quero mais ir pra escola...' }
          ],
          impact: { empathyChange: -55, trustChange: -60, schoolClimateChange: -50 },
          lesson: 'Transformar pessoas em piadas virtuais sem autorização causa sofrimento profundo e duradouro.',
          simplifiedLesson: 'Criar figurinhas para zoar os amigos é errado e machuca.'
        }
      },
      {
        id: 'c5-7-mediadora',
        text: 'Chamar Mariana no privado e explicar com educação por que essa brincadeira machuca.',
        simplifiedText: 'Conversar com a colega no privado para ela apagar com calma.',
        type: 'mediator',
        icon: '💬',
        points: 50,
        consequence: {
          title: 'Mediação Empática',
          description: 'Mariana compreendeu a situação sem precisar ser exposta e apagou a foto prontamente.',
          simplifiedDescription: 'A conversa particular resolveu o problema com respeito.',
          victimEmotion: 'acolhido',
          chatFeedback: [
            { sender: 'Marcelo', avatar: '👦🏽', text: 'Valeu por falar com ela, já apagou.' }
          ],
          impact: { empathyChange: 50, trustChange: 35, schoolClimateChange: 35 },
          lesson: 'Conversar em particular muitas vezes desarma conflitos e ensina com gentileza.',
          simplifiedLesson: 'Conversar com calma ajuda a pessoa a entender o erro.'
        }
      }
    ]
  },

  // 5.8
  {
    id: 'cenario-5-8',
    grade: '5',
    gradeLabel: '5º Ano',
    title: 'O Grupo Secreto Sem o Aluno Novo',
    category: 'Exclusão Virtual',
    difficulty: 'Iniciante',
    platformType: 'whatsapp',
    pedagogicalObjective: 'Evitar panelinhas virtuais excludentes e acolher alunos recém-chegados na escola.',
    context: 'Um aluno novo chamado Caio entrou na escola esta semana. Alguns colegas criaram um grupo secreto chamado "5º Ano Sem o Caio" para não convidá-lo para a gincana.',
    simplifiedContext: 'Criaram um grupo escondido só para não convidar o colega novo da turma.',
    characters: [
      { name: 'Caio (Novo Aluno)', role: 'Vítima', avatar: '👦🏼' },
      { name: 'Lucas', role: 'Agresor(a)', avatar: '📱' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c5_8_lucas',
        sender: 'Lucas',
        avatar: '📱',
        isAggressor: true,
        text: 'Criei esse grupo aqui só pra galera raiz, nada de adicionar o Caio novato, ele é esquisito kkkk',
        simplifiedText: 'Esse grupo é só pra nós, não adicionem o aluno novo.',
        time: '16:00'
      }
    ],
    choices: [
      {
        id: 'c5-8-empatica',
        text: 'Dizer no grupo: "Galera, isso não é legal. Como vocês se sentiriam se chegassem numa escola nova e ninguém quisesse falar com vocês? Vamos adicionar o Caio no grupo oficial e ser acolhedores."',
        simplifiedText: 'Lembrar como é ruim ser excluído e chamar o colega novo para o grupo oficial.',
        type: 'empathetic',
        icon: '🌟',
        points: 60,
        consequence: {
          title: 'Inclusão e Empatia Real',
          description: 'A turma apagou o grupo secreto, acolheu Caio no grupo da sala e descobriram que ele adora os mesmos jogos que todos.',
          simplifiedDescription: 'O aluno novo foi acolhido e virou um grande amigo da turma.',
          victimEmotion: 'acolhido',
          chatFeedback: [
            { sender: 'Caio (Novo Aluno)', avatar: '👦🏼', text: 'Obrigado por me incluírem no grupo! Eu estava com medo de não fazer amigos.' }
          ],
          impact: { empathyChange: 60, trustChange: 50, schoolClimateChange: 45 },
          lesson: 'Colocar-se no lugar de quem acabou de chegar transforma a escola em um lugar acolhedor para todos.',
          simplifiedLesson: 'Receber bem os colegas novos faz todo mundo se sentir feliz.'
        }
      },
      {
        id: 'c5-8-passiva',
        text: 'Ficar no grupo secreto calado para não perder a fofoca.',
        simplifiedText: 'Continuar no grupo escondido sem falar nada.',
        type: 'passive',
        icon: '🤐',
        points: -5,
        consequence: {
          title: 'Cumplicidade com a Exclusão',
          description: 'Caio passou o recreio sozinho a semana toda e ficou desanimado de ir para a escola.',
          simplifiedDescription: 'O colega novo continuou sozinho e triste.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Caio (Novo Aluno)', avatar: '👦🏼', text: 'Parece que ninguém gosta de mim aqui...' }
          ],
          impact: { empathyChange: -20, trustChange: -30, schoolClimateChange: -25 },
          lesson: 'Fazer parte de grupos secretos de exclusão fortalece a rejeição contra pessoas vulneráveis.',
          simplifiedLesson: 'Grupos para excluir colegas causam muita tristeza.'
        }
      },
      {
        id: 'c5-8-mediadora',
        text: 'Sair imediatamente do grupo secreto e criar uma atividade que junte toda a turma.',
        simplifiedText: 'Sair do grupo secreto e convidar todos para brincar juntos.',
        type: 'mediator',
        icon: '🚪',
        points: 50,
        consequence: {
          title: 'Exemplo de Integridade',
          description: 'Sua saída motivou outros três colegas a saírem também, esvaziando o grupo da exclusão.',
          simplifiedDescription: 'Você deu o exemplo e o grupo maldoso acabou.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Lucas', avatar: '📱', text: 'É... acho que vacilei. Vou apagar o grupo.' }
          ],
          impact: { empathyChange: 50, trustChange: 35, schoolClimateChange: 35 },
          lesson: 'Não compactuar com a exclusão é um ato poderoso de liderança ética.',
          simplifiedLesson: 'Dizer não à exclusão mostra que você tem um bom coração.'
        }
      }
    ]
  },

  // 5.9
  {
    id: 'cenario-5-9',
    grade: '5',
    gradeLabel: '5º Ano',
    title: 'A Compra com o Cartão dos Pais sem Avisar',
    category: 'Apostas e Fraudes Digitais',
    difficulty: 'Iniciante',
    platformType: 'discord',
    pedagogicalObjective: 'Conscientizar sobre responsabilidade financeira e ética com contas e cartões bancários de familiares.',
    context: 'Durante uma chamada de jogo, Igor descobriu que o cartão de crédito da mãe estava salvo na loja do aplicativo e queria comprar R$ 300 em moedas virtuais sem ela saber.',
    simplifiedContext: 'Um colega quer usar o cartão da mãe salvo no celular para comprar moedas escondido.',
    characters: [
      { name: 'Igor', role: 'Vítima', avatar: '🎮' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c5_9_igor',
        sender: 'Igor',
        avatar: '🎮',
        text: 'Caraca, o cartão da minha mãe tá salvo na Play Store! Vou comprar o passe de batalha de R$ 300 agora, ela nem vai ver o extrato kkkk',
        simplifiedText: 'Vou comprar R$ 300 em moedas com o cartão da minha mãe escondido!',
        time: '17:15'
      }
    ],
    choices: [
      {
        id: 'c5-9-empatica',
        text: 'Aconselhar com clareza: "Igor, não faça isso! Dinheiro real custa muito trabalho para os seus pais. Comprar escondido é errado e ela vai receber a notificação do banco na hora. Converse com ela primeiro!"',
        simplifiedText: 'Avisar que é errado gastar o dinheiro dos pais escondido e pedir permissão antes.',
        type: 'empathetic',
        icon: '🛑',
        points: 60,
        consequence: {
          title: 'Honestidade e Responsabilidade',
          description: 'Igor cancelou a compra, conversou com a mãe e combinou de ganhar um pacote menor de aniversário por bom comportamento.',
          simplifiedDescription: 'Seu amigo foi honesto e evitou um grande problema com a família.',
          victimEmotion: 'aliviado',
          chatFeedback: [
            { sender: 'Igor', avatar: '🎮', text: 'Verdade, você tem razão. Minha mãe trabalha duro. Conversei com ela e deu tudo certo!' }
          ],
          impact: { empathyChange: 60, trustChange: 50, schoolClimateChange: 40 },
          lesson: 'Gastar dinheiro de terceiros sem permissão quebra a confiança familiar e traz prejuízos reais para a casa.',
          simplifiedLesson: 'Nunca use dinheiro ou cartões dos pais sem que eles autorizem antes.'
        }
      },
      {
        id: 'c5-9-hostil',
        text: 'Incentivar a compra e pedir para ele enviar presentes virtuais para você também.',
        simplifiedText: 'Mandar ele comprar logo e te dar presentes no jogo.',
        type: 'hostile',
        icon: '💸',
        points: -30,
        consequence: {
          title: 'Prejuízo e Perda de Confiança',
          description: 'A mãe de Igor recebeu o aviso do banco, ficou muito triste com a mentira e retirou o celular dele por 3 meses.',
          simplifiedDescription: 'A família teve prejuízo e a confiança no colega foi perdida.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Igor', avatar: '🎮', text: 'Minha mãe descobriu tudo na hora... perdi o celular.' }
          ],
          impact: { empathyChange: -50, trustChange: -50, schoolClimateChange: -40 },
          lesson: 'Incentivar atitudes desonestas prejudica os amigos e destrói laços familiares.',
          simplifiedLesson: 'Nunca incentive ninguém a pegar coisas ou dinheiro escondido.'
        }
      },
      {
        id: 'c5-9-mediadora',
        text: 'Ensinar Igor a ativar a senha de confirmação de compras no celular para evitar cliques acidentais.',
        simplifiedText: 'Ajudar a colocar senha para compras no celular.',
        type: 'mediator',
        icon: '🔒',
        points: 50,
        consequence: {
          title: 'Configuração de Segurança',
          description: 'Igor ativou a proteção por senha, garantindo que compras não ocorram sem a presença dos pais.',
          simplifiedDescription: 'O celular ficou protegido com senha contra compras acidentais.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Igor', avatar: '🎮', text: 'Coloquei senha com a minha mãe, agora tá seguro.' }
          ],
          impact: { empathyChange: 50, trustChange: 40, schoolClimateChange: 35 },
          lesson: 'Dispositivos seguros evitam gastos indevidos e protegem a economia da família.',
          simplifiedLesson: 'Ter senha para compras protege o celular e o dinheiro da família.'
        }
      }
    ]
  },

  // 5.10
  {
    id: 'cenario-5-10',
    grade: '5',
    gradeLabel: '5º Ano',
    title: 'O "Fã Misterioso" Pedindo Fotos Privadas',
    category: 'Perigos e Estranhos na Rede',
    difficulty: 'Iniciante',
    platformType: 'tiktok',
    pedagogicalObjective: 'Proteger a intimidade e integridade da criança contra pedidos abusivos de fotos ou segredos na internet.',
    context: 'Uma conta desconhecida mandou mensagem para a aluna Aninha elogiando suas danças e pediu que ela gravasse um vídeo no quarto de pijama e "sem contar para os pais".',
    simplifiedContext: 'Um perfil estranho pediu para Aninha mandar um vídeo no quarto em segredo dos pais.',
    characters: [
      { name: 'Aninha', role: 'Vítima', avatar: '👧🏻' },
      { name: 'Perfil Suspeito', role: 'Agresor(a)', avatar: '🕵️' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c5_10_msg',
        sender: 'Agência_Kids_Talentos',
        avatar: '🕵️',
        isAggressor: true,
        text: 'Olá Aninha! Você tem talento para ser modelo mirim. Mande uma foto sua de pijama no quarto agora pra gente avaliar. É o nosso segredo, não mostre pros seus pais para fazer surpresa!',
        simplifiedText: 'Mande uma foto no quarto de pijama em segredo dos seus pais.',
        time: '20:10'
      },
      {
        id: 'c5_10_aninha',
        sender: 'Aninha',
        avatar: '👧🏻',
        isVictim: true,
        text: 'Amiga, olha que legal! Será que eu mando a foto pra virar modelo?',
        simplifiedText: 'Será que mando a foto pra virar modelo?',
        time: '20:12'
      }
    ],
    choices: [
      {
        id: 'c5-10-empatica',
        text: 'Agir com urgência e acolhimento: "Aninha, PARE AGORA! Isso é um perigo gravíssimo! Agências de verdade NUNCA pedem fotos de pijama nem pedem segredo de pais. Mostre essa mensagem para a sua mãe IMEDIATAMENTE e não responda nada!"',
        simplifiedText: 'Avisar que é um perigo grave, nunca mandar fotos íntimas e mostrar para os pais na hora.',
        type: 'empathetic',
        icon: '🚨',
        points: 65,
        consequence: {
          title: 'Proteção Máxima à Criança',
          description: 'Aninha chamou a mãe na mesma hora. A família denunciou a conta na delegacia de crimes cibernéticos e protegeu a menina.',
          simplifiedDescription: 'Você salvou sua amiga de um perigo terrível na internet.',
          victimEmotion: 'aliviado',
          chatFeedback: [
            { sender: 'Aninha', avatar: '👧🏻', text: 'Minha mãe me abraçou chorando e agradeceu muito por você ter me avisado! Obrigada de verdade!' }
          ],
          impact: { empathyChange: 65, trustChange: 60, schoolClimateChange: 50 },
          lesson: 'Qualquer pessoa na internet que pedir fotos do seu corpo ou pedir segredo dos seus pais está tentando te prejudicar. Conte sempre para um adulto de confiança.',
          simplifiedLesson: 'Nunca mande fotos do seu corpo ou quarto para ninguém na internet. Avise seus pais na hora.'
        }
      },
      {
        id: 'c5-10-passiva',
        text: 'Achar legal e dizer para ela mandar para ver se ela fica famosa.',
        simplifiedText: 'Dizer para ela mandar a foto para ver se fica famosa.',
        type: 'passive',
        icon: '📸',
        points: -40,
        consequence: {
          title: 'Exposição Perigosa',
          description: 'O perfil falso usou as imagens para chantagear a família, gerando um trauma profundo.',
          simplifiedDescription: 'A amiga foi vítima de chantagem perigosa.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Aninha', avatar: '👧🏻', text: 'Eu não devia ter acreditado...' }
          ],
          impact: { empathyChange: -60, trustChange: -70, schoolClimateChange: -60 },
          lesson: 'A segurança do corpo e da privacidade infantil é sagrada e nunca pode ser negociada por promessas de fama.',
          simplifiedLesson: 'Nunca confie em promessas de desconhecidos na internet.'
        }
      },
      {
        id: 'c5-10-mediadora',
        text: 'Ajudar Aninha a printar as mensagens como prova, bloquear o contato e chamar a professora ou orientadora da escola no dia seguinte.',
        simplifiedText: 'Salvar as mensagens como prova e avisar os professores e pais.',
        type: 'mediator',
        icon: '🛡️',
        points: 60,
        consequence: {
          title: 'Registro e Apoio Escolar',
          description: 'A escola orientou a turma toda sobre segurança online e a aluna se sentiu 100% protegida.',
          simplifiedDescription: 'A escola e a família protegeram todos os alunos.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Aninha', avatar: '👧🏻', text: 'A professora nos explicou como nos cuidar na internet.' }
          ],
          impact: { empathyChange: 60, trustChange: 50, schoolClimateChange: 45 },
          lesson: 'Guardar provas e relatar para a coordenação pedagógica ajuda a escola a proteger toda a comunidade.',
          simplifiedLesson: 'Avisar adultos de confiança é a melhor defesa na internet.'
        }
      }
    ]
  }
];
