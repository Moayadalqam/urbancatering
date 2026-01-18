interface TestimonialProps {
  quote: string;
  author: string;
  themeColor?: string;
  bgColor?: string;
}

export default function Testimonial({
  quote,
  author,
  themeColor = '#0F4494',
  bgColor = '#f8f8f8',
}: TestimonialProps) {
  return (
    <div
      className="my-8 p-6 italic"
      style={{
        backgroundColor: bgColor,
        borderLeft: `4px solid ${themeColor}`,
      }}
    >
      <blockquote className="text-gray-700 text-base md:text-lg mb-3">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <p className="text-right text-gray-600 text-sm font-semibold not-italic">
        — {author}
      </p>
    </div>
  );
}
