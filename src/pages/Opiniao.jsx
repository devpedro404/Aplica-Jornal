import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Opiniao = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScrollProgress = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const progressBar = document.getElementById('progress-bar');
      if (progressBar) {
        progressBar.style.width = scrolled + '%';
      }
    };
    window.addEventListener('scroll', handleScrollProgress);
    return () => window.removeEventListener('scroll', handleScrollProgress);
  }, []);

  const handleReadMore = (articleId) => {
    navigate(`/article/${articleId}`);
  };

  const relatedArticles = [
    {
      id: 301,
      category: "TECNOLOGIA",
      title: "As patentes que o Brasil está perdendo na selva",
      description: "Uma análise sobre a biopirataria moderna e como a falta de laboratórios locais nos custa bilhões.",
      fullContent: "Texto completo sobre patentes na Amazônia...",
      date: "10 Out, 2024",
      readTime: 10,
      author: "Helena Viana",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfc8v8ko85iXnpXFxEAp0snUNl6MtLLbFYoLjilEz4bYbu5PyDCaxcESW6_W2XZdEl9MWUkXgj1OLqx-ApoABGKPweq7gm-pV6e2PBqV_wvoKGxdtfP1uq04JxIaEI834MXEHD9MMLQdqCrqF3yP7O323GIw3wus8p2HXLFhDzHcTX_v3xVBT1x-4w6x6vP7BUJtKuq8V_nOHCrRL07FnmW0IYNo_2nOmEOl36oURHGzJgsBdZzAM4oTqmdAp34KrZcNkl1KPY6vU",
    },
    {
      id: 302,
      category: "ECONOMIA",
      title: "Créditos de carbono: Solução ou maquiagem?",
      description: "Por que o mercado voluntário precisa de regulação técnica rigorosa para beneficiar a Amazônia.",
      fullContent: "Texto completo sobre créditos de carbono...",
      date: "05 Out, 2024",
      readTime: 12,
      author: "Helena Viana",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwRPOQ4Fu6CoBXudiYVHHpsRye5tKEw-tdyw0yaEkkecJrwleiWxIL7dMXRH8RIuP8nucuUBIDW5FlzHxn0_XtuzydGUbCjfgWCwo5m4U1GdDoASeQwFaw5NdHD2PJCMa662GQ8s6sMRGYI9P9KVsMWw-K4G33uoK3dfPgukT549RJZIxwwBgkhsXm0WXxmCXHMSHNh_ysJDuggcCrPIIqKffN1AsQPNGWfDTBslIqeFhBdz81UNz6G1sBySz4Emu0nAPHSVC8oms",
    },
    {
      id: 303,
      category: "CULTURA",
      title: "O Rio que corre por nossas veias sociais",
      description: "Como a hidrografia moldou a identidade intelectual do povo amazônida ao longo dos séculos.",
      fullContent: "Texto completo sobre a identidade amazônica...",
      date: "28 Set, 2024",
      readTime: 8,
      author: "Helena Viana",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCg1UjjnfmPe48jo4iCnFavsOaxDHR_aqPgfMljZDnWIjUkI4nrx6JiT2E8GtPNY-uEoYkQcth7knB3SEnlcJqzWisYBLN5dgAO_YR9v8SULiuThkGR0HH4_IEaowYVIPlAJKZllPgX9IxTyQUILeXlpsS7CZ4RThpsu4alOQmvrfpOolVtNnjSik70RwdPOOGfBgxzU1NcuW823jIT9OV_s8GkPhlqx9RCUxjdFBpouAzMgavGMvr4k7knxJxFXChhVqqAsbCIevI",
    },
  ];

  const mainArticle = {
    id: 300,
    title: "O Futuro da Amazônia não é o Extrativismo, é a Inteligência Biológica",
    description: "Precisamos parar de ver a floresta como um estoque de matéria-prima e começar a tratá-la como a maior biblioteca genética e tecnológica do planeta.",
    fullContent: `A narrativa histórica sobre a Amazônia sempre oscilou entre a exploração predatória e o isolacionismo romântico. No entanto, o século XXI exige uma terceira via: a bioeconomia de alta tecnologia. Não se trata apenas de colher frutos, mas de decodificar as soluções que a natureza levou milhões de anos para aperfeiçoar.

    Enquanto o mundo corre para desenvolver inteligência artificial, ignoramos a inteligência biológica que opera sob o dossel das árvores. Cada molécula descoberta em uma planta amazônica pode ser a base para a próxima revolução na medicina ou na ciência dos materiais. Mas para que isso beneficie a região, o valor agregado deve permanecer aqui.

    O investimento em centros de pesquisa de ponta dentro da própria floresta é a única forma de garantir soberania e desenvolvimento real. A infraestrutura de dados é tão importante quanto a preservação das bacias hidrográficas. Sem conectividade e educação técnica para as populações locais, continuaremos exportando commodities e importando soluções que foram inspiradas em nossa própria biodiversidade.

    A transição energética global oferece à Amazônia uma posição de liderança. Ao combinarmos o conhecimento ancestral das comunidades tradicionais com as ferramentas da biotecnologia moderna, podemos criar um modelo de desenvolvimento que é, ao mesmo tempo, regenerativo e altamente rentável.

    É hora de substituir a serra pelo sequenciador genético. O futuro da maior floresta tropical do mundo depende da nossa capacidade de ser tão sofisticados quanto o ecossistema que tentamos proteger.`,
    category: "ARTIGO DE OPINIÃO",
    date: "14 Out, 2024",
    readTime: 12,
    author: "Dra. Helena Viana",
    authorBio: "Especialista em bioeconomia e conservação estratégica, com 15 anos de atuação na bacia amazônica.",
    authorImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjM9iM3KErGhGdm9BKoDZ31U9NPJi4OQvpquB4LoPN5N1rSwJRZq1SO_WU0LPb3aDoLmStoYXo1ewmtTIv_t6i1thdyR6ssSDV871Y2LYsoQfz2-T_0hYPprkxxFhrvY4-kmG--l48e_oKeC82en2rwgwdBbu8OWyQVu0_Iw9QWzmlLFPPXUjzqgBgc5MQ-VCV1siakhMAosrpK1ba3iBGB_xU-oIscxxd5B2Qp7KnLVaBDW5vTsbKd0i2pfBvcVRG89_9UhyLZH4",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBk82aP6sPk1tIv8f9ImlohjPWmY5pR1x9ji4xhJvOO2TMA7Sf6NRNwx2ZSjdFuEnMoZnL17AmIWIew6SZhNJt7rKnf4ItNn57S5thWEYvugw_6v5i4aWy2GgRLDcfFK-vPjATn-RyeeccwZ7rtki-27KcIPwJ0xlqAzMqAu6XhRfXizxL2f7dWiESJpV8yfgr4jPazNgVE4mvqJiu2Y1Fg9ysBKFpZx6Jxs15Oi9at2rLYGufwbYRUHRcUjd7s6qCu-VtsT0kuZho",
    tags: ["Bioeconomia", "Tecnologia", "Sustentabilidade", "Inovação"]
  };

  return (
    <div className="pt-24 pb-20">
      <div className="reading-progress-bar fixed top-16 left-0 w-0 h-0.5 bg-[#C5A059] z-[100] transition-all duration-100" id="progress-bar"></div>

      {/* Opinion Header & Bio */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 mb-12">
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center py-8 border-b border-outline-variant/30">
          <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
            <img
              alt={mainArticle.author}
              className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
              src={mainArticle.authorImage}
            />
          </div>
          <div className="flex-grow">
            <span className="inline-block px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded-full font-label-md text-label-md mb-3">
              ARTIGO DE OPINIÃO
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-2">
              {mainArticle.author}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant italic mb-4">
              {mainArticle.authorBio}
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-[18px]">schedule</span>
                <span className="font-label-md text-label-md">{mainArticle.readTime} min de leitura</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                <span className="font-label-md text-label-md">{mainArticle.date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Article Content */}
      <article className="max-w-3xl mx-auto px-4 md:px-8">
        <header className="mb-12">
          <h1 className="font-display-lg text-[36px] md:text-display-lg text-primary leading-tight mb-8">
            {mainArticle.title}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface leading-relaxed font-bold italic border-l-4 border-secondary pl-6 py-2">
            "{mainArticle.description}"
          </p>
        </header>

        <div className="space-y-8 font-body-lg text-body-lg text-on-surface leading-relaxed text-justify">
          <p>{mainArticle.fullContent.split('\n\n')[0]}</p>
          <p>{mainArticle.fullContent.split('\n\n')[1]}</p>

          <blockquote className="relative pl-8 border-l-4 border-secondary my-12">
            <p className="font-headline-md text-headline-md text-secondary italic">
              "O verdadeiro ouro da Amazônia não está enterrado sob as raízes, mas codificado em suas células."
            </p>
          </blockquote>

          <p>{mainArticle.fullContent.split('\n\n')[2]}</p>
          <p>{mainArticle.fullContent.split('\n\n')[3]}</p>
          <p>{mainArticle.fullContent.split('\n\n')[4]}</p>
        </div>

        {/* Author Footer Bio */}
        <div className="mt-20 p-8 bg-surface-container rounded-xl border border-outline-variant/20 flex flex-col md:flex-row gap-6 items-center">
          <img
            alt={mainArticle.author}
            className="w-24 h-24 rounded-full object-cover shadow-md"
            src={mainArticle.authorImage}
          />
          <div className="text-center md:text-left">
            <h4 className="font-headline-md text-headline-md text-primary mb-1">{mainArticle.author}</h4>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              {mainArticle.authorBio}
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity">
                Seguir Autora
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-outline text-on-surface-variant rounded-lg font-label-md text-label-md hover:bg-surface-variant transition-colors">
                <span className="material-symbols-outlined text-[18px]">mail</span>
                Newsletter
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles Bento Grid */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 mt-24">
        <h3 className="font-headline-lg text-headline-lg text-primary mb-8 text-center">Mais de Helena Viana</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedArticles.map((article) => (
            <div 
              key={article.id} 
              onClick={() => handleReadMore(article.id)}
              className="group bg-white rounded-xl overflow-hidden border border-outline-variant/30 shadow-[0_4px_20px_rgba(15,61,46,0.05)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <img
                  alt={article.category}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={article.imageUrl}
                />
              </div>
              <div className="p-6">
                <span className="text-[#C5A059] font-label-md text-label-md block mb-2 uppercase tracking-wider">
                  {article.category}
                </span>
                <h4 className="font-headline-md text-headline-md text-primary leading-tight group-hover:text-secondary transition-colors">
                  {article.title}
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant mt-3 line-clamp-2">
                  {article.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Opiniao;