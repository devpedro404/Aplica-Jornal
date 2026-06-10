const STORAGE_KEY = 'omda_videos';

// Imagens placeholder para os vídeos
const placeholderImages = [
  'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400',
  'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400'
];

const DEFAULT_VIDEOS = [
  {
    id: 101,
    title: "Expedição Rio Negro",
    description: "Documentário sobre a biodiversidade do Rio Negro",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    imageUrl: placeholderImages[0],
    category: "Documentário",
    date: "15 Out, 2024",
    views: "2.5k",
    active: true,
    featured: true
  },
  {
    id: 102,
    title: "Sons da Floresta",
    description: "Uma experiência sonora e visual da Amazônia",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    imageUrl: placeholderImages[1],
    category: "Natureza",
    date: "10 Out, 2024",
    views: "1.8k",
    active: true,
    featured: true
  },
  {
    id: 103,
    title: "Inovação e Tradição",
    description: "O futuro da extração sustentável",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    imageUrl: placeholderImages[2],
    category: "Sustentabilidade",
    date: "05 Out, 2024",
    views: "3.2k",
    active: true,
    featured: true
  }
];

if (!localStorage.getItem(STORAGE_KEY)) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_VIDEOS));
}

let videos = JSON.parse(localStorage.getItem(STORAGE_KEY));

const saveVideos = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(videos));
};

export const getAllVideos = () => {
  return [...videos];
};

export const getActiveVideos = () => {
  return videos.filter(video => video.active === true);
};

export const getFeaturedVideos = (limit = 3) => {
  return videos.filter(video => video.featured === true && video.active === true).slice(0, limit);
};

export const getVideoById = (id) => {
  return videos.find(video => video.id === parseInt(id));
};

export const addVideo = (videoData) => {
  const newId = Math.max(...videos.map(v => v.id), 0) + 1;
  const newVideo = { 
    id: newId, 
    ...videoData, 
    active: true, 
    featured: false,
    imageUrl: videoData.imageUrl || placeholderImages[0]
  };
  videos.unshift(newVideo);
  saveVideos();
  return newVideo;
};

export const updateVideo = (id, updates) => {
  const index = videos.findIndex(v => v.id === parseInt(id));
  if (index !== -1) {
    videos[index] = { ...videos[index], ...updates };
    saveVideos();
    return videos[index];
  }
  return null;
};

export const deleteVideo = (id) => {
  const index = videos.findIndex(v => v.id === parseInt(id));
  if (index !== -1) {
    videos.splice(index, 1);
    saveVideos();
    return true;
  }
  return false;
};

export const toggleFeatured = (id) => {
  const index = videos.findIndex(v => v.id === parseInt(id));
  if (index !== -1) {
    videos[index].featured = !videos[index].featured;
    saveVideos();
    return videos[index];
  }
  return null;
};

export const getYouTubeId = (url) => {
  if (!url) return '';
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([^&]+)/,
    /(?:youtu\.be\/)([^?]+)/,
    /(?:youtube\.com\/embed\/)([^?]+)/
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return '';
};