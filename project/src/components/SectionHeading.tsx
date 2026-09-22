import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
  linkTo?: string;
  linkText?: string;
}

export function SectionHeading({ eyebrow, title, subtitle, light, center, linkTo, linkText }: SectionHeadingProps) {
  return (
    <div className={`section-heading ${light ? 'light' : ''} ${center ? 'center' : ''}`}>
      <div>
        {eyebrow && <p className="eyebrow"><span /> {eyebrow}</p>}
        <h2>{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
      {linkTo && linkText && (
        <Link to={linkTo} className="text-link">
          {linkText} <ArrowRight size={16} />
        </Link>
      )}
    </div>
  );
}
