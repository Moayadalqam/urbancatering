'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Testimonial from '@/components/sections/Testimonial';

interface ServiceOption {
  title: string;
  description: string;
}

interface TestimonialData {
  quote: string;
  author: string;
}

interface ServicePageTemplateProps {
  serviceName: string;
  tagline: string;
  introText: string;
  features: string[];
  options: ServiceOption[];
  testimonial: TestimonialData;
  ctaTitle: string;
  themeColor: string;
  bgColor: string;
}

export default function ServicePageTemplate({
  serviceName,
  tagline,
  introText,
  features,
  options,
  testimonial,
  ctaTitle,
  themeColor,
  bgColor,
}: ServicePageTemplateProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-20">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        className="text-center mb-16"
      >
        <h1
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          style={{ color: themeColor }}
        >
          {serviceName}
        </h1>
        <div
          className="w-16 h-0.5 mx-auto mb-6"
          style={{ background: `linear-gradient(90deg, ${themeColor}, var(--brand-gold))` }}
        />
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">{tagline}</p>
      </motion.header>

      {/* Intro */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
        className="mb-16"
      >
        <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto text-lg">
          {introText}
        </p>
      </motion.section>

      {/* Features */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2
          className="font-heading text-2xl md:text-3xl font-semibold mb-8"
          style={{ color: themeColor }}
        >
          Our {serviceName} Services Include
        </h2>
        <div className="grid gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-start gap-4 py-4 border-b border-gray-100 group"
            >
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: bgColor }}
              >
                <Check className="w-4 h-4" style={{ color: themeColor }} />
              </div>
              <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{feature}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Options */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2
          className="font-heading text-2xl md:text-3xl font-semibold mb-8"
          style={{ color: themeColor }}
        >
          Catering Styles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {options.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl text-center transition-all duration-300 border"
              style={{
                backgroundColor: bgColor,
                borderColor: themeColor + '30',
              }}
            >
              <h3
                className="font-heading text-xl font-semibold mb-3"
                style={{ color: themeColor }}
              >
                {option.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{option.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonial */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Testimonial
          quote={testimonial.quote}
          author={testimonial.author}
          themeColor={themeColor}
          bgColor={bgColor}
        />
      </motion.div>

      {/* CTA */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mt-16"
      >
        <h2
          className="font-heading text-2xl md:text-3xl font-semibold mb-6"
          style={{ color: themeColor }}
        >
          {ctaTitle}
        </h2>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-lg transition-all duration-300 hover:opacity-90"
            style={{ backgroundColor: themeColor }}
          >
            Contact Us for a Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </motion.footer>
    </div>
  );
}
