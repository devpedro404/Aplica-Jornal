import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import ThemeToggle from '../../components/ThemeToggle';

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useAuth();
  const { isDark } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const menuItems = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: 'dashboard' },
    { path: '/admin/editor', label: 'Editor', icon: 'edit_note' },
    { path: '/admin/articles', label: 'Artigos', icon: 'description' },
    { path: '/admin/featured', label: 'Destaques', icon: 'star' },
    { path: '/admin/videos', label: 'Vídeos', icon: 'smart_display' },
    { path: '/admin/urgent-news', label: 'Urgentes', icon: 'emergency' },
    { path: '/admin/analytics', label: 'Analytics', icon: 'analytics' },
    { path: '/admin/settings', label: 'Configurações', icon: 'settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Top Bar */}
      <header className="fixed top-0 w-full z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="flex justify-between items-center px-4 h-12 max-w-full">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <span className="material-symbols-outlined text-xl">menu</span>
            </button>
            <h1 className="font-bold text-gray-900 dark:text-white text-base uppercase tracking-tighter">
              O Melhor da Amazônia - Admin
            </h1>
          </div>
          <div className="flex items-center gap-3">
            {/* Botão de Tema */}
            <ThemeToggle />
            
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                <span className="text-green-700 dark:text-green-300 text-sm font-bold">AD</span>
              </div>
              <div className="hidden md:block">
                <p className="text-xs font-semibold text-gray-800 dark:text-gray-200">{user?.name || 'Admin'}</p>
                <p className="text-[10px] text-gray-500 dark:text-gray-400">Administrador</p>
              </div>
              <button onClick={handleLogout} className="text-xs text-red-500 hover:underline ml-2">
                Sair
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar Desktop */}
      <aside className="hidden md:flex fixed left-0 top-12 h-[calc(100vh-48px)] w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 overflow-y-auto">
        <div className="flex flex-col w-full">
          <div className="p-4">
            <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Menu</h2>
          </div>
          <nav className="flex-1 px-2 space-y-1">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                    isActive
                      ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-semibold'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`
                }
              >
                <span className="material-symbols-outlined text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>

      {/* Mobile Drawer */}
      {sidebarOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />
          <aside className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-900 z-50 shadow-xl overflow-y-auto md:hidden">
            <div className="flex justify-end p-3">
              <button onClick={() => setSidebarOpen(false)} className="text-gray-500 dark:text-gray-400">
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>
            <div className="px-4 pb-4">
              <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Menu</h2>
            </div>
            <nav className="px-2 space-y-1">
              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                      isActive
                        ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-semibold'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`
                  }
                >
                  <span className="material-symbols-outlined text-xl">{item.icon}</span>
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </nav>
          </aside>
        </>
      )}

      {/* Main Content */}
      <main className="pt-12 pb-8 px-4 md:pl-[272px]">
        <div className="max-w-full mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;