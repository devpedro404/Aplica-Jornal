import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import ThemeToggle from '../../components/ThemeToggle';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const { isDark } = useTheme();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (login(email, password)) {
      navigate('/admin/dashboard');
    } else {
      setError('E-mail ou senha incorretos');
    }
    setLoading(false);
  };

  // Estilos dinâmicos baseados no tema
  const inputStyle = {
    backgroundColor: isDark ? '#1f2937' : '#ffffff',
    color: isDark ? '#ffffff' : '#1f2937',
    border: `1px solid ${isDark ? '#4b5563' : '#d1d5db'}`,
    borderRadius: '0.5rem',
    padding: '0.75rem 1rem',
    width: '100%',
    outline: 'none',
    transition: 'all 0.2s'
  };

  const inputGroupStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: isDark ? '#1f2937' : '#ffffff',
    border: `1px solid ${isDark ? '#4b5563' : '#d1d5db'}`,
    borderRadius: '0.5rem',
    transition: 'all 0.2s'
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: isDark ? '#111827' : '#f3f4f6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Botão de tema no canto superior direito */}
      <div style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 10 }}>
        <ThemeToggle />
      </div>

      <div style={{ width: '100%', maxWidth: '28rem', padding: '0 1rem', zIndex: 10 }}>
        <div style={{
          backgroundColor: isDark ? '#1f2937' : '#ffffff',
          borderRadius: '0.75rem',
          boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)',
          padding: '2rem 2.5rem',
          border: `1px solid ${isDark ? '#374151' : '#e5e7eb'}`
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: isDark ? '#ffffff' : '#111827', marginBottom: '0.5rem' }}>
              Acesso Administrativo
            </h1>
            <p style={{ fontSize: '0.875rem', color: isDark ? '#9ca3af' : '#6b7280' }}>
              Gerencie conteúdos e visualize estatísticas
            </p>
          </div>

          {error && (
            <div style={{
              width: '100%',
              marginBottom: '1.5rem',
              padding: '0.75rem',
              backgroundColor: isDark ? '#7f1d1d' : '#fee2e2',
              color: isDark ? '#fca5a5' : '#dc2626',
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
              textAlign: 'center'
            }}>
              {error}
            </div>
          )}

          <form style={{ width: '100%' }} onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: isDark ? '#e5e7eb' : '#374151', marginBottom: '0.25rem' }}>
                E-mail
              </label>
              <div style={inputGroupStyle}>
                <span className="material-symbols-outlined" style={{ color: isDark ? '#9ca3af' : '#9ca3af', marginLeft: '0.75rem' }}>
                  mail
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    ...inputStyle,
                    border: 'none',
                    backgroundColor: isDark ? '#1f2937' : '#ffffff',
                  }}
                  placeholder="admin@omelhordaamazonia.com.br"
                  required
                />
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: isDark ? '#e5e7eb' : '#374151', marginBottom: '0.25rem' }}>
                Senha
              </label>
              <div style={inputGroupStyle}>
                <span className="material-symbols-outlined" style={{ color: isDark ? '#9ca3af' : '#9ca3af', marginLeft: '0.75rem' }}>
                  lock
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    ...inputStyle,
                    border: 'none',
                    backgroundColor: isDark ? '#1f2937' : '#ffffff',
                  }}
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ color: isDark ? '#9ca3af' : '#9ca3af', paddingRight: '0.75rem', background: 'transparent', border: 'none', cursor: 'pointer' }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                backgroundColor: '#059669',
                color: 'white',
                fontWeight: '600',
                padding: '0.75rem 1rem',
                borderRadius: '0.5rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                opacity: loading ? 0.5 : 1
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#047857'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#059669'}
            >
              {loading ? (
                <>
                  <span className="material-symbols-outlined" style={{ animation: 'spin 1s linear infinite' }}>sync</span>
                  Carregando...
                </>
              ) : (
                <>
                  Entrar no Painel
                  <span className="material-symbols-outlined">arrow_forward</span>
                </>
              )}
            </button>
          </form>

          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <p style={{ fontSize: '0.75rem', color: isDark ? '#6b7280' : '#9ca3af', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              © 2024 Editorial Forest Tech System
            </p>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Login;