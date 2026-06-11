import React, { useState, useEffect } from 'react';
import AdminLayout from '../components/AdminLayout';
import { getAllVideos, addVideo, updateVideo, deleteVideo, toggleFeatured, getYouTubeId } from '../../data/videosData';

const VideosManager = () => {
  const [videos, setVideos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingVideo, setEditingVideo] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    videoUrl: '',
    category: 'Podcast',
    featured: false
  });
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  // Apenas a categoria Podcast
  const categories = ['Podcast'];

  useEffect(() => {
    loadVideos();
  }, []);

  const loadVideos = () => {
    const allVideos = getAllVideos();
    setVideos(allVideos);
  };

  const handleOpenModal = (video = null) => {
    if (video) {
      setEditingVideo(video);
      setFormData({
        title: video.title,
        description: video.description,
        videoUrl: video.videoUrl,
        category: video.category || 'Podcast',
        featured: video.featured
      });
    } else {
      setEditingVideo(null);
      setFormData({
        title: '',
        description: '',
        videoUrl: '',
        category: 'Podcast',
        featured: false
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingVideo(null);
    setFormData({
      title: '',
      description: '',
      videoUrl: '',
      category: 'Podcast',
      featured: false
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title.trim()) {
      showMessage('Por favor, insira o título do episódio!');
      return;
    }
    
    if (!formData.videoUrl.trim()) {
      showMessage('Por favor, insira a URL do vídeo!');
      return;
    }

    const videoId = getYouTubeId(formData.videoUrl);
    const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800';
    
    const videoData = {
      title: formData.title,
      description: formData.description,
      videoUrl: formData.videoUrl,
      category: 'Podcast',
      featured: formData.featured,
      imageUrl: thumbnailUrl
    };

    if (editingVideo) {
      updateVideo(editingVideo.id, videoData);
      showMessage('Episódio atualizado com sucesso!');
    } else {
      addVideo(videoData);
      showMessage('Episódio adicionado com sucesso!');
    }
    
    handleCloseModal();
    loadVideos();
  };

  const handleDelete = (id, title) => {
    if (window.confirm(`Tem certeza que deseja excluir o episódio "${title}"?`)) {
      deleteVideo(id);
      loadVideos();
      showMessage('Episódio excluído com sucesso!');
    }
  };

  const handleToggleFeatured = (id) => {
    toggleFeatured(id);
    loadVideos();
    showMessage('Destaque atualizado!');
  };

  const showMessage = (message) => {
    setSnackbarMessage(message);
    setShowSnackbar(true);
    setTimeout(() => setShowSnackbar(false), 3000);
  };

  return (
    <AdminLayout>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary text-2xl">Gerenciar Podcast</h2>
            <p className="text-sm text-on-surface-variant mt-1">
              Gerencie os episódios do podcast
            </p>
          </div>
          <button
            onClick={() => handleOpenModal()}
            className="px-4 py-2 bg-primary text-white rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors"
          >
            <span className="material-symbols-outlined text-sm">add</span>
            Novo Episódio
          </button>
        </div>

        {/* Lista de Episódios */}
        <div className="bg-white rounded-lg shadow-sm border border-outline-variant/20 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-surface-container-low border-b border-outline-variant/20">
                <tr className="text-left">
                  <th className="px-4 py-3 text-xs font-semibold text-on-surface-variant">Episódio</th>
                  <th className="px-4 py-3 text-xs font-semibold text-on-surface-variant">Categoria</th>
                  <th className="px-4 py-3 text-xs font-semibold text-on-surface-variant">Visualizações</th>
                  <th className="px-4 py-3 text-xs font-semibold text-on-surface-variant">Data</th>
                  <th className="px-4 py-3 text-xs font-semibold text-on-surface-variant">Destaque</th>
                  <th className="px-4 py-3 text-xs font-semibold text-on-surface-variant text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {videos.map((video) => (
                  <tr key={video.id} className="group hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-20 h-12 rounded overflow-hidden bg-gray-100 flex-shrink-0">
                          <img 
                            src={video.imageUrl} 
                            alt={video.title} 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.src = 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800';
                            }}
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-800 line-clamp-1 max-w-xs">{video.title}</p>
                          <p className="text-xs text-gray-400 mt-0.5 line-clamp-1 max-w-xs">{video.description}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-semibold rounded">
                        {video.category}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">{video.views} views</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{video.date}</td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => handleToggleFeatured(video.id)}
                        className={`px-2 py-1 rounded text-[10px] font-semibold transition-colors ${
                          video.featured
                            ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                            : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                        }`}
                      >
                        {video.featured ? '★ Destaque' : '☆ Normal'}
                      </button>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => handleOpenModal(video)}
                          className="p-1.5 hover:text-secondary rounded"
                          title="Editar"
                        >
                          <span className="material-symbols-outlined text-sm">edit</span>
                        </button>
                        <button
                          onClick={() => handleDelete(video.id, video.title)}
                          className="p-1.5 hover:text-error rounded"
                          title="Excluir"
                        >
                          <span className="material-symbols-outlined text-sm">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal de Adicionar/Editar Episódio */}
        {isModalOpen && (
          <>
            <div className="fixed inset-0 bg-black/50 z-40" onClick={handleCloseModal} />
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-xl shadow-2xl z-50 p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-primary">
                  {editingVideo ? 'Editar Episódio' : 'Novo Episódio'}
                </h3>
                <button onClick={handleCloseModal} className="text-gray-400 hover:text-gray-600">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Título *</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:border-secondary focus:ring-0"
                    placeholder="Título do episódio"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:border-secondary focus:ring-0 resize-none"
                    placeholder="Breve descrição do episódio"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">URL do YouTube *</label>
                  <input
                    type="url"
                    name="videoUrl"
                    value={formData.videoUrl}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:border-secondary focus:ring-0"
                    placeholder="https://www.youtube.com/watch?v=..."
                    required
                  />
                  <p className="text-xs text-gray-400 mt-1">Cole a URL completa do vídeo do YouTube</p>
                </div>

                {/* Categoria - fixa como Podcast (campo oculto) */}
                <input type="hidden" name="category" value="Podcast" />

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="featured"
                    id="featured"
                    checked={formData.featured}
                    onChange={handleInputChange}
                    className="w-4 h-4 rounded border-gray-300 text-secondary focus:ring-secondary"
                  />
                  <label htmlFor="featured" className="text-sm text-gray-700">
                    Destacar na página inicial (aparecerá no carrossel da Home)
                  </label>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    {editingVideo ? 'Salvar Alterações' : 'Adicionar Episódio'}
                  </button>
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>

      {/* Snackbar */}
      {showSnackbar && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-2 rounded-full shadow-lg text-sm z-50">
          {snackbarMessage}
        </div>
      )}
    </AdminLayout>
  );
};

export default VideosManager;