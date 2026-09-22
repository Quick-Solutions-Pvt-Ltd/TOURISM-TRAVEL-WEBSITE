import { useLang } from '@/hooks/useLang';
import { IMG } from '@/data/images';

export function WhySriLanka() {
  const { t } = useLang();
  const items = t.whySriLanka.items;

  const layout = [
    { image: IMG.beachSunset, span: 'large', textIdx: 1 },
    { image: IMG.waterfall, span: 'small', textIdx: 3 },
    { image: IMG.sigiriya, span: 'small', textIdx: 5 },
    { image: IMG.yalaElephant, span: 'large', textIdx: 7 },
  ];

  return (
    <section className="why-sri-lanka-section">
      <div className="container">
        <p className="eyebrow center-eyebrow"><span /> {t.whySriLanka.subtitle}</p>
        <h2 className="section-title-center">{t.whySriLanka.heading}</h2>
      </div>
      <div className="why-sl-editorial">
        {layout.map((block, i) => (
          <div key={i} className={`why-sl-block why-sl-${block.span}`}>
            <img src={block.image} alt={items[block.textIdx]?.title || ''} />
            <div className="why-sl-text">
              <span className="why-sl-num">0{block.textIdx + 1}</span>
              <h3>{items[block.textIdx]?.title}</h3>
              <p>{items[block.textIdx]?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
