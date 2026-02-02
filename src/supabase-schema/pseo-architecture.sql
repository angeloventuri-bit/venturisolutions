-- EXTENSÕES
-- Habilita busca vetorial para IA
create extension if not exists vector;

-- TABELA 1: TECNOLOGIAS (As variáveis do pSEO)
create table technologies (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null, -- ex: "React", "Figma"
  slug text not null unique, -- ex: "react", "figma"
  category text, -- ex: "Design Tool", "Framework"
  icon_url text,
  description text
);

-- TABELA 2: TEMPLATES pSEO (O esqueleto da página)
create table pseo_templates (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null, -- ex: "Comparativo Tecnico"
  title_pattern text not null, -- ex: "Como integrar {{tool}} com {{tech}} para alta performance"
  meta_description_pattern text, 
  structure_json jsonb not null -- O layout dos componentes da página
);

-- TABELA 3: PÁGINAS GERADAS (A combinação final)
create table generated_pages (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  slug text not null unique, -- ex: "integracao-figma-react"
  title text not null,
  meta_description text,
  
  -- Relacionamentos
  template_id uuid references pseo_templates(id),
  primary_tech_id uuid references technologies(id),
  secondary_tech_id uuid references technologies(id),
  
  -- Conteúdo Rico
  content_data jsonb, -- Dados específicos preenchidos pela IA
  
  -- IA & Busca Semântica
  embedding vector(1536), -- Vetor da OpenAI para linkagem interna
  
  -- Controle de Indexação
  is_published boolean default false,
  last_indexed_at timestamp with time zone
);

-- INDEXES (Performance Extrema)
create index on generated_pages (slug);
create index on generated_pages using ivfflat (embedding vector_cosine_ops)
  with (lists = 100); -- Acelera busca de posts relacionados

-- RLS (Segurança)
alter table technologies enable row level security;
alter table pseo_templates enable row level security;
alter table generated_pages enable row level security;

create policy "Public Read Access" on technologies for select using (true);
create policy "Public Read Access" on pseo_templates for select using (true);
create policy "Public Read Access" on generated_pages for select using (true);