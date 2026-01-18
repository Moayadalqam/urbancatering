import type { Metadata } from 'next';
import { Playfair_Display, Raleway } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Urban Catering | Premium Event Catering in Nicosia, Cyprus',
    template: '%s | Urban Catering',
  },
  description: 'Urban Catering brings exceptional dining directly to you. From weddings to corporate events, we transform any location into an extraordinary gastronomic venue in Nicosia, Cyprus.',
  keywords: ['catering', 'Nicosia', 'Cyprus', 'wedding catering', 'corporate catering', 'event catering'],
  openGraph: {
    title: 'Urban Catering | Premium Event Catering',
    description: 'Exceptional catering services in Nicosia, Cyprus',
    locale: 'en_CY',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${raleway.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
