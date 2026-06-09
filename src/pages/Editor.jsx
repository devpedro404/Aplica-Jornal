import React, { useState } from 'react';
import AdminLayout from '../components/AdminLayout';

const Editor = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [slug, setSlug] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [allowComments, setAllowComments] = useState(true);
  const [isPremium, setIsPremium] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleSaveDraft = () => {
    setShowSnackbar(true);
    setTimeout(() => setShowSnackbar(false), 3000);
  };

  const categories = ['Selecione uma categoria...', 'Política', 'Ambiente', 'Tecnologia', 'Cultura', 'Economia', 'Investigações'];

  return (
    <AdminLayout>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column - Editor */}
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-outline-variant/30">
            <div className="flex items-center justify-between mb-8">
              <h1 className="font-headline-lg text-headline-lg text-primary">Nova Matéria</h1>
              <span className="text-label-md font-label-md bg-surface-container-high px-3 py-1 rounded-full">Rascunho</span>
            </div>

            {/* Headline */}
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Título da Matéria</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 font-display-lg text-[32px] md:text-display-lg px-0 py-2 transition-colors placeholder:text-outline-variant/50"
                  placeholder="Insira um título impactante..."
                />
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Subtítulo</label>
                <textarea
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                  className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 font-body-lg text-body-lg px-0 py-2 transition-colors placeholder:text-outline-variant/50 resize-none"
                  placeholder="Uma breve descrição para atrair o leitor..."
                  rows="2"
                />
              </div>
            </div>

            {/* Rich Text Editor */}
            <div className="mt-10 space-y-4">
              <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Corpo da Matéria</label>
              <div className="border border-outline-variant rounded-lg overflow-hidden">
                {/* Toolbar */}
                <div className="bg-surface-container-low border-b border-outline-variant p-2 flex flex-wrap gap-1">
                  {['format_bold', 'format_italic', 'format_underlined', 'format_list_bulleted', 'format_list_numbered', 'format_quote', 'link', 'image', 'videocam', 'code'].map((icon, idx) => (
                    <button key={idx} className="p-2 hover:bg-surface-container-high rounded transition-colors">
                      <span className="material-symbols-outlined text-on-surface-variant text-sm">{icon}</span>
                    </button>
                  ))}
                </div>
                {/* Editor Area */}
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full p-6 focus:outline-none font-body-lg text-body-lg text-on-surface leading-relaxed min-h-[500px] resize-none"
                  placeholder="Comece a escrever a sua investigação aqui... A floresta tem vozes que precisam ser ouvidas."
                />
              </div>
            </div>
          </div>

          {/* SEO Section */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-outline-variant/30">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-secondary">search_check</span>
              <h2 className="font-headline-md text-headline-md text-primary">Configurações de SEO</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface-variant">Slug da URL</label>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="w-full bg-surface-container-low border-outline-variant focus:border-primary rounded-lg px-4 py-2"
                  placeholder="o-melhor-da-amazonia.com/noticia/..."
                />
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface-variant">Palavras-chave (Tags)</label>
                <input
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  className="w-full bg-surface-container-low border-outline-variant focus:border-primary rounded-lg px-4 py-2"
                  placeholder="Sustentabilidade, Tecnologia, Clima"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="font-label-md text-label-md text-on-surface-variant">Meta Descrição</label>
                <textarea
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  className="w-full bg-surface-container-low border-outline-variant focus:border-primary rounded-lg px-4 py-2 resize-none"
                  placeholder="O texto que aparecerá nos motores de busca..."
                  rows="3"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Actions */}
        <aside className="lg:col-span-4 space-y-6">
          {/* Publishing Actions */}
          <div className="bg-primary p-6 rounded-xl shadow-lg space-y-4 sticky top-24">
            <h3 className="font-headline-md text-headline-md text-on-primary">Publicação</h3>
            <div className="flex flex-col gap-3">
              <button className="w-full py-4 bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
                Publicar Agora
              </button>
              <button
                onClick={handleSaveDraft}
                className="w-full py-4 bg-primary-container text-on-primary-container border border-primary-fixed-dim/30 font-label-md text-label-md rounded-lg flex items-center justify-center gap-2 hover:bg-primary-container/80 transition-all"
              >
                <span className="material-symbols-outlined">save</span>
                Salvar Rascunho
              </button>
            </div>
            <div className="pt-4 border-t border-on-primary/10 space-y-3">
              <div className="flex justify-between text-on-primary/70 text-sm">
                <span>Visibilidade:</span>
                <span className="font-bold text-on-primary">Público</span>
              </div>
              <div className="flex justify-between text-on-primary/70 text-sm">
                <span>Agendamento:</span>
                <span className="font-bold text-on-primary">Imediato</span>
              </div>
            </div>
          </div>

          {/* Category */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-outline-variant/30">
            <label className="font-label-md text-label-md text-on-surface-variant block mb-3 uppercase tracking-wider">Editoria</label>
            <div className="relative">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-surface-container-low border-outline-variant focus:border-secondary rounded-lg px-4 py-3 appearance-none"
              >
                {categories.map((cat, idx) => (
                  <option key={idx}>{cat}</option>
                ))}
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">expand_more</span>
            </div>
          </div>

          {/* Image Upload */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-outline-variant/30">
            <label className="font-label-md text-label-md text-on-surface-variant block mb-3 uppercase tracking-wider">Imagem de Destaque</label>
            <div className="group relative aspect-video rounded-lg overflow-hidden bg-surface-container-high border-2 border-dashed border-outline-variant hover:border-secondary transition-colors cursor-pointer flex flex-col items-center justify-center text-center p-4">
              <span className="material-symbols-outlined text-4xl text-outline mb-2 group-hover:text-secondary transition-colors">add_a_photo</span>
              <p className="text-label-md font-label-md text-on-surface-variant">Clique para subir <br />ou arraste a imagem</p>
              <p className="text-[10px] text-outline mt-2 uppercase">PNG, JPG ou WEBP (Max. 5MB)</p>
            </div>
          </div>

          {/* Settings */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-outline-variant/30 space-y-4">
            <h4 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Configurações Extras</h4>
            <div className="flex items-center justify-between">
              <span className="text-body-md">Permitir Comentários</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={allowComments} onChange={(e) => setAllowComments(e.target.checked)} className="sr-only peer" />
                <div className="w-11 h-6 bg-surface-container-highest peer-focus:ring-4 peer-focus:ring-secondary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-body-md">Matéria Premium</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={isPremium} onChange={(e) => setIsPremium(e.target.checked)} className="sr-only peer" />
                <div className="w-11 h-6 bg-surface-container-highest peer-focus:ring-4 peer-focus:ring-secondary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
              </label>
            </div>
          </div>
        </aside>
      </div>

      {/* Snackbar */}
      <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 bg-secondary text-on-secondary px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 transition-transform duration-500 z-[100] ${showSnackbar ? 'translate-y-0' : 'translate-y-32'}`}>
        <span className="material-symbols-outlined">check_circle</span>
        <span className="font-label-md">Rascunho salvo com sucesso!</span>
      </div>
    </AdminLayout>
  );
};

export default Editor;