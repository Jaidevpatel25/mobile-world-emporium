
export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  oldPrice?: number;
  image: string;
  specs: {
    ram: string;
    storage: string;
    camera: string;
    display?: string;
    processor?: string;
    battery?: string;
  };
  inStock: boolean;
  featured?: boolean;
  description?: string;
  colors?: string[];
}

export type Brand = 'Apple' | 'Samsung' | 'OnePlus' | 'Xiaomi' | 'Google' | 'Motorola';

export interface FilterOptions {
  brands: string[];
  priceRange: [number, number];
  ram: string[];
  storage: string[];
}
