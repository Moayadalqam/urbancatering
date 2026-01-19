'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ChefHat, Tent, Wine, MapPin } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import CTASection from '@/components/sections/CTASection';

const features = [
  {
    title: 'Culinary Excellence',
    description: 'Our team of skilled chefs is dedicated to creating a feast for the senses, preparing sumptuous dishes that capture the local flavor with a sophisticated twist.',
    icon: ChefHat,
  },
  {
    title: 'Complete Event Services',
    description: 'We provide comprehensive event services including custom bar setups, stylish tents, elegant lighting, and bespoke furniture to set the perfect mood.',
    icon: Tent,
  },
  {
    title: 'Beverage Mastery',
    description: 'Our adept bartending team excels in crafting an extensive range of beverages, from bespoke cocktails featuring top-shelf spirits to a thoughtful selection of wines and artisanal juices.',
    icon: Wine,
  },
  {
    title: 'Any Location',
    description: 'Whether it is a private residence, a corporate hall, or an outdoor venue, we adapt our services to fit the unique logistics of your chosen location.',
    icon: MapPin,
  },
];

const featureGridItems = features.map(f => ({ title: f.title, description: f.description }));

const services = [
  {
    name: 'Weddings',
    description: 'Elevate your special day with exquisite cuisine',
    href: '/services/weddings',
    color: 'bg-brand-blue',
  },
  {
    name: 'Corporate Events',
    description: 'Professional catering for business occasions',
    href: '/services/corporate',
    color: 'bg-brand-blue',
  },
  {
    name: 'Private Parties',
    description: 'Memorable celebrations with gourmet menus',
    href: '/services/private-parties',
    color: 'bg-service-private',
  },
  {
    name: 'Kids Parties',
    description: 'Fun and delicious food for young guests',
    href: '/services/kids-parties',
    color: 'bg-service-kids',
  },
  {
    name: 'BBQ Catering',
    description: 'Smoky flavors for outdoor gatherings',
    href: '/services/bbq',
    color: 'bg-service-bbq',
  },
  {
    name: 'Equipment Rentals',
    description: 'Premium catering equipment for your events',
    href: '/services/equipment-rentals',
    color: 'bg-brand-gold',
  },
];

export default function CompanyProfilePage() {
  return (
    <>
      <HeroSection
        title="Urban Catering"
        subtitle="Premium Event Catering in Nicosia, Cyprus"
        backgroundImage="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop"
        height="lg"
        overlayOpacity={0.5}
      />

      {/* Introduction */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16 px-4 max-w-4xl mx-auto text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-2xl md:text-3xl font-semibold text-gray-900 mb-6"
        >
          Exceptional Dining, Anywhere
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-16 h-0.5 bg-gradient-to-r from-brand-blue to-brand-gold mx-auto mb-6"
        />
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-600 leading-relaxed"
        >
          Urban Catering brings the essence of exceptional Nicosia dining directly to you,
          transforming any location into an extraordinary gastronomic venue. From sun-drenched
          beach celebrations to elegant garden soirees and high-profile corporate events,
          we ensure a seamless experience that encapsulates the spirit of your occasion.
        </motion.p>
      </motion.section>

      {/* Company Profile Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column - Intro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3 lg:border-r lg:border-gray-200 lg:pr-12"
          >
            <div className="flex items-center gap-3 pb-4 border-b border-gray-200 mb-6">
              <Image
                src="https://i.ibb.co/3ytjFrv/Whats-App-Image-2024-10-07-at-18-03-48.jpg"
                alt="Urban Catering Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <h2 className="font-heading text-xl font-semibold">About Us</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed text-justify">
              Urban Catering brings the essence of exceptional Nicosia catering & dining directly to you, transforming any location into an extraordinary gastronomic venue.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed text-justify mt-4">
              From sun-drenched beach celebrations to elegant garden soirees and high-profile corporate events, we ensure a seamless experience that encapsulates the spirit of your occasion.
            </p>
          </motion.div>

          {/* Right Column - Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-2/3"
          >
            <FeatureGrid items={featureGridItems} columns={2} />
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-10"
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={service.href}
                  className="group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <motion.div
                    className={`${service.color} h-2`}
                    whileHover={{ height: '0.75rem' }}
                    transition={{ duration: 0.2 }}
                  />
                  <div className="p-6">
                    <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-8"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-teal font-medium text-sm transition-colors"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-10"
          >
            Why Choose Urban Catering
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex-shrink-0 w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center group-hover:bg-brand-blue/20 transition-colors duration-300"
                  >
                    <IconComponent className="w-5 h-5 text-brand-blue" />
                  </motion.div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Partner With Us"
        description="Interested in creating extraordinary experiences together?"
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </>
  );
}
