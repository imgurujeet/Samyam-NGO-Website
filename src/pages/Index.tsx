
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import About from '@/components/About';
import Volunteers from '@/components/Volunteers';
import Donation from '@/components/Donation';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "Samyam National Level Org | Empowering Communities";
    
    // Smooth scroll to anchor links
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    
    // Initial check for hash
    handleHashChange();
    
    // Add event listener for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Clean up
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Mission />
      <About />
      <Volunteers />
      <Donation />
      <Footer />
    </main>
  );
};

export default Index;
