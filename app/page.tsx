import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/sections/HeroSection';
import CTASection from '@/components/sections/CTASection';

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

const highlights = [
  {
    title: 'Culinary Excellence',
    description: 'Our team of skilled chefs creates sumptuous dishes that capture local flavor with a sophisticated twist.',
  },
  {
    title: 'Complete Event Services',
    description: 'Custom bar setups, stylish tents, elegant lighting, and bespoke furniture to set the perfect mood.',
  },
  {
    title: 'Beverage Mastery',
    description: 'Bespoke cocktails featuring top-shelf spirits, fine wines, and artisanal beverages.',
  },
  {
    title: 'Any Location',
    description: 'Private residences, corporate halls, or outdoor venues - we adapt to your chosen location.',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
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

      {/* Highlights */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-10">
            Why Choose Urban Catering
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((item, index) => (
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

      {/* CTA */}
      <CTASection
        title="Ready to Create an Extraordinary Event?"
        description="Let our team craft a memorable culinary experience for your next occasion."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </>
  );
}
