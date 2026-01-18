import { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/sections/HeroSection';
import { servicesData } from '@/lib/data/services';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore Urban Catering\'s comprehensive range of catering services in Nicosia, Cyprus. From weddings to corporate events, we have you covered.',
};

const additionalServices = [
  {
    slug: 'equipment-rentals',
    name: 'Equipment Rentals',
    tagline: 'Premium catering equipment for your events',
    themeColor: '#D4AF37',
  },
];

const allServices = [...servicesData, ...additionalServices];

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        title="Our Services"
        subtitle="Comprehensive Catering Solutions for Every Occasion"
        backgroundImage="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop"
        height="sm"
      />

      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          From intimate gatherings to grand celebrations, Urban Catering offers a complete range
          of catering services tailored to your needs. Explore our offerings below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allServices.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div
                className="h-2"
                style={{ backgroundColor: service.themeColor }}
              />
              <div className="p-6">
                <h3
                  className="font-heading text-lg font-semibold mb-2 group-hover:opacity-80 transition-opacity"
                  style={{ color: service.themeColor }}
                >
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm">{service.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
