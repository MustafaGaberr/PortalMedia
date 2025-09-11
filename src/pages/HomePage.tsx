import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Components
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import BlogPreview from '../components/BlogPreview';
import Team from '../components/Team';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation when coming from other pages
    if (location.hash) {
      // Wait for components to render then scroll
      const timer = setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <BlogPreview />
      <Team />
      <Contact />
    </>
  );
};

export default HomePage;