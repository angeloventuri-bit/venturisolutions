# 📧 CONFIGURAR E-MAIL - Guia Visual Completo

## 🎯 O que você vai conseguir

Após esta configuração (10-15 minutos), você receberá **automaticamente** em `angelo.venturi@venturisolutions.com.br`:

✅ E-mail toda vez que alguém preencher o formulário  
✅ Leads salvos no banco Supabase  
✅ Rastreamento completo de origem (orgânico/pago/UTM)  
✅ Botões para responder direto por e-mail ou WhatsApp  

---

## 🚀 PASSO 1: Criar conta no Resend (3 minutos)

### 1.1 Acessar Resend
🌐 Abra: **https://resend.com**

### 1.2 Criar conta
- Clique em **"Sign Up"** ou **"Get Started"**
- Use seu e-mail: `angelo.venturi@venturisolutions.com.br`
- Confirme o e-mail

### 1.3 Criar API Key
1. No dashboard do Resend, procure por **"API Keys"** no menu lateral
2. Clique em **"Create API Key"**
3. Nome sugerido: `Venturi Website Leads`
4. Permissões: **"Sending access"** (já vem selecionado)
5. Clique em **"Create"**
6. ⚠️ **COPIE AGORA** - essa chave só aparece uma vez!
   - Ela começa com `re_...`
   - Exemplo: `re_123abc456def789ghi`

### 1.4 Configurar domínio de envio (OPCIONAL - mas recomendado)

**Opção A: Usar domínio gratuito do Resend (mais rápido)**
- Não precisa fazer nada
- E-mails virão de: `noreply@resend.dev`
- ✅ Funciona imediatamente

**Opção B: Usar seu domínio (mais profissional)**
1. No Resend, vá em **"Domains"**
2. Clique em **"Add Domain"**
3. Digite: `venturisolutions.com.br`
4. Copie os registros DNS que aparecerem
5. Adicione no seu provedor de domínio (Registro.br, GoDaddy, etc)
6. Aguarde propagação (pode levar até 24h)
7. E-mails virão de: `noreply@venturisolutions.com.br`

**💡 Recomendação:** Comece com a Opção A para testar agora, configure a Opção B depois.

---

## 🗄️ PASSO 2: Configurar Supabase (7 minutos)

### 2.1 Acessar seu projeto Supabase
🌐 Acesse: **https://supabase.com/dashboard**

Se ainda não tem projeto:
1. Clique em **"New Project"**
2. Nome: `Venturi Website`
3. Database Password: Escolha uma senha forte (ANOTE!)
4. Region: `South America (São Paulo)`
5. Clique em **"Create new project"**
6. Aguarde 2-3 minutos enquanto cria

### 2.2 Adicionar a API Key do Resend

1. No menu lateral do Supabase, vá em **"Project Settings"** (ícone de engrenagem)
2. Clique em **"Vault"** (ou **"Secrets"** em projetos mais antigos)
3. Clique em **"New Secret"**
4. Preencha:
   - **Name:** `RESEND_API_KEY`
   - **Secret:** Cole a chave que você copiou do Resend (começa com `re_...`)
5. Clique em **"Create Secret"** ou **"Save"**

### 2.3 Criar a tabela de leads

1. No menu lateral, vá em **"SQL Editor"**
2. Clique em **"New Query"**
3. Copie TODO o código do arquivo `/supabase-schema/leads-table.sql`
4. Cole no editor SQL
5. Clique em **"Run"** (ou pressione Ctrl+Enter)
6. ✅ Você deve ver: "Success. No rows returned"

**Verificar se funcionou:**
1. Vá em **"Table Editor"** no menu lateral
2. Você deve ver a tabela **"leads"**
3. Ela estará vazia (por enquanto)

### 2.4 Criar a Edge Function

1. No menu lateral, vá em **"Edge Functions"**
2. Clique em **"Create a new function"** ou **"Deploy new function"**
3. **Nome da função:** `send-lead-email` (exatamente assim!)
4. Copie TODO o código do arquivo `/supabase-functions/send-lead-email.ts`
5. Cole no editor
6. Clique em **"Deploy function"**
7. Aguarde o deploy (10-20 segundos)
8. ✅ Status deve ficar **"Deployed"** com bolinha verde

**Verificar se funcionou:**
1. A função deve aparecer na lista com status verde
2. Anote a URL (algo como: `https://[seu-projeto].supabase.co/functions/v1/send-lead-email`)

### 2.5 Copiar credenciais do Supabase

Você precisará de 2 chaves:

**Chave 1: Project URL**
1. **Settings** → **API** → **Project URL**
2. Exemplo: `https://abcdefgh.supabase.co`
3. COPIE e ANOTE

**Chave 2: Anon/Public Key**
1. **Settings** → **API** → **Project API keys** → **anon/public**
2. É uma chave LONGA começando com `eyJ...`
3. COPIE e ANOTE

---

## 🔌 PASSO 3: Conectar ao seu site (2 minutos)

### 3.1 Configurar variáveis de ambiente

**Se você estiver usando o Figma Make:**
1. As variáveis já devem estar configuradas automaticamente
2. Verifique no console do navegador ao enviar um lead

**Se você clonou o código:**
1. Crie um arquivo `.env` na raiz do projeto
2. Adicione:
```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon-aqui
```
3. Substitua pelos valores que você copiou
4. Reinicie o servidor de desenvolvimento

---

## ✅ PASSO 4: Testar (2 minutos)

