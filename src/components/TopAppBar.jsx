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
    return location.pathname === path
      ? 'font-label-md text-label-md text-secondary dark:text-white font-bold'
      : 'font-label-md text-label-md text-gray-700 dark:text-gray-300 hover:text-secondary dark:hover:text-white';
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm' 
          : 'bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800'
      }`}
    >
      <div className="flex justify-between items-center px-4 md:px-8 h-16 w-full max-w-[1280px] mx-auto">
        {/* Menu Hamburguer - Mobile */}
        <button
          onClick={onMenuClick}
          className="md:hidden text-gray-800 dark:text-gray-200"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>

        {/* Menu Desktop - Botão menu */}
        <button
          onClick={onMenuClick}
          className="hidden md:flex text-gray-800 dark:text-gray-200"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>

        {/* Logo e título */}
        <Link to="/" className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2 md:relative md:left-auto md:translate-x-0">
          <img
            alt="O Melhor da Amazônia"
            className="h-8 w-auto object-contain"
            src="/logo.png"
            onError={(e) => { e.target.style.display = 'none' }}
          />
          <span className="font-headline-md text-headline-md font-extrabold text-gray-900 dark:text-white uppercase tracking-tighter text-sm md:text-base">
            O Melhor da Amazônia
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 ml-4">
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
            Vídeos
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