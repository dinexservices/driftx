
import React from 'react';
import { Download, MessageSquare, Mail, Phone, MapPin, Zap, ChevronRight } from 'lucide-react';

const InquiryForm: React.FC = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 text-red-600 font-black tracking-[0.4em] text-xs mb-6 uppercase">
            <span className="w-12 h-[2px] bg-red-600"></span> START YOUR ENGINE <span className="w-12 h-[2px] bg-red-600"></span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black font-racing italic mb-8 leading-none tracking-tighter">
            CONTACT THE <span className="text-red-600 text-glow">CIRCUIT</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl leading-relaxed font-medium">
            Ready to bring the adrenaline of DriftX to your venue? Connect with our race directors directly to discuss track logistics and scheduling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {/* WhatsApp */}
          <a 
            href="https://wa.me/+919317097380" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-green-600/10 hover:border-green-600/50 transition-all overflow-hidden flex flex-col items-center text-center"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-green-600/5 blur-2xl group-hover:bg-green-600/20 transition-all"></div>
            <div className="w-16 h-16 bg-green-600/20 rounded-2xl flex items-center justify-center text-green-500 mb-6 group-hover:scale-110 transition-transform">
              <MessageSquare size={32} />
            </div>
            <div className="text-[10px] font-black tracking-[0.3em] text-green-500 mb-2 uppercase">Instant Chat</div>
            <div className="font-racing font-black text-xl italic text-white mb-2">WHATSAPP</div>
            <div className="text-gray-500 text-sm font-bold">LIVE SUPPORT AVAILABLE</div>
            <ChevronRight className="mt-4 text-green-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </a>

          {/* Email */}
          <a 
            href="mailto:office.driftx@gmail.com" 
            className="group relative p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-red-600/10 hover:border-red-600/50 transition-all overflow-hidden flex flex-col items-center text-center"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 blur-2xl group-hover:bg-red-600/20 transition-all"></div>
            <div className="w-16 h-16 bg-red-600/20 rounded-2xl flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform">
              <Mail size={32} />
            </div>
            <div className="text-[10px] font-black tracking-[0.3em] text-red-600 mb-2 uppercase">Direct Mail</div>
            <div className="font-racing font-black text-xl italic text-white mb-2">EMAIL US</div>
            <div className="text-gray-500 text-sm font-bold">office.driftx@gmail.com</div>
            <ChevronRight className="mt-4 text-red-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </a>

          {/* Call */}
          <a 
            href="tel:+919317097380" 
            className="group relative p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-blue-600/10 hover:border-blue-600/50 transition-all overflow-hidden flex flex-col items-center text-center"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/5 blur-2xl group-hover:bg-blue-600/20 transition-all"></div>
            <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
              <Phone size={32} />
            </div>
            <div className="text-[10px] font-black tracking-[0.3em] text-blue-400 mb-2 uppercase">Voice Line</div>
            <div className="font-racing font-black text-xl italic text-white mb-2">CALL TEAM</div>
            <div className="text-gray-500 text-sm font-bold">+91-9317097380</div>
            <ChevronRight className="mt-4 text-blue-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </a>

          {/* Location */}
          <div className="group relative p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all overflow-hidden flex flex-col items-center text-center cursor-default">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 blur-2xl transition-all"></div>
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
              <MapPin size={32} />
            </div>
            <div className="text-[10px] font-black tracking-[0.3em] text-gray-500 mb-2 uppercase">Headquarters</div>
            <div className="font-racing font-black text-xl italic text-white mb-2">LOCATION</div>
            <div className="text-gray-500 text-sm font-bold uppercase tracking-widest">Noida, NCR</div>
          </div>
        </div>

        {/* <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          <button className="flex items-center gap-6 p-6 bg-gradient-to-r from-red-600/20 to-transparent border border-red-600/30 rounded-2xl hover:bg-red-600/30 transition-all group text-left">
            <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center text-white shadow-[0_0_20px_rgba(220,38,38,0.5)] group-hover:scale-110 transition-transform">
              <Download size={24} />
            </div>
            <div>
              <span className="text-[10px] font-black tracking-widest text-red-500 uppercase block mb-1">PROPOSAL DECK</span>
              <span className="text-lg font-racing font-black italic text-white group-hover:text-red-600 transition-colors">COLLEGE_KIT_2024.PDF</span>
            </div>
          </button>

          <button className="flex items-center gap-6 p-6 bg-gradient-to-r from-white/5 to-transparent border border-white/10 rounded-2xl hover:bg-white/10 transition-all group text-left">
            <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-white border border-white/20 group-hover:scale-110 transition-transform">
              <Download size={24} />
            </div>
            <div>
              <span className="text-[10px] font-black tracking-widest text-gray-500 uppercase block mb-1">PARTNER DECK</span>
              <span className="text-lg font-racing font-black italic text-white group-hover:text-red-600 transition-colors">BRAND_SPONSOR_DECK.PDF</span>
            </div>
          </button>
        </div> */}

        <div className="mt-20 flex flex-col items-center">
          <div className="px-8 py-4 bg-red-600/10 border border-red-600/20 rounded-full flex items-center gap-3">
            <Zap size={18} className="text-red-600" fill="currentColor" />
            <span className="text-sm font-black tracking-widest text-white italic">RACE CALENDAR IS FILLING FAST — BOOK YOUR SLOT TODAY</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;
