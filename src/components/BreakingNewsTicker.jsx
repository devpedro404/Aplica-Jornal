import React, { useRef } from 'react';

const BreakingNewsTicker = () => {
  const tickerRef = useRef(null);

  const newsItems = [
    "Acordo histórico garante preservação de 10 milhões de hectares na Bacia do Tapajós",
    "Tecnologia 5G chega às comunidades ribeirinhas mais isoladas do Amazonas",
    "Novos sítios arqueológicos revelam segredos de civilização pré-colombiana"
  ];

  const duplicatedNews = [...newsItems, ...newsItems];

  // Remove as funções inline e cria funções nomeadas
  const handleMouseEnter = () => {
    if (tickerRef.current) {
      tickerRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleMouseLeave = () => {
    if (tickerRef.current) {
      tickerRef.current.style.animationPlayState = 'running';
    }
  };

  return (
    <div 
      className="bg-green-700 py-2.5 overflow-hidden relative z-10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="flex-shrink-0 bg-white text-green-700 px-2 py-0.5 rounded text-[10px] sm:text-xs font-bold uppercase tracking-wider">
            ÚLTIMAS
          </span>
          
          <div className="flex-1 overflow-hidden">
            <div
              ref={tickerRef}
              className="whitespace-nowrap animate-marquee"
              style={{ animationDuration: '20s' }}
            >
              {duplicatedNews.map((item, index) => (
                <span key={index} className="text-white text-xs sm:text-sm mx-4 inline-block">
                  • {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNewsTicker;