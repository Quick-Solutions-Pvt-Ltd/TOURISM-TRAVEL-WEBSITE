import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { useLang } from '@/hooks/useLang';
import { useEnquiry } from '@/hooks/useEnquiry';
import { IMG } from '@/data/images';

export function AboutPage() {
  const { t } = useLang();
  const { open } = useEnquiry();

  return (
    <>
      <PageHero
        image={IMG.mandaramnuwara}
        title={t.about.heroTitle}
        subtitle={t.about.heroSubtitle}
      />
      <section className="about-story-section">
        <div className="container">
          <div className="about-story-grid">
            <div className="about-story-image">
              <img src={IMG.villageRoad} alt="Rural Sri Lanka" />
            </div>
            <div className="about-story-content">
              <p className="eyebrow"><span /> {t.about.storyHeading}</p>
              <h2>{t.about.storyHeading}</h2>
              <p className="about-body">{t.about.storyBody1}</p>
              <p className="about-body">{t.about.storyBody2}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-philosophy-section">
        <div className="container">
          <div className="about-philosophy-grid">
            <div className="about-philosophy-content">
              <p className="eyebrow"><span /> {t.about.philosophyHeading}</p>
              <h2>{t.about.philosophyHeading}</h2>
              <p className="about-body">{t.about.philosophyBody}</p>
            </div>
            <div className="about-philosophy-image">
              <img src={IMG.teaFields} alt="Tea fields of Sri Lanka" />
            </div>
          </div>
        </div>
      </section>
      <section className="about-why-section">
        <div className="container">
          <p className="eyebrow center-eyebrow"><span /> {t.about.whyHeading}</p>
          <h2 className="section-title-center">{t.about.whyHeading}</h2>
          <p className="about-body-center">{t.about.whyBody}</p>
          <div className="about-why-images">
            <div><img src={IMG.kandyanDancer} alt="Kandyan culture" /></div>
            <div><img src={IMG.elephantSavanna} alt="Sri Lankan wildlife" /></div>
            <div><img src={IMG.beachUnawatuna} alt="Sri Lankan coast" /></div>
          </div>
          <div className="section-cta-center">
            <button className="btn btn-gold" onClick={open}>
              {t.about.cta} <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
