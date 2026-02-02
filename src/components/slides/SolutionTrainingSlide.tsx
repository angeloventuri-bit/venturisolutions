import { GraduationCap, AlertCircle, CheckCircle2, TrendingUp } from 'lucide-react';
import { Card } from '../ui/card';

export function SolutionTrainingSlide() {
  return (
    <div className="min-h-full flex items-center justify-center p-8">
      <div className="max-w-5xl w-full space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-50 rounded-full mb-4">
            <GraduationCap className="w-8 h-8 text-orange-600" />
          </div>
          <h1 className="text-3xl md:text-4xl">
            Treinamento & Educação Continuada
          </h1>
          <p className="text-xl text-muted-foreground">
            O Multiplicador de Resultados
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-red-50/50 border-red-200">
            <div className="space-y-3">
              <AlertCircle className="w-8 h-8 text-red-600" />
              <h3>Para empresas que sentem:</h3>
              <p className="text-muted-foreground">
                "Nossa equipe comercial não consegue converter os leads que o marketing gera, desperdiçando oportunidades valiosas."
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-orange-50/50 border-orange-200">
            <div className="space-y-3">
              <GraduationCap className="w-8 h-8 text-orange-600" />
              <h3>Nossa Solução:</h3>
              <p className="text-muted-foreground">
                Treinamento prático e customizado que transforma vendedores em consultores de resultado.
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-green-50/50 border-green-200">
            <div className="space-y-3">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
              <h3>O Resultado para você:</h3>
              <p className="text-muted-foreground">
                Aumento da taxa de conversão, ciclos mais curtos e equipe mais motivada.
              </p>
            </div>
          </Card>
        </div>

        <Card className="p-8 bg-gradient-to-br from-orange-50 to-orange-100/50 border-orange-200">
          <div className="space-y-4">
            <h3 className="text-xl">O que está incluído:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <span>Técnicas de negociação e fechamento</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <span>Alinhamento com a proposta de valor da empresa</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <span>Uso estratégico de ferramentas de vendas</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <span>Acompanhamento e coaching contínuo</span>
              </li>
            </ul>
          </div>
        </Card>

        <div className="flex items-center justify-center gap-8 pt-4">
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-2">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <p className="text-muted-foreground">Mais Conversões</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-2">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <p className="text-muted-foreground">Ciclos Mais Curtos</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-2">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <p className="text-muted-foreground">Equipe Motivada</p>
          </div>
        </div>
      </div>
    </div>
  );
}
