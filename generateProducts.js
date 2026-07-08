import fs from 'fs';

const categories = ['Electronics', 'Clothing', 'Jewelry', 'Watches', 'Sneakers'];
const brandsMap = {
  'Electronics': ['Apple', 'Samsung', 'Sony', 'Bose', 'LG'],
  'Clothing': ['Zara', 'H&M', 'Gucci', 'Nike', 'Adidas'],
  'Jewelry': ['Tiffany & Co', 'Cartier', 'Pandora', 'Swarovski', 'Bvlgari'],
  'Watches': ['Rolex', 'Tag Heuer', 'Casio', 'Seiko', 'Fossil'],
  'Sneakers': ['Nike', 'Adidas', 'Puma', 'Reebok', 'New Balance']
};

const imagesMap = {
  'Electronics': [
    'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1628155930542-3c7a64e2c848?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&q=80&w=400'
  ],
  'Clothing': [
    'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1434389678232-0408d314cde6?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=400'
  ],
  'Jewelry': [
    'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1599643478524-fb66f7ca0a10?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1573408301145-b98c4654440c?auto=format&fit=crop&q=80&w=400'
  ],
  'Watches': [
    'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1587836374828-cb43b6fae2f2?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=400'
  ],
  'Sneakers': [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1584735175315-9d5823188314?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=400'
  ]
};

const adjectives = ['Premium', 'Luxury', 'Classic', 'Modern', 'Vintage', 'Elegant', 'Essential', 'Pro', 'Elite'];
const nouns = {
  'Electronics': ['Headphones', 'Speaker', 'Monitor', 'Tablet', 'Camera'],
  'Clothing': ['Jacket', 'T-Shirt', 'Dress', 'Jeans', 'Sweater'],
  'Jewelry': ['Necklace', 'Ring', 'Bracelet', 'Earrings', 'Pendant'],
  'Watches': ['Chronograph', 'Automatic', 'Smartwatch', 'Classic Watch', 'Diver Watch'],
  'Sneakers': ['Running Shoes', 'High Tops', 'Trainers', 'Slip-ons', 'Basketball Shoes']
};

const products = [];
let idCounter = 1;

for (let i = 0; i < 90; i++) {
  const category = categories[Math.floor(Math.random() * categories.length)];
  const brand = brandsMap[category][Math.floor(Math.random() * brandsMap[category].length)];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[category][Math.floor(Math.random() * nouns[category].length)];
  
  const name = `${brand} ${adjective} ${noun}`;
  const price = Math.floor(Math.random() * 8000) + 1500; // Base price in Rupees
  
  // Random discount 0% to 50%
  const hasDiscount = Math.random() > 0.4;
  const discount = hasDiscount ? Math.floor(Math.random() * 40) + 10 : 0;
  
  let currentPrice = price;
  let originalPrice = price;
  
  if (hasDiscount) {
    originalPrice = Math.floor(price / (1 - discount/100));
  }
  
  const image = imagesMap[category][Math.floor(Math.random() * imagesMap[category].length)];

  products.push({
    id: idCounter++,
    name,
    category,
    brand,
    price: currentPrice,
    originalPrice,
    discount,
    image
  });
}

const fileContent = `export const products = ${JSON.stringify(products, null, 2)};

export const getBrands = () => {
  return [...new Set(products.map(p => p.brand))].sort();
};

export const getCategories = () => {
  return [...new Set(products.map(p => p.category))].sort();
};
`;

fs.writeFileSync('./src/data/products.js', fileContent);
console.log('Products generated!');
