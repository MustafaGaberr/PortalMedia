import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { gsap } from 'gsap';
import Lottie from 'lottie-react';
import heroBotAnimation from '/Public/Assets/lottie/herobot.json';

const Hero: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);
  const floatingShapesRef = useRef<HTMLDivElement>(null);
  const [isLottieLoaded, setIsLottieLoaded] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating shapes animation
      if (floatingShapesRef.current) {
        gsap.to(floatingShapesRef.current.children, {
          y: "random(-30, 30)",
          x: "random(-20, 20)",
          rotation: "random(-10, 10)",
          duration: "random(4, 8)",
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          stagger: 0.5
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Load Lottie animation after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLottieLoaded(true);
    }, 1000); // Load after 1 second

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Floating Shapes */}
      <div ref={floatingShapesRef} className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#735fb0]/20 to-[#5f6db0]/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-br from-[#b0a25f]/20 to-[#6db05f]/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-[#6db05f]/20 to-[#735fb0]/20 rounded-full blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            className={`text-left ${isRTL ? 'text-right' : 'text-left'}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className={`hidden md:flex items-center space-x-2 ${isRTL ? 'space-x-reverse' : 'space-x-2'} mb-8`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <Star className="w-5 h-5 text-[#b0a25f] fill-current" />
              <span className="text-[#5f6db0] font-semibold">{t('hero.subtitle')}</span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8 font-cairo mt-8 md:mt-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              {isRTL ? (
                <>
                  ارفع <span className="bg-gradient-to-r from-[#5f6db0] to-[#735fb0] bg-clip-text text-transparent">علامتك التجارية</span> إلى آفاق جديدة
                </>
              ) : (
                <>
                  Elevate Your <span className="bg-gradient-to-r from-[#5f6db0] to-[#735fb0] bg-clip-text text-transparent">Brand</span> to New Heights
                </>
              )}
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-12 leading-relaxed max-w-lg font-cairo"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              <button 
                onClick={() => scrollToSection('contact')}
                className={`group bg-gradient-to-r from-[#5f6db0] to-[#735fb0] text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center ${isRTL ? 'space-x-reverse' : 'space-x-2'} hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-cairo`}
              >
                <span>{t('hero.getStarted')}</span>
                <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 ${isRTL ? 'rotate-180' : ''}`} />
              </button>
              
              <button 
                onClick={() => scrollToSection('about')}
                className={`group border-2 border-[#5f6db0] text-[#5f6db0] px-8 py-4 rounded-full font-semibold flex items-center justify-center ${isRTL ? 'space-x-reverse' : 'space-x-2'} hover:bg-[#5f6db0] hover:text-white transition-all duration-300 font-cairo`}
              >
                <Play className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                <span>{t('hero.learnMore')}</span>
              </button>
            </motion.div>

          </motion.div>

          {/* Right Content - Lottie Animation */}
          <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
              {isLottieLoaded ? (
                <Lottie
                  animationData={heroBotAnimation}
                  loop={true}
                  autoplay={true}
                  style={{ width: '100%', height: '100%' }}
                />
              ) : (
                <div className="w-full h-[400px] flex items-center justify-center">
                  <div className="animate-pulse">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto"></div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator - Keep as is */}
      <motion.div
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => scrollToSection('about')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="w-6 h-10 border-2 rounded-full flex justify-center backdrop-blur-sm shadow-lg hover:border-opacity-80 transition-all duration-200" style={{ borderColor: 'rgba(95, 109, 176, 0.6)' }}>
          <motion.div 
            className="w-1.5 h-4 rounded-full mt-2 shadow-sm"
            style={{ background: 'linear-gradient(to bottom, #5f6db0, #735fb0)' }}
            animate={{ y: [0, 3, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        {/* Scroll hint text */}
        <motion.p
          className="text-xs mt-2 text-center"
          style={{ color: '#5f6db0' }}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;