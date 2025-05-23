import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-10',
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className={cn(
            "text-xl font-medium tracking-tight transition-colors duration-300",
            scrolled ? "text-gray-900" : "text-white"
          )}>
            <span className="font-bold">Samyam</span> National Level Organisation
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {['mission', 'about', 'donate'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={cn(
                "text-sm font-medium capitalize transition-colors duration-300 focus-ring",
                scrolled ? "text-gray-700 hover:text-primary" : "text-white hover:text-blue-200"
              )}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Donate Button - consistent in both cases */}
        <button
          onClick={() => scrollToSection('donate')}
          className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-primary/90 active:scale-[0.98]"
        >
          Donate Now
        </button>
      </div>
    </header>
  );
};

export default Header;
