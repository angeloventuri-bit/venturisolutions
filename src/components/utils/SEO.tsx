import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
  keywords?: string | string[]; // Support array or string
  schema?: object; // For JSON-LD
  // Extra props for article/blog
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
}

export function SEO({ 
  title, 
  description, 
  canonical, 
  image = '/og-image.png', 
  type = 'website',
  keywords,
  schema,
  publishedTime,
  modifiedTime,
  author,
  tags
}: SEOProps) {
  const siteUrl = 'https://venturisolutions.com.br';
  
  // Handle canonical URL logic
  const fullUrl = canonical 
    ? (canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`) 
    : siteUrl;
    
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;
  
  // Process keywords
  const keywordsContent = Array.isArray(keywords) ? keywords.join(', ') : keywords;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywordsContent && <meta name="keywords" content={keywordsContent} />}
      <link rel="canonical" href={fullUrl} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="Venturi Solutions" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:creator" content="@venturisolutions" />

      {/* Article Specific Metadata */}
      {type === 'article' && publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {type === 'article' && modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {type === 'article' && author && <meta property="article:author" content={author} />}
      {type === 'article' && tags && tags.map(tag => (
        <meta property="article:tag" content={tag} key={tag} />
      ))}

      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}