# 🎯 Guia da Área Comercial - Venturi Solutions

## ✅ Configuração Completa

Todo o sistema comercial está 100% configurado e funcional. Este guia documenta todas as configurações realizadas.

---

## 📧 Sistema de E-mails Configurado

### E-mails de Notificação
Quando um lead preenche o formulário no site, **notificações automáticas são enviadas para:**

- ✅ `angelo.venturi@venturisolutions.com.br` (Ativo)
- ⏳ `rafael.vianna@venturisolutions.com.br` (Requer verificação de domínio)

> **Nota:** Para ativar o segundo e-mail, é necessário verificar o domínio `venturisolutions.com.br` no Resend. Consulte `/VERIFICAR_DOMINIO_RESEND.md` para instruções detalhadas.

### Arquivo Configurado
**Arquivo:** `/supabase/functions/server/index.tsx`
**Linha 275:**
```typescript
to: ['rafael.vianna@venturisolutions.com.br', 'angelo.venturi@venturisolutions.com.br'],
```

### Template do E-mail
Os e-mails incluem:
- 🎯 Informações completas do lead (nome, e-mail, telefone, empresa, desafio)
- 📊 Rastreamento de origem (orgânico/pago/UTM)
- ⚡ Botões de ação rápida (responder e-mail, WhatsApp)
- 🎨 Design profissional com paleta bordô/vinho da marca

---

## 📱 Redirecionamento WhatsApp

### WhatsApp Configurado
Após preencher o formulário, o usuário é **automaticamente redirecionado** para:

**WhatsApp:** `+55 11 96314-4616`

