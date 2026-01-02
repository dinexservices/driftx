"use client"
import React, { useRef, useEffect, useState } from 'react';
import { Download, CheckCircle2, Trophy, Play, Pause, Volume2, VolumeX } from 'lucide-react';


const points = [
  "Unmatched Student Footfall",
  "Technical Innovation Showcase",
  "Professional Safety Standards",
  "National Brand Visibility",
  "End-to-End Event Management",
  "High-Octane Entertainment"
];

const WhyColleges: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollPos = window.scrollY;
      const sectionTop = rect.top + scrollPos;

      // Calculate how far into the section we are
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const speed = 0.2;
        const yPos = (scrollPos - sectionTop) * speed;
        setOffset(yPos);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const togglePlay = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      const action = isPlaying ? 'pauseVideo' : 'playVideo';
      iframeRef.current.contentWindow.postMessage(`{"event":"command","func":"${action}","args":""}`, '*');
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      const action = isMuted ? 'unMute' : 'mute'; // Note: YouTube API uses 'unMute' (camelCase)
      iframeRef.current.contentWindow.postMessage(`{"event":"command","func":"${action}","args":""}`, '*');
      setIsMuted(!isMuted);
    }
  };

  // Marquee Logic
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const scroller = scrollRef.current;
    if (!scroller) return;

    let animationId: number;

    // Auto-scroll loop
    const loop = () => {
      if (!isDragging && scroller) {
        scroller.scrollLeft += 1; // Speed: 1px/frame

        const oneSetWidth = scroller.scrollWidth / 4;

        if (scroller.scrollLeft >= oneSetWidth * 3) {
          scroller.scrollLeft -= oneSetWidth;
        } else if (scroller.scrollLeft <= 0) {
          scroller.scrollLeft += oneSetWidth;
        }
      }
      animationId = requestAnimationFrame(loop);
    };

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
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;

    const oneSetWidth = scrollRef.current.scrollWidth / 4;
    if (scrollRef.current.scrollLeft >= oneSetWidth * 3) {
      scrollRef.current.scrollLeft -= oneSetWidth;
    } else if (scrollRef.current.scrollLeft <= 0) {
      scrollRef.current.scrollLeft += oneSetWidth;
    }
  };


  return (
    <section ref={sectionRef} id="colleges" className="relative py-16 md:py-32 overflow-hidden bg-black">
      {/* Dynamic Parallax Background Layer */}
      <div
        className="absolute inset-0 z-0 opacity-20 grayscale scale-110"

      ></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/90 to-transparent"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-drift-green font-black tracking-widest text-xs mb-6 uppercase">
            <Trophy size={16} /> Campus Transformation
          </div>
          <h2 className="text-4xl md:text-6xl font-black font-racing italic tracking-tighter mb-8 leading-none">
            WHY COLLEGES <br />
            CHOOSE <span className="text-drift-green">DRIFTX</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-xl">
            We don't just provide an activity; we deliver a flagship experience that defines your fest's identity and legacy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {points.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="text-drift-green shrink-0 mt-1" size={18} />
                <span className="text-sm font-bold tracking-wide text-gray-200">{point}</span>
              </div>
            ))}
          </div>

          <a href="/DriftXINDIA.pdf" download="DriftXINDIA.pdf" className="group inline-flex items-center gap-4 bg-drift-green hover:bg-drift-green/90 text-black px-8 py-5 rounded-sm font-black font-racing italic tracking-widest text-lg transition-all shadow-[0_0_20px_rgba(93,218,110,0.3)]">
            DOWNLOAD COLLEGE PROPOSAL
            <Download size={20} className="group-hover:translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="hidden lg:block relative h-[600px] w-full max-w-[340px] mx-auto">
          {/* Phone Frame / Container */}
          <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border-8 border-neutral-900 bg-neutral-900 shadow-2xl">
            <iframe
              ref={iframeRef}
              className="w-full h-full object-cover"
              src="https://www.youtube.com/embed/I0T9-B5ruWE?enablejsapi=1&autoplay=1&mute=1&controls=0&loop=1&playlist=I0T9-B5ruWE&modestbranding=1&rel=0"
              title="DriftX Action"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            {/* Custom Controls Overlay */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 z-20">
              <button
                onClick={togglePlay}
                className="text-white hover:text-drift-green transition-colors"
              >
                {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" />}
              </button>
              <div className="w-[1px] h-6 bg-white/20"></div>
              <button
                onClick={toggleMute}
                className="text-white hover:text-drift-green transition-colors"
              >
                {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
              </button>
            </div>

            {/* Gradient overlays for better integration */}
            <div className="absolute inset-0 pointer-events-none rounded-[2rem] shadow-[inset_0_0_40px_rgba(0,0,0,0.5)]"></div>
          </div>

          {/* Decorative elements around the player */}
          <div className="absolute -inset-4 border-2 border-drift-green/30 rounded-[3rem] -z-10 rotate-3 animate-pulse"></div>
          <div className="absolute -inset-4 border-2 border-white/10 rounded-[3rem] -z-10 -rotate-3"></div>
        </div>
      </div>

      {/* Draggable College Partners Marquee */}
      <div className="mt-20 border-y border-white/5 py-8 bg-black/50 overflow-hidden relative z-20 group/marquee">
        <div
          ref={scrollRef}
          className="flex overflow-x-hidden cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {/* Tripled content for seamless looping */}
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="flex items-center gap-16 px-8 shrink-0">
              {["IIT KANPUR", "MNIT ALLAHABAD", "MNIT JAIPUR", "ALLAHABAD UNIVERSITY", "IIT BHU", "BIT MESRA"].map((college, idx) => (
                <span key={idx} className="text-2xl md:text-3xl font-black font-racing italic tracking-tighter text-white/20 hover:text-drift-green transition-colors cursor-default">
                  {college}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section >
  );
};

export default WhyColleges;
