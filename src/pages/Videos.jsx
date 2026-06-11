import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllVideos } from '../data/videosData';
import { getYouTubeId } from '../data/videosData';

const Videos = () => {
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadVideos();
  }, []);

  const loadVideos = () => {
    try {
      const allVideos = getAllVideos();
      console.log('Todos os vídeos:', allVideos);
      
      // Filtrar apenas vídeos ativos da categoria Podcast
      const podcastVideos = allVideos.filter(v => v.active === true && v.category === 'Podcast');
      console.log('Vídeos do Podcast:', podcastVideos);
      
      setVideos(podcastVideos);
    } catch (error) {
      console.error('Erro ao carregar vídeos:', error);
      setVideos([]);
    } finally {
      setLoading(false);
    }
  };

  const handleVideoClick = (videoId) => {
    navigate(`/video/${videoId}`);
  };

  if (loading) {
    return (
      <div className="pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-2">
          Podcast
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
          Episódios exclusivos do podcast Geovane Oliveira, com discussões profundas sobre a Amazônia, política, cultura e muito mais.
        </p>
      </div>

      {/* Grid de Podcasts */}
      {videos.length === 0 ? (
        <div className="text-center py-20">
          <span className="material-symbols-outlined text-6xl text-gray-400 mb-4">podcasts</span>
          <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">Nenhum episódio encontrado</h3>
          <p className="text-gray-500 dark:text-gray-400">Adicione episódios no painel administrativo.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => {
            const videoId = getYouTubeId(video.videoUrl);
            const thumbnailUrl = video.imageUrl || (videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400');
            
            return (
              <div
                key={video.id}
                onClick={() => handleVideoClick(video.id)}
                className="group cursor-pointer bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden bg-gray-900">
                  <img
                    src={thumbnailUrl}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-4xl">play_arrow</span>
                    </div>
                  </div>
                  {/* Badge Podcast */}
                  <div className="absolute bottom-2 left-2 bg-green-600 px-2 py-0.5 rounded text-xs text-white font-semibold">
                    Podcast
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2 line-clamp-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-3">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400 dark:text-gray-500">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      <span>{video.duration || '30 min'}</span>
                    </div>
                    <span>{video.date}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Newsletter */}
      <div className="mt-16">
        <div className="bg-green-800 dark:bg-gray-800 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-headline-md text-headline-md text-white mb-3">
            Não perca nenhum episódio
          </h3>
          <p className="text-white/80 mb-6">
            Inscreva-se para receber notificações sobre novos episódios do podcast.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded-lg bg-white/20 text-white placeholder:text-white/60 border border-white/30 focus:outline-none focus:border-white"
            />
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Inscrever-se
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Videos;