import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import type { Tour } from '@/data/types';
import { useLang } from '@/hooks/useLang';
import { whatsappUrl } from '@/utils/whatsapp';

interface TourCardProps {
  tour: Tour;
}

export function TourCard({ tour }: TourCardProps) {
  const { lang, t } = useLang();
  const isFr = lang === 'fr';

  return (
    <article className="tour-card">
      <div className="tour-card-image">
        <img src={tour.image} alt={isFr ? tour.nameFr : tour.name} />
        <div className="tour-card-overlay" />
        {tour.signature && <span className="tour-card-tag">{t.tours.signature}</span>}
        <span className="tour-card-price">{t.tours.from} {tour.price}</span>
      </div>
      <div className="tour-card-body">
        <h3 className="tour-card-title">{isFr ? tour.nameFr : tour.name}</h3>
        <div className="tour-card-meta">
          <span><MapPin size={13} /> {isFr ? tour.destinationFr : tour.destination}</span>
          <span><Clock size={13} /> {isFr ? tour.durationFr : tour.duration}</span>
        </div>
        <p className="tour-card-desc">{isFr ? tour.shortDescriptionFr : tour.shortDescription}</p>
        <div className="tour-card-actions">
          <Link to={`/tours/${tour.slug}`} className="tour-card-link">
            {t.tours.explore} <ArrowRight size={15} />
          </Link>
          <a
            href={whatsappUrl(`Hello, I'm interested in the ${isFr ? tour.nameFr : tour.name} experience.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="tour-card-whatsapp"
            aria-label="WhatsApp enquiry"
          >
            <WhatsAppIcon size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}