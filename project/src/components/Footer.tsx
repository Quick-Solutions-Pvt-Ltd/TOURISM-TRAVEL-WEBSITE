import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, MapPin } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Logo } from './Logo';
import { useLang } from '@/hooks/useLang';
import { whatsappUrl } from '@/utils/whatsapp';

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Logo full />
          <p className="footer-tagline">{t.footer.tagline}</p>
        </div>
        <div className="footer-col">
          <span className="footer-heading">{t.footer.explore}</span>
          <Link to="/">{t.nav.home}</Link>
          <Link to="/about">{t.nav.about}</Link>
          <Link to="/tours">{t.nav.tours}</Link>
          <Link to="/why-sri-lanka">{t.nav.whySriLanka}</Link>
          <Link to="/gallery">{t.nav.gallery}</Link>
          <Link to="/reviews">{t.nav.reviews}</Link>
          <Link to="/contact">{t.nav.contact}</Link>
        </div>
        <div className="footer-col">
          <span className="footer-heading">{t.footer.experiences}</span>
          <Link to="/tours">{t.gallery.categories.mountains}</Link>
          <Link to="/tours">{t.gallery.categories.heritage}</Link>
          <Link to="/tours">{t.gallery.categories.wildlife}</Link>
          <Link to="/tours">{t.gallery.categories.beaches}</Link>
          <Link to="/tours">{t.gallery.categories.food}</Link>
        </div>
        <div className="footer-col">
          <span className="footer-heading">{t.footer.contact}</span>
          <a href="mailto:hello@ceylonsoultravels.com"><Mail size={14} /> {t.contact.emailPlaceholder}</a>
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={14} /> {t.contact.whatsappPlaceholder}</a>
          <span className="footer-location"><MapPin size={14} /> {t.contact.locationPlaceholder}</span>
          <div className="footer-social">
            <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {year} Ceylon Soul Travels. {t.footer.rights}</span>
        <div className="footer-legal">
          <a href="#">{t.footer.privacy}</a>
          <a href="#">{t.footer.terms}</a>
        </div>
      </div>
    </footer>
  );
}