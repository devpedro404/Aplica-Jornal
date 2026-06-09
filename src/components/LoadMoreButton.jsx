import React from 'react';

const LoadMoreButton = ({ onClick, loading, hasMore, totalLoaded, totalArticles }) => {
  return (
    <div className="flex flex-col items-center gap-4 py-8">
      {hasMore && (
        <button
          onClick={onClick}
          disabled={loading}
          className="w-full max-w-md py-4 bg-surface-container text-primary font-label-md text-label-md rounded-xl hover:bg-surface-container-high transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary"></div>
              Carregando...
            </>
          ) : (
            <>
              CARREGAR MAIS NOTÍCIAS
              <span className="material-symbols-outlined">expand_more</span>
            </>
          )}
        </button>
      )}
      
      {!hasMore && totalArticles > 0 && totalLoaded > 0 && (
        <p className="text-center text-on-surface-variant/60 text-sm py-4">
          🎉 Você já viu todas as {totalArticles} notícias!
        </p>
      )}
      
      {totalLoaded > 0 && totalArticles > 0 && (
        <p className="text-center text-on-surface-variant/40 text-xs">
          Mostrando {totalLoaded} de {totalArticles} notícias
        </p>
      )}
    </div>
  );
};

export default LoadMoreButton;