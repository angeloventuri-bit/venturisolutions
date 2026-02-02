import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Badge } from '../ui/badge';
import { Switch } from '../ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { X, Plus, Save, Search } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { SEOAnalyzer } from './SEOAnalyzer';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  image: string;
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
}

interface BlogPostEditorProps {
  open: boolean;
  onClose: () => void;
  post?: BlogPost | null;
  onSave: (post: BlogPost) => void;
}

export function BlogPostEditor({ open, onClose, post, onSave }: BlogPostEditorProps) {
  const [formData, setFormData] = useState<BlogPost>({
    id: '',
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: 'Marketing Digital',
    tags: [],
    image: '',
    author: 'Angelo Venturi',
    date: new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }),
    readTime: '5 min',
    featured: false,
  });

  const [tagInput, setTagInput] = useState('');

  useEffect(() => {
    if (post) {
      setFormData(post);
    } else {
      // Reset form for new post
      setFormData({
        id: Date.now().toString(),
        title: '',
        slug: '',
        excerpt: '',
        content: '',
        category: 'Marketing Digital',
        tags: [],
        image: '',
        author: 'Angelo Venturi',
        date: new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }),
        readTime: '5 min',
        featured: false,
      });
    }
  }, [post, open]);

  const handleChange = (field: keyof BlogPost, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Auto-generate slug from title
    if (field === 'title') {
      const slug = value
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      setFormData(prev => ({ ...prev, slug }));
    }
  };

  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()]
      }));
      setTagInput('');
    }
  };

  const removeTag = (tag: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(t => t !== tag)
    }));
  };

  const handleSubmit = () => {
    // Validation
    if (!formData.title.trim()) {
      toast.error('Título é obrigatório');
      return;
    }
    if (!formData.excerpt.trim()) {
      toast.error('Descrição é obrigatória');
      return;
    }
    if (!formData.content.trim()) {
      toast.error('Conteúdo é obrigatório');
      return;
    }

    // Calculate read time based on content length
    const wordCount = formData.content.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / 200);
    
    onSave({
      ...formData,
      readTime: `${readTime} min`
    });
    
    toast.success(post ? 'Post atualizado com sucesso!' : 'Post criado com sucesso!');
    onClose();
  };

  const categories = [
    'Marketing Digital',
    'Performance & Ads',
    'SEO & GEO',
    'Tecnologia & IA',
    'Estratégia',
    'E-commerce'
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {post ? 'Editar Post' : 'Novo Post'}
          </DialogTitle>
          <DialogDescription>
            {post ? 'Edite as informações do post abaixo.' : 'Preencha as informações para criar um novo post.'}
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="content">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="content">Conteúdo</TabsTrigger>
            <TabsTrigger value="seo">SEO</TabsTrigger>
          </TabsList>
          <TabsContent value="content">
            <div className="space-y-6 py-4">
              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title">Título *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleChange('title', e.target.value)}
                  placeholder="Digite o título do post"
                  className="text-lg"
                />
              </div>

              {/* Slug (auto-generated) */}
              <div className="space-y-2">
                <Label htmlFor="slug">URL Slug (gerado automaticamente)</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => handleChange('slug', e.target.value)}
                  placeholder="url-do-post"
                  className="font-mono text-sm"
                />
              </div>

              {/* Excerpt */}
              <div className="space-y-2">
                <Label htmlFor="excerpt">Descrição / Resumo *</Label>
                <Textarea
                  id="excerpt"
                  value={formData.excerpt}
                  onChange={(e) => handleChange('excerpt', e.target.value)}
                  placeholder="Breve descrição do post (aparece nas listagens e meta description)"
                  rows={3}
                />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <Label htmlFor="content">Conteúdo *</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => handleChange('content', e.target.value)}
                  placeholder={`Escreva seu conteúdo em HTML. Exemplo:\n\n<h2>Introdução</h2>\n<p>Primeiro parágrafo com <strong>texto em negrito</strong>.</p>\n\n<h3>Subtópico</h3>\n<p>Outro parágrafo.</p>\n\n<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>`}
                  rows={12}
                  className="font-mono text-sm"
                />
                <p className="text-xs text-muted-foreground">
                  Suporta HTML. Use tags como &lt;h2&gt;, &lt;h3&gt;, &lt;p&gt;, &lt;strong&gt;, &lt;ul&gt;, etc.
                </p>
                <div className="mt-2 p-3 bg-primary/5 border border-primary/10 rounded-lg text-xs space-y-1">
                  <p className="font-semibold text-primary">💡 Dica de Formatação:</p>
                  <p className="text-muted-foreground">Use &lt;h2&gt; e &lt;h3&gt; para criar títulos que aparecerão automaticamente no índice lateral do artigo.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Category */}
                <div className="space-y-2">
                  <Label htmlFor="category">Categoria</Label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e) => handleChange('category', e.target.value)}
                    className="w-full h-10 px-3 rounded-md border border-input bg-background"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {/* Author */}
                <div className="space-y-2">
                  <Label htmlFor="author">Autor</Label>
                  <Input
                    id="author"
                    value={formData.author}
                    onChange={(e) => handleChange('author', e.target.value)}
                    placeholder="Nome do autor"
                  />
                </div>
              </div>

              {/* Image URL */}
              <div className="space-y-2">
                <Label htmlFor="image">URL da Imagem de Destaque</Label>
                <Input
                  id="image"
                  value={formData.image}
                  onChange={(e) => handleChange('image', e.target.value)}
                  placeholder="https://exemplo.com/imagem.jpg"
                  type="url"
                />
              </div>

              {/* Tags */}
              <div className="space-y-2">
                <Label htmlFor="tags">Tags</Label>
                <div className="flex gap-2">
                  <Input
                    id="tags"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                    placeholder="Digite uma tag e pressione Enter"
                  />
                  <Button type="button" onClick={addTag} size="icon">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {formData.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="gap-1">
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="hover:text-destructive"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Featured Toggle */}
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <Label htmlFor="featured" className="text-base">Post em Destaque</Label>
                  <p className="text-sm text-muted-foreground">
                    Posts em destaque aparecem com maior proeminência
                  </p>
                </div>
                <Switch
                  id="featured"
                  checked={formData.featured}
                  onCheckedChange={(checked) => handleChange('featured', checked)}
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="seo">
            <SEOAnalyzer
              title={formData.title}
              excerpt={formData.excerpt}
              content={formData.content}
              slug={formData.slug}
              tags={formData.tags}
              category={formData.category}
              author={formData.author}
              featuredImage={formData.image}
            />
          </TabsContent>
        </Tabs>

        <DialogFooter className="gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancelar
          </Button>
          <Button onClick={handleSubmit} className="gap-2">
            <Save className="w-4 h-4" />
            {post ? 'Salvar Alterações' : 'Criar Post'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}