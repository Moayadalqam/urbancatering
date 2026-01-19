'use client';

import { motion } from 'framer-motion';

interface FeatureItem {
  title: string;
  description: string;
}

interface FeatureGridProps {
  items: FeatureItem[];
  columns?: 2 | 3 | 4;
}

export default function FeatureGrid({ items, columns = 2 }: FeatureGridProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid grid-cols-1 ${gridCols[columns]} gap-8 md:gap-10`}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="space-y-3 group"
        >
          <h3 className="font-heading text-lg font-semibold text-gray-900 pb-3 border-b border-gray-200 group-hover:border-brand-blue transition-colors duration-300">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
