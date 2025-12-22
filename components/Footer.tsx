
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#FFF8F3] border-t border-stone-100">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Top section with logo and tagline */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-stone-700">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
              </svg>
            </div>
            <div>
              <span className="font-serif text-xl text-stone-800">Виолетта</span>
              <span className="mx-2 text-stone-300">•</span>
              <span className="text-stone-400 italic text-sm">Найдите свой баланс.</span>
            </div>
          </div>
          
          {/* CTA Banner */}
          <a 
            href="#tariffs"
            className="group flex items-center gap-4 px-6 py-4 bg-stone-900 text-white rounded-2xl hover:bg-stone-800 transition-all"
          >
            <span className="font-serif text-lg">Как это работает</span>
            <span className="text-xs text-stone-400 border border-stone-700 px-3 py-1 rounded-full group-hover:bg-stone-700 transition-all">
              узнать больше
            </span>
          </a>
        </div>
        
        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400 mb-4">
              Почему выбирают меня
            </h5>
            <ul className="space-y-3 text-stone-600 font-light text-sm">
              <li><a href="#story" className="hover:text-[#E85D3B] transition-colors">Моя история</a></li>
              <li><a href="#tariffs" className="hover:text-[#E85D3B] transition-colors">Тарифы</a></li>
              <li><a href="#approach" className="hover:text-[#E85D3B] transition-colors">Как это работает</a></li>
              <li><a href="#" className="hover:text-[#E85D3B] transition-colors">Для семей</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400 mb-4">
              Связаться
            </h5>
            <ul className="space-y-3 text-stone-600 font-light text-sm">
              <li><a href="#" className="hover:text-[#E85D3B] transition-colors">Telegram</a></li>
              <li><a href="#" className="hover:text-[#E85D3B] transition-colors">WhatsApp</a></li>
              <li><a href="#" className="hover:text-[#E85D3B] transition-colors">Email</a></li>
              <li><a href="#" className="hover:text-[#E85D3B] transition-colors">Instagram</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400 mb-4">
              Обо мне
            </h5>
            <ul className="space-y-3 text-stone-600 font-light text-sm">
              <li><a href="#" className="hover:text-[#E85D3B] transition-colors">Мой манифест</a></li>
              <li><a href="#" className="hover:text-[#E85D3B] transition-colors">Мои обещания</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400 mb-4">
              Помощь
            </h5>
            <ul className="space-y-3 text-stone-600 font-light text-sm">
              <li><a href="#" className="hover:text-[#E85D3B] transition-colors flex items-center gap-1">
                <span className="text-[#E85D3B]">@</span>violetta в Telegram
              </a></li>
              <li><a href="#" className="hover:text-[#E85D3B] transition-colors">Гайды и материалы</a></li>
              <li><a href="#" className="hover:text-[#E85D3B] transition-colors">Видео-туториалы</a></li>
            </ul>
            <div className="mt-6 pt-6 border-t border-stone-200">
              <a href="#" className="text-[#E85D3B] text-sm hover:underline">Войти в личный кабинет</a>
              <br />
              <a href="#tariffs" className="text-stone-500 text-sm hover:text-[#E85D3B] transition-colors">Записаться на консультацию</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-stone-400 text-xs">
          <span>© 2024 Виолетта Новикова. Все права защищены.</span>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#E85D3B] transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-[#E85D3B] transition-colors">Оферта</a>
            <span className="text-stone-300">|</span>
            <span>Сделано с 💚</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
