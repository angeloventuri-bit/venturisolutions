import { projectId, publicAnonKey } from './supabase/info';

const SERVER_URL = `https://${projectId}.supabase.co/functions/v1/make-server-26a83c87`;

/**
 * Utilities for interacting with SEO infrastructure on the backend
 */

// ============================================
// SITEMAP & ROBOTS
// ============================================

/**
 * Get sitemap.xml URL for submission to Google Search Console
 */
export function getSitemapUrl(): string {
  return `${SERVER_URL}/sitemap.xml`;
}

/**
 * Get robots.txt URL
 */
export function getRobotsTxtUrl(): string {
  return `${SERVER_URL}/robots.txt`;
}

/**
 * Fetch sitemap content (for verification)
 */
export async function fetchSitemap(): Promise<string> {
  const response = await fetch(`${SERVER_URL}/sitemap.xml`);
  return response.text();
}

/**
 * Fetch robots.txt content (for verification)
 */
export async function fetchRobotsTxt(): Promise<string> {
  const response = await fetch(`${SERVER_URL}/robots.txt`);
  return response.text();
}

// ============================================
// STRUCTURED DATA
// ============================================

/**
 * Get Organization Schema for embedding in pages
 */
export async function getOrganizationSchema() {
  const response = await fetch(`${SERVER_URL}/schema/organization`);
  return response.json();
}

// ============================================
// CACHE MANAGEMENT
// ============================================

/**
 * Get cached content by key
 */
export async function getCachedContent<T = any>(key: string): Promise<T | null> {
  try {
    const response = await fetch(`${SERVER_URL}/cache/${key}`, {
      headers: {
        'Authorization': `Bearer ${publicAnonKey}`
      }
    });

    if (!response.ok) {
      return null;
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching cached content:', error);
    return null;
  }
}

/**
 * Set cached content with key
 */
export async function setCachedContent(key: string, data: any, ttl: number = 3600): Promise<boolean> {
  try {
    const response = await fetch(`${SERVER_URL}/cache/${key}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${publicAnonKey}`
      },
      body: JSON.stringify({ ...data, ttl })
    });

    return response.ok;
  } catch (error) {
    console.error('Error setting cached content:', error);
    return false;
  }
}

/**
 * Clear cached content by key
 */
export async function clearCachedContent(key: string): Promise<boolean> {
  try {
    const response = await fetch(`${SERVER_URL}/cache/${key}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${publicAnonKey}`
      }
    });

    return response.ok;
  } catch (error) {
    console.error('Error clearing cached content:', error);
    return false;
  }
}

// ============================================
// ANALYTICS
// ============================================

/**
 * Track page view
 */
export async function trackPageView(page: string): Promise<void> {
  try {
    await fetch(`${SERVER_URL}/analytics/pageview`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${publicAnonKey}`
      },
      body: JSON.stringify({
        page,
        referrer: document.referrer,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString()
      })
    });
  } catch (error) {
    // Silent fail - analytics shouldn't break the app
    console.debug('Analytics tracking error:', error);
  }
}

// ============================================
// PERFORMANCE UTILITIES
// ============================================

/**
 * Preload critical resources
 */
export function preloadCriticalResources() {
  // Preload fonts
  const fontLinks = [
    { href: '/fonts/inter-var.woff2', type: 'font/woff2' }
  ];

  fontLinks.forEach(({ href, type }) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.type = type;
    link.href = href;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
}

/**
 * Lazy load images with Intersection Observer
 */
export function lazyLoadImages() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          if (img.dataset.srcset) {
            img.srcset = img.dataset.srcset;
            img.removeAttribute('data-srcset');
          }
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

/**
 * Prefetch route on hover (for better perceived performance)
 */
export function prefetchOnHover(selector: string) {
  const links = document.querySelectorAll(selector);
  
  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      const href = (link as HTMLAnchorElement).href;
      if (href && !href.startsWith('#')) {
        const linkTag = document.createElement('link');
        linkTag.rel = 'prefetch';
        linkTag.href = href;
        document.head.appendChild(linkTag);
      }
    }, { once: true });
  });
}

// ============================================
// SEO HELPERS
// ============================================

/**
 * Update canonical URL dynamically
 */
export function updateCanonicalUrl(url: string) {
  let canonical = document.querySelector('link[rel="canonical"]');
  
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  
  canonical.setAttribute('href', url);
}

/**
 * Add structured data to page
 */
export function addStructuredData(schema: object) {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

/**
 * Generate breadcrumb schema
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

/**
 * Generate FAQ schema
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

// ============================================
// GOOGLE SEARCH CONSOLE HELPERS
// ============================================

/**
 * Submit sitemap to Google Search Console (manual step - returns URL)
 */
export function getGoogleSearchConsoleSubmitUrl(): string {
  return `https://search.google.com/search-console/sitemaps?resource_id=${encodeURIComponent('https://venturisolutions.com.br')}`;
}

/**
 * Instructions for submitting sitemap
 */
export function getSitemapSubmissionInstructions(): string[] {
  return [
    '1. Acesse: https://search.google.com/search-console',
    '2. Adicione a propriedade: https://venturisolutions.com.br',
    `3. Submeta o sitemap: ${getSitemapUrl()}`,
    '4. Aguarde indexação (24-48h)'
  ];
}
