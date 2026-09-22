import { PageHero } from '@/components/PageHero';
import { useLang } from '@/hooks/useLang';
import { useEnquiry } from '@/hooks/useEnquiry';
import { reviews } from '@/data/content';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import { Star } from 'lucide-react';
import { IMG } from '@/data/images';

export function ReviewsPage() {
  const { t, lang } = useLang();
  const isFr = lang === 'fr';
  const { open } = useEnquiry();

  return (
    <>
      <PageHero
        image={IMG.beachSilhouette}
        title={t.reviewsPage.heroTitle}
        subtitle={t.reviewsPage.heroSubtitle}
      />
      <section className="reviews-page-section">
        <div className="container">
          <TestimonialCarousel reviews={reviews} />
          <div className="reviews-grid">
            {reviews.map((review) => (
              <div key={review.id} className="review-card">
                <div className="review-stars">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="review-text">"{isFr ? review.textFr : review.text}"</p>
                <div className="review-author">
                  {review.photo ? (
                    <img src={review.photo} alt={review.name} className="review-photo" />
                  ) : (
                    <div className="review-avatar">{review.name.charAt(0)}</div>
                  )}
                  <div>
                    <strong>{review.name}</strong>
                    <span>{isFr ? review.countryFr : review.country}</span>
                    <em>{isFr ? review.experienceFr : review.experience}</em>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta-center">
            <button className="btn btn-gold" onClick={open}>
              {t.reviewsPage.cta}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
