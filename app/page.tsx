'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const corporateImages = [
  { src: 'https://i.ibb.co/Jj5gx2f1/Whats-App-Image-2025-11-10-at-10-22-56-AM.jpg', alt: 'Corporate Setup' },
  { src: 'https://i.ibb.co/WpkR7FBK/Whats-App-Image-2025-11-10-at-10-21-53-AM.jpg', alt: 'Event Presentation' },
  { src: 'https://i.ibb.co/1GtSsmHg/Whats-App-Image-2025-11-10-at-10-21-52-AM-3.jpg', alt: 'Networking' },
  { src: 'https://i.ibb.co/SXNbgjdD/Whats-App-Image-2025-11-10-at-10-21-51-AM-1.jpg', alt: 'Buffet' },
  { src: 'https://i.ibb.co/1tvkrcxz/Whats-App-Image-2025-11-10-at-10-21-52-AM-2.jpg', alt: 'Food Station' },
];

const services = [
  { icon: '💍', title: 'Weddings', description: 'Dream weddings with premium service.', href: '/services/weddings' },
  { icon: '🌳', title: 'Outdoor', description: 'Professional logistics for any venue.', href: '/services/outdoor' },
  { icon: '🍸', title: 'Cocktail Bar', description: 'High-end mobile mixology.', href: '/services/cocktail-bar' },
  { icon: '🍽️', title: 'Private Dining', description: 'Exclusive chefs in your home.', href: '/services/private-chef' },
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
    description: 'Elegant bites and canapés perfect for standing receptions.',
    image: 'https://i.ibb.co/Nx8VsFP/1-3.png',
    href: '/menu/cocktail-fingerfood',
  },
];

const sections = ['welcome', 'corporate', 'about', 'services', 'excellence', 'menus'];

export default function HomePage() {
  const [activeSection, setActiveSection] = useState(0);
  const [sliderIndex, setSliderIndex] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Scroll observer for navigation dots
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-advance corporate slider
  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex((prev) => (prev + 1) % corporateImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0a192f] text-white overflow-x-hidden">
      {/* Navigation Dots */}
      <div className="fixed right-5 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50 hidden md:flex">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              activeSection === index
                ? 'bg-brand-gold scale-150'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>

      {/* Section 1: Welcome */}
      <section
        ref={(el) => { sectionRefs.current[0] = el; }}
        className="min-h-screen w-full flex items-center justify-center text-center relative"
        style={{
          backgroundImage: "url('https://i.ibb.co/cKSmDQ7w/Generated-Image-November-12-2025-2-29-PM.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/60 to-black/70" />
        <div className="relative z-10 px-4">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-lg">
            Urban Catering
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Transforming Nicosia venues into extraordinary gastronomic experiences.
          </p>
        </div>
      </section>

      {/* Section 2: Corporate (White Background) */}
      <section
        ref={(el) => { sectionRefs.current[1] = el; }}
        className="min-h-screen w-full flex items-center justify-center text-center relative py-20"
        style={{
          backgroundImage: "url('https://i.ibb.co/ynCVp7Jg/Generated-Image-November-12-2025-2-36-PM.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-white/[0.92]" />
        <div className="relative z-10 px-4 w-full max-w-6xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0a192f] mb-6 relative inline-block pb-4">
            Corporate Excellence
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-brand-gold to-brand-blue" />
          </h2>
          <p className="text-lg text-[#334e68] font-medium max-w-2xl mx-auto mb-8">
            Elevating business functions with premium catering solutions tailored to your brand identity.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['Professional Setup', 'Customized Menus', 'Seamless Service'].map((badge) => (
              <span
                key={badge}
                className="px-5 py-2 border border-[#0a192f] text-[#0a192f] rounded-full text-sm font-bold uppercase tracking-wide hover:bg-[#0a192f] hover:text-white transition-colors"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Corporate Slider */}
          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${sliderIndex * 100}%)` }}
              >
                {corporateImages.map((img, index) => (
                  <div key={index} className="min-w-full px-2">
                    <div className="h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={800}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Slider Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {corporateImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSliderIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    sliderIndex === index ? 'bg-[#0a192f]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          <Link
            href="/services/corporate"
            className="inline-block mt-10 px-10 py-4 bg-brand-gold text-[#0a192f] font-bold uppercase tracking-wide rounded-full hover:bg-transparent hover:text-[#0a192f] border-2 border-brand-gold transition-colors"
          >
            Explore Solutions
          </Link>
        </div>
      </section>

      {/* Section 3: About */}
      <section
        ref={(el) => { sectionRefs.current[2] = el; }}
        className="min-h-screen w-full flex items-center justify-center text-center relative py-20"
        style={{
          backgroundImage: "url('https://i.ibb.co/NnHY79kR/Generated-Image-November-12-2025-2-39-PM.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#0a192f]/85" />
        <div className="relative z-10 px-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 relative inline-block pb-4">
            The Urban Experience
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-brand-gold to-brand-blue" />
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            As Nicosia&apos;s leading catering company, we specialize in creating unforgettable dining experiences. We don&apos;t just serve food; we curate atmospheres.
          </p>
        </div>
      </section>

      {/* Section 4: Services */}
      <section
        ref={(el) => { sectionRefs.current[3] = el; }}
        className="min-h-screen w-full flex items-center justify-center text-center relative py-20"
        style={{
          backgroundImage: "url('https://i.ibb.co/99xygtjX/Generated-Image-November-12-2025-2-41-PM.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#0a192f]/90" />
        <div className="relative z-10 px-4 w-full max-w-6xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-12 relative inline-block pb-4">
            Our Expertise
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-brand-gold to-brand-blue" />
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group bg-white/[0.03] backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/[0.08] hover:border-brand-gold hover:-translate-y-1 transition-all"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-heading text-xl text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Excellence */}
      <section
        ref={(el) => { sectionRefs.current[4] = el; }}
        className="min-h-screen w-full flex items-center justify-center text-center relative py-20"
        style={{
          backgroundImage: "url('https://i.ibb.co/JQg3dsX/unsplash-image-q-OAzn-SDk-MME.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 relative inline-block pb-4">
            The Urban Standard
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-brand-gold to-brand-blue" />
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            We provide everything needed for your perfect event - from professional equipment to ambient lighting, sophisticated décor to expert staff.
          </p>
        </div>
      </section>

      {/* Section 6: Menus */}
      <section
        ref={(el) => { sectionRefs.current[5] = el; }}
        className="min-h-screen w-full flex items-center justify-center text-center relative py-20"
        style={{
          background: 'linear-gradient(135deg, #0a192f 0%, #112240 100%)',
        }}
      >
        <div className="relative z-10 px-4 w-full max-w-6xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 relative inline-block pb-4">
            Culinary Selections
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-brand-gold to-brand-blue" />
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-12">
            Discover our carefully curated menus.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuCards.map((card, index) => (
              <Link
                key={index}
                href={card.href}
                className="group bg-[#112240] rounded-xl overflow-hidden border border-white/5 hover:border-brand-gold hover:-translate-y-2 transition-all duration-300 shadow-xl"
              >
                <div className="h-64 overflow-hidden bg-black">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-left">
                  <h3 className="font-heading text-xl text-brand-gold mb-2">{card.title}</h3>
                  <p className="text-[#b0c4de] text-sm">{card.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
