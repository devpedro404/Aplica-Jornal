import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import ProtectedRoute from './admin/components/ProtectedRoute';
import Layout from './components/Layout';

// Importações das páginas
import Home from './pages/Home';

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