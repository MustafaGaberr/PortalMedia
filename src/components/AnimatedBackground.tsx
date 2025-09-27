import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const circles = containerRef.current.children;
      
      // Create floating animation for all circles
      gsap.to(circles, {
        y: "random(-100, 100)",
        x: "random(-50, 50)",
        rotation: "random(-180, 180)",
        duration: "random(8, 15)",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: {
          amount: 2,
          from: "random"
        }
      });

      // Create pulsing animation
      gsap.to(circles, {
        scale: "random(0.8, 1.2)",
        opacity: "random(0.3, 0.7)",
        duration: "random(4, 8)",
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: {
          amount: 1.5,
          from: "random"
        }
      });
    }

    return () => {
      gsap.killTweensOf(containerRef.current?.children);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: -1 }}
    >
      {/* Large circles */}
      <div 
        className="absolute rounded-full opacity-20"
        style={{
          width: '400px',
          height: '400px',
          background: 'linear-gradient(135deg, #5f6db0, #735fb0)',
          top: '10%',
          left: '10%',
          filter: 'blur(60px)'
        }}
      />
      <div 
        className="absolute rounded-full opacity-15"
        style={{
          width: '300px',
          height: '300px',
          background: 'linear-gradient(135deg, #b0a25f, #6db05f)',
          top: '60%',
          right: '15%',
          filter: 'blur(50px)'
        }}
      />
      <div 
        className="absolute rounded-full opacity-25"
        style={{
          width: '350px',
          height: '350px',
          background: 'linear-gradient(135deg, #735fb0, #5f6db0)',
          bottom: '20%',
          left: '20%',
          filter: 'blur(70px)'
        }}
      />
      
      {/* Medium circles */}
      <div 
        className="absolute rounded-full opacity-20"
        style={{
          width: '200px',
          height: '200px',
          background: 'linear-gradient(135deg, #6db05f, #b0a25f)',
          top: '30%',
          right: '30%',
          filter: 'blur(40px)'
        }}
      />
      <div 
        className="absolute rounded-full opacity-18"
        style={{
          width: '250px',
          height: '250px',
          background: 'linear-gradient(135deg, #7c89c7, #735fb0)',
          bottom: '40%',
          right: '10%',
          filter: 'blur(45px)'
        }}
      />
      
      {/* Small circles */}
      <div 
        className="absolute rounded-full opacity-30"
        style={{
          width: '150px',
          height: '150px',
          background: 'linear-gradient(135deg, #5f6db0, #7c89c7)',
          top: '70%',
          left: '50%',
          filter: 'blur(30px)'
        }}
      />
      <div 
        className="absolute rounded-full opacity-22"
        style={{
          width: '120px',
          height: '120px',
          background: 'linear-gradient(135deg, #b0a25f, #5f6db0)',
          top: '20%',
          left: '70%',
          filter: 'blur(35px)'
        }}
      />
      <div 
        className="absolute rounded-full opacity-28"
        style={{
          width: '180px',
          height: '180px',
          background: 'linear-gradient(135deg, #735fb0, #6db05f)',
          bottom: '10%',
          right: '40%',
          filter: 'blur(40px)'
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
