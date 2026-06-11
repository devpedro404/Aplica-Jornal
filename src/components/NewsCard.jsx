import React from 'react';
import { useNavigate } from 'react-router-dom';

const NewsCard = ({ id, title, description, category, author, date, readTime, imageUrl, imageAlt, isFeatured = false }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (id) {
      navigate(`/article/${id}`);
    }
  };

  const getCategoryColor = (cat) => {
    const colors = {
      'Análise Legislativa': '#C5A059',
      'Eleições Municipais': '#C5A059',
      'Bastidores': '#C5A059',
      default: '#1e6b4c',
    };
    return colors[cat] || colors.default;
  };

  if (isFeatured) {
    return (
      <article 
        onClick={handleClick}
        className="group bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col"
      >
        <div className="relative overflow-hidden">
          <div className="aspect-video w-full overflow-hidden bg-gray-100">
            <img
              alt={imageAlt || title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={imageUrl || 'https://via.placeholder.com/400x300?text=Sem+Imagem'}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x300?text=Imagem+Indisponível';
              }}
            />
          </div>
          <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
            <span 
              className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold text-white"
              style={{ backgroundColor: getCategoryColor(category) }}
            >
              {category}
            </span>
          </div>
        </div>
        <div className="p-3 sm:p-5 flex-1 flex flex-col">
          {/* Título COMPLETO - sem line-clamp */}
          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-tight hover:text-green-700 transition-colors">
            {title}
          </h3>
          {/* Descrição COMPLETA - sem line-clamp */}
          <p className="text-xs sm:text-sm text-gray-600 mb-3 flex-1">
            {description}
          </p>
          <div className="flex items-center justify-between text-gray-500 text-[10px] sm:text-xs mt-auto">
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="material-symbols-outlined text-sm sm:text-base">person</span>
              <span className="truncate max-w-[80px] sm:max-w-full">{author || 'Redação'}</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="whitespace-nowrap">{date}</span>
              <span className="hidden sm:inline">•</span>
              <span className="whitespace-nowrap">{readTime} min</span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      onClick={handleClick}
      className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
    >
      {imageUrl && (
        <div className="aspect-video w-full overflow-hidden bg-gray-100">
          <img
            alt={imageAlt || title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            src={imageUrl}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x300?text=Sem+Imagem';
            }}
          />
        </div>
      )}
      <div className="p-3 sm:p-4 flex-1 flex flex-col">
        <span 
          className="text-[10px] sm:text-xs font-semibold uppercase mb-1 sm:mb-2 block"
          style={{ color: getCategoryColor(category) }}
        >
          {category}
        </span>
        {/* Título COMPLETO */}
        <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-1 sm:mb-2 leading-tight group-hover:text-green-700 transition-colors">
          {title}
        </h4>
        {/* Descrição COMPLETA */}
        <p className="text-xs text-gray-600 mb-2 sm:mb-3 flex-1">
          {description}
        </p>
        <div className="flex items-center justify-between text-gray-500 text-[10px] sm:text-xs mt-auto">
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">schedule</span>
            <span>{readTime || 5} min</span>
          </div>
          {date && <span className="text-right">{date}</span>}
        </div>
      </div>
    </article>
  );
};

export default NewsCard;