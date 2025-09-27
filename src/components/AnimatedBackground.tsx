import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container && window.innerWidth >= 768) { // Only animate on desktop
      const circles = Array.from(container.children);
      
      // Optimized animation for better performance
      circles.forEach((circle: Element, index: number) => {
        // Reduced movement range and slower animations for better performance
        gsap.to(circle, {
          x: `random(-100, 100)`,
          duration: `random(15, 25)`,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: index * 1
        });

        gsap.to(circle, {
          y: `random(-80, 80)`,
          duration: `random(12, 20)`,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          delay: index * 0.8
        });

        gsap.to(circle, {
          rotation: `random(-180, 180)`,
          duration: `random(20, 30)`,
          repeat: -1,
          yoyo: true,
          ease: "none",
          delay: index * 1.2
        });

        gsap.to(circle, {
          scale: `random(0.8, 1.2)`,
          duration: `random(10, 18)`,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          delay: index * 0.6
        });

        gsap.to(circle, {
          opacity: `random(0.15, 0.3)`,
          duration: `random(8, 15)`,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: index * 0.9
        });
      });
    }

    return () => {
      if (container) {
        gsap.killTweensOf(container.children);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="hidden md:block fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: -1 }}
    >
      {/* Large circles - scattered and smaller */}
      <div 
        className="absolute rounded-full opacity-20"
        style={{
          width: '180px',
          height: '180px',
          background: 'linear-gradient(135deg, #5f6db0, #735fb0)',
          top: '10%',
          left: '5%',
          filter: 'blur(40px)'
        }}
      />
      <div 
        className="absolute rounded-full opacity-15"
        style={{
          width: '160px',
          height: '160px',
          background: 'linear-gradient(135deg, #b0a25f, #a8b3e8)',
          top: '70%',
          right: '10%',
          filter: 'blur(35px)'
        }}
      />
      <div 
        className="absolute rounded-full opacity-25"
        style={{
          width: '200px',
          height: '200px',
          background: 'linear-gradient(135deg, #735fb0, #5f6db0)',
          bottom: '20%',
          left: '20%',
          filter: 'blur(45px)'
        }}
      />
      
      {/* Medium circles - more scattered */}
      <div 
        className="absolute rounded-full opacity-20"
        style={{
          width: '120px',
          height: '120px',
          background: 'linear-gradient(135deg, #a8b3e8, #c4a8f0)',
          top: '25%',
          right: '35%',
          filter: 'blur(30px)'
        }}
      />
      <div 
        className="absolute rounded-full opacity-18"
        style={{
          width: '140px',
          height: '140px',
          background: 'linear-gradient(135deg, #7c89c7, #735fb0)',
          top: '50%',
          left: '8%',
          filter: 'blur(35px)'
        }}
      />
      <div 
        className="absolute rounded-full opacity-22"
        style={{
          width: '100px',
          height: '100px',
          background: 'linear-gradient(135deg, #5f6db0, #7c89c7)',
          top: '80%',
          left: '60%',
          filter: 'blur(25px)'
        }}
      />
      
      {/* Small circles - distributed across screen */}
      <div 
        className="absolute rounded-full opacity-30"
        style={{
          width: '80px',
          height: '80px',
          background: 'linear-gradient(135deg, #5f6db0, #7c89c7)',
          bottom: '40%',
          right: '50%',
          filter: 'blur(20px)'
        }}
      />
      <div 
        className="absolute rounded-full opacity-22"
        style={{
          width: '90px',
          height: '90px',
          background: 'linear-gradient(135deg, #b0a25f, #5f6db0)',
          top: '5%',
          left: '70%',
          filter: 'blur(25px)'
        }}
      />
      <div 
        className="absolute rounded-full opacity-28"
        style={{
          width: '110px',
          height: '110px',
          background: 'linear-gradient(135deg, #735fb0, #c4a8f0)',
          top: '35%',
          right: '5%',
          filter: 'blur(30px)'
        }}
      />
      <div 
        className="absolute rounded-full opacity-20"
        style={{
          width: '70px',
          height: '70px',
          background: 'linear-gradient(135deg, #a8b3e8, #b0a25f)',
          bottom: '10%',
          right: '40%',
          filter: 'blur(20px)'
        }}
      />
      <div 
        className="absolute rounded-full opacity-25"
        style={{
          width: '95px',
          height: '95px',
          background: 'linear-gradient(135deg, #7c89c7, #c4a8f0)',
          top: '60%',
          left: '45%',
          filter: 'blur(25px)'
        }}
      />
      <div 
        className="absolute rounded-full opacity-18"
        style={{
          width: '85px',
          height: '85px',
          background: 'linear-gradient(135deg, #5f6db0, #a8b3e8)',
          top: '15%',
          right: '60%',
          filter: 'blur(22px)'
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
