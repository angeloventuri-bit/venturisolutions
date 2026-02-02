-- 1. LIMPEZA (Opcional, para não duplicar testes)
-- truncate table generated_pages cascade;

-- 2. CRIAÇÃO DA FUNÇÃO DE RELACIONADOS (Tag-based Logic)
-- Esta função busca posts que tenham tags em comum no JSON 'content_data'
create or replace function get_related_pages_by_tags(current_slug text)
returns setof generated_pages
language plpgsql
as $$
declare
  current_tags jsonb;
begin
  -- Pega as tags da página atual (assumindo que estão em content_data->'tech_stack')
  select content_data->'tech_stack' into current_tags
  from generated_pages
  where slug = current_slug;

  return query
  select *
  from generated_pages
  where slug != current_slug
  -- A mágica: verifica se o array de tech_stack da outra página tem interseção com o atual
  and (content_data->'tech_stack')::jsonb ?| (select array_agg(value)::text[] from jsonb_array_elements_text(current_tags))
  limit 5;
end;
$$;

-- 3. SCRIPT DE SEMEADURA (Combinatorial pSEO)
-- Gera combinações: Ferramenta (Source) -> Destino (Target)

WITH sources AS (
    SELECT * FROM (VALUES 
        ('Figma', 'Design'), 
        ('Sketch', 'Design'), 
        ('Adobe XD', 'Design')
    ) AS t(name, category)
),
targets AS (
    SELECT * FROM (VALUES 
        ('React', 'Frontend'), 
        ('Vue.js', 'Frontend'), 
        ('HTML + Tailwind', 'Frontend'),
        ('Angular', 'Frontend')
    ) AS t(name, category)
)
INSERT INTO generated_pages (slug, title, meta_description, is_published, content_data)
SELECT 
    -- Slug: figma-para-react
    lower(sources.name || '-para-' || replace(targets.name, ' ', '-')),
    
    -- Title: Como exportar de Figma para React
    'Como exportar de ' || sources.name || ' para ' || targets.name || ' (Guia 2024)',
    
    -- Meta Description
    'Aprenda o workflow profissional para transformar layouts do ' || sources.name || ' em código ' || targets.name || ' pixel-perfect e otimizado para SEO.',
    
    -- Published
    true,
    
    -- JSON Data (Variáveis para o Template)
    jsonb_build_object(
        'source_tool', sources.name,
        'target_tech', targets.name,
        'intro', 'A transição de ' || sources.name || ' para ' || targets.name || ' é um desafio comum para times de produto. Este guia foca na preservação da fidelidade visual e performance.',
        'steps', jsonb_build_array(
            'Prepare seu arquivo no ' || sources.name || ' usando Auto-Layout',
            'Exporte os assets em SVG para ícones e WebP para imagens',
            'Crie a estrutura de componentes no ' || targets.name,
            'Valide a acessibilidade e contraste'
        ),
        'tech_stack', jsonb_build_array(sources.name, targets.name, 'Frontend', 'Workflow')
    )
FROM sources CROSS JOIN targets
ON CONFLICT (slug) DO NOTHING; -- Evita erro se já rodou antes