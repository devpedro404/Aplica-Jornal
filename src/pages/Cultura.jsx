import React from 'react';
import { useNavigate } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

const Cultura = () => {
  const navigate = useNavigate();

  const handleReadMore = (articleId) => {
    navigate(`/article/${articleId}`);
  };

  // Artigos principais
  const featuredArticles = [
    {
      id: 401,
      title: "Parintins: A pulsação ancestral que move o coração da floresta",
      description: "Como o maior festival folclórico do mundo redefine a identidade contemporânea dos povos amazônidas e impulsiona a economia criativa regional.",
      category: "Destaque Cultural",
      date: "15 Out, 2024",
      readTime: 20,
      author: "Nayara Tukano",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiFzy8q7e2P7vKlh9K-KbPgEXu6A0X4-jwxBIQm5jOsSsfoFY6LIF_LcGEHTxp9JoIXnpchkZkrimOv6aoillR4K1GCMQJls0_qk-uK0fBhFqrhUsMPp20mx2ldvOJUxVomL_fVK5wuiD_ylfOQ0LflYlPownZq99X4aGZfbkk0pAWMSSUj726RAUuGSntuqlFP3LfnfVQL7mToHl9Dx7B3OG8wuzpeWZY-SeLT24r_v9lIfIQt9I8otqRSjB1GEPKSUkOAzTsQ0A",
      tags: ["Festivais", "Cultura Popular", "Parintins"]
    },
    {
      id: 402,
      title: "Grafismos que Curam: A estética da resistência nas mãos das ceramistas Marajoaras",
      description: "Uma imersão técnica nas tradições que cruzam milênios e agora ganham espaço nas galerias de luxo de Paris e Milão.",
      category: "Artes Originárias",
      date: "10 Out, 2024",
      readTime: 12,
      author: "Pedro Silva",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNISog_i4moZ6gm2m9Qny-f8UnkG_hCD2bzXPsJj2PcvcScFbArrhyI4G4ZF3Ii7VTvlK1_tSTILnmdYWkNCNJCqZoeR96qcjaJjJpvWkyfCPLdMKGsEskZBFd81AcwaHDg_Yx6bar7UHtLkNFXIwjn1rkI26HT35wOCocRKoyKSryR46NXeL9fNknxPV7-mW4TngQs6T1ks_KAGGsqud_eRSSVvIXifIC1vaK8TxtIkNQTVKNsxbT57Wk8TOTsJm7mthBjxiBa7k",
      tags: ["Artesanato", "Cerâmica", "Tradição"]
    },
    {
      id: 403,
      title: "O som do tambor de crioula: Patrimônio vivo do Maranhão",
      description: "A tradição que resiste e se renova através das gerações, mantendo viva a cultura afro-amazônica.",
      category: "Música",
      date: "08 Out, 2024",
      readTime: 8,
      author: "Marcos Silva",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAfpeoU_7byqQIBfXY7aw_Jn1K2SaUPDaOWm2J7pvJmMUrN5C1n9DxNosziSFBDq1BPpFI-OAymgDdZA6CqaLpKgpOTxUSyG243tPaLUwA9SR2blz5yLLBHo1YYnYLvTmVRU0_LA2T2BEnfn7rbzVj-OlPBCDvjBvDT6UF25Qvpsj53S7KtZtDohUQCfndDrSrfViuZ2qraBJYO0o1MjKxl6sibjrPEM1gcVwM5RQIKRzE4HaDqltZBC3WkY4I5YBCOL4BaAgs-PI",
      tags: ["Música", "Tradição", "Patrimônio"]
    }
  ];

  const moreArticles = [
    {
      id: 404,
      title: "Literatura amazônica contemporânea: Novas vozes, novas narrativas",
      description: "Escritores da região ganham destaque nacional com obras que retratam a complexidade da vida na floresta.",
      category: "Literatura",
      date: "05 Out, 2024",
      readTime: 10,
      author: "Ana Paula Souza",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfc8v8ko85iXnpXFxEAp0snUNl6MtLLbFYoLjilEz4bYbu5PyDCaxcESW6_W2XZdEl9MWUkXgj1OLqx-ApoABGKPweq7gm-pV6e2PBqV_wvoKGxdtfP1uq04JxIaEI834MXEHD9MMLQdqCrqF3yP7O323GIw3wus8p2HXLFhDzHcTX_v3xVBT1x-4w6x6vP7BUJtKuq8V_nOHCrRL07FnmW0IYNo_2nOmEOl36oURHGzJgsBdZzAM4oTqmdAp34KrZcNkl1KPY6vU",
    },
    {
      id: 405,
      title: "Gastronomia ribeirinha: Sabores que contam histórias",
      description: "Chefs resgatam ingredientes ancestrais e criam uma nova alta gastronomia amazônica.",
      category: "Gastronomia",
      date: "03 Out, 2024",
      readTime: 7,
      author: "Beatriz Lima",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ845H1KPgmERo-wOSOZO-Hkgpm7s7YeWJAlC5xo_ujWW7e8wz6OsaBy7VgUDY5qLQheTScrn3JbE_NlzJJTHah3qEnxnDBlgYclbvbovVlLA8fiRG1_YoN0bTkRA-WyjjnRt3rWNPJ9GYd5HpscaaColxWnqyexDszsYR1axF6s0UWV81DTF7qoMORV7UFFiNTZ647QTKvn0y46ajMjlhRMgesWytx7pxpk4tkDvI6JLBjWq7XVmc7UftGvc8lzvo_uCILLxpaEs",
    },
    {
      id: 406,
      title: "Arte urbana em Manaus: Murais que contam a história da cidade",
      description: "Artistas transformam paredes cinzas em telas gigantes que celebram a cultura amazônica.",
      category: "Arte Urbana",
      date: "01 Out, 2024",
      readTime: 6,
      author: "Carlos Oliveira",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsJULJ01MdVvy5yp9Uz8j9ClHXZrUkUK5Z3IMDqqIK0hZxjrPkX8eF5jNj8F_8gF0rh59rXLtvSbwPM-mgLTOjqSD-cqtiq7ORfOjxlAyQjuO4O4R9ehTlz1ieIyxyKiOUYjRKZkGLfuU4HfKAQOVt2OePVynWd5SpB59gu0XQn-6vHh_gj3Caj22sQWX6vBKBQ2_7tyxKtGkdTRBxsk7Fe7ajENU1PhCWl6jezhH-GZqfZI8D7uh7_0xpYldfREwkPsep-KExzs8",
    }
  ];

  const agendaItems = [
    { id: 407, date: "15/OUT", title: "Festival do Peixe-Boi (Novo Airão)" },
    { id: 408, date: "22/OUT", title: "Vernissage: Cores do Xingu (Belém)" },
    { id: 409, date: "05/NOV", title: "Festival de Cinema Amazônico (Manaus)" },
  ];

  const artists = [
    {
      id: 410,
      name: "Zaya Guarani",
      role: "Multimídia & Design",
      description: "Utiliza tecnologias digitais para preservar cantos ancestrais em realidade aumentada.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6FEonsK9PJmlfxcDXgJx621RI7goVqEeSQgAgVINFZCZGq9IeXvtuP3kyIAzbq7DqhAsSz8nyOYlAt5tzuHZ2Ml7jMjQ3Qom8lwJfiPuuhOhuHgJEbQXyC1dCcRy8OYuVCHugQEBdHyOekXXFazrYO_x7BjVdqkOsf4-YZyqizsOz6p5KC8qH9GnnAvaRumeFPD446Y3PV7ULq6VoCfd8uVD4rLfR2xD8q75ebEueSm0iLi5oYzFi8_2MLGeyq_g-B34iO2Wwm08",
    },
    {
      id: 411,
      name: "Mestre Otoni",
      role: "Escultura em Madeira",
      description: "Suas obras em madeira morta narram a cosmologia dos povos do Rio Negro.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhkWyEzaM-sAoREtpa2iOZdo27AgEyMjSu35wouM-SgeRRpl8fEV2fPPHX3RQjELNGwTCpyYDfTZMY0s248x3k6wCNv1zWguWS55cMcxY0zZztFx_A39ssoPs1UvR4dVJX_q2yMGRzBIIja8pkL0sUGJoxbYcahARPCV_GbWuEOb3SRLYmWCAlAnlucglAkaXzvrjwk8JCBaOIDm3bJee0OgWt3PsmaRwI-aBWnZ9owCjsB87XgUoz_-YR5F9t_1yDbmxiQzv2yqo",
    },
    {
      id: 412,
      name: "Alice Pataxó",
      role: "Audiovisual",
      description: "Documentando a biodiversidade através das lentes de quem protege o território.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXZ8M5LqM6zFdxdSaUcuHV5QUbxayaoZIVp_GKFdo7R_X_BlVMYcET7g94RhpnKJiK_6LavQ2hz0E1yEQiOyXviNFLcVRxbudmaCxdIoFZMoOXu9FvfFFEBkkNdmq9LmIT0y3oMnSr_4UMmkfm2BINkWuw1Th16Ut5iefAG8Xp5DxFMh0P0gDCj_SY8svjmXz0A2aMrKRP_8sHUUKmtr8aby3JvwT__0uH9hcyJqu67NbhL8BUJTqCRMCuoQ_xxd_OpXBn_7DyV5w",
    },
    {
      id: 413,
      name: "Ian Borari",
      role: "Bio-moda",
      description: "Transformando fibras de curauá e sementes em alta costura sustentável.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsJULJ01MdVvy5yp9Uz8j9ClHXZrUkUK5Z3IMDqqIK0hZxjrPkX8eF5jNj8F_8gF0rh59rXLtvSbwPM-mgLTOjqSD-cqtiq7ORfOjxlAyQjuO4O4R9ehTlz1ieIyxyKiOUYjRKZkGLfuU4HfKAQOVt2OePVynWd5SpB59gu0XQn-6vHh_gj3Caj22sQWX6vBKBQ2_7tyxKtGkdTRBxsk7Fe7ajENU1PhCWl6jezhH-GZqfZI8D7uh7_0xpYldfREwkPsep-KExzs8",
    },
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section com card clicável */}
      <section className="px-4 md:px-8 max-w-[1280px] mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredArticles.slice(0, 2).map((article) => (
            <NewsCard key={article.id} {...article} />
          ))}
        </div>
      </section>

      {/* Editorias Chips */}
      <section className="px-4 md:px-8 max-w-[1280px] mx-auto mb-12">
        <div className="flex flex-wrap gap-3 items-center">
          <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mr-4">
            Tópicos:
          </span>
          {["#Festivais", "#Artesanato", "#SaberesAncestrais", "#Gastronomia", "#Literatura", "#Música", "#ArteUrbana"].map((tag, idx) => (
            <button key={idx} className="px-4 py-2 bg-surface-container-high text-on-surface-variant rounded-full font-label-md text-label-md hover:bg-secondary-fixed/20 transition-colors">
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* Grid de Artigos em destaque */}
      <section className="px-4 md:px-8 max-w-[1280px] mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredArticles.slice(2).map((article) => (
            <NewsCard key={article.id} {...article} />
          ))}
        </div>
      </section>

      {/* Agenda Cultural com cards */}
      <section className="px-4 md:px-8 max-w-[1280px] mx-auto mb-16">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="bg-primary text-on-primary p-8 rounded-xl relative overflow-hidden group">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-[#C5A059] text-4xl mb-4">calendar_month</span>
                <h3 className="font-headline-md text-headline-md mb-2">Agenda Cultural</h3>
                <p className="font-body-md text-body-md text-white/70 mb-6">
                  Confira os festivais e exposições que acontecem neste mês na Amazônia.
                </p>
                <ul className="space-y-4">
                  {agendaItems.map((item) => (
                    <li 
                      key={item.id}
                      onClick={() => handleReadMore(item.id)}
                      className="flex gap-4 items-start cursor-pointer hover:text-[#C5A059] transition-colors"
                    >
                      <span className="font-bold text-[#C5A059] shrink-0">{item.date}</span>
                      <span className="text-label-md">{item.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-[160px]">festival</span>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-outline-variant/20 shadow-[0_4px_20px_rgba(15,61,46,0.05)]">
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Podcast Amazonia On</h3>
              <div 
                onClick={() => handleReadMore(414)}
                className="flex items-center gap-4 bg-surface-container rounded-lg p-4 cursor-pointer hover:bg-surface-container-high transition-colors"
              >
                <span className="material-symbols-outlined text-secondary text-3xl">play_circle</span>
                <div>
                  <p className="font-label-md text-label-md font-bold line-clamp-1">Ep. 42: O som do tambor de crioula</p>
                  <p className="text-[12px] text-outline">24:15 • Cultura</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-outline-variant/20 shadow-[0_4px_20px_rgba(15,61,46,0.05)]">
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Exposição em Destaque</h3>
              <div 
                onClick={() => handleReadMore(415)}
                className="cursor-pointer group"
              >
                <p className="font-body-md text-body-md text-on-surface-variant group-hover:text-secondary transition-colors">
                  "Cores da Amazônia" - Mostra coletiva de artistas indígenas no MAM.
                </p>
                <button className="mt-3 text-secondary font-label-md text-label-md flex items-center gap-1 group-hover:gap-2 transition-all">
                  Saiba mais
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mais Artigos */}
      <section className="px-4 md:px-8 max-w-[1280px] mx-auto mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-headline-lg text-headline-lg text-primary">Mais da Cultura</h2>
          <button className="text-secondary font-label-md text-label-md flex items-center gap-2 hover:underline">
            Ver todos
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {moreArticles.map((article) => (
            <NewsCard key={article.id} {...article} />
          ))}
        </div>
      </section>

      {/* Artists Profile Carousel */}
      <section className="px-4 md:px-8 max-w-[1280px] mx-auto mb-20">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary">Vozes que Ecoam</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Conheça os talentos que estão moldando a nova cena artística amazônica.
            </p>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-secondary-fixed/20 transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-secondary-fixed/20 transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar">
          {artists.map((artist) => (
            <div 
              key={artist.id}
              onClick={() => handleReadMore(artist.id)}
              className="min-w-[280px] md:min-w-[320px] snap-start group cursor-pointer"
            >
              <div className="relative aspect-square rounded-full overflow-hidden mb-4 border-4 border-white shadow-lg">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={artist.name}
                  src={artist.imageUrl}
                />
              </div>
              <div className="text-center">
                <h4 className="font-headline-md text-headline-md text-primary group-hover:text-secondary transition-colors">{artist.name}</h4>
                <p className="text-[#C5A059] font-label-md text-label-md mb-2">{artist.role}</p>
                <p className="text-sm text-on-surface-variant px-4 line-clamp-2">{artist.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-4 md:px-8 max-w-[1280px] mx-auto mb-12">
        <div className="bg-secondary-container rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
          <div className="flex-1">
            <h2 className="font-headline-lg text-headline-lg text-on-secondary-container mb-4">
              Acompanhe a pulsação cultural
            </h2>
            <p className="font-body-md text-body-md text-on-secondary-container/80 mb-0">
              Receba semanalmente uma curadoria exclusiva de eventos, receitas e perfis de artistas diretamente no seu e-mail.
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

export default Cultura;