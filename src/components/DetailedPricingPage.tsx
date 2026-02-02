import { Navigation } from './sections/Navigation';
import { DetailedPricingSection } from './sections/DetailedPricingSection';
import { CTASection } from './sections/CTASection';
import { GridPattern } from './visuals/GridPattern';
import { FloatingParticles } from './visuals/FloatingParticles';
import { GlowOrbs } from './visuals/GlowOrbs';
import { CircuitBoard } from './visuals/CircuitBoard';

export function DetailedPricingPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      {/* Visual Effects Layer */}
      <div className="fixed inset-0 pointer-events-none">
        <GridPattern />
        <CircuitBoard />
        <GlowOrbs />
        <FloatingParticles />
      </div>

      <Navigation />
      
      <main className="relative pt-20">
        <DetailedPricingSection />
        <CTASection />
      </main>
    </div>
  );
}
