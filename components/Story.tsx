
import React from 'react';

export const Story: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Section header */}
      <div className="text-center mb-16 reveal">
        <p className="text-[11px] uppercase tracking-[0.3em] text-stone-400 font-medium mb-4">
          Обо мне
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 italic leading-tight">
          История, которая меняет<br />
          подход к <span className="text-[#E85D3B]">здоровью</span>
        </h2>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        {/* Left column - Image */}
        <div className="lg:w-2/5 reveal" style={{ transitionDelay: '100ms' }}>
          <div className="sticky top-32">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#FFE8D6] to-[#FFF8F3] rounded-3xl -z-10" />
              
              <img 
                src="https://picsum.photos/600/800?grayscale&v=1" 
                alt="Семейный нутрициолог Виолетта Новикова" 
                className="w-full aspect-[3/4] object-cover rounded-2xl mymind-shadow grayscale hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E85D3B]/10 flex items-center justify-center">
                    <span className="text-lg">🌿</span>
                  </div>
                  <div>
                    <p className="text-xs text-stone-400">Семейный нутрициолог</p>
                    <p className="font-serif text-sm text-stone-900 italic">+ психология</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {['#нутрициология', '#психологияпитания', '#балансздоровья', '#дляженщин'].map(tag => (
                <span 
                  key={tag} 
                  className="px-3 py-1 rounded-full bg-stone-100 text-stone-500 text-xs hover:bg-[#E85D3B] hover:text-white transition-all cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right column - Content */}
        <div className="lg:w-3/5 reveal" style={{ transitionDelay: '200ms' }}>
          <div className="space-y-8 text-lg leading-relaxed text-stone-600 font-light">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:leading-none first-letter:text-[#E85D3B] first-letter:italic">
              Знаете, откуда начинается настоящее здоровье? Не из банки с витаминами. Оно начинается с вопроса. С того самого, который однажды тихо прозвучал у вас в голове: «А что, если можно жить и чувствовать себя иначе?»
            </p>
            
            <p>
              Мой путь начался именно так. С вопросов о здоровье моей собственной семьи. Я чувствовала, что ответ нужно искать глубже, чем просто «ешь это, не ешь то».
            </p>
            <p>
            Поэтому я пошла учиться на психолога. Год в Московском институте психологии убедил меня: <strong className="font-medium text-stone-800"><em>тело и психика неразделимы.</em></strong>
            </p>
            
            <p>
              Как можно корректировать питание, не понимая стрессов, привычек, характера человека? Настоящее здоровье — это баланс.
            </p>
            
            <p>
              <strong className="font-medium text-stone-900"><em>С этим пониманием я погрузилась в нутрициологию.</em></strong> Я изучала витамины, здоровье ЖКТ, митохондриальную функцию, детскую нутрициологию — всё, что помогает сложить пазл «человек» в единую картину.
            </p>
            
            {/* Key insight box */}
            <div className="p-6 bg-stone-900 text-white rounded-2xl">
              <p className="text-sm uppercase tracking-wider text-stone-400 mb-2">Мой подход</p>
              <p className="font-serif text-xl italic">
                Сегодня я помогаю не лечить болезни, а <span className="text-[#E85D3B]">находить баланс</span>. Использую еду, микроэлементы и понимание психологии как инструменты.
              </p>
            </div>
            
            <p>
              Я продолжаю учиться, чтобы давать вашей семье только научно подтвержденные и работающие решения.
            </p>
            
            {/* CTA Section */}
            <div className="pt-12 border-t border-stone-200 mt-12">
              <h4 className="font-serif text-2xl md:text-3xl text-stone-900 mb-4 italic">
                Потому что ваша семья заслуживает быть полной сил и гармонии.
              </h4>
              <p className="mb-8 text-[#E85D3B] font-medium text-lg">
                Давайте создадим это вместе.
              </p>
              <a 
                href="#tariffs"
                className="inline-flex items-center gap-3 btn-coral px-6 py-3 rounded-full font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                Записаться на консультацию
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
