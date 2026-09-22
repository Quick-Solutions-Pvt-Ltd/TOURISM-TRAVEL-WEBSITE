import { PageHero } from '@/components/PageHero';
import { useLang } from '@/hooks/useLang';
import { useEnquiry } from '@/hooks/useEnquiry';
import { IMG } from '@/data/images';

export function WhySriLankaPage() {
  const { t } = useLang();
  const { open } = useEnquiry();
  const items = t.whySriLanka.items;
  const images = [IMG.beachSunset, IMG.waterfall, IMG.sigiriya, IMG.yalaElephant, IMG.villageHouse, IMG.teaWoman, IMG.foodNoodles, IMG.kandyanDancer, IMG.ellaMountains];

  return (
    <>
      <PageHero
        image={IMG.heroEllaWide}
        title={t.whySriLankaPage.heroTitle}
        subtitle={t.whySriLankaPage.heroSubtitle}
      />
      <section className="why-sl-page-section">
        <div className="container">
          <p className="eyebrow center-eyebrow"><span /> {t.whySriLanka.subtitle}</p>
          <h2 className="section-title-center">{t.whySriLanka.heading}</h2>
        </div>
        <div className="why-sl-page-grid">
          {items.map((item, i) => (
            <div key={i} className={`why-sl-page-item ${i % 2 === 0 ? 'normal' : 'reverse'}`}>
              <img src={images[i]} alt={item.title} />
              <div className="why-sl-page-text">
                <span className="why-sl-num">0{i + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="container">
          <div className="section-cta-center">
            <button className="btn btn-gold" onClick={open}>
              {t.whySriLankaPage.cta}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
