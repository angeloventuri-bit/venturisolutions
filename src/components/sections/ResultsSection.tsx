import { Card } from '../ui/card';
import { TrendingUp, Phone, Award, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const cases = [
  {
    icon: TrendingUp,
    title: 'Tecnologia B2B',
    challenge: 'CAC elevado e baixo volume de leads qualificados',
    solution: 'Reestruturação de Ads + Landing Pages de alta conversão',
    results: [
      { label: 'Leads Qualificados', value: '+150%', positive: true },
      { label: 'CAC', value: '-42%', positive: true },
      { label: 'Período', value: '6 meses' },
    ],
  },
  {
    icon: Phone,
    title: 'Serviços de Saúde',
    challenge: 'Baixa visibilidade local e dificuldade de se destacar',
    solution: 'Estratégia SEO/GEO 360 (Google + IAs) + Google Business Profile',
    results: [
      { label: 'Recomendado por IAs', value: 'ChatGPT/Claude', positive: true },
      { label: 'Google Maps', value: '1ª Posição', positive: true },
      { label: 'Ligações', value: '+88%', positive: true },
      { label: 'Origem', value: 'Busca Orgânica' },
    ],
  },
];

export function ResultsSection() {
  return (
    <section id="results" className="relative py-24 px-6 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full"
          >
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Casos de Sucesso</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl max-w-4xl mx-auto"
          >
            Resultados{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">
              Mensuráveis
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            A prova está na performance
          </motion.p>
        </div>

        <div className="space-y-8 mb-16">
          {cases.map((caseStudy, index) => {
            const Icon = caseStudy.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-primary/10 p-8">
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl">{caseStudy.title}</h3>
                    </div>

                    <div>
                      <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                        Desafio
                      </h4>
                      <p className="text-sm">{caseStudy.challenge}</p>
                    </div>

                    <div>
                      <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                        Solução
                      </h4>
                      <p className="text-sm">{caseStudy.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-3">
                        Resultado
                      </h4>
                      <div className="space-y-2">
                        {caseStudy.results.map((result, idx) => (
                          <div key={idx} className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">{result.label}:</span>
                            <span className={result.positive ? 'text-primary' : ''}>
                              {result.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
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
        >
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 p-10 backdrop-blur-sm">
            <div className="space-y-6">
              <Quote className="w-10 h-10 text-primary/50" />
              <blockquote className="text-xl md:text-2xl leading-relaxed">
                "A parceria com a Venturi mudou nossa perspectiva sobre marketing. 
                Pela primeira vez, temos clareza sobre o ROI de cada ação e um plano 
                de crescimento que realmente funciona."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div>Cliente Venturi</div>
                  <div className="text-sm text-muted-foreground">CEO</div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
