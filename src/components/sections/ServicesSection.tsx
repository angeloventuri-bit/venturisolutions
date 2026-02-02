import image_589aaa1a3b84dd1bd71b509d8414607ca7da3574 from 'figma:asset/589aaa1a3b84dd1bd71b509d8414607ca7da3574.png';
import { Card } from '../ui/card';
import { useNavigate } from 'react-router-dom';
import { Compass, Megaphone, Search, Globe, Bot, GraduationCap, Rocket } from 'lucide-react';
import { motion } from 'motion/react';
import { Icon3DCompass } from '../icons/Icon3DCompass';
import { Icon3DMegaphone } from '../icons/Icon3DMegaphone';
import { Icon3DSearch } from '../icons/Icon3DSearch';
import { Icon3DGlobe } from '../icons/Icon3DGlobe';
import { Icon3DRobot } from '../icons/Icon3DRobot';
import { Icon3DGraduation } from '../icons/Icon3DGraduation';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const services = [
  {
    icon: Compass,
    Icon3D: Icon3DCompass,
    title: 'Reestruturação Estratégica',
    subtitle: 'Transforme seu negócio em uma máquina de comunicação',
    description: 'Programa intensivo (8 a 12 semanas) que traz diagnóstico estruturado e detalhado. Mapeamos gargalos, redefinimos seu ICP e entregamos plano de ação estratégico claro.',
    descriptionMobile: 'Diagnóstico estruturado e plano estratégico claro.',
    features: ['Diagnóstico SWOT', 'Personas e Jornada', 'Plano de Ação (Funil)', 'Handover Completo'],
    color: 'from-blue-500/20 to-blue-600/20',
    image: 'https://images.unsplash.com/photo-1554132575-4181f1e1288e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHJlc3RydWN0dXJlJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzYxODU1OTgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'reestruturacao-estrategica'
  },
  {
    icon: Megaphone,
    Icon3D: Icon3DMegaphone,
    title: 'Ads & Performance',
    subtitle: 'Performance com estratégia. Tráfego que converte em receita',
    description: 'Gestão completa de campanhas em Google e Meta com foco em ROI, CAC e LTV. Traqueamento avançado para mapear cada lead, orgânico ou pago.',
    descriptionMobile: 'Campanhas Google e Meta com foco em ROI.',
    features: ['Google Ads', 'Meta Ads', 'Traqueamento Avançado', 'Otimização de ROI'],
    color: 'from-purple-500/20 to-purple-600/20',
    image: 'https://images.unsplash.com/photo-1680986070892-1b64bfe03338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYWRzfGVufDF8fHx8MTc2MTg1NTk3OXww&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'ads-performance'
  },
  {
    icon: Globe,
    Icon3D: Icon3DGlobe,
    title: 'Sites Institucionais & Landing Pages',
    subtitle: 'Design que comunica. Estrutura que vende',
    description: 'Sites e landing pages desenvolvidos com nossa metodologia, transformando-os em máquinas de conversão. UX otimizada com copywriting persuasivo.',
    descriptionMobile: 'Sites que convertem com UX otimizada.',
    features: ['UX/UI Otimizado', 'Copywriting Persuasivo', 'Integração CRM', 'Análise Contínua'],
    color: 'from-red-500/20 to-red-600/20',
    image: image_589aaa1a3b84dd1bd71b509d8414607ca7da3574,
    slug: 'sites-landing-pages'
  },
  {
    icon: Search,
    Icon3D: Icon3DSearch,
    title: 'SEO & GEO',
    subtitle: 'Tráfego Orgânico & Autoridade Omnichannel com IA',
    description: 'Conquiste autoridade máxima na internet. Unimos SEO técnico para dominar buscas orgânicas com GEO (Generative Engine Optimization) para garantir que sua marca seja a recomendação #1 nas respostas de Inteligência Artificial.',
    descriptionMobile: 'SEO Orgânico e Recomendação por IA (GEO).',
    features: ['Tráfego Orgânico', 'Autoridade Omnichannel', 'Recomendação por IA', 'GEO Strategy'],
    color: 'from-green-500/20 to-green-600/20',
    image: 'https://images.unsplash.com/photo-1668903678359-e810dd966016?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW8lMjBzZWFyY2glMjBvcHRpbWl6YXRpb258ZW58MXx8fHwxNzYxNzQwNzAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'seo-geo-360'
  },
  {
    icon: GraduationCap,
    Icon3D: Icon3DGraduation,
    title: 'Treinamentos & Educação Continuada',
    subtitle: 'Transforme seu time em especialistas em performance',
    description: 'Programas de capacitação personalizados para equipes de marketing, vendas e liderança. Equipe qualificada reduz retrabalhos e multiplica resultados de forma autônoma.',
    descriptionMobile: 'Capacitação marketing, vendas e liderança.',
    features: ['Capacitação Marketing', 'Treinamento Vendas', 'Coaching Liderança', 'Performance Aplicada'],
    color: 'from-orange-500/20 to-orange-600/20',
    image: 'https://images.unsplash.com/photo-1761258772183-6a905c8b95fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFpbmluZyUyMHRlYW0lMjBjb2FjaGluZ3xlbnwxfHx8fDE3NjE4NTU5ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'treinamento-comercial'
  },
  {
    icon: Bot,
    Icon3D: Icon3DRobot,
    title: 'Desenvolvimento de Agentes Inteligentes',
    subtitle: 'A nova fronteira da performance: IA aplicada ao crescimento',
    description: 'Agentes virtuais de IA personalizados capazes de qualificar leads, agendar reuniões e responder clientes 24h. Integração completa com seus canais e CRM.',
    descriptionMobile: 'Agentes IA que qualificam e atendem 24/7.',
    features: ['Qualificação Automática', 'Agendamento 24/7', 'Integração CRM', 'Atendimento IA'],
    color: 'from-violet-500/20 to-violet-600/20',
    image: 'https://images.unsplash.com/photo-1625314887424-9f190599bd56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwcm9ib3R8ZW58MXx8fHwxNzYxNzYxNTY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'agentes-ia'
  },
];

