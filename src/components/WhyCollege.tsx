"use client"
import React, { useRef, useEffect, useState } from 'react';
import { Download, CheckCircle2, Trophy } from 'lucide-react';
import ThreeDCard from './ThreeDCard';

const WhyColleges: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollPos = window.scrollY;
      const sectionTop = rect.top + scrollPos;

      // Calculate how far into the section we are
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const speed = 0.2;
        const yPos = (scrollPos - sectionTop) * speed;
        setOffset(yPos);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const points = [
    "High-footfall flagship attraction",
    "No permanent infrastructure required",
    "Professional execution & safety management",
    "Revenue-sharing or fixed-fee models",
    "Boosts fest engagement & visibility",
    "Strong social media & visual impact"
  ];

  return (
    <section ref={sectionRef} id="colleges" className="relative py-16 md:py-32 overflow-hidden bg-black">
      {/* Dynamic Parallax Background Layer */}
      <div
        className="absolute inset-0 z-0 opacity-20 grayscale scale-110"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1541443131876-44b03de101c5?auto=format&fit=crop&q=80&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${offset}px)`
        }}
      ></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/90 to-transparent"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-red-600 font-black tracking-widest text-xs mb-6 uppercase">
            <Trophy size={16} /> Campus Transformation
          </div>
          <h2 className="text-4xl md:text-6xl font-black font-racing italic tracking-tighter mb-8 leading-none">
            WHY COLLEGES <br />
            CHOOSE <span className="text-red-600">DRIFTX</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-xl">
            We don't just provide an activity; we deliver a flagship experience that defines your fest's identity and legacy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {points.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="text-red-600 shrink-0 mt-1" size={18} />
                <span className="text-sm font-bold tracking-wide text-gray-200">{point}</span>
              </div>
            ))}
          </div>

          <button className="group flex items-center gap-4 bg-red-600 hover:bg-red-700 text-white px-8 py-5 rounded-sm font-black font-racing italic tracking-widest text-lg transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)]">
            DOWNLOAD COLLEGE PROPOSAL
            <Download size={20} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="hidden lg:block relative">
          <div className="absolute -inset-4 border-2 border-red-600/30 rounded-2xl rotate-3"></div>
          <div className="absolute -inset-4 border-2 border-white/10 rounded-2xl -rotate-3"></div>
          <ThreeDCard
            src="/images/college-race.png"
            alt="College Fest Racing"
            className="rounded-2xl relative z-10"
            intensity={15}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyColleges;
