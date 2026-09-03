/**
 * Vector-based, offline-ready standalone illustrations for all digital citizenship scenarios.
 * Guarantees 100% instant loading and zero network failures on restricted school networks.
 */

interface IllustrationConfig {
  title: string;
  category: string;
  badge: string;
  iconSvg: string;
  bgGradient: [string, string];
  accentColor: string;
}

const getSvgDataUri = ({
  title,
  category,
  badge,
  iconSvg,
  bgGradient,
  accentColor
}: IllustrationConfig): string => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 340" width="100%" height="100%">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${bgGradient[0]}" />
        <stop offset="100%" stop-color="${bgGradient[1]}" />
      </linearGradient>
      <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.95" />
        <stop offset="100%" stop-color="#f8fafc" stop-opacity="0.9" />
      </linearGradient>
      <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#0f172a" flood-opacity="0.25" />
      </filter>
    </defs>
    
    <!-- Background Canvas -->
    <rect width="600" height="340" fill="url(#grad)" rx="16" />
    
    <!-- Decorative Ambient Shapes -->
    <circle cx="80" cy="60" r="100" fill="${accentColor}" opacity="0.15" />
    <circle cx="520" cy="280" r="120" fill="${accentColor}" opacity="0.12" />
    <rect x="420" y="30" width="140" height="140" rx="24" fill="#ffffff" opacity="0.05" transform="rotate(25 490 100)" />
    
    <!-- Central Interactive Evidence Card -->
    <g filter="url(#shadow)">
      <rect x="40" y="35" width="520" height="270" rx="20" fill="url(#cardGrad)" stroke="#ffffff" stroke-width="1.5" />
    </g>
    
    <!-- Category & Badge Tag -->
    <rect x="65" y="60" width="160" height="26" rx="8" fill="${accentColor}" fill-opacity="0.15" />
    <text x="75" y="77" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="${accentColor}">
      ${badge}
    </text>
    
    <!-- Icon Circle Container -->
    <circle cx="105" cy="155" r="42" fill="${accentColor}" fill-opacity="0.12" stroke="${accentColor}" stroke-width="2" />
    <g transform="translate(81, 131) scale(1.6)" fill="none" stroke="${accentColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      ${iconSvg}
    </g>
    
    <!-- Title Text Lines -->
    <text x="170" y="140" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="800" fill="#0f172a">
      ${escapeXml(title)}
    </text>
    <text x="170" y="168" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#475569">
      Eixo Temático: ${escapeXml(category)}
    </text>
    
    <!-- Context Footer Box -->
    <rect x="65" y="225" width="470" height="56" rx="12" fill="#0f172a" fill-opacity="0.04" stroke="#cbd5e1" stroke-width="1" />
    <circle cx="85" cy="253" r="10" fill="${accentColor}" />
    <path d="M85 249v4M85 257h.01" stroke="#ffffff" stroke-width="2" stroke-linecap="round" />
    <text x="105" y="250" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#1e293b">
      Caso em Análise no Smartphone
    </text>
    <text x="105" y="267" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" font-weight="500" fill="#64748b">
      Evidência digital registrada para avaliação de convivência e empatia
    </text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const escapeXml = (str: string) => {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
};

