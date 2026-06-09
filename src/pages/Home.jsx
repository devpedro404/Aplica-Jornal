import React from 'react';
import { useNavigate } from 'react-router-dom';
import NewsCard from '../components/NewsCard';
import VideoCard from '../components/VideoCard';
import NewsletterSection from '../components/NewsletterSection';
import HeroCarousel from '../components/HeroCarousel';
import { getAllArticles } from '../data/allArticles';
import { getActiveVideos } from '../data/videosData';

const Home = () => {
  const navigate = useNavigate();

  // Pega todos os artigos usando a função correta
  const allArticles = getAllArticles();
  
  // Pega os artigos em destaque (isHero = true) para as Principais Coberturas
  const featuredNews = allArticles
    .filter(article => article.isHero === true && article.page === 'home')
    .slice(0, 4);

  // Pega os artigos secundários (não destaque) para a grid abaixo
  const secondaryNews = allArticles
    .filter(article => article.isHero !== true && article.page === 'home')
    .slice(0, 3);

  // Pega os vídeos ativos
  const videos = getActiveVideos ? getActiveVideos().slice(0, 5) : [];

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

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 md:px-8 pt-8 pb-32">
      
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Main News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-12">
        <div className="md:col-span-8 space-y-6">
          <h2 className="font-headline-lg text-headline-lg flex items-center gap-3 mb-4">
            <span className="w-8 h-1 bg-secondary rounded-full"></span>
            Principais Coberturas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredNews.length > 0 ? (
              featuredNews.map((news) => (
                <NewsCard key={news.id} {...news} onReadMore={() => handleReadMore(news.id)} />
              ))
            ) : (
              <div className="col-span-2 text-center py-10 text-gray-400">
                Nenhum artigo em destaque. Clique em "Destaques" no admin para selecionar.
              </div>
            )}
          </div>
        </div>

        {/* Sidebar "Mais Lidas" */}
        <aside className="md:col-span-4">
          <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/10 sticky top-24">
            <h2 className="font-headline-md text-headline-md mb-8 flex items-center justify-between">
              Mais Lidas
              <span className="material-symbols-outlined text-secondary">trending_up</span>
            </h2>
            <div className="space-y-8">
              {trendingTopics.map((topic, index) => (
                <div 
                  key={index} 
                  onClick={() => handleReadMore(topic.id)}
                  className="flex gap-6 group cursor-pointer"
                >
                  <span className="text-4xl font-display-lg text-secondary-container font-black leading-none group-hover:text-secondary transition-colors">
                    {topic.rank}
                  </span>
                  <div>
                    <h4 className="font-body-lg font-semibold leading-snug group-hover:underline">
                      {topic.title}
                    </h4>
                    <p className="text-xs text-on-surface-variant/60 mt-2 font-label-md uppercase tracking-widest">
                      {topic.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-full mt-12 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all uppercase text-xs tracking-widest"
            >
              Ver Ranking Completo
            </button>
          </div>
        </aside>
      </div>

      {/* Secondary News Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {secondaryNews.length > 0 ? (
          secondaryNews.map((news) => (
            <NewsCard key={news.id} {...news} onReadMore={() => handleReadMore(news.id)} />
          ))
        ) : (
          <div className="col-span-3 text-center py-10 text-gray-400">
            Nenhum artigo secundário encontrado.
          </div>
        )}
      </div>

      {/* Video Section - AMAZÔNIA EM FOCO */}
      <section className="mt-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary">Amazônia em Foco</h2>
            <p className="text-sm text-on-surface-variant mt-1">Vídeos e documentários sobre a maior floresta tropical do mundo</p>
          </div>
          <button 
            onClick={handleViewAllVideos}
            className="text-secondary font-label-md text-label-md flex items-center gap-2 hover:underline transition-all group"
          >
            Ver todos os vídeos
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
        
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x no-scrollbar scrollbar-thin scrollbar-thumb-secondary scrollbar-track-gray-200">
          {videos.length > 0 ? (
            videos.map((video) => (
              <VideoCard key={video.id} {...video} />
            ))
          ) : (
            <div className="w-full text-center py-10 text-gray-400">
              Nenhum vídeo cadastrado. Acesse o admin para adicionar vídeos.
            </div>
          )}
        </div>

        {/* Indicador de scroll (opcional) */}
        <div className="flex justify-center gap-1 mt-4 md:hidden">
          {videos.map((_, index) => (
            <div key={index} className="w-1.5 h-1.5 rounded-full bg-outline-variant/50"></div>
          ))}
        </div>
      </section>

      <NewsletterSection />
    </div>
  );
};

export default Home;