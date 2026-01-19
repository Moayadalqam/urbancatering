'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { christmasMenuData } from '@/lib/data/menus';

export default function ChristmasMenuPage() {
  return (
    <div className="py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-brand-gold mb-4">
            {christmasMenuData.name}
          </h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-0.5 bg-gradient-to-r from-brand-gold to-brand-blue mx-auto mb-4"
          />
          <p className="text-gray-600 max-w-2xl mx-auto">
            {christmasMenuData.description}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {christmasMenuData.cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white border-2 border-brand-gold rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
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
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                className="absolute bottom-0 left-0 right-0 bg-white/95 py-3 text-center"
              >
                <h3 className="font-heading text-lg font-semibold text-brand-gold">
                  {card.title}
                </h3>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={christmasMenuData.downloadLink}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white font-bold uppercase tracking-wide hover:bg-white hover:text-gray-900 border border-gray-900 hover:border-brand-gold transition-all duration-300"
            download
          >
            <Download className="w-5 h-5" />
            Download All Menus
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