// Ready-to-use vector templates
export const FALLBACK_ILLUSTRATIONS: Record<string, string> = {
  // 5th grade
  'cenario-5-1': getSvgDataUri({
    title: 'Servidor de Blocos e Jogos',
    category: 'Jogos e Convivência',
    badge: 'JOGOS DIGITAIS',
    bgGradient: ['#1e1b4b', '#4338ca'],
    accentColor: '#6366f1',
    iconSvg: '<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 12h4m-2-2v4m8-2h.01m3 0h.01"/>'
  }),
  'cenario-5-2': getSvgDataUri({
    title: 'Grupo de Estudos Escolares',
    category: 'Colaboração e Empatia',
    badge: 'ESTUDOS E SALA DE AULA',
    bgGradient: ['#064e3b', '#059669'],
    accentColor: '#10b981',
    iconSvg: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>'
  }),
  'cenario-5-3': getSvgDataUri({
    title: 'Link Falso de Moedas Grátis',
    category: 'Segurança e Golpes',
    badge: 'ALERTA DE GOLPE VIRTUAL',
    bgGradient: ['#7c2d12', '#ea580c'],
    accentColor: '#f97316',
    iconSvg: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>'
  }),
  'cenario-5-4': getSvgDataUri({
    title: 'Desafio Arriscado no Celular',
    category: 'Prevenção de Acidentes',
    badge: 'DESAFIO PERIGOSO',
    bgGradient: ['#881337', '#e11d48'],
    accentColor: '#f43f5e',
    iconSvg: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>'
  }),
  'cenario-5-5': getSvgDataUri({
    title: 'Contato com Desconhecido',
    category: 'Proteção e Privacidade',
    badge: 'PERIGO NA REDE',
    bgGradient: ['#4c0519', '#9f1239'],
    accentColor: '#e11d48',
    iconSvg: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'
  }),
  'cenario-5-6': getSvgDataUri({
    title: 'Compartilhamento de Senha',
    category: 'Segurança de Credenciais',
    badge: 'PROTEÇÃO DE CONTAS',
    bgGradient: ['#1e293b', '#475569'],
    accentColor: '#38bdf8',
    iconSvg: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'
  }),
  'cenario-5-7': getSvgDataUri({
    title: 'Foto Sem Permissão no Recreio',
    category: 'Direito de Imagem',
    badge: 'RESPEITO À IMAGEM',
    bgGradient: ['#3b0764', '#7e22ce'],
    accentColor: '#a855f7',
    iconSvg: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>'
  }),
  'cenario-5-8': getSvgDataUri({
    title: 'Grupo Fechado e Exclusão',
    category: 'Inclusão e Acolhimento',
    badge: 'COMBATE À EXCLUSÃO',
    bgGradient: ['#134e4a', '#0f766e'],
    accentColor: '#14b8a6',
    iconSvg: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'
  }),
  'cenario-5-9': getSvgDataUri({
    title: 'Compra Indevida de Moedas',
    category: 'Educação Financeira',
    badge: 'GASTOS NO JOGO',
    bgGradient: ['#713f12', '#ca8a04'],
    accentColor: '#eab308',
    iconSvg: '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>'
  }),
  'cenario-5-10': getSvgDataUri({
    title: 'Falso Perfil de Agência',
    category: 'Segurança e Alerta',
    badge: 'ALERTA DE GOLPE',
    bgGradient: ['#450a0a', '#b91c1c'],
    accentColor: '#ef4444',
    iconSvg: '<circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>'
  }),

  // 6th grade
  'cenario-6-1': getSvgDataUri({
    title: 'Figurinha da Queda no Vôlei',
    category: 'Apelidos e Figurinhas',
    badge: 'HUMOR E RESPEITO',
    bgGradient: ['#312e81', '#4f46e5'],
    accentColor: '#6366f1',
    iconSvg: '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>'
  }),
  'cenario-6-2': getSvgDataUri({
    title: 'Áudio Remix Gravado Escondido',
    category: 'Direito de Imagem e Ética',
    badge: 'VAZAMENTO DE ÁUDIO',
    bgGradient: ['#0f172a', '#334155'],
    accentColor: '#38bdf8',
    iconSvg: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/>'
  }),
  'cenario-6-3': getSvgDataUri({
    title: 'Link Falso de Mod Menu / Hack',
    category: 'Golpes e Phishing',
    badge: 'ALERTA DE VÍRUS',
    bgGradient: ['#7c2d12', '#c2410c'],
    accentColor: '#fb923c',
    iconSvg: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>'
  }),
  'cenario-6-4': getSvgDataUri({
    title: 'Grupo Fechado e Julgamento de Roupas',
    category: 'Exclusão Virtual',
    badge: 'EXCLUSÃO EM GRUPO',
    bgGradient: ['#581c87', '#9333ea'],
    accentColor: '#c084fc',
    iconSvg: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>'
  }),
  'cenario-6-5': getSvgDataUri({
    title: 'Golpe na Troca da Espada Lendária',
    category: 'Golpes e Phishing',
    badge: 'GOLPE GAMER',
    bgGradient: ['#713f12', '#ca8a04'],
    accentColor: '#eab308',
    iconSvg: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>'
  }),
  'cenario-6-6': getSvgDataUri({
    title: 'Apresentação Interrompida no Chat',
    category: 'Direito de Imagem e Ética',
    badge: 'AULA VIRTUAL',
    bgGradient: ['#1e1b4b', '#4338ca'],
    accentColor: '#818cf8',
    iconSvg: '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>'
  }),
  'cenario-6-7': getSvgDataUri({
    title: 'Plágio de Redação com Robô de IA',
    category: 'Inteligência Artificial e Plágio',
    badge: 'PLÁGIO E IA',
    bgGradient: ['#0f172a', '#1e293b'],
    accentColor: '#38bdf8',
    iconSvg: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'
  }),
  'cenario-6-8': getSvgDataUri({
    title: 'Perfil Fake no Instagram e Chantagem',
    category: 'Fofocas e Perfis Fake',
    badge: 'PERFIL FALSO',
    bgGradient: ['#881337', '#be123c'],
    accentColor: '#fb7185',
    iconSvg: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>'
  }),
  'cenario-6-9': getSvgDataUri({
    title: 'Exposição de Segredo Familiar no Status',
    category: 'Privacidade e Segredos',
    badge: 'VAZAMENTO DE STATUS',
    bgGradient: ['#1e293b', '#0f172a'],
    accentColor: '#a5f3fc',
    iconSvg: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'
  }),
  'cenario-6-10': getSvgDataUri({
    title: 'Correntes de Pânico e Ameaças',
    category: 'Cidadania Digital e Pegada Digital',
    badge: 'CORRENTE FALSA',
    bgGradient: ['#991b1b', '#ef4444'],
    accentColor: '#fca5a5',
    iconSvg: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>'
  }),

  // 7th grade
  'cenario-7-1': getSvgDataUri({
    title: 'Vídeo do Jogo Zoando Colega',
    category: 'Esporte e Respeito',
    badge: 'INTIMIDAÇÃO VIRTUAL',
    bgGradient: ['#1e1b4b', '#3730a3'],
    accentColor: '#818cf8',
    iconSvg: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>'
  }),
  'cenario-7-2': getSvgDataUri({
    title: 'Mensagens Ofensivas na Partida',
    category: 'Jogo Limpo e Empatia',
    badge: 'OFENSAS EM JOGOS',
    bgGradient: ['#7f1d1d', '#991b1b'],
    accentColor: '#f87171',
    iconSvg: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>'
  }),
  'cenario-7-3': getSvgDataUri({
    title: 'Filtro e Piada com Aparência',
    category: 'Autoimagem e Respeito',
    badge: 'OFENSA À APARÊNCIA',
    bgGradient: ['#581c87', '#7e22ce'],
    accentColor: '#d8b4fe',
    iconSvg: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>'
  }),
  'cenario-7-4': getSvgDataUri({
    title: 'Enquete Depreciativa nas Redes',
    category: 'Exposição e Constrangimento',
    badge: 'ENQUETE OFENSIVA',
    bgGradient: ['#831843', '#be185d'],
    accentColor: '#f472b6',
    iconSvg: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>'
  }),
  'cenario-7-5': getSvgDataUri({
    title: 'Voz Clonada por Inteligência Artificial',
    category: 'Inteligência Artificial e Fraudes',
    badge: 'VOZ FALSA POR IA',
    bgGradient: ['#0f172a', '#1e293b'],
    accentColor: '#38bdf8',
    iconSvg: '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/>'
  }),
  'cenario-7-6': getSvgDataUri({
    title: 'Concurso Falso Pedindo Senhas',
    category: 'Engenharia Social e Golpes',
    badge: 'GOLPE ESTUDANTIL',
    bgGradient: ['#7c2d12', '#ea580c'],
    accentColor: '#fb923c',
    iconSvg: '<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>'
  }),
  'cenario-7-7': getSvgDataUri({
    title: 'Falso Patrocínio em Jogos',
    category: 'Fraude Financeira',
    badge: 'CONTRATO FRAUDULENTO',
    bgGradient: ['#713f12', '#a16207'],
    accentColor: '#facc15',
    iconSvg: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>'
  }),
  'cenario-7-8': getSvgDataUri({
    title: 'Conta Invadida por Senha Fraca',
    category: 'Segurança de Contas',
    badge: 'INVASÃO DE PERFIL',
    bgGradient: ['#312e81', '#1e1b4b'],
    accentColor: '#818cf8',
    iconSvg: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'
  }),
  'cenario-7-9': getSvgDataUri({
    title: 'Comentários de Ódio no Vídeo Escolar',
    category: 'Discurso de Ódio',
    badge: 'DISCURSO DE ÓDIO VIRTUAL',
    bgGradient: ['#881337', '#9f1239'],
    accentColor: '#fb7185',
    iconSvg: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'
  }),
  'cenario-7-10': getSvgDataUri({
    title: 'Guardiões Digitais da Escola',
    category: 'Mediação e Apoio',
    badge: 'REDE DE PROTEÇÃO',
    bgGradient: ['#064e3b', '#065f46'],
    accentColor: '#34d399',
    iconSvg: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'
  }),

  // 8th grade
  'cenario-8-1': getSvgDataUri({
    title: 'Enquete Comparativa Tóxica',
    category: 'Respeito e Autoimagem',
    badge: 'AVALIAÇÃO DE APARÊNCIA',
    bgGradient: ['#4a044e', '#701a75'],
    accentColor: '#f472b6',
    iconSvg: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>'
  }),
  'cenario-8-2': getSvgDataUri({
    title: 'Vídeo do Sarau Sem Autorização',
    category: 'Direito Autoral e Imagem',
    badge: 'EXPOSIÇÃO PÚBLICA',
    bgGradient: ['#1e1b4b', '#312e81'],
    accentColor: '#a5b4fc',
    iconSvg: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>'
  }),
  'cenario-8-3': getSvgDataUri({
    title: 'Rede Wi-Fi Pública Falsa',
    category: 'Interceptação e Senhas',
    badge: 'WI-FI FALSO / INTERCEPTAÇÃO',
    bgGradient: ['#1e1b4b', '#312e81'],
    accentColor: '#38bdf8',
    iconSvg: '<path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>'
  }),
  'cenario-8-4': getSvgDataUri({
    title: 'Golpe do Falso Jovem Aprendiz',
    category: 'Fraudes e Engenharia Social',
    badge: 'FALSO EMPREGO',
    bgGradient: ['#3b0764', '#581c87'],
    accentColor: '#c084fc',
    iconSvg: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>'
  }),
  'cenario-8-5': getSvgDataUri({
    title: 'Filtros Irreais e Padrões Estéticos',
    category: 'Saúde Mental e Autoimagem',
    badge: 'COMPARAÇÃO DIGITAL',
    bgGradient: ['#881337', '#be123c'],
    accentColor: '#f43f5e',
    iconSvg: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'
  }),
  'cenario-8-6': getSvgDataUri({
    title: 'Golpe do Código SMS de WhatsApp',
    category: 'Segurança de Contas',
    badge: 'ROUBO DE CONTA',
    bgGradient: ['#78350f', '#b45309'],
    accentColor: '#fbbf24',
    iconSvg: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="6" x2="12" y2="12"/><line x1="12" y1="12" x2="16" y2="14"/>'
  }),
  'cenario-8-7': getSvgDataUri({
    title: 'Vazamento de Dados Pessoais (Doxxing)',
    category: 'Privacidade e Proteção de Dados',
    badge: 'VAZAMENTO DE DADOS',
    bgGradient: ['#450a0a', '#991b1b'],
    accentColor: '#ef4444',
    iconSvg: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'
  }),
  'cenario-8-8': getSvgDataUri({
    title: 'Malware em Mod de Jogo (Trojan)',
    category: 'Cibersegurança e Antivírus',
    badge: 'CAVALO DE TROIA (MALWARE)',
    bgGradient: ['#0f172a', '#1e293b'],
    accentColor: '#a855f7',
    iconSvg: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>'
  }),
  'cenario-8-9': getSvgDataUri({
    title: 'Plágio Integral com IA',
    category: 'Integridade Acadêmica',
    badge: 'PLÁGIO E ÉTICA',
    bgGradient: ['#1e1b4b', '#4338ca'],
    accentColor: '#818cf8',
    iconSvg: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>'
  }),
  'cenario-8-10': getSvgDataUri({
    title: 'Mobilização Escolar Contra o Bullying',
    category: 'Cidadania Ativa',
    badge: 'CAMPANHA COLETIVA',
    bgGradient: ['#064e3b', '#047857'],
    accentColor: '#34d399',
    iconSvg: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'
  }),

  // 9th grade
  'cenario-9-1': getSvgDataUri({
    title: 'Mural de Recados Anônimos da Escola',
    category: 'Exposição e Difamação',
    badge: 'PÁGINA ANÔNIMA',
    bgGradient: ['#581c87', '#7e22ce'],
    accentColor: '#d8b4fe',
    iconSvg: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'
  }),
  'cenario-9-2': getSvgDataUri({
    title: 'Vídeo Falso Manipulado com IA',
    category: 'Crime Cibernético Grave',
    badge: 'CRIME DIGITAL',
    bgGradient: ['#450a0a', '#7f1d1d'],
    accentColor: '#ef4444',
    iconSvg: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>'
  }),
  'cenario-9-3': getSvgDataUri({
    title: 'Boicote Virtual de Trabalho',
    category: 'Ética e Convivência',
    badge: 'SABOTAGEM DIGITAL',
    bgGradient: ['#7c2d12', '#c2410c'],
    accentColor: '#fb923c',
    iconSvg: '<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>'
  }),
  'cenario-9-4': getSvgDataUri({
    title: 'Discurso de Intolerância no Fórum',
    category: 'Combate à Discriminação',
    badge: 'DISCURSO DE ÓDIO',
    bgGradient: ['#881337', '#9f1239'],
    accentColor: '#f43f5e',
    iconSvg: '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>'
  }),
  'cenario-9-5': getSvgDataUri({
    title: 'Exposição Indevida: Vazamento de Dados',
    category: 'Segurança de Dados e Privacidade',
    badge: 'VAZAMENTO DE DADOS',
    bgGradient: ['#0f172a', '#1e293b'],
    accentColor: '#38bdf8',
    iconSvg: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'
  }),
  'cenario-9-6': getSvgDataUri({
    title: 'Golpe da Pirâmide Financeira Juvenil',
    category: 'Golpes Financeiros',
    badge: 'FRAUDE FINANCEIRA',
    bgGradient: ['#78350f', '#a16207'],
    accentColor: '#fbbf24',
    iconSvg: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>'
  }),
  'cenario-9-7': getSvgDataUri({
    title: 'Golpe de Mensagens Clonadas',
    category: 'Engenharia Social',
    badge: 'CLONAGEM DE CONTA',
    bgGradient: ['#064e3b', '#065f46'],
    accentColor: '#34d399',
    iconSvg: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>'
  }),
  'cenario-9-8': getSvgDataUri({
    title: 'Pegada Digital e Reputação',
    category: 'Futuro e Cidadania',
    badge: 'HISTÓRICO DIGITAL',
    bgGradient: ['#1e1b4b', '#3730a3'],
    accentColor: '#a5b4fc',
    iconSvg: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>'
  }),
  'cenario-9-9': getSvgDataUri({
    title: 'Pressão Estética e Busca por Curtidas',
    category: 'Saúde Mental e Redes',
    badge: 'AUTOESTIMA DIGITAL',
    bgGradient: ['#4a044e', '#831843'],
    accentColor: '#f472b6',
    iconSvg: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>'
  }),
  'cenario-9-10': getSvgDataUri({
    title: 'Conselho Estudantil de Convivência',
    category: 'Liderança e Mediação',
    badge: 'CULTURA DE PAZ',
    bgGradient: ['#064e3b', '#0f766e'],
    accentColor: '#2dd4bf',
    iconSvg: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'
  })
};

/**
 * Returns a guaranteed valid image URL for any scenario.
 */
export const getGuaranteedScenarioImage = (scenarioId: string, customUrl?: string): string => {
  if (customUrl && !customUrl.startsWith('https://images.unsplash.com')) {
    return customUrl;
  }
  return FALLBACK_ILLUSTRATIONS[scenarioId] || customUrl || FALLBACK_ILLUSTRATIONS['cenario-5-1'];
};
