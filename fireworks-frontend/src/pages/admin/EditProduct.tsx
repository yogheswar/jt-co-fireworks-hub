import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const EditProduct = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    // Fetch product by ID from API (mock)
    const product = { name: "Sample Product", price: 100 }; 
    setName(product.name);
    setPrice(product.price.toString());
  }, [id]);

  const handleUpdate = () => {
    alert(`Updated product ${id}: ${name} ($${price})`);
  };

  return (
    <div className="p-6 max-w-lg">
      <h1 className="text-2xl font-bold mb-4">Edit Product #{id}</h1>
      <div className="flex flex-col gap-4">
        <div>
          <Label>Product Name</Label>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <Label>Price</Label>
          <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <Button onClick={handleUpdate}>Update Product</Button>
      </div>
    </div>
  );
};

export default EditProduct;
