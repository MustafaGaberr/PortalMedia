import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Linkedin, Twitter, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Team: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance required
  const minSwipeDistance = 50;

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
    // Show 2 members on mobile, 3 on desktop
    const visibleCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 2 : 3;
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentSlide + i) % teamMembers.length;
      members.push({ ...teamMembers[index], slideIndex: i });
    }
    return members;
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe && !isRTL) {
      nextSlide();
    } else if (isRightSwipe && !isRTL) {
      prevSlide();
    } else if (isLeftSwipe && isRTL) {
      prevSlide();
    } else if (isRightSwipe && isRTL) {
      nextSlide();
    }
  };

  return (
    <section id="team" className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('team.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('team.subtitle')}
            </p>
          </div>

          {/* Team Carousel */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className={`absolute ${isRTL ? 'right-2 md:right-0' : 'left-2 md:left-0'} top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:bg-blue-50`}
            >
              <ChevronLeft className={`w-4 h-4 md:w-6 md:h-6 text-blue-600 ${isRTL ? 'rotate-180' : ''}`} />
            </button>
            <button
              onClick={nextSlide}
              className={`absolute ${isRTL ? 'left-2 md:left-0' : 'right-2 md:right-0'} top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:bg-blue-50`}
            >
              <ChevronRight className={`w-4 h-4 md:w-6 md:h-6 text-blue-600 ${isRTL ? 'rotate-180' : ''}`} />
            </button>

            {/* Team Members */}
            <div 
              className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mx-8 md:mx-16 transition-all duration-500 ease-in-out"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              style={{ transform: `translateX(0)` }}
            >
              {getVisibleMembers().map((member, index) => (
                <div
                  key={`${member.name}-${currentSlide}`}
                  className={`bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out overflow-hidden group opacity-0 animate-fade-in ${
                    index === 1 && typeof window !== 'undefined' && window.innerWidth >= 768 ? 'md:scale-110 z-10' : 'md:scale-95'
                  }`}
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                    <div className="relative overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
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
                    
                    <div className="p-4 md:p-6">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-semibold mb-2 md:mb-3 text-sm md:text-base">
                        {member.title}
                      </p>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed line-clamp-3">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                ))}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;