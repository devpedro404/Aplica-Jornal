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
    <div className="bg-surface text-on-surface">
      <ReadingProgress />
      <TopAppBar onMenuClick={() => setIsDrawerOpen(true)} />
      <DrawerMenu isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      <BreakingNewsTicker />
      <main className="pt-16 pb-20 md:pb-12">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;