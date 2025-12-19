
import React from 'react';
import { Download, Zap, Target, Users, Share2, Rocket } from 'lucide-react';

const WhyBrands: React.FC = () => {
  const brandPoints = [
    { title: "GEN-Z REACH", desc: "Direct engagement with the hardest-to-reach youth demographic.", icon: <Users size={24} /> },
    { title: "HIGH VISIBILITY", desc: "Branding on karts, track barriers, and driver gear.", icon: <Target size={24} /> },
    { title: "ACTIVATIONS", desc: "On-ground booths and custom race-day activations.", icon: <Rocket size={24} /> },
    { title: "AMPLIFICATION", desc: "Professional content creation for digital channels.", icon: <Share2 size={24} /> }
  ];

  return (
    <section id="brands" className="py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Marquee Section */}
      <div className="relative border-y border-white/5 py-8 bg-black mb-24 -rotate-1 scale-105">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6">
              <span className="text-4xl md:text-6xl font-black font-racing italic tracking-tighter text-white/10">SPEED</span>
              <span className="text-4xl md:text-6xl font-black font-racing italic tracking-tighter text-red-600/40">INNOVATION</span>
              <span className="text-4xl md:text-6xl font-black font-racing italic tracking-tighter text-white/10">PERFORMANCE</span>
              <span className="text-4xl md:text-6xl font-black font-racing italic tracking-tighter text-red-600/40">GEN-Z</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-red-600 font-black tracking-widest text-xs mb-4 uppercase">
            <Zap size={16} fill="currentColor" /> Strategic Partnership
          </div>
          <h2 className="text-4xl md:text-6xl font-black font-racing italic tracking-tighter mb-6">
            ASSOCIATION WITH <span className="text-red-600">PERFORMANCE</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            DriftX isn't just an event; it's a high-impact media asset for brands looking to dominate the campus space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {brandPoints.map((p, i) => (
            <div key={i} className="bg-white/5 p-8 border-t-4 border-red-600 rounded-b-xl hover:bg-white/10 transition-all group">
              <div className="text-red-600 mb-6 group-hover:scale-110 transition-transform">{p.icon}</div>
              <h3 className="text-xl font-bold font-racing italic mb-4">{p.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center">
          <button className="group flex items-center gap-4 bg-white text-black hover:bg-red-600 hover:text-white px-10 py-5 rounded-sm font-black font-racing italic tracking-widest text-lg transition-all">
            DOWNLOAD SPONSOR BROCHURE
            <Download size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="mt-6 text-[10px] font-black tracking-[0.5em] text-gray-600 uppercase">Customized decks available on request</p>
        </div>
      </div>
    </section>
  );
};

export default WhyBrands;
