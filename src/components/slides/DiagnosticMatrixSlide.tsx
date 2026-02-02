import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Card } from '../ui/card';
import { ArrowRight } from 'lucide-react';

const matrixData = [
  {
    symptom: 'Investimento sem Retorno',
    cause: 'Falta de clareza no público, na oferta e nos canais corretos',
    primary: 'Reestruturação Estratégica',
    support: 'Ads & Performance, SEO/GEO 360',
  },
  {
    symptom: 'Estratégia Desconectada',
    cause: 'Ações táticas executadas sem um plano mestre que as integre',
    primary: 'Reestruturação Estratégica',
    support: 'Treinamento & Educação',
  },
  {
    symptom: 'Vendas e Marketing em Conflito',
    cause: 'Desalinhamento de metas, linguagem e processos entre as equipes',
    primary: 'Treinamento & Educação',
    support: 'Reestruturação Estratégica, Agentes de IA',
  },
  {
    symptom: 'Presença Digital que não Vende',
    cause: 'Ativos digitais com foco em estética, não em conversão',
    primary: 'Sites & Landing Pages',
    support: 'Ads & Performance, SEO/GEO 360',
  },
];

export function DiagnosticMatrixSlide() {
  return (
    <div className="min-h-full p-8 py-12">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl">
            A Matriz Diagnóstica
          </h1>
          <p className="text-xl text-muted-foreground">
            Conectando seus Desafios às Nossas Soluções
          </p>
        </div>

        <Card className="p-6">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[20%]">Sintoma Identificado</TableHead>
                  <TableHead className="w-[25%]">Causa Raiz</TableHead>
                  <TableHead className="w-[25%]">Solução Primária</TableHead>
                  <TableHead className="w-[30%]">Soluções de Suporte</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {matrixData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-destructive rounded-full flex-shrink-0" />
                        <span>{row.symptom}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{row.cause}</TableCell>
                    <TableCell>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-md">
                        <ArrowRight className="w-4 h-4" />
                        <span>{row.primary}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{row.support}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>

        <Card className="p-6 bg-primary/5 border-primary/20 text-center">
          <p className="text-lg">
            Para cada sintoma, existe uma <span className="text-primary">causa raiz</span> e um 
            <span className="text-primary"> conjunto de soluções integradas</span>. 
            Não tratamos os sintomas isoladamente; construímos um sistema que resolve a causa fundamental do problema.
          </p>
        </Card>
      </div>
    </div>
  );
}
