import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import type { Review } from '@/data/types';
import { useLang } from '@/hooks/useLang';

interface TestimonialCarouselProps {
  reviews: Review[];
}

export function TestimonialCarousel({ reviews }: TestimonialCarouselProps) {
  const { lang, t } = useLang();
  const [index, setIndex] = useState(0);
  const isFr = lang === 'fr';

  const next = useCallback(() => setIndex((i) => (i + 1) % reviews.length), [reviews.length]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + reviews.length) % reviews.length), [reviews.length]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const review = reviews[index];
  if (!review) return null;

  return (
    <div className="testimonial-carousel">
      <div className="testimonial-card">
        <div className="testimonial-stars">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} size={16} fill="currentColor" />
          ))}
        </div>
        <blockquote className="testimonial-text">"{isFr ? review.textFr : review.text}"</blockquote>
        <div className="testimonial-author">
          {review.photo ? (
            <img src={review.photo} alt={review.name} className="testimonial-photo" />
          ) : (
            <div className="testimonial-avatar">{review.name.charAt(0)}</div>
          )}
          <div className="testimonial-info">
            <strong>{review.name}</strong>
            <span>{isFr ? review.countryFr : review.country}</span>
            <em>{isFr ? review.experienceFr : review.experience}</em>
          </div>
        </div>
      </div>
      <div className="testimonial-controls">
        <button onClick={prev} aria-label={t.reviews.previous}><ChevronLeft size={20} /></button>
        <div className="testimonial-dots">
          {reviews.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? 'active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button onClick={next} aria-label={t.reviews.next}><ChevronRight size={20} /></button>
      </div>
    </div>
  );
}
