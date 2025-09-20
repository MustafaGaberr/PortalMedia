import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation, fadeInUp, staggerContainer, scaleIn } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { t } = useLanguage();
  const { ref, controls } = useScrollAnimation();

  const stats = [
    { icon: TrendingUp, value: '5+', label: t('about.experience') },
    { icon: Users, value: '150+', label: t('about.clients') },
    { icon: Target, value: '500+', label: t('about.projects') },
    { icon: Award, value: '25+', label: t('about.awards') },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
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
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 font-cairo">
                {t('about.title')}
              </h2>
              <h3 className="text-xl font-semibold mb-6 font-cairo" style={{ color: 'var(--gold-dark)' }}>
                {t('about.subtitle')}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed font-cairo">
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
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--gold-light), var(--gold-dark))' }}>
                      <stat.icon className="w-6 h-6" style={{ color: '#212529' }} />
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
              <img
                src="/Assets/About pic.jpg"
                alt="Portal Media Team"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 rounded-2xl" style={{ background: 'linear-gradient(to top, rgba(33, 37, 41, 0.2), transparent)' }}></div>
            </div>
            
            <motion.div
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-20"
              style={{ background: 'linear-gradient(135deg, var(--gold-light), var(--gold-dark))' }}
            />
            <motion.div
              animate={{ opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full opacity-20"
              style={{ background: 'linear-gradient(135deg, var(--gold-light), var(--gold-dark))' }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;