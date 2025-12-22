
import React, { useState, useEffect } from 'react';
import logo from '@/logo.svg';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'История', href: '#story', color: '#E85D3B' },
    { label: 'Подход', href: '#approach', color: '#4CAF50' },
    { label: 'Тарифы', href: '#tariffs', color: '#9C27B0' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 ${
          isScrolled 
            ? 'py-3 glass-dark' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
              isScrolled ? 'bg-stone-100' : 'bg-white/80'
            }`}>
              <img src={logo} alt="Логотип" width="24" height="24"/>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-tight text-stone-800 group-hover:text-[#E85D3B] transition-colors">
                Виолетта Новикова
              </span>
            </div>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-600">
            {menuItems.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                className="flex items-center gap-2 hover:text-stone-900 transition-colors link-hover"
              >
                <span 
                  className="menu-dot"
                  style={{ backgroundColor: item.color }}
                />
                {item.label}
              </a>
            ))}
            
            
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-stone-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className={`transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
            >
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-xl md:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {menuItems.map((item, index) => (
            <a 
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 text-2xl font-serif text-stone-800 hover:text-[#E85D3B] transition-all"
              style={{ 
                transitionDelay: `${index * 50}ms`,
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: isMobileMenuOpen ? 1 : 0
              }}
            >
              <span 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              {item.label}
            </a>
          ))}
          <a 
            href="#tariffs"
            onClick={() => setIsMobileMenuOpen(false)}
            className="btn-coral px-8 py-4 rounded-full text-lg font-medium mt-8"
            style={{ 
              transitionDelay: '200ms',
              transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: isMobileMenuOpen ? 1 : 0
            }}
          >
            Записаться
          </a>
        </div>
      </div>
    </>
  );
};
