import { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';
import { QuickOpeningSlide } from './slides/QuickOpeningSlide';
import { ProblemContextSlide } from './slides/ProblemContextSlide';
import { ConnectionPhilosophySlide } from './slides/ConnectionPhilosophySlide';
import { TransitionToSolutionsSlide } from './slides/TransitionToSolutionsSlide';
import { ContinuousImprovementSlide } from './slides/ContinuousImprovementSlide';
import { ProductsOverviewSlide } from './slides/ProductsOverviewSlide';
import { PortfolioRestructureSlide } from './slides/PortfolioRestructureSlide';
import { PortfolioAdsSlide } from './slides/PortfolioAdsSlide';
import { PortfolioSEOSlide } from './slides/PortfolioSEOSlide';
import { PortfolioSitesSlide } from './slides/PortfolioSitesSlide';
import { PortfolioTrainingSlide } from './slides/PortfolioTrainingSlide';
import { PortfolioAISlide } from './slides/PortfolioAISlide';
import { ProvenResultsNewSlide } from './slides/ProvenResultsNewSlide';
import { ApplicationSlide } from './slides/ApplicationSlide';
import { ProductPricingSelectionSlide } from './slides/ProductPricingSelectionSlide';
import { PresentationLogosMarquee } from './visuals/PresentationLogosMarquee';

const slides = [
  QuickOpeningSlide,           // Slide 1: Abertura impactante
  ProblemContextSlide,         // Slide 2: Desafios do mercado (empatia)
  ConnectionPhilosophySlide,   // Slide 3: Quem somos e nossa filosofia (credibilidade)
  TransitionToSolutionsSlide,  // Slide 4: Como transformamos o cenário (ponte)
  ContinuousImprovementSlide,  // Slide 5: Nossa metodologia única (diferenciação)
  ProductsOverviewSlide,       // Slide 6: Soluções disponíveis (o que oferecemos)
  PortfolioRestructureSlide,   // Slide 7: Portfolio - Reestruturação
  PortfolioAdsSlide,           // Slide 8: Portfolio - Ads & Performance
  PortfolioSEOSlide,           // Slide 9: Portfolio - SEO & DIO
  PortfolioSitesSlide,         // Slide 10: Portfolio - Sites & Landing Pages
  PortfolioTrainingSlide,      // Slide 11: Portfolio - Treinamento Comercial
  PortfolioAISlide,            // Slide 12: Portfolio - Agentes de IA
  ProvenResultsNewSlide,       // Slide 13: Resultados comprovados (prova social)
  ApplicationSlide,            // Slide 14: Como aplicamos no seu caso (personalização)
  ProductPricingSelectionSlide,// Slide 15: Produtos e precificação (proposta)
];

export function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().then(() => setIsFullscreen(true)).catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false));
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div 
      ref={containerRef}
      className={`flex flex-col w-full bg-background transition-all duration-300 ${
        isFullscreen 
          ? 'fixed inset-0 z-50 h-screen rounded-none' 
          : 'relative h-full min-h-[calc(100vh-140px)] rounded-xl border border-white/10 overflow-hidden shadow-2xl'
      }`}
    >
      {/* Top Bar (Only visible on hover or when controls are needed) */}
      <div className="absolute top-4 right-4 z-50 flex gap-2">
        <Button
          variant="secondary"
          size="icon"
          onClick={toggleFullscreen}
          className="bg-black/50 backdrop-blur-md border border-white/10 hover:bg-primary/20"
        >
          {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
        </Button>
      </div>

      {/* Slide Content */}
      <div className="flex-1 relative overflow-hidden bg-background/95 flex flex-col">
        <div className="flex-1 w-full h-full relative overflow-y-auto overflow-x-hidden custom-scrollbar flex flex-col">
           <CurrentSlideComponent />
        </div>
      </div>

      {/* Company Logos Marquee */}
      <div className="relative border-t border-b border-white/10 bg-gradient-to-r from-background via-gray-900/50 to-background backdrop-blur-sm">
        {/* Subtle top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <PresentationLogosMarquee />
      </div>

      {/* Navigation */}
      <div className="border-t border-white/10 bg-gradient-to-r from-background via-gray-900/30 to-background backdrop-blur-sm px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <Button
            variant="outline"
            size={window.innerWidth < 640 ? "icon" : "sm"}
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="glass border-primary/30 shrink-0"
          >
            <ChevronLeft className={`w-4 h-4 ${window.innerWidth >= 640 ? "mr-2" : ""}`} />
            <span className="hidden sm:inline">Anterior</span>
          </Button>

          <div className="flex flex-col items-center gap-2 flex-1 min-w-0">
            <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
              Slide {currentSlide + 1} de {slides.length}
            </span>
            <div className="hidden sm:flex items-center gap-1.5 overflow-x-auto max-w-full px-2 scrollbar-hide">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 sm:h-2 rounded-full transition-all shrink-0 ${
                    index === currentSlide
                      ? 'w-6 sm:w-8 bg-primary'
                      : 'w-1.5 sm:w-2 bg-muted hover:bg-muted-foreground/30'
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
            {/* Mobile Progress Bar */}
            <div className="sm:hidden w-full h-1 bg-muted/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
              />
            </div>
          </div>

          <Button
            variant="outline"
            size={window.innerWidth < 640 ? "icon" : "sm"}
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="glass border-primary/30 shrink-0"
          >
            <span className="hidden sm:inline">Próximo</span>
            <ChevronRight className={`w-4 h-4 ${window.innerWidth >= 640 ? "ml-2" : ""}`} />
          </Button>
        </div>
      </div>
    </div>
  );
}
