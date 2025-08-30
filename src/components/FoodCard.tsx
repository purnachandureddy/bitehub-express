import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Plus } from "lucide-react";

interface FoodCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  category: string;
  isPopular?: boolean;
  onAddToCart: (id: string) => void;
}

export const FoodCard = ({ 
  id, 
  name, 
  description, 
  price, 
  image, 
  rating, 
  category, 
  isPopular = false,
  onAddToCart 
}: FoodCardProps) => {
  return (
    <Card className="group overflow-hidden hover-lift shadow-card transition-smooth">
      <div className="relative">
        <div className="aspect-[4/3] overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          />
        </div>
        {isPopular && (
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
            Popular
          </Badge>
        )}
        <div className="absolute top-3 right-3 flex items-center space-x-1 bg-white/90 rounded-full px-2 py-1">
          <Star className="h-3 w-3 fill-food-yellow text-food-yellow" />
          <span className="text-xs font-medium">{rating}</span>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg text-foreground">{name}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
            <Badge variant="secondary" className="mt-2 text-xs">
              {category}
            </Badge>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">
              ${price.toFixed(2)}
            </div>
            <Button 
              onClick={() => onAddToCart(id)}
              className="hover-scale"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};