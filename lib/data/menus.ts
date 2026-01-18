import { menuDownloads } from '@/lib/constants/downloads';

export interface MenuData {
  slug: string;
  name: string;
  description: string;
  downloadLink: string;
  images: { src: string; alt: string }[];
}

export const menusData: MenuData[] = [
  {
    slug: 'buffet',
    name: 'Buffet Menu',
    description: 'Our comprehensive buffet menu offers a wide variety of dishes to satisfy every palate.',
    downloadLink: menuDownloads.buffet,
    images: [
      { src: 'https://i.ibb.co/jv3hy5Xv/357-97464614.png', alt: 'Buffet Menu Page 1' },
      { src: 'https://i.ibb.co/r56by4K/2.png', alt: 'Buffet Menu Page 2' },
      { src: 'https://i.ibb.co/0tQ9HhH/3.png', alt: 'Buffet Menu Page 3' },
      { src: 'https://i.ibb.co/QN9w5wx/4.png', alt: 'Buffet Menu Page 4' },
      { src: 'https://i.ibb.co/kqNDSJB/5.png', alt: 'Buffet Menu Page 5' },
      { src: 'https://i.ibb.co/7YWn90G/6.png', alt: 'Buffet Menu Page 6' },
      { src: 'https://i.ibb.co/WWVTWvF/7.png', alt: 'Buffet Menu Page 7' },
      { src: 'https://i.ibb.co/bgkvx8H/8.png', alt: 'Buffet Menu Page 8' },
    ],
  },
  {
    slug: 'cocktail-fingerfood',
    name: 'Cocktail & Fingerfood Menu',
    description: 'Elegant appetizers and finger foods perfect for cocktail receptions and social gatherings.',
    downloadLink: menuDownloads.cocktailFingerfood,
    images: [
      { src: 'https://i.ibb.co/Nnghr8WH/357-97464614-2.png', alt: 'Cocktail Menu Page 1' },
      { src: 'https://i.ibb.co/gw707C5/2.png', alt: 'Cocktail Menu Page 2' },
      { src: 'https://i.ibb.co/6sxDhRd/3.png', alt: 'Cocktail Menu Page 3' },
      { src: 'https://i.ibb.co/NFSNWSz/4.png', alt: 'Cocktail Menu Page 4' },
    ],
  },
  {
    slug: 'kids',
    name: 'Kids Menu',
    description: 'Fun and delicious options designed especially for our younger guests.',
    downloadLink: menuDownloads.kids,
    images: [
      { src: 'https://i.ibb.co/zh7XRk2M/357-97464614-1.png', alt: 'Kids Menu Page 1' },
      { src: 'https://i.ibb.co/VpPCRqb/2.png', alt: 'Kids Menu Page 2' },
    ],
  },
];

export const christmasMenuData = {
  slug: 'christmas',
  name: 'Christmas Menu',
  description: 'Celebrate the festive season with our specially curated Christmas menu selections.',
  downloadLink: menuDownloads.christmas,
  cards: [
    {
      title: 'Cocktail Selection',
      image: 'https://i.ibb.co/FrqH9DM/357-70070053-2.png',
    },
    {
      title: 'Festive Dinner',
      image: 'https://i.ibb.co/vvxVsZ8y/357-70070053-3.png',
    },
    {
      title: 'Gourmet Platters',
      image: 'https://i.ibb.co/sdkLfDXs/1.png',
    },
  ],
};
