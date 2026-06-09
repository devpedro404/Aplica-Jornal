import React from 'react';
import { useNavigate } from 'react-router-dom';
import NewsCard from '../components/NewsCard';
import NewsletterSection from '../components/NewsletterSection';

const HomeDuplicate = () => {
  const navigate = useNavigate();

  const mainNews = [
    {
      id: 201,
      title: "Bioeconomia: Ouro Verde da Floresta em Pé triplica faturamento de cooperativas",
      description: "Novas tecnologias de rastreamento e processamento local permitem que comunidades tradicionais acessem mercados globais de luxo com produtos derivados da biodiversidade amazônica.",
      fullContent: "O faturamento das cooperativas de bioeconomia na Amazônia cresceu 300% nos últimos dois anos, impulsionado por novas tecnologias de rastreabilidade e certificação internacional. Produtos como óleos essenciais, cosméticos naturais e alimentos funcionais estão conquistando mercados na Europa e Ásia, gerando renda para mais de 50 mil famílias na região.",
      category: "Grande Reportagem",
      date: "20 Mai, 2024",
      readTime: 20,
      author: "Ricardo Alencar",
      authorBio: "Jornalista especializado em bioeconomia com 15 anos de experiência.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5Q2xjzOb7LQCLi_QQ6BwYQMnX3cGINYwLxzC03j2LcOP_MUI8fuOVd9-wnKokejX1qislO7ZveKZ3g-IF3zU_-drJKckJ-92xF3u-RKs5MQaj6iPhRFORMrrgmsdcg7QcRanj4W6WyBA5eTElEB_W-5y4Hj6AR3n0oHGC4y0a39fKqOGhwiROi2iGXUK3XXCH0eEhyeduIGHaeZeJOaUYK6DkvU6_j6AHnqApGITHnX6sG9SZ5PdY3XARYMaZLX926MhGF1s_990",
      imageAlt: "Wide-angle landscape of sustainable agricultural field in the Amazon",
      tags: ["Bioeconomia", "Cooperativismo", "Sustentabilidade"]
    },
  ];

  const secondaryNews = [
    {
      id: 202,
      title: "Sistemas integrados elevam produtividade sem desmatamento",
      description: "Como o sistema Lavoura-Pecuária-Floresta (iLPF) está mudando a cara do agronegócio no Mato Grosso e Pará.",
      fullContent: "Produtores rurais que adotaram o sistema iLPF conseguiram aumentar a produtividade em até 40% sem necessidade de abrir novas áreas. A integração entre culturas, pecuária e floresta permite o uso mais eficiente da terra, recuperando pastagens degradadas e gerando renda durante todo o ano.",
      category: "Pecuária Regenerativa",
      date: "19 Mai, 2024",
      readTime: 10,
      author: "Dra. Helena Viana",
      authorBio: "Especialista em agroecologia e sistemas integrados de produção.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBY3BDaey2MdXtFFB6l9qP4b88VsBhI9QhL4UnSbaz7dMynE-FMztRFN2bMlNJAnUFh-tDIR0fMw5Xdkqq4b7QTMw-JUhcqWkfrwMEJoNfkLXHKYSZPdYIAn7QsBkjYdcUDFEmtYnPPAiava9x0G5quITwvHNAanoonRzNXuTqBMls-UDCntyLWCP2hFMAHNBAfscJMhuU-upYvknxU76jC1a4mcR9BUjD4kv4muf5nRkbPFZKd6vCG19XOrHpEsuq_SADO1a5xhh8",
      imageAlt: "Close-up of healthy cattle grazing on diverse pasture system",
      tags: ["Agropecuária", "Sustentabilidade", "ILPF"]
    },
    {
      id: 203,
      title: "Monitoramento por satélite vira aliado do produtor legal",
      description: "Novos algoritmos permitem comprovar a origem sustentável da carne e grãos em tempo real para exportação.",
      fullContent: "A tecnologia blockchain combinada com imagens de satélite está revolucionando a rastreabilidade na cadeia produtiva. Compradores internacionais agora podem verificar em tempo real a origem dos produtos, garantindo que não haja desmatamento ilegal associado à produção.",
      category: "Agrotech",
      date: "18 Mai, 2024",
      readTime: 8,
      author: "Carlos Sampaio",
      authorBio: "Engenheiro agrônomo e consultor em tecnologia agrícola.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYT5YbUTMww6jKFALSGZ-wlGf2RAy_7hrGtkhUNLfIdAdcyPXpXzGSw_Ura-HCh_6Wazu6FrvxwzndnN4-1-iYHtnwp-KwPoB6yZitrkj-v52_qlfevfTYK2yvCkctA9wLfRh7WlKmUA33AsxXbjBiwZIyWrhGqsyK0epdYZdyuDFDRccwocHPL3cDlFoL_iC54Tm1q5ygDjWf6ZAfLkhn747lJJFJLL5xijT8_73DBkJBBqvRAH32gz1iWBqThGZan2JH4JCobtY",
      imageAlt: "Modern agricultural drone hovering over vast green plantation",
      tags: ["Agrotech", "Rastreabilidade", "Exportação"]
    },
  ];

  const handleReadMore = (articleId) => {
    navigate(`/article/${articleId}`);
  };

  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-8 pt-8 pb-32">
      {/* Hero Feature */}
      <section className="mb-16">
        {mainNews.map((news) => (
          <div 
            key={news.id} 
            onClick={() => handleReadMore(news.id)}
            className="relative group overflow-hidden rounded-xl shadow-lg bg-white border border-outline-variant/20 cursor-pointer"
          >
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-2/3 overflow-hidden">
                <img
                  alt={news.title}
                  className="w-full h-[400px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                  src={news.imageUrl}
                />
              </div>
              <div className="lg:w-1/3 p-8 lg:p-12 flex flex-col justify-center bg-white">
                <span className="font-label-md text-label-md text-on-tertiary-container bg-tertiary-fixed px-3 py-1 rounded-full w-fit mb-6 uppercase">
                  {news.category}
                </span>
                <h3 className="font-headline-lg text-headline-lg text-primary mb-6 leading-tight">
                  {news.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                  {news.description}
                </p>
                <div className="flex items-center gap-2 font-label-md text-label-md text-secondary font-bold group">
                  LER REPORTAGEM COMPLETA
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_forward</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Secondary Grid */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondaryNews.map((news) => (
            <article 
              key={news.id} 
              onClick={() => handleReadMore(news.id)}
              className="group cursor-pointer"
            >
              <div className="aspect-video overflow-hidden rounded-lg mb-4 border border-outline-variant/10">
                <img
                  alt={news.category}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={news.imageUrl}
                />
              </div>
              <span className="text-on-tertiary-container font-label-md text-xs uppercase mb-2 block font-bold tracking-tighter">
                {news.category}
              </span>
              <h4 className="font-headline-md text-headline-md text-primary mb-3 leading-tight group-hover:text-secondary transition-colors">
                {news.title}
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {news.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <NewsletterSection />
    </div>
  );
};

export default HomeDuplicate;