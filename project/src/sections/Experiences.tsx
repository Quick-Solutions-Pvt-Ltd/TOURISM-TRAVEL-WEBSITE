import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLang } from '@/hooks/useLang';
import { experiences } from '@/data/content';

export function Experiences() {
  const { lang, t } = useLang();
  const isFr = lang === 'fr';

  return (
    <section className="experiences-section">
      <div className="container">
        <p className="eyebrow center-eyebrow"><span /> {t.experiences.heading}</p>
        <h2 className="section-title-center">{t.experiences.heading}</h2>
        <p className="section-subtitle-center">{t.experiences.subtitle}</p>
        <div className="experiences-grid">
          {experiences.map((exp) => (
            <Link to="/tours" key={exp.id} className="experience-card">
              <div className="experience-image">
                <img src={exp.image} alt={isFr ? exp.titleFr : exp.title} />
                <div className="experience-overlay" />
                <div className="experience-body">
                  <h3>{isFr ? exp.titleFr : exp.title}</h3>
                  <p>{isFr ? exp.descriptionFr : exp.description}</p>
                  <span className="experience-arrow"><ArrowRight size={18} /></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="section-cta-center">
          <Link to="/tours" className="btn btn-outline-purple">
            {t.experiences.cta} <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}