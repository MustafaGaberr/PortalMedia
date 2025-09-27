import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.blog'), href: '/blog' },
  ];

  const services = [
    { name: t('services.seo.title'), href: '#services' },
    { name: t('services.social.title'), href: '#services' },
    { name: t('services.ppc.title'), href: '#services' },
    { name: t('services.content.title'), href: '#services' },
  ];

  return (
    <footer className="text-white" style={{ background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="mb-6"
            >
              <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
                <img 
                  src="/Assets/portal logo.png" 
                  alt="Portal Media Logo" 
                  className="w-12 h-12 object-contain"
                />
                <span className="text-2xl font-bold font-cairo">Portal Media</span>
              </div>
              <p className="text-white/90 leading-relaxed max-w-md font-cairo">
                {t('footer.description')}
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.05 }}
          >
            <h3 className="text-lg font-bold mb-4 font-cairo">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('/') ? (
                    <Link
                      to={link.href}
                      className="text-white/90 hover:text-white transition-colors font-cairo"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => {
                        const element = document.querySelector(link.href);
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-white/90 hover:text-white transition-colors font-cairo"
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-4 font-cairo">{t('footer.servicesTitle')}</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(service.href);
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-white/90 hover:text-white transition-colors"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/30 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="text-white/70 text-sm mb-4 sm:mb-0 font-cairo"
            >
              {t('footer.rights')}
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;