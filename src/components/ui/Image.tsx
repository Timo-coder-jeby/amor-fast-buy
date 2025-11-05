import { useState, ImgHTMLAttributes } from 'react';
import { ImageOff, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'onError' | 'onLoad'> {
  /** 图片地址 */
  src: string;
  /** 图片描述 */
  alt: string;
  /** 容器类名 */
  containerClassName?: string;
  /** 是否显示加载动画 */
  showLoading?: boolean;
  /** 加载失败时的占位文本 */
  fallbackText?: string;
  /** 加载失败时的回调 */
  onError?: (error: Event) => void;
  /** 加载成功时的回调 */
  onLoad?: (event: Event) => void;
  /** 图片适配方式 */
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  /** 是否圆角 */
  rounded?: boolean;
}

export const Image = ({
  src,
  alt,
  className,
  containerClassName,
  showLoading = true,
  fallbackText,
  onError,
  onLoad,
  objectFit = 'contain',
  rounded = false,
  ...props
}: ImageProps) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error('Image failed to load:', src);
    setImageError(true);
    setImageLoading(false);
    onError?.(e.nativeEvent);
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.log('Image loaded successfully:', src);
    setImageLoading(false);
    onLoad?.(e.nativeEvent);
  };

  const objectFitClass = {
    contain: 'object-contain',
    cover: 'object-cover',
    fill: 'object-fill',
    none: 'object-none',
    'scale-down': 'object-scale-down',
  }[objectFit];

  return (
    <div className={cn('relative overflow-hidden', rounded && 'rounded-lg', containerClassName)}>
      {!src || imageError ? (
        // 图片不存在或加载失败时显示占位符
        <div className="w-full h-full flex items-center justify-center bg-gray-100">
          <div className="text-gray-400 text-center flex flex-col items-center p-4">
            <ImageOff className="w-12 h-12 mb-2" />
            <div className="text-sm">
              {fallbackText || (!src ? 'No image available' : 'Image failed to load')}
            </div>
            {imageError && src && (
              <div className="text-xs mt-1 text-gray-300 max-w-xs truncate">
                {src}
              </div>
            )}
          </div>
        </div>
      ) : (
        <>
          {/* 加载动画 */}
          {showLoading && imageLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
              <Loader2 className="w-8 h-8 text-pink-500 animate-spin" />
            </div>
          )}
          {/* 图片 */}
          <img
            src={src}
            alt={alt}
            className={cn(
              'w-full h-full transition-opacity duration-300',
              objectFitClass,
              imageLoading ? 'opacity-0' : 'opacity-100',
              className
            )}
            onError={handleImageError}
            onLoad={handleImageLoad}
            {...props}
          />
        </>
      )}
    </div>
  );
};

export default Image;

