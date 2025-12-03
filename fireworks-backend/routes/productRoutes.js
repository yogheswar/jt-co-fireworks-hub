// routes/productRoutes.js
import express from "express";
import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js"; // note the .js extension

const router = express.Router();

router.get("/", getProducts);          // Get all products
router.post("/", addProduct);          // Add new product
router.put("/:id", updateProduct);     // Update product
router.delete("/:id", deleteProduct);  // Delete product

export default router; // ES module default export
