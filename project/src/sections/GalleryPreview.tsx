import { useState } from 'react';
import { useLang } from '@/hooks/useLang';
import { galleryImages } from '@/data/content';
import { Lightbox } from '@/components/Lightbox';

export function GalleryPreview() {
  const { t, lang } = useLang();
  const isFr = lang === 'fr';
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const preview = galleryImages.slice(0, 8);

  return (
    <section className="gallery-preview-section">
      <div className="container">
        <p className="eyebrow center-eyebrow"><span /> {t.gallery.subtitle}</p>
        <h2 className="section-title-center">{t.gallery.heading}</h2>
      </div>
      <div className="gallery-preview-grid">
        {preview.map((img, i) => (
          <button
            key={img.id}
            className={`gallery-preview-item gallery-preview-${i}`}
            onClick={() => setLightboxIndex(i)}
          >
            <img src={img.url} alt={isFr ? img.captionFr : img.caption} />
            <div className="gallery-preview-overlay">
              <span>{isFr ? img.captionFr : img.caption}</span>
            </div>
          </button>
        ))}
      </div>
      {lightboxIndex !== null && (
        <Lightbox
          images={preview.map((img) => ({ url: img.url, caption: isFr ? img.captionFr : img.caption }))}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(dir) => setLightboxIndex((prev) => {
            if (prev === null) return prev;
            return (prev + dir + preview.length) % preview.length;
          })}
        />
      )}
    </section>
  );
}
