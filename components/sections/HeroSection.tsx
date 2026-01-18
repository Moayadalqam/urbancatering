import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  height?: 'sm' | 'md' | 'lg';
  overlayOpacity?: number;
}

const heightClasses = {
  sm: 'h-48 md:h-56',
  md: 'h-64 md:h-80',
  lg: 'h-80 md:h-96',
};

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  height = 'md',
  overlayOpacity = 0.4,
}: HeroSectionProps) {
  return (
    <section className={`relative ${heightClasses[height]} flex items-center justify-center`}>
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content */}
      <div className="relative text-center text-white px-4">
        <h1 className="font-heading text-2xl md:text-4xl font-semibold tracking-wide border-b-2 border-white/80 pb-4 inline-block">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-base md:text-lg opacity-90">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
