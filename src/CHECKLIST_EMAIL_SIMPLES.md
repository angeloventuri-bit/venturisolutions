# ✅ CHECKLIST - Configurar E-mail em 15 minutos

## 📋 Imprima ou deixe esta página aberta ao lado

---

## ETAPA 1: RESEND (3 minutos)

### 1.1 Criar conta
- [ ] Abrir https://resend.com
- [ ] Clicar em "Sign Up"
- [ ] Usar e-mail: `angelo.venturi@venturisolutions.com.br`
- [ ] Confirmar e-mail

### 1.2 Criar API Key
- [ ] Menu lateral → "API Keys"
- [ ] "Create API Key"
- [ ] Nome: `Venturi Website`
- [ ] Clicar "Create"
- [ ] **COPIAR A CHAVE** (começa com `re_`)

```
┌─────────────────────────────────────────────────┐
│ COLE SUA CHAVE DO RESEND AQUI:                  │
│                                                  │
│ re_____________________________________________  │
│                                                  │
└─────────────────────────────────────────────────┘
```

---

## ETAPA 2: SUPABASE - DATABASE (4 minutos)

### 2.1 Criar/acessar projeto
- [ ] Abrir https://supabase.com/dashboard
- [ ] Se não tem projeto: "New Project"
  - Nome: `Venturi Website`
  - Região: `South America (São Paulo)`
  - Senha do banco: `___________________` (anote!)
- [ ] Se já tem: abrir o projeto

### 2.2 Criar tabela de leads
- [ ] Menu lateral → "SQL Editor"
- [ ] "New Query"
- [ ] Copiar TUDO de `/supabase-schema/leads-table.sql`
- [ ] Colar no editor
- [ ] Clicar "Run"
- [ ] Verificar: "Success. No rows returned" ✅

### 2.3 Verificar tabela criada
- [ ] Menu lateral → "Table Editor"
- [ ] Ver tabela "leads" na lista ✅

---

## ETAPA 3: SUPABASE - EDGE FUNCTION (5 minutos)

### 3.1 Adicionar chave do Resend
- [ ] Menu lateral → "Project Settings" (⚙️)
- [ ] "Vault" (ou "Secrets")
- [ ] "New Secret"
- [ ] Name: `RESEND_API_KEY` (exatamente assim)
- [ ] Secret: Colar a chave do Resend (começa com `re_`)
- [ ] "Create Secret" ou "Save"

### 3.2 Criar Edge Function
- [ ] Menu lateral → "Edge Functions"
- [ ] "Create a new function"
- [ ] Nome: `send-lead-email` (exatamente assim)
- [ ] Copiar TUDO de `/supabase-functions/send-lead-email.ts`
- [ ] Colar no editor
- [ ] "Deploy function"
- [ ] Aguardar deploy (~20 seg)
- [ ] Status deve ficar "Deployed" 🟢

### 3.3 Copiar credenciais
- [ ] Menu lateral → "Settings" → "API"

**Project URL:**
```
┌─────────────────────────────────────────────────┐
│ https://________________________________.supabase.co │
└─────────────────────────────────────────────────┘
```

**Anon/Public Key:**
```
┌─────────────────────────────────────────────────┐
│ eyJ___________________________________________  │
│ _______________________________________________  │
│ _______________________________________________  │
└─────────────────────────────────────────────────┘
```

---

## ETAPA 4: CONECTAR AO SITE (3 minutos)

### 4.1 Configurar variáveis de ambiente

**Se estiver no Figma Make/Replit:**
- [ ] Variáveis já devem estar configuradas
- [ ] Pular para Etapa 5

**Se clonou o código localmente:**
- [ ] Criar arquivo `.env` na raiz do projeto
- [ ] Adicionar:
```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon-aqui
```
- [ ] Substituir pelos valores copiados acima
- [ ] Salvar arquivo
- [ ] Reiniciar servidor (`npm run dev`)

**Se já está em produção (Vercel/Netlify):**
- [ ] Settings do projeto → Environment Variables
- [ ] Adicionar `VITE_SUPABASE_URL` = valor copiado
- [ ] Adicionar `VITE_SUPABASE_ANON_KEY` = valor copiado
- [ ] Salvar e fazer redeploy

---

## ETAPA 5: TESTAR (2 minutos)

### 5.1 Abrir console do navegador
- [ ] Abrir seu site
- [ ] Pressionar **F12**
- [ ] Ir na aba "Console"
- [ ] Deixar aberta

### 5.2 Enviar formulário de teste
- [ ] Rolar até seção "Entre em contato"
- [ ] Preencher:
  - Nome: `Teste Angelo`
  - E-mail: `teste@teste.com`
  - Telefone: `11999999999`
  - Empresa: `Teste Ltda`
  - Desafio: `Testando e-mail`
- [ ] Clicar "Agendar Conversa com Especialista"

### 5.3 Verificar resultados

**No console do navegador:**
```javascript
✅ Lead salvo no CRM local: {...}
✅ Lead enviado e e-mail disparado para angelo.venturi@venturisolutions.com.br
```
- [ ] Viu essas mensagens? ✅

**No WhatsApp:**
- [ ] Abriu automaticamente? ✅

**No e-mail (angelo.venturi@venturisolutions.com.br):**
- [ ] Aguardar 10-30 segundos
- [ ] Recebeu e-mail com assunto: `🎯 Novo Lead: Teste Angelo - Teste Ltda`? ✅

**No Supabase:**
- [ ] Table Editor → leads
- [ ] Apareceu 1 linha nova? ✅
- [ ] Coluna `origem` tem valor? ✅

---

## 🎉 TUDO CERTO?

Se marcou TODOS os checkboxes acima:

✅ **PARABÉNS! Sistema 100% funcional!**

Agora você receberá e-mail automático toda vez que alguém preencher o formulário.

---

## ❌ ALGO DEU ERRADO?

### Console mostrou erro?

**Erro: "Supabase não configurado"**
→ Voltar para Etapa 4.1

**Erro: "FunctionsRelayError"**
→ Voltar para Etapa 3.2 (Edge Function)

**Erro: "RESEND_API_KEY is not defined"**
→ Voltar para Etapa 3.1 (Vault)

**Outro erro?**
→ Abrir `/DIAGNOSTICO_EMAIL.md`

---

## 📞 Ajuda Rápida

| Problema | Arquivo | Tempo |
|----------|---------|-------|
| Configurar do zero | `/CONFIGURAR_EMAIL_AGORA.md` | 15 min |
| Descobrir o que falta | `/TESTE_EMAIL_RAPIDO.md` | 2 min |
| Resolver erro específico | `/DIAGNOSTICO_EMAIL.md` | 5 min |
| Visão geral | `/COMECE_POR_AQUI_EMAIL.md` | - |

---

## 💡 Lembrete

**Grátis para sempre:**
- Resend: 100 e-mails/dia grátis
- Supabase: 500MB + 500k funções grátis

**Custo total: R$ 0,00** 🎉

---

**Data da configuração:** `____ / ____ / ____`

**Configurado por:** `_______________________`

**Status:** [ ] Funcionando ✅ | [ ] Em progresso ⏳ | [ ] Não funcionou ❌
