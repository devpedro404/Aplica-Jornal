import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllArticles } from '../data/allArticles';

const HeroCarousel = () => {
  const navigate = useNavigate();
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    try {
      const articles = getAllArticles();
      const articlesArray = Array.isArray(articles) ? articles : [];
      const heroArticles = articlesArray.filter(article => article.isHero === true).slice(0, 5);
      setSlides(heroArticles.length > 0 ? heroArticles : articlesArray.slice(0, 5));
    } catch (error) {
      console.error('Erro:', error);
      setSlides([]);
    }
  }, []);

  if (slides.length === 0) {
    return (
      <div className="bg-gray-200 dark:bg-gray-700 rounded-xl h-[400px] flex items-center justify-center">
        <p className="text-gray-500">Carregando...</p>
      </div>
    );
  }

  const currentSlide = slides[currentIndex];

  return (
    <div className="relative rounded-xl overflow-hidden h-[400px] md:h-[500px] group">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${currentSlide.imageUrl})` }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 md:p-10 text-white">
        <span className="bg-yellow-600 px-3 py-1 rounded text-sm">{currentSlide.category}</span>
        <h2 className="text-2xl md:text-3xl font-bold mt-3">{currentSlide.title}</h2>
        <p className="text-sm mt-2 opacity-90">Por {currentSlide.author}</p>
      </div>
    </div>
  );
};

export default HeroCarousel;