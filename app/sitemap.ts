import { MetadataRoute } from 'next';
import { servicesData } from '@/lib/data/services';
import { menusData } from '@/lib/data/menus';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://urbancatering.vercel.app';

  const staticPages = [
    '',
    '/company-profile',
    '/our-chefs',
    '/services',
    '/menu',
    '/contact',
    '/services/equipment-rentals',
    '/menu/christmas',
  ];

  const servicePages = servicesData.map((service) => `/services/${service.slug}`);
  const menuPages = menusData.map((menu) => `/menu/${menu.slug}`);

  const allPages = [...staticPages, ...servicePages, ...menuPages];

  return allPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : route.includes('/services/') || route.includes('/menu/') ? 0.8 : 0.9,
  }));
}
