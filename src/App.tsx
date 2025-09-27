import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { ToastProvider, useToast } from './contexts/ToastContext';

// Components
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ScrollToTopButton from './components/ScrollToTopButton';
import ScrollToTopOnRouteChange from './components/ScrollToTopOnRouteChange';
import ToastContainer from './components/ToastContainer';
import AnimatedBackground from './components/AnimatedBackground';

// Lazy loaded components
const Footer = React.lazy(() => import('./components/Footer'));
const FloatingChatbot = React.lazy(() => import('./components/FloatingChatbot'));

// Pages
import BlogPage from './pages/BlogPage';
import PaymentPage from './pages/PaymentPage';

const AppContent: React.FC = () => {
  const { toasts, removeToast } = useToast();
  
  return (
    <Router>
      <ScrollToTopOnRouteChange />
      <div className="App overflow-x-hidden min-h-screen">
        <AnimatedBackground />
        <Header />
        <main className="overflow-x-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPage />} />
            <Route path="/payment" element={<PaymentPage />} />
          </Routes>
        </main>
        <Suspense fallback={<div className="min-h-[200px] bg-gray-100 animate-pulse"></div>}>
          <Footer />
        </Suspense>
        <Suspense fallback={null}>
          <FloatingChatbot />
        </Suspense>
        <ScrollToTopButton />
        <ToastContainer toasts={toasts} onClose={removeToast} />
      </div>
    </Router>
  );
};

function App() {
  return (
    <LanguageProvider>
      <ToastProvider>
        <AppContent />
      </ToastProvider>
    </LanguageProvider>
  );
}

export default App;