import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "iphone-15-pro-max",
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    price: 159900,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=2070&auto=format&fit=crop",
    image1: "https://m.media-amazon.com/images/I/81dT7CUY6GL._AC_UF1000,1000_QL80_.jpg",
    image2: "https://images.macrumors.com/t/SuHt0iQuSjaO-ExOZzJieONGf_I=/2500x/article-new/2023/09/iPhone-15-Pro-Lineup-Feature.jpg",
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
    image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgTgfAHWIESvzP2o98KzTia7VS6AkEwKdDKg&s",
    image2: "https://www.designinfo.in/wp-content/uploads/2023/10/Samsung-Galaxy-S23-Ultra-256GB-Unlocked-Cream-1.webp",
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
    price: 39999,
    image: "https://www.designinfo.in/wp-content/uploads/2024/03/Google-Pixel-8-Pro-128GB-Porcelain-1.webp",
    image1: "https://www.designinfo.in/wp-content/uploads/2023/10/Google-Pixel-8-Pro-128GB-Unlocked-Bay-1.webp",
    image2: "https://www.designinfo.in/wp-content/uploads/2023/10/Google-Pixel-8-Pro-Black-1.webp",
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
    price: 56999,
    image: "https://oasis.opstatics.com/content/dam/oasis/page/2023/cn/12/12-black.png",
    image1: "https://image01-in.oneplus.net/media/202407/04/9052428d8c69bd8bb884c7913af5fa73.png",
    image2: "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/s/r/r/12-5g-op12-5g-oneplus-original-imagxgt7uwerszh8.jpeg?q=90&crop=false",
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
    price: 88849,
    image: "https://m.media-amazon.com/images/I/81mDHujkYpL._AC_UF1000,1000_QL80_.jpg",
    image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUj2P_lwg3ADnjnhmkt1-yW1UVJWqLNyJpPg&s",
    image2: "https://www.cnet.com/a/img/resize/005920f02fb933dd741737d9fc28dfc28e3624b4/hub/2024/04/04/89d09a95-5483-4846-9495-0ff02091e2ec/xiaomi-14-ultra-promo-lanxon-cnet-review-18.jpg?auto=webp&width=1200",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuMZK0qNCKUW2Fqsg2vrSAxh9WPa14WePCLQ&s",
    image1: "https://images-eu.ssl-images-amazon.com/images/I/71XZP2Hm+5L._AC_UL495_SR435,495_.jpg",
    image2: "https://m.media-amazon.com/images/I/71m+dNHzoGL.jpg",
    specs: {
      ram: "12GB",
      storage: "256GB",
      camera: "50MP + 13MP Dual Camera",
      display: "6.7-inch poled 144Hz",
      processor: "Snapdragon 7s Gen 2",
      battery: "5000mAh"
    },
    inStock: true,
    featured: true,
    description: "The Motorola Edge 50 Fusion features a stunning 6.7-inch poled display with 1B colors, powerful Snapdragon 7s Gen 2 processor, and a 50MP OIS camera system.",
    colors: ["Marshmallow Blue", "Silicone Matte", "Dark Forest", "Hot Pink"]
  },
  {
    id: "iphone-15",
    name: "iPhone 15",
    brand: "Apple",
    price: 79900,
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=20&crop=false",
    image1: "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UF1000,1000_QL80_.jpg",
    image2: "https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-1_alt__en-IN.jpg?v=1694605260&width=823",
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
    price: 98999,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSEronlJ0indMAWbzGMLd04t0ji_iIDPub1g&s",
    image1: "https://m.media-amazon.com/images/I/61mSOsisDAL.jpg",
    image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcP6uVZxXwddCQAXwDxRiCYOaujIOcz-UnnA&s",
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
    price: 38999,
    image: "https://www.designinfo.in/wp-content/uploads/2024/03/Google-Pixel-8-Pro-128GB-Porcelain-1.webp",
    image1: "https://www.designinfo.in/wp-content/uploads/2023/10/Google-Pixel-8-Pro-128GB-Unlocked-Bay-1.webp",
    image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9meFQ0JDKiOUluv5f85UY6wERSOQIRDLB3Q&s",
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
    image: "https://m.media-amazon.com/images/I/61amb0CfMGL.jpg",
    image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqSu4f9U3Jc37B3vAGdR9e4hJ931NcRSGFrA&s",
    image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxRKQmgORbm-Dph3VLbHmQl9BzsNW-1lK0gw&s",
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
    price: 24599,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWApOwcLDMMEGEpkWQUZ9cP9xo5jx274stCg&s",
    image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB80KLaO3UOGAfuoz_2NRKztq7c3Ip-Equww&s",
    image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaeazSgQPZXjwk34NvHgydgwf_aVqYdC9ByQ&s",
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
    id: "motorola-edge-60-fusion",
    name: "Edge 60 Fusion",
    brand: "Motorola",
    price: 22099,
    oldPrice: 26000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9-2eDUwbkoE1D3Hp4dXt5VcKesQxbphXsiQ&s",
    image1: "https://motorolain.vtexassets.com/arquivos/ids/159339-800-auto?width=800&height=auto&aspect=true",
    image2: "https://m.media-amazon.com/images/I/81ZkMDjcjFL._AC_UF1000,1000_QL80_.jpg",
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
