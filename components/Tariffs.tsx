
import React from 'react';

interface PriceCardProps {
  title: string;
  price: string;
  goal: string;
  features: string[];
  bonus?: string;
  highlight?: boolean;
  color: string;
  delay: number;
}

const PriceCard: React.FC<PriceCardProps> = ({ title, price, goal, features, bonus, highlight, color, delay }) => (
  <div 
    className="tariff-card reveal"
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div 
      className={`tariff-card-inner p-8 rounded-3xl flex flex-col h-full relative overflow-hidden ${
        highlight 
          ? 'bg-stone-900 text-white' 
          : 'bg-white text-stone-900 border border-stone-100'
      }`}
    >
      {/* Decorative corner accent */}
      <div 
        className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full transition-all duration-500 ${
          highlight ? 'opacity-20' : 'opacity-10'
        }`}
        style={{ backgroundColor: color }}
      />
      
      {/* Popular badge */}
      {highlight && (
        <div 
          className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold"
          style={{ backgroundColor: color, color: 'white' }}
        >
          Популярный
        </div>
      )}
      
      <div className="mb-6 relative z-10">
        <div 
          className="w-10 h-10 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: highlight ? 'rgba(255,255,255,0.1)' : `${color}15` }}
        >
          <div 
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: color }}
          />
        </div>
        <h3 className={`font-serif text-2xl mb-2 italic ${highlight ? 'text-white' : 'text-stone-900'}`}>
          {title}
        </h3>
        <div className={`text-sm uppercase tracking-widest font-bold ${highlight ? 'text-stone-400' : 'text-stone-400'}`}>
          {price}
        </div>
      </div>
      
      <div className={`mb-8 p-4 rounded-xl transition-all duration-300 ${highlight ? 'bg-stone-800' : 'bg-stone-50'}`}>
        <p className="text-sm font-medium mb-1 opacity-60">Цель:</p>
        <p className="text-sm leading-relaxed">{goal}</p>
      </div>
      
      <div className="flex-grow mb-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 opacity-40">Что входит:</p>
        <ul className="space-y-4">
          {features.map((f, i) => (
            <li key={i} className="flex items-start text-sm leading-snug group/item">
              <span 
                className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 transition-transform duration-300 group-hover/item:scale-150"
                style={{ backgroundColor: highlight ? 'rgba(255,255,255,0.3)' : color }}
              />
              <span className="opacity-90">{f}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {bonus && (
        <div className={`mt-auto mb-8 p-4 border-t ${highlight ? 'border-stone-800' : 'border-stone-100'}`}>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 opacity-50">🎁 Бонусы:</p>
          <p className="text-xs italic opacity-80">{bonus}</p>
        </div>
      )}
      
      <button 
        className={`w-full py-4 rounded-full text-sm font-bold transition-all duration-300 ${
          highlight 
            ? 'bg-white text-stone-900 hover:scale-[1.02] hover:shadow-lg' 
            : 'hover:scale-[1.02]'
        }`}
        style={!highlight ? { backgroundColor: color, color: 'white' } : {}}
      >
        Выбрать тариф
      </button>
    </div>
  </div>
);

export const Tariffs: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Section header - mymind style */}
      <div className="text-center mb-16 reveal">
        <p className="text-[11px] uppercase tracking-[0.3em] text-stone-400 font-medium mb-4">
          Тарифы
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 mb-6 italic leading-tight">
          Ваш путь к результату
        </h2>
        <p className="text-stone-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
          Каждый тариф решает конкретную задачу — от точечного вопроса до комплексного сопровождения на пути к глубокой трансформации.
        </p>
      </div>
      
      {/* Tariff cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
        <PriceCard 
          title="Ситуационный разбор"
          price="5 000 — 7 000 ₽"
          goal="Решение срочного или конкретного вопроса (энергия, вздутие, анализы)."
          features={[
            "Предварительный сбор данных (анкета + анализы)",
            "Одна дистанционная консультация (60 минут)",
            "Письменные рекомендации (PDF, 2-3 страницы)",
            "Поддержка в чате в течение 3 дней"
          ]}
          bonus="Чек-лист «Скорая помощь при упадке сил» или «Анти-вздутие»"
          color="#E85D3B"
          delay={0}
        />
        
        <PriceCard 
          highlight
          title="Оптимальный старт"
          price="18 000 — 25 000 ₽"
          goal="Запуск изменений, глубокая работа с причинами и фокус на результате."
          features={[
            "Расширенная анкета и анализ дневника питания",
            "Две консультации: первичная (90 мин) и повторная (60 мин)",
            "Детальный интегративный протокол (питание, БАДы, образ жизни)",
            "Сопровождение в чате в течение 1 месяца"
          ]}
          bonus="Подбор анализов, корзина БАД, чек-листы по сезонному питанию"
          color="#4CAF50"
          delay={100}
        />
        
        <PriceCard 
          title="Премиум"
          price="45 000 — 60 000 ₽"
          goal="Полная трансформация привычек и устойчивый результат при сложных состояниях."
          features={[
            "Полный аудит здоровья и анализ всех показателей",
            "Четыре стратегические сессии в течение 3 месяцев",
            "Динамический протокол, обновляемый по мере прогресса",
            "Поддержка в кризисные моменты (аудио-советы)"
          ]}
          bonus="Библиотека материалов (рецепты, гайды), совместный разбор покупок"
          color="#9C27B0"
          delay={200}
        />
      </div>
      
      {/* Express consultation banner */}
      <div className="reveal" style={{ transitionDelay: '300ms' }}>
        <div className="glass max-w-4xl mx-auto p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 border border-stone-100 hover:shadow-lg transition-all duration-500">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
            <div>
              <h4 className="font-serif text-xl text-stone-900 italic">Экспресс-консультация</h4>
              <p className="text-stone-500 text-sm font-light">Для срочных вопросов и вторых мнений без глубокого анализа.</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <div className="text-2xl font-serif text-stone-900">2 500 — 3 500 ₽</div>
              <span className="text-xs text-stone-400">30 минут</span>
            </div>
            <button className="px-6 py-3 border-2 border-[#2196F3] text-[#2196F3] rounded-full text-sm font-bold uppercase tracking-wider hover:bg-[#2196F3] hover:text-white transition-all duration-300">
              Записаться
            </button>
          </div>
        </div>
      </div>
      
      {/* Promise section - mymind manifesto style */}
      <div className="mt-24 max-w-3xl mx-auto text-center reveal" style={{ transitionDelay: '400ms' }}>
        <p className="text-[11px] uppercase tracking-[0.3em] text-stone-400 font-medium mb-8">
          Мой манифест
        </p>
        
        <p className="font-serif text-xl md:text-2xl text-stone-700 leading-relaxed mb-8 italic">
          В мире, где каждая компания хочет ваши данные, где мы обмениваем приватность на информацию — у нас мало своего пространства.
        </p>
        
        <p className="text-stone-500 mb-12 leading-relaxed">
          Наши умы захвачены социальными сетями, лентами новостей и рекламой. То, что никогда не должно было быть потеряно — теперь снова ваше. <span className="font-bold text-stone-700">Я обещаю:</span>
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            'Никакого давления',
            'Никаких диет',
            'Никакого осуждения',
            'Никаких шаблонов',
            'Никакого спама',
            'Никакой рекламы',
          ].map((promise, index) => (
            <div 
              key={promise}
              className="flex items-center gap-2 justify-center"
            >
              <span className="text-[#E85D3B] font-bold">НЕТ</span>
              <span className="text-stone-600 text-sm">{promise.replace('Никакого ', '').replace('Никаких ', '').replace('Никакой ', '')}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
