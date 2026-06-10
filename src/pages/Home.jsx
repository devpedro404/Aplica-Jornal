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
    <div className="w-full max-w-[1280px] mx-auto px-4 pt-8 pb-32">
      
      <HeroCarousel />

      {/* Main News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-12">
        <div className="md:col-span-8">
          <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
            <span className="w-8 h-1 bg-green-600 rounded-full"></span>
            Principais Coberturas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        {/* Sidebar "Mais Lidas" */}
        <aside className="md:col-span-4">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-8 flex items-center justify-between">
              Mais Lidas
              {/* Ícone trending_up na cor VERDE (#1e6b4c) */}
              <span className="material-symbols-outlined text-[#1e6b4c] text-3xl">trending_up</span>
            </h3>
            <div className="space-y-8">
              {trendingTopics.map((topic, idx) => (
                <div 
                  key={idx} 
                  className="flex gap-5 cursor-pointer group" 
                  onClick={() => handleReadMore(topic.id)}
                >
                  <span className="text-4xl font-black text-gray-300 group-hover:text-[#1e6b4c] transition-colors">
                    {topic.rank}
                  </span>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-[#1e6b4c] transition-colors leading-relaxed">
                      {topic.title}
                    </p>
                    <span className="text-sm text-gray-400 uppercase tracking-wider font-semibold mt-2 inline-block">
                      {topic.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {/* Botão VER RANKING COMPLETO na cor VERDE */}
            <button 
              onClick={() => navigate('/todas-noticias')}
              className="w-full mt-10 py-4 border-2 border-[#1e6b4c] text-[#1e6b4c] rounded-xl text-base font-bold hover:bg-[#1e6b4c] hover:text-white transition-colors"
            >
              VER RANKING COMPLETO
            </button>
          </div>
        </aside>
      </div>

      {/* Secondary News Grid */}
      {secondaryNews.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {secondaryNews.map((news) => (
            <NewsCard key={news.id} {...news} />
          ))}
        </div>
      )}

      {/* Video Section */}
      <section className="mt-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Amazônia em Foco</h2>
          <button onClick={handleViewAllVideos} className="text-[#1e6b4c] hover:underline text-sm">
            Ver todos os vídeos →
          </button>
        </div>
        <div className="flex overflow-x-auto gap-6 pb-4">
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