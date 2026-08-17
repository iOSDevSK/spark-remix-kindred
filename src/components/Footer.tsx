import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12">
          <div>
            <h3 className="text-2xl font-light tracking-wide text-foreground mb-3">Terra Studios</h3>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Handcrafted knitwear made slowly, in small batches, from natural fibres.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="w-[18px] h-[18px] text-muted-foreground hover:text-foreground transition-colors" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[11px] uppercase tracking-[0.2em] text-foreground mb-1">Shop</p>
            <Link to="/shop?category=Knitwear" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Knitwear</Link>
            <Link to="/shop?category=Scarves" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Scarves</Link>
            <Link to="/shop?category=Accessories" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Accessories</Link>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[11px] uppercase tracking-[0.2em] text-foreground mb-1">Studio</p>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link to="/journal" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Journal</Link>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[11px] uppercase tracking-[0.2em] text-foreground mb-1">Orders</p>
            <Link to="/cart" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cart</Link>
            <Link to="/checkout" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Checkout</Link>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Terra Studios. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Free shipping on orders over $200</p>
        </div>
      </div>
    </footer>
  );
}
