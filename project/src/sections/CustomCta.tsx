import { useLang } from '@/hooks/useLang';
import { useEnquiry } from '@/hooks/useEnquiry';
import { IMG } from '@/data/images';

export function CustomCta() {
  const { t } = useLang();
  const { open } = useEnquiry();

  return (
    <section className="custom-cta-section">
      <div className="custom-cta-bg">
        <img src={IMG.beachAhangama} alt="Sri Lankan sunset" className="custom-cta-image" />
        <div className="custom-cta-overlay" />
      </div>
      <div className="custom-cta-content">
        <h2>{t.customCta.heading}</h2>
        <p>{t.customCta.body}</p>
        <button className="btn btn-gold" onClick={open}>
          {t.customCta.cta}
        </button>
      </div>
    </section>
  );
}
