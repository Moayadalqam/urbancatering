'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import MenuSlideshow from '@/components/slideshow/MenuSlideshow';
import { menusData } from '@/lib/data/menus';

interface Props {
  params: Promise<{ slug: string }>;
}

export default function MenuPage({ params }: Props) {
  const { slug } = use(params);
  const menu = menusData.find((m) => m.slug === slug);

  if (!menu) {
    notFound();
  }

  return (
    <div className="py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4 text-center mb-8"
      >
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-brand-blue mb-4">
          {menu.name}
        </h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-16 h-0.5 bg-gradient-to-r from-brand-blue to-brand-gold mx-auto mb-4"
        />
        <p className="text-gray-600">{menu.description}</p>
      </motion.div>

      <MenuSlideshow
        images={menu.images}
        downloadLink={menu.downloadLink}
        downloadText={`Download ${menu.name} PDF`}
      />
    </div>
  );
}
