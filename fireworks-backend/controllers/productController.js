import Product from "../models/Product.js";

const allowedCategories = [
  "all",
  "fountains",
  "rockets",
  "crackers",
  "spinner",
  "aerial",
  "kids",
  "sound",
];

// Get all products (optional filter by category)
export const getProducts = async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category && category !== "all" ? { category } : {};
    const products = await Product.find(filter);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add new product
export const addProduct = async (req, res) => {
  const { name, price, description, image, category } = req.body;

  if (!allowedCategories.includes(category)) {
    return res.status(400).json({ message: "Invalid category" });
  }

  try {
    const product = new Product({ name, price, description, image, category });
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update product
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, description, image, category } = req.body;

  if (!allowedCategories.includes(category)) {
    return res.status(400).json({ message: "Invalid category" });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, price, description, image, category },
      { new: true }
    );
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete product
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
