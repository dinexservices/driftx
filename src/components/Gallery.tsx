
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Play, Maximize2, X, Volume2, VolumeX } from 'lucide-react';

interface MediaItem {
  url: string;
  type: 'image' | 'video';
  tag: string;
  poster?: string;
}

const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const mediaItems: MediaItem[] = [
    {
      url: "/images/gokart-action.png",
      type: 'image',
      tag: 'TRACK-DOMINANCE'
    },
    {
      url: "https://assets.mixkit.co/videos/preview/mixkit-go-kart-racing-on-a-track-4451-large.mp4",
      type: 'video',
      tag: 'RACE-RECAP',
      poster: "https://images.unsplash.com/photo-1532433566133-c36148281358?auto=format&fit=crop&q=80&w=800"
    },
    {
      url: "/images/gokart-drift.png",
      type: 'image',
      tag: 'DRIFT-MASTER'
    },
    {
      url: "/images/gokart-driver.png",
      type: 'image',
      tag: 'FOCUS-ZONE'
    },
    {
      url: "https://assets.mixkit.co/videos/preview/mixkit-speeding-go-kart-on-a-track-4452-large.mp4",
      type: 'video',
      tag: 'POV-CAM',
      poster: "https://images.unsplash.com/photo-1590330297626-d7601f01031d?auto=format&fit=crop&q=80&w=800"
    },
    {
      url: "https://images.unsplash.com/photo-1547915713-7928b577038e?auto=format&fit=crop&q=80&w=1200",
      type: 'image',
      tag: 'TECHKRITI'
    }
  ];

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedItem]);

  return (
    <section id="gallery" className="py-24 bg-black relative overflow-hidden">
      {/* Decorative text background */}
      <div className="absolute top-0 left-0 w-full overflow-hidden opacity-[0.02] pointer-events-none select-none">
        <div className="text-[20vw] font-black font-racing italic whitespace-nowrap leading-none">
          DRIFTX MEDIA CIRCUIT DRIFTX MEDIA CIRCUIT
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-black font-racing italic tracking-tighter leading-none mb-6">
              VISUAL <span className="text-red-600">VALIDATION</span>
            </h2>
            <p className="text-gray-400 font-medium">Capturing the raw adrenaline, the screeching tires, and the high-octane energy we bring to every campus across India.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-24 bg-red-600 hidden lg:block"></div>
            <span className="text-xs font-black tracking-[0.5em] text-red-600 uppercase">Click to view performance</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mediaItems.map((item, i) => (
            <div
              key={i}
              onClick={() => setSelectedItem(item)}
              className={`group relative overflow-hidden rounded-xl bg-neutral-900 cursor-pointer ${i === 0 || i === 4 ? 'md:row-span-2' : ''
                }`}
            >
              {item.type === 'video' ? (
                <div className="w-full h-full relative">
                  <img
                    src={item.poster}
                    alt={item.tag}
                    className="w-full h-full object-cover grayscale-[50%] transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-red-600/80 backdrop-blur-md flex items-center justify-center text-white scale-90 group-hover:scale-110 transition-transform">
                      <Play size={28} fill="currentColor" />
                    </div>
                  </div>
                </div>
              ) : (
                <img
                  src={item.url}
                  alt={item.tag}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
                />
              )}

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>

              {/* Tag */}
              <div className="absolute top-4 left-4 z-20">
                <span className="bg-red-600 text-white text-[10px] font-black px-2 py-1 tracking-widest uppercase rounded-sm italic">
                  #{item.tag}
                </span>
              </div>

              {/* Hover Content */}
              <div className="absolute inset-0 z-30 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute inset-0 bg-red-600/20 backdrop-blur-[2px]"></div>
                <div className="relative transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-red-600 shadow-2xl mb-4">
                    {item.type === 'video' ? <Play size={20} fill="currentColor" /> : <Maximize2 size={20} />}
                  </div>
                  <span className="font-racing font-black italic tracking-widest text-white uppercase text-sm">
                    {item.type === 'video' ? 'Play Race' : 'Expand View'}
                  </span>
                </div>
              </div>

              {/* Scanline Effect */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-20"></div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL SYSTEM */}
      {selectedItem && mounted && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
          onClick={() => setSelectedItem(null)}
        >
          <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl"></div>

          <div
            className="relative z-[99999] w-full max-w-6xl aspect-video bg-neutral-900 rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(220,38,38,0.3)] border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Info */}
            <div className="absolute top-0 left-0 right-0 p-6 z-[120] flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
              <div className="flex items-center gap-4">
                <span className="bg-red-600 text-white font-racing font-black italic px-4 py-1 tracking-widest text-xs">
                  {selectedItem.tag}
                </span>
                <span className="text-white/60 text-xs font-bold tracking-widest uppercase">
                  {selectedItem.type === 'video' ? 'Official Event Capture' : 'Live Circuit Photography'}
                </span>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="pointer-events-auto w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center transition-all shadow-lg hover:rotate-90"
                aria-label="Close Modal"
              >
                <X size={24} strokeWidth={3} />
              </button>
            </div>

            {/* Content Display */}
            <div className="w-full h-full flex items-center justify-center bg-black">
              {selectedItem.type === 'video' ? (
                <div className="relative w-full h-full group">
                  <video
                    src={selectedItem.url}
                    className="w-full h-full object-contain"
                    autoPlay
                    controls
                    loop
                    muted={isMuted}
                    playsInline
                  />
                  {/* Video Controls Overlay */}
                  <div className="absolute bottom-8 right-8 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-red-600 transition-colors"
                    >
                      {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </button>
                  </div>
                  <div className="absolute bottom-8 left-8 pointer-events-none">
                    <div className="flex items-center gap-2 text-red-600 animate-pulse">
                      <div className="w-2 h-2 bg-red-600 rounded-full shadow-[0_0_10px_rgba(220,38,38,1)]"></div>
                      <span className="text-[10px] font-black tracking-widest uppercase">Live Replay</span>
                    </div>
                  </div>
                </div>
              ) : (
                <img
                  src={selectedItem.url}
                  alt={selectedItem.tag}
                  className="w-full h-full object-contain animate-in zoom-in-95 duration-500"
                />
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Gallery;
