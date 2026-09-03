import React, { useState, useEffect, useRef } from 'react';
import { Image as ImageIcon, Sparkles } from 'lucide-react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
  fallbackSrc?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  fallbackText,
  fallbackSrc,
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  // Synchronize when src prop changes
  useEffect(() => {
    setCurrentSrc(src);
    setHasError(false);
    setIsLoaded(false);
  }, [src]);

  // Check if image is already cached/complete immediately
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [currentSrc]);

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setHasError(false);
    } else {
      setHasError(true);
      setIsLoaded(true);
    }
  };

  return (
    <div className={`relative overflow-hidden bg-slate-900/10 dark:bg-slate-800 ${className}`}>
      {/* Lightweight skeleton placeholder only while initial loading */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-slate-200/80 dark:bg-slate-700/80 animate-pulse flex items-center justify-center">
          <ImageIcon className="w-5 h-5 text-slate-400 opacity-60" />
        </div>
      )}

      {/* Fallback Display if image totally fails to load */}
      {hasError ? (
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-slate-900 flex flex-col items-center justify-center p-3 text-center text-white">
          <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center mb-1.5 backdrop-blur-xs">
            <Sparkles className="w-5 h-5 text-amber-300" />
          </div>
          <span className="text-xs font-bold leading-tight line-clamp-2">
            {fallbackText || alt || 'Evidência Digital'}
          </span>
          <span className="text-[10px] text-indigo-200 mt-0.5">
            Registro visual do caso
          </span>
        </div>
      ) : (
        <img
          ref={imgRef}
          key={currentSrc}
          src={currentSrc}
          alt={alt}
          loading="eager"
          decoding="async"
          referrerPolicy="no-referrer"
          onLoad={() => setIsLoaded(true)}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-200 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          {...props}
        />
      )}
    </div>
  );
};
