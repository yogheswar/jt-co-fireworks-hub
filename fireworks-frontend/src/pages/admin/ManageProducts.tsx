import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/api/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    const res = await fetch(`http://localhost:5000/api/products/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      alert("Product deleted!");
      setProducts(products.filter(p => p._id !== id));
    } else {
      const data = await res.json();
      alert("Error: " + data.message);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Products</h1>
      <div className="flex flex-col gap-4">
        {products.map((p) => (
          <div key={p._id} className="flex justify-between items-center border p-2 rounded">
            <div>
              <p><strong>{p.name}</strong> (${p.price})</p>
              <p>Category: {p.category}</p>
            </div>
            <Button variant="destructive" onClick={() => handleDelete(p._id)}>
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;