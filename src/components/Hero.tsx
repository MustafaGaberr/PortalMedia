import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { gsap } from 'gsap';

const Hero: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);
  const floatingShapesRef = useRef<HTMLDivElement>(null);
  const mainCircleRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement[]>([]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main content animation
      gsap.fromTo('.hero-content', 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );

      // Staggered text animation
      gsap.fromTo('.hero-text', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }
      );

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

      // Main circle rotation
      if (mainCircleRef.current) {
        gsap.to(mainCircleRef.current, {
          rotation: 360,
          duration: 20,
          repeat: -1,
          ease: "none"
        });
      }

      // Floating elements animation
      floatingElementsRef.current.forEach((element, index) => {
        if (element) {
          gsap.to(element, {
            y: "random(-20, 20)",
            rotation: "random(-180, 180)",
            duration: "random(3, 6)",
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            delay: index * 0.5
          });
        }
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7c89c7]/20 via-white to-[#5f6db0]/10"></div>
      
      {/* Floating Shapes */}
      <div ref={floatingShapesRef} className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#735fb0]/20 to-[#5f6db0]/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-br from-[#b0a25f]/20 to-[#6db05f]/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-[#6db05f]/20 to-[#735fb0]/20 rounded-full blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="hero-content text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="hero-text flex items-center space-x-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Star className="w-5 h-5 text-[#b0a25f] fill-current" />
              <span className="text-[#5f6db0] font-semibold">Premium Marketing Solutions</span>
            </motion.div>

            <motion.h1
              className="hero-text text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6 font-cairo"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
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
              className="hero-text text-xl text-gray-600 mb-8 leading-relaxed max-w-lg font-cairo"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              className="hero-text flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <button 
                onClick={() => scrollToSection('contact')}
                className="group bg-gradient-to-r from-[#5f6db0] to-[#735fb0] text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-cairo"
              >
                <span>{t('hero.getStarted')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button 
                onClick={() => scrollToSection('about')}
                className="group border-2 border-[#5f6db0] text-[#5f6db0] px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:bg-[#5f6db0] hover:text-white transition-all duration-300 font-cairo"
              >
                <Play className="w-5 h-5" />
                <span>{t('hero.learnMore')}</span>
              </button>
            </motion.div>

          </motion.div>

          {/* Right Content - Illustration */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main Circle */}
              <motion.div
                ref={mainCircleRef}
                className="w-80 h-80 mx-auto bg-gradient-to-br from-[#5f6db0] to-[#735fb0] rounded-full shadow-2xl relative overflow-hidden"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-4 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold">
                  ⚡
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                ref={el => floatingElementsRef.current[0] = el!}
                className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#b0a25f] to-[#6db05f] rounded-full shadow-lg flex items-center justify-center text-white font-bold"
              >
                📊
              </motion.div>

              <motion.div
                ref={el => floatingElementsRef.current[1] = el!}
                className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-[#6db05f] to-[#b0a25f] rounded-full shadow-lg flex items-center justify-center text-white text-2xl"
              >
                🎯
              </motion.div>

              <motion.div
                ref={el => floatingElementsRef.current[2] = el!}
                className="absolute -bottom-6 -right-6 w-14 h-14 bg-gradient-to-br from-[#735fb0] to-[#5f6db0] rounded-full shadow-lg flex items-center justify-center text-white font-bold"
              >
                💡
              </motion.div>

              <motion.div
                ref={el => floatingElementsRef.current[3] = el!}
                className="absolute -bottom-4 -left-8 w-12 h-12 bg-gradient-to-br from-[#7c89c7] to-[#5f6db0] rounded-full shadow-lg flex items-center justify-center text-white"
              >
                🚀
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator - Keep as is */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => scrollToSection('about')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="w-6 h-10 border-2 border-primary-300/60 rounded-full flex justify-center backdrop-blur-sm shadow-lg hover:border-primary-300/80 transition-all duration-200" style={{ backgroundColor: 'rgba(33, 37, 41, 0.2)' }}>
          <motion.div 
            className="w-1.5 h-4 rounded-full mt-2 shadow-sm"
            style={{ background: 'linear-gradient(to bottom, var(--primary-color), rgba(95, 109, 176, 0.7))' }}
            animate={{ y: [0, 3, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        {/* Scroll hint text */}
        <motion.p
          className="text-xs mt-2 text-center opacity-70"
          style={{ color: 'var(--primary-color)' }}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          {t('hero.scrollDown')}
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;