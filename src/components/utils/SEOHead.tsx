import { useEffect } from 'react';
import { trackPageView, getOrganizationSchema, addStructuredData } from '../../utils/seoInfrastructure';

export interface SEOProps {
  // Basic SEO
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl: string;
  
  // Open Graph (Facebook, LinkedIn)
  ogType?: 'website' | 'article';
  ogImage?: string;
  ogImageAlt?: string;
  
  // Twitter Card
  twitterCard?: 'summary' | 'summary_large_image';
  twitterCreator?: string;
  
  // Article-specific (for blog posts)
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleAuthor?: string;
  articleSection?: string;
  articleTags?: string[];
  
  // Schema.org structured data
  schema?: object;
  
  // GEO (Generative Engine Optimization)
  geoContent?: {
    summary: string; // Resumo otimizado para AI
    keyPoints: string[]; // Pontos-chave estruturados
    entities: string[]; // Entidades nomeadas
    qa?: Array<{ question: string; answer: string }>; // FAQ structure
  };
}

export function SEOHead(props: SEOProps) {
  const {
    title,
    description,
    keywords = [],
    canonicalUrl,
    ogType = 'article',
    ogImage,
    ogImageAlt,
    twitterCard = 'summary_large_image',
    twitterCreator = '@venturisolutions',
    articlePublishedTime,
    articleModifiedTime,
    articleAuthor,
    articleSection,
    articleTags = [],
    schema,
    geoContent,
  } = props;

  useEffect(() => {
    // Set document title
    document.title = `${title} | Venturi Solutions`;

    // Track page view for analytics
    trackPageView(canonicalUrl);

    // Load and inject Organization schema
    getOrganizationSchema().then(orgSchema => {
      addStructuredData(orgSchema);
    }).catch(err => console.debug('Organization schema load error:', err));

    // Create or update meta tags
    const metaTags = [
      // Basic SEO
      { name: 'description', content: description },
      { name: 'keywords', content: keywords.join(', ') },
      { name: 'author', content: articleAuthor || 'Venturi Solutions' },
      
      // Open Graph
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: ogType },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:site_name', content: 'Venturi Solutions' },
      { property: 'og:locale', content: 'pt_BR' },
      
      // Twitter Card
      { name: 'twitter:card', content: twitterCard },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:creator', content: twitterCreator },
      { name: 'twitter:site', content: '@venturisolutions' },
      
      // Mobile
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=5' },
      { name: 'theme-color', content: '#8B1538' },
      
      // Robots
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'googlebot', content: 'index, follow' },
      
      // GEO - AI Crawlers
      { name: 'ai-content-declaration', content: 'human-created' },
    ];

    // Add image meta tags if provided
    if (ogImage) {
      metaTags.push(
        { property: 'og:image', content: ogImage },
        { property: 'og:image:alt', content: ogImageAlt || title },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'twitter:image', content: ogImage },
        { name: 'twitter:image:alt', content: ogImageAlt || title }
      );
    }

    // Add article meta tags
    if (ogType === 'article') {
      if (articlePublishedTime) {
        metaTags.push({ property: 'article:published_time', content: articlePublishedTime });
      }
      if (articleModifiedTime) {
        metaTags.push({ property: 'article:modified_time', content: articleModifiedTime });
      }
      if (articleAuthor) {
        metaTags.push({ property: 'article:author', content: articleAuthor });
      }
      if (articleSection) {
        metaTags.push({ property: 'article:section', content: articleSection });
      }
      articleTags.forEach(tag => {
        metaTags.push({ property: 'article:tag', content: tag });
      });
    }

    // GEO - Structured summary for AI
    if (geoContent) {
      metaTags.push(
        { name: 'ai-summary', content: geoContent.summary },
        { name: 'ai-entities', content: geoContent.entities.join(', ') }
      );
    }

    // Update or create meta tags
    metaTags.forEach(({ name, property, content }) => {
      if (!content) return;

      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let element = document.querySelector(selector);

      if (!element) {
        element = document.createElement('meta');
        if (name) element.setAttribute('name', name);
        if (property) element.setAttribute('property', property);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    });

    // Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // Structured Data (Schema.org JSON-LD)
    if (schema) {
      let scriptTag = document.querySelector('script[type="application/ld+json"]');
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema);
    }

    // GEO - Add structured FAQ for AI consumption
    if (geoContent?.qa && geoContent.qa.length > 0) {
      const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: geoContent.qa.map(item => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      };

      let faqScriptTag = document.querySelector('script[data-schema="faq"]');
      if (!faqScriptTag) {
        faqScriptTag = document.createElement('script');
        faqScriptTag.setAttribute('type', 'application/ld+json');
        faqScriptTag.setAttribute('data-schema', 'faq');
        document.head.appendChild(faqScriptTag);
      }
      faqScriptTag.textContent = JSON.stringify(faqSchema);
    }

    // Cleanup function (optional)
    return () => {
      // We don't remove meta tags on unmount as they should persist
      // This prevents flickering when navigating between pages
    };
  }, [
    title,
    description,
    keywords,
    canonicalUrl,
    ogType,
    ogImage,
    ogImageAlt,
    twitterCard,
    twitterCreator,
    articlePublishedTime,
    articleModifiedTime,
    articleAuthor,
    articleSection,
    articleTags,
    schema,
    geoContent,
  ]);

  return null; // This component doesn't render anything
}

// Helper function to generate Article Schema
export function generateArticleSchema(props: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  category: string;
  keywords: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: props.title,
    description: props.description,
    image: props.image,
    datePublished: props.datePublished,
    dateModified: props.dateModified || props.datePublished,
    author: {
      '@type': 'Organization',
      name: props.author,
      url: 'https://venturisolutions.com.br',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Venturi Solutions',
      logo: {
        '@type': 'ImageObject',
        url: 'https://venturisolutions.com.br/logo.png',
      },
    },
    articleSection: props.category,
    keywords: props.keywords.join(', '),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': props.url,
    },
  };
}

// Helper function to generate BreadcrumbList Schema
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Helper to extract GEO-optimized summary from content
export function extractGEOContent(content: string, metadata: {
  title: string;
  category: string;
  tags: string[];
}): SEOProps['geoContent'] {
  // Extract key points (h2 headings)
  const headingRegex = /##\s+(.+)/g;
  const headings = [];
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    headings.push(match[1]);
  }

  // Extract entities (capitalized multi-word terms)
  const entityRegex = /\b([A-Z][a-z]+(?:\s+[A-Z][a-z]+)+)\b/g;
  const entities = new Set<string>();
  while ((match = entityRegex.exec(content)) !== null) {
    entities.add(match[1]);
  }

  // Generate AI-optimized summary
  const summary = `${metadata.title} - Artigo completo sobre ${metadata.category.toLowerCase()} abordando ${headings.slice(0, 3).join(', ')}. Tags: ${metadata.tags.join(', ')}.`;

  return {
    summary,
    keyPoints: headings.slice(0, 7),
    entities: Array.from(entities).slice(0, 10),
  };
}