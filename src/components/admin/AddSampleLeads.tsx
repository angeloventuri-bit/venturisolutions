import { Button } from '../ui/button';
import { Plus } from 'lucide-react';
import { saveLead } from '../../utils/leadTracking';
import { toast } from 'sonner@2.0.3';

const sampleLeads = [
  {
    nome: 'João Silva',
    email: 'joao.silva@empresa.com.br',
    telefone: '(11) 98765-4321',
    empresa: 'Tech Solutions Ltda',
    desafio: 'Precisamos aumentar o tráfego qualificado para nosso site B2B e melhorar a taxa de conversão.',
    status: 'novo' as const,
  },
  {
    nome: 'Maria Santos',
    email: 'maria@startup.io',
    telefone: '(11) 97654-3210',
    empresa: 'Startup Inovadora',
    desafio: 'Queremos escalar nosso funil de vendas com Google Ads mas não sabemos por onde começar.',
    status: 'qualificado' as const,
  },
  {
    nome: 'Carlos Oliveira',
    email: 'carlos.oliveira@commerce.com.br',
    telefone: '(11) 96543-2109',
    empresa: 'E-commerce Fashion',
    desafio: 'Nosso CAC está muito alto e o ROI das campanhas está abaixo do esperado.',
    status: 'contato-inicial' as const,
  },
];

export function AddSampleLeads({ onLeadsAdded }: { onLeadsAdded: () => void }) {
  const handleAddSampleLeads = () => {
    sampleLeads.forEach(leadData => {
      saveLead(leadData);
    });
    
    toast.success('Leads de exemplo adicionados!', {
      description: `${sampleLeads.length} leads foram adicionados ao CRM.`,
    });
    
    onLeadsAdded();
  };

  return (
    <Button
      onClick={handleAddSampleLeads}
      variant="outline"
      size="sm"
      className="gap-2"
    >
      <Plus className="w-4 h-4" />
      Adicionar Leads de Exemplo
    </Button>
  );
}
