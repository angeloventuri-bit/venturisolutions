import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { 
  Search, 
  Plus, 
  Edit, 
  Trash2, 
  Star, 
  Calendar,
  Tag,
  Eye,
  ChevronRight,
  AlertCircle
} from 'lucide-react';
import { BlogPostEditor } from './BlogPostEditor';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '../ui/alert-dialog';
import { toast } from 'sonner@2.0.3';

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

// Local storage key
const BLOG_POSTS_KEY = 'venturi_blog_posts';

// Initial posts data
const initialPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Guia de campanha SEM eficaz: domine estratégias, parcerias e ROI para ampliar seu negócio',
    slug: 'guia-campanha-sem-eficaz-estrategias-roi',
    excerpt: 'Um guia completo para criar campanhas de Search Engine Marketing (SEM) que realmente funcionam, com estratégias práticas, escolha de parceiros e otimização de ROI.',
    content: '<h2>O que é SEM e por que investir?</h2><p>Search Engine Marketing (SEM) é uma das estratégias mais eficazes para aumentar a visibilidade online...</p>',
    category: 'Performance & Ads',
    tags: ['SEM', 'Google Ads', 'ROI', 'Performance', 'Estratégia Digital'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    author: 'Angelo Venturi',
    date: '30 Ago 2025',
    readTime: '12 min',
    featured: true
  },
  {
    id: '2',
    title: 'Transforme Seu SEO em uma Máquina de Vendas: guia completo para 2025',
    slug: 'transforme-seo-maquina-vendas-2025',
    excerpt: 'O guia definitivo para transformar seu SEO de uma estratégia de visibilidade em uma verdadeira máquina de geração de vendas. Aprenda as 9 estratégias essenciais para 2025.',
    content: '<h2>Por que SEO é mais que rankings?</h2><p>SEO moderno vai muito além de posições no Google...</p>',
    category: 'SEO & GEO',
    tags: ['SEO', 'Busca Orgânica', 'Estratégia', 'Conversão', 'Vendas'],
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&q=80',
    author: 'Angelo Venturi',
    date: '27 Ago 2025',
    readTime: '15 min',
    featured: true
  },
  {
    id: '3',
    title: 'A transformação das buscas por produtos: o que é AI Optimization (AIO) e por que ela é essencial para o seu e-commerce em 2025',
    slug: 'transformacao-buscas-ai-optimization-ecommerce-2025',
    excerpt: 'Entenda como a Inteligência Artificial está revolucionando a forma como consumidores buscam produtos online e por que sua loja precisa se adaptar agora para não ficar para trás.',
    content: '<h2>A Revolução das Buscas com IA</h2><p>A forma como as pessoas buscam produtos mudou drasticamente...</p>',
    category: 'Tecnologia & IA',
    tags: ['IA', 'E-commerce', 'AIO', 'Busca', 'Otimização'],
    image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&q=80',
    author: 'Angelo Venturi',
    date: '30 Ago 2025',
    readTime: '18 min',
    featured: true
  }
];

