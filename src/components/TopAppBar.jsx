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
    if (isActive) {
      return 'font-label-md text-label-md text-green-700 dark:text-green-400 font-bold';
    }
    return 'font-label-md text-label-md text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400';
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm' 
          : 'bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800'
      }`}
    >
      <div className="flex justify-between items-center px-4 md:px-8 h-16 w-full max-w-7xl mx-auto">
        {/* Lado esquerdo - Menu + Logo + Nome */}
        <div className="flex items-center gap-3">
          {/* Botão Menu */}
          <button
            onClick={onMenuClick}
            className="text-gray-800 dark:text-gray-200"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              alt="Logo"
              className="h-8 w-auto object-contain"
              src="/logo.png"
              onError={(e) => { 
                e.target.style.display = 'none';
              }}
            />
          </Link>

          {/* Nome do Site */}
          <Link to="/" className="hidden sm:block">
            <span className="font-headline-md text-headline-md font-extrabold text-gray-900 dark:text-white uppercase tracking-tighter">
              O Melhor da Amazônia
            </span>
          </Link>
        </div>

        {/* Desktop Navigation - Links centrais */}
        <div className="hidden md:flex items-center gap-6">
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
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button className="text-gray-800 dark:text-gray-200">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopAppBar;