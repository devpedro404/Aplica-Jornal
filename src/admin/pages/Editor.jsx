import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../components/AdminLayout';
import ImageUpload from '../../components/ImageUpload';
import { addArticle, updateArticle } from '../../data/allArticles';

const Editor = ({ editingArticle = null }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState(editingArticle?.title || '');
  const [subtitle, setSubtitle] = useState(editingArticle?.description || '');
  const [content, setContent] = useState(editingArticle?.fullContent || '');
  const [category, setCategory] = useState(editingArticle?.category || '');
  const [tags, setTags] = useState(editingArticle?.tags?.join(', ') || '');
  const [slug, setSlug] = useState(editingArticle?.slug || '');
  const [metaDescription, setMetaDescription] = useState(editingArticle?.metaDescription || '');
  const [imagePreview, setImagePreview] = useState(editingArticle?.imageUrl || null);
  const [featuredImage, setFeaturedImage] = useState(null);
  const [allowComments, setAllowComments] = useState(editingArticle?.allowComments !== false);
  const [isPremium, setIsPremium] = useState(editingArticle?.isPremium || false);
  const [isHero, setIsHero] = useState(editingArticle?.isHero || false);
  const [page, setPage] = useState(editingArticle?.page || 'home');
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [author, setAuthor] = useState(editingArticle?.author || '');

  const categories = ['Selecione uma categoria...', 'Política', 'Ambiente', 'Tecnologia', 'Cultura', 'Economia', 'Investigações', 'Exclusivo', 'Sustentabilidade'];
  const pages = [
    { value: 'home', label: 'Home (Página Inicial)' },
    { value: 'politica', label: 'Política' },
    { value: 'ambiente', label: 'Ambiente' },
    { value: 'cultura', label: 'Cultura' },
    { value: 'negocios', label: 'Negócios' },
    { value: 'seguranca', label: 'Segurança' }
  ];

  const showMessage = (message) => {
    setSnackbarMessage(message);
    setShowSnackbar(true);
    setTimeout(() => setShowSnackbar(false), 3000);
  };

  const generateSlug = () => {
    if (title) {
      const generatedSlug = title
        .toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
      setSlug(generatedSlug);
    }
  };

  const handleImageUpload = (imageData) => {
    if (imageData) {
      setFeaturedImage(imageData.file);
      setImagePreview(imageData.preview);
    } else {
      setFeaturedImage(null);
      setImagePreview(null);
    }
  };

  const handleSave = (isDraft = false) => {
    if (!title.trim()) {
      showMessage('Por favor, insira um título para a matéria!');
      return;
    }
    
    if (!category || category === 'Selecione uma categoria...') {
      showMessage('Por favor, selecione uma editoria!');
      return;
    }

    setIsSubmitting(true);

    const articleData = {
      title: title.trim(),
      description: subtitle.trim(),
      fullContent: content.trim(),
      category: category,
      author: author.trim() || 'Redação',
      tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      slug: slug.trim() || title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      metaDescription: metaDescription.trim() || subtitle.trim(),
      allowComments: allowComments,
      isPremium: isPremium,
      isHero: isHero,
      page: page,
      imageUrl: imagePreview || 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
      readTime: Math.ceil((content.length || 0) / 1000) || 5
    };

    if (editingArticle) {
      updateArticle(editingArticle.id, articleData);
      showMessage('Matéria atualizada com sucesso!');
    } else {
      addArticle(articleData);
      showMessage('Matéria publicada com sucesso!');
      
      if (!isDraft) {
        // Limpar formulário
        setTitle('');
        setSubtitle('');
        setContent('');
        setCategory('');
        setTags('');
        setSlug('');
        setMetaDescription('');
        setImagePreview(null);
        setFeaturedImage(null);
        setAuthor('');
        setAllowComments(true);
        setIsPremium(false);
        setIsHero(false);
        setPage('home');
      }
    }

    setIsSubmitting(false);
    
    setTimeout(() => {
      navigate('/admin/articles');
    }, 1500);
  };

  const handlePublish = () => handleSave(false);
  const handleSaveDraft = () => handleSave(true);

  return (
    <AdminLayout>
      <div className="max-w-full">
        <div className="mb-6">
          <h1 className="font-headline-lg text-headline-lg text-primary text-2xl">
            {editingArticle ? 'Editar Matéria' : 'Editor de Notícias'}
          </h1>
          <p className="text-sm text-gray-500">Crie e edite suas matérias</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column - Editor */}
          <div className="flex-1 min-w-0 space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              
              {/* Título */}
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase block mb-1">
                    Título <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onBlur={generateSlug}
                    className="w-full border-0 border-b border-gray-300 focus:border-green-600 focus:ring-0 text-xl py-1 px-0"
                    placeholder="Insira um título impactante..."
                  />
                </div>
                
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase block mb-1">Subtítulo</label>
                  <textarea
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    className="w-full border-0 border-b border-gray-300 focus:border-green-600 focus:ring-0 py-1 px-0 resize-none"
                    placeholder="Uma breve descrição para atrair o leitor..."
                    rows="2"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase block mb-1">Autor</label>
                  <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full border-0 border-b border-gray-300 focus:border-green-600 focus:ring-0 py-1 px-0"
                    placeholder="Nome do autor"
                  />
                </div>
              </div>

              {/* Upload de Imagem */}
              <div className="mt-6">
                <ImageUpload 
                  onImageUpload={handleImageUpload} 
                  currentImage={imagePreview} 
                  label="Imagem de Destaque" 
                />
              </div>

              {/* Editor de Conteúdo */}
              <div className="mt-6">
                <label className="text-xs font-semibold text-gray-500 uppercase block mb-2">
                  Conteúdo <span className="text-red-500">*</span>
                </label>
                <div className="border border-gray-300 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 border-b border-gray-300 p-2 flex flex-wrap gap-1">
                    {['format_bold', 'format_italic', 'format_underlined', 'format_list_bulleted', 'format_list_numbered', 'format_quote', 'link', 'image'].map((icon, idx) => (
                      <button key={idx} type="button" className="p-1.5 hover:bg-gray-200 rounded">
                        <span className="material-symbols-outlined text-sm text-gray-600">{icon}</span>
                      </button>
                    ))}
                  </div>
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full p-4 focus:outline-none text-sm min-h-[300px] resize-y"
                    placeholder="Comece a escrever a sua investigação aqui..."
                  />
                </div>
              </div>

              {/* SEO */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-green-600 text-sm">search_check</span>
                  <h3 className="font-semibold text-gray-800 text-sm">SEO (Google Optimization)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-500 block mb-1">Slug da URL</label>
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                        className="flex-1 bg-white border border-gray-300 rounded px-3 py-1.5 text-sm"
                        placeholder="exemplo: desmatamento-amazonia-cai-22" 
                      />
                      <button
                        type="button"
                        onClick={generateSlug}
                        className="px-3 py-1.5 bg-gray-100 rounded text-sm hover:bg-gray-200"
                      >
                        Gerar
                      </button>
                    </div>
                    <p className="text-[10px] text-gray-500 mt-1">O endereço da matéria no site. Use palavras separadas por hífen.</p>
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 block mb-1">Palavras-chave (Tags)</label>
                    <input 
                      type="text" 
                      value={tags} 
                      onChange={(e) => setTags(e.target.value)} 
                      className="w-full bg-white border border-gray-300 rounded px-3 py-1.5 text-sm" 
                      placeholder="ex: desmatamento, amazonia, inpe" 
                    />
                    <p className="text-[10px] text-gray-500 mt-1">Separe as palavras-chave por vírgula.</p>
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-xs text-gray-500 block mb-1">Meta Descrição</label>
                    <textarea 
                      value={metaDescription}
                      onChange={(e) => setMetaDescription(e.target.value)}
                      className="w-full bg-white border border-gray-300 rounded px-3 py-1.5 text-sm resize-none" 
                      rows="2" 
                      placeholder="Resumo que aparece no Google. Máximo 160 caracteres."
                      maxLength="160"
                    />
                    <p className="text-[10px] text-gray-500 mt-1">
                      {metaDescription.length}/160 caracteres. Aparece nos resultados de busca do Google.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Actions */}
          <div className="lg:w-80 flex-shrink-0 space-y-4">
            {/* Publishing Actions */}
            <div className="bg-green-800 rounded-lg p-4 shadow-lg">
              <h3 className="font-semibold text-white text-sm mb-3">Publicação</h3>
              <div className="space-y-2">
                <button
                  onClick={handlePublish}
                  disabled={isSubmitting}
                  className="w-full py-2 bg-white text-green-800 text-xs font-semibold rounded-lg flex items-center justify-center gap-1 hover:bg-gray-100 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <><span className="material-symbols-outlined animate-spin text-sm">sync</span> Publicando...</>
                  ) : (
                    <><span className="material-symbols-outlined text-sm">send</span> Publicar Agora</>
                  )}
                </button>
                <button
                  onClick={handleSaveDraft}
                  className="w-full py-2 bg-green-700 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1 hover:bg-green-800"
                >
                  <span className="material-symbols-outlined text-sm">save</span> Salvar Rascunho
                </button>
              </div>
              <div className="mt-3 pt-3 border-t border-white/10 space-y-1.5 text-xs text-white/70">
                <div className="flex justify-between">
                  <span>Visibilidade:</span>
                  <span className="font-semibold text-white">Público</span>
                </div>
                <div className="flex justify-between">
                  <span>Agendamento:</span>
                  <span className="font-semibold text-white">Imediato</span>
                </div>
              </div>
            </div>

            {/* Category Selection */}
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
              <label className="text-xs font-semibold text-gray-500 uppercase block mb-2">
                Editoria <span className="text-red-500">*</span>
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm appearance-none"
              >
                {categories.map((cat, idx) => (
                  <option key={idx} value={cat === 'Selecione uma categoria...' ? '' : cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <p className="text-[10px] text-gray-500 mt-2">Define em qual seção do site a matéria aparecerá.</p>
            </div>

            {/* Page Selection */}
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
              <label className="text-xs font-semibold text-gray-500 uppercase block mb-2">
                Página de Destino
              </label>
              <select
                value={page}
                onChange={(e) => setPage(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm appearance-none"
              >
                {pages.map(p => (
                  <option key={p.value} value={p.value}>{p.label}</option>
                ))}
              </select>
              <p className="text-[10px] text-gray-500 mt-2">Onde este artigo será exibido.</p>
            </div>

            {/* Configurações Extras */}
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 space-y-4">
              <h4 className="text-xs font-semibold text-gray-500 uppercase">Configurações</h4>
              
              {/* Destaque Principal */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm text-gray-700 block">Destaque Principal (Hero)</span>
                  <p className="text-[10px] text-gray-400">Aparece no carrossel principal da Home</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={isHero}
                    onChange={(e) => setIsHero(e.target.checked)}
                    className="sr-only peer" 
                  />
                  <div className="w-10 h-5 bg-gray-300 peer-focus:ring-2 peer-focus:ring-green-500/20 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
                </label>
              </div>

              {/* Permitir Comentários */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm text-gray-700 block">Permitir Comentários</span>
                  <p className="text-[10px] text-gray-400">Leitores podem comentar na matéria</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={allowComments}
                    onChange={(e) => setAllowComments(e.target.checked)}
                    className="sr-only peer" 
                  />
                  <div className="w-10 h-5 bg-gray-300 peer-focus:ring-2 peer-focus:ring-green-500/20 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
                </label>
              </div>

              {/* Matéria Premium */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm text-gray-700 block">Matéria Premium (Paywall)</span>
                  <p className="text-[10px] text-gray-400">Conteúdo restrito para assinantes</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={isPremium}
                    onChange={(e) => setIsPremium(e.target.checked)}
                    className="sr-only peer" 
                  />
                  <div className="w-10 h-5 bg-gray-300 peer-focus:ring-2 peer-focus:ring-green-500/20 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Snackbar */}
      <div className={`fixed bottom-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-2 rounded-full shadow-lg flex items-center gap-2 transition-transform duration-500 z-[100] text-sm ${showSnackbar ? 'translate-y-0' : 'translate-y-20'}`}>
        <span className="material-symbols-outlined text-base">check_circle</span>
        <span>{snackbarMessage}</span>
      </div>
    </AdminLayout>
  );
};

export default Editor;