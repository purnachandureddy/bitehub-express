import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Clock, Truck } from "lucide-react";
import heroFood from "@/assets/hero-food.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroFood} 
          alt="Delicious food spread" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Delicious Food
            <br />
            <span className="text-food-yellow">Delivered Fast</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up">
            Craving something delicious? Order from your favorite restaurants and get it delivered hot and fresh to your doorstep in minutes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-bounce-in">
            <Link to="/menu">
              <Button size="lg" className="text-lg px-8 py-6 hover-lift">
                Order Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/menu">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20 hover-lift">
                View Menu
              </Button>
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in">
            <div className="flex items-center justify-center md:justify-start space-x-3 text-white">
              <div className="bg-white/20 rounded-full p-3">
                <Star className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">4.8+ Rating</h3>
                <p className="text-sm text-white/80">Highly Rated</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center md:justify-start space-x-3 text-white">
              <div className="bg-white/20 rounded-full p-3">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">30 Min</h3>
                <p className="text-sm text-white/80">Fast Delivery</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center md:justify-start space-x-3 text-white">
              <div className="bg-white/20 rounded-full p-3">
                <Truck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Free Delivery</h3>
                <p className="text-sm text-white/80">Orders $25+</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Food Icons */}
      <div className="absolute top-20 left-10 animate-float hidden lg:block">
        <div className="text-4xl">🍕</div>
      </div>
      <div className="absolute top-40 right-20 animate-float hidden lg:block" style={{ animationDelay: '1s' }}>
        <div className="text-4xl">🍔</div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float hidden lg:block" style={{ animationDelay: '2s' }}>
        <div className="text-4xl">🥗</div>
      </div>
    </section>
  );
};