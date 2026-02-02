import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  Phone, 
  Mail,
  MessageCircle,
  Plus,
  Search,
  Filter,
  Calendar,
  MapPin,
  Globe,
  Smartphone,
  Chrome,
  ExternalLink,
  Edit,
  Trash2,
  Save,
  X
} from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Badge } from '../ui/badge';
import { Lead, getLeads, updateLead, addNoteToLead, getLeadAnalytics } from '../../utils/leadTracking';
import { AddSampleLeads } from './AddSampleLeads';

const LEAD_STAGES = [
  { id: 'novo', label: 'Novo Lead', color: 'from-blue-500 to-blue-600' },
  { id: 'contato-inicial', label: 'Contato Inicial', color: 'from-purple-500 to-purple-600' },
  { id: 'qualificado', label: 'Qualificado', color: 'from-yellow-500 to-yellow-600' },
  { id: 'proposta', label: 'Proposta Enviada', color: 'from-orange-500 to-orange-600' },
  { id: 'negociacao', label: 'Em Negociação', color: 'from-pink-500 to-pink-600' },
  { id: 'ganho', label: 'Ganho 🎉', color: 'from-green-500 to-green-600' },
  { id: 'perdido', label: 'Perdido', color: 'from-gray-500 to-gray-600' },
] as const;

const sourceIcons = {
  organic: Globe,
  paid: TrendingUp,
  direct: MapPin,
  referral: ExternalLink,
  social: MessageCircle,
};

const sourceColors = {
  organic: 'bg-green-500/10 text-green-500 border-green-500/20',
  paid: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  direct: 'bg-gray-500/10 text-gray-500 border-gray-500/20',
  referral: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
  social: 'bg-pink-500/10 text-pink-500 border-pink-500/20',
};

