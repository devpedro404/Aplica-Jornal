import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import NewsCard from '../components/NewsCard';
import LoadMoreButton from '../components/LoadMoreButton';
import { allArticles, searchArticles } from '../data/allArticles';

const TodasNoticias = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [totalArticles, setTotalArticles] = useState(allArticles.length);

  // Categorias únicas
  const categories = ['Todas', ...new Set(allArticles.map(a => a.category))];

  // Filtrar artigos por categoria
  const getFilteredArticles = useCallback(() => {
    let filtered = allArticles;
    
    if (selectedCategory !== 'Todas') {
      filtered = filtered.filter(a => a.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = searchArticles(searchTerm);
    }
    
    return filtered;
  }, [selectedCategory, searchTerm]);

  // Carregar mais artigos
  const loadMoreArticles = useCallback(async () => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const filtered = getFilteredArticles();
    const start = (page - 1) * 9;
    const end = start + 9;
    const newArticles = filtered.slice(start, end);
    
    setArticles(prev => [...prev, ...newArticles]);
    setHasMore(end < filtered.length);
    setPage(prev => prev + 1);
    setLoading(false);
  }, [page, loading, hasMore, getFilteredArticles]);

  // Resetar ao mudar filtros
  const handleFilterChange = (category) => {
    setSelectedCategory(category);
    setSearchTerm('');
    setArticles([]);
    setPage(1);
    setHasMore(true);
    
    const filtered = category === 'Todas' ? allArticles : allArticles.filter(a => a.category === category);
    const initialArticles = filtered.slice(0, 9);
    setArticles(initialArticles);
    setHasMore(9 < filtered.length);
    setTotalArticles(filtered.length);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const term = e.target.search.value;
    setSearchTerm(term);
    setSelectedCategory('Todas');
    setArticles([]);
    setPage(1);
    setHasMore(true);
    
    const filtered = searchArticles(term);
    const initialArticles = filtered.slice(0, 9);
    setArticles(initialArticles);
    setHasMore(9 < filtered.length);
    setTotalArticles(filtered.length);
  };

  // Carregamento inicial
  useEffect(() => {
    const initialArticles = allArticles.slice(0, 9);
    setArticles(initialArticles);
    setHasMore(9 < allArticles.length);
  }, []);

  const handleReadMore = (articleId) => {
    navigate(`/article/${articleId}`);
  };

  return (
    <div className="pt-24 pb-20 px-4 md:px-8 max-w-[1280px] mx-auto">
      {/* Header */}
      <div className="mb-12 border-l-4 border-secondary pl-6">
        <h1 className="font-display-lg text-[40px] md:text-display-lg text-primary tracking-tight mb-2">
          Todas as Notícias
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Acompanhe todas as notícias, reportagens e investigações da Amazônia em um só lugar.
        </p>
      </div>

      {/* Barra de Busca */}
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant/40">
              search
            </span>
            <input
              type="text"
              name="search"
              placeholder="Buscar notícias por título, categoria ou tag..."
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-outline-variant/20 bg-white focus:ring-2 focus:ring-secondary focus:border-secondary outline-none"
            />
          </div>
          <button
            type="submit"
            className="px-8 py-4 bg-primary text-white rounded-xl font-label-md text-label-md hover:bg-secondary transition-colors"
          >
            Buscar
          </button>
        </div>
      </form>

      {/* Filtros por Categoria */}
      <div className="flex flex-wrap gap-3 mb-12 overflow-x-auto pb-2 no-scrollbar">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleFilterChange(category)}
            className={`px-5 py-2 rounded-full font-label-md text-label-md transition-all whitespace-nowrap ${
              selectedCategory === category
                ? 'bg-primary text-white shadow-lg'
                : 'bg-surface-container-high text-on-surface-variant hover:bg-secondary-fixed/20'
            }`}
          >
            {category}
            {category !== 'Todas' && (
              <span className="ml-2 text-xs opacity-70">
                ({allArticles.filter(a => a.category === category).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Contador de Resultados */}
      {searchTerm && (
        <div className="mb-6 text-on-surface-variant">
          <p>Resultados para: <span className="font-bold text-primary">"{searchTerm}"</span></p>
          <p className="text-sm mt-1">Encontramos {totalArticles} notícias</p>
        </div>
      )}

      {/* Grid de Notícias */}
      {articles.length === 0 && !loading ? (
        <div className="text-center py-20">
          <span className="material-symbols-outlined text-6xl text-on-surface-variant/30 mb-4">
            search_off
          </span>
          <h3 className="text-xl font-bold text-primary mb-2">Nenhuma notícia encontrada</h3>
          <p className="text-on-surface-variant">Tente buscar por outro termo ou categoria.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {articles.map((article) => (
              <NewsCard key={article.id} {...article} onReadMore={() => handleReadMore(article.id)} />
            ))}
          </div>
          
          <LoadMoreButton
            onClick={loadMoreArticles}
            loading={loading}
            hasMore={hasMore}
            totalLoaded={articles.length}
            totalArticles={totalArticles}
          />
        </>
      )}
    </div>
  );
};

export default TodasNoticias;