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
      gradient: 'gold-primary',
      details: ['Keyword Research', 'Technical SEO', 'Link Building', 'Content Optimization'],
    },
    {
      icon: Share2,
      title: t('services.social.title'),
      description: t('services.social.description'),
      gradient: 'gold-secondary',
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
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              {t('services.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative h-64 md:h-80 perspective-1000"
                onMouseEnter={() => setFlippedCard(index)}
                onMouseLeave={() => setFlippedCard(null)}
              >
                <motion.div
                  className="relative w-full h-full transition-transform duration-300 transform-style-preserve-3d"
                  animate={{ 
                    rotateY: flippedCard === index ? 180 : 0 
                  }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  {/* Front of card */}
                  <div className="absolute inset-0 w-full h-full bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 backface-hidden border border-gray-100">
                    <div className="p-4 md:p-8 h-full flex flex-col justify-center items-center text-center">
                      <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 ${
                        service.gradient === 'gold-primary' 
                          ? '' 
                          : service.gradient === 'gold-secondary'
                          ? ''
                          : `bg-gradient-to-br ${service.gradient}`
                      }`}
                      style={{
                        background: service.gradient === 'gold-primary' 
                          ? 'linear-gradient(135deg, var(--gold-light), var(--gold-dark))'
                          : service.gradient === 'gold-secondary'
                          ? 'linear-gradient(135deg, var(--gold-dark), var(--gold-darker))'
                          : undefined
                      }}>
                        <service.icon className="w-6 h-6 md:w-8 md:h-8" style={{ color: service.gradient.includes('gold') ? '#212529' : 'white' }} />
                      </div>
                      <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-2 md:mb-4 line-clamp-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-xs md:text-base line-clamp-3">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className={`absolute inset-0 w-full h-full rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 backface-hidden rotate-y-180 ${
                    service.gradient === 'gold-primary' || service.gradient === 'gold-secondary' ? '' : `bg-gradient-to-br ${service.gradient}`
                  }`}
                  style={{
                    background: service.gradient === 'gold-primary' 
                      ? 'linear-gradient(135deg, var(--gold-light), var(--gold-dark))'
                      : service.gradient === 'gold-secondary'
                      ? 'linear-gradient(135deg, var(--gold-dark), var(--gold-darker))'
                      : undefined
                  }}>
                    <div className="p-4 md:p-8 h-full flex flex-col justify-center items-center text-center text-white">
                      <service.icon className="w-8 h-8 md:w-12 md:h-12 mb-4 md:mb-6" style={{ color: service.gradient.includes('gold') ? '#212529' : 'white' }} />
                      <h3 className="text-sm md:text-xl font-bold mb-4 md:mb-6" style={{ color: service.gradient.includes('gold') ? '#212529' : 'white' }}>{service.title}</h3>
                      <ul className="space-y-2 md:space-y-3">
                        {service.details.map((detail, detailIndex) => (
                          <motion.li
                            key={detailIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ 
                              opacity: flippedCard === index ? 1 : 0,
                              x: flippedCard === index ? 0 : -20
                            }}
                            transition={{ delay: detailIndex * 0.1 }}
                            className="flex items-center justify-center text-xs md:text-base"
                            style={{ color: service.gradient.includes('gold') ? '#212529' : 'white' }}
                          >
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full mr-2 md:mr-3 rtl:ml-2 md:rtl:ml-3 rtl:mr-0" style={{ backgroundColor: service.gradient.includes('gold') ? '#212529' : 'white' }}></div>
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
    </section>
  );
};

export default Services;