import { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { 
  Compass, 
  Megaphone, 
  Search, 
  Globe, 
  Bot, 
  GraduationCap,
  Check,
  Sparkles,
  TrendingUp,
  Clock,
  Target,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { CornerBrackets } from '../visuals/CornerBrackets';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Icon3DCompass } from '../icons/Icon3DCompass';
import { Icon3DMegaphone } from '../icons/Icon3DMegaphone';
import { Icon3DSearch } from '../icons/Icon3DSearch';
import { Icon3DGlobe } from '../icons/Icon3DGlobe';
import { Icon3DRobot } from '../icons/Icon3DRobot';
import { Icon3DGraduation } from '../icons/Icon3DGraduation';
import { useContactDialog } from '../../utils/useContactDialog';

interface Tier {
  name: string;
  price: string;
  budget: string;
  deliverables: string[];
  recommended?: boolean;
}

interface Service {
  id: string;
  icon: any;
  Icon3D: any;
  badge: string;
  title: string;
  subtitle: string;
  duration: string;
  tiers?: Tier[];
  singlePrice?: {
    price: string;
    promotional: string;
    promotionalLabel: string;
  };
  deliverables: {
    icon: any;
    title: string;
    description: string;
  }[];
  results: string[];
  color: string;
  accentColor: string;
  bgColor: string;
}

const services: Service[] = [
  {
    id: 'restructure',
    icon: Compass,
    Icon3D: Icon3DCompass,
    badge: 'A FUNDAÇÃO',
    title: 'Reestruturação Estratégica',
    subtitle: 'Diagnóstico 360º + plano estratégico de 12 meses que alinha marketing, vendas e propósito do negócio.',
    duration: '4-6 semanas',
    singlePrice: {
      price: 'R$ 8.500',
      promotional: 'R$ 8.500',
      promotionalLabel: 'Investimento único',
    },
    deliverables: [
      {
        icon: Target,
        title: 'Diagnóstico completo',
        description: 'Análise profunda do negócio, mercado, concorrência e posicionamento atual',
      },
      {
        icon: TrendingUp,
        title: 'KPIs definidos',
        description: 'Métricas de sucesso alinhadas com objetivos de faturamento e crescimento',
      },
      {
        icon: Compass,
        title: 'Plano de ação integrado',
        description: 'Roadmap de 12 meses com ações priorizadas e timeline executável',
      },
    ],
    results: [
      'Clareza total sobre direcionamento estratégico',
      'Alinhamento entre marketing e vendas',
      'Base sólida para todas as ações futuras',
    ],
    color: 'from-blue-500/20 to-blue-600/20',
    accentColor: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    id: 'ads',
    icon: Megaphone,
    Icon3D: Icon3DMegaphone,
    badge: 'MOTOR DE AQUISIÇÃO',
    title: 'Ads & Performance',
    subtitle: 'Gestão completa de campanhas multicanal com foco obsessivo em ROI.',
    duration: 'Mensal (contínuo)',
    tiers: [
      { 
        name: 'Initiate', 
        price: 'R$ 2.500/mês', 
        budget: 'Foco em Awareness',
        deliverables: [
          'Reconhecimento de marca',
          'Google Ads ou Meta Ads (1 plataforma)',
          'Campanhas de alcance e engajamento',
          'Relatórios mensais de performance',
          '1 reunião mensal de alinhamento',
        ]
      },
      { 
        name: 'Básico', 
        price: 'R$ 3.500/mês', 
        budget: 'Awareness multicanal',
        deliverables: [
          'Google Ads + Meta Ads integrados',
          'Campanhas de alcance, engajamento e remarketing',
          'Relatórios quinzenais detalhados',
          '2 reuniões mensais de estratégia',
          'Modelo variável disponível',
        ]
      },
      { 
        name: 'Intermediário', 
        price: 'R$ 4.500/mês', 
        budget: 'Awareness + Conversão',
        recommended: true,
        deliverables: [
          'Campanhas de awareness + conversão',
          'Google Ads completo + Meta Ads avançado',
          'Testes A/B de criativos e copy',
          'Otimização de funis de conversão',
          'Relatórios semanais personalizados',
          'Reuniões quinzenais estratégicas',
          'Modelo variável disponível',
        ]
      },
      { 
        name: 'Avançado', 
        price: 'R$ 5.500/mês', 
        budget: 'Estratégia multicanal completa',
        deliverables: [
          'Google Ads full + Meta Ads premium + LinkedIn',
          'Funis avançados de conversão',
          'Account Manager dedicado',
          'Relatórios semanais com insights estratégicos',
          'Reuniões semanais de otimização',
          'Estratégias de leilão e bidding avançadas',
          'Modelo variável disponível',
        ]
      },
    ],
    deliverables: [
      {
        icon: Megaphone,
        title: 'Campanhas Multicanal',
        description: 'Google, Meta, LinkedIn otimizados conforme seu tier',
      },
      {
        icon: Target,
        title: 'Segmentação Avançada',
        description: 'Públicos customizados e remarketing estratégico',
      },
      {
        icon: TrendingUp,
        title: 'Otimização Contínua',
        description: 'Testes A/B e ajustes para maximizar ROI',
      },
    ],
    results: [
      'Redução média de 30-50% no CAC',
      'Aumento de 2-3x em leads qualificados',
      'ROI mensurável e transparente',
    ],
    color: 'from-purple-500/20 to-purple-600/20',
    accentColor: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    id: 'seo',
    icon: Search,
    Icon3D: Icon3DSearch,
    badge: 'MOTOR ORGÂNICO + IA',
    title: 'SEO/GEO 360',
    subtitle: 'Domine o Google E seja recomendado por IAs generativas (ChatGPT, Claude, Perplexity). Generative Engine Optimization para visibilidade total.',
    duration: '6-12 meses',
    singlePrice: {
      price: 'R$ 4.500/mês',
      promotional: 'R$ 4.500/mês',
      promotionalLabel: 'Investimento mensal',
    },
    deliverables: [
      {
        icon: Search,
        title: 'SEO técnico tradicional',
        description: 'Otimização completa de site, velocidade, estrutura e indexação para Google',
      },
      {
        icon: Bot,
        title: 'GEO - Generative Engine Optimization',
        description: 'Otimização para ser recomendado por ChatGPT, Claude, Perplexity e outras IAs',
      },
      {
        icon: Target,
        title: 'Google Business Profile',
        description: 'Perfil otimizado, posts semanais e gestão de avaliações para buscas locais',
      },
      {
        icon: TrendingUp,
        title: 'Conteúdo estratégico',
        description: 'Criação de conteúdo que IAs entendem e recomendam + SEO tradicional',
      },
    ],
    results: [
      'Recomendado por IAs generativas (ChatGPT, Claude)',
      'Top 3 posições no Google e Google Maps',
      'Aumento de 70-150% em tráfego orgânico + tráfego de IAs',
    ],
    color: 'from-green-500/20 to-green-600/20',
    accentColor: 'text-green-500',
    bgColor: 'bg-green-500/10',
  },
  {
    id: 'sites',
    icon: Globe,
    Icon3D: Icon3DGlobe,
    badge: 'CONVERSOR 24/7',
    title: 'Sites & Landing Pages',
    subtitle: 'Ativos digitais com design focado em conversão e copywriting persuasivo.',
    duration: '3-4 semanas',
    tiers: [
      { 
        name: 'Landing Page', 
        price: 'R$ 2.500', 
        budget: 'Página única otimizada',
        deliverables: [
          '1 página única responsiva',
          'Design moderno e clean',
          'Formulário de contato integrado',
          'SEO básico on-page',
          '1 rodada de revisões',
        ]
      },
      { 
        name: 'Site Institucional', 
        price: 'R$ 7.500', 
        budget: 'Até 7 páginas + CMS',
        recommended: true,
        deliverables: [
          'Até 7 páginas + estrutura de navegação',
          'CMS para gerenciar conteúdo facilmente',
          'Blog integrado para marketing de conteúdo',
          'Formulários avançados e integrados',
          'SEO on-page completo',
          'Integração com Google Analytics',
          '3 rodadas de revisões',
        ]
      },
      { 
        name: 'Site Completo', 
        price: 'R$ 12.500', 
        budget: 'Páginas ilimitadas + custom',
        deliverables: [
          'Páginas ilimitadas + arquitetura customizada',
          'CMS avançado com múltiplos usuários e permissões',
          'Funcionalidades custom (portais, áreas restritas)',
          'Integrações via API (CRM, ERP, etc)',
          'Chat ao vivo e automações',
          'SEO técnico avançado',
          'Revisões ilimitadas por 30 dias',
          '3 meses de suporte técnico incluso',
        ]
      },
    ],
    deliverables: [
      {
        icon: Globe,
        title: 'Design UX/UI',
        description: 'Interface moderna focada em guiar o usuário para conversão',
      },
      {
        icon: Target,
        title: 'Copywriting',
        description: 'Textos persuasivos com gatilhos mentais',
      },
      {
        icon: TrendingUp,
        title: 'Otimização mobile',
        description: 'Experiência perfeita em todos os dispositivos',
      },
    ],
    results: [
      'Taxa de conversão 3-5x maior',
      'Tempo de carregamento < 2 segundos',
      'Design que vende 24/7',
    ],
    color: 'from-red-500/20 to-red-600/20',
    accentColor: 'text-red-500',
    bgColor: 'bg-red-500/10',
  },
  {
    id: 'ai',
    icon: Bot,
    Icon3D: Icon3DRobot,
    badge: 'AUTOMAÇÃO INTELIGENTE',
    title: 'Agentes de IA',
    subtitle: 'IA para qualificação de leads e automação de processos repetitivos.',
    duration: '2-3 semanas',
    singlePrice: {
      price: 'R$ 5.500 setup + R$ 2.500/mês',
      promotional: 'R$ 5.500 setup + R$ 2.500/mês',
      promotionalLabel: 'Setup único + mensalidade',
    },
    deliverables: [
      {
        icon: Bot,
        title: 'Qualificação automática',
        description: 'IA que qualifica leads 24/7 com perguntas inteligentes e scoring',
      },
      {
        icon: Clock,
        title: 'Agendamento',
        description: 'Agendamento automático de reuniões integrado ao calendário da equipe',
      },
      {
        icon: Target,
        title: 'Integração CRM',
        description: 'Sincronização total com HubSpot, RD Station, Pipedrive e outros',
      },
    ],
    results: [
      'Economia de 20-30h/semana da equipe',
      'Resposta instantânea 24/7',
      'Aumento de 40% em reuniões agendadas',
    ],
    color: 'from-violet-500/20 to-violet-600/20',
    accentColor: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
  },
  {
    id: 'training',
    icon: GraduationCap,
    Icon3D: Icon3DGraduation,
    badge: 'MULTIPLICADOR',
    title: 'Treinamento Comercial',
    subtitle: 'Capacitação da equipe para converter leads em negócios fechados.',
    duration: '2-5 dias intensivos',
    tiers: [
      { 
        name: 'Básico', 
        price: 'R$ 7.500', 
        budget: '2 dias presenciais',
        deliverables: [
          '2 dias de treinamento intensivo presencial',
          'Módulos: prospecção, qualificação e fechamento',
          'Material didático completo em PDF',
          'Certificado de participação',
          'Gravação das sessões para revisão',
        ]
      },
      { 
        name: 'Completo', 
        price: 'R$ 12.500', 
        budget: '5 dias + 3 meses coaching',
        recommended: true,
        deliverables: [
          '5 dias de imersão presencial',
          'Módulos: todo o ciclo de vendas + negociação avançada',
          'Role-playing e simulações com cenários reais',
          '3 meses de coaching pós-treinamento',
          'Análise de calls gravadas com feedback',
          'Reuniões mensais de follow-up',
          'Acesso a plataforma de conteúdo exclusivo',
        ]
      },
      { 
        name: 'Enterprise', 
        price: 'Sob consulta', 
        budget: 'Programa customizado',
        deliverables: [
          'Programa totalmente customizado para sua empresa',
          'Diagnóstico completo da equipe comercial',
          'Criação de playbook de vendas exclusivo',
          'Treinamento contínuo (6-12 meses)',
          'Consultoria estratégica mensal',
          'Implementação de CRM e processos',
          'Acompanhamento individual de vendedores',
          'Análise de métricas e ajustes constantes',
        ]
      },
    ],
    deliverables: [
      {
        icon: GraduationCap,
        title: 'Técnicas de vendas',
        description: 'Metodologias comprovadas de negociação e fechamento',
      },
      {
        icon: Target,
        title: 'Alinhamento',
        description: 'Sincronização com proposta de valor e jornada do cliente',
      },
      {
        icon: TrendingUp,
        title: 'Coaching contínuo',
        description: 'Acompanhamento com análise de calls e role-playing',
      },
    ],
    results: [
      'Aumento de 30-60% na taxa de conversão',
      'Redução de 25% no ciclo de vendas',
      'Equipe mais confiante e alinhada',
    ],
    color: 'from-orange-500/20 to-orange-600/20',
    accentColor: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
  },
];

function ServiceCard({ service }: { service: Service }) {
  const [selectedTier, setSelectedTier] = useState(
    service.tiers?.findIndex(t => t.recommended) ?? 0
  );
  const Icon = service.icon;
  const { openDialog } = useContactDialog();

  return (
    <Card className="relative overflow-hidden bg-card/80 backdrop-blur-sm border-primary/20 p-0">
      <CornerBrackets />
      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-30`} />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative">
        {/* 3D Icon Header */}
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-background to-card">
          <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-50`} />
          
          {/* 3D Icon */}
          <div className="absolute inset-0 flex items-center justify-center p-16">
            <service.Icon3D />
          </div>

          {/* Floating Badge */}
          <div className="absolute top-6 left-6">
            <Badge className={`${service.bgColor} backdrop-blur-sm border-0 text-xs uppercase tracking-wider`}>
              {service.badge}
            </Badge>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-3xl mb-2 text-foreground drop-shadow-lg">{service.title}</h3>
            <p className="text-muted-foreground drop-shadow-md">{service.subtitle}</p>
          </div>
        </div>

        {/* Duration Badge */}
        <div className="px-8 pt-6 pb-2">
          
        </div>

        {/* Pricing Section */}
        <div className="p-8 border-b border-primary/10 bg-background/30">
          {service.singlePrice ? (
            <div className="space-y-3">
              <div className="flex items-baseline gap-3">
                <span className="text-sm text-muted-foreground line-through">
                  {service.singlePrice.price}
                </span>
                <span className={`text-4xl ${service.accentColor}`}>
                  {service.singlePrice.promotional}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-green-500">
                <Sparkles className="w-4 h-4" />
                {service.singlePrice.promotionalLabel}
              </div>
            </div>
          ) : service.tiers ? (
            <Tabs value={selectedTier.toString()} onValueChange={(v) => setSelectedTier(parseInt(v))}>
              <TabsList className={`grid w-full mb-6 ${service.tiers.length === 4 ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-3'}`}>
                {service.tiers.map((tier, idx) => (
                  <TabsTrigger 
                    key={idx} 
                    value={idx.toString()}
                    className="relative data-[state=active]:bg-primary/10"
                  >
                    {tier.recommended && (
                      <Sparkles className="w-3 h-3 absolute -top-1 -right-1 text-primary" />
                    )}
                    {tier.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {service.tiers.map((tier, idx) => (
                <TabsContent key={idx} value={idx.toString()} className="space-y-4 mt-0">
                  <div>
                    <div className={`text-4xl ${service.accentColor} mb-2`}>
                      {tier.price}
                    </div>
                    <p className="text-sm text-muted-foreground">{tier.budget}</p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm uppercase tracking-wider text-muted-foreground">
                      O que está incluso:
                    </h4>
                    <ul className="space-y-2">
                      {tier.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-3">
                          <Check className={`w-4 h-4 ${service.accentColor} mt-0.5 flex-shrink-0`} />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          ) : null}
        </div>

        {/* Deliverables & Results */}
        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Main Deliverables */}
          <div className="space-y-4">
            <h4 className="flex items-center gap-2 text-sm uppercase tracking-wider text-muted-foreground">
              <Target className="w-4 h-4" />
              Principais Entregáveis
            </h4>
            <div className="space-y-3">
              {service.deliverables.map((deliverable, idx) => {
                const DeliverableIcon = deliverable.icon;
                return (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-background/40 rounded-lg border border-primary/10">
                    <div className={`flex items-center justify-center w-8 h-8 ${service.bgColor} rounded-lg flex-shrink-0`}>
                      <DeliverableIcon className={`w-4 h-4 ${service.accentColor}`} />
                    </div>
                    <div>
                      <h5 className="text-sm mb-1">{deliverable.title}</h5>
                      <p className="text-xs text-muted-foreground">{deliverable.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            <h4 className="flex items-center gap-2 text-sm uppercase tracking-wider text-muted-foreground">
              <TrendingUp className="w-4 h-4" />
              Resultados Esperados
            </h4>
            <ul className="space-y-3">
              {service.results.map((result, idx) => (
                <li key={idx} className="flex items-start gap-3 p-3 bg-background/40 rounded-lg border border-primary/10">
                  <Check className={`w-5 h-5 ${service.accentColor} mt-0.5 flex-shrink-0`} />
                  <span className="text-sm">{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 border-t border-primary/10 bg-background/20">
          <Button
            onClick={openDialog}
            className={`w-full bg-gradient-to-r ${service.color.replace('/20', '')} hover:scale-105 transition-transform group`}
            size="lg"
          >
            Contratar {service.title}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </Card>
  );
}

export function DetailedPricingSection() {
  const { openDialog } = useContactDialog();

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Investimento Detalhado</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl max-w-4xl mx-auto"
          >
            Precificação{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">
              Transparente
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Selecione o tier ideal para cada serviço e veja exatamente o que você recebe
          </motion.p>
        </div>

        {/* Services */}
        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>

        {/* Packages Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="inline-block bg-gradient-to-br from-primary/10 to-red-600/10 border-primary/20 p-8 backdrop-blur-sm">
            <div className="space-y-4">
              <Sparkles className="w-10 h-10 text-primary mx-auto" />
              <h3 className="text-2xl">Pacotes Combinados</h3>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Ao combinar serviços, você economiza até <span className="text-primary">25%</span> e 
                garante uma estratégia totalmente integrada
              </p>
              <Button
                onClick={openDialog}
                size="lg"
                className="bg-gradient-to-r from-primary to-red-600 hover:from-red-600 hover:to-primary"
              >
                Solicitar Proposta Customizada
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
