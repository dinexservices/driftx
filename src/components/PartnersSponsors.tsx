
import React from 'react';
import { Award, Star, Zap, Download, Play, Pause } from 'lucide-react';

const PartnersSponsors: React.FC = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);

  React.useEffect(() => {
    const scroller = scrollRef.current;
    if (!scroller) return;

    let animationId: number;
    // We render 4 copies. Loop point is width of one copy.
    // Total width approx = 4 * singleWidth.
    // Ideally we want to scroll continuously.

    // Auto-scroll loop
    const loop = () => {
      if (!isDragging && scroller) {
        scroller.scrollLeft += 1; // Speed: 1px/frame

        // Infinite Loop Logic
        // If we have scrolled past the first set (1/4th of total width), reset to 0?
        // Actually, to loop backwards too, it's better to start in the middle?
        // Standard marquee: scroll right to left.
        // If scrollLeft >= (scrollWidth / 4), we can subtract (scrollWidth / 4) to snap back without visual glitch
        // assuming all 4 sets are identical.
        const oneSetWidth = scroller.scrollWidth / 4;

        if (scroller.scrollLeft >= oneSetWidth * 3) {
          // Reset closer to start to prevent running out
          scroller.scrollLeft -= oneSetWidth;
        } else if (scroller.scrollLeft <= 0) {
          // If dragged way back?
          // scroller.scrollLeft += oneSetWidth;
        }
      }
      animationId = requestAnimationFrame(loop);
    };

    // Initialize scroll position to show continuous flow if needed, 
    // but starting at 0 is fine for R-to-L if we have content.

    animationId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationId);
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    if (scrollRef.current) {
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast
    scrollRef.current.scrollLeft = scrollLeft - walk;

    // Check bounds during drag for infinite feel
    const oneSetWidth = scrollRef.current.scrollWidth / 4;
    if (scrollRef.current.scrollLeft >= oneSetWidth * 3) {
      scrollRef.current.scrollLeft -= oneSetWidth;
      // update startX/scrollLeft ref base? It's tricky with live drag.
      // For simple "slide control", letting it hit edge momentarily is okay,
      // but let's just let the loop fix it on release or keep it simple.
    } else if (scrollRef.current.scrollLeft <= 0) {
      scrollRef.current.scrollLeft += oneSetWidth;
    }
  };

  const tiers = [
    { name: "TITLE PARTNER", company: "KAIZEL INDUSTRIES", logo: "https://via.placeholder.com/150/000000/FFFFFF?text=KAIZEL", color: "text-drift-green" },
    { name: "GOLD PARTNER", company: "RACE_TEC", logo: "https://via.placeholder.com/150/000000/FFFFFF?text=RACE_TEC", color: "text-yellow-500" },
    { name: "EVENT PARTNER", company: "FUEL_UP", logo: "https://via.placeholder.com/150/000000/FFFFFF?text=FUEL_UP", color: "text-blue-500" },
  ];

  const carouselLogos = [
    { name: "IDFC FIRST BANK", logo: "/sponsors/idfc.jpeg" },
    { name: "theApplicable", logo: "/sponsors/theapplicable.jpeg" },
    { name: "Green Miles", logo: "/sponsors/greenmile.jpeg" },
    { name: "STPI" },
    { name: "KAIZEL", logo: "/sponsors/kaizel.png" },
    { name: "NALANDA FOUNDATION", logo: "/sponsors/nalanda.png" },
    { name: "BRIDGE NOW" },
    { name: "INNOVEXUS", logo: "/sponsors/innovxus.png" },
    { name: "LYNKUP" },
    { name: "VEBRANTA" },
    { name: "CODEINTERN" },
    { name: "INFERNO" },
    { name: "HBE" },
    { name: "PRATAP AI" },
    { name: "TICKETING HIVE" },
    { name: "uni bazar" },
    { name: "dejabrew", logo: "/sponsors/deja.jpeg" },
    { name: "Dinex Services", logo: "/sponsors/dinex.webp" },
  ];

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

      {/* Sponsorship Tiers */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Bronze Tier */}
          <div className="group relative p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 hover:border-drift-orange/50 transition-all flex flex-col items-center text-center">
            <div className="text-xl font-black font-racing italic text-white mb-2">BRONZE</div>
            <div className="text-3xl font-black text-drift-orange mb-6">₹30,000</div>
            <div className="w-full h-[1px] bg-white/10 mb-6"></div>
            <p className="text-gray-400 text-sm font-medium leading-relaxed">
              Logo on go-kart + digital creatives mention
            </p>
          </div>

          {/* Silver Tier */}
          <div className="group relative p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 hover:border-gray-400/50 transition-all flex flex-col items-center text-center">
            <div className="text-xl font-black font-racing italic text-gray-300 mb-2">SILVER</div>
            <div className="text-3xl font-black text-white mb-6">₹50,000</div>
            <div className="w-full h-[1px] bg-white/10 mb-6"></div>
            <p className="text-gray-400 text-sm font-medium leading-relaxed">
              Logo on 1 go-kart + banner near track + social media tag
            </p>
          </div>

          {/* Gold Tier */}
          <div className="group relative p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 hover:border-yellow-500/50 transition-all flex flex-col items-center text-center">
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
            <div className="relative z-10 flex flex-col items-center w-full">
              <div className="text-xl font-black font-racing italic text-yellow-500 mb-2">GOLD</div>
              <div className="text-3xl font-black text-white mb-6">₹80,000</div>
              <div className="w-full h-[1px] bg-white/10 mb-6"></div>
              <p className="text-gray-400 text-sm font-medium leading-relaxed">
                Logo on 2 go-karts + premium banner spots + announcer shoutouts
              </p>
            </div>
          </div>

          {/* Title Tier */}
          <div className="group relative p-8 bg-drift-green/10 border border-drift-green/20 rounded-3xl hover:bg-drift-green/20 hover:border-drift-green/50 transition-all flex flex-col items-center text-center scale-105 shadow-[0_0_30px_rgba(93,218,110,0.1)]">
            <div className="absolute top-0 right-0 px-3 py-1 bg-drift-green text-black text-[10px] font-black tracking-widest uppercase rounded-bl-xl rounded-tr-2xl">
              RECOMMENDED
            </div>
            <div className="text-2xl font-black font-racing italic text-drift-green mb-2">TITLE</div>
            <div className="text-4xl font-black text-white mb-6">₹1,50,000</div>
            <div className="w-full h-[1px] bg-drift-green/20 mb-6"></div>
            <p className="text-gray-300 text-sm font-medium leading-relaxed">
              Full co-branding: 3 go-karts, all banners, booth space, giveaways, social media reels
            </p>
          </div>
        </div>
      </div>

      {/* Download Brochure Button */}
      <div className="flex justify-center mb-20">
        <button className="group relative px-8 py-5 bg-gradient-to-r from-drift-orange/20 to-transparent border border-drift-orange/30 rounded-2xl hover:bg-drift-orange/10 transition-all flex items-center gap-6 overflow-hidden">
          <div className="absolute inset-0 bg-drift-orange/5 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          <div className="relative z-10 w-12 h-12 bg-drift-orange rounded-xl flex items-center justify-center text-black shadow-[0_0_20px_rgba(241,91,20,0.4)] group-hover:scale-110 transition-transform">
            <Download size={24} strokeWidth={2.5} />
          </div>
          <a href="/Sponsorship Deck.pdf" download="Sponsorship Deck.pdf" target="_blank" rel="noopener noreferrer">
            <div className="relative z-10 text-left">
              <span className="text-[10px] font-black tracking-widest text-drift-orange uppercase block mb-1">OFFICIAL DOCUMENTATION</span>
              <span className="text-lg font-racing font-black italic text-white group-hover:text-drift-orange transition-colors">DOWNLOAD SPONSOR BROCHURE</span>
            </div>
          </a>
        </button>
      </div>

      {/* (Tiered Grid Removed as per request) */}

      {/* Draggable Infinite Marquee */}
      <div className="bg-drift-green/5 py-12 border-y border-white/5 relative group/marquee">
        <div
          ref={scrollRef}
          className="flex overflow-x-hidden cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {/* Tripled content to give enough buffer for seamless infinite scroll in both directions */}
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="flex items-center gap-16 px-8 shrink-0">
              {carouselLogos.map((brand, idx) => (
                <div key={idx} className="flex items-center gap-4 group cursor-pointer">
                  {brand.logo ? (
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      onDragStart={(e) => e.preventDefault()} // Prevent image drag behavior
                      className="h-12 w-auto max-w-[150px] object-contain transition-all duration-300 pointer-events-none" // pointer-events-none helps with dragging container
                    />
                  ) : (
                    <>
                      <div className="w-2 h-2 bg-drift-green rounded-full group-hover:scale-150 transition-transform"></div>
                      <span className="text-2xl font-black font-racing italic tracking-widest text-white/20 group-hover:text-drift-green transition-colors">
                        {brand.name}
                      </span>
                    </>
                  )}
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
