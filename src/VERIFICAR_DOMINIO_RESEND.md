# 🔧 Como Verificar Domínio no Resend

## ⚠️ Status Atual

**Problema:** O Resend está em modo de teste e só permite enviar e-mails para `angelo.venturi@venturisolutions.com.br` (e-mail verificado na conta).

**Solução:** Verificar o domínio `venturisolutions.com.br` no Resend para enviar e-mails para qualquer destinatário.

---

## 📧 E-mails Configurados

### Atualmente Funcional ✅
- **angelo.venturi@venturisolutions.com.br** - E-mail verificado na conta Resend

### Após Verificação do Domínio ✅
- **angelo.venturi@venturisolutions.com.br**
- **rafael.vianna@venturisolutions.com.br**
- **Qualquer outro e-mail @venturisolutions.com.br**

---

## 🚀 Passo a Passo para Verificar Domínio

### Etapa 1: Acessar o Resend

1. Acesse: **https://resend.com/login**
2. Faça login com a conta que tem a API key configurada
3. No menu lateral, clique em **"Domains"**

### Etapa 2: Adicionar Domínio

1. Clique no botão **"Add Domain"**
2. Digite: `venturisolutions.com.br`
3. Clique em **"Add"**

### Etapa 3: Configurar DNS

O Resend fornecerá **3 registros DNS** que você precisa adicionar:

#### Registros Necessários:

**1. SPF Record (TXT)**
```
Type: TXT
Name: @ (ou venturisolutions.com.br)
Value: v=spf1 include:resend.net ~all
TTL: 3600 (ou padrão)
```

**2. DKIM Record (TXT)**
```
Type: TXT
Name: resend._domainkey
Value: [valor fornecido pelo Resend - único para sua conta]
TTL: 3600 (ou padrão)
```

**3. DMARC Record (TXT)** *(Opcional mas recomendado)*
```
Type: TXT
Name: _dmarc
Value: v=DMARC1; p=none
TTL: 3600 (ou padrão)
```

### Etapa 4: Adicionar DNS no Provedor

**Onde adicionar:** No painel de controle do seu provedor de domínio (Registro.br, Hostinger, GoDaddy, etc.)

**Como adicionar:**

1. Acesse o painel DNS do seu provedor
2. Procure por "Gerenciar DNS" ou "DNS Records"
3. Adicione os 3 registros TXT fornecidos pelo Resend
4. Salve as alterações

**⏰ Tempo de Propagação:** 15 minutos a 48 horas (geralmente 1-2 horas)

### Etapa 5: Verificar no Resend

1. Volte ao painel do Resend
2. Clique em **"Verify"** ao lado do domínio
3. Aguarde a verificação (pode levar alguns minutos)
4. Status deve mudar para **"Verified" ✅**

---

## 📝 Após Verificação: Atualizar o Código

### Arquivo a Modificar
**Localização:** `/supabase/functions/server/index.tsx`

### Alterações Necessárias

**1. Mudar o endereço "from"** (linha ~274):
```typescript
// ANTES (modo teste)
from: 'Venturi Solutions <onboarding@resend.dev>',

// DEPOIS (domínio verificado)
from: 'Venturi Solutions <noreply@venturisolutions.com.br>',
```

**2. Adicionar segundo destinatário** (linha ~275):
```typescript
// ANTES (modo teste)
to: ['angelo.venturi@venturisolutions.com.br'],
cc: [], // After domain verification, add: 'rafael.vianna@venturisolutions.com.br'

// DEPOIS (domínio verificado)
to: ['angelo.venturi@venturisolutions.com.br', 'rafael.vianna@venturisolutions.com.br'],
```

**Ou usar CC para o segundo e-mail:**
```typescript
to: ['angelo.venturi@venturisolutions.com.br'],
cc: ['rafael.vianna@venturisolutions.com.br'],
```

---

## 🎯 Benefícios da Verificação

### Antes (Modo Teste)
- ❌ Apenas 1 destinatário (angelo.venturi)
- ❌ Endereço "from" genérico (@resend.dev)
- ❌ Limite de 100 e-mails/dia
- ⚠️ E-mails podem ir para spam

### Depois (Domínio Verificado)
- ✅ Múltiplos destinatários
- ✅ Endereço profissional (@venturisolutions.com.br)
- ✅ Limite maior (conforme plano)
- ✅ Melhor entregabilidade (menos spam)
- ✅ Profissionalismo e confiança

---

## 🔍 Solução de Problemas

### DNS não Verifica

**Problema:** Após adicionar DNS, ainda aparece "Not Verified"

**Soluções:**
1. Aguarde mais tempo (propagação pode levar até 48h)
2. Verifique se os registros foram adicionados corretamente
3. Use ferramentas online para verificar DNS:
   - https://mxtoolbox.com/SuperTool.aspx
   - https://dnschecker.org/
