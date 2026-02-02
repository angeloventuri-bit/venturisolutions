# 🚀 Configuração de E-mails Automáticos - Supabase + Resend

## ✅ O que foi implementado

Sistema profissional de notificações por e-mail com:
- ✅ **Edge Function** no Supabase para enviar e-mails
- ✅ **Template HTML** profissional com visual Venturi
- ✅ **Banco de dados** para salvar leads permanentemente
- ✅ **Rastreamento automático** de origem (Google Ads, orgânico, etc.)
- ✅ **Fallback** via mailto se algo falhar
- ✅ **100% gratuito** (100 e-mails/dia)

---

## 📋 Checklist de Configuração

### ✅ Passo 1: Criar conta no Resend (2 minutos)

1. Acesse: **https://resend.com**
2. Clique em **"Start Building"** ou **"Sign Up"**
3. Crie conta gratuita
4. Confirme seu e-mail
5. No dashboard, clique em **"API Keys"**
6. Clique em **"Create API Key"**
7. Nome: `Venturi Solutions - Production`
8. Permissões: **Full Access** (ou apenas "Sending")
9. **COPIE a chave** (começa com `re_...`)
10. ⚠️ **GUARDE BEM** - ela só aparece uma vez!

---

### ✅ Passo 2: Configurar domínio no Resend (5 minutos - OPCIONAL)

**Se você quer enviar e-mails como `noreply@venturisolutions.com.br`:**

1. No Resend, vá em **"Domains"**
2. Clique em **"Add Domain"**
3. Digite: `venturisolutions.com.br`
4. Copie os registros DNS que aparecem
5. Adicione no seu provedor de domínio:
   - **TXT** para verificação
   - **MX** (opcional, para receber)
   - **DKIM** para autenticação
6. Aguarde propagação (5-30 minutos)
7. Clique em **"Verify Domain"** no Resend

**Se NÃO configurar domínio:**
- E-mails virão de: `noreply@resend.dev`
- Funciona perfeitamente, mas menos profissional

---

### ✅ Passo 3: Criar tabela no Supabase (1 minuto)

1. Acesse: **https://supabase.com/dashboard**
2. Selecione seu projeto Venturi Solutions
3. Vá em **"SQL Editor"** (menu lateral)
4. Clique em **"New Query"**
5. Cole o conteúdo do arquivo: `/supabase-schema/leads-table.sql`
6. Clique em **"Run"** (ou aperte F5)
7. ✅ Tabela `leads` criada com sucesso!

---

### ✅ Passo 4: Deploy da Edge Function (3 minutos)

**Opção A: Via Supabase Dashboard (Mais Fácil)**

1. No Supabase, vá em **"Edge Functions"**
2. Clique em **"New Function"**
3. Nome: `send-lead-email`
4. Cole o código do arquivo: `/supabase-functions/send-lead-email.ts`
5. Clique em **"Deploy"**

**Opção B: Via CLI (Mais Profissional)**

```bash
# 1. Instalar Supabase CLI
npm install -g supabase

# 2. Login no Supabase
supabase login

# 3. Link do projeto
supabase link --project-ref SEU_PROJECT_REF

# 4. Deploy da função
supabase functions deploy send-lead-email
```

---

### ✅ Passo 5: Adicionar API Key do Resend no Supabase (1 minuto)

1. No Supabase, vá em **"Settings"** > **"Vault"** (ou "Secrets")
2. Clique em **"New Secret"**
3. Nome: `RESEND_API_KEY`
4. Valor: Cole a chave que você copiou do Resend (começa com `re_...`)
5. Clique em **"Save"**

---

### ✅ Passo 6: Configurar variáveis de ambiente no Figma Make (OPCIONAL)

Se você estiver deployando para produção:

**No arquivo `.env` ou configuração de ambiente:**
```bash
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon-aqui
```

**No Figma Make, essas variáveis já devem estar configuradas automaticamente.**

---

## 🧪 Testando o Sistema

### Teste 1: Enviar lead do formulário

1. ✅ Acesse seu site
2. ✅ Preencha o formulário de contato
3. ✅ Clique em "Enviar"
4. ✅ Aguarde 5-10 segundos
5. ✅ Verifique seu e-mail: `angelo.venturi@venturisolutions.com.br`

### Teste 2: Verificar no banco de dados

1. ✅ Acesse Supabase > **"Table Editor"**
2. ✅ Abra a tabela `leads`
3. ✅ Você deve ver o lead recém-criado

### Teste 3: Ver logs da Edge Function

1. ✅ Acesse Supabase > **"Edge Functions"**
2. ✅ Clique em `send-lead-email`
3. ✅ Vá em **"Logs"**
4. ✅ Veja se há erros

---

## 📧 Exemplo de E-mail que Você Receberá

**Visual:**
- 🎨 Header vermelho bordô com logo Venturi
- 📊 Tabela formatada com todos os dados
- 🏷️ Badge colorido com origem do lead
- ⚡ Botões de ação rápida (E-mail, WhatsApp, CRM)
- 🔒 Design profissional dark theme

