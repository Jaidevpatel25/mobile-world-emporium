
import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "iphone-15-pro-max",
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    price: 159900,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=2070&auto=format&fit=crop",
    specs: {
      ram: "8GB",
      storage: "256GB",
      camera: "48MP Triple Camera",
      display: "6.7-inch Super Retina XDR",
      processor: "A17 Pro Chip",
      battery: "4422mAh"
    },
    inStock: true,
    featured: true,
    description: "The iPhone 15 Pro Max features a titanium design, the powerful A17 Pro chip, and a 48MP main camera system for incredible detail.",
    colors: ["Titanium Blue", "Natural Titanium", "White Titanium", "Black Titanium"]
  },
  {
    id: "samsung-galaxy-s23-ultra",
    name: "Galaxy S23 Ultra",
    brand: "Samsung",
    price: 124999,
    oldPrice: 134999,
    image: "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?q=80&w=2064&auto=format&fit=crop",
    specs: {
      ram: "12GB",
      storage: "512GB",
      camera: "200MP Quad Camera",
      display: "6.8-inch Dynamic AMOLED",
      processor: "Snapdragon 8 Gen 2",
      battery: "5000mAh"
    },
    inStock: true,
    featured: true,
    description: "Experience the ultimate smartphone with the Samsung Galaxy S23 Ultra, featuring a built-in S Pen, powerful Snapdragon processor, and a 200MP camera system.",
    colors: ["Phantom Black", "Green", "Cream", "Lavender"]
  },
  {
    id: "google-pixel-8-pro",
    name: "Pixel 8 Pro",
    brand: "Google",
    price: 106999,
    image: "https://images.unsplash.com/photo-1699439098260-f797a2c41371?q=80&w=2071&auto=format&fit=crop",
    specs: {
      ram: "12GB",
      storage: "256GB",
      camera: "50MP Triple Camera",
      display: "6.7-inch LTPO OLED",
      processor: "Google Tensor G3",
      battery: "5050mAh"
    },
    inStock: true,
    featured: true,
    description: "The Google Pixel 8 Pro introduces the Tensor G3 chip with advanced AI capabilities and a versatile triple camera system with amazing low-light performance.",
    colors: ["Obsidian", "Porcelain", "Bay"]
  },
  {
    id: "oneplus-12",
    name: "OnePlus 12",
    brand: "OnePlus",
    price: 64999,
    image: "https://images.unsplash.com/photo-1676911809746-9f4316589126?q=80&w=2021&auto=format&fit=crop",
    specs: {
      ram: "16GB",
      storage: "256GB",
      camera: "50MP Triple Camera",
      display: "6.82-inch AMOLED LTPO",
      processor: "Snapdragon 8 Gen 3",
      battery: "5400mAh"
    },
    inStock: true,
    featured: true,
    description: "The OnePlus 12 delivers extreme performance with Snapdragon 8 Gen 3, incredibly fast 100W charging, and a premium Hasselblad camera system.",
    colors: ["Flowy Emerald", "Silky Black"]
  },
  {
    id: "xiaomi-14-ultra",
    name: "Xiaomi 14 Ultra",
    brand: "Xiaomi",
    price: 99999,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=2027&auto=format&fit=crop",
    specs: {
      ram: "16GB",
      storage: "512GB",
      camera: "50MP Quad Camera",
      display: "6.73-inch AMOLED",
      processor: "Snapdragon 8 Gen 3",
      battery: "5000mAh"
    },
    inStock: true,
    featured: true,
    description: "The Xiaomi 14 Ultra features a professional-grade quad camera system co-engineered with Leica, 90W fast charging, and a stunning AMOLED display.",
    colors: ["Titanium Black", "White"]
  },
  {
    id: "motorola-edge-50-fusion",
    name: "Edge 50 Fusion",
    brand: "Motorola",
    price: 25000.00,
    image: "https://motorolain.vtexassets.com/arquivos/ids/159186/2024_CUSCO-PLUS_FOREST-GREEN_PDP-HERO.png?v=638618115763230000",
    specs: {
      ram: "12GB",
      storage: "256GB",
      camera: "50MP + 13MP Dual Camera",
      display: "6.7-inch pOLED 144Hz",
      processor: "Snapdragon 7s Gen 2",
      battery: "5000mAh"
    },
    inStock: true,
    featured: true,
    description: "The Motorola Edge 50 Fusion features a stunning 6.7-inch pOLED display with 1B colors, powerful Snapdragon 7s Gen 2 processor, and a 50MP OIS camera system.",
    colors: ["Marshmallow Blue", "Silicone Matte", "Dark Forest", "Hot Pink"]
  },
  {
    id: "iphone-15",
    name: "iPhone 15",
    brand: "Apple",
    price: 79900,
    image: "https://images.unsplash.com/photo-1696428262254-0cf1499cfb25?q=80&w=1964&auto=format&fit=crop",
    specs: {
      ram: "6GB",
      storage: "128GB",
      camera: "48MP Dual Camera",
      display: "6.1-inch Super Retina XDR",
      processor: "A16 Bionic Chip",
      battery: "3349mAh"
    },
    inStock: true,
    description: "The iPhone 15 features the Dynamic Island, a 48MP camera, and the powerful A16 Bionic chip in vibrant new colors.",
    colors: ["Pink", "Yellow", "Green", "Blue", "Black"]
  },
  {
    id: "samsung-galaxy-s23-plus",
    name: "Galaxy S23+",
    brand: "Samsung",
    price: 94999,
    image: "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?q=80&w=2071&auto=format&fit=crop",
    specs: {
      ram: "8GB",
      storage: "256GB",
      camera: "50MP Triple Camera",
      display: "6.6-inch Dynamic AMOLED",
      processor: "Snapdragon 8 Gen 2",
      battery: "4700mAh"
    },
    inStock: true,
    description: "The Samsung Galaxy S23+ offers a perfect balance of performance and features with a beautiful display and powerful camera system.",
    colors: ["Phantom Black", "Green", "Cream", "Lavender"]
  },
  {
    id: "google-pixel-8",
    name: "Pixel 8",
    brand: "Google",
    price: 75999,
    image: "https://images.unsplash.com/photo-1701722969576-fd0c8d9dfa96?q=80&w=1935&auto=format&fit=crop",
    specs: {
      ram: "8GB",
      storage: "128GB",
      camera: "50MP Dual Camera",
      display: "6.2-inch OLED",
      processor: "Google Tensor G3",
      battery: "4575mAh"
    },
    inStock: true,
    description: "The Google Pixel 8 features the Tensor G3 processor, advanced AI features, and Google's exceptional camera experience in a compact design.",
    colors: ["Obsidian", "Hazel", "Rose"]
  },
  {
    id: "oneplus-11",
    name: "OnePlus 11",
    brand: "OnePlus",
    price: 56999,
    oldPrice: 61999,
    image: "https://images.unsplash.com/photo-1679641051408-b963d15f4f5a?q=80&w=1935&auto=format&fit=crop",
    specs: {
      ram: "12GB",
      storage: "256GB",
      camera: "50MP Triple Camera",
      display: "6.7-inch AMOLED LTPO",
      processor: "Snapdragon 8 Gen 2",
      battery: "5000mAh"
    },
    inStock: true,
    description: "The OnePlus 11 delivers flagship performance with blazing-fast charging, a vibrant display, and a Hasselblad camera system.",
    colors: ["Eternal Green", "Titan Black"]
  },
  {
    id: "xiaomi-13t-pro",
    name: "Xiaomi 13T Pro",
    brand: "Xiaomi",
    price: 49999,
    image: "https://images.unsplash.com/photo-1550367083-9fa5411cb303?q=80&w=1974&auto=format&fit=crop",
    specs: {
      ram: "12GB",
      storage: "256GB",
      camera: "50MP Triple Camera",
      display: "6.67-inch AMOLED",
      processor: "Dimensity 9200+",
      battery: "5000mAh"
    },
    inStock: true,
    description: "The Xiaomi 13T Pro features Leica optics, incredibly fast 120W charging, and a beautiful AMOLED display with Dolby Vision support.",
    colors: ["Alpine Blue", "Meadow Green", "Black"]
  },
  {
    id: "motorola-edge-50-fusion-256",
    name: "Edge 50 Fusion",
    brand: "Motorola",
    price: 27999,
    image: "https://images.unsplash.com/photo-1550367083-9fa5411cb303?q=80&w=1974&auto=format&fit=crop",
    specs: {
      ram: "12GB",
      storage: "256GB",
      camera: "50MP + 13MP Dual Camera",
      display: "6.7-inch pOLED 144Hz",
      processor: "Snapdragon 7s Gen 2",
      battery: "5000mAh"
    },
    inStock: true,
    description: "The Motorola Edge 50 Fusion features a stunning 6.7-inch pOLED display with 1B colors, powerful Snapdragon 7s Gen 2 processor, and a 50MP OIS camera system.",
    colors: ["Marshmallow Blue", "Silicone Matte"]
  }
];
