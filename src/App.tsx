import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';

// Components
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import FloatingChatbot from './components/FloatingChatbot';
import ScrollToTopButton from './components/ScrollToTopButton';
import ScrollToTopOnRouteChange from './components/ScrollToTopOnRouteChange';

// Pages
import BlogPage from './pages/BlogPage';
import PaymentPage from './pages/PaymentPage';

const AppContent: React.FC = () => {
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
      </div>
    </Router>
  );
};

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;