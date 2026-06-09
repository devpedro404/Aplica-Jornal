import React from 'react';
import { useNavigate } from 'react-router-dom';

const ArticleCard = ({ id, title, description, category, author, date, readTime, imageUrl, imageAlt, isFeatured = false }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (id) {
      navigate(`/article/${id}`);
    }
  };

  const getCategoryColor = (cat) => {
    const colors = {
      'Análise Legislativa': 'text-[#C5A059]',
      'Eleições Municipais': 'text-[#C5A059]',
      'Bastidores': 'text-[#C5A059]',
      'Soberania': 'text-tertiary-container',
      'Urbana': 'text-secondary-fixed-dim',
      'Direitos': 'text-error',
      'Biodiversidade': 'text-secondary',
      'Diário de Campo': 'text-tertiary-container',
      'Grande Reportagem': 'text-on-tertiary-container',
      'Pecuária Regenerativa': 'text-on-tertiary-container',
      'Agrotech': 'text-on-tertiary-container',
      'Investimentos ESG': 'text-tertiary-fixed',
      'Investigação Especial': 'text-error',
      'Destaque Cultural': 'text-[#C5A059]',
      'Artes Originárias': 'text-[#C5A059]',
      'Crise Climática': 'text-secondary',
      default: 'text-secondary',
    };
    return colors[cat] || colors.default;
  };

  const getCategoryBg = (cat) => {
    const backgrounds = {
      'Soberania': 'bg-tertiary-fixed',
      'Urbana': 'bg-primary-container',
      'Direitos': 'bg-error-container/20',
      'Grande Reportagem': 'bg-tertiary-fixed',
      'Investigação Especial': 'bg-error-container/20',
      'Destaque Cultural': 'bg-[#C5A059]/10',
      default: 'bg-tertiary-fixed',
    };
    return backgrounds[cat] || backgrounds.default;
  };

  if (isFeatured) {
    return (
      <article 
        onClick={handleClick}
        className="group bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(15,61,46,0.05)] border border-outline-variant/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      >
        <div className="relative overflow-hidden">
          <div className="aspect-video w-full overflow-hidden">
            <img
              alt={imageAlt || title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={imageUrl}
            />
          </div>
          <div className="absolute top-4 left-4">
            <span className={`${getCategoryBg(category)} ${getCategoryColor(category)} px-3 py-1 rounded-full font-label-md text-label-md`}>
              {category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-headline-lg text-headline-lg text-primary mb-3 leading-tight hover:text-secondary transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3 mb-4">
            {description}
          </p>
          <div className="flex items-center justify-between text-on-surface-variant/60 text-xs font-label-md">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">person</span>
              <span>{author || 'Redação'}</span>
            </div>
            <div className="flex items-center gap-3">
              <span>{date}</span>
              <span>•</span>
              <span>{readTime} min leitura</span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      onClick={handleClick}
      className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(15,61,46,0.05)] border border-outline-variant/20 hover:-translate-y-1 transition-all duration-300"
    >
      {imageUrl && (
        <div className="aspect-video w-full overflow-hidden">
          <img
            alt={imageAlt || title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            src={imageUrl}
          />
        </div>
      )}
      <div className="p-5">
        <span className={`${getCategoryColor(category)} font-label-md text-label-md uppercase mb-2 block`}>
          {category}
        </span>
        <h4 className="font-headline-md text-headline-md text-primary mb-2 leading-tight group-hover:text-secondary transition-colors line-clamp-2">
          {title}
        </h4>
        <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 mb-3">
          {description}
        </p>
        <div className="flex items-center justify-between text-on-surface-variant/60 text-xs font-label-md">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[14px]">schedule</span>
            <span>{readTime || '5'} min</span>
          </div>
          {date && <span>{date}</span>}
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;