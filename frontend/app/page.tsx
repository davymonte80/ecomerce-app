import React from 'react';
import { ShoppingCart, Package, CreditCard, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Header from './components/Header';
const LandingPage = () => {
  const features = [
    {
      icon: <ShoppingCart className="h-6 w-6 mb-4 text-primary" />,
      title: "Easy Shopping",
      description: "Browse through our carefully curated collection of products with our intuitive shopping interface."
    },
    {
      icon: <Package className="h-6 w-6 mb-4 text-primary" />,
      title: "Fast Delivery",
      description: "Get your orders delivered quickly and securely to your doorstep with our reliable shipping partners."
    },
    {
      icon: <CreditCard className="h-6 w-6 mb-4 text-primary" />,
      title: "Secure Payments",
      description: "Shop with confidence using our secure payment gateway with multiple payment options."
    },
    {
      icon: <Clock className="h-6 w-6 mb-4 text-primary" />,
      title: "24/7 Support",
      description: "Our customer support team is always ready to help you with any questions or concerns."
    }
  ];

  return (
    <div className="min-h-screen">
     <div><Header /></div>
     
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover Amazing Products
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Shop the latest trends with our curated collection of premium products.
              Experience seamless shopping with fast delivery and secure payments.
            </p>
            <Button size="lg" className="mr-4">
              Shop Now
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <Image
                    src={`/api/placeholder/400/300`}
                    alt={`Product ${item}`}
                    className="object-cover w-full h-48"
                    width={400}
                    height={300}
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Product {item}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Shopping?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and experience the best in online shopping.
          </p>
          <Button variant="secondary" size="lg">
            Create Account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;