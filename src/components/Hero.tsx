
import React, { useState, useEffect, useRef } from 'react';
import {  Zap } from 'lucide-react';
import gocart from "@/assets/gocart.jpg"
import Image from 'next/image';


const Hero: React.FC = () => {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const headlines = [
    "WE BRING MOTORSPORT TO YOUR CAMPUS.",
    "NOT JUST GO-KARTING. A FULL-SCALE RACING EXPERIENCE.",
    "TURNING COLLEGE FESTS INTO RACING ARENAS.",
    "INDIA’S NEXT-GEN EVENT MOTORSPORT EXPERIENCE."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const { top, height } = sectionRef.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -top / height));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Receding effect calculations
  const containerScale = 1 - scrollProgress * 0.15;
  const containerOpacity = 1 - scrollProgress * 1.5;
  const containerBlur = scrollProgress * 12;
  const containerBrightness = 1 - scrollProgress * 0.8;

  // Parallax offset for the background image
  // Increased slightly to ensure motion is visible but safe
  const parallaxY = scrollProgress * 140;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen md:h-[150vh] bg-black"
    >
      <div
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-black"
        style={{
          transform: `scale(${containerScale})`,
          opacity: Math.max(0, containerOpacity),
          filter: `blur(${containerBlur}px) brightness(${containerBrightness})`,
          transformOrigin: 'center center',
          transition: 'transform 0.1s ease-out, opacity 0.1s ease-out, filter 0.1s ease-out'
        }}
      >
        {/* Background Visuals */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/80 to-black z-10" />

          <Image
            src={gocart}
            alt="DriftX Racing Buggy Action"
            className="w-full h-full object-cover grayscale contrast-[1.4] brightness-[0.8]"
            style={{
              transform: `translateY(-${parallaxY}px) scale(1.4)`,
              transition: 'transform 0.1s ease-out'
            }}
          />

          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-grid opacity-20 z-20" />

          {/* Grain Effect */}
          <div className="absolute inset-0 opacity-[0.05] z-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>

        <div className="relative z-30 container mx-auto px-6 text-center">
        

          <div className="min-h-[160px] md:min-h-[280px] flex items-center justify-center">
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black font-racing italic leading-tight tracking-tighter mb-4 text-glow">
              {headlines[headlineIndex].split(' ').map((word, i) => {
                const isHighlight = ["DRIFTX", "MOTORSPORT", "RACING", "ARENAS.", "EXPERIENCE."].includes(word.toUpperCase());
                return (
                  <span key={`${headlineIndex}-${i}`} className={isHighlight ? "text-red-600" : ""}>
                    {word}{' '}
                  </span>
                );
              })}
            </h1>
          </div>

          <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-xl font-medium tracking-wide mb-10 leading-relaxed drop-shadow-lg">
            DriftX is a professional go-karting experience designed for college fests and branded events, delivering speed, safety, and unforgettable engagement.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto px-10 py-5 bg-red-600 hover:bg-red-700 text-white font-black font-racing italic tracking-widest text-lg rounded-sm transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(220,38,38,0.5)]"
            >
              HOST DRIFTX AT YOUR COLLEGE
            </a>
            <a
              href="#partners"
              className="w-full sm:w-auto px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-black font-racing italic tracking-widest text-lg rounded-sm transition-all backdrop-blur-sm"
            >
              PARTNER WITH DRIFTX
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <div className="w-8 h-8 rounded-full border-4 border-gray-800 flex items-center justify-center animate-spin">
            <div className="w-1 h-2 bg-red-600 rounded-sm"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
