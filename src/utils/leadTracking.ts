// Lead Tracking & Analytics Utilities

export interface LeadSource {
  type: 'organic' | 'paid' | 'direct' | 'referral' | 'social';
  medium?: string;
  campaign?: string;
  source?: string;
  term?: string;
  content?: string;
  referrer?: string;
  landingPage?: string;
  device?: string;
  browser?: string;
  timestamp?: string;
}

export interface Lead {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  empresa: string;
  nicho?: string;
  servicoInteresse?: string;
  faturamentoMensal?: string;
  desafio: string;
  source: LeadSource;
  status: 'novo' | 'contato-inicial' | 'qualificado' | 'proposta' | 'negociacao' | 'ganho' | 'perdido';
  createdAt: string;
  updatedAt: string;
  notes?: string[];
  value?: number;
}

// Get UTM parameters from URL
export function getUTMParameters(): Record<string, string> {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || '',
    utm_medium: params.get('utm_medium') || '',
    utm_campaign: params.get('utm_campaign') || '',
    utm_term: params.get('utm_term') || '',
    utm_content: params.get('utm_content') || '',
  };
}

// Detect traffic source
export function detectTrafficSource(): LeadSource {
  const utmParams = getUTMParameters();
  const referrer = document.referrer;
  
  // Detect device
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const device = isMobile ? 'mobile' : 'desktop';
  
  // Detect browser
  const userAgent = navigator.userAgent;
  let browser = 'unknown';
  if (userAgent.includes('Chrome')) browser = 'Chrome';
  else if (userAgent.includes('Safari')) browser = 'Safari';
  else if (userAgent.includes('Firefox')) browser = 'Firefox';
  else if (userAgent.includes('Edge')) browser = 'Edge';
  
  // If UTM parameters exist - it's tracked traffic
  if (utmParams.utm_source || utmParams.utm_medium) {
    const isPaid = utmParams.utm_medium?.toLowerCase().includes('cpc') ||
                   utmParams.utm_medium?.toLowerCase().includes('ppc') ||
                   utmParams.utm_medium?.toLowerCase().includes('paid') ||
                   utmParams.utm_source?.toLowerCase().includes('google_ads') ||
                   utmParams.utm_source?.toLowerCase().includes('facebook_ads');
    
    return {
      type: isPaid ? 'paid' : 'organic',
      source: utmParams.utm_source,
      medium: utmParams.utm_medium,
      campaign: utmParams.utm_campaign,
      term: utmParams.utm_term,
      content: utmParams.utm_content,
      referrer: referrer,
      landingPage: window.location.pathname,
      device,
      browser,
      timestamp: new Date().toISOString()
    };
  }
  
  // Check referrer for social media
  const socialPatterns = {
    facebook: /facebook\.com/i,
    instagram: /instagram\.com/i,
    linkedin: /linkedin\.com/i,
    twitter: /twitter\.com|x\.com/i,
    youtube: /youtube\.com/i,
  };
  
  for (const [platform, pattern] of Object.entries(socialPatterns)) {
    if (pattern.test(referrer)) {
      return {
        type: 'social',
        source: platform,
        referrer: referrer,
        landingPage: window.location.pathname,
        device,
        browser,
        timestamp: new Date().toISOString()
      };
    }
  }
  
  // Check for organic search
  const searchEngines = {
    google: /google\./i,
    bing: /bing\./i,
    yahoo: /yahoo\./i,
    duckduckgo: /duckduckgo\./i,
  };
  
  for (const [engine, pattern] of Object.entries(searchEngines)) {
    if (pattern.test(referrer)) {
      return {
        type: 'organic',
        source: engine,
        medium: 'organic',
        referrer: referrer,
        landingPage: window.location.pathname,
        device,
        browser,
        timestamp: new Date().toISOString()
      };
    }
  }
  
  // Has referrer but not classified - it's a referral
  if (referrer && referrer !== '') {
    return {
      type: 'referral',
      source: new URL(referrer).hostname,
      referrer: referrer,
      landingPage: window.location.pathname,
      device,
      browser,
      timestamp: new Date().toISOString()
    };
  }
  
  // No referrer - direct traffic
  return {
    type: 'direct',
    source: 'direct',
    medium: 'none',
    landingPage: window.location.pathname,
    device,
    browser,
    timestamp: new Date().toISOString()
  };
}

// Save lead to localStorage (in production, use real backend)
export function saveLead(leadData: Omit<Lead, 'id' | 'source' | 'createdAt' | 'updatedAt'>): Lead {
  const source = detectTrafficSource();
  const lead: Lead = {
    ...leadData,
    id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    source,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    notes: [],
  };
  
  // Get existing leads
  const leads = getLeads();
  leads.push(lead);
  
  // Save to localStorage
  localStorage.setItem('venturi_leads', JSON.stringify(leads));
  
  return lead;
}

// Get all leads
export function getLeads(): Lead[] {
  const leadsJSON = localStorage.getItem('venturi_leads');
  return leadsJSON ? JSON.parse(leadsJSON) : [];
}

// Update lead
export function updateLead(id: string, updates: Partial<Lead>): void {
  const leads = getLeads();
  const index = leads.findIndex(l => l.id === id);
  
  if (index !== -1) {
    leads[index] = {
      ...leads[index],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem('venturi_leads', JSON.stringify(leads));
  }
}

// Add note to lead
export function addNoteToLead(id: string, note: string): void {
  const leads = getLeads();
  const lead = leads.find(l => l.id === id);
  
  if (lead) {
    if (!lead.notes) lead.notes = [];
    lead.notes.push(`[${new Date().toLocaleString('pt-BR')}] ${note}`);
    updateLead(id, { notes: lead.notes });
  }
}

// Get leads by status
export function getLeadsByStatus(status: Lead['status']): Lead[] {
  return getLeads().filter(l => l.status === status);
}

// Get analytics summary
export function getLeadAnalytics() {
  const leads = getLeads();
  
  const bySource = leads.reduce((acc, lead) => {
    const source = lead.source.type;
    acc[source] = (acc[source] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const byStatus = leads.reduce((acc, lead) => {
    acc[lead.status] = (acc[lead.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  return {
    total: leads.length,
    bySource,
    byStatus,
    recent: leads.slice(-10).reverse(),
  };
}

// Initialize tracking on page load
export function initializeTracking() {
  // Store initial traffic source in session
  if (!sessionStorage.getItem('venturi_traffic_source')) {
    const source = detectTrafficSource();
    sessionStorage.setItem('venturi_traffic_source', JSON.stringify(source));
  }
  
  // Track page views (in production, send to analytics)
  const pageview = {
    path: window.location.pathname,
    timestamp: new Date().toISOString(),
    source: detectTrafficSource(),
  };
  
  console.log('📊 Page View Tracked:', pageview);
}
