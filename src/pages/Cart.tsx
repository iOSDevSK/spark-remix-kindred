import { Link } from "react-router-dom";
import { X } from "lucide-react";
import QuantitySelector from "@/components/QuantitySelector";
import { useCart } from "@/context/CartContext";

const FREE_SHIPPING_THRESHOLD = 200;

export default function Cart() {
  const { items, updateQuantity, removeItem, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-32 text-center">
        <h1 className="text-4xl font-light text-foreground mb-4">Your cart is empty</h1>
        <p className="text-muted-foreground mb-8">
          Nothing here yet — our new collection is a good place to start.
        </p>
        <Link
          to="/shop"
          className="inline-block px-10 py-3 bg-foreground text-primary-foreground text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
        >
          Continue shopping
        </Link>
      </section>
    );
  }

  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 12;

  return (
    <section className="max-w-7xl mx-auto px-6 pt-16 pb-24">
      <h1 className="text-4xl md:text-5xl font-light text-foreground mb-12">Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12">
        <div className="border-t border-border">
          {items.map(item => (
            <div key={item.id} className="flex gap-5 py-8 border-b border-border">
              <Link to={`/product/${item.slug}`} className="shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="w-24 sm:w-32 aspect-[4/5] object-cover bg-background"
                />
              </Link>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Link
                      to={`/product/${item.slug}`}
                      className="text-base sm:text-lg font-light text-foreground hover:opacity-70 transition-opacity"
                    >
                      {item.name}
                    </Link>
                    {item.size && (
                      <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                        Size {item.size}
                      </p>
                    )}
                    <p className="mt-1 text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    aria-label={`Remove ${item.name}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                  <QuantitySelector
                    quantity={item.quantity}
                    onChange={q => updateQuantity(item.id, q)}
                  />
                  <p className="text-base text-foreground">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}

          <Link
            to="/shop"
            className="inline-block mt-8 text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Continue shopping
          </Link>
        </div>

        <aside className="bg-background p-8 h-fit border border-border">
          <h2 className="text-xl font-light text-foreground mb-6">Order summary</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="text-foreground">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Shipping</span>
              <span className="text-foreground">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
            </div>
          </div>
          <div className="flex justify-between mt-6 pt-4 border-t border-border">
            <span className="text-foreground">Total</span>
            <span className="text-lg text-foreground">${(subtotal + shipping).toFixed(2)}</span>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">Taxes calculated at checkout.</p>
          <Link
            to="/checkout"
            className="mt-6 block w-full py-4 bg-foreground text-primary-foreground text-sm uppercase tracking-widest text-center hover:opacity-90 transition-opacity"
          >
            Proceed to checkout
          </Link>
        </aside>
      </div>
    </section>
  );
}
