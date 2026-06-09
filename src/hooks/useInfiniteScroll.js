import { useState, useEffect, useCallback, useRef } from 'react';
import { getAllArticlesPaginated } from '../data/allArticles';

const useInfiniteScroll = (initialPage = 1, itemsPerPage = 9) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(initialPage);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [totalArticles, setTotalArticles] = useState(0);
  const observerRef = useRef(null);
  const lastArticleRef = useRef(null);

  const loadMoreArticles = useCallback(async () => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    
    // Simular delay de carregamento (opcional)
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const result = getAllArticlesPaginated(page, itemsPerPage);
    
    setArticles(prev => [...prev, ...result.articles]);
    setHasMore(result.hasMore);
    setTotalArticles(result.total);
    setPage(prev => prev + 1);
    setLoading(false);
  }, [page, loading, hasMore, itemsPerPage]);

  // Configurar observer para scroll infinito
  useEffect(() => {
    if (loading) return;
    
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMoreArticles();
        }
      },
      { threshold: 0.1 }
    );
    
    if (lastArticleRef.current) {
      observerRef.current.observe(lastArticleRef.current);
    }
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [loading, hasMore, loadMoreArticles, articles.length]);

  return {
    articles,
    loading,
    hasMore,
    totalArticles,
    lastArticleRef,
    loadMoreArticles,
    setArticles
  };
};

export default useInfiniteScroll;