import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NewsCard from '../components/NewsCard';
import LoadMoreButton from '../components/LoadMoreButton';
import { allArticles, getAllArticlesPaginated } from '../data/allArticles';

const Geral = () => {
  const navigate = useNavigate();
  const [geralArticles, setGeralArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleReadMore = (articleId) => {
    navigate(`/article/${articleId}`);
  };

  const loadMoreGeral = async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    const result = getAllArticlesPaginated(page, 6);
    setGeralArticles(prev => [...prev, ...result.articles]);
    setHasMore(result.hasMore);
    setPage(prev => prev + 1);
    setLoading(false);
  };

  // Carregamento inicial
  useEffect(() => {
    const initialArticles = allArticles.slice(0, 6);
    setGeralArticles(initialArticles);
    setHasMore(6 < allArticles.length);
  }, []);

  // Resto do componente permanece igual...
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* ... seu código existente ... */}
      </div>
    </div>
  );
};

export default Geral;