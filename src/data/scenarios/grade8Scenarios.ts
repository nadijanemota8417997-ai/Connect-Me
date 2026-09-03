import { Scenario } from '../../types';
import grade8PollImg from '../../assets/images/grade8_poll_comparison_1787759893629.jpg';
import musicStageImg from '../../assets/images/school_music_stage_1787757012632.jpg';

export const grade8Scenarios: Scenario[] = [
  // 8.1
  {
    id: 'cenario-8-1',
    grade: '8',
    gradeLabel: '8º Ano',
    title: 'A Enquete das "Mais Bonitas e Mais Feias"',
    category: 'Ataques em Redes Sociais',
    difficulty: 'Intermediário',
    platformType: 'instagram',
    pedagogicalObjective: 'Conscientizar sobre os impactos destrutivos do body shaming, objetificação e julgamento de aparência.',
    context: 'Um perfil anônimo nos Stories do Instagram colocou fotos de alunas do 8º ano lado a lado para o público votar em quem era "Mais Bonita" e quem era "Feia".',
    simplifiedContext: 'Fizeram uma enquete no Instagram comparando a aparência das meninas e elegendo quem era "mais feia".',
    characters: [
      { name: 'Letícia', role: 'Vítima', avatar: '👧🏽' },
      { name: 'Conta Anônima', role: 'Agresor(a)', avatar: '🎭' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c8_1_poll',
        sender: 'Stories Anônimo 8º Ano',
        avatar: '🎭',
        isAggressor: true,
        text: 'BATALHA DE BELEZA DO 8º ANO! Votem quem tem que mudar de rosto urgente! 💀',
        simplifiedText: 'Enquete comparando a aparência das alunas da sala.',
        time: '20:00',
        attachment: {
          type: 'poll',
          imageUrl: grade8PollImg,
          content: 'Enquete comparando fotos de alunas',
          caption: 'Quem é mais bonita? 78% vs 22%'
        },
        reactions: [{ emoji: '😱', count: 15 }]
      },
      {
        id: 'c8_1_leti',
        sender: 'Letícia',
        avatar: '👧🏽',
        isVictim: true,
        text: 'Eu passei o ano inteiro lutando contra a minha insegurança com o meu corpo... ver a escola inteira votando na minha foto me destruiu por dentro... 😭💔',
        simplifiedText: 'Eu já era insegura com meu corpo... ver todo mundo votando na minha foto me destruiu por dentro...',
        time: '20:05'
      }
    ],
    choices: [
      {
        id: 'c8-1-empatica',
        text: 'Reagir publicamente denunciando o perfil: "Essa enquete é nojenta, covarde e desumana! Pessoas não são mercadorias para receberem notas de aparência. A Letícia e todas as meninas são lindas, inteligentes e dignas de respeito. Parem de votar e denunciem essa conta agora!"',
        simplifiedText: 'Denunciar a enquete publicamente, acolher as colegas e lembrar que ninguém deve ser avaliado pela aparência.',
        type: 'empathetic',
        icon: '🛑',
        points: 65,
        consequence: {
          title: 'Defesa da Autoestima e Combate à Objetificação',
          description: 'A mobilização foi tão forte que dezenas de alunos deixaram de seguir a página e a denunciaram até ser derrubada.',
          simplifiedDescription: 'Você liderou a defesa das colegas e a conta maldosa foi eliminada da rede.',
          victimEmotion: 'acolhida',
          chatFeedback: [
            { sender: 'Letícia', avatar: '👧🏽', text: 'Você não imagina o quanto suas palavras me acolheram... Muito obrigada por ter coragem de nos defender!' }
          ],
          impact: { empathyChange: 65, trustChange: 60, schoolClimateChange: 50 },
          lesson: 'Rankings e julgamentos de aparência destroem a saúde mental. A beleza humana é plural e não cabe em enquetes virtuais.',
          simplifiedLesson: 'Nunca compare nem dê notas para a aparência das pessoas. Cada pessoa é única e valiosa.'
        }
      },
      {
        id: 'c8-1-passiva',
        text: 'Votar na amiga só para ajudá-la a ter mais porcentagem na enquete.',
        simplifiedText: 'Votar na amiga para ela não ficar com porcentagem baixa.',
        type: 'passive',
        icon: '🗳️',
        points: -10,
        consequence: {
          title: 'Validação da Crueldade',
          description: 'Ao votar, você deu engajamento para o agressor, que criou mais três enquetes humilhantes no dia seguinte.',
          simplifiedDescription: 'Votar na enquete só aumentou o alcance da humilhação.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Letícia', avatar: '👧🏽', text: 'Até meus amigos estão participando desse ranking...' }
          ],
          impact: { empathyChange: -20, trustChange: -35, schoolClimateChange: -30 },
          lesson: 'Participar de enquetes ofensivas, mesmo com boa intenção, valida e impulsiona o assédio.',
          simplifiedLesson: 'Não vote nem interaja com enquetes que julgam a aparência alheia.'
        }
      },
      {
        id: 'c8-1-mediadora',
        text: 'Criar uma corrente de publicações valorizando os talentos, inteligência e gentilezas de cada estudante da sala.',
        simplifiedText: 'Criar publicações elogiando as qualidades e talentos reais de todos os colegas.',
        type: 'mediator',
        icon: '✨',
        points: 60,
        consequence: {
          title: 'Corrente de Empatia Positiva',
          description: 'A turma inundou as redes com homenagens sinceras sobre as amizades e virtudes de cada um.',
          simplifiedDescription: 'A corrente de carinho e respeito transformou o ambiente da escola.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Letícia', avatar: '👧🏽', text: 'Recebi mensagens tão lindas dos meus colegas! Me sinto muito mais forte!' }
          ],
          impact: { empathyChange: 60, trustChange: 55, schoolClimateChange: 50 },
          lesson: 'Exaltar o valor humano e a essência interior anula a superficialidade do mundo digital.',
          simplifiedLesson: 'Valorizar os talentos e o coração das pessoas traz verdadeira felicidade.'
        }
      }
    ]
  },

  // 8.2
  {
    id: 'cenario-8-2',
    grade: '8',
    gradeLabel: '8º Ano',
    title: 'A Apresentação no Show de Talentos Distorcida',
    category: 'Memes e Fotos Vazadas',
    difficulty: 'Intermediário',
    platformType: 'tiktok',
    pedagogicalObjective: 'Combater a ridicularização de manifestações artísticas e vulnerabilidades expressivas dos colegas.',
    context: 'Arthur tocou violão e cantou no Show de Talentos da escola. Um grupo gravou, colocou efeitos de voz de galinha e filtros grotescos para viralizar no TikTok às custas dele.',
    simplifiedContext: 'Gravaram Arthur cantando no show de talentos, colocaram efeitos cômicos para zoar e postaram no TikTok.',
    characters: [
      { name: 'Arthur', role: 'Vítima', avatar: '🎸' },
      { name: 'Editor Maldoso', role: 'Agresor(a)', avatar: '🎬' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c8_2_art',
        sender: 'Editor Maldoso',
        avatar: '🎬',
        isAggressor: true,
        text: 'O NOVO FENÔMENO DA MÚSICA DESAFINADA KKKKK Assistam o remix com voz de galinha! 🐔🎶',
        simplifiedText: 'Olha o vídeo zoando o Arthur cantando com voz de galinha kkkk',
        time: '18:15',
        attachment: {
          type: 'image',
          imageUrl: musicStageImg,
          content: 'Foto do palco com filtros deformantes',
          caption: 'Remix ridicularizante no TikTok'
        },
        reactions: [{ emoji: '😂', count: 12 }]
      },
      {
        id: 'c8_2_arthur',
        sender: 'Arthur',
        avatar: '🎸',
        isVictim: true,
        text: 'Passei meses ensaiando para vencer minha timidez... tive tanta coragem de subir naquele palco... por que as pessoas têm que ser tão más? 😔',
        simplifiedText: 'Tive tanta coragem de subir no palco pra cantar... por que as pessoas são tão cruéis?',
        time: '18:18'
      }
    ],
    choices: [
      {
        id: 'c8-2-empatica',
        text: 'Apoiar Arthur de público: "Arthur, você foi incrivelmente corajoso e tocou com o coração! É muito fácil ficar na plateia gravando para zombar quando não se tem talento nem coragem de subir no palco. Você arrasou e somos seus fãs!" e denunciar o vídeo por assédio.',
        simplifiedText: 'Elogiar a coragem de Arthur, valorizar a apresentação e defender que quem sobe no palco merece aplausos, não deboche.',
        type: 'empathetic',
        icon: '👏',
        points: 65,
        consequence: {
          title: 'Valorização da Coragem e Expressão',
          description: 'Seu apoio fez a escola inteira aplaudir Arthur. O autor da montagem foi repreendido e Arthur continuou tocando.',
          simplifiedDescription: 'Você valorizou o talento do colega e calou os que estavam zombando.',
          victimEmotion: 'acolhido',
          chatFeedback: [
            { sender: 'Arthur', avatar: '🎸', text: 'Suas palavras me devolveram a vontade de tocar. Muito obrigado por estar comigo!' }
          ],
          impact: { empathyChange: 65, trustChange: 55, schoolClimateChange: 50 },
          lesson: 'Subir em um palco exige bravura. Apoiar os sonhos e vulnerabilidades dos amigos é o maior gesto de nobreza.',
          simplifiedLesson: 'Respeite e apoie quem tem coragem de mostrar sua arte e seus sentimentos.'
        }
      },
      {
        id: 'c8-2-hostil',
        text: 'Comentar no vídeo zombando da afinação dele para ganhar seguidores.',
        simplifiedText: 'Comentar zombando da voz dele no vídeo.',
        type: 'hostile',
        icon: '🐔',
        points: -35,
        consequence: {
          title: 'Destruição da Confiança Artística',
          description: 'Arthur guardou o violão no armário e nunca mais quis cantar ou tocar.',
          simplifiedDescription: 'O amigo desistiu da música por vergonha das ofensas.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Arthur', avatar: '🎸', text: 'Nunca mais toco na minha vida...' }
          ],
          impact: { empathyChange: -55, trustChange: -60, schoolClimateChange: -50 },
          lesson: 'Destruir a expressão artística de alguém com deboche é uma violência que apaga potenciais talentos.',
          simplifiedLesson: 'Nunca zombe de quem está tentando aprender ou se expressar.'
        }
      },
      {
        id: 'c8-2-mediadora',
        text: 'Convidar Arthur para formar uma banda na escola e tocar no próximo festival estudantil.',
        simplifiedText: 'Convidar o amigo para tocar juntos e valorizar a música dele.',
        type: 'mediator',
        icon: '🎶',
        points: 60,
        consequence: {
          title: 'União Musical e Superação',
          description: 'O grupo musical foi formado e fez uma apresentação espetacular na feira de ciências da escola.',
          simplifiedDescription: 'A parceria musical deu muito certo e virou um sucesso escolar.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Arthur', avatar: '🎸', text: 'Formar essa banda foi a melhor coisa do ano!' }
          ],
          impact: { empathyChange: 60, trustChange: 50, schoolClimateChange: 45 },
          lesson: 'Unir esforços e talentos transforma a dor da rejeição em arte e companheirismo.',
          simplifiedLesson: 'Fazer projetos com amigos transforma momentos tristes em vitórias.'
        }
      }
    ]
  },

  // 8.3
  {
    id: 'cenario-8-3',
    grade: '8',
    gradeLabel: '8º Ano',
    title: 'Rede Wi-Fi Pública Falsa e Interceptação de Senhas',
    category: 'Segurança e Senhas',
    difficulty: 'Avançado',
    platformType: 'whatsapp',
    pedagogicalObjective: 'Compreender os riscos de redes Wi-Fi públicas falsas (Evil Twin / Man-in-the-Middle), interceptação de tráfego e proteção de senhas.',
    context: 'Em uma lanchonete ao lado da escola, Marcela se conectou a uma rede aberta chamada "Wi-Fi_Lanchonete_Gratis_Livre". Uma página falsa pediu que ela fizesse login com seu e-mail e senha para liberar a navegação. Minutos depois, ela perdeu o acesso às suas contas.',
    simplifiedContext: 'Marcela se conectou a um Wi-Fi público falso sem senha e digitou seu e-mail e senha em uma página enganosa, tendo suas contas invadidas.',
    characters: [
      { name: 'Marcela', role: 'Vítima', avatar: '📱' },
      { name: 'Falso Provedor Wi-Fi', role: 'Agresor(a)', avatar: '🌐' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c8_3_wifi',
        sender: 'Portal Wi-Fi Livre',
        avatar: '🌐',
        isAggressor: true,
        text: 'ACESSO LIBERADO: Para navegar em alta velocidade, informe o e-mail e a senha da sua conta de rede social na página de validação!',
        simplifiedText: 'Página falsa de Wi-Fi pedindo e-mail e senha para liberar a internet.',
        time: '17:15'
      },
      {
        id: 'c8_3_marce',
        sender: 'Marcela',
        avatar: '📱',
        isVictim: true,
        text: 'Gente, coloquei meu e-mail e senha naquela página de Wi-Fi e agora deslogou de tudo! Tão tentando trocar minha senha e não consigo mais entrar! O que eu faço?! 😭😭',
        simplifiedText: 'Coloquei minha senha no Wi-Fi grátis e agora invadiram todas as minhas contas! Socorro!',
        time: '17:18'
      }
    ],
    choices: [
      {
        id: 'c8-3-empatica',
        text: 'Agir com rapidez técnica e suporte: "Marcela, desconecte desse Wi-Fi AGORA! Essa rede é uma armadilha hacker para roubar dados (ataque de interceptação)! Use os dados móveis 4G/5G do seu celular imediatamente, entre na página oficial de recuperação de conta, redefina todas as suas senhas, clique em \'Desconectar de todos os dispositivos\' e ative a autenticação em duas etapas (2FA)! Eu te ajudo em cada passo!"',
        simplifiedText: 'Mandar desconectar do Wi-Fi na hora, usar os dados móveis para redefinir as senhas, deslogar invasores e ativar a verificação em duas etapas.',
        type: 'empathetic',
        icon: '🛡️',
        points: 70,
        consequence: {
          title: 'Bloqueio de Invasão e Recuperação de Acesso',
          description: 'Marcela desconectou da rede falsa, usou os dados móveis para recuperar o acesso às contas e ativou a verificação em duas etapas, expulsando o invasor.',
          simplifiedDescription: 'Você agiu rápido com segurança digital e impediu que as contas da sua amiga fossem roubadas.',
          victimEmotion: 'aliviado',
          chatFeedback: [
            { sender: 'Marcela', avatar: '📱', text: 'Consegui redefinir tudo pelos dados móveis e coloquei autenticação em duas etapas! Muito obrigada pela ajuda rápida!' }
          ],
          impact: { empathyChange: 70, trustChange: 65, schoolClimateChange: 55 },
          lesson: 'Redes Wi-Fi públicas sem senha podem ser criadas por cibercriminosos para interceptar senhas e mensagens. Nunca insira credenciais em páginas de Wi-Fi desconhecidas e use sempre autenticação em dois fatores.',
          simplifiedLesson: 'Nunca digite senhas em redes Wi-Fi públicas sem senha. Use dados móveis para acessar contas importantes.'
        }
      },
      {
        id: 'c8-3-passiva',
        text: 'Dizer para ela esperar chegar em casa mais tarde para ver se a internet volta ao normal.',
        simplifiedText: 'Dizer para esperar chegar em casa e não fazer nada agora.',
        type: 'passive',
        icon: '⏳',
        points: -30,
        consequence: {
          title: 'Perda Total de Contas Digitais',
          description: 'Com a demora para reagir, o invasor alterou o e-mail de recuperação e o número de telefone, roubando permanentemente as contas de Marcela.',
          simplifiedDescription: 'A demora fez a colega perder o acesso definitivo às suas contas.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Marcela', avatar: '📱', text: 'O invasor mudou o número de telefone e perdi minha conta pra sempre...' }
          ],
          impact: { empathyChange: -50, trustChange: -60, schoolClimateChange: -45 },
          lesson: 'Incidentes de segurança digital exigem resposta imediata. Quanto mais tempo se espera, maior o controle que o invasor ganha sobre as contas.',
          simplifiedLesson: 'Ao suspeitar de invasão de conta, troque as senhas imediatamente sem esperar.'
        }
      },
      {
        id: 'c8-3-mediadora',
        text: 'Ajudar Marcela a registrar um alerta na coordenação da escola para avisar os outros alunos sobre a rede falsa nos arredores e ensinar a turma sobre redes seguras.',
        simplifiedText: 'Avisar a escola sobre a rede falsa e compartilhar dicas de navegação segura com os colegas.',
        type: 'mediator',
        icon: '📢',
        points: 65,
        consequence: {
          title: 'Proteção Coletiva contra Redes Falsas',
          description: 'A escola emitiu um comunicado alertando os estudantes sobre redes não oficiais nos arredores da instituição.',
          simplifiedDescription: 'O alerta coletivo evitou que outros colegas caíssem na mesma armadilha.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Marcela', avatar: '📱', text: 'O aviso na escola ajudou vários amigos que estavam prestes a conectar nessa rede falsa!' }
          ],
          impact: { empathyChange: 65, trustChange: 55, schoolClimateChange: 50 },
          lesson: 'Compartilhar alertas sobre ameaças cibernéticas protege toda a comunidade escolar.',
          simplifiedLesson: 'Avisar os colegas sobre armadilhas na internet protege todo mundo.'
        }
      }
    ]
  },

  // 8.4
  {
    id: 'cenario-8-4',
    grade: '8',
    gradeLabel: '8º Ano',
    title: 'O Golpe do Falso Jovem Aprendiz no WhatsApp',
    category: 'Golpes e Phishing',
    difficulty: 'Intermediário',
    platformType: 'whatsapp',
    pedagogicalObjective: 'Identificar fraudes com promessas de empregos mirabolantes e proteção de documentos de menores de idade.',
    context: 'Rafael recebeu uma mensagem prometendo salário de R$ 2.500 como "Jovem Aprendiz Home Office", pedindo foto frente e verso do RG, CPF e uma taxa de inscrição de R$ 80 via Pix.',
    simplifiedContext: 'Uma mensagem no WhatsApp promete emprego de R$ 2.500 para jovens se pagarem uma taxa de R$ 80 no Pix e mandarem fotos dos documentos.',
    characters: [
      { name: 'Rafael', role: 'Vítima', avatar: '💼' },
      { name: 'Empresa Fake', role: 'Agresor(a)', avatar: '🏢' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c8_4_vaga',
        sender: 'Vagas_Jovem_Oficial_BR',
        avatar: '🏢',
        isAggressor: true,
        text: 'CONTRATAÇÃO IMEDIATA! Vagas para estudantes do 8º e 9º ano. Salário R$ 2.500 + Notebook grátis. Pague a taxa de material de R$ 80 no Pix e mande fotos dos seus documentos agora!',
        simplifiedText: 'Vaga de R$ 2.500 para estudantes! Pague taxa de R$ 80 no Pix e mande fotos dos documentos.',
        time: '15:30'
      },
      {
        id: 'c8_4_rafa',
        sender: 'Rafael',
        avatar: '💼',
        isVictim: true,
        text: 'Nossa galera, vou poder ajudar minha família a pagar as contas! Vou pedir o Pix pro meu pai agora!',
        simplifiedText: 'Vou pagar o Pix pra começar a trabalhar e ajudar meus pais!',
        time: '15:33'
      }
    ],
    choices: [
      {
        id: 'c8-4-empatica',
        text: 'Alertar Rafael com responsabilidade social: "Rafa, segura o Pix! É um golpe de estelionato que atinge famílias humildes! Vagas de Jovem Aprendiz verdadeiras NUNCA cobram taxas para processo seletivo e os salários de menor aprendiz são regulados pela lei. Além disso, se você mandar seus documentos, eles vão abrir contas falsas no seu nome. Consulte vagas apenas em órgãos oficiais como CIEE e Nube!"',
        simplifiedText: 'Explicar que processos seletivos nunca cobram taxas, que é um golpe para roubar dinheiro e documentos, e indicar os canais oficiais como CIEE.',
        type: 'empathetic',
        icon: '🛡️',
        points: 60,
        consequence: {
          title: 'Prevenção Contra Estelionato e Roubo de Identidade',
          description: 'Rafael não fez o Pix e não enviou seus documentos. Juntos, vocês pesquisaram programas reais de iniciação profissional.',
          simplifiedDescription: 'Você salvou seu amigo de perder o dinheiro e ter seus dados roubados por criminosos.',
          victimEmotion: 'aliviado',
          chatFeedback: [
            { sender: 'Rafael', avatar: '💼', text: 'Meu pai quase transferiu o dinheiro do aluguel! Você salvou a nossa família de uma roubada gigante!' }
          ],
          impact: { empathyChange: 60, trustChange: 55, schoolClimateChange: 45 },
          lesson: 'Nenhum processo seletivo ético cobra dinheiro dos candidatos. Desconfie de salários incompatíveis e sempre busque instituições renomadas (CIEE, SENAI, Escolas Técnicas).',
          simplifiedLesson: 'Nunca pague para trabalhar nem mande fotos de documentos para vagas em aplicativos de mensagem.'
        }
      },
      {
        id: 'c8-4-passiva',
        text: 'Dizer para ele mandar os dados para ver se o notebook chega mesmo.',
        simplifiedText: 'Dizer para tentar e ver se ganha o notebook.',
        type: 'passive',
        icon: '📦',
        points: -15,
        consequence: {
          title: 'Fraude Financeira Consumada',
          description: 'O dinheiro foi roubado e criminosos usaram os dados de Rafael para aplicar novos golpes na internet.',
          simplifiedDescription: 'A família perdeu dinheiro e os dados do jovem foram usados em fraudes.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Rafael', avatar: '💼', text: 'Perdemos R$ 80 e estão ligando cobrando dívidas no meu CPF...' }
          ],
          impact: { empathyChange: -30, trustChange: -40, schoolClimateChange: -30 },
          lesson: 'A omissão diante de fraudes óbvias gera prejuízos profundos para famílias vulneráveis.',
          simplifiedLesson: 'Avise sempre que uma oferta parecer boa demais para ser verdade.'
        }
      },
      {
        id: 'c8-4-mediadora',
        text: 'Apresentar para a turma como funciona a Lei da Aprendizagem e como se cadastrar com segurança nas plataformas oficiais gratuitas.',
        simplifiedText: 'Ensinar aos colegas como funcionam os programas oficiais e seguros de Jovem Aprendiz.',
        type: 'mediator',
        icon: '📖',
        points: 55,
        consequence: {
          title: 'Educação para o Mundo do Trabalho',
          description: 'A turma aprendeu sobre seus direitos trabalhistas e como se proteger no mercado de trabalho.',
          simplifiedDescription: 'Todos os alunos aprenderam como ingressar no mercado de trabalho de forma segura.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Rafael', avatar: '💼', text: 'Agora me cadastrei no CIEE de verdade e com segurança!' }
          ],
          impact: { empathyChange: 55, trustChange: 45, schoolClimateChange: 40 },
          lesson: 'Conhecer a legislação protege os jovens trabalhadores de abusos e fraudes.',
          simplifiedLesson: 'Conhecer seus direitos protege você de armadilhas no mercado de trabalho.'
        }
      }
    ]
  },

  // 8.5
  {
    id: 'cenario-8-5',
    grade: '8',
    gradeLabel: '8º Ano',
    title: 'Filtros Irreais e Pressão Estética no Feed',
    category: 'Saúde Mental e Autoimagem',
    difficulty: 'Intermediário',
    platformType: 'instagram',
    pedagogicalObjective: 'Desenvolver a desconstrução da perfeição ilusória nas redes sociais e fortalecer a autoaceitação.',
    context: 'Giovanna passou a usar filtros pesados que deformavam seu nariz e pele em todas as fotos e começou a deixar de comer no almoço por se achar "feia comparada às blogueiras do feed".',
    simplifiedContext: 'Giovanna começou a usar filtros exagerados e a recusar comida por achar que seu corpo não é igual ao das blogueiras.',
    characters: [
      { name: 'Giovanna', role: 'Vítima', avatar: '💄' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c8_5_gio',
        sender: 'Giovanna',
        avatar: '💄',
        isVictim: true,
        text: 'Eu odeio meu rosto real sem filtro... se eu pudesse, nunca mais saía de casa sem maquiagem e sem editar minhas fotos 😞 Olho o Instagram dessas meninas e me sinto horrível.',
        simplifiedText: 'Me sinto horrível vendo a vida perfeita e os rostos das meninas no Instagram...',
        time: '19:40'
      }
    ],
    choices: [
      {
        id: 'c8-5-empatica',
        text: 'Acolher Giovanna com profunda empatia: "Gi, o mural do Instagram é uma vitrine de mentiras e edições! Ninguém acorda sem poros, sem espinhas e com a pele de plástico. As pessoas usam iluminação de estúdio, retoques digitais e poses estudadas. A sua beleza real é única, autêntica e muito mais especial do que qualquer filtro genérico. Vamos fazer uma pausa das redes e cuidar do seu bem-estar!"',
        simplifiedText: 'Lembrar que as redes sociais mostram vidas editadas e falsas, e valorizar a beleza real e a saúde da amiga.',
        type: 'empathetic',
        icon: '💖',
        points: 65,
        consequence: {
          title: 'Desconstrução da Dismorfia e Amor Próprio',
          description: 'Giovanna se emocionou, reduziu o tempo nas redes sociais e voltou a se alimentar com saúde e tranquilidade.',
          simplifiedDescription: 'Você ajudou sua amiga a se amar como é e a se livrar da pressão estética das redes.',
          victimEmotion: 'acolhida',
          chatFeedback: [
            { sender: 'Giovanna', avatar: '💄', text: 'Eu precisava tanto ouvir isso... Estava me torturando por causa de fotos editadas no computador. Obrigada por me valorizar!' }
          ],
          impact: { empathyChange: 65, trustChange: 60, schoolClimateChange: 50 },
          lesson: 'As redes sociais lucram vendendo padrões inatingíveis. A beleza verdadeira reside na diversidade e na saúde do corpo real.',
          simplifiedLesson: 'Não se compare com fotos da internet. Elas são editadas e não mostram a vida de verdade.'
        }
      },
      {
        id: 'c8-5-hostil',
        text: 'Indicar novos aplicativos de edição de fotos para ela afinar a cintura e esconder o rosto.',
        simplifiedText: 'Indicar aplicativos de retoque para ela editar ainda mais o corpo.',
        type: 'hostile',
        icon: '📱',
        points: -30,
        consequence: {
          title: 'Aprofundamento do Transtorno de Imagem',
          description: 'Giovanna desenvolveu um transtorno alimentar severo e precisou de internação médica.',
          simplifiedDescription: 'A amiga ficou ainda mais doente e insegura com a própria aparência.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Giovanna', avatar: '💄', text: 'Não consigo mais me olhar no espelho...' }
          ],
          impact: { empathyChange: -50, trustChange: -60, schoolClimateChange: -45 },
          lesson: 'Alimentar inseguranças estéticas pode desencadear transtornos psicológicos e físicos gravíssimos.',
          simplifiedLesson: 'Incentivar padrões irreais prejudica gravemente a saúde das pessoas.'
        }
      },
      {
        id: 'c8-5-mediadora',
        text: 'Propor um desafio na turma de postar fotos espontâneas, sem filtros e celebrando momentos reais com sorrisos sinceros.',
        simplifiedText: 'Propor postar fotos naturais e sem filtros valorizando momentos divertidos.',
        type: 'mediator',
        icon: '📸',
        points: 55,
        consequence: {
          title: 'Movimento Corpo Real',
          description: 'A turma aderiu ao movimento e o ambiente virtual da escola se tornou muito mais saudável e leve.',
          simplifiedDescription: 'A escola inteira abraçou a autenticidade e a naturalidade.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Giovanna', avatar: '💄', text: 'Postei minha foto sem filtro e me senti tão livre!' }
          ],
          impact: { empathyChange: 55, trustChange: 45, schoolClimateChange: 45 },
          lesson: 'Normalizar a realidade liberta as pessoas das amarras da comparação tóxica.',
          simplifiedLesson: 'Viver de forma natural e autêntica traz paz e liberdade.'
        }
      }
    ]
  },

  // 8.6
  {
    id: 'cenario-8-6',
    grade: '8',
    gradeLabel: '8º Ano',
    title: 'Golpe do Código SMS / Invasão de Conta do WhatsApp',
    category: 'Segurança e Senhas',
    difficulty: 'Intermediário',
    platformType: 'whatsapp',
    pedagogicalObjective: 'Compreender a importância do segundo fator de autenticação (2FA) e nunca compartilhar códigos SMS.',
    context: 'Lucas recebeu uma mensagem de um suposto "organizador de festas da escola" pedindo um código de 6 dígitos que chegou por SMS para confirmar o nome dele na lista VIP.',
    simplifiedContext: 'Pediram para Lucas passar o código de 6 dígitos que chegou por SMS no celular dele.',
    characters: [
      { name: 'Lucas', role: 'Vítima', avatar: '🎟️' },
      { name: 'Golpista SMS', role: 'Agresor(a)', avatar: '📱' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c8_6_sms',
        sender: 'Festa_Teen_VIP',
        avatar: '📱',
        isAggressor: true,
        text: 'Olá Lucas! Para confirmar seu ingresso VIP na festa do 8º ano, informe o código de 6 dígitos que acabou de chegar no seu SMS!',
        simplifiedText: 'Passe o código de 6 números do seu SMS para confirmar seu ingresso da festa.',
        time: '16:10'
      },
      {
        id: 'c8_6_luc',
        sender: 'Lucas',
        avatar: '🎟️',
        isVictim: true,
        text: 'Chegou um código aqui do WhatsApp dizendo "Não compartilhe", vou passar pro cara da festa pra garantir meu ingresso!',
        simplifiedText: 'Vou passar o código que chegou pro organizador da festa!',
        time: '16:12'
      }
    ],
    choices: [
      {
        id: 'c8-6-empatica',
        text: 'Gritar no chat com ele: "Lucas, NÃO PASSE ESSE CÓDIGO! É o código de verificação do seu WhatsApp! Se você passar, o golpista vai roubar sua conta, pedir dinheiro para todos os seus contatos e você vai perder o acesso! Ative a verificação em duas etapas agora no aplicativo!"',
        simplifiedText: 'Avisar que o código de SMS é a chave da conta do WhatsApp e que passá-lo vai fazer ele ser hackeado.',
        type: 'empathetic',
        icon: '🛡️',
        points: 60,
        consequence: {
          title: 'Proteção da Conta e dos Contatos',
          description: 'Lucas apagou a mensagem do golpista, ativou o PIN de 2 fatores e protegeu toda a sua lista de amigos e familiares.',
          simplifiedDescription: 'Você impediu que a conta do amigo fosse roubada por criminosos.',
          victimEmotion: 'aliviado',
          chatFeedback: [
            { sender: 'Lucas', avatar: '🎟️', text: 'Nossa mano, vi aqui que o código era do próprio WhatsApp! Quase entreguei minha conta de bandeja!' }
          ],
          impact: { empathyChange: 60, trustChange: 55, schoolClimateChange: 45 },
          lesson: 'Códigos enviados por SMS são chaves de segurança estritamente confidenciais. Nenhuma empresa séria solicita esses códigos por mensagens.',
          simplifiedLesson: 'Nunca compartilhe códigos que chegam por SMS com ninguém.'
        }
      },
      {
        id: 'c8-6-passiva',
        text: 'Não falar nada e esperar para ver se a festa é legal.',
        simplifiedText: 'Não avisar nada e esperar.',
        type: 'passive',
        icon: '😶',
        points: -10,
        consequence: {
          title: 'WhatsApp Clonado',
          description: 'O golpista invadiu o WhatsApp de Lucas e pediu R$ 500 no Pix para a avó dele, que caiu no golpe.',
          simplifiedDescription: 'A conta foi roubada e a família sofreu prejuízo financeiro.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Lucas', avatar: '🎟️', text: 'Minha avó mandou R$ 500 achando que era eu pedindo... que desespero!' }
          ],
          impact: { empathyChange: -25, trustChange: -35, schoolClimateChange: -30 },
          lesson: 'Alertar sobre procedimentos de segurança digital protege toda a sua rede de relações.',
          simplifiedLesson: 'Avise seus amigos sobre golpes para proteger as famílias de prejuízos.'
        }
      },
      {
        id: 'c8-6-mediadora',
        text: 'Ensinar Lucas a configurar a confirmação em duas etapas (PIN de segurança) em todas as redes sociais.',
        simplifiedText: 'Ajudar a colocar senha de duas etapas para blindar a segurança de todos os aplicativos.',
        type: 'mediator',
        icon: '🔑',
        points: 55,
        consequence: {
          title: 'Blindagem de Segurança',
          description: 'Lucas blindou suas contas com senhas fortes e autenticação em duas etapas.',
          simplifiedDescription: 'Todas as contas do colega ficaram 100% protegidas.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Lucas', avatar: '🎟️', text: 'Coloquei verificação em duas etapas em tudo agora!' }
          ],
          impact: { empathyChange: 55, trustChange: 45, schoolClimateChange: 40 },
          lesson: 'A autenticação em dois fatores é a barreira mais eficiente contra invasões de contas.',
          simplifiedLesson: 'Ative a verificação em duas etapas para nunca ser hackeado.'
        }
      }
    ]
  },

  // 8.7
  {
    id: 'cenario-8-7',
    grade: '8',
    gradeLabel: '8º Ano',
    title: 'Vazamento de Dados Pessoais (Doxxing) em Fórum',
    category: 'Privacidade e Segredos',
    difficulty: 'Avançado',
    platformType: 'discord',
    pedagogicalObjective: 'Conscientizar sobre a gravidade do Doxxing (vazamento intencional de dados privados) e amparo da LGPD.',
    context: 'Após uma discussão sobre política em um fórum, um usuário publicou o endereço residencial completo, o telefone dos pais e a foto da fachada da casa de Rodrigo para incentivar ameaças presenciais.',
    simplifiedContext: 'Publicaram o endereço da casa e o telefone dos pais de Rodrigo na internet para intimidá-lo.',
    characters: [
      { name: 'Rodrigo', role: 'Vítima', avatar: '🏠' },
      { name: 'Doxxer Agressor', role: 'Agresor(a)', avatar: '🌐' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c8_7_doxx',
        sender: 'Doxxer Agressor',
        avatar: '🌐',
        isAggressor: true,
        text: 'Para quem quiser fazer uma visitinha pro espertinho: Rodrigo [Sobrenome], mora na Rua X nº 45, bairro Y. Telefone da mãe: (11) 9XXXX-XXXX. Aproveitem!',
        simplifiedText: 'Vazou o endereço completo e telefone da mãe do colega no fórum.',
        time: '22:00'
      },
      {
        id: 'c8_7_rodri',
        sender: 'Rodrigo',
        avatar: '🏠',
        isVictim: true,
        text: 'Minha mãe tá recebendo trotes com ameaças no telefone... meus pais estão apavorados... isso passou de todos os limites! 😭😭',
        simplifiedText: 'Estão ligando fazendo ameaças pra minha mãe... estamos com muito medo!',
        time: '22:05'
      }
    ],
    choices: [
      {
        id: 'c8-7-empatica',
        text: 'Agir com rigor legal e suporte emergencial: "Rodrigo, isso é VAZAMENTO ILEGAL DE DADOS e CRIME GRAVE previsto na Lei Geral de Proteção de Dados e Código Penal! Vamos salvar as capturas de tela com data e hora para lavrar Boletim de Ocorrência na Delegacia de Crimes Eletrônicos. Denunciem a mensagem na conversa agora para a moderação apagar com urgência!"',
        simplifiedText: 'Salvar as provas para a polícia de crimes digitais, denunciar para a plataforma apagar os dados na hora e apoiar a família.',
        type: 'empathetic',
        icon: '🚨',
        points: 70,
        consequence: {
          title: 'Resposta Jurídica e Proteção Familiar',
          description: 'A moderação removeu a publicação em minutos e a polícia civil rastreou a conexão do criminoso, abrindo processo legal.',
          simplifiedDescription: 'Você agiu com inteligência jurídica e protegeu a segurança da família do colega.',
          victimEmotion: 'aliviado',
          chatFeedback: [
            { sender: 'Rodrigo', avatar: '🏠', text: 'A polícia identificou o autor pelo endereço digital graças às capturas organizadas que você me ajudou a fazer. Minha família está muito grata!' }
          ],
          impact: { empathyChange: 70, trustChange: 65, schoolClimateChange: 55 },
          lesson: 'O vazamento criminoso de dados pessoais é uma violação grave de segurança física e jurídica. Dados privados são protegidos por lei e nunca podem ser usados como instrumentos de coação.',
          simplifiedLesson: 'Vazar dados de alguém na internet é crime grave. A lei pune os responsáveis.'
        }
      },
      {
        id: 'c8-7-hostil',
        text: 'Espalhar o print para outros grupos para mostrar como o fórum é perigoso.',
        simplifiedText: 'Repassar o endereço para outros grupos.',
        type: 'hostile',
        icon: '⚠️',
        points: -40,
        consequence: {
          title: 'Exposição Multiplicada',
          description: 'O número de trotes e ameaças quadruplicou, forçando a família a trocar de telefone às pressas.',
          simplifiedDescription: 'O vazamento piorou a situação de perigo da família.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Rodrigo', avatar: '🏠', text: 'Por que você repassou meu endereço?!' }
          ],
          impact: { empathyChange: -60, trustChange: -70, schoolClimateChange: -55 },
          lesson: 'Nunca replique dados vazados. A contenção é fundamental para preservar a integridade física das pessoas.',
          simplifiedLesson: 'Nunca repasse dados pessoais de ninguém.'
        }
      },
      {
        id: 'c8-7-mediadora',
        text: 'Auxiliar a família a registrar um relatório na Central Nacional de Denúncias de Crimes Cibernéticos.',
        simplifiedText: 'Ajudar a família a fazer a denúncia na delegacia de crimes cibernéticos.',
        type: 'mediator',
        icon: '⚖️',
        points: 60,
        consequence: {
          title: 'Encaminhamento Legal Estruturado',
          description: 'O boletim de ocorrência formal garantiu medidas cautelares protetivas.',
          simplifiedDescription: 'A ação legal rápida garantiu a segurança da casa do amigo.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Rodrigo', avatar: '🏠', text: 'O processo legal deu certo. Estamos em paz agora.' }
          ],
          impact: { empathyChange: 60, trustChange: 50, schoolClimateChange: 50 },
          lesson: 'O recurso aos mecanismos formais da lei é a resposta cidadã contra a criminalidade virtual.',
          simplifiedLesson: 'Acionar a justiça é o caminho correto para punir crimes na internet.'
        }
      }
    ]
  },

  // 8.8
  {
    id: 'cenario-8-8',
    grade: '8',
    gradeLabel: '8º Ano',
    title: 'Download de Mod Pirata de Jogo com Cavalo de Troia (Malware)',
    category: 'Segurança e Senhas',
    difficulty: 'Avançado',
    platformType: 'discord',
    pedagogicalObjective: 'Identificar os perigos de malwares, cavalos de Troia (Trojans) e roubo de credenciais disfarçados de vantagens em jogos.',
    context: 'Um usuário desconhecido em um servidor de jogos enviou para Bianca um link prometendo "Gemas e Vantagens Infinitas Grátis". Ao baixar e executar o arquivo, o computador de Bianca foi infectado por um vírus espião (Trojan/Spyware) que capturou suas senhas salvas e passou a controlar abas do navegador.',
    simplifiedContext: 'Bianca baixou um programa falso prometendo moedas grátis em um jogo e infectou o computador com um vírus espião que roubou suas senhas.',
    characters: [
      { name: 'Bianca', role: 'Vítima', avatar: '🎮' },
      { name: 'Hacker de Jogos', role: 'Agresor(a)', avatar: '👾' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c8_8_trojan',
        sender: 'Mod_Gamer_VIP',
        avatar: '👾',
        isAggressor: true,
        text: 'NOVO GERADOR DE MOEDAS VIP GRÁTIS! 💎 Desative seu antivírus, extraia o arquivo instalador.exe e seja o mais forte do servidor!',
        simplifiedText: 'Mensagem com link falso prometendo moedas grátis e pedindo para desligar o antivírus.',
        time: '16:20'
      },
      {
        id: 'c8_8_bia',
        sender: 'Bianca',
        avatar: '🎮',
        isVictim: true,
        text: 'Gente socorro! Baixei o arquivo e agora meu computador tá travando, abrindo janelas sozinho, trocaram minha senha do jogo e tão mandando spam pros meus contatos! O que eu faço?! 😭😭',
        simplifiedText: 'Baixei o arquivo e meu computador pegou um vírus que tá mexendo em tudo e roubando minhas contas!',
        time: '16:23'
      }
    ],
    choices: [
      {
        id: 'c8-8-empatica',
        text: 'Orientar a contenção de segurança imediatamente: "Bianca, DESLIGUE O CABO DE REDE OU O WI-FI DO COMPUTADOR AGORA MESMO! Esse arquivo é um Cavalo de Troia (Trojan) que rouba senhas e dados! Ao desconectar da internet, você impede o vírus de continuar enviando suas informações para o servidor do invasor. Depois, use outro aparelho seguro para trocar todas as suas senhas importantes e passe um antivírus completo para remover o malware!"',
        simplifiedText: 'Avisar para desconectar o computador da internet na hora para bloquear o vírus, trocar todas as senhas por outro celular e rodar um antivírus confiável.',
        type: 'empathetic',
        icon: '🛡️',
        points: 75,
        consequence: {
          title: 'Contenção de Malware e Blindagem Digital',
          description: 'Ao desconectar o computador da rede, Bianca impediu que mais dados fossem roubados. Com a troca de senhas por outro dispositivo e a limpeza do sistema, a segurança foi restaurada.',
          simplifiedDescription: 'Você orientou a contenção perfeita contra o vírus e salvou as contas e arquivos da colega.',
          victimEmotion: 'aliviado',
          chatFeedback: [
            { sender: 'Bianca', avatar: '🎮', text: 'Desconectei o computador na hora! Consegui trocar minhas senhas pelo celular e o antivírus removeu o Trojan! Muito obrigada pelo suporte!' }
          ],
          impact: { empathyChange: 75, trustChange: 70, schoolClimateChange: 60 },
          lesson: 'Arquivos executáveis que prometem trapaças, vantagens ou moedas grátis são os principais veículos de disseminação de cavalos de Troia (Trojans) e spywares. Nunca desative o antivírus e baixe jogos e aplicativos apenas de lojas e canais oficiais.',
          simplifiedLesson: 'Nunca baixe programas prometendo trapaças ou itens grátis e jamais desligue o antivírus.'
        }
      },
      {
        id: 'c8-8-hostil',
        text: 'Zombar de Bianca no grupo dizendo que ela foi boba de acreditar em moedas grátis.',
        simplifiedText: 'Zombar da colega no grupo por ter caído no golpe.',
        type: 'hostile',
        icon: '👎',
        points: -40,
        consequence: {
          title: 'Humilhação e Ausência de Suporte',
          description: 'Bianca ficou com vergonha de pedir ajuda e o vírus continuou roubando arquivos importantes do computador da família.',
          simplifiedDescription: 'O deboche fez a colega não buscar ajuda e o computador da família foi danificado.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Bianca', avatar: '🎮', text: 'Eu já estava desesperada... não precisava zombar de mim...' }
          ],
          impact: { empathyChange: -60, trustChange: -70, schoolClimateChange: -55 },
          lesson: 'Vítimas de ataques cibernéticos precisam de orientação técnica e acolhimento rápido, não de julgamentos e deboches.',
          simplifiedLesson: 'Em vez de zombar de quem caiu em golpe, ajude a resolver o problema com empatia.'
        }
      },
      {
        id: 'c8-8-mediadora',
        text: 'Auxiliar Bianca a fazer uma varredura completa com software de segurança e propor uma oficina na escola sobre higiene cibernética e proteção contra malwares.',
        simplifiedText: 'Ajudar a rodar ferramentas de segurança no computador e organizar uma oficina sobre proteção contra vírus na escola.',
        type: 'mediator',
        icon: '🔒',
        points: 65,
        consequence: {
          title: 'Higiene Cibernética e Educação Preventiva',
          description: 'O computador foi limpo com sucesso e a oficina escolar ensinou a todos como reconhecer arquivos maliciosos e proteger seus dispositivos.',
          simplifiedDescription: 'O problema foi resolvido e a escola inteira aprendeu a se proteger de vírus.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Professor de Tecnologia', avatar: '👨🏻‍🏫', text: 'Excelente iniciativa para promover a cultura de cibersegurança na nossa escola!' }
          ],
          impact: { empathyChange: 65, trustChange: 55, schoolClimateChange: 50 },
          lesson: 'A educação em cibersegurança e o conhecimento sobre higiene digital são as melhores defesas contra pragas virtuais.',
          simplifiedLesson: 'Aprender sobre segurança digital ajuda a manter nossos computadores e celulares sempre protegidos.'
        }
      }
    ]
  },

  // 8.9
  {
    id: 'cenario-8-9',
    grade: '8',
    gradeLabel: '8º Ano',
    title: 'Caixa de Perguntas Anônimas com Assédio e Ódio',
    category: 'Fofocas e Perfis Fake',
    difficulty: 'Intermediário',
    platformType: 'instagram',
    pedagogicalObjective: 'Desestimular o uso de aplicativos de perguntas anônimas que fomentam a covardia e o assédio moral.',
    context: 'Sabrina abriu uma caixinha de perguntas anônimas (NGL) no Instagram e recebeu dezenas de ofensas cruéis dizendo que "ela é insuportável e ninguém aguenta ela na sala".',
    simplifiedContext: 'Sabrina abriu perguntas anônimas no Instagram e recebeu mensagens covardes e agressivas.',
    characters: [
      { name: 'Sabrina', role: 'Vítima', avatar: '💬' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c8_9_ngl',
        sender: 'Pergunta Anônima',
        avatar: '🎭',
        isAggressor: true,
        text: 'Ninguém do 8º ano te suporta, você é chata, feia e só passa vergonha! Some da escola!',
        simplifiedText: 'Mensagem anônima dizendo que ninguém na sala suporta a colega.',
        time: '20:45'
      },
      {
        id: 'c8_9_sabri',
        sender: 'Sabrina',
        avatar: '💬',
        isVictim: true,
        text: 'Como alguém tem coragem de escrever algo tão horrível sem nem mostrar o rosto? Fiquei com o coração partido... 💔',
        simplifiedText: 'Como alguém é capaz de tanta covardia sem mostrar o rosto? Fiquei muito triste...',
        time: '20:48'
      }
    ],
    choices: [
      {
        id: 'c8-9-empatica',
        text: 'Acolher Sabrina e desvalorizar a covardia do anonimato: "Sabrina, delete esse aplicativo de perguntas agora! Pessoas que se escondem no anonimato são covardes frustradas que só têm coragem de destilar veneno porque não mostram a cara. Quem te conhece de verdade sabe da sua alegria, bondade e valor. Não gaste um minuto da sua energia com a amargura alheia!"',
        simplifiedText: 'Aconselhar a deletar o app de perguntas anônimas, lembrar que o anonimato é covardia e valorizar as qualidades reais dela.',
        type: 'empathetic',
        icon: '💖',
        points: 65,
        consequence: {
          title: 'Proteção Emocional e Rejeição à Covardia',
          description: 'Sabrina desinstalou o aplicativo na hora, sentiu-se fortalecida pelo seu carinho e percebeu a baixeza dos ataques anônimos.',
          simplifiedDescription: 'Você mostrou para sua amiga que a maldade anônima não merece importância e resgatou a alegria dela.',
          victimEmotion: 'acolhida',
          chatFeedback: [
            { sender: 'Sabrina', avatar: '💬', text: 'Você tem toda razão! Desinstalei esse app tóxico e já me sinto mil vezes mais leve! Obrigada!' }
          ],
          impact: { empathyChange: 65, trustChange: 60, schoolClimateChange: 50 },
          lesson: 'Aplicativos de mensagens anônimas alimentam a covardia e o cyberbullying. A verdadeira coragem se expressa olhando nos olhos com respeito.',
          simplifiedLesson: 'Não use aplicativos anônimos para receber mensagens. O anonimato atrai comentários maldosos.'
        }
      },
      {
        id: 'c8-9-passiva',
        text: 'Tentar adivinhar quem foi o agressor e começar a acusar colegas da sala sem provas.',
        simplifiedText: 'Começar a acusar outros colegas sem ter certeza de quem mandou.',
        type: 'passive',
        icon: '🔎',
        points: -15,
        consequence: {
          title: 'Clima de Desconfiança e Conflito',
          description: 'A sala entrou em uma espiral de acusações injustas e brigas entre inocentes.',
          simplifiedDescription: 'Acusar sem provas causou brigas entre pessoas que não tinham nada a ver.',
          victimEmotion: 'ansioso',
          chatFeedback: [
            { sender: 'Sabrina', avatar: '💬', text: 'Agora a sala toda tá brigando por minha causa...' }
          ],
          impact: { empathyChange: -30, trustChange: -40, schoolClimateChange: -35 },
          lesson: 'Acusações sem evidências geram injustiças e amplificam o ambiente tóxico.',
          simplifiedLesson: 'Nunca acuse pessoas sem provas.'
        }
      },
      {
        id: 'c8-9-mediadora',
        text: 'Incentivar a turma a trocar bilhetes físicos de elogios sinceros e assinados durante a aula.',
        simplifiedText: 'Fazer uma dinâmica na sala onde todos escrevem bilhetes com elogios verdadeiros para os colegas.',
        type: 'mediator',
        icon: '💌',
        points: 60,
        consequence: {
          title: 'Cultura do Elogio Transparente',
          description: 'A caixa de bilhetes positivos aqueceu o coração de todos os estudantes da turma.',
          simplifiedDescription: 'Os bilhetes cheios de carinho uniram a turma inteira.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Sabrina', avatar: '💬', text: 'Guardei todos os bilhetinhos na minha caixinha de recordações!' }
          ],
          impact: { empathyChange: 60, trustChange: 50, schoolClimateChange: 45 },
          lesson: 'O afeto explícito e transparente supera qualquer veneno destilado nas sombras da rede.',
          simplifiedLesson: 'Elogiar com sinceridade e transparência fortalece as amizades.'
        }
      }
    ]
  },

  // 8.10
  {
    id: 'cenario-8-10',
    grade: '8',
    gradeLabel: '8º Ano',
    title: 'Desinformação sobre Saúde e Dietas Perigosas',
    category: 'Cidadania Digital e Pegada Digital',
    difficulty: 'Intermediário',
    platformType: 'tiktok',
    pedagogicalObjective: 'Desenvolver a checagem de fatos científicos e alertar contra conselhos perigosos de saúde na internet.',
    context: 'Um vídeo viral no TikTok recomendou tomar água morna com detergente e vinagre para "perder 10 kg em 3 dias". Duas alunas do 8º ano quiseram fazer a receita antes da festa de formatura.',
    simplifiedContext: 'Um vídeo viral promete emagrecimento rápido bebendo produtos de limpeza e alunas querem testar.',
    characters: [
      { name: 'Camila', role: 'Vítima', avatar: '🥤' },
      { name: 'Você', role: 'Colega', avatar: '⭐' }
    ],
    chatMessages: [
      {
        id: 'c8_10_dieta',
        sender: 'Camila',
        avatar: '🥤',
        isVictim: true,
        text: 'Meninas, vi no TikTok essa receita mágica pra secar a barriga pra festa! Vou tomar detergente com vinagre hoje à noite, a influencer disse que funciona!',
        simplifiedText: 'Vou tomar a mistura com detergente que a influencer ensinou no TikTok pra emagrecer rápido!',
        time: '18:00'
      }
    ],
    choices: [
      {
        id: 'c8-10-empatica',
        text: 'Impedir o consumo com urgência médica: "Camila, NÃO TOME ISSO PELO AMOR DE DEUS! Detergente é um produto químico tóxico que queima o estômago, destrói o fígado e causa intoxicação gravíssima! Conselhos de saúde na internet sem comprovação médica são mentiras letais e desinformação perigosa. Sua saúde é sagrada, fale com um nutricionista ou com seus pais!"',
        simplifiedText: 'Avisar que beber produtos de limpeza queima o estômago e é um perigo fatal, impedindo a colega de se intoxicar.',
        type: 'empathetic',
        icon: '🛑',
        points: 65,
        consequence: {
          title: 'Proteção à Saúde e Pensamento Crítico',
          description: 'Camila jogou a mistura fora imediatamente e percebeu o absurdo perigoso das receitas milagrosas da internet.',
          simplifiedDescription: 'Você salvou sua amiga de uma intoxicação grave no hospital.',
          victimEmotion: 'aliviado',
          chatFeedback: [
            { sender: 'Camila', avatar: '🥤', text: 'Minha mãe me explicou o risco e quase desmaiou de susto... Você me salvou de ir pro hospital! Muito obrigada!' }
          ],
          impact: { empathyChange: 65, trustChange: 60, schoolClimateChange: 50 },
          lesson: 'Nunca siga dicas de saúde, remédios ou dietas extremas em redes sociais. A ciência médica e nutricional é a única fonte confiável.',
          simplifiedLesson: 'Nunca tome remédios ou misturas da internet. Elas são perigosas para sua saúde.'
        }
      },
      {
        id: 'c8-10-passiva',
        text: 'Não falar nada e esperar ela contar no dia seguinte se deu certo.',
        simplifiedText: 'Não avisar nada e esperar.',
        type: 'passive',
        icon: '😶',
        points: -30,
        consequence: {
          title: 'Intoxicação Grave',
          description: 'Camila ingeriu o produto químico, sofreu queimaduras no esôfago e foi levada às pressas para a UTI.',
          simplifiedDescription: 'A colega teve uma intoxicação grave e precisou de internação na UTI.',
          victimEmotion: 'triste',
          chatFeedback: [
            { sender: 'Família da Camila', avatar: '🏥', text: 'Receitas falsas da internet quase tiraram a vida da nossa filha...' }
          ],
          impact: { empathyChange: -60, trustChange: -70, schoolClimateChange: -60 },
          lesson: 'O silêncio diante de desinformação médica pode custar vidas.',
          simplifiedLesson: 'Alertar sobre perigos de saúde salva a vida das pessoas.'
        }
      },
      {
        id: 'c8-10-mediadora',
        text: 'Reportar o vídeo na plataforma por "Conteúdo Perigoso / Desinformação de Saúde" e levar a discussão para a aula de Ciências.',
        simplifiedText: 'Denunciar o vídeo na rede social e discutir o tema na aula de ciências com a professora.',
        type: 'mediator',
        icon: '🔬',
        points: 60,
        consequence: {
          title: 'Checagem Científica',
          description: 'A plataforma removeu o vídeo perigoso e a professora de ciências realizou uma aula excelente sobre alimentação saudável.',
          simplifiedDescription: 'O vídeo perigoso foi banido e a turma aprendeu sobre nutrição com saúde.',
          victimEmotion: 'confiante',
          chatFeedback: [
            { sender: 'Professora de Ciências', avatar: '👩🏻‍🏫', text: 'Parabéns pela postura crítica e responsável.' }
          ],
          impact: { empathyChange: 60, trustChange: 50, schoolClimateChange: 45 },
          lesson: 'A alfabetização científica é a maior defesa contra charlatões virtuais.',
          simplifiedLesson: 'Buscar a ciência e fontes médicas comprovadas garante nossa saúde.'
        }
      }
    ]
  }
];
