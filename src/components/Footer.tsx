
import React from 'react';
import Image from 'next/image';
import { Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 md:py-20 border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 mb-10 md:mb-16">
          <div className="text-center md:text-left">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="DriftX Logo"
                width={120}
                height={40}
                className="mx-auto md:mx-0"
              />
            </div>
            <p className="text-gray-500 max-w-sm">
              The premium motorsport experience for the next generation. Professional karts, elite tracks, unforgettable vibes.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-6">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/driftx_india/" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/driftx-india" },
                { Icon: Youtube, href: "https://www.youtube.com/@DriftX-t5e" }
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-drift-orange transition-colors">
                  <Icon size={24} />
                </a>
              ))}
            </div>
            <p className="text-xs font-black tracking-[0.3em] text-gray-600">JOIN THE CIRCUIT</p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm font-bold mb-2">office.driftx@gmail.com</p>
            <p className="text-sm font-bold text-gray-500">+91 9317097380</p>
            <p className="text-sm font-bold text-gray-500">Phagwara, Punjab</p>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/5">
          <p className="text-[10px] tracking-[0.2em] font-black text-gray-700 uppercase mb-4">
            &copy; 2026 DRIFTX EXPERIENCE LTD. ALL RIGHTS RESERVED.

          </p>
          <a
            href="https://dinestx.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] tracking-[0.2em] font-black text-gray-800 hover:text-drift-orange uppercase transition-colors"
          >
            Developed by Dinestx Services
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
