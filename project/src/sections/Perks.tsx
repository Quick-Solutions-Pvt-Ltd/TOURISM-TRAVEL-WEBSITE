import { Sparkles, MessageCircle, Languages, ShieldCheck } from 'lucide-react';
import { useLang } from '@/hooks/useLang';

const icons = [Sparkles, MessageCircle, Languages, ShieldCheck];

export function Perks() {
  const { t } = useLang();

  return (
    <section className="perks-section">
      <div className="container">
        <p className="eyebrow center-eyebrow"><span /> {t.perks.eyebrow}</p>
        <h2 className="section-title-center">{t.perks.heading}</h2>
        <p className="section-subtitle-center">{t.perks.subtitle}</p>
        <div className="perks-grid">
          {t.perks.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="perk-card">
                <div className="perk-icon"><Icon size={26} strokeWidth={1.5} /></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}