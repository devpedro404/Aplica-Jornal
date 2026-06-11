import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TopAppBar from './TopAppBar';
import Footer from './Footer';
import BreakingNewsTicker from './BreakingNewsTicker';
import DrawerMenu from './DrawerMenu';
import ReadingProgress from './ReadingProgress';

const Layout = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <ReadingProgress />
      <TopAppBar onMenuClick={() => setIsDrawerOpen(true)} />
      <DrawerMenu isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      
      {/* Espaçador para compensar o header fixed */}
      <div className="h-14 sm:h-16"></div>
      
      {/* Ticker - agora sem fixed, flui naturalmente */}
      <BreakingNewsTicker />
      
      <main>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;