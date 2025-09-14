import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 bg-[url('/Assets/hero.jpeg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Simplified Floating Elements - Reduced complexity for performance */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-20 h-20 rounded-full blur-xl"
        style={{ backgroundColor: 'rgba(246, 217, 115, 0.2)' }}
      />
      <motion.div
        animate={{
          y: [0, 10, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full blur-xl"
        style={{ backgroundColor: 'rgba(178, 121, 11, 0.2)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className="mb-8"
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-yellow-300 mb-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.15 }}
          >
            <span className="block">{t('hero.title')}</span>
            <span className="block bg-clip-text text-transparent animate-gradient" style={{ background: 'linear-gradient(to right, var(--gold-light), var(--gold-dark))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {t('hero.subtitle')}
            </span>
          </motion.h1>

          <motion.p
            className="text-xl lg:text-2xl text-yellow-200 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
          >
            {t('hero.description')}
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.25 }}
        >
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="group btn-primary px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 shadow-glow hover:shadow-elegant transition-all duration-200"
            style={{ color: '#212529' }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t('hero.cta')}
            <ArrowRight 
              className={`w-5 h-5 group-hover:translate-x-1 transition-transform duration-150 ${isRTL ? 'rotate-180' : ''}`} 
            />
          </motion.button>

          <motion.button
            onClick={() => scrollToSection('about')}
            className="group glass text-yellow-300 px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 border border-yellow-600/30 hover:bg-yellow-600/20 transition-all duration-200 shadow-soft hover:shadow-glow"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Play className="w-5 h-5" />
            {t('hero.learnMore')}
          </motion.button>
        </motion.div>
      </div>

      {/* Optimized Scroll Indicator */}
      <motion.div
        className="hidden sm:block absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer z-50"
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => scrollToSection('about')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="w-6 h-10 border-2 border-yellow-300/60 rounded-full flex justify-center backdrop-blur-sm shadow-lg hover:border-yellow-300/80 transition-all duration-200" style={{ backgroundColor: 'rgba(33, 37, 41, 0.2)' }}>
          <motion.div 
            className="w-1.5 h-4 rounded-full mt-2 shadow-sm"
            style={{ background: 'linear-gradient(to bottom, var(--gold-light), rgba(246, 217, 115, 0.7))' }}
            animate={{ y: [0, 3, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        {/* Scroll hint text */}
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 text-xs font-medium whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-200" style={{ color: 'rgba(246, 217, 115, 0.6)' }}>
          Scroll Down
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;