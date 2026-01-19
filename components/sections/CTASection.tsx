'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title: string;
  description?: string;
  buttonText: string;
  buttonLink: string;
  variant?: 'light' | 'brand';
}

export default function CTASection({
  title,
  description,
  buttonText,
  buttonLink,
  variant = 'light',
}: CTASectionProps) {
  const bgClass = variant === 'light' ? 'bg-gray-50' : 'bg-brand-blue';
  const textClass = variant === 'light' ? 'text-gray-900' : 'text-white';
  const descClass = variant === 'light' ? 'text-gray-600' : 'text-white/80';
  const buttonClass =
    variant === 'light'
      ? 'border-gray-900 text-gray-900 hover:bg-brand-teal hover:text-white hover:border-brand-teal'
      : 'border-white text-white hover:bg-white hover:text-brand-blue';

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${bgClass} py-12 md:py-16 px-4 border-t border-gray-200`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`font-heading text-xl md:text-2xl font-semibold mb-4 ${textClass}`}
        >
          {title}
        </motion.h2>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-sm md:text-base mb-6 ${descClass}`}
          >
            {description}
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Link
              href={buttonLink}
              className={`inline-flex items-center gap-2 px-8 py-3 border font-semibold text-sm transition-all duration-300 ${buttonClass}`}
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
