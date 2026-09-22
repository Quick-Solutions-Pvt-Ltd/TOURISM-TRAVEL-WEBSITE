import { type ReactNode } from 'react';

interface PageHeroProps {
  image: string;
  title: ReactNode;
  subtitle?: string;
}

export function PageHero({ image, title, subtitle }: PageHeroProps) {
  return (
    <section className="page-hero">
      <img src={image} alt="" className="page-hero-image" />
      <div className="page-hero-overlay" />
      <div className="page-hero-content">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
