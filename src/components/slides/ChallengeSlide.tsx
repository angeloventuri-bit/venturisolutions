import { TrendingDown } from 'lucide-react';
import { Card } from '../ui/card';

export function ChallengeSlide() {
  return (
    <div className="min-h-full flex items-center justify-center p-8">
      <div className="max-w-5xl w-full space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-destructive/10 rounded-full mb-4">
            <TrendingDown className="w-8 h-8 text-destructive" />
          </div>
          <h1 className="text-4xl md:text-5xl">
            Sua empresa tem um produto excelente e uma equipe dedicada.
          </h1>
          <h2 className="text-3xl md:text-4xl text-muted-foreground">
            Então, por que o crescimento se tornou tão imprevisível?
          </h2>
        </div>

        <Card className="p-8 bg-accent/50">
          <div className="space-y-6">
            <h3 className="text-2xl">O Teto de Crescimento</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Este é o ponto em que as estratégias e estruturas que trouxeram a empresa até aqui 
              <span className="text-foreground"> não são mais capazes de impulsionar a próxima fase de expansão</span>. 
              O esforço aplicado já não gera os resultados proporcionais de antes.
            </p>
            <div className="border-l-4 border-primary pl-6 py-4">
              <p className="text-lg italic text-muted-foreground">
                A frustração de possuir um produto ou serviço de alta qualidade, mas ser incapaz 
                de escalar seu sucesso de forma consistente e previsível.
              </p>
            </div>
          </div>
        </Card>

        <div className="text-center pt-4">
          <p className="text-lg text-muted-foreground">
            Essa realidade soa familiar para você?
          </p>
        </div>
      </div>
    </div>
  );
}
