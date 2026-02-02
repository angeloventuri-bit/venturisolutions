import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-26a83c87/health", (c) => {
  return c.json({ status: "ok" });
});

// ============================================
// SEO & INDEXATION INFRASTRUCTURE
// ============================================

// SITEMAP.XML - Dynamic sitemap for Google indexing
app.get("/make-server-26a83c87/sitemap.xml", async (c) => {
  try {
    const baseUrl = "https://venturisolutions.com.br"; // Update with actual domain
    const today = new Date().toISOString().split('T')[0];

    // Define all solutions from the app
    const solutions = [
      'ads-performance',
      'sites-landing-pages',
      'seo-geo-360',
      'reestruturacao-estrategica',
      'treinamento-comercial',
      'agentes-ia'
    ];

    // Define blog posts slugs
    const blogPosts = [
      'guia-campanha-sem-eficaz-estrategias-parcerias-roi',
      'transforme-seo-maquina-vendas-guia-completo-2025'
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  
  <!-- Homepage -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Solution Pages -->
  ${solutions.map(slug => `
  <url>
    <loc>${baseUrl}/solucoes/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`).join('')}

  <!-- Blog Posts -->
  ${blogPosts.map(slug => `
  <url>
    <loc>${baseUrl}/blog/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}

  <!-- Admin/Protected Pages (noindex via meta) -->
  <url>
    <loc>${baseUrl}/admin/login</loc>
    <lastmod>${today}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.1</priority>
  </url>

</urlset>`;

    console.log('✅ Sitemap generated successfully');

    return c.text(sitemap, 200, {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    });
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    return c.text('Error generating sitemap', 500);
  }
});

// ROBOTS.TXT - Control crawler access
app.get("/make-server-26a83c87/robots.txt", (c) => {
  const robotsTxt = `# Venturi Solutions - Robots.txt
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /admin/*
Disallow: /api/

# Specific bots
User-agent: Googlebot
Allow: /
Disallow: /admin/

User-agent: Bingbot
Allow: /
Disallow: /admin/

# AI Crawlers (ChatGPT, Perplexity, etc)
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

# Sitemap location
Sitemap: https://venturisolutions.com.br/sitemap.xml

# Crawl delay
Crawl-delay: 1
`;

  console.log('✅ Robots.txt served');

  return c.text(robotsTxt, 200, {
    'Content-Type': 'text/plain',
    'Cache-Control': 'public, max-age=86400'
  });
});

// STRUCTURED DATA - Organization Schema
app.get("/make-server-26a83c87/schema/organization", (c) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Venturi Solutions",
    "alternateName": "Venturi",
    "url": "https://venturisolutions.com.br",
    "logo": "https://venturisolutions.com.br/logo.png",
    "description": "Agência de Marketing Digital especializada em SEO, Ads Performance, Sites e Estratégias de Crescimento. Metodologia Value as a Service (VaaS).",
    "foundingDate": "2020",
    "founders": [
      {
        "@type": "Person",
        "name": "Angelo Venturi"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-11-96314-4616",
      "contactType": "sales",
      "availableLanguage": ["Portuguese", "English"]
    },
    "sameAs": [
      "https://linkedin.com/company/venturisolutions",
      "https://instagram.com/venturisolutions"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Brazil"
    },
    "knowsAbout": [
      "SEO",
      "SEM",
      "Google Ads",
      "Meta Ads",
      "Web Development",
      "Digital Strategy",
      "Marketing Automation",
      "Artificial Intelligence"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "47"
    }
  };

  console.log('✅ Organization schema served');

  return c.json(schema, 200, {
    'Cache-Control': 'public, max-age=86400'
  });
});

// CACHE MANAGEMENT - Get cached content
app.get("/make-server-26a83c87/cache/:key", async (c) => {
  try {
    const key = c.req.param("key");
    const cached = await kv.get(`cache:${key}`);
    
    if (!cached) {
      return c.json({ success: false, message: "Cache miss" }, 404);
    }

    console.log(`✅ Cache hit: ${key}`);
    return c.json({ success: true, data: cached }, 200, {
      'Cache-Control': 'public, max-age=300'
    });
  } catch (error) {
    console.error("❌ Error retrieving cache:", error);
    return c.json({ success: false, error: error.message }, 500);
  }
});

// CACHE MANAGEMENT - Set cache
app.post("/make-server-26a83c87/cache/:key", async (c) => {
  try {
    const key = c.req.param("key");
    const body = await c.req.json();
    
    await kv.set(`cache:${key}`, {
      ...body,
      cached_at: new Date().toISOString(),
      ttl: body.ttl || 3600
    });

    console.log(`✅ Cache set: ${key}`);
    return c.json({ success: true, message: "Cache updated" });
  } catch (error) {
    console.error("❌ Error setting cache:", error);
    return c.json({ success: false, error: error.message }, 500);
  }
});

// CACHE MANAGEMENT - Clear cache
app.delete("/make-server-26a83c87/cache/:key", async (c) => {
  try {
    const key = c.req.param("key");
    await kv.del(`cache:${key}`);
    
    console.log(`✅ Cache cleared: ${key}`);
    return c.json({ success: true, message: "Cache cleared" });
  } catch (error) {
    console.error("❌ Error clearing cache:", error);
    return c.json({ success: false, error: error.message }, 500);
  }
});

// ANALYTICS ENDPOINT - Track page views for internal analytics
app.post("/make-server-26a83c87/analytics/pageview", async (c) => {
  try {
    const body = await c.req.json();
    const { page, referrer, userAgent, timestamp } = body;

    const viewId = `view:${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    await kv.set(viewId, {
      page,
      referrer: referrer || 'direct',
      userAgent: userAgent || 'unknown',
      timestamp: timestamp || new Date().toISOString()
    });

    console.log(`✅ Page view tracked: ${page}`);
    return c.json({ success: true });
  } catch (error) {
    console.error("❌ Error tracking page view:", error);
    return c.json({ success: false, error: error.message }, 500);
  }
});

// ============================================
// LEADS MANAGEMENT ROUTES
// ============================================

// Get all leads
app.get("/make-server-26a83c87/leads", async (c) => {
  try {
    const leads = await kv.getByPrefix("lead:");
    console.log(`✅ Retrieved ${leads.length} leads`);
    return c.json({ success: true, leads });
  } catch (error) {
    console.error("❌ Error retrieving leads:", error);
    return c.json({ success: false, error: error.message }, 500);
  }
});

// Get single lead by ID
app.get("/make-server-26a83c87/leads/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const lead = await kv.get(`lead:${id}`);
    
    if (!lead) {
      return c.json({ success: false, error: "Lead not found" }, 404);
    }
    
    console.log(`✅ Retrieved lead: ${id}`);
    return c.json({ success: true, lead });
  } catch (error) {
    console.error("❌ Error retrieving lead:", error);
    return c.json({ success: false, error: error.message }, 500);
  }
});

// Create new lead and send email
app.post("/make-server-26a83c87/leads", async (c) => {
  try {
    const body = await c.req.json();
    const { nome, email, telefone, empresa, nicho, servicoInteresse, faturamentoMensal, desafio, origem, origem_detalhes } = body;

    // Validate required fields
    if (!nome || !email) {
      return c.json({ 
        success: false, 
        error: "Nome e e-mail são obrigatórios" 
      }, 400);
    }

    // Generate lead ID
    const leadId = `lead:${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    // Prepare lead data
    const leadData = {
      id: leadId,
      nome,
      email,
      telefone: telefone || "",
      empresa: empresa || "",
      nicho: nicho || "",
      servicoInteresse: servicoInteresse || "",
      faturamentoMensal: faturamentoMensal || "",
      desafio: desafio || "",
      origem: origem || "direct",
      origem_detalhes: origem_detalhes || "{}",
      status: "novo",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    // Save lead to KV store
    await kv.set(leadId, leadData);
    console.log(`✅ Lead saved: ${leadId}`);

    // Send email notification (if RESEND_API_KEY is configured)
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    
    let emailSent = false;
    let emailError = null;

    if (RESEND_API_KEY && !RESEND_API_KEY.includes("YOUR_")) {
      try {
        // Parse origem_detalhes if it's a string
        let origemDetails = origem_detalhes;
        if (typeof origem_detalhes === 'string') {
          try {
            origemDetails = JSON.parse(origem_detalhes);
          } catch (e) {
            origemDetails = { raw: origem_detalhes };
          }
        }

        // Build email HTML
        const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Novo Lead - Venturi Solutions</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0a0a0a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #1a1a1a; border: 1px solid #8B1538;">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #8B1538 0%, #6B0F2A 100%); padding: 30px; text-align: center;">
      <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">
        🎯 Novo Lead Recebido
      </h1>
      <p style="color: #ffffff; margin: 10px 0 0 0; opacity: 0.9; font-size: 14px;">
        Venturi Solutions - Website
      </p>
    </div>

    <!-- Content -->
    <div style="padding: 30px;">
      
      <!-- Lead Info -->
      <div style="background-color: #0a0a0a; border: 1px solid #333; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
        <h2 style="color: #8B1538; margin: 0 0 20px 0; font-size: 18px; font-weight: 600;">
          Informações do Lead
        </h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="border-bottom: 1px solid #333;">
            <td style="padding: 12px 0; color: #999; font-size: 14px; width: 120px;">
              <strong>Nome:</strong>
            </td>
            <td style="padding: 12px 0; color: #ffffff; font-size: 14px;">
              ${nome}
            </td>
          </tr>
          <tr style="border-bottom: 1px solid #333;">
            <td style="padding: 12px 0; color: #999; font-size: 14px;">
              <strong>E-mail:</strong>
            </td>
            <td style="padding: 12px 0; color: #ffffff; font-size: 14px;">
              <a href="mailto:${email}" style="color: #8B1538; text-decoration: none;">
                ${email}
              </a>
            </td>
          </tr>
          ${telefone ? `
          <tr style="border-bottom: 1px solid #333;">
            <td style="padding: 12px 0; color: #999; font-size: 14px;">
              <strong>Telefone:</strong>
            </td>
            <td style="padding: 12px 0; color: #ffffff; font-size: 14px;">
              <a href="tel:${telefone}" style="color: #8B1538; text-decoration: none;">
                ${telefone}
              </a>
            </td>
          </tr>
          ` : ''}
          ${empresa ? `
          <tr style="border-bottom: 1px solid #333;">
            <td style="padding: 12px 0; color: #999; font-size: 14px;">
              <strong>Empresa:</strong>
            </td>
            <td style="padding: 12px 0; color: #ffffff; font-size: 14px;">
              ${empresa}
            </td>
          </tr>
          ` : ''}
          ${nicho ? `
          <tr style="border-bottom: 1px solid #333;">
            <td style="padding: 12px 0; color: #999; font-size: 14px;">
              <strong>Nicho:</strong>
            </td>
            <td style="padding: 12px 0; color: #ffffff; font-size: 14px;">
              ${nicho}
            </td>
          </tr>
          ` : ''}
          ${servicoInteresse ? `
          <tr style="border-bottom: 1px solid #333;">
            <td style="padding: 12px 0; color: #999; font-size: 14px;">
              <strong>Interesse:</strong>
            </td>
            <td style="padding: 12px 0; color: #ffffff; font-size: 14px;">
              ${servicoInteresse}
            </td>
          </tr>
          ` : ''}
          ${faturamentoMensal ? `
          <tr style="border-bottom: 1px solid #333;">
            <td style="padding: 12px 0; color: #999; font-size: 14px;">
              <strong>Faturamento Mensal:</strong>
            </td>
            <td style="padding: 12px 0; color: #ffffff; font-size: 14px;">
              ${faturamentoMensal}
            </td>
          </tr>
          ` : ''}
          ${desafio ? `
          <tr>
            <td style="padding: 12px 0; color: #999; font-size: 14px; vertical-align: top;">
              <strong>Desafio:</strong>
            </td>
            <td style="padding: 12px 0; color: #ffffff; font-size: 14px;">
              ${desafio}
            </td>
          </tr>
          ` : ''}
        </table>
      </div>

      <!-- Tracking Info -->
      ${origem ? `
      <div style="background-color: #0a0a0a; border: 1px solid #333; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
        <h2 style="color: #8B1538; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">
          📊 Rastreamento
        </h2>
        
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="background-color: #8B1538; color: white; padding: 6px 12px; border-radius: 4px; font-size: 12px; font-weight: 600; text-transform: uppercase;">
            ${origem}
          </span>
          <span style="color: #999; font-size: 14px;">
            ${new Date().toLocaleString('pt-BR')}
          </span>
        </div>

        ${origemDetails && typeof origemDetails === 'object' ? `
        <details style="margin-top: 15px;">
          <summary style="color: #8B1538; cursor: pointer; font-size: 14px;">
            Ver detalhes técnicos
          </summary>
          <pre style="background-color: #000; color: #0f0; padding: 15px; border-radius: 4px; overflow-x: auto; font-size: 12px; margin-top: 10px;">
${JSON.stringify(origemDetails, null, 2)}
          </pre>
        </details>
        ` : ''}
      </div>
      ` : ''}

      <!-- Quick Actions -->
      <div style="background-color: #0a0a0a; border: 1px solid #333; border-radius: 8px; padding: 20px;">
        <h2 style="color: #8B1538; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">
          ⚡ Ações Rápidas
        </h2>
        
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <a href="mailto:${email}" style="background-color: #8B1538; color: white; padding: 12px 20px; border-radius: 6px; text-decoration: none; font-size: 14px; font-weight: 600; display: inline-block;">
            📧 Responder E-mail
          </a>
          
          ${telefone ? `
          <a href="https://wa.me/${telefone.replace(/\D/g, '')}" style="background-color: #25D366; color: white; padding: 12px 20px; border-radius: 6px; text-decoration: none; font-size: 14px; font-weight: 600; display: inline-block;">
            💬 WhatsApp
          </a>
          ` : ''}
        </div>
      </div>

    </div>

    <!-- Footer -->
    <div style="background-color: #0a0a0a; border-top: 1px solid #333; padding: 20px 30px; text-align: center;">
      <p style="color: #666; margin: 0; font-size: 12px;">
        Este é um e-mail automático do sistema de leads da Venturi Solutions
      </p>
      <p style="color: #666; margin: 10px 0 0 0; font-size: 12px;">
        © ${new Date().getFullYear()} Venturi Solutions - Todos os direitos reservados
      </p>
    </div>

  </div>
</body>
</html>
        `;

        // Determine recipients based on domain verification status
        // If domain is verified, send to both emails
        // If not verified (testing mode), send only to verified email
        const recipients = ['angelo.venturi@venturisolutions.com.br'];
        
        // Try to send to both emails if domain is verified
        // To verify domain: https://resend.com/domains
        // After verifying venturisolutions.com.br, update 'from' to use that domain
        
        // Send email via Resend API
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${RESEND_API_KEY}`
          },
          body: JSON.stringify({
            from: 'Venturi Solutions <onboarding@resend.dev>',
            to: recipients,
            cc: [], // After domain verification, add: 'rafael.vianna@venturisolutions.com.br'
            subject: `🎯 Novo Lead: ${nome}${empresa ? ` - ${empresa}` : ''}`,
            html: emailHtml,
            reply_to: email
          })
        });

        const emailResult = await emailResponse.json();

        if (emailResponse.ok) {
          emailSent = true;
          console.log('✅ E-mail enviado com sucesso:', emailResult);
        } else {
          emailError = emailResult;
          console.error('❌ Erro ao enviar e-mail:', emailResult);
        }
      } catch (error) {
        emailError = error.message;
        console.error('❌ Erro ao processar envio de e-mail:', error);
      }
    } else {
      console.log('⚠️ RESEND_API_KEY não configurada - e-mail não será enviado');
      console.log('💡 Configure a chave RESEND_API_KEY nas variáveis de ambiente');
    }

    // Return success response
    return c.json({
      success: true,
      message: 'Lead salvo com sucesso',
      lead: leadData,
      email: {
        sent: emailSent,
        error: emailError,
        configured: !!RESEND_API_KEY && !RESEND_API_KEY.includes("YOUR_")
      }
    }, 201);

  } catch (error) {
    console.error('❌ Erro ao processar lead:', error);
    return c.json({ 
      success: false, 
      error: 'Erro interno ao processar lead',
      details: error.message 
    }, 500);
  }
});

// Update lead
app.put("/make-server-26a83c87/leads/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const body = await c.req.json();
    
    const existingLead = await kv.get(`lead:${id}`);
    if (!existingLead) {
      return c.json({ success: false, error: "Lead not found" }, 404);
    }

    const updatedLead = {
      ...existingLead,
      ...body,
      id: `lead:${id}`,
      updated_at: new Date().toISOString(),
    };

    await kv.set(`lead:${id}`, updatedLead);
    console.log(`✅ Lead updated: lead:${id}`);
    
    return c.json({ success: true, lead: updatedLead });
  } catch (error) {
    console.error("❌ Error updating lead:", error);
    return c.json({ success: false, error: error.message }, 500);
  }
});

// Delete lead
app.delete("/make-server-26a83c87/leads/:id", async (c) => {
  try {
    const id = c.req.param("id");
    await kv.del(`lead:${id}`);
    console.log(`✅ Lead deleted: lead:${id}`);
    return c.json({ success: true, message: "Lead deleted" });
  } catch (error) {
    console.error("❌ Error deleting lead:", error);
    return c.json({ success: false, error: error.message }, 500);
  }
});

Deno.serve(app.fetch);