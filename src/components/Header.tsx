import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import ReactCountryFlag from 'react-country-flag';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('');
  const { language, changeLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.team'), href: '#team' },
    { name: t('nav.contact'), href: '#contact' },
    { name: t('nav.blog'), href: '/blog' },
    { name: t('nav.payment'), href: '/payment' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Only track sections on home page
      if (location.pathname === '/') {
        const sections = ['#about', '#services', '#team', '#contact'];
        const scrollPosition = window.scrollY + 100; // Offset for navbar height
        
        let current = '';
        sections.forEach(sectionId => {
          const element = document.querySelector(sectionId) as HTMLElement;
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              current = sectionId;
            }
          }
        });
        
        // If we're at the very top, no section is active
        if (window.scrollY < 100) {
          current = '';
        }
        
        setCurrentSection(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

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
      // If we're not on the home page, navigate to home first then scroll
      if (location.pathname !== '/') {
        // Navigate to home page and add hash to URL so it scrolls when page loads
        navigate('/' + href);
        return;
      }
      
      // If we're on home page, scroll to the section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      // If already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If on other page, navigate to home
      navigate('/');
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      // If already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If on other page, navigate to home
      navigate('/');
    }
  };

  const handleLanguageChange = (lang: 'en' | 'ar') => {
    changeLanguage(lang);
    setIsLangDropdownOpen(false);
  };

  const getCurrentFlag = () => {
    return language === 'en' ? (
      <ReactCountryFlag 
        countryCode="US" 
        svg 
        style={{
          width: '1.2em',
          height: '1.2em',
        }}
        title="United States"
      />
    ) : (
      <ReactCountryFlag 
        countryCode="SA" 
        svg 
        style={{
          width: '1.2em',
          height: '1.2em',
        }}
        title="Saudi Arabia"
      />
    );
  };

  const getCurrentLanguageName = () => {
    return language === 'en' ? 'English' : 'العربية';
  };

  const isCurrentSection = (href: string) => {
    return currentSection === href;
  };

  const isHomePage = location.pathname === '/';

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? 'backdrop-blur-md border-b border-yellow-600/50 shadow-lg' 
          : isHomePage
          ? 'bg-transparent'
          : 'backdrop-blur-md border-b border-yellow-600/50 shadow-lg'
      }`}
      style={{
        backgroundColor: isScrolled || !isHomePage ? '#212529e6' : 'transparent'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
            onClick={handleLogoClick}
          >
            <img 
              src="/Assets/portal logo.png" 
              alt="Portal Media Logo" 
              className="w-12 h-12 object-contain drop-shadow-lg"
            />
            <span className={`text-2xl font-bold drop-shadow-sm ${
              isScrolled || !isHomePage
                ? 'text-yellow-400'
                : 'text-gradient'
            }`}>
              Portal Media
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.href.startsWith('/') ? (
                  item.href === '/' ? (
                    // Special handling for Home link
                    <button
                      onClick={handleHomeClick}
                      className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 ${
                        location.pathname === item.href && currentSection === ''
                          ? 'text-yellow-400 font-bold text-base drop-shadow-lg'
                          : isScrolled || !isHomePage
                          ? 'text-yellow-300/90 hover:text-yellow-400'
                          : 'text-yellow-300 hover:text-yellow-200 drop-shadow-sm'
                      }`}
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 ${
                        location.pathname === item.href
                          ? 'text-yellow-400 font-bold text-base drop-shadow-lg'
                          : isScrolled || !isHomePage
                          ? 'text-yellow-300/90 hover:text-yellow-400'
                          : 'text-yellow-300 hover:text-yellow-200 drop-shadow-sm'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )
                ) : (
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 ${
                      // Check if we're on home page and this section is currently in view
                      location.pathname === '/' && isCurrentSection(item.href)
                        ? 'text-yellow-400 font-bold text-base drop-shadow-lg'
                        : isScrolled || !isHomePage
                        ? 'text-yellow-300/90 hover:text-yellow-400'
                        : 'text-yellow-300 hover:text-yellow-200 drop-shadow-sm'
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
                className="flex items-center px-4 py-2 backdrop-blur-sm rounded-xl border border-yellow-600/30 text-yellow-300/90 hover:text-yellow-300 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 min-w-[120px]"
                style={{ backgroundColor: 'rgba(33, 37, 41, 0.4)' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(33, 37, 41, 0.6)' }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(33, 37, 41, 0.4)' }}
                title="Change Language"
              >
                <span className="mr-2 rtl:ml-2 rtl:mr-0 drop-shadow-sm">{getCurrentFlag()}</span>
                <span className="text-sm font-semibold tracking-wide flex-1 text-left rtl:text-right">{getCurrentLanguageName()}</span>
                <ChevronDown className={`w-4 h-4 ml-2 rtl:mr-2 rtl:ml-0 transition-transform duration-150 drop-shadow-sm ${
                  isLangDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>

              {/* Dropdown Menu */}
              {isLangDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className={`absolute top-full mt-2 backdrop-blur-md rounded-xl border border-yellow-600/50 shadow-xl overflow-hidden min-w-[140px] z-50 ${
                    language === 'ar' ? 'right-0' : 'left-0'
                  }`}
                  style={{ backgroundColor: '#212529f2' }}
                >
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`w-full flex items-center px-4 py-3 text-left hover:bg-yellow-600/20 transition-all duration-200 ${
                      language === 'en' 
                        ? 'bg-yellow-600/30 text-yellow-300 font-semibold' 
                        : 'text-yellow-300/90 hover:text-yellow-300'
                    }`}
                  >
                    <span className="mr-3 rtl:ml-3 rtl:mr-0 drop-shadow-sm">
                      <ReactCountryFlag 
                        countryCode="US" 
                        svg 
                        style={{
                          width: '1.2em',
                          height: '1.2em',
                        }}
                        title="United States"
                      />
                    </span>
                    <span className="text-sm font-medium">English</span>
                  </button>
                  <button
                    onClick={() => handleLanguageChange('ar')}
                    className={`w-full flex items-center px-4 py-3 text-left hover:bg-yellow-600/20 transition-all duration-200 ${
                      language === 'ar' 
                        ? 'bg-yellow-600/30 text-yellow-300 font-semibold' 
                        : 'text-yellow-300/90 hover:text-yellow-300'
                    }`}
                  >
                    <span className="mr-3 rtl:ml-3 rtl:mr-0 drop-shadow-sm">
                      <ReactCountryFlag 
                        countryCode="SA" 
                        svg 
                        style={{
                          width: '1.2em',
                          height: '1.2em',
                        }}
                        title="Saudi Arabia"
                      />
                    </span>
                    <span className="text-sm font-medium">العربية</span>
                  </button>
                </motion.div>
              )}
            </div>

            {/* Enhanced Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 rounded-xl backdrop-blur-sm text-yellow-300 transition-all duration-200 hover:scale-110 border border-yellow-600/30 focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
              style={{ backgroundColor: 'rgba(33, 37, 41, 0.4)' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(33, 37, 41, 0.6)' }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(33, 37, 41, 0.4)' }}
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
          transition={{ duration: 0.2 }}
          className="lg:hidden overflow-hidden backdrop-blur-md rounded-xl mt-2 border border-yellow-600/50"
          style={{ backgroundColor: '#212529f2' }}
        >
          <nav className="py-4">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.href.startsWith('/') ? (
                  item.href === '/' ? (
                    // Special handling for Home link in mobile
                    <button
                      onClick={() => {
                        handleHomeClick();
                        setIsMenuOpen(false);
                      }}
                      className={`block w-full text-left px-6 py-3 transition-all duration-200 font-medium rounded-lg mx-2 ${
                        location.pathname === item.href && currentSection === ''
                          ? 'text-yellow-400 bg-yellow-600/20 border-l-4 border-yellow-400 font-bold text-base'
                          : 'text-yellow-300/90 hover:text-yellow-300 hover:bg-yellow-600/10'
                      }`}
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-6 py-3 transition-all duration-200 font-medium rounded-lg mx-2 ${
                        location.pathname === item.href
                          ? 'text-yellow-400 bg-yellow-600/20 border-l-4 border-yellow-400 font-bold text-base'
                          : 'text-yellow-300/90 hover:text-yellow-300 hover:bg-yellow-600/10'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )
                ) : (
                  <button
                    onClick={() => {
                      scrollToSection(item.href);
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-left px-6 py-3 transition-all duration-200 font-medium rounded-lg mx-2 ${
                      location.pathname === '/' && isCurrentSection(item.href)
                        ? 'text-yellow-400 bg-yellow-600/20 border-l-4 border-yellow-400 font-bold text-base'
                        : 'text-yellow-300/90 hover:text-yellow-300 hover:bg-yellow-600/10'
                    }`}
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
            
            {/* Language Switcher in Mobile Menu */}
            <div className="mx-2 mt-4 pt-4 border-t border-yellow-600/50">
              <p className="px-6 py-2 text-xs text-yellow-300/70 font-medium uppercase tracking-wide">
                Language / اللغة
              </p>
              <button
                onClick={() => handleLanguageChange('en')}
                className={`flex items-center w-full px-6 py-3 text-left transition-all duration-150 rounded-lg mx-0 ${
                  language === 'en'
                    ? 'text-yellow-300 bg-yellow-600/20 font-semibold'
                    : 'text-yellow-300/90 hover:text-yellow-300 hover:bg-yellow-600/10'
                }`}
              >
                <span className="mr-3 rtl:ml-3 rtl:mr-0">
                  <ReactCountryFlag 
                    countryCode="US" 
                    svg 
                    style={{
                      width: '1.2em',
                      height: '1.2em',
                    }}
                    title="United States"
                  />
                </span>
                <span className="text-sm font-medium">English</span>
                {language === 'en' && (
                  <span className="ml-auto text-yellow-300">✓</span>
                )}
              </button>
              <button
                onClick={() => handleLanguageChange('ar')}
                className={`flex items-center w-full px-6 py-3 text-left transition-all duration-150 rounded-lg mx-0 ${
                  language === 'ar'
                    ? 'text-yellow-300 bg-yellow-600/20 font-semibold'
                    : 'text-yellow-300/90 hover:text-yellow-300 hover:bg-yellow-600/10'
                }`}
              >
                <span className="mr-3 rtl:ml-3 rtl:mr-0">
                  <ReactCountryFlag 
                    countryCode="SA" 
                    svg 
                    style={{
                      width: '1.2em',
                      height: '1.2em',
                    }}
                    title="Saudi Arabia"
                  />
                </span>
                <span className="text-sm font-medium">العربية</span>
                {language === 'ar' && (
                  <span className="ml-auto text-yellow-300">✓</span>
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