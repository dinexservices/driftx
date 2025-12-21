
import React from 'react';
// Added missing Zap import
import { MapPin, Users, Flag, Rocket, Zap } from 'lucide-react';

const PastEvents: React.FC = () => {
  const institutions = [
  
   
    { name: "IIT KANPUR", event: "TECHKRITI" },
  
    { name: "MNIT ALLAHABAD", event: "" },
    { name: "MNIT JAIPUR", event: "" },
    { name: "ALLAHABAD UNIVERSITY", event: "" },
  ];

  const counters = [
    { label: "EVENTS CONDUCTED", value: "50+", icon: <Flag size={20} /> },
    { label: "CITIES COVERED", value: "20+", icon: <MapPin size={20} /> },
    { label: "FOOTFALL ENGAGED", value: "500K+", icon: <Users size={20} /> },
    { label: "TRACKS DESIGNED", value: "100+", icon: <Rocket size={20} /> },
  ];

  return (
    <section id="credibility" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background speed lines effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-red-600"></div>
        <div className="absolute top-2/4 left-0 w-full h-[1px] bg-red-600"></div>
        <div className="absolute top-3/4 left-0 w-full h-[1px] bg-red-600"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-6xl font-black font-racing italic tracking-tighter mb-8 leading-tight">
              DOMINATING <br /> THE <span className="text-red-600">CIRCUIT</span>
            </h2>
            <p className="text-gray-400 mb-10 leading-relaxed italic">
              From the country's most elite technical institutes to the biggest cultural fests, DriftX is the undisputed choice for professional event motorsport.
            </p>

            <div className="grid grid-cols-1 gap-6">
              {counters.map((c, i) => (
                <div key={i} className="flex items-center gap-6 p-4 bg-white/5 border border-white/10 rounded-xl group hover:border-red-600/50 transition-all">
                  <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center text-red-600 group-hover:scale-110 transition-transform">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-black font-racing italic text-white leading-none">{c.value}</div>
                    <div className="text-[10px] font-black tracking-widest text-gray-500 mt-1 uppercase">{c.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {institutions.map((inst, i) => (
                <div key={i} className="relative aspect-video bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/5 rounded-2xl p-6 flex flex-col justify-center items-center group hover:bg-red-600/10 transition-all cursor-default">
                  <div className="absolute top-3 right-3 w-2 h-2 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <h3 className="text-lg font-black font-racing italic tracking-tighter text-white group-hover:text-red-600 transition-colors text-center">
                    {inst.name}
                  </h3>
                  <div className="mt-2 text-[10px] font-black tracking-widest text-gray-600 uppercase group-hover:text-white transition-colors">
                    {inst.event}
                  </div>
                </div>
              ))}
              <div className="aspect-video border-2 border-dashed border-white/10 rounded-2xl flex items-center justify-center text-gray-700 font-bold text-xs tracking-widest uppercase">
                & MANY MORE
              </div>
            </div>

            <div className="mt-12 p-8 bg-red-600 rounded-2xl relative overflow-hidden group">
              {/* Fix: Using Zap which is now imported */}
              <Zap className="absolute -right-8 -bottom-8 w-48 h-48 text-black/10 group-hover:rotate-12 transition-transform duration-700" />
              <div className="relative z-10">
                <h4 className="text-2xl font-black font-racing italic mb-2">TECHKRITI FEATURED</h4>
                <p className="text-sm font-bold opacity-80 leading-relaxed max-w-lg">
                  Our appearance at IIT Kanpur's Techkriti set new benchmarks for on-campus engagement, witnessing over 10,000+ interactions in a single weekend.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
