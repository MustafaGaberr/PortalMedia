import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useLanguage } from '../contexts/LanguageContext';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Team: React.FC = () => {
  const { t } = useLanguage();
  const swiperRef = useRef<SwiperType>();

  const teamMembers = [
    {
      name: "Ammar Salaymeh",
      title: "CEO & Founder",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    },
    {
      name: "Lina Sharaf",
      title: "Creative Director",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
    },
    {
      name: "Menna Muhammed",
      title: "Social Media Specialist",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg"
    },
    {
      name: "Mustafa Gaber",
      title: "Web Developer",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg"
    },
    {
      name: "Omar Al-Amir",
      title: "Graphic Designer",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg"
    }
  ];

  // Custom progress handler matching the reference HTML exactly
  const onProgress = (swiper: SwiperType, progress: number) => {
    const slides = swiper.slides;
    
    for (let i = 0; i < slides.length; i++) {
      const slide = slides[i] as HTMLElement;
      const slideProgress = (slide as any).progress;
      
      // Calculate transform values based on reference HTML
      let translateX = slideProgress * -50; // Convert to percentage
      let scale = 1 - Math.abs(slideProgress) * 0.2;
      let zIndex = 14 - Math.abs(slideProgress);
      let opacity = 1 - Math.abs(slideProgress) * 0.33;
      
      // Apply bounds
      scale = Math.max(scale, 0);
      opacity = Math.max(opacity, 0);
      zIndex = Math.max(Math.round(zIndex), 7);
      
      // Apply transforms exactly like the reference
      slide.style.transform = `translateX(${translateX}%) scale(${scale})`;
      slide.style.zIndex = zIndex.toString();
      slide.style.opacity = opacity.toString();
      slide.style.transitionDuration = '0ms';
      
      // Animate content opacity
      const content = slide.querySelector('.swiper-carousel-animate-opacity') as HTMLElement;
      if (content) {
        content.style.opacity = opacity.toString();
        content.style.transitionDuration = '0ms';
      }
    }
  };

  return (
    <section id="team" className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#212529' }}>
            {t('team.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('team.subtitle')}
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            watchSlidesProgress={true}
            onProgress={onProgress}
            spaceBetween={0}
            centeredSlides={true}
            slidesPerView={5}
            grabCursor={true}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="swiper-carousel"
            style={{
              '--swiper-navigation-color': 'var(--gold-dark)',
              width: '100%',
              height: '500px',
              cursor: 'grab'
            } as React.CSSProperties}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 0,
              },
            }}
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="swiper-carousel-animate-opacity">
                  <div className="relative w-80 h-96 mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Member Image */}
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Member Info */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm font-medium" style={{ color: 'var(--gold-light)' }}>
                        {member.title}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .swiper-carousel {
          overflow: visible;
        }
        
        .swiper-carousel :global(.swiper-slide) {
          transition-duration: 0ms !important;
          will-change: transform, opacity;
        }
        
        .swiper-carousel :global(.swiper-wrapper) {
          cursor: grab;
          transition-duration: 0ms;
        }
        
        .swiper-carousel-animate-opacity {
          transition-duration: 0ms;
        }
        
        .swiper-carousel :global(.swiper-button-next),
        .swiper-carousel :global(.swiper-button-prev) {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          width: 50px;
          height: 50px;
          margin-top: -25px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.2s ease;
        }
        
        .swiper-carousel :global(.swiper-button-next:hover),
        .swiper-carousel :global(.swiper-button-prev:hover) {
          background: rgba(255, 255, 255, 1);
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }
        
        .swiper-carousel :global(.swiper-button-next::after),
        .swiper-carousel :global(.swiper-button-prev::after) {
          font-size: 20px;
          font-weight: bold;
          color: var(--gold-dark);
        }
        
        @media (max-width: 768px) {
          .swiper-carousel :global(.swiper-button-next),
          .swiper-carousel :global(.swiper-button-prev) {
            width: 40px;
            height: 40px;
            margin-top: -20px;
          }
          
          .team-swiper :global(.swiper-button-next::after),
          .team-swiper :global(.swiper-button-prev::after) {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default Team;