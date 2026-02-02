# ⚡ Comandos Prontos - Copy & Paste

## 📋 SQL para criar tabela (Supabase)

**Onde executar:** Supabase Dashboard > SQL Editor > New Query

```sql
-- Criar tabela de leads
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

-- Índices
CREATE INDEX IF NOT EXISTS leads_email_idx ON public.leads(email);
CREATE INDEX IF NOT EXISTS leads_status_idx ON public.leads(status);
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON public.leads(created_at DESC);
CREATE INDEX IF NOT EXISTS leads_origem_idx ON public.leads(origem);

-- Trigger para updated_at
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

-- RLS (Segurança)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Permitir inserção pública de leads"
  ON public.leads FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE POLICY "Apenas admin pode ver leads"
  ON public.leads FOR SELECT TO authenticated USING (true);

CREATE POLICY "Apenas admin pode atualizar leads"
  ON public.leads FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
```

---

## 🔧 Comandos CLI do Supabase

### Instalar CLI
```bash
npm install -g supabase
```

### Login
```bash
supabase login
```

### Link do projeto
```bash
# Substituir SEU_PROJECT_REF pelo ID do seu projeto
# Encontre em: Supabase Dashboard > Settings > General > Reference ID
supabase link --project-ref SEU_PROJECT_REF
```

### Deploy Edge Function
```bash
supabase functions deploy send-lead-email
```

### Ver logs em tempo real
```bash
supabase functions logs send-lead-email --tail
```

### Testar função localmente
```bash
supabase functions serve send-lead-email
```

---

## 📊 Queries SQL Úteis

### Ver todos os leads
```sql
SELECT 
  nome,
  email,
  telefone,
  empresa,
  origem,
  status,
  created_at
FROM leads
ORDER BY created_at DESC
LIMIT 20;
```

### Contar leads por origem
```sql
SELECT 
  origem,
  COUNT(*) as total,
  COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () as percentual
FROM leads
GROUP BY origem
ORDER BY total DESC;
```

### Leads das últimas 24 horas
```sql
SELECT *
FROM leads
WHERE created_at >= NOW() - INTERVAL '24 hours'
ORDER BY created_at DESC;
```

### Leads por status
```sql
SELECT 
  status,
  COUNT(*) as total
FROM leads
GROUP BY status
ORDER BY total DESC;
```

### Taxa de conversão por origem
```sql
SELECT 
  origem,
  COUNT(*) as total_leads,
  COUNT(CASE WHEN status = 'ganho' THEN 1 END) as vendas,
  ROUND(
    COUNT(CASE WHEN status = 'ganho' THEN 1 END) * 100.0 / COUNT(*),
    2
  ) as taxa_conversao
FROM leads
GROUP BY origem
ORDER BY taxa_conversao DESC;
```

### Leads sem contato há mais de 2 dias
```sql
SELECT 
  nome,
  email,
  telefone,
  empresa,
  created_at,
  EXTRACT(DAY FROM (NOW() - created_at)) as dias_sem_contato
FROM leads
WHERE status = 'novo'
  AND created_at < NOW() - INTERVAL '2 days'
ORDER BY created_at;
```

### Atualizar status de lead
```sql
UPDATE leads
SET 
  status = 'contatado',
  data_contato = NOW(),
  notas = 'Primeira reunião agendada'
WHERE email = 'cliente@exemplo.com';
```

### Buscar lead por e-mail
```sql
SELECT *
FROM leads
WHERE email ILIKE '%@empresa.com%'
ORDER BY created_at DESC;
```

### Estatísticas gerais
```sql
SELECT 
  COUNT(*) as total_leads,
  COUNT(CASE WHEN status = 'novo' THEN 1 END) as novos,
  COUNT(CASE WHEN status = 'contatado' THEN 1 END) as contatados,
  COUNT(CASE WHEN status = 'ganho' THEN 1 END) as ganhos,
  COUNT(CASE WHEN created_at >= NOW() - INTERVAL '7 days' THEN 1 END) as ultimos_7_dias,
  COUNT(CASE WHEN created_at >= NOW() - INTERVAL '30 days' THEN 1 END) as ultimos_30_dias
FROM leads;
```

---

