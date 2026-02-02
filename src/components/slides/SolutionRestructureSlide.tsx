import { Compass, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Card } from '../ui/card';

export function SolutionRestructureSlide() {
  return (
    <div className="min-h-full flex items-center justify-center p-8">
      <div className="max-w-5xl w-full space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4">
            <Compass className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl md:text-4xl">
            Reestruturação Estratégica
          </h1>
          <p className="text-xl text-muted-foreground">
            A Fundação do Crescimento
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-red-50/50 border-red-200">
            <div className="space-y-3">
              <AlertCircle className="w-8 h-8 text-red-600" />
              <h3>Para empresas que sentem:</h3>
              <p className="text-muted-foreground">
                "Seu marketing é reativo e seus investimentos são um tiro no escuro."
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-blue-50/50 border-blue-200">
            <div className="space-y-3">
              <Compass className="w-8 h-8 text-blue-600" />
              <h3>Nossa Solução:</h3>
              <p className="text-muted-foreground">
                Um diagnóstico 360º e um plano estratégico de 12 meses que alinha marketing, vendas e o propósito do seu negócio.
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-green-50/50 border-green-200">
            <div className="space-y-3">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
              <h3>O Resultado para você:</h3>
              <p className="text-muted-foreground">
                Clareza, foco e um caminho previsível para o crescimento sustentável.
              </p>
            </div>
          </Card>
        </div>

        <Card className="p-8 bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200">
          <div className="space-y-4">
            <h3 className="text-xl">O que está incluído:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Diagnóstico 360º do seu negócio, mercado e concorrência</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Definição clara de KPIs e metas de faturamento</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Plano de ação integrado para os próximos 12 meses</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Alinhamento entre marketing e vendas</span>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
}
