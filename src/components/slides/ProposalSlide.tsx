import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Card } from '../ui/card';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { Badge } from '../ui/badge';

export function ProposalSlide() {
  return (
    <div className="min-h-full p-8 py-12">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl">
            Nossa Proposta para Acelerar seu Crescimento
          </h1>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[30%]"></TableHead>
                <TableHead className="w-[25%]">
                  <div className="space-y-1">
                    <div>Pacote FUNDAÇÃO</div>
                    <div className="text-xs text-muted-foreground">Clareza e Direção</div>
                  </div>
                </TableHead>
                <TableHead className="w-[30%]">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span>Pacote ACELERAÇÃO</span>
                      <Badge variant="default" className="bg-primary">Recomendado</Badge>
                    </div>
                    <div className="text-xs text-muted-foreground">Domínio de Mercado e Geração de Demanda</div>
                  </div>
                </TableHead>
                <TableHead className="w-[15%]">
                  <div className="space-y-1">
                    <div>Soluções Modulares</div>
                    <div className="text-xs text-muted-foreground">Sob Consulta</div>
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Reestruturação Estratégica</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>R$ 8.500</span>
                  </div>
                  <div className="text-sm text-muted-foreground">(Investimento único)</div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-yellow-600" />
                    <span className="text-primary">Inclusa como Bônus</span>
                  </div>
                  <div className="text-sm text-muted-foreground">(Valor de R$ 8.500)</div>
                </TableCell>
                <TableCell>
                  <div className="text-sm">R$ 8.500</div>
                  <div className="text-xs text-muted-foreground">(investimento único)</div>
                </TableCell>
              </TableRow>
              
              <TableRow>
                <TableCell>Ads & Performance</TableCell>
                <TableCell>-</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>R$ 3.500/mês</span>
                  </div>
                  <div className="text-sm text-muted-foreground">(Plano Intermediário)</div>
                </TableCell>
                <TableCell className="text-sm">A partir de R$ 2.500/mês</TableCell>
              </TableRow>
              
              <TableRow>
                <TableCell>SEO & GEO 360</TableCell>
                <TableCell>-</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>R$ 4.500/mês</span>
                  </div>
                </TableCell>
                <TableCell className="text-sm">R$ 4.500/mês</TableCell>
              </TableRow>
              
              <TableRow>
                <TableCell>Sites & Landing Pages</TableCell>
                <TableCell>-</TableCell>
                <TableCell>-</TableCell>
                <TableCell className="text-sm">A partir de R$ 2.500</TableCell>
              </TableRow>
              
              <TableRow>
                <TableCell>Agentes de IA</TableCell>
                <TableCell>-</TableCell>
                <TableCell>-</TableCell>
                <TableCell className="text-sm">Setup + R$ 2.500/mês</TableCell>
              </TableRow>
              
              <TableRow className="bg-accent/50">
                <TableCell>Sua Proposta de Parceria</TableCell>
                <TableCell>
                  <div className="text-xl text-primary">R$ 8.500</div>
                  <div className="text-sm text-muted-foreground">Pagamento único</div>
                </TableCell>
                <TableCell>
                  <div className="text-xl text-primary">R$ 8.000/mês</div>
                  <div className="text-sm text-green-600">+ Reestruturação GRÁTIS</div>
                </TableCell>
                <TableCell className="text-sm">Sob Consulta</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <div className="space-y-4">
            <h3 className="text-xl flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              Condição Especial de Parceria
            </h3>
            <p className="text-lg leading-relaxed">
              No <span className="text-primary">Pacote Aceleração</span>, nós decidimos <span className="text-primary">investir em você</span>. 
              Arcamos com o custo integral da <span className="text-primary">Reestruturação Estratégica de R$ 8.500</span> para 
              garantir que a fundação do seu crescimento seja construída da maneira correta.
            </p>
            <p className="text-lg leading-relaxed">
              Fazemos isso porque temos total confiança de que os motores de crescimento que ativaremos juntos irão gerar 
              um retorno que justifica nosso investimento mútuo. <span className="text-primary">Nós só ganhamos se você ganhar</span>.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
