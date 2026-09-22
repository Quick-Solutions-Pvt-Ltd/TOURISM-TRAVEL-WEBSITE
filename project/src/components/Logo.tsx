import logoIcon from '@/assets/logo-icon.png';
import logoFull from '@/assets/logo-full.png';

interface LogoProps {
  /** Icon+text lockup size — used in the header / mobile menu. Ignored when `full` is set. */
  size?: 'sm' | 'md';
  /** Renders the complete brand graphic (island emblem + full wordmark), used in the footer. */
  full?: boolean;
}

export function Logo({ size = 'sm', full = false }: LogoProps) {
  if (full) {
    return (
      <img
        src={logoFull}
        alt="Ceylon Soul Travels — Authentic Journeys, Timeless Memories"
        className="brand-logo-full"
      />
    );
  }

  return (
    <div className={`brand-mark brand-mark-${size}`} aria-label="Ceylon Soul Travels">
      <span className="brand-logo-badge">
        <img src={logoIcon} alt="" className="brand-logo-img" />
      </span>
      <div className="brand-text">
        <span className="brand-name">Ceylon Soul</span>
        <span className="brand-subtitle">Travels</span>
      </div>
    </div>
  );
}