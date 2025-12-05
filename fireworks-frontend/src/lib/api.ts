// 🚀 BACKEND BASE URL (Railway)
export const BASE_URL = "http://localhost:5000";


// Categories (same for admin + frontend)
export const ALLOWED_CATEGORIES = [
  "all",
  "fountains",
  "rockets",
  "crackers",
  "spinner",
  "aerial",
  "kids",
  "sound",
];

// ------------ PRODUCTS API ------------
export const productApi = {
  // Get all products
  getAll: async (category?: string) => {
    const url = category
      ? `${BASE_URL}/api/products?category=${category}`
      : `${BASE_URL}/api/products`;

    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
  },

  // Add product (used in admin)
  create: async (data: any) => {
    const res = await fetch(`${BASE_URL}/api/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Failed to create product");
    return res.json();
  },

  // Update product
  update: async (id: string, data: any) => {
    const res = await fetch(`${BASE_URL}/api/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Failed to update product");
    return res.json();
  },

  // Delete product
  delete: async (id: string) => {
    const res = await fetch(`${BASE_URL}/api/products/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Failed to delete product");
    return res.json();
  },
};
