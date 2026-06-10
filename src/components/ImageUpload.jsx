import React, { useState, useRef } from 'react';

const ImageUpload = ({ onImageUpload, currentImage, label = "Imagem de Destaque" }) => {
  const [imagePreview, setImagePreview] = useState(currentImage || null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (file) => {
    if (!file) return;

    // Validar tipo do arquivo
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
    if (!validTypes.includes(file.type)) {
      alert('Formato inválido! Use apenas JPG, PNG, WEBP ou GIF.');
      return;
    }

    // Validar tamanho (máximo 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('Imagem muito grande! Máximo 5MB.');
      return;
    }

    setUploading(true);

    const reader = new FileReader();
    reader.onloadend = () => {
      const imageData = reader.result;
      setImagePreview(imageData);
      
      if (onImageUpload) {
        onImageUpload({
          file: file,
          preview: imageData,
          name: file.name,
          size: file.size,
          type: file.type
        });
      }
      setUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file) handleFileChange(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileChange(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    if (onImageUpload) onImageUpload(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="space-y-2">
      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{label}</label>
      
      {!imagePreview ? (
        <div
          onClick={() => fileInputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`relative aspect-video rounded-lg border-2 border-dashed transition-all cursor-pointer ${
            isDragging 
              ? 'border-green-500 bg-green-50' 
              : 'border-gray-300 hover:border-green-500 bg-gray-50'
          } flex flex-col items-center justify-center p-3`}
        >
          <input 
            ref={fileInputRef} 
            type="file" 
            accept="image/jpeg,image/jpg,image/png,image/webp,image/gif" 
            onChange={handleFileInput} 
            className="hidden" 
          />
          
          {uploading ? (
            <div className="flex items-center gap-2">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-green-600"></div>
              <p className="text-xs text-gray-500">Enviando...</p>
            </div>
          ) : (
            <>
              <span className="material-symbols-outlined text-4xl mb-2 text-gray-400">add_a_photo</span>
              <p className="text-sm text-gray-500 text-center">Clique ou arraste</p>
              <p className="text-xs text-gray-400 mt-1">JPG, PNG até 5MB</p>
            </>
          )}
        </div>
      ) : (
        <div className="relative group">
          <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
            <img 
              src={imagePreview} 
              alt="Preview" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
              <button 
                type="button"
                onClick={() => fileInputRef.current?.click()} 
                className="p-2 bg-white rounded-full hover:bg-green-500 hover:text-white transition-colors shadow-md" 
                title="Trocar imagem"
              >
                <span className="material-symbols-outlined text-base">edit</span>
              </button>
              <button 
                type="button"
                onClick={handleRemoveImage} 
                className="p-2 bg-white rounded-full hover:bg-red-500 hover:text-white transition-colors shadow-md" 
                title="Remover imagem"
              >
                <span className="material-symbols-outlined text-base">delete</span>
              </button>
            </div>
          </div>
          <p className="text-xs text-gray-500 text-center mt-2">
            Imagem selecionada - clique para alterar
          </p>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;