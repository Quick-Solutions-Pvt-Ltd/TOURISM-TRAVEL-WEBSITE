import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '@/hooks/useLang';
import { EnquiryProvider } from '@/hooks/useEnquiry';
import { Layout } from '@/layouts/Layout';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ToursPage } from '@/pages/ToursPage';
import { TourDetailPage } from '@/pages/TourDetailPage';
import { WhySriLankaPage } from '@/pages/WhySriLankaPage';
import { GalleryPage } from '@/pages/GalleryPage';
import { ReviewsPage } from '@/pages/ReviewsPage';
import { ContactPage } from '@/pages/ContactPage';

function App() {
  return (
    <LanguageProvider>
      <EnquiryProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/tours" element={<ToursPage />} />
              <Route path="/tours/:slug" element={<TourDetailPage />} />
              <Route path="/why-sri-lanka" element={<WhySriLankaPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </EnquiryProvider>
    </LanguageProvider>
  );
}

export default App;
