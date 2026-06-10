import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import ProtectedRoute from './admin/components/ProtectedRoute';
import Layout from './components/Layout';

// Páginas Públicas
import Home from './pages/Home';
import Politica from './pages/Politica';
import Ambiente from './pages/Ambiente';
import Cultura from './pages/Cultura';
import Negocios from './pages/Negocios';
import Seguranca from './pages/Seguranca';
import TodasNoticias from './pages/TodasNoticias';
import Videos from './pages/Videos';
import ArticleDetail from './pages/article/ArticleDetail';
import Opiniao from './pages/Opiniao';
import Geral from './pages/Geral';

// Admin Pages
import Login from './admin/pages/Login';
import Dashboard from './admin/pages/Dashboard';
import Editor from './admin/pages/Editor';
import Articles from './admin/pages/Articles';
import Analytics from './admin/pages/Analytics';
import Settings from './admin/pages/Settings';
import UrgentNews from './admin/pages/UrgentNews';
import VideosManager from './admin/pages/VideosManager';
import FeaturedArticles from './admin/pages/FeaturedArticles';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Rotas Públicas */}
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/politica" element={<Layout><Politica /></Layout>} />
            <Route path="/ambiente" element={<Layout><Ambiente /></Layout>} />
            <Route path="/cultura" element={<Layout><Cultura /></Layout>} />
            <Route path="/negocios" element={<Layout><Negocios /></Layout>} />
            <Route path="/seguranca" element={<Layout><Seguranca /></Layout>} />
            <Route path="/opiniao" element={<Layout><Opiniao /></Layout>} />
            <Route path="/geral" element={<Layout><Geral /></Layout>} />
            <Route path="/todas-noticias" element={<Layout><TodasNoticias /></Layout>} />
            <Route path="/videos" element={<Layout><Videos /></Layout>} />
            <Route path="/article/:id" element={<Layout><ArticleDetail /></Layout>} />

            {/* Rotas do Admin */}
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/admin/editor" element={<ProtectedRoute><Editor /></ProtectedRoute>} />
            <Route path="/admin/articles" element={<ProtectedRoute><Articles /></ProtectedRoute>} />
            <Route path="/admin/featured" element={<ProtectedRoute><FeaturedArticles /></ProtectedRoute>} />
            <Route path="/admin/videos" element={<ProtectedRoute><VideosManager /></ProtectedRoute>} />
            <Route path="/admin/urgent-news" element={<ProtectedRoute><UrgentNews /></ProtectedRoute>} />
            <Route path="/admin/analytics" element={<ProtectedRoute><Analytics /></ProtectedRoute>} />
            <Route path="/admin/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;