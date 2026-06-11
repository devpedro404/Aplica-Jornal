import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const TopAppBar = ({ onMenuClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavLinkClass = (path) => {
    const isActive = location.pathname === path;
    return isActive
      ? 'font-label-md text-label-md text-green-700 dark:text-green-400 font-bold'
      : 'font-label-md text-label-md text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400';
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm' 
          : 'bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800'
      }`}
    >
      <div className="flex justify-between items-center px-3 sm:px-4 md:px-8 h-14 sm:h-16 w-full max-w-7xl mx-auto">
        
        {/* Lado esquerdo - Menu + Logo + Nome */}
        <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
          {/* Botão Menu - sempre visível */}
          <button
            onClick={onMenuClick}
            className="flex-shrink-0 text-gray-800 dark:text-gray-200 p-1"
            aria-label="Menu"
          >
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>

          

          {/* Logo - visível sempre */}
          <Link to="/" className="flex-shrink-0">
            <img
              alt="Logo O Melhor da Amazônia"
              className="h-7 sm:h-8 w-auto object-contain"
              src="/logo.png"
              onError={(e) => { 
                e.target.style.display = 'none';
              }}
            />
          </Link>

          {/* Nome do Site - AGORA VISÍVEL EM TODAS AS TELAS */}
          <Link to="/" className="truncate">
            <span className="font-headline-md text-sm sm:text-base md:text-headline-md font-extrabold text-gray-900 dark:text-white uppercase tracking-tighter">
              Breaking Point News 
            </span>
          </Link>
        </div>

        {/* Navegação Desktop - Links centrais */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <Link to="/" className={getNavLinkClass('/')}>
            Início
          </Link>
          <Link to="/politica" className={getNavLinkClass('/politica')}>
            Política
          </Link>
          <Link to="/ambiente" className={getNavLinkClass('/ambiente')}>
            Ambiente
          </Link>
          <Link to="/cultura" className={getNavLinkClass('/cultura')}>
            Cultura
          </Link>
          <Link to="/negocios" className={getNavLinkClass('/negocios')}>
            Negócios
          </Link>
          <Link to="/videos" className={getNavLinkClass('/videos')}>
            Podcast
          </Link>
        </div>

        {/* Ações direita */}
        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
          <ThemeToggle />
          <button className="text-gray-800 dark:text-gray-200 p-1" aria-label="Buscar">
            <span className="material-symbols-outlined text-xl sm:text-2xl">search</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopAppBar;