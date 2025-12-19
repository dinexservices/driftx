
import React, { useRef, useEffect, useState } from 'react';
import { Settings, Ruler, ShieldCheck, Flag, Share2, Zap } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);

  const steps = [
    {
      id: '01',
      title: 'COLLABORATION & PLANNING',
      desc: 'We partner with your college fest or brand team to define event goals and audience expectations. Every project starts with a strategic roadmap.',
      icon: <Settings className="text-red-600" size={40} />,
      stat: 'PHASE: GRID'
    },
    {
      id: '02',
      title: 'TRACK DESIGN & SETUP',
      desc: 'Our engineers create custom professional temporary tracks designed specifically for your venue layout, surface grip, and safety requirements.',
      icon: <Ruler className="text-red-600" size={40} />,
      stat: 'PHASE: DESIGN'
    },
    {
      id: '03',
      title: 'SAFETY & OPERATIONS',
      desc: 'Rigorous DOT safety checks, impact-absorbing barrier installation, and expert marshal deployment for a zero-risk racing environment.',
      icon: <ShieldCheck className="text-red-600" size={40} />,
      stat: 'PHASE: SCRUTINY'
    },
    {
      id: '04',
      title: 'LIVE EVENT EXECUTION',
      desc: 'Race day management where high-adrenaline drifting meets professional operational precision. We manage the fleet, the timing, and the hype.',
      icon: <Flag className="text-red-600" size={40} />,
      stat: 'PHASE: GREEN FLAG'
    },
    {
      id: '05',
      title: 'BRAND INTEGRATION',
      desc: 'Seamless activation through naming rights, lead capture tech, and social media buzz creation that extends the event reach far beyond the track.',
      icon: <Share2 className="text-red-600" size={40} />,
      stat: 'PHASE: PODIUM'
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      
      // Calculate how far into the section we are
      // 0 when top is at top of screen, 1 when bottom is at top of screen
      const currentScrollTop = -rect.top;
      const scrollableDist = sectionHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, currentScrollTop / scrollableDist));
      
      setScrollPercent(progress);

      // Determine active step based on progress
      const stepIndex = Math.floor(progress * steps.length);
      setActiveStep(Math.min(steps.length - 1, stepIndex));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps.length]);

  return (
    <section 
      id="process" 
      ref={containerRef}
      className="relative bg-[#050505] overflow-visible"
      style={{ height: `${steps.length * 100}vh` }}
    >
      {/* Sticky viewport content */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* PARALLAX LAYERS */}
        <div className="absolute inset-0 z-0">
          {/* Layer 1: Background Image with Slow Parallax (Counter-scroll) */}
          <div 
            className="absolute inset-0 opacity-[0.07] grayscale contrast-150"
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1511994298241-608e28f14f66?auto=format&fit=crop&q=80&w=2070")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: `translateY(${scrollPercent * 80}px) scale(1.1)`
            }}
          />

          {/* Layer 2: Moving "PROCESS" Vertical Text (Mid-speed) */}
          <div 
            className="absolute -left-12 top-1/2 -translate-y-1/2 vertical-text opacity-5 select-none pointer-events-none"
            style={{ 
              transform: `translateY(calc(-50% + ${scrollPercent * -200}px)) rotate(180deg)` 
            }}
          >
            <span className="text-[20vw] font-black font-racing italic text-white tracking-tighter">PROCESS</span>
          </div>

          {/* Layer 3: Shifting Background Number (Fast-speed) */}
          <div 
            className="absolute right-[5%] top-[10%] opacity-[0.03] select-none pointer-events-none"
            style={{ 
              transform: `translateY(${scrollPercent * -300}px)` 
            }}
          >
            <span className="text-[40vw] font-black font-racing italic text-white leading-none">
              {steps[activeStep].id}
            </span>
          </div>

          {/* Layer 4: Floating Red Glow (Subtle Parallax) */}
          <div 
            className="absolute top-[20%] left-[15%] w-[40rem] h-[40rem] opacity-20 blur-[150px] bg-red-600/30 rounded-full"
            style={{ transform: `translate(calc(${scrollPercent * 50}px), calc(${scrollPercent * 100}px))` }}
          />
          
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-grid opacity-20" />
        </div>

        {/* CONTENT FOREGROUND */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Progress Nav & Markers */}
            <div className="hidden lg:block lg:col-span-4 pl-12">
              <div className="flex items-center gap-6 mb-16 overflow-hidden">
                <div 
                  className="w-16 h-[2px] bg-red-600 shadow-[0_0_15px_rgba(220,38,38,1)] transition-transform duration-500"
                  style={{ transform: `translateX(${activeStep * 10}px)` }}
                />
                <div className="font-racing italic font-black text-white tracking-widest text-2xl uppercase flex gap-2">
                  <span>PHASE</span> 
                  <span className="text-red-600">{steps[activeStep].id}</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-8">
                {steps.map((step, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-6 group cursor-pointer" 
                    onClick={() => {
                      const sectionTop = containerRef.current?.offsetTop || 0;
                      const scrollableHeight = (containerRef.current?.offsetHeight || 0) - window.innerHeight;
                      const target = sectionTop + (scrollableHeight * (i / (steps.length - 1)));
                      window.scrollTo({ top: target, behavior: 'smooth' });
                    }}
                  >
                    <div 
                      className={`h-[3px] transition-all duration-700 rounded-full shadow-lg ${
                        i === activeStep 
                        ? 'w-16 bg-red-600' 
                        : i < activeStep 
                          ? 'w-8 bg-red-600/40' 
                          : 'w-4 bg-white/10 group-hover:bg-white/30'
                      }`}
                    />
                    <span className={`text-xs font-black tracking-[0.3em] uppercase transition-all duration-300 ${
                      i === activeStep 
                      ? 'text-white translate-x-2' 
                      : i < activeStep 
                        ? 'text-red-600/60' 
                        : 'text-gray-600 group-hover:text-gray-400'
                    }`}>
                      {step.stat.split(': ')[1]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Dynamic Cards */}
            <div className="lg:col-span-8 flex justify-center relative min-h-[500px]">
              {steps.map((step, idx) => {
                const isCurrent = idx === activeStep;
                const isPast = idx < activeStep;
                
                return (
                  <div 
                    key={step.id}
                    className={`absolute inset-0 flex flex-col justify-center transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform ${
                      isCurrent 
                      ? 'opacity-100 translate-y-0 scale-100 blur-0 rotate-0' 
                      : isPast 
                        ? 'opacity-0 -translate-y-32 scale-95 blur-md -rotate-2 pointer-events-none' 
                        : 'opacity-0 translate-y-32 scale-105 blur-md rotate-2 pointer-events-none'
                    }`}
                  >
                    <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.01] backdrop-blur-3xl border border-white/10 p-10 md:p-16 rounded-[3rem] relative overflow-hidden group shadow-[0_20px_100px_rgba(0,0,0,0.5)]">
                      
                      {/* Interactive hover background */}
                      <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/[0.02] transition-colors duration-500" />
                      
                      <div className="inline-flex items-center gap-6 mb-10">
                        <div className="w-20 h-20 bg-red-600/20 rounded-3xl flex items-center justify-center text-red-600 border border-red-600/30 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] transition-all duration-500">
                          {/* Fix: Explicitly casting to React.ReactElement<any> to allow 'size' prop in cloneElement */}
                          {React.cloneElement(step.icon as React.ReactElement<any>, { size: 48 })}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-red-600 font-black tracking-widest text-xs mb-1">PROCESS_LOG</span>
                          <span className="text-white/40 font-mono text-xs">{step.stat}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-4xl md:text-6xl font-black font-racing italic mb-8 leading-tight tracking-tighter group-hover:translate-x-2 transition-transform duration-500">
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-400 text-xl leading-relaxed mb-12 max-w-xl font-medium">
                        {step.desc}
                      </p>
                      
                      <div className="flex items-center gap-4">
                        <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-black font-racing italic text-sm tracking-widest transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(220,38,38,0.5)] active:scale-95 flex items-center gap-3">
                          <Zap size={18} fill="currentColor" />
                          DEPLOY PHASE
                        </button>
                        <div className="h-[1px] flex-grow bg-white/10" />
                      </div>

                      {/* Corner Accent */}
                      <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-600/10 rounded-tl-[100%] transition-all duration-700 group-hover:w-40 group-hover:h-40" />
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* Global Progress Line (Bottom Fixed) */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5 overflow-hidden">
          <div 
            className="h-full bg-red-600 shadow-[0_0_20px_rgba(220,38,38,1)] transition-all duration-300 ease-out"
            style={{ width: `${scrollPercent * 100}%` }}
          />
        </div>
      </div>
      
      {/* Spacer to prevent section jumping or black gaps at bottom */}
      <div className="h-screen bg-transparent pointer-events-none" />
    </section>
  );
};

export default HowItWorks;
