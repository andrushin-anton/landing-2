
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#FFF8F3] border-t border-stone-100">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
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
              <li><a href="https://t.me/violetta_nutrition" className="hover:text-[#E85D3B] transition-colors">Telegram</a></li>
              <li><a href="#" className="hover:text-[#E85D3B] transition-colors">VK</a></li>
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
              <li><a href="https://t.me/violetta_nutrition" className="hover:text-[#E85D3B] transition-colors flex items-center gap-1">
                <span className="text-[#E85D3B]">@</span>violetta в Telegram
              </a></li>
              {/* <li><a href="#" className="hover:text-[#E85D3B] transition-colors">Гайды и материалы</a></li>
              <li><a href="#" className="hover:text-[#E85D3B] transition-colors">Видео-туториалы</a></li> */}
            </ul>
            <div className="mt-6 pt-6 border-t border-stone-200">
              <a href="#tariffs" className="text-stone-500 text-sm hover:text-[#E85D3B] transition-colors">Записаться на консультацию</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-stone-400 text-xs">
          <span>© {new Date().getFullYear()} Виолетта Новикова. Все права защищены.</span>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-[#E85D3B] transition-colors">Политика конфиденциальности</a>
            <a href="/offer" className="hover:text-[#E85D3B] transition-colors">Оферта</a>
            <span className="text-stone-300">|</span>
            <span>Сделано с 💚</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
