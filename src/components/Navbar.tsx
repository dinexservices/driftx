import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'COLLEGES', href: '#colleges' },
    { name: 'BRANDS', href: '#brands' },
    { name: 'SPONSORS', href: '#sponsors' },
    { name: 'TRUST', href: '#credibility' },
  ];

  return (
    <>
      <nav
        className={`fixed w-full left-0 top-0 z-[9999] transition-all duration-500 ${isScrolled || isOpen
            ? 'bg-black/95 backdrop-blur-xl py-4 border-b border-white/10 shadow-2xl'
            : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-[10001]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            {/* Assuming logo.png is in the public folder */}
            <Image
              src="/logo.png"
              alt="DriftX Logo"
              width={140}
              height={50}
              className="object-contain"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-bold tracking-[0.2em] text-gray-300 hover:text-drift-orange transition-colors"
              >
                {link.name}
              </a>
            ))}

            {/* Store Button (Coming Soon) */}
            <div className="relative group">
              <button
                disabled
                className="text-[11px] font-bold tracking-[0.2em] text-gray-600 cursor-not-allowed flex items-center gap-2"
              >
                STORE
                <div className="px-1.5 py-0.5 bg-gray-800 text-[8px] text-gray-400 rounded">SOON</div>
              </button>
              {/* Tooltip */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Coming Soon
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="bg-drift-green hover:bg-drift-green/90 text-black px-6 py-2.5 rounded-sm font-bold text-[11px] tracking-widest flex items-center gap-2 group transition-all transform skew-x-[-12deg]"
            >
              <span className="skew-x-[12deg] flex items-center gap-2">
                BOOK EVENT
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-[9998] lg:hidden transition-all duration-500 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none delay-500'
          }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer Content */}
        <div
          className={`absolute top-0 right-0 h-full w-[300px] bg-black border-l border-white/10 shadow-2xl flex flex-col pt-32 px-8 gap-8 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xl font-black italic tracking-tighter text-white hover:text-drift-orange transition-all duration-500 transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}
              style={{ transitionDelay: `${100 + (index * 50)}ms` }}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Store Button */}
          <div
            className={`flex items-center gap-2 text-lg font-black italic tracking-tighter text-gray-700 cursor-not-allowed transition-all duration-500 delay-300 transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}
          >
            STORE
            <span className="text-[10px] bg-gray-900 border border-gray-800 px-1.5 py-0.5 rounded text-gray-500 not-italic tracking-widest font-sans">
              SOON
            </span>
          </div>

          <a
            href="#contact"
            className={`mt-4 bg-drift-green text-black px-8 py-3 font-bold text-sm tracking-widest w-full text-center shadow-[0_0_30px_rgba(93,218,110,0.2)] transform skew-x-[-12deg] transition-all duration-500 delay-500 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}
            onClick={() => setIsOpen(false)}
          >
            <div className="skew-x-[12deg]">BOOK EVENT</div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
