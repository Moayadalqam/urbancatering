import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/sections/HeroSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Urban Catering brings exceptional Nicosia dining directly to you, transforming any location into an extraordinary gastronomic venue.',
};

const features = [
  {
    title: 'Culinary Excellence',
    description: 'Our team of skilled chefs is dedicated to creating a feast for the senses, preparing sumptuous dishes that capture the local flavor with a sophisticated twist.',
  },
  {
    title: 'Complete Event Services',
    description: 'We provide comprehensive event services including custom bar setups, stylish tents, elegant lighting, and bespoke furniture to set the perfect mood.',
  },
  {
    title: 'Beverage Mastery',
    description: 'Our adept bartending team excels in crafting an extensive range of beverages, from bespoke cocktails featuring top-shelf spirits to a thoughtful selection of wines and artisanal juices.',
  },
  {
    title: 'Any Location',
    description: 'Whether it is a private residence, a corporate hall, or an outdoor venue, we adapt our services to fit the unique logistics of your chosen location.',
  },
];

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
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
          Exceptional Dining, Anywhere
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Urban Catering brings the essence of exceptional Nicosia dining directly to you,
          transforming any location into an extraordinary gastronomic venue. From sun-drenched
          beach celebrations to elegant garden soirees and high-profile corporate events,
          we ensure a seamless experience that encapsulates the spirit of your occasion.
        </p>
      </section>

      {/* Company Profile Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column - Intro */}
          <div className="lg:w-1/3 lg:border-r lg:border-gray-200 lg:pr-12">
            <div className="flex items-center gap-3 pb-4 border-b border-gray-200 mb-6">
              <Image
                src="https://i.ibb.co/3ytjFrv/Whats-App-Image-2024-10-07-at-18-03-48.jpg"
                alt="Urban Catering Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <h2 className="font-heading text-xl font-semibold">Company Profile</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed text-justify">
              Urban Catering brings the essence of exceptional Nicosia catering & dining directly to you, transforming any location into an extraordinary gastronomic venue.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed text-justify mt-4">
              From sun-drenched beach celebrations to elegant garden soirees and high-profile corporate events, we ensure a seamless experience that encapsulates the spirit of your occasion.
            </p>
          </div>

          {/* Right Column - Features */}
          <div className="lg:w-2/3">
            <FeatureGrid items={features} columns={2} />
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-10">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className={`${service.color} h-2`} />
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-block text-brand-blue hover:text-brand-teal font-medium text-sm transition-colors"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-10">
            Why Choose Urban Catering
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center">
                  <span className="text-brand-blue font-heading font-bold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
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
