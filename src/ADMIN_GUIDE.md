# 🎛️ Guia de Administração - Venturi Solutions

## 🌐 Acesso Rápido às Páginas Admin

### **URLs Diretas de Acesso:**

| Página | URL | Descrição |
|--------|-----|-----------|
| **Landing Page Pública** | `/` | Página inicial do site |
| **Gerenciador de Blog** | `/admin/blog` | Interface visual para gerenciar posts |
| **Apresentação Comercial** | `/admin/presentation` | Slides de vendas VaaS |
| **Precificação Detalhada** | `/admin/pricing` | Página de preços completa |

---

## 📝 Como Gerenciar o Blog (3 Métodos)

### **Método 1: Interface Visual** ⭐ RECOMENDADO

1. Acesse: `/admin/blog`
2. Você verá uma interface moderna com:
   - 📊 **Dashboard** com estatísticas (total de posts, featured, categorias)
   - 🔍 **Busca** por título, conteúdo ou tags
   - 🏷️ **Filtros** por categoria
   - 📋 **Lista visual** de todos os posts
   - ⚡ **Ações rápidas** (visualizar, editar, deletar)

**Funcionalidades:**
- Ver todos os posts em cards visuais
- Filtrar por categoria
- Buscar por palavras-chave
- Ver quais posts estão em destaque (⭐)
- Estatísticas gerais

---

### **Método 2: Comandos Textuais** 💬

Você pode me pedir para fazer qualquer operação:

#### **Ver Posts:**
```
"Mostre-me todos os posts do blog"
"Liste os posts da categoria Performance & Ads"
"Quais posts estão em destaque?"
```

#### **Adicionar Posts:**
```
"Crie um novo post sobre SEO local"
"Adicione um post sobre automação de vendas para B2B"
"Preciso de um post sobre landing pages de alta conversão"
```

#### **Editar Posts:**
```
"Mude a data do post ID 3 para hoje"
"Coloque o post sobre IA em destaque"
"Atualize o título do post sobre ROI"
"Adicione mais conteúdo ao post X"
```

#### **Remover Posts:**
```
"Delete o post ID 4"
"Remove o post sobre treinamento comercial"
```

#### **Buscar:**
```
"Procure posts que mencionam 'conversão'"
"Quais posts falam sobre Google Ads?"
```

---

### **Método 3: Edição Manual do Arquivo** 🔧

Para usuários técnicos:

1. Edite: `/content/blog-posts.ts`
2. Estrutura de um post:

```typescript
{
  id: '6',
  slug: 'url-do-post',
  title: 'Título do Post',
  excerpt: 'Descrição curta (150-180 caracteres)',
  category: 'Categoria',
  author: 'Equipe Venturi',
  date: '3 Nov 2025',
  readTime: '8 min',
  image: 'https://images.unsplash.com/...',
  tags: ['Tag1', 'Tag2', 'Tag3'],
  featured: true, // ou false
  content: `
# Título Principal

Seu conteúdo em Markdown aqui...
  `
}
```

---

## 🎯 Workflows Comuns

### **Publicar Post Diário:**

**Opção A - Rápida (Comando):**
```
"Crie um post sobre [tema do dia]"
Exemplo: "Crie um post sobre automação de email marketing"
```

Eu vou:
1. ✅ Buscar imagem relevante no Unsplash
2. ✅ Criar conteúdo completo estruturado
3. ✅ Adicionar ao arquivo blog-posts.ts
4. ✅ Configurar como featured automaticamente

**Opção B - Com Revisão:**
```
1. "Crie um rascunho de post sobre [tema]"
2. [você revisa o conteúdo]
3. "Aprova, publique o post"
```

---

### **Atualizar Post Existente:**

```
"Edite o post ID 2 e adicione uma seção sobre ROI"
"Atualize a imagem do post sobre landing pages"
"Mude o post X para não estar mais em destaque"
```

---

### **Organizar por Categorias:**

Categorias atuais:
- `Performance & Ads`
- `Tecnologia & IA`
- `SEO & GEO`
- `Estratégia Comercial`
- `Conversão & UX`
- `Reestruturação & Processos`