export function CRMPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [editingNote, setEditingNote] = useState('');
  const [analytics, setAnalytics] = useState<ReturnType<typeof getLeadAnalytics>>();

  useEffect(() => {
    loadLeads();
  }, []);

  const loadLeads = () => {
    const allLeads = getLeads();
    setLeads(allLeads);
    setAnalytics(getLeadAnalytics());
  };

  const handleDragStart = (e: React.DragEvent, lead: Lead) => {
    e.dataTransfer.setData('leadId', lead.id);
  };

  const handleDrop = (e: React.DragEvent, newStatus: Lead['status']) => {
    e.preventDefault();
    const leadId = e.dataTransfer.getData('leadId');
    updateLead(leadId, { status: newStatus });
    loadLeads();
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleAddNote = (leadId: string) => {
    if (editingNote.trim()) {
      addNoteToLead(leadId, editingNote);
      setEditingNote('');
      loadLeads();
      // Refresh selected lead
      const updated = getLeads().find(l => l.id === leadId);
      if (updated) setSelectedLead(updated);
    }
  };

  const openWhatsApp = (phone: string) => {
    const cleanPhone = phone.replace(/\D/g, '');
    window.open(`https://wa.me/55${cleanPhone}`, '_blank');
  };

  const filteredLeads = leads.filter(lead =>
    lead.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.empresa.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header & Analytics */}
      <div>
        <h1 className="text-4xl mb-2">CRM - Gestão de Leads</h1>
        <p className="text-muted-foreground">
          Sistema completo de gestão comercial com rastreamento de origem
        </p>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-5 h-5 text-blue-500" />
            <span className="text-sm text-muted-foreground">Total de Leads</span>
          </div>
          <div className="text-3xl">{analytics?.total || 0}</div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-green-500/10 to-green-600/5 border-green-500/20">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-5 h-5 text-green-500" />
            <span className="text-sm text-muted-foreground">Tráfego Orgânico</span>
          </div>
          <div className="text-3xl">{analytics?.bySource.organic || 0}</div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-purple-500/20">
          <div className="flex items-center gap-3 mb-2">
            <DollarSign className="w-5 h-5 text-purple-500" />
            <span className="text-sm text-muted-foreground">Tráfego Pago</span>
          </div>
          <div className="text-3xl">{analytics?.bySource.paid || 0}</div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-orange-500/10 to-orange-600/5 border-orange-500/20">
          <div className="flex items-center gap-3 mb-2">
            <MessageCircle className="w-5 h-5 text-orange-500" />
            <span className="text-sm text-muted-foreground">Qualificados</span>
          </div>
          <div className="text-3xl">{analytics?.byStatus.qualificado || 0}</div>
        </Card>
      </div>

      {/* Search & Filters */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Buscar por nome, email ou empresa..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 glass border-primary/30"
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="w-4 h-4" />
          Filtros
        </Button>
        {leads.length === 0 && <AddSampleLeads onLeadsAdded={loadLeads} />}
      </div>

      {/* Empty State */}
      {leads.length === 0 && (
        <Card className="p-12 text-center bg-gradient-to-br from-primary/5 to-red-600/5 border-primary/20">
          <div className="max-w-md mx-auto">
            <Users className="w-16 h-16 text-primary mx-auto mb-4 opacity-50" />
            <h3 className="text-2xl mb-2">Nenhum lead ainda</h3>
            <p className="text-muted-foreground mb-6">
              Leads capturados pelo formulário de contato aparecerão aqui automaticamente com rastreamento completo de origem.
            </p>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>✅ Rastreamento automático de origem (orgânico/pago/direto)</p>
              <p>✅ Integração WhatsApp e Email</p>
              <p>✅ Sistema Kanban para gestão do funil</p>
              <p>✅ Analytics em tempo real</p>
            </div>
          </div>
        </Card>
      )}

      {/* Kanban Board */}
      {leads.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-x-auto pb-4">
          {LEAD_STAGES.map((stage) => {
            const stageLeads = filteredLeads.filter(lead => lead.status === stage.id);
          
          return (
            <div
              key={stage.id}
              onDrop={(e) => handleDrop(e, stage.id as Lead['status'])}
              onDragOver={handleDragOver}
              className="min-w-[280px]"
            >
              {/* Column Header */}
              <div className={`bg-gradient-to-r ${stage.color} rounded-t-xl p-4 mb-2`}>
                <div className="flex items-center justify-between text-white">
                  <span className="font-medium">{stage.label}</span>
                  <Badge variant="secondary" className="bg-white/20 text-white border-0">
                    {stageLeads.length}
                  </Badge>
                </div>
              </div>

              {/* Lead Cards */}
              <div className="space-y-3 min-h-[200px]">
                <AnimatePresence>
                  {stageLeads.map((lead) => {
                    const SourceIcon = sourceIcons[lead.source.type];
                    
                    return (
                      <motion.div
                        key={lead.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        draggable
                        onDragStart={(e) => handleDragStart(e as any, lead)}
                        onClick={() => setSelectedLead(lead)}
                        className="cursor-move"
                      >
                        <Card className="p-4 bg-card/50 border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg group">
                          {/* Lead Header */}
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <h4 className="font-medium mb-1 group-hover:text-primary transition-colors">
                                {lead.nome}
                              </h4>
                              <p className="text-xs text-muted-foreground">
                                {lead.empresa}
                              </p>
                            </div>
                            <Badge className={`${sourceColors[lead.source.type]} text-xs gap-1`}>
                              <SourceIcon className="w-3 h-3" />
                              {lead.source.type}
                            </Badge>
                          </div>

                          {/* Contact Info */}
                          <div className="space-y-2 mb-3">
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Mail className="w-3 h-3" />
                              <span className="truncate">{lead.email}</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Phone className="w-3 h-3" />
                              <span>{lead.telefone}</span>
                            </div>
                          </div>

                          {/* Quick Actions */}
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1 h-8 text-xs gap-1"
                              onClick={(e) => {
                                e.stopPropagation();
                                openWhatsApp(lead.telefone);
                              }}
                            >
                              <MessageCircle className="w-3 h-3" />
                              WhatsApp
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-8 w-8 p-0"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.location.href = `mailto:${lead.email}`;
                              }}
                            >
                              <Mail className="w-3 h-3" />
                            </Button>
                          </div>

                          {/* Source Details */}
                          {lead.source.campaign && (
                            <div className="mt-3 pt-3 border-t border-primary/10">
                              <p className="text-xs text-muted-foreground">
                                <strong>Campanha:</strong> {lead.source.campaign}
                              </p>
                            </div>
                          )}
                        </Card>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
        </div>
      )}

      {/* Lead Details Modal */}
      <AnimatePresence>
        {selectedLead && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLead(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-3xl md:max-h-[90vh] z-50"
            >
              <Card className="h-full overflow-auto p-6 glass-premium border-primary/30">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl mb-1">{selectedLead.nome}</h2>
                    <p className="text-muted-foreground">{selectedLead.empresa}</p>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setSelectedLead(null)}
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Contact & Source Info */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Contact Info */}
                  <div className="space-y-4">
                    <h3 className="font-medium flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      Informações de Contato
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        <a href={`mailto:${selectedLead.email}`} className="text-sm hover:text-primary transition-colors">
                          {selectedLead.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{selectedLead.telefone}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          className="ml-auto h-7 gap-1"
                          onClick={() => openWhatsApp(selectedLead.telefone)}
                        >
                          <MessageCircle className="w-3 h-3" />
                          WhatsApp
                        </Button>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">
                          {new Date(selectedLead.createdAt).toLocaleDateString('pt-BR')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Source Info */}
                  <div className="space-y-4">
                    <h3 className="font-medium flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      Origem do Lead
                    </h3>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Badge className={sourceColors[selectedLead.source.type]}>
                          {selectedLead.source.type.toUpperCase()}
                        </Badge>
                      </div>
                      {selectedLead.source.source && (
                        <p><strong>Fonte:</strong> {selectedLead.source.source}</p>
                      )}
                      {selectedLead.source.medium && (
                        <p><strong>Meio:</strong> {selectedLead.source.medium}</p>
                      )}
                      {selectedLead.source.campaign && (
                        <p><strong>Campanha:</strong> {selectedLead.source.campaign}</p>
                      )}
                      {selectedLead.source.device && (
                        <p className="flex items-center gap-2">
                          <Smartphone className="w-3 h-3" />
                          {selectedLead.source.device}
                        </p>
                      )}
                      {selectedLead.source.browser && (
                        <p className="flex items-center gap-2">
                          <Chrome className="w-3 h-3" />
                          {selectedLead.source.browser}
                        </p>
                      )}
                      {selectedLead.source.landingPage && (
                        <p><strong>Landing Page:</strong> {selectedLead.source.landingPage}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Business Info */}
                {(selectedLead.nicho || selectedLead.servicoInteresse || selectedLead.faturamentoMensal) && (
                  <div className="mb-6">
                    <h3 className="font-medium mb-3">Informações da Empresa</h3>
                    <Card className="p-4 bg-card/50 border-primary/10">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        {selectedLead.nicho && (
                          <div>
                            <span className="text-muted-foreground">Nicho:</span>
                            <p className="font-medium">{selectedLead.nicho}</p>
                          </div>
                        )}
                        {selectedLead.servicoInteresse && (
                          <div>
                            <span className="text-muted-foreground">Interesse:</span>
                            <p className="font-medium">{selectedLead.servicoInteresse}</p>
                          </div>
                        )}
                        {selectedLead.faturamentoMensal && (
                          <div>
                            <span className="text-muted-foreground">Faturamento Mensal:</span>
                            <p className="font-medium">{selectedLead.faturamentoMensal}</p>
                          </div>
                        )}
                      </div>
                    </Card>
                  </div>
                )}

                {/* Challenge */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Desafio Reportado</h3>
                  <Card className="p-4 bg-card/50 border-primary/10">
                    <p className="text-sm text-muted-foreground">{selectedLead.desafio}</p>
                  </Card>
                </div>

                {/* Notes */}
                <div>
                  <h3 className="font-medium mb-3">Anotações</h3>
                  
                  {/* Add Note */}
                  <div className="flex gap-2 mb-4">
                    <Textarea
                      value={editingNote}
                      onChange={(e) => setEditingNote(e.target.value)}
                      placeholder="Adicionar nova anotação..."
                      className="glass border-primary/30 min-h-[80px]"
                    />
                    <Button
                      onClick={() => handleAddNote(selectedLead.id)}
                      className="bg-gradient-to-r from-primary to-red-600"
                    >
                      <Save className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Notes List */}
                  <div className="space-y-2">
                    {selectedLead.notes && selectedLead.notes.length > 0 ? (
                      selectedLead.notes.map((note, index) => (
                        <Card key={index} className="p-3 bg-card/30 border-primary/10">
                          <p className="text-sm whitespace-pre-wrap">{note}</p>
                        </Card>
                      ))
                    ) : (
                      <p className="text-sm text-muted-foreground text-center py-4">
                        Nenhuma anotação ainda
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
