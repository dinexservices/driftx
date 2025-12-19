
import React from 'react';
import { Award, Star, Zap } from 'lucide-react';

const PartnersSponsors: React.FC = () => {
  const tiers = [
    { name: "TITLE PARTNER", company: "KAIZEL INDUSTRIES", logo: "https://via.placeholder.com/150/000000/FFFFFF?text=KAIZEL", color: "text-red-600" },
    { name: "GOLD PARTNER", company: "RACE_TEC", logo: "https://via.placeholder.com/150/000000/FFFFFF?text=RACE_TEC", color: "text-yellow-500" },
    { name: "EVENT PARTNER", company: "FUEL_UP", logo: "https://via.placeholder.com/150/000000/FFFFFF?text=FUEL_UP", color: "text-blue-500" },
  ];

  const carouselLogos = ["BRAND_A", "BRAND_B", "BRAND_C", "BRAND_D", "BRAND_E", "BRAND_F", "BRAND_G", "BRAND_H"];

  return (
    <section id="sponsors" className="py-24 bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-red-600 font-black tracking-[0.4em] text-xs mb-4 uppercase">
            <Award size={16} /> Credibility Circuit
          </div>
          <h2 className="text-4xl md:text-6xl font-black font-racing italic tracking-tighter mb-6">
            PARTNERS & <span className="text-red-600">SPONSORS</span>
          </h2>
          <p className="text-gray-500 text-sm font-bold tracking-widest uppercase">
            All official DriftX partners receive website recognition as part of their collaboration benefits.
          </p>
        </div>

        {/* Tiered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {tiers.map((tier, i) => (
            <div key={i} className="relative group bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col items-center transition-all hover:bg-white/10 hover:-translate-y-2">
              <div className={`absolute top-4 right-4 ${tier.color}`}>
                <Star size={20} fill="currentColor" />
              </div>
              <div className="text-[10px] font-black tracking-[0.3em] text-gray-500 mb-4 uppercase">{tier.name}</div>
              <div className="w-32 h-20 bg-black/50 flex items-center justify-center rounded-lg border border-white/5 group-hover:border-red-600/50 transition-colors mb-4">
                <span className="font-racing font-black text-xl italic tracking-tighter text-white/40 group-hover:text-white transition-colors">{tier.company}</span>
              </div>
              <p className="text-xs font-bold text-gray-400">OFFICIAL COLLABORATOR</p>
            </div>
          ))}
        </div>
      </div>

      {/* Auto-scroll Marquee */}
      <div className="bg-red-600/5 py-12 border-y border-white/5">
        <div className="flex whitespace-nowrap animate-marquee-reverse">
          {[1, 2].map((_, i) => (
            <div key={i} className="flex items-center gap-24 px-12">
              {carouselLogos.map((logo, idx) => (
                <div key={idx} className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-2 h-2 bg-red-600 rounded-full group-hover:scale-150 transition-transform"></div>
                  <span className="text-2xl font-black font-racing italic tracking-widest text-white/20 group-hover:text-red-600 transition-colors">
                    {logo}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <a href="#contact" className="inline-flex items-center gap-2 text-xs font-black tracking-[0.3em] text-red-600 hover:text-white transition-colors group">
          <Zap size={14} fill="currentColor" /> BECOME AN OFFICIAL PARTNER <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </section>
  );
};

export default PartnersSponsors;
