import { Hero } from '@/sections/Hero';
import { Intro } from '@/sections/Intro';
import { WhyUs } from '@/sections/WhyUs';
import { Perks } from '@/sections/Perks';
import { Experiences } from '@/sections/Experiences';
import { FeaturedTours } from '@/sections/FeaturedTours';
import { WhySriLanka } from '@/sections/WhySriLanka';
import { StorySection } from '@/sections/StorySection';
import { GalleryPreview } from '@/sections/GalleryPreview';
import { Testimonials } from '@/sections/Testimonials';
import { CustomCta } from '@/sections/CustomCta';
import { FaqSection } from '@/sections/FaqSection';
import { ContactSection } from '@/sections/ContactSection';

export function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <WhyUs />
      <Perks />
      <Experiences />
      <FeaturedTours />
      <WhySriLanka />
      <StorySection />
      <GalleryPreview />
      <Testimonials />
      <CustomCta />
      <FaqSection />
      <ContactSection />
    </>
  );
}