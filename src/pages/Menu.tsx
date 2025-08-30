import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { CategoryCard } from "@/components/CategoryCard";
import { FoodCard } from "@/components/FoodCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import pizzaImg from "@/assets/pizza.jpg";
import burgerImg from "@/assets/burger.jpg";
import saladImg from "@/assets/salad.jpg";

// Mock data
const categories = [
  { id: "pizza", name: "Pizza", image: pizzaImg, itemCount: 12 },
  { id: "burgers", name: "Burgers", image: burgerImg, itemCount: 8 },
  { id: "salads", name: "Salads", image: saladImg, itemCount: 6 },
];

const menuItems = [
  {
    id: "1",
    name: "Margherita Pizza",
    description: "Fresh tomatoes, mozzarella cheese, basil leaves, and olive oil on a crispy crust",
    price: 18.99,
    image: pizzaImg,
    rating: 4.8,
    category: "Pizza",
    isPopular: true,
  },
  {
    id: "2", 
    name: "Classic Cheeseburger",
    description: "Juicy beef patty with melted cheese, lettuce, tomato, onion, and special sauce",
    price: 14.99,
    image: burgerImg,
    rating: 4.6,
    category: "Burgers",
    isPopular: true,
  },
  {
    id: "3",
    name: "Fresh Garden Salad",
    description: "Mixed greens, cherry tomatoes, cucumber, carrots with balsamic vinaigrette",
    price: 12.99,
    image: saladImg,
    rating: 4.5,
    category: "Salads",
  },
  {
    id: "4",
    name: "Pepperoni Pizza",
    description: "Classic pepperoni with mozzarella cheese and tangy tomato sauce",
    price: 20.99,
    image: pizzaImg,
    rating: 4.7,
    category: "Pizza",
  },
  {
    id: "5",
    name: "BBQ Bacon Burger",
    description: "Smoky BBQ sauce, crispy bacon, onion rings, and cheddar cheese",
    price: 16.99,
    image: burgerImg,
    rating: 4.9,
    category: "Burgers",
  },
  {
    id: "6",
    name: "Caesar Salad",
    description: "Crisp romaine lettuce, parmesan cheese, croutons, and caesar dressing",
    price: 13.99,
    image: saladImg,
    rating: 4.4,
    category: "Salads",
  },
];

const Menu = () => {
  const [cart, setCart] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddToCart = (itemId: string) => {
    setCart([...cart, itemId]);
  };

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = !selectedCategory || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation cartItemCount={cart.length} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Our <span className="text-primary">Delicious</span> Menu
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            Discover our carefully crafted dishes made with the finest ingredients
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search for food..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Browse Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                name={category.name}
                image={category.image}
                itemCount={category.itemCount}
                onClick={() => setSelectedCategory(
                  selectedCategory === category.name ? null : category.name
                )}
              />
            ))}
          </div>
          {selectedCategory && (
            <div className="flex items-center justify-between">
              <p className="text-muted-foreground">
                Showing {selectedCategory} items
              </p>
              <Button 
                variant="ghost" 
                onClick={() => setSelectedCategory(null)}
              >
                Clear Filter
              </Button>
            </div>
          )}
        </section>

        {/* Menu Items */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">
            {selectedCategory ? `${selectedCategory} Menu` : "All Items"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <FoodCard
                key={item.id}
                id={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                rating={item.rating}
                category={item.category}
                isPopular={item.isPopular}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No items found matching your search.
              </p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Menu;