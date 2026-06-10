import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllArticles } from '../data/allArticles';

const HeroCarousel = () => {
  const navigate = useNavigate();
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Carregar artigos do localStorage
  useEffect(() => {
    const loadArticles = () => {
      try {
        const articles = getAllArticles();
        console.log('Artigos carregados para o carrossel:', articles);
        
        // Filtra artigos com isHero = true da página home
        const heroArticles = articles.filter(article => article.isHero === true && article.page === 'home');
        console.log('Artigos em destaque (isHero):', heroArticles);
        
        // Se tiver artigos em destaque, usa eles, senão pega os primeiros 5
        const slidesData = heroArticles.length > 0 ? heroArticles : articles.slice(0, 5);
        setSlides(slidesData);
      } catch (error) {
        console.error('Erro ao carregar artigos:', error);
        setSlides([]);
      }
    };
    
    loadArticles();
  }, []);

  const nextSlide = useCallback(() => {
    if (isTransitioning || slides.length === 0) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, slides.length]);

  const prevSlide = () => {
    if (isTransitioning || slides.length === 0) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex || slides.length === 0) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleReadMore = (articleId) => {
    navigate(`/article/${articleId}`);
  };

  // Autoplay - troca de slide a cada 5 segundos
  useEffect(() => {
    if (slides.length === 0) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, slides.length]);

  if (slides.length === 0) {
    return (
      <div className="relative overflow-hidden rounded-xl h-[500px] md:h-[600px] bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">Nenhum artigo em destaque. Adicione artigos com isHero=true no admin.</p>
      </div>
    );
  }

  const currentSlide = slides[currentIndex];
  if (!currentSlide) return null;

  return (
    <section className="mb-12 relative group">
      <div className="relative overflow-hidden rounded-xl h-[500px] md:h-[600px]">
        {/* Imagem de fundo */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out ${
            isTransitioning ? 'scale-105' : 'scale-100'
          }`}
          style={{ backgroundImage: `url(${currentSlide.imageUrl})` }}
        />
        
        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        
        {/* Conteúdo */}
        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full max-w-4xl">
          <span className="inline-block bg-[#C5A059] text-black font-bold px-3 py-1 rounded-full text-xs tracking-tighter mb-4 uppercase">
            {currentSlide.category}
          </span>
          <h1 
            onClick={() => handleReadMore(currentSlide.id)}
            className="font-display-lg text-[32px] md:text-display-lg leading-tight text-white mb-6 text-shadow-hero cursor-pointer hover:underline transition-all duration-300 line-clamp-3"
          >
            {currentSlide.title}
          </h1>
          <div className="flex items-center gap-4 text-white/80">
            <span className="font-label-md text-label-md">Por {currentSlide.author}</span>
            <span className="w-1 h-1 bg-white/40 rounded-full"></span>
            <span className="font-label-md text-label-md">{currentSlide.readTime} min de leitura</span>
            <span className="w-1 h-1 bg-white/40 rounded-full"></span>
            <span className="font-label-md text-label-md">{currentSlide.date}</span>
          </div>
        </div>
      </div>

      {/* Botões de navegação - visíveis apenas no hover */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Anterior"
          >
            <span className="material-symbols-outlined text-2xl md:text-3xl">chevron_left</span>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Próximo"
          >
            <span className="material-symbols-outlined text-2xl md:text-3xl">chevron_right</span>
          </button>

          {/* Indicadores (dots) */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === index
                    ? 'w-8 h-2 bg-[#C5A059]'
                    : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Barra de progresso do autoplay */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
            <div 
              className="h-full bg-[#C5A059] transition-all duration-[5000ms] linear"
              style={{ width: '100%' }}
              key={currentIndex}
            />
          </div>
        </>
      )}
    </section>
  );
};

export default HeroCarousel;