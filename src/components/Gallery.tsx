
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Play, Maximize2, X, Volume2, VolumeX } from 'lucide-react';

interface MediaItem {
  url: string;
  type: 'image' | 'video' | 'youtube';
  tag: string;
  poster?: string;
  youtubeId?: string;
}

const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const mediaItems: MediaItem[] = [

    // YouTube Shorts
    {
      url: "https://www.youtube.com/embed/ttCtsk8OVnI",
      type: 'youtube',
      tag: 'DRIFT-KING',
      youtubeId: 'ttCtsk8OVnI'
    },
    {
      url: "https://www.youtube.com/embed/JLCi7iYUpgc",
      type: 'youtube',
      tag: 'SPEED-DEMON',
      youtubeId: 'JLCi7iYUpgc'
    },
    {
      url: "https://www.youtube.com/embed/WAsJKRpCj8E",
      type: 'youtube',
      tag: 'TRACK-MODE',
      youtubeId: 'WAsJKRpCj8E'
    },

    {
      url: "https://www.youtube.com/embed/AANU7Wb6CeI",
      type: 'youtube',
      tag: 'ADRENALINE',
      youtubeId: 'AANU7Wb6CeI'
    },
    {
      url: "https://www.youtube.com/embed/Y4zOpbgh4mQ",
      type: 'youtube',
      tag: 'VICTORY-LAP',
      youtubeId: 'Y4zOpbgh4mQ'
    },
 
    

  ];

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedItem]);

  const getThumbnail = (item: MediaItem) => {
    if (item.type === 'youtube' && item.youtubeId) {
      return `https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`;
    }
    return item.poster || item.url;
  };

  return (
    <section id="gallery" className="py-12 md:py-24 bg-black relative overflow-hidden">
      {/* Decorative text background */}
      <div className="absolute top-0 left-0 w-full overflow-hidden opacity-[0.02] pointer-events-none select-none">
        <div className="text-[20vw] font-black font-racing italic whitespace-nowrap leading-none">
          DRIFTX MEDIA CIRCUIT DRIFTX MEDIA CIRCUIT
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-black font-racing italic tracking-tighter leading-none mb-6">
              VISUAL <span className="text-drift-orange">VALIDATION</span>
            </h2>
            <p className="text-gray-400 font-medium">Capturing the raw adrenaline, the screeching tires, and the high-octane energy we bring to every campus across India.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-24 bg-drift-green hidden lg:block"></div>
            <span className="text-xs font-black tracking-[0.5em] text-drift-green uppercase">Click to view performance</span>
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
              {(item.type === 'video' || item.type === 'youtube') ? (
                <div className="w-full h-full relative">
                  <img
                    src={getThumbnail(item)}
                    alt={item.tag}
                    onError={(e) => {
                      // Fallback for youtube maxresdefault if not available
                      if (item.type === 'youtube' && item.youtubeId) {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`;
                      }
                    }}
                    className="w-full h-full object-cover grayscale-[50%] transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-drift-orange/80 backdrop-blur-md flex items-center justify-center text-white scale-90 group-hover:scale-110 transition-transform">
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
                <span className="bg-drift-green text-black text-[10px] font-black px-2 py-1 tracking-widest uppercase rounded-sm italic">
                  #{item.tag}
                </span>
              </div>

              {/* Hover Content */}
              <div className="absolute inset-0 z-30 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute inset-0 bg-drift-green/20 backdrop-blur-[2px]"></div>
                <div className="relative transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-drift-green shadow-2xl mb-4">
                    {item.type === 'image' ? <Maximize2 size={20} /> : <Play size={20} fill="currentColor" />}
                  </div>
                  <span className="font-racing font-black italic tracking-widest text-white uppercase text-sm">
                    {item.type === 'image' ? 'Expand View' : 'Play Video'}
                  </span>
                </div>
              </div>

              {/* Scanline Effect */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(93,218,110,0.06),rgba(241,91,20,0.02),rgba(93,218,110,0.06))] bg-[length:100%_2px,3px_100%] opacity-20"></div>
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
            className="relative z-[99999] w-full max-w-6xl aspect-video bg-neutral-900 rounded-3xl overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Info */}
            <div className="absolute top-0 left-0 right-0 p-6 z-[120] flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
              <div className="flex items-center gap-4">
                <span className="bg-drift-green text-black font-racing font-black italic px-4 py-1 tracking-widest text-xs">
                  {selectedItem.tag}
                </span>
                <span className="text-white/60 text-xs font-bold tracking-widest uppercase">
                  {selectedItem.type === 'image' ? 'Live Circuit Photography' : 'Official Event Capture'}
                </span>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="pointer-events-auto w-12 h-12 rounded-full bg-drift-orange hover:bg-drift-orange/80 text-white flex items-center justify-center transition-all shadow-lg hover:rotate-90"
                aria-label="Close Modal"
              >
                <X size={24} strokeWidth={3} />
              </button>
            </div>

            {/* Content Display */}
            <div className="w-full h-full flex items-center justify-center bg-black">
              {selectedItem.type === 'youtube' ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={`${selectedItem.url}?autoplay=1&rel=0`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              ) : selectedItem.type === 'video' ? (
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
                      className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-drift-orange transition-colors"
                    >
                      {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </button>
                  </div>
                  <div className="absolute bottom-8 left-8 pointer-events-none">
                    <div className="flex items-center gap-2 text-drift-orange animate-pulse">
                      <div className="w-2 h-2 bg-drift-orange rounded-full shadow-[0_0_10px_rgba(241,91,20,1)]"></div>
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
