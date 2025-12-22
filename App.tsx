
import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Philosophy } from './components/Philosophy';
import { Tariffs } from './components/Tariffs';
import { Footer } from './components/Footer';
import { GeminiChat } from './components/GeminiChat';

const App: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
          el.classList.add('active');
        }
      });
    };

    // Smooth scroll for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        const element = document.querySelector(target.hash);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <div className="min-h-screen selection:bg-[#E85D3B]/20">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="story" className="py-24 md:py-32 px-6 md:px-12 bg-white">
          <Story />
        </section>

        <section id="approach" className="py-24 md:py-32 px-6 md:px-12 bg-[#FFF8F3]">
          <Philosophy />
        </section>

        <section id="tariffs" className="py-24 md:py-32 px-6 md:px-12 bg-white">
          <Tariffs />
        </section>
      </main>
      
      <Footer />
      
      {/* AI Assistant for immediate engagement */}
      <GeminiChat />
    </div>
  );
};

export default App;
