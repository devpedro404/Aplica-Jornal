import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllVideos } from '../data/videosData';

const Videos = () => {
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', 'Documentário', 'Natureza', 'Sustentabilidade', 'Biodiversidade', 'Cultura', 'Meio Ambiente'];

  // Carregar vídeos do admin
  useEffect(() => {
    loadVideos();
  }, []);

  const loadVideos = () => {
    const allVideos = getAllVideos();
    // Filtrar apenas vídeos ativos
    const activeVideos = allVideos.filter(v => v.active === true);
    setVideos(activeVideos);
  };

  const filteredVideos = selectedCategory === 'Todos' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  const handleVideoClick = (videoId) => {
    navigate(`/video/${videoId}`);
  };

  return (
    <div className="pt-24 pb-20 px-4 md:px-8 max-w-[1280px] mx-auto">
      {/* Header */}
      <div className="mb-8 text-center md:text-left">
        <h1 className="font-display-lg text-3xl md:text-4xl text-primary dark:text-white mb-2">
          Amazônia em Foco
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
          Documentários, reportagens e vídeos exclusivos sobre a maior floresta tropical do mundo
        </p>
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2 no-scrollbar justify-center md:justify-start">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
              selectedCategory === cat
                ? 'bg-primary text-white shadow-md'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid de Vídeos */}
      {filteredVideos.length === 0 ? (
        <div className="text-center py-20">
          <span className="material-symbols-outlined text-6xl text-gray-400 mb-4">video_library</span>
          <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">Nenhum vídeo encontrado</h3>
          <p className="text-gray-500 dark:text-gray-400">Tente outra categoria ou adicione vídeos no admin</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div 
              key={video.id} 
              onClick={() => handleVideoClick(video.id)}
              className="group cursor-pointer bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all"
            >
              <div className="relative aspect-video overflow-hidden bg-gray-900">
                <img 
                  src={video.imageUrl} 
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/640x360?text=Vídeo+Indisponível';
                  }}
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-3xl">play_arrow</span>
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 bg-black/60 px-2 py-0.5 rounded text-xs text-white">
                  {video.category}
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-gray-900 dark:text-white line-clamp-2 mb-1 group-hover:text-primary dark:group-hover:text-green-400 transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-3">
                  {video.description}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400 dark:text-gray-500">
                  <span>{video.date}</span>
                  <span>{video.views} visualizações</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Newsletter */}
      <div className="mt-16">
        <div className="bg-primary-container dark:bg-gray-800 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-headline-md text-headline-md text-white mb-3">
            Receba nossos vídeos no seu e-mail
          </h3>
          <p className="text-white/80 mb-6">
            Inscreva-se para receber as melhores produções audiovisuais sobre a Amazônia
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded-lg bg-white/20 text-white placeholder:text-white/60 border border-white/30 focus:outline-none focus:border-white"
            />
            <button className="px-6 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-secondary-fixed hover:text-primary transition-colors">
              Inscrever-se
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Videos;