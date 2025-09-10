import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Linkedin, Twitter, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';

const Team: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const { ref, controls } = useScrollAnimation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const teamMembers = [
    {
      name: "Sarah Johnson",
      title: "CEO & Founder",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      bio: "Digital marketing strategist with 10+ years of experience in building successful campaigns.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@portalmedia.com"
      }
    },
    {
      name: "Mike Chen",
      title: "Creative Director",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      bio: "Award-winning creative professional specializing in brand development and visual storytelling.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mike@portalmedia.com"
      }
    },
    {
      name: "Emily Davis",
      title: "SEO Specialist",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg",
      bio: "Technical SEO expert with a proven track record of improving search rankings and organic traffic.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emily@portalmedia.com"
      }
    },
    {
      name: "Ahmed Al-Rashid",
      title: "Social Media Manager",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
      bio: "Social media strategist focused on creating engaging content and building online communities.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "ahmed@portalmedia.com"
      }
    },
    {
      name: "Lisa Park",
      title: "Data Analyst",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg",
      bio: "Analytics expert who transforms data into actionable insights for marketing optimization.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "lisa@portalmedia.com"
      }
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const getVisibleMembers = () => {
    const members = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % teamMembers.length;
      members.push({ ...teamMembers[index], slideIndex: i });
    }
    return members;
  };

  return (
    <section id="team" className="py-20 lg:py-32 bg-white overflow-hidden">
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
              {t('team.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('team.subtitle')}
            </p>
          </motion.div>

          {/* Team Carousel */}
          <motion.div variants={fadeInUp} className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className={`absolute ${isRTL ? 'right-0' : 'left-0'} top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:bg-blue-50`}
            >
              <ChevronLeft className={`w-6 h-6 text-blue-600 ${isRTL ? 'rotate-180' : ''}`} />
            </button>
            <button
              onClick={nextSlide}
              className={`absolute ${isRTL ? 'left-0' : 'right-0'} top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:bg-blue-50`}
            >
              <ChevronRight className={`w-6 h-6 text-blue-600 ${isRTL ? 'rotate-180' : ''}`} />
            </button>

            {/* Team Members */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-16">
              <AnimatePresence mode="wait">
                {getVisibleMembers().map((member, index) => (
                  <motion.div
                    key={`${member.name}-${currentSlide}`}
                    initial={{ opacity: 0, x: isRTL ? -100 : 100, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: isRTL ? 100 : -100, scale: 0.9 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      ease: [0.6, -0.05, 0.01, 0.99]
                    }}
                    className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group ${
                      index === 1 ? 'md:scale-110 z-10' : 'md:scale-95'
                    }`}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Social Links */}
                      <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3 rtl:space-x-reverse opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <a href={member.social.linkedin} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                          <Linkedin className="w-5 h-5 text-white" />
                        </a>
                        <a href={member.social.twitter} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                          <Twitter className="w-5 h-5 text-white" />
                        </a>
                        <a href={`mailto:${member.social.email}`} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                          <Mail className="w-5 h-5 text-white" />
                        </a>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-semibold mb-3">
                        {member.title}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-12 space-x-2 rtl:space-x-reverse">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-blue-600 w-6' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;