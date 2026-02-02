import { Quote, Users } from 'lucide-react';
import { Card } from '../ui/card';

export function TestimonialSlide() {
  return (
    <div className="min-h-full flex items-center justify-center p-8">
      <div className="max-w-4xl w-full space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Users className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl">
            Uma Perspectiva de Parceria
          </h1>
          <p className="text-xl text-muted-foreground">
            Nossos clientes não nos veem como fornecedores, mas como parte da sua equipe estratégica
          </p>
        </div>

        <Card className="p-10 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <div className="space-y-6">
            <Quote className="w-12 h-12 text-primary/30" />
            
            <blockquote className="text-2xl leading-relaxed">
              "A parceria com a Venturi mudou nossa perspectiva sobre marketing. 
              Eles não são fornecedores; são parte da nossa equipe estratégica. 
              Pela primeira vez, temos clareza sobre o ROI de cada ação e um plano 
              de crescimento que realmente funciona."
            </blockquote>

            <div className="flex items-center gap-4 pt-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div>
                <div>Cliente Venturi Solutions</div>
                <div className="text-muted-foreground">CEO</div>
              </div>
            </div>
          </div>
        </Card>

        <div className="text-center pt-4">
          <Card className="p-6 bg-accent/50 inline-block">
            <p className="text-lg max-w-2xl">
              Este é o tipo de relacionamento que buscamos construir. Um alinhamento tão profundo 
              que o nosso sucesso se torna <span className="text-primary">indistinguível do seu</span>.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