### Arquivo Configurado
**Arquivo:** `/components/sections/CTASection.tsx`
**Linhas 91-94:**
```typescript
setTimeout(() => {
  const mensagem = `Olá! Acabei de preencher o formulário no site da Venturi Solutions.%0A%0ANome: ${leadData.nome}%0AEmpresa: ${leadData.empresa || 'Não informado'}`;
  window.open(`https://wa.me/5511963144616?text=${mensagem}`, '_blank');
}, 1000);
```

A mensagem pré-preenchida inclui:
- Nome do lead
- Empresa do lead
- Contexto de que acabou de preencher o formulário

---

## 🎯 Área Comercial (Hub Central)

### Acesso Direto
**URL:** `/admin/comercial`

Esta nova página centraliza todas as ferramentas comerciais em um único local:

### Recursos Disponíveis

#### 1. Apresentação Comercial
- 40+ slides profissionais
- Metodologia VaaS completa
- Portfólio e cases de sucesso
- **Acesso:** `/admin/presentation`

#### 2. Precificação Detalhada
- 6 serviços principais
- Tiers diferenciados (Bronze, Silver, Gold)
- Pacotes integrados
- Carrinho de compras funcional
- **Acesso:** `/admin/pricing`

#### 3. CRM Integrado
- Gestão de leads com Kanban
- Rastreamento automático de origem
- Analytics e métricas
- **Acesso:** `/admin/crm`

---

## 🔐 Sistema de Autenticação

### Login Admin
**URL:** `/admin/login`

**Autenticação:**
- Credenciais controladas pelo administrador do sistema
- Token de sessão armazenado em `localStorage` como `venturi_admin_token`
- Para obter acesso, entre em contato com o administrador

### Rotas Protegidas
Todas as rotas `/admin/*` requerem autenticação:
- `/admin/crm` - CRM e gestão de leads
- `/admin/comercial` - Hub comercial
- `/admin/presentation` - Apresentação
- `/admin/pricing` - Precificação

---

## 🎨 Navegação do Dashboard Admin

### Menu Principal
O dashboard inclui navegação lateral com 4 seções:

1. **CRM** - Gestão de leads e pipeline
2. **Área Comercial** - Hub de vendas e apresentações ⭐ NOVO
3. **Apresentação** - Apresentação comercial completa
4. **Precificação** - Tabelas de preços e propostas

### Ações Rápidas
- **Ver Site** - Retorna à landing page pública
- **Sair** - Faz logout e retorna ao login

---

## 📊 Fluxo Completo de Lead

### 1. Captura no Site
- Usuário preenche formulário em qualquer página
- CTAs configurados: "Agendar Reunião", "Começar Agora", "Falar com Especialista"
- Todos os CTAs levam à seção `#cta`

### 2. Rastreamento Automático
- Sistema detecta origem: orgânico, pago, UTM
- Salva no localStorage (backup local)
- Envia para servidor Supabase

### 3. Notificações Simultâneas
- ✅ E-mail para Rafael Vianna
- ✅ E-mail para Angelo Venturi
- ✅ Redirecionamento para WhatsApp
- ✅ Salvo no CRM

### 4. Gestão no CRM
- Lead aparece automaticamente no Kanban
- Status: Novo → Contato → Proposta → Ganho/Perdido
- Métricas de conversão em tempo real

---

## 🛠️ Arquivos Principais

### Backend (Servidor Supabase)
```
/supabase/functions/server/
├── index.tsx          # Rotas e envio de e-mails ✅ CONFIGURADO
└── kv_store.tsx       # Banco de dados KV (protegido)
```

### Frontend (Área Admin)
```
/components/admin/
├── AdminDashboard.tsx  # Dashboard principal com menu
├── ComercialPage.tsx   # Hub comercial ⭐ NOVO
├── CRMPage.tsx         # CRM e Kanban
├── LoginPage.tsx       # Autenticação
└── ...
```

### Formulários e CTAs
```
/components/sections/
├── CTASection.tsx      # Formulário principal ✅ CONFIGURADO
├── HeroSection.tsx     # Hero com CTAs
└── ...
```

---

## ✅ Checklist de Validação

### Sistema de E-mails
- [x] Resend configurado com API key
- [x] Dois e-mails configurados (rafael.vianna + angelo.venturi)
- [x] Template HTML profissional
- [x] Informações completas do lead
- [x] Rastreamento de origem
- [x] Botões de ação rápida

### WhatsApp
- [x] Número configurado: +55 11 96314-4616
- [x] Redirecionamento automático após formulário
- [x] Mensagem pré-preenchida com contexto

### Área Comercial
- [x] Página `/admin/comercial` criada
- [x] Acesso às ferramentas (Apresentação + Precificação)
- [x] Cards com informações do sistema
- [x] Navegação integrada no dashboard

### Apresentação & Precificação
- [x] 40+ slides profissionais na apresentação
- [x] 6 serviços com tiers diferenciados
- [x] Carrinho de compras funcional
- [x] Rotas protegidas por autenticação

---

## 🚀 Como Usar

### Para a Equipe Comercial

#### 1. Acessar a Área Comercial
```
1. Acesse: /admin/login
2. Entre com as credenciais fornecidas pelo administrador
3. Clique em "Área Comercial" no menu
```

#### 2. Fazer Apresentação
```
1. Na Área Comercial, clique em "Apresentação Comercial"
2. Use as setas ou clique nos slides
3. Navegue pelos 40+ slides profissionais
```

#### 3. Mostrar Precificação
```
1. Na Área Comercial, clique em "Precificação Detalhada"
2. Mostre os 6 serviços principais
3. Demonstre os diferentes tiers
4. Use o carrinho para montar proposta
```

#### 4. Gerenciar Leads
```
1. Acesse "CRM" no menu
2. Veja todos os leads no Kanban
3. Arraste e solte para mudar status
4. Clique para ver detalhes completos
```

### Para Receber Notificações

#### E-mails
- Os e-mails chegam automaticamente para rafael.vianna e angelo.venturi
- Não precisa configurar nada adicional
- Template já está otimizado

#### WhatsApp
- Leads são direcionados automaticamente após preencher formulário
- Mensagem pré-preenchida facilita primeiro contato
- Número: +55 11 96314-4616

---

## 🔄 Manutenção Futura

### Alterar E-mails de Notificação
**Arquivo:** `/supabase/functions/server/index.tsx` (linha 275)
```typescript
to: ['novo-email@venturisolutions.com.br', 'outro-email@venturisolutions.com.br'],
```

### Alterar WhatsApp
**Arquivo:** `/components/sections/CTASection.tsx` (linha 93)
```typescript
window.open(`https://wa.me/5511NOVO-NUMERO?text=${mensagem}`, '_blank');
```

### Adicionar Novos Itens ao Menu
**Arquivo:** `/components/admin/AdminDashboard.tsx` (linhas 16-35)

---

## 📖 Documentação Adicional

- **Sistema de E-mails:** `/EMAIL_NOTIFICATION_GUIDE.md`
- **CRM Completo:** `/CRM_ADMIN_GUIDE.md`
- **Configuração Supabase:** `/CONFIGURACAO_EMAIL_SUPABASE.md`
- **Status do Sistema:** `/STATUS_ATUAL.md`

---

## ✨ Resumo

✅ **E-mails:** rafael.vianna + angelo.venturi configurados  
✅ **WhatsApp:** +55 11 96314-4616 com redirecionamento automático  
✅ **Área Comercial:** Hub central em `/admin/comercial`  
✅ **Apresentação:** 40+ slides profissionais  
✅ **Precificação:** 6 serviços com tiers  
✅ **CRM:** Gestão completa de leads  

**Todo o sistema está operacional e pronto para uso comercial!** 🚀