export function BlogManager() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [editorOpen, setEditorOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState<BlogPost | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState<string | null>(null);

  // Load posts from localStorage on mount
  useEffect(() => {
    const savedPosts = localStorage.getItem(BLOG_POSTS_KEY);
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    } else {
      // Initialize with default posts
      setPosts(initialPosts);
      localStorage.setItem(BLOG_POSTS_KEY, JSON.stringify(initialPosts));
    }
  }, []);

  // Save posts to localStorage whenever they change
  const savePosts = (updatedPosts: BlogPost[]) => {
    setPosts(updatedPosts);
    localStorage.setItem(BLOG_POSTS_KEY, JSON.stringify(updatedPosts));
  };

  const categories = Array.from(new Set(posts.map(post => post.category)));

  const filteredPosts = posts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = filterCategory === 'all' || post.category === filterCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleNewPost = () => {
    setCurrentPost(null);
    setEditorOpen(true);
  };

  const handleEditPost = (post: BlogPost) => {
    setCurrentPost(post);
    setEditorOpen(true);
  };

  const handleSavePost = (post: BlogPost) => {
    const existingIndex = posts.findIndex(p => p.id === post.id);
    
    if (existingIndex >= 0) {
      // Update existing post
      const updatedPosts = [...posts];
      updatedPosts[existingIndex] = post;
      savePosts(updatedPosts);
    } else {
      // Add new post
      savePosts([post, ...posts]);
    }
  };

  const handleDeleteClick = (postId: string) => {
    setPostToDelete(postId);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (postToDelete) {
      const updatedPosts = posts.filter(p => p.id !== postToDelete);
      savePosts(updatedPosts);
      toast.success('Post excluído com sucesso!');
      setDeleteDialogOpen(false);
      setPostToDelete(null);
    }
  };

  const handleViewPost = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl mb-2">Gerenciador de Blog</h1>
            <p className="text-lg text-muted-foreground">
              {posts.length} posts publicados
            </p>
          </div>
          <Button className="gap-2" onClick={handleNewPost}>
            <Plus className="w-4 h-4" />
            Novo Post
          </Button>
        </div>

        {/* Filters */}
        <Card className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por título, conteúdo ou tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              <Button
                variant={filterCategory === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterCategory('all')}
              >
                Todas
              </Button>
              {categories.map(category => (
                <Button
                  key={category}
                  variant={filterCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilterCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </Card>

        {/* Results Count */}
        <div className="text-sm text-muted-foreground">
          {filteredPosts.length} {filteredPosts.length === 1 ? 'post encontrado' : 'posts encontrados'}
        </div>

        {/* Posts List */}
        <div className="space-y-4">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="p-6 hover:border-primary/50 transition-colors">
              <div className="flex gap-6">
                {/* Thumbnail */}
                <div className="flex-shrink-0 w-48 h-32 rounded-lg overflow-hidden bg-muted">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                      <AlertCircle className="w-8 h-8" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  {/* Title & Featured */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2">
                        <h3 
                          className="text-xl hover:text-primary transition-colors cursor-pointer"
                          onClick={() => handleViewPost(post.slug)}
                        >
                          {post.title}
                        </h3>
                        {post.featured && (
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        title="Visualizar"
                        onClick={() => handleViewPost(post.slug)}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        title="Editar"
                        onClick={() => handleEditPost(post)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        title="Deletar"
                        onClick={() => handleDeleteClick(post.id)}
                      >
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <ChevronRight className="w-3 h-3" />
                      {post.readTime}
                    </div>
                    <Badge variant="outline">{post.category}</Badge>
                  </div>

                  {/* Tags */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag className="w-3 h-3 text-muted-foreground" />
                    {post.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <Card className="p-12 text-center">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <div>
                <h3 className="text-xl mb-2">Nenhum post encontrado</h3>
                <p className="text-muted-foreground">
                  Tente ajustar os filtros ou termos de busca
                </p>
              </div>
            </div>
          </Card>
        )}

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-8">
          <Card className="p-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Total de Posts</p>
              <p className="text-3xl">{posts.length}</p>
            </div>
          </Card>
          <Card className="p-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Posts em Destaque</p>
              <p className="text-3xl">
                {posts.filter(p => p.featured).length}
              </p>
            </div>
          </Card>
          <Card className="p-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Categorias</p>
              <p className="text-3xl">{categories.length}</p>
            </div>
          </Card>
          <Card className="p-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Último Post</p>
              <p className="text-lg">{posts[0]?.date || '-'}</p>
            </div>
          </Card>
        </div>
      </div>

      {/* Blog Post Editor Dialog */}
      <BlogPostEditor
        open={editorOpen}
        onClose={() => setEditorOpen(false)}
        post={currentPost}
        onSave={handleSavePost}
      />

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar Exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir este post? Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteConfirm} className="bg-destructive hover:bg-destructive/90">
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
