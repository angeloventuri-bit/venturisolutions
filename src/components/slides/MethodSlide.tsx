import { Search, Map, Rocket, BarChart3 } from 'lucide-react';
import { Card } from '../ui/card';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Imersão e Diagnóstico',
    description:
      'Começamos com uma imersão profunda no seu negócio. Entendemos seus clientes, seus desafios e, o mais importante, seu valor fundamental. Não aplicamos fórmulas prontas; criamos soluções sob medida a partir da sua realidade.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    number: '02',
    icon: Map,
    title: 'Plano Estratégico de Valor',
    description:
      'Com base no diagnóstico, desenvolvemos um plano de ação integrado. Definimos os canais, as metas e os KPIs que realmente importam para o seu faturamento. É aqui que a estratégia VaaS ganha vida e se torna um mapa executável.',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Execução e Otimização Ágil',
    description:
      'Implementamos as ações com uma equipe de especialistas e monitoramos os dados diariamente. Nossa abordagem é ágil: não esperamos o fim do mês para otimizar; agimos em tempo real para acelerar os resultados e maximizar o retorno sobre o investimento.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    number: '04',
    icon: BarChart3,
    title: 'Relatórios de Valor',
    description:
      'Nossos relatórios são transparentes e focados nos resultados que impactam seu faturamento. Mostramos não apenas o que fizemos, mas o valor que geramos, com análises claras e próximos passos definidos. O foco é sempre no crescimento do negócio.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
];

export function MethodSlide() {
  return (
    <div className="min-h-full p-8 py-12">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl">
            Sua Jornada para o Crescimento Previsível
          </h1>
          <p className="text-xl text-muted-foreground">
            em 4 Etapas Claras
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="p-6 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-6xl opacity-5">
                  {step.number}
                </div>
                <div className="space-y-4 relative">
                  <div className="flex items-center gap-4">
                    <div className={`flex items-center justify-center w-14 h-14 ${step.bgColor} rounded-lg flex-shrink-0`}>
                      <Icon className={`w-7 h-7 ${step.color}`} />
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
            );
          })}
        </div>

        <Card className="p-6 bg-primary/5 border-primary/20 text-center">
          <p className="text-lg">
            <span className="text-primary">Transparência e previsibilidade</span> são a base da nossa relação. 
            Você terá total visibilidade do que estamos fazendo, por que estamos fazendo e o resultado que cada ação está gerando.
          </p>
        </Card>
      </div>
    </div>
  );
}
