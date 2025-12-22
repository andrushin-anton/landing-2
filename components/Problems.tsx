
import React from 'react';

interface ProblemItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  delay: number;
}

const ProblemItem: React.FC<ProblemItemProps> = ({ icon, title, description, color, delay }) => (
  <div 
    className="reveal group"
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="p-8 bg-white rounded-3xl border border-stone-100 h-full relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
      {/* Decorative gradient on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
        style={{
          background: `linear-gradient(135deg, ${color}08 0%, transparent 50%)`,
        }}
      />
      
      {/* Icon */}
      <div 
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${color}15` }}
      >
        <div style={{ color }}>
          {icon}
        </div>
      </div>
      
      <h3 className="font-serif text-xl md:text-2xl text-stone-900 mb-4 italic">{title}</h3>
      <p className="text-stone-500 font-light leading-relaxed">{description}</p>
    </div>
  </div>
);

export const Problems: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Section header */}
      <div className="text-center mb-16 reveal">
        <p className="text-[11px] uppercase tracking-[0.3em] text-stone-400 font-medium mb-4">
          Знакомо?
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 mb-6 italic leading-tight">
          Вы постоянно сталкиваетесь<br className="hidden md:block" /> с этим?
        </h2>
        <p className="text-stone-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
          Вы не одиноки. Я прошла через те же вопросы. И нашла подход, который работает.
        </p>
      </div>
      
      {/* Problems grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        <ProblemItem 
          title="Вечная усталость"
          description="Она стала фоном жизни. Не хватает сил ни на семью, ни на себя. Вы спите, но не высыпаетесь. Каждое утро начинается с желания вернуться в кровать."
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
              <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
              <line x1="6" y1="1" x2="6" y2="4"></line>
              <line x1="10" y1="1" x2="10" y2="4"></line>
              <line x1="14" y1="1" x2="14" y2="4"></line>
            </svg>
          }
          color="#E85D3B"
          delay={0}
        />
        
        <ProblemItem 
          title="Здоровье — головоломка"
          description="Анализы в норме, но самочувствие — нет. Тонны советов из интернета только путают. Непонятно, кому и чему верить. Каждый врач говорит своё."
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          }
          color="#9C27B0"
          delay={100}
        />
        
        <ProblemItem 
          title="Хочется лучшего для семьи"
          description="Но не знаете, с чего начать. Как кормить детей, чем поддержать мужа, где взять ресурсы на всё это? Страх ошибиться парализует действия."
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          }
          color="#4CAF50"
          delay={200}
        />
      </div>
      
      {/* Transition to solution */}
      <div className="mt-16 text-center reveal" style={{ transitionDelay: '300ms' }}>
        <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-[#FFF8F3] to-[#FFE8D6]/50 rounded-2xl">
          <span className="text-3xl">✨</span>
          <p className="text-stone-700 font-medium">
            Хорошая новость: <span className="text-[#E85D3B]">есть выход</span>
          </p>
          <a href="#approach" className="ml-4 text-[#E85D3B] hover:underline font-medium">
            Узнать как →
          </a>
        </div>
      </div>
    </div>
  );
};

