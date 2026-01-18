import { Metadata } from 'next';
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

export default function CompanyProfilePage() {
  return (
    <>
      <HeroSection
        title="Urban Catering"
        backgroundImage="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop"
        height="md"
      />

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

      <CTASection
        title="Partner With Us"
        description="Interested in creating extraordinary experiences together?"
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </>
  );
}
