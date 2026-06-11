import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NewsCard from '../components/NewsCard';
import VideoCard from '../components/VideoCard';
import NewsletterSection from '../components/NewsletterSection';
import HeroCarousel from '../components/HeroCarousel';
import { getAllArticles } from '../data/allArticles';
import { getActiveVideos } from '../data/videosData';

const Home = () => {
  const navigate = useNavigate();
  const [featuredNews, setFeaturedNews] = useState([]);
  const [secondaryNews, setSecondaryNews] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    try {
      const allArticles = getAllArticles();
      const homeArticles = allArticles.filter(a => a.page === 'home');
      const featured = homeArticles.filter(a => a.isHero === true).slice(0, 4);
      const secondary = homeArticles.filter(a => a.isHero !== true).slice(0, 3);
      setFeaturedNews(featured);
      setSecondaryNews(secondary);
      
      const activeVideos = getActiveVideos();
      setVideos(activeVideos.slice(0, 5));
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    } finally {
      setLoading(false);
    }
  };

  const trendingTopics = [
    { rank: "01", title: "A corrida pelo Ouro Branco: O lítio e o impacto nas terras baixas.", category: "Tecnologia", id: 7 },
    { rank: "02", title: "Culinária ancestral: Como o tucupi conquistou as cozinhas da Europa.", category: "Cultura", id: 8 },
    { rank: "03", title: "Fundo Amazônia libera novos editais para startups sustentáveis.", category: "Economia", id: 9 },
  ];

  const handleReadMore = (articleId) => {
    navigate(`/article/${articleId}`);
  };

  const handleViewAllVideos = () => {
    navigate('/videos');
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <HeroCarousel />

      {/* Main News Grid - Responsivo */}
      <div className="flex flex-col lg:flex-row gap-6 mt-8 lg:mt-12">
        {/* Coluna principal */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-3 mb-4 sm:mb-6">
            <span className="w-6 h-1 sm:w-8 sm:h-1 bg-green-600 rounded-full"></span>
            Principais Coberturas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {featuredNews.length > 0 ? (
              featuredNews.map((news) => (
                <NewsCard key={news.id} {...news} />
              ))
            ) : (
              <div className="col-span-2 text-center py-10 text-gray-400">
                Nenhum artigo em destaque.
              </div>
            )}
          </div>
        </div>

        {/* Sidebar - Mais Lidas */}
        <aside className="w-full lg:w-1/3 mt-6 lg:mt-0">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center justify-between">
              Mais Lidas
              <span className="material-symbols-outlined text-green-600 text-2xl sm:text-3xl">trending_up</span>
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {trendingTopics.map((topic, idx) => (
                <div 
                  key={idx} 
                  className="flex gap-3 sm:gap-4 cursor-pointer group" 
                  onClick={() => handleReadMore(topic.id)}
                >
                  <span className="text-2xl sm:text-3xl font-black text-gray-300 group-hover:text-green-600 transition-colors">
                    {topic.rank}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200 group-hover:text-green-600 transition-colors leading-relaxed">
                      {topic.title}
                    </p>
                    <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold mt-1 inline-block">
                      {topic.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <button 
              onClick={() => navigate('/todas-noticias')}
              className="w-full mt-6 sm:mt-8 py-2 sm:py-3 border-2 border-green-600 text-green-600 rounded-lg text-sm sm:text-base font-bold hover:bg-green-600 hover:text-white transition-colors"
            >
              VER RANKING COMPLETO
            </button>
          </div>
        </aside>
      </div>

      {/* Secondary News Grid - Responsivo */}
      {secondaryNews.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
          {secondaryNews.map((news) => (
            <NewsCard key={news.id} {...news} />
          ))}
        </div>
      )}

      {/* Video Section - Responsivo */}
      <section className="mt-12 sm:mt-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold">Amazônia em Foco</h2>
          <button onClick={handleViewAllVideos} className="text-green-600 hover:underline text-sm">
            Ver todos os vídeos →
          </button>
        </div>
        <div className="flex overflow-x-auto gap-4 sm:gap-6 pb-4 scrollbar-thin">
          {videos.length > 0 ? (
            videos.map((video) => <VideoCard key={video.id} {...video} />)
          ) : (
            <p className="text-gray-400">Nenhum vídeo cadastrado.</p>
          )}
        </div>
      </section>

      <NewsletterSection />
    </div>
  );
};

export default Home;