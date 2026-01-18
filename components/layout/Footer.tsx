import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  services: [
    { name: 'Weddings', href: '/services/weddings' },
    { name: 'Corporate Events', href: '/services/corporate' },
    { name: 'Private Parties', href: '/services/private-parties' },
    { name: 'Kids Parties', href: '/services/kids-parties' },
    { name: 'BBQ Catering', href: '/services/bbq' },
    { name: 'Equipment Rentals', href: '/services/equipment-rentals' },
  ],
  menus: [
    { name: 'Buffet Menu', href: '/menu/buffet' },
    { name: 'Cocktail & Fingerfood', href: '/menu/cocktail-fingerfood' },
    { name: 'Kids Menu', href: '/menu/kids' },
    { name: 'Christmas Menu', href: '/menu/christmas' },
  ],
  company: [
    { name: 'About Us', href: '/company-profile' },
    { name: 'Our Chefs', href: '/our-chefs' },
    { name: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="https://i.ibb.co/3ytjFrv/Whats-App-Image-2024-10-07-at-18-03-48.jpg"
                alt="Urban Catering Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className="font-heading text-xl font-semibold">
                Urban Catering
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Bringing exceptional dining directly to you. From weddings to corporate events,
              we transform any location into an extraordinary gastronomic venue.
            </p>
            <p className="text-gray-400 text-sm">
              Nicosia, Cyprus
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-brand-teal text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Menus Column */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Menus</h3>
            <ul className="space-y-2">
              {footerLinks.menus.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-brand-teal text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-brand-teal text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-center">
            &copy; {new Date().getFullYear()} Urban Catering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
