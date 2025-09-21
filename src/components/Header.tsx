import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/content", label: "Content" },
  ];

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold text-primary hover:text-accent transition-colors">
            Platform Toolkit
          </Link>
          
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  location.pathname === item.href 
                    ? "text-accent" 
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;