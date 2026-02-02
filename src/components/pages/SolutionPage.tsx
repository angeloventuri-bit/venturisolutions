import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Check, 
  ArrowRight, 
  Package,
  CheckCircle2,
  HelpCircle,
  TrendingUp,
  Target,
  BarChart3,
  Cpu,
  Award,
  Zap,
  Layers,
  Smartphone,
  Globe,
  Search
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { Navigation } from '../sections/Navigation';
import { Footer } from '../sections/Footer';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { getSolutionBySlug } from '../../content/solutions';
import { useContactDialog } from '../../utils/useContactDialog';
import { ContactFormDialog } from '../ContactFormDialog';
import { GEOExplainerSection } from '../sections/GEOExplainerSection';
import { SEO } from '../../components/utils/SEO';
import heroBgStatic from 'figma:asset/8c9b720e4b1aa071dea51fc32ab5f98854aae7f8.png';
import restructuringBg1 from 'figma:asset/029691a74298c71bf20c9ef9377848592fafc33c.png';
import restructuringBg2 from 'figma:asset/3ffe5181766ba1250450e7bb46e347d46ed6fcbc.png';
import adsPerformanceBg from 'figma:asset/a00d0de72d40b3c767e1923a53a27ebc9afccbb9.png';
import sitesBg from 'figma:asset/fa001e1b8bb39617c1bb27527c0c978c655b4208.png';
import seoBg from 'figma:asset/1178b9f6c151a7f9a885427a68256bc0c6eb39fb.png';
import seoBg1 from 'figma:asset/e14caa5dda96f9f00d41ad898a2bbd205b34b9b2.png';
import seoBg2 from 'figma:asset/e4c7ad8fcfc0bfc56a139d819a3540975ffa299c.png';
import portfolioGridBg from 'figma:asset/20b206a97d985413440cf772a69ced36134b7dee.png';

