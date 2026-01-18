'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/company-profile' },
  { name: 'Our Chefs', href: '/our-chefs' },
  {
    name: 'Services',
    href: '/services',
    children: [
      { name: 'Weddings', href: '/services/weddings' },
      { name: 'Corporate', href: '/services/corporate' },
      { name: 'Private Parties', href: '/services/private-parties' },
      { name: 'Kids Parties', href: '/services/kids-parties' },
      { name: 'BBQ', href: '/services/bbq' },
      { name: 'Outdoor', href: '/services/outdoor' },
      { name: 'Coffee', href: '/services/coffee' },
      { name: 'Cocktail Bar', href: '/services/cocktail-bar' },
      { name: 'Candy Bar', href: '/services/candy-bar' },
      { name: 'Christenings', href: '/services/christenings' },
      { name: 'Private Chef', href: '/services/private-chef' },
      { name: 'Equipment Rentals', href: '/services/equipment-rentals' },
    ],
  },
  {
    name: 'Menus',
    href: '/menu',
    children: [
      { name: 'Buffet Menu', href: '/menu/buffet' },
      { name: 'Cocktail & Fingerfood', href: '/menu/cocktail-fingerfood' },
      { name: 'Kids Menu', href: '/menu/kids' },
      { name: 'Christmas Menu', href: '/menu/christmas' },
    ],
  },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://i.ibb.co/3ytjFrv/Whats-App-Image-2024-10-07-at-18-03-48.jpg"
              alt="Urban Catering Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="font-heading text-xl font-semibold text-gray-900">
              Urban Catering
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-brand-blue transition-colors py-2"
                >
                  {item.name}
                </Link>
                {item.children && openDropdown === item.name && (
                  <div className="absolute left-0 top-full pt-2 w-48">
                    <div className="bg-white border border-gray-200 rounded-md shadow-lg py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-blue"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block py-2 text-base font-medium text-gray-700 hover:text-brand-blue"
                  onClick={() => !item.children && setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block py-1.5 text-sm text-gray-600 hover:text-brand-blue"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
