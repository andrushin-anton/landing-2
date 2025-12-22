
import React from 'react';

export const Story: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Section header - mymind style */}
      <div className="text-center mb-16 reveal">
        <p className="text-[11px] uppercase tracking-[0.3em] text-stone-400 font-medium mb-4">
          Моя история
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 italic leading-tight">
          «А что, если можно жить<br />
          и чувствовать себя <span className="text-[#E85D3B]">иначе?</span>»
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
                alt="Violetta Novikova" 
                className="w-full aspect-[3/4] object-cover rounded-2xl mymind-shadow grayscale hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E85D3B]/10 flex items-center justify-center">
                    <span className="text-lg">🌿</span>
                  </div>
                  <div>
                    <p className="text-xs text-stone-400">Нутрициолог</p>
                    <p className="font-serif text-sm text-stone-900 italic">с 2020 года</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {['#нутрициология', '#здоровьесемьи', '#психологияпитания', '#баланс'].map(tag => (
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
              Знаете, откуда начинается настоящее здоровье? Не из банки с витаминами и не со строгой диеты. Оно начинается с вопроса. С того самого, который однажды тихо прозвучал у вас в голове.
            </p>
            
            <p>
              Мой путь к нутрициологии начался именно так. С вопросов о здоровье моей семьи, о нашем самочувствии, о том, как создать для сына и для нас с мужем среду, где мы будем полны сил. Я чувствовала, что ответ нужно искать глубже, чем просто «ешь это, не ешь то».
            </p>
            
            {/* Quote block - mymind style */}
            <div className="relative p-8 bg-gradient-to-br from-[#FFF8F3] to-[#FFE8D6]/30 rounded-3xl my-12">
              <div className="absolute top-4 left-4 text-4xl text-[#E85D3B]/20 font-serif">"</div>
              <p className="italic text-stone-700 text-xl leading-relaxed pl-6">
                И тогда я сделала шаг, который многим показался странным. Я пошла учиться... на психолога. Год в Московском институте психологии убедил меня: тело и психика неразделимы.
              </p>
            </div>
            
            <p>
              Как можно корректировать питание, не понимая стрессов, привычек, характера человека? Настоящее здоровье — это баланс. Баланс во всём.
            </p>
            
            <p>
              С этим пониманием я уже осознанно погрузилась в мир нутрициологии. Не для галочки, а чтобы докопаться до причин. Витамины, ЖКТ, анемия, митохондрии, здоровье детей — я изучала то, что помогало сложить пазл «человек» в единую картину.
            </p>
            
            <p>
              Сегодня я — счастливая жена и мама, которая знает, как этой семейной «крепости» дать надежный фундамент из энергии и гармонии. И продолжаю учиться, потому что наука не стоит на месте.
            </p>
            
            {/* CTA Section */}
            <div className="pt-12 border-t border-stone-200 mt-12">
              <h4 className="font-serif text-2xl md:text-3xl text-stone-900 mb-4 italic">
                А с чего начались ваши вопросы о здоровье?
              </h4>
              <p className="mb-8 text-stone-500">
                Что стало для вас тем самым «первым звоночком», который заставил задуматься?
              </p>
              <a 
                href="#contact"
                className="inline-flex items-center gap-3 btn-coral px-6 py-3 rounded-full font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                Поделитесь своей историей
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
