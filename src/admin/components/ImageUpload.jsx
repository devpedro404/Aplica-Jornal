import React, { useState, useRef } from 'react';

const ImageUpload = ({ onImageUpload, currentImage, label = "Imagem de Destaque" }) => {
  const [image, setImage] = useState(currentImage || null);
  const [imagePreview, setImagePreview] = useState(currentImage || null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (file) => {
    if (!file) return;

    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
    if (!validTypes.includes(file.type)) {
      alert('Formato inválido! Use apenas JPG, PNG, WEBP ou GIF.');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('Imagem muito grande! Máximo 5MB.');
      return;
    }

    setUploading(true);

    const reader = new FileReader();
    reader.onloadend = () => {
      const imageData = reader.result;
      setImagePreview(imageData);
      setImage(file);
      
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

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileChange(file);
  };

  const handleRemoveImage = () => {
    setImage(null);
    setImagePreview(null);
    if (onImageUpload) onImageUpload(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="space-y-2">
      <label className="text-xs font-semibold admin-label uppercase tracking-wider">{label}</label>
      
      {!imagePreview ? (
        <div
          onClick={() => fileInputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          className={`relative aspect-video rounded-lg border-2 border-dashed transition-all cursor-pointer ${
            isDragging ? 'border-secondary bg-secondary/10' : 'border-outline-variant hover:border-secondary bg-surface-container-high'
          } flex flex-col items-center justify-center p-3`}
        >
          <input 
            ref={fileInputRef} 
            type="file" 
            accept="image/jpeg,image/jpg,image/png,image/webp,image/gif" 
            onChange={(e) => handleFileChange(e.target.files[0])} 
            className="hidden" 
          />
          
          {uploading ? (
            <div className="flex items-center gap-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-secondary"></div>
              <p className="text-xs admin-card-text">Enviando...</p>
            </div>
          ) : (
            <>
              <span className="material-symbols-outlined text-2xl mb-1 text-outline group-hover:text-secondary">add_a_photo</span>
              <p className="text-xs admin-card-text text-center">Clique ou arraste</p>
              <p className="text-[10px] text-outline mt-1">JPG, PNG até 5MB</p>
            </>
          )}
        </div>
      ) : (
        <div className="relative group">
          <div className="relative aspect-video rounded-lg overflow-hidden bg-surface-container-high">
            <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <button 
                type="button"
                onClick={() => fileInputRef.current?.click()} 
                className="p-1.5 bg-white rounded-full hover:bg-secondary hover:text-white transition-colors" 
                title="Trocar imagem"
              >
                <span className="material-symbols-outlined text-sm">edit</span>
              </button>
              <button 
                type="button"
                onClick={handleRemoveImage} 
                className="p-1.5 bg-white rounded-full hover:bg-error hover:text-white transition-colors" 
                title="Remover imagem"
              >
                <span className="material-symbols-outlined text-sm">delete</span>
              </button>
            </div>
          </div>
          <p className="text-[10px] text-on-surface-variant text-center mt-1">Imagem selecionada - clique para alterar</p>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;