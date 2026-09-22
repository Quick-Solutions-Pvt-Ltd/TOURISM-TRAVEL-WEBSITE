import { useState, useMemo } from 'react';
import { PageHero } from '@/components/PageHero';
import { Lightbox } from '@/components/Lightbox';
import { useLang } from '@/hooks/useLang';
import { galleryImages } from '@/data/content';
import { IMG } from '@/data/images';

export function GalleryPage() {
  const { t, lang } = useLang();
  const isFr = lang === 'fr';
  const [category, setCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = Object.entries(t.gallery.categories).map(([key, label]) => ({ key, label }));

  const filtered = useMemo(() => {
    if (category === 'all') return galleryImages;
    return galleryImages.filter((img) => img.category === category);
  }, [category]);

  return (
    <>
      <PageHero
        image={IMG.nineArches}
        title={t.galleryPage.heroTitle}
        subtitle={t.galleryPage.heroSubtitle}
      />
      <section className="gallery-page-section">
        <div className="container">
          <div className="gallery-tabs">
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={category === cat.key ? 'active' : ''}
                onClick={() => setCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="gallery-masonry">
            {filtered.map((img, i) => (
              <button
                key={img.id}
                className="gallery-masonry-item"
                onClick={() => setLightboxIndex(i)}
              >
                <img src={img.url} alt={isFr ? img.captionFr : img.caption} />
                <div className="gallery-masonry-overlay">
                  <span>{isFr ? img.captionFr : img.caption}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
      {lightboxIndex !== null && (
        <Lightbox
          images={filtered.map((img) => ({ url: img.url, caption: isFr ? img.captionFr : img.caption }))}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(dir) => setLightboxIndex((prev) => {
            if (prev === null) return prev;
            return (prev + dir + filtered.length) % filtered.length;
          })}
        />
      )}
    </>
  );
}
