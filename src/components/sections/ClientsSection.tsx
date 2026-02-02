import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Sparkles } from 'lucide-react';

// Placeholder para logos de clientes - substitua com logos reais
const clients = [
  {
    name: 'Tech Startup',
    logo: 'https://via.placeholder.com/200x80/1f1f1f/ef4444?text=TECH+CO',
  },
  {
    name: 'E-commerce Brand',
    logo: 'https://via.placeholder.com/200x80/1f1f1f/ef4444?text=SHOP+BRAND',
  },
  {
    name: 'SaaS Company',
    logo: 'https://via.placeholder.com/200x80/1f1f1f/ef4444?text=SAAS+INC',
  },
  {
    name: 'Healthcare Provider',
    logo: 'https://via.placeholder.com/200x80/1f1f1f/ef4444?text=HEALTH+PRO',
  },
  {
    name: 'Financial Services',
    logo: 'https://via.placeholder.com/200x80/1f1f1f/ef4444?text=FINTECH',
  },
  {
    name: 'Education Platform',
    logo: 'https://via.placeholder.com/200x80/1f1f1f/ef4444?text=EDU+TECH',
  },
  {
    name: 'Real Estate',
    logo: 'https://via.placeholder.com/200x80/1f1f1f/ef4444?text=REAL+ESTATE',
  },
  {
    name: 'Retail Chain',
    logo: 'https://via.placeholder.com/200x80/1f1f1f/ef4444?text=RETAIL+CO',
  },
];

interface Carousel3DProps {
  items: typeof clients;
  radius?: number;
  duration?: number;
  reverse?: boolean;
}

function Carousel3D({ items, radius = 600, duration = 40, reverse = false }: Carousel3DProps) {
  // Duplicar items para loop contínuo
  const extendedItems = [...items, ...items, ...items];
  const totalItems = extendedItems.length;

  return (
    <div className="relative h-[140px] overflow-hidden">
      {/* Gradient Masks com Blur e Escurecimento */}
      <div className="absolute left-0 top-0 bottom-0 w-48 md:w-64 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-48 md:w-64 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />
      
      {/* Blur overlay escuro */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10 pointer-events-none" 
        style={{ backdropFilter: 'blur(6px)' }}
      />
      <div 
        className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black/60 via-black/30 to-transparent z-10 pointer-events-none" 
        style={{ backdropFilter: 'blur(6px)' }}
      />

      {/* 3D Perspective Container */}
      <div 
        className="relative w-full h-full flex items-center justify-center"
        style={{
          perspective: '1200px',
          perspectiveOrigin: 'center center',
        }}
      >
        <motion.div
          className="relative w-full h-full"
          style={{
            transformStyle: 'preserve-3d',
          }}
          animate={{
            rotateY: reverse ? [0, -360] : [0, 360],
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {extendedItems.map((client, index) => {
            const angle = (360 / totalItems) * index;
            const angleRad = (angle * Math.PI) / 180;
            
            return (
              <div
                key={`${client.name}-${index}`}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  transformStyle: 'preserve-3d',
                }}
              >
                <Card 
                  className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all w-[220px] h-[110px] flex items-center justify-center px-6"
                  style={{
                    transform: 'rotateY(0deg)',
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
                  
                  <img
                    src={client.logo}
                    alt={`Logo ${client.name}`}
                    className="relative z-10 max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100"
                  />
                </Card>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export function ClientsSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Portfólio de Clientes</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl max-w-4xl mx-auto"
          >
            Empresas que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">
              Confiam
            </span>{' '}
            em Nós
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Parceiros estratégicos que transformaram seus negócios com nossas soluções
          </motion.p>
        </div>

        {/* 3D Carousel - Forward Direction */}
        <div className="mb-12">
          <Carousel3D items={clients} radius={600} duration={45} reverse={false} />
        </div>

        {/* 3D Carousel - Reverse Direction */}
        <div className="mb-16">
          <Carousel3D items={clients} radius={550} duration={40} reverse={true} />
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 p-6 text-center">
            <div className="text-4xl text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Clientes Ativos</div>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 p-6 text-center">
            <div className="text-4xl text-primary mb-2">200+</div>
            <div className="text-sm text-muted-foreground">Projetos Entregues</div>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 p-6 text-center">
            <div className="text-4xl text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Taxa de Satisfação</div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
