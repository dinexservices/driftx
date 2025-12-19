'use client'

import React, { useRef, useState } from 'react';

interface ThreeDCardProps {
    src: string;
    alt: string;
    className?: string;
    intensity?: number;
    hoverScale?: number;
}

const ThreeDCard: React.FC<ThreeDCardProps> = ({
    src,
    alt,
    className = "",
    intensity = 20,
    hoverScale = 1.05
}) => {
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

        const rotateX = ((centerY - y) / centerY) * intensity;
        const rotateY = ((x - centerX) / centerX) * intensity;

        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        setRotation({ x: 0, y: 0 });
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={handleMouseLeave}
            className={`relative perspective-1000 ${className}`}
            style={{ perspective: '1000px' }}
        >
            <div
                className="w-full h-full relative transition-transform duration-100 ease-out preserve-3d"
                style={{
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovering ? hoverScale : 1})`,
                    transformStyle: 'preserve-3d'
                }}
            >
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover rounded-2xl shadow-2xl"
                    style={{ transform: 'translateZ(0)' }}
                />

                {/* Simple lighting overlay */}
                <div
                    className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 pointer-events-none rounded-2xl z-10"
                    style={{
                        opacity: isHovering ? 1 : 0,
                        transform: `translateX(${rotation.y}%) translateY(${rotation.x}%)`,
                        transition: 'opacity 0.3s'
                    }}
                />

                {/* Depth shadow */}
                <div
                    className="absolute inset-0 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] -z-10 transition-shadow duration-300"
                    style={{
                        transform: `translateZ(-20px)`,
                        opacity: isHovering ? 0.8 : 0.5
                    }}
                />
            </div>
        </div>
    );
};

export default ThreeDCard;
