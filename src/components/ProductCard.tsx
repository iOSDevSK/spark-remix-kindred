import { Link } from "react-router-dom";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link to={`/product/${product.slug}`} className="group relative block">
      <div className="relative overflow-hidden bg-[hsl(var(--warm-bg))]">
        <img
          src={product.image}
          alt={product.name}
          width={800}
          height={800}
          className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {product.badge === "sale" && (
          <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-[10px] uppercase tracking-widest px-2.5 py-1">
            Sale
          </span>
        )}
        {product.badge === "sold-out" && (
          <span className="absolute top-3 left-3 bg-foreground/80 text-background text-[10px] uppercase tracking-widest px-2.5 py-1">
            Sold out
          </span>
        )}
      </div>
      <div className="mt-4">
        <p className="text-[11px] uppercase tracking-widest text-muted-foreground">{product.category}</p>
        <h3 className="mt-1 text-base font-light text-foreground">{product.name}</h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm text-foreground">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground/60 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
          {product.availability && (
            <span className="ml-auto text-xs text-muted-foreground">{product.availability}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
