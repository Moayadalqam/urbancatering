'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Equipment Rentals', href: '/services/equipment-rentals' },
    { name: 'Weddings', href: '/services/weddings' },
    { name: 'Corporate Events', href: '/services/corporate' },
    { name: 'Private Parties', href: '/services/private-parties' },
    { name: 'Kids Parties', href: '/services/kids-parties' },
    { name: 'BBQ Catering', href: '/services/bbq' },
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
    { name: 'Privacy Policy', href: '/privacy-policy' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark-primary text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="https://i.ibb.co/3ytjFrv/Whats-App-Image-2024-10-07-at-18-03-48.jpg"
                alt="Urban Catering Logo"
                width={50}
                height={50}
                className="rounded-full ring-2 ring-transparent group-hover:ring-brand-gold transition-all duration-300"
              />
              <span className="font-heading text-xl font-semibold">
                Urban Catering
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bringing exceptional dining directly to you. From weddings to corporate events,
              we transform any location into an extraordinary gastronomic venue.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-brand-gold" />
                <span>Nicosia, Cyprus</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-brand-gold" />
                <a href="mailto:info@urbancatering.com.cy" className="hover:text-white transition-colors">
                  info@urbancatering.com.cy
                </a>
              </div>
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-heading text-lg font-semibold mb-6 text-brand-gold">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Menus Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-heading text-lg font-semibold mb-6 text-brand-gold">Menus</h3>
            <ul className="space-y-3">
              {footerLinks.menus.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-heading text-lg font-semibold mb-6 text-brand-gold">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-brand-gold text-dark-primary text-sm font-semibold rounded-lg hover:bg-white transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Urban Catering. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="text-gray-500 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-700">|</span>
              <span className="text-gray-500 text-sm">
                Developed and designed by{' '}
                <a
                  href="https://www.qualiasolutions.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-teal hover:text-white transition-colors font-medium relative inline-block glow-teal"
                >
                  Qualia Solutions
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
