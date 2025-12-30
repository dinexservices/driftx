
import React from 'react';
import { Award, Star, Zap } from 'lucide-react';

const PartnersSponsors: React.FC = () => {
  const tiers = [
    { name: "TITLE PARTNER", company: "KAIZEL INDUSTRIES", logo: "https://via.placeholder.com/150/000000/FFFFFF?text=KAIZEL", color: "text-drift-green" },
    { name: "GOLD PARTNER", company: "RACE_TEC", logo: "https://via.placeholder.com/150/000000/FFFFFF?text=RACE_TEC", color: "text-yellow-500" },
    { name: "EVENT PARTNER", company: "FUEL_UP", logo: "https://via.placeholder.com/150/000000/FFFFFF?text=FUEL_UP", color: "text-blue-500" },
  ];

  const carouselLogos = ["BRAND_A", "BRAND_B", "BRAND_C", "BRAND_D", "BRAND_E", "BRAND_F", "BRAND_G", "BRAND_H"];

  return (
    <section id="sponsors" className="py-24 bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-drift-green font-black tracking-[0.4em] text-xs mb-4 uppercase">
            <Award size={16} /> Credibility Circuit
          </div>
          <h2 className="text-4xl md:text-6xl font-black font-racing italic tracking-tighter mb-6">
            PARTNERS & <span className="text-drift-green">SPONSORS</span>
          </h2>
          <p className="text-gray-500 text-sm font-bold tracking-widest uppercase">
            All official DriftX partners receive website recognition as part of their collaboration benefits.
          </p>
        </div>

      </div>

      {/* (Tiered Grid Removed as per request) */}

      {/* Auto-scroll Marquee */}
      <div className="bg-drift-green/5 py-12 border-y border-white/5">
        <div className="flex whitespace-nowrap animate-marquee-reverse">
          {[1, 2].map((_, i) => (
            <div key={i} className="flex items-center gap-24 px-12">
              {carouselLogos.map((logo, idx) => (
                <div key={idx} className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-2 h-2 bg-drift-green rounded-full group-hover:scale-150 transition-transform"></div>
                  <span className="text-2xl font-black font-racing italic tracking-widest text-white/20 group-hover:text-drift-green transition-colors">
                    {logo}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <a href="#contact" className="inline-flex items-center gap-2 text-xs font-black tracking-[0.3em] text-drift-green hover:text-white transition-colors group">
          <Zap size={14} fill="currentColor" /> BECOME AN OFFICIAL PARTNER <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </section>
  );
};

export default PartnersSponsors;
