import { GitFork, TrendingDown, TrendingUp } from 'lucide-react';
import { Card } from '../ui/card';

export function DecisionSlide() {
  return (
    <div className="min-h-full p-8 py-12">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <GitFork className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl">
            A Encruzilhada
          </h1>
          <p className="text-2xl text-muted-foreground">
            A partir de hoje, existem dois caminhos para o crescimento da sua empresa
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Caminho 1: Incerteza */}
          <Card className="p-8 bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full">
                  <TrendingDown className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h2 className="text-2xl">Caminho 1</h2>
                  <p className="text-red-600">A Incerteza</p>
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Continuar com ações de marketing desconectadas e reativas
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Resultados imprevisíveis e um ROI incerto sobre cada real investido
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    O 'teto de crescimento' continua sendo um limite para o seu potencial
                  </p>
                </li>
              </ul>
            </div>
          </Card>

          {/* Caminho 2: Previsibilidade */}
          <Card className="p-8 bg-gradient-to-br from-green-50 to-blue-50 border-green-200 ring-2 ring-primary/20">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h2 className="text-2xl">Caminho 2</h2>
                  <p className="text-green-600">A Previsibilidade</p>
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <p>
                    <span className="text-primary">Implementar um sistema de crescimento integrado</span>, 
                    construído em torno do seu valor único
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <p>
                    <span className="text-primary">Tomar decisões baseadas em dados</span>, 
                    com ROI mensurável e claro
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <p>
                    Ter um <span className="text-primary">caminho definido para romper o platô</span> e 
                    escalar de forma sustentável e lucrativa
                  </p>
                </li>
              </ul>

              <div className="pt-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg">
                  <span className="text-primary">A Parceria Venturi</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center pt-8">
          <p className="text-2xl mb-4">
            Qual caminho você escolhe para o futuro do seu negócio?
          </p>
          <p className="text-lg text-muted-foreground">
            A decisão que você toma hoje define a trajetória do seu crescimento nos próximos anos
          </p>
        </div>
      </div>
    </div>
  );
}
