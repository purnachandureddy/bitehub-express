import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Clock, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              About <span className="text-primary">BiteHub</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              We're passionate about bringing delicious food from your favorite restaurants 
              directly to your doorstep, fast and fresh.
            </p>
          </div>

          {/* Mission */}
          <Card className="mb-12 shadow-card">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                At BiteHub, we believe that great food should be accessible to everyone, 
                anytime, anywhere. We partner with the best local restaurants to deliver 
                exceptional dining experiences right to your home or office. Our mission 
                is to connect food lovers with their favorite flavors while supporting 
                local businesses in our community.
              </p>
            </CardContent>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            
            <div className="text-center">
              <div className="bg-secondary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-2xl font-bold text-secondary">500+</div>
              <div className="text-sm text-muted-foreground">Restaurant Partners</div>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <div className="text-2xl font-bold text-accent">30min</div>
              <div className="text-sm text-muted-foreground">Average Delivery</div>
            </div>
            
            <div className="text-center">
              <div className="bg-food-green/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Heart className="h-8 w-8 text-food-green" />
              </div>
              <div className="text-2xl font-bold text-food-green">4.8★</div>
              <div className="text-sm text-muted-foreground">Customer Rating</div>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-card hover-lift">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                <p className="text-muted-foreground">
                  We guarantee fresh, hot food delivered to you in 30 minutes or less.
                </p>
                <Badge className="mt-3">Express Service</Badge>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover-lift">
              <CardContent className="p-6 text-center">
                <div className="bg-secondary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality First</h3>
                <p className="text-muted-foreground">
                  We partner only with restaurants that meet our high standards for quality and freshness.
                </p>
                <Badge variant="secondary" className="mt-3">Premium Quality</Badge>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover-lift">
              <CardContent className="p-6 text-center">
                <div className="bg-food-green/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-food-green" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community Focus</h3>
                <p className="text-muted-foreground">
                  Supporting local restaurants and creating connections within our community.
                </p>
                <Badge className="mt-3 bg-food-green text-white">Local Love</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;