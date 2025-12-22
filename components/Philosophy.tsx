
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
    </div>
  </div>
);

interface BenefitItemProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ icon, title, description, delay }) => (
  <div 
    className="reveal flex gap-6"
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#E85D3B]/10 to-[#E85D3B]/5 flex items-center justify-center text-2xl">
      {icon}
    </div>
    <div>
      <h4 className="font-serif text-xl text-stone-900 mb-2 italic">{title}</h4>
      <p className="text-stone-500 font-light leading-relaxed">{description}</p>
    </div>
  </div>
);

export const Philosophy: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Section header */}
      <div className="text-center mb-16 reveal">
        <p className="text-[11px] uppercase tracking-[0.3em] text-stone-400 font-medium mb-4">
          Мой подход
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 mb-6 italic leading-tight">
          Не просто нутрициолог.<br />
          <span className="text-[#E85D3B]">Проводник</span> к балансу
        </h2>
        <p className="text-stone-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
          Я знаю, что нельзя изменить питание, не понимая привычек, стрессов и образа жизни человека. Мой метод — это синтез двух наук.
        </p>
      </div>
      
      {/* Method cards - Two sciences */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-20">
        <ApproachItem 
          title="Глубинная нутрициология"
          desc="Работа с причинами. Мы смотрим на здоровье ЖКТ, уровень микроэлементов (железо, магний, витамин D), энергетику клеток. Не маскируем симптомы, а ищем корень проблемы."
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <path d="M12 8v4"></path>
              <path d="M12 16h.01"></path>
            </svg>
          }
          color="#E85D3B"
          delay={0}
        />
        <ApproachItem 
          title="Основы психологии"
          desc="Работа с поведением. Мы учимся слышать сигналы тела, формируем новые, здоровые привычки без насилия над собой. Понимаем, почему диеты не работают."
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
              <line x1="9" x2="9.01" y1="9" y2="9"></line>
              <line x1="15" x2="15.01" y1="9" y2="9"></line>
            </svg>
          }
          color="#9C27B0"
          delay={100}
        />
      </div>
      
      {/* Personalized system callout */}
      <div className="reveal mb-20" style={{ transitionDelay: '200ms' }}>
        <div className="p-8 md:p-12 bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E85D3B]/20 rounded-full blur-[100px]" />
          <div className="relative z-10 max-w-3xl">
            <span className="text-[#E85D3B] text-sm font-medium uppercase tracking-wider">Результат</span>
            <h3 className="font-serif text-3xl md:text-4xl italic mt-4 mb-6 leading-tight">
              Вместе мы создаем персонализированную систему, а не разрозненные советы
            </h3>
            <p className="text-stone-300 text-lg font-light leading-relaxed">
              Систему, которая учитывает ритм жизни, любимые продукты и цели <span className="text-white font-medium">именно вашей семьи</span>.
            </p>
          </div>
        </div>
      </div>
      
      {/* What you get section */}
      <div className="reveal" style={{ transitionDelay: '300ms' }}>
        <div className="text-center mb-12">
          <h3 className="font-serif text-3xl md:text-4xl text-stone-900 italic">
            Что вы получите, доверившись моему опыту
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          <BenefitItem 
            icon="📋"
            title="Не еще одну диету, а понятный план"
            description="Вы перестанете мучительно выбирать, что готовить. Появится ясность, уверенность и спокойствие на кухне."
            delay={350}
          />
          <BenefitItem 
            icon="⚡"
            title="Энергию, которую вы почувствуете"
            description="Постепенно вернутся силы, качество сна и способность радоваться простым вещам. Вы забудете, что такое «вам бы взбодриться»."
            delay={400}
          />
          <BenefitItem 
            icon="👶"
            title="Фундамент здоровья для детей"
            description="Вы научитесь укреплять иммунитет ребенка через питание, предотвращать частые болезни и закладывать правильные пищевые привычки на всю жизнь."
            delay={450}
          />
          <BenefitItem 
            icon="💚"
            title="Гармонию в отношениях с едой"
            description="Еда перестанет быть врагом или источником тревоги. Она станет вашим ресурсом и удовольствием."
            delay={500}
          />
        </div>
      </div>
    </div>
  );
};
