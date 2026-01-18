'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="font-heading text-4xl font-bold text-gray-900 mb-4">
          Something went wrong
        </h1>
        <p className="text-gray-600 mb-8">
          We apologize for the inconvenience. Please try again or contact us if the problem persists.
        </p>
        <div className="space-x-4">
          <button
            onClick={reset}
            className="bg-brand-blue text-white font-semibold py-3 px-6 rounded hover:bg-brand-teal transition-colors"
          >
            Try Again
          </button>
          <a
            href="/"
            className="inline-block bg-gray-100 text-gray-900 font-semibold py-3 px-6 rounded hover:bg-gray-200 transition-colors"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}
