export interface Solution {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  image: string;
  benefits: string[];
  features: string[];
  methodology?: {
    title: string;
    subtitle: string;
    items: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  pricing: {
    starter: number;
    professional: number;
    enterprise: number;
  };
  caseStudy?: {
    client: string;
    challenge: string;
    solution: string;
    results: string[];
  };
  faq: {
    question: string;
    answer: string;
  }[];
  portfolio?: string[];
}

export const solutions: Solution[] = [
  {
    id: '1',
    slug: 'ads-performance',
    title: 'Ads & Performance',
    subtitle: 'Mídia Paga como Instrumento de Previsibilidade Financeira e Expansão de Market Share',
    description: 'Utilizamos a metodologia VaaS (Value as a Service) para estruturar sua aquisição de clientes baseada em dados. Transformamos o investimento em mídia em projeção de receita consolidada, alinhando canais de descoberta e busca ao momento exato de compra do seu mercado.',
    icon: 'Megaphone',
    image: 'https://images.unsplash.com/photo-1680986070892-1b64bfe03338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYWRzfGVufDF8fHx8MTc2MTg1NTk3OXww&ixlib=rb-4.1.0&q=80&w=1080',
    benefits: [
      'Transformação do marketing de centro de custo em ativo estratégico previsível',
      'Estruturação de pipeline qualificado com projeção de faturamento trimestral',
      'Controle rigoroso de CAC e LTV para preservação de margem de lucro',
      'Metodologia VaaS: distribuição de valor por nível de consciência do consumidor',
      'Separação clara entre investimento em demanda futura (topo) e receita imediata (fundo)',
      'Business Intelligence com KPIs reais de negócio (ROAS, Taxa de Conversão, Ciclo)',
      'Relatórios orientados a dados para alinhamento com diretoria financeira',
      'Redução de volatilidade nas campanhas através de estruturação técnica de funil'
    ],
    features: [
      'Planejamento de Mídia & Forecast: Budget baseado em metas de faturamento',
      'Implementação VaaS Multicanal: Meta Ads, Google Ads e canais complementares',
      'Business Intelligence (BI): Dashboards com LTV, CAC, ROAS e Taxa de Conversão',
      'Atribuição Técnica de Canais: Clareza sobre função de cada investimento no DRE',
      'Otimização de Ativos (CRO): Melhoria de landing pages e criativos sem aumentar budget',
      'Redes Sociais (Topo de Funil): Educação de mercado e criação de demanda futura',
      'Google & Search (Fundo de Funil): Captura de intenção de compra e receita imediata',
      'Gestão de Performance: Monitoramento contínuo com foco em eficiência do caixa',
      'Relatórios Executivos: Análise periódica de resultados com próximos passos estratégicos',
      'Diagnóstico de Maturidade: Avaliação técnica do cenário atual e oportunidades',
      'Projeção de ROI: Modelagem financeira para suporte à tomada de decisão',
      'Transparência Total: Clareza absoluta sobre alocação de recursos e resultados'
    ],
    methodology: {
      title: 'Metodologia VaaS: Estruturação de Funil como Processo de Negócio',
      subtitle: 'Nossa premissa é técnica: o valor do seu entregável deve ser distribuído de acordo com o nível de consciência do consumidor para maximizar a eficiência do investimento',
      items: [
        {
          icon: 'TrendingUp',
          title: 'Redes Sociais: Demanda Futura (Topo de Funil)',
          description: 'Atuamos na etapa de descoberta. O investimento tem objetivo de educar o mercado e criar a demanda que será convertida nas semanas seguintes. Isso gera a previsibilidade de entrada de novas oportunidades no pipeline comercial.'
        },
        {
          icon: 'Target',
          title: 'Google & Search: Receita Imediata (Fundo de Funil)',
          description: 'Capturamos a intenção de compra existente. Direcionamos o cliente que já decidiu pela solução, garantindo a eficiência do caixa presente e ROI direto sobre o investimento em mídia.'
        },
        {
          icon: 'BarChart3',
          title: 'Controle Financeiro: Marketing como Ativo Estratégico',
          description: 'Ao conectar essas duas pontas, o marketing deixa de ser um centro de custo variável e passa a fornecer dados sólidos para a diretoria financeira. A falta de metodologia clara inflaciona o CAC - corrigimos essa distorção.'
        }
      ]
    },
    process: [
      {
        step: 1,
        title: 'Diagnóstico Executivo & Maturidade Digital',
        description: 'Análise profunda do cenário atual: histórico de campanhas, estrutura de custos, CAC real, LTV, ciclo de vendas e identificação de distorções na atribuição de canais. Mapeamos onde a empresa está e qual o potencial de eficiência.'
      },
      {
        step: 2,
        title: 'Planejamento de Mídia & Forecast Financeiro',
        description: 'Definição de budget baseado em metas de faturamento e projeção de ROI. Estruturamos o plano de mídia alinhado ao DRE, separando investimento em demanda futura (topo) e receita imediata (fundo) para garantir previsibilidade.'
      },
      {
        step: 3,
        title: 'Implementação Técnica VaaS Multicanal',
        description: 'Operacionalização das campanhas com estruturação técnica de funil. Configuração de pixels, eventos de conversão, integração com CRM e implementação da metodologia VaaS nos canais Meta Ads, Google Ads e complementares.'
      },
      {
        step: 4,
        title: 'Business Intelligence & Monitoramento de KPIs',
        description: 'Ativação de dashboards com KPIs reais de negócio: LTV, CAC, ROAS, Taxa de Conversão por Etapa, Ciclo de Vendas. Monitoramento contínuo com foco em eficiência do caixa e preservação de margem de lucro.'
      },
      {
        step: 5,
        title: 'Otimização de Ativos & CRO Estratégico',
        description: 'Análise técnica de performance dos ativos (landing pages, criativos, formulários). Implementação de melhorias para aumentar taxa de conversão sem aumentar investimento, maximizando eficiência do capital alocado.'
      },
      {
        step: 6,
        title: 'Gestão Contínua & Relatórios Executivos',
        description: 'Reuniões periódicas de report com foco em análise de resultados e definição de próximos passos estratégicos. Transparência total sobre alocação de recursos, performance e recomendações baseadas em dados para diretoria.'
      }
    ],
    pricing: {
      starter: 3500,
      professional: 7500,
      enterprise: 15000
    },
    caseStudy: {
      client: 'E-commerce B2C - Segmento Moda Feminina (R$ 2,5MM/ano)',
      challenge: 'Empresa enfrentava alta volatilidade nas campanhas digitais: CAC inflacionado em R$ 180 por cliente, ROI estagnado em 2.4x (abaixo do mínimo saudável de 4x) e ausência de metodologia clara de atribuição de canais. Tratavam todas as plataformas de forma homogênea, sem diferenciação entre descoberta (redes sociais) e intenção de compra (Google), resultando em desperdício estrutural de budget e leads desqualificados chegando ao time comercial.',
      solution: 'Implementamos a metodologia VaaS com estruturação técnica completa de funil: (1) Diagnóstico profundo identificando distorções na atribuição; (2) Separação estratégica entre investimento em demanda futura (Meta Ads - educação de mercado) e receita imediata (Google Ads - captura de intenção); (3) Reestruturação de campanhas com segmentação inteligente por nível de consciência; (4) Otimização de ativos de conversão; (5) Implementação de BI com KPIs reais de negócio.',
      results: [
        'ROI: crescimento de 2.4x para 7.6x (+216%) em 6 meses, ultrapassando benchmark do setor',
        'CAC: redução de R$ 180 para R$ 72 (-60%) através de atribuição técnica de canais',
        'Receita: crescimento de 280% mantendo o mesmo budget de mídia paga',
        'Taxa de Conversão: aumento de 145% via otimização de landing pages e jornada',
        'Pipeline Comercial: crescimento de 320% em leads qualificados com fit de ICP',
        'Previsibilidade: empresa passou a projetar faturamento trimestral com 87% de acuracidade'
      ]
    },
    faq: [
      {
        question: 'Para quem é o serviço Ads&Performance?',
        answer: 'Para empresas com produto validado que buscam escalar a operação com segurança e necessitam construir um pipeline de vendas qualificado e previsível. Ideal para gestores que entendem que o objetivo não é apenas "gerar leads", mas sim estruturar aquisição de clientes baseada em dados, com CAC monitorado e margem de lucro preservada.'
      },
      {
        question: 'Como a metodologia VaaS impacta minha equipe comercial?',
        answer: 'Entregamos leads com maior nível de consciência sobre a solução, o que tende a reduzir significativamente o ciclo de vendas e aumentar a taxa de fechamento do seu time comercial. A separação entre demanda futura (topo) e receita imediata (fundo) garante pipeline constante e previsível para a operação de vendas.'
      },
      {
        question: 'Qual o modelo de acompanhamento e transparência?',
        answer: 'Reuniões periódicas de report com foco em análise de resultados e definição de próximos passos estratégicos. Dashboards em tempo real com acesso 24/7 aos KPIs (LTV, CAC, ROAS, Taxa de Conversão). Transparência absoluta sobre alocação de recursos, performance e recomendações baseadas em dados para alinhamento com diretoria financeira.'
      },
      {
        question: 'A metodologia VaaS se aplica ao meu modelo de negócio?',
        answer: 'A metodologia é agnóstica de nicho, mas depende de um produto com proposta de valor clara e diferenciada. Avaliaremos a aderência do seu negócio durante o diagnóstico executivo inicial, analisando maturidade digital, estrutura de custos e potencial de eficiência na aquisição.'
      },
      {
        question: 'Qual o investimento mínimo recomendado em mídia paga?',
        answer: 'Recomendamos budget que permita operacionalizar simultaneamente as duas pontas do funil (topo e fundo) com volume estatístico suficiente para otimização. O diagnóstico executivo definirá o investimento ideal baseado em suas metas de faturamento, CAC-alvo e projeção de ROI. Geralmente R$ 5.000-10.000/mês para B2C e R$ 10.000-20.000/mês para B2B.'
      },
      {
        question: 'Como funciona a projeção de ROI e previsibilidade financeira?',
        answer: 'Estruturamos o plano de mídia alinhado ao DRE da empresa. Através da separação entre investimento em demanda futura (educação de mercado nas redes sociais) e receita imediata (captura no Google), conseguimos modelar projeção de faturamento trimestral com base em dados históricos e benchmarks de mercado.'
      },
      {
        question: 'Quanto tempo leva para estruturar e ver resultados?',
        answer: 'Estruturação inicial (diagnóstico + implementação técnica): 30-45 dias. Primeiros dados relevantes: 45-60 dias. Maturação completa do funil e previsibilidade consolidada: 90-120 dias. A partir do 4º mês, temos dados sólidos para projeções financeiras e otimização contínua de performance.'
      },
      {
        question: 'Qual o risco de continuar sem metodologia estruturada?',
        answer: 'Empresas sem metodologia clara de atribuição de canais geralmente inflam o CAC ao tentar vender diretamente em canais de descoberta, desperdiçando budget. A volatilidade nas campanhas impede projeção de faturamento, dificultando planejamento estratégico e alocação de recursos. O custo de oportunidade de cada trimestre perdido sem estruturação pode representar 3-5x o investimento em profissionalização.'
      }
    ]
  },
  {
    id: '2',
    slug: 'sites-landing-pages',
    title: 'Sites & Landing Pages',
    subtitle: 'Design que comunica. Estrutura que vende',
    description: 'Sites e landing pages desenvolvidos com nossa metodologia, transformando-os em máquinas de conversão. UX otimizada com copywriting persuasivo.',
    icon: 'Globe',
    image: 'https://images.unsplash.com/photo-1727527584348-7aa2d3657ff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjE3ODE5OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    benefits: [
      'Taxa de conversão 2-3x maior',
      'Design premium e responsivo',
      'Copywriting estratégico incluído',
      'SEO técnico desde o início',
      'Integração com CRM e automações'
    ],
    features: [
      'UX/UI Design Premium',
      'Copywriting Persuasivo',
      'Desenvolvimento Responsivo',
      'SEO On-Page Otimizado',
      'Integração CRM (RD, HubSpot, etc)',
      'Analytics e Heatmaps',
      'Formulários Inteligentes',
      'Performance 90+ Lighthouse'
    ],
    process: [
      {
        step: 1,
        title: 'Discovery & Estratégia',
        description: 'Entendimento profundo do negócio, público e objetivos'
      },
      {
        step: 2,
        title: 'Wireframes & Arquitetura',
        description: 'Estruturação da jornada do usuário e mapa de conversão'
      },
      {
        step: 3,
        title: 'Design Premium',
        description: 'Criação de identidade visual alinhada à marca'
      },
      {
        step: 4,
        title: 'Desenvolvimento',
        description: 'Código limpo, performático e otimizado para SEO'
      },
      {
        step: 5,
        title: 'Testes & Otimização',
        description: 'CRO (Conversion Rate Optimization) contínua'
      }
    ],
    pricing: {
      starter: 5000,
      professional: 12000,
      enterprise: 30000
    },
    portfolio: [
      'https://beneshop.venturidigitalsolution.com.br',
      'https://www.drrafaelonco.com.br',
      'https://emporioroma.venturidigitalsolution.com.br',
      'https://telemedicina.kauymartinez.com.br',
      'https://simposiodecirurgiadotrauma.figma.site',
      'https://brightmedia.figma.site',
      'https://gauge-perm-04601532.figma.site'
    ],
    faq: [
      {
        question: 'Quanto tempo leva para desenvolver um site?',
        answer: 'Landing page: 2-3 semanas. Site institucional: 4-6 semanas. Site complexo/e-commerce: 8-12 semanas. O prazo pode variar conforme a complexidade e aprovações necessárias.'
      },
      {
        question: 'O site ficará registrado no meu nome?',
        answer: 'Sim, 100%. Você terá propriedade total e acesso completo ao código, domínio e hospedagem. Somos executores do projeto, mas toda propriedade intelectual é sua.'
      },
      {
        question: 'Vocês oferecem serviço de manutenção?',
        answer: 'Sim, oferecemos planos de manutenção mensal que incluem updates de segurança, correções, ajustes de conteúdo e otimizações contínuas.'
      },
      {
        question: 'Qual o investimento para desenvolver um site?',
        answer: 'O investimento varia conforme a complexidade do projeto, número de páginas, integrações necessárias e funcionalidades. Entre em contato para receber uma proposta personalizada.'
      },
      {
        question: 'O site será responsivo para celular?',
        answer: 'Sim, todos os nossos sites são desenvolvidos com design responsivo, garantindo excelente experiência em desktop, tablet e smartphone.'
      }
    ]
  },
  {
    id: '3',
    slug: 'seo-geo-360',
    title: 'SEO/GEO 360',
    subtitle: 'Autoridade nas Buscas. Recomendação nas IAs.',
    description: 'Enquanto a mídia paga traz o resultado de hoje, o Programa de Performance Recorrente SEO & GEO constrói a segurança de amanhã. Utilizamos a metodologia VaaS para dominar as buscas orgânicas (Google) e generativas (IA), garantindo tráfego qualificado que não desaparece quando o orçamento de anúncios acaba.',
    icon: 'Search',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW8lMjBkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBncm93dGglMjBncmFwaCUyMHRlY2hub2xvZ3klMjBkYXJrJTIwbW9kZXxlbnwxfHx8fDE3NjM3NjM2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    benefits: [
      'Recomendado por IAs generativas (ChatGPT, Claude)',
      'Top 3 posições no Google e Google Maps',
      'Aumento de 70-150% em tráfego orgânico + tráfego de IAs',
      'Zero-Click Ready: Otimização para respostas diretas',
      'ROI Cumulativo: custo se mantém enquanto receita escala',
      'Autoridade de Marca Blindada: percepção de liderança real',
      'Patrimônio Digital: ativo que valoriza ao longo do tempo'
    ],
    features: [
      'SEO técnico tradicional: Otimização completa de site, velocidade, estrutura e indexação para Google',
      'GEO - Generative Engine Optimization: Otimização para ser recomendado por ChatGPT, Claude, Perplexity e outras IAs',
      'Google Business Profile: Perfil otimizado, posts semanais e gestão de avaliações para buscas locais',
      'Conteúdo estratégico: Criação de conteúdo que IAs entendem e recomendam + SEO tradicional',
      'Auditoria de Conteúdo & Potencial de Nicho',
      'Relatórios de Share of Answer & Otimização',
      'Schema Markup Customizado para IAs',
      'Topic Clusters & E-E-A-T Estratégico'
    ],
    methodology: {
      title: 'Dominação Híbrida: SEO + GEO',
      subtitle: 'O SEO tradicional garante que você seja encontrado. O GEO garante que você seja recomendado. Unimos as duas estratégias para dominar a atenção do cliente B2B.',
      items: [
        {
          icon: 'Cpu',
          title: 'Otimização para IAs (GEO)',
          description: 'Estruturamos seu conteúdo para ser a "Knowledge Source" preferida dos LLMs (Large Language Models). Focamos em citações diretas e Share of Answer no ChatGPT e Gemini.'
        },
        {
          icon: 'Award',
          title: 'Autoridade de Tópico e E-E-A-T',
          description: 'Em um mar de conteúdo genérico gerado por IA, a experiência humana vale ouro. Criamos Clusters de Conteúdo que demonstram Experiência, Especialidade, Autoridade e Confiança. Isso blinda sua marca.'
        },
        {
          icon: 'Zap',
          title: 'Fundação Técnica de Elite',
          description: 'Garantimos que o alicerce do seu site seja rápido e robusto. Monitoramos continuamente Core Web Vitals e Mobile-First Indexing, fatores indispensáveis para ranking.'
        }
      ]
    },
    process: [
      {
        step: 1,
        title: 'Auditoria de Conteúdo & Potencial de Nicho',
        description: 'Análise profunda do ecossistema atual: saúde técnica, lacunas de conteúdo e oportunidades no nicho. Mapeamos o que já existe, o que falta e onde estão as maiores oportunidades de autoridade no seu segmento específico.'
      },
      {
        step: 2,
        title: 'Pesquisa de Intenção e Palavras-Chave Estratégicas',
        description: 'Identificação dos termos estratégicos que seus clientes reais usam para encontrar soluções como a sua. Pesquisa semântica de intenção de busca e mapeamento de oportunidades GEO (perguntas que IAs respondem).'
      },
      {
        step: 3,
        title: 'Produção de Conteúdo de Nicho (VaaS)',
        description: 'Criação recorrente de conteúdo especializado e hiper-relevante para o seu setor. Fugimos do genérico: produzimos material com profundidade técnica que demonstra expertise real, alimentando tanto o Google quanto as IAs com informações de alto valor.'
      },
      {
        step: 4,
        title: 'Otimização Técnica & Fundação de Performance',
        description: 'Garantia de que o alicerce do site seja rápido, robusto e mobile-first. Correção de erros técnicos, otimização de velocidade, indexação, crawling e implementação de Core Web Vitals.'
      },
      {
        step: 5,
        title: 'Consultoria Continuada & Atendimento Recorrente',
        description: 'Não é um projeto pontual, é um acompanhamento constante. Reuniões periódicas de alinhamento, ajustes de rota e suporte estratégico contínuo para garantir que a produção de conteúdo esteja sempre alinhada aos objetivos de negócio em evolução.'
      },
      {
        step: 6,
        title: 'Monitoramento de Share of Answer & Otimização',
        description: 'Relatórios focados em crescimento de autoridade. Acompanhamento de tráfego qualificado, conversão e ROI. Gestão recorrente VaaS com ciclo contínuo de valorização do seu patrimônio digital.'
      }
    ],
    pricing: {
      starter: 4500,
      professional: 7500,
      enterprise: 12000
    },
    caseStudy: {
      client: 'SaaS B2B - Plataforma de Gestão Empresarial (R$ 8MM ARR)',
      challenge: 'Empresa dependia 100% de mídia paga para geração de leads, com CAC crescente e ausência total de tráfego orgânico. Sem presença nas buscas do Google para termos estratégicos do nicho e zero menções em respostas de IAs generativas (ChatGPT, Gemini). Conteúdo genérico gerado por IA sem autoridade ou diferenciação, resultando em invisibilidade digital estrutural.',
      solution: 'Desenvolvemos uma estratégia personalizada de Dominação Híbrida (SEO + GEO): (1) Auditoria técnica inicial; (2) Mapeamento de tópicos estratégicos e oportunidades de autoridade; (3) Consultoria para implementação de E-E-A-T e credenciais digitais; (4) Otimização semântica de conteúdos chave; (5) Ciclo de melhoria contínua VaaS focado nas metas de crescimento do cliente.',
      results: [
        'Tráfego Orgânico: crescimento de zero para 45.000 visitas/mês em 12 meses',
        'Share of Answer: marca citada em 67% das respostas de IAs para termos estratégicos do nicho',
        'Branded Searches: crescimento de 420% em buscas pela marca no Google',
        'Posicionamento: 23 termos competitivos na primeira página do Google',
        'CAC: redução de 35% ao complementar mídia paga com leads orgânicos qualificados',
        'ROI Composto: tráfego orgânico representa 40% do pipeline, sem custo recorrente de mídia'
      ]
    },
    faq: [
      {
        question: 'O SEO morreu com a chegada do ChatGPT e IAs generativas?',
        answer: 'Não, ele evoluiu. O SEO tradicional (focado apenas em palavras-chave e links azuis) perdeu força, mas o GEO (focado em resposta, autoridade e estruturação semântica) é mais importante do que nunca. As IAs precisam de fontes confiáveis para citar e construir respostas. Nós tornamos sua empresa essa fonte através de E-E-A-T rigoroso e dados estruturados.'
      },
      {
        question: 'Quanto tempo demora para ver o resultado constante?',
        answer: 'SEO é uma construção de ativo. Embora melhorias técnicas possam gerar ganhos rápidos (primeiras semanas), a consolidação da autoridade e o fluxo constante de tráfego orgânico sólido costumam maturar entre o 6º e o 12º mês, gerando dividendos por anos depois. Diferente de anúncios que param quando o orçamento acaba, o SEO/GEO continua trabalhando 24/7.'
      },
      {
        question: 'Por que não posso apenas usar IA para escrever todo meu conteúdo?',
        answer: 'Porque o Google e os LLMs valorizam o Information Gain (Ganho de Informação) e a experiência humana genuína. Conteúdo 100% gerado por IA é considerado commodity genérica e perde ranking rapidamente. Nossa estratégia usa IA para escala operacional, mas humanos especialistas para autoridade, credibilidade e E-E-A-T, o que gera diferenciação real.'
      },
      {
        question: 'O que é Share of Answer e por que isso importa?',
        answer: 'Share of Answer é a métrica que mede quantas vezes sua marca é citada como fonte de autoridade nas respostas das IAs (ChatGPT, Gemini, SGE). Com o Efeito Zero-Click, o usuário não precisa mais clicar no seu site para obter a resposta. Portanto, o sucesso não é mais apenas tráfego bruto, mas ser a fonte escolhida pela IA para compor suas respostas, garantindo visibilidade e credibilidade.'
      },
      {
        question: 'Qual a diferença entre SEO tradicional e GEO (Generative Engine Optimization)?',
        answer: 'SEO tradicional foca em rankear nos "links azuis" do Google através de palavras-chave e backlinks. GEO foca em estruturar o conteúdo para ser compreendido, extraído e citado pelas IAs generativas (ChatGPT, Gemini, SGE). Inclui: Chunkability (fragmentação lógica), Schema Markup avançado, E-E-A-T rigoroso, formato Q&A e densidade semântica. Nossa Dominação Híbrida une os dois mundos.'
      },
      {
        question: 'Como funciona a metodologia de recorrência VaaS aplicada ao SEO/GEO?',
        answer: 'Não oferecemos "otimização pontual". Oferecemos parceria estratégica recorrente baseada em Value as a Service (VaaS). Ciclo contínuo: (1) Monitoramento técnico Core Web Vitals; (2) Criação e atualização mensal de Topic Clusters; (3) Revisão e enriquecimento de conteúdo com E-E-A-T; (4) Implementação de Schema Markup; (5) Relatórios de Share of Answer. As IAs valorizam atualização constante - garantimos isso.'
      },
      {
        question: 'Já invisto em Google Ads, preciso de SEO?',
        answer: 'Sim. O Google Ads aluga o espaço; o SEO garante a presença. Dados mostram que marcas que aparecem tanto no anúncio quanto no orgânico têm taxas de conversão muito superiores. Além disso, o SEO protege sua empresa caso o custo do Ads suba demais. É a diferença entre alugar e ter casa própria - você precisa dos dois para equilíbrio.'
      },
      {
        question: 'O que é "Link Building White Hat" que vocês mencionam?',
        answer: 'É a construção ética de autoridade. Em vez de tentar enganar o Google (o que gera punições), nós criamos conexões reais e digitais que fazem outros sites relevantes citarem o seu, aumentando sua reputação perante o algoritmo. Isso inclui guest posts em sites relevantes, menções em portais de notícias, parcerias estratégicas e conteúdo tão bom que as pessoas naturalmente linkam.'
      },
      {
        question: 'Por que vocês falam em "Patrimônio Digital" e não apenas tráfego?',
        answer: 'Porque tráfego de anúncios é aluguel - quando você para de pagar, ele desaparece. SEO/GEO constrói um ativo: autoridade, posicionamento, conteúdo indexado e credibilidade que pertencem à sua empresa. É um investimento que valoriza com o tempo, não um custo recorrente. O ROI é cumulativo: custo se mantém, receita escala, margem líquida aumenta.'
      },
      {
        question: 'Minha empresa está vulnerável dependendo só de mídia paga?',
        answer: 'Sim. A inflação dos leilões de anúncios e mudanças de algoritmo podem destruir sua margem da noite para o dia. Empresas 100% dependentes de ads vivem sob constante pressão de CAC crescente. SEO/GEO 360 cria independência estratégica: você continua com ads para receita imediata, mas constrói patrimônio orgânico para segurança de longo prazo e sustentabilidade do negócio.'
      },
      {
        question: 'Como funciona o "Efeito Zero-Click" e por que preciso de GEO?',
        answer: 'Com a ascensão da IA (ChatGPT, Gemini, Google SGE), o usuário muitas vezes nem clica no site - a resposta aparece diretamente na busca. Se você não for a fonte citada pela IA, fica invisível. GEO (Generative Engine Optimization) estrutura seu conteúdo para ser a "verdade" escolhida pelas IAs, garantindo sua visibilidade onde o tráfego do futuro está.'
      },
      {
        question: 'Qual o risco de continuar sem SEO/GEO estruturado?',
        answer: 'O risco é duplo: (1) Dependência insustentável de mídia paga com CAC crescente destruindo sua margem; (2) Irrelevância digital progressiva na era da IA - seus concorrentes que investirem em GEO agora se tornarão as autoridades incumbentes. Cada trimestre perdido sem construir patrimônio digital representa dinheiro deixado na mesa e vantagem competitiva entregue aos concorrentes.'
      }
    ]
  },
  {
    id: '4',
    slug: 'reestruturacao-estrategica',
    title: 'Reestruturação Estratégica',
    subtitle: 'Transforme seu negócio em uma máquina de crescimento',
    description: 'Programa intensivo (8 a 12 semanas) com diagnóstico completo. Mapeamos gargalos, redefinimos ICP e entregamos plano de ação estratégico.',
    icon: 'Compass',
    image: 'https://images.unsplash.com/photo-1554132575-4181f1e1288e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHJlc3RydWN0dXJlJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzYxODU1OTgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    benefits: [
      'Clareza total sobre próximos passos',
      'ICP e personas bem definidos',
      'Plano de ação executável',
      'Metodologia VaaS implementada',
      'Handover completo e documentado'
    ],
    features: [
      'Diagnóstico SWOT Profundo',
      'Definição de ICP e Personas',
      'Análise de Concorrência',
      'Mapeamento de Jornada do Cliente',
      'Estratégia de Funil Completo',
      'Plano de Ação 90 dias',
      'Priorização de Iniciativas',
      'Workshops com Time'
    ],
    process: [
      {
        step: 1,
        title: 'Imersão (Semana 1-2)',
        description: 'Entrevistas, análises e coleta de dados do negócio'
      },
      {
        step: 2,
        title: 'Diagnóstico (Semana 3-4)',
        description: 'Identificação de gargalos e oportunidades estratégicas'
      },
      {
        step: 3,
        title: 'Estratégia (Semana 5-7)',
        description: 'Desenvolvimento do plano de crescimento estruturado'
      },
      {
        step: 4,
        title: 'Apresentação (Semana 8)',
        description: 'Workshop com stakeholders e alinhamento de próximos passos'
      },
      {
        step: 5,
        title: 'Handover (Semana 9-12)',
        description: 'Suporte na implementação inicial das recomendações'
      }
    ],
    pricing: {
      starter: 15000,
      professional: 30000,
      enterprise: 60000
    },
    faq: [
      {
        question: 'Quem participa do processo?',
        answer: 'Idealmente CEO/Founders, CMO, Head de Vendas e principais stakeholders. Quanto mais envolvimento, melhores os resultados.'
      },
      {
        question: 'Vocês implementam ou só entregam o plano?',
        answer: 'Entregamos o plano completo e podemos implementar se contratar nossos outros serviços (Ads, Sites, SEO, etc).'
      },
      {
        question: 'Vale a pena para empresa pequena?',
        answer: 'Absolutamente! Quanto mais cedo estruturar, mais rápido escala. Empresas pequenas têm ainda mais a ganhar com clareza estratégica.'
      }
    ]
  },
  {
    id: '5',
    slug: 'treinamento-comercial',
    title: 'Treinamento Comercial',
    subtitle: 'Transforme seu time em máquina de vendas',
    description: 'Programas de capacitação personalizados para equipes de vendas, marketing e liderança. Metodologia prática e resultados mensuráveis.',
    icon: 'GraduationCap',
    image: 'https://images.unsplash.com/photo-1761258772183-6a905c8b95fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFpbmluZyUyMHRlYW0lMjBjb2FjaGluZ3xlbnwxfHx8fDE3NjE4NTU5ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    benefits: [
      'Produtividade 2-3x maior',
      'Redução de turnover',
      'Processos padronizados',
      'Autonomia da equipe',
      'Cultura de alta performance'
    ],
    features: [
      'Capacitação em Vendas Consultivas',
      'Metodologia SPIN Selling',
      'Técnicas de Negociação',
      'Gestão de Objeções',
      'Performance em Apresentações',
      'CRM e Ferramentas',
      'Coaching Individual',
      'Certificação Final'
    ],
    process: [
      {
        step: 1,
        title: 'Diagnóstico do Time',
        description: 'Avaliação de skills atuais e gaps de conhecimento'
      },
      {
        step: 2,
        title: 'Programa Customizado',
        description: 'Desenho de treinamento alinhado à realidade do negócio'
      },
      {
        step: 3,
        title: 'Treinamentos Práticos',
        description: 'Workshops hands-on com role-plays e simulações'
      },
      {
        step:4,
        title: 'Implementação',
        description: 'Aplicação prática no dia-a-dia com acompanhamento'
      },
      {
        step: 5,
        title: 'Mentoria Contínua',
        description: 'Suporte ongoing para garantir absorção do conhecimento'
      }
    ],
    pricing: {
      starter: 8000,
      professional: 18000,
      enterprise: 40000
    },
    faq: [
      {
        question: 'Quantas pessoas podem participar?',
        answer: 'Ideal: 5-15 pessoas por turma. Acima disso, recomendamos múltiplas turmas para garantir qualidade.'
      },
      {
        question: 'É presencial ou online?',
        answer: 'Oferecemos ambos. Presencial tem maior engajamento, mas online permite participação remota e maior flexibilidade.'
      },
      {
        question: 'Como medir o ROI do treinamento?',
        answer: 'Métricas: aumento em taxa de conversão, ticket médio, ciclo de vendas, NPS do time. Resultados visíveis em 30-90 dias.'
      }
    ]
  },
  {
    id: '6',
    slug: 'agentes-ia',
    title: 'Agentes de IA',
    subtitle: 'Automação inteligente e assistentes virtuais',
    description: 'Agentes virtuais de IA personalizados capazes de qualificar leads, agendar reuniões e responder clientes 24h.',
    icon: 'Bot',
    image: 'https://images.unsplash.com/photo-1625314887424-9f190599bd56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwcm9ib3R8ZW58MXx8fHwxNzYxNzYxNTY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    benefits: [
      'Atendimento 24/7 sem custo extra',
      'Qualificação automática de leads',
      'Agendamentos sem intervenção humana',
      'Escalabilidade infinita',
      'ROI de 10x+ no primeiro ano'
    ],
    features: [
      'Chatbot Inteligente',
      'Qualificação Automática de Leads',
      'Agendamento de Reuniões',
      'Integração com CRM',
      'Respostas Personalizadas',
      'Múltiplos Canais (Web, WhatsApp, Email)',
      'Análise de Sentimento',
      'Treinamento Contínuo'
    ],
    process: [
      {
        step: 1,
        title: 'Mapeamento de Processos',
        description: 'Identificação de tarefas repetitivas que podem ser automatizadas'
      },
      {
        step: 2,
        title: 'Desenvolvimento do Agente',
        description: 'Criação e treinamento da IA com base no seu negócio'
      },
      {
        step: 3,
        title: 'Integração',
        description: 'Conexão com CRM, calendário, WhatsApp e outros sistemas'
      },
      {
        step:4,
        title: 'Testes & Ajustes',
        description: 'Período de calibração para otimizar respostas'
      },
      {
        step: 5,
        title: 'Monitoramento',
        description: 'Análise de performance e melhorias contínuas'
      }
    ],
    pricing: {
      starter: 4500,
      professional: 9500,
      enterprise: 20000
    },
    faq: [
      {
        question: 'A IA substitui vendedores?',
        answer: 'Não! Ela POTENCIALIZA vendedores. IA cuida do repetitivo (qualificação, agendamento), humanos focam em fechar e relacionamento.'
      },
      {
        question: 'Quanto tempo para implementar?',
        answer: 'Chatbot básico: 2-3 semanas. Agente completo integrado: 6-8 semanas.'
      },
      {
        question: 'Funciona para qualquer segmento?',
        answer: 'Sim! Já implementamos em SaaS, e-commerce, serviços B2B, educação, saúde, etc. Customizamos para cada realidade.'
      }
    ]
  }
];

// Helper functions
export const getSolutionBySlug = (slug: string): Solution | undefined => {
  return solutions.find(solution => solution.slug === slug);
};

export const getAllSolutions = (): Solution[] => {
  return solutions;
};