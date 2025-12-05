import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { productApi } from "@/lib/api";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const loadProducts = async () => {
    const data = await productApi.getAll();
    setProducts(data);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this product?")) return;

    await fetch(`https://jt-co-fireworks-hub-production-ac21.up.railway.app/api/products/${id}`, {
      method: "DELETE",
    });

    loadProducts();
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Products</h1>

      <Button className="mb-4" onClick={() => navigate("/admin/products/add")}>
        Add New Product
      </Button>

      <div className="grid gap-4">
        {products.map((product: any) => (
          <div key={product._id} className="border p-4 rounded-md shadow flex justify-between items-center">
            <div>
              <h2 className="font-bold">{product.name}</h2>
              <p className="text-sm text-gray-600">₹{product.price}</p>
              <p className="text-xs text-gray-500">{product.category}</p>
            </div>

            <div className="flex gap-2">
              <Button onClick={() => navigate(`/admin/products/edit/${product._id}`)}>
                Edit
              </Button>

              <Button variant="destructive" onClick={() => handleDelete(product._id)}>
                Delete
              </Button>
            </div>
          </div>
        ))}

        {products.length === 0 && (
          <p className="text-gray-500 text-center py-10">No products available</p>
        )}
      </div>
    </div>
  );
};

export default ManageProducts;
