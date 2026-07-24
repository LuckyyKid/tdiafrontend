import React from 'react';

interface OptimizedImageProps {
  src: string;
  webpSrc?: string;
  avifSrc?: string;
  alt: string;
  width?: number;
  height?: number;
  sizes?: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  style?: React.CSSProperties;
}

/**
 * OptimizedImage component that uses modern image formats (AVIF, WebP)
 * with fallback to original format for better performance
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  webpSrc,
  avifSrc,
  alt,
  width,
  height,
  sizes,
  className = '',
  loading = 'lazy',
  fetchPriority = 'auto',
  style,
}) => {
  // If no optimized formats provided, use regular img
  if (!webpSrc && !avifSrc) {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loading}
        fetchPriority={fetchPriority}
        style={style}
      />
    );
  }

  return (
    <picture>
      {/* AVIF - best compression, newer browsers */}
      {avifSrc && (
        <source
          srcSet={avifSrc}
          type="image/avif"
          sizes={sizes}
        />
      )}
      
      {/* WebP - good compression, wide support */}
      {webpSrc && (
        <source
          srcSet={webpSrc}
          type="image/webp"
          sizes={sizes}
        />
      )}
      
      {/* Original format fallback */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loading}
        fetchPriority={fetchPriority}
        style={style}
      />
    </picture>
  );
};

export default OptimizedImage;
