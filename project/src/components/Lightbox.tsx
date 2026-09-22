import { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: { url: string; caption?: string }[];
  index: number;
  onClose: () => void;
  onNavigate: (dir: number) => void;
}

export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onNavigate(-1);
    if (e.key === 'ArrowRight') onNavigate(1);
  }, [onClose, onNavigate]);

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  const current = images[index];
  if (!current) return null;

  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        <X size={24} />
      </button>
      <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); onNavigate(-1); }} aria-label="Previous">
        <ChevronLeft size={28} />
      </button>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={current.url} alt={current.caption || ''} />
        {current.caption && <p className="lightbox-caption">{current.caption}</p>}
      </div>
      <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); onNavigate(1); }} aria-label="Next">
        <ChevronRight size={28} />
      </button>
    </div>
  );
}
