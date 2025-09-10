import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, changeLanguage, t } = useLanguage();
  const location = useLocation();

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.blog'), href: '/blog' },
    { name: t('nav.team'), href: '#team' },
    { name: t('nav.contact'), href: '#contact' },
    { name: t('nav.payment'), href: '/payment' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass border-b border-primary-200/50 shadow-elegant' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 rtl:space-x-reverse"
          >
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
              <span className="text-white font-bold text-lg drop-shadow-sm">P</span>
            </div>
            <span className="text-2xl font-bold text-gradient drop-shadow-sm">
              Portal Media
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.href.startsWith('/') ? (
                  <Link
                    to={item.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                      location.pathname === item.href
                        ? 'text-primary-600'
                        : isScrolled
                        ? 'text-gray-700 hover:text-primary-600'
                        : 'text-white hover:text-primary-300'
                    }`}
                  >
                    {item.name}
                    {location.pathname === item.href && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-600 to-primary-400"
                      />
                    )}
                  </Link>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                      isScrolled
                        ? 'text-gray-700 hover:text-primary-600'
                        : 'text-white hover:text-primary-300'
                    }`}
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language Switcher */}
            <div className="flex glass rounded-lg p-1 shadow-soft">
              <button
                onClick={() => changeLanguage('en')}
                className={`flex items-center px-3 py-1.5 rounded-md transition-all duration-300 hover:scale-105 ${
                  language === 'en' 
                    ? 'bg-white shadow-soft text-primary-600 font-medium' 
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-sm mr-1.5 rtl:ml-1.5 rtl:mr-0">🇺🇸</span>
                <span className="text-xs font-medium">EN</span>
              </button>
              <button
                onClick={() => changeLanguage('ar')}
                className={`flex items-center px-3 py-1.5 rounded-md transition-all duration-300 hover:scale-105 ${
                  language === 'ar' 
                    ? 'bg-white shadow-soft text-primary-600 font-medium' 
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-sm mr-1.5 rtl:ml-1.5 rtl:mr-0">🇸🇦</span>
                <span className="text-xs font-medium">AR</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg glass text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-soft"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden glass rounded-xl mt-2 border border-primary-200/30 shadow-elegant"
        >
          <nav className="py-4">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.href.startsWith('/') ? (
                  <Link
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-6 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300 font-medium rounded-lg mx-2"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    onClick={() => {
                      scrollToSection(item.href);
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-6 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300 font-medium rounded-lg mx-2"
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;