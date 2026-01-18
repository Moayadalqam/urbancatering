export const brandColors = {
  blue: '#0F4494',
  teal: '#497173',
  gold: '#D4AF37',
  text: '#333333',
  textLight: '#666666',
  border: '#e0e0e0',
  bgLight: '#f9f9f9',
};

export const serviceColors = {
  weddings: { primary: '#0F4494', light: '#f8f8f8' },
  corporate: { primary: '#0F4494', light: '#f8f8f8' },
  bbq: { primary: '#D32F2F', light: '#FFCDD2' },
  candyBar: { primary: '#FF4081', light: '#FFEBEE' },
  cocktailBar: { primary: '#C2185B', light: '#F1B2C6' },
  coffee: { primary: '#3E2723', light: '#D7CCC8' },
  kidsParties: { primary: '#FF5E0E', light: '#FFEDCC' },
  christenings: { primary: '#FF9800', light: '#FFECB3' },
  outdoor: { primary: '#009688', light: '#e0f7fa' },
  privateChef: { primary: '#6A1B9A', light: '#E1BEE7' },
  privateParties: { primary: '#6A1B9A', light: '#E1BEE7' },
  equipment: { primary: '#D4AF37', light: '#f9f9f9' },
};

export type ServiceKey = keyof typeof serviceColors;
