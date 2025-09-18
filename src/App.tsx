import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { ToastProvider, useToast } from './contexts/ToastContext';

// Components
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import FloatingChatbot from './components/FloatingChatbot';
import ScrollToTopButton from './components/ScrollToTopButton';
import ScrollToTopOnRouteChange from './components/ScrollToTopOnRouteChange';
import ToastContainer from './components/ToastContainer';

// Pages
import BlogPage from './pages/BlogPage';
import PaymentPage from './pages/PaymentPage';

const AppContent: React.FC = () => {
  const { toasts, removeToast } = useToast();
  
  return (
    <Router>
      <ScrollToTopOnRouteChange />
      <div className="App overflow-x-hidden min-h-screen">
        <Header />
        <main className="overflow-x-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPage />} />
            <Route path="/payment" element={<PaymentPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingChatbot />
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