import { Wrench } from 'lucide-react';

export function SolutionsIntroSlide() {
  return (
    <div className="min-h-full flex items-center justify-center p-8">
      <div className="max-w-5xl w-full text-center space-y-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
          <Wrench className="w-10 h-10 text-primary" />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl">
            Nossas Soluções
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto">
            As Ferramentas Certas para Cada Desafio do seu Crescimento
          </h2>
        </div>

        <div className="pt-8">
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada ferramenta tem um propósito específico e resolve uma dor clara, 
            sempre conectada à metodologia VaaS.
          </p>
        </div>
      </div>
    </div>
  );
}
