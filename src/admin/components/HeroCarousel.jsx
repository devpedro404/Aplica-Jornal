import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { allArticles } from '../data/allArticles';

const HeroCarousel = () => {
  const navigate = useNavigate();
  // Pega apenas os artigos marcados como isHero ou os primeiros 5
  const heroArticles = allArticles.filter(article => article.isHero === true).slice(0, 5);
  
  // Se não tiver artigos com isHero, pega os 5 primeiros
  const slides = heroArticles.length > 0 ? heroArticles : allArticles.slice(0, 5);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Próximo slide
  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Slide anterior
  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Ir para um slide específico
  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Autoplay - troca de slide a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 5 segundos

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Navegar para o artigo
  const handleReadMore = (articleId) => {
    navigate(`/article/${articleId}`);
  };

  const currentSlide = slides[currentIndex];

  if (!currentSlide) return null;

  return (
    <section className="mb-12 relative group">
      <div className="relative overflow-hidden rounded-xl h-[500px] md:h-[600px]">
        {/* Imagem de fundo com transição suave */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out ${
            isTransitioning ? 'scale-105' : 'scale-100'
          }`}
          style={{ backgroundImage: `url(${currentSlide.imageUrl})` }}
        />
        
        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
        
        {/* Conteúdo */}
        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full max-w-4xl">
          <span className="inline-block bg-[#C5A059] text-primary font-bold px-3 py-1 rounded-sm text-xs tracking-tighter mb-4 uppercase">
            {currentSlide.category}
          </span>
          <h1 
            onClick={() => handleReadMore(currentSlide.id)}
            className="font-display-lg text-[32px] md:text-display-lg leading-tight text-white mb-6 text-shadow-hero cursor-pointer hover:underline transition-all duration-300"
          >
            {currentSlide.title}
          </h1>
          <div className="flex items-center gap-4 text-white/80">
            <span className="font-label-md text-label-md">Por {currentSlide.author}</span>
            <span className="w-1 h-1 bg-white/40 rounded-full"></span>
            <span className="font-label-md text-label-md">{currentSlide.readTime} min de leitura</span>
          </div>
        </div>
      </div>

      {/* Botões de navegação (setas) - visíveis apenas no hover */}
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

      {/* Timer/progress bar do autoplay */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div 
          className="h-full bg-[#C5A059] transition-all duration-[5000ms] linear"
          style={{ width: '100%' }}
          key={currentIndex}
        />
      </div>
    </section>
  );
};

export default HeroCarousel;