import { PageHero } from '@/components/PageHero';
import { useLang } from '@/hooks/useLang';
import { tours } from '@/data/content';
import { TourCard } from '@/components/TourCard';
import { IMG } from '@/data/images';

export function ToursPage() {
  const { t } = useLang();

  return (
    <>
      <PageHero
        image={IMG.sigiriyaAerial2}
        title={t.tours.heading}
        subtitle={t.tours.subtitle}
      />
      <section className="tours-page-section">
        <div className="container">
          <div className="tours-grid">
            {tours.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
