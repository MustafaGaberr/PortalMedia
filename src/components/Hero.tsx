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
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/70 to-primary-900/80" />
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
        className="absolute top-20 left-10 w-20 h-20 bg-primary-400/20 rounded-full blur-xl"
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
        className="absolute bottom-20 right-10 w-32 h-32 bg-primary-300/20 rounded-full blur-xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className="mb-8"
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.15 }}
          >
            <span className="block">{t('hero.title')}</span>
            <span className="block bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent animate-gradient">
              {t('hero.subtitle')}
            </span>
          </motion.h1>

          <motion.p
            className="text-xl lg:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed"
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
            className="group btn-primary text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 shadow-glow hover:shadow-elegant transition-all duration-200"
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
            className="group glass text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 border border-white/20 hover:bg-white/20 transition-all duration-200 shadow-soft hover:shadow-glow"
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
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm bg-white/5 shadow-lg hover:border-white/80 transition-all duration-200 hover:bg-white/10">
          <motion.div 
            className="w-1.5 h-4 bg-gradient-to-b from-white to-white/70 rounded-full mt-2 shadow-sm"
            animate={{ y: [0, 3, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        {/* Scroll hint text */}
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 text-white/60 text-xs font-medium whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-200">
          Scroll Down
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;