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
      'Soberania': '#4a6fa5',
      'Urbana': '#1e6b4c',
      'Direitos': '#ba1a1a',
      'Biodiversidade': '#1e6b4c',
      default: '#1e6b4c',
    };
    return colors[cat] || colors.default;
  };

  if (isFeatured) {
    return (
      <article 
        onClick={handleClick}
        className="group bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
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
          <div className="absolute top-4 left-4">
            <span 
              className="px-3 py-1 rounded-full text-xs font-semibold text-white"
              style={{ backgroundColor: getCategoryColor(category) }}
            >
              {category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-green-700 transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 text-base line-clamp-3 mb-4">
            {description}
          </p>
          <div className="flex items-center justify-between text-gray-500 text-xs">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-base">person</span>
              <span>{author || 'Redação'}</span>
            </div>
            <div className="flex items-center gap-3">
              <span>{date}</span>
              <span>•</span>
              <span>{readTime} min</span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      onClick={handleClick}
      className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300"
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
      <div className="p-5">
        <span 
          className="text-xs font-semibold uppercase mb-2 block"
          style={{ color: getCategoryColor(category) }}
        >
          {category}
        </span>
        <h4 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-green-700 transition-colors line-clamp-2">
          {title}
        </h4>
        <p className="text-gray-600 text-sm line-clamp-2 mb-3">
          {description}
        </p>
        <div className="flex items-center justify-between text-gray-500 text-xs">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">schedule</span>
            <span>{readTime || 5} min</span>
          </div>
          {date && <span>{date}</span>}
        </div>
      </div>
    </article>
  );
};

export default NewsCard;