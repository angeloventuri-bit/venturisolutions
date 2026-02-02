#!/bin/bash

# ========================================
# Script de Teste Rápido - SEO Backend
# ========================================

echo "🚀 Testando Infraestrutura de SEO..."
echo ""

# Cores para output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Função para testar endpoint
test_endpoint() {
  local name=$1
  local url=$2
  local expected=$3
  
  echo -n "Testing $name... "
  
  response=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  
  if [ "$response" -eq 200 ]; then
    echo -e "${GREEN}✅ OK${NC} (HTTP $response)"
    return 0
  else
    echo -e "${RED}❌ FAIL${NC} (HTTP $response)"
    return 1
  fi
}

# ========================================
# PASSO 1: Descobrir PROJECT_ID
# ========================================

echo "📍 Procurando PROJECT_ID..."

# Tentar encontrar no arquivo info.tsx
if [ -f "utils/supabase/info.tsx" ]; then
  PROJECT_ID=$(grep -o "projectId.*=.*['\"].*['\"]" utils/supabase/info.tsx | cut -d'"' -f2 | cut -d"'" -f2)
  
  if [ -n "$PROJECT_ID" ]; then
    echo -e "${GREEN}✅ PROJECT_ID encontrado: $PROJECT_ID${NC}"
  else
    echo -e "${YELLOW}⚠️  PROJECT_ID não encontrado automaticamente${NC}"
    echo "Digite seu PROJECT_ID manualmente:"
    read PROJECT_ID
  fi
else
  echo -e "${YELLOW}⚠️  Arquivo info.tsx não encontrado${NC}"
  echo "Digite seu PROJECT_ID manualmente:"
  read PROJECT_ID
fi

echo ""

# ========================================
# PASSO 2: Testar Endpoints
# ========================================

BASE_URL="https://${PROJECT_ID}.supabase.co/functions/v1/make-server-26a83c87"

echo "🔍 Testando endpoints em: $BASE_URL"
echo ""

# Contador de sucessos
SUCCESS=0
TOTAL=6

# Teste 1: Health Check
if test_endpoint "Health Check" "$BASE_URL/health"; then
  ((SUCCESS++))
fi

# Teste 2: Sitemap XML
if test_endpoint "Sitemap XML" "$BASE_URL/sitemap.xml"; then
  ((SUCCESS++))
fi

# Teste 3: Robots.txt
if test_endpoint "Robots.txt" "$BASE_URL/robots.txt"; then
  ((SUCCESS++))
fi

# Teste 4: Organization Schema
if test_endpoint "Organization Schema" "$BASE_URL/schema/organization"; then
  ((SUCCESS++))
fi

# Teste 5: Cache GET (esperado 404 se vazio)
echo -n "Testing Cache GET... "
response=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/cache/test")
if [ "$response" -eq 404 ] || [ "$response" -eq 200 ]; then
  echo -e "${GREEN}✅ OK${NC} (HTTP $response - esperado)"
  ((SUCCESS++))
else
  echo -e "${RED}❌ FAIL${NC} (HTTP $response)"
fi

# Teste 6: Analytics POST
echo -n "Testing Analytics POST... "
response=$(curl -s -o /dev/null -w "%{http_code}" -X POST \
  -H "Content-Type: application/json" \
  -d '{"page":"/test","referrer":"test","userAgent":"test","timestamp":"2025-11-11T12:00:00Z"}' \
  "$BASE_URL/analytics/pageview")

if [ "$response" -eq 200 ]; then
  echo -e "${GREEN}✅ OK${NC} (HTTP $response)"
  ((SUCCESS++))
else
  echo -e "${RED}❌ FAIL${NC} (HTTP $response)"
fi

echo ""
echo "========================================="
echo "Resultado: $SUCCESS/$TOTAL testes passaram"
echo "========================================="

if [ $SUCCESS -eq $TOTAL ]; then
  echo -e "${GREEN}🎉 TODOS OS TESTES PASSARAM!${NC}"
  echo ""
  echo "✅ Backend está 100% funcional!"
  echo ""
  echo "📋 Próximos passos:"
  echo "1. Submeter ao Google Search Console"
  echo "2. URL do sitemap: $BASE_URL/sitemap.xml"
  echo "3. Aguardar 24-48h para indexação"
  echo ""
else
  echo -e "${YELLOW}⚠️  Alguns testes falharam${NC}"
  echo ""
  echo "Possíveis causas:"
  echo "- Backend não está rodando (fazer redeploy)"
  echo "- PROJECT_ID incorreto"
  echo "- Funções edge não foram deployadas"
  echo ""
  echo "Solução:"
  echo "cd supabase/functions"
  echo "supabase functions deploy server"
  echo ""
fi

# ========================================
# PASSO 3: Visualizar URLs
# ========================================

echo ""
echo "📍 URLs importantes:"
echo "-------------------"
echo "Sitemap:      $BASE_URL/sitemap.xml"
echo "Robots:       $BASE_URL/robots.txt"
echo "Schema:       $BASE_URL/schema/organization"
echo "Health:       $BASE_URL/health"
echo ""

# ========================================
# PASSO 4: Testar no navegador
# ========================================

echo "🌐 Quer abrir os endpoints no navegador? (y/n)"
read -r open_browser

if [ "$open_browser" = "y" ] || [ "$open_browser" = "Y" ]; then
  echo "Abrindo navegador..."
  
  # Detectar OS e abrir navegador
  if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    open "$BASE_URL/sitemap.xml"
  elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux
    xdg-open "$BASE_URL/sitemap.xml"
  elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
    # Windows
    start "$BASE_URL/sitemap.xml"
  fi
fi

echo ""
echo "✅ Teste concluído!"
