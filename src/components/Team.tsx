import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
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
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg"
    },
    {
      name: "Lina Sharaf",
      title: "Creative Director",
      image: "/Assets/team/linasharaf.jpg"
    },
    {
      name: "Menna Muhammed",
      title: "Social Media Specialist",
      image: "/Assets/team/mennamuhammed.jpg"
    },
    {
      name: "Mustafa Gaber",
      title: "Web Developer",
      image: "/Assets/team/mustafagaber.jpg"
    },
    {
      name: "Omar Al-Amir",
      title: "Graphic Designer",
      image: "/Assets/team/omralamir.jpg"
    }
  ];

  // Custom progress handler optimized for 5 unique cards
  const onProgress = (swiper: SwiperType, progress: number) => {
    const slides = swiper.slides;
    
    for (let i = 0; i < slides.length; i++) {
      const slide = slides[i] as HTMLElement;
      const slideProgress = (slide as any).progress;
      
      // Calculate transform values
      let translateX = slideProgress * -50;
      let scale = 1 - Math.abs(slideProgress) * 0.2;
      let zIndex = 14 - Math.abs(slideProgress) * 2;
      let opacity = 1 - Math.abs(slideProgress) * 0.33;
      
      // Apply bounds
      scale = Math.max(scale, 0.4);
      opacity = Math.max(opacity, 0);
      zIndex = Math.max(Math.round(zIndex), 5);
      
      // Special handling for loop mode with limited slides
      if (Math.abs(slideProgress) > 2) {
        opacity = 0;
        scale = 0.4;
      }
      
      // Apply transforms
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

  // Add slide change handler to ensure proper looping
  const onSlideChange = () => {
    if (swiperRef.current) {
      // Force update to ensure slides are properly positioned
      setTimeout(() => {
        if (swiperRef.current) {
          swiperRef.current.update();
        }
      }, 100);
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
            onSlideChange={onSlideChange}
            spaceBetween={0}
            centeredSlides={true}
            slidesPerView={5}
            grabCursor={true}
            loop={true}
            loopAdditionalSlides={5}
            navigation={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[Navigation, Autoplay]}
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
            speed={600}
            resistanceRatio={0.85}
            centerInsufficientSlides={true}
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

      {/* Custom Styles have been moved to index.css */}
    </section>
  );
};

export default Team;