import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Share2, MousePointer, PenTool, BarChart3, Palette } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';

const Services: React.FC = () => {
  const { t } = useLanguage();
  const { ref, controls } = useScrollAnimation();
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const services = [
    {
      icon: Search,
      title: t('services.seo.title'),
      description: t('services.seo.description'),
      gradient: 'from-blue-500 to-blue-600',
      details: ['Keyword Research', 'Technical SEO', 'Link Building', 'Content Optimization'],
    },
    {
      icon: Share2,
      title: t('services.social.title'),
      description: t('services.social.description'),
      gradient: 'from-green-500 to-green-600',
      details: ['Facebook Ads', 'Instagram Marketing', 'LinkedIn Campaigns', 'Twitter Growth'],
    },
    {
      icon: MousePointer,
      title: t('services.ppc.title'),
      description: t('services.ppc.description'),
      gradient: 'from-purple-500 to-purple-600',
      details: ['Google Ads', 'Bing Ads', 'Campaign Optimization', 'ROI Tracking'],
    },
    {
      icon: PenTool,
      title: t('services.content.title'),
      description: t('services.content.description'),
      gradient: 'from-orange-500 to-orange-600',
      details: ['Blog Writing', 'Video Content', 'Infographics', 'Email Marketing'],
    },
    {
      icon: BarChart3,
      title: t('services.analytics.title'),
      description: t('services.analytics.description'),
      gradient: 'from-red-500 to-red-600',
      details: ['Google Analytics', 'Data Visualization', 'Performance Reports', 'Conversion Tracking'],
    },
    {
      icon: Palette,
      title: t('services.branding.title'),
      description: t('services.branding.description'),
      gradient: 'from-indigo-500 to-indigo-600',
      details: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy'],
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('services.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative h-80 perspective-1000"
                onMouseEnter={() => setFlippedCard(index)}
                onMouseLeave={() => setFlippedCard(null)}
              >
                <motion.div
                  className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d"
                  animate={{ 
                    rotateY: flippedCard === index ? 180 : 0 
                  }}
                >
                  {/* Front of card */}
                  <div className="absolute inset-0 w-full h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 backface-hidden border border-gray-100">
                    <div className="p-8 h-full flex flex-col justify-center items-center text-center">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className={`absolute inset-0 w-full h-full bg-gradient-to-br ${service.gradient} rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 backface-hidden rotate-y-180`}>
                    <div className="p-8 h-full flex flex-col justify-center items-center text-center text-white">
                      <service.icon className="w-12 h-12 mb-6" />
                      <h3 className="text-xl font-bold mb-6">{service.title}</h3>
                      <ul className="space-y-3">
                        {service.details.map((detail, detailIndex) => (
                          <motion.li
                            key={detailIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ 
                              opacity: flippedCard === index ? 1 : 0,
                              x: flippedCard === index ? 0 : -20
                            }}
                            transition={{ delay: detailIndex * 0.1 }}
                            className="flex items-center justify-center"
                          >
                            <div className="w-2 h-2 bg-white rounded-full mr-3 rtl:ml-3 rtl:mr-0"></div>
                            {detail}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default Services;