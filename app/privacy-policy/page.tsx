import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Urban Catering - How we handle your personal data.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
      <h1 className="font-heading text-4xl font-bold text-gray-900 mb-8">
        Privacy Policy
      </h1>

      <div className="prose prose-gray max-w-none">
        <p className="text-gray-600 mb-6">
          <strong>Last updated:</strong> January 2026
        </p>

        <p className="text-gray-600 mb-6">
          Urban Catering (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, and safeguard your information when you
          visit our website or use our services.
        </p>

        <h2 className="font-heading text-2xl font-semibold text-gray-900 mt-8 mb-4">
          1. Information We Collect
        </h2>
        <p className="text-gray-600 mb-4">
          We collect information you provide directly to us, including:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
          <li>Name and contact information (email address)</li>
          <li>Event type and details you share in your inquiry</li>
          <li>Any other information you choose to provide in your message</li>
        </ul>

        <h2 className="font-heading text-2xl font-semibold text-gray-900 mt-8 mb-4">
          2. How We Use Your Information
        </h2>
        <p className="text-gray-600 mb-4">
          We use the information we collect to:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
          <li>Respond to your inquiries and communicate with you about our services</li>
          <li>Provide, maintain, and improve our catering services</li>
          <li>Send you information about events and services you may be interested in</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2 className="font-heading text-2xl font-semibold text-gray-900 mt-8 mb-4">
          3. Data Retention
        </h2>
        <p className="text-gray-600 mb-6">
          We retain your personal information for as long as necessary to fulfill the purposes
          for which it was collected, including to satisfy any legal, accounting, or reporting
          requirements. Contact form submissions are retained for up to 2 years unless you
          request deletion.
        </p>

        <h2 className="font-heading text-2xl font-semibold text-gray-900 mt-8 mb-4">
          4. Your Rights Under GDPR
        </h2>
        <p className="text-gray-600 mb-4">
          As we operate in Cyprus (European Union), you have the following rights under GDPR:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
          <li><strong>Right of Access:</strong> You can request a copy of your personal data</li>
          <li><strong>Right to Rectification:</strong> You can request correction of inaccurate data</li>
          <li><strong>Right to Erasure:</strong> You can request deletion of your personal data</li>
          <li><strong>Right to Data Portability:</strong> You can request your data in a portable format</li>
          <li><strong>Right to Object:</strong> You can object to certain processing of your data</li>
          <li><strong>Right to Withdraw Consent:</strong> You can withdraw consent at any time</li>
        </ul>

        <h2 className="font-heading text-2xl font-semibold text-gray-900 mt-8 mb-4">
          5. Cookies
        </h2>
        <p className="text-gray-600 mb-6">
          Our website uses only essential cookies necessary for the website to function properly.
          We do not use tracking cookies or third-party analytics cookies.
        </p>

        <h2 className="font-heading text-2xl font-semibold text-gray-900 mt-8 mb-4">
          6. Third-Party Services
        </h2>
        <p className="text-gray-600 mb-6">
          Our website may contain links to third-party websites. We are not responsible for
          the privacy practices of these external sites. We encourage you to read the privacy
          policies of any third-party sites you visit.
        </p>

        <h2 className="font-heading text-2xl font-semibold text-gray-900 mt-8 mb-4">
          7. Data Security
        </h2>
        <p className="text-gray-600 mb-6">
          We implement appropriate technical and organizational measures to protect your personal
          information against unauthorized access, alteration, disclosure, or destruction.
        </p>

        <h2 className="font-heading text-2xl font-semibold text-gray-900 mt-8 mb-4">
          8. Contact Us
        </h2>
        <p className="text-gray-600 mb-4">
          If you have any questions about this Privacy Policy or wish to exercise your rights,
          please contact us at:
        </p>
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <p className="text-gray-600">
            <strong>Urban Catering</strong><br />
            Nicosia, Cyprus<br />
            Email:{' '}
            <a
              href="mailto:info@urbancateringcy.com"
              className="text-brand-blue hover:text-brand-teal"
            >
              info@urbancateringcy.com
            </a>
          </p>
        </div>

        <h2 className="font-heading text-2xl font-semibold text-gray-900 mt-8 mb-4">
          9. Changes to This Policy
        </h2>
        <p className="text-gray-600 mb-6">
          We may update this Privacy Policy from time to time. We will notify you of any
          changes by posting the new Privacy Policy on this page and updating the
          &quot;Last updated&quot; date.
        </p>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/contact"
            className="inline-block bg-brand-blue text-white font-semibold py-3 px-6 rounded hover:bg-brand-teal transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
