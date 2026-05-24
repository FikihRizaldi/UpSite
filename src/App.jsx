import React, { Suspense, lazy } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load below-the-fold components for better performance
const Services = lazy(() => import('./components/Services'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Pricing = lazy(() => import('./components/Pricing'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading...</div>}>
          <Services />
          <Portfolio />
          <Pricing />
          <Footer />
        </Suspense>
      </div>
    </LazyMotion>
  );
}

export default App;