export function SolutionPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const solution = slug ? getSolutionBySlug(slug) : undefined;
  const { openDialog, isOpen, closeDialog } = useContactDialog();
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (slug === 'reestruturacao-estrategica' || slug === 'seo-geo-360') {
      const interval = setInterval(() => {
        setBgIndex((prev) => (prev + 1) % 2);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [slug]);

  if (!solution) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Solução não encontrada</h1>
          <Button onClick={() => navigate('/')}>Voltar para Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={`${solution.title} | Venturi Solutions`}
        description={solution.description}
        canonical={`/solucoes/${slug}`}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-background z-0">
           {/* Background Image Logic */}
           {slug === 'reestruturacao-estrategica' ? (
             <>
               <div className={`absolute inset-0 transition-opacity duration-[3000ms] ease-in-out ${bgIndex === 0 ? 'opacity-80' : 'opacity-0'}`}>
                 <ImageWithFallback 
                   src={restructuringBg1}
                   alt="Background 1"
                   className="w-full h-full object-cover object-center"
                 />
               </div>
               <div className={`absolute inset-0 transition-opacity duration-[3000ms] ease-in-out ${bgIndex === 1 ? 'opacity-80' : 'opacity-0'}`}>
                 <ImageWithFallback 
                   src={restructuringBg2}
                   alt="Background 2"
                   className="w-full h-full object-cover object-center"
                 />
               </div>
             </>
           ) : slug === 'ads-performance' ? (
             <ImageWithFallback 
               src={adsPerformanceBg}
               alt="Ads Performance Background"
               className="w-full h-full object-cover object-center opacity-80"
             />
           ) : slug === 'sites-landing-pages' ? (
             <ImageWithFallback 
               src={sitesBg}
               alt="Sites Background"
               className="w-full h-full object-cover object-center opacity-80"
             />
           ) : slug === 'seo-geo-360' ? (
             <>
               <div className={`absolute inset-0 transition-opacity duration-[3000ms] ease-in-out ${bgIndex === 0 ? 'opacity-80' : 'opacity-0'}`}>
                 <ImageWithFallback 
                   src={seoBg1}
                   alt="Background 1"
                   className="w-full h-full object-cover object-center"
                 />
               </div>
               <div className={`absolute inset-0 transition-opacity duration-[3000ms] ease-in-out ${bgIndex === 1 ? 'opacity-80' : 'opacity-0'}`}>
                 <ImageWithFallback 
                   src={seoBg2}
                   alt="Background 2"
                   className="w-full h-full object-cover object-center"
                 />
               </div>
             </>
           ) : (
             <ImageWithFallback 
               src={heroBgStatic}
               alt="Background"
               className="w-full h-full object-cover object-center opacity-80"
             />
           )}
           
           {/* Overlay for readability - Lighter gradient to show image on right */}
           <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent" />
           <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/#services')}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <div className="p-1 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium">Voltar para Soluções</span>
          </motion.button>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 inline-block"
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium shadow-[0_0_15px_rgba(var(--primary),0.3)]">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  {solution.title}
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-8 leading-[1.1]"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
                  {solution.subtitle}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl border-l-2 border-primary/30 pl-6"
              >
                {solution.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Button 
                  size="lg"
                  onClick={() => navigate('/#cta')}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(var(--primary),0.4)] h-12 px-8 text-base"
                >
                  Agendar Diagnóstico
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            </div>

            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative perspective-1000"
            >
              
              
              {/* Bottom Glow */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-20 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* GEO Explainer - Only for SEO/GEO solution */}
      {slug === 'seo-geo-360' && <GEOExplainerSection />}

      {/* Benefits */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que escolher nossa abordagem?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Focamos em resultados tangíveis e construção de ativos digitais de longo prazo.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solution.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full p-8 bg-background/40 backdrop-blur border-white/5 hover:border-primary/30 transition-all duration-300 hover:bg-white/5 hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="flex flex-col h-full relative z-10">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    
                    <p className="text-lg text-foreground/90 leading-relaxed font-medium">
                      {benefit}
                    </p>
                    
                    <div className="mt-auto pt-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                      <div className="h-1 w-12 bg-primary/50 rounded-full" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Methodology */}
      {solution.methodology && (
        <section className="py-24 px-6 relative overflow-hidden">
           <div className="absolute inset-0">
             <ImageWithFallback 
               src="https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG5ldHdvcmslMjBjb25uZWN0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjM3MzgyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080" 
               alt="Methodology Background" 
               className="w-full h-full object-cover opacity-10"
             />
             <div className="absolute inset-0 bg-background/90" />
           </div>

           <div className="max-w-7xl mx-auto relative z-10">
             <div className="text-center mb-16">
               <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Metodologia Exclusiva</Badge>
               <h2 className="text-3xl md:text-5xl font-bold mb-6">{solution.methodology.title}</h2>
               <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                 {solution.methodology.subtitle}
               </p>
             </div>

             <div className="grid md:grid-cols-3 gap-8">
               {solution.methodology.items.map((item, index) => {
                 // Dynamic Icon Component
                 const IconComponent = (LucideIcons as any)[item.icon] || Package;
                 
                 return (
                   <motion.div
                     key={index}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: index * 0.1 }}
                   >
                     <Card className="p-8 h-full bg-card/50 backdrop-blur border-white/5 hover:border-primary/30 transition-all hover:-translate-y-1 group">
                       <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                         <IconComponent className="w-7 h-7 text-primary" />
                       </div>
                       <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                       <p className="text-muted-foreground leading-relaxed">
                         {item.description}
                       </p>
                     </Card>
                   </motion.div>
                 );
               })}
             </div>
           </div>
        </section>
      )}

      <section className="py-24 px-6 bg-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
               <Badge variant="outline" className="mb-4 border-primary/30 text-primary">Recursos Principais</Badge>
               <h2 className="text-3xl md:text-4xl font-bold mb-8">
                 Tudo o que você precisa para <span className="text-primary">escalar</span>
               </h2>
               
               <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                 {solution.features.map((feature, index) => (
                   <motion.div 
                     key={index}
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: index * 0.05 }}
                     className="flex items-start gap-3"
                   >
                     <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                     <span className="text-muted-foreground">{feature}</span>
                   </motion.div>
                 ))}
               </div>
            </div>
            
            <motion.div 
              className="order-1 lg:order-2 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1762340275877-32d64414d8aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhdGVnaWMlMjBkaWdpdGFsJTIwcGxhbm5pbmclMjB0ZWNobm9sb2d5JTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2Mzc2NDE2NXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Strategic Features"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                
                {/* Floating Tech Element */}
                <div className="absolute bottom-8 right-8 p-6 bg-background/90 backdrop-blur rounded-xl border border-white/10 max-w-xs">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Layers className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold">Stack Completa</div>
                      <div className="text-xs text-muted-foreground">Tecnologia & Estratégia</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[85%]" />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Performance</span>
                      <span>98%</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Portfolio Section - Browser Mockups */}
      {solution.portfolio && (
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
                Portfolio
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos Recentes</h2>
              <p className="text-muted-foreground">
                Sites e experiências digitais desenvolvidas com nossa tecnologia.
              </p>
            </div>

            {slug === 'sites-landing-pages' ? (
              <div className="relative w-full max-w-6xl mx-auto">
                <div className="relative rounded-2xl overflow-hidden">
                  <ImageWithFallback 
                    src={portfolioGridBg} 
                    alt="Portfolio Venturi Solutions" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-10">
                {solution.portfolio.map((url, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-background/50 group">
                      {/* Browser Header */}
                      <div className="bg-muted/50 px-4 py-3 border-b border-white/5 flex items-center gap-4">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                        </div>
                        <div className="flex-1 bg-background/50 h-6 rounded text-[10px] text-muted-foreground flex items-center px-3 font-mono truncate">
                          {url}
                        </div>
                      </div>
                      
                      {/* Iframe Container - Scaled to look like Hero */}
                      <div className="relative h-[400px] bg-white w-full overflow-hidden group-hover:shadow-[0_0_30px_rgba(var(--primary),0.15)] transition-all duration-500">
                        {/* Overlay to prevent interaction */}
                        <div className="absolute inset-0 z-10 bg-transparent" />
                        
                        <iframe 
                          src={url}
                          title={`Preview of ${url}`}
                          className="w-[200%] h-[200%] origin-top-left transform scale-50 border-none"
                          loading="lazy"
                          scrolling="no"
                          sandbox="allow-scripts allow-same-origin"
                        />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/50 z-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                          <a 
                            href={url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                          >
                            Visitar Site
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Process */}
      <section className="py-24 px-6 relative overflow-hidden bg-background/50">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }} 
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 transition-colors border-primary/20">
              Processo & Metodologia
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Fluxo de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Execução</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Uma jornada estruturada de transformação digital, desenhada para maximizar resultados e minimizar riscos.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line - Desktop (Center) */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent -translate-x-1/2 hidden md:block" />
            
            {/* Connecting Line - Mobile (Left) */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent block md:hidden" />

            <div className="space-y-12 md:space-y-0">
              {solution.process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center md:justify-between gap-8 md:gap-0 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Side */}
                  <div className="w-full md:w-[45%] pl-20 md:pl-0">
                     <div className={`relative group ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        {/* Decorative Number for Mobile - positioned absolute near the line */}
                        <div className="absolute left-[-3.25rem] top-0 md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-background border border-primary/30 z-20 shadow-[0_0_15px_rgba(var(--primary),0.3)]">
                          <span className="font-mono text-primary font-bold">{step.step}</span>
                        </div>

                        <Card className="p-6 bg-card/30 backdrop-blur border-white/5 hover:border-primary/40 transition-all duration-300 group-hover:translate-y-[-5px]">
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          
                          <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-3 md:block">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed text-sm">
                            {step.description}
                          </p>
                        </Card>
                     </div>
                  </div>

                  {/* Center Node (Desktop Only) */}
                  <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center w-12 h-12">
                    <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_rgba(var(--primary),0.8)] z-20 ring-4 ring-background relative">
                       <div className="absolute -inset-2 bg-primary/20 rounded-full animate-ping opacity-20" />
                    </div>
                    <div className="absolute font-mono text-[10px] text-muted-foreground top-8 opacity-50">
                      0{step.step}
                    </div>
                  </div>

                  {/* Empty Side for Balance */}
                  <div className="w-full md:w-[45%]" />
                </motion.div>
              ))}
            </div>
            
            {/* Final Node */}
            <div className="absolute left-8 md:left-1/2 bottom-0 w-3 h-3 bg-primary/50 rounded-full -translate-x-1/2 blur-[1px]" />
          </div>
        </div>
      </section>



      {/* Case Study */}
      {/* Removed per user request */}
      
      {/* FAQ */}
      <section className="py-16 px-6 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4 text-center">Perguntas Frequentes</h2>
          <p className="text-xl text-muted-foreground mb-12 text-center">
            Tire suas dúvidas sobre {solution.title}
          </p>
          
          <Accordion type="single" collapsible className="space-y-4">
            {solution.faq.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card/50 border border-primary/10 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:text-primary">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-br from-primary/10 to-red-600/5 border-primary/20 p-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Pronto para Transformar seus Resultados?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Agende uma conversa gratuita com nossos especialistas e descubra o potencial de crescimento do seu negócio.
            </p>
            <Button
              size="lg"
              onClick={openDialog}
              className="bg-gradient-to-r from-primary to-red-600 hover:from-red-600 hover:to-primary"
            >
              Agendar Conversa Gratuita
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
      
      {/* Global Contact Form Dialog */}
      <ContactFormDialog open={isOpen} onOpenChange={closeDialog} />
    </div>
  );
}
