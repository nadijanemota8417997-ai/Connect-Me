import { Scenario } from '../../types';
import grade6VolleyballStickerImg from '../../assets/images/grade6_volleyball_fall_sticker_1788186656170.jpg';
import grade6AudioImg from '../../assets/images/grade6_audio_recording_1788185597671.jpg';
import grade6ModHackImg from '../../assets/images/grade6_mod_hack_link_1788185444436.jpg';
import grade6BackpackImg from '../../assets/images/grade6_backpack_gossip_1788185463694.jpg';
import grade6TradeScamImg from '../../assets/images/grade6_game_trade_scam_1788185485834.jpg';
import grade6OnlineClassImg from '../../assets/images/grade6_online_class_1788185504412.jpg';
import grade6AiEssayImg from '../../assets/images/grade6_ai_essay_desk_1788185526145.jpg';
import grade6FakeProfileImg from '../../assets/images/grade6_fake_profile_1788185545896.jpg';
import grade6StatusLeakImg from '../../assets/images/grade6_status_leak_1788185563337.jpg';
import grade6ChainLetterImg from '../../assets/images/grade6_chain_letter_1788185580311.jpg';

export const grade6Scenarios: Scenario[] = [
  // 6.1
  {
    id: 'cenario-6-1',
    grade: '6',
    gradeLabel: '6º Ano',
    title: 'A Figurinha da Queda na Aula',
    category: 'Apelidos e Figurinhas',
    difficulty: 'Iniciante',
    platformType: 'whatsapp',
    pedagogicalObjective: 'Compreender o impacto emocional de memes criados a partir de fotos de constrangimento de colegas.',
    context: 'Durante o treino de vôlei, Felipe tropeçou na rede e caiu. Um colega tirou foto do momento exato, fez uma figurinha animada com a frase "O Maior Perna de Pau" e jogou nos 4 grupos de mensagens da escola.',
    simplifiedContext: 'Felipe caiu no vôlei, fizeram uma figurinha zombando dele e espalharam nos grupos.',
    characters: [
      { name: 'Felipe', role: 'Vítima', avatar: '🏐' },
      { name: 'Vitor (Criador)', role: 'Agresor(a)', avatar: '🎭' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c6_1_sticker',
        sender: 'Vitor',
        avatar: '🎭',
        isAggressor: true,
        text: 'NOVA FIGURINHA OFICIAL DO 6º ANO KKKKK Salvem aí galera!',
        simplifiedText: 'Olha a nova figurinha do Felipe caindo kkkk',
        time: '11:45',
        attachment: {
          type: 'sticker',
          imageUrl: grade6VolleyballStickerImg,
          content: 'Figurinha de Felipe caindo no chão',
          caption: 'O Perna de Pau do 6º Ano'
        },
        reactions: [{ emoji: '😂', count: 8 }, { emoji: '💀', count: 3 }]
      },
      {
        id: 'c6_1_felipe',
        sender: 'Felipe',
        avatar: '🏐',
        isVictim: true,
        text: 'Vitor, apaga isso mano... meu joelho tá doendo até agora e todo mundo no corredor tá rindo de mim 😢',
        simplifiedText: 'Vitor, apaga por favor... estão rindo de mim no corredor.',
        time: '11:47',
        reactions: [{ emoji: '😢', count: 2 }]
      }
    ],
    choices: [
      {
        id: 'c6-1-empatica',
        text: 'Escrever com firmeza no grupo: "Galera, não usem mais esse sticker. Se fosse qualquer um de nós caindo, ninguém ia gostar de virar piada. Vitor, apaga a figurinha do pacote e pede desculpas ao Felipe."',
        simplifiedText: 'Pedir a todos para não usarem o sticker e lembrar que ninguém gosta de virar piada.',
        type: 'empathetic',
        icon: '🛑',
        points: 60,
        consequence: {
          title: 'Cultura do Cuidado e Respeito',
          description: 'A maioria dos colegas concordou com você e parou de encaminhar o sticker. Vitor apagou a figurinha do pacote comunitário.',
          simplifiedDescription: 'Você impediu que o deboche continuasse e apoiou o amigo machucado.',
          victimEmotion: 'acolhido',
          chatFeedback: [
            { sender: 'Felipe', avatar: '🏐', text: 'Valeu demais pelo apoio... estava com vergonha até de voltar pra aula.' }
          ],
          impact: { empathyChange: 60, trustChange: 45, schoolClimateChange: 40 },
          lesson: 'Uma brincadeira só é saudável quando todos se divertem. Se alguém está triste ou constrangido, é bullying.',
          simplifiedLesson: 'Se machuca ou entristece o amigo, não é piada nem brincadeira.'
        }
      },
      {
        id: 'c6-1-passiva',
        text: 'Apenas salvar a figurinha no celular para usar com outros amigos no privado.',
        simplifiedText: 'Salvar o sticker escondido para usar depois.',
        type: 'passive',
        icon: '📱',
        points: -10,
        consequence: {
          title: 'Perpetuação do Assédio',
          description: 'O sticker viralizou para outras turmas e Felipe não quis mais participar das aulas de educação física.',
          simplifiedDescription: 'A figurinha se espalhou e o colega ficou isolado.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Felipe', avatar: '🏐', text: 'Ninguém se importa de verdade comigo nessa sala...' }
          ],
          impact: { empathyChange: -20, trustChange: -30, schoolClimateChange: -25 },
          lesson: 'Salvar e repassar conteúdos que humilham colegas alimenta o ciclo da violência virtual.',
          simplifiedLesson: 'Guardar e espalhar stickers ofensivos machuca quem foi gravado.'
        }
      },
      {
        id: 'c6-1-mediadora',
        text: 'Sugerir criar um álbum com fotos das jogadas legais e gols de todo mundo na semana para valorizar a turma.',
        simplifiedText: 'Criar fotos e publicações elogiando as jogadas bonitas da turma.',
        type: 'mediator',
        icon: '🏆',
        points: 50,
        consequence: {
          title: 'Mudança de Foco Positiva',
          description: 'A turma postou os melhores lances do torneio e Felipe recebeu muitos elogios pelas defesas difíceis que fez no jogo.',
          simplifiedDescription: 'A turma destacou as coisas boas de cada um e o clima melhorou.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Felipe', avatar: '🏐', text: 'Nossa, valeu por lembrarem da minha defesa no final!' }
          ],
          impact: { empathyChange: 50, trustChange: 40, schoolClimateChange: 35 },
          lesson: 'Valorizar os talentos dos colegas substitui a zombaria pelo espírito de equipe.',
          simplifiedLesson: 'Elogiar e valorizar os amigos deixa o grupo muito mais unido.'
        }
      }
    ]
  },

  // 6.2
  {
    id: 'cenario-6-2',
    grade: '6',
    gradeLabel: '6º Ano',
    title: 'O Áudio Engraçado Gravado Escondido',
    category: 'Direito de Imagem e Ética',
    difficulty: 'Iniciante',
    platformType: 'whatsapp',
    pedagogicalObjective: 'Reconhecer que gravações de voz sem consentimento violam a privacidade e a confiança dos colegas.',
    context: 'Durante uma conversa no recreio, Gustavo gaguejou ao contar uma história de terror. Um colega gravou o áudio com o microfone escondido e colocou efeitos sonoros de risada para espalhar no grupo.',
    simplifiedContext: 'Gravaram a voz de Gustavo gaguejando sem ele saber e colocaram efeitos sonoros para rir dele.',
    characters: [
      { name: 'Gustavo', role: 'Vítima', avatar: '🎙️' },
      { name: 'Renan', role: 'Agresor(a)', avatar: '🎧' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c6_2_audio',
        sender: 'Renan',
        avatar: '🎧',
        isAggressor: true,
        text: 'OUÇAM O GUSTAVO TENTANDO FALAR "MONSTRO" KKKKKK Remix do ano! 🎵😂',
        simplifiedText: 'Ouçam o áudio do Gustavo gaguejando no recreio kkk',
        time: '13:10',
        attachment: {
          type: 'audio',
          imageUrl: grade6AudioImg,
          content: 'audio_remix_gustavo.mp3',
          duration: '0:18',
          caption: 'Gravação escondida com microfone no banco do pátio'
        },
        reactions: [{ emoji: '😂', count: 6 }]
      },
      {
        id: 'c6_2_gus',
        sender: 'Gustavo',
        avatar: '🎙️',
        isVictim: true,
        text: 'Renan, você tava gravando com o celular escondido na mochila?! Isso é muita covardia...',
        simplifiedText: 'Você gravou escondido de mim? Que falta de respeito...',
        time: '13:12'
      }
    ],
    choices: [
      {
        id: 'c6-2-empatica',
        text: 'Posicionar-se no grupo: "Renan, gravar alguém escondido e distorcer a voz é uma quebra de confiança absurda. Apaga esse áudio agora e respeite o Gustavo."',
        simplifiedText: 'Avisar que gravar as pessoas escondido é errado e pedir para apagar o áudio.',
        type: 'empathetic',
        icon: '🛑',
        points: 60,
        consequence: {
          title: 'Defesa da Privacidade',
          description: 'Renan percebeu a gravidade de gravar sem consentimento, apagou o arquivo e pediu desculpas.',
          simplifiedDescription: 'O áudio foi apagado e o grupo aprendeu que não se pode gravar ninguém escondido.',
          victimEmotion: 'aliviado',
          chatFeedback: [
            { sender: 'Gustavo', avatar: '🎙️', text: 'Muito obrigado por me defender, eu fiquei muito chateado com essa gravação.' }
          ],
          impact: { empathyChange: 60, trustChange: 50, schoolClimateChange: 40 },
          lesson: 'Gravar conversas alheias sem autorização é invasão de privacidade e destrói o ambiente de confiança escolar.',
          simplifiedLesson: 'Nunca grave áudio ou vídeo de colegas sem que eles saibam e autorizem.'
        }
      },
      {
        id: 'c6-2-hostil',
        text: 'Rir no chat e mandar figurinhas imitando a gagueira do colega.',
        simplifiedText: 'Rir no grupo e zoar a voz do colega.',
        type: 'hostile',
        icon: '🤡',
        points: -30,
        consequence: {
          title: 'Agravamento do Sofrimento',
          description: 'Gustavo passou a ter fobia de falar em público e não quis mais apresentar seminários escolares.',
          simplifiedDescription: 'O colega ficou com trauma de falar em público.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Gustavo', avatar: '🎙️', text: 'Não falo mais nada nessa sala...' }
          ],
          impact: { empathyChange: -50, trustChange: -60, schoolClimateChange: -45 },
          lesson: 'Zombar de características da fala de alguém pode causar inseguranças profundas para toda a vida.',
          simplifiedLesson: 'Nunca zombe do jeito de falar ou da voz de ninguém.'
        }
      },
      {
        id: 'c6-2-mediadora',
        text: 'Chamar Renan no privado para lembrá-lo de que a escola proíbe gravações não autorizadas de alunos.',
        simplifiedText: 'Lembrar ao colega no privado que gravar alunos sem permissão é contra as regras.',
        type: 'mediator',
        icon: '🔒',
        points: 50,
        consequence: {
          title: 'Alerta Ético',
          description: 'Renan entendeu que poderia ser penalizado pelas regras da escola e removeu o áudio rapidamente.',
          simplifiedDescription: 'O colega removeu o áudio após o alerta responsável.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Renan', avatar: '🎧', text: 'Já tirei do grupo, valeu pelo toque.' }
          ],
          impact: { empathyChange: 50, trustChange: 35, schoolClimateChange: 35 },
          lesson: 'Conhecer as regras e direitos digitais ajuda a evitar conflitos graves na escola.',
          simplifiedLesson: 'Respeitar as regras de privacidade protege todos na escola.'
        }
      }
    ]
  },

  // 6.3
  {
    id: 'cenario-6-3',
    grade: '6',
    gradeLabel: '6º Ano',
    title: 'O Link Suspeito de Jogo Pirata / Mod Menu',
    category: 'Golpes e Phishing',
    difficulty: 'Intermediário',
    platformType: 'discord',
    pedagogicalObjective: 'Prevenir infecções por malware, vírus e roubo de senhas por meio de downloads piratas não confiáveis.',
    context: 'Um link prometendo "Hack de Dinheiro Infinito / Mod Menu" foi compartilhado no servidor de jogos da turma, pedindo para desativar o antivírus do celular.',
    simplifiedContext: 'Um link promete truques de dinheiro infinito no jogo se você desligar a segurança do celular.',
    characters: [
      { name: 'Mateus', role: 'Vítima', avatar: '🕹️' },
      { name: 'Hacker Falso', role: 'Agresor(a)', avatar: '👾' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c6_3_link',
        sender: 'ModMaster_BR',
        avatar: '👾',
        isAggressor: true,
        text: '🔥 BAIXE AGORA O MOD MENU COM TUDO DESBLOQUEADO! Só clicar no link e desativar o antivírus para instalar o APK direto: bit.ly/hack-infinito-mod-free',
        simplifiedText: 'Baixe o truque com tudo grátis! Desative o antivírus para instalar.',
        time: '15:30',
        attachment: {
          type: 'image',
          imageUrl: grade6ModHackImg,
          content: 'Aviso de Download de Mod Menu Suspeito',
          caption: 'Instalação APK não verificada exigindo desligamento do antivírus'
        }
      },
      {
        id: 'c6_3_mat',
        sender: 'Mateus',
        avatar: '🕹️',
        isVictim: true,
        text: 'Caramba, vou baixar no celular da minha mãe agora pra passar de fase!',
        simplifiedText: 'Vou baixar no celular agora mesmo!',
        time: '15:32'
      }
    ],
    choices: [
      {
        id: 'c6-3-empatica',
        text: 'Intervir imediatamente: "Mateus, NÃO BAIXE! Pedir para desativar antivírus e instalar arquivo desconhecido é o maior sinal de Trojan e vírus que rouba senhas bancárias e fotos do celular! Apague esse link agora!"',
        simplifiedText: 'Avisar que é um vírus perigoso que rouba senhas e fotos do celular e não baixar.',
        type: 'empathetic',
        icon: '🛡️',
        points: 60,
        consequence: {
          title: 'Segurança Cibernética em Ação',
          description: 'Mateus cancelou o download na hora. O moderador do Discord baniu o spammer e protegeu os celulares de todos os alunos.',
          simplifiedDescription: 'Você salvou o celular do amigo de um vírus terrível.',
          victimEmotion: 'aliviado',
          chatFeedback: [
            { sender: 'Mateus', avatar: '🕹️', text: 'Nossa mano, o antivírus da minha mãe apitou! Obrigado por me salvar dessa bronca!' }
          ],
          impact: { empathyChange: 60, trustChange: 50, schoolClimateChange: 45 },
          lesson: 'Downloads não oficiais e hacks de jogos contêm vírus espiões. Nunca desative proteções de segurança nem instale fontes desconhecidas.',
          simplifiedLesson: 'Nunca baixe truques ou arquivos suspeitos. Eles contêm vírus que estragam o celular.'
        }
      },
      {
        id: 'c6-3-passiva',
        text: 'Não falar nada e esperar para ver se o jogo do Mateus trava.',
        simplifiedText: 'Ficar olhando para ver se o celular do amigo trava.',
        type: 'passive',
        icon: '👀',
        points: 0,
        consequence: {
          title: 'Celular Infectado',
          description: 'O vírus bloqueou a tela do celular pedindo resgate e apagou todas as fotos da família de Mateus.',
          simplifiedDescription: 'O celular foi infectado e o colega perdeu todas as fotos da família.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Mateus', avatar: '🕹️', text: 'Travou tudo... o que eu faço agora?! 😭' }
          ],
          impact: { empathyChange: -20, trustChange: -30, schoolClimateChange: -25 },
          lesson: 'Ignorar riscos digitais evidentes deixa os colegas expostos a crimes virtuais.',
          simplifiedLesson: 'Avise sempre que vir links perigosos na internet.'
        }
      },
      {
        id: 'c6-3-mediadora',
        text: 'Ensinar ao grupo os canais oficiais de download (lojas oficiais como Google Play e App Store) onde os jogos são verificados.',
        simplifiedText: 'Explicar que só se deve baixar jogos pelas lojas oficiais e seguras.',
        type: 'mediator',
        icon: '📱',
        points: 55,
        consequence: {
          title: 'Educação em Segurança Digital',
          description: 'A turma aprendeu a identificar links falsos e a usar apenas as lojas oficiais e seguras.',
          simplifiedDescription: 'A turma aprendeu a baixar jogos apenas de lugares seguros.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Mateus', avatar: '🕹️', text: 'Aprendi a lição, agora só baixo pela loja oficial.' }
          ],
          impact: { empathyChange: 55, trustChange: 40, schoolClimateChange: 40 },
          lesson: 'Utilizar apenas lojas oficiais com verificação de segurança é a melhor forma de proteger seus dados.',
          simplifiedLesson: 'Baixe aplicativos somente de lojas oficiais seguras.'
        }
      }
    ]
  },

  // 6.4
  {
    id: 'cenario-6-4',
    grade: '6',
    gradeLabel: '6º Ano',
    title: 'O Grupo "Só os Populares do 6º Ano"',
    category: 'Exclusão Virtual',
    difficulty: 'Iniciante',
    platformType: 'whatsapp',
    pedagogicalObjective: 'Desestimular hierarquias de popularidade tóxicas e combater a segregação e exclusão entre estudantes.',
    context: 'Três alunas criaram um grupo fechado e começaram a postar fotos das roupas e mochilas de outras colegas da sala para avaliar quem "merecia" sentar com elas no almoço.',
    simplifiedContext: 'Criaram um grupo para avaliar as roupas dos colegas e decidir quem podia sentar com elas no almoço.',
    characters: [
      { name: 'Júlia', role: 'Vítima', avatar: '🎒' },
      { name: 'Yasmin', role: 'Agresor(a)', avatar: '👑' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c6_4_msg',
        sender: 'Yasmin',
        avatar: '👑',
        isAggressor: true,
        text: 'Nota 2 pra mochila da Júlia kkkk totalmente fora de moda! Nem pensem em chamar ela pra nossa mesa hoje!',
        simplifiedText: 'A mochila da Júlia é feia, não deixem ela sentar na nossa mesa hoje.',
        time: '12:15',
        reactions: [{ emoji: '💅', count: 3 }],
        attachment: {
          type: 'image',
          imageUrl: grade6BackpackImg,
          content: 'Foto da Mochila de Júlia Exposta no Grupo',
          caption: 'Foto tirada no corredor sem autorização para julgar e excluir colegas'
        }
      },
      {
        id: 'c6_4_ju',
        sender: 'Júlia',
        avatar: '🎒',
        isVictim: true,
        text: 'Eu vi o print que me mandaram... minha mãe comprou essa mochila com tanto carinho... 😢',
        simplifiedText: 'Minha mãe comprou minha mochila com tanto carinho... por que fazem isso? 😢',
        time: '12:18'
      }
    ],
    choices: [
      {
        id: 'c6-4-empatica',
        text: 'Chamar Júlia para almoçar com você, elogiá-la de coração e dizer no grupo: "Roupa ou mochila não define o valor de ninguém. A Júlia é uma pessoa incrível e essa atitude de vocês é feia e superficial."',
        simplifiedText: 'Convidar a Júlia para sentar com você e defender que coisas materiais não definem o valor das pessoas.',
        type: 'empathetic',
        icon: '💖',
        points: 60,
        consequence: {
          title: 'Acolhimento e Empatia Genuína',
          description: 'Você almoçou com Júlia e vários outros alunos se juntaram à mesa. A tentativa de exclusão perdeu todo o sentido.',
          simplifiedDescription: 'Você acolheu a colega com carinho e mostrou que a amizade é o que realmente importa.',
          victimEmotion: 'acolhida',
          chatFeedback: [
            { sender: 'Júlia', avatar: '🎒', text: 'Muito obrigada por sentar comigo! Meu dia ficou muito mais feliz!' }
          ],
          impact: { empathyChange: 60, trustChange: 55, schoolClimateChange: 45 },
          lesson: 'A verdadeira elegância está no respeito, na generosidade e no carinho com as pessoas, nunca em marcas ou posses.',
          simplifiedLesson: 'O valor de uma pessoa está no seu coração, nunca no que ela veste ou tem.'
        }
      },
      {
        id: 'c6-4-hostil',
        text: 'Rir da mochila também para ser aceito no grupo das populares.',
        simplifiedText: 'Rir junto para tentar parecer popular.',
        type: 'hostile',
        icon: '👥',
        points: -35,
        consequence: {
          title: 'Perda de Valores',
          description: 'Júlia chorou no banheiro a tarde inteira e você percebeu que a amizade desse grupo era falsa e interesseira.',
          simplifiedDescription: 'A colega ficou muito magoada e você apoiou uma atitude maldosa.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Júlia', avatar: '🎒', text: 'Eu achei que éramos amigos...' }
          ],
          impact: { empathyChange: -55, trustChange: -60, schoolClimateChange: -50 },
          lesson: 'Buscar aceitação machucando os outros corrói seu próprio caráter e gera arrependimento.',
          simplifiedLesson: 'Nunca zombe de ninguém para tentar agradar outras pessoas.'
        }
      },
      {
        id: 'c6-4-mediadora',
        text: 'Conversar com Yasmin para refletir sobre como o preconceito material afasta pessoas legais da vida dela.',
        simplifiedText: 'Explicar com calma para a colega que julgar pela aparência afasta os amigos.',
        type: 'mediator',
        icon: '💬',
        points: 50,
        consequence: {
          title: 'Reflexão e Mudança',
          description: 'Yasmin se envergonhou do comentário, pediu desculpas à Júlia e a convidou para o lanche.',
          simplifiedDescription: 'A colega refletiu, pediu desculpas e mudou de postura.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Yasmin', avatar: '👑', text: 'Desculpa Júlia, falei sem pensar... senta com a gente.' }
          ],
          impact: { empathyChange: 50, trustChange: 40, schoolClimateChange: 40 },
          lesson: 'O diálogo respeitoso pode abrir os olhos de quem está agindo com imaturidade.',
          simplifiedLesson: 'Conversar com carinho ajuda as pessoas a reverem atitudes erradas.'
        }
      }
    ]
  },

  // 6.5
  {
    id: 'cenario-6-5',
    grade: '6',
    gradeLabel: '6º Ano',
    title: 'O Golpe da Troca de Itens no Jogo',
    category: 'Golpes e Phishing',
    difficulty: 'Intermediário',
    platformType: 'discord',
    pedagogicalObjective: 'Desenvolver discernimento ético em transações digitais e trocas seguras em games.',
    context: 'Um aluno mais velho prometeu trocar uma espada lendária por 5 itens raros de Daniel no jogo, mas assim que recebeu os itens do Daniel, desfez a amizade e o bloqueou.',
    simplifiedContext: 'Um jogador prometeu trocar uma espada rara, pegou os itens do colega e o bloqueou em seguida.',
    characters: [
      { name: 'Daniel', role: 'Vítima', avatar: '🗡️' },
      { name: 'Golpista Gamer', role: 'Agresor(a)', avatar: '🦊' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c6_5_dani',
        sender: 'Daniel',
        avatar: '🗡️',
        isVictim: true,
        text: 'Gente... passei meus 5 itens que passei o ano inteiro juntando e ele me bloqueou sem me dar a espada... Fui roubado 😭😭',
        simplifiedText: 'Passei meus itens e ele me bloqueou sem me entregar a espada! Fui roubado!',
        time: '16:45',
        attachment: {
          type: 'image',
          imageUrl: grade6TradeScamImg,
          content: 'Tela de Troca de Itens no Jogo',
          caption: 'Espada lendária prometida em troca dos 5 itens raros de Daniel'
        }
      }
    ],
    choices: [
      {
        id: 'c6-5-empatica',
        text: 'Acolher Daniel, ajudá-lo a abrir um chamado de suporte no jogo com os prints da negociação e doar um item seu para animá-lo.',
        simplifiedText: 'Apoiar o amigo, denunciar o trapaceiro no suporte do jogo e ajudá-lo com um item seu.',
        type: 'empathetic',
        icon: '🤝',
        points: 60,
        consequence: {
          title: 'Solidariedade Gamer e Justiça',
          description: 'O suporte do jogo baniu a conta do golpista por fraude e devolveu os itens ao Daniel graças às provas enviadas.',
          simplifiedDescription: 'O trapaceiro foi punido e seu amigo recuperou os itens com sua ajuda.',
          victimEmotion: 'aliviado',
          chatFeedback: [
            { sender: 'Daniel', avatar: '🗡️', text: 'O suporte baniu a conta dele e devolveu meus itens! Muito obrigado por me ajudar com as provas!' }
          ],
          impact: { empathyChange: 60, trustChange: 55, schoolClimateChange: 45 },
          lesson: 'Em jogos, utilize apenas as janelas de troca direta e oficial (Trade System). Nunca entregue itens confiando em promessas verbais.',
          simplifiedLesson: 'Faça trocas apenas usando o sistema seguro do próprio jogo.'
        }
      },
      {
        id: 'c6-5-passiva',
        text: 'Dizer que Daniel é muito ingênuo por ter acreditado e que mereceu perder.',
        simplifiedText: 'Zombar do amigo dizendo que ele é bobo por ter caído no golpe.',
        type: 'passive',
        icon: '🤦‍♂️',
        points: -15,
        consequence: {
          title: 'Falta de Empatia com a Vítima',
          description: 'Daniel ficou desolado e parou de jogar o jogo que tanto amava.',
          simplifiedDescription: 'O amigo ficou ainda mais triste por ser zombado.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Daniel', avatar: '🗡️', text: 'Eu só queria uma troca justa...' }
          ],
          impact: { empathyChange: -30, trustChange: -40, schoolClimateChange: -30 },
          lesson: 'A culpa do golpe é SEMPRE do golpista, nunca da vítima que foi enganada de boa-fé.',
          simplifiedLesson: 'Nunca culpe ou zombe de quem caiu em uma enganação.'
        }
      },
      {
        id: 'c6-5-mediadora',
        text: 'Criar um guia de dicas de trocas seguras no servidor para que nenhum outro aluno do 6º ano seja enganado.',
        simplifiedText: 'Criar um aviso para toda a turma com dicas de segurança para trocas de jogos.',
        type: 'mediator',
        icon: '📜',
        points: 55,
        consequence: {
          title: 'Prevenção Comunitária',
          description: 'O servidor fixou as dicas de segurança e as tentativas de golpes caíram a zero na comunidade.',
          simplifiedDescription: 'A comunidade de jogos da escola ficou protegida contra golpes.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Daniel', avatar: '🗡️', text: 'Essas regras de troca vão salvar muita gente!' }
          ],
          impact: { empathyChange: 55, trustChange: 45, schoolClimateChange: 40 },
          lesson: 'Transformar uma experiência difícil em aprendizado para toda a comunidade fortalece a cidadania digital.',
          simplifiedLesson: 'Ajudar os outros a não caírem em golpes é cuidar da comunidade.'
        }
      }
    ]
  },

  // 6.6
  {
    id: 'cenario-6-6',
    grade: '6',
    gradeLabel: '6º Ano',
    title: 'Trollar o Professor no Chat da Aula',
    category: 'Direito de Imagem e Ética',
    difficulty: 'Iniciante',
    platformType: 'schoolpage',
    pedagogicalObjective: 'Valorizar a figura do educador e manter a ética e o respeito em ambientes virtuais de aprendizagem.',
    context: 'Durante a apresentação de slides da professora de Geografia, dois alunos começaram a mandar figurinhas com barulhos e apelidos pejorativos no chat para atrapalhar a explicação.',
    simplifiedContext: 'Alunos começaram a mandar barulhos e apelidos no chat para atrapalhar a aula da professora.',
    characters: [
      { name: 'Profª Lúcia', role: 'Professor(a)', avatar: '👩🏼‍🏫' },
      { name: 'Bruno', role: 'Agresor(a)', avatar: '⚡' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c6_6_bruno',
        sender: 'Bruno',
        avatar: '⚡',
        isAggressor: true,
        text: 'Kkkkk a professora tá travando! Mandem figurinha de sono no chat galera! 💤💤💤',
        simplifiedText: 'Mandar várias mensagens de sono na conversa pra atrapalhar a aula kkk',
        time: '08:40',
        reactions: [{ emoji: '😴', count: 4 }],
        attachment: {
          type: 'image',
          imageUrl: grade6OnlineClassImg,
          content: 'Slides da Aula Virtual de Geografia',
          caption: 'Apresentação escolar com spam de emojis e figurinhas no chat'
        }
      },
      {
        id: 'c6_6_prof',
        sender: 'Profª Lúcia',
        avatar: '👩🏼‍🏫',
        text: 'Por favor turma, mantenham o respeito no chat... preparei essa aula com muita dedicação.',
        simplifiedText: 'Por favor turma, mantenham o respeito no chat da aula.',
        time: '08:41'
      }
    ],
    choices: [
      {
        id: 'c6-6-empatica',
        text: 'Pedir respeito no chat: "Bruno, por favor, pare. A professora preparou essa aula pra gente e queremos aprender. Respeito aos professores é o mínimo!" e fazer uma pergunta pertinente sobre a matéria.',
        simplifiedText: 'Pedir respeito à professora e fazer uma pergunta sobre a matéria para apoiar a aula.',
        type: 'empathetic',
        icon: '📚',
        points: 60,
        consequence: {
          title: 'Respeito ao Educador e Compromisso',
          description: 'O chat silenciou as brincadeiras, outros colegas participaram com dúvidas e a professora agradeceu comovida.',
          simplifiedDescription: 'Você restaurou o respeito na aula e apoiou a professora.',
          victimEmotion: 'acolhido',
          chatFeedback: [
            { sender: 'Profª Lúcia', avatar: '👩🏼‍🏫', text: 'Muito obrigada pelo respeito e pela excelente pergunta!' }
          ],
          impact: { empathyChange: 60, trustChange: 50, schoolClimateChange: 50 },
          lesson: 'O trabalho do professor merece respeito absoluto. A sala de aula virtual exige a mesma educação que o ambiente presencial.',
          simplifiedLesson: 'Respeitar e valorizar os professores é fundamental para uma boa convivência.'
        }
      },
      {
        id: 'c6-6-hostil',
        text: 'Entrar na onda e mandar mais figurinhas para a professora não conseguir falar.',
        simplifiedText: 'Mandar mais figurinhas para bagunçar ainda mais a aula.',
        type: 'hostile',
        icon: '🔊',
        points: -30,
        consequence: {
          title: 'Prejuízo ao Aprendizado',
          description: 'A professora encerrou a chamada com tristeza e a turma inteira ficou sem o conteúdo essencial para a prova.',
          simplifiedDescription: 'A aula foi cancelada e a turma toda saiu prejudicada.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Profª Lúcia', avatar: '👩🏼‍🏫', text: 'Infelizmente assim não conseguimos continuar...' }
          ],
          impact: { empathyChange: -50, trustChange: -50, schoolClimateChange: -55 },
          lesson: 'Desrespeitar educadores prejudica o futuro e o aprendizado de todos os colegas.',
          simplifiedLesson: 'Atrapalhar a aula prejudica o aprendizado de todos os amigos.'
        }
      },
      {
        id: 'c6-6-mediadora',
        text: 'Lembrar a turma das normas de etiqueta digital (Netiqueta) estabelecidas no início do ano letivo.',
        simplifiedText: 'Lembrar aos colegas as regras de boa convivência na aula.',
        type: 'mediator',
        icon: '📋',
        points: 50,
        consequence: {
          title: 'Consciência de Netiqueta',
          description: 'A turma relembrou os combinados éticos e a aula transcorreu de forma muito produtiva.',
          simplifiedDescription: 'Os combinados de respeito foram lembrados e a aula continuou bem.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Bruno', avatar: '⚡', text: 'Foi mal professora, já parei.' }
          ],
          impact: { empathyChange: 50, trustChange: 35, schoolClimateChange: 40 },
          lesson: 'A Netiqueta (regras de etiqueta na internet) garante que todos possam aprender em paz.',
          simplifiedLesson: 'Seguir as boas maneiras digitais ajuda todo mundo a aprender melhor.'
        }
      }
    ]
  },

  // 6.7
  {
    id: 'cenario-6-7',
    grade: '6',
    gradeLabel: '6º Ano',
    title: 'Usar IA para Copiar a Redação Inteira',
    category: 'Inteligência Artificial e Plágio',
    difficulty: 'Intermediário',
    platformType: 'whatsapp',
    pedagogicalObjective: 'Desenvolver o senso crítico e a ética no uso de ferramentas de IA generativa nos estudos.',
    context: 'Para a redação sobre "Meus Sonhos para o Futuro", Samuel gerou um texto completo pelo robô de IA e colou no trabalho fingindo que era de autoria própria, sem nem ler o que estava escrito.',
    simplifiedContext: 'Samuel copiou um texto inteiro de um robô de IA e entregou dizendo que foi ele quem escreveu.',
    characters: [
      { name: 'Samuel', role: 'Vítima', avatar: '🤖' },
      { name: 'Você', role: 'Colega', avatar: '⭐' },
      { name: 'Prof. Carlos', role: 'Professor(a)', avatar: '👨🏻‍🏫' }
    ],
    chatMessages: [
      {
        id: 'c6_7_sam',
        sender: 'Samuel',
        avatar: '🤖',
        text: 'Fiz a redação em 5 segundos no robô de IA kkk nem li! Botei meu nome e mandei. Fácil demais!',
        simplifiedText: 'Gerei a redação inteira na IA em 5 segundos e mandei sem ler!',
        time: '18:00',
        attachment: {
          type: 'image',
          imageUrl: grade6AiEssayImg,
          content: 'Redação Gerada Automaticamente por IA',
          caption: 'Texto escolar copiado de chatbot de IA sem esforço próprio'
        }
      }
    ],
    choices: [
      {
        id: 'c6-7-empatica',
        text: 'Aconselhar o amigo com ética: "Samuel, a IA é legal para tirar dúvidas ou ter ideias, mas copiar um texto pronto e fingir que é seu é plágio e você não aprende nada sobre seus próprios sonhos. Lê com atenção, reescreve com as SUAS próprias palavras e conte a sua história real!"',
        simplifiedText: 'Explicar que copiar texto de IA e fingir que é seu é errado, e que ele deve escrever com suas próprias palavras.',
        type: 'empathetic',
        icon: '✍️',
        points: 60,
        consequence: {
          title: 'Autenticidade e Desenvolvimento Real',
          description: 'Samuel reescreveu a redação contando sobre seu sonho de ser veterinário. O professor elogiou a sinceridade e emoção do texto.',
          simplifiedDescription: 'Seu amigo escreveu com o próprio coração e fez um trabalho lindo.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Samuel', avatar: '🤖', text: 'Você tinha razão! Minha redação verdadeira ficou 10 vezes mais emocionante do que o texto do robô!' }
          ],
          impact: { empathyChange: 60, trustChange: 50, schoolClimateChange: 45 },
          lesson: 'Ferramentas de IA são assistentes para o pensamento, não substitutas da sua criatividade e do seu esforço pessoal.',
          simplifiedLesson: 'Use a tecnologia para aprender, mas nunca copie textos fingindo que foram feitos por você.'
        }
      },
      {
        id: 'c6-7-hostil',
        text: 'Pedir para a IA fazer a sua também e rir dos colegas que passaram a tarde estudando e escrevendo.',
        simplifiedText: 'Copiar também e zombar de quem se esforçou estudando.',
        type: 'hostile',
        icon: '📋',
        points: -25,
        consequence: {
          title: 'Desonestidade Intelectual',
          description: 'O professor identificou o texto genérico e aplicou nota zero por plágio a ambos os alunos.',
          simplifiedDescription: 'O plágio foi descoberto e ambos ficaram com nota zero.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Prof. Carlos', avatar: '👨🏻‍🏫', text: 'Copiar sem refletir não desenvolve seu pensamento.' }
          ],
          impact: { empathyChange: -40, trustChange: -50, schoolClimateChange: -40 },
          lesson: 'O plágio desrespeita o processo de aprendizagem e destrói o valor do esforço intelectual.',
          simplifiedLesson: 'Copiar trabalhos tira a oportunidade de aprender e tem consequências graves.'
        }
      },
      {
        id: 'c6-7-mediadora',
        text: 'Sugerir que a turma faça uma roda de conversa sobre como usar a IA de forma ética e transparente nos estudos.',
        simplifiedText: 'Propor uma conversa na sala sobre o uso responsável da tecnologia nos estudos.',
        type: 'mediator',
        icon: '💡',
        points: 55,
        consequence: {
          title: 'Debate Construtivo',
          description: 'A turma combinou boas práticas de pesquisa e todos aprenderam a citar fontes corretamente.',
          simplifiedDescription: 'A turma inteira aprendeu a pesquisar com ética.',
          victimEmotion: 'acolhido',
          chatFeedback: [
            { sender: 'Samuel', avatar: '🤖', text: 'Agora entendi a diferença entre pesquisar e simplesmente plagiar.' }
          ],
          impact: { empathyChange: 55, trustChange: 40, schoolClimateChange: 40 },
          lesson: 'A honestidade acadêmica constrói cidadãos éticos e profissionais competentes.',
          simplifiedLesson: 'Aprender com honestidade prepara você para o futuro.'
        }
      }
    ]
  },

  // 6.8
  {
    id: 'cenario-6-8',
    grade: '6',
    gradeLabel: '6º Ano',
    title: 'Criar Perfil Falso para "Fazer Pegadinhas"',
    category: 'Fofocas e Perfis Fake',
    difficulty: 'Intermediário',
    platformType: 'instagram',
    pedagogicalObjective: 'Compreender que criar perfis falsos e usar fotos alheias é crime de falsa identidade e fere a dignidade.',
    context: 'Dois alunos criaram uma conta fake no Instagram usando a foto de um cachorro e começaram a mandar mensagens fingindo ser outra pessoa para enganar os colegas da turma.',
    simplifiedContext: 'Criaram uma conta falsa para mandar mensagens enganando as pessoas da sala.',
    characters: [
      { name: 'Larissa', role: 'Vítima', avatar: '👧🏽' },
      { name: 'Perfil Fake', role: 'Agresor(a)', avatar: '🎭' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c6_8_fake',
        sender: 'Detetive_6Ano_Secreto',
        avatar: '🎭',
        isAggressor: true,
        text: 'Larissa, sei de quem você gosta e vou contar pra escola inteira amanhã se você não me mandar seu caderno de respostas! 😈',
        simplifiedText: 'Sei o seu segredo e vou contar pra todo mundo se não me mandar as respostas da prova!',
        time: '19:30',
        attachment: {
          type: 'post',
          imageUrl: grade6FakeProfileImg,
          content: 'Perfil Fake do Detetive no Instagram',
          caption: 'Conta anônima enviando mensagens diretas com chantagens e ameaças'
        }
      },
      {
        id: 'c6_8_lari',
        sender: 'Larissa',
        avatar: '👧🏽',
        isVictim: true,
        text: 'Gente, quem é essa conta?! Estou desesperada chorando aqui...',
        simplifiedText: 'Quem é essa conta me ameaçando? Estou chorando de medo...',
        time: '19:32'
      }
    ],
    choices: [
      {
        id: 'c6-8-empatica',
        text: 'Acalmar Larissa e agir com firmeza: "Larissa, não mande nada e não responda. Quem usa perfil falso para chantagear é covarde e está cometendo infração grave. Vamos denunciar essa conta no Instagram agora e avisar a coordenação da escola!"',
        simplifiedText: 'Acalmar a amiga, não ceder à chantagem, denunciar a conta falsa e avisar a escola.',
        type: 'empathetic',
        icon: '🛡️',
        points: 65,
        consequence: {
          title: 'Proteção e Desmascaramento',
          description: 'A conta foi banida pelo Instagram. A escola identificou os responsáveis pelo IP e aplicou medidas educativas restaurativas.',
          simplifiedDescription: 'Você protegeu sua amiga da chantagem e a conta falsa foi eliminada.',
          victimEmotion: 'aliviado',
          chatFeedback: [
            { sender: 'Larissa', avatar: '👧🏽', text: 'Você me deu muita coragem! Falei com a minha mãe e a escola resolveu tudo.' }
          ],
          impact: { empathyChange: 65, trustChange: 60, schoolClimateChange: 50 },
          lesson: 'O anonimato na internet não existe de verdade. Crimes e ameaças online deixam rastros digitais e são punidos pela lei.',
          simplifiedLesson: 'Criar perfis falsos para ameaçar ou enganar é muito grave e tem consequências reais.'
        }
      },
      {
        id: 'c6-8-passiva',
        text: 'Dizer para Larissa ceder e mandar as respostas para o fake não contar nada.',
        simplifiedText: 'Dizer para a colega mandar as respostas para a chantagem parar.',
        type: 'passive',
        icon: '🤐',
        points: -20,
        consequence: {
          title: 'Chantagem Contínua',
          description: 'O perfil fake pediu mais coisas e a chantagem piorou a cada dia.',
          simplifiedDescription: 'Ceder à chantagem só fez a pessoa má pedir mais coisas.',
          victimEmotion: 'ansioso',
          chatFeedback: [
            { sender: 'Larissa', avatar: '👧🏽', text: 'Não aguento mais essa pressão...' }
          ],
          impact: { empathyChange: -40, trustChange: -50, schoolClimateChange: -40 },
          lesson: 'Nunca ceda a chantagens virtuais. Romper o silêncio e denunciar é o único caminho para a segurança.',
          simplifiedLesson: 'Nunca aceite chantagens. Conte sempre para a família ou professores.'
        }
      },
      {
        id: 'c6-8-mediadora',
        text: 'Mobilizar a turma para denunciar em massa a conta nas opções do aplicativo como assédio.',
        simplifiedText: 'Pedir a todos os colegas que denunciem a conta falsa no aplicativo.',
        type: 'mediator',
        icon: '🚨',
        points: 55,
        consequence: {
          title: 'Ação Coletiva Rápida',
          description: 'Com mais de 20 denúncias simultâneas, o algoritmo da rede social derrubou o perfil em 15 minutos.',
          simplifiedDescription: 'A união dos alunos derrubou a conta falsa rapidamente.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Instagram Support', avatar: '📱', text: 'A conta denunciada foi removida por violar as Diretrizes da Comunidade.' }
          ],
          impact: { empathyChange: 55, trustChange: 45, schoolClimateChange: 45 },
          lesson: 'A união solidária dos estudantes neutraliza o assédio e protege a comunidade.',
          simplifiedLesson: 'Quando todos se unem contra a maldade, a escola fica muito mais segura.'
        }
      }
    ]
  },

  // 6.9
  {
    id: 'cenario-6-9',
    grade: '6',
    gradeLabel: '6º Ano',
    title: 'Expor Segredos no Status por Vingança',
    category: 'Privacidade e Segredos',
    difficulty: 'Intermediário',
    platformType: 'whatsapp',
    pedagogicalObjective: 'Desenvolver a maturidade emocional para lidar com desentendimentos sem violar segredos íntimos.',
    context: 'Após uma discussão boba sobre quem era o capitão do time de futebol, Caio postou no Status do WhatsApp um segredo de família que Henrique havia lhe contado em sigilo há meses.',
    simplifiedContext: 'Após uma discussão, Caio postou no Status um segredo íntimo de Henrique por vingança.',
    characters: [
      { name: 'Henrique', role: 'Vítima', avatar: '⚽' },
      { name: 'Caio', role: 'Agresor(a)', avatar: '😡' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c6_9_status',
        sender: 'Caio',
        avatar: '😡',
        isAggressor: true,
        text: 'Pra quem acha que o Henrique é perfeitinho, saibam que ele [segredo de família exposto]! Quem é o capitão agora?! 💥',
        simplifiedText: 'Olha o segredo do Henrique pra todo mundo ver quem ele é de verdade!',
        time: '20:10',
        reactions: [{ emoji: '😱', count: 7 }],
        attachment: {
          type: 'image',
          imageUrl: grade6StatusLeakImg,
          content: 'Status Temporário no WhatsApp',
          caption: 'Exposição de segredo íntimo postada por impulso após briga de futebol'
        }
      },
      {
        id: 'c6_9_henri',
        sender: 'Henrique',
        avatar: '⚽',
        isVictim: true,
        text: 'Caio... eu te contei isso chorando no ano passado porque éramos melhores amigos... como você teve coragem?',
        simplifiedText: 'Eu te confiei meu segredo de família... como teve coragem de expor?',
        time: '20:12'
      }
    ],
    choices: [
      {
        id: 'c6-9-empatica',
        text: 'Chamar Caio na mesma hora: "Caio, apague esse status IMEDIATAMENTE! Briga de jogo se resolve conversando cara a cara, nunca traindo a intimidade de um amigo. O que você fez é extremamente cruel e quebra algo sagrado."',
        simplifiedText: 'Mandar apagar o status imediatamente e lembrar que desentendimentos não justificam trair a confiança.',
        type: 'empathetic',
        icon: '🛑',
        points: 60,
        consequence: {
          title: 'Resgate da Ética e Consciência',
          description: 'Caio percebeu a baixeza da sua atitude no impulso da raiva, apagou o status e foi pessoalmente pedir perdão a Henrique.',
          simplifiedDescription: 'O status foi apagado e Caio reconheceu que agiu de forma errada.',
          victimEmotion: 'aliviado',
          chatFeedback: [
            { sender: 'Caio', avatar: '😡', text: 'Apaguei... perdi a cabeça na raiva. Sei que errei feio.' }
          ],
          impact: { empathyChange: 60, trustChange: 45, schoolClimateChange: 40 },
          lesson: 'A confiança depositada em você nunca deve ser usada como arma, mesmo nos momentos de discordância.',
          simplifiedLesson: 'Nunca use os segredos que um amigo te confiou para se vingar.'
        }
      },
      {
        id: 'c6-9-hostil',
        text: 'Tirar print do status e mandar para o grupo da sala comentando a fofoca.',
        simplifiedText: 'Tirar print e espalhar o segredo para outros grupos.',
        type: 'hostile',
        icon: '📸',
        points: -35,
        consequence: {
          title: 'Multiplicação da Dor',
          description: 'A intimidade familiar de Henrique virou fofoca no bairro inteiro, gerando uma dor imensa à família.',
          simplifiedDescription: 'A fofoca se espalhou e causou muita dor à família do colega.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Henrique', avatar: '⚽', text: 'Minha família toda ficou arrasada...' }
          ],
          impact: { empathyChange: -60, trustChange: -65, schoolClimateChange: -50 },
          lesson: 'Espalhar informações privadas de terceiros é uma grave violação ética e humana.',
          simplifiedLesson: 'Guardar segredos alheios é sinal de caráter e respeito.'
        }
      },
      {
        id: 'c6-9-mediadora',
        text: 'Apoiar Henrique emocionalmente e mediar uma conversa restaurativa entre os dois com a ajuda do orientador escolar.',
        simplifiedText: 'Apoiar o amigo e ajudar os dois a conversarem com calma na escola.',
        type: 'mediator',
        icon: '🤝',
        points: 55,
        consequence: {
          title: 'Justiça Restaurativa',
          description: 'Com o apoio da escola, os dois conversaram profundamente sobre os limites da amizade e da raiva.',
          simplifiedDescription: 'A escola mediou uma conversa sincera e a paz foi restabelecida.',
          victimEmotion: 'acolhido',
          chatFeedback: [
            { sender: 'Henrique', avatar: '⚽', text: 'Obrigado por estar ao meu lado nesse momento tão difícil.' }
          ],
          impact: { empathyChange: 55, trustChange: 45, schoolClimateChange: 45 },
          lesson: 'Apoiar a vítima e buscar mediação pacífica cura feridas que o ódio virtual tenta aprofundar.',
          simplifiedLesson: 'Ajudar os amigos a conversarem em paz reconstrói a harmonia.'
        }
      }
    ]
  },

  // 6.10
  {
    id: 'cenario-6-10',
    grade: '6',
    gradeLabel: '6º Ano',
    title: 'Correntes do Medo e Mensagens de Pânico',
    category: 'Cidadania Digital e Pegada Digital',
    difficulty: 'Iniciante',
    platformType: 'whatsapp',
    pedagogicalObjective: 'Combater a desinformação, correntes alarmistas e mensagens ameaçadoras no ambiente escolar.',
    context: 'Uma corrente de texto com ameaças sobrenaturais ("Envie para 15 pessoas em 10 minutos ou algo terrível acontecerá com sua mãe hoje à noite") começou a aterrorizar os alunos mais novos do 6º ano.',
    simplifiedContext: 'Uma mensagem ameaçadora diz que coisas ruins vão acontecer se você não repassar para 15 amigos.',
    characters: [
      { name: 'Paola', role: 'Vítima', avatar: '😨' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c6_10_pao',
        sender: 'Paola',
        avatar: '😨',
        isVictim: true,
        text: 'Gente socorro, recebi essa mensagem horrível dizendo que se eu não mandar pra 15 pessoas minha família vai sofrer um acidente... estou tremendo de medo! 😭😭',
        simplifiedText: 'Recebi uma mensagem dizendo que coisas ruins vão acontecer com minha mãe se eu não repassar... estou com muito medo!',
        time: '21:30',
        attachment: {
          type: 'image',
          imageUrl: grade6ChainLetterImg,
          content: 'Corrente Ameaçadora com Maldição',
          caption: 'Mensagem de medo e pânico exigindo repasse para 15 amigos'
        }
      }
    ],
    choices: [
      {
        id: 'c6-10-empatica',
        text: 'Acalmar Paola imediatamente com carinho e lógica: "Paola, respira funda! Isso é 100% MENTIRA! É uma corrente boba criada por pessoas maldosas na internet só pra assustar crianças. Nada vai acontecer com a sua família. Apague a mensagem, não repasse pra ninguém e durma em paz, tá bom? Estou aqui com você."',
        simplifiedText: 'Acalmar a amiga, explicar que correntes são mentiras para dar medo e que ela pode apagar sem medo.',
        type: 'empathetic',
        icon: '💖',
        points: 60,
        consequence: {
          title: 'Tranquilidade e Esclarecimento',
          description: 'Paola respirou aliviada, apagou a corrente e conseguiu dormir tranquila. Você quebrou o ciclo do medo na turma.',
          simplifiedDescription: 'Você acalmou sua amiga e mostrou que correntes de medo não têm poder nenhum.',
          victimEmotion: 'aliviado',
          chatFeedback: [
            { sender: 'Paola', avatar: '😨', text: 'Muito obrigada! Eu estava quase tendo uma crise de ansiedade... você me acalmou muito!' }
          ],
          impact: { empathyChange: 60, trustChange: 55, schoolClimateChange: 45 },
          lesson: 'Correntes e boatos alarmistas vivem do medo das pessoas. Quebrar a corrente é um ato de maturidade e responsabilidade digital.',
          simplifiedLesson: 'Mensagens que prometem maldições ou prêmios são sempre mentiras. Apague e não repasse.'
        }
      },
      {
        id: 'c6-10-passiva',
        text: 'Repassar para 15 colegas "só por garantia" para não correr o risco.',
        simplifiedText: 'Repassar para outras 15 pessoas por medo.',
        type: 'passive',
        icon: '🔁',
        points: -15,
        consequence: {
          title: 'Espalhamento do Pânico',
          description: 'Mais 15 colegas entraram em pânico durante a noite e mães reclamaram com a escola no dia seguinte.',
          simplifiedDescription: 'O medo se espalhou para mais pessoas da escola.',
          victimEmotion: 'ansioso',
          chatFeedback: [
            { sender: 'Paola', avatar: '😨', text: 'Agora a sala inteira tá em pânico...' }
          ],
          impact: { empathyChange: -30, trustChange: -40, schoolClimateChange: -30 },
          lesson: 'Repassar conteúdos falsos por superstição ou medo amplifica a ansiedade coletiva.',
          simplifiedLesson: 'Nunca repasse correntes que causam medo ou ansiedade.'
        }
      },
      {
        id: 'c6-10-mediadora',
        text: 'Explicar no grupo da sala a história e a psicologia por trás das lendas urbanas da internet para ninguém mais se assustar.',
        simplifiedText: 'Explicar no grupo como essas correntes falsas funcionam para que ninguém mais tenha medo.',
        type: 'mediator',
        icon: '💡',
        points: 55,
        consequence: {
          title: 'Educação Contra o Pânico',
          description: 'A turma inteira aprendeu a identificar e ignorar mensagens do tipo spam/corrente.',
          simplifiedDescription: 'Todos aprenderam a nunca mais repassar mensagens de pânico.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Paola', avatar: '😨', text: 'Agora entendi como funciona. Nunca mais caio nisso!' }
          ],
          impact: { empathyChange: 55, trustChange: 45, schoolClimateChange: 40 },
          lesson: 'O conhecimento e o pensamento crítico são as melhores vacinas contra o medo digital.',
          simplifiedLesson: 'Pensar com calma ajuda a não cair em mentiras na internet.'
        }
      }
    ]
  }
];
