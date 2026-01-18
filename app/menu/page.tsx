import { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/sections/HeroSection';
import { menusData, christmasMenuData } from '@/lib/data/menus';

export const metadata: Metadata = {
  title: 'Our Menus',
  description: 'Explore Urban Catering\'s diverse menu options including buffet, cocktail, kids, and seasonal menus.',
};

const allMenus = [
  ...menusData,
  {
    slug: christmasMenuData.slug,
    name: christmasMenuData.name,
    description: christmasMenuData.description,
  },
];

export default function MenusPage() {
  return (
    <>
      <HeroSection
        title="Our Menus"
        subtitle="Discover Our Culinary Offerings"
        backgroundImage="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop"
        height="sm"
      />

      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Browse through our carefully crafted menus designed to delight every palate.
          Download our menu PDFs for detailed options and pricing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allMenus.map((menu) => (
            <Link
              key={menu.slug}
              href={`/menu/${menu.slug}`}
              className="group block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-brand-blue transition-all duration-300"
            >
              <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors">
                {menu.name}
              </h3>
              <p className="text-gray-600 text-sm">{menu.description}</p>
              <span className="inline-block mt-4 text-brand-blue text-sm font-medium">
                View Menu →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
