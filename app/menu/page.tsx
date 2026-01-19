'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, UtensilsCrossed } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import { menusData, christmasMenuData } from '@/lib/data/menus';

const allMenus = [
  ...menusData,
  {
    slug: christmasMenuData.slug,
    name: christmasMenuData.name,
    description: christmasMenuData.description,
  },
];

export default function MenusPage() {
  return (
    <>
      <HeroSection
        title="Our Menus"
        subtitle="Discover Our Culinary Offerings"
        backgroundImage="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop"
        height="sm"
      />

      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-gray-600 max-w-2xl mx-auto mb-4"
        >
          Browse through our carefully crafted menus designed to delight every palate.
          Download our menu PDFs for detailed options and pricing.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-16 h-0.5 bg-gradient-to-r from-brand-blue to-brand-gold mx-auto mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allMenus.map((menu, index) => (
            <motion.div
              key={menu.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/menu/${menu.slug}`}
                className="group block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-brand-blue transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center group-hover:bg-brand-blue/20 transition-colors duration-300 flex-shrink-0">
                    <UtensilsCrossed className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors">
                      {menu.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{menu.description}</p>
                    <span className="inline-flex items-center gap-2 text-brand-blue text-sm font-medium group-hover:gap-3 transition-all duration-300">
                      View Menu <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
