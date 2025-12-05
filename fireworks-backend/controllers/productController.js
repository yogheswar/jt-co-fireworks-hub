// controllers/productController.js
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

    const filter =
      category && category.toLowerCase() !== "all"
        ? { category: category.toLowerCase() }
        : {};

    const products = await Product.find(filter);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add new product
export const addProduct = async (req, res) => {
  try {
    const { name, price, description, image, category } = req.body;

    const finalCategory = category.toLowerCase();

    if (!allowedCategories.includes(finalCategory)) {
      return res.status(400).json({ message: "Invalid category" });
    }

    const product = new Product({
      name,
      price,
      description,
      image,
      category: finalCategory,
    });

    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update product
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    let { name, price, description, image, category } = req.body;
    const finalCategory = category.toLowerCase();

    if (!allowedCategories.includes(finalCategory)) {
      return res.status(400).json({ message: "Invalid category" });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        name,
        price,
        description,
        image,
        category: finalCategory,
      },
      { new: true }
    );

    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    await Product.findByIdAndDelete(id);
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
