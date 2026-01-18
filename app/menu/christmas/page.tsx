import { Metadata } from 'next';
import Image from 'next/image';
import { christmasMenuData } from '@/lib/data/menus';

export const metadata: Metadata = {
  title: 'Christmas Menu',
  description: 'Celebrate the festive season with our specially curated Christmas menu selections.',
};

export default function ChristmasMenuPage() {
  return (
    <div className="py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-brand-gold mb-4">
            {christmasMenuData.name}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {christmasMenuData.description}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {christmasMenuData.cards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-white border-2 border-brand-gold rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-80 md:h-96 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Inner border effect */}
                <div className="absolute inset-3 border border-brand-gold/40 pointer-events-none" />
              </div>
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 py-3 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-heading text-lg font-semibold text-brand-gold">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Download Button */}
        <div className="text-center">
          <a
            href={christmasMenuData.downloadLink}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white font-bold uppercase tracking-wide hover:bg-white hover:text-gray-900 border border-gray-900 hover:border-brand-gold transition-all duration-300"
            download
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download All Menus
          </a>
        </div>
      </div>
    </div>
  );
}
