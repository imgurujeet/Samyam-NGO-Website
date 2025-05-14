import { useState, useEffect } from 'react';
import AnimatedText from './AnimatedText';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img
          src="\src\images\banner.jpg"
          alt="Samyam National Level Org"
          className="w-full h-full object-cover"
        />
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Radial pattern overlay (optional aesthetic layer) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10%] opacity-20 bg-[radial-gradient(#e1e1e1_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-24 text-center text-white z-10">
        <div className="flex flex-col gap-6 items-center max-w-3xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur border border-white/30 mb-4 animate-fade-in-slow">
            <span className="text-xs font-medium text-white-600">Making a difference together</span>
          </div>

          <AnimatedText
            text="Samyam – Empowering Communities, Transforming Lives"
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance text-edge-cap"
            delay={300}
          />

          <AnimatedText
            text="We believe in creating a lasting impact through compassion, collective action, and sustainable development"
            className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
            delay={600}
          />

          <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in" style={{ animationDelay: '900ms' }}>
            <button
              onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-white px-8 py-3 rounded-full text-base font-medium transition-all hover:bg-primary/90 active:scale-[0.98]"
            >
              Donate Now
            </button>
            <button
              onClick={() => document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-gray-800 px-8 py-3 rounded-full text-base font-medium border border-gray-200 transition-all hover:bg-gray-50 active:scale-[0.98]"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
