import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ImageIcon, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import AdminLayout from "@/components/admin/AdminLayout";
import { productApi, ALLOWED_CATEGORIES } from "@/lib/api";

const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      try {
        // Fetch all products and find the one we need
        const products = await productApi.getAll();
        const product = products.find((p: { _id: string }) => p._id === id);
        if (product) {
          setFormData({
            name: product.name,
            description: product.description || "",
            price: product.price.toString(),
            category: product.category,
            image: product.image || "",
          });
        } else {
          toast.error("Product not found");
          navigate("/admin/products");
        }
      } catch (error) {
        toast.error("Failed to fetch product");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;
    
    if (!formData.category) {
      toast.error("Please select a category");
      return;
    }

    setIsSubmitting(true);

    try {
      await productApi.update(id, {
        name: formData.name,
        price: Number(formData.price),
        description: formData.description,
        image: formData.image,
        category: formData.category,
      });
      toast.success("Product updated successfully!");
      navigate("/admin/products");
    } catch (error) {
      toast.error("Failed to update product");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Filter out "all" from categories for the form
  const formCategories = ALLOWED_CATEGORIES.filter(cat => cat !== "all");

  if (loading) {
    return (
      <AdminLayout title="Edit Product" subtitle="Update product information">
        <div className="flex justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Edit Product" subtitle="Update product information">
      <Button
        variant="ghost"
        onClick={() => navigate("/admin/products")}
        className="mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Products
      </Button>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Info */}
          <Card className="shadow-card border-border/50 lg:col-span-2">
            <CardHeader>
              <CardTitle className="font-display text-lg">Product Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Product Name</Label>
                <Input
                  id="name"
                  placeholder="Enter product name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Enter product description"
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">Price (₹)</Label>
                <Input
                  id="price"
                  type="number"
                  placeholder="0"
                  min="0"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {formCategories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Image */}
            <Card className="shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="font-display text-lg">Product Image</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {formData.image ? (
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                      <img
                        src={formData.image}
                        alt="Preview"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-square flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted/30">
                      <ImageIcon className="mb-2 h-10 w-10 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">No image</p>
                    </div>
                  )}
                  <Input
                    placeholder="Image URL"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() => navigate("/admin/products")}
              >
                Cancel
              </Button>
              <Button type="submit" className="flex-1 gradient-primary" disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </AdminLayout>
  );
};

export default EditProduct;
