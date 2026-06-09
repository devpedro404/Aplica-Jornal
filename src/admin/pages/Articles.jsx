import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../components/AdminLayout';
import { getAllArticles, deleteArticle, updateArticle } from '../../data/allArticles';

const Articles = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [editingArticle, setEditingArticle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    fullContent: '',
    category: '',
    author: '',
    imageUrl: '',
    tags: ''
  });

  const itemsPerPage = 10;
  const categories = ['Todas', 'Ambiente', 'Política', 'Cultura', 'Tecnologia', 'Economia', 'Exclusivo', 'Sustentabilidade', 'Destaque Cultural', 'Artes Originárias', 'Música', 'Análise Legislativa', 'Bastidores', 'Crise Climática'];

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = () => {
    const all = getAllArticles();
    setArticles(all);
  };

  // Filtrar artigos
  let filteredArticles = [...articles];
  if (searchTerm) {
    filteredArticles = filteredArticles.filter(a => 
      a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.author?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  if (selectedCategory && selectedCategory !== 'Todas') {
    filteredArticles = filteredArticles.filter(a => a.category === selectedCategory);
  }

  // Paginação
  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedArticles = filteredArticles.slice(startIndex, startIndex + itemsPerPage);

  const handleEdit = (article) => {
    setEditingArticle(article);
    setFormData({
      title: article.title,
      description: article.description,
      fullContent: article.fullContent,
      category: article.category,
      author: article.author,
      imageUrl: article.imageUrl,
      tags: article.tags?.join(', ') || ''
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id, title) => {
    if (window.confirm(`Tem certeza que deseja excluir o artigo "${title}"?`)) {
      deleteArticle(id);
      loadArticles();
      showMessage('Artigo excluído com sucesso!');
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    
    const updatedArticle = {
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim())
    };
    
    updateArticle(editingArticle.id, updatedArticle);
    setIsModalOpen(false);
    setEditingArticle(null);
    loadArticles();
    showMessage('Artigo atualizado com sucesso!');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const showMessage = (message) => {
    setSnackbarMessage(message);
    setShowSnackbar(true);
    setTimeout(() => setShowSnackbar(false), 3000);
  };

  const handleNewArticle = () => {
    navigate('/admin/editor');
  };

  return (
    <AdminLayout>
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary text-2xl">Gerenciar Artigos</h2>
            <p className="text-sm text-on-surface-variant">Gerencie todas as notícias e artigos do portal</p>
          </div>
          <button
            onClick={handleNewArticle}
            className="px-4 py-2 bg-primary text-white rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors"
          >
            <span className="material-symbols-outlined text-sm">add</span>
            Novo Artigo
          </button>
        </div>

        {/* Filtros */}
        <div className="mb-6 p-4 bg-white rounded-lg shadow-sm border border-outline-variant/20">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-base">search</span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 h-10 border border-outline-variant rounded-lg focus:border-secondary text-sm"
                placeholder="Buscar por título ou autor..."
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="h-10 px-3 border border-outline-variant rounded-lg text-sm bg-white"
            >
              {categories.map((cat) => <option key={cat}>{cat}</option>)}
            </select>
          </div>
        </div>

        {/* Tabela de Artigos */}
        <div className="bg-white rounded-lg shadow-sm border border-outline-variant/20 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-surface-container-low border-b border-outline-variant/20">
                <tr className="text-left">
                  <th className="px-4 py-3 text-xs font-semibold text-on-surface-variant">Título</th>
                  <th className="px-4 py-3 text-xs font-semibold text-on-surface-variant">Autor</th>
                  <th className="px-4 py-3 text-xs font-semibold text-on-surface-variant">Categoria</th>
                  <th className="px-4 py-3 text-xs font-semibold text-on-surface-variant">Data</th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-on-surface-variant">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {paginatedArticles.map((article) => (
                  <tr key={article.id} className="group hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-10 rounded overflow-hidden bg-gray-100 flex-shrink-0">
                          <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
                        </div>
                        <p className="text-sm text-gray-800 line-clamp-2 max-w-md">{article.title}</p>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">{article.author || 'Redação'}</td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-0.5 bg-secondary-container/30 text-secondary text-[10px] font-semibold rounded">
                        {article.category}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500">{article.date}</td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => handleEdit(article)}
                          className="p-1.5 hover:text-secondary rounded"
                          title="Editar"
                        >
                          <span className="material-symbols-outlined text-base">edit</span>
                        </button>
                        <button
                          onClick={() => handleDelete(article.id, article.title)}
                          className="p-1.5 hover:text-error rounded"
                          title="Excluir"
                        >
                          <span className="material-symbols-outlined text-base">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Paginação */}
          {totalPages > 1 && (
            <div className="px-4 py-3 bg-gray-50 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-3">
              <p className="text-xs text-gray-500">
                Mostrando {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredArticles.length)} de {filteredArticles.length} artigos
              </p>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="w-7 h-7 flex items-center justify-center rounded hover:bg-white disabled:opacity-30"
                >
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
                </button>
                <span className="px-3 py-1 bg-primary text-white text-sm rounded">{currentPage}</span>
                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="w-7 h-7 flex items-center justify-center rounded hover:bg-white disabled:opacity-30"
                >
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal de Edição */}
      {isModalOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsModalOpen(false)} />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl z-50 p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-primary">Editar Artigo</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Título *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:border-secondary focus:ring-0"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="2"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:border-secondary focus:ring-0 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Conteúdo Completo</label>
                <textarea
                  name="fullContent"
                  value={formData.fullContent}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:border-secondary focus:ring-0 resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Categoria</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:border-secondary focus:ring-0"
                  >
                    {categories.filter(c => c !== 'Todas').map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Autor</label>
                  <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:border-secondary focus:ring-0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">URL da Imagem</label>
                <input
                  type="text"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:border-secondary focus:ring-0"
                  placeholder="https://..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tags (separadas por vírgula)</label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:border-secondary focus:ring-0"
                  placeholder="Ex: tecnologia, inovação, sustentabilidade"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Salvar Alterações
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </>
      )}

      {/* Snackbar */}
      {showSnackbar && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-2 rounded-full shadow-lg text-sm z-50">
          {snackbarMessage}
        </div>
      )}
    </AdminLayout>
  );
};

export default Articles;