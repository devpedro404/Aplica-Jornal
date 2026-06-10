import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getYouTubeId } from '../data/videosData';

const VideoCard = ({ id, title, videoUrl, imageUrl, imageAlt, category, description }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imgError, setImgError] = useState(false);
  const navigate = useNavigate();

  const handlePlay = (e) => {
    e.stopPropagation();
    if (videoUrl) {
      setIsPlaying(true);
    }
  };

  const handleCardClick = () => {
    if (id) {
      navigate(`/video/${id}`);
    }
  };

  // Placeholder image
  const placeholderImage = 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400';

  if (isPlaying && videoUrl) {
    const videoId = getYouTubeId(videoUrl);
    return (
      <div className="flex-shrink-0 w-[320px] md:w-[450px] snap-start">
        <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <h3 className="font-headline-md text-headline-md leading-tight hover:text-secondary transition-colors cursor-pointer">
          {title}
        </h3>
      </div>
    );
  }

  return (
    <div 
      onClick={handleCardClick}
      className="flex-shrink-0 w-[320px] md:w-[450px] snap-start group cursor-pointer"
    >
      <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-gray-200">
        {!imgError ? (
          <img
            src={imageUrl || placeholderImage}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gray-700 flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-5xl">videocam</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            onClick={handlePlay}
            className="w-16 h-16 bg-white/20 backdrop-blur-md border border-white/40 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer"
          >
            <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              play_arrow
            </span>
          </div>
        </div>
      </div>
      <h3 className="font-headline-md text-headline-md leading-tight group-hover:text-secondary transition-colors line-clamp-2">
        {title}
      </h3>
      {category && (
        <p className="text-xs text-secondary mt-1 font-semibold">{category}</p>
      )}
      {description && (
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">{description}</p>
      )}
    </div>
  );
};

export default VideoCard;