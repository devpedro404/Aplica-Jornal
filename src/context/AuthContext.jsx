import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('adminUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    if (email === 'admin@omelhordaamazonia.com.br' && password === 'admin123') {
      const userData = {
        id: 1,
        name: 'Administrador',
        email: email,
        role: 'admin',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFeVYFdbUDFNMkrJnx1Op3hA-SOLv_w7kBRLxwP6A4sfd3K5Wr6NeHetWGRHuArzwvV2J-7WUzF-6bCcOz8FapoAgIdCU-MupjNDdLcSwp8f2xeEKgwNn_z5vqzqSo0P-HomYyO21c-OY6VkLIhja6TBcc8S0edebdYJj1GnlNo9pW1OZfmhlo3HRzIPTqNnk2lekf5iib-G5eYUSyDuxfqpKcmzp4M_cX5437ORY-kVeWMkM9hHE3VmcDxlcW_qwmhqUZpxgkddo'
      };
      setUser(userData);
      localStorage.setItem('adminUser', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('adminUser');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};