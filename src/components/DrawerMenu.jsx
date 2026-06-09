import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const DrawerMenu = ({ isOpen, onClose }) => {
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [location.pathname]);

  const menuItems = [
    { path: '/', label: 'Início', icon: 'home' },
    { path: '/politica', label: 'Política', icon: 'policy' },
    { path: '/ambiente', label: 'Ambiente', icon: 'forest' },
    { path: '/cultura', label: 'Cultura', icon: 'theater_comedy' },
    { path: '/negocios', label: 'Negócios', icon: 'payments' },
    { path: '/videos', label: 'Vídeos', icon: 'smart_display' },
    { path: '/seguranca', label: 'Segurança', icon: 'security' },
    { path: '/opiniao', label: 'Opinião', icon: 'chat' },
    { path: '/geral', label: 'Geral', icon: 'newspaper' },
    { path: '/todas-noticias', label: 'Todas as Notícias', icon: 'article' },
  ];

  const getMenuItemClass = (path) => {
    return location.pathname === path
      ? 'flex items-center gap-4 px-4 py-3 bg-secondary-container text-on-secondary-container font-semibold rounded-lg mx-2 transition-all'
      : 'flex items-center gap-4 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 mx-2 rounded-lg transition-all group';
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] transition-opacity duration-300"
        onClick={onClose}
      />
      <aside className="fixed top-0 left-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl z-[101] transition-transform duration-300 ease-out flex flex-col">
        <div className="px-6 py-6 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
          <span className="font-headline-lg text-headline-lg text-gray-900 dark:text-white">Menu</span>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <span className="material-symbols-outlined text-gray-700 dark:text-gray-300">close</span>
          </button>
        </div>
        <nav className="flex-1 py-6 space-y-2 overflow-y-auto">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={getMenuItemClass(item.path)}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="font-label-md text-label-md">{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="p-6 border-t border-gray-200 dark:border-gray-800">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4">
            <p className="text-sm text-gray-700 dark:text-gray-300 font-medium mb-2">
              Jornalismo de impacto
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              © 2024 O Melhor da Amazônia
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default DrawerMenu;