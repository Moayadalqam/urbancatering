interface FeatureItem {
  title: string;
  description: string;
}

interface FeatureGridProps {
  items: FeatureItem[];
  columns?: 2 | 3 | 4;
}

export default function FeatureGrid({ items, columns = 2 }: FeatureGridProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid grid-cols-1 ${gridCols[columns]} gap-8 md:gap-10`}>
      {items.map((item, index) => (
        <div key={index} className="space-y-3">
          <h3 className="font-heading text-lg font-semibold text-gray-900 pb-3 border-b border-gray-200">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
