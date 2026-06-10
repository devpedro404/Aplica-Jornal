import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getArticleById, getRelatedArticles } from '../../data/allArticles';

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    console.log('Buscando artigo com ID:', id);
    const articleData = getArticleById(id);
    console.log('Artigo encontrado:', articleData);
    
    if (articleData) {
      setArticle(articleData);
      setRelatedArticles(getRelatedArticles(articleData.id, articleData.category));
    }
    setLoading(false);
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const progressBar = document.getElementById('articleProgressBar');
      if (progressBar) {
        progressBar.style.width = scrolled + '%';
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary mx-auto"></div>
          <p className="mt-4 text-gray-500">Carregando artigo...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <span className="material-symbols-outlined text-6xl text-gray-300 mb-4">article</span>
          <h2 className="text-2xl font-bold text-primary mb-4">Artigo não encontrado</h2>
          <p className="text-gray-500 mb-6">O artigo que você está procurando pode ter sido removido ou não existe.</p>
          <button 
            onClick={() => navigate('/')}
            className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary-fixed hover:text-primary transition-colors"
          >
            Voltar para página inicial
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20">
      {/* Progress Bar */}
      <div className="fixed top-16 left-0 w-full z-50">
        <div id="articleProgressBar" className="h-0.5 bg-[#C5A059] transition-all duration-100" style={{ width: '0%' }}></div>
      </div>

      {/* Article Header */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img 
          src={article.imageUrl} 
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 max-w-5xl mx-auto">
          <span className="inline-block bg-[#C5A059] text-black px-3 py-1 rounded-full text-sm font-bold mb-4">
            {article.category}
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
            <span>Por {article.author}</span>
            <span className="w-1 h-1 bg-white/40 rounded-full"></span>
            <span>{article.date}</span>
            <span className="w-1 h-1 bg-white/40 rounded-full"></span>
            <span>{article.readTime} min de leitura</span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 leading-relaxed mb-8 font-medium italic border-l-4 border-secondary pl-6">
            {article.description}
          </p>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>{article.fullContent || `A Amazônia é um bioma único que abriga a maior biodiversidade do planeta. Este artigo explora as nuances e desafios enfrentados pela região, destacando a importância da preservação e do desenvolvimento sustentável. Pesquisadores de todo o mundo têm voltado seus olhos para a floresta, reconhecendo seu papel fundamental no equilíbrio climático global.`}</p>
            <p>As comunidades tradicionais desempenham um papel crucial na conservação da floresta, com conhecimentos ancestrais que complementam as descobertas científicas modernas. A integração entre saber popular e tecnologia tem gerado resultados promissores para a bioeconomia regional.</p>
            <p>Iniciativas de conservação têm mostrado resultados positivos nos últimos anos, com a redução do desmatamento em áreas protegidas. No entanto, os desafios persistem, exigindo políticas públicas eficazes e engajamento da sociedade civil.</p>
            <p>O futuro da Amazônia depende de um esforço coletivo que envolve governos, empresas, comunidades e cada cidadão. A conscientização e a educação ambiental são ferramentas fundamentais nesse processo de transformação.</p>
          </div>
        </div>

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="font-bold text-primary mb-4">Tópicos relacionados:</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Author Bio */}
        <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-2xl font-bold text-secondary">
              {article.author?.charAt(0) || 'A'}
            </div>
            <div>
              <h4 className="font-bold text-primary text-lg">{article.author}</h4>
              <p className="text-sm text-gray-500 mt-1">
                Especialista em {article.category} com vasta experiência na cobertura da Amazônia.
              </p>
              <button className="mt-3 text-secondary font-semibold text-sm hover:underline">
                Seguir autor
              </button>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-12">
            <h3 className="font-bold text-primary text-2xl mb-6">Você também pode gostar</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((related) => (
                <Link 
                  key={related.id} 
                  to={`/article/${related.id}`}
                  className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={related.imageUrl} 
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-[#C5A059] font-semibold uppercase">{related.category}</span>
                    <h4 className="font-bold text-primary mt-2 line-clamp-2 group-hover:text-secondary transition-colors">
                      {related.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-3 text-xs text-gray-400">
                      <span>{related.date}</span>
                      <span>•</span>
                      <span>{related.readTime} min</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleDetail;