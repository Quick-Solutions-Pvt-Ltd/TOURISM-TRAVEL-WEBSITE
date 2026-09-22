import { useState, type FormEvent } from 'react';
import { X, Check, Send } from 'lucide-react';
import { useEnquiry } from '@/hooks/useEnquiry';
import { useLang } from '@/hooks/useLang';

export function EnquiryModal() {
  const { isOpen, close } = useEnquiry();
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    // FUTURE BACKEND INTEGRATION:
    // enquiryService.submit(formData) — POST to API endpoint
  };

  return (
    <div className="modal-backdrop" onClick={close}>
      <div className="enquiry-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={close} aria-label={t.enquiry.close}>
          <X size={20} />
        </button>
        {submitted ? (
          <div className="enquiry-success">
            <div className="success-icon">
              <Check size={28} />
            </div>
            <p className="eyebrow"><span /> {t.enquiry.successTitle}</p>
            <h2>{t.enquiry.successMessage}</h2>
            <button className="btn btn-dark" onClick={close}>{t.enquiry.close}</button>
          </div>
        ) : (
          <>
            <p className="eyebrow"><span /> {t.enquiry.heading}</p>
            <h2 className="modal-title">{t.enquiry.subheading}</h2>
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
                <textarea rows={3} placeholder={t.enquiry.messagePlaceholder} />
              </label>
              <button type="submit" className="btn btn-gold form-submit">
                {t.enquiry.submit} <Send size={16} />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
