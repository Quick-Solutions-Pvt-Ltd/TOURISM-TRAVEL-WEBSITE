import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLang } from '@/hooks/useLang';
import { IMG } from '@/data/images';

export function Intro() {
  const { t } = useLang();

  return (
    <section className="intro-section">
      <div className="container">
        <div className="intro-grid">
          <div className="intro-image">
            <img src={IMG.teaWoman} alt="Tea plantation worker in Sri Lanka" />
          </div>
          <div className="intro-content">
            <p className="eyebrow"><span /> Ceylon Soul Travels</p>
            <h2>{t.intro.heading}</h2>
            <p className="intro-body">{t.intro.body1}</p>
            <p className="intro-body">{t.intro.body2}</p>
            <Link to="/about" className="text-link">
              {t.intro.cta} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}