import { Mail, MessageCircle, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { useLang } from '@/hooks/useLang';
import { useEnquiry } from '@/hooks/useEnquiry';
import { whatsappUrl } from '@/utils/whatsapp';

export function ContactSection() {
  const { t } = useLang();
  const { open } = useEnquiry();

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <p className="eyebrow"><span /> {t.contact.heading}</p>
            <h2>{t.contact.subtitle}</h2>
            <div className="contact-items">
              <a href="mailto:hello@ceylonsoultravels.com">
                <Mail size={18} />
                <div><strong>{t.contact.email}</strong><span>{t.contact.emailPlaceholder}</span></div>
              </a>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={18} />
                <div><strong>{t.contact.whatsapp}</strong><span>{t.contact.whatsappPlaceholder}</span></div>
              </a>
              <div className="contact-item-static">
                <Phone size={18} />
                <div><strong>{t.contact.phone}</strong><span>{t.contact.phonePlaceholder}</span></div>
              </div>
              <div className="contact-item-static">
                <MapPin size={18} />
                <div><strong>{t.contact.location}</strong><span>{t.contact.locationPlaceholder}</span></div>
              </div>
            </div>
            <div className="contact-social">
              <span>{t.contact.followUs}</span>
              <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
            </div>
          </div>
          <div className="contact-map">
            <div className="map-placeholder">
              <MapPin size={40} />
              <span>{t.contact.locationPlaceholder}</span>
              <small>Google Maps placeholder</small>
            </div>
          </div>
        </div>
        <div className="contact-cta">
          <button className="btn btn-gold" onClick={open}>
            {t.contact.sendEnquiry}
          </button>
        </div>
      </div>
    </section>
  );
}
