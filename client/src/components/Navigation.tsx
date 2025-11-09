import { Button } from "@/components/ui/button";
import bitcoinIcon from "@assets/generated_images/Pixel_Bitcoin_logo_34414e61.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "MEME", href: "#" },
    { label: "CLAIM MEME", href: "#claim" },
    { label: "FARMING 🧑‍🌾", href: "#farming" },
    { label: "STAKELAND", href: "#stake" },
    { label: "BUY MEME", href: "#buy" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-4 border-foreground/20" data-testid="nav-main">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img 
              src={bitcoinIcon} 
              alt="BTC" 
              className="w-10 h-10 pixelated"
              data-testid="img-nav-logo"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="px-4 py-2 font-serif text-xs hover-elevate active-elevate-2 rounded-sm text-foreground transition-colors"
                data-testid={`link-nav-${index}`}
                onClick={(e) => {
                  e.preventDefault();
                  console.log(`${item.label} clicked`);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Social Icons Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href="#" 
              className="hover-elevate p-2 rounded-sm"
              data-testid="link-nav-twitter"
              onClick={(e) => { e.preventDefault(); console.log('Twitter clicked'); }}
            >
              <span className="text-xl">𝕏</span>
            </a>
            <a 
              href="#" 
              className="hover-elevate p-2 rounded-sm"
              data-testid="link-nav-telegram"
              onClick={(e) => { e.preventDefault(); console.log('Telegram clicked'); }}
            >
              <span className="text-xl">✈</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-nav-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4" data-testid="nav-mobile-menu">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block px-4 py-3 font-serif text-xs hover-elevate text-foreground border-t border-border"
                data-testid={`link-nav-mobile-${index}`}
                onClick={(e) => {
                  e.preventDefault();
                  console.log(`${item.label} clicked`);
                  setIsOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}