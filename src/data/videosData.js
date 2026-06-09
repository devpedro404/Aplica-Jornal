// Dados iniciais dos vídeos
const videosPadrao = [
  {
    id: 101,
    title: "Expedição Rio Negro: Um mergulho nas águas escuras da vida",
    description: "Documentário sobre a biodiversidade do Rio Negro",
    videoUrl: "https://www.youtube.com/watch?v=KxN5Xx5Xx5E",
    imageUrl: "https://img.youtube.com/vi/KxN5Xx5Xx5E/maxresdefault.jpg",
    category: "Documentário",
    date: "15 Out, 2024",
    views: "2.5k",
    active: true,
    featured: true
  },
  {
    id: 102,
    title: "Sons da Floresta: Documentário imersivo em 8K",
    description: "Uma experiência sonora e visual da Amazônia",
    videoUrl: "https://www.youtube.com/watch?v=JwQZ5xX5x5E",
    imageUrl: "https://img.youtube.com/vi/JwQZ5xX5x5E/maxresdefault.jpg",
    category: "Natureza",
    date: "10 Out, 2024",
    views: "1.8k",
    active: true,
    featured: true
  },
  {
    id: 103,
    title: "Inovação e Tradição: O futuro da extração de borracha",
    description: "Como a tecnologia está transformando a produção sustentável",
    videoUrl: "https://www.youtube.com/watch?v=LxN5Xx5Xx5E",
    imageUrl: "https://img.youtube.com/vi/LxN5Xx5Xx5E/maxresdefault.jpg",
    category: "Sustentabilidade",
    date: "05 Out, 2024",
    views: "3.2k",
    active: true,
    featured: true
  },
  {
    id: 104,
    title: "A Vida Secreta da Floresta Amazônica",
    description: "Animais e plantas em seu habitat natural",
    videoUrl: "https://www.youtube.com/watch?v=YxN5Xx5Xx5E",
    imageUrl: "https://img.youtube.com/vi/YxN5Xx5Xx5E/maxresdefault.jpg",
    category: "Biodiversidade",
    date: "28 Set, 2024",
    views: "4.1k",
    active: true,
    featured: false
  },
  {
    id: 105,
    title: "Comunidades Ribeirinhas: Guardiões da Floresta",
    description: "O dia a dia das populações tradicionais",
    videoUrl: "https://www.youtube.com/watch?v=ZxN5Xx5Xx5E",
    imageUrl: "https://img.youtube.com/vi/ZxN5Xx5Xx5E/maxresdefault.jpg",
    category: "Cultura",
    date: "20 Set, 2024",
    views: "1.5k",
    active: true,
    featured: false
  },
  {
    id: 106,
    title: "Desmatamento Zero: É possível?",
    description: "Debate sobre conservação ambiental na Amazônia",
    videoUrl: "https://www.youtube.com/watch?v=AxN5Xx5Xx5E",
    imageUrl: "https://img.youtube.com/vi/AxN5Xx5Xx5E/maxresdefault.jpg",
    category: "Meio Ambiente",
    date: "15 Set, 2024",
    views: "5.2k",
    active: true,
    featured: false
  }
];

// Carregar dados salvos do localStorage
const loadSavedVideos = () => {
  const saved = localStorage.getItem('videosData');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.length > 0) {
        return parsed;
      }
    } catch (e) {
      console.error('Erro ao carregar vídeos:', e);
    }
  }
  return [...videosPadrao];
};

// Salvar vídeos no localStorage
const saveVideos = (videos) => {
  localStorage.setItem('videosData', JSON.stringify(videos));
};

// Estado global dos vídeos
let videos = loadSavedVideos();

// ============================================
// FUNÇÕES CRUD - EXPORTADAS
// ============================================

// Pegar todos os vídeos
export const getAllVideos = () => {
  return [...videos];
};

// Pegar vídeos ativos
export const getActiveVideos = () => {
  return videos.filter(video => video.active === true);
};

// Pegar vídeos em destaque
export const getFeaturedVideos = (limit = 3) => {
  return videos.filter(video => video.featured === true && video.active === true).slice(0, limit);
};

// Pegar vídeo por ID
export const getVideoById = (id) => {
  return videos.find(video => video.id === parseInt(id));
};

// Adicionar vídeo
export const addVideo = (videoData) => {
  const newId = Math.max(...videos.map(v => v.id), 0) + 1;
  const today = new Date();
  const formattedDate = `${today.getDate()} ${today.toLocaleString('pt-BR', { month: 'short' })}, ${today.getFullYear()}`;
  
  const newVideo = {
    id: newId,
    ...videoData,
    date: formattedDate,
    views: "0",
    active: true,
    featured: false
  };
  
  videos.unshift(newVideo);
  saveVideos(videos);
  return newVideo;
};

// Atualizar vídeo
export const updateVideo = (id, updates) => {
  const index = videos.findIndex(v => v.id === parseInt(id));
  if (index !== -1) {
    videos[index] = { ...videos[index], ...updates };
    saveVideos(videos);
    return videos[index];
  }
  return null;
};

// Deletar vídeo
export const deleteVideo = (id) => {
  const index = videos.findIndex(v => v.id === parseInt(id));
  if (index !== -1) {
    videos.splice(index, 1);
    saveVideos(videos);
    return true;
  }
  return false;
};

// Alternar destaque
export const toggleFeatured = (id) => {
  const index = videos.findIndex(v => v.id === parseInt(id));
  if (index !== -1) {
    videos[index].featured = !videos[index].featured;
    saveVideos(videos);
    return videos[index];
  }
  return null;
};

// Alternar ativo/inativo
export const toggleActive = (id) => {
  const index = videos.findIndex(v => v.id === parseInt(id));
  if (index !== -1) {
    videos[index].active = !videos[index].active;
    saveVideos(videos);
    return videos[index];
  }
  return null;
};

// Extrair ID do YouTube
export const getYouTubeId = (url) => {
  if (!url) return '';
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([^&]+)/,
    /(?:youtu\.be\/)([^?]+)/,
    /(?:youtube\.com\/embed\/)([^?]+)/,
    /(?:youtube\.com\/shorts\/)([^?]+)/
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return '';
};

// Gerar thumbnail do YouTube
export const getYouTubeThumbnail = (url) => {
  const videoId = getYouTubeId(url);
  if (videoId) {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  }
  return '';
};