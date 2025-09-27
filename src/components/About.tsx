import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation, fadeInUp, staggerContainer, scaleIn } from '../hooks/useScrollAnimation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const { t } = useLanguage();
  const { ref, controls } = useScrollAnimation();
  const animationContainerRef = useRef<HTMLDivElement>(null);
  const fallbackRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const animRef = useRef<any>(null);

  useEffect(() => {
    // Load Lottie animation
    const loadAnimation = async () => {
      try {
        // Import lottie dynamically
        const lottie = (await import('lottie-web')).default;
        
        if (animationContainerRef.current) {
          // Clear any existing animation
          if (animRef.current) {
            animRef.current.destroy();
          }
          
          animRef.current = lottie.loadAnimation({
            container: animationContainerRef.current,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: '/Public/Assets/lottie/aboutanim.json'
          });

          // Wait for animation to load
          animRef.current.addEventListener('data_ready', () => {
            console.log('Lottie animation loaded successfully');
            
            // Hide fallback content
            if (fallbackRef.current) {
              fallbackRef.current.style.opacity = '0';
              setTimeout(() => {
                if (fallbackRef.current) {
                  fallbackRef.current.style.display = 'none';
                }
              }, 300);
            }
            
            // Create ScrollTrigger for About section only
            ScrollTrigger.create({
              trigger: "#about",
              start: "top 80%",
              end: "bottom 70%",
              scrub: true,
              onUpdate: (self) => {
                if (animRef.current && animRef.current.isLoaded) {
                  const frame = Math.floor(self.progress * animRef.current.totalFrames);
                  animRef.current.goToAndStop(frame, true);
                }
              }
            });
          });

          // Fallback if data_ready doesn't fire
          setTimeout(() => {
            if (animRef.current && animRef.current.isLoaded) {
              console.log('Lottie animation loaded (fallback)');
              
              // Hide fallback content
              if (fallbackRef.current) {
                fallbackRef.current.style.opacity = '0';
                setTimeout(() => {
                  if (fallbackRef.current) {
                    fallbackRef.current.style.display = 'none';
                  }
                }, 300);
              }
              
              ScrollTrigger.create({
                trigger: "#about",
                start: "top 80%",
                end: "bottom 70%",
                scrub: true,
                onUpdate: (self) => {
                  if (animRef.current && animRef.current.isLoaded) {
                    const frame = Math.floor(self.progress * animRef.current.totalFrames);
                    animRef.current.goToAndStop(frame, true);
                  }
                }
              });
            }
          }, 1000);
        }
      } catch (error) {
        console.error('Error loading Lottie animation:', error);
      }
    };

    // Add delay to ensure DOM is ready
    const timer = setTimeout(() => {
      loadAnimation();
    }, 100);

    return () => {
      clearTimeout(timer);
      if (animRef.current) {
        animRef.current.destroy();
        animRef.current = null;
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const stats = [
    { icon: TrendingUp, value: '3+', label: t('about.experience') },
    { icon: Users, value: '120+', label: t('about.clients') },
    { icon: Target, value: '100+', label: t('about.projects') },
    { icon: Award, value: '10+', label: t('about.awards') },
  ];

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={fadeInUp}>
            <motion.div variants={fadeInUp} className="mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-cairo bg-gradient-to-r from-[#5f6db0] to-[#735fb0] bg-clip-text text-transparent leading-normal pt-3 pb-3 overflow-visible">
                {t('about.title')}
              </h2>
              
              <h3 className="text-xl font-semibold mb-6 font-cairo" >
                {t('about.subtitle')}
              </h3>
              <p className="text-lg leading-relaxed font-cairo" style={{ color: 'var(--accent-color)' }}>
                {t('about.description')}
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200"
                >
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))' }}>
                      <stat.icon className="w-6 h-6" style={{ color: 'white' }} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900 font-cairo">{stat.value}</div>
                      <div className="text-sm text-gray-600 font-cairo">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp} className="relative hidden lg:block">
            <div className="relative z-10">
              <div className="w-full h-[500px] lg:h-[600px] overflow-hidden  ">
                <div 
                  ref={animationContainerRef}
                  style={{ 
                    width: '100%', 
                    height: '100%',
                    minHeight: '500px'
                  }}
                />
                {/* Fallback content */}
                <div 
                  ref={fallbackRef}
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#5f6db0]/10 to-[#735fb0]/10 rounded-2xl transition-opacity duration-300"
                >
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#5f6db0] to-[#735fb0] flex items-center justify-center">
                      <Award className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-700 font-cairo mb-2">About Portal Media</h3>
                    <p className="text-gray-600 font-cairo">Loading animation...</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;