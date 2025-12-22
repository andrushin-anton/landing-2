
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

export const GeminiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: 'Здравствуйте! Я ваш ИИ-помощник по вопросам питания. Чем я могу помочь вам сегодня?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userMessage,
        config: {
          systemInstruction: "Вы — ИИ-ассистент на сайте семейного нутрициолога Виолетты Новиковой. Отвечайте вежливо, профессионально и мягко. Ваш стиль должен соответствовать холистическому подходу: баланс между физическим здоровьем и психологией. Не ставьте диагнозы, но давайте общие рекомендации по питанию и образу жизни. Если вопрос требует глубокого разбора, советуйте записаться на консультацию к Виолетте. Отвечайте на русском языке.",
          temperature: 0.7,
        },
      });

      setMessages(prev => [...prev, { role: 'ai', text: response.text || "Извините, я не смог обработать ваш запрос. Попробуйте еще раз." }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'ai', text: "Произошла ошибка связи. Пожалуйста, попробуйте позже." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      {isOpen ? (
        <div 
          className="w-[350px] sm:w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl border border-stone-100 flex flex-col overflow-hidden"
          style={{
            animation: 'fadeSlideIn 0.3s ease-out',
          }}
        >
          <style>{`
            @keyframes fadeSlideIn {
              from {
                opacity: 0;
                transform: translateY(20px) scale(0.95);
              }
              to {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }
          `}</style>
          
          {/* Header */}
          <div className="bg-gradient-to-r from-[#E85D3B] to-[#FF7755] text-white p-6 flex justify-between items-center">
            <div>
              <h4 className="font-serif text-xl italic leading-none">Помощник Виолетты</h4>
              <p className="text-[10px] text-white/70 uppercase tracking-widest mt-1">Quick Nutrition Support</p>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-white/70 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          {/* Messages area */}
          <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-4 bg-[#FFF8F3]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                    m.role === 'user' 
                      ? 'bg-[#E85D3B] text-white rounded-tr-none' 
                      : 'bg-white text-stone-700 shadow-sm border border-stone-100 rounded-tl-none'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 rounded-tl-none flex space-x-1">
                  <div className="w-2 h-2 bg-[#E85D3B] rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-[#E85D3B] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-[#E85D3B] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}
          </div>
          
          {/* Input area */}
          <div className="p-4 bg-white border-t border-stone-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Задайте быстрый вопрос..."
              className="flex-grow bg-stone-100 border-none rounded-full px-5 py-3 text-sm focus:ring-2 focus:ring-[#E85D3B]/30 outline-none transition-all"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="w-11 h-11 bg-[#E85D3B] text-white rounded-full flex items-center justify-center hover:bg-[#FF7755] hover:scale-105 transition-all disabled:opacity-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-[#E85D3B] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-[#FF7755] transition-all group relative"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-12 transition-transform">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <span className="absolute -top-2 -right-2 bg-white text-[#E85D3B] text-[10px] px-2 py-0.5 rounded-full uppercase tracking-tighter font-bold shadow-md animate-pulse">
            Ask AI
          </span>
        </button>
      )}
    </div>
  );
};
