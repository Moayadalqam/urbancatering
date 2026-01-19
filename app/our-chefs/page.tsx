'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Leaf, Lightbulb, Globe, Quote } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import CTASection from '@/components/sections/CTASection';

const philosophy = [
  {
    title: 'Locally Sourced',
    description: 'Supporting our community with the freshest ingredients.',
    icon: Leaf,
  },
  {
    title: 'Innovative Techniques',
    description: 'Blending tradition with cutting-edge culinary methods.',
    icon: Lightbulb,
  },
  {
    title: 'Global Fusion',
    description: 'Bringing world flavors to your plate.',
    icon: Globe,
  },
];

const chefs = [
  {
    name: 'Marios Malekkos',
    title: 'Executive Chef at Bao Pau Cyprus',
    specialty: 'Japanese Cuisine Expert',
    quote: 'Crafting authentic Japanese Peruvian Cuisine is about respecting tradition while embracing innovation in every dish.',
    image: 'https://i.ibb.co/PrcGPS4/Whats-App-Image-2025-01-22-at-18-50-01.jpg',
    signatureDishes: [
      'Traditional Japanese Omakase',
      'Modern Bao Creations',
      'Premium Chef\'s Table Experience',
    ],
  },
  {
    name: 'Ioannis Pratikakis',
    title: 'Executive Chef',
    specialty: 'Private BBQ Events Specialist',
    quote: 'Creating memories through flavors is not just a profession, it\'s an art form that touches people\'s hearts.',
    image: 'https://i.ibb.co/JCP6q9F/Untitled-draft-3.jpg',
    signatureDishes: [
      'Dry-Aged Tomahawk Steak',
      'Cedar Plank Grilled Salmon',
      'Herb-Crusted Rack of Lamb',
    ],
  },
  {
    name: 'Theodoros Eleftheriou',
    title: 'Executive Chef',
    specialty: 'Brunch Cuisine Specialist',
    quote: 'Love what you do, do it with passion, and remember to smile in the process.',
    image: 'https://i.ibb.co/56Jyqjc/Love-what-you-do-do-it-with-passion-and-remember-to-smile-in-the-process.jpg',
    signatureDishes: [
      'Eggs Benedict with Cypriot Halloumi',
      'Mediterranean Breakfast Board',
      'Orange Blossom French Toast',
    ],
  },
];

export default function OurChefsPage() {
  return (
    <>
      <HeroSection
        title="Our Chefs"
        subtitle="Masters of Urban Catering In Nicosia, Cyprus"
        backgroundImage="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=2077&auto=format&fit=crop"
        height="md"
        overlayOpacity={0.5}
      />

      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column - Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3 lg:border-r lg:border-gray-200 lg:pr-12"
          >
            <h2 className="font-heading text-xl font-semibold pb-4 border-b border-gray-200 mb-6">
              Our Philosophy
            </h2>
            <div className="space-y-6">
              {philosophy.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-brand-blue/10 rounded-lg flex items-center justify-center group-hover:bg-brand-blue/20 transition-colors duration-300">
                      <IconComponent className="w-4 h-4 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Chef Profiles */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-2/3"
          >
            <h2 className="font-heading text-xl font-semibold pb-4 border-b border-gray-200 mb-8">
              Executive Team
            </h2>

            <div className="space-y-12">
              {chefs.map((chef, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex flex-col md:flex-row gap-6 pb-10 border-b border-gray-200 last:border-b-0 last:pb-0"
                >
                  {/* Chef Image */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="md:w-48 flex-shrink-0"
                  >
                    <Image
                      src={chef.image}
                      alt={chef.name}
                      width={200}
                      height={200}
                      className="w-full h-48 md:h-52 object-cover rounded grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                    />
                  </motion.div>

                  {/* Chef Details */}
                  <div className="flex-1 space-y-3">
                    <div>
                      <h2 className="font-heading text-xl md:text-2xl font-semibold text-gray-900">
                        {chef.name}
                      </h2>
                      <p className="text-sm text-gray-600 uppercase tracking-wide">
                        {chef.title}
                      </p>
                    </div>

                    <span className="inline-block text-xs font-semibold text-gray-800 bg-gray-100 px-3 py-1 rounded">
                      {chef.specialty}
                    </span>

                    <blockquote className="text-gray-600 text-sm italic border-l-2 border-brand-blue pl-3 my-3 flex items-start gap-2">
                      <Quote className="w-4 h-4 text-brand-blue/40 flex-shrink-0 mt-0.5" />
                      <span>{chef.quote}</span>
                    </blockquote>

                    <div>
                      <h5 className="font-semibold text-sm text-gray-900 mb-2">
                        Signature Creations
                      </h5>
                      <ul className="space-y-1">
                        {chef.signatureDishes.map((dish, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            className="text-sm text-gray-600 flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-brand-blue rounded-full" />
                            {dish}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <CTASection
        title="Experience Culinary Excellence"
        description="Let our talented chefs create an unforgettable experience for your next event."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </>
  );
}
