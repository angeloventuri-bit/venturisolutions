import { Volume2, VolumeX } from 'lucide-react';
import { Card } from '../ui/card';

export function ApproachSlide() {
  return (
    <div className="min-h-full flex items-center justify-center p-8">
      <div className="max-w-5xl w-full space-y-12">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-destructive/10 rounded-full mb-4">
            <VolumeX className="w-8 h-8 text-destructive" />
          </div>
          <h1 className="text-4xl md:text-5xl">
            A Abordagem Falha
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto">
            A solução não é fazer "mais do mesmo". 
            É mudar a forma como sua empresa comunica valor.
          </h2>
        </div>

        <Card className="p-8 bg-destructive/5 border-destructive/20">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Volume2 className="w-8 h-8 text-destructive mt-1 flex-shrink-0" />
              <div className="space-y-3">
                <h3 className="text-xl">O Problema da Abordagem Tradicional</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Simplesmente aumentar o orçamento de anúncios ou a frequência de posts é como 
                  <span className="text-foreground"> tentar gritar mais alto</span> em um mercado já saturado de ruído.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Essa abordagem inevitavelmente leva a <span className="text-foreground">custos mais altos</span> para 
                  obter <span className="text-foreground">retornos menores</span>.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
            <p className="text-lg">
              É hora de uma abordagem mais inteligente e estratégica
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
