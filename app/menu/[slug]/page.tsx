import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import MenuSlideshow from '@/components/slideshow/MenuSlideshow';
import { menusData } from '@/lib/data/menus';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return menusData.map((menu) => ({
    slug: menu.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const menu = menusData.find((m) => m.slug === slug);

  if (!menu) {
    return {
      title: 'Menu Not Found',
    };
  }

  return {
    title: menu.name,
    description: menu.description,
  };
}

export default async function MenuPage({ params }: Props) {
  const { slug } = await params;
  const menu = menusData.find((m) => m.slug === slug);

  if (!menu) {
    notFound();
  }

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4 text-center mb-8">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-brand-blue mb-4">
          {menu.name}
        </h1>
        <p className="text-gray-600">{menu.description}</p>
      </div>

      <MenuSlideshow
        images={menu.images}
        downloadLink={menu.downloadLink}
        downloadText={`Download ${menu.name} PDF`}
      />
    </div>
  );
}
