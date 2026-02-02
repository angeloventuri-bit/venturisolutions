import { Cpu, Layers, Zap } from 'lucide-react';
import { Card } from '../ui/card';

export function VaaSSlide() {
  return (
    <div className="min-h-full p-8 py-12">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Cpu className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl">
            Apresentando o "Value as a Service" (VaaS)
          </h1>
          <h2 className="text-2xl text-muted-foreground max-w-3xl mx-auto">
            Nós não vendemos serviços avulsos. 
            Nós instalamos um Sistema Operacional de Crescimento no seu negócio.
          </h2>
        </div>

        <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Layers className="w-10 h-10 text-primary mt-1 flex-shrink-0" />
              <div className="space-y-4">
                <h3 className="text-2xl">A Metáfora do Sistema Operacional</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Pense nos canais de comunicação tradicionais, como Ads e SEO, como se fossem 
                  <span className="text-foreground"> aplicativos em um computador</span>. Eles não funcionam bem se o sistema 
                  operacional por baixo for lento, desatualizado ou mal configurado.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A maioria das agências tenta vender os 'aplicativos' isoladamente. Na Venturi, 
                  nossa abordagem é fundamentalmente diferente.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center">
            <div className="space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-lg">
                <Layers className="w-6 h-6 text-blue-600" />
              </div>
              <h3>Unifica a Oferta</h3>
              <p className="text-muted-foreground">
                Todos os serviços trabalham de forma integrada sobre o sistema VaaS
              </p>
            </div>
          </Card>

          <Card className="p-6 text-center">
            <div className="space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-50 rounded-lg">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3>Enfatiza o Diagnóstico</h3>
              <p className="text-muted-foreground">
                Primeiro entendemos o "hardware" antes de instalar qualquer "software"
              </p>
            </div>
          </Card>

          <Card className="p-6 text-center">
            <div className="space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-50 rounded-lg">
                <Cpu className="w-6 h-6 text-purple-600" />
              </div>
              <h3>Contraste Competitivo</h3>
              <p className="text-muted-foreground">
                Sistema sob medida em torno do seu valor único, não fórmulas prontas
              </p>
            </div>
          </Card>
        </div>

        <div className="text-center pt-4">
          <p className="text-lg text-muted-foreground italic">
            Antes de pisar no acelerador, garantimos que o motor esteja perfeitamente ajustado
          </p>
        </div>
      </div>
    </div>
  );
}
