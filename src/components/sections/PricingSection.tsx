import { Card } from '../ui/card';
import { Check, Sparkles, Zap } from 'lucide-react';
import { Button } from '../ui/button';
import { motion } from 'motion/react';
import { useContactDialog } from '../../utils/useContactDialog';

const packages = [
  {
    name: 'Fundação',
    subtitle: 'Clareza e Direção',
    price: 'R$ 8.500',
    period: 'pagamento único',
    description: 'Ideal para empresas que precisam estruturar sua estratégia de crescimento',
    features: [
      'Reestruturação Estratégica completa',
      'Diagnóstico 360º do negócio',
      'Plano de ação de 12 meses',
      'Definição de KPIs',
      'Alinhamento marketing e vendas',
    ],
    highlight: false,
  },
  {
    name: 'Aceleração',
    subtitle: 'Domínio de Mercado',
    price: 'R$ 8.000',
    period: '/mês',
    description: 'Sistema completo de crescimento com execução contínua',
    features: [
      'Reestruturação Estratégica GRÁTIS (R$ 8.500)',
      'Ads & Performance (Plano Intermediário)',
      'SEO/GEO 360 completo (Google + IAs)',
      'Otimização para ser recomendado por ChatGPT',
      'Relatórios semanais de valor',
      'Suporte prioritário',
    ],
    highlight: true,
    bonus: 'Reestruturação de R$ 8.500 incluída',
  },
  {
    name: 'Enterprise',
    subtitle: 'Solução Customizada',
    price: 'Sob Consulta',
    period: '',
    description: 'Soluções modulares adaptadas às suas necessidades específicas',
    features: [
      'Todos os serviços disponíveis',
      'Sites & Landing Pages',
      'Agentes de IA customizados',
      'Treinamento comercial',
      'Account Manager dedicado',
      'SLA personalizado',
    ],
    highlight: false,
  },
];

export function PricingSection() {
  const { openDialog } = useContactDialog();

  return (
    <section id="pricing" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full"
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Investimento Estratégico</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl max-w-4xl mx-auto"
          >
            Escolha sua{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">
              Arquitetura
            </span>
            {' '}de Crescimento
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Investimento em previsibilidade, não em promessas vazias
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={pkg.highlight ? 'hover-lift' : ''}
            >
              <div className="relative group h-full">
                {/* Premium Glow for Highlighted Package */}
                {pkg.highlight && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-red-600 rounded-3xl blur-xl opacity-15 group-hover:opacity-25 transition-all" />
                )}
                
                <Card
                  className={`relative overflow-hidden p-8 h-full flex flex-col ${
                    pkg.highlight
                      ? 'glass-premium border-primary/40 scale-105'
                      : 'glass border-primary/20 hover:border-primary/30'
                  } transition-all`}
                >
                  {pkg.highlight && (
                    <div className="absolute top-4 right-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-red-600 rounded-full blur-sm opacity-40" />
                        <div className="relative flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-primary to-red-600 rounded-full text-xs text-white shadow-lg">
                          <Sparkles className="w-3 h-3" />
                          Recomendado
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Floating Glow */}
                  <div className={`absolute top-0 right-0 w-32 h-32 ${pkg.highlight ? 'bg-primary/20' : 'bg-primary/10'} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity`} />

                  <div className="space-y-6 flex-1">
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                        {pkg.subtitle}
                      </div>
                      <h3 className="text-2xl mb-4">{pkg.name}</h3>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl text-primary">{pkg.price}</span>
                        {pkg.period && <span className="text-muted-foreground">{pkg.period}</span>}
                      </div>
                      {pkg.bonus && (
                        <div className="mt-3 flex items-center gap-2 text-sm text-green-500">
                          <Sparkles className="w-4 h-4" />
                          {pkg.bonus}
                        </div>
                      )}
                    </div>

                    <p className="text-sm text-muted-foreground">{pkg.description}</p>

                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    onClick={openDialog}
                    className={`w-full mt-8 ${
                      pkg.highlight
                        ? 'bg-gradient-to-r from-primary to-red-600 hover:from-red-600 hover:to-primary'
                        : 'bg-primary/10 hover:bg-primary/20 text-foreground'
                    }`}
                  >
                    {pkg.name === 'Enterprise' ? 'Falar com Consultor' : 'Iniciar Parceria'}
                  </Button>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center pt-12"
        >
          <p className="text-muted-foreground">
            Todos os pacotes incluem transparência total e relatórios de valor mensais
          </p>
        </motion.div>
      </div>
    </section>
  );
}
