import { DollarSign, Puzzle, ArrowsUpFromLine, Globe } from 'lucide-react';
import { Card } from '../ui/card';

const symptoms = [
  {
    icon: DollarSign,
    title: 'Investimento sem Retorno',
    description:
      'Você investe em Google Ads e redes sociais, mas o retorno é frustrante. Os leads que chegam são desqualificados e o Custo de Aquisição de Cliente (CAC) parece aumentar a cada mês, pressionando suas margens de lucro.',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
  },
  {
    icon: Puzzle,
    title: 'Estratégia Desconectada',
    description:
      'Suas ações de comunicação parecem uma coleção de tarefas isoladas — posts, anúncios, e-mails — sem uma estratégia central que conecte cada iniciativa a um objetivo claro de vendas e ao crescimento real da empresa.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
  {
    icon: ArrowsUpFromLine,
    title: 'Vendas e Comunicação em Conflito',
    description:
      'Sua equipe comercial reclama da baixa qualidade dos leads, enquanto a área de comunicação se frustra com a baixa taxa de conversão. Esse desalinhamento interno custa negócios e desmotiva a equipe.',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
  },
  {
    icon: Globe,
    title: 'Presença Digital que não Vende',
    description:
      'Seu site é uma vitrine bonita, mas falha em sua missão principal: converter visitantes em oportunidades. Ele se tornou um custo, não um ativo de vendas que trabalha para você 24 horas por dia, 7 dias por semana.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
];

export function SymptomsSlide() {
  return (
    <div className="min-h-full p-8 py-12">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl max-w-4xl mx-auto">
            Os Sintomas de uma Estratégia Fragmentada
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Se você se identifica com estes desafios, a causa não é o seu produto ou sua equipe. 
            É a ausência de um sistema de crescimento integrado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {symptoms.map((symptom, index) => {
            const Icon = symptom.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className={`inline-flex items-center justify-center w-14 h-14 ${symptom.bgColor} rounded-lg`}>
                    <Icon className={`w-7 h-7 ${symptom.color}`} />
                  </div>
                  <h3 className="text-xl">{symptom.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {symptom.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center pt-6">
          <p className="text-lg">
            Qual destes quatro pontos mais descreve a realidade que você enfrenta hoje?
          </p>
        </div>
      </div>
    </div>
  );
}
