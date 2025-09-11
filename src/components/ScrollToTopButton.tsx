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
          className={`fixed bottom-24 z-40 bg-gradient-to-r from-blue-600 to-blue-700 w-12 h-12 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hidden sm:flex ${
            language === 'ar' ? 'left-6' : 'right-6'
          }`}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </motion.button>
      )}
    </>
  );
};

export default ScrollToTop;
