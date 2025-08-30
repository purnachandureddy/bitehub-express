import { Card } from "@/components/ui/card";

interface CategoryCardProps {
  name: string;
  image: string;
  itemCount: number;
  onClick: () => void;
}

export const CategoryCard = ({ name, image, itemCount, onClick }: CategoryCardProps) => {
  return (
    <Card 
      className="group cursor-pointer overflow-hidden hover-lift shadow-card transition-smooth"
      onClick={onClick}
    >
      <div className="aspect-square relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-sm text-white/80">{itemCount} items</p>
        </div>
      </div>
    </Card>
  );
};