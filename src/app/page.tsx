'use client'
import React, { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Experience from '@/components/Experience';
import HowItWorks from '@/components/HowItWorks';
import WhyColleges from '@/components/WhyCollege';
import WhyBrands from '@/components/WhyBrands';
import PartnersSponsors from '@/components/PartnersSponsors';
import PastEvents from '@/components/PastEvents';
import Stats from '@/components/Stats';
import Gallery from '@/components/Gallery';
import ThreeDRacing from '@/components/ThreeDRacing';
import InquiryForm from '@/components/InquireForm';
import Footer from '@/components/Footer';
import SpeedLines from '@/components/SpeedLines';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrolled(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] selection:bg-red-600 selection:text-white">
      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-red-600 z-[100] transition-all duration-75"
        style={{ width: `${scrolled}%` }}
      />

      <SpeedLines />
      <Navbar />

      <main className="relative">
        {/* Hero Recedes on Scroll */}
        <Hero />

        {/* Content sections overlap the receding hero */}
        <div className="relative z-40 bg-[#050505] shadow-[0_-50px_100px_rgba(0,0,0,0.9)]">
          <Stats />
          <Experience />
          <HowItWorks />
          <WhyColleges />
          <WhyBrands />
          <PartnersSponsors />
          <PastEvents />
          <ThreeDRacing />
          <Gallery />
          <InquiryForm />
        </div>
      </main>

      <div className="relative z-50">
        <Footer />
      </div>
    </div>
  );
};

export default App;