4. Confirme que não há registros duplicados
5. Limpe cache DNS local: `ipconfig /flushdns` (Windows) ou `sudo dscacheutil -flushcache` (Mac)

### E-mails Vão para Spam

**Soluções:**
1. Configure DMARC corretamente
2. Configure SPF e DKIM
3. Use conteúdo HTML bem formatado (já configurado ✅)
4. Evite palavras spam no assunto
5. Considere aquecer o domínio (enviar poucos e-mails inicialmente)

### Erro "Domain not found"

**Causa:** Domínio ainda não propagou nos DNS

**Solução:** Aguarde 1-4 horas e tente novamente

---

## 📊 Provedores DNS Comuns

### Registro.br
```
1. Acesse: https://registro.br
2. Faça login
3. Vá em "Painel de DNS"
4. Clique em "Adicionar Registro"
5. Selecione "TXT" e adicione os registros
```

### Hostinger
```
1. Acesse: hpanel.hostinger.com
2. Vá em "Domínios" → "DNS/Nameservers"
3. Clique em "Gerenciar"
4. Adicione os registros TXT
```

### GoDaddy
```
1. Acesse: godaddy.com/myproducts
2. Clique no domínio
3. Vá em "DNS Management"
4. Clique em "Add" e selecione "TXT"
5. Adicione os registros
```

### Cloudflare
```
1. Acesse: dash.cloudflare.com
2. Selecione o domínio
3. Vá em "DNS" → "Records"
4. Clique em "Add record"
5. Selecione "TXT" e adicione os registros
```

---

## ✅ Checklist de Verificação

### Antes de Começar
- [ ] Acesso ao painel DNS do domínio
- [ ] Login no Resend ativo
- [ ] API Key do Resend configurada no Supabase

### Durante a Configuração
- [ ] Domínio adicionado no Resend
- [ ] Registros DNS copiados corretamente
- [ ] SPF adicionado no DNS
- [ ] DKIM adicionado no DNS
- [ ] DMARC adicionado no DNS (opcional)
- [ ] Aguardado tempo de propagação (1-4h)

### Após Verificação
- [ ] Status "Verified" no Resend
- [ ] Código atualizado (from e to)
- [ ] Teste enviado com sucesso
- [ ] E-mails recebidos por ambos destinatários
- [ ] E-mails não foram para spam

---

## 🧪 Como Testar

### 1. Teste Simples
Após verificar o domínio e atualizar o código, preencha o formulário no site:
```
1. Acesse: [seu-dominio]/#cta
2. Preencha o formulário de contato
3. Verifique se ambos os e-mails receberam
```

### 2. Verificar Logs
```
1. Acesse o Resend Dashboard
2. Vá em "Emails" no menu
3. Verifique os e-mails enviados
4. Confira status de entrega
```

### 3. Verificar Console
No navegador, abra o Console (F12) e verifique:
```javascript
✅ Lead enviado e salvo no servidor
✅ E-mail disparado com sucesso para rafael.vianna e angelo.venturi
```

---

## 📞 Suporte

### Resend Support
- **Docs:** https://resend.com/docs
- **Support:** https://resend.com/support
- **Status:** https://status.resend.com

### DNS Help
- **MX Toolbox:** https://mxtoolbox.com/
- **DNS Checker:** https://dnschecker.org/
- **What's My DNS:** https://www.whatsmydns.net/

---

## 🎯 Resumo Rápido

**O que fazer agora:**

1. ✅ **Acesse:** https://resend.com/domains
2. ✅ **Adicione:** venturisolutions.com.br
3. ✅ **Configure:** 3 registros DNS (SPF, DKIM, DMARC)
4. ✅ **Aguarde:** 1-4 horas para propagação
5. ✅ **Verifique:** Status no Resend
6. ✅ **Atualize:** Código no arquivo `index.tsx`
7. ✅ **Teste:** Envie um lead pelo formulário

**Tempo estimado:** 30-40 minutos + tempo de propagação DNS

---

## 📝 Notas Importantes

⚠️ **Enquanto o domínio não for verificado:**
- E-mails serão enviados APENAS para `angelo.venturi@venturisolutions.com.br`
- O endereço "from" será `onboarding@resend.dev`
- Isso é suficiente para testes e operação temporária

✅ **Após verificação do domínio:**
- E-mails serão enviados para AMBOS os destinatários
- O endereço "from" será profissional `noreply@venturisolutions.com.br`
- Melhor entregabilidade e profissionalismo

🚀 **O sistema já está funcional:**
- Leads são capturados ✅
- E-mails são enviados ✅
- WhatsApp redireciona ✅
- CRM registra tudo ✅

**A verificação do domínio é uma melhoria, não um bloqueio!**
