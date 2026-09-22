import { useLang } from '@/hooks/useLang';
import { useEnquiry } from '@/hooks/useEnquiry';
import { IMG } from '@/data/images';

export function StorySection() {
  const { t } = useLang();
  const { open } = useEnquiry();

  return (
    <section className="story-section">
      <div className="story-bg">
        <img src={IMG.ellaAerial} alt="Aerial view of Ella mountains" className="story-image" />
        <div className="story-overlay" />
      </div>
      <div className="story-content">
        <p className="eyebrow light"><span /> {t.story.heading}</p>
        <p className="story-text">{t.story.body}</p>
        <button className="btn btn-gold" onClick={open}>
          {t.story.cta}
        </button>
      </div>
    </section>
  );
}
