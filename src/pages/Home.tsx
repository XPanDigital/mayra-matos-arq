import { Hero } from '@/components/home/Hero';
import { AboutPreview } from '@/components/home/AboutPreview';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { PortfolioPreview } from '@/components/home/PortfolioPreview';
import { Testimonials } from '@/components/home/Testimonials';
import { Process } from '@/components/home/Process';
import { CTA } from '@/components/home/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <PortfolioPreview />
      <Testimonials />
      <Process />
      <CTA />
    </>
  );
}
