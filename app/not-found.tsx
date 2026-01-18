import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="font-heading text-6xl font-bold text-brand-blue mb-4">
          404
        </h1>
        <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let us help you find what you need.
        </p>
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-brand-blue text-white font-semibold py-3 px-8 rounded hover:bg-brand-teal transition-colors"
          >
            Back to Home
          </Link>
          <div className="text-sm text-gray-500">
            Or explore our{' '}
            <Link href="/services" className="text-brand-blue hover:text-brand-teal">
              services
            </Link>{' '}
            or{' '}
            <Link href="/menu" className="text-brand-blue hover:text-brand-teal">
              menus
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
