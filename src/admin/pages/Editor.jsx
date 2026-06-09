import React, { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import ImageUpload from '../components/ImageUpload';

const Editor = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [featuredImage, setFeaturedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Estados para as configurações extras - COM VALORES INICIAIS
  const [allowComments, setAllowComments] = useState(true);
  const [isPremium, setIsPremium] = useState(false);

  const categories = ['Selecione uma categoria...', 'Política', 'Ambiente', 'Tecnologia', 'Cultura', 'Economia', 'Investigações'];

  const handleImageUpload = (imageData) => {
    if (imageData) {
      setFeaturedImage(imageData.file);
      setImagePreview(imageData.preview);
    } else {
      setFeaturedImage(null);
      setImagePreview(null);
    }
  };

  const handleSaveDraft = () => {
    setSnackbarMessage('Rascunho salvo com sucesso!');
    setShowSnackbar(true);
    setTimeout(() => setShowSnackbar(false), 3000);
  };

  const handlePublish = () => {
    if (!title) {
      setSnackbarMessage('Por favor, insira um título para a matéria!');
      setShowSnackbar(true);
      setTimeout(() => setShowSnackbar(false), 3000);
      return;
    }
    
    if (!category || category === 'Selecione uma categoria...') {
      setSnackbarMessage('Por favor, selecione uma editoria!');
      setShowSnackbar(true);
      setTimeout(() => setShowSnackbar(false), 3000);
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      setSnackbarMessage('Matéria publicada com sucesso!');
      setShowSnackbar(true);
      setIsSubmitting(false);
      setTitle('');
      setSubtitle('');
      setContent('');
      setCategory('');
      setTags('');
      setFeaturedImage(null);
      setImagePreview(null);
      setAllowComments(true);
      setIsPremium(false);
      setTimeout(() => setShowSnackbar(false), 3000);
    }, 1500);
  };

  return (
    <AdminLayout>
      <div className="max-w-full">
        <div className="mb-6">
          <h1 className="font-headline-lg text-headline-lg text-primary text-2xl">Editor de Notícias</h1>
          <p className="text-sm text-on-surface-variant">Crie e edite suas matérias</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column - Editor */}
          <div className="flex-1 min-w-0 space-y-6">
            <div className="bg-white rounded-lg p-5 shadow-sm border border-outline-variant/20">
              {/* Título */}
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold admin-label uppercase block mb-1">
                    Título <span className="text-error">*</span>
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-xl py-1 px-0 admin-card-text"
                    placeholder="Insira um título impactante..."
                  />
                </div>
                
                <div>
                  <label className="text-xs font-semibold admin-label uppercase block mb-1">Subtítulo</label>
                  <textarea
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    className="w-full border-0 border-b border-outline-variant focus:border-primary focus:ring-0 py-1 px-0 resize-none admin-card-text"
                    placeholder="Uma breve descrição para atrair o leitor..."
                    rows="1"
                  />
                </div>
              </div>

              {/* Upload de Imagem */}
              <div className="mt-6">
                <ImageUpload onImageUpload={handleImageUpload} currentImage={imagePreview} label="Imagem de Destaque" />
              </div>

              {/* Editor de Conteúdo */}
              <div className="mt-6">
                <label className="text-xs font-semibold admin-label uppercase block mb-2">
                  Conteúdo <span className="text-error">*</span>
                </label>
                <div className="border border-outline-variant rounded-lg overflow-hidden">
                  <div className="bg-surface-container-low border-b border-outline-variant p-1.5 flex flex-wrap gap-0.5">
                    {['format_bold', 'format_italic', 'format_underlined', 'format_list_bulleted', 'format_list_numbered', 'format_quote', 'link', 'image'].map((icon, idx) => (
                      <button key={idx} type="button" className="p-1.5 hover:bg-surface-container-high rounded">
                        <span className="material-symbols-outlined text-sm admin-card-text">{icon}</span>
                      </button>
                    ))}
                  </div>
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full p-4 focus:outline-none text-sm min-h-[300px] resize-y admin-card-text"
                    placeholder="Comece a escrever a sua investigação aqui..."
                  />
                </div>
              </div>

              {/* SEO */}
              <div className="mt-6 pt-4 border-t border-outline-variant/20">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-secondary text-sm">search_check</span>
                  <h3 className="font-semibold text-primary text-sm">SEO (Google Optimization)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs admin-label block mb-1">Slug da URL</label>
                    <input 
                      type="text" 
                      className="w-full bg-white border border-outline-variant rounded px-3 py-1.5 text-sm admin-card-text" 
                      placeholder="exemplo: desmatamento-amazonia-cai-22" 
                    />
                    <p className="text-[10px] text-on-surface-variant mt-1">O endereço da matéria no site. Use palavras separadas por hífen.</p>
                  </div>
                  <div>
                    <label className="text-xs admin-label block mb-1">Palavras-chave (Tags)</label>
                    <input 
                      type="text" 
                      value={tags} 
                      onChange={(e) => setTags(e.target.value)} 
                      className="w-full bg-white border border-outline-variant rounded px-3 py-1.5 text-sm admin-card-text" 
                      placeholder="ex: desmatamento, amazonia, inpe" 
                    />
                    <p className="text-[10px] text-on-surface-variant mt-1">Separe as palavras-chave por vírgula.</p>
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-xs admin-label block mb-1">Meta Descrição</label>
                    <textarea 
                      className="w-full bg-white border border-outline-variant rounded px-3 py-1.5 text-sm admin-card-text resize-none" 
                      rows="2" 
                      placeholder="Resumo que aparece no Google. Máximo 160 caracteres."
                    />
                    <p className="text-[10px] text-on-surface-variant mt-1">Aparece nos resultados de busca do Google. Seja claro e objetivo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Actions */}
          <div className="lg:w-72 flex-shrink-0 space-y-4">
            {/* Publishing Actions */}
            <div className="bg-primary rounded-lg p-4 shadow-lg">
              <h3 className="font-semibold text-white text-sm mb-3">Publicação</h3>
              <div className="space-y-2">
                <button
                  onClick={handlePublish}
                  disabled={isSubmitting}
                  className="w-full py-2 bg-white text-primary text-xs font-semibold rounded-lg flex items-center justify-center gap-1 hover:bg-gray-100 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <><span className="material-symbols-outlined animate-spin text-sm">sync</span> Publicando...</>
                  ) : (
                    <><span className="material-symbols-outlined text-sm">send</span> Publicar Agora</>
                  )}
                </button>
                <button
                  onClick={handleSaveDraft}
                  className="w-full py-2 bg-primary-container text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1 hover:bg-primary-container/80"
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
            <div className="bg-white rounded-lg p-4 shadow-sm border border-outline-variant/20">
              <label className="text-xs font-semibold admin-label uppercase block mb-2">
                Editoria <span className="text-error">*</span>
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-white border border-outline-variant rounded-lg px-3 py-1.5 text-sm admin-card-text appearance-none"
              >
                {categories.map((cat, idx) => <option key={idx}>{cat}</option>)}
              </select>
              <p className="text-[10px] text-on-surface-variant mt-2">Define em qual seção do site a matéria aparecerá.</p>
            </div>

            {/* Configurações Extras */}
            <div className="bg-white rounded-lg p-4 shadow-sm border border-outline-variant/20 space-y-4">
              <h4 className="text-xs font-semibold admin-label uppercase">Configurações</h4>
              
              {/* Permitir Comentários */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm admin-card-text block">Permitir Comentários</span>
                  <p className="text-[10px] text-on-surface-variant">Leitores podem comentar na matéria</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={allowComments}
                    onChange={(e) => setAllowComments(e.target.checked)}
                    className="sr-only peer" 
                  />
                  <div className="w-10 h-5 bg-outline-variant peer-focus:ring-2 peer-focus:ring-secondary/20 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-secondary"></div>
                </label>
              </div>

              {/* Matéria Premium */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm admin-card-text block">Matéria Premium (Paywall)</span>
                  <p className="text-[10px] text-on-surface-variant">Conteúdo restrito para assinantes</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={isPremium}
                    onChange={(e) => setIsPremium(e.target.checked)}
                    className="sr-only peer" 
                  />
                  <div className="w-10 h-5 bg-outline-variant peer-focus:ring-2 peer-focus:ring-secondary/20 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-secondary"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Snackbar */}
      <div className={`fixed bottom-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-6 py-2 rounded-full shadow-lg flex items-center gap-2 transition-transform duration-500 z-[100] text-sm ${showSnackbar ? 'translate-y-0' : 'translate-y-20'}`}>
        <span className="material-symbols-outlined text-base">{snackbarMessage.includes('sucesso') ? 'check_circle' : 'warning'}</span>
        <span>{snackbarMessage}</span>
      </div>
    </AdminLayout>
  );
};

export default Editor;