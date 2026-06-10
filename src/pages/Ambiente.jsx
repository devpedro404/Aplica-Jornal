import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NewsCard from '../components/NewsCard';
import { getAllArticles } from '../data/allArticles';

const Ambiente = () => {
  const navigate = useNavigate();
  const [featuredArticles, setFeaturedArticles] = useState([]);
  const [moreArticles, setMoreArticles] = useState([]);

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = () => {
    const allArticles = getAllArticles();
    const ambientArticles = allArticles.filter(article => article.page === 'ambiente');
    setFeaturedArticles(ambientArticles.slice(0, 3));
    setMoreArticles(ambientArticles.slice(3, 6));
  };

  const handleReadMore = (articleId) => {
    navigate(`/article/${articleId}`);
  };

  return (
    <div className="pt-24 pb-20 px-4 md:px-8 max-w-[1280px] mx-auto">
      <div className="mb-12 border-l-4 border-secondary pl-6">
        <h1 className="font-display-lg text-[40px] md:text-display-lg text-primary tracking-tight mb-2">
          Ambiente
        </h1>
        <p className="font-body-lg text-body-lg text-gray-600 max-w-2xl">
          Cobertura completa sobre conservação, desmatamento e mudanças climáticas na Amazônia.
        </p>
      </div>

      {featuredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {featuredArticles.map((article) => (
            <NewsCard key={article.id} {...article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-400">
          Nenhum artigo encontrado. Adicione artigos no admin.
        </div>
      )}
    </div>
  );
};

export default Ambiente;