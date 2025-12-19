'use client'

import React, { useRef, useState } from 'react';
import { MousePointer2, Zap } from 'lucide-react';

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
        <section className="py-32 bg-neutral-950 relative overflow-hidden flex items-center justify-center min-h-[80vh]">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-black to-black"></div>

            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div className="order-2 lg:order-1 space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 font-bold uppercase tracking-widest text-xs">
                        <Zap size={14} />
                        <span>Next Gen Experience</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-black font-racing italic text-white leading-tight">
                        IMMERSIVE <br />
                        <span className="text-red-600">REALITY</span>
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
                <div className="order-1 lg:order-2 flex items-center justify-center perspective-1000">
                    <div
                        ref={containerRef}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={handleMouseLeave}
                        className="relative w-full max-w-md aspect-[3/4] transition-transform duration-100 ease-out"
                        style={{
                            transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                            transformStyle: 'preserve-3d'
                        }}
                    >
                        {/* The Card */}
                        <div className="absolute inset-0 bg-neutral-900 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(220,38,38,0.3)] border border-white/10 group">

                            {/* Image Layer - Pushed back slightly */}
                            <div
                                className="absolute inset-0 transition-transform duration-200"
                                style={{ transform: 'translateZ(-50px) scale(1.1)' }}
                            >
                                <img
                                    src="/images/gokart-3d.png"
                                    alt="3D Go Kart"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                            </div>

                            {/* Floating Elements - Pushed forward */}
                            <div
                                className="absolute bottom-8 left-8 right-8 transform transition-transform duration-200"
                                style={{ transform: 'translateZ(50px)' }}
                            >
                                <h3 className="text-4xl font-black font-racing italic text-white mb-2 drop-shadow-lg">
                                    APEX <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">PREDATOR</span>
                                </h3>
                                <div className="flex items-center justify-between border-t border-white/20 pt-4 mt-4">
                                    <div>
                                        <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">Top Speed</div>
                                        <div className="text-xl font-bold text-white">120 KM/H</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">0-100</div>
                                        <div className="text-xl font-bold text-white">3.2s</div>
                                    </div>
                                </div>
                            </div>

                            {/* Glossy Overlay Reflection */}
                            <div
                                className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 pointer-events-none"
                                style={{
                                    transform: `translateX(${rotation.y * 2}%) translateY(${rotation.x * 2}%)`,
                                    opacity: isHovering ? 1 : 0,
                                    transition: 'opacity 0.3s'
                                }}
                            ></div>
                        </div>

                        {/* Floating Badge behind/around */}
                        <div
                            className="absolute -top-6 -right-6 w-24 h-24 bg-red-600 rounded-full flex items-center justify-center z-20 shadow-xl"
                            style={{ transform: 'translateZ(70px)' }}
                        >
                            <span className="text-white font-black italic text-xl transform -rotate-12">3D</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThreeDRacing;
