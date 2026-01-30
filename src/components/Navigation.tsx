import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { name: "Inicio", path: "/" },
    { name: "Nosotros", path: "/nosotros" },
    { name: "Para vos", path: "/servicios" },
    { name: "Biblioteca", path: "/biblioteca" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Hwa Rang Logo" className="h-12 w-auto" />
          </NavLink>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-all duration-300 relative ${
                    isActive
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-primary/20 text-primary"
                      : "text-foreground hover:bg-primary/10 hover:text-primary"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
