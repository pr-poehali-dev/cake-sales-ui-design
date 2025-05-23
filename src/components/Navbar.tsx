import { ShoppingCart, Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-primary font-bold text-2xl">СладКо</Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="font-medium hover:text-primary transition-colors">Главная</Link>
            <Link to="/catalog" className="font-medium hover:text-primary transition-colors">Каталог</Link>
            <Link to="/about" className="font-medium hover:text-primary transition-colors">О нас</Link>
            <Link to="/contacts" className="font-medium hover:text-primary transition-colors">Контакты</Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(true)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-background z-50 p-4">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="text-primary font-bold text-2xl">СладКо</Link>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          <div className="flex flex-col space-y-4">
            <Link to="/" className="py-2 font-medium border-b border-border" onClick={() => setIsMenuOpen(false)}>Главная</Link>
            <Link to="/catalog" className="py-2 font-medium border-b border-border" onClick={() => setIsMenuOpen(false)}>Каталог</Link>
            <Link to="/about" className="py-2 font-medium border-b border-border" onClick={() => setIsMenuOpen(false)}>О нас</Link>
            <Link to="/contacts" className="py-2 font-medium border-b border-border" onClick={() => setIsMenuOpen(false)}>Контакты</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;