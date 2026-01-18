import Link from 'next/link';

interface CTASectionProps {
  title: string;
  description?: string;
  buttonText: string;
  buttonLink: string;
  variant?: 'light' | 'brand';
}

export default function CTASection({
  title,
  description,
  buttonText,
  buttonLink,
  variant = 'light',
}: CTASectionProps) {
  const bgClass = variant === 'light' ? 'bg-gray-50' : 'bg-brand-blue';
  const textClass = variant === 'light' ? 'text-gray-900' : 'text-white';
  const descClass = variant === 'light' ? 'text-gray-600' : 'text-white/80';
  const buttonClass =
    variant === 'light'
      ? 'border-gray-900 text-gray-900 hover:bg-brand-teal hover:text-white hover:border-brand-teal'
      : 'border-white text-white hover:bg-white hover:text-brand-blue';

  return (
    <section className={`${bgClass} py-12 md:py-16 px-4 border-t border-gray-200`}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className={`font-heading text-xl md:text-2xl font-semibold mb-4 ${textClass}`}>
          {title}
        </h2>
        {description && (
          <p className={`text-sm md:text-base mb-6 ${descClass}`}>{description}</p>
        )}
        <Link
          href={buttonLink}
          className={`inline-block px-8 py-3 border font-semibold text-sm transition-all duration-300 ${buttonClass}`}
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
