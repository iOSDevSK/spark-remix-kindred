import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Truck, RotateCcw } from "lucide-react";
import QuantitySelector from "@/components/QuantitySelector";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import { getProductBySlug, getRelatedProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export default function ProductDetail() {
  const { slug = "" } = useParams();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const { toast } = useToast();

  const [activeImage, setActiveImage] = useState(0);
  const [size, setSize] = useState<string | undefined>(product?.sizes?.[0]);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-32 text-center">
        <h1 className="text-3xl font-light text-foreground mb-4">Product not found</h1>
        <Link to="/shop" className="text-sm uppercase tracking-widest border-b border-foreground pb-1">
          Back to shop
        </Link>
      </div>
    );
  }

  const soldOut = product.badge === "sold-out";
  const related = getRelatedProducts(product.slug, 3);

  const handleAdd = () => {
    addItem(
      { slug: product.slug, name: product.name, price: product.price, image: product.image, size },
      quantity
    );
    toast({
      title: "Added to cart",
      description: `${product.name}${size ? ` · ${size}` : ""} × ${quantity}`,
    });
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <nav className="text-xs uppercase tracking-widest text-muted-foreground">
          <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <Link to={`/shop?category=${product.category}`} className="hover:text-foreground transition-colors">
            {product.category}
          </Link>
        </nav>
      </div>

      <section className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Gallery */}
        <div>
          <div className="bg-background overflow-hidden">
            <img
              src={product.gallery[activeImage]}
              alt={product.name}
              width={800}
              height={800}
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-3 mt-3">
            {product.gallery.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={cn(
                  "overflow-hidden border transition-colors",
                  index === activeImage ? "border-foreground" : "border-transparent hover:border-border"
                )}
                aria-label={`View image ${index + 1}`}
              >
                <img
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  loading="lazy"
                  className="w-full aspect-square object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="lg:pt-6">
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{product.category}</p>
          <h1 className="mt-2 text-3xl md:text-4xl font-light text-foreground">{product.name}</h1>

          <div className="mt-4 flex items-center gap-3">
            <span className="text-xl text-foreground">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-base text-muted-foreground/60 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <p className="mt-6 text-muted-foreground leading-relaxed">{product.description}</p>
          <p className="mt-4 text-sm text-muted-foreground">
            <span className="text-foreground">Materials:</span> {product.materials}
          </p>

          {product.sizes && (
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-foreground mb-3">Size</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(option => (
                  <button
                    key={option}
                    onClick={() => setSize(option)}
                    className={cn(
                      "min-w-[56px] px-4 py-2 border text-sm transition-colors",
                      size === option
                        ? "border-foreground bg-foreground text-primary-foreground"
                        : "border-border text-foreground hover:border-foreground"
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8">
            <p className="text-xs uppercase tracking-widest text-foreground mb-3">Quantity</p>
            <QuantitySelector quantity={quantity} onChange={setQuantity} />
          </div>

          <button
            onClick={handleAdd}
            disabled={soldOut}
            className="mt-8 w-full py-4 bg-foreground text-primary-foreground text-sm uppercase tracking-widest hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {soldOut ? "Sold out" : "Add to cart"}
          </button>

          {product.availability && (
            <p className="mt-3 text-xs text-muted-foreground text-center">{product.availability}</p>
          )}

          <div className="mt-10 border-t border-border pt-6 space-y-4">
            <div className="flex gap-3">
              <Truck className="w-4 h-4 mt-1 text-muted-foreground shrink-0" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Free shipping on orders over $200. Pieces are dispatched within 2–3 working days from our
                atelier.
              </p>
            </div>
            <div className="flex gap-3">
              <RotateCcw className="w-4 h-4 mt-1 text-muted-foreground shrink-0" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                30-day returns on unworn pieces in original condition. Return shipping is free within the EU.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <SectionHeading title="You may also like" linkTo="/shop" linkLabel="Shop all" />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map(item => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </section>
    </>
  );
}
