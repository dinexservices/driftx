import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fix: Lock body scroll when mobile menu is open
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
    <nav 
      className={`fixed w-full left-0 top-0 z-[1000] transition-all duration-500 ${
        isScrolled || isOpen 
          ? 'bg-black/90 backdrop-blur-lg py-4 border-b border-white/10' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 relative z-[1001]">
          <span className="text-2xl md:text-3xl font-black italic tracking-tighter text-white">
            DRIFT<span className="text-red-600">X</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] font-bold tracking-[0.2em] text-gray-300 hover:text-red-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-sm font-bold text-[11px] tracking-widest flex items-center gap-2 group transition-all transform skew-x-[-12deg]"
          >
            <span className="skew-x-[12deg] flex items-center gap-2">
              BOOK EVENT
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        {/* <button
          className="lg:hidden text-white p-2 relative z-[1001]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button> */}
      </div>

      {/* Mobile Menu Overlay */}
      {/* <div 
        className={`fixed inset-0 bg-black flex flex-col items-center justify-center transition-all duration-500 ease-in-out lg:hidden ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full'
        }`}
      >
        <div className="flex flex-col items-center gap-6 w-full px-10">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              style={{ transitionDelay: `${index * 50}ms` }}
              className={`text-3xl font-black italic tracking-tighter text-white hover:text-red-600 transition-all ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className={`mt-6 bg-red-600 text-white px-10 py-4 font-bold text-lg tracking-widest w-full text-center shadow-lg shadow-red-600/20 transform skew-x-[-12deg] transition-all duration-500 ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '300ms' }}
            onClick={() => setIsOpen(false)}
          >
             <div className="skew-x-[12deg]">BOOK NOW</div>
          </a>
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;