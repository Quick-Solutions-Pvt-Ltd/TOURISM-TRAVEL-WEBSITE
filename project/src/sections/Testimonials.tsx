import { useLang } from '@/hooks/useLang';
import { reviews } from '@/data/content';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';

export function Testimonials() {
  const { t } = useLang();

  return (
    <section className="testimonials-section">
      <div className="container">
        <p className="eyebrow center-eyebrow"><span /> {t.reviews.subtitle}</p>
        <h2 className="section-title-center">{t.reviews.heading}</h2>
        <TestimonialCarousel reviews={reviews} />
      </div>
    </section>
  );
}
