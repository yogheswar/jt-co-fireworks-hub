import { useNavigate } from "react-router-dom";
import { Sparkles, ArrowRight, Shield, Package, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Package,
    title: "Wide Range",
    description: "Over 500+ varieties of crackers and fireworks",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Premium products from Sivakasi since 1985",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick shipping across Tamil Nadu",
  },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold text-foreground">
              JT&Co Crackers
            </span>
          </div>

          {/* 👉 Only ONE button: Dashboard */}
          <div className="flex items-center gap-4">
            <Button
              onClick={() => navigate("/admin")}
              className="gradient-primary"
            >
              Login
            </Button>
          </div>

        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container relative mx-auto px-4 text-center">
          <div className="mx-auto max-w-3xl animate-fade-in">

            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Light Up Your{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Celebrations
              </span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground lg:text-xl">
              Premium quality fireworks and crackers from Sivakasi, Tamil Nadu.
              Making your festivals brighter since 1985.
            </p>

            {/* Hero Button */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

              <Button
                size="lg"
                onClick={() => navigate("/admin")}
                className="py-6 px-10 text-lg gradient-primary text-primary-foreground"
              >
                Admin Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

            </div>

          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="shadow-card border-border/50 transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl gradient-primary">
                    <feature.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="gradient-primary overflow-hidden">
            <CardContent className="p-12 text-center text-primary-foreground">

              <h2 className="font-display text-3xl font-bold">
                Need admin insights?
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-primary-foreground/90">
                Access reports, track performance, and analyze your business
                effortlessly from the dashboard.
              </p>

              {/* CTA updated → View Reports */}
              <Button
                size="lg"
                variant="secondary"
                className="mt-8"
                onClick={() => navigate("/admin")}
              >
                View Reports
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="container mx-auto px-4 text-center">

          <div className="flex items-center justify-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="font-display font-semibold text-foreground">
              JT&Co Crackers
            </span>
          </div>

          <p className="mt-2 text-sm text-muted-foreground">
            Sivakasi, Tamil Nadu | Since 1985
          </p>

          <p className="mt-4 text-xs text-muted-foreground">
            © {new Date().getFullYear()} JT&Co Crackers. All rights reserved.
          </p>

        </div>
      </footer>
    </div>
  );
};

export default Index;
