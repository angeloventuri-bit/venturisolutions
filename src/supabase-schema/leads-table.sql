-- Criar tabela de leads no Supabase
-- Execute este SQL no Supabase Dashboard > SQL Editor

-- Criar tabela leads
CREATE TABLE IF NOT EXISTS public.leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  
  -- Dados do lead
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  telefone TEXT,
  empresa TEXT,
  desafio TEXT,
  
  -- Status do lead
  status TEXT DEFAULT 'novo' CHECK (status IN ('novo', 'contatado', 'qualificado', 'proposta', 'ganho', 'perdido', 'arquivado')),
  
  -- Rastreamento
  origem TEXT,
  origem_detalhes JSONB,
  
  -- Metadados
  notas TEXT,
  valor_estimado DECIMAL(10, 2),
  data_contato TIMESTAMP WITH TIME ZONE,
  data_fechamento TIMESTAMP WITH TIME ZONE
);

-- Índices para performance
CREATE INDEX IF NOT EXISTS leads_email_idx ON public.leads(email);
CREATE INDEX IF NOT EXISTS leads_status_idx ON public.leads(status);
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON public.leads(created_at DESC);
CREATE INDEX IF NOT EXISTS leads_origem_idx ON public.leads(origem);

-- Trigger para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = timezone('utc'::text, now());
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_leads_updated_at 
  BEFORE UPDATE ON public.leads 
  FOR EACH ROW 
  EXECUTE FUNCTION public.update_updated_at_column();

-- Políticas de segurança (RLS)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Permitir inserção de qualquer pessoa (formulário público)
CREATE POLICY "Permitir inserção pública de leads"
  ON public.leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Apenas usuários autenticados podem ver/editar leads
CREATE POLICY "Apenas admin pode ver leads"
  ON public.leads
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Apenas admin pode atualizar leads"
  ON public.leads
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Comentários
COMMENT ON TABLE public.leads IS 'Tabela de leads capturados pelo site';
COMMENT ON COLUMN public.leads.origem IS 'Origem do lead: paid, organic, direct, social, referral';
COMMENT ON COLUMN public.leads.origem_detalhes IS 'Detalhes JSON do rastreamento (UTM params, referrer, etc)';
