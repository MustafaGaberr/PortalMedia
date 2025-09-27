import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Hero from '../components/Hero';
import About from '../components/About';
import LazySection from '../components/LazySection';

const Services = React.lazy(() => import('../components/Services'));
const BlogPreview = React.lazy(() => import('../components/BlogPreview'));
const Team = React.lazy(() => import('../components/Team'));
const Contact = React.lazy(() => import('../components/Contact'));

const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
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
      
      <LazySection threshold={0.1} rootMargin="200px">
        <React.Suspense fallback={<div className="min-h-[600px]" />}>
          <Services />
        </React.Suspense>
      </LazySection>
      
      <LazySection threshold={0.1} rootMargin="200px">
        <React.Suspense fallback={<div className="min-h-[500px]" />}>
          <BlogPreview />
        </React.Suspense>
      </LazySection>
      
      <LazySection threshold={0.1} rootMargin="200px">
        <React.Suspense fallback={<div className="min-h-[600px]" />}>
          <Team />
        </React.Suspense>
      </LazySection>
      
      <LazySection threshold={0.1} rootMargin="200px">
        <React.Suspense fallback={<div className="min-h-[700px]" />}>
          <Contact />
        </React.Suspense>
      </LazySection>
    </>
  );
};

export default HomePage;