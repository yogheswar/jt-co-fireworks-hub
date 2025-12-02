import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Order } from '@/types';
import {
  Package,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  Truck,
  ArrowLeft,
  Eye,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Admin = () => {
  const { orders, updateOrderStatus } = useCart();
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const filteredOrders = orders.filter(
    (order) => filterStatus === 'all' || order.status === filterStatus
  );

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'confirmed':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'delivered':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'cancelled':
        return 'bg-red-100 text-red-800 border-red-300';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-4 h-4" />;
      case 'confirmed':
        return <CheckCircle className="w-4 h-4" />;
      case 'delivered':
        return <Truck className="w-4 h-4" />;
      case 'cancelled':
        return <XCircle className="w-4 h-4" />;
    }
  };

  const stats = {
    total: orders.length,
    pending: orders.filter((o) => o.status === 'pending').length,
    confirmed: orders.filter((o) => o.status === 'confirmed').length,
    delivered: orders.filter((o) => o.status === 'delivered').length,
    revenue: orders
      .filter((o) => o.status !== 'cancelled')
      .reduce((sum, o) => sum + o.total, 0),
  };

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - JT&Co Crackers</title>
        <meta name="description" content="Admin dashboard for JT&Co Crackers. Manage orders and track sales." />
      </Helmet>

      <div className="min-h-screen bg-muted">
        {/* Header */}
        <header className="bg-background border-b border-border sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link to="/">
                  <Button variant="ghost" size="icon">
                    <ArrowLeft className="w-5 h-5" />
                  </Button>
                </Link>
                <div>
                  <h1 className="font-display text-xl md:text-2xl font-bold text-foreground">
                    Admin Dashboard
                  </h1>
                  <p className="font-body text-sm text-muted-foreground">
                    Manage your orders and track sales
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-background p-6 rounded-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-foreground/10 rounded-lg flex items-center justify-center">
                  <Package className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="font-body text-sm text-muted-foreground">Total Orders</p>
                  <p className="font-display text-2xl font-bold text-foreground">{stats.total}</p>
                </div>
              </div>
            </div>

            <div className="bg-background p-6 rounded-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <p className="font-body text-sm text-muted-foreground">Pending</p>
                  <p className="font-display text-2xl font-bold text-foreground">{stats.pending}</p>
                </div>
              </div>
            </div>

            <div className="bg-background p-6 rounded-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-body text-sm text-muted-foreground">Delivered</p>
                  <p className="font-display text-2xl font-bold text-foreground">{stats.delivered}</p>
                </div>
              </div>
            </div>

            <div className="bg-background p-6 rounded-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-foreground/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="font-body text-sm text-muted-foreground">Revenue</p>
                  <p className="font-display text-2xl font-bold text-foreground">₹{stats.revenue}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Orders Section */}
          <div className="bg-background rounded-lg border border-border">
            <div className="p-6 border-b border-border">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h2 className="font-display text-xl font-semibold text-foreground">Orders</h2>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Orders</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="confirmed">Confirmed</SelectItem>
                    <SelectItem value="delivered">Delivered</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {filteredOrders.length > 0 ? (
              <div className="divide-y divide-border">
                {filteredOrders.map((order) => (
                  <div key={order.id} className="p-6 hover:bg-muted/50 transition-colors">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="font-display font-semibold text-foreground">
                            {order.id}
                          </span>
                          <Badge className={cn('flex items-center gap-1', getStatusColor(order.status))}>
                            {getStatusIcon(order.status)}
                            <span className="capitalize">{order.status}</span>
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground font-body">
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {order.customerName}
                          </span>
                          <span>{order.customerPhone}</span>
                        </div>
                        <p className="font-body text-sm text-muted-foreground">
                          {order.items.length} items • ₹{order.total}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <Select
                          value={order.status}
                          onValueChange={(value) =>
                            updateOrderStatus(order.id, value as Order['status'])
                          }
                        >
                          <SelectTrigger className="w-[140px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="confirmed">Confirmed</SelectItem>
                            <SelectItem value="delivered">Delivered</SelectItem>
                            <SelectItem value="cancelled">Cancelled</SelectItem>
                          </SelectContent>
                        </Select>

                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => setSelectedOrder(order)}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-12 text-center">
                <Package className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                <p className="font-display text-lg font-semibold text-foreground">No orders found</p>
                <p className="font-body text-muted-foreground mt-1">
                  {filterStatus === 'all'
                    ? 'Orders will appear here when customers place them'
                    : `No ${filterStatus} orders at the moment`}
                </p>
              </div>
            )}
          </div>
        </main>

        {/* Order Detail Modal */}
        {selectedOrder && (
          <div className="fixed inset-0 bg-foreground/50 z-50 flex items-center justify-center p-4">
            <div className="bg-background rounded-lg w-full max-w-lg max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-border flex items-center justify-between">
                <h3 className="font-display text-xl font-semibold">Order Details</h3>
                <Button variant="ghost" size="icon" onClick={() => setSelectedOrder(null)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="p-6 space-y-6">
                {/* Order Info */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-display font-semibold text-foreground">
                      {selectedOrder.id}
                    </span>
                    <Badge className={cn('flex items-center gap-1', getStatusColor(selectedOrder.status))}>
                      {getStatusIcon(selectedOrder.status)}
                      <span className="capitalize">{selectedOrder.status}</span>
                    </Badge>
                  </div>
                  <p className="font-body text-sm text-muted-foreground">
                    {new Date(selectedOrder.createdAt).toLocaleString()}
                  </p>
                </div>

                {/* Customer Info */}
                <div className="bg-muted p-4 rounded-lg space-y-2">
                  <h4 className="font-display font-semibold text-foreground">Customer Details</h4>
                  <p className="font-body text-sm">{selectedOrder.customerName}</p>
                  <p className="font-body text-sm">{selectedOrder.customerPhone}</p>
                  <p className="font-body text-sm text-muted-foreground">{selectedOrder.customerAddress}</p>
                </div>

                {/* Order Items */}
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-3">Order Items</h4>
                  <div className="space-y-2">
                    {selectedOrder.items.map((item) => (
                      <div key={item.id} className="flex justify-between font-body text-sm">
                        <span>
                          {item.name} × {item.quantity}
                        </span>
                        <span className="font-semibold">₹{item.price * item.quantity}</span>
                      </div>
                    ))}
                    <div className="border-t border-border pt-2 mt-2 flex justify-between">
                      <span className="font-display font-semibold">Total</span>
                      <span className="font-display font-bold text-lg">₹{selectedOrder.total}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Admin;
