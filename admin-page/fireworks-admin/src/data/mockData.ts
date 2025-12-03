import { Product, Order, Category, DashboardStats } from "@/types";

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Sparkler Box - 100 Pieces",
    description: "Premium quality sparklers perfect for all celebrations",
    price: 150,
    category: "Sparklers",
    image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=400",
    stock: 250,
    featured: true,
    createdAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    name: "Flower Pot - Big",
    description: "Beautiful fountain firework with colorful sparks",
    price: 80,
    category: "Ground Fireworks",
    image: "https://images.unsplash.com/photo-1498931299839-881f47ae3a2a?w=400",
    stock: 180,
    featured: true,
    createdAt: new Date("2024-01-20"),
  },
  {
    id: "3",
    name: "Sky Shot - 12 Shots",
    description: "Colorful aerial shells with loud crackling effects",
    price: 350,
    category: "Aerial Fireworks",
    image: "https://images.unsplash.com/photo-1514912885225-5c9ec82d3a3a?w=400",
    stock: 120,
    featured: false,
    createdAt: new Date("2024-02-01"),
  },
  {
    id: "4",
    name: "Diwali Mega Combo",
    description: "Complete celebration pack with assorted crackers",
    price: 2500,
    category: "Combo Packs",
    image: "https://images.unsplash.com/photo-1604422290306-3be0e62a7f45?w=400",
    stock: 50,
    featured: true,
    createdAt: new Date("2024-02-15"),
  },
  {
    id: "5",
    name: "Color Smoke Bombs",
    description: "Safe colored smoke for photography and events",
    price: 200,
    category: "Special Effects",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400",
    stock: 300,
    featured: false,
    createdAt: new Date("2024-03-01"),
  },
  {
    id: "6",
    name: "Atom Bomb Cracker",
    description: "Loud sound cracker for traditional celebrations",
    price: 120,
    category: "Sound Crackers",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400",
    stock: 400,
    featured: false,
    createdAt: new Date("2024-03-10"),
  },
];

export const mockOrders: Order[] = [
  {
    id: "ORD001",
    customerName: "Rajesh Kumar",
    customerPhone: "+91 98765 43210",
    customerAddress: "123 MG Road, Chennai, Tamil Nadu",
    items: [
      { ...mockProducts[0], quantity: 5 },
      { ...mockProducts[3], quantity: 2 },
    ],
    total: 5750,
    status: "pending",
    createdAt: new Date("2024-10-15"),
  },
  {
    id: "ORD002",
    customerName: "Priya Sharma",
    customerPhone: "+91 87654 32109",
    customerAddress: "456 Anna Nagar, Madurai, Tamil Nadu",
    items: [
      { ...mockProducts[1], quantity: 10 },
      { ...mockProducts[4], quantity: 3 },
    ],
    total: 1400,
    status: "confirmed",
    createdAt: new Date("2024-10-16"),
  },
  {
    id: "ORD003",
    customerName: "Arun Venkatesh",
    customerPhone: "+91 76543 21098",
    customerAddress: "789 Temple Street, Sivakasi, Tamil Nadu",
    items: [
      { ...mockProducts[2], quantity: 4 },
    ],
    total: 1400,
    status: "delivered",
    createdAt: new Date("2024-10-12"),
  },
  {
    id: "ORD004",
    customerName: "Meena Rajan",
    customerPhone: "+91 65432 10987",
    customerAddress: "321 Lake View, Coimbatore, Tamil Nadu",
    items: [
      { ...mockProducts[5], quantity: 20 },
      { ...mockProducts[0], quantity: 10 },
    ],
    total: 3900,
    status: "pending",
    createdAt: new Date("2024-10-17"),
  },
];

export const mockCategories: Category[] = [
  { id: "1", name: "Sparklers", description: "Safe and colorful sparklers", productCount: 12 },
  { id: "2", name: "Ground Fireworks", description: "Fountains and flower pots", productCount: 18 },
  { id: "3", name: "Aerial Fireworks", description: "Sky shots and rockets", productCount: 15 },
  { id: "4", name: "Combo Packs", description: "Value packs for celebrations", productCount: 8 },
  { id: "5", name: "Special Effects", description: "Smoke bombs and color effects", productCount: 10 },
  { id: "6", name: "Sound Crackers", description: "Traditional loud crackers", productCount: 14 },
];

export const mockStats: DashboardStats = {
  totalProducts: 77,
  totalOrders: 156,
  totalRevenue: 245800,
  pendingOrders: 23,
};

export const salesData = [
  { month: "Jan", sales: 18500 },
  { month: "Feb", sales: 22000 },
  { month: "Mar", sales: 19800 },
  { month: "Apr", sales: 15200 },
  { month: "May", sales: 12000 },
  { month: "Jun", sales: 8500 },
  { month: "Jul", sales: 9200 },
  { month: "Aug", sales: 14500 },
  { month: "Sep", sales: 28000 },
  { month: "Oct", sales: 52000 },
  { month: "Nov", sales: 45600 },
  { month: "Dec", sales: 20500 },
];

export const categoryData = [
  { name: "Sparklers", value: 25, fill: "hsl(25, 95%, 53%)" },
  { name: "Ground", value: 20, fill: "hsl(35, 90%, 55%)" },
  { name: "Aerial", value: 30, fill: "hsl(15, 85%, 50%)" },
  { name: "Combo", value: 15, fill: "hsl(45, 90%, 55%)" },
  { name: "Others", value: 10, fill: "hsl(0, 85%, 55%)" },
];
