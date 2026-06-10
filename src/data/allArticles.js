// Chave única para o localStorage
const STORAGE_KEY = 'omda_articles';

// Dados padrão
const DEFAULT_ARTICLES = [
  // Artigos da Home
  {
    id: 1,
    title: "Biotecnologia: A nova fronteira medicinal",
    description: "Pesquisadores identificam compostos revolucionários.",
    fullContent: "Os pesquisadores do Instituto de Pesquisas da Amazônia (IPA) descobriram três novos compostos com propriedades anticancerígenas. A descoberta foi feita após cinco anos de estudo em plantas da região do Rio Negro. Os compostos mostraram eficácia contra células de câncer de mama e próstata em testes laboratoriais. A próxima fase será testar em animais e, posteriormente, em humanos. A expectativa é que em até 10 anos tenhamos novos medicamentos derivados desses compostos no mercado. Esta é uma das maiores descobertas da biotecnologia brasileira nas últimas décadas, colocando a Amazônia no centro da pesquisa médica mundial.",
    category: "Ambiente",
    date: "24 Mai, 2024",
    readTime: 8,
    author: "Ricardo Alencar",
    imageUrl: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800",
    tags: ["Biotecnologia", "Medicina"],
    page: "home",
    isHero: true,
    slug: "biotecnologia-nova-fronteira-medicinal",
    metaDescription: "Pesquisadores descobrem compostos revolucionários na Amazônia",
    allowComments: true,
    isPremium: false
  },
  {
    id: 2,
    title: "Lideranças indígenas articulam novo bloco de pressão no Congresso Nacional",
    description: "Movimento busca consolidar direitos territoriais através de parcerias estratégicas com o setor de tecnologia.",
    fullContent: "Lideranças de mais de 50 etnias se reuniram em Brasília para lançar a 'Aliança Digital Indígena'. O grupo vai usar tecnologia de georreferenciamento e blockchain para monitorar invasões de terras e comprovar a ocupação tradicional. A iniciativa conta com apoio de universidades e empresas de tecnologia. Os líderes também planejam criar um aplicativo para denúncias de crimes ambientais em territórios indígenas. 'É a união da sabedoria ancestral com a tecnologia de ponta', afirmou o coordenador da aliança.",
    category: "Política",
    date: "23 Mai, 2024",
    readTime: 15,
    author: "Nayara Tukano",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800",
    tags: ["Política", "Direitos Indígenas"],
    page: "home",
    isHero: true,
    slug: "liderancas-indigenas-articulam-blocopressao",
    metaDescription: "Lideranças indígenas lançam aliança digital no Congresso Nacional",
    allowComments: true,
    isPremium: false
  },
  {
    id: 3,
    title: "O Coração Pulsante: Como a Economia Regenerativa está Redefinindo o Futuro da Floresta",
    description: "Novas tecnologias e modelos de negócio estão transformando a relação entre desenvolvimento e preservação.",
    fullContent: "A economia regenerativa na Amazônia deixou de ser apenas um conceito teórico para se tornar uma realidade concreta. Empresas de bioeconomia estão crescendo, gerando renda para comunidades tradicionais e ao mesmo tempo preservando a floresta. O modelo combina tecnologia, conhecimento tradicional e sustentabilidade. Startups locais estão desenvolvendo produtos como cosméticos naturais, alimentos funcionais e fármacos a partir da biodiversidade amazônica. O investimento nesse setor cresceu 300% nos últimos dois anos.",
    category: "Exclusivo",
    date: "20 Mai, 2024",
    readTime: 12,
    author: "Ricardo Alencar",
    imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
    tags: ["Economia", "Sustentabilidade"],
    page: "home",
    isHero: true,
    slug: "economia-regenerativa-redefinindo-futuro",
    metaDescription: "Economia regenerativa transforma a Amazônia",
    allowComments: true,
    isPremium: false
  },

  // Artigos da página Política
  {
    id: 601,
    title: "Como o novo projeto de lei de terras impacta a governança no Amazonas",
    description: "Uma investigação detalhada sobre as cláusulas ocultas no PL 4503, que promete regularizar títulos, mas enfrenta resistência de comunidades tradicionais e órgãos de fiscalização ambiental.",
    fullContent: "O Projeto de Lei 4503/2024 promete regularizar milhões de hectares de terras na Amazônia, mas especialistas apontam riscos. 'As cláusulas ocultas podem facilitar a grilagem', alerta a procuradora Maria Santos. Comunidades tradicionais temem perder seus territórios. O governo defende a medida como forma de dar segurança jurídica aos produtores rurais. A votação está marcada para o próximo mês no plenário da Câmara. Organizações ambientalistas pedem mais transparência na tramitação do projeto.",
    category: "Análise Legislativa",
    date: "05 Out, 2024",
    readTime: 8,
    author: "Ricardo Mendes",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",
    tags: ["Legislação", "Terras", "Amazonas"],
    page: "politica",
    isHero: true,
    slug: "projeto-lei-terras-amazonas",
    metaDescription: "Análise do PL 4503 que pode mudar a regularização fundiária na Amazônia",
    allowComments: true,
    isPremium: false
  },
  {
    id: 602,
    title: "O que a reforma tributária muda para os incentivos da Zona Franca",
    description: "Interlocutores em Brasília indicam que o novo pacto federativo pode alterar drasticamente a competitividade do polo industrial de Manaus. Entenda os riscos.",
    fullContent: "A reforma tributária em tramitação no Congresso pode reduzir em até 40% os incentivos fiscais da Zona Franca de Manaus. 'Isso colocaria em risco milhares de empregos', afirma o presidente da Suframa. Parlamentares da bancada do Amazonas negociam emendas para preservar os benefícios. A expectativa é que o texto seja votado ainda este ano. Empresários do Polo Industrial estão em estado de alerta e já articulam uma grande mobilização em Brasília para defender os incentivos fiscais.",
    category: "Bastidores",
    date: "28 Set, 2024",
    readTime: 12,
    author: "Exclusivo",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",
    tags: ["Reforma Tributária", "Zona Franca", "Economia"],
    page: "politica",
    isHero: true,
    slug: "reforma-tributaria-zona-franca",
    metaDescription: "Entenda como a reforma tributária pode afetar os incentivos da Zona Franca de Manaus",
    allowComments: true,
    isPremium: false
  },
  {
    id: 603,
    title: "Mapeamento: O avanço do conservadorismo nas capitais da Região Norte",
    description: "Nossos analistas cruzaram dados das últimas 5 eleições para entender a mudança no perfil do eleitor amazônico.",
    fullContent: "Um estudo exclusivo do O Melhor da Amazônia mapeou a evolução do voto conservador nas capitais da região Norte nos últimos 10 anos. Belém, Manaus e Porto Velho apresentaram as maiores variações. 'O fenômeno é nacional, mas aqui tem características específicas', analisa o cientista político Carlos Alberto. Os dados apontam para uma polarização crescente nas próximas eleições. O estudo também revela que o eleitorado jovem tem sido o mais influente nessa mudança de perfil político na região.",
    category: "Eleições Municipais",
    date: "02 Out, 2024",
    readTime: 10,
    author: "Equipe de Dados",
    imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    tags: ["Eleições", "Política", "Norte"],
    page: "politica",
    isHero: true,
    slug: "avancoconversadorismo-capitals-norte",
    metaDescription: "Análise do crescimento do conservadorismo nas capitais da região Norte",
    allowComments: true,
    isPremium: false
  },
  {
    id: 604,
    title: "Novo secretário de meio ambiente do AM toma posse com agenda ambiciosa",
    description: "Gestão promete intensificar fiscalização e criar novas unidades de conservação.",
    fullContent: "O novo secretário de Meio Ambiente do Amazonas, Eduardo Costa, tomou posse nesta segunda-feira com uma agenda voltada para a sustentabilidade. Entre as principais promessas estão a criação de 5 novas unidades de conservação e o aumento da fiscalização contra o desmatamento ilegal. 'Vamos trabalhar incansavelmente para proteger nossa floresta', afirmou o secretário durante a cerimônia de posse. O governador presente no evento reforçou o compromisso da gestão com as pautas ambientais.",
    category: "Governo",
    date: "30 Set, 2024",
    readTime: 6,
    author: "Marina Silva",
    imageUrl: "https://images.unsplash.com/photo-1590086783191-a0694c7d1e6e?w=800",
    tags: ["Governo", "Meio Ambiente", "Amazonas"],
    page: "politica",
    isHero: false,
    slug: "novo-secretario-meio-ambiente-am",
    metaDescription: "Novo secretário de Meio Ambiente do Amazonas promete intensificar fiscalização",
    allowComments: true,
    isPremium: false
  },
  {
    id: 605,
    title: "Senado aprova projeto que beneficia comunidades tradicionais",
    description: "Nova legislação garante direitos e apoio a populações ribeirinhas e extrativistas.",
    fullContent: "O Senado Federal aprovou por unanimidade o Projeto de Lei 789/2024 que garante direitos e apoio às comunidades tradicionais da Amazônia. O texto prevê assistência técnica, acesso a políticas públicas e proteção territorial. 'É uma vitória histórica para os povos da floresta', comemorou a senadora Maria do Socorro, relatora do projeto. A proposta segue agora para sanção presidencial. Lideranças indígenas e ribeirinhas acompanharam a votação das galerias do Senado, vibrando com o resultado.",
    category: "Legislação",
    date: "28 Set, 2024",
    readTime: 5,
    author: "Ricardo Mendes",
    imageUrl: "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?w=800",
    tags: ["Legislação", "Comunidades Tradicionais"],
    page: "politica",
    isHero: false,
    slug: "senado-aprova-projeto-comunidades-tradicionais",
    metaDescription: "Senado aprova projeto que beneficia comunidades tradicionais da Amazônia",
    allowComments: true,
    isPremium: false
  },
  {
    id: 606,
    title: "Câmara dos Deputados cria frente parlamentar da Amazônia",
    description: "Grupo terá como foco políticas de desenvolvimento sustentável e proteção ambiental.",
    fullContent: "Foi criada hoje na Câmara dos Deputados a Frente Parlamentar da Amazônia, que reunirá mais de 200 parlamentares de diferentes partidos. O grupo terá como objetivo discutir e propor políticas públicas voltadas para o desenvolvimento sustentável e a proteção ambiental da região amazônica. 'A Amazônia precisa de atenção especial do Congresso Nacional', afirmou o deputado Carlos Alberto, coordenador da frente. A primeira reunião está marcada para a próxima semana, com a presença de especialistas e lideranças da sociedade civil.",
    category: "Brasília",
    date: "25 Set, 2024",
    readTime: 4,
    author: "Carlos Alberto",
    imageUrl: "https://images.unsplash.com/photo-1541873676-a18131494184?w=800",
    tags: ["Brasília", "Política", "Amazônia"],
    page: "politica",
    isHero: false,
    slug: "camara-frente-parlamentar-amazonia",
    metaDescription: "Câmara cria frente parlamentar dedicada à Amazônia e desenvolvimento sustentável",
    allowComments: true,
    isPremium: false
  }
];