export function ServicesSection() {
  const navigate = useNavigate();

  return (
    <section id="services" className="relative py-16 md:py-24 px-6 overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-3 md:space-y-4 mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl max-w-4xl mx-auto px-4"
          >
            Nossos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">
              Entregáveis
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm md:text-xl text-muted-foreground max-w-3xl mx-auto px-4"
          >
            <span className="hidden md:inline">Soluções integradas que trabalham em conjunto para gerar crescimento sustentável</span>
            <span className="md:hidden">Soluções integradas para crescimento real</span>
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => navigate(`/solucoes/${service.slug}`)}
                className="hover-lift cursor-pointer"
              >
                <div className="relative group">
                  {/* Premium Glow */}
                  <div className={`absolute -inset-1 bg-gradient-to-br ${service.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500`} />
                  
                  <Card className="relative overflow-hidden glass-premium border-primary/20 hover:border-primary/40 h-full">
                    {/* 3D Icon Header - Animated */}
                    <div className="relative h-36 md:h-48 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-30`} />
                      <div className="absolute inset-0 flex items-center justify-center p-6 md:p-8">
                        <service.Icon3D />
                      </div>
                    </div>

                  {/* Content - OTIMIZADO MOBILE */}
                  <div className="p-4 md:p-6 space-y-2 md:space-y-4">
                    <div>
                      <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider mb-1 flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary/50 rounded-full group-hover:animate-pulse" />
                        <span className="hidden md:inline">{service.subtitle}</span>
                        <span className="md:hidden line-clamp-1">{service.subtitle.split('.')[0]}</span>
                      </div>
                      <h3 className="text-sm md:text-xl group-hover:text-primary transition-colors">{service.title}</h3>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed text-xs md:text-sm">
                      <span className="hidden md:inline">{service.description}</span>
                      <span className="md:hidden">{service.descriptionMobile}</span>
                    </p>
                    
                    <ul className="space-y-1 md:space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-[10px] md:text-sm text-muted-foreground">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-primary rounded-full group-hover:ring-2 group-hover:ring-primary/30 transition-all flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                    {/* Premium Corner accents */}
                    <div className="absolute top-0 left-0 w-6 h-6 md:w-10 md:h-10 border-t-2 border-l-2 border-primary/30 group-hover:border-primary/70 transition-colors rounded-tl-2xl" />
                    <div className="absolute bottom-0 right-0 w-6 h-6 md:w-10 md:h-10 border-b-2 border-r-2 border-primary/30 group-hover:border-primary/70 transition-colors rounded-br-2xl" />
                    
                    {/* Floating Glow */}
                    <div className="absolute top-4 right-4 w-12 h-12 md:w-16 md:h-16 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Card>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
