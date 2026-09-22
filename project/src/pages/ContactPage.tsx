import { Mail, Phone, MapPin, Instagram, Facebook, Send } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { PageHero } from '@/components/PageHero';
import { FaqAccordion } from '@/components/FaqAccordion';
import { useLang } from '@/hooks/useLang';
import { faqItems } from '@/data/content';
import { whatsappUrl } from '@/utils/whatsapp';
import { useState, type FormEvent } from 'react';
import { IMG } from '@/data/images';
import { LocationMap } from '@/components/LocationMap';

export function ContactPage() {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    // FUTURE BACKEND INTEGRATION:
    // enquiryService.submit(formData) — POST to API endpoint
  };

  return (
    <>
      <PageHero
        image={IMG.galleLighthouse}
        title={t.contactPage.heroTitle}
        subtitle={t.contactPage.heroSubtitle}
      />
      <section className="contact-page-section">
        <div className="container">
          <div className="contact-page-grid">
            <div className="contact-page-info">
              <h2>{t.contact.heading}</h2>
              <p className="contact-page-subtitle">{t.contact.subtitle}</p>
              <div className="contact-page-items">
                <a href="mailto:hello@ceylonsoultravels.com">
                  <Mail size={18} />
                  <div><strong>{t.contact.email}</strong><span>{t.contact.emailPlaceholder}</span></div>
                </a>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon size={18} />
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
            <div className="contact-page-form">
              {submitted ? (
                <div className="form-success">
                  <div className="success-icon"><Send size={24} /></div>
                  <h3>{t.enquiry.successTitle}</h3>
                  <p>{t.enquiry.successMessage}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <label>
                      {t.enquiry.fullName}
                      <input required type="text" placeholder={t.enquiry.namePlaceholder} />
                    </label>
                    <label>
                      {t.enquiry.email}
                      <input required type="email" placeholder={t.enquiry.emailPlaceholder} />
                    </label>
                  </div>
                  <div className="form-row">
                    <label>
                      {t.enquiry.country}
                      <input type="text" placeholder={t.enquiry.countryPlaceholder} />
                    </label>
                    <label>
                      {t.enquiry.dates}
                      <input type="text" placeholder={t.enquiry.datesPlaceholder} />
                    </label>
                  </div>
                  <label>
                    {t.enquiry.travellers}
                    <input type="text" placeholder={t.enquiry.travellersPlaceholder} />
                  </label>
                  <label>
                    {t.enquiry.interestedIn}
                    <select defaultValue="">
                      <option value="" disabled>{t.enquiry.selectPlaceholder}</option>
                      <option value="private">{t.enquiry.options.private}</option>
                      <option value="custom">{t.enquiry.options.custom}</option>
                      <option value="nature">{t.enquiry.options.nature}</option>
                      <option value="culture">{t.enquiry.options.culture}</option>
                      <option value="family">{t.enquiry.options.family}</option>
                    </select>
                  </label>
                  <label>
                    {t.enquiry.message}
                    <textarea rows={4} placeholder={t.enquiry.messagePlaceholder} />
                  </label>
                  <button type="submit" className="btn btn-gold btn-full">
                    {t.enquiry.submit} <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
          <div className="contact-page-map">
            <LocationMap address={t.contact.locationPlaceholder} height={400} />
          </div>
        </div>
      </section>
      <section className="contact-faq-section">
        <div className="container">
          <p className="eyebrow center-eyebrow"><span /> FAQ</p>
          <h2 className="section-title-center">{t.faq.heading}</h2>
          <p className="section-subtitle-center">{t.faq.subtitle}</p>
          <FaqAccordion items={faqItems} />
        </div>
      </section>
    </>
  );
}