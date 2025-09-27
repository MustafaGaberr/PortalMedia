import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const ScrollToTop = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const heroHeight = window.innerHeight; // Approximate hero section height
      setIsVisible(window.scrollY > heroHeight * 0.8); // Show when 80% past hero
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className={`fixed bottom-24 z-40 w-12 h-12 rounded-full items-center justify-center hover:shadow-lg transition-all duration-200 hidden sm:flex ${
            language === 'ar' ? 'left-6' : 'right-6'
          }`}
          style={{
            background: 'linear-gradient(to right, var(--primary-color), var(--accent-color))',
            boxShadow: '0 4px 12px rgba(95, 109, 176, 0.25)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(95, 109, 176, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(95, 109, 176, 0.25)';
          }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" style={{ color: '#212529' }} />
        </motion.button>
      )}
    </>
  );
};

export default ScrollToTop;