// Inicializar dados
if (!localStorage.getItem(STORAGE_KEY)) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_ARTICLES));
}

// ============================================
// FUNÇÕES PRINCIPAIS - EXPORTADAS DIRETAMENTE
// ============================================

export function getAllArticles() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  return [...DEFAULT_ARTICLES];
}

function saveArticles(articles) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
}

export function getArticleById(id) {
  const articles = getAllArticles();
  return articles.find(article => article.id === parseInt(id));
}

export function addArticle(articleData) {
  const articles = getAllArticles();
  const newId = Math.max(...articles.map(a => a.id), 0) + 1;
  
  const newArticle = {
    id: newId,
    ...articleData,
    date: new Date().toLocaleDateString('pt-BR'),
    readTime: articleData.readTime || 5
  };
  
  articles.unshift(newArticle);
  saveArticles(articles);
  return newArticle;
}

export function updateArticle(id, updates) {
  const articles = getAllArticles();
  const index = articles.findIndex(a => a.id === parseInt(id));
  if (index !== -1) {
    articles[index] = { ...articles[index], ...updates };
    saveArticles(articles);
    return articles[index];
  }
  return null;
}

export function deleteArticle(id) {
  const articles = getAllArticles();
  const index = articles.findIndex(a => a.id === parseInt(id));
  if (index !== -1) {
    articles.splice(index, 1);
    saveArticles(articles);
    return true;
  }
  return false;
}

