import { Card } from '../ui/card';
import { Search, Map, Rocket, BarChart3 } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Imersão e Diagnóstico',
    description: 'Imersão profunda no seu negócio. Entendemos clientes, desafios e seu valor fundamental.',
  },
  {
    number: '02',
    icon: Map,
    title: 'Plano Estratégico de Valor',
    description: 'Plano de ação integrado com canais, metas e KPIs que importam para seu faturamento.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Execução e Otimização Ágil',
    description: 'Implementação com especialistas e monitoramento diário. Otimização em tempo real.',
  },
  {
    number: '04',
    icon: BarChart3,
    title: 'Relatórios de Valor',
    description: 'Transparência total com foco em resultados que impactam seu faturamento.',
  },
];

export function MethodologySection() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl max-w-4xl mx-auto"
          >
            Jornada em{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">
              4 Etapas
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Um caminho claro e estruturado para o crescimento previsível
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all p-8 h-full">
                  <div className="absolute top-6 right-6 text-7xl opacity-5 font-bold">
                    {step.number}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Passo {step.number}</div>
                        <h3 className="text-xl">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center pt-12"
        >
          <Card className="inline-block bg-primary/5 border-primary/20 p-6 backdrop-blur-sm">
            <p className="text-lg">
              <span className="text-primary">Transparência e previsibilidade</span> em cada etapa da jornada
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
