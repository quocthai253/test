import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

// Lazy load components that are not immediately visible
const Services = lazy(() => import('./components/Services'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const RegisterForm = lazy(() => import('./components/RegisterForm'));

const LoadingFallback = () => (
  <div className="py-24 flex justify-center items-center bg-tdc-black">
    <div className="w-8 h-8 border-2 border-white/20 border-t-tdc-red rounded-full animate-spin"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-tdc-black text-white font-sans selection:bg-tdc-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<LoadingFallback />}>
          <Services />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <WhyChooseUs />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Portfolio />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <RegisterForm />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;