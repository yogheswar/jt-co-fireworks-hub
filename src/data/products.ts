import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Sparkle Flower Pot',
    description: 'Beautiful fountain that shoots colorful sparks in a flower pattern',
    price: 150,
    category: 'Fountain',
    image: '/placeholder.svg',
    stock: 50
  },
  {
    id: '2',
    name: 'Thunder King',
    description: 'Powerful 5-shot aerial shell with loud thunder effect',
    price: 350,
    category: 'Aerial',
    image: '/placeholder.svg',
    stock: 30
  },
  {
    id: '3',
    name: 'Rainbow Chakra',
    description: 'Ground spinner with rainbow color changing effects',
    price: 80,
    category: 'Ground',
    image: '/placeholder.svg',
    stock: 100
  },
  {
    id: '4',
    name: 'Golden Shower',
    description: 'Premium quality golden sparkle fountain',
    price: 200,
    category: 'Fountain',
    image: '/placeholder.svg',
    stock: 45
  },
  {
    id: '5',
    name: 'Sky Rocket Pack',
    description: 'Pack of 10 colorful sky rockets',
    price: 250,
    category: 'Rocket',
    image: '/placeholder.svg',
    stock: 60
  },
  {
    id: '6',
    name: 'Crackling Stars',
    description: 'Multi-shot cake with crackling star effects',
    price: 450,
    category: 'Aerial',
    image: '/placeholder.svg',
    stock: 25
  },
  {
    id: '7',
    name: 'Atom Bomb',
    description: 'Single loud cracker with massive sound',
    price: 50,
    category: 'Sound',
    image: '/placeholder.svg',
    stock: 200
  },
  {
    id: '8',
    name: 'Lakshmi Crackers',
    description: 'Traditional 1000 wala garland crackers',
    price: 180,
    category: 'Traditional',
    image: '/placeholder.svg',
    stock: 80
  },
  {
    id: '9',
    name: 'Color Smoke Bomb',
    description: 'Non-explosive color smoke for celebrations',
    price: 120,
    category: 'Special',
    image: '/placeholder.svg',
    stock: 70
  },
  {
    id: '10',
    name: 'Mega Combo Pack',
    description: 'Family pack with variety of crackers for all ages',
    price: 1500,
    category: 'Combo',
    image: '/placeholder.svg',
    stock: 20
  },
  {
    id: '11',
    name: 'Whistling Wheel',
    description: 'Spinning wheel with whistling sound effects',
    price: 90,
    category: 'Ground',
    image: '/placeholder.svg',
    stock: 90
  },
  {
    id: '12',
    name: 'Night King 50 Shot',
    description: 'Premium 50-shot aerial cake with colorful effects',
    price: 800,
    category: 'Aerial',
    image: '/placeholder.svg',
    stock: 15
  }
];

export const categories = ['All', 'Fountain', 'Aerial', 'Ground', 'Rocket', 'Sound', 'Traditional', 'Special', 'Combo'];
