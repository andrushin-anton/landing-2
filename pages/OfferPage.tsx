import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { OFFER_TEXT } from './offerText';
import { text } from 'stream/consumers';

function splitSections(text: string): { intro: string; sections: { title: string; body: string }[] } {
  const sections: { title: string; body: string }[] = [];
  const byHeader = text.split(/\n(?=\d{1,2}\. [A-ZА-ЯЁ\s,]+$)/m);
  const intro = byHeader[0]?.trim() ?? '';
  for (let i = 1; i < byHeader.length; i++) {
    const block = byHeader[i]!.trim();
    const firstLineEnd = block.indexOf('\n');
    const title = firstLineEnd === -1 ? block : block.slice(0, firstLineEnd);
    const body = firstLineEnd === -1 ? '' : block.slice(firstLineEnd + 1);
    sections.push({ title, body });
  }
  return { intro, sections };
}

export const OfferPage: React.FC = () => {
  const { intro, sections } = splitSections(OFFER_TEXT);
  return (
    <div className="min-h-screen selection:bg-[#E85D3B]/20">
      <Navbar />
      <main className="bg-[#FFF8F3]">
        <section className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <h1 style={{textAlign: 'center'}} className="font-serif text-3xl md:text-4xl text-stone-800 mb-8">
          Публичная оферта на оказание информационно-консультационных услуг
          </h1>
          <div className="text-stone-600 font-light leading-relaxed space-y-4">
            <p style={{textAlign: 'right'}}><i>Редакция от "5" февраля 2026 г.</i></p>
            <p className="whitespace-pre-line">{intro}</p>
            {sections.map(({ title, body }, index) => (
              <div key={title} className={`mt-10 pt-6 border-t border-stone-200 ${index === 0 ? 'border-t-0 pt-0 mt-8' : ''}`}>
                <h2 className="text-stone-800 font-medium text-lg mb-4">{title}</h2>
                <div className="whitespace-pre-line">{body}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