```
"Liste todos os posts de SEO"
"Quantos posts temos em cada categoria?"
"Crie um post de Tecnologia & IA"
```

---

### **Destacar/Desdestacar Posts:**

```
"Coloque o post ID 5 em destaque"
"Remove o destaque do post sobre ROI"
"Quais posts estão em destaque agora?"
```

**Máximo recomendado:** 2-3 posts featured por vez (aparecem na home)

---

## 🖼️ Gerenciamento de Imagens

### **Buscar Imagens do Unsplash:**

```
"Busque uma imagem para um post sobre estratégia digital"
"Preciso de uma imagem de tecnologia para o post X"
```

Eu vou retornar URLs prontas para usar.

### **Palavras-chave sugeridas:**

| Tema | Busca Unsplash |
|------|----------------|
| Ads/Performance | `business growth chart` |
| IA/Tecnologia | `digital technology network` |
| SEO/Marketing | `digital marketing strategy` |
| Vendas | `business meeting success` |
| Landing Pages | `website design mockup` |
| Estratégia | `strategy planning business` |

---

## 📊 Estatísticas e Análise

### **Ver Estatísticas:**

```
"Quantos posts temos no total?"
"Quais categorias têm mais posts?"
"Liste os últimos 5 posts publicados"
```

### **Dashboard Visual:**
Acesse `/admin/blog` para ver:
- Total de posts
- Posts em destaque
- Número de categorias
- Data do último post

---

## 🔄 Calendário Editorial Sugerido

| Dia | Categoria | Tema Exemplo |
|-----|-----------|--------------|
| **Segunda** | Performance & Ads | ROI, Google Ads, Meta Ads |
| **Terça** | SEO & GEO | Ranqueamento, tráfego orgânico |
| **Quarta** | Tecnologia & IA | Automação, agentes IA |
| **Quinta** | Estratégia Comercial | Vendas, processos, CRM |
| **Sexta** | Conversão & UX | Landing pages, design |

---

## ⚡ Comandos Rápidos (Cheat Sheet)

```bash
# VER
"Mostre todos os posts"
"Liste posts featured"
"Posts da categoria X"

# CRIAR
"Crie post sobre [tema]"
"Novo post de [categoria]"

# EDITAR
"Edite post ID X"
"Mude data do post Y"
"Adicione conteúdo ao post Z"

# DELETAR
"Delete post ID X"
"Remove post sobre [tema]"

# BUSCAR
"Procure posts sobre [palavra]"
"Quais posts mencionam [termo]?"

# IMAGENS
"Busque imagem sobre [tema]"
"Imagem para post de [categoria]"
```

---

## 🎨 Boas Práticas

### **Títulos:**
✅ "Como Aumentar ROI em 300% (7 Técnicas Comprovadas)"
❌ "Dicas de Marketing"

### **Excerpts:**
✅ Específico com benefício claro (150-180 caracteres)
❌ Vago ou muito longo

### **Featured:**
✅ Máximo 2-3 posts por vez
❌ Todos os posts featured

### **Imagens:**
✅ Relevantes ao tema, alta qualidade
❌ Genéricas ou baixa resolução

### **Categorias:**
✅ Use as categorias padrão existentes
❌ Crie categorias novas sem necessidade

### **Tags:**
✅ 3-6 tags específicas
❌ Muitas tags ou tags genéricas

---

## 🆘 Troubleshooting

### "Não consigo ver o post novo"
- Verifique se salvou o arquivo
- Atualize a página (F5)
- Verifique se não há erros de sintaxe

### "Imagem não carrega"
- Verifique se a URL do Unsplash está correta
- Teste a URL em uma nova aba

### "Post aparece duplicado"
- Verifique se o ID é único
- Verifique se o slug é único

---

## 📞 Suporte

**Para operações diárias, use comandos como:**

```
"Ajuda com gerenciamento de blog"
"Como faço para [ação]?"
"Crie [novo conteúdo]"
```

Estou aqui para ajudar com:
- ✅ Criar conteúdo completo
- ✅ Buscar imagens
- ✅ Editar posts
- ✅ Organizar categorias
- ✅ Gerar relatórios
- ✅ Sugestões de temas

---

**Última atualização:** 3 de Novembro de 2025
**Versão:** 1.0
