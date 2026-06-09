import React from 'react';
import { useNavigate } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

const Politica = () => {
  const navigate = useNavigate();

  const handleReadMore = (articleId) => {
    navigate(`/article/${articleId}`);
  };

  const featuredArticles = [
    {
      id: 601,
      title: "Como o novo projeto de lei de terras impacta a governança no Amazonas",
      description: "Uma investigação detalhada sobre as cláusulas ocultas no PL 4503, que promete regularizar títulos, mas enfrenta resistência de comunidades tradicionais e órgãos de fiscalização ambiental.",
      category: "Análise Legislativa",
      author: "Ricardo Mendes",
      readTime: 8,
      date: "05 Out, 2024",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0OQd3JcTgMKQb4kBk7P-KASsDtCiSqrxicWn04RFxpn0GsxZ6nTk5-QEHxaKmwwRxvlSMgPVPdJdLFscBEwZhJIxyhkrydYHaG2-I7HaMZIx_iX5hKKZxDgsnbuxzTfDo3jZJr5U24mvh5l9hIxgJamy7t16tCDq9sCTsPXGZthRiqOyaB0MhdUqIizjM6ZV0MHbpX7EXI-ZCZubMNGnETKxI3z2agEsP-d0C-0p0UPov7XgCRytQ0e6X4OvH1wW9ZXe5AnOl8V4",
      tags: ["Legislação", "Terras", "Amazonas"]
    },
    {
      id: 602,
      title: "O que a reforma tributária muda para os incentivos da Zona Franca",
      description: "Interlocutores em Brasília indicam que o novo pacto federativo pode alterar drasticamente a competitividade do polo industrial de Manaus. Entenda os riscos.",
      category: "Bastidores",
      author: "Exclusivo",
      readTime: 12,
      date: "28 Set, 2024",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhRNTXCyhssudhdahpiACcFyn0Aio6eqKUEjfVW9176GIZLG8dkKP3S_lGYNO9ff7QHBZGRfmcmkvlanocUcQU9rYw38gu3omAmsezeORePxIzi9VqRh38ifuVYySJ6flHfKTMl96bB3iSzwzQ-R0sgxwgz15R7VLNHb7-9Udu0taincNYZUVmAQlKQ8SF49LWkF_dTCHj68jdHQFX_byVwNqy9YV0m5Hchh1OS6Vtcz-Ci5quCOOtnq3XBtoh4wD4Z0JMAJM63go",
      tags: ["Reforma Tributária", "Zona Franca", "Economia"]
    },
    {
      id: 603,
      title: "Mapeamento: O avanço do conservadorismo nas capitais da Região Norte",
      description: "Nossos analistas cruzaram dados das últimas 5 eleições para entender a mudança no perfil do eleitor amazônico.",
      category: "Eleições Municipais",
      authors: "Equipe de Dados",
      readTime: 10,
      date: "02 Out, 2024",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0OQd3JcTgMKQb4kBk7P-KASsDtCiSqrxicWn04RFxpn0GsxZ6nTk5-QEHxaKmwwRxvlSMgPVPdJdLFscBEwZhJIxyhkrydYHaG2-I7HaMZIx_iX5hKKZxDgsnbuxzTfDo3jZJr5U24mvh5l9hIxgJamy7t16tCDq9sCTsPXGZthRiqOyaB0MhdUqIizjM6ZV0MHbpX7EXI-ZCZubMNGnETKxI3z2agEsP-d0C-0p0UPov7XgCRytQ0e6X4OvH1wW9ZXe5AnOl8V4",
      tags: ["Eleições", "Política", "Norte"]
    }
  ];

  const moreArticles = [
    {
      id: 604,
      title: "Novo secretário de meio ambiente do AM toma posse com agenda ambiciosa",
      description: "Gestão promete intensificar fiscalização e criar novas unidades de conservação.",
      category: "Governo",
      date: "30 Set, 2024",
      readTime: 6,
      author: "Marina Silva",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhRNTXCyhssudhdahpiACcFyn0Aio6eqKUEjfVW9176GIZLG8dkKP3S_lGYNO9ff7QHBZGRfmcmkvlanocUcQU9rYw38gu3omAmsezeORePxIzi9VqRh38ifuVYySJ6flHfKTMl96bB3iSzwzQ-R0sgxwgz15R7VLNHb7-9Udu0taincNYZUVmAQlKQ8SF49LWkF_dTCHj68jdHQFX_byVwNqy9YV0m5Hchh1OS6Vtcz-Ci5quCOOtnq3XBtoh4wD4Z0JMAJM63go",
    },
    {
      id: 605,
      title: "Senado aprova projeto que beneficia comunidades tradicionais",
      description: "Nova legislação garante direitos e apoio a populações ribeirinhas e extrativistas.",
      category: "Legislação",
      date: "28 Set, 2024",
      readTime: 5,
      author: "Ricardo Mendes",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0OQd3JcTgMKQb4kBk7P-KASsDtCiSqrxicWn04RFxpn0GsxZ6nTk5-QEHxaKmwwRxvlSMgPVPdJdLFscBEwZhJIxyhkrydYHaG2-I7HaMZIx_iX5hKKZxDgsnbuxzTfDo3jZJr5U24mvh5l9hIxgJamy7t16tCDq9sCTsPXGZthRiqOyaB0MhdUqIizjM6ZV0MHbpX7EXI-ZCZubMNGnETKxI3z2agEsP-d0C-0p0UPov7XgCRytQ0e6X4OvH1wW9ZXe5AnOl8V4",
    },
    {
      id: 606,
      title: "Câmara dos Deputados cria frente parlamentar da Amazônia",
      description: "Grupo terá como foco políticas de desenvolvimento sustentável e proteção ambiental.",
      category: "Brasília",
      date: "25 Set, 2024",
      readTime: 4,
      author: "Carlos Alberto",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0OQd3JcTgMKQb4kBk7P-KASsDtCiSqrxicWn04RFxpn0GsxZ6nTk5-QEHxaKmwwRxvlSMgPVPdJdLFscBEwZhJIxyhkrydYHaG2-I7HaMZIx_iX5hKKZxDgsnbuxzTfDo3jZJr5U24mvh5l9hIxgJamy7t16tCDq9sCTsPXGZthRiqOyaB0MhdUqIizjM6ZV0MHbpX7EXI-ZCZubMNGnETKxI3z2agEsP-d0C-0p0UPov7XgCRytQ0e6X4OvH1wW9ZXe5AnOl8V4",
    }
  ];

  const columnists = [
    {
      id: 607,
      name: "Helena Souza",
      role: "Estrategista Política",
      quote: "O pragmatismo amazônico será o fiel da balança no próximo orçamento da União.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAt8chd2hq4_QKnv9AgFepG0csZtwhi8SyU5oRfjClEXMwzS4bDzmtlVPTCL4wqKNyRpyvWd720ARxCqCVGtOxhQvDts8AqLD4ddlSyl38962_xhITGDFareGYGA8rhdg_HRdEZ5YCS_wj6ACfsoQ3fYbOVbPwLb3-SoQBStWG6NK9BqoGusjgSC1CG9LHM2DBHWFTdomHzckXjBp4lkBGx0EY0LnTQiLmYNN9FC8VW2Yi4clUokjJ7y0xUSzsRc98rkjYbJVsqYJc",
    },
    {
      id: 608,
      name: "Arthur Vigas",
      role: "Ex-Ministro",
      quote: "Não há solução política para o Brasil que não passe obrigatoriamente pela preservação ativa.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBO2Owuv8ZJEm-O2VAU7x_ZOnWcThGSPQHsb3BSG_MgtlZl92cqFXkOozTcMPWqapHclzfM-cYEd6OqwJae9Vfz3TcyHial8sRGeui5FpV3rz75GBS7GSBujaz-KMC0rlqpKqEVcBHoorWtTG5cQE8qTwPvlg1rOzf-vMisJ6LIhJllI02oOfK_RXIqVAcrb2zHHcWryamLmwwkvQiQ965ZPFbSKZvT2nvFaVsjK29GQMNvwJa-6ZJv8PFceV3oR1v8G-16mcSQpek",
    },
    {
      id: 609,
      name: "Marina Cavalcanti",
      role: "Pesquisadora Jurídica",
      quote: "O judiciário agora enfrenta o desafio de arbitrar conflitos de terra em escala digital.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuADNPpY7mN2wkTlgaHC199y9axHFeoZ1xA7lS90AHDn19L-5YeFhGrXyoMaBLii6cXFIr_SUVieBGklfb-6TlXlIlVcvHjvZuvANlvM6YIK5c791XKj3RcxTtXftczQBuFh3qnc3tguxe9NfH276edRVaapURv_fuUvaXzVO91IrHdvZ2P-P_XtvEfO5s7OYLBRN_l6AJbZjEpyzuWhq5ctwMdkdPc10l1JVMr5S5n3yXxcqi6O7HqS6RjnUgzkkTNWukUE4YuQOz4",
    },
  ];

  return (
    <div className="pt-24 pb-20 px-4 md:px-8 max-w-[1280px] mx-auto">
      {/* Section Header */}
      <div className="mb-12 border-l-4 border-secondary pl-6">
        <h2 className="font-display-lg text-[40px] md:text-display-lg text-primary tracking-tight mb-2">
          Política
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Acompanhe a análise técnica e profunda sobre o poder na maior floresta tropical do mundo.
        </p>
      </div>

      {/* Quick Filters */}
      <div className="flex flex-wrap gap-3 mb-10 overflow-x-auto pb-2 no-scrollbar">
        <button className="px-6 py-2 bg-primary text-on-primary rounded-full font-label-md text-label-md hover:opacity-90 transition-all flex items-center gap-2 shadow-lg">
          <span className="material-symbols-outlined text-[18px]">account_balance</span>
          Eleições 2024
        </button>
        <button className="px-6 py-2 bg-surface-variant text-on-surface-variant rounded-full font-label-md text-label-md hover:bg-outline-variant/30 transition-all flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">location_city</span>
          Brasília
        </button>
        <button className="px-6 py-2 bg-surface-variant text-on-surface-variant rounded-full font-label-md text-label-md hover:bg-outline-variant/30 transition-all flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">bolt</span>
          Bastidores do Poder
        </button>
        <button className="px-6 py-2 bg-surface-variant text-on-surface-variant rounded-full font-label-md text-label-md hover:bg-outline-variant/30 transition-all flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">gavel</span>
          Legislação
        </button>
      </div>

      {/* Featured Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {featuredArticles.map((article) => (
          <NewsCard key={article.id} {...article} />
        ))}
      </div>

      {/* Colunistas Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        <div className="lg:col-span-8">
          <h3 className="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-secondary rounded-full"></span>
            Últimas da Política
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {moreArticles.map((article) => (
              <NewsCard key={article.id} {...article} />
            ))}
          </div>
        </div>

        <aside className="lg:col-span-4">
          <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/10 sticky top-24">
            <h4 className="font-headline-md text-headline-md text-primary mb-8 border-b border-primary/10 pb-4">
              Colunistas Convidados
            </h4>
            <div className="space-y-8">
              {columnists.map((col) => (
                <div 
                  key={col.id}
                  onClick={() => handleReadMore(col.id)}
                  className="group cursor-pointer"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <img
                      alt={col.name}
                      className="w-14 h-14 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all border-2 border-secondary/20"
                      src={col.imageUrl}
                    />
                    <div>
                      <h5 className="font-label-md text-label-md text-primary group-hover:text-secondary transition-colors">
                        {col.name}
                      </h5>
                      <span className="text-[12px] font-label-md text-on-surface-variant uppercase">
                        {col.role}
                      </span>
                    </div>
                  </div>
                  <p className="font-body-md text-on-surface italic leading-snug group-hover:text-secondary transition-colors">
                    "{col.quote}"
                  </p>
                  <button className="mt-2 text-secondary font-label-md text-label-md text-sm group-hover:underline">
                    Ler artigo completo →
                  </button>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-3 border border-secondary text-secondary rounded-lg font-label-md text-label-md hover:bg-secondary/5 transition-colors">
              Ver todos os colunistas
            </button>
          </div>
        </aside>
      </div>

      {/* Newsletter Widget */}
      <div className="bg-primary text-on-primary rounded-xl p-8 overflow-hidden relative">
        <div className="relative z-10">
          <h4 className="font-headline-md text-headline-md mb-4">Expresso Brasília</h4>
          <p className="font-body-md mb-6 opacity-80">
            Receba todas as manhãs os bastidores do poder diretamente em seu e-mail.
          </p>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              className="w-full bg-white/10 border-b border-white/30 focus:border-secondary focus:ring-0 text-white placeholder:text-white/40 p-2 font-body-md"
              placeholder="Seu melhor e-mail"
              type="email"
            />
            <button className="w-full bg-white text-primary py-3 rounded-lg font-label-md text-label-md font-bold hover:bg-secondary-fixed transition-colors">
              Inscrever-se
            </button>
          </form>
        </div>
        <div className="absolute -right-10 -bottom-10 opacity-10">
          <span className="material-symbols-outlined text-[120px]">mark_email_read</span>
        </div>
      </div>
    </div>
  );
};

export default Politica;