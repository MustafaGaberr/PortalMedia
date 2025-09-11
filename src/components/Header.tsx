import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const { language, changeLanguage, t } = useLanguage();
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLanguageChange = (lang: 'en' | 'ar') => {
    changeLanguage(lang);
    setIsLangDropdownOpen(false);
  };

  const getCurrentFlag = () => {
    return language === 'en' ? '🇺🇸' : '🇸🇦';
  };

  const getCurrentLanguageName = () => {
    return language === 'en' ? 'English' : 'العربية';
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
                        ? 'text-primary-500 font-semibold'
                        : isScrolled
                        ? 'text-gray-800 hover:text-primary-600'
                        : 'text-white hover:text-primary-200 drop-shadow-sm'
                    }`}
                  >
                    {item.name}
                    {location.pathname === item.href && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 shadow-glow"
                      />
                    )}
                  </Link>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                      isScrolled
                        ? 'text-gray-800 hover:text-primary-600'
                        : 'text-white hover:text-primary-200 drop-shadow-sm'
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
            {/* Language Dropdown - Hidden on mobile */}
            <div className="hidden lg:block relative" ref={dropdownRef}>
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center px-4 py-2 glass rounded-xl shadow-elegant border border-white/20 backdrop-blur-sm text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500/50 min-w-[120px]"
                title="Change Language"
              >
                <span className="text-lg mr-2 rtl:ml-2 rtl:mr-0 drop-shadow-sm">{getCurrentFlag()}</span>
                <span className="text-sm font-semibold tracking-wide flex-1 text-left rtl:text-right">{getCurrentLanguageName()}</span>
                <ChevronDown className={`w-4 h-4 ml-2 rtl:mr-2 rtl:ml-0 transition-transform duration-200 drop-shadow-sm ${
                  isLangDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>

              {/* Dropdown Menu */}
              {isLangDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className={`absolute top-full mt-2 glass rounded-xl shadow-elegant border border-white/20 backdrop-blur-sm overflow-hidden min-w-[140px] z-50 ${
                    language === 'ar' ? 'right-0' : 'left-0'
                  }`}
                >
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`w-full flex items-center px-4 py-3 text-left hover:bg-white/10 transition-all duration-200 ${
                      language === 'en' 
                        ? 'bg-white/20 text-white font-semibold' 
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    <span className="text-lg mr-3 rtl:ml-3 rtl:mr-0 drop-shadow-sm">🇺🇸</span>
                    <span className="text-sm font-medium">English</span>
                  </button>
                  <button
                    onClick={() => handleLanguageChange('ar')}
                    className={`w-full flex items-center px-4 py-3 text-left hover:bg-white/10 transition-all duration-200 ${
                      language === 'ar' 
                        ? 'bg-white/20 text-white font-semibold' 
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    <span className="text-lg mr-3 rtl:ml-3 rtl:mr-0 drop-shadow-sm">🇸🇦</span>
                    <span className="text-sm font-medium">العربية</span>
                  </button>
                </motion.div>
              )}
            </div>

            {/* Enhanced Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 rounded-xl glass text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-elegant border border-white/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50"
              title={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={22} className="drop-shadow-sm" /> : <Menu size={22} className="drop-shadow-sm" />}
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
                    className={`block px-6 py-3 transition-all duration-300 font-medium rounded-lg mx-2 ${
                      location.pathname === item.href
                        ? 'text-primary-600 bg-primary-50 border-l-4 border-primary-500 font-semibold'
                        : 'text-gray-800 hover:text-primary-600 hover:bg-primary-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    onClick={() => {
                      scrollToSection(item.href);
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-6 py-3 text-gray-800 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300 font-medium rounded-lg mx-2"
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
            
            {/* Language Switcher in Mobile Menu */}
            <div className="mx-2 mt-4 pt-4 border-t border-primary-200/30">
              <p className="px-6 py-2 text-xs text-gray-500 font-medium uppercase tracking-wide">
                Language / اللغة
              </p>
              <button
                onClick={() => handleLanguageChange('en')}
                className={`flex items-center w-full px-6 py-3 text-left transition-all duration-200 rounded-lg mx-0 ${
                  language === 'en'
                    ? 'text-primary-600 bg-primary-50 font-semibold'
                    : 'text-gray-800 hover:text-primary-600 hover:bg-primary-50'
                }`}
              >
                <span className="text-lg mr-3 rtl:ml-3 rtl:mr-0">🇺🇸</span>
                <span className="text-sm font-medium">English</span>
                {language === 'en' && (
                  <span className="ml-auto text-primary-600">✓</span>
                )}
              </button>
              <button
                onClick={() => handleLanguageChange('ar')}
                className={`flex items-center w-full px-6 py-3 text-left transition-all duration-200 rounded-lg mx-0 ${
                  language === 'ar'
                    ? 'text-primary-600 bg-primary-50 font-semibold'
                    : 'text-gray-800 hover:text-primary-600 hover:bg-primary-50'
                }`}
              >
                <span className="text-lg mr-3 rtl:ml-3 rtl:mr-0">🇸🇦</span>
                <span className="text-sm font-medium">العربية</span>
                {language === 'ar' && (
                  <span className="ml-auto text-primary-600">✓</span>
                )}
              </button>
            </div>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;