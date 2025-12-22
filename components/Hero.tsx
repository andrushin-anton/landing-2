
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
              background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 40%, rgba(255,255,255,0) 70%)',
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
        
        {/* Main headline */}
        <h1 
          className={`font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 leading-[1.15] mb-8 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '200ms', marginTop: '50px'}}
        >
          <span className="italic">Здоровье вашей семьи</span>
          <br />
          <span className="italic">начинается с </span>
          <span className="italic text-[#E85D3B]">простого вопроса</span>
        </h1>
        
        {/* Subheadline - Key question */}
        <p 
          className={`max-w-2xl mx-auto text-stone-600 text-lg md:text-xl font-light leading-relaxed mb-8 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <strong className="font-medium text-stone-800">Что, если усталость — не норма,</strong> а еда может быть источником радости и сил, а не постоянного контроля?
        </p>
        
        {/* Tagline with pill badges */}
        <div 
          className={`flex flex-wrap items-center justify-center gap-2 mb-6 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <span className="text-stone-500">Найдите</span>
          <span className="px-3 py-1 rounded-full border border-[#E85D3B] text-[#E85D3B] text-sm">баланс</span>
          <span className="px-3 py-1 rounded-full border border-green-500 text-green-600 text-sm">энергию</span>
          <span className="px-3 py-1 rounded-full border border-purple-400 text-purple-500 text-sm">спокойствие</span>
        </div>
        
        {/* Description */}
        <p 
          className={`max-w-xl mx-auto text-stone-500 text-base font-light leading-relaxed mb-10 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          Я помогу сделать питание естественной частью жизни вашей семьи. <span className="font-medium text-stone-700">Без строгих диет и чувства вины.</span>
        </p>
        
        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <a 
            href="#tariffs" 
            className="inline-block btn-coral px-8 py-4 rounded-full text-base font-medium"
          >
            Записаться
          </a>
          <a 
            href="#problems" 
            className="inline-block px-8 py-4 rounded-full text-base font-medium border-2 border-stone-300 text-stone-700 hover:border-[#E85D3B] hover:text-[#E85D3B] transition-all"
          >
            Узнать больше
          </a>
        </div>
        
        {/* Platform badges */}
        <div 
          className={`flex flex-wrap items-center justify-center gap-4 mt-16 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '750ms' }}
        >
          {/* Telegram */}
          <div className="flex flex-col items-center gap-2 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-2xl border border-stone-100 hover:bg-white hover:shadow-lg transition-all cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-stone-600">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            <span className="text-xs text-stone-500 font-medium">Telegram</span>
          </div>
          
          {/* WhatsApp */}
          <div className="flex flex-col items-center gap-2 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-2xl border border-stone-100 hover:bg-white hover:shadow-lg transition-all cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-stone-600">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="text-xs text-stone-500 font-medium">WhatsApp</span>
          </div>
          
          {/* VK */}
          <div className="flex flex-col items-center gap-2 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-2xl border border-stone-100 hover:bg-white hover:shadow-lg transition-all cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-stone-600">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 13.921c.376.458 1.163 1.395 1.163 1.395s.391.552.451.698c.018.044.027.085.027.126 0 .126-.081.201-.243.225l-1.657.024s-.311.076-.722-.225c-.322-.234-.643-.678-.886-.939-.364-.392-.607-.504-.804-.504-.277 0-.358.165-.358.566v.869c0 .392-.126.625-1.151.625-1.7 0-3.587-1.039-4.917-2.97-2.002-2.814-2.549-4.93-2.549-5.364 0-.201.076-.387.358-.387h1.657c.268 0 .369.126.472.423.519 1.557 1.39 2.921 1.748 2.921.134 0 .195-.062.195-.403v-1.566c-.041-.716-.42-.776-.42-1.032 0-.126.107-.252.277-.252h2.605c.222 0 .302.126.302.403v2.11c0 .222.099.302.161.302.134 0 .248-.08.496-.328.769-.869 1.318-2.209 1.318-2.209.073-.151.195-.29.463-.29h1.657c.499 0 .611.261.499.617-.206.656-2.196 3.764-2.196 3.764-.175.29-.24.42 0 .745z"/>
            </svg>
            <span className="text-xs text-stone-500 font-medium">VK</span>
          </div>
          
          {/* Instagram */}
          <div className="flex flex-col items-center gap-2 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-2xl border border-stone-100 hover:bg-white hover:shadow-lg transition-all cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-stone-600">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span className="text-xs text-stone-500 font-medium">Instagram</span>
          </div>
        </div>
        
        {/* "Looking for..." link */}
        <div 
          className={`mt-8 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '850ms' }}
        >
          <a href="#story" className="text-[#E85D3B] text-sm hover:underline">
            Узнать больше обо мне →
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
