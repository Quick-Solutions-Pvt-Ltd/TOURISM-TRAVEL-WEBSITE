import { Compass, Route, Mountain, Headphones } from 'lucide-react';
import { useLang } from '@/hooks/useLang';

const icons = [Compass, Route, Mountain, Headphones];

export function WhyUs() {
  const { t } = useLang();

  return (
    <section className="why-us-section">
      <div className="container">
        <p className="eyebrow center-eyebrow"><span /> Ceylon Soul Travels</p>
        <h2 className="section-title-center">{t.whyUs.heading}</h2>
        <div className="why-us-grid">
          {t.whyUs.features.map((feature, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="why-us-card">
                <span className="why-us-number">0{i + 1}</span>
                <div className="why-us-icon"><Icon size={28} strokeWidth={1.5} /></div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
