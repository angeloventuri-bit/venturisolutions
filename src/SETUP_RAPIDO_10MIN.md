# ⚡ Setup Rápido - 10 Minutos

## 🎯 Objetivo
Configurar notificações automáticas por e-mail quando alguém preencher o formulário.

---

## ✅ Passo 1: Resend (3 minutos)

### 1.1 Criar conta
- Acesse: **https://resend.com**
- Clique: **"Start Building"**
- Crie conta gratuita
- Confirme e-mail

### 1.2 Pegar API Key
- No dashboard: **"API Keys"** → **"Create API Key"**
- Nome: `Venturi Production`
- **COPIE a chave** (começa com `re_...`)
- ⚠️ **Cole num bloco de notas** - só aparece uma vez!

```
Exemplo: re_AbCdEfGh_1234567890aBcDeFgHiJkLmNoPqRsTuVwXyZ
```

---

## ✅ Passo 2: Supabase - Tabela (2 minutos)

### 2.1 Criar tabela de leads
1. Acesse: **https://supabase.com/dashboard**
2. Selecione: **Seu projeto Venturi**
3. Menu: **"SQL Editor"** → **"New Query"**
4. Copie TODO o conteúdo do arquivo: `/supabase-schema/leads-table.sql`
5. Cole no editor
6. Clique: **"Run"** (ou F5)
7. ✅ Deve aparecer: "Success. No rows returned"

**Verificação:**
```sql
SELECT * FROM leads LIMIT 1;
```
Se não der erro, está OK!

---

## ✅ Passo 3: Supabase - Edge Function (3 minutos)

### 3.1 Deploy via Dashboard (mais fácil)

1. No Supabase: **"Edge Functions"** → **"New Function"**
2. Nome: `send-lead-email`
3. Cole TODO o código de: `/supabase-functions/send-lead-email.ts`
4. Clique: **"Deploy"**

### 3.2 OU via CLI (alternativa)

```bash
# Instalar CLI
npm install -g supabase

# Login
supabase login

# Link projeto (pegar ID em Settings > General)
supabase link --project-ref SEU_PROJECT_ID

# Deploy
supabase functions deploy send-lead-email
```

---

## ✅ Passo 4: Supabase - Secret (1 minuto)

### 4.1 Adicionar API Key do Resend

1. No Supabase: **"Settings"** → **"Vault"** (ou "Secrets")
2. Clique: **"New Secret"**
3. Preencha:
   - **Name:** `RESEND_API_KEY`
   - **Value:** Cole a chave do Resend (aquela que começa com `re_...`)
4. Clique: **"Save"**

⚠️ **IMPORTANTE:** O nome deve ser exatamente `RESEND_API_KEY` (tudo maiúsculo)

---

## ✅ Passo 5: Testar (1 minuto)

### 5.1 Enviar lead de teste

1. Acesse seu site
2. Preencha o formulário:
   - Nome: Seu nome
   - E-mail: Seu e-mail pessoal
   - Telefone: Seu telefone
   - Empresa: Teste
   - Desafio: Testando sistema
3. Clique: **"Enviar"**

### 5.2 Verificar resultados

**✅ Lead no banco:**
1. Supabase → **"Table Editor"** → **"leads"**
2. Deve aparecer o lead que você acabou de enviar

**✅ E-mail recebido:**
1. Abra: `angelo.venturi@venturisolutions.com.br`
2. Aguarde até 30 segundos
3. Verifique SPAM se não chegar
4. Assunto: "🎯 Novo Lead: Seu Nome - Teste"

**✅ Logs da função:**
1. Supabase → **"Edge Functions"** → **"send-lead-email"** → **"Logs"**
2. Deve mostrar: "Success" ou "200 OK"

---

## ❓ Problemas Comuns

### "Edge Function not found"
**Solução:** Re-deploy a função (Passo 3)

### "RESEND_API_KEY not found"
**Solução:** Verifique se o nome do secret está correto (Passo 4)

### E-mail não chega
**Debug:**
```
1. Verifique logs da Edge Function
2. Teste a API Key do Resend em: https://resend.com/docs/send-with-curl
3. Verifique SPAM
4. Aguarde até 2 minutos
```

### Erro 401 Unauthorized
**Solução:** API Key do Resend inválida - crie uma nova (Passo 1)

---

## 🎯 Checklist Final

Marque conforme concluir:

- [ ] ✅ Conta criada no Resend
- [ ] ✅ API Key copiada
- [ ] ✅ Tabela `leads` criada no Supabase
- [ ] ✅ Edge Function deployada
- [ ] ✅ Secret `RESEND_API_KEY` adicionado
- [ ] ✅ Teste enviado com sucesso
- [ ] ✅ E-mail recebido

---

## 📧 O que você receberá

**Assunto:**
```
🎯 Novo Lead: [Nome] - [Empresa]
```

**Formato:**
- 🎨 E-mail HTML profissional
- 📊 Todos os dados do lead em tabela
- 🏷️ Origem rastreada (Google Ads, orgânico, etc.)
- ⚡ Botões de ação (E-mail, WhatsApp, CRM)
- 🔒 Visual dark theme Venturi

---

## 🚀 Pronto!

Agora você receberá **automaticamente** um e-mail sempre que alguém preencher o formulário.

**Tempo total:** ~10 minutos  
**Custo:** R$ 0,00 (tier gratuito)  
**Limite:** 100 e-mails/dia (mais que suficiente)

---

## 📖 Documentação Completa

Para configurações avançadas, veja:
- `/CONFIGURACAO_EMAIL_SUPABASE.md` - Guia completo
- `/supabase-functions/send-lead-email.ts` - Código da função
- `/supabase-schema/leads-table.sql` - Schema do banco

---

**Dúvidas? Veja os logs no Supabase ou console do navegador (F12)** 🛠️
