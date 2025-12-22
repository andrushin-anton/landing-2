
import React from 'react';

interface ApproachItemProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
  delay: number;
}

const ApproachItem: React.FC<ApproachItemProps> = ({ title, desc, icon, color, delay }) => (
  <div 
    className="tariff-card reveal"
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="tariff-card-inner p-8 bg-white rounded-3xl border border-stone-100 h-full relative overflow-hidden group">
      {/* Decorative gradient on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
        style={{
          background: `linear-gradient(135deg, ${color}08 0%, transparent 50%)`,
        }}
      />
      
      <div 
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${color}15` }}
      >
        <div className="text-stone-700" style={{ color }}>
          {icon}
        </div>
      </div>
      
      <h3 className="font-serif text-2xl text-stone-900 mb-4 italic">{title}</h3>
      <p className="text-stone-500 font-light leading-relaxed">{desc}</p>
      
      {/* Learn more link */}
      <a 
        href="#" 
        className="inline-flex items-center gap-2 mt-6 text-sm font-medium transition-colors"
        style={{ color }}
      >
        Подробнее
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </a>
    </div>
  </div>
);

export const Philosophy: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Section header - mymind style */}
      <div className="text-center mb-16 reveal">
        <p className="text-[11px] uppercase tracking-[0.3em] text-stone-400 font-medium mb-4">
          Мой подход
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 mb-6 italic leading-tight">
          Философия баланса
        </h2>
        <p className="text-stone-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
          Я не лечу болезни, я помогаю телу и психике найти общий язык, используя еду, микроэлементы и понимание как инструменты.
        </p>
      </div>
      
      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        <ApproachItem 
          title="Интегративный подход"
          desc="Изучаю витамины, ЖКТ, анемию и митохондрии, чтобы сложить пазл вашего здоровья в единую картину."
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          }
          color="#E85D3B"
          delay={0}
        />
        <ApproachItem 
          title="Психология питания"
          desc="Понимаю стрессы и привычки. Корректировка питания невозможна без понимания психических процессов."
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
              <line x1="9" x2="9.01" y1="9" y2="9"></line>
              <line x1="15" x2="15.01" y1="9" y2="9"></line>
            </svg>
          }
          color="#4CAF50"
          delay={100}
        />
        <ApproachItem 
          title="Семейная крепость"
          desc="Создаю фундамент энергии для всей семьи. Помогаю мамам и женам заботиться о близких через питание."
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          }
          color="#9C27B0"
          delay={200}
        />
      </div>
      
      {/* Featured content cards - mymind blog style */}
      <div className="mt-24 reveal" style={{ transitionDelay: '300ms' }}>
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-serif text-2xl text-stone-900 italic">Полезные материалы</h3>
          <a href="#" className="text-[#E85D3B] text-sm hover:underline">
            Смотреть все →
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              category: 'Новые материалы',
              title: 'Обновления, которые вы просили (:',
              color: '#E85D3B',
              bg: 'from-[#E85D3B] to-[#FF7755]',
            },
            {
              category: 'Мысли',
              title: 'Мысли, мечты и воспоминания',
              color: '#4CAF50',
              bg: 'from-amber-200 via-orange-200 to-rose-200',
            },
            {
              category: 'Мысли',
              title: 'О семье, любви и балансе',
              color: '#9C27B0',
              bg: 'from-emerald-100 via-teal-50 to-cyan-100',
            },
          ].map((item, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
            >
              <div 
                className={`aspect-[4/5] rounded-2xl mb-4 relative overflow-hidden bg-gradient-to-br ${item.bg}`}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                <div className="absolute bottom-4 left-4 right-4">
                  {index === 0 && (
                    <div className="w-16 h-16 bg-white/90 rounded-2xl flex items-center justify-center">
                      <span className="text-3xl">🌱</span>
                    </div>
                  )}
                  {index > 0 && (
                    <p className="font-serif text-xl text-white drop-shadow-lg italic">
                      {item.title}
                    </p>
                  )}
                </div>
              </div>
              <p 
                className="text-[10px] uppercase tracking-[0.2em] font-medium mb-1"
                style={{ color: item.color }}
              >
                {item.category}
              </p>
              <h4 className="font-serif text-lg text-stone-900 group-hover:text-[#E85D3B] transition-colors">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