**Conteúdo:**
```
Assunto: 🎯 Novo Lead: João Silva - Empresa ABC

┌─────────────────────────────────────┐
│   🎯 Novo Lead Recebido             │
│   Venturi Solutions - Website       │
└─────────────────────────────────────┘

Informações do Lead
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Nome:      João Silva
E-mail:    joao@empresa.com
Telefone:  (11) 99999-9999
Empresa:   Empresa ABC
Desafio:   Precisamos aumentar vendas...

📊 Rastreamento
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Origem:    PAID (Google Ads)
Data:      04/11/2025 15:30

⚡ Ações Rápidas
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[📧 Responder E-mail] [💬 WhatsApp] [🗂️ Ver no CRM]
```

---

## 🔧 Troubleshooting

### Problema 1: "Edge Function not found"

**Solução:**
```bash
# Verificar se a função foi deployada
supabase functions list

# Re-deploiar
supabase functions deploy send-lead-email
```

### Problema 2: "RESEND_API_KEY not found"

**Solução:**
1. Verifique se adicionou o secret no Supabase
2. Nome deve ser exatamente: `RESEND_API_KEY`
3. Re-deploy a função após adicionar o secret

### Problema 3: E-mail não chega

**Checklist:**
- ✅ API Key do Resend está correta?
- ✅ Secret configurado no Supabase?
- ✅ Edge Function deployada?
- ✅ Verificou pasta SPAM?
- ✅ Domínio verificado no Resend? (se configurou)

**Debug:**
```bash
# Ver logs da Edge Function
supabase functions logs send-lead-email --tail
```

### Problema 4: Erro 401 Unauthorized

**Solução:**
- Verifique se a API Key do Resend é válida
- Crie uma nova API Key no Resend
- Atualize o secret no Supabase

### Problema 5: Leads não salvam no banco

**Solução:**
1. Verifique se a tabela foi criada:
```sql
SELECT * FROM leads LIMIT 1;
```
2. Verifique políticas RLS:
```sql
SELECT * FROM pg_policies WHERE tablename = 'leads';
```
3. Re-execute o SQL do arquivo `/supabase-schema/leads-table.sql`

---

## 📊 Monitoramento

### Ver todos os leads

```sql
SELECT 
  nome,
  email,
  empresa,
  origem,
  created_at
FROM leads
ORDER BY created_at DESC
LIMIT 10;
```

### Leads por origem

```sql
SELECT 
  origem,
  COUNT(*) as total
FROM leads
GROUP BY origem
ORDER BY total DESC;
```

### Leads das últimas 24h

```sql
SELECT *
FROM leads
WHERE created_at >= NOW() - INTERVAL '24 hours'
ORDER BY created_at DESC;
```

---

## 🎯 Funcionalidades Implementadas

| Recurso | Status | Descrição |
|---------|--------|-----------|
| **Edge Function** | ✅ | Código criado em `/supabase-functions/` |
| **Tabela SQL** | ✅ | Schema em `/supabase-schema/` |
| **Template HTML** | ✅ | E-mail profissional dark theme |
| **Rastreamento** | ✅ | UTM params + origem automática |
| **Fallback** | ✅ | Abre mailto se falhar |
| **WhatsApp** | ✅ | Abre automaticamente após envio |
| **CRM Local** | ✅ | Backup em localStorage |
| **Resend** | ⏳ | Aguardando configuração |
| **Domínio** | ⏳ | Opcional (pode configurar depois) |

---

## 💰 Custos

### Resend (Envio de E-mails)
- ✅ **Grátis:** 100 e-mails/dia (3.000/mês)
- ✅ **Pago:** $20/mês para 50.000 e-mails
- ✅ **Você precisa:** Tier grátis é suficiente

### Supabase (Banco + Edge Functions)
- ✅ **Grátis:** 500MB banco + 500.000 invocações/mês
- ✅ **Pago:** $25/mês para 8GB + 2M invocações
- ✅ **Você precisa:** Tier grátis é suficiente

**Total: R$ 0,00/mês** 🎉

---

## 🚀 Próximos Passos (Opcional)

### 1. Adicionar respostas automáticas
Enviar e-mail de boas-vindas para o lead

### 2. Integrar com CRM externo
Zapier, HubSpot, Pipedrive, etc.

### 3. Analytics de abertura
Ver quais e-mails foram abertos

### 4. Webhooks
Notificar Slack, Discord, etc.

### 5. Auto-resposta
E-mail automático para o lead confirmando recebimento

---

## ✅ Resumo: O que você precisa fazer AGORA

1. ✅ **Criar conta no Resend** (2 min)
2. ✅ **Copiar API Key** (1 min)
3. ✅ **Executar SQL no Supabase** (1 min)
4. ✅ **Deploy Edge Function** (3 min)
5. ✅ **Adicionar secret RESEND_API_KEY** (1 min)
6. ✅ **Testar enviando lead** (1 min)

**Tempo total: ~10 minutos** ⚡

---

## 📞 Precisa de Ajuda?

1. **Logs da Edge Function:** Supabase > Edge Functions > Logs
2. **Documentação Resend:** https://resend.com/docs
3. **Documentação Supabase:** https://supabase.com/docs/guides/functions
4. **Console do navegador:** Aperte F12 para ver erros

---

**Tudo pronto para configurar! 🚀**

Siga os 6 passos acima e em 10 minutos você estará recebendo e-mails automáticos de todos os leads.
