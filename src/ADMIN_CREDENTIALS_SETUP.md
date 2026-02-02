# 🔐 Configuração de Credenciais - Área Admin

## ⚠️ IMPORTANTE - Apenas para Administradores

Este guia é exclusivo para administradores do sistema configurarem as credenciais de acesso à área admin.

---

## 📝 Como Alterar as Credenciais

### Arquivo de Configuração
**Localização:** `/components/admin/LoginPage.tsx`

### Passos para Alteração

1. **Abra o arquivo LoginPage.tsx**
   ```
   /components/admin/LoginPage.tsx
   ```

2. **Localize o objeto ADMIN_CREDENTIALS (linhas 11-14)**
   ```typescript
   const ADMIN_CREDENTIALS = {
     username: 'admin',
     password: 'venturi2024' // Change this to a secure password
   };
   ```

3. **Altere o username e password**
   ```typescript
   const ADMIN_CREDENTIALS = {
     username: 'seu_usuario_aqui',
     password: 'sua_senha_segura_aqui'
   };
   ```

4. **Salve o arquivo**

---

## 🔒 Boas Práticas de Segurança

### Senha Segura
- Mínimo de 12 caracteres
- Combinação de letras maiúsculas e minúsculas
- Números e caracteres especiais
- Não use palavras comuns ou dados pessoais

### Exemplos de Senhas Fortes
```
✅ V3ntur1@2024#Secure!
✅ C0m3rc14l$Str0ng2024
✅ Adm1n!V3ntur1#Safe
```

### Exemplos de Senhas Fracas (NÃO USE)
```
❌ 123456
❌ admin123
❌ venturi
❌ password
```

---

## 👥 Compartilhamento de Credenciais

### Com a Equipe Comercial

**Método Seguro:**
1. **Não envie por e-mail não criptografado**
2. **Opções seguras:**
   - Reunião presencial ou chamada de vídeo
   - Mensagem criptografada (Signal, WhatsApp)
   - Gerenciador de senhas compartilhado
   - SMS com confirmação de recebimento

**Instruções para o Comercial:**
```
URL de Login: [seu-dominio]/admin/login
Usuário: [fornecer de forma segura]
Senha: [fornecer de forma segura]

Áreas disponíveis após login:
- CRM (/admin/crm)
- Área Comercial (/admin/comercial)
- Apresentação (/admin/presentation)
- Precificação (/admin/pricing)
```

---

## 🔄 Rotação de Senhas

### Quando Trocar a Senha

- ✅ A cada 90 dias (recomendado)
- ✅ Quando um membro da equipe sai
- ✅ Se houver suspeita de comprometimento
- ✅ Após acesso de terceiros (demonstrações, suporte)

### Processo de Troca

1. Altere as credenciais no arquivo `LoginPage.tsx`
2. Notifique a equipe autorizada com as novas credenciais
3. Confirme que todos conseguem acessar
4. Documente a data da troca (para controle interno)

---

## 🚀 Melhorias Futuras (Opcional)

Para ambientes de produção com múltiplos usuários, considere implementar:

### Sistema de Autenticação Robusto
- Supabase Auth (já disponível no projeto)
- Autenticação por e-mail/senha
- Autenticação social (Google, Microsoft)
- Autenticação de dois fatores (2FA)

### Gestão de Usuários
- Múltiplos usuários com credenciais individuais
- Níveis de permissão (admin, comercial, visualizador)
- Logs de acesso
- Expiração de sessão automática

### Implementação com Supabase Auth

Se desejar implementar um sistema mais robusto, o projeto já está configurado com Supabase. Entre em contato com o desenvolvedor para implementar:

- Cadastro de usuários
- Login com e-mail/senha
- Recuperação de senha
- Gerenciamento de sessões
- Controle de permissões por função

---

## 📞 Suporte

Para dúvidas sobre configuração de credenciais ou implementação de sistema de autenticação mais robusto:

- Consulte a documentação técnica
- Entre em contato com o desenvolvedor responsável
- Revise os guias de segurança do Supabase

---

## ⚠️ AVISO DE SEGURANÇA

**NUNCA:**
- ❌ Commit credenciais em repositórios públicos
- ❌ Compartilhe credenciais em canais não seguros
- ❌ Use a mesma senha em múltiplos sistemas
- ❌ Deixe credenciais expostas em documentação pública
- ❌ Armazene credenciais em texto plano em servidores

**SEMPRE:**
- ✅ Use senhas fortes e únicas
- ✅ Compartilhe credenciais de forma segura
- ✅ Troque senhas regularmente
- ✅ Monitore acessos suspeitos
- ✅ Mantenha backup seguro das credenciais

---

**Este documento contém informações sensíveis. Mantenha-o seguro e acessível apenas para administradores autorizados.**
