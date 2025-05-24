import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const products = {
  electronics: [
    {
      id: 1,
      name: "Premium Headphones",
      price: 299,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      category: "Electronics"
    },
    {
      id: 2,
      name: "Wireless Speaker",
      price: 199,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80",
      category: "Electronics"
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 249,
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80",
      category: "Electronics"
    },
    {
      id: 8,
      name: "Wireless Earbuds",
      price: 129,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
      category: "Electronics"
    },
    {
      id: 19,
      name: "Smart Home Hub",
      price: 179,
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=800&q=80",
      category: "Electronics"
    },
    {
      id: 20,
      name: "Drone Camera",
      price: 599,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
      category: "Electronics"
    }
  ],
  accessories: [
    {
      id: 4,
      name: "Laptop Stand",
      price: 79,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80",
      category: "Accessories"
    },
    {
      id: 7,
      name: "USB-C Hub",
      price: 69,
      image: "https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?w=800&q=80",
      category: "Accessories"
    },
    {
      id: 9,
      name: "Phone Case",
      price: 29,
      image: "https://images.unsplash.com/photo-1541877590-a229a13a2d8d?w=800&q=80",
      category: "Accessories"
    },
    {
      id: 10,
      name: "Wireless Charger",
      price: 49,
      image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?w=800&q=80",
      category: "Accessories"
    },
    {
      id: 21,
      name: "Smart Watch Band",
      price: 39,
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&q=80",
      category: "Accessories"
    },
    {
      id: 22,
      name: "Laptop Sleeve",
      price: 45,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      category: "Accessories"
    }
  ],
  computers: [
    {
      id: 11,
      name: "Gaming Laptop",
      price: 1299,
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&q=80",
      category: "Computers"
    },
    {
      id: 12,
      name: "Desktop PC",
      price: 999,
      image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=800&q=80",
      category: "Computers"
    },
    {
      id: 13,
      name: "Mechanical Keyboard",
      price: 159,
      image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800&q=80",
      category: "Computers"
    },
    {
      id: 14,
      name: "Gaming Mouse",
      price: 89,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80",
      category: "Computers"
    },
    {
      id: 23,
      name: "Ultra-wide Monitor",
      price: 699,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      category: "Computers"
    },
    {
      id: 24,
      name: "All-in-One PC",
      price: 1499,
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&q=80",
      category: "Computers"
    }
  ],
  cameras: [
    {
      id: 15,
      name: "DSLR Camera",
      price: 899,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
      category: "Cameras"
    },
    {
      id: 16,
      name: "Mirrorless Camera",
      price: 1199,
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&q=80",
      category: "Cameras"
    },
    {
      id: 17,
      name: "Camera Lens",
      price: 549,
      image: "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=800&q=80",
      category: "Cameras"
    },
    {
      id: 18,
      name: "Camera Tripod",
      price: 129,
      image: "https://images.unsplash.com/photo-1584715642381-6f1c4b452b1c?w=800&q=80",
      category: "Cameras"
    },
    {
      id: 25,
      name: "Action Camera",
      price: 349,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80",
      category: "Cameras"
    },
    {
      id: 26,
      name: "Camera Backpack",
      price: 89,
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80",
      category: "Cameras"
    }
  ]
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <section className="text-center mb-16 page-transition">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of premium products designed to enhance your lifestyle.
          </p>
        </section>

        <section className="mb-16">
          <Tabs defaultValue="electronics" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="electronics">Electronics</TabsTrigger>
              <TabsTrigger value="accessories">Accessories</TabsTrigger>
              <TabsTrigger value="computers">Computers</TabsTrigger>
              <TabsTrigger value="cameras">Cameras</TabsTrigger>
            </TabsList>
            
            <TabsContent value="electronics" className="page-transition">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.electronics.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="accessories" className="page-transition">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.accessories.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="computers" className="page-transition">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.computers.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="cameras" className="page-transition">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.cameras.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section className="grid md:grid-cols-2 gap-8 page-transition">
          <div className="glass-card p-8 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4">New Arrivals</h3>
            <p className="text-gray-600 mb-4">
              Be the first to discover our latest products.
            </p>
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80"
              alt="New Arrivals"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
          </div>
          <div className="glass-card p-8 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Special Offers</h3>
            <p className="text-gray-600 mb-4">
              Explore our current deals and discounts.
            </p>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
              alt="Special Offers"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;