// API Configuration
// Change this to your backend URL
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// Product API
export const productApi = {
  getAll: async (category?: string) => {
    const url = category && category !== 'all' 
      ? `${API_BASE_URL}/api/products?category=${category}`
      : `${API_BASE_URL}/api/products`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch products');
    return response.json();
  },

  getById: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/api/products/${id}`);
    if (!response.ok) throw new Error('Failed to fetch product');
    return response.json();
  },

  create: async (product: {
    name: string;
    price: number;
    description?: string;
    image?: string;
    category: string;
  }) => {
    const response = await fetch(`${API_BASE_URL}/api/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
    if (!response.ok) throw new Error('Failed to create product');
    return response.json();
  },

  update: async (id: string, product: {
    name: string;
    price: number;
    description?: string;
    image?: string;
    category: string;
  }) => {
    const response = await fetch(`${API_BASE_URL}/api/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
    if (!response.ok) throw new Error('Failed to update product');
    return response.json();
  },

  delete: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/api/products/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete product');
    return response.json();
  },
};

// Categories from your backend's allowed list
export const ALLOWED_CATEGORIES = [
  "all",
  "fountains",
  "rockets",
  "crackers",
  "spinner",
  "aerial",
  "kids",
  "sound",
] as const;

export type ProductCategory = typeof ALLOWED_CATEGORIES[number];