export function toggleHero(id) {
  const articles = getAllArticles();
  const index = articles.findIndex(a => a.id === parseInt(id));
  if (index !== -1) {
    articles[index].isHero = !articles[index].isHero;
    saveArticles(articles);
    return articles[index];
  }
  return null;
}

export function searchArticles(term) {
  const articles = getAllArticles();
  const lowerTerm = term.toLowerCase();
  return articles.filter(article => 
    article.title.toLowerCase().includes(lowerTerm) ||
    (article.description && article.description.toLowerCase().includes(lowerTerm)) ||
    (article.category && article.category.toLowerCase().includes(lowerTerm)) ||
    (article.tags && article.tags.some(tag => tag.toLowerCase().includes(lowerTerm)))
  );
}

export function getRelatedArticles(currentId, category, limit = 3) {
  const articles = getAllArticles();
  return articles
    .filter(article => article.id !== parseInt(currentId) && article.category === category)
    .slice(0, limit);
}

export function getAllArticlesPaginated(page = 1, limit = 9) {
  const articles = getAllArticles();
  const start = (page - 1) * limit;
  const end = start + limit;
  return {
    articles: articles.slice(start, end),
    hasMore: end < articles.length,
    total: articles.length
  };
}

export function getArticlesByPage(page, limit = 6) {
  const articles = getAllArticles();
  return articles.filter(article => article.page === page).slice(0, limit);
}

export function getHomeArticles() {
  const articles = getAllArticles();
  return articles.filter(article => article.page === 'home');
}

export function getFeaturedArticles() {
  const articles = getAllArticles();
  return articles.filter(article => article.isHero === true && article.page === 'home');
}

// Variável allArticles para compatibilidade
export const allArticles = getAllArticles();

// Export padrão para compatibilidade com imports antigos
const allArticlesExport = {
  getAllArticles,
  getArticleById,
  addArticle,
  updateArticle,
  deleteArticle,
  toggleHero,
  searchArticles,
  getRelatedArticles,
  getAllArticlesPaginated,
  getArticlesByPage,
  getHomeArticles,
  getFeaturedArticles,
  allArticles: getAllArticles()
};

export default allArticlesExport;