import { lazy, Suspense } from 'react';
import { HeroSection } from './sections/HeroSection';
import { ProblemSection } from './sections/ProblemSection';
import { ConnectionSection } from './sections/ConnectionSection';
import { SolutionSection } from './sections/SolutionSection';
import { Navigation } from './sections/Navigation';
import { Footer } from './sections/Footer';
import { GridPattern } from './visuals/GridPattern';
import { LazyLoad, useIsMobile } from './utils/PerformanceOptimizer';
import { ContactFormDialog } from './ContactFormDialog';
import { useContactDialog } from '../utils/useContactDialog';
import { SEO } from './utils/SEO';

// Lazy load de seções pesadas
const ServicesSection = lazy(() => import('./sections/ServicesSection').then(m => ({ default: m.ServicesSection })));
const AboutSection = lazy(() => import('./sections/AboutSection').then(m => ({ default: m.AboutSection })));
const TestimonialsSection = lazy(() => import('./sections/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const BlogSection = lazy(() => import('./sections/BlogSection').then(m => ({ default: m.BlogSection })));
const CTASection = lazy(() => import('./sections/CTASection').then(m => ({ default: m.CTASection })));

export function LandingPage() {
  const isMobile = useIsMobile();
  const { isOpen, closeDialog } = useContactDialog();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <SEO 
        title="Venturi Solutions | Consultoria em Growth & Tecnologia"
        description="Escale sua operação com estratégias validadas de Growth, SEO e Tecnologia. Soluções personalizadas para empresas que buscam liderança de mercado."
        canonical="/"
      />
      {/* Efeitos visuais otimizados - reduzidos em mobile */}
      {!isMobile && (
        <div className="fixed inset-0 pointer-events-none">
          <GridPattern />
        </div>
      )}

      <Navigation />
      
      <main className="relative">
        <HeroSection />
        <ProblemSection />
        <ConnectionSection />
        <SolutionSection />
        
        {/* Lazy load de seções pesadas */}
        <Suspense fallback={<div className="h-screen" />}>
          <LazyLoad height="600px">
            <ServicesSection />
          </LazyLoad>
        </Suspense>

        <Suspense fallback={<div className="h-screen" />}>
          <LazyLoad height="600px">
            <AboutSection />
          </LazyLoad>
        </Suspense>

        {/* Testimonials Section - Temporarily Hidden
        <Suspense fallback={<div className="h-screen" />}>
          <LazyLoad height="500px">
            <TestimonialsSection />
          </LazyLoad>
        </Suspense>
        */}

        {/* Blog Section - Temporarily Hidden
        <Suspense fallback={<div className="h-screen" />}>
          <LazyLoad height="600px">
            <BlogSection />
          </LazyLoad>
        </Suspense>
        */}

        <Suspense fallback={<div className="h-screen" />}>
          <LazyLoad height="500px">
            <CTASection />
          </LazyLoad>
        </Suspense>
      </main>

      <Footer />
      
      {/* Global Contact Form Dialog */}
      <ContactFormDialog open={isOpen} onOpenChange={closeDialog} />
    </div>
  );
}