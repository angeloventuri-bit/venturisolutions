import { VenturiLogo } from '../VenturiLogo';

export function TitleSlide() {
  return (
    <div className="min-h-full flex items-center justify-center p-8 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="max-w-5xl w-full text-center space-y-8">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl" />
            <VenturiLogo variant="horizontal" size="xl" className="relative filter drop-shadow-lg" />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl tracking-tight">
            Uma Parceria Estratégica para o Crescimento Previsível
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            do seu Negócio
          </p>
        </div>

        <div className="pt-8">
          <p className="text-lg text-muted-foreground">
            Apresentado por <span className="text-foreground">[Nome do Vendedor]</span>
          </p>
          <p className="text-muted-foreground">
            Estrategista de Crescimento, Venturi Solutions
          </p>
        </div>

        <div className="pt-12 flex justify-center gap-4">
          <div className="w-32 h-32 border-2 border-dashed border-border rounded-lg flex items-center justify-center text-muted-foreground">
            Logo Cliente
          </div>
        </div>
      </div>
    </div>
  );
}
