
import React, { useState, useEffect } from 'react';

export const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated gradient background - mymind style */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main glowing circle */}
        <div 
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full transition-all duration-[2000ms] ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          {/* Inner glow */}
          <div 
            className="absolute inset-0 rounded-full animate-pulse-glow"
            style={{
              background: 'radial-gradient(circle, rgba(255,232,214,1) 0%, rgba(255,248,243,0.8) 40%, rgba(255,251,248,0) 70%)',
            }}
          />
          
          {/* Animated gradient blob 1 - peach/coral */}
          <div 
            className="absolute top-[10%] left-[10%] w-[50%] h-[50%] rounded-full animate-gradient-1 blur-[80px]"
            style={{
              background: 'radial-gradient(circle, rgba(255,180,150,0.8) 0%, rgba(255,200,180,0.4) 50%, transparent 70%)',
            }}
          />
          
          {/* Animated gradient blob 2 - warm yellow */}
          <div 
            className="absolute top-[30%] right-[5%] w-[45%] h-[45%] rounded-full animate-gradient-2 blur-[70px]"
            style={{
              background: 'radial-gradient(circle, rgba(255,220,180,0.7) 0%, rgba(255,235,200,0.3) 50%, transparent 70%)',
            }}
          />
          
          {/* Animated gradient blob 3 - soft pink */}
          <div 
            className="absolute bottom-[15%] left-[20%] w-[40%] h-[40%] rounded-full animate-gradient-3 blur-[60px]"
            style={{
              background: 'radial-gradient(circle, rgba(255,200,200,0.6) 0%, rgba(255,220,210,0.3) 50%, transparent 70%)',
            }}
          />
        </div>
        
        {/* Subtle decorative circles */}
        <div 
          className={`absolute top-[20%] right-[15%] w-3 h-3 rounded-full bg-[#E85D3B]/30 transition-all duration-1000 delay-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div 
          className={`absolute top-[60%] left-[10%] w-2 h-2 rounded-full bg-[#E85D3B]/20 transition-all duration-1000 delay-900 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
      
      <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
        {/* Small logo icon */}
        <div 
          className={`flex justify-center mb-8 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
        </div>
        
        {/* Main headline - mymind italic style */}
        <h1 
          className={`font-serif text-5xl md:text-6xl lg:text-7xl text-stone-900 leading-[1.1] mb-8 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '200ms', marginTop: '50px'}}
        >
          <span className="italic">Здоровье начинается</span>
          <br />
          <span className="italic">с вопроса.</span>
        </h1>
        
        {/* Tagline with pill badges - mymind style */}
        <div 
          className={`flex flex-wrap items-center justify-center gap-2 mb-6 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '350ms' }}
        >
          <span className="text-stone-500">Ваши</span>
          <span className="px-3 py-1 rounded-full border border-[#E85D3B] text-[#E85D3B] text-sm">анализы</span>
          <span className="px-3 py-1 rounded-full border border-[#E85D3B] text-[#E85D3B] text-sm">привычки</span>
          <span className="px-3 py-1 rounded-full border border-green-500 text-green-600 text-sm">питание</span>
        </div>
        
        <div 
          className={`flex flex-wrap items-center justify-center gap-2 mb-10 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <span className="px-3 py-1 rounded-full border border-purple-400 text-purple-500 text-sm">энергия</span>
          <span className="text-stone-500">и</span>
          <span className="px-3 py-1 rounded-full border border-blue-400 text-blue-500 text-sm">баланс</span>
          <span className="text-stone-500">в одном месте.</span>
        </div>
        
        {/* Description */}
        <p 
          className={`max-w-xl mx-auto text-stone-500 text-lg font-light leading-relaxed mb-10 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          Помогаю телу и психике найти общий язык. Создаю надежный фундамент энергии и гармонии для вашей семьи.
        </p>
        
        {/* CTA Button - coral style */}
        <div 
          className={`transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <a 
            href="#tariffs" 
            className="inline-block btn-coral px-8 py-4 rounded-full text-base font-medium uppercase tracking-wider text-sm"
          >
            Записаться
          </a>
        </div>
        
        {/* Platform badges - mymind style */}
        <div 
          className={`flex flex-wrap items-center justify-center gap-4 mt-16 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '750ms' }}
        >
          {[
            { name: 'Telegram', icon: '📱' },
            { name: 'WhatsApp', icon: '💬' },
            { name: 'Zoom', icon: '🎥' },
            { name: 'Онлайн', icon: '🌐' },
          ].map((platform) => (
            <div 
              key={platform.name}
              className="flex flex-col items-center gap-2 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-2xl border border-stone-100 hover:bg-white hover:shadow-lg transition-all cursor-pointer"
            >
              <span className="text-xl">{platform.icon}</span>
              <span className="text-xs text-stone-500 font-medium">{platform.name}</span>
            </div>
          ))}
        </div>
        
        {/* "Looking for..." link - mymind style */}
        <div 
          className={`mt-8 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '850ms' }}
        >
          <a href="#story" className="text-[#E85D3B] text-sm hover:underline">
            Узнать больше обо мне?
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-opacity duration-1000 ${
          isLoaded ? 'opacity-40' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1200ms' }}
      >
        <div className="animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      </div>
    </div>
  );
};
