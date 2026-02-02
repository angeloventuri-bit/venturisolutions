# 🚨 ATENÇÃO: Configure para receber notificações de leads!

## Status Atual

✅ **Funcionando:**
- Lead é salvo no localStorage
- Redireciona para WhatsApp com dados do lead
- Toast de confirmação

❌ **Não configurado:**
- Você **NÃO** está recebendo notificações por e-mail
- Leads **NÃO** estão sendo salvos no banco de dados

---

## 🎯 Por que configurar?

Sem configuração, você só verá os leads:
1. Quando o cliente enviar mensagem no WhatsApp
2. No CRM admin (se o cliente vier pela URL rastreada)

**Com configuração (10 min):**
- ✅ E-mail automático toda vez que alguém preencher o formulário
- ✅ Leads salvos no banco de dados Supabase
- ✅ Relatórios e análises completas
- ✅ Backup automático de todos os contatos

---

## ⚡ Configuração Rápida (10 minutos)

### Passo 1: Crie conta no Resend (3 min)
1. Acesse: **https://resend.com**
2. Crie conta gratuita
3. Vá em **"API Keys"** → **"Create API Key"**
4. **COPIE** a chave (começa com `re_...`)

### Passo 2: Adicione no Supabase (2 min)
1. Acesse seu projeto Supabase
2. **Settings** → **Vault** (ou "Secrets")
3. **New Secret**:
   - Name: `RESEND_API_KEY`
   - Value: Cole a chave do Resend
4. **Save**

### Passo 3: Crie a tabela (2 min)
1. Supabase → **SQL Editor** → **New Query**
2. Copie TODO o conteúdo de: `/supabase-schema/leads-table.sql`
3. Cole e clique **Run**

### Passo 4: Deploy da função (2 min)
1. Supabase → **Edge Functions** → **New Function**
2. Nome: `send-lead-email`
3. Copie TODO o código de: `/supabase-functions/send-lead-email.ts`
4. **Deploy**

### Passo 5: Teste (1 min)
1. Preencha o formulário do seu site
2. Verifique se recebeu e-mail em: `angelo.venturi@venturisolutions.com.br`

---

## 📖 Precisa de ajuda?

Veja o guia completo passo-a-passo:
**`/SETUP_RAPIDO_10MIN.md`**

---

## 💰 Custo

**R$ 0,00** - Totalmente gratuito!
- Resend: 100 e-mails/dia grátis
- Supabase: Tier gratuito

---

## 🎯 Resultado

Você receberá e-mails automáticos como este:

**Assunto:** 🎯 Novo Lead: João Silva - Empresa XYZ

**Conteúdo:**
```
╔═══════════════════════════════════╗
║  NOVO LEAD - VENTURI SOLUTIONS   ║
╚═══════════════════════════════════╝

👤 Nome: João Silva
📧 E-mail: joao@empresa.com
📱 Telefone: (11) 98765-4321
🏢 Empresa: Empresa XYZ
💬 Desafio: Preciso aumentar vendas

📊 Origem: Google Ads
🏷️ UTM: campanha-black-friday

[📧 Responder]  [💬 WhatsApp]  [📊 Ver no CRM]
```

---

**⏱️ Tempo total: 10 minutos | Custo: R$ 0,00**

Configure agora e nunca perca um lead! 🚀
