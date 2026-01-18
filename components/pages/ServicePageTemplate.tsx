import Link from 'next/link';
import Testimonial from '@/components/sections/Testimonial';

interface ServiceOption {
  title: string;
  description: string;
}

interface TestimonialData {
  quote: string;
  author: string;
}

interface ServicePageTemplateProps {
  serviceName: string;
  tagline: string;
  introText: string;
  features: string[];
  options: ServiceOption[];
  testimonial: TestimonialData;
  ctaTitle: string;
  themeColor: string;
  bgColor: string;
}

export default function ServicePageTemplate({
  serviceName,
  tagline,
  introText,
  features,
  options,
  testimonial,
  ctaTitle,
  themeColor,
  bgColor,
}: ServicePageTemplateProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 md:py-16">
      {/* Header */}
      <header className="text-center mb-10">
        <h1
          className="font-heading text-3xl md:text-4xl font-bold mb-3"
          style={{ color: themeColor }}
        >
          {serviceName}
        </h1>
        <p className="text-gray-600 text-lg">{tagline}</p>
      </header>

      {/* Intro */}
      <section className="mb-10">
        <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
          {introText}
        </p>
      </section>

      {/* Features */}
      <section className="mb-10">
        <h2
          className="font-heading text-2xl font-semibold mb-6"
          style={{ color: themeColor }}
        >
          Our {serviceName} Services Include:
        </h2>
        <ul className="space-y-0">
          {features.map((feature, index) => (
            <li
              key={index}
              className="py-3 border-b border-gray-200 text-gray-700"
            >
              {feature}
            </li>
          ))}
        </ul>
      </section>

      {/* Options */}
      <section className="mb-10">
        <h2
          className="font-heading text-2xl font-semibold mb-6"
          style={{ color: themeColor }}
        >
          Catering Styles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {options.map((option, index) => (
            <div
              key={index}
              className="p-5 rounded-lg text-center"
              style={{
                backgroundColor: bgColor,
                border: `1px solid ${themeColor}`,
              }}
            >
              <h3
                className="font-heading text-lg font-semibold mb-2"
                style={{ color: themeColor }}
              >
                {option.title}
              </h3>
              <p className="text-gray-600 text-sm">{option.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <Testimonial
        quote={testimonial.quote}
        author={testimonial.author}
        themeColor={themeColor}
        bgColor={bgColor}
      />

      {/* CTA */}
      <footer className="text-center mt-12">
        <h2
          className="font-heading text-xl md:text-2xl font-semibold mb-4"
          style={{ color: themeColor }}
        >
          {ctaTitle}
        </h2>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 text-white font-semibold text-sm rounded transition-all duration-300 hover:opacity-90"
          style={{ backgroundColor: themeColor }}
        >
          Contact Us for a Consultation
        </Link>
      </footer>
    </div>
  );
}
