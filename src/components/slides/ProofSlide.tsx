import { TrendingUp, Phone, Award } from 'lucide-react';
import { Card } from '../ui/card';

const cases = [
  {
    icon: TrendingUp,
    title: 'Tecnologia B2B',
    challenge: 'Baixo volume de leads qualificados e um Custo por Aquisição (CAC) elevado que inviabilizava a escala das campanhas.',
    solution: 'Reestruturação das campanhas de Ads com base na metodologia VaaS e criação de landing pages de alta conversão.',
    results: [
      { label: 'Leads Qualificados', value: '+150%', color: 'text-green-600' },
      { label: 'Custo por Aquisição', value: '-42%', color: 'text-blue-600' },
      { label: 'Período', value: '6 meses', color: 'text-muted-foreground' },
    ],
    bgColor: 'from-green-50 to-blue-50',
    borderColor: 'border-green-200',
  },
  {
    icon: Phone,
    title: 'Serviços de Saúde (Atuação Local)',
    challenge: 'Dificuldade em se destacar da concorrência local e baixa visibilidade nas buscas orgânicas.',
    solution: 'Implementação da estratégia SEO/GEO 360, com otimização completa do Google Business Profile e criação de conteúdo local relevante.',
    results: [
      { label: 'Posição no Google Maps', value: '1ª Posição', color: 'text-yellow-600' },
      { label: 'Ligações Telefônicas', value: '+88%', color: 'text-green-600' },
      { label: 'Origem', value: 'Busca Orgânica', color: 'text-muted-foreground' },
    ],
    bgColor: 'from-yellow-50 to-green-50',
    borderColor: 'border-yellow-200',
  },
];

export function ProofSlide() {
  return (
    <div className="min-h-full p-8 py-12">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Award className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl">
            A Prova está na Performance
          </h1>
          <p className="text-xl text-muted-foreground">
            Não acredite apenas em nossa palavra. Veja o valor que geramos na prática.
          </p>
        </div>

        <div className="space-y-8">
          {cases.map((caseStudy, index) => {
            const Icon = caseStudy.icon;
            return (
              <Card key={index} className={`p-8 bg-gradient-to-br ${caseStudy.bgColor} ${caseStudy.borderColor}`}>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-white rounded-lg flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl mb-2">{caseStudy.title}</h3>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="mb-2">O Desafio:</h4>
                      <p className="text-muted-foreground">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h4 className="mb-2">A Solução Venturi:</h4>
                      <p className="text-muted-foreground">{caseStudy.solution}</p>
                    </div>
                    <div>
                      <h4 className="mb-3">O Resultado:</h4>
                      <div className="space-y-2">
                        {caseStudy.results.map((result, idx) => (
                          <div key={idx} className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">{result.label}:</span>
                            <span className={`${result.color}`}>{result.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
