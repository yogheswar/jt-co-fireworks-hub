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
  description: { type: String },
  image: { type: String },
  category: {
    type: String,
    required: true,
    enum: allowedCategories,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
