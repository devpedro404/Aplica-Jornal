import React, { useState, useEffect } from 'react';
import AdminLayout from '../components/AdminLayout';
import { allArticles, updateArticle, getArticlesByPage } from '../../data/allArticles';

const FeaturedArticles = () => {
  const [articles, setArticles] = useState([]);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = () => {
    // Pega todos os artigos que estão na página Home
    const homeArticles = allArticles.filter(article => article.page === 'home');
    setArticles(homeArticles);
  };

  const handleToggleFeature = (articleId, currentStatus) => {
    const article = allArticles.find(a => a.id === articleId);
    if (article) {
      article.isHero = !currentStatus;
      // Salva no localStorage para persistir
      localStorage.setItem('allArticles', JSON.stringify(allArticles));
      loadArticles();
      showMessage(
        currentStatus 
          ? 'Artigo removido das Principais Coberturas!' 
          : 'Artigo adicionado às Principais Coberturas!',
        'success'
      );
    }
  };

  const handleReorder = (dragIndex, hoverIndex) => {
    const newArticles = [...articles];
    const draggedArticle = newArticles[dragIndex];
    newArticles.splice(dragIndex, 1);
    newArticles.splice(hoverIndex, 0, draggedArticle);
    setArticles(newArticles);
    
    // Atualiza a ordem no localStorage
    const allArts = [...allArticles];
    const homeOrder = newArticles.map(a => a.id);
    // Aqui você pode salvar a ordem personalizada
    localStorage.setItem('homeOrder', JSON.stringify(homeOrder));
    showMessage('Ordem atualizada com sucesso!', 'success');
  };

  const showMessage = (message, type = 'success') => {
    setSnackbarMessage(message);
    setShowSnackbar(true);
    setTimeout(() => setShowSnackbar(false), 3000);
  };

  return (
    <AdminLayout>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h2 className="font-headline-lg text-headline-lg text-primary text-2xl">Principais Coberturas</h2>
          <p className="text-sm text-on-surface-variant mt-1">
            Gerencie os artigos que aparecem na seção "Principais Coberturas" da página inicial
          </p>
        </div>

        {/* Instruções */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-blue-500">info</span>
            <div>
              <p className="text-sm font-semibold text-blue-800">Como funciona:</p>
              <p className="text-xs text-blue-600 mt-1">
                • Os artigos com a estrela <span className="material-symbols-outlined text-xs align-middle">star</span> aparecem na seção "Principais Coberturas" da Home.<br />
                • Clique na estrela para adicionar ou remover um artigo dos destaques.<br />
                • Arraste as linhas para reordenar os artigos (ordem de exibição na página).
              </p>
            </div>
          </div>
        </div>

        {/* Lista de Artigos */}
        <div className="bg-white rounded-lg shadow-sm border border-outline-variant/20 overflow-hidden">
          <div className="px-5 py-4 bg-surface-container-low border-b border-outline-variant/20">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-primary text-base">Artigos da Home</h3>
                <p className="text-xs text-on-surface-variant mt-1">
                  Total de {articles.length} artigos cadastrados
                </p>
              </div>
              <div className="text-xs text-gray-400">
                <span className="material-symbols-outlined text-sm align-middle">drag_indicator</span> Arraste para ordenar
              </div>
            </div>
          </div>

          <div className="divide-y divide-outline-variant/10">
            {articles.map((article, index) => (
              <div
                key={article.id}
                draggable
                onDragStart={(e) => {
                  e.dataTransfer.setData('text/plain', index);
                  e.target.style.opacity = '0.5';
                }}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  const dragIndex = parseInt(e.dataTransfer.getData('text/plain'));
                  handleReorder(dragIndex, index);
                  e.target.style.opacity = '1';
                }}
                onDragEnd={(e) => {
                  e.target.style.opacity = '1';
                }}
                className="p-4 hover:bg-gray-50 transition-colors cursor-move"
              >
                <div className="flex gap-4">
                  {/* Ícone de arrastar */}
                  <div className="flex-shrink-0 text-gray-300 cursor-grab active:cursor-grabbing">
                    <span className="material-symbols-outlined">drag_indicator</span>
                  </div>

                  {/* Miniatura */}
                  <div className="flex-shrink-0 w-20 h-14 rounded overflow-hidden bg-gray-100">
                    <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
                  </div>

                  {/* Conteúdo */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 bg-secondary-container/30 text-secondary text-[10px] font-semibold rounded">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-400">{article.date}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-gray-800 line-clamp-1">{article.title}</h4>
                    <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">{article.description}</p>
                  </div>

                  {/* Ações */}
                  <div className="flex-shrink-0 flex items-center gap-2">
                    {/* Botão de Destaque */}
                    <button
                      onClick={() => handleToggleFeature(article.id, article.isHero)}
                      className={`p-2 rounded-lg transition-colors ${
                        article.isHero
                          ? 'text-yellow-500 hover:text-yellow-600'
                          : 'text-gray-300 hover:text-yellow-500'
                      }`}
                      title={article.isHero ? 'Remover dos destaques' : 'Adicionar aos destaques'}
                    >
                      <span className="material-symbols-outlined text-xl">
                        {article.isHero ? 'star' : 'star_outline'}
                      </span>
                    </button>

                    {/* Status */}
                    <div className={`px-2 py-1 rounded text-[10px] font-semibold ${
                      article.isHero
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      {article.isHero ? 'Destaque' : 'Normal'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dica final */}
          <div className="px-5 py-3 bg-gray-50 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-sm">tips_and_updates</span>
              <p className="text-xs text-gray-500">
                💡 Dica: Apenas artigos com a estrela amarela aparecerão na seção "Principais Coberturas" da página inicial.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Snackbar */}
      {showSnackbar && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-2 rounded-full shadow-lg text-sm z-50">
          {snackbarMessage}
        </div>
      )}
    </AdminLayout>
  );
};

export default FeaturedArticles;