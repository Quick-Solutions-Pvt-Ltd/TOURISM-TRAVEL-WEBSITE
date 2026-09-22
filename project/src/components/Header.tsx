import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { Logo } from './Logo';
import { useLang } from '@/hooks/useLang';
import { useEnquiry } from '@/hooks/useEnquiry';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLang();
  const { open } = useEnquiry();
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    handler();
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/tours', label: t.nav.tours },
    { to: '/why-sri-lanka', label: t.nav.whySriLanka },
    { to: '/gallery', label: t.nav.gallery },
    { to: '/reviews', label: t.nav.reviews },
    { to: '/contact', label: t.nav.contact },
  ];

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
        <div className="header-inner">
          <Link to="/" className="header-logo" aria-label="Ceylon Soul Travels home">
            <Logo size="sm" />
          </Link>
          <nav className="desktop-nav">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={location.pathname === item.to ? 'active' : ''}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="header-right">
            <div className="lang-switcher">
              <Globe size={15} />
              <button
                className={lang === 'en' ? 'lang-active' : ''}
                onClick={() => setLang('en')}
                aria-label="English"
              >EN</button>
              <span className="lang-sep">|</span>
              <button
                className={lang === 'fr' ? 'lang-active' : ''}
                onClick={() => setLang('fr')}
                aria-label="Français"
              >FR</button>
            </div>
            <button className="btn btn-gold header-cta" onClick={open}>
              {t.hero.ctaPrimary}
            </button>
            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}>
        <div className="mobile-menu-inner">
          <div className="mobile-lang">
            <button className={lang === 'en' ? 'lang-active' : ''} onClick={() => setLang('en')}>English</button>
            <span>|</span>
            <button className={lang === 'fr' ? 'lang-active' : ''} onClick={() => setLang('fr')}>Français</button>
          </div>
          <nav className="mobile-nav">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </nav>
          <button className="btn btn-gold mobile-cta" onClick={() => { setMenuOpen(false); open(); }}>
            {t.hero.ctaPrimary}
          </button>
        </div>
      </div>
    </>
  );
}