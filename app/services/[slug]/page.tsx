import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServicePageTemplate from '@/components/pages/ServicePageTemplate';
import { servicesData } from '@/lib/data/services';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: service.name,
    description: service.introText.slice(0, 160),
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <ServicePageTemplate
      serviceName={service.name}
      tagline={service.tagline}
      introText={service.introText}
      features={service.features}
      options={service.options}
      testimonial={service.testimonial}
      ctaTitle={service.ctaTitle}
      themeColor={service.themeColor}
      bgColor={service.bgColor}
    />
  );
}
