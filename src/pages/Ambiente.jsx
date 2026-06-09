import React from 'react';
import { useNavigate } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

const Ambiente = () => {
  const navigate = useNavigate();

  const handleReadMore = (articleId) => {
    navigate(`/article/${articleId}`);
  };

  const featuredArticles = [
    {
      id: 701,
      title: "O Pulmão do Mundo em Alerta: O Estado da Conservação em 2024",
      description: "Dados exclusivos mostram como a regeneração natural está superando o desmatamento em áreas críticas de fiscalização.",
      category: "Crise Climática",
      date: "01 Out, 2024",
      readTime: 15,
      author: "Dra. Helena Viana",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOJ2nHBBmLAF4kihJLiuOT214VazqmctiVCVW61m1yClqcdnpPTQ9-vf7whF6rhf0ghbrWU7I6aTojeMr5Gmjgwy59PYWcbhH0HCQ7rXN85fuFXJM_aHxUUN3nb0Ny2GXqxxyE8T5PO7imJEdSdNo4IdbEvbq_jD5B6ph6G1dV3xRQYAqEryyPAXjFjVtM8c55Ch0WrFLmT-mTyg33elgCoPqj2HoFDpg9ZXXzlr1N2pL3MvggKchlxtb3xVNQvBdDqQTUVRpg8iY",
      tags: ["Conservação", "Desmatamento", "Meio Ambiente"]
    },
    {
      id: 702,
      title: "Desmatamento cai 22% na Amazônia no primeiro trimestre de 2024",
      description: "Dados do INPE mostram a maior queda dos últimos 5 anos, com destaque para áreas protegidas.",
      category: "Dados",
      date: "28 Set, 2024",
      readTime: 8,
      author: "Carlos Mendes",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9Ql1eclHHuilmr2WRXDkdcTiAE3mUaw12QTsn0rYNntZb7JKhKV5hjdeyY8sMSSe_GkvAuJi0F65oA5GiRhYbfaL1ZNAmGVy312U0niNr6a0wLayZE42xLQwo5NuHRNqwl2fed1ElpTG8k5h55FlZAWZBF38IaVWBiVK8vVk1fLB3_5G1e9x6JRK3BI1jryWU467_nNs-Ij1jZtNucQNBZmks5dpGAjBztwa1wsLp0UIR5d6OzLdY2Go6IYI_58Ro3YoUTG5OKfQ",
    },
    {
      id: 703,
      title: "Projeto de reflorestamento recupera área equivalente a 10 mil campos de futebol",
      description: "Iniciativa privada em parceria com comunidades locais planta mais de 5 milhões de mudas nativas.",
      category: "Reflorestamento",
      date: "25 Set, 2024",
      readTime: 6,
      author: "Ana Beatriz",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIuKG142QGnO7QTFuPDjDXAZZ1CW2SCg1kNLownF0d9YlPq7VXH8oHX4zB9g2DslSCqB2pf3bo-KOsZiTI7qhFYFZt-pWChZTSfZvc9yfrfgP7rIpivH3euoo469JQWiVmBMAjEiOmW5yganFBUZytYJ7I46haIxJ5W1eVkBE7GVSQvIOAZ1_ookz7e7PB72SNJQWhqEtafxIWbg0E7cRNCUxF6QpryNuD1ZxRdH6Ft_CUQsOdK-waPYZafcDE3CCK3jNE8CRzzow",
    }
  ];

  const moreArticles = [
    {
      id: 704,
      title: "Novas espécies de peixes são descobertas no Rio Tapajós",
      description: "Expedição científica encontra 12 espécies ainda não catalogadas pela ciência.",
      category: "Biodiversidade",
      date: "22 Set, 2024",
      readTime: 5,
      author: "Dr. João Santos",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9nufAZE8o-gJwCu139wfSg8-aKfqGcQiZbWt2tbVMStV5eMsh0G2tvit1lqjcVUcZRG5jn7OZw62hvwZlJS0imAy5593-P9uxLcqFWHaODa4ROAADEgdb71ykd-xCdhpKFq6d1ftDekJBFmyWE_13QnoR0hCFs7KFP5-iRL8aphM2wYTV6fl-MowHKnB1lC_LHhq2ZmraEybQd17FbUqRjQ4YT1CYfAEqd82y8NUThjiIoReYutZ-IcPwFuAN5pT3ftOewHXQ4kw",
    },
    {
      id: 705,
      title: "Comunidades ribeirinhas criam viveiros para recuperar matas ciliares",
      description: "Iniciativa envolve mais de 30 comunidades na proteção das nascentes dos rios.",
      category: "Comunidades",
      date: "20 Set, 2024",
      readTime: 7,
      author: "Mariana Oliveira",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYA1pK1ihDr-8WXLXyBLhal_TIRBOyFzcpNqSGIaUuRGl_SJOqNPEotqnBBfIr282RK80aTF_tSuxpHqsYTDkT6jwa3Za92zBMBrHKWJ69rqNU6ajb2SZ2BZWQ70Lij_DhCYbMBNp3Puq8FhmklQnnazxGZNXsphrCGefv-grayt-_arC12vtuOm_CO_UVrJ0eTQncwcj9Zw565CRgBNBjS8qowZ7HIsq6ZMkgt_JFV3lXVvApVJCywy_RphfDCcu57AF2AQlgz9g",
    },
    {
      id: 706,
      title: "Tecnologia brasileira monitora desmatamento em tempo real",
      description: "Sistema desenvolvido pelo INPE permite identificar corte de árvores em até 24 horas.",
      category: "Tecnologia",
      date: "18 Set, 2024",
      readTime: 4,
      author: "Ricardo Alencar",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFIGYZznUymHU71Fkm6_eU9oqKnYz5CwvE6rL6x1xWJPdm7whYCUKoQLmJDe7sDb4EuyCM8DzX8TVhkl9GK3n_FgcyuXibTxGO2vW9Rtt3JTOfA2HQn9CGIOSMrEpt3COCOVL7HBsf3xfqDnXPmAZJd0XHQhiZK9DYr_vn33so-XsJYmZYsk2BYBjY6w42LHu_hwPDi_ueq7lHcJuGK0Bk0U57r6ghFKzUTrn8KHETHQIdqVsOCbaapW_IttQgChPQLDl1wGfmVQM",
    }
  ];

  const events = [
    { id: 707, month: "OUT", day: "21", name: "COP16 de Biodiversidade", location: "Cali, Colômbia" },
    { id: 708, month: "NOV", day: "11", name: "COP29 de Mudança Climática", location: "Baku, Azerbaijão" },
    { id: 709, month: "JUN", day: "05", name: "Dia Mundial do Meio Ambiente", location: "Eventos em toda a Amazônia" },
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Stats & Infographic Grid */}
      <section className="py-12 px-4 md:px-8 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/30 flex flex-col justify-between group hover:shadow-xl transition-all">
            <div>
              <div className="flex items-center gap-2 text-error mb-4">
                <span className="material-symbols-outlined">trending_down</span>
                <span className="font-label-md text-label-md font-bold">-22% de Desmatamento</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">Fiscalização Ativa</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Queda histórica registrada no último trimestre em Terras Indígenas sob monitoramento via satélite.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-outline-variant/20">
              <button className="text-secondary font-label-md text-label-md flex items-center gap-1 group-hover:gap-2 transition-all">
                Ver Dados Brutos
                <span className="material-symbols-outlined">analytics</span>
              </button>
            </div>
          </div>

          <div className="md:col-span-2 bg-primary-container text-on-primary-container p-8 rounded-xl relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row h-full">
              <div className="md:w-1/2 flex flex-col justify-center">
                <h3 className="font-headline-lg text-headline-lg mb-4 text-primary-fixed">
                  O Mapa da Regeneração
                </h3>
                <p className="font-body-md text-body-md opacity-90 mb-6">
                  Visualização dinâmica de como a floresta secundária está recuperando biomas degradados nos últimos 10 anos.
                </p>
                <div className="flex gap-4">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-secondary-fixed">450k</span>
                    <span className="text-xs uppercase opacity-70">Hectares Recuperados</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-tertiary-fixed">12</span>
                    <span className="text-xs uppercase opacity-70">Projetos Ativos</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0 flex items-center justify-center">
                <div className="relative w-full h-48 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white/30 text-sm">[ Visualização de Dados ]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="px-4 md:px-8 max-w-[1280px] mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <NewsCard key={article.id} {...article} />
          ))}
        </div>
      </section>

      {/* "Vozes da Floresta" com cards */}
      <section className="bg-surface-container py-24">
        <div className="px-4 md:px-8 max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="font-display-lg text-display-lg text-primary">Vozes da Floresta</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                O jornalismo que ouve quem protege. Relatos diretos de lideranças indígenas, ribeirinhos e cientistas.
              </p>
            </div>
            <button className="text-secondary font-label-md text-label-md border-b-2 border-secondary pb-1 flex items-center gap-2 hover:opacity-70 transition-opacity">
              Ver Todos os Relatos
              <span className="material-symbols-outlined">forum</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {moreArticles.map((article) => (
              <NewsCard key={article.id} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* Global Events Calendar */}
      <section className="py-24 px-4 md:px-8 max-w-[1280px] mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="material-symbols-outlined text-secondary text-4xl">calendar_month</span>
          <h2 className="font-headline-lg text-headline-lg text-primary">Agenda Global Ambiental</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="sticky top-24 bg-surface p-6 rounded-xl border border-outline-variant/30">
              <h3 className="font-label-md text-label-md font-bold mb-6 text-on-surface-variant uppercase">
                Próximos Grandes Eventos
              </h3>
              <ul className="space-y-6">
                {events.map((event) => (
                  <li 
                    key={event.id}
                    onClick={() => handleReadMore(event.id)}
                    className="flex gap-4 group cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary-container rounded-lg flex flex-col items-center justify-center text-on-secondary-container group-hover:bg-secondary transition-colors">
                      <span className="text-sm font-bold">{event.month}</span>
                      <span className="text-lg font-black leading-none">{event.day}</span>
                    </div>
                    <div>
                      <h4 className="font-label-md text-label-md font-bold group-hover:text-secondary transition-colors">{event.name}</h4>
                      <p className="text-xs text-on-surface-variant">{event.location}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-outline-variant/10 p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-secondary text-2xl">info</span>
                <h3 className="font-headline-md text-headline-md text-primary">Participe</h3>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Confira a programação completa dos eventos ambientais na Amazônia. Inscreva-se para receber atualizações.
              </p>
              <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  className="flex-grow px-4 py-3 border border-outline-variant rounded-lg focus:ring-secondary focus:border-secondary"
                  placeholder="Seu e-mail para notificações"
                  type="email"
                />
                <button className="bg-secondary text-white px-6 py-3 rounded-lg font-label-md text-label-md hover:bg-secondary-fixed hover:text-primary transition-colors">
                  Receber Lembretes
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-4 md:px-8 max-w-[1280px] mx-auto">
        <div className="bg-secondary-container rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
          <div className="flex-1">
            <h2 className="font-headline-lg text-headline-lg text-on-secondary-container mb-4">
              Receba atualizações ambientais
            </h2>
            <p className="font-body-md text-body-md text-on-secondary-container/80 mb-0">
              Fique por dentro das últimas notícias sobre conservação, desmatamento e mudanças climáticas na Amazônia.
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

export default Ambiente;