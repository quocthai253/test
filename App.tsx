import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import RegisterForm from './components/RegisterForm';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-tdc-black text-white font-sans selection:bg-tdc-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <Testimonials />
        <RegisterForm />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;