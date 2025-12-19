
import React, { useEffect, useState } from 'react';

const SpeedLines: React.FC = () => {
  const [lines, setLines] = useState<{ id: number; top: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    const newLines = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 1.5 + Math.random() * 2,
    }));
    setLines(newLines);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-10">
      {lines.map((line) => (
        <div 
          key={line.id}
          className="speed-line"
          style={{ 
            top: `${line.top}%`, 
            animationDelay: `${line.delay}s`,
            animationDuration: `${line.duration}s`
          }}
        />
      ))}
    </div>
  );
};

export default SpeedLines;
