import React, { useState, useEffect } from 'react';

const BreakingNewsTicker = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Dados diretos sem importar de outro arquivo
    const defaultNews = [
      { id: 1, texto: "Acordo histórico garante preservação de 10 milhões de hectares na Bacia do Tapajós" },
      { id: 2, texto: "Tecnologia 5G chega às comunidades ribeirinhas mais isoladas do Amazonas" },
      { id: 3, texto: "Novos sítios arqueológicos revelam segredos de civilização pré-colombiana" }
    ];
    setNewsItems(defaultNews);
  }, []);

  if (newsItems.length === 0) {
    return null;
  }

  return (
    <div className="bg-red-600 py-2 overflow-hidden relative">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex items-center gap-4">
        <span className="flex-shrink-0 bg-white text-red-600 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest">
          URGENTE
        </span>
        <div className="overflow-hidden whitespace-nowrap flex-1">
          <div className="inline-block animate-marquee py-1">
            {[...newsItems, ...newsItems].map((item, index) => (
              <span key={`${item.id}-${index}`} className="text-white text-sm mx-4">
                • {item.texto}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNewsTicker;