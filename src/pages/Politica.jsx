import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllArticles } from '../data/allArticles';

const Politica = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = () => {
    try {
      const allArticles = getAllArticles();
      // Filtrar artigos da página política e garantir IDs únicos
      const politicalArticles = allArticles.filter(article => article.page === 'politica');
      // Remover possíveis duplicatas baseado no ID
      const uniqueArticles = politicalArticles.filter((article, index, self) => 
        index === self.findIndex(a => a.id === article.id)
      );
      setArticles(uniqueArticles);
    } catch (error) {
      console.error('Erro ao carregar artigos:', error);
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  const handleReadMore = (articleId) => {
    navigate(`/article/${articleId}`);
  };

  if (loading) {
    return (
      <div className="pt-24 pb-20 px-4 md:px-8 max-w-[1280px] mx-auto flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 px-4 md:px-8 max-w-[1280px] mx-auto">
      <div className="mb-12 border-l-4 border-green-600 pl-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-2">
          Política
        </h1>
        <p className="text-gray-600 max-w-2xl">
          Acompanhe a análise técnica e profunda sobre o poder político.
        </p>
      </div>

      {articles.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-400">Nenhum artigo encontrado na página Política.</p>
          <button 
            onClick={() => navigate('/admin/editor')}
            className="mt-4 text-green-600 hover:underline"
          >
            {/* Adicionar artigo no admin (Opção pode ser desmarcada caso nescessario para testes fututos*/} 
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {articles.map((article) => (
            <div
              key={article.id}
              onClick={() => handleReadMore(article.id)}
              className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
            >
              {article.imageUrl && (
                <div className="aspect-video w-full overflow-hidden bg-gray-100">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-5 flex-1 flex flex-col">
                <span className="text-xs font-semibold uppercase text-green-600">
                  {article.category}
                </span>
                {/* Título SEM line-clamp - completo */}
                <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2 leading-tight group-hover:text-green-600 transition-colors">
                  {article.title}
                </h3>
                {/* Descrição SEM line-clamp - completa */}
                <p className="text-gray-600 text-sm mb-3 flex-1">
                  {article.description}
                </p>
                <div className="flex items-center justify-between text-gray-400 text-xs mt-auto">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    <span>{article.readTime} min</span>
                  </div>
                  <span>{article.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Politica;