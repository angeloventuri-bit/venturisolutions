import { Rocket, CheckCircle2, Building2 } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';

export function CTASlide() {
  return (
    <div className="min-h-full flex items-center justify-center p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
      <div className="max-w-5xl w-full space-y-12">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
            <Rocket className="w-10 h-10 text-primary-foreground" />
          </div>
          
          <h1 className="text-5xl md:text-6xl">
            Vamos Começar sua Jornada de Crescimento?
          </h1>
          
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
            Vamos formalizar nossa parceria e iniciar sua jornada para o crescimento previsível hoje mesmo
          </p>
        </div>

        <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <div className="space-y-6">
            <h3 className="text-2xl text-center">Próximos Passos</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
                  <span className="text-2xl">01</span>
                </div>
                <h4>Aprovação</h4>
                <p className="text-muted-foreground">
                  Com sua aprovação, enviaremos a proposta formalizada para sua assinatura digital
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
                  <span className="text-2xl">02</span>
                </div>
                <h4>Contato</h4>
                <p className="text-muted-foreground">
                  Nossa equipe de onboarding entrará em contato amanhã
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
                  <span className="text-2xl">03</span>
                </div>
                <h4>Kick-off</h4>
                <p className="text-muted-foreground">
                  Agendamento da reunião de kick-off da sua Reestruturação Estratégica
                </p>
              </div>
            </div>
          </div>
        </Card>

        <div className="text-center space-y-6">
          <div className="space-y-3">
            <p className="text-xl">
              Estamos prontos para construir esse futuro com vocês.
            </p>
            <p className="text-2xl text-primary">
              Qual é a sua decisão?
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 pt-6">
            <Button size="lg" className="text-lg px-8 py-6">
              <CheckCircle2 className="w-5 h-5 mr-2" />
              Iniciar Parceria
            </Button>
          </div>

          <div className="pt-8 flex items-center justify-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Building2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl tracking-tight">Venturi Solutions</span>
          </div>
        </div>
      </div>
    </div>
  );
}
