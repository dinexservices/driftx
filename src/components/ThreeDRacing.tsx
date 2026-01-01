'use client'

import React, { useRef, useState } from 'react';
import { MousePointer2, Zap, QrCode } from 'lucide-react';

const ThreeDRacing: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate rotation based on cursor position relative to center
        // Max rotation 15 degrees
        const rotateX = ((centerY - y) / centerY) * 15;
        const rotateY = ((x - centerX) / centerX) * 15;

        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        setRotation({ x: 0, y: 0 });
    };

    return (
        <section id="pass" className="py-32 bg-neutral-950 relative overflow-hidden flex items-center justify-center min-h-[80vh]">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-drift-green/10 via-black to-black"></div>

            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-drift-green/10 border border-drift-green/20 text-drift-green font-bold uppercase tracking-widest text-xs">
                        <Zap size={14} />
                        <span>Next Gen Experience</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-black font-racing italic text-white leading-tight">
                        IMMERSIVE <br />
                        <span className="text-drift-orange">REALITY</span>
                    </h2>

                    <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                        Feel every turn, every drift, and every acceleration. Our 3D simulation technology brings the track to your screen with unparalleled depth and realism.
                    </p>

                    <div className="flex items-center gap-4 text-white/50 text-sm font-light">
                        <MousePointer2 size={16} className="animate-bounce" />
                        <span>Hover over the card to interact</span>
                    </div>
                </div>

                {/* 3D Card Area */}
                <div className="flex items-center justify-center perspective-1000">
                    <div
                        ref={containerRef}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={handleMouseLeave}
                        className="relative w-full max-w-sm aspect-[9/16] transition-transform duration-100 ease-out"
                        style={{
                            transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                            transformStyle: 'preserve-3d'
                        }}
                    >
                        {/* The Pass */}
                        <div className="absolute inset-0 bg-neutral-900 rounded-3xl overflow-hidden  border border-white/10 group flex flex-col">

                            {/* Lanyard Hole */}
                            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full border border-white/10 z-20 shadow-inner"></div>

                            {/* Top Section - Branding */}
                            <div className="pt-16 pb-6 px-6 bg-gradient-to-b from-drift-green/20 to-transparent border-b border-white/5 relative z-10">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <Zap size={14} className="text-drift-green" fill="currentColor" />
                                            <span className="text-[10px] font-black tracking-widest text-drift-green uppercase">OFFICIAL ACCESS</span>
                                        </div>
                                        <h3 className="text-3xl font-black font-racing italic text-white leading-none">
                                            DRIFT<span className="text-drift-green">X</span>
                                        </h3>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-black font-racing italic text-white/20">2025</div>
                                    </div>
                                </div>
                            </div>

                            {/* Main Visual Image */}
                            <div className="relative h-64 overflow-hidden mx-6 mt-4 rounded-xl border border-white/10 group-hover:border-drift-green/50 transition-colors">
                                <img
                                    src="/images/gokart-3d.png"
                                    alt="Racer Profile"
                                    className="w-full h-full object-cover transform scale-125 translate-y-4"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>

                                {/* VIP Badge */}
                                <div className="absolute bottom-3 right-3 px-3 py-1 bg-drift-orange text-black text-[10px] font-black tracking-widest uppercase rounded">
                                    VIP RACER
                                </div>
                            </div>

                            {/* Event Details */}
                            <div className="flex-1 px-8 py-6 space-y-5">
                                <div className="grid grid-cols-2 gap-4 border-b border-white/5 pb-5">
                                    <div>
                                        <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">EVENT DATE</div>
                                        <div className="text-sm font-bold text-white font-racing tracking-wide">OCT 12-14</div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">GATE ENTRY</div>
                                        <div className="text-sm font-bold text-white font-racing tracking-wide">GATE A4</div>
                                    </div>
                                    <div className="col-span-2">
                                        <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">VENUE LOCATION</div>
                                        <div className="text-lg font-bold text-white font-racing tracking-wide text-drift-green">IIT KANPUR ARENA</div>
                                    </div>
                                </div>

                                {/* QR Code Section */}
                                <div className="flex items-center justify-between pt-2">
                                    <div className="bg-white p-2 rounded-lg">
                                        <QrCode size={48} className="text-black" />
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[10px] text-gray-600 font-mono mb-1">TICKET ID</div>
                                        <div className="text-xs font-mono text-gray-400">DX-2025-KAN-8842</div>
                                    </div>
                                </div>
                            </div>

                            {/* Holographic Overlay */}
                            <div
                                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none mix-blend-overlay"
                                style={{
                                    transform: `translateX(${rotation.y * 3}%) translateY(${rotation.x * 3}%)`,
                                    opacity: isHovering ? 1 : 0.3,
                                    transition: 'opacity 0.3s'
                                }}
                            ></div>

                            {/* Rainbow Sheen */}
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-transparent via-drift-green/10 to-drift-orange/10 pointer-events-none mix-blend-color-dodge"
                                style={{
                                    opacity: isHovering ? 0.5 : 0,
                                    transition: 'opacity 0.3s'
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThreeDRacing;
