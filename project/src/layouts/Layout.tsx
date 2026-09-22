import { type ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { EnquiryModal } from '@/components/EnquiryModal';

export function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="site-shell">
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
      <EnquiryModal />
    </div>
  );
}
