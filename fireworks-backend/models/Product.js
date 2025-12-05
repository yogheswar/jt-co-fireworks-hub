// models/Product.js
import mongoose from "mongoose";

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

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, default: "" },
  image: { type: String, default: "" },
  category: {
    type: String,
    required: true,
    enum: allowedCategories,
    lowercase: true, // 🔥 auto convert to lowercase
    trim: true,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
