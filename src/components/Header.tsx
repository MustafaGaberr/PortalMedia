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
  const { language, changeLanguage, t, isRTL } = useLanguage();
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
      if (location.pathname !== '/') {
        navigate('/' + href);
        return;
      }
      
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
          ? 'backdrop-blur-md border-b border-primary-500/50 shadow-lg' 
          : isHomePage
          ? 'bg-transparent'
          : 'backdrop-blur-md border-b border-primary-500/50 shadow-lg'
      }`}
      style={{
        backgroundColor: isScrolled || !isHomePage ? 'rgba(255, 255, 255, 0.95)' : 'transparent'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-4 rtl:space-x-reverse cursor-pointer"
            onClick={handleLogoClick}
          >
            <img 
              src="/Assets/portal logo.png" 
              alt="Portal Media Logo" 
              className="w-10 h-10 object-contain drop-shadow-lg"
              loading="lazy"
            />
            <span className={`text-xl font-bold drop-shadow-sm font-dallas mt-1 ${
              isScrolled || !isHomePage
                ? 'text-[#5f6db0]'
                : 'text-gradient'
            }`}>
              Portal Media
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse font-cairo">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.href.startsWith('/') ? (
                  item.href === '/' ? (
                    // Special handling for Home link
                    <button
                      onClick={handleHomeClick}
                      className={`relative text-[#5f6db0] font-bold hover:text-[#735fb0] transition-colors duration-200 group ${
                        location.pathname === item.href && currentSection === ''
                          ? 'text-[#735fb0]'
                          : ''
                      }`}
                    >
                      {item.name}
                      <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#5f6db0] to-[#735fb0] transition-all duration-300 ${
                        location.pathname === item.href && currentSection === ''
                          ? 'w-full'
                          : 'w-0 group-hover:w-full'
                      }`}></span>
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={`relative text-[#5f6db0] font-bold hover:text-[#735fb0] transition-colors duration-200 group ${
                        location.pathname === item.href
                          ? 'text-[#735fb0]'
                          : ''
                      }`}
                    >
                      {item.name}
                      <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#5f6db0] to-[#735fb0] transition-all duration-300 ${
                        location.pathname === item.href
                          ? 'w-full'
                          : 'w-0 group-hover:w-full'
                      }`}></span>
                    </Link>
                  )
                ) : (
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`relative text-[#5f6db0] font-bold hover:text-[#735fb0] transition-colors duration-200 group ${
                      // Check if we're on home page and this section is currently in view
                      location.pathname === '/' && isCurrentSection(item.href)
                        ? 'text-[#735fb0]'
                        : ''
                    }`}
                  >
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#5f6db0] to-[#735fb0] transition-all duration-300 ${
                      location.pathname === '/' && isCurrentSection(item.href)
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }`}></span>
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
                className="flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl border border-[#5f6db0]/30 text-[#5f6db0] hover:text-[#735fb0] transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#5f6db0]/50 min-w-[120px] shadow-lg hover:shadow-xl"
                title="Change Language"
              >
                <span className="mr-2 rtl:ml-2 rtl:mr-0">{getCurrentFlag()}</span>
                <span className="text-base font-bold tracking-wide flex-1 text-left rtl:text-right">{getCurrentLanguageName()}</span>
                <ChevronDown className={`w-4 h-4 ml-2 rtl:mr-2 rtl:ml-0 transition-transform duration-150 ${
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
                  className={`absolute top-full mt-2 bg-white/95 backdrop-blur-md rounded-xl border border-[#5f6db0]/30 shadow-xl overflow-hidden min-w-[140px] z-50 ${
                    language === 'ar' ? 'right-0' : 'left-0'
                  }`}
                >
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`w-full flex items-center px-4 py-3 text-left hover:bg-[#5f6db0]/10 transition-all duration-200 ${
                      language === 'en'
                        ? 'bg-[#5f6db0]/20 text-[#735fb0] font-bold' 
                        : 'text-[#5f6db0] hover:text-[#735fb0]'
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
                    <span className="text-base font-bold">English</span>
                  </button>
                  <button
                    onClick={() => handleLanguageChange('ar')}
                    className={`w-full flex items-center px-4 py-3 text-left hover:bg-[#5f6db0]/10 transition-all duration-200 ${
                      language === 'ar'
                        ? 'bg-[#5f6db0]/20 text-[#735fb0] font-bold' 
                        : 'text-[#5f6db0] hover:text-[#735fb0]'
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
                    <span className="text-base font-bold">العربية</span>
                  </button>
                </motion.div>
              )}
            </div>

            {/* Enhanced Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 rounded-xl bg-white/90 backdrop-blur-sm text-[#5f6db0] transition-all duration-200 hover:scale-110 border border-[#5f6db0]/30 focus:outline-none focus:ring-2 focus:ring-[#5f6db0]/50 shadow-lg hover:shadow-xl"
              title={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-md rounded-xl mt-2 border border-[#5f6db0]/30 shadow-lg"
        >
          <nav className="py-4 font-cairo">
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
                      className={`block w-full ${isRTL ? 'text-right' : 'text-left'} px-6 py-3 transition-all duration-200 font-bold rounded-lg mx-2 text-base leading-6 ${
                        location.pathname === item.href && currentSection === ''
                          ? `text-[#735fb0] bg-[#5f6db0]/20 ${isRTL ? 'border-r-4' : 'border-l-4'} border-[#5f6db0]`
                          : 'text-[#5f6db0] hover:text-[#735fb0] hover:bg-[#5f6db0]/10'
                      }`}
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-6 py-3 transition-all duration-200 font-bold rounded-lg mx-2 text-lg ${isRTL ? 'text-right' : 'text-left'} ${
                        location.pathname === item.href
                          ? `text-[#735fb0] bg-[#5f6db0]/20 ${isRTL ? 'border-r-4' : 'border-l-4'} border-[#5f6db0]`
                          : 'text-[#5f6db0] hover:text-[#735fb0] hover:bg-[#5f6db0]/10'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )
                ) : (
                  <button
                    onClick={() => {
                      const element = document.querySelector(item.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full ${isRTL ? 'text-right' : 'text-left'} px-6 py-3 transition-all duration-200 font-bold rounded-lg mx-2 text-lg ${
                      location.pathname === '/' && isCurrentSection(item.href)
                        ? `text-[#735fb0] bg-[#5f6db0]/20 ${isRTL ? 'border-r-4' : 'border-l-4'} border-[#5f6db0]`
                        : 'text-[#5f6db0] hover:text-[#735fb0] hover:bg-[#5f6db0]/10'
                    }`}
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
            
            {/* Language Switcher in Mobile Menu */}
            <div className="mx-2 mt-4 pt-4 border-t border-[#5f6db0]/30">
              <p className="px-6 py-2 text-sm text-[#5f6db0]/70 font-bold uppercase tracking-wide">
                Language / اللغة
              </p>
              <button
                onClick={() => handleLanguageChange('en')}
                className={`flex items-center w-full px-6 py-3 ${isRTL ? 'text-right' : 'text-left'} transition-all duration-150 rounded-lg mx-0 ${
                  language === 'en'
                    ? 'text-[#735fb0] bg-[#5f6db0]/20 font-bold'
                    : 'text-[#5f6db0] hover:text-[#735fb0] hover:bg-[#5f6db0]/10'
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
                <span className="text-base font-bold">English</span>
                {language === 'en' && (
                  <span className="ml-auto text-[#735fb0]">✓</span>
                )}
              </button>
              <button
                onClick={() => handleLanguageChange('ar')}
                className={`flex items-center w-full px-6 py-3 ${isRTL ? 'text-right' : 'text-left'} transition-all duration-150 rounded-lg mx-0 ${
                  language === 'ar'
                    ? 'text-[#735fb0] bg-[#5f6db0]/20 font-bold'
                    : 'text-[#5f6db0] hover:text-[#735fb0] hover:bg-[#5f6db0]/10'
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
                <span className="text-base font-bold">العربية</span>
                {language === 'ar' && (
                  <span className="ml-auto text-[#735fb0]">✓</span>
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