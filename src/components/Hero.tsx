
import React, { useState, useEffect, useRef } from 'react';
// Add imports
import { Zap, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import gocart from "@/assets/gocart.jpg"
import Image from 'next/image';

const videoPath = "/herovi.mp4";

const Hero: React.FC = () => {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  // Video state
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const headlines = [

    "INDIA’S NEXT-GEN EVENT MOTORSPORT EXPERIENCE."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const { top, height } = sectionRef.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -top / height));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStartDrive = () => {
    setHasStarted(true);
    setIsMuted(false);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(e => console.log("Playback failed", e));
      videoRef.current.currentTime = 0; // Restart from beginning for impact
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Receding effect calculations
  const containerScale = 1 - scrollProgress * 0.15;
  const containerOpacity = 1 - scrollProgress * 1.5;
  const containerBlur = scrollProgress * 12;
  const containerBrightness = 1 - scrollProgress * 0.8;

  // Parallax offset matching previous tuning
  const parallaxY = scrollProgress * 140;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen md:h-[150vh] bg-black"
    >
      <div
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-black"
        style={{
          transform: `scale(${containerScale})`,
          opacity: Math.max(0, containerOpacity),
          filter: `blur(${containerBlur}px) brightness(${containerBrightness})`,
          transformOrigin: 'center center',
          transition: 'transform 0.1s ease-out, opacity 0.1s ease-out, filter 0.1s ease-out'
        }}
      >
        {/* Background Visuals */}
        <div className="absolute inset-0 z-0">
          <div className={`absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black z-10 transition-opacity duration-1000 ${hasStarted ? 'opacity-40' : 'opacity-80'}`} />

          <video
            ref={videoRef}
            src={videoPath}
            className="w-full h-full object-cover grayscale-[0.5] contrast-[1.2] brightness-[0.6]"
            style={{
              transform: `translateY(-${parallaxY}px) scale(1.4)`,
              transition: 'transform 0.1s ease-out'
            }}
            loop
            muted
            autoPlay
            playsInline
          />

          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-grid opacity-20 z-20 pointer-events-none" />


        </div>

        {/* Content Container */}
        <div className={`relative z-30 container mx-auto px-4 sm:px-6 text-center transition-all duration-700 ${hasStarted ? 'opacity-0 pointer-events-none scale-110' : 'opacity-100'}`}>
          <div className="min-h-[160px] md:min-h-[280px] flex items-center justify-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-racing italic leading-tight tracking-tighter mb-4 text-glow">
              {headlines[headlineIndex].split(' ').map((word, i) => {
                const isHighlight = ["DRIFTX", "MOTORSPORT", "RACING", "ARENAS.", "EXPERIENCE."].includes(word.toUpperCase());
                return (
                  <span key={`${headlineIndex}-${i}`} className={isHighlight ? "text-drift-green drop-shadow-[0_0_10px_rgba(93,218,110,0.5)]" : ""}>
                    {word}{' '}
                  </span>
                );
              })}
            </h1>
          </div>

          <p className="max-w-3xl mx-auto text-gray-300 text-sm sm:text-lg md:text-xl font-medium tracking-wide mb-8 md:mb-10 leading-relaxed drop-shadow-lg px-2">
            DriftX is a professional go-karting experience designed for college fests and branded events, delivering speed, safety, and unforgettable engagement.
          </p>

          <div className="flex flex-col items-center justify-center gap-6">
            <button
              onClick={handleStartDrive}
              className="group relative px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-6 bg-drift-orange hover:bg-drift-orange/90 text-white font-black font-racing italic tracking-widest text-lg sm:text-xl md:text-2xl rounded-sm transition-all hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(241,91,20,0.6)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12"></div>
              <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                <Zap className="fill-current w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" /> START THE ENGINE
              </span>
            </button>
            <p className="text-[10px] sm:text-xs font-bold tracking-[0.3em] sm:tracking-[0.5em] text-gray-500 uppercase animate-pulse">
              Volume On • Immersive Experience
            </p>
          </div>
        </div>

        {/* "Drive Mode" UI - Appears after clicking Start */}
        <div className={`absolute bottom-20 left-1/2 -translate-x-1/2 z-40 transition-all duration-1000 ${hasStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'}`}>
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <h3 className="text-2xl sm:text-4xl font-black font-racing italic text-white drop-shadow-lg tracking-widest text-glow">
              NOW DRIVING
            </h3>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#contact"
                className="px-6 py-3 sm:px-10 sm:py-4 bg-drift-green hover:bg-drift-green/90 text-black font-black font-racing italic tracking-widest text-sm sm:text-lg rounded-sm transition-all hover:scale-105 shadow-[0_0_30px_rgba(93,218,110,0.4)]"
              >
                HOST DRIFTX
              </a>
              <a
                href="#pass"
                className="px-6 py-3 sm:px-10 sm:py-4 bg-drift-orange hover:bg-drift-orange/90 text-white font-black font-racing italic tracking-widest text-sm sm:text-lg rounded-sm transition-all hover:scale-105 shadow-[0_0_30px_rgba(241,91,20,0.4)]"
              >
                GET YOUR PASS
              </a>
            </div>
          </div>
        </div>

        {/* Video Controls - Bottom Right */}
        <div className={`absolute bottom-8 right-8 z-50 flex items-center gap-2 transition-all duration-500 ${hasStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button
            onClick={togglePlay}
            className="w-12 h-12 bg-black/50 hover:bg-drift-orange/80 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10 transition-all hover:scale-110"
          >
            {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
          </button>
          <button
            onClick={toggleMute}
            className="w-12 h-12 bg-black/50 hover:bg-drift-green/80 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10 transition-all hover:scale-110"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 opacity-50 animate-bounce transition-opacity duration-500 ${hasStarted ? 'opacity-0' : 'opacity-50'}`}>
          <div className="w-8 h-8 rounded-full border-4 border-gray-800 flex items-center justify-center animate-spin">
            <div className="w-1 h-2 bg-drift-orange rounded-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