### 4.1 Testar no site
1. Acesse seu site: `https://seu-site.com`
2. Role até o formulário de contato
3. Preencha com dados de teste:
   - Nome: `Teste Angelo`
   - E-mail: `teste@teste.com`
   - Telefone: `(11) 98765-4321`
   - Empresa: `Teste Ltda`
   - Desafio: `Testando sistema de e-mail`
4. Clique em **"Agendar Conversa com Especialista"**

### 4.2 Verificar resultados

**No navegador:**
- ✅ Toast de sucesso deve aparecer
- ✅ Deve abrir WhatsApp automaticamente
- ✅ Console deve mostrar: `✅ Lead enviado e e-mail disparado`

**No seu e-mail (angelo.venturi@venturisolutions.com.br):**
- ⏱️ Aguarde 10-30 segundos
- ✅ Você deve receber um e-mail com assunto: `🎯 Novo Lead: Teste Angelo - Teste Ltda`
- ✅ O e-mail terá visual dark com tema bordô/vinho
- ✅ Botões para responder direto

**No Supabase:**
1. Vá em **Table Editor** → **leads**
2. ✅ Deve ter 1 linha com os dados do teste
3. ✅ Coluna `origem` deve mostrar o tipo (organic/paid/direct)

### 4.3 Se NÃO funcionou

**Verifique os logs:**

1. **Console do navegador (F12):**
   - Procure por mensagens de erro
   - Deve ter: `✅ Lead enviado e e-mail disparado`

2. **Logs da Edge Function no Supabase:**
   - Supabase → **Edge Functions** → `send-lead-email` → **Logs**
   - Procure por erros

3. **Erros comuns:**

| Erro | Solução |
|------|---------|
| `RESEND_API_KEY is not defined` | Volte ao Passo 2.2 - adicione a chave no Vault |
| `Failed to invoke function` | Verifique se a função foi deployed corretamente |
| `relation "leads" does not exist` | Volte ao Passo 2.3 - execute o SQL novamente |
| `Invalid API key` | A chave do Resend está errada - gere uma nova |
| `CORS error` | A Edge Function não está com CORS configurado corretamente |

---

## 🎨 PASSO 5: Personalizar (OPCIONAL)

### Mudar e-mail de destino

1. Abra `/supabase-functions/send-lead-email.ts`
2. Linha 224: `to: ['angelo.venturi@venturisolutions.com.br']`
3. Altere para seu e-mail
4. Re-deploy da função no Supabase

### Adicionar múltiplos destinatários

```typescript
to: [
  'angelo.venturi@venturisolutions.com.br',
  'comercial@venturisolutions.com.br',
  'vendas@venturisolutions.com.br'
]
```

### Mudar domínio do remetente

1. Configure seu domínio no Resend (Passo 1.4 - Opção B)
2. Altere linha 223:
```typescript
from: 'Venturi Solutions <noreply@venturisolutions.com.br>'
```

---

## 💰 Custos

**Resend (E-mail):**
- ✅ **100 e-mails/dia GRÁTIS**
- ✅ 3.000 e-mails/mês GRÁTIS
- Se precisar mais: $0.10 por 1.000 e-mails extras

**Supabase (Banco + Functions):**
- ✅ **500MB de banco GRÁTIS**
- ✅ 500.000 chamadas de funções/mês GRÁTIS
- ✅ 2GB de transferência GRÁTIS

**Total: R$ 0,00** para até 100 leads/dia 🎉

---

## 📊 Monitoramento

### Ver leads no Supabase
1. Supabase → **Table Editor** → **leads**
2. Você verá todos os leads com origem rastreada

### Ver logs de e-mails no Resend
1. Resend → **Logs**
2. Você verá todos os e-mails enviados
3. Status: Delivered, Bounced, etc

### Ver no CRM Admin
1. Acesse: `seu-site.com/admin/crm`
2. Senha: `venturi2024` (configure depois)
3. Dashboard Kanban com todos os leads

---

## 🆘 Precisa de ajuda?

### Documentação oficial
- 📧 Resend: https://resend.com/docs
- 🗄️ Supabase: https://supabase.com/docs

### Guias neste projeto
- `/SETUP_RAPIDO_10MIN.md` - Versão condensada
- `/EMAIL_NOTIFICATION_GUIDE.md` - Guia técnico completo
- `/CRM_ADMIN_GUIDE.md` - Como usar o CRM

### Verificar status
Execute um lead de teste e veja os logs no console:
```
✅ Lead salvo no CRM local: {...}
✅ Lead enviado e e-mail disparado para angelo.venturi@venturisolutions.com.br
```

---

## ✅ Checklist Final

- [ ] Conta criada no Resend
- [ ] API Key do Resend copiada
- [ ] Projeto criado no Supabase
- [ ] API Key do Resend adicionada no Vault do Supabase
- [ ] Tabela `leads` criada (SQL executado)
- [ ] Edge Function `send-lead-email` deployed
- [ ] Variáveis de ambiente configuradas no site
- [ ] Teste realizado com sucesso
- [ ] E-mail recebido em angelo.venturi@venturisolutions.com.br
- [ ] Lead apareceu na tabela do Supabase

---

**🎉 Parabéns! Seu sistema de notificação está funcionando!**

Agora você receberá um e-mail automático toda vez que alguém preencher o formulário, com todas as informações do lead e origem rastreada.

---

**⏱️ Tempo total: 10-15 minutos | 💰 Custo: R$ 0,00**
