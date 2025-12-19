
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'COLLEGES', href: '#colleges' },
    { name: 'BRANDS', href: '#brands' },
    { name: 'SPONSORS', href: '#sponsors' },
    { name: 'TRUST', href: '#credibility' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="text-3xl font-black font-racing tracking-tighter italic">
            DRIFT<span className="text-red-600">X</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-sm font-bold tracking-widest hover:text-red-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold text-sm tracking-widest flex items-center gap-2 group transition-all"
          >
            BOOK EVENT
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-40 md:hidden transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-3xl font-black font-racing italic tracking-tighter"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="mt-4 bg-red-600 text-white px-10 py-4 rounded-full font-bold text-xl tracking-widest"
            onClick={() => setIsOpen(false)}
          >
            BOOK NOW
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
