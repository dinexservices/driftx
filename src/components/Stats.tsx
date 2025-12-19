
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'MAX G-FORCE', value: '1.8G' },
    { label: 'TOP SPEED', value: '75KM/H' },
    { label: 'DRIFT ANGLE', value: '45°' },
    { label: 'LAP TIME', value: '38.2s' },
  ];

  return (
    <div className="relative z-20 py-12 bg-red-600">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center group">
            <div className="text-4xl md:text-5xl font-black font-racing italic text-white mb-1">
              {stat.value}
            </div>
            <div className="text-[10px] md:text-xs tracking-[0.4em] font-black text-white/60">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
