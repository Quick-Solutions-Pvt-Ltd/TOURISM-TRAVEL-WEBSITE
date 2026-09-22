import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLang } from '@/hooks/useLang';
import { tours } from '@/data/content';
import { TourCard } from '@/components/TourCard';

export function FeaturedTours() {
  const { t } = useLang();

  return (
    <section className="tours-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> {t.tours.heading}</p>
            <h2>{t.tours.heading}</h2>
            <p className="section-subtitle">{t.tours.subtitle}</p>
          </div>
          <Link to="/tours" className="text-link">
            {t.tours.exploreAll} <ArrowRight size={16} />
          </Link>
        </div>
        <div className="tours-grid">
          {tours.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
}
