import React from 'react';
import { useNavigate } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

const Seguranca = () => {
  const navigate = useNavigate();

  const handleReadMore = (articleId) => {
    navigate(`/article/${articleId}`);
  };

  const featuredArticles = [
    {
      id: 901,
      title: "A Rota do Ouro: O Avanço das Facções em Território Yanomami",
      description: "Uma análise profunda sobre a convergência entre garimpo ilegal e organizações criminosas transnacionais.",
      category: "Investigação Especial",
      date: "25 Set, 2024",
      readTime: 12,
      author: "Ricardo Mendonça",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB158B1ZZk-ZEdCYkEiLcuAmjYz9QYYeo0ChGnuwOdaDGOvHEpJu2XJ42dd07F2neuR-tDj9KPVoEnjv82oR0nuNJ_-ZvHqPPyJiBXeFm3r1uicEhaLNCJUno2vp3E4kAGPQS_Hs-oHUlUi8Fn1UzKEr1rXQsj2_37a_ZHQoFx9Al6Gu4ctiq9J9vWtacJXaLOtSuxKJ3r7B-Y707j-oaveRvJqFpKsIN7xGK5j_bjSIzpCNRBaJ4R0Kd0kDwAJ_zqEM7RErv2kcjw",
      tags: ["Investigação", "Segurança", "Yanomami"]
    },
    {
      id: 902,
      title: "Operação Hymenaea: PF prende 30 garimpeiros ilegais no Pará",
      description: "Ação conjunta com o IBAMA apreende equipamentos e aeronaves usados na extração ilegal.",
      category: "Operações",
      date: "22 Set, 2024",
      readTime: 6,
      author: "Carlos Alberto",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2L0CkbHp4MJ_EAAckK1zCXWHwSHMA7dCjeMomxdbZ6zIXsjsopH3BYSZnRWzg0RuxK6LR30ljEmdbCR2HH38dKSjoA6-8EzkfUdN3kLtmH21cTsUIR-iQHDj0t0fqUKx69Jhr5KYGz8C1BSOqmySq-VPw3ZQe4QtkpQUmXYb3U289mTCovNaeQC0jft0L5XUZMtadiKWio34nWZ0bf4dT7Srb1I1I1ofSqB79rY8K9cV1Pzp9th2dMyNA8KkZF0k1X-pLXyVAY-g",
    },
    {
      id: 903,
      title: "Tecnologia de satélite auxilia na proteção de terras indígenas",
      description: "Sistema de monitoramento em tempo real permite resposta rápida a invasões e desmatamento.",
      category: "Tecnologia",
      date: "20 Set, 2024",
      readTime: 5,
      author: "Ana Beatriz",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4FHf3k5w_bOJwJqeJt_rVxup-NQKhit4LASHc3BABdSW6K-CM-zUX8OSc6LCqGH7LaffC3UuFaxOylbUou9kfCKCl9zSwoUO7eeL-CKWhm8Orr0K2soqI0ZX7Xb_OvQHwXriWMm-4HevKRalS4DuJKWKFrF9cPovSrz57rjoynypuLM_UhdHVCUFLF7ThA9uZMtZYSTpKN5j5uKN2KLqqIIzi40ljg4OfLQRa2l5Fd9jigajJb9RD54ASc2QHHq5rlPLZiqzCs8o",
    }
  ];

  const moreArticles = [
    {
      id: 904,
      title: "Polícia Civil do AM desarticula esquema de grilagem de terras",
      description: "Organização criminosa falsificava documentos e vendia áreas públicas na região metropolitana.",
      category: "Crime",
      date: "18 Set, 2024",
      readTime: 4,
      author: "Ricardo Mendonça",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7MJmnO6prQTal1RlGto4bJRwX3yrUIsCHtYPXvNJyIMGu76HYGPYfi6CJeQZ4AheWWKr-kWdnIQowfGbyH13LcOL1U7HcC0-Z3aPJRUEn9a4a8Zawdsvekxq2sHayFymzgKZ1bqgJZ9GuOulw610r7oPhnz1RQQ6RghQ2IbWvcdyqyfWag8cW2Fxexk9mwDDP8BokLND_dUxkY-NeagWJZte6RW5xGD-_QHQNdUjo6SeoM9ienL-RtpHxixzOm7iU37DBwxkXaP4",
    },
    {
      id: 905,
      title: "Força Nacional é enviada para proteger lideranças indígenas",
      description: "Medida emergencial após aumento de ameaças contra defensores da floresta.",
      category: "Segurança",
      date: "15 Set, 2024",
      readTime: 5,
      author: "Mariana Oliveira",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaM_9s4IGb619B3Qmsdcvr8T04RbB0gbNrM1HplYLvcZxumQovziyVYscVLQVQ-4ZZfd83wT2EP69OvyTHjXFDPXNNIYKxAnglgoA0s6mfkqlo3aj-WTZVQodD1z67SaOMuxWF_AXEPBqd8hjB9hZr-Bz7YMW8Fv1qP6Zim0e1KVEXGksBqLJ0AflUX6K0WPpP-C6_f6LiFN2-H1bhfRwClpWSO1cHScRRY5b9jwIxZXfAb9_qziAuVt1shS8dv4aR9UdxX3l2yUA",
    },
    {
      id: 906,
      title: "Garimpo ilegal causa contaminação por mercúrio em rios do Tapajós",
      description: "Estudo revela níveis preocupantes de metais pesados em peixes e comunidades ribeirinhas.",
      category: "Impacto Ambiental",
      date: "12 Set, 2024",
      readTime: 7,
      author: "Dra. Helena Viana",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7MJmnO6prQTal1RlGto4bJRwX3yrUIsCHtYPXvNJyIMGu76HYGPYfi6CJeQZ4AheWWKr-kWdnIQowfGbyH13LcOL1U7HcC0-Z3aPJRUEn9a4a8Zawdsvekxq2sHayFymzgKZ1bqgJZ9GuOulw610r7oPhnz1RQQ6RghQ2IbWvcdyqyfWag8cW2Fxexk9mwDDP8BokLND_dUxkY-NeagWJZte6RW5xGD-_QHQNdUjo6SeoM9ienL-RtpHxixzOm7iU37DBwxkXaP4",
    }
  ];

  const dossies = [
    {
      id: 907,
      title: "O esquema de lavagem de madeira que financia milícias rurais",
      category: "Madeira de Sangue",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2L0CkbHp4MJ_EAAckK1zCXWHwSHMA7dCjeMomxdbZ6zIXsjsopH3BYSZnRWzg0RuxK6LR30ljEmdbCR2HH38dKSjoA6-8EzkfUdN3kLtmH21cTsUIR-iQHDj0t0fqUKx69Jhr5KYGz8C1BSOqmySq-VPw3ZQe4QtkpQUmXYb3U289mTCovNaeQC0jft0L5XUZMtadiKWio34nWZ0bf4dT7Srb1I1I1ofSqB79rY8K9cV1Pzp9th2dMyNA8KkZF0k1X-pLXyVAY-g",
    },
    {
      id: 908,
      title: "A frota aérea invisível do tráfico internacional",
      category: "Céus Blindados",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7MJmnO6prQTal1RlGto4bJRwX3yrUIsCHtYPXvNJyIMGu76HYGPYfi6CJeQZ4AheWWKr-kWdnIQowfGbyH13LcOL1U7HcC0-Z3aPJRUEn9a4a8Zawdsvekxq2sHayFymzgKZ1bqgJZ9GuOulw610r7oPhnz1RQQ6RghQ2IbWvcdyqyfWag8cW2Fxexk9mwDDP8BokLND_dUxkY-NeagWJZte6RW5xGD-_QHQNdUjo6SeoM9ienL-RtpHxixzOm7iU37DBwxkXaP4",
    },
    {
      id: 909,
      title: "Como a Starlink mudou a comunicação do crime na mata",
      category: "Conexão Digital",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaM_9s4IGb619B3Qmsdcvr8T04RbB0gbNrM1HplYLvcZxumQovziyVYscVLQVQ-4ZZfd83wT2EP69OvyTHjXFDPXNNIYKxAnglgoA0s6mfkqlo3aj-WTZVQodD1z67SaOMuxWF_AXEPBqd8hjB9hZr-Bz7YMW8Fv1qP6Zim0e1KVEXGksBqLJ0AflUX6K0WPpP-C6_f6LiFN2-H1bhfRwClpWSO1cHScRRY5b9jwIxZXfAb9_qziAuVt1shS8dv4aR9UdxX3l2yUA",
    },
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section com card em destaque */}
      <section className="px-4 md:px-8 max-w-[1280px] mx-auto mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredArticles.slice(0, 2).map((article) => (
            <NewsCard key={article.id} {...article} />
          ))}
        </div>
      </section>

      {/* Dynamic Data Section */}
      <section className="bg-primary-container py-20 mb-16 overflow-hidden relative">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
          <div className="lg:col-span-4 text-on-primary">
            <h2 className="font-headline-lg text-headline-lg mb-4 text-primary-fixed">
              Observatório da Violência Amazônica
            </h2>
            <p className="font-body-md text-on-primary-container mb-8">
              Mapa em tempo real das ocorrências de crimes ambientais e segurança pública monitoradas por satélite.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-primary rounded-lg border border-white/10">
                <span className="material-symbols-outlined text-tertiary-fixed">warning</span>
                <div>
                  <h4 className="font-label-md text-on-primary">Focos Críticos</h4>
                  <p className="text-sm text-on-primary-container">BR-163 e Vale do Javari registram maior número de incidentes.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-primary rounded-lg border border-white/10">
                <span className="material-symbols-outlined text-secondary-fixed">security</span>
                <div>
                  <h4 className="font-label-md text-on-primary">Operações Ativas</h4>
                  <p className="text-sm text-on-primary-container">PF e Força Nacional em 14 frentes de combate ao desmatamento.</p>
                </div>
              </div>
            </div>
            <button className="mt-8 w-full py-4 bg-secondary-fixed text-on-secondary-fixed font-label-md rounded-lg flex items-center justify-center gap-2 hover:bg-secondary-fixed-dim transition-colors">
              Acessar Base de Dados Completa
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </button>
          </div>
          <div className="lg:col-span-8 relative">
            <div className="bg-surface/5 backdrop-blur-md rounded-2xl border border-white/10 aspect-video md:aspect-[16/8] overflow-hidden relative">
              <div className="absolute inset-0 opacity-40">
                <img
                  alt="Mapa Amazônia"
                  className="w-full h-full object-cover grayscale brightness-50"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmD6WJ83NSzHoV2AvwLBtYqZc6vB3eoFg9O5cXaCI6Lvk4uDd2zJp3jlS61E9QGf_gSDINwXZTLdNHZvwoppFg9SZCX24o28DjjCczNHKJn1U06jj5iHxfR8SF6ca6R_avbtKKCAN-UMiZ90htSsAPmyZ2HHjlGHH7SU5ufoLkep5z6RiVpFN8QmW-1oswFhoBvvkSQwI2fDo6CQTUTRepdjpza0qFUcO4FRdMSG8ON7X_qmM52Ziy2oWhQlWGXZ2ZZwT95B3S7JQ"
                />
              </div>
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="bg-black/40 p-3 rounded-lg border border-white/20">
                    <div className="flex gap-2 text-[10px] text-white/60 font-mono">
                      <span>03° 06' 07" S</span>
                      <span>60° 01' 30" W</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className="bg-white/10 hover:bg-white/20 p-2 rounded text-white backdrop-blur-md transition-colors">
                      <span className="material-symbols-outlined">add</span>
                    </button>
                    <button className="bg-white/10 hover:bg-white/20 p-2 rounded text-white backdrop-blur-md transition-colors">
                      <span className="material-symbols-outlined">remove</span>
                    </button>
                  </div>
                </div>
                <div className="relative w-full h-full">
                  <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-error rounded-full shadow-[0_0_15px_#ba1a1a]"></div>
                  <div className="absolute top-2/3 left-1/2 w-3 h-3 bg-error rounded-full shadow-[0_0_15px_#ba1a1a]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mais Artigos */}
      <section className="px-4 md:px-8 max-w-[1280px] mx-auto mb-16">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-headline-md text-headline-md text-on-surface">Últimas Atualizações</h3>
          <div className="flex gap-2">
            <button className="p-2 border border-outline-variant/30 rounded-full text-on-surface-variant cursor-pointer hover:bg-surface-container-high">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button className="p-2 border border-outline-variant/30 rounded-full text-on-surface-variant cursor-pointer hover:bg-surface-container-high">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {moreArticles.map((article) => (
            <NewsCard key={article.id} {...article} />
          ))}
        </div>
      </section>

      {/* Dossiês de Impacto */}
      <section className="bg-surface-container py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-2">Dossiês de Impacto</h2>
            <p className="font-body-md text-on-surface-variant">Reportagens de longo formato e investigações exclusivas.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dossies.map((dossie) => (
              <div 
                key={dossie.id}
                onClick={() => handleReadMore(dossie.id)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] mb-4">
                  <img
                    alt={dossie.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={dossie.imageUrl}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-6">
                    <span className="text-secondary-fixed font-label-md text-xs mb-2 uppercase">{dossie.category}</span>
                    <h3 className="text-white font-headline-md text-xl mb-2 line-clamp-2">{dossie.title}</h3>
                    <div className="w-0 group-hover:w-full h-0.5 bg-secondary-fixed transition-all duration-500"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-4 md:px-8 max-w-[1280px] mx-auto mt-20">
        <div className="bg-secondary-container rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
          <div className="flex-1">
            <h2 className="font-headline-lg text-headline-lg text-on-secondary-container mb-4">
              Receba alertas de segurança
            </h2>
            <p className="font-body-md text-body-md text-on-secondary-container/80 mb-0">
              Mantenha-se informado sobre as principais operações e alertas de segurança na Amazônia.
            </p>
          </div>
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
            <input
              className="px-6 py-4 rounded-lg bg-white/90 border-none focus:ring-2 focus:ring-primary min-w-[300px]"
              placeholder="Seu melhor e-mail"
              type="email"
            />
            <button className="bg-primary text-on-primary px-8 py-4 rounded-lg font-bold hover:brightness-110 transition-all">
              Inscrever-se
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Seguranca;