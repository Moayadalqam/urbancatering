import { Metadata } from 'next';
import EquipmentSlideshow from '@/components/slideshow/EquipmentSlideshow';
import { menuDownloads } from '@/lib/constants/downloads';

export const metadata: Metadata = {
  title: 'Equipment Rentals',
  description: 'Premium catering equipment rental service in Nicosia, Cyprus. Browse our extensive collection of tables, chairs, linens, and more.',
};

const equipmentImages = Array.from({ length: 35 }, (_, i) => {
  const num = i + 1;
  // Use the actual image URLs from the original content
  const imageMap: Record<number, string> = {
    1: 'https://i.ibb.co/tpW93dB/1.png',
    2: 'https://i.ibb.co/MGtbjW5/2.png',
    3: 'https://i.ibb.co/tzt9Ny3/3.png',
    4: 'https://i.ibb.co/rxSWz36/4.png',
    5: 'https://i.ibb.co/9p4wpcG/5.png',
    6: 'https://i.ibb.co/1LXLRNS/6.png',
    7: 'https://i.ibb.co/vmvRCj9/7.png',
    8: 'https://i.ibb.co/gyThcyN/8.png',
    9: 'https://i.ibb.co/crwDjRv/9.png',
    10: 'https://i.ibb.co/t38zS1W/10.png',
    11: 'https://i.ibb.co/khHypyX/11.png',
    12: 'https://i.ibb.co/tMCmXHv/12.png',
    13: 'https://i.ibb.co/D4h0yk7/13.png',
    14: 'https://i.ibb.co/YB9pz4w/14.png',
    15: 'https://i.ibb.co/YhfR1F3/15.png',
    16: 'https://i.ibb.co/F4Vbw5W/16.png',
    17: 'https://i.ibb.co/WV5By9C/17.png',
    18: 'https://i.ibb.co/R3S5nvK/18.png',
    19: 'https://i.ibb.co/mC2PG6D/19.png',
    20: 'https://i.ibb.co/KrWSt4B/20.png',
    21: 'https://i.ibb.co/bFSLs0p/21.png',
    22: 'https://i.ibb.co/kXm7BLr/22.png',
    23: 'https://i.ibb.co/gMbFpnQ/23.png',
    24: 'https://i.ibb.co/B4Dxg8n/24.png',
    25: 'https://i.ibb.co/rdNsbHD/25.png',
    26: 'https://i.ibb.co/7KVBbxq/26.png',
    27: 'https://i.ibb.co/4mwQBch/27.png',
    28: 'https://i.ibb.co/H2KPKYR/28.png',
    29: 'https://i.ibb.co/qdh90YV/29.png',
    30: 'https://i.ibb.co/GvGrMGF/30.png',
    31: 'https://i.ibb.co/Ks9XzZm/31.png',
    32: 'https://i.ibb.co/cvppT5C/32.png',
    33: 'https://i.ibb.co/Msrxpbt/33.png',
    34: 'https://i.ibb.co/WfXyLgC/34.png',
    35: 'https://i.ibb.co/N6WYMHkx/357-97464614-3.png',
  };
  return {
    src: imageMap[num],
    alt: `Catering Equipment ${num}`,
  };
});

export default function EquipmentRentalsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-8">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-brand-gold mb-4">
          Equipment Rentals
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Elevate your event with our premium catering equipment. From elegant tableware
          to essential service items, we have everything you need to create the perfect setting.
        </p>
      </div>

      <EquipmentSlideshow
        images={equipmentImages}
        downloadLink={menuDownloads.equipment}
      />

      <div className="mt-12 text-center">
        <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-4">
          Need Equipment for Your Event?
        </h2>
        <p className="text-gray-600 mb-6">
          Contact us to discuss your rental needs and get a customized quote.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-brand-gold text-white font-semibold hover:bg-gray-900 transition-colors"
        >
          Request a Quote
        </a>
      </div>
    </div>
  );
}
