
import React from 'react';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          <div className="text-center md:text-left">
            <span className="text-4xl font-black font-racing tracking-tighter italic mb-4 block">
              DRIFT<span className="text-red-600">X</span>
            </span>
            <p className="text-gray-500 max-w-sm">
              The premium motorsport experience for the next generation. Professional karts, elite tracks, unforgettable vibes.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-6">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-500 hover:text-red-600 transition-colors">
                  <Icon size={24} />
                </a>
              ))}
            </div>
            <p className="text-xs font-black tracking-[0.3em] text-gray-600">JOIN THE CIRCUIT</p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm font-bold mb-2">info@driftx.racing</p>
            <p className="text-sm font-bold text-gray-500">+1 (800) DRIFT-X</p>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/5">
          <p className="text-[10px] tracking-[0.2em] font-black text-gray-700 uppercase">
            &copy; 2024 DRIFTX EXPERIENCE LTD. ALL RIGHTS RESERVED. 
            <span className="mx-4">PRIVACY POLICY</span>
            <span>TERMS OF SERVICE</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
