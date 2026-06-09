// Chave única para o localStorage
const STORAGE_KEY = 'omda_articles';

// Dados padrão
const DEFAULT_ARTICLES = [
  {
    id: 1,
    title: "Biotecnologia: A nova fronteira medicinal",
    description: "Pesquisadores identificam compostos revolucionários.",
    fullContent: "Conteúdo completo do artigo...",
    category: "Ambiente",
    date: "24 Mai, 2024",
    readTime: 8,
    author: "Ricardo Alencar",
    imageUrl: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800",
    tags: ["Biotecnologia"],
    page: "home",
    isHero: true,
    slug: "biotecnologia",
    metaDescription: "Descrição meta",
    allowComments: true,
    isPremium: false
  },
  {
    id: 2,
    title: "Lideranças indígenas articulam novo bloco",
    description: "Movimento busca consolidar direitos territoriais.",
    fullContent: "Conteúdo completo...",
    category: "Política",
    date: "23 Mai, 2024",
    readTime: 15,
    author: "Nayara Tukano",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800",
    tags: ["Política"],
    page: "home",
    isHero: true,
    slug: "liderancas-indigenas",
    metaDescription: "Descrição",
    allowComments: true,
    isPremium: false
  }
];

// Inicializar dados
if (!localStorage.getItem(STORAGE_KEY)) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_ARTICLES));
}

// Pegar todos os artigos
export const getAllArticles = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  return [...DEFAULT_ARTICLES];
};

// Pegar artigo por ID
export const getArticleById = (id) => {
  const articles = getAllArticles();
  return articles.find(article => article.id === parseInt(id));
};

// Adicionar artigo
export const addArticle = (articleData) => {
  const articles = getAllArticles();
  const newId = Math.max(...articles.map(a => a.id), 0) + 1;
  
  const newArticle = {
    id: newId,
    ...articleData,
    date: new Date().toLocaleDateString('pt-BR'),
    readTime: articleData.readTime || 5
  };
  
  articles.unshift(newArticle);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
  return newArticle;
};

// Atualizar artigo
export const updateArticle = (id, updates) => {
  const articles = getAllArticles();
  const index = articles.findIndex(a => a.id === parseInt(id));
  if (index !== -1) {
    articles[index] = { ...articles[index], ...updates };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
    return articles[index];
  }
  return null;
};

// Deletar artigo
export const deleteArticle = (id) => {
  const articles = getAllArticles();
  const index = articles.findIndex(a => a.id === parseInt(id));
  if (index !== -1) {
    articles.splice(index, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
    return true;
  }
  return false;
};

// Alternar destaque
export const toggleHero = (id) => {
  const articles = getAllArticles();
  const index = articles.findIndex(a => a.id === parseInt(id));
  if (index !== -1) {
    articles[index].isHero = !articles[index].isHero;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
    return articles[index];
  }
  return null;
};

// Buscar artigos
export const searchArticles = (term) => {
  const articles = getAllArticles();
  const lowerTerm = term.toLowerCase();
  return articles.filter(article => 
    article.title.toLowerCase().includes(lowerTerm) ||
    (article.description && article.description.toLowerCase().includes(lowerTerm))
  );
};

// Pegar artigos relacionados
export const getRelatedArticles = (currentId, category, limit = 3) => {
  const articles = getAllArticles();
  return articles
    .filter(article => article.id !== parseInt(currentId) && article.category === category)
    .slice(0, limit);
};

// Pegar artigos paginados
export const getAllArticlesPaginated = (page = 1, limit = 9) => {
  const articles = getAllArticles();
  const start = (page - 1) * limit;
  const end = start + limit;
  return {
    articles: articles.slice(start, end),
    hasMore: end < articles.length,
    total: articles.length
  };
};

export const allArticles = getAllArticles();

export default { getAllArticles, getArticleById, addArticle, updateArticle, deleteArticle, toggleHero, searchArticles, getRelatedArticles, getAllArticlesPaginated, allArticles };