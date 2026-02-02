import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import { LandingPage } from './components/LandingPage';
import { DetailedPricingPage } from './components/DetailedPricingPage';
import { Presentation } from './components/Presentation';
import { SolutionPage } from './components/pages/SolutionPage';
import { BlogPage } from './components/pages/BlogPage';
import { BlogPostPage } from './components/pages/BlogPostPage';
import { ProgrammaticSEOPage } from './components/pages/ProgrammaticSEOPage';
import { NotFoundPage } from './components/pages/NotFoundPage';
import { PrivacyPolicyPage } from './components/pages/PrivacyPolicyPage';
import { TermsPage } from './components/pages/TermsPage';
import { LoginPage } from './components/admin/LoginPage';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { CRMPage } from './components/admin/CRMPage';
import { ComercialPage } from './components/admin/ComercialPage';
import { BlogManager } from './components/admin/BlogManager';
import { CartProvider, useCart } from './components/CartContext';
import { Cart } from './components/Cart';
import { Toaster } from 'sonner@2.0.3';
import { initializeTracking } from './utils/leadTracking';
import { PerformanceEnhancer } from './components/utils/PerformanceEnhancer';
import { ExitIntentPopup } from './components/popups/ExitIntentPopup';

// Protected Route Component
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('venturi_admin_token') === 'authenticated';

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? <>{children}</> : null;
}

// Tracking Initializer
function TrackingInitializer() {
  const location = useLocation();

  useEffect(() => {
    initializeTracking();
  }, [location]);

  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <TrackingInitializer />
        <PerformanceEnhancer />
        <ExitIntentPopup />
        <CartProvider>
          <Routes>
          {/* Public Routes */}
          <Route path="/" element={<CartAwareLayout><LandingPage /></CartAwareLayout>} />
          <Route path="/solucoes/:slug" element={<SolutionPage />} />
          
          {/* Blog Routes - REATIVADAS */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          
          {/* pSEO Routes - Black Belt Architecture */}
          <Route path="/topic/:slug" element={<ProgrammaticSEOPage />} />

          {/* Legal Pages */}
          <Route path="/privacidade" element={<PrivacyPolicyPage />} />
          <Route path="/termos" element={<TermsPage />} />
          
          {/* Admin Auth */}
          <Route path="/admin/login" element={<LoginPage />} />
          
          {/* Protected Admin Routes */}
          <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>}>
            <Route index element={<Navigate to="/admin/crm" replace />} />
            <Route path="crm" element={<CRMPage />} />
            <Route path="comercial" element={<ComercialPage />} />
            <Route path="presentation" element={<Presentation />} />
            <Route path="pricing" element={<DetailedPricingPage />} />
            <Route path="blog" element={<BlogManager />} />
          </Route>
          
          {/* Legacy Admin Routes (redirect to dashboard) */}
          <Route path="/admin/dashboard" element={<Navigate to="/admin/crm" replace />} />
          
          {/* Catch-all Routes - Redirect to Home */}
          <Route path="/preview_page.html" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        
        <Toaster 
          position="top-right" 
          theme="dark"
          toastOptions={{
            style: {
              background: 'rgba(20, 20, 20, 0.95)',
              border: '1px solid rgba(139, 21, 56, 0.3)',
              color: '#f5f5f5',
            },
          }}
        />
      </CartProvider>
    </BrowserRouter>
    </HelmetProvider>
  );
}

function CartAwareLayout({ children }: { children: React.ReactNode }) {
  const { items } = useCart();
  const hasItems = items.length > 0;

  return (
    <div className="size-full bg-background flex overflow-x-hidden">
      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 overflow-x-hidden ${hasItems ? 'lg:mr-[420px]' : ''}`}>
        {children}
      </div>

      {/* Fixed Shopping Cart Sidebar - Only on Landing Page with items */}
      {hasItems && (
        <div className="hidden lg:block fixed right-0 top-0 bottom-0 w-[420px] z-40">
          <Cart />
        </div>
      )}
    </div>
  );
}