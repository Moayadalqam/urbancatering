import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0F4494',
          teal: '#497173',
          gold: '#D4AF37',
        },
        service: {
          wedding: '#0F4494',
          corporate: '#0F4494',
          bbq: '#D32F2F',
          candy: '#FF4081',
          cocktail: '#C2185B',
          coffee: '#3E2723',
          kids: '#FF5E0E',
          christening: '#FF9800',
          outdoor: '#009688',
          private: '#6A1B9A',
          equipment: '#D4AF37',
        },
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-raleway)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
