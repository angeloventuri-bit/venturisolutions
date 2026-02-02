import { useState, useMemo, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Filter, 
  X, 
  Clock, 
  User, 
  Calendar,
  Tag,
  TrendingUp,
  Sparkles,
  ChevronRight,
  Grid3x3,
  List,
  ArrowUpDown
} from 'lucide-react';
import { Navigation } from '../sections/Navigation';
import { Footer } from '../sections/Footer';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { SEO } from '../utils/SEO';
import { GridPattern } from '../visuals/GridPattern';
import { FloatingParticles } from '../visuals/FloatingParticles';
import { useContactDialog } from '../../utils/useContactDialog';
import { ContactFormDialog } from '../ContactFormDialog';
import { blogPosts as initialBlogPosts, BlogPost } from '../../content/blog-posts';

type SortOption = 'newest' | 'oldest' | 'popular';
type ViewMode = 'grid' | 'list';

// Local storage key (same as BlogManager)
const BLOG_POSTS_KEY = 'venturi_blog_posts';

export function BlogPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { openDialog, isOpen, closeDialog } = useContactDialog();
  
  // Load posts from localStorage
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const savedPosts = localStorage.getItem(BLOG_POSTS_KEY);
    if (savedPosts) {
      setBlogPosts(JSON.parse(savedPosts));
    } else {
      // Use initial content if no local edits exist
      setBlogPosts(initialBlogPosts);
    }
  }, []);
  
  // Estados
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'Todos');
  const [selectedTag, setSelectedTag] = useState(searchParams.get('tag') || '');
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Extrair categorias únicas
  const categories = useMemo(() => {
    const cats = ['Todos', ...Array.from(new Set(blogPosts.map(post => post.category)))];
    return cats.map(cat => ({
      name: cat,
      count: cat === 'Todos' 
        ? blogPosts.length 
        : blogPosts.filter(p => p.category === cat).length
    }));
  }, [blogPosts]);

  // Extrair todas as tags únicas
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    blogPosts.forEach(post => post.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags).sort();
  }, [blogPosts]);

  // Filtrar e ordenar posts
  const filteredPosts = useMemo(() => {
    let filtered = [...blogPosts];

    // Filtro por categoria
    if (selectedCategory !== 'Todos') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Filtro por tag
    if (selectedTag) {
      filtered = filtered.filter(post => post.tags.includes(selectedTag));
    }

    // Filtro por busca
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Ordenação
    filtered.sort((a, b) => {
      if (sortBy === 'newest') {
        return new Date(b.dateISO || b.date).getTime() - new Date(a.dateISO || a.date).getTime();
      } else if (sortBy === 'oldest') {
        return new Date(a.dateISO || a.date).getTime() - new Date(b.dateISO || b.date).getTime();
      } else {
        // Popular: featured first, then by date
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return new Date(b.dateISO || b.date).getTime() - new Date(a.dateISO || a.date).getTime();
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, selectedTag, sortBy, blogPosts]);

  // Paginação
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  // Reset page quando filtros mudam
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedTag, sortBy]);

  // Atualizar URL params
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    if (selectedCategory !== 'Todos') params.set('category', selectedCategory);
    if (selectedTag) params.set('tag', selectedTag);
    setSearchParams(params, { replace: true });
  }, [searchQuery, selectedCategory, selectedTag, setSearchParams]);

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('Todos');
    setSelectedTag('');
    setCurrentPage(1);
  };

  const hasActiveFilters = searchQuery || selectedCategory !== 'Todos' || selectedTag;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://venturisolutions.com.br' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://venturisolutions.com.br/blog' }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* SEO */}
      <SEO
        title="Blog de Performance & Estratégia Digital | Venturi Solutions"
        description="Artigos, insights e estratégias sobre performance digital, automação, IA, SEO e crescimento de negócios. Conteúdo criado por especialistas da Venturi Solutions."
        keywords={[
          'blog marketing digital',
          'estratégia digital',
          'performance ads',
          'SEO',
          'automação',
          'inteligência artificial',
          'growth marketing'
        ]}
        canonical="/blog"
        type="website"
        schema={breadcrumbSchema}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <GridPattern />
        <FloatingParticles count={30} />
        
        <div className="max-w-7xl mx-auto relative">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-muted-foreground mb-8"
          >
            <button onClick={() => navigate('/')} className="hover:text-primary transition-colors">
              Home
            </button>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">Blog</span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Blog & Insights</span>
            </div>

            <h1 className="text-5xl md:text-7xl mb-6">
              Conhecimento que{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">
                Impulsiona Resultados
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl">
              Estratégias, insights e cases reais para acelerar o crescimento do seu negócio
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            <StatCard number={blogPosts.length} label="Artigos" />
            <StatCard number={categories.length - 1} label="Categorias" />
            <StatCard number={allTags.length} label="Tags" />
            <StatCard number="47K+" label="Leituras" />
          </motion.div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="px-6 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-2xl p-6 border border-primary/10">
            {/* Search Bar */}
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Buscar artigos, tópicos, tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 bg-background/50 border-primary/20 focus:border-primary/40"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* View Mode & Sort */}
              <div className="flex gap-2">
                {/* View Mode Toggle */}
                <div className="flex border border-primary/20 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-3 transition-colors ${
                      viewMode === 'grid' 
                        ? 'bg-primary/20 text-primary' 
                        : 'bg-background/50 text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Grid3x3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-3 transition-colors ${
                      viewMode === 'list' 
                        ? 'bg-primary/20 text-primary' 
                        : 'bg-background/50 text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>

                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="px-4 py-2 bg-background/50 border border-primary/20 rounded-lg text-foreground hover:border-primary/40 transition-colors cursor-pointer"
                >
                  <option value="newest">Mais Recentes</option>
                  <option value="oldest">Mais Antigos</option>
                  <option value="popular">Populares</option>
                </select>
              </div>
            </div>

            {/* Categories */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Categorias</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 py-2 rounded-lg text-sm transition-all ${
                      selectedCategory === category.name
                        ? 'bg-primary text-white'
                        : 'bg-white/5 border border-white/10 hover:border-primary/30 text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {category.name}
                    <span className="ml-2 opacity-60">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Tag className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Tags Populares</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {allTags.slice(0, 12).map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(selectedTag === tag ? '' : tag)}
                    className={`px-3 py-1 rounded-full text-xs transition-all ${
                      selectedTag === tag
                        ? 'bg-primary/20 text-primary border border-primary/30'
                        : 'bg-white/5 border border-white/10 hover:border-primary/20 text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Filters Badge */}
            {hasActiveFilters && (
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{filteredPosts.length} resultado{filteredPosts.length !== 1 ? 's' : ''} encontrado{filteredPosts.length !== 1 ? 's' : ''}</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-primary hover:text-red-600"
                >
                  <X className="w-4 h-4 mr-1" />
                  Limpar Filtros
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Posts Grid/List */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          {filteredPosts.length === 0 ? (
            <EmptyState onClear={clearFilters} />
          ) : (
            <>
              <AnimatePresence mode="wait">
                {viewMode === 'grid' ? (
                  <motion.div
                    key="grid"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
                  >
                    {paginatedPosts.map((post, index) => (
                      <BlogCardGrid key={post.id} post={post} index={index} />
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="list"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6 mb-12"
                  >
                    {paginatedPosts.map((post, index) => (
                      <BlogCardList key={post.id} post={post} index={index} />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-br from-primary/10 to-red-600/5 border-primary/20 p-12">
            <TrendingUp className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl mb-4">
              Quer Resultados como Estes?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Transforme conhecimento em ação. Agende uma conversa com nossos especialistas.
            </p>
            <Button
              size="lg"
              onClick={openDialog}
              className="bg-gradient-to-r from-primary to-red-600 hover:from-red-600 hover:to-primary"
            >
              Falar com Especialista
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
      
      {/* Global Contact Form Dialog */}
      <ContactFormDialog open={isOpen} onOpenChange={closeDialog} />
    </div>
  );
}

// Sub-components
function StatCard({ number, label }: { number: string | number; label: string }) {
  return (
    <div className="text-center p-4 glass rounded-xl border border-primary/10">
      <div className="text-3xl mb-1 text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">
        {number}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function BlogCardGrid({ post, index }: { post: typeof blogPosts[0]; index: number }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Card
        onClick={() => navigate(`/blog/${post.slug}`)}
        className="group cursor-pointer overflow-hidden bg-card/50 border-primary/10 hover:border-primary/30 transition-all h-full flex flex-col"
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          {post.featured && (
            <Badge className="absolute top-3 right-3 z-10 bg-primary border-primary/20">
              Destaque
            </Badge>
          )}
          <ImageWithFallback
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-3 w-fit">
            {post.category}
          </Badge>

          <h3 className="text-xl mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-white/10">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

function BlogCardList({ post, index }: { post: typeof blogPosts[0]; index: number }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Card
        onClick={() => navigate(`/blog/${post.slug}`)}
        className="group cursor-pointer overflow-hidden bg-card/50 border-primary/10 hover:border-primary/30 transition-all"
      >
        <div className="flex flex-col md:flex-row gap-6 p-6">
          {/* Image */}
          <div className="relative md:w-80 h-48 flex-shrink-0 overflow-hidden rounded-lg">
            {post.featured && (
              <Badge className="absolute top-3 right-3 z-10 bg-primary border-primary/20">
                Destaque
              </Badge>
            )}
            <ImageWithFallback
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-3 w-fit">
              {post.category}
            </Badge>

            <h3 className="text-2xl mb-3 group-hover:text-primary transition-colors">
              {post.title}
            </h3>

            <p className="text-muted-foreground mb-4 line-clamp-3">
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 4).map(tag => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-full text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Meta */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground mt-auto pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

function Pagination({ 
  currentPage, 
  totalPages, 
  onPageChange 
}: { 
  currentPage: number; 
  totalPages: number; 
  onPageChange: (page: number) => void;
}) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
  // Show max 7 pages
  let displayPages = pages;
  if (totalPages > 7) {
    if (currentPage <= 4) {
      displayPages = [...pages.slice(0, 5), -1, totalPages];
    } else if (currentPage >= totalPages - 3) {
      displayPages = [1, -1, ...pages.slice(totalPages - 5)];
    } else {
      displayPages = [1, -1, currentPage - 1, currentPage, currentPage + 1, -1, totalPages];
    }
  }

  return (
    <div className="flex items-center justify-center gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="border-primary/20"
      >
        Anterior
      </Button>

      <div className="flex gap-1">
        {displayPages.map((page, index) => (
          page === -1 ? (
            <span key={`ellipsis-${index}`} className="px-3 py-2 text-muted-foreground">
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`px-3 py-2 rounded-lg text-sm transition-all ${
                currentPage === page
                  ? 'bg-primary text-white'
                  : 'bg-white/5 border border-white/10 hover:border-primary/30 text-muted-foreground hover:text-foreground'
              }`}
            >
              {page}
            </button>
          )
        ))}
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="border-primary/20"
      >
        Próxima
      </Button>
    </div>
  );
}

function EmptyState({ onClear }: { onClear: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-20"
    >
      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
        <Search className="w-10 h-10 text-primary" />
      </div>
      <h3 className="text-2xl mb-3">Nenhum artigo encontrado</h3>
      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
        Não encontramos nenhum artigo com os filtros selecionados. Tente ajustar sua busca.
      </p>
      <Button onClick={onClear} variant="outline">
        Limpar Filtros
      </Button>
    </motion.div>
  );
}