import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

console.log("Hello from Generate Sitemap Function!")

serve(async (req) => {
  // Criação do cliente Supabase (usa variáveis de ambiente da Edge Function)
  const supabaseClient = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_ANON_KEY') ?? ''
  )

  // 1. Busca todas as páginas publicadas
  const { data: pages, error } = await supabaseClient
    .from('generated_pages')
    .select('slug, last_indexed_at, created_at')
    .eq('is_published', true)

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 })
  }

  // 2. Constrói o XML
  const baseUrl = 'https://venturisolutions.com.br'
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Static Home -->
  <url>
    <loc>${baseUrl}/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Dynamic pSEO Pages -->
  ${pages.map(page => `
  <url>
    <loc>${baseUrl}/topic/${page.slug}</loc>
    <lastmod>${page.last_indexed_at || page.created_at}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  `).join('')}
</urlset>`

  // 3. Retorna como XML
  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600" // Cache na Edge por 1 hora
    },
  })
})