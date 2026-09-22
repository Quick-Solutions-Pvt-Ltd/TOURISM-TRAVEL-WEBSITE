import { Link } from 'react-router-dom';
import { ArrowRight, Star, ChevronDown } from 'lucide-react';
import { useLang } from '@/hooks/useLang';
import { useEnquiry } from '@/hooks/useEnquiry';
import { IMG } from '@/data/images';

export function Hero() {
  const { t } = useLang();
  const { open } = useEnquiry();

  return (
    <section className="hero">
      <div className="hero-bg">
        <img src={IMG.heroElla} alt="Misty mountains of Ella, Sri Lanka" className="hero-image" />
        <div className="hero-overlay" />
      </div>
      <div className="hero-content">
        <p className="eyebrow light hero-eyebrow"><span /> {t.hero.eyebrow}</p>
        <h1 className="hero-title">{t.hero.title}</h1>
        <p className="hero-subtitle">{t.hero.subtitle}</p>
        <div className="hero-actions">
          <button className="btn btn-gold" onClick={open}>
            {t.hero.ctaPrimary} <ArrowRight size={17} />
          </button>
          <Link to="/tours" className="btn btn-purple">
            {t.hero.ctaSecondary} <ArrowRight size={17} />
          </Link>
        </div>
        <div className="hero-trust">
          <div className="hero-trust-avatars">
            <img src={IMG.guest1} alt="" />
            <img src={IMG.guest2} alt="" />
            <img src={IMG.guest3} alt="" />
            <img src={IMG.guest4} alt="" />
          </div>
          <div className="hero-trust-badge">
            <span className="hero-trust-stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} fill="currentColor" />
              ))}
            </span>
            <span className="hero-trust-text">{t.hero.trustText}</span>
          </div>
        </div>
      </div>
      <div className="hero-indicators">
        <span>{t.hero.indicator1}</span>
        <span className="dot-sep">·</span>
        <span>{t.hero.indicator2}</span>
        <span className="dot-sep">·</span>
        <span>{t.hero.indicator3}</span>
      </div>
      <div className="hero-scroll">
        <span>{t.hero.scroll}</span>
        <ChevronDown size={18} className="scroll-bounce" />
      </div>
    </section>
  );
}