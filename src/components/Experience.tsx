
import React from 'react';
import { Target, Shield, Trophy, Users, Zap } from 'lucide-react';
import ThreeDCard from './ThreeDCard';

const Experience: React.FC = () => {
  const features = [
    {
      title: 'PRO DRIFT FLEET',
      desc: 'Our karts are purpose-built for controlled drifts and high-performance racing, maintained by veteran mechanics.',
      icon: <Target className="text-red-600" size={40} />,
    },
    {
      title: 'SMART TELEMETRY',
      desc: 'Real-time lap tracking and leaderboards displayed on giant LEDs to amp up the competitive spirit.',
      icon: <Users className="text-red-600" size={40} />,
    },
    {
      title: 'ELITE SAFETY',
      desc: 'DOT-certified helmets, impact-absorbing barriers, and trained safety marshals at every corner.',
      icon: <Shield className="text-red-600" size={40} />,
    },
    {
      title: 'EVENT SCALE',
      desc: 'From 50-driver mixers to 5000-driver festivals, we scale seamlessly with our modular track system.',
      icon: <Trophy className="text-red-600" size={40} />,
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <div className="absolute -left-4 -top-4 w-24 h-24 border-l-4 border-t-4 border-red-600"></div>
            <h2 className="text-4xl md:text-6xl font-black font-racing italic tracking-tighter mb-8 leading-none">
              WHAT IS <br />
              <span className="text-red-600 text-glow">DRIFTX?</span>
            </h2>
            <p className="text-xl text-white font-bold mb-6 italic tracking-tight">
              A KAIZEL INDUSTRIES SIGNATURE EXPERIENCE.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              DriftX is an event-based go-karting experience by Kaizel Industries. We design, set up, and operate professional temporary racing tracks at colleges and large events, delivering a safe, high-adrenaline motorsport experience along with powerful brand engagement opportunities.
            </p>
            <div className="flex items-center gap-4 p-4 bg-white/5 border-l-4 border-red-600 rounded-r-lg">
              <Zap className="text-red-600 shrink-0" fill="currentColor" size={24} />
              <p className="text-sm font-bold tracking-wider text-gray-300 italic">
                TURNING ORDINARY CAMPUS GROUNDS INTO INTERNATIONAL RACING ARENAS.
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-red-600/20 blur-3xl rounded-full scale-75 group-hover:scale-90 transition-transform duration-700"></div>
            <ThreeDCard
              src="/images/gokart-night.png"
              alt="DriftX Night Action"
              className="relative z-10 w-full h-[500px]"
              intensity={25}
            />
            <div className="absolute -bottom-6 -right-6 z-20 bg-red-600 p-8 rounded-2xl shadow-2xl hidden md:block pointer-events-none transform translate-z-50">
              <p className="font-racing font-black italic text-3xl leading-none">EST. 2024</p>
              <p className="text-[10px] font-black tracking-widest mt-2 uppercase">Kaizel Industries</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/[0.08] transition-all group hover:-translate-y-2">
              <div className="mb-6 group-hover:scale-110 transition-transform">{f.icon}</div>
              <h3 className="text-xl font-bold font-racing italic mb-4">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
