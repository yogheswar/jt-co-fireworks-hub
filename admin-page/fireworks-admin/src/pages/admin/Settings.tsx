import { useState } from "react";
import { Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import AdminLayout from "@/components/admin/AdminLayout";

const Settings = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [settings, setSettings] = useState({
    storeName: "JT&Co Crackers",
    storeEmail: "contact@jtcocrackers.com",
    storePhone: "+91 98765 43210",
    storeAddress: "Sivakasi, Tamil Nadu, India",
    storeDescription: "Premium quality fireworks and crackers since 1985",
    enableOrders: true,
    enableNotifications: true,
    lowStockThreshold: "10",
  });

  const handleSave = async () => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("Settings saved successfully");
    setIsSubmitting(false);
  };

  return (
    <AdminLayout title="Settings" subtitle="Manage your store preferences">
      <div className="grid gap-6 lg:grid-cols-2 animate-fade-in">
        {/* Store Information */}
        <Card className="shadow-card border-border/50">
          <CardHeader>
            <CardTitle className="font-display text-lg">Store Information</CardTitle>
            <CardDescription>Basic information about your store</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="storeName">Store Name</Label>
              <Input
                id="storeName"
                value={settings.storeName}
                onChange={(e) =>
                  setSettings({ ...settings, storeName: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="storeEmail">Email Address</Label>
              <Input
                id="storeEmail"
                type="email"
                value={settings.storeEmail}
                onChange={(e) =>
                  setSettings({ ...settings, storeEmail: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="storePhone">Phone Number</Label>
              <Input
                id="storePhone"
                value={settings.storePhone}
                onChange={(e) =>
                  setSettings({ ...settings, storePhone: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="storeAddress">Address</Label>
              <Input
                id="storeAddress"
                value={settings.storeAddress}
                onChange={(e) =>
                  setSettings({ ...settings, storeAddress: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="storeDescription">Store Description</Label>
              <Textarea
                id="storeDescription"
                rows={3}
                value={settings.storeDescription}
                onChange={(e) =>
                  setSettings({ ...settings, storeDescription: e.target.value })
                }
              />
            </div>
          </CardContent>
        </Card>

        {/* Preferences */}
        <Card className="shadow-card border-border/50">
          <CardHeader>
            <CardTitle className="font-display text-lg">Preferences</CardTitle>
            <CardDescription>Configure store behavior</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="enableOrders">Accept Orders</Label>
                <p className="text-sm text-muted-foreground">
                  Allow customers to place orders
                </p>
              </div>
              <Switch
                id="enableOrders"
                checked={settings.enableOrders}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, enableOrders: checked })
                }
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="enableNotifications">Email Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive email for new orders
                </p>
              </div>
              <Switch
                id="enableNotifications"
                checked={settings.enableNotifications}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, enableNotifications: checked })
                }
              />
            </div>
            <Separator />
            <div className="space-y-2">
              <Label htmlFor="lowStockThreshold">Low Stock Alert Threshold</Label>
              <p className="text-sm text-muted-foreground">
                Alert when product stock falls below this number
              </p>
              <Input
                id="lowStockThreshold"
                type="number"
                className="w-32"
                value={settings.lowStockThreshold}
                onChange={(e) =>
                  setSettings({ ...settings, lowStockThreshold: e.target.value })
                }
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Save Button */}
      <div className="mt-8 flex justify-end">
        <Button
          onClick={handleSave}
          className="gradient-primary"
          disabled={isSubmitting}
        >
          <Save className="mr-2 h-4 w-4" />
          {isSubmitting ? "Saving..." : "Save Settings"}
        </Button>
      </div>
    </AdminLayout>
  );
};

export default Settings;
