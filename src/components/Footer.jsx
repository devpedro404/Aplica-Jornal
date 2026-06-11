import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = [
    { label: 'Expediente', href: '#' },
    { label: 'Privacidade', href: '#' },
    { label: 'Anuncie', href: '#' },
    { label: 'Contato', href: 'mailto:contato@omelhordaamazonia.com.br' },
    { label: 'Termos de Uso', href: '#' },
  ];

  return (
    <footer className="bg-primary text-white w-full mt-0">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-8 md:py-12 w-full max-w-7xl mx-auto gap-6 md:gap-8">
        {/* Coluna Esquerda - Sobre */}
        <div className="text-center md:text-left max-w-md">
          <div className="font-headline-lg text-xl md:text-2xl text-white mb-3 md:mb-4">
            Breaking Point News
          </div>
          <div className="font-headline-md text-sm md:text-base text-white/80 mb-4">
            Notícia em Tempo Real
          </div>
          <p className="text-sm md:text-base text-white/80 leading-relaxed">
            Jornalismo independente dedicado a reportar a verdade sobre a maior
            biodiversidade do planeta com precisão e tecnologia.
          </p>
          <div className="mt-3 md:mt-4 flex items-center justify-center md:justify-start gap-2 text-white/70 text-xs md:text-sm">
            <span className="material-symbols-outlined text-sm md:text-base">mail</span>
            <a href="mailto:contato@breakingpointnews.com.br" className="hover:text-green-400 transition-colors">
              contato@breakingpointnews.com.br
            </a>
          </div>
        </div>

        {/* Coluna Direita - Links e Redes Sociais */}
        <div className="flex flex-col items-center md:items-end gap-4 md:gap-6">
          {/* Links de navegação */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {footerLinks.map((link) => (
              <Link key={link.label} to={link.href} className="text-white/70 hover:text-green-400 transition-colors text-sm md:text-base">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Redes Sociais */}
          <div className="flex gap-3 md:gap-4">
            <a 
              href="https://www.instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 transition-all duration-300 transform hover:scale-110"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
              </svg>
            </a>

            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1877f2] transition-all duration-300 transform hover:scale-110"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>

            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-black transition-all duration-300 transform hover:scale-110"
              aria-label="Twitter"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            <a 
              href="https://www.youtube.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff0000] transition-all duration-300 transform hover:scale-110"
              aria-label="YouTube"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </a>

            <a 
              href="https://www.linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0077b5] transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.203 0 22.225 0z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-4 md:py-6 text-center text-white/30 text-[10px] md:text-xs uppercase tracking-[0.2em]">
        © 2024 Breaking Point News. Jornalismo de impacto.
      </div>
    </footer>
  );
};

export default Footer;