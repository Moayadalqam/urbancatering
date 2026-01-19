'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Heart, Building2, Martini, ChefHat, ArrowRight, ArrowDown } from 'lucide-react';

const corporateImages = [
  { src: 'https://i.ibb.co/Jj5gx2f1/Whats-App-Image-2025-11-10-at-10-22-56-AM.jpg', alt: 'Corporate Setup' },
  { src: 'https://i.ibb.co/WpkR7FBK/Whats-App-Image-2025-11-10-at-10-21-53-AM.jpg', alt: 'Event Presentation' },
  { src: 'https://i.ibb.co/1GtSsmHg/Whats-App-Image-2025-11-10-at-10-21-52-AM-3.jpg', alt: 'Networking' },
  { src: 'https://i.ibb.co/SXNbgjdD/Whats-App-Image-2025-11-10-at-10-21-51-AM-1.jpg', alt: 'Buffet' },
  { src: 'https://i.ibb.co/1tvkrcxz/Whats-App-Image-2025-11-10-at-10-21-52-AM-2.jpg', alt: 'Food Station' },
];

const services = [
  { icon: Heart, title: 'Weddings', description: 'Dream weddings with premium service.', href: '/services/weddings' },
  { icon: Building2, title: 'Corporate', description: 'Professional business catering.', href: '/services/corporate' },
  { icon: Martini, title: 'Cocktail Bar', description: 'High-end mobile mixology.', href: '/services/cocktail-bar' },
  { icon: ChefHat, title: 'Private Chef', description: 'Exclusive dining at home.', href: '/services/private-chef' },
];

const menuCards = [
  {
    title: 'Buffet & Breakfast',
    description: 'Complete dining solutions for large groups and morning events.',
    image: 'https://i.ibb.co/jv3hy5Xv/357-97464614.png',
    href: '/menu/buffet',
  },
  {
    title: 'Kids Parties',
    description: 'Fun, delicious, and healthy options for the little ones.',
    image: 'https://i.ibb.co/LR5PVtN/1-4.png',
    href: '/menu/kids',
  },
  {
    title: 'Cocktail & Finger Food',
    description: 'Elegant bites and canapes perfect for standing receptions.',
    image: 'https://i.ibb.co/Nx8VsFP/1-3.png',
    href: '/menu/cocktail-fingerfood',
  },
];

const stats = [
  { value: '500+', label: 'Events Catered' },
  { value: '15+', label: 'Years Experience' },
  { value: '50+', label: 'Menu Options' },
  { value: '100%', label: 'Client Satisfaction' },
];

function SectionTitle({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
      className="text-center mb-12 md:mb-16"
    >
      <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${light ? 'text-white' : 'text-dark-primary'}`}>
        {children}
      </h2>
      <div className="w-16 h-0.5 bg-gradient-to-r from-brand-gold to-brand-blue mx-auto" />
    </motion.div>
  );
}

export default function HomePage() {
  const [sliderIndex, setSliderIndex] = useState(0);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Auto-advance corporate slider
  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex((prev) => (prev + 1) % corporateImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white overflow-x-hidden -mt-20">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Parallax Background */}
        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
        >
          <Image
            src="https://i.ibb.co/cKSmDQ7w/Generated-Image-November-12-2025-2-29-PM.png"
            alt="Urban Catering Hero"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-primary/70 via-dark-primary/50 to-dark-primary/80" />

        {/* Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/90 mb-6 border border-white/20">
              Premium Event Catering in Nicosia
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.19, 1, 0.22, 1] }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
          >
            Urban Catering
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.19, 1, 0.22, 1] }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10"
          >
            Transforming venues into extraordinary gastronomic experiences. From intimate gatherings to grand celebrations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.19, 1, 0.22, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="px-8 py-4 bg-brand-gold text-dark-primary font-semibold rounded-lg hover:bg-white transition-colors duration-300"
            >
              Get a Quote
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/30 hover:bg-white/20 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Explore Services <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center text-white/60"
          >
            <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dark-primary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-heading font-bold text-brand-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle>Corporate Excellence</SectionTitle>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
          >
            Elevating business functions with premium catering solutions tailored to your brand identity.
          </motion.p>

          {/* Corporate Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {['Professional Setup', 'Customized Menus', 'Seamless Service'].map((badge, index) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-5 py-2.5 border border-dark-primary text-dark-primary rounded-full text-sm font-medium uppercase tracking-wide hover:bg-dark-primary hover:text-white transition-all duration-300 cursor-default"
              >
                {badge}
              </motion.span>
            ))}
          </motion.div>

          {/* Corporate Slider */}
          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${sliderIndex * 100}%)` }}
              >
                {corporateImages.map((img, index) => (
                  <div key={index} className="min-w-full">
                    <div className="aspect-[16/9] relative">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1280px) 100vw, 1280px"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {corporateImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSliderIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    sliderIndex === index
                      ? 'bg-brand-gold w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/services/corporate"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-dark-primary font-semibold rounded-lg hover:bg-dark-primary hover:text-white transition-all duration-300"
            >
              Explore Corporate Solutions <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('https://i.ibb.co/NnHY79kR/Generated-Image-November-12-2025-2-39-PM.png')" }}
        />
        <div className="absolute inset-0 bg-dark-primary/90" />

        <div className="relative z-10 container-custom">
          <SectionTitle light>The Urban Experience</SectionTitle>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            As Nicosia&apos;s leading catering company, we specialize in creating unforgettable dining experiences.
            We don&apos;t just serve food; we curate atmospheres that leave lasting impressions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center mt-10"
          >
            <Link
              href="/company-profile"
              className="inline-flex items-center gap-2 text-brand-gold font-medium hover:text-white transition-colors"
            >
              Learn More About Us <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle>Our Expertise</SectionTitle>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={service.href}
                    className="group block p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-brand-gold hover:shadow-xl transition-all duration-500"
                  >
                    <div className="w-14 h-14 bg-dark-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-gold/10 transition-colors">
                      <Icon className="w-7 h-7 text-dark-primary group-hover:text-brand-gold transition-colors" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-dark-primary mb-2 group-hover:text-brand-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-brand-blue font-medium hover:text-brand-gold transition-colors"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="section-padding relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('https://i.ibb.co/JQg3dsX/unsplash-image-q-OAzn-SDk-MME.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 container-custom text-center">
          <SectionTitle light>The Urban Standard</SectionTitle>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            We provide everything needed for your perfect event - from professional equipment to ambient lighting,
            sophisticated decor to expert staff. Every detail is meticulously planned.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10"
          >
            <Link
              href="/services/equipment-rentals"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-dark-primary font-semibold rounded-lg hover:bg-white transition-colors duration-300"
            >
              Explore Equipment <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="section-padding bg-dark-primary">
        <div className="container-custom">
          <SectionTitle light>Culinary Selections</SectionTitle>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 max-w-2xl mx-auto mb-12"
          >
            Discover our carefully curated menus designed for every occasion.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Link
                  href={card.href}
                  className="group block bg-dark-secondary rounded-2xl overflow-hidden border border-white/5 hover:border-brand-gold transition-all duration-500"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/80 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl text-brand-gold mb-2 group-hover:text-white transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{card.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 text-brand-gold font-medium hover:text-white transition-colors"
            >
              Browse All Menus <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-teal">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Create Something Extraordinary?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Let us transform your next event into an unforgettable experience.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-brand-blue font-semibold rounded-lg hover:bg-brand-gold hover:text-dark-primary transition-all duration-300"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
