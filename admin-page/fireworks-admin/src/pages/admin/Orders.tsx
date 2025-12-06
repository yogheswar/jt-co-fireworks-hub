import { useState } from "react";
import { Search, Eye, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger
} from "@/components/ui/dialog";
import AdminLayout from "@/components/admin/AdminLayout";
import { useCart } from "@/context/CartContext";
import { Order } from "@/types";

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
  confirmed: "bg-blue-100 text-blue-800 border-blue-200",
  delivered: "bg-green-100 text-green-800 border-green-200",
  cancelled: "bg-red-100 text-red-800 border-red-200",
};

const Orders = () => {
  const { orders, updateOrderStatus } = useCart(); // REAL ORDERS
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customerName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || order.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <AdminLayout title="Orders" subtitle={`Manage ${orders.length} orders`}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search order ID or name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Filter */}
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="confirmed">Confirmed</SelectItem>
            <SelectItem value="delivered">Delivered</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* TABLE */}
      <Table className="mt-6">
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Items</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">View</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {filteredOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">{order.id}</TableCell>
              <TableCell>{order.customerName}</TableCell>
              <TableCell>{order.customerPhone}</TableCell>
              <TableCell>{order.items.length} items</TableCell>
              <TableCell>₹{order.total}</TableCell>

              <TableCell>
                <Select
                  value={order.status}
                  onValueChange={(value) =>
                    updateOrderStatus(order.id, value as Order["status"])
                  }
                >
                  <SelectTrigger className="w-[130px]">
                    <Badge className={statusColors[order.status]}>
                      {order.status}
                    </Badge>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="confirmed">Confirmed</SelectItem>
                    <SelectItem value="delivered">Delivered</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>

              <TableCell>
                {new Date(order.createdAt).toLocaleDateString()}
              </TableCell>

              <TableCell className="text-right">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setSelectedOrder(order)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>

                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Order {order.id}</DialogTitle>
                    </DialogHeader>

                    <div className="space-y-4">
                      <p><b>Name:</b> {order.customerName}</p>
                      <p><b>Phone:</b> {order.customerPhone}</p>
                      <p><b>Address:</b> {order.customerAddress}</p>
                      <p><b>Payment:</b> {order.paymentMethod}</p>

                      <div>
                        <h4 className="font-semibold mb-2">Items</h4>
                        {order.items.map((item) => (
                          <div key={item._id} className="flex justify-between mb-2">
                            <span>{item.name} × {item.quantity}</span>
                            <span>₹{item.price * item.quantity}</span>
                          </div>
                        ))}
                      </div>

                      <div className="font-bold text-lg">
                        Total: ₹{order.total}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>

      {filteredOrders.length === 0 && (
        <p className="text-center mt-10 text-muted-foreground">No orders found.</p>
      )}
    </AdminLayout>
  );
};

export default Orders;
