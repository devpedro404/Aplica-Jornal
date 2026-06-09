import React from 'react';
import { useNavigate } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

const Negocios = () => {
  const navigate = useNavigate();

  const handleReadMore = (articleId) => {
    navigate(`/article/${articleId}`);
  };

  const featuredArticles = [
    {
      id: 801,
      title: "O capital que protege: a ascensão da Bioeconomia Amazônica",
      description: "Como o mercado financeiro e os novos empreendedores estão transformando floresta em pé no ativo mais valioso do século XXI.",
      category: "Investimentos ESG",
      date: "28 Set, 2024",
      readTime: 10,
      author: "Ricardo Mendonça",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWrhEzjp2kyCRoEG4Tfsism3nTgG_WvBK-9ls3kUvURY2sM2IQECUSW-1mZtsZ7Cx9PH8p6DQzIX_Rba1lJ9d99Sbn3spvvHFlzon99toDSJ1Pca89wUO1B7tkhyFVDwk0AohOBDbSdtuN1-HPOVI2Om66gTEtR5yT8yCyXu_sy_M7IZM40umP-EM_Q1ouEpcelYl-vzVYvSfFxnfp4WpgIzUxXtAqKUy_dbkkPB5K_T_e8x1uUcf32WSuPI4vdkkj9i1MXDuemu4",
      tags: ["Bioeconomia", "Investimentos", "ESG"]
    },
    {
      id: 802,
      title: "Startups sustentáveis captam R$ 500 milhões em novos investimentos",
      description: "Fundo de Venture Capital anuncia aporte recorde em empresas de bioeconomia na região.",
      category: "Startups",
      date: "25 Set, 2024",
      readTime: 7,
      author: "Mariana Lins",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYT5YbUTMww6jKFALSGZ-wlGf2RAy_7hrGtkhUNLfIdAdcyPXpXzGSw_Ura-HCh_6Wazu6FrvxwzndnN4-1-iYHtnwp-KwPoB6yZitrkj-v52_qlfevfTYK2yvCkctA9wLfRh7WlKmUA33AsxXbjBiwZIyWrhGqsyK0epdYZdyuDFDRccwocHPL3cDlFoL_iC54Tm1q5ygDjWf6ZAfLkhn747lJJFJLL5xijT8_73DBkJBBqvRAH32gz1iWBqThGZan2JH4JCobtY",
    },
    {
      id: 803,
      title: "Mercado de carbono movimenta R$ 2 bilhões na região Norte",
      description: "Empresas buscam certificação de créditos de carbono gerados por projetos de conservação.",
      category: "Mercado de Carbono",
      date: "22 Set, 2024",
      readTime: 8,
      author: "Carlos Sampaio",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5Q2xjzOb7LQCLi_QQ6BwYQMnX3cGINYwLxzC03j2LcOP_MUI8fuOVd9-wnKokejX1qislO7ZveKZ3g-IF3zU_-drJKckJ-92xF3u-RKs5MQaj6iPhRFORMrrgmsdcg7QcRanj4W6WyBA5eTElEB_W-5y4Hj6AR3n0oHGC4y0a39fKqOGhwiROi2iGXUK3XXCH0eEhyeduIGHaeZeJOaUYK6DkvU6_j6AHnqApGITHnX6sG9SZ5PdY3XARYMaZLX926MhGF1s_990",
    }
  ];

  const moreArticles = [
    {
      id: 804,
      title: "Exportação de açaí para Europa cresce 45% em 2024",
      description: "Demanda por superalimentos amazônicos impulsiona economia local e gera renda para comunidades.",
      category: "Exportação",
      date: "20 Set, 2024",
      readTime: 5,
      author: "Ana Paula",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBY3BDaey2MdXtFFB6l9qP4b88VsBhI9QhL4UnSbaz7dMynE-FMztRFN2bMlNJAnUFh-tDIR0fMw5Xdkqq4b7QTMw-JUhcqWkfrwMEJoNfkLXHKYSZPdYIAn7QsBkjYdcUDFEmtYnPPAiava9x0G5quITwvHNAanoonRzNXuTqBMls-UDCntyLWCP2hFMAHNBAfscJMhuU-upYvknxU76jC1a4mcR9BUjD4kv4muf5nRkbPFZKd6vCG19XOrHpEsuq_SADO1a5xhh8",
    },
    {
      id: 805,
      title: "Zona Franca de Manaus anuncia novos incentivos para indústria verde",
      description: "Empresas que adotarem práticas sustentáveis terão redução de impostos.",
      category: "Indústria",
      date: "18 Set, 2024",
      readTime: 6,
      author: "Ricardo Mendonça",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0OQd3JcTgMKQb4kBk7P-KASsDtCiSqrxicWn04RFxpn0GsxZ6nTk5-QEHxaKmwwRxvlSMgPVPdJdLFscBEwZhJIxyhkrydYHaG2-I7HaMZIx_iX5hKKZxDgsnbuxzTfDo3jZJr5U24mvh5l9hIxgJamy7t16tCDq9sCTsPXGZthRiqOyaB0MhdUqIizjM6ZV0MHbpX7EXI-ZCZubMNGnETKxI3z2agEsP-d0C-0p0UPov7XgCRytQ0e6X4OvH1wW9ZXe5AnOl8V4",
    },
    {
      id: 806,
      title: "Cooperativas de castanha faturam R$ 100 milhões em vendas diretas",
      description: "Modelo de negócio elimina intermediários e valoriza o produtor local.",
      category: "Cooperativismo",
      date: "15 Set, 2024",
      readTime: 4,
      author: "Mariana Lins",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYA1pK1ihDr-8WXLXyBLhal_TIRBOyFzcpNqSGIaUuRGl_SJOqNPEotqnBBfIr282RK80aTF_tSuxpHqsYTDkT6jwa3Za92zBMBrHKWJ69rqNU6ajb2SZ2BZWQ70Lij_DhCYbMBNp3Puq8FhmklQnnazxGZNXsphrCGefv-grayt-_arC12vtuOm_CO_UVrJ0eTQncwcj9Zw565CRgBNBjS8qowZ7HIsq6ZMkgt_JFV3lXVvApVJCywy_RphfDCcu57AF2AQlgz9g",
    }
  ];

  const leaders = [
    {
      id: 807,
      name: "Ana Paula Xisto",
      role: "Fundadora da BioLogística Norte",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjzxd9Um0ATAEFXfmULTEZMFYLEZUA9Sp2ihreRrl1NHh_y3iNaYkRY57V8CVPEki21-KX48mgcVOSxsdruaJHOBUjhfeLij1iI8acFOjyo74gf1XX1BjU5BqaLovx1l-vKjyPKPJioHXFKC4tGEJK_on6j_6ZlEIMtUEilPUbutiILp_tQnaUOwjCXYxf1POdiFsTcouGdkhan0wOtrYIPCZAcAFwqKBFYX7ZtIzmYx8UjGnW3pZiD8tCseR2Z60X9JPONL_2fDs",
    },
    {
      id: 808,
      name: "Carlos Sampaio",
      role: "Diretor de Investimentos, Amazon VC",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTawAX4V-gn5qdKA63AWpcZYO06AQ6mgW2QV1dR7sWs-ruDH6Qs6Wm9IjLFSOB1eudLT4BIpfmp9BrxO_4VK9RM2R4nqP4ZBe4TekD96K-vzpjtv4nRHR_NtC7Gvmpnb8bF9rskzrAct8DFjja-6S3X_jQ6ARL-64BnbX_hUSwtHlnNzJBMx8erkA_zFdJukHDbHq3H1vqaMdNCANTCdDPl0ZzRwVuaZjAFPpyyTQvayx__Q24GRkK_APIwot5cVm-3deKZvwqx30",
    },
    {
      id: 809,
      name: "Dra. Maya Yan",
      role: "CTO da GenomAzônia",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCw_YpAYsyl1k-GQ1vSFtNq32nuuW7Ok00ogR4B5W45DILbGjw8bRq8ROjwSZRxqt8flueW1vh878xIEh4Y0vW8rRY_Ly31WR_f34W1YZVjZ5uAOjWYCtnj1mkxg0gd4W7SLH9ejKMshbAJuvtiTDH_wByDplJcXqbgwG7KEdjf9gGWRs4n645ZGDEldtoXAAF-EJZN8Xj5Htx5IedLPKUqjX9Wa-se20ZJok9FilxzifWfTVKgok1Z0-xPrGSGUvFbeVBcUAZ3NEY",
    },
    {
      id: 810,
      name: "Jorge Bittencourt",
      role: "Presidente do Conselho de Comércio Regional",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhWR8LeG8g9PjsjbBVt7ihOpZg8_HVCiB-J-bhnVzJ5wYnUODqxCWct1OfG618Xgs6_cciZrlw2UUjknwEb2Mceb-DnWZHAQ5inRTuP9zjWldXIDD2XTwRZ-HdCuqv9-kHLgiy8j5O7jET_XezMJxPbFU3gbMWYiOAoOFBZEloiA-5Jbtjadk3x1qJA3gqBpFcIoA4WMM18kh8DT0HV1md96V5ffApxRQN986vyahkilF1BZo-L1CbACJWuy-ES7npeYwZvLdprn8",
    },
  ];

  return (
    <div className="pt-24 pb-20 px-4 md:px-8 max-w-[1280px] mx-auto">
      {/* Market Indicators Ticker */}
      <div className="mb-12 overflow-hidden bg-surface-container-low rounded-xl border border-outline-variant/20 p-4">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2 justify-center md:justify-start">
          <div className="flex items-center gap-2">
            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Ibovespa</span>
            <span className="font-bold text-primary">128.450</span>
            <span className="text-secondary flex items-center text-sm font-bold">
              <span className="material-symbols-outlined text-sm">trending_up</span> 0.45%
            </span>
          </div>
          <div className="h-4 w-px bg-outline-variant/30 hidden md:block"></div>
          <div className="flex items-center gap-2">
            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Crédito Carbono (C)</span>
            <span className="font-bold text-primary">€ 84,20</span>
            <span className="text-error flex items-center text-sm font-bold">
              <span className="material-symbols-outlined text-sm">trending_down</span> 1.2%
            </span>
          </div>
          <div className="h-4 w-px bg-outline-variant/30 hidden md:block"></div>
          <div className="flex items-center gap-2">
            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Bio-Açaí Index</span>
            <span className="font-bold text-primary">R$ 412,00</span>
            <span className="text-secondary flex items-center text-sm font-bold">
              <span className="material-symbols-outlined text-sm">trending_up</span> 2.8%
            </span>
          </div>
        </div>
      </div>

      {/* Main Editorial Header */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-l-4 border-tertiary-fixed-dim pl-6">
          <div>
            <span className="font-label-md text-label-md text-on-tertiary-container uppercase tracking-widest bg-tertiary-fixed px-3 py-1 rounded-full">
              Editoria de Negócios
            </span>
            <h1 className="font-display-lg text-display-lg mt-4 text-primary max-w-3xl">
              Inovação e Sustentabilidade movimentam a economia amazônica
            </h1>
          </div>
          <p className="text-on-surface-variant font-body-lg text-body-lg max-w-md pb-1">
            A nova economia da floresta: como startups e investimentos estão transformando a Amazônia.
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {featuredArticles.map((article) => (
          <NewsCard key={article.id} {...article} />
        ))}
      </div>

      {/* Radar de Startups */}
      <div className="bg-primary text-white p-8 rounded-xl shadow-lg relative overflow-hidden mb-16">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <span className="material-symbols-outlined text-8xl">rocket_launch</span>
        </div>
        <h3 className="font-headline-md text-headline-md mb-6 relative z-10">Radar de Startups</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {moreArticles.slice(0, 3).map((item) => (
            <div 
              key={item.id}
              onClick={() => handleReadMore(item.id)}
              className="border-b border-white/10 pb-4 cursor-pointer hover:border-secondary-fixed transition-colors"
            >
              <span className="text-tertiary-fixed text-xs font-bold uppercase">{item.category}</span>
              <p className="font-bold text-lg mt-1 leading-tight hover:text-secondary-fixed transition-colors">
                {item.title}
              </p>
              <p className="text-sm text-white/70 mt-2 line-clamp-2">{item.description}</p>
            </div>
          ))}
        </div>
        <button className="w-full mt-8 bg-secondary-container text-on-secondary-container py-3 rounded-lg font-label-md text-label-md hover:bg-white transition-colors">
          VER TODO O RADAR
        </button>
      </div>

      {/* More Articles */}
      <section className="mb-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-headline-lg text-headline-lg text-primary flex items-center gap-3">
            <span className="material-symbols-outlined">trending_up</span> Últimas do Mercado
          </h2>
          <button className="text-secondary font-label-md text-label-md border-b-2 border-secondary pb-1">
            Ver todas
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {moreArticles.map((article) => (
            <NewsCard key={article.id} {...article} />
          ))}
        </div>
      </section>

      {/* Leader Profiles Section */}
      <section className="mb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-headline-lg text-headline-lg text-primary flex items-center gap-3">
            <span className="material-symbols-outlined">person_pin</span> Líderes da Bioeconomia
          </h2>
          <button className="text-secondary font-label-md text-label-md border-b-2 border-secondary pb-1">
            Ver todos os perfis
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((leader) => (
            <div 
              key={leader.id}
              onClick={() => handleReadMore(leader.id)}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] relative overflow-hidden rounded-xl mb-4 grayscale hover:grayscale-0 transition-all duration-500">
                <img alt={leader.name} className="w-full h-full object-cover" src={leader.imageUrl} />
              </div>
              <h4 className="font-headline-md text-headline-md text-primary group-hover:text-secondary transition-colors">{leader.name}</h4>
              <p className="text-on-surface-variant font-label-md text-label-md">{leader.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mb-20">
        <div className="relative bg-primary-container text-white p-10 md:p-16 rounded-3xl overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="font-headline-lg text-headline-lg mb-4">Relatório Semanal de Mercado</h2>
              <p className="font-body-lg text-body-lg text-on-primary-container">
                Receba todas as segundas-feiras o resumo mais completo sobre bioeconomia, investimentos e regulação na Amazônia.
              </p>
            </div>
            <div className="md:w-1/2 w-full">
              <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  className="flex-grow bg-white/10 border-b border-white/30 text-white placeholder:text-white/50 focus:border-tertiary-fixed focus:ring-0 px-4 py-3 rounded-t-lg transition-all"
                  placeholder="seu@email.com.br"
                  type="email"
                />
                <button className="bg-tertiary-fixed text-on-tertiary-fixed font-bold px-8 py-3 rounded-lg hover:bg-white transition-all active:scale-95">
                  ASSINAR
                </button>
              </form>
              <p className="text-xs text-on-primary-container mt-4 opacity-70">
                Ao assinar, você concorda com nossos termos e política de privacidade.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Negocios;