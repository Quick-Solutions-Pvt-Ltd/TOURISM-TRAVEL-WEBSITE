import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Check, X } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { useLang } from '@/hooks/useLang';
import { useEnquiry } from '@/hooks/useEnquiry';
import { tours } from '@/data/content';
import { whatsappUrl } from '@/utils/whatsapp';

export function TourDetailPage() {
  const { slug } = useParams();
  const { lang, t } = useLang();
  const { open } = useEnquiry();
  const isFr = lang === 'fr';
  const tour = tours.find((t) => t.slug === slug);

  if (!tour) return <Navigate to="/tours" replace />;

  return (
    <div className="tour-detail">
      <section className="tour-detail-hero">
        <img src={tour.image} alt={isFr ? tour.nameFr : tour.name} />
        <div className="tour-detail-overlay" />
        <div className="tour-detail-hero-content">
          <Link to="/tours" className="back-link">
            <ArrowLeft size={16} /> {t.tours.backToTours}
          </Link>
          <h1>{isFr ? tour.nameFr : tour.name}</h1>
          <div className="tour-detail-meta">
            <span><MapPin size={15} /> {isFr ? tour.destinationFr : tour.destination}</span>
            <span><Clock size={15} /> {isFr ? tour.durationFr : tour.duration}</span>
            <span className="tour-detail-price">{t.tours.from} {tour.price}</span>
          </div>
        </div>
      </section>

      <section className="tour-detail-body">
        <div className="container">
          <div className="tour-detail-layout">
            <div className="tour-detail-main">
              <p className="tour-detail-desc">{isFr ? tour.longDescriptionFr : tour.longDescription}</p>

              <div className="tour-detail-section">
                <h3>{t.tours.highlights}</h3>
                <ul className="tour-highlights">
                  {(isFr ? tour.highlightsFr : tour.highlights).map((h, i) => (
                    <li key={i}><Check size={16} /> {h}</li>
                  ))}
                </ul>
              </div>

              <div className="tour-detail-section">
                <h3>{t.tours.itinerary}</h3>
                <div className="itinerary">
                  {tour.itinerary.map((item, i) => (
                    <div key={i} className="itinerary-item">
                      <span className="itinerary-day">{item.day}</span>
                      <div>
                        <strong>{isFr ? item.titleFr : item.title}</strong>
                        <p>{isFr ? item.descriptionFr : item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="tour-detail-section">
                <h3>{t.tours.gallery}</h3>
                <div className="tour-gallery-grid">
                  {tour.gallery.map((img, i) => (
                    <img key={i} src={img} alt={`${isFr ? tour.nameFr : tour.name} ${i + 1}`} />
                  ))}
                </div>
              </div>
            </div>

            <aside className="tour-detail-sidebar">
              <div className="tour-sidebar-card">
                <div className="tour-sidebar-price">
                  <span>{t.tours.from}</span>
                  <strong>{tour.price}</strong>
                </div>
                <button className="btn btn-gold btn-full" onClick={open}>
                  {t.tours.enquireNow}
                </button>
                <a
                  href={whatsappUrl(`Hello, I'm interested in the ${isFr ? tour.nameFr : tour.name} experience.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-full"
                >
                  <WhatsAppIcon size={16} /> {t.tours.whatsappEnquiry}
                </a>
              </div>

              <div className="tour-sidebar-card">
                <h4>{t.tours.inclusions}</h4>
                <ul className="inclusion-list">
                  {(isFr ? tour.inclusionsFr : tour.inclusions).map((item, i) => (
                    <li key={i}><Check size={14} /> {item}</li>
                  ))}
                </ul>
              </div>

              <div className="tour-sidebar-card">
                <h4>{t.tours.exclusions}</h4>
                <ul className="exclusion-list">
                  {(isFr ? tour.exclusionsFr : tour.exclusions).map((item, i) => (
                    <li key={i}><X size={14} /> {item}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}