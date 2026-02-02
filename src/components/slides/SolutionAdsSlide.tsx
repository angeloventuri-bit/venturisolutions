import { Megaphone, Search, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Card } from '../ui/card';

export function SolutionAdsSlide() {
  return (
    <div className="min-h-full flex items-center justify-center p-8">
      <div className="max-w-5xl w-full space-y-8">
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-50 rounded-full">
              <Megaphone className="w-8 h-8 text-purple-600" />
            </div>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-50 rounded-full">
              <Search className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl">
            Ads & Performance + SEO/GEO 360
          </h1>
          <p className="text-xl text-muted-foreground">
            Os Motores de Crescimento
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-red-50/50 border-red-200">
            <div className="space-y-3">
              <AlertCircle className="w-8 h-8 text-red-600" />
              <h3>Para empresas que sentem:</h3>
              <p className="text-muted-foreground">
                "Seus anúncios pagos são um custo, não um investimento" e "Somos invisíveis no Google."
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-purple-50/50 border-purple-200">
            <div className="space-y-3">
              <Megaphone className="w-8 h-8 text-purple-600" />
              <h3>Nossa Solução:</h3>
              <p className="text-muted-foreground">
                Gestão completa de campanhas multicanal com foco obsessivo em ROI e estratégia de SEO para dominar as buscas.
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-green-50/50 border-green-200">
            <div className="space-y-3">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
              <h3>O Resultado para você:</h3>
              <p className="text-muted-foreground">
                Redução do CAC, fluxo consistente de leads qualificados e domínio nas buscas.
              </p>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200">
            <div className="space-y-4">
              <h3 className="text-xl flex items-center gap-2">
                <Megaphone className="w-5 h-5 text-purple-600" />
                Ads & Performance
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Google Ads, Meta Ads e LinkedIn Ads</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Otimização contínua focada em ROI</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Testes A/B e análise de performance</span>
                </li>
              </ul>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100/50 border-green-200">
            <div className="space-y-4">
              <h3 className="text-xl flex items-center gap-2">
                <Search className="w-5 h-5 text-green-600" />
                SEO/GEO 360
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Otimização técnica e de conteúdo</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Google Business Profile otimizado</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Estratégia de conteúdo local relevante</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
