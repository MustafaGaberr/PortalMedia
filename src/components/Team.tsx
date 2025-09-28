import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useLanguage } from '../contexts/LanguageContext';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface TeamMember {
  id: number;
  name: string;
  title: string;
  image: string;
}

const Team: React.FC = () => {
  const { t } = useLanguage();

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Ammar Salaymeh",
      title: "CEO & Founder",
      image: "/Assets/team/Ammar.webp"
    },
    {
      id: 2,
      name: "Lina Sharaf",
      title: "Creative Director",
      image: "/Assets/team/linasharaf.webp"
    },
    {
      id: 3,
      name: "Eman ",
      title: "Social Media Specialist",
      image: "/Assets/team/eman.png"
    },
    {
      id: 4,
      name: "Mustafa Gaber",
      title: "Web Developer",
      image: "/Assets/team/mustafagaber.webp"
    },
    {
      id: 5,
      name: "Abdullah Eyad",
      title: "Graphic Designer",
      image: "/Assets/team/abood.webp"
    }
  ];

  return (
    <section id="team" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-cairo bg-gradient-to-r from-[#5f6db0] to-[#735fb0] bg-clip-text text-transparent leading-normal pt-3 pb-3 overflow-visible">
            {t('team.title')}
          </h2>
          <p className="text-xl max-w-3xl mx-auto font-cairo" >
            {t('team.subtitle')}
          </p>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet-custom',
              bulletActiveClass: 'swiper-pagination-bullet-active-custom',
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="pb-16"
          >
            {teamMembers.map((member) => (
              <SwiperSlide key={member.id} className="h-auto">
                <div className={`
                  relative group h-80 rounded-2xl overflow-hidden
                  transform transition-all duration-500 ease-out
                  hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25
                  cursor-pointer
                `}>
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  
                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-white transition-colors duration-300 font-cairo">
                        {member.name}
                      </h3>
                      <p className="text-primary-400 font-semibold text-sm uppercase tracking-wider group-hover:text-primary-300 transition-colors duration-300 font-cairo">
                        {member.title}
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-white hover:text-purple-600 transition-all duration-300 hover:scale-110">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-white hover:text-purple-600 transition-all duration-300 hover:scale-110">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      {/* Custom Styles */}
      <style>{`
        .swiper-pagination-bullet-custom {
          width: 12px !important;
          height: 12px !important;
          background: rgba(255, 255, 255, 0.5) !important;
          border-radius: 50% !important;
          margin: 0 6px !important;
          transition: all 0.3s ease !important;
          cursor: pointer !important;
        }
        
        .swiper-pagination-bullet-active-custom {
          background: linear-gradient(45deg, var(--primary-color), var(--accent-color)) !important;
          transform: scale(1.2) !important;
        }
        
        .swiper-pagination-bullet-custom:hover {
          background: rgba(255, 255, 255, 0.8) !important;
          transform: scale(1.1) !important;
        }
      `}</style>
    </section>
  );
};

export default Team;