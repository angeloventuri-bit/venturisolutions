import { Globe, Bot, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Card } from '../ui/card';

export function SolutionSitesSlide() {
  return (
    <div className="min-h-full flex items-center justify-center p-8">
      <div className="max-w-5xl w-full space-y-8">
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-violet-50 rounded-full">
              <Bot className="w-8 h-8 text-violet-600" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl">
            Sites & Landing Pages + Agentes de IA
          </h1>
          <p className="text-xl text-muted-foreground">
            Os Conversores 24/7
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-red-50/50 border-red-200">
            <div className="space-y-3">
              <AlertCircle className="w-8 h-8 text-red-600" />
              <h3>Para empresas que sentem:</h3>
              <p className="text-muted-foreground">
                "Nosso site não é um vendedor 24/7" e "Processos manuais estão limitando a eficiência."
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-blue-50/50 border-blue-200">
            <div className="space-y-3">
              <Globe className="w-8 h-8 text-blue-600" />
              <h3>Nossa Solução:</h3>
              <p className="text-muted-foreground">
                Ativos digitais focados em conversão e agentes de IA para automatizar tarefas repetitivas.
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-green-50/50 border-green-200">
            <div className="space-y-3">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
              <h3>O Resultado para você:</h3>
              <p className="text-muted-foreground">
                Máquina de leads trabalhando o tempo todo e aumento exponencial da produtividade.
              </p>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200">
            <div className="space-y-4">
              <h3 className="text-xl flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-600" />
                Sites & Landing Pages
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Design focado em conversão</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Copywriting persuasivo e estratégico</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>CTAs estrategicamente posicionados</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Otimização para mobile</span>
                </li>
              </ul>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-violet-50 to-violet-100/50 border-violet-200">
            <div className="space-y-4">
              <h3 className="text-xl flex items-center gap-2">
                <Bot className="w-5 h-5 text-violet-600" />
                Agentes de IA
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-violet-600 mt-0.5 flex-shrink-0" />
                  <span>Qualificação automática de leads</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-violet-600 mt-0.5 flex-shrink-0" />
                  <span>Agendamento inteligente de reuniões</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-violet-600 mt-0.5 flex-shrink-0" />
                  <span>Respostas automáticas 24/7</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-violet-600 mt-0.5 flex-shrink-0" />
                  <span>Integração com CRM</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