## 🧪 Teste da Edge Function (curl)

### Testar envio de e-mail
```bash
# Substituir:
# - SEU_PROJECT_REF pelo ID do projeto
# - SUA_ANON_KEY pela chave anon do Supabase

curl -L -X POST \
  'https://SEU_PROJECT_REF.supabase.co/functions/v1/send-lead-email' \
  -H 'Authorization: Bearer SUA_ANON_KEY' \
  -H 'Content-Type: application/json' \
  --data '{
    "nome": "Teste",
    "email": "teste@teste.com",
    "telefone": "(11) 99999-9999",
    "empresa": "Empresa Teste",
    "desafio": "Testando o sistema",
    "origem": "direct",
    "origem_detalhes": "{\"type\":\"direct\"}"
  }'
```

---

## 🔐 Resend - Testar API Key

### Enviar e-mail de teste
```bash
# Substituir SUA_RESEND_API_KEY pela sua chave

curl -X POST 'https://api.resend.com/emails' \
  -H 'Authorization: Bearer SUA_RESEND_API_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "from": "Teste <onboarding@resend.dev>",
    "to": ["angelo.venturi@venturisolutions.com.br"],
    "subject": "Teste - Venturi Solutions",
    "html": "<h1>Sistema funcionando!</h1><p>Se você recebeu este e-mail, sua API Key está correta.</p>"
  }'
```

### Ver lista de e-mails enviados
```bash
curl 'https://api.resend.com/emails' \
  -H 'Authorization: Bearer SUA_RESEND_API_KEY'
```

---

## 🗑️ Limpeza (Se precisar recomeçar)

### Deletar tabela
```sql
DROP TABLE IF EXISTS public.leads CASCADE;
```

### Deletar Edge Function via CLI
```bash
supabase functions delete send-lead-email
```

### Remover secret
```sql
-- No Supabase Dashboard > Settings > Vault
-- Clique no secret RESEND_API_KEY > Delete
```

---

## 📦 Backup dos dados

### Exportar todos os leads para CSV
```sql
COPY (
  SELECT * FROM leads ORDER BY created_at DESC
) TO '/tmp/leads_backup.csv' WITH CSV HEADER;
```

### Exportar para JSON
```sql
SELECT json_agg(row_to_json(leads.*))
FROM leads;
```

---

## 🎯 Variáveis de Ambiente

### .env (Local)
```bash
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon-aqui
```

### Vercel / Netlify
```bash
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon-aqui
```

---

## 🔍 Debug

### Ver logs da Edge Function em tempo real
```bash
supabase functions logs send-lead-email --tail
```

### Ver logs no browser
```javascript
// Abra o console (F12) e digite:
localStorage.getItem('leads')
```

### Limpar localStorage
```javascript
// Console do navegador:
localStorage.clear()
```

### Testar rastreamento de origem
```javascript
// Console do navegador:
console.log(window.location.search) // Ver UTM params
console.log(document.referrer) // Ver de onde veio
```

---

## 📱 Testes de Origem

### Teste: Google Ads
```
https://seusite.com/?utm_source=google_ads&utm_medium=cpc&utm_campaign=teste
```

### Teste: Instagram
```
https://seusite.com/?utm_source=instagram&utm_medium=social&utm_campaign=stories
```

### Teste: Orgânico (Google)
```
# Abrir incógnito
# Pesquisar no Google
# Clicar no resultado
# Preencher formulário
```

### Teste: Direto
```
# Abrir incógnito
# Digitar URL diretamente
# Preencher formulário
```

---

## ✅ Verificação Final

### Checklist de testes
```bash
# 1. Tabela criada?
psql -h ... -d ... -c "SELECT COUNT(*) FROM leads;"

# 2. Edge Function deployada?
supabase functions list

# 3. Secret configurado?
# Verificar em: Supabase Dashboard > Settings > Vault

# 4. Resend funcionando?
curl -X POST 'https://api.resend.com/emails' \
  -H 'Authorization: Bearer SUA_KEY' \
  -H 'Content-Type: application/json' \
  -d '{"from":"test@resend.dev","to":["SEU_EMAIL"],"subject":"Teste","html":"OK"}'
```

---

**Copie e cole os comandos conforme necessário!** 🚀
