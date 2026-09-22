import { useLang } from '@/hooks/useLang';
import { useEnquiry } from '@/hooks/useEnquiry';
import { faqItems } from '@/data/content';
import { FaqAccordion } from '@/components/FaqAccordion';

export function FaqSection() {
  const { t } = useLang();

  return (
    <section className="faq-section">
      <div className="container">
        <p className="eyebrow center-eyebrow"><span /> FAQ</p>
        <h2 className="section-title-center">{t.faq.heading}</h2>
        <p className="section-subtitle-center">{t.faq.subtitle}</p>
        <FaqAccordion items={faqItems} />
      </div>
    </section>
  );
}
