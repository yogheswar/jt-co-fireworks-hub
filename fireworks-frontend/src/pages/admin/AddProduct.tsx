import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const categories = [
    "all",
    "fountains",
    "rockets",
    "crackers",
    "spinner",
    "aerial",
    "kids",
    "sound",
  ];

  const handleSubmit = async () => {
    if (!name || !price || !category) {
      alert("Please fill name, price & category!");
      return;
    }

    const newProduct = { name, price, description, image, category };

    try {
      const res = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Product added successfully!");
        setName("");
        setPrice("");
        setDescription("");
        setImage("");
        setCategory("");
      } else {
        alert("Failed: " + data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Error saving product");
    }
  };

  return (
    <div className="p-6 max-w-lg">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>

      <div className="flex flex-col gap-4">
        <div>
          <Label>Product Name</Label>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter product name" />
        </div>

        <div>
          <Label>Price</Label>
          <Input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter price" type="number" />
        </div>

        <div>
          <Label>Description</Label>
          <Input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter description" />
        </div>

        <div>
          <Label>Image URL</Label>
          <Input value={image} onChange={(e) => setImage(e.target.value)} placeholder="Enter image URL" />
        </div>

        <div>
          <Label>Category</Label>
          <Select onValueChange={setCategory} value={category}>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button onClick={handleSubmit}>Add Product</Button>
      </div>
    </div>
  );
};

export default AddProduct;
