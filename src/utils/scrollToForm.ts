/**
 * Utility para scroll suave até o formulário de contato
 * Lida com lazy loading e garante que o scroll sempre funcione
 * 
 * IMPORTANTE: O CTASection está dentro de um LazyLoad que só renderiza
 * quando o usuário rola até próximo da seção. Esta função primeiro
 * força o trigger do LazyLoad e depois faz o scroll fino.
 */

export function scrollToForm() {
  const scrollToElement = () => {
    const element = document.querySelector('#cta');
    if (element) {
      // Scroll com margem superior para não ficar colado no topo
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 80; // 80px de margem
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      return true;
    }
    return false;
  };

  // Tenta scroll imediato primeiro
  const success = scrollToElement();
  
  // Se não encontrou o elemento, significa que está no LazyLoad
  if (!success) {
    // Passo 1: Força um scroll até o final da página para trigger do LazyLoad
    // Usa smooth para dar tempo do IntersectionObserver detectar
    const documentHeight = document.documentElement.scrollHeight;
    const targetScroll = documentHeight - window.innerHeight - 100; // 100px antes do fim
    
    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
    
    // Passo 2: Aguarda o LazyLoad renderizar (rootMargin é 200px)
    // e então faz o scroll fino até o formulário
    setTimeout(() => {
      const retrySuccess = scrollToElement();
      
      // Passo 3: Se ainda não funcionou, tenta mais uma vez
      if (!retrySuccess) {
        setTimeout(scrollToElement, 300);
      }
    }, 400); // Tempo maior para garantir que o LazyLoad renderizou
  }
}

export function scrollToSection(href: string) {
  const scrollToElement = () => {
    const element = document.querySelector(href);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 80;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      return true;
    }
    return false;
  };

  const success = scrollToElement();
  
  if (!success) {
    setTimeout(() => {
      const retrySuccess = scrollToElement();
      if (!retrySuccess) {
        setTimeout(scrollToElement, 200);
      }
    }, 100);
  }
}
